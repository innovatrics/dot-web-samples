var TI = Object.defineProperty;
var og = (o) => {
  throw TypeError(o);
};
var PI = (o, i, t) => i in o ? TI(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var b = (o, i, t) => PI(o, typeof i != "symbol" ? i + "" : i, t), ig = (o, i, t) => i.has(o) || og("Cannot " + t);
var w = (o, i, t) => (ig(o, i, "read from private field"), t ? t.call(o) : i.get(o)), P = (o, i, t) => i.has(o) ? og("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), T = (o, i, t, e) => (ig(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var y0, J, ba, ka, Te, ng, Ga, Fi, bn, Ri, Wi, Sa, g0 = {}, Na = [], qI = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Zo = Array.isArray;
function he(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Fa(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function RA(o, i, t) {
  var e, A, n, g = {};
  for (n in i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : g[n] = i[n];
  if (arguments.length > 1 * 6857 + -130 * 41 + -61 * 25 && (g.children = arguments.length > -5538 + 5862 * 1 + -321 ? y0.call(arguments, -13997 + -1 * -13999) : t), typeof o == "function" && o.defaultProps != null)
    for (n in o.defaultProps) void (-7534 * -1 + 9589 + -17123) === g[n] && (g[n] = o.defaultProps[n]);
  return e0(o, g, e, A, null);
}
function e0(o, i, t, e, A) {
  var n = {};
  n.type = o, n.props = i, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void (-83 * -5 + 4555 * 1 + -4970 * 1), n.__c = null, n.constructor = void (-35 * 20 + 7547 + -6847), n.__v = A ?? ++ba, n.__i = -(5289 + -2 * 2644), n.__u = 0;
  var g = n;
  return A == null && J.vnode != null && J.vnode(g), g;
}
function jI() {
  var o = {};
  return o.current = null, o;
}
function HA(o) {
  return o.children;
}
function _A(o, i) {
  this.props = o, this.context = i;
}
function et(o, i) {
  if (i == null) return o.__ ? et(o.__, o.__i + (2 * -3067 + 6978 + -843)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? et(o) : null;
}
function Ra(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = 21 * 157 + -1348 * -1 + -4645; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return Ra(o);
  }
}
function Mi(o) {
  (!o.__d && (o.__d = !(9142 * 1 + 33 * 87 + -12013)) && Te.push(o) && !ao.__r++ || ng !== J.debounceRendering) && ((ng = J.debounceRendering) || Ga)(ao);
}
function ao() {
  var o, i, t, e, A, n, g, a;
  for (Te.sort(Fi); o = Te.shift(); ) o.__d && (i = Te.length, e = void (-1 * -617 + -48 * 145 + 1 * 6343), n = (A = (t = o).__v).__e, g = [], a = [], t.__P && ((e = he({}, A)).__v = A.__v + (744 * 7 + -1033 * 2 + -3141), J.vnode && J.vnode(e), kn(t.__P, e, A, t.__n, t.__P.namespaceURI, 37 + 694 * 4 + -2781 & A.__u ? [n] : null, g, n ?? et(A), !!(32 & A.__u), a), e.__v = A.__v, e.__.__k[e.__i] = e, va(g, e, a), e.__e != n && Ra(e)), Te.length > i && Te.sort(Fi));
  ao.__r = -3414 + 1707 * 2;
}
function Wa(o, i, t, e, A, n, g, a, x, I, C) {
  var r, E, B, Q, d, u = e && e.__k || Na, c = i.length;
  for (t.__d = x, ZI(t, i, u), x = t.__d, r = -3814 * -2 + 2 * -1423 + -4782; r < c; r++) (B = t.__k[r]) != null && typeof B != "boolean" && typeof B != "function" && (E = -(-1 * -5009 + -5352 + 344) === B.__i ? g0 : u[B.__i] || g0, B.__i = r, kn(o, B, E, A, n, g, a, x, I, C), Q = B.__e, B.ref && E.ref != B.ref && (E.ref && Gn(E.ref, null, B), C.push(B.ref, B.__c || Q, B)), d == null && Q != null && (d = Q), 39424 + 104474 * 1 + -78362 & B.__u || E.__k === B.__k ? (x && typeof B.type == "string" && !o.contains(x) && (x = et(E)), x = Ma(B, x, o)) : typeof B.type == "function" && void (9766 * -1 + -2667 + 1 * 12433) !== B.__d ? x = B.__d : Q && (x = Q.nextSibling), B.__d = void (862 * 1 + -8340 + 7478), B.__u &= -(-73853 + 164497 * 2 + -58532));
  t.__d = x, t.__e = d;
}
function ZI(o, i, t) {
  var e, A, n, g, a, x = i.length, I = t.length, C = I, r = 0;
  for (o.__k = [], e = 7610 + 1 * -1012 + -6598 * 1; e < x; e++) g = e + r, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? e0(null, A, null, null, null) : Zo(A) ? e0(HA, { children: A }, null, null, null) : void (-1638 * 4 + -5 * -11 + 89 * 73) === A.constructor && A.__b > -10776 + 2694 * 4 ? e0(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + 1, a = VI(A, t, g, C), A.__i = a, n = null, -(1 * -162 + 289 * 7 + -1860) !== a && (C--, (n = t[a]) && (n.__u |= 296161 + 1 * -165089)), n == null || n.__v === null ? (a == -1 && r--, typeof A.type != "function" && (A.__u |= -145 * 215 + 4 * 16798 + 7 * 4217)) : a !== g && (a == g - (6584 + 1 * 9673 + -16256) ? r = a - g : a == g + (-571 + -1315 * -1 + -743 * 1) ? r++ : a > g ? C > x - g ? r += a - g : r-- : a < g && r++, a !== e + r && (A.__u |= 5 * -17018 + -108332 + 258958))) : (n = t[g]) && n.key == null && n.__e && !(207 * 677 + -2 * -32885 + -1 * 74837 & n.__u) && (n.__e == o.__d && (o.__d = et(n)), vi(n, n, !(-5 * 1820 + 6719 + 2382)), t[g] = null, C--);
  if (C)
    for (e = -239 * 13 + 4921 * -2 + -1 * -12949; e < I; e++) (n = t[e]) != null && -535 * -5 + -9786 + 7111 == (38993 * -2 + 80644 + -5837 * -22 & n.__u) && (n.__e == o.__d && (o.__d = et(n)), vi(n, n));
}
function Ma(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -9122 + -266 * 14 + 12846; e && A < e.length; A++) e[A] && (e[A].__ = o, i = Ma(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -9575 + -259 * -37 === i.nodeType);
  return i;
}
function ye(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (Zo(o) ? o.some(function(t) {
    ye(t, i);
  }) : i.push(o)), i;
}
function VI(o, i, t, e) {
  var A = o.key, n = o.type, g = t - (-115 * -85 + -526 * -17 + -18716), a = t + (719 * -11 + 482 * 11 + 2608), x = i[t];
  if (x === null || x && A == x.key && n === x.type && 6 * -1473 + -8158 + 16996 == (131072 & x.__u)) return t;
  if (e > (x != null && -1791 * 3 + -9 * -206 + 3519 == (131072 & x.__u) ? 1 : -614 + 3 * -1353 + 1 * 4673)) for (; g >= 1 * 6165 + 3166 * -1 + 2999 * -1 || a < i.length; ) {
    if (g >= 85 + -50 * 50 + 2415) {
      if ((x = i[g]) && -1881 + -209 * -9 == (60865 + 70207 * 1 & x.__u) && A == x.key && n === x.type) return g;
      g--;
    }
    if (a < i.length) {
      if ((x = i[a]) && 13667 + 173 * -79 == (1 * 154839 + 10391 * 3 + -54940 & x.__u) && A == x.key && n === x.type) return a;
      a++;
    }
  }
  return -(-1225 + -7307 * 1 + 8533);
}
function gg(o, i, t) {
  i[-4937 * 1 + 7667 + -2730] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || qI.test(i) ? t : t + "px";
}
function S0(o, i, t, e, A) {
  var n;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || gg(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || gg(o.style, i, t[i]);
    }
  else if (i[7576 + 7576 * -1] === "o" && i[-8412 + -4223 * -1 + -2 * -2095] === "n") n = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(1181 + 7883 * 1 + -9062) : i.slice(2), o.l || (o.l = {}), o.l[i + n] = t, t ? e ? t.u = e.u : (t.u = bn, o.addEventListener(i, n ? Wi : Ri, n)) : o.removeEventListener(i, n ? Wi : Ri, n);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-6420 + -9865 * -1 + -3444) === t && i[1 * -4975 + 6037 * 1 + -1058] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && 5083 + -24 * -205 + -10002 == t ? "" : t));
  }
}
function ag(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = bn++;
      else if (i.t < t.u) return;
      return t(J.event ? J.event(i) : i);
    }
  };
}
function kn(o, i, t, e, A, n, g, a, x, I) {
  var C, r, E, B, Q, d, u, c, f, p, k, F, v, S, X, vA, iA = i.type;
  if (void (7619 + -32 * -163 + 2567 * -5) !== i.constructor) return null;
  -467 * -8 + -3 * 283 + -2759 & t.__u && (x = !!(5939 + -179 * 33 & t.__u), n = [a = i.__e = t.__e]), (C = J.__b) && C(i);
  A: if (typeof iA == "function") try {
    if (c = i.props, f = "prototype" in iA && iA.prototype.render, p = (C = iA.contextType) && e[C.__c], k = C ? p ? p.props.value : C.__ : e, t.__c ? u = (r = i.__c = t.__c).__ = r.__E : (f ? i.__c = r = new iA(c, k) : (i.__c = r = new _A(c, k), r.constructor = iA, r.render = XI), p && p.sub(r), r.props = c, r.state || (r.state = {}), r.context = k, r.__n = e, E = r.__d = !(4703 * 2 + -8281 + -1125 * 1), r.__h = [], r._sb = []), f && r.__s == null && (r.__s = r.state), f && iA.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = he({}, r.__s)), he(r.__s, iA.getDerivedStateFromProps(c, r.__s))), B = r.props, Q = r.state, r.__v = i, E) f && iA.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), f && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (f && iA.getDerivedStateFromProps == null && c !== B && r.componentWillReceiveProps != null && r.componentWillReceiveProps(c, k), !r.__e && (r.shouldComponentUpdate != null && !(6140 + -41 * 66 + -3433) === r.shouldComponentUpdate(c, r.__s, k) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (r.props = c, r.state = r.__s, r.__d = !(5392 + 493 * -7 + -10 * 194)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(TA) {
          TA && (TA.__ = i);
        }), F = 89 * -55 + -1 * 7242 + 12137; F < r._sb.length; F++) r.__h.push(r._sb[F]);
        r._sb = [], r.__h.length && g.push(r);
        break A;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(c, r.__s, k), f && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(B, Q, d);
      });
    }
    if (r.context = k, r.props = c, r.__P = o, r.__e = !(5861 + -71 * -139 + 749 * -21), v = J.__r, S = 4172 + -3 * 3035 + 1 * 4933, f) {
      for (r.state = r.__s, r.__d = !(2887 * -1 + 8673 + -5785), v && v(i), C = r.render(r.props, r.state, r.context), X = -145 + 6 * 1303 + -7673; X < r._sb.length; X++) r.__h.push(r._sb[X]);
      r._sb = [];
    } else do
      r.__d = !(-142 * 41 + 3698 + 2125), v && v(i), C = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++S < 5035 * -1 + 2702 + -3 * -786);
    r.state = r.__s, r.getChildContext != null && (e = he(he({}, e), r.getChildContext())), f && !E && r.getSnapshotBeforeUpdate != null && (d = r.getSnapshotBeforeUpdate(B, Q)), Wa(o, Zo(vA = C != null && C.type === HA && C.key == null ? C.props.children : C) ? vA : [vA], i, t, e, A, n, g, a, x, I), r.base = i.__e, i.__u &= -(5057 + 102 * -48), r.__h.length && g.push(r), u && (r.__E = r.__ = null);
  } catch (TA) {
    i.__v = null, x || n != null ? (i.__e = a, i.__u |= x ? 7987 + -3 * 2609 : 17900 + 2 * -8934, n[n.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), J.__e(TA, i, t);
  }
  else n == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = _I(t.__e, i, t, e, A, n, g, x, I);
  (C = J.diffed) && C(i);
}
function va(o, i, t) {
  i.__d = void (113 * -73 + -9440 + 49 * 361);
  for (var e = 5 * -628 + 6025 + 577 * -5; e < t.length; e++) Gn(t[e], t[++e], t[++e]);
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
function _I(o, i, t, e, A, n, g, a, x) {
  var I, C, r, E, B, Q, d, u = t.props, c = i.props, f = i.type;
  if (f === "svg" ? A = "http://www.w3.org/2000/svg" : f === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (I = 0; I < n.length; I++) if ((B = n[I]) && "setAttribute" in B == !!f && (f ? B.localName === f : -3120 * -1 + 5747 + -8864 === B.nodeType)) {
      o = B, n[I] = null;
      break;
    }
  }
  if (o == null) {
    if (f === null) return document.createTextNode(c);
    o = document.createElementNS(A, f, c.is && c), n = null, a = !(95 * -61 + 3936 + 1860);
  }
  if (f === null) u === c || a && o.data === c || (o.data = c);
  else {
    if (n = n && y0.call(o.childNodes), u = t.props || g0, !a && n != null)
      for (u = {}, I = -3166 + 2 * 2098 + -1030; I < o.attributes.length; I++) u[(B = o.attributes[I]).name] = B.value;
    for (I in u) if (B = u[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") r = B;
      else if (I !== "key" && !(I in c)) {
        if (I == "value" && "defaultValue" in c || I == "checked" && "defaultChecked" in c) continue;
        S0(o, I, null, B, A);
      }
    }
    for (I in c) B = c[I], I == "children" ? E = B : I == "dangerouslySetInnerHTML" ? C = B : I == "value" ? Q = B : I == "checked" ? d = B : I === "key" || a && typeof B != "function" || u[I] === B || S0(o, I, B, u[I], A);
    if (C) a || r && (C.__html === r.__html || C.__html === o.innerHTML) || (o.innerHTML = C.__html), i.__k = [];
    else if (r && (o.innerHTML = ""), Wa(o, Zo(E) ? E : [E], i, t, e, f === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, g, n ? n[1 * -9838 + -8320 + 18158] : t.__k && et(t, 11 * -466 + -5 * 573 + 7991), a, x), n != null)
      for (I = n.length; I--; ) n[I] != null && Fa(n[I]);
    a || (I = "value", void (-6079 + -1 * -6079) !== Q && (Q !== o[I] || f === "progress" && !Q || f === "option" && Q !== u[I]) && S0(o, I, Q, u[I], A), I = "checked", void (-4 * -307 + -3137 + 1909) !== d && d !== o[I] && S0(o, I, d, u[I], A));
  }
  return o;
}
function Gn(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    J.__e(e, t);
  }
}
function vi(o, i, t) {
  var e, A;
  if (J.unmount && J.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Gn(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      J.__e(n, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = 2816 + -3 * -309 + -3743; A < e.length; A++) e[A] && vi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || Fa(o.__e), o.__c = o.__ = o.__e = o.__d = void (6805 + 2 * 3209 + -13223);
}
function XI(o, i, t) {
  return this.constructor(o, t);
}
function Le(o, i, t) {
  var e, A, n, g;
  J.__ && J.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, n = [], g = [], kn(i, o = (!e && t || i).__k = RA(HA, null, [o]), A || g0, g0, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? y0.call(i.childNodes) : null, n, !e && t ? t : A ? A.__e : i.firstChild, e, g), va(n, o, g);
}
function Sn(o, i) {
  Le(o, i, Sn);
}
function Nn(o, i, t) {
  var e, A, n, g, a = he({}, o.props);
  for (n in o.type && o.type.defaultProps && (g = o.type.defaultProps), i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : a[n] = void (239 * 4 + 1512 + -2468) === i[n] && void (-1 * 4547 + 5813 + -1266) !== g ? g[n] : i[n];
  return arguments.length > 826 * 5 + 3997 * 1 + -8125 && (a.children = arguments.length > -3128 + 22 * -400 + -3977 * -3 ? y0.call(arguments, -82 * -54 + 1220 + -5646) : t), e0(o.type, a, e || o.key, A || o.ref, null);
}
function nt(o, i) {
  var t = { __c: i = "__cC" + Sa++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, n;
    return this.getChildContext || (A = [], (n = {})[i] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(g) {
      this.props.value !== g.value && A.some(function(a) {
        a.__e = !0, Mi(a);
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
y0 = Na.slice, J = { __e: function(o, i, t, e) {
  for (var A, n, g; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(o)), g = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), g = A.__d), g) return A.__E = A;
  } catch (a) {
    o = a;
  }
  throw o;
} }, ba = 5115 + -1 * 367 + 4 * -1187, ka = function(o) {
  return o != null && o.constructor == null;
}, _A.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof o == "function" && (o = o(he({}, t), this.props)), o && he(t, o), o != null && this.__v && (i && this._sb.push(i), Mi(this));
}, _A.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(5 * 167 + 1 * -5255 + 340 * 13), o && this.__h.push(o), Mi(this));
}, _A.prototype.render = HA, Te = [], Ga = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Fi = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, ao.__r = 3 * -699 + -6817 + 8914 * 1, bn = 1649 + 1 * -1649, Ri = ag(!(244 * -39 + -2436 + 11953)), Wi = ag(!(-5 * -204 + -1172 * 3 + 2496)), Sa = 0;
function Fn() {
  return (Fn = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = -1 * 3389 + -1 * -5995 + -2605; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var zI = ["context", "children"];
function $I(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var n, g, a = {}, x = Object.keys(e);
    for (g = -114 * -79 + 8608 + -17614; g < x.length; g++) A.indexOf(n = x[g]) >= 0 || (a[n] = e[n]);
    return a;
  }(o, zI);
  return Nn(i, t);
}
function Ar() {
  var o = {};
  o.detail = {}, o.bubbles = !0, o.cancelable = !(-1 * 5318 + 9668 + -4350);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = RA($I, Fn({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (e.nodeType === 3) return e.data;
    if (-296 * 7 + 8487 + -6414 !== e.nodeType) return null;
    var n = [], g = {}, a = 1 * 2507 + -521 + -1986, x = e.attributes, I = e.childNodes;
    for (a = x.length; a--; ) x[a].name !== "slot" && (g[x[a].name] = x[a].value, g[La(x[a].name)] = x[a].value);
    for (a = I.length; a--; ) {
      var C = t(I[a], null), r = I[a].slot;
      r ? g[r] = RA(xg, { name: r }, C) : n[a] = C;
    }
    var E = A ? RA(xg, null, n) : n;
    return RA(A || e.nodeName.toLowerCase(), g, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Sn : Le)(this._vdom, this._root);
}
function La(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function er(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (2 * -4621 + 61 * -88 + 14610), e[La(o)] = t, this._vdom = Nn(this._vdom, e), Le(this._vdom, this._root);
  }
}
function tr() {
  Le(this._vdom = null, this._root);
}
function xg(o, i) {
  var t = this;
  return RA("slot", Fn({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function or(o, i, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = o, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Ar, A.prototype.attributeChangedCallback = er, A.prototype.disconnectedCallback = tr, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom.props[n];
    }, set: function(g) {
      this._vdom ? this.attributeChangedCallback(n, null, g) : (this._props || (this._props = {}), this._props[n] = g, this.connectedCallback());
      var a = typeof g;
      g != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, g);
    } });
  }), customElements.define(i, A);
}
var ir = -1032 + 1270 * 5 + -5318;
function D(o, i, t, e, A, n) {
  i || (i = {});
  var g, a, x = i;
  if ("ref" in x)
    for (a in x = {}, i) a == "ref" ? g = i[a] : x[a] = i[a];
  var I = {};
  I.type = o, I.props = x, I.key = t, I.ref = g, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (887 + -1 * 887), I.__c = null, I.constructor = void (-7 * -706 + -1717 + 15 * -215), I.__v = --ir, I.__i = -(11 * -431 + 8878 + -4136), I.__u = 0, I.__source = A, I.__self = n;
  var C = I;
  if (typeof o == "function" && (g = o.defaultProps))
    for (a in g) void (-1 * 5431 + 1 * 9895 + -4464) === x[a] && (x[a] = g[a]);
  return J.vnode && J.vnode(C), C;
}
var OA = function() {
  return OA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, OA.apply(this, arguments);
};
function yt(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, n; e < A; e++)
    (n || !(e in i)) && (n || (n = Array.prototype.slice.call(i, 0, e)), n[e] = i[e]);
  return o.concat(n || Array.prototype.slice.call(i));
}
function nr(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var gr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ar = nr(function(o) {
  return gr.test(o) || o.charCodeAt(761 * 3 + -1 * -7075 + -9358) === 1 * -89 + -3 * -1356 + -3868 && o.charCodeAt(-8568 + 8731 * 1 + -2 * 81) === 127 * -31 + -8676 + 12723 && o.charCodeAt(2017 * 1 + 1201 + -3216) < -6308 + 1 * 4783 + 1616;
}), Je, _, Ci, Ig, Dt = 6914 * 1 + 2628 + -1 * 9542, Ja = [], z = J, rg = z.__b, Cg = z.__r, cg = z.diffed, Bg = z.__c, sg = z.unmount, Qg = z.__;
function Ft(o, i) {
  z.__h && z.__h(_, o, Dt || i), Dt = -7211 * 1 + -5613 + -458 * -28;
  var t = {};
  t.__ = [], t.__h = [];
  var e = _.__H || (_.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function WA(o) {
  return Dt = 887 * -1 + -3757 + 5 * 929, Rn(Oa, o);
}
function Rn(o, i, t) {
  var e = Ft(Je++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : Oa(void (-6060 * 1 + -1 * -1063 + 4997), i), function(a) {
    var x = e.__N ? e.__N[0] : e.__[0], I = e.t(x, a);
    x !== I && (e.__N = [I, e.__[2976 + 272 * 17 + -1 * 7599]], e.__c.setState({}));
  }], e.__c = _, !_.u)) {
    var A = function(a, x, I) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (C.every(function(E) {
        return !E.__N;
      })) return !n || n.call(this, a, x, I);
      var r = !(33 * 89 + -8028 + 2 * 2546);
      return C.forEach(function(E) {
        if (E.__N) {
          var B = E.__[0];
          E.__ = E.__N, E.__N = void 0, B !== E.__[0] && (r = !0);
        }
      }), !(!r && e.__c.props === a) && (!n || n.call(this, a, x, I));
    };
    _.u = !(9044 + 22 * 12 + -9308);
    var n = _.shouldComponentUpdate, g = _.componentWillUpdate;
    _.componentWillUpdate = function(a, x, I) {
      if (this.__e) {
        var C = n;
        n = void (1 * -9449 + -9620 + -19069 * -1), A(a, x, I), n = C;
      }
      g && g.call(this, a, x, I);
    }, _.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function eA(o, i) {
  var t = Ft(Je++, 3);
  !z.__s && Wn(t.__H, i) && (t.__ = o, t.i = i, _.__H.__h.push(t));
}
function Rt(o, i) {
  var t = Ft(Je++, 4);
  !z.__s && Wn(t.__H, i) && (t.__ = o, t.i = i, _.__h.push(t));
}
function zA(o) {
  return Dt = -8023 + -52 * -58 + -28 * -179, MA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function Ua(o, i, t) {
  Dt = -9911 + 85 * 80 + 3117, Rt(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void (-635 * -7 + -2679 + 1 * -1766);
  }, t == null ? t : t.concat(o));
}
function MA(o, i) {
  var t = Ft(Je++, 7);
  return Wn(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function De(o, i) {
  return Dt = -71 * 11 + -69 * 79 + 6240, MA(function() {
    return o;
  }, i);
}
function me(o) {
  var i = _.context[o.__c], t = Ft(Je++, -8242 + 1607 * -5 + -479 * -34);
  return t.c = o, i ? (t.__ == null && (t.__ = !(2924 + -611 * -14 + -1913 * 6), i.sub(_)), i.props.value) : o.__;
}
function xo(o, i) {
  z.useDebugValue && z.useDebugValue(i ? i(o) : o);
}
function Ya() {
  var o = Ft(Je++, 11);
  if (!o.__) {
    for (var i = _.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [834 + 439 * -5 + -1 * -1361, 5861 + -3174 * 1 + -2687]);
    o.__ = "P" + t[0] + "-" + t[1567 * 1 + 1969 * 2 + -5504]++;
  }
  return o.__;
}
function xr() {
  for (var o; o = Ja.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(O0), o.__H.__h.forEach(Li), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], z.__e(i, o.__v);
  }
}
z.__b = function(o) {
  _ = null, rg && rg(o);
}, z.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), Qg && Qg(o, i);
}, z.__r = function(o) {
  Cg && Cg(o), Je = -3848 + 81 * -81 + 10409;
  var i = (_ = o.__c).__H;
  i && (Ci === _ ? (i.__h = [], _.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-3 * 881 + -1621 + 4264);
  })) : (i.__h.forEach(O0), i.__h.forEach(Li), i.__h = [], Je = -2 * -4201 + 6257 + -14659)), Ci = _;
}, z.diffed = function(o) {
  cg && cg(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (1543 * -5 + 2789 * -1 + 5 * 2101 !== Ja.push(i) && Ig === z.requestAnimationFrame || ((Ig = z.requestAnimationFrame) || Ir)(xr)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-11238 + -2 * -5619);
  })), Ci = _ = null;
}, z.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(O0), t.__h = t.__h.filter(function(e) {
        return !e.__ || Li(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], z.__e(e, t.__v);
    }
  }), Bg && Bg(o, i);
}, z.unmount = function(o) {
  sg && sg(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      O0(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (-1 * 9929 + -16 * 295 + 14649), i && z.__e(i, t.__v));
};
var Eg = typeof requestAnimationFrame == "function";
function Ir(o) {
  var i, t = function() {
    clearTimeout(e), Eg && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  Eg && (i = requestAnimationFrame(t));
}
function O0(o) {
  var i = _, t = o.__c;
  typeof t == "function" && (o.__c = void (927 + 927 * -1), t()), _ = i;
}
function Li(o) {
  var i = _;
  o.__c = o.__(), _ = i;
}
function Wn(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function Oa(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function Ka(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Ji(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(-17463 + -1 * -17463);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(5168 + 76 * -68);
  return !(3353 * -1 + -7757 + -11111 * -1);
}
function Ui(o, i) {
  this.props = o, this.context = i;
}
function rr(o, i) {
  function t(A) {
    var n = this.props.ref, g = n == A.ref;
    return !g && n && (n.call ? n(null) : n.current = null), i ? !i(this.props, A) || !g : Ji(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, RA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(3848 + -389 * -4 + 7 * -772), e.__f = !(-4136 + -269 * 11 + 1 * 7095), e;
}
(Ui.prototype = new _A()).isPureReactComponent = !(-920 * 1 + -1 * -2753 + -1833), Ui.prototype.shouldComponentUpdate = function(o, i) {
  return Ji(this.props, o) || Ji(this.state, i);
};
var dg = J.__b;
J.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), dg && dg(o);
};
var Cr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -1265 + 49 * 86 + 13 * 74;
function Ha(o) {
  function i(t) {
    var e = Ka({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = Cr, i.render = i, i.prototype.isReactComponent = i.__f = !(36 * 266 + -4109 * 1 + 1 * -5467), i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var lg = function(o, i) {
  return o == null ? null : ye(ye(o).map(i));
}, cr = { map: lg, forEach: lg, count: function(o) {
  return o ? ye(o).length : 0;
}, only: function(o) {
  var i = ye(o);
  if (i.length !== 1) throw "Children.only";
  return i[11 * 330 + 177 * -50 + 45 * 116];
}, toArray: ye }, Br = J.__e;
J.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, n = i; n = n.__; ) if ((A = n.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  Br(o, i, t, e);
};
var ug = J.unmount;
function Ta(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = Ka({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return Ta(e, i, t);
  })), o;
}
function Pa(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return Pa(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(8180 + 4871 * 2 + -17922), o.__c.__P = t)), o;
}
function K0() {
  this.__u = 0, this.t = null, this.__b = null;
}
function qa(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function sr(o) {
  var i, t, e;
  function A(n) {
    if (i || (i = o()).then(function(g) {
      t = g.default || g;
    }, function(g) {
      e = g;
    }), e) throw e;
    if (!t) throw i;
    return RA(t, n);
  }
  return A.displayName = "Lazy", A.__f = !(-194 * -46 + -422 * 11 + -2141 * 2), A;
}
function Pt() {
  this.u = null, this.o = null;
}
J.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && 32 & o.__u && (o.type = null), ug && ug(o);
}, (K0.prototype = new _A()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = qa(e.__v), n = !1, g = function() {
    n || (n = !(-863 * -6 + 6832 + 6005 * -2), t.__R = null, A ? A(a) : a());
  };
  t.__R = g;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var x = e.state.__a;
        e.__v.__k[-451 * 19 + -134 * 26 + 12053] = Pa(x, x.__c.__P, x.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.t.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 1521 + 15 * 544 + -9649 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-7350 + -1 * -3589 + 3761 * 1] }), o.then(g, g);
}, K0.prototype.componentWillUnmount = function() {
  this.t = [];
}, K0.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-3 * -2795 + 8912 + -17297].__c;
      this.__v.__k[0] = Ta(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && RA(HA, null, o.fallback);
  return A && (A.__u &= -33), [RA(HA, null, i.__a ? null : o.children), A];
};
var fg = function(o, i, t) {
  if (++t[-6113 * 1 + -8678 + 14792] === t[1 * 9467 + 2148 + 5 * -2323] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[-6786 + -9341 * -1 + -2555] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 5596 + 1 * 6565 + -12158; ) t.pop()();
    if (t[-1142 * -7 + -2314 + -631 * 9] < t[-5311 + 2 * 358 + -1 * -4595]) break;
    o.u = t = t[2];
  }
};
function Qr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Er(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    Le(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(17 * 557 + -5242 + -4227);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -13 * -206 + -1130 * -7 + -10587, 9258 + -2 * 1495 + -1 * 6267), i.i.removeChild(e);
  } }), Le(RA(Qr, { context: i.context }, o.__v), i.l);
}
function dr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = RA(Er, t);
  return e.containerInfo = i, e;
}
(Pt.prototype = new _A()).__a = function(o) {
  var i = this, t = qa(i.__v), e = i.o.get(o);
  return e[-1 * -968 + -3541 + 2573]++, function(A) {
    var n = function() {
      i.props.revealOrder ? (e.push(A), fg(i, o, e)) : A();
    };
    t ? t(n) : n();
  };
}, Pt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = ye(o.children);
  o.revealOrder && o.revealOrder[-2606 + 5 * 530 + -11 * 4] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-4912 * 1 + 9787 + -2 * 2437, 0, this.u]);
  return o.children;
}, Pt.prototype.componentDidUpdate = Pt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    fg(o, t, i);
  });
};
var ja = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 23670 + 60747 * 1 + -24314, lr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ur = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, fr = /[A-Z0-9]/g, hr = typeof document < "u", pr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function yr(o, i, t) {
  return i.__k == null && (i.textContent = ""), Le(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function Dr(o, i, t) {
  return Sn(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
_A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(_A.prototype, o, { configurable: !(4 * -2281 + -15 * -164 + 56 * 119), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(7308 + -285 * 29 + 957), t.writable = !(-5537 + -9391 * 1 + 2 * 7464), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var hg = J.event;
function mr() {
}
function wr() {
  return this.cancelBubble;
}
function br() {
  return this.defaultPrevented;
}
J.event = function(o) {
  return hg && (o = hg(o)), o.persist = mr, o.isPropagationStopped = wr, o.isDefaultPrevented = br, o.nativeEvent = o;
};
var H0 = {};
H0.enumerable = !(-5276 + 6 * 1027 + -885), H0.configurable = !(1 * -1138 + -992 + 2130), H0.get = function() {
  return this.class;
};
var Mn, kr = H0, pg = J.vnode;
J.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var n in t) {
      var g = t[n];
      if (!(n === "value" && "defaultValue" in t && g == null || hr && n === "children" && e === "noscript" || n === "class" || n === "className")) {
        var a = n.toLowerCase();
        n === "defaultValue" && "value" in t && t.value == null ? n = "value" : n === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !(17348 + -209 * 83) : a === "ondoubleclick" ? n = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || pr(t.type) ? a === "onfocus" ? n = "onfocusin" : a === "onblur" ? n = "onfocusout" : ur.test(n) ? n = a : -(24 * 229 + -9087 + 3592) === e.indexOf("-") && lr.test(n) ? n = n.replace(fr, "-$&").toLowerCase() : g === null && (g = void (1831 * -4 + 9453 + -2129)) : a = n = "oninput", a === "oninput" && A[n = a] && (n = "oninputCapture"), A[n] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = ye(t.children).forEach(function(x) {
      x.props.selected = -(-7 * 947 + -5477 * 1 + -1 * -12107) != A.value.indexOf(x.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = ye(t.children).forEach(function(x) {
      x.props.selected = A.multiple ? -(-19 * 157 + 3 * -247 + -3725 * -1) != A.defaultValue.indexOf(x.props.value) : A.defaultValue == x.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", kr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = ja, pg && pg(o);
};
var yg = J.__r;
J.__r = function(o) {
  yg && yg(o), Mn = o.__c;
};
var Dg = J.diffed;
J.diffed = function(o) {
  Dg && Dg(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Mn = null;
};
var lA = {};
lA.readContext = function(o) {
  return Mn.__n[o.__c].props.value;
}, lA.useCallback = De, lA.useContext = me, lA.useDebugValue = xo, lA.useDeferredValue = Xa, lA.useEffect = eA, lA.useId = Ya, lA.useImperativeHandle = Ua, lA.useInsertionEffect = $a, lA.useLayoutEffect = Rt, lA.useMemo = MA, lA.useReducer = Rn, lA.useRef = zA, lA.useState = WA, lA.useSyncExternalStore = Ax, lA.useTransition = za;
var Za = {};
Za.current = lA;
var Va = {};
Va.ReactCurrentDispatcher = Za;
var Gr = Va;
function Sr(o) {
  return RA.bind(null, o);
}
function Vo(o) {
  return !!o && o.$$typeof === ja;
}
function Nr(o) {
  return Vo(o) && o.type === HA;
}
function Fr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Rr(o) {
  return Vo(o) ? Nn.apply(null, arguments) : o;
}
function Wr(o) {
  return !!o.__k && (Le(null, o), !(-501 + -1 * 5674 + -1235 * -5));
}
function Mr(o) {
  return o && (o.base || 3 * -1953 + -1 * 9957 + 15817 === o.nodeType && o) || null;
}
var vr = function(o, i) {
  return o(i);
}, Lr = function(o, i) {
  return o(i);
}, Jr = HA;
function _a(o) {
  o();
}
function Xa(o) {
  return o;
}
function za() {
  return [!(-7749 + -2197 * -1 + 5553), _a];
}
var $a = Rt, Ur = Vo;
function Ax(o, i) {
  var t = i(), e = WA({ h: { __: t, v: i } }), A = e[5612 + -4 * 1403].h, n = e[-1 * 1779 + 8670 + -6890];
  return Rt(function() {
    A.__ = t, A.v = i, ci(A) && n({ h: A });
  }, [o, t, i]), eA(function() {
    return ci(A) && n({ h: A }), o(function() {
      ci(A) && n({ h: A });
    });
  }, [o]), t;
}
function ci(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var n = e();
    return !((i = A) === (t = n) && (7649 * -1 + 2713 + 4936 !== i || (-17 * 173 + -8491 * -1 + -5549 * 1) / i == (9614 + -1 * -1129 + -10742) / t) || i != i && t != t);
  } catch {
    return !(29 * 52 + 39 * -47 + 325);
  }
}
var M = {};
M.useState = WA, M.useId = Ya, M.useReducer = Rn, M.useEffect = eA, M.useLayoutEffect = Rt, M.useInsertionEffect = $a, M.useTransition = za, M.useDeferredValue = Xa, M.useSyncExternalStore = Ax, M.startTransition = _a, M.useRef = zA, M.useImperativeHandle = Ua, M.useMemo = MA, M.useCallback = De, M.useContext = me, M.useDebugValue = xo, M.version = "17.0.2", M.Children = cr, M.render = yr, M.hydrate = Dr, M.unmountComponentAtNode = Wr, M.createPortal = dr, M.createElement = RA, M.createContext = nt, M.createFactory = Sr, M.cloneElement = Rr, M.createRef = jI, M.Fragment = HA, M.isValidElement = Vo, M.isElement = Ur, M.isFragment = Nr, M.isMemo = Fr, M.findDOMNode = Mr, M.Component = _A, M.PureComponent = Ui, M.memo = rr, M.forwardRef = Ha, M.flushSync = Lr, M.unstable_batchedUpdates = vr, M.StrictMode = Jr, M.Suspense = K0, M.SuspenseList = Pt, M.lazy = sr, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gr;
var tt = M, Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Or(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Kr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Hr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function Tr(o) {
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
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Yr,
  getAugmentedNamespace: Tr,
  getDefaultExportFromCjs: Or,
  getDefaultExportFromNamespaceIfNotNamed: Hr,
  getDefaultExportFromNamespaceIfPresent: Kr
}, Symbol.toStringTag, { value: "Module" }));
var qr = function(i, t, e, A) {
  var n = e ? e.call(A, i, t) : void 0;
  if (n !== void (-1 * -4438 + -5687 * -1 + 375 * -27)) return !!n;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var g = Object.keys(i), a = Object.keys(t);
  if (g.length !== a.length) return !1;
  for (var x = Object.prototype.hasOwnProperty.bind(t), I = -240 * 8 + -3 * 195 + 2505 * 1; I < g.length; I++) {
    var C = g[I];
    if (!x(C)) return !1;
    var r = i[C], E = t[C];
    if (n = e ? e.call(A, r, E, C) : void (-25 * -371 + 151 * -25 + 500 * -11), n === !1 || n === void (-9163 + 3398 * 2 + -3 * -789) && r !== E) return !1;
  }
  return !0;
};
const jr = Pr.getDefaultExportFromCjs(qr);
var V = "-ms-", t0 = "-moz-", j = "-webkit-", ex = "comm", _o = "rule", vn = "decl", Zr = "@import", tx = "@keyframes", Vr = "@layer", ox = Math.abs, Ln = String.fromCharCode, Yi = Object.assign;
function _r(o, i) {
  return IA(o, 14760 + 6 * -2460) ^ 45 ? (((i << 22 * -268 + 1 * -6188 + -12086 * -1 ^ IA(o, -9775 + 5866 * 1 + 3909)) << 986 + 6 * -164 ^ IA(o, -5101 + -13 * 145 + 6987)) << -1829 + -3 * 2207 + 8452 ^ IA(o, 2897 + 91 * 29 + -5534)) << -13 * -193 + 6414 + 8921 * -1 ^ IA(o, 25 * -27 + 100 * 50 + -4322) : 0;
}
function ix(o) {
  return o.trim();
}
function Ee(o, i) {
  return (o = i.exec(o)) ? o[-1 * -4373 + -318 * -15 + -9143 * 1] : o;
}
function U(o, i, t) {
  return o.replace(i, t);
}
function T0(o, i, t) {
  return o.indexOf(i, t);
}
function IA(o, i) {
  return o.charCodeAt(i) | 1173 * 1 + -5678 + 265 * 17;
}
function mt(o, i, t) {
  return o.slice(i, t);
}
function xe(o) {
  return o.length;
}
function nx(o) {
  return o.length;
}
function qt(o, i) {
  return i.push(o), o;
}
function Xr(o, i) {
  return o.map(i).join("");
}
function mg(o, i) {
  return o.filter(function(t) {
    return !Ee(t, i);
  });
}
var Xo = -1 * -8101 + 1 * -3779 + 1 * -4321, wt = 2469 + -7 * -842 + -8362, gx = 5319 + -2 * -3095 + -11509, $A = 14 * -425 + 2199 + -121 * -31, nA = 0, Wt = "";
function zo(o, i, t, e, A, n, g, a) {
  var x = {};
  return x.value = o, x.root = i, x.parent = t, x.type = e, x.props = A, x.children = n, x.line = Xo, x.column = wt, x.length = g, x.return = "", x.siblings = a, x;
}
function ke(o, i) {
  return Yi(zo("", null, null, "", null, null, -2549 + -308 * 7 + 4705, o.siblings), o, { length: -o.length }, i);
}
function It(o) {
  for (; o.root; ) o = ke(o.root, { children: [o] });
  qt(o, o.siblings);
}
function zr() {
  return nA;
}
function $r() {
  return nA = $A > 6281 + -6294 * -1 + 5 * -2515 ? IA(Wt, --$A) : 1161 * -5 + -8778 + -3 * -4861, wt--, nA === 7474 * -1 + -49 * -62 + 4446 && (wt = -1189 * -5 + -9318 + 3374 * 1, Xo--), nA;
}
function ie() {
  return nA = $A < gx ? IA(Wt, $A++) : -3 * 2285 + -8211 + 15066, wt++, nA === 8190 + -20 * 409 && (wt = 6670 + 9658 * -1 + 7 * 427, Xo++), nA;
}
function $e() {
  return IA(Wt, $A);
}
function P0() {
  return $A;
}
function $o(o, i) {
  return mt(Wt, o, i);
}
function Oi(o) {
  switch (o) {
    case -7821 + 3636 * 1 + 1395 * 3:
    case -2 * 3382 + -2792 + 9565 * 1:
    case -187 * -19 + 65 * 10 + 1 * -4193:
    case 13:
    case -3132 + -8059 * 1 + 11223:
      return 4299 * 2 + 1 * 5491 + -14084;
    case -457 * -7 + -6364 + 3198:
    case 1 * -137 + 377 + -197:
    case 4405 + 1 * -4469 + 108:
    case 12237 + -5 * 2438:
    case 1 * 2918 + 1 * 433 + 299 * -11:
    case 18030 + -8983 * 2:
    case 2 * -1174 + -5810 + 8284:
    case -285 * 28 + 9696 + -1657 * 1:
    case 1 * -4483 + 1 * 5131 + 5 * -105:
    case 1526 + 1 * -5548 + 4147:
      return 5095 * 1 + -7754 + 2663 * 1;
    case -31 * -97 + -5 * -1473 + 9 * -1146:
      return 34 * 29 + 7245 + -8228;
    case 9 * 922 + 9898 + -18162:
    case -6022 + 1 * -6493 + 12554 * 1:
    case -12810 + -25 * -514:
    case -14 * 333 + -3027 + 389 * 20:
      return 4965 * 1 + -1679 + -1642 * 2;
    case 1 * 8556 + 4493 * -1 + -4022:
    case 4357 * -1 + 7840 + -3390:
      return -1035 * 8 + 7475 + -2 * -403;
  }
  return -8817 + 9 * -565 + 13902;
}
function AC(o) {
  return Xo = wt = -16832 + -181 * -93, gx = xe(Wt = o), $A = -1 * -6544 + 8673 + -1 * 15217, [];
}
function eC(o) {
  return Wt = "", o;
}
function Bi(o) {
  return ix($o($A - (3 * -542 + 439 * -11 + 6456), Ki(o === 1748 * 2 + -4589 * -2 + -12583 ? o + (-61 * -13 + 8269 + -9060) : o === -1929 + -22 * 192 + 1 * 6193 ? o + (14 * 173 + 7660 + -593 * 17) : o)));
}
function tC(o) {
  for (; (nA = $e()) && nA < 7 * -1246 + 850 + 7905; ) ie();
  return Oi(o) > -1963 + 2534 * 1 + -569 || Oi(nA) > -418 * 13 + -7555 + 28 * 464 ? "" : " ";
}
function oC(o, i) {
  for (; --i && ie() && !(nA < 429 * -2 + -2 * -2454 + -4002 || nA > 9090 + 19 * 508 + -18640 || nA > 1439 * -2 + -15 * 149 + 5170 && nA < 65 || nA > 70 && nA < -23 * -307 + -9653 + -1 * -2689); ) ;
  return $o(o, P0() + (i < 826 + 121 * 5 + -1425 && $e() == 5267 + -349 * 15 && ie() == -7727 + 7771 * 1 + 6 * -2));
}
function Ki(o) {
  for (; ie(); ) switch (nA) {
    case o:
      return $A;
    case 3788 + 1 * 6515 + -10269:
    case -4688 + 163 * 29:
      o !== -19 * 150 + -6 * 1004 + 8908 && o !== 39 && Ki(nA);
      break;
    case 8330 + -1 * 458 + 178 * -44:
      o === -11 * 241 + 5097 * 1 + -2405 && Ki(o);
      break;
    case 71 * -8 + 7851 * -1 + 8511:
      ie();
      break;
  }
  return $A;
}
function iC(o, i) {
  for (; ie() && o + nA !== -8088 + 574 * 4 + 5839 + (-116 * 40 + -508 + 5158); ) if (o + nA === 42 + (9501 + 1 * -9459) && $e() === -7311 + 5 * 1730 + -646 * 2) break;
  return "/*" + $o(i, $A - (-3 * -562 + 6928 + -8613)) + "*" + Ln(o === -5490 + 113 * 49 ? o : ie());
}
function nC(o) {
  for (; !Oi($e()); ) ie();
  return $o(o, $A);
}
function gC(o) {
  return eC(q0("", null, null, null, [""], o = AC(o), -1888 + -4672 * -1 + 29 * -96, [-3 * -2150 + 9626 * -1 + 3176], o));
}
function q0(o, i, t, e, A, n, g, a, x) {
  for (var I = 0, C = 4926 + 2463 * -2, r = g, E = -1 * 1187 + -9101 + 10288, B = -44 * 103 + -1 * -3027 + 5 * 301, Q = 1 * -3453 + -6345 * -1 + -2892, d = 1 * 5221 + 1 * 6539 + -11759, u = 8553 + -9441 * -1 + -17993 * 1, c = 9463 + -142 * -59 + -8 * 2230, f = 0, p = "", k = A, F = n, v = e, S = p; u; ) switch (Q = f, f = ie()) {
    case 836 * 9 + -202 * 5 + 2158 * -3:
      if (Q != 2 * -3566 + -4 * -1673 + 548 && IA(S, r - (1 * 716 + 3309 + 1 * -4024)) == 6897 * 1 + -379 * 1 + -6460) {
        T0(S += U(Bi(f), "&", "&\f"), "&\f", ox(I ? a[I - (-7 * -1318 + 23 * -256 + -3337 * 1)] : 5283 + 34 * 93 + -8445)) != -(5 * -1341 + 9694 + -9 * 332) && (c = -(6230 + -1 * 6229));
        break;
      }
    case -107 * 72 + -242 * -33 + -2 * 124:
    case 591 * 10 + -1104 + -227 * 21:
    case 91:
      S += Bi(f);
      break;
    case -1151 * -1 + -9098 + 7956:
    case -2559 + 367 * 7:
    case -9010 * 1 + -2 * 1627 + 12277 * 1:
    case 32:
      S += tC(Q);
      break;
    case -3 * 2851 + -19 * 15 + 1 * 8930:
      S += oC(P0() - (-7 * 1163 + 1 * 847 + 7295), 1 * 6932 + 4390 + -11315);
      continue;
    case 1 * -381 + 5459 + -5031:
      switch ($e()) {
        case 1 * -8735 + 2 * -4535 + 17847:
        case -6302 * -1 + -292 * -28 + -14431:
          qt(aC(iC(ie(), P0()), i, t, x), x);
          break;
        default:
          S += "/";
      }
      break;
    case 123 * d:
      a[I++] = xe(S) * c;
    case (5141 + 433 * 9 + 1 * -8913) * d:
    case 3400 + -1 * 5923 + 2582:
    case 1554 * -6 + 2964 + -530 * -12:
      switch (f) {
        case 4104 + 1 * 1145 + -5249:
        case -8179 + -4 * -2076:
          u = -14 * 391 + 5962 * -1 + 11436;
        case 59 + C:
          c == -(-6211 + -11 * -477 + 965) && (S = U(S, /\f/g, "")), B > 0 && xe(S) - r && qt(B > -9650 * 1 + 4537 + -21 * -245 ? bg(S + ";", e, t, r - (9439 + 4147 * -2 + 44 * -26), x) : bg(U(S, " ", "") + ";", e, t, r - (719 * -12 + 2173 * 1 + -1 * -6457), x), x);
          break;
        case -1 * -6721 + 2 * 1549 + -9760:
          S += ";";
        default:
          if (qt(v = wg(S, i, t, I, C, A, a, p, k = [], F = [], r, n), n), f === 421 * 6 + 5563 * -1 + -20 * -158)
            if (C === 0) q0(S, i, v, v, k, n, r, a, F);
            else switch (E === 99 && IA(S, -1697 * 3 + 9891 * -1 + 14985) === 7137 + 1 * -8188 + 387 * 3 ? -5074 + 2971 * 2 + 256 * -3 : E) {
              case -127 * -5 + -1 * -4051 + -4586:
              case 2325 + 1 * -2217:
              case -3419 * -1 + -9 * -582 + 4274 * -2:
              case 2 * 2054 + 9061 + -13054 * 1:
                q0(o, v, v, e && qt(wg(o, v, v, -2268 + 514 * 19 + 2 * -3749, 1234 + -1234 * 1, A, a, p, A, k = [], r, F), F), A, F, r, a, e ? k : F);
                break;
              default:
                q0(S, v, v, v, [""], F, 4258 * 2 + -712 + 1951 * -4, a, F);
            }
      }
      I = C = B = 5742 + -58 * 99, d = c = -8777 + 331 * -6 + -1 * -10764, p = S = "", r = g;
      break;
    case 4149 + -2252 * -1 + -6343:
      r = 1 + xe(S), B = Q;
    default:
      if (d < 8696 + 557 * 7 + -12594) {
        if (f == -6 * -1039 + 2 * -1783 + -2545) --d;
        else if (f == 11 * 233 + -3816 + 2 * 689 && d++ == 5528 + 1 * -3257 + -757 * 3 && $r() == 11444 + -147 * 77) continue;
      }
      switch (S += Ln(f), f * d) {
        case -7829 + 185 * -53 + 17672:
          c = C > -729 + 3 * 71 + -172 * -3 ? -8267 + -9 * -191 + 6549 : (S += "\f", -(-742 + -7 * 1219 + 9276));
          break;
        case -8910 + -242 * -37:
          a[I++] = (xe(S) - 1) * c, c = 1;
          break;
        case -66 * 26 + -1 * 6224 + 8004:
          $e() === 1150 * 4 + 17 * -161 + -1818 && (S += Bi(ie())), E = $e(), C = r = xe(p = S += nC(P0())), f++;
          break;
        case 7 * 1179 + 3152 * 3 + 8 * -2208:
          Q === 45 && xe(S) == 1589 + 41 * 39 + -54 * 59 && (d = -4 * -1277 + 9465 + -14573);
      }
  }
  return n;
}
function wg(o, i, t, e, A, n, g, a, x, I, C, r) {
  for (var E = A - 1, B = A === 0 ? n : [""], Q = nx(B), d = 0, u = 3821 * -2 + 2799 + -29 * -167, c = 9034 + -4517 * 2; d < e; ++d) for (var f = -11 * 418 + 1 * -9562 + 177 * 80, p = mt(o, E + (-43 * 225 + 2222 + -7454 * -1), E = ox(u = g[d])), k = o; f < Q; ++f) (k = ix(u > 1 * 8713 + 415 + 8 * -1141 ? B[f] + " " + p : U(p, /&\f/g, B[f]))) && (x[c++] = k);
  return zo(o, i, t, A === -9295 + -5 * 973 + 14160 ? _o : a, x, I, C, r);
}
function aC(o, i, t, e) {
  return zo(o, i, t, ex, Ln(zr()), mt(o, -1 * -5441 + 2337 + 3888 * -2, -(-1937 + 16 * -106 + 3635)), 2403 * 3 + -2725 * 3 + 161 * 6, e);
}
function bg(o, i, t, e, A) {
  return zo(o, i, t, vn, mt(o, -7743 + -10 * -449 + 3253, e), mt(o, e + (-13 * -83 + -61 * 13 + -285), -1), e, A);
}
function ax(o, i, t) {
  switch (_r(o, i)) {
    case 3092 + 7459 * 1 + -681 * 8:
      return j + "print-" + o + o;
    case 14309 + 2 * -4286:
    case 4201:
    case 3177:
    case -155 * -24 + 521 * -19 + 3204 * 3:
    case 929 * -4 + -4244 + 1 * 9601:
    case -4299 * 1 + -53 * -143 + 1177:
    case -6437 + -223 * -41 + 5 * 43:
    case 1 * 187 + 3071 * -2 + 11527:
    case -2687 + 1 * 193 + 8850:
    case 1 * -8553 + 450 + -4649 * -3:
    case 3191:
    case 11832 + 12073 * 1 + -5 * 3452:
    case -73 * -77 + -2218 * 4 + 6256:
    case 17 * 334 + -2159 + 2872:
    case -1 * -3221 + -7862 * -1 + -4 * 1301:
    case 5 * -985 + -35 * -241 + 2113:
    case -4868 + 26 * 386 + 967:
    case 4599:
    case 2622 + 29 * 77:
    case 77 * -55 + 4504 + 1973 * 2:
    case -1 * 8813 + -11932 + 27134 * 1:
    case 5109:
    case 3197 + -8947 * -1 + -6779:
    case 5 * -1671 + 5687 + 8289:
    case 6576 + -1 * 2747:
      return j + o + o;
    case -725 * 4 + -59 * -3 + 7512:
      return t0 + o + o;
    case -579 * -6 + -1369 + -1 * -3244:
    case 4246:
    case 1415 * -3 + -5540 + -4865 * -3:
    case 6968:
    case 7527 + 9187 * 1 + -13958:
      return j + o + t0 + o + V + o + o;
    case 5936:
      switch (IA(o, i + 11)) {
        case -4637 * -2 + 6522 + -15682:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 5680 + -7 * 796:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case -7150 + -1 * -9934 + -2739:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 11696 + 2434 * -2:
    case 7305 + -6 * -720 + 1051 * -7:
    case 5 * -19 + 8860 + -5862 * 1:
      return j + o + V + o + o;
    case 1 * 6409 + -4404 + 4160:
      return j + o + V + "flex-" + o + o;
    case 5187:
      return j + o + U(o, /(\w+).+(:[^]+)/, j + "box-$1$2" + V + "flex-$1$2") + o;
    case -449 * -2 + 47 * 87 + 114 * 4:
      return j + o + V + "flex-item-" + U(o, /flex-|-self/g, "") + (Ee(o, /flex-|baseline/) ? "" : V + "grid-row-" + U(o, /flex-|-self/g, "")) + o;
    case 4675:
      return j + o + V + "flex-line-pack" + U(o, /align-content|flex-|-self/g, "") + o;
    case 252 + 1 * 5079 + 31 * 7:
      return j + o + V + U(o, "shrink", "negative") + o;
    case -13 * 254 + 6151 * -1 + 14745:
      return j + o + V + U(o, "basis", "preferred-size") + o;
    case -529 * -6 + -337 * 19 + 7 * 1327:
      return j + "box-" + U(o, "-grow", "") + j + o + V + U(o, "grow", "positive") + o;
    case 25 * 35 + -3180 + -19 * -361:
      return j + U(o, /([^-])(transform)/g, "$1" + j + "$2") + o;
    case 1 * 12171 + 11432 + -17416:
      return U(U(U(o, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), o, "") + o;
    case -3639 + -8839 * -1 + 295:
    case 20 + -337 * -4 + 2591:
      return U(o, /(image-set\([^]*)/, j + "$1$`$1");
    case -1 * 2122 + 426 + 6664:
      return U(U(o, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + o + o;
    case -11987 + 1 * 16187:
      if (!Ee(o, /flex-|baseline/)) return V + "grid-column-align" + mt(o, i) + o;
      break;
    case -4298 + 9 * -40 + 7250:
    case -11 * 553 + -1214 + -1 * -10657:
      return V + U(o, "template-", "") + o;
    case 395 * 10 + -824 + -1 * -1258:
    case -27 * 133 + 7415 * -1 + 14622:
      return t && t.some(function(e, A) {
        return i = A, Ee(e.props, /grid-\w+-end/);
      }) ? ~T0(o + (t = t[i].value), "span", 4 * 331 + -4115 * -1 + -147 * 37) ? o : V + U(o, "-start", "") + o + V + "grid-row-span:" + (~T0(t, "span", -46 * 170 + -2846 + 10666 * 1) ? Ee(t, /\d+/) : +Ee(t, /\d+/) - +Ee(o, /\d+/)) + ";" : V + U(o, "-start", "") + o;
    case 6941 * -1 + 8541 + 3296:
    case -23 * 334 + 9802 + 2008:
      return t && t.some(function(e) {
        return Ee(e.props, /grid-\w+-start/);
      }) ? o : V + U(U(o, "-end", "-span"), "span ", "") + o;
    case -3442 * -1 + -2 * -4694 + -1 * 8735:
    case 8593 + 39 * -83 + -1773:
    case 29 * 49 + 4185 * -1 + 6832:
    case 8953 + 2771 * -1 + -3650:
      return U(o, /(.+)-inline(.+)/, j + "$1$2") + o;
    case 628 * -9 + -13712 + 24 * 1145:
    case -46 * -186 + -4705 + -3208 * -1:
    case -1 * -5981 + 2 * -3995 + 7762:
    case 15952 + -947 * 11:
    case -6054 + 3833 * 3:
    case -345 * -4 + 11376 * 1 + -5 * 1411:
    case -4920 + -1 * -9853:
    case -7625 + -54 * -20 + 1 * 11222:
    case -7849 + -17 * 332 + 19026:
    case 5789:
    case 5021:
    case -334 * -2 + -1 * -8083 + -2 * 1993:
      if (xe(o) - (-679 * -13 + 8747 + 1 * -17573) - i > -539 * -5 + 5572 + 11 * -751) switch (IA(o, i + (2564 + -16 * -177 + -5395 * 1))) {
        case 64 * -34 + 155 * -37 + 8020:
          if (IA(o, i + (-7554 + -2663 * -3 + -431)) !== 235 * -25 + 1831 + 4089) break;
        case -5969 + 3992 * 1 + 2079:
          return U(o, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + t0 + (IA(o, i + (2798 + -357 * 1 + -2438)) == 43 * -137 + 1 * 2027 + 3972 ? "$3" : "$2-$3")) + o;
        case 694 * 11 + 253 * 7 + 10 * -929:
          return ~T0(o, "stretch", 0) ? ax(U(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case 4903 * 1 + 1952 + 1703 * -1:
    case 9211 * -1 + 1 * 10664 + 4467:
      return U(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, g, a, x, I) {
        return V + A + ":" + n + I + (g ? V + A + "-span:" + (a ? x : +x - +n) + I : "") + o;
      });
    case -4 * -278 + -107 * 73 + 11648:
      if (IA(o, i + (1 * -9973 + -319 * -13 + 5832)) === 4941 * -1 + -9302 + 14364) return U(o, ":", ":" + j) + o;
      break;
    case 10503 + -9351 * -1 + -13410:
      switch (IA(o, IA(o, 4241 + 36 * 176 + -10563) === 36 * -63 + -3664 + -1 * -5977 ? -1597 * 3 + -5963 + 10772 : 47 * -206 + -5190 + 14883)) {
        case -4209 + 481 * 9:
          return U(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + j + (IA(o, -2 * 457 + 6857 + -5929) === 4453 * -2 + -4337 * -1 + 4614 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + V + "$2box$3") + o;
        case -131 * -29 + 9689 * -1 + 5990:
          return U(o, ":", ":" + V) + o;
      }
      break;
    case -1 * 1621 + 9 * 615 + 1805:
    case -287 * -4 + -1 * 4766 + 6265:
    case -907 + 1 * 6030 + -2988:
    case 3927:
    case 122 * -20 + 53 * -17 + 5732:
      return U(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function Io(o, i) {
  for (var t = "", e = 8461 * -1 + -2 * 1375 + -303 * -37; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function xC(o, i, t, e) {
  switch (o.type) {
    case Vr:
      if (o.children.length) break;
    case Zr:
    case vn:
      return o.return = o.return || o.value;
    case ex:
      return "";
    case tx:
      return o.return = o.value + "{" + Io(o.children, e) + "}";
    case _o:
      if (!xe(o.value = o.props.join(","))) return "";
  }
  return xe(t = Io(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function IC(o) {
  var i = nx(o);
  return function(t, e, A, n) {
    for (var g = "", a = -9805 + 7523 * -1 + 38 * 456; a < i; a++) g += o[a](t, e, A, n) || "";
    return g;
  };
}
function rC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function CC(o, i, t, e) {
  if (o.length > -(-160 * 14 + 3 * -1114 + 5583) && !o.return)
    switch (o.type) {
      case vn:
        o.return = ax(o.value, o.length, t);
        return;
      case tx:
        return Io([ke(o, { value: U(o.value, "@", "@" + j) })], e);
      case _o:
        if (o.length) return Xr(t = o.props, function(A) {
          switch (Ee(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              It(ke(o, { props: [U(A, /:(read-\w+)/, ":" + t0 + "$1")] }));
              var n = {};
              n.props = [A], It(ke(o, n)), Yi(o, { props: mg(t, e) });
              break;
            case "::placeholder":
              It(ke(o, { props: [U(A, /:(plac\w+)/, ":" + j + "input-$1")] })), It(ke(o, { props: [U(A, /:(plac\w+)/, ":" + t0 + "$1")] })), It(ke(o, { props: [U(A, /:(plac\w+)/, V + "input-$1")] }));
              var g = {};
              g.props = [A], It(ke(o, g)), Yi(o, { props: mg(t, e) });
              break;
          }
          return "";
        });
    }
}
var W = {};
W.animationIterationCount = 1, W.aspectRatio = 1, W.borderImageOutset = 1, W.borderImageSlice = 1, W.borderImageWidth = 1, W.boxFlex = 1, W.boxFlexGroup = 1, W.boxOrdinalGroup = 1, W.columnCount = 1, W.columns = 1, W.flex = 1, W.flexGrow = 1, W.flexPositive = 1, W.flexShrink = 1, W.flexNegative = 1, W.flexOrder = 1, W.gridRow = 1, W.gridRowEnd = 1, W.gridRowSpan = 1, W.gridRowStart = 1, W.gridColumn = 1, W.gridColumnEnd = 1, W.gridColumnSpan = 1, W.gridColumnStart = 1, W.msGridRow = 1, W.msGridRowSpan = 1, W.msGridColumn = 1, W.msGridColumnSpan = 1, W.fontWeight = 1, W.lineHeight = 1, W.opacity = 1, W.order = 1, W.orphans = 1, W.tabSize = 1, W.widows = 1, W.zIndex = 1, W.zoom = 1, W.WebkitLineClamp = 1, W.fillOpacity = 1, W.floodOpacity = 1, W.stopOpacity = 1, W.strokeDasharray = 1, W.strokeDashoffset = 1, W.strokeMiterlimit = 1, W.strokeOpacity = 1, W.strokeWidth = 1;
var cC = W, q = {}, ot = typeof process < "u" && void (6355 + 5 * -1271) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", xx = "active", Ix = "data-styled-version", Ai = "6.1.11", Jn = `/*!sc*/
`, Un = typeof window < "u" && "HTMLElement" in window, BC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && q !== void 0 && q.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-7508 * 1 + 7871 + -363) !== q && void (13 * -211 + 3 * -24 + 2815) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), kg = /invalid hook call/i, N0 = /* @__PURE__ */ new Set(), sC = function(o, i) {
  if (q.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var n = !0;
      console.error = function(g) {
        for (var a = [], x = 5367 + -4777 * -2 + 1865 * -8; x < arguments.length; x++) a[x - (5537 + 1 * -5536)] = arguments[x];
        kg.test(g) ? (n = !1, N0.delete(e)) : A.apply(void 0, yt([g], a, !1));
      }, zA(), n && !N0.has(e) && (console.warn(e), N0.add(e));
    } catch (g) {
      kg.test(g.message) && N0.delete(e);
    } finally {
      console.error = A;
    }
  }
}, ei = Object.freeze([]), bt = Object.freeze({});
function QC(o, i, t) {
  return t === void 0 && (t = bt), o.theme !== t.theme && o.theme || i || t.theme;
}
var Hi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), EC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, dC = /(^-|-$)/g;
function Gg(o) {
  return o.replace(EC, "-").replace(dC, "");
}
var lC = /(a)(d)/gi, F0 = 9215 * -1 + 34 * 101 + 5833, Sg = function(o) {
  return String.fromCharCode(o + (o > -61 * 110 + -1091 * -7 + 41 * -22 ? 39 : 23 * 74 + 1801 + 1 * -3406));
};
function Ti(o) {
  var i, t = "";
  for (i = Math.abs(o); i > F0; i = i / F0 | -27 * 202 + 6455 + -1 * 1001) t = Sg(i % F0) + t;
  return (Sg(i % F0) + t).replace(lC, "$1-$2");
}
var si, rx = 8352 + 1 * -547 + -2424, Pe = function(o, i) {
  for (var t = i.length; t; ) o = 33 * o ^ i.charCodeAt(--t);
  return o;
}, Cx = function(o) {
  return Pe(rx, o);
};
function uC(o) {
  return Ti(Cx(o) >>> -457 * 2 + -7256 + 190 * 43);
}
function cx(o) {
  return q.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Qi(o) {
  return typeof o == "string" && (q.NODE_ENV === "production" || o.charAt(1159 * 1 + -1 * 416 + -743) === o.charAt(2133 + -149 * 21 + 166 * 6).toLowerCase());
}
var ZA = {};
ZA.childContextTypes = !0, ZA.contextType = !0, ZA.contextTypes = !0, ZA.defaultProps = !0, ZA.displayName = !0, ZA.getDefaultProps = !0, ZA.getDerivedStateFromError = !0, ZA.getDerivedStateFromProps = !0, ZA.mixins = !0, ZA.propTypes = !0, ZA.type = !0;
var Ge = {};
Ge.name = !0, Ge.length = !0, Ge.prototype = !0, Ge.caller = !0, Ge.callee = !0, Ge.arguments = !0, Ge.arity = !0;
var He = {};
He.$$typeof = !0, He.compare = !0, He.defaultProps = !0, He.displayName = !0, He.propTypes = !0, He.type = !0;
var Ct = {};
Ct.$$typeof = !0, Ct.render = !0, Ct.defaultProps = !0, Ct.displayName = !0, Ct.propTypes = !0;
var Bx = typeof Symbol == "function" && Symbol.for, sx = Bx ? Symbol.for("react.memo") : 39876 + 8 * -8662 + 235 * 381, fC = Bx ? Symbol.for("react.forward_ref") : 60112, hC = ZA, pC = Ge, Qx = He, yC = ((si = {})[fC] = Ct, si[sx] = Qx, si);
function Ng(o) {
  return ("type" in (i = o) && i.type.$$typeof) === sx ? Qx : "$$typeof" in o ? yC[o.$$typeof] : hC;
  var i;
}
var DC = Object.defineProperty, mC = Object.getOwnPropertyNames, Fg = Object.getOwnPropertySymbols, wC = Object.getOwnPropertyDescriptor, bC = Object.getPrototypeOf, Rg = Object.prototype;
function Ex(o, i, t) {
  if (typeof i != "string") {
    if (Rg) {
      var e = bC(i);
      e && e !== Rg && Ex(o, e, t);
    }
    var A = mC(i);
    Fg && (A = A.concat(Fg(i)));
    for (var n = Ng(o), g = Ng(i), a = -2 * -1031 + 1 * -4730 + 2668; a < A.length; ++a) {
      var x = A[a];
      if (!(x in pC || t && t[x] || g && x in g || n && x in n)) {
        var I = wC(i, x);
        try {
          DC(o, x, I);
        } catch {
        }
      }
    }
  }
  return o;
}
function kt(o) {
  return typeof o == "function";
}
function Yn(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function je(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function Wg(o, i) {
  if (-1818 + -3 * 160 + -766 * -3 === o.length) return "";
  for (var t = o[1900 + 1 * 2203 + 1 * -4103], e = 7823 + 26 * 272 + 22 * -677; e < o.length; e++) t += o[e];
  return t;
}
function Gt(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Pi(o, i, t) {
  if (void (-1 * 425 + -15 * -117 + -7 * 190) === t && (t = !1), !t && !Gt(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = 11323 + 871 * -13; e < i.length; e++) o[e] = Pi(o[e], i[e]);
  else if (Gt(i))
    for (var e in i) o[e] = Pi(o[e], i[e]);
  return o;
}
function On(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
}
var aA = {};
aA[1] = `Cannot create styled-component for component: %s.

`, aA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, aA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, aA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, aA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, aA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, aA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', aA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, aA[9] = "Missing document `<head>`\n\n", aA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, aA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, aA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", aA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, aA[14] = `ThemeProvider: "theme" prop is required.

`, aA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", aA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, aA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, aA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var kC = q.NODE_ENV !== "production" ? aA : {};
function GC() {
  for (var o = [], i = 1165 + -1 * 1165; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[0], e = [], A = 29 * -187 + -3871 + 5 * 1859, n = o.length; A < n; A += -6602 * -1 + 203 * -13 + -3962) e.push(o[A]);
  return e.forEach(function(g) {
    t = t.replace(/%[a-z]/, g);
  }), t;
}
function Mt(o) {
  for (var i = [], t = 16917 + 4229 * -4; t < arguments.length; t++) i[t - (-29 * -149 + 2143 + -6463)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : "")) : new Error(GC.apply(void (7 * 385 + -1674 + -1021), yt([kC[o]], i, !1)).trim());
}
var SC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(3 * 1811 + -8341 + 3420), this.length = 1 * -2837 + -1944 + 5293, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = 9073 * 1 + 1349 + -10422, e = 3 * -1306 + 263 * 24 + -38 * 63; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; i >= n; ) if ((n <<= 2119 * -1 + 1 * 3513 + 7 * -199) < 139 * -5 + 2918 + -2223) throw Mt(2 * -3956 + 3 * 2510 + 398, "".concat(i));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var g = A; g < n; g++) this.groupSizes[g] = 0;
    }
    for (var a = this.indexOfGroup(i + (-626 * -1 + -2689 * 2 + -4753 * -1)), x = (g = -521 * 1 + -210 * -3 + -109, t.length); g < x; g++) this.tag.insertRule(a, t[g]) && (this.groupSizes[i]++, a++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 1 * 5441 + -196 + -5 * 1049;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || this.groupSizes[i] === 0) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), n = A + e, g = A; g < n; g++) t += "".concat(this.tag.getRule(g)).concat(Jn);
    return t;
  }, o;
}(), NC = 4675 + 1 * -1625 + 3049 * -1 << -503 + -349 * -16 + -5051, j0 = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), Z0 = -115 * -45 + -5856 + 682, R0 = function(o) {
  if (j0.has(o)) return j0.get(o);
  for (; ro.has(Z0); ) Z0++;
  var i = Z0++;
  if (q.NODE_ENV !== "production" && ((2893 + -516 * 8 + 95 * 13 | i) < -223 * -38 + -9241 + 767 || i > NC)) throw Mt(1097 + 47 * -23, "".concat(i));
  return j0.set(o, i), ro.set(i, o), i;
}, FC = function(o, i) {
  Z0 = i + (-3373 + -1 * -4377 + -1003), j0.set(o, i), ro.set(i, o);
}, RC = "style[".concat(ot, "][").concat(Ix, '="').concat(Ai, '"]'), WC = new RegExp("^".concat(ot, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), MC = function(o, i, t) {
  for (var e, A = t.split(","), n = 6445 + -907 * 11 + 3532, g = A.length; n < g; n++) (e = A[n]) && o.registerName(i, e);
}, vC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (9426 + 565 * -9 + -1447 * 3) !== t ? t : "").split(Jn), A = [], n = -10892 + 1556 * 7, g = e.length; n < g; n++) {
    var a = e[n].trim();
    if (a) {
      var x = a.match(WC);
      if (x) {
        var I = 0 | parseInt(x[1], 10), C = x[2];
        10477 + -10477 * 1 !== I && (FC(C, I), MC(o, C, x[6755 + 2014 * 1 + -1461 * 6]), o.getTag().insertRules(I, A)), A.length = 51 * 195 + 2910 + -12855 * 1;
      } else A.push(a);
    }
  }
};
function LC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var dx = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(a) {
    var x = Array.from(a.querySelectorAll("style[".concat(ot, "]")));
    return x[x.length - 1];
  }(t), n = void (-5996 + -2 * -2998) !== A ? A.nextSibling : null;
  e.setAttribute(ot, xx), e.setAttribute(Ix, Ai);
  var g = LC();
  return g && e.setAttribute("nonce", g), t.insertBefore(e, n), e;
}, JC = function() {
  function o(i) {
    this.element = dx(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -15292 + -15292 * -1, n = e.length; A < n; A++) {
        var g = e[A];
        if (g.ownerNode === t) return g;
      }
      throw Mt(-269 * -35 + 9179 * 1 + 18577 * -1);
    }(this.element), this.length = 0;
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
}(), UC = function() {
  function o(i) {
    this.element = dx(i), this.nodes = this.element.childNodes, this.length = 5 * -365 + -59 * -146 + 93 * -73;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -2280 + 1874 * 4 + -652 * 8) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), YC = function() {
  function o(i) {
    this.rules = [], this.length = -7802 + -5701 * -1 + 11 * 191;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -1 * -3605 + 7993 * -1 + 1097 * 4, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, -2 * 3225 + -6630 + 13081), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), Mg = Un, OC = { isServer: !Un, useCSSOMInjection: !BC }, lx = function() {
  function o(i, t, e) {
    void (-1224 + -102 * -12) === i && (i = bt), void (-34 * -41 + -7 * -1124 + -9262) === t && (t = {});
    var A = this;
    this.options = OA(OA({}, OC), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Un && Mg && (Mg = !1, function(n) {
      for (var g = document.querySelectorAll(RC), a = -33 * -194 + 1681 * 2 + -1 * 9764, x = g.length; a < x; a++) {
        var I = g[a];
        I && I.getAttribute(ot) !== xx && (vC(n, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), On(this, function() {
      return function(n) {
        for (var g = n.getTag(), a = g.length, x = "", I = function(r) {
          var E = function(c) {
            return ro.get(c);
          }(r);
          if (void (-3803 * 1 + -12 * -484 + -2005) === E) return "continue";
          var B = n.names.get(E), Q = g.getGroup(r);
          if (void (41 * -168 + -9803 + 16691) === B || 10420 + -5210 * 2 === Q.length) return "continue";
          var d = "".concat(ot, ".g").concat(r, '[id="').concat(E, '"]'), u = "";
          void (6123 + -6123 * 1) !== B && B.forEach(function(c) {
            c.length > 0 && (u += "".concat(c, ","));
          }), x += "".concat(Q).concat(d, '{content:"').concat(u, '"}').concat(Jn);
        }, C = -61 * -16 + -7825 + 2283 * 3; C < a; C++) I(C);
        return x;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return R0(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (8764 + 3 * -1255 + -1 * 4999) === t && (t = !0), new o(OA(OA({}, this.options), i), this.gs, t && this.names || void (3515 + 4 * -693 + -743));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 4205 + 920 * 6 + -9725) + (-2 * 1647 + 10 + 3285);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new YC(A) : e ? new JC(A) : new UC(A);
    }(this.options), new SC(i)));
    var i;
  }, o.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, o.prototype.registerName = function(i, t) {
    if (R0(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, o.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(R0(i), e);
  }, o.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, o.prototype.clearRules = function(i) {
    this.getTag().clearGroup(R0(i)), this.clearNames(i);
  }, o.prototype.clearTag = function() {
    this.tag = void (-10 * -261 + -8073 + 5463);
  }, o;
}(), KC = /&/g, HC = /^\s*\/\/.*$/gm;
function ux(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ux(t.children, i)), t;
  });
}
function fx(o) {
  var i, t, e, A = o === void 0 ? bt : o, n = A.options, g = void (1590 + -8 * 295 + 770) === n ? bt : n, a = A.plugins, x = void (1 * -7793 + 8020 + -227) === a ? ei : a, I = function(E, B, Q) {
    return Q.startsWith(t) && Q.endsWith(t) && Q.replaceAll(t, "").length > 79 * 29 + 5671 * -1 + 2 * 1690 ? ".".concat(i) : E;
  }, C = x.slice();
  C.push(function(E) {
    E.type === _o && E.value.includes("&") && (E.props[8466 + -351 * -27 + -5981 * 3] = E.props[4619 * 1 + -1359 + -4 * 815].replace(KC, t).replace(e, I));
  }), g.prefix && C.push(CC), C.push(xC);
  var r = function(E, B, Q, d) {
    B === void 0 && (B = ""), void (-1650 + 15 * 110) === Q && (Q = ""), void (-1727 * 2 + 1320 + 2134) === d && (d = "&"), i = d, t = B, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = E.replace(HC, ""), c = gC(Q || B ? "".concat(Q, " ").concat(B, " { ").concat(u, " }") : u);
    g.namespace && (c = ux(c, g.namespace));
    var f = [];
    return Io(c, IC(C.concat(rC(function(p) {
      return f.push(p);
    })))), f;
  };
  return r.hash = x.length ? x.reduce(function(E, B) {
    return B.name || Mt(2767 + 744 * -2 + 2 * -632), Pe(E, B.name);
  }, rx).toString() : "", r;
}
var TC = new lx(), qi = fx(), Kn = tt.createContext({ shouldForwardProp: void (-1190 + -1190 * -1), styleSheet: TC, stylis: qi });
Kn.Consumer;
var PC = tt.createContext(void (-2 * -430 + 273 * 17 + 5501 * -1));
function ji() {
  return me(Kn);
}
function qC(o) {
  var i = WA(o.stylisPlugins), t = i[-755 * -1 + -1 * -1774 + -2529], e = i[3444 + 11 * -313], A = ji().styleSheet, n = MA(function() {
    var C = A, r = {};
    return r.useCSSOMInjection = !1, o.sheet ? C = o.sheet : o.target && (C = C.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (C = C.reconstructWithOptions(r)), C;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), g = MA(function() {
    var C = {};
    C.namespace = o.namespace, C.prefix = o.enableVendorPrefixes;
    var r = {};
    return r.options = C, r.plugins = t, fx(r);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  eA(function() {
    jr(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var a = MA(function() {
    var C = {};
    return C.shouldForwardProp = o.shouldForwardProp, C.styleSheet = n, C.stylis = g, C;
  }, [o.shouldForwardProp, n, g]), x = {};
  x.value = a;
  var I = {};
  return I.value = g, tt.createElement(Kn.Provider, x, tt.createElement(PC.Provider, I, o.children));
}
var vg = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, n) {
      void (6 * 584 + 9005 * -1 + 5501 * 1) === n && (n = qi);
      var g = e.name + n.hash;
      A.hasNameForId(e.id, g) || A.insertRules(e.id, g, n(e.rules, g, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, On(this, function() {
      throw Mt(-9361 + 998 * 1 + 8375, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return i === void 0 && (i = qi), this.name + i.hash;
  }, o;
}(), jC = function(o) {
  return o >= "A" && o <= "Z";
};
function Lg(o) {
  for (var i = "", t = -1 * -7256 + -5689 * 1 + -1567; t < o.length; t++) {
    var e = o[t];
    if (70 * -113 + 6393 + 2 * 759 === t && e === "-" && o[1319 * -7 + -4798 * -1 + 5 * 887] === "-") return o;
    jC(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var hx = function(o) {
  return o == null || o === !1 || o === "";
}, px = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var n = o[A];
    o.hasOwnProperty(A) && !hx(n) && (Array.isArray(n) && n.isCss || kt(n) ? e.push("".concat(Lg(A), ":"), n, ";") : Gt(n) ? e.push.apply(e, yt(yt(["".concat(A, " {")], px(n), !1), ["}"], !1)) : e.push("".concat(Lg(A), ": ").concat((i = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 321 * 7 + -8042 + 5795 === t || i in cC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function At(o, i, t, e) {
  if (hx(o)) return [];
  if (Yn(o)) return [".".concat(o.styledComponentId)];
  if (kt(o)) {
    if (!kt(n = o) || n.prototype && n.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return q.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof vg || Gt(A) || A === null || console.error("".concat(cx(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), At(A, i, t, e);
  }
  var n;
  return o instanceof vg ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : Gt(o) ? px(o) : Array.isArray(o) ? Array.prototype.concat.apply(ei, o.map(function(g) {
    return At(g, i, t, e);
  })) : [o.toString()];
}
function ZC(o) {
  for (var i = 0; i < o.length; i += 2 * -3433 + 41 * 97 + 2890) {
    var t = o[i];
    if (kt(t) && !Yn(t)) return !1;
  }
  return !0;
}
var VC = Cx(Ai), _C = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (-1391 * -1 + 6826 + -8217) === e || e.isStatic) && ZC(i), this.componentId = t, this.baseHash = Pe(VC, t), this.baseStyle = e, lx.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = je(A, this.staticRulesId);
      else {
        var n = Wg(At(this.rules, i, t, e)), g = Ti(Pe(this.baseHash, n) >>> 0);
        if (!t.hasNameForId(this.componentId, g)) {
          var a = e(n, ".".concat(g), void 0, this.componentId);
          t.insertRules(this.componentId, g, a);
        }
        A = je(A, g), this.staticRulesId = g;
      }
    else {
      for (var x = Pe(this.baseHash, e.hash), I = "", C = 2996 + 7 * -428; C < this.rules.length; C++) {
        var r = this.rules[C];
        if (typeof r == "string") I += r, q.NODE_ENV !== "production" && (x = Pe(x, r));
        else if (r) {
          var E = Wg(At(r, i, t, e));
          x = Pe(x, E + C), I += E;
        }
      }
      if (I) {
        var B = Ti(x >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, e(I, ".".concat(B), void (-913 + -83 * -11), this.componentId)), A = je(A, B);
      }
    }
    return A;
  }, o;
}(), yx = tt.createContext(void (6886 + 9283 * 1 + 23 * -703));
yx.Consumer;
var Ei = {}, Jg = /* @__PURE__ */ new Set();
function XC(o, i, t) {
  var e = Yn(o), A = o, n = !Qi(o), g = i.attrs, a = void (5112 + -1211 * 3 + -1479) === g ? ei : g, x = i.componentId, I = void (-7122 + 1 * -8737 + 15859 * 1) === x ? function(F, v) {
    var S = typeof F != "string" ? "sc" : Gg(F);
    Ei[S] = (Ei[S] || 1228 + 5821 * 1 + 53 * -133) + 1;
    var X = "".concat(S, "-").concat(uC(Ai + S + Ei[S]));
    return v ? "".concat(v, "-").concat(X) : X;
  }(i.displayName, i.parentComponentId) : x, C = i.displayName, r = void (-2993 * 3 + 6999 + 11 * 180) === C ? function(F) {
    return Qi(F) ? "styled.".concat(F) : "Styled(".concat(cx(F), ")");
  }(o) : C, E = i.displayName && i.componentId ? "".concat(Gg(i.displayName), "-").concat(i.componentId) : i.componentId || I, B = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, Q = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      Q = function(F, v) {
        return d(F, v) && u(F, v);
      };
    } else Q = d;
  }
  var c = new _C(t, E, e ? A.componentStyle : void (-6489 + -7 * -927));
  function f(F, v) {
    return function(S, X, vA) {
      var iA = S.attrs, TA = S.componentStyle, $ = S.defaultProps, Lt = S.foldedComponentIds, eg = S.styledComponentId, OI = S.target, KI = tt.useContext(yx), HI = ji(), gi = S.shouldForwardProp || HI.shouldForwardProp;
      q.NODE_ENV !== "production" && xo(eg);
      var tg = QC(X, KI, $) || bt, Be = function(b0, Yt, k0) {
        var xt = {};
        xt.className = void (-203 * -19 + -3396 + -461 * 1), xt.theme = k0;
        for (var Ii, Ye = OA(OA({}, Yt), xt), ri = -2741 * -2 + -3124 + -262 * 9; ri < b0.length; ri += -4274 + -855 * -5) {
          var G0 = kt(Ii = b0[ri]) ? Ii(Ye) : Ii;
          for (var we in G0) Ye[we] = we === "className" ? je(Ye[we], G0[we]) : we === "style" ? OA(OA({}, Ye[we]), G0[we]) : G0[we];
        }
        return Yt.className && (Ye.className = je(Ye.className, Yt.className)), Ye;
      }(iA, X, tg), Jt = Be.as || OI, Ut = {};
      for (var PA in Be) void (-19 * 465 + -1 * -5283 + 3552) === Be[PA] || PA[1 * -5736 + 11 * -744 + 13920] === "$" || PA === "as" || PA === "theme" && Be.theme === tg || (PA === "forwardedAs" ? Ut.as = Be.forwardedAs : gi && !gi(PA, Jt) || (Ut[PA] = Be[PA], gi || q.NODE_ENV !== "development" || ar(PA) || Jg.has(PA) || !Hi.has(Jt) || (Jg.add(PA), console.warn('styled-components: it looks like an unknown prop "'.concat(PA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ai = function(b0, Yt) {
        var k0 = ji(), xt = b0.generateAndInjectStyles(Yt, k0.styleSheet, k0.stylis);
        return q.NODE_ENV !== "production" && xo(xt), xt;
      }(TA, Be);
      q.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ai);
      var xi = je(Lt, eg);
      return ai && (xi += " " + ai), Be.className && (xi += " " + Be.className), Ut[Qi(Jt) && !Hi.has(Jt) ? "class" : "className"] = xi, Ut.ref = vA, RA(Jt, Ut);
    }(p, F, v);
  }
  f.displayName = r;
  var p = tt.forwardRef(f), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, p.attrs = B, p.componentStyle = c, p.displayName = r, p.shouldForwardProp = Q, p.foldedComponentIds = e ? je(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = E, p.target = e ? A.target : o, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = e ? function(v) {
      for (var S = [], X = -1706 * 5 + 351 * -3 + 9584; X < arguments.length; X++) S[X - (2743 * -1 + -285 * 25 + 9869 * 1)] = arguments[X];
      for (var vA = -2 * -2077 + -9249 + 5095, iA = S; vA < iA.length; vA++) Pi(v, iA[vA], !0);
      return v;
    }({}, A.defaultProps, F) : F;
  } }), q.NODE_ENV !== "production" && (sC(r, E), p.warnTooManyClasses = /* @__PURE__ */ function(F, v) {
    var S = {}, X = !1;
    return function(vA) {
      if (!X && (S[vA] = !0, Object.keys(S).length >= -115 + 105 * 3)) {
        var iA = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(3442 + 26 * -349 + -81 * -72, " classes were generated for component ").concat(F).concat(iA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), X = !0, S = {};
      }
    };
  }(r, E)), On(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && Ex(p, o, k), p;
}
function Ug(o, i) {
  for (var t = [o[3001 + -118 * 39 + -1601 * -1]], e = -601 + 22 * -82 + 2405, A = i.length; e < A; e += -477 * -13 + 2 * 1283 + -974 * 9) t.push(i[e], o[e + (-362 + -54 * -107 + -5415)]);
  return t;
}
var Yg = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function zC(o) {
  for (var i = [], t = -9455 + -209 * 13 + 12173; t < arguments.length; t++) i[t - (1 * 3334 + 4 * -2029 + 4783)] = arguments[t];
  if (kt(o) || Gt(o)) return Yg(At(Ug(ei, yt([o], i, !0))));
  var e = o;
  return 11772 + -327 * 36 === i.length && -4 * -481 + -158 + -1765 === e.length && typeof e[13 * 274 + -1 * 5777 + 2215] == "string" ? At(e) : Yg(At(Ug(e, i)));
}
function Zi(o, i, t) {
  if (void (9791 * -1 + -7050 + 16841) === t && (t = bt), !i) throw Mt(-188 * 44 + 8212 + 61, i);
  var e = function(A) {
    for (var n = [], g = 3695 + -2 * 1147 + -10 * 140; g < arguments.length; g++) n[g - (-5 * 762 + -45 * -209 + -5594)] = arguments[g];
    return o(i, t, zC.apply(void (10564 + 278 * -38), yt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return Zi(o, i, OA(OA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Zi(o, i, OA(OA({}, t), A));
  }, e;
}
var Dx = function(o) {
  return Zi(XC, o);
}, D0 = Dx;
Hi.forEach(function(o) {
  D0[o] = Dx(o);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var W0 = "__sc-".concat(ot, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[W0] || (window[W0] = -95 * 37 + 104 + 1137 * 3), -1 * -293 + 2644 * -2 + 4996 === window[W0] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[W0] += -3 * 2126 + 3 * 3251 + -3374);
const $C = D0.div`
  position: relative;
`, Ac = D0.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class L extends Error {
  constructor(t, e) {
    super(t);
    b(this, "cause");
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
const V0 = {};
V0.CONTINUE_DETECTION = "continue-detection", V0.SWITCH_CAMERA = "switch-camera", V0.TOGGLE_MIRROR = "toggle-mirror";
const di = V0, Vi = {};
Vi.FIRST_FRAME = "first-frame", Vi.FIRST_VALID_FRAME = "first-valid-frame";
const li = Vi, mx = {};
mx.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Og = mx;
var re = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(re || {}), ec = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(ec || {}), tc = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.CONTROL = "magnifeye-auto-capture:control", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(tc || {}), oc = ((o) => (o.CONTROL = "smile-auto-capture:control", o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(oc || {}), ic = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(ic || {}), nc = ((o) => (o.CONTROL = "eye-gaze-auto-capture:control", o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(nc || {});
const Qe = {};
Qe.CANDIDATE_SELECTION = "candidate_selection", Qe.DOCUMENT_CENTERING = "document_centering", Qe.DOCUMENT_NOT_PRESENT = "document_not_present", Qe.DOCUMENT_TOO_FAR = "document_too_far", Qe.SHARPNESS_TOO_LOW = "sharpness_too_low", Qe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Qe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Qe.HOTSPOTS_PRESENT = "hotspots_present";
const de = Qe, Se = {};
Se.isPresent = de.DOCUMENT_NOT_PRESENT, Se.isNotSmall = de.DOCUMENT_TOO_FAR, Se.isNotOutOfBounds = de.DOCUMENT_CENTERING, Se.isSharp = de.SHARPNESS_TOO_LOW, Se.isNotDim = de.BRIGHTNESS_TOO_LOW, Se.isNotBright = de.BRIGHTNESS_TOO_HIGH, Se.noHotspots = de.HOTSPOTS_PRESENT;
const gc = Se, _i = {};
_i.FRONT = "user", _i.REAR = "environment";
const Co = _i, Xi = {};
Xi.AUTO_CAPTURE = "AUTO_CAPTURE", Xi.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const zi = Xi, jt = {};
jt.LOADING = "LOADING", jt.ERROR = "ERROR", jt.WAITING = "WAITING", jt.RUNNING = "RUNNING";
const QA = jt, wx = { ...QA };
wx.DONE = "DONE";
const Kg = wx;
var ac = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(ac || {});
const ti = nt(void 0);
ti.displayName = "AppStateContext";
function Ue() {
  const o = me(ti);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const xc = ti.Provider;
class bx extends _A {
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
    return ((i = this.context) == null ? void 0 : i.appState) === QA.ERROR ? null : this.props.children;
  }
}
b(bx, "contextType", ti);
const Ic = D0.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, rc = D0.div`
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
function Cc() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const cc = Ha(
  ({ detectionDetails: o, isImageMirror: i }, t) => Cc() ? (console.log(o), /* @__PURE__ */ D(HA, { children: [
    /* @__PURE__ */ D(Ic, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ D(rc, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), co = nt(void 0);
co.displayName = "AnalyticsContext";
function kx() {
  const o = me(co);
  if (o === void 0)
    throw new Error(`${co.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, i) {
  const t = o();
  function e(a, x, I, C, r) {
    return FA(a - -851, x);
  }
  function A(a, x, I, C, r) {
    return FA(x - 77, a);
  }
  function n(a, x, I, C, r) {
    return FA(a - -581, r);
  }
  function g(a, x, I, C, r) {
    return FA(x - 742, r);
  }
  for (; ; )
    try {
      if (-parseInt(e(-607, "i*[p", -605, -614, -623)) / 1 + -parseInt(e(-620, "@ygZ", -613, -618, -625)) / 2 + -parseInt(e(-611, "DHGn", -619, -610, -625)) / 3 * (-parseInt(g(963, 970, 984, 958, "G1lH")) / 4) + parseInt(n(-351, -368, -336, -368, "EX8!")) / 5 * (parseInt(e(-605, "kJc@", -621, -598, -620)) / 6) + -parseInt(e(-618, "xuB4", -636, -622, -626)) / 7 * (-parseInt(A("r9A^", 314, 296, 308, 326)) / 8) + -parseInt(A("uT0k", 326, 333, 345, 332)) / 9 * (parseInt(g(983, 978, 964, 973, "w#Ix")) / 10) + parseInt(n(-355, -368, -370, -360, "kB23")) / 11 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Bo, -1075346 + -1 * 888603 + 2721957);
function Bo() {
  const o = ["kGpdRSohvG", "WOv2WOeFFa", "WRSCWRKM", "jwhcMIme", "xX3cJCoszW", "WRBdO8kKW4JdQmobbsW", "kI/cMCoxtG", "W5lcNmkLqSovzmkAwSkGW4CGnxy", "cCoUW7zVFqL3W5JdQCkn", "WPO6WQL0WRhdLCo7BdJcNmklWQ5T", "tCkZWOa3DW", "WRzqc3SH", "wL/cQXVcU8oWjmkaWRFcGSoa", "W6ZdPSoPW4nmoCoEx8ozqmogBGG", "n3RcO8k+W4JdU8kiqa", "W5uhW6hcK0xdNSoGmCkDbbJcT28", "ywBcJq", "WPVdIdHXWP1sega", "vf3cV8kucerEWRr2xb3dT8ku", "dCkzcSkBdCktjMznW5qq", "WOCwW5uhW55opCkN", "WORcPI54W6y", "WO5hWRVdIbG", "W4TfgMifWPdcNSocAWiR", "W500W5GVyLtdL8oiueS3cSoL", "cSkAdmkEdmo/FhnxW60bhI0", "WRzIBmo6WPG", "WPRcQmkwW7D6WOO+", "W4DsW7pdRr8", "WPO5WQLWWRldKCoXBbVcM8khWRPb", "WRWCWQvYW6G", "W5CRW4bEj3zCe8oAW612", "W5ddRmoQfmkSp8oz", "g1lcR8kJk8omrCo4kSoaW5TOBG", "WOldKCosf8kl", "iNBdSLilW5rdW7FdIG7cHSoIhG", "W6i/n8k+WPNcImk8WPhdRSkY"];
  return Bo = function() {
    return o;
  }, Bo();
}
function Bc(o, i, t, e, A) {
  return FA(t - -125, e);
}
function FA(o, i) {
  const t = Bo();
  return FA = function(e, A) {
    e = e - 218;
    let n = t[e];
    if (FA.npdMIM === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      FA.ykMWJn = C, o = arguments, FA.npdMIM = !0;
    }
    const a = t[281 * -27 + -1003 * -5 + 2572], x = e + a, I = o[x];
    return I ? n = I : (FA.RcIfmN === void 0 && (FA.RcIfmN = !0), n = FA.ykMWJn(n, A), o[x] = n), n;
  }, FA(o, i);
}
function Zt(o, i, t, e, A) {
  return FA(o - -232, A);
}
function ui(o, i, t, e, A) {
  return FA(A - 654, o);
}
const so = nt(void (-49 * 167 + 5583 + 2600));
so[Zt(19, 9, 1, 23, "i*[p") + Zt(2, -16, 8, 11, "JH*K") + "e"] = Zt(18, 34, 36, 20, "@ygZ") + Zt(-9, -18, 9, 8, "jF3n") + Bc(121, 117, 127, "R8Sn");
function m0() {
  function o(n, g, a, x, I) {
    return Zt(a - 817, g - 170, a - 408, x - 298, g);
  }
  function i(n, g, a, x, I) {
    return ui(I, g - 126, a - 177, x - 369, a - -637);
  }
  function t(n, g, a, x, I) {
    return ui(n, g - 139, a - 236, x - 290, I - -1169);
  }
  function e(n, g, a, x, I) {
    return ui(n, g - 163, a - 218, x - 63, g - 233);
  }
  const A = me(so);
  if (A === void (-10196 + -5098 * -2)) throw new Error(so[o(812, ")*mb", 809, 804) + e("Y%[1", 1134, 1144, 1151) + "e"] + (e("5mAQ", 1141, 1148, 1135) + e("*YC@", 1140, 1124, 1145) + o(822, "R8Sn", 828, 832) + e("G1lH", 1122, 1130, 1133) + o(814, "G1lH", 826, 833) + t("uT0k", -289, -273, -265, -276) + e("[Kdi", 1106, 1124, 1121) + i(237, 256, 246, 258, "*YC@")));
  return A;
}
const M0 = (o, i) => Math.hypot(i.x - o.x, i.y - o.y), Qo = (o) => o.length < -9142 + -223 * -41 ? -613 * -7 + -1 * 8963 + -292 * -16 : o.reduce((t, e) => t + e, 523 * -3 + -1356 * 6 + 9705) / o.length, St = (o) => Number.parseFloat(o.toFixed(2 * -3559 + 7633 + -512)), sc = (o) => {
  const { bottomLeft: i, bottomRight: t, topLeft: e, topRight: A } = o, n = M0(e, A), g = M0(A, t), a = M0(i, t), x = M0(e, i);
  return Math.min(n, g, a, x);
}, Qc = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(9289 * 1 + 1472 + -10761, 13390 + -103 * 130, i.canvas.width, i.canvas.height);
}, Ec = -2081 + 1 * 133 + 1 * 1949 + 0.5, dc = -7456 + -4 * -876 + 3952 + 0.85, fi = 1 * 3088 + 7 * 1156 + 20 * -509, lc = 78 * -53 + -1667 + 6401, uc = 15310 + -7655 * 2, fc = "dot-auto-capture-video";
function hc(o, i) {
  return o < fi && i >= fi ? fi : o;
}
function pc(o, i) {
  return o < i ? o : i;
}
function Gx({ height: o, width: i }) {
  let t;
  return i > o ? t = hc(o, i) : t = i, { width: t, height: pc(o, t) };
}
const yc = (o, i) => Math.min(o, i), Sx = (o) => {
  const i = Gx(o).width, t = i * dc, e = (o.width - t) / (-3293 + 1 * 3295), A = t / Ec, n = (o.height - A) / (5154 + -2473 * 3 + 1 * 2267), g = {};
  return g.shiftX = e, g.shiftY = n, g.width = t, g.height = A, g;
}, Dc = (o) => {
  const { height: i, shiftX: t, shiftY: e, width: A } = Sx(o), n = {};
  return n.shiftX = t / o.width, n.shiftY = e / o.height, n.width = A / o.width, n.height = i / o.height, n;
}, mc = "@innovatrics/dot-common-auto-capture", wc = "7.3.2", bc = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, kc = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Gc = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Sc = {
  name: mc,
  private: !0,
  version: wc,
  scripts: bc,
  dependencies: kc,
  devDependencies: Gc
}, _0 = {};
_0.minDuration = 1e3, _0.maxDuration = 2500, _0.minFrames = 10;
const hi = _0, $i = {};
$i.max = 100, $i.min = 10;
const Hg = $i, Nc = 1 * 5006 + 9 * -390 + 388 * -2, Fc = -2 * 1982 + -8669 * 1 + 12833, Rc = -6 * 1222 + 9790 + -2454, Vt = {};
Vt.width = 200, Vt.height = 200, Vt.top = 50, Vt.left = 50;
const Wc = Vt, Eo = "AES-CBC", Nx = "RSA-OAEP", Mc = "SHA-256", vc = "image/jpeg", Lc = -9131 * -1 + -1115 * -1 + -10238, Fx = "/dot-assets", Tg = "dot_embedded_bg.wasm", oi = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
function Pg() {
  return /Android/i.test(navigator.userAgent);
}
function a0() {
  return /Firefox/i.test(navigator.userAgent);
}
const Jc = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, An = (o) => new Promise((i) => {
  setTimeout(i, o);
}), Uc = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? St(t) : t)), Rx = () => Sc.version, Wx = (o) => new URL(o).hostname.replace("www.", ""), Yc = () => Wx(window.location.href) === "localhost", v0 = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), Oc = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o;
function Kc(o) {
  return o.at(-(2163 + 43 * -45 + 227 * -1)) === "/" ? o.slice(-172 * 33 + 194 * 43 + -2666, -(3 * -577 + 5025 * -1 + 6757 * 1)) : o;
}
function Mx(o) {
  return "" + Kc(o ?? "") + Fx;
}
function o0() {
  return !1;
}
const Hc = () => "prod".toLowerCase() === "dev";
var Re;
class vx extends Array {
  constructor(t) {
    super();
    P(this, Re);
    T(this, Re, t);
  }
  get size() {
    return w(this, Re);
  }
  pushFixed(...t) {
    if (t.length > w(this, Re)) {
      const e = t.slice(-w(this, Re));
      this.push(...e);
      return;
    }
    this.length === w(this, Re) && this.splice(-2812 * -2 + 1 * 1783 + -7407, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(653 * 10 + 1559 + -8089);
  }
}
Re = new WeakMap();
const Lx = (o, i, t = vc) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), Tc = async (o) => Lx(o, 90), Pc = async (o) => Lx(o, 100, "image/png"), Jx = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, 4442 * 1 + 271 * 1 + -1571 * 3, -527 * 6 + -87 * 37 + 709 * 9, t.width, t.height), t;
}, qc = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(0, -12504 + 12504 * 1, o.width, o.height);
  return t;
};
function qg(o, i, t) {
  return t - i / (691 * -4 + 8274 + -5508) < -2723 + -563 * -2 + 1597 ? 6 * -146 + 2 * -149 + 1174 : t + i / (-15 * -130 + 4837 + 1 * -6785) > o ? o - i : t - i / (-113 * -46 + 2329 * -1 + -2867);
}
function jc(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (15 * -326 + -2137 * -4 + -3558)), n = e * (i.top / (2481 + -1214 * -5 + -3 * 2817));
  return { width: i.width, height: i.height, shiftX: qg(t, i.width, A), shiftY: qg(e, i.height, n) };
}
async function Zc(o, i) {
  const t = jc(o, i), e = Jx(o, t);
  return Pc(e);
}
const Vc = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height), A.stroke());
}, pi = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: n, width: g } = i, a = {};
  a.x = A, a.y = n;
  const x = {};
  x.topLeft = a, x.width = g, x.height = e, x.color = t, Vc(o, x, t);
};
function _c({ canvas: o, color: i, fill: t, offset: e = -7 * -1373 + -7219 * -1 + -561 * 30, polygon: A }) {
  const n = o.getContext("2d");
  if (!n) return;
  const { bottomLeft: g, bottomRight: a, topLeft: x, topRight: I } = A;
  t ? n.fillStyle = i : n.strokeStyle = i, n.beginPath(), n.moveTo(x.x + e, x.y + e), n.lineTo(I.x + e, I.y + e), n.lineTo(a.x + e, a.y + e), n.lineTo(g.x + e, g.y + e), n.closePath(), t ? n.fill() : n.stroke();
}
const Xc = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = i;
  return !(o.x < e || o.x > e + n || o.y < A || o.y > A + t);
}, zc = (o, i) => Object.values(o).every((t) => Xc(t, i));
function lo(o) {
  const { height: i, width: t } = Gx(o), e = (o.width - t) / 2, A = (o.height - i) / (-4229 + 13 * -394 + 9353), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = i, n;
}
function Ux(o, i, t) {
  const { height: e, width: A } = t, n = yc(o.width, o.height), g = A - n * i * (5947 * -1 + 1 * -5164 + -11113 * -1), a = e - n * i * (2 * 571 + -6690 + -6 * -925), x = (o.width - g) / (-377 * 8 + 7559 + -4541), I = (o.height - a) / (835 + -1 * 833), C = {};
  return C.shiftX = x, C.shiftY = I, C.width = g, C.height = a, C;
}
function L0(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function $c(o, i) {
  return { ...o, topLeft: L0(o.topLeft, i), topRight: L0(o.topRight, i), bottomRight: L0(o.bottomRight, i), bottomLeft: L0(o.bottomLeft, i) };
}
function AB(o, i) {
  const t = sc(o), e = t / i.width, A = { ...o };
  return A.smallestEdge = e, A;
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return fA(x - 637, C);
  }
  const e = o();
  function A(a, x, I, C, r) {
    return fA(C - -331, I);
  }
  function n(a, x, I, C, r) {
    return fA(x - -643, C);
  }
  function g(a, x, I, C, r) {
    return fA(x - 675, I);
  }
  for (; ; )
    try {
      if (-parseInt(A(120, 114, "N#Xd", 122, 112)) / 1 * (-parseInt(g(1145, 1132, "#8Re", 1121, 1140)) / 2) + -parseInt(g(1139, 1127, "J![G", 1139, 1134)) / 3 * (-parseInt(t(1081, 1077, 1079, "J![G", 1066)) / 4) + -parseInt(g(1123, 1131, "zqgc", 1121, 1129)) / 5 + -parseInt(g(1124, 1126, "$cBZ", 1114, 1121)) / 6 + -parseInt(g(1102, 1112, "J![G", 1107, 1118)) / 7 + -parseInt(n(-174, -184, -194, "N#Xd", -197)) / 8 + parseInt(n(-204, -199, -192, "29(b", -203)) / 9 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(uo, -4 * 57253 + -8 * -44474 + 3 * 113043);
function fA(o, i) {
  const t = uo();
  return fA = function(e, A) {
    e = e - (-2142 + -2 * -1289);
    let n = t[e];
    if (fA.Sgipdb === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      fA.pHgWmj = C, o = arguments, fA.Sgipdb = !0;
    }
    const a = t[-1573 + 121 * 13], x = e + a, I = o[x];
    return I ? n = I : (fA.RSklIs === void 0 && (fA.RSklIs = !0), n = fA.pHgWmj(n, A), o[x] = n), n;
  }, fA(o, i);
}
function eB({ assetsDirectoryPath: o, bramble: i }) {
  function t(x, I, C, r, E) {
    return fA(C - -829, I);
  }
  const [e, A] = WA();
  function n(x, I, C, r, E) {
    return fA(C - 909, I);
  }
  const g = e !== void (-1911 * -3 + -4479 * -1 + -4 * 2553);
  eA(() => {
    async function x() {
      function I(E, B, Q, d, u) {
        return fA(E - -792, d);
      }
      function C(E, B, Q, d, u) {
        return fA(Q - -565, d);
      }
      await i[C(-114, -115, -123, "SO!j")](Mx(o));
      function r(E, B, Q, d, u) {
        return fA(B - 908, d);
      }
      A(i[r(1371, 1368, 1356, "$cBZ") + r(1345, 1351, 1339, "J![G") + I(-351, -349, -360, "N5bu") + "t"]());
    }
    x();
  }, [i, o, A]);
  const a = {};
  return a[t(-374, "c4ap", -380) + t(-393, "r98B", -382)] = e, a[n(1352, "hrhq", 1348) + "sh"] = g, a;
}
function uo() {
  const o = ["W6TkWOXjtG", "atSwWOHsWO/cISkGfuJcHmoCyW", "DaNcHSorWQVdS8ovtSkGl8o5W7rl", "umk8W55YWP93WRnjWPSgW4y", "W7mrW6JdSWq", "mNf0WR7dG8kdW4Liqb0ppq", "W7VdTCocWQmd", "WRFcUCkXW7TvW4pcQcGYWQtdUmoQW7a", "uCk4W514WPKmW7H4WOKDW5b3W6G", "WRKyW5nCtSobeCoUAa", "omkfW5vJCMPD", "WP1ZdeurWO7cLmkrW4jzdbZdRq", "WQrMWOGuWQZcJmoEWOnVWRO2cSoF", "WQDHW4LjWPZcJYKvWRJdJCkRbW", "rSoeW4anEIuFDfNdHs0A", "WRtcV8kXWQ8dWR7dNHOu", "o8o6WOunnt8vW7DNW4KqcXu", "aSoVWPOnW4a", "yaKZnCohwCkI", "WROEW5migmk8z8oCtSkIWPldOaq", "pmoZWOuinJXNW7nJW40gea", "WPH0W60teW", "WR0zW5ijhCoajSoksmkCWQG", "BaVdNsnc", "ysBcQwy"];
  return uo = function() {
    return o;
  }, uo();
}
var Yx = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(Yx || {});
const en = {};
en.SIMD = "simd", en.NO_SIMD = "no-simd";
const jg = en, tn = {};
tn.Lower = "Lower", tn.Higher = "Higher";
const on = tn, X0 = {};
X0.VISIBLE = "VISIBLE", X0.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", X0.HIDDEN = "HIDDEN";
const fo = X0, nn = {};
nn.MOBILE = "MOBILE", nn.DESKTOP = "DESKTOP";
const Zg = nn;
(function(o, i) {
  function t(x, I, C, r, E) {
    return KA(E - 394, I);
  }
  var e = o();
  function A(x, I, C, r, E) {
    return KA(r - -41, C);
  }
  function n(x, I, C, r, E) {
    return KA(I - -791, E);
  }
  function g(x, I, C, r, E) {
    return KA(x - 845, r);
  }
  for (; ; )
    try {
      var a = -parseInt(g(1005, 1017, 1013, "3)Ej", 1016)) / 1 + -parseInt(g(1011, 1019, 1003, "BeB7", 1020)) / 2 * (parseInt(t(564, "d@vk", 570, 549, 561)) / 3) + parseInt(A(137, 121, "dhyG", 127, 137)) / 4 * (parseInt(g(1015, 1015, 1025, "1!gj", 1015)) / 5) + -parseInt(t(545, "@Bxd", 562, 553, 552)) / 6 * (-parseInt(n(-633, -627, -617, -627, "4ark")) / 7) + -parseInt(t(567, "@Bxd", 555, 575, 567)) / 8 * (parseInt(g(1002, 998, 1006, "2UAH", 1009)) / 9) + parseInt(A(123, 128, "n&w3", 130, 119)) / 10 + parseInt(g(1010, 1008, 1016, "hl4T", 1016)) / 11;
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ho, 633646 + 213217 * -1 + -1409 * 62);
function ho() {
  var o = ["dsJdHmkAFsavWO0uv2CYzq", "W44rW7ZdS8oL", "bYddJ8o/mx5RWO8K", "W5LBWQtcT1RdU8oOWOVcVmoLWOz6W5a", "gIBdS0WJWQBdLtrqf8oEsq", "WRn0h8o1WQKwia", "W65xWQNcJ8oPW60DmJCeWQ0", "WRieCCk0W5uxoxBcJCk7W6G", "W7ZcJ8kSysldKJG8WRm", "rmkLW7f9W4PZW7a5W7baEba", "W6NcVH1Xkq", "uxxcPSkwWOmPk0jfWOX5", "p8oSymoSWOv2W69GWPeiWPJdQq", "EmkTW61vWO5EWP9fWRbHWOvZ", "W4VcQJ/cPHOqW7zKW4xdICoQ", "WRNcRaGuDCkHomo5W5a", "uN3cO8kwWO9BewnYWPPVza", "WPxdOu8QEMz5WRCMcmkP", "obeoq1BdLSoK", "WPtdPeTdhMP6WOWg", "WPjrWPVdImoBWQezWP7cHG", "uNlcPmkvWOeHkMTtWQTN", "WPWZW6FdHv/cLLXGbG", "pgP/qmoEW7FdTCoGFhddV2O", "WQi7WP/dICon"];
  return ho = function() {
    return o;
  }, ho();
}
function KA(o, i) {
  var t = ho();
  return KA = function(e, A) {
    e = e - 150;
    var n = t[e];
    if (KA.ZWjmiN === void 0) {
      var g = function(r) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", Q = "", d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var p = 0, k = B.length; p < k; p++)
          Q += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      }, a = function(r, E) {
        var B = [], Q = 0, d, u = "";
        r = g(r);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (var f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      KA.hWHVop = a, o = arguments, KA.ZWjmiN = !0;
    }
    var x = t[157 * -1 + 4112 + 35 * -113], I = e + x, C = o[I];
    return C ? n = C : (KA.HeODXD === void 0 && (KA.HeODXD = !0), n = KA.hWHVop(n, A), o[I] = n), n;
  }, KA(o, i);
}
function tB({ crosshatch: o }) {
  function i(t, e, A, n, g) {
    return KA(g - -428, A);
  }
  return o != null && o[i(-258, -259, "2UAH", -270, -265) + "id"] ? on[i(-248, -243, "$1os", -267, -256) + "r"] : on[i(-273, -262, "WIAN", -269, -267)];
}
(function(o, i) {
  const t = o();
  function e(a, x, I, C, r) {
    return hA(x - -159, I);
  }
  function A(a, x, I, C, r) {
    return hA(a - 984, I);
  }
  function n(a, x, I, C, r) {
    return hA(a - -442, r);
  }
  function g(a, x, I, C, r) {
    return hA(I - 526, x);
  }
  for (; ; )
    try {
      if (parseInt(n(35, 37, 49, 44, "IWQk")) / 1 * (-parseInt(n(30, 43, 21, 29, "bmFR")) / 2) + -parseInt(e(289, 300, "IcQX", 316, 297)) / 3 * (parseInt(g(986, "JbJV", 1e3, 1009, 1017)) / 4) + parseInt(A(1454, 1458, "9E7K", 1445, 1448)) / 5 + parseInt(A(1433, 1426, "p$1j", 1434, 1442)) / 6 * (-parseInt(g(1e3, "hjg%", 995, 986, 1005)) / 7) + parseInt(e(278, 294, "OdZK", 289, 277)) / 8 * (-parseInt(e(287, 297, "OdZK", 310, 296)) / 9) + parseInt(g(994, "UtiV", 983, 984, 971)) / 10 + parseInt(A(1434, 1420, "M1bo", 1421, 1417)) / 11 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(po, 482 * -2369 + 764696 + -972862 * -1);
function po() {
  const o = ["nSknW7m/W5TXWRJcPZhdK8oCWRpcHG", "W5lcPCkkhrlcUfiwkJSKAa", "W4VcHh/dGwuEWOC", "WOZdVmogteW", "zhxcHSkRpq", "cCowxvqk", "WRpdQuOxWONdN0pdScVdJ8olW7FdRa", "cCoqxvua", "tMxcGSkk", "cSopkKFdQHVcL3FdKGFcJLBcKW", "W5lcQHvuW5u", "WPv5wCkDW7xdPIhcSmotWQtdLqhcHW", "WROVW7qnv8oviq", "w8ktaHngjSkAkJ9cW53cNmk5", "xmkQiGLzW63cUW", "kqRcLg9VWORdUJTmWOLh", "WPtdGmoNoCo9WPpdQW", "lN7cNt3dSKVdLCotys1aWP4", "E8kEWRpcPsm", "WOaOWPPFW7C", "W5dcRmobqfddM0m/", "WQdcK23dNYTDWQFdQx3cQmk6", "irRcUmkEW6impa", "WPBdUmoC", "WPhcQvRdR3e", "WQdcLg3dMYWfWRldJv/cJSkwW70", "hteoW6RcU8kaabpdPSkLy8oy", "oCoTW67dPhpdVmoruCooWPPHWRfTwq", "W6WSW4yFqG", "W4BdSeddRgeEWP8A", "WPlcHqJdGCo/kCoV", "WOmOfSoGW7enW6tdN8o1W6KIiu7dNW", "hSktbq", "WP3dL0dcS8kTECkAW6nlW6fNWRhdTW"];
  return po = function() {
    return o;
  }, po();
}
function hA(o, i) {
  const t = po();
  return hA = function(e, A) {
    e = e - (-3727 + 1 * -5521 + -12 * -808);
    let n = t[e];
    if (hA.veSNuh === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      hA.hqvEkO = C, o = arguments, hA.veSNuh = !0;
    }
    const a = t[6193 + 11 * -563], x = e + a, I = o[x];
    return I ? n = I : (hA.JskxIr === void 0 && (hA.JskxIr = !0), n = hA.hqvEkO(n, A), o[x] = n), n;
  }, hA(o, i);
}
function oB({ assetsDirectoryPath: o, children: i, bramble: t }) {
  function e(Q, d, u, c, f) {
    return hA(f - -184, u);
  }
  function A(Q, d, u, c, f) {
    return hA(d - -386, c);
  }
  const n = {};
  function g(Q, d, u, c, f) {
    return hA(Q - -294, f);
  }
  n[A(92, 75, 67, "a)XP") + "le"] = t, n[C("hjg%", 641, 664, 643, 658) + C("M1bo", 683, 678, 699, 682) + r(-159, -154, -161, "9E7K") + A(77, 79, 68, "KkHV")] = o;
  const { sunfish: a, crosshatch: x } = eB(n), I = {};
  I[g(170, 157, 154, 178, "9E7K") + e(268, 264, "IWQk", 291, 276)] = x;
  function C(Q, d, u, c, f) {
    return hA(f - 207, Q);
  }
  function r(Q, d, u, c, f) {
    return hA(d - -616, c);
  }
  const E = MA(() => ({ redfin: tB(I), sunfish: a, crosshatch: x, bramble: t }), [a, x, t]), B = {};
  return B[g(182, 166, 187, 189, "PW&V")] = E, B[g(187, 190, 186, 194, "IcQX") + g(186, 192, 181, 177, "IWQk")] = i, D(so[g(173, 167, 175, 187, "BHiS") + g(161, 175, 177, 176, "(8BF")], B);
}
(function(o, i) {
  function t(x, I, C, r, E) {
    return VA(I - -508, E);
  }
  var e = o();
  function A(x, I, C, r, E) {
    return VA(I - -633, r);
  }
  function n(x, I, C, r, E) {
    return VA(r - 895, E);
  }
  function g(x, I, C, r, E) {
    return VA(I - -399, r);
  }
  for (; ; )
    try {
      var a = -parseInt(t(-330, -321, -318, -327, "fLg!")) / 1 + -parseInt(g(-208, -203, -203, "WjU5", -203)) / 2 * (-parseInt(t(-321, -319, -313, -309, "I24L")) / 3) + parseInt(n(1077, 1079, 1089, 1079, "D7TK")) / 4 * (parseInt(A(-436, -435, -439, "$yKL", -438)) / 5) + -parseInt(g(-212, -218, -221, "aSYh", -228)) / 6 * (-parseInt(A(-449, -439, -439, "7Rrl", -440)) / 7) + -parseInt(A(-446, -438, -433, "R@(5", -430)) / 8 + -parseInt(t(-309, -315, -326, -313, "FiMG")) / 9 * (-parseInt(A(-452, -445, -441, "uluB", -439)) / 10) + -parseInt(g(-199, -207, -208, "yFoS", -201)) / 11;
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(yo, -736075 * 1 + -1 * -480177 + 637774);
function VA(o, i) {
  var t = yo();
  return VA = function(e, A) {
    e = e - (1325 * -1 + 6762 + -5259);
    var n = t[e];
    if (VA.eNoBys === void 0) {
      var g = function(r) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", Q = "", d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var p = 0, k = B.length; p < k; p++)
          Q += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      }, a = function(r, E) {
        var B = [], Q = 0, d, u = "";
        r = g(r);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (var f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      VA.tNHtuK = a, o = arguments, VA.eNoBys = !0;
    }
    var x = t[0], I = e + x, C = o[I];
    return C ? n = C : (VA.dKUvHL === void 0 && (VA.dKUvHL = !0), n = VA.tNHtuK(n, A), o[I] = n), n;
  }, VA(o, i);
}
function yo() {
  var o = ["xSk0W7a8w8kppaS", "WQBdV8k0DbOIkmo5CCkVyIhcOq", "W6miWOXlW45IW7vqW418WQhcV8kK", "WQxdUmk1Cb0SlSooD8k9rGxcJG", "W7OUW7WQWOWlW7hdJSobW7GL", "aCkbW4WhWQfaW6HjWQy", "W6JdSSkIWRKBxtu", "grmaW5VcHthdHbBcSmk3tW", "WR4yxCkgWPqfW5jaWO9xvq", "hmoWgf5/z8oPySkd", "W6qgW7pdGmkKWOJcImkyWRH7fa", "W6meWOjnW4aKWO5kW4nWWO4", "WRDvs8o1CfFcQdxdQrtcQmoXFSo4", "W57dQHWTcwJdOCoDuG", "pmk0WPxcU8kUWOBcGq", "EMhcSCkswSojCSkUs8o4W5X5W4G", "WRBcLhaUpSkjv0ZdS09B", "CZJdTeldT8k1ESocW5BdVvW", "lCo4WRNdTCk2WQJcQ8kT", "W7xdOZhdIvddItRdHmo9W64RwqW5", "WRebW75aWOFcSSo8WPrlW7uL"];
  return yo = function() {
    return o;
  }, yo();
}
function iB({ analytics: o, crosshatch: i }) {
  return i !== void (7896 + 3369 * 1 + -3755 * 3) && !i.isAnalyticsDisabled ? o : void (5749 + -5749 * 1);
}
function nB({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = o, n.crosshatch = e;
  const g = iB(n);
  return eA(() => {
    g && g.init(i);
  }, [g, i]), eA(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), g && g.walleye(t, A.getCustomerName()));
  }, [g, A, e, t]), eA(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function gB({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: n } = m0(), g = nB({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: n }), a = MA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ D(co.Provider, { value: a, children: t });
}
const Hn = nt(void 0);
Hn.displayName = "CameraOptionsContext";
function Ox() {
  const o = me(Hn);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}
function aB({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e
}) {
  return {
    onPhotoTaken: t,
    captureMode: i ?? zi.AUTO_CAPTURE,
    assetsDirectoryPath: Mx(o),
    sessionToken: e
  };
}
function xB({
  cameraOptions: o,
  children: i
}) {
  const t = MA(() => aB(o), [o]);
  return /* @__PURE__ */ D(Hn.Provider, { value: t, children: i });
}
const IB = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
}, Po = class Po {
  constructor() {
    b(this, "lastDetails", {});
    b(this, "delayedTime", -4 * -604 + 173 * -35 + 3 * 1213);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Po()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && IB(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
b(Po, "_instance");
let x0 = Po;
const vt = x0.getInstance(), Kx = (o, i, t = lc) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  vt.dispatchDelayedCustomEventOnChange(o, A, t);
}, Vg = (o, i) => {
  vt.dispatchCustomEventOnChange(o, i);
}, rB = (o, i) => {
  vt.dispatchCustomEventOnChange(o, i);
}, CB = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  vt.dispatchCustomEventOnChange(o, e);
}, cB = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const n = A;
  vt.dispatchCustomEventOnChange(o, n);
};
function BB(o, i) {
  const t = {};
  t.instructionCode = i;
  const e = t;
  vt.dispatchCustomEventOnChange(o, e);
}
const sB = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  eA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, rB(o, A);
  }, [t, e, o]);
};
function QB(o, i) {
  eA(() => {
    const t = (e) => {
      i(e);
    };
    return document.addEventListener(o, t), () => {
      document.removeEventListener(o, t);
    };
  }, [i, o]);
}
const EB = (o) => o === re.CONTROL ? !oi() : !0;
function dB(o, i) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: n } = Ue(), [g, a] = WA(), x = MA(() => {
    const Q = n && i && i.isStreaming && i.getCameraSettings().facingMode;
    return Q ? g ?? Q === "user" : g ?? EB(o);
  }, [i, g, o, n]);
  function I() {
    t !== QA.LOADING && e(QA.RUNNING);
  }
  function C() {
    g === void (-1 * -5687 + -9730 + 4043) ? a(!x) : a(!g);
  }
  async function r() {
    if (i) {
      e(QA.LOADING);
      try {
        await i.switchCamera(), e(QA.RUNNING);
      } catch (Q) {
        if (Q instanceof Error) {
          A(L.fromCameraError(Q));
          return;
        }
      }
      a(void (-2 * -3089 + -2428 + -750 * 5));
    }
  }
  function E(Q) {
    var d;
    switch ((d = Q.detail) == null ? void 0 : d["instruction"]) {
      case di.CONTINUE_DETECTION:
        I();
        break;
      case di.TOGGLE_MIRROR:
        C();
        break;
      case di.SWITCH_CAMERA:
        r();
        break;
      default:
        return;
    }
  }
  QB(o, E);
  const B = {};
  return B.shouldCameraMirror = x, B;
}
function lB(o, i) {
  eA(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      CB(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
var uB = Symbol.for("preact-signals");
function Tn() {
  if (dt > -13 * 341 + -3032 + 7466)
    dt--;
  else {
    for (var o, i = !1; void (39 * -222 + -3161 + 11819) !== i0; ) {
      var t = i0;
      for (i0 = void (-2061 + -1 * -8185 + 3062 * -2), gn++; void (-8658 + 1 * -5428 + 14086 * 1) !== t; ) {
        var e = t.o;
        if (t.o = void (5970 + 6 * 421 + -944 * 9), t.f &= -(3880 * 1 + -3411 + -466), !(6 * 194 + -6329 + 5173 & t.f) && Px(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(-4827 + -25 * 331 + 13102));
        }
        t = e;
      }
    }
    if (gn = 0, dt--, i) throw o;
  }
}
var Z = void 0, i0 = void (13 * 377 + 19 * -181 + -1 * 1462), dt = 7694 * -1 + 9095 + -1401, gn = 4 * -17 + 8560 + 193 * -44, Do = 1995 + -1 * 6233 + 163 * 26;
function Hx(o) {
  if (void (-2014 + 106 * 19) !== Z) {
    var i = o.n;
    if (void (-4373 * 1 + -3618 + -61 * -131) === i || i.t !== Z)
      return i = { i: 0, S: o, p: Z.s, n: void (12015 + -9 * 1335), t: Z, e: void (1701 * 2 + -5 * -1975 + 11 * -1207), x: void (2 * -4787 + -3 * -2341 + 2551), r: i }, void (20 * -376 + -10 * 22 + 7740) !== Z.s && (Z.s.n = i), Z.s = i, o.n = i, 8573 * 1 + 3344 + -5 * 2377 & Z.f && o.S(i), i;
    if (-(7279 + -3639 * 2) === i.i)
      return i.i = 0, void (4804 * -2 + -41 * 143 + 15471) !== i.n && (i.n.p = i.p, void (14847 + -101 * 147) !== i.p && (i.p.n = i.n), i.p = Z.s, i.n = void (-3097 + -825 * 1 + 2 * 1961), Z.s.n = i, Z.s = i), i;
  }
}
function uA(o) {
  this.v = o, this.i = -1771 + -161 * -11, this.n = void (751 * 1 + 7734 + -8485), this.t = void 0;
}
uA.prototype.brand = uB, uA.prototype.h = function() {
  return !(-6499 + 67 * -73 + 34 * 335);
}, uA.prototype.S = function(o) {
  this.t !== o && void (64 + -1 * 64) === o.e && (o.x = this.t, void (1 * 1259 + -2731 * 1 + 1472) !== this.t && (this.t.e = o), this.t = o);
}, uA.prototype.U = function(o) {
  if (void (-12733 + -17 * -749) !== this.t) {
    var i = o.e, t = o.x;
    void (1 * 2635 + 8893 * 1 + -11528) !== i && (i.x = t, o.e = void (73 * 19 + -2750 * 1 + -29 * -47)), void (-6233 + -3277 * 1 + 9510) !== t && (t.e = i, o.x = void (7721 + 1 * 5515 + -2 * 6618)), o === this.t && (this.t = t);
  }
}, uA.prototype.subscribe = function(o) {
  var i = this;
  return qn(function() {
    var t = i.value, e = Z;
    Z = void (2044 * 3 + -2471 + -3661);
    try {
      o(t);
    } finally {
      Z = e;
    }
  });
}, uA.prototype.valueOf = function() {
  return this.value;
}, uA.prototype.toString = function() {
  return this.value + "";
}, uA.prototype.toJSON = function() {
  return this.value;
}, uA.prototype.peek = function() {
  var o = Z;
  Z = void (731 + 1 * 8257 + -3 * 2996);
  try {
    return this.value;
  } finally {
    Z = o;
  }
}, Object.defineProperty(uA.prototype, "value", { get: function() {
  var o = Hx(this);
  return void (6106 * -1 + 85 * 109 + -3159) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (gn > 7928 * 1 + -1871 + 37 * -161) throw new Error("Cycle detected");
    this.v = o, this.i++, Do++, dt++;
    try {
      for (var i = this.t; void (-8049 + 4661 * -1 + 12710) !== i; i = i.x) i.t.N();
    } finally {
      Tn();
    }
  }
} });
function Tx(o) {
  return new uA(o);
}
function Px(o) {
  for (var i = o.s; i !== void 0; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(892 * 1 + 6 * -889 + 4442);
  return !(-2879 + -2194 * -3 + -3702);
}
function qx(o) {
  for (var i = o.s; void (3 * -1223 + -1533 * -2 + 603) !== i; i = i.n) {
    var t = i.S.n;
    if (void (2749 * -1 + -683 * 1 + 3432) !== t && (i.r = t), i.S.n = i, i.i = -(-5 * 516 + -2 * -827 + -927 * -1), void (-9050 + 1229 * -8 + 18882) === i.n) {
      o.s = i;
      break;
    }
  }
}
function jx(o) {
  for (var i = o.s, t = void (13559 + -7 * 1937); void (-813 + 8 * -19 + 965) !== i; ) {
    var e = i.p;
    -(1079 + 6787 * -1 + 5709 * 1) === i.i ? (i.S.U(i), void (8231 + -707 * -14 + -1 * 18129) !== e && (e.n = i.n), void (4666 + 2 * 3576 + 1 * -11818) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (3736 + 467 * -8) !== i.r && (i.r = void (-27 * -151 + 5653 + -9730)), i = e;
  }
  o.s = t;
}
function ct(o) {
  uA.call(this, void (-5875 * -1 + -1031 * 2 + -3813)), this.x = o, this.s = void (-5734 + -61 * -94), this.g = Do - (-7 * 83 + 3 * -2963 + 3 * 3157), this.f = -1 * -3646 + -6792 + -450 * -7;
}
(ct.prototype = new uA()).h = function() {
  if (this.f &= -(5289 + 397 * 19 + -12829 * 1), -29 * 331 + 245 * -15 + 3 * 4425 & this.f) return !1;
  if (1 * -4391 + 7391 + -2968 == (7937 * 1 + 4073 * -1 + 957 * -4 & this.f)) return !(-53 * 4 + 594 + -382);
  if (this.f &= -(-2 * -997 + -41 * -139 + -31 * 248), this.g === Do) return !0;
  if (this.g = Do, this.f |= -279 * -11 + -7202 + -159 * -26, this.i > 9 * -65 + 1369 * 3 + -3522 && !Px(this)) return this.f &= -(1850 * -5 + -1 * -8758 + 494 * 1), !0;
  var o = Z;
  try {
    qx(this), Z = this;
    var i = this.x();
    (-4 * -1507 + -9863 + -3851 * -1 & this.f || this.v !== i || -3849 + 2 * 2858 + 1 * -1867 === this.i) && (this.v = i, this.f &= -(1 * 388 + -8558 + 8187), this.i++);
  } catch (t) {
    this.v = t, this.f |= -3298 + -1 * -6684 + 3370 * -1, this.i++;
  }
  return Z = o, jx(this), this.f &= -(-4 * -2265 + -2673 + -6385), !(23 * 133 + 4779 + -1 * 7838);
}, ct.prototype.S = function(o) {
  if (this.t === void 0) {
    this.f |= 38 * 7 + 9684 + -9914 * 1;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  uA.prototype.S.call(this, o);
}, ct.prototype.U = function(o) {
  if (void (8579 + 8579 * -1) !== this.t && (uA.prototype.U.call(this, o), void (3385 + 5942 * 1 + -9327) === this.t)) {
    this.f &= -(-7894 + -6977 * 1 + 14904 * 1);
    for (var i = this.s; void (4715 + -2147 * -1 + -6862) !== i; i = i.n) i.S.U(i);
  }
}, ct.prototype.N = function() {
  if (!(38 * 124 + 81 * 106 + -13296 & this.f)) {
    this.f |= 20 * -163 + 8585 + -5319;
    for (var o = this.t; void (8203 * 1 + 4178 + -3 * 4127) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(ct.prototype, "value", { get: function() {
  if (-2793 + -2794 * -1 & this.f) throw new Error("Cycle detected");
  var o = Hx(this);
  if (this.h(), void (-721 + 1761 * -5 + 9526) !== o && (o.i = this.i), -11969 + -1 * -11985 & this.f) throw this.v;
  return this.v;
} });
function fB(o) {
  return new ct(o);
}
function Zx(o) {
  var i = o.u;
  if (o.u = void (-3172 + -57 * -133 + -4409), typeof i == "function") {
    dt++;
    var t = Z;
    Z = void (509 * 5 + -3714 + 1169);
    try {
      i();
    } catch (e) {
      throw o.f &= -(14 * 4 + 8438 + 11 * -772), o.f |= 2 * -198 + -9238 + 9642, Pn(o), e;
    } finally {
      Z = t, Tn();
    }
  }
}
function Pn(o) {
  for (var i = o.s; i !== void 0; i = i.n) i.S.U(i);
  o.x = void (6877 + 7 * -769 + -1494), o.s = void (1423 * -2 + 527 + 2319), Zx(o);
}
function hB(o) {
  if (Z !== this) throw new Error("Out-of-order effect");
  jx(this), Z = o, this.f &= -2, 181 * 53 + -4884 + -4701 & this.f && Pn(this), Tn();
}
function _t(o) {
  this.x = o, this.u = void (-131 * 15 + 730 + -5 * -247), this.s = void (1774 + 9227 * -1 + 7453), this.o = void (5143 + -89 * -5 + -5588), this.f = -4177 * 2 + -1899 * -1 + -1 * -6487;
}
_t.prototype.c = function() {
  var o = this.S();
  try {
    if (-2319 + -13 * -179 & this.f || void (-8083 * 1 + -43 * -65 + 1322 * 4) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, _t.prototype.S = function() {
  if (-6 * 1622 + 7964 + 1769 & this.f) throw new Error("Cycle detected");
  this.f |= -2845 + 2 * 1112 + 622, this.f &= -(-223 * -23 + 1 * -5655 + 535), Zx(this), qx(this), dt++;
  var o = Z;
  return Z = this, hB.bind(this, o);
}, _t.prototype.N = function() {
  !(3795 + -4165 * -1 + -23 * 346 & this.f) && (this.f |= 195 + -1 * 193, this.o = i0, i0 = this);
}, _t.prototype.d = function() {
  this.f |= 6550 + -4449 * 1 + -2093, 1 & this.f || Pn(this);
};
function qn(o) {
  var i = new _t(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var yi;
function Et(o, i) {
  J[o] = i.bind(null, J[o] || function() {
  });
}
function J0(o) {
  yi && yi(), yi = o && o.S();
}
function Vx(o) {
  var i = this, t = o.data, e = _x(t);
  e.value = t;
  var A = MA(function() {
    for (var n = i.__v; n = n.__; ) if (n.__c) {
      n.__c.__$f |= -2102 * 4 + 3187 * -3 + -5991 * -3;
      break;
    }
    return i.__$u.c = function() {
      var g;
      !ka(A.peek()) && ((g = i.base) == null ? void (-7689 + 1 * 8327 + -22 * 29) : g.nodeType) === 3 ? i.base.data = A.peek() : (i.__$f |= -8354 + -3 * -2785, i.setState({}));
    }, fB(function() {
      var g = e.value.value;
      return 2165 + -89 * -91 + -5132 * 2 === g ? 1101 + -367 * 3 : !(3 * 1454 + 5829 + -3397 * 3) === g ? "" : g || "";
    });
  }, []);
  return A.value;
}
Vx.displayName = "_st";
var an = {};
an.configurable = !(7957 + 9 * -367 + -4654), an.value = void (203 * 9 + -445 * -21 + -11172);
var xn = {};
xn.configurable = !(1 * 4738 + -13 * 752 + 5038), xn.value = Vx;
var In = {};
In.configurable = !0, In.get = function() {
  var o = {};
  return o.data = this, o;
};
var rn = {};
rn.configurable = !(41 * -70 + 7081 * 1 + 1 * -4211), rn.value = 1;
var Ot = {};
Ot.constructor = an, Ot.type = xn, Ot.props = In, Ot.__b = rn, Object.defineProperties(uA.prototype, Ot), Et("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof uA && (t || (i.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  o(i);
}), Et("__r", function(o, i) {
  J0();
  var t, e = i.__c;
  e && (e.__$f &= -(-3756 * 1 + 197 * 1 + 3561), (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var n;
    return qn(function() {
      n = this;
    }), n.c = function() {
      e.__$f |= 1, e.setState({});
    }, n;
  }())), J0(t), o(i);
}), Et("__e", function(o, i, t, e) {
  J0(), o(i, t, e);
}), Et("diffed", function(o, i) {
  J0();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var n = t.U;
      if (n) for (var g in n) {
        var a = n[g];
        void (4189 + -1 * -4996 + -9185) !== a && !(g in e) && (a.d(), n[g] = void (-7147 + -7 * -1021));
      }
      else t.U = n = {};
      for (var x in e) {
        var I = n[x], C = e[x];
        void (-3975 + -1264 * 7 + 12823) === I ? (I = pB(t, x, C, A), n[x] = I) : I.o(C, A);
      }
    }
  }
  o(i);
});
function pB(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, n = Tx(t);
  return { o: function(g, a) {
    n.value = g, e = a;
  }, d: qn(function() {
    var g = n.value.value;
    e[i] !== g && (e[i] = g, A ? o[i] = g : g ? o.setAttribute(i, g) : o.removeAttribute(i));
  }) };
}
Et("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (371 * 19 + -12 * 171 + -4997);
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
      a && (g.__$u = void (89 + -1154 * 1 + 1065), a.d());
    }
  }
  o(i);
}), Et("__h", function(o, i, t, e) {
  (e < -646 + 8963 * -1 + -27 * -356 || 6481 * -1 + 5715 + 775 === e) && (i.__$f |= 13 * 251 + 2236 + 23 * -239), o(i, t, e);
}), _A.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 1 * 7829 + 3305 * 2 + -5 * 2887 & this.__$f)) return !(-77 * 116 + 40 * 95 + 5132);
  if (-345 + -58 * -6 & this.__$f) return !0;
  for (var e in i) return !(4615 + 21 * 217 + -2 * 4586);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !0;
  for (var n in this.props) if (!(n in o)) return !(-2526 * 2 + -183 * 30 + 10542 * 1);
  return !(-5313 + -2657 * -2);
};
function _x(o) {
  return MA(function() {
    return Tx(o);
  }, []);
}
const mo = nt(void 0);
mo.displayName = "CameraServiceContext";
function yB() {
  const o = me(mo);
  if (o === void 0)
    throw new Error(`${mo.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function Xx() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Di() {
  return (await Xx()).filter((i) => i.kind === "videoinput");
}
function z0(o) {
  o.getTracks().forEach((t) => t.stop());
}
function Cn(o) {
  return o.getVideoTracks()[0];
}
function pA(o, i) {
  const t = wo();
  return pA = function(e, A) {
    e = e - (-1 * -2015 + -6995 + 741 * 7);
    let n = t[e];
    if (pA.xSxTFY === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      pA.GJadxJ = C, o = arguments, pA.xSxTFY = !0;
    }
    const a = t[930 + -3 * 310], x = e + a, I = o[x];
    return I ? n = I : (pA.TEwHjB === void 0 && (pA.TEwHjB = !0), n = pA.GJadxJ(n, A), o[x] = n), n;
  }, pA(o, i);
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return pA(r - -641, x);
  }
  function e(a, x, I, C, r) {
    return pA(r - -289, I);
  }
  function A(a, x, I, C, r) {
    return pA(C - 785, I);
  }
  const n = o();
  function g(a, x, I, C, r) {
    return pA(I - -527, x);
  }
  for (; ; )
    try {
      if (-parseInt(e(-95, -94, "OtR8", -70, -81)) / 1 + -parseInt(e(-64, -79, "]BAE", -88, -76)) / 2 + parseInt(e(-79, -80, "]BAE", -60, -69)) / 3 * (-parseInt(t(-414, "tNW@", -408, -431, -422)) / 4) + -parseInt(e(-68, -68, "qYH5", -69, -56)) / 5 * (-parseInt(A(1001, 1024, "bQfs", 1012, 1002)) / 6) + parseInt(e(-61, -68, "7Dnh", -63, -59)) / 7 + -parseInt(g(-317, "93%U", -312, -319, -321)) / 8 * (parseInt(g(-296, "7Dnh", -310, -300, -319)) / 9) + parseInt(t(-421, "O2ND", -414, -423, -409)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(wo, 96176 * -8 + -1 * -1109918 + 431121);
function wo() {
  const o = ["pNFcMWDLWR/cM8kF", "WPGXW55Ok8kpcw3dH8kjWRRcUG", "WRhdTrv/FsZdPSoxWQVdLw/cHG", "hCkHW7ub", "hCoGW6dcR303gYm", "W5bSCmkmha", "W41aBYim", "F8o6i3SKWO1HfCoA", "tCoKWQTsW7mKEGaYjqr4", "p8kQB8kiW54", "F8oqr8kEga", "W7G7WQeYt8oJjYPbpSowp8kZ", "W74Clb/cVmkRWRXnWONdRuxdO8oq", "dCkpWO3cLCouW7KzFKC2DbhcUmkY", "W7tcRConh8oEWQa8lW", "D2eTk8ogFIaagX1bWRC", "dmkJCCoOWR3cPmkGrgOxxq", "WOW5jCo6w8kBzcSeW5rzWOK", "wmo4jSkJW4W", "WO7dRCoKexDBjmoTW49WWQtcOdq", "WQuOWRhcMmoaBSoZW51xWOxcI8ki", "cSkMDmoGWRFdHSorguipECoUW73cKG", "WPKWW5TQjSkiy2ldPSk4WP7cUmkC", "WOtdQ8kgCXC4F8oS", "W7uDketdVmovW6r+WPu", "sCo1i8kKW6W", "W7y8WQu5sSkevJbPi8om", "WQRdR8oZjCoi"];
  return wo = function() {
    return o;
  }, wo();
}
function DB(o) {
  const i = new Uint8Array(o);
  function t(A, n, g, a, x) {
    return pA(g - -410, a);
  }
  function e(A, n, g, a, x) {
    return pA(g - 553, A);
  }
  return window[t(-179, -199, -188, "bQfs")](i[e("t)08", 779, 769) + "e"](function(A, n) {
    function g(x, I, C, r, E) {
      return t(x - 440, I - 294, E - -394, r);
    }
    function a(x, I, C, r, E) {
      return t(x - 412, I - 60, C - 1131, x);
    }
    return A + String[a("qYH5", 927, 939) + g(-592, -565, -585, "!1rB", -579) + "de"](n);
  }, ""));
}
function cn(o) {
  const i = new ArrayBuffer(o[n(1133, "AnK)") + "h"]);
  function t(g, a, x, I, C) {
    return pA(I - 56, a);
  }
  const e = new Uint8Array(i);
  function A(g, a, x, I, C) {
    return pA(x - -372, C);
  }
  function n(g, a, x, I, C) {
    return pA(g - 905, a);
  }
  for (let g = 0, a = o[t(284, "ce&L", 287, 285) + "h"]; g < a; g++)
    e[g] = o[A(-177, -170, -163, -163, "t)08") + A(-152, -147, -148, -160, "OtR8")](g);
  return i;
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return yA(r - -373, x);
  }
  function e(a, x, I, C, r) {
    return yA(C - -459, a);
  }
  function A(a, x, I, C, r) {
    return yA(x - -256, I);
  }
  const n = o();
  function g(a, x, I, C, r) {
    return yA(a - 38, I);
  }
  for (; ; )
    try {
      if (parseInt(g(291, 340, "giiW", 300, 396)) / 1 + parseInt(e("sV8z", -333, -87, -249, -128)) / 2 + parseInt(g(486, 589, "Wx7e", 585, 523)) / 3 * (parseInt(g(363, 326, "FS34", 338, 241)) / 4) + parseInt(t(155, "SX*f", 162, 223, 113)) / 5 + -parseInt(g(547, 410, "b6r3", 692, 649)) / 6 * (parseInt(A(101, -34, "R$ai", -78, -119)) / 7) + parseInt(t(-249, "9u[M", -184, -48, -91)) / 8 + -parseInt(g(421, 575, "2Dkc", 389, 276)) / 9 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(bo, -136283 * -1 + 800925 + -289 * 458);
const bA = {};
bA[N("$fcj", 1106, 1100, 1273) + N("e6yN", 1453, 1396, 1529) + N("XyRR", 1319, 1203, 1314) + N("@S%k", 1347, 1238, 1398) + m("k9@a", -517)] = y(-574, -518, "yy!a") + G(218, 376, "H#74") + R(9, -3, -43, "G!oo") + m("hAHj", -470) + m("R$ai", -486) + m("$fcj", -672) + N("sRI8", 1582, 1618, 1440) + m("yy!a", -662), bA[m("J&zO", -550) + y(-576, -642, "[3@j") + m("#eE0", -394) + y(-556, -516, "HwJv") + R(-59, -23, 125, "@S%k") + G(-8, -171, "f9@P")] = m("sV8z", -705) + G(209, 45, "#r#2") + y(-721, -743, "GZ!J") + y(-298, -439, "twxt") + m("(Jys", -646) + N("sRI8", 1344, 1420, 1368) + R(37, -43, -146, "G!oo") + y(-406, -459, "FS34");
function m(o, i, t, e, A) {
  return yA(i - -904, o);
}
function yA(o, i) {
  const t = bo();
  return yA = function(e, A) {
    e = e - (2920 + -1 * 2735);
    let n = t[e];
    if (yA.NABdJC === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      yA.cfiFdx = C, o = arguments, yA.NABdJC = !0;
    }
    const a = t[274 * 11 + -317 * -6 + -4916], x = e + a, I = o[x];
    return I ? n = I : (yA.GZPdjZ === void 0 && (yA.GZPdjZ = !0), n = yA.cfiFdx(n, A), o[x] = n), n;
  }, yA(o, i);
}
function R(o, i, t, e, A) {
  return yA(i - -422, e);
}
bA[m("HwJv", -385) + R(-207, -149, -326, "nc8l") + N("fmu]", 1487, 1519, 1530) + y(-746, -670, "GZ!J") + N("fmu]", 1296, 1421, 1243)] = m("P]2T", -360);
function G(o, i, t, e, A) {
  return yA(o - -193, t);
}
function N(o, i, t, e, A) {
  return yA(e - 999, o);
}
bA[m("4pj%", -632) + y(-384, -481, "RTtg") + R(-248, -69, 14, "9^jc") + N("9u[M", 1510, 1430, 1366) + m("&gd*", -466) + G(288, 179, "P]2T")] = m("@S%k", -542) + m("RTtg", -465) + m("@S%k", -670) + y(-756, -689, "[3@j") + R(-104, -153, -287, "9u[M") + y(-772, -675, "RTtg") + y(-387, -440, "E^j5") + m("sRI8", -451), bA[y(-793, -732, "@S%k") + N("P]2T", 1091, 1086, 1217) + m("p2m)", -684) + "L"] = m("Ip[1", -593) + y(-359, -526, "P]2T") + R(34, 96, 151, "fmu]") + G(43, 34, "2Dkc") + m("E^j5", -514) + m("6&gy", -540), bA[N("giiW", 1519, 1648, 1536) + R(5, -86, -159, "hAHj") + N("R$ai", 1505, 1678, 1502) + m("9^jc", -564) + R(-8, -66, -181, "b6r3")] = G(138, -3, "twxt") + N("SX*f", 1169, 1383, 1292) + y(-516, -600, "HwJv") + G(223, 350, "J&zO") + G(109, -58, "sRI8") + G(106, 271, "GZ!J") + y(-397, -512, "ogF@") + y(-751, -737, "giiW"), bA[N("OB5M", 1302, 1361, 1449) + m("FS34", -457) + m("OB5M", -522) + y(-745, -764, "hAHj") + R(-326, -209, -390, "OB5M") + "Y"] = m("H^98", -444) + G(291, 224, "V[YX") + y(-491, -463, "k9@a") + N("Wx7e", 1205, 1436, 1340) + N("H#74", 1428, 1339, 1376) + y(-508, -654, "HwJv") + N("XyRR", 1166, 1296, 1284) + N("twxt", 1340, 1037, 1187), bA[N("GZ!J", 1225, 1214, 1295) + y(-356, -453, "6&gy") + "NV"] = m("b6r3", -715), bA[m("9^jc", -492) + G(312, 157, "4pj%") + y(-604, -610, "p2m)") + N("E^j5", 1306, 1421, 1419)] = y(-610, -543, "f9@P") + y(-759, -690, "#r#2") + G(162, 193, "FS34") + R(-289, -203, -251, "sRI8") + y(-867, -720, "(Jys") + R(-72, 10, -87, "V[YX") + N("[3@j", 1421, 1445, 1488) + G(230, 142, "giiW") + G(349, 168, "]MEB") + R(142, 36, 163, "Wx7e") + G(129, 54, "XyRR") + m("9u[M", -654) + N("hAHj", 1464, 1482, 1326) + G(127, -45, "bEwS") + m("#eE0", -617) + m("[3@j", -698) + y(-627, -789, "W1rH") + G(86, 123, "hAHj") + R(-198, -196, -191, "#r#2") + y(-596, -705, "]MEB") + G(71, 64, "9u[M") + m("H^98", -381) + y(-492, -489, "p2m)") + y(-746, -651, "R$ai") + R(-126, 33, 38, "hAHj") + m("[3@j", -408) + N("2Dkc", 1148, 1289, 1237) + m("sRI8", -480) + m("D[s^", -379) + N("b6r3", 1332, 1119, 1193) + y(-530, -545, "b6r3") + y(-451, -534, "sV8z") + m("9u[M", -657) + m("6&gy", -554) + N("J&zO", 1460, 1494, 1475) + N("sRI8", 1220, 1278, 1312) + m("(Jys", -406) + G(144, 312, "e6yN") + m("sV8z", -473) + y(-725, -714, "giiW") + R(165, 65, 206, "ogF@") + N("(Jys", 1521, 1458, 1421) + m("2Dkc", -510) + y(-530, -515, "#eE0") + y(-535, -479, "f9@P") + y(-669, -519, "RTtg") + R(-125, -187, -140, "SX*f") + y(-508, -503, "yy!a") + m("ogF@", -626) + G(220, 196, "2Dkc") + G(285, 252, ")2T1") + N("HwJv", 1418, 1268, 1293) + y(-627, -752, "yy!a") + R(55, -44, 115, "giiW") + G(63, -54, "ogF@") + G(279, 158, "LJnB") + G(259, 202, "#r#2") + m("R$ai", -588) + y(-681, -631, "P]2T") + R(236, 60, -34, "R$ai") + N("#r#2", 1317, 1473, 1296) + N("[3@j", 1615, 1380, 1499) + G(4, -151, "&gd*") + N("6&gy", 1155, 1242, 1303) + y(-635, -691, ")2T1") + m("fmu]", -459) + R(15, 68, 156, "[3@j") + y(-462, -596, "4pj%") + R(-156, 3, -10, "$fcj") + N("(Jys", 1285, 1239, 1311) + G(-1, 4, "V[YX") + y(-682, -628, "LJnB") + y(-639, -583, "#r#2") + y(-633, -751, "H^98") + m("sV8z", -462) + R(82, -79, -159, "9^jc") + G(141, 269, "4pj%") + R(-140, -134, 31, "giiW") + y(-611, -763, "sV8z") + G(311, 388, "$fcj") + m("e6yN", -398) + m("f9@P", -696) + y(-578, -677, "twxt") + G(264, 403, "Ip[1") + G(32, 37, "D[s^") + m(")2T1", -692) + m("p2m)", -483) + R(-181, -124, -134, "z8W1") + y(-678, -719, "G!oo") + y(-885, -775, "k9@a") + y(-789, -615, ")2T1") + G(333, 451, "6&gy") + G(224, 138, "OB5M") + y(-882, -779, "9^jc") + R(-273, -122, -200, "G!oo") + G(53, 4, "J&zO") + G(183, 110, "hAHj") + N("Ip[1", 1549, 1547, 1514) + N("4pj%", 1521, 1443, 1493) + N("Ip[1", 1363, 1520, 1527) + N("H#74", 1579, 1550, 1519) + y(-663, -672, "ogF@") + G(131, 269, "E^j5") + m("$fcj", -365) + y(-778, -638, "LJnB") + m("#r#2", -650) + y(-692, -617, "b6r3") + G(87, 162, "Wx7e") + R(-20, 51, 60, "f9@P") + G(299, 213, "D[s^") + R(-128, 27, 4, "FS34") + m("sV8z", -391) + R(-24, 37, 191, "#eE0") + G(211, 218, "z8W1") + R(138, -13, -27, "H#74") + N("twxt", 1197, 1159, 1250) + G(315, 186, "2Dkc") + m("f9@P", -375) + m("$fcj", -587) + m("HwJv", -441) + m("p2m)", -586) + y(-599, -765, "G!oo") + m("bEwS", -489) + N("9^jc", 1105, 1295, 1203) + G(18, -106, "e6yN") + N("LJnB", 1353, 1593, 1511) + y(-503, -447, "sV8z") + N(")2T1", 1357, 1288, 1331) + y(-914, -741, "GZ!J") + y(-615, -574, "sV8z") + m("FS34", -429) + m("P]2T", -359) + N("ogF@", 1421, 1233, 1384) + y(-749, -575, "giiW") + m("e6yN", -659) + G(339, 503, "[3@j") + m("p2m)", -532) + m("9u[M", -637) + G(10, -64, "G!oo") + R(-82, -12, -69, "#r#2") + m("6&gy", -380) + N("hAHj", 1372, 1208, 1291) + R(-78, -15, 72, "W1rH") + y(-829, -661, "OB5M") + y(-610, -513, "2Dkc") + y(-755, -632, "P]2T") + G(31, 142, "f9@P") + m("GZ!J", -598) + R(-256, -220, -138, "HwJv") + G(137, 116, "9u[M") + y(-612, -771, "XyRR") + N("OB5M", 1324, 1312, 1308) + y(-633, -634, "twxt") + G(198, 249, "p2m)") + G(151, 18, "#r#2") + y(-565, -551, "#eE0") + G(114, 186, "SX*f") + N("FS34", 1066, 1222, 1186) + m("H#74", -468) + y(-537, -699, "P]2T") + R(-196, -63, 18, "hAHj") + N("GZ!J", 1408, 1540, 1484) + R(-66, -157, -16, "XyRR") + m("sV8z", -718) + R(-95, 75, 181, "fmu]") + R(16, -54, 5, "R$ai") + R(-126, -34, 129, "W1rH") + G(277, 167, "V[YX") + y(-463, -524, "W1rH") + R(-72, -75, 53, "FS34") + y(-574, -492, ")2T1") + m("p2m)", -569) + m("@S%k", -642) + y(-624, -446, "&gd*") + N("(Jys", 1350, 1227, 1350) + y(-305, -445, "hAHj") + G(108, 274, "HwJv") + N("#r#2", 1532, 1613, 1482) + N("$fcj", 1282, 1272, 1189) + y(-725, -780, "#eE0") + m("FS34", -460) + R(150, -8, -73, "R$ai") + R(-75, -182, -261, "GZ!J") + m("E^j5", -533) + m("R$ai", -671) + y(-716, -554, "9u[M") + G(321, 359, "XyRR") + y(-355, -444, "$fcj") + y(-595, -537, "sV8z") + G(196, 222, "]MEB") + R(75, 47, -118, "W1rH") + G(93, 217, "V[YX") + m("9^jc", -636) + y(-440, -579, "Wx7e") + R(113, 100, 15, "H#74") + y(-291, -437, "OB5M") + N("H^98", 1436, 1584, 1506) + R(-334, -167, -195, "[3@j") + y(-693, -749, "p2m)") + m("#eE0", -523), bA[m("OB5M", -496) + N("e6yN", 1447, 1182, 1344)] = "/", bA[R(53, -61, -19, "Wx7e")] = y(-845, -759, "giiW") + N("[3@j", 1372, 1404, 1320), bA[y(-659, -540, "giiW")] = !1, bA[R(-43, 49, 27, "HwJv")] = !0, bA[m("twxt", -681)] = !1, bA[N("2Dkc", 1593, 1348, 1473) + G(258, 216, "nc8l") + G(182, 160, "V[YX") + N("R$ai", 1569, 1372, 1402)] = R(-331, -173, -223, "#r#2");
var _g = bA;
function bo() {
  const o = ["a8o/jSoOjG", "W7hcP0C2W5u", "pCo0WPCcbq", "W6aAimkopW", "d8ogAxbM", "WRBcJmkRW4/cRW", "As7cLItdSW", "W4vfASoImq", "W6ZcSCoXW7ea", "ySoCW5ze", "tSk4oebH", "y17cMsOP", "W40kWR4vWQC", "WObirmo8W7a", "a8knWPaNwG", "rLlcS8o9rq", "WQ4nW5tcRSol", "BCkff8oitq", "qJJdItdcLq", "WQ/cPCo1xYe", "W4TeWQSGWQq", "ggpdRCoohW", "hW3dVbG", "m8oYDLhcQq", "pWeAvSoK", "CCkGdmoAAG", "W6RcSf/cMCko", "W53dLr1Luq", "dgrrWPjO", "W5KEW5G", "W78MqmkKWRO", "W7vlWPXxWPu", "W6XqWPPvWPu", "WODrW5pdRSoO", "gG/dQItcKG", "W7fCWPCJWOy", "WPGUW77cKmo3", "WOrUWRlcHSo3uHpdTG", "WPPrW6BcPSoK", "BLxdSY7dVq", "WOiDzmozW6O", "d04tW7ldGa", "W7GJrmkKW6O", "yfNdQ8kRW4u", "cmkPqLFcHa", "CMFcNtLK", "kbHJfCkx", "W6K2WOlcLmk0", "fvZdHZJcHa", "WQ7dQ8kXa2i", "CKCkW6GX", "oSkfWOOPWRW", "WP/dUCkMW6FdIW", "WPVdK8kRW4hcQq", "ksFcOX7cPa", "BuuDga", "ASoQWQmrpG", "DZPxzW0", "rxJcRHDw", "nKVdUCo/ga", "WOJdJSkXW4S", "umkeytldSa", "W6JcVupcUSkj", "wmozWROIna", "WQWBW5BcT8kl", "WPZdKCozWPxcRq", "Emk0W6r+WPq", "n8kMW7ddOvC", "FmoaqJFdLq", "WOBdNqddOmoVAN5Ij8kVW4KSfW", "bt3cGCkB", "W511f8k/lG", "kM8nWQxcKa", "zbJcNCkIka", "nSo6eNrP", "fepdJWjsW7H0Cw3dSmk5BCo2", "iduij1S", "k8kAW4xdJLm", "WP00pYhdSq", "WRSXjuxdTq", "aSoDgMTB", "DSkjW4GQW7K", "oSkHAG", "xKuHsv4", "yrddJ8oExa", "WO4MwYpdOq", "EY7dVxtcQG", "be7cJqug", "FK4GW7mx", "WP0XwIhdSG", "W6FcJeFcQCk7", "BbNcLSkPFSkHuvBdSSkNWRKkjG", "W6rSb8kAaa", "j8kEWPy9ca", "xMiZjuG", "WPTaaCk9W7m", "WP7cMmkXbai", "wCoeWOjxoq", "sYC7rCoAW7P/", "nYNdIdJcGq", "dGuBD8oK", "v8kYtdRdMG", "W6PCWQGjWOe", "rCoNahP3", "nYnonmow", "WQGrW47cRmog", "dI3cMCoWWPS", "rbtdQcdcJq", "WO7dLCkQW4RcOG", "yCkIeCo8wq", "W7ihW5BdQmkg", "umo4fSokva", "WPZcLmk0E2m", "W6ldQelcIfO", "tCkzW5roW4a", "WOtdSHBdI24", "W7xdR3BcPve", "psXmo8kG", "W5xcIwBcSSkL", "WOrTmSkqW7y", "BYtdIaJcQq", "WPWroYldPa", "W5DQWPG9WPu", "W6pdUHbNvG", "y8kkEshcSq", "l8kqW7adAa", "W4SsW5OwWPy", "yCkDWOaPASkWW4a", "dCkzWRGUCW", "d8kMWQf8W70", "lmkxsgxcLW", "tsFdSmoGEW", "dKJdIL7dLW", "pbFcQmkXW44", "kc/cR8klWPG", "W67cUNJcLSkg", "W7rsWQOjWQe", "WQyMW4/cHSkb", "lmobgJdcKq", "dqiwzW", "p8o6WO8vBG", "rwhcHK5P", "e3hdTCoDkq", "jYKzie4", "tZ4Wz8oI", "jCkBDIJdIW", "kd4on04", "W4lcVa5YwW", "W5JdMKJcNwa", "W58ZWP4eW7O", "jJBdUZFcIG", "W7lcMNSLW6a", "WOldSCk7WRZcSW", "W53dPCoxWQWV", "W4ZcT2KHW7S", "fwNcTCo2W78", "WQyrxGFcHa", "cZrsWPDJlfWeWO8qW7L0WP1G", "W5lcJx3cGSkL", "qSkzlLCK", "WOKXW4TDW7DnDb/dOmkle8okmq", "WQnwn8kAW6u", "gmksW6tdH0i", "AeZdUcddPW", "WRq1s8o+", "W47cU8oUWPCL", "bCkisJVcIG", "W4TxWPGlWPK", "gtNcKCkmW78", "WRnZmmoJW7G", "oSorjhHh", "W60PW6e3WRW", "WP8ByCoNzmk/rwRdVd5/pSoF", "smo2FG", "W7pdLglcVCkD", "ESkAWOe6W44", "mxiCWQVdHG", "lmkxW4pdVN0", "xCkiW7XFWRW", "WO3cQCoKut0", "W6hdPd9Azq", "mmoklNKL", "zCo7W7Dzda", "W7f3hmk1nq", "W4DeDNr3", "huhcOhGo", "Fmo5WO0urq", "oCk/jbXW", "ASkGWRC/dW", "cmk8Fgvg", "ySoDeMTD", "hNZcIW", "nSoAWOqTW6W", "WQXUWRTKWQ0", "CYJdLXi", "W7nJe8k7W68", "WOhdT8onWPldKa", "l3FdPmoyqq", "W7DUf1qF", "DGT1W6/cKa", "ghdcImo2zq", "wCo/EYBdPq", "WR/dNCoPWO3dUq", "WQHVWRLKW7KDW5FcKSoyW7lcNmkm", "Cu00WPxdUG", "W7S1xsBdOG", "nYKXyfi", "W67cOmoXWOSe", "AdJcIKuW", "W5bJWOq", "a3lcHu8E", "W5xcGSoWWOK1", "W4rYewqx", "lLZdJCoVjG", "oeNcUCoLra", "wCkLfeuf", "WQ06WRWDWP0", "gKNcPCorEa", "W7dcHuu0W5S", "quFcUmosDa", "WOZdKGxdQ8oNBxHSp8klW64cdW", "qb3cLuiF", "wNGMp0C", "WPCszSoqW6C", "aCkdWPyQzW", "BqddNCoKsq", "p2NcHbK", "t8o2W6q", "hHWubNq", "amk0qJ3cKW", "W5y4WPxdVmob", "hslcGmkyW4i", "rbddQmkhidhcJx3cLCokp8o9WQ8", "k8kPW4tdSW", "oLBdGSoTwv1nW7m", "pSoHDhb6", "BN3dG8oZda", "fs7dGHdcHa", "WQ4nWRGhWQu", "cCkMW43dNf0", "CuK3WPddTW", "W7ngdrdcHG", "omo9xsRcNG", "fKpdH1vq", "WPhdISkeW4lcTG", "iIKppq", "dCohewTm", "fhiuWPNdTq", "aKWnau4", "ACk5Fu8N", "W6tdOmo1W7mJ", "WOVcR8koW4lcQG", "WQ52qCkMW6O", "F8oCyMpdGW", "W7ddNMhcJKW", "wgCbW4q+", "cmodk3rK", "r0dcSaue", "Drevmw0", "cvldRZ3dRG", "bmopc29F", "ga1UeCkx", "ahJcVY0+", "WR12r8oNW5a", "xSoLW6PTWRO", "s8kCgf8x", "W69paSkzbW", "eCkFWPu8aq", "l8oDmxDa", "tuRcLHVdKa", "gmkUxwzK", "WQGhbXVdMq", "BmkFhcef", "DSkRW58tW4i", "z8oNW4vlWPW", "W7PBWOddQSklB8kiW61Dd8kTpW", "WR3dUmkCW67dHa", "bSkUEWVcMG", "wxmAW5yU", "W49OymkKoq", "ihVcQSorra", "kSodhMVcLG", "lSk4W7tdRNa", "f1BcSSos", "AguwleK", "gSorshDF", "aCkfxYNcLa", "WPDIa8kaW7W", "WOyYktRdVG", "x28aW5qJ", "W6VcT0WYW5O", "WO4/WQxcPSoG", "amoUyW3dKa", "WPlcOuuHW5a", "mx0KWQ3dTa", "WPD+pq", "t8oWhwldQG", "WQCQW4dcICka", "hdpdSmkxWPK", "lJhcLCkvW4m", "W5NdLftcTvW", "iwpcVXy7", "fSkpfuBdMG", "W6lcOeCSW4K", "WOtdSCooWRVdHW", "W74GW63dRSog", "ls8YrSor", "WReUxSoIW58", "zCo4W7DycSo7WPxcT1dcISooWOnf", "hmkPFfBcQa", "W4zpj8kXjW", "W7evWOlcGa", "WPerDNiM", "maO3rSos", "WPRdK18", "m8kUW6/dKNy", "kSo7uhPD", "oxFcK8oKxG", "WPzHzSkzpG", "W7mRt8kNWRO", "i8okn2rw", "vSoyW4ryWRq", "oContMLg", "W5VcI1dcOCkM", "W5RdNKVcNW", "gMZdSmondW", "amo2vthcQa", "wSkUD8k8kG", "W4KvW4OYWP4", "WRRdPSo1W7Hw", "WR3cQ8onWR3dIq", "sc/dTKddOW", "z1/dQd7dRa", "p8kLW59wuKNdQ8kMtIxdPK3cLZy", "vMGChNm", "jH5rzgK", "EvNdTdtdQq", "pelcT8oqW7i", "F2xcTZn3", "AdddS8oHBG", "xSo4W6zZWRO", "i8ooeh4L", "mSoJnufH", "FmkwW5bUWRu", "wmobWRDwaW", "xcj9zbhdHZTuWQpcLmoInG", "nw4JWRG", "e04iWPxdGa", "W5ddMKxcIg0", "W61+hfaq", "oCoREID6WQqSs8khWOxdGHe", "WO4uWRZcKSoQ", "DueNWQpdHa", "W7vWg8kBgG", "mvaAnXa", "W4SZW4eWW7K", "W5DqW4K/WOG", "z0NcId1v", "EL3dTc7dVq", "umo4cmk8sa", "nxCsWOtcLG"];
  return bo = function() {
    return o;
  }, bo();
}
async function mB() {
  function o(C, r, E, B, Q) {
    return R(C - 87, Q - 416, E - 429, r);
  }
  function i(C, r, E, B, Q) {
    return N(C, r - 453, E - 232, E - -1283);
  }
  function t(C, r, E, B, Q) {
    return N(C, r - 427, E - 228, B - -1034);
  }
  function e(C, r, E, B, Q) {
    return G(C - 177, r - 156, E);
  }
  const A = {};
  A[a(816, 727, 992, "6&gy", 904)] = Eo, A[i("ogF@", -107, -88) + "h"] = 256;
  const n = await window[e(479, 598, "]MEB") + "o"][i("V[YX", 45, -21) + "e"][t("twxt", 372, 439, 444) + i("G!oo", 63, -27) + "y"](A, !0, [o(470, "f9@P", 364, 253, 367) + "pt", a(989, 937, 1e3, "6&gy", 928) + "pt"]), g = Uint8Array[e(279, 196, "ogF@")](Array(23 * 281 + -1696 * -2 + -1 * 9839)[t("nc8l", 78, 336, 179)](-485 * -2 + 65 + 1 * -1035));
  function a(C, r, E, B, Q) {
    return R(C - 313, Q - 952, E - 351, B);
  }
  const x = window[e(177, 254, "ogF@") + "o"][e(350, 236, "bEwS") + e(307, 352, "D[s^") + i("R$ai", 28, 76)](g), I = {};
  return I[e(477, 383, "hAHj")] = n, I.iv = x, I;
}
function y(o, i, t, e, A) {
  return yA(i - -980, t);
}
async function wB(o) {
  const { iv: i, key: t } = await mB(), e = {};
  function A(r, E, B, Q, d) {
    return R(r - 329, B - -564, B - 429, d);
  }
  e[A(-664, -597, -553, -718, "#eE0")] = Eo, e.iv = i;
  function n(r, E, B, Q, d) {
    return y(r - 272, d - 1421, Q);
  }
  function g(r, E, B, Q, d) {
    return m(E, Q - 1227);
  }
  const a = await window[A(-732, -570, -658, -503, "RTtg") + "o"][A(-489, -556, -475, -434, "b6r3") + "e"][x(199, 328, 484, "SX*f", 370) + "pt"](e, t, o);
  function x(r, E, B, Q, d) {
    return y(r - 423, d - 1079, Q);
  }
  const I = await window[n(847, 890, 736, "nc8l", 798) + "o"][g(862, "yy!a", 587, 716) + "e"][n(828, 953, 939, "H^98", 871) + x(554, 560, 509, ")2T1", 382)](A(-915, -739, -745, -817, "k9@a"), t), C = {};
  return C[A(-656, -580, -734, -578, "J&zO") + "ge"] = a, C[g(697, "sV8z", 694, 582)] = I, C.iv = i, C;
}
async function bB(o) {
  const i = _g[r("$fcj", 143, 43, -20) + n(1459, 1327, 1357, "OB5M") + "EY"], t = _g[e(-499, -321, -634, "H#74") + e(-732, -694, -880, "LJnB") + "V"];
  function e(f, p, k, F, v) {
    return G(f - -734, p - 144, F);
  }
  if (!o || !i || !t) return void (197 * 13 + 4 * 2244 + -11537);
  const A = new TextEncoder();
  function n(f, p, k, F, v) {
    return y(f - 164, k - 1951, F);
  }
  const g = A[r("&gd*", 16, -67, -64) + "e"](o), a = window[n(1506, 1407, 1437, "4pj%")](i), x = window[Q(646, 619, 868, 707, "9u[M")](t);
  function I(f, p, k, F, v) {
    return y(f - 189, v - 1916, k);
  }
  const C = cn(a);
  function r(f, p, k, F, v) {
    return R(f - 222, F - 128, k - 172, f);
  }
  const E = cn(x), B = {};
  function Q(f, p, k, F, v) {
    return G(F - 567, p - 442, v);
  }
  B[Q(814, 765, 532, 650, "(Jys")] = Eo, B[Q(439, 523, 725, 572, "6&gy") + "h"] = 128;
  const d = await window[r("E^j5", 166, 22, 20) + "o"][I(1080, 1325, ")2T1", 1136, 1163) + "e"][Q(651, 670, 905, 766, "GZ!J") + e(-531, -430, -356, "#r#2")](I(1301, 1077, "E^j5", 1066, 1213), C, B, !1, [Q(921, 712, 719, 801, "FS34") + "pt"]), u = {};
  u[Q(728, 591, 585, 650, "(Jys")] = Eo, u.iv = E;
  const c = await window[r("FS34", 252, 170, 222) + "o"][e(-700, -613, -702, ")2T1") + "e"][n(1145, 1153, 1310, "RTtg") + "pt"](u, d, g);
  return DB(c);
}
(function(o, i) {
  function t(x, I, C, r, E) {
    return rA(C - -706, E);
  }
  function e(x, I, C, r, E) {
    return rA(x - -190, r);
  }
  function A(x, I, C, r, E) {
    return rA(E - 78, r);
  }
  function n(x, I, C, r, E) {
    return rA(I - -74, r);
  }
  function g(x, I, C, r, E) {
    return rA(C - -687, E);
  }
  const a = o();
  for (; ; )
    try {
      if (-parseInt(t(-488, -472, -499, -530, "(TOd")) / 1 + -parseInt(g(-461, -521, -494, -482, "snCV")) / 2 + -parseInt(g(-563, -499, -531, -528, "sedL")) / 3 + -parseInt(e(10, -10, 22, "0Vx]", 53)) / 4 * (-parseInt(e(21, 7, 12, "l!)c", 69)) / 5) + parseInt(g(-483, -538, -517, -475, "XZ[^")) / 6 * (parseInt(n(57, 86, 124, "24jz", 125)) / 7) + -parseInt(e(-37, -18, -71, "XIRN", -11)) / 8 * (parseInt(t(-497, -481, -524, -507, "6*OO")) / 9) + parseInt(A(292, 303, 312, "O!og", 293)) / 10 === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(ko, 109774 + -1161141 * 1 + -1 * -1730015);
const kB = 3e3, GB = 13298 + -1 * 8308 + 2010, zx = 2428 * -1 + -9670 + 12101;
function wA(o, i, t, e, A) {
  return rA(o - -69, A);
}
const $x = 6220 + -311 * 20 + 0.5, AI = {};
AI[gA("0Vx]", -464)] = 1280;
const eI = {};
eI[wA(139, 109, 140, 112, "LrIx")] = 720;
function mA(o, i, t, e, A) {
  return rA(A - 92, i);
}
const tI = {};
tI[wA(83, 37, 50, 109, "spK8")] = 60;
const $0 = {};
$0[wA(136, 137, 166, 144, "2gyA")] = AI, $0[wA(107, 113, 89, 69, "XIRN") + "t"] = eI, $0[mA(275, "CQ[U", 233, 208, 228) + gA("XMl!", -434)] = tI;
const oI = {};
oI[gA("Qj78", -493)] = 1920;
const iI = {};
function ko() {
  const o = ["utz2W6j8", "kmo1W6/cISoQAe9tWRz7ffRcHt0", "zmotWRGPWOq", "W7iSxgi", "W6eIx1hcVxRcSmkpWQZdRIpdNmkUWOq", "WPbqpa", "WPNcUCkUxSkF", "W7WIWPnT", "Fe/dP8oOBq", "kSoPWOFcGZS", "WP3dO8kc", "WQVcTCkTWQBcOW", "bCoVCmkq", "uZ/cJGxcOW", "hSogcHpcGSkou3CxWQRdTCoM", "WPO9ymkb", "qJtcMCkUW7a", "mCo8zCkyvG", "rCoZWOpcKCoB", "bSkIW4pdICknWRpdPvjLWP4jW7ZcVW", "fhRdJCojtq", "CCkGWRFdNSk0", "WRn9WOL+WRW", "WPVdHvZcNKC", "W798W6TzhG", "WPlcQSk3z8kF", "W7tcTIi", "tt/dK8k+W4a", "WQdcSb9nDSokuq", "WRX4WObZWRi", "sJpcL8kmW7m", "W7H2W5GnW7m", "W63dG8k7W64Q", "W7rhW79obq", "jSk1W4ZdNcfkwW", "cmktWOLC", "tdhcNW", "W6eIwLpcSNNcSSoYWQNdKbddJCkl", "wdZcK8k4", "WPNcQSk8rW", "tSkuueZdMa", "fxiMW5HVAvhdU8k+", "WOnnl8o8fG", "kSo9WP3cQZK", "WQtcO8kPWQRcQG", "pCoKWOJcOsi", "ovNcPCoBWOy", "WOC9ymkXaa", "fs3cNSot", "cx3dI8oArq", "W7hcTYfi", "nCkoW6r3W5tcRSkZfmoluNa", "qZxcLCkOW7q", "rc7cGvyw", "e23dNmoAqa", "mCoVD8kb", "EWVcIq", "DSk5W6/dJqW", "WQncpbC", "W6zwW7Pzgq", "WOdcQhtdJtW", "WQZcKSk9WRpcOa", "WQnZcaFdJq", "W6evWRjQhSkCWQ/dUYldLmoaAr8", "oCkCsJy", "qZhcJmkcfmo9W7eZWRVdNSkj", "WQddRgilaCk1tarAWQBcM8oQ", "vSoMWP7cL8oA", "WQZcPCk7", "W4KwEuVdGfDUWRVdOHnqW7Or", "qJtcNq", "ASkZW7q", "dCkBEdlcQW", "h3hdMmoywa", "W7RdPmo/W7FdVCoBnKRdGXdcOhW", "BsFdPmk0", "W7u2WO5T", "WR1ZfJBdRG", "WOjxdaFcIG", "DLtcHqbiW4RcUCkddI7cLa", "A0hcI8oYWOO", "ACkPW5JdTbhcVtFdV8oBW6m", "sMTRrNW", "WO3cSSkmxmku", "WRnsW5KlW44", "aNKsW63cJa", "pexcR8oRWPS", "ttBcUSkUW78", "fM3dNLpdImk2D8k7WQpcTmkDWR8", "W5lcRHJdO1y", "B1RcGCosWPe", "ewVdMvBcT8olqSk1WONcLW", "oXddKCkgW5dcO1lcUK7dRgq", "rx1VsNu", "gmkjtdlcOq"];
  return ko = function() {
    return o;
  }, ko();
}
iI[mA(238, "g]HL", 196, 278, 240)] = 1080;
const Ao = {};
Ao[mA(236, "spK8", 300, 233, 270)] = oI, Ao[YA(-483, -514, -488, -467, "XZ[^") + "t"] = iI, Ao[mA(232, "snCV", 263, 265, 255) + wA(114, 86, 127, 88, "e(c4")] = 30;
function rA(o, i) {
  const t = ko();
  return rA = function(e, A) {
    e = e - (-1 * -241 + 875 * 4 + -3611);
    let n = t[e];
    if (rA.ZMayJo === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      rA.tuwweC = C, o = arguments, rA.ZMayJo = !0;
    }
    const a = t[25 * -314 + -7402 + 15252], x = e + a, I = o[x];
    return I ? n = I : (rA.QaBoeJ === void 0 && (rA.QaBoeJ = !0), n = rA.tuwweC(n, A), o[x] = n), n;
  }, rA(o, i);
}
const nI = {};
nI[gA("@Zig", -478)] = 1;
const gI = {};
gI[pe(1050, 1005, 1007, "QtT7")] = 1;
const aI = {};
aI[wA(140, 100, 134, 143, "l!)c")] = 1;
const eo = {};
eo[gA("Yq65", -477)] = nI, eo[wA(71, 41, 65, 74, "O!og") + "t"] = gI, eo[YA(-510, -456, -492, -448, "5x][") + YA(-590, -580, -573, -615, "CQ[U")] = aI;
function gA(o, i, t, e, A) {
  return rA(i - -628, o);
}
const xI = {};
xI[wA(104, 68, 109, 85, "QtT7")] = 1;
const II = {};
II[mA(305, "5x][", 284, 262, 293)] = 1;
const rI = {};
rI[mA(211, "snCV", 198, 199, 222)] = 1;
const Go = {};
Go[YA(-553, -573, -526, -513, "spK8")] = xI, Go[gA("Qj78", -457) + "t"] = II;
function YA(o, i, t, e, A) {
  return rA(t - -704, A);
}
Go[gA("nGD5", -408) + gA("(@#B", -451)] = rI;
const Xt = {};
Xt[gA("CQ[U", -454)] = $0, Xt[gA("#)n)", -406) + mA(251, "ZpxA", 239, 254, 267)] = Ao, Xt[YA(-500, -439, -487, -518, "R#%L")] = eo, Xt[wA(63, 39, 29, 81, "(TOd") + gA("(TOd", -473)] = Go;
const So = Xt;
function pe(o, i, t, e, A) {
  return rA(o - 858, e);
}
const Bt = {};
Bt[mA(247, "nGD5", 239, 229, 236) + gA("cUG!", -486) + YA(-480, -545, -518, -564, "atqq")] = kB, Bt[gA("24jz", -414) + pe(1060, 1037, 1085, "nGD5") + YA(-543, -551, -536, -527, "QtT7") + wA(118, 94, 78, 164, "snCV")] = So[gA("#jtB", -433)], Bt[gA("VWu5", -469) + YA(-589, -520, -555, -592, "Qj78") + YA(-566, -572, -565, -571, "QtT7") + wA(100, 88, 108, 139, "7F)0")] = So[wA(112, 128, 151, 148, "sedL") + pe(1077, 1117, 1031, "(@#B")], Bt[wA(154, 123, 153, 137, "0Vx]") + wA(152, 195, 116, 178, "#jtB")] = zx, Bt[gA("2gyA", -463) + pe(995, 1027, 1042, "atqq") + pe(1001, 1022, 1006, "spK8") + wA(137, 98, 130, 93, "Qj78") + mA(269, "A[je", 257, 258, 281)] = $x;
const st = {};
st[pe(1054, 1015, 1030, "sedL") + mA(290, "(@#B", 250, 288, 289) + YA(-506, -481, -501, -544, "dT^^")] = GB, st[mA(222, "saZL", 230, 235, 253) + pe(1004, 1049, 1041, "XMl!") + YA(-507, -506, -491, -506, "e(c4") + gA("l5dy", -404)] = So[YA(-579, -538, -547, -514, "Qj78")], st[YA(-599, -521, -563, -548, "g]HL") + pe(1057, 1088, 1026, "l!)c") + mA(241, "qnc0", 228, 242, 271) + mA(270, "qmFx", 214, 230, 259)] = So[wA(135, 173, 124, 164, "XXS5") + gA("7F)0", -483)], st[pe(1030, 1054, 1036, "A[je") + gA("CgmM", -494)] = zx, st[YA(-548, -542, -538, -523, "CgmM") + mA(260, "0Vx]", 256, 234, 254) + wA(111, 132, 84, 106, "snCV") + mA(316, "e(c4", 243, 328, 283) + mA(299, "XIRN", 238, 324, 282)] = $x;
const Bn = {};
Bn[gA("nGD5", -470)] = Bt, Bn[mA(251, "6(^W", 273, 277, 246)] = st;
const SB = Bn;
function EA(o, i, t, e, A) {
  return DA(o - -816, t);
}
function dA(o, i, t, e, A) {
  return DA(e - 151, A);
}
function DA(o, i) {
  const t = No();
  return DA = function(e, A) {
    e = e - (9596 + -3847 * 2 + -1799 * 1);
    let n = t[e];
    if (DA.kOYvMW === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      DA.XvRqKA = C, o = arguments, DA.kOYvMW = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (DA.piJnuW === void 0 && (DA.piJnuW = !0), n = DA.XvRqKA(n, A), o[x] = n), n;
  }, DA(o, i);
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return DA(I - 860, C);
  }
  function e(a, x, I, C, r) {
    return DA(I - 132, C);
  }
  const A = o();
  function n(a, x, I, C, r) {
    return DA(a - 839, I);
  }
  function g(a, x, I, C, r) {
    return DA(r - 916, x);
  }
  for (; ; )
    try {
      if (parseInt(e(338, 461, 355, "g8yN", 340)) / 1 * (-parseInt(n(1069, 1018, "Ave#", 1158, 1112)) / 2) + parseInt(g(1316, "aKh$", 1260, 1183, 1203)) / 3 * (parseInt(g(1143, "k)T9", 1192, 1266, 1182)) / 4) + parseInt(n(1021, 1143, "J^@q", 1074, 1157)) / 5 + -parseInt(e(239, 366, 251, "*osX", 260)) / 6 + parseInt(g(1262, "K^BY", 1228, 1093, 1156)) / 7 + -parseInt(t(893, 1029, 1006, "hMp^", 967)) / 8 + parseInt(t(1131, 1260, 1134, "8N6X", 1005)) / 9 === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(No, -825586 * -1 + 517787 + -613 * 1172);
function GA(o, i, t, e, A) {
  return DA(A - 586, i);
}
function qA(o, i, t, e, A) {
  return DA(e - -687, t);
}
function No() {
  const o = ["CLZcSCk2dxNdOYTgWQhcKSkUWRq", "xrSnsmkh", "W6lcVCkvWQ/dTW", "WPvnwSobpa", "W6jweheL", "W57dNLlcQby", "v8knhmkeWQa", "W71AhblcGG", "aKmza2y", "eKmDc3e", "t0yvisS", "xvWFja", "WONdQCk+WPT4", "B8k7a8kV", "WOdcOhpcOqu", "WPdcN8k2WOxdSq", "jCkeaW", "W6NdTgpcLW8", "WPddGI3dL8km", "W6bSW51xWP0", "WQX2bwaO", "WRBcRhxcTGu", "W5tdGSoeimoP", "xWif", "W4tcMcSzba", "bmkOeCoAW6y", "zCk6gCkVW7C", "WQZdU1nItW", "twZdV8kCnSkPW7VcKW", "WRxdUCoqW7lcSeRcSmkgW50bgXrc", "W7nSW4DRWOq", "WPnqECoxla", "WRpdV8kKqmoS", "WOFdHWhdI8kk", "W5/dLxyctG", "WOLeWPtcQ1qiW5pcL8oGECoV", "eg0BW4lcMW", "o3ldVSozoW", "W6fweKSJ", "W7tdVMdcMs0", "oIPvAd8", "EvpcT8kWcx7dRZXqWQ/cKmkDWQy", "ymopW7Hz", "meNdVq", "WO7dUSk0WRHP", "WORcGtnqgfi2wCkbt8k5W5S0", "WR9mWQG", "CmkjoSkKWPW", "AWtdQCoZhq", "lSkIB8oBW7y", "W5RcJ8oReSoxWOimW70", "Eri6vCkF", "gCkXDmoAW7a", "W5LoWOe2W4m", "dtZdOSkika", "W61nWPKGW6i", "WQhcUwdcQGC", "WRTaWPRcQmkL", "WPNdUSkWWRfO", "WPZdLsFdK8kB", "W5ZdKwKa", "WQrhWPFcUCoQ", "WRpcVHhdJ8kU", "W6FdJueL", "WPfjCSowoq", "WRzLcwW", "W7nDW6jQWP0", "WPJcShddRCkp", "t8oEBavY", "htBdUmk4mW", "W5ldN8o4", "WRpcMGSuiSkHcq", "gYRdO8kNmW", "EmkiW79mW6q", "sh18nMe", "WOJcIfj1na", "W6zdWQBcVCohoCop", "vY4tj3O", "W75sdb7cGG", "WOtcH8k8z8k8bxNcICkljSksfmkB", "z8oaW7Xita", "W6NcPtSgfq", "dJxdT8kYna", "W5fjWR3dMtG", "WRzBWOhcVCoX", "W6RcQSkdWQNdPa", "WQBcL8k7WOxdIa", "wsqpnuS", "WOhdHWhdICkn", "W67cLdS8dG", "WRJdTCkzx8o5", "WPtdUSkWWRe", "WRqPWPOiW5ZdS8kplWHDW5a", "ghmrW6xcPG", "ACk7ba", "WPJdGXRdGSkB", "BGmNvmkE", "lg7dIhD9", "g0mzbxC", "asT+sb0", "pHRdOSoMsq", "WR0kwuZdMuZcIaGyB8kM", "W6TbWOmgW6C", "W6/dNLiOW5y", "WRXiWOpcLCoR", "W4fbWPmSW6C", "WPLCCSoTnG", "jqVdQ8oI", "W4DDWQBdLJG", "W7pdQxpcKtO", "tveDnJG", "WO7cI3XGoa", "WRlcQWhdJCk/", "W5K8W4e", "wSoCWQ7cRcC", "puNdISoija", "W7NdThG", "WOFdN03dUmo8", "omkrxG", "WQ5TagWP", "W6dcPaFdL8oR", "W4DOyXpcPq", "W6pcKIGCaW", "W7hdUwxcNYi", "j2uRW7FcLq", "eIXOqq", "W4hdHguxxW", "guqbb3e", "W6/dJhy2W5e", "WRzKWQ5hWQa", "FCkLpCkLWPS", "WR99WQ1bWRG", "WQHKWQvmWRG", "W5BcNrGXka", "FuvBcxi", "WR9aWQbhWQe", "WPtcJfjKkq", "WP/dO8k8WRDU", "W5JdLwCr", "oLJdUmoemq", "WQFcJSkJWOFdJG", "W7jsd3q1", "mmkTtNLJ", "scGokeW", "W4PhWRO", "m8k5v3K", "WOhdLaNdJmkq", "WRLlea", "BSkfn8kMWPS", "WOBdISo2aCod", "W4tdMwaara", "WPBcLmkfWRZdTt3dRSo2WONcMc15ta", "omkxsMHU", "nMeZW5hcKq", "dsHBtIq", "WRJdOCkEzCoO", "EwD8exa", "W5GqW5pdTqm", "ASknoSkTWOa", "W5FdTxierW", "xxHknN4", "vGTl", "WR1naa", "WP3dU03dM8oA", "gdBdPmkojG", "W6rbWP4IW64", "W79sda/cHq", "WPFcVNldRCkI", "ASkppmkTWOC", "WR7dOmkzx8oQ", "qv4djZG", "scOikeS", "tmosWRtcTJW", "wmouWR7cSsa", "l8kJfmohW7C", "W7HQc31M", "WPJcPgJdUSkN", "WPtdTfVdJmoF", "W6fubG", "WRtcOWBdHmk4", "msddISoJBW", "WOrwECodkW", "W75Dpb7cIG", "WPldTuhdJCoc", "W69lW4XlWPG", "W4ZdGSoAW6JcOW", "W44aW4VdJWK", "WPLQWRLoWQG", "WPVdJ8oSeCod", "W4bhWRRdHdG", "kW5r", "eJXPtWy", "WPddIbW", "lMddKNb9", "WOjqySokpa", "W41QuIhcPq", "W5NdLmo9p8oV", "W6X8W5TFWOG", "W6VdNLy2W4i", "W7XAarFcNG", "W6hcLI0b", "jWXJAIG", "WQxcRYpdGxSgWQtdOSkpCgVcQs0", "W61+hHRcGq", "s8oyWQZcRcS", "esNdOSkpiG", "DSovEbnB", "ESolW6DDga", "W5xdLxaWwa", "WRLQWQjrWRG", "WRzJcgWp", "WRRdVvHHwa", "bSk1B8otW6e", "uCkpomkTWOa", "WOddSCoueSoE", "E3DGi3O", "W4DnWQldNI8", "WRZcPhxcGae", "l2Dgwcq", "ms/dS8k5ja", "gb7dTmoIxa", "Amk6gCk5", "B8k6gq", "WR/dVSoqW7xcTKVcTSk3W6C5bZ5h", "F0Pfif8", "sSo0WR4", "W6tdIv4H", "W4VdQ8kL", "WR7dVCkEvSo+", "W6axW4ldQ8kXqSk4j8k/W7ZcTGpcRq", "W77dNSo+oSoO", "jmkyt8oAW4m", "B8oAW7b/dq", "WPZdOer9xG", "W41hWQm", "WQhcJSk/", "WPLQWQjrWRG", "W69wWPiKW7i", "ASopWQJcQJO", "W4BdMwSlEq", "W4ldNguC", "s0GeisS", "h27dLw19", "W7n4W4bwWPK", "WPv2ECocnW", "oxpdIxf7", "W7/dLwamsG", "bHHXyc8", "aLqkc3W", "WP7dQLVdUSot", "W5FdUwOdra", "WPeFzmobla", "kftdQSoipq", "WP0OjgFdSr4DWOpdNHJdIG", "WQNdMgnctq", "A8oNW7TAaW", "tuq0nJW", "ptBdUmk4mW", "WOtdQKVdN8oc", "BCopW7HzhG", "y3D7iN0", "W5pdJ8ozW6pcTa", "WQLXWRvoWQK", "WO3dN8o0lmof", "WQXWdwCH", "BJFcJcW8mfhcO8kOBaDUdq", "W6rHW4HBWPK", "xCoCWRpcQZW", "WPxdV1NdL8ov", "W5hdGCozW6pcTa", "WPTaWP/cTCoR", "lM8O", "WOZdNSohn8ou", "W6fbWOuIW6m", "kKRdTCoIsq", "W5FdGCozW6hcSW", "W4zAWQBdMd4", "WRrLhq"];
  return No = function() {
    return o;
  }, No();
}
function tA(o, i, t, e, A) {
  return DA(o - 1, e);
}
var la, ua, le;
class NB {
  constructor(i = {}) {
    P(this, le);
    b(this, ua, []);
    b(this, la, {});
    T(this, le, SB);
    function t(A, n, g, a, x) {
      return dA(A - 65, n - 377, g - 150, A - -479, x);
    }
    function e(A, n, g, a, x) {
      return GA(A - 403, x, g - 349, a - 446, g - 370);
    }
    this[e(1158, 1359, 1251, 1286, "o88J") + t(-96, -230, -88, -1, "0^A]") + e(1258, 1115, 1221, 1136, "8N6X")](i);
  }
  [(ua = GA(781, "HCli", 665, 739, 752) + GA(619, "U%CQ", 685, 698, 702), la = EA(-710, -652, "5oOL") + GA(845, "V@mo", 1010, 1007, 871) + "s", dA(450, 362, 287, 367, "F$cb") + EA(-643, -767, "sw*f") + EA(-532, -602, "k)T9") + "fo")](i) {
    const t = Cn(i);
    function e(I, C, r, E, B) {
      return qA(I - 65, C - 433, E, B - -103);
    }
    function A(I, C, r, E, B) {
      return tA(E - -429, C - 269, r - 229, B);
    }
    const n = t == null ? void 0 : t[A(-243, -58, -258, -195, "tebo") + A(-340, -355, -141, -247, "n%qW") + "s"]();
    function g(I, C, r, E, B) {
      return dA(I - 46, C - 18, r - 169, C - 213, B);
    }
    if (!(n != null && n[a(149, 253, "]]58") + "t"]) || !(n != null && n[a(333, 334, "U%CQ")]) || !(n != null && n[x(-791, -906, -861, "aQe8") + x(-805, -726, -847, "XQwM")])) {
      if (g(878, 739, 724, 865, "o88J") !== x(-771, -902, -755, "]]58")) throw new L(e(-602, -490, -505, "k)T9", -571) + g(596, 734, 774, 612, "n%qW") + x(-660, -533, -761, "hMp^") + A(-137, -158, 10, -123, "sw*f") + x(-777, -836, -706, "XQwM") + g(661, 738, 635, 808, "30sO"));
      this[A(-159, -164, -125, -202, "S1p!") + x(-585, -542, -661, "&&3D") + "s"] = _0x18caf5;
    }
    function a(I, C, r, E, B) {
      return dA(I - 378, C - 67, r - 473, I - -179, r);
    }
    function x(I, C, r, E, B) {
      return qA(I - 83, C - 379, E, I - -225);
    }
    if (t)
      if (e(-595, -686, -604, "hMNU", -667) === a(220, 94, "NV[T")) {
        const I = {};
        return I[x(-652, -655, -610, "n%qW")] = t[g(596, 722, 842, 738, "HCli")], I.id = n[e(-713, -456, -493, "tebo", -591) + a(190, 259, "(E&m")], I;
      } else throw new _0x39ede5(a(119, 129, "8N6X") + A(-127, -175, -114, -113, "30sO") + x(-637, -764, -772, "!YGV") + g(654, 617, 563, 696, "taWA") + a(163, 161, "o88J") + A(-63, -16, -161, -52, "S1p!"));
    return void (1 * 2263 + -92 + -2171);
  }
  async [EA(-485, -388, "yt*#") + GA(717, "K^BY", 870, 827, 749) + dA(318, 433, 439, 360, "F$cb") + "m"](i) {
    const t = document[a(1155, "(Xir", 1252, 1158) + x(365, 360, 480, 497, "&&3D") + a(1108, "zv85", 896, 973)](e(-638, -563, "K^BY"));
    t[a(1121, "aKh$", 1122, 1078) + x(207, 351, 344, 255, "n%qW")] = !0, t[e(-646, -745, "MP1v")] = !0, t[e(-706, -586, "g8yN") + n(1073, "hMp^") + "e"] = !0;
    function e(I, C, r, E, B) {
      return tA(I - -984, C - 329, r - 34, r);
    }
    t[A("&&3D", 474)][a(1266, "J^@q", 1105, 1156) + x(572, 655, 523, 408, "U%CQ")] = a(1255, "*osX", 1115, 1182) + e(-831, -694, "$A2V"), t[x(275, 453, 407, 416, "30sO")][e(-713, -766, "yt*#") + "ty"] = "0", t[n(1108, "WB^]")][x(415, 302, 328, 409, "Ctk*") + n(998, "Ju]K") + A("0^A]", 533)] = n(1024, "KJJo");
    function A(I, C, r, E, B) {
      return qA(I - 331, C - 237, I, C - 982);
    }
    t[e(-648, -544, "$A2V")][A("U%CQ", 656)] = e(-641, -632, "U%CQ");
    function n(I, C, r, E, B) {
      return EA(I - 1702, C - 409, C);
    }
    t[x(436, 396, 372, 430, "WB^]")][n(1246, "NV[T") + "t"] = a(967, "taWA", 899, 1008);
    const g = await navigator[A("RmIW", 575) + a(1037, "sr*(", 960, 1084) + "es"][e(-858, -874, "K^BY") + e(-785, -672, "S1p!") + "ia"](i);
    t[n(1093, "taWA") + e(-650, -582, "K^BY")] = g;
    function a(I, C, r, E, B) {
      return GA(I - 324, C, r - 269, E - 81, E - 278);
    }
    function x(I, C, r, E, B) {
      return EA(r - 966, C - 99, B);
    }
    return await t[x(435, 269, 307, 209, "K^BY")](), g;
  }
  async [tA(299, 415, 413, "a8V2") + tA(150, 286, 12, "!YGV") + tA(259, 330, 363, "a8V2")]() {
    var C, r;
    if (!o0())
      if (n("Gjl3", 133, 226, 178) !== n("(Xir", 174, 123, 125)) {
        const E = {};
        return E[i("Ju]K", 336, 406, 280) + a(805, 812, 803, "zv85")] = this[I(565, 450, "r@g)", 513, 538) + I(482, 585, "Ctk*", 496, 462)], E[I(330, 399, "]]58", 364, 402) + i("$A2V", 301, 334, 343) + "e"] = !1, E;
      } else return;
    function i(E, B, Q, d, u) {
      return GA(E - 415, E, Q - 113, d - 114, B - -566);
    }
    function t(E, B, Q, d, u) {
      return qA(E - 315, B - 350, E, B - -20);
    }
    const e = await this[I(557, 522, "V@mo", 543, 620) + "st"](w(this, le)[i("k)T9", 137, 225, 91)]), A = await this[a(873, 753, 837, "]]58") + "st"](w(this, le)[a(728, 845, 737, "sw*f")]);
    function n(E, B, Q, d, u) {
      return tA(d - -111, B - 197, Q - 274, E);
    }
    const g = ((C = e[t("0^A]", -373) + i("wMj1", 345, 295, 437)]) == null ? void 0 : C[i("MP1v", 360, 468, 288)]) + a(878, 748, 905, "QzT7") + ((r = A[i("*osX", 254, 259, 334) + i("wMj1", 345, 340, 425)]) == null ? void 0 : r[a(777, 778, 795, "K^BY")]);
    function a(E, B, Q, d, u) {
      return tA(E - 521, B - 58, Q - 220, d);
    }
    const x = await this[a(676, 600, 813, "NV[T") + n("K^BY", 274, 143, 244) + a(831, 811, 755, "aQe8") + I(519, 748, "aKh$", 758, 649) + "lt"](g, e[a(781, 883, 854, "S1p!") + "ge"], A[a(637, 583, 551, "a8V2") + "ge"]);
    function I(E, B, Q, d, u) {
      return qA(E - 436, B - 208, Q, u - 957);
    }
    this[a(866, 966, 735, "O3ww") + I(581, 680, "tebo", 531, 606)][a(842, 730, 809, "(Xir")](x);
  }
  async [EA(-711, -774, "O3ww") + "st"](i) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: n, runDurationCutoffFactor: g } = i;
    let a = 107 * 42 + 3149 + -7643;
    function x(f, p, k, F, v) {
      return tA(p - 869, p - 152, k - 147, F);
    }
    let I = n;
    function C(f, p, k, F, v) {
      return EA(F - 896, p - 29, p);
    }
    let r, E = this[c("zv85", 1213, 1275, 1212) + d(1024, "J^@q", 951) + x(850, 980, 1100, "J^@q") + "s"](this[c("S1p!", 1049, 1072, 1148) + d(998, "aQe8", 976) + "s"], A);
    for (let f = -4114 + 1 * -1351 + 1093 * 5; f < n; f++)
      if (C(294, "WB^]", 283, 251) !== c("]]58", 1125, 1112, 1251)) {
        const p = {};
        return p[x(1208, 1156, 1097, "taWA")] = _0x58e169[d(1184, "hMNU", 1055)], p.id = _0x21e059[Q("QzT7", -727, -655) + d(903, "sr*(", 1003)], p;
      } else {
        if (a > e * g)
          if (Q("V@mo", -700, -632) === x(1097, 1101, 990, "Gjl3")) {
            const k = {};
            return k[c("RmIW", 1069, 1e3, 1119)] = _0x210554, k;
          } else {
            I = f;
            break;
          }
        const p = await this[x(973, 973, 1046, "Ave#") + d(1022, "&2XH", 1054) + d(806, "!YGV", 916) + C(232, "KJJo", 187, 219)](E);
        if (p[Q("J^@q", -827, -697)])
          if (C(324, "O3ww", 308, 211) === d(780, "XQwM", 910)) this[d(874, "8N6X", 1009) + C(557, "(E&m", 522, 418) + Q("QzT7", -823, -694) + x(1199, 1083, 1034, "zv85") + "or"](p[c("5oOL", 978, 1184, 1115)]) && (Q("Pcu#", -589, -663) !== d(1163, "]]58", 1147) ? { deviceInfo: _0x43818e } = _0x49a6b3 : (E = this[c("NV[T", 997, 1141, 1112) + C(485, "]]58", 343, 349) + Q("(E&m", -501, -493) + "s"](this[x(1202, 1248, 1181, "HCli") + Q("aQe8", -681, -675) + "s"], t), f--));
          else {
            const k = {};
            k[C(287, "taWA", 481, 412)] = _0x3b06d9, _0x4e02c7[c("Ave#", 1405, 1139, 1274) + d(1073, "&&3D", 1033)] = k;
          }
        if (p[C(347, "0^A]", 295, 414) + C(194, "S1p!", 319, 241)])
          if (x(1088, 1169, 1136, "hMp^") !== d(1105, "aKh$", 1053)) ({ deviceInfo: r } = p);
          else return;
        a += p[Q("hMp^", -593, -580) + Q("*osX", -520, -548)] || -4872 + -87 * -56;
      }
    const B = Math[x(1073, 981, 870, "S1p!")](a / (I || -12741 + 1 * 12742));
    this[x(1219, 1091, 1061, "KJJo") + d(1013, "5oOL", 1070) + "s"] = this[x(985, 1099, 1120, "K^BY") + c("XQwM", 1258, 1298, 1271) + c("wMj1", 1192, 1295, 1275) + "s"](this[x(1070, 996, 1075, "&&3D") + d(1079, "Y2R1", 1039) + "s"], {}, r == null ? void 0 : r.id);
    function Q(f, p, k, F, v) {
      return EA(k - -43, p - 152, f);
    }
    function d(f, p, k, F, v) {
      return EA(k - 1608, p - 422, p);
    }
    const u = {};
    u[Q("sw*f", -662, -654) + "ge"] = B;
    function c(f, p, k, F, v) {
      return dA(f - 87, p - 28, k - 23, F - 771, f);
    }
    return u[x(1139, 1204, 1251, "0^A]") + C(272, "!YGV", 138, 252)] = r, u;
  }
  async [GA(845, "aKh$", 778, 897, 811) + tA(128, 177, 154, "n%qW") + dA(478, 479, 419, 354, "QzT7") + dA(451, 434, 578, 524, "U%CQ")](i) {
    function t(x, I, C, r, E) {
      return EA(x - 1399, I - 446, I);
    }
    function e(x, I, C, r, E) {
      return dA(x - 477, I - 340, C - 357, r - 283, E);
    }
    function A(x, I, C, r, E) {
      return tA(E - -65, I - 105, C - 462, x);
    }
    function n(x, I, C, r, E) {
      return dA(x - 301, I - 494, C - 344, E - -449, r);
    }
    function g(x, I, C, r, E) {
      return dA(x - 493, I - 144, C - 306, I - -262, r);
    }
    const a = Date[A("5oOL", 76, -18, -39, 87)]();
    try {
      if (A("$A2V", 96, 65, 123, 146) === A("wMj1", -36, 38, 113, 66)) {
        const x = { ..._0x2d3764 }, I = x, C = { ...typeof I[e(608, 689, 587, 690, "hMp^")] == n(-51, 156, 74, "Ctk*", 82) + "t" ? I[n(48, -68, -66, "wMj1", 45)] : {}, ..._0x19fb97 }, r = C;
        if (_0x2a19d5) {
          const E = {};
          E[g(304, 215, 294, "&&3D", 283)] = _0x569c09, r[e(681, 618, 748, 614, "O3ww") + A("aQe8", 169, 170, 190, 78)] = E;
        }
        return I[n(-61, -70, -32, "hMp^", -42)] = r, I;
      } else {
        const x = await this[g(183, 210, 241, "K^BY", 143) + e(721, 812, 635, 734, "NV[T") + A("o88J", 146, 35, 119, 73) + "m"](i), I = Date[e(592, 750, 668, 622, "Gjl3")]() - a, C = this[n(-72, -137, -130, "sw*f", -140) + e(785, 736, 815, 744, "0^A]") + A("S1p!", 341, 351, 222, 237) + "fo"](x);
        z0(x);
        const r = {};
        return r[t(886, "5oOL", 907, 928, 895) + n(-74, 168, 161, "5oOL", 41)] = I, r[n(-199, -111, -254, "8N6X", -185) + g(-48, 56, 45, "K^BY", -15)] = C, r;
      }
    } catch (x) {
      if (e(634, 505, 490, 598, "(Xir") !== n(-220, -153, -52, "*osX", -98)) {
        const I = {};
        return I[t(874, "Pcu#")] = x, I;
      } else return _0x492092 instanceof _0x4a73b9 && _0x112819[A("o88J", 142, 120, 187, 238)] === A("g8yN", 148, 193, 101, 72) + n(154, 91, 164, "sw*f", 67) + e(779, 665, 777, 796, "&2XH") + t(827, "Y2R1");
    }
  }
  [EA(-510, -422, "yt*#") + qA(-189, -282, "wMj1", -324) + qA(-285, -227, "zv85", -346) + tA(190, 64, 120, "O3ww") + "or"](i) {
    function t(n, g, a, x, I) {
      return EA(x - 540, g - 289, n);
    }
    function e(n, g, a, x, I) {
      return EA(I - 1311, g - 181, n);
    }
    function A(n, g, a, x, I) {
      return dA(n - 166, g - 496, a - 386, I - -918, n);
    }
    return i instanceof DOMException && i[A("a8V2", -623, -584, -737, -624)] === e("g8yN", 760, 685, 532, 631) + e("sr*(", 958, 977, 790, 864) + e("NV[T", 608, 706, 803, 745) + t("aQe8", -40, -3, -121);
  }
  async [GA(854, "*osX", 940, 908, 890) + EA(-696, -726, "U%CQ") + GA(670, "U%CQ", 879, 881, 788) + tA(277, 374, 352, "k)T9") + "lt"](i, t, e) {
    return { optSetting: await bB(i), afterOpt: t, beforeOpt: e };
  }
  [tA(176, 222, 179, "HCli") + tA(348, 277, 225, "MP1v") + dA(527, 385, 370, 440, "KJJo")](i) {
    function t(A, n, g, a, x) {
      return dA(A - 68, n - 269, g - 184, x - 417, n);
    }
    function e(A, n, g, a, x) {
      return tA(a - -253, n - 386, g - 439, g);
    }
    Object[e(232, 168, "HCli", 120) + "es"](i)[e(70, -31, "g8yN", 107) + "ch"](([A, n]) => {
      function g(r, E, B, Q, d) {
        return t(r - 438, E, B - 311, Q - 266, d - -1428);
      }
      function a(r, E, B, Q, d) {
        return t(r - 209, Q, B - 31, Q - 269, E - -864);
      }
      function x(r, E, B, Q, d) {
        return t(r - 497, r, B - 87, Q - 448, d - -553);
      }
      function I(r, E, B, Q, d) {
        return e(r - 187, E - 459, E, r - 610);
      }
      function C(r, E, B, Q, d) {
        return e(r - 42, E - 182, B, E - -145);
      }
      if (a(-233, -95, -90, "wMj1") === x("HCli", 197, 273, 241, 327)) _0xec1dd9 = this[C(-122, -104, "QzT7") + a(-212, -143, -109, "&&3D") + a(18, 11, -20, "30sO") + "s"](this[g(-592, "g8yN", -692, -653, -596) + C(-105, -112, "V@mo") + "s"], _0x164aa5), _0x4b1f0e--;
      else {
        const r = A;
        if (w(this, le)[r])
          if (g(-461, "U%CQ", -489, -403, -483) === x("k)T9", 459, 404, 462, 343)) {
            const E = _0x2ee507(_0x4367e6), B = E == null ? void 0 : E[C(-104, -78, "Gjl3") + g(-414, "V@mo", -508, -562, -496) + "s"]();
            if (!(B != null && B[g(-639, "wMj1", -531, -734, -618) + "t"]) || !(B != null && B[g(-397, "aQe8", -546, -605, -492)]) || !(B != null && B[C(-191, -80, "k)T9") + a(-89, 12, 0, "Ave#")])) throw new _0x3293b3(C(-412, -293, "&&3D") + I(601, "o88J") + x("!YGV", 339, 195, 265, 290) + I(534, "!YGV") + a(-131, -128, -69, "S1p!") + x("V@mo", 73, 202, 152, 160));
            if (E) {
              const Q = {};
              return Q[x("!YGV", 131, 332, 240, 252)] = E[x("&&3D", 349, 227, 354, 339)], Q.id = B[a(-261, -163, -259, "5oOL") + C(51, -40, "n%qW")], Q;
            }
            return void (47 * -73 + -5254 + 8685);
          } else w(this, le)[r] = { ...w(this, le)[r], ...n };
      }
    });
  }
  [qA(-710, -566, "aKh$", -573) + dA(225, 336, 278, 301, "WB^]") + qA(-520, -526, "aKh$", -527) + "s"](i = {}, t = {}, e) {
    const A = { ...i };
    function n(B, Q, d, u, c) {
      return tA(d - 532, Q - 139, d - 489, B);
    }
    const g = A, a = { ...typeof g[C(879, "n%qW", 790, 879, 822)] == E(1009, 927, "QzT7", 1106, 1009) + "t" ? g[E(982, 756, "0^A]", 897, 856)] : {}, ...t }, x = a;
    if (e)
      if (E(797, 945, "*osX", 798, 899) === C(763, "Y2R1", 615, 784, 656)) this[n("zv85", 817, 787) + n("Pcu#", 757, 779) + C(642, "n%qW", 744, 637, 723) + C(745, "a8V2", 825, 731, 831) + "or"](_0x484caa[I(-788, "WB^]", -751, -606, -703)]) && (_0x2166d8 = this[C(610, "Y2R1", 701, 521, 637) + I(-585, "g8yN", -766, -752, -657) + I(-461, "(E&m", -504, -376, -465) + "s"](this[E(1015, 1022, "(E&m", 886, 969) + E(873, 885, "zv85", 983, 915) + "s"], _0x5b8429), _0x4ff980--);
      else {
        const B = {};
        B[C(561, "aKh$", 571, 580, 691)] = e, x[r(116, 183, "HCli") + E(1132, 1040, "MP1v", 1104, 1e3)] = B;
      }
    function I(B, Q, d, u, c) {
      return tA(c - -832, Q - 413, d - 83, Q);
    }
    function C(B, Q, d, u, c) {
      return tA(c - 507, Q - 441, d - 455, Q);
    }
    function r(B, Q, d, u, c) {
      return dA(B - 448, Q - 249, d - 261, B - -220, d);
    }
    g[r(204, 316, "U%CQ")] = x;
    function E(B, Q, d, u, c) {
      return GA(B - 439, d, d - 404, u - 89, c - 101);
    }
    return g;
  }
  [EA(-567, -650, "g8yN") + qA(-383, -243, "&2XH", -316) + qA(-384, -370, "KJJo", -479)](i) {
    function t(e, A, n, g, a) {
      return qA(e - 83, A - 325, A, e - 940);
    }
    this[t(620, "aQe8") + t(439, "Ctk*") + "s"] = i;
  }
  [tA(298, 386, 257, "NV[T") + dA(347, 437, 527, 423, "(E&m") + GA(944, "Gjl3", 882, 923, 934) + tA(157, 217, 114, "K^BY") + GA(829, "g8yN", 903, 941, 853)]() {
    const i = {};
    i[A("g8yN", 637, 641, 786, 740) + A("zv85", 868, 898, 781, 901)] = this[A("F$cb", 875, 775, 771, 752) + n(-789, -776, -625, -723, "taWA")];
    function t(g, a, x, I, C) {
      return tA(I - 207, a - 230, x - 467, C);
    }
    i[e(302, 264, "(Xir", 388) + t(456, 537, 400, 459, "F$cb") + "e"] = !1;
    function e(g, a, x, I, C) {
      return GA(g - 309, x, x - 270, I - 51, g - -392);
    }
    function A(g, a, x, I, C) {
      return GA(g - 244, g, x - 3, I - 141, C - 32);
    }
    function n(g, a, x, I, C) {
      return EA(I - -146, a - 43, C);
    }
    return i;
  }
}
le = new WeakMap();
const to = {};
to.width = 1920, to.height = 1080, to.facingMode = Co.FRONT;
const FB = to;
var Ze, lt, oe;
class CI {
  constructor({ defaultVideoConstrains: i = FB, minCameraShorterSide: t = Nc } = {}) {
    P(this, Ze);
    P(this, lt, []);
    P(this, oe, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, T(this, Ze, e);
  }
  get availableCameraProperties() {
    return w(this, lt);
  }
  get mediaStream() {
    return w(this, oe);
  }
  get videoTrack() {
    return w(this, oe) ? Cn(w(this, oe)) : void (-2812 + 19 * 148);
  }
  get isCameraActive() {
    var i;
    return !!((i = w(this, oe)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    z0(t);
  }
  async open(i = {}) {
    Pg() && a0() && await An(31 * -187 + -1222 * 5 + 12357), T(this, oe, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get next device");
    const i = await Di(), t = this.videoTrack.getSettings(), e = i.findIndex((n) => n.deviceId === t.deviceId);
    return (i[e + 1] ?? i[19 * -16 + -1701 + 401 * 5]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(i) {
    if (!this.videoTrack) throw Error("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, i);
  }
  close() {
    w(this, oe) && (z0(w(this, oe)), T(this, oe, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = w(this, lt), A;
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
    const i = this.getSettings(), t = await Xx(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === Co.FRONT ? void (5949 + 5949 * -1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return oi() ? (await Di()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-2373 * -1 + -2301 + -72);
  }
  async collectAvailableCamerasInfo() {
    const i = await Di();
    for (const t of i) {
      Pg() && a0() && await An(-2 * -7 + 3 * 2057 + 1 * -5735);
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
        const C = I;
        w(this, lt).push(C), z0(n);
      } catch (e) {
        e instanceof Error && L.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...w(this, Ze).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new L("Could not init camera settings");
    if (typeof w(this, Ze).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < w(this, Ze).minCameraShorterSide)
      throw this.close(), new L("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
Ze = new WeakMap(), lt = new WeakMap(), oe = new WeakMap();
var C0;
class RB {
  constructor({ cameraEvaluator: i, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    P(this, C0, !1);
    b(this, "videoHandler");
    b(this, "cameraHandler");
    b(this, "performanceCheckup");
    b(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = i;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    w(this, C0) || (T(this, C0, !0), await CI.requestPermission());
  }
  async startFirstVideoStream(i = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t == null ? void 0 : t.deviceId);
    !a0() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, -4215 + -1 * 5554 + 9769 * 1, -263 + -263 * -1), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(i) {
    await this.cameraHandler.open(i), Jc() && (this.cameraHandler.close(), await this.cameraHandler.open(i)), await this.mountVideoStream();
  }
  async switchCamera() {
    const i = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(i);
    this.pauseStream(), !a0() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
C0 = new WeakMap();
var ue;
class WB {
  constructor(i) {
    P(this, ue);
    T(this, ue, i);
  }
  get videoElement() {
    return w(this, ue);
  }
  async play(i) {
    w(this, ue).srcObject = i, await w(this, ue).play();
  }
  stop() {
    w(this, ue).srcObject = null;
  }
  hasSrcObject() {
    return !!w(this, ue).srcObject;
  }
}
ue = new WeakMap();
function Fo() {
  var o = ["WQ0ZFHrX", "W7dcIb3cUmkfpSkB", "kMOvWPVdOG", "W5ZdIrG", "aCk0WOxcN3C", "W4enWPi", "WQ0KW4u", "W5tdLY/cHfy", "FNiyFSoa", "bmkXcSkQWQC", "DsL4", "xbTZgSkt", "lmkIWPbJWQ0", "ymkZauHU", "W4pcOHJcRxC", "t8oFW7aqaW", "sKKXofKBWQVdKmk/zNCX", "h8kTWPFdLSoy", "nSkQvmoUW4C", "smosW6yMaq", "Csb1cSkt", "WPbLWQ8", "W50oWOm", "wSosW7S7iq", "W47cIM7cKSkQ", "FCksW50NW4e", "buBdUCkdW7e", "W4OjWPLz", "xIXIpCkp", "W6f9o8oOW4S", "w8oMW5yp", "sJ15gCk2", "EYfPW4VcQq", "hSkIWPddHSoD", "isvvcSkB", "pCk2ua", "W67cUaJcJw0", "Bmkwduvd", "l8k0WPtcJ3y", "g8kjWQXLdmkGfmkOWQ/cIq", "rSkqavjb", "W57dOtFdJSkW", "W53dJGnDWR8", "jSoaoSkXuG", "W4ZdRCo1WQD0WO9g", "usH4dCkk", "ySoQp2HJ", "WPngWQG", "WR0ZW4hcRSoy", "uCo/W50", "WRZdTSoJWQ1Y", "W5qoW7RdL8oe", "cCkJf8knWQq", "WPvVWQf1WQK", "f8oGkG", "WRxdSmopvxVdNmo5ex3dLJxdMMy", "kmowmmkwuG", "WPjKWRuSW6G", "BZ3cVu0nEJ8hDG", "W7P6W48tEG", "WQZcPqRcQ8kz", "hCk7kmk6WPe", "pmkZWPi", "omk8xSoDW5O", "WPldU8osWQfF", "p2NdT8kRW7m", "uMtcGx7dQCo8BCkwW4JcMCocdG", "WO3cGmoclZy", "W4ubWPLEWRu", "tfioACoZ", "mmokxaftaHJdTCoMW6e", "wcv/e8kh", "rCoEW60XgG", "xCoja0D/", "q8o0W4VcHCkhWR7cOsDMW656l8kk", "rSo/W4JcISkgWR/cRdjUW7j9nSkh", "W5/cLwRcNCk9", "W7xdTfZcHCkMbSkAdaO", "hmkPWOddGSog", "dCo7W4auB8oVuG", "xdbMg8kd", "bmoNlmkWba", "u8k2BSoZhSkTrJ09WP4", "umoNW4q", "qCoWxCoBW7G", "sMupW5rFW5nLb8k4WOS2", "vCowrSoLW7m", "h2hdUSkSW6O", "dCk+W5y6ASobqmkn", "iqz5kSky", "WPhcTmod", "W7vKx0FdGCk4WPzqnSk6vG", "WPVcRCozfJe", "dxGMwSoule/dQZuSw3jm", "W57dKZi", "W4BcSCkQW5XFWQ3cLSozm8kqlb8", "WQFcRrBcU8ki", "W5NcKwtcNCkk", "WPRdRCo1WO12", "W6hcSCkyaJS", "WPHJWQP2WQ8", "W6lcPrlcUMS", "fZfaWPau", "tui9stH7WQZdRmkt", "nhpdPG", "WOrbWRi7", "FNWlySoQ", "hqnREsK", "WRWJWPjmgNatW5zUWOJcJ8oQ", "W4VcPSk0W7KQW5eMW4NdKCo7WOZcIt4", "eYddLIhcUa", "u2ldLGJcTCketmkX", "iY5fdSk5", "c8oJoW", "W4RdOYO", "sem4pWjsWQ7dJCkTyW", "WQqWhsFcKq", "v8onfeXP", "ucrZ", "r8o4W4eyCq", "WPVcQcLAW4FcQCoAi8kyc8ohW49c", "W4/cKwxcLW", "W4JcS27cISkA", "WRFdT8oLWQ1S", "WP/cP8ojhY4", "W6dcRGlcVNa", "d8oRcSkSnG", "iSk4WP/cJha", "W4rTkSorW68", "v8o4v8oxW5i", "z8oPh8oGW7lcIrtcUCo/", "jmk5b8kTWR4", "WPRdRmoGWQfR", "WRmVW4JcUmos", "W4iwWRzjWOK", "c8oGn8k3gq", "omodoG", "W4RdL8kAWRZcNq", "vmoAqmoDW6i", "WPKSWO5nWQNcHCkL", "W5tdQcFdHmkJ"];
  return Fo = function() {
    return o;
  }, Fo();
}
function LA(o, i, t, e, A) {
  return CA(A - 890, i);
}
(function(o, i) {
  function t(I, C, r, E, B) {
    return CA(r - 213, B);
  }
  var e = o();
  function A(I, C, r, E, B) {
    return CA(B - 542, r);
  }
  function n(I, C, r, E, B) {
    return CA(r - -427, E);
  }
  function g(I, C, r, E, B) {
    return CA(E - 370, B);
  }
  function a(I, C, r, E, B) {
    return CA(C - 962, r);
  }
  for (; ; )
    try {
      var x = parseInt(g(829, 693, 771, 764, "D%&l")) / 1 * (parseInt(A(914, 864, "f5^a", 883, 872)) / 2) + parseInt(A(813, 889, "%(0f", 917, 876)) / 3 * (parseInt(t(551, 555, 561, 607, "yC8B")) / 4) + -parseInt(a(1270, 1291, "f5^a", 1234, 1338)) / 5 + -parseInt(a(1272, 1328, "GQXS", 1390, 1329)) / 6 * (-parseInt(A(846, 948, "AR3]", 863, 888)) / 7) + parseInt(g(759, 779, 756, 805, "Qykc")) / 8 * (-parseInt(t(482, 614, 550, 549, "v(!Y")) / 9) + -parseInt(A(879, 889, "GQXS", 822, 863)) / 10 * (parseInt(A(846, 965, "ng0O", 854, 900)) / 11) + parseInt(n(-68, -95, -42, "sO&c", -4)) / 12 * (parseInt(a(1379, 1312, "aSPc", 1301, 1355)) / 13);
      if (x === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fo, -22 * 2114 + 5367 * -44 + -1059 * -827);
function jA(o, i, t, e, A) {
  return CA(i - 71, o);
}
function CA(o, i) {
  var t = Fo();
  return CA = function(e, A) {
    e = e - 302;
    var n = t[e];
    if (CA.CQkYQi === void 0) {
      var g = function(r) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", Q = "", d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var p = 0, k = B.length; p < k; p++)
          Q += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      }, a = function(r, E) {
        var B = [], Q = 0, d, u = "";
        r = g(r);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (var f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      CA.Kxrpzr = a, o = arguments, CA.CQkYQi = !0;
    }
    var x = t[-6754 + 1 * -5188 + 11942], I = e + x, C = o[I];
    return C ? n = C : (CA.hFaJcZ === void 0 && (CA.hFaJcZ = !0), n = CA.Kxrpzr(n, A), o[I] = n), n;
  }, CA(o, i);
}
function be(o, i, t, e, A) {
  return CA(t - -74, i);
}
function SA(o, i, t, e, A) {
  return CA(t - 401, A);
}
function Oe(o, i, t, e, A) {
  return CA(e - -726, i);
}
var fa, ha, pa;
class MB {
  constructor() {
    b(this, pa, 0);
    b(this, ha);
    b(this, fa, void (2284 + 1 * 7159 + -133 * 71));
    function i(n, g, a, x, I) {
      return jA(a, g - -763);
    }
    function t(n, g, a, x, I) {
      return LA(n - 61, x, a - 362, x - 112, n - -1264);
    }
    function e(n, g, a, x, I) {
      return Oe(n - 89, x, a - 315, n - 703);
    }
    function A(n, g, a, x, I) {
      return be(n - 435, g, a - 266);
    }
    this[e(410, 405, 390, "bdHv") + t(63, 45, 113, "vRBz") + i(-397, -378, "GALh") + e(350, 370, 369, "yC8B")] = Date[A(581, "*LKP", 609)]();
  }
  [(pa = be(304, "*LKP", 234) + be(266, "4OE!", 329) + be(187, "v(!Y", 235), ha = SA(801, 818, 791, 862, "v(!Y") + SA(781, 785, 838, 819, "vRBz") + LA(1274, "[]Vi", 1330, 1332, 1328) + LA(1357, "D%&l", 1263, 1333, 1291), fa = SA(807, 877, 816, 825, "Qykc") + SA(745, 789, 779, 814, "Ny)#") + "p", be(357, "f5^a", 339) + LA(1247, "bdHv", 1254, 1301, 1299) + LA(1180, "4OE!", 1204, 1261, 1239))]() {
    this[A(-613, -579, "f5^a") + A(-582, -520, "sX9x") + A(-499, -510, "WnMd")]++;
    function i(g, a, x, I, C) {
      return LA(g - 480, g, x - 420, I - 28, C - -369);
    }
    function t(g, a, x, I, C) {
      return jA(C, a - -748);
    }
    function e(g, a, x, I, C) {
      return SA(g - 496, a - 490, I - -1024, I - 429, a);
    }
    function A(g, a, x, I, C) {
      return jA(x, a - -983);
    }
    function n(g, a, x, I, C) {
      return SA(g - 125, a - 260, g - -1360, I - 88, I);
    }
    if (this[n(-592, -642, -524, "*2wd") + A(-536, -498, "sO&c") + i("((Rl", 873, 805, 880, 823)] === -408 * 24 + 7420 + 2373)
      if (e(-219, "q8^B", -278, -240) !== A(-410, -470, "He&h")) this[t(-381, -322, -348, -329, "*LKP") + i("yC8B", 910, 910, 915, 937) + "p"] = Date[e(-225, "%(0f", -355, -285)]() - this[t(-306, -248, -262, -192, "f5^a") + i("0Vb@", 886, 875, 929, 919) + e(-207, "Qykc", -267, -204) + e(-148, "m2mm", -188, -217)];
      else return this[t(-361, -326, -256, -397, "w3j8") + n(-573, -625, -503, "rtxL") + "p"];
  }
  [jA("yC8B", 498) + Oe(-304, "Ny)#", -406, -339) + Oe(-359, "w3j8", -416, -411) + Oe(-237, "bdHv", -352, -290) + "up"]() {
    function i(g, a, x, I, C) {
      return SA(g - 417, a - 30, I - 308, I - 60, a);
    }
    if (!o0())
      if (n("ng0O", -45) === e(-211, -165, -154, -181, "D%&l")) this[A("vRBz", -75, -31, -36) + i(1125, "A$z!", 1146, 1148) + i(1066, "MokZ", 1056, 1100)]++, this[i(1070, "gNdB", 1072, 1066) + i(1e3, "rtxL", 1035, 1016) + e(-172, -260, -226, -290, "5LH9")] === 949 * 6 + -1050 + -1 * 4643 && (this[i(1047, "v(!Y", 982, 1045) + i(1158, "5LH9", 1112, 1109) + "p"] = _0x2c9988[t(937, 892, 883, "sO&c", 930)]() - this[e(-212, -253, -187, -152, "LXOj") + n("yC8B", -81) + i(1026, "dqf7", 1039, 1061) + n("v(!Y", -39)]);
      else return;
    this[t(816, 837, 933, "LXOj", 879) + i(1082, "sX9x", 1039, 1101) + e(-197, -140, -174, -177, "vRBz")] = 9627 * 1 + -2870 + -6757;
    function t(g, a, x, I, C) {
      return jA(I, C - 428);
    }
    function e(g, a, x, I, C) {
      return be(g - 164, C, x - -469);
    }
    this[e(-71, -171, -109, -124, "5LH9") + e(-185, -182, -223, -154, "jnhm") + "p"] = void (941 * -1 + -2909 * -1 + 123 * -16);
    function A(g, a, x, I, C) {
      return LA(g - 80, g, x - 100, I - 386, a - -1360);
    }
    function n(g, a, x, I, C) {
      return be(g - 344, g, a - -333);
    }
    window[A("AZ7D", -49, -82, -107) + t(858, 821, 912, "[@TB", 860) + i(1022, "((Rl", 977, 1021) + n("%(0f", 19)](A("WnMd", -82, -46, -41) + "wn", this[n("jnhm", -65) + A("dqf7", -93, -32, -67) + n("%(0f", -103)][t(831, 823, 886, "((Rl", 859)](this));
  }
  [LA(1286, "*2wd", 1295, 1342, 1320) + SA(774, 708, 755, 738, "jYBI") + LA(1147, "D%&l", 1175, 1146, 1213) + SA(702, 723, 706, 669, "Ny)#") + "up"]() {
    function i(g, a, x, I, C) {
      return LA(g - 494, g, x - 294, I - 363, a - -219);
    }
    function t(g, a, x, I, C) {
      return SA(g - 224, a - 345, x - -507, I - 382, C);
    }
    function e(g, a, x, I, C) {
      return jA(a, g - 630);
    }
    function A(g, a, x, I, C) {
      return LA(g - 96, C, x - 110, I - 266, a - 99);
    }
    if (!o0())
      if (n(-488, "jnhm", -475) === n(-550, "*2wd", -553)) {
        if (!_0x3860ea()) return;
        _0x567312[t(254, 355, 305, 238, "Qykc") + n(-616, "q%yy", -550) + t(237, 248, 266, 275, "He&h") + "r"](n(-545, "Qykc", -570) + "wn", this[A(1414, 1430, 1391, 1387, "yC8B") + n(-438, "[@TB", -493) + i("q%yy", 1016, 982, 1019)][n(-570, "dqf7", -521)](this));
      } else return;
    function n(g, a, x, I, C) {
      return jA(a, x - -968);
    }
    window[A(1300, 1368, 1351, 1335, "q%yy") + e(1109, "*d4r") + e(1066, "GQXS") + "r"](n(-657, "A$z!", -586) + "wn", this[i("rtxL", 1076, 1120, 1087) + t(338, 243, 278, 212, "95#Y") + i(")$cA", 1030, 1027, 982)][A(1419, 1412, 1472, 1388, "D%&l")](this));
  }
  [SA(778, 760, 821, 868, "dqf7") + LA(1353, "yC8B", 1306, 1315, 1297) + "lt"]() {
    function i(a, x, I, C, r) {
      return LA(a - 256, x, I - 269, C - 10, C - 13);
    }
    function t(a, x, I, C, r) {
      return SA(a - 414, x - 35, r - -574, C - 345, I);
    }
    if (!o0() || !this[t(258, 161, "95#Y", 176, 220) + t(281, 282, "LXOj", 172, 237) + "p"])
      if (g(764, "rtxL", 752, 738, 750) !== t(111, 104, "[@TB", 137, 151)) {
        var e = {};
        return e[g(725, "C]Im", 761, 797, 740) + n(1060, "dqf7", 989, 1019) + "e"] = !1, e;
      } else return this[A("sO&c", -272, -284, -317) + i(1282, "Ny)#", 1190, 1256) + g(797, "D%&l", 869, 800, 852)];
    function A(a, x, I, C, r) {
      return SA(a - 133, x - 244, C - -1036, C - 180, a);
    }
    function n(a, x, I, C, r) {
      return SA(a - 124, x - 287, C - 287, C - 487, x);
    }
    function g(a, x, I, C, r) {
      return Oe(a - 275, x, I - 453, r - 1160);
    }
    return { performance: !0, hiccupAmount: this[i(1262, "m2mm", 1388, 1331) + t(153, 243, "%(0f", 190, 201) + A("q%yy", -327, -333, -313) + "t"](), firstHiccup: this[n(1049, "yC8B", 1083, 1112) + t(144, 213, "Ny)#", 80, 146) + n(1050, "6cIK", 1125, 1084) + g(761, "yC8B", 826, 740, 769) + "ss"]() };
  }
  [jA("95#Y", 412) + SA(775, 682, 729, 660, "He&h") + Oe(-335, "95#Y", -434, -387) + "t"]() {
    function i(t, e, A, n, g) {
      return jA(n, e - -365);
    }
    return this[i(76, 88, 42, "5LH9") + i(194, 138, 118, "LXOj") + i(82, 105, 157, "[]Vi")];
  }
  [Oe(-415, "AR3]", -306, -355) + jA("v(!Y", 452) + LA(1342, "q8^B", 1342, 1245, 1315) + jA("WnMd", 374) + "ss"]() {
    function i(e, A, n, g, a) {
      return jA(e, a - 586);
    }
    function t(e, A, n, g, a) {
      return be(e - 39, a, e - -94);
    }
    return this[t(183, 187, 192, 177, "w3j8") + i("rtxL", 1068, 1038, 1062, 1043) + "p"];
  }
}
function vB(o) {
  const i = zA(null), [t, e] = WA(), [A, n] = WA(), { handleError: g, setIsCameraReady: a } = Ue(), x = De((C) => {
    n((r) => Oc(C, r));
  }, []);
  eA(() => {
    if (!i.current) {
      g(new L("Something went wrong during video initialization"));
      return;
    }
    const C = new WB(i.current), r = new NB(), E = new CI(), B = new MB(), Q = {};
    Q.videoHandler = C, Q.cameraHandler = E, Q.performanceCheckup = B, Q.cameraEvaluator = r;
    const d = new RB(Q);
    return (async () => {
      try {
        const c = {};
        c.facingMode = o, await d.startFirstVideoStream(c);
      } catch (c) {
        if (c instanceof Error) {
          g(L.fromCameraError(c));
          return;
        }
      }
      e(d), a(!0), x(d.getCameraResolution());
    })(), () => {
      d == null || d.stopStreaming(), a(!1), e(void (-1 * 4377 + -37 * -136 + 131 * -5));
    };
  }, [o, g, a, i, x]);
  const I = {};
  return I.cameraService = t, I.cameraResolution = A, I.onCameraResolutionChange = x, I.videoRef = i, I;
}
function LB({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: n } = vB(o), g = MA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: n
    }),
    [e, t, A, n]
  );
  return /* @__PURE__ */ D(mo.Provider, { value: g, children: i });
}
const JB = async () => WebAssembly.validate(new Uint8Array([717 * 13 + 5920 + 1 * -15241, 5 * 1777 + 1433 * -1 + -1 * 7355, -31 * -23 + 9217 + -9815, -11763 + 1484 * 8, -1 * -7061 + -6198 + -862, 0, -2766 + 715 * 4 + 1 * -94, -1 * 6871 + 1014 + 5857 * 1, 5918 + -3 * 2922 + 2849, 37 * 209 + -46 * -133 + -13846, 3134 + -13 * 241, 2699 + -1 * 2603, 4026 + -339 * 3 + -59 * 51, 5708 + 5707 * -1, 6 * -370 + 2281 * -1 + -136 * -34, 687 * 3 + -1 * -1279 + -3337, -515 * -10 + -7366 + 2218 * 1, 10 * -730 + 8257 + 2 * -478, 1063 * 7 + -1075 + -3183 * 2, -13 * 722 + -204 + -200 * -48, -147 * -17 + -1338 + 1151 * -1, -3440 + -19 * 105 + 5436, -89 * -97 + 2 * -4871 + -1 * -1117, -8733 + 41 * 213, -13317 + 1 * 13382, 3 * 1061 + 5452 + 157 * -55, -491 * 14 + -4166 + 11293, 1 * -7269 + -615 + 7899, 7341 + 575 * 1 + -7663, 98, -755 + 7 * 769 + -4617]));
function UB() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(6324 + -1421 * -2 + -9150);
}
function YB() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = UB();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function OB(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const sn = {};
sn.label = ">1m", sn.time = 60;
const Qn = {};
Qn.label = ">45", Qn.time = 45;
const En = {};
En.label = ">30", En.time = 30;
function KB(o, i = [sn, Qn, En]) {
  const t = i.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const HB = (o) => Math.round(o / 500) * 500 / (-9832 * -1 + 9980 + -18812), Kt = (o) => o ? o <= 1 ? Math.round(o * (1013 * -3 + 5842 + -2783)) / (7248 + 1 * -7228) : Math.round(o / 50) * (-466 + -3 * -172) : -10 * 557 + 1455 + -4115 * -1, TB = (o) => Math.round(o * (-2683 * 1 + -744 + 3429)) / (5287 + 10 * 813 + 2683 * -5);
function PB(o) {
  return o !== QA.RUNNING ? fo.VISIBLE : fo.VISIBLE_WITH_MASK;
}
async function qB() {
  return await JB() ? jg.SIMD : jg.NO_SIMD;
}
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cI = {}, Xg = {}, jB = ZB;
function ZB(o, i) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, n = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(g, a) {
    t[e] = function(x) {
      if (n)
        if (n = !1, x)
          a(x);
        else {
          for (var I = new Array(arguments.length - 1), C = 0; C < I.length; )
            I[C++] = arguments[C];
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
var BI = {};
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
    for (var I = null, C = [], r = 0, E = 0, B; a < x; ) {
      var Q = g[a++];
      switch (E) {
        case 0:
          C[r++] = t[Q >> 2], B = (Q & 3) << 4, E = 1;
          break;
        case 1:
          C[r++] = t[B | Q >> 4], B = (Q & 15) << 2, E = 2;
          break;
        case 2:
          C[r++] = t[B | Q >> 6], C[r++] = t[Q & 63], E = 0;
          break;
      }
      r > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), r = 0);
    }
    return E && (C[r++] = t[B], C[r++] = 61, E === 1 && (C[r++] = 61)), I ? (r && I.push(String.fromCharCode.apply(String, C.slice(0, r))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, r));
  };
  var n = "invalid encoding";
  i.decode = function(g, a, x) {
    for (var I = x, C = 0, r, E = 0; E < g.length; ) {
      var B = g.charCodeAt(E++);
      if (B === 61 && C > 1)
        break;
      if ((B = e[B]) === void 0)
        throw Error(n);
      switch (C) {
        case 0:
          r = B, C = 1;
          break;
        case 1:
          a[x++] = r << 2 | (B & 48) >> 4, r = B, C = 2;
          break;
        case 2:
          a[x++] = (r & 15) << 4 | (B & 60) >> 2, r = B, C = 3;
          break;
        case 3:
          a[x++] = (r & 3) << 6 | B, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(n);
    return x - I;
  }, i.test = function(g) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g);
  };
})(BI);
var VB = ii;
function ii() {
  this._listeners = {};
}
ii.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
ii.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
ii.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var _B = zg(zg);
function zg(o) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function A(x, I, C) {
      i[0] = x, I[C] = t[0], I[C + 1] = t[1], I[C + 2] = t[2], I[C + 3] = t[3];
    }
    function n(x, I, C) {
      i[0] = x, I[C] = t[3], I[C + 1] = t[2], I[C + 2] = t[1], I[C + 3] = t[0];
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
    o.writeFloatLE = i.bind(null, $g), o.writeFloatBE = i.bind(null, Aa);
    function t(e, A, n) {
      var g = e(A, n), a = (g >> 31) * 2 + 1, x = g >>> 23 & 255, I = g & 8388607;
      return x === 255 ? I ? NaN : a * (1 / 0) : x === 0 ? a * 1401298464324817e-60 * I : a * Math.pow(2, x - 150) * (I + 8388608);
    }
    o.readFloatLE = t.bind(null, ea), o.readFloatBE = t.bind(null, ta);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function A(x, I, C) {
      i[0] = x, I[C] = t[0], I[C + 1] = t[1], I[C + 2] = t[2], I[C + 3] = t[3], I[C + 4] = t[4], I[C + 5] = t[5], I[C + 6] = t[6], I[C + 7] = t[7];
    }
    function n(x, I, C) {
      i[0] = x, I[C] = t[7], I[C + 1] = t[6], I[C + 2] = t[5], I[C + 3] = t[4], I[C + 4] = t[3], I[C + 5] = t[2], I[C + 6] = t[1], I[C + 7] = t[0];
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
        var C;
        if (g < 22250738585072014e-324)
          C = g / 5e-324, e(C >>> 0, a, x + A), e((I << 31 | C / 4294967296) >>> 0, a, x + n);
        else {
          var r = Math.floor(Math.log(g) / Math.LN2);
          r === 1024 && (r = 1023), C = g * Math.pow(2, -r), e(C * 4503599627370496 >>> 0, a, x + A), e((I << 31 | r + 1023 << 20 | C * 1048576 & 1048575) >>> 0, a, x + n);
        }
      }
    }
    o.writeDoubleLE = i.bind(null, $g, 0, 4), o.writeDoubleBE = i.bind(null, Aa, 4, 0);
    function t(e, A, n, g, a) {
      var x = e(g, a + A), I = e(g, a + n), C = (I >> 31) * 2 + 1, r = I >>> 20 & 2047, E = 4294967296 * (I & 1048575) + x;
      return r === 2047 ? E ? NaN : C * (1 / 0) : r === 0 ? C * 5e-324 * E : C * Math.pow(2, r - 1075) * (E + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, ea, 0, 4), o.readDoubleBE = t.bind(null, ta, 4, 0);
  }(), o;
}
function $g(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function Aa(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function ea(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function ta(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function oa(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var XB = zB;
function zB(o) {
  try {
    if (typeof oa != "function")
      return null;
    var i = oa(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var sI = {};
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
})(sI);
var $B = As;
function As(o, i, t) {
  var e = t || 8192, A = e >>> 1, n = null, g = e;
  return function(a) {
    if (a < 1 || a > A)
      return o(a);
    g + a > e && (n = o(e), g = 0);
    var x = i.call(n, g, g += a);
    return g & 7 && (g = (g | 7) + 1), x;
  };
}
var mi, ia;
function es() {
  if (ia)
    return mi;
  ia = 1, mi = i;
  var o = gt();
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
  }, mi;
}
var na;
function gt() {
  return na || (na = 1, function(o) {
    var i = o;
    i.asPromise = jB, i.base64 = BI, i.EventEmitter = VB, i.float = _B, i.inquire = XB, i.utf8 = sI, i.pool = $B, i.LongBits = es(), i.isNode = !!(typeof Ke < "u" && Ke && Ke.process && Ke.process.versions && Ke.process.versions.node), i.global = i.isNode && Ke || typeof window < "u" && window || typeof self < "u" && self || Ke, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Xg)), Xg;
}
var QI = H, XA = gt(), dn, ni = XA.LongBits, ga = XA.base64, aa = XA.utf8;
function w0(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function jn() {
}
function ts(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function H() {
  this.len = 0, this.head = new w0(jn, 0, 0), this.tail = this.head, this.states = null;
}
var EI = function() {
  return XA.Buffer ? function() {
    return (H.create = function() {
      return new dn();
    })();
  } : function() {
    return new H();
  };
};
H.create = EI();
H.alloc = function(o) {
  return new XA.Array(o);
};
XA.Array !== Array && (H.alloc = XA.pool(H.alloc, XA.Array.prototype.subarray));
H.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new w0(o, i, t), this.len += i, this;
};
function Zn(o, i, t) {
  i[t] = o & 255;
}
function os(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function Vn(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
Vn.prototype = Object.create(w0.prototype);
Vn.prototype.fn = os;
H.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new Vn(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
H.prototype.int32 = function(o) {
  return o < 0 ? this._push(_n, 10, ni.fromNumber(o)) : this.uint32(o);
};
H.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function _n(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
H.prototype.uint64 = function(o) {
  var i = ni.from(o);
  return this._push(_n, i.length(), i);
};
H.prototype.int64 = H.prototype.uint64;
H.prototype.sint64 = function(o) {
  var i = ni.from(o).zzEncode();
  return this._push(_n, i.length(), i);
};
H.prototype.bool = function(o) {
  return this._push(Zn, 1, o ? 1 : 0);
};
function ln(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
H.prototype.fixed32 = function(o) {
  return this._push(ln, 4, o >>> 0);
};
H.prototype.sfixed32 = H.prototype.fixed32;
H.prototype.fixed64 = function(o) {
  var i = ni.from(o);
  return this._push(ln, 4, i.lo)._push(ln, 4, i.hi);
};
H.prototype.sfixed64 = H.prototype.fixed64;
H.prototype.float = function(o) {
  return this._push(XA.float.writeFloatLE, 4, o);
};
H.prototype.double = function(o) {
  return this._push(XA.float.writeDoubleLE, 8, o);
};
var is = XA.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
H.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(Zn, 1, 0);
  if (XA.isString(o)) {
    var t = H.alloc(i = ga.length(o));
    ga.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(is, i, o);
};
H.prototype.string = function(o) {
  var i = aa.length(o);
  return i ? this.uint32(i)._push(aa.write, i, o) : this._push(Zn, 1, 0);
};
H.prototype.fork = function() {
  return this.states = new ts(this), this.head = this.tail = new w0(jn, 0, 0), this.len = 0, this;
};
H.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new w0(jn, 0, 0), this.len = 0), this;
};
H.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
H.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
H._configure = function(o) {
  dn = o, H.create = EI(), dn._configure();
};
var ns = Ce, dI = QI;
(Ce.prototype = Object.create(dI.prototype)).constructor = Ce;
var ve = gt();
function Ce() {
  dI.call(this);
}
Ce._configure = function() {
  Ce.alloc = ve._Buffer_allocUnsafe, Ce.writeBytesBuffer = ve.Buffer && ve.Buffer.prototype instanceof Uint8Array && ve.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
Ce.prototype.bytes = function(o) {
  ve.isString(o) && (o = ve._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(Ce.writeBytesBuffer, i, o), this;
};
function gs(o, i, t) {
  o.length < 40 ? ve.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
Ce.prototype.string = function(o) {
  var i = ve.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(gs, i, o), this;
};
Ce._configure();
var lI = oA, ce = gt(), un, uI = ce.LongBits, as = ce.utf8;
function ne(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function oA(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var xa = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new oA(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new oA(o);
  throw Error("illegal buffer");
}, fI = function() {
  return ce.Buffer ? function(o) {
    return (oA.create = function(i) {
      return ce.Buffer.isBuffer(i) ? new un(i) : xa(i);
    })(o);
  } : xa;
};
oA.create = fI();
oA.prototype._slice = ce.Array.prototype.subarray || /* istanbul ignore next */
ce.Array.prototype.slice;
oA.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, ne(this, 10);
    return o;
  };
}();
oA.prototype.int32 = function() {
  return this.uint32() | 0;
};
oA.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function wi() {
  var o = new uI(0, 0), i = 0;
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
        throw ne(this);
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
        throw ne(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
oA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Ro(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
oA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ne(this, 4);
  return Ro(this.buf, this.pos += 4);
};
oA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ne(this, 4);
  return Ro(this.buf, this.pos += 4) | 0;
};
function Ia() {
  if (this.pos + 8 > this.len)
    throw ne(this, 8);
  return new uI(Ro(this.buf, this.pos += 4), Ro(this.buf, this.pos += 4));
}
oA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw ne(this, 4);
  var o = ce.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
oA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw ne(this, 4);
  var o = ce.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
oA.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw ne(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
oA.prototype.string = function() {
  var o = this.bytes();
  return as.read(o, 0, o.length);
};
oA.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw ne(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw ne(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
oA.prototype.skipType = function(o) {
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
oA._configure = function(o) {
  un = o, oA.create = fI(), un._configure();
  var i = ce.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ce.merge(oA.prototype, {
    int64: function() {
      return wi.call(this)[i](!1);
    },
    uint64: function() {
      return wi.call(this)[i](!0);
    },
    sint64: function() {
      return wi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return Ia.call(this)[i](!0);
    },
    sfixed64: function() {
      return Ia.call(this)[i](!1);
    }
  });
};
var xs = it, hI = lI;
(it.prototype = Object.create(hI.prototype)).constructor = it;
var ra = gt();
function it(o) {
  hI.call(this, o);
}
it._configure = function() {
  ra.Buffer && (it.prototype._slice = ra.Buffer.prototype.slice);
};
it.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
it._configure();
var pI = {}, Is = I0, Xn = gt();
(I0.prototype = Object.create(Xn.EventEmitter.prototype)).constructor = I0;
function I0(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  Xn.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
I0.prototype.rpcCall = function o(i, t, e, A, n) {
  if (!A)
    throw TypeError("request must be specified");
  var g = this;
  if (!n)
    return Xn.asPromise(o, g, i, t, e, A);
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
I0.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = Is;
})(pI);
var rs = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = QI, i.BufferWriter = ns, i.Reader = lI, i.BufferReader = xs, i.util = gt(), i.rpc = pI, i.roots = rs, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(cI);
var O = cI;
const h = O.Reader, K = O.Writer, l = O.util, s = O.roots.default || (O.roots.default = {}), Nt = s.dot = (() => {
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Content();
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
      if (t instanceof s.dot.Content)
        return t;
      let e = new s.dot.Content();
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
            s.dot.Image.encode(e.images[n], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(s.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
            let n = s.dot.Image.verify(e.images[A]);
            if (n)
              return "images." + n;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new s.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let n = 0; n < e.images.length; ++n) {
            if (typeof e.images[n] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[n] = s.dot.Image.fromObject(e.images[n]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if ((A.arrays || A.defaults) && (n.images = []), A.defaults && (n.metadata = null), e.images && e.images.length) {
          n.images = [];
          for (let g = 0; g < e.images.length; ++g)
            n.images[g] = s.dot.Image.toObject(e.images[g], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && s.dot.v4.WebMetadata.encode(A.web, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && s.dot.v4.AndroidMetadata.encode(A.android, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && s.dot.v4.IosMetadata.encode(A.ios, n.uint32(
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
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Metadata();
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
              a.web = s.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = s.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = s.dot.v4.IosMetadata.decode(A, A.uint32());
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
            let g = s.dot.v4.WebMetadata.verify(A.web);
            if (g)
              return "web." + g;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = s.dot.v4.AndroidMetadata.verify(A.android);
            if (g)
              return "android." + g;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = s.dot.v4.IosMetadata.verify(A.ios);
            if (g)
              return "ios." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Metadata)
          return A;
        let n = new s.dot.v4.Metadata();
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
          n.web = s.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          n.android = s.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          n.ios = s.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.platform = n.enums === String ? "WEB" : 0, g.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (g.platform = n.enums === String ? s.dot.Platform[A.platform] === void 0 ? A.platform : s.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (g.web = s.dot.v4.WebMetadata.toObject(A.web, n), n.oneofs && (g.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (g.android = s.dot.v4.AndroidMetadata.toObject(A.android, n), n.oneofs && (g.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (g.ios = s.dot.v4.IosMetadata.toObject(A.ios, n), n.oneofs && (g.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g.sessionToken = A.sessionToken, n.oneofs && (g._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (g.componentVersion = A.componentVersion), g;
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
            ).string(g[a]), s.dot.Int32List.encode(A.dynamicCameraFrameProperties[g[a]], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.AndroidCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && s.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.AndroidMetadata(), x, I;
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
              a.camera = s.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === l.emptyObject && (a.dynamicCameraFrameProperties = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = null; A.pos < r; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = s.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
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
              a.croppedYuv420Image = s.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
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
          let n = s.dot.v4.AndroidCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let g = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (g)
              return "digestsWithTimestamp." + g;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let n = Object.keys(A.dynamicCameraFrameProperties);
          for (let g = 0; g < n.length; ++g) {
            let a = s.dot.Int32List.verify(A.dynamicCameraFrameProperties[n[g]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = s.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.AndroidMetadata)
          return A;
        let n = new s.dot.v4.AndroidMetadata();
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
          n.camera = s.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            n.digestsWithTimestamp[g] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          n.dynamicCameraFrameProperties = {};
          for (let g = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < g.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[g[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            n.dynamicCameraFrameProperties[g[a]] = s.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[g[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, n.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (n.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = s.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
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
            g.dynamicCameraFrameProperties[a[x]] = s.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[x]], n);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          g.digestsWithTimestamp = [];
          for (let x = 0; x < A.digestsWithTimestamp.length; ++x)
            g.digestsWithTimestamp[x] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = s.dot.v4.AndroidCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (g.tamperingIndicators = n.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : n.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, n.oneofs && (g._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (g.croppedYuv420Image = s.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (g._croppedYuv420Image = "croppedYuv420Image")), g;
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
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.AndroidCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = s.dot.ImageSize.decode(e, e.uint32());
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
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AndroidCamera)
          return e;
        let A = new s.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
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
        return A || (A = K.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && s.dot.ImageSize.encode(e.size, A.uint32(
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.Yuv420Image();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.size = s.dot.ImageSize.decode(e, e.uint32());
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
          let A = s.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.Yuv420Image)
          return e;
        let A = new s.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = s.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = l.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = l.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = l.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = s.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
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
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.IosCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.IosMetadata(), x, I;
        for (; A.pos < g; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === l.emptyObject && (a.architectureInfo = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = !1; A.pos < r; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.architectureInfo[x] = I;
              break;
            }
            case 6: {
              a.camera = s.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (C & 7) === 2) {
                let r = A.uint32() + A.pos;
                for (; A.pos < r; )
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
          let n = s.dot.v4.IosCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let g = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
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
        if (A instanceof s.dot.v4.IosMetadata)
          return A;
        let n = new s.dot.v4.IosMetadata();
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
          n.camera = s.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            n.digestsWithTimestamp[g] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
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
            g.digestsWithTimestamp[x] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = s.dot.v4.IosCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), g;
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
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.IosCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = s.dot.ImageSize.decode(e, e.uint32());
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
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.IosCamera)
          return e;
        let A = new s.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
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
        if (n || (n = K.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            s.dot.v4.CameraProperties.encode(A.availableCameraProperties[g], n.uint32(
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
            s.dot.v4.DetectedObject.encode(A.detectionRecord[g], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            s.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && s.dot.Image.encode(A.croppedImage, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.currentCameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(s.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(s.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(s.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = s.dot.Image.decode(A, A.uint32());
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
          let n = s.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            let g = s.dot.v4.CameraProperties.verify(A.availableCameraProperties[n]);
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
            let g = s.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[n]);
            if (g)
              return "hashedDetectedImagesWithTimestamp." + g;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            let g = s.dot.v4.DetectedObject.verify(A.detectionRecord[n]);
            if (g)
              return "detectionRecord." + g;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let n = s.dot.Image.verify(A.croppedImage);
          if (n)
            return "croppedImage." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.WebMetadata)
          return A;
        let n = new s.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            if (typeof A.availableCameraProperties[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[g] = s.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[g]);
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
            n.hashedDetectedImagesWithTimestamp[g] = s.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[g]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            if (typeof A.detectionRecord[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[g] = s.dot.v4.DetectedObject.fromObject(A.detectionRecord[g]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          n.croppedImage = s.dot.Image.fromObject(A.croppedImage);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.availableCameraProperties = [], g.hashedDetectedImages = [], g.detectionRecord = [], g.hashedDetectedImagesWithTimestamp = []), n.defaults && (g.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (g.currentCameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, n)), A.availableCameraProperties && A.availableCameraProperties.length) {
          g.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            g.availableCameraProperties[a] = s.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], n);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          g.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            g.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          g.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            g.detectionRecord[a] = s.dot.v4.DetectedObject.toObject(A.detectionRecord[a], n);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          g.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            g.hashedDetectedImagesWithTimestamp[a] = s.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], n);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (g.croppedImage = s.dot.Image.toObject(A.croppedImage, n), n.oneofs && (g._croppedImage = "croppedImage")), g;
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof s.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new s.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.MediaTrackSettings();
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
        if (A instanceof s.dot.v4.MediaTrackSettings)
          return A;
        let n = new s.dot.v4.MediaTrackSettings();
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.ImageBitmap();
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
        if (e instanceof s.dot.v4.ImageBitmap)
          return e;
        let A = new s.dot.v4.ImageBitmap();
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
        return n || (n = K.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && s.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = s.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
          let n = s.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (n)
            return "cameraInitFrameResolution." + n;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let n = s.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (n)
            return "cameraProperties." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.CameraProperties)
          return A;
        let n = new s.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          n.cameraInitFrameResolution = s.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          n.cameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (g.cameraInitFrameResolution = s.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, n), n.oneofs && (g._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (g.cameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, n)), g;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && s.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && s.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && s.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && s.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && s.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DetectedObject();
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
              g.faceCenter = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = s.dot.v4.Point.decode(e, e.uint32());
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
          let A = s.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = s.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = s.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = s.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = s.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DetectedObject)
          return e;
        let A = new s.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = s.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = s.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = s.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = s.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = s.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = s.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = s.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = s.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = s.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = s.dot.v4.Point.toObject(e.topRight, A)), n;
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.Point();
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
        if (e instanceof s.dot.v4.Point)
          return e;
        let A = new s.dot.v4.Point();
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
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.FaceContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.FaceContent)
          return e;
        let A = new s.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DocumentContent)
          return e;
        let A = new s.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
        return n || (n = K.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && s.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && s.dot.v4.FaceContent.encode(A.faceContent, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && s.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && s.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && s.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && s.dot.v4.PalmContent.encode(A.palmContent, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && s.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Blob();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.documentContent = s.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = s.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = s.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = s.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = s.dot.v4.TravelDocumentContent.decode(A, A.uint32());
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
            let g = s.dot.v4.DocumentContent.verify(A.documentContent);
            if (g)
              return "documentContent." + g;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (g)
              return "eyeGazeLivenessContent." + g;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.FaceContent.verify(A.faceContent);
            if (g)
              return "faceContent." + g;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (g)
              return "magnifeyeLivenessContent." + g;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (g)
              return "smileLivenessContent." + g;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.PalmContent.verify(A.palmContent);
            if (g)
              return "palmContent." + g;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (g)
              return "travelDocumentContent." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Blob)
          return A;
        let n = new s.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          n.documentContent = s.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          n.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          n.faceContent = s.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          n.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          n.smileLivenessContent = s.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          n.palmContent = s.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          n.travelDocumentContent = s.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (g.documentContent = s.dot.v4.DocumentContent.toObject(A.documentContent, n), n.oneofs && (g.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (g.faceContent = s.dot.v4.FaceContent.toObject(A.faceContent, n), n.oneofs && (g.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (g.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, n), n.oneofs && (g.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (g.smileLivenessContent = s.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, n), n.oneofs && (g.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (g.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, n), n.oneofs && (g.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (g.palmContent = s.dot.v4.PalmContent.toObject(A.palmContent, n), n.oneofs && (g.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (g.travelDocumentContent = s.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, n), n.oneofs && (g.blob = "travelDocumentContent")), g;
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
        return A || (A = K.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && s.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && s.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.TravelDocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = s.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = s.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = s.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = s.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.TravelDocumentContent)
          return e;
        let A = new s.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = s.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = s.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = s.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = s.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
        return A || (A = K.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && s.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.LdsMasterFile();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
          let A = s.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.LdsMasterFile)
          return e;
        let A = new s.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
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
        return n || (n = K.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && s.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && s.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && s.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && s.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && s.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && s.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, n.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, n.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, n.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && s.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && s.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, n.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && s.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, n.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (n)
            return "comHeaderAndDataGroupPresenceInformation." + n;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (n)
            return "sodDocumentSecurityObject." + n;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (n)
            return "dg1MachineReadableZoneInformation." + n;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (n)
            return "dg2EncodedIdentificationFeaturesFace." + n;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (n)
            return "dg3AdditionalIdentificationFeatureFingers." + n;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (n)
            return "dg4AdditionalIdentificationFeatureIrises." + n;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (n)
            return "dg5DisplayedPortrait." + n;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (n)
            return "dg7DisplayedSignatureOrUsualMark." + n;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (n)
            return "dg8DataFeatures." + n;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (n)
            return "dg9StructureFeatures." + n;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (n)
            return "dg10SubstanceFeatures." + n;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (n)
            return "dg11AdditionalPersonalDetails." + n;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (n)
            return "dg12AdditionalDocumentDetails." + n;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (n)
            return "dg13OptionalDetails." + n;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (n)
            return "dg14SecurityOptions." + n;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (n)
            return "dg15ActiveAuthenticationPublicKeyInfo." + n;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (n)
            return "dg16PersonsToNotify." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Lds1eMrtdApplication)
          return A;
        let n = new s.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          n.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          n.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          n.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          n.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          n.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          n.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          n.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          n.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          n.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          n.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          n.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          n.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          n.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          n.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          n.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          n.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          n.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.comHeaderAndDataGroupPresenceInformation = null, g.sodDocumentSecurityObject = null, g.dg1MachineReadableZoneInformation = null, g.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (g.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, n)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (g.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, n)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (g.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, n)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (g.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, n)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (g.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, n), n.oneofs && (g._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (g.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, n), n.oneofs && (g._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (g.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, n), n.oneofs && (g._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (g.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, n), n.oneofs && (g._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (g.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, n), n.oneofs && (g._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (g.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, n), n.oneofs && (g._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (g.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, n), n.oneofs && (g._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (g.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, n), n.oneofs && (g._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (g.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, n), n.oneofs && (g._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (g.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, n), n.oneofs && (g._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (g.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, n), n.oneofs && (g._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (g.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, n), n.oneofs && (g._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (g.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, n), n.oneofs && (g._dg16PersonsToNotify = "dg16PersonsToNotify")), g;
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
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Lds1ElementaryFile();
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
        if (A instanceof s.dot.v4.Lds1ElementaryFile)
          return A;
        let n = new s.dot.v4.Lds1ElementaryFile();
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
        return n.defaults && (g.id = n.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (g.id = n.enums === String ? s.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : s.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (g.bytes = n.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, n.oneofs && (g._bytes = "bytes")), g;
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
        return A || (A = K.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && s.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && s.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.AuthenticationStatus();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.data = s.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = s.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
          let A = s.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = s.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AuthenticationStatus)
          return e;
        let A = new s.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = s.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = s.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = s.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = s.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
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
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DataAuthenticationStatus();
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
        if (e instanceof s.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new s.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (n.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, n.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (n.status = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : s.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (n.protocol = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), n;
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
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.ChipAuthenticationStatus();
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
        if (A instanceof s.dot.v4.ChipAuthenticationStatus)
          return A;
        let n = new s.dot.v4.ChipAuthenticationStatus();
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
        return n.defaults && (g.status = n.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (g.status = n.enums === String ? s.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : s.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (g.protocol = n.enums === String ? s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, n.oneofs && (g._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (g.activeAuthenticationResponse = n.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : n.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, n.oneofs && (g._activeAuthenticationResponse = "activeAuthenticationResponse")), g;
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
            s.dot.v4.EyeGazeLivenessSegment.encode(A.segments[g], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && s.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && s.dot.Image.encode(A.image, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 3: {
              a.image = s.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(s.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = s.dot.v4.Metadata.decode(A, A.uint32());
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
          let n = s.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let n = 0; n < A.segments.length; ++n) {
            let g = s.dot.v4.EyeGazeLivenessSegment.verify(A.segments[n]);
            if (g)
              return "segments." + g;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = s.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.EyeGazeLivenessContent)
          return A;
        let n = new s.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          n.image = s.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let g = 0; g < A.segments.length; ++g) {
            if (typeof A.segments[g] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[g] = s.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[g]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = s.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.segments = []), n.defaults && (g.metadata = null), A.segments && A.segments.length) {
          g.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            g.segments[a] = s.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(A.metadata, n)), A.image != null && A.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(A.image, n), n.oneofs && (g._image = "image")), g;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.corner = e.int32();
              break;
            }
            case 2: {
              g.image = s.dot.Image.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new s.dot.v4.EyeGazeLivenessSegment();
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
          A.image = s.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? s.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : s.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), n;
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
        return A || (A = K.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && s.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && s.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.SmileLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = s.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.SmileLivenessContent)
          return e;
        let A = new s.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = s.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = s.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.neutralExpressionFaceImage = null, n.smileExpressionFaceImage = null, n.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (n.neutralExpressionFaceImage = s.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (n.smileExpressionFaceImage = s.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.PalmContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.PalmContent)
          return e;
        let A = new s.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Image();
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
      if (t instanceof s.dot.Image)
        return t;
      let e = new s.dot.Image();
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.ImageSize();
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
      if (t instanceof s.dot.ImageSize)
        return t;
      let e = new s.dot.ImageSize();
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Int32List();
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
      if (t instanceof s.dot.Int32List)
        return t;
      let e = new s.dot.Int32List();
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.RectangleDouble();
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
      if (t instanceof s.dot.RectangleDouble)
        return t;
      let e = new s.dot.RectangleDouble();
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
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.DigestWithTimestamp();
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
      if (t instanceof s.dot.DigestWithTimestamp)
        return t;
      let e = new s.dot.DigestWithTimestamp();
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
(function(o, i) {
  function t(a, x, I, C, r) {
    return cA(r - 859, C);
  }
  function e(a, x, I, C, r) {
    return cA(C - 255, r);
  }
  const A = o();
  function n(a, x, I, C, r) {
    return cA(x - 164, r);
  }
  function g(a, x, I, C, r) {
    return cA(a - -189, C);
  }
  for (; ; )
    try {
      if (-parseInt(t(1290, 1331, 1227, "69ra", 1298)) / 1 * (-parseInt(g(197, 260, 131, "LDPE", 147)) / 2) + parseInt(e(617, 708, 733, 616, "S3Z3")) / 3 * (parseInt(e(521, 569, 526, 610, "sjWh")) / 4) + -parseInt(n(509, 583, 576, 697, "cIfh")) / 5 + -parseInt(e(650, 720, 735, 643, "F%Om")) / 6 * (-parseInt(t(1208, 1257, 1128, "W15X", 1231)) / 7) + parseInt(n(800, 702, 626, 717, "o@Fu")) / 8 * (-parseInt(n(564, 576, 494, 480, "g9fb")) / 9) + parseInt(t(1459, 1405, 1506, "&[K6", 1395)) / 10 + -parseInt(t(1473, 1280, 1424, "WAql", 1376)) / 11 * (-parseInt(g(208, 177, 151, "86U$", 172)) / 12) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Wo, -573 * -27 + -64885 + 282329);
function Cs() {
  const o = a(-343, -327, -345, -264, "]$f7") + a(-518, -472, -575, -548, "W15X") + a(-453, -564, -379, -492, "ikfA") + a(-354, -381, -371, -249, "eTY&") + I("P7Z3", 932, 948, 856, 854) + t("QF2e", -68) + g(-17, 95, "NOd7") + g(-3, -11, "%Dgv") + a(-460, -548, -351, -478, "B^B#") + t("CSDb", -12) + t("42DN", 68) + t("iN*K", -141) + x(-595, -657, "sjWh", -624) + I("ZTiW", 602, 673, 688, 699) + I("3)H5", 713, 937, 829, 824) + x(-567, -627, "iN*K", -559) + I("W15X", 881, 807, 726, 802) + g(182, 151, "P7Z3") + t("NOd7", -95) + x(-635, -526, "WAql", -532) + a(-409, -385, -333, -467, "kJ#w") + I("&[K6", 763, 575, 632, 686) + x(-426, -471, "g9fb", -435) + I("%Dgv", 751, 791, 741, 736) + t("g9fb", 69) + t("ZTiW", -80) + x(-436, -427, "sjWh", -456) + g(214, 100, "g9fb") + g(83, 89, "42DN") + x(-525, -355, "g9fb", -422) + x(-579, -492, "pjaZ", -510) + x(-619, -605, "]$f7", -514) + I("69ra", 868, 1012, 795, 905) + g(-69, 36, "]$f7") + I("1VWn", 706, 652, 782, 770) + t("ZTiW", -32) + a(-525, -615, -543, -554, "ikfA") + g(118, 22, "(v$H") + g(174, 75, "TK]@") + g(258, 140, "(v$H") + g(279, 188, "WAql") + t("kbsK", -86) + g(100, 209, "pjaZ") + x(-405, -455, "1VWn", -489) + x(-589, -538, "P7Z3", -478) + g(105, 190, "3)H5") + g(-7, -10, "KiyP") + a(-347, -239, -292, -367, "y%LJ") + t("pfxF", -147) + x(-527, -364, "eTY&", -445) + g(177, 60, "1VWn") + I("K39q", 949, 863, 831, 873) + I("y%LJ", 1006, 954, 877, 890) + g(102, 127, "LyLF") + I("BStw", 803, 660, 831, 725) + I("W15X", 841, 812, 935, 885) + x(-591, -569, "kbsK", -484) + a(-527, -600, -476, -582, "QjBk") + I("NOd7", 793, 839, 783, 860) + g(173, 207, "42DN") + I("LDPE", 769, 883, 830, 816) + I("3)H5", 960, 920, 801, 886) + t(")omu", 34) + g(94, 176, "z8Qw") + a(-443, -518, -334, -508, "2PEj") + g(101, 18, "BStw") + g(169, 148, "CSDb") + g(3, 61, "Er3O") + t("2PEj", -91) + g(-15, 43, "TK]@") + I(")omu", 866, 894, 858, 817) + t("S3Z3", -148) + a(-401, -458, -399, -287, "2PEj") + x(-492, -331, "(v$H", -443) + t("&[K6", -102) + g(108, -6, "hrz%") + I("86U$", 919, 912, 798, 838) + t("3)H5", -114) + a(-557, -620, -475, -591, "86U$") + g(-9, 93, "pjaZ") + g(196, 107, "eTY&") + I("6P$S", 652, 768, 659, 742) + I("kbsK", 786, 751, 688, 775) + g(-37, 77, "NOd7") + g(231, 200, "hSe1") + t("kbsK", -23) + g(-2, 108, "&[K6") + g(98, -12, "a75Z") + t("(v$H", -21) + I("g9fb", 864, 702, 814, 772) + t("zZ5R", -120) + x(-652, -597, "iN*K", -562) + x(-512, -654, "a75Z", -628) + a(-428, -546, -523, -426, "K39q") + x(-552, -368, "F%Om", -485) + t("S3Z3", -112) + g(106, 154, "pfxF") + t("a75Z", -59) + I("LyLF", 583, 788, 622, 700) + x(-560, -558, "ZTiW", -457) + I("o@Fu", 829, 867, 904, 801) + x(-570, -510, "a75Z", -593) + I("TK]@", 736, 570, 729, 678) + g(89, 113, "cIfh") + x(-611, -535, "T5(G", -571) + a(-566, -601, -504, -528, "hSe1") + I("kJ#w", 961, 896, 757, 844) + g(-56, -14, "WAql") + g(106, 92, "sjWh") + x(-542, -723, "hSe1", -609) + g(53, 159, "iN*K") + x(-563, -544, "ZTiW", -584) + g(104, 47, "CSDb") + a(-504, -559, -528, -533, "Er3O") + t("TK]@", -124) + I("1VWn", 820, 698, 820, 807) + t("86U$", -25) + I("TK]@", 582, 617, 648, 696) + x(-635, -691, "g9fb", -599) + I("T5(G", 903, 854, 716, 822) + a(-565, -565, -658, -504, "hSe1") + g(-4, 83, "1VWn") + x(-688, -556, "pjaZ", -644) + g(98, 13, "zZ5R") + t("B^B#", -159) + I("K39q", 924, 969, 917, 852) + I("zZ5R", 898, 894, 905, 800) + x(-352, -498, "Mkv8", -426) + g(21, 62, "P7Z3") + t("hSe1", -62) + x(-713, -562, "42DN", -617) + g(42, -19, "13%Q") + x(-562, -455, "y%LJ", -451) + x(-415, -506, "WAql", -511) + t("a75Z", -76) + I("S3Z3", 688, 782, 697, 756) + g(258, 201, "eTY&") + t("kJ#w", -119) + a(-461, -569, -441, -499, "69ra") + x(-500, -517, "eTY&", -455) + a(-478, -584, -540, -510, "]$f7") + I("W15X", 805, 658, 803, 758) + g(65, 102, "86U$") + x(-374, -513, "hSe1", -447) + g(273, 198, "CSDb") + I("P7Z3", 771, 718, 667, 682) + a(-400, -431, -429, -473, "69ra") + x(-561, -531, "6P$S", -576) + a(-429, -467, -521, -330, ")omu") + a(-484, -483, -410, -422, "K39q") + a(-361, -281, -305, -472, "kbsK") + x(-471, -426, "pfxF", -504) + t("ikfA", -142) + t("pfxF", -66) + a(-412, -455, -333, -353, "CSDb") + g(-82, 7, "86U$") + x(-418, -624, "1VWn", -537) + x(-625, -494, "CSDb", -611) + a(-508, -480, -448, -499, "z8Qw") + x(-624, -453, "2PEj", -529) + I("6P$S", 806, 785, 849, 829) + a(-537, -583, -589, -563, "1VWn") + t("%Dgv", -73) + t("ikfA", 72) + g(181, 174, "pfxF") + x(-407, -404, "kbsK", -432) + a(-543, -634, -547, -492, "%Dgv") + g(189, 87, "QjBk") + a(-532, -446, -594, -549, "LyLF") + x(-544, -456, "BStw", -540) + g(39, 41, "eTY&") + a(-372, -281, -335, -491, "sjWh") + x(-496, -486, "cIfh", -463) + x(-348, -541, "1VWn", -425) + g(265, 208, "2PEj") + x(-421, -512, "LyLF", -534) + x(-578, -558, "F%Om", -542) + a(-499, -592, -510, -540, "S3Z3") + t("6P$S", 16) + t(")omu", 22) + I("T5(G", 849, 838, 807, 875) + a(-542, -437, -559, -645, "WAql") + x(-644, -460, "LDPE", -527) + x(-448, -516, "K39q", -437) + a(-403, -433, -381, -446, "T5(G") + t("86U$", -10) + a(-383, -477, -436, -498, "KiyP") + g(6, 55, "ZTiW") + a(-512, -406, -397, -620, "S3Z3") + t("%Dgv", -117) + t("QF2e", -106) + I("Mkv8", 694, 682, 864, 795) + x(-642, -443, "pjaZ", -555) + t("cIfh", -3) + t("sjWh", -145) + a(-455, -445, -386, -503, "BStw") + t("&[K6", 23) + a(-530, -462, -584, -582, "kbsK") + g(99, 72, "pjaZ") + t("(v$H", 20), i = window[t("%Dgv", -146)](o);
  function t(C, r, E, B, Q) {
    return cA(r - -493, C);
  }
  const e = window[g(183, 128, "kbsK")](i), A = cn(e), n = {};
  function g(C, r, E, B, Q) {
    return cA(r - -349, E);
  }
  function a(C, r, E, B, Q) {
    return cA(C - -907, Q);
  }
  function x(C, r, E, B, Q) {
    return cA(B - -977, E);
  }
  n[a(-341, -432, -236, -290, "13%Q")] = Nx, n[a(-438, -392, -353, -466, "%Dgv")] = Mc;
  function I(C, r, E, B, Q) {
    return cA(Q - 342, C);
  }
  return window[a(-396, -428, -499, -333, "iN*K") + "o"][x(-304, -470, "z8Qw", -423) + "e"][a(-422, -510, -314, -388, "&[K6") + x(-344, -365, "6P$S", -448)](t("hSe1", -130), A, n, !0, [I("ZTiW", 840, 665, 675, 747) + "pt"]);
}
function Wo() {
  const o = ["WRJcQSkKW6RdRW", "e8kXW4eqW4e", "W4Lmfc5P", "e8k3W7pdLHO", "W69MW5XOdG", "vZbTtwe", "WRSqa1eN", "kCkSfSkJkW", "WOBcVhqjW48", "rWzHo8kP", "WO/dTmorW5ddGa", "lmk4nSkttG", "WQtdOXhcHW", "W5uTW5e8W4C", "WQFcTYFdO8krA8kMtLBdVcq", "W7jtl0Od", "WQf4gKFdLG", "W7uToMjf", "lG1ob8oD", "mCoNkcddMa", "W7mPW7St", "oJHrCSoW", "pZ3dRNdcIa", "dKOhb3u", "W5mQhfWU", "iSkkB8kEkq", "s8kCnmoUsW", "imk0W7VcKtC", "W6NdT8kxW6JdQq", "WPpcPGjYWOJdKg/dISom", "W4FcImkkWOf3", "WPZcRreEW7C", "WPHKEu0d", "pY1Tw0y", "pCkeCqzeWRFdVW", "WQZcICk5vtC", "W5W2W4fcW7y", "W4j8xInwBd3dKSoTW4b8", "W7yEoMfk", "h8k4pSo1tq", "W7yeeZXE", "WOZcHSkxy8oP", "cmooWQ4QqW", "amoxWOSjFW", "y8kOd8klW4pdKmkfgSoCW5zJqW", "WO/cL8k9C8oL", "W4eefetdUq", "h3SrdIi", "W7bqpY9w", "lCkdnmkHbq", "W6VdRdTpWPm", "vmoutG5d", "W6ldLCkOW4Lc", "wsxdR2VcUG", "zSkuzGrH", "a8oDWRzJAG", "WPfgld5Q", "AdzfEx0", "nW9+c8oQ", "W5tdN8otWRpdIG", "iLSABmkPWQVdQYhcHHX9Bq", "WRxcMmosnmkO", "W5RcMCkyWPZdPtegiq", "W5rxWRPceG", "WQvYnXWN", "rJBcNI3cHG", "W4fJmstdIq", "mmodW6ZdLSoX", "D1fPk8ke", "WORdQmoDW4pdSW", "jMngbSoK", "fSoCdJxdOW", "W77cRSkaW4O", "WR1IjCo3zq", "iX/dVgVcQq", "aqdcSW3dNa", "br07xrK", "W69XkMi5", "WQ0Bxr4j", "WRlcQ8owWR/cRSo3pmkDWQpdISoTuSot", "Dqbgl8o4", "WQT3mrLyWRub", "dSkovCk9ga", "aqBdKwpcMa", "fCknn8og", "WOZcT8kXySkM", "CCkaW5ZcPJW", "emkkcmkMnG", "WQmFWQa8W74", "W5GxW7C3W7m", "W6i8fxTj", "WRRdHSkIWRldHq", "WQPHjCodtq", "FshdVYZdOq", "FGfXvha", "WQpcLM8VW5O", "sGxcJrZdGG", "qevmk8kW", "W4RcRmkzqmkc", "W5JdG39TWRm", "d8kdlmkFdW", "WPVdLmoRWRtdHa", "jmkNnXpdJ3FdMCkQWR5yWOlcJ8oS", "WP/dUSk6WPpdRq", "W4BdMwS2WO8", "WQhcJ8kbf8kN", "W7/cIfnjWOi", "WQuFbv0/", "WOzScMBdPW", "W7hdON3cTW", "W63dMNVcM8kw", "WPddPavhWRWLWQe6", "W4HqWPxcQhpdVmk5", "WO/dNCo/W53dTG", "WPf/WQtcOuu", "EWX9yCoE", "tmoMuh3cQa", "WOidW7lcPCo1", "WPZdK1lcQqu", "rCofW7FdTCkT", "f8oIW64ffq", "W7HCzSottW", "WPfHxSoDqG", "zCosBCoTWQK", "W5BdK8owW4ZcQW", "A8oxz8kfWRS", "W4PXjKFdLa", "WQ3dTG3cJq", "WQP2oWmf", "WRHRWOtcUmol", "c8k9p8onsG", "WP1TBdRdHa", "A8k0sJjI", "WPyObISs", "FCo6u0RcGa", "W7j0wxb7s8kYdf10pa", "smk4aSoUvW", "W4WYWPvwdG", "n8oDp3ldIq", "b1ldU1JcHHfQpSoNzc8", "W4xdRvTTW7a", "l8k/omosWO7dUePc", "fmkeW54AW6O", "WRTeF8oU", "WQddQZJcPYe", "vLDCaSoY", "W6SdifCV", "rLFdVg3dHW", "WQzYBmotEG", "FCkItrRcOa", "WQNcKNqNW7C", "W71lovyc", "FCoUWQ/dKNRcUmoAeCkmEsK", "e8krW6OqW7W", "WQ7cHSklv8ov", "bmochapdLG", "WQBdKcFcOc0", "WQiBWQCJW4e", "WR7cT8khD8or", "DCkEcSkNhW", "ssqBW4dcIG", "sSojamoyWQS", "WPX+oxpdNa", "bvhdMtJdHa", "W5GtW4dcLSon", "WPWHg1GM", "WPvmwqOMFCoaW7ZdNNO2", "EuRcUxZcSW", "W7BcJSoGeJtdGYBdM8k5", "DCk2W6NcSHS", "rHZcRIZdSa", "W47dL8kgWRxdGq", "r8oMuhRcLW", "W4HyWRL0ga", "WQtdIvdcNWy", "tSoqmmkeWRK", "W6j2dKHg", "sCoylSoiwCk+WPxdPq", "WRhcImozcCkK", "EvXHcmkK", "W6BcJCkRW6jU", "W5NcQmklW6LJ", "k8kVkmk9bq", "W4DWrr0E", "W6fyW550bG", "W7XSWO9QlW", "lr8zfre", "WQalW6qNW64", "CSomhmoqW5e", "WQZcONiwW4S", "W4vVEX1e", "aSkvW6mBCG", "W4VdKmoPe8oDhSkzn8oKcSoJWRrG", "W5XxW5Lpaa", "tSoKaSoIWRa", "nCkRl0vV", "lmoJW5BcRrS", "W5GwW5FcMCoC", "AmkelWCM", "pfOIorGCEmoZW6b6pSkzvq", "WP3dTdVcUY0", "WOVdH8oNW5hcNa", "WPRdRSoKW4ldVq", "pbddSuFcTa", "zSouug7cKq", "ANtcUexcJq", "WPNcVSo6f8kZ", "W4vWoulcQG", "WORcJ2awWRG", "WQCDdwuG", "WOhcLSkzr8k8", "WQrIimoDua", "WOxcIvKQW4K", "W7yKW5PaW7a", "WQ4dW6hcOSkO", "WPtcJSkOkYi", "AIODW6NcIW", "gMRdV13cNG", "W7FdG142WP0", "WP7cVWrtWOa8WRy", "WQBdLwviW68", "WPCAhI0v", "WR3dKCoMW5FcNa", "v8oNbGtdTq", "WPFcMmosnSkg", "FGXfeSo4", "W7tdRcLnWP8", "WR9aWQtcOfO", "omk8pSkVdG", "WRpcUmoJt8kq", "WPKPp39C", "d8kPp8oLDa", "qhFdPt3dMq", "pa9iwfC", "W7X7bZJdVq", "W7GbAd/cU8kLBCoGWQhcGIe+eq", "AWJcUGddQa"];
  return Wo = function() {
    return o;
  }, Wo();
}
function cA(o, i) {
  const t = Wo();
  return cA = function(e, A) {
    e = e - (6253 * -1 + 826 * 7 + 801);
    let n = t[e];
    if (cA.NdLBYw === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      cA.QMtmdq = C, o = arguments, cA.NdLBYw = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (cA.IzkGlW === void 0 && (cA.IzkGlW = !0), n = cA.QMtmdq(n, A), o[x] = n), n;
  }, cA(o, i);
}
async function cs(o) {
  const i = await Cs(), t = {};
  t[e(174, "86U$", 223, 202)] = Nx;
  function e(A, n, g, a, x) {
    return cA(a - -339, n);
  }
  return window[e(180, "o@Fu", 226, 166) + "o"][e(112, "LyLF", 290, 189) + "e"][e(157, "W15X", 138, 145) + "pt"](t, i, o);
}
function Mo() {
  const o = ["vCkKounFhY7cSSoygG", "W7jkWRK9BSkTeLTTs3O", "W5SDW5uVtXRdSsrjvSoT", "wXnNWQ4ZWRbEW40", "W7LgWRS+BCkyd3Hixgq", "tqZcSc3dIrNdMZ/dS2xcSrTQ", "aSomWRhdJx/dGCoAvmkTzmoN", "krZdS13dJ8k9bCoevCk4W75t", "bSktW5rheW", "AHmUDmoUp8k1ar3cOa", "wH8jW7TVWOvYW53cIYtcUW", "iSomW4O7nMpdPSonWRipWP8", "lbldT1tcLSobi8oXAmkD", "WPldJmk0eCkzdmoyd8oG", "WROWW5VdImkOgatcGCkAW5m", "lbVdT1hdJ8k5o8opCSkxW5XR", "x8obWPanrWD2t8kGWRtcGh0", "v8kHpZb5fXVcTSoX", "qcpdTvxdRaRcOehdKW", "CCoqWQmTBSkUW53cGW", "iCkpnmkxWReHway", "AmorWRiKW7FdISomW4FdOW", "BXlcQJRdUKBcVga", "WQldVLmGyGe9DcKZemkKfW", "WRK9WRhcSmkkaalcLa", "d8o0Ca", "W6q4u8kiW7DPW5pcKW"];
  return Mo = function() {
    return o;
  }, Mo();
}
(function(o, i) {
  const t = o();
  function e(x, I, C, r, E) {
    return UA(E - -239, x);
  }
  function A(x, I, C, r, E) {
    return UA(E - 155, I);
  }
  function n(x, I, C, r, E) {
    return UA(I - 185, C);
  }
  function g(x, I, C, r, E) {
    return UA(C - 61, r);
  }
  function a(x, I, C, r, E) {
    return UA(r - -506, C);
  }
  for (; ; )
    try {
      if (-parseInt(e("Q6AO", -97, -88, -96, -99)) / 1 * (-parseInt(e("5eYS", -102, -112, -105, -108)) / 2) + parseInt(g(186, 179, 185, "!1OF", 191)) / 3 * (parseInt(n(312, 318, "@VK^", 321, 321)) / 4) + -parseInt(g(179, 182, 186, "49Dg", 178)) / 5 * (-parseInt(a(-368, -386, "IyEC", -378, -382)) / 6) + -parseInt(A(306, "(Ywx", 310, 285, 296)) / 7 + parseInt(n(310, 321, "SSog", 323, 313)) / 8 * (parseInt(A(290, "BBa&", 294, 290, 285)) / 9) + -parseInt(A(311, "!1OF", 309, 300, 303)) / 10 * (parseInt(n(334, 323, "SHz&", 310, 316)) / 11) + -parseInt(A(297, "Q6AO", 280, 295, 292)) / 12 * (-parseInt(a(-380, -375, "c279", -384, -379)) / 13) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mo, 485411 + 74715 * 13 + -925034);
function UA(o, i) {
  const t = Mo();
  return UA = function(e, A) {
    e = e - (15510 + -1 * 15388);
    let n = t[e];
    if (UA.GIDUhI === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      UA.ZBmuVV = C, o = arguments, UA.GIDUhI = !0;
    }
    const a = t[1 * -467 + -6151 + 6618], x = e + a, I = o[x];
    return I ? n = I : (UA.zoEklY === void 0 && (UA.zoEklY = !0), n = UA.ZBmuVV(n, A), o[x] = n), n;
  }, UA(o, i);
}
async function Bs(o) {
  const { iv: i, key: t, message: e } = await wB(o), A = await cs(t), n = {};
  function g(a, x, I, C, r) {
    return UA(a - 658, x);
  }
  return n[g(792, "SSog")] = A, n.iv = i, n[g(802, "49Dg") + "ge"] = e, n;
}
(function(o, i) {
  function t(x, I, C, r, E) {
    return BA(C - -463, E);
  }
  const e = o();
  function A(x, I, C, r, E) {
    return BA(x - -430, C);
  }
  function n(x, I, C, r, E) {
    return BA(I - -349, C);
  }
  function g(x, I, C, r, E) {
    return BA(E - -405, I);
  }
  function a(x, I, C, r, E) {
    return BA(r - -143, E);
  }
  for (; ; )
    try {
      if (-parseInt(n(-134, -122, "tfz4", -131, -124)) / 1 + parseInt(A(-218, -225, "Aa&h", -228, -216)) / 2 + parseInt(n(-146, -143, "Yl@&", -137, -146)) / 3 * (-parseInt(g(-178, "#8@O", -180, -188, -186)) / 4) + parseInt(t(-260, -254, -252, -255, "]9[e")) / 5 * (parseInt(t(-236, -248, -250, -261, "szy]")) / 6) + parseInt(a(75, 63, 87, 77, "UKAQ")) / 7 + -parseInt(n(-105, -119, "pPth", -131, -123)) / 8 * (parseInt(t(-267, -255, -255, -241, "Gbmx")) / 9) + parseInt(g(-178, "69Lh", -168, -163, -177)) / 10 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(vo, 152885);
function BA(o, i) {
  const t = vo();
  return BA = function(e, A) {
    e = e - 204;
    let n = t[e];
    if (BA.LuVXAt === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      BA.jwQdBR = C, o = arguments, BA.LuVXAt = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (BA.OZAstW === void 0 && (BA.OZAstW = !0), n = BA.jwQdBR(n, A), o[x] = n), n;
  }, BA(o, i);
}
async function ss(o) {
  function i(a, x, I, C, r) {
    return BA(x - 808, C);
  }
  function t(a, x, I, C, r) {
    return BA(I - -88, a);
  }
  function e(a, x, I, C, r) {
    return BA(a - -752, I);
  }
  const A = await window[e(-542, -557, "pPth") + "o"][e(-531, -536, "zytj") + "e"][g("Gbmx", 594, 589, 581, 583) + "t"](t("vg1K", 155, 143), o);
  function n(a, x, I, C, r) {
    return BA(a - 515, C);
  }
  function g(a, x, I, C, r) {
    return BA(r - 366, a);
  }
  return Array[n(738, 745, 739, "yLDc")](new Uint8Array(A))[e(-538, -546, "^Ymu")]((a) => a[n(733, 721, 734, "yLDc") + i(1044, 1033, 1032, "]0AB")](-1997 * 2 + 1 * 890 + 3120)[n(749, 739, 742, "D[m7") + t("vcZe", 143, 141)](23 * -121 + 8042 + 1 * -5257, "0"))[g("2v)W", 592, 574, 576, 581)]("");
}
function vo() {
  const o = ["WOfDrmom", "tZ3cRCoQWQ7cMI3cHmkVmYHR", "WRzaW5q4hW", "wvxcOCkXlq", "smomW6dcQColWRHUuW", "g1RdO8oVx002kdRdI8ofhG", "C8oKoHfq", "mSkfcCk3W73cJxuyuf5Caa", "s0JcNCkO", "W6JdSmkwW67dSZSlrHvCArm", "W4pcPXG", "WRBcKMP0W6dcVWupW7K", "W5RcVXZdH8kyB8k+WP3dOW/dT8oy", "mSkfcSk2W7NcJwGwxMvSbq", "DbFdUa", "WOeiW5LakmocbabP", "F8oaWQbRBW", "WQzxWPZcKq1vW4FcK8kgW6W6W5nY", "hW3dISo0duvqhmkTW4W", "fSohWQf1WQi", "c8kXcCoLCCkuBa", "W5JcSrFdICkyp8kHWRBdPY/dRa", "WR3cKguuWP3cKtCAW7WdW5K", "ifFdJNiSWO8gWP8", "W6aEWOTSpIH1y8k7bG", "rfpdHmkfj8kiW4tdPCkkxGq5", "W5PpWPzNfG", "pSoTimoWha7dMdNcNWVdTh4d", "ESosW63cV31QW7xcT8kJW4qgW4m", "BdxcS1HkvXu", "WOxdLmol"];
  return vo = function() {
    return o;
  }, vo();
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return te(x - -968, I);
  }
  function e(a, x, I, C, r) {
    return te(C - 223, a);
  }
  var A = o();
  function n(a, x, I, C, r) {
    return te(a - 747, C);
  }
  for (; ; )
    try {
      var g = -parseInt(n(1140, 1138, 1142, "8DLK", 1145)) / 1 + -parseInt(n(1139, 1143, 1134, "WFqz", 1142)) / 2 + parseInt(e("WLp5", 620, 627, 621, 620)) / 3 + -parseInt(e("FAA6", 628, 632, 626, 623)) / 4 + parseInt(e("w)]#", 608, 616, 612, 610)) / 5 + -parseInt(t(-569, -569, "QZPf", -573, -571)) / 6 * (parseInt(n(1137, 1139, 1141, "w7&W", 1133)) / 7) + parseInt(n(1141, 1140, 1148, "zObU", 1148)) / 8;
      if (g === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Lo, -1173918 + -29823 * -67);
function Lo() {
  var o = ["xCkil3yVW67cTW", "nCkyycRcSSo8WO5ZmWW1W4DK", "W4qDsLmzgmoCWRLGzrlcNmkA", "mmkyysZcUmo+WO1+erySW5D4", "ndhdJtf0W7pdHLfqCt5Oea", "CCoEW4VdQrRcVCogECkiWRm5WRJdMa", "WQJdKYZdQSoieY9Vp11NbGK", "r8owlSkGWRtcV8k/ymk0yCoSWPZcVM0", "WRyoeSogW6pdGCkOvCoqbbGKW5y", "y8k8hJ7cKg15", "WRelfSoeW6ldJCkPwSomfsi7W7S", "WRmQxaddLSkqoSooWPjKWRZcQSkF", "CSoyW47dQrpcV8kgvmkPWQejWRW", "w8oBAIX2WQ/dKmo3WPeEemkboCkI", "xmosBcz3WQNcLmkPWPGkhCkM", "CmoEW4JdPHlcSCocCSkhWRugWPJdTa"];
  return Lo = function() {
    return o;
  }, Lo();
}
function te(o, i) {
  var t = Lo();
  return te = function(e, A) {
    e = e - (-97 * 32 + -1172 * 7 + 17 * 688);
    var n = t[e];
    if (te.BojsEs === void 0) {
      var g = function(r) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", Q = "", d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var p = 0, k = B.length; p < k; p++)
          Q += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      }, a = function(r, E) {
        var B = [], Q = 0, d, u = "";
        r = g(r);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (var f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      te.ygwYKu = a, o = arguments, te.BojsEs = !0;
    }
    var x = t[1740 * 2 + -7528 + -46 * -88], I = e + x, C = o[I];
    return C ? n = C : (te.SpUJui === void 0 && (te.SpUJui = !0), n = te.ygwYKu(n, A), o[I] = n), n;
  }, te(o, i);
}
async function yI(o) {
  const { Image: i } = Nt, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const n = i.verify(A);
  if (n) throw Error(n);
  const g = {};
  return g.bytes = e, i.create(g);
}
async function Qs(o) {
  const { v4: { Metadata: i } } = Nt, t = { ...o };
  t.platform = Nt.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function Es(o) {
  const { Content: i } = Nt, { iv: t, key: e, message: A } = await Bs(o), n = { token: new Uint8Array(e), iv: t, schemaVersion: Rc, bytes: new Uint8Array(A) }, g = i.verify(n);
  if (g) throw Error(g);
  const a = i.create(n);
  return i.encode(a).finish();
}
function ds(o) {
  const { Blob: i } = Nt.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var c0, qo;
class DI {
  constructor(i, t, e, A, n, g, a, x, I, C, r, E) {
    P(this, c0, !0);
    P(this, qo, Date.now());
    b(this, "fpsOfAllImages", new vx(1 * 2928 + -499 * 1 + -1 * 2399));
    this.cameraService = i, this.imageCropSettings = t, this.imageProcessor = e, this.createProtoMessage = A, this.onCaptureCallback = n, this.onDetectionCallback = g, this.checkToInstructionCodeMap = a, this.fallbackInstruction = x, this.samVersion = I, this.instructionEscalation = C, this.sessionToken = r, this.analytics = E;
  }
  async run() {
    for (; w(this, c0); )
      await this.iterate();
    return this;
  }
  stop() {
    T(this, c0, !1);
  }
  async trackCaptureProcess(i, t) {
    var a;
    const e = Date.now(), A = Qo(this.fpsOfAllImages), n = {};
    n.width = t.width, n.height = t.height;
    const g = { detection: i, imageResolution: n, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - w(this, qo), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await qB() };
    o0() && Object.assign(g, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !a0() }), (a = this.analytics) == null || a.trackCaptureProcess(g);
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: St(Qo(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const n = A, g = await Tc(t), a = await Zc(t, this.imageCropSettings), x = await this.cameraService.getCameraProperties(), I = { ...x, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await yI(a) }, C = {};
    C.sessionToken = this.sessionToken, C.web = I;
    const r = C, E = await this.createProtoMessage(g, r), B = {};
    B.detection = e, B.imageResolution = n;
    const Q = {};
    Q.image = g, Q.data = B;
    const d = Q;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = E, u.webMetadata = I, u.candidateSelectionImages = i, this.onCaptureCallback(u);
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
    await An(Math.max(Hg.max - i, Hg.min));
  }
}
c0 = new WeakMap(), qo = new WeakMap();
class ls extends DI {
  constructor(t, ...e) {
    super(...e);
    b(this, "candidateSelectionTime", -164 * 41 + 479 + 5 * 1249);
    b(this, "candidatesSelectionFramesCount", -130 * 10 + 1536 + -1 * 236);
    b(this, "isInCandidateSelection", !1);
    b(this, "lastImage", null);
    b(this, "bestImage", null);
    b(this, "candidateSelectionImages", []);
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
    this.candidateSelectionTime === -229 * 23 + -9535 + 14802 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= hi.minFrames ? t > hi.minDuration : t > hi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new L("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), n = St((-7818 + -1 * 5714 + 14532) / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = e.image.width, g.height = e.image.height;
    const a = g, x = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), I = {};
    I.isNewDetectionValid = t.isValid, I.newInvalidInstruction = x[47 * 2 + -43 * -166 + -7232 * 1];
    const C = this.getInstructionCode(I), r = this.collectAndEscalate(C), E = {};
    return E.detection = t.detection, E.instructionCode = C, E.isEscalated = r, E.invalidValidators = x, E.isInCandidateSelection = this.isInCandidateSelection, { processedImage: E, detectionTime: A, fps: n, avgFps: St(Qo(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class mI {
  constructor() {
    b(this, "cameraService");
    b(this, "imageCropSettings");
    b(this, "imageProcessor");
    b(this, "instructionEscalation");
    b(this, "createProtoMessage");
    b(this, "onCaptureCallback");
    b(this, "onDetectionCallback");
    b(this, "checkToInstructionCodeMap");
    b(this, "fallbackInstruction");
    b(this, "samVersion");
    b(this, "sessionToken");
    b(this, "analytics");
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
    return this.cameraService = void (-4435 + -4435 * -1), this.imageCropSettings = void (-45 * 191 + -6628 + 1171 * 13), this.imageProcessor = void (-4 * 381 + -4569 * -2 + -2538 * 3), this.instructionEscalation = void 0, this.createProtoMessage = void (1 * 9103 + 80 * -34 + -6383), this.onCaptureCallback = void (-3200 + 160 * 20), this.onDetectionCallback = void (-1933 * 1 + -9268 * -1 + 1 * -7335), this.checkToInstructionCodeMap = void (1222 * 3 + -2 * 2941 + 2216), this.fallbackInstruction = void (-2 * 571 + -1213 + -1 * -2355), this.samVersion = void (-110 * -10 + 6077 + -1 * 7177), this.sessionToken = void (-4 * 1403 + 103 * 75 + 2113 * -1), this.analytics = void (-3 * -624 + -16 * -122 + -3824), this;
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
class us extends mI {
  constructor() {
    super(...arguments);
    b(this, "instructionCodeMap");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void (7004 + 7 * -414 + -4106), this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new L("instructionCodeMap is required");
  }
  build() {
    return this.validateDependencies(), new ls(this.instructionCodeMap, this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
var We, Ve;
class fs extends DI {
  constructor(...t) {
    super(...t);
    P(this, We, void (769 + -1 * -6995 + -6 * 1294));
    P(this, Ve);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(li).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    T(this, Ve, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && T(this, We, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Og.REQUEST_CAPTURE, w(this, Ve));
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
    return w(this, We) ? w(this, We) === li.FIRST_FRAME ? !0 : w(this, We) === li.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), T(this, We, void (-5733 + 218 * -12 + -121 * -69));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), n = St((-2 * 2909 + -8331 + 15149 * 1) / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = t.image.width, g.height = t.image.height;
    const a = g, x = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), I = this.getInstructionCode(x[-1 * 2599 + 7272 + 1 * -4673]), C = this.collectAndEscalate(I), r = {};
    return r.detection = e.detection, r.instructionCode = I, r.invalidValidators = x, r.isInCandidateSelection = !1, r.isEscalated = C, { processedImage: r, detectionTime: A, fps: n, avgFps: St(Qo(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), w(this, Ve) && document.removeEventListener(Og.REQUEST_CAPTURE, w(this, Ve));
  }
}
We = new WeakMap(), Ve = new WeakMap();
class hs extends mI {
  build() {
    return this.validateDependencies(), new fs(this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
class ps {
  static create(i, t) {
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: n, createProtoMessage: g, fallbackInstruction: a, imageCropSettings: x, imageProcessor: I, instructionCodeMap: C, instructionEscalation: r, onCaptureCallback: E, onDetectionCallback: B, samVersion: Q, sessionToken: d } = t;
    switch (i) {
      case zi.AUTO_CAPTURE:
        return new us().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setInstructionCodeMap(C).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(Q).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      case zi.WAIT_FOR_REQUEST:
        return new hs().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(Q).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      default:
        throw new L("Invalid detection type: " + i);
    }
  }
}
function ys({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = dB(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, sB(t.CAMERA_PROPS_CHANGED, A), eA(() => () => {
    x0.getInstance().restart();
  }, []);
  const n = {};
  return n.shouldCameraMirror = e, n;
}
function Ds(o) {
  eA(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function ms({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: n, imageCropSettings: g, instructionCodeMap: a, onCapture: x, onDetection: I, sessionToken: C }) {
  Ds(() => {
    t && t.destroy();
  });
  const r = zA(!1), { appState: E, handleAppStateChange: B, isCameraReady: Q } = Ue(), { sunfish: d } = m0(), { analytics: u } = kx(), { cameraResolution: c, cameraService: f, onCameraResolutionChange: p, videoRef: k } = yB(), F = {};
  F.cameraResolution = c, F.cameraService = f, F.customEvent = A;
  const { shouldCameraMirror: v } = ys(F), S = _x(void (-23 * -51 + -8862 * -1 + -10035)), X = (f == null ? void 0 : f["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && Q, vA = De(($) => {
    B(QA.WAITING), x($);
  }, [x, B]), iA = De(($, Lt) => {
    p($.resolution), S.value = $, I($, Lt);
  }, [I, S, p]);
  eA(() => {
    !r.current && X && (r.current = !0, B(QA.RUNNING));
  }, [X, B]), eA(() => {
    if (E !== QA.RUNNING || !X) return;
    if (!f || !t) throw new L("Cannot start detection");
    t.imageProcessor.reset();
    const $ = {};
    $.analytics = u, $.cameraService = f, $.imageProcessor = t.imageProcessor, $.fallbackInstruction = n, $.instructionCodeMap = a, $.checkToInstructionCodeMap = i, $.sessionToken = C, $.samVersion = t.samVersion, $.createProtoMessage = e, $.onCaptureCallback = vA, $.onDetectionCallback = iA, $.instructionEscalation = t.instructionEscalation, $.imageCropSettings = g;
    const Lt = ps.create(o, $);
    return t.runDetectionLoop(Lt), () => {
      t.stopDetectionLoop();
    };
  }, [E, X, t, f, vA, iA, C, S, u, e, a, i, n, o, g]);
  const TA = {};
  return TA.videoRef = k, TA.cameraResolution = c, TA.detectionDetails = S, TA.shouldCameraMirror = v, TA;
}
const ws = () => typeof document < "u" && document.hasFocus();
function bs(o = {}) {
  const i = zA(o), t = zA(ws()), [e, A] = WA(t.current);
  eA(() => {
    i.current = o;
  }), eA(() => {
    function g(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, r, E, B;
        !t.current && ((r = (C = i.current).onFocus) == null || r.call(C), (B = (E = i.current).onChange) == null || B.call(E, !0)), g(!0);
      });
    }
    function x() {
      Promise.resolve().then(() => {
        var C, r, E, B;
        t.current && ((r = (C = i.current).onBlur) == null || r.call(C), (B = (E = i.current).onChange) == null || B.call(E, !1)), g(!1);
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
function ks(o = {}) {
  const { appState: i } = Ue();
  bs({ onBlur: () => {
    var t;
    i === QA.WAITING || i === Kg.DONE || (t = o.onBlur) == null || t.call(o);
  }, onFocus: () => {
    var t;
    i === QA.WAITING || i === Kg.DONE || (t = o.onFocus) == null || t.call(o);
  } });
}
const zn = nt(void 0);
zn.displayName = "CommonThresholdsContext";
function Gs() {
  const o = me(zn);
  if (!o)
    throw new Error("Missing provider for ThresholdsContext");
  return o;
}
function Ss() {
  return oi() ? Zg.MOBILE : Zg.DESKTOP;
}
function Ns({
  cameraOptionsThresholds: o,
  children: i,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, n] = WA(Ss()), g = MA(() => ({ thresholds: t(o, e[A]), thresholdsPreset: A, setThresholdsPreset: n }), [o, A, n, e, t]);
  return /* @__PURE__ */ D(zn.Provider, { value: g, children: i });
}
const oo = {};
oo.timeout = 4e3, oo.threshold = 0.7, oo.instructions = ["brightness_too_high", "brightness_too_low", "document_too_far", "sharpness_too_low"];
const bi = oo, Ne = {};
Ne.confidenceThreshold = 0.9, Ne.sharpnessThreshold = 0.65, Ne.brightnessLowThreshold = 0.25, Ne.brightnessHighThreshold = 0.9, Ne.hotspotsScoreThreshold = 8e-3, Ne.sizeSmallThreshold = 0.43, Ne.outOfBoundsThreshold = 0.03;
const Fe = {};
Fe.confidenceThreshold = 0.8, Fe.sharpnessThreshold = 0.5, Fe.brightnessLowThreshold = 0.25, Fe.brightnessHighThreshold = 0.9, Fe.hotspotsScoreThreshold = 0.1, Fe.sizeSmallThreshold = 0.43, Fe.outOfBoundsThreshold = 0.03;
const fn = {};
fn.MOBILE = Ne, fn.DESKTOP = Fe;
const Fs = fn;
function Rs(o, i) {
  return {
    confidenceThreshold: (o == null ? void 0 : o.confidenceThreshold) ?? i.confidenceThreshold,
    sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? i.sharpnessThreshold,
    brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? i.brightnessLowThreshold,
    brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? i.brightnessHighThreshold,
    hotspotsScoreThreshold: (o == null ? void 0 : o.hotspotsScoreThreshold) ?? i.hotspotsScoreThreshold,
    sizeSmallThreshold: (o == null ? void 0 : o.sizeSmallThreshold) ?? i.sizeSmallThreshold,
    outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? i.outOfBoundsThreshold
  };
}
function Ws({
  cameraOptionsThresholds: o,
  children: i
}) {
  return /* @__PURE__ */ D(
    Ns,
    {
      cameraOptionsThresholds: o,
      thresholdsPresetMapper: Rs,
      thresholdsPresets: Fs,
      children: i
    }
  );
}
function wI() {
  return Gs();
}
function Ms({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = wI(), { redfin: n } = m0(), g = zA(null);
  if (eA(() => {
    if (!(g != null && g.current))
      return;
    g.current.width = o.width, g.current.height = o.height, Qc(g.current);
    const c = lo(o), f = Ux(
      o,
      e.outOfBoundsThreshold,
      c
    ), p = Sx(o);
    i.value && (_c({
      canvas: g.current,
      polygon: i.value.processedImage.detection,
      color: "red"
    }), pi(g.current, c, "lime"), pi(g.current, f, "yellow"), pi(g.current, p, "blue"));
  }, [o, i.value, e.outOfBoundsThreshold]), !i.value)
    return null;
  const {
    avgFps: a,
    detectionTime: x,
    fps: I,
    processedImage: { detection: C, instructionCode: r, invalidValidators: E, isEscalated: B },
    resolution: Q,
    samVersion: d
  } = i.value, u = {
    Confidence: C.confidence,
    "Smallest edge": C.smallestEdge,
    Brightness: C.brightness,
    Hotspots: C.hotspots,
    Sharpness: C.sharpness,
    "Detection time": x,
    FPS: I,
    "Avg FPS": a,
    Tier: n,
    Instruction: r,
    Resolution: Q,
    "Escalated instruction": B,
    "Component version": "7.3.2",
    "Thresholds preset": A
  };
  return d && (u["SAM version"] = d), E.length > 0 && (u["Invalid validators"] = E), /* @__PURE__ */ D(
    cc,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: u,
      isImageMirror: t
    }
  );
}
function vs({ isPassport: o, isRounded: i, ...t }) {
  if (i)
    return /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: "2%" });
  if (o) {
    const e = "4%", A = `calc(${t.height} / 2)`;
    return /* @__PURE__ */ D(HA, { children: [
      /* @__PURE__ */ D("rect", { fill: "#000", height: A, rx: "1%", width: t.width, x: t.x, y: t.y }),
      /* @__PURE__ */ D(
        "rect",
        {
          fill: "#000",
          height: A,
          rx: "0",
          width: t.width,
          x: t.x,
          y: `calc(${t.y} + ${e})`
        }
      ),
      /* @__PURE__ */ D(
        "rect",
        {
          fill: "#000",
          height: A,
          rx: "2%",
          width: t.width,
          x: t.x,
          y: `calc(${t.y} + ${A})`
        }
      )
    ] });
  }
  return /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: "0%" });
}
function Ls(o, i) {
  const [t, e] = WA(!1), A = () => e((a) => !a), n = "" + t;
  Rt(() => {
    function a() {
      if (!o.current) return;
      const r = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, r.observe(o.current, E), r;
    }
    function x() {
      var B;
      if (!((B = o.current) != null && B["parentElement"])) return;
      const r = new MutationObserver((Q) => {
        Q.find((u) => {
          for (const c of u.removedNodes)
            if (c !== (i == null ? void 0 : i.current) && c === o.current)
              return !0;
        }) && A(), Q.forEach((u) => {
          u.addedNodes.forEach((c) => {
            var f;
            c !== (i == null ? void 0 : i.current) && ((f = c.parentElement) == null || f.removeChild(c));
          });
        });
      }), E = {};
      return E.childList = !0, r.observe(o.current.parentElement, E), r;
    }
    const I = a(), C = x();
    return () => {
      C == null || C.disconnect(), I == null || I.disconnect();
    };
  });
  const g = {};
  return g.key = n, g;
}
const Js = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Us({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = zA(null), { key: n } = Ls(A, t);
  return /* @__PURE__ */ D("div", { ref: A, style: Js, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${e} ${i}`, children: [
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
function Ys({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = Dc(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, g = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    Us,
    {
      cutOut: o || /* @__PURE__ */ D(vs, { height: A, width: n, x: g, y: a }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function Os({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = m0(), { appState: n, freemiumOverlayState: g } = Ue(), a = zA(null), x = g !== fo.HIDDEN && A !== on.Higher && o, I = g === fo.VISIBLE, C = o && n === QA.RUNNING;
  return /* @__PURE__ */ D(HA, { children: [
    x && /* @__PURE__ */ D(
      Ys,
      {
        fullOverlay: I,
        ignoreElement: a,
        resolution: o
      }
    ),
    i,
    C && /* @__PURE__ */ D("div", { ref: a, children: /* @__PURE__ */ D(
      Ms,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const Ks = (o, i) => {
  if (Hc()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    x0.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function Hs(o, i) {
  const { DocumentContent: t } = Nt.v4, e = await yI(o), A = await Qs(i), n = {};
  n.image = e, n.metadata = A;
  const g = n, a = t.verify(g);
  if (a) throw Error(a);
  const x = t.create(g), I = {};
  return I.documentContent = x, ds(I);
}
async function Ts(o, i) {
  const t = await Hs(o, i);
  return Es(t);
}
function Ps({ controller: o }) {
  const { captureMode: i, onPhotoTaken: t, sessionToken: e } = Ox(), A = De(({ candidateSelectionImages: a, imageData: x, protoMessage: I }) => {
    Ks(Yx.DOCUMENT, a), t(x, I);
  }, [t]), n = De(({ processedImage: a }) => {
    const x = {};
    x.code = a.instructionCode, x.isEscalated = a.isEscalated, Kx(re.INSTRUCTION_CHANGED, x), o && cB(re.DETECTED_DOCUMENT_CHANGED, a.detection, o.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [o]), g = {};
  return g.captureMode = i, g.controller = o, g.createProtoMessage = Ts, g.onCapture = A, g.onDetection = n, g.sessionToken = e, g.customEvent = re, g.fallbackInstruction = de.DOCUMENT_NOT_PRESENT, g.instructionCodeMap = de, g.checkToInstructionCodeMap = gc, g.imageCropSettings = Wc, ms(g);
}
var ae;
class qs {
  constructor(i, t) {
    P(this, ae);
    this.instructionCodeCollector = i, this.config = t, T(this, ae, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return w(this, ae);
  }
  canEscalate(i) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(i) ? !1 : t.filter((A) => A === i).length / t.length >= this.config.threshold;
  }
  collect(i) {
    this.instructionCodeCollector.pushWithTimestamp(i);
  }
  isEscalated(i) {
    return w(this, ae).get(i) ?? !1;
  }
  escalate() {
    for (const [i, t] of w(this, ae).entries())
      !t && this.canEscalate(i) && (this.config.onEscalate(i), w(this, ae).set(i, !0));
  }
  reset() {
    w(this, ae).forEach((i, t) => {
      w(this, ae).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
ae = new WeakMap();
var B0, Me, ut;
class js extends Array {
  constructor(t) {
    super();
    P(this, B0, -4918 * 2 + 6 * 1291 + 2090);
    P(this, Me, []);
    P(this, ut, !1);
    T(this, B0, t);
  }
  clearAfterTimeout() {
    if (w(this, Me).length === -744 * 4 + -7731 + 10707) return;
    const t = Date.now(), e = w(this, Me).findLastIndex((A) => t - A > w(this, B0));
    e !== -(67 * -83 + 1 * 4019 + -1 * -1543) && (T(this, ut, !0), this.splice(-1377 + -2722 * 3 + 9543, e + (5520 + -7681 * -1 + -4 * 3300)), w(this, Me).splice(1 * -6943 + 1072 + 5871, e + (-685 + -315 * -22 + -6244)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), w(this, Me).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return w(this, ut);
  }
  clear() {
    this.splice(8695 + 8695 * -1), w(this, Me).splice(-89 * -58 + -4322 * 2 + 3482 * 1), T(this, ut, !1);
  }
}
B0 = new WeakMap(), Me = new WeakMap(), ut = new WeakMap();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const bI = Symbol("Comlink.proxy"), Zs = Symbol("Comlink.endpoint"), Vs = Symbol("Comlink.releaseProxy"), ki = Symbol("Comlink.finalizer"), io = Symbol("Comlink.thrown"), kI = (o) => typeof o == "object" && o !== null || typeof o == "function", _s = {
  canHandle: (o) => kI(o) && o[bI],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return SI(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), FI(o);
  }
}, Xs = {
  canHandle: (o) => kI(o) && io in o,
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
}, GI = /* @__PURE__ */ new Map([
  ["proxy", _s],
  ["throw", Xs]
]);
function zs(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function SI(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!zs(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: g, path: a } = Object.assign({ path: [] }, A.data), x = (A.data.argumentList || []).map(qe);
    let I;
    try {
      const C = a.slice(0, -1).reduce((E, B) => E[B], o), r = a.reduce((E, B) => E[B], o);
      switch (g) {
        case "GET":
          I = r;
          break;
        case "SET":
          C[a.slice(-1)[0]] = qe(A.data.value), I = !0;
          break;
        case "APPLY":
          I = r.apply(C, x);
          break;
        case "CONSTRUCT":
          {
            const E = new r(...x);
            I = iQ(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: B } = new MessageChannel();
            SI(o, B), I = oQ(E, [E]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [io]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [io]: 0 })).then((C) => {
      const [r, E] = Yo(C);
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), E), g === "RELEASE" && (i.removeEventListener("message", e), NI(i), ki in o && typeof o[ki] == "function" && o[ki]());
    }).catch((C) => {
      const [r, E] = Yo({
        value: new TypeError("Unserializable return value"),
        [io]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), E);
    });
  }), i.start && i.start();
}
function $s(o) {
  return o.constructor.name === "MessagePort";
}
function NI(o) {
  $s(o) && o.close();
}
function FI(o, i) {
  return hn(o, [], i);
}
function U0(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function RI(o) {
  return Qt(o, {
    type: "RELEASE"
  }).then(() => {
    NI(o);
  });
}
const Jo = /* @__PURE__ */ new WeakMap(), Uo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (Jo.get(o) || 0) - 1;
  Jo.set(o, i), i === 0 && RI(o);
});
function AQ(o, i) {
  const t = (Jo.get(i) || 0) + 1;
  Jo.set(i, t), Uo && Uo.register(o, i, o);
}
function eQ(o) {
  Uo && Uo.unregister(o);
}
function hn(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(n, g) {
      if (U0(e), g === Vs)
        return () => {
          eQ(A), RI(o), e = !0;
        };
      if (g === "then") {
        if (i.length === 0)
          return { then: () => A };
        const a = Qt(o, {
          type: "GET",
          path: i.map((x) => x.toString())
        }).then(qe);
        return a.then.bind(a);
      }
      return hn(o, [...i, g]);
    },
    set(n, g, a) {
      U0(e);
      const [x, I] = Yo(a);
      return Qt(o, {
        type: "SET",
        path: [...i, g].map((C) => C.toString()),
        value: x
      }, I).then(qe);
    },
    apply(n, g, a) {
      U0(e);
      const x = i[i.length - 1];
      if (x === Zs)
        return Qt(o, {
          type: "ENDPOINT"
        }).then(qe);
      if (x === "bind")
        return hn(o, i.slice(0, -1));
      const [I, C] = Ca(a);
      return Qt(o, {
        type: "APPLY",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, C).then(qe);
    },
    construct(n, g) {
      U0(e);
      const [a, x] = Ca(g);
      return Qt(o, {
        type: "CONSTRUCT",
        path: i.map((I) => I.toString()),
        argumentList: a
      }, x).then(qe);
    }
  });
  return AQ(A, o), A;
}
function tQ(o) {
  return Array.prototype.concat.apply([], o);
}
function Ca(o) {
  const i = o.map(Yo);
  return [i.map((t) => t[0]), tQ(i.map((t) => t[1]))];
}
const WI = /* @__PURE__ */ new WeakMap();
function oQ(o, i) {
  return WI.set(o, i), o;
}
function iQ(o) {
  return Object.assign(o, { [bI]: !0 });
}
function Yo(o) {
  for (const [i, t] of GI)
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
    WI.get(o) || []
  ];
}
function qe(o) {
  switch (o.type) {
    case "HANDLER":
      return GI.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function Qt(o, i, t) {
  return new Promise((e) => {
    const A = nQ();
    o.addEventListener("message", function n(g) {
      !g.data || !g.data.id || g.data.id !== A || (o.removeEventListener("message", n), e(g.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function nQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const gQ = "SAM v1.44.6 for idcards";
class aQ {
  constructor(i, t, e, A, n) {
    b(this, "isDetectorInitialized", !1);
    b(this, "samVersion", null);
    b(this, "detection");
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
    return "" + t.replace(Fx, "") + i;
  }
}
class xQ {
  constructor() {
    b(this, "imageProcessor");
    b(this, "assetsDirectoryPath");
    b(this, "instructionEscalation");
    b(this, "compatibleSamVersion");
    b(this, "validationService");
    b(this, "detector");
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
    return this.imageProcessor = void (-9625 + 176 * 10 + 55 * 143), this.assetsDirectoryPath = void (-1 * 2243 + -24 * -59 + -1 * -827), this.instructionEscalation = void (1 * 8597 + -11 * 227 + 5 * -1220), this.compatibleSamVersion = void (1 * -7673 + -178 + 7851), this.detector = void 0, this.validationService = void (-43 * 47 + -3 * -2554 + -5641), this;
  }
}
class IQ {
  constructor() {
    b(this, "detectionRecord", []);
    b(this, "imagesWithTimestampForDuplicateDetection", new vx(Fc));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / Lc, A = e / (-1724 * 2 + 2883 + 567), n = i.length / (-3387 * -1 + 7569 + -5477 * 2), g = await ss(i.slice(n - A, n + A)), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: qc(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const n = Uc(i), g = this.validationService.validateDetectedObject(n, t);
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
class rQ {
  constructor() {
    b(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new L("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class MI extends aQ {
  constructor(t, e, A, n, g, a) {
    super(A, n, g, e, a);
    b(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Kx(re.INSTRUCTION_CHANGED, t, uc);
  }
}
class CQ extends xQ {
  build() {
    return this.validateDependencies(), new MI(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const cQ = "/dot-assets/document/dot-BgYT9b0k.js";
class BQ extends IQ {
  constructor(t, e) {
    super();
    b(this, "className", "DocumentImageProcessor");
    b(this, "detector");
    b(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = lo(t), A = Jx(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let n = await this.detector.detect(A.data, A.resolution);
    n = $c(n, lo(t)), n = AB(n, A.resolution);
    const g = {};
    return g.image = t, g.timestamp = e, g.imageData = A.data, g.detectedObject = n, this.processDetectedObject(g);
  }
}
var ft, _e, Xe;
class sQ {
  constructor(i) {
    P(this, ft);
    P(this, _e);
    P(this, Xe);
    T(this, ft, i), T(this, _e, /* @__PURE__ */ new Map());
  }
  validate() {
    w(this, ft).forEach((i) => {
      w(this, _e).set(i.name, i.evaluate());
    }), T(this, Xe, void (5806 + 495 * -1 + -1 * 5311));
  }
  isValid() {
    return w(this, Xe) === void (3348 + -6 * 558) && T(this, Xe, Array.from(w(this, _e).values()).every((i) => i)), w(this, Xe);
  }
  get result() {
    return w(this, _e);
  }
  get validators() {
    return w(this, ft);
  }
}
ft = new WeakMap(), _e = new WeakMap(), Xe = new WeakMap();
var s0, ze;
class at {
  constructor(i, t) {
    P(this, s0);
    P(this, ze);
    T(this, s0, i), T(this, ze, t);
  }
  get threshold() {
    return w(this, ze);
  }
  get name() {
    return w(this, s0);
  }
  isValueBelowThreshold(i) {
    return i < w(this, ze);
  }
  isValueAboveThreshold(i) {
    return i > w(this, ze);
  }
}
s0 = new WeakMap(), ze = new WeakMap();
const QQ = "isNotDim";
var Q0;
class EQ extends at {
  constructor(t, e) {
    super(QQ, t);
    P(this, Q0);
    T(this, Q0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Q0));
  }
}
Q0 = new WeakMap();
const dQ = "isNotSmall";
var E0;
class lQ extends at {
  constructor(t, e) {
    super(dQ, t);
    P(this, E0);
    T(this, E0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, E0));
  }
}
E0 = new WeakMap();
const uQ = "isNotBright";
var d0;
class fQ extends at {
  constructor(t, e) {
    super(uQ, t);
    P(this, d0);
    T(this, d0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, d0));
  }
}
d0 = new WeakMap();
const hQ = "isPresent";
var l0;
class pQ extends at {
  constructor(t, e) {
    super(hQ, t);
    P(this, l0);
    T(this, l0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, l0));
  }
}
l0 = new WeakMap();
const yQ = "isSharp";
var u0;
class DQ extends at {
  constructor(t, e) {
    super(yQ, t);
    P(this, u0);
    T(this, u0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, u0));
  }
}
u0 = new WeakMap();
var f0;
class mQ extends at {
  constructor(t, e) {
    super("noHotspots", t);
    P(this, f0);
    T(this, f0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, f0));
  }
}
f0 = new WeakMap();
const wQ = "isNotOutOfBounds";
var h0, ht;
class bQ extends at {
  constructor(t, e, A) {
    super(wQ, t);
    P(this, h0);
    P(this, ht);
    T(this, h0, e), T(this, ht, A);
  }
  evaluate() {
    const t = Ux(w(this, ht), this.threshold, lo(w(this, ht))), { bottomLeft: e, bottomRight: A, topLeft: n, topRight: g } = w(this, h0), a = {};
    return a.topLeft = n, a.topRight = g, a.bottomLeft = e, a.bottomRight = A, zc(a, t);
  }
}
h0 = new WeakMap(), ht = new WeakMap();
class kQ {
  static getDocumentValidationInstance(i, t, e) {
    return new sQ([new pQ(i.confidenceThreshold, t.confidence), new DQ(i.sharpnessThreshold, t.sharpness), new EQ(i.brightnessLowThreshold, t.brightness), new fQ(i.brightnessHighThreshold, t.brightness), new mQ(i.hotspotsScoreThreshold, t.hotspots), new bQ(i.outOfBoundsThreshold, t, e), new lQ(i.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class GQ extends rQ {
  constructor() {
    super(...arguments);
    b(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const A = kQ.getDocumentValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
const SQ = () => {
  const { handleError: o } = Ue(), { assetsDirectoryPath: i } = Ox(), { thresholds: t } = wI(), { analytics: e } = kx(), [A, n] = WA();
  eA(() => {
    (async () => {
      const x = MI.getWorkerPath(cQ, i), I = {};
      I.type = "module";
      const C = new Worker(new URL(x, import.meta.url), I), r = FI(C), E = await new r(), B = new GQ(), Q = new BQ(E, B), d = new qs(new js(bi.timeout), { threshold: bi.threshold, instructions: bi.instructions, onEscalate: (c) => {
        BB(re.INSTRUCTION_ESCALATED, c), e == null || e.trackEscalated(c);
      } }), u = new CQ().setDetector(E).setValidationService(B).setImageProcessor(Q).setAssetsDirectoryPath(i).setCompatibleSamVersion(gQ).setInstructionEscalation(d).build();
      try {
        await u.init(), n(u);
      } catch (c) {
        if (c instanceof Error) {
          o(L.fromError(c));
          return;
        }
      }
    })();
  }, [o, i, e]), eA(() => {
    A && A.setThresholds(t);
  }, [A, t]);
  const g = {};
  return g.controller = A, g;
}, NQ = () => {
  const { isCameraReady: o } = Ue(), { sunfish: i } = m0(), { controller: t } = SQ(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: n, videoRef: g } = Ps({ controller: t });
  return /* @__PURE__ */ D(HA, { children: /* @__PURE__ */ D(
    Os,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: n,
      children: /* @__PURE__ */ D(
        Ac,
        {
          ref: g,
          $isImageMirror: n,
          $isVisible: i && o,
          autoPlay: !0,
          id: fc,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, FQ = (o) => {
  const { handleAppStateChange: i, setIsCameraReady: t } = Ue();
  return ks({
    onBlur: () => {
      t(!1), i(QA.LOADING);
    },
    onFocus: async () => {
      t(!0), i(QA.RUNNING);
    }
  }), /* @__PURE__ */ D(xB, { cameraOptions: o, children: /* @__PURE__ */ D(Ws, { cameraOptionsThresholds: o.thresholds, children: /* @__PURE__ */ D(NQ, {}) }) });
};
function RQ({ children: o, ...i }) {
  const t = i.cameraFacing ?? oi() ? Co.REAR : Co.FRONT;
  return /* @__PURE__ */ D(LB, { cameraFacing: t, children: o });
}
function WQ({ initAppState: o, onError: i }) {
  const [t, e] = WA(o), [A, n] = WA(), [g, a] = WA(!1), x = zA(i);
  eA(() => {
    x.current = i;
  }, [i]);
  const I = {};
  return I.appState = t, I.setAppState = e, I.error = A, I.setError = n, I.isCameraReady = g, I.setIsCameraReady = a, I.onErrorRef = x, I;
}
function MQ({
  onError: o
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: n, setError: g, setIsCameraReady: a } = WQ({
    initAppState: QA.LOADING,
    onError: o
  }), x = PB(i), I = De(
    (r) => {
      Vg(re.STATE_CHANGED, { appState: QA.ERROR, error: r }), a(!1), A.current(r), g(r), n(QA.ERROR);
    },
    [A, g, n, a]
  ), C = De(
    (r) => {
      Vg(re.STATE_CHANGED, { appState: r }), n(r);
    },
    [n]
  );
  return {
    appState: i,
    freemiumOverlayState: x,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: C,
    handleError: I,
    error: t
  };
}
var $n = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))($n || {});
class vQ {
  constructor() {
    b(this, "appKey", "");
    b(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, n = "https://innovatrics.count.ly/i?", g = {};
    g.app_key = this.appKey, g.device_id = this.deviceId;
    const a = v0(g);
    try {
      await fetch("" + n + a + "&" + i, A);
    } catch (x) {
      console.error("Countly Error", x);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Rx() }, A = { organization: Wx(window.location.href) }, n = v0({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(n);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = v0(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const n = [A], g = v0({ events: JSON.stringify(n) });
    await this.countlyFetch(g);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent($n.AUTO_CAPTURE, i, t);
  }
}
const Ht = new vQ();
class LQ {
  constructor() {
    b(this, "countly", Ht);
  }
  createSegmentation(i) {
    return { appVersion: Rx(), ...i };
  }
  init(i) {
    if (Yc()) return;
    const t = YB();
    Ht.init(t, i);
  }
  endSession() {
    Ht.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    Ht.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    Ht.sendEvent($n.ESCALATION_TRIGGER, e);
  }
}
class JQ extends LQ {
  trackCaptureProcess({ averageFps: i, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: n, facingMode: g, imageResolution: a, instructionSet: x, isSystemStable: I, performanceCheckup: C }) {
    if (!A) return;
    const r = HB(e), E = this.createSegmentation({ hotspots: Kt(A.hotspots), brightness: Kt(A.brightness), confidence: Kt(A.confidence), sharpness: Kt(A.sharpness), smallestEdge: Kt(A.smallestEdge), camera: OB(n, g), imageResolution: a.width + "x" + a.height, averageFps: TB(i), captureTime: KB(r), instructionSet: x, optCheck: t, isSystemStable: I, performanceCheckup: C });
    this.countly.sendAutoCaptureEvent(E, r);
  }
}
const UQ = new JQ();
let Y;
const fe = new Array(2433 + 8 * -823 + 4279).fill(void 0);
fe.push(void 0, null, !0, !1);
function pn(o) {
  return fe[o];
}
let Ie = -401 * -23 + -209 * -8 + 2179 * -5, zt = null;
function no() {
  return (zt === null || zt.byteLength === 7232 + -16 * 452) && (zt = new Uint8Array(Y.memory.buffer)), zt;
}
const go = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, YQ = typeof go.encodeInto == "function" ? function(o, i) {
  return go.encodeInto(o, i);
} : function(o, i) {
  const t = go.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function r0(o, i, t) {
  if (t === void 0) {
    const a = go.encode(o), x = i(a.length, -4044 + -4045 * -1) >>> -8 * 1058 + 7178 + -1 * -1286;
    return no().subarray(x, x + a.length).set(a), Ie = a.length, x;
  }
  let e = o.length, A = i(e, 12431 + 2 * -6215) >>> -8946 + -13 * -263 + 5527;
  const n = no();
  let g = 0;
  for (; g < e; g++) {
    const a = o.charCodeAt(g);
    if (a > -1066 + 1 * -6481 + 7674) break;
    n[A + g] = a;
  }
  if (g !== e) {
    g !== 223 * 11 + -1858 * -5 + -11743 * 1 && (o = o.slice(g)), A = t(A, e, e = g + o.length * (26 * -31 + 7633 + -6824 * 1), -2 * 2923 + -3 * -983 + 7 * 414) >>> 9840 * 1 + 6475 + 1 * -16315;
    const a = no().subarray(A + g, A + e), x = YQ(o, a);
    g += x.written, A = t(A, e, g, -419 * 17 + 7605 + -1 * 481) >>> 1 * 1744 + 2 * -3606 + -4 * -1367;
  }
  return Ie = g, A;
}
function vI(o) {
  return o == null;
}
let $t = null;
function ge() {
  return ($t === null || $t.byteLength === -1 * 4241 + 671 + 170 * 21) && ($t = new Int32Array(Y.memory.buffer)), $t;
}
let n0 = fe.length;
function OQ(o) {
  o < 132 || (fe[o] = n0, n0 = o);
}
function LI(o) {
  const i = pn(o);
  return OQ(o), i;
}
const yn = {};
yn.ignoreBOM = !0, yn.fatal = !0;
const JI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", yn) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && JI.decode();
function Oo(o, i) {
  return o = o >>> 9613 + -4 * 1357 + -31 * 135, JI.decode(no().subarray(o, o + i));
}
function Dn(o) {
  n0 === fe.length && fe.push(fe.length + (-1879 * -3 + 478 * -10 + -856));
  const i = n0;
  return n0 = fe[i], fe[i] = o, i;
}
let A0 = null;
function UI() {
  return (A0 === null || A0.byteLength === 10489 + 617 * -17) && (A0 = new Uint32Array(Y.memory.buffer)), A0;
}
function ca(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = UI();
  for (let A = -5958 * 1 + 1714 * 2 + -23 * -110; A < o.length; A++)
    e[t / 4 + A] = Dn(o[A]);
  return Ie = o.length, t;
}
function Ba(o, i) {
  o = o >>> 5760 + 317 * -14 + 1322 * -1;
  const t = UI(), e = t.subarray(o / (-1 * -7197 + 76 * 31 + 9 * -1061), o / (1 * 9939 + 73 * -73 + -1 * 4606) + i), A = [];
  for (let n = 3 * -1367 + 1646 + 2455; n < e.length; n++)
    A.push(LI(e[n]));
  return A;
}
function KQ(o, i) {
  const t = r0(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), e = Ie, A = r0(i, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Ie, g = Y.is_mobile_supported(t, e, A, n);
  return Ag.__wrap(g);
}
const mn = {};
mn.register = () => {
}, mn.unregister = () => {
};
const sa = typeof FinalizationRegistry > "u" ? mn : new FinalizationRegistry((o) => Y.__wbg_licensevalidationresult_free(o >>> -951 * 1 + -23 * -223 + -4178));
class Ag {
  static __wrap(i) {
    i = i >>> 7 * 1073 + -9260 + 1749;
    const t = Object.create(Ag.prototype);
    return t.__wbg_ptr = i, sa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -3101 + 5009 * 1 + -18 * 106, sa.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    Y.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, n) {
    var g = vI(t) ? 0 : r0(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), a = Ie;
    const x = ca(e, Y.__wbindgen_malloc), I = Ie, C = ca(A, Y.__wbindgen_malloc), r = Ie, E = r0(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), B = Ie, Q = Y.licensevalidationresult_new(i, g, a, x, I, C, r, E, B);
    return this.__wbg_ptr = Q >>> 1 * -5417 + -9181 + 14598, this;
  }
  get is_valid() {
    return Y.licensevalidationresult_is_valid(this.__wbg_ptr) !== 4295 + -201 * -41 + -8 * 1567;
  }
  get features_json() {
    try {
      const e = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = ge()[e / (-35 * -266 + -2964 + -6342) + (-2741 * 2 + -14 * -298 + -262 * -5)], t = ge()[e / (8 * -171 + 2 * -2543 + -3229 * -2) + (2 * -2783 + -6700 + -12267 * -1)];
      let A;
      return i !== 43 * 206 + 176 + -9034 && (A = Oo(i, t).slice(), Y.__wbindgen_free(i, t * (958 + -33 * 29), 4477 * -2 + -6971 * 1 + 2 * 7963)), A;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(3 * 433 + -8603 * -1 + -9886);
    }
  }
  get errors() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = ge()[A / (7046 + 14 * 698 + -1 * 16814) + (-5918 + -110 * 33 + -341 * -28)], t = ge()[A / (-3 * -2017 + -1 * -727 + -6774 * 1) + (-378 * 3 + 3984 + -2849)], e = Ba(i, t).slice();
      return Y.__wbindgen_free(i, t * (5 * -544 + 367 * 26 + -6818), 5457 + -113 * -83 + -618 * 24), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(-61 * 21 + 539 * -14 + 8843);
    }
  }
  get warnings() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = ge()[A / (-37 * -235 + -1 * 1153 + -7538) + (-1 * -7151 + -2034 + 119 * -43)], t = ge()[A / (41 * -228 + 32 * -56 + 2 * 5572) + 1], e = Ba(i, t).slice();
      return Y.__wbindgen_free(i, t * 4, -1 * -6619 + 1786 + -8401), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(4 * -276 + 1686 + 283 * -2);
    }
  }
  get customer() {
    let i, t;
    try {
      const n = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = ge()[n / (8431 + -54 * 1 + -8373) + (1829 + 3798 * -1 + 1969)], A = ge()[n / (-699 * 1 + 6099 + -5396) + (1 * -9385 + 2 * 2243 + -4 * -1225)];
      return i = e, t = A, Oo(e, A);
    } finally {
      Y.__wbindgen_add_to_stack_pointer(5 * -75 + -2 * -4538 + 5 * -1737), Y.__wbindgen_free(i, t, 1);
    }
  }
}
async function HQ(o, i) {
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
function TQ() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = pn(t), A = typeof e == "string" ? e : void 0;
    var n = vI(A) ? -4986 + 257 * -25 + 11411 : r0(A, Y.__wbindgen_malloc, Y.__wbindgen_realloc), g = Ie;
    ge()[i / (-10091 + 15 * 673) + (-19 * -329 + 7429 + -13679)] = g, ge()[i / (9576 + 26 * -294 + -1928) + (4452 * 1 + -1954 * -1 + 2 * -3203)] = n;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    LI(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = Oo(i, t);
    return Dn(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Dn(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return pn(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Oo(i, t));
  }, o;
}
function PQ(o, i) {
  return Y = o.exports, YI.__wbindgen_wasm_module = i, $t = null, A0 = null, zt = null, Y;
}
async function YI(o) {
  if (Y !== void 0) return Y;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2lzX3ZhbGlkAPYBJWxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2ZlYXR1cmVzX2pzb24AgwEebGljZW5zZXZhbGlkYXRpb25yZXN1bHRfZXJyb3JzAJ4BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X3dhcm5pbmdzAJ8BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2N1c3RvbWVyALEBE2lzX21vYmlsZV9zdXBwb3J0ZWQABxFfX3diaW5kZ2VuX21hbGxvYwDXARJfX3diaW5kZ2VuX3JlYWxsb2MA8QEfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgCvAg9fX3diaW5kZ2VuX2ZyZWUAqAIJjAIBAEEBC5IBmAIcnQKpAqsCmAKdAuYBqgKVAosCwwFdXPQBHqIBzwGfAvIBZj+zAnb1AZYC7AFFpgL9AdkB/AH9AfsBgwKCAvwB/AH+Af8BgAJYhQFpDqkCbWqTAvkBpgKBAqwC+gFjkgLAAokCigKNApQC4gGUAt8BVLACwAKMAsACsQKUAo8BwALmAegBbuMBngIx2wGyAllvpAE67wEmzgHwAcEBW8AC0gGxApQCrQJktwKEAvMBxwEqmgKnApsCjgGaAUc1Fo4CnAKlAoUCoAKgAoYCoQKhAocCogKiAo4CkAKjAqMCkQKkAqQCe9QB9wGIAt0BmwGWAZgBrgJluAJ/uQLaAaUBUboCCqjWCLsCkUQCD38FfiMAQbAJayIGJAAgAiAEIAMgBUkiCBshDCAEIAIgCBshDiADIAUgAyAFSxshCQJAAkACQAJAIAMgBSAIGyINQSFPBEACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDUGBAk8EQEEAIQggBkEANgKACCAGQQA2AqgIIAZBgAhqIgIgDCAMIA0gCUEDbiISQQFqIgogCiANSxsiD0EDdGoiEBBDIAZB+AhqIAJBMBC+AhogDSAPayICIAogAiAKSRshESAGQYAJaiELIAYoAvgIIRMCQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyIHRQ0AIAYoAoAJIRQDQCADIAUgBEEBcSIEGyECIAdBA3QgFCALIAQbakEIaykDAFBFBEAgAiEIDAILIAIEQCAGQfgIakEEQSggBBtqIAJBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALCyAGQTBqIAtBGGopAwA3AwAgBkEoaiALQRBqKQMANwMAIAZBIGogC0EIaikDADcDACAGIAspAwA3AxggBiAGKAKkCTYCPCAGIAU2AjggBiADNgIUIAYgEzYCECAGQQJBASAIGzoAQCAPIBFqIgcgDUsNAUEAIQIgBkEANgKACCAGQQA2AqgIIAZBgAhqIgMgECAQIBFBA3RqEEMgBkH4CGogA0EwEL4CGiAGQYAJaiEIIAYoAvgIIRACQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyILBEAgBigCgAkhEQNAIAMgBSAEQQFxIg8bIQQgC0EDdCARIAggDxtqQQhrKQMAQgBSDQIgBARAIAZB+AhqQQRBKCAPG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgsNAAsLQQAhBAsgBkHoAGogCEEYaiILKQMANwMAIAZB4ABqIAhBEGoiDykDADcDACAGQdgAaiAIQQhqKQMANwMAIAYgCCkDADcDUCAGIAYoAqQJNgJ0IAYgBTYCcCAGIAM2AkwgBiAQNgJIIAZBAkEBIAQbOgB4IAZBADYCgAggBkEANgKoCCAGQYAIaiIDIAwgB0EDdGogDCANQQN0ahBDIAZB+AhqIANBMBC+AhogBigC+AghDQJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgxFDQAgBigCgAkhEANAIAMgBSAEQQFxIgcbIQQgDEEDdCAQIAggBxtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAHG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgwNAAsLIAZBoAFqIAspAwA3AwAgBkGYAWogDykDADcDACAGQZABaiAIQQhqKQMANwMAIAYgCCkDADcDiAEgBiAGKAKkCTYCrAEgBiAFNgKoASAGIAM2AoQBIAYgDTYCgAEgBkECQQEgAhs6ALABIAkgEk0NAiAJIAprIgIgCiACIApJGyEMQQAhAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA4gCkEDdGoiDRBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCEPAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiB0UNACAGKAKACSEQA0AgAyAFIARBAXEiCxshBCAHQQN0IBAgCCALG2pBCGspAwBQRQRAIAQhAgwCCyAEBEAgBkH4CGpBBEEoIAsbaiAEQQFrNgIAIAYoAqAJIQUgBigC/AghAwsgAyAFIAVBBEsiBBsiBw0ACwsgBkHYAWogCEEYaikDADcDACAGQdABaiAIQRBqKQMANwMAIAZByAFqIAhBCGopAwA3AwAgBiAIKQMANwPAASAGIAYoAqQJNgLkASAGIAU2AuABIAYgAzYCvAEgBiAPNgK4ASAGQQJBASACGzoA6AEgCiAMaiIPIAlLDQNBACECIAZBADYCgAggBkEANgKoCCAGQYAIaiIDIA0gDSAMQQN0ahBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCENAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiBwRAIAYoAoAJIQsDQCADIAUgBEEBcSIMGyEEIAdBA3QgCyAIIAwbakEIaykDAEIAUg0CIAQEQCAGQfgIakEEQSggDBtqIARBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALC0EAIQQLIAZBkAJqIAhBGGopAwA3AwAgBkGIAmogCEEQaikDADcDACAGQYACaiAIQQhqKQMANwMAIAYgCCkDADcD+AEgBiAGKAKkCTYCnAIgBiAFNgKYAiAGIAM2AvQBIAYgDTYC8AFBASELIAZBAkEBIAQbOgCgAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA9BA3RqIA4gCUEDdGoQQyAGQfgIaiADQTAQvgIaIAZBgAlqIQkgBigC+AghDgJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgdFDQAgBigCgAkhDANAIAMgBSAEQQFxIggbIQQgB0EDdCAMIAkgCBtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAIG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgcNAAsLIAZByAJqIAlBGGopAwA3AwAgBkHAAmogCUEQaikDADcDACAGQbgCaiAJQQhqKQMANwMAIAYgCSkDADcDsAIgBiAGKAKkCTYC1AIgBiAFNgLQAiAGIAM2AqwCIAYgDjYCqAIgBkECQQEgAhs6ANgCIAZB4AJqIgIgBkEQaiAGQYABahAhIAZBmANqIgMgBkG4AWogBkGoAmoQISAGQdADaiACIAZByABqEB8gBkGIBGogAyAGQfABahAfAkAgBi0AQCICQQFGDQACQAJAAkAgBi0A6AEiC0EBaw4CAwEACyACDQFBAiELDAILQQIhCyACDQELQQAhCwsgBkH4CGoiAiAGKAI4IgVBBUkEfyAGQRhqBSAGKAIUIQUgBigCGAsgBSAGKALgASIDQQVJBH8gBkHAAWoFIAYoArwBIQMgBigCwAELIAMQcCAGQcAEaiALIAIQQkEBIQUCQCAGLQCwASICQQFGDQACQAJAAkAgBi0A2AIiBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAKoASIDQQVJBH8gBkGIAWoFIAYoAoQBIQMgBigCiAELIAMgBigC0AIiBEEFSQR/IAZBsAJqBSAGKAKsAiEEIAYoArACCyAEEHAgBkH4BGogBSACEEIgBkGACGoiAyAGQeACakE4EL4CGiACIAZByABqQTgQvgIaIAZBkAdqIAMgAhApIAMgBkGYA2pBOBC+AhogAiAGQfABakE4EL4CGiAGQcgHaiADIAIQKUEBIQUCQCAGLQDAByICQQFGDQACQAJAAkAgBi0A+AciBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAK4ByIDQQRNBH8gBkGYB2oFIAYoApQHIQMgBigCmAcLIAMgBigC8AciBEEETQR/IAZB0AdqBSAGKALMByEEIAYoAtAHCyAEEHAgBkGwBWogBSACEEIgBkGQB2oQjwIgBkHIB2oQjwJBASEFAkAgBi0AgAQiAkEBRg0AAkACQAJAIAYtALgEIgVBAWsOAgMBAAsgAg0BQQIhBQwCC0ECIQUgAg0BC0EAIQULIAZB+AhqIgIgBigC+AMiA0EETQR/IAZB2ANqBSAGKALUAyEDIAYoAtgDCyADIAYoArAEIgRBBE0EfyAGQZAEagUgBigCjAQhBCAGKAKQBAsgBBBwIAZB6AVqIAUgAhBCIAZBgAhqIgMgBkHQA2pBOBC+AhogAiAGQYABakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQMDQCAFIBUgBSkDACIVQgGGIhd8IhY3AwAgFiAXVK0gFUI/iHwhFSAFQQhqIQUgA0EIayIDDQALIBVQDQBBBCEDAn8gBigCoAkiBEEETQRAIAZBgAlqIQcgBAwBCyAGQfgIakEEciECIAYoAoAJIQcgBCEDIAYoAvwICyEFIAMgBUYEQCAGQfgIaiICEKABIAYoAvwIIQUgBigCgAkhByACQQRyIQILIAcgBUEDdGogFTcDACACIAIoAgBBAWo2AgALIAZBkAdqIgQgBkH4CGoiAkEwEL4CGiAGQYAIaiIDIAkgBBBCIAIgBkEQakE4EL4CGiAEIAMgAhAlIAMgBkGIBGpBOBC+AhogAiAGQagCakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQdgGaiIDIAZB+AhqIgJBMBC+AhogBkGACGoiBCAJIAMQQiACIAZBuAFqQTgQvgIaIAZByAdqIAQgAhAlQQEhBQJAIAYtAMAHIgJBAUYNAAJAAkACQCAGLQD4ByIFQQFrDgIDAQALIAINAUECIQUMAgtBAiEFIAINAQtBACEFCyAGQYAIaiIJIAYoArgHIgNBBE0EfyAGQZgHagUgBigClAchAyAGKAKYBwsgAyAGKALwByIEQQRNBH8gBkHQB2oFIAYoAswHIQQgBigC0AcLIAQQcCAGQfgIaiIDIAUgCRBCIAZBkAdqIgQQjwIgBkHIB2oiBRCPAiAJIAMgBkGwBWoiCBAtIAYtALAIIQIgBSAJQTAQvgIaIAMgBUIDEE0gBCADQTAQvgIaIAZBoAZqIgcgAiAEEEIgAyAIQTgQvgIaIAkgAyAGQegFaiIJEC0gBi0AsAghAiAGQcgHaiAGQYAIakEwEL4CGiADIAVCAhBNIAZBkAdqIAZB+AhqQTAQvgIaIAZB2AZqIAIgBBBCIAMgCUE4EL4CGiAEIAMgBkHABGoQLSADIAdBOBC+AhogBi0AqAkiAkEBRgRAIAYtAMAHIQIgBigCuAciA0EETQR/IAZBmAdqBSAGKAKUByEDIAYoApgHCyEFIAZBADYCyAcgBkEANgLwByAGQcgHaiIEIAUgBSADQQN0ahBDIAZBgAhqIARBMBC+AhogBiACOgCwCAwLCwJAAkACQAJAIAYtAMAHIgNBAWsOAgABAgsgBkGACGogBkGgBmpBMBC+AhogBkG0CGogBkGsCWooAAA2AAAgBkECIAJrOgCwCCAGIAYoAKkJNgCxCAwOCyACRQ0BDAsLIAJFDQoLIAZBgAhqIgIgBkGgBmpBMBC+AhogBkHIB2oiBCACIAZBkAdqEBQgAiADIAQQQgwLCyAJIA1BAXYiCkkNAyAMIApBA3QiAmohECAGQfgIaiIDIAkgCmsiESANIAprIhJqQQFqIhMQfCAGQZAHaiADQTAQvgIaIAIgDmohFCAGQbgHaiEJIAYoArgHIgVBBE0EfyAGQZgHagUgBigClAchBSAGKAKYBwsgBSAQIBIgFCAREAYgBkGQB2pBBHIhCCAGQZgHaiEEIAYoApgHIQcDQCAEIQIgBigCuAciBSEDIAVBBUkiC0UEQCAGKAKUByEDIAchAgsCQCADRQ0AIANBA3QgAmpBCGspAwBCAFINACAJIQMgC0UEQCAGKAKUByEFIAghAwsgBUUNASADIAVBAWs2AgAMAQsLIAEgCkkNBCAEIQMgACAKQQN0aiIPIAEgCmsiCyAFQQVPBH8gBigClAchBSAHBSADCyAFEHggASANQX5xIgJJDQUgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAAgAkEDdGogASACayAFIAMQeCAJIQMgBigCuAciBUEFTwRAIAYoApQHIQUgCCEDCyAFBEAgA0EANgIACyAGQZAHaiATEEkgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAUgAyAMIAogDiAKEAYgBigCmAchBwNAIAQhAiAGKAK4ByIFIQMgBUEFSSINRQRAIAYoApQHIQMgByECCwJAIANFDQAgA0EDdCACakEIaykDAEIAUg0AIAkhAyANRQRAIAYoApQHIQUgCCEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBCEDIAAgASAFQQVPBH8gBigClAchBSAHBSADCyAFEHggBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIA8gCyAFIAMQeCAGQfgIaiICIBAgEiAMIAoQGyAGLQD4CCEAIAZByAdqIAZBgAlqIgFBMBC+AhogAiAUIBEgDiAKEBsgBi0A+AghAiAGQYAIaiABQTAQvgIaIABBAUYNBwJAAkACQCACQQFrDgIKAAELIAANAQwICyAADQcLIAkhAyAGKAK4ByIFQQVPBEAgBigClAchBSAIIQMLIAUEQCADQQA2AgALIAZBkAdqIBMQSSAEIQUgBigCuAciA0EFTwRAIAYoApgHIQUgBigClAchAwsgBSADIAYoAvAHIgBBBE0EfyAGQdAHagUgBigCzAchACAGKALQBwsgACAGKAKoCCICQQRNBH8gBkGICGoFIAYoAoQIIQIgBigCiAgLIAIQBiAGKAKYByEBA0AgBCEAIAYoArgHIgUhAyAFQQVJIgJFBEAgBigClAchAyABIQALAkAgA0UNACADQQN0IABqQQhrKQMAQgBSDQAgCSEDIAJFBEAgBigClAchBSAIIQMLIAVFDQEgAyAFQQFrNgIADAELCyAPIAsgBUEFTwR/IAYoApQHIQUgAQUgBAsgBRBMDAcLIAcgDUGI9MAAELgBAAsgCiAJQZj0wAAQuAEACyAPIAlBqPTAABC4AQALQYmYwgBBI0HY88AAEN4BAAsgCiABQejzwAAQuQEACyACIAFB+PPAABC5AQALIA8gCyAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIAUgBigCqAgiA0EETQR/IAZBiAhqBSAGKAKECCEDIAYoAogICyADEAYLIAZBgAhqEI8CIAZByAdqEI8CIAZBkAdqEI8CDAgLAkACQAJAAkAgBigCuAciBUEETQR/IAZBmAdqBSAGKAKUByEFIAYoApgHCyAFIAYoAqAJIgRBBE0EfyAGQYAJagUgBigC/AghBCAGKAKACQsgBBCoAUH/AXEOAgECAAsgBkGACGoiAiAGQaAGakEwEL4CGiACIAZBkAdqEHUgBkHIB2oiBCACQTAQvgIaIAJBAiADayAEEEIMBAsgBkECNgLACCAGQgQ3ArgIIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAZBuAhqEDMgBkGACGoiAyACQTAQvgIaIANBBHIhAiAGQYgIaiEJIAZBqAhqIQggBigCiAghBwNAIAkhBCAGKAKoCCIFIQMgBUEFSSIORQRAIAchBCAGKAKECCEDCwJAIANFDQAgA0EDdCAEakEIaykDAEIAUg0AIAghAyAORQRAIAYoAoQIIQUgAiEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBkG4CGogBkGACGoiAkEwEL4CGiAGQoCAgIAgNwLwCCAGQYyswgA2AuwIIAZBADYCgAggBkEANgKoCCACIAZB7AhqEDMgBkHIB2ogAkEwEL4CGiAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIQQgBkG4CGogBRDQASAGKALgCCIDQQRNBH8gBkHACGoFIAYoArwIIQMgBigCwAgLIAMgBUcNBCAGQeAIaiEJIAQgBUEDdBC+AhogBkG4CGpBBHIhAiAGQcAIaiEIIAYoAsAIIQcDQCAIIQQgBigC4AgiBSEDIAVBBUkiDkUEQCAHIQQgBigCvAghAwsgA0UNAiADQQN0IARqQQhrKQMAQgBSDQIgCSEDIA5FBEAgBigCvAghBSACIQMLIAVFDQAgAyAFQQFrNgIADAALAAsgBkGACGoiAiAGQaAGakEwEL4CGiAGQcgHaiIEIAZBkAdqIAIQGiACIAMgBBBCDAILIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CCyAGLQCwCCECIAZByAdqIgMgBkGACGpBMBC+AhogBkH4CGoiBCADQgIQTSAGQbgIaiIFIARBMBC+AhogAyACIAUQQiAGKAKgBSIDQQRNBH8gBkGABWoFIAYoAvwEIQMgBigCgAULIQUgBi0AqAUhCSAGQQA2AoAIIAZBADYCqAggBkGACGoiAiAFIAUgA0EDdGoQQyAGQfgIaiACQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQYAIaiIDIAZB+AhqIgJBMBC+AhogAiAJIAMQQiAGQaAGaiAGQcgHaiACECkgAiAGQZAHaiICQTgQvgIaIAYtAIgHIgVBAUYEQCADIAJBOBC+AhoMBAsCQAJAAkACQAJAIAYtAKgJIgNBAWsOAgABAgsgBigCgAciBEEETQR/IAZB4AZqBSAGKALcBiEEIAYoAuAGCyEDIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAMgAyAEQQN0ahBDIAZBgAhqIAJBMBC+AhogBiAFOgCwCAwDCyAFRQ0BDAULIAVFDQQLAkACQAJAAkAgBigCoAkiBEEETQR/IAZBgAlqBSAGKAL8CCEEIAYoAoAJCyAEIAYoAoAHIgJBBE0EfyAGQeAGagUgBigC3AYhAiAGKALgBgsgAhCoAUH/AXEOAgECAAsgBkGACGoiAiAGQZAHakEwEL4CGiAGQcgHaiIDIAZB2AZqIAIQGiACIAUgAxBCDAcLIAZBAjYCwAggBkIENwK4CCAGQQA2AsgHIAZBADYC8AcgBkHIB2oiAiAGQbgIahAzIAZBgAhqIgMgAkEwEL4CGiADQQRyIQIgBkGICGohCSAGQagIaiEIIAYoAogIIQcDQCAJIQQgBigCqAgiBSEDIAVBBUkiDkUEQCAHIQQgBigChAghAwsCQCADRQ0AIANBA3QgBGpBCGspAwBCAFINACAIIQMgDkUEQCAGKAKECCEFIAIhAwsgBUUNASADIAVBAWs2AgAMAQsLIAZBuAhqIAZBgAhqIgJBMBC+AhogBkKAgICAIDcC8AggBkGMrMIANgLsCCAGQQA2AoAIIAZBADYCqAggAiAGQewIahAzIAZByAdqIAJBMBC+AhogBigC8AciBUEETQR/IAZB0AdqBSAGKALMByEFIAYoAtAHCyEEIAZBuAhqIAUQ0AEgBigC4AgiA0EETQR/IAZBwAhqBSAGKAK8CCEDIAYoAsAICyADIAVHDQQgBkHgCGohCSAEIAVBA3QQvgIaIAZBuAhqQQRyIQIgBkHACGohCCAGKALACCEHA0AgCCEEIAYoAuAIIgUhAyAFQQVJIg5FBEAgByEEIAYoArwIIQMLIANFDQIgA0EDdCAEakEIaykDAEIAUg0CIAkhAyAORQRAIAYoArwIIQUgAiEDCyAFRQ0AIAMgBUEBazYCAAwACwALIAZBgAhqIgIgBkGQB2pBMBC+AhogAiAGQdgGahB1IAZByAdqIgQgAkEwEL4CGiACIAMgBBBCDAULIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CDAMLIAMgBUH88cAAELsBAAsgAyAFQfzxwAAQuwEACyAGQYAIaiICIAZBkAdqQTAQvgIaIAZByAdqIgQgAiAGQdgGahAUIAIgAyAEEEILIAZB+AhqIgIgBkGACGoiAyAGQfgEahAtIAZBkAdqIAJBOBC+AhogAiAGQdgGaiIEQTgQvgIaIAMgAiAGQaAGahAtIAQgA0E4EL4CGiAAIAEgBigC6AQiBUEETQR/IAZByARqBSAGKALEBCEFIAYoAsgECyAFEHggBkH4CGoiAiAGQdgGakE4EL4CGiAGQYAIaiACIApBBnQQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZBkAdqQTgQvgIaIAIgAyAKQQd0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqIgIQjwIgBkH4CGoiAyAGQaAGakE4EL4CGiACIAMgCkHAAWwQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZB+ARqQTgQvgIaIAIgAyAKQQh0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqEI8CIAZBwARqEI8CDAELIA1FDQAgDCANQQN0aiEKIAFBA3QhAiAJQQN0IQgDQCABIAdJDQICQCAMKQMAIhhQDQAgCSABIAdrSw0EIAlFDQAgACEFIA4hAyAJIQRCACEVA0AgBiADKQMAQgAgGBCwASAFIBUgBSkDAHwiFiAGKQMAfCIZNwMAIBYgGVatIAZBCGopAwAgFSAWVq18fCEVIAVBCGohBSADQQhqIQMgBEEBayIEDQALIBVQDQAgCCEFA0AgAiAFRg0GIAAgBWoiAyAVIAMpAwB8IhY3AwAgBUEIaiEFIBcgFSAWVq18IRUgFUIAUg0ACwsgB0EBaiEHIAJBCGshAiAAQQhqIQAgDEEIaiIMIApHDQALCyAGQbAJaiQADwsgByABQcjzwAAQuQEAC0GJmMIAQSNBgPPAABDeAQALQZDzwABBJUG488AAENEBAAuxtQEDIH8IfgF8IwBBoANrIgUkACAFIAE2AsgBIAUgATYCxAEgBSAANgLAASAFQSBqIAVBwAFqIgAQxAEgBSgCICEbIAUoAiQhHCAFIAM2AsgBIAUgAzYCxAEgBSACNgLAASAFQRhqIAAQxAEgBSgCGCEdIAVBEGogBSgCHCIVEOABIAUoAhQhIyAFKAIQIB0gFRC+AiEZIAVB0AFqQgA3AgAgBUGAAToA2AEgBUKAgICAEDcCyAEgBSAcNgLEASAFIBs2AsABIAVB4ABqIAAQCQJAAkACfwJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAIAUtAGBBBkcEQCAFQfACaiAFQfAAaikDADcDACAFQegCaiAFQegAaikDADcDACAFIAUpA2A3A+ACAkAgBSgCyAEiASAFKALEASIDSQRAIAUoAsABIQIDQCABIAJqLQAAQQlrIgBBF0tBASAAdEGTgIAEcUVyDQIgAyABQQFqIgFHDQALIAUgAzYCyAELIAVB0AJqIAVB8AJqKQMANwMAIAUgBS8B4gI7AbACIAUgBSkD6AI3A8gCIAUtAOECIQAgBS0A4AIhAiAFKALkAiEBIAUoAtABBEAgBSgCzAEQIgsgAkEGRg0EIAVBQGsgBUHQAmopAwA3AwAgBSABNgI0IAUgBS8BsAI7ATIgBSAFKQPIAjcDOCAFIAA6ADEgBSACOgAwIAVBMGoiEyEMIwBBkAdrIgQkACAEQYAGaiIAQZzWwABBgAEQSyAEQeAGaiIIQZzXwABBBBBLIARBsAZqIABBMBC+AhogBCgCsAYhDQJAAkACQAJAAkACfyAEKALYBiIBQQVPBEAgBCgCtAYiAkUNAiAEKAK4BgwBCyABRQ0BIAEhAiAEQbgGagshACACQQZ0IAJBA3QgAGpBCGspAwB5p2tBgCBNDQBBCyEADAELIARB6AZqIgYhAiAEQYgHaigCACIHIQAgB0EFTwRAIAQoAugGIQIgBEHkBmooAgAhAAsgAARAIABBA3QhA0EBIQADQCAAQQFxRQRAQQ0hAAwDCyACKQMAICV8ISVBACEAIAJBCGohAiADQQhrIgMNAAsLIAYhAiAHIgNBBU8EQCAEQeQGaigCACEDIAQoAugGIQILAn8CQCABQQVPBEAgAiADIAQoArgGIAQoArQGEKgBQf8BcUECTw0BQQghAAwDC0EIIQAgAiADIARBuAZqIgIgARCoAUH/AXFBAkkNAiACDAELIAQoArQGIQEgBCgCuAYLQQghACABRQ0ALQAAQQFxRQ0AQQkhACAHQQVPBH8gBCgC6AYhBiAEQeQGaigCAAUgBwtFDQAgBi0AAEEBcUUNACAlQgJUBEBBDCEADAELICVCgICAgCBUDQFBDSEACyAEQbAGaiIBEI8CIAgQjwJBuLHCAC0AABpBPBAKIgJFDQEgAiAlNwIEIAIgADYCACACQQxqIARBmAJqQTAQvgIaIARCBDcCuAYgBEGY5cAANgK0BiAEIAI2ArAGIAFBoNfAABAuQbDXwAAQWiECDAILIAQoArQGIQIgBCkDuAYhJCAEQZgCaiIAIARBwAZqQdAAEL4CGiAEQcgBaiIBIABB0AAQvgIaIARB+ABqIgAgAUHQABC+AhogBCAkNwMgIARBKGogAEHQABC+AhogBCACNgIcIAQgDTYCGAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDEHA18AAQRIQcyIBBEAgAS0AAEEDRiIARQ0HIAEoAgRBACAAGyEKIARBsAZqIAFBDGooAgAiC0ECdiALQQNxQQBHakEDbBDMASAEKAK4BiEQIAQoArAGIRYgC0EHcSIAIQMgAA4GAQIDBAUCBgtBuLHCAC0AABpBARAKIgBFDQ4gAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQaTYwAAQLiECDA0LQQghAwwEC0IBISUgC0UNCiAKIAtBAWsiAGotAAAiAUE9Rg0KIAFBkNrAAGotAABB/wFHDQogAa1CCIYgAK1CIIaEISUMCgtBCiEDDAILQQshAwwBC0EMIQMLIAtBA3YgAEEAR2ohEUEAIQEgCyADayIAQQAgACALTRsiDUEgSQRAQQAhAwwGCyANQSBrIQJBACEDQQAhCAJAA0AgCEFgRg0DIAhBIGoiASALSw0EIANBGmoiACAQSw0FAkACQCAIIApqIg4tAAAiB0GQ2sAAajEAACIpQv8BUQ0AIA5BAWotAAAiB0GQ2sAAajEAACIoQv8BUQRAIAhBAXIhCAwBCyAOQQJqLQAAIgdBkNrAAGoxAAAiJUL/AVEEQCAIQQJyIQgMAQsgDkEDai0AACIHQZDawABqMQAAIipC/wFRBEAgCEEDciEIDAELIA5BBGotAAAiB0GQ2sAAajEAACImQv8BUQRAIAhBBHIhCAwBCyAOQQVqLQAAIgdBkNrAAGoxAAAiJEL/AVEEQCAIQQVyIQgMAQsgDkEGai0AACIHQZDawABqMQAAIitC/wFRBEAgCEEGciEIDAELIA5BB2otAAAiB0GQ2sAAajEAACInQv8BUg0BIAhBB3IhCAsgB61CCIYgCK1CIIaEISUMCQsgAyAWaiIAIChCNIYgKUI6hoQiKCAlQi6GhCIlICpCKIaEICZCIoaEIiYgJEIchoQiJCArQhaGhCAnQhCGhCInQoD+A4NCKIYgJ0KAgPwHg0IYhiAnQoCAgPgPg0IIhoSEICRCCIhCgICA+A+DICZCGIhCgID8B4OEICVCKIhCgP4DgyAoQjiIhISENwAAQQghByAOQQhqLQAAIgZBkNrAAGoxAAAiKUL/AVENBkEJIQcgDkEJai0AACIGQZDawABqMQAAIihC/wFRDQZBCiEHIA5BCmotAAAiBkGQ2sAAajEAACIlQv8BUQ0GQQshByAOQQtqLQAAIgZBkNrAAGoxAAAiKkL/AVENBkEMIQcgDkEMai0AACIGQZDawABqMQAAIiZC/wFRDQZBDSEHIA5BDWotAAAiBkGQ2sAAajEAACIkQv8BUQ0GQQ4hByAOQQ5qLQAAIgZBkNrAAGoxAAAiK0L/AVENBkEPIQcgDkEPai0AACIGQZDawABqMQAAIidC/wFRDQYgAEEGaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEQIQcCQCAOQRBqLQAAIgZBkNrAAGoxAAAiKUL/AVENAEERIQcgDkERai0AACIGQZDawABqMQAAIihC/wFRDQBBEiEHIA5BEmotAAAiBkGQ2sAAajEAACIlQv8BUQ0AQRMhByAOQRNqLQAAIgZBkNrAAGoxAAAiKkL/AVENAEEUIQcgDkEUai0AACIGQZDawABqMQAAIiZC/wFRDQBBFSEHIA5BFWotAAAiBkGQ2sAAajEAACIkQv8BUQ0AQRYhByAOQRZqLQAAIgZBkNrAAGoxAAAiK0L/AVENAEEXIQcgDkEXai0AACIGQZDawABqMQAAIidC/wFRDQAgAEEMaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEYIQcgDkEYai0AACIGQZDawABqMQAAIilC/wFRDQJBGSEHIA5BGWotAAAiBkGQ2sAAajEAACIoQv8BUQ0CQRohByAOQRpqLQAAIgZBkNrAAGoxAAAiJUL/AVENAkEbIQcgDkEbai0AACIGQZDawABqMQAAIipC/wFRDQJBHCEHIA5BHGotAAAiBkGQ2sAAajEAACImQv8BUQ0CQR0hByAOQR1qLQAAIgZBkNrAAGoxAAAiJEL/AVENAkEeIQcgDkEeai0AACIGQZDawABqMQAAIitC/wFRDQJBHyEHIA5BH2otAAAiBkGQ2sAAajEAACInQv8BUQ0CIABBEmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEEayERIANBGGohAyABIQggASACSw0IDAELCyAGrUIIhiAHIAhyrUIghoQhJQwHCyAGrUIIhiAHIAhyrUIghoQhJQwGC0G4scIALQAAGkEBEAoiAEUNByAAQQE6AAAgBEIENwK4BiAEQbDlwAA2ArQGIAQgADYCsAYgBEGwBmpBpNjAABAuIQIMBgtBYEEAQeSOwAAQugEACyABIAtB5I7AABC4AQALIAAgEEH0jsAAELgBAAsgBq1CCIYgByAIcq1CIIaEISUMAQsCQAJAIA1BCEkNACABIA1BCGsiAE8NAAJAAkACQAJAAkADQCABQQhqIQYgAUF4Rg0CIAYgC0sNAyADQQhqIQIgA0F3Sw0EIAIgEEsNBSABIApqIgctAAAiAkGQ2sAAajEAACIpQv8BUQ0BIAdBAWotAAAiAkGQ2sAAajEAACIoQv8BUQRAIAFBAXIhAQwCCyAHQQJqLQAAIgJBkNrAAGoxAAAiJUL/AVEEQCABQQJyIQEMAgsgB0EDai0AACICQZDawABqMQAAIipC/wFRBEAgAUEDciEBDAILIAdBBGotAAAiAkGQ2sAAajEAACImQv8BUQRAIAFBBHIhAQwCCyAHQQVqLQAAIgJBkNrAAGoxAAAiJEL/AVEEQCABQQVyIQEMAgsgB0EGai0AACICQZDawABqMQAAIitC/wFRBEAgAUEGciEBDAILIAdBB2otAAAiAkGQ2sAAajEAACInQv8BUgRAIAMgFmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEBayERIANBBmohAyAAIAYiAU0NCAwBCwsgAUEHciEBCyABrUIghiACrUIIhoQhJQwGC0F4IAZBhI/AABC6AQALIAYgC0GEj8AAELgBAAsgAyACQZSPwAAQugEACyACIBBBlI/AABC4AQALIAEhBgsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBFBAkkEQCADIQcMAQsgEUEBayEIQQAgBmshEQNAIAYgC0sNBSADQQZqIQcgA0F5Sw0GIAcgEEsNByAGIAtGDQggBiAKaiIBLQAAIgJBkNrAAGoxAAAiKUL/AVENFSALIBFqIgBBAkkNCSABQQFqLQAAIgJBkNrAAGoxAAAiKkL/AVENAyAAQQJNDQogAUECai0AACICQZDawABqMQAAIitC/wFRDQsgAEEDTQ0MIAFBA2otAAAiAkGQ2sAAajEAACInQv8BUQ0NIABBBE0NDiABQQRqLQAAIgJBkNrAAGoxAAAiKEL/AVENDyAAQQVNDRAgAUEFai0AACICQZDawABqMQAAIiVC/wFRDREgAEEGTQ0SIAFBBmotAAAiAkGQ2sAAajEAACImQv8BUQ0TIABBB00NFCABQQdqLQAAIgJBkNrAAGoxAAAiJEL/AVENAiADIBZqIgAgKkI0hiApQjqGhCArQi6GhCAnQiiGhCAoQiKGhCAlQhyGhCAmQhaGhCImQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAmQiiIQoD+A4MgJkI4iISEPgAAIABBBGogJiAkQhCGhCIkQoCA/AeDQhiGICRCgICA+A+DQgiGhEIgiD0AACARQQhrIREgBkEIaiEGIAchAyAIQQFrIggNAAsLIAYgC0sNAiAGIAtGBEBCACEmQQAhAEEAIRFBACECDBYLIAogC2ohCyAGIApqIQNBACERQgAhJkEAIQFBACENQQAhCANAQQAhAgNAIAIgCGohDiACIANqIgotAAAiAEE9RwRAAkAgAkUEQCAAQZDawABqMQAAIiRC/wFRDQEgDkEBaiEIICQgEUEBaiIRQTpsQT5xrYYgJoQhJkEAIQIgACENIApBAWoiAyALRw0EDBoLIAEgBmqtQiCGQoD6AIQhJQwaCyAArUIIhiAGIA5qrUIghoQhJQwZCyABIA4gAhshASAOQQJxBEAgAyACQQFqIgJqIAtGDRcMAQsLCyABIAZqrUIghkKA+gCEISUMFgsgBkEHaiEGDBILIAZBAWohBgwRCyAGIAtBiIrAABC5AQALIAYgC0Gkj8AAELkBAAsgAyAHQbSPwAAQugEACyAHIBBBtI/AABC4AQALQQBBAEHEj8AAELcBAAtBAUEBQdSPwAAQtwEAC0ECQQJB5I/AABC3AQALIAZBAmohBgwJC0EDQQNB9I/AABC3AQALIAZBA2ohBgwHC0EEQQRBhJDAABC3AQALIAZBBGohBgwFC0EFQQVBlJDAABC3AQALIAZBBWohBgwDC0EGQQZBpJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2AgAgACABNgIEIAJBIGokAA8LELUCAAsQtgIAC5MBAQJ/IwBBEGsiAiQAAkACQCAAKAIoIgFBBU8EfyAAKAIEBSABC0EBaiIBRQ0AQX8gAUEBa2d2QQAgAUECTxtBAWoiAUUNACACQQhqIAAgARBBIAIoAggiAEGBgICAeEcEQCAARQ0CAAsgAkEQaiQADwtB7PDAAEERQZDxwAAQ0QEAC0Hs8MAAQRFBgPHAABDeAQALlgEBA38jAEEQayICJAACQCAAAn8gASgCCCIDIAEoAgQiBE8EQCACQQhqIAEoAgAgBCADELYBQbixwgAtAAAaIAIoAgwhAyACKAIIIQRBFBAKIgFFDQIgASAENgIMIAFBBDYCACAAIAE2AgQgASADNgIQQQEMAQsgACABKAIAIANqLQAAOgABQQALOgAAIAJBEGokAA8LAAuLAQEFfyMAQYABayIEJAAgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLBEAgA0GAAUHoqMAAELkBAAsgAUEBQfiowABBAiAFQYABIANrEDAgBEGAAWokAAunAQMCfwF8AX4jAEEgayICJAACQAJAAkACQCABKAIAQQFrDgIBAgALIAErAwgiBJlEAAAAAAAA8H9jBEAgAkEAOgAIIAJBCGoQtAFBAiEDCyAAIAQ5AxAgAEICNwMIIAAgAzoAAAwCCyAAQgA3AwggAEECOgAAIAAgASkDCDcDEAwBCyAAQQI6AAAgACABKQMIIgU3AxAgACAFQj+INwMICyACQSBqJAALjgEBAX8jAEEwayICJAAgACgCACEAIAJBDGpCAjcCACACQSRqQQ42AgAgAiAAKAIAIgA2AiggAkEDNgIEIAJBvKXAADYCACACQQ82AhwgAiAAaDYCLCABQRhqKAIAIQAgAiACQRhqNgIIIAIgAkEsajYCICACIAJBKGo2AhggASgCFCAAIAIQLyACQTBqJAALiwECA38BfiMAQRBrIgMkACADQQhqIAAoAggoAgAgASACECsgAy0ACCICQQRHBEAgACgCBCEBIAMpAwghBiAALQAAIgRBBE0gBEEDR3FFBEAgASgCACIEIAFBBGooAgAiBSgCABEEACAFKAIEBEAgBBAiCyABECILIAAgBjcCAAsgA0EQaiQAIAJBBEcLfgEFfyMAQYABayIEJABB/wAhAgNAIAQgAiIDaiIFQTBBNyAAQQ9xIgJBCkkbIAJqOgAAIANBAWshAiAAQRBJIABBBHYhAEUNAAsgA0GAAUsEQCADQYABQeiowAAQuQEACyABQQFB+KjAAEECIAVBgAEgA2sQMCAEQYABaiQAC38BBX8jAEGAAWsiBCQAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABBEEkgAEEEdiEARQ0ACyADQYABSwRAIANBgAFB6KjAABC5AQALIAFBAUH4qMAAQQIgBUGAASADaxAwIARBgAFqJAALfAIBfwJ+AkACfwJAIAEgA0kNACABIANLDQIgA0EDdCEEIAJBCGshAiABQQN0IQMgAEEIayEAA0BBACADRSAERXINAhogACADaikDACIFIAIgBGopAwAiBlQNASAEQQhrIQQgA0EIayEDIAUgBlgNAAsMAgtB/wELDwtBAQuKAQEBfyABKAIQIgRFBEBB4OLAAEEZQcziwAAQ3gEACyAAQQA2AhwgACACNgIUIAAgASkCADcCACAAQRhqIAM2AgAgAEEIaiABQQhqKQIANwIAIABBEGogAUEQaigCADYCACAAIAFBDGooAgAgBG4iATYCJCAAIAEgAyACa0ECdiIAIAAgAUsbNgIgC5UBAQJ/IwBBIGsiASQAAkACQAJAAkAgAC0AEA4EAQMAAgALIAFBEGpCADcCACABQQE2AgggAUHQ6MAANgIEIAEgAUEcajYCDCABQQRqQbjpwAAQ6wEACyAAKAIAIgIgACgCCBB6IAAoAgRFDQEgAhAiDAELIAAoAgAiAiAAKAIIEHogACgCBEUNACACECILIAFBIGokAAt+AQF/IwBBQGoiAiQAIAJBvN3AADYCFCACIAE2AhAgAiAANgIMIAJBJGpCAjcCACACQTxqQQE2AgAgAkECNgIcIAJB5IHAADYCGCACQQQ2AjQgAiACQTBqNgIgIAIgAkEQajYCOCACIAJBDGo2AjAgAkEYahCZASACQUBrJAALfgECfyMAQTBrIgIkAAJAIAEoAgBBAkYEQAJ/IAEoAgQiASgCKCIDQQRNBEAgAUEIagwBCyABKAIEIQMgASgCCAshASACQQA2AgAgAkEANgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEOsBAAttAQR/AkAgASgCBCICIAEoAggiA0sEQCABKAIAIQQCQCADRQRAIAQQIkEEIQIMAQsgAyEFIAQgAkECdEEEIANBAnQQIyICRQ0CCyABIAU2AgQgASACNgIACyAAIAM2AgQgACABKAIANgIADwsAC20BBH8CQCABKAIEIgIgASgCCCIDSwRAIAEoAgAhBAJAIANFBEAgBBAiQQQhAgwBCyADIQUgBCACQQxsQQQgA0EMbBAjIgJFDQILIAEgBTYCBCABIAI2AgALIAAgAzYCBCAAIAEoAgA2AgAPCwALggEAAkACQAJ/AkACQAJAAkAgAkEDaw4DAQACAwsgASgAAEH5yoWTB0YNBAwCCyAAQQFqIgIgAUGx4sAAQQMQvAINAhogAkECOgAADAQLIAFBrOLAAEEFELwCDQAgAEEBOgABDAMLIABBAWoLQQM6AAAMAQsgAEEAOgABCyAAQQA6AAALdwEDfyMAQRBrIgIkACACQQhqIAAoAgAgACgCBCAAKAIIELYBQbixwgAtAAAaIAIoAgwhAyACKAIIIQRBFBAKIgBFBEAACyAAIAQ2AgwgACABKQIANwIAIAAgAzYCECAAQQhqIAFBCGooAgA2AgAgAkEQaiQAIAALYwEBfyABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshAQJAIAIgA00EQCADIAVLDQEgACADIAJrNgIEIAAgASACQQN0ajYCAA8LIAIgAyAEELoBAAsgAyAFIAQQuAEAC2wBAX8jAEEwayICJAAgAiAAKAIANgIMIAJBHGpCATcCACACQQI2AhQgAkHEpMAANgIQIAJBFTYCLCABQRhqKAIAIQAgAiACQShqNgIYIAIgAkEMajYCKCABKAIUIAAgAkEQahAvIAJBMGokAAtoAQJ/IAEoAggiBEUgASgCBCIFIARrIANPckUEQCABQQA2AgggAUEAOgAMQQAhBAsgAyAFSQRAIAEoAgAgBGogAiADEL4CGiAAQQQ6AAAgASADIARqNgIIDwsgAEIENwIAIAFBADoADAtpAQF/IwBBIGsiAiQAAn9BASAAIAEQXA0AGiACQRRqQgA3AgAgAkEBNgIMIAJB9KXAADYCCCACQYyswgA2AhBBASABKAIUIAFBGGooAgAgAkEIahAvDQAaIABBBGogARBcCyACQSBqJAALZwEEfwJAIAEoAgQiAiABKAIIIgNLBEAgASgCACEEAkAgA0UEQCAEECJBASECDAELIAMhBSAEIAJBASADECMiAkUNAgsgASAFNgIEIAEgAjYCAAsgACADNgIEIAAgASgCADYCAA8LAAtmAQN/IAEoAgAhAgJAIAEoAgQiBCABKAIIIgNLBEACQCADRQRAIAIQIkEEIQIMAQsgAiAEQQR0QQQgA0EEdBAjIgJFDQILIAEgAzYCBCABIAI2AgALIAAgAzYCBCAAIAI2AgAPCwALXwECfyABBEADQCAAKAIAIgIgAEEEaigCACIDKAIAEQQAIAMoAgQEQCACECILIABBCGooAgAiAiAAQQxqKAIAIgMQxgEgAwRAIAIQIgsgAEEQaiEAIAFBAWsiAQ0ACwsLbQEDfwJAAkACQAJAIAAoAgAiACgCAA4CAAEDCyAAQQhqKAIARQ0CIAAoAgQhAQwBCyAALQAEQQNHDQEgAEEIaigCACIBKAIAIgIgASgCBCIDKAIAEQQAIAMoAgRFDQAgAhAiCyABECILIAAQIgtWAQF+AkAgA0HAAHFFBEAgA0UNASACQQAgA2tBP3GthiABIANBP3GtIgSIhCEBIAIgBIghAgwBCyACIANBP3GtiCEBQgAhAgsgACABNwMAIAAgAjcDCAtgAQF/IwBBMGsiAiQAIAIgATYCDCACIAA2AgggAkEcakIBNwIAIAJBAjYCFCACQcSBwAA2AhAgAkEDNgIsIAIgAkEoajYCGCACIAJBCGo2AiggAkEQahCZASACQTBqJAALYAEBfyMAQTBrIgIkACACIAE2AgwgAiAANgIIIAJBHGpCATcCACACQQI2AhQgAkGIgsAANgIQIAJBAzYCLCACIAJBKGo2AhggAiACQQhqNgIoIAJBEGoQmQEgAkEwaiQAC1kBAn8gAigCACEEIAEgAigCCCIDIAEgA0kbIgMEQCAEIQEDQCAAIAAtAAAgAS0AAHM6AAAgAEEBaiEAIAFBAWohASADQQFrIgMNAAsLIAIoAgQEQCAEECILC1wBAX8CQAJAAkAgAUUEQEEBIQIMAQsgAUEASA0BIAEQCiICRQ0CIAJBBGstAABBA3FFDQAgAkEAIAEQuwIaCyAAIAE2AgggACABNgIEIAAgAjYCAA8LEOoBAAsAC2gBA38CQAJAAkACQCAAKAIADgIAAQMLIABBCGooAgBFDQIgACgCBCEBDAELIAAtAARBA0cNASAAQQhqKAIAIgEoAgAiAiABKAIEIgMoAgARBAAgAygCBEUNACACECILIAEQIgsgABAiC2ABAX8jAEEQayICJAACfyAAKAIAIgAoAgBFBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG0xsAAQQQgAkEMakHIxsAAEH0LIAJBEGokAAtcAQF/IwBBIGsiAiQAIAJBDGpCATcCACACQQE2AgQgAkHUl8IANgIAIAJBCTYCHCACIAA2AhggAUEYaigCACEAIAIgAkEYajYCCCABKAIUIAAgAhAvIAJBIGokAAtPAQF/AkACQAJ/IAAoAigiAkEFTwRAIAAoAgQiAiABSQ0CIABBBGoMAQsgASACSw0BIABBKGoLIAEgAk8NASABNgIADwsgACABIAJrEEkLC1wBAX8jAEEwayIDJAAgAyABNgIMIAMgADYCCCADQRxqQgE3AgAgA0EBNgIUIANB1JfCADYCECADQQc2AiwgAyADQShqNgIYIAMgA0EIajYCKCADQRBqIAIQ6wEAC1oBAX8jAEEQayICJAACfyAALQAAQRdGBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUG0xsAAQQQgAkEMakG4xsAAEH0LIAJBEGokAAtOAQF/IAEoAigiBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIAIgBEsEQCACIAQgAxC5AQALIAAgBCACazYCBCAAIAEgAkEDdGo2AgALYAEBfyMAQRBrIgIkAAJ/IAAoAgBFBEAgASgCFEHolMIAQRAgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUH4lMIAQQhBgJXCAEEGIAJBDGpBiJXCABCNAQsgAkEQaiQAC1gBAn9BBCECAkACQAJAIAFFDQAgAUGq1arVAEsNASABQQxsIgNBAEgNASADRQ0AQbixwgAtAAAaIAMQCiICRQ0CCyAAIAE2AgQgACACNgIADwsQ6gEACwALWAEBfwJAAkACQCACRQRAQQEhAwwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIAMgASACEL4CIQEgACACNgIIIAAgAjYCBCAAIAE2AgAPCxDqAQALAAtIAAJAIAFpQQFHQYCAgIB4IAFrIABJcg0AIAAEQEG4scIALQAAGgJ/IAFBCU8EQCABIAAQQAwBCyAAEAoLIgFFDQELIAEPCwALTwEEfyABIAAoAggiAigCBCAAKAIQIgQgACgCDCIDaiIFa0sEQCACIAUgARCIAQsgAigCACICIAEgA2oiAWogAiADaiAEEL0CIAAgATYCDAtQAQJ/IwBBIGsiBiQAIAFFBEBB+ezAAEEyELQCAAsgBkEUaiIHIAEgAyAEIAUgAigCEBEGACAGQQhqIAcQvAEgACAGKQMINwMAIAZBIGokAAtGAQJ/IAAoAgQhASAALQAAIgBBBE0gAEEDR3FFBEAgASgCACIAIAFBBGooAgAiAigCABEEACACKAIEBEAgABAiCyABECILC08BAn8gACgCBCECIAAoAgAhAwJAIAAoAggiAC0AAEUNACADQaiowABBBCACKAIMEQAARQ0AQQEPCyAAIAFBCkY6AAAgAyABIAIoAhARAQALUgEBfyAAKAIAIQMgAC0ABEEBRwRAIAMoAgBB6OzAAEEBEOQBCyAAQQI6AAQgAygCACABKAIAIAEoAggQOSADKAIAQffswABBARDkASACIAMQFQtOAQF/IwBBEGsiAiQAIAIgACgCACIANgIMIAFB3NDAAEEFQeHQwABBBCAAQQhqQejQwABB+NDAAEEIIAJBDGpBgNHAABCHASACQRBqJAALSAEBfyMAQSBrIgMkACADQQxqQgA3AgAgA0EBNgIEIANBjKzCADYCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQ6wEAC0MBAX8gAiAAKAIEIAAoAggiA2tLBEAgACADIAIQhgEgACgCCCEDCyAAKAIAIANqIAEgAhC+AhogACACIANqNgIIQQALRgEBfwJAAkACQCABRQRAQQEhAgwBCyABQQBIDQFBuLHCAC0AABogARAKIgJFDQILIAAgATYCBCAAIAI2AgAPCxDqAQALAAtBAQF/IwBBEGsiAiQAIAJBCGogACABQQEQhAECQCACKAIIIgBBgYCAgHhHBEAgAEUNAQALIAJBEGokAA8LEOoBAAtJAQF/IwBBEGsiAiQAIAIgAEEMajYCDCABQdSIwABBDUG4iMAAQQUgAEHkiMAAQb2IwABBBSACQQxqQcSIwAAQhwEgAkEQaiQAC0MBAX8gACgCACEAIAEoAhwiAkEQcUUEQCACQSBxRQRAIAA1AgBBASABEFYPCyAAKAIAIAEQpgEPCyAAKAIAIAEQpwELQQEBfyACIAAoAgQgACgCCCIDa0sEQCAAIAMgAhCIASAAKAIIIQMLIAAoAgAgA2ogASACEL4CGiAAIAIgA2o2AggLeQECfyACIAAoAgQgACgCCCIDa0sEQCMAQRBrIgQkACAEQQhqIAAgAyACEIQBAkACQCAEKAIIIgNBgYCAgHhHBEAgA0UNAQALIARBEGokAAwBCxDqAQALIAAoAgghAwsgACgCACADaiABIAIQvgIaIAAgAiADajYCCAu4AQEFfyAAKAIAIQIgASgCHCIAQRBxRQRAIABBIHFFBEAgAjEAAEEBIAEQVg8LIAItAAAhAyMAQYABayIFJABB/wAhAgNAIAUgAiIEaiIGQTBBNyADQQ9xIgBBCkkbIABqOgAAIAJBAWshAiADIgBBBHYhAyAAQRBPDQALIARBgAFLBEAgBEGAAUHoqMAAELkBAAsgAUEBQfiowABBAiAGQYABIARrEDAgBUGAAWokAA8LIAIgARCiAQtCAQF/IAEoAghFBEAgAEEANgIIIABBADYCAA8LIAEoAgAiAgRAIAAgAiABKAIEEBcPC0GAl8IAQStBiITAABDeAQALPAEBfyABKAIcIgJBEHFFBEAgAkEgcUUEQCAANQIAQQEgARBWDwsgACgCACABEKYBDwsgACgCACABEKcBCzkAAkACfyACQYCAxABHBEBBASAAIAIgASgCEBEBAA0BGgsgAw0BQQALDwsgACADIAQgASgCDBEAAAtAAQF/IwBBIGsiACQAIABBFGpCADcCACAAQQE2AgwgAEG43MAANgIIIABBjKzCADYCECAAQQhqQbyHwAAQ6wEAC+gBAQF/IwBBIGsiAiQAIAJBATsBHCACIAE2AhggAiAANgIUIAJBpKbAADYCECACQYyswgA2AgwgAkEMaiIAKAIIIgFFBEBBgJfCAEErQfihwgAQ3gEACyABQQxqKAIAIQICQAJAIAEoAgQOAgAAAQsgAg0ACyAALQAQIQEgAC0AERpB0K3CAEHQrcIAKAIAIgBBAWo2AgACQCAAQQBIDQBBnLHCAC0AAEEBcQ0AQZyxwgBBAToAAEGYscIAQZixwgAoAgBBAWo2AgBBzK3CACgCAEEASA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = TQ();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await HQ(await o, i);
  return PQ(t, e);
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return kA(I - 10, r);
  }
  const e = o();
  function A(a, x, I, C, r) {
    return kA(a - -979, I);
  }
  function n(a, x, I, C, r) {
    return kA(a - 25, r);
  }
  function g(a, x, I, C, r) {
    return kA(r - 252, a);
  }
  for (; ; )
    try {
      if (parseInt(n(537, 566, 539, 545, "k9Ld")) / 1 * (-parseInt(n(541, 548, 549, 533, "17VP")) / 2) + -parseInt(n(530, 503, 511, 546, "yJdD")) / 3 * (parseInt(t(510, 503, 508, 484, ")8%z")) / 4) + -parseInt(t(494, 507, 518, 506, "p!6M")) / 5 + parseInt(g("17VP", 761, 731, 750, 737)) / 6 * (parseInt(A(-503, -492, "agoq", -518, -498)) / 7) + parseInt(A(-454, -476, "5Z$d", -455, -476)) / 8 * (-parseInt(A(-459, -459, "k9Ld", -435, -470)) / 9) + parseInt(g("MZ0P", 799, 783, 768, 770)) / 10 * (parseInt(g("PH#I", 739, 715, 749, 744)) / 11) + -parseInt(n(512, 528, 505, 525, "L9Ej")) / 12 * (-parseInt(t(490, 493, 509, 510, "ZB*E")) / 13) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ko, 57004 * 4 + -7423 * -46 + 304487);
function kA(o, i) {
  const t = Ko();
  return kA = function(e, A) {
    e = e - 476;
    let n = t[e];
    if (kA.putvmL === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      kA.vHXbBj = C, o = arguments, kA.putvmL = !0;
    }
    const a = t[6266 + -57 * -46 + -8888], x = e + a, I = o[x];
    return I ? n = I : (kA.sVRQwp === void 0 && (kA.sVRQwp = !0), n = kA.vHXbBj(n, A), o[x] = n), n;
  }, kA(o, i);
}
function Tt(o, i, t, e, A) {
  return kA(e - 895, t);
}
function Qa(o, i, t, e, A) {
  return kA(t - 429, o);
}
function Gi(o, i, t, e, A) {
  return kA(t - -642, e);
}
function Ko() {
  const o = ["WRzsfCoHnW", "t8oheSoGda", "WP4RumohCG", "WOLfWP5AWOZdJCkzFmoJpSo+", "kSkgW4BcGsy", "WQVdG8oJWOtcHqdcRsC4y8khW5u", "aCoAW4bvWOy", "iM7cP8ki", "W6xcUNDCsq", "W51ihCoJeq", "imk6WR3cMSoDb8o2WQnB", "euhdTmkkW5NcMeL6FMKZ", "feRdTSojWPVcMufCFq", "WPfhbSoVgq", "mSoQe2/dUmkkW5GXvmoM", "W5iHtSokWPVcMmousmow", "wsFdV8oJWRxcGmoEWPuzBSkSCSot", "WR8goCkyW53cQ3/dGq", "zCoVW73cNmod", "B8klWONdIai", "WP4Ns8orCW", "imk4W5XIDtzWBSkUWPKkWRC", "jCk3WR7dImk6rSkYWRPNW4DlfSkZ", "W7WzACkzcgWRpa", "nmogW43dOCk2", "FcfbWP/cLaRdGXVcP8o5", "C8o6W6FcNSoK", "WQX6cmoLcG", "FYTeWP3dN3pcIb/cUmo5x8oAWQm", "W51ie8o4xq", "W7LqaSkeWPS", "o8oDW6dcVsHdW4FcVa", "sSopkSkWWRJcUCoJxa", "W6nFfSkDW5W", "mY51WOa4xmoZWQJdUgzv", "sCogDSozW7tdO8kmmSoFBeqHqWW", "W7GUW44lw8k/nwRdUvNdNSoKsmot", "WPnhcmoJha", "f8kwoSknWQu", "W65eb8o/eW", "yMZcOSozWQK", "agxdUmkKW7XHwmkI", "WPxcTSkuvHK", "wmkzwSkP", "nmoHfMlcUmo9WR4xy8oCc2lcNq", "WQn2WPrtfa", "wsBdTCoMWRxdVSkwWPOsCSkJ", "s3BcPmkXW64", "hrftcCoYW6Csofbj", "qmoKEehdVW", "W58gWO7dU20", "W7TZW5ddIWq", "i8k4W5LLn0fFy8ksWOa", "qSoAaCoQbG", "rmkKW6tcQCkCFSozmq", "geTxW7mB", "hH1wv8owW5Gvifq", "iM4XsYm"];
  return Ko = function() {
    return o;
  }, Ko();
}
function Y0(o, i, t, e, A) {
  return kA(A - -402, i);
}
var ya;
class qQ {
  constructor() {
    b(this, ya, !1);
  }
  async [(ya = Tt(1355, 1408, "5jII", 1383) + Y0(84, "eVXU", 124, 82, 99) + Y0(53, "eVXU", 78, 67, 75), Gi(-119, -126, -135, "P5Tl"))](i) {
    function t(a, x, I, C, r) {
      return Tt(a - 131, x - 398, r, a - -1044);
    }
    function e(a, x, I, C, r) {
      return Tt(a - 217, x - 33, x, r - -1199);
    }
    function A(a, x, I, C, r) {
      return Tt(a - 255, x - 374, I, r - -102);
    }
    function n(a, x, I, C, r) {
      return Tt(a - 325, x - 80, x, r - -1733);
    }
    function g(a, x, I, C, r) {
      return Gi(a - 421, x - 179, C - 242, a);
    }
    try {
      const a = i + (A(1310, 1290, "Ogog", 1312, 1296) + "/") + Tg;
      await YI(a), this[A(1290, 1335, "vcWR", 1315, 1314) + t(355, 352, 378, 378, "x[Wo") + n(-304, "O%(u", -337, -319, -314)] = !0;
    } catch {
      this[t(333, 349, 309, 315, "9rUD") + g("AXeC", 123, 97, 106) + t(368, 374, 345, 347, "!aL(")] = !1, console[n(-297, "0s#z", -314, -284, -309)](Tg + (t(377, 363, 398, 379, "pHmB") + g("Tk)E", 105, 119, 128) + n(-298, "!aL(", -288, -322, -315) + n(-284, "eVXU", -296, -287, -307) + t(334, 347, 322, 309, "pHmB") + A(1263, 1259, "O%(u", 1250, 1277) + n(-305, "kDNT", -343, -299, -327) + g("40W&", 124, 124, 130) + n(-341, "^Vi*", -314, -338, -323) + A(1294, 1266, "9rUD", 1269, 1283) + t(344, 339, 365, 333, "eVXU") + e(230, "SnNb", 180, 191, 209) + n(-353, "mK9x", -325, -313, -341) + n(-339, "PtZ6", -312, -302, -319) + "n."));
    }
  }
  [Y0(118, "&KDR", 109, 63, 92) + Gi(-133, -158, -151, "Ogog") + Qa("bdAK", 945, 938) + "ed"]() {
    function i(e, A, n, g, a) {
      return Qa(A, A - 27, g - -143);
    }
    function t(e, A, n, g, a) {
      return Y0(e - 366, a, n - 69, g - 284, g - 1218);
    }
    return this[t(1364, 1318, 1346, 1338, "Ogog") + t(1355, 1358, 1319, 1330, "Ix@n") + i(790, "ZB*E", 800, 788)];
  }
}
class Si extends Error {
  constructor() {
    super(...arguments);
    b(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Ni(o, i, t, e, A) {
  return AA(t - -809, i);
}
function AA(o, i) {
  var t = Ho();
  return AA = function(e, A) {
    e = e - (1 * 6143 + 20 * 252 + -2 * 5509);
    var n = t[e];
    if (AA.nraehL === void 0) {
      var g = function(r) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", Q = "", d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var p = 0, k = B.length; p < k; p++)
          Q += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      }, a = function(r, E) {
        var B = [], Q = 0, d, u = "";
        r = g(r);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (var f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      AA.dYiXke = a, o = arguments, AA.nraehL = !0;
    }
    var x = t[-1 * 8013 + 2935 * -1 + 10948 * 1], I = e + x, C = o[I];
    return C ? n = C : (AA.Uvsrxm === void 0 && (AA.Uvsrxm = !0), n = AA.dYiXke(n, A), o[I] = n), n;
  }, AA(o, i);
}
function Ea(o, i, t, e, A) {
  return AA(A - 226, o);
}
function Ho() {
  var o = ["wmkSBHzf", "WP4hxCkMW6Lbrq", "WQJcKHRdJ8kx", "jCoMEa", "W6aNvgRcLtiO", "FCkQsYDP", "W5OpsG", "d8kpk2v3", "sCkFfmolW6K", "a8khydz4WODv", "W4H0W4pcNv0", "W4tdJai", "W4D/W4xcRue", "WRpcHcJdVSkC", "A8oHWOOxWPFdThddIKpcMHm", "yCoDeLRcRSonE1RdSmkriN0", "r8k+WRxcGaG", "ymoMWO8DWPxcPNRdLxpcOWldQq", "smkfW4JdImo2", "WRidxuJcOW", "t1FcImo5WPy", "WPiAb8kuWQW1WQpdNSkgW4TDa1q", "eSkmWOLDAa", "vCoBW5GfnCoWkXW+WQW2z8ol", "W7xdL2lcMmobW4lcJ1JdNCo4W5G8WOy", "WQFdSmou", "W75wW43cT8kW", "WP7cMCkys8kZsmock8oDkmkVha", "qSkUWQFcGbi", "hConqCkhWQOTWPxcGsT2WP/cUW", "hHFdLSk7W53dJmkgW63dNqdcNCk6WRu", "W5OwWR49W6u", "fSkmWPLFza", "rCkRW4mKp8oreSk1W49eWOHe", "fmoQWOjPzW", "W4CsWRqhW4u", "WQpcJt7dHq", "rSkjkSojW70", "xSoxWRldPG", "e8kiWOPDwq", "W7K+W5JcHmk3", "WRVdSSouWOuj", "t8k7v8oltW", "W5vdua", "W4hcSCoWpCkR", "W6NcHKxcPmoP", "WRWgW6NdThe", "retcK8oPWO0", "WPDlAmoenGyW", "W4CzW4NcI8ol", "pSkpva", "dmkiWPK", "aSoYWPBcImkImCkQcmkrvmoW", "iCk9W5m", "tSkkWQpdNru", "r8k5WQNcHXq", "WR7dGHNdO8kInZNdRx/dGgVcHJq", "bSk+W5L6aq", "y2S4WPNdUSo4WPZdISoZl8o/W7G", "WQG/WQdcKCkj"];
  return Ho = function() {
    return o;
  }, Ho();
}
(function(o, i) {
  function t(x, I, C, r, E) {
    return AA(x - -410, C);
  }
  function e(x, I, C, r, E) {
    return AA(r - 613, x);
  }
  function A(x, I, C, r, E) {
    return AA(r - -618, I);
  }
  var n = o();
  function g(x, I, C, r, E) {
    return AA(E - 807, C);
  }
  for (; ; )
    try {
      var a = -parseInt(g(992, 1037, "]gg]", 1008, 1019)) / 1 + parseInt(g(986, 1011, "%p&H", 976, 984)) / 2 + parseInt(g(980, 972, "y%0r", 1016, 990)) / 3 * (parseInt(A(-436, "urXR", -380, -409, -393)) / 4) + -parseInt(A(-427, "gEZU", -450, -447, -477)) / 5 + parseInt(g(964, 991, "Tmmn", 968, 987)) / 6 * (-parseInt(e("eD$A", 836, 845, 815, 803)) / 7) + parseInt(A(-445, "Q[uv", -406, -415, -408)) / 8 + -parseInt(t(-216, -213, "[f*S", -204, -186)) / 9;
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ho, 359833);
function rt(o, i, t, e, A) {
  return AA(o - 729, e);
}
function se(o, i, t, e, A) {
  return AA(i - 133, t);
}
function jQ(o, i, t, e, A) {
  return AA(i - -171, e);
}
var pt, p0;
class da {
  constructor(i) {
    P(this, pt);
    P(this, p0);
    this[t("HR0[", 371, 381) + A(-769, -773, "!1Wh", -771)] = i;
    function t(a, x, I, C, r) {
      return AA(I - 157, a);
    }
    function e(a, x, I, C, r) {
      return AA(I - 6, x);
    }
    function A(a, x, I, C, r) {
      return AA(C - -955, I);
    }
    function n(a, x, I, C, r) {
      return AA(C - -683, I);
    }
    function g(a, x, I, C, r) {
      return AA(I - 422, r);
    }
    try {
      T(this, pt, i[g(597, 614, 609, 630, "e%J3") + n(-462, -513, "Q[uv", -491, -519) + e(220, "kwVo", 228, 209, 243)] && JSON[A(-731, -743, "rYiV", -732, -761)](i[n(-489, -476, "(Z4$", -476, -485) + g(626, 655, 642, 637, "Pxv$") + t("r@bf", 357, 329, 315, 354)])), T(this, p0, i[g(631, 652, 635, 648, "]gg]") + n(-533, -539, "[f*S", -514, -529)]);
    } catch (a) {
      console[t("AWi3", 373, 374)](a);
    }
  }
  get [se(323, 309, "HRY]") + "id"]() {
    function i(e, A, n, g, a) {
      return se(e - 247, A - -757, a);
    }
    function t(e, A, n, g, a) {
      return se(e - 139, e - 707, n);
    }
    return this[i(-474, -446, -438, -462, "Lt7f") + i(-427, -405, -387, -379, "(din")][t(1056, 1075, "e%J3") + i(-415, -434, -412, -427, "1KoZ")];
  }
  get [se(319, 298, "W#Ti") + "s"]() {
    function i(e, A, n, g, a) {
      return se(e - 347, a - 794, g);
    }
    function t(e, A, n, g, a) {
      return Ni(e - 450, a, n - 728);
    }
    return this[t(70, 101, 93, 64, "(Z4$") + t(122, 127, 98, 94, "cpNE")][i(1150, 1148, 1140, "IUMS", 1148) + "s"];
  }
  get [Ni(-587, "eD$A", -598) + se(344, 337, "Pxv$")]() {
    function i(e, A, n, g, a) {
      return rt(A - -9, A - 33, n - 150, n);
    }
    function t(e, A, n, g, a) {
      return Ni(e - 2, e, A - 1515);
    }
    return this[i(900, 919, "urXR") + i(869, 886, "urXR")][t("@GNW", 879) + t("8Uc(", 888)];
  }
  get [se(327, 319, "K%Pp") + "b"]() {
    return w(this, pt);
  }
  get [se(302, 328, "(Z4$") + se(322, 303, "eD$A")]() {
    return w(this, p0);
  }
  get [Ea("Q[uv", 408, 381, 395, 407) + rt(934, 914, 914, "ceSR") + jQ(47, 26, 19, "gEZU") + rt(944, 933, 960, "Q[uv")]() {
    var n, g;
    function i(a, x, I, C, r) {
      return rt(r - -1398, x - 351, I - 363, a);
    }
    function t(a, x, I, C, r) {
      return rt(r - -1268, x - 206, I - 177, x);
    }
    function e(a, x, I, C, r) {
      return rt(r - -650, x - 469, I - 400, a);
    }
    function A(a, x, I, C, r) {
      return Ea(x, x - 75, I - 349, C - 434, r - -917);
    }
    return !!((g = (n = w(this, pt)) == null ? void 0 : n[i("8Nb2", -493, -485, -507, -478) + t(-384, "Tmmn", -374, -353, -354)]) != null && g[e("eD$A", 296, 313, 298, 297) + t(-347, "mdCB", -326, -348, -325) + e("y%0r", 257, 265, 302, 277) + t(-356, "mdCB", -320, -302, -329) + A(-509, "e4l8", -539, -505, -523) + A(-514, "8Nb2", -486, -528, -502) + t(-332, "eD$A", -320, -330, -338) + "d"]);
  }
}
pt = new WeakMap(), p0 = new WeakMap();
(function(o, i) {
  function t(a, x, I, C, r) {
    return sA(r - -460, x);
  }
  const e = o();
  function A(a, x, I, C, r) {
    return sA(C - -586, a);
  }
  function n(a, x, I, C, r) {
    return sA(C - -510, x);
  }
  function g(a, x, I, C, r) {
    return sA(x - 841, C);
  }
  for (; ; )
    try {
      if (-parseInt(t(-47, "tKWL", -35, -110, -132)) / 1 + -parseInt(g(962, 1055, 1125, "zDDQ", 1039)) / 2 + parseInt(t(-305, "[j&h", -380, -304, -317)) / 3 + parseInt(g(1111, 1176, 1081, "gIaR", 1184)) / 4 + parseInt(A("XJJZ", -387, -514, -425, -402)) / 5 * (parseInt(A("oK6m", -428, -367, -422, -409)) / 6) + parseInt(g(1092, 1117, 1037, "IKfJ", 1070)) / 7 * (-parseInt(t(-99, "tkGW", -100, -209, -156)) / 8) + parseInt(n(-164, "f@E4", -202, -254, -198)) / 9 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(To, 709475);
function JA(o, i, t, e, A) {
  return sA(e - 325, o);
}
function sA(o, i) {
  const t = To();
  return sA = function(e, A) {
    e = e - (-50 * 42 + -18 * -327 + -166 * 22);
    let n = t[e];
    if (sA.QnMFKm === void 0) {
      var g = function(r) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", Q = "";
        for (let d = 0, u, c, f = 0; c = r.charAt(f++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          Q += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(Q);
      };
      const C = function(r, E) {
        let B = [], Q = 0, d, u = "";
        r = g(r);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          Q = (Q + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[Q], B[Q] = d;
        c = 0, Q = 0;
        for (let f = 0; f < r.length; f++)
          c = (c + 1) % 256, Q = (Q + B[c]) % 256, d = B[c], B[c] = B[Q], B[Q] = d, u += String.fromCharCode(r.charCodeAt(f) ^ B[(B[c] + B[Q]) % 256]);
        return u;
      };
      sA.hiJPhm = C, o = arguments, sA.QnMFKm = !0;
    }
    const a = t[-1273 * 5 + -1 * -1101 + 5264], x = e + a, I = o[x];
    return I ? n = I : (sA.JvLfuB === void 0 && (sA.JvLfuB = !0), n = sA.hiJPhm(n, A), o[x] = n), n;
  }, sA(o, i);
}
function NA(o, i, t, e, A) {
  return sA(o - 776, e);
}
function Ae(o, i, t, e, A) {
  return sA(o - -268, i);
}
function To() {
  const o = ["W7ZcPmkKwq", "WOpdK8kbW48cWRFdUCo4qCo/", "WR7cQh/cOq", "tmo7rq", "W6G8oSkMxG", "qCo/wSkRWPC", "W5m1e8kwW64", "WQm5w8k/eq", "yConqCkigMdcKbZcOSoEDmopWPW", "WRnIW5i", "ybyoW7OU", "W6BdVbbZCa", "W6SbDmkzWOq", "WPD2WQqhBq", "umoMW7aaFW", "W4iVW710WO0", "WRXIW5VcN8oH", "W4WlhCk/AW", "j8kCWPatc8oZrSkbW67cV0O4W58", "lSoSWRBcL0u", "DCoXwCkDWRO", "xw4pWRjW", "WPfIWPxcR8oC", "ymk5prZdNG", "WP/cSmojuG4", "WP/cVSoorqG", "WQTCW4RcRq", "WR5MdmoKgSkRW65lWOuo", "WQRcQZJcK8ky", "W5SabSklDq", "w8oxW50", "kmokW5BcHCoY", "pwpdUG", "oCo+W4vyWRi", "jSoYWO7dLsmKW7lcQrJcTmkAW6ddNq", "p8k0oCoyaG", "eLH3kmkG", "W5tcGCoQWPSi", "m2NdUquh", "W6VcSCkGq8kA", "AHOCW7i6", "qmkLpbBdVa", "W7GbCSkeWOm", "W7RcTCk4zSkx", "FmkJW43cJNi", "W77cOSkJwCkn", "W6PogCkhnG", "zdWGW7ud", "a8olWOxcPmkD", "hSkwfv9x", "WOXtWOazwW", "n2pdRYqd", "W5ihfSkloW", "f2NdTCk2WO0", "W64bFSkp", "fCoKWQFcNei", "W6vQg8oKiq", "W5FcGmohWPKg", "W7esdaxcLG", "nCkIDsa", "W63dSM/cPYe", "BcvWW7xcNq", "qgtdP29SiLfprmolW5hcLmkj", "W40VW7PDi0pcSLRdTmolEaxdTa", "W6mybJq", "W7tcO8kBs8kn", "CSkQpr3dHq", "W7zTaCo+oG", "uCoWW53cK1W", "W70tpSksW5S", "W7CVW7PfWO4", "W6i/sSoXhW", "W4qlda", "WR5UW4e", "j8oNW7/cHSkE", "eSkxoeze", "W7iinq", "W5NdMGLwya", "jsGyWOZdHW", "q2i3WOrZ", "W6dcNw8uWRqxWRWVuxRcMLBdVq", "wCoFW43dL8kZ", "hmo/WRBcLL4", "g8oMBSkRWPGYWOW", "W5ZcGmob", "W7agiG", "kCoCW55vWOS", "WPnyW6ZcVSod", "W78CcIpcNW", "WRnKW5BcJSo9", "WQpdGsq", "wXvP", "irmtW7aQ", "W7SuhsxcMq", "wmovW5W", "WQ4qCmkaWP0", "Bq0vW6a8", "W6mjeIxcKW", "EComW5y", "qSorW5ZdMmkU", "euVcQKBdImkRWRm6WPFdL0hcKa", "W43dVunshW", "aIBcUtKH", "iCoqW6NcICkX", "W7aBjbhcGq", "W5Gbamkamq", "W5dcKCoBWOK", "smkcirRdMa", "WQDFECkQWPS", "bSkOW5VcRwFcRLve", "W68IW5dcJrK", "WPTLWRObzq", "BCo/kNJdG8k7W47dTLr8zbeU", "bdxcVd4X", "WPvAW40", "pCofW5FcK8k3", "W6O/s8k/eG", "fh7dRW4q", "WPldOJFcN8kv", "W4WgeCkL", "nCkDaCo4vW", "W6ldQwpcStW", "fSkrl2vF", "vXD+W4VcIa", "dSknjgTy", "wr4jW75V", "W7iik8keW4W", "vSovW4ddHCkI", "W47dVevzwW", "W6tdIuhcQHu", "g8kmkuXy", "WPldRb12W7q", "q8oiW5zowG", "imkqWPesa8oXk8kJW5RcMNuG", "a8kxdM1N", "W609wmoTlG", "WRldNdLqW7u", "hJVcTXiN", "i2pdRW", "W5CahmkA", "rSk5iaddNW", "WP7cVmoFsbm", "W4Cnhmk1Fq", "FG0tW707", "WP7cSCoCsq", "WOBdR8oYWQ9h", "W79RW5RcNSo9", "W70TW7bJWQS", "W5hdNb52yW", "lmkJomoDdG", "mSoKW4vyWRm", "WRaPF8kpza", "imofW4ZcJG", "cgNdS8k7WOW", "bmkkja", "W5CbgW", "W7mygM4", "s8o5uSklWPi", "y8oiW5zowG", "BbOEW7CQ", "j8kepKe", "vGb1W5ZcNG", "W6uZw8k/bq", "cCoRW7hdGmkE", "oLi2gmkA", "hcFcTxK5", "W4pcQ8osWPCl", "W7RcTSkwE8ki", "lSobW4VcK8k3", "WQxcSdtcHCkf", "omk0mCokeG", "W7H5g8oK", "W4KLW6PrWPy", "W6j5amoK", "tmkKiq", "W41tW7fgW6FcL8oJW4NdS1CRyCoS", "W5ddNrLwlG", "mSk4i8ocbG", "W7KejCkLW4C", "WQxcPZxcHCkt", "gJxcPdq9", "mN7dSHir", "pmkFbG", "WRRcP3dcOa", "DCk2W5ZcOxm", "WQpcScNcMCke", "WPz2WRWnFW", "zSooW4pcOe0", "WQO+q8oukq", "D8ogW7JdHSk+", "W43dVunsBW", "t8ouFH0bxmkfWRDiW7H+jW", "dghdPmk9WOO", "wX1UWO/cHa", "W4aCds3dLW", "lCoZW4VcUKbWWOtcIG", "cmkNiSo5hq", "WRFcRhdcRSo1", "i8oRW5FcUmkR", "WRGPBmkpEW", "W43dGMbUAG", "dhZdI8kXWOC", "WOm1W4JcLmoH", "hJ3cSZi7", "WRHOW4hcP8o6", "W4pcISob", "cwNdQ8kXWP4", "W54UwCoZpq", "iSkYW7FcIhfZWOi", "iCoWW4rFWRK", "imkeouqw", "D8k3W4RcMxu", "pmo/WRBcLL4", "jtuQW4pdMa", "WRWNF8kPyq", "WPj4WQKkwW", "WP0eWQ0bWQe", "CCkjW4PprW", "vCk5jH3dMa", "W4mndmkYCa", "qHFdQZdcLW", "WPnKW5BcJSo9", "wCozW43dK8kP", "W4/dRSkoeLDwDKZcJNVdM8k1", "DIBdLb3cKa", "m8kugCoOrW", "WQPlWQ8CWRa", "qbbtW67cMW", "WRNdJYjaW64", "WRhcOYNcMa", "W5hcUCkVt8kq", "W6u5nJFcUW", "mmkLAsRcLq", "g8kkk016", "eSklouXM", "WQ1FBmkQWOG", "WRXOW5VcMmo2", "W7WZW4VcOq", "WRxcTJtcM8kt", "rCo3vmkTWPS", "vb9/", "kdq7WQJdMq", "W5u4W6bEWPy", "W4GHfSk4Ba", "ncJdQ8kXWOC", "WRJdJtnnW7u"];
  return To = function() {
    return o;
  }, To();
}
function ee(o, i, t, e, A) {
  return sA(t - -301, A);
}
function xA(o, i, t, e, A) {
  return sA(t - -283, i);
}
var Da, ma, wa;
class ZQ {
  constructor(i) {
    b(this, wa);
    b(this, ma, [xA(-56, "oO1s", 51) + ee(-116, 13, -7, 92, "vF*x") + "ic", JA("yGRK", 423, 490, 498) + JA("[j&h", 518, 450, 571) + "ic"]);
    b(this, Da);
    function t(e, A, n, g, a) {
      return sA(n - -66, a);
    }
    this[t(215, 276, 163, 170, "i#w&") + t(232, 143, 138, 83, "90j7") + "d"] = i;
  }
  async [(wa = xA(-79, "[j&h", 1) + "se", ma = xA(30, "yGRK", 84) + ee(-85, -218, -117, -157, "a*K[") + ee(4, 39, 67, 63, "9RVW") + ee(32, -48, 26, 75, "KLvn"), Da = JA("*fQH", 420, 453, 527) + NA(1071, 1033, 1194, "55Hy"), Ae(-48, "2kLO"))](i) {
    function t(x, I, C, r, E) {
      return NA(E - -1424, I - 404, C - 32, I);
    }
    const e = await this[n(853, 680, 729, 762, "KLvn") + A(-401, -351, -502, "a*K[", -438) + n(638, 818, 642, 745, "a@7M")](i);
    function A(x, I, C, r, E) {
      return NA(E - -1463, I - 257, C - 378, r);
    }
    function n(x, I, C, r, E) {
      return JA(E, I - 327, C - 37, r - 67);
    }
    function g(x, I, C, r, E) {
      return xA(x - 156, C, E - 392);
    }
    function a(x, I, C, r, E) {
      return xA(x - 185, E, C - -636);
    }
    await Promise[A(-442, -444, -421, "gIaR", -381) + a(-823, -678, -741, -709, "X0RL")]([this[a(-728, -566, -687, -620, "55Hy") + t(-306, "8LjZ", -280, -265, -283) + "d"][n(649, 561, 646, 592, "5W]s")](i), this[t(-424, "op^)", -323, -345, -352) + a(-658, -626, -593, -671, "XJJZ") + "e"](e)]), this[g(412, 322, "[j&h", 184, 303) + a(-779, -654, -716, -684, "8k3u") + n(540, 622, 619, 600, ")v$2")]();
  }
  async [NA(1076, 1166, 984, "5W]s") + xA(-61, "KLvn", 28) + "se"](i) {
    function t(a, x, I, C, r) {
      return Ae(C - 1037, I);
    }
    function e(a, x, I, C, r) {
      return ee(a - 64, x - 192, a - 105, C - 438, x);
    }
    function A(a, x, I, C, r) {
      return JA(C, x - 40, I - 282, a - -875);
    }
    function n(a, x, I, C, r) {
      return ee(a - 37, x - 219, r - 384, C - 402, I);
    }
    function g(a, x, I, C, r) {
      return xA(a - 252, I, C - 838);
    }
    try {
      if (n(383, 376, "X0RL", 434, 395) === g(963, 826, "op^)", 932, 1002)) {
        const a = await fetch(i);
        if (!a.ok) {
          if (n(223, 299, "]T[M", 334, 250) !== n(351, 356, "AJ(!", 345, 251)) throw new Error(g(867, 848, "a*K[", 799, 752) + A(-328, -364, -223, "tkGW", -336) + n(306, 465, "zDDQ", 327, 381) + A(-281, -351, -170, "MC4w", -226) + "d.");
          this[n(201, 133, "AJ(!", 367, 253) + "se"] = void (2323 * -3 + -7706 * 1 + 1 * 14675), _0x4d159d[g(775, 736, "uU][", 718, 733)](_0x51d023);
        }
        this[t(957, 867, "8k3u", 980, 1043) + "se"] = await a[g(703, 701, "X0RL", 700, 594)]();
      } else throw new _0x498f40(e(145, "zDDQ", 165, 243, 67) + A(-206, -318, -120, "5W]s", -126) + g(772, 624, "B2)v", 731, 759) + t(1022, 1101, "AJ(!", 996, 993) + "d.");
    } catch (a) {
      n(356, 334, "tKWL", 450, 447) === t(979, 1097, "90j7", 1077) ? _0x940645[e(-57, "X0RL", -160, -16) + "ch"]((x) => _0x355be1[t(1005, 986, "tkGW", 994)](x)) : (this[g(772, 655, "i#w&", 713) + "se"] = void (3481 * -2 + 3013 * -1 + -21 * -475), console[t(1128, 1018, "4#EG", 1035)](a));
    }
  }
  async [ee(-62, -94, 13, 83, "8k3u") + Ae(-25, "oO1s") + "e"](i) {
    this[A(235, 200, 308, 114, "KLvn") + A(320, 199, 213, 181, "IKfJ")] = void 0;
    function t(a, x, I, C, r) {
      return NA(I - -298, x - 283, I - 56, x);
    }
    if (!i)
      if (e(215, 124, "8k3u", 71, 188) === e(217, 376, "b]wX", 211, 278)) {
        if (!this[e(295, 191, "S^DI", 242, 246) + "se"]) throw new _0x7c4abb(t(877, "830O", 816) + g("S^DI", -195, -141) + g("830O", -238, -284) + g("830O", -294, -257) + ".");
        if (!this[t(718, "i#w&", 707) + e(183, 247, "yGRK", 204, 213) + "d"][A(-58, -13, 48, -37, "vF*x") + g("5W]s", -244, -142) + n(220, "op^)", 270) + "ed"]()) throw new _0x5c8b39(g("X0RL", -233, -191) + A(47, 102, 37, 110, "90j7") + t(641, "tHZ)", 736) + t(803, "oK6m", 810) + ".");
        this[e(253, 251, "9RVW", 229, 194) + e(96, 153, "S^DI", 218, 207)] = new _0x44af60(_0x3b9f89(this[g("2kLO", 4, -87) + "se"], this[t(847, "GYpa", 737) + n(338, "GzEC", 259)]())), this[e(249, 223, "qLZm", 343, 342) + g("8LjZ", -308, -268) + "s"](this[e(134, 118, "90j7", 249, 215) + g("X0RL", -333, -297)][t(516, "8k3u", 634) + "s"]), this[t(624, "(mFu", 615) + t(825, "uU][", 824) + n(266, ")v$2", 287)](this[e(242, 325, "4#EG", 187, 223) + A(212, 180, 142, 96, "tkGW")][t(541, "S^DI", 612) + A(117, 185, 179, 278, ")v$2")]);
      } else {
        console[t(735, "P49]", 618)](g("Yzrg", -132, -221) + n(354, "2kLO", 303) + t(808, "2kLO", 834) + e(157, 140, "tHZ)", 213, 203) + e(216, 176, "X0RL", 258, 210)), this[t(525, "*fQH", 619) + "se"] = void (-2348 + 95 * 18 + 638);
        return;
      }
    function e(a, x, I, C, r) {
      return JA(I, x - 175, I - 29, r - -352);
    }
    function A(a, x, I, C, r) {
      return xA(a - 147, r, x - 111);
    }
    function n(a, x, I, C, r) {
      return NA(I - -846, x - 383, I - 346, x);
    }
    function g(a, x, I, C, r) {
      return xA(a - 137, a, I - -183);
    }
    await this[e(172, 32, "tKWL", 70, 111) + g("AJ(!", -179, -164) + "se"](i);
  }
  async [Ae(17, "AJ(!") + Ae(-8, "4#EG") + ee(0, -47, -60, -75, "8k3u")](i) {
    const t = await fetch("" + i + this[A(239, 170, 77, 144, "GzEC") + A(103, 257, 38, 148, "S^DI") + g(-764, "8k3u", -771, -667, -648) + g(-761, "tKWL", -758, -742, -776)][0]), e = t.ok ? 0 : 5850 + -5539 * 1 + 2 * -155;
    function A(a, x, I, C, r) {
      return Ae(C - 134, r);
    }
    function n(a, x, I, C, r) {
      return xA(a - 432, r, I - 881);
    }
    function g(a, x, I, C, r) {
      return ee(a - 39, x - 322, r - -662, C - 152, x);
    }
    return "" + i + this[g(-662, "tHZ)", -665, -786, -712) + n(904, 926, 880, 768, "S^DI") + A(156, 188, 14, 137, "830O") + n(941, 844, 916, 876, "*pXb")][e];
  }
  [JA("9RVW", 712, 599, 624) + NA(1069, 1042, 1051, "uU][") + "s"](i) {
    function t(e, A, n, g, a) {
      return xA(e - 248, a, A - 1079);
    }
    i[t(1153, 1112, 1070, 999, "B2)v") + "ch"]((e) => console[t(1044, 1050, 948, 963, "(mFu")](e));
  }
  [NA(1099, 1096, 1165, "Bv@e") + NA(923, 832, 1006, "9RVW") + xA(-232, "90j7", -111)](i) {
    function t(e, A, n, g, a) {
      return JA(a, A - 122, n - 232, n - -239);
    }
    i[t(426, 581, 464, 456, "8LjZ") + "ch"]((e) => console[t(383, 264, 350, 453, "GzEC")](e));
  }
  [NA(1118, 1228, 1226, "Bv@e") + Ae(-35, "a*K[")]() {
    function i(e, A, n, g, a) {
      return xA(e - 230, n, g - 69);
    }
    function t(e, A, n, g, a) {
      return JA(e, A - 241, n - 324, n - -945);
    }
    return window[i(19, 48, "Bv@e", 39) + t("2kLO", -332, -384)][i(113, 218, "tkGW", 137) + t("90j7", -323, -299)];
  }
  [NA(1142, 1219, 1253, "KLvn") + Ae(-3, "IKfJ") + Ae(49, "AJ(!")]() {
    function i(g, a, x, I, C) {
      return ee(g - 260, a - 215, I - -301, I - 398, C);
    }
    function t(g, a, x, I, C) {
      return xA(g - 88, I, g - -377);
    }
    function e(g, a, x, I, C) {
      return JA(I, a - 18, x - 353, x - 212);
    }
    function A(g, a, x, I, C) {
      return JA(x, a - 368, x - 273, a - -659);
    }
    function n(g, a, x, I, C) {
      return xA(g - 202, I, x - -92);
    }
    try {
      if (n(43, 96, -1, "yGRK", -45) === n(-150, -102, -220, "a*K[", -267)) {
        if (!this[A(65, -31, ")v$2", -128, -21) + "se"]) {
          if (t(-500, -582, -393, "RUmg", -471) !== A(-242, -129, "8k3u", -80, -88)) return _0x99ad67[i(-372, -555, -522, -440, ")v$2") + n(-61, -31, -120, "9RVW", -194)][i(-357, -155, -337, -242, "]T[M") + n(-37, -92, -45, "oK6m", -55)];
          throw new Si(t(-311, -312, -258, "AJ(!", -367) + e(741, 785, 736, "4#EG", 640) + A(91, 24, "a*K[", -88, 111) + e(697, 765, 723, "2kLO", 836) + ".");
        }
        if (!this[n(4, -79, -53, "vF*x", 6) + n(-105, -95, -152, "5W]s", -226) + "d"][t(-514, -457, -513, "KLvn", -624) + n(-116, -156, -187, "9RVW", -91) + e(896, 810, 824, "S^DI", 711) + "ed"]()) {
          if (n(-78, -147, -42, "GYpa", 76) === i(-366, -316, -156, -271, "5W]s")) throw new Si(e(816, 943, 828, "8k3u", 890) + n(-102, -206, -223, "oO1s", -147) + n(-325, -274, -226, "b#ON", -341) + e(705, 650, 744, "GYpa", 667) + ".");
          _0x22285c[n(-66, -67, -137, "oK6m", -135) + "ch"]((g) => _0x3698bc[i(-335, -239, -389, -292, "4#EG")](g));
        }
        this[e(758, 918, 876, "qLZm", 917) + t(-393, -427, -406, "op^)", -452)] = new da(KQ(this[t(-305, -394, -248, "4#EG", -356) + "se"], this[n(11, -67, -74, "b]wX", 31) + A(10, -82, "(mFu", 4, 25)]())), this[t(-477, -525, -414, "[j&h", -391) + n(-19, -3, -25, "9RVW", 80) + "s"](this[e(761, 741, 754, "XJJZ", 723) + i(-336, -370, -434, -335, "op^)")][A(-20, -68, "4#EG", 48, -161) + "s"]), this[i(-403, -432, -270, -378, "yGRK") + A(-180, -121, "zDDQ", -207, -200) + i(-556, -372, -472, -436, "GYpa")](this[t(-510, -396, -622, "GYpa", -429) + e(798, 872, 798, "[j&h", 727)][i(-374, -331, -310, -422, ")v$2") + e(685, 717, 800, "gIaR", 786)]);
      } else throw new _0x157a81(e(860, 1e3, 912, "a*K[", 930) + t(-353, -416, -290, "f@E4", -403) + t(-403, -461, -313, "i#w&", -378) + n(-163, -97, -178, "oO1s", -157) + ".");
    } catch (g) {
      if (n(67, -52, -28, "oK6m") === t(-432, -459, -316, "Bv@e")) {
        if (g instanceof Si) n(-92, -11, -107, "b#ON") !== i(-418, -411, -456, -460, "90j7") ? _0x3da010[n(-147, -147, -39, "AJ(!")]() : g[n(27, -105, -16, "8LjZ")]();
        else if (g instanceof Error) {
          if (A(-87, -46, "MC4w") !== t(-383, -476, -422, "tHZ)")) return;
          console[n(-213, -172, -183, "op^)")](g);
        }
        const a = {};
        a[i(-236, -253, -309, -226, "8k3u") + A(-230, -177, "GYpa")] = !1, a[n(-77, -207, -183, "op^)") + "s"] = [], a[i(-427, -453, -249, -363, "zDDQ") + t(-465, -552, -509, "a@7M")] = [], a[e(1006, 792, 900, "Yzrg") + e(717, 715, 728, "*pXb") + i(-351, -316, -438, -367, "8k3u")] = void (-1 * -1296 + -483 * 13 + -3 * -1661), a[i(-468, -345, -356, -467, "qLZm")] = function() {
        }, a[t(-368, -464, -445, "IKfJ") + i(-303, -331, -321, -423, "zDDQ")] = "", this[i(-423, -327, -448, -340, "8LjZ") + A(36, -25, "XJJZ")] = new da(a);
      } else {
        _0x1acf7c instanceof _0x5e75ad && _0x104429[A(-56, -54, "55Hy") + i(-380, -442, -509, -431, "XJJZ")](_0x187fb0);
        return;
      }
    }
  }
  [ee(15, 15, -85, -207, "MC4w") + JA("tHZ)", 716, 797, 687) + NA(927, 988, 986, "Bv@e") + "t"]() {
    function i(e, A, n, g, a) {
      return NA(A - 167, A - 148, n - 117, g);
    }
    function t(e, A, n, g, a) {
      return Ae(a - 873, e);
    }
    return this[t("9S[)", 925, 971, 896, 888) + i(1358, 1263, 1246, "oK6m")];
  }
  [xA(-37, "gIaR", -82) + Ae(51, "4#EG") + NA(1023, 972, 1133, "tKWL")]() {
    var g, a;
    function i(x, I, C, r, E) {
      return xA(x - 55, r, x - 83);
    }
    function t(x, I, C, r, E) {
      return JA(I, I - 63, C - 255, C - -728);
    }
    function e(x, I, C, r, E) {
      return JA(I, I - 265, C - 298, x - -1072);
    }
    function A(x, I, C, r, E) {
      return xA(x - 340, E, C - -625);
    }
    function n(x, I, C, r, E) {
      return NA(r - -496, I - 170, C - 190, I);
    }
    if (!this[e(-474, "S^DI", -488) + "se"]) {
      if (e(-562, "X0RL", -537) === e(-499, "KLvn", -470)) return;
      _0x587a4c[t(-235, "B2)v", -214) + n(470, "8LjZ", 534, 499)](_0x2b39f4);
    }
    try {
      if (n(481, "830O", 471, 561, 529) === e(-477, "VUoF", -452, -578, -386)) {
        const x = JSON[i(-4, -101, -71, "a*K[", -12)](this[e(-573, "X0RL", -548, -463, -645) + "se"]);
        return (g = x == null ? void 0 : x[e(-450, "f@E4", -531, -526, -503) + n(545, "5W]s", 363, 433, 433)]) == null ? void 0 : g[e(-516, "]T[M", -411, -408, -546) + e(-582, "tKWL", -485, -473, -597)];
      } else {
        const x = _0x4c4de2[n(673, "]T[M", 637, 570, 510)](this[n(508, "uU][", 527, 416, 378) + "se"]);
        return (a = x == null ? void 0 : x[e(-404, "AJ(!", -333, -448, -308) + n(316, "AJ(!", 335, 434, 410)]) == null ? void 0 : a[A(-833, -812, -760, -738, "(mFu") + A(-729, -705, -733, -764, ")v$2")];
      }
    } catch (x) {
      if (t(-117, "RUmg", -55) !== n(530, "a*K[", 493, 559)) {
        if (x instanceof Error) {
          if (A(-783, -649, -696, -665, "XJJZ") === t(-115, "*fQH", -193)) throw new _0xf84b03(A(-605, -754, -702, -596, "yGRK") + n(444, "SpPa", 398, 506) + A(-594, -529, -571, -647, "yGRK") + i(113, 199, 98, "P49]") + ".");
          L[A(-811, -687, -690, -657, "[j&h") + t(-129, "tKWL", -117)](x);
        }
        return;
      } else return this[e(-570, "yGRK", -658) + t(-193, "op^)", -136)];
    }
  }
}
const jo = class jo extends ZQ {
  static getInstance() {
    if (!this._instance) {
      const i = new qQ();
      this._instance = new jo(i);
    }
    return this._instance;
  }
};
b(jo, "_instance");
let wn = jo;
const VQ = ({ children: o }) => {
  const i = zA(null);
  return lB(i, re.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D($C, { ref: i, children: o });
}, _Q = ({ cameraOptions: o }) => o ? /* @__PURE__ */ D(qC, { target: o.styleTarget, children: /* @__PURE__ */ D(
  oB,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: wn.getInstance(),
    children: /* @__PURE__ */ D(gB, { analytics: UQ, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ D(
      xc,
      {
        value: MQ({
          onError: o.onError
        }),
        children: /* @__PURE__ */ D(bx, { children: /* @__PURE__ */ D(RQ, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ D(VQ, { children: /* @__PURE__ */ D(FQ, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
or(_Q, "x-dot-document-auto-capture", ["cameraOptions"]);
