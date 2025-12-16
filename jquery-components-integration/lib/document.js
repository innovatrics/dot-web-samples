var T0 = Object.defineProperty;
var ha = (i) => {
  throw TypeError(i);
};
var P0 = (i, n, t) => n in i ? T0(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var y = (i, n, t) => P0(i, typeof n != "symbol" ? n + "" : n, t), pa = (i, n, t) => n.has(i) || ha("Cannot " + t);
var m = (i, n, t) => (pa(i, n, "read from private field"), t ? t.call(i) : n.get(i)), O = (i, n, t) => n.has(i) ? ha("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), M = (i, n, t, e) => (pa(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Oo, v, gI, II, ot, ya, sI, cI, CI, zr, ar, gr, BI, fo = {}, QI = [], H0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Jo = Array.isArray;
function Qe(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Xr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function GA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 1 * 939 + 5601 + -7 * 934 && (r.children = arguments.length > 223 * -35 + -3863 + 11671 ? Oo.call(arguments, -644 * 7 + -5 * 1 + 4515) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return Bo(i, r, e, A, null);
}
function Bo(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++gI, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && v.vnode != null && v.vnode(r), r;
}
function K0() {
  var i = {};
  return i.current = null, i;
}
function KA(i) {
  return i.children;
}
function XA(i, n) {
  this.props = i, this.context = n;
}
function Ut(i, n) {
  if (n == null) return i.__ ? Ut(i.__, i.__i + (-4679 + -13 * -360)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Ut(i) : null;
}
function EI(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -9 * 443 + -6352 + 10339; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return EI(i);
  }
}
function Ir(i) {
  (!i.__d && (i.__d = !0) && ot.push(i) && !wn.__r++ || ya != v.debounceRendering) && ((ya = v.debounceRendering) || sI)(wn);
}
function wn() {
  for (var i, n, t, e, A, o, r, a = 7976 + -319 * 25; ot.length; ) ot.length > a && ot.sort(cI), i = ot.shift(), a = ot.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Qe({}, e)).__v = e.__v + (3692 * 2 + -3676 * 2 + -31), v.vnode && v.vnode(t), $r(n.__P, t, e, n.__n, n.__P.namespaceURI, -7513 + -2450 * 1 + -1 * -9995 & e.__u ? [A] : null, o, A ?? Ut(e), !!(267 + 1 * -1427 + 1192 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, lI(o, t, r), t.__e != A && EI(t)));
  wn.__r = -1 * 479 + -7040 + 7519;
}
function xI(i, n, t, e, A, o, r, a, g, I, B) {
  var s, E, C, x, d, l, Q = e && e.__k || QI, f = n.length;
  for (g = j0(t, n, Q, g, f), s = 9567 + -3189 * 3; s < f; s++) (C = t.__k[s]) != null && (E = C.__i == -1 ? fo : Q[C.__i] || fo, C.__i = s, l = $r(i, C, E, A, o, r, a, g, I, B), x = C.__e, C.ref && E.ref != C.ref && (E.ref && Aa(E.ref, null, C), B.push(C.ref, C.__c || x, C)), d == null && x != null && (d = x), -4272 + -1 * -4276 & C.__u || E.__k === C.__k ? g = dI(C, g, i) : typeof C.type == "function" && l !== void 0 ? g = l : x && (g = x.nextSibling), C.__u &= -7);
  return t.__e = d, g;
}
function j0(i, n, t, e, A) {
  var o, r, a, g, I, B = t.length, s = B, E = 0;
  for (i.__k = new Array(A), o = 0; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (g = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Bo(null, r, null, null, null) : Jo(r) ? Bo(KA, { children: r }, null, null, null) : r.constructor == null && r.__b > -5988 + 2101 * 1 + 3887 ? Bo(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (9340 + -74 * 1 + -9265), a = null, (I = r.__i = _0(r, t, g, s)) != -1 && (s--, (a = t[I]) && (a.__u |= 2)), a == null || a.__v == null ? (I == -1 && (A > B ? E-- : A < B && E++), typeof r.type != "function" && (r.__u |= 2439 + 1 * -2321 + -19 * 6)) : I != g && (I == g - (-9916 * 1 + -9449 + 19366) ? E-- : I == g + (-1574 * 1 + -7024 * 1 + 8599 * 1) ? E++ : (I > g ? E-- : E++, r.__u |= 823 * -6 + -53 * -143 + 2637 * -1))) : i.__k[o] = null;
  if (s)
    for (o = -25 * -188 + 458 * 5 + 1398 * -5; o < B; o++) (a = t[o]) != null && 683 * -1 + -5864 + 6547 * 1 == (133 * -4 + -1 * -5291 + -4757 & a.__u) && (a.__e == e && (e = Ut(a)), fI(a, a));
  return e;
}
function dI(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 2693 + 2693 * -1; e && A < e.length; A++) e[A] && (e[A].__ = i, n = dI(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Ut(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function Ne(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Jo(i) ? i.some(function(t) {
    Ne(t, n);
  }) : n.push(i)), n;
}
function _0(i, n, t, e) {
  var A, o, r = i.key, a = i.type, g = n[t];
  if (g === null && i.key == null || g && r == g.key && a == g.type && -4193 + -599 * -7 == (-55 * 179 + 5140 + 4707 & g.__u)) return t;
  if (e > (g != null && (-228 * 19 + -1573 * -1 + 2761 & g.__u) == 0 ? 1237 * -2 + 203 + -284 * -8 : -1768 + -1 * -6746 + 19 * -262)) for (A = t - (1 * 9609 + -8 * 870 + 1 * -2648), o = t + (171 * 48 + 444 + -211 * 41); A >= -2 * 2991 + -9221 + 23 * 661 || o < n.length; ) {
    if (A >= -1 * 302 + 2 * 804 + 1306 * -1) {
      if ((g = n[A]) && 4901 + 377 * -13 == (-26 * -60 + 50 * 123 + -7708 & g.__u) && r == g.key && a == g.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((g = n[o]) && (8034 + -15 * -410 + 7091 * -2 & g.__u) == 0 && r == g.key && a == g.type) return o;
      o++;
    }
  }
  return -1;
}
function ma(i, n, t) {
  n[-1682 + -1 * -5183 + -3501] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || H0.test(n) ? t : t + "px";
}
function _o(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || ma(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || ma(i.style, n, t[n]);
    }
  else if (n[-1 * -9005 + 4456 * -2 + 1 * -93] == "o" && n[1] == "n") o = n != (n = n.replace(CI, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(-2 * 668 + 13 * -147 + 3249) : n.slice(1 * 31 + -2 * 482 + 935), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = zr, i.addEventListener(n, o ? gr : ar, o)) : i.removeEventListener(n, o ? gr : ar, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[9 * 545 + 1649 + 131 * -50] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 7974 + -1 * 7871 + -102 == t ? "" : t));
  }
}
function Da(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = zr++;
      else if (n.t < t.u) return;
      return t(v.event ? v.event(n) : n);
    }
  };
}
function $r(i, n, t, e, A, o, r, a, g, I) {
  var B, s, E, C, x, d, l, Q, f, p, k, b, G, w, T, X, MA, yA = n.type;
  if (n.constructor != null) return null;
  -199 * -9 + 2551 + -4214 & t.__u && (g = !!(163 * 4 + -60 * -47 + -3440 & t.__u), o = [a = n.__e = t.__e]), (B = v.__b) && B(n);
  A: if (typeof yA == "function") try {
    if (Q = n.props, f = "prototype" in yA && yA.prototype.render, p = (B = yA.contextType) && e[B.__c], k = B ? p ? p.props.value : B.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (f ? n.__c = s = new yA(Q, k) : (n.__c = s = new XA(Q, k), s.constructor = yA, s.render = V0), p && p.sub(s), s.props = Q, s.state || (s.state = {}), s.context = k, s.__n = e, E = s.__d = !(-1 * -1501 + 3597 + -5098), s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && yA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, yA.getDerivedStateFromProps(Q, s.__s))), C = s.props, x = s.state, s.__v = n, E) f && yA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (f && yA.getDerivedStateFromProps == null && Q !== C && s.componentWillReceiveProps != null && s.componentWillReceiveProps(Q, k), !s.__e && s.shouldComponentUpdate != null && !(-13e3 + -1 * -13001) === s.shouldComponentUpdate(Q, s.__s, k) || n.__v == t.__v) {
        for (n.__v != t.__v && (s.props = Q, s.state = s.__s, s.__d = !(4014 + 4781 * 2 + -13575)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(WA) {
          WA && (WA.__ = n);
        }), b = -331 * 12 + -500 + -13 * -344; b < s._sb.length; b++) s.__h.push(s._sb[b]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(Q, s.__s, k), f && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(C, x, d);
      });
    }
    if (s.context = k, s.props = Q, s.__P = i, s.__e = !(6064 + -141 * 43), G = v.__r, w = -6801 + -1 * -107 + -1 * -6694, f) {
      for (s.state = s.__s, s.__d = !(-2571 + -1 * -2572), G && G(n), B = s.render(s.props, s.state, s.context), T = -12173 + -12173 * -1; T < s._sb.length; T++) s.__h.push(s._sb[T]);
      s._sb = [];
    } else do
      s.__d = !(6631 * -1 + 41 * -123 + 467 * 25), G && G(n), B = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++w < 7 * -731 + -3 * -1388 + 978);
    s.state = s.__s, s.getChildContext != null && (e = Qe(Qe({}, e), s.getChildContext())), f && !E && s.getSnapshotBeforeUpdate != null && (d = s.getSnapshotBeforeUpdate(C, x)), X = B, B != null && B.type === KA && B.key == null && (X = uI(B.props.children)), a = xI(i, Jo(X) ? X : [X], n, t, e, A, o, r, a, g, I), s.base = n.__e, n.__u &= -(-7916 * 1 + -7438 + 1 * 15515), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (WA) {
    if (n.__v = null, g || o != null)
      if (WA.then) {
        for (n.__u |= g ? 526 + 1 * 1891 + -2257 : -39 * -13 + -541 * 7 + -48 * -71; a && -313 * 2 + -9302 + 9936 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else
        for (MA = o.length; MA--; ) Xr(o[MA]);
    else n.__e = t.__e, n.__k = t.__k;
    v.__e(WA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = q0(t.__e, n, t, e, A, o, r, g, I);
  return (B = v.diffed) && B(n), -1153 * -3 + -8969 + 5638 & n.__u ? void 0 : a;
}
function lI(i, n, t) {
  for (var e = 0; e < t.length; e++) Aa(t[e], t[++e], t[++e]);
  v.__c && v.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      v.__e(o, A.__v);
    }
  });
}
function uI(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -4083 + -1361 * -3 ? i : Jo(i) ? i.map(uI) : Qe({}, i);
}
function q0(i, n, t, e, A, o, r, a, g) {
  var I, B, s, E, C, x, d, l = t.props, Q = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = -3 * -818 + -61 * -55 + -37 * 157; I < o.length; I++) if ((C = o[I]) && "setAttribute" in C == !!f && (f ? C.localName == f : C.nodeType == 3)) {
      i = C, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(Q);
    i = document.createElementNS(A, f, Q.is && Q), a && (v.__m && v.__m(n, o), a = !1), o = null;
  }
  if (f == null) l === Q || a && i.data == Q || (i.data = Q);
  else {
    if (o = o && Oo.call(i.childNodes), l = t.props || fo, !a && o != null)
      for (l = {}, I = 19 * 321 + 37 * -117 + -1770; I < i.attributes.length; I++) l[(C = i.attributes[I]).name] = C.value;
    for (I in l) if (C = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = C;
      else if (!(I in Q)) {
        if (I == "value" && "defaultValue" in Q || I == "checked" && "defaultChecked" in Q) continue;
        _o(i, I, null, C, A);
      }
    }
    for (I in Q) C = Q[I], I == "children" ? E = C : I == "dangerouslySetInnerHTML" ? B = C : I == "value" ? x = C : I == "checked" ? d = C : a && typeof C != "function" || l[I] === C || _o(i, I, C, l[I], A);
    if (B) a || s && (B.__html == s.__html || B.__html == i.innerHTML) || (i.innerHTML = B.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), xI(n.type == "template" ? i.content : i, Jo(E) ? E : [E], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-1387 + -19 * -73] : t.__k && Ut(t, 6819 + -8402 * -1 + -15221), a, g), o != null)
      for (I = o.length; I--; ) Xr(o[I]);
    a || (I = "value", f == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || f == "progress" && !x || f == "option" && x != l[I]) && _o(i, I, x, l[I], A), I = "checked", d != null && d != i[I] && _o(i, I, d, l[I], A));
  }
  return i;
}
function Aa(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    v.__e(A, t);
  }
}
function fI(i, n, t) {
  var e, A;
  if (v.unmount && v.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Aa(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      v.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 5 * 727 + -7 * -166 + -13 * 369; A < e.length; A++) e[A] && fI(e[A], n, t || typeof i.type != "function");
  t || Xr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function V0(i, n, t) {
  return this.constructor(i, t);
}
function Ke(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), v.__ && v.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], $r(n, i = (!e && t || n).__k = GA(KA, null, [i]), A || fo, fo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Oo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), lI(o, i, r);
}
function ea(i, n) {
  Ke(i, n, ea);
}
function ta(i, n, t) {
  var e, A, o, r, a = Qe({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > 4366 + 2067 * 1 + 1 * -6431 && (a.children = arguments.length > 3 ? Oo.call(arguments, -38 * 177 + -506 * 17 + 15330) : t), Bo(i.type, a, e || i.key, A || i.ref, null);
}
function _e(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, Ir(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + BI++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Oo = QI.slice, v = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, gI = -722 + 722 * 1, II = function(i) {
  return i != null && i.constructor == null;
}, XA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Qe({}, this.state), typeof i == "function" && (i = i(Qe({}, t), this.props)), i && Qe(t, i), i != null && this.__v && (n && this._sb.push(n), Ir(this));
}, XA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Ir(this));
}, XA.prototype.render = KA, ot = [], sI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, cI = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, wn.__r = 8442 + -134 * 63, CI = /(PointerCapture)$|Capture$/i, zr = -1 * 2217 + 8850 + -6633, ar = Da(!1), gr = Da(!0), BI = 0;
function oa() {
  return (oa = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 4951 + 493 * 18 + -13824; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var Z0 = ["context", "children"];
function z0(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, a = {}, g = Object.keys(e);
    for (r = 5814 + 177 * -41 + -1443 * -1; r < g.length; r++) A.indexOf(o = g[r]) >= -4714 + -1 * -7892 + -3178 || (a[o] = e[o]);
    return a;
  }(i, Z0);
  return ta(n, t);
}
function X0() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = GA(z0, oa({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (e.nodeType === 3) return e.data;
    if (6657 + 433 * -13 + -13 * 79 !== e.nodeType) return null;
    var o = [], r = {}, a = 485 + -5017 * 1 + 4532, g = e.attributes, I = e.childNodes;
    for (a = g.length; a--; ) g[a].name !== "slot" && (r[g[a].name] = g[a].value, r[hI(g[a].name)] = g[a].value);
    for (a = I.length; a--; ) {
      var B = t(I[a], null), s = I[a].slot;
      s ? r[s] = GA(wa, { name: s }, B) : o[a] = B;
    }
    var E = A ? GA(wa, null, o) : o;
    return GA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ea : Ke)(this._vdom, this._root);
}
function hI(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function $0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[hI(i)] = t, this._vdom = ta(this._vdom, e), Ke(this._vdom, this._root);
  }
}
function Ac() {
  Ke(this._vdom = null, this._root);
}
function wa(i, n) {
  var t = this;
  return GA("slot", oa({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function ec(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = X0, A.prototype.attributeChangedCallback = $0, A.prototype.disconnectedCallback = Ac, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var tc = -1 * -3845 + 1 * 5389 + -9234;
function D(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var I = {};
  I.type = i, I.props = g, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --tc, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var B = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return v.vnode && v.vnode(B), B;
}
var vA = function() {
  return vA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, vA.apply(this, arguments);
};
function Yt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function oc(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var nc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ic = oc(function(i) {
  return nc.test(i) || i.charCodeAt(904 + 1 * -2017 + 1113) === 6033 + -13 * 705 + 3243 && i.charCodeAt(5367 + 1 * -5366) === -16 * -218 + 37 * 40 + -4858 && i.charCodeAt(2) < 91;
}), je, H, ki, ba, Tt = -3 * -462 + -8530 + 7144, pI = [], K = v, ka = K.__b, Sa = K.__r, Ga = K.diffed, Na = K.__c, Ra = K.unmount, Fa = K.__;
function Zt(i, n) {
  K.__h && K.__h(H, i, Tt || n), Tt = -7440 + 2 * 3609 + 222;
  var t = {};
  t.__ = [], t.__h = [];
  var e = H.__H || (H.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function xA(i) {
  return Tt = 3303 + 254 * -13, na(DI, i);
}
function na(i, n, t) {
  var e = Zt(je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : DI(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], I = e.t(g, a);
    g !== I && (e.__N = [I, e.__[-4824 + 18 * -155 + -1523 * -5]], e.__c.setState({}));
  }], e.__c = H, !H.__f)) {
    var A = function(a, g, I) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (B.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, a, g, I);
      var s = e.__c.props !== a;
      return B.forEach(function(E) {
        if (E.__N) {
          var C = E.__[0];
          E.__ = E.__N, E.__N = void 0, C !== E.__[0] && (s = !0);
        }
      }), o && o.call(this, a, g, I) || s;
    };
    H.__f = !0;
    var o = H.shouldComponentUpdate, r = H.componentWillUpdate;
    H.componentWillUpdate = function(a, g, I) {
      if (this.__e) {
        var B = o;
        o = void 0, A(a, g, I), o = B;
      }
      r && r.call(this, a, g, I);
    }, H.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function q(i, n) {
  var t = Zt(je++, 3);
  !K.__s && ia(t.__H, n) && (t.__ = i, t.u = n, H.__H.__h.push(t));
}
function zt(i, n) {
  var t = Zt(je++, 4);
  !K.__s && ia(t.__H, n) && (t.__ = i, t.u = n, H.__h.push(t));
}
function ie(i) {
  return Tt = 11 * 463 + -7199 * -1 + -1117 * 11, dA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function yI(i, n, t) {
  Tt = 13 + 7 * -1, zt(function() {
    if (typeof i == "function") {
      var e = i(n());
      return function() {
        i(null), e && typeof e == "function" && e();
      };
    }
    if (i) return i.current = n(), function() {
      return i.current = null;
    };
  }, t == null ? t : t.concat(i));
}
function dA(i, n) {
  var t = Zt(je++, 7);
  return ia(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Re(i, n) {
  return Tt = 2 * -1228 + 5503 + 3039 * -1, dA(function() {
    return i;
  }, n);
}
function le(i) {
  var n = H.context[i.__c], t = Zt(je++, -4564 + 7897 * 1 + 1 * -3324);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(H)), n.props.value) : i.__;
}
function bn(i, n) {
  K.useDebugValue && K.useDebugValue(n ? n(i) : i);
}
function mI() {
  var i = Zt(je++, 11);
  if (!i.__) {
    for (var n = H.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [1 * -2789 + 8452 + -7 * 809, 79 * 10 + -6068 + -26 * -203]);
    i.__ = "P" + t[568 + -497 * 15 + -97 * -71] + "-" + t[1]++;
  }
  return i.__;
}
function rc() {
  for (var i; i = pI.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(an), i.__H.__h.forEach(sr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], K.__e(n, i.__v);
  }
}
K.__b = function(i) {
  H = null, ka && ka(i);
}, K.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Fa && Fa(i, n);
}, K.__r = function(i) {
  Sa && Sa(i), je = -7767 * -1 + -6207 + -1560;
  var n = (H = i.__c).__H;
  n && (ki === H ? (n.__h = [], H.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(an), n.__h.forEach(sr), n.__h = [], je = -881 + -1 * -881)), ki = H;
}, K.diffed = function(i) {
  Ga && Ga(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (6313 + -56 * 18 + 52 * -102 !== pI.push(n) && ba === K.requestAnimationFrame || ((ba = K.requestAnimationFrame) || ac)(rc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), ki = H = null;
}, K.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(an), t.__h = t.__h.filter(function(e) {
        return !e.__ || sr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], K.__e(e, t.__v);
    }
  }), Na && Na(i, n);
}, K.unmount = function(i) {
  Ra && Ra(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      an(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && K.__e(n, t.__v));
};
var va = typeof requestAnimationFrame == "function";
function ac(i) {
  var n, t = function() {
    clearTimeout(e), va && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  va && (n = requestAnimationFrame(t));
}
function an(i) {
  var n = H, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), H = n;
}
function sr(i) {
  var n = H;
  i.__c = i.__(), H = n;
}
function ia(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function DI(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function wI(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function cr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function bI(i, n) {
  var t = n(), e = xA({ t: { __: t, u: n } }), A = e[9054 + 2 * -1693 + -5668].t, o = e[1];
  return zt(function() {
    A.__ = t, A.u = n, Si(A) && o({ t: A });
  }, [i, t, n]), q(function() {
    return Si(A) && o({ t: A }), i(function() {
      Si(A) && o({ t: A });
    });
  }, [i]), t;
}
function Si(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (12951 + -3 * 4317 !== n || (-17554 + -5 * -3511) / n == (12 * -759 + 557 * 2 + 1599 * 5) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function kI(i) {
  i();
}
function SI(i) {
  return i;
}
function GI() {
  return [!1, kI];
}
var NI = zt;
function Cr(i, n) {
  this.props = i, this.context = n;
}
function gc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : cr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, GA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(Cr.prototype = new XA()).isPureReactComponent = !0, Cr.prototype.shouldComponentUpdate = function(i, n) {
  return cr(this.props, i) || cr(this.state, n);
};
var Ma = v.__b;
v.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Ma && Ma(i);
};
var Ic = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -6079 * -1 + -3514 + -1 * -1346;
function RI(i) {
  function n(t) {
    var e = wI({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Ic, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Wa = function(i, n) {
  return i == null ? null : Ne(Ne(i).map(n));
}, sc = { map: Wa, forEach: Wa, count: function(i) {
  return i ? Ne(i).length : -16 * -566 + 8517 + -17573;
}, only: function(i) {
  var n = Ne(i);
  if (33 * 138 + 8664 + -13217 !== n.length) throw "Children.only";
  return n[-8 * 587 + -30 * -13 + 4306];
}, toArray: Ne }, cc = v.__e;
v.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  cc(i, n, t, e);
};
var La = v.unmount;
function FI(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = wI({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return FI(e, n, t);
  })), i;
}
function vI(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return vI(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function gn() {
  this.__u = -2 * 1335 + 4997 + 13 * -179, this.o = null, this.__b = null;
}
function MI(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Cc(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return GA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function ro() {
  this.i = null, this.l = null;
}
v.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -2306 + -29 * -27 + -311 * -5 & i.__u && (i.type = null), La && La(i);
}, (gn.prototype = new XA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = MI(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[8 * 431 + 1 * 8038 + -1 * 11486] = vI(g, g.__c.__P, g.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 9457 * -1 + -522 * 1 + 10011 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-2 * 731 + 3114 + -1652] }), i.then(r, r);
}, gn.prototype.componentWillUnmount = function() {
  this.o = [];
}, gn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[529 * -6 + 2879 + -295 * -1].__c;
      this.__v.__k[3264 + 1 * 2972 + -4 * 1559] = FI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && GA(KA, null, i.fallback);
  return A && (A.__u &= -33), [GA(KA, null, n.__a ? null : i.children), A];
};
var Oa = function(i, n, t) {
  if (++t[-4313 * 1 + 1123 * -1 + -1 * -5437] === t[1909 * -1 + 190 + -191 * -9] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-1097 + 1 * 1097] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -3232 + -2 * -934 + 1367; ) t.pop()();
    if (t[-8 * -694 + 687 + -6238] < t[-677 * 11 + -5686 + 13133]) break;
    i.i = t = t[2010 + -2008 * 1];
  }
};
function Bc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Qc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Ke(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, appendChild: function(r) {
      this.childNodes.push(r), n.h.appendChild(r);
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), n.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 4925 + 2 * -2462, 9166 + 8238 * 1 + -17403), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Ke(GA(Bc, o, i.__v), n.v);
}
function Ec(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = GA(Qc, t);
  return e.containerInfo = n, e;
}
(ro.prototype = new XA()).__a = function(i) {
  var n = this, t = MI(n.__v), e = n.l.get(i);
  return e[203 * 16 + 3 * 3085 + -12503]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Oa(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, ro.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Ne(i.children);
  i.revealOrder && i.revealOrder[-7757 * 1 + -7972 + 15729] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-2 * 487 + 8 * 526 + -3233, -7206 + -1201 * -6, this.i]);
  return i.children;
}, ro.prototype.componentDidUpdate = ro.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Oa(i, t, n);
  });
};
var WI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -2213 * 42 + -26564 + 25659 * 7, xc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, dc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, lc = /[A-Z0-9]/g, uc = typeof document < "u", fc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function hc(i, n, t) {
  return n.__k == null && (n.textContent = ""), Ke(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function pc(i, n, t) {
  return ea(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
XA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(XA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Ja = v.event;
function yc() {
}
function mc() {
  return this.cancelBubble;
}
function Dc() {
  return this.defaultPrevented;
}
v.event = function(i) {
  return Ja && (i = Ja(i)), i.persist = yc, i.isPropagationStopped = mc, i.isDefaultPrevented = Dc, i.nativeEvent = i;
};
var In = {};
In.enumerable = !1, In.configurable = !0, In.get = function() {
  return this.class;
};
var ra, wc = In, Ua = v.vnode;
v.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || uc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[0] === "o" && g[-65 * -71 + 6122 * -1 + 52 * 29] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || fc(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : dc.test(r) && (r = g) : g = r = "oninput" : o && xc.test(r) ? r = r.replace(lc, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Ne(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Ne(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", wc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = WI, Ua && Ua(i);
};
var Ya = v.__r;
v.__r = function(i) {
  Ya && Ya(i), ra = i.__c;
};
var Ta = v.diffed;
v.diffed = function(i) {
  Ta && Ta(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), ra = null;
};
var BA = {};
BA.readContext = function(i) {
  return ra.__n[i.__c].props.value;
}, BA.useCallback = Re, BA.useContext = le, BA.useDebugValue = bn, BA.useDeferredValue = SI, BA.useEffect = q, BA.useId = mI, BA.useImperativeHandle = yI, BA.useInsertionEffect = NI, BA.useLayoutEffect = zt, BA.useMemo = dA, BA.useReducer = na, BA.useRef = ie, BA.useState = xA, BA.useSyncExternalStore = bI, BA.useTransition = GI;
var LI = {};
LI.current = BA;
var OI = {};
OI.ReactCurrentDispatcher = LI;
var bc = OI;
function kc(i) {
  return GA.bind(null, i);
}
function Bi(i) {
  return !!i && i.$$typeof === WI;
}
function Sc(i) {
  return Bi(i) && i.type === KA;
}
function Gc(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function Nc(i) {
  return Bi(i) ? ta.apply(null, arguments) : i;
}
function Rc(i) {
  return !!i.__k && (Ke(null, i), !0);
}
function Fc(i) {
  return i && (i.base || 2 * -1 + 1 * -5355 + 19 * 282 === i.nodeType && i) || null;
}
var vc = function(i, n) {
  return i(n);
}, Mc = function(i, n) {
  return i(n);
}, Wc = KA, Lc = Bi, dt = { useState: xA, useId: mI, useReducer: na, useEffect: q, useLayoutEffect: zt, useInsertionEffect: NI, useTransition: GI, useDeferredValue: SI, useSyncExternalStore: bI, startTransition: kI, useRef: ie, useImperativeHandle: yI, useMemo: dA, useCallback: Re, useContext: le, useDebugValue: bn, version: "18.3.1", Children: sc, render: hc, hydrate: pc, unmountComponentAtNode: Rc, createPortal: Ec, createElement: GA, createContext: _e, createFactory: kc, cloneElement: Nc, createRef: K0, Fragment: KA, isValidElement: Bi, isElement: Lc, isFragment: Sc, isMemo: Gc, findDOMNode: Fc, Component: XA, PureComponent: Cr, memo: gc, forwardRef: RI, flushSync: Mc, unstable_batchedUpdates: vc, StrictMode: Wc, Suspense: gn, SuspenseList: ro, lazy: Cc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: bc };
function Oc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Gi, Pa;
function Jc() {
  return Pa || (Pa = 9196 + 2274 * 3 + -16017, Gi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), I = -1831 + 18 * -526 + 11299; I < r.length; I++) {
      var B = r[I];
      if (!g(B)) return !1;
      var s = n[B], E = t[B];
      if (o = e ? e.call(A, s, E, B) : void 0, o === !1 || o === void 0 && s !== E) return !1;
    }
    return !0;
  }), Gi;
}
var Uc = Jc();
const Yc = /* @__PURE__ */ Oc(Uc);
var P = "-ms-", Qo = "-moz-", U = "-webkit-", JI = "comm", Qi = "rule", aa = "decl", Tc = "@import", UI = "@keyframes", Pc = "@layer", YI = Math.abs, ga = String.fromCharCode, Br = Object.assign;
function Hc(i, n) {
  return iA(i, 3973 * 1 + -3152 + 821 * -1) ^ 17 * 174 + -1433 + -185 * 8 ? (((n << 2727 + -232 * -7 + 4349 * -1 ^ iA(i, 4 * -731 + -9978 + 12902)) << 2 ^ iA(i, -2560 + 97 * -57 + 4045 * 2)) << 1 * 3732 + -6061 + 2331 ^ iA(i, 947 * -1 + -7228 + 8177)) << -6364 * 1 + -4340 * -1 + 2026 ^ iA(i, 3) : -568 * 2 + 1 * 5812 + 1 * -4676;
}
function TI(i) {
  return i.trim();
}
function De(i, n) {
  return (i = n.exec(i)) ? i[-817 + 19 * 43] : i;
}
function W(i, n, t) {
  return i.replace(n, t);
}
function sn(i, n, t) {
  return i.indexOf(n, t);
}
function iA(i, n) {
  return i.charCodeAt(n) | -9040 + -1 * 321 + -9361 * -1;
}
function Pt(i, n, t) {
  return i.slice(n, t);
}
function Be(i) {
  return i.length;
}
function PI(i) {
  return i.length;
}
function ao(i, n) {
  return n.push(i), i;
}
function Kc(i, n) {
  return i.map(n).join("");
}
function Ha(i, n) {
  return i.filter(function(t) {
    return !De(t, n);
  });
}
var Ei = 4195 + 4 * 107 + 2 * -2311, Ht = -2580 * -1 + -651 + 1 * -1928, HI = -105 * 58 + -4623 + -3 * -3571, $A = -1698 + -1 * -1698, Z = 0, Xt = "";
function xi(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = Ei, g.column = Ht, g.length = r, g.return = "", g.siblings = a, g;
}
function Me(i, n) {
  return Br(xi("", null, null, "", null, null, 208 * -10 + -8534 + 10614, i.siblings), i, { length: -i.length }, n);
}
function yt(i) {
  for (; i.root; ) i = Me(i.root, { children: [i] });
  ao(i, i.siblings);
}
function jc() {
  return Z;
}
function _c() {
  return Z = $A > -7 * -795 + 7004 + -12569 ? iA(Xt, --$A) : 0, Ht--, Z === -277 * 29 + 2 * 472 + -31 * -229 && (Ht = 1 * 8607 + 9687 + -18293, Ei--), Z;
}
function ne() {
  return Z = $A < HI ? iA(Xt, $A++) : 4599 + 3 * 3236 + 251 * -57, Ht++, Z === -8223 + -1 * -2137 + -4 * -1524 && (Ht = -1 * 1117 + 5216 + -4098 * 1, Ei++), Z;
}
function Qt() {
  return iA(Xt, $A);
}
function cn() {
  return $A;
}
function di(i, n) {
  return Pt(Xt, i, n);
}
function Qr(i) {
  switch (i) {
    case 2 * -2447 + 2 * 3298 + -1702:
    case 8818 + -1 * 939 + 3935 * -2:
    case 10:
    case 9221 + 2302 * -4:
    case 3 * 1322 + -3879 + -55 * 1:
      return -8087 + -1 * -9592 + -1500;
    case 33:
    case -882 + 25 * 37:
    case 9421 * -1 + 8 * -419 + 12817:
    case -5379 + -1 * 583 + 6009:
    case 7031 * -1 + 335 * -1 + -1857 * -4:
    case -22 * -302 + 1527 + 1 * -8107:
    case 25 * -25 + -69 * -34 + 55 * -29:
    case -700 + -13 * 401 + 5972:
    case 9276 + 81 * -113:
    case 125:
      return -155 * -44 + -327 * -3 + -23 * 339;
    case 8394 + -521 * 16:
      return 3;
    case 34:
    case -4927 + 58 * -120 + 11926:
    case -9419 + 1051 * 9:
    case 5844 + -10 * 84 + -4913:
      return -9862 * -1 + 9051 * 1 + -18911 * 1;
    case 31 * -172 + 98 * 1 + 5275:
    case 2539 * 3 + 5 * 1671 + -3 * 5293:
      return 1;
  }
  return -4132 + -1 * -4132;
}
function qc(i) {
  return Ei = Ht = 5 * -416 + 317 + -84 * -21, HI = Be(Xt = i), $A = -20 * -168 + -5185 + -365 * -5, [];
}
function Vc(i) {
  return Xt = "", i;
}
function Ni(i) {
  return TI(di($A - 1, Er(i === -7385 * 1 + 91 * -109 + 17395 ? i + 2 : i === -983 + -1 * 1341 + -1182 * -2 ? i + (-1517 + -759 * -2) : i)));
}
function Zc(i) {
  for (; (Z = Qt()) && Z < 33; ) ne();
  return Qr(i) > -9677 * 1 + 3534 + -1229 * -5 || Qr(Z) > 2668 + -2 * -4174 + -11013 ? "" : " ";
}
function zc(i, n) {
  for (; --n && ne() && !(Z < -1 * 6397 + -49 * -139 + -366 || Z > 1831 + -2253 * 2 + -1 * -2777 || Z > 1 * 1103 + 2343 + -3389 && Z < 863 * -3 + 1203 + 1451 || Z > 70 && Z < -5244 + -34 * -85 + 817 * 3); ) ;
  return di(i, cn() + (n < 1 * -6469 + 2627 + 3848 && Qt() == 818 * 1 + 3249 + -4035 * 1 && ne() == -3074 * 1 + -191 + 21 * 157));
}
function Er(i) {
  for (; ne(); ) switch (Z) {
    case i:
      return $A;
    case -6165 + 6 * -795 + 10969:
    case 1 * -2677 + -4231 * -1 + -1515:
      i !== -1858 * 5 + 231 + 7 * 1299 && i !== 4416 + 1 * -4377 && Er(Z);
      break;
    case -354 + 2 * 197:
      i === 12921 + 1 * -12880 && Er(i);
      break;
    case -598 * -8 + -865 + -43 * 89:
      ne();
      break;
  }
  return $A;
}
function Xc(i, n) {
  for (; ne() && i + Z !== -850 + 5293 * -1 + 6190 + (209 * -23 + -9283 * 1 + 14100); ) if (i + Z === 5307 + -1 * -7415 + -20 * 634 + (151 * -1 + 2492 + -1 * 2299) && Qt() === 1565 * 5 + -121 + -7657) break;
  return "/*" + di(n, $A - (-411 * 19 + 831 + 6979)) + "*" + ga(i === -23 * 37 + -8 * 156 + 2146 ? i : ne());
}
function $c(i) {
  for (; !Qr(Qt()); ) ne();
  return di(i, $A);
}
function AC(i) {
  return Vc(Cn("", null, null, null, [""], i = qc(i), -1 * -2487 + 4150 + -6637, [-2 * -3098 + 7703 + 4633 * -3], i));
}
function Cn(i, n, t, e, A, o, r, a, g) {
  for (var I = 0, B = -21 * 475 + 5591 + 4384, s = r, E = 0, C = 0, x = -7893 + 3858 * -2 + 3 * 5203, d = 1, l = -4882 * 1 + -3452 + 8335, Q = 1 * -3195 + 10 * 615 + -211 * 14, f = 0, p = "", k = A, b = o, G = e, w = p; l; ) switch (x = f, f = ne()) {
    case -6610 + -9 * -481 + 11 * 211:
      if (x != -1 * -13 + 2257 * 1 + -2162 && iA(w, s - (-3 * -890 + 5510 * 1 + -8179)) == -1587 + 235 * 7) {
        sn(w += W(Ni(f), "&", "&\f"), "&\f", YI(I ? a[I - (25 * 226 + -2 * 4701 + 3753)] : 6148 * 1 + 4134 + -10282)) != -1 && (Q = -1);
        break;
      }
    case 1 * -2447 + -4104 + 3 * 2195:
    case 1 * -6797 + 5480 + 1356 * 1:
    case 6485 + -1 * -1038 + -7432:
      w += Ni(f);
      break;
    case 6803 + -5 * 1179 + -31 * 29:
    case -6205 * 1 + 5926 + -289 * -1:
    case -55 * 181 + -3 * -2591 + 2195:
    case -129 * -9 + 14 * -358 + 3883:
      w += Zc(x);
      break;
    case -23 * -409 + -137 * 45 + 175 * -18:
      w += zc(cn() - (7001 + 1363 * -7 + 2541), -1 * -9653 + 3 * -655 + -7681);
      continue;
    case -3683 + -1841 * 2 + -1853 * -4:
      switch (Qt()) {
        case 7625 + 1 * -7583:
        case -1 * 3873 + -2142 + 433 * 14:
          ao(eC(Xc(ne(), cn()), n, t, g), g);
          break;
        default:
          w += "/";
      }
      break;
    case (23 * 17 + 1 * -1028 + 760) * d:
      a[I++] = Be(w) * Q;
    case (-3727 * -1 + 1 * -4583 + -981 * -1) * d:
    case 1 * 9913 + -32 * 235 + 1 * -2334:
    case 0:
      switch (f) {
        case 8228 + 1 * -8228:
        case 2 * 4098 + -6522 + -1549:
          l = -7964 * 1 + -4099 + 3 * 4021;
        case -15 * 297 + 2463 + 2051 + B:
          Q == -1 && (w = W(w, /\f/g, "")), C > -9030 * 1 + 467 * -14 + 4 * 3892 && Be(w) - s && ao(C > 9 * 1055 + 3404 + -12867 ? ja(w + ";", e, t, s - (-8365 + -8366 * -1), g) : ja(W(w, " ", "") + ";", e, t, s - (-9 * 449 + 1 * -926 + 4969 * 1), g), g);
          break;
        case 3265 * -2 + -7565 + 14154:
          w += ";";
        default:
          if (ao(G = Ka(w, n, t, I, B, A, a, p, k = [], b = [], s, o), o), f === -5517 + -1 * -4929 + 237 * 3)
            if (B === 0) Cn(w, n, G, G, k, o, s, a, b);
            else switch (E === 99 && iA(w, 2699 + 671 * -2 + -1354) === 110 ? -1 * -1529 + 1 * 4959 + -6388 : E) {
              case -6747 * -1 + 3 * 1828 + -12131 * 1:
              case -10488 + -6 * -1766:
              case 8617 + -53 * -9 + 8985 * -1:
              case 7857 + -358 * -11 + -11680 * 1:
                Cn(i, G, G, e && ao(Ka(i, G, G, -905 + -55 * -106 + -4925, -625 + 156 * 40 + -5615, A, a, p, A, k = [], s, b), b), A, b, s, a, e ? k : b);
                break;
              default:
                Cn(w, G, G, G, [""], b, -854 * -7 + -6423 + -89 * -5, a, b);
            }
      }
      I = B = C = 4136 * 2 + 6793 + -655 * 23, d = Q = 562 * -7 + -3870 + -1115 * -7, p = w = "", s = r;
      break;
    case 2 * 4501 + -1408 * -2 + 20 * -588:
      s = 7 * -929 + 1187 + -5317 * -1 + Be(w), C = x;
    default:
      if (d < 1) {
        if (f == 31 * -107 + 2656 + 784) --d;
        else if (f == -9 * -394 + 2 * -4798 + 6175 && d++ == 9239 * 1 + 1 * -3483 + -2 * 2878 && _c() == 69 * -101 + 701 * -2 + -4248 * -2) continue;
      }
      switch (w += ga(f), f * d) {
        case -1 * -3998 + 1424 + -5384:
          Q = B > 9622 + -5466 * -1 + -15088 ? 1 : (w += "\f", -1);
          break;
        case -8778 + 13 * -478 + -3 * -5012:
          a[I++] = (Be(w) - (1 * -1208 + 5515 + 2 * -2153)) * Q, Q = -569 * 12 + -6055 * -1 + 86 * 9;
          break;
        case 9305 * 1 + -3230 + -6011:
          Qt() === 146 * -7 + 9947 + -8 * 1110 && (w += Ni(ne())), E = Qt(), B = s = Be(p = w += $c(cn())), f++;
          break;
        case -29 * -293 + -630 + 3911 * -2:
          x === 45 && Be(w) == 1 * -3319 + 2910 + -1 * -411 && (d = -218 * 26 + 9309 + 11 * -331);
      }
  }
  return o;
}
function Ka(i, n, t, e, A, o, r, a, g, I, B, s) {
  for (var E = A - 1, C = A === 5059 + -734 * -2 + 1 * -6527 ? o : [""], x = PI(C), d = 5063 * 1 + -7228 + 433 * 5, l = 7617 * 1 + -3836 + 1 * -3781, Q = -11 * 5 + -8662 + 1 * 8717; d < e; ++d) for (var f = 33 * 282 + -9926 + 620, p = Pt(i, E + 1, E = YI(l = r[d])), k = i; f < x; ++f) (k = TI(l > 0 ? C[f] + " " + p : W(p, /&\f/g, C[f]))) && (g[Q++] = k);
  return xi(i, n, t, A === 406 * 23 + 2068 * -4 + -1066 ? Qi : a, g, I, B, s);
}
function eC(i, n, t, e) {
  return xi(i, n, t, JI, ga(jc()), Pt(i, -13 * 721 + 1 * 6387 + -9 * -332, -2), -8835 * 1 + 2759 + 6076, e);
}
function ja(i, n, t, e, A) {
  return xi(i, n, t, aa, Pt(i, 0, e), Pt(i, e + (20 * -488 + 1034 + -2909 * -3), -1), e, A);
}
function KI(i, n, t) {
  switch (Hc(i, n)) {
    case -134 * -30 + 1777 * 1 + -694:
      return U + "print-" + i + i;
    case 5737:
    case 4201:
    case 3177:
    case -6891 + 70 * 133 + -39 * -26:
    case -1 * 2649 + -8710 + 260 * 50:
    case -17 * 538 + -4282 + 3577 * 5:
    case -31 * -158 + 3073 + -5050:
    case 5572:
    case 12 * -426 + -15 * -649 + 1 * 1733:
    case 141 + -4999 * 1 + 10702:
    case 8 * 566 + 2203 * -4 + -1 * -7475:
    case -3309 * 1 + 1 * -9566 + 19520:
    case -131 * -73 + 8017 + -14575:
    case 10529 + 3667 * 1 + -1115 * 7:
    case 13 * 713 + 8440 * 1 + 1690 * -7:
    case -1322 + -652 * 11 + 14117:
    case 19080 + 1 * -12945:
    case -4373 * -2 + 8954 + -13101:
    case -37 * 190 + -5 * -661 + 8580:
    case -2361 * 1 + -8160 + 14736:
    case -1950 + 5367 * 1 + 2972:
    case 127 * 18 + 6679 + -3856:
    case 585 + 2248 * 1 + -211 * -12:
    case -8 * -313 + -470 * 23 + -13927 * -1:
    case 3829:
      return U + i + i;
    case -61 * 79 + 5913 + 3695:
      return Qo + i + i;
    case 3809 * 1 + 9284 + -484 * 16:
    case 4246:
    case 30 * -23 + -6431 + -291 * -41:
    case -206 * 21 + 11083 + 211:
    case 121 * -46 + -4335 + -3 * -4219:
      return U + i + Qo + i + P + i + i;
    case -7971 + 13907 * 1:
      switch (iA(i, n + 11)) {
        case -3 * 1097 + -4573 + -2 * -3989:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 5548 + -8717 * -1 + -1 * 14157:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 4767 + -4834 * -1 + -9556:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 5633 + 2 * 4079 + -3 * 2321:
    case 714 * 8 + -6782 + 34 * 157:
    case -53 * 71 + 1417 + 5249:
      return U + i + P + i + i;
    case 7548 + 1383 * -1:
      return U + i + P + "flex-" + i + i;
    case 5187:
      return U + i + W(i, /(\w+).+(:[^]+)/, U + "box-$1$2" + P + "flex-$1$2") + i;
    case -1 * -813 + 9502 + -4872:
      return U + i + P + "flex-item-" + W(i, /flex-|-self/g, "") + (De(i, /flex-|baseline/) ? "" : P + "grid-row-" + W(i, /flex-|-self/g, "")) + i;
    case 281 * -23 + 314 + 10824:
      return U + i + P + "flex-line-pack" + W(i, /align-content|flex-|-self/g, "") + i;
    case -1 * -3206 + 2596 + -254:
      return U + i + P + W(i, "shrink", "negative") + i;
    case 4 * -1061 + 9 * 229 + 7475:
      return U + i + P + W(i, "basis", "preferred-size") + i;
    case 6060:
      return U + "box-" + W(i, "-grow", "") + U + i + P + W(i, "grow", "positive") + i;
    case -4103 + -8657 * -1:
      return U + W(i, /([^-])(transform)/g, "$1" + U + "$2") + i;
    case 4928 + 1 * 1259:
      return W(W(W(i, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), i, "") + i;
    case 6356 + -5449 * -2 + -11759:
    case -3 * 93 + 9303 + -5065:
      return W(i, /(image-set\([^]*)/, U + "$1$`$1");
    case -70 * -35 + -1656 * 4 + 9142:
      return W(W(i, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + i + i;
    case -142 * 19 + -2034 + 8932:
      if (!De(i, /flex-|baseline/)) return P + "grid-column-align" + Pt(i, n) + i;
      break;
    case -8239 * 1 + 1 * 7648 + -1061 * -3:
    case -658 + -49 * -82:
      return P + W(i, "template-", "") + i;
    case 832 * 3 + 6159 + -4271:
    case 1327 + 7 * 327:
      return t && t.some(function(e, A) {
        return n = A, De(e.props, /grid-\w+-end/);
      }) ? ~sn(i + (t = t[n].value), "span", 7841 + 134 * -64 + 735) ? i : P + W(i, "-start", "") + i + P + "grid-row-span:" + (~sn(t, "span", 7795 + 2297 * -3 + -904) ? De(t, /\d+/) : +De(t, /\d+/) - +De(i, /\d+/)) + ";" : P + W(i, "-start", "") + i;
    case 6164 + -3153 * -1 + -1 * 4421:
    case 4128:
      return t && t.some(function(e) {
        return De(e.props, /grid-\w+-start/);
      }) ? i : P + W(W(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case -10460 + -151 * -93:
    case -67 * -67 + 1943 + -2364:
    case 2532:
      return W(i, /(.+)-inline(.+)/, U + "$1$2") + i;
    case -710 * -5 + 845 * -15 + 3 * 5747:
    case -5791 + -919 * -15 + -935:
    case 12 * -434 + -10703 + 21664:
    case -6068 + 41 * 283:
    case 14 * -611 + 3803 + 10196:
    case 8604 + -2 * -4740 + -427 * 29:
    case 6831 + -5102 * 1 + -1 * -3204:
    case -1 * 8197 + 2169 * 3 + 1 * 6367:
    case -1 * 8548 + -5819 + 19900:
    case 335 + -465 * 13 + 11499:
    case 640 * -13 + 1 * 2843 + 1 * 10498:
    case 4765:
      if (Be(i) - (-39 * 166 + 106 * 49 + -1 * -1281) - n > -4365 + -76 * 68 + 9539) switch (iA(i, n + (9927 + -1864 * 3 + -1 * 4334))) {
        case -1 * -6911 + -2884 + 6 * -653:
          if (iA(i, n + (-13742 + 13746 * 1)) !== 45) break;
        case -2 * -3837 + -1 * 9451 + 1879:
          return W(i, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + Qo + (iA(i, n + (7003 + -122 * 60 + -4 * -80)) == -5 * 1121 + -3151 + 8 * 1108 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~sn(i, "stretch", -107 * -6 + 7189 + 1 * -7831) ? KI(W(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -29 * 21 + -3683 * 1 + 9444:
    case 29 * 227 + 7726 + 1 * -8389:
      return W(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, I) {
        return P + A + ":" + o + I + (r ? P + A + "-span:" + (a ? g : +g - +o) + I : "") + i;
      });
    case -1689 * 3 + 2846 + 1434 * 5:
      if (iA(i, n + (-1 * 4910 + -3 * 563 + -1 * -6605)) === 1 * -7424 + -1 * 1417 + 8962) return W(i, ":", ":" + U) + i;
      break;
    case 16766 + 397 * -26:
      switch (iA(i, iA(i, -3 * -13 + -5266 + 5241) === -7458 * 1 + 14 * 593 + -799 ? 3 * 1439 + 9 * 654 + -10185 : 11)) {
        case 1830 * -3 + 3 * -2127 + 1 * 11991:
          return W(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (iA(i, 43 * 86 + 2 * 2496 + -8676) === -873 * -7 + -177 + -5889 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + P + "$2box$3") + i;
        case 67 * 43 + 4520 + -7301:
          return W(i, ":", ":" + P) + i;
      }
      break;
    case 5719:
    case -3 * -2641 + -7514 + 373 * 6:
    case 2135:
    case 1 * -8956 + 5475 + 7408:
    case 2391:
      return W(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function kn(i, n) {
  for (var t = "", e = 6382 + 758 * 6 + 10 * -1093; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function tC(i, n, t, e) {
  switch (i.type) {
    case Pc:
      if (i.children.length) break;
    case Tc:
    case aa:
      return i.return = i.return || i.value;
    case JI:
      return "";
    case UI:
      return i.return = i.value + "{" + kn(i.children, e) + "}";
    case Qi:
      if (!Be(i.value = i.props.join(","))) return "";
  }
  return Be(t = kn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function oC(i) {
  var n = PI(i);
  return function(t, e, A, o) {
    for (var r = "", a = 6061 * -1 + -421 + 14 * 463; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function nC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function iC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case aa:
        i.return = KI(i.value, i.length, t);
        return;
      case UI:
        return kn([Me(i, { value: W(i.value, "@", "@" + U) })], e);
      case Qi:
        if (i.length) return Kc(t = i.props, function(A) {
          switch (De(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              yt(Me(i, { props: [W(A, /:(read-\w+)/, ":" + Qo + "$1")] }));
              var o = {};
              o.props = [A], yt(Me(i, o)), Br(i, { props: Ha(t, e) });
              break;
            case "::placeholder":
              yt(Me(i, { props: [W(A, /:(plac\w+)/, ":" + U + "input-$1")] })), yt(Me(i, { props: [W(A, /:(plac\w+)/, ":" + Qo + "$1")] })), yt(Me(i, { props: [W(A, /:(plac\w+)/, P + "input-$1")] }));
              var r = {};
              r.props = [A], yt(Me(i, r)), Br(i, { props: Ha(t, e) });
              break;
          }
          return "";
        });
    }
}
var F = {};
F.animationIterationCount = 1, F.aspectRatio = 1, F.borderImageOutset = 1, F.borderImageSlice = 1, F.borderImageWidth = 1, F.boxFlex = 1, F.boxFlexGroup = 1, F.boxOrdinalGroup = 1, F.columnCount = 1, F.columns = 1, F.flex = 1, F.flexGrow = 1, F.flexPositive = 1, F.flexShrink = 1, F.flexNegative = 1, F.flexOrder = 1, F.gridRow = 1, F.gridRowEnd = 1, F.gridRowSpan = 1, F.gridRowStart = 1, F.gridColumn = 1, F.gridColumnEnd = 1, F.gridColumnSpan = 1, F.gridColumnStart = 1, F.msGridRow = 1, F.msGridRowSpan = 1, F.msGridColumn = 1, F.msGridColumnSpan = 1, F.fontWeight = 1, F.lineHeight = 1, F.opacity = 1, F.order = 1, F.orphans = 1, F.tabSize = 1, F.widows = 1, F.zIndex = 1, F.zoom = 1, F.WebkitLineClamp = 1, F.fillOpacity = 1, F.floodOpacity = 1, F.stopOpacity = 1, F.strokeDasharray = 1, F.strokeDashoffset = 1, F.strokeMiterlimit = 1, F.strokeOpacity = 1, F.strokeWidth = 1;
var rC = F, J = {}, lt = typeof process < "u" && J !== void 0 && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", jI = "active", _I = "data-styled-version", li = "6.1.18", Ia = `/*!sc*/
`, Sn = typeof window < "u" && typeof document < "u", aC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.SC_DISABLE_SPEEDY !== void 0 && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), _a = /invalid hook call/i, qo = /* @__PURE__ */ new Set(), gC = function(i, n) {
  if (J.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -6544 + 499 * -2 + 397 * 19; g < arguments.length; g++) a[g - 1] = arguments[g];
        _a.test(r) ? (o = !1, qo.delete(e)) : A.apply(void (1641 * -2 + 1 * -6787 + -10069 * -1), Yt([r], a, !1));
      }, ie(), o && !qo.has(e) && (console.warn(e), qo.add(e));
    } catch (r) {
      _a.test(r.message) && qo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, ui = Object.freeze([]), Kt = Object.freeze({});
function IC(i, n, t) {
  return t === void 0 && (t = Kt), i.theme !== t.theme && i.theme || n || t.theme;
}
var xr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), sC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, cC = /(^-|-$)/g;
function qa(i) {
  return i.replace(sC, "-").replace(cC, "");
}
var CC = /(a)(d)/gi, Vo = 52, Va = function(i) {
  return String.fromCharCode(i + (i > 3 * -3321 + 1229 * -2 + 12446 ? 11968 + -79 * 151 : -6326 * 1 + 5135 * 1 + 28 * 46));
};
function dr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Vo; n = n / Vo | -4278 + -23 * -186) t = Va(n % Vo) + t;
  return (Va(n % Vo) + t).replace(CC, "$1-$2");
}
var Ri, qI = 2790 + 2591 * 1, nt = function(i, n) {
  for (var t = n.length; t; ) i = (-2 * -11 + -8356 + -8367 * -1) * i ^ n.charCodeAt(--t);
  return i;
}, VI = function(i) {
  return nt(qI, i);
};
function BC(i) {
  return dr(VI(i) >>> -316 * -8 + 73 * 76 + -8076);
}
function ZI(i) {
  return J.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Fi(i) {
  return typeof i == "string" && (J.NODE_ENV === "production" || i.charAt(0) === i.charAt(29 * -223 + 9365 + -483 * 6).toLowerCase());
}
var ZA = {};
ZA.childContextTypes = !0, ZA.contextType = !0, ZA.contextTypes = !0, ZA.defaultProps = !0, ZA.displayName = !0, ZA.getDefaultProps = !0, ZA.getDerivedStateFromError = !0, ZA.getDerivedStateFromProps = !0, ZA.mixins = !0, ZA.propTypes = !0, ZA.type = !0;
var We = {};
We.name = !0, We.length = !0, We.prototype = !0, We.caller = !0, We.callee = !0, We.arguments = !0, We.arity = !0;
var ze = {};
ze.$$typeof = !0, ze.compare = !0, ze.defaultProps = !0, ze.displayName = !0, ze.propTypes = !0, ze.type = !0;
var wt = {};
wt.$$typeof = !0, wt.render = !0, wt.defaultProps = !0, wt.displayName = !0, wt.propTypes = !0;
var zI = typeof Symbol == "function" && Symbol.for, XI = zI ? Symbol.for("react.memo") : 89177 + -2642 * 11, QC = zI ? Symbol.for("react.forward_ref") : -112848 + -11159 * -7 + 94847, EC = ZA, xC = We, $I = ze, dC = ((Ri = {})[QC] = wt, Ri[XI] = $I, Ri);
function Za(i) {
  return ("type" in (n = i) && n.type.$$typeof) === XI ? $I : "$$typeof" in i ? dC[i.$$typeof] : EC;
  var n;
}
var lC = Object.defineProperty, uC = Object.getOwnPropertyNames, za = Object.getOwnPropertySymbols, fC = Object.getOwnPropertyDescriptor, hC = Object.getPrototypeOf, Xa = Object.prototype;
function As(i, n, t) {
  if (typeof n != "string") {
    if (Xa) {
      var e = hC(n);
      e && e !== Xa && As(i, e, t);
    }
    var A = uC(n);
    za && (A = A.concat(za(n)));
    for (var o = Za(i), r = Za(n), a = -1 * 4591 + -209 + -10 * -480; a < A.length; ++a) {
      var g = A[a];
      if (!(g in xC || t && t[g] || r && g in r || o && g in o)) {
        var I = fC(n, g);
        try {
          lC(i, g, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function jt(i) {
  return typeof i == "function";
}
function sa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function rt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function $a(i, n) {
  if (5776 + 19 * -304 === i.length) return "";
  for (var t = i[-5899 + -3 * 3301 + 15802 * 1], e = -116 * -52 + -552 * -16 + -167 * 89; e < i.length; e++) t += i[e];
  return t;
}
function _t(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function lr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !_t(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 9254 + -7981 * 1 + -19 * 67; e < n.length; e++) i[e] = lr(i[e], n[e]);
  else if (_t(n))
    for (var e in n) i[e] = lr(i[e], n[e]);
  return i;
}
function ca(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
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
var pC = J.NODE_ENV !== "production" ? tA : {};
function yC() {
  for (var i = [], n = -7047 + -67 * 46 + -1 * -10129; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-4 * 796 + 3523 + -339], e = [], A = 1, o = i.length; A < o; A += -2 * 547 + -8 * -326 + -1513) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function $t(i) {
  for (var n = [], t = -1 * -7937 + -2 * 4756 + 1576; t < arguments.length; t++) n[t - (-3345 + 139 * 51 + 1 * -3743)] = arguments[t];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(yC.apply(void 0, Yt([pC[i]], n, !1)).trim());
}
var mC = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(2444 + -5 * -1669 + -10277 * 1), this.length = 98 * 19 + -3 * 1389 + 9 * 313, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 3040 + 5 * -197 + 1 * -2055, e = 3027 * 1 + 1919 + -1 * 4946; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 1 * -529 + -2362 + 2892) < -5010 + 2617 * -2 + 13 * 788) throw $t(2 * -1517 + 9267 + -6217 * 1, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var a = this.indexOfGroup(n + (-2415 + 2642 * 3 + -2 * 2755)), g = (r = 5663 + -1 * 5663, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 1 * 8979 + -113 + -13 * 682;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -3467 * 2 + 6083 + -1 * -851 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Ia);
    return t;
  }, i;
}(), DC = -5223 * -1 + -405 * 21 + -469 * -7 << 349 * -3 + 727 * -3 + -2 * -1629, Bn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Qn = -8100 + -693 * 13 + 3422 * 5, Zo = function(i) {
  if (Bn.has(i)) return Bn.get(i);
  for (; Gn.has(Qn); ) Qn++;
  var n = Qn++;
  if (J.NODE_ENV !== "production" && ((9684 + -103 * 46 + -4946 | n) < 6071 + 1 * -1507 + 652 * -7 || n > DC)) throw $t(9843 + 1 * 5543 + -15370, "".concat(n));
  return Bn.set(i, n), Gn.set(n, i), n;
}, wC = function(i, n) {
  Qn = n + (7288 + -8663 * 1 + -344 * -4), Bn.set(i, n), Gn.set(n, i);
}, bC = "style[".concat(lt, "][").concat(_I, '="').concat(li, '"]'), kC = new RegExp("^".concat(lt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), SC = function(i, n, t) {
  for (var e, A = t.split(","), o = -30 * 186 + -7746 + -2 * -6663, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, GC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ia), A = [], o = -15 * 347 + 9479 + -4274, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(kC);
      if (g) {
        var I = 0 | parseInt(g[1], 10), B = g[2];
        -1 * -6959 + 2407 + -14 * 669 !== I && (wC(B, I), SC(i, B, g[995 + 14 * 412 + -6760]), i.getTag().insertRules(I, A)), A.length = -9743 * 1 + 17 * -203 + 6597 * 2;
      } else A.push(a);
    }
  }
}, Ag = function(i) {
  for (var n = document.querySelectorAll(bC), t = 2 * 967 + 1385 * 7 + -11629, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(lt) !== jI && (GC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function NC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var es = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(lt, "]")));
    return g[g.length - (4957 * 2 + -1655 * 2 + 93 * -71)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(lt, jI), e.setAttribute(_I, li);
  var r = NC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, RC = function() {
  function i(n) {
    this.element = es(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -5721 + 215 * 1 + 5506, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw $t(-812 + 829 * 1);
    }(this.element), this.length = -175 * 11 + 8245 + -6320;
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
}(), FC = function() {
  function i(n) {
    this.element = es(n), this.nodes = this.element.childNodes, this.length = -5512 + 131 * -1 + 5643;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -361 * -1 + 226 * 2 + -813) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), vC = function() {
  function i(n) {
    this.rules = [], this.length = 1167 + -3 * 389;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -1 * 3851 + -9478 + -31 * -430), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), eg = Sn, MC = { isServer: !Sn, useCSSOMInjection: !aC }, ts = function() {
  function i(n, t, e) {
    n === void 0 && (n = Kt), t === void 0 && (t = {});
    var A = this;
    this.options = vA(vA({}, MC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Sn && eg && (eg = !1, Ag(this)), ca(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, g = "", I = function(s) {
          var E = function(Q) {
            return Gn.get(Q);
          }(s);
          if (E === void 0) return "continue";
          var C = o.names.get(E), x = r.getGroup(s);
          if (C === void 0 || !C.size || -8976 + -33 * -272 === x.length) return "continue";
          var d = "".concat(lt, ".g").concat(s, '[id="').concat(E, '"]'), l = "";
          C !== void 0 && C.forEach(function(Q) {
            Q.length > 54 * 60 + -6755 * -1 + -1 * 9995 && (l += "".concat(Q, ","));
          }), g += "".concat(x).concat(d, '{content:"').concat(l, '"}').concat(Ia);
        }, B = 2200 + -1 * 7027 + 4827 * 1; B < a; B++) I(B);
        return g;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return Zo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Sn && Ag(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(vA(vA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 4746 + 325 * 4 + -6046) + (1272 * -1 + 2153 + -880);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new vC(A) : e ? new RC(A) : new FC(A);
    }(this.options), new mC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Zo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Zo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Zo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), WC = /&/g, LC = /^\s*\/\/.*$/gm;
function os(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = os(t.children, n)), t;
  });
}
function ns(i) {
  var n, t, e, A = i === void 0 ? Kt : i, o = A.options, r = o === void 0 ? Kt : o, a = A.plugins, g = a === void 0 ? ui : a, I = function(E, C, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > -1795 * -3 + 2281 * -3 + 1458 ? ".".concat(n) : E;
  }, B = g.slice();
  B.push(function(E) {
    E.type === Qi && E.value.includes("&") && (E.props[-119 * -30 + -1 * -4973 + -1 * 8543] = E.props[73 * -113 + -7086 + 1 * 15335].replace(WC, t).replace(e, I));
  }), r.prefix && B.push(iC), B.push(tC);
  var s = function(E, C, x, d) {
    C === void 0 && (C = ""), x === void 0 && (x = ""), d === void 0 && (d = "&"), n = d, t = C, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(LC, ""), Q = AC(x || C ? "".concat(x, " ").concat(C, " { ").concat(l, " }") : l);
    r.namespace && (Q = os(Q, r.namespace));
    var f = [];
    return kn(Q, oC(B.concat(nC(function(p) {
      return f.push(p);
    })))), f;
  };
  return s.hash = g.length ? g.reduce(function(E, C) {
    return C.name || $t(-7388 + 5 * -193 + 2092 * 4), nt(E, C.name);
  }, qI).toString() : "", s;
}
var OC = new ts(), ur = ns(), Ca = dt.createContext({ shouldForwardProp: void 0, styleSheet: OC, stylis: ur });
Ca.Consumer;
var JC = dt.createContext(void 0);
function fr() {
  return le(Ca);
}
function UC(i) {
  var n = xA(i.stylisPlugins), t = n[3 * -2546 + -1 * 1126 + 1252 * 7], e = n[-31 * 289 + -1268 * 4 + -16 * -877], A = fr().styleSheet, o = dA(function() {
    var B = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? B = i.sheet : i.target && (B = B.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (B = B.reconstructWithOptions(s)), B;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = dA(function() {
    var B = {};
    B.namespace = i.namespace, B.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = B, s.plugins = t, ns(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  q(function() {
    Yc(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = dA(function() {
    var B = {};
    return B.shouldForwardProp = i.shouldForwardProp, B.styleSheet = o, B.stylis = r, B;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var I = {};
  return I.value = r, dt.createElement(Ca.Provider, g, dt.createElement(JC.Provider, I, i.children));
}
var tg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = ur);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ca(this, function() {
      throw $t(9181 * 1 + 1 * -989 + -8180, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = ur), this.name + n.hash;
  }, i;
}(), YC = function(i) {
  return i >= "A" && i <= "Z";
};
function og(i) {
  for (var n = "", t = -464 + 2 * -1349 + 3162; t < i.length; t++) {
    var e = i[t];
    if (17244 + 43 * -401 === t && e === "-" && i[-7602 + -596 * 1 + -1 * -8198] === "-") return i;
    YC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var is = function(i) {
  return i == null || i === !1 || i === "";
}, rs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !is(o) && (Array.isArray(o) && o.isCss || jt(o) ? e.push("".concat(og(A), ":"), o, ";") : _t(o) ? e.push.apply(e, Yt(Yt(["".concat(A, " {")], rs(o), !1), ["}"], !1)) : e.push("".concat(og(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2465 + 1 * -2465 === t || n in rC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Et(i, n, t, e) {
  if (is(i)) return [];
  if (sa(i)) return [".".concat(i.styledComponentId)];
  if (jt(i)) {
    if (!jt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return J.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof tg || _t(A) || A === null || console.error("".concat(ZI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Et(A, n, t, e);
  }
  var o;
  return i instanceof tg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : _t(i) ? rs(i) : Array.isArray(i) ? Array.prototype.concat.apply(ui, i.map(function(r) {
    return Et(r, n, t, e);
  })) : [i.toString()];
}
function TC(i) {
  for (var n = 5 * 1697 + 3320 * 1 + 2361 * -5; n < i.length; n += -51 * -10 + -1 * -2941 + -3450) {
    var t = i[n];
    if (jt(t) && !sa(t)) return !1;
  }
  return !0;
}
var PC = VI(li), HC = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (e === void 0 || e.isStatic) && TC(n), this.componentId = t, this.baseHash = nt(PC, t), this.baseStyle = e, ts.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = rt(A, this.staticRulesId);
      else {
        var o = $a(Et(this.rules, n, t, e)), r = dr(nt(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = rt(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = nt(this.baseHash, e.hash), I = "", B = 0; B < this.rules.length; B++) {
        var s = this.rules[B];
        if (typeof s == "string") I += s, J.NODE_ENV !== "production" && (g = nt(g, s));
        else if (s) {
          var E = $a(Et(s, n, t, e));
          g = nt(g, E + B), I += E;
        }
      }
      if (I) {
        var C = dr(g >>> 0);
        t.hasNameForId(this.componentId, C) || t.insertRules(this.componentId, C, e(I, ".".concat(C), void 0, this.componentId)), A = rt(A, C);
      }
    }
    return A;
  }, i;
}(), as = dt.createContext(void 0);
as.Consumer;
var vi = {}, ng = /* @__PURE__ */ new Set();
function KC(i, n, t) {
  var e = sa(i), A = i, o = !Fi(i), r = n.attrs, a = r === void 0 ? ui : r, g = n.componentId, I = g === void 0 ? function(b, G) {
    var w = typeof b != "string" ? "sc" : qa(b);
    vi[w] = (vi[w] || 24 * -394 + -6498 + 6 * 2659) + (-8994 * -1 + -3291 + -5702);
    var T = "".concat(w, "-").concat(BC(li + w + vi[w]));
    return G ? "".concat(G, "-").concat(T) : T;
  }(n.displayName, n.parentComponentId) : g, B = n.displayName, s = B === void 0 ? function(b) {
    return Fi(b) ? "styled.".concat(b) : "Styled(".concat(ZI(b), ")");
  }(i) : B, E = n.displayName && n.componentId ? "".concat(qa(n.displayName), "-").concat(n.componentId) : n.componentId || I, C = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(b, G) {
        return d(b, G) && l(b, G);
      };
    } else x = d;
  }
  var Q = new HC(t, E, e ? A.componentStyle : void 0);
  function f(b, G) {
    return function(w, T, X) {
      var MA = w.attrs, yA = w.componentStyle, WA = w.defaultProps, $ = w.foldedComponentIds, Po = w.styledComponentId, J0 = w.target, U0 = dt.useContext(as), Y0 = fr(), yi = w.shouldForwardProp || Y0.shouldForwardProp;
      J.NODE_ENV !== "production" && bn(Po);
      var fa = IC(T, U0, WA) || Kt, ue = function(Ho, to, Ko) {
        var pt = {};
        pt.className = void 0, pt.theme = Ko;
        for (var wi, qe = vA(vA({}, to), pt), bi = 4641 + 51 * -91; bi < Ho.length; bi += 1) {
          var jo = jt(wi = Ho[bi]) ? wi(qe) : wi;
          for (var Fe in jo) qe[Fe] = Fe === "className" ? rt(qe[Fe], jo[Fe]) : Fe === "style" ? vA(vA({}, qe[Fe]), jo[Fe]) : jo[Fe];
        }
        return to.className && (qe.className = rt(qe.className, to.className)), qe;
      }(MA, T, fa), Ao = ue.as || J0, eo = {};
      for (var jA in ue) ue[jA] === void 0 || jA[1 * 5524 + -9524 + 4e3] === "$" || jA === "as" || jA === "theme" && ue.theme === fa || (jA === "forwardedAs" ? eo.as = ue.forwardedAs : yi && !yi(jA, Ao) || (eo[jA] = ue[jA], yi || J.NODE_ENV !== "development" || ic(jA) || ng.has(jA) || !xr.has(Ao) || (ng.add(jA), console.warn('styled-components: it looks like an unknown prop "'.concat(jA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var mi = function(Ho, to) {
        var Ko = fr(), pt = Ho.generateAndInjectStyles(to, Ko.styleSheet, Ko.stylis);
        return J.NODE_ENV !== "production" && bn(pt), pt;
      }(yA, ue);
      J.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(mi);
      var Di = rt($, Po);
      return mi && (Di += " " + mi), ue.className && (Di += " " + ue.className), eo[Fi(Ao) && !xr.has(Ao) ? "class" : "className"] = Di, X && (eo.ref = X), GA(Ao, eo);
    }(p, b, G);
  }
  f.displayName = s;
  var p = dt.forwardRef(f), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, p.attrs = C, p.componentStyle = Q, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? rt(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = E, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? function(G) {
      for (var w = [], T = -8357 + 9 * 1014 + -768; T < arguments.length; T++) w[T - (-9533 + -14 * 401 + -3787 * -4)] = arguments[T];
      for (var X = -7956 + -6691 * 1 + 14647 * 1, MA = w; X < MA.length; X++) lr(G, MA[X], !0);
      return G;
    }({}, A.defaultProps, b) : b;
  } }), J.NODE_ENV !== "production" && (gC(s, E), p.warnTooManyClasses = /* @__PURE__ */ function(b, G) {
    var w = {}, T = !1;
    return function(X) {
      if (!T && (w[X] = !0, Object.keys(w).length >= -13 * 375 + -101 * 62 + 11337)) {
        var MA = G ? ' with the id of "'.concat(G, '"') : "";
        console.warn("Over ".concat(1 * 6323 + -4891 * -2 + -3181 * 5, " classes were generated for component ").concat(b).concat(MA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, w = {};
      }
    };
  }(s, E)), ca(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && As(p, i, k), p;
}
function ig(i, n) {
  for (var t = [i[-1619 * 1 + 8066 + -6447]], e = -8298 + -1 * 1297 + 9595, A = n.length; e < A; e += 11076 + -443 * 25) t.push(n[e], i[e + (1 * -7613 + 9450 + -1836)]);
  return t;
}
var rg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function jC(i) {
  for (var n = [], t = -18 * -441 + 9024 + 16961 * -1; t < arguments.length; t++) n[t - (-467 * -14 + -475 + -6062)] = arguments[t];
  if (jt(i) || _t(i)) return rg(Et(ig(ui, Yt([i], n, !0))));
  var e = i;
  return 7 * -1413 + 6811 + 3080 === n.length && -1 * 3727 + 9 * 37 + 3395 === e.length && typeof e[9426 + -2 * 2345 + 2368 * -2] == "string" ? Et(e) : rg(Et(ig(e, n)));
}
function hr(i, n, t) {
  if (t === void 0 && (t = Kt), !n) throw $t(1969 * 1 + -3 * 305 + -1053, n);
  var e = function(A) {
    for (var o = [], r = 13404 + 1 * -13403; r < arguments.length; r++) o[r - (106 * -34 + 3955 + -350 * 1)] = arguments[r];
    return i(n, t, jC.apply(void 0, Yt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return hr(i, n, vA(vA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return hr(i, n, vA(vA({}, t), A));
  }, e;
}
var gs = function(i) {
  return hr(KC, i);
}, Uo = gs;
xr.forEach(function(i) {
  Uo[i] = gs(i);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zo = "__sc-".concat(lt, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[zo] || (window[zo] = 5516 + 1099 * -5 + -21), 7515 + 4 * 354 + -8930 === window[zo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zo] += 7693 + 4 * 2111 + -16136);
const _C = Uo.div`
  position: relative;
`, qC = Uo.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class S extends Error {
  constructor(t, e) {
    super(t);
    y(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof S) return t;
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
    return new S(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof S) return t;
    const e = "An unexpected error has occurred";
    return new S(e);
  }
}
const En = {};
En.CONTINUE_DETECTION = "continue-detection", En.SWITCH_CAMERA = "switch-camera", En.TOGGLE_MIRROR = "toggle-mirror";
const Mi = En, pr = {};
pr.FIRST_FRAME = "first-frame", pr.FIRST_VALID_FRAME = "first-valid-frame";
const Wi = pr, Is = {};
Is.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const ag = Is;
var xe = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(xe || {}), VC = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(VC || {}), ZC = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(ZC || {}), zC = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(zC || {}), XC = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(XC || {});
const me = {};
me.CANDIDATE_SELECTION = "candidate_selection", me.DOCUMENT_CENTERING = "document_centering", me.DOCUMENT_NOT_PRESENT = "document_not_present", me.DOCUMENT_TOO_FAR = "document_too_far", me.SHARPNESS_TOO_LOW = "sharpness_too_low", me.BRIGHTNESS_TOO_LOW = "brightness_too_low", me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", me.HOTSPOTS_PRESENT = "hotspots_present";
const we = me, Le = {};
Le.isPresent = we.DOCUMENT_NOT_PRESENT, Le.isNotSmall = we.DOCUMENT_TOO_FAR, Le.isNotOutOfBounds = we.DOCUMENT_CENTERING, Le.isSharp = we.SHARPNESS_TOO_LOW, Le.isNotDim = we.BRIGHTNESS_TOO_LOW, Le.isNotBright = we.BRIGHTNESS_TOO_HIGH, Le.noHotspots = we.HOTSPOTS_PRESENT;
const $C = Le, bt = {};
bt.LOADING = "loading", bt.ERROR = "error", bt.WAITING = "waiting", bt.RUNNING = "running", bt.COMPLETE = "complete";
const IA = bt, ss = { ...IA };
ss.DONE = "done";
const gg = ss, cs = {};
cs.EYE_NOT_PRESENT = "eye_not_present";
const qt = cs, kA = {};
kA.CANDIDATE_SELECTION = "candidate_selection", kA.FACE_TOO_CLOSE = "face_too_close", kA.FACE_TOO_FAR = "face_too_far", kA.FACE_CENTERING = "face_centering", kA.FACE_NOT_PRESENT = "face_not_present", kA.SHARPNESS_TOO_LOW = "sharpness_too_low", kA.BRIGHTNESS_TOO_LOW = "brightness_too_low", kA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", kA.DEVICE_PITCHED = "device_pitched", kA.LEFT_EYE_NOT_PRESENT = "left_" + qt.EYE_NOT_PRESENT, kA.RIGHT_EYE_NOT_PRESENT = "right_" + qt.EYE_NOT_PRESENT, kA.MOUTH_NOT_PRESENT = "mouth_not_present", kA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", kA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const LA = kA, OA = {};
OA.isPresent = LA.FACE_NOT_PRESENT, OA.isNotPitched = LA.DEVICE_PITCHED, OA.isNotSmall = LA.FACE_TOO_FAR, OA.isNotLarge = LA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = LA.FACE_CENTERING, OA.isNotDim = LA.BRIGHTNESS_TOO_LOW, OA.isNotBright = LA.BRIGHTNESS_TOO_HIGH, OA.isSharp = LA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = LA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = LA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = LA.MOUTH_NOT_PRESENT, OA.isMouthScoreNotTooHigh = LA.MOUTH_SCORE_TOO_HIGH, OA.isMouthScoreNotTooLow = LA.MOUTH_SCORE_TOO_LOW;
var AB = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(AB || {});
const nA = {};
nA.CANDIDATE_SELECTION = "candidate_selection", nA.FACE_TOO_CLOSE = "face_too_close", nA.FACE_TOO_FAR = "face_too_far", nA.FACE_CENTERING = "face_centering", nA.FACE_NOT_PRESENT = "face_not_present", nA.SHARPNESS_TOO_LOW = "sharpness_too_low", nA.BRIGHTNESS_TOO_LOW = "brightness_too_low", nA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", nA.DEVICE_PITCHED = "device_pitched", nA.LEFT_EYE_NOT_PRESENT = "left_" + qt.EYE_NOT_PRESENT, nA.RIGHT_EYE_NOT_PRESENT = "right_" + qt.EYE_NOT_PRESENT, nA.MOUTH_NOT_PRESENT = "mouth_not_present", nA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", nA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", nA.SMILE = "smile", nA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", nA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const JA = nA, UA = {};
UA.isPresent = JA.FACE_NOT_PRESENT, UA.isNotPitched = JA.DEVICE_PITCHED, UA.isNotSmall = JA.FACE_TOO_FAR, UA.isNotLarge = JA.FACE_TOO_CLOSE, UA.isNotOutOfBounds = JA.FACE_CENTERING, UA.isNotDim = JA.BRIGHTNESS_TOO_LOW, UA.isNotBright = JA.BRIGHTNESS_TOO_HIGH, UA.isSharp = JA.SHARPNESS_TOO_LOW, UA.isLeftEyePresent = JA.LEFT_EYE_NOT_PRESENT, UA.isRightEyePresent = JA.RIGHT_EYE_NOT_PRESENT, UA.isMouthPresent = JA.MOUTH_NOT_PRESENT, UA.isMouthStatusNotTooHigh = JA.MOUTH_SCORE_TOO_HIGH, UA.isMouthStatusNotTooLow = JA.MOUTH_SCORE_TOO_LOW;
const Li = {};
Li.NEUTRAL = "NEUTRAL", Li.SMILE = "SMILE", Li.SMILE_MANUAL = "SMILE_MANUAL";
const ee = {};
ee.CANDIDATE_SELECTION = "candidate_selection", ee.PALM_CENTERING = "palm_centering", ee.PALM_NOT_PRESENT = "palm_not_present", ee.PALM_TOO_FAR = "palm_too_far", ee.PALM_TOO_CLOSE = "palm_too_close", ee.SHARPNESS_TOO_LOW = "sharpness_too_low", ee.BRIGHTNESS_TOO_LOW = "brightness_too_low", ee.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ee.DEVICE_PITCHED = "device_pitched", ee.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const fe = ee, he = {};
he.isPresent = fe.PALM_NOT_PRESENT, he.isNotPitched = fe.DEVICE_PITCHED, he.isNotSmall = fe.PALM_TOO_FAR, he.isNotOutOfBounds = fe.PALM_CENTERING, he.isNotDim = fe.BRIGHTNESS_TOO_LOW, he.isNotBright = fe.BRIGHTNESS_TOO_HIGH, he.isSharp = fe.SHARPNESS_TOO_LOW, he.isNotLarge = fe.PALM_TOO_CLOSE, he.isTemplateExtractionQualityHighEnough = fe.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Xo = {};
Xo.TOP_LEFT = "TOP_LEFT", Xo.TOP_RIGHT = "TOP_RIGHT", Xo.BOTTOM_RIGHT = "BOTTOM_RIGHT", Xo.BOTTOM_LEFT = "BOTTOM_LEFT";
const zA = {};
zA.CANDIDATE_SELECTION = "candidate_selection", zA.FACE_TOO_CLOSE = "face_too_close", zA.FACE_TOO_FAR = "face_too_far", zA.FACE_CENTERING = "face_centering", zA.FACE_NOT_PRESENT = "face_not_present", zA.SHARPNESS_TOO_LOW = "sharpness_too_low", zA.BRIGHTNESS_TOO_LOW = "brightness_too_low", zA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", zA.DEVICE_PITCHED = "device_pitched", zA.LEFT_EYE_NOT_PRESENT = "left_" + qt.EYE_NOT_PRESENT, zA.RIGHT_EYE_NOT_PRESENT = "right_" + qt.EYE_NOT_PRESENT;
const ae = zA, ge = {};
ge.isPresent = ae.FACE_NOT_PRESENT, ge.isNotPitched = ae.DEVICE_PITCHED, ge.isNotSmall = ae.FACE_TOO_FAR, ge.isNotLarge = ae.FACE_TOO_CLOSE, ge.isNotOutOfBounds = ae.FACE_CENTERING, ge.isNotDim = ae.BRIGHTNESS_TOO_LOW, ge.isNotBright = ae.BRIGHTNESS_TOO_HIGH, ge.isSharp = ae.SHARPNESS_TOO_LOW, ge.isLeftEyePresent = ae.LEFT_EYE_NOT_PRESENT, ge.isRightEyePresent = ae.RIGHT_EYE_NOT_PRESENT;
const fi = _e(void 0);
fi.displayName = "AppStateContext";
function re() {
  const i = le(fi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
var Cs = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(Cs || {});
const yr = {};
yr.FRONT = "user", yr.BACK = "environment";
const ho = yr, mr = {};
mr.AUTO_CAPTURE = "AUTO_CAPTURE", mr.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Dr = mr, wr = {};
wr.SIMD = "simd", wr.NO_SIMD = "no-simd";
const Ig = wr, br = {};
br.Lower = "Lower", br.Higher = "Higher";
const Nn = br, xn = {};
xn.VISIBLE = "VISIBLE", xn.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", xn.HIDDEN = "HIDDEN";
const Rn = xn, kr = {};
kr.MOBILE = "MOBILE", kr.DESKTOP = "DESKTOP";
const sg = kr;
(function(i, n) {
  function t(a, g, I, B, s) {
    return lA(a - -143, s);
  }
  const e = i();
  function A(a, g, I, B, s) {
    return lA(s - 223, I);
  }
  function o(a, g, I, B, s) {
    return lA(g - -843, a);
  }
  function r(a, g, I, B, s) {
    return lA(g - 307, s);
  }
  for (; ; )
    try {
      if (-parseInt(o("8&WC", -531, -520, -546, -523)) / 1 + parseInt(o("^XbK", -539, -537, -536, -544)) / 2 + parseInt(r(619, 601, 604, 589, "z(][")) / 3 * (parseInt(o("$Ljs", -529, -516, -547, -535)) / 4) + -parseInt(o("tWv&", -540, -536, -529, -558)) / 5 + -parseInt(o("jMj1", -550, -554, -567, -547)) / 6 * (-parseInt(r(623, 614, 597, 626, "%OQl")) / 7) + parseInt(A(513, 522, "T!I8", 513, 525)) / 8 * (-parseInt(t(157, 171, 140, 174, "tomB")) / 9) + parseInt(r(630, 627, 629, 636, "ouhv")) / 10 * (parseInt(A(527, 533, "I*)*", 515, 518)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fn, -510360 + 491797 * -1 + 1422495);
function Fn() {
  const i = ["WPXHW7W0wh8gW43dRZS", "W7ZdOSoXWR3dMfOIzw3cLGus", "fCovp0hdUd46WRlcMYSCvmon", "FCo4WRieWQa", "bSoTxLFdOG", "m8o/smkdqSo+ECoNqaO8WOng", "EgaJeCkG", "bCkCvCkFW5v1WO4", "WRfTW6j8W7NcVCkFpxDywmk/", "W5nTW4tdU8oRW4z4W5HTWQdcLw4", "tN5QpGO", "W4NdG3ZcImorkSkJyebPf1C", "rCojWPtcSCkHWOtcVa", "kmkHrmoKba", "l8kGW7vhW79UhbddJHGbW7u", "gCkQzCoZaa", "f8ogWR4IDq", "l8kOW7nbW7rOiXZdKcSlW5e", "gxLyjIVcQx4", "WOi6W7lcS8kWW4GDACopWPRdJ8oHhq", "WOr/W5SIhmkXW4a", "uSosWONcUSkW", "c8kqr10EcGpcMSojpbTkWPe", "wG3dHmk9pW", "WP/dR8kSWQ7dVa", "oMRcUGLwzMbxW74nwG", "WP7dSflcLa", "sSognWTb", "WQVcTdLZW4q", "WOaXh8oBBq", "FSkUySo9dmoVgW", "gcaRD1BcHNJcQSk2WPldRG", "W6BcGCkCyaldSZxcILNdGa", "FCo0WRm", "kmoXBmkMW7hcISksiJpcMvJcLSkB", "W5NdU2VcIfZdNu0"];
  return Fn = function() {
    return i;
  }, Fn();
}
function eB(i, n, t, e, A) {
  return lA(e - 560, i);
}
function lA(i, n) {
  const t = Fn();
  return lA = function(e, A) {
    e = e - (37 * -45 + 9992 + 1 * -8038);
    let o = t[e];
    if (lA.zWmWnh === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      lA.voaIGD = B, i = arguments, lA.zWmWnh = !0;
    }
    const a = t[7017 + -2 * 313 + -6391], g = e + a, I = i[g];
    return I ? o = I : (lA.PtBLoO === void 0 && (lA.PtBLoO = !0), o = lA.voaIGD(o, A), i[g] = o), o;
  }, lA(i, n);
}
function Eo(i, n, t, e, A) {
  return lA(t - -815, A);
}
function tB(i, n, t, e, A) {
  return lA(e - -426, A);
}
function Oi(i, n, t, e, A) {
  return lA(t - 957, e);
}
const vn = _e(void 0);
vn[Eo(-526, -504, -510, -527, "X)28") + Oi(1270, 1250, 1268, "TR^g") + "e"] = Oi(1286, 1276, 1275, "[%V0") + Oi(1270, 1290, 1279, "oR[w") + Eo(-504, -479, -494, -493, "z(][");
function Yo() {
  function i(r, a, g, I, B) {
    return Eo(r - 179, a - 275, I - 1691, I - 419, r);
  }
  const n = le(vn);
  function t(r, a, g, I, B) {
    return eB(g, a - 151, g - 22, I - -1012);
  }
  function e(r, a, g, I, B) {
    return Eo(r - 82, a - 249, r - -174, I - 496, I);
  }
  if (n === void 0) throw new Error(vn[i("8&WC", 1178, 1156, 1174) + e(-681, -689, -688, "ZXlf") + "e"] + (o(198, 215, 187, "%OQl") + e(-688, -684, -671, "pdGx") + e(-670, -677, -657, "SOmd") + o(206, 203, 202, "copk") + A(428, 415, 398, 422, "lrZ8") + i("Hiui", 1176, 1174, 1175) + t(-158, -151, "ZXlf", -142) + i("8&WC", 1185, 1165, 1168)));
  function A(r, a, g, I, B) {
    return Eo(r - 111, a - 243, a - 907, I - 378, B);
  }
  function o(r, a, g, I, B) {
    return tB(r - 405, a - 19, g - 24, r - 308, I);
  }
  return n;
}
const $o = (i, n) => Math.hypot(n.x - i.x, n.y - i.y), Mn = (i) => i.length < 1 ? -2587 * 1 + 4589 * -1 + -4 * -1794 : i.reduce((t, e) => t + e, 1 * 3022 + -2784 + -119 * 2) / i.length, Vt = (i) => Number.parseFloat(i.toFixed(-3965 + -3701 * 2 + 5685 * 2)), oB = (i) => {
  const { bottomLeft: n, bottomRight: t, topLeft: e, topRight: A } = i, o = $o(e, A), r = $o(A, t), a = $o(n, t), g = $o(e, n);
  return Math.min(o, r, a, g);
};
function nB(i) {
  const n = i.getContext("2d");
  n && n.clearRect(1 * 17 + 3132 + -3149, 6639 + 7583 * -1 + 944, n.canvas.width, n.canvas.height);
}
const iB = -37 * -215 + 999 * -1 + -1391 * 5 + 0.5, rB = -4254 + -709 * -6 + 0.85, Ji = -1 * 6582 + -1 * -2915 + 4667, aB = 1094 * -9 + 1 * 1933 + -8513 * -1, gB = 1 * -5909 + -9469 + 15378 * 1, IB = "dot-auto-capture-video";
function sB(i, n) {
  return i < Ji && n >= Ji ? Ji : i;
}
function cB(i, n) {
  return i < n ? i : n;
}
function Bs({ height: i, width: n }) {
  let t;
  return n > i ? t = sB(i, n) : t = n, { width: t, height: cB(i, t) };
}
const CB = (i, n) => Math.min(i, n), Qs = (i) => {
  const n = Bs(i).width, t = n * rB, e = (i.width - t) / (1 * 7201 + 3984 + -11183 * 1), A = t / iB, o = (i.height - A) / (1 * -4333 + -4609 * -2 + -4883), r = {};
  return r.shiftX = e, r.shiftY = o, r.width = t, r.height = A, r;
}, BB = (i) => {
  const { height: n, shiftX: t, shiftY: e, width: A } = Qs(i), o = {};
  return o.shiftX = t / i.width, o.shiftY = e / i.height, o.width = A / i.width, o.height = n / i.height, o;
}, QB = "8.0.0", EB = {
  version: QB
}, Sr = {};
Sr.max = 100, Sr.min = 10;
const cg = Sr, xB = 1 * 3513 + 428 + -3221, dB = 200, lB = -2055 + -29 * -71, Es = "AES-CBC", xs = "RSA-OAEP", uB = "SHA-256", fB = "image/jpeg", hB = -95 * -61 + 79 * -113 + -1570 * -2, ds = "/dot-assets", Cg = "dot_embedded_bg.wasm", Gr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), pB = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Vt(t) : t)), ls = () => EB.version, us = (i) => new URL(i).hostname.replace("www.", ""), Ba = () => us(window.location.href) === "localhost", yB = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function mB(i) {
  return i.at(-1) === "/" ? i.slice(-6096 + 571 * 7 + 2099, -1) : i;
}
function fs(i) {
  return "" + mB(i ?? "") + ds;
}
function oo(i) {
  return (...n) => {
    Ba() && console[i](...n);
  };
}
const Qa = { log: oo("log"), warn: oo("warn"), error: oo("error"), info: oo("info"), debug: oo("debug") }, DB = () => "prod".toLowerCase() === "dev";
var Ue;
class hs extends Array {
  constructor(t) {
    super();
    O(this, Ue);
    M(this, Ue, t);
  }
  get size() {
    return m(this, Ue);
  }
  pushFixed(...t) {
    if (t.length > m(this, Ue)) {
      const e = t.slice(-m(this, Ue));
      this.push(...e);
      return;
    }
    this.length === m(this, Ue) && this.splice(-11 * -287 + 4 * -541 + -993, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(3 * -762 + -37 * -43 + 695);
  }
}
Ue = new WeakMap();
const ps = (i, n, t = fB) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), wB = async (i) => ps(i, 2854 + -5506 * 1 + 2742), bB = async (i) => ps(i, -75 * -51 + -1122 + -2603, "image/png"), ys = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -1 * 8691 + 5 * 851 + 4 * 1109, 1516 * -2 + -8 * 634 + -8 * -1013, t.width, t.height), t;
}, ms = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(4962 + 4538 * 2 + -14038, -7875 + -525 * -15, i.width, i.height);
  return t;
};
async function kB(i, n) {
  const t = ys(i, n);
  return bB(t);
}
const SB = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height), A.stroke());
}, Ui = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, SB(i, g, t);
};
function GB({ canvas: i, color: n, fill: t, offset: e = 1347 + -3 * 449, polygon: A }) {
  const o = i.getContext("2d");
  if (!o) return;
  const { bottomLeft: r, bottomRight: a, topLeft: g, topRight: I } = A;
  t ? o.fillStyle = n : o.strokeStyle = n, o.beginPath(), o.moveTo(g.x + e, g.y + e), o.lineTo(I.x + e, I.y + e), o.lineTo(a.x + e, a.y + e), o.lineTo(r.x + e, r.y + e), o.closePath(), t ? o.fill() : o.stroke();
}
const NB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, RB = (i, n) => Object.values(i).every((t) => NB(t, n));
function Wn(i) {
  const { height: n, width: t } = Bs(i), e = (i.width - t) / 2, A = (i.height - n) / (155 * -2 + -8983 + 11 * 845), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function Ds(i, n, t) {
  const { height: e, width: A } = t, o = CB(i.width, i.height), r = A - o * n * (-1 * 4594 + -7252 + 8 * 1481), a = e - o * n * (-4095 + -1883 * -2 + 1 * 331), g = (i.width - r) / (-194 * 44 + 3 * 2076 + 2310), I = (i.height - a) / (-74 * 36 + -3392 * -1 + -1 * 726), B = {};
  return B.shiftX = g, B.shiftY = I, B.width = r, B.height = a, B;
}
function An(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function FB(i, n) {
  return { ...i, topLeft: An(i.topLeft, n), topRight: An(i.topRight, n), bottomRight: An(i.bottomRight, n), bottomLeft: An(i.bottomLeft, n) };
}
function vB(i, n) {
  const t = oB(i), e = t / n.width, A = { ...i };
  return A.smallestEdge = e, A;
}
function hi() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Bg() {
  return /Android/i.test(navigator.userAgent);
}
function xt() {
  return /Firefox/i.test(navigator.userAgent);
}
function MB() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const WB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function LB() {
  return navigator.userAgent;
}
function OB() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function xo() {
  return !1;
}
function JB() {
  return !0;
}
(function(i, n) {
  const t = i();
  function e(r, a, g, I, B) {
    return uA(I - 34, g);
  }
  function A(r, a, g, I, B) {
    return uA(B - -448, r);
  }
  function o(r, a, g, I, B) {
    return uA(B - -793, a);
  }
  for (; ; )
    try {
      if (-parseInt(o(-689, "RRt3", -670, -667, -677)) / 1 + parseInt(o(-664, "ICE0", -656, -665, -656)) / 2 + parseInt(o(-666, "HxbO", -656, -657, -663)) / 3 * (parseInt(A("fUjo", -320, -324, -300, -312)) / 4) + -parseInt(o(-667, "[5z6", -668, -656, -661)) / 5 * (parseInt(e(149, 161, "vpQr", 154, 147)) / 6) + -parseInt(o(-667, "NMj!", -662, -665, -672)) / 7 + parseInt(A("Ptk2", -309, -317, -316, -321)) / 8 + parseInt(e(150, 148, "vpQr", 151, 154)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ln, -1 * 349869 + -755814 + -908059 * -2);
function UB({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = xA(), A = t !== void 0;
  q(() => {
    async function I() {
      await n[B(114, 120, 109, "Mi5R")](fs(i));
      function B(E, C, x, d, l) {
        return uA(x - -29, d);
      }
      function s(E, C, x, d, l) {
        return uA(E - -100, x);
      }
      e(n[B(101, 113, 110, "C8d7") + B(109, 102, 100, "mYdb") + s(34, 32, "syRh") + "t"]());
    }
    I();
  }, [n, i, e]);
  function o(I, B, s, E, C) {
    return uA(B - -139, C);
  }
  function r(I, B, s, E, C) {
    return uA(E - 148, I);
  }
  const a = {};
  a[g(775, 779, "OWiX") + o(-9, -15, -3, -16, "Nx[R")] = t;
  function g(I, B, s, E, C) {
    return uA(B - 644, s);
  }
  return a[r("o72&", 265, 278, 270) + "sh"] = A, a;
}
function uA(i, n) {
  const t = Ln();
  return uA = function(e, A) {
    e = e - (-7243 * 1 + 4350 + -59 * -51);
    let o = t[e];
    if (uA.TaYQrG === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      uA.qPndMd = B, i = arguments, uA.TaYQrG = !0;
    }
    const a = t[-6830 + -1366 * -5], g = e + a, I = i[g];
    return I ? o = I : (uA.Pavvtn === void 0 && (uA.Pavvtn = !0), o = uA.qPndMd(o, A), i[g] = o), o;
  }, uA(i, n);
}
function Ln() {
  const i = ["pmkwW6jpl8ourG", "WQmhdmklWP0mWO/dQXtcLmkYW5JcTq", "wmoBFY4", "xmklqSkMAq", "W6BcI8kiWQ/cLJWnkSoefmoNmq", "d8kegCoSWPxcTe/cSNnJW7hdQSkk", "r8kBW6tcNmkbkSoWyatcQW", "bCoDDcbUWRef", "amkde8oRW6NdTb7cO1D1", "W5hcHsxcTCoVW6BdQJJcJhj8m1S", "W5JdLSkmBSoB", "hmknrmk4f0arWQlcLuq", "f05RFmol", "E8kzo8kTn8klq30ZWPNcOhD5", "or9oE8krW5RcOWjqW4a1WOCC", "oCkTW4OEn8oxr8kUCmkOWR/dGCo/", "tH0VjSkquqmomYdcOaK", "WOFcOIGYWQm", "Bu7cGCkRkqb3W6ldHHtcM8kJta", "W7hcT8kxB8okCs7cSSkkW7D+WQmT", "W7vfWQahwWGGWO/dLCoX", "W5ZdN8kDoJb1bmkRW5ldULJcTSoI", "WR04y8oVka", "W5zkm8oppq"];
  return Ln = function() {
    return i;
  }, Ln();
}
function NA(i, n) {
  const t = On();
  return NA = function(e, A) {
    e = e - (349 * -26 + -1 * 1259 + 95 * 114);
    let o = t[e];
    if (NA.qHeKsk === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      NA.bKSHEg = B, i = arguments, NA.qHeKsk = !0;
    }
    const a = t[-8374 + -2171 * 2 + 12716], g = e + a, I = i[g];
    return I ? o = I : (NA.aCdVvn === void 0 && (NA.aCdVvn = !0), o = NA.bKSHEg(o, A), i[g] = o), o;
  }, NA(i, n);
}
function On() {
  const i = ["WQHNW5n0WQpcLZycWOJdHmokW58W", "g8o8wSodW5j8W4tcUIddIGddIq", "W67cP8ot", "hSkrd8k3WR7cVfexWOZcUmoiW4q", "t8osu8o2W7q", "W7ijiZ3cUG", "WOpcTCkhouldRCobW5tdUCkWWPBdHa", "gvf/iCkx", "W4xdVxdcMa", "WOn3ne3dOSoDx8ksWRNdPmkIgY8", "h8kvcCkYWRxcVdq+WPBcOCoIW5aA", "WQNdUmkYAmor", "uI9VW6JdQJGuW78", "WRbPW77dPMTZWQnF", "WOhdOSoJW79VWPTHWQpdJNNdSgFdKq", "uu0AymkdW4iHzuVdI8obWP4", "WOpdPCoGW7LHWPTKWRtdTKhdI3pdPq", "WQKyjL5oWQTQbCovnmk8iSk+", "WQpdIIBcJSkt", "tSo0WORcUSk2", "W41WWOxcGt/dJNj6WQmmofW", "kfbJmSkk", "rmo8DZjBW4XnW7fecgrv", "D1JdMCkYW4CrW5RdTSkoW6CwAW", "g1RcHW"];
  return On = function() {
    return i;
  }, On();
}
(function(i, n) {
  const t = i();
  function e(r, a, g, I, B) {
    return NA(B - 290, g);
  }
  function A(r, a, g, I, B) {
    return NA(a - -588, r);
  }
  function o(r, a, g, I, B) {
    return NA(r - 586, a);
  }
  for (; ; )
    try {
      if (parseInt(A("U*n)", -71, -71, -63, -75)) / 1 + -parseInt(A("5sb8", -74, -82, -73, -77)) / 2 + parseInt(e(788, 791, "7tcP", 783, 789)) / 3 * (-parseInt(A("CSp%", -79, -75, -89, -91)) / 4) + parseInt(o(1097, "4Bpr", 1105, 1087, 1091)) / 5 + parseInt(o(1107, "5sb8", 1113, 1095, 1115)) / 6 + parseInt(A("ZSVb", -87, -92, -87, -89)) / 7 + -parseInt(o(1106, "sKpb", 1109, 1109, 1097)) / 8 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(On, 716992);
function YB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  function e(s, E, C, x, d) {
    return NA(s - -354, x);
  }
  const A = {};
  A[e(162, 163, 151, "aim*") + "le"] = t, A[I("$@X2", 821, 821) + e(151, 147, 153, "Fv(!") + B(932, 918, 916, 925, "5sb8") + e(165, 172, 161, "S2jr")] = i;
  const { sunfish: o, crosshatch: r } = UB(A), a = dA(() => ({ sunfish: o, crosshatch: r, bramble: t }), [o, r, t]), g = {};
  g[B(905, 911, 912, 907, "@5D4")] = a, g[B(906, 919, 907, 914, "Mse%") + B(910, 933, 931, 923, "Wa8p")] = n;
  function I(s, E, C, x, d) {
    return NA(C - 303, s);
  }
  function B(s, E, C, x, d) {
    return NA(x - 410, d);
  }
  return D(vn[e(153, 151, 147, "$@X2") + I("7fr9", 806, 813)], g);
}
(function(i, n) {
  var t = i();
  function e(I, B, s, E, C) {
    return PA(C - 572, B);
  }
  function A(I, B, s, E, C) {
    return PA(s - 858, I);
  }
  function o(I, B, s, E, C) {
    return PA(E - 855, s);
  }
  function r(I, B, s, E, C) {
    return PA(E - -116, s);
  }
  function a(I, B, s, E, C) {
    return PA(s - 21, C);
  }
  for (; ; )
    try {
      var g = parseInt(o(1145, 1157, "bB%]", 1152, 1153)) / 1 * (-parseInt(o(1162, 1155, "Gy%P", 1160, 1160)) / 2) + parseInt(a(314, 327, 315, 310, "B42O")) / 3 * (-parseInt(A("qYfr", 1139, 1148, 1159, 1144)) / 4) + -parseInt(e(876, "NezS", 871, 854, 864)) / 5 * (parseInt(r(174, 198, "*BID", 185, 191)) / 6) + parseInt(o(1162, 1149, "UV#R", 1154, 1143)) / 7 * (parseInt(r(191, 188, "q#Kt", 196, 186)) / 8) + -parseInt(r(178, 183, "grDI", 180, 169)) / 9 + parseInt(a(313, 314, 323, 324, "1hSf")) / 10 * (-parseInt(A("SpA8", 1169, 1169, 1173, 1157)) / 11) + parseInt(o(1163, 1142, "bk@l", 1150, 1163)) / 12 * (parseInt(r(193, 181, "saJ%", 182, 169)) / 13);
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Jn, 186142 + -8123 * -14 + -188045);
function PA(i, n) {
  var t = Jn();
  return PA = function(e, A) {
    e = e - (-28 * 227 + 134 * -10 + 7984);
    var o = t[e];
    if (PA.JUKpUE === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, k = C.length; p < k; p++)
          x += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(s, E) {
        var C = [], x = 0, d, l = "";
        s = r(s);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      PA.tQtoII = a, i = arguments, PA.JUKpUE = !0;
    }
    var g = t[0], I = e + g, B = i[I];
    return B ? o = B : (PA.qCARKE === void 0 && (PA.qCARKE = !0), o = PA.tQtoII(o, A), i[I] = o), o;
  }, PA(i, n);
}
function Jn() {
  var i = ["ueXSW6ddImkpbCo0", "W6PFuxWBWRJcMmo2zCorW5RdRW", "fSkbW5KEW5lcTCk2kWSa", "W4NcU0hdMxlcSmkJWPq3gG", "aCkpW4ZcIfZdQLG", "W43cSeFdMHBdKCk1WQSEdXT6", "D8oDneDAyeuYga", "FKrzW4u5WRpdMgK", "WPORgHyKomoVW75PEW8I", "AbdcVMvRWQFdQrHEWQKg", "WPRdNde6iCovdvq3yCo6WQVcVW", "WPZdN8oBl8obbSoWWPpdGMRdPYK", "W64VbsLwW7tcUq", "DSkpyCkRlmoGW6tdGMZdRSk+ja", "DMjFfwyNvCoLWQ8", "uuPuW5ZdNSkMaCoy", "jHCPW7ZdLSk7W7y9W5q", "WPlcTb86W67dLCkoWPy", "FCo0v8oBW6LfW5tcN8kI", "zmoNcXbosCk/yaNcLG", "Emowzq/cIxZdRgW", "W6lcP8kIWPjjCK9hjIldOhq", "pGqzzmkdWOr+aCoZWOr7W7BcNW", "W7iHr8o9WOTzwCoZWQ3cSW", "pCkyW7XeWRCwWPpdVq", "W7jiW43dLMNdLwTeDmomCq"];
  return Jn = function() {
    return i;
  }, Jn();
}
const Un = _e(void 0);
Un.displayName = "TransactionCountingContext";
function ws() {
  const i = le(Un);
  if (i === void 0)
    throw new Error(`${Un.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const TB = 3 * -2667 + 7014 + 2987;
class PB {
  constructor(n) {
    y(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), TB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 5596 * 1 + 4143 + -9339 && a.status !== -11828 + -7 * -1747 : !0;
  }
}
var vt, be, Ye, Mt, yo, mo, Do, wo;
class bs {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    O(this, vt);
    O(this, be);
    O(this, Ye);
    O(this, Mt);
    O(this, yo);
    O(this, mo);
    O(this, Do);
    O(this, wo);
    M(this, vt, t), M(this, yo, n), M(this, wo, e), M(this, mo, window.location.origin), M(this, Do, "8.0.0");
  }
  async init(n) {
    if (M(this, Ye, this.shouldCountTransactions(n)), Qa.info("Transaction counting is " + (m(this, Ye) ? "enabled" : "disabled")), Ba()) {
      M(this, be, !0), M(this, Ye, !1);
      return;
    }
    if (!m(this, Ye)) {
      M(this, be, !0);
      return;
    }
    if (M(this, Mt, m(this, vt).transactionCountingToken), !m(this, Mt)) {
      console.warn("Transaction counting token is missing"), M(this, be, !1);
      return;
    }
    M(this, be, await m(this, vt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, a;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((a = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : a["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!m(this, Ye) || !m(this, be)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = m(this, yo), e.id = m(this, mo), e.version = m(this, Do);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = m(this, wo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + m(this, Mt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return m(this, be) || !1;
  }
}
vt = new WeakMap(), be = new WeakMap(), Ye = new WeakMap(), Mt = new WeakMap(), yo = new WeakMap(), mo = new WeakMap(), Do = new WeakMap(), wo = new WeakMap();
class HB extends bs {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const Xe = {};
Xe.FACE = "web-capture-face", Xe.DOCUMENT = "web-capture-document", Xe.MAGNIFEYE = "web-capture-magnifeye", Xe.SMILE = "web-capture-smile", Xe.PALM = "web-capture-palm", Xe.EYEGAZE = "web-capture-eyegaze";
const $e = Xe, Nr = {};
Nr.LIVENESS = "liveness", Nr.CAPTURE = "capture";
const Je = Nr, KB = { [$e.FACE]: Je.CAPTURE, [$e.DOCUMENT]: Je.CAPTURE, [$e.MAGNIFEYE]: Je.LIVENESS, [$e.SMILE]: Je.LIVENESS, [$e.PALM]: Je.CAPTURE, [$e.EYEGAZE]: Je.LIVENESS }, jB = KB;
class _B {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = jB[e];
    switch (A) {
      case Je.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new bs(o);
      case Je.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new HB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function qB(i, n) {
  const { crosshatch: t, bramble: e } = Yo(), [A, o] = xA(null);
  q(() => {
    if (!t) return;
    (async () => {
      const g = new _B(), I = new PB(n), B = g.create({ hwids: e.getHwids(), tokenHandler: I, transactionType: i });
      await B.init(t), o(B);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function VB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = qB(t, n), A = dA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ D(Un.Provider, { value: A, children: i });
}
function ZB({ children: i, value: n }) {
  const { crosshatch: t } = Yo(), { transactionCounting: e } = ws(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Nn.Higher : Nn.Lower, o = dA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ D(fi.Provider, { value: o, children: i });
}
class ks extends XA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new S("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === IA.ERROR ? null : this.props.children;
  }
}
y(ks, "contextType", fi);
const zB = Uo.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, XB = Uo.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
  overflow: auto;
  box-sizing: border-box;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
function $B() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const AQ = RI(
  ({ detectionDetails: i, isImageMirror: n }, t) => $B() ? (console.log(i), /* @__PURE__ */ D(KA, { children: [
    /* @__PURE__ */ D(zB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ D(XB, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), Yn = _e(void 0);
Yn.displayName = "AnalyticsContext";
function Ss() {
  const i = le(Yn);
  if (i === void 0)
    throw new Error(`${Yn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function eQ({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function tQ({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = eQ(o);
  return q(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), q(() => {
    e && (Qa.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function oQ({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Yo(), { redfin: o } = re(), r = tQ({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), a = dA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ D(Yn.Provider, { value: a, children: t });
}
const Ea = _e(void 0);
Ea.displayName = "ConfigurationContext";
function Gs() {
  const i = le(Ea);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function nQ({
  assetsDirectoryPath: i,
  autoCapture: n,
  camera: t,
  captureMode: e,
  onComplete: A,
  sessionToken: o,
  transactionCountingToken: r
}) {
  return {
    onComplete: A,
    captureMode: e ?? Dr.AUTO_CAPTURE,
    assetsDirectoryPath: fs(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function iQ({
  children: i,
  configuration: n
}) {
  const t = dA(() => nQ(n), [n]);
  return /* @__PURE__ */ D(Ea.Provider, { value: t, children: i });
}
const Qg = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, si = class si {
  constructor() {
    y(this, "lastDetails");
    y(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 188 * 1 + -9152 + 8964;
  }
  static getInstance() {
    return !this._instance && (this._instance = new si()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 880 + 220 * -4;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Qg(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Qg(n, t);
  }
};
y(si, "_instance");
let de = si;
function Ns(i, n, t = aB) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  de.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function Eg(i, n) {
  de.getInstance().dispatchCustomEventOnChange(i, n);
}
function rQ(i, n) {
  de.getInstance().dispatchCustomEventOnChange(i, n);
}
function aQ(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  de.getInstance().dispatchCustomEventOnChange(i, e);
}
function gQ(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  de.getInstance().dispatchCustomEventOnChange(i, o);
}
function IQ(i, n) {
  const t = {};
  t.instructionCode = n;
  const e = t;
  de.getInstance().dispatchCustomEventOnChange(i, e);
}
const sQ = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  q(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, rQ(i, A);
  }, [t, e, i]);
};
function cQ(i, n) {
  q(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const CQ = (i) => i === xe.CONTROL ? !hi() : !0;
function BQ(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = re(), [r, a] = xA(), g = dA(() => {
    const x = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? CQ(i);
  }, [n, r, i, o]);
  function I() {
    t !== IA.LOADING && e(IA.RUNNING);
  }
  function B() {
    a(r === void 0 ? !g : !r);
  }
  async function s() {
    if (n) {
      e(IA.LOADING);
      try {
        await n.switchCamera(), e(IA.RUNNING);
      } catch (x) {
        if (x instanceof Error) {
          A(S.fromCameraError(x));
          return;
        }
      }
      a(void 0);
    }
  }
  function E(x) {
    var d;
    switch ((d = x.detail) == null ? void 0 : d["instruction"]) {
      case Mi.CONTINUE_DETECTION:
        I();
        break;
      case Mi.TOGGLE_MIRROR:
        B();
        break;
      case Mi.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  cQ(i, E);
  const C = {};
  return C.shouldCameraMirror = g, C;
}
function QQ(i, n) {
  q(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      aQ(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
var EQ = Symbol.for("preact-signals");
function pi() {
  if (He > 1451 + -1 * 1450)
    He--;
  else {
    for (var i, n = !1; lo !== void 0; ) {
      var t = lo;
      for (lo = void 0, Rr++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(920 + 1 * -6124 + -1303 * -4 & t.f) && vs(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Rr = 0, He--, n) throw i;
  }
}
function xQ(i) {
  if (He > -3 * -3239 + 2782 + -12499) return i();
  He++;
  try {
    return i();
  } finally {
    pi();
  }
}
var Y = void 0, lo = void 0, He = 13012 + 2 * -6506, Rr = 20 * 49 + -845 * 1 + -135, Tn = -3711 + 2 * -2134 + 7979;
function Rs(i) {
  if (Y !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== Y)
      return n = { i: 0, S: i, p: Y.s, n: void 0, t: Y, e: void 0, x: void 0, r: n }, Y.s !== void 0 && (Y.s.n = n), Y.s = n, i.n = n, -3 * -305 + -521 * 15 + 6932 & Y.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 3 * 1119 + 800 + -4157, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = Y.s, n.n = void 0, Y.s.n = n, Y.s = n), n;
  }
}
function QA(i) {
  this.v = i, this.i = -10 * 438 + -1 * -2519 + 1 * 1861, this.n = void 0, this.t = void 0;
}
QA.prototype.brand = EQ, QA.prototype.h = function() {
  return !0;
}, QA.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
}, QA.prototype.U = function(i) {
  if (this.t !== void 0) {
    var n = i.e, t = i.x;
    n !== void 0 && (n.x = t, i.e = void 0), t !== void 0 && (t.e = n, i.x = void 0), i === this.t && (this.t = t);
  }
}, QA.prototype.subscribe = function(i) {
  var n = this;
  return To(function() {
    var t = n.value, e = Y;
    Y = void 0;
    try {
      i(t);
    } finally {
      Y = e;
    }
  });
}, QA.prototype.valueOf = function() {
  return this.value;
}, QA.prototype.toString = function() {
  return this.value + "";
}, QA.prototype.toJSON = function() {
  return this.value;
}, QA.prototype.peek = function() {
  var i = Y;
  Y = void 0;
  try {
    return this.value;
  } finally {
    Y = i;
  }
}, Object.defineProperty(QA.prototype, "value", { get: function() {
  var i = Rs(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Rr > 307 * -23 + -2684 + 9845) throw new Error("Cycle detected");
    this.v = i, this.i++, Tn++, He++;
    try {
      for (var n = this.t; void (-1767 + 523 * 19 + 5 * -1634) !== n; n = n.x) n.t.N();
    } finally {
      pi();
    }
  }
} });
function Fs(i) {
  return new QA(i);
}
function vs(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Ms(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function Ws(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function kt(i) {
  QA.call(this, void 0), this.x = i, this.s = void 0, this.g = Tn - (1 * -7521 + 239 * 2 + -6 * -1174), this.f = -13 * -137 + -41 * -139 + -7476;
}
(kt.prototype = new QA()).h = function() {
  if (this.f &= -3, -6725 + 4 * 454 + -491 * -10 & this.f) return !1;
  if ((-6890 + -633 * 13 + 15155 & this.f) == 32 || (this.f &= -5, this.g === Tn)) return !0;
  if (this.g = Tn, this.f |= 1, this.i > 1301 + -1 * 1301 && !vs(this)) return this.f &= -2, !0;
  var i = Y;
  try {
    Ms(this), Y = this;
    var n = this.x();
    (16 & this.f || this.v !== n || -91 * 104 + 1 * 7085 + 61 * 39 === this.i) && (this.v = n, this.f &= -(-2071 + 639 * -14 + -2 * -5517), this.i++);
  } catch (t) {
    this.v = t, this.f |= -1 * 1805 + -2496 + 3 * 1439, this.i++;
  }
  return Y = i, Ws(this), this.f &= -2, !0;
}, kt.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -6174 * 1 + -1139 + 1 * 7349;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  QA.prototype.S.call(this, i);
}, kt.prototype.U = function(i) {
  if (this.t !== void 0 && (QA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, kt.prototype.N = function() {
  if (!(-3820 + 3 * -772 + 6138 & this.f)) {
    this.f |= -1 * 1801 + -225 * 43 + -2 * -5741;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(kt.prototype, "value", { get: function() {
  if (-3176 * -1 + 8 * 717 + 8911 * -1 & this.f) throw new Error("Cycle detected");
  var i = Rs(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function xg(i) {
  return new kt(i);
}
function Ls(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    He++;
    var t = Y;
    Y = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= -44 * 31 + -7 * -649 + -3171, xa(i), e;
    } finally {
      Y = t, pi();
    }
  }
}
function xa(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, Ls(i);
}
function dQ(i) {
  if (Y !== this) throw new Error("Out-of-order effect");
  Ws(this), Y = i, this.f &= -2, -362 + -5 * -74 & this.f && xa(this), pi();
}
function go(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = -4379 + -5 * 1373 + 11276;
}
go.prototype.c = function() {
  var i = this.S();
  try {
    if (-4 * -1097 + -1124 + -3256 & this.f || void (1693 * 3 + 8820 + -339 * 41) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, go.prototype.S = function() {
  if (5442 + 20 * 78 + -1 * 7001 & this.f) throw new Error("Cycle detected");
  this.f |= 3520 + -17 * 207, this.f &= -9, Ls(this), Ms(this), He++;
  var i = Y;
  return Y = this, dQ.bind(this, i);
}, go.prototype.N = function() {
  !(9797 + -5 * 1959 & this.f) && (this.f |= 3 * -2918 + 1 * 5479 + -113 * -29, this.o = lo, lo = this);
}, go.prototype.d = function() {
  this.f |= 7108 + 1 * 3677 + 1 * -10777, 1 & this.f || xa(this);
};
function To(i) {
  var n = new go(i);
  try {
    n.c();
  } catch (t) {
    throw n.d(), t;
  }
  return n.d.bind(n);
}
var Os, Yi, Js = [];
To(function() {
  Os = this.N;
})();
function Rt(i, n) {
  v[i] = n.bind(null, v[i] || function() {
  });
}
function en(i) {
  Yi && Yi(), Yi = i && i.S();
}
function Us(i) {
  var n = this, t = i.data, e = Ys(t);
  e.value = t;
  var A = dA(function() {
    for (var a = n, g = n.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -1 * 8233 + -463 + -100 * -87;
      break;
    }
    var I = xg(function() {
      var C = e.value.value;
      return C === 0 ? -4728 + -1 * 2197 + -277 * -25 : C === !0 ? "" : C || "";
    }), B = xg(function() {
      return !Array.isArray(I.value) && !II(I.value);
    }), s = To(function() {
      if (this.N = Ts, B.value) {
        var C = I.value;
        a.__v && a.__v.__e && 1777 * -1 + 3079 * 3 + 1 * -7457 === a.__v.__e.nodeType && (a.__v.__e.data = C);
      }
    }), E = n.__$u.d;
    return n.__$u.d = function() {
      s(), E.call(this);
    }, [B, I];
  }, []), o = A[2876 + -3194 * -3 + 6229 * -2], r = A[5307 + -14 * -714 + -15302];
  return o.value ? r.peek() : r.value;
}
Us.displayName = "_st";
var Fr = {};
Fr.configurable = !0, Fr.value = void 0;
var vr = {};
vr.configurable = !0, vr.value = Us;
var Mr = {};
Mr.configurable = !0, Mr.get = function() {
  var i = {};
  return i.data = this, i;
};
var Wr = {};
Wr.configurable = !0, Wr.value = 1;
var no = {};
no.constructor = Fr, no.type = vr, no.props = Mr, no.__b = Wr, Object.defineProperties(QA.prototype, no), Rt("__b", function(i, n) {
  if (typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof QA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), Rt("__r", function(i, n) {
  en();
  var t, e = n.__c;
  e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var o;
    return To(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 4 * 1124 + -1 * 8456 + -1 * -3961, e.setState({});
    }, o;
  }())), en(t), i(n);
}), Rt("__e", function(i, n, t, e) {
  en(), i(n, t, e);
}), Rt("diffed", function(i, n) {
  en();
  var t;
  if (typeof n.type == "string" && (t = n.__e)) {
    var e = n.__np, A = n.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        a !== void 0 && !(r in e) && (a.d(), o[r] = void 0);
      }
      else o = {}, t.U = o;
      for (var g in e) {
        var I = o[g], B = e[g];
        I === void 0 ? (I = lQ(t, g, B, A), o[g] = I) : I.o(B, A);
      }
    }
  }
  i(n);
});
function lQ(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = Fs(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: To(function() {
    this.N = Ts;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
Rt("unmount", function(i, n) {
  if (typeof n.type == "string") {
    var t = n.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
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
      a && (r.__$u = void 0, a.d());
    }
  }
  i(n);
}), Rt("__h", function(i, n, t, e) {
  (e < 5380 + 556 * -2 + -4265 || 3683 + -1 * -1266 + -4940 === e) && (n.__$f |= -9557 + -9559 * -1), i(n, t, e);
}), XA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 99 * -29 + 143 * -34 + 3 * 2579 & this.__$f) || -8085 + 2 * -4559 + -1 * -17204 & this.__$f) return !0;
  } else if (!(e || -1 * 911 + -3231 + 4146 & this.__$f) || 1829 + -1826 * 1 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function Ys(i) {
  return dA(function() {
    return Fs(i);
  }, []);
}
var uQ = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function fQ() {
  xQ(function() {
    for (var i; i = Js.shift(); ) Os.call(i);
  });
}
function Ts() {
  1 * -9732 + 1141 + 8592 === Js.push(this) && (v.requestAnimationFrame || uQ)(fQ);
}
const Pn = _e(void 0);
Pn.displayName = "CameraServiceContext";
function hQ() {
  const i = le(Pn);
  if (i === void 0)
    throw new Error(`${Pn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function Ps() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ti() {
  return (await Ps()).filter((n) => n.kind === "videoinput");
}
function Ft(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Lr(i) {
  return i.getVideoTracks()[2156 + 130 * -13 + -466];
}
(function(i, n) {
  const t = i();
  function e(a, g, I, B, s) {
    return SA(g - 869, a);
  }
  function A(a, g, I, B, s) {
    return SA(B - -728, a);
  }
  function o(a, g, I, B, s) {
    return SA(a - 702, s);
  }
  function r(a, g, I, B, s) {
    return SA(a - 12, I);
  }
  for (; ; )
    try {
      if (-parseInt(o(1091, 1100, 1093, 1075, "Oga&")) / 1 + parseInt(e("qWUI", 1262, 1270, 1245, 1261)) / 2 * (-parseInt(e("2DhB", 1277, 1282, 1290, 1294)) / 3) + -parseInt(r(390, 389, "1iDa", 407, 377)) / 4 * (parseInt(A("PXAz", -331, -320, -323, -305)) / 5) + -parseInt(e("ENU1", 1269, 1269, 1265, 1289)) / 6 + parseInt(e("Ch]L", 1273, 1256, 1286, 1270)) / 7 * (-parseInt(e("EZtN", 1251, 1241, 1265, 1270)) / 8) + parseInt(o(1086, 1082, 1091, 1073, "O*Y7")) / 9 + parseInt(r(409, 418, "1iDa", 397, 392)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Hn, 914324);
function Hn() {
  const i = ["WOdcQMZdR8otqxrJW5CRFsnp", "WPWNw8oRhxVdVqFdO8orWQZdGW", "yJ3dHNhdPW", "DaFdLgldJq", "ENjrWOddIbeOichcHWfl", "W5vmlCowWPe", "yCkjW4yO", "W50yDq", "W7ZcLfVdU8ox", "fc3cTHdcRSk8gvOH", "WR/cMCokW7C4", "ifRcGIFcLSoroahdRmoHjxK", "C8kQmSk8WQu", "WONcUhiZaNRdS2u", "W684mSkOWPe", "zSoBWQOMmqfAW7BdQmoEpCkTza", "W67cNH88WPbqW4xcTCo7pJtdHSka", "e8oXWPK", "WPJdGSokW7fUWP3cOraF", "WPrdW57dG8kbwCoho8kPkg7cR8oV", "drlcRI3cHCofW63cSvDRWPik", "vColefTLdI8", "W4j/gCkDqq", "u8kMWPtcV38UW7NcGW", "bSkWW490W57cRsC", "bmocgLPQ", "W6hcL27cK8koy33dHZj8At8riG", "W6NcKJVcK8oc", "eIVcSMRdVmodqaiXWR3dLrhdUwS", "nhtdJLZcOq", "WRdcGhxcICo6", "W74ylmkaWPXBW4BcLmkofSkjW7mw", "rmo8WOaPW5S", "yCkeW50SWR0", "W6zolSk2yW", "W6hdNYtdJSkNy21vWPZdUmk3Ba", "mmo8z8o4W7xcTZ3cKCoLW63dOcK", "W7VcVWNcNmoK", "WRNcI3ZcMSoM", "W6NcUCkrEWzxWPRdUmkkDmknW6ZcGa"];
  return Hn = function() {
    return i;
  }, Hn();
}
function SA(i, n) {
  const t = Hn();
  return SA = function(e, A) {
    e = e - (-3 * 149 + -1052 * -6 + -5489);
    let o = t[e];
    if (SA.ZTjyIO === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      SA.vpevCN = B, i = arguments, SA.ZTjyIO = !0;
    }
    const a = t[6853 + -1 * 8066 + 1213], g = e + a, I = i[g];
    return I ? o = I : (SA.NYCCaw === void 0 && (SA.NYCCaw = !0), o = SA.vpevCN(o, A), i[g] = o), o;
  }, SA(i, n);
}
function pQ(i) {
  function n(r, a, g, I, B) {
    return SA(B - -598, I);
  }
  function t(r, a, g, I, B) {
    return SA(g - 273, a);
  }
  const e = new ArrayBuffer(i[A(15, "Ch]L", 12, 14) + "h"]);
  function A(r, a, g, I, B) {
    return SA(I - -393, a);
  }
  const o = new Uint8Array(e);
  for (let r = -5 * 749 + -7 * 362 + 6279, a = i[A(-7, "j##V", 14, 3) + "h"]; r < a; r++)
    if (A(21, "Us6e", -3, 10) === A(-6, "KYVj", 4, -10)) o[r] = i[t(685, "GKLP", 667) + t(667, "EUL6", 674)](r);
    else {
      const g = new _0x2c8de1(_0x4414bf[t(658, "m8s$", 675) + t(689, "h)si", 685)]);
      return new _0x4df129(g)[n(-222, -201, -205, "sluE", -212)](_0x547d31), g;
    }
  return e;
}
(function(i, n) {
  function t(g, I, B, s, E) {
    return j(E - -887, I);
  }
  const e = i();
  function A(g, I, B, s, E) {
    return j(g - -236, s);
  }
  function o(g, I, B, s, E) {
    return j(g - 500, s);
  }
  function r(g, I, B, s, E) {
    return j(E - -895, I);
  }
  function a(g, I, B, s, E) {
    return j(g - 691, I);
  }
  for (; ; )
    try {
      if (parseInt(r(-387, "pJjV", -428, -404, -404)) / 1 + -parseInt(r(-408, "9oq7", -377, -380, -406)) / 2 + parseInt(t(-444, "tBY1", -448, -413, -432)) / 3 + parseInt(t(-437, "7Ctu", -398, -430, -420)) / 4 * (parseInt(o(984, 1010, 1005, "i9#^", 1003)) / 5) + -parseInt(o(957, 986, 971, "0])K", 936)) / 6 * (-parseInt(r(-433, "Vg2K", -448, -415, -442)) / 7) + parseInt(A(254, 268, 277, "j7eW", 235)) / 8 + -parseInt(o(969, 953, 995, "i9#^", 976)) / 9 * (parseInt(a(1164, ")0NT", 1137, 1141, 1171)) / 10) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kn, 926384);
function j(i, n) {
  const t = Kn();
  return j = function(e, A) {
    e = e - (311 * -4 + 1 * -55 + 53 * 33);
    let o = t[e];
    if (j.EdmQaR === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      j.wVyRDq = B, i = arguments, j.EdmQaR = !0;
    }
    const a = t[-2614 + 3 * 1125 + -761 * 1], g = e + a, I = i[g];
    return I ? o = I : (j.WeAMqk === void 0 && (j.WeAMqk = !0), o = j.wVyRDq(o, A), i[g] = o), o;
  }, j(i, n);
}
async function yQ() {
  const i = {};
  i[g(-219, "jjmF", -227)] = Es, i[t(796, 818, 837, "62r)", 810) + "h"] = 256;
  const n = await window[g(-161, "*&^z", -178) + "o"][r(731, "t()3", 725, 709, 708) + "e"][r(739, "pJjV", 753, 754, 742) + g(-173, "82wq", -202) + "y"](i, !0, [g(-176, "v40T", -183) + "pt", g(-154, "i9#^", -171) + "pt"]);
  function t(B, s, E, C, x) {
    return j(x - 315, C);
  }
  const e = Uint8Array[r(734, "hALd", 730, 755, 729)](Array(5476 + 1 * -7435 + 1975)[a(986, "v40T", 1036, 1012)](2444 + 1 * 5594 + -8038)), A = window[I(-147, -156, -181, "*&^z") + "o"][r(747, "t()3", 715, 695, 723) + r(709, "9oq7", 732, 738, 739) + r(734, "i6RA", 678, 730, 704)](e), o = {};
  function r(B, s, E, C, x) {
    return j(x - 246, s);
  }
  o[a(1014, "0])K", 1065, 1042)] = n;
  function a(B, s, E, C, x) {
    return j(C - 556, s);
  }
  function g(B, s, E, C, x) {
    return j(E - -677, s);
  }
  function I(B, s, E, C, x) {
    return j(s - -655, C);
  }
  return o.iv = A, o;
}
async function mQ(i) {
  function n(E, C, x, d, l) {
    return j(C - -3, x);
  }
  const { iv: t, key: e } = await yQ();
  function A(E, C, x, d, l) {
    return j(l - 538, d);
  }
  function o(E, C, x, d, l) {
    return j(C - 199, x);
  }
  const r = {};
  r[s("K0Rd", 297, 320)] = Es;
  function a(E, C, x, d, l) {
    return j(l - 816, E);
  }
  r.iv = t;
  const g = await window[o(681, 707, "SqYY") + "o"][o(702, 700, "Y9eu") + "e"][n(455, 484, "hJmK") + "pt"](r, e, i), I = await window[n(500, 473, "9oq7") + "o"][A(1016, 1034, 999, "j7eW", 1012) + "e"][a("9oq7", 1242, 1293, 1289, 1270) + n(468, 463, "ZxM7")](o(680, 696, "t()3"), e), B = {};
  B[o(683, 684, "NY&A") + "ge"] = g;
  function s(E, C, x, d, l) {
    return j(x - -145, E);
  }
  return B[A(998, 1045, 999, "NY&A", 1016)] = I, B.iv = t, B;
}
function Kn() {
  const i = ["WOZdSaer", "FmkEkmkudG", "f3bnW656", "Ec/cGCk/WPG", "WOdcQ8oaluW", "WORdMHm", "WPxdPSomD2xcI8kqWQS", "WQJdNqNcIgy", "WPVdIr0yWPe", "fSkeW5xdSmkY", "WPKfWOrwWPa", "W6VcPhJcTCo+", "yrFdHCkpW4/dOh7cNspdQSofW4u1iW", "srpdJ3BdPq", "W6BcPHxdTKS", "WO5pW5iI", "W55hy8oVBq", "WO7dHSoVWRS", "W7RcMulcSvtdOcldLGW", "k0jApbu", "WQOLw0RcNxVcLCkWW49HW6O", "D8kcn8kwkG", "EIjbW5GmvmkMWRiuz0mPta", "fhDcW7a", "WPxdOSkFDglcICkoWPDj", "W5lcJmkNW4VdPa", "W7ldGGpcNuBdHGS", "amoFW4yuoW", "W57dKCkJWR7cHmkOugVdM3qicCk9", "WOVdJGyCWOK", "l2OyW5dcUq", "W6/cLNXcba", "w2yiWQq", "WRyEuty", "fqFdKZ/dNSkmW4BcNq", "omkyW5G1WQ8mqSksW41RWP/cS8kP", "WRVcRGxdOwzlWOi", "vhmkWQm", "WPxcR8oz", "huZcMIJcT8osohD7W6FcGwCX", "W7iPW7LKiCoBW6rmWRZdO8kgCJX5", "WRiqmt95", "WQ3cTdFcVCoA", "CCkipSkjla", "WP/dNHa6WOq", "mqhdMW", "W5xdT8kBEW3dRrHEn8kTaq", "W7S9W5HNW4H9kg3cHmowEmkz", "WOK2W5ug", "W5fqDmo4Bq", "WQWgECoh", "WRxdSK7cSaa3WR18W4lcN2hcRW", "nWhdKCoVW7K", "W4/cSCou", "WOPvW54YW6e", "EIVcGSk9", "i8opC8oaBNJdO8oNW77cVsJcO8kg", "W7buzxOJW4FcJwtdK8kyomkBW5a", "W5BdUSkCEq/cRLvwmSkWlZNdLa"];
  return Kn = function() {
    return i;
  }, Kn();
}
async function DQ(i) {
}
(function(i, n) {
  function t(g, I, B, s, E) {
    return rA(B - 290, g);
  }
  function e(g, I, B, s, E) {
    return rA(E - -944, g);
  }
  function A(g, I, B, s, E) {
    return rA(g - -848, B);
  }
  function o(g, I, B, s, E) {
    return rA(s - -5, E);
  }
  const r = i();
  function a(g, I, B, s, E) {
    return rA(E - 518, I);
  }
  for (; ; )
    try {
      if (parseInt(a(1009, "B6YF", 1106, 1067, 1058)) / 1 * (-parseInt(o(550, 625, 557, 591, "gvu^")) / 2) + -parseInt(e("nMeb", -338, -378, -404, -376)) / 3 + -parseInt(o(568, 581, 631, 590, "9t@*")) / 4 * (parseInt(e("m7ee", -327, -337, -380, -353)) / 5) + parseInt(a(1121, "x8G!", 1124, 1132, 1091)) / 6 * (parseInt(t("RlFx", 777, 802, 795, 800)) / 7) + -parseInt(o(560, 547, 611, 582, "uLkf")) / 8 + parseInt(t("x8G!", 843, 794, 823, 828)) / 9 * (parseInt(A(-325, -340, "bPJB", -374, -305)) / 10) + parseInt(A(-259, -241, "ZScK", -269, -233)) / 11 * (parseInt(A(-335, -300, "[m72", -333, -323)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jn, -965748 + 8767 * -111 + -1 * -2913551);
const dg = 1 * 453 + 200 * 1 + 1 * 1847, Hs = 1017 + -2538 * 1 + 5021, Ks = 64 * 148 + 478 * 4 + 1 * -11382, js = 1 * -9659 + 818 * -3 + 12113 + 0.5;
function z(i, n, t, e, A) {
  return rA(e - 842, t);
}
function pA(i, n, t, e, A) {
  return rA(A - 573, i);
}
const _s = {};
_s[sA(1175, 1139, 1099, 1117, "Fkyz")] = 1280;
const qs = {};
qs[z(1375, 1392, "fTSD", 1364)] = 720;
const Vs = {};
Vs[z(1350, 1346, "90wB", 1381)] = 60;
const dn = {};
dn[sA(1101, 1099, 1048, 1105, "9o3u")] = _s, dn[z(1399, 1392, "Fkyz", 1390) + "t"] = qs, dn[z(1393, 1391, "uLkf", 1419) + HA("9t@*", 1423)] = Vs;
const Zs = {};
Zs[pA("x8G!", 1184, 1207, 1167, 1166)] = 1920;
const zs = {};
zs[sA(1109, 1119, 1091, 1124, "1Mfm")] = 1080;
const ln = {};
function sA(i, n, t, e, A) {
  return rA(n - 547, A);
}
ln[pA("PB^I", 1157, 1168, 1167, 1144)] = Zs, ln[sA(1069, 1076, 1080, 1075, "bPJB") + "t"] = zs, ln[HA("imPW", 1385) + z(1355, 1313, "x8G!", 1343)] = 30;
const Xs = {};
function jn() {
  const i = ["iCo0WOW", "d8kVmCoU", "oMLIWPm7WP4ZWQvHimoAEq", "mmoJWP/dKmk1", "xb7cMaCGWRJdPx9NvYja", "WQ/dT2bdW7u", "W5VdQr4", "pmkTlSoihq", "u2ykW7Se", "ye8U", "xezwlW", "WRJdUM9HW6W", "WPJdLKhcP2e", "B1aWW44", "WQ/dU01TW7y", "bSkgefe", "W7P8c37cLG", "Afvdj3W", "W69FfCoYFW", "lSkIkSo8", "CcuPW4vQ", "CKBdTXBcIq", "tmkedSkRp8o4eCks", "twxcOhRcOGNdSmk7W7NcGa", "W75HhwVcLW", "WRFcLN4Yuq", "lCoiumke", "WO1BfSo4WQ8", "xmk+ur1T", "dLldILzT", "W6hcUHryWP0", "jsvWCG", "Cg/cMwtcMJNcVmolDK8zaW8", "W4ddKSoj", "vCkifSoBbq", "DXDTWOtdJq", "d08AW4xcSq", "W7vCWOLPW6yCWRf9W4pdKSk3W7q", "kKZdN1bR", "nY/dHrBdMW", "W7ujWQahnq", "uCooWO1hW4y", "ymkUW4ZcHCo1v8kzW5mjWQ7dR8k6yq", "z0ZdVXJcNa", "wxJdSujyW7VdGq", "CfxdQHlcHW", "W7fQW4BcGCkP", "WRzzW6fwBMjYW6ZdKmkVWOOHWQlcGW", "m8knmmo/hq", "umooWRSJWPK", "fZVdNZC", "bSknW5KsWPFdQSo8lY7dPCoGidTa", "W79Gau7cIW", "uSoEvrFcJ8olWOpdV8k8n8kxW6i", "WQBdI1PzW5a", "WRdcVspdR8k7zmoMWOS", "WPxdI0NcO30", "WQuaW5u/WRi", "W69NW4FcLmkT", "Bmo3Dmk4qSo8W7NcHmovW7ewW694", "W6VcT1a3CrZdIG", "dSoyimk9", "r8omq8ov", "WQ7dTKP3W6O", "vSopWPG", "zKqTW44", "z047WOGD", "W6ShWQm", "WP4fW4q7", "W6ejWRGcoa", "WR4rW54FWRm", "W7HDWOnOW6yzW4DBW7pdNSkzW41n", "yaJdHmo6z8kleCoX", "W4/dRmkp", "AezojNS", "rmoiWQHFW5e", "WQRcHgWLyW", "iZZdRtpdJq", "W6/dVHBdVmk/", "FaJdIXy9WQGFaq", "qNZcJL1oW4FdSL0JEG", "WPzRWPJdN8kI", "ubG6W6/cQgLhdG", "W5mlqmkRW7PpWOH+EGVcKmo5", "mmkVpCoFfW", "W75DWOzSW64qWP1GW4/dPCkjW5i", "m8o9WRJdKSkI", "r8oguSohjG", "FGlcVwTWW6X6bCoGW7RdJZRcQW", "gmomlSkPlG", "fZLQfL3cRSklW7i", "yr1IWRpdIG", "n8ohqSksW5i", "bCoIcuK1WRC0WPJcPSoYsvBcJa", "W5DfeJhcSq", "kXNdNIBdGq", "tMXOnhK", "uSoEjHPa", "W5JcPtFdSWy", "otXXCq", "smodrmos", "WR4DW7mXWRa", "geVdJvbF"];
  return jn = function() {
    return i;
  }, jn();
}
Xs[sA(1147, 1112, 1096, 1156, "B6YF")] = 1;
const $s = {};
$s[HA("#1CJ", 1465)] = 1;
const A0 = {};
A0[FA(327, 353, "K@iF")] = 1;
const un = {};
un[HA("9u[L", 1480)] = Xs, un[z(1345, 1384, "t4(Y", 1369) + "t"] = $s, un[pA("MR]#", 1157, 1124, 1087, 1126) + pA("MR]#", 1145, 1108, 1141, 1119)] = A0;
function HA(i, n, t, e, A) {
  return rA(n - 886, i);
}
const e0 = {};
e0[pA("iSIS", 1095, 1072, 1096, 1093)] = 1;
const t0 = {};
t0[sA(1130, 1110, 1065, 1160, "zAzw")] = 1;
const o0 = {};
o0[FA(362, 329, "9u[L")] = 1;
const fn = {};
function rA(i, n) {
  const t = jn();
  return rA = function(e, A) {
    e = e - (8126 + 79 * -14 + -7 * 932);
    let o = t[e];
    if (rA.gisngV === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      rA.yyVfwd = B, i = arguments, rA.gisngV = !0;
    }
    const a = t[1 * 6949 + -2 * 4758 + -17 * -151], g = e + a, I = i[g];
    return I ? o = I : (rA.czpPQq === void 0 && (rA.czpPQq = !0), o = rA.yyVfwd(o, A), i[g] = o), o;
  }, rA(i, n);
}
fn[z(1459, 1457, "9u[L", 1436)] = e0, fn[HA("d@SL", 1450) + "t"] = t0, fn[FA(370, 398, "J02a") + sA(1110, 1133, 1126, 1107, "nMeb")] = o0;
const Io = {};
Io[z(1420, 1376, "iSIS", 1375)] = dn, Io[z(1344, 1326, "B6YF", 1377) + sA(1078, 1092, 1072, 1138, "imPW")] = ln, Io[FA(335, 355, "9t@*")] = un, Io[sA(1019, 1061, 1064, 1072, "SRIs") + sA(1057, 1047, 996, 1086, "[my6")] = fn;
const _n = Io, At = {};
At[FA(297, 276, "9t@*") + z(1334, 1364, "K@iF", 1338) + FA(311, 348, "@6F!")] = dg, At[HA("#1CJ", 1443) + FA(314, 344, "x8G!") + pA("cADG", 1130, 1144, 1086, 1129) + sA(1071, 1116, 1164, 1155, "z!SQ")] = _n[pA("ZScK", 1094, 1104, 1162, 1124)], At[HA("[my6", 1388) + FA(304, 285, "PB^I") + sA(1110, 1108, 1127, 1071, "gvu^") + HA("$3Oz", 1448)] = _n[pA("$3Oz", 1110, 1076, 1082, 1098) + z(1371, 1374, "uLkf", 1339)], At[FA(283, 292, "x8G!") + HA("%Q27", 1453)] = Ks, At[HA("9o3u", 1474) + pA("[my6", 1184, 1161, 1177, 1149) + sA(1178, 1131, 1162, 1110, "9t@*") + FA(290, 274, "nMeb") + z(1318, 1320, "McOS", 1348)] = js, At[sA(1068, 1101, 1091, 1064, "OvJJ") + z(1401, 1372, "B6YF", 1416) + "Ms"] = dg;
const at = {};
at[sA(1116, 1091, 1111, 1112, "Thp5") + HA("uLkf", 1394) + z(1475, 1393, "Nb6T", 1427)] = Hs, at[z(1384, 1373, "5hGW", 1408) + pA("K@iF", 1082, 1111, 1135, 1123) + z(1451, 1382, "9o3u", 1402) + z(1368, 1343, "uw1O", 1384)] = _n[FA(377, 354, "fTSD")], at[HA("MR]#", 1393) + FA(323, 305, "9t@*") + pA("m7ee", 1044, 1071, 1122, 1084) + pA("iSIS", 1195, 1131, 1217, 1171)] = _n[pA("gvu^", 1080, 1087, 1058, 1082) + sA(1041, 1047, 1090, 1099, "[my6")], at[z(1359, 1427, "K@iF", 1383) + FA(329, 318, "GJV[")] = Ks;
function FA(i, n, t, e, A) {
  return rA(i - -220, t);
}
at[pA("nMeb", 1145, 1156, 1098, 1148) + HA("#1CJ", 1467) + pA("nMeb", 1064, 1131, 1066, 1101) + FA(299, 273, "90wB") + z(1390, 1361, "90wB", 1378)] = js, at[sA(1142, 1117, 1149, 1082, "o%1h") + pA("nJ&g", 1144, 1083, 1149, 1103) + "Ms"] = Hs;
const Or = {};
Or[sA(1013, 1045, 1056, 1050, "GJV[")] = At, Or[z(1390, 1392, "%Q27", 1374)] = at;
const wQ = Or;
function cA(i, n, t, e, A) {
  return fA(n - -7, e);
}
(function(i, n) {
  function t(r, a, g, I, B) {
    return fA(g - 362, B);
  }
  const e = i();
  function A(r, a, g, I, B) {
    return fA(g - 327, B);
  }
  function o(r, a, g, I, B) {
    return fA(B - -293, g);
  }
  for (; ; )
    try {
      if (-parseInt(A(663, 719, 688, 761, ")M$4")) / 1 + -parseInt(A(681, 765, 731, 688, "fXNA")) / 2 * (-parseInt(o(22, 86, ")M$4", 25, 41)) / 3) + -parseInt(o(188, 86, "tdbV", 135, 155)) / 4 + parseInt(A(769, 690, 755, 748, "s@As")) / 5 + parseInt(t(693, 637, 689, 753, "7*Ee")) / 6 + -parseInt(A(694, 794, 746, 793, "PM7Y")) / 7 + parseInt(A(743, 713, 747, 816, "QYrQ")) / 8 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(qn, 75497 * 1 + -1502 * -377 + 273109);
function fA(i, n) {
  const t = qn();
  return fA = function(e, A) {
    e = e - 320;
    let o = t[e];
    if (fA.KAGTVZ === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      fA.JMLLjA = B, i = arguments, fA.KAGTVZ = !0;
    }
    const a = t[-647 + -4 * 774 + -19 * -197], g = e + a, I = i[g];
    return I ? o = I : (fA.lzCgxN === void 0 && (fA.lzCgxN = !0), o = fA.JMLLjA(o, A), i[g] = o), o;
  }, fA(i, n);
}
function YA(i, n, t, e, A) {
  return fA(t - -96, n);
}
function mt(i, n, t, e, A) {
  return fA(t - -628, e);
}
function TA(i, n, t, e, A) {
  return fA(e - 6, i);
}
function _A(i, n, t, e, A) {
  return fA(i - 220, t);
}
var Xg, $g, AI, ke;
class bQ {
  constructor(n, t = {}) {
    O(this, ke);
    y(this, AI, []);
    y(this, $g);
    y(this, Xg, {});
    this[o(986, 1066, 1100, 1059, "7hyu") + e(-81, "s@As", -105, -79, -94) + A(-521, "feeP") + "r"] = n, M(this, ke, wQ);
    function e(a, g, I, B, s) {
      return cA(a - 188, s - -472, I - 200, g);
    }
    function A(a, g, I, B, s) {
      return _A(a - -1069, g - 161, g);
    }
    function o(a, g, I, B, s) {
      return mt(a - 20, g - 74, g - 1232, s);
    }
    function r(a, g, I, B, s) {
      return YA(a - 244, I, a - -771);
    }
    this[A(-353, "H@py") + A(-439, "*%s&") + r(-542, -589, "ik(2")](t);
  }
  async [(AI = cA(402, 458, 376, "ik(2") + cA(405, 482, 408, "kphU"), $g = TA(")M$4", 508, 482, 467) + cA(340, 369, 301, "NkoZ") + YA(217, "feeP", 232) + "r", Xg = YA(284, "pN#i", 330) + _A(678, 652, "S^GY") + "s", cA(255, 349, 262, "PM7Y") + TA("(]q$", 524, 541, 461) + YA(324, "(CD*", 358))]() {
    if (!xo())
      if (t(-99, -39, "MI96") === t(-1, -29, "oHhs")) {
        _0x213a7f(_0x56d710);
        const B = {};
        return B[I(702, 616, 594, 640, "7hyu")] = _0x438894, B;
      } else return;
    function n(B, s, E, C, x) {
      return _A(C - -198, s - 91, E);
    }
    function t(B, s, E, C, x) {
      return _A(s - -689, s - 15, E);
    }
    const e = await this[I(784, 783, 828, 781, "PM7Y") + "st"](m(this, ke)[o(338, 384, 291, 311, "VS6N")]), A = await this[o(392, 376, 441, 310, "tdbV") + "st"](m(this, ke)[o(555, 514, 512, 426, "(]q$")]);
    function o(B, s, E, C, x) {
      return _A(s - -182, s - 314, x);
    }
    const r = {};
    r[n(398, 489, "Q0Zz", 492) + o(442, 444, 484, 453, "bvs(")] = e[I(694, 693, 770, 772, "#Y!4") + "ge"];
    function a(B, s, E, C, x) {
      return TA(s, s - 330, E - 323, C - 88);
    }
    r[a(477, "C$Ed", 582, 553) + I(551, 541, 677, 629, "nF4E")] = A[o(504, 546, 529, 481, "feeP") + "ge"];
    const g = r;
    function I(B, s, E, C, x) {
      return TA(x, s - 393, E - 135, C - 294);
    }
    this[t(-19, -72, "TRr2") + I(697, 809, 856, 760, "S^GY")][o(523, 449, 518, 367, "(]q$")](g);
  }
  async [YA(443, "#1A2", 414) + "st"](n) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: a } = n;
    let g = 8045 + 3366 * 1 + -11411;
    function I(p, k, b, G, w) {
      return mt(p - 249, k - 496, p - 1406, b);
    }
    function B(p, k, b, G, w) {
      return cA(p - 95, w - -809, b - 58, b);
    }
    let s = r, E, C = this[I(1127, 1103, "bvs(") + I(1266, 1327, "7*Ee") + d(-337, -388, "7hyu") + "r"][I(1190, 1215, "elK(") + B(-384, -252, "D^F&", -361, -312) + d(-377, -291, "(CD*") + "s"](this[d(-301, -260, ")M$4") + d(-410, -448, "4ah1") + "s"], o);
    for (let p = 0; p < r; p++)
      if (l(1124, 1138, 1066, "MI96") !== l(969, 932, 1011, "OB((")) {
        if (g > A * a)
          if (I(1136, 1134, "bvs(") !== d(-375, -425, "oqR#")) this[f(500, "tdbV", 561) + l(1e3, 1023, 995, "oHhs") + f(614, "Hpe&", 585) + "r"][I(1199, 1175, "S^GY") + d(-325, -291, "bvs(") + l(950, 1081, 1020, "S^GY") + I(1258, 1329, "9k^4") + "or"](_0x69fbfd[I(1145, 1057, "D^F&")]) && (_0x56efc8 = this[l(975, 1026, 1043, "TRr2") + B(-487, -373, "YJNv", -457, -444) + f(524, "Sku1", 459) + "r"][I(1257, 1240, "MI96") + l(1184, 1085, 1094, "nF4E") + I(1115, 1115, "7*zF") + "s"](this[d(-391, -394, "Hp71") + B(-268, -355, "oqR#", -300, -332) + "s"], _0x5eb99d), _0x3844ff--);
          else {
            s = p;
            break;
          }
        const k = await this[I(1133, 1060, "(]q$") + B(-550, -575, "VS6N", -574, -485) + I(1279, 1314, "nF4E") + l(1007, 1149, 1081, "7hyu")](C, t);
        if (k[d(-397, -384, "TRr2")])
          if (B(-462, -337, "C$Ed", -478, -391) === B(-442, -332, "(CD*", -291, -374)) this[I(1173, 1209, "(CD*") + B(-351, -276, "7hyu", -313, -334) + f(649, "$sxX", 616) + "r"][d(-252, -221, "kphU") + f(516, "QYrQ", 593) + I(1224, 1203, "(CD*") + f(448, "7*zF", 463) + "or"](k[B(-403, -458, "ik(2", -293, -381)]) && (B(-371, -416, "*%s&", -342, -382) !== d(-390, -457, "9k^4") ? (C = this[l(1032, 1002, 1069, "Sku1") + f(561, "Hp71", 562) + d(-256, -351, "$sxX") + "r"][B(-319, -245, "QYrQ", -244, -323) + f(526, "7JiL", 551) + l(1072, 1066, 1044, "feeP") + "s"](this[d(-379, -296, "PM7Y") + d(-245, -337, "D^F&") + "s"], e), p--) : _0x370e08[d(-286, -337, "S^GY")]());
          else return;
        k[l(1024, 1e3, 1017, "S^GY") + d(-307, -299, ")aKE")] && (l(985, 970, 983, "pN#i") !== d(-288, -265, "s@As") ? { deviceId: E } = k : { deviceId: _0x43e88c } = _0x1ddfcd), g += k[B(-491, -435, "(CD*", -525, -466) + I(1249, 1244, "FGH@")] || -463 + -5 * -934 + -4207;
      } else return;
    const x = Math[l(1149, 1036, 1082, "pN#i")](g / (s || -1 * -5647 + 599 * 7 + 9839 * -1));
    this[B(-537, -371, "7*zF", -499, -448) + f(617, "oqR#", 602) + "s"] = this[I(1130, 1189, "D^F&") + l(947, 1074, 1001, "7*zF") + f(452, "kphU", 492) + "r"][f(682, "nF4E", 624) + f(385, ")M$4", 472) + f(410, "H@py", 484) + "s"](this[d(-281, -207, "TRr2") + l(1042, 987, 1045, "JfGc") + "s"], {}, E);
    function d(p, k, b, G, w) {
      return _A(p - -974, k - 321, b);
    }
    function l(p, k, b, G, w) {
      return cA(p - 181, b - 637, b - 200, G);
    }
    const Q = {};
    Q[l(1100, 1098, 1033, "cUn]") + "ge"] = x;
    function f(p, k, b, G, w) {
      return _A(b - -102, k - 288, k);
    }
    return Q;
  }
  async [_A(600, 573, "7hyu") + cA(302, 335, 274, "NkoZ") + cA(533, 494, 446, "nF4E") + cA(572, 496, 490, "Sku1")](n, t) {
    function e(s, E, C, x, d) {
      return TA(C, E - 202, C - 467, E - -843);
    }
    const A = Date[g(241, 207, 168, "9k^4")]();
    function o(s, E, C, x, d) {
      return cA(s - 261, E - -479, C - 297, x);
    }
    const r = new AbortController();
    function a(s, E, C, x, d) {
      return YA(s - 305, s, C - 771);
    }
    function g(s, E, C, x, d) {
      return TA(x, E - 381, C - 358, s - -170);
    }
    const I = setTimeout(() => {
      function s(x, d, l, Q, f) {
        return g(x - 235, d - 46, l - 170, Q);
      }
      function E(x, d, l, Q, f) {
        return g(f - -189, d - 344, l - 126, x);
      }
      function C(x, d, l, Q, f) {
        return g(l - 782, d - 424, l - 226, d);
      }
      s(454, 502, 496, "TRr2") !== s(527, 509, 517, "S^GY") ? this[E("oqR#", 163, 190, 125, 146) + C(1084, "cUn]", 1059) + "s"] = _0x43e9ac : r[C(974, "*%s&", 957)]();
    }, t);
    function B(s, E, C, x, d) {
      return cA(s - 163, s - 462, C - 313, E);
    }
    try {
      if (g(156, 217, 169, "kphU", 238) === e(-561, -475, "$sxX", -440, -568)) _0x2226ba = this[a("*%s&", 1164, 1077, 1029, 1065) + a(")aKE", 1005, 1066, 1013, 992) + e(-362, -347, "TRr2", -267, -316) + "r"][B(871, "7*Ee", 811, 809, 870) + g(179, 91, 201, "YJNv", 262) + a("^W$O", 1151, 1152, 1202, 1221) + "s"](this[a("ik(2", 1235, 1166, 1122, 1133) + e(-481, -410, "nF4E", -322, -477) + "s"], _0xe2d9ee), _0x2d82b4--;
      else {
        const { deviceId: s, mediaStream: E } = await this[B(940, "H@py", 929, 939, 978) + e(-459, -400, "4ah1", -421, -377) + e(-444, -501, "Q0Zz", -409, -528) + "r"][B(878, "YJNv", 948, 784, 833) + g(232, 187, 250, "YJNv", 180) + o(-141, -64, -74, "tdbV", -26) + "m"](n, r[a("7JiL", 1054, 1048, 1093, 1068) + "l"]), C = Date[g(243, 256, 277, "oHhs", 300)]() - A;
        Ft(E), clearTimeout(I);
        const x = {};
        return x[B(815, "*%s&", 883, 754, 865) + e(-585, -511, "D^F&", -514, -601)] = C, x[B(855, "DNN%", 778, 769, 766) + o(-199, -156, -111, "7*Ee", -82)] = s, x;
      }
    } catch (s) {
      if (o(-208, -163, -132, "qD8G") === e(-404, -343, "*%s&")) {
        const E = {};
        return E[o(-121, -62, -93, "cUn]") + o(-75, 1, 54, "Hp71")] = this[e(-366, -380, "fXNA") + o(45, -37, -3, "H@py")], E[a("#1A2", 1264, 1170) + o(-195, -108, -178, "NkoZ") + "e"] = !1, E;
      } else {
        clearTimeout(I);
        const E = {};
        return E[g(314, 259, 332, "#1A2")] = s, E;
      }
    }
  }
  [YA(336, "QYrQ", 293) + cA(502, 456, 392, "Q0Zz") + TA("YJNv", 436, 386, 399)](n) {
    function t(e, A, o, r, a) {
      return YA(e - 447, r, o - 871);
    }
    Object[t(1116, 1227, 1161, "Q0Zz") + "es"](n)[t(1153, 1215, 1122, "^W$O") + "ch"](([e, A]) => {
      const o = e;
      m(this, ke)[o] && (m(this, ke)[o] = { ...m(this, ke)[o], ...A });
    });
  }
  [TA("FGH@", 481, 606, 511) + mt(-326, -341, -296, "(]q$") + TA("D^F&", 455, 374, 405)](n) {
    function t(A, o, r, a, g) {
      return mt(A - 81, o - 22, o - 106, a);
    }
    function e(A, o, r, a, g) {
      return cA(A - 363, A - 443, r - 496, a);
    }
    this[e(837, 902, 867, "NkoZ") + t(-37, -81, -53, "cUn]") + "s"] = n;
  }
  async [_A(638, 620, "H@py") + YA(348, "nF4E", 252) + cA(484, 401, 375, "MI96") + mt(-172, -145, -178, "s@As") + YA(310, "TRr2", 263)](n) {
    function t(I, B, s, E, C) {
      return _A(I - 251, B - 52, E);
    }
    function e(I, B, s, E, C) {
      return YA(I - 413, I, B - -317);
    }
    function A(I, B, s, E, C) {
      return mt(I - 42, B - 339, E - 766, I);
    }
    if (this[e("7*zF", -19) + e("(]q$", 98)][a(622, 544, "7JiL", 607) + "h"] === -6185 * 1 + 4 * 115 + 5725) return;
    function o(I, B, s, E, C) {
      return TA(s, B - 145, s - 496, B - -306);
    }
    const r = this[o(127, 88, "oqR#") + e("7*zF", 79)][t(841, 885, 821, "cUn]") + "h"] - (1 * 8233 + 6002 * -1 + 5 * -446);
    function a(I, B, s, E, C) {
      return _A(E - -58, B - 136, s);
    }
    const g = await DQ();
    this[a(704, 660, "pN#i", 645) + A("VS6N", 497, 594, 522)][r] = { ...this[a(593, 461, "oqR#", 550) + a(619, 582, "^W$O", 631)][r], optSetting: g };
  }
  [cA(471, 431, 355, ")M$4") + TA("nF4E", 530, 476, 513) + cA(436, 490, 413, "$sxX") + TA("Hpe&", 354, 399, 437) + _A(706, 663, "s@As")]() {
    function n(o, r, a, g, I) {
      return YA(o - 198, o, g - 12);
    }
    function t(o, r, a, g, I) {
      return TA(a, r - 197, a - 294, g - -91);
    }
    const e = {};
    e[n("7JiL", 328, 298, 390) + n("$sxX", 205, 156, 249)] = this[n("4ah1", 400, 307, 314) + A("TRr2", 1253, 1420, 1331)];
    function A(o, r, a, g, I) {
      return YA(o - 29, o, g - 1035);
    }
    return e[A("oHhs", 1402, 1319, 1321) + t(302, 177, "oHhs", 239) + "e"] = !1, e;
  }
}
ke = new WeakMap();
function qn() {
  const i = ["vWWmuSok", "rrPfncW", "WRy7W4r/W4VdUSoJBCkPguldLZW", "W43dGgHOWOi", "vMK7W6/cIa", "oSoCE8kgja", "WROXEYzVW7OOWRO5WRRcNGu", "W5KWWO85W5W", "ncVcKMLT", "bSkbdmo5rW", "ygu6W4NcQW", "W7tcTmoMWOfk", "omktCLaQ", "WPJdUJq7WRu", "c8okaqbZ", "WQvQWRaala", "CmoHqSkiW5W", "d3nfWP4t", "yCoetf0a", "W7y6WO8TW5W", "FColv8kiW4a", "WONdQCo5", "wtisW4nEWO0DkCopW6zHh8kG", "WOxcPJ/cRCoq", "W6HQWOiSWRe", "h1vf", "rGWxt8oA", "pmkzAga/", "zmoCrmka", "W6H1l1u+", "W6nQW4SYW4S", "W5tcHdtdHSoS", "W4bjW5awW4G", "W7ukWRlcLeC", "W4zjW5auW48", "oSkaz38+", "e0XkfmkD", "ndDWWRvs", "DbrcksW", "dmkdcSosua", "W7XDWQu5WRC", "l8oBCmkeeW", "W5nkW5ykW4G", "CfxcN8oCpa", "mb50WQrj", "g8o3ba", "ESorWOiXEW", "ymoaoCoIW68", "W7uVWPuoW40", "bmoMfw7cIG", "W7PTjwe", "DLxcN8oEoW", "WOZcM8owW6n1", "qMGJW4xcOW", "cCobW5JdJNi", "FGaClCkY", "f05ecSkG", "wXmwzCoB", "BabGkmol", "WPtcStFcRCow", "W6b8WOuHWOS", "DmorsKm7", "W5hdHSopw8k+", "W6lcK0ddOrm", "ySobm8o9W74", "amkCemoLqq", "cbJdImkRW6y", "g8oGcgFcNa", "lJBcRuzI", "WPNcJmowW6PO", "WOtcTZlcOmox", "E8oTfCk2W5a", "BmoIhCkVW5q", "Fq5NnCol", "uCklt0SPkbdcLmkKaCoagCoB", "qX5EoYW", "W7/cGwBdUWu", "WPtdOZS", "lmkqWOTFza", "aCo9hIPl", "wH5Ept0", "wH5EoX0", "W5fzWP9RWO4", "hCkEWOXcza", "WPVcNmokW5HI", "W71Gi3OS", "W53cHfVdGq8", "WOeFW44PW5/dPmo1WRhdU04qBmk9hG", "FmkbuSkhpKOBWOm", "BSkSWOaFW5S", "eSotfH19", "dmkDdq", "bSkqWOS", "WOxcI8kvgmobAaddJw7dLmkJW5ba", "W5fbWP51WOO", "uJrClG", "W5xdU8oe", "o8kPWQ3dT8kQ", "W6DYpMq+", "ECoTemkVW4i", "BCocqhWdWOeSWOK", "WQLOW5D7WPddG8kxrSkKWP3dS8oZWQy", "mbzKWQ1E", "dHJdImkPW6e", "ghbkWQyd", "pX/cLejX", "e0Hzf8kA", "WPZdOJe7WQu", "WPdcT8ogW6qy", "W5ncWRu0yG", "W6FcOCoGWP12", "gr3dPmk1W6C", "m8kVWRldPG", "yLVcHmo1lG", "ra9+pZS", "W5RdLwzQWOq", "BComrmkaW5O", "W4tcH8onkfWEWQLhj8ocWOZdGSoy", "cSkjWOrazq", "tdqKECoy", "hmkzAga/", "W7T0jeu2", "AqmtfCkI", "zSoDjCo+W6K", "W5hdHKz/WPy", "ySocmG", "oGJcIvfX", "BSodpIT8W5r/WQXRW4ZdQvtcRG", "wCoJi8kjW7m", "y8oFtvW8", "gmowW6/dMNa", "aCokgafw", "WOpcPJ/cR8ox", "cSknWPDdyG", "hXBdJ8k0W6e", "k1aXDCkhWP4fdwVdOSoBzCoP", "WRTUWRCjla", "hq3dJSk1W50", "W7fzWRq1xG", "W6K2WOyKW4K", "W7FcNe3dOqu", "BXOCcSkJ", "WP/cPmofW7mz", "E8oyx8kpW5O", "WOZcVColW68Y", "Carip8oy", "be9fk8kb", "WPRdVCk+tr4", "emoBbrvX", "uSoTjCoBW6W", "iCkVWQJdVSkq", "W6r7WP8/WRC", "nbz0WRns", "W5znW48rW58", "Crf9aSoA", "a8o1hMhcJq", "W4zAW5GrW5i", "WO3dLmoYbfa", "D8oopSo9W6G", "W79dWQG", "eWNdLCkdW7a", "Bmopv8knW5S", "W51iWR8UDW", "BmoFi8ovW74", "W7RcSmo9WRDN", "bSkrWPfF", "rSkcWQupWQy", "WP3cV8oeW7iL", "oWVcMLXW", "WRz9WRWCoq", "WOJdHhhcSSk5mYpdRmksWRBcLmoa", "aSokW6O", "W7ddK3m", "dSoraa", "sMmLW6hcPW", "aKizA2/dHsv/WRf/AH7cSG", "oZlcI0rS", "W7L0ox4", "W7ySuCobrW", "zSoznSo9W64", "W4joWPn3WPS", "WPuLbmoFWO4", "W53dL8ostSkt", "f1rpfmkn", "WOlcOIlcJmom", "ourksSoVytrYWRDJa1/cPW", "r8k1tJddICkLW4BcSmovbSojEcCE", "W5TBW7yoW5K", "oxfwWPCh", "W6nzWRO1yG", "WRH7WQ0Qpq", "W643WQdcKKC"];
  return qn = function() {
    return i;
  }, qn();
}
function Ve(i, n, t, e, A) {
  return _(i - -91, A);
}
function pe(i, n, t, e, A) {
  return _(t - 214, e);
}
function mA(i, n, t, e, A) {
  return _(n - 416, e);
}
function ve(i, n, t, e, A) {
  return _(n - 371, i);
}
function _(i, n) {
  const t = Vn();
  return _ = function(e, A) {
    e = e - 157;
    let o = t[e];
    if (_.pFFSQI === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      _.vKlPiK = B, i = arguments, _.pFFSQI = !0;
    }
    const a = t[0], g = e + a, I = i[g];
    return I ? o = I : (_.QSebVD === void 0 && (_.QSebVD = !0), o = _.vKlPiK(o, A), i[g] = o), o;
  }, _(i, n);
}
function Vn() {
  const i = ["E3OYwrC", "WOyxW64", "WO9EW6jpyW", "x8oXW5xcTCkD", "rmk9WQNdH8oL", "tCkdj8kxAW", "lKCJwMK", "W6xcQSkkWPBcVG", "WOxdTZflcW", "W40dWRWFiCorW4nAAGhcS8oAWOi", "imofANaR", "WPHdW4HnzG", "h8kZfmkjxW", "W4hcU8kswMS", "tCkjlCkuDq", "Emo9WRRcMCod", "xSoSW5hcJW", "aZddPSoNsa", "sCoRW5JcLCkr", "f8ktWQBdP1hcVSk5gSo0m8orrSk9", "W6rMWP87ja", "DJjSW6z1", "WRhdUxxdOSou", "BtjMW4fI", "tqpcVvdcHa", "jumiWRbrW4lcGG", "WOpcGCopW4y", "WQBcGaOy", "xCkrW7ldR8k9", "WONcLSkVpZW", "W78TvCkZfJhdRSkH", "WOldQKBcNmoY", "qaxcTedcUq", "WO7dOue+WOO", "W4tdJmo8W43dTG", "wmkPomkBCG", "EtuN", "W7GOfSokqNpdR8kiW67dKeDD", "jcPaW7WKWPVdGY3cVSolW6quya", "AmkWWQhdN8oW", "ASo/W6/dUmk8", "W4tcIZ86ma", "amo/W4yWya", "lga/WPCKWPBdGNlcNNFcIIu", "W47dKCo8ExKQFgJcVYpdL8oTWQFcKq", "su4r", "w8oWW4/dT8kG", "W6ldJmoAxSoB", "W5BdKCo3W4BdTW", "eeTP", "WQmNquyCWOtdHmkMeCoTfSofWOK", "xH7cQ1JcHa", "huWKuSoC", "W5zcWRhcUbNcPaighdFdItXn", "W4hcVCkZxMK", "WPGEvcPw", "qmoHW53cK3u", "W43cQ8kRWO3cRq", "WOVdLvOTWOa", "WRdcMHygdG", "vSotuwu3W6tcQa", "eMD5WQldTW", "WO8vxZ1n", "W4TmAmoZrW", "AdHTW5T5", "b2DGWPJdSG", "W5BcVZHXWR5hCY8mnSk5WQW+uW", "WRxcHWSpba", "q8o5W4xcHLe", "sr/dIG", "W4pcJYq2iq", "W5CRW7NdTgZdVum", "WRLrW6zJEG", "u8o/W5NcJ1O", "BHjUWOG4", "lY/dSSoOrq", "W7ldMH4NcCk4zLK", "xmo3WQ9/iSoxW5io", "rdXp", "WO0owJfm", "W7T9WOesmW", "as7cTJxcImoMkSkMC8kY", "W7ldPGZdTcS", "D8knW5pdQSkS", "WP/cQ8kQ", "W7ldHs3dKcy", "teiBuHi", "pSokW7S", "WQDPDhSv", "WOC7W6u", "oZeMW57cMW", "oCkHW6NdKCkab8kFu8osWQvF", "qYDs", "W4zeitXL", "mCobW50SzG", "ASouW7C", "f8oFW4OIEG", "WQtdQvRcVSo7", "W7DWyG", "wmoSW4lcVSkl", "vmokW6pcRqi", "tCkkW67dUCkO", "WQj4xq", "WO/dUKNcPCo7", "WQ5LC3Kz", "FaqItKDpW6BdGG", "tCkplW", "tWDm", "WQJdQ0uJWOG", "WOFcHd0RyG", "W5vpz8oV", "W7tcPSkYwNi", "kmoFW7RcISkr", "q3hdOhtcHW", "mYVdQSoNsq", "wsldIW", "W7BcJ8kfWOhcOG", "aINcTJtdMCk1nmkIqCkSomkE", "vwXIWOpcPa", "uvhdOa", "WPf4W5Lsra", "ggutW68mvr8cwdi", "WQtcQJaOWQa", "W4LfzmoLCa", "F8klW6JdS8k5", "FmooW7RdSCk0", "W4ldOMuXWQ8", "W55yFCo4zW", "W5hcU8kVu3G", "h27cNSovfcHvvLzWzgum", "it3dVmo5wa", "kdRdUSoSra", "E8o2W6RdRSkL", "BtrKW4bN", "WOWgW63dV2m", "WP7cISobW4ZdTq", "wcfA", "rmk+WR7dPCoT", "W4BcQSkGvN4", "WPddRwmRW7S", "du4/xSoC", "WRxcOJuu", "WQrhecddPG", "W7FdUXhdVse", "lCopWQRcPmo8q2VcISo9bdNdVW", "W7FcP8kRWPdcPa", "qdNdICkPua", "ASoiW4BdQ8k0", "WQRcOcCzWQq", "s1uiwGu", "WRFdN1hdMSof", "sCkWWRhdLSoN", "bSoCW50", "WRBdPJrnea", "Fx8uWQn2", "W5vuEG", "WQdcHZa", "wI9DWOZcRq", "WPldO2mRW7S", "W6/dJ8oq", "bmoFW6i", "WP5fW4LEDq", "o1WIxNi", "l8ooWQ7cRCo5aNlcRCoMktG", "hSowW4W3", "W6ZcRCkSu2K", "ix/dOmoUwa", "WPqBW6xdQ0u", "DSooW6xdHCkL", "W7f2bXHo", "W55yAmoPCG", "g8kpba", "W758WO8Jyq", "W6f6hXzE", "uh3dSMNcJa", "W7xcVSkzWO3cQa", "u33dSfpcIG", "iLCSxN4", "W6tdI8oDySos", "W4dcO8kZAxq", "tr3cVvdcNG", "WQdcGtilWQu", "tdfsWRuh", "q8k8WR7dGq", "D8oFW6tcUWy", "dCk0a8kPtq", "g8k+aCkfwW", "tIfeWR8f", "qXtcVfJcKq", "b3ZdJxRcGCoupq", "WO3dONKXW70", "WOfVqCkmfW", "eCo2W5KMEG", "ECoJW5dcG1O", "W5RdJCoTW4BdTW", "WQ/cGmozW4/dPW", "hCoDW4y3na", "WOnsW7ldQ14", "lfCPswK", "q8kxWQ3dLSoQ", "BZ5GW4fL", "WPjzW6vCma", "WQ9dfcldVa", "WQFcIXKdca", "WQT1BNSv", "WO97W6vBza", "f8osW4iMzG", "WOddOvZdGmo8", "gSoCW4eM", "W5pdNCoVW4RdSa", "W6zHWOqwdq", "WQdcOdeF", "tmo7W4ZdJ8kc", "W6BdQ8oFvmoz", "WQBdKv/dKCoc", "zNmuWQ94", "WOVdO2q", "rtxdI8kLrG", "W59fF8oJzq", "WQVcIWynaW", "uwddShlcJG", "n8oCW5OVCa", "s8oBW7FcVq4", "gSosW4iM", "sdpdGq", "rmo5W5xcHfm", "Fx8cWQ1Y", "amohW4yTCW", "W5xcJZ8Wna", "hmodFKCT", "tCkLW5/cVmkm"];
  return Vn = function() {
    return i;
  }, Vn();
}
(function(i, n) {
  function t(g, I, B, s, E) {
    return _(I - 313, s);
  }
  function e(g, I, B, s, E) {
    return _(B - 452, I);
  }
  function A(g, I, B, s, E) {
    return _(B - -758, I);
  }
  const o = i();
  function r(g, I, B, s, E) {
    return _(s - -180, E);
  }
  function a(g, I, B, s, E) {
    return _(E - 408, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(-101, -57, 52, -19, "(t4U")) / 1 + -parseInt(t(657, 678, 666, "SVp)", 656)) / 2 * (parseInt(r(46, 158, 50, 128, "pTd@")) / 3) + -parseInt(e(830, "C5b5", 753, 845, 722)) / 4 + parseInt(r(183, 32, 190, 139, "C5b5")) / 5 * (-parseInt(a(551, 775, 725, "BJEh", 665)) / 6) + -parseInt(r(124, 62, 105, 98, "83UD")) / 7 * (parseInt(A(-595, "D]L#", -491, -530, -557)) / 8) + parseInt(A(-526, "SVp)", -429, -351, -455)) / 9 * (parseInt(r(56, -67, -42, 0, "(t4U")) / 10) + -parseInt(A(-445, "0UQ4", -433, -339, -443)) / 11 * (-parseInt(r(88, 226, 85, 134, "@JF]")) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vn, 705332 + 108694 * -1);
function ye(i, n, t, e, A) {
  return _(n - -317, i);
}
class kQ {
  [ye("SVp)", -80) + Ve(168, 71, 148, 88, "BJEh") + mA(675, 685, 790, "A15W")](n) {
    const t = Lr(n), e = t == null ? void 0 : t[a(867, 866, 852, "Z0wY") + r(-573, -618, "9nhv") + "s"]();
    function A(I, B, s, E, C) {
      return ye(E, s - -662);
    }
    function o(I, B, s, E, C) {
      return mA(I - 355, E - -741, s - 284, s);
    }
    function r(I, B, s, E, C) {
      return mA(I - 263, I - -1231, s - 353, s);
    }
    function a(I, B, s, E, C) {
      return ye(E, s - 974);
    }
    if (!(e != null && e[a(830, 995, 893, "bBd3") + "t"]) || !(e != null && e[r(-454, -339, "SVp)")]) || !(e != null && e[g("bBd3", -645, -535, -666, -572) + o(-104, 82, "2dJ8", -28)]))
      throw A(-701, -849, -797, "m]bs") === o(-122, 54, "U2Sp", -38) ? new S(o(-141, -74, "y2fi", -60) + g("2dJ8", -362, -329, -437, -426) + o(-154, -164, "1CM8", -112) + A(-670, -772, -690, "P$@D") + g("ZfMD", -433, -508, -453, -545) + A(-723, -517, -632, "ZfMD")) : new _0x3b198f(g("1CM8", -460, -563, -457, -554) + g("@JF]", -391, -337, -397, -418) + o(-59, -35, "6D4i", -136) + a(992, 845, 880, "1CM8") + a(863, 884, 840, "y2fi") + A(-799, -772, -789, "958s"));
    function g(I, B, s, E, C) {
      return mA(I - 492, C - -1208, s - 69, I);
    }
    if (t) return A(-774, -854, -755, "1W62") !== a(1025, 974, 963, "1cHI") ? e[o(-163, -37, "SVp)", -134) + o(52, -106, "zLPo", 7)] : _0xfbb9a4[o(-150, -261, "@Z3q", -159) + r(-448, -521, "SVp)")];
  }
  [mA(560, 670, 675, "07a2") + Ve(107, 176, 22, 151, "JngL") + Ve(113, 71, 210, 77, "qlON") + mA(877, 775, 805, "m]bs")]() {
    function n(a, g, I, B, s) {
      return pe(a - 98, g - 84, B - 589, a);
    }
    const t = document[r(-397, -357, "IbRz") + e(417, 525, 311, "F!6h") + e(341, 253, 283, "0[Wa")](A(366, 406, 307, "GO#G"));
    function e(a, g, I, B, s) {
      return mA(a - 43, a - -252, I - 48, B);
    }
    t[o(-295, -371, -336, "(t4U") + r(-500, -453, "Z0wY")] = !0, t[o(-463, -599, -497, "o@Dl")] = !0, t[r(-328, -366, "r#Is") + o(-427, -307, -348, "0[Wa") + "e"] = !0, t[r(-235, -322, "bBd3")][r(-230, -346, "F!6h") + A(460, 529, 411, "qlON")] = A(429, 477, 371, "Z0wY") + e(527, 639, 551, "xX*K");
    function A(a, g, I, B, s) {
      return pe(a - 3, g - 286, a - -80, B);
    }
    t[n("m]bs", 1092, 1272, 1179)][r(-347, -390, "D]L#") + "ty"] = "0";
    function o(a, g, I, B, s) {
      return Ve(I - -617, g - 373, I - 274, B - 442, B);
    }
    t[r(-251, -361, "6D4i")][r(-444, -412, "A15W") + r(-358, -465, "(diY") + o(-349, -407, -368, "qlON")] = e(522, 520, 582, "9rQ&"), t[A(385, 330, 391, "ZfMD")][o(-522, -449, -546, "k&xA")] = e(448, 445, 389, "i&WF");
    function r(a, g, I, B, s) {
      return ye(I, g - -312);
    }
    return t[r(-378, -267, "y2fi")][A(513, 617, 527, "y2fi") + "t"] = e(499, 544, 613, "(diY"), t;
  }
  async [ve("9rQ&", 682) + ve("U2Sp", 623) + pe(500, 703, 599, "U2Sp") + mA(648, 657, 553, "xX*K")](n, t, e) {
    return new Promise((A, o) => {
      function r(s, E, C, x, d) {
        return _(x - 528, s);
      }
      function a(s, E, C, x, d) {
        return _(C - 479, d);
      }
      function g(s, E, C, x, d) {
        return _(C - -366, x);
      }
      function I(s, E, C, x, d) {
        return _(x - 679, d);
      }
      function B(s, E, C, x, d) {
        return _(E - -66, x);
      }
      if (B(131, 161, 103, "6D4i") === B(363, 298, 219, "k&xA")) _0x4efe10[B(281, 262, 195, "6D4i") + a(826, 765, 863, 867, "UG6j")](_0x4e886d);
      else {
        const s = () => {
          function x(p, k, b, G, w) {
            return I(p - 27, k - 96, b - 250, p - -1054, w);
          }
          function d(p, k, b, G, w) {
            return I(p - 256, k - 308, b - 334, w - 39, b);
          }
          function l(p, k, b, G, w) {
            return g(p - 320, k - 204, k - 706, w);
          }
          function Q(p, k, b, G, w) {
            return a(p - 250, k - 477, b - -536, G - 214, p);
          }
          function f(p, k, b, G, w) {
            return a(p - 266, k - 156, p - -205, G - 187, k);
          }
          if (Q("BJEh", 259, 311, 215) === x(-34, -52, 26, -74, "958s")) {
            const p = _0x9fa656[x(-73, 11, -155, -181, "m]bs") + f(562, "(diY", 500, 644) + f(617, "(diY", 514, 517)](Q("wq2a", 344, 273, 288));
            return p[x(-115, -177, -93, -142, "E&ao") + Q("83UD", 208, 293, 332)] = !0, p[d(864, 1037, "YLxG", 963, 939)] = !0, p[Q("1W62", 119, 110, 15) + d(838, 966, "9nhv", 1002, 928) + "e"] = !0, p[l(614, 678, 758, 649, "i&WF")][d(1019, 1098, "IbRz", 905, 1017) + l(624, 573, 673, 542, "@JF]")] = d(1029, 1010, "qlON", 989, 917) + d(974, 1025, "xX*K", 1185, 1081), p[Q("m]bs", 283, 319, 264)][f(597, "y2fi", 619, 499) + "ty"] = "0", p[l(639, 713, 710, 629, "(diY")][d(961, 877, "@JF]", 813, 893) + d(998, 951, "BJEh", 888, 896) + f(446, "9rQ&", 532, 347)] = Q("1CM8", 270, 168, 82), p[d(838, 910, "wq2a", 803, 878)][x(-14, 8, -68, -69, "SVp)")] = d(1058, 979, "YLxG", 1093, 1064), p[f(590, "9nhv", 683, 693)][x(-23, 5, -133, -28, "YLxG") + "t"] = d(939, 928, "ud%E", 969, 1011), p;
          } else this[l(745, 684, 786, 790, "1CM8") + f(431, "ud%E", 389, 420) + "eo"](n, t);
        }, E = {};
        E[r("sh6S", 723, 904, 802)] = !0, e == null || e[g(-57, -34, 4, "JngL") + r("ZfMD", 855, 907, 794) + I(867, 850, 928, 961, "o@Dl") + "r"](I(1087, 997, 1132, 1057, "y2fi"), s, E), (async () => {
          function x(p, k, b, G, w) {
            return r(w, k - 349, b - 63, k - -1429);
          }
          function d(p, k, b, G, w) {
            return B(p - 482, b - 399, b - 261, w);
          }
          function l(p, k, b, G, w) {
            return B(p - 498, b - 542, b - 158, G);
          }
          function Q(p, k, b, G, w) {
            return I(p - 166, k - 486, b - 331, G - -1035, w);
          }
          function f(p, k, b, G, w) {
            return I(p - 485, k - 39, b - 475, b - -234, p);
          }
          if (l(771, 814, 770, "(diY") !== l(735, 641, 724, "@Z3q")) return _0x4d652c instanceof _0x36c4f0 && _0xc88f69[d(509, 599, 573, 500, "1CM8")] === x(-470, -550, -625, -622, "&Bmq") + x(-628, -736, -779, -828, "JngL") + Q(48, 68, -98, -20, "YLxG") + f("1CM8", 858, 787);
          try {
            Q(57, 4, 62, 26, "C5b5") !== f("IbRz", 826, 725, 680, 681) ? (_0x196858[x(-668, -553, -571, -604, "D]L#")](), _0x27e0a3(_0x5dd084), _0x1329a1[f("9rQ&", 774, 816, 813, 755) + "e"]()) : (await n[Q(-200, -150, -292, -198, "JngL")](), e == null || e[x(-639, -656, -710, -669, "P$@D") + x(-580, -692, -687, -799, "1CM8") + Q(128, 128, 84, 24, "(diY") + l(621, 645, 676, "U2Sp", 685)](f("07a2", 725, 660, 625, 645), s), A());
          } catch (p) {
            if (Q(65, 42, -124, -34, "qlON") !== Q(-78, -190, -121, -127, "(diY")) {
              const k = { ..._0x247c65 }, b = k, G = { ...typeof b[d(459, 599, 517, 593, "C5b5")] == f("07a2", 659, 639) + "t" ? b[l(555, 542, 655, "07a2")] : {}, ..._0x490af7 }, w = G;
              if (_0x8b437) {
                const T = {};
                T[d(624, 521, 520, 516, "9rQ&")] = _0x4d3d8c, w[d(620, 597, 568, 627, "9rQ&") + Q(89, 15, 31, -19, "C5b5")] = T;
              }
              return b[d(633, 598, 643, 657, "rGF4")] = w, b;
            } else e == null || e[Q(58, 1, 18, 27, "sh6S") + l(686, 793, 706, "Z0wY") + x(-723, -611, -665, -556, "1CM8") + f("JngL", 741, 673)](Q(-67, -44, -89, -53, "rGF4"), s), Ft(t), o(p);
          }
        })();
      }
    });
  }
  async [ve("zLPo", 648) + ve("k&xA", 676) + Ve(258, 344, 258, 258, "(t4U") + "m"](n, t) {
    function e(E, C, x, d, l) {
      return ye(E, l - 239);
    }
    function A(E, C, x, d, l) {
      return pe(E - 92, C - 289, C - 364, x);
    }
    function o(E, C, x, d, l) {
      return pe(E - 460, C - 102, x - 403, C);
    }
    const r = this[o(920, "@Z3q", 951) + A(843, 840, "F!6h") + A(945, 899, "9nhv") + B(12, 36, 61, "96&V")](), a = await navigator[B(-55, -15, 100, "IbRz") + e("1cHI", 138, 142, 147, 203) + "es"][e("2dJ8", 175, 173, 157, 231) + I(777, 719, 690, 833, "ud%E") + "ia"](n), g = this[I(827, 794, 716, 769, "9rQ&") + e("m]bs", 158, 232, 260, 183) + e("xX*K", 138, 248, 254, 156)](a);
    function I(E, C, x, d, l) {
      return mA(E - 300, C - 3, x - 67, l);
    }
    r[o(896, "E&ao", 819) + I(695, 600, 648, 568, "1CM8")] = a;
    try {
      if (A(921, 848, "1W62", 881, 855) === I(797, 752, 833, 735, "wq2a")) await this[e("9nhv", 280, 341, 150, 226) + o(1032, "1cHI", 973, 1001, 1056) + o(791, "m]bs", 813, 889, 917) + A(801, 827, "C5b5", 834, 913)](r, a, t);
      else {
        const E = _0x18f2b1(_0x34de9f), C = E == null ? void 0 : E[e("SVp)", 60, 58, 121, 115) + B(45, 24, 19, "1CM8", 30) + "s"]();
        if (!(C != null && C[B(-43, -1, -87, "3k7z", -4) + "t"]) || !(C != null && C[B(108, 92, 154, "A15W", 182)]) || !(C != null && C[o(864, "o@Dl", 843, 804, 810) + I(738, 773, 865, 853, "F!6h")])) throw new _0x471ef2(e("sh6S", 43, 30, 78, 134) + I(772, 776, 794, 704, "P$@D") + A(905, 796, "BJEh", 906, 856) + B(-103, -61, 3, "3k7z", -162) + e("C5b5", 211, 120, 161, 136) + o(954, "BJEh", 867, 847, 802));
        return E ? C[B(31, 125, 18, "&Bmq", 134) + I(785, 736, 748, 790, "xX*K")] : void (8732 * 1 + 1 * -1733 + -1 * 6999);
      }
    } catch (E) {
      if (B(-13, -35, -26, "(diY") !== o(839, "pTd@", 863)) {
        const C = {};
        C[I(591, 589, 665, 631, "96&V")] = _0x31af1d, _0x1eb076[B(52, 166, 131, "m]bs") + B(-1, -47, -129, "JngL")] = C;
      } else S[B(-124, -57, 11, "xX*K") + o(753, "1CM8", 786)](E);
    }
    function B(E, C, x, d, l) {
      return ve(d, C - -591);
    }
    const s = {};
    return s[I(596, 590, 703, 657, "GO#G") + B(32, -19, -1, "D]L#") + "m"] = a, s[e("P$@D", 182, 341, 199, 240) + o(943, "UG6j", 972)] = g, s;
  }
  [ve("IbRz", 568) + ye("k&xA", -125) + "eo"](n, t) {
    function e(o, r, a, g, I) {
      return pe(o - 483, r - 20, a - -28, r);
    }
    n[e(401, "UG6j", 360)]();
    function A(o, r, a, g, I) {
      return Ve(r - 538, r - 279, a - 392, g - 302, a);
    }
    Ft(t), n[A(859, 760, "2dJ8", 696) + "e"]();
  }
  [pe(576, 660, 545, "(t4U") + pe(538, 522, 485, "A15W") + Ve(236, 268, 193, 272, "rGF4") + mA(634, 671, 657, "k&xA") + "or"](n) {
    function t(o, r, a, g, I) {
      return ye(a, I - -385);
    }
    function e(o, r, a, g, I) {
      return mA(o - 160, a - -672, a - 276, r);
    }
    function A(o, r, a, g, I) {
      return mA(o - 88, r - 56, a - 167, g);
    }
    return n instanceof DOMException && n[t(-346, -426, "9nhv", -329, -438)] === t(-537, -411, "83UD", -585, -494) + e(-99, "@JF]", -49) + t(-495, -436, "o@Dl", -508, -406) + A(649, 730, 748, "pTd@");
  }
  [ve("GO#G", 614) + mA(605, 692, 649, "(t4U") + mA(706, 803, 916, "@JF]") + "s"](n = {}, t = {}, e) {
    const A = { ...n }, o = A;
    function r(C, x, d, l, Q) {
      return ye(d, x - 769);
    }
    function a(C, x, d, l, Q) {
      return mA(C - 214, C - -725, d - 259, l);
    }
    const g = { ...typeof o[E(-381, "bBd3", -455, -361)] == B(-210, -175, -102, "U2Sp") + "t" ? o[B(15, -13, 24, "wq2a")] : {}, ...t }, I = g;
    function B(C, x, d, l, Q) {
      return ye(l, x - -26);
    }
    if (e)
      if (s("&Bmq", -681, -672, -590) === E(-254, "BJEh", -360, -356)) {
        const C = {};
        C[B(-119, -140, -221, "E&ao")] = e, I[r(720, 638, "958s") + r(725, 640, "E&ao")] = C;
      } else _0x1c7b16 == null || _0x1c7b16[E(-274, "A15W", -183, -295) + E(-425, "U2Sp", -551, -460) + E(-499, "BJEh", -485, -454) + E(-471, "bBd3", -324, -401)](a(-78, 21, -44, "1W62"), _0x2eba20), _0x43abf0(_0x7fb7f0), _0x48016c(_0x43d48d);
    function s(C, x, d, l, Q) {
      return pe(C - 355, x - 306, l - -1083, C);
    }
    o[B(-120, -33, -39, "rGF4")] = I;
    function E(C, x, d, l, Q) {
      return ve(x, l - -1047);
    }
    return o;
  }
}
const hn = {};
hn.width = 1920, hn.height = 1080, hn.facingMode = ho.FRONT;
const SQ = hn;
var gt, Wt, oe;
class n0 {
  constructor({ defaultVideoConstrains: n = SQ, minCameraShorterSide: t = xB } = {}) {
    O(this, gt);
    O(this, Wt, []);
    O(this, oe, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, M(this, gt, e);
  }
  get availableCameraProperties() {
    return m(this, Wt);
  }
  get mediaStream() {
    return m(this, oe);
  }
  get videoTrack() {
    if (m(this, oe)) return Lr(m(this, oe));
  }
  get isCameraActive() {
    var n;
    return !!((n = m(this, oe)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Ft(t);
  }
  async open(n = {}) {
    Bg() && xt() && await Gr(718 + -1 * -4045 + 19 * -227), M(this, oe, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new S("Video track must be initialized to get next device");
    const n = await Ti(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + 1] ?? n[0]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new S("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    m(this, oe) && (Ft(m(this, oe)), M(this, oe, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = m(this, Wt), A;
  }
  getSettings() {
    if (!this.videoTrack) throw new S("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new S("Video width is undefined");
    if (!n.height) throw new S("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await Ps(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== ho.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (hi())
      return (await Ti()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Ti();
    for (const t of n) {
      Bg() && xt() && await Gr(-1173 + -1115 * 6 + 8313);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = Lr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), g = { ...a };
        g.deviceName = r.label;
        const I = {};
        I.cameraProperties = g;
        const B = I;
        m(this, Wt).push(B), Ft(o);
      } catch (e) {
        e instanceof Error && S.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...m(this, gt).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new S("Could not init camera settings");
    if (typeof m(this, gt).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < m(this, gt).minCameraShorterSide)
      throw this.close(), new S("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
gt = new WeakMap(), Wt = new WeakMap(), oe = new WeakMap();
var bo;
class GQ {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    O(this, bo, !1);
    y(this, "videoHandler");
    y(this, "cameraHandler");
    y(this, "videoRecorder");
    y(this, "performanceCheckup");
    y(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    m(this, bo) || (M(this, bo, !0), await n0.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), JB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !xt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new S("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new S("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new S("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new S("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -8350 * -1 + 3213 * -2 + -148 * 13, -37 * -209 + -4007 * 1 + -23 * 162), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    var n;
    this.cameraHandler.close(), this.videoHandler.stop(), (n = this.videoRecorder) == null || n.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    var e;
    await this.cameraHandler.open(n), WB() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !xt() && await this.cameraEvaluator.setMostRecentCameraName(t), (e = this.videoRecorder) == null || e.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !xt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new S("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
bo = new WeakMap();
var Se;
class NQ {
  constructor(n) {
    O(this, Se);
    M(this, Se, n);
  }
  get videoElement() {
    return m(this, Se);
  }
  async play(n) {
    m(this, Se).srcObject = n, await m(this, Se).play();
  }
  stop() {
    m(this, Se).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, Se).srcObject;
  }
}
Se = new WeakMap();
function Zn() {
  var i = ["WPpdVCobWPxdJa", "WQZcKYVdJSoa", "WQ7dLCk+jYe", "smojW7i", "WOfMW4Lftq", "vghdH8o1Ba", "CSkJuJddKq", "WPJcUa3dUCo8", "aLddLXhcNW", "jSoGdgNcKZddV8kiWQ7cRCorB0O", "r8ksENm", "BJOQW6r9", "WOJcQ8o4", "WQDfW4LFyG", "WPVdLIhcVCoC", "W5P5Bs3dIvDEWPLZWQG", "W5LFdSo8ga", "W7HybmoRba", "AmkfwCkLnq", "iNZdKHpcTG", "W43cKtxdTte", "W4m2W41sW7W", "gSkCWOVcKGO", "WPpcTCo5WPVcHa", "qeFdNmouAW", "W5iXW5zWW4e", "W77cImoVA3bBW47dG1dcN1iVBa", "Cmk0qaVdIG", "W5P6BIJcP3vcWOPGWQVdQa", "jSkBWRVdKXBcQCo9maXtWR7dMwldSa", "A8kSB2XJ", "n8ksx8oX", "E2RcVSoZW6y", "WOJdQLhdOde", "WPbpWOhdO8kz", "W7pdGSk+", "FNmGdKa", "imkSWQRcPWW", "gdtcNqjC", "vbhdUCk5W4G8i8ktdMm", "l1ddNa", "xSkAWPXKW7K", "WPJcGbVdG8ox", "dddcJH9l", "e8kqWQhcImkpWQ1oWOddOCkDWRC", "ymobW70", "WPrpWP3dTa", "W5xcVgzoW6rqmLxdTCo0W5xcSa", "W6ZdGa3dKSo2", "oCkqWPhcGq0", "WQD3W5XuqW", "g1NcUSoQW6W", "CSkOrc3dHG", "f0FcVa", "pSogruzFqCohmW", "W6BdHqu", "CaZcM8kIW6vyWPCwW5pdKatdIJ4", "W7dcSLLXwq", "W4BcR8kaW6RdVSopWQddRCkVtW", "W77cImoLBWGaWORdNvdcQq", "W5xdQSkGW4pdPrhdLYfJW6TpEY0", "v0tdUSooWPi", "WRFcNCo4W6VdOIPhwmoXbG", "WQtdNmkUos8", "W67dJCkKWR3dHG", "W4RcMIW", "vmoUbSkuWQThpmkJWR3cJ8k2WP/cOSof", "DSk1W79JsW", "W7VdNWRdK8oN", "W7tcJfv4tq", "W75kw8o1", "W54YW4C", "W5lcQxFdN20", "iCkJW4hdOMG", "WPtcN8o5WOdcVG", "WPxdVmorWPVdNW", "q8kszMqq", "CmoCW7RcQeS", "WRrIW5POkq", "WPWNn3FdIG", "W7hcPw3dJgO", "cmkTwG", "y8oYWP/cUMVcVCokDLub", "hMejxI8", "CZOmW61u", "W7pcRN3dIhe", "W47cRW7dV8oBW5ug", "DtOHW7jG", "W7dcK09bqW", "WOtcMSk2", "W6FdNrW", "WOnvf8onoshdVq", "jmkYuCopW7i", "lKJdHq", "WQTJW4K", "o8ogrW", "W6mNcfK", "W7vnxmoLWRu", "WRLUW5fRlW", "zmkrx3fD", "eMxdUdvR", "wMNdLG", "d8odWQxdJmoc", "amo+EGCs", "cSkxW5ddSu8", "p8kDvmoGBG", "bdBcIW", "W68Nbf9j", "W5NcNsRdQtm", "WOJdPeldVbS", "zmkGvCkOga", "WR5RW4PIoG", "n8kpsCoaza", "W5Ldfmo8oG", "iJdcNW9k", "fmk8WOtcHXy", "z8kvsgvd", "WOeJpq", "WOaVnN3dSG", "bSobucSY", "WQJdTIlcII0aW6ddR8oGWP3cUCkfW64", "WRJcGvVcISkXW6FdTSoAWPf4WO1eqW", "WRT+W55dvq", "W77cHuvMqW", "W7ldHCkLWRFdVG", "bgCvwJq", "W7ifbfHu", "pmonxICX", "FL7cNSoKW4S", "jI8QpvNcM8kPWRS", "WOFdKmk0pJu", "E23dKmocCa", "W7BdICk4WR/dHq", "CSkmtfej", "cKJcPSoRW7m", "WO09k1RdSq", "f8kqWOdcKqW", "cJpcHCksmvHpd8oZkCoIW7a", "WQXnW6bAnq"];
  return Zn = function() {
    return i;
  }, Zn();
}
function DA(i, n, t, e, A) {
  return aA(e - 4, n);
}
(function(i, n) {
  var t = i();
  function e(I, B, s, E, C) {
    return aA(I - 328, B);
  }
  function A(I, B, s, E, C) {
    return aA(s - -783, B);
  }
  function o(I, B, s, E, C) {
    return aA(C - -646, I);
  }
  function r(I, B, s, E, C) {
    return aA(B - 181, E);
  }
  function a(I, B, s, E, C) {
    return aA(I - 403, B);
  }
  for (; ; )
    try {
      var g = parseInt(A(-412, "QTJo", -396, -381, -416)) / 1 + parseInt(r(702, 662, 695, "ABDO", 658)) / 2 * (parseInt(a(850, "AQd(", 819, 802, 782)) / 3) + -parseInt(e(743, "OkGp", 748, 791, 772)) / 4 * (-parseInt(a(811, "Rpzr", 861, 811, 749)) / 5) + -parseInt(o("QTJo", -171, -279, -289, -226)) / 6 * (-parseInt(o("pQHq", -253, -188, -214, -257)) / 7) + parseInt(o("SBDD", -167, -236, -259, -203)) / 8 * (parseInt(e(704, "pQHq", 661, 771, 667)) / 9) + -parseInt(o("a[]B", -184, -165, -178, -229)) / 10 + -parseInt(A(-432, "]oxh", -393, -392, -457)) / 11;
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Zn, -1 * -114549 + 114061 * -1 + -1 * -775669);
function qA(i, n, t, e, A) {
  return aA(t - -524, i);
}
function aA(i, n) {
  var t = Zn();
  return aA = function(e, A) {
    e = e - 370;
    var o = t[e];
    if (aA.EfnEWU === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, k = C.length; p < k; p++)
          x += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(s, E) {
        var C = [], x = 0, d, l = "";
        s = r(s);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      aA.KbJFFN = a, i = arguments, aA.EfnEWU = !0;
    }
    var g = t[317 * -13 + 1580 + 2541], I = e + g, B = i[I];
    return B ? o = B : (aA.KMzhjn === void 0 && (aA.KMzhjn = !0), o = aA.KbJFFN(o, A), i[I] = o), o;
  }, aA(i, n);
}
function Ze(i, n, t, e, A) {
  return aA(A - 186, t);
}
function VA(i, n, t, e, A) {
  return aA(n - 399, e);
}
function Ie(i, n, t, e, A) {
  return aA(A - -481, e);
}
var eI, tI, oI;
class RQ {
  constructor() {
    y(this, oI, -4951 + 525 * 7 + -116 * -11);
    y(this, tI);
    y(this, eI);
    function n(A, o, r, a, g) {
      return Ie(A - 408, o - 107, r - 294, a, g - 978);
    }
    function t(A, o, r, a, g) {
      return qA(A, o - 412, o - 1455);
    }
    function e(A, o, r, a, g) {
      return DA(A - 271, o, r - 395, A - -973);
    }
    this[n(941, 911, 940, "yqDc", 968) + e(-576, "xmk3", -564) + t("RiLx", 1416) + n(885, 981, 1003, "qeb3", 952)] = Date[t("byYZ", 1398)]();
  }
  [(oI = qA("ABDO", -153, -83) + DA(511, "AQd(", 560, 511) + VA(844, 813, 749, "W84V"), tI = DA(387, "ABDO", 460, 450) + Ze(650, 599, "yK!H", 665, 658) + Ze(632, 592, "LHAy", 602, 568) + Ie(-11, -46, -118, "LHAy", -49), eI = qA("^4pi", -130, -87) + VA(763, 832, 856, "ABDO") + "p", qA("OkGp", -98, -47) + Ze(643, 532, "AQd(", 519, 589) + DA(417, "a[]B", 449, 458))]() {
    function n(r, a, g, I, B) {
      return Ie(r - 24, a - 28, g - 207, a, g - 790);
    }
    this[A("yK!H", 605, 575) + e(472, "gHyh", 414, 439) + e(326, "^!PF", 445, 392)]++;
    function t(r, a, g, I, B) {
      return DA(r - 275, I, g - 193, a - -220);
    }
    function e(r, a, g, I, B) {
      return DA(r - 199, a, g - 149, I - -38);
    }
    function A(r, a, g, I, B) {
      return VA(r - 307, a - -233, g - 84, r);
    }
    function o(r, a, g, I, B) {
      return VA(r - 246, a - -90, g - 422, B);
    }
    this[A("Qx0h", 549, 575) + o(756, 805, 827, 797, "pQHq") + t(128, 190, 173, "]oxh")] === -12979 + -2596 * -5 && (A("Qx0h", 564, 591) === t(286, 292, 265, "SqCM") ? this[n(830, "C1yD", 777) + t(255, 286, 260, "QTJo") + A("SBDD", 600, 645) + A("pQHq", 644, 674)] = _0x504fdb[o(743, 760, 765, 758, "^3dv")]() : this[t(283, 253, 230, "^!PF") + n(704, "Zj0W", 687) + "p"] = Date[n(753, "a[]B", 710)]() - this[n(709, "Zj0W", 686) + t(227, 214, 281, "L[I(") + o(786, 749, 706, 816, "pQHq") + A("D)8M", 669, 735)]);
  }
  [VA(865, 843, 830, "Vd@x") + Ie(-40, 17, 80, "xhJO", 25) + DA(386, "5[Me", 402, 379) + VA(902, 852, 922, "Bi5d") + "up"]() {
    if (!xo()) {
      if (A("B%5*", 474, 474, 467) !== t(141, 159, 142, "yK!H")) return;
      var n = {};
      return n[e("RiLx", 1498, 1482) + A("^3dv", 442, 369, 432) + "e"] = !1, n;
    }
    this[e("OkGp", 1508, 1449) + o(735, 734, "L[I(") + o(639, 681, "RiLx")] = -6 * 888 + -9544 + 14872;
    function t(a, g, I, B, s) {
      return DA(a - 339, B, I - 441, g - -344);
    }
    function e(a, g, I, B, s) {
      return VA(a - 148, I - 590, I - 370, a);
    }
    function A(a, g, I, B, s) {
      return qA(a, g - 364, B - 527);
    }
    function o(a, g, I, B, s) {
      return qA(I, g - 128, g - 809);
    }
    this[r(1031, 1076, 1068, 1040, "yK!H") + t(78, 135, 88, "byYZ") + "p"] = void 0;
    function r(a, g, I, B, s) {
      return Ie(a - 258, g - 127, I - 464, s, B - 1062);
    }
    window[r(1052, 1034, 1095, 1069, "B%5*") + A("MMjQ", 438, 441, 473) + o(778, 772, "C1yD") + t(73, 52, 54, "gHyh")](t(69, 121, 165, "Mw#h") + "wn", this[e("RiLx", 1436, 1414) + o(649, 659, "qeb3") + A("Bi5d", 502, 476, 445)][r(962, 1059, 1057, 1012, "rX!1")](this));
  }
  [Ie(34, -87, -17, "rX!1", -23) + qA("^3dv", -92, -115) + Ze(658, 624, "gHyh", 657, 652) + DA(533, "qeb3", 571, 508) + "up"]() {
    function n(r, a, g, I, B) {
      return qA(r, a - 474, g - 274);
    }
    function t(r, a, g, I, B) {
      return Ze(r - 68, a - 25, g, I - 263, r - -1019);
    }
    function e(r, a, g, I, B) {
      return Ie(r - 373, a - 481, g - 217, g, B - 770);
    }
    if (!xo()) {
      if (n("xmk3", 212, 239) === A(492, "OkGp")) return;
      if (!_0x8294b7()) return;
      this[n("rfyE", 214, 215) + A(608, "AQd(") + e(807, 809, "B%5*", 739, 745)] = -194 * 47 + -1489 * -3 + 4651, this[n("Qx0h", 185, 247) + e(794, 795, "QTJo", 751, 780) + "p"] = void 0, _0x36eceb[A(482, "^!PF") + A(577, "Qx0h") + A(523, "jf3l") + n("C1yD", 228, 207)](n("QTJo", 158, 174) + "wn", this[o(359, 374, 383, 356, "pQHq") + o(249, 267, 226, 256, "yqDc") + o(224, 239, 288, 250, "ElRd")][o(214, 277, 317, 284, "9]@#")](this));
    }
    function A(r, a, g, I, B) {
      return qA(a, a - 418, r - 625);
    }
    function o(r, a, g, I, B) {
      return Ze(r - 21, a - 392, B, I - 266, I - -309);
    }
    window[A(537, "pzJh") + o(195, 327, 270, 263, "LHAy") + t(-431, -439, "YvJs", -400) + "r"](o(405, 309, 381, 361, "L[I(") + "wn", this[e(839, 824, "W84V", 751, 784) + A(495, "MMjQ") + A(517, "^3dv")][n("^4pi", 83, 121)](this));
  }
  [DA(407, "6t0J", 513, 467) + qA("L[I(", -81, -106) + "lt"]() {
    function n(a, g, I, B, s) {
      return VA(a - 107, s - -72, I - 178, a);
    }
    function t(a, g, I, B, s) {
      return DA(a - 276, B, I - 309, I - 242);
    }
    function e(a, g, I, B, s) {
      return DA(a - 135, s, I - 249, I - 78);
    }
    function A(a, g, I, B, s) {
      return VA(a - 385, s - -1281, I - 390, B);
    }
    if (!xo() || !this[t(710, 585, 641, "9]@#") + t(784, 791, 726, "B%5*") + "p"])
      if (t(748, 808, 747, "AQd(") === e(561, 547, 576, 516, "^4pi")) this[e(525, 438, 486, 480, "byYZ") + e(535, 523, 574, 535, "Qxg%") + "p"] = _0x3a2844[A(-458, -490, -456, "6C9!", -432)]() - this[r(-315, -434, "5IWD", -371) + r(-298, -260, "QTJo", -266) + r(-405, -382, "ElRd", -384) + A(-367, -423, -418, "Qxg%", -420)];
      else {
        var o = {};
        return o[t(598, 679, 618, "Mn)r") + n("byYZ", 719, 796, 780, 726) + "e"] = !1, o;
      }
    function r(a, g, I, B, s) {
      return VA(a - 214, B - -1167, I - 232, I);
    }
    return { performance: !0, hiccupAmount: this[t(803, 799, 746, "pzJh") + t(684, 592, 658, "W84V") + e(409, 520, 467, 535, "Qxg%") + "t"](), firstHiccup: this[n("Qxg%", 764, 762, 780, 832) + t(624, 697, 691, "Mn)r") + t(794, 666, 732, "Vd@x") + e(451, 563, 493, 454, "qeb3") + "ss"]() };
  }
  [Ie(-68, -85, -123, "SqCM", -101) + qA("qeb3", -106, -41) + DA(414, "ElRd", 421, 439) + "t"]() {
    function n(e, A, o, r, a) {
      return Ze(e - 496, A - 36, r, r - 237, a - -89);
    }
    function t(e, A, o, r, a) {
      return Ie(e - 269, A - 361, o - 30, e, r - 721);
    }
    return this[n(486, 597, 481, "Mn)r", 545) + n(545, 473, 526, "]oxh", 535) + t("W84V", 677, 638, 654)];
  }
  [VA(834, 787, 745, "xhJO") + DA(410, "O1#2", 462, 432) + Ie(-19, 20, -38, "Zj0W", -7) + DA(364, "xhJO", 472, 417) + "ss"]() {
    function n(e, A, o, r, a) {
      return qA(A, A - 373, a - -70);
    }
    function t(e, A, o, r, a) {
      return VA(e - 216, A - -560, o - 300, r);
    }
    return this[t(219, 234, 294, "9]@#") + n(-143, "Qx0h", -115, -129, -184) + "p"];
  }
}
const FQ = 776 + 2 * -148, vQ = 1596 * 6 + -8313 + -11 * 93, da = -1 * 2260 + 3315 + 25 * -41, i0 = -4480 + 4822 * -1 + 11 * 847, r0 = 6 * 854 + -3164 + -1952, Jr = {};
Jr.codec = "avc1.42E01E", Jr.bitrate = 1e6;
const tn = Jr, MQ = -20 * -359 + 20 * -307 + -1038, WQ = 2 * 27589 + 40129 + 3 * -21769;
class LQ {
  constructor(n, t) {
    y(this, "shouldBeTested", !0);
    y(this, "testFramesSizesList", []);
    y(this, "maximumTestFrames");
    y(this, "maximumTestFramesSize");
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = 4993 + -2277 * -1 + 727 * -10;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class a0 {
  constructor() {
    y(this, "encoder");
  }
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw S.fromError("Encoding error: " + t);
    } });
  }
  configure(n) {
    this.encoder && this.encoder.configure(n);
  }
  encode(n, t = !1) {
    if (this.encoder) {
      const e = {};
      e.keyFrame = t, this.encoder.encode(n, e);
    }
  }
  async close() {
    this.encoder && (await this.encoder.flush(), this.encoder.close(), this.encoder = void 0);
  }
  async isConfigSupported(n) {
    const t = await VideoEncoder.isConfigSupported(n);
    return t.supported ? t.supported : !1;
  }
  static isSupported() {
    return "VideoEncoder" in window;
  }
}
function OQ(i) {
  if (!i) return !1;
  const n = a0.isSupported();
  return !n && S.logError("Video encoding is not supported in this browser."), n;
}
const Ur = {};
Ur.LOW = "low", Ur.STANDARD = "standard";
const zn = Ur, Yr = {};
Yr.SPS = "SPS", Yr.PPS = "PPS";
const Pi = Yr;
class JQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -1557 + 7 * 223, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      S.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Pi.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Pi.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Pi.SPS ? n[t] & -5 * -1999 + -43 + 1 * -9921 : n[t], o = t + (14916 + -95 * 157);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 9151 + -1338 * -4 + -14503 * 1; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === 2 * -3602 + 8806 + -1602) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (417 * 5 + -25 * 24 + -1483) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (3171 + -1808 * -2 + -6785), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class UQ {
  constructor() {
    y(this, "parameterSetsHandler");
    y(this, "START_CODE", new Uint8Array([0, 2260 + 149 * -29 + 2061, -59 * 149 + -7662 + 16453, 3671 + 2 * -1835]));
    y(this, "parameterSets");
    this.parameterSetsHandler = new JQ();
  }
  extractParameterSets(n) {
    if (this.parameterSets = void 0, !n.description) return;
    const t = this.normalizeBufferSource(n.description);
    t && (this.parameterSets = this.parameterSetsHandler.parseAVCCParameterSets(t) || {});
  }
  process(n) {
    return this.buildH264AnnexBRawVideo(n);
  }
  buildH264AnnexBRawVideo(n) {
    const t = [...this.getParameterSetsAnnexB(), ...this.getAnnexBParts(n)];
    return this.combineRawVideoParts(t);
  }
  getParameterSetsAnnexB() {
    var t, e;
    const n = [];
    return (t = this.parameterSets) != null && t["sequenceParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.sequenceParameterSet)), (e = this.parameterSets) != null && e["pictureParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.pictureParameterSet)), n;
  }
  getAnnexBParts(n) {
    const t = [];
    for (const e of n)
      t.push(...this.convertAVCCToAnnexB(e));
    return t;
  }
  convertAVCCToAnnexB(n) {
    const t = [];
    let e = 0;
    for (; e < n.length; ) {
      const A = this.extractNALUnit(n, e);
      if (!A) break;
      t.push(this.START_CODE), t.push(A.data), e = A.nextOffset;
    }
    return t;
  }
  extractNALUnit(n, t) {
    if (t + (46 * 103 + 1880 * 5 + 382 * -37) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (9718 + -1 * -6661 + 5 * -3275), r = o + A;
    if (!(r > n.length))
      return { data: n.slice(o, r), nextOffset: r };
  }
  normalizeBufferSource(n) {
    if (n instanceof ArrayBuffer) return new Uint8Array(n);
    if (n instanceof SharedArrayBuffer) return this.copyFromSharedArrayBuffer(n);
    if (n instanceof Uint8Array) return n;
  }
  copyFromSharedArrayBuffer(n) {
    const t = new ArrayBuffer(n.byteLength), e = new Uint8Array(n), A = new Uint8Array(t);
    return A.set(e), A;
  }
  combineRawVideoParts(n) {
    const t = n.reduce((o, r) => o + r.length, 0), e = new Uint8Array(t);
    let A = -6964 + 3172 * 2 + 620;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class YQ {
  constructor(n = r0, t = da) {
    y(this, "chunks", []);
    y(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (1 * 1576 + 6856 + -8431 * 1)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-1 * -2846 + -1214 + -816 * 2, n));
  }
}
class lg {
  constructor() {
    y(this, "codec");
    y(this, "bitrate");
    y(this, "resolution");
    y(this, "framerate");
  }
  setCodec(n) {
    return this.codec = n, this;
  }
  setBitrate(n) {
    return this.bitrate = n, this;
  }
  setResolution(n) {
    return this.resolution = n, this;
  }
  setFramerate(n) {
    return this.framerate = n, this;
  }
  validate() {
    if (!this.codec) throw S.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw S.logError("VideoEncoderConfigBuilder: resolution is not set.");
  }
  reset() {
    return this.codec = void 0, this.bitrate = void 0, this.resolution = void 0, this.framerate = void 0, this;
  }
  build() {
    this.validate();
    const { height: n, width: t } = this.resolution, e = {};
    return e.codec = this.codec, e.bitrate = this.bitrate, e.width = t, e.height = n, e.framerate = this.framerate, e;
  }
}
class TQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (MB() && e > A) {
      const a = e, g = A, I = a / g, B = t * I;
      return { width: Math.floor(B / (-4445 + 9 * 544 + -449 * 1)) * (240 * 2 + 5733 + -6211), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / 2) * (8797 + 11 * 298 + -12073) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-842 + 844 * 1)) * (233 * -1 + 249 + 1 * -14), height: t };
  }
  create(n, t) {
    switch (n) {
      case zn.STANDARD:
        return new lg().setBitrate(tn.bitrate).setCodec(tn.codec).setFramerate(da).setResolution(this.getScaledResolution(t, FQ)).build();
      case zn.LOW:
        return new lg().setBitrate(tn.bitrate).setCodec(tn.codec).setFramerate(i0).setResolution(this.getScaledResolution(t, vQ)).build();
      default:
        throw S.logError("Unsupported preset for video encoder config");
    }
  }
}
class PQ {
  constructor(n, t, e, A) {
    y(this, "videoProcessor");
    y(this, "videoEncoder");
    y(this, "chunkStorage");
    y(this, "qualityTester");
    y(this, "cameraHandler");
    y(this, "videoEncoderConfigFactory");
    y(this, "cameraFramerate");
    y(this, "captureIntervalId");
    y(this, "videoElement");
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new TQ(), this.chunkStorage = new YQ(), this.cameraFramerate = da, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(r0, i0), this.startRecording(zn.LOW);
  }
  startRecording(n = zn.STANDARD) {
    if (this.captureIntervalId) {
      S.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      S.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    var A;
    const t = (A = this.cameraHandler) == null ? void 0 : A.getResolution();
    if (!t) {
      S.logError("Camera resolution could not be determined.");
      return;
    }
    let e;
    try {
      e = this.videoEncoderConfigFactory.create(n, t);
    } catch (o) {
      S.logError("Failed to create video encoder configuration: " + o);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(e)) {
      S.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(e), e.framerate && (this.cameraFramerate = e.framerate);
  }
  createVideoElement(n) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = n, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      S.logError("Video element is not created.");
      return;
    }
    let n = -1249 + -7 * 1289 + 10272;
    const t = this.cameraFramerate, e = (4571 + 182 * -1 + 3389 * -1) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === -13 * -83 + -574 + -505;
        this.videoEncoder.encode(A, o), n++, A.close();
      }
    }, e);
  }
  clearCaptureInterval() {
    this.captureIntervalId && (clearInterval(this.captureIntervalId), this.captureIntervalId = void 0);
  }
  getRecording() {
    const n = this.chunkStorage.getChunks(), t = n.map((o) => {
      const r = new Uint8Array(o.byteLength);
      return o.copyTo(r), r;
    }), e = this.videoProcessor.process(t), A = {};
    return A.frameRate = this.cameraFramerate, A.bytes = e, A;
  }
}
class HQ {
  constructor() {
    y(this, "videoProcessor");
    y(this, "videoEncoder");
    y(this, "qualityTester");
    y(this, "cameraHandler");
  }
  setVideoProcessor(n) {
    return this.videoProcessor = n, this;
  }
  setVideoEncoder(n) {
    return this.videoEncoder = n, this;
  }
  setQualityTester(n) {
    return this.qualityTester = n, this;
  }
  setCameraHandler(n) {
    return this.cameraHandler = n, this;
  }
  validate() {
    if (!this.videoProcessor) throw S.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw S.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw S.logError("QualityTester is not set");
    if (!this.cameraHandler) throw S.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new PQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class KQ {
  create(n, t) {
    if (!OQ(t)) return;
    const e = new LQ(MQ, WQ), A = new a0(), o = new UQ();
    return new HQ().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function jQ(i) {
  const { facingMode: n = ho.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = ie(null), [A, o] = xA(), [r, a] = xA(), { handleError: g, setIsCameraReady: I } = re(), B = Re((E) => {
    a((C) => yB(E, C));
  }, []);
  q(() => {
    if (!e.current) {
      g(new S("Something went wrong during video initialization"));
      return;
    }
    const E = new NQ(e.current), C = new kQ(), x = new bQ(C), d = new n0(), l = new RQ(), Q = new KQ().create(d, t), f = {};
    f.videoHandler = E, f.cameraHandler = d, f.performanceCheckup = l, f.cameraEvaluator = x, f.videoRecorder = Q;
    const p = new GQ(f);
    return (async () => {
      try {
        const b = {};
        b.facingMode = n, await p.startFirstVideoStream(b);
      } catch (b) {
        if (b instanceof Error) {
          g(S.fromCameraError(b));
          return;
        }
      }
      o(p), I(!0), B(p.getCameraResolution());
    })(), () => {
      p == null || p.stopStreaming(), I(!1), o(void 0);
    };
  }, [n, g, I, e, B, t]);
  const s = {};
  return s.cameraService = A, s.cameraResolution = r, s.onCameraResolutionChange = B, s.videoRef = e, s;
}
function _Q({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = jQ(i), r = dA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ D(Pn.Provider, { value: r, children: n });
}
function qQ({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = BQ(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, sQ(t.CAMERA_PROPS_CHANGED, A), q(() => () => {
    de.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function VQ(i) {
  q(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function ZQ({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: a, onDetection: g, sessionToken: I }) {
  VQ(() => {
    t && t.destroy();
  });
  const { appState: B, firstRunningDone: s, handleAppStateChange: E, isCameraReady: C, setFirstRunningDone: x } = re(), { sunfish: d } = Yo(), { analytics: l } = Ss(), { transactionCounting: Q } = ws(), { cameraResolution: f, cameraService: p, onCameraResolutionChange: k, videoRef: b } = hQ(), G = {};
  G.cameraResolution = f, G.cameraService = p, G.customEvent = A;
  const { shouldCameraMirror: w } = qQ(G), T = Ys(void 0), X = (p == null ? void 0 : p["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && C, MA = Re(async ($) => {
    E(IA.WAITING), a($);
  }, [a, E]), yA = Re(($, Po) => {
    k($.resolution), T.value = $, g($, Po);
  }, [g, T, k]);
  q(() => {
    !s && X && (x(!0), E(IA.RUNNING));
  }, [X, E, s, x]), q(() => {
    if (B !== IA.RUNNING || !X) return;
    if (!p || !t) throw new S("Cannot start detection");
    t.imageProcessor.reset();
    const $ = {};
    return $.analytics = l, $.transactionCounting = Q, $.cameraService = p, $.fallbackInstruction = o, $.instructionCodeMap = r, $.checkToInstructionCodeMap = n, $.sessionToken = I, $.createProtoMessage = e, $.onCaptureCallback = MA, $.onDetectionCallback = yA, t.createDetection(i, $), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [B, X, t, p, MA, yA, I, T, l, e, r, n, o, i, Q]);
  const WA = {};
  return WA.videoRef = b, WA.cameraResolution = f, WA.detectionDetails = T, WA.shouldCameraMirror = w, WA;
}
const zQ = () => typeof document < "u" && document.hasFocus();
function XQ(i = {}) {
  const n = ie(i), t = ie(zQ()), [e, A] = xA(t.current);
  q(() => {
    n.current = i;
  }), q(() => {
    function r(B) {
      t.current = B, A(B);
    }
    function a() {
      Promise.resolve().then(() => {
        var B, s, E, C;
        !t.current && ((s = (B = n.current).onFocus) == null || s.call(B), (C = (E = n.current).onChange) == null || C.call(E, !0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        var B, s, E, C;
        t.current && ((s = (B = n.current).onBlur) == null || s.call(B), (C = (E = n.current).onChange) == null || C.call(E, !1)), r(!1);
      });
    }
    function I() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function $Q(i = {}) {
  const { appState: n, firstRunningDone: t } = re();
  XQ({ onBlur: () => {
    var e;
    n === IA.WAITING || n === gg.DONE || !t || (e = i.onBlur) == null || e.call(i);
  }, onFocus: () => {
    var e;
    n === IA.WAITING || n === gg.DONE || !t || (e = i.onFocus) == null || e.call(i);
  } });
}
function AE(i) {
  const { redfin: n, freemiumOverlayState: t } = re(), e = n === Nn.Higher, A = t !== Rn.HIDDEN, o = A && !e && i, r = t === Rn.VISIBLE, a = {};
  return a.showFreemiumOverlay = o, a.showFullFreemiumOverlay = r, a;
}
const la = _e(void 0);
la.displayName = "CommonThresholdsContext";
function eE() {
  const i = le(la);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function tE() {
  return hi() ? sg.MOBILE : sg.DESKTOP;
}
function oE({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = xA(tE()), r = dA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ D(la.Provider, { value: r, children: i });
}
const pn = {};
pn.timeout = 4e3, pn.threshold = 0.7, pn.instructions = ["brightness_too_high", "brightness_too_low", "document_too_far", "sharpness_too_low"];
const Hi = pn, g0 = {};
g0.min = 0.9;
const I0 = {};
I0.min = 0.65;
const Tr = {};
Tr.min = 0.25, Tr.max = 0.9;
const s0 = {};
s0.max = 8e-3;
const c0 = {};
c0.min = 0.43;
const C0 = {};
C0.min = 0.03;
const et = {};
et.confidence = g0, et.sharpness = I0, et.brightness = Tr, et.hotspotsScore = s0, et.size = c0, et.edgeDistanceToImageShorterSideRatio = C0;
const B0 = {};
B0.min = 0.8;
const Q0 = {};
Q0.min = 0.5;
const Pr = {};
Pr.min = 0.25, Pr.max = 0.9;
const E0 = {};
E0.max = 0.1;
const x0 = {};
x0.min = 0.43;
const d0 = {};
d0.min = 0.03;
const tt = {};
tt.confidence = B0, tt.sharpness = Q0, tt.brightness = Pr, tt.hotspotsScore = E0, tt.size = x0, tt.edgeDistanceToImageShorterSideRatio = d0;
const Hr = {};
Hr.MOBILE = et, Hr.DESKTOP = tt;
const nE = Hr;
function iE(i, n) {
  var t, e, A, o, r, a, g;
  return {
    confidence: {
      min: ((t = i == null ? void 0 : i.confidence) == null ? void 0 : t.min) ?? n.confidence.min
    },
    sharpness: {
      min: ((e = i == null ? void 0 : i.sharpness) == null ? void 0 : e.min) ?? n.sharpness.min
    },
    brightness: {
      min: ((A = i == null ? void 0 : i.brightness) == null ? void 0 : A.min) ?? n.brightness.min,
      max: ((o = i == null ? void 0 : i.brightness) == null ? void 0 : o.max) ?? n.brightness.max
    },
    hotspotsScore: {
      max: ((r = i == null ? void 0 : i.hotspotsScore) == null ? void 0 : r.max) ?? n.hotspotsScore.max
    },
    size: {
      min: ((a = i == null ? void 0 : i.size) == null ? void 0 : a.min) ?? n.size.min
    },
    edgeDistanceToImageShorterSideRatio: {
      min: ((g = i == null ? void 0 : i.edgeDistanceToImageShorterSideRatio) == null ? void 0 : g.min) ?? n.edgeDistanceToImageShorterSideRatio.min
    }
  };
}
function rE({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ D(
    oE,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: iE,
      thresholdsPresets: nE,
      children: i
    }
  );
}
function l0() {
  return eE();
}
function aE({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = l0(), { redfin: o } = re(), r = ie(null);
  if (q(() => {
    if (!(r != null && r.current))
      return;
    r.current.width = i.width, r.current.height = i.height, nB(r.current);
    const Q = Wn(i), f = Ds(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      Q
    ), p = Qs(i);
    n.value && (GB({
      canvas: r.current,
      polygon: n.value.processedImage.detection,
      color: "red"
    }), Ui(r.current, Q, "lime"), Ui(r.current, f, "yellow"), Ui(r.current, p, "blue"));
  }, [i, n.value, e.edgeDistanceToImageShorterSideRatio]), !n.value)
    return null;
  const {
    avgFps: a,
    detectionTime: g,
    fps: I,
    processedImage: { detection: B, instructionCode: s, invalidValidators: E, isEscalated: C },
    resolution: x,
    samVersion: d
  } = n.value, l = {
    Confidence: B.confidence,
    "Smallest edge": B.smallestEdge,
    Brightness: B.brightness,
    Hotspots: B.hotspots,
    Sharpness: B.sharpness,
    "Detection time": g,
    FPS: I,
    "Avg FPS": a,
    Tier: o,
    Instruction: s,
    Resolution: x,
    "Escalated instruction": C,
    "Component version": "8.0.0",
    "Thresholds preset": A
  };
  return d && (l["SAM version"] = d), E.length > 0 && (l["Invalid validators"] = E), /* @__PURE__ */ D(
    AQ,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function gE({ isPassport: i, isRounded: n, ...t }) {
  if (n)
    return /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: "2%" });
  if (i) {
    const e = "4%", A = `calc(${t.height} / 2)`;
    return /* @__PURE__ */ D(KA, { children: [
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
function IE(i, n) {
  const [t, e] = xA(!1), A = () => e((a) => !a), o = "" + t;
  zt(() => {
    function a() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, s.observe(i.current, E), s;
    }
    function g() {
      var C;
      if (!((C = i.current) != null && C["parentElement"])) return;
      const s = new MutationObserver((x) => {
        x.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), x.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var f;
            Q !== (n == null ? void 0 : n.current) && ((f = Q.parentElement) == null || f.removeChild(Q));
          });
        });
      }), E = {};
      return E.childList = !0, s.observe(i.current.parentElement, E), s;
    }
    const I = a(), B = g();
    return () => {
      B == null || B.disconnect(), I == null || I.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const sE = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function cE({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = ie(null), { key: o } = IE(A, t);
  return /* @__PURE__ */ D("div", { ref: A, style: sE, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ D("mask", { id: "placeholder", children: [
        /* @__PURE__ */ D("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
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
function CE({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = BB(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    cE,
    {
      cutOut: i || /* @__PURE__ */ D(gE, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function BE({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = re(), o = ie(null), { showFreemiumOverlay: r, showFullFreemiumOverlay: a } = AE(i), g = i && A === IA.RUNNING;
  return /* @__PURE__ */ D(KA, { children: [
    r && i && /* @__PURE__ */ D(
      CE,
      {
        fullOverlay: a,
        ignoreElement: o,
        resolution: i
      }
    ),
    n,
    g && /* @__PURE__ */ D("div", { ref: o, children: /* @__PURE__ */ D(
      aE,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const QE = (i, n) => {
  if (DB()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    de.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ug = {}, Ki = {}, ji, fg;
function EE() {
  if (fg) return ji;
  fg = 1, ji = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            g(I);
          else {
            for (var B = new Array(arguments.length - 1), s = 0; s < B.length; )
              B[s++] = arguments[s];
            a.apply(null, B);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, g(I));
      }
    });
  }
  return ji;
}
var hg = {}, pg;
function xE() {
  return pg || (pg = 1, function(i) {
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
      for (var I = null, B = [], s = 0, E = 0, C; a < g; ) {
        var x = r[a++];
        switch (E) {
          case 0:
            B[s++] = t[x >> 2], C = (x & 3) << 4, E = 1;
            break;
          case 1:
            B[s++] = t[C | x >> 4], C = (x & 15) << 2, E = 2;
            break;
          case 2:
            B[s++] = t[C | x >> 6], B[s++] = t[x & 63], E = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, B)), s = 0);
      }
      return E && (B[s++] = t[C], B[s++] = 61, E === 1 && (B[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, B.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, B.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var I = g, B = 0, s, E = 0; E < r.length; ) {
        var C = r.charCodeAt(E++);
        if (C === 61 && B > 1)
          break;
        if ((C = e[C]) === void 0)
          throw Error(o);
        switch (B) {
          case 0:
            s = C, B = 1;
            break;
          case 1:
            a[g++] = s << 2 | (C & 48) >> 4, s = C, B = 2;
            break;
          case 2:
            a[g++] = (s & 15) << 4 | (C & 60) >> 2, s = C, B = 3;
            break;
          case 3:
            a[g++] = (s & 3) << 6 | C, B = 0;
            break;
        }
      }
      if (B === 1)
        throw Error(o);
      return g - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(hg)), hg;
}
var _i, yg;
function dE() {
  if (yg) return _i;
  yg = 1, _i = i;
  function i() {
    this._listeners = {};
  }
  return i.prototype.on = function(n, t, e) {
    return (this._listeners[n] || (this._listeners[n] = [])).push({
      fn: t,
      ctx: e || this
    }), this;
  }, i.prototype.off = function(n, t) {
    if (n === void 0)
      this._listeners = {};
    else if (t === void 0)
      this._listeners[n] = [];
    else
      for (var e = this._listeners[n], A = 0; A < e.length; )
        e[A].fn === t ? e.splice(A, 1) : ++A;
    return this;
  }, i.prototype.emit = function(n) {
    var t = this._listeners[n];
    if (t) {
      for (var e = [], A = 1; A < arguments.length; )
        e.push(arguments[A++]);
      for (A = 0; A < t.length; )
        t[A].fn.apply(t[A++].ctx, e);
    }
    return this;
  }, _i;
}
var qi, mg;
function lE() {
  if (mg) return qi;
  mg = 1, qi = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function I(C, x, d) {
        r[0] = C, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3];
      }
      function B(C, x, d) {
        r[0] = C, x[d] = a[3], x[d + 1] = a[2], x[d + 2] = a[1], x[d + 3] = a[0];
      }
      o.writeFloatLE = g ? I : B, o.writeFloatBE = g ? B : I;
      function s(C, x) {
        return a[0] = C[x], a[1] = C[x + 1], a[2] = C[x + 2], a[3] = C[x + 3], r[0];
      }
      function E(C, x) {
        return a[3] = C[x], a[2] = C[x + 1], a[1] = C[x + 2], a[0] = C[x + 3], r[0];
      }
      o.readFloatLE = g ? s : E, o.readFloatBE = g ? E : s;
    }() : function() {
      function r(g, I, B, s) {
        var E = I < 0 ? 1 : 0;
        if (E && (I = -I), I === 0)
          g(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), B, s);
        else if (isNaN(I))
          g(2143289344, B, s);
        else if (I > 34028234663852886e22)
          g((E << 31 | 2139095040) >>> 0, B, s);
        else if (I < 11754943508222875e-54)
          g((E << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, B, s);
        else {
          var C = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -C) * 8388608) & 8388607;
          g((E << 31 | C + 127 << 23 | x) >>> 0, B, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, I, B) {
        var s = g(I, B), E = (s >> 31) * 2 + 1, C = s >>> 23 & 255, x = s & 8388607;
        return C === 255 ? x ? NaN : E * (1 / 0) : C === 0 ? E * 1401298464324817e-60 * x : E * Math.pow(2, C - 150) * (x + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function I(C, x, d) {
        r[0] = C, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3], x[d + 4] = a[4], x[d + 5] = a[5], x[d + 6] = a[6], x[d + 7] = a[7];
      }
      function B(C, x, d) {
        r[0] = C, x[d] = a[7], x[d + 1] = a[6], x[d + 2] = a[5], x[d + 3] = a[4], x[d + 4] = a[3], x[d + 5] = a[2], x[d + 6] = a[1], x[d + 7] = a[0];
      }
      o.writeDoubleLE = g ? I : B, o.writeDoubleBE = g ? B : I;
      function s(C, x) {
        return a[0] = C[x], a[1] = C[x + 1], a[2] = C[x + 2], a[3] = C[x + 3], a[4] = C[x + 4], a[5] = C[x + 5], a[6] = C[x + 6], a[7] = C[x + 7], r[0];
      }
      function E(C, x) {
        return a[7] = C[x], a[6] = C[x + 1], a[5] = C[x + 2], a[4] = C[x + 3], a[3] = C[x + 4], a[2] = C[x + 5], a[1] = C[x + 6], a[0] = C[x + 7], r[0];
      }
      o.readDoubleLE = g ? s : E, o.readDoubleBE = g ? E : s;
    }() : function() {
      function r(g, I, B, s, E, C) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          g(0, E, C + I), g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, C + B);
        else if (isNaN(s))
          g(0, E, C + I), g(2146959360, E, C + B);
        else if (s > 17976931348623157e292)
          g(0, E, C + I), g((x << 31 | 2146435072) >>> 0, E, C + B);
        else {
          var d;
          if (s < 22250738585072014e-324)
            d = s / 5e-324, g(d >>> 0, E, C + I), g((x << 31 | d / 4294967296) >>> 0, E, C + B);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), d = s * Math.pow(2, -l), g(d * 4503599627370496 >>> 0, E, C + I), g((x << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, C + B);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, I, B, s, E) {
        var C = g(s, E + I), x = g(s, E + B), d = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, Q = 4294967296 * (x & 1048575) + C;
        return l === 2047 ? Q ? NaN : d * (1 / 0) : l === 0 ? d * 5e-324 * Q : d * Math.pow(2, l - 1075) * (Q + 4503599627370496);
      }
      o.readDoubleLE = a.bind(null, e, 0, 4), o.readDoubleBE = a.bind(null, A, 4, 0);
    }(), o;
  }
  function n(o, r, a) {
    r[a] = o & 255, r[a + 1] = o >>> 8 & 255, r[a + 2] = o >>> 16 & 255, r[a + 3] = o >>> 24;
  }
  function t(o, r, a) {
    r[a] = o >>> 24, r[a + 1] = o >>> 16 & 255, r[a + 2] = o >>> 8 & 255, r[a + 3] = o & 255;
  }
  function e(o, r) {
    return (o[r] | o[r + 1] << 8 | o[r + 2] << 16 | o[r + 3] << 24) >>> 0;
  }
  function A(o, r) {
    return (o[r] << 24 | o[r + 1] << 16 | o[r + 2] << 8 | o[r + 3]) >>> 0;
  }
  return qi;
}
function Dg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Vi, wg;
function uE() {
  if (wg) return Vi;
  wg = 1, Vi = i;
  function i(n) {
    try {
      if (typeof Dg != "function")
        return null;
      var t = Dg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Vi;
}
var bg = {}, kg;
function fE() {
  return kg || (kg = 1, function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, a = [], g = 0, I; e < A; )
        I = t[e++], I < 128 ? a[g++] = I : I > 191 && I < 224 ? a[g++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (I >> 10), a[g++] = 56320 + (I & 1023)) : a[g++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, n.write = function(t, e, A) {
      for (var o = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  }(bg)), bg;
}
var Zi, Sg;
function hE() {
  if (Sg) return Zi;
  Sg = 1, Zi = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > o)
        return n(g);
      a + g > A && (r = n(A), a = 0);
      var I = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), I;
    };
  }
  return Zi;
}
var zi, Gg;
function pE() {
  if (Gg) return zi;
  Gg = 1, zi = n;
  var i = ft();
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
  }, zi;
}
var Ng;
function ft() {
  return Ng || (Ng = 1, function(i) {
    var n = i;
    n.asPromise = EE(), n.base64 = xE(), n.EventEmitter = dE(), n.float = lE(), n.inquire = uE(), n.utf8 = fE(), n.pool = hE(), n.LongBits = pE(), n.isNode = !!(typeof Dt < "u" && Dt && Dt.process && Dt.process.versions && Dt.process.versions.node), n.global = n.isNode && Dt || typeof window < "u" && window || typeof self < "u" && self || Ki, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ki)), Ki;
}
var Xi, Rg;
function u0() {
  if (Rg) return Xi;
  Rg = 1, Xi = g;
  var i = ft(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, f) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function g() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var I = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new n();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = I(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, Q, f) {
    return this.tail = this.tail.next = new o(l, Q, f), this.len += Q, this;
  };
  function B(l, Q, f) {
    Q[f] = l & 255;
  }
  function s(l, Q, f) {
    for (; l > 127; )
      Q[f++] = l & 127 | 128, l >>>= 7;
    Q[f] = l;
  }
  function E(l, Q) {
    this.len = l, this.next = void 0, this.val = Q;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = s, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(C, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function C(l, Q, f) {
    for (; l.hi; )
      Q[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[f++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(C, Q.length(), Q);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(C, Q.length(), Q);
  }, g.prototype.bool = function(l) {
    return this._push(B, 1, l ? 1 : 0);
  };
  function x(l, Q, f) {
    Q[f] = l & 255, Q[f + 1] = l >>> 8 & 255, Q[f + 2] = l >>> 16 & 255, Q[f + 3] = l >>> 24;
  }
  g.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(l) {
    var Q = t.from(l);
    return this._push(x, 4, Q.lo)._push(x, 4, Q.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, g.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var d = i.Array.prototype.set ? function(l, Q, f) {
    Q.set(l, f);
  } : function(l, Q, f) {
    for (var p = 0; p < l.length; ++p)
      Q[f + p] = l[p];
  };
  return g.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(B, 1, 0);
    if (i.isString(l)) {
      var f = g.alloc(Q = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(Q)._push(d, Q, l);
  }, g.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(B, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, Q = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = Q, this.len += f), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, Q, f), f += l.len, l = l.next;
    return Q;
  }, g._configure = function(l) {
    n = l, g.create = I(), n._configure();
  }, Xi;
}
var $i, Fg;
function yE() {
  if (Fg) return $i;
  Fg = 1, $i = t;
  var i = u0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = ft();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = n._Buffer_allocUnsafe, t.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && n.Buffer.prototype.set.name === "set" ? function(A, o, r) {
      o.set(A, r);
    } : function(A, o, r) {
      if (A.copy)
        A.copy(o, r, 0, A.length);
      else for (var a = 0; a < A.length; )
        o[r++] = A[a++];
    };
  }, t.prototype.bytes = function(A) {
    n.isString(A) && (A = n._Buffer_from(A, "base64"));
    var o = A.length >>> 0;
    return this.uint32(o), o && this._push(t.writeBytesBuffer, o, A), this;
  };
  function e(A, o, r) {
    A.length < 40 ? n.utf8.write(A, o, r) : o.utf8Write ? o.utf8Write(A, r) : o.write(A, r);
  }
  return t.prototype.string = function(A) {
    var o = n.Buffer.byteLength(A);
    return this.uint32(o), o && this._push(e, o, A), this;
  }, t._configure(), $i;
}
var Ar, vg;
function f0() {
  if (vg) return Ar;
  vg = 1, Ar = o;
  var i = ft(), n, t = i.LongBits, e = i.utf8;
  function A(s, E) {
    return RangeError("index out of range: " + s.pos + " + " + (E || 1) + " > " + s.len);
  }
  function o(s) {
    this.buf = s, this.pos = 0, this.len = s.length;
  }
  var r = typeof Uint8Array < "u" ? function(s) {
    if (s instanceof Uint8Array || Array.isArray(s))
      return new o(s);
    throw Error("illegal buffer");
  } : function(s) {
    if (Array.isArray(s))
      return new o(s);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
      })(s);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ function() {
    var s = 4294967295;
    return function() {
      if (s = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (s = (s | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return s;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return s;
    };
  }(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var s = this.uint32();
    return s >>> 1 ^ -(s & 1) | 0;
  };
  function g() {
    var s = new t(0, 0), E = 0;
    if (this.len - this.pos > 4) {
      for (; E < 4; ++E)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      E = 0;
    } else {
      for (; E < 3; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << E * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; E < 5; ++E)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; E < 5; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function I(s, E) {
    return (s[E - 4] | s[E - 3] << 8 | s[E - 2] << 16 | s[E - 1] << 24) >>> 0;
  }
  o.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return I(this.buf, this.pos += 4);
  }, o.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return I(this.buf, this.pos += 4) | 0;
  };
  function B() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(I(this.buf, this.pos += 4), I(this.buf, this.pos += 4));
  }
  return o.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var s = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, s;
  }, o.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var s = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, s;
  }, o.prototype.bytes = function() {
    var s = this.uint32(), E = this.pos, C = this.pos + s;
    if (C > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(E, C);
    if (E === C) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, C);
  }, o.prototype.string = function() {
    var s = this.bytes();
    return e.read(s, 0, s.length);
  }, o.prototype.skip = function(s) {
    if (typeof s == "number") {
      if (this.pos + s > this.len)
        throw A(this, s);
      this.pos += s;
    } else
      do
        if (this.pos >= this.len)
          throw A(this);
      while (this.buf[this.pos++] & 128);
    return this;
  }, o.prototype.skipType = function(s) {
    switch (s) {
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
        for (; (s = this.uint32() & 7) !== 4; )
          this.skipType(s);
        break;
      case 5:
        this.skip(4);
        break;
      /* istanbul ignore next */
      default:
        throw Error("invalid wire type " + s + " at offset " + this.pos);
    }
    return this;
  }, o._configure = function(s) {
    n = s, o.create = a(), n._configure();
    var E = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return g.call(this)[E](!1);
      },
      uint64: function() {
        return g.call(this)[E](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[E](!1);
      },
      fixed64: function() {
        return B.call(this)[E](!0);
      },
      sfixed64: function() {
        return B.call(this)[E](!1);
      }
    });
  }, Ar;
}
var er, Mg;
function mE() {
  if (Mg) return er;
  Mg = 1, er = t;
  var i = f0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = ft();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), er;
}
var Wg = {}, tr, Lg;
function DE() {
  if (Lg) return tr;
  Lg = 1, tr = n;
  var i = ft();
  (n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n;
  function n(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return n.prototype.rpcCall = function t(e, A, o, r, a) {
    if (!r)
      throw TypeError("request must be specified");
    var g = this;
    if (!a)
      return i.asPromise(t, g, e, A, o, r);
    if (!g.rpcImpl) {
      setTimeout(function() {
        a(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return g.rpcImpl(
        e,
        A[g.requestDelimited ? "encodeDelimited" : "encode"](r).finish(),
        function(I, B) {
          if (I)
            return g.emit("error", I, e), a(I);
          if (B === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(B instanceof o))
            try {
              B = o[g.responseDelimited ? "decodeDelimited" : "decode"](B);
            } catch (s) {
              return g.emit("error", s, e), a(s);
            }
          return g.emit("data", B, e), a(null, B);
        }
      );
    } catch (I) {
      g.emit("error", I, e), setTimeout(function() {
        a(I);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, tr;
}
var Og;
function wE() {
  return Og || (Og = 1, function(i) {
    var n = i;
    n.Service = DE();
  }(Wg)), Wg;
}
var Jg, Ug;
function bE() {
  return Ug || (Ug = 1, Jg = {}), Jg;
}
var Yg;
function kE() {
  return Yg || (Yg = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = u0(), n.BufferWriter = yE(), n.Reader = f0(), n.BufferReader = mE(), n.util = ft(), n.rpc = wE(), n.roots = bE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(ug)), ug;
}
var Tg, Pg;
function SE() {
  return Pg || (Pg = 1, Tg = kE()), Tg;
}
var N = SE();
const h = N.Reader, R = N.Writer, u = N.util, c = N.roots.default || (N.roots.default = {}), ut = c.dot = (() => {
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
      return e || (e = R.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Content();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.token = t.bytes();
            break;
          }
          case 2: {
            r.iv = t.bytes();
            break;
          }
          case 3: {
            r.schemaVersion = t.int32();
            break;
          }
          case 4: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? u.base64.decode(t.token, e.token = u.newBuffer(u.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? u.base64.decode(t.iv, e.iv = u.newBuffer(u.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = u.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = u.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? u.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? u.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  }(), i.v4 = function() {
    const n = {};
    return n.MagnifEyeLivenessContent = function() {
      function t(A) {
        if (this.images = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.images = u.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.images != null && A.images.length)
          for (let r = 0; r < A.images.length; ++r)
            c.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(c.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = c.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new c.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = c.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = c.dot.Image.toObject(A.images[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
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
        return o || (o = R.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && c.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && c.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && c.dot.v4.IosMetadata.encode(A.ios, o.uint32(
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
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Metadata();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.platform = A.int32();
              break;
            }
            case 5: {
              g.sessionToken = A.string();
              break;
            }
            case 6: {
              g.componentVersion = A.string();
              break;
            }
            case 2: {
              g.web = c.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = c.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = c.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
            let r = c.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = c.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = c.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Metadata)
          return A;
        let o = new c.dot.v4.Metadata();
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
          o.web = c.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = c.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = c.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? c.dot.Platform[A.platform] === void 0 ? A.platform : c.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = c.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = c.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = c.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), n.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = u.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.dynamicCameraFrameProperties = u.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: u.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.supportedAbis != null && A.supportedAbis.length)
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
            ).string(r[a]), c.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && c.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && c.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && c.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && c.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.AndroidMetadata(), I, B;
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.supportedAbis && g.supportedAbis.length || (g.supportedAbis = []), g.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              g.device = A.string();
              break;
            }
            case 6: {
              g.camera = c.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === u.emptyObject && (g.dynamicCameraFrameProperties = {});
              let E = A.uint32() + A.pos;
              for (I = "", B = null; A.pos < E; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    B = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[I] = B;
              break;
            }
            case 8: {
              g.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              g.croppedYuv420Image = c.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
          let o = c.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = c.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = c.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = c.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.AndroidMetadata)
          return A;
        let o = new c.dot.v4.AndroidMetadata();
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
          o.camera = c.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = c.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = c.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = c.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.dynamicCameraFrameProperties[a[g]] = c.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AndroidCamera)
          return e;
        let A = new c.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = c.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = c.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.yPlane = e.bytes();
              break;
            }
            case 3: {
              a.uPlane = e.bytes();
              break;
            }
            case 4: {
              a.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), n.Yuv420ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = c.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new c.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = c.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    }(), n.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = u.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.isoValues = u.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: u.oneOfGetter(e = ["croppedYuv420Image"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: u.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
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
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && c.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && c.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && c.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && c.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.IosMetadata(), I, B;
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraModelId = A.string();
              break;
            }
            case 2: {
              g.architectureInfo === u.emptyObject && (g.architectureInfo = {});
              let E = A.uint32() + A.pos;
              for (I = "", B = !1; A.pos < E; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              g.architectureInfo[I] = B;
              break;
            }
            case 6: {
              g.camera = c.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (s & 7) === 2) {
                let E = A.uint32() + A.pos;
                for (; A.pos < E; )
                  g.isoValues.push(A.int32());
              } else
                g.isoValues.push(A.int32());
              break;
            }
            case 8: {
              g.croppedYuv420Image = c.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
          let o = c.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = c.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
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
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = c.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = c.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.IosMetadata)
          return A;
        let o = new c.dot.v4.IosMetadata();
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
          o.camera = c.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = c.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          o.isoValues = [];
          for (let r = 0; r < A.isoValues.length; ++r)
            o.isoValues[r] = A.isoValues[r] | 0;
        }
        if (A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.IosMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = c.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digestsWithTimestamp[g] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosCamera)
          return e;
        let A = new c.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = c.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = c.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), n.IosYuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = u.newBuffer([]), t.prototype.uvPlane = u.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.yPlane != null && Object.hasOwnProperty.call(e, "yPlane") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(e.yPlane), e.uvPlane != null && Object.hasOwnProperty.call(e, "uvPlane") && A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(e.uvPlane), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.yPlane = e.bytes();
              break;
            }
            case 3: {
              a.uvPlane = e.bytes();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    }(), n.IosYuv420ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = c.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new c.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = c.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    }(), n.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = u.emptyArray, t.prototype.hashedDetectedImages = u.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = u.emptyArray, t.prototype.detectionRecord = u.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: u.oneOfGetter(e = ["croppedImage"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: u.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: u.oneOfGetter(e = ["platformDetails"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            c.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
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
            c.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            c.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && c.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && c.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && c.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.currentCameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(c.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(c.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(c.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = c.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = c.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = c.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
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
            let r = c.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = c.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = c.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = c.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = c.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.WebMetadata)
          return A;
        let o = new c.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = c.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
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
            o.hashedDetectedImagesWithTimestamp[r] = c.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = c.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = c.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = c.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = c.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[a], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = c.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = c.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = c.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.imageHash = e.string();
              break;
            }
            case 2: {
              a.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return o || (o = R.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
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
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MediaTrackSettings();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.aspectRatio = A.double();
              break;
            }
            case 2: {
              g.autoGainControl = A.bool();
              break;
            }
            case 3: {
              g.channelCount = A.int32();
              break;
            }
            case 4: {
              g.deviceId = A.string();
              break;
            }
            case 5: {
              g.displaySurface = A.string();
              break;
            }
            case 6: {
              g.echoCancellation = A.bool();
              break;
            }
            case 7: {
              g.facingMode = A.string();
              break;
            }
            case 8: {
              g.frameRate = A.double();
              break;
            }
            case 9: {
              g.groupId = A.string();
              break;
            }
            case 10: {
              g.height = A.int32();
              break;
            }
            case 11: {
              g.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              g.sampleRate = A.int32();
              break;
            }
            case 13: {
              g.sampleSize = A.int32();
              break;
            }
            case 14: {
              g.width = A.int32();
              break;
            }
            case 15: {
              g.deviceName = A.string();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MediaTrackSettings)
          return A;
        let o = new c.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (o.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (o.autoGainControl = !!A.autoGainControl), A.channelCount != null && (o.channelCount = A.channelCount | 0), A.deviceId != null && (o.deviceId = String(A.deviceId)), A.displaySurface != null && (o.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (o.echoCancellation = !!A.echoCancellation), A.facingMode != null && (o.facingMode = String(A.facingMode)), A.frameRate != null && (o.frameRate = Number(A.frameRate)), A.groupId != null && (o.groupId = String(A.groupId)), A.height != null && (o.height = A.height | 0), A.noiseSuppression != null && (o.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (o.sampleRate = A.sampleRate | 0), A.sampleSize != null && (o.sampleSize = A.sampleSize | 0), A.width != null && (o.width = A.width | 0), A.deviceName != null && (o.deviceName = String(A.deviceName)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, o.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, o.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, o.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, o.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, o.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, o.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, o.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.width = e.int32();
              break;
            }
            case 2: {
              a.height = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.ImageBitmap)
          return e;
        let A = new c.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = c.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.CameraProperties)
          return A;
        let o = new c.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = c.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = c.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && c.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && c.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && c.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && c.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && c.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.brightness = e.float();
              break;
            }
            case 2: {
              a.sharpness = e.float();
              break;
            }
            case 3: {
              a.hotspots = e.float();
              break;
            }
            case 4: {
              a.confidence = e.float();
              break;
            }
            case 5: {
              a.faceSize = e.float();
              break;
            }
            case 6: {
              a.faceCenter = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
          let A = c.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = c.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = c.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = c.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = c.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.DetectedObject)
          return e;
        let A = new c.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = c.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = c.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = c.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = c.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = c.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = c.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = c.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = c.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = c.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = c.dot.v4.Point.toObject(e.topRight, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.Point();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.x = e.float();
              break;
            }
            case 2: {
              a.y = e.float();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Point)
          return e;
        let A = new c.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), n.ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.ImageCrop)
          return e;
        let A = new c.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = c.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    }(), n.PlatformDetails = function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = u.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: u.oneOfGetter(e = ["platform"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: u.oneOfGetter(e = ["platformVersion"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: u.oneOfGetter(e = ["architecture"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: u.oneOfGetter(e = ["model"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.userAgent), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.platform), A.platformVersion != null && Object.hasOwnProperty.call(A, "platformVersion") && o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(A.platformVersion), A.architecture != null && Object.hasOwnProperty.call(A, "architecture") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.architecture), A.model != null && Object.hasOwnProperty.call(A, "model") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.model), A.browserVersions != null && A.browserVersions.length)
          for (let r = 0; r < A.browserVersions.length; ++r)
            c.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.PlatformDetails();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.userAgent = A.string();
              break;
            }
            case 2: {
              g.platform = A.string();
              break;
            }
            case 3: {
              g.platformVersion = A.string();
              break;
            }
            case 4: {
              g.architecture = A.string();
              break;
            }
            case 5: {
              g.model = A.string();
              break;
            }
            case 6: {
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(c.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !u.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !u.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !u.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !u.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !u.isString(A.model))
          return "model: string expected";
        if (A.browserVersions != null && A.hasOwnProperty("browserVersions")) {
          if (!Array.isArray(A.browserVersions))
            return "browserVersions: array expected";
          for (let o = 0; o < A.browserVersions.length; ++o) {
            let r = c.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PlatformDetails)
          return A;
        let o = new c.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = c.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = c.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    }(), n.BrowserVersion = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.name = "", t.prototype.version = "", t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.name), e.version != null && Object.hasOwnProperty.call(e, "version") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.version), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.name = e.string();
              break;
            }
            case 2: {
              a.version = e.string();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !u.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !u.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.BrowserVersion)
          return e;
        let A = new c.dot.v4.BrowserVersion();
        return e.name != null && (A.name = String(e.name)), e.version != null && (A.version = String(e.version)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.name = "", o.version = ""), e.name != null && e.hasOwnProperty("name") && (o.name = e.name), e.version != null && e.hasOwnProperty("version") && (o.version = e.version), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    }(), n.FaceContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.FaceContent)
          return A;
        let o = new c.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    }(), n.DocumentContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DocumentContent)
          return A;
        let o = new c.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    }(), n.Blob = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: u.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && c.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && c.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && c.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && c.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && c.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && c.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && c.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && c.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Blob();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.documentContent = c.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = c.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = c.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = c.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = c.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Blob)
          return A;
        let o = new c.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = c.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = c.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = c.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = c.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = c.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = c.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = c.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = c.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = c.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = c.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && c.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && c.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && c.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = c.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = c.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = c.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = c.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = c.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = c.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.TravelDocumentContent)
          return e;
        let A = new c.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = c.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = c.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = c.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = c.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? c.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : c.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = c.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && c.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = c.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.LdsMasterFile)
          return e;
        let A = new c.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && c.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && c.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && c.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && c.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && c.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && c.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && c.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && c.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && c.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new c.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return o || (o = R.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Lds1ElementaryFile();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || u.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new c.dot.v4.Lds1ElementaryFile();
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
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && c.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && c.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = c.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = c.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = c.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = c.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AuthenticationStatus)
          return e;
        let A = new c.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = c.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = c.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = c.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = c.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.status = e.int32();
              break;
            }
            case 2: {
              a.protocol = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        if (e instanceof c.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new c.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? c.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : c.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? c.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : c.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return o || (o = R.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
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
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.status = A.int32();
              break;
            }
            case 2: {
              g.protocol = A.int32();
              break;
            }
            case 3: {
              g.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || u.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new c.dot.v4.ChipAuthenticationStatus();
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
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
      t.prototype.image = null, t.prototype.segments = u.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: u.oneOfGetter(e = ["image"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            c.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              g.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(c.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = c.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new c.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = c.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
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
        return A || (A = R.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = c.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
          let A = c.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new c.dot.v4.EyeGazeLivenessSegment();
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
          A.image = c.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? c.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : c.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), n.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), n.MultiRangeLivenessContent = function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.stepResults = u.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.stepResults != null && A.stepResults.length)
          for (let r = 0; r < A.stepResults.length; ++r)
            c.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && c.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(c.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = c.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = c.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new c.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = c.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = c.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    }(), n.MultiRangeLivenessStepResult = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.challengeItem = e.int32();
              break;
            }
            case 2: {
              a.image = c.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.challengeItem != null && e.hasOwnProperty("challengeItem"))
          switch (e.challengeItem) {
            default:
              return "challengeItem: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              break;
          }
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new c.dot.v4.MultiRangeLivenessStepResult();
        switch (e.challengeItem) {
          default:
            if (typeof e.challengeItem == "number") {
              A.challengeItem = e.challengeItem;
              break;
            }
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED":
          case 0:
            A.challengeItem = 0;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO":
          case 1:
            A.challengeItem = 1;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE":
          case 2:
            A.challengeItem = 2;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO":
          case 3:
            A.challengeItem = 3;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE":
          case 4:
            A.challengeItem = 4;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR":
          case 5:
            A.challengeItem = 5;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE":
          case 6:
            A.challengeItem = 6;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessStepResult.image: object expected");
          A.image = c.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? c.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : c.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.ImageWithTimestamp.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    }(), n.MultiRangeLivenessChallengeItem = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    }(), n.MultiRangeLivenessMetadata = function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.detections = u.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = R.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            c.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.detections && a.detections.length || (a.detections = []), a.detections.push(c.dot.v4.FaceDetection.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let o = c.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new c.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = c.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = c.dot.v4.FaceDetection.toObject(e.detections[r], A);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    }(), n.FaceDetection = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && c.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              a.position = c.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = c.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.FaceDetection)
          return e;
        let A = new c.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (u.Long) {
            let r = new u.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    }(), n.FaceDetectionPosition = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && c.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = c.dot.PointDouble.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.faceSizeToImageShorterSideRatio = e.double();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = c.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.FaceDetectionPosition)
          return e;
        let A = new c.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = c.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = c.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    }(), n.SmileLivenessContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && c.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = c.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = c.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.SmileLivenessContent)
          return A;
        let o = new c.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = c.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = c.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = c.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = c.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), n.PalmContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PalmContent)
          return A;
        let o = new c.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
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
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Image();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  }(), i.ImageWithTimestamp = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.image = null, n.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && c.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = c.dot.Image.decode(t, t.uint32());
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = c.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (u.Long ? (e.timestampMillis = u.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, u.Long) {
          let o = new u.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
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
      return e || (e = R.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageSize();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.width = t.int32();
            break;
          }
          case 2: {
            r.height = t.int32();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageSize)
        return t;
      let e = new c.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
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
      if (e || (e = R.create()), t.items != null && t.items.length) {
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
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Int32List();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let g = t.uint32() + t.pos;
              for (; t.pos < g; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      if (t instanceof c.dot.Int32List)
        return t;
      let e = new c.dot.Int32List();
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
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
      return e || (e = R.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.RectangleDouble();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.left = t.double();
            break;
          }
          case 2: {
            r.top = t.double();
            break;
          }
          case 3: {
            r.right = t.double();
            break;
          }
          case 4: {
            r.bottom = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.RectangleDouble)
        return t;
      let e = new c.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
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
      return e || (e = R.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.DigestWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  }(), i.Video = function() {
    function n(e) {
      if (e)
        for (let A = Object.keys(e), o = 0; o < A.length; ++o)
          e[A[o]] != null && (this[A[o]] = e[A[o]]);
    }
    n.prototype.bytes = null, n.prototype.containerMp4 = null, n.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(n.prototype, "_bytes", {
      get: u.oneOfGetter(t = ["bytes"]),
      set: u.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: u.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: u.oneOfSetter(t)
    }), n.create = function(e) {
      return new n(e);
    }, n.encode = function(e, A) {
      return A || (A = R.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && c.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && c.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof h || (e = h.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.Video();
      for (; e.pos < r; ) {
        let g = e.uint32();
        if (g === o)
          break;
        switch (g >>> 3) {
          case 1: {
            a.bytes = e.bytes();
            break;
          }
          case 2: {
            a.containerMp4 = c.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = c.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, n.decodeDelimited = function(e) {
      return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || u.isString(e.bytes))))
        return "bytes: buffer expected";
      if (e.containerMp4 != null && e.hasOwnProperty("containerMp4")) {
        A.content = 1;
        {
          let o = c.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = c.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof c.dot.Video)
        return e;
      let A = new c.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? u.base64.decode(e.bytes, A.bytes = u.newBuffer(u.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = c.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = c.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? u.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, n;
  }(), i.VideoContainer = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoContainer();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, n;
  }(), i.VideoStream = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoStream();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          case 2: {
            r.frameRate = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, n;
  }(), i.PointInt = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointInt();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.x = t.int32();
            break;
          }
          case 2: {
            r.y = t.int32();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !u.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !u.isInteger(t.y) ? "y: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.PointInt)
        return t;
      let e = new c.dot.PointInt();
      return t.x != null && (e.x = t.x | 0), t.y != null && (e.y = t.y | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = t.x), t.y != null && t.hasOwnProperty("y") && (A.y = t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, n;
  }(), i.PointDouble = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointDouble();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.x = t.double();
            break;
          }
          case 2: {
            r.y = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.PointDouble)
        return t;
      let e = new c.dot.PointDouble();
      return t.x != null && (e.x = Number(t.x)), t.y != null && (e.y = Number(t.y)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = e.json && !isFinite(t.x) ? String(t.x) : t.x), t.y != null && t.hasOwnProperty("y") && (A.y = e.json && !isFinite(t.y) ? String(t.y) : t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  }(), i;
})();
(function(i, n) {
  const t = i();
  function e(a, g, I, B, s) {
    return oA(g - -142, a);
  }
  function A(a, g, I, B, s) {
    return oA(g - -153, I);
  }
  function o(a, g, I, B, s) {
    return oA(B - -51, I);
  }
  function r(a, g, I, B, s) {
    return oA(I - 235, a);
  }
  for (; ; )
    try {
      if (-parseInt(o(385, 350, "qHVR", 388, 297)) / 1 + -parseInt(e("6inQ", 413, 402, 444, 334)) / 2 + -parseInt(o(665, 594, "kIVi", 570, 641)) / 3 + parseInt(A(334, 416, "DwzV", 402, 469)) / 4 * (-parseInt(o(410, 471, "r&0]", 452, 395)) / 5) + parseInt(e("j6b0", 344, 437, 445, 359)) / 6 + parseInt(r("UL)N", 837, 766, 785, 687)) / 7 * (-parseInt(o(478, 427, "B&$^", 402, 453)) / 8) + parseInt(o(387, 447, "$IS^", 487, 484)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Xn, -620371 + -1 * 1693 + 992878);
function Xn() {
  const i = ["WQhcJLP/phGaW7NcKCkAW67cPSoD", "WPBcSCk4qta", "pL9Dzd8", "W5RcHmkIWRrw", "W70giCo4W7m", "W7iypCoqW50", "W5hcIHX7WPqKW6G", "WQBdK8orW7hdIG", "u2ZdNmodWPu", "aComWRzykG", "fvtcHGFcMq", "tMhcN8kEW6S", "q8onW5hdRqG", "W7pcO8oFWPvUWPOFW6GlW6ZcJr7dNLa", "WRBdJmk8W5yp", "WODZWQ/cNr4", "qgpcJ8oTWO8", "WQ4ykCozW5i", "W5FcNmoWW73dIG", "WO/dVSkiW4eB", "oCkEW79Lqq", "pwrFn34", "WR4Yhb/dSW", "uh7cKmksW50", "WRnZW7JdKx7cHfC", "WPVdV8k/WPas", "WRGNiLr7", "d8kbW51tmG", "WPS3W4TJmW", "hCkHW7bOpG", "WOaiC0TV", "WRDltrxdRq", "W7aAW4pcT8kV", "WQNcLSkJW70O", "utxcKbVcPq", "ASozmCovW7W", "w8oTWRxdTW0", "WOC2Dey", "t2lcL8oKW64", "FY7cHLtdLa/cUf/dJMZdM3OR", "WRdcTwmkWQy", "WPRcOvegWPK", "W6H8EbhdQG", "W4/cTCkrWPVdRq", "WQZdQ8o9W4ZcIq", "gSo4humR", "q2/cN8oMWO0", "W41XEu/dPq", "kNhdNJa4", "WQaWF2v0", "W4zLW5NdQxq", "WOBcTwaBW70", "WRflW4NcTHi", "W60DW5RcP8kg", "WRtcUJ3cICo8", "WOFcH8koWOj3", "WRVdUmkGWRDmWOul", "ovZdHsiG", "W4WDW4dcKCke", "WOlcKSkOWQLd", "t8oUc8oP", "WQHAtqtdLq", "ASopoCkXW5i", "jvhdLbqc", "WOxcQ8kCW7K2", "dKDNgmok", "WRldV8kcW7O8", "W4riW6xcGmkJ", "e1b/jqu", "E1qJAxS", "BvLPCGG", "W4FdKqeIvq", "WOGFhKhcMq", "W61PWONcIt4", "WO/cUcRcKmoh", "WRbLgqddVa", "g8kAW45LeW", "u8kwW7BcP8oY", "W7iCfSozW70", "kM/dUdBcTa", "WQtdMmkwEai", "W4tcQCkZWRRcTa", "W5vFzgJdPW", "W6Wjj0BcVG", "W7ldJW18W7/cImk1W7BdGrRcGGi", "WPRcVuqZbW", "A2i/hSkI", "WRhdQGvYWOK", "WPCzW6FcPmkM", "f17dMrW4", "W7NcQ8kOhvS", "WQhcILH7n34pWQZcRCkmW5JcKSovW74", "W68DW4xcVCkT", "BLO7zSkp", "ueNcS8o9WPq", "WR9pDq1z", "agldKc1y", "WPe4iaTq", "E0Drxae", "WQJcRmkEsYa", "WOHGm2hdRW", "WO9YW4BcPSkn", "WPlcIt/dRCos", "WP5LzWBdPG", "W6GacbxcNq", "WPLdEIddGW", "W7RdQsWcqG", "WRldSmkwW6eK", "bcrxzSk/W7tdO3G/W7tcLSo4", "WOJdJSkOW5SG", "feZdPXaJ", "WO/dRCk5W7Dy", "W7FcLSoiWQS", "W7dcSqyDWPG", "WPxcSX7cI8ob", "WRv0nHtdPa", "a1ldLvBcUq", "DConW5/cImoY", "WQpcJCkQz8kB", "FvlcHfxcMq", "k8oAW6DkDW", "dNDqueK", "AtTLyCoctH/dQZqbWPZcNCkT", "WQSdmH/dPG", "W73dK8kiW6vw", "WPvBWPtcOJ4", "B2ZcT8oEWPe", "fCkUr37dLW", "mmkQAdBdGa", "W6i7W5FcPCkR", "W4SyhmozWRu", "WRbZmZRcNW", "WQjwWQBdLmkS", "pLbLyG0", "y0rqie8", "eWe/CLJcNIesiudcVs8", "d0mIC0C", "avXqyJu", "WRqNrwOX", "p1jsAJO", "gvhdSaxcTa", "WRZcNJLbWO0", "AmozmSoiW5G", "W73cU8o0W77dRG", "WQ17WP/dLSkN", "WRJcSSo9tdy", "dxG6h8kC", "WQKdoHVdOG", "W4rwDZZcPG", "W4pcPmoFWO/dOW", "WRpcKav9WRe", "W4Xfg8oKW4K", "cSkozWxdTa", "W7yvk8oG", "WO4EeutcMa", "W6e0WQhcPCom", "W5JdTCkxWRrF", "v8o/WOJcH8oU", "WOqUrXVcIG", "q0y3gSkZ", "W5jzW7VdIvq", "WRNdOCoiW7FcSq", "WQOryvDz", "W4n4WQBcJ8kN", "yeieB8oD", "B8o+WR4gqGHEuM/dQZSS", "W7JdMmkmtri", "xcacnCk7", "tfSOpCkk", "mSkowrNdHG", "oxO5mq", "WP9FycldJG", "tuiMnmo9", "BulcUtVdGa", "zmo4WROitGbrDM/dJJS+", "W73dH8oZWOVdSG", "WQxcJCkvqCkb", "CSoFF2Lo", "uSolW4VcSSow", "tWWmfCk/", "WQ8UtqtcKG", "CutcPsRcOG", "WR7dM1vvxa", "AcxdMxhdMW", "ugvJlJ0", "pae1sGlcImo6W4dcNeldGCksWPi", "aCkUxYldJW", "kCoCg0ni", "zh/cNCo/WQS", "W5ZcKCocWQrEf8kBxmkUiLJcLa", "W51DW6tcHMq", "W5LEAMFdNG", "WORcRh82CG", "WQddIWCauW", "W7q4CbtcVa", "WQmSixLT", "WQZcTbVcI8kM", "fx7dJrdcKa", "CqdcUmoLW6a", "WOWmfIFdUG", "jYKcbmk3", "FMZcHmoTWOG", "vM4Lemol", "wCoVW7uu", "W51yW4ddKaa", "WPldSbzLWRW", "W5ZcLCkKW5Sc", "W5yiW7NcPmkX", "WQpdPSkbW4e", "WQ7cUSkAzHe", "v8kIrsVdVW", "WPvcWQNcLCky", "ESk0WQxdIay", "WQlcKCkGW5qW", "WOGUuaxcSW", "bSoaW5aNna", "WP3cSq9DWPG", "W4hdRSkaWPVcIa", "W59PWP3cP8kT", "kYmSi8klWOzX", "WOW+fslcOa", "WOFcMmkkBtu", "WOG6kYxcPW", "WOv6W7VcL8kt", "W7OGW47cK8o1jsxcQmoHWQzAWRK", "wedcRJVdHa", "pLXtxgS", "WOJcRsDuBW", "w1CeEmkc", "W4ffkqWXk8kHvSkxW63cNsO", "W4BdQSksWQ7cUW", "qCoKWRdcPci"];
  return Xn = function() {
    return i;
  }, Xn();
}
function GE() {
  function i(B, s, E, C, x) {
    return oA(s - 848, x);
  }
  function n(B, s, E, C, x) {
    return oA(E - 251, B);
  }
  const t = g(690, 740, "oD&7") + g(696, 666, "nnCJ") + g(762, 737, "J!rH") + n("m5&d", 648, 742) + g(811, 746, "AQQ3") + a(659, 769, "0Rom") + i(1289, 1330, 1218, 1227, "i@1r") + g(874, 959, "@HFY") + A(522, 479, "8%JD") + a(880, 770, "nnCJ") + g(822, 713, "k5XM") + g(888, 803, "n12]") + g(750, 732, "$IS^") + g(699, 722, "maJH") + a(739, 826, "Qf*i") + n("maJH", 814, 707) + g(869, 832, "uNqf") + A(491, 403, "H0Mg") + a(635, 642, "WEZE") + a(750, 792, "Qf*i") + g(796, 820, "!jtb") + A(423, 470, "DwzV") + A(665, 606, "0f[f") + A(489, 417, "3Ksv") + A(320, 430, "^C6!") + g(815, 719, "dTS@") + A(483, 485, "n12]") + a(692, 666, "@HFY") + A(397, 443, "oD&7") + a(862, 850, "Qf*i") + n("J1NT", 947, 903) + i(1291, 1311, 1350, 1387, "0f[f") + g(687, 700, "0f[f") + g(840, 843, "m5&d") + g(775, 674, "Abfd") + a(708, 820, "J!rH") + i(1314, 1423, 1377, 1330, "Qf*i") + a(684, 754, "8%JD") + g(719, 677, "UL)N") + n("SaRW", 913, 875) + i(1340, 1439, 1531, 1482, "qHVR") + i(1459, 1441, 1487, 1524, "1xiL") + A(398, 467, "i@1r") + A(370, 415, "j6b0") + a(846, 800, "uNqf") + n("3wn4", 764, 823) + A(559, 611, "8kz!") + i(1437, 1352, 1312, 1294, "Abfd") + n("Abfd", 896, 808) + g(747, 659, "^$q9") + g(778, 809, "n12]") + a(579, 686, "0f[f") + i(1238, 1309, 1226, 1359, "8kz!") + n("j6b0", 766, 838) + A(528, 529, "r&0]") + a(610, 699, "&0]A") + a(604, 658, "k5XM") + n("0Rom", 781, 790) + g(733, 635, "8%JD") + n("6inQ", 799, 870) + A(608, 546, "B&$^") + a(640, 683, "k5XM") + A(678, 618, "8kz!") + a(765, 761, "dTS@") + A(499, 597, "B9^G") + A(482, 478, "3wn4") + a(781, 767, "Qf*i") + i(1373, 1445, 1373, 1515, "B&$^") + n("i@1r", 913, 840) + A(405, 395, "J!rH") + i(1463, 1509, 1561, 1461, "&c@]") + A(506, 505, "X$ts") + g(740, 683, "X$ts") + g(799, 763, "maJH") + g(795, 746, "j6b0") + a(651, 738, "WEZE") + n("X$ts", 713, 801) + A(435, 480, ")Yqx") + i(1537, 1479, 1415, 1501, "^$q9") + n("WEZE", 713, 692) + g(841, 791, "@HFY") + g(757, 685, "nnCJ") + a(574, 636, "1xiL") + i(1506, 1492, 1408, 1515, "j6b0") + n("j(KS", 942, 916) + i(1313, 1284, 1342, 1352, "n12]") + i(1492, 1461, 1419, 1362, "n12]") + a(730, 703, "Abfd") + g(720, 793, "UL)N") + a(670, 707, "j(KS") + g(682, 629, "&0]A") + n("j6b0", 810, 817) + n("X$ts", 730, 821) + a(806, 860, "J!rH") + A(359, 433, "K*i6") + i(1238, 1322, 1434, 1365, "kIVi") + n("3Ksv", 999, 910) + g(817, 888, "@HFY") + g(781, 869, "8%JD") + i(1239, 1345, 1276, 1297, "uNqf") + n("3wn4", 784, 713) + A(546, 509, "J!rH") + i(1372, 1389, 1479, 1439, "0f[f") + g(828, 925, "k5XM") + n("G4OG", 790, 691) + g(767, 664, "0Rom") + a(609, 671, "X$ts") + n("3Ksv", 736, 697) + i(1284, 1361, 1439, 1397, "8kz!") + a(727, 828, "0f[f") + a(880, 813, "G4OG") + n("XAHs", 752, 816) + a(848, 815, "k5XM") + i(1393, 1340, 1385, 1239, "SaRW") + i(1381, 1493, 1410, 1451, "oD&7") + A(481, 572, "JtOr") + n("J!rH", 921, 852) + g(737, 763, "0Rom") + g(764, 796, "B9^G") + i(1372, 1443, 1537, 1559, ")Yqx") + i(1341, 1384, 1309, 1473, "Abfd") + n("kIVi", 712, 727) + i(1375, 1453, 1429, 1463, "&c@]") + A(332, 424, "8kz!") + i(1519, 1497, 1587, 1521, "6inQ") + A(550, 491, "DwzV") + a(571, 645, "nnCJ") + i(1422, 1434, 1420, 1392, "WEZE") + n("X$ts", 922, 845) + a(768, 692, "3wn4") + g(701, 730, "J!rH") + A(348, 412, "m5&d") + A(471, 502, "@HFY") + a(770, 844, "uNqf") + a(811, 695, "&0]A") + n("Qf*i", 950, 867) + a(646, 755, "X$ts") + n("4ErS", 870, 780) + a(863, 791, "nnCJ") + A(640, 564, "6inQ") + a(822, 747, "8kz!") + a(859, 771, "J!rH") + g(726, 710, "4ErS") + a(555, 631, "AQQ3") + a(606, 688, "Abfd") + n("0Rom", 765, 853) + A(350, 438, "8kz!") + a(599, 689, "@HFY") + g(870, 925, ")Yqx") + n("n12]", 804, 699) + a(570, 663, "oD&7") + A(673, 620, "WqNG") + A(632, 588, "G4OG") + g(878, 818, "J!rH") + n("WEZE", 734, 831) + a(561, 661, "50qt") + a(891, 822, "B9^G") + i(1330, 1329, 1218, 1357, "G4OG") + n("0Rom", 765, 751) + g(755, 687, "kIVi") + i(1300, 1365, 1329, 1400, "^$q9") + a(673, 774, "50qt") + i(1562, 1474, 1467, 1358, "JtOr") + n("WEZE", 951, 835) + i(1442, 1367, 1290, 1282, "J!rH") + a(775, 709, "dTS@") + g(788, 744, "8kz!") + g(866, 836, "SaRW") + a(773, 727, "J1NT") + a(910, 836, "8%JD") + a(867, 856, "B&$^") + a(834, 797, "!jtb") + a(835, 766, "0f[f") + i(1302, 1374, 1342, 1370, "j6b0") + i(1380, 1331, 1317, 1360, "3Ksv") + i(1320, 1396, 1458, 1376, "j(KS") + A(470, 486, "H0Mg") + i(1503, 1406, 1405, 1411, "8kz!") + g(756, 867, "!jtb") + i(1529, 1471, 1500, 1512, "XAHs") + i(1499, 1390, 1348, 1399, "@HFY") + n("^C6!", 738, 762) + g(879, 988, "JtOr") + a(692, 682, ")Yqx") + a(899, 796, "r&0]") + g(872, 930, "$IS^") + n("G4OG", 976, 879) + g(824, 874, "n12]") + i(1487, 1459, 1414, 1511, "6inQ") + g(785, 842, "$IS^") + a(852, 857, "H0Mg") + a(874, 803, "AQQ3") + n("0Rom", 676, 730) + i(1385, 1489, 1557, 1565, "&c@]") + a(884, 847, "j(KS") + n("DwzV", 693, 791) + i(1184, 1290, 1215, 1399, "B9^G") + A(614, 518, "UL)N") + i(1243, 1346, 1287, 1291, "UL)N") + A(526, 495, "n12]"), e = window[A(634, 575, "DwzV")](t);
  function A(B, s, E, C, x) {
    return oA(s - -42, E);
  }
  const o = window[g(887, 787, "^C6!")](e), r = pQ(o);
  function a(B, s, E, C, x) {
    return oA(s - 193, E);
  }
  function g(B, s, E, C, x) {
    return oA(B - 232, E);
  }
  const I = {};
  return I[A(499, 517, "k5XM")] = xs, I[n("nnCJ", 872, 851)] = uB, window[n("X$ts", 771, 803) + "o"][a(726, 670, "@HFY") + "e"][n("!jtb", 810, 876) + a(711, 677, "@HFY")](n("i@1r", 740, 758), r, I, !0, [n("AQQ3", 999, 909) + "pt"]);
}
function oA(i, n) {
  const t = Xn();
  return oA = function(e, A) {
    e = e - (3 * 2502 + -5 * -1137 + -1 * 12755);
    let o = t[e];
    if (oA.BGceXt === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      oA.BmIVCC = B, i = arguments, oA.BGceXt = !0;
    }
    const a = t[-17835 + -1 * -17835], g = e + a, I = i[g];
    return I ? o = I : (oA.EtvmjD === void 0 && (oA.EtvmjD = !0), o = oA.BmIVCC(o, A), i[g] = o), o;
  }, oA(i, n);
}
async function NE(i) {
  function n(o, r, a, g, I) {
    return oA(r - -711, o);
  }
  const t = await GE(), e = {};
  function A(o, r, a, g, I) {
    return oA(g - -276, o);
  }
  return e[n("WqNG", -61)] = xs, window[n("nnCJ", -260) + "o"][A("1xiL", 242, 330, 339) + "e"][n("X$ts", -93) + "pt"](e, t, i);
}
(function(i, n) {
  const t = i();
  function e(a, g, I, B, s) {
    return RA(g - -771, a);
  }
  function A(a, g, I, B, s) {
    return RA(a - -400, B);
  }
  function o(a, g, I, B, s) {
    return RA(g - -447, B);
  }
  function r(a, g, I, B, s) {
    return RA(s - -709, B);
  }
  for (; ; )
    try {
      if (parseInt(A(-143, -151, -133, "mk6C", -149)) / 1 * (-parseInt(A(-139, -132, -147, "#aGJ", -133)) / 2) + parseInt(o(-194, -192, -182, "QIJ0", -202)) / 3 * (parseInt(A(-133, -124, -143, "Rk0Q", -135)) / 4) + parseInt(r(-460, -460, -466, "5kwP", -461)) / 5 * (-parseInt(e("29]R", -525, -527, -536, -518)) / 6) + -parseInt(e("FeHi", -505, -503, -494, -502)) / 7 + parseInt(e("zKo%", -522, -527, -533, -521)) / 8 + -parseInt(A(-140, -146, -150, "my4o", -150)) / 9 + parseInt(o(-185, -184, -182, "jMDy", -176)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})($n, -39758 * 5 + 532719 * 1 + 51679);
function RA(i, n) {
  const t = $n();
  return RA = function(e, A) {
    e = e - (15082 + -7418 * 2);
    let o = t[e];
    if (RA.JzKDin === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      RA.yAghld = B, i = arguments, RA.JzKDin = !0;
    }
    const a = t[6908 + 8983 * 1 + -15891], g = e + a, I = i[g];
    return I ? o = I : (RA.PeGNKT === void 0 && (RA.PeGNKT = !0), o = RA.yAghld(o, A), i[g] = o), o;
  }, RA(i, n);
}
function $n() {
  const i = ["eX/dTCocW5jQWQW+W7jo", "WQNdR17cKCkkvmknxmo3xSkpphq", "WRFcMh5EDSoYW5VcRNi6", "WO3cRdFdSeOyi2pcU2tcQ8oQWPG", "W7NcIJS", "WP3dJ8oqW45rW6FdJgZdO8ol", "WP4dW5f3W454yhxcGSo4W5ZdUCov", "W7tcJehcUCkMyWe", "WOldTWz+kLtcS8okiYD5WOy", "vmoUESocyw0kpxtdL1lcLW", "W7uAuSoKwrBdJ8kaWRJdG8kJWO0", "FCksW6vZpmkRW5m", "aL7dU0FdMG", "y1tcK8ojlM5Ntr00", "p8kgmvZcMbjXW6LEW5GqWQ9I", "WPRdLSk4egRcP24Va1JcICoS", "WOhdKcO1FWNdQCoODqbfhmk0", "WPOKvKe8w8opqftdMbP7yW", "WOyHWRZcIKNdPCo+yW", "o8kyEKdcNJhcVHDrW7D7WQG", "rdJdSgZdIdVdLI3dUqHgW64", "uaxdVmopnMzXDa"];
  return $n = function() {
    return i;
  }, $n();
}
async function RE(i) {
  const { iv: n, key: t, message: e } = await mQ(i);
  function A(g, I, B, s, E) {
    return RA(B - -220, g);
  }
  const o = await NE(t), r = {};
  r[A("JA2N", 26, 30)] = o, r.iv = n;
  function a(g, I, B, s, E) {
    return RA(E - -104, s);
  }
  return r[a(158, 161, 147, "qdQH", 154) + "ge"] = e, r;
}
function hA(i, n) {
  const t = Ai();
  return hA = function(e, A) {
    e = e - (-457 * -1 + -7 * 647 + 4241);
    let o = t[e];
    if (hA.MyIoWm === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      hA.AOEejY = B, i = arguments, hA.MyIoWm = !0;
    }
    const a = t[-1 * -9779 + 4381 + 16 * -885], g = e + a, I = i[g];
    return I ? o = I : (hA.FntQUA === void 0 && (hA.FntQUA = !0), o = hA.AOEejY(o, A), i[g] = o), o;
  }, hA(i, n);
}
function Ai() {
  const i = ["WR87xKtcN8orF2jKW6vH", "d3JdJq", "jmkRWO7cG8oF", "W6nAW4FcKxa", "W6xcOG82jqddMMhdL8kRaW", "WQ1OW6y", "ySkwW5pdLW", "WQiUW4BdHqNcIdXIW6JdVGFdRa", "W4tcNvRcNe55W7pdGSkfW4JcJCov", "W7e3WO4sW6CrW4pdPvRcUW", "W5mQW5i", "W54TW5iWWRO", "WPVcTmkqWPyK", "zsWTW4JdLSk4W6TeW6axW5C2", "W6LSs8o0WQ1SCCkt", "W51AwmkhW4S", "fG7dQHJcOWisW5ZcR8kAW6SxWORcJW", "utFdGSojwmkbhCoHWP4dW6WR", "cCo5W4GmWPpcHSkPW7RcOL0", "tCkXnCknW7NdKba9iCk4fq", "WRK/wetcMmkZjufBW7PRW7ak", "W5ChrcfQWO7dON10CxG", "W5xcO8oRkImrB04wmXRcPIO", "W6ddT3y9fSoZsCoPm8onW6HNWQ02", "WOKYASkKvmkKBmoS", "ycSVW4ZcSSowW41WW6Sz", "WP5TW4KTWOhdHCktEt7dTG", "D8osaSo4W4e", "ACosomoI"];
  return Ai = function() {
    return i;
  }, Ai();
}
(function(i, n) {
  function t(a, g, I, B, s) {
    return hA(g - 482, s);
  }
  const e = i();
  function A(a, g, I, B, s) {
    return hA(s - -781, B);
  }
  function o(a, g, I, B, s) {
    return hA(I - -136, s);
  }
  function r(a, g, I, B, s) {
    return hA(s - 402, B);
  }
  for (; ; )
    try {
      if (parseInt(t(647, 651, 637, 643, "5yq@")) / 1 * (parseInt(t(662, 675, 690, 675, "ooKA")) / 2) + -parseInt(r(584, 576, 579, "lyJk", 589)) / 3 * (parseInt(A(-584, -574, -591, "f4oW", -587)) / 4) + -parseInt(t(664, 672, 660, 676, "k5sv")) / 5 + parseInt(o(54, 35, 46, 33, "f4oW")) / 6 + -parseInt(A(-588, -595, -588, "5yq@", -592)) / 7 + parseInt(A(-582, -593, -610, "(ir5", -596)) / 8 + -parseInt(t(648, 658, 659, 656, "yb0[")) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ai, 71975 * -13 + 983676 + 331949 * 2);
async function FE(i) {
  function n(r, a, g, I, B) {
    return hA(I - 532, r);
  }
  function t(r, a, g, I, B) {
    return hA(I - 540, B);
  }
  function e(r, a, g, I, B) {
    return hA(r - 450, I);
  }
  function A(r, a, g, I, B) {
    return hA(g - -608, I);
  }
  const o = await window[n("f(Uu", 724, 705, 713) + "o"][A(-416, -431, -424, "APY!") + "e"][e(630, 624, 617, "Q5q$") + "t"](n("pY7)", 703, 694, 703), i);
  return Array[n("ebp5", 713, 711, 707)](new Uint8Array(o))[e(624, 633, 631, "fnqy")]((r) => r[n("EOI8", 742, 734, 728) + n("Q5q$", 703, 718, 711)](-7 * 1057 + 4519 * -1 + 11934)[n("zPk)", 698, 715, 704) + t(696, 706, 697, 710, "3^*I")](2, "0"))[e(647, 659, 653, "EOI8")]("");
}
(function(i, n) {
  function t(a, g, I, B, s) {
    return te(a - -786, g);
  }
  function e(a, g, I, B, s) {
    return te(g - -462, a);
  }
  function A(a, g, I, B, s) {
    return te(I - -641, a);
  }
  for (var o = i(); ; )
    try {
      var r = parseInt(t(-402, "*vtp", -393, -395, -410)) / 1 * (-parseInt(e("0kEh", -82, -86, -79, -84)) / 2) + -parseInt(t(-407, "9lwJ", -395, -407, -401)) / 3 * (-parseInt(t(-392, "ow6V", -392, -397, -388)) / 4) + -parseInt(e("t@CK", -70, -76, -72, -64)) / 5 * (-parseInt(e("l[!N", -81, -89, -82, -87)) / 6) + -parseInt(t(-389, "!Q&j", -378, -399, -381)) / 7 * (-parseInt(A("&)LS", -268, -258, -246, -270)) / 8) + parseInt(t(-388, "c#w%", -394, -393, -395)) / 9 * (parseInt(t(-404, "C3J5", -401, -398, -400)) / 10) + -parseInt(A("X(E!", -244, -253, -245, -247)) / 11 + -parseInt(A("ED@W", -236, -240, -229, -229)) / 12;
      if (r === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ei, -1606826 + 13576 * 4 + -1 * -2467655);
function ei() {
  var i = ["vMxcV8oueSo6WORdIxBcNNS", "WQelWPhcU8k+W5hdPW", "usVdOCoja8oMtCkCgSovwKtdLSkC", "B8kbltqchv4Gumk5D8ojdCkg", "WPddSmkwhmo3lxBcTmoab8kSngm", "WPPzW7jZCcqpyMldOfpdQmoT", "WQmqW6/cPWhcTJf1", "pmoqWPBcKhK7BZ0", "WP7cJqbDW7zzsSkng8o9", "W4KOgarBWQ/dIq", "zmk2bLjRzX8", "WPuQwHfSWOucW60", "BSoSW7z/W6pdK8k3DW", "ECkVWQ/cJCo8rWFdS8kXW5L/W5pdKa", "wItcSmkoWOtcIrzMWP0aW6KojG", "WQBdGZ5WwSkIWOzMkX0tg2S", "ASoTWOWmWP7cQmoxvXRdT8karKy", "gCo0iq3cUSoad8oxa1FcUens", "DdTqumk+j8omeg4fWQVcMYq", "W6hdH8oEjCoWWQOc", "WQxdJZ50oCoiW5DJaqu", "WPbzW7v3CYipq0tdR0ldRmoN", "q8k4WR0pW6JdM8kIuCoLW5xdHq", "WP8Rp1iXW6DUW5FcVYJdUWWT"];
  return ei = function() {
    return i;
  }, ei();
}
function te(i, n) {
  var t = ei();
  return te = function(e, A) {
    e = e - (-149 * -17 + 9916 + -12070);
    var o = t[e];
    if (te.ThFifj === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, k = C.length; p < k; p++)
          x += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(s, E) {
        var C = [], x = 0, d, l = "";
        s = r(s);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      te.tTdnJT = a, i = arguments, te.ThFifj = !0;
    }
    var g = t[7 * 5 + 8975 + -9010], I = e + g, B = i[I];
    return B ? o = B : (te.DfvQZo === void 0 && (te.DfvQZo = !0), o = te.tTdnJT(o, A), i[I] = o), o;
  }, te(i, n);
}
async function h0(i) {
  const { Image: n } = ut, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw S.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function vE(i) {
  const { VideoStream: n } = ut, t = n.verify(i);
  if (t) throw S.fromError(t);
  return n.create(i);
}
async function ME(i) {
  const { v4: { Metadata: n } } = ut, t = { ...i };
  t.platform = ut.Platform.WEB, t.componentVersion = "8.0.0";
  const e = t, A = n.verify(e);
  if (A) throw S.fromError(A);
  return n.create(e);
}
async function WE(i) {
  const { Content: n } = ut, { iv: t, key: e, message: A } = await RE(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: lB, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw S.fromError(r);
  const a = n.create(o);
  return n.encode(a).finish();
}
function LE(i) {
  const { Blob: n } = ut.v4, t = n.verify(i);
  if (t) throw S.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function OE(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e == null ? void 0 : e.map(({ brand: a, version: g }) => ({ name: a, version: g })) };
}
async function JE({ image: i, metadata: n, video: t }) {
  const { DocumentContent: e } = ut.v4, A = await h0(i), o = await ME(n), r = t && vE(t), a = {};
  a.streamH264 = r;
  const g = {};
  g.image = A, g.metadata = o, g.video = a;
  const I = g, B = e.verify(I);
  if (B) throw S.fromError(B);
  const s = e.create(I), E = {};
  return E.documentContent = s, LE(E);
}
async function UE(i) {
  const n = await JE(i);
  return WE(n);
}
function YE({ controller: i }) {
  const { captureMode: n, onComplete: t, sessionToken: e } = Gs(), A = Re(({ candidateSelectionImages: a, imageData: g, protoMessage: I }) => {
    QE(Cs.DOCUMENT, a), t(g, I);
  }, [t]), o = Re(({ processedImage: a }) => {
    const g = {};
    g.code = a.instructionCode, g.isEscalated = a.isEscalated, Ns(xe.INSTRUCTION_CHANGED, g), i && gQ(xe.DETECTION_CHANGED, a.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
  }, [i]), r = {};
  return r.captureMode = n, r.controller = i, r.createProtoMessage = UE, r.onCapture = A, r.onDetection = o, r.sessionToken = e, r.customEvent = xe, r.fallbackInstruction = we.DOCUMENT_NOT_PRESENT, r.instructionCodeMap = we, r.checkToInstructionCodeMap = $C, ZQ(r);
}
const TE = 7921 + -5 * -1062 + -11231;
class PE {
  constructor(n) {
    y(this, "duration");
    y(this, "candidateSelectionTime", -9033 + 84 * -119 + -6343 * -3);
    y(this, "candidateSelectionImages", []);
    this.duration = n ?? TE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -373 * -25 + 7367 + -4173 * 4;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime = performance.now();
  }
  newCandidate(n) {
    this.candidateSelectionImages.push(n);
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  isCandidateSelectionDone() {
    return this.isInCandidateSelection() && performance.now() - this.candidateSelectionTime > this.duration;
  }
  reset() {
    this.candidateSelectionTime = -214 * 38 + -31 * -202 + -1 * -1870, this.candidateSelectionImages = [];
  }
}
const HE = async () => WebAssembly.validate(new Uint8Array([-1861 * -4 + -37 * 247 + 1 * 1695, -12254 + 3 * 4117, 1 * -8173 + -8182 + 305 * 54, 2 * 3925 + 7432 + -15173 * 1, -4145 * -1 + -1097 * -7 + 3 * -3941, 2 * 4762 + 2820 + -12344, -1 * 4846 + 3849 + 997, 201 * 9 + 9859 * 1 + -11668, 1485 * 1 + 2900 + 2192 * -2, -8287 + 4976 * 2 + 332 * -5, -17 * -126 + -4962 * 2 + 7783, 5711 * 1 + -4597 * -2 + -14809, -1 * 8213 + 1918 + 1259 * 5, 1, -271 * -29 + -8710 + -2 * -487, -127 + -62 * 64 + 4098, -2262 + -11 * 91 + 653 * 5, 1, 1655 + -1655 * 1, -2e3 * 5 + -3798 + 13808, 23 * -370 + -8587 * -1 + -1 * 67, -57 * -171 + -5709 + -1 * 4037, -6838 + -4771 * 2 + -1 * -16388, 8530 * 1 + -17 * -255 + -5 * 2573, 67 * 69 + 3493 * -2 + 2428, 5 * 1897 + 2146 + -11631, 253, 6389 + 1 * -3109 + -3265, -59 * -113 + 601 * -2 + -5212, 1327 + 1229 * -1, -9424 + -1658 * 6 + 19383]));
function KE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-5211 + 7082 * 1 + -1855);
}
function jE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = KE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function _E(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function qE(i) {
  return i > 72307 + -3 * -17098 + -63601 ? ">1m" : "" + i;
}
function VE(i) {
  return i > -39 + -40 * -203 + -8071 ? ">10" : "" + i;
}
const St = (i) => i ? i <= -38 * 84 + -377 * -24 + -5855 ? Math.round(i * 20) / (7730 + 1023 * -1 + -6687) : Math.round(i / (18446 + -6132 * 3)) * (6036 + -23 * 78 + 32 * -131) : 42 * 113 + -4 * -684 + 174 * -43;
function ZE(i) {
  return i ? Math.round(i / (1693 + 85 * 13 + -298)) * (2550 + 50 * -1) : -9792 + -544 * -18;
}
const zE = (i) => i ? Math.round(i / (3681 + 1 * -6689 + 1006 * 3)) * (9313 * 1 + -1 * 443 + -8860) : -40 * -41 + -2890 + 1250, XE = (i) => Math.round(i * (-6466 + 869 * 1 + -509 * -11)) / (-2 * 2194 + 1 * -1145 + 5535);
function $E(i) {
  return i !== IA.RUNNING ? Rn.VISIBLE : Rn.VISIBLE_WITH_MASK;
}
async function Ax() {
  return await HE() ? Ig.SIMD : Ig.NO_SIMD;
}
var ci;
class p0 {
  constructor(n, t, e, A, o, r, a, g, I, B, s, E) {
    y(this, "isRunning", !0);
    O(this, ci, Date.now());
    y(this, "fpsOfAllImages", new hs(30));
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = a, this.samVersion = g, this.instructionEscalation = I, this.sessionToken = B, this.analytics = s, this.transactionCounting = E;
  }
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    var a;
    const e = Date.now(), A = Mn(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - m(this, ci), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Ax() };
    xo() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !xt() }), (a = this.analytics) == null || a.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Vt(Mn(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    var x;
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await wB(n), r = await this.prepareDetectionMetadata(n, t), a = (x = this.cameraService.videoRecorder) == null ? void 0 : x.getRecording(), g = {};
    g.image = o, g.metadata = r, g.video = a;
    const I = await this.createProtoMessage(g), B = {};
    B.detection = t, B.imageResolution = A;
    const s = {};
    s.image = o, s.data = B;
    const E = s, C = {};
    return C.imageData = E, C.metadata = r, C.protoMessage = I, C;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = LB(), o = await OB(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await OE(A, o) }, a = {};
    return a.sessionToken = this.sessionToken, a.web = r, a;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = ms(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await kB(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const I = g, B = await h0(a), s = {};
    return s.image = B, s.topLeftCorner = I, s;
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
    await Gr(Math.max(cg.max - n, cg.min));
  }
}
ci = new WeakMap();
class ex extends p0 {
  constructor(t, e, ...A) {
    super(...A);
    y(this, "lastImage", null);
    y(this, "bestImage", null);
    this.candidateSelection = t, this.instructionCodeMap = e;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = {};
    A.takenPhoto = t, A.imageProcessorResult = e;
    const o = this.getDetectionDetails(A);
    this.onDetection(o, t.image);
    const r = {};
    r.instructionCode = o.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? S.fromCameraError(e) : S.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelection.newCandidate(r);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    var A;
    const { detection: t, image: e } = this.bestImage || {};
    if ((A = this.transactionCounting) == null || A.trackTransaction(), e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelection.getCandidateSelectionImages() });
    else throw new S("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), o = Vt((5797 + -260 * 33 + 3783) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), I = {};
    I.isNewDetectionValid = t.isValid, I.newInvalidInstruction = g[8055 + -292 * -13 + 1693 * -7];
    const B = this.getInstructionCode(I), s = this.collectAndEscalate(B);
    return { processedImage: { detection: t.detection, instructionCode: B, isEscalated: s, invalidValidators: g, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: A, fps: o, avgFps: Vt(Mn(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class y0 {
  constructor() {
    y(this, "cameraService");
    y(this, "imageProcessor");
    y(this, "instructionEscalation");
    y(this, "createProtoMessage");
    y(this, "onCaptureCallback");
    y(this, "onDetectionCallback");
    y(this, "checkToInstructionCodeMap");
    y(this, "fallbackInstruction");
    y(this, "samVersion");
    y(this, "sessionToken");
    y(this, "analytics");
    y(this, "transactionCounting");
  }
  setCameraService(n) {
    return this.cameraService = n, this;
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
  setTransactionCounting(n) {
    return this.transactionCounting = n, this;
  }
  reset() {
    return this.cameraService = void 0, this.imageProcessor = void 0, this.instructionEscalation = void 0, this.createProtoMessage = void 0, this.onCaptureCallback = void 0, this.onDetectionCallback = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this.samVersion = void 0, this.sessionToken = void 0, this.analytics = void 0, this.transactionCounting = void 0, this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new S("CameraService is required");
    if (!this.imageProcessor) throw new S("ImageProcessor is required");
    if (!this.createProtoMessage) throw new S("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new S("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new S("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new S("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new S("FallbackInstruction is required");
    if (!this.samVersion) throw new S("SamVersion is required");
  }
}
class tx extends y0 {
  constructor() {
    super(...arguments);
    y(this, "instructionCodeMap");
    y(this, "candidateSelection");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  setCandidateSelection(t) {
    return this.candidateSelection = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new S("instructionCodeMap is required");
    if (!this.candidateSelection) throw new S("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new ex(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
var Te, It;
class ox extends p0 {
  constructor(...t) {
    super(...t);
    O(this, Te);
    O(this, It);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Wi).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    M(this, It, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && M(this, Te, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(ag.REQUEST_CAPTURE, m(this, It));
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
    return m(this, Te) ? m(this, Te) === Wi.FIRST_FRAME ? !0 : m(this, Te) === Wi.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? S.fromCameraError(e) : S.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    var o;
    (o = this.transactionCounting) == null || o.trackTransaction(), this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), M(this, Te, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), o = Vt((73 * 78 + -587 * 16 + -162 * -29) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, g = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), I = this.getInstructionCode(g[-2998 + -569 * -12 + 5 * -766]), B = this.collectAndEscalate(I), s = {};
    return s.detection = e.detection, s.instructionCode = I, s.invalidValidators = g, s.isInCandidateSelection = !1, s.isEscalated = B, { processedImage: s, detectionTime: A, fps: o, avgFps: Vt(Mn(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, It) && document.removeEventListener(ag.REQUEST_CAPTURE, m(this, It));
  }
}
Te = new WeakMap(), It = new WeakMap();
class nx extends y0 {
  build() {
    return this.validateDependencies(), new ox(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class ix {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: a, fallbackInstruction: g, imageProcessor: I, instructionCodeMap: B, instructionEscalation: s, onCaptureCallback: E, onDetectionCallback: C, samVersion: x, sessionToken: d, transactionCounting: l } = t;
    switch (n) {
      case Dr.AUTO_CAPTURE:
        return new tx().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setInstructionCodeMap(B).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(C).setSamVersion(x).setInstructionEscalation(s).setSessionToken(d).setAnalytics(e).setTransactionCounting(l).build();
      case Dr.WAIT_FOR_REQUEST:
        return new nx().setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(C).setSamVersion(x).setInstructionEscalation(s).setSessionToken(d).setAnalytics(e).setTransactionCounting(l).build();
      default:
        throw new S("Invalid detection type: " + n);
    }
  }
}
var Ce;
class rx {
  constructor(n, t) {
    O(this, Ce);
    this.instructionCodeCollector = n, this.config = t, M(this, Ce, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return m(this, Ce);
  }
  canEscalate(n) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(n) ? !1 : t.filter((A) => A === n).length / t.length >= this.config.threshold;
  }
  collect(n) {
    this.instructionCodeCollector.pushWithTimestamp(n);
  }
  isEscalated(n) {
    return m(this, Ce).get(n) ?? !1;
  }
  escalate() {
    for (const [n, t] of m(this, Ce).entries())
      !t && this.canEscalate(n) && (this.config.onEscalate(n), m(this, Ce).set(n, !0));
  }
  reset() {
    m(this, Ce).forEach((n, t) => {
      m(this, Ce).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
Ce = new WeakMap();
var ko, Pe, Lt;
class ax extends Array {
  constructor(t) {
    super();
    O(this, ko, 0);
    O(this, Pe, []);
    O(this, Lt, !1);
    M(this, ko, t);
  }
  clearAfterTimeout() {
    if (m(this, Pe).length === -1 * -1646 + -3529 + 1883 * 1) return;
    const t = Date.now(), e = m(this, Pe).findLastIndex((A) => t - A > m(this, ko));
    e !== -1 && (M(this, Lt, !0), this.splice(1319 * 4 + 719 + 545 * -11, e + (1 * 5963 + -2935 * 1 + 3 * -1009)), m(this, Pe).splice(-288 + -4211 * -1 + -3923, e + 1));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), m(this, Pe).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return m(this, Lt);
  }
  clear() {
    this.splice(-9954 + -1707 * 5 + 3 * 6163), m(this, Pe).splice(12563 + 17 * -739), M(this, Lt, !1);
  }
}
ko = new WeakMap(), Pe = new WeakMap(), Lt = new WeakMap();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const m0 = Symbol("Comlink.proxy"), gx = Symbol("Comlink.endpoint"), D0 = Symbol("Comlink.releaseProxy"), or = Symbol("Comlink.finalizer"), yn = Symbol("Comlink.thrown"), w0 = (i) => typeof i == "object" && i !== null || typeof i == "function", Ix = {
  canHandle: (i) => w0(i) && i[m0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return k0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), G0(i);
  }
}, sx = {
  canHandle: (i) => w0(i) && yn in i,
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
}, b0 = /* @__PURE__ */ new Map([
  ["proxy", Ix],
  ["throw", sx]
]);
function cx(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function k0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!cx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(it);
    let I;
    try {
      const B = a.slice(0, -1).reduce((E, C) => E[C], i), s = a.reduce((E, C) => E[C], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          B[a.slice(-1)[0]] = it(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(B, g);
          break;
        case "CONSTRUCT":
          {
            const E = new s(...g);
            I = dx(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: C } = new MessageChannel();
            k0(i, C), I = xx(E, [E]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      I = { value: B, [yn]: 0 };
    }
    Promise.resolve(I).catch((B) => ({ value: B, [yn]: 0 })).then((B) => {
      const [s, E] = ni(B);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), S0(n), or in i && typeof i[or] == "function" && i[or]());
    }).catch((B) => {
      const [s, E] = ni({
        value: new TypeError("Unserializable return value"),
        [yn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), E);
    });
  }), n.start && n.start();
}
function Cx(i) {
  return i.constructor.name === "MessagePort";
}
function S0(i) {
  Cx(i) && i.close();
}
function G0(i, n) {
  const t = /* @__PURE__ */ new Map();
  return i.addEventListener("message", function(A) {
    const { data: o } = A;
    if (!o || !o.id)
      return;
    const r = t.get(o.id);
    if (r)
      try {
        r(o);
      } finally {
        t.delete(o.id);
      }
  }), Kr(i, t, [], n);
}
function on(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function N0(i) {
  return Gt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    S0(i);
  });
}
const ti = /* @__PURE__ */ new WeakMap(), oi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (ti.get(i) || 0) - 1;
  ti.set(i, n), n === 0 && N0(i);
});
function Bx(i, n) {
  const t = (ti.get(n) || 0) + 1;
  ti.set(n, t), oi && oi.register(i, n, i);
}
function Qx(i) {
  oi && oi.unregister(i);
}
function Kr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (on(A), a === D0)
        return () => {
          Qx(o), N0(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = Gt(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(it);
        return g.then.bind(g);
      }
      return Kr(i, n, [...t, a]);
    },
    set(r, a, g) {
      on(A);
      const [I, B] = ni(g);
      return Gt(i, n, {
        type: "SET",
        path: [...t, a].map((s) => s.toString()),
        value: I
      }, B).then(it);
    },
    apply(r, a, g) {
      on(A);
      const I = t[t.length - 1];
      if (I === gx)
        return Gt(i, n, {
          type: "ENDPOINT"
        }).then(it);
      if (I === "bind")
        return Kr(i, n, t.slice(0, -1));
      const [B, s] = Hg(g);
      return Gt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: B
      }, s).then(it);
    },
    construct(r, a) {
      on(A);
      const [g, I] = Hg(a);
      return Gt(i, n, {
        type: "CONSTRUCT",
        path: t.map((B) => B.toString()),
        argumentList: g
      }, I).then(it);
    }
  });
  return Bx(o, i), o;
}
function Ex(i) {
  return Array.prototype.concat.apply([], i);
}
function Hg(i) {
  const n = i.map(ni);
  return [n.map((t) => t[0]), Ex(n.map((t) => t[1]))];
}
const R0 = /* @__PURE__ */ new WeakMap();
function xx(i, n) {
  return R0.set(i, n), i;
}
function dx(i) {
  return Object.assign(i, { [m0]: !0 });
}
function ni(i) {
  for (const [n, t] of b0)
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
    R0.get(i) || []
  ];
}
function it(i) {
  switch (i.type) {
    case "HANDLER":
      return b0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Gt(i, n, t, e) {
  return new Promise((A) => {
    const o = lx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function lx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const ux = "SAM v1.50.5 for idcards";
class fx {
  constructor(n, t, e, A, o, r, a) {
    y(this, "isDetectorInitialized", !1);
    y(this, "samVersion", null);
    y(this, "detection");
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = a;
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    xt() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new S("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Qa.warn(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║                       WARNING                      ║
║                                                    ║
║ Firefox support for all Innovatrics web components ║
║     is DEPRECATED and will be discontinued in      ║
║                next major release                  ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`);
  }
  createDetection(n, t) {
    this.detection && this.detection.stop();
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: a, instructionCodeMap: g, onCaptureCallback: I, onDetectionCallback: B, sessionToken: s, transactionCounting: E } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: E, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: a, instructionCodeMap: g, checkToInstructionCodeMap: o, sessionToken: s, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: I, onDetectionCallback: B, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new S("Detection not initialized");
    this.detection.run();
  }
  stopDetectionLoop() {
    var n, t;
    (n = this.detection) == null || n.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset(), this.candidateSelection.reset();
  }
  setThresholds(n) {
    this.imageProcessor.validationService.thresholds = n;
  }
  setInstructionEscalation(n) {
    this.instructionEscalation = n;
  }
  areVersionsCompatible(n) {
    return n === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(ds, "") + n;
  }
}
class hx {
  constructor() {
    y(this, "imageProcessor");
    y(this, "assetsDirectoryPath");
    y(this, "instructionEscalation");
    y(this, "compatibleSamVersion");
    y(this, "validationService");
    y(this, "detector");
    y(this, "detectionFactory");
    y(this, "candidateSelection");
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
  setDetectionFactory(n) {
    return this.detectionFactory = n, this;
  }
  setCandidateSelection(n) {
    return this.candidateSelection = n, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new S("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new S("AssetsDirectoryPath is required");
    if (!this.detector) throw new S("Detector is required");
    if (!this.compatibleSamVersion) throw new S("CompatibleSamVersion is required");
    if (!this.validationService) throw new S("ValidationService is required");
    if (!this.detectionFactory) throw new S("DetectionFactory is required");
    if (!this.candidateSelection) throw new S("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class px {
  constructor() {
    y(this, "detectionRecord", []);
    y(this, "imagesWithTimestampForDuplicateDetection", new hs(dB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / hB, A = e / (4535 + 3667 * -1 + -866), o = n.length / (-9229 + 8 * -85 + 9911), r = n.slice(o - A, o + A), a = await FE(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: ms(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = pB(n), r = this.validationService.validateDetectedObject(o, t);
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
class yx {
  constructor() {
    y(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new S("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class F0 extends fx {
  constructor(t, e, A, o, r, a, g, I) {
    super(o, r, a, g, A, t, I);
    y(this, "detector");
    this.detectionFactory = t, this.detector = e;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Ns(xe.INSTRUCTION_CHANGED, t, gB);
  }
}
class mx extends hx {
  build() {
    return this.validateDependencies(), new F0(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
const Dx = "/dot-assets/document/dot-ClbVKvVN.js";
class wx extends px {
  constructor(t, e) {
    super();
    y(this, "className", "DocumentImageProcessor");
    y(this, "detector");
    y(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Wn(t), A = ys(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let o = await this.detector.detect(A.data, A.resolution);
    o = FB(o, Wn(t)), o = vB(o, A.resolution);
    const r = {};
    return r.image = t, r.timestamp = e, r.imageData = A.data, r.detectedObject = o, this.processDetectedObject(r);
  }
}
var Ot, st, ct;
class bx {
  constructor(n) {
    O(this, Ot);
    O(this, st);
    O(this, ct);
    M(this, Ot, n), M(this, st, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, Ot).forEach((n) => {
      m(this, st).set(n.name, n.evaluate());
    }), M(this, ct, void 0);
  }
  isValid() {
    return m(this, ct) === void 0 && M(this, ct, Array.from(m(this, st).values()).every((n) => n)), m(this, ct);
  }
  get result() {
    return m(this, st);
  }
  get validators() {
    return m(this, Ot);
  }
}
Ot = new WeakMap(), st = new WeakMap(), ct = new WeakMap();
var So, Ct;
class ht {
  constructor(n, t) {
    O(this, So);
    O(this, Ct);
    M(this, So, n), M(this, Ct, t);
  }
  get threshold() {
    return m(this, Ct);
  }
  get name() {
    return m(this, So);
  }
  isValueBelowThreshold(n) {
    return n < m(this, Ct);
  }
  isValueAboveThreshold(n) {
    return n > m(this, Ct);
  }
}
So = new WeakMap(), Ct = new WeakMap();
const kx = "isNotDim";
var Go;
class Sx extends ht {
  constructor(t, e) {
    super(kx, t);
    O(this, Go);
    M(this, Go, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Go));
  }
}
Go = new WeakMap();
const Gx = "isNotSmall";
var No;
class Nx extends ht {
  constructor(t, e) {
    super(Gx, t);
    O(this, No);
    M(this, No, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, No));
  }
}
No = new WeakMap();
const Rx = "isNotBright";
var Ro;
class Fx extends ht {
  constructor(t, e) {
    super(Rx, t);
    O(this, Ro);
    M(this, Ro, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Ro));
  }
}
Ro = new WeakMap();
const vx = "isPresent";
var Fo;
class Mx extends ht {
  constructor(t, e) {
    super(vx, t);
    O(this, Fo);
    M(this, Fo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Fo));
  }
}
Fo = new WeakMap();
const Wx = "isSharp";
var vo;
class Lx extends ht {
  constructor(t, e) {
    super(Wx, t);
    O(this, vo);
    M(this, vo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, vo));
  }
}
vo = new WeakMap();
const Ox = "noHotspots";
var Mo;
class Jx extends ht {
  constructor(t, e) {
    super(Ox, t);
    O(this, Mo);
    M(this, Mo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Mo));
  }
}
Mo = new WeakMap();
const Ux = "isNotOutOfBounds";
var Wo, Jt;
class Yx extends ht {
  constructor(t, e, A) {
    super(Ux, t);
    O(this, Wo);
    O(this, Jt);
    M(this, Wo, e), M(this, Jt, A);
  }
  evaluate() {
    const t = Ds(m(this, Jt), this.threshold, Wn(m(this, Jt))), { bottomLeft: e, bottomRight: A, topLeft: o, topRight: r } = m(this, Wo), a = {};
    return a.topLeft = o, a.topRight = r, a.bottomLeft = e, a.bottomRight = A, RB(a, t);
  }
}
Wo = new WeakMap(), Jt = new WeakMap();
class Tx {
  static getDocumentValidationInstance(n, t, e) {
    return new bx([new Mx(n.confidence.min, t.confidence), new Lx(n.sharpness.min, t.sharpness), new Sx(n.brightness.min, t.brightness), new Fx(n.brightness.max, t.brightness), new Jx(n.hotspotsScore.max, t.hotspots), new Yx(n.edgeDistanceToImageShorterSideRatio.min, t, e), new Nx(n.size.min, t.smallestEdge)]);
  }
}
class Px extends yx {
  constructor() {
    super(...arguments);
    y(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const A = Tx.getDocumentValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
const Hx = () => {
  const { handleError: i } = re(), { assetsDirectoryPath: n, autoCapture: { candidateSelectionDurationMillis: t } } = Gs(), { thresholds: e } = l0(), { analytics: A } = Ss(), [o, r] = xA();
  q(() => {
    let g;
    return (async () => {
      const B = F0.getWorkerPath(Dx, n), s = {};
      s.type = "module";
      const E = new Worker(new URL(B, import.meta.url), s), C = G0(E);
      g = await new C();
      const x = new Px(), d = new wx(g, x), l = new ix(), Q = new PE(t), f = new mx().setDetector(g).setValidationService(x).setImageProcessor(d).setAssetsDirectoryPath(n).setCompatibleSamVersion(ux).setDetectionFactory(l).setCandidateSelection(Q).build();
      try {
        await f.init(), r(f);
      } catch (p) {
        if (p instanceof Error) {
          i(S.fromError(p));
          return;
        }
      }
    })(), () => {
      g && g[D0]();
    };
  }, [i, n, t]), q(() => {
    o && o.setThresholds(e);
  }, [o, e]), q(() => {
    if (!o) return;
    const g = new rx(new ax(Hi.timeout), { threshold: Hi.threshold, instructions: Hi.instructions, onEscalate: (I) => {
      IQ(xe.INSTRUCTION_ESCALATED, I), A == null || A.trackEscalated(I);
    } });
    o.setInstructionEscalation(g);
  }, [o, A]);
  const a = {};
  return a.controller = o, a;
}, Kx = () => {
  const { isCameraReady: i } = re(), { sunfish: n } = Yo(), { controller: t } = Hx(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = YE({ controller: t });
  return /* @__PURE__ */ D(KA, { children: /* @__PURE__ */ D(
    BE,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: o,
      children: /* @__PURE__ */ D(
        qC,
        {
          ref: r,
          $isImageMirror: o,
          $isVisible: n && i,
          autoPlay: !0,
          id: IB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, jx = (i) => {
  const { handleAppStateChange: n, setIsCameraReady: t } = re();
  return $Q({
    onBlur: () => {
      t(!1), n(IA.LOADING);
    },
    onFocus: async () => {
      t(!0), n(IA.RUNNING);
    }
  }), /* @__PURE__ */ D(iQ, { configuration: i, children: /* @__PURE__ */ D(rE, { configurationThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ D(Kx, {}) }) });
};
function _x({
  cameraConfiguration: i,
  children: n
}) {
  const t = (i == null ? void 0 : i.facingMode) ?? hi() ? ho.BACK : ho.FRONT;
  return /* @__PURE__ */ D(_Q, { cameraConfiguration: { ...i, facingMode: t }, children: n });
}
function qx({ initAppState: i, onError: n }) {
  const [t, e] = xA(i), [A, o] = xA(), [r, a] = xA(!1), [g, I] = xA(!1), B = Nn.Lower, s = ie(n);
  q(() => {
    s.current = n;
  }, [n]);
  const E = {};
  return E.redfin = B, E.appState = t, E.setAppState = e, E.error = A, E.setError = o, E.isCameraReady = r, E.setIsCameraReady = a, E.onErrorRef = s, E.firstRunningDone = g, E.setFirstRunningDone = I, E;
}
function Vx({
  onError: i
}) {
  const {
    appState: n,
    redfin: t,
    error: e,
    firstRunningDone: A,
    isCameraReady: o,
    onErrorRef: r,
    setAppState: a,
    setError: g,
    setFirstRunningDone: I,
    setIsCameraReady: B
  } = qx({
    initAppState: IA.LOADING,
    onError: i
  }), s = $E(n), E = Re(
    (x) => {
      Eg(xe.STATE_CHANGED, { appState: IA.ERROR, error: x }), B(!1), r.current(x), g(x), a(IA.ERROR);
    },
    [r, g, a, B]
  ), C = Re(
    (x) => {
      Eg(xe.STATE_CHANGED, { appState: x }), a(x);
    },
    [a]
  );
  return {
    appState: n,
    redfin: t,
    freemiumOverlayState: s,
    isCameraReady: o,
    setIsCameraReady: B,
    handleAppStateChange: C,
    handleError: E,
    firstRunningDone: A,
    setFirstRunningDone: I,
    error: e
  };
}
const Nt = {};
Nt.AUTO_CAPTURE = "auto_capture", Nt.CAPTURE_FINISHED = "capture_finished", Nt.CAPTURE_STARTED = "capture_started", Nt.ESCALATION_TRIGGER = "escalation_trigger", Nt.LONG_CAPTURE_SMILE = "long_capture_smile";
const ii = Nt, Oe = {};
Oe.PALM = "palm_auto_capture", Oe.SMILE = "smile_liveness", Oe.DOCUMENT = "document_auto_capture", Oe.MAGNIFEYE = "magnifeye_liveness", Oe.EYE_GAZE = "eye_gaze_liveness", Oe.FACE = "face_auto_capture", Oe.MULTI_RANGE = "multi_range_liveness";
const Zx = Oe;
class zx {
  constructor() {
    y(this, "apiKey");
    y(this, "sessionId");
    y(this, "distinctId");
    y(this, "component");
    y(this, "platform");
    y(this, "versionName");
    y(this, "applicationId");
    this.platform = "web", this.versionName = ls(), this.applicationId = us(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(ii.CAPTURE_STARTED));
  }
  async sendEvent(n, t) {
    if (!this.apiKey) return;
    const e = "https://metrics.innovatrics.com/v1/i/v0/e/", A = this.buildEventProperties(t), o = this.createCommonBody(n, A);
    try {
      const r = {};
      r["Content-Type"] = "application/json", await fetch(e, { method: "POST", headers: r, body: JSON.stringify(o) });
    } catch (r) {
      console.error("Error sending auto capture event:", r);
    }
  }
  buildEventProperties(n) {
    const t = this.convertCamelToSnakeCase(n), e = this.createCommonProperties();
    return { ...t, ...e };
  }
  createCommonProperties() {
    const n = {};
    return n.platform = this.platform, n.version_name = this.versionName, n.application_id = this.applicationId, n.component = this.component, n.session_id = this.sessionId, n;
  }
  createCommonBody(n, t = {}) {
    const e = {};
    return e.api_key = this.apiKey, e.event = n, e.distinct_id = this.distinctId, e.properties = t, e;
  }
  convertCamelToSnakeCase(n) {
    const t = {};
    if (!n || typeof n != "object") return t;
    for (const [e, A] of Object.entries(n)) {
      const o = e.replace(/[A-Z]/g, (r) => "_" + r.toLowerCase());
      A && typeof A == "object" && !Array.isArray(A) ? t[o] = this.convertCamelToSnakeCase(A) : t[o] = A;
    }
    return t;
  }
}
const nn = new zx();
class Xx {
  constructor(n) {
    y(this, "posthog", nn);
    y(this, "component");
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: ls(), ...n };
  }
  init(n, t) {
    if (Ba()) return;
    const e = jE(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, nn.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    nn.sendEvent(ii.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    nn.sendEvent(ii.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -5426 + 25 * -147 + -9351 * -1 ? zE(n) : St(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: VE(o || 2096 + -7921 * -1 + -477 * 21), firstHiccup: qE(ZE(r)), optCheckDetails: e == null ? void 0 : e.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class $x extends Xx {
  constructor() {
    super(Zx.DOCUMENT);
  }
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: a, instructionSet: g, isSystemStable: I, performanceCheckup: B }) {
    if (!A) return;
    const s = this.parsePerformanceCheckup(t, B), E = this.createSegmentation({ hotspots: St(A.hotspots), brightness: St(A.brightness), confidence: St(A.confidence), sharpness: St(A.sharpness), smallestEdge: St(A.smallestEdge), camera: _E(o, r), imageResolution: a.width + "x" + a.height, averageFps: XE(n), durationMs: e, instructionSet: g, isSystemStable: I, ...s });
    this.posthog.sendEvent(ii.CAPTURE_FINISHED, E);
  }
}
const Ad = new $x();
let L;
const Ge = new Array(128).fill(void 0);
Ge.push(void 0, null, !0, !1);
function jr(i) {
  return Ge[i];
}
let Ee = 6565 + 8 * 722 + 7 * -1763, so = null;
function mn() {
  return (so === null || so.byteLength === 7349 * 1 + -1 * -2081 + -410 * 23) && (so = new Uint8Array(L.memory.buffer)), so;
}
const Dn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, ed = typeof Dn.encodeInto == "function" ? function(i, n) {
  return Dn.encodeInto(i, n);
} : function(i, n) {
  const t = Dn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function po(i, n, t) {
  if (t === void 0) {
    const a = Dn.encode(i), g = n(a.length, -2 * -2962 + 3956 * 1 + 3 * -3293) >>> -4474 + -8 * -398 + 1290;
    return mn().subarray(g, g + a.length).set(a), Ee = a.length, g;
  }
  let e = i.length, A = n(e, -100 * -80 + 1 * 9818 + -17817 * 1) >>> 0;
  const o = mn();
  let r = -1 * -5422 + -964 + -4458;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -956 + -3 * -361) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -2 * 4231 + 1641 + 6821 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 9989 + 1 * -4099 + -5889) >>> 0;
    const a = mn().subarray(A + r, A + e), g = ed(i, a);
    r += g.written, A = t(A, e, r, -7 * -703 + 652 + -398 * 14) >>> -535 + -11 * 492 + 5947;
  }
  return Ee = r, A;
}
function v0(i) {
  return i == null;
}
let co = null;
function ce() {
  return (co === null || co.byteLength === -8247 + -247 * -1 + -1e3 * -8) && (co = new Int32Array(L.memory.buffer)), co;
}
let uo = Ge.length;
function td(i) {
  i < 132 || (Ge[i] = uo, uo = i);
}
function M0(i) {
  const n = jr(i);
  return td(i), n;
}
const _r = {};
_r.ignoreBOM = !0, _r.fatal = !0;
const W0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", _r) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && W0.decode();
function ri(i, n) {
  return i = i >>> -193 * 31 + -13 * -499 + 63 * -8, W0.decode(mn().subarray(i, i + n));
}
function qr(i) {
  uo === Ge.length && Ge.push(Ge.length + 1);
  const n = uo;
  return uo = Ge[n], Ge[n] = i, n;
}
let Co = null;
function L0() {
  return (Co === null || Co.byteLength === 6452 + 36 * -58 + -4364) && (Co = new Uint32Array(L.memory.buffer)), Co;
}
function Kg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = L0();
  for (let A = 0; A < i.length; A++)
    e[t / (-424 * -1 + 142 * 66 + 17 * -576) + A] = qr(i[A]);
  return Ee = i.length, t;
}
function jg(i, n) {
  i = i >>> -11 * -692 + -4639 + -1 * 2973;
  const t = L0(), e = t.subarray(i / (1 * -6207 + 1 * 4663 + 1548), i / (905 + 2 * 1901 + -4703) + n), A = [];
  for (let o = 3011 + 4319 * 2 + -11649 * 1; o < e.length; o++)
    A.push(M0(e[o]));
  return A;
}
function od(i, n) {
  const t = po(i, L.__wbindgen_malloc, L.__wbindgen_realloc), e = Ee, A = po(n, L.__wbindgen_malloc, L.__wbindgen_realloc), o = Ee, r = L.is_mobile_supported(t, e, A, o);
  return ua.__wrap(r);
}
const Vr = {};
Vr.register = () => {
}, Vr.unregister = () => {
};
const _g = typeof FinalizationRegistry > "u" ? Vr : new FinalizationRegistry((i) => L.__wbg_licensevalidationresult_free(i >>> -3822 + 42 * 91));
class ua {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create(ua.prototype);
    return t.__wbg_ptr = n, _g.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 9359 + -8826 * 1 + 1 * -533, _g.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    L.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = v0(t) ? 0 : po(t, L.__wbindgen_malloc, L.__wbindgen_realloc), a = Ee;
    const g = Kg(e, L.__wbindgen_malloc), I = Ee, B = Kg(A, L.__wbindgen_malloc), s = Ee, E = po(o, L.__wbindgen_malloc, L.__wbindgen_realloc), C = Ee, x = L.licensevalidationresult_new(n, r, a, g, I, B, s, E, C);
    return this.__wbg_ptr = x >>> -3 * 2934 + -1771 + 109 * 97, this;
  }
  get is_valid() {
    return L.licensevalidationresult_is_valid(this.__wbg_ptr) !== -1 * -8196 + 2472 + -127 * 84;
  }
  get features_json() {
    try {
      const e = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (7983 + -1289 * -3 + -11846) + (-359 + -1 * 6803 + 7162)], t = ce()[e / (3 * -69 + 3 * 2629 + 4 * -1919) + (-5811 + 4897 * 1 + 915)];
      let A;
      return n !== 277 * 9 + -2818 * 3 + 1987 * 3 && (A = ri(n, t).slice(), L.__wbindgen_free(n, t * (8882 * 1 + 153 * -24 + -5209), -5043 + -8713 * 1 + 13757)), A;
    } finally {
      L.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / (-329 * 3 + 1663 + 3 * -224) + (62 * 132 + 5455 + -13639 * 1)], t = ce()[A / (4 * 1357 + -77 * 119 + 3739 * 1) + (1 * 5358 + 1 * 5693 + 50 * -221)], e = jg(n, t).slice();
      return L.__wbindgen_free(n, t * (2332 + 16 * -140 + -1 * 88), -2435 * -1 + -9727 * -1 + -12158), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(912 * 8 + -1917 + -5363);
    }
  }
  get warnings() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / (1 * -1355 + 6757 + -2 * 2699) + (1 * 100 + -137 * -58 + 2 * -4023)], t = ce()[A / (-3878 * 2 + -9369 + -17129 * -1) + (-417 * -3 + -7802 + -14 * -468)], e = jg(n, t).slice();
      return L.__wbindgen_free(n, t * (4798 * 1 + -3 * 39 + -4677), 50 * 104 + -8083 + -1 * -2887), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(22 * -143 + -3582 + 6744);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / (-2711 + -19 * 210 + 6705) + (8201 * 1 + 3509 + 1 * -11710)], A = ce()[o / (8064 + -62 * 130) + (933 * -6 + 6526 + -927)];
      return n = e, t = A, ri(e, A);
    } finally {
      L.__wbindgen_add_to_stack_pointer(8489 + 172 * 48 + -16729 * 1), L.__wbindgen_free(n, t, 17 * 81 + 41 * 51 + -1 * 3467);
    }
  }
}
async function nd(i, n) {
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
function id() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = jr(t), A = typeof e == "string" ? e : void 0;
    var o = v0(A) ? 9830 + 9 * 101 + -10739 : po(A, L.__wbindgen_malloc, L.__wbindgen_realloc), r = Ee;
    ce()[n / (-2 * -3478 + -11 * 26 + 6 * -1111) + (-421 * -4 + -1 * 1187 + 8 * -62)] = r, ce()[n / (1 * 167 + 7275 + -7438) + (-3 * -1706 + -8310 + -266 * -12)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    M0(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = ri(n, t);
    return qr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return qr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return jr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(ri(n, t));
  }, i;
}
function rd(i, n) {
  return L = i.exports, O0.__wbindgen_wasm_module = n, co = null, Co = null, so = null, L;
}
async function O0(i) {
  if (L !== void 0) return L;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAAAEkAAAAEAAAABAAAAIcAAABJbnRlcm5hbExhYmVsVG9vTG9uZ0ludmFsaWRQYWRMZW5JbnZhbGlkQXJndW1lbnRzaW5mLWluZk5hTgAAAAAAAQBB15HBAAvRKiCamZmZmZmZmZmZmZmZmZkZFa5H4XoUrkfhehSuR+F6FN4kBoGVQ4ts5/up8dJNYhCW1AloImx4eqUsQxzr4jYaq0Nuhhvw+WGE8GjjiLX4FCI2WDhJ88e0No3ttaD3xhBqI43ADlKmh1dIr7ya8tcaiE/XZqVBuJ/fOYww4o55FQemEh9RAS3mspTWJugLLhGkCVHLgWiu1re6vdfZ33wb6jqnojTt8d5flWR54X/9FbvIhej28Cd/GRHqLYGZlxH4DdZAvrQMZcKBdklowiUck3HeM5iQcOoBmyuhhpuEFkPBfingpvMhmxVW556vAxI3NTEPzdeFaSu8idiXstIc+ZBaP9ffNyGJltRGRvUOF/pzSMxF5l/noKtD0tFdchJdhg16PD1mpTSs0rZPyYMdsZ7XlGOXHlFdI0KSDKGcF8FLed2C337afU+bDgq04xJorFti0ZhkKpblXhcQIDkeU/Digafgtu5EUbISQLMtGKkmT85STZJYaqeOqJnCVxNBpH6wt3tQJ6rYfdr10PIeNFBlwF/JplK7E8uuxEDCGJCm6plM1OsOyQ888jaazhOAChHDrVN5sUEZYFC+9rAfZwh0AovcLcFnR7Om/l5aGVKgKTVvsCQ0hp/C6/5LSBTbGe6Q8lkdkJ5/aIll1jkQXymwtB3D+0yXMqeo1SP2GbK6WV2xNZY9rFsfunfpxBQoYuF9J16rl1ZJTPuSh50QDZ1oydjJq/LwDnr4t6WVGj4Xujp6obxbWnIuLZOERBXLRfsuyBrKr66Oi4pCnQMRRQmSsab33LJK5Hiqnfs4GwShQcHrkn31boMtVbEvxxUDtGdniXVkxFicV3cnJmwR0uyl2NuIbW30xiXyCz3gG9sj60YWB76KwzgeKKP9TBZJtlXSEWz+bpxgS1NPMdcRDorvtk8Tl7FgZ0WFGIKLHKWhv/hyD6wnGrlqN60B1hYeTplgwnJWueFgVSwkzkQSlRbCzQMeV/U1zrsTbeM6HaurAQsDGKwqK9gvdopPYhdWiTRvAuC8u1UT88RuDLUSiajtsdDMx5LvHrjUSnruHQe6V45ACtPb8kuTEG/78RcGyN9xANWofPVvD9pY/CcT1gxm6TO7p/q7TLIpjmCmHhHXhIcp/FKVyaOOVAsahRgOrNDSusmoqgeD2HZvrp0T46waHl7c2t2l0cBXsrBiH0+KSEtLsEh+UUGarI7AGxnZodPV1Vlty9rN4ValMxYUe4HcdxF7Vzzi1+er6sIRECrPYFmCXvLGNiamrKoEthm7pYBHaBj1a8VR61ZVnZEUloQABu15KiPRpyLf3X10EFYHNKPhj93RgQzRMZb8UxpFbPboGnPkpzQ9p/RE/Q8Vnlb4U+IoHVNdl1JdapfZEGJXjbkD22HrLvJQlRC/9RroRaTHz0hOvFhb2t2mZZEVIGuDbNnTcWOt4uEXHx5BEc0Rn60ohhyfSAQD82RjmxsL2xi+U2uw5QadNY8d6RUWohVHyw+J8+prSpFy5CCrETe8cXhM27hERqobhG0BRRxfY8HG1hXHAwVVSQO+mp0WGenNa0XeODY3dwdp/q4XEsFBFkaiY8FWWFhyDpex8hzOZ6vRgRwB33kT9XESjigXpexVQc4WNH9h3JDBDtiGEm5HVjV9JCBlAsfnaOSMpB0lOXj3MB2A6gFsuSAd17YXhPos+fOwmbs0I2FNF6z4Ejn3RyhTTlxfVDhoFfKsWh4uLNO5dQt9f0NgU0RbikgYWCPcx/fVMJnPGak2fDttEybS+XKMibSOso8O8fkrFR+4QS6PowcqciimC/THvN0Y+pq+pU85u8GGHtZcBpfkE/b3MAkZwl6c1zDw+tYk1B/4X1oHFGjlSXmNJi/fg3YZYObhBRAgUW7HClK/5c9eFBqFgdEMgNrxBW8OmYTZSxD11GiCFADET9bk4/Sg9RIaK3ftAaqZadkRtxz3s/fbFLzFigGIFO6tdJKwxVz5rxAsCd5opu18SVTqgG+UKLMaJNTkU7hXyjoQVZq/diBcFYN2HUNgeTtic6qu/16AFhGevcjRZvUrnbgQsTLLM1cbf2RtQVLEvH1gDfSOolzfFcy2imfbaf3K5j3D2E59fxHfindyxQ8vq9cvBY7kLv8bgNWSWwRz8oisjGo+Hb9lFmZEQknQKPXTVj1VmEr/6hGjoANCTUGIuVeVu/MQMqsc6eYCaNfNOWF5d/zCQFvvFlRSAiB5cWHnLfnJaM0VWRKGUJ2ZjrVopXxbdnQVVlsd0qZK4T6RIFH9FcX23UR8Fw4fohr/QE2nykQ3krHQyRJKy2n3ZM6uCxFuWFBPtA8eOzzuxVDYizyn8XlzP5AMGMnJ8TfaeQnKhfTHwjJAPRPbQum/9sKoqW+6DJ63Zsge45u6zCvPUyEmlXB+LFKgGIJJlXCJcqkauN0mZfB0sxOddYgaD4R194wvPgjnh4UfF16ge3I2kV8KJpgG7J83Gd/kGZZb+EAZ1YRGBfB/LBRM6kerr8YA4RA3BdGMmSMQR90/RUykZ87nJNW0R4/SGQaxzJ3W6VLYH7fdw59yqBQ4JwpLRe7beRksfmkZwoYQWdipEaLjXymPRjAPjzZxGnoTu6eBHLO6pWvz2NheJxUvqZXsmuMoYlGJj63gS+wQF3Xv4Pc4Dp3oDkyvmqwTG3kqWRqTLdiwU3LWJeJWqRUuVUdID755jdzB3reBRVQRfLsL2n6WjxWUnJeMzwi6G5cv1hT/EaZ3drDf1nJtLhZ5jN5D/6dR+ZHzsnj1vb4Rjq390v4/HMIc7LdaImNkHNiKZEIyM7ABF/BfFbW1thZGooObjsJZAaxZ5t2QxCsSowM5XxcE9s6swqP8GtQSHYOcLUysaV5yvZscykhDQhec44rWiVQY9f3iFggHaZsSxgWrvQ9Uje4va/EM2HTFHQVrIv5ydte+jCLBcEYq0RcEvE7LKMUS/9ZOZ41ruw0ToPl9eHQ7Ucskfth7El98Hk1h/vkpyQ0JtzGt/EF/YxgKgcuUIdTXoMUnJMo0zIITd854VM+5v2dvDG1DIa03H/lxLd2llMwfWXCKz01X+RjH9L19Ud3Wf3rzoT8+rPoTC+4vyeguvv/DuJwy/Xn3H9Yk86AgvzFmNvoWwv3Hkhl4HVwaGswnuF77qwHLbHUUYOR8e64JU5MYybxnovBdEJmglMWwQuse9HSUP2rnLxrh5nYEJwKJ5Vwq3TKIH/MU5+srnYXOoLew7rAooH/CENjf32FvSgFZtEpOdDPM0BqtTObnJdXN4CmiPpCP1nMV8dZRhlF3cU3utMvZcngpEehX6dbovuh7sFSsj4SNdRsgEyHfUzK6/FndiQxqpPcVgELnGEMoyGOuSm5w7umSEWZq2Cc4DQ0GFxFKGhdDHhzrIa3sLKQ9axJ0bnsSnH4WVk5XvfAc/ojbXFj8QeP+ESNKJWK0lJZBX2GNYDYFyxzp1B3oKaqrZ3/nPU340AgXh90XILshVrkyuWTX+XNtEqWVjGYraSPC6sE68sLsex0d3tYeibqCzrs0YlsCV5YXGBjfSwdiNaX89rTiAazeElnzZHnYnIg7lPGHNzYTMR7h9YPHRkpt/NxaBsaRQicYGisDBp9uVzAXr57Rp5tSE5De0TzLfSUaJRgxHKaS6h5A5acwPP4dSLd5WuOEqLsYAFGGwMkxS9PFx66CnVPJE820o81C6RFSCaYX0ciFqB+kkBw+AiHbdAe430A6nlMZUA1KywG0FfcFYBln++RCFKcKCAmbKd74N7N6UvyDNRDX3QyokUIwjlm4KreTOe8ZE0sKIA4CjT7h+e74QmG/FA88CIA+mz1l58dY+psamRDkLA0AZPjIbqUMjpD5kI4a6iOkmen504u3o3FAYdo+FbscUOG6lKk8+YL0mRoV/xArYbObxLp1x47RIMNduzEbiRopFmqVxNILDudosWLBFaF7uhGId9Dbbz4fhyeCZxGbkl0cQL+ALOZjmD4/0NgbSXXkSTPMM71RtkZl/wxHFtRdUG6P1o/Kp14FUcxw0hFTybPjS1cZRNn9bk6t54McqTr2ggl5RwPhlyWliuzPFrr7xGjUYGzPgHmE6m7wPxIq+QcOhzR65Zr10xBLGjMdIpQ5C2yQLlHiKkPaCBVcF7Wpx9W8povagVXP4dMQsBKHD9kiLnHfkJxV5QJTgeYdbAwUT4taTNoW3h3PqJrrF4qjqaWie6OueH6xpSDiIhOpBamial/SfSeXtaKaNp4eVNEggoh/25cfrPdOFZJ+GHengM4GZnx5TCPG2N10mBPxCwHkCnAtj61royeWVFofWtYAUKJZJAy+77UfeBAVGRVFmtmBFB1w/vL3svnZEBR3ansUm0MXwP5bxiguew0Q8kOS7cQF8szKLAoOfSuvGcKcDr7QN1sKb72hccoijBTO4z7Lc/lICIyXtCfVG3AQsJ9keOxbDtqsJVQMVflMGsB/UGDwrz57vbep1hBhChUzZkCA87/LlZcs7t5zGtUQUnDNZlJmrO9YR7BkuZDuGttZpLgOhSMmR2zztvqmixVJrraT2NCCHmwjKV+VhTwRdbCKH/Qanv2sOKj+7giUG/dZ1bIpr7GXvZOGmCUHEBYse3f1uiWOrJfcnhMebKYRE8VYIisJfXq/Lf64yXk9HHZqrU7voP1hzFfLYKGUlxbF7r0LWRr+5wkTCedN3RISOrH8RVtdY6bchA7Yr/vqHMiNMGuvShyFsNA+E/NiIhfU1ya88m7j0Cbay3XC6IEShoykxuoXn7TXKUaJnaecHWtwUAXv3xgqRu4EoReGsBeJ89mdJbPgVGuLnU15nvMSdFL2Ym/rzYd4RS98KJdSHl2oXoK/IgvTxmq/yYYSQhjkuUtozBs8D5+I/zrSDmgTbSl5QHosYBiY2piRg+QMHyQhlDPIVrNGE+ITDjYd1xi2TUMpoHiPONy03KSRSt8Tiq9rqGYnf1pgIWGhgqrLH6K/77nrhTIVTbRNtJu7bxlOmYxhidGOqj2QpPbiYlkUDOHWGqGn2O7K2bYrT4JHEEWbJF6bcid+EfaK37EDDBoESR0YSfWF/g34OxlbadYU0KBKE9Rdnsuk+S8UfIerEE0BEVJTyWPfOlzmufkLrBpxZ9p0D6EcGS+wHvv6b1YVwVJIKtmAsK0lwEsvL/MRETRRDaqONOcVCc0Ssn7rTxvEDXHuPl0fq20KDygyidkVnaSNi2UXGbxXCAwgKNR6EZQ6fBI88vQsWQ3gzNm59xtDlZbb/PTD8OA9s3Dhx18WAxESFpddNloay/UmgTnmEQToHPAk/FaQkN4iCzWPoxzQ7OOMHTDf2aZLgqJdP+kW2iODPbFZf+Hros5OsTJUElw5OC+1wstoedF95E6EUx3jLWC/XTXWU5SnZFByA3YXHIvmZbEqeKl27Lamjs/EEvpE12+1qiYP8ROL132yBx5iat+/KiJSPydDb6xkKAYYToh/mYhO22UfnPKJUCA4E0oNzCh0SsVvZZPqD7QzwB47pAmH9qFqWYQPInP2wpkYlrYHbPjn7q022bT1kTWuE1ZXDODzP35JJPW6IoMifR9FrNZM9v9k1OmQleho6DAZ0Yl4Pfj/g0Puc0TtUyAnFHShk5fGzJzP8Y8D8Q9NHxBSArklpEdhfxyzBeh/rssZDzXHt+nSTcwWXNHs//GiFNmQ0l8hDws9ErDaIzNbghDB51CZaEurYVCzKgaFK2oaZ7lAFLqiIk5AXFVrarwhFVOUAN2U6E4LzUlEvO7J5xBR7QDIh9oXEkip08ZKdgwb2r0AoGxIRttsh9xr1ZGjFa9kzUy9BgVJip/j792nTxGxOuJ6yAoIqEP/OOYvprIb9C7o+zmiOVNp/5Me84QoFl3y7C/7tMd1h/8PsvUDuhEu6kfmkSHZIj//f7Yi01wc8lQGhUGBerVl//+R6KiwFvVDODcBAWLEtzIz24btJhLun/PxAWg2OlmE65GkFQsdixn2J5u5Xvvgabx0UBE8F9Z6Xobi+n4v54djXUB0lhJWkf3W0PeX5XHZOGLNhr0dq9rKeA2TeYTBei3oPdLKF1YVby1xQmHQmsiKhjGoCBMiIhivTmpoTZHaqj1PQHQe6LR58j6IU6TarohkPwBdGIddYSj/bNzprlhtUMyZfROklWgNZa5gqeSNSBp6XC8fg0TtPbe+s7qDcaCuYbDyGDadijEsMvYuNsHmvudZ9RPwYXeCEx295Imb15c/9u4fWk4sNal9yoOhr9/fMviLGRWlVvcg/qGc5/KyTML5bxSqHRL5szEbSrkoj3CblFkQ3ZW2wey1XkP1DeWAxe0oGkreXgFXXuU1xKQdZwSL7RTVsRgBrH63xGkdflLQCL4QIrZam3mXJaEPLzC3s6fJGoFeFUlhrLdN2Vjz+MIfbhWbS0QHgSPG163g9ZM15iQRK6zTPpsFPVlJNFaGIj1uG7yJ3MsVnv3gbcMRBYLK8RVjoeNvERj+syRpQTebO44R0ZvSf7VZY4YHdTUlxcUWHA7jDjORFOnR0pD3UDeeeBYLHD+P2na6dHUNxkAsGPoReMYx5ZAk9+27SKNn4FnDHC0FW7dAHSyLydO1H02uAhckBHxfzX1Wb9QPK+Zwi2gSBm3GmEjJ8H7tshE9ThJ0HZ+9nuAGocCYV8Kn/aQOkBfmyktN0oAAR3mb7MpQpdkSokR5SB3OANiOxa1EgQgpHoLQLW0X2DMTP9FXnZrTIBjOpiQkeUb2qGWnrEoVdk0TfaQ6oI49vXRvpXp3iFbiHmRQleY+MWRdjLf7xQYStRi3pqrry422SnAsltFrDsQTV6SqEhMWJBEaR/DoEhegH9/p7g7cRIPaFGzzU0LfTBmAIb/YfJ0C4kMjKUNofz0UM4Eyev19aE42HFTPuTIxELjOUJCVyUBKvca5SylR6BnGC6emd9QzCDHSx2+H2rkUawnsHsZ2KaCNDtO/0q6UEN/brGSjV0IASRe4/x1+hxoZ4yPqtd8BzaASYJmxMTkVrrUciJFMznBNdeatJ476EOJVlKa1reMar7twSQx9Khvod0OFxFfpe/JijQc9l7sVh/k1BGp5h8mOtQoGZN9iEXHCvAYQj6V15Ih31mxl0RsnNcprpqW39+nTkqvwHUEWH8ShvB4exl/uDw9WjbHNEWXTAmFkY6P/FrOxiUhPfBxR3JtNUBzpMt8ojtQG2ckWDn1JcXPjII+yINh2BRQ7EnwuD4KFBZt+6s1Z8TtTKx3KvqUBnjevy+7XR/Qv3FUXoZiENEv5WAm/rGzDjBarEgBBt7zBAAsBEABBx7zBAAsBFABB17zBAAsBGQBB5rzBAAsCQB8AQfa8wQALAogTAEGGvcEACwJqGABBlb3BAAsDgIQeAEGlvcEACwPQEhMAQbW9wQALA4TXFwBBxb3BAAsDZc0dAEHUvcEACwQgX6ASAEHkvcEACwTodkgXAEH0vcEACwSilBodAEGDvsEACwVA5ZwwEgBBk77BAAsFkB7EvBYAQaO+wQALBTQm9WscAEGyvsEACwaA4Dd5wxEAQcK+wQALBqDYhVc0FgBB0r7BAAsGyE5nbcEbAEHivsEACwY9kWDkWBEAQfG+wQALB0CMtXgdrxUAQYG/wQALB1Dv4tbkGhsAQZG/wQAL1jWS1U0Gz/AQAAAAAAAAAACA9krhxwItFQAAAAAAAAAAILSd2XlDeBoAAAAAAAAAAJSQAigsKosQAAAAAAAAAAC5NAMyt/StFAAAAAAAAABA5wGE/uRx2RkAAAAAAAAAiDCBEh8v5ycQAAAAAAAAAKp8Idfm+uAxFAAAAAAAAIDU2+mMoDlZPhkAAAAAAACgyVIksAiI740fAAAAAAAABL6zFm4FtbW4EwAAAAAAAIWtYJzJRiLjphgAAAAAAEDm2HgDfNjqm9AeAAAAAADoj4crgk3HcmFCEwAAAAAA4nNptuIgec/5EhgAAAAAgNrQA2QbaVdDuBceAAAAAJCIYoIesaEWKtPOEgAAAAC0KvsiZh1KnPSHghcAAAAAYfW5q7+kXMPxKWMdAAAAoFw5VMv35hkaN/pdEgAAAMizRym+tWCg4MR49RYAAAC6oJmzLeN4yBj21rIcAABAdARAkPyNS33PWcbvEQAAUJEFULR7cZ5cQ/C3axYAAKT1BmSh2g3GM1TspQYcAICGWYTepKjIW6C0syeEEQAg6G8lFs7SunLIoaAx5RUAKOLLrpuBh2mPOsoIfl4bAFltP00BsfShmWR+xQ4bEUCvSI+gQd1xCsD93XbSYRUQ2xqzCJJUDg0wfZUUR7oa6sjwb0Xb9CgIPm7dbGy0ECT77MsWEjIzis3JFIiH4RTtOeh+nJb+v+xA/Blq6RkaNCRRzyEe//eTqD1Q4jFQEEFtJUOq5f71uBJN5Fo+ZBSSyO7TFJ9+M2dXYJ3xTX0ZtnrqCNpGXgBBbbgEbqHcH7KMkkVI7DqgSETzwuTk6RPeL/dWWqdJyFoVsPMdXuQY1vu07DARXHqxGpxwpXUdH2Ud8ZO+innsrpBhZodpchO/ZO04bu2Xp9r0+T/pA08Y770ox8nofVERcviP48RiHrV2eRx+se7SSkf7OQ67/RJi1Jej3V2qhx0ZesjRKb0Xe8l9DFX1lOlkn5g6RnSsHe2dzidVGf0Rn2Of5KvIixJoRcJxql981oY8x93Wui4XwtYyDpV3G4yoCzmVjGn6HDnG3yi9KpFXSadD3feBHBLItxdzbHV1rRuRlNR1oqMWuqXdj8fS0phitblJE4tMHJSH6rm8w4OfXREUDuzWrxF5KWXoq7RkB7UVmRGnzBsW13N+4tbhPUkiW//V0L+iG2YIj00mrcZt9Zi/heK3RRGAyvLgb1g4yTJ/LyfbJZcVIH0v2Ytuhnv/XvvwUe/8GjSuvWcXBTStXxudNpMV3hDBGa1BXQaBmDdiRAT4mhUVMmAYkvRHoX7FelUFtgFbGh88T9v4zCRvu2xVwxHheBAnCyMSNwDuSurHKjRWGZcU8M2r1kSAqd3keTXBq9+8GbZgKwYr8IkKL2zBWMsLFhDkOLbHNWwszTrH8S6+jhsUHcejOUOHd4AJOa66bXIiGeS4DAgUaZXgS8dZKQkPax+O8weFrGFdbI8c2Lll6aITcvBJphe6dEezI04ov6OLGI9s3I+d6FEZoKxh8q6Mrh7Zw+l5YjHTD+QLfVftFy0TzzRkGLv9xxPdTlyt6F34FwNCfd4p/blYlGKz2GJ19h1CSQ4rOj50t5wdcMddCboSktvRtchNUeUDJUw5tYtoF3dSRuM6oaXeRC6fh6KuQh2K8wvOxIQnC+t8w5QlrUkSbfCOAfZl8c0lXPT5bhjcFois8oFzv21BL3NxuIoekxzVqzcxqJfkiP3nRrMW89sRypaFPZK9Hev8oRhg3O9SFn385sz2LOUlfMoeeNOr5xvOXRBAGjyvl40+Eytky3ARQnUU0CALm/0wDtg1Pf7MFZKSGQTpzQE9vRFOg8w9QBub+4+isSAhRhbLENKfJggRgvozC95oqdfb/ZTGRzBKFSP5AI4Vw5PNUj06uFm8nBq2m8B47Vl8wFNmJBO49aEQo8Lw1mhwm7Dof+0XJnPKFEzzrAyDTMLc4t/one8P/RkPGOzn0W/5ye2LscL1KT4QEx7nYcbLdzzp7l0zc7RNFJjlYPq3vpWLo2o1AJAhYRn+Hvn4ZS57bkzFQgD0abkfX7Obu//8DMVPuymAOOLTEzeggqo/PFC2Iyo0oMbayBhESCOVT0vko6w0QUh4EfseKw02vRGvbubrwCgt6+pcE3WQgyzWWgrgJvFy+KUlNBiTdKS3i/EMmHCtj3YPL0Ee3MjGUvcWCF9mzBmqab3oEhN7eCe1HMr2fz+gFMTsohfXmVZx4qN89F9PyBn1p4sdJiDWhm3mzfibMR0w+Uh3EjCoi+gIYAH3An4kfDcbFRc8kq4iC7jBtIOdLVsFYtocZRut9QYT+VBygvxYQ30IEj9iGLPIVzflDqM7L5ScihbPet7fui2FntKLCju5Qy0cwQzry5Q8E6Njl+bEU0qcEfHP5f65C9iLPD0gtuhcAxbuQ59+qA7OrotMqOMiNIQbdYojTynJQE3XL0nOlaAyERJt7KJz+5AgzXvbQbtIfxVWiKeLUDq1aMBaUhLqGt8aNrVIV3JEcUG4eHNL0nDLEIPiGu2Olc1R5lZQ3gZN/hQkm2Go8vpA5p9s5JVI4D0a9wA9qdec6O/jw65dLaxmEDRBjJMNxOLr3HQatThXgBSBUW/4EHXbJhQSYeIGbaAZ8ZJFmyopSZhMq3xNJEQEEK33FkJ1c1u+H9bbYC1VBRSYtZySUlDyrafLErl4qgYZ/+JDN2fkbpmRflfnFlVIH99tioLATuX/Gq+WUC41jRNXCS2jcKLev+FavOR5gnAYrUv4ywxL1i+acetdGKOMHkwve//n7uVdACezOu/lFxMf+1n/oWpfdcDwXwlr390X53kwf0pFt5Lw7LfLRVfVHTBMfo9Oi7JbFvRSn4tWpRI8310zIi6f8huxJ4curE4XC1c1wKr5Ru9infEoOlciHWdWIbgKXIzVXQKXWYR2NRIBrClmDXPvSvXC/G8l1MIWARe0v9BPq52y8/vLLolzHGCO0HfiEYuiT3h9P701yBH5scQVW9Yti2PWXI8sQzoWd9412/FL+W38CzSz99PIGwqrASl3z7vEfYcA0HqEXRHNFULzVMPqNV2pAISZ5bQVQJsSMCp0ZYO00wDl/x4iGwihC16aaB/SUIQg719T9RBKiY71wEKnBmWl6Oo3qDIVnSvyMnETUUi+zqLlRVJ/GkJb178mrDLtNsGFr2uTjxASMs1vMFd/qIQxZ5tGeLMUl37Ai/wsn9Ll/UBCWFbgGR5PWNcdfKOjr55oKfc1LBDmYi5NJVuMjFvGwvN0QzcUn/t5oO5xr2/yd7MwUhRFGYd6mEhqTpsL71XgvGZZlh+UTF9tAhFBZ7U1DDbg970Tuh+3CENVEcEiQ49D2HWtGKjn5MqTqlVx6xNzVE7T2B7JEM9enIrVJnPsx/QQhEcT+9SCdkPtivCP5/kxFWUZGDqKI1SUqK3sc2F4flq+Hx5kNpa0XInsc+g8C4/41tMS/cO74bOr55AiDM6ytsyIF/20KtqgliE1K4+BX+T/ah0esVqIJP40AXv5sLvu32ISZV1xqq09gsHZN51q6pf7Fr+0DRUZzeIx0IVEBeV9uhz3kCitL8AtH6LTSiOvjvQRNbVymDsw+aaKiB3sWrJxFoJij35KfLdQreokp/EeDhyRnRmPrq1yUqwSdwhX04gR9gTgMhpZD2dX15TKLAjrFTMGmL9gL9NALQ06/TfKZRvgA793nP2DSDxIRP5inh8R2MSulQP9pFpLWtW9+4VnFQ52GntEPE4x3rBKrXpnwRrJifDMquXQ3oquTqys4LgQO6wsgBUfhZYtWmLX1xjnFErXN+DaZib8uPA6zQ3fIBqO5iLMSACYnXPWRKBoi1QQMqAr/1oA/oQQDFbIQq5pFD6I9r5xgD2mFI9retMZhBlOKrQujuDMz9lyBllIIOUfcJow3VgM4CHIB6Q3LTTvEw3BfBRvD1gqugmNhTgB6xhQ8ZvZShPutChM8KaGwSUf0nYByA7MFHGZL1Yo9Jh3E4bUAXoS/1nNf7trMjF/VRioSYIY136wwF+qBn/93moeCW5Rb0ZPbth7KmRvXssCE4vJJQsY44nOGjU9CzZ+wxfuO+8N3lssgmGCDI7DXbQddYW1yGq5W/F80cc4mrqQEtLm4nrFp7It3MX5xkDpNBeGoJvZtlEfOVM3uPiQIwIdVEQBSBKTswOUInObOlYhEmmVAdrWd6AEOetPQsmrqRbD+oGQzJXIRQfm45K7FlQcujxR2p9dnYvEb847NY60EeiL5dAHtYSutQvCisKxIRbj7h7FSeIlGqOOci0zHqobTVUzG26tV/AlmWf831JKEaEqAKLJmG1sb3+B+5fnnBVJNYAK/P6IR0vfYfp9IQQbTiGQhl2ftQyPK3287pTiEKEpNOg0B+PPcnacayo6GxUKNEEiAsnbgw+Ugwa1CGIahsBoVaFdabKJPBIkcUV9EKfwwqoJtQMfrMsWbc2WnBTRrHMVTKLEJpd+XMiAvMMZA0xojW/lOngezzl90FUaEANfwnDLnkkW5kKInETrIBTE9vJMfgbcm59TqsMVJikZdrQv4B0I04KH6JQ0m29zH8nQHawS5cOxVBHdAMElqBP8RCVXV9403qlVFEExL5IYO5buLO0VwlUUa1mR/bq2HuUdFTy0TZm17OLXet40MhNeZRpLIaH/4qfbjRkWwv4Xtv7gnWmJv9uRUvGfm3L+HTGfrALitVcpm9P2Q6EHvxL+xleDWqOt84GI9JSJyW4XvbgtJDEMmXCiqjH663tKHXaTnLaep1+GpQpffHONThJUuENkhpH3507NdlvQMOIWaaZU/ed19aGigFRyBL2aHAHoVP6waTmlZdB0xyK24BECIuo9HcSHDn8EUnmr41gWgqpkjSS1KdKehaZXlhzvG5HqXtg2EVpDgxPI9t1xdRE2pXaOhJUwFGQYenRVztIVg04UsuW6PBl9npjR6oFHGxKxTI/P9MUvDmP/wjKxDBFW3R9zA3K3u9E7v3N/3U8VrNTnT4ROpSrGCq9Q39SjGuvk8LESUafau2ZtkgtlphAmHm1eVyVR0WrACHdO/s8UsGUINq1upYWF8MoU4v0DGo4/xUEsZYdzU9b+TK1+QhBxjzZSdz5pUOiLPqBYHlMUTjPEJhWOg2TiLk7I7uVnGSJAdXCacaT9mrphemrfwR8VSEmGAMeG3qAUfYyiK9kTGprbp8B4KBbJWZwvi3bPGKGA0tHwlrJbO3CD+y1UAx9kkCODVp5PGSUmMr2cFGITfnTsI+yFo1+ur37sw5k6GJ2R5yxnZ4z3mVue5zRASR4CuxB8oMC3OkD5whAhyO0Sw+kUm8iwZUmQt/NUKTqpFzMk2sH6HL9bdKUwqrOIkx2gVii5HHJXuWhnXkpwNXwSSGxy56NOredCAfZczEIbF1oHT+FMopihk4EzdH8T4hyYZNEMcGX/RPwwoKgvTA0Svr0FEMw+P1Y7PciSO5+QFi4tBxR/Ds8rikx6dwrHNBw9fIRsD2lhW9ZvrIpm/KARTJulR1PDOfLLi1ctgDsJFh8CjxkoNMjuvm6tOGCKixtTYfkPmSA9VTdlbCN8NjcRqLn3U79ojCqFfkcsGwSFFRKo9Sjvgi91Jl5Z9yFF5hoLiZl51bE9Cdjalzo1688QTuv/10oejQuO0T2JAuYDFSLm/43dZXCO8UWNK4PfRBrV7794qj8G+bZLOPuxC2sQyuvvFpXPR7ekXgZ6ns6FFL3mq1x6wxnlTfaHGEZCpxk2cOt5LBowr/D5VM9riQgQQ0xmmLcg/NpsOCrDxqsKFFTff37lKLsRiMb0c7hWDRkq1x/eHvMpFir48ZBmrFAfeubTSvM32k0aO5cawGuSExngiB3wxVDh4Ak9IbAGdxgfGOskbPekGVlMjClcyJQeE+8Sl6MaB7C3r/eZOf0cE9iq13xM4QicpZt1AIg85BeOlQ2cnxkLA48CkwCqS90deX2IwQPw5mGZ4VtASk+qEtec6rEErGC6/9ly0BzjVBcNRGXeBdf4qH+QjwTkGyodiEr/qmOGm8lPutmCblE6Eiodv5X8ZwK84yiQI8rlyBZ05C67+wEDqxwzdKw8H3scyU79VD3h4erxn8jrhfPMEXuiPKqMWZpl7se6ZmcwQBYay8vU7+8A/+l5aUCBPNAb8F7/5PWVYD8y7EHI0CViEaw2P15zuzjPPmdS+kSvuhVXBM81UOoGgw4B5zgWWykbtmKhIXJS5BGpYJDj7dj5EGS7CaoOZ11W03h0XClPOBU9KoxU0sD0KwiXkbPzYoYaZprXdIP4eBtl/jpQ2P2TEACBDVKkNldi/r1JZE79uBRA4ZBmTQTt+n0tXP2hPOcZyIwaYLAi1LxunFk+5YUwEPovIXhcKwlsigPwjV6nPBT4eymWM3YLB20EbDE20UsZ9tqze8BTzkiIBce9g8WeH9poUE1Y9IAtdWOcVnI7wxMQg6RgbjHheFJ8Q+xOCrQYMC4waTMydTMyYm9vbGVhbiBgAACRchAACQAAAGR5EAABAAAAaW50ZWdlciBgAAAArHIQAAkAAABkeRAAAQAAAGNoYXJhY3RlciBgAMhyEAALAAAAZHkQAAEAAABzdHJpbmcgAORyEAAHAAAAYnl0ZSBhcnJheU9wdGlvbiB2YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = id();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await nd(await i, n);
  return rd(t, e);
}
(function(i, n) {
  function t(a, g, I, B, s) {
    return EA(s - 823, a);
  }
  function e(a, g, I, B, s) {
    return EA(g - -497, a);
  }
  function A(a, g, I, B, s) {
    return EA(s - 728, g);
  }
  function o(a, g, I, B, s) {
    return EA(a - 346, g);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(o(845, "T2p#", 867, 833, 845)) / 1 + parseInt(o(820, "cO3^", 812, 812, 828)) / 2 + -parseInt(A(1225, "[o*@", 1245, 1259, 1232)) / 3 * (parseInt(e("3sNL", -22, -38, -5, -19)) / 4) + parseInt(e("]%@B", -19, -11, -37, -38)) / 5 * (parseInt(t("mmBJ", 1324, 1342, 1294, 1321)) / 6) + parseInt(A(1175, "T2p#", 1187, 1174, 1194)) / 7 * (-parseInt(A(1188, "cdpm", 1212, 1188, 1208)) / 8) + parseInt(t("yOKT", 1294, 1297, 1328, 1319)) / 9 + parseInt(t("&P9^", 1299, 1318, 1334, 1311)) / 10 * (parseInt(A(1215, "[o*@", 1233, 1203, 1210)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, -2 * -542524 + 22188 * 71 + -1805142);
function qg(i, n, t, e, A) {
  return EA(n - 949, e);
}
function nr(i, n, t, e, A) {
  return EA(A - 502, e);
}
function ad(i, n, t, e, A) {
  return EA(e - -79, t);
}
function ai() {
  const i = ["F2GOWR9a", "WQ03reZdVmoXeLegpZFcLq", "wmoibSoIWOldP3b5mJhdGSomDa", "rSkWwfTD", "ur4xvui", "WR/cG1rrWR3dS1q5WOpdH8k2qCos", "lCo3wZJcKW", "WR7cJfmmWQ9CW6Ga", "WRBcJmkYWOeH", "WR0YW5CGWORcVSoXqa/cOW", "WO3cR8kBW7/dOa", "zfBcPL3cUG", "W7SAWRCPW5pcICornCkYWPq7W7a", "W7ugW6BcR8kn", "W4DwzSkioq", "WQZdTbFcMIrdWOxdM2ldOCoV", "W6pdLwG9WPe", "eqr7W6nN", "W7WzWOa5eq", "WQZcKCoUd8oZW7NcJ8kz", "WQ5sogJcOxSFWQzUqf/dI1S", "zwTsW7hdNSkxrCoPWQ9rtHBcKui", "o8kAWP89qa", "W6ZcRM8WWPn6jCk9WOZcHrCQeKi", "W4CyFdZcTq", "WQ7dQSolmCobW7tcKG", "imoGjHj8W77cUrJcS8kSfHu", "WQHfW4LTthPswYFdR8ovzq", "W70RW67cHwC", "WORcP8kdW7/dUW", "AJHXW6fIvmoIdZmK", "WRTnWRvKWOxcP8oK", "fK1LW6LG", "qWjjbM8", "W5RdR8oQWQ/dKa", "W6FdVwO9WP8", "zXaWWRxcPSoncG", "W7pdTmo3WR/cNG", "zh9YW4PJ", "W7KEWPmO", "WRKgW7lcO8kD", "WOvaC8ksoW", "vcTWW7hdTW", "WPvPWQVdVNO", "WRrDfexcIW", "W7xdGmkmuM3cNCoH", "W7FdNemXW4y", "kCoMjrnWW7BdPYZcUSkaidxcMW", "xqDPW4bVdta7WPtdIvnCkG", "WRtdOSkmwG", "pmkIbhRcHHP3W4miW7NcVctdKG", "WQVcMCkjyCkhW77cVCkfWPpdIH8", "WO5TWRRdUw8", "WOzUoSoNla"];
  return ai = function() {
    return i;
  }, ai();
}
function EA(i, n) {
  const t = ai();
  return EA = function(e, A) {
    e = e - (-5665 + -1 * 6713 + 1 * 12841);
    let o = t[e];
    if (EA.qqWNMd === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      EA.nmfRZI = B, i = arguments, EA.qqWNMd = !0;
    }
    const a = t[-1 * -4542 + 4744 + -9286], g = e + a, I = i[g];
    return I ? o = I : (EA.YFQmuL === void 0 && (EA.YFQmuL = !0), o = EA.nmfRZI(o, A), i[g] = o), o;
  }, EA(i, n);
}
function rn(i, n, t, e, A) {
  return EA(A - -371, i);
}
function ir(i, n, t, e, A) {
  return EA(n - 860, e);
}
var nI;
class gd {
  constructor() {
    y(this, nI, !1);
  }
  async [(nI = rn("oLK*", 97, 124, 110, 113) + rn("vGnb", 145, 156, 121, 145) + ir(1337, 1350, 1350, "O^Zq"), qg(1446, 1461, 1435, "Frs*"))](n) {
    function t(a, g, I, B, s) {
      return qg(a - 97, s - 21, I - 188, B);
    }
    function e(a, g, I, B, s) {
      return nr(a - 168, g - 109, I - 185, I, g - -924);
    }
    function A(a, g, I, B, s) {
      return rn(a, g - 285, I - 365, B - 70, g - 825);
    }
    function o(a, g, I, B, s) {
      return rn(s, g - 438, I - 189, B - 134, B - 605);
    }
    function r(a, g, I, B, s) {
      return ir(a - 434, B - 4, I - 250, a);
    }
    try {
      const a = n + (o(703, 701, 723, 721, "Ghv5") + "/") + Cg;
      await O0(a), this[o(682, 720, 712, 697, "5*8(") + t(1423, 1456, 1438, "e1Mp", 1442) + e(55, 43, "3wM&", 32, 37)] = !0;
    } catch {
      this[r("1)LD", 1346, 1363, 1359) + o(713, 727, 713, 735, "V(mD") + A("Frs*", 945, 921, 971)] = !1, console[t(1434, 1436, 1420, "j)0w", 1438)](Cg + (r("JZv#", 1366, 1343, 1350) + A("cdpm", 943, 963, 930) + o(762, 732, 764, 744, "qLN1") + t(1433, 1448, 1426, "cGKI", 1443) + o(769, 737, 721, 745, "lv]y") + A("@yhR", 935, 950, 919) + e(62, 75, "Cp3z") + e(97, 83, "O^Zq") + e(74, 49, "vGnb") + A("YnkD", 961, 968, 953) + A("Gqf(", 933, 919, 925) + r("aMtZ", 1366, 1392, 1379) + t(1471, 1461, 1501, "Ah2f", 1476) + A("Ghv5", 968, 954, 970) + "n."));
    }
  }
  [ir(1315, 1337, 1322, "oY]2") + ad(422, 446, "cdpm", 429) + nr(1029, 992, 1029, "@rd7", 1004) + "ed"]() {
    function n(t, e, A, o, r) {
      return nr(t - 83, e - 214, A - 84, o, t - -950);
    }
    return this[n(28, 11, 55, "BC$n") + n(35, 44, 48, "@rd7") + n(65, 44, 60, "JZv#")];
  }
}
class rr extends Error {
  constructor() {
    super(...arguments);
    y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Vg(i, n, t, e, A) {
  return V(t - 966, i);
}
function gi() {
  var i = ["W6pdSJW9eW", "aHKFWP1D", "d8kBlaVdLSkiWQvxAmoUAeNcNW", "wCo9W5O", "o8oQW6XbkW3cUCkg", "WObsWO8", "crGmWPfB", "W6n1W6zGba", "W4emW5BdTNNdS3ZdKrVcH8kC", "WRDlfKldGa", "WO/cQCkmcW", "WR3dNCkmjSoZuCkGWQ7cTGGjW5lcTG", "uhiSnmo2", "WO7cPSkEb0u", "W6ZdNsRcR20", "W6fzWP4znG", "W7GEcxJdVSoifN0", "W7TRp8oHvG", "WRFcJqBcMmoz", "uCowWPbRxdJdIq0", "q2yTm8o8", "WPpdOmkcymov", "rNy/m8oM", "sSopWPVcG8kQW7FdVem", "lutcMSkXEa", "W7qBxbNdOmoWggvDpq", "lWddHmo2WQC", "W6L1DSofWQFdHxldQYnqlW", "W5DAf8k8WR8", "WQHdW7y", "WPxcIqyyEG", "W4ldRCoOWQ3cHq", "cMRdVCkTqa", "WOVcOSky", "dmosd8oOW6K", "aa8A", "FxffWQP3", "zSkwAbTZfgJdGq", "yHnkWP1rW4hcLCkUpCkbWOVcOq", "WRBdVJCXjKW7", "idagW7qHm0hdK8ozE0VdPSkuma", "WRBdO2mztHXOxSoXEIC", "uSkmWR8", "zCkYW6G", "bCkTW6ekamoeodi", "WPjFWO3cOs0", "W6jKnq", "uNvzeCkd", "WRdcHrS", "CadcPmk0fG", "wfjlW4GEtGJcHCkuACoBWPi", "WPFdNG4xz1VcQCoxWRBcN1hcO8k9WPa", "cG8FWOPC", "WO/cQSkpmf8", "W7hcVIu", "WP/dPmoxWPmu", "ogpdGCoxWOVcKSkYWPZcGvJdGCk5Ea", "qmkpWQGxwW", "bSkdWOfzua", "W5VcO8k+WP45", "q8kXf8kTWPi", "o2BdJSorWOpdJSolWPRcIfldSW", "DctdHmoAWP5NpW", "WP9/xH5i", "W4SjWOZcKb7dL0VdSa", "WPNdPSoxWPit", "WQq5C8kBrXuTWRazca1u", "a8kvWRjivq", "gCoBW6bvbSo0FaZcHdD0WPS", "uNvqbSko", "C3DYW59I", "W4hcO1Dbma", "bCkOW5Gon8oRcdO", "xCo2W48nia", "u8kgWRapzG", "lwFdKJVdSaxdKmoeC8oi", "cCkvWQfdra", "WRrbW7z/W7W", "W751WPq", "WPn/rqrv", "WQPbW6e", "WOxdVmkzESoi", "W7eExbJcKCkWwfPwhXJdGmkD"];
  return gi = function() {
    return i;
  }, gi();
}
function se(i, n, t, e, A) {
  return V(A - 568, n);
}
(function(i, n) {
  function t(g, I, B, s, E) {
    return V(s - -841, E);
  }
  var e = i();
  function A(g, I, B, s, E) {
    return V(g - 934, s);
  }
  function o(g, I, B, s, E) {
    return V(E - 501, g);
  }
  function r(g, I, B, s, E) {
    return V(B - 214, E);
  }
  for (; ; )
    try {
      var a = -parseInt(A(1339, 1363, 1306, "I9@k", 1297)) / 1 + -parseInt(o("7#rz", 895, 918, 890, 918)) / 2 * (parseInt(A(1291, 1287, 1268, "6rUa", 1285)) / 3) + parseInt(r(678, 602, 637, 620, "h9%H")) / 4 * (-parseInt(t(-469, -432, -439, -442, "vyB)")) / 5) + -parseInt(r(626, 641, 633, 622, "@)Zz")) / 6 * (-parseInt(r(567, 603, 596, 575, "FYW^")) / 7) + parseInt(o("!QMm", 919, 886, 901, 917)) / 8 * (parseInt(A(1314, 1314, 1297, "k03F", 1340)) / 9) + parseInt(r(605, 548, 588, 626, "gKg3")) / 10 * (parseInt(A(1345, 1303, 1385, "!QMm", 1310)) / 11) + -parseInt(r(620, 626, 620, 637, "*I*M")) / 12 * (-parseInt(t(-441, -437, -472, -463, "Oxi5")) / 13);
      if (a === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(gi, -1 * -1261121 + -159 * 1370 + 3 * -75133);
function io(i, n, t, e, A) {
  return V(n - -966, i);
}
function Zg(i, n, t, e, A) {
  return V(i - 121, e);
}
function V(i, n) {
  var t = gi();
  return V = function(e, A) {
    e = e - (3543 + -1 * -2515 + 10 * -571);
    var o = t[e];
    if (V.OqmzxO === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, k = C.length; p < k; p++)
          x += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(s, E) {
        var C = [], x = 0, d, l = "";
        s = r(s);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      V.hnnVnm = a, i = arguments, V.OqmzxO = !0;
    }
    var g = t[1 * -593 + 8164 + -7571], I = e + g, B = i[I];
    return B ? o = B : (V.nMIDku === void 0 && (V.nMIDku = !0), o = V.hnnVnm(o, A), i[I] = o), o;
  }, V(i, n);
}
function Ae(i, n, t, e, A) {
  return V(i - 754, A);
}
var Bt, Lo;
class zg {
  constructor(n) {
    O(this, Bt);
    O(this, Lo);
    function t(a, g, I, B, s) {
      return V(g - -261, B);
    }
    function e(a, g, I, B, s) {
      return V(s - -377, a);
    }
    this[e("B]qw", 35, 5, 55, 33) + e("DSXD", 16, 20, -12, 9)] = n;
    function A(a, g, I, B, s) {
      return V(s - 993, g);
    }
    function o(a, g, I, B, s) {
      return V(g - -460, I);
    }
    function r(a, g, I, B, s) {
      return V(g - -608, s);
    }
    try {
      M(this, Bt, n[e("I9@k", 3, 35, 0, 30) + r(-246, -259, -243, -258, "*D5H") + r(-187, -211, -171, -213, "h9%H")] && JSON[A(1394, "3vjK", 1396, 1368, 1360)](n[t(102, 143, 120, "TkTb", 152) + A(1371, "C!]@", 1362, 1401, 1365) + o(-120, -100, "@)Zz", -97, -91)])), M(this, Lo, n[t(128, 101, 87, "%3K1", 124) + o(-48, -72, "FYNT", -78, -100)]);
    } catch (a) {
      console[A(1368, "FYNT", 1332, 1370, 1358)](a);
    }
  }
  get [io("wC1r", -542) + "id"]() {
    function n(e, A, o, r, a) {
      return io(r, A - 1022);
    }
    function t(e, A, o, r, a) {
      return io(r, a - 347);
    }
    return this[t(-258, -276, -213, "cOfx", -243) + n(413, 424, 465, "FYNT")][n(470, 458, 424, "wC1r") + n(418, 406, 435, "M9Ih")];
  }
  get [Ae(1115, 1128, 1147, 1087, "I9@k") + "s"]() {
    function n(e, A, o, r, a) {
      return Ae(A - -1436, A - 325, o - 400, r - 138, a);
    }
    function t(e, A, o, r, a) {
      return io(e, r - 819);
    }
    return this[t("1diX", 242, 205, 204) + n(-350, -313, -334, -345, "@y5f")][n(-257, -257, -295, -278, "kcgG") + "s"];
  }
  get [io("k03F", -602) + Ae(1157, 1123, 1129, 1197, "QRW!")]() {
    function n(t, e, A, o, r) {
      return Ae(o - -440, e - 85, A - 413, o - 376, t);
    }
    return this[n("Phiw", 734, 681, 703) + n("mqQV", 684, 684, 701)][n("k03F", 667, 663, 678) + n("*D5H", 719, 677, 698)];
  }
  get [Ae(1139, 1103, 1120, 1108, "JAI[") + "b"]() {
    return m(this, Bt);
  }
  get [se(952, "3vjK", 913, 959, 943) + Ae(1112, 1080, 1096, 1084, "vyB)")]() {
    return m(this, Lo);
  }
  get [se(913, "gKg3", 923, 876, 916) + se(930, "zjPm", 935, 992, 959) + Ae(1124, 1106, 1139, 1138, "M9Ih") + Vg("I9@k", 1379, 1356)]() {
    var o, r;
    function n(a, g, I, B, s) {
      return Ae(B - -415, g - 192, I - 335, B - 237, I);
    }
    function t(a, g, I, B, s) {
      return Zg(a - -710, g - 423, I - 131, g);
    }
    function e(a, g, I, B, s) {
      return Vg(a, g - 230, B - 24);
    }
    function A(a, g, I, B, s) {
      return se(a - 210, I, I - 383, B - 149, a - -890);
    }
    return !!((r = (o = m(this, Bt)) == null ? void 0 : o[n(758, 720, "gKg3", 752) + t(-180, "Y7Ac", -187)]) != null && r[A(92, 104, "bt*e", 96) + n(693, 720, "7#rz", 720) + e("h9%H", 1385, 1430, 1402) + e("gKg3", 1446, 1395, 1412) + t(-171, "1diX", -175) + t(-163, "*I*M", -139) + n(668, 658, "*D5H", 691)]);
  }
  get [se(938, "@Egg", 910, 955, 947) + Zg(477, 487, 443, "I9@k") + se(943, "QRW!", 926, 971, 941) + Ae(1107, 1126, 1105, 1093, "cOfx") + Ae(1109, 1126, 1072, 1117, "Q@IC") + Ae(1152, 1131, 1120, 1140, "DNvF")]() {
    var o, r;
    function n(a, g, I, B, s) {
      return se(a - 261, I, I - 157, B - 403, B - -950);
    }
    function t(a, g, I, B, s) {
      return se(a - 44, B, I - 177, B - 441, a - 157);
    }
    function e(a, g, I, B, s) {
      return se(a - 174, g, I - 201, B - 86, a - -268);
    }
    function A(a, g, I, B, s) {
      return se(a - 203, s, I - 15, B - 420, a - -1304);
    }
    return !!((r = (o = m(this, Bt)) == null ? void 0 : o[e(677, "3vjK", 683, 670) + e(701, "kc@L", 683, 737)]) != null && r[e(729, "h9%H", 707, 739) + n(63, -6, "FYNT", 26) + t(1108, 1103, 1149, "3$nY") + n(61, 23, "Ra1b", 33) + e(720, "B]qw", 708, 757) + A(-308, -342, -290, -320, "vyB)") + A(-336, -366, -322, -306, "@)Zz")]);
  }
}
Bt = new WeakMap(), Lo = new WeakMap();
function AA(i, n, t, e, A) {
  return gA(n - 141, i);
}
function wA(i, n, t, e, A) {
  return gA(e - -66, n);
}
function eA(i, n, t, e, A) {
  return gA(e - -33, t);
}
function gA(i, n) {
  const t = Ii();
  return gA = function(e, A) {
    e = e - (132 * -69 + -4899 + 14437);
    let o = t[e];
    if (gA.XfyGbT === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = s.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const B = function(s, E) {
        let C = [], x = 0, d, l = "";
        s = r(s);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      gA.orYzQh = B, i = arguments, gA.XfyGbT = !0;
    }
    const a = t[0], g = e + a, I = i[g];
    return I ? o = I : (gA.iCTPQz === void 0 && (gA.iCTPQz = !0), o = gA.orYzQh(o, A), i[g] = o), o;
  }, gA(i, n);
}
function bA(i, n, t, e, A) {
  return gA(i - -90, A);
}
(function(i, n) {
  function t(a, g, I, B, s) {
    return gA(B - 517, g);
  }
  function e(a, g, I, B, s) {
    return gA(g - 266, I);
  }
  function A(a, g, I, B, s) {
    return gA(s - 528, B);
  }
  function o(a, g, I, B, s) {
    return gA(s - -631, I);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(t(915, "^wDK", 968, 1015, 1019)) / 1 + -parseInt(t(1119, "^wDK", 991, 1035, 968)) / 2 + -parseInt(A(1306, 1301, 1128, "HdZs", 1211)) / 3 + parseInt(t(951, "q3pH", 1111, 1067, 1068)) / 4 * (-parseInt(o(-108, -19, "rDbH", 95, -5)) / 5) + parseInt(o(-52, -97, "q3pH", -58, -171)) / 6 + parseInt(e(834, 813, "s#hM", 902, 915)) / 7 + parseInt(t(1058, "MXRL", 1060, 1025, 1005)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ii, 229755 + 4 * 94379 + -395985);
function Ii() {
  const i = ["WPpdTCoyWRpdQW", "W6PhWO7dGCo3", "W7vHhq", "hMtdRG", "W6hdN3xcNYO", "BuBdIq", "W7tcNCk1WPC0", "W7v8nCk3WQ0", "qmo+W7uYDG", "W5v+tmkeeq", "wCknhXC", "W7PTf8kTWQS", "E1xdVs/cNW", "WRSVeG", "FmoCt8kkAW", "CSkvWPabia", "WRqYgKFdQW", "W6XbWOK", "AhFdHq", "hLmBW6XK", "WQ1ewmk6oG", "FSolsCkPCa", "W6xdL2lcMsW", "W5NcLNRcKYC", "rgiHW7fr", "W5DYWQ7dJmov", "s8k7W615Aq", "W6JcJSor", "W5rSB8kgcG", "Emodwa", "aM/dGgZcTa", "W4DOemkCBq", "WQnpx8kkoq", "mCoaW6fLpq", "cSogWQfzW6i", "W5TnuSkWcW", "W6j6WQW", "a8o3W79Yha", "FX7cJmkSWPy", "W7TKB8onWOC", "jdfIW6ZdMq", "W7GFuCkgWPi", "nwy8W64", "xK/dM04", "lZT/W6VdKG", "W51CWPpcOmod", "W4ekW6tcS8kf", "dGZcIGXLWP3dSKpdScpcQc18", "W6dcJSkOWOOU", "q8k3W7HKFq", "WOtdHc0", "WR3cGtpcQmkW", "F8oCwmka", "WRFcNCogFh8", "WOBdGd/cLIm", "cSkyWOSmla", "WPxdGCk6W6Cs", "wSowW6K1AW", "WRqLg0FdVq", "j0JcS8o6WP4", "WRxdPCkBWQug", "zLpdIaFdVG", "WO3dPCkBWQ4", "W7hcHmkJWQmS", "W6TfWP/dJmoS", "WQ00pmkCW4RcKYDXt8oCEW", "FMyMW6Dv", "WPiUBqNcHq", "ca7dKL4FW6ZcMv4", "w8ojW7BdIJO", "ACkoWPhdNZy", "keJcUSolWP4", "FCkFWPyxkW", "tSoyW7uVCa", "c2JdIwZcGa", "yw3dICoZjW", "rSkwW7tcPe8", "W4TNWQ7cPmoJ", "WOxdJJ7cPCkF", "iafvWOzB", "WQSwWRqtW6m", "W7imuSkCWPS", "WQuoffNdVq", "WQjxuCk2", "sw0MW7Cz", "WOFdLZtcGtu", "CfNdQGBcMa", "uCkbhW", "s8kAW67cVKS", "D1xdLG3dQa", "dhGErCkB", "WQDqr8kNlW", "W7bMh8kX", "sSkjcvD8", "vcddJG", "ndCrtCkm", "W6HGE8ocWPS", "ustdIgdcIa", "iw/cTSo8WQm", "W4eaW7BcL8kD", "WP/dH8kSW6Wy", "W6P+s8kkwq", "WPPyWQSFWQa", "jGfsW5jC", "W7FcI8oyW598", "pHdcMG", "BSkcWOdcKsW", "bXBcMSkVW5e", "WQ04oCkBW4ddNXnbsmoTuhe", "rCkAW7i", "W7/cHmozF0O", "W4BcJSk1WPyV", "WRSMWPxdGJu", "jKBcVCor", "z8o4WRBdQ8oI", "WOtdKsq", "lelcOmo8WPK", "g8orWQTc", "W71NdCkBWQm", "obBcNCkHWPK", "fJ4Lq8kG", "WPmpirtdLa", "rmklW4ZcPe0", "ib1eWOHE", "W7fMEG", "eSoNWQ4ImCoiwcjwWRJdUXm", "WR3dGCoVW405", "W5uDW6VcVmke", "WQCHb0FdVq", "W45Pc8kWWQC", "r3xcGmotgW", "W6SmtmkgWOq", "W5/cSSoQWPjk", "aSo7W4DofG", "WRtdP8kkWQGD", "W5pdVmoHW5ns", "WQ1brW", "vSoJW7ldPcC", "B07dMWZdGa", "sCopsCkn", "WPhdRCkmWQma", "xNVdKSo5pq", "bN/cGCoMWPO", "WQJdI3hcHmoWFmkdwmkkkSkbW5W+", "W61+WQS", "gmklWOSnnW", "W7vHgSk7WQa", "wMi5W7TD", "W7pcRSo9W5nu", "WQNdQSkoW40J", "WO3cLCojChu", "W6vCWR7cKCoN", "mCkqWPOhkW", "WRzkrG", "tCknW7lcOLW", "WQXycCohW5GxBmkLWQRdHWnj", "W6WmtmkB", "W6HpWRJcNCo9", "WRatW47cKSkUWQiQWO1HlCom", "vmkhfq", "itT5W7hdMa", "iHlcMSkDWPS", "WOddMSkGW6qt", "WPa5DZJcMW", "nCoKWOrLW6i", "WQnaqmkxlW", "W4CkW6BcTSkv", "wmknW6NcO1O", "WQvjwmkajq", "hmkoWQjOmHXtWRHAz8kOWQzA", "W6hdN2ZcNYa", "CLldRs/cOq", "W73cJSonw14", "WOZdNdNcKq", "s8owWPBcQmog", "aCotWQa", "W7xcNs8", "w1tdH3GX", "fmo1W4D4eG", "fSo7W4C", "W5JcS8o7WPXp", "W4KgW6hcT8kE", "yutdNGZdQq", "W5P6tmkJfG", "F8o4WRddU8oV", "W7CcxCkuWPu", "W5DeWOpdUSon", "W6ddV3JcKZa", "kSo7WPvpoa", "WQlcJSofzMG", "WOddGJRcR8kG", "WOVdLsm", "dtLLW6xdHG", "tSofW7qOCq", "W5btzmoDWPC", "W4HGESobW5i", "mWxcHSkXWOi", "y8kFWPVdGJy", "nXlcNCkgWP4", "WPbPW5VdQq4", "BCoQWPRdPSoE", "aCoDWQDFW7e", "W7hcKZZdLmkO", "WPRdNCkqW78x", "W4aTCspcGq", "uSoCW47dJGO", "vCohxSkaDW", "gSokWRtdVr/dTCk5ySosl3i", "WOddNcpcGha", "WQCYhfRdRa", "v1RdH140", "W5xcUCoHW49d", "g3pcPSo0WOq", "BZvSWRmDqSollMaTwdW", "qCoEW7G+Ba", "hNJdN8k1dq", "WO5GWRtdNq8", "W5D5j2xdMx7dP8kgW4KxpSki", "wfhdMgqL", "W65pWOddH8o7", "WRtdT8k4WQCD", "aGDcW4nC", "W7P9cSkQWQe", "W7ZcGSo1z1q", "WRT0WONdGJm", "W4H0amknBa", "ACo8WQpdVmo/", "gSogWRddUHZcRmk2BCoZf1ak", "WRZdSmkkWOOh", "W7CexCkqWO8", "c2JdIwZdSa", "vLxdMKK", "xSkAfePM", "WRhcJSodE28", "WRRcG3FcMqFdUCkOW6i", "sgWHW5Du", "WP/dMSkdW6av", "WRjPWPW", "t8kAW7tcHvK", "W6PYWQOPW48", "W6bYWRGcW5K", "W4qBW6FcNSkz", "o3u6W7ny", "o2ldO8kMaG", "BgJdKSo4jG", "WRSPfLhdTG", "W71KBCoiWPC", "W7G3DSktWQu", "WQpdQdtcSZW", "l0JcOmo6WOe", "W73cHmolFvC", "iGfgW6na", "mwKZW68", "WOZdKY3cRSkH", "kcODwSkr", "W7pcJSkUWPCP", "amkXWR/cMxDTxCoYW4RcQtm0W6i", "lXPjW5u", "cIFcVSkrWOm", "h8kcWQ5RoLOCWRTyySkv", "W67cNCkUWPC", "WRTOWOJdIbe", "ESoCuSkwAG", "WQ8mWQ8f", "WQHmv8k2lG", "iXJcHW", "WQ/dQ8kD"];
  return Ii = function() {
    return i;
  }, Ii();
}
function CA(i, n, t, e, A) {
  return gA(e - -318, i);
}
var iI, rI, aI;
class Id {
  constructor(n) {
    y(this, aI);
    y(this, rI, [eA(465, 681, "KZDR", 563) + CA("V]@5", 250, 435, 372) + "ic", AA("K8Bk", 714) + bA(591, 607, 619, 634, "N2*^") + "ic"]);
    y(this, iI);
    function t(e, A, o, r, a) {
      return gA(o - 352, e);
    }
    this[t("rDbH", 753, 820) + t("qQIt", 710, 825) + "d"] = n;
  }
  async [(aI = eA(429, 615, "k(Iv", 522) + "se", rI = eA(619, 524, "wA@P", 571) + wA(419, "&zU!", 408, 499) + eA(562, 442, "1)$K", 429) + AA("N2*^", 689), iI = bA(397, 401, 438, 339, "KZDR") + AA("]84K", 700), eA(405, 576, "rDbH", 489))](n) {
    function t(g, I, B, s, E) {
      return AA(I, s - -622);
    }
    function e(g, I, B, s, E) {
      return AA(I, B - 307);
    }
    function A(g, I, B, s, E) {
      return eA(g - 218, I - 241, g, B - -119);
    }
    function o(g, I, B, s, E) {
      return wA(g - 315, s, B - 151, B - 496);
    }
    const r = await this[a(295, 174, 354, "(M(W", 306) + a(255, 393, 232, "AiY]", 343) + e(1006, "(M(W", 878)](n);
    await Promise[a(200, 305, 77, "k(Iv", 186) + t(94, "qQIt", 138, 166)]([this[t(248, "&zU!", 270, 195) + a(130, 182, 133, "wA@P", 184) + "d"][a(211, 221, 197, "h6^Q", 191)](n), this[o(1148, 1047, 1066, "RJuw") + A("5%L8", 443, 540) + "e"](r)]);
    function a(g, I, B, s, E) {
      return CA(s, I - 172, B - 127, E - 45);
    }
    this[t(-27, "@]&8", -30, -43) + e(1012, "5%L8", 967) + o(1146, 1152, 1076, "^wDK")]();
  }
  async [AA("GODJ", 699) + CA("(M(W", 266, 162, 179) + "se"](n) {
    function t(a, g, I, B, s) {
      return AA(g, I - 247);
    }
    function e(a, g, I, B, s) {
      return CA(I, g - 16, I - 312, B - 592);
    }
    function A(a, g, I, B, s) {
      return bA(g - 879, g - 98, I - 260, B - 403, s);
    }
    function o(a, g, I, B, s) {
      return wA(a - 185, g, I - 32, B - 235);
    }
    function r(a, g, I, B, s) {
      return wA(a - 37, I, I - 402, a - 485);
    }
    try {
      if (o(956, "V]@5", 929, 831, 921) === o(690, "$hHP", 519, 602, 486)) _0x55b45d[t(1036, "(M(W", 960, 1e3, 1049)](_0x12bd88);
      else {
        const a = await fetch(n);
        if (!a.ok) {
          if (t(926, "$hHP", 1044, 919, 921) !== t(819, "56f#", 871, 880, 857)) throw new Error(A(1171, 1254, 1228, 1314, "znd1") + t(850, "RJuw", 869, 864, 917) + o(916, "azK&", 812, 839, 952) + r(1049, 1111, "K8Bk", 1106, 1005) + "d.");
          _0x446bc9[t(836, "N2*^", 930, 937, 994) + t(906, "5%L8", 945, 848, 1074)](_0x15cc9d);
        }
        this[o(652, "1)$K", 771, 739, 629) + "se"] = await a[r(1094, 1045, "mApL", 1220, 1191)]();
      }
    } catch (a) {
      A(1169, 1298, 1357, 1356, "rDbH") === e(741, 941, "k(Iv", 864) ? (this[o(843, "iko!", 887, 827) + "se"] = void 0, console[e(638, 702, "94MA", 722)](a)) : this[o(745, "wA@P", 892, 826) + e(916, 831, "h6^Q", 917) + "d"] = _0x598bf8;
    }
  }
  async [CA("qQIt", 335, 394, 378) + wA(483, "x(GO", 566, 562) + "e"](n) {
    function t(a, g, I, B, s) {
      return bA(a - 772, g - 339, I - 452, B - 219, I);
    }
    this[o("(M(W", 1172, 1259, 1205) + t(1124, 1033, "94MA", 1214)] = void 0;
    function e(a, g, I, B, s) {
      return CA(s, g - 336, I - 255, I - -248);
    }
    if (!n)
      if (t(1196, 1203, "ahJ7", 1248) !== A(1314, "Z15#")) this[t(1271, 1294, "Uy0L", 1304) + "se"] = void 0, _0x4ddcd4[e(-255, -118, -121, -233, "^wDK")](_0x90802c);
      else {
        console[A(1369, "&zU!")](t(1366, 1290, "iko!", 1239) + t(1342, 1403, "$tR8", 1317) + o("@]&8", 1328, 1198, 1294) + A(1264, "7^T7") + r(313, 184, "p1RJ", 260, 212)), this[o("l0#%", 1161, 1089, 1214) + "se"] = void 0;
        return;
      }
    function A(a, g, I, B, s) {
      return AA(g, a - 578);
    }
    function o(a, g, I, B, s) {
      return eA(a - 290, g - 143, a, B - 685);
    }
    function r(a, g, I, B, s) {
      return CA(I, g - 15, I - 400, s - -38);
    }
    await this[r(148, 197, "ahJ7", 201, 185) + t(1194, 1072, "N2*^", 1192) + "se"](n);
  }
  async [eA(541, 643, "s#hM", 662) + bA(508, 540, 518, 530, "56f#") + wA(674, "5%L8", 585, 554)](n) {
    function t(I, B, s, E, C) {
      return eA(I - 170, B - 480, I, E - -484);
    }
    function e(I, B, s, E, C) {
      return wA(I - 58, s, s - 274, C - 565);
    }
    function A(I, B, s, E, C) {
      return AA(E, I - 572);
    }
    function o(I, B, s, E, C) {
      return CA(B, B - 426, s - 449, C - 708);
    }
    function r(I, B, s, E, C) {
      return AA(E, B - -184);
    }
    const a = await fetch("" + n + this[t("0#F$", 1, -20, 80) + e(939, 1086, "iko!", 959, 1026) + r(578, 509, 556, "azK&") + o(1021, "$tR8", 889, 1010, 944)][2279 * -4 + 3 * -2077 + -15347 * -1]), g = a.ok ? 3950 + -9 * -883 + -11897 * 1 : 39 * -50 + 4360 + -2409;
    return "" + n + this[e(1194, 1092, "ahJ7", 1197, 1167) + r(718, 637, 757, "^wDK") + t("%X)R", 123, 220, 115) + A(1314, 1408, 1367, "rDbH")][g];
  }
  [AA("^wDK", 599) + CA("V]@5", 124, 38, 121) + "s"](n) {
    function t(A, o, r, a, g) {
      return AA(o, a - -793);
    }
    function e(A, o, r, a, g) {
      return AA(o, a - -417);
    }
    n[t(126, "Z15#", -82, 39) + "ch"]((A) => console[e(136, "bJd!", 179, 171)](A));
  }
  [wA(486, "MXRL", 333, 388) + eA(493, 488, "mq5i", 399) + bA(592, 661, 561, 685, "0#F$")](n) {
    function t(A, o, r, a, g) {
      return AA(A, a - -995);
    }
    function e(A, o, r, a, g) {
      return bA(A - 366, o - 323, r - 333, a - 289, g);
    }
    n[e(739, 833, 822, 673, "ahJ7") + "ch"]((A) => console[t("1MNR", -442, -390, -311)](A));
  }
  [wA(355, "k(Iv", 346, 390) + wA(700, "$hHP", 574, 605)]() {
    function n(A, o, r, a, g) {
      return CA(A, o - 163, r - 488, g - -404);
    }
    function t(A, o, r, a, g) {
      return eA(A - 84, o - 258, r, o - -248);
    }
    function e(A, o, r, a, g) {
      return CA(a, o - 138, r - 139, r - 613);
    }
    return window[t(248, 372, "7^T7") + e(626, 698, 745, "p1RJ")][n("56f#", -34, -186, -96, -120) + t(334, 295, "mq5i")];
  }
  [wA(514, "tDNt", 566, 545) + eA(415, 613, "wA@P", 499) + eA(538, 339, "V]@5", 469)]() {
    function n(r, a, g, I, B) {
      return eA(r - 38, a - 43, g, B - -736);
    }
    function t(r, a, g, I, B) {
      return AA(I, B - -2);
    }
    function e(r, a, g, I, B) {
      return eA(r - 291, a - 178, I, r - 752);
    }
    function A(r, a, g, I, B) {
      return CA(I, a - 464, g - 444, a - 1130);
    }
    function o(r, a, g, I, B) {
      return AA(a, r - 811);
    }
    try {
      if (o(1448, "s#hM", 1566, 1443, 1547) === n(-145, -315, "bJd!", -284, -231)) {
        if (!this[A(1386, 1348, 1387, "AiY]", 1325) + "se"])
          throw o(1535, "]84K", 1634, 1546, 1444) === A(1346, 1403, 1429, "Z15#", 1360) ? new rr(e(1407, 1416, 1407, "mq5i", 1532) + A(1357, 1421, 1447, "RJuw", 1308) + n(-222, -299, "h6^Q", -163, -270) + e(1249, 1263, 1294, "9Vca", 1245) + ".") : new _0x1d965f(A(1376, 1302, 1185, "azK&", 1225) + o(1533, "l0#%", 1475, 1573, 1419) + e(1357, 1414, 1424, "$tR8", 1284) + e(1333, 1246, 1243, "iko!", 1300) + ".");
        if (!this[t(612, 739, 718, "$hHP", 679) + e(1176, 1265, 1055, "wA@P", 1225) + "d"][t(815, 640, 615, "TRt8", 725) + e(1285, 1244, 1210, "q3pH", 1327) + n(-231, -109, "k(Iv", -322, -191) + "ed"]())
          if (o(1407, "mApL", 1437, 1435, 1515) !== A(1461, 1361, 1420, "KZDR", 1430)) {
            if (!this[o(1389, "&zU!", 1428, 1513, 1492) + "se"]) throw new _0x43c60d(t(616, 508, 615, "Z15#", 618) + o(1600, "7^T7", 1704, 1489, 1595) + n(-312, -334, "%X)R", -161, -248) + e(1170, 1084, 1111, "56f#", 1068) + ".");
            if (!this[A(1293, 1338, 1327, "@]&8", 1249) + A(1288, 1349, 1244, "0#F$", 1329) + "d"][e(1230, 1332, 1337, "5%L8", 1144) + o(1430, "l0#%", 1535, 1500, 1388) + o(1591, "bJd!", 1493, 1617, 1497) + "ed"]()) throw new _0x4799fb(o(1611, "TRt8", 1657, 1578, 1591) + o(1423, "V]@5", 1481, 1430, 1476) + n(-234, -200, "HdZs", -172, -185) + A(1292, 1273, 1251, "l0#%", 1148) + ".");
            this[e(1252, 1377, 1256, "1MNR", 1144) + n(-160, -303, "l0#%", -177, -189)] = new _0x15cb21(_0xbec9f9(this[t(696, 749, 674, "bJd!", 659) + "se"], this[o(1441, "KZDR", 1483, 1480, 1398) + t(576, 798, 643, "t]2g", 690)]())), this[n(-238, -230, "t]2g", -153, -223) + n(-446, -450, "K8Bk", -463, -333) + "s"](this[t(529, 550, 529, "x(GO", 627) + t(721, 888, 752, "KZDR", 816)][n(-211, -234, "azK&", -306, -254) + "s"]), this[t(775, 869, 710, "wA@P", 824) + e(1406, 1369, 1355, "&zU!", 1337) + t(829, 593, 803, "qQIt", 702)](this[o(1526, "AiY]", 1419, 1405, 1567) + e(1391, 1497, 1329, "znd1", 1392)][o(1516, "t]2g", 1425, 1407, 1591) + e(1313, 1421, 1423, "9Vca", 1365)]);
          } else throw new rr(n(-156, -201, "0#F$", -252, -283) + e(1383, 1483, 1447, "x(GO", 1424) + o(1586, "^wDK", 1486, 1664, 1603) + e(1307, 1223, 1236, "%X)R", 1250) + ".");
        this[n(-246, -85, "bJd!", -57, -170) + t(773, 828, 822, "l0#%", 719)] = new zg(od(this[e(1162, 1151, 1259, "K8Bk", 1234) + "se"], this[A(1381, 1286, 1292, "TRt8", 1261) + e(1319, 1430, 1401, "1MNR", 1228)]())), this[e(1243, 1342, 1250, "tDNt", 1155) + e(1388, 1490, 1451, "t]2g", 1492) + "s"](this[e(1199, 1087, 1123, "tDNt", 1240) + A(1447, 1379, 1457, "TRt8", 1363)][e(1263, 1294, 1333, "RJuw", 1185) + "s"]), this[n(-298, -392, "AiY]", -390, -269) + n(-40, -221, "K8Bk", -59, -156) + o(1418, "mApL", 1367, 1510, 1449)](this[e(1325, 1422, 1387, "t]2g", 1194) + o(1534, "@]&8", 1576, 1656, 1619)][t(659, 730, 656, "q3pH", 754) + t(589, 611, 700, "h6^Q", 621)]);
      } else throw new _0xf92847(t(688, 690, 937, "AiY]", 818) + t(795, 851, 891, "]84K", 761) + t(795, 874, 873, "V]@5", 832) + e(1214, 1195, 1201, "MXRL", 1292) + "d.");
    } catch (r) {
      if (A(1234, 1315, 1335, "$hHP") !== o(1392, "iko!")) {
        if (r instanceof rr)
          if (t(859, 911, 935, "7^T7", 817) !== t(531, 737, 666, "znd1", 630)) r[e(1186, 1308, 1270, "!UrQ")]();
          else throw new _0x23792e(A(1438, 1477, 1402, "KZDR") + o(1589, "N2*^") + t(680, 607, 660, "mApL", 631) + t(750, 564, 766, "]84K", 649) + ".");
        else if (r instanceof Error) {
          if (A(1373, 1405, 1524, "TRt8") === o(1529, "1MNR")) return _0x185dc9[A(1182, 1288, 1363, "bJd!") + o(1513, "7A5p")][n(-82, -226, "N2*^", -162, -108) + n(-109, -55, "(M(W", -290, -182)];
          console[e(1311, 1257, 1211, "mApL")](r);
        }
        const a = {};
        a[A(1226, 1318, 1288, "7A5p") + o(1597, "p1RJ")] = !1, a[t(636, 715, 747, "mq5i", 674) + "s"] = [], a[o(1603, "p1RJ") + n(-215, -178, "]84K", -111, -194)] = [], a[t(751, 760, 704, "znd1", 656) + n(-173, -136, "MXRL", -222, -144) + t(790, 628, 646, "ahJ7", 724)] = void 0, a[t(754, 739, 764, "k(Iv", 780)] = function() {
        }, a[t(805, 820, 805, "k(Iv", 788) + t(753, 754, 831, "^wDK", 806)] = "", this[n(-72, -299, "bJd!", -65, -170) + t(612, 682, 629, "rDbH", 640)] = new zg(a);
      } else {
        _0x2d5330 instanceof _0x12e357 ? _0x53f4f4[o(1523, "AiY]")]() : _0x529743 instanceof _0x3362df && _0x3f7002[o(1496, "RJuw")](_0x281b92);
        const a = {};
        a[A(1252, 1306, 1269, "iko!") + n(-97, -315, "&zU!", -115, -209)] = !1, a[e(1338, 1471, 1349, "qQIt") + "s"] = [], a[n(-172, -66, "0#F$", -217, -115) + t(733, 772, 867, "KZDR", 802)] = [], a[e(1326, 1457, 1267, "HdZs") + n(-281, -206, "KZDR", -364, -317) + A(1353, 1368, 1365, "KZDR")] = void 0, a[A(1379, 1422, 1492, "(M(W")] = function() {
        }, a[A(1282, 1325, 1282, "&zU!") + o(1604, "efDH")] = "", this[o(1564, "h6^Q") + n(-63, 15, "efDH", -116, -114)] = new _0x279721(a);
      }
    }
  }
  [CA("1)$K", 278, 298, 326) + eA(407, 423, "&zU!", 536) + eA(617, 528, "@]&8", 591) + "t"]() {
    function n(e, A, o, r, a) {
      return bA(A - 239, A - 289, o - 221, r - 352, o);
    }
    function t(e, A, o, r, a) {
      return AA(A, o - 412);
    }
    return this[n(570, 672, "p1RJ", 552) + t(1046, "!UrQ", 1046)];
  }
  [CA("znd1", 101, 275, 157) + bA(351, 280, 423, 450, "tDNt") + "se"]() {
    function n(r, a, g, I, B) {
      return eA(r - 79, a - 22, r, B - 260);
    }
    function t(r, a, g, I, B) {
      return wA(r - 457, g, g - 292, r - -912);
    }
    if (!this[n("wA@P", 718, 628, 633, 699) + "se"]) return t(-471, -572, "azK&") !== A(407, 368, 492, 358, "0#F$") || _0x3ce007 instanceof _0x42fef3 && _0x5e886f[A(474, 434, 538, 527, "9Vca") + o(1362, 1344, 1257, 1259, "k(Iv")](_0x2d4a18), null;
    function e(r, a, g, I, B) {
      return CA(a, a - 454, g - 120, I - 792);
    }
    function A(r, a, g, I, B) {
      return bA(g - 97, a - 388, g - 399, I - 261, B);
    }
    function o(r, a, g, I, B) {
      return bA(g - 903, a - 125, g - 165, I - 332, B);
    }
    try {
      return n("t]2g", 917, 791, 916, 848) === A(523, 445, 484, 513, "]84K") ? null : JSON[A(611, 656, 696, 697, "bJd!")](this[o(1312, 1273, 1318, 1298, "q3pH") + "se"]);
    } catch (r) {
      if (e(1140, "94MA", 1135, 1109) !== e(988, "h6^Q", 977, 1013)) _0x4b39ac[n("azK&", 705, 681, 774, 755)]();
      else {
        if (r instanceof Error)
          if (e(1128, "94MA", 1162, 1077) !== A(687, 664, 634, 574, "s#hM")) S[e(1139, "$hHP", 1159, 1091) + n("Z15#", 725, 675, 657, 697)](r);
          else return this[o(1392, 1198, 1297, 1318, "q3pH") + t(-360, -377, "5%L8")];
        return null;
      }
    }
  }
  [bA(439, 452, 432, 490, "^wDK") + bA(604, 569, 607, 632, "k(Iv")]() {
    var A;
    function n(o, r, a, g, I) {
      return wA(o - 139, g, a - 46, o - 266);
    }
    const t = this[n(669, 570, 623, "Z15#") + e(1003, 1023, "7A5p") + "se"]();
    function e(o, r, a, g, I) {
      return AA(a, o - 328);
    }
    return ((A = t == null ? void 0 : t[e(1100, 1210, "q3pH") + e(1142, 1048, "h6^Q")]) == null ? void 0 : A[n(833, 757, 751, "mq5i")]) || [];
  }
  [CA("$hHP", 346, 471, 356) + wA(408, "iko!", 484, 387) + eA(662, 681, "AiY]", 607)]() {
    var a;
    function n(g, I, B, s, E) {
      return wA(g - 11, s, B - 380, E - -586);
    }
    function t(g, I, B, s, E) {
      return bA(B - -470, I - 482, B - 169, s - 323, E);
    }
    const e = this[r(1365, 1428, 1498, "AiY]") + A(854, 732, 811, 860, "5%L8") + "se"]();
    function A(g, I, B, s, E) {
      return bA(g - 513, I - 208, B - 337, s - 60, E);
    }
    function o(g, I, B, s, E) {
      return CA(I, I - 11, B - 493, g - -457);
    }
    function r(g, I, B, s, E) {
      return AA(s, I - 601);
    }
    return (a = e == null ? void 0 : e[r(1291, 1371, 1238, "$hHP") + t(-231, -205, -125, -219, "9Vca")]) == null ? void 0 : a[n(-36, -182, -116, "Uy0L", -136) + o(-167, "RJuw", -250)];
  }
}
const Ci = class Ci extends Id {
  static getInstance() {
    if (!this._instance) {
      const n = new gd();
      this._instance = new Ci(n);
    }
    return this._instance;
  }
};
y(Ci, "_instance");
let Zr = Ci;
const sd = ({ children: i }) => {
  const n = ie(null);
  return QQ(n, xe.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(_C, { ref: n, children: i });
}, cd = ({ configuration: i }) => i ? /* @__PURE__ */ D(UC, { target: i.styleTarget, children: /* @__PURE__ */ D(
  YB,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Zr.getInstance(),
    children: /* @__PURE__ */ D(
      VB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: $e.DOCUMENT,
        children: /* @__PURE__ */ D(
          ZB,
          {
            value: Vx({
              onError: i.onError
            }),
            children: /* @__PURE__ */ D(oQ, { analytics: Ad, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ D(ks, { children: /* @__PURE__ */ D(_x, { cameraConfiguration: i.camera, children: /* @__PURE__ */ D(sd, { children: /* @__PURE__ */ D(jx, { ...i }) }) }) }) })
          }
        )
      }
    )
  }
) }) : null;
ec(cd, "x-dot-document-auto-capture", ["configuration"]);
