var no, R, qg, Vg, At, da, Zg, zg, Xg, Or, Wi, Li, $g, eo = {}, A0 = [], Xc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, io = Array.isArray;
function Be(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Jr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function GA(i, o, t) {
  var e, A, n, r = {};
  for (n in o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : r[n] = o[n];
  if (arguments.length > 2 && (r.children = arguments.length > -1238 * -3 + -2595 + -1116 ? no.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (n in i.defaultProps) r[n] === void 0 && (r[n] = i.defaultProps[n]);
  return Zt(i, r, e, A, null);
}
function Zt(i, o, t, e, A) {
  var n = {};
  n.type = i, n.props = o, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__c = null, n.constructor = void 0, n.__v = A ?? ++qg, n.__i = -1, n.__u = 0;
  var r = n;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function $c() {
  var i = {};
  return i.current = null, i;
}
function HA(i) {
  return i.children;
}
function zA(i, o) {
  this.props = i, this.context = o;
}
function yt(i, o) {
  if (o == null) return i.__ ? yt(i.__, i.__i + 1) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? yt(i) : null;
}
function e0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = -3127 * 1 + 6855 + 3728 * -1; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return e0(i);
  }
}
function Oi(i) {
  (!i.__d && (i.__d = !0) && At.push(i) && !Xo.__r++ || da != R.debounceRendering) && ((da = R.debounceRendering) || Zg)(Xo);
}
function Xo() {
  for (var i, o, t, e, A, n, r, a = 1; At.length; ) At.length > a && At.sort(zg), i = At.shift(), a = At.length, i.__d && (t = void 0, e = void 0, A = (e = (o = i).__v).__e, n = [], r = [], o.__P && ((t = Be({}, e)).__v = e.__v + (1 * 7481 + -9493 + 2013 * 1), R.vnode && R.vnode(t), Ur(o.__P, t, e, o.__n, o.__P.namespaceURI, -5141 + 1 * -1754 + 6927 & e.__u ? [A] : null, n, A ?? yt(e), !!(436 * 13 + 7 * -640 + -1156 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, n0(n, t, r), e.__e = e.__ = null, t.__e != A && e0(t)));
  Xo.__r = 0;
}
function t0(i, o, t, e, A, n, r, a, g, c, I) {
  var s, C, x, E, B, l, u, h = e && e.__k || A0, p = o.length;
  for (g = AI(t, o, h, g, p), s = 2535 + 2535 * -1; s < p; s++) (x = t.__k[s]) != null && (C = x.__i == -1 ? eo : h[x.__i] || eo, x.__i = s, l = Ur(i, x, C, A, n, r, a, g, c, I), E = x.__e, x.ref && C.ref != x.ref && (C.ref && Yr(C.ref, null, x), I.push(x.ref, x.__c || E, x)), B == null && E != null && (B = E), (u = !!(-1 * -5908 + -2 * 3938 + 1972 & x.__u)) || C.__k === x.__k ? g = o0(x, g, i, u) : typeof x.type == "function" && l !== void 0 ? g = l : E && (g = E.nextSibling), x.__u &= -7);
  return t.__e = B, g;
}
function AI(i, o, t, e, A) {
  var n, r, a, g, c, I = t.length, s = I, C = 0;
  for (i.__k = new Array(A), n = 0; n < A; n++) (r = o[n]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[n] = Zt(null, r, null, null, null) : io(r) ? r = i.__k[n] = Zt(HA, { children: r }, null, null, null) : r.constructor == null && r.__b > 6361 + 471 * -19 + 2588 * 1 ? r = i.__k[n] = Zt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[n] = r, g = n + C, r.__ = i, r.__b = i.__b + (-1649 + 2 * 825), a = null, (c = r.__i = eI(r, t, g, s)) != -1 && (s--, (a = t[c]) && (a.__u |= 1 * 5401 + -1 * -3770 + -9169)), a == null || a.__v == null ? (c == -1 && (A > I ? C-- : A < I && C++), typeof r.type != "function" && (r.__u |= -8067 + 3718 * -1 + 11789)) : c != g && (c == g - (-1446 + 1 * 1447) ? C-- : c == g + 1 ? C++ : (c > g ? C-- : C++, r.__u |= 4))) : i.__k[n] = null;
  if (s)
    for (n = 4618 * 1 + -2 * -2136 + -8890; n < I; n++) (a = t[n]) != null && -1 * 8438 + 1 * 5166 + 3272 == (-22 * 337 + -3064 + 10480 & a.__u) && (a.__e == e && (e = yt(a)), r0(a, a));
  return e;
}
function o0(i, o, t, e) {
  var A, n;
  if (typeof i.type == "function") {
    for (A = i.__k, n = 8627 + 1 * 2441 + 11068 * -1; A && n < A.length; n++) A[n] && (A[n].__ = i, o = o0(A[n], o, t, e));
    return o;
  }
  i.__e != o && (e && (o && i.type && !o.parentNode && (o = yt(i)), t.insertBefore(i.__e, o || null)), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && o.nodeType == 8);
  return o;
}
function be(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (io(i) ? i.some(function(t) {
    be(t, o);
  }) : o.push(i)), o;
}
function eI(i, o, t, e) {
  var A, n, r, a = i.key, g = i.type, c = o[t], I = c != null && -8196 + 2049 * 4 == (-761 * 8 + -4407 + -3499 * -3 & c.__u);
  if (c === null && a == null || I && a == c.key && g == c.type) return t;
  if (e > (I ? -1 * -4011 + 5931 + -9941 : -2 * -449 + -1399 * 1 + 501)) {
    for (A = t - 1, n = t + (699 * -1 + 1613 * -5 + 8765); A >= -6988 + -1 * -6338 + 650 || n < o.length; ) if ((c = o[r = A >= 402 * -3 + 329 + 877 ? A-- : n++]) != null && -1383 * -3 + -169 + -3980 == (-6227 + -1 * 5301 + -2306 * -5 & c.__u) && a == c.key && g == c.type) return r;
  }
  return -1;
}
function la(i, o, t) {
  o[-2429 * -3 + -981 + -6306] == "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || Xc.test(o) ? t : t + "px";
}
function Io(i, o, t, e, A) {
  var n, r;
  A: if (o == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || la(i.style, o, "");
      if (t)
        for (o in t) e && t[o] == e[o] || la(i.style, o, t[o]);
    }
  else if (o[-4919 + -4919 * -1] == "o" && o[2447 + -4066 * 1 + 1620] == "n") n = o != (o = o.replace(Xg, "$1")), r = o.toLowerCase(), o = r in i || o == "onFocusOut" || o == "onFocusIn" ? r.slice(-1143 * 1 + -4592 + 1 * 5737) : o.slice(2), i.l || (i.l = {}), i.l[o + n] = t, t ? e ? t.u = e.u : (t.u = Or, i.addEventListener(o, n ? Li : Wi, n)) : i.removeEventListener(o, n ? Li : Wi, n);
  else {
    if (A == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[4] != "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -366 * 3 + 3476 + 2377 * -1 == t ? "" : t));
  }
}
function ua(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Or++;
      else if (o.t < t.u) return;
      return t(R.event ? R.event(o) : o);
    }
  };
}
function Ur(i, o, t, e, A, n, r, a, g, c) {
  var I, s, C, x, E, B, l, u, h, p, m, k, D, w, L, _, rA, KA = o.type;
  if (o.constructor != null) return null;
  -7551 + -2 * 2588 + 12855 * 1 & t.__u && (g = !!(3113 * -1 + -5953 * -1 + -2808 & t.__u), n = [a = o.__e = t.__e]), (I = R.__b) && I(o);
  A: if (typeof KA == "function") try {
    if (u = o.props, h = "prototype" in KA && KA.prototype.render, p = (I = KA.contextType) && e[I.__c], m = I ? p ? p.props.value : I.__ : e, t.__c ? l = (s = o.__c = t.__c).__ = s.__E : (h ? o.__c = s = new KA(u, m) : (o.__c = s = new zA(u, m), s.constructor = KA, s.render = oI), p && p.sub(s), s.state || (s.state = {}), s.__n = e, C = s.__d = !(5749 + -3121 * 2 + 493), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && KA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Be({}, s.__s)), Be(s.__s, KA.getDerivedStateFromProps(u, s.__s))), x = s.props, E = s.state, s.__v = o, C) h && KA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && KA.getDerivedStateFromProps == null && u !== x && s.componentWillReceiveProps != null && s.componentWillReceiveProps(u, m), o.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(-1 * 9613 + 2701 + 6913) === s.shouldComponentUpdate(u, s.__s, m)) {
        for (o.__v != t.__v && (s.props = u, s.state = s.__s, s.__d = !(5994 + 11 * 641 + -13044)), o.__e = t.__e, o.__k = t.__k, o.__k.some(function(Ge) {
          Ge && (Ge.__ = o);
        }), k = -1 * -2659 + 1708 + -4367; k < s._sb.length; k++) s.__h.push(s._sb[k]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(u, s.__s, m), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(x, E, B);
      });
    }
    if (s.context = m, s.props = u, s.__P = i, s.__e = !1, D = R.__r, w = 0, h) {
      for (s.state = s.__s, s.__d = !(-5590 + 4 * 1903 + -1 * 2021), D && D(o), I = s.render(s.props, s.state, s.context), L = 0; L < s._sb.length; L++) s.__h.push(s._sb[L]);
      s._sb = [];
    } else do
      s.__d = !(-431 * -5 + 959 * 10 + 367 * -32), D && D(o), I = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++w < -6478 + 408 * 18 + -1 * 841);
    s.state = s.__s, s.getChildContext != null && (e = Be(Be({}, e), s.getChildContext())), h && !C && s.getSnapshotBeforeUpdate != null && (B = s.getSnapshotBeforeUpdate(x, E)), _ = I, I != null && I.type === HA && I.key == null && (_ = i0(I.props.children)), a = t0(i, io(_) ? _ : [_], o, t, e, A, n, r, a, g, c), s.base = o.__e, o.__u &= -161, s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (Ge) {
    if (o.__v = null, g || n != null)
      if (Ge.then) {
        for (o.__u |= g ? 6 * -551 + 583 + 2883 : -1281 * -5 + -5153 + 2 * -562; a && -10897 + 727 * 15 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        n[n.indexOf(a)] = null, o.__e = a;
      } else {
        for (rA = n.length; rA--; ) Jr(n[rA]);
        Ji(o);
      }
    else o.__e = t.__e, o.__k = t.__k, Ge.then || Ji(o);
    R.__e(Ge, o, t);
  }
  else n == null && o.__v == t.__v ? (o.__k = t.__k, o.__e = t.__e) : a = o.__e = tI(t.__e, o, t, e, A, n, r, g, c);
  return (I = R.diffed) && I(o), 6519 + -2 * -3896 + -1091 * 13 & o.__u ? void 0 : a;
}
function Ji(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(Ji);
}
function n0(i, o, t) {
  for (var e = -2 * -1893 + 4402 + -8188; e < t.length; e++) Yr(t[e], t[++e], t[++e]);
  R.__c && R.__c(o, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(n) {
        n.call(A);
      });
    } catch (n) {
      R.__e(n, A.__v);
    }
  });
}
function i0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 0 ? i : io(i) ? i.map(i0) : Be({}, i);
}
function tI(i, o, t, e, A, n, r, a, g) {
  var c, I, s, C, x, E, B, l = t.props || eo, u = o.props, h = o.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 1634 + 1 * -7669 + 1207 * 5; c < n.length; c++) if ((x = n[c]) && "setAttribute" in x == !!h && (h ? x.localName == h : 5 * 647 + 7712 * 1 + -10944 == x.nodeType)) {
      i = x, n[c] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(u);
    i = document.createElementNS(A, h, u.is && u), a && (R.__m && R.__m(o, n), a = !1), n = null;
  }
  if (h == null) l === u || a && i.data == u || (i.data = u);
  else {
    if (n = n && no.call(i.childNodes), !a && n != null)
      for (l = {}, c = 3906 * 1 + 18 * -417 + 3600; c < i.attributes.length; c++) l[(x = i.attributes[c]).name] = x.value;
    for (c in l) if (x = l[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") s = x;
      else if (!(c in u)) {
        if (c == "value" && "defaultValue" in u || c == "checked" && "defaultChecked" in u) continue;
        Io(i, c, null, x, A);
      }
    }
    for (c in u) x = u[c], c == "children" ? C = x : c == "dangerouslySetInnerHTML" ? I = x : c == "value" ? E = x : c == "checked" ? B = x : a && typeof x != "function" || l[c] === x || Io(i, c, x, l[c], A);
    if (I) a || s && (I.__html == s.__html || I.__html == i.innerHTML) || (i.innerHTML = I.__html), o.__k = [];
    else if (s && (i.innerHTML = ""), t0(o.type == "template" ? i.content : i, io(C) ? C : [C], o, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, r, n ? n[-348 * -14 + -8257 * -1 + 13129 * -1] : t.__k && yt(t, -1657 * -1 + 5819 + -7476), a, g), n != null)
      for (c = n.length; c--; ) Jr(n[c]);
    a || (c = "value", h == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[c] || h == "progress" && !E || h == "option" && E != l[c]) && Io(i, c, E, l[c], A), c = "checked", B != null && B != i[c] && Io(i, c, B, l[c], A));
  }
  return i;
}
function Yr(i, o, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && o == null || (i.__u = i(o));
    } else i.current = o;
  } catch (A) {
    R.__e(A, t);
  }
}
function r0(i, o, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Yr(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      R.__e(n, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -238 + 1 * -2576 + 2 * 1407; A < e.length; A++) e[A] && r0(e[A], o, t || typeof i.type != "function");
  t || Jr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function oI(i, o, t) {
  return this.constructor(i, t);
}
function Te(i, o, t) {
  var e, A, n, r;
  o == document && (o = document.documentElement), R.__ && R.__(i, o), A = (e = typeof t == "function") ? null : t && t.__k || o.__k, n = [], r = [], Ur(o, i = (!e && t || o).__k = GA(HA, null, [i]), A || eo, eo, o.namespaceURI, !e && t ? [t] : A ? null : o.firstChild ? no.call(o.childNodes) : null, n, !e && t ? t : A ? A.__e : o.firstChild, e, r), n0(n, i, r);
}
function Tr(i, o) {
  Te(i, o, Tr);
}
function Pr(i, o, t) {
  var e, A, n, r, a = Be({}, i.props);
  for (n in i.type && i.type.defaultProps && (r = i.type.defaultProps), o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : a[n] = o[n] === void 0 && r != null ? r[n] : o[n];
  return arguments.length > 11343 + 11341 * -1 && (a.children = arguments.length > 4375 + 4778 * -2 + -324 * -16 ? no.call(arguments, -731 + 733 * 1) : t), Zt(i.type, a, e || i.key, A || i.ref, null);
}
function Se(i) {
  function o(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[o.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value != n.value && e.forEach(function(r) {
        r.__e = !0, Oi(r);
      });
    }, this.sub = function(n) {
      e.add(n);
      var r = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        e && e.delete(n), r && r.call(n);
      };
    }), t.children;
  }
  return o.__c = "__cC" + $g++, o.__ = i, o.Provider = o.__l = (o.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = o, o;
}
no = A0.slice, R = { __e: function(i, o, t, e) {
  for (var A, n, r; o = o.__; ) if ((A = o.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, qg = 0, Vg = function(i) {
  return i != null && i.constructor == null;
}, zA.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Be({}, this.state), typeof i == "function" && (i = i(Be({}, t), this.props)), i && Be(t, i), i != null && this.__v && (o && this._sb.push(o), Oi(this));
}, zA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Oi(this));
}, zA.prototype.render = HA, At = [], Zg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zg = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, Xo.__r = 14 * -675 + 5672 + 3778, Xg = /(PointerCapture)$|Capture$/i, Or = -6991 + 6991 * 1, Wi = ua(!1), Li = ua(!0), $g = 595 * 6 + 2573 + -6143;
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, $o.apply(this, arguments);
}
function a0(i, o) {
  if (i == null) return {};
  var t, e, A = {}, n = Object.keys(i);
  for (e = -7619 + 401 * 19; e < n.length; e++) o.indexOf(t = n[e]) >= 1 * 9893 + 1 * 2649 + -12542 || (A[t] = i[t]);
  return A;
}
var nI = ["context", "children"], iI = ["useFragment"];
function rI(i, o, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = i, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    gI.call(this, e);
  }, A.prototype.attributeChangedCallback = sI, A.prototype.disconnectedCallback = cI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom ? this._vdom.props[n] : this._props[n];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(n, null, r) : (this._props || (this._props = {}), this._props[n] = r);
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, r);
    } });
  }), customElements.define(o, A), A;
}
function aI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = a0(i, nI);
  return Pr(o, t);
}
function gI(i) {
  var o = {};
  o.detail = {}, o.bubbles = !0, o.cancelable = !0;
  var t = new CustomEvent("_preact", o);
  this.dispatchEvent(t), this._vdom = GA(aI, $o({}, this._props, { context: t.detail.context }), s0(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Tr : Te)(this._vdom, this._root);
}
function g0(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function sI(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[g0(i)] = t, this._vdom = Pr(this._vdom, e), Te(this._vdom, this._root);
  }
}
function cI() {
  Te(this._vdom = null, this._root);
}
function fa(i, o) {
  var t = this, e = i.useFragment, A = a0(i, iI);
  return GA(e ? HA : "slot", $o({}, A, { ref: function(n) {
    n ? (t.ref = n, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = o;
    }, n.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function s0(i, o, t) {
  if (-1 * 7341 + 751 * -11 + -1 * -15605 === i.nodeType) return i.data;
  if (1 * -850 + -1902 + 2753 !== i.nodeType) return null;
  var e = [], A = {}, n = 0, r = i.attributes, a = i.childNodes;
  for (n = r.length; n--; ) r[n].name !== "slot" && (A[r[n].name] = r[n].value, A[g0(r[n].name)] = r[n].value);
  for (n = a.length; n--; ) {
    var g = s0(a[n], null, t), c = a[n].slot;
    c ? A[c] = GA(fa, { name: c }, g) : e[n] = g;
  }
  var I = !(!t || !t.shadow), s = o ? GA(fa, { useFragment: !I }, e) : e;
  return !I && o && (i.innerHTML = ""), GA(o || i.nodeName.toLowerCase(), A, s);
}
var II = 0;
function b(i, o, t, e, A, n) {
  o || (o = {});
  var r, a, g = o;
  if ("ref" in g)
    for (a in g = {}, o) a == "ref" ? r = o[a] : g[a] = o[a];
  var c = {};
  c.type = i, c.props = g, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__c = null, c.constructor = void 0, c.__v = --II, c.__i = -1, c.__u = 0, c.__source = A, c.__self = n;
  var I = c;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return R.vnode && R.vnode(I), I;
}
class y extends Error {
  cause;
  constructor(o, t) {
    super(o), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(o) {
  }
  static fromCameraError(o) {
    if (this.logError(o), o instanceof y) return o;
    let t;
    switch (o.name) {
      case "OverconstrainedError":
        t = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        t = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        t = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        t = "There is no camera available to you";
        break;
      default:
        t = "An unknown camera error has occurred";
        break;
    }
    return new y(t, o);
  }
  static fromError(o) {
    if (this.logError(o), o instanceof y) return o;
    const t = "An unexpected error has occurred";
    return new y(t);
  }
}
const wo = {};
wo.CONTINUE_DETECTION = "continue-detection", wo.SWITCH_CAMERA = "switch-camera", wo.TOGGLE_MIRROR = "toggle-mirror";
const An = wo, Ui = {};
Ui.FIRST_FRAME = "first-frame", Ui.FIRST_VALID_FRAME = "first-valid-frame";
const bo = Ui, c0 = {};
c0.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Yi = c0;
var I0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(I0 || {}), CI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(CI || {}), BI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(BI || {});
const me = {};
me.DETECTION_CHANGED = "smile-auto-capture:detection-changed", me.CAMERA_PROPS_CHANGED = "smile-auto-capture:camera-props-changed", me.CONTROL = "smile-auto-capture:control", me.INSTRUCTION_CHANGED = "smile-auto-capture:instruction-changed", me.INSTRUCTION_ESCALATED = "smile-auto-capture:instruction-escalated", me.VIDEO_ELEMENT_SIZE = "smile-auto-capture:video-element-size", me.STATE_CHANGED = "smile-auto-capture:state-changed", me.PHASE_CHANGED = "smile-auto-capture:phase-changed";
const Ee = me;
var QI = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(QI || {}), xI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(xI || {});
const ye = {};
ye.CANDIDATE_SELECTION = "candidate_selection", ye.DOCUMENT_CENTERING = "document_centering", ye.DOCUMENT_NOT_PRESENT = "document_not_present", ye.DOCUMENT_TOO_FAR = "document_too_far", ye.SHARPNESS_TOO_LOW = "sharpness_too_low", ye.BRIGHTNESS_TOO_LOW = "brightness_too_low", ye.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ye.HOTSPOTS_PRESENT = "hotspots_present";
const He = ye, Ke = {};
Ke.isPresent = He.DOCUMENT_NOT_PRESENT, Ke.isNotSmall = He.DOCUMENT_TOO_FAR, Ke.isNotOutOfBounds = He.DOCUMENT_CENTERING, Ke.isSharp = He.SHARPNESS_TOO_LOW, Ke.isNotDim = He.BRIGHTNESS_TOO_LOW, Ke.isNotBright = He.BRIGHTNESS_TOO_HIGH, Ke.noHotspots = He.HOTSPOTS_PRESENT;
const lt = {};
lt.LOADING = "loading", lt.ERROR = "error", lt.WAITING = "waiting", lt.RUNNING = "running", lt.COMPLETE = "complete";
const U = lt, C0 = {};
C0.EYE_NOT_PRESENT = "eye_not_present";
const Dt = C0, SA = {};
SA.CANDIDATE_SELECTION = "candidate_selection", SA.FACE_TOO_CLOSE = "face_too_close", SA.FACE_TOO_FAR = "face_too_far", SA.FACE_CENTERING = "face_centering", SA.FACE_NOT_PRESENT = "face_not_present", SA.SHARPNESS_TOO_LOW = "sharpness_too_low", SA.BRIGHTNESS_TOO_LOW = "brightness_too_low", SA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", SA.DEVICE_PITCHED = "device_pitched", SA.LEFT_EYE_NOT_PRESENT = "left_" + Dt.EYE_NOT_PRESENT, SA.RIGHT_EYE_NOT_PRESENT = "right_" + Dt.EYE_NOT_PRESENT, SA.MOUTH_NOT_PRESENT = "mouth_not_present", SA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", SA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const MA = SA, OA = {};
OA.isPresent = MA.FACE_NOT_PRESENT, OA.isNotPitched = MA.DEVICE_PITCHED, OA.isNotSmall = MA.FACE_TOO_FAR, OA.isNotLarge = MA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = MA.FACE_CENTERING, OA.isNotDim = MA.BRIGHTNESS_TOO_LOW, OA.isNotBright = MA.BRIGHTNESS_TOO_HIGH, OA.isSharp = MA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = MA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = MA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = MA.MOUTH_NOT_PRESENT, OA.isMouthScoreNotTooHigh = MA.MOUTH_SCORE_TOO_HIGH, OA.isMouthScoreNotTooLow = MA.MOUTH_SCORE_TOO_LOW;
var EI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(EI || {});
const gA = {};
gA.CANDIDATE_SELECTION = "candidate_selection", gA.FACE_TOO_CLOSE = "face_too_close", gA.FACE_TOO_FAR = "face_too_far", gA.FACE_CENTERING = "face_centering", gA.FACE_NOT_PRESENT = "face_not_present", gA.SHARPNESS_TOO_LOW = "sharpness_too_low", gA.BRIGHTNESS_TOO_LOW = "brightness_too_low", gA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", gA.DEVICE_PITCHED = "device_pitched", gA.LEFT_EYE_NOT_PRESENT = "left_" + Dt.EYE_NOT_PRESENT, gA.RIGHT_EYE_NOT_PRESENT = "right_" + Dt.EYE_NOT_PRESENT, gA.MOUTH_NOT_PRESENT = "mouth_not_present", gA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", gA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", gA.SMILE = "smile", gA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", gA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const sA = gA, WA = {};
WA.isPresent = sA.FACE_NOT_PRESENT, WA.isNotPitched = sA.DEVICE_PITCHED, WA.isNotSmall = sA.FACE_TOO_FAR, WA.isNotLarge = sA.FACE_TOO_CLOSE, WA.isNotOutOfBounds = sA.FACE_CENTERING, WA.isNotDim = sA.BRIGHTNESS_TOO_LOW, WA.isNotBright = sA.BRIGHTNESS_TOO_HIGH, WA.isSharp = sA.SHARPNESS_TOO_LOW, WA.isLeftEyePresent = sA.LEFT_EYE_NOT_PRESENT, WA.isRightEyePresent = sA.RIGHT_EYE_NOT_PRESENT, WA.isMouthPresent = sA.MOUTH_NOT_PRESENT, WA.isMouthStatusNotTooHigh = sA.MOUTH_SCORE_TOO_HIGH, WA.isMouthStatusNotTooLow = sA.MOUTH_SCORE_TOO_LOW;
const ni = WA, ko = {};
ko.NEUTRAL = "NEUTRAL", ko.SMILE = "SMILE", ko.SMILE_MANUAL = "SMILE_MANUAL";
const M = ko, ee = {};
ee.CANDIDATE_SELECTION = "candidate_selection", ee.PALM_CENTERING = "palm_centering", ee.PALM_NOT_PRESENT = "palm_not_present", ee.PALM_TOO_FAR = "palm_too_far", ee.PALM_TOO_CLOSE = "palm_too_close", ee.SHARPNESS_TOO_LOW = "sharpness_too_low", ee.BRIGHTNESS_TOO_LOW = "brightness_too_low", ee.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ee.DEVICE_PITCHED = "device_pitched", ee.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const le = ee, ue = {};
ue.isPresent = le.PALM_NOT_PRESENT, ue.isNotPitched = le.DEVICE_PITCHED, ue.isNotSmall = le.PALM_TOO_FAR, ue.isNotOutOfBounds = le.PALM_CENTERING, ue.isNotDim = le.BRIGHTNESS_TOO_LOW, ue.isNotBright = le.BRIGHTNESS_TOO_HIGH, ue.isSharp = le.SHARPNESS_TOO_LOW, ue.isNotLarge = le.PALM_TOO_CLOSE, ue.isTemplateExtractionQualityHighEnough = le.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Co = {};
Co.TOP_LEFT = "TOP_LEFT", Co.TOP_RIGHT = "TOP_RIGHT", Co.BOTTOM_RIGHT = "BOTTOM_RIGHT", Co.BOTTOM_LEFT = "BOTTOM_LEFT";
const VA = {};
VA.CANDIDATE_SELECTION = "candidate_selection", VA.FACE_TOO_CLOSE = "face_too_close", VA.FACE_TOO_FAR = "face_too_far", VA.FACE_CENTERING = "face_centering", VA.FACE_NOT_PRESENT = "face_not_present", VA.SHARPNESS_TOO_LOW = "sharpness_too_low", VA.BRIGHTNESS_TOO_LOW = "brightness_too_low", VA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", VA.DEVICE_PITCHED = "device_pitched", VA.LEFT_EYE_NOT_PRESENT = "left_" + Dt.EYE_NOT_PRESENT, VA.RIGHT_EYE_NOT_PRESENT = "right_" + Dt.EYE_NOT_PRESENT;
const re = VA, ae = {};
ae.isPresent = re.FACE_NOT_PRESENT, ae.isNotPitched = re.DEVICE_PITCHED, ae.isNotSmall = re.FACE_TOO_FAR, ae.isNotLarge = re.FACE_TOO_CLOSE, ae.isNotOutOfBounds = re.FACE_CENTERING, ae.isNotDim = re.BRIGHTNESS_TOO_LOW, ae.isNotBright = re.BRIGHTNESS_TOO_HIGH, ae.isSharp = re.SHARPNESS_TOO_LOW, ae.isLeftEyePresent = re.LEFT_EYE_NOT_PRESENT, ae.isRightEyePresent = re.RIGHT_EYE_NOT_PRESENT;
var Pe, P, ii, ha, wt = 1715 + 15 * -523 + 6130, B0 = [], H = R, pa = H.__b, ma = H.__r, ya = H.diffed, Da = H.__c, wa = H.unmount, ba = H.__;
function Ft(i, o) {
  H.__h && H.__h(P, i, wt || o), wt = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function iA(i) {
  return wt = -5149 + -515 * -10, _r(E0, i);
}
function _r(i, o, t) {
  var e = Ft(Pe++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : E0(void 0, o), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], c = e.t(g, a);
    g !== c && (e.__N = [c, e.__[2962 * 2 + -7 * 945 + 692]], e.__c.setState({}));
  }], e.__c = P, !P.__f)) {
    var A = function(a, g, c) {
      if (!e.__c.__H) return !0;
      var I = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (I.every(function(C) {
        return !C.__N;
      })) return !n || n.call(this, a, g, c);
      var s = e.__c.props !== a;
      return I.forEach(function(C) {
        if (C.__N) {
          var x = C.__[0];
          C.__ = C.__N, C.__N = void 0, x !== C.__[0] && (s = !0);
        }
      }), n && n.call(this, a, g, c) || s;
    };
    P.__f = !0;
    var n = P.shouldComponentUpdate, r = P.componentWillUpdate;
    P.componentWillUpdate = function(a, g, c) {
      if (this.__e) {
        var I = n;
        n = void 0, A(a, g, c), n = I;
      }
      r && r.call(this, a, g, c);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function z(i, o) {
  var t = Ft(Pe++, 3);
  !H.__s && Hr(t.__H, o) && (t.__ = i, t.u = o, P.__H.__h.push(t));
}
function Mt(i, o) {
  var t = Ft(Pe++, 4);
  !H.__s && Hr(t.__H, o) && (t.__ = i, t.u = o, P.__h.push(t));
}
function NA(i) {
  return wt = 5, dA(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function Q0(i, o, t) {
  wt = 1 * 4752 + 6440 + -11186, Mt(function() {
    if (typeof i == "function") {
      var e = i(o());
      return function() {
        i(null), e && typeof e == "function" && e();
      };
    }
    if (i) return i.current = o(), function() {
      return i.current = null;
    };
  }, t == null ? t : t.concat(i));
}
function dA(i, o) {
  var t = Ft(Pe++, 7);
  return Hr(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function xe(i, o) {
  return wt = -6193 + 9502 * 1 + -3301 * 1, dA(function() {
    return i;
  }, o);
}
function ne(i) {
  var o = P.context[i.__c], t = Ft(Pe++, 9);
  return t.c = i, o ? (t.__ == null && (t.__ = !0, o.sub(P)), o.props.value) : i.__;
}
function en(i, o) {
  H.useDebugValue && H.useDebugValue(o ? o(i) : i);
}
function x0() {
  var i = Ft(Pe++, 11);
  if (!i.__) {
    for (var o = P.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [7566 + 2140 * -4 + 994, 1727 * -5 + -9 * 943 + 17122]);
    i.__ = "P" + t[5167 + 1493 * -1 + 1 * -3674] + "-" + t[-1087 * -2 + -6257 + 4 * 1021]++;
  }
  return i.__;
}
function dI() {
  for (var i; i = B0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(So), i.__H.__h.forEach(Ti), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], H.__e(o, i.__v);
  }
}
H.__b = function(i) {
  P = null, pa && pa(i);
}, H.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), ba && ba(i, o);
}, H.__r = function(i) {
  ma && ma(i), Pe = -3081 * 2 + -1 * 1671 + 7833;
  var o = (P = i.__c).__H;
  o && (ii === P ? (o.__h = [], P.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (o.__h.forEach(So), o.__h.forEach(Ti), o.__h = [], Pe = 9907 + 363 * 27 + -52 * 379)), ii = P;
}, H.diffed = function(i) {
  ya && ya(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (-5090 * 1 + 6162 + -1071 !== B0.push(o) && ha === H.requestAnimationFrame || ((ha = H.requestAnimationFrame) || lI)(dI)), o.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), ii = P = null;
}, H.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(So), t.__h = t.__h.filter(function(e) {
        return !e.__ || Ti(e);
      });
    } catch (e) {
      o.some(function(A) {
        A.__h && (A.__h = []);
      }), o = [], H.__e(e, t.__v);
    }
  }), Da && Da(i, o);
}, H.unmount = function(i) {
  wa && wa(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      So(e);
    } catch (A) {
      o = A;
    }
  }), t.__H = void 0, o && H.__e(o, t.__v));
};
var ka = typeof requestAnimationFrame == "function";
function lI(i) {
  var o, t = function() {
    clearTimeout(e), ka && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 35);
  ka && (o = requestAnimationFrame(t));
}
function So(i) {
  var o = P, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), P = o;
}
function Ti(i) {
  var o = P;
  i.__c = i.__(), P = o;
}
function Hr(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function E0(i, o) {
  return typeof o == "function" ? o(i) : o;
}
const Yn = Se(void 0);
Yn.displayName = "AppStateContext";
function RA() {
  const i = ne(Yn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class uI extends zA {
  static contextType = Yn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const o = new y("An unknown error has occurred");
    this.context?.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === U.ERROR ? null : this.props.children;
  }
}
function d0(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Pi(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !0;
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !0;
  return !1;
}
function l0(i, o) {
  var t = o(), e = iA({ t: { __: t, u: o } }), A = e[5050 + 4 * -394 + -3 * 1158].t, n = e[1 * 659 + 4465 + -5123];
  return Mt(function() {
    A.__ = t, A.u = o, ri(A) && n({ t: A });
  }, [i, t, o]), z(function() {
    return ri(A) && n({ t: A }), i(function() {
      ri(A) && n({ t: A });
    });
  }, [i]), t;
}
function ri(i) {
  var o, t, e = i.u, A = i.__;
  try {
    var n = e();
    return !((o = A) === (t = n) && (6602 + -1 * 6602 !== o || (-1753 + 1 * 1754) / o == (-1 * -3439 + 1 * -8369 + 4931) / t) || o != o && t != t);
  } catch {
    return !0;
  }
}
function u0(i) {
  i();
}
function f0(i) {
  return i;
}
function h0() {
  return [!1, u0];
}
var p0 = Mt;
function _i(i, o) {
  this.props = i, this.context = o;
}
function fI(i, o) {
  function t(A) {
    var n = this.props.ref, r = n == A.ref;
    return !r && n && (n.call ? n(null) : n.current = null), o ? !o(this.props, A) || !r : Pi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, GA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(_i.prototype = new zA()).isPureReactComponent = !0, _i.prototype.shouldComponentUpdate = function(i, o) {
  return Pi(this.props, i) || Pi(this.state, o);
};
var Sa = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Sa && Sa(i);
};
var hI = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 1 * -4084 + -2 * -3467 + 1061;
function Kr(i) {
  function o(t) {
    var e = d0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = hI, o.render = i, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var Ga = function(i, o) {
  return i == null ? null : be(be(i).map(o));
}, pI = { map: Ga, forEach: Ga, count: function(i) {
  return i ? be(i).length : -15 * 505 + -1365 + 6 * 1490;
}, only: function(i) {
  var o = be(i);
  if (-1 * -3351 + -6960 + 3610 !== o.length) throw "Children.only";
  return o[2 * 809 + 2216 + -3834];
}, toArray: be }, mI = R.__e;
R.__e = function(i, o, t, e) {
  if (i.then) {
    for (var A, n = o; n = n.__; ) if ((A = n.__c) && A.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), A.__c(i, o);
  }
  mI(i, o, t, e);
};
var Na = R.unmount;
function m0(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = d0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return m0(e, o, t);
  })), i;
}
function y0(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return y0(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Go() {
  this.__u = 3 * 1151 + 1559 + -5012, this.o = null, this.__b = null;
}
function D0(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function yI(i) {
  var o, t, e, A = null;
  function n(r) {
    if (o || (o = i()).then(function(a) {
      a && (A = a.default || a), e = !0;
    }, function(a) {
      t = a, e = !0;
    }), t) throw t;
    if (!e) throw o;
    return A ? GA(A, r) : null;
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function _t() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && 2 * 4594 + -2 * 2417 + -4322 & i.__u && (i.type = null), Na && Na(i);
}, (Go.prototype = new zA()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = D0(e.__v), n = !1, r = function() {
    n || (n = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[-16 * 401 + 1 * 7317 + -901] = y0(g, g.__c.__P, g.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.o.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 1301 * -1 + -262 * 5 + -3 * -881 & o.__u || e.setState({ __a: e.__b = e.__v.__k[7863 + -3 * 2621] }), i.then(r, r);
}, Go.prototype.componentWillUnmount = function() {
  this.o = [];
}, Go.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[6022 * 1 + -494 + -5528].__c;
      this.__v.__k[-3485 + -19 * 377 + 5324 * 2] = m0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = o.__a && GA(HA, null, i.fallback);
  return A && (A.__u &= -33), [GA(HA, null, o.__a ? null : i.children), A];
};
var Ra = function(i, o, t) {
  if (++t[-1 * 8239 + -1 * 4813 + 13053] === t[9073 * -1 + -271 * -35 + -412] && i.l.delete(o), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 2367 * -2 + 3658 + 1079; ) t.pop()();
    if (t[409 * -13 + -7358 + -1 * -12676] < t[0]) break;
    i.i = t = t[2];
  }
};
function DI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function wI(i) {
  var o = this, t = i.h;
  if (o.componentWillUnmount = function() {
    Te(null, o.v), o.v = null, o.h = null;
  }, o.h && o.h !== t && o.componentWillUnmount(), !o.v) {
    for (var e = o.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, o.h = t, o.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), o.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, -4237 + -13 * -326), o.h.removeChild(r);
    } };
  }
  var n = {};
  n.context = o.context, Te(GA(DI, n, i.__v), o.v);
}
function bI(i, o) {
  var t = {};
  t.__v = i, t.h = o;
  var e = GA(wI, t);
  return e.containerInfo = o, e;
}
(_t.prototype = new zA()).__a = function(i) {
  var o = this, t = D0(o.__v), e = o.l.get(i);
  return e[278 * -7 + 8162 + -6216]++, function(A) {
    var n = function() {
      o.props.revealOrder ? (e.push(A), Ra(o, i, e)) : A();
    };
    t ? t(n) : n();
  };
}, _t.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var o = be(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.l.set(o[t], this.i = [-7868 + -1 * -1942 + -5927 * -1, -3129 * -1 + 2397 + -5526, this.i]);
  return i.children;
}, _t.prototype.componentDidUpdate = _t.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(o, t) {
    Ra(i, t, o);
  });
};
var w0 = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, kI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, SI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, GI = /[A-Z0-9]/g, NI = typeof document < "u", RI = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function vI(i, o, t) {
  return o.__k == null && (o.textContent = ""), Te(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function FI(i, o, t) {
  return Tr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
zA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(zA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = o, Object.defineProperty(this, i, t);
  } });
});
var va = R.event;
function MI() {
}
function WI() {
  return this.cancelBubble;
}
function LI() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return va && (i = va(i)), i.persist = MI, i.isPropagationStopped = WI, i.isDefaultPrevented = LI, i.nativeEvent = i;
};
var No = {};
No.enumerable = !1, No.configurable = !0, No.get = function() {
  return this.class;
};
var jr, OI = No, Fa = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(o) {
    var t = o.props, e = o.type, A = {}, n = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || NI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[0] === "o" && g[-806 * 11 + 8 * -661 + 14155] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || RI(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : SI.test(r) && (r = g) : g = r = "oninput" : n && kI.test(r) ? r = r.replace(GI, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = be(t.children).forEach(function(c) {
      c.props.selected = A.value.indexOf(c.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = be(t.children).forEach(function(c) {
      c.props.selected = A.multiple ? A.defaultValue.indexOf(c.props.value) != -1 : A.defaultValue == c.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", OI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), o.props = A;
  })(i), i.$$typeof = w0, Fa && Fa(i);
};
var Ma = R.__r;
R.__r = function(i) {
  Ma && Ma(i), jr = i.__c;
};
var Wa = R.diffed;
R.diffed = function(i) {
  Wa && Wa(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), jr = null;
};
var uA = {};
uA.readContext = function(i) {
  return jr.__n[i.__c].props.value;
}, uA.useCallback = xe, uA.useContext = ne, uA.useDebugValue = en, uA.useDeferredValue = f0, uA.useEffect = z, uA.useId = x0, uA.useImperativeHandle = Q0, uA.useInsertionEffect = p0, uA.useLayoutEffect = Mt, uA.useMemo = dA, uA.useReducer = _r, uA.useRef = NA, uA.useState = iA, uA.useSyncExternalStore = l0, uA.useTransition = h0;
var b0 = {};
b0.current = uA;
var k0 = {};
k0.ReactCurrentDispatcher = b0;
var JI = k0;
function UI(i) {
  return GA.bind(null, i);
}
function Tn(i) {
  return !!i && i.$$typeof === w0;
}
function YI(i) {
  return Tn(i) && i.type === HA;
}
function TI(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function PI(i) {
  return Tn(i) ? Pr.apply(null, arguments) : i;
}
function _I(i) {
  return !!i.__k && (Te(null, i), !0);
}
function HI(i) {
  return i && (i.base || -7073 + 7 * 755 + 1789 === i.nodeType && i) || null;
}
var KI = function(i, o) {
  return i(o);
}, jI = function(i, o) {
  return i(o);
}, qI = HA, VI = Tn, rt = { useState: iA, useId: x0, useReducer: _r, useEffect: z, useLayoutEffect: Mt, useInsertionEffect: p0, useTransition: h0, useDeferredValue: f0, useSyncExternalStore: l0, startTransition: u0, useRef: NA, useImperativeHandle: Q0, useMemo: dA, useCallback: xe, useContext: ne, useDebugValue: en, version: "18.3.1", Children: pI, render: vI, hydrate: FI, unmountComponentAtNode: _I, createPortal: bI, createElement: GA, createContext: Se, createFactory: UI, cloneElement: PI, createRef: $c, Fragment: HA, isValidElement: Tn, isElement: VI, isFragment: YI, isMemo: TI, findDOMNode: HI, Component: zA, PureComponent: _i, memo: fI, forwardRef: Kr, flushSync: jI, unstable_batchedUpdates: KI, StrictMode: qI, Suspense: Go, SuspenseList: _t, lazy: yI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: JI };
(function(i, o) {
  function t(a, g, c, I, s) {
    return cA(c - -942, g);
  }
  const e = i();
  function A(a, g, c, I, s) {
    return cA(a - 673, c);
  }
  function n(a, g, c, I, s) {
    return cA(a - 303, I);
  }
  function r(a, g, c, I, s) {
    return cA(g - -431, s);
  }
  for (; ; )
    try {
      if (-parseInt(A(1167, 1162, "2uio", 1160, 1148)) / 1 + -parseInt(A(1169, 1159, "T[(r", 1161, 1176)) / 2 + -parseInt(A(1191, 1173, "@89R", 1180, 1191)) / 3 * (parseInt(n(822, 833, 825, "[wy1", 818)) / 4) + parseInt(n(803, 785, 810, "pgEQ", 802)) / 5 * (parseInt(t(-462, "ZhBe", -447, -429, -465)) / 6) + -parseInt(r(44, 56, 67, 49, "m@)o")) / 7 * (parseInt(t(-448, "!V9t", -431, -449, -438)) / 8) + parseInt(t(-438, "ROS2", -433, -424, -414)) / 9 + -parseInt(t(-457, "GrdD", -444, -452, -432)) / 10 * (-parseInt(n(816, 815, 818, "tO6j", 832)) / 11) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, -56267 + -31 * -6655 + 58671);
function ZI(i, o, t, e, A) {
  return cA(e - -9, t);
}
function tn(i, o, t, e, A) {
  return cA(i - -239, t);
}
function on() {
  const i = ["W61uW5moW6CqE8omrZrxCW", "WPJcVXBcNCobgmoVW6ix", "W5ldOHRdL8oFWPKEBmkwgG", "WQhdM8kIWRStu3XPE8kZ", "hCkLatW", "W6jkWOdcLse", "BCkBWPfAW4urnNFcV0a", "WQVcRxj3WP85ECkyW7xdGbTV", "WQGpWOFdO8oB", "W5FcImkeW6BcPG", "c8kiaSkphLmLW7DFhCoDu1q", "WPb3ecVdNa", "WQvnh8kIrmkaW7Kc", "C8oYnSodewDaWRNdIa", "WQCsW7/cGmoBrCoyWQmjW5fFea", "W7BcOuZcPwnsW4BdGmoCWO0", "q8kqxmkTFX1cWPpcQ0hdS24", "jSkiWRddG2C", "WPO1emoNW5FcM1X1FSkXW7dcOW", "kSkMw8kMWPq2WP0TW6/cPc5u", "W6GWjSksetFdTCkzva", "WOpdMCkrWQWIW5BdKSk8wcdcOKy", "W5xdPH7cU8ojWRiEAmkX", "quSdFvLaErm8", "W6bwWQdcHYK", "pWNdRwuCW73dIJeRWOdcOeu", "WRJdUwOoW4C", "WOL2FmklgG", "nItcO8kpW7C", "WRvCwNlcJa5XpL7cPmo5WPJcGq", "W4TQv8kVWOO", "DSo2w8oTguHGWRW", "jCkPgI3dGG", "W4SZqsFdTNlcPb4c", "ab55D3m", "FGFcKG", "lfZcRYbA"];
  return on = function() {
    return i;
  }, on();
}
function zI(i, o, t, e, A) {
  return cA(e - 838, A);
}
function cA(i, o) {
  i = i - 484;
  const t = on();
  let e = t[i];
  if (cA.ZkLmve === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    cA.VsQoLs = g, cA.fEaNvH = {}, cA.ZkLmve = !0;
  }
  const n = t[-5591 * -1 + 1 * -7781 + 2190 * 1], r = i + n, a = cA.fEaNvH[r];
  return a ? e = a : (cA.OwSVJa === void 0 && (cA.OwSVJa = !0), e = cA.VsQoLs(e, o), cA.fEaNvH[r] = e), e;
}
function XI(i, o, t, e, A) {
  return cA(A - -38, e);
}
function Hi(i, o, t, e, A) {
  return cA(o - -836, t);
}
const nn = Se(void 0);
nn[Hi(-341, -339, "dKk)") + tn(250, 260, "dy58") + "e"] = tn(273, 256, "g6[e") + Hi(-330, -322, "7&Fs") + XI(453, 461, 464, "g6[e", 446);
function Pn() {
  function i(r, a, g, c, I) {
    return Hi(r - 40, I - 819, c);
  }
  function o(r, a, g, c, I) {
    return zI(r - 306, a - 44, g - 308, r - -647, g);
  }
  function t(r, a, g, c, I) {
    return tn(I - -422, a - 75, r);
  }
  function e(r, a, g, c, I) {
    return tn(g - -100, a - 258, r);
  }
  const A = ne(nn);
  if (A === void 0) throw new Error(nn[i(478, 498, 488, "GrdD", 493) + i(457, 461, 469, "rikI", 468) + "e"] + (o(707, 718, "6If]") + e("P00K", 169, 169) + n(572, 580, "%UNp") + e("tO6j", 140, 152) + o(697, 680, "m@)o") + i(476, 496, 504, "rikI", 487) + t("pgEQ", -165, -147, -152, -154) + i(513, 495, 500, "BII)", 498)));
  function n(r, a, g, c, I) {
    return ZI(r - 129, a - 230, g, a - 101);
  }
  return A;
}
const rn = Se(void 0);
rn.displayName = "AnalyticsContext";
function $I() {
  const i = ne(rn);
  if (i === void 0)
    throw new Error(`${rn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var AC = /* @__PURE__ */ Symbol.for("preact-signals");
function _n() {
  if (Ye > -8520 + -1 * -8521)
    Ye--;
  else {
    for (var i, o = !1; zt !== void 0; ) {
      var t = zt;
      for (zt = void 0, Ki++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && N0(t)) try {
          t.c();
        } catch (A) {
          !o && (i = A, o = !0);
        }
        t = e;
      }
    }
    if (Ki = 3 * -1077 + 9323 + -4 * 1523, Ye--, o) throw i;
  }
}
function eC(i) {
  if (Ye > 0) return i();
  Ye++;
  try {
    return i();
  } finally {
    _n();
  }
}
var J = void 0;
function La(i) {
  var o = J;
  J = void 0;
  try {
    return i();
  } finally {
    J = o;
  }
}
var zt = void 0, Ye = -8042 * 1 + 7 * 337 + 1 * 5683, Ki = 757 * -13 + -5844 + 15685, an = 0;
function S0(i) {
  if (J !== void 0) {
    var o = i.n;
    if (o === void 0 || o.t !== J)
      return o = { i: 0, S: i, p: J.s, n: void 0, t: J, e: void 0, x: void 0, r: o }, J.s !== void 0 && (J.s.n = o), J.s = o, i.n = o, -4 * 1294 + 6386 * -1 + 11594 & J.f && i.S(o), o;
    if (o.i === -1)
      return o.i = 0, o.n !== void 0 && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = J.s, o.n = void 0, J.s.n = o, J.s = o), o;
  }
}
function fA(i, o) {
  this.v = i, this.i = 1768 + -4678 * 1 + 2910, this.n = void 0, this.t = void 0, this.W = o?.watched, this.Z = o?.unwatched, this.name = o?.name;
}
fA.prototype.brand = AC, fA.prototype.h = function() {
  return !0;
}, fA.prototype.S = function(i) {
  var o = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : La(function() {
    var e;
    (e = o.W) == null || e.call(o);
  }));
}, fA.prototype.U = function(i) {
  var o = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && La(function() {
      var A;
      (A = o.Z) == null || A.call(o);
    }));
  }
}, fA.prototype.subscribe = function(i) {
  var o = this, t = {};
  return t.name = "sub", ro(function() {
    var e = o.value, A = J;
    J = void 0;
    try {
      i(e);
    } finally {
      J = A;
    }
  }, t);
}, fA.prototype.valueOf = function() {
  return this.value;
}, fA.prototype.toString = function() {
  return this.value + "";
}, fA.prototype.toJSON = function() {
  return this.value;
}, fA.prototype.peek = function() {
  var i = J;
  J = void 0;
  try {
    return this.value;
  } finally {
    J = i;
  }
}, Object.defineProperty(fA.prototype, "value", { get: function() {
  var i = S0(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Ki > -9757 + -1740 * 4 + 16817) throw new Error("Cycle detected");
    this.v = i, this.i++, an++, Ye++;
    try {
      for (var o = this.t; void (3 * -2222 + 1 * -9733 + 529 * 31) !== o; o = o.x) o.t.N();
    } finally {
      _n();
    }
  }
} });
function G0(i, o) {
  return new fA(i, o);
}
function N0(i) {
  for (var o = i.s; o !== void 0; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !0;
  return !1;
}
function R0(i) {
  for (var o = i.s; o !== void 0; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -1, o.n === void 0) {
      i.s = o;
      break;
    }
  }
}
function v0(i) {
  for (var o = i.s, t = void 0; o !== void 0; ) {
    var e = o.p;
    o.i === -1 ? (o.S.U(o), e !== void 0 && (e.n = o.n), o.n !== void 0 && (o.n.p = e)) : t = o, o.S.n = o.r, o.r !== void 0 && (o.r = void 0), o = e;
  }
  i.s = t;
}
function Ve(i, o) {
  fA.call(this, void 0), this.x = i, this.s = void 0, this.g = an - (-2736 + -2737 * -1), this.f = 6791 * 1 + 3107 + -9894, this.W = o?.watched, this.Z = o?.unwatched, this.name = o?.name;
}
Ve.prototype = new fA(), Ve.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if (-7002 + -2741 * 2 + 12516 == (-2 * 3946 + 2683 + 5245 & this.f) || (this.f &= -5, this.g === an)) return !0;
  if (this.g = an, this.f |= 1, this.i > 4625 + 925 * -5 && !N0(this)) return this.f &= -2, !0;
  var i = J;
  try {
    R0(this), J = this;
    var o = this.x();
    (-2116 + -4 * -533 & this.f || this.v !== o || 3 * -705 + 1 * -2799 + 4914 === this.i) && (this.v = o, this.f &= -(2843 * 3 + -2 * 4889 + 1 * 1266), this.i++);
  } catch (t) {
    this.v = t, this.f |= -617 + -6 * -1451 + -8073, this.i++;
  }
  return J = i, v0(this), this.f &= -2, !0;
}, Ve.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 2599 * -3 + -8544 + 16377;
    for (var o = this.s; o !== void 0; o = o.n) o.S.S(o);
  }
  fA.prototype.S.call(this, i);
}, Ve.prototype.U = function(i) {
  if (this.t !== void 0 && (fA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var o = this.s; o !== void 0; o = o.n) o.S.U(o);
  }
}, Ve.prototype.N = function() {
  if (!(-6 * 442 + -5428 + -9 * -898 & this.f)) {
    this.f |= -363 * -3 + 2 * 1814 + -4711;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Ve.prototype, "value", { get: function() {
  if (6434 + 1 * -6433 & this.f) throw new Error("Cycle detected");
  var i = S0(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -1 * -4685 + -628 + -4041 & this.f) throw this.v;
  return this.v;
} });
function Oa(i, o) {
  return new Ve(i, o);
}
function F0(i) {
  var o = i.u;
  if (i.u = void 0, typeof o == "function") {
    Ye++;
    var t = J;
    J = void 0;
    try {
      o();
    } catch (e) {
      throw i.f &= -2, i.f |= -1 * -7603 + -6739 + -428 * 2, qr(i), e;
    } finally {
      J = t, _n();
    }
  }
}
function qr(i) {
  for (var o = i.s; o !== void 0; o = o.n) o.S.U(o);
  i.x = void 0, i.s = void 0, F0(i);
}
function tC(i) {
  if (J !== this) throw new Error("Out-of-order effect");
  v0(this), J = i, this.f &= -2, 8 & this.f && qr(this), _n();
}
function ut(i, o) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = -6718 + -1 * 8363 + 15113, this.name = o?.name;
}
ut.prototype.c = function() {
  var i = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, ut.prototype.S = function() {
  if (6192 + 2255 * 4 + -15211 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, F0(this), R0(this), Ye++;
  var i = J;
  return J = this, tC.bind(this, i);
}, ut.prototype.N = function() {
  !(2 & this.f) && (this.f |= -4504 + 1 * 4506, this.o = zt, zt = this);
}, ut.prototype.d = function() {
  this.f |= -9438 + 1059 * -9 + 18977 * 1, 1 & this.f || qr(this);
}, ut.prototype.dispose = function() {
  this.d();
};
function ro(i, o) {
  var t = new ut(i, o);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var M0, ai, Bo = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, W0 = [];
ro(function() {
  M0 = this.N;
})();
function pt(i, o) {
  R[i] = o.bind(null, R[i] || function() {
  });
}
function Qo(i) {
  ai && ai(), ai = i && i.S();
}
function L0(i) {
  var o = this, t = i.data, e = Vr(t);
  e.value = t;
  var A = dA(function() {
    for (var a = o, g = o.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -803 + -3711 * -1 + -2904;
      break;
    }
    var c = Oa(function() {
      var x = e.value.value;
      return 1317 + -3 * 439 === x ? -1 * -8171 + -1391 + -6780 : x === !0 ? "" : x || "";
    }), I = Oa(function() {
      return !Array.isArray(c.value) && !Vg(c.value);
    }), s = ro(function() {
      if (this.N = O0, I.value) {
        var x = c.value;
        a.__v && a.__v.__e && -4123 + -7541 * 1 + -11667 * -1 === a.__v.__e.nodeType && (a.__v.__e.data = x);
      }
    }), C = o.__$u.d;
    return o.__$u.d = function() {
      s(), C.call(this);
    }, [I, c];
  }, []), n = A[5311 + 1101 * 9 + -15220], r = A[6332 + 311 * -1 + -6020];
  return n.value ? r.peek() : r.value;
}
L0.displayName = "ReactiveTextNode";
var ji = {};
ji.configurable = !0, ji.value = void 0;
var qi = {};
qi.configurable = !0, qi.value = L0;
var Vi = {};
Vi.configurable = !0, Vi.get = function() {
  var i = {};
  return i.data = this, i;
};
var Zi = {};
Zi.configurable = !0, Zi.value = 1;
var Yt = {};
Yt.constructor = ji, Yt.type = qi, Yt.props = Vi, Yt.__b = Zi, Object.defineProperties(fA.prototype, Yt), pt("__b", function(i, o) {
  if (Bo && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof o.type == "string") {
    var t, e = o.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof fA && (t || (o.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  i(o);
}), pt("__r", function(i, o) {
  if (Bo && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(o), o.type !== HA) {
    Qo();
    var t, e = o.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var n;
      return ro(function() {
        n = this;
      }), n.c = function() {
        e.__$f |= 4698 + 427 * -11, e.setState({});
      }, n;
    })())), Qo(t);
  }
  i(o);
}), pt("__e", function(i, o, t, e) {
  Bo && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Qo(), i(o, t, e);
}), pt("diffed", function(i, o) {
  Bo && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Qo();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, A = o.props;
    if (e) {
      var n = t.U;
      if (n) for (var r in n) {
        var a = n[r];
        a !== void 0 && !(r in e) && (a.d(), n[r] = void 0);
      }
      else n = {}, t.U = n;
      for (var g in e) {
        var c = n[g], I = e[g];
        c === void 0 ? (c = oC(t, g, I, A), n[g] = c) : c.o(I, A);
      }
    }
  }
  i(o);
});
function oC(i, o, t, e) {
  var A = o in i && i.ownerSVGElement === void 0, n = G0(t);
  return { o: function(r, a) {
    n.value = r, e = a;
  }, d: ro(function() {
    this.N = O0;
    var r = n.value.value;
    e[o] !== r && (e[o] = r, A ? i[o] = r : r != null && (r !== !1 || o[4] === "-") ? i.setAttribute(o, r) : i.removeAttribute(o));
  }) };
}
pt("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
        for (var A in e) {
          var n = e[A];
          n && n.d();
        }
      }
    }
  } else {
    var r = o.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void 0, a.d());
    }
  }
  i(o);
}), pt("__h", function(i, o, t, e) {
  (e < 5872 + 1 * -5869 || e === 9) && (o.__$f |= -80 + 638 * 8 + -5022), i(o, t, e);
}), zA.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in o) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var n = 2 & this.__$f;
    if (!(e || n || 2593 + 1 * -2589 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(e || 4 * -2297 + 1 * -6859 + 16051 * 1 & this.__$f) || 3 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function Vr(i, o) {
  return iA(function() {
    return G0(i, o);
  })[6076 + 868 * -7];
}
var nC = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function iC() {
  eC(function() {
    for (var i; i = W0.shift(); ) M0.call(i);
  });
}
function O0() {
  -2 * -1895 + 2 * -1480 + 829 * -1 === W0.push(this) && (R.requestAnimationFrame || nC)(iC);
}
const Ro = (i) => i.length < 1 ? -319 * 29 + 5195 + 12 * 338 : i.reduce((t, e) => t + e, 7899 + 882 * 2 + -9663) / i.length, Ue = (i) => Number.parseFloat(i.toFixed(-8652 + 1211 * -7 + 17132));
function rC(i) {
  const o = i.getContext("2d");
  o && o.clearRect(-11132 + 1012 * 11, -1 * -8765 + -8416 + -349, o.canvas.width, o.canvas.height);
}
const J0 = 0 + 0.75, aC = 642 + 641 * 7 + -1709 * 3, gC = -1454 * 6 + -7870 + 17194 * 1, sC = "dot-auto-capture-video", Hn = (i, o) => Math.min(i, o), U0 = ({ height: i, width: o }, t) => {
  const e = Hn(o, i) * t, A = (o - e) / (5788 + -526 * 11), n = (i - e) / (-8796 * 1 + 1 * -6913 + 3 * 5237), r = {};
  return r.shiftX = A, r.shiftY = n, r.width = e, r.height = e, r;
}, cC = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = U0(i, o), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = n / i.width, r.height = t / i.height, r;
}, IC = ({ height: i, width: o }) => {
  const t = Hn(o, i), e = t / (-3706 + 3709 * 1) * (6239 * 1 + -4134 + -2101);
  if (o > i) {
    const n = {};
    return n.width = e, n.height = t, n;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function CC(i, o) {
  const t = Hn(o.width, o.height);
  return Ue(i * t);
}
function BC({ height: i, width: o }) {
  const t = {};
  return t.height = i, t.width = o, U0(t, J0);
}
function QC(i) {
  return cC(i, J0);
}
function xC(i, o) {
  return CC(i, o) * aC;
}
const EC = "8.0.4", dC = {
  version: EC
}, lC = 4128 + -3 * 1373 + 0.8100000000000005, zi = {};
zi.max = 100, zi.min = 10;
const Ja = zi, uC = 720, fC = -8705 * 1 + -4951 * -1 + 1318 * 3, hC = 7848 + -4 * 1961, Y0 = "AES-CBC", T0 = "RSA-OAEP", pC = "SHA-256", mC = "image/jpeg", yC = -13678 + 4562 * 3, DC = 1 * 9073 + 8 + -9041, P0 = "/dot-assets", Ua = "dot_embedded_bg.wasm", wC = "c56a4180-65aa-42ec-a945-5fd21dec0538", bC = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], Xi = (i) => new Promise((o) => {
  setTimeout(o, i);
}), _0 = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? Ue(t) : t)), kC = () => dC.version, H0 = (i) => new URL(i).hostname.replace("www.", ""), Zr = () => H0(window.location.href) === "localhost", SC = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function GC(i, o) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, o));
  };
}
function NC(i) {
  return i.at(-1) === "/" ? i.slice(8399 * 1 + -9459 + 4 * 265, -1) : i;
}
function RC(i) {
  return "" + NC(i ?? "") + P0;
}
function vC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Tt(i) {
  return (...o) => {
    Zr() && console[i](...o);
  };
}
const zr = { log: Tt("log"), warn: Tt("warn"), error: Tt("error"), info: Tt("info"), debug: Tt("debug") };
function FC({ analytics: i, crosshatch: o }) {
  if (!Zr())
    return o !== void 0 && i.shouldReportAnalytics(o) ? i : void 0;
}
function MC({ analytics: i, apiKey: o, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = i, n.crosshatch = e;
  const r = FC(n), a = Vr(t);
  return a.value = t, z(() => {
    r && (zr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(o, A.getCustomerName(), a));
  }, [r, A, o, e, a]), r;
}
function WC({
  analytics: i,
  apiKey: o,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Pn(), { redfin: n } = RA(), r = MC({
    analytics: i,
    redfin: n,
    crosshatch: e,
    bramble: A,
    apiKey: o
  }), a = dA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ b(rn.Provider, { value: a, children: t });
}
const $i = {};
$i.SIMD = "simd", $i.NO_SIMD = "no-simd";
const Ya = $i, Ar = {};
Ar.Lower = "Lower", Ar.Higher = "Higher";
const bt = Ar, er = {};
er.MOBILE = "MOBILE", er.DESKTOP = "DESKTOP";
const Ta = er, gn = Se(void 0);
gn.displayName = "TransactionCountingContext";
function K0() {
  const i = ne(gn);
  if (i === void 0)
    throw new Error(`${gn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function LC({ children: i, value: o }) {
  const { crosshatch: t } = Pn(), { transactionCounting: e } = K0(), A = t?.isValid && e?.isTransactionTokenValid ? bt.Higher : bt.Lower, n = dA(
    () => ({
      ...o,
      redfin: A
    }),
    [o, A]
  );
  return /* @__PURE__ */ b(Yn.Provider, { value: n, children: i });
}
let F;
const we = new Array(1 * -2153 + 5434 + -3153).fill(void 0);
we.push(void 0, null, !0, !1);
function tr(i) {
  return we[i];
}
let Qe = -1231 * 1 + -180 + 1411 * 1, Ht = null;
function vo() {
  return (Ht === null || Ht.byteLength === 7510 * -1 + -3006 + 10516) && (Ht = new Uint8Array(F.memory.buffer)), Ht;
}
const Fo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, OC = typeof Fo.encodeInto == "function" ? function(i, o) {
  return Fo.encodeInto(i, o);
} : function(i, o) {
  const t = Fo.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function to(i, o, t) {
  if (t === void 0) {
    const a = Fo.encode(i), g = o(a.length, -259 + -4 * -1744 + -6716) >>> -1990 + -1 * -1741 + 249;
    return vo().subarray(g, g + a.length).set(a), Qe = a.length, g;
  }
  let e = i.length, A = o(e, 2887 * 3 + -3827 + -4833) >>> 9765 + 9765 * -1;
  const n = vo();
  let r = 584 * -1 + -1 * 2245 + 2829;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -1 * 491 + 2060 + -1442) break;
    n[A + r] = a;
  }
  if (r !== e) {
    r !== -7598 + -2 * 3274 + -14146 * -1 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-6073 * -1 + -2523 + -3547), 1) >>> -11912 + -1489 * -8;
    const a = vo().subarray(A + r, A + e), g = OC(i, a);
    r += g.written, A = t(A, e, r, -1 * -6055 + -3143 + -1 * 2911) >>> -14 * -373 + 9973 * -1 + 4751;
  }
  return Qe = r, A;
}
function j0(i) {
  return i == null;
}
let Kt = null;
function Ie() {
  return (Kt === null || Kt.byteLength === 0) && (Kt = new Int32Array(F.memory.buffer)), Kt;
}
let Xt = we.length;
function JC(i) {
  i < 132 || (we[i] = Xt, Xt = i);
}
function q0(i) {
  const o = tr(i);
  return JC(i), o;
}
const or = {};
or.ignoreBOM = !0, or.fatal = !0;
const V0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", or) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && V0.decode();
function sn(i, o) {
  return i = i >>> -2 * 3707 + -2 * 3823 + 15060, V0.decode(vo().subarray(i, i + o));
}
function nr(i) {
  Xt === we.length && we.push(we.length + (1423 * 4 + -7038 + 1347));
  const o = Xt;
  return Xt = we[o], we[o] = i, o;
}
let jt = null;
function Z0() {
  return (jt === null || jt.byteLength === 9119 + -2 * 4621 + 123) && (jt = new Uint32Array(F.memory.buffer)), jt;
}
function Pa(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = Z0();
  for (let A = 0; A < i.length; A++)
    e[t / (1 * -9545 + -7853 + 11 * 1582) + A] = nr(i[A]);
  return Qe = i.length, t;
}
function _a(i, o) {
  i = i >>> 0;
  const t = Z0(), e = t.subarray(i / (8816 + -1 * 8259 + -553), i / (11144 + 5570 * -2) + o), A = [];
  for (let n = -799 + -7 * -853 + 5172 * -1; n < e.length; n++)
    A.push(q0(e[n]));
  return A;
}
function UC(i, o) {
  const t = to(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = Qe, A = to(o, F.__wbindgen_malloc, F.__wbindgen_realloc), n = Qe, r = F.is_mobile_supported(t, e, A, n);
  return Xr.__wrap(r);
}
const ir = {};
ir.register = () => {
}, ir.unregister = () => {
};
const Ha = typeof FinalizationRegistry > "u" ? ir : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> 0));
class Xr {
  static __wrap(o) {
    o = o >>> -773 + 1 * 8291 + -7518;
    const t = Object.create(Xr.prototype);
    return t.__wbg_ptr = o, Ha.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -1 * 5485 + 4862 + -623 * -1, Ha.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, A, n) {
    var r = j0(t) ? 0 : to(t, F.__wbindgen_malloc, F.__wbindgen_realloc), a = Qe;
    const g = Pa(e, F.__wbindgen_malloc), c = Qe, I = Pa(A, F.__wbindgen_malloc), s = Qe, C = to(n, F.__wbindgen_malloc, F.__wbindgen_realloc), x = Qe, E = F.licensevalidationresult_new(o, r, a, g, c, I, s, C, x);
    return this.__wbg_ptr = E >>> 5709 + 1903 * -3, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -1202 + -2 * -3235 + 3 * -1756;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Ie()[e / (1997 * 1 + 3794 + -1929 * 3) + (4881 * -1 + 3637 * -1 + 1 * 8518)], t = Ie()[e / 4 + (-62 + -2680 * -2 + -5297 * 1)];
      let A;
      return o !== 1 * 956 + -1041 + 85 && (A = sn(o, t).slice(), F.__wbindgen_free(o, t * 1, 1 * -7433 + 5365 + 2069)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-6051 * -1 + -421 * -11 + -2 * 5333);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var o = Ie()[A / (-13 * 725 + 3 * 607 + -951 * -8) + (-12 * -745 + -4029 + 1637 * -3)], t = Ie()[A / (-5614 + 6377 * -1 + 11995) + (-836 + 577 * 8 + 3779 * -1)], e = _a(o, t).slice();
      return F.__wbindgen_free(o, t * 4, -1510 + 1 * 1514), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(1 * 489 + -377 + -96);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var o = Ie()[A / 4 + (-5 * -371 + -1168 * 8 + -1 * -7489)], t = Ie()[A / 4 + (-10385 + 1731 * 6)], e = _a(o, t).slice();
      return F.__wbindgen_free(o, t * (-6660 + -761 * -8 + 576), -1948 + 1794 * -1 + 3746 * 1), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(1110 * -3 + -1359 + 941 * 5);
    }
  }
  get customer() {
    let o, t;
    try {
      const n = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = Ie()[n / (9532 + 1191 * -8) + 0], A = Ie()[n / 4 + 1];
      return o = e, t = A, sn(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-5350 + 2683 * 2), F.__wbindgen_free(o, t, -335 * 10 + 1 * 5042 + -1691);
    }
  }
}
async function YC(i, o) {
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
function TC() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = tr(t), A = typeof e == "string" ? e : void 0;
    var n = j0(A) ? 1 * 6983 + 8715 + -15698 : to(A, F.__wbindgen_malloc, F.__wbindgen_realloc), r = Qe;
    Ie()[o / (455 * -19 + -1 * 7817 + 16466) + (-1096 * -2 + -4518 + 1 * 2327)] = r, Ie()[o / 4 + (-7867 + 3613 * 1 + 3 * 1418)] = n;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    q0(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = sn(o, t);
    return nr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return nr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return tr(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(sn(o, t));
  }, i;
}
function PC(i, o) {
  return F = i.exports, z0.__wbindgen_wasm_module = o, Kt = null, jt = null, Ht = null, F;
}
async function z0(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYhACAIRQRAIAQoArQGIQIgDSEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgA2ogBEGwBmpBMBC+AhoLAn8gBCgCyAMiB0EETQRAIARBqANqIQIgBwwBCyAEKAKoAyECIAQoAqQDCyEBIARBIGohDQJAAkACQAJAAkACQAJAAkACQAJAIAQoAkAiA0EFTwRAQQIhACACIAEgBCgCICAEKAIcEKgBQf8BcUECSQ0WIAQoAhwiAkUNAiAEKAIgIQEMAQtBAiEAIAIgASANIAMQqAFB/wFxQQJJDRUgDSEBIAMiAkUNAgsgAkEGdCACQQN0IAFqQQhrKQMAeadrQQdqQQN2IApGDQIMFAsgCg0TIARBoAJqIQkMAgsgCkUNAwwSCyAEQaACaiEJIANBBUkNAQsgBCgCHEUiAQ0BIAQoAiAtAABBAXFFIgANDiADQQVJDQMgAQ0IIAANCyABDQkgBCgCICECDAQLIAMNAQsgBEG8BmpCADcCACAEQQE2ArQGIARBiO/AADYCsAYgBEGMrMIANgK4BiAEQbAGakGQ78AAEOsBAAsgBC0AIEEBcUUNCwsgDSECIAQtACBBAXFFDQcLIAQgAikDACIkQgGDNwN4ICSnQQFxRQ0FICRCAX0hJUICICR9ISZBASECA0AgJSAlfiIlQgF8ICZ+ISYgAkEgSSACQQF0IQINAAsgA0EFTwRAIAQoAhwhAwsgB0EETQR/IARBqANqBSAEKAKkAyEHIAQoAqgDCyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiIAIAEgASAHQQN0ahBDIARB0ANqIABBMBC+AhogBCgC+AMiAiEAIAJBBU8EfyAEKALUAwUgAAsgA0sEQCAEQbAGaiIBIARB0ANqIgIgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogARCPAiACEI8CIAIgAEEwEL4CGiAEKAL4AyECCyACQQVPBH8gBCgC1AMFIAILIANJBEAgBEHQA2ogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRlCACAmfSEkIAJBATYCACAEQoGAgIAgNwKEBiAEIAI2AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgEgBEGABmoQMyAEQbAGaiIAIAFBMBC+AhogAhAiIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGABGoiASAEQbAGaiIAQTAQvgIaIARB0AVqIAFBMBC+AhoCQCADQQd0IgtFBEAgACABQTAQvgIaIARBgAZqIAAQrAEMAQsgBEHQBWohAiAEKALQBUECRgRAIAQoAtQFIQILIAIoAigiAUEFTwRAIAIoAgQhAQsgBEEANgKwBiAEQQA2AtgGIARBsAZqIgIgASALQQZ2IgBBAXJqEK0BIARB+ABqIgEgAkEwEL4CGiABIAAQSSAEQdAFaiECIAECfyAEKALQBUECRgRAIAQoAtQFIQILIAJBCGogAigCKCIAQQRNDQAaIAIoAgQhACACKAIICyICIAIgAEEDdGoQQyAEQYAGaiABQTAQvgIaCyAEQbAGaiIAIARBgAZqQTAQvgIaIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEH4AGogBEGwBmpBMBC+AhoCQCALRQ0AIAQoAtAFQQJGDQAgBEHQBWoQjwILIARBsAZqIgIgBEH4AGoiASAEQRhqEAggBEGABmoiACAEQeAGakEwEL4CGiACEI8CIAEQjwIgBEGABGogAEEwEL4CGiAEKAKoBCIAQQVPBH8gBCgChAQFIAALIANJBEAgBEGABGogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRkgAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiIAIARBsAZqIgFBMBC+AhogACADENABQbixwgAtAAAaQYAGEAoiD0UNGSAEQhA3AugEIAQgDzYC5AQgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyABIABBMBC+AhogAUEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQfAEaiIAIARBsAZqIgFBMBC+AhogACAEQbAEaiAEQYAEaiAEQRhqICQgAxASIAEgAEEwEL4CGiAPIAFBMBC+AiAEQQE2AuwEIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgASAAQTAQvgIaIAFBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgBWoiACAEQbAGaiIBQTAQvgIaIAAgBEHQA2ogBEGABGogBEEYaiAkIAMQEiABIABBMBC+AhpBMGogAUEwEL4CGiAEQQI2AuwEIAFBBHIhDiAEQbgGaiELIARB2AZqIQxBAiEGQQIhCANAIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgBEGwBmogAEEwEL4CGiAIIgpBAWohCCAEKAK4BiEHA0AgCyEBIAQoAtgGIgIhACACQQVJIhBFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgDCEAIBBFBEAgBCgCtAYhAiAOIQALIAJFDQEgACACQQFrNgIADAELCyAEQfgAaiICIARBsAZqIgBBMBC+AhogBiAKQQFrIgFNDQggAiAPIAFBMGxqIA9BMGogBEEYaiAkIAMQEiAAIAJBMBC+AhogBCgC6AQgBkcEfyAGBSAEQeQEaiEKIwBBIGsiECQAAkACQCAGQQFqIgFFDQBBBCAKKAIEIgdBAXQiACABIAAgAUsbIgAgAEEETRsiAkEwbCEBIAJBq9WqFUlBA3QhAAJAIAdFBEAgEEEANgIYDAELIBBBCDYCGCAQIAdBMGw2AhwgECAKKAIANgIUCyAQQQhqIAAgASAQQRRqEHcgECgCDCEAIBAoAghFBEAgCiACNgIEIAogADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIBBBIGokACAEKALkBCEPIAQoAuwECyIQQTBsIA9qIARBsAZqQTAQvgIaIAQgEEEBaiIGNgLsBCAIQRBHDQALDAgLIBdFDQ0MCwtBuLHCAC0AABpBARAKIgBFDRcgAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQZTYwAAQLiECIBJFDRYgFhAiDBYLIACtQv8Bg0IIhiAGIBFqQQFrrUIghoRCAoQhJQwUC0EAQQBB0PjAABC3AQALQQBBAEGM98AAELcBAAsgBEEANgKwBiMAQRBrIgAkACAAQYj2wAA2AgwgACAEQfgAajYCCEEBIABBCGpB+PXAACAAQQxqQfj1wAAgBEGwBmpB/PbAABBPAAtBoPnAAEEkQcT5wAAQ3gEACyABIAZBkPnAABC3AQALAkACQAJAAkAgBgRAIA8oAigiAEEETQR/IA9BCGoFIA8oAgQhACAPKAIICyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiICIAEgASAAQQN0ahBDIARB0AVqIgAgAkEwEL4CGiAAIAMQ0AEgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyACIABBMBC+AhogAkEEciEMIARBuAZqIQogBEHYBmohCCAEKAK4BiEHA0AgCiEBIAQoAtgGIgIhACACQQVJIgtFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgCCEAIAtFBEAgBCgCtAYhAiAMIQALIAJFDQEgACACQQFrNgIADAELCyAEQYAGaiIAIARBsAZqQTAQvgIaIAAgAxDQAQJAAn8gBEHwAGooAgAiAEEFTwRAIARBzABqIgcoAgAiAUUNAiABQQFrIQIgBygCACIIIQcgBEHQAGooAgAMAQsgAEUNASAAQQFrIQIgBEHMAGooAgAhCCAAIgEhByAEQdAAagsgAiAHTw0CIAggACAAQQRLIgcbIQsgBEHQAGoiACgCACAAIAcbIQggAkEDdGohAANAIAIhByAAKQMAISZBfCECA0AgAkF8RiABIAtGcUUEQCAEQYAGaiIMIARB0AVqIgogCiAEQRhqIgAgJCADEBIgCiAMIAwgACAkIAMQEiAMIAogCiAAICQgAxASIAogDCAMIAAgJCADEBILIAYgJkI8iKciAE0NBiAEQYAGaiIMIARB0AVqIgogDyAAQTBsaiAEQRhqICQgAxASIARBsAZqIgAgCkEwEL4CGiAKIAxBMBC+AhogDCAAQTAQvgIaICZCBIYhJiACQQRqIgJBPEkNAAsgB0UNASALIAdBAWsiAk0NBCAIIAJBA3RqIQAgByEBDAALAAsgBEGABmoiACAEQdAFaiAEQbAEaiAEQRhqICQgAxASIABBBHIhCCAEQYgGaiEBIARBqAZqIQcgBCgCiAYhBgNAIAEhAyAEKAKoBiICIQAgAkEFSSIKRQRAIAYhAyAEKAKEBiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAchACAKRQRAIAQoAoQGIQIgCCEACyACRQ0BIAAgAkEBazYCAAwBCwsgAkEFTwR/IAQoAoQGIQIgBgUgAQsgAiAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQYAGaiAEQRhqEHUgASECIAQoAqgGIgBBBU8EQCAEKAKIBiECIAQoAoQGIQALIAIgACAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQbAGaiICIARBgAZqIgMgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogAhCPAiADEI8CIAMgAEEwEL4CGgwEC0EAQQBB4PjAABC3AQALIAIgB0Hw+MAAELcBAAsgAiALQfD4wAAQtwEACyAAIAZBgPnAABC3AQALIAQoAogGIQoDQCABIQMgBCgCqAYiAiEAIAJBBUkiBkUEQCAKIQMgBCgChAYhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAHIQAgBkUEQCAEKAKEBiECIAghAAsgAkUNASAAIAJBAWs2AgAMAQsLIAkgBEGABmpBMBC+AhogEEEBaiEAIARB0AVqEI8CIA8hAgNAIAIQjwIgAkEwaiECIABBAWsiAA0ACyAEKALoBARAIA8QIgsgBEGwBGoQjwIgBEGABGoQjwIgBEHQA2oQjwIMAQtBuLHCAC0AABpBBBAKIgJFDQ8gAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQcgBEHYBmohBiAEKAK4BiEIA0AgByEDIAQoAtgGIgIhACACQQVJIgFFBEAgCCEDIAQoArQGIQALAkAgAEUNACAAQQN0IANqQQhrKQMAQgBSDQAgBiEAIAFFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiAEQbAGakEwEL4CGiAEQfAAaigCACIAQQVPBH8gBEHMAGooAgAFIAALBEAgBEGwBmoiACAEQaADaiAEQRhqEAggBEHwBGogBEHgBmoiBkEwEL4CGiAAEI8CIAQoAnAiAEEFSQR/IARB0ABqBSAEQcwAaigCACEAIAQoAlALIQIgBEEANgKwBiAEQQA2AtgGIARBsAZqIgEgAiACIABBA3RqEEMgBEGgBWogAUEwEL4CGiAEQfgEaiEHIARBqAVqIQEDQCABIQAgBCgCyAUiAyECIANBBU8EQCAEKAKkBSECIAQoAqgFIQALAkAgAkUNACAALQAAQQFxRQ0AIANBBU8EfyAEKAKkBSEDIAQoAqgFBSABCyADIAQoAtgEIgBBBE0EfyAEQbgEagUgBCgCtAQhACAEKAK4BAsiBiAAEKgBQf8BcQRAIAchAiAEKAKYBSIAQQVPBEAgBCgC+AQhAiAEKAL0BCEACyAEQQA2ArAGIARBADYC2AYgBEGwBmoiAyACIAIgAEEDdGoQQyAEQdAFaiADQTAQvgIaIARBuAZqIQMgBEG4BGohCCAEQeAGaiEMA0AgASECIAQoAsgFIgBBBU8EQCAEKAKoBSECIAQoAqQFIQALIAIgACAEKALYBCIGQQVPBH8gBCgCtAQhBiAEKAK4BAUgCAsgBhCoAUH/AXFBAUcEQCAJIARB0AVqQTAQvgIaIARBoAVqEI8CIARB8ARqEI8CIARBsARqEI8CDAYLIARBoAVqEBkgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgYgAiAAIAIgABBwIARBsAZqIgAgBiAEQRhqEAggBEGABmoiAiAMQTAQvgIaIAAQjwIgBhCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiABIQAgBCgCyAUiAkEFTwRAIAQoAqQFIQIgBCgCqAUhAAsgAkUNACAALQAAQQFxRQ0AIARBsAZqIARB0AVqQTAQvgIaIAMhAiAEKALYBiIAQQVPBEAgBCgCuAYhAiAEKAK0BiEACyAEQfgAaiIKIAIgACAEKAKYBSIGQQVPBH8gBCgC9AQhBiAEKAL4BAUgBwsgBhBwIARBsAZqIgAQjwIgACAKIARBGGoQCCAEQdAFaiAMQTAQvgIaIAAQjwIgChCPAgwACwALIAkgBEHwBGpBMBC+AhogBEGgBWoQjwIgBEGwBGoQjwIMAwsgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgMgAiAAIAIgABBwIARBsAZqIgAgAyAEQRhqEAggBEGABmoiAiAGQTAQvgIaIAAQjwIgAxCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiAEQaAFahAZDAALAAsgCSAEQbAEakEwEL4CGgsgBEGwBmogBEHMAWogCUEwEL4CQTAQvgIaAn8CQAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMAwsgDSEAIAJFDQIMAQsgBCgCICEACyACQQZ0IAJBA3QgAGpBCGspAwB5p2tBB2pBA3YMAQtBAAshCwJAIAQCfwJ/AkACQCAEKALYBiICQQVPBEAgBCgCtAZFDQEgBCgCtAYiAEEBayEGQQAgAEUNBBogBCgCuAYMAwsgAg0BC0G4scIALQAAGkEBIQJBARAKIgNFDRIgA0EAOgAAQQEhCAwDCyACQQFrIQYgAiEAIARBuAZqCyEBIABBBnQgASAGQQN0aikDAHmna0EHakEDdgsQ4AEgBEEANgKgAiAEIAQoAgQ2ApwCIAQgBCgCACIDNgKYAiACQQRNBH8gBEG4BmoFIAQoArQGIQIgBCgCuAYLIQEgAiAGTwRAIAEgBkEDdGohB0EAIQIDQAJAAkACQAJAIAEgB0YEQCAEKALYBiIAQQRNBH8gBEG4BmoFIAQoArQGIQAgBCgCuAYLIAAgBk0NAyAGQQN0aikDACIlUA0BA0AgBCgCnAIgAkYEQCAEQZgCaiACEIoBIAQoAqACIQILIAQoApgCIgMgAmogJTwAACAEIAJBAWoiAjYCoAIgJUKAAlQgJUIIiCElRQ0ACwwCCyABKQMAISVBCCEAA0AgBCgCnAIgAkYEfyAEQZgCaiACEIoBIAQoApgCIQMgBCgCoAIFIAILIANqICU8AAAgBCAEKAKgAkEBaiICNgKgAiAlQgiIISUgAEEBayIADQALDAMLIAQoApgCIQMLIAQoApwCIQggAkECSQ0EIAJBAXYhDCACQQFrIQBBACEBA0AgASADaiIHLQAAIQYgByAAIANqIgotAAA6AAAgCiAGOgAAIABBAWshACAMIAFBAWoiAUcNAAsMBAsgBiAAQdjuwAAQtwEACyABQQhqIQEMAAsACyAGIAJByO7AABC4AQALAn8CQAJAAkAgAiALSyIKBH9BEgUgBEGYAmogCxDMASAEKAKgAiIHIAsgAmsiAUkNASAHIAFrIgAgAkcNAiABIAQoApgCIgFqIAMgAhC+AhogBCgCnAIhBkEUCyEAIAgEQCADECILIARBsAZqEI8CIAoNBAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMBQsgAkUNBAwBCyAEKAIgIQ0LIAJBBnQgAkEDdCANakEIaykDAHmna0EHakEDdgwDCyABIAdB9IjBABC5AQALIAAgAkGEicEAELsBAAtBAAshC0ECIQAgCyAXQR9qTwRAIAdFDQYgAS0AACIAQQAgAGtywEEAThCXAiECIAdBAUYNCyALQRRrIQwgAS0AASIAQf4Bc0EBaiAAcsBBAE4QlwIgAnEQlwIhDSALQRRJDQcgByALSQ0IIBdBFGohCAJAQRQgASALaiABIAxqIgprIgAgAEEUTxtFBEBBASEADAELQQEhAEEAIQIDQCACIBRqLQAAIAIgCmotAABzIgNBACADa3LAQQBOEJcCIABxIQAgAkEBaiICQRRHDQALCyAAEJcCIA1xEJcCIQ0gCyAIayIIIAxLDQkgByAMSQ0KAkAgCiABIAhqayIAIBcgACAXSRtFBEBBASEPDAELQQAgF2shAiARIQBBASEPA0AgAC0AACACIApqLQAAcyIDQQAgA2tywEEAThCXAiAPcSEPIABBAWohACACQQFqIgINAAsLIA8QlwIgDXEQlwIhAiAIQQFrIgAgB08NDEEAIQ8gACABai0AACIAQQAgAGtywEEAThCXAiACcRCXAiEDAkAgCEEDRg0AIAEgB2ohCCAXIAtrQRdqIQBBAiEHIAEhAgNAAkAgD0EBcQRAIAIgCEcNAQwDCyAIIAJrIAdNDQIgAiAHaiECCyACLQAAIQ1BASEPIAJBAWohAkEAIQcgDUEBaiANQX9zcsBBAE4QlwIgA3EQlwIhAyAAQQFqIgANAAsLQRRBAiADQf8BcUEBRhshAAsgBkUNACABECILIARBoANqEI8CIBdFDQELIBEQIgsgAEEURw0AQQAMAQtBuLHCAC0AABpBPBAKIgJFDQogAiAHNgIMIAIgBjYCCCACIAE2AgQgAiAANgIAIAJBEGogBEH0AmpBLBC+AhogBEIENwK4BiAEQZjlwAA2ArQGIAQgAjYCsAYgBEGwBmpB9NfAABAuQYTYwAAQWgshAiAEKALsAgRAIAQoAugCECILIBIEQCAWECILIARBGGoQjwIgBEHIAGoQjwIMCgtBAEEAQYCKwQAQtwEACyAMIAtBoIrBABC6AQALIAsgB0GgisEAELgBAAsgCCAMQbCKwQAQugEACyAMIAdBsIrBABC4AQALQQFBAUGQisEAELcBAAsgACAHQcCKwQAQtwEACyAEKAK0BgRAIBYQIgtBuLHCAC0AABpBCBAKIgBFDQEgACAlQiCIPgIEIAAgJT4CACAEQgQ3ArgGIARByOXAADYCtAYgBCAANgKwBiAEQbAGakHU18AAEC5B5NfAABBaIQILIARBGGoQjwIgBEHIAGoQjwIMAQsACyAEQZAHaiQAIAINCiATQYDnwABBCBBzIgBFDQUgAEHU4cAAQQMQcyIARQ0GIABB1+HAAEEDEHMiAEUNByAALQAAQQVHDQggAEEMaigCAA0JQbixwgAtAAAaQQEQCiIARQ0RIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGI4sAAEC4hAgwKCyAFIAE2AsgBIAUgAiADIAMgAUEBaiIAIAAgA0sbELYBQbixwgAtAAAaIAUoAgQhAiAFKAIAIQBBFBAKIgENAQwQCyAFKAJkIQEMAQsgASAANgIMIAFBFjYCACABIAI2AhAgBUHgAmoQtAELIAUoAtABRQ0AIAUoAswBECILAkACQAJAAkAgASgCAA4CAAEDCyABQQhqKAIARQ0CIAEoAgQhAwwBCyABLQAEQQNHDQEgAUEIaigCACIDKAIAIgIgAygCBCIAKAIAEQQAIAAoAgRFDQAgAhAiCyADECILIAEQIkG4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpB/OfAABAuIQIMCQtBuLHCAC0AABpBARAKIgBFDQsgAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAQLQbixwgAtAAAaQQEQCiIARQ0KIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY4sAAEC4hAgwDC0G4scIALQAAGkEBEAoiAEUNCSAAQQU6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBmOLAABAuIQIMAgtBuLHCAC0AABpBARAKIgBFDQggAEEFOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAELIAVByABqIABBBGoQ5wECQAJAAkAgBUEwakHw6cAAQQcQcyIBBEAgAS0AAEEDRiIARQ0BIAFBDGooAgBBA0YEQCABKAIEQQAgABtB9+nAAEEDELwCRQ0DC0G4scIALQAAGkEBEAoiAEUNCyAAQQI6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqOrAABAuIQIMAwtBuLHCAC0AABpBARAKIgBFDQogAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQbjqwAAQLiECDAILQbixwgAtAAAaQQEQCiIARQ0JIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakG46sAAEC4hAgwBCwJAAkACQAJAAkAgBUEwakGA58AAQQgQcyIABEAgAEGT3MAAQQUQcyINRQ0BIA0tAABBBEYiBkUNBCAFQfgAakEAQcEAELsCIQEgBUL+uevF6Y6VmRA3A2ggBUKBxpS6lvHq5m83A2AgBUIANwNwIBVBP0sNAiABIBkgFRC+AhogFSEDDAMLQbixwgAtAAAaQQEQCiIARQ0NIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGo3MAAEC4hAgwFC0G4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMBAsgBSAVQQZ2IgCtNwNwIAVB4ABqIBkgABANIAEgGSAVQUBxaiAVQT9xIgMQvgIaCyAFIAM6ALgBIAVBwAFqIAVB4ABqQeAAEL4CGiAFQagCakIANwMAIAVCADcDoAIgBSkD0AEgBUHYAWoiAiAFQZgCai0AACIDaiIBQYABOgAAIAUgBSkDyAE3A7gCIAUgBSkDwAE3A7ACIANBP3MiAARAIAFBAWpBACAAELsCGgtCCYYgA61CA4aEISQCQCADQThxQThHBEAgBUGQAmogJDcDACAFQbACaiACQQEQDQwBCyAFQbACaiIBIAJBARANIAVB4AJqIgBBAEE4ELsCGiAFICQ3AJgDIAEgAEEBEA0LIAVBADoAmAIgBUHUAmpCkICAgMAANwIAIAVBADYCzAIgBSAFQbACaiIANgLIAiAFIAVBoAJqNgLQAiAFQeACaiAFQcgCaiAAIAVBwAJqEKkBAkACQCAFKAKAAyIAIAUoAvwCIgJNDQAgACACayEAIAUoAugCIgcgAiAFKALwAiIIbGohASAFKAL0AiACQQJ0aiEDIAhBBEYhAgNAIAdFDQEgAkUNAiABIAMoAgA2AAAgASAIaiEBIANBBGohAyAAQQFrIgANAAsLIAVB0AJqIgAgBUGoAmopAwA3AwAgBSAFKQOgAjcDyAJBuLHCAC0AABpBEBAKIgJFDQsgAiAFKQPIAjcAACACQQhqIAApAwA3AABBACEBQbixwgAtAAAaQQsQCiIIRQ0LIA1BBGpBACAGGyEGIAggAikAADcAACAIQQdqIAJBB2ooAAA2AAAgAhAiIAVB4ABqQRAQzAEgBSgCaCEMIAUoAmAhCkEAIQMCQAJAAkACQANAIANBBGoiACAMSw0BIAMgCmoiDSABIAhqIgItAAAiB0ECdkHQ2cAAai0AADoAACANQQNqIAJBAmotAAAiA0E/cUHQ2cAAai0AADoAACANQQJqIAJBAWotAAAiAkECdCADQQZ2ckE/cUHQ2cAAai0AADoAACANQQFqIAdBBHQgAkEEdnJBP3FB0NnAAGotAAA6AAAgAUEGSSABQQNqIQEgACEDDQALIAxBDUkNAyAKIAgtAAkiAEECdkHQ2cAAai0AADoADCAMQQ1GDQIgCiAAQQR0IAgtAAoiAEEEdnJBP3FB0NnAAGotAAA6AA0gDEEORwRAIAogAEECdEE8cUHQ2cAAai0AADoADiAMQQ9rIgBFDQIgCkE9OgAPIAxBB2siAEEAIAAgDE0bIQcgCkEDakF8cSAKayECIAUoAmQhGkEAIQEDQAJAAkACQCABIApqLQAAIg3AIgNBAE4EQCACIAFrQQNxDQEgASAHTw0CA0AgASAKaiIAQQRqKAIAIAAoAgByQYCBgoR4cQ0DIAFBCGoiASAHSQ0ACwwCC0KAgICAgCAhJkKAgICAECEkAkACQAJAAn4CQAJAAkACQAJAAkACQAJAIA1BrK3AAGotAABBAmsOAwADAQsLIAFBAWoiAyAMSQ0BQgAhJgwJC0IAISYgAUEBaiIAIAxJDQIMCAsgAyAKaiwAAEG/f0oNCAwGC0IAISYgAUEBaiIAIAxPDQYgACAKaiwAACEAAkACQCANQeABRwRAIA1B7QFGDQEgA0EfakH/AXFBDEkNAiADQX5xQW5HDQQgAEFASA0FDAQLIABBYHFBoH9GDQQMAwsgAEGff0oNAgwDCyAAQUBIDQIMAQsgACAKaiwAACEAAkACQAJAAkAgDUHwAWsOBQEAAAACAAsgA0EPakH/AXFBAksgAEFATnINAwwCCyAAQfAAakH/AXFBME8NAgwBCyAAQY9/Sg0BCyABQQJqIgAgDE8NBSAAIApqLAAAQb9/Sg0CQgAhJCABQQNqIgMgDE8NBiADIApqLAAAQUBIDQRCgICAgIDgAAwDC0KAgICAgCAMAgtCACEkIAFBAmoiAyAMTw0EIAMgCmosAABBv39MDQILQoCAgICAwAALISZCgICAgBAhJAwCCyADQQFqIQEMBAtCACEkCyAFIAw2AsgBIAUgGjYCxAEgBSAKNgLAASAFICYgAa2EICSENwLMAUH/gsAAQQwgBUHAAWpB2IDAAEGMg8AAEK4BAAsgAUEBaiEBDAELIAEgDE8NAANAIAEgCmosAABBAEgNASAMIAFBAWoiAUcNAAsMCQsgASAMSQ0ACwwHC0EOIAxB3JHAABC3AQALIAAgDEHskcAAELgBAAsgACAAQfiLwAAQtwEAC0ENIAxBzJHAABC3AQALQQwgDEG8kcAAELcBAAsgCEEEQZTZwAAQuwEAC0G4scIALQAAGkEBEAoiAEUNCSAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMAQsgBSAMNgLoAiAFIBo2AuQCIAUgCjYC4AIgCBAiIAUoAugCIQAgBUKAgICAEDcCyAICQCAAQQFNBEAgAEEBRg0BDAkLIAUoAuACLAABQb9/TA0ICyAFQewAaiAFQcwCajYCACAFQQE2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAVB2AFqIgFBkdzAADYCACAFQZDcwAA2AtQBIAAQVyAAEJEBIAUgBSgC6AIiAEECayICNgLIAiACBEAgAEECSQ0FIAUoAuACIAJqLAAAQb9/TA0FCyAFQQI2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAFBk9zAADYCACAFQZHcwAA2AtQBIAAQVyAAEJEBIAUoAuACIQ0gBSgC5AIhBwJAIAYoAggiAARAIAUoAugCIQMgBigCACIBIABBGGxqIQIDQAJAIAEtAAAiAEEDRw0AIAFBDGooAgAgA0cNACABQQRqKAIAQQAgAEEDRhsgDSADELwCRQ0DCyABQRhqIgEgAkcNAAsLQbixwgAtAAAaQQEQCiIARQ0JIABBAzoAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY3MAAEC4hAiAHRQ0BIA0QIgwBCyAHBEAgDRAiCyAFQcABaiESIAVBMGoiByECIwBBgAFrIgkkABADIggQBCIsRAAAAAAAAODDZiEAAkACQAJAAn8CQAJAAkACQAJAAkACQAJ/AkACQAJAAkBC////////////AAJ+ICyZRAAAAAAAAOBDYwRAICywDAELQoCAgICAgICAgH8LQoCAgICAgICAgH8gABsgLET////////fQ2QbQgAgLCAsYRsiJCAkQugHfyIkQugHfn0iJ0I/hyIoICR8IiQgJEKAowV/IiRCgKMFfn0iJUI/hyImICR8IiRCxY3U/wd9QoCAgIBwVA0AICSnIgBBqPUraiIBIABBu/IrakgNACABIAFBsfUIbSIBQbH1CGxrIg1BH3VBsfUIcSANaiIAQe0CbiEDAkACQCAAQbz3CE0EQAJ/IAAgA0HtAmxrIgYgA0Hbk8AAai0AACIATwRAIAYgAGsMAQsgA0EBayIDQZADSw0CIAYgA0Hbk8AAai0AAGtB7QJqCyEGIANBkANPDQIgBkHtAksNAyADIA1BH3UgAWpBkANsaiIAQf//D2tBgoBgSQ0DIAZBBHRBEGogAEENdHIiBiADQZyXwABqLQAAciIPQfg/cSIBQeAtSw0DIChC6AeDICd8p0HAhD1sIgBB/6fWuQdLDQMgD0UgJkKAowWDICV8pyIDQf+iBUsgA0E8cEE7RyAAQf+T69wDS3Fycg0DIAhBhAFPBEAgCBABCwJAAkACQAJAIAMgA0GAowVtIgBBgKMFbGtBH3UgAGpBAWoOAwADAQMLIA9B8D9xIgBBEUkNASAAQRBrIA9Bj0BxciEPDAILIAFB0C1NBEAgAUEQaiAPQYdAcXIhDwwCCwJ/IAZBDXVBAWoiAUGQA28iAEEfdUGQA3EgAGoiAEGQA0kEQCABQf//D2tBgoBgTwR/IABBnJfAAGotAAAgAUENdHJBEHIFQQALDAELIABBkANBmJvAABC3AQALIg8NAQwTCyAGQQ11QQFrQQxBHxCUASIPRQ0SCyASAn8CQAJAAkACQAJAAkACQAJAIAJBgOfAAEEIEHMiAARAIABB4N/AAEEKEHMiAEUNCCAALQAAIgJBAWsOBQIDBAYHAQtBuLHCAC0AABpBARAKIgBFDRQgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuDAgLIAlBADoAAAwDCyAJQQE6AAAgCSAALQABOgABDAILIAlBEGogAEEQaikDADcDACAJQQI6AAAgCSAAKQMINwMIDAELIAlBBHIgAEEEaigCACAAQQxqKAIAENYBIAlBAzoAAAtBASELIAkgCUH/AGpBoIDAABD4ASEYQQEhAwwMCyAJQQRyIABBBGoQOCAJQQQ6AAAgCUEIaigCACEAIAkgCSgCBCIIIAlBDGooAgAiDUEYbGo2AmQgCSAINgJgIAkgADYCXCAJIAg2AlgCQCANRQ0AIAkgCEEYajYCYCAILQAAIgBBBkYNACAJQSFqIgYgCEEJaikAADcAACAJQShqIgMgCEEQaikAADcAACAJIAA6ABggCSAIKQABNwAZIAlB8ABqIgIgCUEYaiIBEGsgCSgCcA0SIA1BAUYNCCAJKAJ0IRggCSAIQTBqNgJgIAgtABgiAEEGRg0IIAYgCEEhaikAADcAACADIAhBKGopAAA3AAAgCSAAOgAYIAkgCEEZaikAADcAGSACIAEQbCAJKAJwDRIgDUECRg0JIAkoAnQhHiAJIAhByABqNgJgIAgtADAiAEEGRg0JIAYgCEE5aikAADcAACADIAhBQGspAAA3AAAgCSAAOgAYIAkgCEExaikAADcAGSACIAEQbCAJKAJwDRIgCSgCdCEfQQAhCyANQQNHBEAgDUG03cAAEKsBIRhBASELCyAJQdgAahCJAQwNC0EAQZTewAAQqwEMEgsgCUEEciAAQQRqEOcBIAlBBToAACAJQQxqKAIAIQpBACEDIAlBMGohDCAJQdAAaiAJKAIEIgEEfyAJQcwAaiAJQQhqKAIAIgA2AgAgCUHIAGogATYCACAJQcQAakEANgIAIAlBPGogADYCACAJQThqIAE2AgAgCUE0akEANgIAQQEhAyAKBUEACzYCACAJQUBrIAM2AgAgCSADNgIwIAlBBjoAGCAJQdgAakEBciEUIAlBGGpBAXIhESAJQeAAaiEIIAlB5wBqIQ1BASETA0ACQCAJQfAAaiIBIAwQPCAJKAJwIgNFDQAgCCADIAkoAngiAEEYbGoiBkEJaikAADcDACANIAZBEGopAAA3AAAgCSAGKQABNwNYIAYtAAAiEEEGRg0AIAMgAEEMbGoiBkGUAmooAgAhAyAGQZACaigCACEAIAZBjAJqKAIAIQYgCUEYahCvASARIAkpA1g3AAAgEUEIaiIOIAgpAwA3AAAgEUEPaiILIA0pAAA3AAAgCSAQOgAYAkAgBkUEQCABIAAgAxC+AQwBCyAJQfAAaiAGIAMQvgEgAEUNACAGECILIAktAHANCgJAAkACQAJAIAktAHEOAwECAwALIBQgESkAADcAACAUQQhqIA4pAAA3AAAgFEEPaiALKQAANwAAIAlBBjoAGCAJIBA6AFggCUHYAGoQtAEMBAsgIARAQajiwABBBBDKAQwOCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGsgCSgCcA0MIAkoAnQhGEEBISAMAwsgIQRAQaziwABBBRDKAQwNCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGwgCSgCcA0LIAkoAnQhHkEBISEMAgsgE0UEQEGx4sAAQQMQygEMDAsgFCARKQAANwAAIBRBCGogDikAADcAACAUQQ9qIAspAAA3AAAgCUEGOgAYIAkgEDoAWCAJQfAAaiAJQdgAahBsIAkoAnANCiAJKAJ0IR9BACETDAELCwJAICAEQCAhRQRAQaziwABBBRDJAQwMCyATRQ0BQbHiwABBAxDJAQwLC0Go4sAAQQQQyQEMCgtBACEDQQAhCyAJKAJQBEAgCkHk3cAAEKsBIRhBASELCyAMEIABIAlBGGoQrwEMCgtBuLHCAC0AABpBARAKIgBFDQwgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuCzYCBEEBIQMMCgsgA0GRA0HslsAAELcBAAtBf0GRA0H8lsAAELcBAAsgA0GQA0GYm8AAELcBAAsgCUEkakIANwIAIAlBATYCHCAJQeiSwAA2AhggCUGMrMIANgIgIAlBGGpBxJLAABDrAQALQQFBlN7AABCrAQwKC0ECQZTewAAQqwEMCQsgCSgCdAshGCAMEIABIAlBGGoQrwFBACEDQQEhCwsCQAJAAkAgAkEEaw4CAgEACyAJELQBDAILIANFDQEgCUEEchCyAQwBCyAJKAIEIQAgCUEMaigCACICBEAgACEDA0AgAxC0ASADQRhqIQMgAkEBayICDQALCyAJQQhqKAIARQ0AIAAQIgsgCw0GIBggHiAfEJQBIghFBEAgCUEBOgAYQbzvwABBKyAJQRhqQZzewABBrODAABCuAQALAkAgCCAPTgRAIA9BDXUiAUGQA28hDSAIQQ11IgAgAEGQA20iAEGQA2xrIgJBH3VBkANxIAJqIgZBkQNPDQQgDUEfdUGQA3EgDWoiA0GRA08NBSAGQduTwABqLQAAIAZB7QJsIAhBBHZB/wNxampBAWutIAJBH3UgAGogAUHwfG1qIA1BH3ZqrEKx9Qh+fCADQduTwABqLQAAIANB7QJsIA9BBHZB/wNxampBAWutfSIkQh5VDQEgCSAkPAAAIAlBJGpCATcCACAJQQI2AhwgCUG04cAANgIYIAlBCTYCXCAJIAlB2ABqNgIgIAkgCTYCWCASQQRqIAlBGGoQRkEAIQMMAgtBuLHCAC0AABpBASEDQQEQCiIARQ0CIABBBDoAACAJQgQ3AiAgCUGw5cAANgIcIAkgADYCGCASIAlBGGpBxOHAABAuNgIEDAELQQAhAyASQQA2AgQLIBIgAzYCACAJQYABaiQADAcLAAsgBkGRA0GMl8AAELcBAAsgA0GRA0GMl8AAELcBAAsgCSgCdAshGCAJQdgAahCJAQsgCSAYNgIYQbzvwABBKyAJQRhqQazewABBnODAABCuAQALQbzewABBK0HQ38AAENEBAAsgBSgCwAFFBEAgBUHIAWopAgAhJCAFKALEASEIQQAhACAFQQA2AmggBUIENwJgIwBBIGsiBiQAAkACQAJAAkACQAJAIAdBgOfAAEEIEHMiAQRAIAFBiOfAAEEIEHMiAUUNASABLQAAQQNGIgNFDQIgAUEMaigCACIHRQ0DIAEoAgQhASAGQQhqIAcQ4AEgBigCDCECIAYoAgggAUEAIAMbIAcQvgIhASASIAc2AgggEiACNgIEIBIgATYCAAwEC0G4scIALQAAGkEBEAoiAUUNBCABQQE6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHQ58AAEC4hASASQQA2AgAgEiABNgIEDAMLQbixwgAtAAAaQQEQCiIBRQ0DIAFBAToAACAGQgQ3AhggBkGw5cAANgIUIAYgATYCECAGQRBqQdDnwAAQLiEBIBJBADYCACASIAE2AgQMAgtBuLHCAC0AABpBARAKIgFFDQIgAUEBOgAAIAZCBDcCGCAGQbDlwAA2AhQgBiABNgIQIAZBEGpB0OfAABAuIQEgEkEANgIAIBIgATYCBAwBC0G4scIALQAAGkEBEAoiAUUNASABQQY6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHA58AAEC4hASASQQA2AgAgEiABNgIECyAGQSBqJAAMAQsACyAFKALAASINBEAgBSgCyAEhCyAFKALEASEGIAgNBEEEIRNBAAwFCyAFKALEASECQQRBABDtASAIRSAkQv////8Pg1ByDQEgCBAiDAELIAUoAsQBIQILIAVByABqELIBCyAFQTBqELQBDAMLIAUgJDcCWCAFIAg2AlQgBUHgAGoiASgCCCIAIAEoAgRGBEAgASAAEIIBIAEoAgghAAsgASAAQQFqNgIIIAEoAgAgAEEMbGoiASAFQdQAaiIAKQIANwIAIAFBCGogAEEIaigCADYCACAFKAJoIQAgBSgCYCETIAUoAmQLIQIgBUGoAmogBUHQAGooAgA2AgAgBSAFKQJINwOgAiAFQTBqELQBIBNFDQFBuLHCAC0AABogBSgCqAIhASAFKAKkAiEHIAUoAqACIQhBgAEQCiIDRQ0EIAVCgAE3AmQgBSADNgJgIAUgBUHgAGoiAzYCMCADQefswABBARDkASAFIAEEf0EBBSADQdzswABBARDkAUEACzoA5AIgBSAFQTBqNgLgAgJ/IAhFBEBBACEBQQAMAQsgBSAHNgLcASAFIAg2AtgBIAVBADYC1AEgBSAHNgLMASAFIAg2AsgBIAVBADYCxAFBAQshAyAFIAE2AuABIAUgAzYC0AEgBSADNgLAAQNAAkAgBUEIaiAFQcABahBEIAUoAggiAQRAIAVB4AJqIAEgBSgCDBDcAQwCBSAFLQDkAgRAIAUoAuACKAIAQdzswABBARDkAQsgBSgCZCEiIAUoAmAiB0UNASAFKAJoIRogBUGgAmoQsgFBBCEKQQAhA0EBDAULAAsLIAUgIjYCwAFBvO/AAEErIAVBwAFqQfDqwABBjOvAABCuAQALQeiAwABBKkGUgcAAEN4BAAtBuLHCAC0AABpBDBAKIgpFDQIgBUEANgK4AiAFQgE3ArACIAVB+ABqQcjqwAA2AgAgBUEDOgCAASAFQSA2AnAgBUEANgJ8IAVBADYCaCAFQQA2AmBBuLHCAC0AABogBSAFQbACajYCdCACKAIAIQEgAigCCCEAQQgQCiITRQ0CIBMgATYCACATIAEgAEEEdGo2AgQgBUEANgLsAiAFQoGAgIAQNwLkAiAFIBM2AuACQQEhAwNAAkAgA0UNACATIANBA3RqQQhrIQECQANAIAEoAgAiDCABQQRqKAIARw0BIAFBCGshASADQQFrIgMNAAsgBUEANgLoAgwBCyABIAxBEGo2AgAgDCgCCCIGIAxBDGooAgBBBHRqIQcgBSADNgLoAiAFKALkAiADRgRAIAVB4AJqIQgjAEEgayILJAACQAJAIANBAWoiAUUNAEEEIAgoAgQiDUEBdCIAIAEgACABSxsiACAAQQRNGyIDQQN0IQEgA0GAgICAAUlBAnQhAAJAIA1FBEAgC0EANgIYDAELIAtBBDYCGCALIA1BA3Q2AhwgCyAIKAIANgIUCyALQQhqIAAgASALQRRqEHcgCygCDCEAIAsoAghFBEAgCCADNgIEIAggADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIAtBIGokACAFKALoAiEDCyAFKALgAiITIANBA3RqIgAgBzYCBCAAIAY2AgAgBSADQQFqIgM2AugCIAVByAJqIAwoAgAgDCgCBCgCDBECACAFKALIAkECRw0BIAUoAswCIQEgBSgC0AIhACAFQQA2AjggBUIBNwIwIAVBAzoA4AEgBUEgNgLQASAFQQA2AtwBIAVByOnAADYC2AEgBUEANgLIASAFQQA2AsABIAUgBUEwajYC1AECQCABIAVBwAFqIAAoAgwRAQBFBEAgBSgCMCIBRQ0DIAUpAjQhJCAFIAUoAuwCIgBBAWo2AuwCIAUgJDcCNCAFIAE2AjACQCAARQRAIAVB4ABqIAEgJEIgiKcQEQ0BIAUoAjRFDQQgBSgCMBAiDAQLIAVBATYCxAEgBUGM6MAANgLAASAFQgE3AswBIAVBHTYCzAIgBSAFQcgCajYCyAEgBSAFQTBqNgLIAiAFQbACakHI6sAAIAVBwAFqEC9FDQILIAUoAjQEQCAFKAIwECILIAUoAuQCBEAgExAiC0Gc6sEAQTcgBUHUAGpB4OrAAEGw68EAEK4BAAtBnOrBAEE3IAVB1ABqQeDpwABBsOvBABCuAQALIAUoAjRFDQEgBSgCMBAiDAELCyAFKALkAgRAIBMQIgsgBUHIAWogBUG4AmooAgAiADYCACAFIAUpArACIiQ3A8ABIApBCGogADYCACAKICQ3AgAgAigCACACKAIIEMYBIAIoAgQEQCACKAIAECILIAIQIkEBIQ1BBCETQQAhB0EAIQtBACEGQQAhAEEAIQJBASEDQQALIQEgIwRAIBkQIgsgBUEuaiAFQcIBai0AADoAACAFIAUvAMABOwEsIBUEQCAdECILIBwEQCAbECILQbixwgAtAAAaQTgQCiIIRQ0BIAggAToANCAIIBo2AjAgCCAiNgIsIAggBzYCKCAIIAs2AiQgCCAGNgIgIAggDTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB+LDCACgCACAAaiIANgIAIAEgAEEBcjYCBEH8sMIAKAIAIAFGBEBB9LDCAEEANgIAQfywwgBBADYCAAsgAEGMscIAKAIAIgNNDQBBgLHCACgCACICRQ0AQQAhAQJAQfiwwgAoAgAiBEEpSQ0AQdSuwgAhAANAIAIgACgCACIFTwRAIAUgACgCBGogAksNAgsgACgCCCIADQALC0HcrsIAKAIAIgAEQANAIAFBAWohASAAKAIIIgANAAsLQZSxwgBB/x8gASABQf8fTRs2AgAgAyAETw0AQYyxwgBBfzYCAAsPCyAAQXhxQeSuwgBqIQICf0HssMIAKAIAIgNBASAAQQN2dCIAcUUEQEHssMIAIAAgA3I2AgAgAgwBCyACKAIICyEAIAIgATYCCCAAIAE2AgwgASACNgIMIAEgADYCCA8LQfywwgAgATYCAEH0sMIAQfSwwgAoAgAgAGoiADYCACABIABBAXI2AgQgACABaiAANgIAC5EGAQZ/AkACQAJAAkAgAkEJTwRAIAIgAxBAIgINAUEADwtBACECIANBzP97Sw0BQRAgA0ELakF4cSADQQtJGyEBIABBBGsiBigCACIHQXhxIQQCQAJAAkACQAJAAkACQCAHQQNxBEAgAEEIayIIIARqIQUgASAETQ0BIAVBgLHCACgCAEYNBiAFQfywwgAoAgBGDQQgBSgCBCIHQQJxDQcgB0F4cSIJIARqIgQgAUkNByAEIAFrIQIgCUGAAkkNAiAFEF8MAwsgAUGAAkkgBCABQQRySXIgBCABa0GBgAhPcg0GDAoLIAQgAWsiAkEQTw0DDAkLIAVBDGooAgAiAyAFQQhqKAIAIgVHBEAgBSADNgIMIAMgBTYCCAwBC0HssMIAQeywwgAoAgBBfiAHQQN2d3E2AgALIAJBEE8EQCAGIAYoAgBBAXEgAXJBAnI2AgAgASAIaiIBIAJBA3I2AgQgBCAIaiIDIAMoAgRBAXI2AgQgASACEDIMCAsgBiAGKAIAQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEDAcLQfSwwgAoAgAgBGoiBCABSQ0CAkAgBCABayIDQQ9NBEAgBiAHQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEQQAhAwwBCyAGIAdBAXEgAXJBAnI2AgAgASAIaiICIANBAXI2AgQgBCAIaiIBIAM2AgAgASABKAIEQX5xNgIEC0H8sMIAIAI2AgBB9LDCACADNgIADAYLIAYgB0EBcSABckECcjYCACABIAhqIgEgAkEDcjYCBCAFIAUoAgRBAXI2AgQgASACEDIMBQtB+LDCACgCACAEaiIEIAFLDQMLIAMQCiIBRQ0BIAEgAEF8QXggBigCACIBQQNxGyABQXhxaiIBIAMgASADSRsQvgIgABAiDwsgAiAAIAEgAyABIANJGxC+AhogABAiCyACDwsgBiAHQQFxIAFyQQJyNgIAIAEgCGoiAiAEIAFrIgFBAXI2AgRB+LDCACABNgIAQYCxwgAgAjYCACAADwsgAAvbBgEKfyMAQSBrIgQkAAJAAkACQAJAAkACQCADQf8BcQ4EAQIDBAALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQeiTwgA2AhggACAAQRhqNgIIIABB2JTCABDrAQALQQAhAwNAIARBEGogA2pBmfOJ1AU2AgAgA0EEaiIDQRBHDQALIAIoAgwhBiACKAIIIQggAigCBCEFIAQoAhwhCSAEKAIYIQogBCgCFCELIAAgBCgCECACKAIAaiABKAIAIgNBBXdqIAEoAgQiDCABKAIMIgIgASgCCCIBc3EgAnNqIgdBHnciDTYCDCAAIAIgBSALamogASADIAEgDEEedyICc3FzaiAHQQV3aiIFQR53NgIIIAAgASAIIApqaiAHIAIgA0EedyIBc3EgAnNqIAVBBXdqIgM2AgQgACAGIAlqIAJqIAUgASANc3EgAXNqIANBBXdqNgIADAMLQQAhAwNAIARBEGogA2pBodfn9gY2AgAgA0EEaiIDQRBHDQALIAQgBCgCHCACKAIMajYCDCAEIAQoAhggAigCCGo2AgggBCAEKAIUIAIoAgRqNgIEIAQgBCgCECACKAIAajYCACAAIAEgBBCSAQwCC0EAIQMDQCAEQRBqIANqQdz57vh4NgIAIANBBGoiA0EQRw0ACyACKAIMIQggAigCCCEJIAIoAgQhBiAEKAIcIQogBCgCGCELIAQoAhQhDCAAIAQoAhAgAigCAGogASgCACIDQQV3aiABKAIEIg0gASgCDCICIAEoAggiAXNxIAEgAnFzaiIHQR53IgU2AgwgACACIAYgDGpqIAMgASANQR53IgJzcSABIAJxc2ogB0EFd2oiBkEedzYCCCAAIAEgCSALamogByACIANBHnciAXNxIAEgAnFzaiAGQQV3aiIDNgIEIAAgCCAKaiACaiAGIAEgBXNxIAEgBXFzaiADQQV3ajYCAAwBC0EAIQMDQCAEQRBqIANqQdaDi9N8NgIAIANBBGoiA0EQRw0ACyAEIAQoAhwgAigCDGo2AgwgBCAEKAIYIAIoAghqNgIIIAQgBCgCFCACKAIEajYCBCAEIAQoAhAgAigCAGo2AgAgACABIAQQkgELIARBIGokAAvtBQEJfyMAQcABayIDJAACQAJAAkACQCACLQAwIgRBAUcEQAJAAkACQCABLQAwIgdBAWsOAgQAAQsgBEUNAQwECyAERQ0DCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAcgAxBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkEwEL4CIgBBAiAEazoAMCAAIAIoADE2ADEgAEE0aiACQTRqKAAANgAADAELAkACQAJAIAEoAigiBkEETQR/IAFBCGoFIAEoAgQhBiABKAIICyAGIAIoAigiBUEETQR/IAJBCGoFIAIoAgQhBSACKAIICyAFEKgBQf8BcQ4CAQIACyADQeAAaiIEIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAQgAhB1IANBMGoiASAEQTAQvgIaIAIQjwIgAEECIAdrIAEQQgwDCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgQgA0EwahAzIANBkAFqIgUgBEEwEL4CGiAFQQRyIQcgA0GYAWohCCADQbgBaiEJIAMoApgBIQoDQCAIIQUgAygCuAEiBiEEIAZBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAJIQQgC0UEQCADKAKUASEGIAchBAsgBkUNASAEIAZBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAELIANB4ABqIgQgAUEwEL4CGiADQZABaiIBIAJBMBC+AhogBCABEHUgA0EwaiICIARBMBC+AhogARCPAiAAIAcgAhBCDAELIAEQjwILIANBwAFqJAALyQcBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhcBAgMEBQYHCAkKCwwNDg8QERITFBUWFwALIAEoAhRBkNHAAEEIIAFBGGooAgAoAgwRAAAMFwsgASgCFEGY0cAAQQYgAUEYaigCACgCDBEAAAwWCyABKAIUQZ7RwABBDCABQRhqKAIAKAIMEQAADBULIAIgAEEIajYCDCABQarRwABBCkG00cAAQQwgAEEEakHA0cAAQdDRwABBCiACQQxqQdzRwAAQhwEMFAsgAiAAQQFqNgIMIAFB7NHAAEECIAJBDGpB8NHAABB9DBMLIAEoAhRBgNLAAEEQIAFBGGooAgAoAgwRAAAMEgsgAiAAQQFqNgIMIAFB+oPBAEEGQZDSwABBAyACQQxqQZTSwAAQjQEMEQsgAiAAQQFqNgIMIAFBpNLAAEEMQZDSwABBAyACQQxqQZTSwAAQjQEMEAsgASgCFEGw0sAAQQwgAUEYaigCACgCDBEAAAwPCyACIABBAWo2AgwgAUHglsIAQQpB6pbCAEEDIAJBDGpBvNLAABCNAQwOCyABKAIUQczSwABBDCABQRhqKAIAKAIMEQAADA0LIAEoAhRB2NLAAEELIAFBGGooAgAoAgwRAAAMDAsgASgCFEHj0sAAQQggAUEYaigCACgCDBEAAAwLCyABKAIUQevSwABBCiABQRhqKAIAKAIMEQAADAoLIAIgAEEEajYCDCABQfXSwABBAyACQQxqQfjSwAAQfQwJCyABKAIUQZuiwgBBECABQRhqKAIAKAIMEQAADAgLIAEoAhRBiNPAAEEGIAFBGGooAgAoAgwRAAAMBwsgASgCFEGO08AAQQ4gAUEYaigCACgCDBEAAAwGCyABKAIUQZzTwABBECABQRhqKAIAKAIMEQAADAULIAIgAEEEajYCDCABQazTwABBDUHMhMEAQQggAEEBakG808AAQczTwABBBiACQQxqQZTSwAAQhwEMBAsgAiAAQQFqNgIMIAFB0tPAAEEKQdzTwABBBCACQQxqQeDTwAAQjQEMAwsgAiAAQQhqNgIMIAFB8NPAAEEMQfzTwABBByAAQQRqQcDRwABBg9TAAEEJIAJBDGpB3NHAABCHAQwCCyACIABBBGo2AgwgAUGM1MAAQQQgAkEMakGQ1MAAEH0MAQsgAiAAQQFqNgIMIAFBoNTAAEEFQZDSwABBAyACQQxqQZTSwAAQjQELIAJBEGokAAvmBQIIfwN+IwBBwAFrIgMkACADQQI2AgAgAyABNgIEIAJBBnYhBgJAIAJBP00EQCADQZABaiIBIANBMBC+AhogA0EwaiABEKwBDAELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgKQASADQQA2ArgBIANBkAFqIgEgBCAGakEBahCtASADQeAAaiIEIAFBMBC+AhogBCAGEEkgAyEBIANB4ABqIgUCfyADKAIAQQJGBEAgAygCBCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQTBqIAVBMBC+AhoLAkAgAkE/cSIIRQ0AIAMoAlgiAUEETQR/IANBOGoFIAMoAjQhASADKAI4CyEEIAEgBk8EQCABIAZGDQEgA0HYAGohByABQQN0IAZBA3QiBmshASAEIAZqIQVBACACa0E/ca0hDCAIrSENA0AgBSALIAUpAwAiCyANhoQ3AwAgBUEIaiEFIAsgDIghCyABQQhrIgENAAsgC1ANAUEEIQECfyADKAJYIgZBBE0EQCAGIQUgA0E4agwBCyADQTBqQQRyIQcgAygCNCEFIAYhASADKAI4CyEEIAEgBUYEQCADQTBqIgEQoAEgAUEEciEHIAMoAjQhBSADKAI4IQQLIAQgBUEDdGogCzcDACAHIAcoAgBBAWo2AgAMAQsgBiABQZD9wAAQuQEACyADQZABaiIBIANBMGpBMBC+AhogAUEEciEGIANBmAFqIQcgA0G4AWohCCADKAKYASEJA0AgByEEIAMoArgBIgUhASAFQQVJIgpFBEAgCSEEIAMoApQBIQELAkAgAUUNACABQQN0IARqQQhrKQMAQgBSDQAgCCEBIApFBEAgAygClAEhBSAGIQELIAVFDQEgASAFQQFrNgIADAELCyAAIANBkAFqQTAQvgIaAkAgAkHAAEkNACADKAIAQQJGDQAgAxCPAgsgA0HAAWokAAvYDQIFfwF+IwBB4ABrIgIkACACQRhqQRQQzAECQAJAAkACQAJAAkACQAJAAkACQCABLQAADgYAAQQCBgUDC0G4scIALQAAGiACKAIgIQMgAigCGEEEEAoiAUUNByABQe7qseMGNgAAIAJChICAgMAANwIoIAIgATYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBgsgAigCICEDIAIoAhggAkEEQQUgAS0AASIFGyIBEOABIAIoAgQhBiACKAIAQeLswABB3ezAACAFGyABEL4CIQUgAiABNgIsIAIgBjYCKCACIAU2AiQgAkHUAGoiASACQSRqEB0gAyABEMsBDAULIAIoAiAhAyACKAIYIAEoAgQhBSACQQhqIAFBDGooAgAiARDgASACKAIMIQYgAigCCCAFIAEQvgIhBSACIAE2AiwgAiAGNgIoIAIgBTYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBAsgAkEwakIANwIAIAJBATYCKCACQdTVwAA2AiQgAkGMrMIANgIsIwBBQGoiASQAIAFBBjYCDCABQbSfwgA2AghBxK3CAC0AAEEDRwRAIAFBpK3CADYCKCABIAFBGGo2AiwgAUEoaiEGIwBBIGsiBCQAAkACQAJAAkACQEHErcIALQAAIgNBAk8EQCADQQNrDQQMAQtBxK3CAEECOgAAIAYoAgAhAyAGQQA2AgAgA0UNAUG4scIALQAAGkGACBAKIgZFDQIgA0EAOgAcIANBADoAGCADQoAINwIQIAMgBjYCDCADQQA2AgggA0IANwIAQcStwgBBAzoAAAsgBEEgaiQADAMLQYCXwgBBK0H0oMIAEN4BAAsACyAEQRRqQgA3AgAgBEEBNgIMIARB9KbCADYCCCAEQYyswgA2AhAgBEEIakHkoMIAEOsBAAsLIAJBJGohBgJAAkBBpK3CACgCAEGdscIARwRAQcCtwgAtAAAhBEEBIQNBwK3CAEEBOgAAIAEgBDoAGCAERQ0BIAFCADcCNCABQYyswgA2AjAgAUEBNgIsIAFB+J/CADYCKCABQRhqIAFBKGoQ7gEAC0GorcIAKAIAQQFqIgMNAUGEocIAQSZBzKHCABDRAQALQaStwgBBnbHCADYCAAtBqK3CACADNgIAIAFBpK3CADYCGEEEIQMgAUEEOgAoIAEgAUEYajYCMCABQShqQbyXwgAgBhAvIQYgAS0AKCEEAkAgBgRAIARBBEYEQEECIQNBzJ/CACEFDAILIAEoAiwhBSABKAIoIQMMAQtBFyAEdkEBcQ0AIAEoAiwiBCgCACIFIARBBGooAgAiBigCABEEACAGKAIEBEAgBRAiCyAEECILIAEoAhgiBCAEKAIEQQFrIgY2AgQgBkUEQCAEQQA6ABwgBEEANgIACwJAIANB/wFxQQRGBEAgAUFAayQADAELIAEgBTYCFCABIAM2AhAgAUE0akICNwIAIAFBJGpBHDYCACABQQI2AiwgAUGUn8IANgIoIAFBBzYCHCABIAFBGGo2AjAgASABQRBqNgIgIAEgAUEIajYCGCABQShqQaSfwgAQ6wEACwwDCyABKQMIUEUNBCACKAIgIQQgAigCGCACQSRqIQMgAUEQaikDACEHIwBBQGoiASQAIAFBADYCFCABQgE3AgwgAUEwakGo1MAANgIAIAFBAzoAOCABQSA2AiggAUEANgI0IAFBADYCICABQQA2AhggASABQQxqNgIsAkAgB0EBIAFBGGoQVkUEQCADIAEpAgw3AgAgA0EIaiABQRRqKAIANgIAIAFBQGskAAwBC0Gc6sEAQTcgAUE/akHA1MAAQbDrwQAQrgEACyACQdQAaiIBIAMQHSAEIAEQywEMAgsCfyABKAIEIgNFBEBBACEDQQAMAQsgAiADNgI8IAJBADYCOCACIAM2AiwgAkEANgIoIAIgAUEIaigCACIDNgJAIAIgAzYCMCABQQxqKAIAIQNBAQshASACIAM2AkQgAiABNgI0IAIgATYCJCACKAIgIQMgAigCGCEEA0AgAkEQaiACQSRqEEQgAigCECIFRQ0CIAIoAhQhBiACQdQAaiIBIAUoAgAgBUEIaigCABDWASACQcgAaiIFIAEQHSAEIAMgBRDLASABIAYQKCAEIAMgARDLAQwACwALIAFBDGooAgAiA0UNACABKAIEIQEgA0EYbCEDIAIoAiAhBCACKAIYIQUDQCACQSRqIgYgARAoIAUgBCAGEMsBIAFBGGohASADQRhrIgMNAAsLIAAgAikCGDcCACAAQQhqIAJBIGooAgA2AgAgAkHgAGokAA8LAAtBgJfCAEErQYzWwAAQ3gEAC8UFAQl/IwBBwAFrIgMkAAJAAkACQAJAIAItADAiBEEBRwRAAkACQAJAIAEtADAiBkEBaw4CBAABCyAERQ0BDAULIARFDQQLAkACQAJAIAEoAigiBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyAFIAIoAigiB0EETQR/IAJBCGoFIAIoAgQhByACKAIICyAHEKgBQf8BcQ4CAQIACyADQeAAaiIFIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAUgAhB1IANBMGoiASAFQTAQvgIaIAIQjwIgACAEIAEQQgwGCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgUgA0EwahAzIANBkAFqIgQgBUEwEL4CGiAEQQRyIQYgA0GYAWohCSADQbgBaiEHIAMoApgBIQoDQCAJIQUgAygCuAEiCCEEIAhBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAHIQQgC0UEQCADKAKUASEIIAYhBAsgCEUNASAEIAhBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAMLIANB4ABqIgUgAUEwEL4CGiADQZABaiIEIAJBMBC+AhogBSAEEHUgA0EwaiIBIAVBMBC+AhogBBCPAiAAIAYgARBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkE4EL4CGgsgARCPAgwBCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAYgAxBCCyADQcABaiQAC/AGAQF/IwBB8ABrIgIkACAAKAIAIQAgAkEANgJIIAJCATcCQCACQeQAakGE6sEANgIAIAJBAzoAbCACQSA2AlwgAkEANgJoIAJBADYCVCACQQA2AkwgAiACQUBrNgJgAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAoAgBBAWsOGBgAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcLIAJBQGtBkO3BAEEYEK4CDRkMGAsgAkFAa0Go7cEAQRsQrgINGAwXCyACQUBrQcPtwQBBGhCuAg0XDBYLIAJBQGtB3e3BAEEZEK4CDRYMFQsgAkFAa0H27cEAQQwQrgINFQwUCyACQUBrQYLuwQBBExCuAg0UDBMLIAJBQGtBle7BAEETEK4CDRMMEgsgAkFAa0Go7sEAQQ4QrgINEgwRCyACQUBrQbbuwQBBDhCuAg0RDBALIAJBQGtBxO7BAEEMEK4CDRAMDwsgAkFAa0HQ7sEAQQ4QrgINDwwOCyACQUBrQd7uwQBBDhCuAg0ODA0LIAJBQGtB7O7BAEETEK4CDQ0MDAsgAkFAa0H/7sEAQRoQrgINDAwLCyACQUBrQZnvwQBBPhCuAg0LDAoLIAJBQGtB1+/BAEEUEK4CDQoMCQsgAkFAa0Hr78EAQTQQrgINCQwICyACQUBrQZ/wwQBBLBCuAg0IDAcLIAJBQGtBy/DBAEEkEK4CDQcMBgsgAkFAa0Hv8MEAQQ4QrgINBgwFCyACQUBrQf3wwQBBExCuAg0FDAQLIAJBQGtBkPHBAEEcEK4CDQQMAwsgAkFAa0Gs8cEAQRgQrgINAwwCCyACQUBrIAAoAgQgAEEIaigCABCuAkUNAQwCCyAAQQRqIAJBzABqEEUNAQsgAkE4aiACQcgAaigCADYCACACQSxqQQQ2AgAgAkEkakEENgIAIAJBDGpCAzcCACACIAIpAkA3AzAgAkExNgIcIAJBBDYCBCACQejxwQA2AgAgAiAAQRBqNgIoIAIgAEEMajYCICABQRhqKAIAIQAgAiACQTBqNgIYIAIgAkEYajYCCCABKAIUIAAgAhAvIAIoAjQEQCACKAIwECILIAJB8ABqJAAPC0Gc6sEAQTcgAkEYakHU6sEAQbDrwQAQrgEAC6UGAQd/IwBBEGsiBiQAAkACQAJAAkAgASgCCEUEQCABQX82AgggAyEFIAMhByACQQNqQXxxIAJrIgQgA00EQCADIAMgBGtBB3EiB2shBSADIAdJDQUgBCEHC0EAIAVrIQogAkEBayEJIAMhBAJAAkACQANAIAQgCmpFBEADQCAHIAUiBEkEQCAEQQhrIQUgAiAEaiIJQQRrKAIAIghBipSo0ABzQYGChAhrIAhBf3NxIAlBCGsoAgAiCEGKlKjQAHNBgYKECGsgCEF/c3FyQYCBgoR4cUUNAQsLIAMgBEkNBgNAIAQiBUUNBCAEQQFrIgQgAmotAABBCkcNAAsMAgsgBCAJaiAEQQFrIQQtAABBCkcNAAsgBCAKakEBaiAFaiEFCyADIAVPDQFBiZjCAEEjQayYwgAQ3gEACwJAIAFBFGooAgAiBEUEQEEAIQQMAQsgBCABKAIMakEBay0AAEEKRw0AQQAhBCABQQA2AhQgAUEYakEAOgAACyADIAFBEGooAgAgBGtPBEAgACABQQxqIAIgAxDCAQwFCyABKAIMIARqIAIgAxC+AhogAEEEOgAAIAEgAyAEajYCFAwECyABQRRqKAIAIgRFDQICQAJAIAUgAUEQaigCACAEa0kEQCABKAIMIARqIAIgBRC+AhogASAEIAVqIgQ2AhQMAQsgBkEIaiABQQxqIAIgBRDCASAGLQAIIgRBBEcNASABKAIUIQQLIARFDQMgAUEANgIUIAFBGGpBADoAAAwDCyAAIAYoAAk2AAEgAEEEaiAGQQxqKAAANgAAIAAgBDoAAAwDCyMAQTBrIgAkACAAQRhqQgE3AgAgAEEBNgIQIABBnKbAADYCDCAAQQs2AiggACAAQSRqNgIUIAAgAEEvajYCJCAAQQxqQeyewgAQ6wEACyAEIANBvKnAABC4AQALIAIgBWohAiADIAVrIgMgAUEQaigCAE8EQCAAIAFBDGogAiADEMIBDAELIAEoAgwgAiADEL4CGiAAQQQ6AAAgASADNgIUCyABIAEoAghBAWo2AgggBkEQaiQADwsgBSADQcypwAAQuQEAC7kFAgl/AX4jAEHwAGsiAyQAIANBADYCECADQQA2AjggA0EIaiADQRBqIAJBA3YgAkEHcUEAR2ogBSACGxCTAQJAIAMoAggiBEGBgICAeEcEQCAERQ0BAAsgA0E4aiEKQQQhBwJ/IAMoAjgiBEEETQRAIANBGGohCSAKIQggBAwBCyADQRBqQQRyIQggAygCGCEJIAQhByADKAIUCyEGAkACQCAIIAYgB0kEfwNAIAJFDQIgAUEBayEEIAJBCCACIAJBCE8bIgVrIQIgASAFaiEBQgAhDANAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsgCSAGQQN0aiAMNwMAIAZBAWoiBiAHRw0ACyAHBSAGCzYCACACRQ0BIANBEGpBBHIhBiADQRhqIQgDQAJAQQggAiACQQhPGyILRQRAQgAhDAwBCyABQQFrIQRCACEMIAshBQNAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsLAn8gAygCOCIHQQVJBEAgByEFIAghCUEEIQcgCgwBCyADKAIUIQUgAygCGCEJIAYLIQQgAiALayECIAUgB0YEQCADQRBqEKABIAMoAhQhBSADKAIYIQkgBiEECyABIAtqIQEgCSAFQQN0aiAMNwMAIAQgBCgCAEEBajYCACACDQALDAELIAggBjYCAAsgA0FAayIBIANBEGpBMBC+AhogAUEEciEKIANByABqIQYgA0HoAGohByADKAJIIQEDQCAGIQIgAygCaCIFIQQgBUEFSSIIRQRAIAMoAkQhBCABIQILAkAgBEUNACAEQQN0IAJqQQhrKQMAQgBSDQAgByEEIAhFBEAgAygCRCEFIAohBAsgBUUNASAEIAVBAWs2AgAMAQsLIAAgA0FAa0EwEL4CGiADQfAAaiQADwtB7PDAAEERQYDxwAAQ3gEAC5IFAQh/IwBB8ABrIgMkAAJAIAItADAiBUEBRgRAIAAgAUE4EL4CGgwBCwJAAkACQAJAAkACQCABLQAwIgZBAWsOAgABAgsgAigCKCIEQQRNBH8gAkEIagUgAigCBCEEIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgYgAiACIARBA3RqEEMgA0EQaiICIAZBMBC+AhogACACQTAQvgIiAEECIAVrOgAwIAAgAygAQDYAMSAAQTRqIANBwwBqKAAANgAADAQLIAVFDQEMAgsgBUUNAQsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAQgAhAUIAAgBiABEEIMAgsCQAJAAkACQCABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAsgBSACKAIoIgdBBE0EfyACQQhqBSACKAIEIQcgAigCCAsgBxCoAUH/AXEOAgECAAsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAIgBBAaIABBAiAGayABEEIMBAsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiAiADQQRqEDMgA0FAayIEIAJBMBC+AhogBEEEciEIIANByABqIQYgA0HoAGohCSADKAJIIQcDQCAGIQQgAygCaCICIQUgAkEFSSIKRQRAIAMoAkQhBSAHIQQLIAVFDQIgBUEDdCAEakEIaykDAEIAUg0CIAkhBSAKRQRAIAghBSADKAJEIQILIAJFDQAgBSACQQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const o = TC();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await YC(await i, o);
  return PC(t, e);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return AA(I - -273, g);
  }
  function e(g, c, I, s, C) {
    return AA(C - 405, I);
  }
  function A(g, c, I, s, C) {
    return AA(I - -85, s);
  }
  function n(g, c, I, s, C) {
    return AA(C - -701, c);
  }
  const r = i();
  function a(g, c, I, s, C) {
    return AA(I - -268, g);
  }
  for (; ; )
    try {
      if (-parseInt(t("MbV4", 248, 249, 251, 242)) / 1 + -parseInt(t("Fp[t", 238, 222, 210, 221)) / 2 * (parseInt(n(-168, "S0zk", -172, -179, -189)) / 3) + parseInt(t("V2kt", 235, 214, 223, 235)) / 4 + parseInt(A(422, 435, 443, "Pz9E", 428)) / 5 + -parseInt(a("&vnI", 246, 243, 231, 220)) / 6 * (-parseInt(e(902, 918, ")H9r", 922, 908)) / 7) + parseInt(a("sKBh", 255, 259, 241, 271)) / 8 + -parseInt(n(-155, "4X5*", -163, -157, -171)) / 9 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(cn, -3 * 130073 + 447976 + 277524);
function gi(i, o, t, e, A) {
  return AA(t - -696, i);
}
function xo(i, o, t, e, A) {
  return AA(i - 212, o);
}
function _C(i, o, t, e, A) {
  return AA(e - -442, o);
}
function AA(i, o) {
  i = i - (3391 * 1 + 2659 + -1 * 5563);
  const t = cn();
  let e = t[i];
  if (AA.HulQLG === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    AA.tdcBqW = g, AA.ZaFBbD = {}, AA.HulQLG = !0;
  }
  const n = t[-294 * -7 + 4364 * -2 + 2 * 3335], r = i + n, a = AA.ZaFBbD[r];
  return a ? e = a : (AA.ZNUYHh === void 0 && (AA.ZNUYHh = !0), e = AA.tdcBqW(e, o), AA.ZaFBbD[r] = e), e;
}
function cn() {
  const i = ["zZ7dVfZdPaVcRc9jW4lcUCkD", "mSoPA8kvoG", "wSk9EcZcGwFdUmkjlgDWhW", "q8k5p8oa", "W580W5NcSCkj", "WPH+WRa6c1hcQSkFW4awnmkCnW", "w8oxWPpcOCk7W6FdNCoIWOpdLeTEza", "WRJdPx1cW6i", "pwu0WOK5eLOCaYhcUKhcGW", "phVcNqxcRG", "WOqqkGJdQa", "fsJdNXhdJW", "vNJcN0JcTmkcWRKNW5ZdUIycvq", "W5tdLSkUlCoc", "jCkNWRf+WRtcMCkwW7i", "WPVcHmoRD8k5sMHAWPJcNCkVmW", "Amk4W696WPq", "uCk5DYlcHMdcHmkvbfDnhSk4", "aCofW4xdU8oU", "vSk+WRFcQXG", "W6tdQM/dNXi", "W7dcLdHWyq", "WOWkjqJdTa", "WQSPhCkfg2pcLCk7bmoovq", "vSkYWQZcVrK", "WOZdImoBW5mn", "WQWyDSokW4RcS3mqW4NdRSkg", "WQxcVmoUkCkq", "W59iEL/cO8kuW5blWRtcII7dRq", "W6tcUJKFWPBdRCkPud9e", "W580W5FcQSof", "WO/dQr/dM2vzauvYW7OH", "W51klmoZqq", "ASk6nCojDJ/cLSkzWOrhmrWl", "dmkLBSkUfW", "owhcSahcUq", "W7r3uCoEqG", "W7RdUWJdKs4", "WOWSW6TRwG", "q0ddJ0S2cCoyBuddGW", "WPT5dmoVWP1HhCoM", "eSoLn8oVqSkpW5HMW7u9WOO", "CGHaWOnT", "W7nbm8kwWPW", "umkkmtqP", "uhxcLZ7dSW", "W6RcLd53", "Etn+W51f", "zHfmWOj3", "W7JcKw05xG"];
  return cn = function() {
    return i;
  }, cn();
}
function HC(i, o, t, e, A) {
  return AA(e - 757, o);
}
function Ct(i, o, t, e, A) {
  return AA(i - 36, t);
}
class KC {
  [Ct(569, 549, "przE") + Ct(528, 511, "AxD0") + xo(721, "%9j!")] = !1;
  async [xo(737, "QjqE")](o) {
    function t(a, g, c, I, s) {
      return gi(c, g - 468, g - 689);
    }
    function e(a, g, c, I, s) {
      return xo(I - 356, g);
    }
    function A(a, g, c, I, s) {
      return Ct(I - 194, g - 57, s);
    }
    function n(a, g, c, I, s) {
      return gi(I, g - 173, s - 721);
    }
    function r(a, g, c, I, s) {
      return Ct(c - -990, g - 233, g);
    }
    try {
      const a = o + (t(483, 499, "^3Ut", 512, 476) + "/") + Ua;
      await z0(a), this[e(1104, "V2kt", 1099, 1103, 1078) + e(1105, "t7o)", 1105, 1084, 1109) + e(1099, "M(cE", 1092, 1085, 1089)] = !0;
    } catch {
      this[t(502, 492, "[(dz") + t(507, 508, "8%[E") + n(499, 539, 532, "1uw(", 521)] = !1, console[t(505, 511, "^AP$")](Ua + (A(751, 757, 710, 734, "kTI5") + r(-438, "o]9H", -457) + n(526, 538, 508, "2oW[", 519) + t(508, 519, "2AgL") + e(1100, "^AP$", 1084, 1089) + t(496, 484, "1uw(") + e(1096, "sKBh", 1053, 1078) + r(-467, "Pz9E", -464) + r(-463, "iN$0", -440) + A(729, 728, 737, 750, "iN$0") + r(-427, "2AgL", -452) + A(752, 735, 753, 759, "7fNc") + n(532, 564, 556, "2oW[", 557) + A(742, 718, 738, 723, "^AP$") + "n."));
    }
  }
  [_C(97, "MbV4", 75, 89) + Ct(524, 547, "nSMG") + gi("*DIY", -189, -173) + "ed"]() {
    function o(A, n, r, a, g) {
      return Ct(a - 493, n - 21, r);
    }
    function t(A, n, r, a, g) {
      return xo(a - -882, g);
    }
    function e(A, n, r, a, g) {
      return HC(A - 27, n, r - 19, A - -392);
    }
    return this[e(884, "4X5*", 904) + o(1021, 1039, "Fp[t", 1037) + t(-155, -168, -186, -163, "MbV4")];
  }
}
class si extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function V(i, o) {
  i = i - (-6961 * -1 + 3560 * -2 + 518);
  var t = In(), e = t[i];
  if (V.ItPWPm === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, x, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (var l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    V.dHiMhp = n, V.wEmxih = {}, V.ItPWPm = !0;
  }
  var r = t[-9028 * -1 + -1608 + -7420], a = i + r, g = V.wEmxih[a];
  return g ? e = g : (V.mLNlCt === void 0 && (V.mLNlCt = !0), e = V.dHiMhp(e, o), V.wEmxih[a] = e), e;
}
function In() {
  var i = ["W5JdO8oWySksWR8lW7W", "vh4fWQ1a", "WRiBWPhdI3C", "W53dIt9yWPXvm8kXDIiEFG", "sSkOCa", "W6i8W4m", "W5JcK8kiFCk5sCk2W45FW6tcG8oO", "W7DBW4bGaG", "W6/cSgnuWR8", "gvtdU2/cSG", "WQhcHCkwW7qD", "WRldSLTshqLrWR8", "WOtcGCox", "E8kxW43cGmk6W67dUmoPqZWfaW", "A8k4b27dLCoFqCoHW4FdHMvxqq", "W7fFWQiKqa", "BSk4c2BcGSkvhCovW4ddHa", "WPHnW63cTCkqh3Gz", "kSofWOhdLmoG", "WOddGstdRZ4uheldMSk7WQqJ", "jxatv1y", "waKVW4/cRa", "t8kYsW4z", "uvjccSk0", "WRahW4/dKtZdQmorWQhdMSkeWQ3cVa", "fXFdPa", "W6e+W4i", "dXVdR8keW60", "WP/cL8oYwCoZ", "W7rmW5n7bq", "WOFcGWqgW7hcLSo6ua4OW4VcJW", "ACk7AZRcRCkbomog", "isukkqhdRbJdS3/dRa", "W6pcT3HQfG", "W5ZdNmk6", "wvbDeq", "WP/cISodFCoX", "rCk5W6ZdICox", "zuaAW7CMWOldNLT3hHeF", "iSknASoXuG", "W4CyW6S", "emkHsGqCwuGm", "WOJcP8oBESk8", "WOTUWOrtWOu", "xfTF", "WRWfW47dLdJdQSo/WQxdH8k0WRhcNW", "W4ldL8kDcmomxZiMlCon", "pgiawKS", "WOfYWPfoWPm", "eCo1W4ddQLe", "o2i1s14", "W5yMWOrTWO1uW6rK", "C8kwW4hcJ8kXW6xcVCoSAHG9jCoe", "jHrCWQL8", "W6BcOhzTea", "W51bWO/dJMe", "rCogutO8WQRcNeO", "vu5udmkP", "v8ojW7FdPrO", "hCkEeW", "W5PlWPK", "WP9pWRFdNmkxjwCZwxe", "W71EWO7cJwu", "W5tdT11uWQa", "WPKUnmovzJqovG", "iHPa", "cSorW5RdQfS", "W5ldI8kNqCou", "W5H7jCotzq", "W6NcQNLAcG", "W41deW", "wrSAW4lcPq", "uX0OW5JcQW", "W6GCW5/dHKi", "WOlcV8ont8k9", "nhqatuO", "W6/cT2nWcW", "W7PmWRK0wW", "W5/dS8orvsC", "WOtcGCofvmol"];
  return In = function() {
    return i;
  }, In();
}
function $A(i, o, t, e, A) {
  return V(t - -57, o);
}
function Pt(i, o, t, e, A) {
  return V(A - -638, t);
}
function ci(i, o, t, e, A) {
  return V(o - 159, t);
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return V(a - -950, I);
  }
  function e(a, g, c, I, s) {
    return V(s - -153, g);
  }
  function A(a, g, c, I, s) {
    return V(c - -144, s);
  }
  for (var n = i(); ; )
    try {
      var r = parseInt(e(276, "e#Vl", 223, 282, 248)) / 1 * (parseInt(A(239, 223, 223, 216, "ASlp")) / 2) + -parseInt(e(229, "6P3F", 204, 243, 213)) / 3 + -parseInt(t(-577, -608, -544, "c2wF", -600)) / 4 + parseInt(t(-532, -565, -521, "Lis$", -554)) / 5 * (parseInt(A(232, 259, 263, 244, "[7qd")) / 6) + parseInt(A(272, 249, 270, 237, "c2wF")) / 7 + parseInt(A(248, 217, 238, 242, "Lis$")) / 8 * (parseInt(A(250, 308, 268, 289, "DDpo")) / 9) + -parseInt(t(-546, -566, -534, "]X1p", -583)) / 10 * (-parseInt(A(189, 242, 218, 191, "E5M$")) / 11);
      if (r === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(In, -442462 * -1 + -78816 + -118576);
function Eo(i, o, t, e, A) {
  return V(A - 447, t);
}
function ge(i, o, t, e, A) {
  return V(A - 113, i);
}
class Ka {
  constructor(o) {
    function t(a, g, c, I, s) {
      return V(I - -192, c);
    }
    function e(a, g, c, I, s) {
      return V(I - -344, a);
    }
    function A(a, g, c, I, s) {
      return V(c - 379, I);
    }
    this[r(624, 625, 645, "WltS") + r(619, 671, 657, "maM[")] = o;
    function n(a, g, c, I, s) {
      return V(I - -544, g);
    }
    function r(a, g, c, I, s) {
      return V(c - 235, I);
    }
    try {
      this.#A = o[r(652, 635, 665, "SRq0", 704) + t(221, 174, "01%a", 207, 223) + t(151, 196, "Ry]7", 188, 179)] && JSON[t(241, 254, "g&@S", 217, 189)](o[e("DDpo", 26, 4, 31, 13) + t(184, 189, "p!Fm", 197, 225) + r(611, 629, 621, "[DEp", 596)]), this.#e = o[e("maM[", 42, 26, 49, 29) + A(849, 810, 814, "8pBk", 797)];
    } catch (a) {
      console[n(-98, "kTvm", -98, -108)](a);
    }
  }
  #A;
  #e;
  get [$A(367, "ASlp", 372) + "id"]() {
    function o(e, A, n, r, a) {
      return $A(e - 45, A, r - 38);
    }
    function t(e, A, n, r, a) {
      return $A(e - 24, r, n - 746);
    }
    return this[t(1089, 1074, 1077, "8pBk") + o(365, "c2wF", 362, 400)][o(385, "TFRH", 384, 404) + t(1071, 1066, 1094, "TFRH")];
  }
  get [$A(353, ")WAH", 354) + "s"]() {
    function o(A, n, r, a, g) {
      return $A(A - 345, r, n - -47);
    }
    function t(A, n, r, a, g) {
      return $A(A - 367, a, g - -189);
    }
    function e(A, n, r, a, g) {
      return ci(A - 410, r - 728, A);
    }
    return this[t(191, 197, 155, "DDpo", 188) + e("WalU", 1314, 1274)][o(297, 304, "SRq0") + "s"];
  }
  get [ge("[DEp", 469, 468, 512, 487) + Pt(-249, -185, "yd[W", -249, -211)]() {
    function o(A, n, r, a, g) {
      return $A(A - 469, a, A - 887);
    }
    function t(A, n, r, a, g) {
      return ge(g, n - 357, r - 406, a - 72, a - -967);
    }
    function e(A, n, r, a, g) {
      return Pt(A - 110, n - 152, A, a - 451, r - 51);
    }
    return this[e("#OsB", -162, -171, -135) + e("#OsB", -153, -189, -192)][o(1251, 1276, 1244, "(I3n") + t(-476, -441, -498, -473, "I2MF")];
  }
  get [ge("ChJX", 450, 465, 485, 473) + "b"]() {
    return this.#A;
  }
  get [Eo(779, 836, "e#Vl", 820, 810) + $A(384, "yd[W", 349)]() {
    return this.#e;
  }
  get [ge("maM[", 493, 511, 497, 505) + ge("5n*a", 447, 507, 483, 477) + ge("WalU", 490, 459, 478, 483) + ge("BzHV", 568, 569, 577, 539)]() {
    function o(n, r, a, g, c) {
      return Eo(n - 238, r - 418, c, g - 208, g - -86);
    }
    function t(n, r, a, g, c) {
      return ge(n, r - 415, a - 96, g - 95, a - -1046);
    }
    function e(n, r, a, g, c) {
      return Pt(n - 218, r - 36, a, g - 390, n - 1167);
    }
    function A(n, r, a, g, c) {
      return Pt(n - 344, r - 267, c, g - 260, a - 275);
    }
    return !!this.#A?.[e(925, 914, "(I3n", 900) + o(760, 747, 809, 774, "ASlp")]?.[e(929, 959, "ASlp", 916) + t("e#Vl", -563, -538, -570) + A(49, 48, 61, 30, "kTvm") + t("w4@o", -562, -554, -565) + t("DDpo", -562, -536, -572) + A(-1, 16, 21, -18, "zV%Q") + o(755, 709, 718, 722, "Lis$")];
  }
  get [ge("(I3n", 486, 523, 459, 484) + $A(339, "(I3n", 311) + $A(368, "DDpo", 333) + $A(330, "6P3F", 326) + ci(582, 553, "yd[W") + Pt(-283, -276, "kTvm", -292, -273)]() {
    function o(n, r, a, g, c) {
      return Eo(n - 379, r - 167, r, g - 199, n - 275);
    }
    function t(n, r, a, g, c) {
      return Eo(n - 47, r - 171, g, g - 227, c - -1251);
    }
    function e(n, r, a, g, c) {
      return ge(r, r - 218, a - 393, g - 421, n - 591);
    }
    function A(n, r, a, g, c) {
      return ci(n - 212, a - 583, g);
    }
    return !!this.#A?.[t(-466, -454, -397, "5n*a", -435) + e(1095, "[@z$", 1062, 1077)]?.[e(1107, "71l7", 1146, 1094) + o(1098, "I2MF", 1115, 1110) + o(1160, "sklr", 1176, 1120) + e(1132, "BzHV", 1172, 1094) + A(1105, 1118, 1120, "kTvm") + o(1159, "ASlp", 1178, 1137) + t(-426, -432, -441, "5m0Q", -402)];
  }
}
function eA(i, o) {
  i = i - 436;
  const t = Cn();
  let e = t[i];
  if (eA.aApaEy === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    eA.TFjGcY = g, eA.trGjep = {}, eA.aApaEy = !0;
  }
  const n = t[-14 * -456 + 9216 + -15600], r = i + n, a = eA.trGjep[r];
  return a ? e = a : (eA.ZxiBHG === void 0 && (eA.ZxiBHG = !0), e = eA.TFjGcY(e, o), eA.trGjep[r] = e), e;
}
(function(i, o) {
  const t = i();
  function e(a, g, c, I, s) {
    return eA(I - 196, c);
  }
  function A(a, g, c, I, s) {
    return eA(g - -249, a);
  }
  function n(a, g, c, I, s) {
    return eA(a - 820, c);
  }
  function r(a, g, c, I, s) {
    return eA(g - -174, s);
  }
  for (; ; )
    try {
      if (parseInt(r(477, 393, 493, 498, "T2p[")) / 1 + parseInt(r(351, 436, 521, 433, "Xf^I")) / 2 + parseInt(n(1431, 1481, "B!Lu", 1496, 1493)) / 3 * (parseInt(n(1380, 1302, "fgp8", 1340, 1388)) / 4) + -parseInt(r(336, 299, 264, 389, "T2p[")) / 5 * (parseInt(A("lmqj", 416, 488, 458, 348)) / 6) + -parseInt(r(300, 394, 305, 495, "fuZ&")) / 7 + parseInt(e(730, 662, "pNp]", 673, 564)) / 8 * (parseInt(e(753, 772, "3kiH", 731, 750)) / 9) + parseInt(n(1395, 1352, "aXX#", 1376, 1427)) / 10 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Cn, -23 * 36979 + 2 * 97323 + 1220428);
function mA(i, o, t, e, A) {
  return eA(A - 280, i);
}
function Cn() {
  const i = ["emoshCkBW5a", "W4y0WO3dSKq", "sSknD8ofW7W", "Bw0fxSkZysVcPSo9WORdRHS", "W6enymkAWRa", "W6vbW7mMWQy", "FuZcRmoMW7BcP8oQaW", "hCkVaSowha", "wmkrWP/cTSkQy8opWOLM", "W75DWPhdUI8", "yCkygthdGW", "fSouhq", "w0NcHSkrW6G", "bxZdGNL1", "ESoHWPimcW", "xgpcGSo2eG", "n8ksWQZcP8oy", "bCohW53cMmkJ", "cMZdVWq4", "W6PkWPRcOG", "o8o7omkpW7C", "aJPeaSkR", "b27dUq", "EMhcSCkm", "W7GayWSj", "W6pcGSkIExC", "sG8bp8oU", "gse9dSok", "W4ldGSkJtuC", "WR0BW4VdOctdV8obFSoW", "xwe5W4y0", "W4WXCvPi", "WRVcL8kkxCot", "W4VcGrddLmo3W7e8W61X", "B3dcOCkl", "z3qhDCo6", "W4xdImkRwea", "ir/cSmoA", "WOFcG2FdHb4", "WP1QkeOG", "bWymomoU", "W447CxXn", "w8kyymo6W7a", "kmoIgmomsG", "W6ynqmk3WRK", "uLtcK8k7W6G", "pCoBcNu", "W4LVW5nLWOi", "cYtcT8o8W4C", "W4nRW4nIWO8", "yN4Bq8o+", "W683t0Xm", "W7lcHmk8C2e", "W7KoEq", "W68qu8k8WOC", "objzbSo/", "lXhcT8oaW4C", "W6e0WO3dR0G", "p8kpWOlcNCoU", "W67dNmkBDM0", "W7FdTfrb", "p8oMhSo7qa", "WOxcTKWVaq", "sNujWRP+", "WQjHW4RdSe/cK8krWP9c", "cqOloCoL", "WPf4W5RdJ2W", "sCkCDSoTW7a", "W7ddRui", "WQRcLKRdSmo1", "buJdPKTT", "q8o6WRCrxa", "tYGCewy", "bu/dUKXX", "WRLEW63cIK4", "W6LkWORdHde", "otjucSoL", "EhSnW4iP", "W57dU8kIBau", "WPJcQCkSwCoe", "WPNcJCkV", "W57dImkgDX4", "iCkZWQm", "WQ5UmLe", "BZuZhwS", "W4FdGSk/Ffq", "tSklymoMW6C", "hL3cM8klW7q", "WPzUmLOT", "WPDRnq", "hfxdTHuN", "oZBdSCokuxynWPVdM8k5WOO", "w2tdNIa", "uhFdKIS", "W69HWODcWQu", "WRJcQCkSwCoe", "xhRdLXyv", "qwFcGG", "WOBdOaLIDW", "WPVcSf0", "FmkyymoNW7W", "sZ0Kg20", "sbCilfy", "WOhcVLSPbW", "u8ofW40", "yx8Ay8k/", "W4mWWOZdQue", "WQ4wv2ldOG", "pCoTgCoAdW", "pCkAWRhcRmkY", "WPNdRGH4Ca", "WRLEW6O", "rCoqWQWWja", "eWytmmoo", "zxiD", "W4JdG8kRvG", "WQ4Ppmkrg09jWRa", "WQddOfPsvG", "f8oZW67cQ8k7", "n8kUWRBcHCkK", "W61DWPhdVZu", "W6hdOunJWOC", "W6lcLCk2D3a", "WR0xW4ZcUxhcL8oKzmoyWOb5sq", "WQ7cP8oDc1GYW6ridxtcJ8kHWRm", "W6yaEWef", "WRbzW73cIGa", "nmoSdCo6xq", "yWCtWPfq", "yCk2bXtdVq", "W7xdPSkKvG8", "jZHQWPjVDsTIndtdUmoeqW", "WR/dGSkXW6iY", "W59KWPBdGb4", "cLpdQL1W", "W4C0WPpdTuK", "iCk7WQtdOCk+", "W6dcLCkKDw0", "tCoqW5DiW70", "chNdIHu7", "W6pcNSkJC1u", "EwCPW5C0", "oCk+etBdSW", "W7vbEqCv", "W7z1imk3", "W6Cazqyi", "W4FdImkStua", "W7zOfSk1oq", "WRfyW7RcQK0", "BmoHWQi4dW", "WR3cRSkPuW", "W4HTW4jOWPK", "BSklymoMW6C", "WOnxW6qb", "fHChmCoU", "W4pcGSkIExC", "iHhcRCkuW5W", "W7JdO0iloG", "WRdcR8k7ECoh", "aCojW44", "oCkgW4xcKSkO", "W6dcN8kLEge", "b07dOuS", "WRpcPCk7Cmod", "a8obW5O", "W7OWWO7dVmkl", "DeJdQ8kfWO3dUSowoKeIW7m0", "BmotW7xdOmkya8o/W685WQ/cQSkX", "hCoif3nr", "vhxdNISd", "W6TDWOZdOZq", "tcCiWQz5", "WQxcTKWVaq", "WPtcN8o1cWtcUsLKrCoOWPO", "yM4cw8k/y0xcUmoiWQpdIYldPq", "W7u6WOpdRSkA", "WOJcL8kUW78+", "CftdLmk6W5u", "cMZdVqea", "uCowW7jpW6O", "W4RcMCkZC2S", "hIRcVmoUW6C", "CSo0WRy5hq", "rhxcMCoHba", "oZmalCon", "dX0zo8ou", "uaRcUqKRqmk0W6NcG0JdGCkNW5e", "FmoSW6ldTmoGuavcW7lcNSonW40", "sJi1vMK", "ndHd", "W43dHmkUxfS", "jCoJdmknW6S", "WOFcI8k+W64/", "y2hcUW", "WOJcJCkZW78J", "WOldPGbZFq", "oSktWQBdUSoh", "W7z6jCkQiG", "BwhcP8klbq", "uY45fNe", "vCkFWP3dG8o/qSojWQHMW7FcTa", "W6KKASksWP4", "dmosW4ZcNW", "W4lcI3VdLca", "WPZcTSkYW6CM", "dSopdwLk", "bxhdSXy/", "W4ldImkJsLa", "nmoQemoAsW", "u3hdIa", "efVdPvf6", "WORcRua5ha", "h8ojW5S", "WQesv0xdPq", "lWZcTSohW4y", "WOFdOrnI", "bmojW4C", "D8o+WQOpgq", "WO7cGNm", "tNNdLq", "h8owhCk0W5e", "WPNcLmo5aqhcLbr8rSobWPm", "Fmo6WRaFfa", "W7yoyGyf", "W6CVu1b9", "WRLyW6NcQLi", "WOZdK1xdHSo8", "nmo4hCkgW4m", "W61NW4rJWOq", "W7RdOmkhtb8", "pb/cQ8ohW5a", "WPRdK0ddUmoJ", "W7z1l8kS", "cSoFcL5q", "EwKUW4aY", "W7ldSKGwoG", "W7G2WPNdTmkE", "WOTaW6KCCW"];
  return Cn = function() {
    return i;
  }, Cn();
}
function lA(i, o, t, e, A) {
  return eA(o - 906, i);
}
function aA(i, o, t, e, A) {
  return eA(o - 792, t);
}
function JA(i, o, t, e, A) {
  return eA(t - -820, i);
}
function q(i, o, t, e, A) {
  return eA(e - -398, t);
}
class jC {
  constructor(o) {
    function t(e, A, n, r, a) {
      return eA(a - -439, n);
    }
    this[t(151, 58, "NFcZ", 141, 153) + t(25, 120, "bxa[", 184, 72) + "d"] = o;
  }
  [mA("rNlS", 723, 785, 726, 819) + "se"];
  [JA("lmqj", -233, -340) + q(273, 60, "fuZ&", 176) + q(198, 5, "UaHN", 84) + lA("3kiH", 1384)] = [q(297, 237, "fx0#", 188) + q(222, 335, "7enD", 234) + "ic", JA("dxq1", -394, -350) + lA("B!Lu", 1546) + "ic"];
  [aA(1524, 1465, "fuZ&") + JA("aXX#", -465, -380)];
  async [q(78, 143, "fgp8", 190)](o) {
    const t = await this[A(1679, 1609, 1653, "hcu*") + A(1661, 1580, 1671, "LxOe") + a("064f", 69, 134)](o);
    await Promise[e(1328, 1437, 1372, 1430, "%nNV") + r(-320, -161, -226, "6(g4", -274)]([this[A(1623, 1563, 1546, "rNlS") + r(-181, -283, -184, "dxq1", -286) + "d"][r(-1, -88, -204, "Pw7a", -111)](o), this[n("rjLK", -343, -291, -260) + n("4r3n", -236, -333, -122) + "e"](t)]);
    function e(g, c, I, s, C) {
      return q(g - 56, c - 151, C, c - 1295);
    }
    function A(g, c, I, s, C) {
      return aA(g - 232, c - 169, s);
    }
    function n(g, c, I, s, C) {
      return mA(g, c - 277, I - 16, s - 111, c - -1111);
    }
    function r(g, c, I, s, C) {
      return q(g - 89, c - 107, s, C - -372);
    }
    function a(g, c, I, s, C) {
      return JA(g, c - 50, I - 427);
    }
    this[a("sd)s", 264, 176) + n("UxVt", -266, -181, -385) + r(-27, -110, -206, "$rkP", -109)]();
  }
  async [lA("JsYz", 1391) + q(-36, 14, "aXX#", 76) + "se"](o) {
    function t(a, g, c, I, s) {
      return lA(g, s - -1560);
    }
    function e(a, g, c, I, s) {
      return aA(a - 130, I - -1590, a);
    }
    function A(a, g, c, I, s) {
      return aA(a - 470, a - -488, g);
    }
    function n(a, g, c, I, s) {
      return q(a - 56, g - 192, a, s - -266);
    }
    function r(a, g, c, I, s) {
      return aA(a - 335, g - -572, c);
    }
    try {
      if (t(-160, "pBc]", -74, -55, -82) !== t(-70, "7enD", -207, -163, -108)) {
        const a = await fetch(o);
        if (!a.ok) {
          if (r(688, 803, "iTTM", 707, 741) === e("$rkP", -288, -320, -340, -271)) throw new Error(n("4r3n", -316, -305, -159, -215) + e("R%QH", -85, -86, -197, -202) + t(26, "sd)s", -42, -143, -67) + A(835, "GoSo", 895, 886, 927) + "d.");
          _0x48ca75[t(-229, "bxa[", -102, -153, -124)](_0xd660a0);
        }
        this[t(-70, "&Ocs", -54, -70, -76) + "se"] = await a[e("3kiH", -386, -411, -331, -449)]();
      } else return this[r(785, 784, "T2p[", 843, 714) + r(808, 884, "iaN4", 892, 913)];
    } catch (a) {
      e("iaN4", -53, -157, -163) !== r(805, 845, "Xf^I") ? _0x4464b4[e("UaHN", -35, -76, -136)]() : (this[A(933, "3GkX") + "se"] = void 0, console[e("rjLK", -214, -264, -300)](a));
    }
  }
  async [mA("iTTM", 973, 930, 859, 902) + lA("%nNV", 1519) + "e"](o) {
    function t(a, g, c, I, s) {
      return q(a - 342, g - 455, I, g - -398);
    }
    function e(a, g, c, I, s) {
      return lA(s, g - -1012);
    }
    function A(a, g, c, I, s) {
      return mA(I, g - 477, c - 220, I - 31, g - -1272);
    }
    this[r(-230, "pBc]", -179) + n(889, 1016, "4r3n", 947)] = void 0;
    function n(a, g, c, I, s) {
      return JA(c, g - 208, I - 1276);
    }
    function r(a, g, c, I, s) {
      return q(a - 327, g - 447, g, c - -396);
    }
    if (!o)
      if (e(250, 342, 265, 257, "rjLK") === A(-567, -490, -372, "B!Lu")) {
        console[n(832, 820, "fgp8", 894)](t(-311, -235, -332, "Pw7a") + t(-172, -192, -79, "fNoM") + e(484, 464, 460, 387, "NFcZ") + t(-297, -343, -390, "T2p[") + r(-317, "T2p[", -331)), this[A(-468, -358, -465, "lmqj") + "se"] = void 0;
        return;
      } else throw new _0x2cb9bc(A(-265, -371, -426, "GoSo") + t(-124, -220, -311, "M2iR") + t(-333, -244, -209, "^p&]") + A(-355, -325, -298, "sd)s") + ".");
    await this[A(-405, -411, -366, "6(g4") + e(530, 566, 542, 588, "4r3n") + "se"](o);
  }
  async [JA("iaN4", -440, -376) + JA(")(]*", -300, -341) + mA("NK##", 767, 778, 682, 770)](o) {
    const t = await fetch("" + o + this[n(407, 514, "pNp]") + r(992, "7enD", 991, 909, 931) + n(685, 661, "6(g4") + r(1106, "YiBv", 1098, 989, 1012)][0]);
    function e(a, g, c, I, s) {
      return q(a - 47, g - 46, c, s - -519);
    }
    const A = t.ok ? 1415 + -317 * 7 + 804 : 5 * 1933 + 7468 + -8566 * 2;
    function n(a, g, c, I, s) {
      return lA(c, g - -829);
    }
    function r(a, g, c, I, s) {
      return lA(g, s - -491);
    }
    return "" + o + this[e(-289, -393, "6(g4", -435, -351) + r(1088, "MqJs", 999, 1097, 1038) + n(582, 661, "6(g4") + e(-228, -289, "&Ocs", -429, -311)][A];
  }
  [aA(1448, 1404, "NK##") + aA(1402, 1391, "6(g4") + "s"](o) {
    function t(e, A, n, r, a) {
      return aA(e - 98, a - -1132, A);
    }
    o[t(202, "$rkP", 172, 218, 286) + "ch"]((e) => console[t(268, "UxVt", 194, 263, 164)](e));
  }
  [q(234, 216, "7enD", 245) + aA(1393, 1336, "bxa[") + mA("tIKH", 804, 842, 768, 806)](o) {
    function t(e, A, n, r, a) {
      return mA(n, A - 430, n - 121, r - 77, e - 447);
    }
    o[t(1256, 1170, "lmqj", 1335) + "ch"]((e) => console[t(1321, 1332, "rNlS", 1311)](e));
  }
  [lA("D]lY", 1563) + aA(1255, 1329, "%nNV")]() {
    function o(e, A, n, r, a) {
      return mA(A, A - 8, n - 362, r - 46, r - 715);
    }
    function t(e, A, n, r, a) {
      return mA(n, A - 307, n - 424, r - 209, A - -210);
    }
    return window[t(491, 532, "iTTM", 428) + t(570, 567, "sd)s", 449)][o(1542, "aXX#", 1678, 1580) + o(1538, "R%QH", 1602, 1507)];
  }
  [aA(1422, 1446, "&Ocs") + JA("bxa[", -286, -374) + aA(1226, 1275, "064f")]() {
    function o(r, a, g, c, I) {
      return mA(r, a - 126, g - 398, c - 316, c - -79);
    }
    function t(r, a, g, c, I) {
      return mA(I, a - 4, g - 196, c - 236, g - 583);
    }
    function e(r, a, g, c, I) {
      return q(r - 190, a - 102, I, c - 18);
    }
    function A(r, a, g, c, I) {
      return q(r - 14, a - 313, r, a - 915);
    }
    function n(r, a, g, c, I) {
      return JA(r, a - 134, a - 39);
    }
    try {
      if (e(92, 54, 168, 96, "rNlS") !== e(71, 194, 10, 84, "iaN4")) {
        if (!this[e(167, 123, 95, 138, "NFcZ") + "se"])
          throw o("JsYz", 757, 758, 869, 930) !== e(82, 46, 136, 123, "lmqj") ? new _0x4c3ce4(e(52, 65, 65, 130, "NFcZ") + n("YiBv", -338, -271, -454, -409) + t(1341, 1354, 1370, 1310, "pBc]") + o("UaHN", 780, 826, 848, 756) + "d.") : new si(t(1322, 1325, 1401, 1406, "4r3n") + t(1372, 1293, 1376, 1300, "pNp]") + t(1334, 1500, 1412, 1367, ")(]*") + o("6(g4", 803, 886, 806, 711) + ".");
        if (!this[A("JsYz", 992, 989, 980, 907) + o("4r3n", 762, 631, 694, 666) + "d"][n("aXX#", -260, -197, -217, -160) + o("ci7N", 809, 716, 700, 795) + A("fgp8", 1158, 1069, 1245, 1124) + "ed"]()) {
          if (n("3GkX", -310, -220, -352, -383) === e(162, 65, 66, 182, "fNoM")) throw new si(o("ci7N", 589, 739, 666, 595) + o("tIKH", 867, 872, 781, 778) + n("LxOe", -339, -456, -298, -374) + t(1624, 1528, 1515, 1445, "^p&]") + ".");
          _0x2e9432[t(1299, 1391, 1357, 1436, ")(]*") + "ch"]((r) => _0x511c32[n("lmqj", -222, -183, -130, -121)](r));
        }
        this[e(6, -53, 80, 61, "R%QH") + o("0D80", 715, 761, 748, 698)] = new Ka(UC(this[t(1336, 1372, 1369, 1282, "0D80") + "se"], this[n("^p&]", -276, -248, -192, -273) + e(170, 176, 156, 101, "Xf^I")]())), this[t(1532, 1502, 1420, 1495, "3GkX") + A("bxa[", 1113, 1186, 1079, 1089) + "s"](this[t(1271, 1381, 1377, 1306, "&Ocs") + A("064f", 1049, 1137, 1086, 1022)][n("T2p[", -167, -69, -156, -241) + "s"]), this[t(1362, 1375, 1445, 1492, "MqJs") + o("*!nn", 620, 580, 646, 565) + e(333, 213, 281, 228, "fNoM")](this[e(169, 14, -12, 80, "B!Lu") + A("$rkP", 1183, 1126, 1164, 1110)][n("sd)s", -192, -91, -230, -125) + A("%nNV", 1170, 1056, 1072, 1172)]);
      } else
        return this[n("*!nn", -280, -217, -380, -263) + o("6(g4", 943, 708, 825, 758) + "se"]()?.[o("Xf^I", 622, 588, 701, 727) + e(98, 121, -21, 75, "iaN4")]?.[t(1288, 1489, 1380, 1333, "&Ocs") + n("lK9B", -240, -261, -230, -171)];
    } catch (r) {
      if (o("rjLK", 812, 958, 846) !== t(1432, 1217, 1320, 1420, "&Ocs")) throw new _0x97f283(t(1332, 1458, 1378, 1337, "$rkP") + A("Xf^I", 1117) + o("HQgq", 538, 537, 652) + n("Pw7a", -142) + ".");
      {
        if (r instanceof si) A("fx0#", 971) !== o("iTTM", 798, 703, 735) ? r[n("fNoM", -178)]() : (this[t(1305, 1253, 1372, 1409, "dxq1") + "se"] = void 0, _0x4e800f[A("rjLK", 1015)](_0x42f326));
        else if (r instanceof Error) {
          if (e(235, 353, 362, 248, "3GkX") === A("iaN4", 1188)) return !!this[A("Xf^I", 1175) + e(170, 268, 190, 171, "D]lY")];
          console[t(1312, 1280, 1332, 1323, "6(g4")](r);
        }
        const a = {};
        a[A("fgp8", 1108) + t(1313, 1489, 1418, 1445, "NFcZ")] = !1, a[A("GoSo", 973) + "s"] = [], a[t(1518, 1520, 1417, 1373, "Pw7a") + o("MqJs", 654, 734, 749)] = [], a[t(1515, 1388, 1453, 1348, "lmqj") + t(1489, 1572, 1533, 1572, "pNp]") + t(1499, 1431, 1526, 1506, "%nNV")] = void 0, a[e(239, 230, 47, 156, "%nNV")] = function() {
        }, a[e(199, 282, 339, 240, "M2iR") + A("3kiH", 1154)] = "", this[e(294, 370, 363, 275, "0D80") + e(98, 61, 79, 165, "7enD")] = new Ka(a);
      }
    }
  }
  [lA("fx0#", 1479) + q(333, 236, "lmqj", 253) + mA("*!nn", 744, 928, 837, 859) + aA(1441, 1438, "fNoM")]() {
    function o(t, e, A, n, r) {
      return q(t - 341, e - 485, A, e - -537);
    }
    return !!this[o(-166, -285, "iTTM") + o(-400, -474, "fNoM")];
  }
  [mA("rNlS", 890, 876, 950, 887) + q(225, 165, "3kiH", 244) + lA("*!nn", 1456) + "t"]() {
    function o(e, A, n, r, a) {
      return q(e - 60, A - 94, e, a - 1323);
    }
    function t(e, A, n, r, a) {
      return lA(A, n - -1620);
    }
    return this[o("Xf^I", 1502, 1533, 1615, 1583) + t(-270, "sd)s", -246)];
  }
  [JA("lK9B", -394, -361) + mA("0D80", 814, 973, 1012, 896) + "se"]() {
    if (!this[o(152, 254, 176, "ci7N") + "se"])
      if (o(154, 58, 44, "fuZ&") !== o(127, 128, 158, "JsYz")) _0x3608fd[t(546, 452, 505, 494, "^p&]") + A(400, 371, "fNoM", 489)](_0x444fbf);
      else return null;
    function o(r, a, g, c, I) {
      return lA(c, r - -1274);
    }
    function t(r, a, g, c, I) {
      return lA(I, g - -972);
    }
    function e(r, a, g, c, I) {
      return JA(I, a - 6, r - 264);
    }
    function A(r, a, g, c, I) {
      return mA(g, a - 198, g - 16, c - 484, a - -565);
    }
    function n(r, a, g, c, I) {
      return aA(r - 401, r - 127, a);
    }
    try {
      return t(571, 490, 511, 458, "T2p[") !== o(188, 239, 142, "$rkP", 205) ? null : JSON[t(494, 350, 421, 529, "^p&]")](this[A(274, 351, "M2iR", 253, 411) + "se"]);
    } catch (r) {
      if (A(268, 278, "tIKH", 170) === o(225, 244, 202, "$rkP")) {
        if (r instanceof Error)
          if (e(-64, -104, -18, -13, "Xf^I") === o(157, 189, 57, "fuZ&")) y[t(358, 474, 423, 404, "GoSo") + n(1462, "0D80")](r);
          else return _0xe99091[t(639, 559, 543, 577, "LxOe") + e(104, -2, 35, 43, "fNoM")][t(577, 367, 476, 430, "Pw7a") + n(1385, "iTTM")];
        return null;
      } else return _0x543343 instanceof _0x4c815b && _0x3b02ef[o(301, 314, 319, "NFcZ") + n(1443, "M2iR")](_0x1a791a), null;
    }
  }
  [lA("T2p[", 1425) + aA(1402, 1325, "064f")]() {
    function o(r, a, g, c, I) {
      return mA(r, a - 69, g - 7, c - 485, I - -209);
    }
    function t(r, a, g, c, I) {
      return lA(c, I - -1470);
    }
    function e(r, a, g, c, I) {
      return q(r - 163, a - 12, a, I - 1083);
    }
    const A = this[o("Xf^I", 428, 532, 576, 507) + n(-245, -253, -289, -185, "rNlS") + "se"]();
    function n(r, a, g, c, I) {
      return lA(I, r - -1674);
    }
    return A?.[e(1423, "M2iR", 1335, 1339, 1323) + t(18, 76, 145, "ci7N", 69)]?.[n(-141, -100, -221, -54, "lK9B")] || [];
  }
  [aA(1268, 1231, "NK##") + aA(1411, 1390, "dxq1") + q(86, 187, "tIKH", 155)]() {
    const o = this[A(994, 900, "bxa[") + t("7enD", 446, 345, 414, 358) + "se"]();
    function t(r, a, g, c, I) {
      return JA(r, a - 353, I - 650);
    }
    function e(r, a, g, c, I) {
      return JA(r, a - 159, c - 1733);
    }
    function A(r, a, g, c, I) {
      return aA(r - 469, r - -284, g);
    }
    function n(r, a, g, c, I) {
      return q(r - 468, a - 215, a, r - 1086);
    }
    return o?.[e("lmqj", 1485, 1367, 1385) + t(")(]*", 392, 431, 397, 388)]?.[n(1337, "NK##") + t("3kiH", 573, 490, 476, 467)];
  }
}
const $r = Se(void 0);
$r.displayName = "CommonConfigurationContext";
function X0() {
  const i = ne($r);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return yA(c - 400, s);
  }
  function e(g, c, I, s, C) {
    return yA(I - -334, C);
  }
  function A(g, c, I, s, C) {
    return yA(s - -649, C);
  }
  function n(g, c, I, s, C) {
    return yA(g - -503, s);
  }
  function r(g, c, I, s, C) {
    return yA(I - -239, g);
  }
  const a = i();
  for (; ; )
    try {
      if (parseInt(t(604, 598, 602, "%dM*", 592)) / 1 + -parseInt(n(-301, -298, -311, "oZy1", -301)) / 2 * (parseInt(r("4FRZ", -21, -32, -27, -34)) / 3) + parseInt(n(-303, -293, -294, "Pgvs", -293)) / 4 + parseInt(e(-127, -131, -131, -140, "iLMA")) / 5 + parseInt(r("rnGc", -26, -29, -38, -21)) / 6 + -parseInt(t(594, 597, 607, "q)bb", 591)) / 7 * (parseInt(A(-440, -433, -442, -437, "gGJm")) / 8) + parseInt(n(-297, -301, -297, "R^s*", -289)) / 9 * (-parseInt(n(-308, -300, -301, "6aK)", -302)) / 10) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Bn, -249811 + -5 * 33457 + -548323 * -1);
function Bn() {
  const i = ["dLqrgSomESkmW4BcTXBdNSo4", "n1ldOmk5WOTnW7b5oSomBG", "qCkPWQyrWRRdHIhcOCoUqIu", "dCokWQtdVdaJW4pcR8o/WOVcVa", "WOpdV3pdOe5yWRFcGCkmW6HPW4m", "W4SCBHzNW4L4WQTdF8kdaa", "WPH1WQmgW6RcNCowCmkgm8kaCq", "W4GHpbdcQJSzWOVdHG", "m8kuW4iqW6G+W74", "qmkHWQCrWR3cKqdcRSoSts7cMW", "z8k1W4G5W58", "WPOxW7L0WO7dRmou", "W4BdPqJcNCk6W4WgWRjz", "a8obi30px0dcRCoBaSk6sW", "dwBcSMfCWRPyvmkECJNcMG", "W4uAW4RcPNLkgHyo", "W4i7pSkqW4TMkSoAk8kRz2ZcHW", "sCoPkmosgSovWQhdH8kbBqm", "CSk2WOlcI8oEWPdcKSowWPu", "WQJcICohiCk9dITzWQneW4BdISoO", "W4hdQ3HR", "jLhdQSojWOxdMCkZW7/cR8oeWPy6"];
  return Bn = function() {
    return i;
  }, Bn();
}
function yA(i, o) {
  i = i - 191;
  const t = Bn();
  let e = t[i];
  if (yA.qAPijw === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    yA.UlYiGA = g, yA.azeKqr = {}, yA.qAPijw = !0;
  }
  const n = t[2077 + -1277 * -1 + -3354], r = i + n, a = yA.azeKqr[r];
  return a ? e = a : (yA.AdJZbL === void 0 && (yA.AdJZbL = !0), e = yA.UlYiGA(e, o), yA.azeKqr[r] = e), e;
}
function qC() {
  const { assetsDirectoryPath: i } = X0(), [o, t] = iA();
  z(() => {
    async function n() {
      const r = new KC(), a = new jC(r);
      function g(c, I, s, C, x) {
        return yA(x - -939, c);
      }
      await a[g("sl3l", -738, -738, -755, -747)](i), t(a);
    }
    n();
  }, [i]);
  const e = {};
  function A(n, r, a, g, c) {
    return yA(r - 242, n);
  }
  return e[A("oZy1", 446) + "le"] = o, e;
}
function DA(i, o) {
  i = i - (-7 * 431 + -3 * -1975 + -2609);
  var t = Qn(), e = t[i];
  if (DA.tTDooa === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, x, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (var l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    DA.jkqOSq = n, DA.YLMAPI = {}, DA.tTDooa = !0;
  }
  var r = t[-6717 + -879 * -11 + 9 * -328], a = i + r, g = DA.YLMAPI[a];
  return g ? e = g : (DA.MoZpzQ === void 0 && (DA.MoZpzQ = !0), e = DA.jkqOSq(e, o), DA.YLMAPI[a] = e), e;
}
(function(i, o) {
  function t(c, I, s, C, x) {
    return DA(I - -131, s);
  }
  function e(c, I, s, C, x) {
    return DA(x - 349, C);
  }
  function A(c, I, s, C, x) {
    return DA(x - -9, C);
  }
  function n(c, I, s, C, x) {
    return DA(I - -448, s);
  }
  var r = i();
  function a(c, I, s, C, x) {
    return DA(C - -953, c);
  }
  for (; ; )
    try {
      var g = -parseInt(a("*S3P", -646, -632, -636, -637)) / 1 * (parseInt(e(640, 643, 659, "cdIg", 652)) / 2) + -parseInt(n(-137, -148, "cdIg", -151, -160)) / 3 + -parseInt(a("Yt#*", -655, -633, -644, -641)) / 4 * (-parseInt(a("LDn[", -636, -639, -647, -655)) / 5) + parseInt(t(173, 171, "1Cn!", 167, 161)) / 6 + parseInt(a("9Abk", -661, -651, -652, -649)) / 7 * (-parseInt(n(-136, -136, "8b)j", -148, -137)) / 8) + parseInt(A(303, 292, 295, "J@7t", 295)) / 9 * (-parseInt(A(304, 307, 317, "AWK6", 311)) / 10) + parseInt(a("R4]z", -632, -631, -639, -636)) / 11;
      if (g === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Qn, -1014859 + -365181 * -4 + 193 * 1604);
function VC({ crosshatch: i }) {
  function o(e, A, n, r, a) {
    return DA(a - 988, r);
  }
  function t(e, A, n, r, a) {
    return DA(r - 87, A);
  }
  return i?.[t(403, "a^%6", 403, 409) + "id"] ? bt[o(1308, 1307, 1320, "G*xc", 1309) + "r"] : bt[t(405, "a^%6", 395, 406)];
}
function Qn() {
  var i = ["j8o5WQ7cM8oSl8o9W5dcVdm", "gSo2imkvWOPkW7ddO1i", "hrTRWOFcICoKW4BcNxRdMtNdMhdcSG", "zCkPW5/dGmoTE2GlWQtcNCkreG", "WRxdSHrseGhcIK5EFhJcNWP/", "W5RdLmoekCohrHDQuSo5", "h8oozbKSa8k/W4hdVmop", "WP0QW7SRW54", "daRcKfZdN8kdWQtdUSoDnCkWbSkS", "wmoQtSk4ka", "WRG2W5OVW4a", "tSkOdCoOsIhcL0CoW7HwWONcUG", "WOjedcH0uCoOW6q", "q2qcEMDenY48WOjzWPddPW", "WRJcS8k5DmkNW7GbW57dSq", "W7/dOv5NybW9WO7dUv9+ga", "q2vJctWsqtG", "ALbMsqFdMCocta", "rcu8WQbSWQBdMx1K", "WQDBt8oxywxdQSo3nG", "W4FcT1SWpeWrnujWW4O", "nJdcISkKWQfcrNqWW5tcKJNdIq", "CajNW5eiW5DKW5dcKmk+W7O", "WODewMXOtCoJW7VcHSo6", "vSk5WPZcRSk7pCkgW5C"];
  return Qn = function() {
    return i;
  }, Qn();
}
(function(i, o) {
  function t(r, a, g, c, I) {
    return hA(a - 848, c);
  }
  function e(r, a, g, c, I) {
    return hA(g - 137, I);
  }
  function A(r, a, g, c, I) {
    return hA(r - -883, g);
  }
  const n = i();
  for (; ; )
    try {
      if (-parseInt(t(1289, 1305, 1303, "&d4J", 1320)) / 1 + parseInt(t(1287, 1303, 1306, "a#OB", 1296)) / 2 + -parseInt(t(1304, 1288, 1279, "v)Ia", 1291)) / 3 + parseInt(A(-440, -426, "Ba9F", -450, -428)) / 4 + -parseInt(A(-444, -452, "&d4J", -448, -452)) / 5 + -parseInt(e(572, 582, 585, 585, "sV*6")) / 6 + -parseInt(A(-441, -456, "WRNH", -440, -436)) / 7 * (-parseInt(e(581, 579, 589, 575, "(2vT")) / 8) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xn, 147869);
function hA(i, o) {
  i = i - (2 * -2081 + -62 + 4653);
  const t = xn();
  let e = t[i];
  if (hA.yLyBnw === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    hA.qDsvcQ = g, hA.xLRBUI = {}, hA.yLyBnw = !0;
  }
  const n = t[0], r = i + n, a = hA.xLRBUI[r];
  return a ? e = a : (hA.tgSSet === void 0 && (hA.tgSSet = !0), e = hA.qDsvcQ(e, o), hA.xLRBUI[r] = e), e;
}
function ZC({ children: i }) {
  const { bramble: o } = qC();
  function t(c, I, s, C, x) {
    return hA(I - 103, C);
  }
  const e = dA(() => ({ redfin: VC({ crosshatch: o?.[a(643, 649, 653, "63TK") + n(1416, "A6$(", 1412, 1401) + a(634, 629, 628, "Ba9F") + "t"]() }), crosshatch: o?.[t(567, 553, 552, "8hyk") + n(1410, "jYa3", 1390, 1396) + n(1424, "(2vT", 1410, 1408) + "t"](), bramble: o, wasLicenseValidated: o?.[a(638, 649, 643, "[7Ez") + r(-216, -241, -231, -232, "sV*6") + a(629, 620, 633, "A6$(") + r(-197, -216, -206, -216, "Q9&1")]() }), [o]), A = {};
  A[n(1383, "UTBc", 1395, 1397)] = e;
  function n(c, I, s, C, x) {
    return hA(C - 967, I);
  }
  function r(c, I, s, C, x) {
    return hA(s - -664, x);
  }
  A[a(637, 661, 651, "19f]") + a(647, 627, 634, "eDo#")] = i;
  function a(c, I, s, C, x) {
    return hA(s - 197, C);
  }
  function g(c, I, s, C, x) {
    return hA(I - -567, C);
  }
  return b(nn[r(-225, -232, -219, -222, "Q53#") + g(-126, -123, -114, "MOlW")], A);
}
function xn() {
  const i = ["vaORW4Ka", "W4H1W4y7mrddLW", "x8oxWO7dQ00", "W5T9FeXn", "oSkoFL3cNGH+WPtcQmk+W7JdJa", "W655FLzm", "W5ZdOCof", "fSkeWOyLW4OAWQhcIM4/asW", "heXdWQPLFvFcJNJdNa", "wwNdMKldUZjJaNPUWR7dGW", "W5PLcfnE", "WPlcRwe5WRVcSfy", "pLPSWOHAr03cOmoJzrhcVq", "twNdMq", "WQvLouRdIW", "wCoqW4fDWPu", "WQ4EANyEdxeFWORdSej+", "cCkeW5BcQX0okCkUWOmcWRLe", "yGVdKhRdThKDb8k0ECoe", "WRxdRb5pWP0", "W7BdGv/cMuPQW47dVSkPWPi", "WRWZsrqgW6n3qtO9kSkkkW", "W4mkW4TmW5NcUCkdW43dNLjIcGq", "rIRcVCkLWP4", "WRTZW4ZcRmojaSkQWPn+W4OS", "W6u6DJHF", "gK1bWQivlvNcKMtdQmk8xq", "z8kZW57cOq", "WPddGIfpW4RdSx0OWPFdI8kYmG", "W6OFWQOOW5y", "gsddOmoXAG"];
  return xn = function() {
    return i;
  }, xn();
}
const zC = 2e3;
class XC {
  transactionCountingToken;
  constructor(o) {
    this.transactionCountingToken = o;
  }
  async validateToken() {
    const o = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), zC), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const n = {};
    n.method = "POST", n.headers = A, n.signal = t.signal;
    const r = n, a = await fetch(o, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== -9025 + 2 * 3292 + 2841 && a.status !== 6329 + -1 * 3161 + -2767 : !0;
  }
}
class $C {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: o, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = o, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.4";
  }
  async init(o) {
    if (this.#t = this.shouldCountTransactions(o), zr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), Zr()) {
      this.#e = !0, this.#t = !1;
      return;
    }
    if (!this.#t) {
      this.#e = !0;
      return;
    }
    if (this.#o = this.#A.transactionCountingToken, !this.#o) {
      console.warn("Transaction counting token is missing"), this.#e = !1;
      return;
    }
    this.#e = await this.#A.validateToken();
  }
  shouldCountTransactions(o) {
    return o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] : o?.dotWeb?.features?.["realTimeTransactionReportingEnabled"] ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!this.#t || !this.#e) return;
    const o = this.prepareTransactions();
    this.sendTransactions(o);
  }
  prepareTransactions() {
    const o = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = this.#n, e.id = this.#i, e.version = this.#r;
    const A = {};
    A.application = e, A.sessionId = o, A.timestamp = t, A.transactionId = o, A.transactionType = this.#a;
    const n = A, r = {};
    return r.transactions = [n], r;
  }
  sendTransactions(o) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + this.#o;
    const A = { method: "POST", headers: e, body: JSON.stringify(o) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return this.#e || !1;
  }
}
function AB(i, o) {
  const { crosshatch: t, bramble: e } = Pn(), [A, n] = iA(null);
  z(() => {
    if (!t) return;
    (async () => {
      const g = new XC(o), c = new $C({ hwids: e.getHwids(), tokenHandler: g, transactionType: i });
      await c.init(t), n(c);
    })();
  }, [o, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function eB({
  children: i,
  transactionCountingToken: o,
  transactionType: t
}) {
  const { transactionCounting: e } = AB(t, o), A = dA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ b(gn.Provider, { value: A, children: i });
}
const Fe = {};
Fe.FACE = "web-capture-face", Fe.DOCUMENT = "web-capture-document", Fe.MAGNIFEYE = "web-capture-magnifeye", Fe.SMILE = "web-capture-smile", Fe.PALM = "web-capture-palm", Fe.EYEGAZE = "web-capture-eyegaze", Fe.MULTIRANGE = "web-capture-multirange";
const tB = Fe;
var LA = function() {
  return LA = Object.assign || function(o) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
    }
    return o;
  }, LA.apply(this, arguments);
};
function kt(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, A = o.length, n; e < A; e++)
    (n || !(e in o)) && (n || (n = Array.prototype.slice.call(o, 0, e)), n[e] = o[e]);
  return i.concat(n || Array.prototype.slice.call(o));
}
function oB(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var nB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, iB = oB(function(i) {
  return nB.test(i) || i.charCodeAt(-10243 + 1 * 10243) === 111 && i.charCodeAt(-20 * 263 + 2629 + 2632) === -1 * -2178 + -845 * 2 + -378 && i.charCodeAt(2) < 91;
});
function rB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ii, ja;
function aB() {
  return ja || (ja = 934 * 1 + -2584 + 1 * 1651, Ii = function(o, t, e, A) {
    var n = e ? e.call(A, o, t) : void 0;
    if (n !== void 0) return !!n;
    if (o === t) return !0;
    if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
    var r = Object.keys(o), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), c = 6860 + 1 * -4919 + 647 * -3; c < r.length; c++) {
      var I = r[c];
      if (!g(I)) return !1;
      var s = o[I], C = t[I];
      if (n = e ? e.call(A, s, C, I) : void 0, n === !1 || n === void 0 && s !== C) return !1;
    }
    return !0;
  }), Ii;
}
var gB = aB();
const sB = /* @__PURE__ */ rB(gB);
var Y = "-ms-", $t = "-moz-", O = "-webkit-", $0 = "comm", Kn = "rule", Aa = "decl", cB = "@import", As = "@keyframes", IB = "@layer", es = Math.abs, ea = String.fromCharCode, rr = Object.assign;
function CB(i, o) {
  return QA(i, 8487 + -6518 * -1 + -15005) ^ 45 ? (((o << 3279 + 4602 * -2 + 5927 ^ QA(i, -1 * -6614 + -9474 + -4 * -715)) << -7222 * 1 + -5493 + 9 * 1413 ^ QA(i, 3494 + 1 * -3493)) << 2 ^ QA(i, 2)) << 6378 + 5596 * -1 + -780 ^ QA(i, 11380 + 1 * -11377) : -5035 + -1783 * -3 + -314;
}
function ts(i) {
  return i.trim();
}
function De(i, o) {
  return (i = o.exec(i)) ? i[9800 + -8 * 455 + -14 * 440] : i;
}
function v(i, o, t) {
  return i.replace(o, t);
}
function Mo(i, o, t) {
  return i.indexOf(o, t);
}
function QA(i, o) {
  return i.charCodeAt(o) | 0;
}
function St(i, o, t) {
  return i.slice(o, t);
}
function Ce(i) {
  return i.length;
}
function os(i) {
  return i.length;
}
function qt(i, o) {
  return o.push(i), i;
}
function BB(i, o) {
  return i.map(o).join("");
}
function qa(i, o) {
  return i.filter(function(t) {
    return !De(t, o);
  });
}
var jn = 6513 + -1 * 3007 + 3505 * -1, Gt = 1051 * 9 + -4 * -1053 + -13670, ns = 0, XA = 589 * 2 + -4 * 2113 + 7274, X = 0, Wt = "";
function qn(i, o, t, e, A, n, r, a) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = A, g.children = n, g.line = jn, g.column = Gt, g.length = r, g.return = "", g.siblings = a, g;
}
function Me(i, o) {
  return rr(qn("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function Bt(i) {
  for (; i.root; ) i = Me(i.root, { children: [i] });
  qt(i, i.siblings);
}
function QB() {
  return X;
}
function xB() {
  return X = XA > 0 ? QA(Wt, --XA) : 2376 + 594 * -4, Gt--, X === 1 * -7142 + 736 + 6416 && (Gt = 736 * -4 + -891 + -1918 * -2, jn--), X;
}
function oe() {
  return X = XA < ns ? QA(Wt, XA++) : -1228 + 1 * 1228, Gt++, X === -6508 + -2 * 991 + 8500 && (Gt = 2991 * -1 + -1 * -6631 + 3639 * -1, jn++), X;
}
function nt() {
  return QA(Wt, XA);
}
function Wo() {
  return XA;
}
function Vn(i, o) {
  return St(Wt, i, o);
}
function ar(i) {
  switch (i) {
    case 0:
    case 8 * -467 + 8497 + -4752:
    case 10816 + -6 * 1801:
    case 13:
    case -2 * -2681 + 700 + -670 * 9:
      return 1 * 3173 + 9149 + -12317;
    case 9965 + -1514 * 5 + -2362:
    case 565 * -12 + 8239 + -1416:
    case -2 * -842 + -1 * -8845 + -10485:
    case 4345 + 1 * 9753 + -14051:
    case 62:
    case -749 * -1 + -745 * 8 + -1055 * -5:
    case 1 * -5209 + 2436 + 2899:
    case 59:
    case 5100 + 1216 * 4 + -757 * 13:
    case 125:
      return 9652 + -3445 * 1 + -6203;
    case 85 + 1213 * -2 + -1 * -2399:
      return 374 * -24 + -2964 + -1327 * -9;
    case -1 * -9338 + -3192 + -6112:
    case 39:
    case 9557 + 1 * -9517:
    case 91:
      return 2;
    case 41:
    case 2105 + 2 * -1006:
      return -1215 + 1 * -1918 + 1 * 3134;
  }
  return -7 * -1293 + 3111 + -12162;
}
function EB(i) {
  return jn = Gt = 1, ns = Ce(Wt = i), XA = 0, [];
}
function dB(i) {
  return Wt = "", i;
}
function Ci(i) {
  return ts(Vn(XA - (-2509 * 1 + 1314 + 1196), gr(i === -2446 + -5449 * 1 + -2 * -3993 ? i + (5462 * -1 + -2331 + -7795 * -1) : i === -859 * 4 + 3998 * 2 + 1 * -4520 ? i + 1 : i)));
}
function lB(i) {
  for (; (X = nt()) && X < 33; ) oe();
  return ar(i) > 2 || ar(X) > 1157 + 1119 * -2 + 1084 ? "" : " ";
}
function uB(i, o) {
  for (; --o && oe() && !(X < -1 * 6934 + 3 * -1579 + 1 * 11719 || X > 7 * 267 + -2772 + 1005 || X > -1073 * 1 + -314 * 3 + 2072 && X < 540 + -5884 * 1 + 3 * 1803 || X > 70 && X < -3013 + 1 * -7433 + 10543); ) ;
  return Vn(i, Wo() + (o < 6 && nt() == -3852 + 8 * -393 + -7028 * -1 && oe() == -6338 + 2741 * -2 + 11852));
}
function gr(i) {
  for (; oe(); ) switch (X) {
    case i:
      return XA;
    case 4382 * -1 + -2778 + 7194:
    case -5693 + -299 * 27 + 13805:
      i !== -3512 + 6 * 591 && i !== 2174 * 1 + -3945 + -905 * -2 && gr(X);
      break;
    case 8315 + -331 * 25:
      i === 6068 + 7 * 806 + -11669 && gr(i);
      break;
    case -1 * 1426 + 3226 + -1708:
      oe();
      break;
  }
  return XA;
}
function fB(i, o) {
  for (; oe() && i + X !== -5825 + -734 * -8 + (9461 * -1 + 102 + -27 * -347); ) if (i + X === -9976 + 404 * 20 + 1938 + (-4174 + -3473 * 1 + -11 * -699) && nt() === 4814 * -2 + 2690 + 6985) break;
  return "/*" + Vn(o, XA - (-9921 + 1 * 2778 + 7144)) + "*" + ea(i === 47 ? i : oe());
}
function hB(i) {
  for (; !ar(nt()); ) oe();
  return Vn(i, XA);
}
function pB(i) {
  return dB(Lo("", null, null, null, [""], i = EB(i), -6609 * 1 + -9600 + 9 * 1801, [28 + -261 * 29 + 1 * 7541], i));
}
function Lo(i, o, t, e, A, n, r, a, g) {
  for (var c = 0, I = -8612 + 4306 * 2, s = r, C = 1390 + -433 * -19 + -9617, x = 0, E = -4113 * 1 + 1 * -3259 + -19 * -388, B = 1433 * -1 + -2471 * -2 + 1 * -3508, l = -258 + -2866 * -1 + -2607, u = 7 * -382 + -2756 + 1 * 5431, h = 1 * -4813 + 1 * 5042 + -229, p = "", m = A, k = n, D = e, w = p; l; ) switch (E = h, h = oe()) {
    case 7009 + 5 * 1256 + -13249:
      if (E != 1130 * -1 + -1394 + 2632 && QA(w, s - (7863 + 2459 * -1 + -5403)) == -8056 + 8 * 976 + 306) {
        Mo(w += v(Ci(h), "&", "&\f"), "&\f", es(c ? a[c - 1] : 5673 + 1 * 5879 + -11552)) != -1 && (u = -1);
        break;
      }
    case -7543 + 1 * -334 + 7911:
    case -3044 + -1 * -5877 + 1397 * -2:
    case -4085 + 1 * -3325 + 7501:
      w += Ci(h);
      break;
    case -7838 + 413 * 19:
    case -1303 + 8 * -732 + 7169:
    case -5236 + -1319 * 7 + 14482:
    case -4024 + 260 * 1 + 3796:
      w += lB(E);
      break;
    case -1039 * 5 + -1137 + -2 * -3212:
      w += uB(Wo() - 1, 7006 * 1 + 2135 + -9134);
      continue;
    case 47:
      switch (nt()) {
        case -3181 + 2 * -3247 + -1 * -9717:
        case 528 + -7482 * -1 + 7963 * -1:
          qt(mB(fB(oe(), Wo()), o, t, g), g);
          break;
        default:
          w += "/";
      }
      break;
    case 123 * B:
      a[c++] = Ce(w) * u;
    case (-6074 * -1 + -5892 + -57) * B:
    case 59:
    case -9609 + -652 * 4 + 12217:
      switch (h) {
        case 9249 + -7 * 531 + -5532:
        case -3 * 2311 + -1748 + 8806:
          l = -328 * 22 + -7317 + -14533 * -1;
        case 6653 + 471 * -14 + I:
          u == -1 && (w = v(w, /\f/g, "")), x > 0 && Ce(w) - s && qt(x > 32 ? Za(w + ";", e, t, s - (359 * 13 + -3 * -2534 + -12268), g) : Za(v(w, " ", "") + ";", e, t, s - 2, g), g);
          break;
        case 6207 + 1 * -7877 + 1729:
          w += ";";
        default:
          if (qt(D = Va(w, o, t, c, I, A, a, p, m = [], k = [], s, n), n), h === 7922 + -7799 * 1)
            if (I === -892 + -4 * -1363 + 5 * -912) Lo(w, o, D, D, m, n, s, a, k);
            else switch (C === -4441 * -2 + 8029 + -467 * 36 && QA(w, -4222 + 2481 * 1 + 1744) === 5429 + 2182 * -1 + -3137 ? 4452 * -2 + 1789 * -4 + 16160 : C) {
              case -1 * 6359 + 254 + 365 * 17:
              case 108:
              case 3 * 2339 + -6060 * -1 + -1 * 12968:
              case 115:
                Lo(i, D, D, e && qt(Va(i, D, D, 0, 3444 + 3 * 951 + 2099 * -3, A, a, p, A, m = [], s, k), k), A, k, s, a, e ? m : k);
                break;
              default:
                Lo(w, D, D, D, [""], k, -1 * -5591 + -3040 + 2551 * -1, a, k);
            }
      }
      c = I = x = -851 + 1 * 851, B = u = 7509 + -7 * 1346 + 1914, p = w = "", s = r;
      break;
    case 5333 * -1 + 7603 + -2212:
      s = 5196 + 1 * -1671 + 1 * -3524 + Ce(w), x = E;
    default:
      if (B < 7667 + -1762 * -2 + 6 * -1865) {
        if (h == 123) --B;
        else if (h == 125 && B++ == -6687 + 6687 * 1 && xB() == -5350 + -1 * -4261 + -1 * -1214) continue;
      }
      switch (w += ea(h), h * B) {
        case -7 * 1227 + 5582 + 7 * 435:
          u = I > 0 ? 1 : (w += "\f", -1);
          break;
        case 44:
          a[c++] = (Ce(w) - (-1816 * 4 + -6177 + 13442)) * u, u = 7345 + 1 * -9403 + 2059 * 1;
          break;
        case -6735 * 1 + -1355 * 4 + 12219 * 1:
          nt() === 1466 + -1 * 913 + -1 * 508 && (w += Ci(oe())), C = nt(), I = s = Ce(p = w += hB(Wo())), h++;
          break;
        case 8749 + 16 * -544:
          E === -1442 + -1 * -1487 && Ce(w) == -8449 + 1 * 9073 + -1 * 622 && (B = 0);
      }
  }
  return n;
}
function Va(i, o, t, e, A, n, r, a, g, c, I, s) {
  for (var C = A - 1, x = A === 0 ? n : [""], E = os(x), B = 3299 * -3 + 1391 + 8506, l = 1 * 3677 + -7303 + 2 * 1813, u = -6955 + -3378 * 1 + -1 * -10333; B < e; ++B) for (var h = 4 * 1737 + 4833 + -11781, p = St(i, C + (-1186 + -809 * -5 + -1 * 2858), C = es(l = r[B])), m = i; h < E; ++h) (m = ts(l > 0 ? x[h] + " " + p : v(p, /&\f/g, x[h]))) && (g[u++] = m);
  return qn(i, o, t, A === -9 * -888 + 491 + -8483 * 1 ? Kn : a, g, c, I, s);
}
function mB(i, o, t, e) {
  return qn(i, o, t, $0, ea(QB()), St(i, -2956 * 1 + 5977 * 1 + -3019, -2), -4035 + 2035 * 3 + -2070, e);
}
function Za(i, o, t, e, A) {
  return qn(i, o, t, Aa, St(i, -6 * 1193 + 6245 + -913 * -1, e), St(i, e + (803 + -401 * 2), -1), e, A);
}
function is(i, o, t) {
  switch (CB(i, o)) {
    case 3974 * 1 + 6 * -971 + 1391 * 5:
      return O + "print-" + i + i;
    case 5737:
    case -9536 + -3049 * 1 + 16786:
    case 3177:
    case 3433:
    case -3 * -831 + -2121 * 3 + 5511:
    case -456 * -1 + -412 * 1 + 4413:
    case 11877 + 1 * -8956:
    case 1 * -7661 + -8 * 1024 + -857 * -25:
    case -5651 + 10883 * 1 + 1124:
    case -14155 + 2857 * 7:
    case 8 * -827 + 6841 * 1 + 2966:
    case -2416 + -1 * -9061:
    case 328 * 11 + 1 * -8564 + 7961:
    case -2 * -1332 + -5873 + 9600:
    case 5880 + -21 * -323 + -6784:
    case -4819 + -10442 * -1:
    case -1 * -4635 + -3499 + 4999:
    case 4599:
    case 4855:
    case 5781 * -1 + 3228 + -12 * -564:
    case 6389:
    case 9693 * -1 + 6800 + 8002:
    case -6852 + 3691 * -1 + 15908:
    case 9341 + 1 * -10118 + 914 * 7:
    case 3829:
      return O + i + i;
    case 4789:
      return $t + i + i;
    case 5349:
    case -2811 + -1201 * -5 + -4 * -263:
    case -4728 * 2 + 7775 + 1 * 6491:
    case 3259 * 3 + 4756 + -1513 * 5:
    case -3165 + -1457 * 2 + 8835:
      return O + i + $t + i + Y + i + i;
    case 7 * -893 + -1 * 8311 + -2 * -10249:
      switch (QA(i, o + (-463 * 8 + -1804 + 5519))) {
        case 720 * 5 + 1141 * -5 + 2219:
          return O + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 2 * 2084 + 2129 * 1 + -1 * 6189:
          return O + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -891 * 7 + 3 * 921 + 3519:
          return O + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -526 * 14 + 4543 * 3 + 563:
    case -1596 + 3779 * -1 + -9643 * -1:
    case -7276 + -9 * 409 + -396 * -35:
      return O + i + Y + i + i;
    case -4215 + -15 * -692:
      return O + i + Y + "flex-" + i + i;
    case -3006 + -2 * 3922 + 16037:
      return O + i + v(i, /(\w+).+(:[^]+)/, O + "box-$1$2" + Y + "flex-$1$2") + i;
    case 1 * -8585 + 9162 + 4866:
      return O + i + Y + "flex-item-" + v(i, /flex-|-self/g, "") + (De(i, /flex-|baseline/) ? "" : Y + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case -8868 + -1 * -13543:
      return O + i + Y + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case -6214 * 1 + 5450 + -8 * -789:
      return O + i + Y + v(i, "shrink", "negative") + i;
    case -7 * -808 + -8453 + 8089:
      return O + i + Y + v(i, "basis", "preferred-size") + i;
    case -9542 + -29 * -538:
      return O + "box-" + v(i, "-grow", "") + O + i + Y + v(i, "grow", "positive") + i;
    case 7 * -1315 + -5128 + 18887:
      return O + v(i, /([^-])(transform)/g, "$1" + O + "$2") + i;
    case -1219 * -5 + -10 * -257 + 7 * -354:
      return v(v(v(i, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), i, "") + i;
    case 74 + 1807 * 3:
    case -1 * 4385 + -288 * 23 + 14968:
      return v(i, /(image-set\([^]*)/, O + "$1$`$1");
    case -1250 + 27 * 262 + 856 * -1:
      return v(v(i, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + Y + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + i + i;
    case 3453 + -1 * -747:
      if (!De(i, /flex-|baseline/)) return Y + "grid-column-align" + St(i, o) + i;
      break;
    case 2592:
    case 3360:
      return Y + v(i, "template-", "") + i;
    case -210 + 353 * -18 + 5474 * 2:
    case -14625 + 29 * 629:
      return t && t.some(function(e, A) {
        return o = A, De(e.props, /grid-\w+-end/);
      }) ? ~Mo(i + (t = t[o].value), "span", -10076 + -2 * -5038) ? i : Y + v(i, "-start", "") + i + Y + "grid-row-span:" + (~Mo(t, "span", -1 * 470 + 593 + -123) ? De(t, /\d+/) : +De(t, /\d+/) - +De(i, /\d+/)) + ";" : Y + v(i, "-start", "") + i;
    case -3191 + 9 * -937 + 16520:
    case 5162 + 3814 * -2 + 6594:
      return t && t.some(function(e) {
        return De(e.props, /grid-\w+-start/);
      }) ? i : Y + v(v(i, "-end", "-span"), "span ", "") + i;
    case 530 + -662 * -7 + 1069 * -1:
    case -3693 + 17 * 428:
    case -2922 + -10 * -699:
    case -4782 * 1 + 8550 + 1236 * -1:
      return v(i, /(.+)-inline(.+)/, O + "$1$2") + i;
    case -550 * -26 + 5108 + 1 * -11292:
    case 7059:
    case 970 + -31 * -356 + -6253:
    case -2079 * -4 + 5364 + -8145:
    case -850 + 5426 * -1 + 11721:
    case 631 * -11 + 5749 + 6893 * 1:
    case -3875 + -2202 * -4:
    case 509 * -15 + 6452 + 5860:
    case 3752 + -1 * -1781:
    case -9439 * 1 + 9487 * -1 + 24715:
    case 5021:
    case 1 * 866 + -1649 + 5548:
      if (Ce(i) - (-4739 + -5 * 1251 + 5 * 2199) - o > 6) switch (QA(i, o + (-3516 + -1 * 3733 + 7250))) {
        case -1 * 4912 + -5 * -1753 + 3 * -1248:
          if (QA(i, o + (1 * 6091 + 4123 * 1 + 10210 * -1)) !== 45) break;
        case 102:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + $t + (QA(i, o + (-5509 + 839 * -7 + 11385)) == 2897 + 1 * 9781 + -12570 * 1 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~Mo(i, "stretch", -707 + 5 * 1073 + -4658) ? is(v(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case -6438 + -538 * -1 + 11052:
    case 5920:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, r, a, g, c) {
        return Y + A + ":" + n + c + (r ? Y + A + "-span:" + (a ? g : +g - +n) + c : "") + i;
      });
    case -1 * 287 + 1790 + -2 * -1723:
      if (QA(i, o + (-12575 + -547 * -23)) === 1109 * 1 + -8794 * -1 + -9782) return v(i, ":", ":" + O) + i;
      break;
    case 535 * 16 + -4447 + -7 * -333:
      switch (QA(i, QA(i, 9643 + -267 * 10 + -1 * 6959) === -1453 * -4 + -1 * 9789 + -4022 * -1 ? 18 : -8218 + -3062 * 2 + 14353)) {
        case -909 * -3 + -2339 * -3 + 802 * -12:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (QA(i, 101 + 2 * 3049 + -6185) === 1942 * -2 + 1451 + 2478 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + Y + "$2box$3") + i;
        case 3015 * -2 + 1314 * 4 + 874:
          return v(i, ":", ":" + Y) + i;
      }
      break;
    case 593 + -5126 * -1:
    case 1 * 8726 + -4358 + 1 * -1721:
    case 2257 * -1 + -4494 + 8886:
    case 2985 + -5766 * -1 + -4824:
    case 2391:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function En(i, o) {
  for (var t = "", e = 2 * 1496 + 4 * -1959 + 4844; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function yB(i, o, t, e) {
  switch (i.type) {
    case IB:
      if (i.children.length) break;
    case cB:
    case Aa:
      return i.return = i.return || i.value;
    case $0:
      return "";
    case As:
      return i.return = i.value + "{" + En(i.children, e) + "}";
    case Kn:
      if (!Ce(i.value = i.props.join(","))) return "";
  }
  return Ce(t = En(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function DB(i) {
  var o = os(i);
  return function(t, e, A, n) {
    for (var r = "", a = -14389 + 1 * 14389; a < o; a++) r += i[a](t, e, A, n) || "";
    return r;
  };
}
function wB(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function bB(i, o, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Aa:
        i.return = is(i.value, i.length, t);
        return;
      case As:
        return En([Me(i, { value: v(i.value, "@", "@" + O) })], e);
      case Kn:
        if (i.length) return BB(t = i.props, function(A) {
          switch (De(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Bt(Me(i, { props: [v(A, /:(read-\w+)/, ":" + $t + "$1")] }));
              var n = {};
              n.props = [A], Bt(Me(i, n)), rr(i, { props: qa(t, e) });
              break;
            case "::placeholder":
              Bt(Me(i, { props: [v(A, /:(plac\w+)/, ":" + O + "input-$1")] })), Bt(Me(i, { props: [v(A, /:(plac\w+)/, ":" + $t + "$1")] })), Bt(Me(i, { props: [v(A, /:(plac\w+)/, Y + "input-$1")] }));
              var r = {};
              r.props = [A], Bt(Me(i, r)), rr(i, { props: qa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var kB = N, W = {}, at = typeof process < "u" && W !== void 0 && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled", rs = "active", as = "data-styled-version", Zn = "6.1.19", ta = `/*!sc*/
`, dn = typeof window < "u" && typeof document < "u", SB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.SC_DISABLE_SPEEDY !== void 0 && W.SC_DISABLE_SPEEDY !== "" ? W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY : W.NODE_ENV !== "production"), za = /invalid hook call/i, lo = /* @__PURE__ */ new Set(), GB = function(i, o) {
  if (W.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var n = !0;
      console.error = function(r) {
        for (var a = [], g = -1669 * 3 + -597 + -5 * -1121; g < arguments.length; g++) a[g - (4028 + -1 * -5369 + -29 * 324)] = arguments[g];
        za.test(r) ? (n = !1, lo.delete(e)) : A.apply(void (-5284 + 1321 * 4), kt([r], a, !1));
      }, NA(), n && !lo.has(e) && (console.warn(e), lo.add(e));
    } catch (r) {
      za.test(r.message) && lo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, zn = Object.freeze([]), Nt = Object.freeze({});
function NB(i, o, t) {
  return t === void 0 && (t = Nt), i.theme !== t.theme && i.theme || o || t.theme;
}
var sr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), RB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vB = /(^-|-$)/g;
function Xa(i) {
  return i.replace(RB, "-").replace(vB, "");
}
var FB = /(a)(d)/gi, uo = 52, $a = function(i) {
  return String.fromCharCode(i + (i > -2344 * 4 + -6388 + 277 * 57 ? 39 : -674 * -6 + 7372 + 33 * -343));
};
function cr(i) {
  var o, t = "";
  for (o = Math.abs(i); o > uo; o = o / uo | -8986 * 1 + 17 * 485 + 741) t = $a(o % uo) + t;
  return ($a(o % uo) + t).replace(FB, "$1-$2");
}
var Bi, gs = -6 * -457 + -1074 + 3713, et = function(i, o) {
  for (var t = o.length; t; ) i = (5480 + -13 * 419) * i ^ o.charCodeAt(--t);
  return i;
}, ss = function(i) {
  return et(gs, i);
};
function MB(i) {
  return cr(ss(i) >>> -1 * 5182 + 1358 * -2 + 718 * 11);
}
function cs(i) {
  return W.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Qi(i) {
  return typeof i == "string" && (W.NODE_ENV === "production" || i.charAt(-6177 + 1 * -7109 + 13286) === i.charAt(-926 * 4 + -7323 + -11027 * -1).toLowerCase());
}
var ZA = {};
ZA.childContextTypes = !0, ZA.contextType = !0, ZA.contextTypes = !0, ZA.defaultProps = !0, ZA.displayName = !0, ZA.getDefaultProps = !0, ZA.getDerivedStateFromError = !0, ZA.getDerivedStateFromProps = !0, ZA.mixins = !0, ZA.propTypes = !0, ZA.type = !0;
var We = {};
We.name = !0, We.length = !0, We.prototype = !0, We.caller = !0, We.callee = !0, We.arguments = !0, We.arity = !0;
var Ze = {};
Ze.$$typeof = !0, Ze.compare = !0, Ze.defaultProps = !0, Ze.displayName = !0, Ze.propTypes = !0, Ze.type = !0;
var ft = {};
ft.$$typeof = !0, ft.render = !0, ft.defaultProps = !0, ft.displayName = !0, ft.propTypes = !0;
var Is = typeof Symbol == "function" && Symbol.for, Cs = Is ? /* @__PURE__ */ Symbol.for("react.memo") : -100749 + -88 * -1828, WB = Is ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, LB = ZA, OB = We, Bs = Ze, JB = ((Bi = {})[WB] = ft, Bi[Cs] = Bs, Bi);
function Ag(i) {
  return ("type" in (o = i) && o.type.$$typeof) === Cs ? Bs : "$$typeof" in i ? JB[i.$$typeof] : LB;
  var o;
}
var UB = Object.defineProperty, YB = Object.getOwnPropertyNames, eg = Object.getOwnPropertySymbols, TB = Object.getOwnPropertyDescriptor, PB = Object.getPrototypeOf, tg = Object.prototype;
function Qs(i, o, t) {
  if (typeof o != "string") {
    if (tg) {
      var e = PB(o);
      e && e !== tg && Qs(i, e, t);
    }
    var A = YB(o);
    eg && (A = A.concat(eg(o)));
    for (var n = Ag(i), r = Ag(o), a = -7814 + 379 * -19 + 15015; a < A.length; ++a) {
      var g = A[a];
      if (!(g in OB || t && t[g] || r && g in r || n && g in n)) {
        var c = TB(o, g);
        try {
          UB(i, g, c);
        } catch {
        }
      }
    }
  }
  return i;
}
function Rt(i) {
  return typeof i == "function";
}
function oa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function ot(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function og(i, o) {
  if (i.length === 0) return "";
  for (var t = i[0], e = 1; e < i.length; e++) t += i[e];
  return t;
}
function vt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Ir(i, o, t) {
  if (t === void 0 && (t = !1), !t && !vt(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = -6871 + 7841 * 1 + -970; e < o.length; e++) i[e] = Ir(i[e], o[e]);
  else if (vt(o))
    for (var e in o) i[e] = Ir(i[e], o[e]);
  return i;
}
function na(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var $ = {};
$[1] = `Cannot create styled-component for component: %s.

`, $[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, $[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, $[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, $[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, $[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, $[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', $[8] = `ThemeProvider: Please make your "theme" prop an object.

`, $[9] = "Missing document `<head>`\n\n", $[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, $[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, $[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", $[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, $[14] = `ThemeProvider: "theme" prop is required.

`, $[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", $[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, $[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, $[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var _B = W.NODE_ENV !== "production" ? $ : {};
function HB() {
  for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[4693 * 1 + 8608 + -13301], e = [], A = -6659 + -5 * -1332, n = i.length; A < n; A += -9654 + -5 * -1931) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Lt(i) {
  for (var o = [], t = -2936 + -294 * 20 + 1 * 8817; t < arguments.length; t++) o[t - (4 * -2477 + -5454 + -9 * -1707)] = arguments[t];
  return W.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > 16569 + -3 * 5523 ? " Args: ".concat(o.join(", ")) : "")) : new Error(HB.apply(void 0, kt([_B[i]], o, !1)).trim());
}
var KB = (function() {
  function i(o) {
    this.groupSizes = new Uint32Array(512), this.length = 1 * 275 + -8340 + 953 * 9, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = 4439 + -1 * 4439, e = -1 * -3508 + -7349 + 3841; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; o >= n; ) if ((n <<= 1) < 3 * 347 + -2856 + 1815) throw Lt(1 * 5113 + 7799 + -12896, "".concat(o));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var r = A; r < n; r++) this.groupSizes[r] = 0;
    }
    for (var a = this.indexOfGroup(o + (11261 + 2 * -5630)), g = (r = 0, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[o]++, a++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), A = e + t;
      this.groupSizes[o] = -2275 + -5 * -455;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 679 * -2 + -3745 + 1701 * 3 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], A = this.indexOfGroup(o), n = A + e, r = A; r < n; r++) t += "".concat(this.tag.getRule(r)).concat(ta);
    return t;
  }, i;
})(), jB = -1 * 8746 + 355 * -7 + 11232 << 30, Oo = /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ new Map(), Jo = 3558 * -1 + 9 * 377 + 166, fo = function(i) {
  if (Oo.has(i)) return Oo.get(i);
  for (; ln.has(Jo); ) Jo++;
  var o = Jo++;
  if (W.NODE_ENV !== "production" && ((0 | o) < 0 || o > jB)) throw Lt(-4497 + -1 * 4409 + -1 * -8922, "".concat(o));
  return Oo.set(i, o), ln.set(o, i), o;
}, qB = function(i, o) {
  Jo = o + (-6121 + 3061 * 2), Oo.set(i, o), ln.set(o, i);
}, VB = "style[".concat(at, "][").concat(as, '="').concat(Zn, '"]'), ZB = new RegExp("^".concat(at, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zB = function(i, o, t) {
  for (var e, A = t.split(","), n = 6 * -1075 + 3246 + 3204, r = A.length; n < r; n++) (e = A[n]) && i.registerName(o, e);
}, XB = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && t !== void 0 ? t : "").split(ta), A = [], n = 0, r = e.length; n < r; n++) {
    var a = e[n].trim();
    if (a) {
      var g = a.match(ZB);
      if (g) {
        var c = 0 | parseInt(g[1], 10), I = g[1 * 9599 + -7644 + -1953];
        c !== 0 && (qB(I, c), zB(i, I, g[-3074 + -1 * 3520 + 6597]), i.getTag().insertRules(c, A)), A.length = 8434 + 4217 * -2;
      } else A.push(a);
    }
  }
}, ng = function(i) {
  for (var o = document.querySelectorAll(VB), t = 1 * -2380 + 7158 + 2389 * -2, e = o.length; t < e; t++) {
    var A = o[t];
    A && A.getAttribute(at) !== rs && (XB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function $B() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xs = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), A = (function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(at, "]")));
    return g[g.length - (-6213 + -3357 * 1 + -1 * -9571)];
  })(t), n = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(at, rs), e.setAttribute(as, Zn);
  var r = $B();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, n), e;
}, AQ = (function() {
  function i(o) {
    this.element = xs(o), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 613 + 1 * -608 + -5, n = e.length; A < n; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Lt(-8833 * 1 + -6399 + -391 * -39);
    })(this.element), this.length = 2 * -4372 + 328 * -30 + 8 * 2323;
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
})(), eQ = (function() {
  function i(o) {
    this.element = xs(o), this.nodes = this.element.childNodes, this.length = 276 + -849 * -11 + -9615;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 2928 + -1777 * 1 + -1151 * 1) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
})(), tQ = (function() {
  function i(o) {
    this.rules = [], this.length = 3245 + 7 * 1411 + -729 * 18;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -6543 + 2330 * -2 + 11203, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
})(), ig = dn, oQ = { isServer: !dn, useCSSOMInjection: !SB }, Es = (function() {
  function i(o, t, e) {
    o === void 0 && (o = Nt), t === void 0 && (t = {});
    var A = this;
    this.options = LA(LA({}, oQ), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && dn && ig && (ig = !1, ng(this)), na(this, function() {
      return (function(n) {
        for (var r = n.getTag(), a = r.length, g = "", c = function(s) {
          var C = (function(u) {
            return ln.get(u);
          })(s);
          if (C === void 0) return "continue";
          var x = n.names.get(C), E = r.getGroup(s);
          if (x === void 0 || !x.size || E.length === 0) return "continue";
          var B = "".concat(at, ".g").concat(s, '[id="').concat(C, '"]'), l = "";
          x !== void 0 && x.forEach(function(u) {
            u.length > -13212 + 13212 * 1 && (l += "".concat(u, ","));
          }), g += "".concat(E).concat(B, '{content:"').concat(l, '"}').concat(ta);
        }, I = 0; I < a; I++) c(I);
        return g;
      })(A);
    });
  }
  return i.registerId = function(o) {
    return fo(o);
  }, i.prototype.rehydrate = function() {
    !this.server && dn && ng(this);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return t === void 0 && (t = !0), new i(LA(LA({}, this.options), o), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -7086 + -1 * -5714 + 1372) + (-5911 + 2 * 789 + -2 * -2167);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new tQ(A) : e ? new AQ(A) : new eQ(A);
    })(this.options), new KB(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (fo(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(fo(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(fo(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), nQ = /&/g, iQ = /^\s*\/\/.*$/gm;
function ds(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ds(t.children, o)), t;
  });
}
function ls(i) {
  var o, t, e, A = i === void 0 ? Nt : i, n = A.options, r = n === void 0 ? Nt : n, a = A.plugins, g = a === void 0 ? zn : a, c = function(C, x, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 326 * 20 + -2 * 2833 + 427 * -2 ? ".".concat(o) : C;
  }, I = g.slice();
  I.push(function(C) {
    C.type === Kn && C.value.includes("&") && (C.props[0] = C.props[-6757 + 761 * -6 + 11323].replace(nQ, t).replace(e, c));
  }), r.prefix && I.push(bB), I.push(yB);
  var s = function(C, x, E, B) {
    x === void 0 && (x = ""), E === void 0 && (E = ""), B === void 0 && (B = "&"), o = B, t = x, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = C.replace(iQ, ""), u = pB(E || x ? "".concat(E, " ").concat(x, " { ").concat(l, " }") : l);
    r.namespace && (u = ds(u, r.namespace));
    var h = [];
    return En(u, DB(I.concat(wB(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = g.length ? g.reduce(function(C, x) {
    return x.name || Lt(-1 * 2098 + -397 * -3 + -922 * -1), et(C, x.name);
  }, gs).toString() : "", s;
}
var rQ = new Es(), Cr = ls(), ia = rt.createContext({ shouldForwardProp: void 0, styleSheet: rQ, stylis: Cr });
ia.Consumer;
var aQ = rt.createContext(void 0);
function Br() {
  return ne(ia);
}
function gQ(i) {
  var o = iA(i.stylisPlugins), t = o[1649 + 1597 * 3 + -3220 * 2], e = o[1], A = Br().styleSheet, n = dA(function() {
    var I = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? I = i.sheet : i.target && (I = I.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (I = I.reconstructWithOptions(s)), I;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = dA(function() {
    var I = {};
    I.namespace = i.namespace, I.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = I, s.plugins = t, ls(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  z(function() {
    sB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = dA(function() {
    var I = {};
    return I.shouldForwardProp = i.shouldForwardProp, I.styleSheet = n, I.stylis = r, I;
  }, [i.shouldForwardProp, n, r]), g = {};
  g.value = a;
  var c = {};
  return c.value = r, rt.createElement(ia.Provider, g, rt.createElement(aQ.Provider, c, i.children));
}
var rg = (function() {
  function i(o, t) {
    var e = this;
    this.inject = function(A, n) {
      n === void 0 && (n = Cr);
      var r = e.name + n.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, n(e.rules, r, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, na(this, function() {
      throw Lt(-1747 + -1 * 4327 + -1 * -6086, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return o === void 0 && (o = Cr), this.name + o.hash;
  }, i;
})(), sQ = function(i) {
  return i >= "A" && i <= "Z";
};
function ag(i) {
  for (var o = "", t = 9946 + 2 * -4973; t < i.length; t++) {
    var e = i[t];
    if (3148 * 2 + 4651 + -10946 * 1 === t && e === "-" && i[-3 * 1294 + 1001 * -1 + 19 * 257] === "-") return i;
    sQ(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var us = function(i) {
  return i == null || i === !1 || i === "";
}, fs = function(i) {
  var o, t, e = [];
  for (var A in i) {
    var n = i[A];
    i.hasOwnProperty(A) && !us(n) && (Array.isArray(n) && n.isCss || Rt(n) ? e.push("".concat(ag(A), ":"), n, ";") : vt(n) ? e.push.apply(e, kt(kt(["".concat(A, " {")], fs(n), !1), ["}"], !1)) : e.push("".concat(ag(A), ": ").concat((o = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1362 * 5 + -992 + 7802 === t || o in kB || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function it(i, o, t, e) {
  if (us(i)) return [];
  if (oa(i)) return [".".concat(i.styledComponentId)];
  if (Rt(i)) {
    if (!Rt(n = i) || n.prototype && n.prototype.isReactComponent || !o) return [i];
    var A = i(o);
    return W.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof rg || vt(A) || A === null || console.error("".concat(cs(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), it(A, o, t, e);
  }
  var n;
  return i instanceof rg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : vt(i) ? fs(i) : Array.isArray(i) ? Array.prototype.concat.apply(zn, i.map(function(r) {
    return it(r, o, t, e);
  })) : [i.toString()];
}
function cQ(i) {
  for (var o = 0; o < i.length; o += 1) {
    var t = i[o];
    if (Rt(t) && !oa(t)) return !1;
  }
  return !0;
}
var IQ = ss(Zn), CQ = (function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = W.NODE_ENV === "production" && (e === void 0 || e.isStatic) && cQ(o), this.componentId = t, this.baseHash = et(IQ, t), this.baseStyle = e, Es.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ot(A, this.staticRulesId);
      else {
        var n = og(it(this.rules, o, t, e)), r = cr(et(this.baseHash, n) >>> -1714 * -2 + -1 * 8913 + -1 * -5485);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(n, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = ot(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = et(this.baseHash, e.hash), c = "", I = 0; I < this.rules.length; I++) {
        var s = this.rules[I];
        if (typeof s == "string") c += s, W.NODE_ENV !== "production" && (g = et(g, s));
        else if (s) {
          var C = og(it(s, o, t, e));
          g = et(g, C + I), c += C;
        }
      }
      if (c) {
        var x = cr(g >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, e(c, ".".concat(x), void 0, this.componentId)), A = ot(A, x);
      }
    }
    return A;
  }, i;
})(), hs = rt.createContext(void 0);
hs.Consumer;
var xi = {}, gg = /* @__PURE__ */ new Set();
function BQ(i, o, t) {
  var e = oa(i), A = i, n = !Qi(i), r = o.attrs, a = r === void 0 ? zn : r, g = o.componentId, c = g === void 0 ? (function(k, D) {
    var w = typeof k != "string" ? "sc" : Xa(k);
    xi[w] = (xi[w] || 2283 + 1 * -2283) + (1 * 4471 + -3568 * -2 + -5803 * 2);
    var L = "".concat(w, "-").concat(MB(Zn + w + xi[w]));
    return D ? "".concat(D, "-").concat(L) : L;
  })(o.displayName, o.parentComponentId) : g, I = o.displayName, s = I === void 0 ? (function(k) {
    return Qi(k) ? "styled.".concat(k) : "Styled(".concat(cs(k), ")");
  })(i) : I, C = o.displayName && o.componentId ? "".concat(Xa(o.displayName), "-").concat(o.componentId) : o.componentId || c, x = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = o.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var B = A.shouldForwardProp;
    if (o.shouldForwardProp) {
      var l = o.shouldForwardProp;
      E = function(k, D) {
        return B(k, D) && l(k, D);
      };
    } else E = B;
  }
  var u = new CQ(t, C, e ? A.componentStyle : void 0);
  function h(k, D) {
    return (function(w, L, _) {
      var rA = w.attrs, KA = w.componentStyle, Ge = w.defaultProps, qc = w.foldedComponentIds, xa = w.styledComponentId, Vc = w.target, Zc = rt.useContext(hs), zc = Br(), $n = w.shouldForwardProp || zc.shouldForwardProp;
      W.NODE_ENV !== "production" && en(xa);
      var Ea = NB(L, Zc, Ge) || Nt, de = (function(go, Ut, so) {
        var It = {};
        It.className = void 0, It.theme = so;
        for (var ti, _e = LA(LA({}, Ut), It), oi = -8685 + 8685 * 1; oi < go.length; oi += 11073 + -2768 * 4) {
          var co = Rt(ti = go[oi]) ? ti(_e) : ti;
          for (var Ne in co) _e[Ne] = Ne === "className" ? ot(_e[Ne], co[Ne]) : Ne === "style" ? LA(LA({}, _e[Ne]), co[Ne]) : co[Ne];
        }
        return Ut.className && (_e.className = ot(_e.className, Ut.className)), _e;
      })(rA, L, Ea), Ot = de.as || Vc, Jt = {};
      for (var jA in de) de[jA] === void 0 || jA[7096 + 887 * -8] === "$" || jA === "as" || jA === "theme" && de.theme === Ea || (jA === "forwardedAs" ? Jt.as = de.forwardedAs : $n && !$n(jA, Ot) || (Jt[jA] = de[jA], $n || W.NODE_ENV !== "development" || iB(jA) || gg.has(jA) || !sr.has(Ot) || (gg.add(jA), console.warn('styled-components: it looks like an unknown prop "'.concat(jA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ai = (function(go, Ut) {
        var so = Br(), It = go.generateAndInjectStyles(Ut, so.styleSheet, so.stylis);
        return W.NODE_ENV !== "production" && en(It), It;
      })(KA, de);
      W.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ai);
      var ei = ot(qc, xa);
      return Ai && (ei += " " + Ai), de.className && (ei += " " + de.className), Jt[Qi(Ot) && !sr.has(Ot) ? "class" : "className"] = ei, _ && (Jt.ref = _), GA(Ot, Jt);
    })(p, k, D);
  }
  h.displayName = s;
  var p = rt.forwardRef(h), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = x, p.componentStyle = u, p.displayName = s, p.shouldForwardProp = E, p.foldedComponentIds = e ? ot(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = C, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = e ? (function(D) {
      for (var w = [], L = -1153 * -8 + 491 * 6 + 12169 * -1; L < arguments.length; L++) w[L - (1 * -1574 + 1 * -9717 + -1 * -11292)] = arguments[L];
      for (var _ = -5979 + 3 * 1993, rA = w; _ < rA.length; _++) Ir(D, rA[_], !0);
      return D;
    })({}, A.defaultProps, k) : k;
  } }), W.NODE_ENV !== "production" && (GB(s, C), p.warnTooManyClasses = /* @__PURE__ */ (function(k, D) {
    var w = {}, L = !1;
    return function(_) {
      if (!L && (w[_] = !0, Object.keys(w).length >= 5 * -1107 + -6649 + 12384)) {
        var rA = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(541 + 1 * -341, " classes were generated for component ").concat(k).concat(rA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), L = !0, w = {};
      }
    };
  })(s, C)), na(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && Qs(p, i, m), p;
}
function sg(i, o) {
  for (var t = [i[11949 + 569 * -21]], e = 1 * 2155 + -254 + -1901, A = o.length; e < A; e += 1) t.push(o[e], i[e + (4252 * 2 + 6557 + -30 * 502)]);
  return t;
}
var cg = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function QQ(i) {
  for (var o = [], t = 1 * -5881 + -5728 + 11610; t < arguments.length; t++) o[t - (8585 + -2 * 4292)] = arguments[t];
  if (Rt(i) || vt(i)) return cg(it(sg(zn, kt([i], o, !0))));
  var e = i;
  return 1 * -7169 + 3816 + -1 * -3353 === o.length && -857 * 10 + 6 * 1460 + -189 === e.length && typeof e[-1449 + -6062 * 1 + 7511 * 1] == "string" ? it(e) : cg(it(sg(e, o)));
}
function Qr(i, o, t) {
  if (t === void 0 && (t = Nt), !o) throw Lt(2620 + 1601 * 1 + 1055 * -4, o);
  var e = function(A) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    return i(o, t, QQ.apply(void 0, kt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return Qr(i, o, LA(LA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Qr(i, o, LA(LA({}, t), A));
  }, e;
}
var ps = function(i) {
  return Qr(BQ, i);
}, ao = ps;
sr.forEach(function(i) {
  ao[i] = ps(i);
});
W.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ho = "__sc-".concat(at, "__");
W.NODE_ENV !== "production" && W.NODE_ENV !== "test" && typeof window < "u" && (window[ho] || (window[ho] = 0), 7602 + 1 * -7601 === window[ho] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ho] += -3513 + 4 * -543 + 5686 * 1);
const un = Se(void 0);
un.displayName = "CameraServiceContext";
function gt() {
  const i = ne(un);
  if (i === void 0)
    throw new Error(`${un.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function Uo() {
  return !1;
}
function xQ() {
  return !0;
}
async function ms() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ei() {
  return (await ms()).filter((o) => o.kind === "videoinput");
}
function mt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function xr(i) {
  return i.getVideoTracks()[-523 * -5 + -5461 + 2846];
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return IA(s - -364, c);
  }
  function e(g, c, I, s, C) {
    return IA(C - 440, I);
  }
  function A(g, c, I, s, C) {
    return IA(c - -443, C);
  }
  function n(g, c, I, s, C) {
    return IA(c - 675, I);
  }
  function r(g, c, I, s, C) {
    return IA(c - 790, g);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(e(739, 735, "NSkn", 722, 717)) / 1 + parseInt(r("*qB6", 1049, 1041, 1037, 1033)) / 2 * (-parseInt(e(695, 701, "Fp^S", 688, 709)) / 3) + -parseInt(r("toW$", 1035, 1046, 1023, 1052)) / 4 + -parseInt(t(-110, "nS5B", -91, -94, -116)) / 5 + -parseInt(A(-212, -192, -181, -173, "8bGB")) / 6 * (-parseInt(r("#e4d", 1062, 1062, 1055, 1082)) / 7) + -parseInt(t(-146, "IKTz", -133, -128, -139)) / 8 * (-parseInt(n(968, 948, "OQq2", 940, 954)) / 9) + parseInt(e(696, 701, "OQq2", 672, 688)) / 10 * (parseInt(r("HNBF", 1051, 1043, 1040, 1049)) / 11) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(fn, 4727 * -7 + 74864 * 3 + 1 * 129295);
function IA(i, o) {
  i = i - 236;
  const t = fn();
  let e = t[i];
  if (IA.GoWAVv === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    IA.lOKnVl = g, IA.CTGkPj = {}, IA.GoWAVv = !0;
  }
  const n = t[-317 * 22 + -3857 + -10831 * -1], r = i + n, a = IA.CTGkPj[r];
  return a ? e = a : (IA.VVNWyU === void 0 && (IA.VVNWyU = !0), e = IA.lOKnVl(e, o), IA.CTGkPj[r] = e), e;
}
function EQ(i) {
  function o(a, g, c, I, s) {
    return IA(I - -897, s);
  }
  const t = new ArrayBuffer(i[e(1071, 1071, 1092, "18BJ") + "h"]);
  function e(a, g, c, I, s) {
    return IA(a - 834, I);
  }
  const A = new Uint8Array(t);
  for (let a = -895 + 1171 * -3 + -4408 * -1, g = i[e(1081, 1097, 1088, "kGEE") + "h"]; a < g; a++)
    if (o(-611, -618, -609, -630, "Ii@*") !== n(493, "18BJ", 477)) A[a] = i[n(504, "(NBo", 491) + n(507, "Ii@*", 494)](a);
    else {
      const c = new _0x16a416(_0x805712);
      return _0x2eb2fe[o(-628, -654, -654, -641, "]9hA")](c[n(507, "nWpP", 490) + "e"](function(I, s) {
        function C(E, B, l, u, h) {
          return r(l, B - -102);
        }
        function x(E, B, l, u, h) {
          return e(l - -533, B - 327, l - 146, h);
        }
        return I + _0x2e7c3f[x(554, 528, 547, 569, "!^l3") + C(506, 501, "]9hA") + "de"](s);
      }, ""));
    }
  function n(a, g, c, I, s) {
    return IA(c - 236, g);
  }
  function r(a, g, c, I, s) {
    return IA(g - 340, a);
  }
  return t;
}
function fn() {
  const i = ["WQ0bue7cOG", "W6JdLmk3WQldHW", "WOONW4bV", "wH7dP1vDwCk8WOZcLbO", "WOy9W5XiW5S", "wKVcI0KPW5hcP0HrASo8ra", "W6DJdmo4WRG", "W7PaW63dGSkDC8o9ga", "gepcPW", "WOaYW51nha", "W7e1WRldOa", "WQGzW63dSSkU", "W6j8h8keWQ9DW6G", "WOmpW7vmW7O", "dSojq0K1amouuW", "W5XfW4dcL8kwASoe", "WRLeBKeylmkTimksWRBdJSo+Cq", "WQfwW63dP1RcSMrQaa", "CMG5W5PRcuW", "W689W5tcJrBcP8ojb8kn", "WO/dQvhdIIu", "iSovWRBdNmkEW5NdIW", "W6C9W5ZdJgBdVCoGbSkkmKdcMG", "WR3cLSkobSomW7ldTdHiWOpdJG", "WQJdIIOQWOu", "ixFcLY/dPmoXlCo8W5hdHW", "WPpdPKxdGrm", "i8keemkoDgLEW6yLrSolWQaI", "mK3dUmooW6u", "ywLFAI3cPYCtrCkrmbpdIa", "WQZdJN3dJcG", "W79bWR/cSCovcmollCoxWQ5SW70", "WR9xWQtcMCkO", "W5nnEmkAEa", "W6qlqSo7W7uHW4WWpelcL8kd", "WQpdKwdcLM0", "vmk7W6hcKbi", "W642W5JdJwNdTSk3i8kSfu7cMHu", "W4dcMCoWpXyuoSkmW55Bxa", "W5FdIMzaCmoHWQ/cJCk4W5CdwG", "vaJcICkoWPpcQJNdKwRcNmkGoa", "WR0Dqf7cJq", "WPS8W518W4W"];
  return fn = function() {
    return i;
  }, fn();
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return K(g - -350, a);
  }
  function e(a, g, c, I, s) {
    return K(c - 953, g);
  }
  function A(a, g, c, I, s) {
    return K(I - -688, s);
  }
  function n(a, g, c, I, s) {
    return K(g - -875, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(n(-551, -518, -486, "0652", -546)) / 1 * (-parseInt(n(-498, -482, -504, "2aG[", -465)) / 2) + -parseInt(A(-281, -291, -302, -275, "y*oO")) / 3 * (-parseInt(A(-356, -298, -300, -329, "Kx2f")) / 4) + -parseInt(A(-319, -294, -321, -313, "8ClK")) / 5 * (parseInt(e(1368, "&b[z", 1372, 1376, 1391)) / 6) + parseInt(n(-515, -507, -509, "@WG4", -494)) / 7 * (parseInt(t("ral0", 39, 17, 64, 28)) / 8) + -parseInt(t("Le4T", 57, 61, 83, 48)) / 9 * (-parseInt(n(-442, -469, -443, "&b[z", -438)) / 10) + parseInt(t("HfJB", 11, -2, 31, -7)) / 11 + -parseInt(A(-333, -314, -273, -305, "k5xr")) / 12 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(hn, -83 * -13453 + -1674139 + 1460183);
function hn() {
  const i = ["FCoAbCopzG", "lmkaFNpdVSodW4a5WPVdJsi", "lmkcEhddVmkxWOqLWRxdHdKUWRS", "W4FdLuKWWPFcKbNcUCkLwILmW6a", "A0JcQCopWRm", "hbDDWPhcLG", "WROVWOhcGa", "pZf+oCkV", "lCkBE8o3wG", "W7P+W5DMW4G", "DLtdHSkTtSk2ACoSW6qZteLQ", "W4/cHCorwKqwCgJdPWjy", "xa/dUviq", "wt4bWRy8", "lSoEWRpdMbxcKvddUSkbj8o/WRBcKW", "ACo/ltK", "WO1qsZhdImoDsG", "W7dcM8khW47dOMmXBfOgW4tcOCoK", "W49uuqBdOq", "WPVdN8kegWS", "W4FdMe5TW4NdQuBcT8ki", "W5jfxb/dMW", "FmoypsxcUW", "WRW7A8kvzmkgWRBdP8kX", "hCoiWQJdOs4", "W6zNvHJdH8oMFSoKWOhdVCoNrgVcPG", "qZldVSo9aW", "FmoajYi", "eCoiWR8", "W57cHuZdO3S", "fSkYWP5Rha", "EmoiESocu8kXweC", "FSogamkfWOW", "BCkjW7q", "FCoZdmka", "f3ZcVSkJr8kEWOHzW5bsEfBcKG", "cx0gw8oqhSkVW7pdU8kwWO7dHZm", "W5dcJLy", "W65mW4BcHN8", "WRKQW44FW6a", "W7jsWQNcI8kXyMy", "wSoeWRbdWO4", "AKJcTmoBWQy", "zCokbW", "C8ovjsu", "DrurWPm", "W7u3WR/cTmkSsv3dLq", "jsRcQb4", "d8ksW7r7WQZcMSkUWQiX", "dhacxSowfmo3W6BdSSkRWOxdUG", "W616iSkpuW", "jb7cJ8oUcq", "pSkWqWBdOW1nvCoaeKVdGmkX", "WQyMa1RcNW", "lmkqE8o3wG", "mrxdRmovWRHCk8obW5K", "zv/cO8omWQy", "W5S9WRi1W6D6W4adzmkdAmkv", "ur7dUfC", "W7zyheG", "oSkXrqtdOWLgc8o/nepdM8k8eq", "c8oYWRbPWOlcK8kE", "tmkRsci", "W7nivdtcLW", "WORcMLFdKKFdVwK"];
  return hn = function() {
    return i;
  }, hn();
}
async function dQ() {
  function i(I, s, C, x, E) {
    return K(I - -131, C);
  }
  const o = {};
  function t(I, s, C, x, E) {
    return K(C - -988, x);
  }
  o[g(208, 238, 185, 226, "gw80")] = Y0, o[g(205, 219, 233, 177, "y*oO") + "h"] = 256;
  const e = await window[a("y*oO", 1005, 969, 968, 997) + "o"][i(280, 282, "k5xr") + "e"][a("9[w9", 955, 957, 976, 965) + t(-638, -636, -625, "A0CW") + "y"](o, !0, [g(201, 169, 176, 174, "5$4I") + "pt", c(1145, "ral0", 1113, 1145) + "pt"]), A = Uint8Array[g(197, 193, 184, 200, "Ha]*")](Array(-2 * -4961 + -5504 + -4402)[i(289, 283, "^WN]")](0)), n = window[a("C64]", 979, 944, 963, 950) + "o"][a("&b[z", 978, 977, 1008, 982) + a("97dO", 937, 979, 966, 962) + g(185, 188, 208, 184, "Kx2f")](A), r = {};
  r[c(1165, "9[w9", 1192, 1165)] = e;
  function a(I, s, C, x, E) {
    return K(E - 583, I);
  }
  function g(I, s, C, x, E) {
    return K(I - -195, E);
  }
  r.iv = n;
  function c(I, s, C, x, E) {
    return K(x - 779, s);
  }
  return r;
}
function K(i, o) {
  i = i - (2075 * -1 + 1350 + -1 * -1082);
  const t = hn();
  let e = t[i];
  if (K.yeksUk === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    K.fNgMoA = g, K.bmkMxF = {}, K.yeksUk = !0;
  }
  const n = t[2782 * 3 + 1 * 4349 + -12695], r = i + n, a = K.bmkMxF[r];
  return a ? e = a : (K.Xtmqef === void 0 && (K.Xtmqef = !0), e = K.fNgMoA(e, o), K.bmkMxF[r] = e), e;
}
async function lQ(i) {
  const { iv: o, key: t } = await dQ(), e = new Uint8Array(i), A = {};
  A[a(932, 963, "Kx2f", 946, 952)] = Y0;
  function n(x, E, B, l, u) {
    return K(l - -938, u);
  }
  A.iv = o;
  const r = await window[c(-220, "@WG4", -214, -233, -237) + "o"][a(935, 920, "plri", 980, 947) + "e"][s(1269, 1288, ")Pg#", 1265) + "pt"](A, t, e);
  function a(x, E, B, l, u) {
    return K(u - 550, B);
  }
  const g = await window[c(-294, "FHKp", -301, -289, -275) + "o"][C(851, 828, 825, 861, "a@N&") + "e"][s(1288, 1280, "2aG[", 1272) + a(944, 950, "JF%@", 979, 955)](n(-533, -536, -549, -547, "YFtc"), t);
  function c(x, E, B, l, u) {
    return K(u - -646, E);
  }
  const I = {};
  function s(x, E, B, l, u) {
    return K(l - 888, B);
  }
  I[a(935, 897, "y*oO", 915, 912) + "ge"] = r, I[C(839, 835, 847, 845, "0652")] = g;
  function C(x, E, B, l, u) {
    return K(E - 440, u);
  }
  return I.iv = o, I;
}
async function uQ(i) {
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return tA(c - -664, I);
  }
  function e(g, c, I, s, C) {
    return tA(C - 9, I);
  }
  function A(g, c, I, s, C) {
    return tA(I - -663, s);
  }
  function n(g, c, I, s, C) {
    return tA(g - -18, c);
  }
  function r(g, c, I, s, C) {
    return tA(c - -974, s);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(A(-218, -176, -188, "[lDJ", -150)) / 1 + parseInt(A(-171, -193, -166, "0SLA", -186)) / 2 * (parseInt(e(488, 480, "!M(a", 495, 458)) / 3) + -parseInt(A(-206, -124, -169, "H#NI", -136)) / 4 * (parseInt(e(490, 491, "#oam", 552, 509)) / 5) + parseInt(e(444, 444, "T*t1", 461, 493)) / 6 + -parseInt(e(477, 500, "vOSH", 489, 512)) / 7 + parseInt(t(-219, -178, "OV7f", -148, -194)) / 8 * (parseInt(n(470, "rD#b", 478, 470, 518)) / 9) + -parseInt(r(-479, -461, -467, "b^6H", -435)) / 10 === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(mn, -248155 + -1 * -102030 + 1130270);
const Ig = 8249 + -2 * -1046 + -7841, Cg = -1 * 719 + 1 * -424 + 4643, ys = 6965 + 9846 * 1 + -16809, Ds = 0 + 0.5, ws = {};
ws[ke(486, 437, "BKt#")] = 1920;
const bs = {};
bs[xA(1338, 1284, 1307, 1314, "OV7f")] = 1080;
const ks = {};
ks[T(38, 87, 56, 62, "97JD")] = 30;
const Yo = {};
Yo[EA(-103, -54, -100, "JXR#")] = ws, Yo[T(133, 124, 84, 172, "Vet&") + "t"] = bs, Yo[EA(1, -25, 6, "T*t1") + T(115, 156, 89, 93, "@thg")] = ks;
const Ss = {};
Ss[xA(1358, 1357, 1417, 1378, "Q1p6")] = 1920;
const Gs = {};
Gs[EA(-69, -113, -157, "KOkM")] = 1080;
function te(i, o, t, e, A) {
  return tA(o - -904, e);
}
const To = {};
To[ke(468, 509, "4*@w")] = Ss, To[te(-463, -427, -405, "XRWF") + "t"] = Gs, To[te(-371, -419, -431, "BJeO") + T(47, 76, 56, 50, "FR*u")] = 30;
const Ns = {};
Ns[T(89, 100, 89, 64, "#oam")] = 1;
const Rs = {};
function T(i, o, t, e, A) {
  return tA(i - -401, A);
}
Rs[EA(-57, -24, -50, "(zMm")] = 1;
function tA(i, o) {
  i = i - (4 * 415 + -4628 + -681 * -5);
  const t = mn();
  let e = t[i];
  if (tA.khjZRl === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    tA.FCdfpN = g, tA.GrISCY = {}, tA.khjZRl = !0;
  }
  const n = t[-11849 + 1 * 11849], r = i + n, a = tA.GrISCY[r];
  return a ? e = a : (tA.gynkHH === void 0 && (tA.gynkHH = !0), e = tA.FCdfpN(e, o), tA.GrISCY[r] = e), e;
}
const vs = {};
vs[te(-422, -461, -464, "[r4M")] = 1;
const Po = {};
Po[ke(474, 514, "97JD")] = Ns, Po[EA(-99, -96, -112, "v)!9") + "t"] = Rs, Po[EA(-72, -74, -109, "F&du") + xA(1390, 1393, 1356, 1388, "H#NI")] = vs;
const Fs = {};
Fs[xA(1294, 1327, 1307, 1333, "F&du")] = 1;
const Ms = {};
function ke(i, o, t, e, A) {
  return tA(i - -19, t);
}
Ms[xA(1344, 1335, 1330, 1343, "p0UZ")] = 1;
const Ws = {};
Ws[T(114, 143, 95, 75, "[r4M")] = 1;
const _o = {};
function xA(i, o, t, e, A) {
  return tA(e - 860, A);
}
_o[ke(479, 449, "v)!9")] = Fs, _o[xA(1358, 1429, 1376, 1394, "Vet&") + "t"] = Ms, _o[EA(-67, -22, -46, "e1h2") + ke(508, 482, "Dzq7")] = Ws;
const Vt = {};
Vt[xA(1260, 1277, 1345, 1300, "I&Rk")] = Yo, Vt[EA(-99, -59, -44, "97JD") + EA(-124, -118, -159, "v)!9")] = To, Vt[EA(-64, -60, -77, "jZt)")] = Po, Vt[EA(-19, -30, -12, "bsIT") + T(46, 14, 86, 92, "F&du")] = _o;
const pn = Vt, ze = {};
ze[te(-385, -428, -418, "9kv9") + T(105, 144, 82, 153, "vOSH") + xA(1312, 1366, 1308, 1351, "6%F4")] = Ig, ze[EA(-48, -48, -85, "0SLA") + xA(1320, 1319, 1400, 1369, "UwHe") + te(-470, -458, -499, "Ce6H") + te(-455, -451, -420, "b^6H")] = pn[T(79, 88, 31, 39, "v)!9")], ze[ke(504, 475, "p0UZ") + xA(1329, 1266, 1296, 1315, "BKt#") + T(88, 138, 132, 76, "$13T") + T(111, 82, 124, 99, "rD#b")] = pn[EA(-20, -29, -56, "[r4M") + T(109, 122, 103, 65, "T*t1")], ze[T(61, 35, 52, 16, "!M(a") + T(69, 25, 85, 27, "v)!9")] = ys, ze[te(-381, -426, -418, "Ce6H") + EA(-41, -26, -36, "4yPC") + T(65, 22, 31, 89, "vOSH") + T(81, 95, 110, 36, "[lDJ") + ke(448, 425, "Ce6H")] = Ds, ze[EA(-45, -51, -80, "u]7#") + xA(1311, 1313, 1302, 1321, "e1h2") + "Ms"] = Ig;
function mn() {
  const i = ["W5eHWP3dHq", "w8knW4/dV8kq", "uSkAeG", "xu7cSmopW5K", "fv7cM1G", "ye/dI0ldMN5XW6tcJ8kCWPes", "W60nEXei", "WROGW5n5ua", "dfJdQdGz", "W6lcJL3dICkoWORdTCkXWPddNWBcICkl", "W5G1WOddHq", "uLJcTmodW5a", "mXJcTrdcIW", "W6BdM8oHWQxdOq", "D8oxm8kMy1ZcGhSYrCk6WP51", "BaRcGrza", "WQGcWPnzEwH+BSk9n8kgfa", "qNpdPCogWPm", "srKYW6tcSrfJWQWp", "jHboW64w", "huSnWRj6", "WPZcQ8o/W7Hd", "W53dLmkI", "WP/dQdxcId8", "W6BcMCoNneJcRdFcN0q", "DuLaFW", "WPVdOdFcMre", "DqlcI8oZlXZcNJhdIG", "W4K9WPFdHCoe", "c8oGlmovEq", "sGfDW6C7A1dcLXFdPvG", "zCkiW4tcTZW", "W5JcPmkpdx4", "FSkYA8kboMnff8k3W7pcLmkJDG", "aCoKD8kRWQe", "bv3dHXe5", "oCoYhmofEq", "mexdLSoOiW", "B8olW7HDbG", "WQxcH8kzamkj", "lSkCCG", "jIbpW6Gy", "euzXW7i", "WQ7cR8ogW7pcNdKIcuKamSkPW47cMq", "WR9DW6m", "qhdcUCkeW48", "pKJdVMO", "W7ivqcOd", "WO/dLSonlGe", "hgxdICkYWQ85EGTDW4qnW7S", "WOVcI8kji8kn", "lCoIWPlcJHi", "W5dcTMxdIwhdSvNcJSk+WO7dP1e", "W6NdNSoOWQJdRW", "FfCjWQ1gWPunW5O/qeubkq", "W43cO8kVcu4", "wNxcUSkaW6u", "dYzhW6e", "WOxdISkRhW", "W7xdTGBcUwK", "kCkDz8o7pG", "WR/dJGNcMSoc", "WRjEmNnyW7zVW5/cV0Kg", "W4dcUCouhM0", "ddVcIvZcNG", "wCkeWPtdRSodaSovu08", "W58NWOC", "h13dUg4F", "WO3dUtdcNYm", "cSoqW5pdRa", "nbZcNapcNa", "WQjwW7rWBW", "tgZcVCkgW5C", "tZxcNCoTW78", "W4ZdRSkHW7jEW4lcMmkMWR8", "dvNdTb0f", "wexcOG", "EZxcHCoK", "cblcVatcRgFcPsX/seS", "W6BdTbNcK2K", "qCkanCoaWOm", "uCk0imkxWRtdRSk3W5Dz", "W7hdRmke", "W7vnW4ypoW", "auBdJteI", "ev0yWQi", "WRHEW75M", "hfVdO2ix", "W5yXWPRdLSoe", "tXZcVK5FA8oBWQxcLey7", "W6FcRCobfNO", "s1BdQNFdSG", "WRfBmNvBWPmLWOxcV2uNjGJcUq", "DerBywC", "fZlcJ0W", "jmoflCoeza", "cKldTa", "W5ddJ8k8aCo2", "e0ZdVIGj"];
  return mn = function() {
    return i;
  }, mn();
}
const Xe = {};
Xe[xA(1280, 1292, 1371, 1329, "Ce6H") + ke(489, 517, "l[n^") + T(67, 82, 58, 46, "9a*w")] = Cg, Xe[ke(439, 396, "@thg") + xA(1330, 1400, 1362, 1377, "9kv9") + xA(1283, 1341, 1266, 1298, "@thg") + T(71, 24, 57, 31, "4RLC")] = pn[T(64, 45, 111, 70, "Vet&")], Xe[xA(1283, 1294, 1338, 1304, "FR*u") + T(49, 22, 94, 83, "4yPC") + T(70, 100, 63, 96, "FBKi") + EA(-77, -99, -62, "#oam")] = pn[te(-420, -453, -464, "7CAw") + T(91, 112, 67, 123, "9a*w")], Xe[xA(1382, 1349, 1369, 1381, "7xDO") + T(73, 76, 109, 28, "PyVG")] = ys, Xe[xA(1415, 1348, 1419, 1380, "B@b[") + EA(-64, -91, -116, "jZt)") + EA(-42, -44, -86, "$13T") + te(-430, -402, -361, "bsIT") + xA(1414, 1345, 1355, 1374, "KOkM")] = Ds, Xe[te(-450, -463, -433, "[lDJ") + te(-432, -405, -430, "vOSH") + "Ms"] = Cg;
const ra = {};
ra[T(79, 42, 62, 88, "v)!9")] = ze;
function EA(i, o, t, e, A) {
  return tA(o - -555, e);
}
ra[T(56, 36, 30, 16, "KOkM")] = Xe;
const fQ = ra;
function yn() {
  const i = ["wmooySoBW64", "W7mIFWTZ", "WPrBWRuVlW", "W5Dza8o0zG", "amkvpGpcOa", "W4XihSoCCa", "W79SrSoCcSodWP42wgRcO0ZdKa", "WPDHW6Pfaq", "W7VcGHSXWOS", "CGldSJO9", "WPODW5a", "k2BcRConWOBdK18/pmkXWRVdOMu", "W7RdMuiVWPy", "W7hcGHS", "WRX4W5hdVmku", "W4bxbmoRyq", "WOZcNZBcPCkS", "kmkCyCkpj8kLA8kWsG", "iSoHgatdPa", "WOiggSo7AG", "W5uPvaP1", "WQBcQJ9Qrq", "WOnbjJiB", "wCo5z8onW6i", "W5jbqSk/g8kEwmkeb8oTjb7cTG", "Eq9wnqy", "W7xdR2aMW6e", "W5ldHSoXvSk3", "mSkvksxcOa", "CHBdTqaS", "WP9jW6tdLmkA", "W77dNvKLWOO", "WPBdVCoAAmkvfJS", "W4mHFG8", "WQ/dTSk8q8ke", "ESolnCksga", "pSkepGhcPa", "W73cNWCTWO0", "gCk7W6KNEq", "tCkCDt9T", "zqhdVqiT", "EW5Nbbu", "W7RdIKOQWOS", "W5e5FGPp", "aCkUW6O4vq", "W57dQ8k3WR10", "tG4mWP0b", "WOtdTCksWRbw", "WO1AW7xdQ8ku", "W4ZdGSo2x8k3", "WOzJW6vyfG", "W5jbWOldRSk8", "WQSYfmkdvW", "WOixgx8g", "W75kWOldQ8k4", "W5KIFW", "W48jWRxdL8kHjCkeWOZdJa", "WPzgoYeB", "ESkVpCoGEG", "iCkajqJcTq", "dMtdSexcUq", "DSopW5xdVXC", "W57dLmkY", "ASkRmSoHFa", "W6RcJbWSWOS", "gmkfE8k8zq", "WOL4j0KXFCkfc8ohs1tdNCoD", "v8oND8oLW6i", "WPb8W69kfG", "q0/cUmoPEsRdOmkPrqBdKCoW", "W6NdVh4KW7C", "W5nleG/dUG", "x8k7rt5E", "W6bxbmoRyq", "mmoYWQLDW7y", "hXRdUmk+ka", "W7OPbN5M", "hSkfE8k+yG", "WOXmpG", "WOCyW5BcT8oQW4OeWPhcMCk3tmoggSkE", "WPJdN8oIW77dJKDNBSocWQhcNGhdOq", "FCoEW5JdTIS", "W4VdQmkLWRK", "W7xdQ3mLW6y", "W6ldOmoiySkS", "W4iUFHz0", "EYxdRSksW4O", "WPjAW6/dGCkp", "W6RdQZ4oiW", "WRJdOCk0qCkf", "WPj5WQernG", "W5rrdH3dUG", "DbBdTqiR", "FmkcW6pcUSkO", "WPFcRHZcTmkA", "v8o9Fmo7W48", "W6ldQhWAW7O", "W74ieMzQ", "mCoGgsxdHq", "ACoiWOFcQ8oh", "WOKZhSkCrG", "W43dGSoQx8kM", "WOe5W4pdKmoGW4Hjo8oGk1C", "DSo2W4tdPW", "W4xdLCoQv8kX", "WOfwdHOM", "B8knW67cUmk5", "WP/cIJdcUCkq", "WPv/WQekla", "Ea5LlHC", "bmklzq", "W5nMWP3cKSkS", "W4NdVmk/WR91", "WQubja", "W7FcNqegWPO", "WPKzhG", "AGP/mHu", "W4fgqIfgWPrdoqNdRmkmWQK", "imkvhGpcOG", "xSoZy8oaW7e", "WRVdTSkMwq", "vaGjWPq7", "bCkuzSkwDa", "WOOAW5dcS8oVW4KfW6hcOmkRBmo/iG", "WQhcPtaqWRlcQXC", "nSkxlqRcTa", "W5q4yXLZ", "oCo2eJldLa", "bb7dHSkDcG", "o8o3zmo/vfvrW7ZdLW", "eXhdRSk1ka", "W60hh2r7", "WQtcJbVcKCk6", "W6NcK8kpb8oc", "F8oFWOhcH8oA", "W4jwdSo0Ca", "mSoNWQ94W50", "cCklFmkHzq", "WOOCaCo6", "ySosE1ddUf5WsrSYuCkaAq", "Fr12nru", "oCosWRD7W7a", "FmkbW6i", "n8keoG/cOG", "W4jKWPlcJ8k7", "WOddT8kCWQ5R", "WPfpW7xdOSkE", "WO1noG", "W73dOsiCiW", "W5tdHSoXvmkW", "FJLGDSkG", "WQ8QeCkdrW", "vSoZt8oCWP0", "W51SWOhcHSk9", "cSovFSo8WRL1W6C", "EXNdQ8kkW5C", "WOlcMY3cK8kb", "W6RcGGaSWPS", "A8k3W60QWQpdNf/dSmkykYdcVmo6", "rCoGDmoNW6y", "WOnxjJiN", "c19vW4bkhmoqWRpcUuy7", "WOdcJIVcTG", "yXJdSH0S", "WR/cJH8YWR9aW5WqrG", "WPbajI4C", "xXKeWP0h", "W5ldRSkzWQDK", "WOHPW7LmbW", "WQK8nfPzWQNdKG", "WRpcPby", "W6NcI8kAkmow", "f2ddQ0JcJW", "WOFcGsJcLCkG", "b8kQc8kBW4CtWPddJNDnW67cUSkpAq", "W6RdRYudja", "W6RcMbSwWPO", "W7JcHmkhb8oe", "uSolWQlcOSkN", "W7JdOt4QnG", "jSkrkaFcTq", "W63cK8klgCow", "BcpdTCkQW5S", "WPGmafGe", "W6lcLSkAgCow", "W6VdUNW7WOC", "wCocWP3cM8oC", "WRm9W47cIr8", "xmoTt8oQWPe", "WP8QkSk4Ca", "WRpcNWdcKmk8", "W4qSEbr0", "WQNdVSk6q8kI"];
  return yn = function() {
    return i;
  }, yn();
}
function vA(i, o, t, e, A) {
  return oA(i - -603, e);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return oA(I - 593, c);
  }
  function e(g, c, I, s, C) {
    return oA(g - -518, s);
  }
  function A(g, c, I, s, C) {
    return oA(s - 655, C);
  }
  const n = i();
  function r(g, c, I, s, C) {
    return oA(c - 365, I);
  }
  function a(g, c, I, s, C) {
    return oA(c - 774, I);
  }
  for (; ; )
    try {
      if (parseInt(r(784, 741, "e[Tf", 821, 687)) / 1 + parseInt(a(1286, 1228, "Thyf", 1148, 1200)) / 2 * (parseInt(e(-149, -164, -189, "0H1v", -237)) / 3) + -parseInt(A(907, 989, 976, 978, "T8^2")) / 4 * (-parseInt(t(995, "pueG", 1062, 1149, 1075)) / 5) + parseInt(a(1255, 1158, "Z02z", 1073, 1101)) / 6 * (parseInt(A(1139, 1055, 1097, 1087, "6G30")) / 7) + parseInt(A(1081, 1037, 948, 1018, "3IE&")) / 8 * (parseInt(a(1021, 1057, "W64G", 1016, 1111)) / 9) + parseInt(A(921, 1001, 1019, 937, "lRJ3")) / 10 + -parseInt(e(-87, -128, -117, "lRJ3", -102)) / 11 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(yn, -459970 + -3 * -431391 + -14532);
function Ae(i, o, t, e, A) {
  return oA(e - -467, t);
}
function oA(i, o) {
  i = i - 280;
  const t = yn();
  let e = t[i];
  if (oA.PdFeCk === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    oA.jSnHkS = g, oA.TYxOZz = {}, oA.PdFeCk = !0;
  }
  const n = t[0], r = i + n, a = oA.TYxOZz[r];
  return a ? e = a : (oA.JEKTWr === void 0 && (oA.JEKTWr = !0), e = oA.jSnHkS(e, o), oA.TYxOZz[r] = e), e;
}
function fe(i, o, t, e, A) {
  return oA(t - -1e3, e);
}
function UA(i, o, t, e, A) {
  return oA(o - 99, e);
}
function he(i, o, t, e, A) {
  return oA(A - 290, i);
}
class hQ {
  #A;
  [UA(438, 404, 323, "nq8v") + vA(-295, -342, -301, "Z02z")] = [];
  [vA(-206, -120, -299, ")YA7") + vA(-156, -115, -237, "onO9") + vA(-184, -228, -235, "onO9") + "r"];
  [vA(-236, -271, -241, "&%1s") + UA(561, 509, 597, "RQBS") + "s"] = {};
  constructor(o, t = {}) {
    this[A("T6mC", 142, 168) + e(-558, -582, "NQ)h", -598) + e(-611, -580, "1kd*", -579) + "r"] = o;
    function e(r, a, g, c, I) {
      return he(g, a - 267, g - 490, c - 250, r - -1238);
    }
    function A(r, a, g, c, I) {
      return Ae(r - 264, a - 205, r, g - 325);
    }
    function n(r, a, g, c, I) {
      return fe(r - 430, a - 329, r - 827, g);
    }
    this.#A = fQ, this[n(247, 203, "w31[") + A("3IE&", 98, 172) + n(133, 182, "eehH")](t);
  }
  async [fe(-513, -531, -587, "emu1") + fe(-581, -705, -620, "vN01") + vA(-282, -236, -329, "jlu9")]() {
    if (!Uo())
      if (a(1308, 1269, 1226, "jlu9") === g(171, 118, 161, "tKGp")) this[g(320, 344, 401, ")]jB") + r(231, 197, "e[Tf") + t("De#o", 426, 378, 404) + "r"][g(194, 219, 264, "DGm4") + t("eehH", 208, 353, 279) + r(254, 230, "T8^2") + a(1366, 1314, 1297, "!VOB") + "or"](_0x2d3200[r(238, 171, ")]jB")]) && (_0x12eb9e = this[t("vN01", 284, 288, 239) + g(255, 309, 270, "tKGp") + a(1302, 1340, 1407, "lRJ3") + "r"][t("Thyf", 283, 270, 267) + a(1190, 1282, 1355, "aZJ%") + n(477, 439, 534, "pueG") + "s"](this[r(323, 228, "Thyf") + r(241, 165, "9nNN") + "s"], _0x55c927), _0x1dd632--);
      else return;
    const o = await this[t("9nNN", 344, 377, 316) + "st"](this.#A[t("]8M^", 502, 522, 427)]);
    function t(I, s, C, x, E) {
      return he(I, s - 251, C - 368, x - 453, x - -335);
    }
    const e = await this[r(201, 121, "3IE&") + "st"](this.#A[n(529, 589, 514, "jDQQ")]), A = {};
    function n(I, s, C, x, E) {
      return fe(I - 290, s - 212, C - 1129, x);
    }
    function r(I, s, C, x, E) {
      return UA(I - 294, I - -239, C - 141, C);
    }
    function a(I, s, C, x, E) {
      return vA(s - 1540, s - 468, C - 496, x);
    }
    A[a(1377, 1361, 1366, "VTmB") + a(1262, 1299, 1320, "3!LE")] = o[g(184, 192, 147, "!VOB") + "ge"];
    function g(I, s, C, x, E) {
      return vA(I - 488, s - 367, C - 253, x);
    }
    A[n(627, 538, 544, "RQBS") + t("emu1", 346, 362, 410)] = e[n(454, 526, 469, "!zXH") + "ge"];
    const c = A;
    this[n(474, 488, 555, "spDn") + r(191, 102, "XX01")][a(1438, 1371, 1346, ")YA7")](c);
  }
  async [UA(445, 434, 413, "W64G") + "st"](o) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: n, runAmount: r, runDurationCutoffFactor: a } = o;
    let g = -2768 + 1795 * -1 + 4563, c = r;
    function I(p, m, k, D, w) {
      return he(p, m - 221, k - 178, D - 119, k - 329);
    }
    let s;
    function C(p, m, k, D, w) {
      return he(w, m - 278, k - 315, D - 414, m - 305);
    }
    let x = this[C(956, 987, 1044, 1002, "9nNN") + E(1165, 1183, 1202, "i&94") + C(797, 884, 832, 925, "f7GZ") + "r"][u(255, 283, "w31[") + I("&%1s", 1061, 1044, 1066) + B(405, 370, 382, "]8M^") + "s"](this[B(383, 386, 292, "J4Zh") + E(1152, 1194, 1126, "]8M^") + "s"], n);
    for (let p = 0; p < r; p++)
      if (I("3!LE", 986, 965, 1047) === B(227, 324, 296, "spDn")) {
        if (g > A * a) {
          if (I("T6mC", 1035, 967, 995) === B(266, 398, 350, "MKE]")) return;
          c = p;
          break;
        }
        const m = await this[B(369, 364, 444, ")]jB") + I("JLi2", 834, 899, 920) + u(395, 365, "eehH") + B(381, 452, 403, "jDQQ")](x, t);
        if (m[C(933, 984, 1074, 893, "W64G")])
          if (C(908, 882, 885, 903, "f7GZ") !== I("eehH", 1045, 1076, 1105)) this[E(1207, 1273, 1187, "]8M^") + u(421, 351, "jDQQ") + E(1060, 1109, 1090, "&%1s") + "r"][C(1003, 921, 880, 906, ")YA7") + C(1066, 1032, 1072, 999, "jDQQ") + B(471, 398, 456, "MKE]") + E(1138, 1108, 1054, "jDQQ") + "or"](m[E(1059, 1146, 1061, "aZJ%")]) && (E(1108, 1040, 1176, "pueG") !== u(443, 427, "onO9") ? _0x35307d[C(964, 969, 1046, 914, "eehH")]() : (x = this[u(310, 248, "!zXH") + E(1085, 1133, 1120, "eehH") + u(330, 401, "2g%q") + "r"][u(354, 344, "vN01") + I("aZJ%", 951, 964, 986) + u(384, 372, "W64G") + "s"](this[E(1168, 1183, 1160, "w31[") + E(1183, 1228, 1146, "J4Zh") + "s"], e), p--));
          else {
            const k = {};
            return k[C(852, 910, 974, 951, "jlu9") + C(1008, 945, 1015, 963, "jDQQ")] = this[C(978, 952, 970, 910, "&%1s") + E(1130, 1034, 1047, "T8^2")], k[B(410, 357, 369, "Pvnh") + C(917, 954, 936, 1024, "w31[") + "e"] = !1, k;
          }
        if (m[E(1227, 1267, 1195, "!VOB") + B(352, 391, 410, ")YA7")]) {
          if (I("onO9", 919, 971, 1012) === C(1035, 939, 1004, 1026, "T8^2")) return;
          ({ deviceId: s } = m);
        }
        g += m[I("kH*u", 947, 1042, 1005) + E(1231, 1200, 1199, "N(7c")] || -5 * 823 + -5369 + 9484;
      } else ({ deviceId: _0xaf27ab } = _0x1c1337);
    function E(p, m, k, D, w) {
      return UA(p - 305, p - 667, k - 85, D);
    }
    function B(p, m, k, D, w) {
      return Ae(p - 326, m - 195, D, k - 463);
    }
    const l = Math[u(322, 272, "W64G")](g / (c || 9457 + 5 * 643 + -12671));
    function u(p, m, k, D, w) {
      return UA(p - 350, m - -143, k - 252, k);
    }
    this[B(387, 426, 439, "kH*u") + C(1056, 974, 905, 1039, "Z02z") + "s"] = this[B(418, 408, 409, "emu1") + u(256, 326, "tKGp") + B(352, 399, 383, "0H1v") + "r"][E(1193, 1206, 1186, "f7GZ") + B(533, 444, 448, "T6mC") + B(462, 472, 407, "vN01") + "s"](this[I("9nNN", 1034, 941, 1034) + u(346, 414, "2g%q") + "s"], {}, s);
    const h = {};
    return h[I("nq8v", 965, 1001, 1086) + "ge"] = l, h;
  }
  async [UA(473, 549, 496, "tKGp") + he("emu1", 640, 745, 729, 723) + Ae(-96, -3, "Yxd4", -27) + fe(-633, -622, -635, "W64G")](o, t) {
    function e(s, C, x, E, B) {
      return vA(C - -236, C - 456, x - 189, E);
    }
    const A = Date[I(127, "J4Zh", 143)](), n = new AbortController();
    function r(s, C, x, E, B) {
      return Ae(s - 239, C - 230, C, E - -76);
    }
    function a(s, C, x, E, B) {
      return Ae(s - 385, C - 372, s, B - 548);
    }
    const g = setTimeout(() => {
      function s(l, u, h, p, m) {
        return I(h - 642, l, h - 495);
      }
      function C(l, u, h, p, m) {
        return I(m - -403, p, h - 379);
      }
      function x(l, u, h, p, m) {
        return I(m - 258, l, h - 416);
      }
      function E(l, u, h, p, m) {
        return I(l - -480, h, h - 392);
      }
      function B(l, u, h, p, m) {
        return I(u - -30, m, h - 154);
      }
      B(-46, 1, 70, -41, "nq8v") !== C(-311, -268, -234, "Z02z", -302) ? (_0x35f834 = this[B(21, -40, -41, 39, "JLi2") + C(-387, -340, -448, "tKGp", -368) + E(-521, -440, "&%1s") + "r"][x("Z02z", 464, 417, 300, 376) + s("jDQQ", 741, 660) + B(78, 94, 45, 133, "jlu9") + "s"](this[s("Yxd4", 702, 614) + C(-384, -372, -422, "De#o", -448) + "s"], _0x5a7cb7), _0x40cfae--) : n[E(-441, -468, "eehH")]();
    }, t);
    function c(s, C, x, E, B) {
      return fe(s - 457, C - 36, s - 1169, C);
    }
    function I(s, C, x, E, B) {
      return vA(s - 268, C - 163, x - 324, C);
    }
    try {
      if (c(591, ")]jB", 685, 642, 523) !== c(565, "NQ)h", 486, 655, 657)) {
        _0xb08320(_0x1d1a76);
        const s = {};
        return s[r(-232, "v1[r", -282, -194, -277)] = _0x1d50c3, s;
      } else {
        const { deviceId: s, mediaStream: C } = await this[r(-189, "i&94", -327, -239, -250) + e(-443, -471, -509, "jlu9", -402) + I(69, "T6mC", 61, 141, -1) + "r"][I(107, "MKE]", 61, 101, 72) + c(575, "lRJ3", 591, 564, 490) + I(21, "vN01", 3, -49, 30) + "m"](o, n[I(-17, "onO9", -2, -43, -71) + "l"]), x = Date[a("eehH", 590, 607, 484, 511)]() - A;
        mt(C), clearTimeout(g);
        const E = {};
        return E[e(-468, -554, -626, "jDQQ", -602) + c(636, "pueG", 658, 554, 647)] = x, E[a("vN01", 361, 422, 403, 383) + I(-6, "v1[r", 6, -76, 77)] = s, E;
      }
    } catch (s) {
      if (r(-50, "v1[r", -157, -97) === e(-484, -448, -468, "VTmB")) this[e(-517, -479, -444, "W64G") + c(633, ")YA7") + "s"] = _0x4cbbb2;
      else {
        clearTimeout(g);
        const C = {};
        return C[e(-396, -383, -480, "Z02z")] = s, C;
      }
    }
  }
  [vA(-264, -240, -348, "vN01") + UA(546, 527, 456, "De#o") + Ae(-221, -175, "eehH", -161)](o) {
    function t(e, A, n, r, a) {
      return UA(e - 487, n - -236, n - 128, r);
    }
    Object[t(111, 160, 174, "Sl#Y") + "es"](o)[t(158, 147, 201, "Yxd4") + "ch"](([e, A]) => {
      const n = e;
      this.#A[n] && (this.#A[n] = { ...this.#A[n], ...A });
    });
  }
  [vA(-152, -92, -234, "aZJ%") + vA(-260, -324, -327, "!zXH") + he("e[Tf", 654, 679, 609, 587)](o) {
    function t(e, A, n, r, a) {
      return he(r, A - 185, n - 314, r - 291, a - -61);
    }
    this[t(592, 580, 647, "9nNN", 551) + t(443, 556, 505, "v1[r", 520) + "s"] = o;
  }
  async [UA(491, 499, 464, "nq8v") + Ae(17, -66, "vN01", 3) + UA(369, 429, 409, "!zXH") + UA(398, 394, 302, "spDn") + fe(-785, -768, -699, "2g%q")](o) {
    function t(r, a, g, c, I) {
      return Ae(r - 123, a - 196, r, c - -298);
    }
    if (this[n(-217, -253, -183, -241, "&%1s") + t("Yxd4", -464, -408, -431)][t("Z02z", -274, -447, -364) + "h"] === -14661 + 1 * 14661) return;
    const e = this[n(-108, -180, -63, -181, "W64G") + n(-176, -259, -114, -207, "JLi2")][t("nq8v", -287, -234, -326) + "h"] - 1, A = await uQ();
    function n(r, a, g, c, I) {
      return fe(r - 268, a - 415, r - 426, I);
    }
    this[n(-199, -128, -249, -126, "onO9") + t("&%1s", -403, -394, -410)][e] = { ...this[t("Sl#Y", -471, -513, -418) + n(-130, -56, -36, -149, "9nNN")][e], optSetting: A };
  }
  [fe(-605, -555, -607, "!VOB") + UA(519, 511, 567, "XX01") + vA(-135, -87, -76, "!VOB") + he("]8M^", 729, 630, 592, 641) + Ae(-55, -2, "3IE&", -29)]() {
    function o(n, r, a, g, c) {
      return Ae(n - 412, r - 281, c, a - -207);
    }
    const t = {};
    t[e("J4Zh", 137, 183) + o(-329, -377, -338, -330, "!zXH")] = this[o(-344, -475, -393, -473, "J4Zh") + e("J4Zh", 271, 331)];
    function e(n, r, a, g, c) {
      return Ae(n - 223, r - 215, n, a - 369);
    }
    t[A(980, 994, 988, 937, "T8^2") + o(-292, -294, -371, -464, "Thyf") + "e"] = !1;
    function A(n, r, a, g, c) {
      return he(c, r - 463, a - 457, g - 228, r - 321);
    }
    return t;
  }
}
function je(i, o, t, e, A) {
  return j(e - 227, i);
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return j(s - 344, g);
  }
  function e(a, g, c, I, s) {
    return j(I - -892, s);
  }
  function A(a, g, c, I, s) {
    return j(g - 953, s);
  }
  function n(a, g, c, I, s) {
    return j(I - -596, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(t(539, "Vmmp", 551, 580, 609)) / 1 * (-parseInt(e(-537, -386, -563, -500, "P^vp")) / 2) + parseInt(t(713, "qfKt", 621, 701, 693)) / 3 * (parseInt(A(1382, 1364, 1334, 1323, "aY6L")) / 4) + parseInt(t(812, "7gSX", 744, 639, 739)) / 5 + parseInt(t(821, "Cixx", 696, 898, 810)) / 6 * (-parseInt(A(1170, 1235, 1263, 1261, "1SbL")) / 7) + parseInt(e(-457, -483, -497, -504, "TUy[")) / 8 * (parseInt(t(656, "PzLM", 526, 582, 640)) / 9) + -parseInt(n(-171, "0J39", -247, -285, -344)) / 10 * (-parseInt(A(1111, 1202, 1142, 1280, "qfKt")) / 11) + parseInt(e(-671, -559, -521, -578, "Cixx")) / 12 * (-parseInt(n(-164, "hAwP", -92, -125, -210)) / 13) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dn, -206 * 5932 + 329941 * 1 + 1630586);
function wA(i, o, t, e, A) {
  return j(i - 481, e);
}
function Qt(i, o, t, e, A) {
  return j(o - 274, i);
}
function se(i, o, t, e, A) {
  return j(t - 971, i);
}
function Dn() {
  const i = ["FtHf", "b8oeW4K1gq", "WO43WP7cI8kj", "W7eYWOlcLIO", "W6PsgCkrja", "cghcOmkLW7y", "W4NcPSoNWQTo", "WOldSr7cQbuifSoAW6KaW6xdGG", "W4JcRmoKWODD", "x8k2igy1", "E8oMWRzmnq", "bKpdJ8kdFq", "w8oCWOinfa", "Eauh", "W4/cR3tcO8kt", "k2RcNx4v", "ybZdOLm", "B8kZkK4o", "AaJdKapdQW", "W6zOWPTKcq", "aHCHWPPt", "W4/dO3mcFG", "vYNdOCoHpG", "fdmfW5tcMW", "W6ZcHq0Nca", "WOJcJMtdJNrTja", "ehZcKwS", "uSkzWPGpca", "W4ZcP8oPWPOC", "Fmo7WR1fiW", "kSkHW6S", "W78uW4zpFa", "WQ4SWPhcPSk1", "W4fjtM8h", "W6/cQdXpvmoTW4K", "fhVcQSk9W6e", "b8o5W4SIfG", "AmonWPn3WP8", "Fx5HW6m6WPxdPG", "urRcKCkjW5O", "W7ajBXtcHq", "WROxBCoEDmklD21aW63cUwPt", "FSk0ivS", "W7tcPfRdS0y", "omoLxSk8rrdcUutdT8orWPWWW7xcSa", "WQxdICoDWPpdVW", "W7zEsHFdOa", "W4FcQeJdRK0", "Dq4AW7aE", "Fr9v", "yWlcNCkCW74", "zSo9WR1h", "kwvmWQ7cTq", "W6uNArxcHq", "W51DvXldGW", "WRBdQCoD", "eCooW54igG", "W7v1nmoshCo3WRNdLSkuW5tdRwS", "W6vmAdxcTW", "khfaW7Gb", "fSktzMCX", "WPNdR8kLW4nj", "e33cLuSq", "cL7dRa", "WQqKA8kfxW", "W5bkyIpcRa", "W7jhyYlcRa", "qmonWPiggq", "WRVcHG0", "Ea82W6ue", "W6uNDqJcNq", "lsXHf1m", "WRPRWQJcKwVdKxtcKcKRWOhcHSoE", "Ecix", "W45qrWddIa", "WPSrWPm", "WRddKSoCWPFdPa", "W7S1W6NdJs0", "omkLeG", "W6pdVgCnCW", "wbKbW7Ge", "W5NdPCkfW5XZE8oL", "cSkgFa", "EZDCymo0", "W6DPzspcRa", "WO7dPmkYW4Lk", "qdJdRSoKoa", "W63dRMKCBG", "BSoOjSo5WOS", "uZtdVmo5mW", "W6q9WPlcLW", "AmkGhSoQbW", "W68yW55bBa", "W74nW75bAW", "W7dcIqO2", "WPaAFuldGa", "CZvCyCo2", "fmkEBNa", "W6qQW7VdHZa", "WOldO8kLW49h", "aNzFWRxcTq", "z3e8xSoq", "c8osW5qZwa", "W5LIWPPiaG", "eYqwW5JcLG", "eX0HWPbj", "tbNdMZtdMG", "W5FcIq0RbG", "ghFcHL0h", "xmoMWOvAWRW", "tmkNgmoQbq", "WPC2WP7cKCoD", "o8oNwSk1rHpdLd3dV8o7WOSW", "gNZcL3W", "WP3cRMK", "W5/cR1/dRLC", "oLVdHCkisa", "WPCFad5wW5/cLX08qgHp", "BCkWhmoSfa", "EdD5WRxcOCoFf8oK", "sCodWOa", "WPy9WP7cGSkv", "WRxcIazVza", "WO3dQSkKW7bp", "zNi7xG", "mCoiW48Igq", "BCkZieWs", "jSkeWPfgkW", "iSoTWOy", "W5pcS0NdU1e", "F8o1W4JcHmoEgSo7ca", "WRPVWQJcNgJdKt3cTIy5WQdcPW", "nYX+cMC", "jaa1WPvd", "uSk0keat", "ACk/kuyl", "WOWsrW", "WOOPq8oXW4e", "AZRdQa", "WRBdPCopWPpdVG", "dHWpWO9c", "FSkviK8o", "W65EW6xdQIq", "scdcGCkQW5TUW7pdQW", "fSoiW5qPhW", "W4bLxa", "WO8eaeVcNmkfWPFdGCoWW7GpW5S", "W59uoSkKcq", "WRqXF8kmsa", "BXhdO0qC", "WO9bsG", "qCo/WPbgWPK", "WQiaCmkfqW", "W7TEW7ZdKce", "nmoqWPTpoG", "BqldMXNdSa", "WQdcJHbVBq", "W6iYWPRcGd0", "WRldICoxWPpdTa", "WRxcIXfnBa", "xCoyWOyp", "Bhy5", "FCoGWO1tWRC", "W5ZcS8kzW4vUqSoFWOG", "W690W6NdOGq", "oGxdKbNcUa", "W4xcTuK", "Es8vWQLEW7tdGCoZWP5NiSkW", "o2LEWQlcUq", "BCoGWPzunq", "eqyKWPXi", "EYruzmoY", "b1tdTmkpEG", "x8oCmLjq", "ESo9WQe", "pxrbW7Wa", "pY9YgNm", "kwyfpmk0CtldPX0RWP4fW6ZcJa", "ESo3WR5njG", "W7ibWRNcIdC", "WOBcRNu", "n8olWPfkkW", "adOsW4tcIW", "yCkIDmo0WQK", "cghcUmk7W6C", "evldRmkJBq", "WQVcNbe", "aYikW5hcNq", "eexdU8kkFa", "WR46WRjLc8kRWOtdUW", "vWBcGmkGW50", "WQq3y8kbwq", "WRbIW4xdKh1qWO1ZWRdcPSkSfmoQ", "W63dQgiRBa", "kMujpCk0DvpcQdOVWO8T", "omoMwSk9e03dMZxdLCoh", "cCkxFw4G", "BSkQeKaz", "BSoOm8oOWP4", "kgLHW7Wz", "W7NcR0ddS0S", "qrtdVa", "WQyWCSkpxq", "pYawW4/cMW", "W5ikA8oNEq", "W5GjW5PnBG", "xtRdMSolfa", "WPr/yKldMq", "r8o1WOizca", "u8omW4u", "W6WMWOpcGcS", "W7brsdxcRG", "i8obWPrkpa", "k8k8W6xcR8om", "dfpdQmkdEG", "ktO4WP53", "W5T0xHBdGa", "lfHdWQ8suNKKn8kP", "vGBcS8oFlfTWW78NW6iSgSkP", "W7rEW6hdOJO", "yCkVlSoWhG", "xSonjLfd", "WRCQB8kowq", "k8ofWPS", "tJ9vymoP", "W65IWPbicq", "WRBdR8oFWPddOW", "W5DsvZRdIq", "W4VcVCoZ", "W7aXBWNcLG", "E8oZW4FcVSope8ordG", "r8oPWOLhWO0", "WQ9om8ktyq", "WOJdO8k1W7vd", "FbBdOvKE"];
  return Dn = function() {
    return i;
  }, Dn();
}
function Re(i, o, t, e, A) {
  return j(i - -934, o);
}
function j(i, o) {
  i = i - (15678 + -5147 * 3);
  const t = Dn();
  let e = t[i];
  if (j.pqLjLA === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    j.kRGVjQ = g, j.FRNICp = {}, j.pqLjLA = !0;
  }
  const n = t[0], r = i + n, a = j.FRNICp[r];
  return a ? e = a : (j.phsPws === void 0 && (j.phsPws = !0), e = j.kRGVjQ(e, o), j.FRNICp[r] = e), e;
}
class pQ {
  [Qt("1f@x", 591) + Qt("TxE8", 604) + Re(-561, "HhiX")](o) {
    const t = xr(o), e = t?.[n("rH4x", 167, 319, 228, 226) + n("bYAe", 62, 10, 172, 112) + "s"]();
    function A(c, I, s, C, x) {
      return wA(C - 402, I - 14, s - 92, x);
    }
    function n(c, I, s, C, x) {
      return Re(x - 698, c);
    }
    function r(c, I, s, C, x) {
      return wA(I - 452, I - 118, s - 225, c);
    }
    if (!e?.[n("m2%K", 163, 205, 250, 166) + "t"] || !e?.[g("TUy[", 866, 774)] || !e?.[r("hAwP", 1320, 1281) + a(878, "m2%K")]) {
      if (g("t7Z[", 925, 843) === r("5SgN", 1403, 1340)) return _0x1ba56a[a(688, "Cixx") + a(771, "XSAF")];
      throw new y(g("t7Z[", 843, 940) + A(1088, 1053, 1212, 1167, "NYuG") + n("J$E$", 131, 194, 181, 229) + a(869, "aY6L") + A(1439, 1397, 1349, 1332, "Paq!") + n("3GfE", 70, 109, 116, 135));
    }
    if (t) {
      if (g("vze(", 847, 763) === g("V[Lv", 874, 910)) return e[g("3K4h", 997, 1017) + g("6fx8", 848, 885)];
      {
        const c = {};
        c[a(783, "qfKt")] = _0x112de6, _0x390a7d[A(1260, 1315, 1256, 1260, "r2v#") + r("uO%p", 1342, 1303)] = c;
      }
    }
    function a(c, I, s, C, x) {
      return Qt(I, c - 177);
    }
    function g(c, I, s, C, x) {
      return wA(I - 110, I - 3, s - 249, c);
    }
  }
  [Re(-624, "aY6L") + se("uO%p", 1343, 1316) + Re(-541, "(i!E") + Re(-477, "HhiX")]() {
    const o = document[r(875, 926, 812, "uO%p") + r(934, 822, 801, "Paq!") + t(1237, 1340, 1289, 1280, "m2%K")](n(48, "1SbL", -65, -22));
    function t(a, g, c, I, s) {
      return je(s, g - 259, c - 363, c - 695);
    }
    function e(a, g, c, I, s) {
      return je(I, g - 489, c - 73, s - 720);
    }
    o[t(1436, 1454, 1367, 1449, "Cixx") + n(96, "TUy[", -55, -15)] = !0, o[e(1181, 1281, 1143, "lBu]", 1217)] = !0;
    function A(a, g, c, I, s) {
      return se(c, g - 159, s - -534);
    }
    function n(a, g, c, I, s) {
      return se(g, g - 279, I - -1408);
    }
    o[n(-152, "r2v#", -38, -136) + n(-192, "3GfE", -247, -184) + "e"] = !0, o[A(820, 841, "z@mZ", 778, 796)][A(706, 692, "*1Ul", 736, 737) + t(1428, 1377, 1339, 1417, "5SgN")] = r(866, 920, 887, "bYAe") + t(1247, 1129, 1207, 1300, "lAF9"), o[e(1397, 1298, 1382, "XSAF", 1323)][r(955, 948, 900, "i(ck") + "ty"] = "0", o[r(837, 763, 754, "aY6L")][r(737, 852, 888, "J$E$") + A(754, 737, "k^0q", 814, 725) + A(784, 808, "G*D9", 867, 873)] = n(-114, "6fx8", -98, -67);
    function r(a, g, c, I, s) {
      return wA(g - 15, g - 31, c - 138, I);
    }
    return o[e(1205, 1263, 1349, "r2v#", 1253)][e(1369, 1264, 1314, "lAF9", 1348)] = A(841, 652, "!hw9", 692, 765), o[n(-37, "8DqO", 17, -16)][r(938, 834, 886, "V[Lv") + "t"] = r(850, 928, 1040, "Cixx"), o;
  }
  async [je("XHYF", 591, 529, 522) + se("XHYF", 1463, 1396) + wA(759, 731, 848, "TUy[") + se("5Iuu", 1216, 1251)](o, t, e) {
    return new Promise((A, n) => {
      function r(s, C, x, E, B) {
        return j(B - -937, s);
      }
      function a(s, C, x, E, B) {
        return j(B - -649, x);
      }
      function g(s, C, x, E, B) {
        return j(B - 862, s);
      }
      function c(s, C, x, E, B) {
        return j(C - 455, s);
      }
      function I(s, C, x, E, B) {
        return j(B - 423, s);
      }
      if (c("XHYF", 706) !== c("Vmmp", 855)) {
        const s = () => {
          function E(h, p, m, k, D) {
            return c(D, h - 244);
          }
          function B(h, p, m, k, D) {
            return c(D, m - 391);
          }
          function l(h, p, m, k, D) {
            return c(m, h - 459);
          }
          function u(h, p, m, k, D) {
            return c(p, D - -197);
          }
          B(1105, 1031, 1112, 1136, "7gSX") === B(1315, 1185, 1232, 1327, "J$E$") ? this[E(1107, 1081, 1214, 1082, "Vmmp") + l(1361, 1305, "xa^A") + "eo"](o, t) : (_0x39842c?.[u(648, "ovLz", 644, 634, 550) + u(703, "!hw9", 730, 712, 648) + u(643, "8DqO", 664, 697, 585) + B(1285, 1187, 1242, 1350, "3GfE")](l(1355, 1302, "lK03"), _0x38912a), _0x5788cf(_0x3c34a8), _0x416b41(_0xcfbc8a));
        }, C = {};
        C[I("rH4x", 912, 699, 739, 803)] = !0, e?.[a(-246, -368, "lK03", -312, -337) + g("(i!E", 1100, 1082, 1195, 1171) + I("k^0q", 902, 898, 887, 787) + "r"](a(-273, -343, "6fx8", -331, -381), s, C), (async () => {
          function E(p, m, k, D, w) {
            return I(m, m - 395, k - 120, D - 180, p - -1297);
          }
          function B(p, m, k, D, w) {
            return I(m, m - 428, k - 78, D - 467, D - 522);
          }
          function l(p, m, k, D, w) {
            return g(k, m - 253, k - 486, D - 460, D - -1050);
          }
          function u(p, m, k, D, w) {
            return g(k, m - 113, k - 173, D - 487, w - -991);
          }
          function h(p, m, k, D, w) {
            return I(w, m - 392, k - 195, D - 385, m - -1241);
          }
          if (B(1331, "0J39", 1273, 1243) === l(153, 211, "5SgN", 116)) {
            const p = _0x3d3084[B(1092, "lAF9", 1202, 1193) + E(-539, "Vmmp", -524, -508) + l(81, 75, "PzLM", 166)](E(-475, "uO%p", -363, -451));
            return p[E(-553, "aY6L", -505, -513) + E(-532, "*1Ul", -610, -500)] = !0, p[E(-545, "0J39", -642, -610)] = !0, p[B(1195, "qcA0", 1227, 1247) + B(1162, "lAF9", 1318, 1264) + "e"] = !0, p[u(221, 44, "*1Ul", 80, 144)][u(203, 203, "i(ck", 415, 302) + u(251, 99, "lcuf", 64, 170)] = l(220, 246, "1SbL", 251) + E(-619, "vze(", -566, -651), p[B(1410, "8DqO", 1379, 1366)][B(1477, "lK03", 1404, 1378) + "ty"] = "0", p[u(233, 395, "8DqO", 340, 292)][E(-533, "aY6L", -568, -519) + E(-516, "7gSX", -464, -400) + l(108, 210, "m6[w", 159)] = h(-440, -413, -298, -509, "k^0q"), p[u(189, 165, "ovLz", 291, 211)][B(1254, "NYuG", 1164, 1219)] = u(156, 125, "Vmmp", 154, 140), p[l(142, 235, "5SgN", 119)][u(345, 230, "8DqO", 345, 237) + "t"] = h(-504, -513, -505, -486, "QgyI"), p;
          } else try {
            if (h(-529, -449, -360, -375, "rH4x") !== l(103, 204, "lBu]", 203, 134)) await o[B(1437, "G*D9", 1476, 1396, 1408)](), e?.[u(77, 140, "V[Lv", 215, 132) + B(1210, "uO%p", 1103, 1203, 1209) + h(-287, -380, -404, -334, "TxE8") + E(-407, "rH4x", -474, -310, -450)](h(-457, -411, -511, -528, "bYAe"), s), A();
            else {
              const p = _0x381ac3(_0x391f0e), m = p?.[B(1397, "1SbL", 1298, 1297, 1280) + B(1118, "!hw9", 1319, 1208, 1313) + "s"]();
              if (!m?.[B(1283, "J$E$", 1140, 1185, 1171) + "t"] || !m?.[h(-433, -375, -259, -322, "XSAF")] || !m?.[l(1, 69, "5SgN", 103, 150) + u(191, -5, "lBu]", 125, 110)]) throw new _0x4a1517(u(249, 102, "G7XL", 202, 194) + h(-536, -467, -524, -537, "7gSX") + u(238, 265, "!hw9", 401, 327) + B(1301, "0J39", 1261, 1221, 1113) + E(-628, "*1Ul", -545, -695, -564) + h(-348, -435, -353, -332, "k^0q"));
              return p ? m[u(324, 302, "XSAF", 288, 311) + E(-627, "*1Ul", -552, -710, -668)] : void (7502 + -6065 * -1 + 1 * -13567);
            }
          } catch (p) {
            E(-535, "Cixx", -596, -587) !== u(238, 264, "3GfE", 220, 234) ? (e?.[B(1192, "3GfE", 1273, 1199) + h(-649, -547, -525, -627, "aY6L") + u(233, 273, "bYAe", 260, 265) + h(-422, -374, -372, -285, "0J39")](l(184, 192, "TxE8", 232), s), mt(t), n(p)) : _0x369b4c[u(121, 138, "m6[w", 250, 231) + h(-439, -350, -417, -251, "lcuf")](_0x235089);
          }
        })();
      } else {
        const s = { ..._0x52c044 }, C = s, x = { ...typeof C[r("QgyI", -564, -441, -653, -559)] == c("5SgN", 788) + "t" ? C[a(-473, -336, "3K4h", -435, -362)] : {}, ..._0x2848c0 }, E = x;
        if (_0x336d19) {
          const B = {};
          B[g("1f@x", 1386, 1267, 1268, 1304)] = _0x347901, E[I("*1Ul", 645, 795, 762, 754) + g("PzLM", 1157, 1276, 1270, 1265)] = B;
        }
        return C[a(-507, -398, "3GfE", -433, -404)] = E, C;
      }
    });
  }
  async [wA(784, 804, 827, "z@mZ") + wA(942, 874, 1017, "QgyI") + se("xa^A", 1380, 1295) + "m"](o, t) {
    function e(C, x, E, B, l) {
      return Qt(l, x - 655);
    }
    const A = this[c(-253, -147, "PzLM") + g(748, 704, "3GfE") + c(5, 21, "r2v#") + g(831, 938, "PzLM")](), n = await navigator[c(46, 16, "1SbL") + e(1255, 1326, 1276, 1269, "lAF9") + "es"][I(-469, "V[Lv", -466) + a(1268, 1358, "5SgN") + "ia"](o), r = this[c(-169, -82, "!hw9") + e(1192, 1247, 1191, 1177, "P^vp") + c(-133, -91, "Vmmp")](n);
    A[c(74, -27, "!hw9") + e(1435, 1377, 1441, 1278, "QgyI")] = n;
    function a(C, x, E, B, l) {
      return se(E, x - 20, C - -68);
    }
    function g(C, x, E, B, l) {
      return je(E, x - 214, E - 394, C - 261);
    }
    function c(C, x, E, B, l) {
      return se(E, x - 24, x - -1408);
    }
    try {
      if (a(1253, 1333, "lBu]", 1276, 1216) === e(1308, 1379, 1496, 1467, "PzLM")) await this[I(-203, "lBu]", -275, -333, -295) + e(1241, 1170, 1167, 1062, "TUy[") + g(730, 729, "1SbL", 633, 671) + c(-109, -53, "qfKt", 30, -84)](A, n, t);
      else return _0xffc27 instanceof _0x256f4b && _0x5dbdf3[c(-216, -194, "5Iuu", -200, -208)] === c(-147, -115, "r2v#", -113, -156) + a(1372, 1354, "lAF9", 1313, 1358) + g(832, 780, "HhiX", 831, 833) + I(-389, "Cixx", -274, -268, -252);
    } catch (C) {
      g(948, 961, "NYuG") !== g(813, 849, "XSAF") ? y[c(-31, -21, "rH4x") + c(-132, -144, "k^0q")](C) : (_0x5d3178[c(25, -9, "Vmmp")](), _0x127d08(_0x321daf), _0x30cc40[c(-106, -84, "6fx8") + "e"]());
    }
    function I(C, x, E, B, l) {
      return Re(E - 196, x);
    }
    const s = {};
    return s[c(5, -75, "m6[w") + I(-398, "!hw9", -494) + "m"] = n, s[a(1234, 1230, "*1Ul") + e(1449, 1358, 1401, 1322, "J$E$")] = r, s;
  }
  [se("P^vp", 1279, 1384) + wA(797, 770, 787, "3GfE") + "eo"](o, t) {
    o[e(1226, 1246, 1251, "0J39")](), mt(t);
    function e(A, n, r, a, g) {
      return wA(n - 408, n - 96, r - 241, a);
    }
    o[e(1080, 1186, 1276, "k^0q") + "e"]();
  }
  [wA(740, 829, 848, "t7Z[") + je("NYuG", 683, 625, 599) + wA(940, 1053, 897, "t7Z[") + wA(904, 867, 786, "m2%K") + "or"](o) {
    function t(r, a, g, c, I) {
      return je(r, a - 115, g - 149, c - 611);
    }
    function e(r, a, g, c, I) {
      return wA(I - -214, a - 83, g - 271, a);
    }
    function A(r, a, g, c, I) {
      return Qt(a, c - 611);
    }
    function n(r, a, g, c, I) {
      return wA(c - -1062, a - 68, g - 320, a);
    }
    return o instanceof DOMException && o[e(621, "8DqO", 502, 590, 546)] === t("3K4h", 1383, 1257, 1292) + A(1380, "z@mZ", 1355, 1274) + n(-385, "uO%p", -256, -304) + t("m2%K", 1336, 1209, 1272);
  }
  [Re(-619, "G*D9") + wA(900, 991, 808, "TxE8") + Qt("G*D9", 688) + "s"](o = {}, t = {}, e) {
    const A = { ...o }, n = A, r = { ...typeof n[a(-388, -359, -335, -425, "TxE8")] == g(757, 674, "5Iuu") + "t" ? n[g(596, 497, "P^vp")] : {}, ...t };
    function a(s, C, x, E, B) {
      return se(B, C - 210, C - -1742);
    }
    function g(s, C, x, E, B) {
      return Re(s - 1236, x);
    }
    function c(s, C, x, E, B) {
      return je(x, C - 435, x - 26, C - 466);
    }
    const I = r;
    if (e)
      if (g(706, 630, "(i!E") === a(-389, -490, -513, -598, "lBu]")) {
        const s = {};
        s[g(676, 726, "t7Z[")] = e, I[a(-305, -325, -402, -342, "xa^A") + c(895, 957, "hAwP")] = s;
      } else throw new _0x40fe92(c(1095, 1068, "lK03") + c(1046, 1061, "lcuf") + g(684, 579, "m6[w") + g(739, 777, "PzLM") + c(1184, 1074, "8DqO") + g(687, 732, "xa^A"));
    return n[c(1092, 982, "t7Z[")] = I, n;
  }
}
const Er = {};
Er.FRONT = "user", Er.BACK = "environment";
const aa = Er;
function ga() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Bg() {
  return /Android/i.test(navigator.userAgent);
}
function oo() {
  return /Firefox/i.test(navigator.userAgent);
}
function Ls() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const mQ = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
};
function Os() {
  return navigator.userAgent;
}
function yQ() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Ho = {};
Ho.width = 1920, Ho.height = 1080, Ho.facingMode = aa.FRONT;
const DQ = Ho;
class Js {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: o = DQ, minCameraShorterSide: t = uC } = {}) {
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.#A = e;
  }
  get availableCameraProperties() {
    return this.#e;
  }
  get mediaStream() {
    return this.#t;
  }
  get videoTrack() {
    if (this.#t) return xr(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    mt(t);
  }
  async open(o = {}) {
    Bg() && oo() && await Xi(-5543 * 1 + 1 * 3602 + 2391), this.#t = await navigator.mediaDevices.getUserMedia(o), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new y("Video track must be initialized to get next device");
    const o = await Ei(), t = this.videoTrack.getSettings(), e = o.findIndex((n) => n.deviceId === t.deviceId);
    return (o[e + 1] ?? o[0]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(o) {
    if (!this.videoTrack) throw new y("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, o);
  }
  close() {
    this.#t && (mt(this.#t), this.#t = null);
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new y("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new y("Video width is undefined");
    if (!o.height) throw new y("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings();
    return (await ms()).find((A) => A.deviceId === o.deviceId)?.label;
  }
  async getBestCameraInfo(o) {
    if (o !== aa.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (ga())
      return (await Ei()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const o = await Ei();
    for (const t of o) {
      Bg() && oo() && await Xi(-2237 * 1 + -3666 + -6353 * -1);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const n = {};
        n.video = A;
        const r = await navigator.mediaDevices.getUserMedia(n), a = xr(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = a.getSettings(), c = { ...g };
        c.deviceName = a.label;
        const I = {};
        I.cameraProperties = c;
        const s = I;
        this.#e.push(s), mt(r);
      } catch (e) {
        e instanceof Error && y.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.#A.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    const o = this.videoTrack?.getSettings();
    if (!o?.height || !o?.width)
      throw this.close(), new y("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(o?.width, o?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new y("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
class wQ {
  #A = !1;
  videoHandler;
  cameraHandler;
  videoRecorder;
  performanceCheckup;
  cameraEvaluator;
  constructor({ cameraEvaluator: o, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: n }) {
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = o, this.videoRecorder = n;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    this.#A || (this.#A = !0, await Js.requestPermission());
  }
  async startFirstVideoStream(o = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), xQ() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t?.deviceId);
    !oo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new y("Video track must be initialized to take photo");
    const o = this.cameraHandler.videoTrack?.getSettings();
    if (!o?.width) throw new y("Cant take photo - video width is undefined");
    if (!o?.height) throw new y("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new y("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -9301 + 3 * 2098 + 3007, -1541 + 1 * -9427 + 10968), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(o) {
    await this.cameraHandler.open(o), mQ() && (this.cameraHandler.close(), await this.cameraHandler.open(o)), await this.mountVideoStream(), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const o = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(o);
    this.pauseStream(), !oo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new y("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class bQ {
  #A;
  constructor(o) {
    this.#A = o;
  }
  get videoElement() {
    return this.#A;
  }
  async play(o) {
    this.#A.srcObject = o, await this.#A.play();
  }
  stop() {
    this.#A.srcObject = null;
  }
  hasSrcObject() {
    return !!this.#A.srcObject;
  }
}
function CA(i, o) {
  i = i - (-159 + -1 * -473);
  var t = wn(), e = t[i];
  if (CA.uurGas === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, x, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (var l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    CA.ggdsoy = n, CA.vPycvl = {}, CA.uurGas = !0;
  }
  var r = t[0], a = i + r, g = CA.vPycvl[a];
  return g ? e = g : (CA.frNdZj === void 0 && (CA.frNdZj = !0), e = CA.ggdsoy(e, o), CA.vPycvl[a] = e), e;
}
function pe(i, o, t, e, A) {
  return CA(A - 492, t);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return CA(s - 150, g);
  }
  var e = i();
  function A(g, c, I, s, C) {
    return CA(I - -364, C);
  }
  function n(g, c, I, s, C) {
    return CA(C - -334, s);
  }
  function r(g, c, I, s, C) {
    return CA(C - -684, c);
  }
  for (; ; )
    try {
      var a = parseInt(A(33, -26, -18, 49, "X0xy")) / 1 * (-parseInt(A(-43, -32, -46, -35, "ABpn")) / 2) + -parseInt(A(88, 13, 22, 29, "O)op")) / 3 * (-parseInt(t("W(S]", 483, 491, 494, 467)) / 4) + parseInt(n(27, 43, 50, "mEcQ", 90)) / 5 + parseInt(A(-21, -10, -45, -52, "wNQc")) / 6 * (-parseInt(n(54, 55, 49, "Iq8j", 108)) / 7) + parseInt(A(100, 57, 42, 32, "!QWI")) / 8 * (-parseInt(A(11, 57, -7, 51, "cxVy")) / 9) + -parseInt(r(-297, "BA0#", -289, -324, -334)) / 10 * (-parseInt(A(67, 59, 57, 115, "s4ua")) / 11) + parseInt(A(15, 104, 73, 14, "BA0#")) / 12;
      if (a === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, 86949 + 34119 * 1);
function YA(i, o, t, e, A) {
  return CA(o - 617, t);
}
function FA(i, o, t, e, A) {
  return CA(e - -194, o);
}
function bA(i, o, t, e, A) {
  return CA(e - -9, t);
}
function xt(i, o, t, e, A) {
  return CA(o - 465, A);
}
function wn() {
  var i = ["W43dMu1wCq", "cvRdQSkPnq", "W7u2WPz3WPW", "WRhcUCkgjvi", "WQ7cTCkjkfq", "W7nGzCksW4NcQd/dGqS", "hSoTt8kBWQC", "WRNcQ8kBbvG", "W7JdICkG", "W5jbWQ5sW5FdIK52WP0", "W74gj1BdTq", "i8oeptya", "o8k6leCuWRG5ASoAWQeuW6O", "oSowWOzjW6xcNr5Ysgq", "WOPNWQH1bW", "W6tdPCkIzSo3", "WQ9DWP1oeq", "emo6umkeWQC", "bCkwB8kBCG", "W4ddHbtdPmo9", "WOZcK8kN", "W6Sllh3dLW", "W6rqWRFcMmkm", "WQ1obW", "q8oJt8oCia", "W7XFhSkeWPGdWRjPW4hcPmowW5VcTW", "W7WqjNldTW", "WR1YWPTbhG", "q8oJt8oipq", "FSoXW6e", "WP7cHGhcOmogzHq", "W7jHA8oBW6pcJH3dOYBdMa", "bSodW5LE", "W5bzgwRdSW", "W6vzqmkSWR5xWQ4KWOi", "tCkKW5zNvq", "W5tdOG/dMSo2", "W6CjW7e+W7q", "W61nW4NdLIm", "WRCtaCkAWRK", "W6m7WOL1WQK", "W79+WQBcICkm", "W4D4WQldVmoI", "W5bLW7xcHXVdVCoIrSo3", "E8kcFxD7vqJcN8kaW4tcQKNdSW", "WQ4SgvRdQcJdUSkfqNutWO8", "W5RcMtFcSmkP", "lCoxxG", "W6qRWPDJ", "W4FdIXldOSoN", "W601W7O", "B8kceCoWWP4", "CSoTBrvo", "sgnGeIdcTmoeW4v6mdfhwq", "dNddR8k3bG", "W4DbgetdSq", "gCoQF8kGWOC", "l8ofpqeK", "D8oMAW", "WOvRfmoNWRq6WP4", "W6X3WQlcNmkB", "i8oBkW", "WRufbSknWR8", "W59dn8oXWOy", "W6C7W6q1W5u", "eSoXqmkaWOu", "WQGFsmoCW5m", "W6ddNLP5Bq", "wmoJrmoEia", "WRVdVCkqW7FdNKxdOCoT", "r1pcGCouWP8", "pmkMWQDhW6mmcL3dUq", "bSo/W5LFnq", "FLfgWRu", "AbKDW77cLG", "W7XEg8kfWPalW6bPW5JcHCoVW50", "j1i6lvC", "WPyYWQdcMt8", "CCkQrWGE", "E8kJvWin", "W47cS2nGdG", "WOuetCoqW5q", "WRyxWPNcKqeVzCoFo8kS", "WQGLmW", "dteQW6ZdQW", "iCkIFxldKSoBWQP+", "emo6umkqWRO", "W4dcUqxcRCo5", "mmoyrgZcPq", "svVcNCodWOC", "tSoVrmoloW", "EqmbW5pcRq", "W6mjWPX+WOG", "W6hcQSkcW7pdVa", "W4ddSX7dV8o2", "zG8xW43cIW", "yCkpW5O", "WO7cM8k7WOC5", "WQGMs8okW6u", "W4ZcPrpcQW", "t1xcHa", "WQGOwmowW48", "W7ddNLO", "aCkExG", "W6aRWOT0WRG", "W7hdVeDgCa", "WOSGWQm", "W5RdQrldPCo6", "W5WkjNddQa", "bLuWoKS", "W4DifW", "gCk/d8kpFLalbc3dJCoytG", "WPr3WPfycG", "W6CXW6CeW58", "WQBcLSkNWPqG", "WO3dG3ddTCoSWOa1bYZcJCo7WO4", "WRjXWOu", "ACkbhxlcRXr8g3m", "E8o4Brzs", "v8kikG", "WPOjeCk6WQm", "WONcJspdSdy", "WQNcHs7dTY8", "W6ldLvP+yq", "W5DJfCo7WQ4", "bCoeW45Fna", "j8oxiceU", "W5z7WQZcKmky", "W7rFhCkhWPqoW6zSW5/cSComW70", "ih8EceK", "W4FdRHtdV8oh", "ww51WQ7dSGzon8ojCW", "uCkgm2pdJG", "WQqdr8ohW4G", "lqWBW6tcKSo9C3y8qtvxWO4", "u1FcKSojWOG", "W5bpdCo6"];
  return wn = function() {
    return i;
  }, wn();
}
class kQ {
  [bA(313, 391, "u!u*", 345) + bA(308, 339, "lkQV", 340) + xt(881, 850, 857, 846, "t89)")] = -9354 + -3 * -3118;
  [xt(786, 847, 856, 875, "F^g9") + pe(979, 915, "2wYt", 916, 931) + YA(1091, 1022, "F^g9") + YA(936, 953, "wNQc")];
  [bA(410, 380, "O)op", 356) + bA(349, 443, "ns92", 393) + "p"] = void 0;
  constructor() {
    function o(A, n, r, a, g) {
      return FA(A - 121, a, r - 242, A - -52);
    }
    function t(A, n, r, a, g) {
      return bA(A - 492, n - 321, n, g - -627);
    }
    function e(A, n, r, a, g) {
      return bA(A - 380, n - 182, a, n - 817);
    }
    this[e(1223, 1258, 1250, "cxVy") + t(-260, "ns92", -359, -364, -320) + t(-169, "gjMN", -248, -178, -203) + o(186, 150, 194, "5e5S")] = Date[t(-245, "7k6d", -257, -308, -261)]();
  }
  [YA(989, 981, "7k6d") + bA(386, 349, "&SE8", 358) + YA(1023, 998, "ABpn")]() {
    function o(r, a, g, c, I) {
      return FA(r - 475, a, g - 58, I - 220);
    }
    this[n(359, 300, 353, 259, "5e5S") + n(310, 242, 250, 209, "ypUz") + o(318, "skn*", 322, 366, 348)]++;
    function t(r, a, g, c, I) {
      return xt(r - 477, g - 277, g - 455, c - 85, c);
    }
    function e(r, a, g, c, I) {
      return bA(r - 393, a - 56, a, g - 592);
    }
    function A(r, a, g, c, I) {
      return YA(r - 282, g - -1028, r);
    }
    function n(r, a, g, c, I) {
      return YA(r - 90, a - -689, I);
    }
    if (this[e(908, "W(S]", 951) + t(1103, 1026, 1074, "wNQc") + n(279, 261, 209, 248, "mEcQ")] === 1)
      if (n(407, 354, 302, 380, "2wYt") !== o(461, "@gc2", 483, 390, 430)) this[A("&SE8", -50, -32) + A("BA0#", -23, -55) + "p"] = Date[n(337, 319, 283, 266, "2wYt")]() - this[o(359, "@gc2", 409, 343, 410) + n(248, 281, 256, 278, "u!u*") + o(434, "gjMN", 514, 400, 459) + n(311, 299, 309, 269, "g(!L")];
      else return this[t(1106, 1107, 1142, "j2%[") + n(324, 325, 340, 273, "*)i5") + "p"];
  }
  [YA(1060, 1031, "&SE8") + FA(217, "o4D7", 276, 224) + FA(193, "pN)7", 248, 221) + pe(840, 899, "gjMN", 904, 875) + "up"]() {
    function o(r, a, g, c, I) {
      return pe(r - 243, a - 189, c, c - 369, r - -399);
    }
    if (!Uo()) {
      if (A("aIHP", 719, 745) === e(1119, 1177, 1229, "F9L]")) return;
      if (!_0x580cd1()) return;
      this[e(1169, 1134, 1122, "lkQV") + e(1162, 1183, 1165, "pN)7") + n(474, "8A@p", 546, 500, 531)] = -1 * -8603 + -9121 * 1 + 518, this[o(540, 486, 568, "4lRk") + A("2wYt", 667, 705) + "p"] = void 0, _0x1a6116[n(550, "ABpn", 512, 526, 506) + t(699, 662, 640, "t89)") + o(473, 500, 495, "8A@p") + n(611, "j2%[", 656, 648, 598)](e(1136, 1125, 1111, "o4D7") + "wn", this[o(456, 479, 402, "skn*") + n(594, "BA0#", 571, 593, 527) + n(456, "bTfQ", 509, 528, 479)][t(611, 611, 566, "&OBk")](this));
    }
    function t(r, a, g, c, I) {
      return pe(r - 258, a - 114, c, c - 134, a - -229);
    }
    this[t(663, 703, 721, "O)op") + e(1144, 1078, 1029, "ypUz") + A("aIHP", 733, 738)] = 0;
    function e(r, a, g, c, I) {
      return YA(r - 54, a - 147, c);
    }
    this[t(644, 584, 572, "xCPB") + e(1117, 1115, 1112, "@gc2") + "p"] = void 0;
    function A(r, a, g, c, I) {
      return FA(r - 90, r, g - 491, g - 512);
    }
    function n(r, a, g, c, I) {
      return pe(r - 487, a - 369, a, c - 256, I - -338);
    }
    window[o(428, 468, 401, "ns92") + e(1154, 1140, 1090, "BA0#") + A("F^g9", 704, 642) + o(467, 434, 510, "Iq8j")](e(1189, 1200, 1147, "O)op") + "wn", this[t(609, 659, 633, "*)i5") + e(1184, 1119, 1088, "Yj)0") + t(654, 621, 596, "Ah)t")][e(1035, 1087, 1097, "&SE8")](this));
  }
  [FA(205, "o4D7", 214, 146) + bA(325, 376, "BA0#", 332) + FA(201, "wNQc", 244, 207) + FA(202, "5e5S", 149, 195) + "up"]() {
    function o(r, a, g, c, I) {
      return pe(r - 385, a - 434, I, c - 410, g - -1065);
    }
    function t(r, a, g, c, I) {
      return YA(r - 270, c - 180, a);
    }
    function e(r, a, g, c, I) {
      return bA(r - 223, a - 349, I, c - -238);
    }
    if (!Uo())
      if (e(265, 144, 190, 198, "lMRb") !== e(63, 30, 128, 82, "F9L]")) this[o(-190, -64, -126, -73, "4lRk") + e(190, 148, 156, 165, "8A@p") + "p"] = _0x59e2e2[t(1170, "q9K5", 1255, 1191)]() - this[o(-131, -181, -165, -184, "BA0#") + t(1111, "!QWI", 1118, 1156) + o(-205, -218, -207, -225, "lkQV") + n(-129, "C9OV", -119, -111, -144)];
      else return;
    function A(r, a, g, c, I) {
      return bA(r - 94, a - 467, g, r - 62);
    }
    function n(r, a, g, c, I) {
      return bA(r - 478, a - 272, a, I - -513);
    }
    window[A(475, 511, "gjMN") + e(76, 85, 51, 95, "8A@p") + t(1201, "F^g9", 1160, 1166) + "r"](n(-133, "O)op", -46, -23, -86) + "wn", this[t(1264, "q9K5", 1249, 1204) + A(502, 560, "bTfQ") + t(1180, "v36S", 1192, 1232)][o(-183, -104, -162, -201, "t89)")](this));
  }
  [xt(963, 903, 878, 931, "gjMN") + FA(88, "j2%[", 183, 153) + "lt"]() {
    function o(g, c, I, s, C) {
      return xt(g - 238, s - 405, I - 379, s - 187, I);
    }
    function t(g, c, I, s, C) {
      return YA(g - 374, C - -136, s);
    }
    if (!Uo() || !this[o(1180, 1251, "7k6d", 1215) + t(872, 855, 889, "ypUz", 876) + "p"])
      if (n(571, "o4D7", 502, 531, 544) !== a("ns92", -377, -433, -433, -419)) {
        var e = {};
        return e[o(1153, 1252, "mEcQ", 1197) + a("7k6d", -393, -488, -507, -443) + "e"] = !1, e;
      } else {
        var A = {};
        return A[n(508, "O)op", 496, 617, 556) + r(823, 845, 860, "pN)7") + "e"] = !1, A;
      }
    function n(g, c, I, s, C) {
      return YA(g - 26, C - -404, c);
    }
    function r(g, c, I, s, C) {
      return bA(g - 245, c - 105, s, I - 453);
    }
    function a(g, c, I, s, C) {
      return pe(g - 485, c - 180, g, s - 285, C - -1345);
    }
    return { performance: !0, hiccupAmount: this[o(1321, 1349, "F^g9", 1318) + r(858, 905, 837, "mEcQ") + o(1307, 1261, "2wYt", 1298) + "t"](), firstHiccup: this[a("ypUz", -452, -566, -462, -516) + o(1357, 1359, "C9OV", 1300) + o(1260, 1232, "wNQc", 1293) + a("bTfQ", -551, -487, -490, -514) + "ss"]() };
  }
  [YA(1048, 1015, "8A@p") + YA(919, 947, "lMRb") + FA(202, "F^g9", 300, 237) + "t"]() {
    function o(A, n, r, a, g) {
      return bA(A - 382, n - 31, g, r - -693);
    }
    function t(A, n, r, a, g) {
      return pe(A - 457, n - 349, g, a - 368, a - -1210);
    }
    function e(A, n, r, a, g) {
      return xt(A - 309, A - -896, r - 496, a - 251, a);
    }
    return this[o(-205, -309, -273, -206, "o4D7") + t(-385, -328, -332, -330, "bTfQ") + e(10, 72, 50, "X0xy")];
  }
  [FA(152, "ryz3", 108, 132) + bA(325, 381, "t89)", 329) + pe(923, 914, "Iq8j", 819, 854) + FA(66, "&SE8", 113, 121) + "ss"]() {
    function o(e, A, n, r, a) {
      return FA(e - 214, e, n - 292, a - 709);
    }
    function t(e, A, n, r, a) {
      return FA(e - 381, e, n - 98, r - 53);
    }
    return this[t("CP0&", 164, 132, 176) + o("ns92", 860, 859, 861, 917) + "p"];
  }
}
const SQ = -421 * 1 + 2 * -2053 + 5007, GQ = -542 * -17 + 5032 + -298 * 47, sa = 1 * -3011 + 1 * -6121 + 1 * 9162, Us = -1 * 1391 + -4705 + 7 * 873, Ys = -3271 * -2 + -14 * -693 + -6 * 2706, dr = {};
dr.codec = "avc1.42E01E", dr.bitrate = 1e6;
const po = dr, NQ = -3867 + 1 * 8223 + -2 * 2177, RQ = -84 * -375 + 49645 + -51145;
class vQ {
  shouldBeTested = !0;
  testFramesSizesList = [];
  maximumTestFrames;
  maximumTestFramesSize;
  constructor(o, t) {
    this.maximumTestFrames = o, this.maximumTestFramesSize = t;
  }
  addTestFrame(o) {
    this.testFramesSizesList.push(o);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let o = -2793 + 2371 * 1 + 422;
    for (const t of this.testFramesSizesList)
      o += t;
    return this.shouldBeTested = !1, o > this.maximumTestFramesSize;
  }
}
class Ts {
  encoder;
  create(o) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), o(t, e);
    }, error: (t) => {
      throw y.fromError("Encoding error: " + t);
    } });
  }
  configure(o) {
    this.encoder && this.encoder.configure(o);
  }
  encode(o, t = !1) {
    if (this.encoder) {
      const e = {};
      e.keyFrame = t, this.encoder.encode(o, e);
    }
  }
  async close() {
    this.encoder && (await this.encoder.flush(), this.encoder.close(), this.encoder = void 0);
  }
  async isConfigSupported(o) {
    const t = await VideoEncoder.isConfigSupported(o);
    return t.supported ? t.supported : !1;
  }
  static isSupported() {
    return "VideoEncoder" in window;
  }
}
function FQ(i) {
  if (!i) return !1;
  const o = Ts.isSupported();
  return !o && y.logError("Video encoding is not supported in this browser."), o;
}
const lr = {};
lr.LOW = "low", lr.STANDARD = "standard";
const bn = lr, ur = {};
ur.SPS = "SPS", ur.PPS = "PPS";
const di = ur;
class MQ {
  parseAVCCParameterSets(o) {
    try {
      let t = 0;
      if (t += -5697 + 1 * 5701, t >= o.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(o, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(o, t), n = {};
      return n.pictureParameterSet = A.parameterSet, n.sequenceParameterSet = e.parameterSet, n;
    } catch (t) {
      y.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(o, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(o, t, di.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(o, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(o, t, di.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(o, t, e) {
    if (t >= o.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === di.SPS ? o[t] & 6172 + -6141 * 1 : o[t], n = t + (-1281 * -1 + -1 * 820 + -460);
    return this.skipToNextSectionAndReturnFirstParameterSet(o, n, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(o, t, e) {
    let A = t;
    for (let r = 6961 * 1 + 1 * 1787 + -8748; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(o, A);
      if (A = a.nextOffset, a.parameterSet && r === -7 * -418 + -1349 + -1577) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const n = {};
    return n.nextOffset = A, n;
  }
  extractSingleParameterSetFromAVCC(o, t) {
    if (t + (-2 * 559 + -7969 + -1 * -9089) > o.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const e = new DataView(o.buffer, o.byteOffset), A = e.getUint16(t, !1), n = t + (-10504 + -34 * -309), r = n + A;
    if (r > o.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const a = o.slice(n, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class WQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([1434 * -4 + 2526 + -3210 * -1, -5064 + -633 * -8, 0, 547 * -8 + 3912 + 465]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new MQ();
  }
  extractParameterSets(o) {
    if (this.parameterSets = void 0, !o.description) return;
    const t = this.normalizeBufferSource(o.description);
    t && (this.parameterSets = this.parameterSetsHandler.parseAVCCParameterSets(t) || {});
  }
  process(o) {
    return this.buildH264AnnexBRawVideo(o);
  }
  buildH264AnnexBRawVideo(o) {
    const t = [...this.getParameterSetsAnnexB(), ...this.getAnnexBParts(o)];
    return this.combineRawVideoParts(t);
  }
  getParameterSetsAnnexB() {
    const o = [];
    return this.parameterSets?.["sequenceParameterSet"] && (o.push(this.START_CODE), o.push(this.parameterSets.sequenceParameterSet)), this.parameterSets?.["pictureParameterSet"] && (o.push(this.START_CODE), o.push(this.parameterSets.pictureParameterSet)), o;
  }
  getAnnexBParts(o) {
    const t = [];
    for (const e of o)
      t.push(...this.convertAVCCToAnnexB(e));
    return t;
  }
  convertAVCCToAnnexB(o) {
    const t = [];
    let e = 0;
    for (; e < o.length; ) {
      const A = this.extractNALUnit(o, e);
      if (!A) break;
      t.push(this.START_CODE), t.push(A.data), e = A.nextOffset;
    }
    return t;
  }
  extractNALUnit(o, t) {
    if (t + (-573 * -17 + -6122 + -3615) > o.length) return;
    const e = new DataView(o.buffer, o.byteOffset), A = e.getUint32(t, !1), n = t + (1 * -7583 + -455 + 2 * 4021), r = n + A;
    if (!(r > o.length))
      return { data: o.slice(n, r), nextOffset: r };
  }
  normalizeBufferSource(o) {
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (o instanceof SharedArrayBuffer) return this.copyFromSharedArrayBuffer(o);
    if (o instanceof Uint8Array) return o;
  }
  copyFromSharedArrayBuffer(o) {
    const t = new ArrayBuffer(o.byteLength), e = new Uint8Array(o), A = new Uint8Array(t);
    return A.set(e), A;
  }
  combineRawVideoParts(o) {
    const t = o.reduce((n, r) => n + r.length, 0), e = new Uint8Array(t);
    let A = 2 * -4174 + 963 * 3 + -1 * -5459;
    for (const n of o)
      e.set(n, A), A += n.length;
    return e;
  }
}
class LQ {
  chunks = [];
  maxChunksCount;
  constructor(o = Ys, t = sa) {
    this.cleanSetup(o, t);
  }
  cleanSetup(o, t) {
    this.clear(), this.maxChunksCount = (o + (7848 + 1077 * -1 + -6770)) * t;
  }
  add(o) {
    this.chunks.push(o), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const o = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(7977 + 7977 * -1, o));
  }
}
class Qg {
  codec;
  bitrate;
  resolution;
  framerate;
  setCodec(o) {
    return this.codec = o, this;
  }
  setBitrate(o) {
    return this.bitrate = o, this;
  }
  setResolution(o) {
    return this.resolution = o, this;
  }
  setFramerate(o) {
    return this.framerate = o, this;
  }
  validate() {
    if (!this.codec) throw y.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw y.logError("VideoEncoderConfigBuilder: resolution is not set.");
  }
  reset() {
    return this.codec = void 0, this.bitrate = void 0, this.resolution = void 0, this.framerate = void 0, this;
  }
  build() {
    this.validate();
    const { height: o, width: t } = this.resolution, e = {};
    return e.codec = this.codec, e.bitrate = this.bitrate, e.width = t, e.height = o, e.framerate = this.framerate, e;
  }
}
class OQ {
  getScaledResolution(o, t) {
    const { height: e, width: A } = o, n = A / e;
    if (Ls() && e > A) {
      const a = e, g = A, c = a / g, I = t * c;
      return { width: Math.floor(I / (-6188 + -1 * -4181 + 2009)) * (1 * -4877 + 3827 + 1052), height: t };
    }
    if (A < e) {
      const a = t / n;
      return { width: t, height: Math.floor(a / 2) * (9589 + -5477 * -1 + -15064) };
    }
    const r = t * n;
    return { width: Math.floor(r / 2) * (-1861 * 4 + 15 * -387 + 4417 * 3), height: t };
  }
  create(o, t) {
    switch (o) {
      case bn.STANDARD:
        return new Qg().setBitrate(po.bitrate).setCodec(po.codec).setFramerate(sa).setResolution(this.getScaledResolution(t, SQ)).build();
      case bn.LOW:
        return new Qg().setBitrate(po.bitrate).setCodec(po.codec).setFramerate(Us).setResolution(this.getScaledResolution(t, GQ)).build();
      default:
        throw y.logError("Unsupported preset for video encoder config");
    }
  }
}
class JQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = bn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(o, t, e, A, n) {
    this.videoProcessor = o, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new OQ(), this.chunkStorage = new LQ(), this.cameraFramerate = sa, this.customEvent = n, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(o, t) {
    this.chunkStorage.add(o), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(o.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(Ys, Us), this.currentConfigPreset = bn.LOW, this.startRecording();
  }
  restartRecording() {
    this.clearCaptureInterval(), this.chunkStorage.clear(), this.startRecording();
  }
  setupCameraPropsChangedListener() {
    document.addEventListener(this.customEvent.CAMERA_PROPS_CHANGED, this.boundCameraPropsChangedHandler);
  }
  removeCameraPropsChangedListener() {
    document.removeEventListener(this.customEvent.CAMERA_PROPS_CHANGED, this.boundCameraPropsChangedHandler);
  }
  async handleCameraPropsChange(o) {
    if (Ls()) return;
    const t = o.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(o = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      y.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      y.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(o), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(o) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      y.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(o, this.currentResolution);
    } catch (e) {
      y.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      y.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(t), t.framerate && (this.cameraFramerate = t.framerate);
  }
  createVideoElement(o) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = o, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      y.logError("Video element is not created.");
      return;
    }
    let o = 2035 * -1 + 4848 + -2813 * 1;
    const t = this.cameraFramerate, e = (-4 * -593 + 1398 + 554 * -5) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), n = o % t === -4957 + -3251 * -2 + -1545;
        this.videoEncoder.encode(A, n), o++, A.close();
      }
    }, e);
  }
  clearCaptureInterval() {
    this.captureIntervalId && (clearInterval(this.captureIntervalId), this.captureIntervalId = void 0);
  }
  getRecording() {
    const o = this.chunkStorage.getChunks(), t = o.map((n) => {
      const r = new Uint8Array(n.byteLength);
      return n.copyTo(r), r;
    }), e = this.videoProcessor.process(t), A = {};
    return A.frameRate = this.cameraFramerate, A.bytes = e, A;
  }
}
class UQ {
  videoProcessor;
  videoEncoder;
  qualityTester;
  cameraHandler;
  customEvent;
  setVideoProcessor(o) {
    return this.videoProcessor = o, this;
  }
  setVideoEncoder(o) {
    return this.videoEncoder = o, this;
  }
  setQualityTester(o) {
    return this.qualityTester = o, this;
  }
  setCameraHandler(o) {
    return this.cameraHandler = o, this;
  }
  setCustomEvent(o) {
    return this.customEvent = o, this;
  }
  validate() {
    if (!this.videoProcessor) throw y.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw y.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw y.logError("QualityTester is not set");
    if (!this.cameraHandler) throw y.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new JQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class YQ {
  create({ cameraHandler: o, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!FQ(e)) return;
    const A = new vQ(NQ, RQ), n = new Ts(), r = new WQ();
    return new UQ().setQualityTester(A).setVideoEncoder(n).setVideoProcessor(r).setCameraHandler(o).setCustomEvent(t).build();
  }
}
function TQ(i, o) {
  const { facingMode: t = aa.FRONT, isVideoCaptureEnabled: e } = o ?? {}, A = NA(null), [n, r] = iA(), [a, g] = iA(), { handleError: c, setIsCameraReady: I } = RA(), s = xe((x) => {
    g((E) => SC(x, E));
  }, []);
  z(() => {
    if (!A.current) {
      c(new y("Something went wrong during video initialization"));
      return;
    }
    const x = new bQ(A.current), E = new pQ(), B = new hQ(E), l = new Js(), u = new kQ(), h = {};
    h.cameraHandler = l, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new YQ().create(h), m = {};
    m.videoHandler = x, m.cameraHandler = l, m.performanceCheckup = u, m.cameraEvaluator = B, m.videoRecorder = p;
    const k = new wQ(m);
    return (async () => {
      try {
        const w = {};
        w.facingMode = t, await k.startFirstVideoStream(w);
      } catch (w) {
        if (w instanceof Error) {
          c(y.fromCameraError(w));
          return;
        }
      }
      r(k), I(!0), s(k.getCameraResolution());
    })(), () => {
      k?.stopStreaming(), I(!1), r(void 0);
    };
  }, [t, c, I, A, s, e, i]);
  const C = {};
  return C.cameraService = n, C.cameraResolution = a, C.onCameraResolutionChange = s, C.videoRef = A, C;
}
function PQ({
  cameraConfiguration: i,
  children: o,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: n, videoRef: r } = TQ(
    t,
    i
  ), a = dA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: n,
      videoRef: r
    }),
    [A, e, n, r]
  );
  return /* @__PURE__ */ b(un.Provider, { value: a, children: o });
}
function _Q({
  cameraConfiguration: i,
  children: o
}) {
  return /* @__PURE__ */ b(PQ, { cameraConfiguration: i, customEvent: Ee, children: o });
}
let li;
// @__NO_SIDE_EFFECTS__
function Ps(i) {
  return {
    lang: i?.lang ?? li?.lang,
    message: i?.message,
    abortEarly: i?.abortEarly ?? li?.abortEarly,
    abortPipeEarly: i?.abortPipeEarly ?? li?.abortPipeEarly
  };
}
let HQ;
// @__NO_SIDE_EFFECTS__
function KQ(i) {
  return HQ?.get(i);
}
let jQ;
// @__NO_SIDE_EFFECTS__
function qQ(i) {
  return jQ?.get(i);
}
let VQ;
// @__NO_SIDE_EFFECTS__
function ZQ(i, o) {
  return VQ?.get(i)?.get(o);
}
// @__NO_SIDE_EFFECTS__
function zQ(i) {
  const o = typeof i;
  return o === "string" ? `"${i}"` : o === "number" || o === "bigint" || o === "boolean" ? `${i}` : o === "object" || o === "function" ? (i && Object.getPrototypeOf(i)?.constructor?.name) ?? "null" : o;
}
function fr(i, o, t, e, A) {
  const n = A && "input" in A ? A.input : t.value, r = A?.expected ?? i.expects ?? null, a = A?.received ?? /* @__PURE__ */ zQ(n), g = {
    kind: i.kind,
    type: i.type,
    input: n,
    expected: r,
    received: a,
    message: `Invalid ${o}: ${r ? `Expected ${r} but r` : "R"}eceived ${a}`,
    requirement: i.requirement,
    path: A?.path,
    issues: A?.issues,
    lang: e.lang,
    abortEarly: e.abortEarly,
    abortPipeEarly: e.abortPipeEarly
  }, c = i.kind === "schema", I = A?.message ?? i.message ?? /* @__PURE__ */ ZQ(i.reference, g.lang) ?? (c ? /* @__PURE__ */ qQ(g.lang) : null) ?? e.message ?? /* @__PURE__ */ KQ(g.lang);
  I !== void 0 && (g.message = typeof I == "function" ? I(g) : I), c && (t.typed = !1), t.issues ? t.issues.push(g) : t.issues = [g];
}
// @__NO_SIDE_EFFECTS__
function _s(i) {
  return {
    version: 1,
    vendor: "valibot",
    validate(o) {
      return i["~run"]({ value: o }, /* @__PURE__ */ Ps());
    }
  };
}
var XQ = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(i) {
    super(i[0].message), this.name = "ValiError", this.issues = i;
  }
};
// @__NO_SIDE_EFFECTS__
function $Q(i, o, t) {
  return typeof i.fallback == "function" ? i.fallback(o, t) : i.fallback;
}
// @__NO_SIDE_EFFECTS__
function Ax(i, o, t) {
  return typeof i.default == "function" ? i.default(o, t) : i.default;
}
// @__NO_SIDE_EFFECTS__
function hr(i) {
  return {
    kind: "schema",
    type: "function",
    reference: hr,
    expects: "Function",
    async: !1,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ _s(this);
    },
    "~run"(o, t) {
      return typeof o.value == "function" ? o.typed = !0 : fr(this, "type", o, t), o;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hs(i, o) {
  return {
    kind: "schema",
    type: "object",
    reference: Hs,
    expects: "Object",
    async: !1,
    entries: i,
    message: o,
    get "~standard"() {
      return /* @__PURE__ */ _s(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (A && typeof A == "object") {
        t.typed = !0, t.value = {};
        for (const n in this.entries) {
          const r = this.entries[n];
          if (n in A || (r.type === "exact_optional" || r.type === "optional" || r.type === "nullish") && r.default !== void 0) {
            const a = n in A ? A[n] : /* @__PURE__ */ Ax(r), g = r["~run"]({ value: a }, e);
            if (g.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: A,
                key: n,
                value: a
              };
              for (const I of g.issues)
                I.path ? I.path.unshift(c) : I.path = [c], t.issues?.push(I);
              if (t.issues || (t.issues = g.issues), e.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            g.typed || (t.typed = !1), t.value[n] = g.value;
          } else if (r.fallback !== void 0) t.value[n] = /* @__PURE__ */ $Q(r);
          else if (r.type !== "exact_optional" && r.type !== "optional" && r.type !== "nullish" && (fr(this, "key", t, e, {
            input: void 0,
            expected: `"${n}"`,
            path: [{
              type: "object",
              origin: "key",
              input: A,
              key: n,
              value: A[n]
            }]
          }), e.abortEarly))
            break;
        }
      } else fr(this, "type", t, e);
      return t;
    }
  };
}
function ex(i, o, t) {
  const e = i["~run"]({ value: o }, /* @__PURE__ */ Ps(t));
  if (e.issues) throw new XQ(e.issues);
  return e.value;
}
function tx(i, o) {
  try {
    ex(o, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: RC(i.assetsDirectoryPath)
  };
}
function ox({
  children: i,
  configuration: o,
  validationSchema: t
}) {
  const e = dA(() => tx(o, t), [o, t]);
  return /* @__PURE__ */ b($r.Provider, { value: e, children: i });
}
function nx({
  children: i,
  configuration: o
}) {
  return /* @__PURE__ */ b(ox, { configuration: o, validationSchema: /* @__PURE__ */ Hs({
    onComplete: /* @__PURE__ */ hr("On complete must be a function"),
    onError: /* @__PURE__ */ hr("On error must be a function")
  }), children: i });
}
const kn = Se(void 0);
kn.displayName = "ControllerContext";
function Ks() {
  const i = ne(
    kn
  );
  if (i === void 0)
    throw new Error(`${kn.displayName} must be used within a ControllerProvider`);
  return i;
}
function ix({ children: i, controller: o }) {
  const t = dA(
    () => ({
      controller: o
    }),
    [o]
  );
  return /* @__PURE__ */ b(kn.Provider, { value: t, children: i });
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return pA(s - -336, I);
  }
  const e = i();
  function A(a, g, c, I, s) {
    return pA(g - 399, I);
  }
  function n(a, g, c, I, s) {
    return pA(g - 899, a);
  }
  function r(a, g, c, I, s) {
    return pA(I - -640, s);
  }
  for (; ; )
    try {
      if (-parseInt(n("sLo3", 1181, 1196, 1196, 1179)) / 1 + parseInt(t(-44, -38, -56, "ImS8", -42)) / 2 * (-parseInt(A(659, 671, 684, "Pqr)", 667)) / 3) + -parseInt(r(-378, -383, -374, -371, "Z6dK")) / 4 * (parseInt(A(688, 676, 667, "iX9A", 661)) / 5) + -parseInt(A(677, 677, 685, "Knt3", 675)) / 6 + -parseInt(A(683, 672, 658, "Y^&@", 687)) / 7 * (-parseInt(r(-341, -364, -359, -352, "]G]I")) / 8) + -parseInt(A(674, 669, 662, "hDIL", 673)) / 9 + parseInt(n("jPxc", 1167, 1171, 1176, 1159)) / 10 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sn, 752483 * -1 + 2 * -407539 + 2536502);
async function js(i) {
  function o(a, g, c, I, s) {
    return pA(s - 526, g);
  }
  const t = new Uint8Array(i), e = await window[n(-465, "Y^&@") + "o"][n(-476, "fN(U") + "e"][n(-464, "4APJ") + "t"](n(-467, "w1HW"), t);
  function A(a, g, c, I, s) {
    return pA(I - -638, c);
  }
  function n(a, g, c, I, s) {
    return pA(a - -750, g);
  }
  function r(a, g, c, I, s) {
    return pA(a - 572, c);
  }
  return Array[n(-471, "hDIL")](new Uint8Array(e))[A(-336, -333, "jPxc", -348)]((a) => a[o(835, "iT5s", 819, 831, 819) + A(-351, -370, "xdL8", -363)](-10108 + -4 * -2531)[r(853, 845, "xdL8") + A(-368, -347, "ve[*", -362)](-6416 * 1 + -836 + -3627 * -2, "0"))[o(809, "GOq[", 779, 786, 793)]("");
}
function pA(i, o) {
  i = i - (5732 * -1 + -4294 + 10292);
  const t = Sn();
  let e = t[i];
  if (pA.JNdvTY === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    pA.ooiUkz = g, pA.fYamAm = {}, pA.JNdvTY = !0;
  }
  const n = t[2 * 677 + 3153 + -4507], r = i + n, a = pA.fYamAm[r];
  return a ? e = a : (pA.swFmiH === void 0 && (pA.swFmiH = !0), e = pA.ooiUkz(e, o), pA.fYamAm[r] = e), e;
}
function Sn() {
  const i = ["W77dICoVDhC", "WP/cPCk9", "W4ldVLC", "BmkOvSkAm20hx3hcQva", "dv7cHmkTpv3dLmkovWKknSou", "a2eVWOO", "mSoCWRn6WP9VWRdcRW0WW4jDWR/cMq", "WOBcQSk+WPtdTq", "W4KzWRr1zeZdQZVcOSk3E8ke", "W7dcVN9PdG", "WQn2f1fOqvCe", "W6BdGmktW6ea", "zCklW4/cNaW", "dh0cW5asaSkwEWpdILJcRa", "WQb3q1D3Bx8FjG", "AmkQv8kvnIjlx1tcQf9rW40", "W4fVtG", "ySo1aSoWlLX0W4X9nmk3W4S", "j2tcJg1IWOdcR1ZdHbHyha", "WPTKW6RdMKi", "W7OaoSo3WRKOW5uM", "W4VcK38TzmkFWO8PDmohra", "WQ9vW5VcUSo9WPSMhb4epCky", "k3OsWOFcRa9iW5yE", "D8kksmo1", "WP44d8kuW6iFWRldVrxcLmo6W5HtWOq", "ahWgWOHcz8k9BZ4", "usv4W552W7mBWRq8WQSKja", "mCoBWRaKW60XW5NdHtG", "cmoQWRrVzmo2BftcQJVcSCk0", "WRhcGSoCWQDaW7VcU2fbx8kzW5e"];
  return Sn = function() {
    return i;
  }, Sn();
}
class rx {
  localStorageKey;
  constructor(o = wC) {
    this.localStorageKey = o;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(o) {
    const t = new TextEncoder(), e = t.encode(o);
    return js(e);
  }
  async generateAndStoreDecoys() {
    for (const o of bC) {
      const t = this.generateUuid(), e = await this.generateSha1(t);
      localStorage.setItem(o, e);
    }
  }
  async generateAndStoreMainId() {
    const o = this.generateUuid(), t = await this.generateSha1(o);
    return localStorage.setItem(this.localStorageKey, t), t;
  }
  async generateAndStore() {
    return await this.generateAndStoreDecoys(), this.generateAndStoreMainId();
  }
  getMainStoredValue() {
    return this.getStoredValue(this.localStorageKey);
  }
  getStoredValue(o) {
    return localStorage.getItem(o) ?? void 0;
  }
  async get() {
    const o = this.getMainStoredValue();
    return o || this.generateAndStore();
  }
}
class ca extends Array {
  #A;
  constructor(o) {
    super(), this.#A = o;
  }
  get size() {
    return this.#A;
  }
  pushFixed(...o) {
    if (o.length > this.#A) {
      const t = o.slice(-this.#A);
      this.push(...t);
      return;
    }
    this.length === this.#A && this.splice(0, o.length), this.push(...o);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-2458 + 1 * 5098 + 8 * -330);
  }
}
function ax(i) {
  return Ue(Math.abs(i));
}
const gx = () => {
  const i = Vr(null), o = NA(new ca(-6772 + -794 * -1 + -1 * -5983));
  z(() => {
    function e(n) {
      const { z: r } = n.accelerationIncludingGravity || {};
      if (!r) return;
      o.current.pushFixed(ax(r));
      const a = Ue(Ro(o.current)), g = {};
      g.z = a, i.value = g;
    }
    const A = GC(e, DC);
    return window.addEventListener("devicemotion", A, !0), () => {
      window.removeEventListener("devicemotion", A, !0);
    };
  }, [i]);
  const t = {};
  return t.accelerationSignal = i, t;
}, Ko = {};
Ko.ON_COMPLETE = "smile-auto-capture:on-complete", Ko.TIMED_CAPTURE_EXECUTED = "smile-auto-capture:timed-capture-executed", Ko.DEV = "smile-auto-capture:dev";
const Gn = Ko, sx = { ...Gn, ...Ee }, qs = sx;
const Vs = /* @__PURE__ */ Symbol("Comlink.proxy"), cx = /* @__PURE__ */ Symbol("Comlink.endpoint"), Zs = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), ui = /* @__PURE__ */ Symbol("Comlink.finalizer"), jo = /* @__PURE__ */ Symbol("Comlink.thrown"), zs = (i) => typeof i == "object" && i !== null || typeof i == "function", Ix = {
  canHandle: (i) => zs(i) && i[Vs],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return $s(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), ec(i);
  }
}, Cx = {
  canHandle: (i) => zs(i) && jo in i,
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
}, Xs = /* @__PURE__ */ new Map([
  ["proxy", Ix],
  ["throw", Cx]
]);
function Bx(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function $s(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Bx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(tt);
    let c;
    try {
      const I = a.slice(0, -1).reduce((C, x) => C[x], i), s = a.reduce((C, x) => C[x], i);
      switch (r) {
        case "GET":
          c = s;
          break;
        case "SET":
          I[a.slice(-1)[0]] = tt(A.data.value), c = !0;
          break;
        case "APPLY":
          c = s.apply(I, g);
          break;
        case "CONSTRUCT":
          {
            const C = new s(...g);
            c = ux(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: x } = new MessageChannel();
            $s(i, x), c = lx(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (I) {
      c = { value: I, [jo]: 0 };
    }
    Promise.resolve(c).catch((I) => ({ value: I, [jo]: 0 })).then((I) => {
      const [s, C] = vn(I);
      o.postMessage(Object.assign(Object.assign({}, s), { id: n }), C), r === "RELEASE" && (o.removeEventListener("message", e), Ac(o), ui in i && typeof i[ui] == "function" && i[ui]());
    }).catch((I) => {
      const [s, C] = vn({
        value: new TypeError("Unserializable return value"),
        [jo]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, s), { id: n }), C);
    });
  }), o.start && o.start();
}
function Qx(i) {
  return i.constructor.name === "MessagePort";
}
function Ac(i) {
  Qx(i) && i.close();
}
function ec(i, o) {
  const t = /* @__PURE__ */ new Map();
  return i.addEventListener("message", function(A) {
    const { data: n } = A;
    if (!n || !n.id)
      return;
    const r = t.get(n.id);
    if (r)
      try {
        r(n);
      } finally {
        t.delete(n.id);
      }
  }), pr(i, t, [], o);
}
function mo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function tc(i) {
  return ht(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    Ac(i);
  });
}
const Nn = /* @__PURE__ */ new WeakMap(), Rn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Nn.get(i) || 0) - 1;
  Nn.set(i, o), o === 0 && tc(i);
});
function xx(i, o) {
  const t = (Nn.get(o) || 0) + 1;
  Nn.set(o, t), Rn && Rn.register(i, o, i);
}
function Ex(i) {
  Rn && Rn.unregister(i);
}
function pr(i, o, t = [], e = function() {
}) {
  let A = !1;
  const n = new Proxy(e, {
    get(r, a) {
      if (mo(A), a === Zs)
        return () => {
          Ex(n), tc(i), o.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => n };
        const g = ht(i, o, {
          type: "GET",
          path: t.map((c) => c.toString())
        }).then(tt);
        return g.then.bind(g);
      }
      return pr(i, o, [...t, a]);
    },
    set(r, a, g) {
      mo(A);
      const [c, I] = vn(g);
      return ht(i, o, {
        type: "SET",
        path: [...t, a].map((s) => s.toString()),
        value: c
      }, I).then(tt);
    },
    apply(r, a, g) {
      mo(A);
      const c = t[t.length - 1];
      if (c === cx)
        return ht(i, o, {
          type: "ENDPOINT"
        }).then(tt);
      if (c === "bind")
        return pr(i, o, t.slice(0, -1));
      const [I, s] = xg(g);
      return ht(i, o, {
        type: "APPLY",
        path: t.map((C) => C.toString()),
        argumentList: I
      }, s).then(tt);
    },
    construct(r, a) {
      mo(A);
      const [g, c] = xg(a);
      return ht(i, o, {
        type: "CONSTRUCT",
        path: t.map((I) => I.toString()),
        argumentList: g
      }, c).then(tt);
    }
  });
  return xx(n, i), n;
}
function dx(i) {
  return Array.prototype.concat.apply([], i);
}
function xg(i) {
  const o = i.map(vn);
  return [o.map((t) => t[0]), dx(o.map((t) => t[1]))];
}
const oc = /* @__PURE__ */ new WeakMap();
function lx(i, o) {
  return oc.set(i, o), i;
}
function ux(i) {
  return Object.assign(i, { [Vs]: !0 });
}
function vn(i) {
  for (const [o, t] of Xs)
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
    oc.get(i) || []
  ];
}
function tt(i) {
  switch (i.type) {
    case "HANDLER":
      return Xs.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function ht(i, o, t, e) {
  return new Promise((A) => {
    const n = fx();
    o.set(n, A), i.start && i.start(), i.postMessage(Object.assign({ id: n }, t), e);
  });
}
function fx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function nc() {
  return X0();
}
const Ia = Se(void 0);
Ia.displayName = "CommonThresholdsContext";
function hx() {
  const i = ne(Ia);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function ic() {
  return hx();
}
const mr = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
};
function px(i) {
  const o = {};
  o.instruction = i;
  const t = o;
  mr(Yi.REQUEST_CAPTURE, t);
}
class mx {
  isDetectorInitialized;
  assetsDirectoryPath;
  compatibleSamVersion;
  cameraService;
  dispatcher;
  onCaptureData;
  protobuf;
  installationId;
  samVersion;
  currentDetection;
  detections;
  sessionToken;
  analytics;
  transactionCounting;
  constructor(o, t, e, A, n, r, a, g, c) {
    this.assetsDirectoryPath = o, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = n, this.installationId = r, this.analytics = a, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = c, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    oo() && this.handleEnvironmentNotSupported();
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(o) {
    if (!this.currentDetection) throw new y("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, o);
  }
  transitionToDetection(o) {
    const t = this.currentDetection?.name, e = this.detections?.[o];
    if (!e) throw new y("Detection " + o + " not found");
    if (!this.allowedDetectionTransitions[t]?.includes(o)) throw new y("Illegal detection transition: " + t + " -> " + o);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new y("Detection not initialized");
    this.currentDetection.run();
  }
  reset() {
    this.currentDetection?.stop(), this.onCaptureData.clear(), this.setDetections(void 0), this.setCurrentDetection(void 0);
  }
  areVersionsCompatible(o) {
    return o === this.compatibleSamVersion;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getOnCaptureData() {
    return this.onCaptureData;
  }
  getCurrentDetection() {
    return this.currentDetection;
  }
  getSessionToken() {
    return this.sessionToken;
  }
  getAnalytics() {
    return this.analytics;
  }
  getTransactionCounting() {
    return this.transactionCounting;
  }
  getProtobuf() {
    return this.protobuf;
  }
  getInstallationId() {
    return this.installationId;
  }
  getCurrentDetectionName() {
    return this.currentDetection?.name;
  }
  setCurrentDetection(o) {
    this.currentDetection = o, this.dispatcher.dispatchPhaseChangedEvent(o?.name);
  }
  setDetections(o) {
    this.detections = o;
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new y("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  handleEnvironmentNotSupported() {
    zr.warn(`
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
  setThresholds(o) {
    this.currentDetection?.setThresholds(o);
  }
  static getWorkerPath(o, t) {
    return "" + t.replace(P0, "") + o;
  }
}
const Xn = -2 * 3985 + -9736 + 17706 + 0.5, rc = {};
rc.min = 0.4;
const ac = {};
ac.min = 0.25;
const yr = {};
yr.min = 0.2, yr.max = 0.85;
const gc = {};
gc.max = 30;
const sc = {};
sc.min = 0.05;
const Dr = {};
Dr.min = 0.16, Dr.max = 0.2;
const cc = {};
cc.min = 0.3;
const Ic = {};
Ic.max = Xn;
const wr = {};
wr.confidence = cc, wr.status = Ic;
const Le = {};
Le.confidence = rc, Le.sharpness = ac, Le.brightness = yr, Le.devicePitchAngle = gc, Le.edgeDistanceToImageShorterSideRatio = sc, Le.size = Dr, Le.mouth = wr;
const Cc = {};
Cc.min = 0.4;
const Bc = {};
Bc.min = 0.25;
const br = {};
br.min = 0.2, br.max = 0.85;
const Qc = {};
Qc.max = 30;
const xc = {};
xc.min = 0.05;
const kr = {};
kr.min = 0.16, kr.max = 0.2;
const Ec = {};
Ec.min = 0.3;
const dc = {};
dc.max = Xn;
const Sr = {};
Sr.confidence = Ec, Sr.status = dc;
const Oe = {};
Oe.confidence = Cc, Oe.sharpness = Bc, Oe.brightness = br, Oe.devicePitchAngle = Qc, Oe.edgeDistanceToImageShorterSideRatio = xc, Oe.size = kr, Oe.mouth = Sr;
const Gr = {};
Gr.MOBILE = Le, Gr.DESKTOP = Oe;
const yx = Gr, lc = 0 + 0.4, uc = {};
uc.min = 0.4;
const Nr = {};
Nr.min = 0.16, Nr.max = 0.2;
const fc = {};
fc.min = 0.3;
const hc = {};
hc.min = lc;
const Rr = {};
Rr.confidence = fc, Rr.status = hc;
const qo = {};
qo.confidence = uc, qo.size = Nr, qo.mouth = Rr;
const pc = {};
pc.min = 0.4;
const vr = {};
vr.min = 0.16, vr.max = 0.2;
const mc = {};
mc.min = 0.3;
const yc = {};
yc.min = lc;
const Fr = {};
Fr.confidence = mc, Fr.status = yc;
const Vo = {};
Vo.confidence = pc, Vo.size = vr, Vo.mouth = Fr;
const Mr = {};
Mr.MOBILE = qo, Mr.DESKTOP = Vo;
const Eg = Mr, Fn = -1 * 3606 + 6532 + -2 * 463, Dx = 16 * -678 + -1 * -13249 + 7599, Zo = {};
Zo.timeout = 4e3, Zo.threshold = 0.7, Zo.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const fi = Zo, Dc = "SAM v1.50.5 for idcards";
class wc extends mx {
  detector;
  allowedDetectionTransitions;
  medianScore;
  timedCapture;
  detectionFactory;
  phaseThresholds;
  timedCaptureExecutedEventListener;
  dispatcher;
  analytics;
  accelerationSignal;
  constructor(o, t, e, A, n, r, a, g, c, I, s, C, x, E) {
    super(o, Dc, t, r, a, g, s, C, x), this.detector = e, this.detectionFactory = A, this.phaseThresholds = n, this.dispatcher = r, this.analytics = s;
    const B = { [M.NEUTRAL]: [M.SMILE], [M.SMILE]: [M.SMILE_MANUAL], [M.SMILE_MANUAL]: [] };
    this.allowedDetectionTransitions = B, this.medianScore = c, this.timedCapture = I, this.accelerationSignal = E;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getAnalytics() {
    return this.analytics;
  }
  async init() {
    await super.init(), this.initTimedCaptureExecutedEventListener();
    const o = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Fn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, accelerationSignal: this.accelerationSignal }, type: M.NEUTRAL }), t = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Fn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE }), e = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE_MANUAL }), A = { [M.NEUTRAL]: o, [M.SMILE]: t, [M.SMILE_MANUAL]: e };
    this.setDetections(A), this.setCurrentDetection(this.detections[M.NEUTRAL]), this.runDetectionLoop();
  }
  reset() {
    super.reset(), this.timedCapture.clear(), this.medianScore?.reset(), this.removeTimedCaptureExecutedEventListener();
  }
  initTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener = () => {
      this.onTimedCaptureExecuted();
    }, document.addEventListener(Gn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  removeTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener && document.removeEventListener(Gn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  onTimedCaptureExecuted() {
    this.currentDetection?.stop(), this.transitionToDetection(M.SMILE_MANUAL), this.runDetectionLoop(), px(bo.FIRST_FRAME);
  }
}
class wx {
  assetsDirectoryPath;
  cameraService;
  protobuf;
  installationId;
  analytics;
  dispatcher;
  sessionToken;
  transactionCounting;
  detector;
  setAssetsDirectoryPath(o) {
    return this.assetsDirectoryPath = o, this;
  }
  setCameraService(o) {
    return this.cameraService = o, this;
  }
  setProtobuf(o) {
    return this.protobuf = o, this;
  }
  setInstallationId(o) {
    return this.installationId = o, this;
  }
  setAnalytics(o) {
    return this.analytics = o, this;
  }
  setDispatcher(o) {
    return this.dispatcher = o, this;
  }
  setSessionToken(o) {
    return this.sessionToken = o, this;
  }
  setTransactionCounting(o) {
    return this.transactionCounting = o, this;
  }
  setDetector(o) {
    return this.detector = o, this;
  }
  validateDependencies() {
    if (!this.assetsDirectoryPath) throw new y("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new y("CameraService is required");
    if (!this.protobuf) throw new y("Protobuf is required");
    if (!this.installationId) throw new y("InstallationId is required");
    if (!this.dispatcher) throw new y("Dispatcher is required");
    if (!this.detector) throw new y("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.installationId = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class bx extends wx {
  detectionFactory;
  phaseThresholds;
  medianScore;
  timedCapture;
  accelerationSignal;
  setDetectionFactory(o) {
    return this.detectionFactory = o, this;
  }
  setPhaseThresholds(o) {
    return this.phaseThresholds = o, this;
  }
  setMedianScore(o) {
    return this.medianScore = o, this;
  }
  setTimedCapture(o) {
    return this.timedCapture = o, this;
  }
  setAccelerationSignal(o) {
    return this.accelerationSignal = o, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new y("DetectionFactory is required");
    if (!this.medianScore) throw new y("MedianScore is required");
    if (!this.timedCapture) throw new y("TimedCapture is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this;
  }
  build() {
    return this.validateDependencies(), new wc(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.installationId, this.medianScore, this.timedCapture, this.analytics, this.sessionToken, this.transactionCounting, this.accelerationSignal);
  }
}
const kx = "/dot-assets/smile/dot-C53sD7ri.js";
class st {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 4638 + -1 * 4949 + -311 * -1;
  }
  static getInstance() {
    return !this._instance && (this._instance = new st()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1 * 4749 + 8459 * 1 + -13208;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && mr(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = A);
  }
  dispatchCustomEvent(o, t) {
    mr(o, t);
  }
}
const Sx = () => "prod".toLowerCase() === "dev";
class Gx extends st {
  events;
  constructor(o) {
    super(), this.events = o;
  }
  dispatchDetectionEvent(o) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, o);
  }
  dispatchOnCompleteEvent(o, t) {
    const e = {};
    e.resultData = o, e.content = t, this.dispatchCustomEvent(this.events.ON_COMPLETE, e);
  }
  dispatchPhaseChangedEvent(o) {
    const t = {};
    t.phaseName = o, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, t);
  }
  dispatchInstructionChangedEvent(o, t = gC) {
    const e = {};
    e.instructionCode = o.code, e.isEscalated = o.isEscalated ?? !1;
    const A = e;
    this.dispatchDelayedCustomEventOnChange(this.events.INSTRUCTION_CHANGED, A, t);
  }
  dispatchInstructionEscalatedEvent(o) {
    const t = {};
    t.instructionCode = o, this.dispatchCustomEventOnChange(this.events.INSTRUCTION_ESCALATED, t);
  }
  dispatchDevEvent(o) {
    if (!Sx() || !o) return;
    const t = {};
    t.candidateSelectionImages = o, this.dispatchCustomEventOnChange(this.events.DEV, t);
  }
}
class Nx extends Gx {
  dispatchTimedCaptureExecuted() {
    this.dispatchCustomEvent(qs.TIMED_CAPTURE_EXECUTED, {});
  }
}
class Rx {
  isCollecting = !0;
  mouthStatuses = [];
  medianScore;
  collectScore(o) {
    if (!this.isCollecting || !o.detectionDetails.processedImage.isInCandidateSelection) return;
    const t = o.detectionDetails.processedImage.detection.mouth.status;
    t < Xn && this.mouthStatuses.push(t);
  }
  stopCollectingAndCalculateMedian() {
    this.isCollecting = !1, this.medianScore = this.calculateMedian(this.mouthStatuses);
  }
  get median() {
    return this.medianScore;
  }
  reset() {
    this.isCollecting = !0, this.mouthStatuses = [], this.medianScore = void 0;
  }
  calculateMedian(o) {
    const t = o.sort((n, r) => n - r), e = Math.floor(t.length / (9660 + -9658 * 1));
    return t.length % (-9 * -1030 + -37 * 257 + 241) === 155 + 1 * -7499 + 7344 ? (t[e - 1] + t[e]) / (1765 * -5 + -680 + 9507 * 1) : t[e];
  }
}
const vx = -1266 + -3987 * -2 + -4708;
class dg {
  duration;
  constructor(o) {
    this.duration = o ?? vx;
  }
  candidateSelectionTime = -330 + -2 * 991 + 2312;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 5584 + 1 * -7817 + 2233 * 1;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime = performance.now();
  }
  newCandidate(o) {
    this.candidateSelectionImages.push(o);
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  isCandidateSelectionDone() {
    return this.isInCandidateSelection() && performance.now() - this.candidateSelectionTime > this.duration;
  }
  reset() {
    this.candidateSelectionTime = -8209 + 1 * -6269 + 14478, this.candidateSelectionImages = [];
  }
}
function Mn(i) {
  const { height: o, width: t } = IC(i), e = (i.width - t) / (-4463 * 1 + -1 * -1031 + 1 * 3434), A = (i.height - o) / (-7276 + 7583 * 1 + -305), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = o, n;
}
function bc(i, o, t) {
  const { height: e, width: A } = t, n = Hn(i.width, i.height), r = A - n * o * 2, a = e - n * o * 2, g = (i.width - r) / (9007 + -2 * 2434 + 1379 * -3), c = (i.height - a) / 2, I = {};
  return I.shiftX = g, I.shiftY = c, I.width = r, I.height = a, I;
}
function Et(i, o) {
  const { shiftX: t, shiftY: e } = o, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const kc = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, A = xC(e, o), n = {};
  n.x = t.x, n.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const c = {};
  return c.top = n, c.right = r, c.bottom = a, c.left = g, _0(c);
}, Sc = (i, o, t = mC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, o);
}), Wn = async (i) => Sc(i, 5427 + 9 * -593), Fx = async (i) => Sc(i, 6347 + 314 * -23 + 975, "image/png"), Gc = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, -2155 + -5 * 958 + 6945, -9156 * -1 + -7822 + -1334, t.width, t.height), t;
}, Nc = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(0, 0, i.width, i.height);
  return t;
};
async function Mx(i, o) {
  const t = Gc(i, o);
  return Fx(t);
}
const Rc = (i, o, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (A.strokeStyle = t, A.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), A.stroke());
}, hi = (i, o, t) => {
  const { height: e, shiftX: A, shiftY: n, width: r } = o, a = {};
  a.x = A, a.y = n;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, Rc(i, g, t);
}, Ao = (i, o, t, e = 0) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(o.x + e, o.y + e, 4047 + 1 * 9017 + 1 * -13057, 7), A.beginPath());
};
function Wx(i, o) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = o, n = {};
  n.topLeft = A, n.width = t.x - A.x, n.height = t.y - A.y, Rc(i, n, "rgba(255, 0, 0, 0.3)", !0), Ao(i, e, "lime");
}
function Lx(i, o, t) {
  const e = kc(o, t);
  Object.values(e).map((A) => Ao(i, A, "orange"));
}
class vc extends y {
  cause;
  constructor(o) {
    super(o.message), this.name = "ProxyError", this.cause = o, this.logError(o);
  }
  logError(o) {
  }
}
class Ox {
  detectionRecord;
  imagesWithTimestampForDuplicateDetection;
  validationService;
  constructor(o) {
    this.validationService = o, this.imagesWithTimestampForDuplicateDetection = new ca(fC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / yC, A = e / 2, n = o.length / (451 + 449 * -1), r = o.slice(n - A, n + A), a = await js(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(o) {
    return { data: Nc(o), resolution: { width: o.width, height: o.height } };
  }
  async getOptimalRegionForCompressionDetection(o, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(o, t, A);
  }
  detect(o, t, e) {
    try {
      return this.detector.detect(o, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new vc(A) : y.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: o, image: t, imageData: e, timestamp: A }) {
    const n = _0(o), r = {};
    r.detectedObject = n, r.timestamp = A;
    const a = r, g = this.validationService.validateDetectedObject(n, t);
    if (g.result.get("isPresent")) {
      const c = {};
      c.image = e, c.timestamp = A, this.collectImagesForDuplicateDetection(c);
    }
    return this.detectionRecord.push(a), { detection: n, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class pi extends Ox {
  className = "FaceImageProcessor";
  detector;
  constructor(o, t) {
    super(t), this.detector = o;
  }
  optimizeImageBeforeDetection(o) {
    const t = Mn(o), e = Gc(o, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: o, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(o), A = {};
    A.height = o.height, A.width = o.width;
    let n = await this.detect(e.data, e.resolution, A);
    n = this.transformDetectionCoordinatesRelativeToFullFrameImage(n, Mn(o));
    const r = {};
    return r.detectedObject = n, r.image = o, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(o, t) {
    return { ...o, leftEye: { ...o.leftEye, center: Et(o.leftEye.center, t) }, rightEye: { ...o.rightEye, center: Et(o.rightEye.center, t) }, mouth: { ...o.mouth, center: Et(o.mouth.center, t) }, topLeft: Et(o.topLeft, t), bottomRight: Et(o.bottomRight, t), faceCenter: Et(o.faceCenter, t) };
  }
}
class Jx {
  instructionCodes;
  trackingState;
  contextDescriptor;
  instructionCodeCollector;
  config;
  analytics;
  dispatcher;
  constructor({ analytics: o, config: t, contextDescriptor: e, dispatcher: A, instructionCodeCollector: n, trackingState: r }) {
    this.instructionCodeCollector = n, this.dispatcher = A, this.config = t, this.analytics = o, this.trackingState = r, this.contextDescriptor = e, this.instructionCodes = new Map(t.instructions.map((a) => [a, !1]));
  }
  get getInstructionCodes() {
    return this.instructionCodes;
  }
  canEscalate(o) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(o) ? !1 : t.filter((A) => A === o).length / t.length >= this.config.threshold;
  }
  trackEscalated(o) {
    this.trackingState.hasTracked(o) || (this.analytics?.["trackEscalated"]?.(o, this.contextDescriptor), this.trackingState.markAsTracked(o));
  }
  collect(o) {
    this.instructionCodeCollector.pushWithTimestamp(o);
  }
  isEscalated(o) {
    return this.instructionCodes.get(o) ?? !1;
  }
  escalate() {
    for (const [o, t] of this.instructionCodes.entries())
      !t && this.canEscalate(o) && (this.instructionCodes.set(o, !0), this.dispatcher.dispatchInstructionEscalatedEvent(o), this.trackEscalated(o));
  }
  reset() {
    this.instructionCodes.forEach((o, t) => {
      this.instructionCodes.set(t, !1);
    }), this.trackingState.reset(), this.instructionCodeCollector.clear();
  }
}
class Ux {
  trackedInstructionCodes = /* @__PURE__ */ new Set();
  hasTracked(o) {
    return this.trackedInstructionCodes.has(o);
  }
  markAsTracked(o) {
    this.trackedInstructionCodes.add(o);
  }
  reset() {
    this.trackedInstructionCodes.clear();
  }
}
class Yx extends Array {
  #A = -516 * 13 + -2993 + 9701;
  #e = [];
  #t = !1;
  constructor(o) {
    super(), this.#A = o;
  }
  clearAfterTimeout() {
    if (this.#e.length === 11408 + 8 * -1426) return;
    const o = Date.now(), t = this.#e.findLastIndex((e) => o - e > this.#A);
    t !== -1 && (this.#t = !0, this.splice(-7 * 1113 + 685 * 9 + -1626 * -1, t + (-585 + -7117 * -1 + -3 * 2177)), this.#e.splice(-11 * 317 + 7878 + -4391, t + (6906 + -1 * 6905)));
  }
  pushWithTimestamp(...o) {
    this.clearAfterTimeout();
    const t = Array(o.length).fill(Date.now());
    this.push(...o), this.#e.push(...t);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return this.#t;
  }
  clear() {
    this.splice(-6181 + 313 * 1 + 5868), this.#e.splice(3920 + -784 * 5), this.#t = !1;
  }
}
class Fc {
  controller;
  constructor(o) {
    this.controller = o;
  }
  onCapture(o) {
    this.controller.collectOnCaptureData(o), this.controller.getDispatcher().dispatchDevEvent(o.metadata.candidateSelectionImages);
  }
  onDetection(o) {
    const { processedImage: t } = o.detectionDetails;
    this.controller.getDispatcher().dispatchDetectionEvent(o);
    const e = {};
    e.code = t.instructionCode, e.isEscalated = t.isEscalated, this.controller.getDispatcher().dispatchInstructionChangedEvent(e);
  }
}
class Tx extends Fc {
  controller;
  constructor(o) {
    super(o), this.controller = o;
  }
  onCapture(o) {
    super.onCapture(o), this.controller.medianScore.stopCollectingAndCalculateMedian(), this.controller.transitionToDetection(M.SMILE), this.controller.timedCapture.start(), this.controller.runDetectionLoop();
  }
  onDetection(o) {
    super.onDetection(o), this.controller.medianScore.collectScore(o);
  }
}
class Mc {
  name;
  isRunning;
  fpsOfAllImages;
  captureProcessStartTime;
  cameraService;
  imageProcessor;
  callbacks;
  checkToInstructionCodeMap;
  fallbackInstruction;
  instructionEscalation;
  constructor(o, t, e, A, n, r, a) {
    this.name = o, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = n, this.fallbackInstruction = r, this.instructionEscalation = a, this.fpsOfAllImages = new ca(-3742 * 1 + -901 * 2 + -2 * -2787), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (o) {
      if (!(o instanceof vc)) throw o;
      this.stop();
      return;
    }
  }
  async run() {
    for (this.captureProcessStartTime = Date.now(); this.isRunning; )
      await this.safeIterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  onDetection(o, t) {
    const e = { ...o, avgFps: Ue(Ro(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(o, t, e) {
    if (!this.captureProcessStartTime) throw new y("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(o.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Ue(Ro(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: o.timestamp }, n = {};
    n.resultImage = o.image, n.detectedObject = t, n.metadata = A, n.timestamp = o.timestamp, this.callbacks.onCapture(n);
  }
  async getCroppedImageWithPosition(o, t) {
    const e = {};
    e.width = o.width, e.height = o.height;
    const A = e, n = Nc(o), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(n, A, t), a = await Mx(o, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const c = g, I = {};
    return I.croppedImage = a, I.topLeftCorner = c, I;
  }
  collectAndEscalate(o) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(o), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(o)) : !1;
  }
  getDetectionDetails(o, t) {
    const e = this.getDetectionEndTime(o.timestamp), A = Ue((-4636 + 2818 * 2) / e);
    this.fpsOfAllImages.pushFixed(A);
    const n = {};
    n.width = o.image.width, n.height = o.image.height;
    const r = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[0], t), c = this.collectAndEscalate(g), I = {};
    return I.detection = t.detection, I.instructionCode = g, I.invalidValidators = a, I.isInCandidateSelection = !1, I.isEscalated = c, { processedImage: I, detectionTime: e, fps: A, avgFps: Ue(Ro(this.fpsOfAllImages)), resolution: r };
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
    await Xi(Math.max(Ja.max - o, Ja.min));
  }
  setThresholds(o) {
    this.imageProcessor.validationService.setThresholds(o);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class Px extends Mc {
  instructionCodeMap;
  lastImage;
  bestImage;
  candidateSelection;
  constructor(o, t, ...e) {
    super(...e), this.candidateSelection = o, this.instructionCodeMap = t, this.lastImage = void 0, this.bestImage = void 0;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const o = this.cameraService.takePhoto(), t = await this.processTakenPhoto(o);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(o, t) : this.tryInitCandidatePhase(o, t);
    const e = this.getDetectionDetails(o, t);
    this.onDetection(e, o.image);
    const A = {};
    A.instructionCode = e.processedImage.instructionCode, A.isValid = t.isValid, A.takenPhoto = o, A.detection = t.detection, this.lastImage = A, await this.sleep(e.detectionTime);
  }
  getDetectionDetails(o, t) {
    const e = super.getDetectionDetails(o, t);
    return { ...e, processedImage: { ...e.processedImage, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() } };
  }
  async processTakenPhoto(o) {
    try {
      return await this.imageProcessor.process(o);
    } catch (t) {
      throw t instanceof y ? t : y.fromError(t);
    }
  }
  saveBetterImage(o, t) {
    if (!(this.bestImage && t.isValid && this.isNewImageBetter(this.bestImage.detection, t.detection))) return;
    const A = {};
    A.takenPhoto = o, A.detection = t.detection;
    const n = A;
    this.bestImage = n, this.candidateSelection.newCandidate(n);
  }
  tryInitCandidatePhase(o, t) {
    if (!(this.lastImage?.isValid && t.isValid)) return;
    const A = {};
    A.takenPhoto = o, A.detection = t.detection;
    const n = A;
    this.isNewImageBetter(this.lastImage.detection, n.detection) ? this.bestImage = n : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(n), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: o, takenPhoto: t } = this.bestImage || {};
    if (t && o) await this.onCapture(t, o, this.candidateSelection.getCandidateSelectionImages());
    else throw new y("Something went wrong during capturing an image");
  }
  getInstructionCode(o, t) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && t?.isValid ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t?.isValid ? this.lastImage.instructionCode : o ?? this.fallbackInstruction;
  }
  isNewImageBetter(o, t) {
    return t.sharpness > o.sharpness;
  }
}
class Wc {
  name;
  cameraService;
  imageProcessor;
  callbacks;
  checkToInstructionCodeMap;
  fallbackInstruction;
  instructionEscalation;
  setName(o) {
    return this.name = o, this;
  }
  setCameraService(o) {
    return this.cameraService = o, this;
  }
  setImageProcessor(o) {
    return this.imageProcessor = o, this;
  }
  setCallbacks(o) {
    return this.callbacks = o, this;
  }
  setCheckToInstructionCodeMap(o) {
    return this.checkToInstructionCodeMap = o, this;
  }
  setFallbackInstruction(o) {
    return this.fallbackInstruction = o, this;
  }
  setInstructionEscalation(o) {
    return this.instructionEscalation = o, this;
  }
  reset() {
    return this.name = void 0, this.cameraService = void 0, this.imageProcessor = void 0, this.callbacks = void 0, this.instructionEscalation = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this;
  }
  validateDependencies() {
    if (!this.name) throw new y("Name is required");
    if (!this.cameraService) throw new y("CameraService is required");
    if (!this.imageProcessor) throw new y("ImageProcessor is required");
    if (!this.callbacks) throw new y("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new y("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new y("FallbackInstruction is required");
  }
}
class Lc extends Wc {
  instructionCodeMap;
  candidateSelection;
  setInstructionCodeMap(o) {
    return this.instructionCodeMap = o, this;
  }
  setCandidateSelection(o) {
    return this.candidateSelection = o, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new y("instructionCodeMap is required");
    if (!this.candidateSelection) throw new y("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new Px(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class _x extends Lc {
}
class Oc {
  #A;
  #e;
  #t;
  constructor(o) {
    this.#A = o, this.#e = /* @__PURE__ */ new Map();
  }
  validate() {
    this.#A.forEach((o) => {
      this.#e.set(o.name, o.evaluate());
    }), this.#t = void 0;
  }
  isValid() {
    return this.#t === void 0 && (this.#t = Array.from(this.#e.values()).every((o) => o)), this.#t;
  }
  get result() {
    return this.#e;
  }
  get validators() {
    return this.#A;
  }
}
class Jc {
  className;
  thresholds;
  constructor(o, t) {
    this.className = o, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(o) {
    this.thresholds = o;
  }
}
class ie {
  #A;
  #e;
  constructor(o, t) {
    this.#A = o, this.#e = t;
  }
  get threshold() {
    return this.#e;
  }
  get name() {
    return this.#A;
  }
  isValueBelowThreshold(o) {
    return o < this.#e;
  }
  isValueAboveThreshold(o) {
    return o > this.#e;
  }
}
const Hx = "isNotDim";
class Kx extends ie {
  #A;
  constructor(o, t) {
    super(Hx, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const jx = "isNotSmall";
class Uc extends ie {
  #A;
  constructor(o, t) {
    super(jx, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const qx = "isNotBright";
class Vx extends ie {
  #A;
  constructor(o, t) {
    super(qx, o), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Zx = "isPresent";
class Yc extends ie {
  #A;
  constructor(o, t) {
    super(Zx, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const zx = "isSharp";
class Xx extends ie {
  #A;
  constructor(o, t) {
    super(zx, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const $x = "isMouthPresent";
class Tc extends ie {
  #A;
  constructor(o, t) {
    super($x, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const AE = "isMouthStatusNotTooHigh";
class eE extends ie {
  #A;
  constructor(o, t) {
    super(AE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const tE = "isNotLarge";
class Pc extends ie {
  #A;
  constructor(o, t) {
    super(tE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const oE = "isNotPitched";
class Ca extends ie {
  #A;
  constructor(o, t) {
    super(oE, Ca.calculatePitchAngleAccelerationThreshold(o)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(o) {
    return lC * Math.sin(o * (Math.PI / (741 + -5 * -599 + 2 * -1778)));
  }
  evaluate() {
    const { z: o } = this.#A || {};
    return o ? this.isValueBelowThreshold(Math.abs(o)) : !0;
  }
}
const nE = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = o;
  return !(i.x < e || i.x > e + n || i.y < A || i.y > A + t);
}, iE = (i, o) => Object.values(i).every((t) => nE(t, o)), rE = "isNotOutOfBounds";
class aE extends ie {
  #A;
  #e;
  constructor(o, t, e) {
    super(rE, o), this.#A = t, this.#e = e;
  }
  evaluate() {
    const o = bc(this.#e, this.threshold, Mn(this.#e)), t = kc(this.#A, this.#e);
    return iE(t, o);
  }
}
class gE extends Jc {
  accelerationSignal;
  constructor(o, t) {
    super("NeutralValidationService", o), this.accelerationSignal = t;
  }
  validateDetectedObject(o, t) {
    const e = this.getThresholds(), A = new Oc([new Yc(e.confidence.min, o.confidence), new Uc(e.size.min, o.faceSize), new Pc(e.size.max, o.faceSize), new Xx(e.sharpness.min, o.sharpness), new Kx(e.brightness.min, o.brightness), new Vx(e.brightness.max, o.brightness), new aE(e.edgeDistanceToImageShorterSideRatio.min, o, t), new Tc(e.mouth.confidence.min, o.mouth.confidence), new eE(e.mouth.status.max, o.mouth.status), new Ca(e.devicePitchAngle.max, this.accelerationSignal?.value)]);
    return A.validate(), A;
  }
}
class _c extends Fc {
  controller;
  constructor(o) {
    super(o), this.controller = o;
  }
  async onCapture(o) {
    super.onCapture(o), this.controller.getTransactionCounting()?.trackTransaction(), this.controller.timedCapture.clear();
    const t = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), installationId: await this.controller.getInstallationId().get(), video: this.controller.cameraService.videoRecorder?.getRecording() });
    this.dispatchOnCompleteEvent(t), this.controller.getAnalytics()?.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  async dispatchOnCompleteEvent(o) {
    const t = this.controller.getOnCaptureData(), e = t.get(M.NEUTRAL), A = t.get(M.SMILE) ?? t.get(M.SMILE_MANUAL);
    if (!e || !A) throw new y("Incomplete onCapture data for smile liveness");
    const { detectedObject: n, resultImage: r } = e, { detectedObject: a, resultImage: g } = A, c = {};
    c.width = r.width, c.height = r.height;
    const I = c, s = await Wn(r), C = await Wn(g), x = {};
    x.detection = n, x.imageResolution = I;
    const E = {};
    E.data = x, E.image = s;
    const B = E, l = {};
    l.detection = a, l.imageResolution = I;
    const u = {};
    u.data = l, u.image = C;
    const h = u, p = {};
    p.neutralPhaseImageWithMetadata = B, p.smilePhaseImageWithMetadata = h;
    const m = p;
    this.controller.getDispatcher().dispatchOnCompleteEvent(m, o);
  }
  onDetection(o) {
    super.onDetection(o);
  }
}
class sE extends _c {
}
class cE extends Lc {
}
const IE = "isMouthStatusNotTooLow";
class CE extends ie {
  #A;
  constructor(o, t) {
    super(IE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
class lg extends Jc {
  controller;
  constructor(o, t) {
    super("SmileValidationService", o), this.controller = t;
  }
  getMouthStatusThreshold(o) {
    const t = this.controller.medianScore.median;
    return o.mouth.status.min + (t ?? Xn);
  }
  validateDetectedObject(o) {
    const t = this.getThresholds(), e = new Oc([new Yc(t.confidence.min, o.confidence), new Tc(t.mouth.confidence.min, o.mouth.confidence), new Uc(t.size.min, o.faceSize), new Pc(t.size.max, o.faceSize), new CE(this.getMouthStatusThreshold(t), o.mouth.status)]);
    return e.validate(), e;
  }
}
class BE extends _c {
}
class QE extends Mc {
  #A;
  #e;
  constructor(...o) {
    super(...o), this.#A = void 0, this.#e = void 0, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(o) {
    return o.detail?.["instruction"] ? Object.values(bo).includes(o.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (o) => {
      this.isRequestCaptureEventValid(o) && (this.#A = o.detail?.["instruction"]);
    }, document.addEventListener(Yi.REQUEST_CAPTURE, this.#e);
  }
  async iterate() {
    const o = this.cameraService.takePhoto(), t = await this.processTakenPhoto(o), e = this.getDetectionDetails(o, t);
    if (this.onDetection(e, o.image), this.isCaptureDone(t)) {
      await this.onCaptureDone(o, t.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  getInstructionCode(o) {
    return o ?? this.fallbackInstruction;
  }
  isCaptureDone(o) {
    return this.#A ? this.#A === bo.FIRST_FRAME ? !0 : this.#A === bo.FIRST_VALID_FRAME ? o.isValid : !1 : !1;
  }
  async processTakenPhoto(o) {
    try {
      return await this.imageProcessor.process(o);
    } catch (t) {
      throw t instanceof y ? t : y.fromError(t);
    }
  }
  async onCaptureDone(o, t) {
    await this.onCapture(o, t), this.#A = void 0;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(Yi.REQUEST_CAPTURE, this.#e);
  }
}
class xE extends Wc {
  build() {
    return this.validateDependencies(), new QE(this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class EE extends xE {
}
class dE {
  createDetection({ params: o, type: t }) {
    const { accelerationSignal: e, cameraService: A, candidateSelectionDuration: n, controller: r, detector: a, phaseThresholds: g } = o;
    switch (t) {
      case M.SMILE:
        return this.createSmileDetection(r, a, A, g, n);
      case M.NEUTRAL:
        return this.createNeutralDetection(r, a, A, g, n, e);
      case M.SMILE_MANUAL:
        return this.createSmileManualDetection(r, a, A, g);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createNeutralDetection(o, t, e, A, n = Fn, r) {
    const a = new _x(), g = new gE(A[M.NEUTRAL], r), c = new Tx(o), I = new pi(t, g), s = new dg(n), C = this.createInstructionEscalation(o, M.NEUTRAL);
    return a.setName(M.NEUTRAL), a.setCandidateSelection(s), a.setCameraService(e), a.setCallbacks(c), a.setCheckToInstructionCodeMap(ni), a.setFallbackInstruction(sA.FACE_NOT_PRESENT), a.setInstructionCodeMap(sA), a.setInstructionEscalation(C), a.setImageProcessor(I), a.build();
  }
  createSmileDetection(o, t, e, A, n = Fn) {
    const r = new cE(), a = new lg(A[M.SMILE], o), g = new sE(o), c = new pi(t, a), I = new dg(n), s = this.createInstructionEscalation(o, M.SMILE);
    return r.setName(M.SMILE), r.setCandidateSelection(I), r.setCameraService(e), r.setCallbacks(g), r.setCheckToInstructionCodeMap(ni), r.setFallbackInstruction(sA.FACE_NOT_PRESENT), r.setInstructionEscalation(s), r.setInstructionCodeMap(sA), r.setImageProcessor(c), r.build();
  }
  createSmileManualDetection(o, t, e, A) {
    const n = new EE(), r = new lg(A[M.SMILE], o), a = new BE(o), g = new pi(t, r), c = this.createInstructionEscalation(o, M.SMILE_MANUAL);
    return n.setName(M.SMILE_MANUAL), n.setCameraService(e), n.setCallbacks(a), n.setCheckToInstructionCodeMap(ni), n.setFallbackInstruction(sA.FACE_NOT_PRESENT), n.setInstructionEscalation(c), n.setImageProcessor(g), n.build();
  }
  createInstructionEscalation(o, t) {
    const e = new Ux();
    return new Jx({ instructionCodeCollector: new Yx(fi.timeout), dispatcher: o.getDispatcher(), config: { threshold: fi.threshold, instructions: fi.instructions }, trackingState: e, analytics: o.getAnalytics(), contextDescriptor: t });
  }
}
var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ug = {}, mi = {}, yi, fg;
function lE() {
  if (fg) return yi;
  fg = 1, yi = i;
  function i(o, t) {
    for (var e = new Array(arguments.length - 1), A = 0, n = 2, r = !0; n < arguments.length; )
      e[A++] = arguments[n++];
    return new Promise(function(a, g) {
      e[A] = function(c) {
        if (r)
          if (r = !1, c)
            g(c);
          else {
            for (var I = new Array(arguments.length - 1), s = 0; s < I.length; )
              I[s++] = arguments[s];
            a.apply(null, I);
          }
      };
      try {
        o.apply(t || null, e);
      } catch (c) {
        r && (r = !1, g(c));
      }
    });
  }
  return yi;
}
var hg = {}, pg;
function uE() {
  return pg || (pg = 1, (function(i) {
    var o = i;
    o.length = function(r) {
      var a = r.length;
      if (!a)
        return 0;
      for (var g = 0; --a % 4 > 1 && r.charAt(a) === "="; )
        ++g;
      return Math.ceil(r.length * 3) / 4 - g;
    };
    for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
      e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
    o.encode = function(r, a, g) {
      for (var c = null, I = [], s = 0, C = 0, x; a < g; ) {
        var E = r[a++];
        switch (C) {
          case 0:
            I[s++] = t[E >> 2], x = (E & 3) << 4, C = 1;
            break;
          case 1:
            I[s++] = t[x | E >> 4], x = (E & 15) << 2, C = 2;
            break;
          case 2:
            I[s++] = t[x | E >> 6], I[s++] = t[E & 63], C = 0;
            break;
        }
        s > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, I)), s = 0);
      }
      return C && (I[s++] = t[x], I[s++] = 61, C === 1 && (I[s++] = 61)), c ? (s && c.push(String.fromCharCode.apply(String, I.slice(0, s))), c.join("")) : String.fromCharCode.apply(String, I.slice(0, s));
    };
    var n = "invalid encoding";
    o.decode = function(r, a, g) {
      for (var c = g, I = 0, s, C = 0; C < r.length; ) {
        var x = r.charCodeAt(C++);
        if (x === 61 && I > 1)
          break;
        if ((x = e[x]) === void 0)
          throw Error(n);
        switch (I) {
          case 0:
            s = x, I = 1;
            break;
          case 1:
            a[g++] = s << 2 | (x & 48) >> 4, s = x, I = 2;
            break;
          case 2:
            a[g++] = (s & 15) << 4 | (x & 60) >> 2, s = x, I = 3;
            break;
          case 3:
            a[g++] = (s & 3) << 6 | x, I = 0;
            break;
        }
      }
      if (I === 1)
        throw Error(n);
      return g - c;
    }, o.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(hg)), hg;
}
var Di, mg;
function fE() {
  if (mg) return Di;
  mg = 1, Di = i;
  function i() {
    this._listeners = {};
  }
  return i.prototype.on = function(o, t, e) {
    return (this._listeners[o] || (this._listeners[o] = [])).push({
      fn: t,
      ctx: e || this
    }), this;
  }, i.prototype.off = function(o, t) {
    if (o === void 0)
      this._listeners = {};
    else if (t === void 0)
      this._listeners[o] = [];
    else
      for (var e = this._listeners[o], A = 0; A < e.length; )
        e[A].fn === t ? e.splice(A, 1) : ++A;
    return this;
  }, i.prototype.emit = function(o) {
    var t = this._listeners[o];
    if (t) {
      for (var e = [], A = 1; A < arguments.length; )
        e.push(arguments[A++]);
      for (A = 0; A < t.length; )
        t[A].fn.apply(t[A++].ctx, e);
    }
    return this;
  }, Di;
}
var wi, yg;
function hE() {
  if (yg) return wi;
  yg = 1, wi = i(i);
  function i(n) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function c(x, E, B) {
        r[0] = x, E[B] = a[0], E[B + 1] = a[1], E[B + 2] = a[2], E[B + 3] = a[3];
      }
      function I(x, E, B) {
        r[0] = x, E[B] = a[3], E[B + 1] = a[2], E[B + 2] = a[1], E[B + 3] = a[0];
      }
      n.writeFloatLE = g ? c : I, n.writeFloatBE = g ? I : c;
      function s(x, E) {
        return a[0] = x[E], a[1] = x[E + 1], a[2] = x[E + 2], a[3] = x[E + 3], r[0];
      }
      function C(x, E) {
        return a[3] = x[E], a[2] = x[E + 1], a[1] = x[E + 2], a[0] = x[E + 3], r[0];
      }
      n.readFloatLE = g ? s : C, n.readFloatBE = g ? C : s;
    })() : (function() {
      function r(g, c, I, s) {
        var C = c < 0 ? 1 : 0;
        if (C && (c = -c), c === 0)
          g(1 / c > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), I, s);
        else if (isNaN(c))
          g(2143289344, I, s);
        else if (c > 34028234663852886e22)
          g((C << 31 | 2139095040) >>> 0, I, s);
        else if (c < 11754943508222875e-54)
          g((C << 31 | Math.round(c / 1401298464324817e-60)) >>> 0, I, s);
        else {
          var x = Math.floor(Math.log(c) / Math.LN2), E = Math.round(c * Math.pow(2, -x) * 8388608) & 8388607;
          g((C << 31 | x + 127 << 23 | E) >>> 0, I, s);
        }
      }
      n.writeFloatLE = r.bind(null, o), n.writeFloatBE = r.bind(null, t);
      function a(g, c, I) {
        var s = g(c, I), C = (s >> 31) * 2 + 1, x = s >>> 23 & 255, E = s & 8388607;
        return x === 255 ? E ? NaN : C * (1 / 0) : x === 0 ? C * 1401298464324817e-60 * E : C * Math.pow(2, x - 150) * (E + 8388608);
      }
      n.readFloatLE = a.bind(null, e), n.readFloatBE = a.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function c(x, E, B) {
        r[0] = x, E[B] = a[0], E[B + 1] = a[1], E[B + 2] = a[2], E[B + 3] = a[3], E[B + 4] = a[4], E[B + 5] = a[5], E[B + 6] = a[6], E[B + 7] = a[7];
      }
      function I(x, E, B) {
        r[0] = x, E[B] = a[7], E[B + 1] = a[6], E[B + 2] = a[5], E[B + 3] = a[4], E[B + 4] = a[3], E[B + 5] = a[2], E[B + 6] = a[1], E[B + 7] = a[0];
      }
      n.writeDoubleLE = g ? c : I, n.writeDoubleBE = g ? I : c;
      function s(x, E) {
        return a[0] = x[E], a[1] = x[E + 1], a[2] = x[E + 2], a[3] = x[E + 3], a[4] = x[E + 4], a[5] = x[E + 5], a[6] = x[E + 6], a[7] = x[E + 7], r[0];
      }
      function C(x, E) {
        return a[7] = x[E], a[6] = x[E + 1], a[5] = x[E + 2], a[4] = x[E + 3], a[3] = x[E + 4], a[2] = x[E + 5], a[1] = x[E + 6], a[0] = x[E + 7], r[0];
      }
      n.readDoubleLE = g ? s : C, n.readDoubleBE = g ? C : s;
    })() : (function() {
      function r(g, c, I, s, C, x) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          g(0, C, x + c), g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, x + I);
        else if (isNaN(s))
          g(0, C, x + c), g(2146959360, C, x + I);
        else if (s > 17976931348623157e292)
          g(0, C, x + c), g((E << 31 | 2146435072) >>> 0, C, x + I);
        else {
          var B;
          if (s < 22250738585072014e-324)
            B = s / 5e-324, g(B >>> 0, C, x + c), g((E << 31 | B / 4294967296) >>> 0, C, x + I);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), B = s * Math.pow(2, -l), g(B * 4503599627370496 >>> 0, C, x + c), g((E << 31 | l + 1023 << 20 | B * 1048576 & 1048575) >>> 0, C, x + I);
          }
        }
      }
      n.writeDoubleLE = r.bind(null, o, 0, 4), n.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, c, I, s, C) {
        var x = g(s, C + c), E = g(s, C + I), B = (E >> 31) * 2 + 1, l = E >>> 20 & 2047, u = 4294967296 * (E & 1048575) + x;
        return l === 2047 ? u ? NaN : B * (1 / 0) : l === 0 ? B * 5e-324 * u : B * Math.pow(2, l - 1075) * (u + 4503599627370496);
      }
      n.readDoubleLE = a.bind(null, e, 0, 4), n.readDoubleBE = a.bind(null, A, 4, 0);
    })(), n;
  }
  function o(n, r, a) {
    r[a] = n & 255, r[a + 1] = n >>> 8 & 255, r[a + 2] = n >>> 16 & 255, r[a + 3] = n >>> 24;
  }
  function t(n, r, a) {
    r[a] = n >>> 24, r[a + 1] = n >>> 16 & 255, r[a + 2] = n >>> 8 & 255, r[a + 3] = n & 255;
  }
  function e(n, r) {
    return (n[r] | n[r + 1] << 8 | n[r + 2] << 16 | n[r + 3] << 24) >>> 0;
  }
  function A(n, r) {
    return (n[r] << 24 | n[r + 1] << 16 | n[r + 2] << 8 | n[r + 3]) >>> 0;
  }
  return wi;
}
function Dg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bi, wg;
function pE() {
  if (wg) return bi;
  wg = 1, bi = i;
  function i(o) {
    try {
      if (typeof Dg != "function")
        return null;
      var t = Dg(o);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return bi;
}
var bg = {}, kg;
function mE() {
  return kg || (kg = 1, (function(i) {
    var o = i;
    o.length = function(t) {
      for (var e = 0, A = 0, n = 0; n < t.length; ++n)
        A = t.charCodeAt(n), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 ? (++n, e += 4) : e += 3;
      return e;
    }, o.read = function(t, e, A) {
      var n = A - e;
      if (n < 1)
        return "";
      for (var r = null, a = [], g = 0, c; e < A; )
        c = t[e++], c < 128 ? a[g++] = c : c > 191 && c < 224 ? a[g++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (c >> 10), a[g++] = 56320 + (c & 1023)) : a[g++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, o.write = function(t, e, A) {
      for (var n = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - n;
    };
  })(bg)), bg;
}
var ki, Sg;
function yE() {
  if (Sg) return ki;
  Sg = 1, ki = i;
  function i(o, t, e) {
    var A = e || 8192, n = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > n)
        return o(g);
      a + g > A && (r = o(A), a = 0);
      var c = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), c;
    };
  }
  return ki;
}
var Si, Gg;
function DE() {
  if (Gg) return Si;
  Gg = 1, Si = o;
  var i = ct();
  function o(n, r) {
    this.lo = n >>> 0, this.hi = r >>> 0;
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
    var r = n < 0;
    r && (n = -n);
    var a = n >>> 0, g = (n - a) / 4294967296 >>> 0;
    return r && (g = ~g >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++g > 4294967295 && (g = 0))), new o(a, g);
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
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
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
    var n = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? n < 16384 ? n < 128 ? 1 : 2 : n < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Si;
}
var Ng;
function ct() {
  return Ng || (Ng = 1, (function(i) {
    var o = i;
    o.asPromise = lE(), o.base64 = uE(), o.EventEmitter = fE(), o.float = hE(), o.inquire = pE(), o.utf8 = mE(), o.pool = yE(), o.LongBits = DE(), o.isNode = !!(typeof dt < "u" && dt && dt.process && dt.process.versions && dt.process.versions.node), o.global = o.isNode && dt || typeof window < "u" && window || typeof self < "u" && self || mi, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      var r = A[n];
      return r != null && A.hasOwnProperty(n) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, o.Buffer = (function() {
      try {
        var A = o.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    })(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(A) {
      return typeof A == "number" ? o.Buffer ? o._Buffer_allocUnsafe(A) : new o.Array(A) : o.Buffer ? o._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(A) {
      return A ? o.LongBits.from(A).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(A, n) {
      var r = o.LongBits.fromHash(A);
      return o.Long ? o.Long.fromBits(r.lo, r.hi, n) : r.toNumber(!!n);
    };
    function t(A, n, r) {
      for (var a = Object.keys(n), g = 0; g < a.length; ++g)
        (A[a[g]] === void 0 || !r) && (A[a[g]] = n[a[g]]);
      return A;
    }
    o.merge = t, o.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function n(r, a) {
        if (!(this instanceof n))
          return new n(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
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
      for (var n = {}, r = 0; r < A.length; ++r)
        n[A[r]] = 1;
      return function() {
        for (var a = Object.keys(this), g = a.length - 1; g > -1; --g)
          if (n[a[g]] === 1 && this[a[g]] !== void 0 && this[a[g]] !== null)
            return a[g];
      };
    }, o.oneOfSetter = function(A) {
      return function(n) {
        for (var r = 0; r < A.length; ++r)
          A[r] !== n && delete this[A[r]];
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
      function(n, r) {
        return new A(n, r);
      }, o._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(n) {
        return new A(n);
      };
    };
  })(mi)), mi;
}
var Gi, Rg;
function Hc() {
  if (Rg) return Gi;
  Rg = 1, Gi = g;
  var i = ct(), o, t = i.LongBits, e = i.base64, A = i.utf8;
  function n(l, u, h) {
    this.fn = l, this.len = u, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function g() {
    this.len = 0, this.head = new n(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var c = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new o();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = c(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, u, h) {
    return this.tail = this.tail.next = new n(l, u, h), this.len += u, this;
  };
  function I(l, u, h) {
    u[h] = l & 255;
  }
  function s(l, u, h) {
    for (; l > 127; )
      u[h++] = l & 127 | 128, l >>>= 7;
    u[h] = l;
  }
  function C(l, u) {
    this.len = l, this.next = void 0, this.val = u;
  }
  C.prototype = Object.create(n.prototype), C.prototype.fn = s, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new C(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(x, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function x(l, u, h) {
    for (; l.hi; )
      u[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      u[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    u[h++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var u = t.from(l);
    return this._push(x, u.length(), u);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var u = t.from(l).zzEncode();
    return this._push(x, u.length(), u);
  }, g.prototype.bool = function(l) {
    return this._push(I, 1, l ? 1 : 0);
  };
  function E(l, u, h) {
    u[h] = l & 255, u[h + 1] = l >>> 8 & 255, u[h + 2] = l >>> 16 & 255, u[h + 3] = l >>> 24;
  }
  g.prototype.fixed32 = function(l) {
    return this._push(E, 4, l >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(l) {
    var u = t.from(l);
    return this._push(E, 4, u.lo)._push(E, 4, u.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, g.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var B = i.Array.prototype.set ? function(l, u, h) {
    u.set(l, h);
  } : function(l, u, h) {
    for (var p = 0; p < l.length; ++p)
      u[h + p] = l[p];
  };
  return g.prototype.bytes = function(l) {
    var u = l.length >>> 0;
    if (!u)
      return this._push(I, 1, 0);
    if (i.isString(l)) {
      var h = g.alloc(u = e.length(l));
      e.decode(l, h, 0), l = h;
    }
    return this.uint32(u)._push(B, u, l);
  }, g.prototype.string = function(l) {
    var u = A.length(l);
    return u ? this.uint32(u)._push(A.write, u, l) : this._push(I, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new n(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new n(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, u = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = l.next, this.tail = u, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, u = this.constructor.alloc(this.len), h = 0; l; )
      l.fn(l.val, u, h), h += l.len, l = l.next;
    return u;
  }, g._configure = function(l) {
    o = l, g.create = c(), o._configure();
  }, Gi;
}
var Ni, vg;
function wE() {
  if (vg) return Ni;
  vg = 1, Ni = t;
  var i = Hc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var o = ct();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = o._Buffer_allocUnsafe, t.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && o.Buffer.prototype.set.name === "set" ? function(A, n, r) {
      n.set(A, r);
    } : function(A, n, r) {
      if (A.copy)
        A.copy(n, r, 0, A.length);
      else for (var a = 0; a < A.length; )
        n[r++] = A[a++];
    };
  }, t.prototype.bytes = function(A) {
    o.isString(A) && (A = o._Buffer_from(A, "base64"));
    var n = A.length >>> 0;
    return this.uint32(n), n && this._push(t.writeBytesBuffer, n, A), this;
  };
  function e(A, n, r) {
    A.length < 40 ? o.utf8.write(A, n, r) : n.utf8Write ? n.utf8Write(A, r) : n.write(A, r);
  }
  return t.prototype.string = function(A) {
    var n = o.Buffer.byteLength(A);
    return this.uint32(n), n && this._push(e, n, A), this;
  }, t._configure(), Ni;
}
var Ri, Fg;
function Kc() {
  if (Fg) return Ri;
  Fg = 1, Ri = n;
  var i = ct(), o, t = i.LongBits, e = i.utf8;
  function A(s, C) {
    return RangeError("index out of range: " + s.pos + " + " + (C || 1) + " > " + s.len);
  }
  function n(s) {
    this.buf = s, this.pos = 0, this.len = s.length;
  }
  var r = typeof Uint8Array < "u" ? function(s) {
    if (s instanceof Uint8Array || Array.isArray(s))
      return new n(s);
    throw Error("illegal buffer");
  } : function(s) {
    if (Array.isArray(s))
      return new n(s);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(s) {
      return (n.create = function(C) {
        return i.Buffer.isBuffer(C) ? new o(C) : r(C);
      })(s);
    } : r;
  };
  n.create = a(), n.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, n.prototype.uint32 = /* @__PURE__ */ (function() {
    var s = 4294967295;
    return function() {
      if (s = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (s = (s | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return s;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return s;
    };
  })(), n.prototype.int32 = function() {
    return this.uint32() | 0;
  }, n.prototype.sint32 = function() {
    var s = this.uint32();
    return s >>> 1 ^ -(s & 1) | 0;
  };
  function g() {
    var s = new t(0, 0), C = 0;
    if (this.len - this.pos > 4) {
      for (; C < 4; ++C)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << C * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      C = 0;
    } else {
      for (; C < 3; ++C) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << C * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << C * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; C < 5; ++C)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << C * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; C < 5; ++C) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << C * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  n.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function c(s, C) {
    return (s[C - 4] | s[C - 3] << 8 | s[C - 2] << 16 | s[C - 1] << 24) >>> 0;
  }
  n.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4);
  }, n.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4) | 0;
  };
  function I() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(c(this.buf, this.pos += 4), c(this.buf, this.pos += 4));
  }
  return n.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var s = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, s;
  }, n.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var s = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, s;
  }, n.prototype.bytes = function() {
    var s = this.uint32(), C = this.pos, x = this.pos + s;
    if (x > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(C, x);
    if (C === x) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, C, x);
  }, n.prototype.string = function() {
    var s = this.bytes();
    return e.read(s, 0, s.length);
  }, n.prototype.skip = function(s) {
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
  }, n.prototype.skipType = function(s) {
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
  }, n._configure = function(s) {
    o = s, n.create = a(), o._configure();
    var C = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(n.prototype, {
      int64: function() {
        return g.call(this)[C](!1);
      },
      uint64: function() {
        return g.call(this)[C](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[C](!1);
      },
      fixed64: function() {
        return I.call(this)[C](!0);
      },
      sfixed64: function() {
        return I.call(this)[C](!1);
      }
    });
  }, Ri;
}
var vi, Mg;
function bE() {
  if (Mg) return vi;
  Mg = 1, vi = t;
  var i = Kc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var o = ct();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    o.Buffer && (t.prototype._slice = o.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), vi;
}
var Wg = {}, Fi, Lg;
function kE() {
  if (Lg) return Fi;
  Lg = 1, Fi = o;
  var i = ct();
  (o.prototype = Object.create(i.EventEmitter.prototype)).constructor = o;
  function o(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return o.prototype.rpcCall = function t(e, A, n, r, a) {
    if (!r)
      throw TypeError("request must be specified");
    var g = this;
    if (!a)
      return i.asPromise(t, g, e, A, n, r);
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
        function(c, I) {
          if (c)
            return g.emit("error", c, e), a(c);
          if (I === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(I instanceof n))
            try {
              I = n[g.responseDelimited ? "decodeDelimited" : "decode"](I);
            } catch (s) {
              return g.emit("error", s, e), a(s);
            }
          return g.emit("data", I, e), a(null, I);
        }
      );
    } catch (c) {
      g.emit("error", c, e), setTimeout(function() {
        a(c);
      }, 0);
      return;
    }
  }, o.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, Fi;
}
var Og;
function SE() {
  return Og || (Og = 1, (function(i) {
    var o = i;
    o.Service = kE();
  })(Wg)), Wg;
}
var Jg, Ug;
function GE() {
  return Ug || (Ug = 1, Jg = {}), Jg;
}
var Yg;
function NE() {
  return Yg || (Yg = 1, (function(i) {
    var o = i;
    o.build = "minimal", o.Writer = Hc(), o.BufferWriter = wE(), o.Reader = Kc(), o.BufferReader = bE(), o.util = ct(), o.rpc = SE(), o.roots = GE(), o.configure = t;
    function t() {
      o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
    }
    t();
  })(ug)), ug;
}
var Tg, Pg;
function RE() {
  return Pg || (Pg = 1, Tg = NE()), Tg;
}
var S = RE();
const f = S.Reader, G = S.Writer, d = S.util, Q = S.roots.default || (S.roots.default = {}), $e = Q.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.token = d.newBuffer([]), o.prototype.iv = d.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = d.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Content();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.Content)
        return t;
      let e = new Q.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  })(), i.v4 = (function() {
    const o = {};
    return o.MagnifEyeLivenessContent = (function() {
      function t(A) {
        if (this.images = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.images = d.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.images != null && A.images.length)
          for (let r = 0; r < A.images.length; ++r)
            Q.dot.Image.encode(A.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(Q.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let n = 0; n < A.images.length; ++n) {
            let r = Q.dot.Image.verify(A.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MagnifEyeLivenessContent)
          return A;
        let n = new Q.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = Q.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = Q.dot.Image.toObject(A.images[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    })(), o.Metadata = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: d.oneOfGetter(e = ["sessionToken"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: d.oneOfGetter(e = ["web", "android", "ios"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && Q.dot.v4.WebMetadata.encode(A.web, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && Q.dot.v4.AndroidMetadata.encode(A.android, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && Q.dot.v4.IosMetadata.encode(A.ios, n.uint32(
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
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.Metadata();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
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
              g.web = Q.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = Q.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = Q.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          n.metadata = 1;
          {
            let r = Q.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let r = Q.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let r = Q.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Metadata)
          return A;
        let n = new Q.dot.v4.Metadata();
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
          n.web = Q.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          n.android = Q.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          n.ios = Q.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.platform = n.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = n.enums === String ? Q.dot.Platform[A.platform] === void 0 ? A.platform : Q.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = Q.dot.v4.WebMetadata.toObject(A.web, n), n.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = Q.dot.v4.AndroidMetadata.toObject(A.android, n), n.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = Q.dot.v4.IosMetadata.toObject(A.ios, n), n.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, n.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    })(), o.AndroidMetadata = (function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.supportedAbis = d.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.dynamicCameraFrameProperties = d.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.androidId = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: d.oneOfGetter(e = ["device"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: d.oneOfGetter(e = ["tamperingIndicators"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: d.oneOfGetter(e = ["croppedYuv420Image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: d.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_androidId", {
        get: d.oneOfGetter(e = ["androidId"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let r = 0; r < A.supportedAbis.length; ++r)
            n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[r]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), Q.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.AndroidCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && Q.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && Q.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.androidId != null && Object.hasOwnProperty.call(A, "androidId") && n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).string(A.androidId), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.AndroidMetadata(), c, I;
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
              g.camera = Q.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === d.emptyObject && (g.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (c = "", I = null; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = Q.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[c] = I;
              break;
            }
            case 8: {
              g.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              g.croppedYuv420Image = Q.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.androidId = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let n = 0; n < A.supportedAbis.length; ++n)
            if (!d.isString(A.supportedAbis[n]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = Q.dot.v4.AndroidCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || d.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let r = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let n = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < n.length; ++r) {
            let a = Q.dot.Int32List.verify(A.dynamicCameraFrameProperties[n[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = Q.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let n = Q.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (n)
            return "yuv420ImageCrop." + n;
        }
        return A.androidId != null && A.hasOwnProperty("androidId") && !d.isString(A.androidId) ? "androidId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.AndroidMetadata)
          return A;
        let n = new Q.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          n.supportedAbis = [];
          for (let r = 0; r < A.supportedAbis.length; ++r)
            n.supportedAbis[r] = String(A.supportedAbis[r]);
        }
        if (A.device != null && (n.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          n.camera = Q.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], n.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (n.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          n.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            n.dynamicCameraFrameProperties[r[a]] = Q.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, n.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (n.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = Q.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          n.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.androidId != null && (n.androidId = String(A.androidId)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, n.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = n.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = Q.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], n);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = Q.dot.v4.AndroidCamera.toObject(A.camera, n), n.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = n.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : n.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, n.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = Q.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, n), n.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, n.oneofs && (r._androidId = "androidId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    })(), o.AndroidCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    })(), o.Yuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = Q.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = Q.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.Yuv420Image)
          return e;
        let A = new Q.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = d.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = d.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = d.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    })(), o.Yuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = Q.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = Q.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = Q.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = Q.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new Q.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = Q.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = Q.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = Q.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = Q.dot.PointInt.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    })(), o.IosMetadata = (function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = d.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.isoValues = d.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.identifierForVendor = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: d.oneOfGetter(e = ["croppedYuv420Image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: d.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_identifierForVendor", {
        get: d.oneOfGetter(e = ["identifierForVendor"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            n.uint32(
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
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.isoValues != null && A.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < A.isoValues.length; ++r)
            n.int32(A.isoValues[r]);
          n.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.IosCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && Q.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && Q.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.identifierForVendor != null && Object.hasOwnProperty.call(A, "identifierForVendor") && n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).string(A.identifierForVendor), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.IosMetadata(), c, I;
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
              g.architectureInfo === d.emptyObject && (g.architectureInfo = {});
              let C = A.uint32() + A.pos;
              for (c = "", I = !1; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              g.architectureInfo[c] = I;
              break;
            }
            case 6: {
              g.camera = Q.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (s & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  g.isoValues.push(A.int32());
              } else
                g.isoValues.push(A.int32());
              break;
            }
            case 8: {
              g.croppedYuv420Image = Q.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.identifierForVendor = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(A.architectureInfo);
          for (let r = 0; r < n.length; ++r)
            if (typeof A.architectureInfo[n[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = Q.dot.v4.IosCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || d.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let r = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < A.isoValues.length; ++n)
            if (!d.isInteger(A.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = Q.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let n = Q.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (n)
            return "yuv420ImageCrop." + n;
        }
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !d.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.IosMetadata)
          return A;
        let n = new Q.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (n.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            n.architectureInfo[r[a]] = !!A.architectureInfo[r[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          n.camera = Q.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], n.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (n.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let r = 0; r < A.isoValues.length; ++r)
            n.isoValues[r] = A.isoValues[r] | 0;
        }
        if (A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.IosMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = Q.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          n.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.identifierForVendor != null && (n.identifierForVendor = String(A.identifierForVendor)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        (n.arrays || n.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.architectureInfo = {}), n.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let g = 0; g < a.length; ++g)
            r.architectureInfo[a[g]] = A.architectureInfo[a[g]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = n.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            r.isoValues[g] = A.isoValues[g];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = Q.dot.v4.IosCamera.toObject(A.camera, n), n.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = Q.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, n), n.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && (r.identifierForVendor = A.identifierForVendor, n.oneofs && (r._identifierForVendor = "identifierForVendor")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    })(), o.IosCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    })(), o.IosYuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uvPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = Q.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = Q.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || d.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.IosYuv420Image)
          return e;
        let A = new Q.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? d.base64.decode(e.uvPlane, A.uvPlane = d.newBuffer(d.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = d.newBuffer(n.yPlane))), A.bytes === String ? n.uvPlane = "" : (n.uvPlane = [], A.bytes !== Array && (n.uvPlane = d.newBuffer(n.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (n.uvPlane = A.bytes === String ? d.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    })(), o.IosYuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = Q.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = Q.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = Q.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = Q.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new Q.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = Q.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = Q.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = Q.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = Q.dot.PointInt.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    })(), o.WebMetadata = (function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = d.emptyArray, t.prototype.hashedDetectedImages = d.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = d.emptyArray, t.prototype.detectionRecord = d.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: d.oneOfGetter(e = ["croppedImage"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: d.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: d.oneOfGetter(e = ["platformDetails"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            Q.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[r]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let r = 0; r < A.detectionRecord.length; ++r)
            Q.dot.v4.DetectedObject.encode(A.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            Q.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && Q.dot.Image.encode(A.croppedImage, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && Q.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && Q.dot.v4.PlatformDetails.encode(A.platformDetails, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.currentCameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(Q.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(Q.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(Q.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = Q.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = Q.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let n = Q.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            let r = Q.dot.v4.CameraProperties.verify(A.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            if (!d.isString(A.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = Q.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            let r = Q.dot.v4.DetectedObject.verify(A.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let n = Q.dot.Image.verify(A.croppedImage);
          if (n)
            return "croppedImage." + n;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let n = Q.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (n)
            return "croppedImageWithPosition." + n;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let n = Q.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (n)
            return "platformDetails." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.WebMetadata)
          return A;
        let n = new Q.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = Q.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            n.hashedDetectedImages[r] = String(A.hashedDetectedImages[r]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof A.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[r] = Q.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = Q.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          n.croppedImage = Q.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          n.croppedImageWithPosition = Q.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          n.platformDetails = Q.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, n)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = Q.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], n);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = Q.dot.v4.DetectedObject.toObject(A.detectionRecord[a], n);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = Q.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], n);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = Q.dot.Image.toObject(A.croppedImage, n), n.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = Q.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, n), n.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = Q.dot.v4.PlatformDetails.toObject(A.platformDetails, n), n.oneofs && (r._platformDetails = "platformDetails")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    })(), o.HashedDetectedImageWithTimestamp = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new Q.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults)
          if (n.imageHash = "", d.Long) {
            let r = new d.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (n.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    })(), o.MediaTrackSettings = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: d.oneOfGetter(e = ["aspectRatio"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: d.oneOfGetter(e = ["autoGainControl"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: d.oneOfGetter(e = ["channelCount"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: d.oneOfGetter(e = ["deviceId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: d.oneOfGetter(e = ["displaySurface"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: d.oneOfGetter(e = ["echoCancellation"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: d.oneOfGetter(e = ["facingMode"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: d.oneOfGetter(e = ["frameRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: d.oneOfGetter(e = ["groupId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: d.oneOfGetter(e = ["height"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: d.oneOfGetter(e = ["noiseSuppression"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: d.oneOfGetter(e = ["sampleRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: d.oneOfGetter(e = ["sampleSize"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: d.oneOfGetter(e = ["width"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: d.oneOfGetter(e = ["deviceName"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && n.uint32(
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
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.MediaTrackSettings();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
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
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MediaTrackSettings)
          return A;
        let n = new Q.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (n.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (n.autoGainControl = !!A.autoGainControl), A.channelCount != null && (n.channelCount = A.channelCount | 0), A.deviceId != null && (n.deviceId = String(A.deviceId)), A.displaySurface != null && (n.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (n.echoCancellation = !!A.echoCancellation), A.facingMode != null && (n.facingMode = String(A.facingMode)), A.frameRate != null && (n.frameRate = Number(A.frameRate)), A.groupId != null && (n.groupId = String(A.groupId)), A.height != null && (n.height = A.height | 0), A.noiseSuppression != null && (n.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (n.sampleRate = A.sampleRate | 0), A.sampleSize != null && (n.sampleSize = A.sampleSize | 0), A.width != null && (n.width = A.width | 0), A.deviceName != null && (n.deviceName = String(A.deviceName)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = n.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, n.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, n.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, n.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, n.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, n.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, n.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, n.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = n.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, n.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, n.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, n.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, n.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, n.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, n.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, n.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, n.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    })(), o.ImageBitmap = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.ImageBitmap)
          return e;
        let A = new Q.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.width = 0, n.height = 0), e.width != null && e.hasOwnProperty("width") && (n.width = e.width), e.height != null && e.hasOwnProperty("height") && (n.height = e.height), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    })(), o.CameraProperties = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && Q.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let n = Q.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (n)
            return "cameraInitFrameResolution." + n;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let n = Q.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (n)
            return "cameraProperties." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.CameraProperties)
          return A;
        let n = new Q.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          n.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          n.cameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, n), n.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    })(), o.DetectedObject = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
              a.faceCenter = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = Q.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = Q.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = Q.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = Q.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = Q.dot.v4.Point.toObject(e.topRight, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    })(), o.Point = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.Point();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        let n = {};
        return A.defaults && (n.x = 0, n.y = 0), e.x != null && e.hasOwnProperty("x") && (n.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (n.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    })(), o.ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = Q.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.ImageCrop)
          return e;
        let A = new Q.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = Q.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = Q.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = Q.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = Q.dot.v4.Point.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    })(), o.PlatformDetails = (function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = d.emptyArray, t.prototype.installationId = null;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: d.oneOfGetter(e = ["platform"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: d.oneOfGetter(e = ["platformVersion"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: d.oneOfGetter(e = ["architecture"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: d.oneOfGetter(e = ["model"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_installationId", {
        get: d.oneOfGetter(e = ["installationId"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.userAgent), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.platform), A.platformVersion != null && Object.hasOwnProperty.call(A, "platformVersion") && n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(A.platformVersion), A.architecture != null && Object.hasOwnProperty.call(A, "architecture") && n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.architecture), A.model != null && Object.hasOwnProperty.call(A, "model") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.model), A.browserVersions != null && A.browserVersions.length)
          for (let r = 0; r < A.browserVersions.length; ++r)
            Q.dot.v4.BrowserVersion.encode(A.browserVersions[r], n.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return A.installationId != null && Object.hasOwnProperty.call(A, "installationId") && n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.installationId), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.PlatformDetails();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
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
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(Q.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            case 7: {
              g.installationId = A.string();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !d.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !d.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !d.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !d.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !d.isString(A.model))
          return "model: string expected";
        if (A.browserVersions != null && A.hasOwnProperty("browserVersions")) {
          if (!Array.isArray(A.browserVersions))
            return "browserVersions: array expected";
          for (let n = 0; n < A.browserVersions.length; ++n) {
            let r = Q.dot.v4.BrowserVersion.verify(A.browserVersions[n]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && !d.isString(A.installationId) ? "installationId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.PlatformDetails)
          return A;
        let n = new Q.dot.v4.PlatformDetails();
        if (A.userAgent != null && (n.userAgent = String(A.userAgent)), A.platform != null && (n.platform = String(A.platform)), A.platformVersion != null && (n.platformVersion = String(A.platformVersion)), A.architecture != null && (n.architecture = String(A.architecture)), A.model != null && (n.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          n.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            n.browserVersions[r] = Q.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return A.installationId != null && (n.installationId = String(A.installationId)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.browserVersions = []), n.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, n.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, n.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, n.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, n.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = Q.dot.v4.BrowserVersion.toObject(A.browserVersions[a], n);
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && (r.installationId = A.installationId, n.oneofs && (r._installationId = "installationId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    })(), o.BrowserVersion = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.name = "", t.prototype.version = "", t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.name), e.version != null && Object.hasOwnProperty.call(e, "version") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.version), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !d.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !d.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.BrowserVersion)
          return e;
        let A = new Q.dot.v4.BrowserVersion();
        return e.name != null && (A.name = String(e.name)), e.version != null && (A.version = String(e.version)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.name = "", n.version = ""), e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.version != null && e.hasOwnProperty("version") && (n.version = e.version), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    })(), o.FaceContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = Q.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.FaceContent)
          return A;
        let n = new Q.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    })(), o.DocumentContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = Q.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.DocumentContent)
          return A;
        let n = new Q.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    })(), o.Blob = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && Q.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && Q.dot.v4.FaceContent.encode(A.faceContent, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && Q.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && Q.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && Q.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && Q.dot.v4.PalmContent.encode(A.palmContent, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && Q.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && Q.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.Blob();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.documentContent = Q.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = Q.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = Q.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = Q.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = Q.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          n.blob = 1;
          {
            let r = Q.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = Q.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Blob)
          return A;
        let n = new Q.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          n.documentContent = Q.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          n.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          n.faceContent = Q.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          n.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          n.smileLivenessContent = Q.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          n.palmContent = Q.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          n.travelDocumentContent = Q.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          n.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = Q.dot.v4.DocumentContent.toObject(A.documentContent, n), n.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = Q.dot.v4.FaceContent.toObject(A.faceContent, n), n.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, n), n.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = Q.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, n), n.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, n), n.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = Q.dot.v4.PalmContent.toObject(A.palmContent, n), n.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = Q.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, n), n.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, n), n.oneofs && (r.blob = "multiRangeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    })(), o.TravelDocumentContent = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && Q.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = Q.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = Q.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = Q.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = Q.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    })(), o.LdsMasterFile = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && Q.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          g >>> 3 === 1 ? a.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(g & 7);
        }
        return a;
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
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    })(), o.Lds1eMrtdApplication = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: d.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: d.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: d.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: d.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: d.oneOfGetter(e = ["dg8DataFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: d.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: d.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: d.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: d.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: d.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: d.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: d.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: d.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && Q.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, n.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, n.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, n.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, n.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, n.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (n)
            return "comHeaderAndDataGroupPresenceInformation." + n;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (n)
            return "sodDocumentSecurityObject." + n;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (n)
            return "dg1MachineReadableZoneInformation." + n;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (n)
            return "dg2EncodedIdentificationFeaturesFace." + n;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (n)
            return "dg3AdditionalIdentificationFeatureFingers." + n;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (n)
            return "dg4AdditionalIdentificationFeatureIrises." + n;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (n)
            return "dg5DisplayedPortrait." + n;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (n)
            return "dg7DisplayedSignatureOrUsualMark." + n;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (n)
            return "dg8DataFeatures." + n;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (n)
            return "dg9StructureFeatures." + n;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (n)
            return "dg10SubstanceFeatures." + n;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (n)
            return "dg11AdditionalPersonalDetails." + n;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (n)
            return "dg12AdditionalDocumentDetails." + n;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (n)
            return "dg13OptionalDetails." + n;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (n)
            return "dg14SecurityOptions." + n;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (n)
            return "dg15ActiveAuthenticationPublicKeyInfo." + n;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let n = Q.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (n)
            return "dg16PersonsToNotify." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Lds1eMrtdApplication)
          return A;
        let n = new Q.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          n.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          n.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          n.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          n.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          n.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          n.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          n.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          n.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          n.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          n.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          n.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          n.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          n.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          n.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          n.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          n.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          n.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, n)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, n)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, n)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, n)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, n), n.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, n), n.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, n), n.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, n), n.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, n), n.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, n), n.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, n), n.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, n), n.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, n), n.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, n), n.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, n), n.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, n), n.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, n), n.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    })(), o.Lds1ElementaryFile = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.Lds1ElementaryFile();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || d.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Lds1ElementaryFile)
          return A;
        let n = new Q.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, n.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (n.bytes = A.bytes)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.id = n.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = n.enums === String ? Q.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : Q.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = n.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, n.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "ID_UNSPECIFIED"] = 0, n[A[1] = "ID_COM"] = 1, n[A[2] = "ID_SOD"] = 2, n[A[3] = "ID_DG1"] = 3, n[A[4] = "ID_DG2"] = 4, n[A[5] = "ID_DG3"] = 5, n[A[6] = "ID_DG4"] = 6, n[A[7] = "ID_DG5"] = 7, n[A[8] = "ID_DG7"] = 8, n[A[9] = "ID_DG8"] = 9, n[A[10] = "ID_DG9"] = 10, n[A[11] = "ID_DG10"] = 11, n[A[12] = "ID_DG11"] = 12, n[A[13] = "ID_DG12"] = 13, n[A[14] = "ID_DG13"] = 14, n[A[15] = "ID_DG14"] = 15, n[A[16] = "ID_DG15"] = 16, n[A[17] = "ID_DG16"] = 17, n;
      })(), t;
    })(), o.AccessControlProtocol = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    })(), o.AuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && Q.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && Q.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = Q.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = Q.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = Q.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = Q.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    })(), o.DataAuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        let n = {};
        return A.defaults && (n.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, n.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (n.status = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : Q.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (n.protocol = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = (function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      })(), t.Protocol = (function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      })(), t;
    })(), o.ChipAuthenticationStatus = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: d.oneOfGetter(e = ["protocol"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: d.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && n.uint32(
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
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
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
              A.skipType(c & 7);
              break;
          }
        }
        return g;
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || d.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.ChipAuthenticationStatus)
          return A;
        let n = new Q.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, n.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (n.activeAuthenticationResponse = A.activeAuthenticationResponse)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.status = n.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = n.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : Q.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = n.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, n.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = n.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : n.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, n.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "STATUS_UNSPECIFIED"] = 0, n[A[1] = "STATUS_AUTHENTICATED"] = 1, n[A[2] = "STATUS_DENIED"] = 2, n[A[3] = "STATUS_NOT_SUPPORTED"] = 3, n;
      })(), t.Protocol = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, n[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, n[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, n[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, n;
      })(), t;
    })(), o.EyeGazeLivenessContent = (function() {
      function t(A) {
        if (this.segments = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.segments = d.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: d.oneOfGetter(e = ["image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            Q.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 3: {
              g.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(Q.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = Q.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let n = 0; n < A.segments.length; ++n) {
            let r = Q.dot.v4.EyeGazeLivenessSegment.verify(A.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.EyeGazeLivenessContent)
          return A;
        let n = new Q.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          n.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = Q.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = Q.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, n), n.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    })(), o.EyeGazeLivenessSegment = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
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
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? Q.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : Q.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = Q.dot.Image.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    })(), o.EyeGazeLivenessCorner = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    })(), o.MultiRangeLivenessContent = (function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.stepResults = d.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = G.create()), A.stepResults != null && A.stepResults.length)
          for (let r = 0; r < A.stepResults.length; ++r)
            Q.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && Q.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(Q.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let n = 0; n < A.stepResults.length; ++n) {
            let r = Q.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[n]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let n = Q.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (n)
            return "multiRangeLivenessMetadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MultiRangeLivenessContent)
          return A;
        let n = new Q.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          n.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            n.stepResults[r] = Q.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          n.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.stepResults = []), n.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = Q.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    })(), o.MultiRangeLivenessStepResult = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.challengeItem = e.int32();
              break;
            }
            case 2: {
              a.image = Q.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = Q.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new Q.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = Q.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, n.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (n.challengeItem = A.enums === String ? Q.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : Q.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (n.image = Q.dot.ImageWithTimestamp.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    })(), o.MultiRangeLivenessChallengeItem = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    })(), o.MultiRangeLivenessMetadata = (function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.detections = d.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = G.create()), e.detections != null && e.detections.length)
          for (let n = 0; n < e.detections.length; ++n)
            Q.dot.v4.FaceDetection.encode(e.detections[n], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          g >>> 3 === 1 ? (a.detections && a.detections.length || (a.detections = []), a.detections.push(Q.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let n = Q.dot.v4.FaceDetection.verify(e.detections[A]);
            if (n)
              return "detections." + n;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new Q.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let n = 0; n < e.detections.length; ++n) {
            if (typeof e.detections[n] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[n] = Q.dot.v4.FaceDetection.fromObject(e.detections[n]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if ((A.arrays || A.defaults) && (n.detections = []), e.detections && e.detections.length) {
          n.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            n.detections[r] = Q.dot.v4.FaceDetection.toObject(e.detections[r], A);
        }
        return n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    })(), o.FaceDetection = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && Q.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              a.position = Q.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = Q.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.FaceDetection)
          return e;
        let A = new Q.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = Q.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults) {
          if (d.Long) {
            let r = new d.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
          n.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (n.position = Q.dot.v4.FaceDetectionPosition.toObject(e.position, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    })(), o.FaceDetectionPosition = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && Q.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = Q.dot.PointDouble.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = Q.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.FaceDetectionPosition)
          return e;
        let A = new Q.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = Q.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.center = null, n.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (n.center = Q.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (n.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    })(), o.SmileLivenessContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && Q.dot.Image.encode(A.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && Q.dot.Image.encode(A.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = Q.dot.Image.verify(A.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let n = Q.dot.Image.verify(A.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.SmileLivenessContent)
          return A;
        let n = new Q.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = Q.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = Q.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = Q.dot.Image.toObject(A.neutralExpressionFaceImage, n)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = Q.dot.Image.toObject(A.smileExpressionFaceImage, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    })(), o.PalmContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new Q.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = Q.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = Q.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = Q.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.PalmContent)
          return A;
        let n = new Q.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          n.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    })(), o;
  })(), i.Image = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = d.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Image();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.Image)
        return t;
      let e = new Q.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  })(), i.ImageWithTimestamp = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.image = null, o.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && Q.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.ImageWithTimestamp();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = Q.dot.Image.decode(t, t.uint32());
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = Q.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.ImageWithTimestamp)
        return t;
      let e = new Q.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = Q.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, d.Long) {
          let n = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = Q.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
    }, o;
  })(), i.ImageSize = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.width = 0, o.prototype.height = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.ImageSize();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.ImageSize)
        return t;
      let e = new Q.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, o;
  })(), i.Int32List = (function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.items = d.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = G.create()), t.items != null && t.items.length) {
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
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Int32List();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!d.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
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
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  })(), i.Platform = (function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  })(), i.RectangleDouble = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.left = 0, o.prototype.top = 0, o.prototype.right = 0, o.prototype.bottom = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.RectangleDouble();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.RectangleDouble)
        return t;
      let e = new Q.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, o;
  })(), i.DigestWithTimestamp = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.digest = d.newBuffer([]), o.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.DigestWithTimestamp)
        return t;
      let e = new Q.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let n = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  })(), i.Video = (function() {
    function o(e) {
      if (e)
        for (let A = Object.keys(e), n = 0; n < A.length; ++n)
          e[A[n]] != null && (this[A[n]] = e[A[n]]);
    }
    o.prototype.bytes = null, o.prototype.containerMp4 = null, o.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(o.prototype, "_bytes", {
      get: d.oneOfGetter(t = ["bytes"]),
      set: d.oneOfSetter(t)
    }), Object.defineProperty(o.prototype, "content", {
      get: d.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: d.oneOfSetter(t)
    }), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, A) {
      return A || (A = G.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && Q.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && Q.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, o.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, o.decode = function(e, A, n) {
      e instanceof f || (e = f.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new Q.dot.Video();
      for (; e.pos < r; ) {
        let g = e.uint32();
        if (g === n)
          break;
        switch (g >>> 3) {
          case 1: {
            a.bytes = e.bytes();
            break;
          }
          case 2: {
            a.containerMp4 = Q.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = Q.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, o.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || d.isString(e.bytes))))
        return "bytes: buffer expected";
      if (e.containerMp4 != null && e.hasOwnProperty("containerMp4")) {
        A.content = 1;
        {
          let n = Q.dot.VideoContainer.verify(e.containerMp4);
          if (n)
            return "containerMp4." + n;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let n = Q.dot.VideoStream.verify(e.streamH264);
          if (n)
            return "streamH264." + n;
        }
      }
      return null;
    }, o.fromObject = function(e) {
      if (e instanceof Q.dot.Video)
        return e;
      let A = new Q.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? d.base64.decode(e.bytes, A.bytes = d.newBuffer(d.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = Q.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = Q.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, o.toObject = function(e, A) {
      A || (A = {});
      let n = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (n.bytes = A.bytes === String ? d.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (n._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (n.containerMp4 = Q.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (n.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (n.streamH264 = Q.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (n.content = "streamH264")), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, o;
  })(), i.VideoContainer = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = d.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.VideoContainer();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.VideoContainer)
        return t;
      let e = new Q.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, o;
  })(), i.VideoStream = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = d.newBuffer([]), o.prototype.frameRate = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.VideoStream();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.VideoStream)
        return t;
      let e = new Q.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, o;
  })(), i.PointInt = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.x = 0, o.prototype.y = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.PointInt();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !d.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !d.isInteger(t.y) ? "y: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.PointInt)
        return t;
      let e = new Q.dot.PointInt();
      return t.x != null && (e.x = t.x | 0), t.y != null && (e.y = t.y | 0), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = t.x), t.y != null && t.hasOwnProperty("y") && (A.y = t.y), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, o;
  })(), i.PointDouble = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.x = 0, o.prototype.y = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new Q.dot.PointDouble();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof Q.dot.PointDouble)
        return t;
      let e = new Q.dot.PointDouble();
      return t.x != null && (e.x = Number(t.x)), t.y != null && (e.y = Number(t.y)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = e.json && !isFinite(t.x) ? String(t.x) : t.x), t.y != null && t.hasOwnProperty("y") && (A.y = e.json && !isFinite(t.y) ? String(t.y) : t.y), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, o;
  })(), i;
})();
(function(i, o) {
  const t = i();
  function e(g, c, I, s, C) {
    return Z(C - -310, s);
  }
  function A(g, c, I, s, C) {
    return Z(c - -37, s);
  }
  function n(g, c, I, s, C) {
    return Z(s - 532, c);
  }
  function r(g, c, I, s, C) {
    return Z(c - -115, g);
  }
  function a(g, c, I, s, C) {
    return Z(C - 851, c);
  }
  for (; ; )
    try {
      if (parseInt(a(1166, "Fy2R", 1259, 1250, 1203)) / 1 + -parseInt(a(961, "g3Ge", 1079, 1065, 1058)) / 2 * (-parseInt(n(753, "bvLa", 850, 866, 784)) / 3) + -parseInt(A(458, 343, 289, "U2&P", 386)) / 4 * (-parseInt(n(829, "z!FV", 766, 787, 755)) / 5) + parseInt(e(-57, -123, 5, "8G5b", -8)) / 6 * (-parseInt(a(1198, "H(DV", 1114, 1126, 1172)) / 7) + -parseInt(A(113, 209, 150, "Fy2R", 249)) / 8 + -parseInt(r("kfmI", 209, 214, 240, 235)) / 9 * (-parseInt(A(229, 184, 120, "!BtG", 298)) / 10) + -parseInt(n(900, "V%34", 910, 863, 846)) / 11 * (parseInt(n(874, "9Haq", 850, 859, 899)) / 12) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ln, 869784);
function Ln() {
  const i = ["gszebIS", "cdiJW4Sg", "WQnHWR/cRSoL", "t8knpCkHgq", "vujQWQZcJ0WBWRRcJSoz", "xKvVWQ7dIbm5WQBcHSonWOzt", "eCk4ewFdIq", "W6RcNhKdWP0", "evtdNCoslG", "W5JcHq7cTL8", "FCkwwSo2sG", "mtDVW4VcVq", "W5HhrCkRW5u", "W73dMshcTmkR", "WR4DWPtcPSoy", "W5BcUaJcVqW", "BmoTomkMW7e", "omk8pLpdIG", "nGukW4FcOa", "oCoAW6SgW7S", "WQqhtLVcOa", "smkqWOBdOCkl", "lCkTuSkHmW", "WOfAWQFcI8oH", "WOy6C8kxW70", "WR3dVHxcK8ky", "W6LCv8okW5m", "W7xdQ8oIWQBcPZVdUq", "hbpdV8kfWRC", "mImpF2C", "ymogWOfeWQu", "nr4vW5VcNq", "cqZcGmkdbG", "WQlcOcdcVrFcUvu", "l1VdHYldIa", "WPRcJ8kocSkh", "W5Cnu0LW", "hw3dQ8kfWRe", "acz4E2C", "nmkDySk7hG", "ucnXW6X6", "ghpdPCoyWPe", "WPxcO0vnW6O", "ChRdOmohWO8", "WRdcGCkjW67dOq", "vvTzWRao", "WOpcJmoMj1q", "rXHGeqK", "aCowWQHNWPG", "eCkTW557WQW", "W4KRWQ4IwW", "BefZW5G9", "WPRdH1NdTaxcHSoNn1/dRSkIxh0", "WQlcICofd8kw", "leaetau", "W6bDiCkxWP7dL8kaqfCVWQ3dSmodEa", "lblcICk8ya", "kI8GW6W2", "gGVcGCkrW4LaWPRdI33cNG", "tSoGkKxcSq", "DhvzW4qy", "WQKQWOJcKmoe", "BCk1FSocWP/cPmo3sbNdOSkhzW", "W7RcQaBcJq", "WRZcQ3OgW6i", "re1ZmbPbu8k0", "WRJcKZmt", "WR0hfY5e", "hLNdHHxcVa", "WQ4mWPxcTSoH", "bCoPoSkAW7m", "W7qOWPDMDq", "WOLWWRRcT8ob", "EmkTW5LjWPi", "BaZdMmkcyW", "WQ/cU3LoW4G", "oCoRkCkaW5a", "rsVdR8okaW", "W4yUWRbYja", "WQxdQ8oiW4NdGgJcIf8", "D3hdQ8kSWRC", "btiJyG", "WOC1WP7dKSot", "W6/dPYPFW6ZcSCoaWOf1W6vydq", "WPBcHmkeiSkA", "mun1W5yw", "WQtcL8oGW4RdHq", "oSo1WRDDW7S", "WRpdQCo/WPNcUa", "WPXDrCojW6u", "hHdcVmkKDa", "hKJdLCoXtq", "W5hcSSo/W63dJq", "WRdcGmodm1u", "dCkDWQldL8k0", "WOZcNaWhW7u", "WQxdULNdNLJdJhnSWR3cUchdLW", "WRyCwmo1W7a", "W6/dQIHCW6lcS8omWOLKW5jJfq", "W57dSSodxbC", "WQFcJmo6dZe", "mcKqW78w", "D8kzlCoNta", "yJVdRCotjq", "WP3dHSk2W4xdUa", "C8keweRcLq", "WOfhW7/cSSo3", "pCooW690W4q", "WPLNWOJcNmov", "WPtcR8k3WQldTq", "W6xdUCoCWOFdJG", "eCketeVcN8oFkSoR", "oqCorwW", "WOfEWOZcGSob", "WPtcMCkLWPhdOa", "WOi3W4/dQSoZ", "DCous0NcPq", "j1BdIJFcKG", "W5X9W5fl", "WOJcPgTsWRi", "WRn2WQ4iya", "WRJdJshdRmk7", "cmoTW4fZWQS", "WOShW7hdOW", "W5JcGmoYrSkX", "o8oYWRqhW74", "c3FcICk+WQ8", "WQRdHCkjWR7dGG", "WOvhWRqaBq", "umoNlI7cRG", "WPJdIq7cSNxdRCkTdW", "WR8Cv0Le", "AtqWW6nL", "W7lcJSoyyCop", "W7TPW4tdKmkjyHxdT8keWOjNlCoJWQC", "WRdcOCkNWPZdTa", "W5mVFfxdVW", "W6TDW7binW", "WR4UxNPq", "zbDfW7zJ", "WPf6W7uYrG", "WPSPW4VdPCou", "WRhcPKfaW6m", "WRL8WQ3cU8om", "W7hdKSk9qtO", "tmkVF8kqhG", "W7JcVqlcMeq", "rcbjdrC", "bhRdHYVcIW", "bSoqW5K5WP0", "W6lcKSo/W6q", "WR/cT8ocF0u", "d8kUACkbgq", "W41DW6P7zG", "WPNdP8o1DfG", "W6xcMWJcL2u", "W5lcG8keWPxcGSomWRnwFXpcSIa", "egdcNCoodG", "WQpcO0zCWRe", "r1DPW5vO", "j8ovWRX0W40", "bgZcOaldGG", "iIndgaS", "W47cUt3cVJi", "mt1UW6uWACooW60", "qY5vbs4", "WPJcNaxcJ2S", "vuTzW7Kp", "WR5Ig8kZW40", "WQ5OWQFcPCoQ", "s8oBBNdcHa", "gvyaea0", "W4zVECkWW4O", "W4pcTCoEW4ZcMW", "WP1WWQldQ8oz", "W77cUmoPW7u", "EtldLSkmrCkBWRypiwhdQ3i", "bSoVW6noWP4", "W5W6Cu5t", "mteLfw4", "e8k5ymk/fa", "kSoRWR5tW4q", "W4tdOmodW6pdHa", "WRdcGmoaW6JdOW", "mvKYWOSyE8o7WPJcI2BcMcq", "W6FcM8o7a3G", "W5RcOcJcG1u", "W4i8WPmIwq", "WOhdKvvYW5m", "WRaEW5VcSSo7", "WRZcVIJcU8kLW79kiW", "d3hcOCo3lG", "raWbB1u", "WRPyqCoGW6e", "W6ZcK1NcHda", "cmoXWRXaW5m", "EtBdKCkms8kuW6GZdghdGMddGG", "WOqyFmoXW40", "W7VcPSoHo8kJ", "xZ/dG8oBwG", "erzRW784", "BIDiW50D", "AgdcHqtdRq", "WQNdKmoSWRZcLG", "WPVdHCkPWQJdVG", "W5WNW7pcTmoa", "EmoGELBcOG", "W5ldVZNcRZO", "WQVcHCkogCk9", "WO93W5JdRSoi", "WOdcTq8JW7G", "jgJcVSoYnW", "WRv5WQD3zW", "hebACqy", "W4ZdKSoJW5pdJq", "W6ldOY9DW6VcTSobWPP+W61CiG", "uXLaW5ve", "nmoUWR7dQ8oO", "WPFcJCoChLG", "W4/cVCofySkd", "WRWKW7RdS8o7", "W6yOCxTS", "Bv1oW4n5", "DCkMvSoMrq", "dmoLk8ksjSo1qSo4oCk0wCod", "eSoRW5WYWRW", "rfFdImocW5q", "lrKuW4NcGa", "W6VcUSk/zrm", "WQJcL8ogo8kH", "imokWOLOW64", "W7lcOmouWQZdJq", "kSolWPTOW4m", "WPJcPadcQNu", "W60VE8ocW4W", "W4dcNfRdMc0", "WR7cMSoga3G", "uJOnW4ZcOG"];
  return Ln = function() {
    return i;
  }, Ln();
}
function Z(i, o) {
  i = i - 205;
  const t = Ln();
  let e = t[i];
  if (Z.RNyLhk === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    Z.IMmekb = g, Z.ZipyMa = {}, Z.RNyLhk = !0;
  }
  const n = t[-6008 + -1747 * -5 + -2727], r = i + n, a = Z.ZipyMa[r];
  return a ? e = a : (Z.wZTtsg === void 0 && (Z.wZTtsg = !0), e = Z.IMmekb(e, o), Z.ZipyMa[r] = e), e;
}
function vE() {
  function i(I, s, C, x, E) {
    return Z(I - -457, E);
  }
  const o = c("ahWi", 165, 102, 162) + c("bvLa", 216, 286, 245) + i(-67, -145, -181, -100, "!BtG") + c("e*L9", 223, 122, 194) + c("9@QD", 174, 145, 147) + g(942, 885, "z!FV") + t(-614, "aYVq", -633, -675) + a(821, 867, "#wcF", 755, 813) + t(-433, "&HLB", -600, -535) + g(1037, 1048, "mjB@") + a(711, 870, "FS(F", 663, 760) + i(-188, -89, -95, -273, "bvLa") + a(848, 715, "#wcF", 686, 793) + i(-61, -54, -112, 12, "GC5v") + g(881, 947, "I@D1") + t(-448, "Pr#^", -467, -486) + i(-63, -94, -122, -57, "#wcF") + a(627, 745, "g4#D", 712, 724) + t(-708, "!BtG", -518, -634) + t(-672, "6zmm", -608, -705) + c("H(DV", 355, 280, 353) + g(995, 966, "g3Ge") + t(-577, "I@D1", -562, -539) + i(-197, -158, -311, -258, "uwnT") + a(735, 830, "9@QD", 777, 756) + i(-62, -62, -103, 2, "TRNN") + t(-629, "GC5v", -773, -681) + a(830, 909, "W]jB", 737, 850) + t(-526, "M90k", -485, -602) + c("&HLB", 191, 92, 152) + c("8G5b", 241, 112, 213) + i(-113, -29, -172, -31, "H$fA") + g(875, 883, "g3Ge") + a(716, 864, "m7jd", 877, 830) + c("8G5b", 134, 122, 146) + t(-514, "&HLB", -666, -609) + i(-21, -19, -95, -62, "M90k") + g(851, 915, "o)Ql") + c("H$fA", 144, 355, 240) + c("(cMq", 466, 482, 366) + t(-530, "9@QD", -539, -576) + c("[^UT", 408, 388, 329) + i(-147, -31, -78, -199, "TRNN") + g(815, 837, "wC@)") + t(-642, "^(sA", -524, -525) + g(998, 914, "6zmm") + a(892, 773, "wYVD", 780, 779) + c("Pr#^", 235, 321, 266) + i(-152, -146, -231, -208, "[^UT") + t(-619, "[^UT", -465, -509) + g(1052, 990, "ooCV") + g(1061, 978, "3&E(") + c("g4#D", 208, 204, 229) + c("I@D1", 285, 300, 341) + g(925, 985, "U0y4") + t(-512, "bvLa", -514, -482) + i(-168, -249, -176, -206, "9&qa") + c("(cMq", 317, 461, 370) + g(1020, 969, "!*Qk") + g(907, 856, "m7jd") + t(-375, "bvLa", -507, -485) + t(-747, "g4#D", -664, -636) + a(727, 574, "8G5b", 592, 675) + a(683, 624, "&HLB", 671, 735) + i(-176, -230, -124, -199, "(cMq") + i(-43, 45, 50, -144, "6zmm") + c("I@D1", 140, 57, 134) + c("U0y4", 205, 275, 174) + i(-46, 3, -120, -156, "H$fA") + i(-248, -147, -221, -347, "[^UT") + t(-415, "Pr#^", -473, -530) + c("U2&P", 347, 271, 327) + g(919, 819, "U0y4") + c("#wcF", 96, 250, 141) + c("m7jd", 103, 126, 158) + c("g4#D", 309, 166, 197) + g(974, 944, "D$7a") + i(-185, -192, -195, -236, "6zmm") + i(-182, -247, -256, -251, "pbv!") + a(753, 920, "vNax", 754, 859) + g(972, 945, "V%34") + t(-628, "I@D1", -615, -624) + g(833, 868, "mjB@") + t(-599, "g3Ge", -482, -490) + t(-486, "uwnT", -477, -594) + g(811, 828, "g3Ge") + g(847, 901, "kfmI") + g(986, 984, "GC5v") + t(-586, "U2&P", -617, -679) + a(715, 893, "wC@)", 805, 807) + g(1039, 926, "M90k") + i(-121, -69, -191, -239, "[^UT") + g(750, 865, "W]jB") + a(673, 561, "kfmI", 710, 665) + t(-464, "ooCV", -539, -541) + a(732, 700, "TRNN", 721, 743) + c("U2&P", 226, 219, 303) + a(850, 886, "M90k", 831, 865) + i(-201, -275, -316, -263, "wYVD") + a(590, 812, "#wcF", 783, 698) + g(1036, 970, "aYVq") + a(801, 726, "!*Qk", 846, 727) + t(-570, "8G5b", -597, -484) + a(855, 679, "uwnT", 622, 741) + c("H$fA", 197, 134, 148) + t(-656, "V%34", -524, -631) + i(-203, -244, -140, -218, "z!FV") + a(905, 866, "AyZp", 875, 857) + c("uwnT", 231, 317, 282) + a(716, 871, "3&E(", 828, 783) + i(-139, -249, -114, -233, "wYVD") + c("FS(F", 256, 425, 369) + c("D$7a", 280, 341, 367) + g(1011, 918, "9Haq") + a(765, 591, "bvLa", 727, 681) + g(987, 965, "8pKT") + g(1015, 1024, "^(sA") + t(-474, "GC5v", -420, -533) + c("Pr#^", 339, 341, 232) + t(-443, "m7jd", -557, -514) + t(-561, "pbv!", -538, -630) + i(-187, -265, -299, -105, "wC@)") + g(828, 855, "AyZp") + c("uwnT", 84, 151, 168) + t(-493, "o)Ql", -601, -508) + i(-22, -99, -54, 51, "H(DV") + a(765, 895, "I@D1", 909, 819) + i(-47, -4, -79, -106, "ooCV") + a(799, 699, "Rtyl", 636, 750) + g(821, 934, "U2&P") + t(-601, "Fy2R", -511, -583) + c("AyZp", 179, 262, 298) + c("I@D1", 95, 194, 169) + t(-469, "9@QD", -534, -569) + i(-181, -164, -83, -99, "Fy2R") + t(-509, "U2&P", -602, -531) + a(867, 761, "z!FV", 913, 808) + a(732, 720, "9Haq", 628, 694) + t(-512, "TRNN", -598, -619) + g(870, 836, "3&E(") + i(-206, -240, -325, -137, "ooCV") + c("D$7a", 132, 260, 200) + c("D$7a", 327, 233, 212) + i(-48, 5, -134, -68, "*6lv") + i(-89, -89, -143, -74, "W]jB") + t(-656, "bvLa", -670, -706) + c("kfmI", 215, 261, 287) + a(762, 892, "H(DV", 935, 852) + i(-237, -353, -245, -193, "ooCV") + t(-632, "AyZp", -679, -601) + i(-28, 38, 82, 11, "#wcF") + a(853, 680, "M90k", 899, 791) + g(770, 872, "8G5b") + g(951, 907, "8pKT") + t(-615, "8pKT", -685, -591) + a(743, 886, "bvLa", 762, 853) + g(947, 979, "GC5v") + c("H$fA", 393, 202, 317) + a(658, 594, "g4#D", 731, 695) + a(817, 784, "#wcF", 734, 700) + i(-106, -134, -39, -4, "D$7a") + i(-40, -155, -110, 17, "Pr#^") + g(824, 897, "6zmm") + a(853, 734, "GC5v", 895, 841) + c("*6lv", 132, 92, 172) + t(-696, "^(sA", -555, -617) + i(-215, -230, -167, -288, "g3Ge") + g(793, 858, "[^UT") + c("*6lv", 413, 360, 326) + c("#wcF", 339, 144, 246) + a(681, 807, "M90k", 742, 766) + c("o)Ql", 424, 316, 330) + c("AyZp", 240, 181, 291) + t(-596, "kfmI", -498, -550) + g(935, 963, "ubE1") + t(-803, "AyZp", -813, -700) + g(702, 820, "Rtyl") + g(732, 838, "o)Ql") + t(-715, "o)Ql", -567, -663) + g(1053, 995, "*6lv") + g(1017, 1029, "AyZp") + i(-96, -70, -69, -170, "U0y4") + i(-108, -222, -14, -21, "TRNN") + a(745, 692, "AyZp", 616, 704) + i(-51, -75, -108, -73, "vNax") + a(774, 643, "!BtG", 682, 731) + t(-726, "!*Qk", -701, -668) + g(715, 831, "8G5b") + t(-623, "kfmI", -658, -623) + c("ubE1", 268, 259, 163) + c("o)Ql", 89, 186, 176) + a(648, 728, "H(DV", 587, 701) + t(-619, "^(sA", -795, -708) + a(766, 679, "mjB@", 906, 792) + a(754, 729, "kfmI", 726, 661) + t(-623, "ooCV", -654, -680) + t(-628, "#wcF", -645, -628) + g(877, 949, "8pKT") + c("H$fA", 449, 416, 356) + g(1008, 1011, "9&qa");
  function t(I, s, C, x, E) {
    return Z(x - -916, s);
  }
  const e = window[a(727, 843, "ooCV", 884, 829)](o), A = window[i(-70, -136, -51, -131, "vNax")](e), n = EQ(A), r = {};
  function a(I, s, C, x, E) {
    return Z(E - 437, C);
  }
  r[g(928, 938, "8G5b")] = T0, r[c("mjB@", 38, 222, 135)] = pC;
  function g(I, s, C, x, E) {
    return Z(s - 606, C);
  }
  function c(I, s, C, x, E) {
    return Z(x - -71, I);
  }
  return window[i(-131, -172, -110, -74, "wC@)") + "o"][i(-36, 12, 76, -1, "6zmm") + "e"][t(-470, "U2&P", -542, -477) + c("mjB@", 342, 247, 348)](a(898, 765, "&HLB", 668, 787), n, r, !0, [t(-796, "#wcF", -610, -690) + "pt"]);
}
async function FE(i) {
  function o(r, a, g, c, I) {
    return Z(r - 648, c);
  }
  const t = await vE(), e = {};
  function A(r, a, g, c, I) {
    return Z(r - -71, g);
  }
  function n(r, a, g, c, I) {
    return Z(I - -129, c);
  }
  return e[n(104, 110, 264, "aYVq", 206)] = T0, window[n(136, 233, 144, "D$7a", 201) + "o"][o(926, 819, 988, "H(DV") + "e"][A(274, 159, "V%34") + "pt"](e, t, i);
}
(function(i, o) {
  const t = i();
  function e(r, a, g, c, I) {
    return _A(a - 189, g);
  }
  function A(r, a, g, c, I) {
    return _A(g - -602, I);
  }
  function n(r, a, g, c, I) {
    return _A(I - -647, c);
  }
  for (; ; )
    try {
      if (-parseInt(A(-367, -356, -360, -365, "ss8L")) / 1 * (-parseInt(A(-365, -369, -370, -370, "!czw")) / 2) + parseInt(A(-369, -364, -373, -380, "LsC$")) / 3 + parseInt(n(-398, -409, -396, "zt7)", -402)) / 4 + parseInt(A(-373, -363, -372, -364, "ee)x")) / 5 + parseInt(e(430, 425, "0(Fr", 432, 425)) / 6 + parseInt(n(-395, -410, -396, "xrnt", -401)) / 7 + parseInt(A(-369, -363, -363, -354, "3UZe")) / 8 * (-parseInt(n(-421, -408, -409, "xrnt", -413)) / 9) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(On, 531735 + -1 * -54521);
function _A(i, o) {
  i = i - 229;
  const t = On();
  let e = t[i];
  if (_A.ctSGjr === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    _A.HdvPRQ = g, _A.poodqg = {}, _A.ctSGjr = !0;
  }
  const n = t[-17244 + 1437 * 12], r = i + n, a = _A.poodqg[r];
  return a ? e = a : (_A.wDRNlN === void 0 && (_A.wDRNlN = !0), e = _A.HdvPRQ(e, o), _A.poodqg[r] = e), e;
}
function On() {
  const i = ["W5FdVCoZASo7WP7dNSoB", "cgqFzI8Ep34+h8ofz0m", "W5/cHmkJW4j1W7FcR8oeW7xcGaXXW5G", "D05Cq8o1", "W74iW7ebW4BcNYVcLW", "W5ldVmkpfmkxW63dO8oOhmolWOxcNG", "zSkODH9pW7pdK3fifapcUYW", "o8oIcGiCfSoe", "WQaBWQnkW6NcQ8o0W63cQ8omW4GN", "aXhdVbpcK8o4W5S", "ASkSDbHnW7hdLMTZprpcUIi", "W6aWfcm5sSk/W7ZdVmkncmk/WR8", "rSoemfPIWQ0/gfZdTgddQq", "cN/cT0RcKZ/cUSkexdZcJ8kDyW", "E8kSfWvMr8oUWR7cN8opt8kcW48", "vrlcNmozASo3umkaW6FcSLSY", "WOKPfG", "W6KXgYeWs8k5W7JdQ8krkmkaWPm"];
  return On = function() {
    return i;
  }, On();
}
async function ME(i) {
  const { iv: o, key: t, message: e } = await lQ(i), A = await FE(t), n = {};
  n[r(-208, -201, "q%UC")] = A, n.iv = o, n[r(-203, -198, "o!%W") + "ge"] = e;
  function r(a, g, c, I, s) {
    return _A(a - -441, c);
  }
  return n;
}
function TA(i, o, t, e, A) {
  return BA(t - -547, e);
}
(function(i, o) {
  const t = i();
  function e(a, g, c, I, s) {
    return BA(I - -766, g);
  }
  function A(a, g, c, I, s) {
    return BA(s - -936, a);
  }
  function n(a, g, c, I, s) {
    return BA(g - -314, c);
  }
  function r(a, g, c, I, s) {
    return BA(a - 171, I);
  }
  for (; ; )
    try {
      if (parseInt(e(-507, "3^%$", -516, -454, -465)) / 1 * (parseInt(e(-526, "5HS!", -506, -507, -502)) / 2) + parseInt(A("Z]L2", -718, -605, -712, -659)) / 3 + -parseInt(e(-375, "h*cQ", -469, -439, -445)) / 4 + parseInt(e(-413, "5HS!", -389, -397, -377)) / 5 + parseInt(n(-21, 2, "kJwR", -47, -25)) / 6 * (-parseInt(r(442, 494, 480, "8nxu", 393)) / 7) + -parseInt(n(41, 32, "UN3#", 41, -32)) / 8 + parseInt(n(106, 57, "W3*N", 65, 82)) / 9 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Jn, 590876 + -77 * -15848 + -3 * 277042);
function ce(i, o, t, e, A) {
  return BA(t - -901, i);
}
function kA(i, o, t, e, A) {
  return BA(i - -510, e);
}
function Jn() {
  const i = ["WOxcJ1VcSmkWWOeoESo2uNHaeG", "W51RkrFdGW", "W4rmFSkAW5W", "W6X7W4r3WPK", "WRiRq2C5", "W7DYnHFdRq", "W7fkWRhdMq", "WR4nWQNdS8or", "f8oOW4eIW54", "bJpcKCkvW4a", "dhNcImkA", "WRxdPCozWRZdHLxcUmojW6BdRhJdQwa", "AmkJv8o6", "W5ldJXRdRSoR", "W6jFWRS", "E8k2xq", "WRfGxSoiW78", "cwi1WOny", "W54KmXLI", "WRxcNXv4vspcLNi2d8o+W7xcGdS", "u8kqWPmvCa", "W453WRK2WQu", "W6ddK8or", "W6VdOei6fG", "W5VcSMDzgG", "W4RcIGy", "WRjtymkIFq", "WPddSYO", "WQWPqmoUW7y", "Bb3dPXFcNMVdMW", "WRX3vCoDW50", "paJdQa/cNq", "W4vebW", "WQ90rqTW", "W643aSknWPK4W45UxgJdIZZdHwq", "W7tdTHhdSmok", "uZlcPwnb", "W6TOW6jvWO4", "A33cRZlcKG", "zhJcRZ7cLq", "W61DWOS", "eSoOW4SUW68", "WRRdHNZcQIpdHmo2WQroWRhdPCoEbG", "W5tdJWZdPSoW", "WPVdRYeasSk/ahBcObT/eae", "rmkPWRbifa", "W5hdJWBdQSob", "W63cLZRdV1y", "W7b4mrpdUq", "ewtdPCo2wa", "E1LXWO0", "W5tdTbNcJ8kh", "WOv4zLyI", "WPlcLuxcRCo9", "ealcLXK7", "bf7cUdrx", "W6Tbj8o1W4ZcGIZcMH3dPa", "W6TUW45xWRK", "W63dUZ3dJSos", "W5XkC8kzW5q", "WRJdHx/cQK/cRmk5WPvjWPO", "it/cGCk0W70", "W5ddLdhcMCkh", "W6xdN1uOha", "Bu7dH8o9W40", "cCo5lfqm", "W5SKorvt", "eNNcNW", "W4LMvghdSGz0dmoSfWFcU8kn", "W4jTjaldRa", "Avf3", "s0zPASoH", "prPeASoeWODgW4BdLgvOWOpdOa", "WQL8tCk8", "W6HmW5nvWOG", "WP/dIG8VW4e", "uSk7vmo/kq", "DuxcR8kkha", "WRCiW6FcKWxdQSohasKjemoUtq", "W7tdN0i5ba", "p2xcVIfL", "W5WXmW", "hNy/WPbb", "s3hdKCoR", "BgHSWPa4", "lbNdMqNcIq", "WPFcLu/cOCom", "WRfJy8kGwG", "aYRcGamU", "WRLQsXjt", "DmoIWQukWP4", "W5FdO8k/wmod", "pbxdHqNcNa", "tc7cNmk1dq", "WRpdLYVdU8kr", "cw7cOtbd", "t2BdJmoWW6G", "B0iCiSkD", "WQDJrbjJ", "FL8Eia", "W4ddV8kZrq", "b8o3W5rcmSkCW4TeW5NdLL7dTSkQ", "WP7cLu0", "y2aujSkt", "FurUWRmT", "W7T5W5ntWPO", "WRKDE8kXW7C", "sZlcPq", "y3nODSo0", "smomWOVcJq", "WP4LwHJcLa", "W5GKjrf5", "WOBcVCoLd8kxWOS9W6ZcTmkREfKV", "WQO5FsldImoCW4VdNae", "W4lcNrTJW44", "WRG0r2eO", "W5hdV8kZr8ox", "W6LKFmolW5HRWRu", "bSoOW4SX", "rSkSWOaoyG", "WR4wug8O", "WO/cHvhdK8ogW4H1s8o+", "tu5QWP4H", "W6bkWRVdIKe", "Dmk1WOCCyq", "WRWaECkSW50", "WPldL0a+WR1Sa3ddPKmEWPTl", "WR8CDCkUW7W"];
  return Jn = function() {
    return i;
  }, Jn();
}
function PA(i, o, t, e, A) {
  return BA(o - 647, e);
}
function BA(i, o) {
  i = i - (9 * -743 + 8575 + -1 * 1643);
  const t = Jn();
  let e = t[i];
  if (BA.vCivyA === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    BA.DunUfp = g, BA.SGLArh = {}, BA.vCivyA = !0;
  }
  const n = t[6576 + -1 * -4521 + -11097 * 1], r = i + n, a = BA.SGLArh[r];
  return a ? e = a : (BA.tCZrMz === void 0 && (BA.tCZrMz = !0), e = BA.DunUfp(e, o), BA.SGLArh[r] = e), e;
}
function qA(i, o, t, e, A) {
  return BA(i - 753, A);
}
class WE {
  async [TA(-131, -158, -177, "h*cQ") + ce("wuvw", -586, -594) + TA(-281, -325, -293, "0&tE") + qA(1006, 1021, 1020, 1018, "3oX6") + ce("h[hQ", -581, -621)](o) {
    const { Image: t } = $e;
    function e(x, E, B, l, u) {
      return qA(u - -1668, E - 65, B - 367, l - 66, B);
    }
    const A = await o[I(1197, 1211, "UN3#", 1240, 1183) + C("Jy5h", 870, 964, 913) + "r"](), n = new Uint8Array(A), r = {};
    function a(x, E, B, l, u) {
      return ce(B, E - 248, E - 363);
    }
    r[e(-622, -561, "0&tE", -625, -621)] = n;
    function g(x, E, B, l, u) {
      return TA(x - 279, E - 386, E - 558, B);
    }
    const c = t[a(-235, -175, "hmkX") + "y"](r);
    function I(x, E, B, l, u) {
      return TA(x - 259, E - 393, u - 1468, B);
    }
    if (c)
      throw C("D)19", 1012, 898, 955) !== g(227, 268, "h*cQ") ? y[g(302, 256, "h*cQ") + e(-555, -580, "h1@c", -600, -576)](c) : _0x95a482[g(282, 276, "h[hQ") + e(-664, -646, "N*in", -643, -643)](_0x11437e);
    const s = {};
    function C(x, E, B, l, u) {
      return PA(x - 72, l - -57, B - 107, x);
    }
    return s[a(-325, -291, "3^%$")] = n, t[g(356, 346, "DliD") + "e"](s);
  }
  [TA(-243, -283, -225, "Z]L2") + ce("nnr^", -649, -628) + kA(-155, -122, -183, "OCyl") + kA(-221, -267, -179, "rlv%") + TA(-230, -300, -286, "28sS") + kA(-173, -188, -168, "9[$c")](o) {
    function t(g, c, I, s, C) {
      return PA(g - 35, s - 222, I - 428, I);
    }
    function e(g, c, I, s, C) {
      return kA(C - -280, c - 480, I - 473, g);
    }
    function A(g, c, I, s, C) {
      return PA(g - 405, g - 69, I - 396, c);
    }
    const { VideoStream: n } = $e, r = n[A(1020, "nnr^", 980) + "y"](o);
    function a(g, c, I, s, C) {
      return kA(s - 76, c - 14, I - 453, C);
    }
    if (r)
      throw A(979, "HeoX", 944) !== e("0&tE", -530, -485, -452, -511) ? y[a(-182, -164, -220, -178, "nnr^") + t(1112, 1170, "HeoX", 1151)](r) : _0x56f21d[A(1076, "N)x9", 1128) + t(1242, 1144, "Z]L2", 1202)](_0x5d0fdc);
    return n[a(-128, -136, -110, -170, "X8XT") + "e"](o);
  }
  async [kA(-153, -141, -106, "kJwR") + PA(871, 920, 879, "nnr^") + ce("8nxu", -663, -599) + ce("5HS!", -597, -655) + TA(-167, -261, -215, "3^%$") + "e"](o) {
    const { v4: { Metadata: t } } = $e, e = { ...o };
    e[c("N)x9", -490, -430) + c("E[9E", -426, -369)] = $e[n(331, 270, 260, 323, "3^%$") + A(-276, -256, -359, -312, "QG&#")][n(417, 414, 414, 414, "3^%$")];
    function A(s, C, x, E, B) {
      return qA(E - -1419, C - 326, x - 265, E - 38, B);
    }
    function n(s, C, x, E, B) {
      return qA(E - -698, C - 62, x - 37, E - 41, B);
    }
    e[A(-321, -430, -428, -370, "8nxu") + A(-404, -396, -317, -369, "N)x9") + a("h*cQ", -603, -642, -598, -619) + "n"] = a("Uf^J", -743, -771, -751, -711);
    function r(s, C, x, E, B) {
      return qA(C - 108, C - 393, x - 444, E - 355, E);
    }
    function a(s, C, x, E, B) {
      return kA(B - -449, C - 12, x - 67, s);
    }
    const g = e;
    function c(s, C, x, E, B) {
      return kA(x - -208, C - 414, x - 211, s);
    }
    const I = t[c("3mpR", -440, -434) + "y"](g);
    if (I)
      throw a("3El$", -651, -550, -596, -587) !== c("h*cQ", -302, -356) ? y[c("#U#I", -445, -405) + a("geoS", -632, -703, -662, -651)](I) : _0x431054[r(1250, 1229, 1182, "DliD") + n(351, 250, 250, 304, "9QmX")](_0x338a9b);
    return t[A(-268, -369, -264, -309, "kJwR") + "e"](g);
  }
  async [kA(-153, -154, -212, "kJwR") + kA(-163, -196, -165, "Jy5h") + ce("UN3#", -584, -551) + kA(-169, -135, -165, "Z]L2")](o) {
    function t(E, B, l, u, h) {
      return PA(E - 171, h - -207, l - 282, u);
    }
    const { Content: e } = $e;
    function A(E, B, l, u, h) {
      return kA(u - 424, B - 356, l - 392, E);
    }
    function n(E, B, l, u, h) {
      return qA(h - -1373, B - 200, l - 17, u - 125, u);
    }
    function r(E, B, l, u, h) {
      return qA(h - -778, B - 493, l - 251, u - 452, E);
    }
    const { iv: a, key: g, message: c } = await ME(o), I = { token: new Uint8Array(g), iv: a, schemaVersion: hC, bytes: new Uint8Array(c) }, s = e[r("W3*N", 375, 305, 288, 326) + "y"](I);
    function C(E, B, l, u, h) {
      return TA(E - 357, B - 136, h - 308, l);
    }
    if (s) {
      if (n(-319, -359, -348, "QG&#", -327) !== A("3^%$", 205, 295, 242)) throw y[r("S2gS", 359, 326, 338, 299) + r("23Lk", 332, 212, 263, 274)](s);
      {
        const { v4: { Metadata: E } } = _0x102732, B = { ..._0x108640 };
        B[r("Jy5h", 340, 332, 315, 293) + A("wuvw", 138, 131, 183)] = _0x2675d1[C(135, 47, "Eyqe", 32, 90) + t(773, 770, 727, "TafG", 741)][t(792, 852, 828, "UkTt", 807)], B[t(696, 713, 764, "S2gS", 745) + n(-337, -244, -255, "kJwR", -277) + t(813, 739, 778, "h[hQ", 750) + "n"] = r("h[hQ", 259, 225, 241, 226);
        const l = B, u = E[C(8, -14, "3oX6", -4, 48) + "y"](l);
        if (u) throw _0x54da26[r("TafG", 226, 196, 248, 260) + t(678, 704, 686, "8nxu", 738)](u);
        return E[r("l%#f", 240, 235, 234, 256) + "e"](l);
      }
    }
    const x = e[r("TafG", 284, 191, 181, 227) + "e"](I);
    return e[n(-279, -335, -296, "S2gS", -294) + "e"](x)[t(679, 729, 795, "3mpR", 731) + "h"]();
  }
  [ce("#SSX", -636, -587) + PA(956, 933, 893, "ch]f") + PA(974, 917, 861, "wuvw") + "ge"](o) {
    function t(I, s, C, x, E) {
      return PA(I - 34, E - -1088, C - 279, x);
    }
    const { Blob: e } = $e.v4, A = e[n(-316, -296, -349, "HeoX") + "y"](o);
    function n(I, s, C, x, E) {
      return qA(s - -1344, s - 431, C - 451, x - 168, x);
    }
    function r(I, s, C, x, E) {
      return PA(I - 402, x - 68, C - 176, C);
    }
    function a(I, s, C, x, E) {
      return PA(I - 299, C - -1189, C - 385, x);
    }
    if (A)
      throw c(-642, -718, -722, "Eyqe", -682) !== n(-337, -316, -358, "h1@c") ? _0x196b52[r(1010, 1007, "ch]f", 1068) + n(-320, -274, -239, "DliD")](_0x42367a) : y[a(-274, -252, -286, "nnr^") + r(970, 1058, "HeoX", 997)](A);
    const g = e[t(-130, -170, -87, "Z]L2", -119) + "e"](o);
    function c(I, s, C, x, E) {
      return TA(I - 450, s - 1, E - -393, x);
    }
    return e[n(-252, -301, -295, "23Lk") + "e"](g)[a(-172, -238, -176, "D)19") + "h"]();
  }
  async [ce("UN3#", -670, -623) + kA(-176, -141, -166, "RTyS") + qA(1097, 1035, 1105, 1104, "l%#f") + TA(-207, -263, -226, "9QmX") + "ls"](o, t, e) {
    function A(I, s, C, x, E) {
      return kA(x - 1032, s - 216, C - 402, s);
    }
    const { architecture: n, fullVersionList: r, model: a, platform: g, platformVersion: c } = t ?? {};
    return { userAgent: o, architecture: n, platform: g, model: a, platformVersion: c, browserVersions: r?.[A(826, "9[$c", 745, 788)](({ brand: I, version: s }) => ({ name: I, version: s })), installationId: e };
  }
  async [TA(-225, -181, -202, "h[hQ") + qA(1036, 978, 1068, 1094, "9QmX") + qA(1089, 1135, 1026, 1052, "O5EB") + qA(1083, 1147, 1120, 1029, "nnr^") + TA(-269, -236, -273, "kqao") + PA(950, 907, 943, "O5EB") + PA(1001, 956, 962, "A509") + "on"](o) {
    const t = await this[r(85, 86, 26, "#SSX", 61) + r(55, 23, 74, "#SSX", 66) + r(10, 20, 68, "((5[", 23) + a(-451, -449, -435, -459, "28sS") + n("h1@c", -152, -134, -98)](o[A("23Lk", 814, 746, 807) + A("Uf^J", 820, 842, 784) + "ge"]), e = {};
    function A(g, c, I, s, C) {
      return PA(g - 124, s - -155, I - 429, g);
    }
    e[r(125, 59, 50, "#SSX", 78)] = t;
    function n(g, c, I, s, C) {
      return ce(g, c - 361, s - 461);
    }
    function r(g, c, I, s, C) {
      return kA(C - 257, c - 349, I - 99, s);
    }
    function a(g, c, I, s, C) {
      return TA(g - 147, c - 335, g - -154, C);
    }
    return e[A("9QmX", 771, 748, 795) + r(126, 55, 152, "nnr^", 111) + r(-9, 29, 0, "hmkX", 53)] = o[n("UkTt", -58, -51, -92) + n("3mpR", -34, -88, -82) + n("#U#I", -55, -37, -88)], e;
  }
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return nA(s - 597, g);
  }
  function e(g, c, I, s, C) {
    return nA(C - 467, c);
  }
  function A(g, c, I, s, C) {
    return nA(I - 319, C);
  }
  function n(g, c, I, s, C) {
    return nA(I - 922, s);
  }
  function r(g, c, I, s, C) {
    return nA(C - -705, s);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(A(778, 694, 694, 652, "gqsB")) / 1 * (parseInt(r(-156, -168, -256, "cD]i", -227)) / 2) + parseInt(e(860, "b]Xm", 834, 907, 869)) / 3 * (-parseInt(A(690, 704, 645, 624, "vju(")) / 4) + -parseInt(n(1345, 1392, 1336, "baMZ", 1400)) / 5 + parseInt(r(-317, -445, -412, "3JyQ", -371)) / 6 * (parseInt(t("&9Eg", 1081, 1044, 1057, 1018)) / 7) + parseInt(t("rlCF", 948, 850, 933, 975)) / 8 * (-parseInt(t("9Yc8", 1064, 1080, 1027, 1045)) / 9) + parseInt(t("KSf#", 1050, 967, 1028, 999)) / 10 + parseInt(A(848, 751, 776, 805, "It8T")) / 11 === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Un, 1 * 8859 + -431436 + -7 * -95472);
function yo(i, o, t, e, A) {
  return nA(i - 152, e);
}
function nA(i, o) {
  i = i - (-6992 + -3645 * -2);
  const t = Un();
  let e = t[i];
  if (nA.HnnzoO === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let x = 0, E, B, l = 0; B = c.charAt(l++); ~B && (E = x % 4 ? E * 64 + B : B, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        B = I.indexOf(B);
      for (let x = 0, E = s.length; x < E; x++)
        C += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, x, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, x = s[B], s[B] = s[C], s[C] = x;
      B = 0, C = 0;
      for (let l = 0; l < c.length; l++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, x = s[B], s[B] = s[C], s[C] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    nA.LaznGD = g, nA.znhWOw = {}, nA.HnnzoO = !0;
  }
  const n = t[-6229 + -23 * -257 + 318], r = i + n, a = nA.znhWOw[r];
  return a ? e = a : (nA.ZzaiiL === void 0 && (nA.ZzaiiL = !0), e = nA.LaznGD(e, o), nA.znhWOw[r] = e), e;
}
function Un() {
  const i = ["imopEWir", "fmknWRLflG", "hCkdW4NdQCkz", "uLxcK07dMG", "W4ZdJmoLpmo3", "W4xcH8kBiZa", "vs3cGNeDW6ZcJSog", "iw/dL8okWPa8W4VdQCkMW6K8W7HU", "ESkJn8ozcW", "cYHKzSk4", "W4S2kSoVmG", "W5bQWQldUue", "W4e8W7dcNtm", "WOrpmbdcMa", "vXtcKe7dPa", "x1VcIq/dTa", "cbn0iWa", "gmoSatCQ", "W4nSWO/dP8kj", "o2fyW4ZdHa", "zCkVlG", "irLTnaO", "hKKjWPdcGa", "vuBcGK7dOW", "W48nWO0", "WQFdTCkGy2G", "dmoAgCkEnq", "nSoNBqil", "tbFcP8k1W7u", "W6iQE1rn", "W4m3W5dcKZW", "z8kWo3b1", "o8oPW54UAW", "WPJdTCoWWOnXwCkuc8oxiulcH1NdHq", "W4BcSCoJW5CT", "WRpcNW0HW4e", "z8kGW7SWexexW6DDW5m", "W4ddM8kGWOVdOW", "WQhdTmk2y3S", "W5uFWOddJuq", "bSkVW5ldSW8", "WRddSSk3z1G", "WPNdO3BcJmkV", "exVcQG", "mSoTW54UqG", "Dxe4", "hmojdsiR", "jNldLSoOW4q", "v8kVn31K", "W481W4e", "ihdcUKig", "FCkHf8kAW78", "W53cRmkSW58q", "iNVdHW", "W7ldQSk8AxRdOCor", "hb1LFmkG", "W5ZdUmkQWQBdLG", "WOmeWOa", "z8k2o3vi", "WOStWPKcWPu", "DCoql8oiW4O", "eatcKt7dVG", "aXLXBmk/", "pNbn", "zWvGW6ddMrtcT2KYW5O", "qwNcKwtdVG", "W4HiWPJdPSkj", "ghGdWP/cGa", "W47dT1JdLmkX", "W4CiWRqjmW", "CJBdHSkEW5G", "WQNcTmkLvSkC", "g8orW4JdQCkz", "o0FdL8odWQe", "iCkjWPBcGxC", "j8kfWRLmnW", "WQZdQSkXkcO", "jq5J", "W5e6lCo0bW", "pSoVW48cqW", "isPWkrO", "cSoxaZSi", "WQFcVmkxtmkC", "orfIyCkC", "WQ3dO8kKpsC", "WPbpW53dSKyDW5BcV8k9", "W4yZW5FcMJ0", "cXT5E8kO", "jxpdL8olW4u", "EJtcLCkpW4e", "W4adWQHjW7S", "W5dcVSkcnYu", "b34QeCkjWPj1kWVdJsddQ8kC", "sNZdIg3dTCoVWPTlzSkx", "W4CFWO4fnq", "WPlcSmkXBCkMW7PRo33dS8oBW5/dPG", "W4O9WR55W6C", "aConcCklmW", "WQ/dKmk5ocy", "c8kZvSk4bW", "jCkTWOe", "W5D/WQZdReK", "W7tdS8kD", "mmo4mSomW5K", "eIZcJa", "u8kmvmosC8kfu1C3bWS", "eb7cIc3dVa", "iSovWOZcSmkq", "lmoVEWiw", "iCk5WPFcH2G", "W4NcLSkimZe", "bxJcVG", "WPlcSgBcJmk4", "xSoJg8oTuI7dLMjGb8oMatK", "oKLjW5RdLa", "pxKXWQBdLa", "l3zjW5NdHG", "ydFcJ8kxW4u", "W4fpWQldPvG", "CCoTpSojW5K", "fZDlcIS", "W4D+WQldU1W", "v0dcHG", "W599WPNdVmkr", "WRDRfCooixVdHKK", "kCoXWOBcP8kW", "WQVdTmkSDNu", "rIDZtSoB", "f8onW6tdRa", "jSoWEXaw", "W4a0WRP+W7u", "jmoLEW", "imovWOG", "WOCtWPeNWOq", "zZJcHmkfW7xcRSkSdCoikCks", "W4hcUSkkjte", "BCkWo8ouda", "gHf5zW", "u2tcLuddOW", "oLrEW4BdKW", "W7CYrfqE", "WQ3cO8kxxSkC", "ahdcUKym", "WPraW6G4WQDJWOJcH17dJLJcTmo7WQe", "CJBcQCkvW6m", "aYDJsCoyW5Kb", "W5RdOf8", "vfZcH0ldPW", "cJXZFCkP", "gI7cKY3dVq", "txJdJw7cQCk3W69ksmkXWRtcSmo9", "cHLIAmoS", "W6C+kq", "zSo4omovW40", "Cc7cG8kFW6K", "WRj+bgbUW7XyW70W", "W5bLWQldPx4", "WQL4acxcVG", "gGdcMsVdUa", "umkcWQjqqW", "dsJcRdpdUa", "W7hcTCoOzhC/qSoXp8oOfW", "WQ/dQmkemYG", "W5unWO5epa", "y8o4oCopW4i", "b2FcQ0iB", "v8kLfSkpW4a", "w1xcGeRdPa", "n2vFW4hdGG", "WR3cOSktwmkn", "jSoXWQTS", "nGHTna", "W4uYWORdL3m", "sSkxWP3cU8oAyCoQbSkte8kZjmol", "ffyjWOlcGa", "uNdcGLVdSG", "gmo6mq", "WRP4adFcUq", "w8kLeCkgW6G", "W4/cOJpdN8o9W7y3nKK+WRi", "WPbCW4PDjmo3WOddVSoOyG", "W4JdQ0NdUmkG", "ywCTWP3cJa"];
  return Un = function() {
    return i;
  }, Un();
}
function Do(i, o, t, e, A) {
  return nA(e - 743, o);
}
function Mi(i, o, t, e, A) {
  return nA(t - 569, e);
}
function ve(i, o, t, e, A) {
  return nA(o - 953, t);
}
function qe(i, o, t, e, A) {
  return nA(o - -254, A);
}
class LE extends WE {
  async [qe(190, 120, 111, 142, "M53c") + qe(190, 122, 31, 186, "KW9i") + ve(1335, 1294, "DBxp")]({ installationId: o, onCaptureData: t, sessionToken: e, video: A }) {
    function n(B, l, u, h, p) {
      return qe(B - 473, p - 1018, u - 15, h - 432, u);
    }
    const r = t[c(115, 108, "PA!8", 147, 119)](M[c(214, 188, "gH&]", 138, 213) + "AL"]), a = t[c(309, 240, "jHhZ", 220, 245)](M[I(-328, -349, -271, -263, "PA!8")]) ?? t[E(29, -29, 11, 80, "M53c")](M[c(121, 149, "0PNd", 88, 137) + c(206, 229, "KSf#", 210, 228) + "AL"]);
    if (!r) throw new y(E(206, 232, 252, 159, "A5!D") + E(42, 42, 43, 56, "KSf#") + C(480, 508, 412, 463, "gH&]") + n(1175, 1160, ")fmJ", 1138, 1203) + C(514, 512, 406, 474, "KW9i") + I(-300, -384, -436, -341, "baMZ") + c(183, 183, ")fmJ", 276, 214) + n(1107, 1180, "Z2c^", 1175, 1164) + I(-410, -481, -547, -395, "Bw%d"));
    if (!a) throw new y(I(-366, -338, -393, -351, ")vmp") + C(298, 406, 436, 389, "PxiW") + I(-478, -460, -385, -502, "DBxp") + I(-375, -457, -385, -491, "86F4") + I(-356, -429, -515, -449, "dOs&") + I(-379, -418, -333, -414, "2%&M") + C(411, 437, 488, 449, "zooJ") + C(437, 416, 553, 503, "It8T") + I(-295, -343, -268, -315, "9Yc8"));
    const g = {};
    g[n(1015, 1164, "KSf#", 1158, 1094) + C(437, 324, 311, 362, "b]Xm") + E(100, 60, 127, 66, "baMZ")] = o, g[E(181, 144, 180, 268, "^Ai1") + E(116, 204, 51, 26, "KSf#") + I(-479, -450, -506, -449, "PxiW") + C(449, 411, 413, 416, "j8rQ")] = r, g[C(446, 409, 368, 413, "F7KB") + c(239, 177, "PA!8", 208, 256) + n(1224, 1165, "cD]i", 1294, 1229) + C(393, 509, 340, 418, "9K2i")] = a, g[n(1146, 1083, "PxiW", 1142, 1169) + E(167, 209, 157, 105, "7k3P") + "en"] = e;
    function c(B, l, u, h, p) {
      return qe(B - 363, p - 30, u - 125, h - 74, u);
    }
    function I(B, l, u, h, p) {
      return qe(B - 99, l - -556, u - 104, h - 477, p);
    }
    const s = await this[n(1205, 1166, "Fz7i", 1153, 1146) + c(91, 47, "PxiW", -8, 77) + c(181, 207, "Z2c^", 138, 201) + c(224, 226, "86F4", 332, 242) + "e"](g);
    function C(B, l, u, h, p) {
      return ve(B - 11, h - -908, p);
    }
    const x = await this[n(1157, 1216, "9Yc8", 1183, 1170) + n(1058, 1081, "CPA^", 1088, 1123) + C(487, 589, 518, 516, "Bw%d") + c(110, 212, "Fz7i", 264, 186)]({ metadata: s, neutralExpressionFaceImage: await Wn(r[E(95, 83, 143, 120, "%Sh0") + E(63, 91, 105, 48, "KW9i") + "e"]), smileExpressionFaceImage: await Wn(a[c(231, 209, "2%&M", 177, 255) + E(172, 201, 112, 139, "R(*v") + "e"]), video: A });
    function E(B, l, u, h, p) {
      return qe(B - 83, B - -15, u - 301, h - 171, p);
    }
    return this[E(69, -5, 89, 138, "^Ai1") + E(38, 44, 66, -5, "%Sh0") + n(1171, 1064, "j8rQ", 1188, 1101) + n(1262, 1291, "7k3P", 1171, 1237)](x);
  }
  async [ve(1352, 1402, "cD]i") + yo(460, 403, 541, "#gfa") + ve(1428, 1375, "BgEb") + Do(1114, "jHhZ", 1133, 1166)]({ metadata: o, neutralExpressionFaceImage: t, smileExpressionFaceImage: e, video: A }) {
    function n(h, p, m, k, D) {
      return Mi(h - 31, p - 12, D - -1152, h);
    }
    const { SmileLivenessContent: r } = $e.v4, a = await this[s(173, 36, 112, ")fmJ") + u(-513, -551, -600, ")fmJ") + n("3JyQ", -322, -300, -307, -281) + s(-25, 77, 20, "4GLN") + I(417, 441, "Bw%d", 343, 408)](t), g = await this[u(-583, -528, -663, "BgEb") + s(-5, -34, -14, "0PNd") + I(329, 296, "rlCF", 372, 359) + u(-468, -386, -498, "!aBi") + u(-520, -609, -585, "!aBi")](e), c = await this[u(-522, -510, -446, "!aBi") + n("nqc1", -153, -242, -124, -195) + l("gqsB", -683, -642) + s(125, 32, 92, ")fmJ") + n("zooJ", -300, -266, -221, -248) + "e"](o);
    function I(h, p, m, k, D) {
      return ve(h - 377, D - -1022, m);
    }
    function s(h, p, m, k, D) {
      return yo(m - -487, p - 325, m - 326, k);
    }
    const C = { neutralExpressionFaceImage: a, smileExpressionFaceImage: g, metadata: c, video: { streamH264: A ? this[s(67, 66, 120, ")vmp") + n("2%&M", -187, -157, -78, -150) + n("b]Xm", -170, -217, -316, -244) + s(92, 24, 12, "3JyQ") + n("dOs&", -220, -73, -66, -130) + s(85, 19, 76, "&9Eg")](A) : void 0 } }, x = r[s(145, 113, 59, "PxiW") + "y"](C);
    if (x) throw y[s(-15, -68, -13, "R(*v") + n("0PNd", -104, -245, -184, -171)](x);
    const E = r[I(447, 380, "#gfa", 389, 377) + "e"](C), B = {};
    function l(h, p, m, k, D) {
      return Do(h - 377, h, m - 184, m - -1699);
    }
    B[l("KSf#", -566, -598) + l("0PNd", -550, -516) + n("j8rQ", -208, -163, -183, -252) + n("%Sh0", -156, -96, -65, -141)] = E;
    function u(h, p, m, k, D) {
      return yo(h - -1044, p - 79, m - 494, k);
    }
    return this[s(13, 69, 42, "@$b&") + u(-428, -342, -375, "H%!E") + s(67, 111, 99, "EQFu") + "ge"](B);
  }
  async [ve(1267, 1351, "gH&]") + qe(177, 145, 117, 156, "3JyQ") + ve(1274, 1360, "A5!D") + Mi(1045, 1026, 1035, "86F4") + "e"]({ installationId: o, neutralOnCaptureData: t, sessionToken: e, smileOnCaptureData: A }) {
    const n = [...t[p(1379, 1473, 1414, 1384, "SqFh") + p(1165, 1164, 1144, 1234, "0PNd")][I(1411, "A5!D", 1409) + p(1350, 1383, 1313, 1305, "2%&M") + s(984, "9K2i", 1063, 1041, 982) + s(1055, ")fmJ", 1034, 1129, 1042) + p(1146, 1246, 1243, 1235, "EQFu") + m(906, 859, 913, 974, "!aBi") + s(922, "9Yc8", 917, 1008, 986)], ...A[s(982, "b]Xm", 939, 1025, 959) + p(1260, 1218, 1227, 1279, ")fmJ")][p(1277, 1261, 1358, 1325, "4GLN") + I(1392, "vju(", 1403) + s(1099, "KSf#", 967, 1099, 1029) + s(1016, "KW9i", 1006, 1044, 985) + p(1319, 1226, 1213, 1232, "Z2c^") + m(956, 865, 887, 799, "Fz7i") + p(1317, 1306, 1385, 1309, "EQFu")]], r = [...t[m(980, 1106, 1018, 1024, "7k3P") + I(1335, "@4e#", 1407)][p(1208, 1219, 1293, 1299, "9Yc8") + p(1357, 1342, 1409, 1379, "vju(") + m(943, 1077, 1009, 919, "0PNd")][p(1411, 1293, 1317, 1364, "zooJ")](({ detectedObject: D }) => D), ...A[I(1379, "2n!@", 1449) + a("4GLN", 874)][m(903, 980, 904, 863, "#zGN") + p(1227, 1258, 1238, 1313, "CPA^") + m(918, 897, 954, 996, "3JyQ")][m(852, 889, 909, 825, "3JyQ")](({ detectedObject: D }) => D)];
    function a(D, w, L, _, rA) {
      return ve(D - 445, w - -383, D);
    }
    const g = Os(), c = await yQ();
    function I(D, w, L, _, rA) {
      return yo(L - 838, w - 254, L - 182, w);
    }
    function s(D, w, L, _, rA) {
      return Do(D - 209, w, L - 191, rA - -109);
    }
    const C = await this[s(915, "4GLN", 975, 1074, 991) + s(1070, "3JyQ", 1088, 1017, 1035) + m(1010, 914, 999, 995, "CPA^") + s(1108, "9Yc8", 1124, 1149, 1108) + "ls"](g, c, o), { cameraProperties: x, croppedImageWithPosition: E } = t[a("2n!@", 1029) + p(1140, 1134, 1135, 1220, "4GLN")], B = await this[s(902, "baMZ", 1001, 888, 947) + p(1307, 1208, 1176, 1231, "DBxp") + m(881, 942, 870, 844, "nqc1") + s(1021, "SqFh", 878, 1e3, 954) + m(900, 863, 906, 822, "CPA^") + m(809, 909, 888, 850, "2%&M") + a("cD]i", 937) + "on"](E), l = { ...x };
    l[I(1284, "CPA^", 1352) + m(839, 838, 874, 889, "zooJ") + p(1289, 1271, 1311, 1228, "Fz7i") + I(1448, "9K2i", 1356) + m(977, 896, 942, 1013, "2%&M")] = B, l[a("R(*v", 1040) + a("M53c", 870) + p(1427, 1266, 1346, 1348, "@$b&")] = C, l[s(1047, "7k3P", 996, 972, 961) + s(1080, ")fmJ", 961, 1046, 1050) + I(1253, ")vmp", 1289) + a("2%&M", 873) + a("Z2c^", 886) + m(945, 908, 979, 905, "#gfa") + a(")vmp", 1014)] = n, l[m(988, 1040, 1007, 1068, "4GLN") + a("It8T", 1046) + p(1236, 1309, 1270, 1244, "2%&M")] = r;
    const u = l, h = {};
    h[m(965, 929, 1015, 1094, "!aBi") + I(1430, "b]Xm", 1393) + "en"] = e;
    function p(D, w, L, _, rA) {
      return Do(D - 435, rA, L - 40, _ - 173);
    }
    h[s(957, "BgEb", 966, 979, 1021)] = u;
    function m(D, w, L, _, rA) {
      return Mi(D - 257, w - 334, L - -5, rA);
    }
    const k = h;
    return this[s(1009, "M53c", 1089, 1092, 1008) + I(1386, "4GLN", 1370) + m(952, 967, 920, 862, "#LTw") + I(1401, "SqFh", 1446) + s(1185, "cD]i", 1035, 1059, 1096) + "e"](k);
  }
}
class OE {
  timeoutId;
  dispatcher;
  constructor(o) {
    this.dispatcher = o;
  }
  start(o = Dx) {
    this.clear(), this.timeoutId = window.setTimeout(() => {
      this.dispatcher.dispatchTimedCaptureExecuted(), this.timeoutId = void 0;
    }, o);
  }
  clear() {
    this.timeoutId !== void 0 && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
  }
  isActive() {
    return this.timeoutId !== void 0;
  }
}
function jc(i, o) {
  const t = NA(o);
  z(() => {
    t.current = o;
  }, [o]), z(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function JE(i, o) {
  const { handleAppStateChange: t } = RA(), e = xe((A) => {
    if (!A.detail) return;
    const { content: n, resultData: r } = A.detail;
    t(U.COMPLETE), o(r, n);
  }, [o, t]);
  jc(i, e);
}
function UE(i) {
  return i !== null && typeof i == "object" && "neutralPhaseImageWithMetadata" in i && "smilePhaseImageWithMetadata" in i;
}
function YE() {
  const { onComplete: i } = nc(), { handleError: o } = RA();
  function t(e, A) {
    try {
      if (!UE(e)) throw new y("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (n) {
      n instanceof y && o(n);
    }
  }
  JE(Gn.ON_COMPLETE, t);
}
function TE() {
  const { cameraService: i } = gt(), { assetsDirectoryPath: o, sessionToken: t } = nc(), { transactionCounting: e } = K0(), { analytics: A } = $I(), { phaseThresholds: n } = ic(), { handleAppStateChangeWithTransitionCheck: r, handleError: a } = RA(), { accelerationSignal: g } = gx(), [c, I] = iA();
  YE(), z(() => {
    let C;
    async function x() {
      if (!i) return;
      const E = wc.getWorkerPath(kx, o), B = {};
      B.type = "module";
      const l = new Worker(new URL(E, import.meta.url), B), u = ec(l);
      C = await new u();
      const h = new dE(), p = new Nx(qs), m = new LE(), k = new rx(), D = new Rx(), w = new OE(p), L = new bx().setAssetsDirectoryPath(o).setCameraService(i).setDetector(C).setDetectionFactory(h).setDispatcher(p).setProtobuf(m).setInstallationId(k).setAnalytics(A).setTransactionCounting(e).setSessionToken(t).setPhaseThresholds(n).setMedianScore(D).setTimedCapture(w).setAccelerationSignal(g).build();
      try {
        I(L), r(U.RUNNING);
      } catch (_) {
        if (_ instanceof Error) {
          a(y.fromError(_));
          return;
        }
      }
    }
    return x(), () => {
      r(U.WAITING), C && C[Zs]();
    };
  }, [A, o, i, r, a, t, e, n, g]);
  const s = {};
  return s.controller = c, s;
}
function PE({ children: i }) {
  const { controller: o } = TE();
  return /* @__PURE__ */ b(ix, { controller: o, children: i });
}
function _E({ initAppState: i, onError: o }) {
  const [t, e] = iA(i), [A, n] = iA(), [r, a] = iA(!1), g = bt.Lower, c = NA(o);
  z(() => {
    c.current = o;
  }, [o]);
  const I = {};
  return I.redfin = g, I.appState = t, I.setAppState = e, I.error = A, I.setError = n, I.isCameraReady = r, I.setIsCameraReady = a, I.onErrorRef = c, I;
}
function _g(i, o) {
  st.getInstance().dispatchCustomEventOnChange(i, o);
}
function HE(i, o) {
  st.getInstance().dispatchCustomEventOnChange(i, o);
}
function KE(i, o) {
  const t = {};
  t.size = o;
  const e = t;
  st.getInstance().dispatchCustomEventOnChange(i, e);
}
function jE({
  onError: i
}) {
  const { appState: o, redfin: t, error: e, isCameraReady: A, onErrorRef: n, setAppState: r, setError: a, setIsCameraReady: g } = _E({
    initAppState: U.LOADING,
    onError: i
  }), c = xe(
    (C) => {
      _g(Ee.STATE_CHANGED, { appState: U.ERROR, error: C }), g(!1), n.current(C), a(C), r(U.ERROR);
    },
    [g, n, a, r]
  ), I = xe(
    (C) => {
      r((x) => {
        const E = typeof C == "function" ? C(x) : C;
        return _g(Ee.STATE_CHANGED, { appState: E }), E;
      });
    },
    [r]
  ), s = xe(
    (C) => {
      I((x) => x === U.COMPLETE || x === U.LOADING && C !== U.RUNNING ? x : C);
    },
    [I]
  );
  return {
    redfin: t,
    appState: o,
    isCameraReady: A,
    setIsCameraReady: g,
    handleAppStateChange: I,
    handleAppStateChangeWithTransitionCheck: s,
    handleError: c,
    error: e
  };
}
function qE() {
  return ga() ? Ta.MOBILE : Ta.DESKTOP;
}
function VE({
  children: i,
  thresholdConfigs: o
}) {
  const [t, e] = iA(qE()), A = dA(() => {
    const n = {};
    for (const a of Object.keys(o)) {
      const g = o[a];
      if (g) {
        const { mapper: c, presets: I, userThresholds: s } = g;
        n[a] = c(I[t], s);
      }
    }
    return {
      getPhaseThresholds: (a) => n[a],
      phaseThresholds: n,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [o, t, e]);
  return /* @__PURE__ */ b(Ia.Provider, { value: A, children: i });
}
function ZE(i) {
  const o = NA(i);
  return JSON.stringify(o.current) !== JSON.stringify(i) && (o.current = i), o.current;
}
function zE(i, o) {
  return {
    size: {
      min: o?.size?.min ?? i.size.min,
      max: o?.size?.max ?? i.size.max
    },
    mouth: {
      confidence: { min: i.mouth.confidence.min },
      status: {
        max: i.mouth.status.max
      }
    },
    brightness: {
      min: i.brightness.min,
      max: i.brightness.max
    },
    confidence: { min: i.confidence.min },
    devicePitchAngle: { max: i.devicePitchAngle.max },
    edgeDistanceToImageShorterSideRatio: {
      min: i.edgeDistanceToImageShorterSideRatio.min
    },
    sharpness: { min: i.sharpness.min }
  };
}
function Hg(i, o) {
  return {
    size: {
      min: o?.size?.min ?? i.size.min,
      max: o?.size?.max ?? i.size.max
    },
    mouth: {
      confidence: { min: i.mouth.confidence.min },
      status: {
        min: i.mouth.status.min
      }
    },
    confidence: { min: i.confidence.min }
  };
}
function XE({ children: i, userThresholds: o }) {
  const t = ZE(o), e = dA(() => ({
    [M.NEUTRAL]: {
      mapper: zE,
      presets: yx,
      userThresholds: t
    },
    [M.SMILE]: {
      mapper: Hg,
      presets: Eg,
      userThresholds: t
    },
    [M.SMILE_MANUAL]: {
      mapper: Hg,
      presets: Eg,
      userThresholds: t
    }
  }), [t]);
  return /* @__PURE__ */ b(VE, { thresholdConfigs: e, children: i });
}
const $E = async () => WebAssembly.validate(new Uint8Array([8007 * -1 + 5432 + 2575, 3302 + 8247 * 1 + -11452, 6707 + -824 * 8, -7211 + -3218 * -1 + 4102 * 1, 1 * -9281 + -2262 + 11544, -8099 + 7041 * -1 + 15140, 1 * -8290 + 8391 + -101, -9459 + -1 * -9459, 6 * -1229 + -7519 + -1354 * -11, 517 + -3 * -1567 + -1 * 5213, -17115 + 1556 * 11, 19 * 443 + 6595 + -14916, -1 * -701 + 2 * 1986 + -4673, 5946 + -1 * 6151 + 206, 1 * -4355 + 1144 + 3334, -3 * 2685 + -4 * 1093 + 12430, -15247 + -39 * -391, 6170 * 1 + 3371 * -2 + 573, -4 * 2031 + 5644 + 2480, 6235 * 1 + 3703 + -9928, -4659 * 1 + 5893 + -1224, 9916 + 523 * -13 + -3116, 497 * -1 + -2097 * -1 + -4 * 398, 0, 10850 + 15 * -719, 8857 + 1 * -9023 + 166, 253, 15, 4755 + 1 * -1201 + -3301, 4408 + -862 * 5, 2067 + -314 * 4 + 2 * -400]));
function Ad() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(2 * -2154 + 1414 + -6 * -485);
}
function ed() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = Ad();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function td(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
function od(i) {
  return i > 6e4 ? ">1m" : "" + i;
}
function nd(i) {
  return i > 4570 * -1 + 9801 + -5221 ? ">10" : "" + i;
}
const Wr = (i) => i ? i <= 9859 + -9327 * -1 + 3 * -6395 ? Math.round(i * (-8894 * 1 + 883 * 7 + 2733 * 1)) / 20 : Math.round(i / 50) * (-1 * 9137 + -7986 + -1 * -17173) : -1 * 1109 + 965 * 4 + 1 * -2751;
function id(i) {
  return i ? Math.round(i / (458 * -16 + -5161 + 14989)) * (-1 * -2192 + -481 + 789 * 1) : -16 * -443 + 6704 + -13792;
}
const rd = (i) => i ? Math.round(i / (454 * 10 + -5927 * 1 + -1397 * -1)) * (384 * -15 + 7 * -413 + -3 * -2887) : -2 * -1993 + -4861 + -875 * -1, ad = (i) => Math.round(i * (-5717 * -1 + 9807 + 7761 * -2)) / (-7387 + -5507 * 1 + 12896);
async function gd() {
  return await $E() ? Ya.SIMD : Ya.NO_SIMD;
}
const zo = {};
zo.CAPTURE_FINISHED = "capture_finished", zo.CAPTURE_STARTED = "capture_started", zo.ESCALATION_TRIGGER = "escalation_trigger";
const Lr = zo, Je = {};
Je.PALM = "palm_auto_capture", Je.SMILE = "smile_liveness", Je.DOCUMENT = "document_auto_capture", Je.MAGNIFEYE = "magnifeye_liveness", Je.EYE_GAZE = "eye_gaze_liveness", Je.FACE = "face_auto_capture", Je.MULTI_RANGE = "multirange_liveness";
const sd = Je;
class cd {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = kC(), this.applicationId = H0(window.location.href);
  }
  async init({ apiKey: o, component: t, customer: e, sessionId: A }) {
    !o || !A || !e || !t || (this.apiKey = o, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(Lr.CAPTURE_STARTED));
  }
  async sendEvent(o, t) {
    if (!this.apiKey) return;
    const e = "https://metrics.innovatrics.com/v1/i/v0/e/", A = this.buildEventProperties(t), n = this.createCommonBody(o, A);
    try {
      const r = {};
      r["Content-Type"] = "application/json", await fetch(e, { method: "POST", headers: r, body: JSON.stringify(n) });
    } catch (r) {
      console.error("Error sending auto capture event:", r);
    }
  }
  buildEventProperties(o) {
    const t = this.convertCamelToSnakeCase(o), e = this.createCommonProperties();
    return { ...t, ...e };
  }
  createCommonProperties() {
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: Os() };
  }
  createCommonBody(o, t = {}) {
    const e = {};
    return e.api_key = this.apiKey, e.event = o, e.distinct_id = this.distinctId, e.properties = t, e;
  }
  convertCamelToSnakeCase(o) {
    const t = {};
    if (!o || typeof o != "object") return t;
    for (const [e, A] of Object.entries(o)) {
      const n = e.replace(/[A-Z]/g, (r) => "_" + r.toLowerCase());
      A && typeof A == "object" && !Array.isArray(A) ? t[n] = this.convertCamelToSnakeCase(A) : t[n] = A;
    }
    return t;
  }
}
const Kg = new cd();
class Id {
  posthog = Kg;
  component;
  redfinSignal;
  constructor(o) {
    this.component = o;
  }
  createSegmentation(o) {
    return { redfin: this.redfinSignal?.value, ...o };
  }
  init(o, t, e) {
    this.redfinSignal = e;
    const A = ed(), n = {};
    n.apiKey = o, n.component = this.component, n.customer = t, n.sessionId = A, Kg.init(n);
  }
  shouldReportAnalytics(o) {
    return o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !o.dotWeb.features.realTimeTransactionReportingDisabled : o?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(o) {
    return o < 250 ? rd(o) : Wr(o);
  }
  parsePerformanceCheckup(o, t) {
    const { optDetails: e } = o ?? {}, { performance: A, hiccupAmount: n, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: nd(n || 0), firstHiccup: od(id(r)), optCheckDetails: e?.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class Cd extends Id {
  constructor() {
    super(sd.SMILE);
  }
  async trackCaptureProcess(o) {
    const t = o.get(M.NEUTRAL), e = o.get(M.SMILE) ?? o.get(M.SMILE_MANUAL);
    if (!t || !e) return;
    const A = ad(t.metadata.averageFps + e.metadata.averageFps) / (10796 + -3598 * 3), n = t.metadata.captureProcessTime, r = e.metadata.captureProcessTime, a = this.parsePerformanceCheckup(t.metadata.optCheck, t.metadata.performanceCheckup), g = this.createSegmentation({ durationMs: n + r, faceSize: Wr(e.detectedObject.faceSize), confidence: Wr(t.detectedObject.confidence), imageResolution: t.resultImage.width + "x" + t.resultImage.height, averageFps: A, neutralPhaseDurationMs: n, smilePhaseDurationMs: r, camera: td(t.metadata.deviceName, t.metadata.facingMode), instructionSet: await gd(), ...a });
    this.posthog.sendEvent(Lr.CAPTURE_FINISHED, g);
  }
  trackEscalated(o, t) {
    const e = {};
    e.instructionCode = o, e.phase = t;
    const A = this.createSegmentation(e);
    this.posthog.sendEvent(Lr.ESCALATION_TRIGGER, A);
  }
}
const Bd = new Cd();
function Ba(i, o) {
  const t = NA(o);
  z(() => {
    t.current = o;
  }, [o]), z(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function Qd({ skipOutsideOfCandidateSelection: i }) {
  const { appState: o, handleAppStateChange: t } = RA(), e = xe((n) => {
    if (!n.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: a } } } = n.detail;
    if (!(i && !a) && r.includes(MA.FACE_NOT_PRESENT)) {
      if (o !== U.RUNNING) return;
      setTimeout(() => {
        t(U.LOADING);
      }, 3 * 2879 + -1815 + 1137 * -6), setTimeout(() => {
        t(U.RUNNING);
      }, 1 * -9508 + -1534 * 5 + -5726 * -3);
    }
  }, [i, o, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function xd(i, o) {
  const { handleFaceDetection: t } = Qd(o);
  Ba(i, t);
}
function Qa(i, o) {
  function t(e) {
    o(e);
  }
  Ba(i, t);
}
function Ed(i) {
  const { appState: o, handleAppStateChange: t } = RA();
  function e() {
    o !== U.LOADING && t(U.RUNNING);
  }
  function A(n) {
    n.detail?.["instruction"] === An.CONTINUE_DETECTION && e();
  }
  Qa(i, A);
}
const jg = () => typeof document < "u" && document.hasFocus();
function dd(i = {}) {
  const o = NA(i), t = NA(jg()), [e, A] = iA(jg);
  z(() => {
    o.current = i;
  }), z(() => {
    function r(I) {
      t.current = I, A(I);
    }
    function a() {
      Promise.resolve().then(() => {
        !t.current && (o.current.onFocus?.(), o.current.onChange?.(!0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        t.current && (o.current.onBlur?.(), o.current.onChange?.(!1)), r(!1);
      });
    }
    function c() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", c), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", c);
    };
  }, []);
  const n = {};
  return n.isWindowFocused = e, n;
}
function ld(i = {}) {
  const { appState: o } = RA();
  dd({ onBlur: () => {
    o === U.WAITING || o === U.COMPLETE || i.onBlur?.();
  }, onFocus: () => {
    o === U.WAITING || o === U.COMPLETE || i.onFocus?.();
  } });
}
function ud(i) {
  const { controller: o } = Ks(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = RA();
  ld({ onBlur: () => {
    e(U.LOADING), A(!1);
  }, onFocus: () => {
    e(U.RUNNING), A(!0);
  } }), Ed(i.CONTROL), z(() => {
    t === U.COMPLETE && o?.reset(), t === U.LOADING && o?.reset(), t === U.WAITING && o?.reset(), t === U.RUNNING && o?.init();
  }, [o, t]);
}
function fd(i) {
  const [o, t] = iA(), e = xe((n) => {
    n.detail && t(n.detail.phaseName);
  }, []);
  Ba(i, e);
  const A = {};
  return A.currentPhaseName = o, A;
}
function hd() {
  return fd(Ee.PHASE_CHANGED);
}
function pd() {
  ud(Ee);
  const { currentPhaseName: i } = hd(), o = {};
  o.skipOutsideOfCandidateSelection = i === M.NEUTRAL, xd(Ee.DETECTION_CHANGED, o);
}
const md = ao.div`
  position: relative;
`, yd = ao.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function Dd(i) {
  const { cameraService: o } = gt(), { handleAppStateChange: t, handleError: e } = RA();
  async function A() {
    if (o) {
      t(U.LOADING);
      try {
        await o.switchCamera(), t(U.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(y.fromCameraError(r));
          return;
        }
      }
    }
  }
  function n(r) {
    r.detail?.["instruction"] === An.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  Qa(i, n);
}
const wd = (i) => i === I0.CONTROL ? !ga() : !0;
function bd(i) {
  const { cameraService: o } = gt(), { isCameraReady: t } = RA(), [e, A] = iA(), n = dA(() => {
    const I = t && o && o.isStreaming && o.getCameraSettings().facingMode;
    return I ? e ?? I === "user" : e ?? wd(i);
  }, [o, e, i, t]);
  function r() {
    A(e === void 0 ? !n : !e);
  }
  function a() {
    A(void 0);
  }
  function g(I) {
    switch (I.detail?.["instruction"]) {
      case An.TOGGLE_MIRROR:
        r();
        break;
      case An.SWITCH_CAMERA:
        a();
        break;
      default:
        return;
    }
  }
  Qa(i, g);
  const c = {};
  return c.shouldCameraMirror = n, c;
}
function kd(i, o) {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, HE(i, A);
  }, [t, e, i]);
}
function Sd(i) {
  const { cameraResolution: o } = gt(), { shouldCameraMirror: t } = bd(i.CONTROL);
  Dd(i.CONTROL);
  const e = {};
  e.cameraResolution = o, e.shouldCameraMirror = t, kd(i.CAMERA_PROPS_CHANGED, e), z(() => () => {
    st.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const Gd = ao.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Nd = ao.div`
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
function Rd() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const vd = Kr(
  ({ detectionDetails: i, isImageMirror: o }, t) => Rd() ? (console.log(i), /* @__PURE__ */ b(HA, { children: [
    /* @__PURE__ */ b(Gd, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ b(Nd, { children: /* @__PURE__ */ b("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function Fd({
  detectionDetails: i,
  samVersion: o,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: n } = gt(), { redfin: r } = Pn(), a = NA(null);
  if (z(() => {
    if (!a.current || !n || !i)
      return;
    a.current.width = n.width, a.current.height = n.height, rC(a.current);
    const B = Mn(n), l = BC(n);
    hi(a.current, B, "lime"), hi(a.current, l, "blue"), Wx(a.current, i.processedImage.detection), Ao(a.current, i.processedImage.detection.leftEye.center, "cyan"), Ao(a.current, i.processedImage.detection.rightEye.center, "cyan"), Ao(a.current, i.processedImage.detection.mouth.center, "cyan"), Lx(a.current, i.processedImage.detection, n);
    const u = e.edgeDistanceToImageShorterSideRatio;
    if (vC(u)) {
      const h = bc(
        n,
        u.min,
        B
      );
      hi(a.current, h, "yellow");
    }
  }, [n, i, e]), !n || !i)
    return null;
  const {
    avgFps: g,
    detectionTime: c,
    processedImage: { detection: I, instructionCode: s, invalidValidators: C, isEscalated: x }
  } = i, E = {
    Confidence: I.confidence,
    Brightness: I.brightness,
    Sharpness: I.sharpness,
    "Face size": I.faceSize,
    "L eye conf / status": `${I.leftEye.confidence} / ${I.leftEye.status}`,
    "R eye conf / status": `${I.rightEye.confidence} / ${I.rightEye.status}`,
    "Mouth conf / status": `${I.mouth.confidence} / ${I.mouth.status}`,
    "Detection time": c,
    "Avg FPS": g,
    Instruction: s,
    "Resolution w / h": `${n.width} / ${n.height}`,
    "Invalid validators": C,
    "Component version": "8.0.4",
    "SAM version": o,
    "Escalated instruction": x,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ b(
    vd,
    {
      ref: a,
      cameraResolution: n,
      detectionDetails: E,
      isImageMirror: t
    }
  );
}
function Md() {
  return Ks();
}
function Wd() {
  const [i, o] = iA(void 0), t = xe((A) => {
    o(A.detail);
  }, []);
  jc(Ee.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Ld = Kr(function({ shouldCameraMirror: o }, t) {
  const { detectionData: e } = Wd(), { controller: A } = Md(), { phaseThresholds: n, thresholdsPreset: r } = ic(), { appState: a } = RA(), g = A?.getCurrentDetectionName();
  if (g === void 0 || a !== U.RUNNING)
    return null;
  const c = n[g];
  return /* @__PURE__ */ b("div", { ref: t, children: /* @__PURE__ */ b(
    Fd,
    {
      detectionDetails: e?.detectionDetails,
      samVersion: Dc,
      shouldCameraMirror: o,
      thresholds: c,
      thresholdsPreset: r
    }
  ) });
});
function Od({ isRounded: i, isSquare: o, ...t }) {
  return i ? /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: o ? "0" : "50%" });
}
function Jd(i, o) {
  const [t, e] = iA(!1), A = () => e((a) => !a), n = "" + t;
  Mt(() => {
    function a() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), C = {};
      return C.childList = !0, C.subtree = !0, C.attributes = !0, s.observe(i.current, C), s;
    }
    function g() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((x) => {
        x.find((B) => {
          for (const l of B.removedNodes)
            if (l !== o?.current && l === i.current)
              return !0;
        }) && A(), x.forEach((B) => {
          B.addedNodes.forEach((l) => {
            l !== o?.current && l.parentElement?.removeChild(l);
          });
        });
      }), C = {};
      return C.childList = !0, s.observe(i.current.parentElement, C), s;
    }
    const c = a(), I = g();
    return () => {
      I?.disconnect(), c?.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const Ud = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Yd({ cutOut: i, height: o, ignoreElement: t, width: e }) {
  const A = NA(null), { key: n } = Jd(A, t);
  return /* @__PURE__ */ b("div", { ref: A, style: Ud, children: /* @__PURE__ */ b("svg", { viewBox: `0 0 ${e} ${o}`, children: [
    /* @__PURE__ */ b("defs", { children: [
      /* @__PURE__ */ b("mask", { id: "placeholder", children: [
        /* @__PURE__ */ b("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ b(
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
            /* @__PURE__ */ b("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ b("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
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
    /* @__PURE__ */ b("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function Td({ fullOverlay: i, ignoreElement: o, resolution: t }) {
  const e = QC(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ b(
    Yd,
    {
      cutOut: i || /* @__PURE__ */ b(Od, { height: A, width: n, x: r, y: a }),
      height: t.height,
      ignoreElement: o,
      width: t.width
    }
  );
}
function Pd({ debugLayerRef: i }) {
  const { appState: o } = RA(), { cameraResolution: t } = gt(), { redfin: e } = RA(), A = t && e === bt.Lower, n = o !== U.RUNNING;
  return A ? /* @__PURE__ */ b(
    Td,
    {
      fullOverlay: n,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function _d({ children: i, shouldCameraMirror: o }) {
  const t = NA(null);
  return /* @__PURE__ */ b(HA, { children: [
    /* @__PURE__ */ b(Pd, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ b(Ld, { ref: t, shouldCameraMirror: o })
  ] });
}
function Hd() {
  const { videoRef: i } = gt(), { isCameraReady: o } = RA(), { shouldCameraMirror: t } = Sd(Ee);
  return /* @__PURE__ */ b(_d, { shouldCameraMirror: t, children: /* @__PURE__ */ b(
    yd,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: o,
      autoPlay: !0,
      id: sC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Kd(i, o) {
  z(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      KE(o, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, o]);
}
function jd({ children: i }) {
  const o = NA(null);
  return Kd(o, Ee.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ b(md, { ref: o, children: i });
}
function qd() {
  return pd(), /* @__PURE__ */ b(jd, { children: /* @__PURE__ */ b(Hd, {}) });
}
function Vd({ configuration: i }) {
  if (i)
    return /* @__PURE__ */ b(gQ, { target: i.styleTarget, children: /* @__PURE__ */ b(nx, { configuration: i, children: /* @__PURE__ */ b(XE, { userThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ b(ZC, { children: /* @__PURE__ */ b(
      eB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: tB.SMILE,
        children: /* @__PURE__ */ b(
          LC,
          {
            value: jE({
              onError: i.onError
            }),
            children: /* @__PURE__ */ b(WC, { analytics: Bd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ b(_Q, { cameraConfiguration: i.camera, children: /* @__PURE__ */ b(PE, { children: /* @__PURE__ */ b(uI, { children: /* @__PURE__ */ b(qd, {}) }) }) }) })
          }
        )
      }
    ) }) }) }) });
}
rI(Vd, "x-dot-smile-liveness", ["configuration"]);
