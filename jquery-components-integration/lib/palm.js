var wc = Object.defineProperty;
var da = (i) => {
  throw TypeError(i);
};
var Dc = (i, n, t) => n in i ? wc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var y = (i, n, t) => Dc(i, typeof n != "symbol" ? n + "" : n, t), ua = (i, n, t) => n.has(i) || da("Cannot " + t);
var b = (i, n, t) => (ua(i, n, "read from private field"), t ? t.call(i) : n.get(i)), O = (i, n, t) => n.has(i) ? da("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), M = (i, n, t, e) => (ua(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var ko, F, tI, oI, Ze, xa, nI, iI, rI, Kr, Ar, er, aI, Io = {}, gI = [], bc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, So = Array.isArray;
function Be(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function jr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function SA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 6031 + 281 * -11 + -2938 && (r.children = arguments.length > 11800 + -11797 * 1 ? ko.call(arguments, -79 * -44 + 2557 + 163 * -37) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return no(i, r, e, A, null);
}
function no(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++tI, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && F.vnode != null && F.vnode(r), r;
}
function kc() {
  var i = {};
  return i.current = null, i;
}
function te(i) {
  return i.children;
}
function qA(i, n) {
  this.props = i, this.context = n;
}
function Rt(i, n) {
  if (n == null) return i.__ ? Rt(i.__, i.__i + (2 * -4753 + -5445 + 56 * 267)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Rt(i) : null;
}
function II(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 5159 + 1 * -2835 + 332 * -7; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return II(i);
  }
}
function tr(i) {
  (!i.__d && (i.__d = !0) && Ze.push(i) && !un.__r++ || xa != F.debounceRendering) && ((xa = F.debounceRendering) || nI)(un);
}
function un() {
  for (var i, n, t, e, A, o, r, g = -69 * -1 + -4805 + 1 * 4737; Ze.length; ) Ze.length > g && Ze.sort(iI), i = Ze.shift(), g = Ze.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Be({}, e)).__v = e.__v + 1, F.vnode && F.vnode(t), _r(n.__P, t, e, n.__n, n.__P.namespaceURI, 1 * 831 + 92 * 83 + -241 * 35 & e.__u ? [A] : null, o, A ?? Rt(e), !!(-1 * -9452 + -1 * -1397 + -10817 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, CI(o, t, r), t.__e != A && II(t)));
  un.__r = 8080 + 16 * -505;
}
function sI(i, n, t, e, A, o, r, g, a, I, Q) {
  var s, l, C, E, d, u, B = e && e.__k || gI, h = n.length;
  for (a = Sc(t, n, B, a, h), s = -22 * 381 + -982 * -8 + 526; s < h; s++) (C = t.__k[s]) != null && (l = C.__i == -1 ? Io : B[C.__i] || Io, C.__i = s, u = _r(i, C, l, A, o, r, g, a, I, Q), E = C.__e, C.ref && l.ref != C.ref && (l.ref && qr(l.ref, null, C), Q.push(C.ref, C.__c || E, C)), d == null && E != null && (d = E), -7618 + -1 * 775 + 27 * 311 & C.__u || l.__k === C.__k ? a = cI(C, a, i) : typeof C.type == "function" && u !== void 0 ? a = u : E && (a = E.nextSibling), C.__u &= -7);
  return t.__e = d, a;
}
function Sc(i, n, t, e, A) {
  var o, r, g, a, I, Q = t.length, s = Q, l = -6859 + 4 * 2318 + -2413 * 1;
  for (i.__k = new Array(A), o = -411 + 4289 * 1 + -3878; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + l, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? no(null, r, null, null, null) : So(r) ? no(te, { children: r }, null, null, null) : r.constructor == null && r.__b > 10141 + 10141 * -1 ? no(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (-13932 + -1 * -13933), g = null, (I = r.__i = Gc(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 1252 + -411 * 2 + -428)), g == null || g.__v == null ? (I == -1 && (A > Q ? l-- : A < Q && l++), typeof r.type != "function" && (r.__u |= 1 * -1373 + -5530 + 6907)) : I != a && (I == a - (-4272 * -2 + -8823 + 280) ? l-- : I == a + (3 * -1520 + -22 * -145 + 1 * 1371) ? l++ : (I > a ? l-- : l++, r.__u |= -4084 * -1 + -6046 + 1966))) : i.__k[o] = null;
  if (s)
    for (o = 5406 + 3 * 1423 + -9675; o < Q; o++) (g = t[o]) != null && 1697 * 3 + 1 * -8368 + 3277 == (-7473 + 7777 * -1 + 15252 & g.__u) && (g.__e == e && (e = Rt(g)), QI(g, g));
  return e;
}
function cI(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 97 * 61 + -13 * 692 + 3079; e && A < e.length; A++) e[A] && (e[A].__ = i, n = cI(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Rt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 3764 * 1 + 345 * -22 + 3834 == n.nodeType);
  return n;
}
function me(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (So(i) ? i.some(function(t) {
    me(t, n);
  }) : n.push(i)), n;
}
function Gc(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && 2207 * -1 + -6494 + -1 * -8701 == (2 & a.__u)) return t;
  if (e > (a != null && -8883 + -987 * -9 == (-2899 + -1 * -2901 & a.__u) ? -3 * -3109 + -1 * 1651 + -5 * 1535 : 7812 + 221 * 6 + 2 * -4569)) for (A = t - (7 * 126 + 1005 + 82 * -23), o = t + (-2994 * -2 + -1151 + 93 * -52); A >= 1213 + -1 * -481 + 847 * -2 || o < n.length; ) {
    if (A >= -7103 * -1 + -9789 + 2686) {
      if ((a = n[A]) && -12385 + 5 * 2477 == (6 * 907 + 8807 + 1583 * -9 & a.__u) && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && 17623 + -17623 * 1 == (4044 + -1 * 307 + -3735 & a.__u) && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function ha(i, n, t) {
  n[12098 + -46 * 263] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || bc.test(n) ? t : t + "px";
}
function Oo(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || ha(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || ha(i.style, n, t[n]);
    }
  else if (n[-2 * 4359 + -10 * 99 + 2427 * 4] == "o" && n[1] == "n") o = n != (n = n.replace(rI, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(1074 + 2 * -536) : n.slice(2611 + -2609 * 1), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Kr, i.addEventListener(n, o ? er : Ar, o)) : i.removeEventListener(n, o ? er : Ar, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[1748 * 2 + -9067 * -1 + 12559 * -1] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -702 * -6 + -5178 + 967 == t ? "" : t));
  }
}
function fa(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Kr++;
      else if (n.t < t.u) return;
      return t(F.event ? F.event(n) : n);
    }
  };
}
function _r(i, n, t, e, A, o, r, g, a, I) {
  var Q, s, l, C, E, d, u, B, h, p, m, S, G, k, H, AA, MA, yA = n.type;
  if (n.constructor != null) return null;
  128 & t.__u && (a = !!(188 * -31 + -1174 * 5 + 11730 & t.__u), o = [g = n.__e = t.__e]), (Q = F.__b) && Q(n);
  A: if (typeof yA == "function") try {
    if (B = n.props, h = "prototype" in yA && yA.prototype.render, p = (Q = yA.contextType) && e[Q.__c], m = Q ? p ? p.props.value : Q.__ : e, t.__c ? u = (s = n.__c = t.__c).__ = s.__E : (h ? n.__c = s = new yA(B, m) : (n.__c = s = new qA(B, m), s.constructor = yA, s.render = Rc), p && p.sub(s), s.props = B, s.state || (s.state = {}), s.context = m, s.__n = e, l = s.__d = !(-91 * -65 + 6966 + 11 * -1171), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && yA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Be({}, s.__s)), Be(s.__s, yA.getDerivedStateFromProps(B, s.__s))), C = s.props, E = s.state, s.__v = n, l) h && yA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && yA.getDerivedStateFromProps == null && B !== C && s.componentWillReceiveProps != null && s.componentWillReceiveProps(B, m), !s.__e && s.shouldComponentUpdate != null && !(-1541 * 2 + 7997 + 819 * -6) === s.shouldComponentUpdate(B, s.__s, m) || n.__v == t.__v) {
        for (n.__v != t.__v && (s.props = B, s.state = s.__s, s.__d = !(1 * -6614 + 2079 * 2 + 1 * 2457)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(WA) {
          WA && (WA.__ = n);
        }), S = -162 + 162 * 1; S < s._sb.length; S++) s.__h.push(s._sb[S]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(B, s.__s, m), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(C, E, d);
      });
    }
    if (s.context = m, s.props = B, s.__P = i, s.__e = !(1 * 9705 + 94 * -46 + -5380), G = F.__r, k = 6710 * 1 + 45 + -6755, h) {
      for (s.state = s.__s, s.__d = !1, G && G(n), Q = s.render(s.props, s.state, s.context), H = 8243 + 8243 * -1; H < s._sb.length; H++) s.__h.push(s._sb[H]);
      s._sb = [];
    } else do
      s.__d = !(59 * 113 + -712 + 26 * -229), G && G(n), Q = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++k < -108 * -61 + 586 + 2383 * -3);
    s.state = s.__s, s.getChildContext != null && (e = Be(Be({}, e), s.getChildContext())), h && !l && s.getSnapshotBeforeUpdate != null && (d = s.getSnapshotBeforeUpdate(C, E)), AA = Q, Q != null && Q.type === te && Q.key == null && (AA = BI(Q.props.children)), g = sI(i, So(AA) ? AA : [AA], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -(-1 * 7478 + 8080 + 1 * -441), s.__h.length && r.push(s), u && (s.__E = s.__ = null);
  } catch (WA) {
    if (n.__v = null, a || o != null)
      if (WA.then) {
        for (n.__u |= a ? 1885 + 3 * -575 : -228 + -1 * -5722 + -5366 * 1; g && 4 * -1048 + -14 * 35 + 14 * 335 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (MA = o.length; MA--; ) jr(o[MA]);
    else n.__e = t.__e, n.__k = t.__k;
    F.__e(WA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = Nc(t.__e, n, t, e, A, o, r, a, I);
  return (Q = F.diffed) && Q(n), -2 * 4765 + -7901 + 17559 & n.__u ? void 0 : g;
}
function CI(i, n, t) {
  for (var e = -6018 + 1483 * -5 + 13433; e < t.length; e++) qr(t[e], t[++e], t[++e]);
  F.__c && F.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      F.__e(o, A.__v);
    }
  });
}
function BI(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 6881 * 1 + 7283 + -14164 ? i : So(i) ? i.map(BI) : Be({}, i);
}
function Nc(i, n, t, e, A, o, r, g, a) {
  var I, Q, s, l, C, E, d, u = t.props, B = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = -3112 * 2 + 4740 + 1484; I < o.length; I++) if ((C = o[I]) && "setAttribute" in C == !!h && (h ? C.localName == h : 1 * -4897 + 71 * -25 + 6675 == C.nodeType)) {
      i = C, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(B);
    i = document.createElementNS(A, h, B.is && B), g && (F.__m && F.__m(n, o), g = !1), o = null;
  }
  if (h == null) u === B || g && i.data == B || (i.data = B);
  else {
    if (o = o && ko.call(i.childNodes), u = t.props || Io, !g && o != null)
      for (u = {}, I = -8081 + 9 * -646 + 5 * 2779; I < i.attributes.length; I++) u[(C = i.attributes[I]).name] = C.value;
    for (I in u) if (C = u[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = C;
      else if (!(I in B)) {
        if (I == "value" && "defaultValue" in B || I == "checked" && "defaultChecked" in B) continue;
        Oo(i, I, null, C, A);
      }
    }
    for (I in B) C = B[I], I == "children" ? l = C : I == "dangerouslySetInnerHTML" ? Q = C : I == "value" ? E = C : I == "checked" ? d = C : g && typeof C != "function" || u[I] === C || Oo(i, I, C, u[I], A);
    if (Q) g || s && (Q.__html == s.__html || Q.__html == i.innerHTML) || (i.innerHTML = Q.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), sI(n.type == "template" ? i.content : i, So(l) ? l : [l], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[167 * 23 + -5304 + 7 * 209] : t.__k && Rt(t, 3341 + 1 * -2571 + -770), g, a), o != null)
      for (I = o.length; I--; ) jr(o[I]);
    g || (I = "value", h == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[I] || h == "progress" && !E || h == "option" && E != u[I]) && Oo(i, I, E, u[I], A), I = "checked", d != null && d != i[I] && Oo(i, I, d, u[I], A));
  }
  return i;
}
function qr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    F.__e(A, t);
  }
}
function QI(i, n, t) {
  var e, A;
  if (F.unmount && F.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || qr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      F.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 0; A < e.length; A++) e[A] && QI(e[A], n, t || typeof i.type != "function");
  t || jr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function Rc(i, n, t) {
  return this.constructor(i, t);
}
function Oe(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), F.__ && F.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], _r(n, i = (!e && t || n).__k = SA(te, null, [i]), A || Io, Io, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? ko.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), CI(o, i, r);
}
function Vr(i, n) {
  Oe(i, n, Vr);
}
function Zr(i, n, t) {
  var e, A, o, r, g = Be({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > -7637 + -6745 * 1 + 14384 && (g.children = arguments.length > -55 * 70 + -458 + 4311 ? ko.call(arguments, 5 * 367 + 6322 + -1165 * 7) : t), no(i.type, g, e || i.key, A || i.ref, null);
}
function Ue(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, tr(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + aI++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
ko = gI.slice, F = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, tI = 6679 * 1 + 1 * 8627 + -6 * 2551, oI = function(i) {
  return i != null && i.constructor == null;
}, qA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Be({}, this.state), typeof i == "function" && (i = i(Be({}, t), this.props)), i && Be(t, i), i != null && this.__v && (n && this._sb.push(n), tr(this));
}, qA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), tr(this));
}, qA.prototype.render = te, Ze = [], nI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, iI = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, un.__r = -227 * 37 + 3330 + 1 * 5069, rI = /(PointerCapture)$|Capture$/i, Kr = 9345 + -6223 * 1 + -446 * 7, Ar = fa(!1), er = fa(!0), aI = 1 * -8959 + 1 * 5216 + -1 * -3743;
function zr() {
  return (zr = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var vc = ["context", "children"];
function Fc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = 2770 + -1 * 2770; r < a.length; r++) A.indexOf(o = a[r]) >= 2927 + -1 * 7213 + 4286 || (g[o] = e[o]);
    return g;
  }(i, vc);
  return Zr(n, t);
}
function Mc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = SA(Fc, zr({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (799 + 1706 * 3 + -5914 === e.nodeType) return e.data;
    if (6120 + 5799 * -1 + -4 * 80 !== e.nodeType) return null;
    var o = [], r = {}, g = -3815 + -5 * -763, a = e.attributes, I = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[EI(a[g].name)] = a[g].value);
    for (g = I.length; g--; ) {
      var Q = t(I[g], null), s = I[g].slot;
      s ? r[s] = SA(pa, { name: s }, Q) : o[g] = Q;
    }
    var l = A ? SA(pa, null, o) : o;
    return SA(A || e.nodeName.toLowerCase(), r, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Vr : Oe)(this._vdom, this._root);
}
function EI(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Wc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[EI(i)] = t, this._vdom = Zr(this._vdom, e), Oe(this._vdom, this._root);
  }
}
function Lc() {
  Oe(this._vdom = null, this._root);
}
function pa(i, n) {
  var t = this;
  return SA("slot", zr({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Oc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Mc, A.prototype.attributeChangedCallback = Wc, A.prototype.disconnectedCallback = Lc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var Jc = 4729 * 1 + -9016 + 4287 * 1;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --Jc, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var Q = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return F.vnode && F.vnode(Q), Q;
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
function vt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function Uc(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var Yc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pc = Uc(function(i) {
  return Yc.test(i) || i.charCodeAt(1 * 4305 + 1140 + 363 * -15) === 2216 + -24 * -37 + -73 * 41 && i.charCodeAt(-1582 * -4 + 8366 + -14693) === -2 * 3351 + -213 * -3 + 6173 && i.charCodeAt(10030 + -218 * 46) < -9903 + -1 * -9994;
}), Je, T, yi, ya, Ft = 4377 * -2 + 52 * -139 + -61 * -262, lI = [], K = F, ma = K.__b, wa = K.__r, Da = K.diffed, ba = K.__c, ka = K.unmount, Sa = K.__;
function Yt(i, n) {
  K.__h && K.__h(T, i, Ft || n), Ft = 7903 + -55 * 7 + -7518;
  var t = {};
  t.__ = [], t.__h = [];
  var e = T.__H || (T.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function lA(i) {
  return Ft = -97 + -1 * -98, Xr(xI, i);
}
function Xr(i, n, t) {
  var e = Yt(Je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : xI(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[-706 * -6 + 53 * -107 + 1436]], e.__c.setState({}));
  }], e.__c = T, !T.__f)) {
    var A = function(g, a, I) {
      if (!e.__c.__H) return !0;
      var Q = e.__c.__H.__.filter(function(l) {
        return !!l.__c;
      });
      if (Q.every(function(l) {
        return !l.__N;
      })) return !o || o.call(this, g, a, I);
      var s = e.__c.props !== g;
      return Q.forEach(function(l) {
        if (l.__N) {
          var C = l.__[0];
          l.__ = l.__N, l.__N = void 0, C !== l.__[0] && (s = !0);
        }
      }), o && o.call(this, g, a, I) || s;
    };
    T.__f = !0;
    var o = T.shouldComponentUpdate, r = T.componentWillUpdate;
    T.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var Q = o;
        o = void 0, A(g, a, I), o = Q;
      }
      r && r.call(this, g, a, I);
    }, T.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function _(i, n) {
  var t = Yt(Je++, 3);
  !K.__s && $r(t.__H, n) && (t.__ = i, t.u = n, T.__H.__h.push(t));
}
function Pt(i, n) {
  var t = Yt(Je++, 4);
  !K.__s && $r(t.__H, n) && (t.__ = i, t.u = n, T.__h.push(t));
}
function oe(i) {
  return Ft = -2273 * 3 + 7740 + -916, dA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function dI(i, n, t) {
  Ft = 6, Pt(function() {
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
  var t = Yt(Je++, 7);
  return $r(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function we(i, n) {
  return Ft = 654 * -7 + 6935 + -2349 * 1, dA(function() {
    return i;
  }, n);
}
function Ee(i) {
  var n = T.context[i.__c], t = Yt(Je++, -1 * -8761 + -7965 + -787);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(T)), n.props.value) : i.__;
}
function xn(i, n) {
  K.useDebugValue && K.useDebugValue(n ? n(i) : i);
}
function uI() {
  var i = Yt(Je++, 11);
  if (!i.__) {
    for (var n = T.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [0, -613 * -6 + 1822 * 1 + -5500]);
    i.__ = "P" + t[-10103 + 1 * 10103] + "-" + t[-227 * -8 + -219 * -29 + -8166]++;
  }
  return i.__;
}
function Tc() {
  for (var i; i = lI.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(An), i.__H.__h.forEach(or), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], K.__e(n, i.__v);
  }
}
K.__b = function(i) {
  T = null, ma && ma(i);
}, K.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Sa && Sa(i, n);
}, K.__r = function(i) {
  wa && wa(i), Je = -8859 + 2286 * 3 + 667 * 3;
  var n = (T = i.__c).__H;
  n && (yi === T ? (n.__h = [], T.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(An), n.__h.forEach(or), n.__h = [], Je = 35 * 94 + -7384 + 4094)), yi = T;
}, K.diffed = function(i) {
  Da && Da(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (1546 + -1 * 6043 + -4498 * -1 !== lI.push(n) && ya === K.requestAnimationFrame || ((ya = K.requestAnimationFrame) || Hc)(Tc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), yi = T = null;
}, K.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(An), t.__h = t.__h.filter(function(e) {
        return !e.__ || or(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], K.__e(e, t.__v);
    }
  }), ba && ba(i, n);
}, K.unmount = function(i) {
  ka && ka(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      An(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && K.__e(n, t.__v));
};
var Ga = typeof requestAnimationFrame == "function";
function Hc(i) {
  var n, t = function() {
    clearTimeout(e), Ga && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Ga && (n = requestAnimationFrame(t));
}
function An(i) {
  var n = T, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), T = n;
}
function or(i) {
  var n = T;
  i.__c = i.__(), T = n;
}
function $r(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function xI(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function hI(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function nr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function fI(i, n) {
  var t = n(), e = lA({ t: { __: t, u: n } }), A = e[1688 + 7 * -752 + 3576].t, o = e[-3691 * -1 + -23 * -67 + -1 * 5231];
  return Pt(function() {
    A.__ = t, A.u = n, mi(A) && o({ t: A });
  }, [i, t, n]), _(function() {
    return mi(A) && o({ t: A }), i(function() {
      mi(A) && o({ t: A });
    });
  }, [i]), t;
}
function mi(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (4644 + 2322 * -2 !== n || 1 / n == (287 + 1580 * -1 + 2 * 647) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function pI(i) {
  i();
}
function yI(i) {
  return i;
}
function mI() {
  return [!1, pI];
}
var wI = Pt;
function ir(i, n) {
  this.props = i, this.context = n;
}
function Kc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : nr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, SA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(ir.prototype = new qA()).isPureReactComponent = !0, ir.prototype.shouldComponentUpdate = function(i, n) {
  return nr(this.props, i) || nr(this.state, n);
};
var Na = F.__b;
F.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Na && Na(i);
};
var jc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function DI(i) {
  function n(t) {
    var e = hI({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = jc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Ra = function(i, n) {
  return i == null ? null : me(me(i).map(n));
}, _c = { map: Ra, forEach: Ra, count: function(i) {
  return i ? me(i).length : 218 + 9805 * -1 + 9587;
}, only: function(i) {
  var n = me(i);
  if (-115 * 1 + 2037 + 1 * -1921 !== n.length) throw "Children.only";
  return n[301 * 28 + -1889 * 1 + 13 * -503];
}, toArray: me }, qc = F.__e;
F.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  qc(i, n, t, e);
};
var va = F.unmount;
function bI(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = hI({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return bI(e, n, t);
  })), i;
}
function kI(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return kI(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function en() {
  this.__u = -35 * 79 + -92 + 2857, this.o = null, this.__b = null;
}
function SI(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Vc(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return SA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function zt() {
  this.i = null, this.l = null;
}
F.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 16338 + -8153 * 2 & i.__u && (i.type = null), va && va(i);
}, (en.prototype = new qA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = SI(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-2 * 102 + -3991 + 4195] = kI(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 329 * 11 + -7236 + 1 * 3649 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-8780 + 3352 * 1 + -23 * -236] }), i.then(r, r);
}, en.prototype.componentWillUnmount = function() {
  this.o = [];
}, en.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-47 * 29 + 59 * -19 + 36 * 69].__c;
      this.__v.__k[0] = bI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && SA(te, null, i.fallback);
  return A && (A.__u &= -33), [SA(te, null, n.__a ? null : i.children), A];
};
var Fa = function(i, n, t) {
  if (++t[77 * 77 + 146 * 14 + -7972] === t[-9533 + 37 * -9 + -1 * -9866] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[7421 * 1 + -1802 + -5619] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 17 * 59 + 4086 * 2 + -9172; ) t.pop()();
    if (t[-2 * -2734 + -444 + 5023 * -1] < t[-3 * 1069 + -4852 * -1 + -1645]) break;
    i.i = t = t[2];
  }
};
function Zc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function zc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Oe(null, n.v), n.v = null, n.h = null;
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
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, -8171 + 1 * 1993 + 6179), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Oe(SA(Zc, o, i.__v), n.v);
}
function Xc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = SA(zc, t);
  return e.containerInfo = n, e;
}
(zt.prototype = new qA()).__a = function(i) {
  var n = this, t = SI(n.__v), e = n.l.get(i);
  return e[-6 * 425 + -1738 + 4288]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Fa(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, zt.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = me(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-36 * 64 + 5491 + -3186, 52 * -25 + 2545 * 1 + -1245, this.i]);
  return i.children;
}, zt.prototype.componentDidUpdate = zt.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Fa(i, t, n);
  });
};
var GI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, $c = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, A0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, e0 = /[A-Z0-9]/g, t0 = typeof document < "u", o0 = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function n0(i, n, t) {
  return n.__k == null && (n.textContent = ""), Oe(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function i0(i, n, t) {
  return Vr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
qA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(qA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Ma = F.event;
function r0() {
}
function a0() {
  return this.cancelBubble;
}
function g0() {
  return this.defaultPrevented;
}
F.event = function(i) {
  return Ma && (i = Ma(i)), i.persist = r0, i.isPropagationStopped = a0, i.isDefaultPrevented = g0, i.nativeEvent = i;
};
var tn = {};
tn.enumerable = !1, tn.configurable = !0, tn.get = function() {
  return this.class;
};
var Aa, I0 = tn, Wa = F.vnode;
F.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || t0 && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[1031 * -6 + -1 * 4177 + 10363] === "o" && a[2310 + 2309 * -1] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || o0(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : A0.test(r) && (r = a) : a = r = "oninput" : o && $c.test(r) ? r = r.replace(e0, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = me(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = me(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", I0)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = GI, Wa && Wa(i);
};
var La = F.__r;
F.__r = function(i) {
  La && La(i), Aa = i.__c;
};
var Oa = F.diffed;
F.diffed = function(i) {
  Oa && Oa(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), Aa = null;
};
var cA = {};
cA.readContext = function(i) {
  return Aa.__n[i.__c].props.value;
}, cA.useCallback = we, cA.useContext = Ee, cA.useDebugValue = xn, cA.useDeferredValue = yI, cA.useEffect = _, cA.useId = uI, cA.useImperativeHandle = dI, cA.useInsertionEffect = wI, cA.useLayoutEffect = Pt, cA.useMemo = dA, cA.useReducer = Xr, cA.useRef = oe, cA.useState = lA, cA.useSyncExternalStore = fI, cA.useTransition = mI;
var NI = {};
NI.current = cA;
var RI = {};
RI.ReactCurrentDispatcher = NI;
var s0 = RI;
function c0(i) {
  return SA.bind(null, i);
}
function gi(i) {
  return !!i && i.$$typeof === GI;
}
function C0(i) {
  return gi(i) && i.type === te;
}
function B0(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function Q0(i) {
  return gi(i) ? Zr.apply(null, arguments) : i;
}
function E0(i) {
  return !!i.__k && (Oe(null, i), !0);
}
function l0(i) {
  return i && (i.base || -923 * 5 + -1839 * 1 + 1 * 6455 === i.nodeType && i) || null;
}
var d0 = function(i, n) {
  return i(n);
}, u0 = function(i, n) {
  return i(n);
}, x0 = te, h0 = gi, It = { useState: lA, useId: uI, useReducer: Xr, useEffect: _, useLayoutEffect: Pt, useInsertionEffect: wI, useTransition: mI, useDeferredValue: yI, useSyncExternalStore: fI, startTransition: pI, useRef: oe, useImperativeHandle: dI, useMemo: dA, useCallback: we, useContext: Ee, useDebugValue: xn, version: "18.3.1", Children: _c, render: n0, hydrate: i0, unmountComponentAtNode: E0, createPortal: Xc, createElement: SA, createContext: Ue, createFactory: c0, cloneElement: Q0, createRef: kc, Fragment: te, isValidElement: gi, isElement: h0, isFragment: C0, isMemo: B0, findDOMNode: l0, Component: qA, PureComponent: ir, memo: Kc, forwardRef: DI, flushSync: u0, unstable_batchedUpdates: d0, StrictMode: x0, Suspense: en, SuspenseList: zt, lazy: Vc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: s0 };
function f0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var wi, Ja;
function p0() {
  return Ja || (Ja = -9406 * 1 + -461 + -4934 * -2, wi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = -7 * 304 + 130 * -71 + -6 * -1893; I < r.length; I++) {
      var Q = r[I];
      if (!a(Q)) return !1;
      var s = n[Q], l = t[Q];
      if (o = e ? e.call(A, s, l, Q) : void 0, o === !1 || o === void 0 && s !== l) return !1;
    }
    return !0;
  }), wi;
}
var y0 = p0();
const m0 = /* @__PURE__ */ f0(y0);
var P = "-ms-", io = "-moz-", U = "-webkit-", vI = "comm", Ii = "rule", ea = "decl", w0 = "@import", FI = "@keyframes", D0 = "@layer", MI = Math.abs, ta = String.fromCharCode, rr = Object.assign;
function b0(i, n) {
  return rA(i, -1 * 2747 + -1 * 1840 + -3 * -1529) ^ -9057 + 127 * -5 + 9737 ? (((n << -7866 + -69 * -114 + 2 ^ rA(i, -7861 * 1 + 8434 * -1 + 16295)) << -5883 + 37 * 251 + -3402 ^ rA(i, -3948 + -1 * -3949)) << -5 * -871 + -5142 + -3 * -263 ^ rA(i, -5 * -711 + 3800 * 1 + 19 * -387)) << 10 * 194 + -1 * 470 + 367 * -4 ^ rA(i, 2086 + 2083 * -1) : 0;
}
function WI(i) {
  return i.trim();
}
function xe(i, n) {
  return (i = n.exec(i)) ? i[10 * -236 + 8810 + 15 * -430] : i;
}
function W(i, n, t) {
  return i.replace(n, t);
}
function on(i, n, t) {
  return i.indexOf(n, t);
}
function rA(i, n) {
  return i.charCodeAt(n) | 749 * -11 + -7993 + 16232 * 1;
}
function Mt(i, n, t) {
  return i.slice(n, t);
}
function Ce(i) {
  return i.length;
}
function LI(i) {
  return i.length;
}
function Xt(i, n) {
  return n.push(i), i;
}
function k0(i, n) {
  return i.map(n).join("");
}
function Ua(i, n) {
  return i.filter(function(t) {
    return !xe(t, n);
  });
}
var si = 2333 + 22 * -106, Wt = 10700 + 1 * -10699, OI = 3 * 509 + 49 + 197 * -8, VA = 2 * 1919 + -9094 + 5256, $ = 0, Tt = "";
function ci(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = si, a.column = Wt, a.length = r, a.return = "", a.siblings = g, a;
}
function ke(i, n) {
  return rr(ci("", null, null, "", null, null, -1129 * -1 + -749 * -1 + -2 * 939, i.siblings), i, { length: -i.length }, n);
}
function Qt(i) {
  for (; i.root; ) i = ke(i.root, { children: [i] });
  Xt(i, i.siblings);
}
function S0() {
  return $;
}
function G0() {
  return $ = VA > 1 * 6781 + -47 * 83 + 360 * -8 ? rA(Tt, --VA) : 23 * -2 + -1 * -2557 + -27 * 93, Wt--, $ === 759 * -11 + 6405 + 1954 && (Wt = 1, si--), $;
}
function ee() {
  return $ = VA < OI ? rA(Tt, VA++) : 1 * -989 + 11 * 13 + 282 * 3, Wt++, $ === -2206 * 1 + 4021 + -1805 && (Wt = -7014 + 1 * -7131 + 14146, si++), $;
}
function at() {
  return rA(Tt, VA);
}
function nn() {
  return VA;
}
function Ci(i, n) {
  return Mt(Tt, i, n);
}
function ar(i) {
  switch (i) {
    case 0:
    case 7887 + -6276 * -1 + -7 * 2022:
    case -2 * 3923 + -3499 + 11355:
    case -1 * -8431 + 2 * 3919 + -128 * 127:
    case 32:
      return 38 * -73 + -163 * -39 + -3578;
    case -11109 + 11142 * 1:
    case -7944 + -28 * 249 + 14959:
    case -1 * -6106 + -5904 + 158 * -1:
    case 47:
    case 193 * -27 + -56 * -124 + 1 * -1671:
    case 64:
    case 985 * -1 + -810 + 1921 * 1:
    case -2823 * -2 + -1506 + -4081:
    case 3154 + 48 * -10 + -2551:
    case -4747 + 168 * 29:
      return -331 * -11 + 2212 + -5849;
    case -107 * -56 + 2 * 4671 + -5092 * 3:
      return -673 + 88 * -98 + 12 * 775;
    case -79 * -117 + 2372 + -11581:
    case -1 * 7709 + 3198 + 4550:
    case -4887 + 510 * 4 + -1 * -2887:
    case 91:
      return 458 * -15 + -7441 + -3 * -4771;
    case -2 * -4969 + -5454 + 1 * -4443:
    case -1513 * 6 + 8623 + -548 * -1:
      return -4738 + -4753 * -1 + 2 * -7;
  }
  return 2 * 19 + 1505 + -1543;
}
function N0(i) {
  return si = Wt = 8569 + -1 * -8917 + -17485, OI = Ce(Tt = i), VA = -61 * -43 + -239 * 12 + 245, [];
}
function R0(i) {
  return Tt = "", i;
}
function Di(i) {
  return WI(Ci(VA - (12 * -397 + -1 * 367 + -1 * -5132), gr(i === 3551 * 1 + 1485 + 43 * -115 ? i + (-15592 + 5198 * 3) : i === 122 * -4 + 4 * 422 + -1160 ? i + (-1 * -3307 + -5137 + 1831 * 1) : i)));
}
function v0(i) {
  for (; ($ = at()) && $ < 2 * 318 + 2 * -2495 + -41 * -107; ) ee();
  return ar(i) > -11 * -223 + -7 * 438 + -5 * -123 || ar($) > -16714 + 73 * 229 ? "" : " ";
}
function F0(i, n) {
  for (; --n && ee() && !($ < -1 * 5849 + 844 * 9 + -1699 || $ > 340 * 9 + -558 + -5 * 480 || $ > 5092 + -4 * -1915 + -12695 && $ < 65 || $ > 70 && $ < 214 * 7 + 2377 + 1889 * -2); ) ;
  return Ci(i, nn() + (n < 3533 * -2 + -19 * 13 + 563 * 13 && at() == 81 * -6 + -5350 + 5868 && ee() == 32));
}
function gr(i) {
  for (; ee(); ) switch ($) {
    case i:
      return VA;
    case -3138 + -28 * 188 + -37 * -228:
    case 4 * -953 + 7623 + -3772:
      i !== -3976 + 1 * 4010 && i !== -1 * -3989 + 4695 + -19 * 455 && gr($);
      break;
    case 40:
      i === 9490 + -3137 * 3 + -38 && gr(i);
      break;
    case 92:
      ee();
      break;
  }
  return VA;
}
function M0(i, n) {
  for (; ee() && i + $ !== 39 * 30 + -399 * -15 + -7108 + (-8911 + -1 * 9767 + 18688); ) if (i + $ === 2890 + -6 * 1439 + 11 * 526 + (1 * 6609 + 5299 + -11866) && at() === -2097 * 1 + -166 * 5 + 2974) break;
  return "/*" + Ci(n, VA - 1) + "*" + ta(i === 5441 + -20 * 459 + 631 * 6 ? i : ee());
}
function W0(i) {
  for (; !ar(at()); ) ee();
  return Ci(i, VA);
}
function L0(i) {
  return R0(rn("", null, null, null, [""], i = N0(i), -1 * -9813 + -1 * -69 + 61 * -162, [115 * -37 + -3398 + 7653], i));
}
function rn(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, Q = 8167 + -321 * -29 + -4369 * 4, s = r, l = 48 * 26 + -36 * 167 + 1191 * 4, C = 3673 * 2 + 2607 + 37 * -269, E = -1 * 7143 + 37 * -176 + 13655, d = 15945 + 15944 * -1, u = 10 * -958 + 8628 + 953, B = 1 * -9222 + 9237 + -14, h = -6606 + -431 * -8 + 3158, p = "", m = A, S = o, G = e, k = p; u; ) switch (E = h, h = ee()) {
    case -9854 * -1 + -9143 + -671:
      if (E != 1479 + -1 * 5269 + 3898 && rA(k, s - (203 * -26 + 4858 * -2 + -2999 * -5)) == 6954 + 530 * -13 + -1 * 6) {
        on(k += W(Di(h), "&", "&\f"), "&\f", MI(I ? g[I - (2591 * -1 + 8882 * -1 + 11474)] : -123 * 29 + 2 * 100 + -91 * -37)) != -1 && (B = -1);
        break;
      }
    case -1 * 5027 + -6689 + -5875 * -2:
    case -8960 + -892 * -1 + 8107:
    case -1 * 901 + -5747 + -6739 * -1:
      k += Di(h);
      break;
    case -6764 + -8583 * 1 + 7678 * 2:
    case -3929 + -101 * 47 + 2 * 4343:
    case -4241 + -5701 * 1 + 55 * 181:
    case 1 * -8093 + 1054 * 1 + 7071:
      k += v0(E);
      break;
    case -2 * 3700 + -71 * -14 + 6498:
      k += F0(nn() - (6959 + 4406 * 2 + 83 * -190), -7009 + 3508 * 2);
      continue;
    case 1 * -8735 + -6839 + -381 * -41:
      switch (at()) {
        case -107 * 1 + 3855 + -17 * 218:
        case -6206 + 3 * 384 + -5101 * -1:
          Xt(O0(M0(ee(), nn()), n, t, a), a);
          break;
        default:
          k += "/";
      }
      break;
    case (-1 * -3943 + -2121 + -1699) * d:
      g[I++] = Ce(k) * B;
    case (6933 * -1 + -6682 + 4 * 3435) * d:
    case 59:
    case 5357 * -1 + -32 * 254 + 5 * 2697:
      switch (h) {
        case -1141 + -1 * 1460 + -289 * -9:
        case -7022 + 2 * -1037 + -9221 * -1:
          u = 321 * -17 + -44 * -16 + 4753;
        case 477 * -3 + -3274 + 4764 + Q:
          B == -1 && (k = W(k, /\f/g, "")), C > -1 * 7682 + 7451 * 1 + -21 * -11 && Ce(k) - s && Xt(C > 32 ? Pa(k + ";", e, t, s - (2 * -2342 + 190 * -4 + -1815 * -3), a) : Pa(W(k, " ", "") + ";", e, t, s - (6416 + -211 * -9 + -8313 * 1), a), a);
          break;
        case -7397 * -1 + -4942 + -2396:
          k += ";";
        default:
          if (Xt(G = Ya(k, n, t, I, Q, A, g, p, m = [], S = [], s, o), o), h === 993 + -2 * -4109 + -9088)
            if (Q === -4 * -1241 + 3875 + -8839) rn(k, n, G, G, m, o, s, g, S);
            else switch (l === 9660 + -9214 * 1 + -347 * 1 && rA(k, -4 * -16 + -7 * -45 + -188 * 2) === 8189 + -1 * 8079 ? -8483 + -8583 * -1 : l) {
              case -1487 * -6 + -6162 + -2660:
              case -58 * 129 + 7251 + 339:
              case -6241 + -25 * -129 + 25 * 125:
              case 927 + 3 * 2422 + -4039 * 2:
                rn(i, G, G, e && Xt(Ya(i, G, G, 16 * -418 + 3 * -2446 + 14026, 1578 * -5 + 37 * 1 + 7853, A, g, p, A, m = [], s, S), S), A, S, s, g, e ? m : S);
                break;
              default:
                rn(k, G, G, G, [""], S, 0, g, S);
            }
      }
      I = Q = C = -175 * 25 + 5941 + -87 * 18, d = B = -6657 + 2 * 3329, p = k = "", s = r;
      break;
    case 1 * -233 + -1923 + 2214:
      s = -33 * 180 + 2 * 4905 + -3869 + Ce(k), C = E;
    default:
      if (d < 7868 + 1 * -7867) {
        if (h == 7218 + -10 * 935 + 2255) --d;
        else if (h == -8 + -163 * 4 + 785 && d++ == 771 + 21 * 197 + -4908 && G0() == -13 * 359 + 1 * 1721 + -1 * -3071) continue;
      }
      switch (k += ta(h), h * d) {
        case -7151 + -4 * -900 + -1 * -3589:
          B = Q > -2102 * 3 + -1347 * -1 + 171 * 29 ? -111 + -16 * -7 : (k += "\f", -1);
          break;
        case 7678 + 22 * -347:
          g[I++] = (Ce(k) - (-2919 + -2 * -3709 + -4498)) * B, B = -7678 + 1 * 7679;
          break;
        case 630 * -10 + -43 * 59 + 8901:
          at() === 263 + -5261 * 1 + 3 * 1681 && (k += Di(ee())), l = at(), Q = s = Ce(p = k += W0(nn())), h++;
          break;
        case 4729 * 2 + 2126 + 1049 * -11:
          E === 4 * -2063 + 6150 + 2147 * 1 && Ce(k) == -8 * 774 + 9112 + 1459 * -2 && (d = 7529 + 1 * -7529);
      }
  }
  return o;
}
function Ya(i, n, t, e, A, o, r, g, a, I, Q, s) {
  for (var l = A - 1, C = A === -16833 + 543 * 31 ? o : [""], E = LI(C), d = 113 * -45 + -2359 + 7444, u = 1 * 7377 + -2 * 49 + -29 * 251, B = -7984 + -4 * -1996; d < e; ++d) for (var h = 0, p = Mt(i, l + (497 * 11 + 2662 + 4 * -2032), l = MI(u = r[d])), m = i; h < E; ++h) (m = WI(u > 1710 + 57 * -30 ? C[h] + " " + p : W(p, /&\f/g, C[h]))) && (a[B++] = m);
  return ci(i, n, t, A === -6991 + 13 * -163 + -2 * -4555 ? Ii : g, a, I, Q, s);
}
function O0(i, n, t, e) {
  return ci(i, n, t, vI, ta(S0()), Mt(i, 709 * -13 + 1842 + -1 * -7377, -2), -3753 * -1 + -3404 + -349 * 1, e);
}
function Pa(i, n, t, e, A) {
  return ci(i, n, t, ea, Mt(i, 64 * -78 + 2 * -2386 + 9764, e), Mt(i, e + 1, -1), e, A);
}
function JI(i, n, t) {
  switch (b0(i, n)) {
    case -1 * 7801 + -3217 * -1 + -3229 * -3:
      return U + "print-" + i + i;
    case 5737:
    case 4201:
    case -8004 + 5641 * 1 + 5540:
    case 21 * -122 + -6220 + 1745 * 7:
    case 1641:
    case -6942 + 6436 * -1 + 17835:
    case 953 + -2699 * 1 + 4667:
    case 2 * 2136 + 1 * -5263 + 6563:
    case 5 * 2510 + 2979 + 9173 * -1:
    case 15224 + 268 * -35:
    case -2 * 3327 + 3365 * 2 + 3115:
    case 11628 + 3 * -3883 + 6666:
    case 9 * 271 + 3123 + -2557 * 1:
    case -9653 * -1 + -11496 + -179 * -46:
    case 8303 + -1 * 5422 + 2998:
    case 191 + -2 * 2644 + -134 * -80:
    case 6135:
    case 16398 + 3 * -3933:
    case 8131 + 3276 * -1:
    case 2 * -3313 + 1 * -3077 + 13918:
    case 6389:
    case -17 * -598 + -146 * -1 + -5203:
    case -3368 + -2911 * -3:
    case -10236 + -1 * -15857:
    case -2 * 4099 + -9569 + 21596:
      return U + i + i;
    case 4789:
      return io + i + i;
    case 1059 * -1 + 23 * 109 + 3901:
    case 7930 + 2598 * -2 + 2 * 756:
    case 30 * 180 + -1 * -7703 + -1 * 8293:
    case 3469 * -1 + -6804 + 17241:
    case -1871 + 1 * 4168 + 459:
      return U + i + io + i + P + i + i;
    case 188 * -32 + 11503 + -449 * -1:
      switch (rA(i, n + (-2 * 530 + 4113 + -3042))) {
        case 3903 + 1 * -3789:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 2 * 2019 + -8130 + 4200:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return U + i + P + W(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -11718 + -1 * -13569 + 237 * 21:
    case -4695 + 8963 * 1:
    case 8637 + 35 * 127 + -10179:
      return U + i + P + i + i;
    case -1714 + -9989 * -1 + -2110:
      return U + i + P + "flex-" + i + i;
    case 5 * -71 + 1 * 617 + 4925:
      return U + i + W(i, /(\w+).+(:[^]+)/, U + "box-$1$2" + P + "flex-$1$2") + i;
    case -8083 * -1 + -176 * 5 + -1760 * 1:
      return U + i + P + "flex-item-" + W(i, /flex-|-self/g, "") + (xe(i, /flex-|baseline/) ? "" : P + "grid-row-" + W(i, /flex-|-self/g, "")) + i;
    case 21 * -238 + 7963 + 1710:
      return U + i + P + "flex-line-pack" + W(i, /align-content|flex-|-self/g, "") + i;
    case 10535 + 4987 * -1:
      return U + i + P + W(i, "shrink", "negative") + i;
    case -490 * 1 + 47 * 223 + -37 * 127:
      return U + i + P + W(i, "basis", "preferred-size") + i;
    case 11905 * -1 + 1319 + 16646:
      return U + "box-" + W(i, "-grow", "") + U + i + P + W(i, "grow", "positive") + i;
    case -5027 + 79 * 77 + 3498:
      return U + W(i, /([^-])(transform)/g, "$1" + U + "$2") + i;
    case 307 * 31 + -6388 + 1529 * 2:
      return W(W(W(i, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), i, "") + i;
    case -1291 * -2 + 1 * -4177 + 7090:
    case 4197 * 1 + 182 * 29 + 28 * -197:
      return W(i, /(image-set\([^]*)/, U + "$1$`$1");
    case 15754 + -2 * 5393:
      return W(W(i, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + i + i;
    case 4111 * -2 + -10 * -16 + -2 * -6131:
      if (!xe(i, /flex-|baseline/)) return P + "grid-column-align" + Mt(i, n) + i;
      break;
    case 1 * 2968 + -2 * -6 + -388:
    case -365 * 11 + 3565 + 3810:
      return P + W(i, "template-", "") + i;
    case 4384:
    case -234 + -50 * -77:
      return t && t.some(function(e, A) {
        return n = A, xe(e.props, /grid-\w+-end/);
      }) ? ~on(i + (t = t[n].value), "span", 831 + 31 * -17 + -304) ? i : P + W(i, "-start", "") + i + P + "grid-row-span:" + (~on(t, "span", 1299 + -1 * 1299) ? xe(t, /\d+/) : +xe(t, /\d+/) - +xe(i, /\d+/)) + ";" : P + W(i, "-start", "") + i;
    case 639 + -718 * 11 + -55 * -221:
    case -1 * -8858 + -9312 + 4582:
      return t && t.some(function(e) {
        return xe(e.props, /grid-\w+-start/);
      }) ? i : P + W(W(i, "-end", "-span"), "span ", "") + i;
    case 14835 + -5 * 2148:
    case -5947 * 1 + 7 * -1361 + 1003 * 19:
    case -5567 + -1927 * -5:
    case 1 * -2936 + -8113 + 13581:
      return W(i, /(.+)-inline(.+)/, U + "$1$2") + i;
    case -11251 * 1 + -1437 * -2 + 16493:
    case 11479 * -1 + -197 * -7 + 17159:
    case -2273 * -5 + -9392 + 945 * 4:
    case 5582 + -16 * 569 + -3 * -3019:
    case 7296 + 1 * -1851:
    case -949 + -24 * -311 + -814:
    case 3199 * -1 + -1 * -1727 + -15 * -427:
    case -374 * -2 + -1351 * -4 + -1475 * 1:
    case -305 * 2 + -8624 + -14767 * -1:
    case 133 * 54 + -3925 + 2532:
    case 2034 + -2 * -2203 + -1419:
    case -389 * 18 + 9882 + 1885:
      if (Ce(i) - (4091 + 2045 * -2) - n > 4 * -1198 + 7 * -49 + 5141) switch (rA(i, n + (-1899 + -4 * 2393 + 11472))) {
        case 109:
          if (rA(i, n + (2113 + -4 * -78 + -2421)) !== -2335 * 3 + 259 * -33 + 15597) break;
        case -9487 + 1622 * -6 + 19321:
          return W(i, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + io + (rA(i, n + (1409 + 2 * 3669 + 8744 * -1)) == 16 * -358 + -8663 + -4833 * -3 ? "$3" : "$2-$3")) + i;
        case -11901 + -751 * -16:
          return ~on(i, "stretch", 1 * 67 + 7839 * -1 + 7772) ? JI(W(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -6391 + -6 * 831 + -1 * -16529:
    case -85 * 139 + 10221 + 2 * 3757:
      return W(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return P + A + ":" + o + I + (r ? P + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case -8997 + 6973 * 2:
      if (rA(i, n + (23 * 39 + 149 * -38 + 4771)) === 7895 + 3 * 997 + -10765) return W(i, ":", ":" + U) + i;
      break;
    case -1123 * 5 + 6406 + 5653:
      switch (rA(i, rA(i, -2979 + 5 * -99 + 4 * 872) === 794 * 8 + -883 + -5424 ? 18 : 2917 * -2 + 250 * 34 + -2655)) {
        case -1835 * -1 + -2 * -4336 + -10387:
          return W(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (rA(i, -5867 * 1 + 11 * 278 + 2823) === 1 * -9507 + -79 * 77 + 5 * 3127 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + P + "$2box$3") + i;
        case -757 * -4 + -1501 * 1 + -1427:
          return W(i, ":", ":" + P) + i;
      }
      break;
    case 986 * 5 + 703 * -5 + 4304:
    case -7383 + 85 * 118:
    case -808 * 6 + -71 * -4 + 6699:
    case 7967 + 109 * 1 + 1 * -4149:
    case 453 * -22 + -6624 + 18981:
      return W(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function hn(i, n) {
  for (var t = "", e = 85 + -16 * 479 + 7579; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function J0(i, n, t, e) {
  switch (i.type) {
    case D0:
      if (i.children.length) break;
    case w0:
    case ea:
      return i.return = i.return || i.value;
    case vI:
      return "";
    case FI:
      return i.return = i.value + "{" + hn(i.children, e) + "}";
    case Ii:
      if (!Ce(i.value = i.props.join(","))) return "";
  }
  return Ce(t = hn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function U0(i) {
  var n = LI(i);
  return function(t, e, A, o) {
    for (var r = "", g = -1 * 8230 + -6650 + -1488 * -10; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function Y0(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function P0(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case ea:
        i.return = JI(i.value, i.length, t);
        return;
      case FI:
        return hn([ke(i, { value: W(i.value, "@", "@" + U) })], e);
      case Ii:
        if (i.length) return k0(t = i.props, function(A) {
          switch (xe(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Qt(ke(i, { props: [W(A, /:(read-\w+)/, ":" + io + "$1")] }));
              var o = {};
              o.props = [A], Qt(ke(i, o)), rr(i, { props: Ua(t, e) });
              break;
            case "::placeholder":
              Qt(ke(i, { props: [W(A, /:(plac\w+)/, ":" + U + "input-$1")] })), Qt(ke(i, { props: [W(A, /:(plac\w+)/, ":" + io + "$1")] })), Qt(ke(i, { props: [W(A, /:(plac\w+)/, P + "input-$1")] }));
              var r = {};
              r.props = [A], Qt(ke(i, r)), rr(i, { props: Ua(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var T0 = v, J = {}, st = typeof process < "u" && J !== void 0 && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", UI = "active", YI = "data-styled-version", Bi = "6.1.18", oa = `/*!sc*/
`, fn = typeof window < "u" && typeof document < "u", H0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.SC_DISABLE_SPEEDY !== void 0 && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), Ta = /invalid hook call/i, Jo = /* @__PURE__ */ new Set(), K0 = function(i, n) {
  if (J.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 682 * -5 + -8 * 749 + 9403 * 1; a < arguments.length; a++) g[a - (6219 + 2 * -3109)] = arguments[a];
        Ta.test(r) ? (o = !1, Jo.delete(e)) : A.apply(void (-553 * -13 + 225 + 3707 * -2), vt([r], g, !1));
      }, oe(), o && !Jo.has(e) && (console.warn(e), Jo.add(e));
    } catch (r) {
      Ta.test(r.message) && Jo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Qi = Object.freeze([]), Lt = Object.freeze({});
function j0(i, n, t) {
  return t === void 0 && (t = Lt), i.theme !== t.theme && i.theme || n || t.theme;
}
var Ir = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), _0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, q0 = /(^-|-$)/g;
function Ha(i) {
  return i.replace(_0, "-").replace(q0, "");
}
var V0 = /(a)(d)/gi, Uo = -1094 * 2 + 2579 + -1 * 339, Ka = function(i) {
  return String.fromCharCode(i + (i > 25 ? -4045 + -1021 * -4 : 97));
};
function sr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Uo; n = n / Uo | 31 * -177 + -2 * -3289 + -1091) t = Ka(n % Uo) + t;
  return (Ka(n % Uo) + t).replace(V0, "$1-$2");
}
var bi, PI = 2 * 4364 + 1489 * -1 + -1858, ze = function(i, n) {
  for (var t = n.length; t; ) i = (-4 * 1093 + 5156 + -751) * i ^ n.charCodeAt(--t);
  return i;
}, TI = function(i) {
  return ze(PI, i);
};
function Z0(i) {
  return sr(TI(i) >>> -996 + -5 * 1113 + -6561 * -1);
}
function HI(i) {
  return J.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function ki(i) {
  return typeof i == "string" && (J.NODE_ENV === "production" || i.charAt(-4020 + -4 * -1005) === i.charAt(-74 * -25 + -929 * 2 + -4 * -2).toLowerCase());
}
var HA = {};
HA.childContextTypes = !0, HA.contextType = !0, HA.contextTypes = !0, HA.defaultProps = !0, HA.displayName = !0, HA.getDefaultProps = !0, HA.getDerivedStateFromError = !0, HA.getDerivedStateFromProps = !0, HA.mixins = !0, HA.propTypes = !0, HA.type = !0;
var Se = {};
Se.name = !0, Se.length = !0, Se.prototype = !0, Se.caller = !0, Se.callee = !0, Se.arguments = !0, Se.arity = !0;
var Ke = {};
Ke.$$typeof = !0, Ke.compare = !0, Ke.defaultProps = !0, Ke.displayName = !0, Ke.propTypes = !0, Ke.type = !0;
var xt = {};
xt.$$typeof = !0, xt.render = !0, xt.defaultProps = !0, xt.displayName = !0, xt.propTypes = !0;
var KI = typeof Symbol == "function" && Symbol.for, jI = KI ? Symbol.for("react.memo") : 98543 * -1 + 25 * 761 + 10741 * 13, z0 = KI ? Symbol.for("react.forward_ref") : -44109 + 1 * 104221, X0 = HA, $0 = Se, _I = Ke, AC = ((bi = {})[z0] = xt, bi[jI] = _I, bi);
function ja(i) {
  return ("type" in (n = i) && n.type.$$typeof) === jI ? _I : "$$typeof" in i ? AC[i.$$typeof] : X0;
  var n;
}
var eC = Object.defineProperty, tC = Object.getOwnPropertyNames, _a = Object.getOwnPropertySymbols, oC = Object.getOwnPropertyDescriptor, nC = Object.getPrototypeOf, qa = Object.prototype;
function qI(i, n, t) {
  if (typeof n != "string") {
    if (qa) {
      var e = nC(n);
      e && e !== qa && qI(i, e, t);
    }
    var A = tC(n);
    _a && (A = A.concat(_a(n)));
    for (var o = ja(i), r = ja(n), g = 1 * 3823 + -4328 * -2 + -12479; g < A.length; ++g) {
      var a = A[g];
      if (!(a in $0 || t && t[a] || r && a in r || o && a in o)) {
        var I = oC(n, a);
        try {
          eC(i, a, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function Ot(i) {
  return typeof i == "function";
}
function na(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function At(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Va(i, n) {
  if (3474 + 193 * -18 === i.length) return "";
  for (var t = i[-630 * -1 + -5 * -885 + -5055], e = -3073 * 2 + 17 * 229 + 2254; e < i.length; e++) t += i[e];
  return t;
}
function Jt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function cr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Jt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 1646 * 1 + 9111 + -31 * 347; e < n.length; e++) i[e] = cr(i[e], n[e]);
  else if (Jt(n))
    for (var e in n) i[e] = cr(i[e], n[e]);
  return i;
}
function ia(i, n) {
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
var iC = J.NODE_ENV !== "production" ? tA : {};
function rC() {
  for (var i = [], n = 7919 * 1 + -9050 + -377 * -3; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-2745 + 5 * 549], e = [], A = 9566 + 1 * -9565, o = i.length; A < o; A += -1801 * 2 + -1209 + -2406 * -2) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Ht(i) {
  for (var n = [], t = -71 * 31 + -9008 + 1121 * 10; t < arguments.length; t++) n[t - (19 * 523 + -8348 + -1588)] = arguments[t];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -2 * 2034 + -1820 + 5888 ? " Args: ".concat(n.join(", ")) : "")) : new Error(rC.apply(void 0, vt([iC[i]], n, !1)).trim());
}
var aC = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(1 * -8909 + -1 * -9551 + 26 * -5), this.length = -83 * -55 + 8339 + -12392 * 1, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -3 * -1677 + -643 * -2 + -1 * 6317, e = 37 * -43 + -2 * -1301 + -1011; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 1) < 0) throw Ht(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 7 * -29 + -229 * 5 + 1348;
    }
    for (var g = this.indexOfGroup(n + (15541 + 2 * -7770)), a = (r = 1 * -3395 + 2812 + -11 * -53, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -4357 * 1 + -28 + -5 * -877;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 3956 * -2 + -9981 + -29 * -617 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(oa);
    return t;
  }, i;
}(), gC = 7624 + 15 * -461 + -708 << -3160 + -1 * 1103 + 4293, an = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map(), gn = -2348 * -2 + 631 * 10 + 155 * -71, Yo = function(i) {
  if (an.has(i)) return an.get(i);
  for (; pn.has(gn); ) gn++;
  var n = gn++;
  if (J.NODE_ENV !== "production" && ((-23 * 102 + -8228 + 1 * 10574 | n) < -9851 + 2 * -1081 + 12013 || n > gC)) throw Ht(16, "".concat(n));
  return an.set(i, n), pn.set(n, i), n;
}, IC = function(i, n) {
  gn = n + (3725 + -19 * -461 + 9 * -1387), an.set(i, n), pn.set(n, i);
}, sC = "style[".concat(st, "][").concat(YI, '="').concat(Bi, '"]'), cC = new RegExp("^".concat(st, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), CC = function(i, n, t) {
  for (var e, A = t.split(","), o = 0, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, BC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(oa), A = [], o = -1889 * -3 + -4190 + -1477, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(cC);
      if (a) {
        var I = 0 | parseInt(a[1], 10), Q = a[8663 * -1 + 118 * -58 + -15509 * -1];
        1 * -9890 + 227 * -30 + -3340 * -5 !== I && (IC(Q, I), CC(i, Q, a[-6140 + 6598 * 1 + 13 * -35]), i.getTag().insertRules(I, A)), A.length = -1658 * -2 + -63 * 7 + -2875;
      } else A.push(g);
    }
  }
}, Za = function(i) {
  for (var n = document.querySelectorAll(sC), t = 2794 + 2 * -1397, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(st) !== UI && (BC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function QC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var VI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(st, "]")));
    return a[a.length - 1];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(st, UI), e.setAttribute(YI, Bi);
  var r = QC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, EC = function() {
  function i(n) {
    this.element = VI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Ht(2327 * 2 + 709 * 5 + -8182);
    }(this.element), this.length = 55 * 19 + 1 * 2693 + -21 * 178;
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
}(), lC = function() {
  function i(n) {
    this.element = VI(n), this.nodes = this.element.childNodes, this.length = -47 * -99 + 301 * -11 + -122 * 11;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -60 * -148 + 5859 + -14739) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), dC = function() {
  function i(n) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -5231 + 36 * -100 + 8831, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -1979 * 1 + 1187 * -1 + 3167), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), za = fn, uC = { isServer: !fn, useCSSOMInjection: !H0 }, ZI = function() {
  function i(n, t, e) {
    n === void 0 && (n = Lt), t === void 0 && (t = {});
    var A = this;
    this.options = vA(vA({}, uC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && fn && za && (za = !1, Za(this)), ia(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var l = function(B) {
            return pn.get(B);
          }(s);
          if (l === void 0) return "continue";
          var C = o.names.get(l), E = r.getGroup(s);
          if (C === void 0 || !C.size || 1939 * -1 + 8 * -107 + 2795 === E.length) return "continue";
          var d = "".concat(st, ".g").concat(s, '[id="').concat(l, '"]'), u = "";
          C !== void 0 && C.forEach(function(B) {
            B.length > 2 * -1327 + -11 * -853 + -3 * 2243 && (u += "".concat(B, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(oa);
        }, Q = 0; Q < g; Q++) I(Q);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return Yo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && fn && Za(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(vA(vA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 2310 * -1 + -8180 + 5245 * 2) + (5 * -671 + 3 * -2341 + 10379);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new dC(A) : e ? new EC(A) : new lC(A);
    }(this.options), new aC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Yo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Yo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Yo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), xC = /&/g, hC = /^\s*\/\/.*$/gm;
function zI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = zI(t.children, n)), t;
  });
}
function XI(i) {
  var n, t, e, A = i === void 0 ? Lt : i, o = A.options, r = o === void 0 ? Lt : o, g = A.plugins, a = g === void 0 ? Qi : g, I = function(l, C, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 1 * -569 + -1399 * 1 + -24 * -82 ? ".".concat(n) : l;
  }, Q = a.slice();
  Q.push(function(l) {
    l.type === Ii && l.value.includes("&") && (l.props[-5176 + -647 * -8] = l.props[-4188 + -1367 * -1 + -7 * -403].replace(xC, t).replace(e, I));
  }), r.prefix && Q.push(P0), Q.push(J0);
  var s = function(l, C, E, d) {
    C === void 0 && (C = ""), E === void 0 && (E = ""), d === void 0 && (d = "&"), n = d, t = C, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = l.replace(hC, ""), B = L0(E || C ? "".concat(E, " ").concat(C, " { ").concat(u, " }") : u);
    r.namespace && (B = zI(B, r.namespace));
    var h = [];
    return hn(B, U0(Q.concat(Y0(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = a.length ? a.reduce(function(l, C) {
    return C.name || Ht(7 * -404 + -4 * -1221 + -2041), ze(l, C.name);
  }, PI).toString() : "", s;
}
var fC = new ZI(), Cr = XI(), ra = It.createContext({ shouldForwardProp: void 0, styleSheet: fC, stylis: Cr });
ra.Consumer;
var pC = It.createContext(void 0);
function Br() {
  return Ee(ra);
}
function yC(i) {
  var n = lA(i.stylisPlugins), t = n[2958 * -1 + -538 * 14 + -5245 * -2], e = n[-9436 + 34 * -201 + 307 * 53], A = Br().styleSheet, o = dA(function() {
    var Q = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? Q = i.sheet : i.target && (Q = Q.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (Q = Q.reconstructWithOptions(s)), Q;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = dA(function() {
    var Q = {};
    Q.namespace = i.namespace, Q.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = Q, s.plugins = t, XI(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  _(function() {
    m0(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = dA(function() {
    var Q = {};
    return Q.shouldForwardProp = i.shouldForwardProp, Q.styleSheet = o, Q.stylis = r, Q;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, It.createElement(ra.Provider, a, It.createElement(pC.Provider, I, i.children));
}
var Xa = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Cr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ia(this, function() {
      throw Ht(6444 + -67 * 96, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Cr), this.name + n.hash;
  }, i;
}(), mC = function(i) {
  return i >= "A" && i <= "Z";
};
function $a(i) {
  for (var n = "", t = -1142 * -8 + 74 * 70 + -14316; t < i.length; t++) {
    var e = i[t];
    if (t === 1 && e === "-" && i[1559 * -3 + 5874 + 21 * -57] === "-") return i;
    mC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var $I = function(i) {
  return i == null || i === !1 || i === "";
}, As = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !$I(o) && (Array.isArray(o) && o.isCss || Ot(o) ? e.push("".concat($a(A), ":"), o, ";") : Jt(o) ? e.push.apply(e, vt(vt(["".concat(A, " {")], As(o), !1), ["}"], !1)) : e.push("".concat($a(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -5229 + 27 * -358 + 5 * 2979 === t || n in T0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function gt(i, n, t, e) {
  if ($I(i)) return [];
  if (na(i)) return [".".concat(i.styledComponentId)];
  if (Ot(i)) {
    if (!Ot(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return J.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Xa || Jt(A) || A === null || console.error("".concat(HI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gt(A, n, t, e);
  }
  var o;
  return i instanceof Xa ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Jt(i) ? As(i) : Array.isArray(i) ? Array.prototype.concat.apply(Qi, i.map(function(r) {
    return gt(r, n, t, e);
  })) : [i.toString()];
}
function wC(i) {
  for (var n = 5573 + 78 * -96 + 1915; n < i.length; n += 1681 + -28 * 60) {
    var t = i[n];
    if (Ot(t) && !na(t)) return !1;
  }
  return !0;
}
var DC = TI(Bi), bC = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (e === void 0 || e.isStatic) && wC(n), this.componentId = t, this.baseHash = ze(DC, t), this.baseStyle = e, ZI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = At(A, this.staticRulesId);
      else {
        var o = Va(gt(this.rules, n, t, e)), r = sr(ze(this.baseHash, o) >>> -3695 + 1 * 3695);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = At(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = ze(this.baseHash, e.hash), I = "", Q = -6296 + -102 * 96 + -1 * -16088; Q < this.rules.length; Q++) {
        var s = this.rules[Q];
        if (typeof s == "string") I += s, J.NODE_ENV !== "production" && (a = ze(a, s));
        else if (s) {
          var l = Va(gt(s, n, t, e));
          a = ze(a, l + Q), I += l;
        }
      }
      if (I) {
        var C = sr(a >>> 0);
        t.hasNameForId(this.componentId, C) || t.insertRules(this.componentId, C, e(I, ".".concat(C), void 0, this.componentId)), A = At(A, C);
      }
    }
    return A;
  }, i;
}(), es = It.createContext(void 0);
es.Consumer;
var Si = {}, Ag = /* @__PURE__ */ new Set();
function kC(i, n, t) {
  var e = na(i), A = i, o = !ki(i), r = n.attrs, g = r === void 0 ? Qi : r, a = n.componentId, I = a === void 0 ? function(S, G) {
    var k = typeof S != "string" ? "sc" : Ha(S);
    Si[k] = (Si[k] || -8116 + -5 * -1663 + -199) + (19 * -503 + 2775 + -7 * -969);
    var H = "".concat(k, "-").concat(Z0(Bi + k + Si[k]));
    return G ? "".concat(G, "-").concat(H) : H;
  }(n.displayName, n.parentComponentId) : a, Q = n.displayName, s = Q === void 0 ? function(S) {
    return ki(S) ? "styled.".concat(S) : "Styled(".concat(HI(S), ")");
  }(i) : Q, l = n.displayName && n.componentId ? "".concat(Ha(n.displayName), "-").concat(n.componentId) : n.componentId || I, C = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, E = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var u = n.shouldForwardProp;
      E = function(S, G) {
        return d(S, G) && u(S, G);
      };
    } else E = d;
  }
  var B = new bC(t, l, e ? A.componentStyle : void 0);
  function h(S, G) {
    return function(k, H, AA) {
      var MA = k.attrs, yA = k.componentStyle, WA = k.defaultProps, eA = k.foldedComponentIds, Fo = k.styledComponentId, pc = k.target, yc = It.useContext(es), mc = Br(), ui = k.shouldForwardProp || mc.shouldForwardProp;
      J.NODE_ENV !== "production" && xn(Fo);
      var la = j0(H, yc, WA) || Lt, le = function(Mo, _t, Wo) {
        var Bt = {};
        Bt.className = void 0, Bt.theme = Wo;
        for (var fi, Pe = vA(vA({}, _t), Bt), pi = 163 * -1 + -2 * 3084 + -1 * -6331; pi < Mo.length; pi += -2535 + 15 * 287 + -1769) {
          var Lo = Ot(fi = Mo[pi]) ? fi(Pe) : fi;
          for (var De in Lo) Pe[De] = De === "className" ? At(Pe[De], Lo[De]) : De === "style" ? vA(vA({}, Pe[De]), Lo[De]) : Lo[De];
        }
        return _t.className && (Pe.className = At(Pe.className, _t.className)), Pe;
      }(MA, H, la), Kt = le.as || pc, jt = {};
      for (var YA in le) le[YA] === void 0 || YA[-4006 + 2003 * 2] === "$" || YA === "as" || YA === "theme" && le.theme === la || (YA === "forwardedAs" ? jt.as = le.forwardedAs : ui && !ui(YA, Kt) || (jt[YA] = le[YA], ui || J.NODE_ENV !== "development" || Pc(YA) || Ag.has(YA) || !Ir.has(Kt) || (Ag.add(YA), console.warn('styled-components: it looks like an unknown prop "'.concat(YA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xi = function(Mo, _t) {
        var Wo = Br(), Bt = Mo.generateAndInjectStyles(_t, Wo.styleSheet, Wo.stylis);
        return J.NODE_ENV !== "production" && xn(Bt), Bt;
      }(yA, le);
      J.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(xi);
      var hi = At(eA, Fo);
      return xi && (hi += " " + xi), le.className && (hi += " " + le.className), jt[ki(Kt) && !Ir.has(Kt) ? "class" : "className"] = hi, AA && (jt.ref = AA), SA(Kt, jt);
    }(p, S, G);
  }
  h.displayName = s;
  var p = It.forwardRef(h), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = C, p.componentStyle = B, p.displayName = s, p.shouldForwardProp = E, p.foldedComponentIds = e ? At(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = l, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = e ? function(G) {
      for (var k = [], H = -6611 * 1 + -1279 * -2 + 4054; H < arguments.length; H++) k[H - (-7 * -1105 + -3617 + 1 * -4117)] = arguments[H];
      for (var AA = -1 * 6079 + -7341 + -20 * -671, MA = k; AA < MA.length; AA++) cr(G, MA[AA], !0);
      return G;
    }({}, A.defaultProps, S) : S;
  } }), J.NODE_ENV !== "production" && (K0(s, l), p.warnTooManyClasses = /* @__PURE__ */ function(S, G) {
    var k = {}, H = !1;
    return function(AA) {
      if (!H && (k[AA] = !0, Object.keys(k).length >= -93 + -1 * -293)) {
        var MA = G ? ' with the id of "'.concat(G, '"') : "";
        console.warn("Over ".concat(-4 * 109 + -6603 + 7239, " classes were generated for component ").concat(S).concat(MA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, k = {};
      }
    };
  }(s, l)), ia(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && qI(p, i, m), p;
}
function eg(i, n) {
  for (var t = [i[-1 * -5774 + 2157 + -7931]], e = 1 * 2990 + -4 * 1277 + 3 * 706, A = n.length; e < A; e += -4907 * 2 + -4217 * -2 + 1381) t.push(n[e], i[e + 1]);
  return t;
}
var tg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function SC(i) {
  for (var n = [], t = 373 * 19 + -2405 * 1 + -4681 * 1; t < arguments.length; t++) n[t - (-14 * 354 + 5732 * 1 + -775)] = arguments[t];
  if (Ot(i) || Jt(i)) return tg(gt(eg(Qi, vt([i], n, !0))));
  var e = i;
  return -1 * -1569 + -5714 * -1 + 7283 * -1 === n.length && e.length === 1 && typeof e[0] == "string" ? gt(e) : tg(gt(eg(e, n)));
}
function Qr(i, n, t) {
  if (t === void 0 && (t = Lt), !n) throw Ht(6857 + -4613 * -2 + -16082, n);
  var e = function(A) {
    for (var o = [], r = 13 * 91 + 1083 * -1 + -99; r < arguments.length; r++) o[r - (-53 * -173 + 7450 + -1187 * 14)] = arguments[r];
    return i(n, t, SC.apply(void 0, vt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Qr(i, n, vA(vA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Qr(i, n, vA(vA({}, t), A));
  }, e;
}
var ts = function(i) {
  return Qr(kC, i);
}, Go = ts;
Ir.forEach(function(i) {
  Go[i] = ts(i);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Po = "__sc-".concat(st, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[Po] || (window[Po] = 381 * 15 + 1220 * -5 + 385), 4365 + 7 * 989 + -11287 === window[Po] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Po] += -322 * 1 + -6449 + 6772);
const GC = Go.div`
  position: relative;
`, NC = Go.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class D extends Error {
  constructor(t, e) {
    super(t);
    y(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof D) return t;
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
    return new D(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof D) return t;
    const e = "An unexpected error has occurred";
    return new D(e);
  }
}
const In = {};
In.CONTINUE_DETECTION = "continue-detection", In.SWITCH_CAMERA = "switch-camera", In.TOGGLE_MIRROR = "toggle-mirror";
const Gi = In, Er = {};
Er.FIRST_FRAME = "first-frame", Er.FIRST_VALID_FRAME = "first-valid-frame";
const Ni = Er, os = {};
os.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const og = os;
var ns = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(ns || {}), RC = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(RC || {}), vC = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(vC || {}), FC = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(FC || {}), We = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(We || {}), MC = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(MC || {});
const ue = {};
ue.CANDIDATE_SELECTION = "candidate_selection", ue.DOCUMENT_CENTERING = "document_centering", ue.DOCUMENT_NOT_PRESENT = "document_not_present", ue.DOCUMENT_TOO_FAR = "document_too_far", ue.SHARPNESS_TOO_LOW = "sharpness_too_low", ue.BRIGHTNESS_TOO_LOW = "brightness_too_low", ue.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ue.HOTSPOTS_PRESENT = "hotspots_present";
const Te = ue, He = {};
He.isPresent = Te.DOCUMENT_NOT_PRESENT, He.isNotSmall = Te.DOCUMENT_TOO_FAR, He.isNotOutOfBounds = Te.DOCUMENT_CENTERING, He.isSharp = Te.SHARPNESS_TOO_LOW, He.isNotDim = Te.BRIGHTNESS_TOO_LOW, He.isNotBright = Te.BRIGHTNESS_TOO_HIGH, He.noHotspots = Te.HOTSPOTS_PRESENT;
const lr = {};
lr.FRONT = "user", lr.REAR = "environment";
const yn = lr, dr = {};
dr.AUTO_CAPTURE = "AUTO_CAPTURE", dr.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const ur = dr, ht = {};
ht.LOADING = "LOADING", ht.ERROR = "ERROR", ht.WAITING = "WAITING", ht.RUNNING = "RUNNING", ht.COMPLETE = "COMPLETE";
const sA = ht, is = { ...sA };
is.DONE = "DONE";
const ng = is, rs = {};
rs.EYE_NOT_PRESENT = "eye_not_present";
const mn = rs, DA = {};
DA.CANDIDATE_SELECTION = "candidate_selection", DA.FACE_TOO_CLOSE = "face_too_close", DA.FACE_TOO_FAR = "face_too_far", DA.FACE_CENTERING = "face_centering", DA.FACE_NOT_PRESENT = "face_not_present", DA.SHARPNESS_TOO_LOW = "sharpness_too_low", DA.BRIGHTNESS_TOO_LOW = "brightness_too_low", DA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", DA.DEVICE_PITCHED = "device_pitched", DA.LEFT_EYE_NOT_PRESENT = "left_" + mn.EYE_NOT_PRESENT, DA.RIGHT_EYE_NOT_PRESENT = "right_" + mn.EYE_NOT_PRESENT, DA.MOUTH_NOT_PRESENT = "mouth_not_present", DA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", DA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const RA = DA, LA = {};
LA.isPresent = RA.FACE_NOT_PRESENT, LA.isNotPitched = RA.DEVICE_PITCHED, LA.isNotSmall = RA.FACE_TOO_FAR, LA.isNotLarge = RA.FACE_TOO_CLOSE, LA.isNotOutOfBounds = RA.FACE_CENTERING, LA.isNotDim = RA.BRIGHTNESS_TOO_LOW, LA.isNotBright = RA.BRIGHTNESS_TOO_HIGH, LA.isSharp = RA.SHARPNESS_TOO_LOW, LA.isLeftEyePresent = RA.LEFT_EYE_NOT_PRESENT, LA.isRightEyePresent = RA.RIGHT_EYE_NOT_PRESENT, LA.isMouthPresent = RA.MOUTH_NOT_PRESENT, LA.isMouthScoreNotTooHigh = RA.MOUTH_SCORE_TOO_HIGH, LA.isMouthScoreNotTooLow = RA.MOUTH_SCORE_TOO_LOW;
var WC = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(WC || {});
const Ri = { ...RA };
Ri.SMILE = "smile", Ri.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", Ri.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const zA = {};
zA.CANDIDATE_SELECTION = "candidate_selection", zA.PALM_CENTERING = "palm_centering", zA.PALM_NOT_PRESENT = "palm_not_present", zA.PALM_TOO_FAR = "palm_too_far", zA.PALM_TOO_CLOSE = "palm_too_close", zA.SHARPNESS_TOO_LOW = "sharpness_too_low", zA.BRIGHTNESS_TOO_LOW = "brightness_too_low", zA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", zA.DEVICE_PITCHED = "device_pitched", zA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const XA = zA, se = {};
se.isPresent = XA.PALM_NOT_PRESENT, se.isNotPitched = XA.DEVICE_PITCHED, se.isNotSmall = XA.PALM_TOO_FAR, se.isNotOutOfBounds = XA.PALM_CENTERING, se.isNotDim = XA.BRIGHTNESS_TOO_LOW, se.isNotBright = XA.BRIGHTNESS_TOO_HIGH, se.isSharp = XA.SHARPNESS_TOO_LOW, se.isNotLarge = XA.PALM_TOO_CLOSE, se.isTemplateExtractionQualityHighEnough = XA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const LC = se, To = {};
To.TOP_LEFT = "TOP_LEFT", To.TOP_RIGHT = "TOP_RIGHT", To.BOTTOM_RIGHT = "BOTTOM_RIGHT", To.BOTTOM_LEFT = "BOTTOM_LEFT";
const KA = {};
KA.CANDIDATE_SELECTION = "candidate_selection", KA.FACE_TOO_CLOSE = "face_too_close", KA.FACE_TOO_FAR = "face_too_far", KA.FACE_CENTERING = "face_centering", KA.FACE_NOT_PRESENT = "face_not_present", KA.SHARPNESS_TOO_LOW = "sharpness_too_low", KA.BRIGHTNESS_TOO_LOW = "brightness_too_low", KA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", KA.DEVICE_PITCHED = "device_pitched", KA.LEFT_EYE_NOT_PRESENT = "left_" + mn.EYE_NOT_PRESENT, KA.RIGHT_EYE_NOT_PRESENT = "right_" + mn.EYE_NOT_PRESENT;
const ie = KA, re = {};
re.isPresent = ie.FACE_NOT_PRESENT, re.isNotPitched = ie.DEVICE_PITCHED, re.isNotSmall = ie.FACE_TOO_FAR, re.isNotLarge = ie.FACE_TOO_CLOSE, re.isNotOutOfBounds = ie.FACE_CENTERING, re.isNotDim = ie.BRIGHTNESS_TOO_LOW, re.isNotBright = ie.BRIGHTNESS_TOO_HIGH, re.isSharp = ie.SHARPNESS_TOO_LOW, re.isLeftEyePresent = ie.LEFT_EYE_NOT_PRESENT, re.isRightEyePresent = ie.RIGHT_EYE_NOT_PRESENT;
const Ei = Ue(void 0);
Ei.displayName = "AppStateContext";
function ne() {
  const i = Ee(Ei);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
var as = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(as || {});
const xr = {};
xr.SIMD = "simd", xr.NO_SIMD = "no-simd";
const ig = xr, hr = {};
hr.Lower = "Lower", hr.Higher = "Higher";
const wn = hr, sn = {};
sn.VISIBLE = "VISIBLE", sn.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", sn.HIDDEN = "HIDDEN";
const Dn = sn, fr = {};
fr.MOBILE = "MOBILE", fr.DESKTOP = "DESKTOP";
const rg = fr;
(function(i, n) {
  function t(g, a, I, Q, s) {
    return hA(g - -994, a);
  }
  function e(g, a, I, Q, s) {
    return hA(g - -683, s);
  }
  function A(g, a, I, Q, s) {
    return hA(a - -610, I);
  }
  function o(g, a, I, Q, s) {
    return hA(a - 921, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(A(-416, -413, "B2zI", -417, -410)) / 1 + parseInt(t(-785, "Cp&6", -797, -798, -769)) / 2 + -parseInt(A(-407, -395, "9ZEH", -392, -411)) / 3 + parseInt(t(-811, "EY(1", -796, -803, -815)) / 4 * (parseInt(o(1100, 1115, "B2zI", 1132, 1109)) / 5) + parseInt(A(-404, -407, "m8Ir", -399, -397)) / 6 * (parseInt(e(-495, -484, -492, -497, "At!S")) / 7) + -parseInt(o(1148, 1134, "4lOw", 1152, 1130)) / 8 + -parseInt(t(-801, "85k@", -795, -797, -808)) / 9 * (-parseInt(o(1133, 1120, "NCZ@", 1126, 1104)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(bn, 295339 * -5 + 4 * -338369 + 1 * 3813185);
function hA(i, n) {
  const t = bn();
  return hA = function(e, A) {
    e = e - (-74 * 16 + -867 * 4 + 4834);
    let o = t[e];
    if (hA.UFEKHl === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      hA.WGiPLh = Q, i = arguments, hA.UFEKHl = !0;
    }
    const g = t[8017 * 1 + -1 * 3359 + -274 * 17], a = e + g, I = i[a];
    return I ? o = I : (hA.hkNZRI === void 0 && (hA.hkNZRI = !0), o = hA.WGiPLh(o, A), i[a] = o), o;
  }, hA(i, n);
}
function bn() {
  const i = ["W4bdWR4RWQi", "W7FdLSkEW6bg", "br3dTCoNW5ulWPJcLsCyiSoq", "F8kPbCoGWR4/WPRcU8kYidLfga", "W4HzeH7cRmkpWQ3cOSoVmSoSW6a", "cmoJWQ7cLSob", "F8kNamoIWR04WPZcNSkzlrnHka", "vXdcOIFdKq", "oSkliSo9WOBcT8kWeCkJW4C", "vmoCWQtcOmolW6ddLhXuW6TSvSk5", "W5roW60t", "W5SfW7DrW7y", "fmkmW5lcKvJdHwZdS8o3ECk9W70", "WQagW6zLW6LzW44", "mmoiW4zTaW", "zSo8WRBcJCoc", "WPqFtL8M", "dCoZWPpcH8oa", "WPHWArBdKmk6WOFcS1FcPGmw", "WRnoD3/cRmoYW6ZdPmoicmoMWOu", "D8kanWjW", "cG3cRItdSaVcVG", "WPKFWQrsW6TLW4dcJmoaW7brWQnh", "Du3cSSo1k8odFN3dRWxcSfa", "W5fjpWv9cCo6mv7cSeSs", "WOnlWQuRWRm", "br3dTSoVW5SmW5RcGHKqnCozWR0", "CbldOCkNxmkaAW", "q8kxkG", "CmodWO/dLmkLuSk6WP5WWQS", "CvFcVmkuwGJcS8kGnJpcKrnp", "W5pdSCoWW6VcRxv3aK7dHSo5AW", "W5xcOSk3WO7dRW5v", "W4G9eulcJW", "W5KpqqVdQW"];
  return bn = function() {
    return i;
  }, bn();
}
function ag(i, n, t, e, A) {
  return hA(i - -534, A);
}
function OC(i, n, t, e, A) {
  return hA(i - 559, e);
}
const kn = Ue(void 0);
function pr(i, n, t, e, A) {
  return hA(t - -673, e);
}
kn[ag(-328, -343, -338, -337, "3LQk") + pr(-490, -493, -484, "Cp&6") + "e"] = ag(-332, -347, -337, -347, "#BCV") + OC(766, 778, 760, "9ZEH") + pr(-465, -476, -472, "4lOw");
function vi(i, n, t, e, A) {
  return hA(n - 851, t);
}
function No() {
  const i = Ee(kn);
  if (i === void 0) throw new Error(kn[n(316, 317, 333, "Iqv8") + n(327, 346, 345, "Iqv8") + "e"] + (e("Hc7b", -262, -252, -276, -267) + n(336, 319, 327, "Tf2o") + A(-765, "Sc*D", -766) + n(324, 350, 335, "T@j0") + e("Umax", -271, -293, -275, -278) + n(322, 315, 328, "Hc7b") + t(241, "w1x9", 243, 257) + A(-776, "w1x9", -774)));
  function n(o, r, g, a, I) {
    return vi(o - 41, g - -714, a);
  }
  function t(o, r, g, a, I) {
    return pr(o - 166, r - 456, a - 719, r);
  }
  function e(o, r, g, a, I) {
    return vi(o - 256, I - -1334, o);
  }
  function A(o, r, g, a, I) {
    return vi(o - 231, g - -1809, r);
  }
  return i;
}
const Ho = (i, n) => Math.hypot(n.x - i.x, n.y - i.y), Sn = (i) => i.length < 6764 + 21 * -104 + -4579 ? 667 * -3 + 2995 * 2 + -3989 * 1 : i.reduce((t, e) => t + e, 1 * 6694 + 897 + 1 * -7591) / i.length, Ut = (i) => Number.parseFloat(i.toFixed(-58 * -135 + 6 * 5 + -873 * 9)), JC = (i) => {
  const { bottomLeft: n, bottomRight: t, topLeft: e, topRight: A } = i, o = Ho(e, A), r = Ho(A, t), g = Ho(n, t), a = Ho(e, n);
  return Math.min(o, r, g, a);
};
function UC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-7 * -53 + -2614 + 2243 * 1, 0, n.canvas.width, n.canvas.height);
}
const gs = -45 * -81 + 1 * 6683 + -10328 + 0.85, YC = -1671 + 2271 * 1, PC = -11187 + -11 * -1017, TC = "dot-auto-capture-video", aa = (i, n) => Math.min(i, n), Is = ({ height: i, width: n }, t) => {
  const e = aa(n, i) * t, A = (n - e) / (3307 * 2 + 1287 + -7899), o = (i - e) / (-2 * -2529 + 452 * 16 + -12288), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, HC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Is(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, KC = ({ height: i, width: n }) => {
  const t = aa(n, i), e = t / (-1503 + 1285 * 3 + -2349 * 1) * (-2 * 1637 + 4091 * -2 + 11460 * 1);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, jC = ({ height: i, width: n }) => {
  const t = {};
  return t.height = i, t.width = n, Is(t, gs);
}, _C = (i) => HC(i, gs), qC = "7.7.0", VC = {
  version: qC
}, yr = {};
yr.max = 100, yr.min = 10;
const gg = yr, ZC = -8219 + 1 * 3222 + 5717, zC = 1853 + 1 * -4907 + -2 * -1627, XC = -2 * 2621 + -3317 + 8563 * 1, ss = "AES-CBC", cs = "RSA-OAEP", $C = "SHA-256", AB = "image/jpeg", eB = -1 * -4781 + 1584 + -3 * 2119, Cs = "/dot-assets", Ig = "dot_embedded_bg.wasm", mr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), tB = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Ut(t) : t)), ga = () => VC.version, Ia = (i) => new URL(i).hostname.replace("www.", ""), Bs = () => Ia(window.location.href) === "localhost", Ko = (i) => Object.entries(i).map(([n, t]) => encodeURIComponent(n) + "=" + encodeURIComponent(t)).join("&"), oB = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function nB(i) {
  return i.at(-1) === "/" ? i.slice(1 * -8321 + 1539 + 6782, -1) : i;
}
function Qs(i) {
  return "" + nB(i ?? "") + Cs;
}
function ro() {
  return !1;
}
const iB = () => "prod".toLowerCase() === "dev";
var ve;
class Es extends Array {
  constructor(t) {
    super();
    O(this, ve);
    M(this, ve, t);
  }
  get size() {
    return b(this, ve);
  }
  pushFixed(...t) {
    if (t.length > b(this, ve)) {
      const e = t.slice(-b(this, ve));
      this.push(...e);
      return;
    }
    this.length === b(this, ve) && this.splice(-4898 * 1 + 2 * 2347 + 1 * 204, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-3842 * -2 + 3900 + -11584);
  }
}
ve = new WeakMap();
const ls = (i, n, t = AB) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), rB = async (i) => ls(i, 1 * 1846 + 7728 + -9484), aB = async (i) => ls(i, -728 + 883 * 5 + -3587, "image/png"), ds = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -3085 + 5 * 227 + -2 * -975, 2 * 3524 + -2524 + -4524, t.width, t.height), t;
}, us = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(4804 * -2 + 4336 + -2 * -2636, 9763 * 1 + 2214 * 1 + -11977, i.width, i.height);
  return t;
};
async function gB(i, n) {
  const t = ds(i, n);
  return aB(t);
}
const IB = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height), A.stroke());
}, Fi = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, IB(i, a, t);
};
function sB({ canvas: i, color: n, fill: t, offset: e = 431 * 19 + -573 * 3 + -6470, polygon: A }) {
  const o = i.getContext("2d");
  if (!o) return;
  const { bottomLeft: r, bottomRight: g, topLeft: a, topRight: I } = A;
  t ? o.fillStyle = n : o.strokeStyle = n, o.beginPath(), o.moveTo(a.x + e, a.y + e), o.lineTo(I.x + e, I.y + e), o.lineTo(g.x + e, g.y + e), o.lineTo(r.x + e, r.y + e), o.closePath(), t ? o.fill() : o.stroke();
}
const cB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, CB = (i, n) => Object.values(i).every((t) => cB(t, n));
function Gn(i) {
  const { height: n, width: t } = KC(i), e = (i.width - t) / (4 * 1192 + -1 * 7211 + -15 * -163), A = (i.height - n) / (-711 * -3 + -2596 + -465 * -1), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function xs(i, n, t) {
  const { height: e, width: A } = t, o = aa(i.width, i.height), r = A - o * n * (3388 + 1 * -3386), g = e - o * n * (-2287 + -1 * 8571 + 362 * 30), a = (i.width - r) / 2, I = (i.height - g) / (2 * 3629 + 3605 + 10861 * -1), Q = {};
  return Q.shiftX = a, Q.shiftY = I, Q.width = r, Q.height = g, Q;
}
function jo(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function BB(i, n) {
  return { ...i, topLeft: jo(i.topLeft, n), topRight: jo(i.topRight, n), bottomRight: jo(i.bottomRight, n), bottomLeft: jo(i.bottomLeft, n) };
}
function QB(i, n) {
  const t = JC(i), e = Math.min(n.width, n.height), A = t / e, o = { ...i };
  return o.smallestEdge = A, o;
}
function li() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function sg() {
  return /Android/i.test(navigator.userAgent);
}
function wt() {
  return /Firefox/i.test(navigator.userAgent);
}
function EB() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const lB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function dB() {
  return navigator.userAgent;
}
function uB() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function fA(i, n) {
  const t = Nn();
  return fA = function(e, A) {
    e = e - (973 + 190 * -3);
    let o = t[e];
    if (fA.XkYhyM === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      fA.MfttDi = Q, i = arguments, fA.XkYhyM = !0;
    }
    const g = t[6047 + -1 * -902 + 1 * -6949], a = e + g, I = i[a];
    return I ? o = I : (fA.FhJNEg === void 0 && (fA.FhJNEg = !0), o = fA.MfttDi(o, A), i[a] = o), o;
  }, fA(i, n);
}
(function(i, n) {
  function t(g, a, I, Q, s) {
    return fA(I - -907, s);
  }
  function e(g, a, I, Q, s) {
    return fA(g - -438, Q);
  }
  const A = i();
  function o(g, a, I, Q, s) {
    return fA(g - 549, I);
  }
  function r(g, a, I, Q, s) {
    return fA(Q - -6, s);
  }
  for (; ; )
    try {
      if (parseInt(r(413, 393, 409, 405, "f7Fn")) / 1 + parseInt(o(964, 956, "#]na", 973, 974)) / 2 + -parseInt(r(426, 432, 416, 423, "2k4W")) / 3 * (parseInt(o(955, 950, "cGgU", 952, 964)) / 4) + -parseInt(t(-494, -508, -500, -496, "pfnC")) / 5 * (parseInt(e(-35, -28, -34, "U*Q8", -36)) / 6) + -parseInt(o(977, 966, "jp[B", 965, 985)) / 7 + parseInt(r(412, 428, 403, 415, "ef!y")) / 8 * (-parseInt(e(-12, 1, -4, "a0Hq", -9)) / 9) + parseInt(t(-494, -517, -503, -499, "I33I")) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Nn, 1044574 + -1 * -155774 + 6 * -56110);
function Nn() {
  const i = ["W59FW4/dQwPIBmk9W4eQ", "gdapFK7cKSkiW73cM3hcNmoDga", "W7uBuCk1W6jXC8kl", "W6rFsmoa", "nmooW4nwW6yvwmkhWPCSBmkZ", "fILOixitWPVcMsZcKaaWWQhcOq", "ixZcOmo8W64", "nJ1sW77cL8omDmkVzJOyuG", "WRJcMNzzWOGBW7xdNq", "BSk2WQL8WQlcIL1yW5zznW", "WQ5FrutdLJldU8ofpmo1ax3dUSkA", "if3dSmkgWOi", "egKbWO3dJSkuvq", "queLWRBdRq", "r3tdKhxdHCkpDNVdRCkm", "qJ4yW4JdRgHE", "mmovl3tcRmopWPtcP8ole8ogz8kwiq", "qmoNWORdK8kxmMa0ruBcHZhdKa", "WPpdObqeW6ldPbtcUW", "brNcJmkSW5WgymoFtZr/WPTw", "WO5XDContCkJW4G8W5HgWPrxsCkB", "sLi+WQBdTG", "nd1vW7NcKCkfzmkzDGiv", "hCksWQ/dPq3cOCo5W7O", "tKuLWPNdRa", "WR8cgCknbrrle0ZdTYJcJW4", "wCogWPjwda"];
  return Nn = function() {
    return i;
  }, Nn();
}
function xB({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = lA(), A = t !== void 0;
  function o(a, I, Q, s, l) {
    return fA(a - 144, l);
  }
  function r(a, I, Q, s, l) {
    return fA(Q - -764, a);
  }
  _(() => {
    async function a() {
      await n[Q(639, 650, 646, "1A3m")](Qs(i));
      function I(s, l, C, E, d) {
        return fA(E - -577, s);
      }
      function Q(s, l, C, E, d) {
        return fA(C - 232, E);
      }
      e(n[Q(649, 639, 640, "aC#V") + I("Ix0K", -157, -143, -155) + Q(629, 643, 642, "8xSi") + "t"]());
    }
    a();
  }, [n, i, e]);
  const g = {};
  return g[o(549, 550, 539, 553, "aC#V") + o(568, 555, 580, 580, "aC#V")] = t, g[r("di#b", -350, -347) + "sh"] = A, g;
}
(function(i, n) {
  function t(a, I, Q, s, l) {
    return aA(Q - 145, I);
  }
  function e(a, I, Q, s, l) {
    return aA(l - -954, a);
  }
  function A(a, I, Q, s, l) {
    return aA(I - -386, a);
  }
  const o = i();
  function r(a, I, Q, s, l) {
    return aA(l - -627, s);
  }
  function g(a, I, Q, s, l) {
    return aA(l - -785, Q);
  }
  for (; ; )
    try {
      if (parseInt(A("C)bO", -1, 10, -16, -2)) / 1 * (parseInt(A("wFNK", -3, -2, 7, 7)) / 2) + parseInt(A("yEBO", -9, -6, -20, -23)) / 3 + -parseInt(e("!@6D", -569, -567, -555, -563)) / 4 + -parseInt(t(536, "$cw!", 521, 531, 531)) / 5 + parseInt(r(-235, -240, -218, "g[i(", -225)) / 6 + -parseInt(A("2SNb", -4, -1, -6, -13)) / 7 * (-parseInt(e("(N@b", -546, -564, -574, -560)) / 8) + -parseInt(g(-394, -405, "rz)R", -385, -395)) / 9 * (-parseInt(A("C)bO", 2, -5, 14, -9)) / 10) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Rn, 5378 * 275 + -9 * 133657 + -157 * -3571);
function aA(i, n) {
  const t = Rn();
  return aA = function(e, A) {
    e = e - (-1 * -1989 + -5864 + 4249);
    let o = t[e];
    if (aA.LteNGU === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      aA.nDgKBs = Q, i = arguments, aA.LteNGU = !0;
    }
    const g = t[7347 * -1 + 453 * 22 + 3 * -873], a = e + g, I = i[a];
    return I ? o = I : (aA.XHaWIk === void 0 && (aA.XHaWIk = !0), o = aA.nDgKBs(o, A), i[a] = o), o;
  }, aA(i, n);
}
function Rn() {
  const i = ["wxdcJL4xW5tcJwPvWOtdPNjq", "W5zPW7i", "WOldR8kI", "WORdN8kOEWLmF8k4WOL+xsxdKW", "vMGTjSoiWPNdK0JdTwNcNCkJWQ4", "zxuzW6ZcVeulq8kqC8kWWR0", "xb8hW5/cOfBdK8kCgWPaera", "W5NcL8oFh8ks", "WOpdV0uhWOi", "WPNdOCkdxCooy8kBW40mWRjyWPHz", "WPZdSCoZqvqOWP4", "hNddISkHgmkvoa", "W77dQmkSW5qjW7RcNmouW5ezW6RdVSoU", "arvXW6HmWQKOmmkFuSotWP0", "W4NdUSk3qSk9", "cCoIWRuKWQe", "arzXW6LoW6qwa8krtSo5", "W7FdVhihW5G", "bZH5sL3dVSoptSkZwa", "WPZdOSkexmogBCktW78dWQrRWQXh", "EIvZlG", "x8koWQ97WR0czSkMxmoDWOBdMW", "WRLWAJXoWOBcLSoYW4z8WRfotq", "rSkoW4HhtSkNW50", "W6blWRfQfG", "W7pcVSoSWQ1fWOJdRq", "uNBcGLOrW5BdIxrKWPVdJ3C", "gcpcHSoDumkOm28uy0a", "lCk+W4WzWOK", "W6qFyYlcRXXeexuZ"];
  return Rn = function() {
    return i;
  }, Rn();
}
function hB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  function e(C, E, d, u, B) {
    return aA(d - -129, E);
  }
  const A = {};
  function o(C, E, d, u, B) {
    return aA(d - 97, E);
  }
  A[l(1324, "MeF6") + "le"] = t, A[o(496, "t68o", 484) + o(473, "!@6D", 476) + o(483, "wQ)H", 483) + e(277, "ME9^", 263)] = i;
  const { sunfish: r, crosshatch: g } = xB(A), a = dA(() => ({ sunfish: r, crosshatch: g, bramble: t }), [r, g, t]);
  function I(C, E, d, u, B) {
    return aA(u - 957, B);
  }
  const Q = {};
  function s(C, E, d, u, B) {
    return aA(d - -627, u);
  }
  Q[s(-233, -218, -231, "#S4]")] = a, Q[o(502, "fo6u", 497) + l(1347, "kb@o")] = n;
  function l(C, E, d, u, B) {
    return aA(C - 944, E);
  }
  return w(kn[I(1357, 1335, 1333, 1346, "u*uj") + l(1318, "JWMO")], Q);
}
(function(i, n) {
  var t = i();
  function e(a, I, Q, s, l) {
    return jA(l - -67, I);
  }
  function A(a, I, Q, s, l) {
    return jA(l - -49, a);
  }
  function o(a, I, Q, s, l) {
    return jA(s - 515, l);
  }
  function r(a, I, Q, s, l) {
    return jA(I - 756, a);
  }
  for (; ; )
    try {
      var g = parseInt(A("j@Mx", 451, 447, 448, 451)) / 1 + -parseInt(A("1FjC", 448, 446, 449, 443)) / 2 + -parseInt(r("Y*rE", 1242, 1249, 1250, 1239)) / 3 + -parseInt(r("!YLR", 1254, 1246, 1247, 1250)) / 4 + parseInt(r("r^FM", 1249, 1243, 1257, 1247)) / 5 + parseInt(A("RLGb", 447, 444, 440, 448)) / 6 + parseInt(o(1015, 1006, 1017, 1009, "7lJu")) / 7 * (parseInt(e(437, "MWnn", 423, 433, 429)) / 8);
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(vn, 346059);
function jA(i, n) {
  var t = vn();
  return jA = function(e, A) {
    e = e - (-4001 + -1 * -4487);
    var o = t[e];
    if (jA.pkPIqc === void 0) {
      var r = function(s) {
        for (var l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (var p = 0, m = C.length; p < m; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(s, l) {
        var C = [], E = 0, d, u = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      jA.xwkwTQ = g, i = arguments, jA.pkPIqc = !0;
    }
    var a = t[-1 * -4023 + -20 * 31 + -3403], I = e + a, Q = i[I];
    return Q ? o = Q : (jA.uykdmw === void 0 && (jA.uykdmw = !0), o = jA.xwkwTQ(o, A), i[I] = o), o;
  }, jA(i, n);
}
function vn() {
  var i = ["sMmZW6DDgfq", "mCk5W5XRWQeIkIhcPt4VWPK", "W7ddH8oUvSkZWPf/W6rjWQbK", "WR5rWORdMmk/WRRdMSozW67cKCoDW6FdRq", "BaveWQ44st5PWQ/cGmkLsCo8", "y8k1dSoNE3FdPCodFmkyeru", "r8kVWOOJtmkAnbLhWPLHW7e", "lCoRjta4W4JdRW", "CI4anCo1rIGHdCo3qCoI", "W7FdGSoRv8k2W5ynW4rCWQ1EkbS", "hX0uWQpcPapdHbddP8kOWRlcQmkh", "ibGEyglcHXVdT8k+b27dHSkH", "W7jlbmoSWOBdVCo2eCkDjSkxW4Cw", "W47dKqzrdLJdMhm3W43cSW", "vrOLhCoWdSoLW4yXrSkixG", "W4/cOCozWR18W6/dRdzHE2JcQW"];
  return vn = function() {
    return i;
  }, vn();
}
const Fn = Ue(void 0);
Fn.displayName = "TransactionCountingContext";
function hs() {
  const i = Ee(Fn);
  if (i === void 0)
    throw new Error(`${Fn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const fB = 1 * -7937 + 9294 + 643 * 1;
class pB {
  constructor(n) {
    y(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), fB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -4497 * -1 + -5004 + -907 * -1 && g.status !== 31 * 305 + 41 * -142 + -3232 : !0;
  }
}
var bt, he, Fe, kt, Co, Bo, Qo, Eo;
class fs {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    O(this, bt);
    O(this, he);
    O(this, Fe);
    O(this, kt);
    O(this, Co);
    O(this, Bo);
    O(this, Qo);
    O(this, Eo);
    M(this, bt, t), M(this, Co, n), M(this, Eo, e), M(this, Bo, window.location.origin), M(this, Qo, "7.7.0");
  }
  async init(n) {
    if (M(this, Fe, this.shouldCountTransactions(n)), console.info("Transaction counting is " + (b(this, Fe) ? "enabled" : "disabled")), Bs()) {
      M(this, he, !0), M(this, Fe, !1);
      return;
    }
    if (!b(this, Fe)) {
      M(this, he, !0);
      return;
    }
    if (M(this, kt, b(this, bt).transactionCountingToken), !b(this, kt)) {
      console.warn("Transaction counting token is missing"), M(this, he, !1);
      return;
    }
    M(this, he, await b(this, bt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !1 : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeTransactionReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeTransactionReportingEnabled : !1;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!b(this, Fe) || !b(this, he)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = b(this, Co), e.id = b(this, Bo), e.version = b(this, Qo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = b(this, Eo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + b(this, kt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return b(this, he) || !1;
  }
}
bt = new WeakMap(), he = new WeakMap(), Fe = new WeakMap(), kt = new WeakMap(), Co = new WeakMap(), Bo = new WeakMap(), Qo = new WeakMap(), Eo = new WeakMap();
class yB extends fs {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const je = {};
je.FACE = "web-capture-face", je.DOCUMENT = "web-capture-document", je.MAGNIFEYE = "web-capture-magnifeye", je.SMILE = "web-capture-smile", je.PALM = "web-capture-palm", je.EYEGAZE = "web-capture-eyegaze";
const _e = je, wr = {};
wr.LIVENESS = "liveness", wr.CAPTURE = "capture";
const Re = wr, mB = { [_e.FACE]: Re.CAPTURE, [_e.DOCUMENT]: Re.CAPTURE, [_e.MAGNIFEYE]: Re.LIVENESS, [_e.SMILE]: Re.LIVENESS, [_e.PALM]: Re.CAPTURE, [_e.EYEGAZE]: Re.LIVENESS }, wB = mB;
class DB {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = wB[e];
    switch (A) {
      case Re.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new fs(o);
      case Re.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new yB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function bB(i, n) {
  const { crosshatch: t, bramble: e } = No(), [A, o] = lA(null);
  _(() => {
    if (!t) return;
    (async () => {
      const a = new DB(), I = new pB(n), Q = a.create({ hwids: e.getHwids(), tokenHandler: I, transactionType: i });
      await Q.init(t), o(Q);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function kB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = bB(t, n), A = dA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ w(Fn.Provider, { value: A, children: i });
}
function SB({ children: i, value: n }) {
  const { crosshatch: t } = No(), { transactionCounting: e } = hs(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? wn.Higher : wn.Lower, o = dA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ w(Ei.Provider, { value: o, children: i });
}
class ps extends qA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new D("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === sA.ERROR ? null : this.props.children;
  }
}
y(ps, "contextType", Ei);
const GB = Go.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, NB = Go.div`
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
function RB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const vB = DI(
  ({ detectionDetails: i, isImageMirror: n }, t) => RB() ? (console.log(i), /* @__PURE__ */ w(te, { children: [
    /* @__PURE__ */ w(GB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(NB, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), Mn = Ue(void 0);
Mn.displayName = "AnalyticsContext";
function FB() {
  const i = Ee(Mn);
  if (i === void 0)
    throw new Error(`${Mn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function MB({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function WB({ analytics: i, apiKey: n, redfin: t, countlyAppKey: e, crosshatch: A, bramble: o }) {
  const r = {};
  r.analytics = i, r.crosshatch = A;
  const g = MB(r);
  return _(() => {
    g && g.init(e, o.getCustomerName(), n);
  }, [g, e, o, n]), _(() => {
    A && (console.info("Analytics is " + (g != null && g.shouldReportAnalytics(A) ? "enabled" : "disabled")), g && g.walleye(t, o.getCustomerName()));
  }, [g, o, A, t]), _(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function LB({
  analytics: i,
  apiKey: n,
  children: t,
  countlyAppKey: e
}) {
  const { crosshatch: A, bramble: o } = No(), { redfin: r } = ne(), g = WB({
    analytics: i,
    redfin: r,
    countlyAppKey: e,
    crosshatch: A,
    bramble: o,
    apiKey: n
  }), a = dA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ w(Mn.Provider, { value: a, children: t });
}
const sa = Ue(void 0);
sa.displayName = "CameraOptionsContext";
function ys() {
  const i = Ee(sa);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}
function OB({
  assetsDirectoryPath: i,
  candidateSelectionDurationMillis: n,
  captureMode: t,
  isVideoCaptureEnabled: e,
  onPhotoTaken: A,
  sessionToken: o,
  transactionCountingToken: r
}) {
  return {
    onPhotoTaken: A,
    captureMode: t ?? ur.AUTO_CAPTURE,
    assetsDirectoryPath: Qs(i),
    sessionToken: o,
    candidateSelectionDurationMillis: n,
    transactionCountingToken: r,
    isVideoCaptureEnabled: e
  };
}
function JB({
  cameraOptions: i,
  children: n
}) {
  const t = dA(() => OB(i), [i]);
  return /* @__PURE__ */ w(sa.Provider, { value: t, children: n });
}
const cg = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, ii = class ii {
  constructor() {
    y(this, "lastDetails");
    y(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 8129 * -1 + -6762 + 14891;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ii()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -477 * 3 + -7351 + -4391 * -2;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && cg(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    cg(n, t);
  }
};
y(ii, "_instance");
let so = ii;
const Ro = so.getInstance(), ms = (i, n, t = YC) => {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  Ro.dispatchDelayedCustomEventOnChange(i, A, t);
}, Cg = (i, n) => {
  Ro.dispatchCustomEventOnChange(i, n);
}, UB = (i, n) => {
  Ro.dispatchCustomEventOnChange(i, n);
}, YB = (i, n) => {
  const t = {};
  t.size = n;
  const e = t;
  Ro.dispatchCustomEventOnChange(i, e);
}, PB = (i, n, t) => {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  Ro.dispatchCustomEventOnChange(i, o);
}, TB = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  _(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, UB(i, A);
  }, [t, e, i]);
};
function HB(i, n) {
  _(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const KB = (i) => i === ns.CONTROL ? !li() : !0;
function jB(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = ne(), [r, g] = lA(), a = dA(() => {
    const E = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return E ? r ?? E === "user" : r ?? KB(i);
  }, [n, r, i, o]);
  function I() {
    t !== sA.LOADING && e(sA.RUNNING);
  }
  function Q() {
    g(r === void 0 ? !a : !r);
  }
  async function s() {
    if (n) {
      e(sA.LOADING);
      try {
        await n.switchCamera(), e(sA.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          A(D.fromCameraError(E));
          return;
        }
      }
      g(void 0);
    }
  }
  function l(E) {
    var d;
    switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
      case Gi.CONTINUE_DETECTION:
        I();
        break;
      case Gi.TOGGLE_MIRROR:
        Q();
        break;
      case Gi.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  HB(i, l);
  const C = {};
  return C.shouldCameraMirror = a, C;
}
function _B(i, n) {
  _(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      YB(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
var qB = Symbol.for("preact-signals");
function di() {
  if (Le > -25 * -16 + -3014 * -1 + 3413 * -1)
    Le--;
  else {
    for (var i, n = !1; ao !== void 0; ) {
      var t = ao;
      for (ao = void 0, Dr++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(6344 + 1 * 6874 + -13210 & t.f) && bs(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Dr = -971 * 2 + -1 * 3907 + 5849, Le--, n) throw i;
  }
}
function VB(i) {
  if (Le > 4221 + 95 * 89 + -12676) return i();
  Le++;
  try {
    return i();
  } finally {
    di();
  }
}
var Y = void 0, ao = void 0, Le = -5712 + 2 * -3221 + 12154, Dr = 1186 * -2 + 3866 * 2 + 1072 * -5, Wn = 235 * 17 + 157 * -33 + 1186;
function ws(i) {
  if (Y !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== Y)
      return n = { i: 0, S: i, p: Y.s, n: void 0, t: Y, e: void 0, x: void 0, r: n }, Y.s !== void 0 && (Y.s.n = n), Y.s = n, i.n = n, 16659 + 13 * -1279 & Y.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 339 * 1 + 4805 + -2 * 2572, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = Y.s, n.n = void 0, Y.s.n = n, Y.s = n), n;
  }
}
function CA(i) {
  this.v = i, this.i = -709 * 11 + 6848 + 3 * 317, this.n = void 0, this.t = void 0;
}
CA.prototype.brand = qB, CA.prototype.h = function() {
  return !0;
}, CA.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
}, CA.prototype.U = function(i) {
  if (this.t !== void 0) {
    var n = i.e, t = i.x;
    n !== void 0 && (n.x = t, i.e = void 0), t !== void 0 && (t.e = n, i.x = void 0), i === this.t && (this.t = t);
  }
}, CA.prototype.subscribe = function(i) {
  var n = this;
  return vo(function() {
    var t = n.value, e = Y;
    Y = void 0;
    try {
      i(t);
    } finally {
      Y = e;
    }
  });
}, CA.prototype.valueOf = function() {
  return this.value;
}, CA.prototype.toString = function() {
  return this.value + "";
}, CA.prototype.toJSON = function() {
  return this.value;
}, CA.prototype.peek = function() {
  var i = Y;
  Y = void 0;
  try {
    return this.value;
  } finally {
    Y = i;
  }
}, Object.defineProperty(CA.prototype, "value", { get: function() {
  var i = ws(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Dr > 11916 + -844 * 14) throw new Error("Cycle detected");
    this.v = i, this.i++, Wn++, Le++;
    try {
      for (var n = this.t; void (-4366 * 1 + -567 + 4933) !== n; n = n.x) n.t.N();
    } finally {
      di();
    }
  }
} });
function Ds(i) {
  return new CA(i);
}
function bs(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function ks(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function Ss(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function ft(i) {
  CA.call(this, void 0), this.x = i, this.s = void 0, this.g = Wn - (-5742 + -1 * 8543 + -2381 * -6), this.f = 330 * -1 + 397 * -3 + 1 * 1525;
}
(ft.prototype = new CA()).h = function() {
  if (this.f &= -3, 1984 + -925 * 7 + 2246 * 2 & this.f) return !1;
  if (4017 * 1 + -2203 * 1 + -1782 == (1 * -6310 + -6824 + 6585 * 2 & this.f) || (this.f &= -5, this.g === Wn)) return !0;
  if (this.g = Wn, this.f |= -317 * 23 + 128 * -50 + 13692, this.i > 1 * 641 + 8432 + -9073 && !bs(this)) return this.f &= -2, !0;
  var i = Y;
  try {
    ks(this), Y = this;
    var n = this.x();
    (-4 * 17 + 1 * -2259 + 213 * 11 & this.f || this.v !== n || 3 * -2589 + -3548 + 11315 === this.i) && (this.v = n, this.f &= -(-2219 + -86 * -26), this.i++);
  } catch (t) {
    this.v = t, this.f |= -7765 + 1 * -545 + 8326, this.i++;
  }
  return Y = i, Ss(this), this.f &= -2, !0;
}, ft.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 1282 * 4 + -3426 + -1666 * 1;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  CA.prototype.S.call(this, i);
}, ft.prototype.U = function(i) {
  if (this.t !== void 0 && (CA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, ft.prototype.N = function() {
  if (!(3 * -487 + -2405 + 3868 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(ft.prototype, "value", { get: function() {
  if (95 * 45 + 6413 + -10687 & this.f) throw new Error("Cycle detected");
  var i = ws(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 9744 + 1296 * 1 + -104 * 106 & this.f) throw this.v;
  return this.v;
} });
function Bg(i) {
  return new ft(i);
}
function Gs(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    Le++;
    var t = Y;
    Y = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= -3039 + -1591 * 5 + 2 * 5501, ca(i), e;
    } finally {
      Y = t, di();
    }
  }
}
function ca(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, Gs(i);
}
function ZB(i) {
  if (Y !== this) throw new Error("Out-of-order effect");
  Ss(this), Y = i, this.f &= -2, 9570 + 1 * 3482 + -1 * 13044 & this.f && ca(this), di();
}
function $t(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 377 * 26 + 440 * 22 + -19450;
}
$t.prototype.c = function() {
  var i = this.S();
  try {
    if (-3 * -2669 + 9837 + -17836 & this.f || void (-2555 * -1 + -154 * -13 + -4557 * 1) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, $t.prototype.S = function() {
  if (2046 * -4 + 81 + -4052 * -2 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Gs(this), ks(this), Le++;
  var i = Y;
  return Y = this, ZB.bind(this, i);
}, $t.prototype.N = function() {
  !(2 & this.f) && (this.f |= 2, this.o = ao, ao = this);
}, $t.prototype.d = function() {
  this.f |= 6438 + -2405 * -3 + -2729 * 5, 1 & this.f || ca(this);
};
function vo(i) {
  var n = new $t(i);
  try {
    n.c();
  } catch (t) {
    throw n.d(), t;
  }
  return n.d.bind(n);
}
var Ns, Mi, Rs = [];
vo(function() {
  Ns = this.N;
})();
function mt(i, n) {
  F[i] = n.bind(null, F[i] || function() {
  });
}
function _o(i) {
  Mi && Mi(), Mi = i && i.S();
}
function vs(i) {
  var n = this, t = i.data, e = Fs(t);
  e.value = t;
  var A = dA(function() {
    for (var g = n, a = n.__v; a = a.__; ) if (a.__c) {
      a.__c.__$f |= 4;
      break;
    }
    var I = Bg(function() {
      var C = e.value.value;
      return C === 0 ? 3164 + -1037 * -7 + 1489 * -7 : C === !0 ? "" : C || "";
    }), Q = Bg(function() {
      return !Array.isArray(I.value) && !oI(I.value);
    }), s = vo(function() {
      if (this.N = Ms, Q.value) {
        var C = I.value;
        g.__v && g.__v.__e && 49 * -27 + -23 * 428 + 11170 === g.__v.__e.nodeType && (g.__v.__e.data = C);
      }
    }), l = n.__$u.d;
    return n.__$u.d = function() {
      s(), l.call(this);
    }, [Q, I];
  }, []), o = A[-7729 + 7729 * 1], r = A[-6791 + -65 * -42 + 4062];
  return o.value ? r.peek() : r.value;
}
vs.displayName = "_st";
var br = {};
br.configurable = !0, br.value = void 0;
var kr = {};
kr.configurable = !0, kr.value = vs;
var Sr = {};
Sr.configurable = !0, Sr.get = function() {
  var i = {};
  return i.data = this, i;
};
var Gr = {};
Gr.configurable = !0, Gr.value = 1;
var qt = {};
qt.constructor = br, qt.type = kr, qt.props = Sr, qt.__b = Gr, Object.defineProperties(CA.prototype, qt), mt("__b", function(i, n) {
  if (typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof CA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), mt("__r", function(i, n) {
  _o();
  var t, e = n.__c;
  e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var o;
    return vo(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 52 * -149 + 147 * -7 + 8778, e.setState({});
    }, o;
  }())), _o(t), i(n);
}), mt("__e", function(i, n, t, e) {
  _o(), i(n, t, e);
}), mt("diffed", function(i, n) {
  _o();
  var t;
  if (typeof n.type == "string" && (t = n.__e)) {
    var e = n.__np, A = n.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var g = o[r];
        g !== void 0 && !(r in e) && (g.d(), o[r] = void 0);
      }
      else o = {}, t.U = o;
      for (var a in e) {
        var I = o[a], Q = e[a];
        I === void 0 ? (I = zB(t, a, Q, A), o[a] = I) : I.o(Q, A);
      }
    }
  }
  i(n);
});
function zB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = Ds(t);
  return { o: function(r, g) {
    o.value = r, e = g;
  }, d: vo(function() {
    this.N = Ms;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
mt("unmount", function(i, n) {
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
      var g = r.__$u;
      g && (r.__$u = void 0, g.d());
    }
  }
  i(n);
}), mt("__h", function(i, n, t, e) {
  (e < 3 || 339 + -55 * 6 === e) && (n.__$f |= 1 * 6689 + 7492 + 14179 * -1), i(n, t, e);
}), qA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || -2476 + 2 * 1240 & this.__$f) || 9499 + 1 * 4857 + 957 * -15 & this.__$f) return !0;
  } else if (!(e || -6215 + -632 * 14 + 15067 & this.__$f) || 571 * -9 + -6185 + 241 * 47 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var g in this.props) if (!(g in i)) return !0;
  return !1;
};
function Fs(i) {
  return dA(function() {
    return Ds(i);
  }, []);
}
var XB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function $B() {
  VB(function() {
    for (var i; i = Rs.shift(); ) Ns.call(i);
  });
}
function Ms() {
  -715 + -1 * 3352 + 4068 === Rs.push(this) && (F.requestAnimationFrame || XB)($B);
}
const Ln = Ue(void 0);
Ln.displayName = "CameraServiceContext";
function AQ() {
  const i = Ee(Ln);
  if (i === void 0)
    throw new Error(`${Ln.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function Ws() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Wi() {
  return (await Ws()).filter((n) => n.kind === "videoinput");
}
function Dt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Nr(i) {
  return i.getVideoTracks()[3979 + -173 * 23];
}
function On() {
  const i = ["gLBcVabqWPNdQSo2WOKy", "BmkEgc1uywqbWRjnWQpcSa", "eMa8WQWDWQzIW5FcL8kWEa", "sWNcG8omW6FdH1NcOG", "W5RcQWmzfSo1vqtdUmkiW6u", "WRy+BSkAsa", "ugjWwmok", "dSkUWO/dICok", "dgVcMmoaaW", "WPOqzSk4Dq", "W7lcS0StsKGer8kfaCkqW47dSa", "tt/dHmo8kSoinmoWEW", "eCkRfmk9WOtcQCkVWPGB", "st/dI8khnCo2imoLteW", "BmovCvxcKq", "wSoUW5xdLmoGW7VcJSkCW6C", "FLj/W7XwWOFdG8klW7vFWRRdKq", "W6BdR8kpW5Ko", "W7K0FCkaWOdcPbxcK8kHW5ZcO8oZWOi", "WPW3W6tdTCoL", "d3VdMfVdIa", "dCkpWR3dRCkt", "iHn2WQdcIKLkiW", "W7OWjCoLW6xdGgBcSa", "amk9WPldP8oM", "fWSIWQmgcSovWRflwg3cOfO", "WRRcUSosW5eWWRhdRCkuWOO", "z8ksDHFcSa", "Bmokm2RcIG", "nSkamIldI1ZdSZRcTctcG3NcUW", "W7tcSemxt09EvmkbeSkPW54", "xmoQW5tcKmkXW7NcPSkMW5BdQf8", "oSotvh0T", "vmoDW6RcUmoFW6qzxu9sW5e", "uq3dG8k0WPS", "W6Trea", "gfhcUqy8W4tdJCoaWOaXWQa0", "WPTqW7JcOdW", "ubhdJCkN", "wSkKqedcIq", "W78YbCo9W6hdKf3cQG"];
  return On = function() {
    return i;
  }, On();
}
function pA(i, n) {
  const t = On();
  return pA = function(e, A) {
    e = e - (-428 * 1 + 9 * 743 + 541 * -11);
    let o = t[e];
    if (pA.OmSMjf === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      pA.YOttWw = Q, i = arguments, pA.OmSMjf = !0;
    }
    const g = t[23 * 151 + 8612 + -5 * 2417], a = e + g, I = i[a];
    return I ? o = I : (pA.tvqqYA === void 0 && (pA.tvqqYA = !0), o = pA.YOttWw(o, A), i[a] = o), o;
  }, pA(i, n);
}
(function(i, n) {
  function t(a, I, Q, s, l) {
    return pA(I - 542, s);
  }
  function e(a, I, Q, s, l) {
    return pA(s - -567, l);
  }
  function A(a, I, Q, s, l) {
    return pA(a - 846, l);
  }
  function o(a, I, Q, s, l) {
    return pA(Q - -244, I);
  }
  const r = i();
  function g(a, I, Q, s, l) {
    return pA(a - 35, s);
  }
  for (; ; )
    try {
      if (parseInt(g(375, 359, 387, "(377", 375)) / 1 + -parseInt(g(346, 345, 334, "Lgh(", 363)) / 2 + -parseInt(A(1184, 1179, 1169, 1189, "(377")) / 3 * (-parseInt(o(84, "GN]L", 87, 87, 79)) / 4) + parseInt(o(92, "#paL", 84, 86, 97)) / 5 * (parseInt(e(-248, -262, -242, -241, "A(le")) / 6) + parseInt(e(-258, -262, -267, -252, "Cfo1")) / 7 + parseInt(o(92, "kbPv", 75, 70, 68)) / 8 * (-parseInt(t(888, 881, 875, "tOky", 868)) / 9) + parseInt(e(-270, -265, -247, -259, "Z42o")) / 10 * (parseInt(t(849, 864, 860, "$mnD", 843)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(On, -1 * -906662 + 7 * -168914 + 1006290);
function eQ(i) {
  const n = new ArrayBuffer(i[A(-58, -82, -62, -75, "5TTb") + "h"]), t = new Uint8Array(n);
  for (let r = -6436 + 5168 * -1 + 11604, g = i[o(468, "kbPv", 450) + "h"]; r < g; r++)
    e(1239, 1231, 1250, 1244, ")5rW") === e(1229, 1236, 1232, 1212, "1%[!") ? _0x4689b6[_0x5e0f67] = _0x584580[o(435, "jyj0", 422) + A(-57, -47, -55, -58, "1%[!")](_0x2a01eb) : t[r] = i[A(-68, -63, -73, -80, "V%am") + e(1237, 1256, 1235, 1235, "nhz[")](r);
  function e(r, g, a, I, Q) {
    return pA(r - 893, Q);
  }
  function A(r, g, a, I, Q) {
    return pA(a - -387, Q);
  }
  function o(r, g, a, I, Q) {
    return pA(a - 102, g);
  }
  return n;
}
function Z(i, n) {
  const t = Jn();
  return Z = function(e, A) {
    e = e - 139;
    let o = t[e];
    if (Z.xAjLWl === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      Z.KtohlB = Q, i = arguments, Z.xAjLWl = !0;
    }
    const g = t[5 * -1943 + -1150 + 265 * 41], a = e + g, I = i[a];
    return I ? o = I : (Z.BHNQZi === void 0 && (Z.BHNQZi = !0), o = Z.KtohlB(o, A), i[a] = o), o;
  }, Z(i, n);
}
(function(i, n) {
  function t(a, I, Q, s, l) {
    return Z(a - 569, s);
  }
  function e(a, I, Q, s, l) {
    return Z(l - -791, s);
  }
  function A(a, I, Q, s, l) {
    return Z(s - 674, I);
  }
  const o = i();
  function r(a, I, Q, s, l) {
    return Z(I - 711, l);
  }
  function g(a, I, Q, s, l) {
    return Z(a - 266, I);
  }
  for (; ; )
    try {
      if (-parseInt(g(433, "lpYI", 427, 442, 429)) / 1 + parseInt(t(726, 713, 734, "1SaY", 701)) / 2 + -parseInt(t(741, 728, 733, "cv$p", 760)) / 3 + parseInt(r(893, 871, 864, 896, "U^kt")) / 4 + -parseInt(e(-606, -588, -631, "5f0D", -609)) / 5 + -parseInt(A(806, "dvzv", 841, 833, 837)) / 6 + parseInt(e(-654, -644, -621, "ap]v", -628)) / 7 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Jn, 60898 * -4 + 294505 + -91947 * -9);
async function tQ() {
  const i = {};
  i[t(562, 546, 586, 576, "IXEV")] = ss, i[t(549, 568, 556, 550, "dyvs") + "h"] = 256;
  const n = await window[t(573, 589, 598, 597, "P3Y7") + "o"][g(671, 656, 644, 657, "Kl]l") + "e"][I(-597, -595, "5jPd") + I(-606, -626, "ygWK") + "y"](i, !0, [g(671, 650, 671, 653, "X$)o") + "pt", I(-626, -621, "x(!q") + "pt"]);
  function t(Q, s, l, C, E) {
    return Z(Q - 409, E);
  }
  const e = Uint8Array[t(575, 558, 583, 595, "XNy9")](Array(-1 * -7783 + 446 + -8213)[I(-591, -574, "$sOx")](-981 * -2 + 4395 + -6357));
  function A(Q, s, l, C, E) {
    return Z(s - -108, Q);
  }
  const o = window[g(631, 644, 665, 658, "$sOx") + "o"][A("gFFy", 75) + g(686, 656, 655, 680, "A]WY") + r(-89, -94, -80, "NXq(")](e);
  function r(Q, s, l, C, E) {
    return Z(Q - -233, C);
  }
  function g(Q, s, l, C, E) {
    return Z(C - 506, E);
  }
  const a = {};
  a[A("TR)!", 76)] = n, a.iv = o;
  function I(Q, s, l, C, E) {
    return Z(Q - -782, l);
  }
  return a;
}
async function oQ(i) {
  const { iv: n, key: t } = await tQ(), e = {};
  function A(Q, s, l, C, E) {
    return Z(s - -332, E);
  }
  function o(Q, s, l, C, E) {
    return Z(s - 211, Q);
  }
  e[A(-164, -151, -152, -143, "cv$p")] = ss, e.iv = n;
  const r = await window[A(-195, -193, -185, -201, "3M*P") + "o"][o("V!qb", 391) + "e"][o("ihiN", 365) + "pt"](e, t, i), g = await window[A(-168, -163, -153, -159, "1gq3") + "o"][a(-147, -148, -122, -148, "5f0D") + "e"][A(-123, -142, -140, -128, "^K29") + A(-160, -174, -183, -156, "M0KO")](A(-178, -153, -156, -164, "1SaY"), t);
  function a(Q, s, l, C, E) {
    return Z(Q - -290, E);
  }
  const I = {};
  return I[o("pzl7", 360) + "ge"] = r, I[a(-125, -147, -122, -129, "ihiN")] = g, I.iv = n, I;
}
async function nQ(i) {
}
function Jn() {
  const i = ["qXSgW7NdI8oIadyUxmkteHu", "wZmsdG", "WPZdS8oIWRhdV8kxW6DzW5rmWOODua", "dWHTBW", "W64bAtpcMa", "WPykWOZdUmkOgCoyW6v/bSk6zq", "gL5sWORcNa", "rrKNEdK", "zmo+AXLA", "haNdKq", "iZ4DWRxcQq", "W4dcOSk4W6q", "WQbaWRjbxSoMWORdJMr6WRaesq", "uJCloCoo", "WOLMjW", "W6lcIsVcJ1m", "m8kGp0ygWO/dKCocW6DAFcldJW", "W57cJSk5W5S", "omoUWPypWPldL3tdQr3dSZhcJmkUnq", "W4nEWQFcO8oa", "x8oKqcxcHW", "rgdcLxq", "W6akbbfD", "w2TDbXO", "WRtcHSoJCxm", "zNjjW7hdSeyvzqvtD2lcKG", "W6SeW6enaa", "W7pcR0ayW6C", "W5aYASoqW4tdMrBdLd3cQcW/zq", "W7JdK8kG", "vv9OrJG", "AmkfimkOWQu", "WQ3cVMBcUSo5", "W6ZcGtxcHvm", "W7ddKrXDuq", "qxVcGgHq", "D8oTWOj1", "W7miW7OQbq", "zmo+AWrh", "F8kviCkUWRa", "xfNcKKdcTConxmkeW7FcMcLUaG", "rJpcSJa", "WPmcWO3dTCkKeCkJW6L4emkaEvS", "WO3cO0qNW4zSW4awW4vsq1GP", "WPNcGSoLW74", "btCevfRcHvZcKbRdNhhdOmoD", "dg3cRSomWQ9GW5JcRWddImkiWPirW4a", "W6pcTSo9WPBcMa", "W70dW6a", "kH9kWQe", "thi+l8oEB8o+W48uW5hdP8or", "WPVcHmoZW6Xs", "W6NdGmkUeKq"];
  return Jn = function() {
    return i;
  }, Jn();
}
function Un() {
  const i = ["eSoVW7LEWOe", "tSk+lvi", "pZG4aWi", "hCoeW4bcW4q", "BColW5SLxq", "rCkjkJlcNSotW4WAWP9g", "W7GyW7Ld", "c0K7jJ0", "setdIdTz", "W4lcQ8odWPxcOq", "WOm7W5q", "WRlcL3hdPKW", "tZCduam", "WQ/dU8kP", "CmkWlG", "vXFdTCoP", "A1RcOcS7W7TkEtb9", "lHJdO3Oh", "yXFdSSo4", "WRpdUSk0WRZcOW", "BNzHve/cPcGeW4/cG8ktCHm", "W7mpWQNcQca", "AaNdPZJdIq", "WQFdRSk2WPhcRa", "qCkjjvNcUmouW5O4WOa", "uKhdIZ9M", "FIhcLSoKWPW", "ptybogxdMmotW7LQpCkJFr8", "W7b3WRZdM14", "W6GtEmkZvdldI8oCoCky", "o0yW", "oXvqga", "WOD4WR7cJmo0", "dmo6W7nRWO0", "W5JcPmorWOm", "ySkPFSkp", "W4KPhmogW6a", "WQ3cM3ZdTuW", "sfhdQIT4", "WQ9ujSoTzW", "W4hcOCkXW6e", "W57cOmo5iSog", "WPbHWQVcHSoV", "WQ/dJmkVWONcOq", "cbhcMM49WQ16WRP5WOT6WOdcQa", "d8ovW4vvW5G", "nmkgiCosFG", "aKlcSSkTtColxWlcTSkbAXKy", "W6uhW6jgBG", "x8omW4KLAq", "wmkTy8knW6a", "cmoNW6v+WOW", "WQFdQCkCWPZcRq", "iNZcHCo1W4SlW6BdGCo+W6i", "svZdRtfK", "fSoQW6rRWOG", "WRzFzSodW5a", "e8oHW7y", "WOq4W4NdIa", "WPNcSJayWPK", "W6BdR8osiu4", "hSo9W7u", "W57cSmoM", "W4FcJ8kNcapcUZS0W5S5WR7cLmkjWPu", "W6tdQmovdui", "WRVcKhFdS1a", "WPxcVqJcN8o0", "srLvWQVdPc7dHmojWQNdQSk8WONcTq", "W6SqD8k0p07cJSohdCkKWOGGaa", "l14/faa", "qLhdUmkVrW", "cbdcLGz+W5uLWO1J", "ACoWW6Dbra", "q0JdUCkC", "e0qdW7ZcSa", "W6pcLmo2xmkc", "W63cHLaZiG", "dCo7W69oWPe", "wCkMFSkz", "WQXxESoJW50", "jSkqcSovEa", "pmkak8obzG", "ordcSSk6ya", "kxpdOCk0W4RdTX7dKsNdRaKMW5u", "WQFcQCkkFrRdK8kcoCoPzJe/bq", "heevW6K", "l2K5", "WR9fWQicFmookMXwna", "buFcSSkRcCkjeXxcM8kA", "WOHOCeZcSW", "W5FcPSo7bSob", "puG2va4", "kdKAdXG", "kSoAmb/dSq", "W53cIYlcS28", "W4vLWPlcJSo+yaldICkssHzCeaG", "W58Wg8oaW4C", "WO1ho8oL"];
  return Un = function() {
    return i;
  }, Un();
}
(function(i, n) {
  const t = i();
  function e(a, I, Q, s, l) {
    return gA(Q - -776, I);
  }
  function A(a, I, Q, s, l) {
    return gA(Q - -253, a);
  }
  function o(a, I, Q, s, l) {
    return gA(Q - -941, I);
  }
  function r(a, I, Q, s, l) {
    return gA(l - 811, I);
  }
  function g(a, I, Q, s, l) {
    return gA(l - 70, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(1064, "QA14", 1077, 1050, 1075)) / 1 * (-parseInt(r(1082, "Lf2c", 1113, 1135, 1117)) / 2) + parseInt(g(401, 356, 326, "vT8q", 352)) / 3 + parseInt(g(418, 402, 360, "QA14", 373)) / 4 + -parseInt(r(1078, "j&H6", 1077, 1038, 1062)) / 5 * (parseInt(A("ckAG", 103, 69, 46, 36)) / 6) + parseInt(e(-523, "pPR)", -474, -503, -523)) / 7 + -parseInt(o(-599, "3oFm", -623, -655, -646)) / 8 + -parseInt(g(347, 323, 380, "P]Mu", 368)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Un, 766505);
const Qg = 7672 + 1249 * -3 + -5 * 285, Ls = -7732 + 43 * -10 + 11662 * 1, Os = 2, Js = -722 * -6 + 8821 + 1 * -13153 + 0.5, Us = {};
Us[IA(964, "B9da")] = 1280;
const Ys = {};
Ys[IA(955, "dFws")] = 720;
function IA(i, n, t, e, A) {
  return gA(i - 684, n);
}
const Ps = {};
Ps[nA("eQSs", 944, 980, 1024, 990)] = 60;
const cn = {};
cn[nA("5MZJ", 991, 1007, 1018, 995)] = Us, cn[_A(937, "O%*8", 893) + "t"] = Ys, cn[nA("HE95", 1e3, 986, 1003, 979) + iA(-74, -52, "zrU)")] = Ps;
const Ts = {};
Ts[nA("DUTS", 999, 990, 1039, 1013)] = 1920;
const Hs = {};
Hs[nA("Lf2c", 943, 999, 955, 983)] = 1080;
function gA(i, n) {
  const t = Un();
  return gA = function(e, A) {
    e = e - (-9996 + -42 * -3 + 10106);
    let o = t[e];
    if (gA.CQrPHp === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      gA.lbjRsu = Q, i = arguments, gA.CQrPHp = !0;
    }
    const g = t[-337 * 7 + -2251 * 4 + -1 * -11363], a = e + g, I = i[a];
    return I ? o = I : (gA.XgUuXP === void 0 && (gA.XgUuXP = !0), o = gA.lbjRsu(o, A), i[a] = o), o;
  }, gA(i, n);
}
const Cn = {};
Cn[IA(998, "lbqm")] = Ts, Cn[_A(871, "eNwP", 875) + "t"] = Hs, Cn[_A(854, "oGC^", 878) + IA(1016, "QA14")] = 30;
const Ks = {};
Ks[IA(941, "hkVa")] = 1;
const js = {};
js[iA(-29, -46, "pvCa")] = 1;
const _s = {};
_s[FA(-600, -675, -645, -638, "]!jr")] = 1;
const Yn = {};
Yn[FA(-560, -607, -550, -589, "DUTS")] = Ks, Yn[FA(-583, -561, -569, -590, "^U^f") + "t"] = js;
function _A(i, n, t, e, A) {
  return gA(t - 568, n);
}
Yn[iA(-13, 23, "%2tp") + _A(815, "^U^f", 838)] = _s;
const qs = {};
qs[iA(-36, 6, "%b$J")] = 1;
const Vs = {};
Vs[iA(27, 28, "WF@B")] = 1;
const Zs = {};
Zs[FA(-535, -592, -583, -566, "pPR)")] = 1;
const Bn = {};
function nA(i, n, t, e, A) {
  return gA(A - 723, i);
}
Bn[FA(-663, -672, -679, -637, "B9da")] = qs, Bn[FA(-598, -658, -648, -629, "5MZJ") + "t"] = Vs, Bn[iA(8, -41, "hrH9") + nA("vT8q", 948, 948, 954, 976)] = Zs;
const Ao = {};
Ao[IA(934, "vT8q")] = cn, Ao[_A(830, "k)MM", 812) + IA(980, "DUTS")] = Cn, Ao[nA("7Kz%", 984, 1020, 1063, 1031)] = Yn, Ao[iA(-58, -45, "Lf2c") + FA(-631, -591, -578, -583, "DUTS")] = Bn;
const Pn = Ao, qe = {};
qe[IA(975, "lbqm") + _A(889, "WF@B", 883) + FA(-561, -545, -514, -558, "HV6s")] = Qg, qe[iA(-25, -14, "QA14") + IA(1011, "]!jr") + IA(952, "DUTS") + FA(-658, -607, -642, -627, "6NlS")] = Pn[IA(1004, "pPR)")], qe[iA(-31, -25, "zEB6") + iA(31, -12, "O%*8") + nA("ckAG", 961, 1018, 1029, 1006) + iA(39, 25, "^U^f")] = Pn[iA(-60, -49, "*3[X") + iA(45, 9, "O%*8")], qe[iA(-27, -34, "6NlS") + nA("ECK*", 961, 1038, 954, 998)] = Os, qe[IA(989, "7Kz%") + nA("*]l3", 1032, 1e3, 1003, 1049) + iA(-14, 16, "R]24") + FA(-624, -599, -628, -614, "3oFm") + nA("^NoF", 1006, 928, 954, 968)] = Js, qe[FA(-559, -605, -555, -594, "WF@B") + iA(-22, 13, "t]9V") + "Ms"] = Qg;
const Xe = {};
Xe[FA(-590, -538, -493, -542, "DUTS") + FA(-564, -634, -593, -602, "Lf2c") + nA("(F(m", 1042, 1077, 1088, 1047)] = Ls, Xe[nA("*5D#", 1018, 1049, 1007, 1018) + IA(973, "Lf2c") + iA(-32, -36, "j&H6") + _A(865, "R]24", 889)] = Pn[_A(862, "^NoF", 861)], Xe[_A(843, "6NlS", 826) + IA(1013, "45h(") + nA("Mhwp", 1028, 1049, 1002, 1051) + IA(953, "k)MM")] = Pn[IA(1015, "dFws") + _A(860, "zrU)", 817)], Xe[nA("*5D#", 1055, 1048, 1035, 1022) + _A(807, "qul7", 834)] = Os, Xe[iA(2, 24, "DUTS") + nA("eQSs", 1027, 1028, 1036, 1e3) + _A(824, "6NlS", 846) + FA(-539, -627, -586, -588, "6NlS") + IA(949, "*]l3")] = Js;
function iA(i, n, t, e, A) {
  return gA(n - -288, t);
}
Xe[nA("5MZJ", 978, 1060, 1002, 1023) + nA("*3[X", 1004, 1010, 1002, 1007) + "Ms"] = Ls;
function FA(i, n, t, e, A) {
  return gA(e - -875, A);
}
const Rr = {};
Rr[IA(1004, "pPR)")] = qe, Rr[nA("ckAG", 996, 956, 1005, 964)] = Xe;
const iQ = Rr;
function OA(i, n, t, e, A) {
  return BA(n - 859, A);
}
function PA(i, n, t, e, A) {
  return BA(n - 765, e);
}
(function(i, n) {
  const t = i();
  function e(g, a, I, Q, s) {
    return BA(I - 260, a);
  }
  function A(g, a, I, Q, s) {
    return BA(Q - 400, I);
  }
  function o(g, a, I, Q, s) {
    return BA(Q - 276, g);
  }
  function r(g, a, I, Q, s) {
    return BA(a - 861, Q);
  }
  for (; ; )
    try {
      if (-parseInt(r(1190, 1173, 1235, "xX36", 1107)) / 1 * (-parseInt(A(683, 744, "(^ko", 756, 830)) / 2) + parseInt(A(692, 761, "0N4(", 728, 741)) / 3 + parseInt(o("W#uo", 423, 531, 514, 489)) / 4 + -parseInt(A(662, 613, "W#uo", 706, 683)) / 5 + parseInt(e(645, "cKIL", 594, 581, 627)) / 6 + parseInt(e(657, "xX36", 582, 671, 512)) / 7 + -parseInt(e(487, "x7tM", 456, 505, 405)) / 8 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Tn, -1070 * 149 + -158002 + -1 * -514401);
function ae(i, n, t, e, A) {
  return BA(e - -348, t);
}
function JA(i, n, t, e, A) {
  return BA(A - -130, n);
}
function BA(i, n) {
  const t = Tn();
  return BA = function(e, A) {
    e = e - (-56 * -101 + 4967 + -2087 * 5);
    let o = t[e];
    if (BA.ibMazF === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      BA.PBbvYo = Q, i = arguments, BA.ibMazF = !0;
    }
    const g = t[8407 + 1 * -8407], a = e + g, I = i[a];
    return I ? o = I : (BA.ltDloa === void 0 && (BA.ltDloa = !0), o = BA.PBbvYo(o, A), i[a] = o), o;
  }, BA(i, n);
}
function ZA(i, n, t, e, A) {
  return BA(n - 353, e);
}
var jg, _g, qg, fe;
class rQ {
  constructor(n, t = {}) {
    O(this, fe);
    y(this, qg, []);
    y(this, _g);
    y(this, jg, {});
    function e(r, g, a, I, Q) {
      return ZA(r - 35, a - -95, a - 169, r);
    }
    function A(r, g, a, I, Q) {
      return OA(r - 70, Q - -1691, a - 32, I - 239, I);
    }
    this[A(-473, -473, -591, "QI5P", -552) + o(498, 585, 516, "P^gd") + A(-653, -662, -669, "E)DH", -586) + "r"] = n, M(this, fe, iQ);
    function o(r, g, a, I, Q) {
      return OA(r - 351, a - -616, a - 325, I - 392, I);
    }
    this[A(-531, -582, -511, "1UA0", -571) + e("mW9D", 545, 467) + e("mB&#", 520, 572)](t);
  }
  async [(qg = ae(-66, -191, "QI5P", -142) + JA(161, "gZ8w", 22, 114, 115), _g = JA(75, "AP]J", 70, 216, 158) + JA(245, "NbLe", 142, 257, 165) + PA(1098, 1083, 1106, "K1@R") + "r", jg = PA(1080, 998, 981, "O#j&") + PA(931, 968, 1044, "Uw5N") + "s", ae(-10, -96, "P^gd", -10) + PA(928, 1018, 1039, "MbMh") + PA(1156, 1076, 1126, "yONF"))]() {
    if (!ro())
      if (I(-434, -536, -484, -467, "AP]J") !== I(-634, -564, -690, -608, "Au)w")) ({ deviceId: _0x88e9f4 } = _0x5db300);
      else return;
    function n(Q, s, l, C, E) {
      return JA(Q - 275, E, l - 240, C - 47, l - 1103);
    }
    const t = await this[n(1189, 1255, 1278, 1288, "0MjF") + "st"](b(this, fe)[r(-744, -628, -680, -708, "3z%*")]);
    function e(Q, s, l, C, E) {
      return OA(Q - 392, E - -449, l - 330, C - 461, Q);
    }
    const A = await this[g(456, 393, 418, 509, "Au)w") + "st"](b(this, fe)[n(1161, 1187, 1191, 1246, "22F3")]), o = {};
    o[I(-625, -693, -608, -604, "*w&w") + n(1175, 1247, 1212, 1263, "^tLR")] = t[r(-716, -713, -685, -715, "*w&w") + "ge"];
    function r(Q, s, l, C, E) {
      return ae(Q - 70, s - 81, E, l - -631);
    }
    function g(Q, s, l, C, E) {
      return ZA(Q - 361, l - -299, l - 469, E);
    }
    o[e("x7tM", 707, 598, 719, 688) + r(-604, -605, -627, -566, "oBW0")] = A[n(1110, 1224, 1196, 1207, "fsr&") + "ge"];
    const a = o;
    function I(Q, s, l, C, E) {
      return ZA(Q - 173, C - -1192, l - 60, E);
    }
    this[r(-720, -751, -742, -723, "^tLR") + I(-707, -696, -599, -638, "22F3")][n(1291, 1232, 1237, 1184, "xrbA")](a);
  }
  async [OA(1107, 1188, 1280, 1219, "y49V") + "st"](n) {
    function t(p, m, S, G, k) {
      return ZA(p - 13, k - -1135, S - 398, p);
    }
    function e(p, m, S, G, k) {
      return ZA(p - 256, m - -566, S - 467, S);
    }
    const { abortAfterMs: A, fallbackConstraints: o, maxTestDuration: r, primaryConstraints: g, runAmount: a, runDurationCutoffFactor: I } = n;
    function Q(p, m, S, G, k) {
      return JA(p - 112, m, S - 387, G - 198, k - -821);
    }
    let s = 34 * -222 + -893 * -1 + 55 * 121, l = a;
    function C(p, m, S, G, k) {
      return ae(p - 210, m - 367, G, k - 839);
    }
    let E, d = this[t("QI5P", -476, -425, -503, -502) + Q(-652, "(^ko", -564, -641, -584) + t("QI5P", -507, -554, -603, -561) + "r"][t("mB&#", -374, -422, -437, -432) + t("K1@R", -361, -431, -399, -451) + B("E)DH", 26, 91, 9) + "s"](this[t("oBW0", -403, -392, -481, -407) + B("B3vr", 108, 60, 66) + "s"], g);
    for (let p = 0; p < a; p++)
      if (Q(-705, "jNHN", -676, -771, -760) !== Q(-655, "1UA0", -609, -675, -685)) {
        if (s > r * I)
          if (t("E)DH", -589, -551, -543, -510) === B("MbMh", 15, -60, -38)) _0x10cb05 = this[e(109, 133, "bPqU") + e(24, 103, "W#uo") + e(194, 156, "bPqU") + "r"][C(842, 754, 861, "22F3", 788) + C(828, 873, 918, "gN6e", 859) + t("cKIL", -448, -438, -470, -498) + "s"](this[t("QI5P", -606, -482, -561, -565) + t("y49V", -454, -478, -565, -530) + "s"], _0xff489e), _0x1fd6df--;
          else {
            l = p;
            break;
          }
        const m = await this[B("NiNV", -1, 96, 43) + Q(-601, "*w&w", -724, -629, -664) + e(-102, -20, "mB&#") + Q(-701, "AP]J", -726, -835, -751)](d, A);
        if (m[e(102, 140, "mB&#")])
          if (t("^VhA", -351, -512, -371, -425) !== C(845, 846, 869, "gN6e", 864)) {
            if (this[Q(-696, "NiNV", -677, -646, -676) + B("y49V", 133, 55, 110) + e(85, 135, "yONF") + "r"][Q(-613, "oBW0", -673, -627, -670) + Q(-570, "jNHN", -579, -639, -650) + Q(-545, "QI5P", -594, -530, -616) + t("yONF", -549, -412, -548, -505) + "or"](m[t("NbLe", -572, -531, -658, -584)]))
              if (Q(-786, "e68R", -768, -744, -722) === e(-14, 31, "Uw5N")) d = this[C(752, 772, 694, "3z%*", 699) + C(822, 786, 870, "xX36", 853) + t("[imo", -498, -597, -532, -555) + "r"][Q(-616, "ABEz", -697, -635, -628) + e(58, 44, "x7tM") + C(734, 638, 774, "P@pj", 690) + "s"](this[C(736, 847, 725, "Uw5N", 762) + t("y49V", -616, -476, -484, -530) + "s"], o), p--;
              else return;
          } else {
            _0x365f7f(_0x303eff);
            const S = {};
            return S[C(641, 650, 733, "Uw5N", 715)] = _0x3cda06, S;
          }
        m[t("NiNV", -439, -367, -418, -461) + e(92, 114, "Hse$")] && (B("e68R", 98, -31, 30) !== C(849, 717, 770, "E)DH", 789) ? _0x144b0f[B("O#j&", 20, 53, 55)]() : { deviceId: E } = m), s += m[e(114, 147, "QI5P") + C(754, 725, 713, "qbm#", 683)] || 5408 + 6 * -1068 + 1e3;
      } else {
        const m = {};
        return m[e(66, 124, "O#j&") + B("jNHN", 18, 81, 83)] = this[t("K1@R", -675, -594, -631, -593) + t("mW9D", -553, -457, -587, -531)], m[C(769, 830, 925, "qbm#", 840) + B("O#j&", -70, 45, 5) + "e"] = !1, m;
      }
    const u = Math[C(766, 859, 800, "B3vr", 780)](s / (l || -8162 + -54 * -146 + 1 * 279));
    this[t("e68R", -530, -470, -350, -443) + B("y49V", 41, -70, -1) + "s"] = this[C(817, 754, 836, "*w&w", 842) + B("cKIL", 95, -73, 2) + B("fsr&", -14, 22, 17) + "r"][B("W#uo", 150, 165, 88) + C(797, 886, 792, "NbLe", 861) + B("AP]J", -18, -22, 7) + "s"](this[C(872, 765, 836, "B3vr", 795) + B("P^gd", -36, -59, 12) + "s"], {}, E);
    function B(p, m, S, G, k) {
      return JA(p - 411, p, S - 241, G - 216, G - -123);
    }
    const h = {};
    return h[B("^VhA", -99, -111, -42) + "ge"] = u, h;
  }
  async [ZA(786, 700, 632, "Au)w") + OA(1058, 1081, 1073, 1121, "BmwR") + JA(152, "^tLR", 135, 52, 126) + PA(977, 977, 929, "gN6e")](n, t) {
    const e = Date[A("*w&w", 280, 287, 315)]();
    function A(s, l, C, E, d) {
      return PA(s - 370, E - -675, C - 6, s);
    }
    function o(s, l, C, E, d) {
      return ae(s - 339, l - 353, l, C - 1067);
    }
    function r(s, l, C, E, d) {
      return PA(s - 135, C - -788, C - 450, s);
    }
    function g(s, l, C, E, d) {
      return PA(s - 387, l - -1416, C - 444, C);
    }
    const a = new AbortController();
    function I(s, l, C, E, d) {
      return ZA(s - 283, E - 33, C - 290, d);
    }
    const Q = setTimeout(() => {
      function s(E, d, u, B, h) {
        return A(B, d - 90, u - 389, h - 464);
      }
      function l(E, d, u, B, h) {
        return A(h, d - 456, u - 283, E - 150);
      }
      function C(E, d, u, B, h) {
        return A(d, d - 437, u - 413, u - -181);
      }
      l(614, 672, 558, 688, "9ri#") !== C(190, "Au)w", 251) ? a[C(253, "MbMh", 163)]() : this[s(759, 851, 851, "BmwR", 817) + C(45, "qbm#", 104) + "s"] = _0x257e3a;
    }, t);
    try {
      if (A("W#uo", 392, 325, 393, 449) !== A("MbMh", 272, 318, 309, 217)) this[I(636, 574, 586, 645, "MbMh") + I(664, 577, 596, 600, "E4kQ") + I(646, 600, 735, 671, "e68R") + "r"][I(698, 590, 730, 677, "CRBf") + r("CRBf", 248, 279, 321, 209) + g(-418, -415, "22F3", -499, -351) + g(-391, -375, "9ri#", -377, -424) + "or"](_0x4e6b56[I(778, 690, 742, 712, "AP]J")]) && (_0x4211a5 = this[I(792, 709, 799, 752, "P@pj") + r("B3vr", 216, 290, 365, 198) + o(923, "[imo", 946, 873, 892) + "r"][r("mB&#", 351, 327, 323, 337) + o(1005, "1UA0", 969, 1028, 999) + o(1002, "Uw5N", 922, 965, 1010) + "s"](this[I(671, 624, 577, 653, "sv!(") + A("B3vr", 381, 322, 409, 481) + "s"], _0x2856be), _0x3c0a51--);
      else {
        const { deviceId: s, mediaStream: l } = await this[o(929, "v(Ul", 968, 908, 1006) + o(952, "CRBf", 1005, 987, 1082) + A("sv!(", 320, 250, 278, 216) + "r"][I(671, 722, 672, 679, "xX36") + I(653, 537, 682, 599, "O#j&") + I(652, 570, 684, 590, "0N4(") + "m"](n, a[I(653, 533, 640, 593, "W#uo") + "l"]), C = Date[A("W#uo", 484, 475, 461, 456)]() - e;
        Dt(l), clearTimeout(Q);
        const E = {};
        return E[r("NiNV", 327, 292, 382, 364) + A("mB&#", 420, 503, 433, 457)] = C, E[o(957, "Au)w", 1009, 918, 1053) + r("sv!(", 218, 197, 104, 126)] = s, E;
      }
    } catch (s) {
      if (g(-271, -351, "E4kQ") === I(558, 651, 652, 618, "0N4(")) return;
      {
        clearTimeout(Q);
        const l = {};
        return l[r("O#j&", 273, 322)] = s, l;
      }
    }
  }
  [PA(1140, 1082, 1041, "^tLR") + JA(173, "Hse$", 130, 164, 112) + ZA(631, 569, 487, "qbm#")](n) {
    function t(A, o, r, g, a) {
      return OA(A - 498, r - 93, r - 426, g - 160, o);
    }
    function e(A, o, r, g, a) {
      return ae(A - 409, o - 423, r, g - -596);
    }
    Object[t(1170, "mW9D", 1154, 1095) + "es"](n)[e(-558, -705, "P^gd", -624) + "ch"](([A, o]) => {
      const r = A;
      b(this, fe)[r] && (b(this, fe)[r] = { ...b(this, fe)[r], ...o });
    });
  }
  [OA(1122, 1102, 1014, 1126, "*w&w") + JA(218, "E)DH", 144, 216, 231) + OA(1087, 1064, 1146, 1092, "yONF")](n) {
    function t(e, A, o, r, g) {
      return ae(e - 484, A - 6, r, e - 1176);
    }
    this[t(1025, 1030, 1084, "x7tM") + t(1080, 1021, 1097, "y49V") + "s"] = n;
  }
  async [JA(215, "yONF", 258, 149, 203) + JA(284, "P@pj", 246, 173, 195) + JA(130, "QI5P", 220, 145, 138) + ZA(783, 693, 705, "ABEz") + OA(1215, 1218, 1298, 1229, "oBW0")](n) {
    function t(I, Q, s, l, C) {
      return PA(I - 194, s - -608, s - 329, I);
    }
    function e(I, Q, s, l, C) {
      return ae(I - 455, Q - 29, Q, I - 371);
    }
    if (this[g(-539, -480, -469, -543, "^tLR") + g(-479, -408, -338, -459, "sv!(")][o(989, 826, 908, 899, "QI5P") + "h"] === 3 * 2960 + 3504 * 2 + -15888) return;
    const A = this[e(297, "qbm#") + e(264, "v(Ul")][g(-543, -491, -486, -537, "E)DH") + "h"] - (6 * -334 + -5585 + 7590);
    function o(I, Q, s, l, C) {
      return JA(I - 407, C, s - 77, l - 229, s - 706);
    }
    const r = await nQ();
    function g(I, Q, s, l, C) {
      return ZA(I - 43, Q - -1070, s - 447, C);
    }
    function a(I, Q, s, l, C) {
      return OA(I - 481, s - -957, s - 4, l - 93, l);
    }
    this[t("22F3", 382, 404) + o(890, 822, 806, 719, "x7tM")][A] = { ...this[a(228, 232, 142, "P@pj") + g(-603, -516, -584, -601, "22F3")][A], optSetting: r };
  }
  [ae(-104, -21, "yONF", -100) + OA(1064, 1138, 1191, 1199, "xX36") + ae(-70, -29, "Uw5N", -4) + OA(1186, 1224, 1167, 1178, "gZ8w") + ZA(566, 645, 724, "xrbA")]() {
    const n = {};
    function t(A, o, r, g, a) {
      return OA(A - 348, g - -407, r - 203, g - 485, o);
    }
    function e(A, o, r, g, a) {
      return PA(A - 373, o - -577, r - 74, A);
    }
    return n[e("BmwR", 518, 483) + e("B3vr", 495, 408)] = this[e("fsr&", 398, 322) + t(642, "e68R", 633, 721)], n[t(767, "AP]J", 823, 810) + e("QI5P", 378, 360) + "e"] = !1, n;
  }
}
fe = new WeakMap();
function Tn() {
  const i = ["v3BdOqXm", "W4HuWPrfW58", "s1/cV8kUW4K", "WPpdH8oT", "WQdcRSkmW77cTW", "vvZdMr5v", "jSkXeSknWPe", "WOfmC1Sv", "cYdcKX43", "W7RcQKNdO0S", "dfxdI8oPdW", "WQjHWQXnAG", "p8kiyW", "CHmwbwe", "bCo0WPNcRqtdM0L1q8oCW7vP", "jmkgzmoNW6S", "WQJdJwpdGv8LWR0jb8kww8onBW", "W7JcLJRcGH0", "BulcO8kYW48", "lmoYWP/dGGa", "WO3cICkY", "WR8wW5DYqa", "vmkPW5VdP1W", "WRVdPuG3pq", "WP/cOrVdMh8", "W5ldUSk7xG", "euJdNSodcq", "WO7dGCo9WRbr", "DfddTmokW50", "vmkiW5/dOvW", "dLnXW6FdRW", "aWpdOaus", "FxBdOq", "WPRcVSozWRRdUG", "v8kYWRvhla", "twldQJiN", "oCkjFG", "hvFdHmo0ga", "WRGBW5fP", "tv3dJX8F", "dWFcKW", "h1BdJSoRcq", "WQnFamksDW", "afvGW5hdQW", "WQZdTLm2oW", "j0pcJa", "bmk4gZJdIa", "W4SSW6hcP0W", "p0bxxsuUWQy6xMtdSa", "W73cGK3cLCkb", "W6/cMd3cNrO", "wmkNixDB", "WO7cVa/dQ2W", "WRtcTmotWQddRW", "W7PaWO8VbhpcJKK7W4jipa", "keRcJ8oDW68", "WR8fW593xq", "WQZdPSkCWRVcUW", "W4ZcNCkVW6Gaw3lcGdJdTCo7W6rc", "WOZdPSkC", "mCoJWOldQbe", "WQ0bwmkIfa", "W6FcJCoeW6ddKa", "oKNcJ8o7W7i", "WPddKLCvoq", "iCoNhmkLDG", "cCkZetpdMq", "WQqhW4PAvG", "W5ZdSCk7BSo2", "WRWwumkIeG", "A3fXWOBdUa", "rCkMW4BdUuy", "WRxcQYLYDq", "xu/dPIGo", "xvNdRbKB", "WRhdHNblWQK", "WRFdS8kAWP7cQG", "W5JcLJRcGH0", "WQxcTSoCWR3dUa", "wu3dOGCA", "WPBcH8k1W6NcSq", "xw57WPtdUa", "gSk8hdhdIa", "WQ5xaSkesG", "AhtcOLu", "EHCMWOBdIW", "rg1ZWPpdVq", "cshcMqeM", "g1BdNSoedq", "W5dcTvlcTCkc", "ae1HW4/dRW", "WQRdQ08Qpq", "omklnJldQG", "AqiGWPRdTW", "oCkxEConW7O", "jaDFnN0", "e8kmdSk4WQy", "W57dSmkkx8oL", "W7NcNdlcNHS", "eZPjWQyg", "g07dI8oRgq", "WOTquL4e", "g1/dOqFcR8kEgXCupSkAW4/cSa", "W6FcT1RcRCkv", "WQldK3zxWPu", "W4xcUL/cTCku", "W4dcGSoiaWG", "j0VcL8oDW5q", "WOhcKmk9W6VcSa", "WPyfu14G", "Emkkb2Dk", "W4JcHCoObYu", "FxlcPffz", "dsTAWRu3", "kfRcNSokW7W", "AutcVSkVW7u", "mWrqcwe", "WQysW4X5vG", "k8k+fcVdMa", "D0FdPSos", "qCkPWRDunW", "WQjiWOLzBW", "W5pcLCoihZm", "WOZdJSowWQPa", "WOCfsemW", "dbBdR8oQWPu", "W4xcM8kTW6SdwHhcHZVdL8o8W5W", "WPalt1W3", "WRBcUCosWQhdRW", "hI/cNH4H", "W6GyW5ecl8klW6xcVgrScfq", "W5BdSCk9ta", "tcHRWQ4gBSkF", "WOuEsuim", "ArGx", "jqrmo3W", "WPZdNmo1WQX4", "WRBdPSkmWP7cQG", "W7tcTfNdI0S", "WPylt14W", "BHK9WQ3dNG", "jrrim2S", "r2KiW75ZBCklWP53FSoE", "WQdcOqhdPXq", "W5yDDLKbhSob", "lCoNWQtdIrC", "WOhcLmkUW6JcTW", "W6FcI8oq", "W7JdOf3cIYLME8kDW41edmk7", "WRxcVY5iza", "WQjigmkZwW", "W5BcTvpdLfO", "eL3dHmoGga", "W4JdSCk7ymo4", "W6tcGsKbW5b1xmogvXexW68", "cKRdI8oUaG", "WQrkWO9BBW", "WRJcQ8ojWPFdVG", "BqaUWOtdIG", "W4FcU1xcQSkf", "WQdcOqhdOt8", "WPddJCoOWRLv", "s8kPjLTJ", "BXKk", "WR/dPu0Ska", "WRlcQCopWRZdQq", "W4XmWPffW48", "BSkAh11a", "W5RdUSkRqCoY", "jSkcF8oVW7a", "AXmwa3a", "lfRcMSouW6G", "WODSBvW", "yWqwc2C", "ldtdPqSArSkqW7NcT0tdO8kD", "zCotoSk5WQNcUCk8W6TtcdddQCk2", "g13dPqdcQmkDBaKweSkDW6K", "ksldJXG1", "WPtcG8kUW6hcQG", "WOnoEa", "gK3dMmoMga", "bSkUas3dNq", "hYTuWRul", "WQBcVI9Usq", "BSkAh1Pm", "iCoVgSkNvW", "o8oLWPFdGae", "sX7cU0pdLW"];
  return Tn = function() {
    return i;
  }, Tn();
}
function Hn() {
  const i = ["W7uUW5pdS1q", "x0blBhPbtmooW6e9W6a", "gmkYnSo/W5a", "B3zF", "hL9s", "WRL9DINcUG", "fvjAW4z2", "yNXhWOet", "WRFcSrDZcq", "W47dK8kSgfa", "pszmngC", "W5/dOSofm2y", "b0T2W4ST", "W77dH8k4ySkL", "W6f9nmkFFq", "W7JdTsVdJ8oq", "cCkvnmkaDG", "nuXhW5lcSSo9W7a6nJKbW4C", "WQxcRab6ca", "rCooWP/dG8os", "W5FdMmkIgfW", "ymkUfIZcUW", "W6Twq8kPaa", "d3fDW5a", "iSkxnSk4iW", "CCogW4i", "WR8HW5dcNwK", "c8kPf8oSW5O", "yvOvW5ZdNW", "ESoQW7qkaa", "x04jW5FdSW", "W5HjW6q", "WOxcGCk6WOrf", "W57cNKXbma", "W5ZcKudcNSkH", "q8oQWOldM8ov", "WQRcOwVcLmkkDSogWQ83B8ouE8oD", "WQtdJsalyq", "bfDx", "WQJcP8oaW7ug", "dej6W40R", "a1z1W5mR", "W4hdPdHTWRC", "W5pdPJJdLmoq", "D8kLhtVcOa", "WQZdJ8oBbc0", "W73cSc7dG8oh", "W57dPtHWWRe", "WRO8W43cLgm", "WRGNW4JcMgi", "bgX2W4nN", "WOxcImoCWQz2", "BmkgW6KanG", "AWKvWOtdRW", "FSogW7ykcq", "WPZcG8kYWOKw", "WOdcSr1ZaG", "W4PfW6/dT8k/", "yXWaWRtdOW", "WPFcNCo+WPX3", "hYKIEg0", "ymkbyG", "zCktvbWd", "WQZcNCo8t8kbwSkkWPdcQG", "WPpdV8kVW7pdQq", "WOTsBa", "WP/cM8kQWPWa", "W6W4t8khBq", "wKXkA342sSoiW48rW7/cUa", "WR7cLSopW7Wn", "W59yW4/dT8kM", "W4xcJSoGWQBcSvv8d8ogWRDuWQ/cJq", "WR5PCHZcPW", "tSk1pCoUWP8", "j8oMyY3dOG", "CM1yWOyx", "WPlcVq9/dG", "fNDxW4fQ", "y1XDWO0D", "WQ7cK8kbESk5x8kBWP8", "uSowWPpdJmoB", "WOhcMSkNWPub", "WQhcSr1Ibq", "d8k/nSoFW4K", "sMbmWRVcSG", "pb82t20", "W5JcLf1sjq", "WPZcG8kYWOKK", "gryl", "W6a4gepcQ3BdJmoXWQddOf5Vtq", "dxCVWQhdKG", "hWqTrhG", "tSohWPpdHCou", "WO7dHhqgWQG", "o8oIyYC", "sSkRW7aKbq", "zCkZcYxcSq", "WRDPvXRdVG", "W5jhFwKY", "xZJdIfi", "sSkFaa", "x2y6", "WOu7W4xcMgi", "W6FdMc0", "xfnZAetdQColtv8", "ESk2W6yhaW", "WQqWW4dcLMq", "hmkAeCoCW5C", "W7WbxCoj", "c0LGW54X", "W4VcGfFcHCk2", "W5RdNSoLW4jCmH/cOCkFWQq3W5xcPq", "CmonW5K", "DCkRfYJcUG", "WP0zW4ddSCkl", "W5JdOY98WQO", "W6JdOCoJW5GtW64CWOe", "W77dH8kKF8k9", "W6SPCmkaFq", "W6NdJ8oapgq", "W7WDDCoEWP4", "sePEWOJcSG", "zmoeW5FdPWa", "WPhcMCorWPL2", "q8oAWO7dKmoD", "WP/dMCk8W5/dOW", "uCoRWQVdSCoi", "W5rVygyX", "W5BcG0Puna", "WOGvWRNcOmoGgSkWWPpdRb7cHq", "WQKCW40", "BmoBW70bca", "cezQ", "W57cNLLqjq", "W5NdOY9TWQ0", "WQ3cOM/cKCkhC8olWRWZvCoxyCo2", "WP4mW57dQCkd", "yKSc", "oJn3mNu", "WPpcQGT5hW", "tmoBW6Okda", "WQ/cN8oqW6Ox", "W4pdNSk0cvi", "W70NW5xdKq", "sJRdJfL0", "mmoTEG", "W5OatCoxWP4", "WO3dJ8kGWPur", "uIXPW7rYDePA", "W67cGgXwmSkDEmkNWPHiW5u2", "hmk+p8o1W4K", "pd90oNa", "x8kryWGR", "nYSdW59eW7b5hejlC0/cNG", "W7LnWP0Gpq", "W6SasG", "cmkdlq", "nSoIyYFdPG", "W4NdTa/dOSoj", "gSkxo8oPW4S", "WQ/cUSoxW74q", "W5TnWQ8xaq", "lr9+", "z8kLW6GT", "bffvW5nX", "B8kbDG8u", "n3DxW5bT", "BCokW7uagW", "W4ldPsXCWRC", "WRHJDH7cPW", "W6BdHszNkG", "B8oaW6Sggq", "WRxcQHXZaW", "fmkFgCkQiG", "WQNcSmowW7Cq", "W47dN8kLga", "W6VdH0m", "WPlcGSobWPTN", "bCkfo8keyq", "W4LwBwi/", "q1O4W7tdVq", "W7hdQmk/zCkI", "CCoHW5i", "cSk+jmoZW5W", "W6tdG8k0eKe", "dKS3t3G", "tf1pWRJcRW", "a8k+oG", "rKXpWPtcPq", "pJ9+ogW", "W5/dIsXPoa", "WP/cTHv/aW", "pCowur0wf8kCW48", "WRNdJmk8W6tdPa", "lr5IjgO", "fSkwk8kwCa", "eMPkW5LN", "ESkjFW8j", "W5/cHvdcJSkQ", "WRz0DXBcSG", "WQddKd0tBa", "ksnUmNm", "W7DJW7/dG8kb", "WOFcPmom", "WR/cTXC", "DCoTytBcTa", "W7y3W4ldIK0", "cHSwld4", "c8k1n8oO", "ESoxW7Kmgq", "W65rwSkYfW", "wdNdN1rM", "W4JdN8kVcrm", "WRFcUGP5aq", "jJL0oa", "WQ3cOw3cKmkeCSoiWRy9uSo8DCov", "WPdcGmo2sWtcJCoygIpdObLOW7u", "j8k7CW", "q8oGWPBdQSoR", "WRzKzXRcTW", "AfOhW5ZdNq", "WRJcP8o9W7Wv", "ECkuFG", "c8ksnG", "rKfdWQNdOq", "WPH+zHpcTW", "sJRdJfK", "WPFcS34OW7nmWQddR1ZdTSk4WPu", "aejLW4mG"];
  return Hn = function() {
    return i;
  }, Hn();
}
function q(i, n) {
  const t = Hn();
  return q = function(e, A) {
    e = e - 148;
    let o = t[e];
    if (q.rRIAso === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      q.miQiKh = Q, i = arguments, q.rRIAso = !0;
    }
    const g = t[0], a = e + g, I = i[a];
    return I ? o = I : (q.ClqLUz === void 0 && (q.ClqLUz = !0), o = q.miQiKh(o, A), i[a] = o), o;
  }, q(i, n);
}
function uA(i, n, t, e, A) {
  return q(i - 802, n);
}
function qo(i, n, t, e, A) {
  return q(e - -781, A);
}
(function(i, n) {
  const t = i();
  function e(g, a, I, Q, s) {
    return q(s - -308, Q);
  }
  function A(g, a, I, Q, s) {
    return q(Q - 89, g);
  }
  function o(g, a, I, Q, s) {
    return q(a - 625, I);
  }
  function r(g, a, I, Q, s) {
    return q(s - 891, a);
  }
  for (; ; )
    try {
      if (parseInt(r(1123, "$jIn", 1150, 1333, 1228)) / 1 + parseInt(r(1158, "S4z*", 1120, 1146, 1197)) / 2 + -parseInt(r(1029, "x[so", 1055, 1111, 1071)) / 3 + -parseInt(o(857, 795, "g8C)", 907, 810)) / 4 * (parseInt(A("fS33", 343, 422, 329, 422)) / 5) + parseInt(r(1286, "S4z*", 1310, 1148, 1247)) / 6 + parseInt(r(1131, "PR@V", 1231, 1219, 1135)) / 7 * (parseInt(o(925, 832, "nvfs", 896, 857)) / 8) + parseInt(e(-114, -53, -223, "g8C)", -154)) / 9 * (parseInt(o(819, 845, "%FN]", 826, 873)) / 10) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Hn, -131036 + 139 * 5888);
function TA(i, n, t, e, A) {
  return q(i - -12, t);
}
function ge(i, n, t, e, A) {
  return q(n - 119, i);
}
function Et(i, n, t, e, A) {
  return q(A - 589, i);
}
class aQ {
  [ge("r&b4", 334) + uA(1114, "nvfs") + TA(204, 114, "hqgl")](n) {
    function t(I, Q, s, l, C) {
      return ge(s, Q - -388);
    }
    function e(I, Q, s, l, C) {
      return uA(Q - 191, l);
    }
    const A = Nr(n);
    function o(I, Q, s, l, C) {
      return TA(l - -2, Q - 221, I);
    }
    const r = A == null ? void 0 : A[o("8176", 460, 400, 357) + o("r&b4", 235, 151, 157) + "s"]();
    if (!(r != null && r[g(434, 396, "Furd") + "t"]) || !(r != null && r[o("(ao5", 218, 165, 159)]) || !(r != null && r[e(1434, 1328, 1237, "S4z*") + t(104, -2, "2XYs")])) {
      if (o("T&aW", 245, 348, 347) === t(83, 20, "[bdt")) throw new D(e(1262, 1179, 1258, "oMAc") + t(58, 96, "JCd5") + a(1320, "XutW", 1299) + t(-107, -88, "7XPF") + g(611, 592, "S4z*") + o("&dDn", 261, 162, 228));
      _0xb6c9ee == null || _0xb6c9ee[a(1235, "&dDn", 1225) + a(1240, "hqgl", 1151) + o("JZXj", 162, 185, 236) + o(")6r9", 140, 138, 185)](o("g8C)", 105, 150, 194), _0x1e9f42), _0x5d44a0(_0x5b6a0e), _0x91cb33(_0xeee57c);
    }
    function g(I, Q, s, l, C) {
      return uA(I - -557, s);
    }
    if (A)
      if (a(1264, "uzpa", 1201) === e(1206, 1245, 1259, "@fzl")) {
        const I = _0x22ed12[t(43, -9, "ZfrD") + t(5, -100, "PR@V") + t(-100, -33, "4L3F")](a(1345, "&dDn", 1276));
        return I[e(1318, 1290, 1355, "GX6E") + g(468, 520, "T&aW")] = !0, I[t(99, 41, "ZfrD")] = !0, I[e(1137, 1228, 1120, "G4*X") + o("f*tC", 148, 222, 179) + "e"] = !0, I[t(41, 77, "f*tC")][a(1326, "uKcr", 1363) + e(1401, 1288, 1398, "(ao5")] = e(1185, 1297, 1266, "(ao5") + a(1282, "V(8j", 1309), I[o("fS33", 283, 375, 343)][t(77, -5, "XA*i") + "ty"] = "0", I[o("Furd", 337, 277, 256)][o("ZUMp", 84, 62, 168) + o("khY5", 349, 468, 356) + o("YiOF", 251, 271, 233)] = e(1225, 1336, 1430, "khY5"), I[o("nvfs", 365, 267, 345)][o("fS33", 274, 173, 277)] = o("XA*i", 104, 108, 177), I[e(1187, 1150, 1229, "dkvT")][t(195, 91, "T&aW") + "t"] = g(569, 630, "qF&9"), I;
      } else return r[g(433, 375, "x[so") + e(1318, 1287, 1331, "8176")];
    function a(I, Q, s, l, C) {
      return TA(s - 1008, Q - 427, Q);
    }
  }
  [uA(1071, "YiOF") + TA(243, 218, "khY5") + TA(251, 260, "(ao5") + uA(1178, "(ao5")]() {
    const n = document[e(125, 38, -52, "YiOF") + e(201, 118, 155, "Evzf") + e(59, 114, 76, "k3Xr")](e(50, -25, -86, "uKcr"));
    function t(g, a, I, Q, s) {
      return qo(g - 260, a - 196, I - 38, Q - 1081, a);
    }
    n[r(-297, -373, -379, -372, "&dDn") + o("V(8j", 843, 736)] = !0;
    function e(g, a, I, Q, s) {
      return TA(a - -219, a - 477, Q);
    }
    n[A(-651, -636, -627, "dkvT")] = !0;
    function A(g, a, I, Q, s) {
      return ge(Q, a - -927);
    }
    function o(g, a, I, Q, s) {
      return uA(I - -218, g);
    }
    n[t(595, "dkvT", 590, 675) + t(624, "(ao5", 589, 582) + "e"] = !0, n[t(664, "(ao5", 588, 638)][e(-5, 31, 92, "Evzf") + o("PR@V", 927, 907)] = e(39, 102, 198, "g8C)") + A(-526, -614, -616, "70ui"), n[r(-474, -439, -457, -360, "8176")][o("$jIn", 988, 957) + "ty"] = "0";
    function r(g, a, I, Q, s) {
      return ge(s, I - -790);
    }
    return n[e(146, 56, 42, "khY5")][t(664, "8176", 670, 568) + o("JZXj", 826, 931) + o("w*he", 743, 812)] = t(589, "&dDn", 650, 605), n[A(-564, -581, -556, "uzpa")][A(-645, -640, -617, "khY5")] = t(564, "Furd", 465, 456), n[r(-377, -403, -484, -404, "3Z2p")][e(29, -48, -113, "r&b4") + "t"] = r(-378, -560, -479, -412, "7XPF"), n;
  }
  async [uA(1015, "k3Xr") + uA(1035, "XutW") + uA(1122, "GX6E") + TA(191, 263, "k3Xr")](n, t, e) {
    return new Promise((A, o) => {
      function r(s, l, C, E, d) {
        return q(l - -703, E);
      }
      function g(s, l, C, E, d) {
        return q(E - 534, C);
      }
      function a(s, l, C, E, d) {
        return q(E - -141, d);
      }
      function I(s, l, C, E, d) {
        return q(C - 501, E);
      }
      function Q(s, l, C, E, d) {
        return q(d - -254, s);
      }
      if (Q("%FN]", 6, 88, -20, 39) === Q("S4z*", 72, 67, 17, -5)) return _0x59d3f9 instanceof _0x34b7d0 && _0x2e00ff[a(8, 143, 121, 113, "oMAc")] === Q("S4z*", 190, -1, 131, 109) + a(74, 97, -29, 59, "T&aW") + r(-457, -375, -436, "(ao5") + g(814, 677, "(ao5", 764);
      {
        const s = () => {
          function E(h, p, m, S, G) {
            return I(h - 409, p - 39, p - -17, G);
          }
          function d(h, p, m, S, G) {
            return Q(h, p - 110, m - 45, S - 122, G - 318);
          }
          function u(h, p, m, S, G) {
            return r(h - 230, G - 823, m - 283, m);
          }
          function B(h, p, m, S, G) {
            return Q(h, p - 243, m - 268, S - 106, S - 24);
          }
          if (u(491, 415, "w*he", 417, 391) === u(283, 260, "JZXj", 383, 318)) throw new _0x19a97a(B("ZfrD", 13, 70, 86) + d("4L3F", 332, 446, 448, 360) + E(829, 799, 913, 875, "qF&9") + u(385, 337, "V(8j", 332, 376) + u(457, 330, "dkvT", 329, 358) + d("70ui", 439, 389, 246, 325));
          this[B("T&aW", 103, 184, 102) + u(177, 215, "8176", 178, 270) + "eo"](n, t);
        }, l = {};
        l[Q("XutW", -88, -73, -26, 12)] = !0, e == null || e[a(92, -66, -15, 33, "JZXj") + Q("JCd5", -129, 29, -74, -44) + Q("Evzf", -22, -74, 45, -32) + "r"](g(776, 910, "3wFg", 832), s, l), (async () => {
          function E(p, m, S, G, k) {
            return Q(p, m - 302, S - 26, G - 242, G - -157);
          }
          function d(p, m, S, G, k) {
            return g(p - 497, m - 327, G, p - -1301);
          }
          function u(p, m, S, G, k) {
            return a(p - 294, m - 23, S - 276, m - -325, p);
          }
          function B(p, m, S, G, k) {
            return g(p - 226, m - 21, p, k - -285);
          }
          function h(p, m, S, G, k) {
            return r(p - 52, m - 1004, S - 17, G);
          }
          if (u("XA*i", -122, -232) !== B("ZUMp", 298, 345, 445, 400)) try {
            if (E("g8C)", -60, -70, -139, -57) === u("Furd", -248, -151, -328, -152)) await n[E("G4*X", -72, 12, -94, -144)](), e == null || e[E("Evzf", -106, -77, -153, -267) + h(656, 546, 627, "@fzl", 477) + h(722, 627, 582, "khY5", 700) + u("G4*X", -276, -191, -285, -245)](E("cYYm", -219, -14, -110, -21), s), A();
            else {
              const p = {};
              p[h(413, 525, 622, "L(%N", 534)] = _0x5939d6, _0x166d81[h(618, 612, 581, "w*he", 661) + d(-453, -549, -467, "JZXj", -514)] = p;
            }
          } catch (p) {
            if (E("&dDn", -222, -93, -126) === E("r&b4", -106, 14, -56)) e == null || e[u("4L3F", -301, -411) + d(-607, -667, -557, "nvfs") + u("nvfs", -234, -239) + E("JZXj", -173, -128, -112)](h(555, 665, 611, "3Z2p"), s), Dt(t), o(p);
            else return _0x163d2d[E("JZXj", -83, -77, -137) + B("&dDn", 481, 612, 535, 502)];
          }
          else _0x373d63[d(-508, -583, -598, "uKcr") + d(-588, -672, -589, "3wFg")](_0x500b89);
        })();
      }
    });
  }
  async [uA(1003, "[bdt") + uA(1083, "70ui") + TA(219, 130, "Evzf") + "m"](n, t) {
    const e = this[s("L(%N", -614, -489, -536, -600) + s("qF&9", -622, -621, -629, -602) + s("qF&9", -538, -611, -476, -500) + s("khY5", -579, -474, -428, -520)](), A = await navigator[r(881, 1032, 956, "ZfrD", 982) + a(-143, "(ao5", -151) + "es"][g(438, 378, "qF&9") + I(-308, -280, ")6r9", -396, -370) + "ia"](n), o = this[a(-9, "L(%N", 35) + g(387, 472, "%FN]") + I(-283, -394, "qF&9", -403, -302)](A);
    e[I(-413, -346, "oMAc", -435, -385) + g(460, 520, "GX6E")] = A;
    function r(l, C, E, d, u) {
      return ge(d, u - 573);
    }
    try {
      a(-1, "r&b4", -9, 47, -90) !== g(598, 707, "oMAc", 605, 673) ? this[a(-226, "3Z2p", -114, -137, -144) + a(-152, "TgD[", -160, -114, -142) + "eo"](_0x3d0c33, _0x54167d) : await this[I(-479, -409, "dkvT", -317, -403) + g(528, 624, "G4*X", 565, 557) + I(-368, -287, "ZfrD", -227, -256) + s("%FN]", -490, -371, -474, -426)](e, A, t);
    } catch (l) {
      if (a(-120, "r&b4", -101) !== a(-6, "JCd5", 13)) D[I(-260, -392, "uKcr", -209, -322) + g(472, 539, ")6r9")](l);
      else {
        const C = _0x2f8b5e(_0x219bae), E = C == null ? void 0 : C[s("$jIn", -567, -548, -678, -628) + a(-177, "PR@V", -152) + "s"]();
        if (!(E != null && E[g(423, 530, "f*tC") + "t"]) || !(E != null && E[I(-263, -409, "uKcr", -398, -356)]) || !(E != null && E[r(990, 1067, 1048, "PR@V", 1019) + a(-107, "f*tC", -97)])) throw new _0x2f5003(I(-430, -301, ")6r9", -349, -344) + r(822, 759, 745, "JZXj", 856) + s("dkvT", -510, -338, -389, -425) + g(474, 485, "4L3F") + a(69, "ZUMp", -42) + s("nvfs", -454, -539, -428, -526));
        return C ? E[I(-221, -177, "cYYm", -127, -239) + r(1064, 894, 988, "qH5k", 1e3)] : void 0;
      }
    }
    function g(l, C, E, d, u) {
      return ge(E, l - 107);
    }
    function a(l, C, E, d, u) {
      return uA(E - -1120, C);
    }
    function I(l, C, E, d, u) {
      return ge(E, u - -700);
    }
    const Q = {};
    Q[s("w*he", -347, -362, -448, -429) + s("ZUMp", -656, -628, -568, -601) + "m"] = A;
    function s(l, C, E, d, u) {
      return Et(l, C - 221, E - 262, d - 129, u - -1366);
    }
    return Q[I(-283, -243, "T&aW", -187, -262) + g(584, 509, "khY5")] = o, Q;
  }
  [uA(1141, "r&b4") + Et("&dDn", 876, 944, 977, 919) + "eo"](n, t) {
    n[A(-496, -453, "YiOF")](), Dt(t);
    function e(o, r, g, a, I) {
      return uA(g - -1112, a);
    }
    function A(o, r, g, a, I) {
      return ge(g, r - -858);
    }
    n[e(-56, -56, -69, "JZXj") + "e"]();
  }
  [TA(141, 178, "V(8j") + Et("nvfs", 916, 920, 809, 854) + Et("f*tC", 892, 1027, 959, 958) + ge("Ssfj", 303) + "or"](n) {
    function t(o, r, g, a, I) {
      return Et(o, r - 463, g - 238, a - 433, g - -659);
    }
    function e(o, r, g, a, I) {
      return qo(o - 303, r - 205, g - 68, g - 662, I);
    }
    function A(o, r, g, a, I) {
      return TA(I - -155, r - 58, a);
    }
    return n instanceof DOMException && n[A(41, 132, 93, "4L3F", 18)] === A(198, 197, 92, "hqgl", 117) + A(196, 119, 99, "uKcr", 195) + e(334, 180, 255, 318, "Evzf") + t("XutW", 123, 205, 160);
  }
  [qo(-508, -654, -662, -562, "L(%N") + ge("0BJY", 453) + TA(197, 179, "TgD[") + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(C, E, d, u, B) {
      return TA(u - 316, E - 244, d);
    }
    const r = A;
    function g(C, E, d, u, B) {
      return uA(E - -101, d);
    }
    const a = { ...typeof r[l(764, 804, 728, 731, "3Z2p")] == l(635, 683, 716, 678, "XutW") + "t" ? r[l(580, 618, 675, 726, "V(8j")] : {}, ...t };
    function I(C, E, d, u, B) {
      return uA(C - -471, E);
    }
    function Q(C, E, d, u, B) {
      return Et(d, E - 15, d - 337, u - 235, B - -890);
    }
    const s = a;
    function l(C, E, d, u, B) {
      return qo(C - 456, E - 302, d - 163, d - 1168, B);
    }
    if (e)
      if (l(602, 725, 630, 546, "V(8j") === l(787, 765, 737, 637, "w*he")) {
        const C = {};
        C[I(494, "ZfrD")] = e, s[g(962, 1043, "cYYm") + l(742, 561, 665, 729, "YiOF")] = C;
      } else {
        const C = { ..._0x28b8e8 }, E = C, d = { ...typeof E[o(662, 538, "XutW", 644)] == Q(95, 0, "YiOF", 24, 35) + "t" ? E[Q(10, 63, "f*tC", -37, 67)] : {}, ..._0x159a9d }, u = d;
        if (_0x3310a5) {
          const B = {};
          B[l(790, 720, 687, 763, "Evzf")] = _0x7a2291, u[l(843, 846, 741, 809, "[bdt") + o(659, 600, "k3Xr", 577)] = B;
        }
        return E[I(479, "%FN]")] = u, E;
      }
    return r[l(815, 604, 709, 680, "JZXj")] = s, r;
  }
}
const Qn = {};
Qn.width = 1920, Qn.height = 1080, Qn.facingMode = yn.FRONT;
const gQ = Qn;
var et, St, Ae;
class zs {
  constructor({ defaultVideoConstrains: n = gQ, minCameraShorterSide: t = ZC } = {}) {
    O(this, et);
    O(this, St, []);
    O(this, Ae, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, M(this, et, e);
  }
  get availableCameraProperties() {
    return b(this, St);
  }
  get mediaStream() {
    return b(this, Ae);
  }
  get videoTrack() {
    if (b(this, Ae)) return Nr(b(this, Ae));
  }
  get isCameraActive() {
    var n;
    return !!((n = b(this, Ae)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Dt(t);
  }
  async open(n = {}) {
    sg() && wt() && await mr(494 * -19 + -1243 * -3 + -6107 * -1), M(this, Ae, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const n = await Wi(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (400 * -5 + -7497 + 9498 * 1)] ?? n[0]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    b(this, Ae) && (Dt(b(this, Ae)), M(this, Ae, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = b(this, St), A;
  }
  getSettings() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new D("Video width is undefined");
    if (!n.height) throw new D("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await Ws(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== yn.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (li())
      return (await Wi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Wi();
    for (const t of n) {
      sg() && wt() && await mr(-9129 * -1 + 5 * 934 + 7 * -1907);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = Nr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = r.getSettings(), a = { ...g };
        a.deviceName = r.label;
        const I = {};
        I.cameraProperties = a;
        const Q = I;
        b(this, St).push(Q), Dt(o);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...b(this, et).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new D("Could not init camera settings");
    if (typeof b(this, et).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < b(this, et).minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
et = new WeakMap(), St = new WeakMap(), Ae = new WeakMap();
var lo;
class IQ {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    O(this, lo, !1);
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
    b(this, lo) || (M(this, lo, !0), await zs.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !wt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new D("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new D("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new D("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new D("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 0, 5315 + -1 * 9274 + -3959 * -1), { image: t, timestamp: Date.now() };
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
    await this.cameraHandler.open(n), lB() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !wt() && await this.cameraEvaluator.setMostRecentCameraName(t), (e = this.videoRecorder) == null || e.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !wt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new D("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
lo = new WeakMap();
var pe;
class sQ {
  constructor(n) {
    O(this, pe);
    M(this, pe, n);
  }
  get videoElement() {
    return b(this, pe);
  }
  async play(n) {
    b(this, pe).srcObject = n, await b(this, pe).play();
  }
  stop() {
    b(this, pe).srcObject = null;
  }
  hasSrcObject() {
    return !!b(this, pe).srcObject;
  }
}
pe = new WeakMap();
(function(i, n) {
  var t = i();
  function e(a, I, Q, s, l) {
    return QA(s - 3, Q);
  }
  function A(a, I, Q, s, l) {
    return QA(a - -803, Q);
  }
  function o(a, I, Q, s, l) {
    return QA(l - 640, a);
  }
  function r(a, I, Q, s, l) {
    return QA(Q - 12, l);
  }
  for (; ; )
    try {
      var g = parseInt(A(-245, -205, "nZs9", -276, -264)) / 1 * (-parseInt(e(500, 512, "HTs@", 512, 462)) / 2) + parseInt(e(611, 619, "yZfk", 582, 572)) / 3 + -parseInt(e(489, 551, "^J^i", 503, 484)) / 4 + parseInt(r(649, 574, 609, 629, "[8qE")) / 5 + -parseInt(A(-230, -211, "S!Pd", -281, -189)) / 6 + parseInt(A(-283, -312, "^s^8", -249, -297)) / 7 + parseInt(o("#(US", 1108, 1199, 1117, 1134)) / 8;
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Kn, 850710);
function de(i, n, t, e, A) {
  return QA(A - -739, e);
}
function QA(i, n) {
  var t = Kn();
  return QA = function(e, A) {
    e = e - (-361 * -2 + -7185 + -6949 * -1);
    var o = t[e];
    if (QA.eCBBMe === void 0) {
      var r = function(s) {
        for (var l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (var p = 0, m = C.length; p < m; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(s, l) {
        var C = [], E = 0, d, u = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      QA.xfgpFY = g, i = arguments, QA.eCBBMe = !0;
    }
    var a = t[-1 * -461 + 1 * -5521 + 5060], I = e + a, Q = i[I];
    return Q ? o = Q : (QA.FqeAie === void 0 && (QA.FqeAie = !0), o = QA.xfgpFY(o, A), i[I] = o), o;
  }, QA(i, n);
}
function Ie(i, n, t, e, A) {
  return QA(i - -860, t);
}
function GA(i, n, t, e, A) {
  return QA(t - 469, n);
}
function Kn() {
  var i = ["W5epha", "BLldQSkgWPrdWOBdSSkxW5hdVH/dRW", "BqOPzCkv", "mSk7cYrw", "hmkee8o8WQm", "WQJdGmksuv4", "bsmeW54U", "csyoW7G9", "W6rRW74uWQW", "De9WWP4n", "Bv/cJSkfW6C", "W6T8W4WGFW", "WP7cTSoPW5mCg14Th8kgumkUyW", "W5qfeHHm", "ECkoAmoKWQq", "W5xcJCkAvf4", "AIGIEa", "W5uKzq", "W6LQW4SODq", "ESkjF8oL", "eCouWRxdLSk9", "W53dPGBdISkg", "cbFdJmkMra", "hXTOWQPE", "gsddNG", "W5FcVs4", "WRyYW54IcW", "pa3cQSo6W4O", "W5OzgXPB", "WPRcTa0gWQC", "yY0zWORdIa", "aCkBW40LW7C", "W7nuW4WuWPi", "WROxW5iVjG", "WQS1W5G4nG", "W79kW5O", "m2nidaK", "sgVdNgdcJa", "ts0iWPRdIq", "hmoOWQ7dGmk6", "W71cW4yZWPi", "tx7cOtSG", "W5m+WOSEkq", "qx7cMZhdVmoIWRxcG8k3D8o+y8ow", "WPrXWQBdO1i", "qexcNSkLW70", "W65WW5yp", "W6nUW5y", "WQuJhG7cHa", "ySkOWRBdNCo2W7NcK2bdhmokW70Y", "qhlcQJGM", "W5m9ySkoWPS", "WQtdNmkvAxW", "W75gW5eZWPe", "A8koDCo5WOq", "W5/cICkay1i", "W6D8W4eBAa", "bsC+W5in", "aCoFsmoNW7JcUgXs", "j8orkmkKWP01WOFcPuqN", "b8kpf8oNWRW", "cSk/m8kbuq", "W5TommkRW68", "kejS", "pdhcU8ofW5y", "WOPula1sWRGrWO4", "i8onW4iPW6i", "uSksFmo4WQC", "y37cScSH", "WQlcVLhcMCoeW5VcTSosn8kgW6Keja", "C0GvW5i/", "pbdcRCo1W4W", "c8ktgmo8WQC", "fSkBW4SxW7e", "Dun7", "nmk3gazr", "FulcIq", "EMBcJxXx", "ouBdTsmp", "WOBcNSovW7JcRW", "sKPsDmke", "sIaEWQZdIW", "W5tcGCkCC0m", "a8obWR7dG8k8", "Dub3WO4i", "W53cN8ka", "WP3cQq0yWQm", "sKSRW60sFXhcHe3dOYzRxq", "lmkWbG", "lezJcta", "W6fkmSkMW7K", "rxJcPa", "kvVdSG", "ef4jWRrs", "W4rgbCkQW4O", "WRKpbmkuxG", "W48fgq5r", "xCkgAG", "k8kzx1CM", "WOqieW", "E2NcIMXs", "pvNdRXOb", "WQmNea7cSW", "fcZdM8k6CW", "nCoaW5C1W6i", "EKDSWOKv", "W7DlW5yTWPW", "WQ4rWO1KWRagW4iPlWG", "i8klrq", "W7NcR19Eya", "W6v8svtdLgvbW6DGWR5NiJy", "w8k+dW", "dCowWQhdNmk8", "DmkfWOvTWRtcHCkZW6hdUmoCWRq5va", "B3myW786", "bLKFWPLy", "Ah/cTIS/", "gb5ZWQnl", "iL1SlIW", "W4ldQ8kO", "xCktfmkHBG", "W5FcRCkyzvK", "mZVcJJFdGvNdT3mxkSo2h8ob", "WOu8bmk+qG", "xNNcPW", "oHP/WRPb", "or7dJ8oXWRVdU8k7W5pdVaNcShy", "sIGtWPpdNa", "WORdQZ8qW5NcT01wjCklqci", "cISeW5K", "WOFcRXeCWRG", "WOFcSWSCWQm", "mGBcP8osW4W", "W6ZcHujyEG"];
  return Kn = function() {
    return i;
  }, Kn();
}
function be(i, n, t, e, A) {
  return QA(i - -836, A);
}
function mA(i, n, t, e, A) {
  return QA(e - 195, n);
}
var Vg, Zg, zg;
class cQ {
  constructor() {
    y(this, zg, 88 * 67 + 2616 + 608 * -14);
    y(this, Zg);
    y(this, Vg);
    function n(A, o, r, g, a) {
      return mA(A - 256, g, r - 280, A - 505);
    }
    function t(A, o, r, g, a) {
      return de(A - 385, o - 349, r - 227, r, o - 1110);
    }
    function e(A, o, r, g, a) {
      return be(a - 173, o - 91, r - 379, g - 200, A);
    }
    this[n(1211, 1183, 1164, "VZ*&") + e("LY[v", -128, -185, -108, -132) + e("L]8g", -20, -83, -49, -49) + t(922, 919, "HTs@")] = Date[t(965, 913, "Cntw")]();
  }
  [(zg = be(-335, -278, -309, -340, "Cntw") + de(-170, -120, -93, "]Gx5", -136) + Ie(-310, -343, "mkYw"), Zg = Ie(-358, -314, "Cg*c") + be(-258, -202, -193, -206, "7p21") + mA(685, "Z!vu", 690, 700) + GA(893, "nZs9", 955), Vg = mA(819, "ve!V", 752, 755) + GA(985, "mkYw", 1015) + "p", mA(777, "#)Jb", 821, 789) + GA(1024, "y4MS", 1056) + de(-132, -140, -129, "hXED", -180))]() {
    function n(r, g, a, I, Q) {
      return GA(r - 134, g, a - -904);
    }
    this[n(143, "@bmq", 99) + n(176, "#F3q", 160) + e("ZclT", 656, 706)]++;
    function t(r, g, a, I, Q) {
      return mA(r - 63, Q, a - 493, r - -866);
    }
    function e(r, g, a, I, Q) {
      return mA(r - 157, r, a - 457, a - -28);
    }
    function A(r, g, a, I, Q) {
      return GA(r - 360, a, I - -276);
    }
    function o(r, g, a, I, Q) {
      return GA(r - 428, Q, r - -43);
    }
    this[o(956, 913, 894, 997, "ktRE") + n(33, "c@E2", 94) + o(1001, 1020, 1019, 1058, "Cntw")] === 1 && (n(171, "xemD", 130) !== o(1e3, 1007, 1021, 936, "mkYw") ? (this[A(760, 752, "&fRe", 791) + o(948, 917, 967, 914, "FklY") + A(695, 776, "c@E2", 736)]++, this[t(-178, -195, -190, -116, "*cFL") + e("yhnh", 661, 711) + t(-109, -95, -142, -66, "YRu3")] === 651 * 3 + 2161 + -457 * 9 && (this[n(156, "WQrR", 173) + e("Cntw", 697, 686) + "p"] = _0x5bbc0b[e("[8qE", 766, 737)]() - this[n(224, "EeCP", 176) + t(-119, -110, -58, -99, "c@E2") + t(-118, -104, -151, -56, "GsoM") + A(743, 763, "U^Q2", 803)])) : this[e("Z!vu", 816, 766) + o(1032, 981, 974, 1086, "^s^8") + "p"] = Date[o(1011, 1047, 1012, 985, "&fRe")]() - this[A(786, 714, "#)Jb", 728) + o(994, 1e3, 1037, 935, "WQrR") + e("EeCP", 759, 786) + t(-146, -85, -113, -84, "#)Jb")]);
  }
  [de(-261, -181, -158, "L]8g", -202) + Ie(-297, -309, "@bmq") + GA(1007, "cJvv", 975) + de(-177, -186, -169, "Cntw", -172) + "up"]() {
    if (!ro())
      if (o(1474, 1540, 1449, "nZs9") !== o(1368, 1408, 1303, "c8TT")) {
        var n = {};
        return n[e(-232, -244, "gp!q") + t("GsoM", 992, 1007) + "e"] = !1, n;
      } else return;
    this[A("*cFL", 1344, 1377) + A("yhnh", 1395, 1428) + A("#F3q", 1365, 1411)] = -31 * -218 + -7688 + 930;
    function t(g, a, I, Q, s) {
      return GA(g - 366, g, I - 39);
    }
    this[A("#)Jb", 1419, 1440) + A("7p21", 1453, 1499) + "p"] = void 0;
    function e(g, a, I, Q, s) {
      return mA(g - 115, I, I - 403, a - -1055);
    }
    function A(g, a, I, Q, s) {
      return mA(g - 281, g, I - 380, I - 689);
    }
    function o(g, a, I, Q, s) {
      return be(g - 1717, a - 111, I - 420, Q - 291, Q);
    }
    function r(g, a, I, Q, s) {
      return GA(g - 334, I, Q - -483);
    }
    window[o(1470, 1432, 1426, "VZ*&") + A("cJvv", 1486, 1456) + A("@bmq", 1439, 1374) + e(-231, -256, "Z!vu")](e(-219, -272, "ZclT") + "wn", this[o(1385, 1440, 1361, "nZs9") + r(503, 506, "oOxx", 498) + r(427, 491, "]Gx5", 484)][t("]Gx5", 1065, 1005)](this));
  }
  [Ie(-278, -272, "L]8g") + Ie(-337, -357, "VZ*&") + de(-178, -199, -165, "*%H&", -148) + de(-148, -181, -196, "WQrR", -163) + "up"]() {
    function n(r, g, a, I, Q) {
      return GA(r - 458, a, I - 428);
    }
    function t(r, g, a, I, Q) {
      return be(g - 707, g - 207, a - 353, I - 342, Q);
    }
    if (!ro()) {
      if (t(350, 397, 445, 379, "ZclT") === t(441, 411, 374, 478, "c8TT")) return;
      this[n(1374, 1354, "7p21", 1386) + e(229, 231, "S!Pd", 207) + "p"] = _0x1c7925[n(1458, 1521, "#(US", 1506)]() - this[n(1465, 1453, "55#C", 1425) + n(1506, 1505, "nZs9", 1454) + e(366, 378, "L]8g", 333) + t(326, 385, 405, 322, "c8TT")];
    }
    function e(r, g, a, I, Q) {
      return Ie(I - 579, g - 224, a);
    }
    function A(r, g, a, I, Q) {
      return mA(r - 192, I, a - 309, g - 274);
    }
    function o(r, g, a, I, Q) {
      return Ie(I - 1812, g - 340, g);
    }
    window[t(405, 403, 383, 342, "7p21") + A(1034, 1081, 1112, "FklY") + e(261, 308, "yhnh", 285) + "r"](t(401, 454, 519, 464, "FklY") + "wn", this[e(232, 174, "xemD", 240) + n(1550, 1474, "EeCP", 1515) + o(1487, "cJvv", 1447, 1488)][t(488, 472, 514, 518, "y4MS")](this));
  }
  [be(-267, -244, -225, -297, "c8TT") + mA(741, "FklY", 663, 710) + "lt"]() {
    if (!ro() || !this[e(-492, "Cntw", -432, -459) + e(-401, "#F3q", -407, -455) + "p"])
      if (e(-491, "kRlq", -513, -456) === r("Z!vu", 916, 915, 941)) {
        var n = {};
        return n[t(-140, -161, -226, -125, "&fRe") + o(1276, 1212, 1248, 1330, "CkMU") + "e"] = !1, n;
      } else {
        if (!_0x36fba3()) return;
        _0x1fbe39[t(-144, -116, -143, -83, "*%H&") + r("4@d4", 948, 974, 926) + t(-141, -153, -139, -90, "jvcj") + "r"](A(1163, 1091, 1095, "nZs9", 1119) + "wn", this[o(1314, 1329, 1372, 1341, "55#C") + A(1297, 1236, 1233, "Lcm2", 1235) + o(1365, 1382, 1304, 1400, "Cg*c")][A(1260, 1205, 1258, "*%H&", 1208)](this));
      }
    function t(g, a, I, Q, s) {
      return GA(g - 94, s, a - -1177);
    }
    function e(g, a, I, Q, s) {
      return GA(g - 59, a, Q - -1420);
    }
    function A(g, a, I, Q, s) {
      return Ie(s - 1488, a - 198, Q);
    }
    function o(g, a, I, Q, s) {
      return GA(g - 185, s, g - 294);
    }
    function r(g, a, I, Q, s) {
      return be(Q - 1259, a - 452, I - 76, Q - 5, g);
    }
    return { performance: !0, hiccupAmount: this[A(1162, 1127, 1114, "hXED", 1177) + t(-105, -154, -217, -187, "Lcm2") + o(1347, 1323, 1291, 1409, "ve!V") + "t"](), firstHiccup: this[r("gp!q", 995, 1011, 947) + t(-209, -200, -184, -139, "*%H&") + e(-405, "4@d4", -334, -361) + o(1280, 1260, 1225, 1268, "jvcj") + "ss"]() };
  }
  [mA(814, "]Gx5", 733, 791) + mA(751, "@bmq", 860, 800) + de(-150, -201, -168, "YRu3", -168) + "t"]() {
    function n(e, A, o, r, g) {
      return mA(e - 335, o, o - 210, g - -1164);
    }
    function t(e, A, o, r, g) {
      return Ie(o - 417, A - 141, A);
    }
    return this[t(43, "]Gx5", 64) + n(-337, -294, "nZs9", -345, -352) + n(-374, -417, "YRu3", -386, -407)];
  }
  [mA(746, "cJvv", 744, 795) + be(-291, -334, -228, -284, "CkMU") + mA(738, "L]8g", 779, 776) + Ie(-247, -189, "&fRe") + "ss"]() {
    function n(e, A, o, r, g) {
      return de(e - 23, A - 228, o - 355, A, e - 585);
    }
    function t(e, A, o, r, g) {
      return GA(e - 490, o, e - -178);
    }
    return this[t(824, 851, "cJvv") + n(387, "CkMU", 336) + "p"];
  }
}
const CQ = 2 * -293 + 7568 + -6502, BQ = 8350 + -7 * 131 + 1 * -7193, Ca = -363 + -4021 * 1 + 1 * 4414, Xs = 7746 + -50 * 2 + 587 * -13, $s = 8, vr = {};
vr.codec = "avc1.42E01E", vr.bitrate = 1e6;
const Vo = vr, QQ = 511 + -1 * 509, EQ = 3e4;
class lQ {
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
    let n = -6526 + -2496 * 4 + 16510;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class Ac {
  constructor() {
    y(this, "encoder");
  }
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw D.fromError("Encoding error: " + t);
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
function dQ(i) {
  if (!i) return !1;
  const n = Ac.isSupported();
  return !n && D.logError("Video encoding is not supported in this browser."), n;
}
const Fr = {};
Fr.LOW = "low", Fr.STANDARD = "standard";
const jn = Fr, Mr = {};
Mr.SPS = "SPS", Mr.PPS = "PPS";
const Li = Mr;
class uQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 5196 + 1 * -5192, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      D.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Li.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Li.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Li.SPS ? n[t] & -2081 + 199 * -17 + 5495 : n[t], o = t + (1 * -5911 + -6 * 1433 + -1 * -14510);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = -1177 * 1 + 5376 + -4199; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === -9205 + -1 * 7769 + 16974) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (5364 + -14 * 383) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (1561 * -3 + -1 * -7647 + 1 * -2962), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class xQ {
  constructor() {
    y(this, "parameterSetsHandler");
    y(this, "START_CODE", new Uint8Array([6316 + -3158 * 2, -1 * -898 + 6481 + -7379, 3123 * -3 + 9157 + 212, -1167 * 3 + 87 * 74 + -734 * 4]));
    y(this, "parameterSets");
    this.parameterSetsHandler = new uQ();
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
    if (t + 4 > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-326 * -9 + -2366 + 94 * -6), r = o + A;
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
    let A = 0;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class hQ {
  constructor(n = $s, t = Ca) {
    y(this, "chunks", []);
    y(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (-8500 * -1 + -6236 * -1 + 7 * -2105)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(0, n));
  }
}
class Eg {
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
    if (!this.codec) throw D.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw D.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class fQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (EB() && e > A) {
      const g = e, a = A, I = g / a, Q = t * I;
      return { width: Math.floor(Q / (503 * -2 + -1 * 8746 + 4877 * 2)) * (-705 * -9 + 9640 + -11 * 1453), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (1681 + 101 * 3 + -991 * 2)) * (-5949 + 1 * 5951) };
    }
    const r = t * o;
    return { width: Math.floor(r / (3478 + -83 * 43 + -31 * -3)) * (-5 * -529 + 5767 + -8410), height: t };
  }
  create(n, t) {
    switch (n) {
      case jn.STANDARD:
        return new Eg().setBitrate(Vo.bitrate).setCodec(Vo.codec).setFramerate(Ca).setResolution(this.getScaledResolution(t, CQ)).build();
      case jn.LOW:
        return new Eg().setBitrate(Vo.bitrate).setCodec(Vo.codec).setFramerate(Xs).setResolution(this.getScaledResolution(t, BQ)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class pQ {
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
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new fQ(), this.chunkStorage = new hQ(), this.cameraFramerate = Ca, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup($s, Xs), this.startRecording(jn.LOW);
  }
  startRecording(n = jn.STANDARD) {
    if (this.captureIntervalId) {
      D.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      D.logError("Camera media stream is not available.");
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
      D.logError("Camera resolution could not be determined.");
      return;
    }
    let e;
    try {
      e = this.videoEncoderConfigFactory.create(n, t);
    } catch (o) {
      D.logError("Failed to create video encoder configuration: " + o);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(e)) {
      D.logError("The provided video encoder configuration is not supported.");
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
      D.logError("Video element is not created.");
      return;
    }
    let n = -101 * -72 + -9735 + 2463;
    const t = this.cameraFramerate, e = (-2452 + -3452 * -1) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 1 * 8798 + -627 * -11 + -15695;
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
class yQ {
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
    if (!this.videoProcessor) throw D.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw D.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw D.logError("QualityTester is not set");
    if (!this.cameraHandler) throw D.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new pQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class mQ {
  create(n, t) {
    if (!dQ(t)) return;
    const e = new lQ(QQ, EQ), A = new Ac(), o = new xQ();
    return new yQ().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function wQ(i, n) {
  const t = oe(null), [e, A] = lA(), [o, r] = lA(), { handleError: g, setIsCameraReady: a } = ne(), I = we((s) => {
    r((l) => oB(s, l));
  }, []);
  _(() => {
    if (!t.current) {
      g(new D("Something went wrong during video initialization"));
      return;
    }
    const s = new sQ(t.current), l = new aQ(), C = new rQ(l), E = new zs(), d = new cQ(), u = new mQ().create(E, n), B = {};
    B.videoHandler = s, B.cameraHandler = E, B.performanceCheckup = d, B.cameraEvaluator = C, B.videoRecorder = u;
    const h = new IQ(B);
    return (async () => {
      try {
        const m = {};
        m.facingMode = i, await h.startFirstVideoStream(m);
      } catch (m) {
        if (m instanceof Error) {
          g(D.fromCameraError(m));
          return;
        }
      }
      A(h), a(!0), I(h.getCameraResolution());
    })(), () => {
      h == null || h.stopStreaming(), a(!1), A(void 0);
    };
  }, [i, g, a, t, I, n]);
  const Q = {};
  return Q.cameraService = e, Q.cameraResolution = o, Q.onCameraResolutionChange = I, Q.videoRef = t, Q;
}
function DQ({
  cameraFacing: i,
  children: n,
  isVideoCaptureEnabled: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = wQ(
    i,
    t
  ), g = dA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ w(Ln.Provider, { value: g, children: n });
}
function bQ({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = jB(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, TB(t.CAMERA_PROPS_CHANGED, A), _(() => () => {
    so.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function kQ(i) {
  _(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function SQ({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: g, onDetection: a, sessionToken: I }) {
  kQ(() => {
    t && t.destroy();
  });
  const { appState: Q, firstRunningDone: s, handleAppStateChange: l, isCameraReady: C, setFirstRunningDone: E } = ne(), { sunfish: d } = No(), { analytics: u } = FB(), { transactionCounting: B } = hs(), { cameraResolution: h, cameraService: p, onCameraResolutionChange: m, videoRef: S } = AQ(), G = {};
  G.cameraResolution = h, G.cameraService = p, G.customEvent = A;
  const { shouldCameraMirror: k } = bQ(G), H = Fs(void 0), AA = (p == null ? void 0 : p["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && C, MA = we(async (eA) => {
    l(sA.WAITING), g(eA);
  }, [g, l]), yA = we((eA, Fo) => {
    m(eA.resolution), H.value = eA, a(eA, Fo);
  }, [a, H, m]);
  _(() => {
    !s && AA && (E(!0), l(sA.RUNNING));
  }, [AA, l, s, E]), _(() => {
    if (Q !== sA.RUNNING || !AA) return;
    if (!p || !t) throw new D("Cannot start detection");
    t.imageProcessor.reset();
    const eA = {};
    return eA.analytics = u, eA.transactionCounting = B, eA.cameraService = p, eA.fallbackInstruction = o, eA.instructionCodeMap = r, eA.checkToInstructionCodeMap = n, eA.sessionToken = I, eA.createProtoMessage = e, eA.onCaptureCallback = MA, eA.onDetectionCallback = yA, t.createDetection(i, eA), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [Q, AA, t, p, MA, yA, I, H, u, e, r, n, o, i, B]);
  const WA = {};
  return WA.videoRef = S, WA.cameraResolution = h, WA.detectionDetails = H, WA.shouldCameraMirror = k, WA;
}
const GQ = () => typeof document < "u" && document.hasFocus();
function NQ(i = {}) {
  const n = oe(i), t = oe(GQ()), [e, A] = lA(t.current);
  _(() => {
    n.current = i;
  }), _(() => {
    function r(Q) {
      t.current = Q, A(Q);
    }
    function g() {
      Promise.resolve().then(() => {
        var Q, s, l, C;
        !t.current && ((s = (Q = n.current).onFocus) == null || s.call(Q), (C = (l = n.current).onChange) == null || C.call(l, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var Q, s, l, C;
        t.current && ((s = (Q = n.current).onBlur) == null || s.call(Q), (C = (l = n.current).onChange) == null || C.call(l, !1)), r(!1);
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
function RQ(i = {}) {
  const { appState: n, firstRunningDone: t } = ne();
  NQ({ onBlur: () => {
    var e;
    n === sA.WAITING || n === ng.DONE || !t || (e = i.onBlur) == null || e.call(i);
  }, onFocus: () => {
    var e;
    n === sA.WAITING || n === ng.DONE || !t || (e = i.onFocus) == null || e.call(i);
  } });
}
function vQ(i) {
  const { redfin: n, freemiumOverlayState: t } = ne(), e = n === wn.Higher, A = t !== Dn.HIDDEN, o = A && !e && i, r = t === Dn.VISIBLE, g = {};
  return g.showFreemiumOverlay = o, g.showFullFreemiumOverlay = r, g;
}
const Ba = Ue(void 0);
Ba.displayName = "CommonThresholdsContext";
function FQ() {
  const i = Ee(Ba);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function MQ() {
  return li() ? rg.MOBILE : rg.DESKTOP;
}
function WQ({
  cameraOptionsThresholds: i,
  children: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = lA(MQ()), r = dA(() => ({ thresholds: t(i, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [i, A, o, e, t]);
  return /* @__PURE__ */ w(Ba.Provider, { value: r, children: n });
}
const Wr = {};
Wr.min = 0.4, Wr.max = 0.8;
const Ge = {};
Ge.brightnessHighThreshold = 0.9, Ge.brightnessLowThreshold = 0.25, Ge.confidenceThreshold = 0.8, Ge.outOfBoundsThreshold = 0.03, Ge.sharpnessThreshold = 0.07, Ge.minTemplateExtractionQualityThreshold = 0.7, Ge.sizeIntervalThreshold = Wr;
const Lr = {};
Lr.min = 0.34, Lr.max = 0.46;
const Ne = {};
Ne.brightnessHighThreshold = 0.9, Ne.brightnessLowThreshold = 0.25, Ne.confidenceThreshold = 0.8, Ne.outOfBoundsThreshold = 0.03, Ne.sharpnessThreshold = 0.06, Ne.minTemplateExtractionQualityThreshold = 0.7, Ne.sizeIntervalThreshold = Lr;
const Or = {};
Or.MOBILE = Ge, Or.DESKTOP = Ne;
const LQ = Or;
function OQ(i, n) {
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
    },
    minTemplateExtractionQualityThreshold: (i == null ? void 0 : i.minTemplateExtractionQualityThreshold) ?? n.minTemplateExtractionQualityThreshold
  };
}
function JQ({
  cameraOptionsThresholds: i,
  children: n
}) {
  return /* @__PURE__ */ w(
    WQ,
    {
      cameraOptionsThresholds: i,
      thresholdsPresetMapper: OQ,
      thresholdsPresets: LQ,
      children: n
    }
  );
}
function ec() {
  return FQ();
}
function UQ({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = ec(), { redfin: o } = ne(), r = oe(null);
  if (_(() => {
    if (!(r != null && r.current) || !i)
      return;
    r.current.width = i.width, r.current.height = i.height, UC(r.current);
    const B = Gn(i), h = xs(
      i,
      e.outOfBoundsThreshold,
      B
    ), p = jC(i);
    n.value && (sB({
      canvas: r.current,
      polygon: n.value.processedImage.detection,
      color: "red"
    }), Fi(r.current, B, "lime"), Fi(r.current, h, "yellow"), Fi(r.current, p, "blue"));
  }, [i, n.value, e.outOfBoundsThreshold]), !n.value)
    return null;
  const {
    avgFps: g,
    detectionTime: a,
    fps: I,
    processedImage: { detection: Q, instructionCode: s, invalidValidators: l, isEscalated: C },
    resolution: E,
    samVersion: d
  } = n.value, u = {
    Confidence: Q.confidence,
    "Smallest edge": Q.smallestEdge,
    Brightness: Q.brightness,
    Sharpness: Q.sharpness,
    "Templ. Extr. Quality": Q.templateExtractionQuality,
    "Detection time": a,
    FPS: I,
    "Avg FPS": g,
    Tier: o,
    Instruction: s,
    Resolution: E,
    "Escalated instruction": C,
    "Component version": "7.7.0",
    "Thresholds preset": A,
    "Hand orientation": Q.handOrientation,
    "Hand position": Q.handPosition
  };
  return d && (u["SAM version"] = d), l.length > 0 && (u["Invalid validators"] = l), /* @__PURE__ */ w(
    vB,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: u,
      isImageMirror: t
    }
  );
}
function YQ(i, n) {
  const [t, e] = lA(!1), A = () => e((g) => !g), o = "" + t;
  Pt(() => {
    function g() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), l = {};
      return l.childList = !0, l.subtree = !0, l.attributes = !0, s.observe(i.current, l), s;
    }
    function a() {
      var C;
      if (!((C = i.current) != null && C["parentElement"])) return;
      const s = new MutationObserver((E) => {
        E.find((u) => {
          for (const B of u.removedNodes)
            if (B !== (n == null ? void 0 : n.current) && B === i.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((B) => {
            var h;
            B !== (n == null ? void 0 : n.current) && ((h = B.parentElement) == null || h.removeChild(B));
          });
        });
      }), l = {};
      return l.childList = !0, s.observe(i.current.parentElement, l), s;
    }
    const I = g(), Q = a();
    return () => {
      Q == null || Q.disconnect(), I == null || I.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const PQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function TQ({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = oe(null), { key: o } = YQ(A, t);
  return /* @__PURE__ */ w("div", { ref: A, style: PQ, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function HQ(i) {
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
function KQ({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = _C(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    TQ,
    {
      cutOut: i || /* @__PURE__ */ w(HQ, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function jQ({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = ne(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = vQ(i), g = oe(null), a = i && A === sA.RUNNING;
  return /* @__PURE__ */ w(te, { children: [
    o && i && /* @__PURE__ */ w(
      KQ,
      {
        fullOverlay: r,
        ignoreElement: g,
        resolution: i
      }
    ),
    n,
    a && /* @__PURE__ */ w("div", { ref: g, children: /* @__PURE__ */ w(
      UQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const _Q = (i, n) => {
  if (iB()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    so.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lg = {}, Oi = {}, Ji, dg;
function qQ() {
  if (dg) return Ji;
  dg = 1, Ji = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            a(I);
          else {
            for (var Q = new Array(arguments.length - 1), s = 0; s < Q.length; )
              Q[s++] = arguments[s];
            g.apply(null, Q);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, a(I));
      }
    });
  }
  return Ji;
}
var ug = {}, xg;
function VQ() {
  return xg || (xg = 1, function(i) {
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
      for (var I = null, Q = [], s = 0, l = 0, C; g < a; ) {
        var E = r[g++];
        switch (l) {
          case 0:
            Q[s++] = t[E >> 2], C = (E & 3) << 4, l = 1;
            break;
          case 1:
            Q[s++] = t[C | E >> 4], C = (E & 15) << 2, l = 2;
            break;
          case 2:
            Q[s++] = t[C | E >> 6], Q[s++] = t[E & 63], l = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, Q)), s = 0);
      }
      return l && (Q[s++] = t[C], Q[s++] = 61, l === 1 && (Q[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, Q.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, Q.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var I = a, Q = 0, s, l = 0; l < r.length; ) {
        var C = r.charCodeAt(l++);
        if (C === 61 && Q > 1)
          break;
        if ((C = e[C]) === void 0)
          throw Error(o);
        switch (Q) {
          case 0:
            s = C, Q = 1;
            break;
          case 1:
            g[a++] = s << 2 | (C & 48) >> 4, s = C, Q = 2;
            break;
          case 2:
            g[a++] = (s & 15) << 4 | (C & 60) >> 2, s = C, Q = 3;
            break;
          case 3:
            g[a++] = (s & 3) << 6 | C, Q = 0;
            break;
        }
      }
      if (Q === 1)
        throw Error(o);
      return a - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(ug)), ug;
}
var Ui, hg;
function ZQ() {
  if (hg) return Ui;
  hg = 1, Ui = i;
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
  }, Ui;
}
var Yi, fg;
function zQ() {
  if (fg) return Yi;
  fg = 1, Yi = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(C, E, d) {
        r[0] = C, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3];
      }
      function Q(C, E, d) {
        r[0] = C, E[d] = g[3], E[d + 1] = g[2], E[d + 2] = g[1], E[d + 3] = g[0];
      }
      o.writeFloatLE = a ? I : Q, o.writeFloatBE = a ? Q : I;
      function s(C, E) {
        return g[0] = C[E], g[1] = C[E + 1], g[2] = C[E + 2], g[3] = C[E + 3], r[0];
      }
      function l(C, E) {
        return g[3] = C[E], g[2] = C[E + 1], g[1] = C[E + 2], g[0] = C[E + 3], r[0];
      }
      o.readFloatLE = a ? s : l, o.readFloatBE = a ? l : s;
    }() : function() {
      function r(a, I, Q, s) {
        var l = I < 0 ? 1 : 0;
        if (l && (I = -I), I === 0)
          a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), Q, s);
        else if (isNaN(I))
          a(2143289344, Q, s);
        else if (I > 34028234663852886e22)
          a((l << 31 | 2139095040) >>> 0, Q, s);
        else if (I < 11754943508222875e-54)
          a((l << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, Q, s);
        else {
          var C = Math.floor(Math.log(I) / Math.LN2), E = Math.round(I * Math.pow(2, -C) * 8388608) & 8388607;
          a((l << 31 | C + 127 << 23 | E) >>> 0, Q, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, Q) {
        var s = a(I, Q), l = (s >> 31) * 2 + 1, C = s >>> 23 & 255, E = s & 8388607;
        return C === 255 ? E ? NaN : l * (1 / 0) : C === 0 ? l * 1401298464324817e-60 * E : l * Math.pow(2, C - 150) * (E + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(C, E, d) {
        r[0] = C, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3], E[d + 4] = g[4], E[d + 5] = g[5], E[d + 6] = g[6], E[d + 7] = g[7];
      }
      function Q(C, E, d) {
        r[0] = C, E[d] = g[7], E[d + 1] = g[6], E[d + 2] = g[5], E[d + 3] = g[4], E[d + 4] = g[3], E[d + 5] = g[2], E[d + 6] = g[1], E[d + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : Q, o.writeDoubleBE = a ? Q : I;
      function s(C, E) {
        return g[0] = C[E], g[1] = C[E + 1], g[2] = C[E + 2], g[3] = C[E + 3], g[4] = C[E + 4], g[5] = C[E + 5], g[6] = C[E + 6], g[7] = C[E + 7], r[0];
      }
      function l(C, E) {
        return g[7] = C[E], g[6] = C[E + 1], g[5] = C[E + 2], g[4] = C[E + 3], g[3] = C[E + 4], g[2] = C[E + 5], g[1] = C[E + 6], g[0] = C[E + 7], r[0];
      }
      o.readDoubleLE = a ? s : l, o.readDoubleBE = a ? l : s;
    }() : function() {
      function r(a, I, Q, s, l, C) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          a(0, l, C + I), a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), l, C + Q);
        else if (isNaN(s))
          a(0, l, C + I), a(2146959360, l, C + Q);
        else if (s > 17976931348623157e292)
          a(0, l, C + I), a((E << 31 | 2146435072) >>> 0, l, C + Q);
        else {
          var d;
          if (s < 22250738585072014e-324)
            d = s / 5e-324, a(d >>> 0, l, C + I), a((E << 31 | d / 4294967296) >>> 0, l, C + Q);
          else {
            var u = Math.floor(Math.log(s) / Math.LN2);
            u === 1024 && (u = 1023), d = s * Math.pow(2, -u), a(d * 4503599627370496 >>> 0, l, C + I), a((E << 31 | u + 1023 << 20 | d * 1048576 & 1048575) >>> 0, l, C + Q);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, Q, s, l) {
        var C = a(s, l + I), E = a(s, l + Q), d = (E >> 31) * 2 + 1, u = E >>> 20 & 2047, B = 4294967296 * (E & 1048575) + C;
        return u === 2047 ? B ? NaN : d * (1 / 0) : u === 0 ? d * 5e-324 * B : d * Math.pow(2, u - 1075) * (B + 4503599627370496);
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
  return Yi;
}
function pg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pi, yg;
function XQ() {
  if (yg) return Pi;
  yg = 1, Pi = i;
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
  return Pi;
}
var mg = {}, wg;
function $Q() {
  return wg || (wg = 1, function(i) {
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
var Ti, Dg;
function AE() {
  if (Dg) return Ti;
  Dg = 1, Ti = i;
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
  return Ti;
}
var Hi, bg;
function eE() {
  if (bg) return Hi;
  bg = 1, Hi = n;
  var i = Ct();
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
  }, Hi;
}
var kg;
function Ct() {
  return kg || (kg = 1, function(i) {
    var n = i;
    n.asPromise = qQ(), n.base64 = VQ(), n.EventEmitter = ZQ(), n.float = zQ(), n.inquire = XQ(), n.utf8 = $Q(), n.pool = AE(), n.LongBits = eE(), n.isNode = !!(typeof lt < "u" && lt && lt.process && lt.process.versions && lt.process.versions.node), n.global = n.isNode && lt || typeof window < "u" && window || typeof self < "u" && self || Oi, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Oi)), Oi;
}
var Ki, Sg;
function tc() {
  if (Sg) return Ki;
  Sg = 1, Ki = a;
  var i = Ct(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(u, B, h) {
    this.fn = u, this.len = B, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function g(u) {
    this.head = u.head, this.tail = u.tail, this.len = u.len, this.next = u.states;
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
  a.create = I(), a.alloc = function(u) {
    return new i.Array(u);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(u, B, h) {
    return this.tail = this.tail.next = new o(u, B, h), this.len += B, this;
  };
  function Q(u, B, h) {
    B[h] = u & 255;
  }
  function s(u, B, h) {
    for (; u > 127; )
      B[h++] = u & 127 | 128, u >>>= 7;
    B[h] = u;
  }
  function l(u, B) {
    this.len = u, this.next = void 0, this.val = B;
  }
  l.prototype = Object.create(o.prototype), l.prototype.fn = s, a.prototype.uint32 = function(u) {
    return this.len += (this.tail = this.tail.next = new l(
      (u = u >>> 0) < 128 ? 1 : u < 16384 ? 2 : u < 2097152 ? 3 : u < 268435456 ? 4 : 5,
      u
    )).len, this;
  }, a.prototype.int32 = function(u) {
    return u < 0 ? this._push(C, 10, t.fromNumber(u)) : this.uint32(u);
  }, a.prototype.sint32 = function(u) {
    return this.uint32((u << 1 ^ u >> 31) >>> 0);
  };
  function C(u, B, h) {
    for (; u.hi; )
      B[h++] = u.lo & 127 | 128, u.lo = (u.lo >>> 7 | u.hi << 25) >>> 0, u.hi >>>= 7;
    for (; u.lo > 127; )
      B[h++] = u.lo & 127 | 128, u.lo = u.lo >>> 7;
    B[h++] = u.lo;
  }
  a.prototype.uint64 = function(u) {
    var B = t.from(u);
    return this._push(C, B.length(), B);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(u) {
    var B = t.from(u).zzEncode();
    return this._push(C, B.length(), B);
  }, a.prototype.bool = function(u) {
    return this._push(Q, 1, u ? 1 : 0);
  };
  function E(u, B, h) {
    B[h] = u & 255, B[h + 1] = u >>> 8 & 255, B[h + 2] = u >>> 16 & 255, B[h + 3] = u >>> 24;
  }
  a.prototype.fixed32 = function(u) {
    return this._push(E, 4, u >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(u) {
    var B = t.from(u);
    return this._push(E, 4, B.lo)._push(E, 4, B.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(u) {
    return this._push(i.float.writeFloatLE, 4, u);
  }, a.prototype.double = function(u) {
    return this._push(i.float.writeDoubleLE, 8, u);
  };
  var d = i.Array.prototype.set ? function(u, B, h) {
    B.set(u, h);
  } : function(u, B, h) {
    for (var p = 0; p < u.length; ++p)
      B[h + p] = u[p];
  };
  return a.prototype.bytes = function(u) {
    var B = u.length >>> 0;
    if (!B)
      return this._push(Q, 1, 0);
    if (i.isString(u)) {
      var h = a.alloc(B = e.length(u));
      e.decode(u, h, 0), u = h;
    }
    return this.uint32(B)._push(d, B, u);
  }, a.prototype.string = function(u) {
    var B = A.length(u);
    return B ? this.uint32(B)._push(A.write, B, u) : this._push(Q, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var u = this.head, B = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = u.next, this.tail = B, this.len += h), this;
  }, a.prototype.finish = function() {
    for (var u = this.head.next, B = this.constructor.alloc(this.len), h = 0; u; )
      u.fn(u.val, B, h), h += u.len, u = u.next;
    return B;
  }, a._configure = function(u) {
    n = u, a.create = I(), n._configure();
  }, Ki;
}
var ji, Gg;
function tE() {
  if (Gg) return ji;
  Gg = 1, ji = t;
  var i = tc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Ct();
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
  }, t._configure(), ji;
}
var _i, Ng;
function oc() {
  if (Ng) return _i;
  Ng = 1, _i = o;
  var i = Ct(), n, t = i.LongBits, e = i.utf8;
  function A(s, l) {
    return RangeError("index out of range: " + s.pos + " + " + (l || 1) + " > " + s.len);
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
      return (o.create = function(l) {
        return i.Buffer.isBuffer(l) ? new n(l) : r(l);
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
    var s = new t(0, 0), l = 0;
    if (this.len - this.pos > 4) {
      for (; l < 4; ++l)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << l * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      l = 0;
    } else {
      for (; l < 3; ++l) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << l * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << l * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; l < 5; ++l)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << l * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; l < 5; ++l) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << l * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function I(s, l) {
    return (s[l - 4] | s[l - 3] << 8 | s[l - 2] << 16 | s[l - 1] << 24) >>> 0;
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
  function Q() {
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
    var s = this.uint32(), l = this.pos, C = this.pos + s;
    if (C > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(l, C);
    if (l === C) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, l, C);
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
    var l = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[l](!1);
      },
      uint64: function() {
        return a.call(this)[l](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[l](!1);
      },
      fixed64: function() {
        return Q.call(this)[l](!0);
      },
      sfixed64: function() {
        return Q.call(this)[l](!1);
      }
    });
  }, _i;
}
var qi, Rg;
function oE() {
  if (Rg) return qi;
  Rg = 1, qi = t;
  var i = oc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Ct();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), qi;
}
var vg = {}, Vi, Fg;
function nE() {
  if (Fg) return Vi;
  Fg = 1, Vi = n;
  var i = Ct();
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
        function(I, Q) {
          if (I)
            return a.emit("error", I, e), g(I);
          if (Q === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(Q instanceof o))
            try {
              Q = o[a.responseDelimited ? "decodeDelimited" : "decode"](Q);
            } catch (s) {
              return a.emit("error", s, e), g(s);
            }
          return a.emit("data", Q, e), g(null, Q);
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
  }, Vi;
}
var Mg;
function iE() {
  return Mg || (Mg = 1, function(i) {
    var n = i;
    n.Service = nE();
  }(vg)), vg;
}
var Wg, Lg;
function rE() {
  return Lg || (Lg = 1, Wg = {}), Wg;
}
var Og;
function aE() {
  return Og || (Og = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = tc(), n.BufferWriter = tE(), n.Reader = oc(), n.BufferReader = oE(), n.util = Ct(), n.rpc = iE(), n.roots = rE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(lg)), lg;
}
var Jg, Ug;
function gE() {
  return Ug || (Ug = 1, Jg = aE()), Jg;
}
var N = gE();
const f = N.Reader, R = N.Writer, x = N.util, c = N.roots.default || (N.roots.default = {}), ct = c.dot = (() => {
  const i = {};
  return i.Content = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = x.newBuffer([]), n.prototype.iv = x.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = x.newBuffer([]), n.create = function(t) {
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Content();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || x.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || x.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !x.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || x.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? x.base64.decode(t.token, e.token = x.newBuffer(x.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? x.base64.decode(t.iv, e.iv = x.newBuffer(x.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? x.base64.decode(t.bytes, e.bytes = x.newBuffer(x.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = x.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = x.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = x.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? x.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? x.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? x.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
      t.prototype.images = x.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(c.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = c.dot.Image.toObject(A.images[g], o);
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
        get: x.oneOfGetter(e = ["sessionToken"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: x.oneOfGetter(e = ["web", "android", "ios"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Metadata();
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
              a.web = c.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = c.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = c.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !x.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !x.isString(A.componentVersion))
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
      t.prototype.supportedAbis = x.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = x.emptyArray, t.prototype.digestsWithTimestamp = x.emptyArray, t.prototype.dynamicCameraFrameProperties = x.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: x.oneOfGetter(e = ["device"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: x.oneOfGetter(e = ["camera"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: x.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: x.oneOfGetter(e = ["tamperingIndicators"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: x.oneOfGetter(e = ["croppedYuv420Image"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: x.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: x.oneOfSetter(e)
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
            ).string(r[g]), c.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.AndroidMetadata(), I, Q;
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
              a.camera = c.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === x.emptyObject && (a.dynamicCameraFrameProperties = {});
              let l = A.uint32() + A.pos;
              for (I = "", Q = null; A.pos < l; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    Q = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[I] = Q;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = c.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
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
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!x.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !x.isString(A.device))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || x.isString(A.digests[o])))
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
          if (!x.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || x.isString(A.tamperingIndicators)))
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
            typeof A.digests[r] == "string" ? x.base64.decode(A.digests[r], o.digests[r] = x.newBuffer(x.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = c.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? x.base64.decode(A.tamperingIndicators, o.tamperingIndicators = x.newBuffer(x.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
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
          for (let a = 0; a < A.supportedAbis.length; ++a)
            r.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? x.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let g;
        if (A.dynamicCameraFrameProperties && (g = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < g.length; ++a)
            r.dynamicCameraFrameProperties[g[a]] = c.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? x.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = c.dot.ImageSize.decode(e, e.uint32());
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
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !x.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = x.newBuffer([]), t.prototype.uPlane = x.newBuffer([]), t.prototype.vPlane = x.newBuffer([]), t.create = function(e) {
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = c.dot.ImageSize.decode(e, e.uint32());
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
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || x.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || x.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || x.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? x.base64.decode(e.yPlane, A.yPlane = x.newBuffer(x.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? x.base64.decode(e.uPlane, A.uPlane = x.newBuffer(x.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? x.base64.decode(e.vPlane, A.vPlane = x.newBuffer(x.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = x.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = x.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = x.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? x.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? x.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? x.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
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
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = x.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = x.emptyArray, t.prototype.digestsWithTimestamp = x.emptyArray, t.prototype.isoValues = x.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: x.oneOfGetter(e = ["camera"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: x.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: x.oneOfGetter(e = ["croppedYuv420Image"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: x.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.IosMetadata(), I, Q;
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
              a.architectureInfo === x.emptyObject && (a.architectureInfo = {});
              let l = A.uint32() + A.pos;
              for (I = "", Q = !1; A.pos < l; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    Q = A.bool();
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              a.architectureInfo[I] = Q;
              break;
            }
            case 6: {
              a.camera = c.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let l = A.uint32() + A.pos;
                for (; A.pos < l; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = c.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !x.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!x.isObject(A.architectureInfo))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || x.isString(A.digests[o])))
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
            if (!x.isInteger(A.isoValues[o]))
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
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.architectureInfo[r[g]] = !!A.architectureInfo[r[g]];
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
            typeof A.digests[r] == "string" ? x.base64.decode(A.digests[r], o.digests[r] = x.newBuffer(x.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        let g;
        if (A.architectureInfo && (g = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < g.length; ++a)
            r.architectureInfo[g[a]] = A.architectureInfo[g[a]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? x.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            r.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = c.dot.ImageSize.decode(e, e.uint32());
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
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !x.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = x.newBuffer([]), t.prototype.uvPlane = x.newBuffer([]), t.create = function(e) {
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = c.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || x.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || x.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? x.base64.decode(e.yPlane, A.yPlane = x.newBuffer(x.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? x.base64.decode(e.uvPlane, A.uvPlane = x.newBuffer(x.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = x.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = x.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? x.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? x.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
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
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = x.emptyArray, t.prototype.hashedDetectedImages = x.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = x.emptyArray, t.prototype.detectionRecord = x.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: x.oneOfGetter(e = ["croppedImage"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: x.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: x.oneOfGetter(e = ["platformDetails"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.currentCameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(c.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(c.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(c.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = c.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = c.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
            if (!x.isString(A.hashedDetectedImages[o]))
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
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = x.Long ? x.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.HashedDetectedImageWithTimestamp();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !x.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !x.isInteger(e.timestampMillis) && !(e.timestampMillis && x.isInteger(e.timestampMillis.low) && x.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (x.Long ? (A.timestampMillis = x.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new x.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", x.Long) {
            let r = new x.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? x.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new x.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
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
        get: x.oneOfGetter(e = ["aspectRatio"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: x.oneOfGetter(e = ["autoGainControl"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: x.oneOfGetter(e = ["channelCount"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: x.oneOfGetter(e = ["deviceId"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: x.oneOfGetter(e = ["displaySurface"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: x.oneOfGetter(e = ["echoCancellation"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: x.oneOfGetter(e = ["facingMode"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: x.oneOfGetter(e = ["frameRate"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: x.oneOfGetter(e = ["groupId"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: x.oneOfGetter(e = ["height"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: x.oneOfGetter(e = ["noiseSuppression"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: x.oneOfGetter(e = ["sampleRate"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: x.oneOfGetter(e = ["sampleSize"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: x.oneOfGetter(e = ["width"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: x.oneOfGetter(e = ["deviceName"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MediaTrackSettings();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !x.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !x.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !x.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !x.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !x.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !x.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !x.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !x.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !x.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !x.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.ImageBitmap();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !x.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !x.isInteger(e.height) ? "height: integer expected" : null;
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
        get: x.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.DetectedObject();
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
              g.faceCenter = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = c.dot.v4.Point.decode(e, e.uint32());
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Point();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.v4.Point.decode(e, e.uint32());
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
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = x.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: x.oneOfGetter(e = ["platform"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: x.oneOfGetter(e = ["platformVersion"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: x.oneOfGetter(e = ["architecture"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: x.oneOfGetter(e = ["model"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PlatformDetails();
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
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(c.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !x.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !x.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !x.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !x.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !x.isString(A.model))
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
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = c.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.BrowserVersion();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !x.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !x.isString(e.version) ? "version: string expected" : null;
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
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
        get: x.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Blob();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.documentContent = c.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = c.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = c.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = c.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = c.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = c.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = c.dot.v4.Metadata.decode(e, e.uint32());
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
        get: x.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: x.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: x.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: x.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: x.oneOfGetter(e = ["dg8DataFeatures"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: x.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: x.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: x.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: x.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: x.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: x.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: x.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: x.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
        get: x.oneOfGetter(e = ["bytes"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || x.isString(A.bytes)) ? "bytes: buffer expected" : null;
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
        return A.bytes != null && (typeof A.bytes == "string" ? x.base64.decode(A.bytes, o.bytes = x.newBuffer(x.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? x.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = c.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = c.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.DataAuthenticationStatus();
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
        get: x.oneOfGetter(e = ["protocol"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: x.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || x.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? x.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = x.newBuffer(x.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? x.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
      t.prototype.image = null, t.prototype.segments = x.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: x.oneOfGetter(e = ["image"]),
        set: x.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(c.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.EyeGazeLivenessSegment();
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
              g.image = c.dot.Image.decode(e, e.uint32());
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
      t.prototype.stepResults = x.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(c.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = c.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.MultiRangeLivenessStepResult();
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
              g.image = c.dot.ImageWithTimestamp.decode(e, e.uint32());
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
      return t.prototype.detections = x.emptyArray, t.create = function(e) {
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.detections && g.detections.length || (g.detections = []), g.detections.push(c.dot.v4.FaceDetection.decode(e, e.uint32()));
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
      return t.prototype.timestampMillis = x.Long ? x.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.FaceDetection();
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
              g.position = c.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !x.isInteger(e.timestampMillis) && !(e.timestampMillis && x.isInteger(e.timestampMillis.low) && x.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (x.Long ? (A.timestampMillis = x.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new x.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (x.Long) {
            let r = new x.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? x.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new x.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = c.dot.PointDouble.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        get: x.oneOfGetter(e = ["video"]),
        set: x.oneOfSetter(e)
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
        A instanceof f || (A = f.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
    return n.prototype.bytes = x.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Image();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || x.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? x.base64.decode(t.bytes, e.bytes = x.newBuffer(x.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = x.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? x.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
    return n.prototype.image = null, n.prototype.timestampMillis = x.Long ? x.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = c.dot.Image.decode(t, t.uint32());
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = c.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !x.isInteger(t.timestampMillis) && !(t.timestampMillis && x.isInteger(t.timestampMillis.low) && x.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (x.Long ? (e.timestampMillis = x.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new x.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, x.Long) {
          let o = new x.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? x.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new x.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageSize();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !x.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !x.isInteger(t.height) ? "height: integer expected" : null;
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
    return n.prototype.items = x.emptyArray, n.create = function(t) {
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Int32List();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!x.isInteger(t.items[e]))
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.RectangleDouble();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
    return n.prototype.digest = x.newBuffer([]), n.prototype.timestampMillis = x.Long ? x.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.DigestWithTimestamp();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || x.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !x.isInteger(t.timestampMillis) && !(t.timestampMillis && x.isInteger(t.timestampMillis.low) && x.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? x.base64.decode(t.digest, e.digest = x.newBuffer(x.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (x.Long ? (e.timestampMillis = x.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new x.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = x.newBuffer(A.digest))), x.Long) {
          let o = new x.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? x.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? x.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new x.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      get: x.oneOfGetter(t = ["bytes"]),
      set: x.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: x.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: x.oneOfSetter(t)
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
      e instanceof f || (e = f.create(e));
      let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.Video();
      for (; e.pos < r; ) {
        let a = e.uint32();
        if (a === o)
          break;
        switch (a >>> 3) {
          case 1: {
            g.bytes = e.bytes();
            break;
          }
          case 2: {
            g.containerMp4 = c.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = c.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return g;
    }, n.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || x.isString(e.bytes))))
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
      if (e.bytes != null && (typeof e.bytes == "string" ? x.base64.decode(e.bytes, A.bytes = x.newBuffer(x.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? x.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
    return n.prototype.bytes = x.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoContainer();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || x.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? x.base64.decode(t.bytes, e.bytes = x.newBuffer(x.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = x.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? x.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
    return n.prototype.bytes = x.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoStream();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          case 2: {
            r.frameRate = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || x.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? x.base64.decode(t.bytes, e.bytes = x.newBuffer(x.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = x.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? x.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointInt();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !x.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !x.isInteger(t.y) ? "y: integer expected" : null;
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
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointDouble();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
  function t(g, a, I, Q, s) {
    return X(Q - 855, a);
  }
  function e(g, a, I, Q, s) {
    return X(I - 979, a);
  }
  function A(g, a, I, Q, s) {
    return X(a - -644, g);
  }
  const o = i();
  function r(g, a, I, Q, s) {
    return X(a - -456, s);
  }
  for (; ; )
    try {
      if (parseInt(e(1314, "J@p(", 1198, 1107, 1272)) / 1 + parseInt(e(1139, "oQtS", 1147, 1096, 1050)) / 2 * (parseInt(e(1138, "(PjC", 1220, 1252, 1316)) / 3) + parseInt(t(1182, "^6GP", 1104, 1133, 1039)) / 4 + -parseInt(A("g(H[", -324, -389, -356, -245)) / 5 + -parseInt(A("cguI", -388, -302, -290, -329)) / 6 + -parseInt(r(-198, -216, -212, -108, "30@7")) / 7 * (-parseInt(t(1080, "KDBV", 1065, 1057, 993)) / 8) + parseInt(e(1147, "L9lW", 1163, 1211, 1086)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(_n, 156428 + 79 * 1059);
function IE() {
  const i = n(803, "oQtS", 772) + n(838, "(PjC", 780) + g(-325, "3PB)", -389, -450, -427) + n(791, "O(oV", 883) + n(877, "z9ki", 799) + o(-297, -391, "p&gj") + n(714, "P)qJ", 823) + g(-524, "2(oA", -495, -445, -520) + a(1181, 1118, 1116, 1078, "lyeM") + I(-266, -339, "Xc7k", -390, -301) + o(-499, -504, "hZF(") + o(-336, -259, "lPIB") + o(-437, -539, "EVLw") + a(1133, 1226, 1319, 1199, "Q)kh") + o(-481, -542, "Q)kh") + I(-508, -482, "HLwz", -439, -407) + n(875, "yz2l", 820) + g(-423, "hZF(", -423, -470, -503) + I(-358, -444, "3PB)", -405, -377) + n(701, "KDBV", 773) + n(907, "$vi@", 865) + g(-377, "6(Rb", -480, -513, -464) + g(-505, "1tLs", -563, -455, -529) + o(-495, -586, "#rRT") + n(626, "oQtS", 725) + n(727, "z9ki", 797) + n(916, "lwwl", 864) + I(-349, -306, "9!da", -383, -374) + I(-517, -390, "$vi@", -353, -450) + o(-476, -400, "5^RK") + g(-634, "IOdG", -742, -639, -628) + a(1057, 1170, 1090, 1074, "5yU$") + a(1210, 1119, 1217, 1155, "[x)H") + o(-407, -508, "zk$%") + I(-294, -284, "3PB)", -419, -339) + n(656, "5yU$", 699) + n(693, "3PB)", 765) + I(-152, -202, "1tLs", -277, -245) + o(-364, -297, "qaIT") + I(-414, -299, "P)qJ", -360, -320) + o(-360, -458, "^6GP") + n(572, "O(oV", 666) + o(-286, -393, "9!da") + n(754, "30@7", 769) + I(-285, -256, "5^RK", -205, -291) + o(-386, -388, "hZF(") + o(-466, -462, "2(oA") + g(-591, "lPIB", -594, -529, -478) + I(-329, -431, "hZF(", -376, -438) + o(-403, -436, "rzYO") + a(1141, 1153, 1159, 1086, "9!da") + o(-465, -364, "IOdG") + n(703, "5^RK", 738) + g(-390, "a5rp", -585, -518, -488) + g(-549, "K04m", -613, -677, -581) + I(-218, -348, "J@p(", -359, -246) + n(729, "zk$%", 730) + a(1252, 1255, 1208, 1271, "z9ki") + a(1057, 1105, 1154, 1e3, "K04m") + I(-328, -452, "O(oV", -304, -372) + a(1242, 1220, 1317, 1261, "Xc7k") + o(-313, -213, "[x)H") + o(-422, -410, "oQtS") + n(663, "3]e8", 716) + I(-391, -345, "oQtS", -409, -300) + o(-298, -259, "5^RK") + I(-382, -476, "30@7", -474, -419) + I(-459, -466, "P)qJ", -357, -389) + I(-333, -497, "HLwz", -445, -420) + o(-326, -398, "z9ki") + I(-363, -265, "#rRT", -252, -290) + o(-460, -457, "a5rp") + I(-260, -252, "(PjC", -264, -310) + o(-480, -551, "rzYO") + I(-183, -303, "^6GP", -218, -293) + I(-464, -380, "Xc7k", -363, -396) + I(-460, -421, "L9lW", -469, -417) + g(-531, "KDBV", -515, -441, -467) + o(-315, -334, "z9ki") + n(669, "#rRT", 771) + a(1184, 1203, 1165, 1094, "rAjE") + a(1073, 1183, 1092, 1127, "cguI") + a(1248, 1148, 1222, 1260, "nESr") + n(772, "$vi@", 679) + n(738, "(PjC", 775) + a(1099, 1078, 1103, 1189, "Q)kh") + I(-204, -349, "3PB)", -320, -284) + a(1206, 1109, 1020, 1076, "^6GP") + g(-609, "zk$%", -534, -555, -506) + a(1167, 1164, 1261, 1133, "z9ki") + a(1072, 1138, 1133, 1055, "3]e8") + a(1188, 1072, 963, 1152, "KDBV") + a(1044, 1089, 1017, 1025, "lwwl") + I(-149, -243, "rAjE", -251, -249) + o(-380, -316, "rzYO") + n(804, "$vi@", 729) + g(-576, "[x)H", -500, -423, -526) + a(1270, 1274, 1297, 1278, "9!da") + a(1144, 1048, 1028, 1149, "lPIB") + n(811, "zk$%", 794) + n(701, "oQtS", 808) + g(-392, "E#iU", -454, -521, -445) + a(1287, 1215, 1315, 1292, "qaIT") + g(-583, "rAjE", -574, -528, -522) + o(-442, -500, "2(oA") + I(-224, -401, "Xc7k", -205, -302) + n(683, "$vi@", 676) + I(-210, -281, "K04m", -294, -314) + a(1271, 1161, 1117, 1206, "3]e8") + g(-465, "rAjE", -463, -347, -435) + I(-401, -401, "5yU$", -218, -331) + n(800, "^6GP", 807) + n(641, "(PjC", 753) + I(-171, -160, "g(H[", -335, -265) + I(-360, -479, "K04m", -414, -423) + a(1041, 1155, 1138, 1188, "lPIB") + n(613, "oQtS", 683) + a(1189, 1239, 1137, 1268, "F9Ts") + I(-316, -509, "EVLw", -393, -428) + g(-641, "lwwl", -564, -540, -631) + n(917, "6(Rb", 862) + I(-238, -408, "F9Ts", -356, -352) + n(601, "$vi@", 670) + o(-392, -426, "rzYO") + a(1098, 1100, 1177, 1028, "S$)&") + n(783, "3PB)", 701) + n(805, "E#iU", 781) + g(-581, "cguI", -577, -600, -565) + n(599, "rzYO", 680) + a(1116, 1209, 1137, 1110, "2(oA") + n(575, "HLwz", 673) + a(1154, 1087, 1197, 1062, "Fu6v") + I(-188, -359, "3]e8", -288, -268) + I(-310, -320, "(PjC", -340, -288) + a(1160, 1065, 1070, 979, "qaIT") + a(1264, 1246, 1333, 1280, "K04m") + o(-367, -340, "#rRT") + o(-324, -232, "a5rp") + a(1157, 1268, 1233, 1265, "rAjE") + g(-667, "cguI", -589, -561, -579) + I(-424, -421, "yz2l", -256, -340) + g(-506, "L9lW", -572, -710, -620) + I(-173, -359, "E#iU", -317, -277) + o(-493, -573, "hZF(") + a(1173, 1201, 1184, 1311, "L9lW") + o(-472, -450, "^6GP") + a(1256, 1265, 1166, 1166, "sP6x") + o(-365, -476, "lyeM") + g(-625, "E#iU", -627, -497, -589) + g(-668, "rzYO", -531, -629, -575) + I(-195, -271, "2(oA", -275, -255) + a(1154, 1243, 1152, 1273, "9!da") + o(-478, -513, "Xc7k") + a(1179, 1247, 1194, 1297, "Q)kh") + o(-317, -402, "Fu6v") + o(-484, -432, "3PB)") + o(-295, -255, "S$)&") + g(-687, "yz2l", -618, -636, -572) + a(1127, 1054, 940, 1027, "rAjE") + I(-439, -327, "hZF(", -333, -330) + n(803, "p&gj", 869) + o(-366, -418, "F9Ts") + a(1015, 1052, 1137, 1113, "hZF(") + o(-424, -494, "3PB)") + a(1249, 1174, 1275, 1138, "$vi@") + n(942, "#rRT", 850) + n(877, "lwwl", 871) + I(-383, -390, "9!da", -291, -333) + g(-575, "lyeM", -580, -491, -470) + I(-575, -489, "$vi@", -555, -468) + g(-617, "S$)&", -577, -526, -527) + n(709, "cguI", 719) + o(-508, -403, "Vv1(") + n(642, "YoHX", 696) + o(-312, -321, "Vv1(") + I(-488, -430, "z9ki", -502, -457) + g(-605, "^6GP", -655, -567, -618) + o(-280, -245, "3PB)") + g(-448, "YoHX", -438, -504, -502) + I(-272, -301, "(PjC", -362, -295) + a(1152, 1142, 1037, 1074, "$vi@") + n(663, "J@p(", 668) + I(-422, -319, "E#iU", -212, -316) + n(716, "O(oV", 664) + g(-374, "2(oA", -411, -407, -436) + g(-448, "YoHX", -417, -543, -480) + a(1133, 1134, 1097, 1038, "K04m") + n(918, "Q)kh", 802) + I(-400, -317, "EVLw", -342, -424) + a(1094, 1056, 1041, 1123, "lwwl") + n(636, "lPIB", 660) + g(-468, "oQtS", -590, -565, -576) + a(1215, 1149, 1149, 1207, "3PB)") + o(-296, -382, "Xc7k") + n(833, "sP6x", 741) + o(-345, -279, "K04m") + I(-266, -383, "IOdG", -310, -373) + g(-494, "7rDY", -342, -384, -454) + o(-385, -332, "L9lW") + n(850, "p&gj", 764);
  function n(Q, s, l, C, E) {
    return X(l - 504, s);
  }
  const t = window[n(769, "W[h4", 867)](i), e = window[n(652, "YoHX", 752)](t), A = eQ(e);
  function o(Q, s, l, C, E) {
    return X(Q - -666, l);
  }
  const r = {};
  r[o(-453, -542, "sP6x")] = cs;
  function g(Q, s, l, C, E) {
    return X(E - -811, s);
  }
  function a(Q, s, l, C, E) {
    return X(s - 891, E);
  }
  r[a(1045, 1107, 1039, 1221, "p&gj")] = $C;
  function I(Q, s, l, C, E) {
    return X(E - -627, l);
  }
  return window[o(-321, -216, "$vi@") + "o"][n(807, "oQtS", 737) + "e"][n(786, "9!da", 819) + I(-431, -424, "J@p(", -410, -449)](n(739, "2(oA", 770), A, r, !0, [o(-461, -466, "Xc7k") + "pt"]);
}
async function sE(i) {
  function n(r, g, a, I, Q) {
    return X(Q - 356, I);
  }
  const t = await IE();
  function e(r, g, a, I, Q) {
    return X(I - -263, Q);
  }
  const A = {};
  function o(r, g, a, I, Q) {
    return X(a - -433, I);
  }
  return A[o(-131, -198, -119, "nESr")] = cs, window[o(-184, -268, -181, "Fu6v") + "o"][n(504, 570, 526, "O(oV", 601) + "e"][e(-11, 1, 174, 65, "IOdG") + "pt"](A, t, i);
}
function X(i, n) {
  const t = _n();
  return X = function(e, A) {
    e = e - (-20 * -8 + -4 * 2017 + 8064);
    let o = t[e];
    if (X.wicImT === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      X.Ufbfhc = Q, i = arguments, X.wicImT = !0;
    }
    const g = t[-3 * 2923 + 7412 + -1 * -1357], a = e + g, I = i[a];
    return I ? o = I : (X.borwhZ === void 0 && (X.borwhZ = !0), o = X.Ufbfhc(o, A), i[a] = o), o;
  }, X(i, n);
}
function _n() {
  const i = ["twxdHrTO", "WO3dOCkrcmk8", "qfldMf9p", "smoHkmoo", "WRhcT8o3lJ4", "W5BdSCozW5BcQa", "yG7dMbvX", "kSo5xmk3dq", "W73cG8kCWO1v", "ewe1WR5CjfZdQaFcGrtcR0m", "hbNdJg0A", "WPNcP8ojiSkh", "pYVdMK0t", "W6RcSmkDDIi", "j2WfW4Gp", "WQ7cLSozwNy", "tgXoW4K5", "WPhcKwFcMmo1", "W4pdQse0WRi", "W5BcN2uSW5C", "kmodpw9t", "ztPjuCkv", "kSobBCk3hG", "W4dcPSkWW7hdJW", "W6RdVConWQDa", "vgzyvra", "W7BcPmkfWPvY", "y3ldKr05WPNcUw/cSCkfW5y", "W7VdVSo9W4qJ", "tSkmWQBcJeq", "W5VcI8opnby", "fCk6eepcMG", "WQXNW4dcO8oC", "wGhdN35v", "WQqGEWZdLW", "qqfKW5e9", "ASk2pmony0hdHCok", "iSkIWRX6WQa", "wY46mG", "uCo/WRZdQNy", "ymkXrsXZ", "WORdGwpdPq", "iddcILXsemk8u0j2", "W7VcGbyRWOO", "dCkAFCkeW6bJWRmzfaXe", "WPvcWQlcMmkn", "WR/cJSoklsm", "W78ue8ozW6W", "ghhcP3KLW4KEefNcO8khW5JdHG", "cgrizYO", "rKVdQWnt", "WOKLW5/cRCoJ", "WP0vWPmsW5K", "W5NdTSoRk8oz", "W7VdGSoYWPSO", "vSokWRZcJxy", "WOVcQSo6fdu", "Emk6iJmn", "WPxcLSo5AGa", "W47cS8oEE3K", "W5xcT8o3DIO", "WOJcISoFiSk/", "xNScedC", "W7C4WOD1WPq", "pSoyr1/dPW", "hhdcOZL+WRPwb1W", "W51rWQLQt8oQctyoWQ4", "vSo5u8kwka", "AmkmWQddLIO", "WQddLCojwty", "WPK9BsXK", "FCkYiXjy", "cSkpWRvwWP8", "WPFcLutcQa", "WOXvW4KCxa", "ACo6xSkqiG", "wtBdMf1b", "DbfBAmos", "u8kRW6JdOmoW", "W6VcT8olW6XO", "WPaEsJnY", "p8oFreypWPDBWRJdO1b6jq", "W7NdTJNdKu4", "tSoguSk9fW", "WQOLW7JdKCoj", "W5VdO3FcSmor", "tmoRymkdeW", "Cmk1WORdOmoo", "W63cT8orjSkh", "hhi8z0i", "CGJcPIXT", "hYrLDa", "erncWOGL", "WRlcTSo3vd0", "pshcG25Q", "mmkBWOTNWQ4", "WOOWWQ4Dxa", "W7r5WRJcRSk3g0mxWOf5W43dLq", "W5lcLmo7lCot", "WRxcISoseCky", "W6xdVmkpWR4O", "W5GjW64iuW", "W4Kvm8kYW7G", "WQldRMzpW5WkfCkcWO7dJCopW7S", "fmo9z1Lc", "nw0yW5aQ", "yXDvW5nC", "vmkDgmoRuW", "rfhdN1Pi", "WReIwqFdMq", "W5hcKCkufSoP", "WRxdP8ojCmkR", "bCokw3FcMG", "v8oer8krCW", "omo+mSorWOK", "WOOBW5ZdHmof", "pau+wXy", "ymkaocDd", "W67cTCkhgCor", "C8ktWO3dR8oA", "W7NcMSoEFCok", "d8kvxgvD", "oN81W4qO", "aahcRwWq", "lGiJWP5g", "W4NdP8kIWRmw", "WOeDWRSgW70", "WPmvW6ldTSk+", "W4hcGaqvWQS", "WRZcJCojBYC", "WP0yW67dL8ov", "W7tcTdKoWOq", "WP0aW5TFWQS", "lfSGW4Cz", "WP7dKwBcSmo0", "qs9nW7e5", "WPWQaCkVW6W", "o8obomo4WPG", "t8oAWR7cHfK", "W7pdRHRcHq", "CCkCWQVdPmo6", "bCoWvddcGa", "WROoW5enza", "aai6rZ8", "W7SMWRHeWRK", "WRmDo0XfWR1uW7HCWRbOvWG", "e8oSWOdcIgS", "WO/dLCkCDvDlwNnliSoa", "m8kLzbpcLq", "WRKNW6ldPCkh", "WO7cJCoEeJC", "W6VcICoOf10", "WRdcP8o3sca", "W5RcNmkCWQPa", "W6VcSSo+hJG", "mhO+vxC", "W4BcKuxcH8o1", "WR8/W7utuG", "kx89D00", "W57cLZblWR8", "lwVdPK4y", "W4xcSCoKrhG", "lX9mWPX2", "W558oMe4W5PGW7hdIh3cGCkmca", "WR4nW5a6nG", "W7RcKmoKh8oQ", "WRm7WQuEW5m", "c8kawbpcQa", "iCkDr8kxmG", "yrxdNNbN", "DNBdHr9V", "uauIWPD/", "fHX2W7uS", "W4/dV8kGWOGw", "zZTaDmoW", "W5e8m8kSW4O", "W5VcSCoximor", "kCk/WPpdNCoe", "W5BdOCoMfSop", "xCo3W6OtW68", "CSoAWRJdQ00", "lr3dTfnW", "B8oawmoAtW", "gqanW6rj", "bmkgW4O6WQS", "W7xcPmoyW6BdUG", "w2/dMdPn", "W5LPwb5g", "W5exWPfI", "W6pcJmoIa8ou", "WQ/dJx/cV8kp", "WPqZi8klW7u", "W73dVCoBW7BdLa", "WQZcRmoKw3C", "WQFdQLldMmk5", "WOZcQ8oweqm", "WQDPE3BdUq", "jH5TwX8", "WPnkyCkCW4VcLSooWRVdVG", "Eh4gotm", "oGbaFbK", "dmoRmmoeWQ8", "mmkCc8o8WOW", "n8ozimogWQG", "WPiPscX4", "tSkGWOlcUSoG", "cmoWcCoYWQO", "DCkgc8o4sa", "x8kRWO/dNSk6", "lmoUxSoimG", "W7DUcNxcOSkTWOLNW5pcJ8kvW7e", "CSoNt8kEDa", "WQdcPCk4WOFcRmonW7SjqCkAaG", "cfWOF2S", "dfW4iey", "smojW64mW5a", "Eu3dIZOP", "WOehwb1Y", "lf0OW4Oh", "W5GEFW5Y", "kmobb8ohWRO", "E8ktp8oTWRm", "W7VdHSoeW7hdMa", "v1ZdStDb", "gwCGWQ4h", "W5pdK8omwXu0W5Dg", "WP9yW7pcGmkh", "WPNcRSoyc8o9", "cqWKWQP4", "wh7dSIPb", "ch1aW64Z", "W5iyW5BdNCkt"];
  return _n = function() {
    return i;
  }, _n();
}
(function(i, n) {
  function t(a, I, Q, s, l) {
    return bA(s - -860, a);
  }
  function e(a, I, Q, s, l) {
    return bA(I - 427, a);
  }
  function A(a, I, Q, s, l) {
    return bA(s - 391, Q);
  }
  function o(a, I, Q, s, l) {
    return bA(I - -7, l);
  }
  function r(a, I, Q, s, l) {
    return bA(a - -709, l);
  }
  const g = i();
  for (; ; )
    try {
      if (-parseInt(r(-452, -461, -459, -444, "8xhH")) / 1 + -parseInt(o(252, 251, 248, 256, "27Up")) / 2 + parseInt(e("%kf4", 673, 680, 671, 669)) / 3 + -parseInt(t("27Up", -613, -616, -606, -612)) / 4 * (-parseInt(o(247, 253, 255, 253, "s7gt")) / 5) + -parseInt(t("jv9d", -609, -614, -611, -609)) / 6 * (parseInt(A(657, 666, "Bk^v", 656, 664)) / 7) + parseInt(o(237, 241, 231, 251, "byks")) / 8 * (-parseInt(o(264, 255, 263, 248, ")yp]")) / 9) + parseInt(o(250, 246, 240, 248, "(1Yp")) / 10 === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(qn, 292076);
function bA(i, n) {
  const t = qn();
  return bA = function(e, A) {
    e = e - (1850 + 401 * -4);
    let o = t[e];
    if (bA.IMyhct === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      bA.zXYjTs = Q, i = arguments, bA.IMyhct = !0;
    }
    const g = t[-1856 * -2 + 3 * 1132 + -2 * 3554], a = e + g, I = i[a];
    return I ? o = I : (bA.ILDFyD === void 0 && (bA.ILDFyD = !0), o = bA.zXYjTs(o, A), i[a] = o), o;
  }, bA(i, n);
}
function qn() {
  const i = ["ueHlW57cJeJdUNFcHha", "auWBoSoqW6VdUCoKWPFdMLOJkxi", "CfVdTSoFWPe", "ymkDy8okvuiyWRzIW5LzW47cJLK", "WPOyWQldIWFcN8kSDgG", "WQtdVhhcGmkdWO/dLmkIWRtcOGNcVa", "WOzVaCk5DuTZhmorDG", "WR3cKveyW5/dTY/dSf4Gzu8", "WPqsWQxcPgJdGSk0t1xcMaldOW", "WRRcPSoQoSo8WRldJgvn", "laRcTCkzWRldVSkbW5NcOXe", "jCorW6e", "W7j0jCkuCMmanCoEdW", "WORdU2RdI8oIWP3dKSoaculdLG", "W4VcPCkBW6Kay3FcISoR", "eCopiupcT8kVW64hWOe", "mv7cOJVcJSkSWQJdGSkkhCkHnq", "WR9nheBdQI/cRHnAWPC", "cKBcHSkQjXpcIK3cUmoT", "WONdO17cL33dSmoOW640gCoe"];
  return qn = function() {
    return i;
  }, qn();
}
async function cE(i) {
  function n(a, I, Q, s, l) {
    return bA(s - 278, I);
  }
  const { iv: t, key: e, message: A } = await oQ(i), o = await sE(e);
  function r(a, I, Q, s, l) {
    return bA(a - -432, Q);
  }
  const g = {};
  return g[r(-171, -170, "9(SX")] = o, g.iv = t, g[n(529, "s7gt", 531, 530) + "ge"] = A, g;
}
function kA(i, n) {
  const t = Vn();
  return kA = function(e, A) {
    e = e - (-7530 + 7 * -1213 + 16353);
    let o = t[e];
    if (kA.HqASRr === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      kA.WAaOcv = Q, i = arguments, kA.HqASRr = !0;
    }
    const g = t[-7412 + -1361 * -1 + 6051], a = e + g, I = i[a];
    return I ? o = I : (kA.JMvKzI === void 0 && (kA.JMvKzI = !0), o = kA.WAaOcv(o, A), i[a] = o), o;
  }, kA(i, n);
}
(function(i, n) {
  function t(g, a, I, Q, s) {
    return kA(s - -728, I);
  }
  function e(g, a, I, Q, s) {
    return kA(a - -326, g);
  }
  function A(g, a, I, Q, s) {
    return kA(a - -862, s);
  }
  function o(g, a, I, Q, s) {
    return kA(a - -326, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(o("rjIO", 6, -2, 12, 10)) / 1 * (-parseInt(e("[#*c", 24, 32, 8, 39)) / 2) + -parseInt(A(-522, -507, -497, -517, "cLb5")) / 3 * (parseInt(o("L4Wf", 11, 4, 22, 25)) / 4) + parseInt(A(-514, -514, -516, -528, "LxAB")) / 5 * (-parseInt(t(-403, -380, "3z6I", -396, -395)) / 6) + parseInt(A(-509, -509, -499, -516, "5ONK")) / 7 + parseInt(o("eB$&", 36, 22, 49, 21)) / 8 + -parseInt(t(-371, -364, "5ONK", -372, -370)) / 9 + parseInt(o("4F^a", 26, 28, 20, 25)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Vn, -634719 + -7130 * -201);
async function CE(i) {
  function n(o, r, g, a, I) {
    return kA(r - -450, o);
  }
  function t(o, r, g, a, I) {
    return kA(g - 557, o);
  }
  function e(o, r, g, a, I) {
    return kA(a - -296, r);
  }
  const A = await window[e(50, "nZg@", 61, 65) + "o"][e(30, "nZg@", 50, 39) + "e"][e(53, "!1ev", 43, 44) + "t"](e(24, "!6QX", 37, 38), i);
  return Array[t("zSm[", 903, 916)](new Uint8Array(A))[e(53, "@kRt", 39, 40)]((o) => o[e(40, "zWmR", 61, 46) + e(41, "[#*c", 34, 50)](-7 * -149 + 6355 + -2 * 3691)[n("L1Hg", -93) + e(42, "GBhH", 29, 43)](233 * 37 + -219 * 3 + -7962, "0"))[t("TIX2", 907, 898)]("");
}
function Vn() {
  const i = ["aSoPW5Opkmk2r8oZyHerCbhcQW", "WQBcN0hcKmoXjXtdUaddPbFdS8kN", "t8oIW7H2gSosouediSkIWPtcQW", "WOtdJSogCSkSWQHDW7uYW6bNW5W", "omkFW5xcKSo8W7xdPa", "W6JcTbBdM2a", "WQBcNuFcM8o0kX3dPa3dKJFdNCko", "WONcMfC4", "WPFdNSkUWRioWQOkz8ojo1GWmX4", "W4RcM8kBCKe", "W7WmW5rKW5RcMIL4ewVcNHut", "W57dTKRdRSkgcCour8kvW6RdOG", "WPOaiCkydMJdKW", "WQvkDCoBBa", "W5RcNmkaDLK", "W4VcJSoQ", "pmoFW5FcGSohW4tdGmoD", "WOpdNSkOqmkXt8olFSoMdSkhW4NcJG", "nSogna", "W7LUWPvxiW", "WR90W7/dKG", "W4iJWOFdTmkq", "WOqlpMX1yYSvBZpdShy", "W5/dT0/dPCkpwmktDmkfW6BdU2ldNG", "WP5ai8kinvNdT8oR", "W444WQC", "WPunW64kwmkDmqjZiSk2oa", "WP/cUeeUymkdW5xcOqfCW5BdRW", "b8kLWPCzy8kzE182W4zi", "WPzGWQf1W5bpW4yT", "WPFdMCo7W5jmW4H8oW"];
  return Vn = function() {
    return i;
  }, Vn();
}
function $A(i, n) {
  var t = Zn();
  return $A = function(e, A) {
    e = e - (8474 + -43 * 50 + -5920);
    var o = t[e];
    if ($A.URbPBv === void 0) {
      var r = function(s) {
        for (var l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (var p = 0, m = C.length; p < m; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(s, l) {
        var C = [], E = 0, d, u = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      $A.neZDff = g, i = arguments, $A.URbPBv = !0;
    }
    var a = t[-2119 * 1 + 6 * -1279 + 1399 * 7], I = e + a, Q = i[I];
    return Q ? o = Q : ($A.MGiUod === void 0 && ($A.MGiUod = !0), o = $A.neZDff(o, A), i[I] = o), o;
  }, $A(i, n);
}
(function(i, n) {
  function t(g, a, I, Q, s) {
    return $A(I - 735, s);
  }
  function e(g, a, I, Q, s) {
    return $A(s - -161, Q);
  }
  function A(g, a, I, Q, s) {
    return $A(I - 366, a);
  }
  for (var o = i(); ; )
    try {
      var r = -parseInt(A(775, "rL%e", 779, 776, 778)) / 1 + -parseInt(A(784, "U3zl", 783, 784, 779)) / 2 + -parseInt(t(1149, 1147, 1145, 1144, "u[8l")) / 3 + -parseInt(e(238, 241, 247, "&3qT", 244)) / 4 + -parseInt(e(248, 251, 251, "gj@P", 250)) / 5 + -parseInt(t(1148, 1144, 1147, 1143, "T#qA")) / 6 + parseInt(e(247, 241, 241, "0MKo", 245)) / 7;
      if (r === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Zn, 284 * 2041 + -1383 * 241 + 485 * 1013);
function Zn() {
  var i = ["wmoXwdFcQHRcMmoGo8kjBmowW4y", "W4/cHSkSWRpcOZBdUSorgmoLWPJdNa", "WR1XcbJdMCkJACkSW4D5BCoX", "wYv8W4HHw8oufSo3WOjQW6Cd", "W6nVW5dcKSkqomkyeh9NCbq", "W7zGfgldUf7dI3P4WOlcIbe", "u8kZEfRcKdxcPCocxbHjW4e/BG", "rmoLx8kncxpcSCk6nM4ebHy", "x8khh8kuW6ColCkxEvpcJSkiW4FdMG", "zbZcHv7cJsSxkCk4WQLrW5hcTW", "W6LjW7T8pCoYW53dOciGn8khoW", "bmkAhmoCmmkNfSoyjCo9lCkbcq", "W6DQW5dcMCkFoSo0g1LAFqL3", "WOZdJmk2vCkylWtcNbNdJdTAgG"];
  return Zn = function() {
    return i;
  }, Zn();
}
async function nc(i) {
  const { Image: n } = ct, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw D.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function BE(i) {
  const { VideoStream: n } = ct, t = n.verify(i);
  if (t) throw D.fromError(t);
  return n.create(i);
}
async function QE(i) {
  const { v4: { Metadata: n } } = ct, t = { ...i };
  t.platform = ct.Platform.WEB, t.componentVersion = "7.7.0";
  const e = t, A = n.verify(e);
  if (A) throw D.fromError(A);
  return n.create(e);
}
async function EE(i) {
  const { Content: n } = ct, { iv: t, key: e, message: A } = await cE(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: XC, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw D.fromError(r);
  const g = n.create(o);
  return n.encode(g).finish();
}
function lE(i) {
  const { Blob: n } = ct.v4, t = n.verify(i);
  if (t) throw D.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function dE(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e == null ? void 0 : e.map(({ brand: g, version: a }) => ({ name: g, version: a })) };
}
async function uE({ image: i, metadata: n, video: t }) {
  const { PalmContent: e } = ct.v4, A = await nc(i), o = await QE(n), r = t && BE(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.image = A, a.metadata = o, a.video = g;
  const I = a, Q = e.verify(I);
  if (Q) throw D.fromError(Q);
  const s = e.create(I), l = {};
  return l.palmContent = s, lE(l);
}
async function xE(i) {
  const n = await uE(i);
  return EE(n);
}
function hE({ controller: i }) {
  const { captureMode: n, onPhotoTaken: t, sessionToken: e } = ys(), A = we(({ candidateSelectionImages: g, imageData: a, protoMessage: I }) => {
    _Q(as.PALM, g), t(a, I);
  }, [t]), o = we(({ processedImage: g }) => {
    const a = {};
    a.code = g.instructionCode, a.isEscalated = g.isEscalated, ms(We.INSTRUCTION_CHANGED, a), i && PB(We.DETECTED_PALM_CHANGED, g.detection, i.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [i]), r = {};
  return r.captureMode = n, r.controller = i, r.createProtoMessage = xE, r.onCapture = A, r.onDetection = o, r.sessionToken = e, r.customEvent = We, r.fallbackInstruction = XA.PALM_NOT_PRESENT, r.instructionCodeMap = XA, r.checkToInstructionCodeMap = LC, SQ(r);
}
const fE = 2204 + -17 * 12;
class pE {
  constructor(n) {
    y(this, "duration");
    y(this, "candidateSelectionTime", 2260 + 7 * 457 + -5459);
    y(this, "candidateSelectionImages", []);
    this.duration = n ?? fE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -1 * -1425 + -38 * 10 + -1045 * 1;
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
    this.candidateSelectionTime = 10821 + 10821 * -1, this.candidateSelectionImages = [];
  }
}
const yE = async () => WebAssembly.validate(new Uint8Array([-135 * -6 + -1 * 4904 + 178 * 23, -1 * 2971 + -1 * -1039 + 2029 * 1, -5591 + -1 * 139 + 5845, 9443 + 26 * -359, 1 * 1076 + 8732 + -9807, -8533 + -359 * 17 + 14636, -2321 + -1209 * 6 + 9575, 0, -11553 + 106 * 109, 5, -6921 * -1 + 3 * 2783 + -15269, 3 * -467 + -1552 + 3049, 9808 + -1 * -4421 + 153 * -93, -7517 * 1 + -3 * 1871 + 13131, -3 * 3064 + -8943 + 18258, 3, 591 + 1 * 5221 + 10 * -581, 1, 4 * 2281 + 4 * 2228 + -1002 * 18, 3217 * -3 + -1259 * -2 + -3 * -2381, 173 * 31 + -9 * -857 + -47 * 278, -6628 + 1515 * -1 + 8144, 8, 8 * 771 + -6673 * 1 + 505, -3177 * 2 + -6070 + 4163 * 3, 7570 + 1 * 3063 + -1519 * 7, -34 * 285 + -744 * 11 + -1 * -18127, -42 * -224 + -1 * 8867 + -526, 1 * 9149 + 3297 + -12193, 1014 + 4 * -1145 + 1 * 3664, -12124 + 5 * 2427]));
function mE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-5459 + -365 * -15);
}
function wE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = mE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function DE(i) {
  return i > -19569 * 5 + 203 * 591 + 37872 ? ">1m" : "" + i;
}
function bE(i) {
  return i > -730 + 89 * 47 + 1 * -3443 ? ">10" : "" + i;
}
const kE = (i) => Math.round(i / 500) * 500 / 1e3, SE = (i) => i ? i <= 2646 + -2645 * 1 ? Math.round(i * (-28 * -7 + -8434 + -2 * -4129)) / (-1643 + 2 * 4537 + -7411 * 1) : Math.round(i / (-15701 + 1 * 15751)) * (4 * -2383 + 9637 + -55) : 0;
function GE(i) {
  return i ? Math.round(i / (14 * -659 + -25 * 173 + -7 * -2293)) * 2500 : 10779 + -3593 * 3;
}
const NE = (i) => i ? Math.round(i / (23 * 367 + 1 * -6853 + -263 * 6)) * 10 : 61 * 13 + -4189 * -2 + -9171;
function RE(i) {
  return i !== sA.RUNNING ? Dn.VISIBLE : Dn.VISIBLE_WITH_MASK;
}
async function vE() {
  return await yE() ? ig.SIMD : ig.NO_SIMD;
}
var ri;
class ic {
  constructor(n, t, e, A, o, r, g, a, I, Q, s, l) {
    y(this, "isRunning", !0);
    O(this, ri, Date.now());
    y(this, "fpsOfAllImages", new Es(106 * 94 + 1142 + -11076));
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = g, this.samVersion = a, this.instructionEscalation = I, this.sessionToken = Q, this.analytics = s, this.transactionCounting = l;
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
    var g;
    const e = Date.now(), A = Sn(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - b(this, ri), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await vE() };
    ro() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !wt() }), (g = this.analytics) == null || g.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Ut(Sn(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    var E;
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await rB(n), r = await this.prepareDetectionMetadata(n, t), g = (E = this.cameraService.videoRecorder) == null ? void 0 : E.getRecording(), a = {};
    a.image = o, a.metadata = r, a.video = g;
    const I = await this.createProtoMessage(a), Q = {};
    Q.detection = t, Q.imageResolution = A;
    const s = {};
    s.image = o, s.data = Q;
    const l = s, C = {};
    return C.imageData = l, C.metadata = r, C.protoMessage = I, C;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = dB(), o = await uB(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await dE(A, o) }, g = {};
    return g.sessionToken = this.sessionToken, g.web = r, g;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = us(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await gB(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, Q = await nc(g), s = {};
    return s.image = Q, s.topLeftCorner = I, s;
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
    await mr(Math.max(gg.max - n, gg.min));
  }
}
ri = new WeakMap();
class FE extends ic {
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
      throw e instanceof Error ? D.fromCameraError(e) : D.fromError(e);
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
    var g;
    if (!(((g = this.lastImage) == null ? void 0 : g.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    var A;
    const { detection: t, image: e } = this.bestImage || {};
    if ((A = this.transactionCounting) == null || A.trackTransaction(), e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelection.getCandidateSelectionImages() });
    else throw new D("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), o = Ut(1e3 / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const g = r, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), I = {};
    I.isNewDetectionValid = t.isValid, I.newInvalidInstruction = a[-1260 + -3 * 1781 + 3 * 2201];
    const Q = this.getInstructionCode(I), s = this.collectAndEscalate(Q);
    return { processedImage: { detection: t.detection, instructionCode: Q, isEscalated: s, invalidValidators: a, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: A, fps: o, avgFps: Ut(Sn(this.fpsOfAllImages)), resolution: g };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class rc {
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
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.createProtoMessage) throw new D("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new D("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new D("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new D("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new D("FallbackInstruction is required");
    if (!this.samVersion) throw new D("SamVersion is required");
  }
}
class ME extends rc {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new D("instructionCodeMap is required");
    if (!this.candidateSelection) throw new D("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new FE(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
var Me, tt;
class WE extends ic {
  constructor(...t) {
    super(...t);
    O(this, Me);
    O(this, tt);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ni).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    M(this, tt, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && M(this, Me, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(og.REQUEST_CAPTURE, b(this, tt));
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
    return b(this, Me) ? b(this, Me) === Ni.FIRST_FRAME ? !0 : b(this, Me) === Ni.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? D.fromCameraError(e) : D.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    var o;
    (o = this.transactionCounting) == null || o.trackTransaction(), this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), M(this, Me, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), o = Ut((-20 * 79 + -306 + 2886) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const g = r, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), I = this.getInstructionCode(a[8202 + -1 * 2702 + -220 * 25]), Q = this.collectAndEscalate(I), s = {};
    return s.detection = e.detection, s.instructionCode = I, s.invalidValidators = a, s.isInCandidateSelection = !1, s.isEscalated = Q, { processedImage: s, detectionTime: A, fps: o, avgFps: Ut(Sn(this.fpsOfAllImages)), resolution: g };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), b(this, tt) && document.removeEventListener(og.REQUEST_CAPTURE, b(this, tt));
  }
}
Me = new WeakMap(), tt = new WeakMap();
class LE extends rc {
  build() {
    return this.validateDependencies(), new WE(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class OE {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: g, fallbackInstruction: a, imageProcessor: I, instructionCodeMap: Q, instructionEscalation: s, onCaptureCallback: l, onDetectionCallback: C, samVersion: E, sessionToken: d, transactionCounting: u } = t;
    switch (n) {
      case ur.AUTO_CAPTURE:
        return new ME().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setInstructionCodeMap(Q).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(l).setOnDetectionCallback(C).setSamVersion(E).setInstructionEscalation(s).setSessionToken(d).setAnalytics(e).setTransactionCounting(u).build();
      case ur.WAIT_FOR_REQUEST:
        return new LE().setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(l).setOnDetectionCallback(C).setSamVersion(E).setInstructionEscalation(s).setSessionToken(d).setAnalytics(e).setTransactionCounting(u).build();
      default:
        throw new D("Invalid detection type: " + n);
    }
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ac = Symbol("Comlink.proxy"), JE = Symbol("Comlink.endpoint"), gc = Symbol("Comlink.releaseProxy"), Zi = Symbol("Comlink.finalizer"), En = Symbol("Comlink.thrown"), Ic = (i) => typeof i == "object" && i !== null || typeof i == "function", UE = {
  canHandle: (i) => Ic(i) && i[ac],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return cc(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), Bc(i);
  }
}, YE = {
  canHandle: (i) => Ic(i) && En in i,
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
}, sc = /* @__PURE__ */ new Map([
  ["proxy", UE],
  ["throw", YE]
]);
function PE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function cc(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!PE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map($e);
    let I;
    try {
      const Q = g.slice(0, -1).reduce((l, C) => l[C], i), s = g.reduce((l, C) => l[C], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          Q[g.slice(-1)[0]] = $e(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(Q, a);
          break;
        case "CONSTRUCT":
          {
            const l = new s(...a);
            I = qE(l);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: l, port2: C } = new MessageChannel();
            cc(i, C), I = _E(l, [l]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (Q) {
      I = { value: Q, [En]: 0 };
    }
    Promise.resolve(I).catch((Q) => ({ value: Q, [En]: 0 })).then((Q) => {
      const [s, l] = $n(Q);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), l), r === "RELEASE" && (n.removeEventListener("message", e), Cc(n), Zi in i && typeof i[Zi] == "function" && i[Zi]());
    }).catch((Q) => {
      const [s, l] = $n({
        value: new TypeError("Unserializable return value"),
        [En]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), l);
    });
  }), n.start && n.start();
}
function TE(i) {
  return i.constructor.name === "MessagePort";
}
function Cc(i) {
  TE(i) && i.close();
}
function Bc(i, n) {
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
  }), Jr(i, t, [], n);
}
function Zo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Qc(i) {
  return pt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    Cc(i);
  });
}
const zn = /* @__PURE__ */ new WeakMap(), Xn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (zn.get(i) || 0) - 1;
  zn.set(i, n), n === 0 && Qc(i);
});
function HE(i, n) {
  const t = (zn.get(n) || 0) + 1;
  zn.set(n, t), Xn && Xn.register(i, n, i);
}
function KE(i) {
  Xn && Xn.unregister(i);
}
function Jr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (Zo(A), g === gc)
        return () => {
          KE(o), Qc(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = pt(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then($e);
        return a.then.bind(a);
      }
      return Jr(i, n, [...t, g]);
    },
    set(r, g, a) {
      Zo(A);
      const [I, Q] = $n(a);
      return pt(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, Q).then($e);
    },
    apply(r, g, a) {
      Zo(A);
      const I = t[t.length - 1];
      if (I === JE)
        return pt(i, n, {
          type: "ENDPOINT"
        }).then($e);
      if (I === "bind")
        return Jr(i, n, t.slice(0, -1));
      const [Q, s] = Yg(a);
      return pt(i, n, {
        type: "APPLY",
        path: t.map((l) => l.toString()),
        argumentList: Q
      }, s).then($e);
    },
    construct(r, g) {
      Zo(A);
      const [a, I] = Yg(g);
      return pt(i, n, {
        type: "CONSTRUCT",
        path: t.map((Q) => Q.toString()),
        argumentList: a
      }, I).then($e);
    }
  });
  return HE(o, i), o;
}
function jE(i) {
  return Array.prototype.concat.apply([], i);
}
function Yg(i) {
  const n = i.map($n);
  return [n.map((t) => t[0]), jE(n.map((t) => t[1]))];
}
const Ec = /* @__PURE__ */ new WeakMap();
function _E(i, n) {
  return Ec.set(i, n), i;
}
function qE(i) {
  return Object.assign(i, { [ac]: !0 });
}
function $n(i) {
  for (const [n, t] of sc)
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
    Ec.get(i) || []
  ];
}
function $e(i) {
  switch (i.type) {
    case "HANDLER":
      return sc.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function pt(i, n, t, e) {
  return new Promise((A) => {
    const o = VE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function VE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const ZE = "SAM v1.50.5 for idcards";
class zE {
  constructor(n, t, e, A, o, r, g) {
    y(this, "isDetectorInitialized", !1);
    y(this, "samVersion", null);
    y(this, "detection");
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = g;
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new D("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  createDetection(n, t) {
    this.detection && this.detection.stop();
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: g, instructionCodeMap: a, onCaptureCallback: I, onDetectionCallback: Q, sessionToken: s, transactionCounting: l } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: l, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: g, instructionCodeMap: a, checkToInstructionCodeMap: o, sessionToken: s, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: I, onDetectionCallback: Q, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new D("Detection not initialized");
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
    return "" + t.replace(Cs, "") + n;
  }
}
class XE {
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
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new D("AssetsDirectoryPath is required");
    if (!this.detector) throw new D("Detector is required");
    if (!this.compatibleSamVersion) throw new D("CompatibleSamVersion is required");
    if (!this.validationService) throw new D("ValidationService is required");
    if (!this.detectionFactory) throw new D("DetectionFactory is required");
    if (!this.candidateSelection) throw new D("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class $E {
  constructor() {
    y(this, "detectionRecord", []);
    y(this, "imagesWithTimestampForDuplicateDetection", new Es(zC));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / eB, A = e / (-9127 * 1 + 911 * 10 + 1 * 19), o = n.length / (14787 + 14785 * -1), r = n.slice(o - A, o + A), g = await CE(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: us(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = tB(n), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const g = {};
      g.image = e, g.timestamp = A, this.collectImagesForDuplicateDetection(g);
    }
    return this.detectionRecord.push(n), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Al {
  constructor() {
    y(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new D("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class lc extends zE {
  constructor(t, e, A, o, r, g, a, I) {
    super(o, r, g, a, A, t, I);
    y(this, "detector");
    this.detectionFactory = t, this.detector = e;
  }
  async init() {
    await super.init();
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], ms(We.INSTRUCTION_CHANGED, t, PC);
  }
}
class el extends XE {
  build() {
    return this.validateDependencies(), new lc(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
const tl = "/dot-assets/palm/dot-C7Kivi2n.js";
class ol extends $E {
  constructor(t, e) {
    super();
    y(this, "className", "PalmImageProcessor");
    y(this, "detector");
    y(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Gn(t), A = ds(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let o = await this.detector.detect(A.data, A.resolution);
    o = BB(o, Gn(t)), o = QB(o, t);
    const r = {};
    return r.image = t, r.timestamp = e, r.imageData = A.data, r.detectedObject = o, this.processDetectedObject(r);
  }
}
var Gt, ot, nt;
class nl {
  constructor(n) {
    O(this, Gt);
    O(this, ot);
    O(this, nt);
    M(this, Gt, n), M(this, ot, /* @__PURE__ */ new Map());
  }
  validate() {
    b(this, Gt).forEach((n) => {
      b(this, ot).set(n.name, n.evaluate());
    }), M(this, nt, void 0);
  }
  isValid() {
    return b(this, nt) === void 0 && M(this, nt, Array.from(b(this, ot).values()).every((n) => n)), b(this, nt);
  }
  get result() {
    return b(this, ot);
  }
  get validators() {
    return b(this, Gt);
  }
}
Gt = new WeakMap(), ot = new WeakMap(), nt = new WeakMap();
var uo, it;
class Ye {
  constructor(n, t) {
    O(this, uo);
    O(this, it);
    M(this, uo, n), M(this, it, t);
  }
  get threshold() {
    return b(this, it);
  }
  get name() {
    return b(this, uo);
  }
  isValueBelowThreshold(n) {
    return n < b(this, it);
  }
  isValueAboveThreshold(n) {
    return n > b(this, it);
  }
}
uo = new WeakMap(), it = new WeakMap();
const il = "isNotDim";
var xo;
class rl extends Ye {
  constructor(t, e) {
    super(il, t);
    O(this, xo);
    M(this, xo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, xo));
  }
}
xo = new WeakMap();
const al = "isNotSmall";
var ho;
class gl extends Ye {
  constructor(t, e) {
    super(al, t);
    O(this, ho);
    M(this, ho, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, ho));
  }
}
ho = new WeakMap();
const Il = "isNotBright";
var fo;
class sl extends Ye {
  constructor(t, e) {
    super(Il, t);
    O(this, fo);
    M(this, fo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(b(this, fo));
  }
}
fo = new WeakMap();
const cl = "isNotLarge";
var po;
class Cl extends Ye {
  constructor(t, e) {
    super(cl, t);
    O(this, po);
    M(this, po, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(b(this, po));
  }
}
po = new WeakMap();
const Bl = "isPresent";
var yo;
class Ql extends Ye {
  constructor(t, e) {
    super(Bl, t);
    O(this, yo);
    M(this, yo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, yo));
  }
}
yo = new WeakMap();
const El = "isSharp";
var mo;
class ll extends Ye {
  constructor(t, e) {
    super(El, t);
    O(this, mo);
    M(this, mo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, mo));
  }
}
mo = new WeakMap();
const dl = "isTemplateExtractionQualityHighEnough";
var wo;
class ul extends Ye {
  constructor(t, e) {
    super(dl, t);
    O(this, wo);
    M(this, wo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, wo));
  }
}
wo = new WeakMap();
const xl = "isNotOutOfBounds";
var Do, Nt;
class hl extends Ye {
  constructor(t, e, A) {
    super(xl, t);
    O(this, Do);
    O(this, Nt);
    M(this, Do, e), M(this, Nt, A);
  }
  evaluate() {
    const t = xs(b(this, Nt), this.threshold, Gn(b(this, Nt))), { bottomLeft: e, bottomRight: A, topLeft: o, topRight: r } = b(this, Do), g = {};
    return g.topLeft = o, g.topRight = r, g.bottomLeft = e, g.bottomRight = A, CB(g, t);
  }
}
Do = new WeakMap(), Nt = new WeakMap();
class fl {
  static getPalmValidationInstance(n, t, e) {
    return new nl([new Ql(n.confidenceThreshold, t.confidence), new hl(n.outOfBoundsThreshold, t, e), new gl(n.sizeIntervalThreshold.min, t.smallestEdge), new ll(n.sharpnessThreshold, t.sharpness), new rl(n.brightnessLowThreshold, t.brightness), new sl(n.brightnessHighThreshold, t.brightness), new Cl(n.sizeIntervalThreshold.max, t.smallestEdge), new ul(n.minTemplateExtractionQualityThreshold, t.templateExtractionQuality)]);
  }
}
class pl extends Al {
  constructor() {
    super(...arguments);
    y(this, "className", "PalmValidationService");
  }
  validateDetectedObject(t, e) {
    const A = fl.getPalmValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
function yl() {
  const { handleError: i } = ne(), { assetsDirectoryPath: n, candidateSelectionDurationMillis: t } = ys(), { thresholds: e } = ec(), [A, o] = lA();
  _(() => {
    let g;
    async function a() {
      const I = lc.getWorkerPath(tl, n), Q = {};
      Q.type = "module";
      const s = new Worker(new URL(I, import.meta.url), Q), l = Bc(s);
      g = await new l();
      const C = new pl(), E = new ol(g, C), d = new OE(), u = new pE(t), B = new el().setDetector(g).setValidationService(C).setImageProcessor(E).setAssetsDirectoryPath(n).setCompatibleSamVersion(ZE).setDetectionFactory(d).setCandidateSelection(u).build();
      try {
        await B.init(), o(B);
      } catch (h) {
        if (h instanceof Error) {
          i(D.fromError(h));
          return;
        }
      }
    }
    return a(), () => {
      g && g[gc]();
    };
  }, [i, n, t]), _(() => {
    A && A.setThresholds(e);
  }, [A, e]);
  const r = {};
  return r.controller = A, r;
}
function ml() {
  const { isCameraReady: i } = ne(), { sunfish: n } = No(), { controller: t } = yl(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = hE({ controller: t });
  return /* @__PURE__ */ w(jQ, { cameraResolution: e, detectionDetails: A, shouldMirror: o, children: /* @__PURE__ */ w(
    NC,
    {
      ref: r,
      $isImageMirror: o,
      $isVisible: n && i,
      autoPlay: !0,
      id: TC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function wl({ children: i }) {
  const n = oe(null);
  return _B(n, We.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(GC, { ref: n, children: i });
}
function Dl(i) {
  const { handleAppStateChange: n, setIsCameraReady: t } = ne();
  return RQ({
    onBlur: () => {
      t(!1), n(sA.LOADING);
    },
    onFocus: () => {
      t(!0), n(sA.RUNNING);
    }
  }), /* @__PURE__ */ w(wl, { children: /* @__PURE__ */ w(JB, { cameraOptions: i, children: /* @__PURE__ */ w(JQ, { cameraOptionsThresholds: i.thresholds, children: /* @__PURE__ */ w(ml, {}) }) }) });
}
function bl({
  children: i,
  isVideoCaptureEnabled: n,
  ...t
}) {
  const e = t.cameraFacing ?? li() ? yn.REAR : yn.FRONT;
  return /* @__PURE__ */ w(DQ, { cameraFacing: e, isVideoCaptureEnabled: n, children: i });
}
function kl({ initAppState: i, onError: n }) {
  const [t, e] = lA(i), [A, o] = lA(), [r, g] = lA(!1), [a, I] = lA(!1), Q = wn.Lower, s = oe(n);
  _(() => {
    s.current = n;
  }, [n]);
  const l = {};
  return l.redfin = Q, l.appState = t, l.setAppState = e, l.error = A, l.setError = o, l.isCameraReady = r, l.setIsCameraReady = g, l.onErrorRef = s, l.firstRunningDone = a, l.setFirstRunningDone = I, l;
}
function Sl({ onError: i }) {
  const n = {};
  n.initAppState = sA.LOADING, n.onError = i;
  const { appState: t, redfin: e, error: A, firstRunningDone: o, isCameraReady: r, onErrorRef: g, setAppState: a, setError: I, setFirstRunningDone: Q, setIsCameraReady: s } = kl(n), l = RE(t), C = we((u) => {
    const B = {};
    B.appState = sA.ERROR, B.error = u, Cg(We.STATE_CHANGED, B), s(!1), g.current(u), I(u), a(sA.ERROR);
  }, [s, g, I, a]), E = we((u) => {
    const B = {};
    B.appState = u, Cg(We.STATE_CHANGED, B), a(u);
  }, [a]), d = {};
  return d.appState = t, d.redfin = e, d.freemiumOverlayState = l, d.isCameraReady = r, d.setIsCameraReady = s, d.handleAppStateChange = E, d.handleError = C, d.error = A, d.firstRunningDone = o, d.setFirstRunningDone = Q, d;
}
var Qa = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(Qa || {});
const yt = {};
yt.AUTO_CAPTURE = "auto-capture", yt.CAPTURE_FINISHED = "capture-finished", yt.CAPTURE_STARTED = "capture-started", yt.ESCALATION_TRIGGER = "escalation-trigger", yt.LONG_CAPTURE_SMILE = "long-capture-smile";
const Ai = yt, Ve = {};
Ve.PALM = "palm", Ve.SMILE = "smile", Ve.DOCUMENT = "document", Ve.MAGNIFEYE = "magnifeye", Ve.EYE_GAZE = "eye-gaze", Ve.FACE = "face";
const Gl = Ve;
class Nl {
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
    const g = Ko(r);
    try {
      await fetch("" + o + g + "&" + n, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(n, t) {
    if (!t) return;
    this.countlyAppKey = t, this.deviceId = n;
    const A = { _app_version: ga() }, o = { organization: Ia(window.location.href) }, r = Ko({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const n = {};
    n.end_session = "1";
    const t = Ko(n);
    await this.countlyFetch(t);
  }
  async sendEvent(n, t, e) {
    const A = {};
    A.key = n, A.count = 1, A.dur = e, A.segmentation = t;
    const o = [A], r = Ko({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(n, t) {
    await this.sendEvent(Qa.AUTO_CAPTURE, n, t);
  }
}
const Vt = new Nl();
class Rl {
  constructor() {
    y(this, "apiKey");
    y(this, "sessionId");
    y(this, "distinctId");
    y(this, "componentName");
    y(this, "platform");
    y(this, "versionName");
    y(this, "applicationId");
    this.platform = "web", this.versionName = ga(), this.applicationId = Ia(window.location.href);
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
const zo = new Rl();
class vl {
  constructor(n) {
    y(this, "countly", Vt);
    y(this, "posthog", zo);
    y(this, "componentName");
    this.componentName = n;
  }
  createSegmentation(n) {
    return { appVersion: ga(), ...n };
  }
  init(n, t, e) {
    if (Bs()) return;
    const A = wE(), o = {};
    o.apiKey = t, o.componentName = this.componentName, o.customer = e, o.sessionId = A, zo.init(o), Vt.init(A, n);
  }
  endSession() {
    Vt.endSession();
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    zo.sendEvent(Ai.AUTO_CAPTURE, A), Vt.sendAutoCaptureEvent(A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    zo.sendEvent(Ai.ESCALATION_TRIGGER, e), Vt.sendEvent(Qa.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeAnalyticsReportingEnabled : !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -730 * -13 + -597 + -8643 ? NE(n) : SE(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: bE(o || 0), firstHiccup: DE(GE(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class Fl extends vl {
  constructor() {
    super(Gl.PALM);
  }
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: g, instructionSet: a, isSystemStable: I, performanceCheckup: Q }) {
    if (!A) return;
    const s = kE(e), l = this.parsePerformanceCheckup(t, Q), C = { facingMode: r, confidence: A.confidence, camera: o, imageResolution: g.width + "x" + g.height, averageFps: n, captureTime: s, instructionSet: a, isSystemStable: I, ...l }, E = this.createSegmentation(C);
    this.countly.sendAutoCaptureEvent(E, s), this.posthog.sendEvent(Ai.CAPTURE_FINISHED, E, s);
  }
}
const Ml = new Fl();
let L;
const ye = new Array(1 * -948 + 5680 + -4604).fill(void 0);
ye.push(void 0, null, !0, !1);
function Ur(i) {
  return ye[i];
}
let Qe = 0, eo = null;
function ln() {
  return (eo === null || eo.byteLength === -17 * 110 + -5 * -1055 + -3405) && (eo = new Uint8Array(L.memory.buffer)), eo;
}
const dn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Wl = typeof dn.encodeInto == "function" ? function(i, n) {
  return dn.encodeInto(i, n);
} : function(i, n) {
  const t = dn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function co(i, n, t) {
  if (t === void 0) {
    const g = dn.encode(i), a = n(g.length, 1) >>> 1 * -9441 + -5 * 361 + 11246;
    return ln().subarray(a, a + g.length).set(g), Qe = g.length, a;
  }
  let e = i.length, A = n(e, 839 + 1665 * -4 + 5822) >>> -8160 + -1 * 9839 + -17999 * -1;
  const o = ln();
  let r = -6907 * -1 + -46 * -150 + -13807;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 2854 + 6 * 1177 + -9789) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 1 * 439 + 3 * 973 + -3358 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-8479 * 1 + -6799 * 1 + 15281), 1) >>> -2 * -1982 + 6671 * -1 + 2707;
    const g = ln().subarray(A + r, A + e), a = Wl(i, g);
    r += a.written, A = t(A, e, r, -1 * 2699 + -7081 * -1 + 1 * -4381) >>> 1366 * -2 + -2824 + -463 * -12;
  }
  return Qe = r, A;
}
function dc(i) {
  return i == null;
}
let to = null;
function ce() {
  return (to === null || to.byteLength === 174 + -6 * 29) && (to = new Int32Array(L.memory.buffer)), to;
}
let go = ye.length;
function Ll(i) {
  i < 531 + -399 * 1 || (ye[i] = go, go = i);
}
function uc(i) {
  const n = Ur(i);
  return Ll(i), n;
}
const Yr = {};
Yr.ignoreBOM = !0, Yr.fatal = !0;
const xc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Yr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && xc.decode();
function ei(i, n) {
  return i = i >>> -313 * -4 + -1 * 4846 + 3594, xc.decode(ln().subarray(i, i + n));
}
function Pr(i) {
  go === ye.length && ye.push(ye.length + (-1875 + -31 * 313 + -11579 * -1));
  const n = go;
  return go = ye[n], ye[n] = i, n;
}
let oo = null;
function hc() {
  return (oo === null || oo.byteLength === -2341 * 3 + -9561 + 16584) && (oo = new Uint32Array(L.memory.buffer)), oo;
}
function Pg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = hc();
  for (let A = -3679 * -2 + -4 * 656 + -4734; A < i.length; A++)
    e[t / (473 + -7 * 67) + A] = Pr(i[A]);
  return Qe = i.length, t;
}
function Tg(i, n) {
  i = i >>> -17 * 252 + -1559 + 5843;
  const t = hc(), e = t.subarray(i / (3745 + 1 * -6429 + 2688), i / (36 + -2 * -3841 + -203 * 38) + n), A = [];
  for (let o = -2645 + 404 * 11 + -1799; o < e.length; o++)
    A.push(uc(e[o]));
  return A;
}
function Ol(i, n) {
  const t = co(i, L.__wbindgen_malloc, L.__wbindgen_realloc), e = Qe, A = co(n, L.__wbindgen_malloc, L.__wbindgen_realloc), o = Qe, r = L.is_mobile_supported(t, e, A, o);
  return Ea.__wrap(r);
}
const Tr = {};
Tr.register = () => {
}, Tr.unregister = () => {
};
const Hg = typeof FinalizationRegistry > "u" ? Tr : new FinalizationRegistry((i) => L.__wbg_licensevalidationresult_free(i >>> 9251 + -2113 * -1 + -11364));
class Ea {
  static __wrap(n) {
    n = n >>> 2 * -4803 + -7207 + 16813;
    const t = Object.create(Ea.prototype);
    return t.__wbg_ptr = n, Hg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    L.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = dc(t) ? 0 : co(t, L.__wbindgen_malloc, L.__wbindgen_realloc), g = Qe;
    const a = Pg(e, L.__wbindgen_malloc), I = Qe, Q = Pg(A, L.__wbindgen_malloc), s = Qe, l = co(o, L.__wbindgen_malloc, L.__wbindgen_realloc), C = Qe, E = L.licensevalidationresult_new(n, r, g, a, I, Q, s, l, C);
    return this.__wbg_ptr = E >>> -208 * -23 + 1724 + -1 * 6508, this;
  }
  get is_valid() {
    return L.licensevalidationresult_is_valid(this.__wbg_ptr) !== -6906 + -212 * 12 + -9 * -1050;
  }
  get features_json() {
    try {
      const e = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (-8013 * -1 + 191 * 1 + -8200) + (-18 * -311 + -5301 + 9 * -33)], t = ce()[e / (556 * 12 + 4914 + -11582 * 1) + 1];
      let A;
      return n !== -2054 + 2054 * 1 && (A = ei(n, t).slice(), L.__wbindgen_free(n, t * (-1 * -1693 + -1 * 388 + 4 * -326), -4507 * -2 + -7421 * -1 + -16434)), A;
    } finally {
      L.__wbindgen_add_to_stack_pointer(9 * 1055 + -463 * 3 + -8090);
    }
  }
  get errors() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / (6924 + 173 * -40) + (1 * -9589 + 1 * 8192 + 1397)], t = ce()[A / (7631 + -29 * 263) + (7090 + 1 * 9118 + 853 * -19)], e = Tg(n, t).slice();
      return L.__wbindgen_free(n, t * (-69 + -1027 * 4 + -1 * -4181), -1 * -3209 + 7268 * -1 + 4063 * 1), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(-8225 + 203 * 5 + 7226 * 1);
    }
  }
  get warnings() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / (-8621 + -3 * 2534 + 5409 * 3) + (3291 + -1 * -6185 + -9476)], t = ce()[A / (-1 * 9617 + 9359 + 262) + (4129 + -1376 * 3)], e = Tg(n, t).slice();
      return L.__wbindgen_free(n, t * (-6782 + 2062 * 4 + 43 * -34), 991 * -4 + 7799 + -3831), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / (-733 * 1 + 8142 + 5 * -1481) + (57 * 19 + 3 * -433 + 216)], A = ce()[o / 4 + (7 * 69 + 8456 + 218 * -41)];
      return n = e, t = A, ei(e, A);
    } finally {
      L.__wbindgen_add_to_stack_pointer(-167 * 1 + -5622 + -1935 * -3), L.__wbindgen_free(n, t, -4915 + 7 * -426 + 7898);
    }
  }
}
async function Jl(i, n) {
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
function Ul() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Ur(t), A = typeof e == "string" ? e : void 0;
    var o = dc(A) ? -3 * -2437 + 2 * -4382 + 1453 * 1 : co(A, L.__wbindgen_malloc, L.__wbindgen_realloc), r = Qe;
    ce()[n / (21 * 326 + -1505 + 9 * -593) + (12307 + -21 * 586)] = r, ce()[n / (1157 * 6 + -1 * -6662 + -544 * 25) + (-886 + -443 * -2)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    uc(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = ei(n, t);
    return Pr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Pr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Ur(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(ei(n, t));
  }, i;
}
function Yl(i, n) {
  return L = i.exports, fc.__wbindgen_wasm_module = n, to = null, oo = null, eo = null, L;
}
async function fc(i) {
  if (L !== void 0) return L;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Ul();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Jl(await i, n);
  return Yl(t, e);
}
(function(i, n) {
  function t(g, a, I, Q, s) {
    return EA(g - 720, s);
  }
  function e(g, a, I, Q, s) {
    return EA(I - -785, Q);
  }
  const A = i();
  function o(g, a, I, Q, s) {
    return EA(a - -276, s);
  }
  function r(g, a, I, Q, s) {
    return EA(Q - 383, s);
  }
  for (; ; )
    try {
      if (parseInt(r(584, 589, 578, 582, "9bdT")) / 1 + parseInt(e(-629, -608, -619, "OA*Q", -630)) / 2 + -parseInt(e(-629, -606, -606, "Lzqt", -594)) / 3 + -parseInt(r(587, 549, 579, 565, "Bsnt")) / 4 + -parseInt(r(565, 595, 560, 571, "RCdz")) / 5 + -parseInt(o(-72, -86, -85, -73, "!lMW")) / 6 * (-parseInt(t(930, 906, 928, 917, "lCSn")) / 7) + parseInt(t(892, 907, 885, 875, "gSq6")) / 8 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ti, 1502204 + 1 * 768646 + 54629 * -25);
function Pl(i, n, t, e, A) {
  return EA(i - 424, n);
}
function zi(i, n, t, e, A) {
  return EA(i - -915, t);
}
function dt(i, n, t, e, A) {
  return EA(e - -309, i);
}
function Tl(i, n, t, e, A) {
  return EA(A - 683, t);
}
function Xo(i, n, t, e, A) {
  return EA(n - -557, A);
}
function EA(i, n) {
  const t = ti();
  return EA = function(e, A) {
    e = e - (434 * 3 + -2878 + 1742);
    let o = t[e];
    if (EA.Ejqgps === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      EA.iUIwMY = Q, i = arguments, EA.Ejqgps = !0;
    }
    const g = t[-1589 * -3 + -1 * 5029 + 262], a = e + g, I = i[a];
    return I ? o = I : (EA.XluGqp === void 0 && (EA.XluGqp = !0), o = EA.iUIwMY(o, A), i[a] = o), o;
  }, EA(i, n);
}
function ti() {
  const i = ["WRWJaX8N", "EmkfkH7dGSodW4GIWPejemoLEq", "WR0QsxpcTa", "W5OEgbtcPa", "W7hcV8k6WOqlh3VdNSomrqvIW6FcIG", "qv0KWPFdHW", "W5HZE8odWPe", "nCo+i8k4C8odpYvGahVcOmoS", "h8kgegTh", "W6lcP8oKsCocWQtdJdNcMCoLyvVcKq", "W5tcOKRcLXe", "r8owwZyqgSo4ua42WOqGoa", "W6xdLbj0WQW", "W4exW5riWP/dNNLHeW", "WPXjwKRdNdDuW71TyCkGW5/dSW", "W7BcMbTAAa", "WOiSWRHtrG", "WPbhz01w", "W5DQWOq6hq", "WQRdOmoSW5no", "kYVdHCkBW7hdQmoGuhZcKCoOnCov", "ACk9WOKJW6G", "bCoMWPlcHxewAvFcGCk6W4K", "WPlcHSkeW7ZcJCoOW5ejFCksBGCx", "WOeQWR5FbW", "WPvlW4WYWO4", "W6PNfYxdQSkSEaRcJSkXwmkr", "nKddMHZdMa", "a8kwegS", "W4WJWQ1tsW", "WOu2WPTBva", "vKufnvawB8oHB8oQtWyR", "ifxdGb7dVW", "leddNrJdVG", "ESkPySoTaW", "WRSRgX88", "bSkcd2bx", "WQBdHHj0WQq", "r1aAW5mP", "p8okWQRcOmo2", "wSk+W43dLtS", "bfhdICo/o8o9uxFcLmo3cW", "gYfnW6aCW7WbWQSs", "CLFcOmoG", "xJhdISk8WOu", "fLO4WOJcRG", "WPFdR15CWQWZcmodW6pcGmk0oq", "mqGSqYNcRbzvW7SoWOiKWRFdPq"];
  return ti = function() {
    return i;
  }, ti();
}
var Xg;
class Hl {
  constructor() {
    y(this, Xg, !1);
  }
  async [(Xg = dt("Bsnt", -139, -120, -138) + dt("^&$y", -130, -131, -141) + dt("Lzqt", -114, -128, -133), Xo(-325, -346, -370, -358, "i$9%"))](n) {
    function t(g, a, I, Q, s) {
      return dt(Q, a - 60, I - 407, I - 902);
    }
    function e(g, a, I, Q, s) {
      return zi(Q - 1045, a - 104, s);
    }
    function A(g, a, I, Q, s) {
      return Xo(g - 475, a - 10, I - 437, Q - 137, I);
    }
    function o(g, a, I, Q, s) {
      return Xo(g - 261, s - 481, I - 485, Q - 81, a);
    }
    function r(g, a, I, Q, s) {
      return Xo(g - 270, I - 313, I - 34, Q - 405, Q);
    }
    try {
      const g = n + (r(-31, -55, -39, "izw9", -58) + "/") + Ig;
      await fc(g), this[r(-65, -30, -49, "#BFD", -56) + A(-355, -361, "QxV]", -359, -379) + e(328, 285, 293, 308, "6AI8")] = !0;
    } catch {
      this[o(101, "Pqpu", 76, 120, 97) + t(785, 773, 776, "Zt#8") + e(331, 325, 320, 319, "2(J)")] = !1, console[t(765, 811, 789, "Val9")](Ig + (e(298, 317, 304, 315, "m^ls") + o(129, "!lMW", 133, 119, 132) + A(-368, -377, "8Q3X", -400) + o(110, "u43P", 143, 136, 121) + A(-369, -354, "Xk]J", -347) + t(759, 774, 773, "izw9") + o(128, "zGUS", 112, 114, 136) + t(761, 774, 767, "Gt3)") + t(787, 818, 797, "Lzqt") + o(102, "#BFD", 117, 115, 124) + o(115, "Pqpu", 119, 117, 137) + o(139, "u43P", 96, 104, 116) + o(92, "gSq6", 103, 109, 111) + e(309, 328, 345, 331, "#BFD") + "n."));
    }
  }
  [zi(-717, -697, "u43P") + Tl(884, 909, "lCSn", 886, 889) + Pl(627, "^&$y") + "ed"]() {
    function n(A, o, r, g, a) {
      return zi(r - 1757, o - 73, g);
    }
    function t(A, o, r, g, a) {
      return dt(g, o - 35, r - 66, r - 908);
    }
    function e(A, o, r, g, a) {
      return dt(a, o - 334, r - 271, r - -678);
    }
    return this[t(777, 820, 801, "f&sM") + n(1026, 1036, 1026, "u43P") + e(-793, -784, -780, -776, "E2Q#")];
  }
}
class Xi extends Error {
  constructor() {
    super(...arguments);
    y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function oi() {
  var i = ["orz9DgO", "WQlcPmks", "WRCprW", "tCkJhSoQCa", "W73cUCo+W6pcQG", "smk1lCo7Dq", "WOPdpG", "W4ldUfPwW6m", "W5ehjrHG", "W6vwWPWSWQXfWRdcVCkOcCojW70", "WOldUMFcK0K", "W4z+WRy", "ACoObq", "WOxcSWuVg8kmAqtdQSowWRFdSa", "W7ztgmkwWRldPg4ddtG", "n8kYumkswKHNlhCK", "W7BcQSoLW7pcSq", "W5BdRe5/qq", "CCkAimo4cG5Cgq", "D8kVzG5A", "wwWjWPLplCoLedNcLSk+WOiQ", "W5qmjG", "wSk6fmoDWPi", "FLvsW4NdUq", "zSknWQ7dLCkg", "WQeImSkRyW", "CqhdNeL6WONdMmoqWRxdKCoPrCo8", "gSkDW4FdOYxdTtBdKmkyW6y", "A8oMeG", "W4HAWQebWOyntmohW7/dTCk+", "BSo3WOakWP0", "pmorDvZcMq", "CSo3WPim", "lehcVwPRcwRdKuxcQZVcQCk4", "W6CECmoDWPjzDG", "WQDCySoOrq", "pSkXWRe/WRK", "W7KLC8oQWPZdPSo5W4tdVa8HFLW", "WRigxSoLWQm", "W7FcUmooW6BcUa", "tSk6bG", "vZxcUCoZpa", "WOOoW6DhW5C", "zmkIWOqDWPHwW6S", "WQz2mSk7W4u", "WOX0WQG5cbZdTq", "WOTdka", "WQlcTtPJdq", "W512WQabnW", "zvTi", "W5pdOI4aW6FdLg8PCSokqsrf", "WOddTaJdJwm", "WR3cJmkuW7/cIa", "WQi3pmkTyG", "WQ0Hc8k4EW", "EKJcVCo+ea", "WQWZkCk6FW", "F0DYW5JdSa", "kW/dPSk4v25NjmkijCkq", "ySoqmCk5W7XUW7S", "lKRcIb8/", "ma3dPG", "ACoPWONdP8kM", "WQeGl8k2zq", "dr1tW4Wy", "WQz8F8owtq", "W5DUWRyHkG", "WPCkW6C", "mCo7mLDfumkAnhiq", "hmo0sSkSnmonW4bRW6lcVxeEWPq", "pmoApCkHW4q", "W48imdnN", "DCkdWQJdRmkk", "W5hdPMTEWP3cOXOr", "WPjpnCkPW6K", "W5ddVJxcIKW", "FXRdQdK5", "hmkvW4VdOfJcINJdPSkEW7vPWOuf", "BmkNyInG"];
  return oi = function() {
    return i;
  }, oi();
}
(function(i, n) {
  var t = i();
  function e(I, Q, s, l, C) {
    return j(C - 336, s);
  }
  function A(I, Q, s, l, C) {
    return j(C - -122, s);
  }
  function o(I, Q, s, l, C) {
    return j(l - -168, I);
  }
  function r(I, Q, s, l, C) {
    return j(Q - 91, I);
  }
  function g(I, Q, s, l, C) {
    return j(Q - -34, s);
  }
  for (; ; )
    try {
      var a = -parseInt(e(698, 665, "3JZD", 666, 697)) / 1 + parseInt(r("bYw$", 407, 398, 423, 435)) / 2 * (parseInt(r("g&S3", 437, 453, 453, 458)) / 3) + -parseInt(e(622, 625, "pTmq", 644, 654)) / 4 * (-parseInt(e(605, 588, "jTJR", 648, 628)) / 5) + parseInt(o("YzD[", 200, 177, 168, 200)) / 6 + -parseInt(A(240, 216, "]%9V", 193, 207)) / 7 * (-parseInt(e(660, 688, "HQ!s", 697, 698)) / 8) + -parseInt(r("m7wO", 444, 434, 450, 447)) / 9 + parseInt(e(664, 658, "m7wO", 640, 633)) / 10 * (-parseInt(g(334, 306, "dZO4", 303, 267)) / 11);
      if (a === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(oi, 257599 * 2 + -607139 * 1 + 60932 * 8);
function Zt(i, n, t, e, A) {
  return j(e - 494, n);
}
function $i(i, n, t, e, A) {
  return j(i - 800, t);
}
function j(i, n) {
  var t = oi();
  return j = function(e, A) {
    e = e - (7 * -106 + -53 * 149 + 2 * 4463);
    var o = t[e];
    if (j.mkaiYc === void 0) {
      var r = function(s) {
        for (var l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (var p = 0, m = C.length; p < m; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(s, l) {
        var C = [], E = 0, d, u = "";
        s = r(s);
        var B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      j.ZNpdOg = g, i = arguments, j.mkaiYc = !0;
    }
    var a = t[14817 + -4939 * 3], I = e + a, Q = i[I];
    return Q ? o = Q : (j.jSjcIm === void 0 && (j.jSjcIm = !0), o = j.ZNpdOg(o, A), i[I] = o), o;
  }, j(i, n);
}
function $o(i, n, t, e, A) {
  return j(e - 490, i);
}
function wA(i, n, t, e, A) {
  return j(i - -510, n);
}
function ut(i, n, t, e, A) {
  return j(n - -792, A);
}
var rt, bo;
class Kg {
  constructor(n) {
    O(this, rt);
    O(this, bo);
    function t(g, a, I, Q, s) {
      return j(g - -153, I);
    }
    function e(g, a, I, Q, s) {
      return j(a - -744, Q);
    }
    this[A(-460, -423, "P04x") + o(-49, -67, -66, -36, "dZO4")] = n;
    function A(g, a, I, Q, s) {
      return j(a - -730, I);
    }
    function o(g, a, I, Q, s) {
      return j(Q - -383, s);
    }
    function r(g, a, I, Q, s) {
      return j(s - 540, g);
    }
    try {
      M(this, rt, n[e(-453, -419, -399, "fVrN", -448) + A(-402, -431, "9#ev", -460, -420) + t(199, 166, "nZg0", 220, 217)] && JSON[t(192, 179, "9eDo", 188, 161)](n[r("%3jH", 921, 883, 866, 896) + t(136, 163, "YQWA", 140, 106) + t(152, 174, "2Th!", 179, 190)])), M(this, bo, n[A(-394, -427, "GQoK", -456, -397) + o(-72, -21, -33, -34, "L#FZ")]);
    } catch (g) {
      console[e(-441, -409, -433, "oxla")](g);
    }
  }
  get [wA(-153, "%3jH") + "id"]() {
    function n(A, o, r, g, a) {
      return wA(a - 1053, r);
    }
    function t(A, o, r, g, a) {
      return wA(A - 1054, g);
    }
    function e(A, o, r, g, a) {
      return wA(r - 355, g);
    }
    return this[e(158, 208, 189, "0YI7") + e(167, 174, 204, "%3jH")][n(911, 870, "P04x", 911, 885) + t(859, 836, 847, "pTmq")];
  }
  get [Zt(793, "8a(r", 858, 828) + "s"]() {
    function n(e, A, o, r, g) {
      return wA(r - 1482, e);
    }
    function t(e, A, o, r, g) {
      return wA(e - 52, A);
    }
    return this[n("3JZD", 1342, 1331, 1330) + t(-132, "nZg0")][t(-171, "%3jH") + "s"];
  }
  get [wA(-214, "3dlE") + ut(-445, -461, -487, -438, "pTmq")]() {
    function n(e, A, o, r, g) {
      return wA(o - 77, e);
    }
    function t(e, A, o, r, g) {
      return ut(e - 79, r - 1352, o - 435, r - 218, g);
    }
    return this[n("M#*h", -71, -92) + n("P04x", -136, -114)][t(837, 826, 838, 855, "7BG[") + n("$4)3", -153, -129)];
  }
  get [ut(-478, -465, -473, -500, "3dlE") + "b"]() {
    return b(this, rt);
  }
  get [ut(-499, -502, -534, -506, "iDZ*") + $i(1091, 1127, "9eDo")]() {
    return b(this, bo);
  }
  get [wA(-160, "M%0F") + $o("g&S3", 812, 793, 829) + ut(-436, -454, -478, -424, "YQWA") + wA(-146, "y&a0")]() {
    var r, g;
    function n(a, I, Q, s, l) {
      return ut(a - 8, I - 1332, Q - 130, s - 118, Q);
    }
    function t(a, I, Q, s, l) {
      return Zt(a - 28, a, Q - 376, I - -170);
    }
    function e(a, I, Q, s, l) {
      return $o(Q, I - 1, Q - 53, l - -253);
    }
    function A(a, I, Q, s, l) {
      return $i(a - -1228, I - 17, l);
    }
    function o(a, I, Q, s, l) {
      return $o(s, I - 40, Q - 401, I - -1155);
    }
    return !!((g = (r = b(this, rt)) == null ? void 0 : r[n(845, 846, "GrFt", 852) + o(-338, -351, -351, "iDZ*")]) != null && g[A(-106, -127, -98, -131, "jTJR") + n(864, 842, "jTJR", 848) + o(-321, -352, -379, "jGY7") + t("GrFt", 632, 599) + e(616, 567, "vE@#", 580, 591) + e(600, 584, "dEZ0", 614, 602) + A(-104, -77, -69, -102, "7BG[")]);
  }
  get [$i(1160, 1192, "nZg0") + wA(-147, "]%9V") + wA(-155, "9L%l") + Zt(854, "oxla", 854, 827) + $o("DPCC", 803, 763, 778) + wA(-201, "L#FZ")]() {
    var o, r;
    function n(g, a, I, Q, s) {
      return Zt(g - 48, g, I - 453, a - -258);
    }
    function t(g, a, I, Q, s) {
      return wA(a - 585, g);
    }
    function e(g, a, I, Q, s) {
      return wA(Q - 186, a);
    }
    function A(g, a, I, Q, s) {
      return Zt(g - 305, g, I - 394, a - -558);
    }
    return !!((r = (o = b(this, rt)) == null ? void 0 : o[e(-38, "HQ!s", -9, -30) + n("fVrN", 579, 573)]) != null && r[n("QDj)", 546, 577) + t("iDZ*", 426) + e(-6, "bYw$", -26, -4) + A("L#FZ", 234, 210) + t("%3jH", 403) + A("7BG[", 247, 213) + t("YzD[", 375)]);
  }
}
rt = new WeakMap(), bo = new WeakMap();
function xA(i, n, t, e, A) {
  return oA(n - 720, e);
}
(function(i, n) {
  function t(a, I, Q, s, l) {
    return oA(s - 154, a);
  }
  function e(a, I, Q, s, l) {
    return oA(I - 169, s);
  }
  function A(a, I, Q, s, l) {
    return oA(I - -96, l);
  }
  function o(a, I, Q, s, l) {
    return oA(Q - -480, I);
  }
  const r = i();
  function g(a, I, Q, s, l) {
    return oA(a - 449, s);
  }
  for (; ; )
    try {
      if (-parseInt(g(940, 947, 910, "gsg7", 870)) / 1 * (parseInt(o(-222, "MsOk", -113, 5, 9)) / 2) + parseInt(g(870, 855, 982, "Or9s", 804)) / 3 * (-parseInt(o(-99, "n#p[", -16, -136, -29)) / 4) + -parseInt(g(997, 982, 1050, "lOWe", 1076)) / 5 * (-parseInt(o(-8, "dlSO", -44, -112, -24)) / 6) + -parseInt(g(932, 809, 983, "1k*q", 947)) / 7 + parseInt(t("gH9b", 805, 631, 695, 620)) / 8 * (-parseInt(e(506, 521, 420, "5I2r", 463)) / 9) + -parseInt(A(267, 308, 315, 319, "1y2q")) / 10 * (parseInt(A(295, 382, 327, 442, "Emg2")) / 11) + parseInt(A(402, 421, 522, 398, "!kuc")) / 12 * (parseInt(t("i)J[", 424, 535, 550, 476)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ni, 78891 + 1 * 584067 + -240602);
function NA(i, n, t, e, A) {
  return oA(t - 194, n);
}
function z(i, n, t, e, A) {
  return oA(e - -533, i);
}
function UA(i, n, t, e, A) {
  return oA(t - -962, e);
}
function ni() {
  const i = ["W6ZdUCoXWOS", "WRrGxrDz", "tCouW7VcRq", "W4RdKwD3W5q", "WQGlW4Wbja", "W5rsl3O", "WQ0aF8kxWRu", "W5mCW5ac", "WPb1WO3cVSo7W6PEWP3dOW", "WOhcS1RcTa", "W47cRCkmWP54", "WRKGwCobWRq", "W6aAW4tdNuq", "WPpdSCoGWO3dHq", "W6rOW4FcTSow", "xSo3WQ7cGtK", "W5BcO8kxWR7cSq", "cmkDpSkjka", "iaZcVa", "W7qlWPm6W7xdIqZcUbhdPmkraW", "W5aMe8kPda", "W5qGcCk1", "WORcT0FcUqS", "W4GJW5lcVq", "WPfOW4rACtnJsmkoWQVcK8kVWO8", "yCklzSoOW7S", "WO4RWQFdUr8", "xMpcRc/dQa", "w8oSW4pcSKTLWQxcG8owjmk3", "W5v4omkEza", "nCkTW6u8", "sbFdL8ofEq", "W7TOW4y", "m37cR2pdNq", "W6q2j8ksjW", "fY0aWOD4", "gSoSwSkwlcJdVW", "zmkhzG", "WPjeWRZdSW", "aCkDsCkEW4q", "WPGDF8koWOO", "WRrGxrXB", "WQKlW5KXpG", "W4b+j8o5WQC", "W6Xsl3fL", "rwyRW7CE", "C8oBW6hcTmoD", "WRL5WRbimq", "WRTYqdTD", "WPOkECkTWPe", "smotW7hcVmkt", "W7xcJCkaf1K", "WPjzWPPqW7hdMSo6eSo1WRS2qIW", "rSo3WQJcKtq", "W5iRWPWenW", "W5/dVCoRWPddHW", "W5BdHx98WOO", "WQ/dM23cM8k7", "c8kBwmk+W4S", "t8o3rmkXiG", "W6acW5eMlG", "W67cQ8koWP9A", "W78aW4qcW4C", "W5eHomk+jG", "pq/cIItdQq", "WPKisSkpha", "WQWTW6tdMd4", "WPCICCkRW6zIW5qRW6hcOYy", "WQVdObrPbG", "yXJdHevI", "gmkfW7K5pa", "W5RdMwT8", "b8oiW7i", "WRJdJhdcSCkG", "WO3cPLVcQq", "WQCCW45KWRC", "oGlcUJFdHa", "bmkAt8ovW4y", "W4GLW5xcP8oP", "W6GCWP4/lW", "W6jpW4tcNCoS", "WRefWQldTeu", "WQXTWQ9voG", "W5yHeSkYeq", "WRvDW5jLWQO", "W7v4W4FcNCot", "WORcVuhcNWi", "WPibsG", "W6etnx15", "kSkTW6mXnq", "WPSkECkcWPa", "WOCWWRBdSWm", "w2NcQItdTq", "aCkBtq", "CbpdP8oGzW", "bsO2WPGR", "W4f/isxdK3tcIwZcGSojpq", "WR7dHwJcPSkQ", "W5ddSCo/WOBdHG", "WRZdJgRcHSkQ", "W7eQo8kbBG", "WR7dINa", "W5CvW7ZcQbmDW6fKEmooW5rkmq", "aZyQWO54", "WPnPWR4OaKSmAa", "WPWLA3FcJW", "xMxcQa", "dSkTeq", "BW7dHq9R", "kmohW6FdLmow", "cCkWWP3dSqe", "WOqPAwy", "D18yW5SL", "WPWJCNpcNW", "W4HVdCoXWRe", "dSkTfSkgfG", "WOtcPvRcVHa", "WO0oF8ksWP0", "W6OBW4ZdHG", "W4/dKxDFW5G", "WPjeWRZdS08", "WOxdGmoBqSoyW7f2W7VcUuRcO8o3", "A8kdyq", "WOXlWQJdSG", "W4W2WOfkkG", "W79+W6VcN8oD", "WQlcVrpcNIW", "W7pcJCkDc1G", "qCouW6hcVmoD", "W5iIW5u", "dIm2", "WPveWRZdRKm", "WQPDW5rOWQS", "WQtdPJDZfG", "WRFdIhdcLSkN", "W4hcKSkBlmke", "fCkcWQtcRSkzW5JdOCoAW6W", "W4RcUmkBWQ3cTG", "fmkSe8kzea", "W4jPjmo9", "W4JcUmkmWQhcUq", "W5NdGh9EW5K", "W4xcO8kxWRVcQW", "WP7cLmk9WQVcGSo+W4y", "W61jW6FcH8o8", "k8kVW7i8lG", "W4RcRCkEWO5A", "W5PKW5FcJmos", "W7CgW7i1WPu", "W6z0W4xcI8oQ", "W4q8WPqEnG", "WQ/dIhBcHSkQ", "W6aaW40eWRm", "p8kmWQNdTty", "WP8uvSkztW", "WO0DzmkpWOW", "WRrcWPNcMGnlW7VcRsujWOa", "WPaozmkp", "W6f0dCkVhq", "AmotW7hcVmkt", "WPzkWQa", "W5WavSkFuG", "csWRWPn9", "WQGlW4WjiG", "k2iCW5aYgSo4", "W61Cnq", "W7KoaSk1cG", "W57dOaldOLSdWOK4WRvCWOC", "Ch3cRMxdLG", "ACklC8ojW5O", "BgBdNfNdQa", "r8oPFCk+eq", "WOddH8kfmmk8WQ5gW4G", "W54DW4iOW5G", "WOrKwZfh", "WOzHWQtdMgq", "dmobW7ldLCo2", "cSk9rmkEW58", "W6eYg2GyWO7dUmoJWRrOWQhcNuu", "y8k7W4KGfq", "WRz3wZbC", "W53dU8oX", "h8oJW5TtBmkbDCoDW6apW73cNCkb", "hmkMW67dH2K9WPpdMCkOWQRdNJ9s", "WQfzW454WQy", "rmorwmkDnW", "W4iTW5JcGmoF", "W4GjW4CjWRK", "W6RcUmkBWQ3cTG", "W7jOW5ddHW", "WQ7dHG1qiG", "W5/dOL7cMteCWPew", "WQDsW5nUWPm", "W41uW4JcI8oX", "v8kbyCoyW7O", "tmorxSo4pW", "asKG", "j8kIW6q3dq", "W5WDW4qOW5q", "WP4AFSkvWPC", "WRZdHMRcGCk9", "WQbzW4rVWQy", "umoWs8k1mW", "W5dcSmkuWQhcVa", "W6iwW54", "WQ/dQgz6wa", "F2ldGfNdQa", "wCoMW4pcTKDrWR/cS8oGdCkh", "bW/cMrxdUa", "pGRcQG", "W5q2W7/dPfu", "WP9SsJPa", "WORcVuBcTaC", "WPajxSkVtG", "bCogW6ldLCoi", "W6z/W53cH8oi", "W6OwW4/dH0u", "WP/cHIidWOuEWPJdH1FdO0m", "WRldISkux3a", "WP4DySksWOS", "W4tcRCkyWPrq", "W44WWPyplq", "WRtdOhDXxW", "W7mmW6TjWOlcSbFcRG", "W7abW4xdHfm", "c8kRWPVdTG", "W4pcRmk1fg8", "WPqPDtW", "DMRcSNNdGq", "qLVcOWtdJq", "W4tdL3zvW44", "ccuXWP5J", "WOqWWQhdUq", "F1KpW7SM", "WRn/WPXkpW", "WRnOWRa", "WRDPWRe", "W67cJSk2nuS", "W60tW4uaWPu", "EbtdLConFq", "gSkvwmkvW4m", "ESkjW5iXb8o0W4K", "WR9SsJPa", "W7FcI8kkkem", "W4vYW7/dJSot", "tSkMWOyxkq", "WRhdGhdcNmkU", "W4ddKwe", "kZdcNrNcUmkqWQhdIGldJ8kq", "BCkfzSooW74", "W7ldT8kLWQFdRq", "EqBdTSopzG", "WQmhW5SGjq", "WPmkFCkAEq", "WPz3wZbC"];
  return ni = function() {
    return i;
  }, ni();
}
function V(i, n, t, e, A) {
  return oA(t - -962, n);
}
function oA(i, n) {
  const t = ni();
  return oA = function(e, A) {
    e = e - 333;
    let o = t[e];
    if (oA.PTqICG === void 0) {
      var r = function(s) {
        const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, B, h = 0; B = s.charAt(h++); ~B && (u = d % 4 ? u * 64 + B : B, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          B = l.indexOf(B);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(s, l) {
        let C = [], E = 0, d, u = "";
        s = r(s);
        let B;
        for (B = 0; B < 256; B++)
          C[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + C[B] + l.charCodeAt(B % l.length)) % 256, d = C[B], C[B] = C[E], C[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < s.length; h++)
          B = (B + 1) % 256, E = (E + C[B]) % 256, d = C[B], C[B] = C[E], C[E] = d, u += String.fromCharCode(s.charCodeAt(h) ^ C[(C[B] + C[E]) % 256]);
        return u;
      };
      oA.dIHcej = Q, i = arguments, oA.PTqICG = !0;
    }
    const g = t[-1732 * -1 + 25 * 20 + -2232], a = e + g, I = i[a];
    return I ? o = I : (oA.fsmfpd === void 0 && (oA.fsmfpd = !0), o = oA.dIHcej(o, A), i[a] = o), o;
  }, oA(i, n);
}
var $g, AI, eI;
class Kl {
  constructor(n) {
    y(this, eI);
    y(this, AI, [UA(-437, -448, -394, "!K9L") + NA(671, "&Lan", 571) + "ic", xA(1082, 1080, 1146, "PD7O") + V(-659, "R(9r", -554) + "ic"]);
    y(this, $g);
    function t(e, A, o, r, g) {
      return oA(A - -296, e);
    }
    this[t("4brk", 284) + t("6wjk", 205) + "d"] = n;
  }
  async [(eI = UA(-625, -491, -525, "CXNI") + "se", AI = xA(1262, 1238, 1327, "i)($") + NA(604, "xPw$", 638) + xA(1187, 1212, 1255, "6wjk") + V(-402, "zq&C", -386), $g = z("w&b9", 34, -65, 12) + xA(1068, 1096, 1091, "3td#"), NA(694, "rLk8", 772))](n) {
    function t(a, I, Q, s, l) {
      return UA(a - 416, I - 495, I - 503, a);
    }
    function e(a, I, Q, s, l) {
      return z(Q, I - 416, Q - 288, s - 1013);
    }
    function A(a, I, Q, s, l) {
      return NA(a - 66, s, a - -861);
    }
    const o = await this[e(882, 902, "PD7O", 943) + e(891, 1037, "6wjk", 964) + t("2]uA", 101)](n);
    await Promise[e(808, 789, "muS2", 877) + A(-226, -348, -234, "!kuc")]([this[g(-576, -444, -440, "n#p[", -494) + r(-594, -643, -609, "R(9r", -546) + "d"][t("dlSO", 98)](n), this[r(-538, -493, -356, "4brk", -446) + g(-533, -424, -518, "gH9b", -461) + "e"](o)]);
    function r(a, I, Q, s, l) {
      return UA(a - 451, I - 123, l - 47, s);
    }
    function g(a, I, Q, s, l) {
      return z(s, I - 38, Q - 5, l - -373);
    }
    this[g(-494, -436, -522, "CXNI", -403) + e(1001, 961, "G#s$", 1023) + e(801, 760, "!K9L", 835)]();
  }
  async [UA(-430, -346, -385, "gsg7") + z("CXNI", 70, -70, -45) + "se"](n) {
    function t(g, a, I, Q, s) {
      return z(Q, a - 61, I - 243, g - 1054);
    }
    function e(g, a, I, Q, s) {
      return z(a, a - 20, I - 199, g - 867);
    }
    function A(g, a, I, Q, s) {
      return UA(g - 248, a - 347, g - 440, s);
    }
    function o(g, a, I, Q, s) {
      return NA(g - 263, I, g - -137);
    }
    function r(g, a, I, Q, s) {
      return z(I, a - 383, I - 194, Q - 1330);
    }
    try {
      if (o(594, 651, "G#s$", 715, 589) !== o(392, 395, "V#$h", 486, 498)) {
        const g = await fetch(n);
        if (!g.ok)
          if (o(420, 308, "zq&C", 322, 491) === e(824, "JUR4", 910, 767, 859)) {
            _0x401e4c[A(-151, -268, -247, -60, "N3oV")](o(423, 498, "KO4q", 448, 402) + t(1105, 1143, 1134, "znYQ", 1120) + e(699, "vZAL", 783, 655, 582) + t(1092, 1009, 1195, "CXNI", 1008) + o(584, 662, "i)J[", 664, 707)), this[A(-172, -137, -254, -178, "dlSO") + "se"] = void (3 * -571 + 1985 * 1 + -272);
            return;
          } else throw new Error(r(1255, 1381, "OJQl", 1363, 1379) + A(8, -29, 28, 0, "!kuc") + r(1182, 1185, "6wjk", 1172, 1133) + r(1296, 1180, "vZAL", 1258, 1132) + "d.");
        this[A(20, 91, -9, 16, "Emg2") + "se"] = await g[o(468, 504, "i)J[", 594, 479)]();
      } else throw new _0xb1cc78(e(878, "xPw$", 975, 997, 1004) + r(1352, 1271, "z$yy", 1313, 1300) + e(722, "2]uA", 666, 835, 752) + r(1172, 1124, "rDkV", 1130, 1181) + "d.");
    } catch (g) {
      t(1031, 1158, 1045, "z$yy") === t(1107, 1004, 1110, "N912") ? _0x134cf7[t(907, 984, 879, "gsg7") + "ch"]((a) => _0x4fd046[e(896, "J#Zu", 952)](a)) : (this[r(1165, 1142, "k18)", 1212) + "se"] = void 0, console[A(-131, -89, -156, -178, "KO4q")](g));
    }
  }
  async [z("Zitj", 33, 114, 32) + NA(621, "ut8p", 586) + "e"](n) {
    this[r(-369, -392, -260, -342, "CXNI") + e(-33, "gH9b", 105, 39)] = void 0;
    function t(g, a, I, Q, s) {
      return UA(g - 307, a - 178, Q - 1700, s);
    }
    function e(g, a, I, Q, s) {
      return V(g - 316, a, Q - 612);
    }
    function A(g, a, I, Q, s) {
      return V(g - 453, I, s - -6);
    }
    if (!n)
      if (e(121, "OJQl", 95, 211) === o(1287, 1203, 1124, "k18)", 1221)) _0x49ee75[o(1334, 1155, 1222, "Emg2", 1263)](_0x261e93);
      else {
        console[A(-653, -493, "z$yy", -437, -550)](A(-597, -521, "w&b9", -544, -489) + r(-353, -254, -349, -338, "zq&C") + t(952, 1069, 1195, 1072, "znYQ") + t(1020, 1126, 1047, 1138, "znYQ") + t(1264, 1216, 1178, 1227, "klQT")), this[e(131, "PD7O", 166, 202) + "se"] = void 0;
        return;
      }
    function o(g, a, I, Q, s) {
      return UA(g - 0, a - 102, s - 1745, Q);
    }
    function r(g, a, I, Q, s) {
      return z(s, a - 310, I - 135, g - -278);
    }
    await this[e(103, "OJQl", -12, 40) + r(-364, -398, -415, -406, "klQT") + "se"](n);
  }
  async [z("OJQl", -163, -83, -184) + xA(1126, 1226, 1333, "lOWe") + xA(1377, 1275, 1283, "!K9L")](n) {
    function t(I, Q, s, l, C) {
      return V(I - 109, C, I - 1147);
    }
    const e = await fetch("" + n + this[r(1080, 1146, 967, 1137, "i)($") + r(995, 924, 1016, 1083, "JUR4") + t(682, 685, 804, 632, "gH9b") + t(559, 602, 559, 530, "gsg7")][-1 * 4259 + -2092 * 2 + -8443 * -1]), A = e.ok ? -7664 + 7664 * 1 : 4943 * 2 + 172 * -12 + 33 * -237;
    function o(I, Q, s, l, C) {
      return NA(I - 293, s, Q - -337);
    }
    function r(I, Q, s, l, C) {
      return V(I - 6, C, I - 1524);
    }
    function g(I, Q, s, l, C) {
      return NA(I - 238, l, C - -693);
    }
    function a(I, Q, s, l, C) {
      return xA(I - 464, C - -108, s - 4, Q);
    }
    return "" + n + this[a(1044, "MsOk", 828, 932, 955) + a(976, "MsOk", 967, 901, 1026) + g(-56, 73, 102, "&0h8", -23) + o(284, 382, "nEe6")][A];
  }
  [V(-550, "1y2q", -608) + V(-629, "J#Zu", -600) + "s"](n) {
    function t(A, o, r, g, a) {
      return xA(A - 163, o - -698, r - 359, A);
    }
    function e(A, o, r, g, a) {
      return V(A - 370, a, A - 246);
    }
    n[t("!BN3", 507, 527) + "ch"]((A) => console[e(-131, -82, -111, -67, "gH9b")](A));
  }
  [xA(1263, 1175, 1220, "OJQl") + UA(-558, -396, -440, "*aJ4") + V(-555, "4brk", -540)](n) {
    function t(e, A, o, r, g) {
      return V(e - 298, g, e - 1193);
    }
    n[t(729, 690, 751, 777, "J#Zu") + "ch"]((e) => console[t(654, 713, 768, 747, "gWtF")](e));
  }
  [xA(1393, 1279, 1384, "PD7O") + z("OJQl", -14, 35, -76)]() {
    function n(A, o, r, g, a) {
      return xA(A - 193, a - -949, r - 178, A);
    }
    function t(A, o, r, g, a) {
      return V(A - 392, A, g - 1203);
    }
    function e(A, o, r, g, a) {
      return UA(A - 14, o - 305, A - 1036, o);
    }
    return window[t("i)J[", 535, 584, 654) + t("2]uA", 605, 660, 706)][n("Zitj", 216, 265, 252, 217) + e(570, "V#$h")];
  }
  [NA(659, "y96^", 576) + z("N912", -213, -47, -139) + UA(-487, -680, -563, "muS2")]() {
    function n(r, g, a, I, Q) {
      return V(r - 284, r, I - 1025);
    }
    function t(r, g, a, I, Q) {
      return z(r, g - 306, a - 134, I - -350);
    }
    function e(r, g, a, I, Q) {
      return NA(r - 375, Q, g - -773);
    }
    function A(r, g, a, I, Q) {
      return z(I, g - 167, a - 464, Q - 764);
    }
    function o(r, g, a, I, Q) {
      return z(g, g - 320, a - 367, I - 1256);
    }
    try {
      if (o(1058, "xPw$", 1092, 1172, 1251) !== t("&Lan", -390, -364, -406, -373)) throw new _0x47a88d(t("gsg7", -411, -346, -457, -412) + e(-323, -198, -138, -88, "gWtF") + t("dlSO", -543, -559, -455, -381) + t("gsg7", -493, -374, -371, -429) + ".");
      if (!this[e(-32, 3, -106, -69, "ut8p") + "se"]) {
        if (n("n#p[", 303, 494, 408, 497) !== o(1185, "gWtF", 1306, 1198, 1164)) throw new Xi(e(77, -29, -157, -2, "!K9L") + e(-205, -93, -80, -188, "klQT") + e(-265, -184, -265, -107, "V#$h") + A(852, 636, 667, "Zitj", 751) + ".");
        {
          _0x4318b7 instanceof _0x29b4a6 ? _0x55ebe7[e(-92, -173, -94, -119, "ut8p")]() : _0x50a1a9 instanceof _0x309cce && _0x499f79[A(582, 643, 656, "G#s$", 658)](_0x4d6055);
          const r = {};
          r[n("y96^", 709, 541, 597, 499) + n("k18)", 525, 361, 470, 590)] = !1, r[e(-155, -239, -155, -200, "OJQl") + "s"] = [], r[e(-284, -195, -196, -234, "6wjk") + t("vZAL", -392, -519, -496, -584)] = [], r[t("1y2q", -387, -431, -433, -472) + e(-232, -144, -170, -113, "Or9s") + e(-227, -150, -123, -127, "rLk8")] = void (4424 * 1 + 7083 * 1 + 1 * -11507), r[n("MsOk", 442, 606, 502, 423)] = function() {
          }, r[t("OJQl", -438, -293, -384, -366) + A(851, 671, 767, "!kuc", 778)] = "", this[n("V#$h", 404, 525, 466, 500) + n("N912", 552, 616, 614, 586)] = new _0x413c7d(r);
        }
      }
      if (!this[e(-133, -106, -154, -110, "J#Zu") + A(672, 733, 539, "!kuc", 650) + "d"][o(1292, "N912", 1205, 1262, 1379) + n("!BN3", 427, 352, 422, 296) + n("5I2r", 591, 425, 550, 436) + "ed"]()) {
        if (A(605, 476, 589, "3td#", 595) === n("vZAL", 589, 723, 616, 691)) throw new Xi(n("J#Zu", 624, 582, 601, 523) + n("1y2q", 525, 428, 487, 458) + e(-176, -139, -22, -30, "CXNI") + A(571, 510, 644, "i)J[", 636) + ".");
        this[o(968, "&Lan", 987, 1062, 954) + "se"] = void (8147 + 1986 * -2 + -4175), _0x56e847[n("Emg2", 551, 583, 543, 667)](_0xbcd86a);
      }
      this[e(-37, -60, 67, -102, "OJQl") + e(-85, -147, -98, -141, "6wjk")] = new Kg(Ol(this[t("n#p[", -411, -313, -350, -367) + "se"], this[n("muS2", 546, 528, 436, 516) + A(875, 736, 725, "gsg7", 795)]())), this[e(17, -64, 0, -26, "klQT") + e(51, -25, -80, -73, "Emg2") + "s"](this[A(685, 664, 636, "xPw$", 611) + n("V#$h", 642, 609, 594, 491)][A(572, 699, 487, "N3oV", 587) + "s"]), this[A(700, 481, 537, "muS2", 588) + n("Emg2", 561, 565, 537, 411) + A(584, 603, 548, "V#$h", 661)](this[t("vZAL", -512, -486, -429, -442) + n("2]uA", 337, 371, 407, 443)][t("&Lan", -375, -455, -343, -315) + n("&0h8", 434, 456, 435, 453)]);
    } catch (r) {
      if (n("V#$h", 446, 592, 525) === e(-287, -201, -174, -174, "rLk8")) {
        if (r instanceof Xi) {
          if (o(1071, "5I2r", 1192, 1175) !== t("&0h8", -380, -386, -474)) return null;
          r[t("&Lan", -462, -380, -490)]();
        } else if (r instanceof Error) {
          if (t("ut8p", -470, -263, -354) === e(-168, -71, 24, 48, "3td#")) return _0x50b796[t("1k*q", -422, -369, -313)](this[t("1y2q", -255, -367, -362) + "se"]);
          console[t("rDkV", -443, -277, -355)](r);
        }
        const g = {};
        g[o(1254, "klQT", 1144, 1148) + t("3td#", -454, -253, -374)] = !1, g[t("zq&C", -338, -326, -308) + "s"] = [], g[A(582, 667, 571, "gWtF", 651) + A(589, 579, 730, "&0h8", 603)] = [], g[n("PD7O", 286, 374, 405) + A(773, 883, 692, "klQT", 800) + o(1302, "gWtF", 1068, 1183)] = void 0, g[A(654, 802, 886, "KO4q", 763)] = function() {
        }, g[A(672, 645, 700, "zq&C", 614) + o(1384, "y96^", 1292, 1259)] = "", this[o(1019, "G#s$", 1140, 1074) + o(1049, "muS2", 1184, 1157)] = new Kg(g);
      } else throw new _0x905426(e(-342, -233, -238, -337, "dlSO") + t("!BN3", -353, -454, -388) + o(1237, "muS2", 1338, 1269) + t("!K9L", -472, -494, -485) + ".");
    }
  }
  [NA(764, "!kuc", 752) + xA(1079, 1188, 1074, "rDkV") + NA(715, "4brk", 688) + "t"]() {
    function n(e, A, o, r, g) {
      return xA(e - 22, o - -1144, o - 370, A);
    }
    function t(e, A, o, r, g) {
      return UA(e - 79, A - 493, e - 448, A);
    }
    return this[n(-153, "JUR4", -56) + t(-161, "1k*q")];
  }
  [NA(738, "OJQl", 611) + V(-492, "*aJ4", -457) + "se"]() {
    var r, g;
    function n(a, I, Q, s, l) {
      return V(a - 318, l, a - 1443);
    }
    function t(a, I, Q, s, l) {
      return NA(a - 40, a, s - -1129);
    }
    function e(a, I, Q, s, l) {
      return xA(a - 51, Q - -381, Q - 146, s);
    }
    if (!this[o(-79, 8, 6, -53, "&0h8") + "se"]) {
      if (t("nEe6", -423, -600, -482) === A(-207, -405, -371, -284, "G#s$")) return null;
      {
        const a = this[A(-473, -480, -475, -379, "gWtF") + e(959, 796, 832, "xPw$") + "se"]();
        return ((r = a == null ? void 0 : a[A(-274, -253, -247, -243, "z$yy") + t("muS2", -474, -579, -534)]) == null ? void 0 : r[n(829, 807, 748, 815, "Emg2")]) || [];
      }
    }
    function A(a, I, Q, s, l) {
      return z(l, I - 273, Q - 420, s - -277);
    }
    function o(a, I, Q, s, l) {
      return xA(a - 53, a - -1313, Q - 156, l);
    }
    try {
      if (o(-21, 50, 62, -57, "k18)") === n(851, 741, 845, 825, "gH9b")) _0x17ef06[o(-235, -182, -336, -363, "&Lan") + "ch"]((a) => _0x3adfb1[e(619, 562, 677, "gWtF", 701)](a));
      else return JSON[e(671, 838, 790, "muS2", 786)](this[e(894, 1035, 920, "KO4q", 989) + "se"]);
    } catch (a) {
      if (o(-122, -242, -247, -240, "!BN3") === t("zq&C", -500, -549, -469)) {
        const I = this[o(-142, -174, -26, -103, "muS2") + o(-134, -26, -152, -246, "dlSO") + "se"]();
        return (g = I == null ? void 0 : I[e(752, 766, 839, "muS2") + n(818, 894, 828, 756, "4brk")]) == null ? void 0 : g[t("y96^", -702, -575, -588) + e(844, 856, 926, "klQT")];
      } else {
        if (a instanceof Error) {
          if (t("5I2r", -600, -592, -487) === o(-214, -122, -333, -151, "1y2q")) return this[o(-139, -266, -75, -155, "vZAL") + n(1030, 964, 1037, 1090, "4brk")];
          D[n(994, 1006, 1073, 918, "vZAL") + n(1054, 1139, 983, 1111, "3td#")](a);
        }
        return null;
      }
    }
  }
  [V(-290, "Emg2", -406) + z("y96^", 31, 69, 2)]() {
    var o;
    const n = this[t(480, 467, 484, "muS2") + A(282, "Emg2", 181) + "se"]();
    function t(r, g, a, I, Q) {
      return V(r - 197, I, r - 991);
    }
    function e(r, g, a, I, Q) {
      return z(I, g - 469, a - 340, a - -150);
    }
    function A(r, g, a, I, Q) {
      return V(r - 498, g, a - 632);
    }
    return ((o = n == null ? void 0 : n[t(439, 444, 553, "nEe6") + e(-224, -148, -179, "z$yy")]) == null ? void 0 : o[A(60, "gsg7", 86)]) || [];
  }
  [UA(-620, -658, -621, "Emg2") + V(-378, "z$yy", -438) + z("!BN3", -121, 86, -31)]() {
    var r;
    function n(g, a, I, Q, s) {
      return z(g, a - 264, I - 19, s - 1191);
    }
    function t(g, a, I, Q, s) {
      return V(g - 476, s, Q - 1603);
    }
    function e(g, a, I, Q, s) {
      return V(g - 226, g, s - 1521);
    }
    const A = this[o(299, 253, 415, "lOWe") + e("Zitj", 912, 868, 1030, 920) + "se"]();
    function o(g, a, I, Q, s) {
      return xA(g - 107, g - -891, I - 460, Q);
    }
    return (r = A == null ? void 0 : A[t(1069, 1110, 1092, 1141, "muS2") + n("!K9L", 1178, 1045, 1150, 1139)]) == null ? void 0 : r[n("klQT", 1129, 926, 1076, 1043) + n("y96^", 1255, 1136, 1116, 1194)];
  }
}
const ai = class ai extends Kl {
  static getInstance() {
    if (!this._instance) {
      const n = new Hl();
      this._instance = new ai(n);
    }
    return this._instance;
  }
};
y(ai, "_instance");
let Hr = ai;
function jl({ cameraOptions: i }) {
  return i ? /* @__PURE__ */ w(yC, { target: i.styleTarget, children: /* @__PURE__ */ w(
    hB,
    {
      assetsDirectoryPath: i.assetsDirectoryPath,
      bramble: Hr.getInstance(),
      children: /* @__PURE__ */ w(
        kB,
        {
          transactionCountingToken: i.transactionCountingToken,
          transactionType: _e.PALM,
          children: /* @__PURE__ */ w(
            SB,
            {
              value: Sl({
                onError: i.onError
              }),
              children: /* @__PURE__ */ w(
                LB,
                {
                  analytics: Ml,
                  apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt",
                  countlyAppKey: "1f291301e6e7324d4117ed61b278a43a7771557d",
                  children: /* @__PURE__ */ w(ps, { children: /* @__PURE__ */ w(
                    bl,
                    {
                      cameraFacing: i.cameraFacing,
                      isVideoCaptureEnabled: i.isVideoCaptureEnabled,
                      children: /* @__PURE__ */ w(Dl, { ...i })
                    }
                  ) })
                }
              )
            }
          )
        }
      )
    }
  ) }) : null;
}
Oc(jl, "x-dot-palm-capture", ["cameraOptions"]);
