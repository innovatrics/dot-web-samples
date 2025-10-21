var Ms = Object.defineProperty;
var Ea = (i) => {
  throw TypeError(i);
};
var Ls = (i, n, t) => n in i ? Ms(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var y = (i, n, t) => Ls(i, typeof n != "symbol" ? n + "" : n, t), xa = (i, n, t) => n.has(i) || Ea("Cannot " + t);
var S = (i, n, t) => (xa(i, n, "read from private field"), t ? t.call(i) : n.get(i)), Y = (i, n, t) => n.has(i) ? Ea("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), M = (i, n, t, e) => (xa(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Uo, O, i0, it, da, r0, a0, g0, Yr, rr, ar, I0, uo = {}, s0 = [], Os = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Yo = Array.isArray;
function he(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Pr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function OA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 1 * 6067 + 2681 + -4373 * 2 && (r.children = arguments.length > 4773 * 1 + 3207 + -7977 ? Uo.call(arguments, -3657 * 1 + 2917 + 742) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return Co(i, r, e, A, null);
}
function Co(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++i0, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && O.vnode != null && O.vnode(r), r;
}
function Js() {
  var i = {};
  return i.current = null, i;
}
function Be(i) {
  return i.children;
}
function ce(i, n) {
  this.props = i, this.context = n;
}
function Jt(i, n) {
  if (n == null) return i.__ ? Jt(i.__, i.__i + (1 * -3469 + 9988 + -6518)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Jt(i) : null;
}
function c0(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -71 * 36 + 1340 + -38 * -32; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return c0(i);
  }
}
function gr(i) {
  (!i.__d && (i.__d = !0) && it.push(i) && !Gn.__r++ || da != O.debounceRendering) && ((da = O.debounceRendering) || r0)(Gn);
}
function Gn() {
  for (var i, n, t, e, A, o, r, g = 7164 + 6310 * -1 + -853; it.length; ) it.length > g && it.sort(a0), i = it.shift(), g = it.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = he({}, e)).__v = e.__v + (520 * 4 + -6371 * 1 + 4292), O.vnode && O.vnode(t), Tr(n.__P, t, e, n.__n, n.__P.namespaceURI, -4496 + -35 * -193 + -2227 & e.__u ? [A] : null, o, A ?? Jt(e), !!(-17 * 353 + 1 * -541 + 346 * 19 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Q0(o, t, r), t.__e != A && c0(t)));
  Gn.__r = 0;
}
function C0(i, n, t, e, A, o, r, g, a, I, C) {
  var s, E, c, x, d, l, B = e && e.__k || s0, f = n.length;
  for (a = Us(t, n, B, a, f), s = -7916 * 1 + -181 * 53 + 17509; s < f; s++) (c = t.__k[s]) != null && (E = c.__i == -1 ? uo : B[c.__i] || uo, c.__i = s, l = Tr(i, c, E, A, o, r, g, a, I, C), x = c.__e, c.ref && E.ref != c.ref && (E.ref && Hr(E.ref, null, c), C.push(c.ref, c.__c || x, c)), d == null && x != null && (d = x), 2893 + -2017 * 1 + -872 & c.__u || E.__k === c.__k ? a = B0(c, a, i) : typeof c.type == "function" && l !== void 0 ? a = l : x && (a = x.nextSibling), c.__u &= -7);
  return t.__e = d, a;
}
function Us(i, n, t, e, A) {
  var o, r, g, a, I, C = t.length, s = C, E = 0;
  for (i.__k = new Array(A), o = 5 * -1796 + 5 * -256 + 2052 * 5; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Co(null, r, null, null, null) : Yo(r) ? Co(Be, { children: r }, null, null, null) : r.constructor == null && r.__b > -5780 + 85 * 68 ? Co(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (3047 + 1 * 1146 + -4 * 1048), g = null, (I = r.__i = Ys(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 2 * 2107 + -2238 * 1 + -1974)), g == null || g.__v == null ? (I == -1 && (A > C ? E-- : A < C && E++), typeof r.type != "function" && (r.__u |= -1 * -4051 + -8175 + 4128)) : I != a && (I == a - (-4978 * -2 + 4511 * -1 + -5444) ? E-- : I == a + (9439 + 7794 * 1 + -17232) ? E++ : (I > a ? E-- : E++, r.__u |= 4))) : i.__k[o] = null;
  if (s)
    for (o = 7333 * -1 + -5449 + 12782; o < C; o++) (g = t[o]) != null && 1 * 5671 + 7767 + -13438 == (2 * -1852 + -7860 + 1 * 11566 & g.__u) && (g.__e == e && (e = Jt(g)), x0(g, g));
  return e;
}
function B0(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 43 * -61 + 5527 + -2904; e && A < e.length; A++) e[A] && (e[A].__ = i, n = B0(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Jt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 1941 * 1 + -1597 * 2 + 1261 == n.nodeType);
  return n;
}
function Je(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Yo(i) ? i.some(function(t) {
    Je(t, n);
  }) : n.push(i)), n;
}
function Ys(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && 5 * 397 + -7435 + 545 * 10 == (-1 * -3673 + 3599 + -2 * 3635 & a.__u)) return t;
  if (e > (a != null && 5817 * 1 + -3501 + -2316 == (511 + 1 * -6619 + 130 * 47 & a.__u) ? -2420 + 2 * -4142 + 10705 : -3469 * 2 + -31 * 313 + 16641)) for (A = t - (-7745 + -32 * 2 + -710 * -11), o = t + (-9603 + 1251 * -2 + 12106); A >= -2317 + 2965 * 1 + -36 * 18 || o < n.length; ) {
    if (A >= -88 * -74 + 8420 + -14932) {
      if ((a = n[A]) && 7483 + -5 * -1368 + -1 * 14323 == (-6 * -1145 + -1697 * 5 + 1617 & a.__u) && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && -9 * 961 + -690 * 1 + 9339 == (6150 + 9929 * 1 + -16077 & a.__u) && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function la(i, n, t) {
  n[1315 * 3 + -1 * -2999 + -4 * 1736] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Os.test(n) ? t : t + "px";
}
function qo(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || la(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || la(i.style, n, t[n]);
    }
  else if (n[1 * -8674 + 14 * 577 + 596] == "o" && n[39 * -61 + -2143 * 1 + -1 * -4523] == "n") o = n != (n = n.replace(g0, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(8125 + 7 * -767 + 54 * -51) : n.slice(2), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Yr, i.addEventListener(n, o ? ar : rr, o)) : i.removeEventListener(n, o ? ar : rr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[4 * -94 + -599 * -3 + -1417] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -6574 * -1 + 4 * -2193 + 2199 == t ? "" : t));
  }
}
function ua(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Yr++;
      else if (n.t < t.u) return;
      return t(O.event ? O.event(n) : n);
    }
  };
}
function Tr(i, n, t, e, A, o, r, g, a, I) {
  var C, s, E, c, x, d, l, B, f, p, m, D, b, w, F, v, L, T = n.type;
  if (n.constructor != null) return null;
  -7768 + -209 * 9 + 3259 * 3 & t.__u && (a = !!(32 & t.__u), o = [g = n.__e = t.__e]), (C = O.__b) && C(n);
  A: if (typeof T == "function") try {
    if (B = n.props, f = "prototype" in T && T.prototype.render, p = (C = T.contextType) && e[C.__c], m = C ? p ? p.props.value : C.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (f ? n.__c = s = new T(B, m) : (n.__c = s = new ce(B, m), s.constructor = T, s.render = Ts), p && p.sub(s), s.props = B, s.state || (s.state = {}), s.context = m, s.__n = e, E = s.__d = !(117 * 62 + 7256 + -14510), s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && T.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = he({}, s.__s)), he(s.__s, T.getDerivedStateFromProps(B, s.__s))), c = s.props, x = s.state, s.__v = n, E) f && T.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (f && T.getDerivedStateFromProps == null && B !== c && s.componentWillReceiveProps != null && s.componentWillReceiveProps(B, m), !s.__e && s.shouldComponentUpdate != null && !(4793 + -1 * 723 + -4069) === s.shouldComponentUpdate(B, s.__s, m) || n.__v == t.__v) {
        for (n.__v != t.__v && (s.props = B, s.state = s.__s, s.__d = !(-3285 * -3 + 3 * -1979 + -3917)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(H) {
          H && (H.__ = n);
        }), D = -1 * -8554 + 5895 * 1 + -14449; D < s._sb.length; D++) s.__h.push(s._sb[D]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(B, s.__s, m), f && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(c, x, d);
      });
    }
    if (s.context = m, s.props = B, s.__P = i, s.__e = !(-1981 + 1982 * 1), b = O.__r, w = 2 * -841 + 3406 + -1724, f) {
      for (s.state = s.__s, s.__d = !(-9849 + -2 * 2509 + 14868), b && b(n), C = s.render(s.props, s.state, s.context), F = -2 * -2531 + 3965 + -9027; F < s._sb.length; F++) s.__h.push(s._sb[F]);
      s._sb = [];
    } else do
      s.__d = !(19 * 521 + -8619 + -1279 * 1), b && b(n), C = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++w < 1812 * 2 + -1281 + 2 * -1159);
    s.state = s.__s, s.getChildContext != null && (e = he(he({}, e), s.getChildContext())), f && !E && s.getSnapshotBeforeUpdate != null && (d = s.getSnapshotBeforeUpdate(c, x)), v = C, C != null && C.type === Be && C.key == null && (v = E0(C.props.children)), g = C0(i, Yo(v) ? v : [v], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -(1 * 4131 + 780 + -1 * 4750), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (H) {
    if (n.__v = null, a || o != null)
      if (H.then) {
        for (n.__u |= a ? 160 : -112 * 11 + 8762 + -7402; g && 89 * 49 + -2116 + 2237 * -1 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (L = o.length; L--; ) Pr(o[L]);
    else n.__e = t.__e, n.__k = t.__k;
    O.__e(H, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = Ps(t.__e, n, t, e, A, o, r, a, I);
  return (C = O.diffed) && C(n), 2 * 3566 + -8093 + -1089 * -1 & n.__u ? void 0 : g;
}
function Q0(i, n, t) {
  for (var e = -6323 + -6122 * -1 + 201; e < t.length; e++) Hr(t[e], t[++e], t[++e]);
  O.__c && O.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      O.__e(o, A.__v);
    }
  });
}
function E0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -4578 + -6 * -763 ? i : Yo(i) ? i.map(E0) : he({}, i);
}
function Ps(i, n, t, e, A, o, r, g, a) {
  var I, C, s, E, c, x, d, l = t.props, B = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = 3 * -967 + 2990 * -2 + 8881; I < o.length; I++) if ((c = o[I]) && "setAttribute" in c == !!f && (f ? c.localName == f : -5 * 168 + -4034 + 4877 * 1 == c.nodeType)) {
      i = c, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(B);
    i = document.createElementNS(A, f, B.is && B), g && (O.__m && O.__m(n, o), g = !1), o = null;
  }
  if (f == null) l === B || g && i.data == B || (i.data = B);
  else {
    if (o = o && Uo.call(i.childNodes), l = t.props || uo, !g && o != null)
      for (l = {}, I = 501 * -1 + -1713 * -3 + -4638; I < i.attributes.length; I++) l[(c = i.attributes[I]).name] = c.value;
    for (I in l) if (c = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = c;
      else if (!(I in B)) {
        if (I == "value" && "defaultValue" in B || I == "checked" && "defaultChecked" in B) continue;
        qo(i, I, null, c, A);
      }
    }
    for (I in B) c = B[I], I == "children" ? E = c : I == "dangerouslySetInnerHTML" ? C = c : I == "value" ? x = c : I == "checked" ? d = c : g && typeof c != "function" || l[I] === c || qo(i, I, c, l[I], A);
    if (C) g || s && (C.__html == s.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), C0(n.type == "template" ? i.content : i, Yo(E) ? E : [E], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-7 * -823 + -9688 + 3927] : t.__k && Jt(t, -1 * -5252 + 1 * 9670 + -14922), g, a), o != null)
      for (I = o.length; I--; ) Pr(o[I]);
    g || (I = "value", f == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || f == "progress" && !x || f == "option" && x != l[I]) && qo(i, I, x, l[I], A), I = "checked", d != null && d != i[I] && qo(i, I, d, l[I], A));
  }
  return i;
}
function Hr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    O.__e(A, t);
  }
}
function x0(i, n, t) {
  var e, A;
  if (O.unmount && O.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Hr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      O.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -9740 + 9227 * 1 + 513; A < e.length; A++) e[A] && x0(e[A], n, t || typeof i.type != "function");
  t || Pr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function Ts(i, n, t) {
  return this.constructor(i, t);
}
function ze(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), O.__ && O.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Tr(n, i = (!e && t || n).__k = OA(Be, null, [i]), A || uo, uo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Uo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Q0(o, i, r);
}
function Kr(i, n) {
  ze(i, n, Kr);
}
function jr(i, n, t) {
  var e, A, o, r, g = he({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > 600 + -1 * -781 + -7 * 197 && (g.children = arguments.length > 2 * 2689 + -5901 + 2 * 263 ? Uo.call(arguments, 54 * -8 + 6 * -134 + 1 * 1238) : t), Co(i.type, g, e || i.key, A || i.ref, null);
}
function Ye(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, gr(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + I0++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Uo = s0.slice, O = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, i0 = -6080 + 40 * 152, ce.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = he({}, this.state), typeof i == "function" && (i = i(he({}, t), this.props)), i && he(t, i), i != null && this.__v && (n && this._sb.push(n), gr(this));
}, ce.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), gr(this));
}, ce.prototype.render = Be, it = [], r0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, a0 = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Gn.__r = 0, g0 = /(PointerCapture)$|Capture$/i, Yr = -23 * -156 + 3 * 2694 + -11670, rr = ua(!1), ar = ua(!0), I0 = 1 * 6829 + -40 * -15 + -7429;
function qr() {
  return (qr = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -9293 + 5108 * -1 + 14402; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var Hs = ["context", "children"];
function Ks(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = -1 * 4817 + 7 * -1264 + 13665; r < a.length; r++) A.indexOf(o = a[r]) >= 1 * 9465 + -5 * 1229 + -3320 || (g[o] = e[o]);
    return g;
  }(i, Hs);
  return jr(n, t);
}
function js() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = OA(Ks, qr({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (2580 + -3 * 859 === e.nodeType) return e.data;
    if (-248 + -3 * -83 !== e.nodeType) return null;
    var o = [], r = {}, g = 0, a = e.attributes, I = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[d0(a[g].name)] = a[g].value);
    for (g = I.length; g--; ) {
      var C = t(I[g], null), s = I[g].slot;
      s ? r[s] = OA(fa, { name: s }, C) : o[g] = C;
    }
    var E = A ? OA(fa, null, o) : o;
    return OA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Kr : ze)(this._vdom, this._root);
}
function d0(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function qs(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[d0(i)] = t, this._vdom = jr(this._vdom, e), ze(this._vdom, this._root);
  }
}
function _s() {
  ze(this._vdom = null, this._root);
}
function fa(i, n) {
  var t = this;
  return OA("slot", qr({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Vs(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = js, A.prototype.attributeChangedCallback = qs, A.prototype.disconnectedCallback = _s, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var Zs = 1 * -1174 + -851 * 7 + 3 * 2377;
function k(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --Zs, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var C = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return O.vnode && O.vnode(C), C;
}
class G extends Error {
  constructor(t, e) {
    super(t);
    y(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof G) return t;
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
    return new G(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof G) return t;
    const e = "An unexpected error has occurred";
    return new G(e);
  }
}
const tn = {};
tn.CONTINUE_DETECTION = "continue-detection", tn.SWITCH_CAMERA = "switch-camera", tn.TOGGLE_MIRROR = "toggle-mirror";
const Ir = tn;
var l0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(l0 || {}), zs = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(zs || {}), Xs = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Xs || {}), $s = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))($s || {}), Ac = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(Ac || {}), ec = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(ec || {});
const le = {};
le.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", le.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", le.CONTROL = "multi-range-auto-capture:control", le.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", le.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", le.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", le.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", le.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", le.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const Ue = le, Ne = {};
Ne.CANDIDATE_SELECTION = "candidate_selection", Ne.DOCUMENT_CENTERING = "document_centering", Ne.DOCUMENT_NOT_PRESENT = "document_not_present", Ne.DOCUMENT_TOO_FAR = "document_too_far", Ne.SHARPNESS_TOO_LOW = "sharpness_too_low", Ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ne.HOTSPOTS_PRESENT = "hotspots_present";
const At = Ne, et = {};
et.isPresent = At.DOCUMENT_NOT_PRESENT, et.isNotSmall = At.DOCUMENT_TOO_FAR, et.isNotOutOfBounds = At.DOCUMENT_CENTERING, et.isSharp = At.SHARPNESS_TOO_LOW, et.isNotDim = At.BRIGHTNESS_TOO_LOW, et.isNotBright = At.BRIGHTNESS_TOO_HIGH, et.noHotspots = At.HOTSPOTS_PRESENT;
const sr = {};
sr.FRONT = "user", sr.REAR = "environment";
const _r = sr, bt = {};
bt.LOADING = "LOADING", bt.ERROR = "ERROR", bt.WAITING = "WAITING", bt.RUNNING = "RUNNING", bt.COMPLETE = "COMPLETE";
const j = bt, u0 = {};
u0.EYE_NOT_PRESENT = "eye_not_present";
const Nn = u0, vA = {};
vA.CANDIDATE_SELECTION = "candidate_selection", vA.FACE_TOO_CLOSE = "face_too_close", vA.FACE_TOO_FAR = "face_too_far", vA.FACE_CENTERING = "face_centering", vA.FACE_NOT_PRESENT = "face_not_present", vA.SHARPNESS_TOO_LOW = "sharpness_too_low", vA.BRIGHTNESS_TOO_LOW = "brightness_too_low", vA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", vA.DEVICE_PITCHED = "device_pitched", vA.LEFT_EYE_NOT_PRESENT = "left_" + Nn.EYE_NOT_PRESENT, vA.RIGHT_EYE_NOT_PRESENT = "right_" + Nn.EYE_NOT_PRESENT, vA.MOUTH_NOT_PRESENT = "mouth_not_present", vA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", vA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const MA = vA, jA = {};
jA.isPresent = MA.FACE_NOT_PRESENT, jA.isNotPitched = MA.DEVICE_PITCHED, jA.isNotSmall = MA.FACE_TOO_FAR, jA.isNotLarge = MA.FACE_TOO_CLOSE, jA.isNotOutOfBounds = MA.FACE_CENTERING, jA.isNotDim = MA.BRIGHTNESS_TOO_LOW, jA.isNotBright = MA.BRIGHTNESS_TOO_HIGH, jA.isSharp = MA.SHARPNESS_TOO_LOW, jA.isLeftEyePresent = MA.LEFT_EYE_NOT_PRESENT, jA.isRightEyePresent = MA.RIGHT_EYE_NOT_PRESENT, jA.isMouthPresent = MA.MOUTH_NOT_PRESENT, jA.isMouthScoreNotTooHigh = MA.MOUTH_SCORE_TOO_HIGH, jA.isMouthScoreNotTooLow = MA.MOUTH_SCORE_TOO_LOW;
var tc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(tc || {});
const bi = { ...MA };
bi.SMILE = "smile", bi.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", bi.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const ge = {};
ge.CANDIDATE_SELECTION = "candidate_selection", ge.PALM_CENTERING = "palm_centering", ge.PALM_NOT_PRESENT = "palm_not_present", ge.PALM_TOO_FAR = "palm_too_far", ge.PALM_TOO_CLOSE = "palm_too_close", ge.SHARPNESS_TOO_LOW = "sharpness_too_low", ge.BRIGHTNESS_TOO_LOW = "brightness_too_low", ge.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ge.DEVICE_PITCHED = "device_pitched", ge.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const be = ge, ke = {};
ke.isPresent = be.PALM_NOT_PRESENT, ke.isNotPitched = be.DEVICE_PITCHED, ke.isNotSmall = be.PALM_TOO_FAR, ke.isNotOutOfBounds = be.PALM_CENTERING, ke.isNotDim = be.BRIGHTNESS_TOO_LOW, ke.isNotBright = be.BRIGHTNESS_TOO_HIGH, ke.isSharp = be.SHARPNESS_TOO_LOW, ke.isNotLarge = be.PALM_TOO_CLOSE, ke.isTemplateExtractionQualityHighEnough = be.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const _o = {};
_o.TOP_LEFT = "TOP_LEFT", _o.TOP_RIGHT = "TOP_RIGHT", _o.BOTTOM_RIGHT = "BOTTOM_RIGHT", _o.BOTTOM_LEFT = "BOTTOM_LEFT";
const te = {};
te.CANDIDATE_SELECTION = "candidate_selection", te.FACE_TOO_CLOSE = "face_too_close", te.FACE_TOO_FAR = "face_too_far", te.FACE_CENTERING = "face_centering", te.FACE_NOT_PRESENT = "face_not_present", te.SHARPNESS_TOO_LOW = "sharpness_too_low", te.BRIGHTNESS_TOO_LOW = "brightness_too_low", te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", te.DEVICE_PITCHED = "device_pitched", te.LEFT_EYE_NOT_PRESENT = "left_" + Nn.EYE_NOT_PRESENT, te.RIGHT_EYE_NOT_PRESENT = "right_" + Nn.EYE_NOT_PRESENT;
const wA = te, Ie = {};
Ie.isPresent = wA.FACE_NOT_PRESENT, Ie.isNotPitched = wA.DEVICE_PITCHED, Ie.isNotSmall = wA.FACE_TOO_FAR, Ie.isNotLarge = wA.FACE_TOO_CLOSE, Ie.isNotOutOfBounds = wA.FACE_CENTERING, Ie.isNotDim = wA.BRIGHTNESS_TOO_LOW, Ie.isNotBright = wA.BRIGHTNESS_TOO_HIGH, Ie.isSharp = wA.SHARPNESS_TOO_LOW, Ie.isLeftEyePresent = wA.LEFT_EYE_NOT_PRESENT, Ie.isRightEyePresent = wA.RIGHT_EYE_NOT_PRESENT;
const ha = Ie, ot = {};
ot.ZERO = "ZERO", ot.ONE = "ONE", ot.TWO = "TWO", ot.THREE = "THREE", ot.FOUR = "FOUR", ot.FIVE = "FIVE";
const XA = ot;
var Xe, z, ki, pa, Ut = 0, f0 = [], $ = O, ya = $.__b, ma = $.__r, Da = $.diffed, wa = $.__c, ba = $.unmount, ka = $.__;
function Vt(i, n) {
  $.__h && $.__h(z, i, Ut || n), Ut = 8893 + -1171 * 5 + -3038;
  var t = {};
  t.__ = [], t.__h = [];
  var e = z.__H || (z.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function fA(i) {
  return Ut = -6826 + -3 * -1474 + -1 * -2405, Vr(y0, i);
}
function Vr(i, n, t) {
  var e = Vt(Xe++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : y0(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[131 * 25 + 4615 + -7 * 1127]], e.__c.setState({}));
  }], e.__c = z, !z.__f)) {
    var A = function(g, a, I) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (C.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, g, a, I);
      var s = e.__c.props !== g;
      return C.forEach(function(E) {
        if (E.__N) {
          var c = E.__[0];
          E.__ = E.__N, E.__N = void 0, c !== E.__[0] && (s = !0);
        }
      }), o && o.call(this, g, a, I) || s;
    };
    z.__f = !0;
    var o = z.shouldComponentUpdate, r = z.componentWillUpdate;
    z.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var C = o;
        o = void 0, A(g, a, I), o = C;
      }
      r && r.call(this, g, a, I);
    }, z.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function AA(i, n) {
  var t = Vt(Xe++, 3);
  !$.__s && Zr(t.__H, n) && (t.__ = i, t.u = n, z.__H.__h.push(t));
}
function Zt(i, n) {
  var t = Vt(Xe++, 4);
  !$.__s && Zr(t.__H, n) && (t.__ = i, t.u = n, z.__h.push(t));
}
function $A(i) {
  return Ut = 13 * 206 + 5 * 1679 + 11068 * -1, mA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function h0(i, n, t) {
  Ut = 185 + -167 * 29 + -11 * -424, Zt(function() {
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
function mA(i, n) {
  var t = Vt(Xe++, 7);
  return Zr(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function me(i, n) {
  return Ut = -9183 + -1 * 5607 + 14798, mA(function() {
    return i;
  }, n);
}
function Qe(i) {
  var n = z.context[i.__c], t = Vt(Xe++, -383 * 9 + 9889 + 919 * -7);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(z)), n.props.value) : i.__;
}
function Rn(i, n) {
  $.useDebugValue && $.useDebugValue(n ? n(i) : i);
}
function p0() {
  var i = Vt(Xe++, 11);
  if (!i.__) {
    for (var n = z.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [3842 + -8 * -934 + 5657 * -2, 680 + -19 * 18 + -1 * 338]);
    i.__ = "P" + t[0] + "-" + t[-9539 + -4299 * 1 + 13839]++;
  }
  return i.__;
}
function oc() {
  for (var i; i = f0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(on), i.__H.__h.forEach(cr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], $.__e(n, i.__v);
  }
}
$.__b = function(i) {
  z = null, ya && ya(i);
}, $.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), ka && ka(i, n);
}, $.__r = function(i) {
  ma && ma(i), Xe = 227 * -42 + -3678 + 13212;
  var n = (z = i.__c).__H;
  n && (ki === z ? (n.__h = [], z.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(on), n.__h.forEach(cr), n.__h = [], Xe = 1 * -7766 + -9 * 268 + 10178)), ki = z;
}, $.diffed = function(i) {
  Da && Da(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (f0.push(n) !== 1 && pa === $.requestAnimationFrame || ((pa = $.requestAnimationFrame) || nc)(oc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), ki = z = null;
}, $.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(on), t.__h = t.__h.filter(function(e) {
        return !e.__ || cr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], $.__e(e, t.__v);
    }
  }), wa && wa(i, n);
}, $.unmount = function(i) {
  ba && ba(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      on(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && $.__e(n, t.__v));
};
var Sa = typeof requestAnimationFrame == "function";
function nc(i) {
  var n, t = function() {
    clearTimeout(e), Sa && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Sa && (n = requestAnimationFrame(t));
}
function on(i) {
  var n = z, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), z = n;
}
function cr(i) {
  var n = z;
  i.__c = i.__(), z = n;
}
function Zr(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function y0(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const Ci = Ye(void 0);
Ci.displayName = "AppStateContext";
function Ae() {
  const i = Qe(Ci);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class m0 extends ce {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new G("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === j.ERROR ? null : this.props.children;
  }
}
y(m0, "contextType", Ci);
function D0(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Cr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function w0(i, n) {
  var t = n(), e = fA({ t: { __: t, u: n } }), A = e[1 * 3554 + 5423 + -47 * 191].t, o = e[-13 * -27 + 9362 + -9712];
  return Zt(function() {
    A.__ = t, A.u = n, Si(A) && o({ t: A });
  }, [i, t, n]), AA(function() {
    return Si(A) && o({ t: A }), i(function() {
      Si(A) && o({ t: A });
    });
  }, [i]), t;
}
function Si(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-3917 + 7627 * 1 + 14 * -265 !== n || (-1 * 2338 + 1193 * 7 + -6012) / n == (1 * 3817 + 4178 + 3997 * -2) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function b0(i) {
  i();
}
function k0(i) {
  return i;
}
function S0() {
  return [!1, b0];
}
var G0 = Zt;
function Br(i, n) {
  this.props = i, this.context = n;
}
function ic(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : Cr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, OA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(Br.prototype = new ce()).isPureReactComponent = !0, Br.prototype.shouldComponentUpdate = function(i, n) {
  return Cr(this.props, i) || Cr(this.state, n);
};
var Ga = O.__b;
O.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Ga && Ga(i);
};
var rc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 2 * 2961 + 31 * -191 + -170 * -23;
function zr(i) {
  function n(t) {
    var e = D0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = rc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Na = function(i, n) {
  return i == null ? null : Je(Je(i).map(n));
}, ac = { map: Na, forEach: Na, count: function(i) {
  return i ? Je(i).length : -1 * -6349 + 7497 + 602 * -23;
}, only: function(i) {
  var n = Je(i);
  if (-17354 + -89 * -195 !== n.length) throw "Children.only";
  return n[272 * -9 + 7277 + -4829];
}, toArray: Je }, gc = O.__e;
O.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  gc(i, n, t, e);
};
var Ra = O.unmount;
function N0(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = D0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return N0(e, n, t);
  })), i;
}
function R0(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return R0(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function nn() {
  this.__u = -17 * 307 + 3018 + -2201 * -1, this.o = null, this.__b = null;
}
function W0(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Ic(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return OA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function ro() {
  this.i = null, this.l = null;
}
O.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -17064 + -4 * -4274 & i.__u && (i.type = null), Ra && Ra(i);
}, (nn.prototype = new ce()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = W0(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[8602 + 1 * -6794 + -1808] = R0(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || -2753 * -3 + 3641 * 1 + -11868 & n.__u || e.setState({ __a: e.__b = e.__v.__k[1 * -1094 + -2729 + 3823] }), i.then(r, r);
}, nn.prototype.componentWillUnmount = function() {
  this.o = [];
}, nn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[1 * -283 + 4470 + -79 * 53].__c;
      this.__v.__k[278 * 4 + 6017 + 1 * -7129] = N0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && OA(Be, null, i.fallback);
  return A && (A.__u &= -33), [OA(Be, null, n.__a ? null : i.children), A];
};
var Wa = function(i, n, t) {
  if (++t[1] === t[2635 + 121 * 71 + -3 * 3742] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-314 * -29 + 251 * -10 + 388 * -17] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -3 * 1245 + 4247 * 2 + 58 * -82; ) t.pop()();
    if (t[-1622 + -541 * -3] < t[0]) break;
    i.i = t = t[-23 * 157 + -2782 + 6395];
  }
};
function sc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function cc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    ze(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, appendChild: function(r) {
      this.childNodes.push(r), n.h.appendChild(r);
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -739 * 5 + -8983 + 12679, 5051 + 933 * -7 + -1 * -1481), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, ze(OA(sc, o, i.__v), n.v);
}
function Cc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = OA(cc, t);
  return e.containerInfo = n, e;
}
(ro.prototype = new ce()).__a = function(i) {
  var n = this, t = W0(n.__v), e = n.l.get(i);
  return e[-1163 * -7 + -31 * 251 + -8 * 45]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Wa(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, ro.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Je(i.children);
  i.revealOrder && i.revealOrder[-1 * -9407 + 627 * 1 + -58 * 173] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-16248 + 16249 * 1, 1 * 5163 + 6541 + 77 * -152, this.i]);
  return i.children;
}, ro.prototype.componentDidUpdate = ro.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Wa(i, t, n);
  });
};
var F0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Bc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ec = /[A-Z0-9]/g, xc = typeof document < "u", dc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function lc(i, n, t) {
  return n.__k == null && (n.textContent = ""), ze(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function uc(i, n, t) {
  return Kr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
ce.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ce.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Fa = O.event;
function fc() {
}
function hc() {
  return this.cancelBubble;
}
function pc() {
  return this.defaultPrevented;
}
O.event = function(i) {
  return Fa && (i = Fa(i)), i.persist = fc, i.isPropagationStopped = hc, i.isDefaultPrevented = pc, i.nativeEvent = i;
};
var rn = {};
rn.enumerable = !1, rn.configurable = !0, rn.get = function() {
  return this.class;
};
var Xr, yc = rn, va = O.vnode;
O.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || xc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[-9827 * 1 + -1598 * 3 + -1 * -14621] === "o" && a[-333 * 12 + -3315 + 16 * 457] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || dc(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Qc.test(r) && (r = a) : a = r = "oninput" : o && Bc.test(r) ? r = r.replace(Ec, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Je(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Je(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", yc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = F0, va && va(i);
};
var Ma = O.__r;
O.__r = function(i) {
  Ma && Ma(i), Xr = i.__c;
};
var La = O.diffed;
O.diffed = function(i) {
  La && La(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), Xr = null;
};
var pA = {};
pA.readContext = function(i) {
  return Xr.__n[i.__c].props.value;
}, pA.useCallback = me, pA.useContext = Qe, pA.useDebugValue = Rn, pA.useDeferredValue = k0, pA.useEffect = AA, pA.useId = p0, pA.useImperativeHandle = h0, pA.useInsertionEffect = G0, pA.useLayoutEffect = Zt, pA.useMemo = mA, pA.useReducer = Vr, pA.useRef = $A, pA.useState = fA, pA.useSyncExternalStore = w0, pA.useTransition = S0;
var v0 = {};
v0.current = pA;
var M0 = {};
M0.ReactCurrentDispatcher = v0;
var mc = M0;
function Dc(i) {
  return OA.bind(null, i);
}
function Bi(i) {
  return !!i && i.$$typeof === F0;
}
function wc(i) {
  return Bi(i) && i.type === Be;
}
function bc(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function kc(i) {
  return Bi(i) ? jr.apply(null, arguments) : i;
}
function Sc(i) {
  return !!i.__k && (ze(null, i), !0);
}
function Gc(i) {
  return i && (i.base || 126 * 50 + 197 * 17 + 16 * -603 === i.nodeType && i) || null;
}
var Nc = function(i, n) {
  return i(n);
}, Rc = function(i, n) {
  return i(n);
}, Wc = Be, Fc = Bi, dt = { useState: fA, useId: p0, useReducer: Vr, useEffect: AA, useLayoutEffect: Zt, useInsertionEffect: G0, useTransition: S0, useDeferredValue: k0, useSyncExternalStore: w0, startTransition: b0, useRef: $A, useImperativeHandle: h0, useMemo: mA, useCallback: me, useContext: Qe, useDebugValue: Rn, version: "18.3.1", Children: ac, render: lc, hydrate: uc, unmountComponentAtNode: Sc, createPortal: Cc, createElement: OA, createContext: Ye, createFactory: Dc, cloneElement: kc, createRef: Js, Fragment: Be, isValidElement: Bi, isElement: Fc, isFragment: wc, isMemo: bc, findDOMNode: Gc, Component: ce, PureComponent: Br, memo: ic, forwardRef: zr, flushSync: Rc, unstable_batchedUpdates: Nc, StrictMode: Wc, Suspense: nn, SuspenseList: ro, lazy: Ic, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: mc };
function Gi(i, n, t, e, A) {
  return bA(i - 741, t);
}
function Oa(i, n, t, e, A) {
  return bA(n - -799, t);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return bA(a - -168, I);
  }
  function e(g, a, I, C, s) {
    return bA(I - 656, C);
  }
  function A(g, a, I, C, s) {
    return bA(C - 539, a);
  }
  function o(g, a, I, C, s) {
    return bA(s - 191, I);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(811, "Ytn9", 803, 808, 792)) / 1 + -parseInt(A(780, "Y()2", 782, 796, 793)) / 2 + -parseInt(o(447, 457, "lFGw", 448, 445)) / 3 * (-parseInt(e(924, 916, 905, "kdyq", 898)) / 4) + parseInt(t(104, 103, "8q5b", 106, 117)) / 5 + parseInt(A(819, "xgAg", 818, 811, 829)) / 6 * (-parseInt(e(932, 908, 917, "kdyq", 899)) / 7) + parseInt(o(443, 420, "D(4R", 451, 438)) / 8 * (-parseInt(e(924, 936, 919, "bvZ8", 929)) / 9) + -parseInt(A(814, "vYZG", 782, 797, 811)) / 10 * (-parseInt(t(54, 71, "A3T@", 64, 76)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fn, -147459 * -3 + -1 * 252239 + 77725);
function L0(i, n, t, e, A) {
  return bA(e - 972, t);
}
function bA(i, n) {
  const t = Fn();
  return bA = function(e, A) {
    e = e - (-2 * 3707 + -6387 + 3 * 4679);
    let o = t[e];
    if (bA.EfsvAe === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      bA.lJdYAR = C, i = arguments, bA.EfsvAe = !0;
    }
    const g = t[8861 * 1 + -86 * 93 + -863], a = e + g, I = i[a];
    return I ? o = I : (bA.xySxYS === void 0 && (bA.xySxYS = !0), o = bA.lJdYAR(o, A), i[a] = o), o;
  }, bA(i, n);
}
function O0(i, n, t, e, A) {
  return bA(e - -795, t);
}
const Wn = Ye(void 0);
Wn[Gi(978, 985, "lFGw") + Gi(984, 977, "Lm%C") + "e"] = L0(1218, 1242, "^KDW", 1228) + Gi(1007, 1014, "UPff") + O0(-512, -530, "FAV!", -530);
function Fn() {
  const i = ["W489W6uDeSkYWOz0DMCGW68", "iwNdQf0", "qYq2eCoV", "bSkdpSoPW5nQW5b8rG", "uZ1Ci3jbCCorWPz9", "W4TFW6ugW6uJWQFcVdRdPSk0W7G", "WRnDW7r/WPq", "WQumW6ubW4P8lHNdSZtdI2i", "W7ZcPCohF8oDa8kKW499WO8", "E8kRW7hdOSoKW7HKAbmS", "dCoUW5KZW50", "WPD8pCoEWRG", "W5NdUCkpcZeQdr7dUSkoWOO", "mGbwiSkJySoQW5hdTW", "WPJcUqvRW5ruWOZcOrW", "W54gmmoEkCkJWQ41W4q+WR5w", "bx0RDLG", "WPZcSGeNW6T8WPNcNbWq", "WOhcSSoXwMG", "WRdcUCoqtwW", "Bu11FYBcKWn3bW", "b8otp8oSsSoop8kDu8kPeG", "WQ7cL8o9W7BcOSoodCkbW44D", "WQhdUsNdGSow", "WPuEW4pcOMG", "kbeNjtW", "W7DzWQy", "uCkWWPKhW4tcIbWDW7S", "CvtcNNulWRimDrxdSq", "b1mLnZW", "WOldV8o2zYtdGSkFA8ozC8kTW68", "W7BcPrfUk8kDzNyo", "W5KmnmoFkCkMWOu9W5CWWPXg", "WQFcRmoiWQtdLW", "WQZcMmo1W7dcLmoFp8kkW5Ox", "WPKcWR5hWRK", "iCoTWOaaWOiWnmkbyCkc"];
  return Fn = function() {
    return i;
  }, Fn();
}
function Qi() {
  function i(o, r, g, a, I) {
    return O0(o - 310, r - 356, o, I - 312);
  }
  function n(o, r, g, a, I) {
    return L0(o - 339, r - 406, I, a - -1827);
  }
  function t(o, r, g, a, I) {
    return Oa(o - 478, I - 991, r);
  }
  const e = Qe(Wn);
  if (e === void 0) throw new Error(Wn[n(-602, -607, -620, -605, "I4&S") + n(-613, -593, -613, -610, "A3T@") + "e"] + (i("mDPn", -232, -260, -230, -245) + A(192, 162, "k60l", 161, 174) + i("D(4R", -233, -244, -244, -231) + i("pO)6", -236, -225, -247, -232) + t(450, "8q5b", 453, 446, 462) + i("Ytn9", -224, -223, -214, -221) + i("A3T@", -252, -237, -254, -237) + i("8q5b", -237, -235, -226, -230)));
  function A(o, r, g, a, I) {
    return Oa(o - 85, I - 713, g);
  }
  return e;
}
const vn = Ye(void 0);
vn.displayName = "AnalyticsContext";
function vc() {
  const i = Qe(vn);
  if (i === void 0)
    throw new Error(`${vn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Ni = (i) => i.length < -812 * -1 + 7583 + -8394 ? 1 * -8210 + -1 * 7633 + -1 * -15843 : i.reduce((t, e) => t + e, -7658 + 1731 * -3 + 12851) / i.length, Wt = (i) => Number.parseFloat(i.toFixed(3560 + -3 * -18 + -3611));
function Mc(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-1 * -55 + -647 * -5 + -3290, -16 * -358 + 14 * 91 + 3 * -2334, n.canvas.width, n.canvas.height);
}
const J0 = -8957 + -1 * -5867 + 1545 * 2 + 0.75, Lc = -458 * 13 + -158 * -22 + 2480, Oc = -1862 + -203 * 31 + 515 * 17, Jc = "dot-auto-capture-video", Ei = (i, n) => Math.min(i, n), U0 = ({ height: i, width: n }, t) => {
  const e = Ei(n, i) * t, A = (n - e) / (5258 + 36 * -146), o = (i - e) / (9564 + 6890 * -1 + -1336 * 2), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, Uc = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = U0(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, Yc = ({ height: i, width: n }) => {
  const t = Ei(n, i), e = t / 3 * (-23 * -2 + 9237 + -9279);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function Pc(i, n) {
  const t = Ei(n.width, n.height);
  return Wt(i * t);
}
function Tc({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, U0(t, J0);
}
function Hc(i) {
  return Uc(i, J0);
}
function Kc(i, n) {
  return Pc(i, n) * Lc;
}
const jc = "7.6.1", qc = {
  version: jc
}, _c = 5762 + 11 * -523 + 0.8100000000000005, Qr = {};
Qr.max = 100, Qr.min = 10;
const Ja = Qr, Vc = 720, Zc = -719 * -1 + -1 * 7123 + 6604, zc = 1109 * 1 + -8147 + -1006 * -7, Y0 = "AES-CBC", P0 = "RSA-OAEP", Xc = "SHA-256", $c = "image/jpeg", AC = 1807 + 7 * -257, T0 = "/dot-assets", Ua = "dot_embedded_bg.wasm", Er = (i) => new Promise((n) => {
  setTimeout(n, i);
}), H0 = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Wt(t) : t)), $r = () => qc.version, Aa = (i) => new URL(i).hostname.replace("www.", ""), K0 = () => Aa(window.location.href) === "localhost", Vo = (i) => Object.entries(i).map(([n, t]) => encodeURIComponent(n) + "=" + encodeURIComponent(t)).join("&"), eC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function tC(i) {
  return i.at(-1) === "/" ? i.slice(-5747 + -2 * 1187 + 1 * 8121, -1) : i;
}
function oC(i) {
  return "" + tC(i ?? "") + T0;
}
function Bo() {
  return !1;
}
function nC({ analytics: i, crosshatch: n }) {
  if (!K0())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function iC({ analytics: i, apiKey: n, redfin: t, countlyAppKey: e, crosshatch: A, bramble: o }) {
  const r = {};
  r.analytics = i, r.crosshatch = A;
  const g = nC(r);
  return AA(() => {
    g && g.init(e, o.getCustomerName(), n);
  }, [g, e, o, n]), AA(() => {
    A && (console.info("Analytics is " + (g != null && g.shouldReportAnalytics(A) ? "enabled" : "disabled")), g && g.walleye(t, o.getCustomerName()));
  }, [g, o, A, t]), AA(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function rC({
  analytics: i,
  apiKey: n,
  children: t,
  countlyAppKey: e
}) {
  const { crosshatch: A, bramble: o } = Qi(), { redfin: r } = Ae(), g = iC({
    analytics: i,
    redfin: r,
    countlyAppKey: e,
    crosshatch: A,
    bramble: o,
    apiKey: n
  }), a = mA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ k(vn.Provider, { value: a, children: t });
}
const xr = {};
xr.SIMD = "simd", xr.NO_SIMD = "no-simd";
const Ya = xr, dr = {};
dr.Lower = "Lower", dr.Higher = "Higher";
const Yt = dr, lr = {};
lr.MOBILE = "MOBILE", lr.DESKTOP = "DESKTOP";
const Pa = lr, Mn = Ye(void 0);
Mn.displayName = "TransactionCountingContext";
function j0() {
  const i = Qe(Mn);
  if (i === void 0)
    throw new Error(`${Mn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function aC({ children: i, value: n }) {
  const { crosshatch: t } = Qi(), { transactionCounting: e } = j0(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Yt.Higher : Yt.Lower, o = mA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ k(Ci.Provider, { value: o, children: i });
}
const Ln = Ye(void 0);
Ln.displayName = "CameraServiceContext";
function zt() {
  const i = Qe(Ln);
  if (i === void 0)
    throw new Error(`${Ln.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function q0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ri() {
  return (await q0()).filter((n) => n.kind === "videoinput");
}
function an(i) {
  i.getTracks().forEach((t) => t.stop());
}
function ur(i) {
  return i.getVideoTracks()[8 * 247 + 2098 * 4 + -10368];
}
(function(i, n) {
  const t = i();
  function e(a, I, C, s, E) {
    return yA(C - -287, a);
  }
  function A(a, I, C, s, E) {
    return yA(s - 697, C);
  }
  function o(a, I, C, s, E) {
    return yA(I - 957, E);
  }
  function r(a, I, C, s, E) {
    return yA(E - -134, s);
  }
  function g(a, I, C, s, E) {
    return yA(a - -844, C);
  }
  for (; ; )
    try {
      if (parseInt(A(968, 976, "uwwl", 962, 958)) / 1 + parseInt(A(975, 991, "0W3v", 976, 977)) / 2 * (-parseInt(r(122, 125, 123, "Py[u", 110)) / 3) + parseInt(e("VTry", 11, -4, -18, 12)) / 4 + -parseInt(g(-564, -549, "O@KY", -582, -582)) / 5 * (parseInt(o(1231, 1233, 1235, 1220, "^Kz0")) / 6) + -parseInt(A(971, 989, "pYNj", 975, 959)) / 7 + -parseInt(A(945, 969, "lK6z", 966, 947)) / 8 * (-parseInt(r(151, 157, 136, "ZWds", 139)) / 9) + parseInt(o(1213, 1231, 1228, 1229, "q1tQ")) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(On, 37123 * 11 + -233995 * 1 + 145933 * 1);
function On() {
  const i = ["fmoFW4iEfa", "W4rRjclcPW", "xCoGis9nxmkUW4m0qmolW4y", "FmodEL3cGK7cM8kh", "FSoxWQlcJaGbpmkZuI/cIa", "s8o3W7pdT8kq", "xSkvgIxcPCoUpxnT", "bZvAW40t", "bSojW6JcUG", "md1IW4G/", "WPpdRSoznYW4W7n9WORdRmo3", "W53dM8kKW5Xvb2xcQSknFIH2W5S", "WQP0oqOrW41jowC", "W5pcGWXQWQFcTLvmWRxdOIpcOmkU", "WPldQmoDnIm/W7jiWOtdG8oj", "W6hcSmkpWOyLFCkWAhRdICk1bCoa", "W4fPfupdLKVcHSod", "gCk8oGLFWQ/cLG", "oCkMW7/cQmkP", "aCotW6dcR8kI", "r8omCtRdItytW4ZdMwT1", "W68JWRG3", "cs3cGmkWW7FcHHRcI0LyAW", "kSodWOhdUJS", "gmknWOhdR8k1", "W792dstdKq", "WQZdSmkJWQ3cOW", "W7FcPqmLW7e", "W6OAW6BdGemRlq", "iSkmW6hcS8ko", "wCkzW5pcMmopW6FdJCkunavzW7mz", "xmkIWReZja", "WRNcGdfCsCozWQXQsCopW7OuW6C", "nCohW5dcS8kL", "xeKUhuRdV8osAmoGWQlcKq", "W7Tch1X0", "rWpdRSowFq", "WORdSCkg", "dmoCW7xcMmkL", "oSkHbGlcVNhdP1u1W457W4ON", "kCoAW41iwSofW4pdVLhcIIFdVG"];
  return On = function() {
    return i;
  }, On();
}
function yA(i, n) {
  const t = On();
  return yA = function(e, A) {
    e = e - 243;
    let o = t[e];
    if (yA.bVQXuK === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      yA.rwVzjv = C, i = arguments, yA.bVQXuK = !0;
    }
    const g = t[1299 * 4 + 1905 * -3 + -173 * -3], a = e + g, I = i[a];
    return I ? o = I : (yA.CFlEDM === void 0 && (yA.CFlEDM = !0), o = yA.rwVzjv(o, A), i[a] = o), o;
  }, yA(i, n);
}
function gC(i) {
  function n(g, a, I, C, s) {
    return yA(a - 362, g);
  }
  const t = new ArrayBuffer(i[r(1246, 1259, 1246, "iADv") + "h"]), e = new Uint8Array(t);
  function A(g, a, I, C, s) {
    return yA(C - 48, I);
  }
  for (let g = 1 * -6701 + 7743 + -1 * 1042, a = i[r(1259, 1241, 1256, "7s6@") + "h"]; g < a; g++)
    if (r(1271, 1266, 1275, "%f86") !== A(292, 300, "uPwu", 303)) {
      const I = new _0x5e662b(_0x220632);
      return _0x4d4e52[r(1248, 1239, 1236, "M(hz")](I[n("4e$)", 610) + "e"](function(C, s) {
        function E(x, d, l, B, f) {
          return A(x - 172, d - 449, l, f - 902);
        }
        function c(x, d, l, B, f) {
          return A(x - 490, d - 500, B, l - -117);
        }
        return C + _0x4dc5e2[c(222, 192, 203, "%f86") + E(1218, 1224, "uPwu", 1198, 1210) + "de"](s);
      }, ""));
    } else e[g] = i[r(1259, 1264, 1261, "SmW8") + o(960, 954, 949, 938, "EHad")](g);
  function o(g, a, I, C, s) {
    return yA(a - 708, s);
  }
  function r(g, a, I, C, s) {
    return yA(a - 996, C);
  }
  return t;
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return tA(a - -866, E);
  }
  function e(a, I, C, s, E) {
    return tA(C - -756, a);
  }
  const A = i();
  function o(a, I, C, s, E) {
    return tA(I - -469, s);
  }
  function r(a, I, C, s, E) {
    return tA(s - 432, a);
  }
  function g(a, I, C, s, E) {
    return tA(a - 247, C);
  }
  for (; ; )
    try {
      if (-parseInt(e("458f", -500, -471, -446, -493)) / 1 + parseInt(g(490, 484, "]U%6", 480, 516)) / 2 + parseInt(o(-225, -215, -239, "]goT", -214)) / 3 + -parseInt(g(516, 487, "1SgH", 503, 487)) / 4 * (-parseInt(t(-606, -615, -621, -626, "n5!B")) / 5) + -parseInt(e("GEji", -544, -517, -506, -505)) / 6 * (parseInt(t(-588, -584, -576, -558, "K0V4")) / 7) + -parseInt(e("iEGc", -514, -516, -519, -541)) / 8 * (-parseInt(r("458f", 677, 684, 668, 664)) / 9) + -parseInt(r("g6]O", 702, 670, 684, 705)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Jn, -1 * 1773199 + -49 * -35577 + -228 * -4108);
async function IC() {
  const i = {};
  function n(I, C, s, E, c) {
    return tA(s - -28, C);
  }
  i[r(620, "VFoR", 629)] = Y0, i[g(265, 320, 290, "iEGc") + "h"] = 256;
  const t = await window[g(232, 232, 261, "i##k") + "o"][n(251, "g6]O", 264) + "e"][a(1135, 1142, "#jzZ", 1167, 1146) + n(254, "^e!d", 236) + "y"](i, !0, [r(588, "P]v$", 602) + "pt", n(235, "$0dt", 238) + "pt"]), e = Uint8Array[r(614, "D8(I", 615)](Array(-9510 + 11 * 866)[n(226, "[gfm", 223)](9603 + 2 * 2887 + 1 * -15377)), A = window[r(615, "w]1R", 589) + "o"][n(234, "P]v$", 252) + a(1113, 1138, "K0V4", 1101, 1112) + n(204, "le4u", 204)](e), o = {};
  o[g(313, 312, 292, "K0V4")] = t, o.iv = A;
  function r(I, C, s, E, c) {
    return tA(s - 343, C);
  }
  function g(I, C, s, E, c) {
    return tA(s - 13, E);
  }
  function a(I, C, s, E, c) {
    return tA(c - 865, s);
  }
  return o;
}
async function sC(i) {
  const { iv: n, key: t } = await IC(), e = {};
  e[I(-84, "#jzZ")] = Y0, e.iv = n;
  const A = await window[g(1065, 1016, "#jzZ", 1036) + "o"][g(1051, 1042, "iEGc", 1047) + "e"][a(1118, "u^!p", 1132, 1117, 1108) + "pt"](e, t, i), o = await window[C(-408, "]YxI", -408) + "o"][C(-379, "]U%6", -398) + "e"][I(-85, "uRpK") + g(1058, 1059, "w]1R", 1035)](C(-418, "]YxI", -400), t), r = {};
  function g(s, E, c, x, d) {
    return tA(x - 786, c);
  }
  function a(s, E, c, x, d) {
    return tA(d - 864, E);
  }
  r[g(1055, 1035, "M*M^", 1053) + "ge"] = A, r[a(1107, "g6]O", 1104, 1108, 1117)] = o;
  function I(s, E, c, x, d) {
    return tA(s - -373, E);
  }
  r.iv = n;
  function C(s, E, c, x, d) {
    return tA(c - -673, E);
  }
  return r;
}
function tA(i, n) {
  const t = Jn();
  return tA = function(e, A) {
    e = e - (8 * 101 + 2228 + -2804);
    let o = t[e];
    if (tA.dYEISP === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      tA.RcUeTJ = C, i = arguments, tA.dYEISP = !0;
    }
    const g = t[4 * -1583 + 4155 + 2177], a = e + g, I = i[a];
    return I ? o = I : (tA.rdhtYA === void 0 && (tA.rdhtYA = !0), o = tA.RcUeTJ(o, A), i[a] = o), o;
  }, tA(i, n);
}
function Jn() {
  const i = ["jLijCYeHW43dTmklaW", "WQSpd8oLw1VcOM4Jl8kuWOVdSG", "W6ldIIKFW64", "thdcHmkXWOqzxa", "WOrYeCkWCW", "AmklsCklWR4", "W7XHW5O4WOW", "WPnldCk5", "W6JcSglcQWW", "xrBcG3e", "W7xcUCo+WRNdVu/dH8kaEmkaW41bia", "WQBdPmk+", "W5XJbL4go3FcNguKW7xdVLS", "WRXSW5OT", "CmohgmkZuW", "WPurWOjanSksW7i0WQFcQ8oAtSog", "WRZcGmkYlmkbW4/dG8k/WRXvWQDSW6K", "W69Se8k9ea", "W485W7lcMmkmcmo+gsa/WRKPWPm", "WOK/WP0Lja", "b8kJmdu", "wKCuDG3dJCoGwepdKSomymkN", "eSkCmaFcJG", "qmkZW4iwrG", "CCoTlwTM", "W4TgW4igyW", "jLylC3LCWRddI8kynmkEW4j1", "W78de8k9WQTCW6u", "fSo0WOPva8kvAmk8WOa+W4/cVa", "WR3cL1NcThBdS8ozmaS", "W4BdRxnz", "uCkGW4W", "WOTLbSkNCW", "W6PjvmkMba", "WPmNWO8+oG", "WPyVWPe2pa", "m8oAf8ovW5NdGCkUnCosdIRcKa", "BCkkxW", "W61NbmkDca", "W6ZcP3xcVGO", "WPTEowm", "WOOHrXTc", "W6ZdNSoPA8oi", "r8opWPpdUSoCW5BcISk7WQmeW4JcLmkC", "omofWPxdSG", "WP8KWPWJmq", "c8orWOPEaa", "W6xcO3BcVG", "wa3cLM3cUa", "W7HiwCkW", "WR7dTmkLW7JcPW", "W63dIbtcMhC", "zmo9etfJWP8xWRaiWOhcPJVcPa", "DYiYWQy4W4ldN0JcHaJcRa", "WQFdLe8wW78", "qmolWPldVmoAWPRdG8kqWOi6W4u", "WPr1cSk0AW", "WOpdO8oS", "jLiacd4nW4/dJ8ki", "W4T5W45JjtpcQY9tW4a", "WOLHbCkL"];
  return Jn = function() {
    return i;
  }, Jn();
}
async function cC(i) {
}
function CA(i, n) {
  const t = Yn();
  return CA = function(e, A) {
    e = e - (5026 + 1 * 569 + -893 * 6);
    let o = t[e];
    if (CA.eifwfi === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      CA.gOqvia = C, i = arguments, CA.eifwfi = !0;
    }
    const g = t[1655 * 5 + -8161 + -114], a = e + g, I = i[a];
    return I ? o = I : (CA.XTPyxx === void 0 && (CA.XTPyxx = !0), o = CA.gOqvia(o, A), i[a] = o), o;
  }, CA(i, n);
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return CA(a - 914, s);
  }
  function e(a, I, C, s, E) {
    return CA(I - 157, a);
  }
  function A(a, I, C, s, E) {
    return CA(C - 720, E);
  }
  const o = i();
  function r(a, I, C, s, E) {
    return CA(s - 381, E);
  }
  function g(a, I, C, s, E) {
    return CA(I - -852, a);
  }
  for (; ; )
    try {
      if (-parseInt(t(1176, 1179, 1169, "4nq$", 1180)) / 1 + -parseInt(t(1212, 1219, 1215, "IVts", 1222)) / 2 * (parseInt(t(1165, 1180, 1167, "huLA", 1183)) / 3) + -parseInt(A(979, 1039, 1023, 1053, "IVts")) / 4 + parseInt(e("0&R0", 404, 425, 417, 450)) / 5 + -parseInt(A(996, 1039, 1009, 997, ")iA(")) / 6 * (-parseInt(g("Y[3x", -560, -532, -536, -537)) / 7) + parseInt(e("b!Bt", 406, 446, 447, 365)) / 8 + parseInt(g("w2MR", -614, -658, -645, -660)) / 9 * (-parseInt(r(627, 625, 602, 634, "3jQ^")) / 10) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Yn, -3 * -353819 + -1692233 + 1533911);
const CC = 5 * 187 + -7341 + -4703 * -2, BC = 2837 + 3 * 398 + 2969, _0 = -2515 + -2 * -1259, V0 = 4333 * 1 + 1 * 2697 + -19 * 370 + 0.5, Z0 = {};
Z0[NA(135, 175, 189, 147, "hj2U")] = 1280;
const z0 = {};
z0[uA(623, 641, "sig(")] = 720;
const X0 = {};
X0[IA("sig(", 439, 477, 450)] = 60;
const gn = {};
gn[IA("w2MR", 498, 514, 498)] = Z0, gn[uA(618, 641, "N3pM") + "t"] = z0, gn[HA(-159, "GF0^", -227, -222, -191) + IA("t!TZ", 421, 430, 443)] = X0;
const $0 = {};
$0[IA("xI6)", 429, 422, 463)] = 1920;
const AI = {};
AI[uA(662, 681, "!k93")] = 1080;
const In = {};
In[HA(-163, "azAB", -137, -168, -156)] = $0, In[IA("4nq$", 494, 493, 482) + "t"] = AI, In[uA(649, 635, "t!TZ") + HA(-167, "1tSQ", -131, -116, -129)] = 30;
const eI = {};
eI[uA(603, 623, "z!A9")] = 1;
const tI = {};
tI[uA(631, 670, "GF0^")] = 1;
const oI = {};
oI[IA("3jQ^", 483, 465, 501)] = 1;
const sn = {};
sn[NA(184, 221, 149, 182, "FL7J")] = eI, sn[HA(-197, "ClJe", -128, -167, -174) + "t"] = tI, sn[pe(203, 224, 206, "*mxm") + IA("GfKB", 425, 476, 444)] = oI;
const nI = {};
function uA(i, n, t, e, A) {
  return CA(i - 353, t);
}
nI[IA("qpNh", 446, 454, 426)] = 1;
const iI = {};
function HA(i, n, t, e, A) {
  return CA(A - -430, n);
}
iI[uA(644, 682, "b!Bt")] = 1;
function NA(i, n, t, e, A) {
  return CA(e - -122, A);
}
const rI = {};
function IA(i, n, t, e, A) {
  return CA(e - 180, i);
}
rI[IA("wSRD", 464, 488, 490)] = 1;
const cn = {};
cn[uA(650, 684, "xI6)")] = nI, cn[uA(637, 674, "hj2U") + "t"] = iI, cn[IA("Bii9", 460, 393, 435) + uA(684, 696, "Dy&#")] = rI;
const ao = {};
ao[pe(173, 194, 127, "jKsi")] = gn, ao[HA(-69, "sig(", -76, -105, -114) + NA(163, 189, 218, 191, "mLGL")] = In, ao[NA(183, 215, 172, 204, "Dy&#")] = sn, ao[IA("huLA", 395, 375, 421) + pe(178, 213, 185, "qu#Y")] = cn;
const Un = ao, kt = {};
kt[uA(624, 588, "CL8[") + HA(-180, "ClJe", -200, -169, -185) + pe(256, 223, 216, "jvFe")] = CC, kt[NA(138, 168, 136, 137, "1tSQ") + HA(-169, "I$jT", -137, -78, -122) + IA("xI6)", 436, 494, 446) + NA(231, 186, 228, 184, "1tSQ")] = Un[uA(675, 666, "*Ily")], kt[pe(180, 196, 136, "!k93") + IA("GfKB", 471, 474, 432) + NA(124, 120, 102, 132, "IVts") + NA(163, 172, 194, 183, "z!A9")] = Un[IA("ClJe", 496, 478, 508) + uA(626, 578, "hj2U")], kt[pe(223, 236, 260, "sig(") + NA(252, 243, 227, 208, "1Y16")] = _0, kt[IA("*mxm", 431, 413, 440) + uA(610, 571, "jonq") + HA(-159, "IVts", -221, -169, -190) + HA(-53, "0&R0", -71, -63, -101) + NA(180, 129, 170, 153, "0&R0")] = V0;
const St = {};
St[NA(203, 203, 152, 157, "N3pM") + HA(-120, "1tSQ", -132, -133, -111) + HA(-76, "rN#H", -119, -160, -118)] = BC, St[uA(653, 612, "epMw") + uA(667, 691, "CL8[") + pe(197, 165, 228, "3jQ^") + pe(251, 216, 214, "huLA")] = Un[IA("!k93", 472, 459, 487)], St[IA("1Y16", 460, 427, 438) + HA(-148, "GF0^", -140, -61, -103) + IA("huLA", 451, 464, 462) + NA(150, 131, 175, 158, "1Y16")] = Un[IA("4nq$", 482, 507, 474) + uA(638, 610, "jKsi")], St[HA(-124, "azAB", -120, -119, -153) + uA(648, 676, "dR!b")] = _0, St[pe(253, 211, 226, "YFML") + NA(106, 161, 166, 146, "jKsi") + NA(200, 153, 123, 168, "FL7J") + pe(222, 191, 194, "CL8[") + NA(205, 181, 248, 202, "j0pk")] = V0;
const fr = {};
function pe(i, n, t, e, A) {
  return CA(i - -64, e);
}
fr[NA(92, 79, 107, 121, "1tSQ")] = kt, fr[HA(-116, "FL7J", -63, -62, -98)] = St;
function Yn() {
  const i = ["vGlcUaddU3xcI3hcMehcGmoZyG", "cSo7WQlcHG", "WRNcRSogWP4P", "W6CTw8oYW5m", "k1BdUdhcRq", "W5JcOL/dTq", "k8o2WRNcLa", "WQpdVSosWQm", "W6a0imk6", "WQNcIrbwi8olkb7cUCkUdmoPW4G", "WR7cV8omWRaJ", "W59wvSkoWPa", "WONdVhfozG", "rYST", "lCkvrSkA", "avtdOLxcQa", "W6C4ECoIW6C", "uSk+W7SUEa", "FaFcIgNdVYCwjYiUWOPEqa", "W4pcJGDpB8kMyMBcMZFcOtxdUG", "q3CsdSkQWRhcSSkTrb3dMspcTCoU", "WQxcVYNcJei", "W4VcQfPsFmkAhCkN", "W6pdOXakcW", "WOnUW5CwWPXks1u", "W59Mv8kiWP4", "ydtdLbzu", "W7WPvmoWW70", "dmoAlmoriG", "W5hcTL3dRCor", "o8kgxmkdW5y", "BbFcKCofma", "W4qQW58VWOq", "W4FcIGblAmoub3JcJWJcHW", "WOGCWOJcUW", "W5ddOq8S", "W54NESk8W5G", "wmkSkSkLW74", "EbdcNSoSia", "W7q0j8kNvW", "u8oTW6ddJmkb", "sNeuWQVdHW", "W6NdKCkYW5Gq", "WOpcOuvBneZcNKRdJwLL", "v8oMW7u", "ACkgWOShcq", "ov/dJa", "WR7dUhhdL3f0sCoTEfmE", "BmkAWOeYda", "WR3cTComWR4Y", "W5SJA8kpW5u", "W57cUuxdSG", "FalcJMtdTIOvsIipWQPpySk5", "WPtdRMnzva", "qSk8pCkLW7S", "xSoWW6JdImkD", "W6O6ja", "W6ldLSkmW60w", "xxWBWONdNG", "WQVcHrPqx8kzCc3cOmkX", "wtfxC0jiDCo1WOBdJSo/", "WR7dKCoiWQbR", "gYfhw8o+", "W4DiW5STWQnmW7/dM2lcMW", "WQf4cCkHWQehjcRcOmkQsmoGWPi", "WOhdMLiCcq", "cxdcLcO", "WRWpWP3cSWq", "xmkXpmkWW78", "WOaKeConW4KCWR7dR8o3W6FdNa", "W5znvt3cV8klW6BcQq", "W4pdSCkevCkj", "gCkvqCkl", "WPRdNL0EmG", "WOqHf8omW4TkW43dMSoHW4pdKNpdPW", "WQFdU8ozWQbS", "WQNcQtZcNa", "jCkarG", "ffNdOu4", "W7/dKCkIxxC", "dLhdQ1JcPG", "efWHqmk1", "mYRdMYXzWRtcV8kvqKu+", "FCoVW4FdRSoN", "tCkiDW", "W7BdICkjW6mB", "WPtdQwq", "xgGtWQ3dTq", "Dg7cGvOE", "W6/dLuCuFG", "omkaCCkBW4u", "W67cVIRcGcC", "W5iMW4WTWPK", "W4JcVmkhW6K", "gNexWP7cT1FdSSoy", "W4BdVWu"];
  return Yn = function() {
    return i;
  }, Yn();
}
const QC = fr;
function ie(i, n, t, e, A) {
  return BA(e - 455, A);
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return BA(s - -386, I);
  }
  function e(a, I, C, s, E) {
    return BA(E - 864, I);
  }
  const A = i();
  function o(a, I, C, s, E) {
    return BA(s - -174, E);
  }
  function r(a, I, C, s, E) {
    return BA(E - -426, C);
  }
  function g(a, I, C, s, E) {
    return BA(C - 148, s);
  }
  for (; ; )
    try {
      if (parseInt(g(454, 521, 396, "#qdI", 512)) / 1 * (parseInt(o(115, -99, 97, 36, "u!!2")) / 2) + parseInt(g(542, 395, 402, "&3Ur", 298)) / 3 * (parseInt(o(13, 5, 15, 63, "6Pta")) / 4) + -parseInt(t(-160, "aHRI", -156, -20, 11)) / 5 * (-parseInt(o(-36, -80, 126, 57, "i&5P")) / 6) + parseInt(t(-78, "N&3a", -287, -214, -223)) / 7 * (parseInt(r(8, 8, "Y^uv", -199, -121)) / 8) + -parseInt(e(865, "!E1$", 1039, 984, 1002)) / 9 + -parseInt(g(590, 377, 519, "R460", 643)) / 10 + -parseInt(t(-297, "2lq4", -265, -261, -262)) / 11 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Pn, 18 * 20979 + -314620 + -2 * -63162);
function Pn() {
  const i = ["WRLUW7tdHSo0", "s8kOAmoyW58", "dxaiWOddQW", "axldJq", "W6BdStxdPee", "WOzkCCkCW7u9ra", "jgCwWQNdTW", "zCkhlu9G", "WPFcHCoIDmkL", "WPe/sCkLfa", "rSkGASooW6i", "WQSXWQZcH8oTDcr2aH5IpG", "WO7dLCoazCod", "s8oeWOVdLmo7", "W6r/WOVdNmoT", "xbdcJ8kd", "a0a2WO8u", "nxWkWQhdTG", "W4zLWPxcKmoz", "WPTvadddGW", "WPtdVx4kma", "W71dW7andq", "WQaXtSk4fa", "WR7cRe/cVmof", "c0qIWOmB", "y0hdM1bL", "oZbVoHa", "DfRdLv1I", "WOJdGCohwSoz", "WP7dKCoFymot", "hraJWQ84", "iSkdzW/dJq", "W5pdJCoSAa", "aNOkWRxdSq", "DCkoWPeaBq", "ymklnunN", "fbXwgqa", "iCokWPNdVuy", "rX/cKSkEWR4", "q8kvBa", "W5b6WP/cGSoz", "W5NcRSkbsSon", "ASkAma", "qM3dGbiZ", "bvBdHCoSeG", "b8onpSk5W7u", "W5hcQ8kRtSoj", "WRtdVCkSBq0", "WOPgDN4", "W6pcQCk8wCoj", "WR5yah0", "WR7dUSkWCW0", "zvJdL1zJ", "W7LqW73dJa", "gbZdPau", "yCkan1HT", "W7igW6pcO8kG", "W7XAWQaUWOu", "beOUWPud", "ASkplK8", "WO9sWPPOcW", "aqOPWRCV", "WQyjWRFcIdu1WROwW7NdS8kKmW", "baH3cGy", "WQTrFMKP", "W71LW63dM8k3", "W5xcPCkVx8oC", "WP7dHgqOoG", "W5fRWPlcJ8oE", "vxddHXmL", "qSoTFWJcIq", "wmo2Ca", "oZVdJW", "fHZdSrHk", "W7n/WO/dLCoS", "xSo+kN7cVSoVwSkQWQv2mISg", "DNTUWPhdKW", "fmo3m8kfWQxdKZJdL8k7WObAWOui", "sSkdfgHJ", "B3LJWOZdLa", "D8kAiLHW", "uCkjE8oTWRJdJ8koW4RdVuvtiG", "aYvwadW", "eq3dGXrF", "WOO9rCkcdG", "WPboDxW5", "qrFcLCkxWRK", "dCkzb8kh", "fZ1WmXC", "WQtdMSk0Ary", "W4nLWONcPSom", "WR8UW5ldNCkh", "wmoOWPNdKmo4", "W6xcR8o1W79S", "W61HW7ldNSkN", "W75dW7iXhq", "ldtdKI7cIq", "WOS7WO0", "W4dcUmk8wSoh", "WOxdKCoOFCk0", "WOpcJvxdGSk5", "W6GgW63cS8kT", "WPDYdq", "a8k7AG/dQq", "zSkGASooW6i", "WRpdH8k7CWW", "xwFdHXSY", "WQjma0ZcTa", "WOeVkJ1r", "WOqZibPq", "D8kuW6tcUbWzW7VcTmkxWPRdMmouW6S", "WPnwghtcTq", "kConWRxdQ0q", "lCojWR7dQua", "WPzDjZFcJq", "Chn9WP7dHa", "mrTH", "Furzz8ks", "pshdVYxcIW", "WOuYnYvC", "zCkBn0v0", "ECkKWPa", "WPfeWPJcJCoiW6mQ", "wvqwWQ4RW6xdKI0", "pCowEHO8WRBdJcJcVmosW7vS", "D2j2WPpdLq", "uCkMA8otW4q", "WPxdHmoDtCov", "WRBdNSkMWR8xr1lcSGNcH1OcbW", "jSoEWRldR1W", "W5nezCk8W6u", "WRhdNSkWCHK", "kKaKWO8w", "W4JdSZxdLum", "ubRcVSkcWRG", "W4rXWRe9WPS", "WOrsdshcJa", "vaJcNSkcWQS", "y3n7WQZdLq", "jSodWRNdVvW", "W7PYW77dK8kG", "W4FcRCo2", "WPWFWOHJha", "FCowsqVcRa", "WQjybhBcPq", "aH5xgqa", "A1ZdIfi", "A1ZdIfr0", "WPNcPLFcPSos", "FKbgyW", "WPtdM8oE", "abJdRH9D", "WO/dV2SNoW", "oZr8hGC", "W4hcSCoPWQyq", "W4VcUSoSWP09", "W6PkW6uH", "WOyQlZbk", "C8kdWOC", "WPCQsCkLbW", "WPpdM8oh", "WPaYt8k8", "dCoRBs7dUa", "W6TJW7tdNmkN", "xmo8Bb3cMa", "WOuJoGPw", "DwHp", "eW1BfGa", "DSkpkKrW", "WPmdocHv", "smkIASoOW6a", "uSopWOxdLmo3", "WP7dV3GHjW", "f8o6mmkiWQtdMZVdGSkvWQHoWRmX", "WO7dRh4NoG", "WO8qWPPIeW", "imoLWRm", "dCoQkCkRW7q", "vCk7FCoUW6C", "emkjemkgnq", "DmkbmenW", "lmocWR7dUGG", "DCkdWP09iW", "W7juW7ZdN2G", "WOTxB18V", "WOSaWQrOgW", "qehcTeCDWPFcJ23dNrufW6m/", "WQldNCk7vb0", "cSola8kUW6q", "wmoKWOS", "W5NcSSkG", "W4HVWONcHmoi", "WRZdHCooqCoF", "WRuxW7C", "W6dcQ8onWQez", "mIy4W4FcHCkMWO7dPCkVzmktia", "imoEWQxdOvO", "jdD3orW", "sSk/Cmo5W7m", "WO3dPg4RoG", "WRxdISo/ySkL", "gCkjaSkgnW", "gGeOWQiP", "DhLMWPhdHa", "W7vOWOpdNmoR", "WOecWOHUfG", "WRNcPLFcPSos", "W4ZdJJq", "y3BdHXK2", "cmkUAcldRW", "WRadW5xdJmkE", "F8kcWPO6DW", "jmkalf4K", "W5PdW7ZdL38", "l3OkWQm", "yCkDnKzW", "DNDMWPhdHa", "edDZnHa", "WQqjW6dcOSoH", "W4ZdVYtdPem", "atBdLX0uWQTIaG", "hbBdSa", "uCkUBCorW6u", "ihWkWQpdOq", "uSoCWQddVCoc", "d8knhCkbia", "t8oyWOhdPCoX", "WPm+lYPn", "WRxcP0O", "qXldPtHAW47dRa", "W7jsW63dImkhWPW6WQS", "W5JdQCoTAmkP", "W4RcP8oUWOy/", "W7rvW7aQhW", "bmkUDYZdPa", "W4naESk5W7u", "otD3oby", "W7tcLmoYW4Hg", "WPeJoHPC", "W5JcQ8o8WOOZ", "WOaVkIXw", "WOyvCCk0W4uyxCoL", "C8khj15S", "WRCdW4JdI8kf", "WObcBxiP", "vmoRwWZcMa", "rMVdKrK4", "pdDSobS", "W6HVWP/cISom", "fZddQrDg", "dmkFW5FcHmkIW7iUW6vLy8kZW5K", "WPpdL8oJFSkJ", "amoEWQxdOvO", "WP9ohshcHW", "WObAacRcLW", "vHhcLCkdWR4", "j8kweSkBjW", "s8kSnK1Y", "W4ZcHmkEmCkfvtDOld7cLCoT", "W5nJWP/cHSoc", "zW3cOCk1WPa", "W7ygW6BcUmk1", "F8kmWPKSCq", "khOk", "m3qnWQJdSq", "W5LaFSkW", "W4juWPeiWRe", "q8o6CrtcJG", "WOWsy8koja", "t1FdLLP/", "bXCvWRu4", "W5JdO8oXECkT", "hrFdTavB", "WQ0DWOD+cW", "W7DNW7FdL8kD", "t8omWOBdN8oG", "dfpdUq", "WO/cKK/dTCkO", "rxBdKa", "DmkEW6/cUX4zWQlcRSkJWPhdSSom", "WRxdOCk7zHC", "WQaRW4/dG8kE", "WO/dUwmGmG", "bGLgoXu", "ndWuWQuU", "vhZdO8oWbCk2WQC", "dCkydCk8jq", "FSocWPRdNCoW", "wmoKWOhdL8o7", "W4rvASk5W6m", "WOzjcc3cJq"];
  return Pn = function() {
    return i;
  }, Pn();
}
function RA(i, n, t, e, A) {
  return BA(n - 493, A);
}
function sA(i, n, t, e, A) {
  return BA(t - 250, n);
}
function BA(i, n) {
  const t = Pn();
  return BA = function(e, A) {
    e = e - (2294 + -71 * -107 + -9775);
    let o = t[e];
    if (BA.iEeTwz === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      BA.elbnDU = C, i = arguments, BA.iEeTwz = !0;
    }
    const g = t[-3382 + 37 * -121 + 29 * 271], a = e + g, I = i[a];
    return I ? o = I : (BA.jgLtWp === void 0 && (BA.jgLtWp = !0), o = BA.elbnDU(o, A), i[a] = o), o;
  }, BA(i, n);
}
function nA(i, n, t, e, A) {
  return BA(i - -209, A);
}
function hA(i, n, t, e, A) {
  return BA(e - -144, i);
}
var _g, Vg, ve;
class EC {
  constructor(n = {}) {
    Y(this, ve);
    y(this, Vg, []);
    y(this, _g, {});
    function t(o, r, g, a, I) {
      return nA(r - -679, r - 59, g - 427, a - 65, o);
    }
    function e(o, r, g, a, I) {
      return RA(o - 161, I - -465, g - 450, a - 260, g);
    }
    M(this, ve, QC);
    function A(o, r, g, a, I) {
      return RA(o - 235, g - 348, g - 46, a - 252, o);
    }
    this[e(185, 299, "lDn@", 171, 311) + A("8wP0", 986, 1064, 1103) + t("dn[!", -708, -851, -620)](n);
  }
  [(Vg = sA(634, "mdha", 596) + RA(769, 804, 685, 661, "lDn@"), _g = nA(52, -77, -63, 172, "lDn@") + sA(507, "CgEl", 369) + "s", sA(342, "16!f", 421) + sA(516, "!E1$", 576) + RA(766, 770, 704, 666, "LfKv") + "fo")](n) {
    const t = ur(n), e = t == null ? void 0 : t[a(501, "^Vnw", 478) + a(472, "K3$t", 499) + "s"]();
    function A(I, C, s, E, c) {
      return nA(C - 732, C - 224, s - 397, E - 12, E);
    }
    function o(I, C, s, E, c) {
      return hA(I, C - 467, s - 416, C - 579);
    }
    if (!(e != null && e[A(888, 879, 982, "i&5P") + "t"]) || !(e != null && e[A(849, 717, 836, "vlqW")]) || !(e != null && e[g(883, 996, "cIdO", 819) + A(525, 664, 737, "wlHF")])) {
      if (g(938, 890, "cIdO", 1001) !== g(950, 902, "K3$t", 830)) throw new G(a(306, "sShC", 428) + r(-155, "vlqW", -194) + A(775, 656, 801, "i&5P") + r(39, "jGoq", -41) + A(842, 826, 850, "Nu19") + r(-35, "%Lm0", -30));
      ({ deviceInfo: _0x4b53d7 } = _0x5cfa29);
    }
    function r(I, C, s, E, c) {
      return sA(I - 53, C, s - -608);
    }
    function g(I, C, s, E, c) {
      return nA(I - 939, C - 123, s - 247, E - 284, s);
    }
    function a(I, C, s, E, c) {
      return sA(I - 293, C, s - -153);
    }
    if (t) {
      if (r(-146, "^Vnw", -36) === A(601, 667, 724, "u!!2")) return _0x589a7d instanceof _0x45e917 && _0x3fdc73[a(578, "85AV", 489)] === g(977, 958, "16!f", 1107) + o("!E1$", 659, 738) + g(980, 956, "vlqW", 1079) + A(824, 688, 808, "Y^uv");
      {
        const I = {};
        return I[r(1, "#qdI", -141)] = t[o("i&5P", 790, 922)], I.id = e[r(-217, "mdha", -197) + A(782, 882, 829, "sShC")], I;
      }
    }
  }
  async [RA(961, 816, 933, 788, "vlqW") + RA(885, 868, 869, 920, "lsPX") + RA(518, 653, 604, 530, "N&3a") + "m"](n) {
    const t = document[A("&3Ur", 857, 925) + e(-673, "8wP0", -785, -682) + o(1009, "9OFw", 1011, 1037, 975)](A("wlHF", 730, 765));
    t[a(1199, 1251, "vlqW", 1109) + a(866, 984, "6Pta", 974)] = !0, t[A("2^^#", 679, 765)] = !0;
    function e(I, C, s, E, c) {
      return nA(s - -759, C - 391, s - 401, E - 323, C);
    }
    function A(I, C, s, E, c) {
      return hA(I, C - 393, s - 337, C - 618);
    }
    function o(I, C, s, E, c) {
      return ie(I - 148, C - 327, s - 499, c - 205, C);
    }
    t[r(-20, -30, -6, -36, "Anc*") + e(-867, "@]eX", -747, -829) + "e"] = !0, t[r(-43, -62, -175, -21, "^Vnw")][A("vlqW", 606, 725) + A("QT2c", 788, 809)] = A("Nu19", 601, 582) + o(806, "N&3a", 949, 989, 890);
    function r(I, C, s, E, c) {
      return ie(I - 69, C - 492, s - 142, C - -885, c);
    }
    t[a(898, 960, "aHRI", 1019)][o(897, "Nu19", 797, 764, 817) + "ty"] = "0", t[r(-321, -189, -169, -147, "#qdI")][A("^Vnw", 629, 698) + a(961, 847, "QT2c", 943) + o(875, "vlqW", 981, 1026, 945)] = a(951, 1045, "Z1VH", 912), t[o(1046, "VHgP", 1082, 985, 1002)][a(1229, 1099, "^RIl", 1124)] = r(-273, -285, -151, -367, "V5kV"), t[a(1048, 1098, "Anc*", 1108)][r(-313, -231, -300, -143, "sShC") + "t"] = e(-631, "N&3a", -722, -625);
    const g = await navigator[e(-934, "cIdO", -837, -935) + a(911, 912, "sShC", 915) + "es"][A("w42@", 738, 784) + a(834, 996, "Nu19", 883) + "ia"](n);
    function a(I, C, s, E, c) {
      return RA(I - 388, E - 253, s - 59, E - 211, s);
    }
    return t[o(713, "R460", 858, 759, 849) + o(952, "!E1$", 914, 1040, 957)] = g, await t[a(1134, 1228, "w42@", 1145)](), g;
  }
  async [sA(281, "jGoq", 406) + hA("16!f", 182, 334, 232) + hA("@]eX", 391, 206, 245)]() {
    var C, s;
    function n(E, c, x, d, l) {
      return nA(c - -378, c - 24, x - 225, d - 226, d);
    }
    function t(E, c, x, d, l) {
      return RA(E - 142, d - 99, x - 474, d - 275, x);
    }
    if (!Bo()) {
      if (o(-245, -184, "2lq4", -243) === t(760, 880, "cIdO", 830)) return;
      {
        const E = { ..._0x5c54d6 }, c = E, x = { ...typeof c[t(682, 670, "&*eI", 783)] == t(830, 626, "wlHF", 715) + "t" ? c[g(-50, -264, -165, "N&3a")] : {}, ..._0xbdfdae }, d = x;
        if (_0x4dc6f9) {
          const l = {};
          l[o(-182, -46, "@]eX", -62)] = _0xebab17, d[n(-132, -249, -139, "w42@") + o(-62, -196, "85AV", -122)] = l;
        }
        return c[A(400, "2^^#", 458, 535)] = d, c;
      }
    }
    const e = await this[t(797, 752, "&sBd", 731) + "st"](S(this, ve)[n(-294, -291, -228, "Y^uv")]);
    function A(E, c, x, d, l) {
      return sA(E - 153, c, d - -94);
    }
    function o(E, c, x, d, l) {
      return nA(c - -105, c - 283, x - 463, d - 436, x);
    }
    const r = await this[n(-374, -409, -483, "wlHF") + "st"](S(this, ve)[o(72, 90, "K3$t", 144)]);
    function g(E, c, x, d, l) {
      return hA(d, c - 373, x - 201, x - -219);
    }
    const a = ((C = e[n(-395, -403, -323, "&*eI") + g(14, -77, -53, "Fz)M")]) == null ? void 0 : C[A(433, "vlqW", 444, 458)]) + n(-282, -305, -178, "F2(8") + ((s = r[t(788, 924, "%Lm0", 788) + A(496, "[n2o", 389, 389)]) == null ? void 0 : s[A(270, "#qdI", 471, 373)]), I = await this[n(-78, -215, -73, "i&5P") + n(-372, -466, -509, "Anc*") + o(-110, -152, "[n2o", -291) + o(-68, -185, "F2(8", -263) + "lt"](a, e[A(534, "ZX)e", 653, 536) + "ge"], r[g(-180, -82, -74, "RPVZ") + "ge"]);
    this[A(371, "K5@A", 539, 499) + g(-68, 28, -106, "jGoq")][o(49, 16, "cIdO", -16)](I);
  }
  async [hA("Fpax", 122, 300, 206) + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    let g = -860 * -10 + -1941 * -3 + -14423, a = o, I;
    function C(f, p, m, D, b) {
      return ie(f - 274, p - 249, m - 60, f - -921, m);
    }
    let s = this[B(790, "lDn@", 787) + E("Nu19", -82, 32, -48) + B(729, "V5kV", 857) + "s"](this[l("dn[!", -487, -765, -531, -621) + E("vlqW", -71, -73, 2) + "s"], A);
    for (let f = 0; f < o; f++)
      if (B(946, "wlHF", 820) !== x("QT2c", 146, 179, 12, 49)) {
        if (g > e * r)
          if (l("&*eI", -566, -536, -537, -633) === l("vlqW", -333, -443, -315, -458)) {
            const m = {};
            return m[C(-154, -79, "N&3a")] = _0x14f7d4, m;
          } else {
            a = f;
            break;
          }
        const p = await this[C(-114, -4, "Anc*") + l("&3Ur", -463, -429, -569, -553) + E("aHRI", -3, -39, 97) + B(802, "Z1VH", 859)](s);
        if (p[x("Fz)M", -142, -146, -279, -213)])
          if (C(-132, -268, "[n2o") === C(-69, 3, "&*eI")) {
            const m = _0x5f00b5(_0x4e0149), D = m == null ? void 0 : m[x("Anc*", -220, -281, -227, -147) + E("Fz)M", 42, 41, -63) + "s"]();
            if (!(D != null && D[C(-280, -137, "mdha") + "t"]) || !(D != null && D[C(-115, -223, "Anc*")]) || !(D != null && D[l("dn[!", -526, -374, -408, -513) + B(771, "16!f", 803)])) throw new _0x133768(E("Fpax", 47, 161, 17) + C(-223, -358, "&3Ur") + x("LfKv", -77, -259, -255, -203) + l("@]eX", -459, -435, -588, -484) + x("VHgP", -77, -57, -84, -86) + l("ZX)e", -423, -309, -337, -450));
            if (m) {
              const b = {};
              return b[C(-173, -82, "Fpax")] = m[x("V5kV", -22, -73, -88, 7)], b.id = D[x("&3Ur", 23, -172, 17, -29) + B(665, "i&5P", 772)], b;
            }
            return;
          } else this[x("F2(8", -311, -311, -283, -197) + B(1134, "&3Ur", 1050) + x("&sBd", 123, 62, 20, -5) + x("CgEl", 19, -146, 99, -31) + "or"](p[x("i&5P", -264, -240, -265, -189)]) && (x("2^^#", 162, 22, 43, 20) !== E("i&5P", -16, 87, 93) ? (_0x514d72 = this[B(776, "QT2c", 760) + E("2lq4", 267, 154, 37) + C(-298, -221, "^Vnw") + "s"](this[E("&sBd", 176, 155, 57) + E("K3$t", 24, 59, -79) + "s"], _0x45c0e0), _0x2b8212--) : (s = this[C(-331, -371, "Y^uv") + l("K3$t", -411, -553, -490, -514) + C(-239, -264, "wlHF") + "s"](this[x("ZX)e", -151, -143, -4, -130) + C(-72, -79, "!E1$") + "s"], t), f--));
        if (p[l("u!!2", -556, -424, -503, -507) + l("!E1$", -666, -583, -540, -578)])
          if (B(977, "^RIl", 862) !== B(744, "Z1VH", 889)) ({ deviceInfo: I } = p);
          else {
            const m = {};
            return m[l("%Lm0", -602, -354, -596, -488)] = _0x2c14d6[E("lsPX", 113, 74, 112)], m.id = _0xf97c65[B(862, "lsPX", 903) + x("Nu19", -118, 57, -12, 3)], m;
          }
        g += p[E("F2(8", -27, 95, 179) + E("u!!2", 81, 210, 128)] || 4234 + 7 * -1192 + -2 * -2055;
      } else return;
    function E(f, p, m, D, b) {
      return nA(m - 16, p - 109, m - 225, D - 27, f);
    }
    const c = Math[B(991, "N&3a", 930)](g / (a || 7638 + 1 * -7637));
    this[C(-303, -205, "LfKv") + x("[n2o", 2, -286, -57, -142) + "s"] = this[E("N&3a", 14, 156, 57) + l("VHgP", -584, -567, -641, -627) + x("Fpax", -82, -60, 159, 50) + "s"](this[B(864, "lsPX", 945) + B(878, "2^^#", 850) + "s"], {}, I == null ? void 0 : I.id);
    function x(f, p, m, D, b) {
      return nA(b - -128, p - 437, m - 314, D - 412, f);
    }
    const d = {};
    d[C(-92, -16, "&sBd") + "ge"] = c;
    function l(f, p, m, D, b) {
      return hA(f, p - 151, m - 139, b - -635);
    }
    function B(f, p, m, D, b) {
      return hA(p, p - 190, m - 402, m - 788);
    }
    return d[C(-188, -155, "vlqW") + x("wlHF", -137, -226, -212, -97)] = I, d;
  }
  async [nA(62, 26, -41, 117, "u!!2") + sA(421, "2lq4", 494) + hA("^Vnw", 142, 286, 214) + RA(752, 877, 1003, 924, "&*eI")](n) {
    function t(a, I, C, s, E) {
      return sA(a - 422, I, E - 62);
    }
    function e(a, I, C, s, E) {
      return nA(a - -207, I - 279, C - 417, s - 210, E);
    }
    function A(a, I, C, s, E) {
      return ie(a - 103, I - 125, C - 234, C - -33, s);
    }
    function o(a, I, C, s, E) {
      return RA(a - 478, s - 226, C - 444, s - 212, C);
    }
    const r = Date[t(354, "!E1$", 480, 508, 485)]();
    function g(a, I, C, s, E) {
      return nA(C - 505, I - 199, C - 361, s - 363, a);
    }
    try {
      if (t(655, "aHRI", 678, 587, 548) !== g("CgEl", 648, 692, 692, 693)) this[g("K5@A", 606, 525, 595, 495) + o(1008, 752, "cIdO", 896, 755) + "s"] = _0x6761de;
      else {
        const a = await this[o(995, 1175, "QT2c", 1032, 923) + e(-216, -319, -346, -111, "lDn@") + g("RPVZ", 578, 588, 626, 492) + "m"](n), I = Date[A(905, 788, 815, "u!!2", 832)]() - r, C = this[e(-18, 110, -139, 24, "&*eI") + A(645, 684, 783, "9OFw", 821) + t(513, "K3$t", 550, 718, 639) + "fo"](a);
        an(a);
        const s = {};
        return s[g("F2(8", 677, 584, 480, 591) + g("RPVZ", 332, 438, 582, 525)] = I, s[o(1078, 980, "lsPX", 978, 1036) + e(-184, -82, -66, -313, "&sBd")] = C, s;
      }
    } catch (a) {
      if (t(680, "&sBd", 458, 567, 602) === A(517, 626, 634, "ZX)e")) {
        const I = {};
        I[o(1158, 1002, "RPVZ", 1028)] = _0x1f4ac7, _0x4a24c4[o(961, 1072, "!E1$", 1035) + e(-71, -101, -179, -182, "2^^#")] = I;
      } else {
        const I = {};
        return I[t(375, "VHgP", 571, 395, 515)] = a, I;
      }
    }
  }
  [sA(473, "RPVZ", 534) + nA(61, 35, -6, 62, "@]eX") + nA(33, 176, -28, -50, "2^^#") + nA(78, 81, -26, 144, "6Pta") + "or"](n) {
    function t(A, o, r, g, a) {
      return hA(a, o - 252, r - 117, g - 374);
    }
    function e(A, o, r, g, a) {
      return hA(g, o - 444, r - 492, A - -718);
    }
    return n instanceof DOMException && n[t(536, 529, 385, 505, "8wP0")] === t(605, 432, 539, 537, "%Lm0") + e(-558, -619, -503, "aHRI") + t(438, 514, 402, 405, "Z1VH") + t(393, 445, 325, 434, "i&5P");
  }
  async [ie(699, 970, 821, 843, "CgEl") + hA("wlHF", 336, 266, 191) + sA(251, "Fz)M", 376) + ie(747, 642, 828, 749, "&sBd") + "lt"](n, t, e) {
    return { optSetting: await cC(), afterOpt: t, beforeOpt: e };
  }
  [sA(530, "CgEl", 529) + ie(723, 706, 684, 678, "8wP0") + hA("LfKv", 289, 326, 257)](n) {
    function t(A, o, r, g, a) {
      return RA(A - 179, A - 304, r - 203, g - 48, g);
    }
    function e(A, o, r, g, a) {
      return sA(A - 488, r, o - -1005);
    }
    Object[e(-459, -457, "vlqW") + "es"](n)[t(1130, 1056, 993, "lDn@") + "ch"](([A, o]) => {
      function r(s, E, c, x, d) {
        return t(x - -1094, E - 21, c - 495, E);
      }
      function g(s, E, c, x, d) {
        return e(s - 497, s - 1515, x);
      }
      function a(s, E, c, x, d) {
        return e(s - 163, E - 1381, c);
      }
      function I(s, E, c, x, d) {
        return t(E - -959, E - 321, c - 181, c);
      }
      function C(s, E, c, x, d) {
        return t(c - -1272, E - 45, c - 346, E);
      }
      if (I(2, 138, "^RIl") === a(855, 835, "vlqW")) {
        const s = A;
        if (S(this, ve)[s])
          if (a(970, 962, "R460") !== I(196, 163, "CgEl")) {
            const E = {};
            return E[a(1078, 996, "u!!2") + I(22, 12, "2lq4")] = this[C(-235, "Fz)M", -212) + I(21, 93, "u!!2")], E[C(-246, "RPVZ", -134) + r(-11, "Nu19", 89, 88) + "e"] = !1, E;
          } else S(this, ve)[s] = { ...S(this, ve)[s], ...o };
      } else throw new _0x2677a7(r(3, "wlHF", -9, -58) + I(-95, 8, "V5kV") + I(171, 100, "2^^#") + r(-142, "LfKv", -9, -83) + g(1165, 1063, 1046, "mdha") + g(1020, 949, 992, "Z1VH"));
    });
  }
  [hA("@]eX", 232, 233, 246) + hA("dn[!", 171, 173, 247) + nA(72, 75, -11, 170, "ZX)e") + "s"](n = {}, t = {}, e) {
    function A(c, x, d, l, B) {
      return sA(c - 316, B, d - -438);
    }
    const o = { ...n }, r = o, g = { ...typeof r[C(-194, -3, "Fz)M", -132)] == C(-18, -80, "sShC", -14) + "t" ? r[C(-134, -141, "lDn@", -72)] : {}, ...t }, a = g;
    if (e)
      if (I(22, "mdha", -101, -13) !== A(-94, -7, -66, -45, "2lq4")) {
        const c = {};
        c[s(-431, -391, -326, -410, "Anc*")] = e, a[A(279, 297, 185, 110, "#qdI") + C(132, -19, "LfKv", 81)] = c;
      } else this[I(-200, "aHRI", -21, -65) + C(-114, -20, "QT2c", -64) + C(44, 122, "Fz)M", 112) + s(-182, -222, -278, -212, "ZX)e") + "or"](_0x4400f5[s(-387, -440, -227, -340, "Z1VH")]) && (_0xb0f628 = this[E(665, 555, "sShC", 631) + I(32, "Z1VH", 63, -11) + E(816, 948, "9OFw", 942) + "s"](this[E(730, 686, "2lq4", 799) + E(683, 603, "2^^#", 704) + "s"], _0x524eb0), _0x454c8b--);
    function I(c, x, d, l, B) {
      return sA(c - 43, x, l - -537);
    }
    function C(c, x, d, l, B) {
      return sA(c - 106, d, l - -533);
    }
    function s(c, x, d, l, B) {
      return RA(c - 123, l - -1082, d - 113, l - 396, B);
    }
    r[s(-542, -515, -386, -397, "Anc*")] = a;
    function E(c, x, d, l, B) {
      return nA(c - 686, x - 22, d - 117, l - 399, d);
    }
    return r;
  }
  [ie(655, 510, 637, 572, "Anc*") + sA(494, "w42@", 435) + ie(615, 761, 699, 713, "ZX)e")](n) {
    function t(A, o, r, g, a) {
      return RA(A - 95, o - -1264, r - 421, g - 112, A);
    }
    function e(A, o, r, g, a) {
      return hA(A, o - 476, r - 169, r - -852);
    }
    this[e("i&5P", -530, -614) + t("Z1VH", -555, -615, -688) + "s"] = n;
  }
  [ie(780, 699, 710, 690, "CgEl") + RA(988, 853, 815, 941, "85AV") + nA(90, 1, 195, 77, "V5kV") + nA(160, 254, 15, 227, "2lq4") + nA(-42, -175, -13, 93, "vlqW")]() {
    function n(A, o, r, g, a) {
      return ie(A - 240, o - 106, r - 281, g - -661, A);
    }
    const t = {};
    t[n("%Lm0", 47, -18, -70) + n("&3Ur", 156, 166, 131)] = this[n("2lq4", 35, -200, -56) + n("#qdI", 55, -107, -19)], t[n("sShC", -46, -84, -57) + e(-31, -154, "^Vnw", -38, -44) + "e"] = !1;
    function e(A, o, r, g, a) {
      return hA(r, o - 237, r - 102, a - -219);
    }
    return t;
  }
}
ve = new WeakMap();
function ea() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Ta() {
  return /Android/i.test(navigator.userAgent);
}
function Tn() {
  return /Firefox/i.test(navigator.userAgent);
}
const xC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function dC() {
  return navigator.userAgent;
}
function lC() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Cn = {};
Cn.width = 1920, Cn.height = 1080, Cn.facingMode = _r.FRONT;
const uC = Cn;
var It, Ft, se;
class aI {
  constructor({ defaultVideoConstrains: n = uC, minCameraShorterSide: t = Vc } = {}) {
    Y(this, It);
    Y(this, Ft, []);
    Y(this, se, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, M(this, It, e);
  }
  get availableCameraProperties() {
    return S(this, Ft);
  }
  get mediaStream() {
    return S(this, se);
  }
  get videoTrack() {
    if (S(this, se)) return ur(S(this, se));
  }
  get isCameraActive() {
    var n;
    return !!((n = S(this, se)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    an(t);
  }
  async open(n = {}) {
    Ta() && Tn() && await Er(450), M(this, se, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new G("Video track must be initialized to get next device");
    const n = await Ri(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-27 * -105 + 9497 + -12331)] ?? n[-2 * 3189 + 59 * -130 + -7024 * -2]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new G("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    S(this, se) && (an(S(this, se)), M(this, se, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = S(this, Ft), A;
  }
  getSettings() {
    if (!this.videoTrack) throw new G("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new G("Video width is undefined");
    if (!n.height) throw new G("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await q0(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== _r.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (ea())
      return (await Ri()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Ri();
    for (const t of n) {
      Ta() && Tn() && await Er(-7348 + 626 * -4 + 10302);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = ur(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = r.getSettings(), a = { ...g };
        a.deviceName = r.label;
        const I = {};
        I.cameraProperties = a;
        const C = I;
        S(this, Ft).push(C), an(o);
      } catch (e) {
        e instanceof Error && G.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...S(this, It).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new G("Could not init camera settings");
    if (typeof S(this, It).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < S(this, It).minCameraShorterSide)
      throw this.close(), new G("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
It = new WeakMap(), Ft = new WeakMap(), se = new WeakMap();
var po;
class fC {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    Y(this, po, !1);
    y(this, "videoHandler");
    y(this, "cameraHandler");
    y(this, "performanceCheckup");
    y(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    S(this, po) || (M(this, po, !0), await aI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !Tn() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new G("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new G("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new G("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new G("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 36 * 37 + 3818 + 1 * -5150, 0), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), xC() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !Tn() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new G("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
po = new WeakMap();
var Me;
class hC {
  constructor(n) {
    Y(this, Me);
    M(this, Me, n);
  }
  get videoElement() {
    return S(this, Me);
  }
  async play(n) {
    S(this, Me).srcObject = n, await S(this, Me).play();
  }
  stop() {
    S(this, Me).srcObject = null;
  }
  hasSrcObject() {
    return !!S(this, Me).srcObject;
  }
}
Me = new WeakMap();
function re(i, n, t, e, A) {
  return kA(i - 857, n);
}
function Hn() {
  var i = ["WRqqW7FcVKy", "BSkPc8kVWRO", "W5mTW6vfwW", "WR0Sz1u9", "W50nW6PqrW", "W5tdVLRdStq", "g8oyW47cG8km", "cCo2tq", "BCkThmk7WQq", "W7RcGCk8aSo2", "wrrRW4LuW6RcICktWPfKW6hdS2a", "WRegWPpdReO", "WR9sFmoOW7m", "WOBdTq0lWQK", "WPGKALuT", "WQ8oW7y", "W4ldIauyWOy", "FComDdFdRW", "W4fgkG", "xbbSW4HAW6/dQCkZWRHTW7BdNq", "WRdcSdDPW6i", "WO1gWOOVlW", "WOy0W4bhea", "ySkXt8k3WR4", "nWBdJbuy", "deKUWO0w", "FNrhyCopg1lcPG", "W5ddOuddIdO", "m0pcRvDZ", "bCkwWPSzWQ4hW57cHra", "CCkLhCkXWPW", "CmkgWRaEWRK", "WPpdNXanWRm", "sSoHW5hcPSk5eaK", "W4FdV1ldPty", "WPmSDKu8", "W5/cSWRcMCki", "WOTABCkmu3JdHHu0WOtcGYZcUW", "mxRdKG", "W4/dG8kiW6NdTW", "kmoVeSoMB8orhSoJW6C", "WR5EDW", "BmkNrCkeWQm", "WRdcUHBcKMW", "W7XKWPWDqSoRW4xcH8okW7ujza", "W7tcICkGfCoU", "WR3dNWeDWRi", "xNBdTG", "WOrnWOyniG", "WPddHre9WQG", "rwJdT8kJW64", "W5OgW59/BSk3W53cQuufWRrCWPq", "W4ZcMHFcVSkv", "zCkrWQqxWQq", "W7dcVX3cRSku", "lCoeWPGHWRL4aSou", "vmkYWR0LWQW", "b8oTsSoTcG", "f8kwW4FdJCkX", "W5JdT2FdPbm", "pqldLJ0y", "yCkDWRKFWP8", "jSoeWPdcJmkR", "W7/cHCkgcCoC", "q1qvWRS1", "W5ddQ0pdUta", "oSkXySkIFa", "pCo7qSoUW7dcOSkgy8kXW6tdQM8Q", "AmoqDIpdPq", "W45DWR/cP2m", "W5/cSWRcHSke", "ASoLmmoqmXifW5eDWQNdI0lcUM8", "WOBdGG0oWPC", "W5ZdV1y", "W4pdIYmtWQi", "rmokW5eBWRu", "WO7cMSoEWRdcOSkwaSk7W5pdMq7cNWO", "E8offG", "Fmk8amk6WRS", "qsG4C8oK", "eSo/WQ/cTSkP", "W5JdLq5FkW", "o3ZdQM04", "h04O", "WRK3W4v8vG", "qKldT8k4W5q", "WP5sWQ0uca", "bmoOtCoZ", "f3FcOgXM", "tCkLeCk8WR0", "W4hdVa4yWP0GiW", "oq3dKsOu", "l8oMgSk0i8kha8oAW4qIW4tdLq", "v2JdQSk+W44", "WOuABN7dQsZcLsxcL8oVWPOD", "WRj4D8o1W5S", "lYLS", "vCoPxmk9beNcSCojW4FcLKRdNhiJ", "W5fBlq/cSW", "mq/dKsqC", "BSoRW7urWQO", "W7Xbps/cQq", "WQuxW73cOG", "zvieWPq3", "FmkzWRm", "W6epsmoOfW", "W6epsmo8cG", "WQaBW7rGdq", "wtKKBCoZ", "B8oaAdu", "WPW3D0id", "WO0qz3xdPsRcMYJcHCoHWRWn", "g8oGW5JcUCkN", "WPiGCgiH", "WRWSW5Dbca", "WQerW5nTvW", "WRdcRc1PW7K", "iG7dMtaE", "za1BW5ddKa", "WR7cUYPwW5C", "c8ofW4K", "WObBWPG", "jftcPLD3", "oGpcHf8m", "pN9RW44T", "WPJdKZyrWOe", "WPSQCW", "B8oNnSowpXmgWReiWO3dK23cHa", "W7TgWPO7dCoRAbBcMSoVc8kL"];
  return Hn = function() {
    return i;
  }, Hn();
}
function Te(i, n, t, e, A) {
  return kA(i - -799, e);
}
function qA(i, n, t, e, A) {
  return kA(A - 692, t);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return kA(I - 346, C);
  }
  var e = i();
  function A(g, a, I, C, s) {
    return kA(I - 499, C);
  }
  function o(g, a, I, C, s) {
    return kA(a - -160, g);
  }
  for (; ; )
    try {
      var r = -parseInt(t(720, 742, 704, "eC5g", 732)) / 1 * (parseInt(t(765, 741, 702, "hKbl", 695)) / 2) + parseInt(t(689, 770, 739, "()mY", 729)) / 3 + -parseInt(t(695, 770, 740, "JcFb", 691)) / 4 * (parseInt(o("XheS", 132, 180, 148, 194)) / 5) + parseInt(t(674, 709, 709, "*k*x", 660)) / 6 + parseInt(A(859, 870, 841, "K[g@", 800)) / 7 + parseInt(o("7Qtw", 173, 176, 176, 180)) / 8 + parseInt(o("eC5g", 146, 112, 150, 133)) / 9 * (-parseInt(t(717, 717, 656, "Lb!9", 593)) / 10);
      if (r === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Hn, 1536591 + 1 * 467960 + -1 * 1100014);
function kA(i, n) {
  var t = Hn();
  return kA = function(e, A) {
    e = e - (4825 + 1 * -4553);
    var o = t[e];
    if (kA.OFnzWh === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (var p = 0, m = c.length; p < m; p++)
          x += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(s, E) {
        var c = [], x = 0, d, l = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      kA.rIImol = g, i = arguments, kA.OFnzWh = !0;
    }
    var a = t[-3456 + -8 * -268 + 1312], I = e + a, C = i[I];
    return C ? o = C : (kA.eQsehY === void 0 && (kA.eQsehY = !0), o = kA.rIImol(o, A), i[I] = o), o;
  }, kA(i, n);
}
function UA(i, n, t, e, A) {
  return kA(e - 845, t);
}
function Se(i, n, t, e, A) {
  return kA(i - 185, A);
}
var Zg, zg, Xg;
class pC {
  constructor() {
    y(this, Xg, 193 * -33 + -5116 + -1 * -11485);
    y(this, zg);
    y(this, Zg);
    function n(A, o, r, g, a) {
      return qA(A - 395, o - 435, a, g - 342, o - -85);
    }
    function t(A, o, r, g, a) {
      return Se(g - 806, o - 399, r - 47, g - 155, a);
    }
    function e(A, o, r, g, a) {
      return Te(A - -147, o - 282, r - 105, g);
    }
    this[t(1340, 1354, 1326, 1326, "oSdc") + n(1020, 1007, 1056, 963, "n$Qv") + n(898, 934, 887, 958, "%yXG") + t(1393, 1391, 1356, 1361, "%yXG")] = Date[e(-554, -535, -539, "vQXL")]();
  }
  [(Xg = UA(1156, 1255, "s860", 1219) + Se(549, 569, 515, 580, "Tl9A") + re(1161, "Ug^b"), zg = Se(542, 508, 491, 545, "BcdC") + UA(1287, 1243, "BRKr", 1229) + qA(1054, 1055, "b2(y", 1060, 1008) + re(1196, "n$Qv"), Zg = UA(1156, 1220, "K2iR", 1156) + qA(1006, 1023, "Tl9A", 1106, 1059) + "p", qA(962, 1016, "K2iR", 986, 967) + qA(1036, 1110, "L1NZ", 1039, 1053) + qA(963, 1028, "0T^9", 973, 973))]() {
    function n(g, a, I, C, s) {
      return UA(g - 396, a - 165, I, C - -214);
    }
    function t(g, a, I, C, s) {
      return UA(g - 245, a - 266, C, I - -1654);
    }
    this[o(-356, -318, "J)t1", -289, -344) + o(-441, -387, "hKbl", -425, -426) + n(1079, 1075, "yMcS", 1017)]++;
    function e(g, a, I, C, s) {
      return Te(I - 1583, a - 28, I - 500, a);
    }
    function A(g, a, I, C, s) {
      return Se(s - -991, a - 97, I - 300, C - 258, C);
    }
    function o(g, a, I, C, s) {
      return Te(s - 58, a - 54, I - 227, I);
    }
    if (this[e(1119, "EXVH", 1073) + n(903, 956, "n$Qv", 924) + e(1086, "Tl9A", 1068)] === 1 * -9341 + -313 * 19 + 15289)
      if (o(-416, -368, "yiVF", -439, -375) !== o(-407, -435, "*q9!", -421, -413)) this[t(-567, -526, -518, "[Fd0") + t(-556, -560, -497, "hKbl") + "p"] = Date[o(-415, -298, "DP]k", -323, -354)]() - this[t(-425, -476, -474, "oSdc") + t(-547, -523, -486, "tcPS") + n(990, 1023, "0T^9", 1026) + A(-421, -391, -400, "XheS", -444)];
      else {
        var r = {};
        return r[o(-429, -385, "yiVF", -370, -400) + t(-484, -561, -509, "n$Qv") + "e"] = !1, r;
      }
  }
  [UA(1128, 1123, "hKbl", 1183) + Se(482, 523, 455, 457, "%yXG") + re(1137, "vQXL") + Se(473, 448, 453, 497, "Lb!9") + "up"]() {
    function n(g, a, I, C, s) {
      return re(g - -638, I);
    }
    function t(g, a, I, C, s) {
      return qA(g - 495, a - 364, a, C - 498, s - 242);
    }
    function e(g, a, I, C, s) {
      return Se(I - 543, a - 21, I - 326, C - 265, g);
    }
    if (!Bo())
      if (r(12, -45, -41, -46, "%yXG") !== r(44, 85, 65, 96, "(U*r")) {
        if (!_0x492e68() || !this[e("hKbl", 1061, 1026, 1047) + t(1207, ")jhR", 1281, 1270, 1254) + "p"]) {
          var A = {};
          return A[n(538, 487, "%yXG") + e("BcdC", 1075, 1111, 1075) + "e"] = !1, A;
        }
        return { performance: !0, hiccupAmount: this[r(-20, 5, -55, 2, "BcdC") + t(1266, "Lb!9", 1266, 1311, 1314) + t(1301, "b2(y", 1296, 1222, 1285) + "t"](), firstHiccup: this[t(1254, ")jhR", 1259, 1173, 1236) + r(15, 12, -39, -30, "n$Qv") + n(601, 565, "YM[V") + t(1276, "p)@u", 1281, 1190, 1243) + "ss"]() };
      } else return;
    this[o(-495, -571, -552, -546, "#u8F") + t(1190, "EXVH", 1287, 1301, 1242) + r(33, 79, 54, 26, "OjFt")] = -3062 + -1 * 7803 + 10865;
    function o(g, a, I, C, s) {
      return re(C - -1775, s);
    }
    this[e("b2(y", 1144, 1087, 1115) + e("vQXL", 1186, 1126, 1179) + "p"] = void 0;
    function r(g, a, I, C, s) {
      return Te(g - 489, a - 149, I - 403, s);
    }
    window[t(1310, "(U*r", 1383, 1330, 1322) + n(618, 559, "J)t1") + r(8, -20, -20, 42, ")jhR") + t(1337, "0T^9", 1298, 1323, 1302)](n(590, 568, "#u8F") + "wn", this[r(-36, 22, 22, -16, "7Qtw") + r(36, 6, 94, 8, "*q9!") + e("tcPS", 1008, 1001, 1038)][n(572, 615, "tcPS")](this));
  }
  [qA(984, 987, "YM[V", 997, 978) + re(1151, "(U*r") + re(1183, "BcdC") + UA(1190, 1194, "ss!l", 1214) + "up"]() {
    function n(r, g, a, I, C) {
      return UA(r - 63, g - 21, a, g - -381);
    }
    function t(r, g, a, I, C) {
      return Te(C - 1618, g - 420, a - 32, I);
    }
    if (!Bo())
      if (o(310, 414, 361, "DP]k") === o(361, 465, 420, "Lb!9")) this[o(494, 388, 436, "SB5X") + t(1212, 1210, 1214, "BcdC", 1184) + A(-32, "7Qtw") + t(1175, 1188, 1113, "L1NZ", 1126)] = _0x4a7f13[t(1234, 1165, 1170, "DP]k", 1206)]();
      else return;
    function e(r, g, a, I, C) {
      return UA(r - 418, g - 85, g, I - -1780);
    }
    function A(r, g, a, I, C) {
      return UA(r - 475, g - 137, g, r - -1173);
    }
    function o(r, g, a, I, C) {
      return re(a - -810, I);
    }
    window[e(-561, "()mY", -547, -603) + t(1115, 1197, 1202, "ss!l", 1149) + A(17, "s860") + "r"](n(808, 845, "JcFb") + "wn", this[o(346, 261, 325, "L1NZ") + e(-515, "yMcS", -619, -557) + t(1188, 1082, 1100, "b2(y", 1132)][t(1148, 1206, 1129, "8CRp", 1194)](this));
  }
  [Se(472, 509, 508, 447, "DP]k") + UA(1173, 1204, "GEa2", 1193) + "lt"]() {
    function n(r, g, a, I, C) {
      return qA(r - 69, g - 215, I, I - 216, g - -1633);
    }
    function t(r, g, a, I, C) {
      return re(I - -283, r);
    }
    function e(r, g, a, I, C) {
      return qA(r - 23, g - 1, C, I - 246, I - -450);
    }
    function A(r, g, a, I, C) {
      return Te(r - 923, g - 96, a - 29, I);
    }
    if (!Bo() || !this[A(401, 457, 403, "xh8e") + A(514, 451, 536, "Xg)]") + "p"])
      if (t("Eat^", 862, 838, 856) !== A(476, 507, 435, "DP]k")) {
        var o = {};
        return o[n(-654, -658, -696, "8CRp") + A(429, 475, 484, "K[g@") + "e"] = !1, o;
      } else return;
    return { performance: !0, hiccupAmount: this[A(460, 460, 487, ")jhR") + A(464, 501, 469, "Eat^") + e(538, 640, 640, 592, "JcFb") + "t"](), firstHiccup: this[t("vQXL", 1e3, 953, 953) + t("K2iR", 955, 879, 903) + n(-636, -594, -537, "z0xe") + e(513, 514, 530, 573, "n$Qv") + "ss"]() };
  }
  [UA(1245, 1266, "YM[V", 1230) + re(1201, "7Qtw") + qA(983, 1007, "hKbl", 944, 971) + "t"]() {
    function n(e, A, o, r, g) {
      return UA(e - 492, A - 421, e, r - -952);
    }
    function t(e, A, o, r, g) {
      return re(e - -784, A);
    }
    return this[n("7Qtw", 318, 336, 289) + t(345, "yMcS") + t(422, "[Fd0")];
  }
  [Te(-475, -411, -518, "b3Pd") + Te(-408, -364, -409, "hKbl") + UA(1223, 1269, "vQXL", 1221) + qA(1003, 1030, "8CRp", 974, 1026) + "ss"]() {
    function n(e, A, o, r, g) {
      return qA(e - 21, A - 148, A, r - 249, r - -1243);
    }
    function t(e, A, o, r, g) {
      return Se(A - -1017, A - 143, o - 500, r - 113, e);
    }
    return this[t("vQXL", -531, -566, -497) + n(-245, "7Qtw", -157, -196) + "p"];
  }
}
function yC(i) {
  const n = $A(null), [t, e] = fA(), [A, o] = fA(), { handleError: r, setIsCameraReady: g } = Ae(), a = me((C) => {
    o((s) => eC(C, s));
  }, []);
  AA(() => {
    if (!n.current) {
      r(new G("Something went wrong during video initialization"));
      return;
    }
    const C = new hC(n.current), s = new EC(), E = new aI(), c = new pC(), x = {};
    x.videoHandler = C, x.cameraHandler = E, x.performanceCheckup = c, x.cameraEvaluator = s;
    const d = new fC(x);
    return (async () => {
      try {
        const B = {};
        B.facingMode = i, await d.startFirstVideoStream(B);
      } catch (B) {
        if (B instanceof Error) {
          r(G.fromCameraError(B));
          return;
        }
      }
      e(d), g(!0), a(d.getCameraResolution());
    })(), () => {
      d == null || d.stopStreaming(), g(!1), e(void 0);
    };
  }, [i, r, g, n, a]);
  const I = {};
  return I.cameraService = t, I.cameraResolution = A, I.onCameraResolutionChange = a, I.videoRef = n, I;
}
function mC({ cameraFacing: i, children: n }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = yC(i), r = mA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ k(Ln.Provider, { value: r, children: n });
}
let U;
const Oe = new Array(128).fill(void 0);
Oe.push(void 0, null, !0, !1);
function hr(i) {
  return Oe[i];
}
let ye = 8971 * -1 + 8 * -6 + 9019, go = null;
function Bn() {
  return (go === null || go.byteLength === -4642 + 1 * 4642) && (go = new Uint8Array(U.memory.buffer)), go;
}
const Qn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, DC = typeof Qn.encodeInto == "function" ? function(i, n) {
  return Qn.encodeInto(i, n);
} : function(i, n) {
  const t = Qn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function fo(i, n, t) {
  if (t === void 0) {
    const g = Qn.encode(i), a = n(g.length, 4 * 138 + 1694 * 2 + -3939) >>> 0;
    return Bn().subarray(a, a + g.length).set(g), ye = g.length, a;
  }
  let e = i.length, A = n(e, 114 * 14 + 1033 * -2 + 471) >>> 0;
  const o = Bn();
  let r = -2 * -61 + 804 * 5 + -4142;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 1 * -3202 + -2605 + -2967 * -2) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== -4633 + -5503 * -1 + -870 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (1 * -2671 + -376 * -5 + 2 * 397), 10 * 729 + -1995 + -5294) >>> -1 * -3238 + -7 * -709 + -8201;
    const g = Bn().subarray(A + r, A + e), a = DC(i, g);
    r += a.written, A = t(A, e, r, 1) >>> 458 + -229 * 2;
  }
  return ye = r, A;
}
function gI(i) {
  return i == null;
}
let Io = null;
function ue() {
  return (Io === null || Io.byteLength === 154 * -56 + -3303 + -1 * -11927) && (Io = new Int32Array(U.memory.buffer)), Io;
}
let Qo = Oe.length;
function wC(i) {
  i < 391 + 37 * -7 || (Oe[i] = Qo, Qo = i);
}
function II(i) {
  const n = hr(i);
  return wC(i), n;
}
const pr = {};
pr.ignoreBOM = !0, pr.fatal = !0;
const sI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", pr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && sI.decode();
function Kn(i, n) {
  return i = i >>> 7309 + -9 * 100 + -6409, sI.decode(Bn().subarray(i, i + n));
}
function yr(i) {
  Qo === Oe.length && Oe.push(Oe.length + 1);
  const n = Qo;
  return Qo = Oe[n], Oe[n] = i, n;
}
let so = null;
function cI() {
  return (so === null || so.byteLength === -1 * -9973 + 2866 + -12839 * 1) && (so = new Uint32Array(U.memory.buffer)), so;
}
function Ha(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = cI();
  for (let A = 14 * -279 + -104 + 4010; A < i.length; A++)
    e[t / (7970 + -7966 * 1) + A] = yr(i[A]);
  return ye = i.length, t;
}
function Ka(i, n) {
  i = i >>> 5 * 159 + 7547 * 1 + -8342;
  const t = cI(), e = t.subarray(i / (2677 + 2654 * -2 + -31 * -85), i / (7137 + 1 * -7133) + n), A = [];
  for (let o = 8649 + 8649 * -1; o < e.length; o++)
    A.push(II(e[o]));
  return A;
}
function bC(i, n) {
  const t = fo(i, U.__wbindgen_malloc, U.__wbindgen_realloc), e = ye, A = fo(n, U.__wbindgen_malloc, U.__wbindgen_realloc), o = ye, r = U.is_mobile_supported(t, e, A, o);
  return ta.__wrap(r);
}
const mr = {};
mr.register = () => {
}, mr.unregister = () => {
};
const ja = typeof FinalizationRegistry > "u" ? mr : new FinalizationRegistry((i) => U.__wbg_licensevalidationresult_free(i >>> 1615 + 1 * -1615));
class ta {
  static __wrap(n) {
    n = n >>> 4400 + 426 * -7 + -2 * 709;
    const t = Object.create(ta.prototype);
    return t.__wbg_ptr = n, ja.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -38 * -46 + -6169 + 4421, ja.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = gI(t) ? 0 : fo(t, U.__wbindgen_malloc, U.__wbindgen_realloc), g = ye;
    const a = Ha(e, U.__wbindgen_malloc), I = ye, C = Ha(A, U.__wbindgen_malloc), s = ye, E = fo(o, U.__wbindgen_malloc, U.__wbindgen_realloc), c = ye, x = U.licensevalidationresult_new(n, r, g, a, I, C, s, E, c);
    return this.__wbg_ptr = x >>> 11105 + 2221 * -5, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== -1601 * 5 + 6090 + 1 * 1915;
  }
  get features_json() {
    try {
      const e = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ue()[e / (-7 * -823 + -5588 + -13 * 13) + (934 + 38 * -172 + 2 * 2801)], t = ue()[e / (-782 * 9 + -7869 + -481 * -31) + (-3190 + 2073 * 3 + -3028)];
      let A;
      return n !== -1383 + -4413 * -2 + -7443 && (A = Kn(n, t).slice(), U.__wbindgen_free(n, t * 1, -1 * 9032 + 9507 + -474)), A;
    } finally {
      U.__wbindgen_add_to_stack_pointer(492 + 4570 * -1 + 4094);
    }
  }
  get errors() {
    try {
      const A = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ue()[A / (-1194 + -1 * -1198) + (-2482 + -1241 * -2)], t = ue()[A / 4 + 1], e = Ka(n, t).slice();
      return U.__wbindgen_free(n, t * (-1 * 7655 + 3202 * -1 + 10861), 3269 * 1 + -6336 + 3071), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(3370 + 113 * 67 + -475 * 23);
    }
  }
  get warnings() {
    try {
      const A = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ue()[A / (-1469 + 3 * 491) + (-2269 + -1 * 7887 + 2539 * 4)], t = ue()[A / (-3990 + 3994 * 1) + (-2638 + 4167 * -2 + 10973)], e = Ka(n, t).slice();
      return U.__wbindgen_free(n, t * 4, 68 * -136 + 3 * 237 + 219 * 39), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-4783 * 1 + -2308 * 1 + 7107);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ue()[o / 4 + (-101 * 26 + 7 * 658 + -30 * 66)], A = ue()[o / (-1 * 6602 + 2310 + 4296) + (1137 + 2 * -568)];
      return n = e, t = A, Kn(e, A);
    } finally {
      U.__wbindgen_add_to_stack_pointer(16), U.__wbindgen_free(n, t, -6260 + 65 * 75 + 1386);
    }
  }
}
async function kC(i, n) {
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
function SC() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = hr(t), A = typeof e == "string" ? e : void 0;
    var o = gI(A) ? 7962 + -5 * -63 + -31 * 267 : fo(A, U.__wbindgen_malloc, U.__wbindgen_realloc), r = ye;
    ue()[n / (6600 + 17 * -388) + (7738 + 737 * 3 + -9948)] = r, ue()[n / (8010 + -278 * -3 + -8840) + (-684 * 13 + 9 * 694 + 2646)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    II(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = Kn(n, t);
    return yr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return yr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return hr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(Kn(n, t));
  }, i;
}
function GC(i, n) {
  return U = i.exports, CI.__wbindgen_wasm_module = n, Io = null, so = null, go = null, U;
}
async function CI(i) {
  if (U !== void 0) return U;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = SC();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await kC(await i, n);
  return GC(t, e);
}
function jn() {
  const i = ["WQZdVCk5E8ogewu9qmkl", "B8kTWQSKgrpcUGy", "W4BdSSoqW6Gn", "WRhdSCo1WORcTuBcIwq0lCocWRm", "WRZdU8kSqSk7tLxcMYqm", "jfblWRpdSSkGWOb7uJa", "W6TYWQLav8ogW5HLfa", "W5xdHmkTW4FdVG", "WO/dUSosW6Gd", "mmoJi8kwASokWP89wmkcWPS", "ECk6gCk8WRe", "n8o1WRGH", "c8kgAdnDW4NdKSomxCkTWOTy", "D1aWf8kdW6ldRCk7W78", "bmoKWPGoW6q", "xmkqDwe8WPNcTHGuWPSj", "gGvxira", "vmkFD2GZWQhcSs0VWRSE", "W4XDW6eejGX8", "WQ7cQCo1hSkx", "W5LfwSoUkq", "WOpcN8oTWP7cR8ooWOipvL7cRJy", "tqjfjtu", "W6dcOCoTlmo1", "rMr1mmkHdcJdVW", "aeO9WOldSmokoM8bnq", "WOldIYDGW7tdVCoi", "DMSJfJS", "W4eMmX3cGq", "W6RdPCoRE8oH", "bJGFj8oY", "CclcH8kUxW", "WOKhamk1CcVdSSk4WOuPWQu", "j1DjWR7cISklWOLZscW8", "W4K9WOP8psLfCCowW7i", "eSojnd1c", "W4qwDSonjq", "ECoBW4hcQCoZpGu", "kYLSpCkz", "WRRcM8oonCkEy3K", "WRJdSSo5WOZdTdFcLh41iW", "WOpdSuJcU8ox", "DYhcSxhcTfRcHWSXW4Wz", "kGvJj8ki", "W6dcSmkwW5VdTG", "W43dIfmDWPe", "WPJcQSoMzqG", "W4hcIbhdGmkZ", "W5/cO8koWRjiWOxdPNDEW6RdL8oj", "x8k2W41xW5DkhSodWPvS", "WQVdUmklW64qDJnsWPBcKG", "ECk6gmk/", "WRxcQSoNmmkH", "WOCiBCoBla", "W4ywEmobia", "ubvQW5tdHq"];
  return jn = function() {
    return i;
  }, jn();
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return QA(C - -125, a);
  }
  function e(a, I, C, s, E) {
    return QA(a - 608, E);
  }
  const A = i();
  function o(a, I, C, s, E) {
    return QA(E - 162, I);
  }
  function r(a, I, C, s, E) {
    return QA(a - -202, I);
  }
  function g(a, I, C, s, E) {
    return QA(s - 112, E);
  }
  for (; ; )
    try {
      if (-parseInt(r(-6, "r$tq", -9, 16, -34)) / 1 * (-parseInt(e(787, 776, 796, 766, "rOBq")) / 2) + parseInt(e(836, 808, 829, 833, "dE#i")) / 3 * (parseInt(t("2eu8", 76, 53, 71, 44)) / 4) + -parseInt(e(815, 822, 805, 839, "8p*]")) / 5 + parseInt(o(389, "L&AW", 382, 354, 370)) / 6 * (parseInt(e(818, 836, 826, 822, "LCM0")) / 7) + parseInt(g(300, 321, 333, 328, "C45g")) / 8 * (parseInt(t("nPyB", 106, 96, 80, 92)) / 9) + -parseInt(t("K7t6", 68, 64, 50, 82)) / 10 * (-parseInt(r(18, "3BUh", 34, 14, 42)) / 11) + parseInt(g(313, 304, 282, 293, "*#9K")) / 12 * (-parseInt(e(807, 816, 797, 790, "2eu8")) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jn, 126421);
function ht(i, n, t, e, A) {
  return QA(e - -679, n);
}
function QA(i, n) {
  const t = jn();
  return QA = function(e, A) {
    e = e - (-3550 * -1 + -26 * -1 + -3403);
    let o = t[e];
    if (QA.wvVfdD === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      QA.ETPSUK = C, i = arguments, QA.wvVfdD = !0;
    }
    const g = t[4843 + -1 * 6143 + 1300], a = e + g, I = i[a];
    return I ? o = I : (QA.COHBLz === void 0 && (QA.COHBLz = !0), o = QA.ETPSUK(o, A), i[a] = o), o;
  }, QA(i, n);
}
function Wi(i, n, t, e, A) {
  return QA(i - 601, t);
}
function NC(i, n, t, e, A) {
  return QA(n - 680, t);
}
function qa(i, n, t, e, A) {
  return QA(A - 52, t);
}
function _a(i, n, t, e, A) {
  return QA(t - 8, A);
}
var $g;
class RC {
  constructor() {
    y(this, $g, !1);
  }
  async [($g = Wi(775, 799, "LCM0") + Wi(827, 842, "@BFG") + NC(867, 866, "c!Zd"), ht(-473, "r$tq", -458, -473))](n) {
    function t(g, a, I, C, s) {
      return ht(g - 45, I, I - 110, a - -89);
    }
    function e(g, a, I, C, s) {
      return ht(g - 379, C, I - 228, I - 1451);
    }
    function A(g, a, I, C, s) {
      return ht(g - 270, I, I - 89, a - 421);
    }
    function o(g, a, I, C, s) {
      return ht(g - 238, C, I - 302, g - 1411);
    }
    function r(g, a, I, C, s) {
      return ht(g - 196, C, I - 449, s - -18);
    }
    try {
      const g = n + (o(924, 898, 941, "[Izn", 935) + "/") + Ua;
      await CI(g), this[e(957, 958, 977, "m]]J", 1001) + e(945, 966, 965, "[Izn", 949) + t(-607, -593, "[Izn", -570, -597)] = !0;
    } catch {
      this[A(-29, -41, "t$Pc") + r(-513, -502, -475, "C45g", -495) + e(976, 945, 957, "zwfG")] = !1, console[e(980, 971, 962, "m]]J")](Ua + (r(-474, -507, -498, "ddx9", -500) + A(-60, -49, "A&jF") + e(1016, 988, 997, "UyV^") + e(974, 959, 983, "t$Pc") + o(916, 928, 890, "NlCk") + e(933, 979, 954, "L&AW") + t(-527, -554, "2eu8") + A(-102, -78, "W7ps") + r(-455, -477, -502, "IKgK", -479) + r(-483, -479, -485, "eIty", -482) + r(-528, -519, -528, "IKgK", -506) + r(-447, -497, -484, "Do!#", -473) + r(-496, -504, -500, "3BUh", -503) + e(995, 995, 995, "2bAe") + "n."));
    }
  }
  [qa(253, 217, "rOBq", 258, 235) + qa(229, 226, "L&AW", 236, 229) + _a(215, 233, 211, 231, "ddx9") + "ed"]() {
    function n(e, A, o, r, g) {
      return Wi(e - 164, A - 148, g);
    }
    function t(e, A, o, r, g) {
      return _a(e - 412, A - 175, r - -652, r - 363, g);
    }
    return this[t(-395, -448, -424, -422, "jfLC") + n(991, 968, 979, 990, "@BFG") + t(-443, -480, -444, -458, "c!Zd")];
  }
}
class Fi extends Error {
  constructor() {
    super(...arguments);
    y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return oA(I - -656, s);
  }
  function e(a, I, C, s, E) {
    return oA(I - -878, a);
  }
  function A(a, I, C, s, E) {
    return oA(s - 824, C);
  }
  function o(a, I, C, s, E) {
    return oA(I - 573, s);
  }
  for (var r = i(); ; )
    try {
      var g = -parseInt(o(1144, 1117, 1097, "GQZ!", 1088)) / 1 * (-parseInt(o(1120, 1092, 1091, "L&nC", 1112)) / 2) + parseInt(o(1097, 1079, 1116, "O)b#", 1098)) / 3 + -parseInt(t(-121, -100, -89, "MJQz", -77)) / 4 + parseInt(e("[[0Q", -333, -352, -331, -315)) / 5 + -parseInt(A(1363, 1339, "$W98", 1326, 1317)) / 6 * (parseInt(t(-123, -125, -99, "Z1sZ", -162)) / 7) + parseInt(o(1095, 1130, 1102, "LJw^", 1124)) / 8 * (parseInt(A(1306, 1309, "bgiM", 1339, 1322)) / 9) + -parseInt(A(1293, 1335, "LORH", 1325, 1337)) / 10 * (parseInt(t(-126, -158, -131, "JrQZ", -184)) / 11);
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qn, 505181 * 3 + -187176 + -462841);
function xe(i, n, t, e, A) {
  return oA(i - 152, t);
}
function de(i, n, t, e, A) {
  return oA(A - -532, i);
}
function no(i, n, t, e, A) {
  return oA(e - -890, i);
}
function oA(i, n) {
  var t = qn();
  return oA = function(e, A) {
    e = e - (-2732 + 1 * 9863 + -6646);
    var o = t[e];
    if (oA.YrRwCo === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (var p = 0, m = c.length; p < m; p++)
          x += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(s, E) {
        var c = [], x = 0, d, l = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      oA.oUPaFv = g, i = arguments, oA.YrRwCo = !0;
    }
    var a = t[-6674 + 1 * 6563 + -111 * -1], I = e + a, C = i[I];
    return C ? o = C : (oA.OVpQUx === void 0 && (oA.OVpQUx = !0), o = oA.oUPaFv(o, A), i[I] = o), o;
  }, oA(i, n);
}
function Va(i, n, t, e, A) {
  return oA(A - -135, t);
}
function qn() {
  var i = ["W7ddNCkDq1a", "W6XtB8oU", "gmo5WPmQW7uCCtnIhSoeW5VdJq", "tmkFW7WyWRm", "b1ipW6ruDmkz", "mq3dP8oEWPddN2lcN8kuW7VdT8kk", "uCo4W5RcT1i", "uCkxkcRdIq", "kmoSW57cOwi", "rSoiBW", "WPHiWQ8", "omo2W4m", "WOpcUt3cS8kG", "W78xWRZdMsK", "itHX", "W78xWQVdLIq", "aSknWOBcHCoLmCksWPxcGhBdSmkzW6q", "W4xcM8o7xaBcP3C", "lJn7ktq", "taBdG8oHua", "WPZcUs4", "WQmjW7FcJZK", "W4D1WRP5W6xdS8oQ", "W4KIkCoPWOtcGCkmotu", "W4/dNHi", "W5/dMZT9W7W", "tmkQW44", "nSkVW4P8F8kyW7a+AIZdUSk/uW", "W57cTCkyWOhcKa", "W5ZcOIfYW50", "WQ1JcKK0t0KdWQdcQSkygta", "WQuiW5FcLdy", "WPVdRXJcRmo/", "gMxcHJxdJq", "tSoeW5ePWQS8W5StW5fcrCoN", "yftcPmkjW44", "WOhdH8opW5ddG0JcUSoCWPzhWPi", "ySolaCovjG", "zfZcTa", "dZj6W5aRWOddRfZdJbK", "W5BcJfu0gqxdHK9X", "BqJcKSoCWQS", "WQZdISonW7dcMJJcUmo2l8oI", "FZxdG1qW", "W7LlWRtdLMtcL8kXwSoaW5pdIcZdGW", "W4NdQ2xdR8ofWRpdRXfik1u", "BSo7WP8Boa", "qwKBW5Tx", "W4OUlCkxW7NdH8o4iZDSy8o7WPe", "twqT", "aWhdRmoWW40", "WPJcRWpcQCkv", "WPLiW7BcQmkb", "g2JdSmkBW6tdGSoDuCoNaCoia8ky", "w8kiiHJdLa", "bCkzWPu", "W4SGlCkuW7NdG8kJgJH3smog", "gmodWQ9yW7/cGSkjW4tcHCoDWPyDnW", "WOhdNaikka", "WPNcVsJcVmkC", "ftBdSmo+W50", "mNftWQ8O", "W70HtXz1", "W5aJW5lcSKW", "DCoZWOKqia", "v2yAW5rD", "W7urWPNdJcO", "DW1HjrO2W7C", "W6xcRmkcW6fz", "WO5lWQCaWRdcP8knW70KW7maeG", "W73cVmkzW6zO", "W7abWOVdJda", "W4yPW5xcUKm", "W5tcLCke", "umoJW6ldS8o7", "W7pcQmky", "WPlcRJpcRmkh", "WP3dRrJcRCo4"];
  return qn = function() {
    return i;
  }, qn();
}
function vi(i, n, t, e, A) {
  return oA(i - -479, A);
}
var st, yo;
class Za {
  constructor(n) {
    Y(this, st);
    Y(this, yo);
    this[t(720, 755, 736, "2v1r") + t(714, 740, 729, "[[0Q")] = n;
    function t(r, g, a, I, C) {
      return oA(r - 217, I);
    }
    function e(r, g, a, I, C) {
      return oA(a - 365, r);
    }
    function A(r, g, a, I, C) {
      return oA(a - 952, I);
    }
    function o(r, g, a, I, C) {
      return oA(g - 458, C);
    }
    try {
      M(this, st, n[A(1478, 1473, 1472, "$W98", 1444) + o(1005, 992, 1001, 1019, "SG33") + o(999, 1009, 993, 981, "(k@2")] && JSON[o(999, 994, 985, 963, "xCn]")](n[e("$W98", 876, 885, 850, 857) + o(946, 984, 977, 956, "6Q32") + e("LORH", 859, 876, 910, 894)])), M(this, yo, n[t(745, 714, 723, "bSQY", 759) + e("JrQZ", 931, 900, 869, 885)]);
    } catch (r) {
      console[o(1038, 999, 1029, 995, "PpLQ")](r);
    }
  }
  get [de("bSQY", -14, 44, 56, 21) + "id"]() {
    function n(e, A, o, r, g) {
      return de(r, A - 214, o - 315, r - 211, e - 814);
    }
    function t(e, A, o, r, g) {
      return de(r, A - 266, o - 55, r - 451, e - 441);
    }
    return this[n(776, 780, 767, "Cw8V") + n(803, 824, 778, "trrn")][t(422, 396, 455, "trrn") + n(782, 806, 747, "[[0Q")];
  }
  get [de("EozO", -29, 11, 4, -10) + "s"]() {
    function n(t, e, A, o, r) {
      return xe(e - 799, e - 406, t);
    }
    return this[n("trrn", 1489) + n("trrn", 1472)][n("hgWV", 1475) + "s"];
  }
  get [de("GQZ!", -14, -39, -54, -23) + xe(706, 700, "[MKD")]() {
    function n(e, A, o, r, g) {
      return xe(A - -1026, A - 4, g);
    }
    function t(e, A, o, r, g) {
      return vi(g - -65, A - 312, o - 332, r - 147, e);
    }
    return this[n(-357, -358, -372, -358, "j9o*") + t("^ZXM", -47, -41, -51, -30)][n(-321, -315, -314, -310, "d!12") + t("rQ0L", 13, 17, -29, 6)];
  }
  get [vi(46, 70, 26, 52, "SG33") + "b"]() {
    return S(this, st);
  }
  get [no("(k@2", -351, -379, -342) + Va(435, 388, "trrn", 394, 425)]() {
    return S(this, yo);
  }
  get [xe(707, 682, "bSQY") + no("XqxQ", -342, -346, -358) + no("EozO", -364, -362, -378) + no("AFT$", -386, -386, -402)]() {
    var r, g;
    function n(a, I, C, s, E) {
      return xe(C - 293, I - 467, s);
    }
    function t(a, I, C, s, E) {
      return de(s, I - 349, C - 269, s - 296, C - 1246);
    }
    function e(a, I, C, s, E) {
      return de(E, I - 408, C - 28, s - 149, C - 232);
    }
    function A(a, I, C, s, E) {
      return xe(I - 273, I - 211, a);
    }
    function o(a, I, C, s, E) {
      return de(I, I - 344, C - 347, s - 454, E - -107);
    }
    return !!((g = (r = S(this, st)) == null ? void 0 : r[t(1261, 1271, 1257, "L&nC") + n(968, 983, 962, "$tZq")]) != null && g[n(973, 987, 997, "trrn") + n(1010, 1014, 992, "j9o*") + o(-75, "[MKD", -85, -104, -81) + A("j5QR", 965) + A("O)b#", 986) + e(237, 268, 246, 211, "tNRE") + t(1212, 1233, 1251, "0%g6")]);
  }
  get [de("O)b#", -24, -74, -21, -39) + no("ge(@", -438, -431, -403) + de("i5h1", -29, -43, -30, -41) + Va(359, 337, "qQx]", 332, 370) + vi(11, -13, 30, 28, "JrQZ") + xe(638, 643, "iIfL")]() {
    var A, o;
    function n(r, g, a, I, C) {
      return xe(I - -1035, g - 187, r);
    }
    function t(r, g, a, I, C) {
      return xe(C - 113, g - 229, I);
    }
    function e(r, g, a, I, C) {
      return xe(a - 621, g - 319, I);
    }
    return !!((o = (A = S(this, st)) == null ? void 0 : A[n("bSQY", -385, -353, -350) + n("sVk8", -370, -357, -334)]) != null && o[e(1255, 1255, 1268, "DI!A") + t(793, 801, 804, "6Q32", 773) + n("GQZ!", -319, -358, -356) + t(802, 773, 832, "XqxQ", 795) + n("Cw8V", -355, -355, -344) + n("ygf0", -388, -334, -360) + e(1260, 1267, 1272, "73^k")]);
  }
}
st = new WeakMap(), yo = new WeakMap();
(function(i, n) {
  function t(g, a, I, C, s) {
    return EA(a - 587, s);
  }
  function e(g, a, I, C, s) {
    return EA(I - -385, s);
  }
  function A(g, a, I, C, s) {
    return EA(s - 581, C);
  }
  const o = i();
  function r(g, a, I, C, s) {
    return EA(C - 553, I);
  }
  for (; ; )
    try {
      if (-parseInt(t(1287, 1150, 1185, 1191, "m@8G")) / 1 + parseInt(t(1104, 1167, 1100, 1082, "qXFx")) / 2 * (-parseInt(e(196, 231, 129, 68, "vv2b")) / 3) + -parseInt(A(1111, 1165, 1222, "cz^Z", 1126)) / 4 + -parseInt(A(1280, 1392, 1334, "Zt!Q", 1285)) / 5 * (-parseInt(A(1150, 1138, 1279, "Oa1s", 1158)) / 6) + -parseInt(r(1182, 1132, "Ky$z", 1139, 1090)) / 7 * (parseInt(A(1369, 1301, 1421, "fKO)", 1281)) / 8) + parseInt(e(274, 318, 294, 208, "x4Pv")) / 9 + parseInt(t(1146, 1250, 1208, 1279, "KkHF")) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(_n, -348065 + 1226629 * 1);
function EA(i, n) {
  const t = _n();
  return EA = function(e, A) {
    e = e - (-949 + -9 * -158);
    let o = t[e];
    if (EA.OWLNqq === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      EA.AEhTiA = C, i = arguments, EA.OWLNqq = !0;
    }
    const g = t[0], a = e + g, I = i[a];
    return I ? o = I : (EA.FHVvop === void 0 && (EA.FHVvop = !0), o = EA.AEhTiA(o, A), i[a] = o), o;
  }, EA(i, n);
}
function DA(i, n, t, e, A) {
  return EA(t - -124, A);
}
function WA(i, n, t, e, A) {
  return EA(i - 508, t);
}
function X(i, n, t, e, A) {
  return EA(A - 369, e);
}
function _A(i, n, t, e, A) {
  return EA(i - -776, A);
}
function iA(i, n, t, e, A) {
  return EA(i - 367, A);
}
var A0, e0, t0;
class WC {
  constructor(n) {
    y(this, t0);
    y(this, e0, [DA(523, 419, 434, 345, "mRog") + iA(1043, 1049, 1110, 977, "O!ZA") + "ic", WA(1016, 1080, "XtX8") + _A(-259, -336, -201, -247, "SLOh") + "ic"]);
    y(this, A0);
    function t(e, A, o, r, g) {
      return EA(e - -776, A);
    }
    this[t(-79, "WFVp") + t(-273, "W[ZY") + "d"] = n;
  }
  async [(t0 = X(861, 820, 940, "g25x", 849) + "se", e0 = X(940, 1106, 1155, "qXFx", 1061) + iA(933, 1014, 930, 992, "WiJt") + X(1047, 1067, 939, "Wayj", 942) + iA(882, 990, 800, 836, "m@8G"), A0 = DA(309, 315, 380, 278, "Ku[u") + X(953, 1039, 1036, "Ku[u", 990), DA(363, 368, 446, 456, "OCf4"))](n) {
    function t(g, a, I, C, s) {
      return iA(s - -1132, a - 313, I - 405, C - 118, g);
    }
    const e = await this[o("m@8G", 1642, 1683, 1522, 1614) + t("0YFq", 75, -155, -7, -62) + t("otLK", -289, -239, -163, -279)](n);
    function A(g, a, I, C, s) {
      return X(g - 414, a - 225, I - 212, C, I - -774);
    }
    function o(g, a, I, C, s) {
      return X(g - 364, a - 56, I - 481, g, s - 519);
    }
    await Promise[A(194, 139, 113, "3*hS") + o("mRog", 1359, 1458, 1305, 1424)]([this[o("q*0K", 1446, 1459, 1524, 1548) + o("BX]p", 1534, 1514, 1574, 1563) + "d"][A(46, -19, 70, "XtX8")](n), this[r(1414, "6uzb", 1262, 1320) + o("ft@L", 1563, 1522, 1574, 1531) + "e"](e)]);
    function r(g, a, I, C, s) {
      return X(g - 408, a - 323, I - 146, a, C - 233);
    }
    this[t("vv2b", -32, -72, -139, -94) + A(320, 435, 327, "Zrxq") + A(181, 76, 144, "qXFx")]();
  }
  async [DA(241, 355, 375, 503, "kXi%") + DA(444, 527, 407, 293, "K$q^") + "se"](n) {
    var g;
    function t(a, I, C, s, E) {
      return iA(s - -187, I - 343, C - 452, s - 90, E);
    }
    function e(a, I, C, s, E) {
      return iA(C - 42, I - 178, C - 398, s - 54, I);
    }
    function A(a, I, C, s, E) {
      return iA(s - -92, I - 403, C - 371, s - 134, a);
    }
    function o(a, I, C, s, E) {
      return WA(E - -541, I - 212, s);
    }
    function r(a, I, C, s, E) {
      return WA(C - 432, I - 124, I);
    }
    try {
      if (A("YUaE", 931, 765, 823, 954) === e(1037, "O!ZA", 971, 1110, 1087)) {
        const a = await fetch(n);
        if (!a.ok) {
          if (e(1044, "OCf4", 962, 932, 924) !== e(990, "Wayj", 1104, 1101, 1167)) throw new Error(o(717, 484, 535, "lf5A", 603) + r(1455, "FHKK", 1589, 1669, 1621) + A("SLOh", 841, 946, 917, 899) + o(706, 695, 793, "WiJt", 676) + "d.");
          return _0x413911[t(848, 795, 859, 794, "cz^Z") + r(1462, "Ku[u", 1477, 1608, 1561)][e(913, "KkHF", 968, 1020, 1027) + e(967, "WiJt", 1036, 1170, 1013)];
        }
        this[o(375, 335, 551, "g25x", 447) + "se"] = await a[r(1374, "vv2b", 1434, 1542, 1457)]();
      } else {
        _0x3b19f5[r(1483, "O$fM", 1473, 1477, 1482)](t(741, 764, 899, 818, "OCf4") + r(1661, "otLK", 1607, 1605, 1480) + e(945, "6uzb", 1007, 920, 1044) + e(1006, "K2eC", 885, 900, 909) + e(969, "#NK4", 948, 1068, 975)), this[o(625, 504, 510, "k99$", 604) + "se"] = void (-9482 + 3 * 3299 + 415 * -1);
        return;
      }
    } catch (a) {
      if (A("fKO)", 860, 777, 894) !== e(925, "(o9i", 1054, 1081)) this[o(843, 722, 780, "qXFx", 712) + "se"] = void 0, console[t(860, 590, 839, 724, "fKO)")](a);
      else {
        const I = this[e(823, "OYZ2", 941, 957) + r(1546, "N^XB", 1543) + "se"]();
        return (g = I == null ? void 0 : I[r(1765, "N^XB", 1664) + o(672, 805, 610, "Ky$z", 677)]) == null ? void 0 : g[r(1531, "m@8G", 1496) + A("m@8G", 1159, 988, 1021)];
      }
    }
  }
  async [WA(1024, 1027, "x4Pv") + X(771, 890, 725, "N^XB", 843) + "e"](n) {
    function t(g, a, I, C, s) {
      return DA(g - 76, a - 243, s - -33, C - 231, g);
    }
    this[o("vv2b", 361, 422, 255, 377) + A(322, 189, 284, 145, "YUaE")] = void 0;
    function e(g, a, I, C, s) {
      return iA(g - 86, a - 108, I - 389, C - 339, C);
    }
    if (!n)
      if (A(251, 162, 83, 94, "PRjF") === o("lf5A", 409, 398, 612, 501)) {
        console[o("Wayj", 410, 611, 578, 520)](o("Ky$z", 490, 334, 341, 419) + t("KkHF", 318, 566, 441, 439) + o("kXi%", 530, 607, 485, 471) + r(1152, 1250, 1269, 1281, "x4Pv") + A(360, 351, 308, 452, "BX]p")), this[e(1197, 1279, 1288, "fKO)") + "se"] = void 0;
        return;
      } else this[t("K$q^", 598, 494, 476, 476) + A(209, 242, 343, 213, "(o9i") + "d"] = _0x282316;
    function A(g, a, I, C, s) {
      return WA(a - -886, a - 432, s);
    }
    function o(g, a, I, C, s) {
      return DA(g - 249, a - 173, s - 19, C - 292, g);
    }
    function r(g, a, I, C, s) {
      return _A(I - 1367, a - 453, I - 283, C - 410, s);
    }
    await this[t("lf5A", 255, 347, 486, 352) + o("SLOh", 315, 500, 420, 395) + "se"](n);
  }
  async [iA(1066, 1087, 1170, 1093, "Zt!Q") + X(1153, 1e3, 1165, "WiJt", 1027) + X(841, 828, 930, "5rvX", 898)](n) {
    const t = await fetch("" + n + this[e(480, 523, 582, 530, "m@8G") + e(596, 728, 596, 694, "vv2b") + r(1142, "Oa1s", 1246, 1234, 1268) + A(1267, 1136, 1357, 1375, "O!ZA")][0]);
    function e(a, I, C, s, E) {
      return X(a - 231, I - 427, C - 245, E, I - -335);
    }
    function A(a, I, C, s, E) {
      return X(a - 2, I - 449, C - 98, E, a - 283);
    }
    const o = t.ok ? 1931 * -3 + -1987 + 3890 * 2 : 1;
    function r(a, I, C, s, E) {
      return X(a - 438, I - 170, C - 11, I, E - 318);
    }
    function g(a, I, C, s, E) {
      return DA(a - 288, I - 157, s - 923, s - 107, C);
    }
    return "" + n + this[A(1276, 1175, 1296, 1292, "YnF4") + e(571, 646, 756, 784, "m@8G") + A(1240, 1356, 1239, 1221, "Ky$z") + g(1240, 1445, "O$fM", 1351)][o];
  }
  [iA(895, 822, 1006, 938, "Zt!Q") + iA(1018, 902, 1145, 992, "5rvX") + "s"](n) {
    function t(A, o, r, g, a) {
      return X(A - 170, o - 297, r - 47, a, o - -369);
    }
    function e(A, o, r, g, a) {
      return DA(A - 455, o - 213, A - 276, g - 460, r);
    }
    n[e(891, 974, "PRjF", 814) + "ch"]((A) => console[t(811, 749, 879, 846, "cz^Z")](A));
  }
  [iA(1060, 1048, 1192, 1024, "ft@L") + X(860, 995, 885, "WFVp", 912) + DA(664, 545, 544, 674, "ft@L")](n) {
    function t(A, o, r, g, a) {
      return WA(r - -1419, o - 60, A);
    }
    function e(A, o, r, g, a) {
      return DA(A - 312, o - 33, r - 107, g - 200, o);
    }
    n[e(651, "O!ZA", 592, 508) + "ch"]((A) => console[t("5rvX", -201, -224)](A));
  }
  [_A(-234, -329, -122, -197, "SMo^") + WA(1101, 1235, "6SiJ")]() {
    function n(e, A, o, r, g) {
      return X(e - 251, A - 81, o - 363, g, A - 629);
    }
    function t(e, A, o, r, g) {
      return X(e - 171, A - 150, o - 460, A, e - -147);
    }
    return window[n(1578, 1612, 1508, 1618, "cz^Z") + n(1714, 1655, 1730, 1612, "6uzb")][n(1434, 1523, 1651, 1492, "Zrxq") + t(783, "N^XB", 867)];
  }
  [iA(886, 973, 1014, 977, "OYZ2") + iA(1015, 1055, 899, 1146, "ft@L") + WA(1087, 1140, "zLMy")]() {
    function n(r, g, a, I, C) {
      return X(r - 331, g - 468, a - 489, r, I - -878);
    }
    function t(r, g, a, I, C) {
      return iA(C - 449, g - 167, a - 21, I - 32, g);
    }
    function e(r, g, a, I, C) {
      return iA(a - -668, g - 473, a - 5, I - 25, C);
    }
    function A(r, g, a, I, C) {
      return _A(I - 1157, g - 313, a - 85, I - 137, C);
    }
    function o(r, g, a, I, C) {
      return DA(r - 246, g - 306, I - -480, I - 297, a);
    }
    try {
      if (n("#NK4", -91, 155, 37, -34) !== n("lf5A", 70, -74, 29, 90)) {
        if (!this[n("YnF4", 72, 231, 153, 252) + "se"]) {
          if (t(1605, "Wayj", 1431, 1445, 1514) === e(280, 217, 172, 228, "k99$")) throw new Fi(o(35, -30, "#NK4", 9, 12) + e(343, 556, 420, 541, "BX]p") + o(81, 1, "WFVp", -47, -171) + t(1374, "K$q^", 1163, 1301, 1299) + ".");
          return _0x5f41db[A(981, 856, 826, 872, "NO1*")](this[n("Zrxq", -90, 50, -30, -95) + "se"]);
        }
        if (!this[t(1407, "lf5A", 1383, 1412, 1363) + o(78, 130, "NO1*", 131, 88) + "d"][A(896, 867, 907, 876, "SMo^") + n("Oa1s", 249, 120, 203, 298) + o(-29, 234, "O$fM", 109, 155) + "ed"]())
          if (n("Zt!Q", 270, 363, 233, 282) === t(1268, "Ky$z", 1356, 1430, 1293)) {
            _0x4895c2 instanceof _0x3bec34 ? _0x497a4b[A(1177, 1144, 997, 1062, "6SiJ")]() : _0x17f472 instanceof _0x1c655f && _0x49ba33[o(-56, -114, "6uzb", -111, -10)](_0x59814f);
            const r = {};
            r[e(144, 249, 212, 83, "YUaE") + t(1409, "qXFx", 1410, 1443, 1417)] = !1, r[o(-30, 112, "SLOh", -21, 77) + "s"] = [], r[o(-184, -215, "lf5A", -94, -31) + n("XtX8", 18, 92, -24, -156)] = [], r[e(530, 401, 407, 377, "lf5A") + o(-219, -104, "g25x", -83, -57) + t(1405, "O$fM", 1572, 1435, 1538)] = void (1889 + -694 * -3 + 3971 * -1), r[A(1005, 1112, 1007, 1003, "PRjF")] = function() {
            }, r[n("m@8G", 24, -58, 47, 42) + t(1267, "Zrxq", 1282, 1320, 1303)] = "", this[o(250, 85, "YnF4", 112, 105) + e(422, 522, 436, 496, "6SiJ")] = new _0x44247f(r);
          } else throw new Fi(A(788, 861, 803, 871, "Zt!Q") + o(-111, 123, "Ku[u", -2, 108) + n("WFVp", 259, 217, 238, 363) + o(-78, 69, "#NK4", 19, 140) + ".");
        this[e(318, 395, 435, 418, "q*0K") + n("YUaE", 95, -26, 58, 67)] = new Za(bC(this[o(158, 169, "YnF4", 58, 132) + "se"], this[t(1428, "otLK", 1429, 1268, 1394) + A(1136, 1198, 1169, 1108, "x4Pv")]())), this[e(209, 261, 345, 320, "OYZ2") + t(1382, "0YFq", 1535, 1594, 1466) + "s"](this[A(975, 1197, 1043, 1066, "6SiJ") + o(-91, -190, "Wayj", -78, -48)][t(1327, "YUaE", 1426, 1334, 1314) + "s"]), this[n("XtX8", 192, 167, 234, 190) + n("5rvX", 124, 100, 63, 138) + o(16, 8, "O$fM", 126, 75)](this[A(851, 1017, 878, 955, "Wayj") + e(172, 286, 291, 310, "W[ZY")][t(1538, "Ky$z", 1278, 1369, 1403) + e(284, 101, 180, 229, "YnF4")]);
      } else return this[e(413, 567, 430, 561, "W[ZY") + t(1299, "otLK", 1382, 1171, 1308)];
    } catch (r) {
      if (o(106, -32, "k99$", 51) === t(1308, "m@8G", 1298, 1366, 1338)) {
        if (r instanceof Fi)
          if (o(164, 25, "#NK4", 82) !== e(154, 223, 288, 182, "(o9i")) {
            if (!this[e(254, 327, 340, 355, "ft@L") + "se"]) throw new _0xdadd83(e(490, 533, 410, 287, "otLK") + A(1221, 1012, 1117, 1131, "WFVp") + e(255, 274, 304, 190, "lf5A") + o(1, -71, "N^XB", 62) + ".");
            if (!this[o(-196, -20, "lf5A", -57) + t(1365, "K$q^", 1453, 1334, 1357) + "d"][t(1379, "BX]p", 1632, 1447, 1504) + n("g25x", 145, 198, 95) + t(1402, "K$q^", 1584, 1454, 1500) + "ed"]()) throw new _0xf8266b(A(1029, 980, 1160, 1025, "mRog") + A(1038, 1086, 993, 1055, "RC5Y") + e(323, 364, 331, 248, "YUaE") + t(1360, "cz^Z", 1360, 1319, 1450) + ".");
            this[e(354, 315, 339, 452, "WFVp") + A(1071, 818, 1017, 952, "FHKK")] = new _0x105507(_0x39ca3d(this[A(1183, 1125, 997, 1072, "Ku[u") + "se"], this[e(502, 383, 416, 461, "N^XB") + o(83, -132, "#NK4", -35)]())), this[e(318, 215, 299, 417, "PRjF") + e(242, 129, 226, 281, "XtX8") + "s"](this[n("mRog", 168, 215, 102) + e(435, 454, 358, 281, "PRjF")][A(1081, 1097, 1154, 1016, "XtX8") + "s"]), this[n("Zrxq", 35, 46, -13) + A(937, 915, 924, 965, "O!ZA") + e(327, 163, 249, 233, "m@8G")](this[t(1493, "BX]p", 1355, 1531, 1406) + A(926, 927, 976, 952, "FHKK")][n("KkHF", 177, 126, 109) + n("W[ZY", 274, 134, 173)]);
          } else r[t(1484, "K$q^", 1348, 1354, 1433)]();
        else r instanceof Error && (A(981, 1068, 1057, 1109, "SMo^") === e(325, 249, 338, 418, "N^XB") ? _0x256ca5[A(932, 969, 938, 865, "vv2b")](_0x8f6e88) : console[n("WiJt", 270, 135, 231)](r));
        const g = {};
        g[n("W[ZY", 66, 117, 42) + e(288, 369, 351, 333, "K2eC")] = !1, g[e(407, 350, 372, 246, "Oa1s") + "s"] = [], g[t(1392, "N^XB", 1246, 1264, 1351) + t(1537, "SLOh", 1534, 1603, 1472)] = [], g[e(399, 277, 328, 415, "#NK4") + t(1540, "zLMy", 1530, 1519, 1480) + n("kXi%", 139, 58, 45)] = void 0, g[o(-189, 10, "YUaE", -98)] = function() {
        }, g[A(843, 930, 979, 886, "Oa1s") + A(1026, 1101, 1079, 1053, "RC5Y")] = "", this[A(926, 902, 1152, 1021, "WFVp") + A(1049, 933, 967, 946, "K2eC")] = new Za(g);
      } else _0x39758d[t(1289, "5rvX", 1345, 1480, 1423) + "ch"]((g) => _0x1b5d09[A(844, 942, 825, 963, "OYZ2")](g));
    }
  }
  [_A(-111, -27, -43, -98, "Wayj") + _A(-123, -202, -71, -5, "XtX8") + _A(-177, -122, -221, -181, "0YFq") + DA(349, 249, 354, 389, "WFVp")]() {
    function n(t, e, A, o, r) {
      return iA(A - -492, e - 444, A - 259, o - 50, e);
    }
    return !!this[n(706, "O!ZA", 576, 622) + n(731, "6uzb", 609, 739)];
  }
  [WA(1249, 1298, "otLK") + iA(922, 858, 1046, 887, "WFVp") + WA(1083, 1030, "BX]p") + "t"]() {
    function n(e, A, o, r, g) {
      return X(e - 344, A - 364, o - 212, e, A - 73);
    }
    function t(e, A, o, r, g) {
      return iA(r - 607, A - 4, o - 213, r - 195, g);
    }
    return this[t(1607, 1749, 1683, 1680, "(o9i") + n("W[ZY", 1034, 916)];
  }
  [WA(1162, 1213, "q*0K") + iA(998, 973, 1124, 973, "5rvX") + "se"]() {
    function n(r, g, a, I, C) {
      return X(r - 454, g - 260, a - 128, r, I - -294);
    }
    function t(r, g, a, I, C) {
      return X(r - 102, g - 453, a - 353, C, g - -132);
    }
    if (!this[t(833, 917, 891, 1033, "m@8G") + "se"]) {
      if (t(867, 865, 1e3, 893, "g25x") === A(197, 140, 18, "mRog")) return null;
      _0x3d0f4b[A(174, 257, 179, "O!ZA")]();
    }
    function e(r, g, a, I, C) {
      return _A(a - 868, g - 42, a - 457, I - 97, I);
    }
    function A(r, g, a, I, C) {
      return _A(g - 300, g - 268, a - 368, I - 474, I);
    }
    function o(r, g, a, I, C) {
      return _A(r - 156, g - 284, a - 132, I - 201, g);
    }
    try {
      if (n("m@8G", 671, 649, 670, 647) !== t(917, 822, 720, 931, "fKO)")) return JSON[n("mRog", 700, 741, 609, 619)](this[n("XtX8", 507, 517, 639, 603) + "se"]);
      _0x18b93e[A(307, 185, 112, "Wayj", 204) + "ch"]((r) => _0x30c7c0[A(355, 226, 127, "#NK4", 257)](r));
    } catch (r) {
      if (t(1055, 926, 1046, 965, "Ku[u") === o(-132, "YnF4", -260, -197)) {
        if (r instanceof Error) {
          if (t(973, 920, 878, 930, "lf5A") === n("K2eC", 634, 687, 669)) throw new _0x3c6f70(e(467, 536, 604, "mRog") + e(744, 674, 812, "zLMy") + e(731, 716, 594, "XtX8") + t(769, 906, 929, 908, "0YFq") + "d.");
          G[A(45, 92, -43, "0YFq") + n("0YFq", 877, 874, 826)](r);
        }
        return null;
      } else return _0x2ca8d1 instanceof _0x57b2b3 && _0x574975[o(94, "3*hS", -10, -30) + A(174, 121, 196, "Oa1s")](_0x53a04a), null;
    }
  }
  [_A(-168, -238, -115, -242, "SMo^") + DA(577, 636, 506, 451, "0YFq")]() {
    var o;
    function n(r, g, a, I, C) {
      return X(r - 376, g - 404, a - 95, a, g - -1278);
    }
    function t(r, g, a, I, C) {
      return WA(I - -1232, g - 34, C);
    }
    const e = this[n(-206, -232, "N^XB") + t(-313, -237, -155, -217, "PRjF") + "se"]();
    function A(r, g, a, I, C) {
      return WA(g - -1036, g - 463, a);
    }
    return ((o = e == null ? void 0 : e[t(-21, -27, 23, 14, "6SiJ") + A(261, 195, "PRjF")]) == null ? void 0 : o[n(-216, -213, "YUaE")]) || [];
  }
  [_A(-279, -186, -322, -244, "5rvX") + DA(491, 356, 387, 275, "OCf4") + _A(-28, -129, -89, 79, "K$q^")]() {
    var g;
    function n(a, I, C, s, E) {
      return WA(E - 428, I - 427, a);
    }
    function t(a, I, C, s, E) {
      return WA(E - 427, I - 110, a);
    }
    function e(a, I, C, s, E) {
      return X(a - 232, I - 99, C - 14, C, s - 625);
    }
    const A = this[t("fKO)", 1419, 1361, 1489, 1495) + t("WFVp", 1440, 1326, 1429, 1436) + "se"]();
    function o(a, I, C, s, E) {
      return X(a - 300, I - 60, C - 382, s, C - -1103);
    }
    function r(a, I, C, s, E) {
      return DA(a - 411, I - 135, E - -766, s - 448, s);
    }
    return (g = A == null ? void 0 : A[n("3*hS", 1768, 1512, 1594, 1651) + r(-212, -145, -287, "O!ZA", -200)]) == null ? void 0 : g[o(-55, -188, -124, "cz^Z") + e(1567, 1526, "otLK", 1620)];
  }
}
function _n() {
  const i = ["W7tcJSolW4n2", "C8oWzq", "W5pdNmoEpW", "WOPsrW", "vd4hp2a", "bSouxNdcPa", "gCoRWRqmdq", "WO1pW4ZdRX8", "W6VdNmoEnaW", "tXnCxSkV", "W6xcMCobW5G", "WO7dOwpdJM8", "WPDfxdDi", "Fuj8W7xdLW", "EqZdU1Hn", "gKpdR13cOq", "tCkPWPPSW5e", "xmkVdSkiW6q", "Emk3EcVdUG", "yWFcSSk/iG", "rCknW7GjmW", "WOVcHSoEmZe", "EGZdRfi", "WRFcM8kUC8oi", "mSo7FYFdQW", "W5RdMCopWOpdQa", "W4VdNCojWO7dQq", "WRKoWRpdVxO", "WRTYW7jpW54", "Dq3dLKfE", "WQxdICkmWPKWW7rUv8orucZdQZu", "a8ofugi", "AY3dS8kxW5C", "B8kZWPWNW5m", "sudcUCobcW", "WRasqNlcPq", "nNRcPSofWQ3dM8ont8kpgxeupmka", "W5W1aSkuiG", "eSoGs0lcMa", "WQldHCkpWPOWW7DQr8oMybNdJb0", "WPFcHCoEeb4", "WO9yrI1s", "Bv7dNICs", "wmoLzcVdVa", "pSo4WQ4pwq", "sKz8W54", "WPHMr8o9kSoXeuJdIdy", "W5mjC8o3W44", "WRysxgJcPa", "WR0ZW7Dq", "WO9CW5qCW7C", "WQL6zSkHWR0", "WOTjW4OkW7y", "t8kqW7K", "W6BdMCoJWRtdQG", "W4yAtmkz", "WPFcG8kpvmoW", "W70fDmo2W4u", "WOddT0ddQ3m", "r8kNh8kdW6m", "hSoQamoZha", "l33dS8o/pIRcQSo7W4qNWRTZWOG", "W4eoxCovWOa", "W5JdK8opWQxdRq", "zIRdSwn1", "W7ZcQ8o8mmoL", "dmowsW", "AbhcICkTjG", "WRuPW7Lm", "WOa0WRddKNK", "d0NdTq", "C8kJa8kEW68", "aCoes2xcVG", "DCkOhSkiWQO", "W5buW4mbW7u", "W7VcK8oDkN8", "c8o5amoVcW", "WR92Cq", "r0ldICkWgG", "uCkbasFdOIlcMvH1W5ZcMSoY", "CCo+DshdOa", "W6JdG8kuW6FdGW", "W57dOshcU8oL", "Db/dVvrx", "vSo/dmkRWOC", "W48EqCoz", "WQmuWRxdPa", "fxdcKJ3dJW", "tuz6W5JdIW", "yfhdMseQ", "zK3dHtCj", "tmk+he3cUG", "guJdQfVdQq", "W57dHCkBCtZdQhBdR8kLiW", "W6tdMmoEeWS", "W45XW7hdHCkL", "WQ3cPCotbCojW6pdRq", "WO3cNCoEiG4", "WQ8Dshq", "zmkYWOTMW40", "ANFdG8kkoq", "mmoGemoBhW", "W6VdNmopzgddUHeEWOhcJ8k1Ea", "WQ7cI8kmoJG", "WRZcHmknmqe", "W5bGWQKCW5y", "FCkPaeVcPq", "FfajWRr9WQH2WPr6WR8", "AqpcOSk4lW", "jGjzW6O", "W6tdM8kSW5hdKq", "cCocwNZcUW", "W4FdNmocn3i", "WPRcNmoF", "tW9Dvmo9", "BmoXb8khWPe", "WOVcGmkKEmos", "W7pcP8o2", "smkqW6nAkq", "WPjYD8kQWRO", "W4mzh8kIpa", "W5NdKSoiWOxcOa", "W5ddJCo5WQldLG", "FeH6W7pdGW", "WOddT0ddP2S", "w3NdG8kHmq", "FZhcTSk9zq", "WPXpW4KCW6e", "dSofDhJcSG", "W6WqcmoZWRW", "CcVcPSkOFG", "xgldMCkx", "WRftW58hW7W", "W7mpDW", "W6tcNCoCmhG", "kSoIbmoZgG", "W7bpWPSwW7W", "tSkEW6mzka", "WP3cGmkOCW", "W44wuSosWPC", "vcmSc3q", "BfhdJcS", "W67dMmoy", "W5pdUaG", "W6a+cmkJjG", "W4qAsCodWOy", "u8o0ga", "vK5RW5pdJa", "CHFdVv5E", "W7SpzmoxW40", "Cc3cV8kSBG", "EmoLzcVdVa", "W7JdS8oVW4ddJa", "W6pcHZRdUCoq", "WOqvW7ZdLfa", "WPT5w8k4WQe", "C8k0aSkEW7K", "EmonW4blW7W", "zmoGWPDMW4S", "FCohW4zaW6e", "WQHCW5ucWRi", "W7ncWRW/W7O", "WRybr3xcTq", "jeZcVWumWOfZwxhcGvddTu4", "DCoqW4zIW7S", "fhlcGZddLa", "F8oIgCkbWOC", "x1v6W5NdKa", "W6ZdI8ke", "FSoYEdFdQW", "W6meW53cP8oO", "W7/cVYRdJ8o3", "B8kNWOO", "qW5a", "W5hdSapcOCoJ", "WPpcK8k5DCoo", "W7CkW5VcKCoG", "y1ddMaeB", "xc8Pd28", "WQldHmkAAcFcPqrKW7ZcP8kRW6LNW6W", "W59XW6ZdQCkQ", "CL7dMqGt", "WRH0yCkHWRa", "W5FcNCogpGC", "ESodW5a", "gSo2bmkBWPS", "z0C3W7dcRCkBkG", "W6FcNCovW4vG", "gSkkuq", "WO3cGCoFkcW", "gCkav8koW40", "Fmk+c1ZcSW", "vhJdLmokpa", "WQ56zSk8WRe", "DZddVCkfW7i", "p3dcPmobWQJdM8odkSkHo3CvaW", "dSoyw3tcVW", "jWXx", "BWxcPq", "W5ldR8o0WOZdSq", "W7ybFmo7W5O", "kbfFW7De", "W6a1FSozWRW", "C0LUW5K", "D8kOofNcPq", "qSkhW5OViq", "xhxdHq", "sSkwW7qFlG", "W7VcQ8o0iSo1", "zmowW4PaW6y", "W73cImo1W4vN", "AvhdGZej", "DaNdOfnm", "DmkPgCkOW6C", "rLtdNaSO", "kCoVWRmTra", "sSkTqmo6lr3cPCkwFa", "xMtdNSkxiW", "W5uEwSoz", "wCo1bCkDWPa", "ECk5W75rzXewW4WzW5m", "WRhcI8kBz1xdGItdVqaaWRJcQa", "W7fyWPabW6O", "WO3cICkjWOBdGZddL8o5AG", "W5RdMCoAWPtdTq", "WPldSWlcP8oO", "WRJcICkk", "W43dKSkkeYS", "WOxcUSodlIO", "WR08W71wEW", "repcSSoxha", "s0pcU8oMha", "uZqLgxi", "WRL+ymklWRS", "rG5pvCkr", "rmoFgSkyWPDdWRVcPtagW4yC", "W4r3W7RdMmkZ", "sSo7a1hcTq", "WQCYW78", "WPRcKCk5", "WR10ESk7WQy", "khhdSmo8pINcRSoRW7mxWO5uWQa", "bCoutf3cUa", "AIpdU8kD", "WQNdUe7dMv8", "ESk+cXy", "WRO6W6i", "yHdcUCkOna", "WOzdubvv", "uxNdLG", "qGbAuSk1", "WP9lW5RdUb8", "W7axW4dcP8o+", "iWjeW6DF", "kaXEW7bf", "WP3cNCk/u8oh", "W5FdPX/cVCo0", "W6tdMmoEgW0", "jmoNWOOkqa", "BCoLFYRdUG", "f8oXeCo5aa", "W7pcP8oXjSoU", "d8ousG", "FSkVgCkeW6S", "W60UCCo/W4u", "AYxcT8kN", "rmoMaCkeW6K", "smo/gq", "W4ZcHs/dK8oS", "WRD4CCkHWQC", "Dmo5FZa", "W7ddKmkpW7ldGG", "WQRcOmkXbay", "CCkYcmkj", "WOTEvJXs", "W4i5eSkUjG", "xIe5", "W7lcJSowW593", "W7KpzCo8W4q"];
  return _n = function() {
    return i;
  }, _n();
}
const oa = Ye(void 0);
oa.displayName = "CommonConfigurationContext";
function BI() {
  const i = Qe(oa);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
function PA(i, n) {
  const t = Vn();
  return PA = function(e, A) {
    e = e - (1 * 9697 + -2346 + -6915 * 1);
    let o = t[e];
    if (PA.jZerln === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      PA.TGbHWF = C, i = arguments, PA.jZerln = !0;
    }
    const g = t[-79 * 55 + -7710 + 12055], a = e + g, I = i[a];
    return I ? o = I : (PA.KvkcwZ === void 0 && (PA.KvkcwZ = !0), o = PA.TGbHWF(o, A), i[a] = o), o;
  }, PA(i, n);
}
function Vn() {
  const i = ["pSoDW5JdImkHW40JW4X5W6K", "WPJdV1npWQ7cRmooWR4Kf8oFnCoqfq", "W7GpW5xcPmoyW5P+aSoNs8kN", "kLGwbSkhxmonW4S5jW", "t8oHC1FdU8ogW6i", "WQHCWPiEWQlcQHW", "amoSWQrABx3cV8k0rG", "CSo2rSoJWPCMkSk5WPOXW67dVCoz", "WO1xag/cIhRdOmo+a8oZcq", "c8k5hCoxhKxdMq", "DmoKW6epW43cN8o0W5pcKmk1mqldIvK", "WQSWW4ZdG8kFDLGQd8o2W67cUIy", "e8oYW7jWn8olnW", "lCkBWRBcHCkiW5GhWP/cJIGUW5RcIW", "WQ5bW4pcQNBcSaq5WPP3WRC", "kvuBsCk0DCoUW58c", "kSkyWRJcJCklW5SeWQZcQH8uW5xcJa", "WQuOW75IWO7cMGzWdCoy", "ubNcVXC", "W6nxW6/dRfNcJSkeWQhcSmoSW6xcVG", "W6hcIgKwW5K", "rmkDhY7cO8kmW5GDf8kAluW", "ctboWPyViSoOl8kGWO0", "WRldIJTcWOGMpHyHduZdPW", "omovW5JdJCovWRCdW7fRW74lW7e", "bNVdOmkquCkkDtpcUCojga"];
  return Vn = function() {
    return i;
  }, Vn();
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return PA(C - -418, g);
  }
  const e = i();
  function A(g, a, I, C, s) {
    return PA(C - -55, s);
  }
  function o(g, a, I, C, s) {
    return PA(g - 210, I);
  }
  function r(g, a, I, C, s) {
    return PA(a - 219, s);
  }
  for (; ; )
    try {
      if (-parseInt(A(380, 390, 391, 383, "MR5V")) / 1 * (-parseInt(r(665, 672, 680, 674, "lEjO")) / 2) + -parseInt(r(660, 661, 666, 653, "wb$d")) / 3 + -parseInt(o(655, 651, "wb$d", 645, 649)) / 4 + -parseInt(A(376, 390, 381, 388, "99AI")) / 5 * (-parseInt(r(656, 663, 673, 659, "R5^r")) / 6) + parseInt(t("R6Q]", 29, 47, 39, 38)) / 7 * (-parseInt(r(669, 670, 666, 672, "9$Ku")) / 8) + -parseInt(r(683, 678, 691, 684, "BoHb")) / 9 * (parseInt(t("MpEk", 28, 32, 21, 12)) / 10) + -parseInt(A(401, 380, 388, 393, "bhcz")) / 11 * (-parseInt(o(656, 648, "BH5#", 661, 665)) / 12) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vn, 1 * -1296101 + -17367 * 43 + 14 * 198036);
function FC() {
  const { assetsDirectoryPath: i } = BI();
  function n(o, r, g, a, I) {
    return PA(g - -367, r);
  }
  const [t, e] = fA();
  AA(() => {
    async function o() {
      const r = new RC(), g = new WC(r);
      function a(I, C, s, E, c) {
        return PA(E - -27, s);
      }
      await g[a(422, 423, "@XY^", 420)](i), e(g);
    }
    o();
  }, [i]);
  const A = {};
  return A[n(81, "*]Ve", 82) + "le"] = t, A;
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return zA(s - 504, a);
  }
  var e = i();
  function A(g, a, I, C, s) {
    return zA(g - -733, a);
  }
  function o(g, a, I, C, s) {
    return zA(a - -592, I);
  }
  for (; ; )
    try {
      var r = parseInt(A(-613, "6kyg", -622, -611, -615)) / 1 + -parseInt(t(611, "Q4vi", 618, 607, 613)) / 2 * (-parseInt(A(-609, "d4^J", -605, -600, -611)) / 3) + -parseInt(A(-617, "huH2", -623, -623, -610)) / 4 + -parseInt(o(-483, -485, "*p41", -491, -493)) / 5 + -parseInt(A(-619, "fon5", -621, -618, -617)) / 6 + -parseInt(A(-616, "3@FJ", -616, -617, -618)) / 7 + parseInt(o(-480, -482, "^G73", -487, -484)) / 8;
      if (r === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zn, -806675 + 2 * -139577 + 1711435);
function Zn() {
  var i = ["WPrVWQNcHf7dRZVdLb7dTSkdWPlcSSkz", "FJJcUMrD", "W4pdUZ9TaSobWRhcV8o5o8kPauW", "W5BcJmkHW6fxW5pcOJxcLCkRd8o4WPi", "q8oKWOhcSgpcO8o1m1ugW7mIW7O", "lSkxWOJcVmorjsaPBSoEvmoHW7u", "fCoNlSovWPVdUsDeWQRcHImPW6O", "WOvLaJrEWQFdHCoBW7RdJSk8W7FcHa", "WRSzWP1VWPu", "WPFcLmofWOziuLzEWRZcLGpcRq", "FSkQWQKEWPddJdZdImkAWOBdJNW", "gudcLmoiymo+W4ix", "hSkNW6tdPt0", "W43cJKaWWQaSmmkHWRS+WRya", "tchcPX4pcgak", "i8oBEXqSm8kCebLPWRSuW74", "FCkUjmkeWP1XmCkNWPCyWQhcJ8odsG", "lmoHW7riAxLiv2/cKCotxq"];
  return Zn = function() {
    return i;
  }, Zn();
}
function zA(i, n) {
  var t = Zn();
  return zA = function(e, A) {
    e = e - (-2 * 4351 + 32 * 31 + 7817);
    var o = t[e];
    if (zA.VRvreT === void 0) {
      var r = function(s) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (var p = 0, m = c.length; p < m; p++)
          x += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(s, E) {
        var c = [], x = 0, d, l = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (var f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      zA.nefepV = g, i = arguments, zA.VRvreT = !0;
    }
    var a = t[860 * -4 + 47 * 197 + -5819], I = e + a, C = i[I];
    return C ? o = C : (zA.aAkPvS === void 0 && (zA.aAkPvS = !0), o = zA.nefepV(o, A), i[I] = o), o;
  }, zA(i, n);
}
function vC({ crosshatch: i }) {
  function n(e, A, o, r, g) {
    return zA(g - 144, e);
  }
  function t(e, A, o, r, g) {
    return zA(A - 180, o);
  }
  return i != null && i[n("fon5", 273, 274, 264, 266) + "id"] ? Yt[t(300, 298, "EsLy") + "r"] : Yt[t(286, 291, "A3Td")];
}
(function(i, n) {
  function t(r, g, a, I, C) {
    return SA(a - -429, C);
  }
  function e(r, g, a, I, C) {
    return SA(C - 766, a);
  }
  const A = i();
  function o(r, g, a, I, C) {
    return SA(r - 987, g);
  }
  for (; ; )
    try {
      if (parseInt(t(-37, -57, -44, -54, "UJ2P")) / 1 + parseInt(e(1173, 1154, "L3WD", 1175, 1158)) / 2 + parseInt(e(1143, 1138, "ol6C", 1135, 1150)) / 3 + -parseInt(t(-68, -52, -53, -37, "9uSB")) / 4 + -parseInt(t(-52, -22, -38, -39, "1^V1")) / 5 * (-parseInt(o(1360, "Zqpq", 1349, 1359, 1356)) / 6) + -parseInt(o(1376, "UJ2P", 1372, 1372, 1384)) / 7 + -parseInt(o(1367, "Zqpq", 1362, 1379, 1381)) / 8 * (-parseInt(t(-26, -47, -42, -37, "Va%w")) / 9) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(zn, 860650 + 5 * -42383 + -105752);
function zn() {
  const i = ["WQzrjSktbW", "W49cWP15hSotrmopfmknm0u", "sCofncOUEmo4fftcHSoFcq", "duJcGfDhWOqlu8o0rItcJmoj", "WQHIWOfSCZZcPmk4FNLdeX0", "cCkSawJdQSk6W7hdUt3dRmkXW7xcJa", "smocncyUCSkHcwxcVmorjSkN", "WOHxsCoPWP8", "W71+W4H5WOhcMuhcTq", "i8kLW44WWOzvW7vACmohtmoJWOe", "hZrCbxq", "Amo6CCkhrNzQt8oWWQL8w0q", "fbRdRmknW7S", "x2/dI8kkjW", "W7fQW6rhdq", "W543gGTu", "W7DbW7/dNWSOWPHzsSkLxMy", "WQegW4LYWO9OW5VdTK/cIZa9", "W6XMz0vHtGyk", "W4uco8oU", "dCkwyW", "BCoWEmkarxuRBSowWR9Juq", "xbZdLXes", "WPzfzSkZWPJdVSo1W5BcMLm8W4a", "WP8OWP3dKCkA", "W7zNW78", "u8kTW6S0rWRcKSk8W7JdUCkVzue", "twDZgL/cKmkQW70", "aYhcGmkFCW", "ct/cHSoYECkFW5ldPx/cRJhdVfO", "WPvah8oMW6tcT8oAW44", "BWVdLHqE", "WPmsWRxcN1i"];
  return zn = function() {
    return i;
  }, zn();
}
function SA(i, n) {
  const t = zn();
  return SA = function(e, A) {
    e = e - (1 * 3873 + -985 * -1 + -641 * 7);
    let o = t[e];
    if (SA.pVzudq === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      SA.uObmCP = C, i = arguments, SA.pVzudq = !0;
    }
    const g = t[-3371 * -1 + -21 * 342 + -37 * -103], a = e + g, I = i[a];
    return I ? o = I : (SA.HheAbD === void 0 && (SA.HheAbD = !0), o = SA.uObmCP(o, A), i[a] = o), o;
  }, SA(i, n);
}
function MC({ children: i }) {
  function n(I, C, s, E, c) {
    return SA(I - -457, C);
  }
  const { bramble: t } = FC();
  function e(I, C, s, E, c) {
    return SA(C - 545, s);
  }
  const A = mA(() => ({ redfin: vC({ crosshatch: t == null ? void 0 : t[e(928, 935, "S&m3") + n(-62, "Q8M^") + n(-59, "nsV5") + "t"]() }), crosshatch: t == null ? void 0 : t[a(389, 376, "dQ5p", 377) + n(-64, "m7pC") + a(375, 364, "n[vF", 363) + "t"](), bramble: t, wasLicenseValidated: t == null ? void 0 : t[a(370, 360, "h5qi", 364) + a(352, 353, "4pHV", 353) + o(758, 776, "9jm6", 772, 770) + o(794, 798, "Zqpq", 788, 798)]() }), [t]);
  function o(I, C, s, E, c) {
    return SA(c - 396, s);
  }
  function r(I, C, s, E, c) {
    return SA(C - 920, s);
  }
  const g = {};
  g[a(366, 354, "AQz^", 359)] = A;
  function a(I, C, s, E, c) {
    return SA(E - -19, s);
  }
  return g[a(388, 369, "q1PN", 378) + n(-54, "UJ2P")] = i, k(Wn[r(1301, 1301, "4pHV") + e(923, 920, "q1PN")], g);
}
const LC = 275 * 17 + 2 * -1557 + 439;
class OC {
  constructor(n) {
    y(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), LC), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== 400 && g.status !== -2953 * 3 + 3076 + 6184 : !0;
  }
}
var vt, Le, _e, Mt, mo, Do, wo, bo;
class JC {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    Y(this, vt);
    Y(this, Le);
    Y(this, _e);
    Y(this, Mt);
    Y(this, mo);
    Y(this, Do);
    Y(this, wo);
    Y(this, bo);
    M(this, vt, t), M(this, mo, n), M(this, bo, e), M(this, Do, window.location.origin), M(this, wo, "7.6.1");
  }
  async init(n) {
    if (M(this, _e, this.shouldCountTransactions(n)), console.info("Transaction counting is " + (S(this, _e) ? "enabled" : "disabled")), K0()) {
      M(this, Le, !0), M(this, _e, !1);
      return;
    }
    if (!S(this, _e)) {
      M(this, Le, !0);
      return;
    }
    if (M(this, Mt, S(this, vt).transactionCountingToken), !S(this, Mt)) {
      console.warn("Transaction counting token is missing"), M(this, Le, !1);
      return;
    }
    M(this, Le, await S(this, vt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !1 : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeTransactionReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeTransactionReportingEnabled : !1;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!S(this, _e) || !S(this, Le)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = S(this, mo), e.id = S(this, Do), e.version = S(this, wo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = S(this, bo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + S(this, Mt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return S(this, Le) || !1;
  }
}
vt = new WeakMap(), Le = new WeakMap(), _e = new WeakMap(), Mt = new WeakMap(), mo = new WeakMap(), Do = new WeakMap(), wo = new WeakMap(), bo = new WeakMap();
function UC(i, n) {
  const { crosshatch: t, bramble: e } = Qi(), [A, o] = fA(null);
  AA(() => {
    if (!t) return;
    (async () => {
      const a = new OC(n), I = new JC({ hwids: e.getHwids(), tokenHandler: a, transactionType: i });
      await I.init(t), o(I);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function YC({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = UC(t, n), A = mA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(Mn.Provider, { value: A, children: i });
}
const He = {};
He.FACE = "web-capture-face", He.DOCUMENT = "web-capture-document", He.MAGNIFEYE = "web-capture-magnifeye", He.SMILE = "web-capture-smile", He.PALM = "web-capture-palm", He.EYEGAZE = "web-capture-eyegaze", He.MULTIRANGE = "web-capture-multirange";
const PC = He;
var KA = function() {
  return KA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, KA.apply(this, arguments);
};
function Pt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function TC(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var HC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, KC = TC(function(i) {
  return HC.test(i) || i.charCodeAt(-7037 + 227 * 31) === -3013 + 1759 * -1 + 4883 && i.charCodeAt(-2971 * -3 + 51 * -11 + 8351 * -1) === 4088 + -3 * 1335 + 27 && i.charCodeAt(9515 + 1843 * 1 + -11356) < -5167 + -2629 * -2;
});
function jC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Mi, za;
function qC() {
  return za || (za = 25 * 29 + -9617 + 1 * 8893, Mi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = 3449 + -7 * 263 + -67 * 24; I < r.length; I++) {
      var C = r[I];
      if (!a(C)) return !1;
      var s = n[C], E = t[C];
      if (o = e ? e.call(A, s, E, C) : void 0, o === !1 || o === void 0 && s !== E) return !1;
    }
    return !0;
  }), Mi;
}
var _C = qC();
const VC = /* @__PURE__ */ jC(_C);
var Z = "-ms-", Eo = "-moz-", K = "-webkit-", QI = "comm", xi = "rule", na = "decl", ZC = "@import", EI = "@keyframes", zC = "@layer", xI = Math.abs, ia = String.fromCharCode, Dr = Object.assign;
function XC(i, n) {
  return xA(i, 0) ^ 8281 + -26 * 174 + -3712 ? (((n << 118 * -31 + 9744 + -6084 ^ xA(i, -5018 + 26 * 193)) << -1823 * -5 + 7899 + 4253 * -4 ^ xA(i, -12 * 620 + -9876 + 17317 * 1)) << 2 ^ xA(i, -1824 + -2693 * 3 + 9905)) << -4 * 1699 + 9392 + -2594 ^ xA(i, 4486 * -2 + -7005 + 17 * 940) : -5 * -439 + 1788 + -3983;
}
function dI(i) {
  return i.trim();
}
function Fe(i, n) {
  return (i = n.exec(i)) ? i[-1730 * -2 + -2131 * 2 + 802] : i;
}
function J(i, n, t) {
  return i.replace(n, t);
}
function En(i, n, t) {
  return i.indexOf(n, t);
}
function xA(i, n) {
  return i.charCodeAt(n) | 26 * 67 + 5349 + -7091;
}
function Tt(i, n, t) {
  return i.slice(n, t);
}
function fe(i) {
  return i.length;
}
function lI(i) {
  return i.length;
}
function co(i, n) {
  return n.push(i), i;
}
function $C(i, n) {
  return i.map(n).join("");
}
function Xa(i, n) {
  return i.filter(function(t) {
    return !Fe(t, n);
  });
}
var di = 1, Ht = 8 * 194 + 5 * -1395 + 5424, uI = 416 + 1 * -6502 + 34 * 179, ne = 4666 * 1 + -8036 + 3370, aA = 32 * -215 + 10 * 300 + -1940 * -2, Xt = "";
function li(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = di, a.column = Ht, a.length = r, a.return = "", a.siblings = g, a;
}
function Ke(i, n) {
  return Dr(li("", null, null, "", null, null, -1 * -2593 + 9872 + -12465, i.siblings), i, { length: -i.length }, n);
}
function pt(i) {
  for (; i.root; ) i = Ke(i.root, { children: [i] });
  co(i, i.siblings);
}
function AB() {
  return aA;
}
function eB() {
  return aA = ne > -9420 + -710 * -9 + 3030 ? xA(Xt, --ne) : 0, Ht--, aA === 10 && (Ht = 5217 + -305 * -9 + -7961, di--), aA;
}
function Ce() {
  return aA = ne < uI ? xA(Xt, ne++) : 0, Ht++, aA === 4 * 2053 + -1 * 755 + -7447 && (Ht = 1, di++), aA;
}
function Et() {
  return xA(Xt, ne);
}
function xn() {
  return ne;
}
function ui(i, n) {
  return Tt(Xt, i, n);
}
function wr(i) {
  switch (i) {
    case -4549 * -1 + 59 * -146 + 3 * 1355:
    case -1060 * 1 + 39 * 17 + 406:
    case 3687 + 33 * -14 + -3215:
    case 3513 + 3 * 1875 + -9125:
    case -7549 + 5 * -846 + 11811:
      return -17 * 554 + -2817 * -3 + 972;
    case -8 * -819 + -9046 + -2527 * -1:
    case 5647 * 1 + 2872 + -2119 * 4:
    case -19 * -343 + -8394 + 1921:
    case 1 * 7694 + 7855 * 1 + -15502:
    case 8265 + -6 * -1259 + 7 * -2251:
    case 3408 + -1 * -7487 + 10831 * -1:
    case -4341 * -1 + -198 * -17 + -7581:
    case -1 * -4079 + 7341 * -1 + 3321:
    case 33 * 188 + -2958 + -3 * 1041:
    case 9456 * 1 + 3572 + -12903:
      return -393 + -5 * -1714 + -8173;
    case -12943 + 1 * 13001:
      return -338 * -24 + -1418 + -1 * 6691;
    case 34:
    case 39:
    case 41 * 105 + 2 * 599 + 1821 * -3:
    case -19638 + -19729 * -1:
      return 7076 + 25 * -359 + 1901;
    case -79 * -37 + -5926 + 3044:
    case 93:
      return 2890 * -1 + -5431 + 8322;
  }
  return 0;
}
function tB(i) {
  return di = Ht = -53 * 109 + -9255 + 15033, uI = fe(Xt = i), ne = 547 + -1 * 547, [];
}
function oB(i) {
  return Xt = "", i;
}
function Li(i) {
  return dI(ui(ne - (5933 + -47 * -186 + -14674), br(i === 518 * 7 + 6374 * -1 + 2839 * 1 ? i + (5459 + -277 * 5 + 509 * -8) : i === -3 * -2425 + 4259 * -1 + -2976 ? i + (-6740 + -749 * -9) : i)));
}
function nB(i) {
  for (; (aA = Et()) && aA < -7360 + 1 * -6926 + 9 * 1591; ) Ce();
  return wr(i) > -11 * 755 + -6631 + 77 * 194 || wr(aA) > -839 * -8 + 4331 * -1 + -2378 ? "" : " ";
}
function iB(i, n) {
  for (; --n && Ce() && !(aA < -1 * 5906 + 9347 * -1 + 15301 || aA > -2 * -3265 + -4 * 1322 + 570 * -2 || aA > -8478 + 542 * 3 + 49 * 141 && aA < -18 * -378 + -1171 * 1 + -5568 || aA > -1 * 4174 + -2 * -2746 + 1 * -1248 && aA < 6436 + -6339 * 1); ) ;
  return ui(i, xn() + (n < -7571 + 9386 * -1 + 1 * 16963 && Et() == 32 && Ce() == 32));
}
function br(i) {
  for (; Ce(); ) switch (aA) {
    case i:
      return ne;
    case -9712 + 1 * 2606 + 5 * 1428:
    case -2148 + 6915 * -1 + -2 * -4551:
      i !== -1 * 4214 + -9314 + 13562 && i !== 883 * -1 + -4789 + -5711 * -1 && br(aA);
      break;
    case 40:
      i === 6751 * -1 + 73 * 53 + 1 * 2923 && br(i);
      break;
    case -1 * 9315 + -2 * -3370 + 21 * 127:
      Ce();
      break;
  }
  return ne;
}
function rB(i, n) {
  for (; Ce() && i + aA !== -6055 + 1 * 6102 + (12520 + -278 * 45); ) if (i + aA === -9269 + 1 * 9311 + (3907 * -1 + -537 * -1 + 3412) && Et() === 4123 + 2487 * -1 + 227 * -7) break;
  return "/*" + ui(n, ne - (9751 + 4733 * -1 + -5017)) + "*" + ia(i === 5411 + -9 * -13 + -5481 ? i : Ce());
}
function aB(i) {
  for (; !wr(Et()); ) Ce();
  return ui(i, ne);
}
function gB(i) {
  return oB(dn("", null, null, null, [""], i = tB(i), 0, [82 * 95 + -8547 + 757], i));
}
function dn(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, C = -9507 + -26 * 68 + 5 * 2255, s = r, E = -5542 * -1 + 729 + -6271, c = 133 * 36 + -1 * -433 + -23 * 227, x = -6801 + -54 * -5 + 6531, d = -356 + 51 * 7, l = 1317 + -1316 * 1, B = -334 * 1 + 6104 + -5769, f = -1 * -214 + -139 * 59 + -49 * -163, p = "", m = A, D = o, b = e, w = p; l; ) switch (x = f, f = Ce()) {
    case 21 * 85 + 6 * -424 + 799:
      if (x != -226 * 16 + -3 * 963 + 6613 && xA(w, s - (1 * -7336 + -1 * -5996 + 1341)) == -336 * 15 + 8867 + 3769 * -1) {
        En(w += J(Li(f), "&", "&\f"), "&\f", xI(I ? g[I - (1117 * 1 + -4635 * -1 + -1 * 5751)] : 0)) != -1 && (B = -1);
        break;
      }
    case -671 * 7 + 6445 + -857 * 2:
    case -4829 + -1 * 7727 + 12595:
    case -9217 + 716 * 13:
      w += Li(f);
      break;
    case 1 * -3932 + 223 * -6 + 5279 * 1:
    case -7277 * 1 + -2933 + -7 * -1460:
    case -1 * -2299 + 6211 + -8497:
    case -6 * 1046 + -5 * 1023 + 11423:
      w += nB(x);
      break;
    case 293 * -1 + 1475 * -2 + 3335:
      w += iB(xn() - (-434 * -7 + 3992 + -213 * 33), 23 * -209 + 2128 + 1343 * 2);
      continue;
    case 6793 * 1 + -1077 + 5669 * -1:
      switch (Et()) {
        case 910 + -1066 * -4 + -5132:
        case -1 * 8069 + 7666 * 1 + 450:
          co(IB(rB(Ce(), xn()), n, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (5028 + 5 * -981) * d:
      g[I++] = fe(w) * B;
    case (2 * 4591 + -8993 * 1 + -64) * d:
    case 9547 + -1 * 7478 + 5 * -402:
    case -196 * -10 + 13 * -757 + 7881:
      switch (f) {
        case -1654 * -1 + -1195 + -459:
        case 317 * -7 + -2387 * 1 + 4731:
          l = 11960 + -26 * 460;
        case 59 + C:
          B == -1 && (w = J(w, /\f/g, "")), c > 848 * 1 + 3478 * -2 + 1018 * 6 && fe(w) - s && co(c > -7997 * 1 + 5 * -1511 + 974 * 16 ? Ag(w + ";", e, t, s - (-1 * 2537 + -5 * -1987 + -7397), a) : Ag(J(w, " ", "") + ";", e, t, s - (4 * 849 + 7048 + -10442 * 1), a), a);
          break;
        case -7487 + 154 * 49:
          w += ";";
        default:
          if (co(b = $a(w, n, t, I, C, A, g, p, m = [], D = [], s, o), o), f === 123)
            if (C === 0) dn(w, n, b, b, m, o, s, g, D);
            else switch (E === -2903 + -19 * -158 && xA(w, 10 * -256 + -4097 + 6660) === 2347 * 1 + -220 + 2017 * -1 ? 7559 + 4791 * 2 + -17041 : E) {
              case -4877 * -1 + -4848 + 71:
              case 108:
              case -1606 * -2 + -4 * 373 + 1 * -1611:
              case 2035 * 2 + 1297 + -5252 * 1:
                dn(i, b, b, e && co($a(i, b, b, -9101 * -1 + 1353 + -5227 * 2, -145 * -29 + 3 * -2667 + 3796, A, g, p, A, m = [], s, D), D), A, D, s, g, e ? m : D);
                break;
              default:
                dn(w, b, b, b, [""], D, -3910 + -1 * -5432 + -1522, g, D);
            }
      }
      I = C = c = -2352 + 14 * 168, d = B = 8605 + 171 * 34 + -14418, p = w = "", s = r;
      break;
    case 1 * 21 + -2977 + 3014:
      s = -27 * -116 + -4675 + 1544 + fe(w), c = x;
    default:
      if (d < 1) {
        if (f == -7 * 871 + -35 * 225 + 1 * 14095) --d;
        else if (f == 7 * -643 + 1523 * 1 + 3103 && d++ == -257 * -19 + -729 * 12 + 5 * 773 && eB() == 9867 + 1 * -9742) continue;
      }
      switch (w += ia(f), f * d) {
        case -3 * 880 + -6854 * 1 + -9532 * -1:
          B = C > 0 ? -2 * 118 + -1 * 9464 + -109 * -89 : (w += "\f", -1);
          break;
        case 139 * -17 + 17 * -109 + 284 * 15:
          g[I++] = (fe(w) - (-5830 * -1 + -2 * -483 + -6795)) * B, B = 2 * 537 + 6101 * -1 + 5028;
          break;
        case 576 + 1 * -6615 + -17 * -359:
          Et() === 45 && (w += Li(Ce())), E = Et(), C = s = fe(p = w += aB(xn())), f++;
          break;
        case 1 * 4105 + 9240 + -380 * 35:
          x === 11 * 197 + -9553 + 7431 && fe(w) == 443 * -1 + 7695 + 145 * -50 && (d = 1 * -8647 + -545 * -15 + 472 * 1);
      }
  }
  return o;
}
function $a(i, n, t, e, A, o, r, g, a, I, C, s) {
  for (var E = A - 1, c = A === -4417 + -3140 * 1 + 7557 ? o : [""], x = lI(c), d = 4 * 2469 + 7682 + -17558, l = 6 * -1097 + 6846 + -2 * 132, B = 769 * -3 + 3868 * 1 + 223 * -7; d < e; ++d) for (var f = -5 * -1621 + 311 * 1 + -8416, p = Tt(i, E + (7379 + 163 * 27 + -11779), E = xI(l = r[d])), m = i; f < x; ++f) (m = dI(l > -4641 + -36 * -174 + -1623 ? c[f] + " " + p : J(p, /&\f/g, c[f]))) && (a[B++] = m);
  return li(i, n, t, A === 2487 * -3 + -4953 * 2 + 17367 ? xi : g, a, I, C, s);
}
function IB(i, n, t, e) {
  return li(i, n, t, QI, ia(AB()), Tt(i, -8087 * 1 + -23 * -277 + 1718, -2), 898 * -2 + -6770 + 8566, e);
}
function Ag(i, n, t, e, A) {
  return li(i, n, t, na, Tt(i, -79 * -68 + -1 * 8086 + 2714, e), Tt(i, e + 1, -1), e, A);
}
function fI(i, n, t) {
  switch (XC(i, n)) {
    case 26 * -44 + 3049 * -1 + 2 * 4648:
      return K + "print-" + i + i;
    case 5330 + -1 * -3643 + -3236:
    case 5 * 136 + 16 * 268 + -767:
    case -13227 + -4 * -4101:
    case 8966 * -1 + -19 * 284 + 17795:
    case -7586 * -1 + -7129 + 8 * 148:
    case 1351 * -7 + 398 + 31 * 436:
    case 2921:
    case 1 * 2787 + -472 * 7 + 6089:
    case 9899 + -58 * -134 + 31 * -365:
    case -4345 + 6 * 993 + 4231:
    case 2 * 734 + 8109 + -6386:
    case -2 * -2 + -1 * -6535 + -106 * -1:
    case 9940 + 1 * 581 + -7516:
    case 6391:
    case -11221 + 5700 * 3:
    case -9520 + -13 * -47 + 14532:
    case -283 * 10 + -29 * 39 + -1 * -10096:
    case -31 * 299 + -1714 + 15582:
    case 1711 * -2 + -9761 + 18038:
    case 1 * 8117 + -6491 + -1 * -2589:
    case 82 * -73 + -65 * -9 + 11790:
    case -4068 + -69 * -133:
    case 513 * 6 + 5170 + -2883:
    case 7 * -617 + -11216 + 21156:
    case -8275 + 310 * -11 + 1 * 15514:
      return K + i + i;
    case -13 * -397 + -2393 * 3 + 6807:
      return Eo + i + i;
    case 8362 + 7895 * 1 + -10908:
    case 5313 + -11 * 97:
    case 4810:
    case -15348 + 1 * 22316:
    case 1 * -113 + 9086 + -6217:
      return K + i + Eo + i + Z + i + i;
    case 6208 + -149 * -11 + -1911:
      switch (xA(i, n + (-2702 + 1 * 5847 + 1567 * -2))) {
        case 4488 + 4374 * -1:
          return K + i + Z + J(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return K + i + Z + J(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 5122 + 1 * -5077:
          return K + i + Z + J(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 7178 + -6241 * -1 + -6591:
    case 4268:
    case -205 * -14 + -7509 + 1 * 7542:
      return K + i + Z + i + i;
    case 9012 + 30 * -317 + -3 * -2221:
      return K + i + Z + "flex-" + i + i;
    case -19485 + -2056 * -12:
      return K + i + J(i, /(\w+).+(:[^]+)/, K + "box-$1$2" + Z + "flex-$1$2") + i;
    case 1700 * 5 + -4 * 1342 + 2311:
      return K + i + Z + "flex-item-" + J(i, /flex-|-self/g, "") + (Fe(i, /flex-|baseline/) ? "" : Z + "grid-row-" + J(i, /flex-|-self/g, "")) + i;
    case 2 * -1163 + -3642 + 10643:
      return K + i + Z + "flex-line-pack" + J(i, /align-content|flex-|-self/g, "") + i;
    case 5548:
      return K + i + Z + J(i, "shrink", "negative") + i;
    case 9685 + 1279 * 2 + -6951:
      return K + i + Z + J(i, "basis", "preferred-size") + i;
    case -1772 + 1 * 7832:
      return K + "box-" + J(i, "-grow", "") + K + i + Z + J(i, "grow", "positive") + i;
    case 2 * 38 + 5191 * -1 + 9669:
      return K + J(i, /([^-])(transform)/g, "$1" + K + "$2") + i;
    case 6187:
      return J(J(J(i, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), i, "") + i;
    case -644 + -5303 * -2 + -4467:
    case 163 * 28 + -1 * -125 + 146 * -5:
      return J(i, /(image-set\([^]*)/, K + "$1$`$1");
    case 4968:
      return J(J(i, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + Z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + K + i + i;
    case 4200:
      if (!Fe(i, /flex-|baseline/)) return Z + "grid-column-align" + Tt(i, n) + i;
      break;
    case -9936 + 1943 * 1 + 10585:
    case -5 * -1535 + 16 * -541 + 4341:
      return Z + J(i, "template-", "") + i;
    case -7856 + -1 * -5257 + 1 * 6983:
    case 1 * 6677 + -5439 + 2378:
      return t && t.some(function(e, A) {
        return n = A, Fe(e.props, /grid-\w+-end/);
      }) ? ~En(i + (t = t[n].value), "span", 229 * 8 + -2 * -2811 + -7454) ? i : Z + J(i, "-start", "") + i + Z + "grid-row-span:" + (~En(t, "span", -1718 + -1718 * -1) ? Fe(t, /\d+/) : +Fe(t, /\d+/) - +Fe(i, /\d+/)) + ";" : Z + J(i, "-start", "") + i;
    case 4896:
    case -1 * -4738 + -1 * -1907 + 839 * -3:
      return t && t.some(function(e) {
        return Fe(e.props, /grid-\w+-start/);
      }) ? i : Z + J(J(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case -754 + 20 * -121 + 6757:
    case -5196 + -17 * 463 + 17135:
    case -37 * -169 + 2597 * 2 + -8915:
      return J(i, /(.+)-inline(.+)/, K + "$1$2") + i;
    case -19 * -57 + -1622 * 9 + 21631:
    case 815 + 1 * -12967 + 19211:
    case -1 * 7027 + -7854 * -1 + 2463 * 2:
    case 5535:
    case 2682 + -9 * -307:
    case 172 * 3 + -437 * 13 + -10866 * -1:
    case 4933:
    case -4467 + -2121 * 3 + -5169 * -3:
    case 1 * 10469 + -1927 + -1 * 3009:
    case -101 * -7 + 3954 + 1128:
    case 7460 + -109 * 46 + 2575:
    case 4765:
      if (fe(i) - (1135 * 3 + 8310 + -11714 * 1) - n > 1073 * -5 + -9959 + 15330) switch (xA(i, n + 1)) {
        case 251 + 1581 * -1 + 1 * 1439:
          if (xA(i, n + (-943 * -5 + -4954 * -2 + 11 * -1329)) !== 4 * -827 + -6224 + -61 * -157) break;
        case -1 * 5521 + 8273 + -2650:
          return J(i, /(.+:)(.+)-([^]+)/, "$1" + K + "$2-$3$1" + Eo + (xA(i, n + (2520 * -1 + -7 * 309 + 3 * 1562)) == -6426 + -4 * 28 + -1 * -6646 ? "$3" : "$2-$3")) + i;
        case 9539 * 1 + -922 * 5 + -4814:
          return ~En(i, "stretch", -19 * 111 + -535 * -11 + 3776 * -1) ? fI(J(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -1759 + -4 * -669 + 4235:
    case -1464 + -1922 * 4 + 15072:
      return J(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return Z + A + ":" + o + I + (r ? Z + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case -9995 * -1 + -5 * 506 + -2516:
      if (xA(i, n + 6) === 32 * 197 + 730 + -6913) return J(i, ":", ":" + K) + i;
      break;
    case -797 * -7 + 9819 + -11 * 814:
      switch (xA(i, xA(i, -7043 * 1 + 1241 + -4 * -1454) === 790 + -1 * 2259 + 1514 ? 13192 + 941 * -14 : 4457 + 39 * -114)) {
        case -6123 + -8527 * -1 + -571 * 4:
          return J(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + K + (xA(i, -1439 * -3 + -6637 * -1 + -10940) === 9245 * 1 + 7357 + -16557 ? "inline-" : "") + "box$3$1" + K + "$2$3$1" + Z + "$2box$3") + i;
        case -2503 * -1 + 4354 + -1 * 6757:
          return J(i, ":", ":" + Z) + i;
      }
      break;
    case -6828 * -1 + -3590 + 2481:
    case 3 * -757 + -4559 * 1 + 9477:
    case -9279 * 1 + 1734 + 9680:
    case 1 * -729 + 3 * 584 + -1 * -2904:
    case -1 * -5651 + -1 * 4881 + -1 * -1621:
      return J(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Xn(i, n) {
  for (var t = "", e = 6863 + 1723 * -3 + 847 * -2; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function sB(i, n, t, e) {
  switch (i.type) {
    case zC:
      if (i.children.length) break;
    case ZC:
    case na:
      return i.return = i.return || i.value;
    case QI:
      return "";
    case EI:
      return i.return = i.value + "{" + Xn(i.children, e) + "}";
    case xi:
      if (!fe(i.value = i.props.join(","))) return "";
  }
  return fe(t = Xn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function cB(i) {
  var n = lI(i);
  return function(t, e, A, o) {
    for (var r = "", g = -395 * -3 + -5043 + -643 * -6; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function CB(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function BB(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case na:
        i.return = fI(i.value, i.length, t);
        return;
      case EI:
        return Xn([Ke(i, { value: J(i.value, "@", "@" + K) })], e);
      case xi:
        if (i.length) return $C(t = i.props, function(A) {
          switch (Fe(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              pt(Ke(i, { props: [J(A, /:(read-\w+)/, ":" + Eo + "$1")] }));
              var o = {};
              o.props = [A], pt(Ke(i, o)), Dr(i, { props: Xa(t, e) });
              break;
            case "::placeholder":
              pt(Ke(i, { props: [J(A, /:(plac\w+)/, ":" + K + "input-$1")] })), pt(Ke(i, { props: [J(A, /:(plac\w+)/, ":" + Eo + "$1")] })), pt(Ke(i, { props: [J(A, /:(plac\w+)/, Z + "input-$1")] }));
              var r = {};
              r.props = [A], pt(Ke(i, r)), Dr(i, { props: Xa(t, e) });
              break;
          }
          return "";
        });
    }
}
var W = {};
W.animationIterationCount = 1, W.aspectRatio = 1, W.borderImageOutset = 1, W.borderImageSlice = 1, W.borderImageWidth = 1, W.boxFlex = 1, W.boxFlexGroup = 1, W.boxOrdinalGroup = 1, W.columnCount = 1, W.columns = 1, W.flex = 1, W.flexGrow = 1, W.flexPositive = 1, W.flexShrink = 1, W.flexNegative = 1, W.flexOrder = 1, W.gridRow = 1, W.gridRowEnd = 1, W.gridRowSpan = 1, W.gridRowStart = 1, W.gridColumn = 1, W.gridColumnEnd = 1, W.gridColumnSpan = 1, W.gridColumnStart = 1, W.msGridRow = 1, W.msGridRowSpan = 1, W.msGridColumn = 1, W.msGridColumnSpan = 1, W.fontWeight = 1, W.lineHeight = 1, W.opacity = 1, W.order = 1, W.orphans = 1, W.tabSize = 1, W.widows = 1, W.zIndex = 1, W.zoom = 1, W.WebkitLineClamp = 1, W.fillOpacity = 1, W.floodOpacity = 1, W.stopOpacity = 1, W.strokeDasharray = 1, W.strokeDashoffset = 1, W.strokeMiterlimit = 1, W.strokeOpacity = 1, W.strokeWidth = 1;
var QB = W, P = {}, lt = typeof process < "u" && P !== void 0 && (P.REACT_APP_SC_ATTR || P.SC_ATTR) || "data-styled", hI = "active", pI = "data-styled-version", fi = "6.1.18", ra = `/*!sc*/
`, $n = typeof window < "u" && typeof document < "u", EB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== "" ? P.REACT_APP_SC_DISABLE_SPEEDY !== "false" && P.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.SC_DISABLE_SPEEDY !== void 0 && P.SC_DISABLE_SPEEDY !== "" ? P.SC_DISABLE_SPEEDY !== "false" && P.SC_DISABLE_SPEEDY : P.NODE_ENV !== "production"), eg = /invalid hook call/i, Zo = /* @__PURE__ */ new Set(), xB = function(i, n) {
  if (P.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 1; a < arguments.length; a++) g[a - (1 * 1893 + -27 * -201 + -7319)] = arguments[a];
        eg.test(r) ? (o = !1, Zo.delete(e)) : A.apply(void (967 * 9 + 19 * 243 + 90 * -148), Pt([r], g, !1));
      }, $A(), o && !Zo.has(e) && (console.warn(e), Zo.add(e));
    } catch (r) {
      eg.test(r.message) && Zo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, hi = Object.freeze([]), Kt = Object.freeze({});
function dB(i, n, t) {
  return t === void 0 && (t = Kt), i.theme !== t.theme && i.theme || n || t.theme;
}
var kr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), lB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uB = /(^-|-$)/g;
function tg(i) {
  return i.replace(lB, "-").replace(uB, "");
}
var fB = /(a)(d)/gi, zo = -9903 * 1 + -19 * -42 + 9157, og = function(i) {
  return String.fromCharCode(i + (i > -2436 + -6049 * -1 + -3588 ? 1 * 4054 + -7113 + 3098 : -2535 * -1 + 3169 + -5607));
};
function Sr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > zo; n = n / zo | 2793 * -1 + 7530 + -4737) t = og(n % zo) + t;
  return (og(n % zo) + t).replace(fB, "$1-$2");
}
var Oi, yI = 2421 * 1 + 9197 + -297 * 21, rt = function(i, n) {
  for (var t = n.length; t; ) i = (1741 * 4 + -797 * 2 + -5337 * 1) * i ^ n.charCodeAt(--t);
  return i;
}, mI = function(i) {
  return rt(yI, i);
};
function hB(i) {
  return Sr(mI(i) >>> -1835 + -1 * -4989 + 38 * -83);
}
function DI(i) {
  return P.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Ji(i) {
  return typeof i == "string" && (P.NODE_ENV === "production" || i.charAt(-2 * -3041 + -3096 + -2986 * 1) === i.charAt(5307 + -211 * 10 + 23 * -139).toLowerCase());
}
var oe = {};
oe.childContextTypes = !0, oe.contextType = !0, oe.contextTypes = !0, oe.defaultProps = !0, oe.displayName = !0, oe.getDefaultProps = !0, oe.getDerivedStateFromError = !0, oe.getDerivedStateFromProps = !0, oe.mixins = !0, oe.propTypes = !0, oe.type = !0;
var je = {};
je.name = !0, je.length = !0, je.prototype = !0, je.caller = !0, je.callee = !0, je.arguments = !0, je.arity = !0;
var nt = {};
nt.$$typeof = !0, nt.compare = !0, nt.defaultProps = !0, nt.displayName = !0, nt.propTypes = !0, nt.type = !0;
var Gt = {};
Gt.$$typeof = !0, Gt.render = !0, Gt.defaultProps = !0, Gt.displayName = !0, Gt.propTypes = !0;
var wI = typeof Symbol == "function" && Symbol.for, bI = wI ? Symbol.for("react.memo") : -6539 * -3 + -37586 * 1 + 78084, pB = wI ? Symbol.for("react.forward_ref") : 129 * 325 + 63932 + -45745, yB = oe, mB = je, kI = nt, DB = ((Oi = {})[pB] = Gt, Oi[bI] = kI, Oi);
function ng(i) {
  return ("type" in (n = i) && n.type.$$typeof) === bI ? kI : "$$typeof" in i ? DB[i.$$typeof] : yB;
  var n;
}
var wB = Object.defineProperty, bB = Object.getOwnPropertyNames, ig = Object.getOwnPropertySymbols, kB = Object.getOwnPropertyDescriptor, SB = Object.getPrototypeOf, rg = Object.prototype;
function SI(i, n, t) {
  if (typeof n != "string") {
    if (rg) {
      var e = SB(n);
      e && e !== rg && SI(i, e, t);
    }
    var A = bB(n);
    ig && (A = A.concat(ig(n)));
    for (var o = ng(i), r = ng(n), g = 8266 + -1 * 8266; g < A.length; ++g) {
      var a = A[g];
      if (!(a in mB || t && t[a] || r && a in r || o && a in o)) {
        var I = kB(n, a);
        try {
          wB(i, a, I);
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
function aa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function gt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function ag(i, n) {
  if (-751 + 16 * -296 + 5487 === i.length) return "";
  for (var t = i[10312 + 4 * -2578], e = -118 * 7 + -6849 + -7676 * -1; e < i.length; e++) t += i[e];
  return t;
}
function qt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Gr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !qt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 1 * 6659 + -1 * -7862 + -14521; e < n.length; e++) i[e] = Gr(i[e], n[e]);
  else if (qt(n))
    for (var e in n) i[e] = Gr(i[e], n[e]);
  return i;
}
function ga(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
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
var GB = P.NODE_ENV !== "production" ? gA : {};
function NB() {
  for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-1 * 205 + 523 * -18 + 1 * 9619], e = [], A = 2358 + -2357 * 1, o = i.length; A < o; A += 11 * 543 + 210 + -22 * 281) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function $t(i) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - (-1616 * 3 + -6443 + -2823 * -4)] = arguments[t];
  return P.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -178 * 5 + -2699 + -37 * -97 ? " Args: ".concat(n.join(", ")) : "")) : new Error(NB.apply(void 0, Pt([GB[i]], n, !1)).trim());
}
var RB = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-9818 + 1 * -457 + -7 * -1541), this.length = 512, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 81 * -44 + 1 * 5788 + -2224 * 1, e = -596 * -7 + -4822 + 650; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 71 * -23 + -1634 * 2 + -38 * -129) < -1267 * -1 + -7808 + 6541) throw $t(5 * 743 + -1 * -4469 + -1 * 8168, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -174 + -1863 * -2 + -3552;
    }
    for (var g = this.indexOfGroup(n + (-9687 + -929 * -3 + 6901)), a = (r = -3 * -865 + -7 * 253 + 1 * -824, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -14515 + 14515 * 1;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -2 * 2846 + 1 * 3823 + 1869 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ra);
    return t;
  }, i;
}(), WB = 616 * 3 + 8614 + 3487 * -3 << 30, ln = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), un = 6557 + 2 * 4219 + -14994, Xo = function(i) {
  if (ln.has(i)) return ln.get(i);
  for (; Ai.has(un); ) un++;
  var n = un++;
  if (P.NODE_ENV !== "production" && ((-3932 + 505 * -1 + 153 * 29 | n) < -7 * -1049 + -9188 + 15 * 123 || n > WB)) throw $t(-4 * 206 + -157 * -57 + -8109, "".concat(n));
  return ln.set(i, n), Ai.set(n, i), n;
}, FB = function(i, n) {
  un = n + (-2622 + 6535 * 1 + -3912), ln.set(i, n), Ai.set(n, i);
}, vB = "style[".concat(lt, "][").concat(pI, '="').concat(fi, '"]'), MB = new RegExp("^".concat(lt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), LB = function(i, n, t) {
  for (var e, A = t.split(","), o = -1873 * 4 + -8634 + -16126 * -1, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, OB = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ra), A = [], o = 2790 + -930 * 3, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(MB);
      if (a) {
        var I = 0 | parseInt(a[1], 10), C = a[-837 * -9 + -8 * -1227 + -17347];
        -7563 * -1 + -818 + -355 * 19 !== I && (FB(C, I), LB(i, C, a[-3743 + -2 * -1873]), i.getTag().insertRules(I, A)), A.length = 0;
      } else A.push(g);
    }
  }
}, gg = function(i) {
  for (var n = document.querySelectorAll(vB), t = 499 * -2 + 3308 * -2 + -3807 * -2, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(lt) !== hI && (OB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function JB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var GI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(lt, "]")));
    return a[a.length - (11405 + -2 * 5702)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(lt, hI), e.setAttribute(pI, fi);
  var r = JB();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, UB = function() {
  function i(n) {
    this.element = GI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 3 * -3127 + 1 * 2657 + 6724, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw $t(2329 + 48 * 126 + -8360);
    }(this.element), this.length = -61 * 81 + -2131 * -1 + 5 * 562;
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
}(), YB = function() {
  function i(n) {
    this.element = GI(n), this.nodes = this.element.childNodes, this.length = -13 * 227 + 59 * 48 + -17 * -7;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 1 * -7458 + 4907 * -2 + 17272) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), PB = function() {
  function i(n) {
    this.rules = [], this.length = -7237 * 1 + -4 * -259 + 1 * 6201;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 11462 + -1 * 11462, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 9365 * -1 + -60 * 129 + 17106), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), Ig = $n, TB = { isServer: !$n, useCSSOMInjection: !EB }, NI = function() {
  function i(n, t, e) {
    n === void 0 && (n = Kt), t === void 0 && (t = {});
    var A = this;
    this.options = KA(KA({}, TB), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && $n && Ig && (Ig = !1, gg(this)), ga(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var E = function(B) {
            return Ai.get(B);
          }(s);
          if (E === void 0) return "continue";
          var c = o.names.get(E), x = r.getGroup(s);
          if (c === void 0 || !c.size || -313 * 25 + -9619 + 17444 === x.length) return "continue";
          var d = "".concat(lt, ".g").concat(s, '[id="').concat(E, '"]'), l = "";
          c !== void 0 && c.forEach(function(B) {
            B.length > -2541 + 2 * -1201 + -4943 * -1 && (l += "".concat(B, ","));
          }), a += "".concat(x).concat(d, '{content:"').concat(l, '"}').concat(ra);
        }, C = -1 * 3959 + 3259 + 700; C < g; C++) I(C);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return Xo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && $n && gg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(KA(KA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -13390 + -26 * -515) + (49 * -35 + 2967 + -9 * 139);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new PB(A) : e ? new UB(A) : new YB(A);
    }(this.options), new RB(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Xo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Xo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Xo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), HB = /&/g, KB = /^\s*\/\/.*$/gm;
function RI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = RI(t.children, n)), t;
  });
}
function WI(i) {
  var n, t, e, A = i === void 0 ? Kt : i, o = A.options, r = o === void 0 ? Kt : o, g = A.plugins, a = g === void 0 ? hi : g, I = function(E, c, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 3358 * -1 + -813 * 5 + 7423 ? ".".concat(n) : E;
  }, C = a.slice();
  C.push(function(E) {
    E.type === xi && E.value.includes("&") && (E.props[-5 * -205 + 2919 + -3944] = E.props[5 * 1195 + -6151 + 176].replace(HB, t).replace(e, I));
  }), r.prefix && C.push(BB), C.push(sB);
  var s = function(E, c, x, d) {
    c === void 0 && (c = ""), x === void 0 && (x = ""), d === void 0 && (d = "&"), n = d, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(KB, ""), B = gB(x || c ? "".concat(x, " ").concat(c, " { ").concat(l, " }") : l);
    r.namespace && (B = RI(B, r.namespace));
    var f = [];
    return Xn(B, cB(C.concat(CB(function(p) {
      return f.push(p);
    })))), f;
  };
  return s.hash = a.length ? a.reduce(function(E, c) {
    return c.name || $t(-38 * -251 + 613 + -10136), rt(E, c.name);
  }, yI).toString() : "", s;
}
var jB = new NI(), Nr = WI(), Ia = dt.createContext({ shouldForwardProp: void 0, styleSheet: jB, stylis: Nr });
Ia.Consumer;
var qB = dt.createContext(void 0);
function Rr() {
  return Qe(Ia);
}
function _B(i) {
  var n = fA(i.stylisPlugins), t = n[8195 + 237 * 15 + -235 * 50], e = n[189 * 49 + 7902 * 1 + -17162], A = Rr().styleSheet, o = mA(function() {
    var C = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(s)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = mA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = C, s.plugins = t, WI(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  AA(function() {
    VC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = mA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, dt.createElement(Ia.Provider, a, dt.createElement(qB.Provider, I, i.children));
}
var sg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Nr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ga(this, function() {
      throw $t(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Nr), this.name + n.hash;
  }, i;
}(), VB = function(i) {
  return i >= "A" && i <= "Z";
};
function cg(i) {
  for (var n = "", t = 789 * -6 + 1 * 1541 + 1 * 3193; t < i.length; t++) {
    var e = i[t];
    if (-2 * -3047 + -2892 + 291 * -11 === t && e === "-" && i[393 * -2 + -1939 * -5 + 1 * -8909] === "-") return i;
    VB(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var FI = function(i) {
  return i == null || i === !1 || i === "";
}, vI = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !FI(o) && (Array.isArray(o) && o.isCss || jt(o) ? e.push("".concat(cg(A), ":"), o, ";") : qt(o) ? e.push.apply(e, Pt(Pt(["".concat(A, " {")], vI(o), !1), ["}"], !1)) : e.push("".concat(cg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 3965 + 13 * -305 === t || n in QB || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function xt(i, n, t, e) {
  if (FI(i)) return [];
  if (aa(i)) return [".".concat(i.styledComponentId)];
  if (jt(i)) {
    if (!jt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return P.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof sg || qt(A) || A === null || console.error("".concat(DI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), xt(A, n, t, e);
  }
  var o;
  return i instanceof sg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : qt(i) ? vI(i) : Array.isArray(i) ? Array.prototype.concat.apply(hi, i.map(function(r) {
    return xt(r, n, t, e);
  })) : [i.toString()];
}
function ZB(i) {
  for (var n = 9818 + -3783 * -1 + -7 * 1943; n < i.length; n += -6319 + -1264 * -5) {
    var t = i[n];
    if (jt(t) && !aa(t)) return !1;
  }
  return !0;
}
var zB = mI(fi), XB = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = P.NODE_ENV === "production" && (e === void 0 || e.isStatic) && ZB(n), this.componentId = t, this.baseHash = rt(zB, t), this.baseStyle = e, NI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = gt(A, this.staticRulesId);
      else {
        var o = ag(xt(this.rules, n, t, e)), r = Sr(rt(this.baseHash, o) >>> 6061 + -279 * -10 + -8851);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = gt(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = rt(this.baseHash, e.hash), I = "", C = -23 * -386 + 2154 * -1 + 1 * -6724; C < this.rules.length; C++) {
        var s = this.rules[C];
        if (typeof s == "string") I += s, P.NODE_ENV !== "production" && (a = rt(a, s));
        else if (s) {
          var E = ag(xt(s, n, t, e));
          a = rt(a, E + C), I += E;
        }
      }
      if (I) {
        var c = Sr(a >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(I, ".".concat(c), void 0, this.componentId)), A = gt(A, c);
      }
    }
    return A;
  }, i;
}(), MI = dt.createContext(void 0);
MI.Consumer;
var Ui = {}, Cg = /* @__PURE__ */ new Set();
function $B(i, n, t) {
  var e = aa(i), A = i, o = !Ji(i), r = n.attrs, g = r === void 0 ? hi : r, a = n.componentId, I = a === void 0 ? function(D, b) {
    var w = typeof D != "string" ? "sc" : tg(D);
    Ui[w] = (Ui[w] || -2 * -3564 + -5606 + -1522 * 1) + (2 * -445 + -926 + 23 * 79);
    var F = "".concat(w, "-").concat(hB(fi + w + Ui[w]));
    return b ? "".concat(b, "-").concat(F) : F;
  }(n.displayName, n.parentComponentId) : a, C = n.displayName, s = C === void 0 ? function(D) {
    return Ji(D) ? "styled.".concat(D) : "Styled(".concat(DI(D), ")");
  }(i) : C, E = n.displayName && n.componentId ? "".concat(tg(n.displayName), "-").concat(n.componentId) : n.componentId || I, c = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(D, b) {
        return d(D, b) && l(D, b);
      };
    } else x = d;
  }
  var B = new XB(t, E, e ? A.componentStyle : void 0);
  function f(D, b) {
    return function(w, F, v) {
      var L = w.attrs, T = w.componentStyle, H = w.defaultProps, _ = w.foldedComponentIds, V = w.styledComponentId, JA = w.target, Ee = dt.useContext(MI), Ao = Rr(), pi = w.shouldForwardProp || Ao.shouldForwardProp;
      P.NODE_ENV !== "production" && Rn(V);
      var Qa = dB(F, Ee, H) || Kt, we = function(Ho, oo, Ko) {
        var ft = {};
        ft.className = void 0, ft.theme = Ko;
        for (var Di, $e = KA(KA({}, oo), ft), wi = 2399 * 1 + -1 * 2221 + -178; wi < Ho.length; wi += -6858 + 4495 * -1 + -811 * -14) {
          var jo = jt(Di = Ho[wi]) ? Di($e) : Di;
          for (var Pe in jo) $e[Pe] = Pe === "className" ? gt($e[Pe], jo[Pe]) : Pe === "style" ? KA(KA({}, $e[Pe]), jo[Pe]) : jo[Pe];
        }
        return oo.className && ($e.className = gt($e.className, oo.className)), $e;
      }(L, F, Qa), eo = we.as || JA, to = {};
      for (var ee in we) we[ee] === void 0 || ee[3725 * 1 + -53 * 31 + -2082] === "$" || ee === "as" || ee === "theme" && we.theme === Qa || (ee === "forwardedAs" ? to.as = we.forwardedAs : pi && !pi(ee, eo) || (to[ee] = we[ee], pi || P.NODE_ENV !== "development" || KC(ee) || Cg.has(ee) || !kr.has(eo) || (Cg.add(ee), console.warn('styled-components: it looks like an unknown prop "'.concat(ee, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var yi = function(Ho, oo) {
        var Ko = Rr(), ft = Ho.generateAndInjectStyles(oo, Ko.styleSheet, Ko.stylis);
        return P.NODE_ENV !== "production" && Rn(ft), ft;
      }(T, we);
      P.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(yi);
      var mi = gt(_, V);
      return yi && (mi += " " + yi), we.className && (mi += " " + we.className), to[Ji(eo) && !kr.has(eo) ? "class" : "className"] = mi, v && (to.ref = v), OA(eo, to);
    }(p, D, b);
  }
  f.displayName = s;
  var p = dt.forwardRef(f), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = c, p.componentStyle = B, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? gt(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = E, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = e ? function(b) {
      for (var w = [], F = -1503 + -170 * -3 + -142 * -7; F < arguments.length; F++) w[F - (3870 + 1 * 679 + -4548)] = arguments[F];
      for (var v = 678 * -3 + -10 * -853 + -6496, L = w; v < L.length; v++) Gr(b, L[v], !0);
      return b;
    }({}, A.defaultProps, D) : D;
  } }), P.NODE_ENV !== "production" && (xB(s, E), p.warnTooManyClasses = /* @__PURE__ */ function(D, b) {
    var w = {}, F = !1;
    return function(v) {
      if (!F && (w[v] = !0, Object.keys(w).length >= 116 * 15 + -5488 + 3948)) {
        var L = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(-17 * -383 + 3965 + 5138 * -2, " classes were generated for component ").concat(D).concat(L, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), F = !0, w = {};
      }
    };
  }(s, E)), ga(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && SI(p, i, m), p;
}
function Bg(i, n) {
  for (var t = [i[868 * 1 + -4617 + 23 * 163]], e = -142 * -43 + 3 * -2423 + 1163 * 1, A = n.length; e < A; e += 13150 + -3 * 4383) t.push(n[e], i[e + (-13 * 601 + -5942 * -1 + 1872)]);
  return t;
}
var Qg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function AQ(i) {
  for (var n = [], t = 14945 + 4 * -3736; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (jt(i) || qt(i)) return Qg(xt(Bg(hi, Pt([i], n, !0))));
  var e = i;
  return -10893 + -3 * -3631 === n.length && -43 * -51 + 420 * 15 + -8492 === e.length && typeof e[-1 * -9777 + -254 * 32 + -1649] == "string" ? xt(e) : Qg(xt(Bg(e, n)));
}
function Wr(i, n, t) {
  if (t === void 0 && (t = Kt), !n) throw $t(-4892 + -3 * -3018 + -4161, n);
  var e = function(A) {
    for (var o = [], r = -4601 + 18 * -402 + 11838; r < arguments.length; r++) o[r - (4852 + 1 * -4851)] = arguments[r];
    return i(n, t, AQ.apply(void 0, Pt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Wr(i, n, KA(KA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Wr(i, n, KA(KA({}, t), A));
  }, e;
}
var LI = function(i) {
  return Wr($B, i);
}, Po = LI;
kr.forEach(function(i) {
  Po[i] = LI(i);
});
P.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var $o = "__sc-".concat(lt, "__");
P.NODE_ENV !== "production" && P.NODE_ENV !== "test" && typeof window < "u" && (window[$o] || (window[$o] = 263 * 23 + 97 * -69 + 1 * 644), -6093 + 8 * -1042 + 14430 === window[$o] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[$o] += 7486 + -33 * -166 + -12963);
var Ge;
function OI(i) {
  const n = {};
  return n.lang = Ge == null ? void 0 : Ge.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = Ge == null ? void 0 : Ge.abortEarly, n.abortPipeEarly = Ge == null ? void 0 : Ge["abortPipeEarly"], n;
}
var Yi;
function eQ(i) {
  return Yi == null ? void 0 : Yi.get(i);
}
var Pi;
function tQ(i) {
  return Pi == null ? void 0 : Pi.get(i);
}
var Ti;
function oQ(i, n) {
  var t;
  return (t = Ti == null ? void 0 : Ti.get(i)) == null ? void 0 : t.get(n);
}
function JI(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function _t(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, g = (A == null ? void 0 : A.received) ?? JI(o), a = {};
  a.kind = i.kind, a.type = i.type, a.input = o, a.expected = r, a.received = g, a.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + g, a.requirement = i.requirement, a.path = A == null ? void 0 : A.path, a.issues = A == null ? void 0 : A.issues, a.lang = e.lang, a.abortEarly = e.abortEarly, a.abortPipeEarly = e.abortPipeEarly;
  const I = a, C = i.kind === "schema", s = (A == null ? void 0 : A.message) ?? i.message ?? oQ(i.reference, I.lang) ?? (C ? tQ(I.lang) : null) ?? e.message ?? eQ(I.lang);
  s !== void 0 && (I.message = typeof s == "function" ? s(I) : s), C && (t.typed = !1), t.issues ? t.issues.push(I) : t.issues = [I];
}
function To(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, OI());
  } };
}
function nQ(i, n) {
  const t = [...new Set(i)];
  return t.length > 349 * 19 + -1 * -7729 + -14359 ? "(" + t.join(" " + n + " ") + ")" : t[9559 + 1 * 2567 + -12126] ?? "never";
}
var iQ = class extends Error {
  constructor(i) {
    super(i[-1350 + 5 * 1135 + -4325].message), this.name = "ValiError", this.issues = i;
  }
};
function UI(i, n) {
  return { kind: "validation", type: "min_length", reference: UI, async: !1, expects: ">=" + i, requirement: i, message: n, "~run"(t, e) {
    return t.typed && t.value.length < this.requirement && _t(this, "length", t, e, { received: "" + t.value.length }), t;
  } };
}
function rQ(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
function aQ(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
function YI(i, n) {
  return { kind: "schema", type: "array", reference: YI, expects: "Array", async: !1, item: i, message: n, get "~standard"() {
    return To(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (Array.isArray(A)) {
      t.typed = !0, t.value = [];
      for (let r = -145 * 57 + 4 * 887 + 4717; r < A.length; r++) {
        const g = A[r], a = {};
        a.value = g;
        const I = this.item["~run"](a, e);
        if (I.issues) {
          const C = {};
          C.type = "array", C.origin = "value", C.input = A, C.key = r, C.value = g;
          const s = C;
          for (const E of I.issues)
            E.path ? E.path.unshift(s) : E.path = [s], (o = t.issues) == null || o.push(E);
          if (!t.issues && (t.issues = I.issues), e.abortEarly) {
            t.typed = !1;
            break;
          }
        }
        !I.typed && (t.typed = !1), t.value.push(I.value);
      }
    } else _t(this, "type", t, e);
    return t;
  } };
}
function Fr(i) {
  return { kind: "schema", type: "function", reference: Fr, expects: "Function", async: !1, message: i, get "~standard"() {
    return To(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : _t(this, "type", n, t), n;
  } };
}
function PI(i, n) {
  return { kind: "schema", type: "object", reference: PI, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return To(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (A && typeof A == "object") {
      t.typed = !0, t.value = {};
      for (const r in this.entries) {
        const g = this.entries[r];
        if (r in A || (g.type === "exact_optional" || g.type === "optional" || g.type === "nullish") && g.default !== void 0) {
          const a = r in A ? A[r] : aQ(g), I = {};
          I.value = a;
          const C = g["~run"](I, e);
          if (C.issues) {
            const s = {};
            s.type = "object", s.origin = "value", s.input = A, s.key = r, s.value = a;
            const E = s;
            for (const c of C.issues)
              c.path ? c.path.unshift(E) : c.path = [E], (o = t.issues) == null || o.push(c);
            if (!t.issues && (t.issues = C.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !C.typed && (t.typed = !1), t.value[r] = C.value;
        } else if (g.fallback !== void 0) t.value[r] = rQ(g);
        else if (g.type !== "exact_optional" && g.type !== "optional" && g.type !== "nullish") {
          const a = {};
          if (a.input = void 0, a.expected = '"' + r + '"', a.path = [{ type: "object", origin: "key", input: A, key: r, value: A[r] }], _t(this, "key", t, e, a), e.abortEarly) break;
        }
      }
    } else _t(this, "type", t, e);
    return t;
  } };
}
function TI(i, n) {
  return { kind: "schema", type: "picklist", reference: TI, expects: nQ(i.map(JI), "|"), async: !1, options: i, message: n, get "~standard"() {
    return To(this);
  }, "~run"(t, e) {
    return this.options.includes(t.value) ? t.typed = !0 : _t(this, "type", t, e), t;
  } };
}
function gQ(i, n, t) {
  const e = {};
  e.value = n;
  const A = i["~run"](e, OI(t));
  if (A.issues) throw new iQ(A.issues);
  return A.value;
}
function IQ(...i) {
  return { ...i[0], pipe: i, get "~standard"() {
    return To(this);
  }, "~run"(n, t) {
    for (const e of i)
      if (e.kind !== "metadata") {
        if (n.issues && (e.kind === "schema" || e.kind === "transformation")) {
          n.typed = !1;
          break;
        }
        (!n.issues || !t.abortEarly && !t.abortPipeEarly) && (n = e["~run"](n, t));
      }
    return n;
  } };
}
function sQ(i, n) {
  try {
    gQ(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: oC(i.assetsDirectoryPath)
  };
}
function cQ({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = mA(() => sQ(n, t), [n, t]);
  return /* @__PURE__ */ k(oa.Provider, { value: e, children: i });
}
function CQ({
  children: i,
  configuration: n
}) {
  const t = Object.values(XA), e = PI({
    challengeSequence: IQ(
      YI(
        TI(t, "Challenge sequence must be an array of valid challenge items")
      ),
      UI(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: Fr("On complete must be a function"),
    onError: Fr("On error must be a function")
  });
  return /* @__PURE__ */ k(
    cQ,
    {
      configuration: n,
      validationSchema: e,
      children: i
    }
  );
}
const ei = Ye(void 0);
ei.displayName = "ControllerContext";
function HI() {
  const i = Qe(
    ei
  );
  if (i === void 0)
    throw new Error(`${ei.displayName} must be used within a ControllerProvider`);
  return i;
}
function BQ({ children: i, controller: n }) {
  const t = mA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ k(ei.Provider, { value: t, children: i });
}
function KI(i, n) {
  const t = $A(n);
  AA(() => {
    t.current = n;
  }, [n]), AA(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function QQ(i, n) {
  const { handleAppStateChange: t } = Ae(), e = me((A) => {
    if (!A.detail) return;
    const { content: o, imageData: r } = A.detail;
    t(j.COMPLETE), n(r, o);
  }, [n, t]);
  KI(i, e);
}
const vr = {};
vr.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", vr.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const q = vr, Mr = {};
Mr.ON_COMPLETE = "multi-range-auto-capture:on-complete", Mr.DEV = "multi-range-auto-capture:dev";
const jI = Mr, EQ = { ...jI, ...Ue }, xQ = EQ;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const qI = Symbol("Comlink.proxy"), dQ = Symbol("Comlink.endpoint"), _I = Symbol("Comlink.releaseProxy"), Hi = Symbol("Comlink.finalizer"), fn = Symbol("Comlink.thrown"), VI = (i) => typeof i == "object" && i !== null || typeof i == "function", lQ = {
  canHandle: (i) => VI(i) && i[qI],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return zI(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), $I(i);
  }
}, uQ = {
  canHandle: (i) => VI(i) && fn in i,
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
}, ZI = /* @__PURE__ */ new Map([
  ["proxy", lQ],
  ["throw", uQ]
]);
function fQ(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function zI(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!fQ(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(at);
    let I;
    try {
      const C = g.slice(0, -1).reduce((E, c) => E[c], i), s = g.reduce((E, c) => E[c], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          C[g.slice(-1)[0]] = at(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(C, a);
          break;
        case "CONSTRUCT":
          {
            const E = new s(...a);
            I = wQ(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: c } = new MessageChannel();
            zI(i, c), I = DQ(E, [E]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [fn]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [fn]: 0 })).then((C) => {
      const [s, E] = ni(C);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), XI(n), Hi in i && typeof i[Hi] == "function" && i[Hi]());
    }).catch((C) => {
      const [s, E] = ni({
        value: new TypeError("Unserializable return value"),
        [fn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), E);
    });
  }), n.start && n.start();
}
function hQ(i) {
  return i.constructor.name === "MessagePort";
}
function XI(i) {
  hQ(i) && i.close();
}
function $I(i, n) {
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
  }), Lr(i, t, [], n);
}
function An(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function As(i) {
  return Nt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    XI(i);
  });
}
const ti = /* @__PURE__ */ new WeakMap(), oi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (ti.get(i) || 0) - 1;
  ti.set(i, n), n === 0 && As(i);
});
function pQ(i, n) {
  const t = (ti.get(n) || 0) + 1;
  ti.set(n, t), oi && oi.register(i, n, i);
}
function yQ(i) {
  oi && oi.unregister(i);
}
function Lr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (An(A), g === _I)
        return () => {
          yQ(o), As(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = Nt(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(at);
        return a.then.bind(a);
      }
      return Lr(i, n, [...t, g]);
    },
    set(r, g, a) {
      An(A);
      const [I, C] = ni(a);
      return Nt(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, C).then(at);
    },
    apply(r, g, a) {
      An(A);
      const I = t[t.length - 1];
      if (I === dQ)
        return Nt(i, n, {
          type: "ENDPOINT"
        }).then(at);
      if (I === "bind")
        return Lr(i, n, t.slice(0, -1));
      const [C, s] = Eg(a);
      return Nt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: C
      }, s).then(at);
    },
    construct(r, g) {
      An(A);
      const [a, I] = Eg(g);
      return Nt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: a
      }, I).then(at);
    }
  });
  return pQ(o, i), o;
}
function mQ(i) {
  return Array.prototype.concat.apply([], i);
}
function Eg(i) {
  const n = i.map(ni);
  return [n.map((t) => t[0]), mQ(n.map((t) => t[1]))];
}
const es = /* @__PURE__ */ new WeakMap();
function DQ(i, n) {
  return es.set(i, n), i;
}
function wQ(i) {
  return Object.assign(i, { [qI]: !0 });
}
function ni(i) {
  for (const [n, t] of ZI)
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
    es.get(i) || []
  ];
}
function at(i) {
  switch (i.type) {
    case "HANDLER":
      return ZI.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Nt(i, n, t, e) {
  return new Promise((A) => {
    const o = bQ();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function bQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function kQ() {
  return BI();
}
const sa = Ye(void 0);
sa.displayName = "CommonThresholdsContext";
function SQ() {
  const i = Qe(sa);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function ts() {
  return SQ();
}
class GQ {
  constructor(n, t, e, A, o, r, g, a) {
    y(this, "isDetectorInitialized");
    y(this, "assetsDirectoryPath");
    y(this, "compatibleSamVersion");
    y(this, "cameraService");
    y(this, "dispatcher");
    y(this, "onCaptureData");
    y(this, "protobuf");
    y(this, "samVersion");
    y(this, "currentDetection");
    y(this, "detections");
    y(this, "sessionToken");
    y(this, "analytics");
    y(this, "transactionCounting");
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.analytics = r, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = a, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new G("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    var A, o, r;
    const t = (A = this.currentDetection) == null ? void 0 : A.name, e = (o = this.detections) == null ? void 0 : o[n];
    if (!e) throw new G("Detection " + n + " not found");
    if (!((r = this.allowedDetectionTransitions[t]) != null && r.includes(n))) throw new G("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new G("Detection not initialized");
    this.currentDetection.run();
  }
  reset() {
    var n;
    (n = this.currentDetection) == null || n.stop(), this.onCaptureData.clear(), this.setDetections(void 0), this.setCurrentDetection(void 0);
  }
  areVersionsCompatible(n) {
    return n === this.compatibleSamVersion;
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
  getCurrentDetectionName() {
    var n;
    return (n = this.currentDetection) == null ? void 0 : n.name;
  }
  setCurrentDetection(n) {
    this.currentDetection = n, this.dispatcher.dispatchPhaseChangedEvent(n == null ? void 0 : n.name);
  }
  setDetections(n) {
    this.detections = n;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new G("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  setThresholds(n) {
    var t;
    (t = this.currentDetection) == null || t.setThresholds(n);
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(T0, "") + n;
  }
}
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xg = {}, Ki = {}, ji, dg;
function NQ() {
  if (dg) return ji;
  dg = 1, ji = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            a(I);
          else {
            for (var C = new Array(arguments.length - 1), s = 0; s < C.length; )
              C[s++] = arguments[s];
            g.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, a(I));
      }
    });
  }
  return ji;
}
var lg = {}, ug;
function RQ() {
  return ug || (ug = 1, function(i) {
    var n = i;
    n.length = function(r) {
      var g = r.length;
      if (!g)
        return 0;
      for (var a = 0; --g % 4 > 1 && r.charAt(g) === "="; )
        ++a;
      return Math.ceil(r.length * 3) / 4 - a;
    };
    for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
      e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
    n.encode = function(r, g, a) {
      for (var I = null, C = [], s = 0, E = 0, c; g < a; ) {
        var x = r[g++];
        switch (E) {
          case 0:
            C[s++] = t[x >> 2], c = (x & 3) << 4, E = 1;
            break;
          case 1:
            C[s++] = t[c | x >> 4], c = (x & 15) << 2, E = 2;
            break;
          case 2:
            C[s++] = t[c | x >> 6], C[s++] = t[x & 63], E = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), s = 0);
      }
      return E && (C[s++] = t[c], C[s++] = 61, E === 1 && (C[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, C.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var I = a, C = 0, s, E = 0; E < r.length; ) {
        var c = r.charCodeAt(E++);
        if (c === 61 && C > 1)
          break;
        if ((c = e[c]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            s = c, C = 1;
            break;
          case 1:
            g[a++] = s << 2 | (c & 48) >> 4, s = c, C = 2;
            break;
          case 2:
            g[a++] = (s & 15) << 4 | (c & 60) >> 2, s = c, C = 3;
            break;
          case 3:
            g[a++] = (s & 3) << 6 | c, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return a - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(lg)), lg;
}
var qi, fg;
function WQ() {
  if (fg) return qi;
  fg = 1, qi = i;
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
  }, qi;
}
var _i, hg;
function FQ() {
  if (hg) return _i;
  hg = 1, _i = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(c, x, d) {
        r[0] = c, x[d] = g[0], x[d + 1] = g[1], x[d + 2] = g[2], x[d + 3] = g[3];
      }
      function C(c, x, d) {
        r[0] = c, x[d] = g[3], x[d + 1] = g[2], x[d + 2] = g[1], x[d + 3] = g[0];
      }
      o.writeFloatLE = a ? I : C, o.writeFloatBE = a ? C : I;
      function s(c, x) {
        return g[0] = c[x], g[1] = c[x + 1], g[2] = c[x + 2], g[3] = c[x + 3], r[0];
      }
      function E(c, x) {
        return g[3] = c[x], g[2] = c[x + 1], g[1] = c[x + 2], g[0] = c[x + 3], r[0];
      }
      o.readFloatLE = a ? s : E, o.readFloatBE = a ? E : s;
    }() : function() {
      function r(a, I, C, s) {
        var E = I < 0 ? 1 : 0;
        if (E && (I = -I), I === 0)
          a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, s);
        else if (isNaN(I))
          a(2143289344, C, s);
        else if (I > 34028234663852886e22)
          a((E << 31 | 2139095040) >>> 0, C, s);
        else if (I < 11754943508222875e-54)
          a((E << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, C, s);
        else {
          var c = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -c) * 8388608) & 8388607;
          a((E << 31 | c + 127 << 23 | x) >>> 0, C, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, C) {
        var s = a(I, C), E = (s >> 31) * 2 + 1, c = s >>> 23 & 255, x = s & 8388607;
        return c === 255 ? x ? NaN : E * (1 / 0) : c === 0 ? E * 1401298464324817e-60 * x : E * Math.pow(2, c - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(c, x, d) {
        r[0] = c, x[d] = g[0], x[d + 1] = g[1], x[d + 2] = g[2], x[d + 3] = g[3], x[d + 4] = g[4], x[d + 5] = g[5], x[d + 6] = g[6], x[d + 7] = g[7];
      }
      function C(c, x, d) {
        r[0] = c, x[d] = g[7], x[d + 1] = g[6], x[d + 2] = g[5], x[d + 3] = g[4], x[d + 4] = g[3], x[d + 5] = g[2], x[d + 6] = g[1], x[d + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : C, o.writeDoubleBE = a ? C : I;
      function s(c, x) {
        return g[0] = c[x], g[1] = c[x + 1], g[2] = c[x + 2], g[3] = c[x + 3], g[4] = c[x + 4], g[5] = c[x + 5], g[6] = c[x + 6], g[7] = c[x + 7], r[0];
      }
      function E(c, x) {
        return g[7] = c[x], g[6] = c[x + 1], g[5] = c[x + 2], g[4] = c[x + 3], g[3] = c[x + 4], g[2] = c[x + 5], g[1] = c[x + 6], g[0] = c[x + 7], r[0];
      }
      o.readDoubleLE = a ? s : E, o.readDoubleBE = a ? E : s;
    }() : function() {
      function r(a, I, C, s, E, c) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          a(0, E, c + I), a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, c + C);
        else if (isNaN(s))
          a(0, E, c + I), a(2146959360, E, c + C);
        else if (s > 17976931348623157e292)
          a(0, E, c + I), a((x << 31 | 2146435072) >>> 0, E, c + C);
        else {
          var d;
          if (s < 22250738585072014e-324)
            d = s / 5e-324, a(d >>> 0, E, c + I), a((x << 31 | d / 4294967296) >>> 0, E, c + C);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), d = s * Math.pow(2, -l), a(d * 4503599627370496 >>> 0, E, c + I), a((x << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, c + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, C, s, E) {
        var c = a(s, E + I), x = a(s, E + C), d = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, B = 4294967296 * (x & 1048575) + c;
        return l === 2047 ? B ? NaN : d * (1 / 0) : l === 0 ? d * 5e-324 * B : d * Math.pow(2, l - 1075) * (B + 4503599627370496);
      }
      o.readDoubleLE = g.bind(null, e, 0, 4), o.readDoubleBE = g.bind(null, A, 4, 0);
    }(), o;
  }
  function n(o, r, g) {
    r[g] = o & 255, r[g + 1] = o >>> 8 & 255, r[g + 2] = o >>> 16 & 255, r[g + 3] = o >>> 24;
  }
  function t(o, r, g) {
    r[g] = o >>> 24, r[g + 1] = o >>> 16 & 255, r[g + 2] = o >>> 8 & 255, r[g + 3] = o & 255;
  }
  function e(o, r) {
    return (o[r] | o[r + 1] << 8 | o[r + 2] << 16 | o[r + 3] << 24) >>> 0;
  }
  function A(o, r) {
    return (o[r] << 24 | o[r + 1] << 16 | o[r + 2] << 8 | o[r + 3]) >>> 0;
  }
  return _i;
}
function pg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Vi, yg;
function vQ() {
  if (yg) return Vi;
  yg = 1, Vi = i;
  function i(n) {
    try {
      if (typeof pg != "function")
        return null;
      var t = pg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Vi;
}
var mg = {}, Dg;
function MQ() {
  return Dg || (Dg = 1, function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, g = [], a = 0, I; e < A; )
        I = t[e++], I < 128 ? g[a++] = I : I > 191 && I < 224 ? g[a++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, g[a++] = 55296 + (I >> 10), g[a++] = 56320 + (I & 1023)) : g[a++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, g)), a = 0);
      return r ? (a && r.push(String.fromCharCode.apply(String, g.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, g.slice(0, a));
    }, n.write = function(t, e, A) {
      for (var o = A, r, g, a = 0; a < t.length; ++a)
        r = t.charCodeAt(a), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((g = t.charCodeAt(a + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (g & 1023), ++a, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  }(mg)), mg;
}
var Zi, wg;
function LQ() {
  if (wg) return Zi;
  wg = 1, Zi = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, g = A;
    return function(a) {
      if (a < 1 || a > o)
        return n(a);
      g + a > A && (r = n(A), g = 0);
      var I = t.call(r, g, g += a);
      return g & 7 && (g = (g | 7) + 1), I;
    };
  }
  return Zi;
}
var zi, bg;
function OQ() {
  if (bg) return zi;
  bg = 1, zi = n;
  var i = ut();
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
    var g = o >>> 0, a = (o - g) / 4294967296 >>> 0;
    return r && (a = ~a >>> 0, g = ~g >>> 0, ++g > 4294967295 && (g = 0, ++a > 4294967295 && (a = 0))), new n(g, a);
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
      var r = ~this.lo + 1 >>> 0, g = ~this.hi >>> 0;
      return r || (g = g + 1 >>> 0), -(r + g * 4294967296);
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
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, g = this.hi >>> 24;
    return g === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : g < 128 ? 9 : 10;
  }, zi;
}
var kg;
function ut() {
  return kg || (kg = 1, function(i) {
    var n = i;
    n.asPromise = NQ(), n.base64 = RQ(), n.EventEmitter = WQ(), n.float = FQ(), n.inquire = vQ(), n.utf8 = MQ(), n.pool = LQ(), n.LongBits = OQ(), n.isNode = !!(typeof yt < "u" && yt && yt.process && yt.process.versions && yt.process.versions.node), n.global = n.isNode && yt || typeof window < "u" && window || typeof self < "u" && self || Ki, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      for (var g = Object.keys(o), a = 0; a < g.length; ++a)
        (A[g[a]] === void 0 || !r) && (A[g[a]] = o[g[a]]);
      return A;
    }
    n.merge = t, n.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function o(r, g) {
        if (!(this instanceof o))
          return new o(r, g);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), g && t(this, g);
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
        for (var g = Object.keys(this), a = g.length - 1; a > -1; --a)
          if (o[g[a]] === 1 && this[g[a]] !== void 0 && this[g[a]] !== null)
            return g[a];
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
var Xi, Sg;
function os() {
  if (Sg) return Xi;
  Sg = 1, Xi = a;
  var i = ut(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, B, f) {
    this.fn = l, this.len = B, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function g(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function a() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var I = function() {
    return i.Buffer ? function() {
      return (a.create = function() {
        return new n();
      })();
    } : function() {
      return new a();
    };
  };
  a.create = I(), a.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(l, B, f) {
    return this.tail = this.tail.next = new o(l, B, f), this.len += B, this;
  };
  function C(l, B, f) {
    B[f] = l & 255;
  }
  function s(l, B, f) {
    for (; l > 127; )
      B[f++] = l & 127 | 128, l >>>= 7;
    B[f] = l;
  }
  function E(l, B) {
    this.len = l, this.next = void 0, this.val = B;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = s, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, a.prototype.int32 = function(l) {
    return l < 0 ? this._push(c, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function c(l, B, f) {
    for (; l.hi; )
      B[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      B[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    B[f++] = l.lo;
  }
  a.prototype.uint64 = function(l) {
    var B = t.from(l);
    return this._push(c, B.length(), B);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(l) {
    var B = t.from(l).zzEncode();
    return this._push(c, B.length(), B);
  }, a.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function x(l, B, f) {
    B[f] = l & 255, B[f + 1] = l >>> 8 & 255, B[f + 2] = l >>> 16 & 255, B[f + 3] = l >>> 24;
  }
  a.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(l) {
    var B = t.from(l);
    return this._push(x, 4, B.lo)._push(x, 4, B.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, a.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var d = i.Array.prototype.set ? function(l, B, f) {
    B.set(l, f);
  } : function(l, B, f) {
    for (var p = 0; p < l.length; ++p)
      B[f + p] = l[p];
  };
  return a.prototype.bytes = function(l) {
    var B = l.length >>> 0;
    if (!B)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var f = a.alloc(B = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(B)._push(d, B, l);
  }, a.prototype.string = function(l) {
    var B = A.length(l);
    return B ? this.uint32(B)._push(A.write, B, l) : this._push(C, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var l = this.head, B = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = B, this.len += f), this;
  }, a.prototype.finish = function() {
    for (var l = this.head.next, B = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, B, f), f += l.len, l = l.next;
    return B;
  }, a._configure = function(l) {
    n = l, a.create = I(), n._configure();
  }, Xi;
}
var $i, Gg;
function JQ() {
  if (Gg) return $i;
  Gg = 1, $i = t;
  var i = os();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = ut();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = n._Buffer_allocUnsafe, t.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && n.Buffer.prototype.set.name === "set" ? function(A, o, r) {
      o.set(A, r);
    } : function(A, o, r) {
      if (A.copy)
        A.copy(o, r, 0, A.length);
      else for (var g = 0; g < A.length; )
        o[r++] = A[g++];
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
var Ar, Ng;
function ns() {
  if (Ng) return Ar;
  Ng = 1, Ar = o;
  var i = ut(), n, t = i.LongBits, e = i.utf8;
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
  }, g = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
      })(s);
    } : r;
  };
  o.create = g(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
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
  function a() {
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
  function C() {
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
    var s = this.uint32(), E = this.pos, c = this.pos + s;
    if (c > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(E, c);
    if (E === c) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, c);
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
    n = s, o.create = g(), n._configure();
    var E = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[E](!1);
      },
      uint64: function() {
        return a.call(this)[E](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[E](!1);
      },
      fixed64: function() {
        return C.call(this)[E](!0);
      },
      sfixed64: function() {
        return C.call(this)[E](!1);
      }
    });
  }, Ar;
}
var er, Rg;
function UQ() {
  if (Rg) return er;
  Rg = 1, er = t;
  var i = ns();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = ut();
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
var Wg = {}, tr, Fg;
function YQ() {
  if (Fg) return tr;
  Fg = 1, tr = n;
  var i = ut();
  (n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n;
  function n(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return n.prototype.rpcCall = function t(e, A, o, r, g) {
    if (!r)
      throw TypeError("request must be specified");
    var a = this;
    if (!g)
      return i.asPromise(t, a, e, A, o, r);
    if (!a.rpcImpl) {
      setTimeout(function() {
        g(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return a.rpcImpl(
        e,
        A[a.requestDelimited ? "encodeDelimited" : "encode"](r).finish(),
        function(I, C) {
          if (I)
            return a.emit("error", I, e), g(I);
          if (C === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(C instanceof o))
            try {
              C = o[a.responseDelimited ? "decodeDelimited" : "decode"](C);
            } catch (s) {
              return a.emit("error", s, e), g(s);
            }
          return a.emit("data", C, e), g(null, C);
        }
      );
    } catch (I) {
      a.emit("error", I, e), setTimeout(function() {
        g(I);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, tr;
}
var vg;
function PQ() {
  return vg || (vg = 1, function(i) {
    var n = i;
    n.Service = YQ();
  }(Wg)), Wg;
}
var Mg, Lg;
function TQ() {
  return Lg || (Lg = 1, Mg = {}), Mg;
}
var Og;
function HQ() {
  return Og || (Og = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = os(), n.BufferWriter = JQ(), n.Reader = ns(), n.BufferReader = UQ(), n.util = ut(), n.rpc = PQ(), n.roots = TQ(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(xg)), xg;
}
var Jg, Ug;
function KQ() {
  return Ug || (Ug = 1, Jg = HQ()), Jg;
}
var N = KQ();
const h = N.Reader, R = N.Writer, u = N.util, Q = N.roots.default || (N.roots.default = {}), LA = Q.dot = (() => {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Content();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
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
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.Content)
        return t;
      let e = new Q.dot.Content();
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
            Q.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(Q.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = Q.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new Q.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = Q.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = Q.dot.Image.toObject(A.images[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && Q.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && Q.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && Q.dot.v4.IosMetadata.encode(A.ios, o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              a.web = Q.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = Q.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = Q.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            let r = Q.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = Q.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
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
        let o = new Q.dot.v4.Metadata();
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
          o.web = Q.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = Q.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = Q.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? Q.dot.Platform[A.platform] === void 0 ? A.platform : Q.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = Q.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = Q.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = Q.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[g]), Q.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && Q.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && Q.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.AndroidMetadata(), I, C;
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              a.device = A.string();
              break;
            }
            case 6: {
              a.camera = Q.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === u.emptyObject && (a.dynamicCameraFrameProperties = {});
              let E = A.uint32() + A.pos;
              for (I = "", C = null; A.pos < E; ) {
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = Q.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(c & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[I] = C;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = Q.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
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
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!u.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !u.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = Q.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = Q.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = Q.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = Q.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.AndroidMetadata)
          return A;
        let o = new Q.dot.v4.AndroidMetadata();
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
          o.camera = Q.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = Q.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = Q.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let a = 0; a < A.supportedAbis.length; ++a)
            r.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? u.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let g;
        if (A.dynamicCameraFrameProperties && (g = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < g.length; ++a)
            r.dynamicCameraFrameProperties[g[a]] = Q.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = Q.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = Q.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = Q.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.Yuv420Image)
          return e;
        let A = new Q.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = Q.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = Q.dot.PointInt.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = Q.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = Q.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[g]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[r[g]]).ldelim();
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
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && Q.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && Q.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.IosMetadata(), I, C;
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let E = A.uint32() + A.pos;
              for (I = "", C = !1; A.pos < E; ) {
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(c & 7);
                    break;
                }
              }
              a.architectureInfo[I] = C;
              break;
            }
            case 6: {
              a.camera = Q.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let E = A.uint32() + A.pos;
                for (; A.pos < E; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = Q.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          let o = Q.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
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
          let o = Q.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = Q.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.IosMetadata)
          return A;
        let o = new Q.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (o.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          o.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.architectureInfo[r[g]] = !!A.architectureInfo[r[g]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          o.camera = Q.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
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
          o.croppedYuv420Image = Q.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        (o.arrays || o.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.architectureInfo = {}), o.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let g;
        if (A.architectureInfo && (g = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < g.length; ++a)
            r.architectureInfo[g[a]] = A.architectureInfo[g[a]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? u.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            r.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = Q.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = Q.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = Q.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = Q.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.yPlane = e.bytes();
              break;
            }
            case 3: {
              g.uvPlane = e.bytes();
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
          let A = Q.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.IosYuv420Image)
          return e;
        let A = new Q.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = Q.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = Q.dot.PointInt.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = Q.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = Q.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            Q.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
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
            Q.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            Q.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && Q.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && Q.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && Q.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.currentCameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(Q.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(Q.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(Q.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = Q.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = Q.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = Q.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
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
            let r = Q.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = Q.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = Q.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = Q.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = Q.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.WebMetadata)
          return A;
        let o = new Q.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = Q.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
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
            o.hashedDetectedImagesWithTimestamp[r] = Q.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = Q.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = Q.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = Q.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = Q.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = Q.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = Q.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = Q.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = Q.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = Q.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = Q.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new Q.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MediaTrackSettings)
          return A;
        let o = new Q.dot.v4.MediaTrackSettings();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.ImageBitmap)
          return e;
        let A = new Q.dot.v4.ImageBitmap();
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
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && Q.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = Q.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.CameraProperties)
          return A;
        let o = new Q.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
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
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
              g.faceCenter = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = Q.dot.v4.Point.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = Q.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = Q.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = Q.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = Q.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = Q.dot.v4.Point.toObject(e.topRight, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.Point();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        if (e instanceof Q.dot.v4.Point)
          return e;
        let A = new Q.dot.v4.Point();
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && Q.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = Q.dot.v4.Point.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = Q.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = Q.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
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
            Q.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.PlatformDetails();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.userAgent = A.string();
              break;
            }
            case 2: {
              a.platform = A.string();
              break;
            }
            case 3: {
              a.platformVersion = A.string();
              break;
            }
            case 4: {
              a.architecture = A.string();
              break;
            }
            case 5: {
              a.model = A.string();
              break;
            }
            case 6: {
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(Q.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            let r = Q.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.PlatformDetails)
          return A;
        let o = new Q.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = Q.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = Q.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.name = e.string();
              break;
            }
            case 2: {
              g.version = e.string();
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
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !u.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !u.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.BrowserVersion)
          return e;
        let A = new Q.dot.v4.BrowserVersion();
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.FaceContent)
          return A;
        let o = new Q.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.DocumentContent)
          return A;
        let o = new Q.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && Q.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && Q.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && Q.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && Q.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && Q.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && Q.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && Q.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && Q.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.Blob();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.documentContent = Q.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = Q.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = Q.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = Q.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = Q.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = Q.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = Q.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
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
        let o = new Q.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = Q.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = Q.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = Q.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = Q.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = Q.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = Q.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = Q.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = Q.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = Q.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = Q.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = Q.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
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
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && Q.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = Q.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = Q.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = Q.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = Q.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), o;
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && Q.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
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
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && Q.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = Q.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new Q.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(I & 7);
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || u.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new Q.dot.v4.Lds1ElementaryFile();
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
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? Q.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : Q.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && Q.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && Q.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = Q.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = Q.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = Q.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = Q.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        let o = {};
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : Q.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              A.skipType(I & 7);
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || u.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new Q.dot.v4.ChipAuthenticationStatus();
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
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : Q.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
            Q.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              a.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(Q.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = Q.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new Q.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = Q.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = Q.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.corner = e.int32();
              break;
            }
            case 2: {
              g.image = Q.dot.Image.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? Q.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : Q.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = Q.dot.Image.toObject(e.image, A)), o;
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
            Q.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && Q.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(Q.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = Q.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = Q.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new Q.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = Q.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = Q.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = Q.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.challengeItem = e.int32();
              break;
            }
            case 2: {
              g.image = Q.dot.ImageWithTimestamp.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? Q.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : Q.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = Q.dot.ImageWithTimestamp.toObject(e.image, A)), o;
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
            Q.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.detections && g.detections.length || (g.detections = []), g.detections.push(Q.dot.v4.FaceDetection.decode(e, e.uint32()));
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
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let o = Q.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
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
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = Q.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = Q.dot.v4.FaceDetection.toObject(e.detections[r], A);
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && Q.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              g.position = Q.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = Q.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = Q.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && Q.dot.PointDouble.encode(e.center, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new Q.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = Q.dot.PointDouble.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.faceSizeToImageShorterSideRatio = e.double();
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
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = Q.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
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
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && Q.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && Q.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = Q.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = Q.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.SmileLivenessContent)
          return A;
        let o = new Q.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = Q.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = Q.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = Q.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = Q.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && Q.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new Q.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = Q.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          let o = Q.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = Q.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = Q.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.PalmContent)
          return A;
        let o = new Q.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = Q.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = Q.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = Q.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = Q.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Image();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.Image)
        return t;
      let e = new Q.dot.Image();
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
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && Q.dot.Image.encode(t.image, e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = Q.dot.Image.decode(t, t.uint32());
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
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
        let e = Q.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.ImageWithTimestamp)
        return t;
      let e = new Q.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = Q.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = Q.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.ImageSize();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.width = t.int32();
            break;
          }
          case 2: {
            r.height = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.ImageSize)
        return t;
      let e = new Q.dot.ImageSize();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Int32List();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (g & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(g & 7);
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.RectangleDouble();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
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
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.RectangleDouble)
        return t;
      let e = new Q.dot.RectangleDouble();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.DigestWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.DigestWithTimestamp)
        return t;
      let e = new Q.dot.DigestWithTimestamp();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.Video();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.Video)
        return t;
      let e = new Q.dot.Video();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Video";
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.PointInt();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.x = t.int32();
            break;
          }
          case 2: {
            r.y = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !u.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !u.isInteger(t.y) ? "y: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.PointInt)
        return t;
      let e = new Q.dot.PointInt();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new Q.dot.PointDouble();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.x = t.double();
            break;
          }
          case 2: {
            r.y = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof Q.dot.PointDouble)
        return t;
      let e = new Q.dot.PointDouble();
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
})(), Yg = /* @__PURE__ */ new Map([[XA.ZERO, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [XA.ONE, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [XA.TWO, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [XA.THREE, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [XA.FOUR, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [XA.FIVE, LA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), is = {};
is.confidence = 0;
const rs = {};
rs.confidence = 0;
const Re = {};
Re.faceConfidence = 0.4, Re.sharpnessThreshold = 0.25, Re.brightnessLowThreshold = 0.2, Re.brightnessHighThreshold = 0.85, Re.outOfBoundsThreshold = 0.05, Re.devicePitchAngleThreshold = 30, Re.leftEye = is, Re.rightEye = rs;
const as = {};
as.confidence = 0;
const gs = {};
gs.confidence = 0;
const We = {};
We.faceConfidence = 0.4, We.sharpnessThreshold = 0.25, We.brightnessLowThreshold = 0.2, We.brightnessHighThreshold = 0.85, We.outOfBoundsThreshold = 0.05, We.devicePitchAngleThreshold = 30, We.leftEye = as, We.rightEye = gs;
const Or = {};
Or.MOBILE = Re, Or.DESKTOP = We;
const jQ = Or, Is = {};
Is.confidence = 0;
const ss = {};
ss.confidence = 0;
const hn = {};
hn.faceConfidence = 0.4, hn.leftEye = Is, hn.rightEye = ss;
const cs = {};
cs.confidence = 0;
const Cs = {};
Cs.confidence = 0;
const pn = {};
pn.faceConfidence = 0.4, pn.leftEye = cs, pn.rightEye = Cs;
const Jr = {};
Jr.MOBILE = hn, Jr.DESKTOP = pn;
const qQ = Jr, Pg = 8848 + -2 * -4219 + -1 * 15286, yn = {};
yn.timeout = 4e3, yn.threshold = 0.7, yn.instructions = [wA.FACE_TOO_CLOSE, wA.FACE_TOO_FAR];
const or = yn, Bs = "SAM v1.50.2 for idcards";
class Qs extends GQ {
  constructor(t, e, A, o, r, g, a, I, C, s, E) {
    super(t, Bs, e, g, a, C, s, E);
    y(this, "detector");
    y(this, "allowedDetectionTransitions");
    y(this, "detectionFactory");
    y(this, "phaseThresholds");
    y(this, "passiveLivenessPhase");
    y(this, "livenessChallengePhase");
    y(this, "dispatcher");
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = I, this.dispatcher = g, this.allowedDetectionTransitions = this.buildAllowedTransitions(I);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  buildAllowedTransitions(t) {
    if (t.length === -4255 + -6 * -196 + 3079)
      return { [q.PASSIVE_LIVENESS]: [] };
    const e = { [q.PASSIVE_LIVENESS]: [q.LIVENESS_CHALLENGE + "_0"] }, A = e;
    return this.livenessChallengePhase.forEach((o, r) => {
      const g = q.LIVENESS_CHALLENGE + "_" + r;
      if (r < this.livenessChallengePhase.length - (-2202 * -1 + 7946 + -10147)) {
        const a = q.LIVENESS_CHALLENGE + "_" + (r + 1);
        A[g] = [a];
      }
    }), A;
  }
  async init() {
    await super.init();
    const t = {};
    t[q.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Pg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: q.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((e, A) => {
      const o = A + 1 < this.livenessChallengePhase.length ? A + 1 : void 0, r = q.LIVENESS_CHALLENGE + "_" + A;
      t[r] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Pg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: e, currentIndex: A, nextIndex: o }, type: q.LIVENESS_CHALLENGE });
    }), this.setDetections(t), this.setCurrentDetection(this.detections[q.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class _Q {
  constructor() {
    y(this, "assetsDirectoryPath");
    y(this, "cameraService");
    y(this, "protobuf");
    y(this, "analytics");
    y(this, "dispatcher");
    y(this, "sessionToken");
    y(this, "transactionCounting");
    y(this, "detector");
  }
  setAssetsDirectoryPath(n) {
    return this.assetsDirectoryPath = n, this;
  }
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setProtobuf(n) {
    return this.protobuf = n, this;
  }
  setAnalytics(n) {
    return this.analytics = n, this;
  }
  setDispatcher(n) {
    return this.dispatcher = n, this;
  }
  setSessionToken(n) {
    return this.sessionToken = n, this;
  }
  setTransactionCounting(n) {
    return this.transactionCounting = n, this;
  }
  setDetector(n) {
    return this.detector = n, this;
  }
  validateDependencies() {
    if (!this.assetsDirectoryPath) throw new G("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new G("CameraService is required");
    if (!this.protobuf) throw new G("Protobuf is required");
    if (!this.dispatcher) throw new G("Dispatcher is required");
    if (!this.detector) throw new G("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class VQ extends _Q {
  constructor() {
    super(...arguments);
    y(this, "detectionFactory");
    y(this, "phaseThresholds");
    y(this, "challengeSequence");
  }
  setDetectionFactory(t) {
    return this.detectionFactory = t, this;
  }
  setPhaseThresholds(t) {
    return this.phaseThresholds = t, this;
  }
  setChallengeSequence(t) {
    return this.challengeSequence = t, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new G("DetectionFactory is required");
    if (!this.phaseThresholds) throw new G("PhaseThresholds is required");
    if (!this.challengeSequence) throw new G("ChallengeSequence is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this.phaseThresholds = void 0, this.challengeSequence = void 0, this;
  }
  build() {
    return this.validateDependencies(), new Qs(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const ZQ = "/dot-assets/multi-range/dot-DJT3N0It.js", Tg = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, ci = class ci {
  constructor() {
    y(this, "lastDetails");
    y(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 8353 * -1 + 3207 + 5146;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ci()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -347 * 19 + 1 * 3779 + 2814;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Tg(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Tg(n, t);
  }
};
y(ci, "_instance");
let ho = ci;
const zQ = () => "prod".toLowerCase() === "dev";
class XQ extends ho {
  constructor(t) {
    super();
    y(this, "events");
    this.events = t;
  }
  dispatchDetectionEvent(t) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, t);
  }
  dispatchOnCompleteEvent(t, e) {
    const A = {};
    A.imageData = t, A.content = e, this.dispatchCustomEvent(this.events.ON_COMPLETE, A);
  }
  dispatchPhaseChangedEvent(t) {
    const e = {};
    e.phaseName = t, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, e);
  }
  dispatchInstructionChangedEvent(t, e = Oc) {
    const A = {};
    A.instructionCode = t.code, A.isEscalated = t.isEscalated ?? !1;
    const o = A;
    this.dispatchDelayedCustomEventOnChange(this.events.INSTRUCTION_CHANGED, o, e);
  }
  dispatchInstructionEscalatedEvent(t) {
    const e = {};
    e.instructionCode = t, this.dispatchCustomEventOnChange(this.events.INSTRUCTION_ESCALATED, e);
  }
  dispatchDevEvent(t) {
    if (!zQ() || !t) return;
    const e = {};
    e.candidateSelectionImages = t, this.dispatchCustomEventOnChange(this.events.DEV, e);
  }
}
class $Q extends XQ {
  dispatchChallengeItemChangedEvent(n) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = n, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const AE = -2091 + 9 * 995 + -4864;
class Hg {
  constructor(n) {
    y(this, "duration");
    y(this, "candidateSelectionTime", 9009 + 91 * -99);
    y(this, "candidateSelectionImages", []);
    this.duration = n ?? AE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -3437 + 491 * 7;
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
    this.candidateSelectionTime = 1439 * 1 + -1609 * -1 + -3048, this.candidateSelectionImages = [];
  }
}
function ii(i) {
  const { height: n, width: t } = Yc(i), e = (i.width - t) / (-9969 + 838 * -10 + 18351), A = (i.height - n) / (-107 + -577 * -17 + -9700), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function Es(i, n, t) {
  const { height: e, width: A } = t, o = Ei(i.width, i.height), r = A - o * n * (-9897 + -4506 * -1 + 5393 * 1), g = e - o * n * (-1 * 8278 + -5138 + 13418), a = (i.width - r) / (124 * -46 + -1669 * -2 + 2368), I = (i.height - g) / (-83 * 9 + 1 * 857 + -108), C = {};
  return C.shiftX = a, C.shiftY = I, C.width = r, C.height = g, C;
}
function mt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const xs = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = Kc(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = g, I.left = a, H0(I);
}, ds = (i, n, t = $c) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), ls = async (i) => ds(i, 2 * -3049 + -2 * 1777 + 9742), eE = async (i) => ds(i, -1142 * -2 + -79 * 94 + 2621 * 2, "image/png"), us = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 1003 + 1 * -4672 + -3669 * -1, 6326 + -3163 * 2, t.width, t.height), t;
}, fs = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(0, -6136 + -2 * -3068, i.width, i.height);
  return t;
};
async function tE(i, n) {
  const t = us(i, n);
  return eE(t);
}
const hs = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, nr = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, hs(i, a, t);
}, xo = (i, n, t, e = 23 * -369 + -7536 + 16023) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 5 * 42 + 59 * -167 + 9650, -147 * -8 + 8274 + -9443), A.beginPath());
};
function oE(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, hs(i, o, "rgba(255, 0, 0, 0.3)", !0), xo(i, e, "lime");
}
function nE(i, n, t) {
  const e = xs(n, t);
  Object.values(e).map((A) => xo(i, A, "orange"));
}
var Ve;
class ps extends Array {
  constructor(t) {
    super();
    Y(this, Ve);
    M(this, Ve, t);
  }
  get size() {
    return S(this, Ve);
  }
  pushFixed(...t) {
    if (t.length > S(this, Ve)) {
      const e = t.slice(-S(this, Ve));
      this.push(...e);
      return;
    }
    this.length === S(this, Ve) && this.splice(-519 * 5 + 6342 + -3747, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-2351 + -2351 * -1);
  }
}
Ve = new WeakMap();
(function(i, n) {
  function t(g, a, I, C, s) {
    return GA(C - 671, I);
  }
  function e(g, a, I, C, s) {
    return GA(C - 887, I);
  }
  const A = i();
  function o(g, a, I, C, s) {
    return GA(C - -838, I);
  }
  function r(g, a, I, C, s) {
    return GA(C - -921, I);
  }
  for (; ; )
    try {
      if (parseInt(r(-497, -483, "bKKM", -486, -499)) / 1 * (parseInt(t(1102, 1103, "(VRB", 1111, 1119)) / 2) + parseInt(e(1312, 1322, "ng8o", 1318, 1333)) / 3 + -parseInt(r(-472, -486, "bKKM", -475, -481)) / 4 * (-parseInt(o(-404, -386, "Qpsw", -390, -395)) / 5) + -parseInt(o(-404, -385, "klBq", -399, -413)) / 6 + -parseInt(o(-392, -402, "&69O", -393, -388)) / 7 + -parseInt(r(-484, -488, "B3my", -497, -493)) / 8 + -parseInt(e(1323, 1324, "8QhK", 1336, 1327)) / 9 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ri, -102089 + 1 * -8661 + 222197 * 1);
function GA(i, n) {
  const t = ri();
  return GA = function(e, A) {
    e = e - (-3212 + -727 * -5);
    let o = t[e];
    if (GA.vSNkuo === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      GA.ubyjEz = C, i = arguments, GA.vSNkuo = !0;
    }
    const g = t[0], a = e + g, I = i[a];
    return I ? o = I : (GA.qEzYlT === void 0 && (GA.qEzYlT = !0), o = GA.ubyjEz(o, A), i[a] = o), o;
  }, GA(i, n);
}
async function iE(i) {
  const n = await window[A(903, 889, 891, "Bb29") + "o"][e(1127, 1126, "&69O", 1140, 1134) + "e"][A(865, 875, 887, "W^wv") + "t"](t("6eGR", -215), i);
  function t(r, g, a, I, C) {
    return GA(g - -651, r);
  }
  function e(r, g, a, I, C) {
    return GA(C - 708, a);
  }
  function A(r, g, a, I, C) {
    return GA(g - 445, I);
  }
  function o(r, g, a, I, C) {
    return GA(r - -659, a);
  }
  return Array[A(893, 887, 881, "&*w(")](new Uint8Array(n))[t("0$g6", -204)]((r) => r[o(-226, -231, "hCOa") + t("0$g6", -226)](-9049 + -31 * 87 + 11762)[t("&*w(", -224) + e(1136, 1144, "rLSE", 1141, 1149)](627 * -11 + 2917 + 1 * 3982, "0"))[o(-222, -212, "fQNl")]("");
}
function ri() {
  const i = ["E3iqWOlcVh7cKmogW6S8W6Ob", "W74vWOz4dmkexSkuW6ZcKCo/", "WQntW4S1WPrjW5xdOW", "sLJcJGqUpeG", "W7Dgomo3hqnBWQHktcLo", "smkKEW", "W6GeWQD6hq", "W4VcHIuabG", "WO5QaIxcPtZcISk0aM3dVCkk", "W41nW7roW4j+W6/dNSotW5iyla", "WRC7WQ3cHCkd", "qMNdOmo4jmoOz8k4W4e3WOldPW", "WOdcV2uWW6tdU8oBWRXUm8oqW7S", "W6eeW6eaWQm", "jufpW6ruWQ12W5/dQutdVq", "WOyqxHxdJmk+W6BdMK52za", "W5VdPJVdM8kU", "W54EErC", "sSo1WOFcMJldOmkpW5vOkw1e", "WOe3mSkYyIldVCohW6eqW7ZdIq", "rSkSW4ddIvtcHmkp", "ldqs", "W53cLs4+", "WPNcQ2JdKIlcICkBDJldHmkDyq", "qWPTW5/dNq", "WQndW7a7qmoZprpdNSkqW6ZcUW", "WOqyfwhcUSkDW4tdGW", "tmkRBa", "W7WqWOf8cSkpBCk4W6tcOCoC"];
  return ri = function() {
    return i;
  }, ri();
}
class rE {
  constructor(n) {
    y(this, "detectionRecord");
    y(this, "imagesWithTimestampForDuplicateDetection");
    y(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new ps(Zc), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / AC, A = e / (8549 * 1 + -5937 + 45 * -58), o = n.length / (3 * 339 + 1 * -6029 + 5014), r = n.slice(o - A, o + A), g = await iE(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: fs(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = H0(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const g = r, a = this.validationService.validateDetectedObject(o, t);
    if (a.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(g), { detection: o, validationResult: a.result, isValid: a.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Kg extends rE {
  constructor(t, e) {
    super(e);
    y(this, "className", "FaceImageProcessor");
    y(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = ii(t), A = us(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(A.data, A.resolution, o);
    r = this.transformDetectionCoordinatesRelativeToFullFrameImage(r, ii(t));
    const g = {};
    return g.detectedObject = r, g.image = t, g.imageData = A.data, g.timestamp = e, this.processDetectedObject(g);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(t, e) {
    return { ...t, leftEye: { ...t.leftEye, center: mt(t.leftEye.center, e) }, rightEye: { ...t.rightEye, center: mt(t.rightEye.center, e) }, mouth: { ...t.mouth, center: mt(t.mouth.center, e) }, topLeft: mt(t.topLeft, e), bottomRight: mt(t.bottomRight, e), faceCenter: mt(t.faceCenter, e) };
  }
}
class aE {
  constructor(n, t, e, A) {
    y(this, "instructionCodes");
    y(this, "instructionCodeCollector");
    y(this, "config");
    y(this, "analytics");
    y(this, "dispatcher");
    this.instructionCodeCollector = n, this.dispatcher = t, this.config = e, this.analytics = A, this.instructionCodes = new Map(e.instructions.map((o) => [o, !1]));
  }
  get getInstructionCodes() {
    return this.instructionCodes;
  }
  canEscalate(n) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(n) ? !1 : t.filter((A) => A === n).length / t.length >= this.config.threshold;
  }
  collect(n) {
    this.instructionCodeCollector.pushWithTimestamp(n);
  }
  isEscalated(n) {
    return this.instructionCodes.get(n) ?? !1;
  }
  escalate() {
    var n;
    for (const [t, e] of this.instructionCodes.entries())
      !e && this.canEscalate(t) && (this.instructionCodes.set(t, !0), this.dispatcher.dispatchInstructionEscalatedEvent(t), (n = this.analytics) == null || n.trackEscalated(t));
  }
  reset() {
    this.instructionCodes.forEach((n, t) => {
      this.instructionCodes.set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
var ko, Ze, Lt;
class gE extends Array {
  constructor(t) {
    super();
    Y(this, ko, 56 * -33 + -107 * -93 + -1 * 8103);
    Y(this, Ze, []);
    Y(this, Lt, !1);
    M(this, ko, t);
  }
  clearAfterTimeout() {
    if (S(this, Ze).length === -7 * 331 + 2778 + -461 * 1) return;
    const t = Date.now(), e = S(this, Ze).findLastIndex((A) => t - A > S(this, ko));
    e !== -1 && (M(this, Lt, !0), this.splice(9 * -171 + -1704 + -47 * -69, e + 1), S(this, Ze).splice(-2 * 433 + -349 * -19 + -1 * 5765, e + (-1968 * -3 + -1505 + -4398)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), S(this, Ze).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return S(this, Lt);
  }
  clear() {
    this.splice(-5461 + -5 * 581 + 8366), S(this, Ze).splice(-5309 * -1 + -2392 * -1 + -7701), M(this, Lt, !1);
  }
}
ko = new WeakMap(), Ze = new WeakMap(), Lt = new WeakMap();
const mn = {};
mn.minFaceSizeRatio = 0.13, mn.maxFaceSizeRatio = 0.15, mn.scale = 0.85;
const Dn = {};
Dn.minFaceSizeRatio = 0.152, Dn.maxFaceSizeRatio = 0.172, Dn.scale = 1;
const wn = {};
wn.minFaceSizeRatio = 0.18, wn.maxFaceSizeRatio = 0.205, wn.scale = 1.18;
const bn = {};
bn.minFaceSizeRatio = 0.215, bn.maxFaceSizeRatio = 0.24, bn.scale = 1.41;
const kn = {};
kn.minFaceSizeRatio = 0.245, kn.maxFaceSizeRatio = 0.275, kn.scale = 1.61;
const Sn = {};
Sn.minFaceSizeRatio = 0.28, Sn.maxFaceSizeRatio = 0.34, Sn.scale = 1.84;
const jg = /* @__PURE__ */ new Map([[XA.ZERO, mn], [XA.ONE, Dn], [XA.TWO, wn], [XA.THREE, bn], [XA.FOUR, kn], [XA.FIVE, Sn]]);
class ys {
  constructor(n) {
    y(this, "controller");
    this.controller = n;
  }
  onCapture(n) {
    this.controller.collectOnCaptureData(n), this.controller.getDispatcher().dispatchDevEvent(n.metadata.candidateSelectionImages);
  }
  onDetection(n) {
    const { processedImage: t } = n.detectionDetails;
    this.controller.getDispatcher().dispatchDetectionEvent(n);
    const e = {};
    e.code = t.instructionCode, e.isEscalated = t.isEscalated, this.controller.getDispatcher().dispatchInstructionChangedEvent(e);
  }
}
class IE extends ys {
  constructor(t, e) {
    super(t);
    y(this, "nextIndex");
    y(this, "controller");
    this.nextIndex = e, this.controller = t;
  }
  async onCapture(t) {
    var o, r;
    super.onCapture(t);
    const e = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(q.LIVENESS_CHALLENGE + "_" + this.nextIndex), (e == null ? void 0 : e[this.nextIndex]) !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    (o = this.controller.getTransactionCounting()) == null || o.trackTransaction();
    const A = await this.controller.getProtobuf().createMessage(this.controller.getOnCaptureData(), this.controller.getSessionToken());
    this.dispatchOnCompleteEvent(A), (r = this.controller.getAnalytics()) == null || r.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(t) {
    super.onDetection(t);
  }
  async dispatchOnCompleteEvent(t) {
    const e = this.controller.getOnCaptureData(), A = e.get(q.PASSIVE_LIVENESS);
    if (!A) throw new G("On capture data was not found");
    const { detectedObject: o, resultImage: r } = A, g = {};
    g.height = r.height, g.width = r.width;
    const a = g, I = await ls(r), C = {};
    C.detection = o, C.imageResolution = a;
    const s = {};
    s.data = C, s.image = I;
    const E = s;
    this.controller.getDispatcher().dispatchOnCompleteEvent(E, t);
  }
}
class sE {
  constructor(n, t, e, A, o, r, g) {
    y(this, "name");
    y(this, "isRunning");
    y(this, "fpsOfAllImages");
    y(this, "captureProcessStartTime");
    y(this, "cameraService");
    y(this, "imageProcessor");
    y(this, "callbacks");
    y(this, "checkToInstructionCodeMap");
    y(this, "fallbackInstruction");
    y(this, "instructionEscalation");
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new ps(-1101 * 8 + -8126 + 16964), this.isRunning = !0;
  }
  async run() {
    for (this.captureProcessStartTime = Date.now(); this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  onDetection(n, t) {
    const e = { ...n, avgFps: Wt(Ni(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new G("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Wt(Ni(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = fs(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await tE(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, C = {};
    return C.croppedImage = g, C.topLeftCorner = I, C;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Wt(1e3 / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[1 * 1574 + -1 * -1262 + -1418 * 2], t), I = this.collectAndEscalate(a), C = {};
    return C.detection = t.detection, C.instructionCode = a, C.invalidValidators = g, C.isInCandidateSelection = !1, C.isEscalated = I, { processedImage: C, detectionTime: e, fps: A, avgFps: Wt(Ni(this.fpsOfAllImages)), resolution: r };
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
    await Er(Math.max(Ja.max - n, Ja.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class cE extends sE {
  constructor(t, e, ...A) {
    super(...A);
    y(this, "instructionCodeMap");
    y(this, "lastImage");
    y(this, "bestImage");
    y(this, "candidateSelection");
    this.candidateSelection = t, this.instructionCodeMap = e, this.lastImage = void 0, this.bestImage = void 0;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = this.getDetectionDetails(t, e);
    this.onDetection(A, t.image);
    const o = {};
    o.instructionCode = A.processedImage.instructionCode, o.isValid = e.isValid, o.takenPhoto = t, o.detection = e.detection, this.lastImage = o, await this.sleep(A.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? G.fromCameraError(e) : G.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const o = {};
    o.takenPhoto = t, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelection.newCandidate(r);
  }
  tryInitCandidatePhase(t, e) {
    var g;
    if (!(((g = this.lastImage) == null ? void 0 : g.isValid) && e.isValid)) return;
    const o = {};
    o.takenPhoto = t, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: t, takenPhoto: e } = this.bestImage || {};
    if (e && t) await this.onCapture(e, t, this.candidateSelection.getCandidateSelectionImages());
    else throw new G("Something went wrong during capturing an image");
  }
  getInstructionCode(t, e) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && (e != null && e.isValid) ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && (e != null && e.isValid) ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class CE {
  constructor() {
    y(this, "name");
    y(this, "cameraService");
    y(this, "imageProcessor");
    y(this, "callbacks");
    y(this, "checkToInstructionCodeMap");
    y(this, "fallbackInstruction");
    y(this, "instructionEscalation");
  }
  setName(n) {
    return this.name = n, this;
  }
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setCallbacks(n) {
    return this.callbacks = n, this;
  }
  setCheckToInstructionCodeMap(n) {
    return this.checkToInstructionCodeMap = n, this;
  }
  setFallbackInstruction(n) {
    return this.fallbackInstruction = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  reset() {
    return this.name = void 0, this.cameraService = void 0, this.imageProcessor = void 0, this.callbacks = void 0, this.instructionEscalation = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this;
  }
  validateDependencies() {
    if (!this.name) throw new G("Name is required");
    if (!this.cameraService) throw new G("CameraService is required");
    if (!this.imageProcessor) throw new G("ImageProcessor is required");
    if (!this.callbacks) throw new G("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new G("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new G("FallbackInstruction is required");
  }
}
class ms extends CE {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new G("instructionCodeMap is required");
    if (!this.candidateSelection) throw new G("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new cE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class BE extends ms {
}
var Ot, ct, Ct;
class Ds {
  constructor(n) {
    Y(this, Ot);
    Y(this, ct);
    Y(this, Ct);
    M(this, Ot, n), M(this, ct, /* @__PURE__ */ new Map());
  }
  validate() {
    S(this, Ot).forEach((n) => {
      S(this, ct).set(n.name, n.evaluate());
    }), M(this, Ct, void 0);
  }
  isValid() {
    return S(this, Ct) === void 0 && M(this, Ct, Array.from(S(this, ct).values()).every((n) => n)), S(this, Ct);
  }
  get result() {
    return S(this, ct);
  }
  get validators() {
    return S(this, Ot);
  }
}
Ot = new WeakMap(), ct = new WeakMap(), Ct = new WeakMap();
class ws {
  constructor(n, t) {
    y(this, "className");
    y(this, "thresholds");
    this.className = n, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(n) {
    this.thresholds = n;
  }
}
var So, Bt;
class De {
  constructor(n, t) {
    Y(this, So);
    Y(this, Bt);
    M(this, So, n), M(this, Bt, t);
  }
  get threshold() {
    return S(this, Bt);
  }
  get name() {
    return S(this, So);
  }
  isValueBelowThreshold(n) {
    return n < S(this, Bt);
  }
  isValueAboveThreshold(n) {
    return n > S(this, Bt);
  }
}
So = new WeakMap(), Bt = new WeakMap();
const QE = "isNotSmall";
var Go;
class bs extends De {
  constructor(t, e) {
    super(QE, t);
    Y(this, Go);
    M(this, Go, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Go));
  }
}
Go = new WeakMap();
const EE = "isPresent";
var No;
class ks extends De {
  constructor(t, e) {
    super(EE, t);
    Y(this, No);
    M(this, No, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, No));
  }
}
No = new WeakMap();
const xE = "isLeftEyePresent";
var Ro;
class Ss extends De {
  constructor(t, e) {
    super(xE, t);
    Y(this, Ro);
    M(this, Ro, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Ro));
  }
}
Ro = new WeakMap();
const dE = "isNotLarge";
var Wo;
class Gs extends De {
  constructor(t, e) {
    super(dE, t);
    Y(this, Wo);
    M(this, Wo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Wo));
  }
}
Wo = new WeakMap();
const lE = "isRightEyePresent";
var Fo;
class Ns extends De {
  constructor(t, e) {
    super(lE, t);
    Y(this, Fo);
    M(this, Fo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Fo));
  }
}
Fo = new WeakMap();
class uE extends ws {
  constructor(n) {
    super("LivenessChallengeValidationService", n);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new Ds([new ks(t.faceConfidence, n.confidence), new Ss(t.leftEye.confidence, n.leftEye.confidence), new Ns(t.rightEye.confidence, n.rightEye.confidence), new bs(t.minFaceSizeRatio, n.faceSize), new Gs(t.maxFaceSizeRatio, n.faceSize)]);
    return e.validate(), e;
  }
}
class fE extends ys {
  constructor(t) {
    super(t);
    y(this, "controller");
    this.controller = t;
  }
  onCapture(t) {
    super.onCapture(t), this.controller.transitionToDetection(q.LIVENESS_CHALLENGE + "_0");
    const e = this.controller.getLivenessChallengePhase();
    e !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[1 * 7457 + 25 * -283 + -382]), this.controller.runDetectionLoop();
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class hE extends ms {
}
const pE = "isNotDim";
var vo;
class yE extends De {
  constructor(t, e) {
    super(pE, t);
    Y(this, vo);
    M(this, vo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, vo));
  }
}
vo = new WeakMap();
const mE = "isNotBright";
var Mo;
class DE extends De {
  constructor(t, e) {
    super(mE, t);
    Y(this, Mo);
    M(this, Mo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Mo));
  }
}
Mo = new WeakMap();
const wE = "isSharp";
var Lo;
class bE extends De {
  constructor(t, e) {
    super(wE, t);
    Y(this, Lo);
    M(this, Lo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Lo));
  }
}
Lo = new WeakMap();
const kE = "isNotPitched";
var Oo;
const Ba = class Ba extends De {
  constructor(t, e) {
    super(kE, Ba.calculatePitchAngleAccelerationThreshold(t));
    Y(this, Oo);
    M(this, Oo, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return _c * Math.sin(t * (Math.PI / (7586 + -1 * 3265 + -4141)));
  }
  evaluate() {
    const { z: t } = S(this, Oo) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Oo = new WeakMap();
let Ur = Ba;
const SE = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, GE = (i, n) => Object.values(i).every((t) => SE(t, n)), NE = "isNotOutOfBounds";
var Jo, Qt;
class RE extends De {
  constructor(t, e, A) {
    super(NE, t);
    Y(this, Jo);
    Y(this, Qt);
    M(this, Jo, e), M(this, Qt, A);
  }
  evaluate() {
    const t = Es(S(this, Qt), this.threshold, ii(S(this, Qt))), e = xs(S(this, Jo), S(this, Qt));
    return GE(e, t);
  }
}
Jo = new WeakMap(), Qt = new WeakMap();
class WE extends ws {
  constructor(t) {
    super("PassiveLivenessValidationService", t);
    y(this, "acceleration");
  }
  validateDetectedObject(t, e) {
    const A = this.getThresholds(), o = new Ds([new ks(A.faceConfidence, t.confidence), new Ss(A.leftEye.confidence, t.leftEye.confidence), new Ns(A.rightEye.confidence, t.rightEye.confidence), new bs(A.minFaceSizeRatio, t.faceSize), new Gs(A.maxFaceSizeRatio, t.faceSize), new bE(A.sharpnessThreshold, t.sharpness), new yE(A.brightnessLowThreshold, t.brightness), new DE(A.brightnessHighThreshold, t.brightness), new RE(A.outOfBoundsThreshold, t, e), new Ur(A.devicePitchAngleThreshold, this.acceleration)]);
    return o.validate(), o;
  }
}
class FE {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, currentIndex: r, detector: g, multiRangeLivenessChallengeItem: a, nextIndex: I, phaseThresholds: C } = n;
    switch (t) {
      case q.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(o, e, g, A, C, a);
      case q.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(o, e, g, A, C, a, r, I);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(n, t, e, A, o, r) {
    const g = new hE(), a = this.getThresholdsWithFaceSize(o[q.PASSIVE_LIVENESS], r), I = new WE(a), C = new fE(n), s = new Kg(e, I), E = new Hg(A), c = this.createInstructionEscalation(n);
    return g.setName(q.PASSIVE_LIVENESS), g.setCameraService(t), g.setImageProcessor(s), g.setCallbacks(C), g.setCandidateSelection(E), g.setCheckToInstructionCodeMap(ha), g.setInstructionCodeMap(wA), g.setFallbackInstruction(wA.FACE_NOT_PRESENT), g.setInstructionEscalation(c), g.build();
  }
  createLivenessChallengeDetection(n, t, e, A, o, r, g, a) {
    const I = new BE(), C = this.getThresholdsWithFaceSize(o[q.LIVENESS_CHALLENGE], r), s = new uE(C), E = new IE(n, a), c = new Kg(e, s), x = new Hg(A), d = this.createInstructionEscalation(n);
    return I.setName(this.prepareIndexedPhaseName(q.LIVENESS_CHALLENGE, g)), I.setCameraService(t), I.setImageProcessor(c), I.setCallbacks(E), I.setCandidateSelection(x), I.setCheckToInstructionCodeMap(ha), I.setInstructionCodeMap(wA), I.setFallbackInstruction(wA.FACE_NOT_PRESENT), I.setInstructionEscalation(d), I.build();
  }
  prepareIndexedPhaseName(n, t) {
    return t === void 0 ? n : n + "_" + t;
  }
  getThresholdsWithFaceSize(n, t) {
    if (t === void 0 || !jg.has(t)) throw new G("Invalid challenge");
    const e = jg.get(t);
    if (!e) throw new G("Invalid challenge");
    const A = { ...n };
    return A.maxFaceSizeRatio = e.maxFaceSizeRatio, A.minFaceSizeRatio = e.minFaceSizeRatio, A;
  }
  createInstructionEscalation(n) {
    return new aE(new gE(or.timeout), n.getDispatcher(), { threshold: or.threshold, instructions: or.instructions }, n.getAnalytics());
  }
}
function ai() {
  const i = ["h8knwcXR", "W4G4zmoQfq", "mhBdUSkXW5y", "WPVdHNulwW", "q8kUWPb3fq", "eSooW7z/zW", "W55xWQxcSKm", "WOOryCoUCq", "sLrKvH8", "WOpdPZxdHSo0", "rvq4fcu", "WQRdMWFdONq", "W5fSWOtcSvK", "W5a1WQZdNgG", "eCo3W7TWWQa", "fCkSWOr3pG", "W4jGWPRdLZe", "jSk/ubnR", "h0BdTcpcShvrW7u", "W6/cKJhdHSo+", "WRZdUeK2oG", "pmkMW4b5", "WPtcT8oKksm", "WPNcVaxcVG", "W51wWRtdGeO", "ieWHeXO", "zX3dKwVcNq", "WR0bDmk0W5O", "aCkyWPL4WP0", "W4BcRCoRW4ZdJa", "WQHXgmkRWR8", "lLjizsi", "WOtdGe0Pwq", "hG3cNCoKWRi", "y8o0WPqRWOVdNJ3dLSkXiGuu", "ySobCSkTW6W", "W6/dP8oZW4ZdJa", "W4ldM0DeamoKWOFdL1bzWQS8ESkU", "WRNcT8kZuIy", "lmkHW5D1WP4", "bCopW6bdWP4", "uCopbmkBfq", "xCouxSkQoW", "WQm/fKeg", "W4S3vCkfWOe", "WRG3bMOH", "W7XGWOVdP3K", "imkDzxD/", "qmomwCkubG", "W41AWRRdJ1C", "WOGwW5xdLCkI", "WP/cN23cOmo+", "yhddISo0WQe", "zNSKWR7cNq", "WPygwCk6W5K", "tmo2jvldJa", "WORcI0ldJci", "W63cKh7cTSk1", "uCo4WP0eWRe", "WP3cNYeUqW", "feWMjW", "AcRdQs3cVa", "W6lcUrpdPSog", "WQ0urCksWQq", "jCk7WR4fBa", "WR8sxSoYCa", "W6LNumkGkG", "W5VdU1RdR8k6WQBdSWGXySoOWPhdSG", "ohCPW4NcKW", "l8o9W5xcKgm", "W6hcQwBcSSo0", "z8oAvCo5W6G", "WOOLwCk2dZv1jW", "gv3dHCo6W7a", "B8oAFmkwW64", "tmkGWRnZkW", "W5ZcMapdOSo3", "WOSieHyO", "cmkmW6n7WP4", "W5ldMttdQSoW", "W4FcQuZcVCow", "WQxcVcqSBG", "amkLW59TWPi", "fSoYWRP0nq", "WO4QWO7cPSky", "jHdcU8oAWQ0", "WPJcOeqeva", "WP/dTCo0kHi", "g8oZoJVcNa", "WQb2WQpdS0G", "W6P1WQ7dOa", "WQGmDSkmWQi", "W6zgkSkKeG", "A1ibCbq", "ESo8W6dcPHi", "W7TzWQpdRKe", "mmkPW5LvCG", "z8oQBKfu", "WQ3cMcRcJCoR", "CmkbhMRdRW", "bgiuW4BcVq", "hmo9qNz3", "ySozW4dcS8kE", "W6xcIeJdL8ow", "DSkWW4DNCW", "W7fBW6ddO0q", "WP/cSgpdO8k5", "r3yJaaO", "meOhW7ZcNq", "W7ZdHg8WuG", "WQBcGZKxcq", "WO/dL07dV8o9", "rvddNmk7W7LTW4RcM8kwWQr5aNBdMG", "uSkeWPGmW7VdJXRdLgXUW6OV", "CdFdIG/cSa", "pvRcUSo/W6m", "WPnpW7pcI8oc", "W7vzCmkkjG", "WRTGW7pdJem", "oN0pcYm", "e8oiW4yvCCkQW4biW7HmySkwW60", "W4FcTCo5WQqg", "q8okWQ15ia", "hCkLW7TiWRi", "WPpcPeJdT8k0", "WR7cLSoxesC", "WP8TsCkxWOS", "WQxcRrinBa", "WQOWW5VcMq", "WPLBWOpdLsa", "WOddIcBcHqO", "W4LzWOZdMK0", "xfddMmkzW6G", "fCoYW7XIWQm", "W5NcMdBcMSoj", "qSo3uSkiW7K", "WPJdLbdcLsu", "qtRdTt3dJa", "W70osXZcTG", "jeRdMmkrW7y", "z1xdTSoKWPe", "WRqgfmkKWRK", "WQhcMYCTyq", "WOyWl282", "w8kiW7LMWPZdPga", "W5xcOrVcGCov", "W7VdSSowwNyGo2xcS2JcLIvD", "WRZcLrNcTSou", "WPZcQMtdQSoyvCoFW4hcGw3cPSoHWO8", "wmkmDZBdJa", "zSo1WPuVWOpdNdRdRCkJhsOO", "W77dHcddTNq", "WRuDiK5E", "WPuag01r", "tmkJWO5Znq", "eSkNAJvu", "zCoRt3zv", "W6/cP0VdVCog", "W7NcQCkllXy", "WOCobWxcKq", "pmo+W6dcRmk4", "WPODo8oJga", "W7pcPcVdNmov", "W4RdGbVdTmoz", "WOdcLuBcUHm", "eYlcVSoMWPO", "px4GcXS", "ECoqW4JdLq4", "WRO0W7NcUI4vqtlcJCklWQFdMhK", "hGWCaJy", "aSohW5rfWR8", "tmkyWQjffG", "W5jXi8k/CG", "E1FdU8okW4e", "W6ZcSuJcHmoI", "W7H0WQpdTNS", "j1mheri", "l8ooW4jlAq", "xKvxrSki", "vmoEW4JcISkF", "ESk9uSo+W6e", "fx1kW5NdMW", "BSoLW63cLee", "W43dHtZdOKi", "hCoBW6ZcR2S", "WOlcRr3cVW", "raTWCKhdV8oEWPpdHIyAWO8", "W7tcNf4jFG", "WR/cIGxcHmkY", "WPKogNJcGa", "WQRcR8o5W6qc", "tCoOW4xcPIy", "c3nmW6/cKW", "wCo8WPurW6pcGhWtWPv3WONcLG", "ymkfsJVdVa", "nmoMWOydnq", "wmotW5FcVJa", "W60VW5lcImkW", "taGzkJlcI8oiWOi", "W79tWPxdHYm", "W7ddP8orWRRdMW", "rINcJqpcTa", "W5NcLbNdLmou", "w8otW5pcTXy", "hCktW7PWW5q", "WQzTWP/dO0y", "W63dKHtcI8k4", "WPJcSCkXuqG", "WRLpWOJdPN0", "W4ffW6/dJtm", "fmo2culdP8oQWPO", "xCkSWRfkpG", "WQ4qESoofa", "AMSPW4NcPW", "WPKYtmoOdG", "WQiZbsNcSa", "WP/dOxm+Fq", "ECktWRmQh8kZzCk1", "hmkhh8oN", "bCk+a8o1WOVdKaNcHe3dUCo8hW", "BmomW4/dPYa", "W4VdG0VdGSoL", "WQJdTSkKvYW", "BIaGdmkx", "y8oRW5hdQZK", "dhhdRCk5W4S", "smkgW4JcVmko", "aCkhW5P3W6G", "WQaPC8otmq", "WOmIzSkuWPO", "Db51ACkm", "umoTWRpdKYi", "zwWdBbW"];
  return ai = function() {
    return i;
  }, ai();
}
function rA(i, n) {
  const t = ai();
  return rA = function(e, A) {
    e = e - 178;
    let o = t[e];
    if (rA.eOvBlj === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      rA.bvYFcq = C, i = arguments, rA.eOvBlj = !0;
    }
    const g = t[1 * 8839 + -8541 + -1 * 298], a = e + g, I = i[a];
    return I ? o = I : (rA.aDuKSC === void 0 && (rA.aDuKSC = !0), o = rA.bvYFcq(o, A), i[a] = o), o;
  }, rA(i, n);
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return rA(a - -91, I);
  }
  function e(a, I, C, s, E) {
    return rA(a - 751, I);
  }
  function A(a, I, C, s, E) {
    return rA(I - -918, s);
  }
  const o = i();
  function r(a, I, C, s, E) {
    return rA(I - 582, s);
  }
  function g(a, I, C, s, E) {
    return rA(E - -5, C);
  }
  for (; ; )
    try {
      if (parseInt(e(1124, "xaWW", 1133, 1019, 1093)) / 1 * (parseInt(r(846, 782, 752, "Kqlw", 831)) / 2) + -parseInt(e(1142, "bEox", 1062, 1177, 1094)) / 3 + parseInt(r(961, 953, 1047, "Za[L", 1014)) / 4 + -parseInt(g(366, 258, "xaWW", 208, 252)) / 5 * (-parseInt(r(658, 770, 655, "C#qA", 843)) / 6) + parseInt(e(1120, "6UxA", 1048, 1237, 1012)) / 7 + parseInt(e(992, "t^@$", 962, 906, 958)) / 8 * (parseInt(A(-769, -709, -794, "2XS]", -803)) / 9) + -parseInt(t(169, "ORQv", 275, 53, 208)) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ai, 951704 + 57 * -22404 + -3 * -346926);
function vE() {
  const i = t("ocGG", 779) + I(-556, "C#qA", -524, -470, -476) + e(605, 665, 625, 760, "n@0x") + g(299, 409, 265, 402, "#!X6") + r(-496, "#!gk", -495) + g(276, 173, 279, 162, "Za[L") + r(-453, "0eQh", -356) + t("$7oh", 720) + g(422, 466, 448, 414, "C#qA") + t("FHew", 652) + r(-423, "paYQ", -406) + t("paYQ", 800) + g(306, 215, 293, 411, "tgl7") + t("bT0(", 641) + t("4%@6", 801) + r(-190, "7V%!", -290) + r(-427, "$7oh", -412) + g(445, 467, 436, 422, "ORQv") + t("Anu!", 705) + I(-237, "8COa", -313, -424, -337) + I(-507, "a$]l", -524, -410, -489) + g(279, 381, 186, 182, "FHew") + g(466, 465, 369, 488, "BdIm") + t("ORQv", 722) + r(-392, "ocGG", -385) + g(301, 373, 371, 367, "(7Wk") + r(-409, "g8u3", -340) + r(-378, "zVfX", -414) + g(309, 200, 273, 207, "bEox") + r(-549, "bEox", -487) + t("Anu!", 820) + g(327, 282, 293, 278, "FHew") + r(-409, "7V%!", -370) + g(385, 363, 370, 396, "(Bjk") + t("HzPa", 809) + e(696, 705, 750, 718, "Dn#p") + r(-353, "ORQv", -335) + I(-351, "HzPa", -463, -433, -434) + e(604, 626, 736, 572, "9UDY") + g(421, 410, 388, 425, "bEox") + t("#!X6", 762) + r(-560, "g8u3", -447) + g(386, 341, 290, 486, "zH8C") + I(-639, "n@0x", -437, -451, -527) + e(643, 614, 601, 676, "Xu0%") + I(-415, "C#qA", -382, -257, -320) + g(312, 298, 351, 416, "]CVy") + g(399, 362, 303, 504, "bT0(") + t("t^@$", 750) + I(-517, "Dn#p", -352, -561, -455) + I(-517, "rR9a", -590, -532, -486) + e(776, 771, 740, 726, "a(rj") + I(-282, "HzPa", -436, -422, -346) + t("2XS]", 671) + t("6UxA", 674) + I(-369, "y^dD", -366, -388, -435) + g(273, 384, 321, 385, "(7Wk") + g(335, 375, 311, 233, "tgl7") + r(-405, "9UDY", -329) + e(537, 590, 634, 497, "g8u3") + e(783, 693, 590, 705, "ORQv") + r(-507, "zVfX", -420) + r(-440, "i@E)", -469) + r(-486, "(Zq!", -504) + I(-419, "SH!E", -319, -421, -356) + t("#!X6", 680) + g(376, 367, 268, 423, "Xu0%") + g(344, 442, 274, 243, "zVfX") + e(574, 631, 516, 599, "]CVy") + r(-467, "4%@6", -377) + e(765, 748, 687, 714, "SH!E") + g(272, 274, 297, 187, "y^dD") + e(775, 788, 818, 745, "C#qA") + r(-192, "y^dD", -288) + t("y^dD", 739) + I(-421, "Xu0%", -384, -314, -354) + t("g8u3", 640) + e(742, 750, 705, 833, "a(rj") + I(-272, "mi04", -423, -343, -361) + r(-396, "tgl7", -442) + r(-392, "]CVy", -400) + e(749, 779, 872, 872, "(7Wk") + g(260, 226, 316, 326, "TM0@") + r(-469, "7buC", -467) + I(-284, "7buC", -247, -319, -325) + r(-391, "*l!d", -341) + g(490, 462, 557, 392, "tgl7") + r(-385, "g8u3", -387) + r(-334, "FHew", -413) + t("(7Wk", 623) + I(-471, "BdIm", -352, -414, -407) + t("9UDY", 694) + t("BdIm", 793) + e(613, 637, 649, 685, "C#qA") + e(735, 757, 795, 657, "BdIm") + I(-405, "#!X6", -315, -410, -395) + I(-387, "mi04", -386, -354, -399) + t("7buC", 701) + r(-469, "6UxA", -488) + e(802, 751, 778, 776, "Xu0%") + I(-339, "i@E)", -416, -418, -307) + r(-464, "hyv9", -451) + r(-542, "mi04", -440) + r(-282, "0eQh", -338) + g(481, 573, 457, 381, "a$]l") + I(-357, "tgl7", -340, -452, -377) + t("#!gk", 672) + I(-416, "(Zq!", -378, -450, -495) + g(282, 297, 221, 199, "7buC") + t("Kqlw", 691) + I(-362, "bYfE", -324, -433, -330) + t("(Zq!", 599) + r(-477, "#!gk", -433) + g(432, 443, 315, 328, "$wDQ") + t("rR9a", 737) + r(-384, "t^@$", -401) + e(671, 659, 599, 657, "rR9a") + e(582, 658, 729, 562, "FHew") + r(-508, "y^dD", -405) + t("ocGG", 789) + I(-453, "2XS]", -297, -475, -412) + r(-501, "(Bjk", -423) + g(434, 379, 332, 382, "bEox") + e(792, 766, 786, 655, "g8u3") + e(523, 593, 679, 506, "7buC") + r(-263, "6UxA", -304) + I(-368, "y^dD", -470, -339, -406) + t("ocGG", 679) + e(567, 642, 715, 665, "#!X6") + t("(Bjk", 664) + t("ocGG", 788) + e(590, 619, 644, 685, "7buC") + r(-315, "bT0(", -398) + t("ORQv", 746) + e(876, 794, 681, 851, "Anu!") + r(-495, "Dn#p", -454) + I(-384, "#!X6", -289, -248, -345) + t("a(rj", 618) + e(766, 711, 691, 776, "Kqlw") + r(-607, "bEox", -496) + t("#!X6", 699) + t("9UDY", 714) + t("zH8C", 598) + e(668, 600, 678, 608, "BdIm") + r(-424, "9UDY", -422) + r(-339, "n@0x", -281) + g(465, 513, 367, 489, "BdIm") + t("tgl7", 619) + t("bEox", 648) + I(-286, "N%R*", -313, -409, -339) + r(-293, "7V%!", -345) + I(-279, "bT0(", -295, -294, -382) + t("a$]l", 626) + t("N%R*", 591) + t("bEox", 731) + r(-367, "N%R*", -328) + r(-417, "6UxA", -473) + I(-322, "#!X6", -541, -319, -432) + t("y^dD", 706) + g(401, 357, 303, 443, "N%R*") + t("t^@$", 662) + g(362, 364, 264, 407, "ORQv") + t("rR9a", 653) + I(-571, "xaWW", -413, -551, -515) + r(-479, "2XS]", -391) + g(414, 491, 479, 366, "BdIm") + e(759, 714, 789, 800, "i@E)") + I(-267, "g8u3", -262, -219, -315) + g(392, 430, 309, 377, "$wDQ") + I(-532, "(Bjk", -411, -504, -492) + I(-401, "2XS]", -392, -370, -351) + t("t^@$", 604) + I(-275, "hyv9", -307, -271, -335) + t("$wDQ", 608) + t("(Bjk", 759) + r(-366, "C#qA", -355) + I(-481, "bYfE", -286, -336, -389) + g(440, 471, 502, 509, "t^@$") + t("bT0(", 813) + r(-333, "n@0x", -362) + I(-290, "2XS]", -248, -204, -306) + t("FHew", 649) + g(283, 395, 360, 356, "n@0x") + r(-312, "n@0x", -394) + I(-324, "hyv9", -293, -385, -303) + t("7buC", 637) + I(-263, "$7oh", -327, -300, -370) + r(-572, "Dn#p", -463) + g(259, 212, 185, 149, "a(rj") + g(348, 396, 336, 302, "ocGG") + g(369, 384, 261, 255, "7V%!") + I(-467, "$7oh", -444, -427, -522) + t("8COa", 597) + r(-214, "i@E)", -302) + I(-220, "C#qA", -317, -391, -317) + g(379, 286, 281, 317, "N%R*") + I(-275, "Xu0%", -275, -433, -371) + e(668, 717, 789, 675, "$wDQ") + e(755, 639, 656, 585, "#!X6") + r(-428, "Kqlw", -374), n = window[g(393, 432, 357, 312, "bEox")](i);
  function t(C, s, E, c, x) {
    return rA(s - 413, C);
  }
  function e(C, s, E, c, x) {
    return rA(s - 389, x);
  }
  const A = window[t("C#qA", 696)](n), o = gC(A);
  function r(C, s, E, c, x) {
    return rA(E - -685, s);
  }
  function g(C, s, E, c, x) {
    return rA(C - 80, x);
  }
  const a = {};
  function I(C, s, E, c, x) {
    return rA(x - -709, s);
  }
  return a[I(-576, "xaWW", -488, -496, -465)] = P0, a[g(488, 494, 545, 508, "N%R*")] = Xc, window[r(-409, "n@0x", -354) + "o"][g(397, 296, 311, 391, "(Zq!") + "e"][e(647, 645, 669, 622, "4%@6") + t("$7oh", 764)](g(326, 250, 394, 427, "N%R*"), o, a, !0, [I(-511, "Xu0%", -553, -517, -494) + "pt"]);
}
async function ME(i) {
  function n(o, r, g, a, I) {
    return rA(I - -890, a);
  }
  const t = await vE(), e = {};
  e[A(-448, "TeRW", -436, -404, -349)] = P0;
  function A(o, r, g, a, I) {
    return rA(I - -557, r);
  }
  return window[A(-213, "9UDY", -184, -180, -164) + "o"][n(-409, -377, -473, "bEox", -492) + "e"][n(-600, -460, -482, "rR9a", -512) + "pt"](e, t, i);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return TA(C - 975, g);
  }
  function e(g, a, I, C, s) {
    return TA(C - 402, s);
  }
  function A(g, a, I, C, s) {
    return TA(C - -53, g);
  }
  function o(g, a, I, C, s) {
    return TA(C - -674, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(o("(krT", -388, -394, -394, -385)) / 1 + -parseInt(o("J8w0", -418, -400, -409, -405)) / 2 + parseInt(t("6Xws", 1251, 1254, 1245, 1239)) / 3 + -parseInt(o("5nwd", -398, -410, -407, -412)) / 4 + parseInt(o("n37[", -410, -410, -408, -414)) / 5 * (parseInt(e(666, 681, 679, 675, "zP$5")) / 6) + -parseInt(e(688, 692, 685, 683, "7s0@")) / 7 + parseInt(A("o414", 219, 216, 221, 219)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(gi, 8164 * -121 + 1230656 + 7 * 58575);
function gi() {
  const i = ["C0tdVMBdRCk0ArKGhw8lbW", "ACkPW5G6mSkEWRtcJghcSbW", "nSkTWOtcH2Piva", "y8kLW5G8p8oHW6JcMMlcQI0CWRG", "WQSFW7/dM0LxFcXczMf1", "W6ldNaZcI8ouW5fgpYfNbmok", "W7lcSY3dJGbvy8ksW7i6r1K", "W63cV8ojWR3cLc7cHatdJhldN8owW7K", "rSkIxa", "qCkjE8oOW7SzWP48BLtdG0e", "s2aIcKSzW4K", "nMtdI8oJuqCWWRu+WRRcIG", "W6tcJ8kLW6pdKNZdR8k0W5BcHJKHW7q", "v8o3W43dSHm", "WRj5fmkIEf/dTrBdH8oKEW0", "WO1+W54WWRRdNmoppL7dTmohW6m", "m8obW4xdJSoIrmk4W79pa27cPdS", "emoewmo9lt9ilmkyvCk+vSk5"];
  return gi = function() {
    return i;
  }, gi();
}
function TA(i, n) {
  const t = gi();
  return TA = function(e, A) {
    e = e - (1 * 1834 + 3207 + -4777);
    let o = t[e];
    if (TA.ytAtLZ === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      TA.MJIYEH = C, i = arguments, TA.ytAtLZ = !0;
    }
    const g = t[2287 + -3 * -241 + -3010], a = e + g, I = i[a];
    return I ? o = I : (TA.gQMHFA === void 0 && (TA.gQMHFA = !0), o = TA.MJIYEH(o, A), i[a] = o), o;
  }, TA(i, n);
}
async function LE(i) {
  const { iv: n, key: t, message: e } = await sC(i);
  function A(a, I, C, s, E) {
    return TA(I - -807, E);
  }
  const o = await ME(t);
  function r(a, I, C, s, E) {
    return TA(I - 179, s);
  }
  const g = {};
  return g[A(-544, -543, -538, -549, "[K5R")] = o, g.iv = n, g[r(439, 448, 450, "[Zaf") + "ge"] = e, g;
}
function dA(i, n) {
  const t = Ii();
  return dA = function(e, A) {
    e = e - 194;
    let o = t[e];
    if (dA.DodPNV === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      dA.jAJYay = C, i = arguments, dA.DodPNV = !0;
    }
    const g = t[-1 * 9809 + 1 * -1887 + 68 * 172], a = e + g, I = i[a];
    return I ? o = I : (dA.ngKOEy === void 0 && (dA.ngKOEy = !0), o = dA.jAJYay(o, A), i[a] = o), o;
  }, dA(i, n);
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return dA(E - -617, I);
  }
  function e(a, I, C, s, E) {
    return dA(a - -306, s);
  }
  function A(a, I, C, s, E) {
    return dA(C - 893, I);
  }
  const o = i();
  function r(a, I, C, s, E) {
    return dA(C - 98, E);
  }
  function g(a, I, C, s, E) {
    return dA(s - 296, E);
  }
  for (; ; )
    try {
      if (-parseInt(r(415, 319, 363, 403, "X5bC")) / 1 * (-parseInt(A(1071, "G&8F", 1115, 1154, 1080)) / 2) + parseInt(g(510, 541, 572, 540, "8HQ[")) / 3 * (parseInt(A(1136, "0xkk", 1159, 1166, 1129)) / 4) + -parseInt(r(256, 316, 295, 263, "VNd#")) / 5 + -parseInt(e(-52, -11, -109, "qJ)^", -18)) / 6 * (parseInt(g(551, 548, 527, 558, "X3]g")) / 7) + -parseInt(t(-418, "X5j4", -433, -380, -390)) / 8 + parseInt(r(376, 367, 383, 326, "$@3!")) / 9 * (parseInt(A(1111, "SpGH", 1113, 1123, 1080)) / 10) + parseInt(g(568, 637, 605, 601, "WchQ")) / 11 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Ii, 6089 * 64 + -1209684 + 1482662);
function ae(i, n, t, e, A) {
  return dA(t - 678, n);
}
function Dt(i, n, t, e, A) {
  return dA(n - -956, A);
}
function FA(i, n, t, e, A) {
  return dA(t - 4, e);
}
function tt(i, n, t, e, A) {
  return dA(t - 350, i);
}
function Ii() {
  const i = ["daZcMXCo", "WR0mWOhcUCkX", "f04FW7xdPW", "x8kjW4lcRq", "zhzdBdu", "gSoLbWhcSW", "tmkCW4G", "WR90W5e", "WORdKmkFysO", "tCkKwfVdG8oBWRxcGg/dPmozW7e", "W5zynmkPvG", "W5nEW6flW4NcGhxdR11kjZm", "WRe2W7O9WRC", "WOzqg8ktsG", "WQFcJSoB", "lsZcMaq9", "W7/cImochxNcKxxcUW3dUJCOW6pcHa", "W5VcVmoRW63dUq", "WPOoWOZcJSki", "WOG3W7OUWRq", "AqyGWRddUq", "d8kFeSkpWQ0", "W5ipW4JcLW", "h8o4brZcMq", "WPbzW5Wrca", "WQ3dISkustW", "WQ8dl8o0W5ecWRP2cSkWBH8", "W79xEG", "WOqzWRmAWOW", "W6KAB3uT", "fhevW6VdKq", "WRJdNCkdqs4", "W5H7E8kuWO4", "W7P3W5FcMf3dVGW9lq", "W7HcCmkUWQe", "eCo2ga", "WRbyjCkOrG", "W4pcH8k4W47dHa", "W6RcV8k1W63dHW", "smkjW57cTSkJ", "W7hcSCo3", "W5j6nmkNwW", "w8odqCoaW6G", "WPTgrMDnr8k5cSk0W5eS", "BCkBW4W", "W6HvBCkQWOi", "yCkBW4rOxG", "W5ldU3NdLSk4", "WOr1WRZdLSoh", "W7VdVLZcSW", "W6qJE8o0eCo9vSkNkSkOo8oZha", "W75vW6GAWQxdHmoKEmoekW", "t8kmW5j6sW", "wCkuW53cK8kP", "WR0jDLWEWQxdNG", "DmozESoTemokr8kxvq", "WOnqeCkFEW", "CSk3jmktW44", "uhNdL1RdUa", "xSk7lSok", "jZFcVa", "WPWWW5LRCW", "FmkKmq", "W6NdPSosy8ox", "W6WAzxKC", "vwldNfldVW", "WPxcImoRw8ox", "j8k8W4TMWQi", "W6GkftuA", "WRlcHmoXCmoT", "W49PW58CBG", "lfbJW43cQSoWWP5kvfhdICoJWPXc", "WQG+W4D9WPi", "W5eBqCokpCkvW6tcUSoDsSoN", "WPvjWP7cG8oojWxcVam", "W6tdSCotz8oX", "W5LiW6braG", "WQymWOVcJNy", "W6OBC3Kp", "y8oLWP0IW7xdQsevbN5CAq", "DMKEW4Wk", "WR8eWRTKWP8", "WRKeWQ1eWPq", "WO9qgq", "t8kcW5NcUSk/", "WQDOjSk1", "WOjBamkBFa", "bvOFW6RdJW", "WR0tWRbF", "W7ruWOjeEa", "g8ocWQ1uW7e", "WPfwW4SFiq", "W4LFW71viq", "A38rW585", "ncnmWPPzW7HZetpdK8oSn8oOW6u", "W6RdO17cSwa", "W4Wnhd46", "WPBcV8oAw8ov", "kZdcNGOT", "WPiCW5hcOCoBhGe", "WOJdMSkiyIToW47cVmol", "cCkfe8kwW4VdNmk7W4TzFa", "rgldLKe", "W69wW65iiq", "W7PDW5a9Fq", "WPpcUCo8vCot", "AmkSnCozdG", "c8kKW67cLhFdKmkDWONdTmoZW5LOnq", "W6TiW5aaEq", "qSkYW4dcVSkR", "mSkaW5H9WRa", "WQa0W4mEpxiNmHzxWRVdJ8k1pW", "BquXWOJdUG", "WQhdTCkuwZS", "WQGQWP3cLCkR", "zYr9", "W5ddHSo+", "W4X2WPnKF3RcTHhdJa", "WOpcOqZcL8o7", "D8kSl8kBW4K", "W5biW6i"];
  return Ii = function() {
    return i;
  }, Ii();
}
function VA(i, n, t, e, A) {
  return dA(i - -475, e);
}
class OE {
  async [VA(-239, -202, -240, "X5j4") + Dt(-716, -656, -670, -707, "Z2fu") + VA(-260, -266, -247, "tcJf") + Dt(-740, -715, -774, -693, "NVzj") + ae(915, "YQJw", 916)](n) {
    const { Image: t } = LA;
    function e(c, x, d, l, B) {
      return FA(c - 423, x - 19, c - 538, l);
    }
    function A(c, x, d, l, B) {
      return FA(c - 56, x - 190, d - -98, l);
    }
    const o = await n[s("BO4I", -690, -725) + A(128, 242, 185, "qJ)^") + "r"](), r = new Uint8Array(o);
    function g(c, x, d, l, B) {
      return FA(c - 299, x - 38, d - 877, x);
    }
    const a = {};
    a[s("te&2", -666, -649)] = r;
    const I = t[s("YQJw", -646, -690) + "y"](a);
    function C(c, x, d, l, B) {
      return tt(c, x - 181, x - 155);
    }
    function s(c, x, d, l, B) {
      return VA(d - -471, x - 237, d - 68, c);
    }
    if (I)
      if (g(1095, "AJmn", 1092) === g(1120, "[3f8", 1162)) {
        const { v4: { Metadata: c } } = _0x3d3fc6, x = { ..._0x4fdc8a };
        x[A(134, 187, 184, "YYUT") + A(137, 143, 124, "V9XS")] = _0x58d219[g(1248, "2xSX", 1195) + s("2xSX", -693, -736)][C("ca1C", 730)], x[A(181, 169, 140, "SpGH") + C("WchQ", 809) + C("Pl@n", 755) + "n"] = s("G#FJ", -727, -714);
        const d = x, l = c[e(835, 809, 827, "X3]g") + "y"](d);
        if (l) throw _0x42d590[A(168, 148, 122, "SpGH") + s("X3]g", -656, -647)](l);
        return c[e(810, 816, 765, "QlCQ") + "e"](d);
      } else throw G[g(1070, "YQJw", 1126) + e(802, 742, 816, "dHy$")](I);
    const E = {};
    return E[C("Pl@n", 800)] = r, t[e(795, 767, 749, "G#FJ") + "e"](E);
  }
  async [FA(248, 330, 271, "te&2") + VA(-216, -160, -232, "kM)x") + Dt(-657, -668, -637, -666, "8HQ[") + ae(947, "zBJb", 913) + VA(-186, -163, -160, "X5bC") + "e"](n) {
    const { v4: { Metadata: t } } = LA;
    function e(s, E, c, x, d) {
      return VA(c - 49, E - 388, c - 64, d);
    }
    const A = { ...n };
    A[o(1093, 1098, "8qX&", 1043, 1064) + o(1192, 1205, "te&2", 1151, 1156)] = LA[C(-181, "1LTS", -197, -275, -224) + r(1182, 1231, "5(rl", 1211, 1189)][C(-242, "^NfO", -257, -284, -248)], A[e(-140, -152, -120, -66, "dHy$") + r(1179, 1236, "^NfO", 1148, 1208) + I(341, "Hxj0", 375) + "n"] = e(-182, -149, -168, -125, "rpVK");
    function o(s, E, c, x, d) {
      return VA(d - 1337, E - 446, c - 111, c);
    }
    function r(s, E, c, x, d) {
      return ae(s - 34, c, d - 256);
    }
    const g = A, a = t[I(357, "YQJw", 359) + "y"](g);
    function I(s, E, c, x, d) {
      return tt(E, E - 357, c - -247);
    }
    function C(s, E, c, x, d) {
      return FA(s - 113, E - 87, d - -458, E);
    }
    if (a)
      throw e(-226, -162, -207, -160, "X5j4") !== e(-220, -242, -198, -206, "a)9z") ? _0x2d3a6f[o(1056, 1076, "X5bC", 1128, 1102) + e(-118, -187, -130, -171, "hplR")](_0x325191) : G[e(-143, -262, -202, -255, "te&2") + o(1109, 1110, "$@3!", 1068, 1095)](a);
    return t[I(402, "X5bC", 378) + "e"](g);
  }
  async [ae(942, "5(rl", 935) + ae(942, "BO4I", 930) + VA(-272, -224, -257, "X5j4") + VA(-258, -252, -258, "Pl@n")](n) {
    const { Content: t } = LA;
    function e(c, x, d, l, B) {
      return FA(c - 193, x - 430, x - -380, d);
    }
    const { iv: A, key: o, message: r } = await LE(n), g = { token: new Uint8Array(o), iv: A, schemaVersion: zc, bytes: new Uint8Array(r) }, a = t[e(-173, -134, "X5j4") + "y"](g);
    function I(c, x, d, l, B) {
      return FA(c - 291, x - 297, l - 63, d);
    }
    function C(c, x, d, l, B) {
      return ae(c - 13, d, c - -1025);
    }
    if (a) {
      if (C(-67, -108, "ca1C") === I(284, 269, "X7UZ", 279)) throw G[E(-430, -482, "2xSX") + C(-77, -132, "k)Mp")](a);
      {
        const { architecture: c, fullVersionList: x, model: d, platform: l, platformVersion: B } = _0x59fdce ?? {};
        return { userAgent: _0x4d3f47, architecture: c, platform: l, model: d, platformVersion: B, browserVersions: x == null ? void 0 : x[I(332, 284, "SpGH", 313)](({ brand: f, version: p }) => ({ name: f, version: p })) };
      }
    }
    const s = t[I(300, 362, "mU5v", 343) + "e"](g);
    function E(c, x, d, l, B) {
      return tt(d, x - 161, c - -1067);
    }
    return t[C(-38, -6, "AJmn") + "e"](s)[e(-173, -167, "QlCQ") + "h"]();
  }
  [VA(-236, -226, -288, "G&8F") + tt("hplR", 599, 597) + FA(293, 298, 267, "5(rl") + "ge"](n) {
    function t(I, C, s, E, c) {
      return ae(I - 77, I, E - -279);
    }
    const { Blob: e } = LA.v4;
    function A(I, C, s, E, c) {
      return ae(I - 287, I, C - -774);
    }
    const o = e[t("2xSX", 647, 715, 702) + "y"](n);
    if (o)
      throw a(15, -8, "YQJw", -37) === A("tTlz", 152) ? G[A("NVzj", 117) + a(-10, -98, "Pl@n", -66)](o) : _0x3c04b9[A("qJ)^", 211) + t("mU5v", 727, 688, 712)](_0x10b8de);
    function r(I, C, s, E, c) {
      return FA(I - 223, C - 266, s - 980, c);
    }
    const g = e[r(1254, 1320, 1259, 1214, "X5bC") + "e"](n);
    function a(I, C, s, E, c) {
      return VA(E - 195, C - 115, s - 304, s);
    }
    return e[A("zBJb", 206) + "e"](g)[r(1301, 1195, 1253, 1294, "mU5v") + "h"]();
  }
  async [ae(866, "[3f8", 872) + tt("U6Ca", 671, 633) + tt("NVzj", 628, 648) + ae(828, "k)Mp", 874) + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(I, C, s, E, c) {
      return Dt(I - 302, I - 870, s - 38, E - 314, s);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A == null ? void 0 : A[a(187, 211, "QlCQ", 233)](({ brand: I, version: C }) => ({ name: I, version: C })) };
  }
  async [Dt(-713, -730, -767, -701, "AJmn") + FA(341, 303, 281, "ca1C") + FA(241, 259, 296, "X3]g") + tt("[3f8", 588, 548) + FA(248, 290, 295, "WchQ") + Dt(-739, -752, -717, -767, "X7UZ") + ae(911, "tTlz", 927) + "on"](n) {
    function t(I, C, s, E, c) {
      return FA(I - 429, C - 124, s - -914, C);
    }
    const e = await this[a("ca1C", -116, -161) + a("YYUT", -136, -156) + a("Pl@n", -196, -157) + t(-702, "X7UZ", -681) + a("sbOA", -146, -151)](n[g("^NfO", 1283, 1237, 1204, 1242) + t(-584, "@osx", -609) + "ge"]);
    function A(I, C, s, E, c) {
      return FA(I - 265, C - 199, I - -263, c);
    }
    function o(I, C, s, E, c) {
      return VA(s - 552, C - 305, s - 326, c);
    }
    const r = {};
    r[g("1LTS", 1134, 1188, 1229, 1179)] = e;
    function g(I, C, s, E, c) {
      return FA(I - 456, C - 348, c - 952, I);
    }
    function a(I, C, s, E, c) {
      return VA(s - 119, C - 456, s - 377, I);
    }
    return r[t(-649, "8qX&", -679) + A(49, 6, 31, 86, "ca1C") + o(301, 387, 328, 382, "a)9z")] = n[g("Pl@n", 1257, 1280, 1212, 1220) + t(-756, "rpVK", -702) + t(-648, "ANxr", -639)], r;
  }
}
function Rs(i) {
  const n = [], t = q.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const o = e.slice(t.length), r = parseInt(o, -11766 + -184 * -64);
      if (!isNaN(r) && o === r.toString()) {
        const g = {};
        g.phase = e, g.data = A, g.index = r, n.push(g);
      }
    }
  return n.sort((e, A) => e.index - A.index);
}
function eA(i, n, t, e, A) {
  return lA(A - -892, n);
}
function si() {
  const i = ["hbldLq", "vCoXvmk9WPxcJf3cPmo3oG", "WROfyCkhxa", "W7ldObtcUa", "qSoDWRNdMr8", "WQ3dICktW6mFdSkegJtcQa", "f2TvjCki", "W5yfW6HXW5i", "WRjLWOhdV3O", "W5WJWQLJW5q", "WRVdKuxdOSoL", "W5OdWQ12W4K", "WPVdHCkrbCoy", "W7dcISolWRCC", "rSkUWQD1W5m", "gfpcO8oBgCkOemoEfG", "ymkIWRTUW60", "ogtdKrf0", "q8opWR7dTvO", "WRlcPmo1W7RdSG", "tCkhr8kD", "s8ohWRZdSrq", "WOfFW5fZka", "WRjXWOddQua", "W6dcRrC", "naGHuvu", "i2ddJfzU", "WRNcPmomW7tdSG", "vCkmW7aR", "sqVdSSoFcq", "WRrKWRS", "gX7dHSkxW4a", "u8kZW7OQdW", "qmkEW4G", "WQLPpSonmG", "hwddKur2", "BwqdWQj/", "WOCzA8kBxa", "vtakFSolACoKECkpW5aIW4y", "WQDrz8kbsq", "WQXeWOhdV1O", "WPBcQCogW5rs", "W5hdUb85iG", "WQiZWPxcNq", "W4BdJCk3", "xCk+WOrsW5S", "W7/cSJ5PW54", "umo8WQJdMcG", "W4RdLCkRWOPo", "W5WFWRXAW5G", "W53dSGaPdq", "W7iYsa", "WRHZiSocjG", "W4hdKSkOWPnI", "fbBdMf/cVW", "k2OtW5m", "WRqKWO7cIGu", "W7ddPmkEWQ3cSW", "WPpdJCoWtsO", "jhWdW6rv", "W73cNH9HW48", "W6XemmkEthRdT8kYqq", "rmkBW7eTgq", "s8k9l8omW5K", "W4/dOmkuWRhcOa", "lhFdH1bU", "hmk1a8okWRS", "W4VcUtLjW5G", "WQfNWP3dGvy", "WR/cRmoR", "WRumWO/cGXi", "WPBcPmoeW4vC", "EmkNr8kxCG", "WRidA8keBq", "qSoDWR/dUa4", "ahbFkSkp", "vSkVr8kmta", "WOXVc8oVW6i", "W6tcSGzHW4W", "grRdKCkxW7a", "WRVdLLFdHCoS", "W5O/v8o3W4q", "sSolWR7dTr4", "fbldHmkvW7y", "wx8sWQTF", "WQzICsud", "WR7cKmk9WOe", "W5pdQCkQWP9a", "W7BcLSkE", "s8kCW47cSG", "W6BcJColWRqy", "kXldJJpcIa", "frNdHmkVWP0", "W6JcOXm", "W47dJmkRWPDu", "WQxcVCo/wSkd", "WQaGWONcNa8", "WRFcV8oJcmkj", "W4ddUmkuWRVcJG", "WRHyWQhdTwe", "W4pdS8kEW4HzWPnFxNa", "WRfrz8kiwa", "lX7dHrtcTW", "WQTTWQldHwK", "crRdGCk9W7e", "oaJdINVcSG", "WPLQca", "WRbXWOm", "W7BcJmopWRij", "W6VcPrtcRuC", "WPtcOmotW4v8", "W5GOtmo/W6i", "xCkdxSkisa", "W5alWQ1dW5i", "WOXNcCoX", "WQBcGmoPW6vm", "WONdJfddRSoq", "nXRdKJxcVW", "WO8Keh3cQW", "W41xDcvz", "WQ11Aaqf", "W7e5qSoudW", "W70OgmoAfmknybi", "WPdcLmo+W4yvWR7cLSkZWQSaW7u", "WPb0W5jYoq", "qXtdSSoncq", "WRBcOmoOW7xdOW", "W5XxFJy", "W50Hvmo/W68", "bSofcmkb", "W5GStmo7W4W", "u8olWQ7dMXG", "wmkkrSkirq", "WQL1WP4", "WPNdVCoxWPBdSq", "x8kurCkaBG", "W7xdHCk0WOTl", "ACobW6RdUbm", "f8oPemkDeG", "WPpdISkcbCoz", "WO7dNSo6", "rSkUWQD1", "WPBcPmoeW4vm", "WPvJemoGW7u", "WO1dW7SGWO7dHd1RDXmHWPHV", "lG/dNeJcIa", "WQLQWPJdTwi", "W5m4vSo+", "rmkwvCoevG7cGWRdSgVcMmkO", "WPzVW5jU", "W77dUfqKaa", "WR/cUCo+hCki", "W4OODmoZW7C", "WOldL8oSyde", "W5tdTGaPsq", "WPFcOmo3W4H+", "W4ddVSkuWR7cSW", "W6qUsCoqca", "gdpdJmkeW7y", "WPxcTSouW4f4", "xmkGj8onW6m", "WRPUWOxdUha", "WP5QbCo1W5W", "W6VdICkXWPTj", "W73cVH1UW5S", "W7ZdOapcQvq", "iSoLnSkIlW", "WRT5WRRdVvq", "W4vpst5o", "WRKuCmkita", "v8kKWQDPW6u", "WR8YWPpcMW8", "WOiGWPtcIam", "WPvNfa", "WOP6AxZdVG", "u8kBW7SwhG", "dM0FEa", "WP5QAeNdLG", "WR5OiSoE", "oWqJu3m", "WRFcSSoPcCkE", "W54Ru3JdM8oNWP4d", "WPX4ywS", "WQ9/BIqh", "WOH9WPJdQv0", "kapdM8kYWOa", "WQRdGCoSudG", "tCkhr8kDzG", "W4tdQCkf", "WQPXWP3dV34", "WOJdP8ojWPldPq", "WRBdU8oKmCoA", "W7lcM8oE", "W75nCdDi", "gCklcmo+WOq", "DtXdWPaizrv9W77cUhdcOq", "WRddNCo4kSop", "W5yOw8oU", "WPVdPSkae8oz", "WOldL8oSBJW", "kqqPwKm", "WQyKWOJcHGa", "WP3dMCkkemoA", "bwnzlSkO", "WQhdQ8o4imkF", "W7tcG8ooWOq+", "s8kzj8oAW5K", "WRFcRSo1", "vaFdMSojdG", "W7RcI8oeWRC", "W7ZcHmopWOCs", "W7m9qCob", "nbtdLW", "WQ7dHfFdTCoT", "W7RcPbnNW40", "iwddKujx", "w8kXnSomW4K", "W63dQXm", "WPtcGCocW5r6", "W5KUv8oOW6u", "uHtdUmoE", "WRfNWRddVNy", "bmobc8kufq", "W7m5smo+hG", "W47dRCkb", "WPVdUCkefmod", "u8kCW73cNGC", "fMyeW49Q", "WOiTchhcUW", "tCkdtSkIsq", "WQRdHeNdTSoj", "vmkdxSkmtW", "WPFdUCkedSon", "W4pdHCkZWPTe", "WOT8CMVdUq", "AgWzWQ1o", "pbeH", "W4BdUmkqWRVcPG", "W53dTGq", "ss0uWQjk", "WR3dL0hdP8oW", "rtxdO8ojdq", "tMqyWQry", "W5OIqmo3W4y", "ghKpDCov", "WQpdGCoRqJa", "WPJdQ8oqWPldTq", "WQDGWOVdQhO", "WPu7hxpcVq", "W6OzWQDLW4K", "WPXYlmoFma", "WQrnC33dUq", "WQWDWOhcVCkQ", "zSkJW4tcLdi", "tCkarCkFrG", "WQjMWOhdOxy", "k2tdLLbx", "WQPIEqas", "fmofbSkujq", "bmkudmoJWPa", "pwddKur2", "cmoGE8krWPJcSvxcONuyW7i", "qSoaWQ3dStm", "WPiHe3RcIG", "sgGeWR9h", "W4tdOGyTsq", "frRdLSkYWO8", "WPn8W448la", "WPT8yKhdUa", "W7NcUafPW5W", "f2TxlSki", "WQSkWPdcUCk9", "WQhdT8oNimom", "WORdGSkibCoz", "qqhdSG", "vmkZWR9WW7e", "WRHZiSocbW", "W5KJtmo/W7m", "WR/cTCo6", "er/dMSkJWPO", "CSkYx8kEsa", "WRWrWPRcTSk6", "cgirW4bF", "eSomWQTPtmoxW47cLSoNz8kY", "bmobrCkDdW", "WQpcNmk1WOjE", "WQnXWR7dPfi", "mX7dIKVcLW", "W5hdHCk1WPDb", "FSkUWR5+W68", "WQHKFq", "WQeQWPtcTSkU", "ts5vEmoaWQtdNxRdJG", "W5BdPrSLla", "DmktrSkzqG", "WRWrWPJcVCk6", "dqqZrvK", "WRhcRSoPg8kz", "dXRdTCkEW7i", "cJVdKSk1WPO", "uuxcHmoXW5VcRmksbItdNmkJzW", "cmkOgCoaWPi", "dwygW4ju", "WQz/lSoy", "eHFdHmoMWO8", "D8ogWQVdPX8", "WRXVpSoe", "WRtcPmo4W6K", "WRJdHeFdO8ox", "nHFdJttcQq", "W7tcUSklWPyW", "WPVdPSkafmol", "WRZdPuyWWPJcHMzOrmkplq", "lwygW4ju", "WQvGka", "WQlcKmkJWPLp", "iN0vW4zo", "cZHhW7GFWOlcTCkeWQ3dHCkg", "WRhcTmoTfSkb", "W63cKSkIWOSN", "WP/dVmobWPBdOG", "W5xcTXCPgq", "WQH/oCojnG", "kqqKv0q", "cqRdL8kxWRm", "dNCFECoY", "WQayACkmwW", "WOPvB3JdVW", "W7lcM8kcWOSI", "rmk0W5JcQIK", "W77cHCk9WOS1", "WOpdHCoRqHq", "uWpdPmoFfa", "WPxcHSoiW45R", "o2ZdJv9i", "paNdHdZcRG", "WRbQWRldTwi", "u8kRWQr+W68", "WPNdG8obWOpdTW", "W4RdOCkuWQZcSW", "pG/dGa", "WQ3cLmkK", "tmk1jCom", "WR3dPue3WPVdMtrtrCk9hmkbqa", "WQmGWP3cIG", "W47dGcJcGh4", "WRmKWPtcMWm", "WOjysqiO", "WR/cPSo+", "WRtcRSoJf8kO", "WRbUWQhdSxu", "W5xdPsCHdq", "kWaYx1y", "WRXOkmoCna", "WReYA8khxa", "rSkkW74", "WOP3y33dQq", "jw4eW4yA", "pbZdNa", "WONcQmoVW7xdKG", "WQH3EsWd", "WRRcHCo+W6NdOW", "v8kFW6WQfq", "WPLPd8oWW5O", "xmkMj8oiW54", "W73dLqxcO0m", "WR7cKmk9WOfN", "WORdHCoV", "pxFdJum", "odBdNeVcQq", "WRhdU8o+imoC", "qSoaWQ/dPWK", "ocJdJv3cQG", "WPiHe3RcQW", "WOxdV8o5nSow", "hwtdJfz/", "f8o0f8kEeG", "kX7dI1hcVa", "WRVdHKVdTmoG", "WQbQEtuj", "WORdQ8owWP7dSa", "WQ19ka", "W48uWQzYW44", "WQz0z2NdVW", "WPtcHmo8qIK", "erBdK8kxW70", "WRVcKCoPW7ldSG", "bSofaCkqeG", "WQBdV2FdVSoL", "WQfyWOFdULy", "WRpdGfBdOCoH", "fSoGamkfaW", "W6NcHCkbWPa", "WRBdRmoVjmol", "cr7dImkcW54", "W5xdSZ0Lca", "tmkyW4RcOY4", "WOtcPmodW4fR", "bSofkmkufq", "jh0JW45E", "W5pdLCk1WPSh", "maelF0m", "cNebDCo1", "crpdMCkHWP0", "W4BdSLqKaa", "W4NcLSkaWOu0", "WP1ubCo1W7G", "WQJcPmoPW7tdOa", "WQZcG8k/WPXV", "WR3cLmkY", "gSkud8obWQu", "W7/cKSkAWOCY", "cmkOgCoOWOu", "xMWdWQSl", "eaRdICkgW7O", "qrldTG"];
  return si = function() {
    return i;
  }, si();
}
(function(i, n) {
  function t(a, I, C, s, E) {
    return lA(E - 277, s);
  }
  const e = i();
  function A(a, I, C, s, E) {
    return lA(C - 61, E);
  }
  function o(a, I, C, s, E) {
    return lA(I - -128, C);
  }
  function r(a, I, C, s, E) {
    return lA(C - 141, E);
  }
  function g(a, I, C, s, E) {
    return lA(C - -841, E);
  }
  for (; ; )
    try {
      if (-parseInt(g(-393, -180, -291, -375, "*YHl")) / 1 + -parseInt(g(-297, -321, -219, -344, "k3Eg")) / 2 + -parseInt(g(-79, -201, -97, -247, "Ck3[")) / 3 + parseInt(o(663, 480, "foEw", 541, 452)) / 4 * (-parseInt(r(817, 818, 716, 518, "GZTx")) / 5) + parseInt(A(768, 919, 909, 1024, "pYDw")) / 6 * (parseInt(o(250, 360, "1f%@", 378, 330)) / 7) + parseInt(t(923, 936, 1175, "FBj6", 1016)) / 8 * (parseInt(g(-51, -221, -122, -279, "Xc%v")) / 9) + parseInt(g(-382, -333, -270, -450, "2Fp(")) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(si, 254152 + -769 * 68);
function wt(i, n, t, e, A) {
  return lA(i - -805, A);
}
function YA(i, n, t, e, A) {
  return lA(t - 405, A);
}
function cA(i, n, t, e, A) {
  return lA(i - 609, n);
}
function lA(i, n) {
  const t = si();
  return lA = function(e, A) {
    e = e - (-101 * 17 + -585 + 1 * 2773);
    let o = t[e];
    if (lA.RDWBRx === void 0) {
      var r = function(s) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, B, f = 0; B = s.charAt(f++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = E.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(s, E) {
        let c = [], x = 0, d, l = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          x = (x + c[B] + E.charCodeAt(B % E.length)) % 256, d = c[B], c[B] = c[x], c[x] = d;
        B = 0, x = 0;
        for (let f = 0; f < s.length; f++)
          B = (B + 1) % 256, x = (x + c[B]) % 256, d = c[B], c[B] = c[x], c[x] = d, l += String.fromCharCode(s.charCodeAt(f) ^ c[(c[B] + c[x]) % 256]);
        return l;
      };
      lA.bfmiuO = C, i = arguments, lA.RDWBRx = !0;
    }
    const g = t[3377 * -1 + 482 * -17 + 609 * 19], a = e + g, I = i[a];
    return I ? o = I : (lA.UlFNng === void 0 && (lA.UlFNng = !0), o = lA.bfmiuO(o, A), i[a] = o), o;
  }, lA(i, n);
}
function ZA(i, n, t, e, A) {
  return lA(n - 596, e);
}
var o0, n0;
class JE extends OE {
  constructor(t) {
    function e(g, a, I, C, s) {
      return eA(g - 269, g, I - 494, C - 490, C - 1345);
    }
    function A(g, a, I, C, s) {
      return cA(s - 175, a);
    }
    function o(g, a, I, C, s) {
      return eA(g - 234, g, I - 275, C - 31, I - 1636);
    }
    super();
    y(this, n0);
    y(this, o0);
    function r(g, a, I, C, s) {
      return eA(g - 30, s, I - 240, C - 424, a - 514);
    }
    [this[o("koU#", 1402, 1533, 1407) + A(1178, "Dn(g", 1227, 1232, 1363) + A(1321, "p]qM", 1209, 1197, 1391) + r(365, 354, 404, 271, "CX[m")], ...this[r(462, 362, 259, 523, "k3Eg") + e("T*f%", 789, 1188, 985) + o("Dn(g", 1286, 1299, 1177) + A(1343, "$eTZ", 1331, 1442, 1372) + "se"]] = t;
  }
  async [(n0 = eA(-208, "MM%8", -160, -111, -252) + cA(1355, "Gy(M") + eA(-243, "CX[m", -82, 81, -94) + cA(1286, "*gug"), o0 = ZA(1374, 1460, 1390, "CX[m") + ZA(1071, 1103, 975, "MM%8") + YA(1083, 1217, 1169, 1004, "PnEC") + cA(1191, "v[ND") + "se", cA(1120, "Ck3[") + YA(1214, 1280, 1201, 1320, "T*f%") + eA(0, "jyW1", -171, -78, -117))](t, e) {
    function A(c, x, d, l, B) {
      return ZA(c - 480, c - -1086, d - 104, d);
    }
    const o = t[a(1522, 1384, "*0mK", 1687, 1544)](q[a(1456, 1370, "GZTx", 1619, 1522) + I(927, 907, 926, "LMU6") + r(1281, 1321, 1402, 1444, "v[ND") + "S"]);
    function r(c, x, d, l, B) {
      return cA(x - 170, B);
    }
    if (!o) {
      if (r(1497, 1664, 1752, 1796, "9O7%") === a(1655, 1689, "oMcT", 1851, 1719)) throw new G(I(1057, 1018, 877, "wcI(") + C(188, "9O7%", -8, 369) + A(58, 174, "JZst") + r(1412, 1315, 1145, 1298, "LMU6") + a(1486, 1599, "9O7%", 1781, 1621) + a(1823, 1894, "Ck3[", 1690, 1769) + A(32, 190, "p]qM") + r(1423, 1629, 1422, 1736, "2Fp(") + I(882, 831, 798, "LMU6"));
      {
        const { MultiRangeLivenessMetadata: c } = _0x3fbe6b.v4;
        if (!_0x3d4464) return;
        const x = _0xdeaa8c[I(884, 975, 948, "t$rF")]((f) => {
          const p = {};
          p[b(688, 721, "*Ck6", 486, 630) + "r"] = f[b(877, 645, "*gug", 828, 761) + m(1023, 1050, 862, "JaOL") + b(414, 725, "sYA2", 326, 528)][m(925, 651, 812, "wcI(") + b(769, 956, "VL&D", 889, 867)];
          function m(L, T, H, _, V) {
            return A(H - 696, T - 488, _);
          }
          p[F(370, 126, 206, 407, "@*Cp") + v(1993, 1951, "6wXv", 1812, 1803) + b(584, 632, "k3Eg", 782, 721) + v(1480, 1552, "*0mK", 1657, 1481) + D(873, "Gy(M", 1020, 881) + F(45, -177, -16, 170, "VL&D") + "o"] = f[b(719, 353, "Dn(g", 660, 550) + v(1722, 1685, "CX[m", 1536, 1555) + m(1110, 1167, 1052, "LMU6")][F(200, 145, 3, 203, "Xc%v") + m(935, 991, 947, "*gug")];
          function D(L, T, H, _, V) {
            return r(L - 147, H - -516, H - 131, _ - 331, T);
          }
          function b(L, T, H, _, V) {
            return a(L - 79, T - 38, H, _ - 454, V - -917);
          }
          const w = {};
          w[b(563, 526, "FBj6", 698, 708) + v(1565, 1733, "jyW1", 1540, 1631)] = p;
          function F(L, T, H, _, V) {
            return I(L - 22, T - 366, H - -822, V);
          }
          function v(L, T, H, _, V) {
            return A(V - 1487, T - 83, H);
          }
          return w[m(1204, 837, 1035, "Xc%v") + m(884, 990, 863, "MM%8") + F(-255, -15, -123, -166, "!fsv")] = f[D(1144, "1f%@", 1016, 894) + F(-63, -64, -30, 146, "JZst")], w;
        }), d = {};
        d[A(102, 246, "LMU6") + a(1565, 1693, "FBj6", 1319, 1520)] = x;
        const l = c[C(161, "T*f%", 110, 342) + "y"](d);
        if (l) throw _0x250716[I(702, 565, 634, "*YHl") + I(700, 962, 801, "m*F9")](l);
        const B = {};
        return B[C(12, "!fsv", -116, -50) + A(-5, 24, "t$rF")] = x, c[A(94, 272, "JZst") + "e"](B);
      }
    }
    const g = Rs(t);
    if (g[I(1069, 1152, 1016, "jyW1") + "h"] === 3 * 2611 + -6004 + 1829 * -1)
      throw C(-171, "PnEC", -162, -262) === r(1106, 1309, 1432, 1326, "Xodq") ? new G(a(1501, 1439, "9O7%", 1523, 1506) + a(1665, 1846, "Xodq", 1789, 1795) + I(924, 1230, 1036, "1f%@") + a(1503, 1493, "*0mK", 1303, 1420) + r(1167, 1307, 1362, 1149, "1f%@") + C(184, "*YHl", 324, 160) + C(-62, "9O7%", 95, -168) + I(1032, 855, 885, "tndF") + r(1320, 1415, 1442, 1347, "pYDw")) : _0x3fd601[r(1438, 1555, 1407, 1676, "p]qM") + I(828, 957, 1025, "koU#")](_0x157774);
    function a(c, x, d, l, B) {
      return YA(c - 485, x - 493, B - 524, l - 369, d);
    }
    function I(c, x, d, l, B) {
      return wt(d - 959, x - 105, d - 383, l - 2, l);
    }
    function C(c, x, d, l, B) {
      return YA(c - 139, x - 179, c - -1048, l - 379, x);
    }
    const s = await this[I(836, 745, 689, "pYDw") + C(95, "VL&D", 299, -104) + a(1715, 1781, "t$rF", 1836, 1687) + A(96, -68, "v[ND") + "e"](o, g, e), E = await this[A(194, 131, "6wXv") + A(291, 98, "1f%@") + r(1078, 1255, 1301, 1163, "2Fp(") + a(1702, 1380, "FBj6", 1600, 1570)](o, g, s);
    return this[A(330, 435, "*Ck6") + C(160, "GZTx", 45, 283) + I(893, 1004, 880, "tndF") + C(165, "*gug", 295, 274)](E);
  }
  async [cA(1293, "6wXv") + YA(1081, 1055, 1170, 1182, "SNuL") + cA(1166, "Dn(g") + cA(1486, "*gug") + "e"](t, e, A) {
    const o = [...t[I(1623, 1551, 1790, "$eTZ") + p(184, 284, 308, 226, "6wXv")][g(403, 381, 241, "!v96") + g(500, 457, 267, "GZTx") + p(28, 92, -12, 220, "*0mK") + p(229, 390, 583, 504, "sYA2") + p(422, 446, 488, 650, "Ck3[") + g(562, 511, 370, "m*F9") + a("jyW1", 832, 908, 891, 957)]], r = t[I(1355, 1177, 1233, "CX[m") + a("koU#", 1097, 1408, 1351, 1243)][m("*Ck6", 59, 284, 173) + g(395, 329, 488, "!fsv") + m("MM%8", 347, 155, 181)][p(228, 127, 108, -38, "Xodq")](({ detectedObject: b }) => b);
    function g(b, w, F, v, L) {
      return YA(b - 80, w - 89, w - -766, v - 92, v);
    }
    e[p(107, 177, 167, 126, "6wXv") + "ch"](({ data: b }) => {
      function w(H, _, V, JA, Ee) {
        return p(H - 184, Ee - 586, V - 350, JA - 486, _);
      }
      function F(H, _, V, JA, Ee) {
        return I(_ - -1273, _ - 98, V - 339, JA);
      }
      function v(H, _, V, JA, Ee) {
        return a(_, _ - 169, V - 110, JA - 70, V - -1007);
      }
      function L(H, _, V, JA, Ee) {
        return g(H - 357, V - 723, V - 332, _);
      }
      function T(H, _, V, JA, Ee) {
        return a(JA, _ - 201, V - 275, JA - 95, V - -776);
      }
      if (L(1288, "6wXv", 1136) !== w(509, "JaOL", 499, 644, 652)) {
        o[v(122, "Xc%v", 57, -94)](...b[T(58, 193, 190, "FBj6") + F(226, 93, 176, "FBj6")][T(164, 386, 238, "jyW1") + v(58, "v[ND", 99, 89) + L(953, "v!2$", 949) + L(929, "VL&D", 928) + w(755, "jyW1", 950, 953, 939) + v(97, "*0mK", 220, 187) + T(677, 382, 528, "@*Cp")]);
        const H = b[L(943, "oMcT", 932) + F(371, 278, 299, "jyW1")][L(1277, "*Ck6", 1159) + w(734, "F0gY", 529, 869, 671) + F(215, 219, 95, "Dn(g")][v(206, "*0mK", 105, 210)](({ detectedObject: _ }) => _);
        r[T(250, 236, 418, "*gug")](...H);
      } else {
        const { MultiRangeLivenessMetadata: H } = _0x1ac1f0.v4;
        if (!_0x4f9869 || _0x5157d4[w(825, "ZbrI", 850, 1200, 1022) + "h"] === -1 * 9811 + 8886 + 925) return;
        const _ = _0x17a0be[L(1142, "v[ND", 1246) + "ap"]((Ao) => (Ao == null ? void 0 : Ao[T(329, 258, 346, "foEw") + T(85, 386, 236, "I@&l")]) ?? []), V = {};
        V[L(1065, "v[ND", 899) + L(683, "*gug", 841)] = _;
        const JA = H[w(919, "jyW1", 1034, 1188, 987) + "y"](V);
        if (JA) throw _0x4ff2e9[v(4, "Dn(g", -38, -92) + F(484, 459, 579, "JvWe")](JA);
        const Ee = {};
        return Ee[F(496, 322, 118, "*gug") + F(185, 242, 131, "Ck3[")] = _, H[T(285, 354, 237, "m*F9") + "e"](Ee);
      }
    });
    function a(b, w, F, v, L) {
      return cA(L - -148, b);
    }
    function I(b, w, F, v, L) {
      return cA(b - 237, v);
    }
    const C = dC(), s = await lC(), E = await this[a("*gug", 1341, 1392, 1079, 1241) + p(321, 292, 454, 287, "@*Cp") + a("JaOL", 1096, 1210, 1086, 1142) + m("t$rF", 190, 198, 48) + "ls"](C, s), { cameraProperties: c, croppedImageWithPosition: x } = t[g(38, 209, 13, "oMcT") + p(254, 409, 381, 314, "m*F9")], d = await this[I(1392, 1465, 1488, "3702") + a("*Ck6", 929, 1244, 1227, 1084) + g(333, 168, 325, "F0gY") + m("6wXv", 240, 260, 163) + a("!fsv", 1218, 950, 931, 1136) + g(195, 293, 219, "k3Eg") + I(1444, 1586, 1450, "JvWe") + "on"](x), l = { ...c };
    l[g(434, 268, 298, "VL&D") + m("9O7%", 213, 58, 198) + I(1716, 1710, 1619, "jyW1") + g(364, 522, 704, "Xodq") + I(1414, 1292, 1545, "PnEC")] = d, l[g(281, 332, 307, "tndF") + g(58, 151, -16, "6wXv") + a("wcI(", 1045, 1222, 1218, 1088)] = E, l[p(272, 111, 127, -65, "F0gY") + p(469, 355, 172, 180, "jyW1") + a("Xodq", 967, 1221, 1183, 1135) + I(1609, 1703, 1725, "$eTZ") + p(-74, 110, -21, -34, "MM%8") + I(1558, 1630, 1507, "!v96") + m("*YHl", -90, -305, -153)] = o, l[a("JaOL", 839, 972, 823, 1e3) + g(173, 342, 357, "*gug") + I(1447, 1485, 1350, "foEw")] = r;
    const B = l, f = {};
    function p(b, w, F, v, L) {
      return cA(w - -1042, L);
    }
    f[I(1605, 1445, 1692, "m*F9") + g(477, 490, 493, "$eTZ") + "en"] = A;
    function m(b, w, F, v, L) {
      return eA(b - 30, b, F - 89, v - 78, v - 268);
    }
    f[p(395, 403, 230, 267, "!v96")] = B;
    const D = f;
    return this[p(295, 329, 159, 510, "F0gY") + g(533, 452, 474, "jyW1") + m("Gy(M", 288, 112, 113) + g(338, 322, 446, "ZbrI") + a("SNuL", 828, 942, 852, 1022) + "e"](D);
  }
  async [ZA(1481, 1320, 1274, "p]qM") + cA(1369, "v[ND") + YA(1031, 1300, 1133, 1078, "USye") + cA(1126, "pYDw")](t, e, A) {
    const { MultiRangeLivenessContent: o } = LA.v4, r = this[D(887, "7$X$", 641, 821, 817) + a(50, "$eTZ", 89) + D(1146, "ZbrI", 1159, 1128, 1193) + a(506, "koU#", 438) + f(359, 560, 647, "m*F9")](t[a(168, "Ck3[", 254) + D(972, "FBj6", 1002, 629, 802) + "e"], t[B(624, "tndF") + a(51, "oMcT", 104)], Yg[B(686, "!v96")](this[f(482, 382, 527, "JvWe") + f(407, 332, 364, "FBj6") + c(1775, 1759, 1971, 1673, "foEw") + a(370, "3702", 183)])), g = e[f(217, 374, 452, "Gy(M")](({ data: b }, w) => this[c(1575, 1701, 1421, 1713, "*0mK") + a(418, "T*f%", 362) + B(777, "PnEC") + D(946, "USye", 904, 818, 936) + f(704, 634, 701, "jyW1")](b[B(605, "ZbrI") + c(1506, 1437, 1376, 1566, "*YHl") + "e"], b[D(869, "VL&D", 1179, 1035, 1015) + f(885, 722, 588, "JaOL")], Yg[D(726, "pYDw", 986, 887, 934)](this[c(1804, 1695, 1873, 1673, "@*Cp") + a(-6, "t$rF", 143) + D(745, "JaOL", 819, 875, 874) + a(402, "Xodq", 276) + "se"][w])));
    function a(b, w, F, v, L) {
      return ZA(b - 239, F - -1033, F - 74, w);
    }
    const I = await Promise[a(147, "oMcT", 96)]([r, ...g]), C = this[a(499, "2Fp(", 417) + f(329, 424, 255, "GZTx") + c(1651, 1581, 1712, 1836, "VL&D") + a(47, "@*Cp", 148) + c(1634, 1773, 1511, 1552, "ZbrI") + a(522, "MM%8", 416) + D(835, "$eTZ", 691, 933, 888) + D(1137, "v!2$", 1010, 914, 1084)](t[c(1588, 1439, 1741, 1519, "1f%@") + D(821, "wcI(", 1102, 963, 978)][c(1635, 1641, 1641, 1602, "v!2$") + a(239, "PnEC", 420) + B(515, "PnEC")]), s = e[D(1125, "9O7%", 1091, 880, 980)](({ data: b }) => this[D(790, "7$X$", 679, 1002, 817) + f(330, 356, 222, "JvWe") + a(206, "USye", 249) + D(1004, "Xodq", 1001, 1197, 1131) + D(903, "Xodq", 1006, 983, 931) + a(211, "pYDw", 419) + D(1085, "m*F9", 880, 951, 950) + f(486, 468, 284, "foEw")](b[f(704, 517, 413, "JaOL") + B(623, "jyW1")][D(1014, "Gy(M", 1329, 996, 1153) + B(679, "ZbrI") + B(442, "p]qM")])), E = this[B(496, "p]qM") + c(1604, 1617, 1718, 1665, "tndF") + c(1591, 1774, 1479, 1509, "JvWe") + c(1708, 1676, 1814, 1530, "PnEC") + c(1487, 1618, 1574, 1291, "Xodq") + a(477, "wcI(", 313) + "a"]([C, ...s]);
    function c(b, w, F, v, L) {
      return eA(b - 200, L, F - 8, v - 445, b - 1884);
    }
    const x = {};
    x[B(490, "T*f%") + f(238, 360, 152, "CX[m") + "s"] = I, x[a(-120, "9O7%", 40) + a(450, "F0gY", 330)] = A, x[f(398, 334, 412, "*YHl") + c(1654, 1848, 1528, 1510, "Ck3[") + f(244, 449, 403, "*YHl") + D(925, "t$rF", 908, 1024, 941) + B(742, "v[ND") + "a"] = E;
    const d = x, l = o[B(697, "wcI(") + "y"](d);
    if (l)
      throw B(598, "sYA2") !== D(1037, "3702", 775, 778, 910) ? G[a(33, "JaOL", 125) + a(323, "*gug", 168)](l) : _0x2a51c3[c(1492, 1284, 1367, 1670, "1f%@") + c(1863, 1909, 1809, 1749, "koU#")](_0x349364);
    function B(b, w, F, v, L) {
      return cA(b - -691, w);
    }
    function f(b, w, F, v, L) {
      return eA(b - 485, v, F - 237, v - 249, w - 751);
    }
    const p = o[c(1484, 1571, 1493, 1430, "ZbrI") + "e"](d), m = {};
    m[B(759, "@*Cp") + c(1824, 1869, 1974, 1647, "Gy(M") + a(238, "k3Eg", 292) + a(-30, "k3Eg", 49) + D(1050, "1f%@", 1026, 1028, 1160)] = p;
    function D(b, w, F, v, L) {
      return cA(L - -294, w);
    }
    return this[f(446, 606, 765, "SNuL") + B(783, "I@&l") + B(531, "t$rF") + "ge"](m);
  }
  async [eA(-339, "JZst", -442, -225, -308) + YA(1160, 1063, 1073, 1265, "m*F9") + eA(-311, "*YHl", -313, -532, -329) + ZA(1193, 1229, 1165, "v!2$") + ZA(1245, 1381, 1362, "T*f%")](t, e, A) {
    const { MultiRangeLivenessStepResult: o } = LA.v4, r = await ls(t), g = await this[I(-208, -19, -203, -361, "ro$!") + x(81, 26, -33, "LMU6") + x(-208, -360, -61, "JaOL") + x(-86, -254, -233, "VL&D") + s(520, 279, 401, 572, "sYA2")](r), a = {};
    a[E(309, 503, 335, "@*Cp", 464)] = g;
    function I(B, f, p, m, D) {
      return wt(p - -96, f - 292, p - 269, m - 277, D);
    }
    a[s(299, 60, 247, 394, "ro$!") + E(399, 540, 479, "JaOL", 568) + l(-35, 61, 259, -126, "Gy(M")] = e;
    const C = {};
    function s(B, f, p, m, D) {
      return eA(B - 25, D, p - 349, m - 500, p - 417);
    }
    C[s(544, 309, 393, 330, "wcI(")] = a, C[s(432, 207, 270, 323, "p]qM") + x(-22, -60, 4, "CX[m") + s(14, 139, 59, 86, "Xodq")] = A;
    function E(B, f, p, m, D) {
      return eA(B - 487, m, p - 92, m - 50, D - 846);
    }
    const c = C;
    function x(B, f, p, m, D) {
      return ZA(B - 73, B - -1307, p - 496, m);
    }
    const d = o[E(522, 603, 787, "JvWe", 582) + "y"](c);
    function l(B, f, p, m, D) {
      return YA(B - 118, f - 268, f - -1099, m - 42, D);
    }
    if (d)
      throw l(87, 8, -182, -39, "PnEC") !== s(314, 534, 340, 208, "MM%8") ? G[s(341, 293, 207, 204, "Xodq") + s(-66, -40, 79, 222, "3702")](d) : new _0x5e5211(x(90, 92, 65, "*Ck6") + x(0, 18, 20, "GZTx") + E(784, 811, 722, "2Fp(", 763) + s(306, 303, 336, 363, "t$rF") + s(438, 483, 276, 362, "@*Cp") + E(888, 676, 798, "k3Eg", 738) + x(149, 6, 24, "ZbrI") + s(342, 56, 157, 153, "Gy(M") + l(-170, -216, -313, -47, "JZst"));
    return o[l(-95, -27, 85, 176, "MM%8") + "e"](c);
  }
  [wt(-62, 51, -254, -248, "k3Eg") + cA(1365, "sYA2") + wt(-87, -160, 103, -261, "ro$!") + YA(1314, 1091, 1159, 1080, "foEw") + YA(1035, 1316, 1119, 977, "T*f%") + ZA(1400, 1260, 1343, "*0mK") + wt(20, 146, -70, -40, "GZTx") + eA(9, "JvWe", -264, -264, -121)](t) {
    function e(c, x, d, l, B) {
      return eA(c - 150, c, d - 363, l - 285, x - 1304);
    }
    const { MultiRangeLivenessMetadata: A } = LA.v4;
    if (!t)
      if (C(21, "foEw", -278, -9, -138) !== g(979, 709, 675, "USye", 785)) {
        const c = {};
        c[s(558, "JvWe", 582, 420) + "r"] = _0x3eb002[e("ro$!", 1091, 1038, 1136) + C(-249, "@*Cp", -74, -73, -211) + e("jyW1", 1146, 970, 1188)][C(-19, "GZTx", 150, 95, -57) + C(44, "Dn(g", -246, 140, -38)], c[s(520, "MM%8", 489, 328) + C(-189, "pYDw", -111, -3, -105) + a("foEw", 1815, 1850, 1697) + e("1f%@", 1292, 1165, 1359) + C(157, "9O7%", 235, -30, 36) + C(273, "2Fp(", -28, 164, 110) + "o"] = _0x34d9af[e("*Ck6", 1209, 1195, 1160) + e("foEw", 1107, 961, 1017) + C(-237, "k3Eg", -197, -373, -260)][a("7$X$", 1667, 1549, 1517) + a("t$rF", 1441, 1571, 1454)];
        const x = {};
        return x[e("Xc%v", 1164, 1038, 1e3) + g(1258, 1143, 1008, "$eTZ", 1165)] = c, x[a("v!2$", 1477, 1197, 1377) + C(147, "@*Cp", -111, 155, 79) + a("F0gY", 1564, 1660, 1623)] = _0x270108[g(936, 920, 1159, "7$X$", 989) + g(642, 769, 701, "GZTx", 848)], x;
      } else return;
    const o = t[a("oMcT", 1495, 1626, 1487)]((c) => {
      function x(p, m, D, b, w) {
        return a(p, m - 173, D - 431, w - -1611);
      }
      function d(p, m, D, b, w) {
        return g(p - 419, m - 278, D - 461, D, p - -1044);
      }
      function l(p, m, D, b, w) {
        return C(p - 78, D, D - 105, b - 262, w - -210);
      }
      function B(p, m, D, b, w) {
        return a(D, m - 434, D - 399, w - -981);
      }
      function f(p, m, D, b, w) {
        return e(b, m - -248, D - 82, b - 498);
      }
      if (d(-74, 1, "foEw") !== d(-45, -27, "JaOL")) throw _0x52e0e5[d(83, -55, "!v96") + x("ZbrI", -77, 171, 259, 71)](_0x3b93fa);
      {
        const p = {};
        p[l(-380, -345, "koU#", -664, -463) + "r"] = c[B(387, 313, "6wXv", 429, 453) + d(-150, -94, "koU#") + f(635, 788, 811, "Dn(g")][d(-254, -380, "v[ND") + f(807, 1003, 824, "USye")], p[f(878, 899, 855, "MM%8") + l(-544, -308, "2Fp(", -414, -412) + d(-271, -376, "T*f%") + f(944, 840, 694, "2Fp(") + B(581, 888, "k3Eg", 567, 732) + B(844, 552, "oMcT", 768, 739) + "o"] = c[B(362, 275, "JvWe", 441, 389) + B(373, 632, "JZst", 704, 556) + x("*gug", -150, -10, 196, 6)][l(-431, -509, "v[ND", -181, -383) + x("FBj6", -9, 1, 66, 143)];
        const m = {};
        return m[f(488, 683, 830, "tndF") + x("T*f%", -105, -231, 61, -85)] = p, m[x("SNuL", -46, -185, -249, -107) + x("!v96", 51, 46, 43, 69) + x("*YHl", -106, -298, 3, -203)] = c[B(530, 690, "*Ck6", 472, 605) + B(583, 343, "!v96", 290, 419)], m;
      }
    }), r = {};
    function g(c, x, d, l, B) {
      return YA(c - 360, x - 391, B - -113, l - 27, l);
    }
    r[s(623, "Gy(M", 516, 775) + g(1246, 960, 971, "7$X$", 1141)] = o;
    function a(c, x, d, l, B) {
      return eA(c - 2, c, d - 331, l - 219, l - 1779);
    }
    const I = A[g(1055, 1128, 1006, "*YHl", 1007) + "y"](r);
    if (I)
      throw a("FBj6", 1515, 1550, 1381) === a("sYA2", 1528, 1636, 1540) ? _0x4adfbd[e("9O7%", 1132, 943, 1069) + e("koU#", 1283, 1163, 1315)](_0x57208e) : G[s(379, "$eTZ", 176, 440) + C(162, "Gy(M", 263, 151, 77)](I);
    function C(c, x, d, l, B) {
      return ZA(c - 240, B - -1338, d - 167, x);
    }
    function s(c, x, d, l, B) {
      return YA(c - 478, x - 141, c - -620, l - 384, x);
    }
    const E = {};
    return E[a("@*Cp", 1564, 1260, 1393) + g(1202, 1207, 967, "!fsv", 1092)] = o, A[C(-255, "6wXv", -250, -264, -58) + "e"](E);
  }
  [eA(-139, "MM%8", -219, -90, -75) + ZA(1476, 1317, 1459, "JaOL") + eA(-9, "ZbrI", -203, -113, -90) + ZA(1158, 1207, 1306, "Xodq") + wt(42, -125, 145, -110, "CX[m") + eA(-165, "GZTx", 48, -118, -78) + "a"](t) {
    const { MultiRangeLivenessMetadata: e } = LA.v4;
    function A(c, x, d, l, B) {
      return YA(c - 428, x - 449, c - -54, l - 314, x);
    }
    if (!t || t[a(1350, 1234, 1399, 1202, "tndF") + "h"] === 1 * 8821 + -11 * -236 + -11417)
      return s(683, 725, "USye", 547) === a(1060, 1234, 1043, 1040, "CX[m"), void 0;
    const o = t[g(759, "oMcT", 588) + "ap"]((c) => (c == null ? void 0 : c[g(685, "*YHl", 659) + g(527, "ro$!", 707)]) ?? []), r = {};
    function g(c, x, d, l, B) {
      return ZA(c - 385, d - -597, d - 143, x);
    }
    r[I(609, 533, 444, "SNuL") + I(527, 639, 431, "FBj6")] = o;
    function a(c, x, d, l, B) {
      return cA(d - -40, B);
    }
    function I(c, x, d, l, B) {
      return eA(c - 167, l, d - 234, l - 261, c - 828);
    }
    const C = e[a(1392, 1269, 1376, 1333, "SNuL") + "y"](r);
    if (C)
      throw s(788, 716, "wcI(", 822) === I(606, 512, 753, "Dn(g") ? new _0x325358(a(1222, 1016, 1133, 1320, "CX[m") + s(608, 537, "GZTx", 601) + s(676, 554, "Ck3[", 394) + s(463, 536, "$eTZ", 347) + g(602, "9O7%", 747) + g(799, "*Ck6", 630) + g(1035, "CX[m", 860) + s(460, 582, "I@&l", 447) + g(725, "Dn(g", 573)) : G[I(656, 817, 650, "9O7%") + A(927, "I@&l", 1134, 1084)](C);
    function s(c, x, d, l, B) {
      return eA(c - 34, d, d - 270, l - 491, x - 780);
    }
    const E = {};
    return E[I(528, 345, 346, "LMU6") + s(211, 392, "oMcT", 337)] = o, e[s(617, 679, "v!2$", 856) + "e"](E);
  }
}
function UE() {
  const { cameraService: i } = zt(), { assetsDirectoryPath: n, challengeSequence: t, onComplete: e, sessionToken: A } = kQ(), { transactionCounting: o } = j0(), { analytics: r } = vc(), { phaseThresholds: g } = ts(), { handleAppStateChangeWithTransitionCheck: a, handleError: I } = Ae(), [C, s] = fA();
  QQ(jI.ON_COMPLETE, e), AA(() => {
    let c;
    async function x() {
      if (!i) return;
      const d = Qs.getWorkerPath(ZQ, n), l = {};
      l.type = "module";
      const B = new Worker(new URL(d, import.meta.url), l), f = $I(B);
      c = await new f();
      const p = new FE(), m = new $Q(xQ), D = new JE(t), b = new VQ().setAssetsDirectoryPath(n).setCameraService(i).setDetector(c).setDetectionFactory(p).setPhaseThresholds(g).setDispatcher(m).setProtobuf(D).setChallengeSequence(t).setAnalytics(r).setSessionToken(A).setTransactionCounting(o).build();
      try {
        s(b), a(j.RUNNING);
      } catch (w) {
        if (w instanceof Error) {
          I(G.fromError(w));
          return;
        }
      }
    }
    return x(), () => {
      a(j.WAITING), c && c[_I]();
    };
  }, [I, i, t, n, r, A, a, g, o]);
  const E = {};
  return E.controller = C, E;
}
function YE({ children: i }) {
  const { controller: n } = UE();
  return /* @__PURE__ */ k(BQ, { controller: n, children: i });
}
function PE({ initAppState: i, onError: n }) {
  const [t, e] = fA(i), [A, o] = fA(), [r, g] = fA(!1), a = Yt.Lower, I = $A(n);
  AA(() => {
    I.current = n;
  }, [n]);
  const C = {};
  return C.redfin = a, C.appState = t, C.setAppState = e, C.error = A, C.setError = o, C.isCameraReady = r, C.setIsCameraReady = g, C.onErrorRef = I, C;
}
const ca = ho.getInstance(), qg = (i, n) => {
  ca.dispatchCustomEventOnChange(i, n);
}, TE = (i, n) => {
  ca.dispatchCustomEventOnChange(i, n);
}, HE = (i, n) => {
  const t = {};
  t.size = n;
  const e = t;
  ca.dispatchCustomEventOnChange(i, e);
};
function KE({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = PE({
    initAppState: j.LOADING,
    onError: i
  }), I = me(
    (E) => {
      qg(Ue.STATE_CHANGED, { appState: j.ERROR, error: E }), a(!1), o.current(E), g(E), r(j.ERROR);
    },
    [a, o, g, r]
  ), C = me(
    (E) => {
      r((c) => {
        const x = typeof E == "function" ? E(c) : E;
        return qg(Ue.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), s = me(
    (E) => {
      C((c) => c === j.COMPLETE || c === j.LOADING && E !== j.RUNNING ? c : E);
    },
    [C]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: a,
    handleAppStateChange: C,
    handleAppStateChangeWithTransitionCheck: s,
    handleError: I,
    error: e
  };
}
function jE() {
  return ea() ? Pa.MOBILE : Pa.DESKTOP;
}
function qE({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = fA(jE()), A = mA(() => {
    const o = {};
    for (const g of Object.keys(n)) {
      const a = n[g];
      if (a) {
        const { mapper: I, presets: C, userThresholds: s } = a;
        o[g] = I(C[t], s);
      }
    }
    return {
      getPhaseThresholds: (g) => o[g],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ k(sa.Provider, { value: A, children: i });
}
function _E(i, n) {
  return {
    faceConfidence: (n == null ? void 0 : n.faceConfidence) ?? i.faceConfidence,
    sharpnessThreshold: (n == null ? void 0 : n.sharpnessThreshold) ?? i.sharpnessThreshold,
    brightnessLowThreshold: (n == null ? void 0 : n.brightnessLowThreshold) ?? i.brightnessLowThreshold,
    brightnessHighThreshold: (n == null ? void 0 : n.brightnessHighThreshold) ?? i.brightnessHighThreshold,
    outOfBoundsThreshold: (n == null ? void 0 : n.outOfBoundsThreshold) ?? i.outOfBoundsThreshold,
    devicePitchAngleThreshold: (n == null ? void 0 : n.devicePitchAngleThreshold) ?? i.devicePitchAngleThreshold,
    leftEye: (n == null ? void 0 : n.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (n == null ? void 0 : n.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function VE(i, n) {
  return {
    faceConfidence: (n == null ? void 0 : n.faceConfidence) ?? i.faceConfidence,
    leftEye: (n == null ? void 0 : n.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (n == null ? void 0 : n.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function ZE({
  children: i,
  livenessChallengeUserThresholds: n,
  passiveLivenessUserThresholds: t
}) {
  const e = mA(() => ({
    [q.PASSIVE_LIVENESS]: {
      mapper: _E,
      presets: jQ,
      userThresholds: t
    },
    [q.LIVENESS_CHALLENGE]: {
      mapper: VE,
      presets: qQ,
      userThresholds: n
    }
  }), [n, t]);
  return /* @__PURE__ */ k(qE, { thresholdConfigs: e, children: i });
}
var lo = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(lo || {});
const zE = async () => WebAssembly.validate(new Uint8Array([-5683 * -1 + 3e3 + -8683, 8559 + -4664 * 1 + -3798, -55 * -73 + 215 * 3 + -4545, 109, 3 * -1538 + -1 * -753 + 3862, 0, -214 * -31 + -183 + 1 * -6451, 1 * 164 + -7508 + 7344, -9745 + 886 * 11, -1 * -1514 + 734 + -2243, -7194 + -7195 * -1, -9358 + 3 * -1049 + 1 * 12601, -1373 * 1 + -4764 + 6137 * 1, 1, -2839 * 1 + -3099 + 19 * 319, 1953 + 12 * -787 + 7494, 2, 1 * 139 + 5333 + -5471, -15015 + -273 * -55, 33 * -19 + -18 * -227 + -1 * 3449, 10, 18 * 282 + -4448 + -627, 17362 + -8677 * 2, -3719 * 1 + -482 * -2 + -551 * -5, 449 * -4 + -3937 + -26 * -223, -8463 + -1 * 9665 + 4532 * 4, 253, -1 * -7279 + -3004 + -4260, -8249 + -335 * -11 + 4817, 19 * 181 + 13 * -753 + 6448, -38 * -13 + 3 * 2656 + -8451]));
function XE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(1 * 807 + 135 + -926);
}
function $E() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = XE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function Ax(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function ex(i) {
  return i > -28397 + 1 * 88397 ? ">1m" : "" + i;
}
function tx(i) {
  return i > 10 ? ">10" : "" + i;
}
const ir = (i) => Math.round(i / 500) * 500 / (-362 * -23 + 1801 * 1 + 9127 * -1), ox = (i) => i ? i <= 3501 + -442 * -19 + -11898 ? Math.round(i * (-9425 + 3571 * 2 + 2303)) / (-10149 + -10169 * -1) : Math.round(i / (1186 * -8 + 25 * 33 + -8713 * -1)) * (-2143 * 3 + 3199 * 2 + 81) : -8257 + -31 * 56 + 9993;
function nx(i) {
  return i ? Math.round(i / (-11 * 430 + -6334 + 13564)) * (660 * 7 + -3837 + 17 * 101) : 0;
}
const ix = (i) => i ? Math.round(i / (-7773 + 43 * 181)) * (-1 * -3767 + -4827 + -5 * -214) : 7 * -1307 + 3519 + 5630, rx = (i) => Math.round(i * (-50 * -160 + -56 * 2 + -7886)) / (-6287 * -1 + 9497 * -1 + 73 * 44);
async function ax() {
  return await zE() ? Ya.SIMD : Ya.NO_SIMD;
}
class gx {
  constructor() {
    y(this, "countlyAppKey", "");
    y(this, "deviceId", "");
  }
  async countlyFetch(n) {
    if (!this.countlyAppKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.countlyAppKey, r.device_id = this.deviceId;
    const g = Vo(r);
    try {
      await fetch("" + o + g + "&" + n, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(n, t) {
    if (!t) return;
    this.countlyAppKey = t, this.deviceId = n;
    const A = { _app_version: $r() }, o = { organization: Aa(window.location.href) }, r = Vo({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
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
    await this.sendEvent(lo.AUTO_CAPTURE, n, t);
  }
}
const io = new gx(), Rt = {};
Rt.AUTO_CAPTURE = "auto-capture", Rt.CAPTURE_FINISHED = "capture-finished", Rt.CAPTURE_STARTED = "capture-started", Rt.ESCALATION_TRIGGER = "escalation-trigger", Rt.LONG_CAPTURE_SMILE = "long-capture-smile";
const Ws = Rt, qe = {};
qe.PALM = "palm", qe.SMILE = "smile", qe.DOCUMENT = "document", qe.MAGNIFEYE = "magnifeye", qe.EYE_GAZE = "eye-gaze", qe.FACE = "face", qe.MULTI_RANGE = "multi-range";
const Ix = qe;
class sx {
  constructor() {
    y(this, "apiKey");
    y(this, "sessionId");
    y(this, "distinctId");
    y(this, "componentName");
    y(this, "platform");
    y(this, "versionName");
    y(this, "applicationId");
    this.platform = "web", this.versionName = $r(), this.applicationId = Aa(window.location.href);
  }
  async init({ apiKey: n, componentName: t, customer: e, sessionId: A }) {
  }
  async sendEvent(n, t, e) {
    if (!this.apiKey) return;
    const A = "https://metrics.innovatrics.com/v1/i/v0/e/", o = this.buildEventProperties(t, e), r = this.createCommonBody(n, o);
    try {
      const g = {};
      g["Content-Type"] = "application/json", await fetch(A, { method: "POST", headers: g, body: JSON.stringify(r) });
    } catch (g) {
      console.error("Error sending auto capture event:", g);
    }
  }
  buildEventProperties(n, t) {
    const e = this.convertCamelToSnakeCase(n), A = this.createCommonProperties(), o = { ...e, ...A };
    return o.duration = t, o;
  }
  createCommonProperties() {
    const n = {};
    return n.platform = this.platform, n.version_name = this.versionName, n.application_id = this.applicationId, n.component_name = this.componentName, n.session_id = this.sessionId, n;
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
const en = new sx();
class cx {
  constructor(n) {
    y(this, "countly", io);
    y(this, "posthog", en);
    y(this, "componentName");
    this.componentName = n;
  }
  createSegmentation(n) {
    return { appVersion: $r(), ...n };
  }
  init(n, t, e) {
    const A = $E(), o = {};
    o.apiKey = t, o.componentName = this.componentName, o.customer = e, o.sessionId = A, en.init(o), io.init(A, n);
  }
  endSession() {
    io.endSession();
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    en.sendEvent(lo.AUTO_CAPTURE, A), io.sendAutoCaptureEvent(A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    en.sendEvent(lo.ESCALATION_TRIGGER, e), io.sendEvent(lo.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeAnalyticsReportingEnabled : !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 1027 * 9 + -3873 + -5120 ? ix(n) : ox(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: tx(o || -11 * 803 + -5639 * -1 + 3194), firstHiccup: ex(nx(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class Cx extends cx {
  constructor() {
    super(Ix.MULTI_RANGE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(q.PASSIVE_LIVENESS), e = Rs(n);
    if (!t || !e) throw new G("On capture data was not found");
    const A = Ax(t.metadata.deviceName, t.metadata.facingMode), o = this.extractChallengeMetrics(e), r = ir(t.metadata.captureProcessTime), g = r + ir(o.totalCaptureTime), a = [t.metadata.averageFps, ...o.averageFps], I = rx(a.reduce((c, x) => c + x, 11 * 4 + 53 * 64 + -859 * 4) / a.length), C = "" + t.detectedObject.confidence, s = "" + t.detectedObject.faceSize, E = this.createSegmentation({ averageFps: I, camera: A, instructionSet: await ax(), captureTimeChallenge: o.captureTime, captureTimePassive: "" + r, imageResolution: t.resultImage.width + "x" + t.resultImage.height, confidenceChallenge: o.confidence, confidencePassive: C, faceSizeChallenge: o.faceSize, faceSizePassive: s });
    if (Bo()) {
      const c = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(E, c);
    }
    this.countly.sendAutoCaptureEvent(E, g), this.posthog.sendEvent(Ws.CAPTURE_FINISHED, E, g);
  }
  extractChallengeMetrics(n) {
    return { captureTime: n.map((t) => ir(t.data.metadata.captureProcessTime)).join(","), confidence: n.map((t) => t.data.detectedObject.confidence).join(","), faceSize: n.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: n.map((t) => t.data.metadata.averageFps), totalCaptureTime: n.reduce((t, e) => t + e.data.metadata.captureProcessTime, 0) };
  }
  joinKeypressDetections(n, t) {
    const e = n.metadata.performanceCheckup, A = t.map((E) => E.data.metadata.performanceCheckup), o = [e, ...A], r = o.some((E) => (E == null ? void 0 : E["performance"]) === !0), g = o.reduce((E, c) => ((c == null ? void 0 : c["firstHiccup"]) !== void 0 && E.push(c.firstHiccup), E), []), a = g.length > 999 * -5 + 8291 + -3296 ? Math.min(...g) : void 0, I = o.reduce((E, c) => ((c == null ? void 0 : c["hiccupAmount"]) !== void 0 && E.push(c.hiccupAmount), E), []), C = I.length > -1 * 193 + -7664 + 7857 ? I.reduce((E, c) => E + c, -10 * 210 + 1943 * -1 + 311 * 13) : void 0, s = {};
    return s.performance = r, s.firstHiccup = a, s.hiccupAmount = C, s;
  }
}
const Bx = new Cx(), Ca = (i, n) => {
  const t = $A(n);
  AA(() => {
    t.current = n;
  }, [n]), AA(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
function Qx({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = Ae(), e = me((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: g } } } = o.detail;
    if (!(i && !g) && r.includes(MA.FACE_NOT_PRESENT)) {
      if (n !== j.RUNNING) return;
      setTimeout(() => {
        t(j.LOADING);
      }, 2234 + -2 * 4840 + 7446), setTimeout(() => {
        t(j.RUNNING);
      }, 2822 + 2 * -1410 + -2 * 1);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Ex(i, n) {
  const { handleFaceDetection: t } = Qx(n);
  Ca(i, t);
}
function Fs(i, n) {
  function t(e) {
    n(e);
  }
  Ca(i, t);
}
function xx(i) {
  const { appState: n, handleAppStateChange: t } = Ae();
  function e() {
    n !== j.LOADING && t(j.RUNNING);
  }
  function A(o) {
    var r;
    ((r = o.detail) == null ? void 0 : r["instruction"]) === Ir.CONTINUE_DETECTION && e();
  }
  Fs(i, A);
}
const dx = () => typeof document < "u" && document.hasFocus();
function lx(i = {}) {
  const n = $A(i), t = $A(dx()), [e, A] = fA(t.current);
  AA(() => {
    n.current = i;
  }), AA(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function g() {
      Promise.resolve().then(() => {
        var C, s, E, c;
        !t.current && ((s = (C = n.current).onFocus) == null || s.call(C), (c = (E = n.current).onChange) == null || c.call(E, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var C, s, E, c;
        t.current && ((s = (C = n.current).onBlur) == null || s.call(C), (c = (E = n.current).onChange) == null || c.call(E, !1)), r(!1);
      });
    }
    function I() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", g), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", g), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function ux(i = {}) {
  const { appState: n } = Ae();
  lx({ onBlur: () => {
    var t;
    n === j.WAITING || n === j.COMPLETE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === j.WAITING || n === j.COMPLETE || (t = i.onFocus) == null || t.call(i);
  } });
}
function fx(i) {
  const { controller: n } = HI(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = Ae();
  ux({ onBlur: () => {
    e(j.LOADING), A(!1);
  }, onFocus: () => {
    e(j.RUNNING), A(!0);
  } }), xx(i.CONTROL), AA(() => {
    t === j.COMPLETE && (n == null || n.reset()), t === j.LOADING && (n == null || n.reset()), t === j.WAITING && (n == null || n.reset()), t === j.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function hx(i) {
  const [n, t] = fA(), e = me((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  Ca(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function vs() {
  return hx(Ue.PHASE_CHANGED);
}
function px() {
  fx(Ue);
  const { currentPhaseName: i } = vs(), n = {};
  n.skipOutsideOfCandidateSelection = i === q.PASSIVE_LIVENESS, Ex(Ue.DETECTION_CHANGED, n);
}
const yx = Po.div`
  position: relative;
`, mx = Po.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`, Dx = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  AA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, TE(i, A);
  }, [t, e, i]);
}, wx = (i) => i === l0.CONTROL ? !ea() : !0;
function bx(i) {
  const { cameraService: n } = zt(), { handleAppStateChange: t, handleError: e, isCameraReady: A } = Ae(), [o, r] = fA(), g = mA(() => {
    const E = A && n && n.isStreaming && n.getCameraSettings().facingMode;
    return E ? o ?? E === "user" : o ?? wx(i);
  }, [n, o, i, A]);
  function a() {
    r(o === void 0 ? !g : !o);
  }
  async function I() {
    if (n) {
      t(j.LOADING);
      try {
        await n.switchCamera(), t(j.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          e(G.fromCameraError(E));
          return;
        }
      }
      r(void 0);
    }
  }
  function C(E) {
    var c;
    switch ((c = E.detail) == null ? void 0 : c["instruction"]) {
      case Ir.TOGGLE_MIRROR:
        a();
        break;
      case Ir.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  Fs(i, C);
  const s = {};
  return s.shouldCameraMirror = g, s;
}
function kx(i) {
  const { cameraResolution: n } = zt(), { shouldCameraMirror: t } = bx(i.CONTROL), e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, Dx(i.CAMERA_PROPS_CHANGED, e), AA(() => () => {
    ho.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const Sx = Po.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Gx = Po.div`
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
function Nx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Rx = zr(
  ({ detectionDetails: i, isImageMirror: n }, t) => Nx() ? (console.log(i), /* @__PURE__ */ k(Be, { children: [
    /* @__PURE__ */ k(Sx, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ k(Gx, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function Wx({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = zt(), { redfin: r } = Qi(), g = $A(null);
  if (AA(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, Mc(g.current);
    const d = ii(o), l = Tc(o);
    if (nr(g.current, d, "lime"), nr(g.current, l, "blue"), oE(g.current, i.processedImage.detection), xo(g.current, i.processedImage.detection.leftEye.center, "cyan"), xo(g.current, i.processedImage.detection.rightEye.center, "cyan"), xo(g.current, i.processedImage.detection.mouth.center, "cyan"), nE(g.current, i.processedImage.detection, o), e.outOfBoundsThreshold && typeof e.outOfBoundsThreshold == "number") {
      const B = Es(
        o,
        e.outOfBoundsThreshold,
        d
      );
      nr(g.current, B, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: I,
    processedImage: { detection: C, instructionCode: s, invalidValidators: E, isEscalated: c }
  } = i, x = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "L eye conf / status": `${C.leftEye.confidence} / ${C.leftEye.status}`,
    "R eye conf / status": `${C.rightEye.confidence} / ${C.rightEye.status}`,
    "Mouth conf / status": `${C.mouth.confidence} / ${C.mouth.status}`,
    "Detection time": I,
    "Avg FPS": a,
    Instruction: s,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": E,
    "Component version": "7.6.1",
    "SAM version": n,
    "Escalated instruction": c,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ k(
    Rx,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function Fx() {
  return HI();
}
function vx() {
  const [i, n] = fA(void 0), t = me((A) => {
    n(A.detail);
  }, []);
  KI(Ue.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Mx = zr(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = vx(), { controller: A } = Fx(), { phaseThresholds: o, thresholdsPreset: r } = ts(), { appState: g } = Ae(), a = A == null ? void 0 : A.getCurrentDetectionName();
  if (a === void 0 || g !== j.RUNNING)
    return null;
  const I = a !== q.PASSIVE_LIVENESS ? o[q.LIVENESS_CHALLENGE] : o[a];
  return /* @__PURE__ */ k("div", { ref: t, children: /* @__PURE__ */ k(
    Wx,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: Bs,
      shouldCameraMirror: n,
      thresholds: I,
      thresholdsPreset: r
    }
  ) });
});
function Lx({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Ox(i, n) {
  const [t, e] = fA(!1), A = () => e((g) => !g), o = "" + t;
  Zt(() => {
    function g() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, s.observe(i.current, E), s;
    }
    function a() {
      var c;
      if (!((c = i.current) != null && c["parentElement"])) return;
      const s = new MutationObserver((x) => {
        x.find((l) => {
          for (const B of l.removedNodes)
            if (B !== (n == null ? void 0 : n.current) && B === i.current)
              return !0;
        }) && A(), x.forEach((l) => {
          l.addedNodes.forEach((B) => {
            var f;
            B !== (n == null ? void 0 : n.current) && ((f = B.parentElement) == null || f.removeChild(B));
          });
        });
      }), E = {};
      return E.childList = !0, s.observe(i.current.parentElement, E), s;
    }
    const I = g(), C = a();
    return () => {
      C == null || C.disconnect(), I == null || I.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const Jx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Ux({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = $A(null), { key: o } = Ox(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: Jx, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ k("defs", { children: [
      /* @__PURE__ */ k("mask", { id: "placeholder", children: [
        /* @__PURE__ */ k("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ k(
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
            /* @__PURE__ */ k("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ k("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
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
    /* @__PURE__ */ k("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function Yx({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = Hc(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    Ux,
    {
      cutOut: i || /* @__PURE__ */ k(Lx, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Px({ debugLayerRef: i }) {
  const { appState: n } = Ae(), { cameraResolution: t } = zt(), { redfin: e } = Ae(), { currentPhaseName: A } = vs(), o = t && e === Yt.Lower && A === q.PASSIVE_LIVENESS, r = n !== j.RUNNING;
  return o ? /* @__PURE__ */ k(
    Yx,
    {
      fullOverlay: r,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Tx({ children: i, shouldCameraMirror: n }) {
  const t = $A(null);
  return /* @__PURE__ */ k(Be, { children: [
    /* @__PURE__ */ k(Px, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ k(Mx, { ref: t, shouldCameraMirror: n })
  ] });
}
function Hx() {
  const { videoRef: i } = zt(), { isCameraReady: n } = Ae(), { shouldCameraMirror: t } = kx(Ue);
  return /* @__PURE__ */ k(Tx, { shouldCameraMirror: t, children: /* @__PURE__ */ k(
    mx,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: Jc,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Kx(i, n) {
  AA(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      HE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function jx({ children: i }) {
  const n = $A(null);
  return Kx(n, Ue.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(yx, { ref: n, children: i });
}
function qx() {
  return px(), /* @__PURE__ */ k(jx, { children: /* @__PURE__ */ k(Hx, {}) });
}
function _x({ configuration: i }) {
  return i ? /* @__PURE__ */ k(_B, { target: i.styleTarget, children: /* @__PURE__ */ k(CQ, { configuration: i, children: /* @__PURE__ */ k(ZE, { children: /* @__PURE__ */ k(MC, { children: /* @__PURE__ */ k(
    YC,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: PC.MULTIRANGE,
      children: /* @__PURE__ */ k(
        aC,
        {
          value: KE({
            onError: i.onError
          }),
          children: /* @__PURE__ */ k(
            rC,
            {
              analytics: Bx,
              apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt",
              countlyAppKey: "65eefa9cc8d37fd811f5015a62f6ef8451679658",
              children: /* @__PURE__ */ k(mC, { cameraFacing: _r.FRONT, children: /* @__PURE__ */ k(YE, { children: /* @__PURE__ */ k(m0, { children: /* @__PURE__ */ k(qx, {}) }) }) })
            }
          )
        }
      )
    }
  ) }) }) }) }) : null;
}
Vs(_x, "x-dot-multi-range-liveness", ["configuration"]);
