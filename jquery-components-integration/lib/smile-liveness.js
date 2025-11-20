var fc = Object.defineProperty;
var eg = (i) => {
  throw TypeError(i);
};
var hc = (i, n, t) => n in i ? fc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var y = (i, n, t) => hc(i, typeof n != "symbol" ? n + "" : n, t), tg = (i, n, t) => n.has(i) || eg("Cannot " + t);
var w = (i, n, t) => (tg(i, n, "read from private field"), t ? t.call(i) : n.get(i)), M = (i, n, t) => n.has(i) ? eg("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), F = (i, n, t, e) => (tg(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var en, W, Ts, Ps, rt, og, Hs, Ks, js, wa, yr, mr, _s, bo = {}, qs = [], pc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tn = Array.isArray;
function xe(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Da(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function FA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 4285 + -2 * 4674 + -1013 * -5 && (r.children = arguments.length > 3 ? en.call(arguments, -262 * -34 + 9032 + -17938) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return ho(i, r, e, A, null);
}
function ho(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++Ts, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && W.vnode != null && W.vnode(r), r;
}
function yc() {
  var i = {};
  return i.current = null, i;
}
function Ae(i) {
  return i.children;
}
function $A(i, n) {
  this.props = i, this.context = n;
}
function Ht(i, n) {
  if (n == null) return i.__ ? Ht(i.__, i.__i + (87 * -26 + 554 * -14 + 10019)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Ht(i) : null;
}
function Vs(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -5015 + -97 * 6 + -193 * -29; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Vs(i);
  }
}
function wr(i) {
  (!i.__d && (i.__d = !0) && rt.push(i) && !Pn.__r++ || og != W.debounceRendering) && ((og = W.debounceRendering) || Hs)(Pn);
}
function Pn() {
  for (var i, n, t, e, A, o, r, a = -4540 + -1 * 269 + 4810; rt.length; ) rt.length > a && rt.sort(Ks), i = rt.shift(), a = rt.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = xe({}, e)).__v = e.__v + (-8854 * 1 + 80 * 9 + 5 * 1627), W.vnode && W.vnode(t), ba(n.__P, t, e, n.__n, n.__P.namespaceURI, -7971 + -3 * 1861 + 13586 & e.__u ? [A] : null, o, A ?? Ht(e), !!(5998 + -19 * 73 + -241 * 19 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Xs(o, t, r), t.__e != A && Vs(t)));
  Pn.__r = 6025 + -1205 * 5;
}
function Zs(i, n, t, e, A, o, r, a, g, s, C) {
  var I, E, B, l, d, x, Q = e && e.__k || qs, f = n.length;
  for (g = mc(t, n, Q, g, f), I = -15288 + -12 * -1274; I < f; I++) (B = t.__k[I]) != null && (E = B.__i == -1 ? bo : Q[B.__i] || bo, B.__i = I, x = ba(i, B, E, A, o, r, a, g, s, C), l = B.__e, B.ref && E.ref != B.ref && (E.ref && ka(E.ref, null, B), C.push(B.ref, B.__c || l, B)), d == null && l != null && (d = l), -629 + 1 * 3462 + -2829 & B.__u || E.__k === B.__k ? g = zs(B, g, i) : typeof B.type == "function" && x !== void 0 ? g = x : l && (g = l.nextSibling), B.__u &= -7);
  return t.__e = d, g;
}
function mc(i, n, t, e, A) {
  var o, r, a, g, s, C = t.length, I = C, E = -9542 + -4001 * 1 + 13543;
  for (i.__k = new Array(A), o = 920 * -6 + 407 + 1 * 5113; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (g = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? ho(null, r, null, null, null) : tn(r) ? ho(Ae, { children: r }, null, null, null) : r.constructor == null && r.__b > 0 ? ho(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (-309 * 11 + 4172 + -386 * 2), a = null, (s = r.__i = wc(r, t, g, I)) != -1 && (I--, (a = t[s]) && (a.__u |= -14161 + 14163 * 1)), a == null || a.__v == null ? (s == -1 && (A > C ? E-- : A < C && E++), typeof r.type != "function" && (r.__u |= -7127 + 2377 * 3)) : s != g && (s == g - (-41 * -227 + 9190 + -9248 * 2) ? E-- : s == g + (8496 + 8495 * -1) ? E++ : (s > g ? E-- : E++, r.__u |= -1 * 227 + 3 * 1938 + -5583))) : i.__k[o] = null;
  if (I)
    for (o = -17 * -523 + -1 * -9773 + -18664; o < C; o++) (a = t[o]) != null && -6216 + 3682 * -1 + 9898 == (104 * -6 + -907 + 511 * 3 & a.__u) && (a.__e == e && (e = Ht(a)), AI(a, a));
  return e;
}
function zs(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 49 * -18 + 9569 + -8687; e && A < e.length; A++) e[A] && (e[A].__ = i, n = zs(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Ht(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -646 + -8254 * -1 + -7600 == n.nodeType);
  return n;
}
function Re(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (tn(i) ? i.some(function(t) {
    Re(t, n);
  }) : n.push(i)), n;
}
function wc(i, n, t, e) {
  var A, o, r = i.key, a = i.type, g = n[t];
  if (g === null && i.key == null || g && r == g.key && a == g.type && -1509 * 1 + 4728 + -1 * 3219 == (8097 + -1 * -3281 + -5688 * 2 & g.__u)) return t;
  if (e > (g != null && -7942 + -5348 * 1 + 13290 == (2 & g.__u) ? -846 * 1 + 8489 + -7642 * 1 : -193 * 16 + -452 + 10 * 354)) for (A = t - 1, o = t + (3941 * 1 + 187 * -51 + 5597); A >= -6397 + -6397 * -1 || o < n.length; ) {
    if (A >= -1 * 3631 + 824 * -2 + -5279 * -1) {
      if ((g = n[A]) && -2343 + -213 * -11 == (-2623 + 706 * -14 + 12509 & g.__u) && r == g.key && a == g.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((g = n[o]) && -3242 + 2 * 1621 == (-1249 * 6 + 6155 + -1 * -1341 & g.__u) && r == g.key && a == g.type) return o;
      o++;
    }
  }
  return -1;
}
function ng(i, n, t) {
  n[-1 * 3660 + -362 * 6 + -972 * -6] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || pc.test(n) ? t : t + "px";
}
function In(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || ng(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || ng(i.style, n, t[n]);
    }
  else if (n[-2589 * 2 + -8646 + 512 * 27] == "o" && n[-3329 * -1 + 9265 + -49 * 257] == "n") o = n != (n = n.replace(js, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(-1 * 7333 + -2 * 2815 + -5 * -2593) : n.slice(2 * -1829 + 3 * 658 + 1686), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = wa, i.addEventListener(n, o ? mr : yr, o)) : i.removeEventListener(n, o ? mr : yr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[1 * 8489 + -8736 + 251] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -5371 + 673 * -9 + 11429 == t ? "" : t));
  }
}
function ig(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = wa++;
      else if (n.t < t.u) return;
      return t(W.event ? W.event(n) : n);
    }
  };
}
function ba(i, n, t, e, A, o, r, a, g, s) {
  var C, I, E, B, l, d, x, Q, f, p, m, G, S, D, P, Z, kA, EA = n.type;
  if (n.constructor != null) return null;
  2 * -2267 + -6742 + 2851 * 4 & t.__u && (g = !!(792 + -3 * -1117 + -1 * 4111 & t.__u), o = [a = n.__e = t.__e]), (C = W.__b) && C(n);
  A: if (typeof EA == "function") try {
    if (Q = n.props, f = "prototype" in EA && EA.prototype.render, p = (C = EA.contextType) && e[C.__c], m = C ? p ? p.props.value : C.__ : e, t.__c ? x = (I = n.__c = t.__c).__ = I.__E : (f ? n.__c = I = new EA(Q, m) : (n.__c = I = new $A(Q, m), I.constructor = EA, I.render = bc), p && p.sub(I), I.props = Q, I.state || (I.state = {}), I.context = m, I.__n = e, E = I.__d = !(446 * 7 + 484 + 3606 * -1), I.__h = [], I._sb = []), f && I.__s == null && (I.__s = I.state), f && EA.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = xe({}, I.__s)), xe(I.__s, EA.getDerivedStateFromProps(Q, I.__s))), B = I.props, l = I.state, I.__v = n, E) f && EA.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), f && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (f && EA.getDerivedStateFromProps == null && Q !== B && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, m), !I.__e && I.shouldComponentUpdate != null && !(1567 * -4 + 1898 + -31 * -141) === I.shouldComponentUpdate(Q, I.__s, m) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(10634 + 1 * -10633)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(fA) {
          fA && (fA.__ = n);
        }), G = -302 * -4 + 2956 + 6 * -694; G < I._sb.length; G++) I.__h.push(I._sb[G]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, m), f && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(B, l, d);
      });
    }
    if (I.context = m, I.props = Q, I.__P = i, I.__e = !(18 * -487 + 1 * -398 + 3055 * 3), S = W.__r, D = 0, f) {
      for (I.state = I.__s, I.__d = !(2829 + -1 * 2828), S && S(n), C = I.render(I.props, I.state, I.context), P = -8566 * 1 + 751 * 3 + 59 * 107; P < I._sb.length; P++) I.__h.push(I._sb[P]);
      I._sb = [];
    } else do
      I.__d = !(-1456 * -2 + -2548 + 33 * -11), S && S(n), C = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++D < -7991 + -339 * -9 + 4965);
    I.state = I.__s, I.getChildContext != null && (e = xe(xe({}, e), I.getChildContext())), f && !E && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(B, l)), Z = C, C != null && C.type === Ae && C.key == null && (Z = $s(C.props.children)), a = Zs(i, tn(Z) ? Z : [Z], n, t, e, A, o, r, a, g, s), I.base = n.__e, n.__u &= -161, I.__h.length && r.push(I), x && (I.__E = I.__ = null);
  } catch (fA) {
    if (n.__v = null, g || o != null)
      if (fA.then) {
        for (n.__u |= g ? -3489 * -2 + 1 * -9285 + 2467 * 1 : 128; a && 2112 + 4 * -526 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else
        for (kA = o.length; kA--; ) Da(o[kA]);
    else n.__e = t.__e, n.__k = t.__k;
    W.__e(fA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = Dc(t.__e, n, t, e, A, o, r, g, s);
  return (C = W.diffed) && C(n), -1 * -6931 + 5303 + 6053 * -2 & n.__u ? void 0 : a;
}
function Xs(i, n, t) {
  for (var e = -1 * -4163 + 1 * -7527 + 3364; e < t.length; e++) ka(t[e], t[++e], t[++e]);
  W.__c && W.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      W.__e(o, A.__v);
    }
  });
}
function $s(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 242 * -29 + 582 + -4 * -1609 ? i : tn(i) ? i.map($s) : xe({}, i);
}
function Dc(i, n, t, e, A, o, r, a, g) {
  var s, C, I, E, B, l, d, x = t.props, Q = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 0; s < o.length; s++) if ((B = o[s]) && "setAttribute" in B == !!f && (f ? B.localName == f : -71 * 124 + -112 + 8919 == B.nodeType)) {
      i = B, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(Q);
    i = document.createElementNS(A, f, Q.is && Q), a && (W.__m && W.__m(n, o), a = !1), o = null;
  }
  if (f == null) x === Q || a && i.data == Q || (i.data = Q);
  else {
    if (o = o && en.call(i.childNodes), x = t.props || bo, !a && o != null)
      for (x = {}, s = -12 * 95 + 4 * -1485 + 7080; s < i.attributes.length; s++) x[(B = i.attributes[s]).name] = B.value;
    for (s in x) if (B = x[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = B;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        In(i, s, null, B, A);
      }
    }
    for (s in Q) B = Q[s], s == "children" ? E = B : s == "dangerouslySetInnerHTML" ? C = B : s == "value" ? l = B : s == "checked" ? d = B : a && typeof B != "function" || x[s] === B || In(i, s, B, x[s], A);
    if (C) a || I && (C.__html == I.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), Zs(n.type == "template" ? i.content : i, tn(E) ? E : [E], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[5291 + 3926 * 1 + -709 * 13] : t.__k && Ht(t, -151 * -7 + -16 * 58 + -129), a, g), o != null)
      for (s = o.length; s--; ) Da(o[s]);
    a || (s = "value", f == "progress" && l == null ? i.removeAttribute("value") : l != null && (l !== i[s] || f == "progress" && !l || f == "option" && l != x[s]) && In(i, s, l, x[s], A), s = "checked", d != null && d != i[s] && In(i, s, d, x[s], A));
  }
  return i;
}
function ka(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    W.__e(A, t);
  }
}
function AI(i, n, t) {
  var e, A;
  if (W.unmount && W.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || ka(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      W.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -2259 * -2 + 3548 * -1 + -970; A < e.length; A++) e[A] && AI(e[A], n, t || typeof i.type != "function");
  t || Da(i.__e), i.__c = i.__ = i.__e = void 0;
}
function bc(i, n, t) {
  return this.constructor(i, t);
}
function Ke(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), W.__ && W.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], ba(n, i = (!e && t || n).__k = FA(Ae, null, [i]), A || bo, bo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? en.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Xs(o, i, r);
}
function Sa(i, n) {
  Ke(i, n, Sa);
}
function Ga(i, n, t) {
  var e, A, o, r, a = xe({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > -1 * -1 + -97 * -91 + 3 * -2942 && (a.children = arguments.length > 1 * 2954 + 1 * 1667 + -4618 ? en.call(arguments, -5374 + 1 * -4390 + 9766) : t), ho(i.type, a, e || i.key, A || i.ref, null);
}
function qe(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, wr(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + _s++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
en = qs.slice, W = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, Ts = 5 * 275 + -173 * -38 + -1 * 7949, Ps = function(i) {
  return i != null && i.constructor == null;
}, $A.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = xe({}, this.state), typeof i == "function" && (i = i(xe({}, t), this.props)), i && xe(t, i), i != null && this.__v && (n && this._sb.push(n), wr(this));
}, $A.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), wr(this));
}, $A.prototype.render = Ae, rt = [], Hs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ks = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Pn.__r = 4920 + -51 * -177 + 3 * -4649, js = /(PointerCapture)$|Capture$/i, wa = -5392 + 1 * 6949 + -1 * 1557, yr = ig(!1), mr = ig(!0), _s = 0;
function Na() {
  return (Na = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -15624 + -3125 * -5; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var kc = ["context", "children"];
function Sc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, a = {}, g = Object.keys(e);
    for (r = 509 * -5 + 869 + -4 * -419; r < g.length; r++) A.indexOf(o = g[r]) >= 2034 * 4 + -2874 * -2 + -13884 || (a[o] = e[o]);
    return a;
  }(i, kc);
  return Ga(n, t);
}
function Gc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = FA(Sc, Na({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (-2 * 3434 + 5556 + 263 * 5 === e.nodeType) return e.data;
    if (2609 * 1 + 3527 + -6135 !== e.nodeType) return null;
    var o = [], r = {}, a = -1652 + 107 * 16 + -60, g = e.attributes, s = e.childNodes;
    for (a = g.length; a--; ) g[a].name !== "slot" && (r[g[a].name] = g[a].value, r[eI(g[a].name)] = g[a].value);
    for (a = s.length; a--; ) {
      var C = t(s[a], null), I = s[a].slot;
      I ? r[I] = FA(rg, { name: I }, C) : o[a] = C;
    }
    var E = A ? FA(rg, null, o) : o;
    return FA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Sa : Ke)(this._vdom, this._root);
}
function eI(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Nc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[eI(i)] = t, this._vdom = Ga(this._vdom, e), Ke(this._vdom, this._root);
  }
}
function Rc() {
  Ke(this._vdom = null, this._root);
}
function rg(i, n) {
  var t = this;
  return FA("slot", Na({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Fc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Gc, A.prototype.attributeChangedCallback = Nc, A.prototype.disconnectedCallback = Rc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var vc = -196 + -15 * -238 + -3374;
function k(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var s = {};
  s.type = i, s.props = g, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --vc, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var C = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return W.vnode && W.vnode(C), C;
}
var LA = function() {
  return LA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, LA.apply(this, arguments);
};
function Kt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function Mc(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var Wc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lc = Mc(function(i) {
  return Wc.test(i) || i.charCodeAt(-2691 + 207 * 13) === -37 * -118 + 412 * -11 + 1 * 277 && i.charCodeAt(4059 + -5950 * 1 + 1892) === 110 && i.charCodeAt(-2212 * -4 + -4396 * -1 + 2207 * -6) < 91;
}), je, K, _i, ag, jt = -15309 + -729 * -21, tI = [], j = W, gg = j.__b, sg = j.__r, Ig = j.diffed, cg = j.__c, Cg = j.unmount, Bg = j.__;
function $t(i, n) {
  j.__h && j.__h(K, i, jt || n), jt = 535 * 7 + -8592 + 4847;
  var t = {};
  t.__ = [], t.__h = [];
  var e = K.__H || (K.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function $(i) {
  return jt = 7162 + 1 * -7282 + 121, Ra(iI, i);
}
function Ra(i, n, t) {
  var e = $t(je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : iI(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], s = e.t(g, a);
    g !== s && (e.__N = [s, e.__[1]], e.__c.setState({}));
  }], e.__c = K, !K.__f)) {
    var A = function(a, g, s) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (C.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, a, g, s);
      var I = e.__c.props !== a;
      return C.forEach(function(E) {
        if (E.__N) {
          var B = E.__[0];
          E.__ = E.__N, E.__N = void 0, B !== E.__[0] && (I = !0);
        }
      }), o && o.call(this, a, g, s) || I;
    };
    K.__f = !0;
    var o = K.shouldComponentUpdate, r = K.componentWillUpdate;
    K.componentWillUpdate = function(a, g, s) {
      if (this.__e) {
        var C = o;
        o = void 0, A(a, g, s), o = C;
      }
      r && r.call(this, a, g, s);
    }, K.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function J(i, n) {
  var t = $t(je++, 3);
  !j.__s && Fa(t.__H, n) && (t.__ = i, t.u = n, K.__H.__h.push(t));
}
function Ao(i, n) {
  var t = $t(je++, 4);
  !j.__s && Fa(t.__H, n) && (t.__ = i, t.u = n, K.__h.push(t));
}
function AA(i) {
  return jt = -1 * 1585 + -6 * 387 + 3912, QA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function oI(i, n, t) {
  jt = -7 * 1215 + 853 + 7658, Ao(function() {
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
function QA(i, n) {
  var t = $t(je++, 7);
  return Fa(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function OA(i, n) {
  return jt = -9543 + 4108 * -2 + 17767, QA(function() {
    return i;
  }, n);
}
function fe(i) {
  var n = K.context[i.__c], t = $t(je++, 8547 * 1 + -5591 + 421 * -7);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(K)), n.props.value) : i.__;
}
function Hn(i, n) {
  j.useDebugValue && j.useDebugValue(n ? n(i) : i);
}
function nI() {
  var i = $t(je++, 11);
  if (!i.__) {
    for (var n = K.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [1 * 2467 + -3719 * 1 + 1252, 53 * -69 + 1 * -4093 + 7750]);
    i.__ = "P" + t[5802 + -583 * -1 + 1 * -6385] + "-" + t[2210 + 1 * -6653 + 11 * 404]++;
  }
  return i.__;
}
function Oc() {
  for (var i; i = tI.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(mn), i.__H.__h.forEach(Dr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], j.__e(n, i.__v);
  }
}
j.__b = function(i) {
  K = null, gg && gg(i);
}, j.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Bg && Bg(i, n);
}, j.__r = function(i) {
  sg && sg(i), je = 5621 + -40 * 150 + 379;
  var n = (K = i.__c).__H;
  n && (_i === K ? (n.__h = [], K.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(mn), n.__h.forEach(Dr), n.__h = [], je = 1 * -6113 + 9626 * -1 + 1 * 15739)), _i = K;
}, j.diffed = function(i) {
  Ig && Ig(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-5 * 451 + 6350 + 23 * -178 !== tI.push(n) && ag === j.requestAnimationFrame || ((ag = j.requestAnimationFrame) || Jc)(Oc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), _i = K = null;
}, j.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(mn), t.__h = t.__h.filter(function(e) {
        return !e.__ || Dr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], j.__e(e, t.__v);
    }
  }), cg && cg(i, n);
}, j.unmount = function(i) {
  Cg && Cg(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      mn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && j.__e(n, t.__v));
};
var Qg = typeof requestAnimationFrame == "function";
function Jc(i) {
  var n, t = function() {
    clearTimeout(e), Qg && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Qg && (n = requestAnimationFrame(t));
}
function mn(i) {
  var n = K, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), K = n;
}
function Dr(i) {
  var n = K;
  i.__c = i.__(), K = n;
}
function Fa(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function iI(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function rI(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function br(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function aI(i, n) {
  var t = n(), e = $({ t: { __: t, u: n } }), A = e[-57 * 75 + -9825 + 2350 * 6].t, o = e[3227 + -2 * 1613];
  return Ao(function() {
    A.__ = t, A.u = n, qi(A) && o({ t: A });
  }, [i, t, n]), J(function() {
    return qi(A) && o({ t: A }), i(function() {
      qi(A) && o({ t: A });
    });
  }, [i]), t;
}
function qi(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (43 * 85 + 3414 * -2 + 167 * 19 !== n || 1 / n == (8378 + -1 * -853 + -9230) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function gI(i) {
  i();
}
function sI(i) {
  return i;
}
function II() {
  return [!1, gI];
}
var cI = Ao;
function kr(i, n) {
  this.props = i, this.context = n;
}
function Uc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : br(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, FA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(kr.prototype = new $A()).isPureReactComponent = !0, kr.prototype.shouldComponentUpdate = function(i, n) {
  return br(this.props, i) || br(this.state, n);
};
var Eg = W.__b;
W.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Eg && Eg(i);
};
var Yc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -600 + -474 * -21 + -5443;
function CI(i) {
  function n(t) {
    var e = rI({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Yc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var lg = function(i, n) {
  return i == null ? null : Re(Re(i).map(n));
}, Tc = { map: lg, forEach: lg, count: function(i) {
  return i ? Re(i).length : 1759 + -1 * 6865 + -851 * -6;
}, only: function(i) {
  var n = Re(i);
  if (554 * 6 + 1918 + -5241 !== n.length) throw "Children.only";
  return n[171 * 3 + 8699 + -9212];
}, toArray: Re }, Pc = W.__e;
W.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  Pc(i, n, t, e);
};
var dg = W.unmount;
function BI(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = rI({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return BI(e, n, t);
  })), i;
}
function QI(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return QI(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function wn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function EI(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Hc(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return FA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function Bo() {
  this.i = null, this.l = null;
}
W.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 30 * 6 + -2125 + 1977 & i.__u && (i.type = null), dg && dg(i);
}, (wn.prototype = new $A()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = EI(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[-9355 * -1 + 1073 + -10428] = QI(g, g.__c.__P, g.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || -1 * -9959 + -5605 + -4322 * 1 & n.__u || e.setState({ __a: e.__b = e.__v.__k[4207 * -1 + -5275 + 9482] }), i.then(r, r);
}, wn.prototype.componentWillUnmount = function() {
  this.o = [];
}, wn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-50 * 185 + 3001 * -1 + -1 * -12251].__c;
      this.__v.__k[-1193 * 6 + -2223 + 53 * 177] = BI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && FA(Ae, null, i.fallback);
  return A && (A.__u &= -33), [FA(Ae, null, n.__a ? null : i.children), A];
};
var xg = function(i, n, t) {
  if (++t[-551 * 9 + -11 * -600 + -82 * 20] === t[-4406 + 5995 * -1 + 10401] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[1 * -4037 + 4 * -172 + 9 * 525] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[-1142 * 3 + -2147 + 5574] < t[4669 + -801 * 7 + -469 * -2]) break;
    i.i = t = t[5105 + 1 * -3023 + 10 * -208];
  }
};
function Kc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function jc(i) {
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
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -3 * 2845 + 7384 + 1 * 1152, -1 * 7247 + 1011 * -9 + 16347), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Ke(FA(Kc, o, i.__v), n.v);
}
function _c(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = FA(jc, t);
  return e.containerInfo = n, e;
}
(Bo.prototype = new $A()).__a = function(i) {
  var n = this, t = EI(n.__v), e = n.l.get(i);
  return e[2 * -1877 + 9054 + -5300]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), xg(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Bo.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Re(i.children);
  i.revealOrder && i.revealOrder[-6249 + -3 * 2812 + 14685] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [4350 + 1 * -4349, 4278 * -2 + 1 * 7395 + -9 * -129, this.i]);
  return i.children;
}, Bo.prototype.componentDidUpdate = Bo.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    xg(i, t, n);
  });
};
var lI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -81299 + -1 * -77278 + 3772 * 17, qc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Vc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Zc = /[A-Z0-9]/g, zc = typeof document < "u", Xc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function $c(i, n, t) {
  return n.__k == null && (n.textContent = ""), Ke(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function AC(i, n, t) {
  return Sa(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
$A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty($A.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var ug = W.event;
function eC() {
}
function tC() {
  return this.cancelBubble;
}
function oC() {
  return this.defaultPrevented;
}
W.event = function(i) {
  return ug && (i = ug(i)), i.persist = eC, i.isPropagationStopped = tC, i.isDefaultPrevented = oC, i.nativeEvent = i;
};
var Dn = {};
Dn.enumerable = !1, Dn.configurable = !0, Dn.get = function() {
  return this.class;
};
var va, nC = Dn, fg = W.vnode;
W.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || zc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[-4904 + 1226 * 4] === "o" && g[1] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || Xc(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : Vc.test(r) && (r = g) : g = r = "oninput" : o && qc.test(r) ? r = r.replace(Zc, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Re(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Re(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", nC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = lI, fg && fg(i);
};
var hg = W.__r;
W.__r = function(i) {
  hg && hg(i), va = i.__c;
};
var pg = W.diffed;
W.diffed = function(i) {
  pg && pg(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), va = null;
};
var lA = {};
lA.readContext = function(i) {
  return va.__n[i.__c].props.value;
}, lA.useCallback = OA, lA.useContext = fe, lA.useDebugValue = Hn, lA.useDeferredValue = sI, lA.useEffect = J, lA.useId = nI, lA.useImperativeHandle = oI, lA.useInsertionEffect = cI, lA.useLayoutEffect = Ao, lA.useMemo = QA, lA.useReducer = Ra, lA.useRef = AA, lA.useState = $, lA.useSyncExternalStore = aI, lA.useTransition = II;
var dI = {};
dI.current = lA;
var xI = {};
xI.ReactCurrentDispatcher = dI;
var iC = xI;
function rC(i) {
  return FA.bind(null, i);
}
function Ni(i) {
  return !!i && i.$$typeof === lI;
}
function aC(i) {
  return Ni(i) && i.type === Ae;
}
function gC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function sC(i) {
  return Ni(i) ? Ga.apply(null, arguments) : i;
}
function IC(i) {
  return !!i.__k && (Ke(null, i), !0);
}
function cC(i) {
  return i && (i.base || -7935 + 1 * 4502 + 3434 === i.nodeType && i) || null;
}
var CC = function(i, n) {
  return i(n);
}, BC = function(i, n) {
  return i(n);
}, QC = Ae, EC = Ni, ut = { useState: $, useId: nI, useReducer: Ra, useEffect: J, useLayoutEffect: Ao, useInsertionEffect: cI, useTransition: II, useDeferredValue: sI, useSyncExternalStore: aI, startTransition: gI, useRef: AA, useImperativeHandle: oI, useMemo: QA, useCallback: OA, useContext: fe, useDebugValue: Hn, version: "18.3.1", Children: Tc, render: $c, hydrate: AC, unmountComponentAtNode: IC, createPortal: _c, createElement: FA, createContext: qe, createFactory: rC, cloneElement: sC, createRef: yc, Fragment: Ae, isValidElement: Ni, isElement: EC, isFragment: aC, isMemo: gC, findDOMNode: cC, Component: $A, PureComponent: kr, memo: Uc, forwardRef: CI, flushSync: BC, unstable_batchedUpdates: CC, StrictMode: QC, Suspense: wn, SuspenseList: Bo, lazy: Hc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: iC };
function lC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Vi, yg;
function dC() {
  return yg || (yg = 6261 + 43 * -232 + 2 * 1858, Vi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), s = 7304 + 2710 * -1 + 1 * -4594; s < r.length; s++) {
      var C = r[s];
      if (!g(C)) return !1;
      var I = n[C], E = t[C];
      if (o = e ? e.call(A, I, E, C) : void 0, o === !1 || o === void 0 && I !== E) return !1;
    }
    return !0;
  }), Vi;
}
var xC = dC();
const uC = /* @__PURE__ */ lC(xC);
var H = "-ms-", po = "-moz-", Y = "-webkit-", uI = "comm", Ri = "rule", Ma = "decl", fC = "@import", fI = "@keyframes", hC = "@layer", hI = Math.abs, Wa = String.fromCharCode, Sr = Object.assign;
function pC(i, n) {
  return sA(i, -423 + -3 * -128 + 39) ^ -611 * -14 + 2236 * -4 + -29 * -15 ? (((n << 3 * -2648 + -6054 + -3500 * -4 ^ sA(i, 8548 + 1 * -8548)) << 8595 + 8593 * -1 ^ sA(i, 1 * 5479 + 8844 + 2046 * -7)) << 3221 + -229 * -14 + -6425 ^ sA(i, -11621 + 197 * 59)) << 343 * 26 + -981 + -7935 ^ sA(i, -1961 + -1964 * -1) : 6983 * 1 + 856 * 4 + -10407;
}
function pI(i) {
  return i.trim();
}
function be(i, n) {
  return (i = n.exec(i)) ? i[4936 + -1 * 4936] : i;
}
function L(i, n, t) {
  return i.replace(n, t);
}
function bn(i, n, t) {
  return i.indexOf(n, t);
}
function sA(i, n) {
  return i.charCodeAt(n) | 4 * 116 + -3687 * 2 + 6910;
}
function _t(i, n, t) {
  return i.slice(n, t);
}
function de(i) {
  return i.length;
}
function yI(i) {
  return i.length;
}
function Qo(i, n) {
  return n.push(i), i;
}
function yC(i, n) {
  return i.map(n).join("");
}
function mg(i, n) {
  return i.filter(function(t) {
    return !be(t, n);
  });
}
var Fi = -118 * -29 + 77 * -15 + -2266, qt = -4549 * -1 + -3 * -182 + 18 * -283, mI = 27 * -315 + 1 * -6967 + 15472, ee = 1 * 6547 + -1436 * 1 + -5111 * 1, tA = 6243 + -369 * 17 + 3 * 10, eo = "";
function vi(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = Fi, g.column = qt, g.length = r, g.return = "", g.siblings = a, g;
}
function Le(i, n) {
  return Sr(vi("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, n);
}
function wt(i) {
  for (; i.root; ) i = Le(i.root, { children: [i] });
  Qo(i, i.siblings);
}
function mC() {
  return tA;
}
function wC() {
  return tA = ee > 12 * -347 + -1253 + 5417 * 1 ? sA(eo, --ee) : 2 * -545 + 5558 + -1 * 4468, qt--, tA === -2 * -115 + -1 * -6013 + -6233 && (qt = 1, Fi--), tA;
}
function re() {
  return tA = ee < mI ? sA(eo, ee++) : 2 * 3221 + 1447 * 2 + 9336 * -1, qt++, tA === 1602 + -536 * 8 + 337 * 8 && (qt = 2493 * 2 + -10 + -5 * 995, Fi++), tA;
}
function dt() {
  return sA(eo, ee);
}
function kn() {
  return ee;
}
function Mi(i, n) {
  return _t(eo, i, n);
}
function Gr(i) {
  switch (i) {
    case 118 * 76 + -8655 + -313:
    case 98 * -71 + -1 * 1491 + 8458:
    case 96 * -35 + 1554 + 1816:
    case -193 * 29 + 1 * 2031 + -1 * -3579:
    case -1403 * -3 + 6048 + -25 * 409:
      return 2 * 4927 + 7 * 1136 + -17801;
    case 106 * -11 + 7841 + -123 * 54:
    case 43:
    case 2926 + 2882 * -1:
    case 47:
    case 2 * -4009 + 2922 + 5158 * 1:
    case 166 + -17 * 6:
    case 1 * -9113 + 1807 + 7432:
    case -4218 * 2 + 313 * 30 + 1 * -895:
    case -488 + 47 * 13:
    case 1 * -6243 + -391 + -751 * -9:
      return 3446 + 1066 * 4 + -2 * 3853;
    case 2606 + 2 * -4376 + 6204:
      return 19 * -151 + -3747 + 6619;
    case -740 + -5776 * -1 + -5002:
    case -392 + -9 * 538 + 5273:
    case 40:
    case 91:
      return -3511 * -1 + -23 * -273 + 4 * -2447;
    case 8216 + -15 * 545:
    case 183 * -50 + -3935 * 2 + 17113:
      return 4382 + 8 * -313 + -1 * 1877;
  }
  return -7485 + -27 * -43 + 34 * 186;
}
function DC(i) {
  return Fi = qt = 5707 + 4971 * 2 + -1304 * 12, mI = de(eo = i), ee = -1 * -4519 + -318 * -16 + -9607 * 1, [];
}
function bC(i) {
  return eo = "", i;
}
function Zi(i) {
  return pI(Mi(ee - 1, Nr(i === 88 * -3 + 1966 + -1611 * 1 ? i + 2 : i === -8815 + 1 * 4078 + 4777 ? i + (-370 * -25 + -4549 * -1 + 13798 * -1) : i)));
}
function kC(i) {
  for (; (tA = dt()) && tA < 237 * 39 + 2 * 1009 + 1604 * -7; ) re();
  return Gr(i) > -9084 + 77 * 118 || Gr(tA) > -3231 + -19 * -23 + 2797 ? "" : " ";
}
function SC(i, n) {
  for (; --n && re() && !(tA < 48 || tA > -8164 + 6523 * 1 + 1743 || tA > -7753 * -1 + 6385 + 1 * -14081 && tA < -12 * -791 + -1966 + 9 * -829 || tA > -9311 + -433 * 3 + 10680 && tA < -10208 + -3 * -3435); ) ;
  return Mi(i, kn() + (n < -1693 * 2 + 3515 + -123 * 1 && dt() == 3 * 958 + 1 * 9993 + -12835 && re() == 32));
}
function Nr(i) {
  for (; re(); ) switch (tA) {
    case i:
      return ee;
    case -2566 * -1 + 15 * 166 + 1674 * -3:
    case -747 + 4 * -127 + 1 * 1294:
      i !== -812 * -12 + -107 * -1 + -1 * 9817 && i !== 1619 * -4 + -7801 + 14316 && Nr(tA);
      break;
    case -25 * -107 + 47 * -88 + 1501 * 1:
      i === 8817 + -4164 * -2 + -2138 * 8 && Nr(i);
      break;
    case -1 * -5297 + 7492 * 1 + 12697 * -1:
      re();
      break;
  }
  return ee;
}
function GC(i, n) {
  for (; re() && i + tA !== -1484 + -301 * 2 + -27 * -79 + (-5399 + 1 * 5409); ) if (i + tA === -877 * 1 + 398 + 521 + 42 && dt() === -4093 * -1 + -8017 * -1 + -12063) break;
  return "/*" + Mi(n, ee - (-2367 + -9277 * -1 + -6909)) + "*" + Wa(i === -336 + 6023 * -1 + 6406 ? i : re());
}
function NC(i) {
  for (; !Gr(dt()); ) re();
  return Mi(i, ee);
}
function RC(i) {
  return bC(Sn("", null, null, null, [""], i = DC(i), 0, [9494 + 9494 * -1], i));
}
function Sn(i, n, t, e, A, o, r, a, g) {
  for (var s = 0, C = -5106 + 305 * 5 + 3581, I = r, E = 0, B = 30 * -39 + 1349 + -1 * 179, l = -2738 * -1 + -6499 * 1 + 1 * 3761, d = 8927 + -3209 * 1 + 5717 * -1, x = 6874 + 407 * 23 + -16234, Q = -1 * 566 + 15 * -95 + 1992, f = -1901 + 1901 * 1, p = "", m = A, G = o, S = e, D = p; x; ) switch (l = f, f = re()) {
    case -1 * -1633 + 752 + -2345:
      if (l != 108 && sA(D, I - (5310 + 1 * -8437 + 3128)) == 58) {
        bn(D += L(Zi(f), "&", "&\f"), "&\f", hI(s ? a[s - (6861 + -1751 * -4 + -13864 * 1)] : 8233 * 1 + -2529 * 3 + -646)) != -1 && (Q = -1);
        break;
      }
    case -694 * 8 + -493 + 6079:
    case 97 * 77 + -1333 + -91 * 67:
    case -43 * 28 + 1458 + 163 * -1:
      D += Zi(f);
      break;
    case 9:
    case 7975 + 71 * -85 + -193 * 10:
    case 5 * 1237 + 3806 + -2 * 4989:
    case -3 * -2059 + 1 * 1684 + -7829 * 1:
      D += kC(l);
      break;
    case 1360 + -263 * 19 + 3729:
      D += SC(kn() - (-906 * -8 + -1528 + -5719), -9 * -919 + -4175 + 87 * -47);
      continue;
    case 1052 * 1 + 1 * -7662 + 6657:
      switch (dt()) {
        case -3 * -59 + -1 * 9314 + 9179:
        case -3197 * 1 + 8926 * -1 + 2434 * 5:
          Qo(FC(GC(re(), kn()), n, t, g), g);
          break;
        default:
          D += "/";
      }
      break;
    case (11 * -739 + -41 * 105 + 1 * 12557) * d:
      a[s++] = de(D) * Q;
    case (-1 * 4133 + -5 * -1625 + -3867) * d:
    case 59:
    case 9198 + -353 * -23 + -17317:
      switch (f) {
        case -619 * -3 + -3508 + 1651:
        case 22 * 120 + -81 * -87 + -9562:
          x = 801 * -1 + 7 * -1217 + 9320;
        case 3679 + 4 * -905 + C:
          Q == -1 && (D = L(D, /\f/g, "")), B > -191 * -9 + -9383 + 7664 && de(D) - I && Qo(B > -2 * -1639 + -41 * -239 + -13045 * 1 ? Dg(D + ";", e, t, I - (-326 * 16 + -1 * -495 + 4722), g) : Dg(L(D, " ", "") + ";", e, t, I - (1094 * 2 + 8357 + -10543), g), g);
          break;
        case -1671 + 265 * -2 + 2260:
          D += ";";
        default:
          if (Qo(S = wg(D, n, t, s, C, A, a, p, m = [], G = [], I, o), o), f === -1 * -3123 + -1 * 9353 + 6353)
            if (C === -8629 * -1 + -9791 * 1 + -7 * -166) Sn(D, n, S, S, m, o, I, a, G);
            else switch (E === 1 * -1249 + 1829 * -4 + 4 * 2166 && sA(D, -3 * 2763 + -847 * -7 + -17 * -139) === 5639 * -1 + 4568 * -1 + 10317 ? 17 * 446 + 1 * -4481 + -3001 : E) {
              case -598 * 1 + -276 + 974:
              case -1 * 445 + 8151 + -7598:
              case 9563 + -4727 * 2:
              case 115:
                Sn(i, S, S, e && Qo(wg(i, S, S, 0, -5827 * -1 + 5765 + -11592, A, a, p, A, m = [], I, G), G), A, G, I, a, e ? m : G);
                break;
              default:
                Sn(D, S, S, S, [""], G, -6884 * 1 + 5207 + 1677, a, G);
            }
      }
      s = C = B = 4018 + 2778 * 3 + -1544 * 8, d = Q = 1, p = D = "", I = r;
      break;
    case -6236 + -6294 * -1:
      I = -2026 + 1 * 2027 + de(D), B = l;
    default:
      if (d < 9580 + -6661 * -1 + -16240) {
        if (f == 69 + -118 * 81 + 108 * 89) --d;
        else if (f == 11 * 771 + -2389 + -5967 && d++ == 5969 + 1 * -837 + 2 * -2566 && wC() == 4193 + -18 * 226) continue;
      }
      switch (D += Wa(f), f * d) {
        case -3 * 1469 + 1 * -4832 + 9277:
          Q = C > -4011 + 1954 * -1 + -1 * -5965 ? -1 * 2998 + -4870 + 7869 : (D += "\f", -1);
          break;
        case 103 * 15 + 1 * 1402 + -1 * 2903:
          a[s++] = (de(D) - (-1 * 2201 + -7 * 1406 + 6022 * 2)) * Q, Q = -5276 * -1 + 2621 * -1 + -2654;
          break;
        case 4194 * -1 + -195 * -11 + -1 * -2113:
          dt() === -1587 + 3 * -1574 + 353 * 18 && (D += Zi(re())), E = dt(), C = I = de(p = D += NC(kn())), f++;
          break;
        case 3 * -2501 + -605 + -8153 * -1:
          l === 5 * 1496 + -1 * 7147 + -288 && de(D) == 9062 + -2 * 1454 + -6152 && (d = 6139 + 1 * -6139);
      }
  }
  return o;
}
function wg(i, n, t, e, A, o, r, a, g, s, C, I) {
  for (var E = A - 1, B = A === 1874 * -5 + -9195 + -1 * -18565 ? o : [""], l = yI(B), d = 7086 + 5 * -1864 + -2 * -1117, x = 10377 + 3 * -3459, Q = -4651 + 100 * 66 + -1949; d < e; ++d) for (var f = -1 * 6151 + -6938 + 13089, p = _t(i, E + (-10162 + -10163 * -1), E = hI(x = r[d])), m = i; f < l; ++f) (m = pI(x > 0 ? B[f] + " " + p : L(p, /&\f/g, B[f]))) && (g[Q++] = m);
  return vi(i, n, t, A === 1 * -81 + 7753 + -7672 ? Ri : a, g, s, C, I);
}
function FC(i, n, t, e) {
  return vi(i, n, t, uI, Wa(mC()), _t(i, 1061 * -2 + 1 * -5755 + -7879 * -1, -2), 0, e);
}
function Dg(i, n, t, e, A) {
  return vi(i, n, t, Ma, _t(i, 1 * 6021 + -141 * -68 + 1 * -15609, e), _t(i, e + (73 * -94 + -4419 + 5641 * 2), -1), e, A);
}
function wI(i, n, t) {
  switch (pC(i, n)) {
    case -19 * -117 + -8063 + 1 * 10943:
      return Y + "print-" + i + i;
    case 5 * 653 + 7971 * -1 + 3481 * 3:
    case -194 * 41 + 3617 + 8538:
    case -4366 + -7181 * -1 + -1 * -362:
    case 5007 + 1099 * -1 + -19 * 25:
    case 396 + 34 * -165 + 6855:
    case 36 * -24 + -6064 + 11385:
    case 10620 + 1 * -7699:
    case 2217 + -313 * -23 + -3844:
    case 9562 + 164 * -10 + -27 * 58:
    case -350 * 29 + 1721 * -3 + -1 * -21157:
    case 1 * -977 + -1299 + 5467:
    case 6645:
    case -8880 + -49 * -121 + 2978 * 2:
    case 7998 + -173 * -73 + -1 * 14236:
    case -10621 * 1 + -9090 + 6 * 4265:
    case -1 * -1087 + 3516 + -170 * -6:
    case 6135:
    case -2837 * 2 + 1934 * -3 + 16075:
    case 103 * 2 + -7433 + -1726 * -7:
    case 4215:
    case -4503 + 3081 * -1 + -13973 * -1:
    case -22 * 58 + 811 + -1 * -5574:
    case -8312 + -65 * -13 + 12832:
    case 5621:
    case 3 * -2481 + -1380 + 12652:
      return Y + i + i;
    case -7642 + 401 * 31:
      return po + i + i;
    case 1 * -4929 + -16 * 521 + 9307 * 2:
    case -2 * 823 + -2748 + 8640:
    case -3 * 1699 + -4786 + 14693:
    case -218 * -62 + -893 * -2 + -8334:
    case 9321 + 4 * -2382 + -2963 * -1:
      return Y + i + po + i + H + i + i;
    case 1 * 8530 + 5522 * 2 + -13638:
      switch (sA(i, n + (7017 + -226 * 31))) {
        case -69 * -45 + 6821 * 1 + 44 * -223:
          return Y + i + H + L(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -1648 + 4103 * 2 + 10 * -645:
          return Y + i + H + L(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -1442 + 17 * 505 + -7098:
          return Y + i + H + L(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 4559 * -1 + 13131 * 1 + 8 * -218:
    case 4268:
    case 2348 + -15 * -37:
      return Y + i + H + i + i;
    case 227 * -24 + 14 * 299 + -7 * -1061:
      return Y + i + H + "flex-" + i + i;
    case -169 + -2678 * -2:
      return Y + i + L(i, /(\w+).+(:[^]+)/, Y + "box-$1$2" + H + "flex-$1$2") + i;
    case 1 * -10331 + 5292 + 3494 * 3:
      return Y + i + H + "flex-item-" + L(i, /flex-|-self/g, "") + (be(i, /flex-|baseline/) ? "" : H + "grid-row-" + L(i, /flex-|-self/g, "")) + i;
    case -1611 * 4 + -6685 + 17804:
      return Y + i + H + "flex-line-pack" + L(i, /align-content|flex-|-self/g, "") + i;
    case 5548:
      return Y + i + H + L(i, "shrink", "negative") + i;
    case -799 * -6 + 10325 + -31 * 317:
      return Y + i + H + L(i, "basis", "preferred-size") + i;
    case -7505 + -1 * 12094 + 2851 * 9:
      return Y + "box-" + L(i, "-grow", "") + Y + i + H + L(i, "grow", "positive") + i;
    case 114 * 33 + -3037 + -1 * -3829:
      return Y + L(i, /([^-])(transform)/g, "$1" + Y + "$2") + i;
    case 5522 + -12175 * -1 + -11510:
      return L(L(L(i, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), i, "") + i;
    case 1 * 3431 + 17 * 411 + -4923:
    case 3959:
      return L(i, /(image-set\([^]*)/, Y + "$1$`$1");
    case -28 * -1 + 1980 + -1480 * -2:
      return L(L(i, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + i + i;
    case 593 + 1 * 3607:
      if (!be(i, /flex-|baseline/)) return H + "grid-column-align" + _t(i, n) + i;
      break;
    case 2611 * 3 + -4266 * -1 + 3 * -3169:
    case -615 * -15 + -3 * -2139 + -12282:
      return H + L(i, "template-", "") + i;
    case -2 * -1311 + -4055 * 2 + 9872:
    case 2177 + -1 * 4328 + 79 * 73:
      return t && t.some(function(e, A) {
        return n = A, be(e.props, /grid-\w+-end/);
      }) ? ~bn(i + (t = t[n].value), "span", -909 + -3 * -303) ? i : H + L(i, "-start", "") + i + H + "grid-row-span:" + (~bn(t, "span", -3159 * 1 + 8454 + -5295) ? be(t, /\d+/) : +be(t, /\d+/) - +be(i, /\d+/)) + ";" : H + L(i, "-start", "") + i;
    case 4896:
    case 1612 * 3 + -8106 + -411 * -18:
      return t && t.some(function(e) {
        return be(e.props, /grid-\w+-start/);
      }) ? i : H + L(L(i, "-end", "-span"), "span ", "") + i;
    case -609 + -12 * -392:
    case 232 + 4348 * 1 + -997:
    case -6871 * 1 + 3 * -2237 + 1765 * 10:
    case -4943 + -575 * -13:
      return L(i, /(.+)-inline(.+)/, Y + "$1$2") + i;
    case -461 * -11 + 20 * -409 + -1 * -11225:
    case -5 * -1816 + -3553 + 1532:
    case 5753:
    case -1 * -6731 + 3 * 7 + -1217 * 1:
    case 4552 + 197 * -53 + 3778 * 3:
    case 51 * 74 + 31 * -25 + 2702:
    case -8362 + 1 * 13295:
    case 157 * 36 + -1392 + 417 * 1:
    case -2715 + -3 * 1 + 223 * 37:
    case -350 * -2 + 73 * 80 + 1 * -751:
    case -1436 * 1 + 2 * 225 + 6007 * 1:
    case 4 * 1873 + -1878 * -5 + 1731 * -7:
      if (de(i) - (5285 + -6 * 652 + -1372) - n > 303 * -6 + -1483 * 2 + 2395 * 2) switch (sA(i, n + (-4605 + -1 * -9566 + -4960))) {
        case 109:
          if (sA(i, n + (1 * 2437 + -5344 + 2911)) !== 11 * -26 + -2800 * -2 + 1 * -5269) break;
        case 1174 + 1 * -1072:
          return L(i, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + po + (sA(i, n + (-9380 + -5911 * -1 + 8 * 434)) == -603 * 3 + -1247 * -1 + -670 * -1 ? "$3" : "$2-$3")) + i;
        case -10 * 664 + 5015 + 1740:
          return ~bn(i, "stretch", -5028 + -239 * -11 + 2399) ? wI(L(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 3 * 1983 + 1 * 5667 + -6464:
    case -50 + 30 * 199:
      return L(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, s) {
        return H + A + ":" + o + s + (r ? H + A + "-span:" + (a ? g : +g - +o) + s : "") + i;
      });
    case -2579 * 1 + 1494 * -3 + 1 * 12010:
      if (sA(i, n + 6) === -16 * 562 + -577 * 17 + 18922) return L(i, ":", ":" + Y) + i;
      break;
    case 1009 + -1 * -5435:
      switch (sA(i, sA(i, 15 * 447 + 1285 + -8 * 997) === -1 * 893 + 2 * 1929 + -2 * 1460 ? -3745 * -1 + -2633 + -1094 : 2599 * 1 + 376 + -228 * 13)) {
        case -5 * 1867 + -3315 + 6385 * 2:
          return L(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Y + (sA(i, 1 * 8843 + 3 * 576 + 459 * -23) === -187 * -30 + -4153 + -1412 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + H + "$2box$3") + i;
        case 1 * -3953 + -3 * -2153 + -2406:
          return L(i, ":", ":" + H) + i;
      }
      break;
    case 15 * 339 + 2024 + -1390:
    case 5724 + 138 * 62 + -11633:
    case -7080 + -1 * -1461 + -1 * -7754:
    case 139 * 35 + -2565 + -1627 * -1:
    case 1968 + 79 * -75 + 529 * 12:
      return L(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Kn(i, n) {
  for (var t = "", e = -6066 + 1 * -9742 + 15808; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function vC(i, n, t, e) {
  switch (i.type) {
    case hC:
      if (i.children.length) break;
    case fC:
    case Ma:
      return i.return = i.return || i.value;
    case uI:
      return "";
    case fI:
      return i.return = i.value + "{" + Kn(i.children, e) + "}";
    case Ri:
      if (!de(i.value = i.props.join(","))) return "";
  }
  return de(t = Kn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function MC(i) {
  var n = yI(i);
  return function(t, e, A, o) {
    for (var r = "", a = 920 + 3187 * -1 + 2267; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function WC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function LC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Ma:
        i.return = wI(i.value, i.length, t);
        return;
      case fI:
        return Kn([Le(i, { value: L(i.value, "@", "@" + Y) })], e);
      case Ri:
        if (i.length) return yC(t = i.props, function(A) {
          switch (be(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              wt(Le(i, { props: [L(A, /:(read-\w+)/, ":" + po + "$1")] }));
              var o = {};
              o.props = [A], wt(Le(i, o)), Sr(i, { props: mg(t, e) });
              break;
            case "::placeholder":
              wt(Le(i, { props: [L(A, /:(plac\w+)/, ":" + Y + "input-$1")] })), wt(Le(i, { props: [L(A, /:(plac\w+)/, ":" + po + "$1")] })), wt(Le(i, { props: [L(A, /:(plac\w+)/, H + "input-$1")] }));
              var r = {};
              r.props = [A], wt(Le(i, r)), Sr(i, { props: mg(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var OC = v, U = {}, ft = typeof process < "u" && U !== void 0 && (U.REACT_APP_SC_ATTR || U.SC_ATTR) || "data-styled", DI = "active", bI = "data-styled-version", Wi = "6.1.18", La = `/*!sc*/
`, jn = typeof window < "u" && typeof document < "u", JC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== "" ? U.REACT_APP_SC_DISABLE_SPEEDY !== "false" && U.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.SC_DISABLE_SPEEDY !== void 0 && U.SC_DISABLE_SPEEDY !== "" ? U.SC_DISABLE_SPEEDY !== "false" && U.SC_DISABLE_SPEEDY : U.NODE_ENV !== "production"), bg = /invalid hook call/i, cn = /* @__PURE__ */ new Set(), UC = function(i, n) {
  if (U.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -9 * 498 + -4692 * 1 + 9175; g < arguments.length; g++) a[g - (2102 * -2 + -8238 * -1 + -4033)] = arguments[g];
        bg.test(r) ? (o = !1, cn.delete(e)) : A.apply(void (1089 + -11 * 132 + -33 * -11), Kt([r], a, !1));
      }, AA(), o && !cn.has(e) && (console.warn(e), cn.add(e));
    } catch (r) {
      bg.test(r.message) && cn.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Li = Object.freeze([]), Vt = Object.freeze({});
function YC(i, n, t) {
  return t === void 0 && (t = Vt), i.theme !== t.theme && i.theme || n || t.theme;
}
var Rr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), TC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, PC = /(^-|-$)/g;
function kg(i) {
  return i.replace(TC, "-").replace(PC, "");
}
var HC = /(a)(d)/gi, Cn = -1261 + 11 * -780 + 9893, Sg = function(i) {
  return String.fromCharCode(i + (i > -5455 + 8513 * 1 + -3033 ? 39 : 5917 + -1455 * 4));
};
function Fr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Cn; n = n / Cn | 0) t = Sg(n % Cn) + t;
  return (Sg(n % Cn) + t).replace(HC, "$1-$2");
}
var zi, kI = 4389 + 289 * -27 + 1 * 8795, at = function(i, n) {
  for (var t = n.length; t; ) i = 33 * i ^ n.charCodeAt(--t);
  return i;
}, SI = function(i) {
  return at(kI, i);
};
function KC(i) {
  return Fr(SI(i) >>> 7481 * -1 + 8511 + -1030);
}
function GI(i) {
  return U.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Xi(i) {
  return typeof i == "string" && (U.NODE_ENV === "production" || i.charAt(-1 * 9622 + 5188 + -739 * -6) === i.charAt(3328 + 6584 * 1 + -168 * 59).toLowerCase());
}
var HA = {};
HA.childContextTypes = !0, HA.contextType = !0, HA.contextTypes = !0, HA.defaultProps = !0, HA.displayName = !0, HA.getDefaultProps = !0, HA.getDerivedStateFromError = !0, HA.getDerivedStateFromProps = !0, HA.mixins = !0, HA.propTypes = !0, HA.type = !0;
var Oe = {};
Oe.name = !0, Oe.length = !0, Oe.prototype = !0, Oe.caller = !0, Oe.callee = !0, Oe.arguments = !0, Oe.arity = !0;
var At = {};
At.$$typeof = !0, At.compare = !0, At.defaultProps = !0, At.displayName = !0, At.propTypes = !0, At.type = !0;
var St = {};
St.$$typeof = !0, St.render = !0, St.defaultProps = !0, St.displayName = !0, St.propTypes = !0;
var NI = typeof Symbol == "function" && Symbol.for, RI = NI ? Symbol.for("react.memo") : -107592 + -5783 * -29, jC = NI ? Symbol.for("react.forward_ref") : -106344 + 41614 * 4, _C = HA, qC = Oe, FI = At, VC = ((zi = {})[jC] = St, zi[RI] = FI, zi);
function Gg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === RI ? FI : "$$typeof" in i ? VC[i.$$typeof] : _C;
  var n;
}
var ZC = Object.defineProperty, zC = Object.getOwnPropertyNames, Ng = Object.getOwnPropertySymbols, XC = Object.getOwnPropertyDescriptor, $C = Object.getPrototypeOf, Rg = Object.prototype;
function vI(i, n, t) {
  if (typeof n != "string") {
    if (Rg) {
      var e = $C(n);
      e && e !== Rg && vI(i, e, t);
    }
    var A = zC(n);
    Ng && (A = A.concat(Ng(n)));
    for (var o = Gg(i), r = Gg(n), a = 3921 * 1 + 4393 + 1 * -8314; a < A.length; ++a) {
      var g = A[a];
      if (!(g in qC || t && t[g] || r && g in r || o && g in o)) {
        var s = XC(n, g);
        try {
          ZC(i, g, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function Zt(i) {
  return typeof i == "function";
}
function Oa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function st(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Fg(i, n) {
  if (-2615 * 1 + -2482 + -1699 * -3 === i.length) return "";
  for (var t = i[-4863 * 2 + 5057 * 1 + -203 * -23], e = 3460 + 4 * -1379 + 11 * 187; e < i.length; e++) t += i[e];
  return t;
}
function zt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function vr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !zt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -25 * -73 + -6126 + 4301; e < n.length; e++) i[e] = vr(i[e], n[e]);
  else if (zt(n))
    for (var e in n) i[e] = vr(i[e], n[e]);
  return i;
}
function Ja(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var oA = {};
oA[1] = `Cannot create styled-component for component: %s.

`, oA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, oA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, oA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, oA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, oA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, oA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', oA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, oA[9] = "Missing document `<head>`\n\n", oA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, oA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, oA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", oA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, oA[14] = `ThemeProvider: "theme" prop is required.

`, oA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", oA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, oA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, oA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var AB = U.NODE_ENV !== "production" ? oA : {};
function eB() {
  for (var i = [], n = 573 + -3 * -2109 + 276 * -25; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[7088 + 16 * -443], e = [], A = 62 * -20 + 1453 + -212, o = i.length; A < o; A += -184 * 39 + 2061 + 4 * 1279) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function to(i) {
  for (var n = [], t = -7477 * -1 + 4346 + -11822; t < arguments.length; t++) n[t - (1 * 1031 + 6978 + -8008)] = arguments[t];
  return U.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 7 * -377 + 1804 + 835 ? " Args: ".concat(n.join(", ")) : "")) : new Error(eB.apply(void 0, Kt([AB[i]], n, !1)).trim());
}
var tB = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(512), this.length = -5554 + -5 * -261 + 4761, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 10227 + -3409 * 3, e = -4 * 2430 + 9595 + 125; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 2593 + 7565 * -1 + 4973) < 74 * -46 + 10 * -655 + 9954) throw to(236 * 8 + -1 * 4597 + 2725, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 377 + -1 * 767 + 78 * 5;
    }
    for (var a = this.indexOfGroup(n + (-329 * 21 + 4377 + 1 * 2533)), g = (r = -2591 + -2591 * -1, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 2167 * 1 + -6761 + 4594;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 2 * 165 + -3935 * -1 + -1 * 4265 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(La);
    return t;
  }, i;
}(), oB = 7472 + 1 * -7471 << 3735 + -3 * -1345 + -1 * 7740, Gn = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), Nn = 4999 * 1 + -461 * 18 + -11 * -300, Bn = function(i) {
  if (Gn.has(i)) return Gn.get(i);
  for (; _n.has(Nn); ) Nn++;
  var n = Nn++;
  if (U.NODE_ENV !== "production" && ((8386 * -1 + -6577 * 1 + -1151 * -13 | n) < -7699 * -1 + 3893 * -1 + -3806 || n > oB)) throw to(16, "".concat(n));
  return Gn.set(i, n), _n.set(n, i), n;
}, nB = function(i, n) {
  Nn = n + (2386 * -1 + -5446 + 7833), Gn.set(i, n), _n.set(n, i);
}, iB = "style[".concat(ft, "][").concat(bI, '="').concat(Wi, '"]'), rB = new RegExp("^".concat(ft, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), aB = function(i, n, t) {
  for (var e, A = t.split(","), o = -6 * -1018 + -3074 + -2 * 1517, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, gB = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(La), A = [], o = 178 * 45 + 51 * -53 + -183 * 29, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(rB);
      if (g) {
        var s = 0 | parseInt(g[1], 10), C = g[8180 + -47 * 174];
        -9113 + -1 * 8926 + 18039 !== s && (nB(C, s), aB(i, C, g[1 * -1745 + 9182 + 42 * -177]), i.getTag().insertRules(s, A)), A.length = 1 * 2859 + 6513 + -22 * 426;
      } else A.push(a);
    }
  }
}, vg = function(i) {
  for (var n = document.querySelectorAll(iB), t = 7876 + 554 * -8 + -3444, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(ft) !== DI && (gB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function sB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var MI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(ft, "]")));
    return g[g.length - (1 * 6283 + -2 * 828 + -4626)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(ft, DI), e.setAttribute(bI, Wi);
  var r = sB();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, IB = function() {
  function i(n) {
    this.element = MI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -9 * -646 + -3 * -317 + 33 * -205, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw to(-5379 + 602 * -13 + -2 * -6611);
    }(this.element), this.length = 3e3 + 1500 * -2;
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
}(), cB = function() {
  function i(n) {
    this.element = MI(n), this.nodes = this.element.childNodes, this.length = 1 * -6986 + -1 * 6547 + -13 * -1041;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), CB = function() {
  function i(n) {
    this.rules = [], this.length = 5387 * -1 + -1 * 9767 + 2 * 7577;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 218 * 17 + 4300 + -1 * 8005), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), Mg = jn, BB = { isServer: !jn, useCSSOMInjection: !JC }, WI = function() {
  function i(n, t, e) {
    n === void 0 && (n = Vt), t === void 0 && (t = {});
    var A = this;
    this.options = LA(LA({}, BB), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && jn && Mg && (Mg = !1, vg(this)), Ja(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, g = "", s = function(I) {
          var E = function(Q) {
            return _n.get(Q);
          }(I);
          if (E === void 0) return "continue";
          var B = o.names.get(E), l = r.getGroup(I);
          if (B === void 0 || !B.size || -7978 * 1 + -1190 + 9168 === l.length) return "continue";
          var d = "".concat(ft, ".g").concat(I, '[id="').concat(E, '"]'), x = "";
          B !== void 0 && B.forEach(function(Q) {
            Q.length > 11 * 365 + 1 * 3307 + -7322 && (x += "".concat(Q, ","));
          }), g += "".concat(l).concat(d, '{content:"').concat(x, '"}').concat(La);
        }, C = 89 * -87 + -351 * 13 + 12306; C < a; C++) s(C);
        return g;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return Bn(n);
  }, i.prototype.rehydrate = function() {
    !this.server && jn && vg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(LA(LA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 2692 + -2 * 1346) + (-1 * -3305 + -4827 + 1523 * 1);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new CB(A) : e ? new IB(A) : new cB(A);
    }(this.options), new tB(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Bn(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Bn(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Bn(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), QB = /&/g, EB = /^\s*\/\/.*$/gm;
function LI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = LI(t.children, n)), t;
  });
}
function OI(i) {
  var n, t, e, A = i === void 0 ? Vt : i, o = A.options, r = o === void 0 ? Vt : o, a = A.plugins, g = a === void 0 ? Li : a, s = function(E, B, l) {
    return l.startsWith(t) && l.endsWith(t) && l.replaceAll(t, "").length > -10995 + 10995 * 1 ? ".".concat(n) : E;
  }, C = g.slice();
  C.push(function(E) {
    E.type === Ri && E.value.includes("&") && (E.props[-156 * -13 + -3 * 289 + 1 * -1161] = E.props[501 + -501 * 1].replace(QB, t).replace(e, s));
  }), r.prefix && C.push(LC), C.push(vC);
  var I = function(E, B, l, d) {
    B === void 0 && (B = ""), l === void 0 && (l = ""), d === void 0 && (d = "&"), n = d, t = B, e = new RegExp("\\".concat(t, "\\b"), "g");
    var x = E.replace(EB, ""), Q = RC(l || B ? "".concat(l, " ").concat(B, " { ").concat(x, " }") : x);
    r.namespace && (Q = LI(Q, r.namespace));
    var f = [];
    return Kn(Q, MC(C.concat(WC(function(p) {
      return f.push(p);
    })))), f;
  };
  return I.hash = g.length ? g.reduce(function(E, B) {
    return B.name || to(4 * -2202 + 2357 * 1 + -122 * -53), at(E, B.name);
  }, kI).toString() : "", I;
}
var lB = new WI(), Mr = OI(), Ua = ut.createContext({ shouldForwardProp: void 0, styleSheet: lB, stylis: Mr });
Ua.Consumer;
var dB = ut.createContext(void 0);
function Wr() {
  return fe(Ua);
}
function xB(i) {
  var n = $(i.stylisPlugins), t = n[-9577 + -157 * -61], e = n[-2 * -2989 + -1 * 3157 + -235 * 12], A = Wr().styleSheet, o = QA(function() {
    var C = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(I)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = QA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = C, I.plugins = t, OI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  J(function() {
    uC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = QA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var s = {};
  return s.value = r, ut.createElement(Ua.Provider, g, ut.createElement(dB.Provider, s, i.children));
}
var Wg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Mr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Ja(this, function() {
      throw to(-43 * -169 + 1395 + 1730 * -5, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Mr), this.name + n.hash;
  }, i;
}(), uB = function(i) {
  return i >= "A" && i <= "Z";
};
function Lg(i) {
  for (var n = "", t = -4945 + -2344 * -3 + -2087 * 1; t < i.length; t++) {
    var e = i[t];
    if (-5194 + 1039 * 5 === t && e === "-" && i[3303 * 2 + 214 + 55 * -124] === "-") return i;
    uB(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var JI = function(i) {
  return i == null || i === !1 || i === "";
}, UI = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !JI(o) && (Array.isArray(o) && o.isCss || Zt(o) ? e.push("".concat(Lg(A), ":"), o, ";") : zt(o) ? e.push.apply(e, Kt(Kt(["".concat(A, " {")], UI(o), !1), ["}"], !1)) : e.push("".concat(Lg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -537 + 1 * -5058 + 5595 === t || n in OC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function xt(i, n, t, e) {
  if (JI(i)) return [];
  if (Oa(i)) return [".".concat(i.styledComponentId)];
  if (Zt(i)) {
    if (!Zt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return U.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Wg || zt(A) || A === null || console.error("".concat(GI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), xt(A, n, t, e);
  }
  var o;
  return i instanceof Wg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : zt(i) ? UI(i) : Array.isArray(i) ? Array.prototype.concat.apply(Li, i.map(function(r) {
    return xt(r, n, t, e);
  })) : [i.toString()];
}
function fB(i) {
  for (var n = -5002 + -2501 * -2; n < i.length; n += -1 * 9029 + 6522 + -22 * -114) {
    var t = i[n];
    if (Zt(t) && !Oa(t)) return !1;
  }
  return !0;
}
var hB = SI(Wi), pB = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = U.NODE_ENV === "production" && (e === void 0 || e.isStatic) && fB(n), this.componentId = t, this.baseHash = at(hB, t), this.baseStyle = e, WI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = st(A, this.staticRulesId);
      else {
        var o = Fg(xt(this.rules, n, t, e)), r = Fr(at(this.baseHash, o) >>> -8298 + 461 * 18);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = st(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = at(this.baseHash, e.hash), s = "", C = 6971 + 1 * -9567 + -59 * -44; C < this.rules.length; C++) {
        var I = this.rules[C];
        if (typeof I == "string") s += I, U.NODE_ENV !== "production" && (g = at(g, I));
        else if (I) {
          var E = Fg(xt(I, n, t, e));
          g = at(g, E + C), s += E;
        }
      }
      if (s) {
        var B = Fr(g >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, e(s, ".".concat(B), void 0, this.componentId)), A = st(A, B);
      }
    }
    return A;
  }, i;
}(), YI = ut.createContext(void 0);
YI.Consumer;
var $i = {}, Og = /* @__PURE__ */ new Set();
function yB(i, n, t) {
  var e = Oa(i), A = i, o = !Xi(i), r = n.attrs, a = r === void 0 ? Li : r, g = n.componentId, s = g === void 0 ? function(G, S) {
    var D = typeof G != "string" ? "sc" : kg(G);
    $i[D] = ($i[D] || 9935 + 32 * -164 + -4687) + (31 * 194 + 9 * -376 + 1 * -2629);
    var P = "".concat(D, "-").concat(KC(Wi + D + $i[D]));
    return S ? "".concat(S, "-").concat(P) : P;
  }(n.displayName, n.parentComponentId) : g, C = n.displayName, I = C === void 0 ? function(G) {
    return Xi(G) ? "styled.".concat(G) : "Styled(".concat(GI(G), ")");
  }(i) : C, E = n.displayName && n.componentId ? "".concat(kg(n.displayName), "-").concat(n.componentId) : n.componentId || s, B = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, l = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var x = n.shouldForwardProp;
      l = function(G, S) {
        return d(G, S) && x(G, S);
      };
    } else l = d;
  }
  var Q = new pB(t, E, e ? A.componentStyle : void 0);
  function f(G, S) {
    return function(D, P, Z) {
      var kA = D.attrs, EA = D.componentStyle, fA = D.defaultProps, z = D.foldedComponentIds, Ve = D.styledComponentId, ve = D.target, rn = ut.useContext(YI), yt = Wr(), io = D.shouldForwardProp || yt.shouldForwardProp;
      U.NODE_ENV !== "production" && Hn(Ve);
      var ro = YC(P, rn, fA) || Vt, pe = function(an, so, gn) {
        var mt = {};
        mt.className = void 0, mt.theme = gn;
        for (var Ki, Ze = LA(LA({}, so), mt), ji = -37 * -141 + -394 + -4823; ji < an.length; ji += -7652 + -1 * -7653) {
          var sn = Zt(Ki = an[ji]) ? Ki(Ze) : Ki;
          for (var Me in sn) Ze[Me] = Me === "className" ? st(Ze[Me], sn[Me]) : Me === "style" ? LA(LA({}, Ze[Me]), sn[Me]) : sn[Me];
        }
        return so.className && (Ze.className = st(Ze.className, so.className)), Ze;
      }(kA, P, ro), ao = pe.as || ve, go = {};
      for (var PA in pe) pe[PA] === void 0 || PA[3625 + -725 * 5] === "$" || PA === "as" || PA === "theme" && pe.theme === ro || (PA === "forwardedAs" ? go.as = pe.forwardedAs : io && !io(PA, ao) || (go[PA] = pe[PA], io || U.NODE_ENV !== "development" || Lc(PA) || Og.has(PA) || !Rr.has(ao) || (Og.add(PA), console.warn('styled-components: it looks like an unknown prop "'.concat(PA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Pi = function(an, so) {
        var gn = Wr(), mt = an.generateAndInjectStyles(so, gn.styleSheet, gn.stylis);
        return U.NODE_ENV !== "production" && Hn(mt), mt;
      }(EA, pe);
      U.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(Pi);
      var Hi = st(z, Ve);
      return Pi && (Hi += " " + Pi), pe.className && (Hi += " " + pe.className), go[Xi(ao) && !Rr.has(ao) ? "class" : "className"] = Hi, Z && (go.ref = Z), FA(ao, go);
    }(p, G, S);
  }
  f.displayName = I;
  var p = ut.forwardRef(f), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = B, p.componentStyle = Q, p.displayName = I, p.shouldForwardProp = l, p.foldedComponentIds = e ? st(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = E, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = e ? function(S) {
      for (var D = [], P = -1 * 7031 + 14 * -149 + 9118; P < arguments.length; P++) D[P - (311 + 7 * 1019 + -2481 * 3)] = arguments[P];
      for (var Z = 0, kA = D; Z < kA.length; Z++) vr(S, kA[Z], !0);
      return S;
    }({}, A.defaultProps, G) : G;
  } }), U.NODE_ENV !== "production" && (UC(I, E), p.warnTooManyClasses = /* @__PURE__ */ function(G, S) {
    var D = {}, P = !1;
    return function(Z) {
      if (!P && (D[Z] = !0, Object.keys(D).length >= 5226 * -1 + -5360 + 10786)) {
        var kA = S ? ' with the id of "'.concat(S, '"') : "";
        console.warn("Over ".concat(2637 * -2 + 1747 * -1 + 7221, " classes were generated for component ").concat(G).concat(kA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), P = !0, D = {};
      }
    };
  }(I, E)), Ja(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && vI(p, i, m), p;
}
function Jg(i, n) {
  for (var t = [i[-1 * -78 + -2035 + 1957]], e = 1 * 9575 + 7 * 715 + -4 * 3645, A = n.length; e < A; e += 3302 * -2 + 1 * -6577 + 78 * 169) t.push(n[e], i[e + (-6932 + -9478 * 1 + -1 * -16411)]);
  return t;
}
var Ug = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function mB(i) {
  for (var n = [], t = 2438 + 7322 * 1 + -9759; t < arguments.length; t++) n[t - (4 * 1823 + 5337 * -1 + -1954)] = arguments[t];
  if (Zt(i) || zt(i)) return Ug(xt(Jg(Li, Kt([i], n, !0))));
  var e = i;
  return -4919 * -1 + -3194 * 2 + 1469 === n.length && 22 * -72 + -2 * 1471 + 9 * 503 === e.length && typeof e[-5541 + -1 * -1375 + 4166] == "string" ? xt(e) : Ug(xt(Jg(e, n)));
}
function Lr(i, n, t) {
  if (t === void 0 && (t = Vt), !n) throw to(1 * 745 + -9167 + 8423, n);
  var e = function(A) {
    for (var o = [], r = 79 * 113 + -4357 * 1 + -4569; r < arguments.length; r++) o[r - 1] = arguments[r];
    return i(n, t, mB.apply(void 0, Kt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Lr(i, n, LA(LA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Lr(i, n, LA(LA({}, t), A));
  }, e;
}
var TI = function(i) {
  return Lr(yB, i);
}, on = TI;
Rr.forEach(function(i) {
  on[i] = TI(i);
});
U.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qn = "__sc-".concat(ft, "__");
U.NODE_ENV !== "production" && U.NODE_ENV !== "test" && typeof window < "u" && (window[Qn] || (window[Qn] = -4298 * -2 + -9329 + 733), -787 * 8 + -3311 + 9608 === window[Qn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qn] += 1);
const wB = on.div`
  position: relative;
`, DB = on.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class b extends Error {
  constructor(t, e) {
    super(t);
    y(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof b) return t;
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
    return new b(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof b) return t;
    const e = "An unexpected error has occurred";
    return new b(e);
  }
}
const Rn = {};
Rn.CONTINUE_DETECTION = "continue-detection", Rn.SWITCH_CAMERA = "switch-camera", Rn.TOGGLE_MIRROR = "toggle-mirror";
const Mt = Rn, Or = {};
Or.FIRST_FRAME = "first-frame", Or.FIRST_VALID_FRAME = "first-valid-frame";
const Fn = Or, PI = {};
PI.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Jr = PI;
var HI = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(HI || {}), zA = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(zA || {}), bB = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(bB || {}), Xt = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(Xt || {}), kB = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(kB || {}), SB = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(SB || {});
const De = {};
De.CANDIDATE_SELECTION = "candidate_selection", De.DOCUMENT_CENTERING = "document_centering", De.DOCUMENT_NOT_PRESENT = "document_not_present", De.DOCUMENT_TOO_FAR = "document_too_far", De.SHARPNESS_TOO_LOW = "sharpness_too_low", De.BRIGHTNESS_TOO_LOW = "brightness_too_low", De.BRIGHTNESS_TOO_HIGH = "brightness_too_high", De.HOTSPOTS_PRESENT = "hotspots_present";
const ze = De, Xe = {};
Xe.isPresent = ze.DOCUMENT_NOT_PRESENT, Xe.isNotSmall = ze.DOCUMENT_TOO_FAR, Xe.isNotOutOfBounds = ze.DOCUMENT_CENTERING, Xe.isSharp = ze.SHARPNESS_TOO_LOW, Xe.isNotDim = ze.BRIGHTNESS_TOO_LOW, Xe.isNotBright = ze.BRIGHTNESS_TOO_HIGH, Xe.noHotspots = ze.HOTSPOTS_PRESENT;
const Ur = {};
Ur.FRONT = "user", Ur.REAR = "environment";
const Ya = Ur, Yr = {};
Yr.AUTO_CAPTURE = "AUTO_CAPTURE", Yr.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const ko = Yr, Gt = {};
Gt.LOADING = "LOADING", Gt.ERROR = "ERROR", Gt.WAITING = "WAITING", Gt.RUNNING = "RUNNING", Gt.COMPLETE = "COMPLETE";
const XA = Gt, KI = { ...XA };
KI.DONE = "DONE";
const Tr = KI, jI = {};
jI.EYE_NOT_PRESENT = "eye_not_present";
const qn = jI, NA = {};
NA.CANDIDATE_SELECTION = "candidate_selection", NA.FACE_TOO_CLOSE = "face_too_close", NA.FACE_TOO_FAR = "face_too_far", NA.FACE_CENTERING = "face_centering", NA.FACE_NOT_PRESENT = "face_not_present", NA.SHARPNESS_TOO_LOW = "sharpness_too_low", NA.BRIGHTNESS_TOO_LOW = "brightness_too_low", NA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", NA.DEVICE_PITCHED = "device_pitched", NA.LEFT_EYE_NOT_PRESENT = "left_" + qn.EYE_NOT_PRESENT, NA.RIGHT_EYE_NOT_PRESENT = "right_" + qn.EYE_NOT_PRESENT, NA.MOUTH_NOT_PRESENT = "mouth_not_present", NA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", NA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const nA = NA, WA = {};
WA.isPresent = nA.FACE_NOT_PRESENT, WA.isNotPitched = nA.DEVICE_PITCHED, WA.isNotSmall = nA.FACE_TOO_FAR, WA.isNotLarge = nA.FACE_TOO_CLOSE, WA.isNotOutOfBounds = nA.FACE_CENTERING, WA.isNotDim = nA.BRIGHTNESS_TOO_LOW, WA.isNotBright = nA.BRIGHTNESS_TOO_HIGH, WA.isSharp = nA.SHARPNESS_TOO_LOW, WA.isLeftEyePresent = nA.LEFT_EYE_NOT_PRESENT, WA.isRightEyePresent = nA.RIGHT_EYE_NOT_PRESENT, WA.isMouthPresent = nA.MOUTH_NOT_PRESENT, WA.isMouthScoreNotTooHigh = nA.MOUTH_SCORE_TOO_HIGH, WA.isMouthScoreNotTooLow = nA.MOUTH_SCORE_TOO_LOW;
const GB = WA;
({ ...nA });
var NB = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(NB || {});
const Ar = { ...nA };
Ar.SMILE = "smile", Ar.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", Ar.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const Pr = {};
Pr.NEUTRAL = "NEUTRAL", Pr.SMILE = "SMILE";
const Ee = Pr, ZA = Tr, ne = {};
ne.CANDIDATE_SELECTION = "candidate_selection", ne.PALM_CENTERING = "palm_centering", ne.PALM_NOT_PRESENT = "palm_not_present", ne.PALM_TOO_FAR = "palm_too_far", ne.PALM_TOO_CLOSE = "palm_too_close", ne.SHARPNESS_TOO_LOW = "sharpness_too_low", ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ne.DEVICE_PITCHED = "device_pitched", ne.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const ye = ne, me = {};
me.isPresent = ye.PALM_NOT_PRESENT, me.isNotPitched = ye.DEVICE_PITCHED, me.isNotSmall = ye.PALM_TOO_FAR, me.isNotOutOfBounds = ye.PALM_CENTERING, me.isNotDim = ye.BRIGHTNESS_TOO_LOW, me.isNotBright = ye.BRIGHTNESS_TOO_HIGH, me.isSharp = ye.SHARPNESS_TOO_LOW, me.isNotLarge = ye.PALM_TOO_CLOSE, me.isTemplateExtractionQualityHighEnough = ye.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...nA });
const En = {};
En.TOP_LEFT = "TOP_LEFT", En.TOP_RIGHT = "TOP_RIGHT", En.BOTTOM_RIGHT = "BOTTOM_RIGHT", En.BOTTOM_LEFT = "BOTTOM_LEFT";
const KA = {};
KA.CANDIDATE_SELECTION = "candidate_selection", KA.FACE_TOO_CLOSE = "face_too_close", KA.FACE_TOO_FAR = "face_too_far", KA.FACE_CENTERING = "face_centering", KA.FACE_NOT_PRESENT = "face_not_present", KA.SHARPNESS_TOO_LOW = "sharpness_too_low", KA.BRIGHTNESS_TOO_LOW = "brightness_too_low", KA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", KA.DEVICE_PITCHED = "device_pitched", KA.LEFT_EYE_NOT_PRESENT = "left_" + qn.EYE_NOT_PRESENT, KA.RIGHT_EYE_NOT_PRESENT = "right_" + qn.EYE_NOT_PRESENT;
const ae = KA, ge = {};
ge.isPresent = ae.FACE_NOT_PRESENT, ge.isNotPitched = ae.DEVICE_PITCHED, ge.isNotSmall = ae.FACE_TOO_FAR, ge.isNotLarge = ae.FACE_TOO_CLOSE, ge.isNotOutOfBounds = ae.FACE_CENTERING, ge.isNotDim = ae.BRIGHTNESS_TOO_LOW, ge.isNotBright = ae.BRIGHTNESS_TOO_HIGH, ge.isSharp = ae.SHARPNESS_TOO_LOW, ge.isLeftEyePresent = ae.LEFT_EYE_NOT_PRESENT, ge.isRightEyePresent = ae.RIGHT_EYE_NOT_PRESENT;
const Oi = qe(void 0);
Oi.displayName = "AppStateContext";
function he() {
  const i = fe(Oi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const _I = he;
var qI = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(qI || {});
const Hr = {};
Hr.SIMD = "simd", Hr.NO_SIMD = "no-simd";
const Yg = Hr, Kr = {};
Kr.Lower = "Lower", Kr.Higher = "Higher";
const Vn = Kr, vn = {};
vn.VISIBLE = "VISIBLE", vn.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", vn.HIDDEN = "HIDDEN";
const Zn = vn, jr = {};
jr.MOBILE = "MOBILE", jr.DESKTOP = "DESKTOP";
const Tg = jr;
(function(i, n) {
  function t(a, g, s, C, I) {
    return yA(g - -345, s);
  }
  function e(a, g, s, C, I) {
    return yA(g - -102, a);
  }
  function A(a, g, s, C, I) {
    return yA(s - -617, a);
  }
  function o(a, g, s, C, I) {
    return yA(C - -507, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(A("wqAh", -317, -327, -328, -323)) / 1 + parseInt(A("0$f%", -317, -303, -315, -304)) / 2 * (-parseInt(t(-64, -51, "zRqE", -35, -64)) / 3) + -parseInt(A("wqAh", -322, -340, -322, -334)) / 4 * (parseInt(o(-211, -199, -210, -195, "6Y(2")) / 5) + -parseInt(o(-227, -201, -211, -210, "P7J3")) / 6 + parseInt(e("gOGZ", 182, 171, 176, 168)) / 7 * (parseInt(o(-206, -205, -212, -199, "WM57")) / 8) + parseInt(e("j8%7", 194, 179, 208, 180)) / 9 * (-parseInt(A("P6D#", -331, -326, -315, -314)) / 10) + -parseInt(e("LL&z", 202, 197, 203, 194)) / 11 * (-parseInt(e("&uU2", 176, 191, 194, 160)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xn, 599370);
function VI(i, n, t, e, A) {
  return yA(e - -811, n);
}
function _r(i, n, t, e, A) {
  return yA(A - -191, e);
}
const zn = qe(void 0);
zn[_r(126, 93, 98, "P6D#", 111) + Pg(204, "H3v%", 234, 213, 221) + "e"] = Pg(259, "T7t[", 250, 249, 243) + ZI(-311, "zRqE", -296, -280, -297) + VI(-502, "Gkcj", -496, -513);
function yA(i, n) {
  const t = Xn();
  return yA = function(e, A) {
    e = e - (334 * -2 + -3 * -1054 + -2217);
    let o = t[e];
    if (yA.QFxotQ === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      yA.vKDZtz = C, i = arguments, yA.QFxotQ = !0;
    }
    const a = t[2464 + -7 * 1291 + -313 * -21], g = e + a, s = i[g];
    return s ? o = s : (yA.TSIyKn === void 0 && (yA.TSIyKn = !0), o = yA.vKDZtz(o, A), i[g] = o), o;
  }, yA(i, n);
}
function Xn() {
  const i = ["W7FcLYrOW4G", "BCoGW6dcRSkfef3cTaeMWQyjtq", "laddJwnZWQhcM8otwGuS", "mCoVWPWGWOOyaCkfWROZ", "aZRdQmk+WR7dPum", "FmkOWQqlFba0aG3cTSkEWRddMwu", "pCksEu7dH8kIsSompuxdTYz+", "WQddPmofa8oW", "l8ofkLBcHa", "laldI2r3W4hdGSoFDbyIW6u4", "nv44dfq", "W4T4WQj/W4yMzCkNDXyZ", "eCk2h8ksW58HwCo8", "EvVcIImR", "BCoOt8kRWP8", "FSo6W7ZdHuqaWRdcKL5+CgmP", "omkFmZfL", "bNRcRmo/W4hcMrtcLMuBcwlcGq", "p8obCSoWEfpdPbS", "fYFdQ8k7WOu", "eKS7WRJdLW", "W6lcTmk0w8oqF8k/WOBdHbq", "avBdQmkKW67dM1uKWOTwWQ3dSmkb", "nSkwF0ddGSkHsmo4agBdUbrR", "aSk+W77dUSkyWRn2tSkiW4JcPZhcRa", "WRBdJ2OO", "W4FcTJeqWRC", "zX9cw35BscBcOGi", "qmoUfCkkfq", "ASkyAmoeqG", "kSokW5OXWP7cOtpcIG", "WQbgumo8WRGEqCoD", "kINdVSkoDSk8mgbKW7m", "W7ucWQbhWPK", "lSkeW5W8WPPMkW", "ACoDAbroW5rmW5BdG8ky", "leftWQ7dMY/dIIxdIxy6v8krWPS", "zSkYW5W"];
  return Xn = function() {
    return i;
  }, Xn();
}
function Pg(i, n, t, e, A) {
  return yA(A - -68, n);
}
function ZI(i, n, t, e, A) {
  return yA(A - -577, n);
}
function oo() {
  const i = fe(zn);
  function n(o, r, a, g, s) {
    return ZI(o - 70, o, a - 467, g - 147, a - 1230);
  }
  if (i === void 0) throw new Error(zn[e(1283, 1287, 1272, "YE8[") + n("o$$O", 939, 936, 938) + "e"] + (n("wqAh", 957, 945, 944) + t("j8%7", 210, 213) + n("d$vq", 964, 959, 962) + A(-648, "MXFd", -651) + A(-671, "IUGD", -659) + t("z]i$", 217, 231) + n("PJpk", 931, 940, 956) + t("%t[4", 223, 242)));
  function t(o, r, a, g, s) {
    return _r(o - 76, r - 484, a - 265, o, a - 123);
  }
  function e(o, r, a, g, s) {
    return _r(o - 116, r - 284, a - 274, g, a - 1177);
  }
  function A(o, r, a, g, s) {
    return VI(o - 359, r, a - 223, a - -141);
  }
  return i;
}
const ht = (i) => i.length < -9974 * 1 + -1 * 3925 + -100 * -139 ? -248 * 28 + 9951 + -3007 : i.reduce((t, e) => t + e, 1339 * 4 + -2226 + -5 * 626) / i.length, Fe = (i) => Number.parseFloat(i.toFixed(3));
function RB(i) {
  const n = i.getContext("2d");
  n && n.clearRect(4660 + 1 * 5119 + -9779, 1662 * -3 + 73 * -56 + 1 * 9074, n.canvas.width, n.canvas.height);
}
const zI = 198 + -1 * -2823 + -3021 + 0.75, FB = 5 * -1776 + -6638 + 970 * 16, vB = -163 * -29 + 481 * -7 + -760, MB = -8024 + -4 * 1310 + 2 * 6632, WB = "dot-auto-capture-video", Ji = (i, n) => Math.min(i, n), XI = ({ height: i, width: n }, t) => {
  const e = Ji(n, i) * t, A = (n - e) / (11 * -4 + 2203 + -2157), o = (i - e) / (-3 * -3049 + 3391 * 2 + 3 * -5309), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, LB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = XI(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, OB = ({ height: i, width: n }) => {
  const t = Ji(n, i), e = t / (-1073 * -5 + -9846 * -1 + -15208) * 4;
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function JB(i, n) {
  const t = Ji(n.width, n.height);
  return Fe(i * t);
}
function UB({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, XI(t, zI);
}
function YB(i) {
  return LB(i, zI);
}
function TB(i, n) {
  return JB(i, n) * FB;
}
const PB = "7.7.0", HB = {
  version: PB
}, KB = -8941 * 1 + 1072 + 3939 * 2 + 0.8100000000000005, qr = {};
qr.max = 100, qr.min = 10;
const Hg = qr, jB = 720, _B = 1553 * 6 + -1 * 9550 + 24 * 18, qB = 10869 + -205 * 53, $I = "AES-CBC", A0 = "RSA-OAEP", VB = "SHA-256", ZB = "image/jpeg", zB = 4 * 1354 + -391 + -1 * 5017, XB = 12600 + 16 * -785, e0 = "/dot-assets", Kg = "dot_embedded_bg.wasm", Vr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), t0 = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Fe(t) : t)), Ta = () => HB.version, Pa = (i) => new URL(i).hostname.replace("www.", ""), o0 = () => Pa(window.location.href) === "localhost", ln = (i) => Object.entries(i).map(([n, t]) => encodeURIComponent(n) + "=" + encodeURIComponent(t)).join("&"), $B = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function AQ(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function eQ(i) {
  return i.at(-1) === "/" ? i.slice(-47 * -189 + -4 * 1999 + -1 * 887, -1) : i;
}
function n0(i) {
  return "" + eQ(i ?? "") + e0;
}
function yo() {
  return !1;
}
const tQ = () => "prod".toLowerCase() === "dev";
var Ue;
class So extends Array {
  constructor(t) {
    super();
    M(this, Ue);
    F(this, Ue, t);
  }
  get size() {
    return w(this, Ue);
  }
  pushFixed(...t) {
    if (t.length > w(this, Ue)) {
      const e = t.slice(-w(this, Ue));
      this.push(...e);
      return;
    }
    this.length === w(this, Ue) && this.splice(0, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(888 + -355 * 24 + -48 * -159);
  }
}
Ue = new WeakMap();
const i0 = (i, n, t = ZB) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), oQ = async (i) => i0(i, 328 * 4 + 3751 * 1 + -1 * 4973), nQ = async (i) => i0(i, -7636 + 8 * 967, "image/png"), r0 = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 9794 + -1 * 1856 + -7938, -54 * 137 + -8676 + 171 * 94, t.width, t.height), t;
}, a0 = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(985 * 5 + -1 * -887 + -5812, 0, i.width, i.height);
  return t;
};
async function iQ(i, n) {
  const t = r0(i, n);
  return nQ(t);
}
const g0 = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, er = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, g0(i, g, t);
}, mo = (i, n, t, e = 0) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 1 * -9421 + 1 * -3412 + 12840, 4341 + 379 * 23 + 13051 * -1), A.beginPath());
}, rQ = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, aQ = (i, n) => Object.values(i).every((t) => rQ(t, n));
function $n(i) {
  const { height: n, width: t } = OB(i), e = (i.width - t) / (1 * 5064 + 2 * 4923 + -3727 * 4), A = (i.height - n) / (3024 * -3 + 1429 + 7645), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function s0(i, n, t) {
  const { height: e, width: A } = t, o = Ji(i.width, i.height), r = A - o * n * (3624 + -146 * -49 + 3592 * -3), a = e - o * n * (97 * -2 + 37 * -173 + 1 * 6597), g = (i.width - r) / (3190 + -3188 * 1), s = (i.height - a) / (-5355 * -1 + 2294 * -1 + 1 * -3059), C = {};
  return C.shiftX = g, C.shiftY = s, C.width = r, C.height = a, C;
}
function Dt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Ha() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function jg() {
  return /Android/i.test(navigator.userAgent);
}
function Wt() {
  return /Firefox/i.test(navigator.userAgent);
}
function gQ() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const sQ = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function IQ() {
  return navigator.userAgent;
}
function cQ() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
(function(i, n) {
  const t = i();
  function e(g, s, C, I, E) {
    return IA(C - -601, I);
  }
  function A(g, s, C, I, E) {
    return IA(s - 820, g);
  }
  function o(g, s, C, I, E) {
    return IA(s - 132, E);
  }
  function r(g, s, C, I, E) {
    return IA(I - 41, C);
  }
  function a(g, s, C, I, E) {
    return IA(g - 225, s);
  }
  for (; ; )
    try {
      if (parseInt(r(499, 497, "bc)L", 503, 505)) / 1 * (-parseInt(r(522, 517, "f[(M", 520, 519)) / 2) + parseInt(r(497, 513, ")RnI", 508, 518)) / 3 * (-parseInt(o(610, 609, 607, 622, ")RnI")) / 4) + -parseInt(o(605, 618, 633, 618, "wBYG")) / 5 + -parseInt(o(592, 597, 594, 597, "z1x[")) / 6 * (parseInt(o(584, 596, 590, 610, "*]Li")) / 7) + -parseInt(r(522, 528, "jJX8", 528, 525)) / 8 * (parseInt(e(-111, -136, -123, "#@mH", -136)) / 9) + -parseInt(e(-118, -130, -120, "]w)H", -130)) / 10 * (parseInt(A("B]ln", 1305, 1320, 1289, 1293)) / 11) + parseInt(a(685, "W)W8", 685, 685, 696)) / 12 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ai, 449 * -2614 + -3 * 453347 + 3452845);
function Ai() {
  const i = ["raRdU8oSEW", "WP7dPXHGDatcP8kPW6P9bCom", "W5e1W7WFFeBcRabkfCk1trS", "W4FdNsldMCozmSoUkG", "WODjWPrDWOFcKmofWORdUmkuWPf0W4C", "AJ8ora", "W63dKt4deW", "CCoIxmkvW5VcUCk1hgNdHhneuSoA", "BdqcW6RdSCkcW61aW7m", "W5v/smkCW5BcM8o/", "uxfLW7lcQW", "W6hcOCktWOLrW4pdLq", "WQNdKmoDW6ZcMs3cVf5PW7/cNSo/", "DmoUaCo0WQtdMSoyxG", "WPPCaCk/WOacWQu", "W4pdKh3cSCkTxSowfX7dO2xdTq", "umkfWOSDWPpdSHP2z0FcOvqtsa", "DZ/dPMDv", "WQBdKmoEW6VcNIVcOfX/W5RcO8oN", "W4ldS8o+W457", "pSoCWQlcVJy", "kfpdLJXSgCksESokWQxcTSkciq", "a8k3fCoiW6RcMeq", "xSknWOOCWPxdTMCEAwlcUM8", "WP8ixmoMW4zzWOzZW4HayWi", "AtScWP3cU8oYWQjsW4FdOCoQWP5s", "WOZcIrHEDSoUW5zVcmk1W6rYWQO", "dqzmWO3cTSokWPK", "WRbOWPFdU8k2BCkeWQvi", "WP7dQHTGFWNdUSknW4Xbk8oowa", "W4BcJsddP8oHcmob"];
  return Ai = function() {
    return i;
  }, Ai();
}
function IA(i, n) {
  const t = Ai();
  return IA = function(e, A) {
    e = e - (5332 + 1 * 8361 + -1 * 13235);
    let o = t[e];
    if (IA.cPjosk === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      IA.hPOGUk = C, i = arguments, IA.cPjosk = !0;
    }
    const a = t[2953 * -1 + 720 + 2233], g = e + a, s = i[g];
    return s ? o = s : (IA.PTDFpO === void 0 && (IA.PTDFpO = !0), o = IA.hPOGUk(o, A), i[g] = o), o;
  }, IA(i, n);
}
function CQ({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = $(), A = t !== void 0;
  J(() => {
    async function g() {
      function s(E, B, l, d, x) {
        return IA(B - -860, l);
      }
      function C(E, B, l, d, x) {
        return IA(x - 655, l);
      }
      function I(E, B, l, d, x) {
        return IA(E - -822, l);
      }
      await n[I(-364, -352, "[%vG")](n0(i)), e(n[s(-372, -376, "7lCP") + C(1128, 1129, "6zK7", 1111, 1127) + C(1135, 1116, "GOGM", 1116, 1125) + "t"]());
    }
    g();
  }, [n, i, e]);
  function o(g, s, C, I, E) {
    return IA(C - 388, I);
  }
  const r = {};
  function a(g, s, C, I, E) {
    return IA(g - -427, C);
  }
  return r[a(36, 51, "Jsbf") + a(32, 26, "dTfa")] = t, r[o(860, 852, 861, "g)6a") + "sh"] = A, r;
}
(function(i, n) {
  function t(r, a, g, s, C) {
    return mA(r - 38, g);
  }
  function e(r, a, g, s, C) {
    return mA(r - 408, g);
  }
  function A(r, a, g, s, C) {
    return mA(g - 337, a);
  }
  const o = i();
  for (; ; )
    try {
      if (parseInt(t(497, 504, "*Wue", 490, 495)) / 1 + parseInt(t(484, 471, "o%*H", 488, 494)) / 2 + parseInt(A(800, "[dG[", 787, 786, 791)) / 3 + parseInt(t(477, 472, "z#[9", 476, 465)) / 4 + -parseInt(A(806, "P5xP", 800, 791, 807)) / 5 + -parseInt(A(779, "Jsc*", 785, 794, 772)) / 6 + -parseInt(e(853, 861, "7$]w", 864, 864)) / 7 * (-parseInt(A(779, "3EHN", 784, 778, 774)) / 8) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ei, -342419 + 27 * 38321);
function ei() {
  const i = ["AWu6BSo5WQlcOdhdNSouD01h", "W7ldPJLf", "FJZdLSoyW41bygWOmmkyxCkH", "WQjfASkgW7GwW53cHa", "W4Hpsf4UW5PSW6dcOdey", "yeP7W5NcV8kdv8oUefLoWPVcHq", "WOGjWPxcLg5mtw7cG8o+W5VcTLG", "W4eJlW", "WOiuWPCWW7TSW77dUq", "r8kknSosWPKTFNldSuRdPYX1", "WRFcHr7cO8knsq8vamkll353", "raGFAw3dOG/dKa4NWRJdU8ka", "W5JcVcBcMCkz", "WPpcT38FWOb/WPeUWQ7dSCocldu", "WOldTw7cICkxWPPbWQFcUCkXiSk4aW", "W4BcSvO", "iCopW754W4O", "ahNdLJ96WOhcHwBcQmkfD0v3", "BCoGzmosgG", "rSk4ifVcJfpdPWWJlCkqW4PB", "W5BcPLuBfW", "W5PZWR7dUIS", "DSknWQq9WObRE0tdS8oIyG", "yb12DK0", "WOFdOelcT3S", "tmoKWRVdLmobrKZdPmkxW6NdMum0"];
  return ei = function() {
    return i;
  }, ei();
}
function mA(i, n) {
  const t = ei();
  return mA = function(e, A) {
    e = e - (3295 * -2 + -10 * 536 + 12389);
    let o = t[e];
    if (mA.NNYJkt === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      mA.OVkxbZ = C, i = arguments, mA.NNYJkt = !0;
    }
    const a = t[5132 * -1 + -2016 + 7148], g = e + a, s = i[g];
    return s ? o = s : (mA.tNlimX === void 0 && (mA.tNlimX = !0), o = mA.OVkxbZ(o, A), i[g] = o), o;
  }, mA(i, n);
}
function BQ({ assetsDirectoryPath: i, children: n, bramble: t }) {
  const e = {};
  function A(B, l, d, x, Q) {
    return mA(B - -607, Q);
  }
  e[A(-150, -140, -146, -151, "ay^c") + "le"] = t;
  function o(B, l, d, x, Q) {
    return mA(Q - 702, B);
  }
  e[A(-158, -169, -148, -146, "O#!4") + E(1443, 1451, 1442, 1454, "L!H&") + A(-154, -153, -143, -157, "*Wue") + g("[dG[", -527)] = i;
  const { sunfish: r, crosshatch: a } = CQ(e);
  function g(B, l, d, x, Q) {
    return mA(l - -991, B);
  }
  const s = QA(() => ({ sunfish: r, crosshatch: a, bramble: t }), [r, a, t]), C = {};
  function I(B, l, d, x, Q) {
    return mA(B - -522, x);
  }
  function E(B, l, d, x, Q) {
    return mA(B - 982, Q);
  }
  return C[E(1437, 1436, 1436, 1440, "wsY*")] = s, C[g("DZOY", -533) + o("ay^c", 1155, 1143, 1158, 1154)] = n, k(zn[I(-62, -53, -75, "TcGq") + I(-78, -73, -73, "Ke0b")], C);
}
function ti() {
  var i = ["Fu0DW6nkW7ZdO8kgWQK", "WRpdVXm7dZFcT3u", "W4xdN8kZW5ddO8koWRpdO8k4zIzwW5m", "W6pcRaGcgCkXW7Gypq", "W57dGuhdTfFcN1KEg3RcQq", "W5lcLvfBv8oLWPJdMLNcIcjQ", "W6NcVeuCg0ldJvDAgmkO", "WPu5WQGoDuboWP4uWQNdSMrk", "WR/dLgjdBYWXW4O", "W5BcNIu9d8kLWRhdIq", "WRFdLXONnJyUW7VdLmoKnq", "DgdcPSkPfmk8W6Dqoq", "WRldVSkKqCo1eaOmW78", "WPy8WQ4mCuq8WO4pWRxdM1q", "ySosWQe9W6bakCo2", "WP7cGI/cKCo9u8krW5KBWRldSSkYW5K", "q1RcKSoCvmkYBJzXcGVdSa", "iJddPsBdHqD3DCow", "AmkDWOmryZVcL03cPW", "rLZcKSkdlmo/sXvQ", "W74ipmk/W5BdJCo5wCkvc8oXWPRcLG", "W6pcVeDCzNVdG2Ht", "jtddOKhcKJDSw8okWOVcSq", "fhOOmmkJW73cONm7cWVdJW"];
  return ti = function() {
    return i;
  }, ti();
}
function qA(i, n) {
  var t = ti();
  return qA = function(e, A) {
    e = e - (-4 * 49 + -515 + 1211);
    var o = t[e];
    if (qA.sCsMHs === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", l = "", d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, m = B.length; p < m; p++)
          l += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(l);
      }, a = function(I, E) {
        var B = [], l = 0, d, x = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      qA.eiqzkN = a, i = arguments, qA.sCsMHs = !0;
    }
    var g = t[-6 * -42 + 5364 + -216 * 26], s = e + g, C = i[s];
    return C ? o = C : (qA.RnWQMi === void 0 && (qA.RnWQMi = !0), o = qA.eiqzkN(o, A), i[s] = o), o;
  }, qA(i, n);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return qA(C - -661, E);
  }
  function e(g, s, C, I, E) {
    return qA(g - 879, C);
  }
  var A = i();
  function o(g, s, C, I, E) {
    return qA(s - -779, C);
  }
  function r(g, s, C, I, E) {
    return qA(I - 784, C);
  }
  for (; ; )
    try {
      var a = parseInt(o(-280, -274, "XyDY", -270, -275)) / 1 * (-parseInt(o(-278, -270, "9!hU", -280, -276)) / 2) + -parseInt(r(1302, 1300, "P2Qk", 1297, 1287)) / 3 * (parseInt(t(-165, -165, -160, -160, "pV9G")) / 4) + parseInt(o(-282, -276, "4Y)O", -274, -286)) / 5 + parseInt(r(1285, 1291, "k3Hn", 1295, 1286)) / 6 + -parseInt(t(-132, -143, -139, -143, "4^JO")) / 7 * (parseInt(e(1385, 1374, "(z#W", 1377, 1377)) / 8) + parseInt(r(1294, 1290, "vuFr", 1300, 1308)) / 9 * (parseInt(r(1292, 1287, "W&fP", 1291, 1293)) / 10) + parseInt(r(1294, 1300, "pV9G", 1303, 1291)) / 11 * (parseInt(e(1400, 1402, "xYmj", 1395, 1402)) / 12);
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ti, -146 * 2498 + 273578 + 1237 * 257);
const oi = qe(void 0);
oi.displayName = "TransactionCountingContext";
function Ka() {
  const i = fe(oi);
  if (i === void 0)
    throw new Error(`${oi.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const QQ = -6142 + -23 * -354;
class EQ {
  constructor(n) {
    y(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), QQ), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 400 && a.status !== 6 * 4 + 4879 * -1 + 5256 : !0;
  }
}
var Jt, ke, Ye, Ut, vo, Mo, Wo, Lo;
class I0 {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    M(this, Jt);
    M(this, ke);
    M(this, Ye);
    M(this, Ut);
    M(this, vo);
    M(this, Mo);
    M(this, Wo);
    M(this, Lo);
    F(this, Jt, t), F(this, vo, n), F(this, Lo, e), F(this, Mo, window.location.origin), F(this, Wo, "7.7.0");
  }
  async init(n) {
    if (F(this, Ye, this.shouldCountTransactions(n)), console.info("Transaction counting is " + (w(this, Ye) ? "enabled" : "disabled")), o0()) {
      F(this, ke, !0), F(this, Ye, !1);
      return;
    }
    if (!w(this, Ye)) {
      F(this, ke, !0);
      return;
    }
    if (F(this, Ut, w(this, Jt).transactionCountingToken), !w(this, Ut)) {
      console.warn("Transaction counting token is missing"), F(this, ke, !1);
      return;
    }
    F(this, ke, await w(this, Jt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !1 : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeTransactionReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeTransactionReportingEnabled : !1;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!w(this, Ye) || !w(this, ke)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = w(this, vo), e.id = w(this, Mo), e.version = w(this, Wo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = w(this, Lo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + w(this, Ut);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return w(this, ke) || !1;
  }
}
Jt = new WeakMap(), ke = new WeakMap(), Ye = new WeakMap(), Ut = new WeakMap(), vo = new WeakMap(), Mo = new WeakMap(), Wo = new WeakMap(), Lo = new WeakMap();
class lQ extends I0 {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const et = {};
et.FACE = "web-capture-face", et.DOCUMENT = "web-capture-document", et.MAGNIFEYE = "web-capture-magnifeye", et.SMILE = "web-capture-smile", et.PALM = "web-capture-palm", et.EYEGAZE = "web-capture-eyegaze";
const tt = et, Zr = {};
Zr.LIVENESS = "liveness", Zr.CAPTURE = "capture";
const Je = Zr, dQ = { [tt.FACE]: Je.CAPTURE, [tt.DOCUMENT]: Je.CAPTURE, [tt.MAGNIFEYE]: Je.LIVENESS, [tt.SMILE]: Je.LIVENESS, [tt.PALM]: Je.CAPTURE, [tt.EYEGAZE]: Je.LIVENESS }, xQ = dQ;
class uQ {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = xQ[e];
    switch (A) {
      case Je.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new I0(o);
      case Je.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new lQ(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function fQ(i, n) {
  const { crosshatch: t, bramble: e } = oo(), [A, o] = $(null);
  J(() => {
    if (!t) return;
    (async () => {
      const g = new uQ(), s = new EQ(n), C = g.create({ hwids: e.getHwids(), tokenHandler: s, transactionType: i });
      await C.init(t), o(C);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function hQ({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = fQ(t, n), A = QA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(oi.Provider, { value: A, children: i });
}
function pQ({ children: i, value: n }) {
  const { crosshatch: t } = oo(), { transactionCounting: e } = Ka(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Vn.Higher : Vn.Lower, o = QA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ k(Oi.Provider, { value: o, children: i });
}
class c0 extends $A {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new b("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === XA.ERROR ? null : this.props.children;
  }
}
y(c0, "contextType", Oi);
const yQ = on.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, mQ = on.div`
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
function wQ() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const DQ = CI(
  ({ detectionDetails: i, isImageMirror: n }, t) => wQ() ? (console.log(i), /* @__PURE__ */ k(Ae, { children: [
    /* @__PURE__ */ k(yQ, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ k(mQ, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), ni = qe(void 0);
ni.displayName = "AnalyticsContext";
function Ui() {
  const i = fe(ni);
  if (i === void 0)
    throw new Error(`${ni.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function bQ({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function kQ({ analytics: i, apiKey: n, redfin: t, countlyAppKey: e, crosshatch: A, bramble: o }) {
  const r = {};
  r.analytics = i, r.crosshatch = A;
  const a = bQ(r);
  return J(() => {
    a && a.init(e, o.getCustomerName(), n);
  }, [a, e, o, n]), J(() => {
    A && (console.info("Analytics is " + (a != null && a.shouldReportAnalytics(A) ? "enabled" : "disabled")), a && a.walleye(t, o.getCustomerName()));
  }, [a, o, A, t]), J(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function SQ({
  analytics: i,
  apiKey: n,
  children: t,
  countlyAppKey: e
}) {
  const { crosshatch: A, bramble: o } = oo(), { redfin: r } = he(), a = kQ({
    analytics: i,
    redfin: r,
    countlyAppKey: e,
    crosshatch: A,
    bramble: o,
    apiKey: n
  }), g = QA(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ k(ni.Provider, { value: g, children: t });
}
const ii = qe(void 0);
ii.displayName = "CameraServiceContext";
function C0() {
  const i = fe(ii);
  if (i === void 0)
    throw new Error(`${ii.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function B0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function tr() {
  return (await B0()).filter((n) => n.kind === "videoinput");
}
function Lt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function zr(i) {
  return i.getVideoTracks()[6678 + 1 * -4673 + -2005];
}
function wA(i, n) {
  const t = ri();
  return wA = function(e, A) {
    e = e - (9 * 184 + -7740 + 6559);
    let o = t[e];
    if (wA.KGcbvb === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      wA.kPuBUI = C, i = arguments, wA.KGcbvb = !0;
    }
    const a = t[0], g = e + a, s = i[g];
    return s ? o = s : (wA.EszBRH === void 0 && (wA.EszBRH = !0), o = wA.kPuBUI(o, A), i[g] = o), o;
  }, wA(i, n);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return wA(I - -371, g);
  }
  function e(g, s, C, I, E) {
    return wA(I - -475, g);
  }
  function A(g, s, C, I, E) {
    return wA(s - -562, g);
  }
  function o(g, s, C, I, E) {
    return wA(E - -936, g);
  }
  function r(g, s, C, I, E) {
    return wA(g - -948, s);
  }
  const a = i();
  for (; ; )
    try {
      if (parseInt(o("CD]x", -447, -456, -471, -453)) / 1 + -parseInt(A("9clv", -51, -38, -58, -65)) / 2 + parseInt(r(-472, "]CQ]", -458, -492, -484)) / 3 + parseInt(r(-455, "$9ZM", -461, -467, -469)) / 4 + parseInt(e("UM2W", -7, -2, 13, 31)) / 5 * (parseInt(r(-467, "v%Bm", -478, -472, -476)) / 6) + parseInt(A("Z)3E", -59, -54, -72, -62)) / 7 * (-parseInt(A("wml5", -83, -99, -91, -66)) / 8) + parseInt(o("Jvxq", -458, -433, -424, -441)) / 9 * (-parseInt(t("ij45", 152, 143, 142, 158)) / 10) === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(ri, -1 * -309057 + -8038 * 62 + 690057);
function GQ(i) {
  function n(r, a, g, s, C) {
    return wA(s - 40, a);
  }
  function t(r, a, g, s, C) {
    return wA(r - 539, g);
  }
  function e(r, a, g, s, C) {
    return wA(g - -233, a);
  }
  const A = new ArrayBuffer(i[t(1051, 1047, "b%Zv") + "h"]), o = new Uint8Array(A);
  for (let r = -2 * -3518 + -757 + 1 * -6279, a = i[n(532, "U]a^", 550, 538) + "h"]; r < a; r++)
    e(259, "U]a^", 266) !== t(1046, 1028, "K*CV") ? _0x14e50e[_0x2694e7] = _0x565955[e(253, "UM2W", 258) + e(260, "[3HB", 242)](_0x1d5c4a) : o[r] = i[n(526, "ij45", 538, 544) + e(248, "nXnv", 259)](r);
  return A;
}
function ri() {
  const i = ["WP3dPCohW7hdGCk4W7KaW7iCWRqW", "EMhdGSk3WQNdQh8FWP8+W4W", "WORcJCkrbmkN", "W4ZcQCkyuwjOoG", "WPnFW4BdP8oTW5RcH8k2", "cZrUoCkaW7/dJCkmWPC", "W5fLWQzEW6i", "FCk9ySoXW4TgiLGgctzg", "W6DdW6RdMhJcJe7dOSob", "WRWrWQJdVx0", "C27cS8oWWQW", "pCo9W5hdUCoC", "xSoYWOy6gSk6W5FdKbRcSYS", "jdfm", "W4OKW5NdPbJcSCoAjf5kgH02", "dSkSW5r4Ba", "dMJdOCk7za", "W74DWQ5bWPeQv05KWRPpCCkS", "bSklxMZdGqX2", "yMqjW7ewkmkNtmk7W6FcJsZcVa", "WQjWkSk1W7BcTSkDemoSW67cL1e", "WPDXWP3cLui", "jtlcN8oGW6G", "jZVcNSouW7u", "lCoSW5RdRq", "W5VcJmoKDw/dQ8oQWRu8W4aaWR1v", "oZCAlhNdLSodhSkfWP7cUWO", "nxS3WRCfW6bIWQOHW4mXsxe", "WP3cShFdLmoU", "W7mXA8oMWO8", "kSo2W5ldUmox", "umkkC0FdKG", "zgCbW7ivjmkMD8kPW7RcRspcGq", "xSklz8kBWOxcOSo6eLJdM8kADq", "W6xcMwnSWQu", "WPPDWRBcGmkFWOFcR8kBW6PgWP/cTq", "pcGYFHS", "W4/dQfddSSoUlSomwW", "zahdQ0dcHa"];
  return ri = function() {
    return i;
  }, ri();
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return _(I - 438, C);
  }
  function e(g, s, C, I, E) {
    return _(C - -263, g);
  }
  function A(g, s, C, I, E) {
    return _(I - 600, E);
  }
  function o(g, s, C, I, E) {
    return _(C - 751, E);
  }
  function r(g, s, C, I, E) {
    return _(s - 643, E);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(A(1068, 1049, 1058, 1070, "IkeG")) / 1 * (parseInt(o(1205, 1208, 1215, 1224, "IkeG")) / 2) + -parseInt(o(1198, 1161, 1184, 1204, "T5o5")) / 3 * (-parseInt(e("7z&F", 248, 221, 234, 196)) / 4) + parseInt(A(1062, 999, 1024, 1031, "uM)M")) / 5 + -parseInt(A(1037, 1048, 1018, 1042, "RZK]")) / 6 * (parseInt(t(899, 883, "atfl", 900, 868)) / 7) + -parseInt(t(905, 887, "MDuC", 887, 892)) / 8 * (parseInt(o(1181, 1191, 1198, 1203, "A5tU")) / 9) + parseInt(e("qxf4", 211, 193, 169, 197)) / 10 * (parseInt(e("7z&F", 184, 164, 178, 158)) / 11) + -parseInt(r(1065, 1071, 1082, 1062, "0hSx")) / 12 === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(ai, -1 * -1081221 + -234523 + -111932);
async function NQ() {
  const i = {};
  function n(C, I, E, B, l) {
    return _(I - -291, l);
  }
  function t(C, I, E, B, l) {
    return _(l - 556, E);
  }
  function e(C, I, E, B, l) {
    return _(B - -636, I);
  }
  i[s(114, 84, 107, "xma5")] = $I, i[t(954, 1e3, "YWa)", 1001, 985) + "h"] = 256;
  const A = await window[t(998, 998, "f3lu", 983, 1007) + "o"][n(146, 159, 149, 161, "xPcB") + "e"][n(182, 168, 195, 188, "T5o5") + o("M&V%", 477, 445, 452) + "y"](i, !0, [n(141, 153, 167, 163, "uM)M") + "pt", s(122, 148, 91, "$5o$") + "pt"]);
  function o(C, I, E, B, l) {
    return _(B - 14, C);
  }
  const r = Uint8Array[t(967, 992, "7z&F", 1016, 993)](Array(-8 * 166 + -6837 * -1 + -1831 * 3)[o("R%5S", 511, 486, 486)](1 * 9139 + 1 * 5799 + -14938)), a = window[s(115, 111, 145, "YWa)") + "o"][n(199, 186, 208, 209, "oNp5") + e(-180, "HduH", -187, -170) + o("IkeG", 472, 462, 467)](r), g = {};
  g[s(118, 117, 140, "xPcB")] = A;
  function s(C, I, E, B, l) {
    return _(C - -353, B);
  }
  return g.iv = a, g;
}
async function RQ(i) {
  const { iv: n, key: t } = await NQ(), e = {};
  e[s(659, 686, "CER^", 686)] = $I, e.iv = n;
  const A = await window[s(744, 700, "gUot", 732) + "o"][s(729, 696, "jVoy", 699) + "e"][I(759, 814, 772, 783, "[SO%") + "pt"](e, t, i), o = await window[a(105, 127, "M&V%") + "o"][g(691, 714, 701, "xPcB", 719) + "e"][s(661, 697, "k&b*", 680) + a(128, 129, "BNed")](I(843, 838, 827, 828, "qxf4"), t), r = {};
  r[s(685, 677, "jwSJ", 688) + "ge"] = A, r[C(1451, 1453, 1461, 1462, "sw4T")] = o;
  function a(E, B, l, d, x) {
    return _(E - -353, l);
  }
  function g(E, B, l, d, x) {
    return _(x - 269, d);
  }
  function s(E, B, l, d, x) {
    return _(d - 256, l);
  }
  function C(E, B, l, d, x) {
    return _(E - 977, x);
  }
  r.iv = n;
  function I(E, B, l, d, x) {
    return _(d - 343, x);
  }
  return r;
}
async function FQ(i) {
}
function _(i, n) {
  const t = ai();
  return _ = function(e, A) {
    e = e - (5771 + -2174 * -2 + -9697);
    let o = t[e];
    if (_.ZCfwQz === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      _.zBxWlS = C, i = arguments, _.ZCfwQz = !0;
    }
    const a = t[458 * -6 + -7559 + 937 * 11], g = e + a, s = i[g];
    return s ? o = s : (_.CZAary === void 0 && (_.CZAary = !0), o = _.zBxWlS(o, A), i[g] = o), o;
  }, _(i, n);
}
function ai() {
  const i = ["W78/qSk4WRO", "WQvbEstdMCk2WO9gW5hdQMRcJMa", "WRzvW6NcQH8", "WOJdOmoeumkXeZnXWONdNCouWORcMG", "xJrzgmoABGC", "iNzFuSoCWP91s8k0", "xs0oW6XphqBdUHa", "W49eWOXZAG", "WO/cP8ofWQG", "WRjvl8onW4y", "WRbjW7pcQbi", "lN1CyCoTWP5Ur8kx", "WOdcK8oz", "zvhcS8oI", "WQagW5BcJgZdIaRcISo/iI/cVa", "WRxcJtO", "WPlcJYVdOqy", "s2XgWRLG", "W7mxouBcJW", "CSolW6eXha", "WQypWRxdJslcVJlcSq", "W6RdMNjjfSkhywug", "kKVdUmk0", "WR/cTSouWOJcVCktW6dcJmkWWRJcMmkrW6q", "WQ3dKZVcSa", "jSktW5qUnmknWRtdOW", "WQDgW6C", "xKldMmkw", "WRXkW6dcTrK", "WP/dOCo6ymoZ", "WPKBCmk6", "mghdSmkO", "jSkqWRz1vmoOW4VcGmkQWPNcKmoGiNG", "lGqZWRhdTZNdSY4LfmkdWPhdIG", "WR1comoAW4y", "axLrW44", "WQv7cCk/qJWxW6tcJmo8n8ocW7a", "W6FdOCkvW4JdQa", "WQ9JgmoUW7/dQmkZdc9/W7HT", "W6FdTcVcVs4", "WRRcPhhdRgVcP306W7ZdRSoXW6KwCa", "WQz1BCoKj15OW6e", "CCoxW60U", "W4GwWQqNW5O", "jCkDWRb1uCoVW4VdPSklWP/cQCoriW", "W67dVYBcQcm", "W4PBcMnZECkTWRij", "WOZcLuH7krFcLa", "E8kOlCoZEq", "W7iTwmo7dW", "WONdRmoOE8oT", "zCktwSkCla", "qgRcTmoPbCofW4hdImkP", "ymo6ECkAtG", "dapcGmoeWQLnW481W7b4A8kD", "WPJcG8ocnmk1", "xfZdOSkrW5O", "DCkuqCkyna", "EYmyB8oK", "WOpcNmkE", "WO7dP8obu8k0f0HfWOtdUCoKWQS", "W6qxW4FcQbiMW7Kl", "WQRcOYzB", "W4OqWRGCW4S"];
  return ai = function() {
    return i;
  }, ai();
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return cA(s - -607, E);
  }
  const e = i();
  function A(g, s, C, I, E) {
    return cA(s - -856, g);
  }
  function o(g, s, C, I, E) {
    return cA(I - 492, C);
  }
  function r(g, s, C, I, E) {
    return cA(E - -496, g);
  }
  function a(g, s, C, I, E) {
    return cA(C - 120, I);
  }
  for (; ; )
    try {
      if (parseInt(o(777, 816, "8DWx", 802, 834)) / 1 * (parseInt(o(846, 822, "KjWd", 812, 822)) / 2) + -parseInt(r("GiDi", -258, -218, -217, -236)) / 3 * (parseInt(t(-287, -320, -279, -344, "xl9l")) / 4) + parseInt(A("q$ww", -522, -515, -561, -554)) / 5 * (-parseInt(r("$OW%", -124, -119, -150, -163)) / 6) + parseInt(r("oH7]", -161, -207, -226, -183)) / 7 * (parseInt(A("$L$C", -591, -550, -602, -603)) / 8) + parseInt(r("h3!O", -170, -214, -194, -199)) / 9 * (parseInt(A("2RKe", -554, -583, -571, -597)) / 10) + -parseInt(r("j@!W", -274, -227, -214, -246)) / 11 + -parseInt(a(434, 472, 423, "6@(q", 438)) / 12 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(si, 50909 * -6 + 578465 + 410259);
const _g = 9470 + 1394 * -5, qg = -4772 * -1 + -6339 * -1 + -7611, Q0 = 8 * -130 + -21 * -279 + -4817, E0 = 165 * -30 + -4725 + -1935 * -5 + 0.5, l0 = {};
l0[rA(1303, 1303, 1286, 1291, "Pjxq")] = 1280;
const d0 = {};
d0[DA(370, 404, 376, "RZ(4")] = 720;
const x0 = {};
x0[vA(1058, 1044, 1030, 1012, "j@!W")] = 60;
const Mn = {};
Mn[DA(376, 342, 372, "(sU9")] = l0, Mn[bA(752, 713, 781, "yzl%") + "t"] = d0, Mn[bA(736, 732, 691, "%%7q") + bA(725, 709, 674, "(uY]")] = x0;
const u0 = {};
u0[RA(-548, -588, "xl9l")] = 1920;
function DA(i, n, t, e, A) {
  return cA(i - 122, e);
}
const f0 = {};
f0[DA(399, 414, 416, "%%7q")] = 1080;
const Wn = {};
Wn[vA(1019, 1027, 1016, 986, "3u0Q")] = u0, Wn[vA(1055, 1005, 1052, 1085, "DwZS") + "t"] = f0, Wn[DA(445, 462, 430, "GiDi") + bA(756, 732, 779, "#qxi")] = 30;
const h0 = {};
function cA(i, n) {
  const t = si();
  return cA = function(e, A) {
    e = e - (-9371 + 15 * 641);
    let o = t[e];
    if (cA.qKcHsO === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      cA.lHBIZy = C, i = arguments, cA.qKcHsO = !0;
    }
    const a = t[-65 * 41 + 6379 + 2 * -1857], g = e + a, s = i[g];
    return s ? o = s : (cA.srGxsZ === void 0 && (cA.srGxsZ = !0), o = cA.lHBIZy(o, A), i[g] = o), o;
  }, cA(i, n);
}
h0[vA(1038, 1049, 1048, 1062, "DwZS")] = 1;
const p0 = {};
p0[vA(1029, 1031, 1051, 1015, "$OW%")] = 1;
function vA(i, n, t, e, A) {
  return cA(i - 767, A);
}
const y0 = {};
y0[rA(1310, 1307, 1318, 1349, "^ZO^")] = 1;
const gi = {};
gi[rA(1265, 1338, 1308, 1283, "DwZS")] = h0, gi[RA(-552, -581, "0kCT") + "t"] = p0;
function rA(i, n, t, e, A) {
  return cA(t - 994, A);
}
gi[rA(1315, 1302, 1313, 1280, "AlWQ") + rA(1298, 1386, 1339, 1332, "oH7]")] = y0;
const m0 = {};
m0[RA(-624, -588, "xl9l")] = 1;
const w0 = {};
w0[rA(1221, 1230, 1262, 1246, "(sU9")] = 1;
const D0 = {};
D0[RA(-585, -612, "KjWd")] = 1;
function si() {
  const i = ["pCoZdgldQW", "W6hcGciHWPe", "W4O6WQ0DeG", "CrxcPSkbFq", "uSoqrIug", "W4azW7lcT8kn", "WP7dMmkAW5hdSa", "WO/dImkCW47dPq", "ywenW6FdI8ohW6FdNYS", "WQKWo8olaJhcHSkAtmk+WQm", "k8o/fW", "W4hdNmoKsmkr", "ANlcRmkRW4y", "WQ7cTaC7eW", "W6ZdSufTsXNcGCoUveTuaa", "WOLPpCoJFa", "W59ihtFdVW", "BXJcP8kuEq", "xSofWRihW7a", "umojW4D+", "WQVcHaddSqu", "osjaW6tdQa", "DH/cRCkAgq", "Dr3cPmkquW", "rWqlhSke", "W51LnmoeEK7cUq", "CNGYWO3cVq", "Db3cTSkCEG", "FSkNWPHVDa", "WOPMWQH5kW", "qcmBc8kh", "W4GdW6/cQW", "W5e9yCkIpbddMSk4WO5REttdOW", "uSofzduN", "DqJcHSkazW", "W41+W5Srvq", "aW5aWQdcGCoQm8oglW", "WQBcMqJdTrK", "WO90ya", "nmkcWO9f", "g8kzWQJdHSom", "W4qvW7RcU8kx", "WR9gWO3dJvu", "nf7dRSonrMNcHCkKWQu5W74", "W4n+bGldVq", "z8kuDr1V", "eSkifhicuxGnaCkf", "WOa6xhtcOCozW495W5uivtO", "xfOrWQ7cTa", "yb3cRSkzDW", "W5O/tG", "WPaBWPBcMGHIWPVcSCkdW7fJ", "WPDMd8kDWPVdMCoWC0bwWPHzWOy", "d8knWO9t", "oCkBwLe", "mCkvc8kbWPu", "nLu5W5K", "W5FcJZiWWOS", "mCkdWOW", "nIddP8kjW4K1W7VcOu4", "WPbyWQ7dQmosbt7dL1fRbG", "gSoZpMBdUG", "gSkuW78FW503W5BcL8oj", "WRNcLqxdPHK", "Fw42WOhcTa", "W5WLuSoVW4i", "m1VdQ8kukwhcS8k6WOe", "W6xcHsKI", "W7hdGWKmW44", "h1vFsCoEx8o8W6TCW6aN", "c8krfSkd", "lmo+aJyI", "W753B8kwvG", "ybpcVSkyba", "tCohWQ0TW7a", "r8oxzIe2", "nCkjWPjrya", "W4NcVMFdOSov", "A8oiw8oqW43dM8kbkSo8WRSo", "jSk0WPC", "W7ZdP8keW6/cNG", "jSkKWOJdI8oM", "WPdcLCkZgCowW7rwW7OAW73cMdy", "WOW1WQ0Tm1VcSG", "c0eJW4G", "DhlcSSkAW6u", "kKW4W5O", "oZ5d", "y2acWQtcUSkMW5ldOcWUvmoA", "W4WWca", "WOLSsv/dISk+lIxcPq", "jSoQeCoG", "W4aJsmoCW44", "WO51FxW", "FSofWRil", "zCktCJr7", "WRpcTay", "DwRcL8kqW40", "W5K5wmoAW4C", "CSkEFrn6", "WOHOW7TpDGhdKqO0WOLxWR7dN8oE", "t8osW7NcKSkpWPj1csrFaSkmWRmr"];
  return si = function() {
    return i;
  }, si();
}
const Ln = {};
Ln[vA(1014, 975, 966, 1061, "6@(q")] = m0, Ln[rA(1312, 1342, 1321, 1312, "(uY]") + "t"] = w0, Ln[bA(743, 760, 737, "Q&2(") + vA(1088, 1059, 1072, 1065, "0kCT")] = D0;
const Eo = {};
function bA(i, n, t, e, A) {
  return cA(i - 421, e);
}
Eo[RA(-610, -617, "m(8$")] = Mn, Eo[vA(1041, 1038, 1005, 1009, "(sU9") + RA(-595, -626, "Q&2(")] = Wn, Eo[bA(763, 774, 725, "#pMu")] = gi, Eo[bA(674, 647, 652, "q$ww") + DA(431, 468, 435, "(uY]")] = Ln;
const Ii = Eo, ot = {};
ot[vA(1047, 1050, 1083, 1060, "xvGd") + rA(1236, 1326, 1279, 1329, "(sU9") + rA(1243, 1233, 1250, 1238, "Pjxq")] = _g, ot[DA(379, 407, 375, "#qFw") + RA(-577, -559, "mpjl") + bA(694, 699, 717, "^ZO^") + bA(710, 667, 714, "jl)k")] = Ii[bA(691, 658, 669, "m(8$")], ot[RA(-611, -594, "tNyy") + RA(-585, -555, "LVi0") + DA(394, 401, 434, "yTN1") + vA(1049, 1002, 1054, 998, "Pjxq")] = Ii[DA(458, 446, 473, "8DWx") + DA(452, 443, 456, "LVi0")], ot[bA(716, 682, 712, "GdVt") + DA(429, 415, 464, "#qxi")] = Q0, ot[rA(1295, 1288, 1273, 1225, "BL$w") + RA(-572, -609, "(sU9") + rA(1284, 1280, 1275, 1275, "KjWd") + rA(1371, 1307, 1320, 1317, "h3!O") + vA(1068, 1038, 1102, 1109, "6@(q")] = E0, ot[vA(1025, 980, 984, 992, "#qFw") + RA(-602, -575, "jL7%") + "Ms"] = _g;
const nt = {};
nt[rA(1276, 1253, 1257, 1284, "8DWx") + bA(705, 698, 704, "h3!O") + bA(707, 757, 751, "yHoJ")] = qg, nt[rA(1341, 1337, 1290, 1260, "RZ(4") + vA(1013, 1017, 1056, 1028, "8DWx") + vA(1031, 1010, 1043, 1024, "$L$C") + bA(666, 635, 677, "$L$C")] = Ii[rA(1382, 1378, 1331, 1307, "#qxi")], nt[RA(-566, -587, "(sU9") + bA(746, 724, 721, "oH7]") + RA(-593, -544, "6@(q") + rA(1279, 1295, 1284, 1308, "(uY]")] = Ii[vA(1022, 1018, 1024, 1016, "h3!O") + rA(1361, 1345, 1332, 1294, "yTN1")], nt[rA(1273, 1341, 1310, 1260, "6@(q") + DA(466, 512, 422, "jl)k")] = Q0, nt[rA(1208, 1199, 1238, 1242, "RZ(4") + DA(391, 396, 365, "oH7]") + bA(688, 737, 694, "GdVt") + DA(373, 411, 345, "jL7%") + DA(462, 462, 455, "j3M4")] = E0, nt[RA(-571, -621, "c&pE") + DA(430, 411, 434, "3u0Q") + "Ms"] = qg;
function RA(i, n, t, e, A) {
  return cA(n - -887, t);
}
const Xr = {};
Xr[DA(427, 453, 458, "ND9x")] = ot, Xr[RA(-583, -569, "3u0Q")] = nt;
const vQ = Xr;
(function(i, n) {
  function t(g, s, C, I, E) {
    return CA(s - -762, g);
  }
  function e(g, s, C, I, E) {
    return CA(g - -946, E);
  }
  function A(g, s, C, I, E) {
    return CA(s - 825, I);
  }
  function o(g, s, C, I, E) {
    return CA(E - 798, C);
  }
  function r(g, s, C, I, E) {
    return CA(g - 786, C);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(t("qrS[", -229, -291, -141, -138)) / 1 * (parseInt(o(1513, 1525, "L8@T", 1391, 1449)) / 2) + parseInt(A(1523, 1486, 1530, "6Grq", 1503)) / 3 + -parseInt(r(1441, 1448, "7!n]", 1536, 1493)) / 4 + -parseInt(t("XT)C", -243, -315, -254, -241)) / 5 * (parseInt(o(1297, 1278, "kRy8", 1293, 1300)) / 6) + -parseInt(e(-377, -315, -294, -412, "@eWe")) / 7 + -parseInt(r(1389, 1420, "l7LE", 1478, 1404)) / 8 + parseInt(t("JpUy", -96, -28, -71, -119)) / 9 * (parseInt(e(-314, -278, -225, -395, "jYVF")) / 10) === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(ci, -4305 * -58 + 1191246 + -793 * 1027);
function hA(i, n, t, e, A) {
  return CA(n - 263, t);
}
function se(i, n, t, e, A) {
  return CA(e - -992, A);
}
function CA(i, n) {
  const t = ci();
  return CA = function(e, A) {
    e = e - (-1 * -8241 + -2903 + -29 * 167);
    let o = t[e];
    if (CA.uGKMnc === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      CA.rbWneB = C, i = arguments, CA.uGKMnc = !0;
    }
    const a = t[11423 + 1 * -11423], g = e + a, s = i[g];
    return s ? o = s : (CA.WBZyZc === void 0 && (CA.WBZyZc = !0), o = CA.rbWneB(o, A), i[g] = o), o;
  }, CA(i, n);
}
function MA(i, n, t, e, A) {
  return CA(e - 371, t);
}
function ci() {
  const i = ["j0yry1u", "edXLF8oO", "W4NdKJXeWRK", "j1OtW4LH", "jr3dKc1b", "dmkyjSoUW4G", "nmkuW5BcSSod", "W7hcR8k7swC", "W4G+WRWRWOO", "CSkZweO", "kb/cPWDz", "asnRFCop", "a8kOW4BcOCop", "uCoUcSo+yd3dSgeOWQ3dRxhcRG", "pHhdR8kPdG", "WQGHW7FcRSk1", "W5VdTr/dMmk9", "jWlcTXLD", "WQLyW4ZdHJC", "eSkMW4hcVmop", "AmovB8ouW5i", "fqNdOSk7wW", "WR3cUmkcFCon", "WOxcKSk6WQWp", "f8kxW6FcV8oO", "vCkcxCkRWQ7dSrdcK8kutqGbW6JcMW", "W4xdJmkNrMS", "WO1uW4z+pW", "qYDfW5O", "fCkbW43cUCow", "W6ZcLv7cGNS", "amksW7D/oW", "W6tcQmkMqgy", "WPb9gSkTrSoBWRPfW7nvqmolDW", "bmkkW6zooW", "FSkGt1NdVq", "bqpcVqzm", "b8oqcSoOW6m", "avXzEri", "bCkZxmk9iW", "W73cL1hcN2W", "W70mWP00FSkRWRavvmkxW5lcImop", "aeFdUr9o", "WQJcVSkmzSoR", "WReLW6ZcPCkJ", "z8kkDeei", "u8oxWQO+BmkJW4PfpXRcP8oXuG", "WQfvW5S", "eKvxztK", "nf0lF3K", "W6VcTMRcML4", "na3cUHTm", "zSkRrCoKEW", "rcHsW4ldKa", "mfuBW5bL", "WOFdSLzfW58", "W4SptCoKDa", "W6Kdxv4k", "caZdUmkRwW", "W4mGrSoYfq", "a8ksjSo6W4G", "vCoZr8oNCq", "zmokDCoJW4m", "bCk1W5RcVCoj", "WOy6FmoRCa", "W6FdVXVdH8kR", "vmoRcSo8ywpcV2OhWOpdVa", "Cv7dQ0upW7dcQSkGb8oUcK4/", "hGZdPmkEsG", "WOddS8oMWRhcVW", "g8ksoSo8W4G", "aHxcHWn5", "W68xwMeq", "WR8eCcuP", "gYvZ", "wCoSxCoqya", "WQddJmoxWRxcVq", "cCk0W6FcPmoE", "ymkHAhKx", "tdv5W5JdKa", "C8kUzxSg", "WRpcVmkzs8oG", "nhGgW6Hv", "gW3dUCknDG", "BCkYB0hdSG", "bf/dVb9E", "W79GWQKLW5a", "gmkNb8oWW68", "WR7dV8oLWRBcVW", "E8oFC8obW4K", "fmohc8ojW74", "W7zHWOiWW5y", "bSkkW7Dvia", "bI4Jaa", "WQnEW5PQlG", "WQJdMCoYWQZcTW", "WQlcMSkQtMrUpCoj", "WOpdQLnfW48", "WQnHW71Gka", "WRlcUSkDACoW", "iLCqW4S", "eSotdmo2W6q", "W6HGWQK9W4W", "WPCrCa", "cIqsat8", "ESkKwetdRG", "WR0xzqO9", "WQ9wW40", "W4WMWRKRWPO", "b8kOxCk8hW", "WRCrCciT", "WQ7dUCoSWQVcQG", "DmkSxSovya", "cGZdPCkx", "jbRdKcnh", "xCoaCmkVWORcVxC/W5rSWRm", "cJy2hZG", "irVdJtb7", "W79nWOG", "WO7cHgarW7/cVfLIamohW6ddK8oQ", "CSobkmktW5S", "cSkbkCoXW4K", "W5qlvSoTzq", "nmkwW5dcSSoe", "WR7dOSoqWR3cVq", "W4hdKmoeWP/dGCo+W5BdKh3cMmozqq", "WQqQW6hcPCk1", "sJzcW6RdKa", "WQZdOSoTWQRcLG", "W4eHtmoTba", "omkkoCkwWP9nW5PNtH4JW7dcM8od", "BsNdUSojaG", "t8kGAW7dVG", "WPm1CCoRzG", "ySk7wmo5Fq", "sYLb", "C8kSwmo3EW", "Cmk4wq", "CJZdVmoRca", "W5hcPSo/Cc4", "WPf4gSkUr8orW7TaW6Tvu8on", "d1HctZ8", "WPuHDSotCa", "BCk3q0xdQa", "W7HHWOO4W5a", "kxRcGt3cNq", "EcldVmoDba", "e8kfW7TJlG", "cCoceCoEW7i", "WOdcHCktW4hcHq", "mtnqzCoC", "W4JdGZfjWR4", "W5yVs8oYaW", "gaRdJcLe", "WOShgYWL", "eKLFzs4", "W4VcOmo6Erq", "W74lgrGusr4", "W5ddHCkgDhu", "WQanW6e", "oeWwBhq", "vIncW6pdMG", "C8k6yKex", "ySovBW", "tbRdUSk4E8kpW5u", "lWpcVq", "vmkIFIpdTq", "oqtdP8k3cq", "k8kqW43cVCo5", "nf8bF1a", "W4tcS8oZxZW", "WR4oDImP", "WQFcICk7WQ0Z", "ECoBAmojW5i", "nmo8eSkMo8odW4/cR8oibMZcOsq", "p0yGzKu", "cG8NbW", "ygG+W69miYy", "W6WLt8oVeG", "W5KPWRqRWOW", "WOFcLSkyW47cGG", "W58PWRqPWOS", "W6dcUmkZswe", "ESkGs0FdQq", "a8kVr8kIiW", "WQv4W5i", "WQRdSSkmuY8", "BSomymolW5m", "uhRdNcbNxaO", "WQpdSSkixsK", "Fc/cTr3cMXD6W5C"];
  return ci = function() {
    return i;
  }, ci();
}
function te(i, n, t, e, A) {
  return CA(t - -565, e);
}
function we(i, n, t, e, A) {
  return CA(e - 515, i);
}
var Rs, Fs, vs, Se;
class MQ {
  constructor(n, t = {}) {
    M(this, Se);
    y(this, vs, []);
    y(this, Fs);
    y(this, Rs, {});
    function e(r, a, g, s, C) {
      return se(r - 121, a - 461, g - 441, r - 494, s);
    }
    this[o("L8@T", 509, 538, 583) + o("zdzq", 590, 523, 545) + A(513, 631, 625, "l7LE", 540) + "r"] = n, F(this, Se, vQ);
    function A(r, a, g, s, C) {
      return MA(r - 372, a - 277, s, C - -384);
    }
    function o(r, a, g, s, C) {
      return MA(r - 423, a - 433, r, s - -445);
    }
    this[e(27, -10, 26, "6Grq") + e(133, 145, 134, "aA1S") + o("LpWS", 538, 529, 599)](t);
  }
  async [(vs = MA(979, 1075, "us[e", 1034) + hA(765, 760, "@eWe"), Fs = se(-440, -299, -316, -359, "vTVI") + MA(936, 1079, "8MRT", 1024) + se(-329, -316, -316, -330, "g6do") + "r", Rs = te(-22, -21, -17, "2%Wm") + hA(836, 818, "2%Wm") + "s", MA(952, 984, "q^#O", 915) + MA(833, 813, "ix9Z", 886) + hA(874, 808, "LpWS"))]() {
    if (!yo()) {
      if (g(1660, 1541, "IEm*", 1633) !== g(1680, 1554, "#jFl", 1626)) return;
      _0x5d2aff = this[a(1284, 1297, 1332, "]h#M") + g(1636, 1681, "9^L^", 1643) + A(583, 644, 657, "us[e", 646) + "r"][a(1479, 1324, 1387, "INNy") + a(1238, 1309, 1298, "jYVF") + g(1591, 1467, "Bl7r", 1498) + "s"](this[g(1555, 1655, "jUGt", 1609) + A(683, 688, 737, "INNy", 715) + "s"], _0x5149e9), _0x286969--;
    }
    function n(C, I, E, B, l) {
      return we(E, I - 347, E - 18, l - -1016);
    }
    function t(C, I, E, B, l) {
      return hA(C - 22, C - -516, l);
    }
    const e = await this[a(1377, 1559, 1473, "A3v2") + "st"](w(this, Se)[g(1556, 1652, "us[e", 1562)]);
    function A(C, I, E, B, l) {
      return we(B, I - 290, E - 263, l - -458);
    }
    const o = await this[a(1334, 1326, 1389, "zdzq") + "st"](w(this, Se)[A(788, 707, 642, "RJ(@", 693)]), r = {};
    function a(C, I, E, B, l) {
      return MA(C - 125, I - 289, B, E - 424);
    }
    function g(C, I, E, B, l) {
      return hA(C - 263, B - 735, E);
    }
    r[a(1303, 1369, 1363, "s%Z8") + a(1379, 1513, 1434, "nR]Y")] = e[n(55, -75, "Gwo2", -25, 13) + "ge"], r[t(427, 463, 462, 497, "b3p&") + A(549, 499, 647, "mB74", 578)] = o[g(1506, 1476, "LpWS", 1569) + "ge"];
    const s = r;
    this[t(364, 319, 300, 314, "IEm*") + t(327, 370, 306, 291, "g6do")][g(1611, 1624, "zdzq", 1647)](s);
  }
  async [hA(835, 770, "#apS") + "st"](n) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: a } = n;
    let g = -1 * 5219 + 4261 + -958 * -1, s = r, C, I = this[l(-354, -344, -309, -355, "s%Z8") + l(-220, -228, -198, -263, "zdzq") + B(-136, 3, "qrS[", -90, -77) + "r"][B(-107, -86, "RWEr", 55, -25) + l(-359, -300, -325, -323, "k@V2") + l(-231, -226, -123, -199, "#jFl") + "s"](this[x("L8@T", 1123, 1114, 1205) + Q("JpUy", -465, -397, -454, -470) + "s"], o);
    for (let p = -7 * 670 + -1611 * 6 + 4 * 3589; p < r; p++)
      if (B(-165, -80, "8MRT", -86, -157) !== d(-29, "Gwo2", 16, 90, 57)) {
        if (g > A * a)
          if (x("L8@T", 1265, 1223, 1287) !== d(59, "2%Wm", 90, 184, 97)) this[Q("JpUy", -489, -453, -362, -432) + d(95, "#apS", 227, 60, 153) + "s"] = _0x3fa622;
          else {
            s = p;
            break;
          }
        const m = await this[x("rImy", 1231, 1215, 1290) + d(103, "lP11", 281, 278, 193) + Q("L8@T", -298, -455, -403, -382) + x("l7LE", 1191, 1109, 1174)](I, t);
        if (m[Q("8MRT", -487, -422, -398, -448)] && (d(162, "jYVF", 103, 192, 99) === l(-248, -274, -237, -301, "#apS") ? { deviceId: _0x5d3b8f } = _0x5b886c : this[B(-73, -54, "mB74", -45, -3) + l(-386, -308, -409, -365, "k@V2") + l(-369, -328, -197, -291, "vTVI") + "r"][l(-358, -335, -265, -267, "us[e") + l(-174, -163, -235, -223, "0qxt") + B(87, 23, "p@!d", 86, 13) + d(130, "b3p&", 176, 135, 159) + "or"](m[Q("LpWS", -431, -370, -392, -347)]) && (B(-99, 33, "l7LE", -28, -48) === x("]h#M", 1136, 1078, 1159) ? (I = this[Q("nR]Y", -387, -431, -330, -346) + Q("Bl7r", -403, -319, -345, -414) + Q("@eWe", -442, -485, -457, -393) + "r"][x("g6do", 1261, 1227, 1215) + Q("kRy8", -569, -440, -514, -489) + l(-366, -296, -411, -330, "gt6A") + "s"](this[d(248, "aA1S", 146, 269, 184) + Q("q^#O", -546, -553, -390, -462) + "s"], e), p--) : _0x4d24f0[x("XT)C", 1262, 1278, 1252)]())), m[l(-283, -370, -428, -348, "k7fu") + l(-154, -208, -282, -228, "b3p&")])
          if (d(253, "b3p&", 248, 121, 175) !== B(-80, 33, "LpWS", -87, -35)) {
            _0x488c4e(_0x4b2819);
            const G = {};
            return G[B(-144, -149, "2%Wm", -16, -56)] = _0x5a3e1f, G;
          } else ({ deviceId: C } = m);
        g += m[B(41, -18, "zdzq", -41, -51) + B(-144, -177, "L^iN", -68, -125)] || -4070 + 16 * 608 + -2 * 2829;
      } else return;
    const E = Math[d(128, "Gwo2", 114, 93, 73)](g / (s || 11423 + 1 * -11422));
    function B(p, m, G, S, D) {
      return se(p - 184, m - 23, G - 92, D - 337, G);
    }
    function l(p, m, G, S, D) {
      return te(p - 460, m - 141, S - -317, D);
    }
    function d(p, m, G, S, D) {
      return te(p - 369, m - 427, D - 102, m);
    }
    this[l(-230, -264, -302, -307, "9^L^") + d(152, "2%Wm", 9, 175, 92) + "s"] = this[x("JpUy", 1200, 1123, 1196) + l(-382, -368, -280, -297, "Gwo2") + x("A3v2", 1218, 1198, 1264) + "r"][x("k7fu", 1225, 1243, 1195) + Q("l7LE", -451, -418, -490, -416) + d(181, "gt6A", 1, 63, 89) + "s"](this[B(-18, 39, "@eWe", 74, 10) + l(-345, -357, -409, -340, "0qxt") + "s"], {}, C);
    function x(p, m, G, S, D) {
      return te(p - 276, m - 210, S - 1229, p);
    }
    function Q(p, m, G, S, D) {
      return we(p, m - 399, G - 209, D - -1503);
    }
    const f = {};
    return f[Q("#jFl", -329, -486, -422, -421) + "ge"] = E, f;
  }
  async [MA(1041, 937, "IOUu", 979) + we("ix9Z", 927, 949, 1016) + te(44, 106, 107, "XT)C") + MA(804, 919, "l7LE", 881)](n, t) {
    function e(I, E, B, l, d) {
      return we(E, E - 254, B - 301, l - -1227);
    }
    function A(I, E, B, l, d) {
      return we(B, E - 416, B - 143, E - -86);
    }
    function o(I, E, B, l, d) {
      return hA(I - 92, l - 509, d);
    }
    const r = Date[o(1414, 1401, 1323, 1382, "]h#M")](), a = new AbortController(), g = setTimeout(() => {
      function I(B, l, d, x, Q) {
        return o(B - 142, l - 414, d - 379, x - -908, d);
      }
      function E(B, l, d, x, Q) {
        return o(B - 72, l - 290, d - 488, l - -1153, d);
      }
      E(218, 231, "aA1S") === I(486, 524, "RWEr", 498) && a[I(434, 349, "rImy", 437)]();
    }, t);
    function s(I, E, B, l, d) {
      return MA(I - 269, E - 495, B, I - -644);
    }
    function C(I, E, B, l, d) {
      return se(I - 24, E - 257, B - 45, E - 1352, d);
    }
    try {
      if (o(1333, 1375, 1369, 1295, "@eWe") === A(956, 1030, "gt6A", 1069, 1058)) {
        const { deviceId: I, mediaStream: E } = await this[C(997, 981, 1003, 1064, "qrS[") + C(976, 1024, 1061, 1060, "aA1S") + o(1286, 1332, 1433, 1362, "RJ(@") + "r"][A(988, 941, "W]21", 901, 938) + C(1059, 965, 1045, 890, "aA1S") + o(1247, 1275, 1332, 1337, "0qxt") + "m"](n, a[A(1137, 1053, "aA1S", 1052, 968) + "l"]), B = Date[o(1443, 1459, 1538, 1443, "us[e")]() - r;
        Lt(E), clearTimeout(g);
        const l = {};
        return l[A(1079, 1079, "8MRT", 1067, 1090) + e(-255, "JpUy", -258, -204, -273)] = B, l[A(1141, 1110, "TJ#L", 1062, 1107) + s(231, 159, "g6do", 324, 254)] = I, l;
      } else {
        const I = {};
        return I[e(-78, "Bl7r", -87, -35, -68) + C(1073, 1035, 1013, 969, "ix9Z")] = this[s(324, 354, "jUGt", 233, 359) + e(-93, "s%Z8", -193, -169, -190)], I[s(352, 326, "JpUy", 430, 366) + s(311, 391, "Bl7r", 316, 318) + "e"] = !1, I;
      }
    } catch (I) {
      if (s(345, 385, "RJ(@") !== o(1327, 1267, 1342, 1358, "Josb")) {
        clearTimeout(g);
        const E = {};
        return E[o(1361, 1349, 1322, 1413, "LpWS")] = I, E;
      } else this[s(348, 404, "qrS[") + s(285, 263, "IEm*") + s(371, 450, "q^#O") + "r"][o(1384, 1311, 1313, 1385, "2%Wm") + s(412, 467, "6Grq") + o(1380, 1287, 1358, 1351, "IEm*") + e(-92, "mB74", -33, -72) + "or"](_0xef9b1d[s(397, 402, "XT)C")]) && (_0x2ec477 = this[A(904, 957, "LpWS") + A(1040, 987, "IEm*") + A(1051, 1043, "#apS") + "r"][s(258, 232, "k7fu") + e(-196, "RWEr", -174, -149) + o(1372, 1321, 1368, 1359, "l7LE") + "s"](this[e(-119, "2%Wm", -210, -164) + C(964, 886, 858, 795, "q^#O") + "s"], _0x4aa31e), _0x2ac7--);
    }
  }
  [se(-550, -505, -407, -496, "7!n]") + hA(744, 817, "L^iN") + we("RWEr", 1095, 1033, 1098)](n) {
    function t(A, o, r, a, g) {
      return hA(A - 323, r - 643, g);
    }
    function e(A, o, r, a, g) {
      return te(A - 49, o - 73, a - -157, r);
    }
    Object[e(-110, 55, "E8JW", -40) + "es"](n)[t(1331, 1468, 1422, 1444, "nR]Y") + "ch"](([A, o]) => {
      const r = A;
      w(this, Se)[r] && (w(this, Se)[r] = { ...w(this, Se)[r], ...o });
    });
  }
  [hA(889, 911, "XT)C") + se(-531, -500, -484, -446, "l7LE") + hA(934, 892, "mB74")](n) {
    function t(e, A, o, r, a) {
      return hA(e - 143, o - -91, a);
    }
    this[t(688, 781, 738, 783, "Josb") + t(880, 854, 851, 781, "LpWS") + "s"] = n;
  }
  async [te(-39, -65, -59, "us[e") + MA(1050, 1049, "aA1S", 1031) + MA(908, 927, "#jFl", 941) + MA(961, 831, "0qxt", 884) + hA(917, 906, "RWEr")](n) {
    if (this[t(-162, -251, -318, "nR]Y") + a(643, "q^#O", 683)][r("b3p&", 1008, 1064, 1093) + "h"] === 3871 * 1 + 1 * -4379 + -4 * -127) return;
    function t(g, s, C, I, E) {
      return hA(g - 151, s - -1160, I);
    }
    function e(g, s, C, I, E) {
      return we(g, s - 274, C - 494, s - -539);
    }
    const A = this[a(826, "E8JW", 833) + r("A3v2", 1146, 1192, 1135)][a(737, "L8@T", 755) + "h"] - (6581 * -1 + -8086 + 14668), o = await FQ();
    function r(g, s, C, I, E) {
      return hA(g - 284, I - 203, g);
    }
    function a(g, s, C, I, E) {
      return we(s, s - 73, C - 441, C - -356);
    }
    this[a(722, "p@!d", 670) + e("IOUu", 569, 650)][A] = { ...this[a(683, "JpUy", 757) + e("W]21", 526, 530)][A], optSetting: o };
  }
  [se(-338, -317, -399, -383, "nR]Y") + se(-435, -556, -394, -487, "Gwo2") + te(-99, 33, -26, "RJ(@") + te(67, 2, -18, "]h#M") + MA(976, 812, "9^L^", 900)]() {
    function n(r, a, g, s, C) {
      return te(r - 51, a - 33, r - -296, a);
    }
    function t(r, a, g, s, C) {
      return te(r - 200, a - 163, a - 429, C);
    }
    const e = {};
    function A(r, a, g, s, C) {
      return hA(r - 263, C - 382, s);
    }
    e[o(-244, "zdzq", -149) + A(1234, 1211, 1324, "rImy", 1282)] = this[o(-117, "rImy", -201) + t(439, 402, 412, 451, "7!n]")];
    function o(r, a, g, s, C) {
      return se(r - 139, a - 5, g - 142, r - 191, a);
    }
    return e[n(-194, "E8JW") + A(1303, 1185, 1233, "Josb", 1221) + "e"] = !1, e;
  }
}
Se = new WeakMap();
function Ie(i, n, t, e, A) {
  return q(A - -864, t);
}
function SA(i, n, t, e, A) {
  return q(t - 271, n);
}
function Io(i, n, t, e, A) {
  return q(t - 723, i);
}
function ce(i, n, t, e, A) {
  return q(n - -847, A);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return q(g - -148, C);
  }
  function e(a, g, s, C, I) {
    return q(s - 909, I);
  }
  const A = i();
  function o(a, g, s, C, I) {
    return q(a - -650, C);
  }
  function r(a, g, s, C, I) {
    return q(C - -377, a);
  }
  for (; ; )
    try {
      if (-parseInt(r("zghW", 17, -11, -73, -150)) / 1 + -parseInt(o(-316, -385, -400, "pUmg", -416)) / 2 * (-parseInt(o(-190, -153, -98, "ms!y", -265)) / 3) + -parseInt(r("s&($", 185, 161, 121, 176)) / 4 + -parseInt(t(179, 150, 251, "6R&[", 122)) / 5 * (-parseInt(t(115, 196, 216, "A$XC", 295)) / 6) + -parseInt(r("rH*[", 4, -13, 93, 151)) / 7 + -parseInt(o(-223, -143, -195, "@Py!", -190)) / 8 * (-parseInt(e(1383, 1293, 1291, 1229, "hvBu")) / 9) + -parseInt(e(1366, 1424, 1350, 1259, "HfQS")) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ci, 714521 + -192471 * 2);
function q(i, n) {
  const t = Ci();
  return q = function(e, A) {
    e = e - 270;
    let o = t[e];
    if (q.UkJZjg === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      q.hkovVV = C, i = arguments, q.UkJZjg = !0;
    }
    const a = t[518 * -4 + -3876 + -1 * -5948], g = e + a, s = i[g];
    return s ? o = s : (q.NYXifs === void 0 && (q.NYXifs = !0), o = q.hkovVV(o, A), i[g] = o), o;
  }, q(i, n);
}
function Ci() {
  const i = ["W4BdQcFcHq", "W4RdTmk6ySoP", "yu3dK0m5", "oLmVWPTd", "W7uoW6lcOG", "wSojWPVdKsa", "WPTHxCkzsq", "BJRdJ8kQdW", "yXBdGG", "mWbC", "eGathmk4", "W60IWPn2iW", "pK4YWOno", "F8o2ofyb", "WQddNCkohay", "jczk", "WPtcK8kXW6VdQW", "faqGg8k5", "WQtcNqy", "sGLMhSkn", "WQtcNr9YW4O", "W6fNW6BcICo3", "W4bWW6lcJ8oM", "v8ooxmomxq", "W4WpfCoAxW", "W4qBw3FdRq", "W5pdQhjAWPS", "WO7cSuu7Ea", "qG1mumo4", "W5TItCoMWRy", "WRqKWQ4", "WQmrnKaV", "uCkpWR7cT3W", "EHjQhSkm", "WRNcUSoJzcm", "WPBdISkgiaa", "ASoIlv0H", "cNS1", "uWLmwSo8", "kL8/WRXo", "n8oio2Ourxi", "WQKKWQtdMMO", "W7mtoe18", "WRVcQSo1AJS", "W59iWQK", "xSkOW7GDeW", "ghhcUSk4WRm", "mW5hW4Ot", "WRRcTeqiFG", "WPGmfSk2W6NdGSkEASkPzLldQW", "W43dHYVdK8oy", "yXRdKmkOcq", "W74OW6G", "W5r6W6FcJ8oX", "W7xdI1OSWP3dH8o8W67dHxRcGdC2", "i8oxmHi", "W7NdIYJdQCo9", "FCo1kW", "WPRdJSk5DSkj", "W79cuSo1WP4", "ASo3h24x", "W4JdM8oKwmoa", "yqn6fCkb", "WPpcMSkIW6pdPG", "wmk/WRlcU04", "W61qWOHAW64", "W4tdOwDW", "W64hW4GKeq", "wqDp", "wG1csW", "W7ioW6i", "if85WOHo", "ctZdTmofsG", "W47dSsFcK1TaysK", "BSoZn0OK", "WQe8WPHaa3by", "W4hdUwm", "zSoxobrb", "W65EWP5JW6S", "W6VdQCktCSoO", "zCo6hNK", "W6VcUmo+", "W7eEW6Klma", "W4pcKSoIi8ozC8kiC2BcVmo8kSob", "W7GhBCoeWPC", "W53dLmo0wq", "jIpdNG", "WQ/cRq/cOMi", "W5WTW4SJfa", "WONdISkpjHC", "tSkJWQlcOfy", "W542W44Vfq", "W4PUWQtdOmkT", "W7XoWO5dW6u", "mMNcLSo1uSkucIf4kYbSWQ4", "WOJdJSks", "WQNcVmo/Ati", "a8k3W6C", "DIWjW40u", "WQxcSq0", "W6FdTCkxCmoV", "tmo1lemK", "W4TrsCoGWRG", "faqKb8kO", "W5xdN8o1qSoe", "eGqG", "FmoUiemL", "BSoTex8x", "CCk3pmoAba", "W5mkvhldQW", "WPFdOSk0", "D8kkBLLwWQRdS8k6mCo3bCoQWP4", "WO7cRq/cS2u", "W5aaWPzSoq", "W5i1BY9T", "WPuSWQBdLmk9o0fEomkYsColja", "z8k7jmovfq", "CL9FySkJ", "xerNwCkH", "WP3dHCkZDa", "aSoCiqKc", "y8o7ia", "W49XqW", "W5aosbHw", "W68pBSogWPy", "WPRcTeqiFG", "W7ifzCoOWOe", "DdRdI8kIeq", "WOpdS8k/z8kZ", "WRBcQ8oaiCkZdCkEWQpdTaBcNCob", "W74zW7JcTui", "yxddNKuG", "frmQg8kV", "W7eAnfT5", "sSk+WR/cUfS", "BSo7ba", "WPddHmkIzCka", "itNdHmoPaq", "ASo3WPFdSsq", "yCogrSorxW", "p249WQFcJqxcR2i", "nConlGWe", "W493qCoJWQ8", "yJRdKmkKba", "W5ZdIh5QWRW", "W6KpW5KJha", "WPPRWPT5t2GCWOlcGYnGW78", "qSkRW74HeG", "WQVcKSoSzJ0", "W53dLmoLz8om", "WRqXWRddKW", "lrldM8o4tW", "W7RdGsVdH8oF", "W6NdRmkgDmoL", "uebcx8k+", "eWqSg8k7", "WPldHSkpkHK", "W6bEWODPW6q", "W6NdJthdTCoF", "tCoKWP/dHYy", "WPZcJq8", "s8owxSoBtG", "BCowsCoruG", "zSo0mfTG", "p8ouva", "AdNdGSoPaq", "W7anW4Kzhq", "W4pdImoKWR/cSCkqFGVdTmoUWQ0", "W64klvfR", "W5RdOmo0y8og", "yfddHeKU", "ELPQu8kM", "BcL1fmkA", "h8o1WOO", "qNRdTMia", "keGoWPLo", "FgdcNCkOfCoWCqyYeeS", "W4tdPI3cPCo7", "wa1iwmoM", "FCk8eSopfq", "WRFdM8kzkHC", "kYxdImo8vq", "WPTNvSkUsW", "W5yyWP93na", "WPddO8kcpai", "W4uAAgZdVa", "ng3cLmo9vCkzCGznpZ1x", "x8o7FL3cSa", "Fq1fvSoV", "nWzkW4ei", "W55KWRVdP8k6", "W4JdLCo4rCor", "W5VdO3v9WOW", "W64CWP5PW7m", "WR8IWPddK2S", "vN1I", "W5j8W7dcG8oQ", "W4eYBJG", "W5TJWQldVmkT", "CtZdI8kenG", "WQhcMGzPW50", "wIzYW67dISkjh8o2W4v6WQKMeG", "WONcR2uBDa", "nmoCoG8x", "gCkWWR7dTGlcSXi5", "i8o8oWum", "W4FdTSkhFCoL", "W50VW7WJhG", "WPdcQGlcSY0", "W6jLWQ7dVhNdK0lcRG", "W5PurSo8WP0", "nqzaW4mu", "p8kxfCknc1BcImktW6VdOmohW6JdUq", "WO3dVvmizq", "iH1lW4ut", "iLq4WPTz", "WRKIWRJdK2e", "rc0pW4Cf", "W7nyW73cJSoJ", "nSowjaKv", "WQxcVr9+W4C", "WOXSxCk5ua", "W7VdNXJcTSoK", "W4ZdRdZcICoQ", "WRSkW500WRjTW4RcRSkzzae8W60", "baiGfmkO", "WRKKWPNdK3K", "DNKoW4Cq", "rv1Ix8kN"];
  return Ci = function() {
    return i;
  }, Ci();
}
function bt(i, n, t, e, A) {
  return q(n - 319, i);
}
class WQ {
  [ce(-443, -424, -379, -374, "@Py!") + Ie(-513, -468, "hPB!", -473, -480) + SA(490, "asBE", 595)](n) {
    const t = zr(n), e = t == null ? void 0 : t[a(1435, 1400, "r2Xx", 1340) + g(329, 307, 373, "SkFS") + "s"]();
    function A(s, C, I, E, B) {
      return SA(s - 204, C, s - 224);
    }
    function o(s, C, I, E, B) {
      return Ie(s - 268, C - 222, C, E - 86, I - -82);
    }
    function r(s, C, I, E, B) {
      return ce(s - 418, C - 206, I - 80, E - 496, B);
    }
    function a(s, C, I, E, B) {
      return SA(s - 215, I, E - 643);
    }
    function g(s, C, I, E, B) {
      return SA(s - 445, E, s - -255);
    }
    if (!(e != null && e[a(1470, 1349, "rH*[", 1359) + "t"]) || !(e != null && e[A(972, "ks@L")]) || !(e != null && e[A(843, "c2Bi") + o(-536, "uW7G", -593, -560)])) {
      if (g(485, 386, 506, "zghW") === g(348, 295, 235, "n1g7")) return _0x47737e instanceof _0x305d8b && _0x34e184[o(-678, "hPB!", -638, -607)] === g(357, 392, 431, "e@ee") + A(868, "r2Xx") + o(-456, "eygC", -457, -496) + a(1383, 1212, "uCOs", 1322);
      throw new b(g(504, 563, 475, "@Py!") + g(339, 280, 337, "pUmg") + g(337, 445, 342, "@Py!") + A(920, "t6S$") + o(-671, "vr2y", -561, -510) + o(-645, "@6#P", -636, -616));
    }
    if (t) {
      if (r(-235, -265, -307, -279, "uCOs") !== a(1189, 1283, "^H!o", 1294)) return e[o(-506, "HfQS", -539, -540) + a(1448, 1432, "c2Bi", 1345)];
      _0x2123c2[r(-116, -209, -233, -219, "pXmg") + g(460, 381, 522, "@Py!")](_0x6a4cf0);
    }
  }
  [SA(719, "pUmg", 610) + Ie(-506, -568, "!7e]", -605, -534) + bt("hPB!", 693) + bt("m(1d", 754)]() {
    function n(a, g, s, C, I) {
      return SA(a - 259, I, a - -28);
    }
    const t = document[n(664, 606, 572, 675, "gAcI") + o("s&($", 75, -111, -23) + e(1487, "EwV9", 1379, 1332)](r(599, 631, "^!y6", 714));
    t[A(-531, -639, -429, -555, "ks@L") + A(-500, -615, -529, -579, "^!y6")] = !0;
    function e(a, g, s, C, I) {
      return Ie(a - 101, g - 269, g, C - 320, s - 1819);
    }
    function A(a, g, s, C, I) {
      return Io(I, g - 278, a - -1705);
    }
    t[n(569, 527, 680, 546, "CgyL")] = !0, t[e(1395, "CgyL", 1384, 1315) + e(1270, "uW7G", 1284, 1318) + "e"] = !0, t[r(479, 591, "W!32", 572)][e(1406, "uCOs", 1395, 1455) + e(1467, "t6S$", 1410, 1396)] = e(1393, "gAcI", 1385, 1290) + e(1441, "$Z!j", 1418, 1477), t[A(-583, -529, -565, -645, "r2Xx")][e(1427, "lVvo", 1421, 1310) + "ty"] = "0", t[r(687, 745, "hPB!", 842)][A(-503, -606, -586, -604, "c2Bi") + o("r2Xx", 52, -113, -53) + e(1474, "hPB!", 1372, 1465)] = e(1445, "s#DU", 1346, 1318);
    function o(a, g, s, C, I) {
      return ce(a - 451, C - 461, s - 143, C - 82, a);
    }
    t[r(830, 813, "(cDg", 719)][n(513, 598, 461, 566, "ms!y")] = o("gAcI", 153, 158, 82), t[o("ks@L", -124, -9, -94)][r(756, 766, "!7e]", 766) + "t"] = e(1506, "pXmg", 1439, 1400);
    function r(a, g, s, C, I) {
      return Ie(a - 429, g - 349, s, C - 60, g - 1181);
    }
    return t;
  }
  async [ce(-437, -479, -469, -434, "eygC") + ce(-654, -553, -554, -601, "rH*[") + Io("m(1d", 1045, 1137) + SA(739, "HfQS", 676)](n, t, e) {
    return new Promise((A, o) => {
      function r(I, E, B, l, d) {
        return q(l - -569, B);
      }
      function a(I, E, B, l, d) {
        return q(B - -26, I);
      }
      function g(I, E, B, l, d) {
        return q(I - -17, d);
      }
      function s(I, E, B, l, d) {
        return q(I - 845, E);
      }
      function C(I, E, B, l, d) {
        return q(B - -241, d);
      }
      if (a("$Z!j", 204, 276) === a("ks@L", 324, 393)) {
        const I = () => {
          function l(p, m, G, S, D) {
            return a(G, m - 52, m - 900);
          }
          function d(p, m, G, S, D) {
            return a(D, m - 233, S - -704);
          }
          function x(p, m, G, S, D) {
            return s(S - -219, p);
          }
          function Q(p, m, G, S, D) {
            return s(m - -51, p);
          }
          function f(p, m, G, S, D) {
            return a(D, m - 409, p - 811);
          }
          if (Q("eygC", 1210) === l(1205, 1180, "gAcI")) this[d(-192, -163, -243, -243, "lVvo") + x("SkFS", 923, 1135, 1023) + "eo"](n, t);
          else {
            const p = _0x59a66f[d(-265, -236, -331, -347, "SkFS") + d(-347, -443, -415, -441, "n1g7") + d(-392, -330, -369, -437, "9!cQ")](Q("uW7G", 1180));
            return p[Q("vr2y", 1279) + Q("@Py!", 1073)] = !0, p[x("lVvo", 1047, 988, 937)] = !0, p[Q("pXmg", 1099) + x("e@ee", 907, 877, 897) + "e"] = !0, p[f(1268, 1347, 1168, 1290, "gAcI")][Q("s&($", 1171) + Q("s#DU", 1251)] = f(1250, 1332, 1310, 1140, "hvBu") + x("SkFS", 1224, 1228, 1118), p[Q("5Ukl", 1139)][f(1061, 1085, 1022, 1088, "uW7G") + "ty"] = "0", p[x("!7e]", 963, 1112, 1046)][f(1134, 1050, 1110, 1217, "iwNJ") + x("m(1d", 947, 946, 986) + f(1258, 1218, 1211, 1237, "pUmg")] = Q("9!cQ", 1261), p[l(1228, 1173, "s&($")][d(-318, -286, -292, -340, "r2Xx")] = l(1126, 1205, "2(vp"), p[f(1278, 1236, 1277, 1390, "@Py!")][f(1179, 1148, 1236, 1158, "A$XC") + "t"] = Q("Ykbe", 1116), p;
          }
        }, E = {};
        E[r(-286, -324, "rH*[", -292)] = !0, e == null || e[a("mdtY", 341, 367) + C(72, -18, 66, 123, "iwNJ") + r(-276, -85, "SkFS", -165) + "r"](g(341, 246, 239, 430, "HfQS"), I, E), (async () => {
          function l(p, m, G, S, D) {
            return s(p - -1174, m);
          }
          function d(p, m, G, S, D) {
            return C(p - 430, m - 486, G - -427, S - 47, m);
          }
          function x(p, m, G, S, D) {
            return C(p - 74, m - 65, G - -533, S - 23, m);
          }
          function Q(p, m, G, S, D) {
            return C(p - 301, m - 433, D - 764, S - 139, m);
          }
          function f(p, m, G, S, D) {
            return a(p, m - 292, m - 747);
          }
          if (Q(1002, "^!y6", 1016, 943, 924) !== d(-350, "2(vp", -372, -309)) _0x5baf72 == null || _0x5baf72[Q(880, "t6S$", 930, 954, 938) + f("pUmg", 1030) + l(69, "e@ee") + Q(769, "#cWs", 929, 902, 878)](l(11, "mdtY"), _0x22e584), _0x2e1624(_0x190320), _0x16657e(_0x5ce860);
          else try {
            if (l(-54, "uW7G", -20, -146, -141) === d(-217, "pUmg", -209, -307, -306)) await n[l(124, "$Z!j", 129, 63, 104)](), e == null || e[x(-472, "CgyL", -483, -451, -455) + x(-442, "A$XC", -336, -289, -332) + d(-254, "^!y6", -326, -358, -259) + Q(961, "s&($", 997, 1043, 965)](x(-410, "c2Bi", -418, -497, -437), I), A();
            else {
              const p = _0x5753c7(_0x48016b), m = p == null ? void 0 : p[l(84, "$Z!j", 197, 129, 95) + d(-460, "SkFS", -355, -363, -401) + "s"]();
              if (!(m != null && m[l(7, "t6S$", 103, -102, -54) + "t"]) || !(m != null && m[d(-146, "asBE", -214, -129, -220)]) || !(m != null && m[f("^H!o", 1102, 1109, 1171, 1006) + f("rH*[", 1218, 1203, 1323, 1322)])) throw new _0xdc29ee(d(-245, "!7e]", -262, -178, -347) + l(89, "CgyL", 134, 133, 59) + l(37, "ms!y", -17, 31, -17) + d(-387, "2(vp", -351, -390, -347) + Q(895, "m(1d", 958, 928, 894) + f("jzTk", 1090, 1198, 1144, 1098));
              return p ? m[d(-364, "n1g7", -340, -236, -235) + d(-122, "HfQS", -182, -232, -163)] : void (2 * 2139 + -937 * -2 + -1 * 6152);
            }
          } catch (p) {
            if (Q(903, "Ykbe", 870, 837, 933) === Q(707, "#cWs", 742, 875, 804)) return _0x380ec3[d(-298, "tn^T", -218, -135) + Q(980, "s#DU", 902, 966, 962)];
            e == null || e[x(-451, "s&($", -413, -474) + Q(958, "HfQS", 994, 810, 901) + f("2(vp", 1113) + x(-364, "iwNJ", -302, -304)](Q(1012, "9!cQ", 1019, 1037, 970), I), Lt(t), o(p);
          }
        })();
      } else _0x569315[a("iwNJ", 384, 422)](), _0xf87c10(_0xd25592), _0x7571db[r(-118, -39, "^!y6", -147) + "e"]();
    });
  }
  async [ce(-351, -357, -389, -453, "SkFS") + ce(-427, -501, -499, -532, "t6S$") + ce(-553, -509, -429, -584, "^!y6") + "m"](n, t) {
    const e = this[I(943, 849, "jzTk") + I(871, 771, "eygC") + I(891, 908, "Ykbe") + C(942, "ms!y", 888, 788, 850)]();
    function A(E, B, l, d, x) {
      return Ie(E - 40, B - 234, l, d - 43, x - 1599);
    }
    const o = await navigator[I(1047, 1046, "^!y6") + r(501, 530, "s&($", 474, 482) + "es"][I(887, 938, "@6#P") + r(463, 636, "hPB!", 579, 556) + "ia"](n);
    function r(E, B, l, d, x) {
      return SA(E - 107, l, x - -67);
    }
    const a = this[r(495, 408, "s#DU", 479, 492) + A(968, 1155, "uW7G", 947, 1047) + I(855, 859, "70Ji")](o);
    e[C(901, "hvBu", 798, 863, 856) + r(690, 584, "t6S$", 629, 660)] = o;
    try {
      if (r(613, 580, "@6#P", 636, 647) === C(697, "A$XC", 725, 841, 733)) await this[I(971, 1070, "@Py!", 959, 1074) + A(1107, 1219, "561d", 1042, 1146) + g(1098, 1206, 1084, 986, "hvBu") + C(794, "HfQS", 847, 830, 781)](e, o, t);
      else {
        const E = {};
        E[r(668, 734, "9!cQ", 680, 698)] = _0x55a6be, _0x5c22a5[A(992, 1020, "n1g7", 1066, 1063) + r(623, 512, "ms!y", 528, 522)] = E;
      }
    } catch (E) {
      if (C(728, "iwNJ", 727, 794, 703) !== g(1092, 1115, 978, 1046, "eygC")) b[I(906, 993, "^H!o") + g(1042, 1037, 993, 1088, "jzTk")](E);
      else {
        const B = { ..._0x25df98 }, l = B, d = { ...typeof l[I(925, 967, "uCOs")] == A(927, 924, "Ykbe", 1141, 1032) + "t" ? l[r(629, 478, "mdtY", 483, 583)] : {}, ..._0x2b3231 }, x = d;
        if (_0x28d972) {
          const Q = {};
          Q[g(1035, 924, 1051, 1109, "n1g7")] = _0x326812, x[I(983, 976, "(cDg") + g(1048, 951, 1016, 1037, "jzTk")] = Q;
        }
        return l[g(929, 1005, 821, 883, "m(1d")] = x, l;
      }
    }
    function g(E, B, l, d, x) {
      return bt(x, E - 327);
    }
    const s = {};
    function C(E, B, l, d, x) {
      return Ie(E - 276, B - 5, B, d - 141, x - 1240);
    }
    s[g(1137, 1200, 1136, 1038, "iwNJ") + r(553, 654, "vr2y", 613, 579) + "m"] = o, s[r(412, 620, "A$XC", 526, 505) + C(844, "A$XC", 751, 830, 771)] = a;
    function I(E, B, l, d, x) {
      return Io(l, B - 448, E - -152);
    }
    return s;
  }
  [SA(622, "tn^T", 674) + Io("zghW", 981, 1088) + "eo"](n, t) {
    n[e(-234, -259, -229, "asBE")](), Lt(t);
    function e(A, o, r, a, g) {
      return SA(A - 66, a, A - -808);
    }
    n[e(-252, -199, -241, "A$XC") + "e"]();
  }
  [bt("W!32", 656) + SA(660, "SkFS", 561) + SA(652, "zghW", 746) + Ie(-625, -544, "(cDg", -577, -521) + "or"](n) {
    function t(A, o, r, a, g) {
      return Ie(A - 319, o - 428, o, a - 10, r - 1847);
    }
    function e(A, o, r, a, g) {
      return Ie(A - 92, o - 364, a, a - 296, A - 1647);
    }
    return n instanceof DOMException && n[e(1170, 1143, 1273, "^H!o")] === e(1216, 1154, 1323, "EN7Y") + t(1287, "$Z!j", 1333, 1354) + t(1506, "@Py!", 1444, 1335) + t(1191, "Ykbe", 1302, 1387);
  }
  [ce(-410, -389, -443, -375, "r2Xx") + bt("@6#P", 756) + ce(-311, -413, -324, -430, "jzTk") + "s"](n = {}, t = {}, e) {
    function A(B, l, d, x, Q) {
      return bt(d, l - -650);
    }
    function o(B, l, d, x, Q) {
      return SA(B - 337, B, Q - -1233);
    }
    function r(B, l, d, x, Q) {
      return Io(x, l - 191, d - -1330);
    }
    const a = { ...n };
    function g(B, l, d, x, Q) {
      return SA(B - 272, l, d - 621);
    }
    const s = a, C = { ...typeof s[E(-512, -365, -467, "#cWs", -422)] == r(-178, -302, -292, "hvBu") + "t" ? s[r(-214, -222, -129, "zghW")] : {}, ...t }, I = C;
    if (e) {
      if (E(-377, -269, -234, "lVvo", -306) === o("rH*[", -690, -773, -653, -676)) throw new _0x32bf85(E(-309, -399, -288, "lVvo", -330) + E(-177, -338, -278, "s&($", -230) + A(-43, -36, "pUmg") + o("70Ji", -570, -555, -460, -491) + E(-457, -233, -241, "hvBu", -343) + E(-360, -383, -465, "70Ji", -412));
      {
        const B = {};
        B[g(1357, "W!32", 1387)] = e, I[r(-88, -123, -198, "uCOs") + A(-157, -51, "eygC")] = B;
      }
    }
    function E(B, l, d, x, Q) {
      return SA(B - 21, x, Q - -965);
    }
    return s[A(87, 16, "jzTk")] = I, s;
  }
}
const On = {};
On.width = 1920, On.height = 1080, On.facingMode = Ya.FRONT;
const LQ = On;
var It, Yt, ie;
class b0 {
  constructor({ defaultVideoConstrains: n = LQ, minCameraShorterSide: t = jB } = {}) {
    M(this, It);
    M(this, Yt, []);
    M(this, ie, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, F(this, It, e);
  }
  get availableCameraProperties() {
    return w(this, Yt);
  }
  get mediaStream() {
    return w(this, ie);
  }
  get videoTrack() {
    if (w(this, ie)) return zr(w(this, ie));
  }
  get isCameraActive() {
    var n;
    return !!((n = w(this, ie)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Lt(t);
  }
  async open(n = {}) {
    jg() && Wt() && await Vr(1 * -7825 + 29 * 129 + 4534), F(this, ie, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new b("Video track must be initialized to get next device");
    const n = await tr(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-3567 + 8 * 446)] ?? n[0]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new b("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    w(this, ie) && (Lt(w(this, ie)), F(this, ie, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = w(this, Yt), A;
  }
  getSettings() {
    if (!this.videoTrack) throw new b("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new b("Video width is undefined");
    if (!n.height) throw new b("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await B0(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Ya.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Ha())
      return (await tr()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await tr();
    for (const t of n) {
      jg() && Wt() && await Vr(-46 * -125 + 2135 + 1 * -7435);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = zr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), g = { ...a };
        g.deviceName = r.label;
        const s = {};
        s.cameraProperties = g;
        const C = s;
        w(this, Yt).push(C), Lt(o);
      } catch (e) {
        e instanceof Error && b.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...w(this, It).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new b("Could not init camera settings");
    if (typeof w(this, It).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < w(this, It).minCameraShorterSide)
      throw this.close(), new b("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
It = new WeakMap(), Yt = new WeakMap(), ie = new WeakMap();
var Oo;
class OQ {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    M(this, Oo, !1);
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
    w(this, Oo) || (F(this, Oo, !0), await b0.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !Wt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new b("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new b("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new b("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new b("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 4111 * -1 + -1235 + 1782 * 3, -1 * -669 + -7259 + 5 * 1318), { image: t, timestamp: Date.now() };
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
    await this.cameraHandler.open(n), sQ() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !Wt() && await this.cameraEvaluator.setMostRecentCameraName(t), (e = this.videoRecorder) == null || e.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !Wt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new b("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
Oo = new WeakMap();
var Ge;
class JQ {
  constructor(n) {
    M(this, Ge);
    F(this, Ge, n);
  }
  get videoElement() {
    return w(this, Ge);
  }
  async play(n) {
    w(this, Ge).srcObject = n, await w(this, Ge).play();
  }
  stop() {
    w(this, Ge).srcObject = null;
  }
  hasSrcObject() {
    return !!w(this, Ge).srcObject;
  }
}
Ge = new WeakMap();
function GA(i, n, t, e, A) {
  return BA(t - 247, i);
}
function We(i, n, t, e, A) {
  return BA(n - 671, t);
}
function Ce(i, n, t, e, A) {
  return BA(n - 856, t);
}
(function(i, n) {
  function t(s, C, I, E, B) {
    return BA(C - -434, E);
  }
  function e(s, C, I, E, B) {
    return BA(s - -820, B);
  }
  var A = i();
  function o(s, C, I, E, B) {
    return BA(I - -292, C);
  }
  function r(s, C, I, E, B) {
    return BA(E - -934, C);
  }
  function a(s, C, I, E, B) {
    return BA(I - 787, E);
  }
  for (; ; )
    try {
      var g = parseInt(o(205, "nYF^", 163, 159, 167)) / 1 + parseInt(o(239, "*pRg", 196, 175, 177)) / 2 + parseInt(t(63, 104, 91, "!8&T", 74)) / 3 + parseInt(t(119, 81, 113, "g#^N", 90)) / 4 * (-parseInt(a(1391, 1275, 1326, "D9xL", 1341)) / 5) + -parseInt(r(-368, "YyrY", -299, -345, -301)) / 6 * (-parseInt(e(-248, -287, -239, -243, "ld8i")) / 7) + -parseInt(r(-502, "iqES", -401, -439, -374)) / 8 + parseInt(t(34, 64, 98, "uW!Y", 43)) / 9 * (-parseInt(e(-316, -284, -379, -296, "#%3(")) / 10);
      if (g === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Bi, 404 * -1115 + 415669 + -528 * -1623);
function dn(i, n, t, e, A) {
  return BA(t - -899, n);
}
function Bi() {
  var i = ["k23dNZhcNq", "gSk6omo0aG", "yvVdUvSC", "AsC3", "xSoaWPiyW5K", "ESokW7/dG00", "FvJdISo2dW", "WOPPwq", "hCkLdmoPeW", "vJZcQCkCmq", "eCkYjSoq", "WPHWWQpdHCkY", "h8k5oSogEa", "FCkGE8kvW5y", "pmoSWRf0rq", "kmoNWQhdL8k1", "W74uWPxdSCkf", "qmoTCmoYrIxcQIRcRa", "x8kHoSoMWOi", "W43cHCo3W5BdQW", "uX9yWQhdHa", "W6vzWQLaW6m", "WOW2W6lcSwK", "WPanW7xcRv4", "bwZdKJFcMa", "oCo5WQ3dL8k0", "Dd04tY4", "WORdMmk7WRqk", "xmo/BW", "nMlcH8kpia", "W6NcHCoOeSoXW6tdV8kHE8oGc8oTWOK", "W70qWOldPCkB", "WP7cPN4XW6a", "gSobWQjYqa", "W7/cPbdcN8kaW6RdI8ksnCovWOi", "WQZcJCkGWRmD", "WRnWp8kdaW", "wcnWfM8", "mNdcKa", "BXqMW4zV", "bCkQWR5HW7W", "W6NdILddHr8eu8os", "fmofW4zb", "WQtdMmkQWQql", "W6azWQ3cIgm", "W4pdUcz1WRVcPe3cSSk2WPRdPL4", "fSokmWZcRa", "W4qPoCkWW50", "WPjdWQf8pa", "zr02W4X8", "udZcHmkdbq", "W4pcQ8oRW5/dNq", "EmoDW7xdK2K", "WR/cOxqMW7W", "zXSgWRNcPq", "W4G3lW", "W4pcMCo+W5tdVa", "W7ZcPbtcM8kkWR7dJSkummo8WP/dSq", "ytuTAIG", "cghdHtBcHW", "f8oaW4fFCW", "nSoEWQK", "gSkZna", "f8kQWQn8W5W", "oSkMfmoI", "WP3dMmkUsCkS", "WQ3dN0ddKSo8", "EXy7", "WPfeWQDdiq", "uIDQiwm", "WORcL8kJWR8e", "bmoLnqpcOW", "iqNdNM5e", "W60vWQBcI2u", "qmk5zCkxW4m", "x8kHoSoYWP8", "WRrim8kEeG", "xSoPBX8j", "rCkEWPGxiSkqv8oJW5NdVCoJWPpcSa", "g27cRW", "WP3cGmkOWR8a", "jSoUWPqaW4W", "W5q0pG", "omoBWRa", "WPNcP2a", "qSkrW7WaDvFcR8oAW7CGFCkRWOa", "vSo7CJ8d", "W6/cJSkOBCkoWPpcRSkO", "cSk4wbSpW53cOcm", "da7dIufy", "WO1AWR7dG8kO", "AXafWR/cIW", "BXWRW7L4", "hSonW4zbFG", "nCo6WPPPh8kaq8oVuCoqfXldSa", "AqWbWOBcIW", "tmkQW4SZxq", "WR/cJwC", "mmoOWPCbW5S", "wZdcOSkFnW", "W6jXWORcIfz6sXLPW5TDvSoe", "WQrom8kraW", "Bx7dTvyX", "WRHyuSoaWPS", "jmkcW5ngWQJcK3SMrCkfkW87", "W6CltSoIWR9nEmkz", "qCkQnW", "imozWRv0wa", "B8kMW5eGwG", "WRRcNvtcOgC", "p2NcNuFcIq", "WO3cJmkRWRq", "o07dOSoUAmock2HB", "WObdWRXHha", "WQ3dKSkU", "gqxdJ2TE", "sdFcPa", "xCkQkSo2WOq", "eNpcJwFcKW", "WQhdUua", "Ad8U", "p8oporxcUa", "lSo5WQyaW7G", "BvVdTv0", "W44wWQlcL1a", "W7mgWOJdLSkg", "W78BWPldOCka", "emoBWRX2iW", "W6VcI8oRgSo+W6hdU8kozmozdSoUWPC", "aCo2DSk3W53cOmoxW4tdOcTV", "WRyJW4/dRqC", "W4FcHmoQW6pdRW", "FrRcVmortW", "WRKNW5xdNqi", "rrHeWPldUW", "W4O1ggulW7eNwJXhsW", "vmoZW7KMWRbOBCo2DmoFWPi", "uCkbnCoNWOm", "FSoDWOy", "W6JdLXtdLJhdPqhcVSkaWOiUWQun", "CCorW6ldKW", "WR4TW7DNgG", "WQ3dP1BdQmox", "k8oCWRBdL8k0", "xCk+y8knW4C"];
  return Bi = function() {
    return i;
  }, Bi();
}
function BA(i, n) {
  var t = Bi();
  return BA = function(e, A) {
    e = e - (-79 * -126 + 8647 + -18151);
    var o = t[e];
    if (BA.uDhtxP === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", l = "", d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, m = B.length; p < m; p++)
          l += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(l);
      }, a = function(I, E) {
        var B = [], l = 0, d, x = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      BA.kBFwBj = a, i = arguments, BA.uDhtxP = !0;
    }
    var g = t[-5964 + 14 * 426], s = e + g, C = i[s];
    return C ? o = C : (BA.rPoJGN === void 0 && (BA.rPoJGN = !0), o = BA.kBFwBj(o, A), i[s] = o), o;
  }, BA(i, n);
}
function aA(i, n, t, e, A) {
  return BA(e - 347, n);
}
var Ms, Ws, Ls;
class UQ {
  constructor() {
    y(this, Ls, 5210 + 8719 * -1 + 3509);
    y(this, Ws);
    y(this, Ms);
    function n(A, o, r, a, g) {
      return aA(A - 440, A, r - 29, g - 248);
    }
    function t(A, o, r, a, g) {
      return dn(A - 221, A, g - 1553);
    }
    function e(A, o, r, a, g) {
      return GA(r, o - 408, a - -1124);
    }
    this[e(-334, -245, "nYF^", -290) + e(-344, -463, "*pRg", -407) + n("zgaQ", 1167, 1165, 1188, 1156) + e(-451, -479, "4n2g", -412)] = Date[t("ld8i", 1064, 1159, 1144, 1126)]();
  }
  [(Ls = aA(859, "egsD", 738, 806) + GA("iqES", 716, 784) + aA(868, "egsD", 811, 824), Ws = GA("D9xL", 744, 774) + GA("egsD", 778, 841) + We(1154, 1155, "HGDb") + Ce(1430, 1404, "6)TJ"), Ms = dn(-345, "HWc[", -416) + aA(796, "[U3R", 827, 829) + "p", Ce(1488, 1427, "gH$L") + GA("5Rja", 790, 759) + We(1310, 1254, "uW!Y"))]() {
    this[t(-426, -395, "aA^h", -478, -415) + e("gH$L", 1026, 965, 1027, 1007) + e("A70q", 946, 952, 996, 998)]++;
    function n(r, a, g, s, C) {
      return aA(r - 45, s, g - 77, a - 107);
    }
    function t(r, a, g, s, C) {
      return Ce(r - 278, C - -1855, g);
    }
    function e(r, a, g, s, C) {
      return Ce(r - 5, C - -384, r);
    }
    function A(r, a, g, s, C) {
      return Ce(r - 349, r - -1316, g);
    }
    function o(r, a, g, s, C) {
      return aA(r - 234, r, g - 37, g - 139);
    }
    if (this[n(846, 908, 956, "HWc[") + n(947, 950, 919, "uW!Y") + A(102, 37, "X2H5")] === 2 * 1291 + -2462 * -3 + 1 * -9967) {
      if (n(1035, 1017, 1e3, "IAnh") !== t(-417, -450, "HWc[", -459, -465)) return;
      this[e("(4la", 881, 930, 895, 922) + e("DY5R", 952, 953, 934, 941) + "p"] = Date[n(1051, 984, 953, "n%nK")]() - this[o("gH$L", 1012, 1022) + n(909, 910, 935, "(wes") + o("aF0]", 1032, 1009) + t(-518, -458, "6)TJ", -494, -451)];
    }
  }
  [dn(-401, "1sZb", -355) + aA(898, "e^KW", 781, 838) + GA("uW!Y", 696, 734) + GA("LfLp", 887, 835) + "up"]() {
    if (!yo())
      if (A(1038, 1125, 1080, 1101, "dMux") !== n(1032, 1072, "IAnh", 1014)) this[e(599, 542, 600, 591, "#%3(") + e(718, 675, 657, 620, "1sZb") + n(1034, 943, "D9xL", 974)]++, this[n(990, 921, "D9xL", 943) + e(555, 601, 539, 586, "4n2g") + o(-252, -202, -308, "]zBe")] === 4962 + -42 * -9 + -5339 && (this[e(636, 553, 591, 532, "A70q") + o(-239, -283, -191, "#%3(") + "p"] = _0x2fba34[e(513, 538, 576, 537, "nYF^")]() - this[e(672, 635, 639, 681, "5Rja") + t(-9, -43, "*pRg") + A(934, 1005, 955, 998, "(4la") + t(50, 86, "YyrY")]);
      else return;
    function n(r, a, g, s, C) {
      return aA(r - 127, g, g - 1, s - 111);
    }
    function t(r, a, g, s, C) {
      return We(r - 155, r - -1150, g);
    }
    function e(r, a, g, s, C) {
      return GA(C, a - 372, g - -165);
    }
    function A(r, a, g, s, C) {
      return GA(C, a - 323, s - 278);
    }
    function o(r, a, g, s, C) {
      return Ce(r - 225, r - -1601, s);
    }
    this[o(-171, -219, -181, "DLoj") + t(49, 79, "sgh8") + o(-253, -182, -285, "4n2g")] = 6950 + -71 * -50 + -10500, this[t(-21, 49, "aF0]") + A(1023, 1038, 1087, 1045, "sgh8") + "p"] = void 0, window[t(63, 69, "WYIq") + t(68, 89, "D9xL") + t(101, 106, "]zBe") + t(86, 115, "ld8i")](e(652, 722, 655, 674, "D9xL") + "wn", this[o(-202, -156, -160, "HD(I") + o(-269, -209, -293, "YyrY") + n(1007, 1020, "#0Rh", 965)][A(963, 944, 944, 999, "IAnh")](this));
  }
  [aA(845, "HGDb", 847, 901) + aA(771, "TOk#", 768, 827) + GA("iAC#", 851, 839) + Ce(1515, 1446, "TOk#") + "up"]() {
    function n(o, r, a, g, s) {
      return GA(o, r - 150, r - -1020);
    }
    function t(o, r, a, g, s) {
      return We(o - 115, s - -1371, r);
    }
    if (!yo())
      if (A(224, 266, "6)TJ", 238) !== n("HGDb", -205)) {
        if (!_0x2e003e()) return;
        _0x4599ed[A(137, 189, "egsD", 181) + e(-388, -335, -401, -438, "[U3R") + A(190, 98, "]C$K", 165) + "r"](A(280, 262, "ld8i", 246) + "wn", this[n("*pRg", -270) + e(-336, -332, -293, -394, "l5sL") + A(230, 268, "aA^h", 272)][A(241, 164, "h^vR", 229)](this));
      } else return;
    function e(o, r, a, g, s) {
      return Ce(o - 340, o - -1743, s);
    }
    function A(o, r, a, g, s) {
      return GA(a, r - 162, g - -568);
    }
    window[n("DLoj", -232) + A(105, 190, "aF0]", 157) + n("e^KW", -265) + "r"](e(-332, -381, -365, -263, "DY5R") + "wn", this[t(-167, "*pRg", -261, -240, -197) + t(-106, "sNdm", -72, -95, -122) + e(-416, -481, -437, -398, "LfLp")][e(-366, -431, -334, -305, "TOk#")](this));
  }
  [GA("]C$K", 766, 758) + Ce(1360, 1426, "]zBe") + "lt"]() {
    if (!yo() || !this[r(1339, "no08", 1262, 1231, 1275) + e("nYF^", -275, -215) + "p"])
      if (r(1234, "!8&T", 1233, 1240, 1168) === t(649, 577, 510, 579, "DY5R")) {
        var n = {};
        return n[t(578, 523, 480, 462, "[U3R") + o("n%nK", 821, 709, 771) + "e"] = !1, n;
      } else {
        if (!_0x8a63b2()) return;
        this[A(929, "A70q", 882, 844, 892) + e("YyrY", -98, -126) + e("uZ2d", -242, -189)] = 7907 * 1 + 5346 + -13253 * 1, this[A(824, "]zBe", 833, 896, 881) + A(709, "no08", 764, 737, 781) + "p"] = void 0, _0x204263[t(431, 488, 511, 467, "TOk#") + o("LfLp", 747, 759, 759) + o("]C$K", 851, 752, 781) + t(500, 531, 587, 472, "5Rja")](e("h^vR", -233, -216) + "wn", this[t(438, 511, 455, 514, "g#^N") + r(1085, "DLoj", 1208, 1091, 1154) + r(1323, "n%nK", 1191, 1200, 1251)][r(1103, "*pRg", 1090, 1144, 1145)](this));
      }
    function t(a, g, s, C, I) {
      return aA(a - 401, I, s - 225, g - -349);
    }
    function e(a, g, s, C, I) {
      return Ce(a - 309, s - -1534, a);
    }
    function A(a, g, s, C, I) {
      return aA(a - 216, g, s - 208, I - -19);
    }
    function o(a, g, s, C, I) {
      return GA(a, g - 120, C - -57);
    }
    function r(a, g, s, C, I) {
      return aA(a - 275, g, s - 24, I - 346);
    }
    return { performance: !0, hiccupAmount: this[r(1197, "n%nK", 1179, 1089, 1161) + t(561, 575, 619, 556, "sNdm") + e("(wes", -224, -197) + "t"](), firstHiccup: this[o("iAC#", 623, 607, 669) + A(815, "A70q", 764, 830, 788) + o("FCdZ", 661, 610, 654) + A(886, "FCdZ", 891, 901, 829) + "ss"]() };
  }
  [aA(920, "FCdZ", 901, 852) + dn(-360, "LfLp", -382) + aA(855, "qG)B", 845, 847) + "t"]() {
    function n(e, A, o, r, a) {
      return We(e - 359, r - -1491, A);
    }
    function t(e, A, o, r, a) {
      return We(e - 83, r - 286, a);
    }
    return this[t(1600, 1583, 1488, 1543, "gH$L") + n(-248, "r@fI", -235, -301) + n(-256, "!8&T", -349, -296)];
  }
  [aA(826, "HD(I", 844, 887) + We(1145, 1203, "e^KW") + aA(842, "h^vR", 881, 907) + GA("DLoj", 648, 713) + "ss"]() {
    function n(e, A, o, r, a) {
      return We(e - 30, r - -1031, A);
    }
    function t(e, A, o, r, a) {
      return aA(e - 114, A, o - 231, e - -630);
    }
    return this[n(197, "qG)B", 274, 206) + t(248, "(wes", 315) + "p"];
  }
}
const YQ = 480, TQ = -8035 + -185 * -35 + 1800, ja = 8567 + -8537 * 1, k0 = 13109 + -6547 * 2, S0 = -4135 + -1381 * -3, $r = {};
$r.codec = "avc1.42E01E", $r.bitrate = 1e6;
const xn = $r, PQ = 9467 + -229 * -17 + -13358, HQ = 3e4;
class KQ {
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
    let n = 3844 + 3844 * -1;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class G0 {
  constructor() {
    y(this, "encoder");
  }
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw b.fromError("Encoding error: " + t);
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
function jQ(i) {
  if (!i) return !1;
  const n = G0.isSupported();
  return !n && b.logError("Video encoding is not supported in this browser."), n;
}
const Aa = {};
Aa.LOW = "low", Aa.STANDARD = "standard";
const Qi = Aa, ea = {};
ea.SPS = "SPS", ea.PPS = "PPS";
const or = ea;
class _Q {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -6281 + -1257 * -5, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      b.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, or.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, or.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === or.SPS ? n[t] & 1399 * 1 + -3150 + 1782 : n[t], o = t + 1;
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 9956 + -277 * -23 + -16327; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === 0) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-1 * -4202 + 3 * 1427 + 771 * -11) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (791 * -5 + 211 * -9 + 61 * 96), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class qQ {
  constructor() {
    y(this, "parameterSetsHandler");
    y(this, "START_CODE", new Uint8Array([-25 * 3 + -2 * 1386 + 2847 * 1, 0, 127 * 5 + -2921 * -1 + -254 * 14, 8320 + 1 * -8319]));
    y(this, "parameterSets");
    this.parameterSetsHandler = new _Q();
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
    if (t + (2 * 113 + -5020 + 2399 * 2) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (67 * 21 + 356 + -1759), r = o + A;
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
    let A = 7027 + -2537 * 1 + -898 * 5;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class VQ {
  constructor(n = S0, t = ja) {
    y(this, "chunks", []);
    y(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + 1) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-1 * -382 + 5703 + -6085, n));
  }
}
class Vg {
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
    if (!this.codec) throw b.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw b.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class ZQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (gQ() && e > A) {
      const a = e, g = A, s = a / g, C = t * s;
      return { width: Math.floor(C / (-3751 + 122 * -71 + 12415)) * (-7560 + -124 * 48 + 2 * 6757), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / (6058 + 13 * -365 + -1311)) * (1990 * -1 + 2899 + -907 * 1) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-1993 * 2 + -6313 + 1 * 10301)) * (40 * -101 + 9642 + -5600), height: t };
  }
  create(n, t) {
    switch (n) {
      case Qi.STANDARD:
        return new Vg().setBitrate(xn.bitrate).setCodec(xn.codec).setFramerate(ja).setResolution(this.getScaledResolution(t, YQ)).build();
      case Qi.LOW:
        return new Vg().setBitrate(xn.bitrate).setCodec(xn.codec).setFramerate(k0).setResolution(this.getScaledResolution(t, TQ)).build();
      default:
        throw b.logError("Unsupported preset for video encoder config");
    }
  }
}
class zQ {
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
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new ZQ(), this.chunkStorage = new VQ(), this.cameraFramerate = ja, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(S0, k0), this.startRecording(Qi.LOW);
  }
  startRecording(n = Qi.STANDARD) {
    if (this.captureIntervalId) {
      b.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      b.logError("Camera media stream is not available.");
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
      b.logError("Camera resolution could not be determined.");
      return;
    }
    let e;
    try {
      e = this.videoEncoderConfigFactory.create(n, t);
    } catch (o) {
      b.logError("Failed to create video encoder configuration: " + o);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(e)) {
      b.logError("The provided video encoder configuration is not supported.");
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
      b.logError("Video element is not created.");
      return;
    }
    let n = 5446 + -1 * 1471 + -75 * 53;
    const t = this.cameraFramerate, e = (1 * -9155 + 459 * 3 + 8778) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 5492 + -8329 * 1 + 1 * 2837;
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
class XQ {
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
    if (!this.videoProcessor) throw b.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw b.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw b.logError("QualityTester is not set");
    if (!this.cameraHandler) throw b.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new zQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class $Q {
  create(n, t) {
    if (!jQ(t)) return;
    const e = new KQ(PQ, HQ), A = new G0(), o = new qQ();
    return new XQ().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function AE(i, n) {
  const t = AA(null), [e, A] = $(), [o, r] = $(), { handleError: a, setIsCameraReady: g } = he(), s = OA((I) => {
    r((E) => $B(I, E));
  }, []);
  J(() => {
    if (!t.current) {
      a(new b("Something went wrong during video initialization"));
      return;
    }
    const I = new JQ(t.current), E = new WQ(), B = new MQ(E), l = new b0(), d = new UQ(), x = new $Q().create(l, n), Q = {};
    Q.videoHandler = I, Q.cameraHandler = l, Q.performanceCheckup = d, Q.cameraEvaluator = B, Q.videoRecorder = x;
    const f = new OQ(Q);
    return (async () => {
      try {
        const m = {};
        m.facingMode = i, await f.startFirstVideoStream(m);
      } catch (m) {
        if (m instanceof Error) {
          a(b.fromCameraError(m));
          return;
        }
      }
      A(f), g(!0), s(f.getCameraResolution());
    })(), () => {
      f == null || f.stopStreaming(), g(!1), A(void 0);
    };
  }, [i, a, g, t, s, n]);
  const C = {};
  return C.cameraService = e, C.cameraResolution = o, C.onCameraResolutionChange = s, C.videoRef = t, C;
}
function eE({
  cameraFacing: i,
  children: n,
  isVideoCaptureEnabled: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = AE(
    i,
    t
  ), a = QA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ k(ii.Provider, { value: a, children: n });
}
const Go = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, tE = (i, n) => {
  const t = {};
  t.instruction = n, Go(i, t);
};
function oE(i) {
  const n = {};
  n.instruction = i;
  const t = n;
  Go(Jr.REQUEST_CAPTURE, t);
}
function nE({
  children: i,
  isVideoCaptureEnabled: n,
  ...t
}) {
  const e = t.cameraFacing ?? Ya.FRONT;
  return /* @__PURE__ */ k(eE, { cameraFacing: e, isVideoCaptureEnabled: n, children: i });
}
let O;
const Ne = new Array(128).fill(void 0);
Ne.push(void 0, null, !0, !1);
function ta(i) {
  return Ne[i];
}
let ue = -20 * -53 + -952 + -108, lo = null;
function Jn() {
  return (lo === null || lo.byteLength === -8931 + -5619 * -1 + 3312) && (lo = new Uint8Array(O.memory.buffer)), lo;
}
const Un = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, iE = typeof Un.encodeInto == "function" ? function(i, n) {
  return Un.encodeInto(i, n);
} : function(i, n) {
  const t = Un.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function No(i, n, t) {
  if (t === void 0) {
    const a = Un.encode(i), g = n(a.length, -297 * -23 + 3848 + -10678 * 1) >>> -16 * -440 + 4341 * -1 + -2699;
    return Jn().subarray(g, g + a.length).set(a), ue = a.length, g;
  }
  let e = i.length, A = n(e, 8227 * 1 + 9029 + -17255) >>> 15 * 624 + -2388 + 581 * -12;
  const o = Jn();
  let r = -7443 * -1 + -2932 + -4511 * 1;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -1018 * 1 + 7515 + 70 * -91) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== 6557 * 1 + 1 * -8369 + 1812 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-281 * -16 + -7461 + 1484 * 2), -1 * 9061 + -964 * 8 + 16774) >>> -22 * -230 + -3811 + -1249;
    const a = Jn().subarray(A + r, A + e), g = iE(i, a);
    r += g.written, A = t(A, e, r, 648 + -1 * 647) >>> 6126 + -1021 * 6;
  }
  return ue = r, A;
}
function N0(i) {
  return i == null;
}
let xo = null;
function Qe() {
  return (xo === null || xo.byteLength === -2212 + -1106 * -2) && (xo = new Int32Array(O.memory.buffer)), xo;
}
let wo = Ne.length;
function rE(i) {
  i < -7113 + 1 * -6517 + 2 * 6881 || (Ne[i] = wo, wo = i);
}
function R0(i) {
  const n = ta(i);
  return rE(i), n;
}
const oa = {};
oa.ignoreBOM = !0, oa.fatal = !0;
const F0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", oa) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && F0.decode();
function Ei(i, n) {
  return i = i >>> 474 + -244 * -23 + -6086, F0.decode(Jn().subarray(i, i + n));
}
function na(i) {
  wo === Ne.length && Ne.push(Ne.length + (260 * 28 + -983 * -10 + -17109));
  const n = wo;
  return wo = Ne[n], Ne[n] = i, n;
}
let uo = null;
function v0() {
  return (uo === null || uo.byteLength === 1153 * 8 + -3 * 2693 + -1 * 1145) && (uo = new Uint32Array(O.memory.buffer)), uo;
}
function Zg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = v0();
  for (let A = -10137 + -3379 * -3; A < i.length; A++)
    e[t / (427 * 21 + -2948 * 1 + 1 * -6015) + A] = na(i[A]);
  return ue = i.length, t;
}
function zg(i, n) {
  i = i >>> -1784 + 5 * 1415 + 11 * -481;
  const t = v0(), e = t.subarray(i / 4, i / 4 + n), A = [];
  for (let o = 5867 + -1 * 5867; o < e.length; o++)
    A.push(R0(e[o]));
  return A;
}
function aE(i, n) {
  const t = No(i, O.__wbindgen_malloc, O.__wbindgen_realloc), e = ue, A = No(n, O.__wbindgen_malloc, O.__wbindgen_realloc), o = ue, r = O.is_mobile_supported(t, e, A, o);
  return _a.__wrap(r);
}
const ia = {};
ia.register = () => {
}, ia.unregister = () => {
};
const Xg = typeof FinalizationRegistry > "u" ? ia : new FinalizationRegistry((i) => O.__wbg_licensevalidationresult_free(i >>> 961 * -8 + -1088 + 4388 * 2));
class _a {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create(_a.prototype);
    return t.__wbg_ptr = n, Xg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -2474 * 2 + -2 * -3912 + 2 * -1438, Xg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    O.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = N0(t) ? 0 : No(t, O.__wbindgen_malloc, O.__wbindgen_realloc), a = ue;
    const g = Zg(e, O.__wbindgen_malloc), s = ue, C = Zg(A, O.__wbindgen_malloc), I = ue, E = No(o, O.__wbindgen_malloc, O.__wbindgen_realloc), B = ue, l = O.licensevalidationresult_new(n, r, a, g, s, C, I, E, B);
    return this.__wbg_ptr = l >>> -2 * 2734 + 8410 + 2 * -1471, this;
  }
  get is_valid() {
    return O.licensevalidationresult_is_valid(this.__wbg_ptr) !== -1313 * -1 + -3391 * 1 + 2078;
  }
  get features_json() {
    try {
      const e = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = Qe()[e / (3 * 1702 + -1487 + 1 * -3615) + (9 * 270 + -9387 + 6957)], t = Qe()[e / (-8102 + 173 * 5 + 7241) + (-4704 + 3881 * 1 + -206 * -4)];
      let A;
      return n !== 2829 + 11 * -258 + -9 * -1 && (A = Ei(n, t).slice(), O.__wbindgen_free(n, t * (-2169 + -8 * -74 + 789 * 2), 1)), A;
    } finally {
      O.__wbindgen_add_to_stack_pointer(2689 + 4120 * -2 + 5567);
    }
  }
  get errors() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = Qe()[A / (470 * 1 + -654 + 47 * 4) + (8111 + 6711 * -1 + 40 * -35)], t = Qe()[A / (-12 * -466 + -2059 + -3529) + (2080 + -634 * -8 + 1 * -7151)], e = zg(n, t).slice();
      return O.__wbindgen_free(n, t * (-6325 + -8 * -983 + 1 * -1535), 4), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-76 * -56 + -2540 + -1700);
    }
  }
  get warnings() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = Qe()[A / (-69 * -73 + -8573 + 590 * 6) + (647 * 8 + -7973 + -2797 * -1)], t = Qe()[A / (-2553 * 1 + -5088 + 11 * 695) + (1 * -4854 + 9176 + -4321)], e = zg(n, t).slice();
      return O.__wbindgen_free(n, t * (6148 + 1 * 781 + 25 * -277), 1901 + 271 * -7), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-38 * -71 + -6633 + -3 * -1317);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = Qe()[o / (-2286 + 176 * 31 + -3166) + (1 * 1779 + -2934 + 1155)], A = Qe()[o / (-6870 + -7 * -982) + (-6741 + -6742 * -1)];
      return n = e, t = A, Ei(e, A);
    } finally {
      O.__wbindgen_add_to_stack_pointer(-5 * 293 + -1 * -4506 + -121 * 25), O.__wbindgen_free(n, t, 1);
    }
  }
}
async function gE(i, n) {
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
function sE() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = ta(t), A = typeof e == "string" ? e : void 0;
    var o = N0(A) ? 0 : No(A, O.__wbindgen_malloc, O.__wbindgen_realloc), r = ue;
    Qe()[n / (-9305 + 37 * -151 + 14896) + (7601 * 1 + 740 + -2 * 4170)] = r, Qe()[n / (1663 * 2 + 1880 + 18 * -289) + (4 * -2458 + -1610 * 3 + 14662)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    R0(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = Ei(n, t);
    return na(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return na(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return ta(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(Ei(n, t));
  }, i;
}
function IE(i, n) {
  return O = i.exports, M0.__wbindgen_wasm_module = n, xo = null, uo = null, lo = null, O;
}
async function M0(i) {
  if (O !== void 0) return O;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = sE();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await gE(await i, n);
  return IE(t, e);
}
function nr(i, n, t, e, A) {
  return xA(e - -159, A);
}
function $g(i, n, t, e, A) {
  return xA(t - 897, e);
}
function As(i, n, t, e, A) {
  return xA(n - 939, t);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return xA(C - -914, I);
  }
  function e(a, g, s, C, I) {
    return xA(I - 818, a);
  }
  function A(a, g, s, C, I) {
    return xA(I - -251, g);
  }
  function o(a, g, s, C, I) {
    return xA(a - -672, s);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(278, "y0J&", 259, 266, 258)) / 1 * (-parseInt(e("YDd5", 1267, 1303, 1278, 1289)) / 2) + parseInt(e("Feme", 1342, 1352, 1305, 1326)) / 3 * (parseInt(A(232, "Astj", 208, 233, 213)) / 4) + -parseInt(e("TTeV", 1333, 1324, 1314, 1313)) / 5 * (-parseInt(o(-180, -193, "YkYy", -195, -198)) / 6) + -parseInt(o(-158, -150, "pa%3", -169, -146)) / 7 + parseInt(e("]oXF", 1309, 1315, 1291, 1297)) / 8 * (parseInt(e("Feme", 1325, 1289, 1309, 1300)) / 9) + -parseInt(t(-422, -425, -410, -412, "Feme")) / 10 * (-parseInt(e("T*WA", 1304, 1305, 1293, 1316)) / 11) + -parseInt(o(-178, -154, "SLH7", -182, -190)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 154 * -2137 + -1 * -406031 + 321088);
function un(i, n, t, e, A) {
  return xA(A - -541, e);
}
function xA(i, n) {
  const t = li();
  return xA = function(e, A) {
    e = e - (-197 * 19 + -1 * 652 + 4855);
    let o = t[e];
    if (xA.AOzbPP === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      xA.MfLLhO = C, i = arguments, xA.AOzbPP = !0;
    }
    const a = t[1213 * 2 + -5926 * -1 + 232 * -36], g = e + a, s = i[g];
    return s ? o = s : (xA.BDpeTD === void 0 && (xA.BDpeTD = !0), o = xA.MfLLhO(o, A), i[g] = o), o;
  }, xA(i, n);
}
function ir(i, n, t, e, A) {
  return xA(e - -546, A);
}
var Os;
class cE {
  constructor() {
    y(this, Os, !1);
  }
  async [(Os = un(-86, -90, -71, "mf]u", -67) + ir(-48, -56, -60, -69, "V4a)") + nr(362, 332, 374, 346, "jspV"), As(1399, 1409, "&Au3"))](n) {
    function t(a, g, s, C, I) {
      return ir(a - 98, g - 196, s - 342, C - 183, I);
    }
    function e(a, g, s, C, I) {
      return un(a - 187, g - 355, s - 346, a, g - 1013);
    }
    function A(a, g, s, C, I) {
      return As(a - 368, I - -1011, C);
    }
    function o(a, g, s, C, I) {
      return nr(a - 149, g - 226, s - 122, C - 1044, g);
    }
    function r(a, g, s, C, I) {
      return ir(a - 97, g - 483, s - 110, s - 846, g);
    }
    try {
      const a = n + (r(790, "U$QQ", 801, 808, 781) + "/") + Kg;
      await M0(a), this[r(752, "mf]u", 774, 799, 767) + r(827, "y0J&", 813, 818, 792) + r(755, "&G%2", 761, 743, 788)] = !0;
    } catch {
      this[o(1399, "Muax", 1378, 1391) + e("m5&(", 976, 955) + r(757, "ZGNk", 767)] = !1, console[r(811, "(3HT", 788)](Kg + (o(1363, "Muax", 1357, 1354) + r(786, "V4a)", 766) + e("g4br", 952, 978) + o(1354, "mf]u", 1342, 1350) + o(1333, "GvvU", 1352, 1345) + e("VT4c", 956, 932) + A(401, 418, 411, "u#c[", 419) + t(116, 107, 127, 109, "^ygI") + t(115, 113, 110, 136, "U$QQ") + r(771, "Feme", 776) + r(821, "$Z&#", 811) + e("yC@H", 957, 930) + t(139, 177, 171, 149, "YkYy") + r(809, "Astj", 807) + "n."));
    }
  }
  [$g(1399, 1391, 1400, "U$QQ") + $g(1399, 1396, 1384, "SLH7") + un(-91, -54, -87, "T8x@", -78) + "ed"]() {
    function n(e, A, o, r, a) {
      return nr(e - 130, A - 65, o - 492, e - -678, r);
    }
    function t(e, A, o, r, a) {
      return un(e - 433, A - 406, o - 410, e, A - -282);
    }
    return this[n(-356, -369, -372, "Feme") + n(-364, -341, -344, "3v2S") + t("o!Zc", -355, -369)];
  }
}
function li() {
  const i = ["z2OjWRXHW47cRszNrmkR", "kmoXW5fwcG", "vSo6W4PWiG", "pmoyW4tcPCkS", "W7qBW4DRu8oDdCojWOJdKGJdLCo2", "cHX8WPeV", "rg91WPvm", "z8keW53cUSkBW70WvG", "imkpWRpcPgW", "W58XWRC9hbaLWRGUrHpcRxq", "W5NcOt9qEa", "oCkKsSkyW5C", "mZbhW641", "W53dGMezW6u", "phRcU8kbWOO", "oZnljW", "zSkgagBdImo9CCkFWPrbWQS", "k8kSW5RdRbO", "wSkFW45SnW", "WO7cPI1uxq", "mCkHWOOsgZFdJmo5pg3dS8kz", "nf4NWRtcRW", "pSkSuSkyW4W", "W4RdTMKplwSTWRn+imoLWPW", "FmkztgGkw8oGW4ewWPtcICkXW5S", "WOVcOWzSW7W", "iKS9WRBcIa", "yr8IWOJcT8oxc3C", "udz6qYpcImoQvSo/W5tdP0FdGq", "WQBdH8oFW40x", "WQb3Aq7dJW", "bmouF0Dph3qJtx5/W4zC", "tmkxx0xdOa", "W7hdICkjbG", "W74IxmkMWObBjfC", "EmozWRxcUgdcHLNcVa", "WPjIyb1w", "dmkLWPSPAsqhecLUsfu", "W7nVW7rQWOnGmq", "eSoNcrZcO8k8WRnPWObBW5X2iq", "WR/dGmkLbM3cL8ogDa", "W4RdVMyji2DOWQTak8odWRb+", "W7i/W45OWQX+gSkc", "WPFcJuBdVeJcGSk/DG", "WR0CWPnkWOu", "W78PiLNdLSonW4KdWQ03W55Akq", "W6CgWPDxWPW", "BbX6W63dSmkqcv3dRSo6WQpcOG", "WQecWQffWOi", "WQpdImkIW7ddNa", "fvapWRNdUG", "A3lcPSkfWRC", "WObHW7PMsG", "zKGNWRhcRmoZkW", "y8kgW5RcUCk7W48uCa"];
  return li = function() {
    return i;
  }, li();
}
class rr extends Error {
  constructor() {
    super(...arguments);
    y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ar(i, n, t, e, A) {
  return V(i - -242, e);
}
function fn(i, n, t, e, A) {
  return V(t - 331, A);
}
function oe(i, n, t, e, A) {
  return V(A - 181, e);
}
function V(i, n) {
  var t = di();
  return V = function(e, A) {
    e = e - (-5551 + 8 * 913 + -1360);
    var o = t[e];
    if (V.RWycCT === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", l = "", d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, m = B.length; p < m; p++)
          l += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(l);
      }, a = function(I, E) {
        var B = [], l = 0, d, x = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      V.hcvvZW = a, i = arguments, V.RWycCT = !0;
    }
    var g = t[-16 + 16 * 1], s = e + g, C = i[s];
    return C ? o = C : (V.kDGUJq === void 0 && (V.kDGUJq = !0), o = V.hcvvZW(o, A), i[s] = o), o;
  }, V(i, n);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return V(C - 475, E);
  }
  function e(g, s, C, I, E) {
    return V(E - 671, s);
  }
  var A = i();
  function o(g, s, C, I, E) {
    return V(C - 705, E);
  }
  function r(g, s, C, I, E) {
    return V(C - -705, I);
  }
  for (; ; )
    try {
      var a = parseInt(o(1178, 1198, 1169, 1197, "iBv[")) / 1 + -parseInt(o(1114, 1101, 1115, 1117, "9Pd3")) / 2 + parseInt(o(1170, 1157, 1163, 1195, "!E*X")) / 3 + -parseInt(o(1155, 1143, 1135, 1131, ")@1G")) / 4 * (parseInt(e(1061, "z@oV", 1095, 1094, 1089)) / 5) + -parseInt(r(-273, -216, -244, "OTlN", -262)) / 6 + -parseInt(t(886, 857, 892, 908, "CB*j")) / 7 + -parseInt(o(1162, 1169, 1134, 1124, "m[%m")) / 8 * (-parseInt(e(1098, "4WcF", 1102, 1116, 1079)) / 9);
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(di, 120855 + 334 * -1627 + 864652);
function di() {
  var i = ["W40FlSk6oG", "jtdcSmocW40yWR/dHtGmWPqhamoB", "wSkhieZdQSovCW", "jJFcU8olW4SwW6/cQG0kWOym", "BYTrWO7dHG", "EwZcUCofFq", "umkQr8omW4q", "WPldISo8DSoxDY90W4TjoglcNG", "WQZdTxJcOvm", "yIXz", "WPuctCkAWPK", "W5hcSHioaq", "r8oUWOO", "W6/cHbK8W6y", "W7mkuM/dPW", "rXhdNq", "WOlcSeFdIwi", "BCoUwq", "FvVcUmoxBa", "W5G/iCk3da", "W4BdM8kjW47dKG", "WRxdSgu3WPK", "W5fmWPfBW7OklCkaFmoWpx1D", "W7hdQeRcPxFdOSoA", "cmkmjv3dLW", "WOz7shJcNSo8W4q0p8k4pSkp", "AIveimkT", "z8kxW5mGW7G", "hb3cNmo5WP4", "WR45WRRcGCoX", "WPhdR8k+umokAmoYDCkEr0VdQG", "Bs5wnCk7", "W5RcRCocamoA", "mCotWPnJWQeaW47cQ8kCymodWOJdKW", "s8k8A8oLW48", "cNRdGedcOa", "kcVdPmkgoLhdO8oEA8ozpmo3", "WPzkWPq", "nxyqzmoQh8keWQ7dKwFcJa", "uCkGwG", "W4/cNCkV", "jSosyxhdICogWRi", "W4JcPrioda", "W7/cSXGUW7C", "uhOw", "W4RcTSkdW4nV", "W5WVhG3dGW", "WRBdUHJcV8kz", "W43cTSkdW55J", "EgFdRq", "W4/dTrCIga", "dmokcCocpG", "xCkzuCksW68mg0/dJWeLE8k0", "e1dcKZJcMsVdGSo6W4yKxM/cNWS", "WOVcJglcGmkjW6z4", "emoceSopba", "q07dImk9W5NdImksWOmTWPVcTa", "WQ7dUhm8WOe", "W7G7pSoMFW", "EMxdUG", "gqRcKSo+WPG", "eXFcK8ooWOq", "W4RcT8o5b8kr", "WQraeZtcO8ogW4VcS1OhWP84EG", "bCoMW4qZW5VdMCoAEXbPWRaIEa", "r20xySoU", "c8kzpSkzW4K", "W4CNgIddUq", "W7i3oW", "W41dvYZdMa", "WO0tW4qd", "xLW4W6KA", "CxRdMmoMWQq", "hCkunCkdW4K"];
  return di = function() {
    return i;
  }, di();
}
function $e(i, n, t, e, A) {
  return V(A - 543, e);
}
function Be(i, n, t, e, A) {
  return V(n - -940, A);
}
var ct, Jo;
class es {
  constructor(n) {
    M(this, ct);
    M(this, Jo);
    function t(a, g, s, C, I) {
      return V(I - -316, a);
    }
    function e(a, g, s, C, I) {
      return V(a - 211, C);
    }
    function A(a, g, s, C, I) {
      return V(s - 985, C);
    }
    function o(a, g, s, C, I) {
      return V(s - 623, a);
    }
    this[A(1404, 1389, 1399, "9Pd3") + e(615, 621, 648, "!LrN")] = n;
    function r(a, g, s, C, I) {
      return V(a - -828, C);
    }
    try {
      F(this, ct, n[e(665, 687, 652, "*BAG", 637) + r(-379, -374, -372, "1t#n", -415) + r(-435, -449, -412, "b1X$", -421)] && JSON[A(1414, 1356, 1384, "&1js", 1356)](n[r(-416, -412, -452, "Ae3d", -385) + r(-394, -400, -419, "b1X$", -357) + r(-435, -472, -413, "b1X$", -453)])), F(this, Jo, n[t("OTlN", 162, 114, 109, 139) + o("cb!V", 1091, 1088, 1053, 1099)]);
    } catch (a) {
      console[o("e&JC", 1071, 1047)](a);
    }
  }
  get [oe(654, 607, 645, "dxn6", 617) + "id"]() {
    function n(A, o, r, a, g) {
      return oe(A - 219, o - 390, r - 135, a, A - 348);
    }
    function t(A, o, r, a, g) {
      return oe(A - 80, o - 86, r - 68, A, g - -529);
    }
    function e(A, o, r, a, g) {
      return oe(A - 39, o - 337, r - 229, o, g - -86);
    }
    return this[e(465, "cmcF", 511, 464, 496) + e(500, "!LrN", 496, 504, 499)][n(991, 992, 1015, "b1X$") + t("Ae3d", 105, 60, 47, 74)];
  }
  get [oe(636, 620, 599, "CB*j", 623) + "s"]() {
    function n(e, A, o, r, a) {
      return Be(e - 372, e - 544, o - 245, r - 391, A);
    }
    function t(e, A, o, r, a) {
      return Be(e - 165, a - 1927, o - 360, r - 349, A);
    }
    return this[t(1424, "iBv[", 1389, 1410, 1420) + t(1393, "!E*X", 1381, 1406, 1403)][n(23, "j!])", 37, 51) + "s"];
  }
  get [Be(-531, -513, -546, -516, "23oG") + oe(625, 621, 584, "m[%m", 594)]() {
    function n(A, o, r, a, g) {
      return oe(A - 455, o - 266, r - 377, o, a - -1034);
    }
    function t(A, o, r, a, g) {
      return Be(A - 330, r - 230, r - 225, a - 262, a);
    }
    function e(A, o, r, a, g) {
      return $e(A - 66, o - 496, r - 397, a, g - -1160);
    }
    return this[n(-419, "D5FU", -475, -456) + n(-473, "BTdH", -480, -448)][e(-225, -198, -187, "&1js", -215) + t(-239, -295, -267, "R*Ob")];
  }
  get [$e(987, 1031, 963, "t(&o", 1e3) + "b"]() {
    return w(this, ct);
  }
  get [oe(630, 624, 597, "Tr6!", 625) + $e(978, 976, 954, "SHam", 983)]() {
    return w(this, Jo);
  }
  get [Be(-443, -477, -473, -481, "7K!J") + ar(154, 124, 172, "rKCQ") + fn(793, 764, 772, 782, "D5FU") + ar(161, 191, 150, "m[%m")]() {
    var r, a;
    function n(g, s, C, I, E) {
      return Be(g - 383, g - 1015, C - 436, I - 107, I);
    }
    function t(g, s, C, I, E) {
      return oe(g - 203, s - 484, C - 217, I, C - -58);
    }
    function e(g, s, C, I, E) {
      return $e(g - 431, s - 11, C - 67, C, g - -193);
    }
    function A(g, s, C, I, E) {
      return fn(g - 187, s - 461, g - -605, I - 231, I);
    }
    function o(g, s, C, I, E) {
      return $e(g - 87, s - 424, C - 439, g, I - -1336);
    }
    return !!((a = (r = w(this, ct)) == null ? void 0 : r[o(")@1G", -366, -361, -341) + t(508, 509, 521, "j!])")]) != null && a[n(496, 528, 504, "KTJQ") + n(475, 460, 447, "KTJQ") + e(770, 741, "23oG") + n(513, 513, 533, "Yc5P") + n(498, 520, 511, "ZV#c") + A(154, 132, 127, "!)]j") + t(582, 534, 560, "8%S!")]);
  }
  get [oe(617, 573, 573, "OYwo", 606) + fn(755, 775, 791, 815, "Knng") + fn(761, 771, 746, 760, "9Pd3") + ar(197, 162, 168, "rKCQ") + $e(993, 966, 985, "iBv[", 989) + $e(963, 901, 962, "U(Ku", 937)]() {
    var r, a;
    function n(g, s, C, I, E) {
      return Be(g - 454, C - 847, C - 207, I - 127, s);
    }
    function t(g, s, C, I, E) {
      return Be(g - 67, s - 1684, C - 47, I - 43, E);
    }
    function e(g, s, C, I, E) {
      return Be(g - 477, s - 1710, C - 17, I - 151, g);
    }
    function A(g, s, C, I, E) {
      return oe(g - 257, s - 365, C - 336, E, s - 160);
    }
    function o(g, s, C, I, E) {
      return Be(g - 183, g - 1111, C - 430, I - 60, I);
    }
    return !!((a = (r = w(this, ct)) == null ? void 0 : r[n(391, "9Pd3", 363, 351) + n(373, "C]^D", 352, 348)]) != null && a[n(358, "!)]j", 354, 329) + e("1t#n", 1181, 1172, 1184) + A(769, 800, 767, 825, "*BAG") + A(770, 750, 741, 721, "BTdH") + A(745, 767, 757, 736, "$xMw") + o(619, 652, 648, "yeRI") + t(1168, 1176, 1196, 1179, "8%S!")]);
  }
}
ct = new WeakMap(), Jo = new WeakMap();
function pA(i, n, t, e, A) {
  return iA(n - 437, e);
}
function gA(i, n, t, e, A) {
  return iA(i - -783, t);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return iA(I - -160, s);
  }
  const e = i();
  function A(a, g, s, C, I) {
    return iA(g - 805, I);
  }
  function o(a, g, s, C, I) {
    return iA(I - 523, g);
  }
  function r(a, g, s, C, I) {
    return iA(C - 114, I);
  }
  for (; ; )
    try {
      if (parseInt(r(824, 637, 891, 763, "Yiip")) / 1 + -parseInt(r(833, 853, 683, 812, "3[iC")) / 2 + -parseInt(r(962, 938, 838, 857, "xMQ#")) / 3 * (parseInt(r(579, 496, 665, 610, "nFLz")) / 4) + -parseInt(A(1559, 1530, 1510, 1398, "FCQb")) / 5 + parseInt(r(789, 820, 692, 790, "4rqR")) / 6 * (parseInt(A(1556, 1507, 1496, 1603, "w0Av")) / 7) + parseInt(t(645, 541, "3[iC", 618, 551)) / 8 + parseInt(o(1266, "4L)r", 1097, 1215, 1159)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(xi, -65755 * -21 + -918322 + 303736);
function xi() {
  const i = ["dcFdKNjZ", "WRnsWQBcHmkE", "x0ddNSozW6u", "WRrDW5e6WQ0", "tSo+W6FcI0y", "WOq1C8kFiG", "dmkbua", "bgjgWPxdUG", "WOe6WQeHWRe", "WOddLCoZe8k2", "B8ouWRNcTSkB", "xCohWRNcTW", "W7PduSk5mq", "bCkdumk1hG", "WQxdPCoYqa", "c8knuCk4eG", "WRlcSCkkWQC", "WOjWW4FcGCkE", "W4XFwmoVqq", "veRdI8oXW4a", "re7dJCotW4a", "W6ddU8kaW7ZdSa", "WOpcPCkHWPid", "uf3dKmooW5O", "W5L4FsNcVG", "WOO2hW", "W6ddOXVcJSkY", "dvHTWPpdOa", "dSkqs8kLbq", "gmkwtNpdSG", "WPSCDCk4fq", "W69sxmkGiq", "cxfaWPNdOa", "WOK4W7iqWRW", "W5jrxSk8tq", "WRTIW5ddGCkB", "hZ7cPwDY", "gCk8W4xcG0tcQmoJW4C", "WRu+WRW/W7q", "vL3dJCosW5S", "jX7dUw9X", "WQ7cVJncqMmBg8kcrmkxWP09", "W69foa", "W45zt8kQrG", "fCkzsxxdIG", "W6njdhWo", "wLZdQmoCW5O", "W6NcNsz5W6G", "x0BdHCoyW40", "WRVdOSomsgW", "CCkdmG", "WQOUt0JdGa", "WR1aW4qqWQ0", "W4CMxmkLWRu", "W6KdWO9hW6NcN8kLAIrxWOyEgG", "W6Xhoq", "WQnHrMldHG", "zmoNWQNcVSk8", "W5jNuCkQeq", "WRn+W4FcQSkw", "vmoTaG", "W6ThqCkJlq", "k8kapSkcrG", "WQ3dRMnlWRO", "xMjEqG0", "W7/cS8kShIWtC8kuoL0", "W7vcqa", "WPBdKmok", "WRJdTSoYqbW", "jrtcMqpcMq", "W7FdRmkbW6BdRG", "kbJdTh5T", "W7jcW6JcL8kI", "WQ9wWQRcKW", "W4NcNsz5W6G", "v0ddI8o4W4q", "WRuWW6mgWRC", "W4NdOmkrW7BdRa", "W71rjq", "D3RdLCo7W40", "W6fpt10V", "W5bNxbGfW7zLhsRcMa", "WPekrmk9eq", "iWddS25S", "W5f3pxHr", "W4ddV8kqWR0x", "W6FcKsf4W6m", "rLvfWRTN", "W67cTsSl", "t0HFss8", "WOlcP8kWWP8y", "W7xdRbRcMmkh", "jSoigehcPq", "kGpdSNK", "WQC1qh4", "W71gW7rBgG", "WQGMwW", "WRRdOCoOCqi", "W4JdGmkCW7RdTG", "WOemdSk3kG", "WQ8GrgtdIa", "WPPZW50nWRG", "WQtdQ8o6sIq", "WPBcO8oxW4XqWQ3cS8o+js/dQcK0", "WOaDma", "ySkrWPRcHKG", "f1hcGqNcKG", "W6RcUSkofKXZySkWW5VcNW", "W7ZdQWRcMmk5", "WOeTWQaHWQC", "w8kKWPCCkq", "WOqHaL0v", "WRnkwSkUiq", "W4G6ceab", "W75gW7RcLCk/", "W4CwoMnv", "WPBcQ8osW4jvWQNcTCkufrtdQHS6W6e", "B8kCWPa", "q0zFBYO", "WOuIlxpdVrCFWRhdGSo8WQvZta", "W7bvW6VcKW", "WPfdW7OiWO4", "vIqfW4ZdQ8k6W7jYi8ol", "y8oRWPWWoa", "aCklr8kZga", "kCk3tSkqeG", "WPNdLmon", "W6Tolmoj", "W7aMWQacCG", "WOOOs2JdNa", "bHBcISkjWPNdPdXcoSkYWPxcOSo6", "W5fFxmkbrG", "WOBcR8kNWPKE", "W5bpumkOkG", "lHdcHa4", "WRhdOSoAr3W", "W4VdRNyyua", "iCkDWOZcVf8", "W5XVvc7cRG", "wCojWQu", "WO4DlmkTla", "W7ySWRCUDq", "r8oLW7BcGvO", "nZtdSubv", "jXtcIWhcHa", "qSo/W4RcKLu", "WPJcO8k3WQmA", "W7iMWRCoFq", "W4PFhmo7qxziWR7cTCowttW", "WOmrnSk3ka", "ASkjWPpcRuq", "W4ThqCkJlq", "W7tdRNewga", "wmojWRK", "WOtcOCk3", "fCoxvh/dRG", "nJtdSwDs", "sCotWRJcRCkg", "WOGkmmkXoW", "mSoBbvZcVW", "W5hdGmk9WQq2", "W5xdU8kBW73dTG", "W5nUAZpcOG", "vmkHa8kwcG", "smo+W7RcL0C", "W4rxjgrF", "W4GQs8koWQC", "DSoTpCk3WPO", "WPZdKSoDsG", "WP9qWOhcSSkA", "W7Pymgu", "W5JdTSkuWPSaW7m3AG", "W6Tol8kiW74", "WOpcVmksWPZcUW", "WRZdQwOahG", "W6lcTteAhW", "hCkdvSkLeW", "rL1dwq", "W5xdQmkaW6ddPW", "qKDyt2C", "oXxdOfbj", "W4zFwmkkrq", "nZtdPfDi", "WOmFmq", "WQHtW4qmWRO", "WOCBnSkxia", "wCoJW6C", "l8kgkCkHxq", "W51+AG", "WP/cQSosW4bvWQBdRSoGoGpdJHS", "z8kuWPhcJfa", "W6HsW6Tgeq", "WQeKxeNdNq", "qSoIW7ZcKa", "ibtcGXpcLa", "WOSSWPGZWQC", "W4bhrvy", "W7beoxLf", "W5HHACkEia", "WO4klCkToG", "W4NdOmkiW7BdPG", "WPiTWQy8WQa", "WRRdV2fDWRS", "W6HvW7Dbdq", "aCklqa", "W7hdOr0", "ygJcTHOnWQFdUtiypSkpd8kP", "eXdcMqG", "W6vfpSoQW7S", "B8oJfSkmW5K", "pSkygLtdLq", "W7pdRqFcICkL", "WP3cU8oVW53dVG", "W4LcxmkRxq", "CuddM1FdG8k+tfDeWQGImCoj", "t0fy", "W6PbpSofW7O", "W4iXDCkIWQu", "qK1l", "aH7cICkkWPZdQJ07gmkXWPxcGSoCW6K", "a8kysL7dTa", "WRz6WRZcJSkc", "wSouWQtcR8ka", "t8kuW4pcJx4", "W51urvy1", "W4ZdQmkEW7RdUa", "Dmkbi8oZkW", "W7NdOqZcK8kK", "exfgWONdRq", "sCojWQxcRCkB", "W4DEx8kQEa", "W4S3s8kKWRq", "WQ/dTmo2W5RdUq", "W67dGwqyfq", "nbdcNW7cMa", "W4SRsSkUW6y", "W4DoW7Txea", "umkUWOqDna", "lbldRKLQ", "jrJdRIP2", "W5nPDZtcVG", "W6viW6WsfW", "WR5aW5mA", "WQaqj0yK", "WORcV8knWRVcSa", "C8kBjmockq", "ewjDWPtdVa", "WOiDq8kGaa", "xmohWQFcSmkn", "s8osWQ7cLCka", "fcpdT0Xp", "WRfDW5G", "hSknsG", "W6LPEbGn", "WO3cO8kWWRaz", "mJ7dQ1Dp", "omohdea", "kqnw", "vmoRbSkeWPC", "WRymECkBga", "jsJdQ0vQ", "W7tdPW/cNmkI", "WOBcR8k+WPKu", "pH5wDKO", "CSklm8osiW", "W65jW6TxxG", "y8kLgmoKca", "W6tcQs0mta", "WRBdQNThcCkEkSoOEaZcNtJcLa", "hmkExG"];
  return xi = function() {
    return i;
  }, xi();
}
function JA(i, n, t, e, A) {
  return iA(n - 72, i);
}
function UA(i, n, t, e, A) {
  return iA(e - -541, t);
}
function eA(i, n, t, e, A) {
  return iA(i - -595, A);
}
function iA(i, n) {
  const t = xi();
  return iA = function(e, A) {
    e = e - (9371 + 4 * -2402 + -1 * -721);
    let o = t[e];
    if (iA.HpzwYC === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      iA.OJGiLE = C, i = arguments, iA.HpzwYC = !0;
    }
    const a = t[-7681 + 1 * 7681], g = e + a, s = i[g];
    return s ? o = s : (iA.JQpklJ === void 0 && (iA.JQpklJ = !0), o = iA.OJGiLE(o, A), i[g] = o), o;
  }, iA(i, n);
}
var Js, Us, Ys;
class CE {
  constructor(n) {
    y(this, Ys);
    y(this, Us, [eA(113, 86, 155, 224, "4rqR") + pA(991, 934, 860, "PvmO") + "ic", pA(1173, 1144, 1044, "3L3d") + UA(68, 182, "nXgR", 89) + "ic"]);
    y(this, Js);
    function t(A, o, r, a, g) {
      return iA(a - -10, A);
    }
    function e(A, o, r, a, g) {
      return iA(a - 921, A);
    }
    this[e("a)90", 1515, 1597, 1472) + t("BR1U", 653, 698, 671) + "d"] = n;
  }
  async [(Ys = JA("dfqb", 775) + "se", Us = JA("Iyq9", 739) + pA(1164, 1131, 1100, "FvdP") + JA("dfqb", 758) + gA(-281, -321, "q[(]"), Js = JA("FvdP", 596) + gA(-98, -56, "nFLz"), eA(88, -10, -12, 50, "taT]"))](n) {
    const t = await this[A(1414, 1428, 1491, 1462, "PvmO") + a(280, 333, 280, 198, "FvdP") + o("J!la", 1488, 1368, 1360)](n);
    function e(g, s, C, I, E) {
      return pA(g - 400, s - -91, C - 466, I);
    }
    function A(g, s, C, I, E) {
      return eA(C - 1553, s - 122, C - 475, I - 390, E);
    }
    function o(g, s, C, I, E) {
      return pA(g - 272, I - 391, C - 320, g);
    }
    function r(g, s, C, I, E) {
      return UA(g - 145, s - 454, E, C - 12);
    }
    await Promise[o("&B]!", 1393, 1228, 1326) + r(2, 166, 129, 113, "Vl4!")]([this[A(1713, 1634, 1671, 1788, "q[(]") + r(157, 149, 152, 247, "BR1U") + "d"][r(96, 94, -11, -89, "3Cym")](n), this[e(942, 943, 952, "FCQb") + o("A#Q!", 1473, 1352, 1447) + "e"](t)]);
    function a(g, s, C, I, E) {
      return UA(g - 303, s - 87, E, I - 4);
    }
    this[r(111, 276, 161, 139, "tK(m") + o("WCtI", 1480, 1402, 1485) + r(15, 117, 74, 129, "[vpS")]();
  }
  async [JA("Xic9", 810) + pA(1073, 1106, 1104, "BR1U") + "se"](n) {
    var a;
    function t(g, s, C, I, E) {
      return gA(E - 678, s - 90, I);
    }
    function e(g, s, C, I, E) {
      return eA(g - -25, s - 424, C - 436, I - 250, s);
    }
    function A(g, s, C, I, E) {
      return gA(s - 0, s - 161, C);
    }
    function o(g, s, C, I, E) {
      return pA(g - 379, C - -490, C - 242, I);
    }
    function r(g, s, C, I, E) {
      return eA(s - 1398, s - 80, C - 62, I - 62, C);
    }
    try {
      if (t(596, 752, 645, "p2Na", 621) !== o(408, 525, 492, "8RpR", 513)) _0x24340c[t(529, 473, 587, "#Q(B", 541) + t(510, 704, 674, "mE7M", 643)](_0x46eba4);
      else {
        const g = await fetch(n);
        if (!g.ok) {
          if (o(486, 624, 606, "q[(]", 705) !== t(390, 253, 507, "f##C", 387)) throw new Error(A(-426, -295, "a)90", -304, -307) + A(-81, -135, "Co[^", -97, -96) + e(130, "8RpR", 0, 87, 210) + e(-121, "4L)r", -25, -45, 14) + "d.");
          {
            _0x422016 instanceof _0x5bd896 ? _0x518d46[o(463, 383, 490, "0BTD", 371)]() : _0x2ef08c instanceof _0xbaa84f && _0xf6e998[r(1548, 1556, "FvdP", 1438, 1595)](_0x762392);
            const s = {};
            s[t(619, 410, 390, "xMQ#", 520) + t(369, 373, 399, "8RpR", 489)] = !1, s[e(-108, "WCtI", -185, -118, 27) + "s"] = [], s[o(751, 648, 634, "@tG0", 758) + o(492, 444, 455, "FvdP", 493)] = [], s[t(369, 402, 435, "3L3d", 502) + o(720, 593, 639, "q7uN", 661) + r(1421, 1537, "mE7M", 1463, 1584)] = void (-3463 + 36 * 31 + 2347), s[e(-53, "Yiip", -168, 73, -90)] = function() {
            }, s[e(-50, "a)90", -124, 74, -127) + o(502, 422, 460, "A#Q!", 468)] = "", this[e(-55, "A#Q!", -85, -135, -27) + A(-73, -159, "8RpR", -30, -185)] = new _0x53a3c2(s);
          }
        }
        this[r(1431, 1386, "f##C", 1278, 1475) + "se"] = await g[A(-70, -115, "!OfI", -202, -213)]();
      }
    } catch (g) {
      if (e(33, "3L3d", 7, -90) === o(464, 614, 599, "mE7M")) this[e(18, "p2Na", -58, 68) + "se"] = void 0, console[A(-240, -195, "45u^")](g);
      else {
        const s = this[A(-205, -154, "p2Na") + r(1481, 1531, "3L3d", 1500) + "se"]();
        return (a = s == null ? void 0 : s[t(566, 573, 539, "mE7M", 449) + e(-19, ")C1T", -70, 39)]) == null ? void 0 : a[t(622, 549, 715, "mE7M", 647) + A(-131, -163, "4rqR")];
      }
    }
  }
  async [gA(-86, -170, "q7uN") + eA(22, -95, 4, -12, "nFLz") + "e"](n) {
    function t(a, g, s, C, I) {
      return gA(a - 346, g - 68, s);
    }
    if (this[e(93, 106, 186, "@tG0", 64) + e(438, 393, 224, "4L)r", 327)] = void 0, !n)
      if (e(5, 210, 11, "p2Na", 118) === r(-65, "H7!S", -325, -198)) {
        console[r(-470, "]lX[", -372, -448)](t(194, 140, "Xic9") + A(94, 38, "Qf1%", -100, 10) + e(41, 29, 175, "taT]", 80) + e(262, 214, 7, "mE7M", 127) + e(166, 145, 200, "rRJC", 73)), this[o(")C1T", 603, 568, 565) + "se"] = void 0;
        return;
      } else {
        if (!this[r(-444, "f##C", -343, -360) + "se"]) throw new _0x233847(t(98, 26, "8RpR") + e(317, 292, 293, "]lX[", 290) + r(-405, "q[(]", -523, -439) + r(-341, ")C1T", -386, -333) + ".");
        if (!this[A(77, -26, "FCQb", -7, -38) + r(-264, "a)90", -275, -354) + "d"][o("[vpS", 241, 246, 366) + o("!OfI", 373, 432, 392) + o("ctkG", 510, 486, 396) + "ed"]()) throw new _0x1fb3b4(e(150, 320, 210, "[vpS", 213) + r(-466, "Ip8p", -463, -379) + o("FvdP", 627, 522, 590) + o("nFLz", 405, 321, 433) + ".");
        this[o("taT]", 373, 403, 438) + t(159, 155, "!OfI")] = new _0x33c757(_0x1b9498(this[A(-90, -45, "%v)W", -67, 15) + "se"], this[r(-239, "Xic9", -219, -192) + e(259, 96, 148, "q7uN", 189)]())), this[A(-64, -249, "bT[x", -23, -137) + o("ctkG", 562, 574, 462) + "s"](this[A(71, 74, "4rqR", -102, -2) + e(325, 161, 138, "q[(]", 264)][o("bT[x", 552, 387, 448) + "s"]), this[o("ctkG", 419, 300, 332) + t(175, 201, "nXgR") + r(-384, "rRJC", -259, -281)](this[r(-340, ")C1T", -388, -320) + o("q[(]", 571, 594, 530)][A(-187, -131, "3L3d", -61, -52) + e(303, 386, 223, "]lX[", 253)]);
      }
    function e(a, g, s, C, I) {
      return gA(I - 363, g - 285, C);
    }
    function A(a, g, s, C, I) {
      return gA(I - 75, g - 199, s);
    }
    function o(a, g, s, C, I) {
      return JA(a, C - -226);
    }
    function r(a, g, s, C, I) {
      return gA(C - -160, g - 240, g);
    }
    await this[r(-318, "J!la", -260, -279) + o("jZQn", 571, 563, 521) + "se"](n);
  }
  async [gA(-169, -294, "FCQb") + pA(906, 956, 832, "J!la") + eA(16, -88, 125, -83, "&B]!")](n) {
    function t(a, g, s, C, I) {
      return eA(g - 724, g - 77, s - 176, C - 270, a);
    }
    const e = await fetch("" + n + this[r(1269, 1365, "J!la") + t("Co[^", 671, 688, 647) + t("p2Na", 684, 724, 636) + r(1219, 1135, "#Q(B")][-18 + -2 * -9]), A = e.ok ? -7952 + 1988 * 4 : 3940 + -3939 * 1;
    function o(a, g, s, C, I) {
      return pA(a - 195, g - -1200, s - 39, I);
    }
    function r(a, g, s, C, I) {
      return JA(s, a - 458);
    }
    return "" + n + this[t("dfqb", 715, 654, 814) + o(-133, -30, -90, -54, "A#Q!") + r(1169, 1178, "8RpR") + o(-54, -75, -32, -209, "Ip8p")][A];
  }
  [JA("xMQ#", 644) + gA(-208, -168, "Xic9") + "s"](n) {
    function t(A, o, r, a, g) {
      return pA(A - 282, g - 55, r - 455, a);
    }
    function e(A, o, r, a, g) {
      return eA(A - 483, o - 241, r - 192, a - 272, r);
    }
    n[t(888, 1077, 1080, "H7!S", 1007) + "ch"]((A) => console[e(494, 495, "mE7M", 629)](A));
  }
  [gA(-120, -189, "q7uN") + gA(-293, -218, "]lX[") + pA(1212, 1087, 1092, "PvmO")](n) {
    function t(e, A, o, r, a) {
      return eA(A - 683, A - 428, o - 414, r - 491, o);
    }
    n[t(625, 742, "nXgR", 831) + "ch"]((e) => console[t(705, 669, "@tG0", 794)](e));
  }
  [eA(-33, -101, -18, -108, "Qf1%") + UA(-28, -79, "jZQn", -20)]() {
    function n(e, A, o, r, a) {
      return pA(e - 77, e - 560, o - 200, a);
    }
    function t(e, A, o, r, a) {
      return JA(e, A - -740);
    }
    return window[t("w0Av", 62) + n(1573, 1694, 1596, 1582, "Yiip")][t("&B]!", -99) + t("a)90", -23)];
  }
  [pA(1072, 1010, 1053, "mE7M") + eA(-21, -38, -131, 31, "mE7M") + JA("Vl4!", 599)]() {
    function n(r, a, g, s, C) {
      return gA(g - 635, a - 343, s);
    }
    function t(r, a, g, s, C) {
      return UA(r - 335, a - 173, r, a - 972);
    }
    function e(r, a, g, s, C) {
      return UA(r - 218, a - 254, g, r - 845);
    }
    function A(r, a, g, s, C) {
      return eA(r - -78, a - 489, g - 1, s - 204, a);
    }
    function o(r, a, g, s, C) {
      return UA(r - 204, a - 388, C, g - 404);
    }
    try {
      if (o(659, 484, 599, 635, "%v)W") !== A(-163, "FvdP", -238, -176, -62)) throw new _0x1b03e9(e(1035, 1117, "4L)r", 1128, 945) + e(917, 821, "p2Na", 972, 1051) + n(702, 704, 594, "%v)W", 596) + e(829, 900, "ctkG", 911, 958) + ".");
      if (!this[t("ctkG", 1103, 1087, 1210, 1123) + "se"]) {
        if (e(798, 702, "!OfI", 868, 801) === A(-89, "xMQ#", 28, -139, -8)) throw new rr(t("jZQn", 1071, 1048, 1074, 1161) + e(1005, 890, "J!la", 1118, 1128) + e(894, 871, "tK(m", 989, 867) + A(-29, "w0Av", 27, -102, 73) + ".");
        _0x11110a[t("FCQb", 1065, 1199, 1198, 1197)](_0x2fb6a4);
      }
      if (!this[n(244, 280, 358, "p2Na", 397) + t("BR1U", 1112, 1135, 1243, 1197) + "d"][n(607, 375, 493, "FCQb", 500) + t("ctkG", 1124, 1140, 1047, 1032) + n(553, 528, 547, "#Q(B", 531) + "ed"]())
        throw o(328, 367, 463, 401, "xMQ#") === A(-188, "3[iC", -228, -319, -94) ? new rr(t("f##C", 965, 862, 1064, 1042) + n(434, 429, 418, "tK(m", 400) + t("%v)W", 1173, 1174, 1083, 1137) + t("FCQb", 1074, 1030, 948, 984) + ".") : new _0x3f431c(t("jZQn", 1009, 905, 1047, 1079) + t("dfqb", 983, 883, 1059, 954) + t("#Q(B", 1082, 984, 1115, 1130) + n(485, 600, 584, "H7!S", 696) + "d.");
      this[A(-55, "FCQb", -29, -160, -92) + t("Iyq9", 1140, 1121, 1163, 1062)] = new es(aE(this[A(-31, "BR1U", -138, 58, -49) + "se"], this[A(-156, "#Q(B", -65, -81, -246) + t("J!la", 1160, 1154, 1270, 1147)]())), this[n(341, 444, 401, "jZQn", 318) + e(909, 838, "mE7M", 1e3, 798) + "s"](this[e(826, 841, "]lX[", 802, 736) + t("bT[x", 1058, 1025, 983, 990)][n(471, 416, 499, "Yiip", 462) + "s"]), this[e(830, 720, "[vpS", 699, 862) + n(493, 619, 598, "3L3d", 524) + A(76, "nFLz", 71, 36, -4)](this[t("3Cym", 920, 941, 950, 869) + o(386, 440, 459, 402, "!OfI")][e(919, 818, "FCQb", 908, 927) + o(587, 461, 575, 581, "H7!S")]);
    } catch (r) {
      if (n(498, 372, 474, "bT[x") !== n(592, 671, 568, "Yiip")) {
        r instanceof rr ? o(360, 447, 386, 452, "3L3d") !== t("Ip8p", 936) ? r[n(444, 266, 395, "0BTD")]() : _0x4cef5e[A(-182, "Co[^", -70, -301) + "ch"]((g) => _0x17bab0[o(542, 627, 585, 499, "PvmO")](g)) : r instanceof Error && (o(533, 441, 563, 683, "H7!S") !== o(316, 369, 431, 429, "4rqR") ? console[e(903, 830, "3Cym")](r) : _0x2d5650[n(381, 441, 507, "f##C")]());
        const a = {};
        a[o(621, 519, 603, 609, "3Cym") + e(833, 955, ")C1T")] = !1, a[n(386, 492, 408, "Co[^") + "s"] = [], a[t("J!la", 990) + t("#Q(B", 1122)] = [], a[n(349, 280, 359, "Xic9") + n(655, 458, 593, "nFLz") + n(438, 296, 429, ")C1T")] = void 0, a[A(42, "Iyq9", 117, -4)] = function() {
        }, a[A(-186, "A#Q!", -186, -153) + o(489, 658, 562, 661, "FvdP")] = "", this[e(1008, 903, "[vpS") + n(432, 382, 460, ")C1T")] = new es(a);
      } else throw new _0x3ecfeb(n(534, 272, 400, "H7!S") + t("0MB0", 988) + A(-113, "Co[^", -76, -122) + n(491, 396, 389, "0MB0") + ".");
    }
  }
  [eA(-16, 41, -37, 28, "nFLz") + gA(-106, -71, "xMQ#") + eA(70, 91, 34, 188, "ctkG") + "t"]() {
    function n(e, A, o, r, a) {
      return eA(e - 1010, A - 325, o - 3, r - 470, o);
    }
    function t(e, A, o, r, a) {
      return pA(e - 50, a - -834, o - 76, e);
    }
    return this[t("tK(m", -3, 10, 88, 131) + n(956, 1083, "PvmO", 1068)];
  }
  [pA(965, 946, 935, "Yiip") + JA("tK(m", 633) + "se"]() {
    var r;
    function n(a, g, s, C, I) {
      return gA(g - 1327, g - 382, C);
    }
    if (!this[A(1069, 964, 988, "Ip8p") + "se"]) return A(1154, 1168, 1240, ")C1T") !== A(1108, 1077, 1149, "FCQb") && _0x2b3fb2 instanceof _0x2ca43a && _0x3a5ecf[A(1139, 1269, 1163, "Qf1%") + t(291, "3Cym")](_0x159152), null;
    function t(a, g, s, C, I) {
      return UA(a - 333, g - 336, g, a - 321);
    }
    function e(a, g, s, C, I) {
      return UA(a - 427, g - 202, g, s - 1314);
    }
    function A(a, g, s, C, I) {
      return gA(a - 1217, g - 194, C);
    }
    function o(a, g, s, C, I) {
      return UA(a - 279, g - 427, I, C - 1474);
    }
    try {
      return o(1593, 1534, 1599, 1537, "rRJC") !== o(1566, 1548, 1567, 1518, "Xic9") ? JSON[t(408, "amAt", 325, 425, 352)](this[e(1596, "nFLz", 1500, 1567, 1598) + "se"]) : null;
    } catch (a) {
      if (t(375, "Ip8p") !== n(1021, 1135, 1157, "a)90")) {
        if (a instanceof Error)
          if (e(1392, "Yiip", 1469) === o(1601, 1530, 1622, 1612, "]lX[")) b[e(1361, "Yiip", 1371) + o(1494, 1572, 1390, 1515, "45u^")](a);
          else {
            const g = this[o(1572, 1494, 1585, 1486, "bT[x") + o(1754, 1777, 1787, 1657, "#Q(B") + "se"]();
            return ((r = g == null ? void 0 : g[o(1368, 1507, 1585, 1469, "dfqb") + t(320, "0BTD")]) == null ? void 0 : r[A(1116, 1112, 1067, "0BTD")]) || [];
          }
        return null;
      } else return _0x107059[e(1389, "ctkG", 1276)](this[n(1314, 1281, 1305, "3Cym") + "se"]);
    }
  }
  [eA(85, 93, 160, 55, "3[iC") + gA(-122, -71, "3L3d")]() {
    var o;
    function n(r, a, g, s, C) {
      return eA(g - 490, a - 50, g - 349, s - 282, s);
    }
    function t(r, a, g, s, C) {
      return pA(r - 295, r - -478, g - 405, C);
    }
    const e = this[A(")C1T", 1294) + A("tK(m", 1354) + "se"]();
    function A(r, a, g, s, C) {
      return UA(r - 358, a - 277, r, a - 1334);
    }
    return ((o = e == null ? void 0 : e[A("Xic9", 1373) + n(409, 387, 425, "dfqb")]) == null ? void 0 : o[t(637, 587, 525, 758, "Ip8p")]) || [];
  }
  [UA(147, 11, "Ip8p", 22) + eA(31, -10, -1, -27, "3L3d") + JA("4L)r", 630)]() {
    var o;
    const n = this[t(660, 681, 564, "dfqb", 641) + t(624, 594, 771, "amAt", 691) + "se"]();
    function t(r, a, g, s, C) {
      return JA(s, C - -52);
    }
    function e(r, a, g, s, C) {
      return eA(s - 786, a - 151, g - 372, s - 152, a);
    }
    function A(r, a, g, s, C) {
      return UA(r - 299, a - 483, s, g - 1370);
    }
    return (o = n == null ? void 0 : n[e(735, "Ip8p", 840, 857) + A(1606, 1497, 1550, "rRJC")]) == null ? void 0 : o[A(1267, 1410, 1345, "tK(m") + e(759, "PvmO", 774, 828)];
  }
}
const ki = class ki extends CE {
  static getInstance() {
    if (!this._instance) {
      const n = new cE();
      this._instance = new ki(n);
    }
    return this._instance;
  }
};
y(ki, "_instance");
let ra = ki;
const qa = qe(void 0);
qa.displayName = "CameraOptionsContext";
function W0() {
  const i = fe(qa);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}
function BE({
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
    captureMode: t ?? ko.AUTO_CAPTURE,
    assetsDirectoryPath: n0(i),
    sessionToken: o,
    candidateSelectionDurationMillis: n,
    transactionCountingToken: r,
    isVideoCaptureEnabled: e
  };
}
function QE({
  cameraOptions: i,
  children: n
}) {
  const t = QA(() => BE(i), [i]);
  return /* @__PURE__ */ k(qa.Provider, { value: t, children: n });
}
const Si = class Si {
  constructor() {
    y(this, "lastDetails");
    y(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = -330 + -5 * -66;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Si()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 130 * -50 + 387 + 6113;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Go(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Go(n, t);
  }
};
y(Si, "_instance");
let Ro = Si;
const no = Ro.getInstance(), L0 = (i, n, t = vB) => {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  no.dispatchDelayedCustomEventOnChange(i, A, t);
}, EE = (i, n) => {
  no.dispatchCustomEventOnChange(i, n);
}, lE = (i, n) => {
  const t = {};
  t.size = n;
  const e = t;
  no.dispatchCustomEventOnChange(i, e);
}, dE = (i, n, t) => {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  no.dispatchCustomEventOnChange(i, o);
}, xE = (i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  no.dispatchCustomEventOnChange(i, a);
};
function uE(i, n) {
  const t = {};
  t.instructionCode = n;
  const e = t;
  no.dispatchCustomEventOnChange(i, e);
}
const aa = (i, n) => {
  Go(i, n);
}, fE = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  J(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, EE(i, A);
  }, [t, e, i]);
};
function ga(i, n) {
  J(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const hE = (i) => i === HI.CONTROL ? !Ha() : !0;
function pE(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = he(), [r, a] = $(), g = QA(() => {
    const l = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return l ? r ?? l === "user" : r ?? hE(i);
  }, [n, r, i, o]);
  function s() {
    t !== XA.LOADING && e(XA.RUNNING);
  }
  function C() {
    a(r === void 0 ? !g : !r);
  }
  async function I() {
    if (n) {
      e(XA.LOADING);
      try {
        await n.switchCamera(), e(XA.RUNNING);
      } catch (l) {
        if (l instanceof Error) {
          A(b.fromCameraError(l));
          return;
        }
      }
      a(void 0);
    }
  }
  function E(l) {
    var d;
    switch ((d = l.detail) == null ? void 0 : d["instruction"]) {
      case Mt.CONTINUE_DETECTION:
        s();
        break;
      case Mt.TOGGLE_MIRROR:
        C();
        break;
      case Mt.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  ga(i, E);
  const B = {};
  return B.shouldCameraMirror = g, B;
}
function yE(i, n) {
  ga(i, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === Mt.CONTINUE_DETECTION && tE(zA.CONTROL, Mt.CONTINUE_DETECTION);
  }), ga(zA.CONTROL, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === Mt.CONTINUE_DETECTION && n();
  });
}
function mE(i, n) {
  J(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      lE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function wE(i) {
  return Fe(Math.abs(i));
}
const DE = () => {
  const [i, n] = $(null), t = AA(new So(5639 * 1 + 33 * 107 + 13 * -705));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(wE(r));
    const a = Fe(ht(t.current)), g = {};
    g.z = a, n(g);
  }
  J(() => (window.addEventListener("devicemotion", AQ(e, XB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
}, Va = (i, n) => {
  const t = AA(n);
  J(() => {
    t.current = n;
  }, [n]), J(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
var bE = Symbol.for("preact-signals");
function Yi() {
  if (He > -6773 + -2 * -1918 + 2938)
    He--;
  else {
    for (var i, n = !1; Do !== void 0; ) {
      var t = Do;
      for (Do = void 0, sa++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(2085 * -4 + 4514 + -18 * -213 & t.f) && U0(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (sa = 129 * 48 + 115 * -18 + -1 * 4122, He--, n) throw i;
  }
}
function kE(i) {
  if (He > 8993 * 1 + -139 * -11 + -10522) return i();
  He++;
  try {
    return i();
  } finally {
    Yi();
  }
}
var T = void 0, Do = void 0, He = -1 * -2968 + 1008 + 497 * -8, sa = 9667 * 1 + -4366 + -5301, ui = 9453 + -3919 * 1 + 5534 * -1;
function O0(i) {
  if (T !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== T)
      return n = { i: 0, S: i, p: T.s, n: void 0, t: T, e: void 0, x: void 0, r: n }, T.s !== void 0 && (T.s.n = n), T.s = n, i.n = n, 7 * -1168 + -4445 + -12653 * -1 & T.f && i.S(n), n;
    if (n.i === -1)
      return n.i = -6039 + 1 * -1856 + 7895, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = T.s, n.n = void 0, T.s.n = n, T.s = n), n;
  }
}
function dA(i) {
  this.v = i, this.i = 1 * -538 + 7 * -336 + 2890, this.n = void 0, this.t = void 0;
}
dA.prototype.brand = bE, dA.prototype.h = function() {
  return !0;
}, dA.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
}, dA.prototype.U = function(i) {
  if (this.t !== void 0) {
    var n = i.e, t = i.x;
    n !== void 0 && (n.x = t, i.e = void 0), t !== void 0 && (t.e = n, i.x = void 0), i === this.t && (this.t = t);
  }
}, dA.prototype.subscribe = function(i) {
  var n = this;
  return nn(function() {
    var t = n.value, e = T;
    T = void 0;
    try {
      i(t);
    } finally {
      T = e;
    }
  });
}, dA.prototype.valueOf = function() {
  return this.value;
}, dA.prototype.toString = function() {
  return this.value + "";
}, dA.prototype.toJSON = function() {
  return this.value;
}, dA.prototype.peek = function() {
  var i = T;
  T = void 0;
  try {
    return this.value;
  } finally {
    T = i;
  }
}, Object.defineProperty(dA.prototype, "value", { get: function() {
  var i = O0(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (sa > 3689 * -1 + 3 * 71 + 3576) throw new Error("Cycle detected");
    this.v = i, this.i++, ui++, He++;
    try {
      for (var n = this.t; void (-9016 + -532 * -14 + -1 * -1568) !== n; n = n.x) n.t.N();
    } finally {
      Yi();
    }
  }
} });
function J0(i) {
  return new dA(i);
}
function U0(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Y0(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function T0(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Nt(i) {
  dA.call(this, void 0), this.x = i, this.s = void 0, this.g = ui - (-3 * -129 + 6171 + -6557), this.f = 2 * 340 + 3559 + -4235;
}
(Nt.prototype = new dA()).h = function() {
  if (this.f &= -3, 1 * -6553 + -5 * -1783 + -2361 & this.f) return !1;
  if (-3188 + -92 * -35 == (257 * 23 + -8010 + -35 * -61 & this.f) || (this.f &= -5, this.g === ui)) return !0;
  if (this.g = ui, this.f |= -7402 + -1 * -4460 + 1 * 2943, this.i > 3648 + -57 * -75 + 7923 * -1 && !U0(this)) return this.f &= -2, !0;
  var i = T;
  try {
    Y0(this), T = this;
    var n = this.x();
    (-17637 + -139 * -127 & this.f || this.v !== n || 7957 + -5158 * 1 + -2799 === this.i) && (this.v = n, this.f &= -(2429 + 1 * -733 + -1679), this.i++);
  } catch (t) {
    this.v = t, this.f |= -14359 + -5 * -2875, this.i++;
  }
  return T = i, T0(this), this.f &= -2, !0;
}, Nt.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 892 + 1 * -757 + -99;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  dA.prototype.S.call(this, i);
}, Nt.prototype.U = function(i) {
  if (this.t !== void 0 && (dA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Nt.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= -4451 * 2 + 2135 * -1 + 11043;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Nt.prototype, "value", { get: function() {
  if (-1 * 6499 + 1211 + -41 * -129 & this.f) throw new Error("Cycle detected");
  var i = O0(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 6262 + 1844 * 4 + -13622 & this.f) throw this.v;
  return this.v;
} });
function ts(i) {
  return new Nt(i);
}
function P0(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    He++;
    var t = T;
    T = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= -1629 + -23 * -94 + -21 * 25, Za(i), e;
    } finally {
      T = t, Yi();
    }
  }
}
function Za(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, P0(i);
}
function SE(i) {
  if (T !== this) throw new Error("Out-of-order effect");
  T0(this), T = i, this.f &= -2, -2 * 857 + -5948 + 65 * 118 & this.f && Za(this), Yi();
}
function fo(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = -1532 + 782 * 2;
}
fo.prototype.c = function() {
  var i = this.S();
  try {
    if (947 * 6 + 394 * 1 + -6068 & this.f || void (-5788 + -1048 * 2 + 7884) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, fo.prototype.S = function() {
  if (-12 * 129 + 6045 * -1 + 7594 & this.f) throw new Error("Cycle detected");
  this.f |= 1733 * 2 + 4731 + -8196, this.f &= -9, P0(this), Y0(this), He++;
  var i = T;
  return T = this, SE.bind(this, i);
}, fo.prototype.N = function() {
  !(31 * -155 + 3577 + -1230 * -1 & this.f) && (this.f |= 462 + -2881 * -2 + -6222, this.o = Do, Do = this);
}, fo.prototype.d = function() {
  this.f |= 1 * -3769 + -2085 * 3 + 10032, 2 * 1934 + -1860 + -669 * 3 & this.f || Za(this);
};
function nn(i) {
  var n = new fo(i);
  try {
    n.c();
  } catch (t) {
    throw n.d(), t;
  }
  return n.d.bind(n);
}
var H0, gr, K0 = [];
nn(function() {
  H0 = this.N;
})();
function vt(i, n) {
  W[i] = n.bind(null, W[i] || function() {
  });
}
function hn(i) {
  gr && gr(), gr = i && i.S();
}
function j0(i) {
  var n = this, t = i.data, e = Ot(t);
  e.value = t;
  var A = QA(function() {
    for (var a = n, g = n.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -555 * 18 + 8420 + 1574 * 1;
      break;
    }
    var s = ts(function() {
      var B = e.value.value;
      return -8782 + 14 * 225 + 2816 * 2 === B ? -8781 + -3 * -2221 + 2118 : B === !0 ? "" : B || "";
    }), C = ts(function() {
      return !Array.isArray(s.value) && !Ps(s.value);
    }), I = nn(function() {
      if (this.N = _0, C.value) {
        var B = s.value;
        a.__v && a.__v.__e && 2558 * 3 + 2 * -3299 + -1073 === a.__v.__e.nodeType && (a.__v.__e.data = B);
      }
    }), E = n.__$u.d;
    return n.__$u.d = function() {
      I(), E.call(this);
    }, [C, s];
  }, []), o = A[-1387 * 2 + 5629 + -2855], r = A[-769 * -3 + -8237 + 5931];
  return o.value ? r.peek() : r.value;
}
j0.displayName = "_st";
var Ia = {};
Ia.configurable = !0, Ia.value = void 0;
var ca = {};
ca.configurable = !0, ca.value = j0;
var Ca = {};
Ca.configurable = !0, Ca.get = function() {
  var i = {};
  return i.data = this, i;
};
var Ba = {};
Ba.configurable = !0, Ba.value = 1;
var co = {};
co.constructor = Ia, co.type = ca, co.props = Ca, co.__b = Ba, Object.defineProperties(dA.prototype, co), vt("__b", function(i, n) {
  if (typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof dA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), vt("__r", function(i, n) {
  hn();
  var t, e = n.__c;
  e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var o;
    return nn(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 1766 + -20 * -40 + -2565, e.setState({});
    }, o;
  }())), hn(t), i(n);
}), vt("__e", function(i, n, t, e) {
  hn(), i(n, t, e);
}), vt("diffed", function(i, n) {
  hn();
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
        var s = o[g], C = e[g];
        s === void 0 ? (s = GE(t, g, C, A), o[g] = s) : s.o(C, A);
      }
    }
  }
  i(n);
});
function GE(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = J0(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: nn(function() {
    this.N = _0;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
vt("unmount", function(i, n) {
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
}), vt("__h", function(i, n, t, e) {
  (e < 3499 * 2 + -7471 + -238 * -2 || -7223 * -1 + -961 * 4 + -3370 === e) && (n.__$f |= -790 * -6 + -6834 + 2096), i(n, t, e);
}), $A.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 6160 + 26 * 348 + -15204 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(e || 4 & this.__$f) || -6830 + -6833 * -1 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function Ot(i) {
  return QA(function() {
    return J0(i);
  }, []);
}
var NE = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function RE() {
  kE(function() {
    for (var i; i = K0.shift(); ) H0.call(i);
  });
}
function _0() {
  -1535 + -41 * -229 + -7853 === K0.push(this) && (W.requestAnimationFrame || NE)(RE);
}
function FE({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = pE(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, fE(t.CAMERA_PROPS_CHANGED, A), J(() => () => {
    Ro.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function vE(i) {
  J(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function ME({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: a, onDetection: g, sessionToken: s }) {
  vE(() => {
    t && t.destroy();
  });
  const { appState: C, firstRunningDone: I, handleAppStateChange: E, isCameraReady: B, setFirstRunningDone: l } = he(), { sunfish: d } = oo(), { analytics: x } = Ui(), { transactionCounting: Q } = Ka(), { cameraResolution: f, cameraService: p, onCameraResolutionChange: m, videoRef: G } = C0(), S = {};
  S.cameraResolution = f, S.cameraService = p, S.customEvent = A;
  const { shouldCameraMirror: D } = FE(S), P = Ot(void 0), Z = (p == null ? void 0 : p["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && B, kA = OA(async (z) => {
    E(XA.WAITING), a(z);
  }, [a, E]), EA = OA((z, Ve) => {
    m(z.resolution), P.value = z, g(z, Ve);
  }, [g, P, m]);
  J(() => {
    !I && Z && (l(!0), E(XA.RUNNING));
  }, [Z, E, I, l]), J(() => {
    if (C !== XA.RUNNING || !Z) return;
    if (!p || !t) throw new b("Cannot start detection");
    t.imageProcessor.reset();
    const z = {};
    return z.analytics = x, z.transactionCounting = Q, z.cameraService = p, z.fallbackInstruction = o, z.instructionCodeMap = r, z.checkToInstructionCodeMap = n, z.sessionToken = s, z.createProtoMessage = e, z.onCaptureCallback = kA, z.onDetectionCallback = EA, t.createDetection(i, z), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [C, Z, t, p, kA, EA, s, P, x, e, r, n, o, i, Q]);
  const fA = {};
  return fA.videoRef = G, fA.cameraResolution = f, fA.detectionDetails = P, fA.shouldCameraMirror = D, fA;
}
function q0({ callback: i, delay: n, skip: t = !1 }) {
  const [e, A] = $(!1), o = AA(i), r = AA(null);
  J(() => {
    o.current = i;
  }, [i]);
  const a = OA(() => {
    r.current && (clearTimeout(r.current), r.current = null), A(!1);
  }, []), g = OA(() => {
    t || (a(), A(!0), r.current = setTimeout(() => {
      o.current(), A(!1);
    }, n));
  }, [n, a, t]);
  J(() => {
    g();
  }, [n, a, g]);
  const s = {};
  return s.isActive = e, s.reset = g, s.clear = a, s;
}
function V0(i) {
  const n = AA([]);
  return J(() => {
    n.current.forEach((t) => t()), n.current = [];
  }, [i]), (t) => {
    n.current.push(t);
  };
}
const WE = () => typeof document < "u" && document.hasFocus();
function LE(i = {}) {
  const n = AA(i), t = AA(WE()), [e, A] = $(t.current);
  J(() => {
    n.current = i;
  }), J(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, I, E, B;
        !t.current && ((I = (C = n.current).onFocus) == null || I.call(C), (B = (E = n.current).onChange) == null || B.call(E, !0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        var C, I, E, B;
        t.current && ((I = (C = n.current).onBlur) == null || I.call(C), (B = (E = n.current).onChange) == null || B.call(E, !1)), r(!1);
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
function OE(i = {}) {
  const { appState: n, firstRunningDone: t } = he();
  LE({ onBlur: () => {
    var e;
    n === XA.WAITING || n === Tr.DONE || !t || (e = i.onBlur) == null || e.call(i);
  }, onFocus: () => {
    var e;
    n === XA.WAITING || n === Tr.DONE || !t || (e = i.onFocus) == null || e.call(i);
  } });
}
function JE(i) {
  const { redfin: n, freemiumOverlayState: t } = he(), e = n === Vn.Higher, A = t !== Zn.HIDDEN, o = A && !e && i, r = t === Zn.VISIBLE, a = {};
  return a.showFreemiumOverlay = o, a.showFullFreemiumOverlay = r, a;
}
function UE(i, n) {
  if (!i) return n;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  n.hashedDetectedImages && (e == null || e.push(...n.hashedDetectedImages)), n.detectionRecord && (t == null || t.push(...n.detectionRecord));
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function YE() {
  const i = Ot(null);
  function n({ cameraProperties: e }) {
    i.value = UE(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = n, t;
}
const za = qe(void 0);
za.displayName = "CommonThresholdsContext";
function TE() {
  const i = fe(za);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function PE() {
  return Ha() ? Tg.MOBILE : Tg.DESKTOP;
}
function HE({
  cameraOptionsThresholds: i,
  children: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = $(PE()), r = QA(() => ({ thresholds: t(i, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [i, A, o, e, t]);
  return /* @__PURE__ */ k(za.Provider, { value: r, children: n });
}
const Qa = {};
Qa.min = -1, Qa.max = 1;
const Ea = {};
Ea.confidence = 0, Ea.status = Qa;
const Z0 = {};
Z0.confidence = 0;
const z0 = {};
z0.confidence = 0;
const jA = {};
jA.faceConfidence = 0.4, jA.minFaceSizeRatio = 0.16, jA.maxFaceSizeRatio = 0.2, jA.sharpnessThreshold = 0.25, jA.brightnessLowThreshold = 0.2, jA.brightnessHighThreshold = 0.85, jA.outOfBoundsThreshold = 0.05, jA.devicePitchAngleThreshold = 30, jA.mouth = Ea, jA.leftEye = Z0, jA.rightEye = z0;
const la = {};
la.min = -1, la.max = 1;
const da = {};
da.confidence = 0, da.status = la;
const X0 = {};
X0.confidence = 0;
const $0 = {};
$0.confidence = 0;
const _A = {};
_A.faceConfidence = 0.4, _A.minFaceSizeRatio = 0.16, _A.maxFaceSizeRatio = 0.2, _A.sharpnessThreshold = 0.25, _A.brightnessLowThreshold = 0.2, _A.brightnessHighThreshold = 0.85, _A.outOfBoundsThreshold = 0.05, _A.devicePitchAngleThreshold = 30, _A.mouth = da, _A.leftEye = X0, _A.rightEye = $0;
const xa = {};
xa.MOBILE = jA, xa.DESKTOP = _A;
const KE = xa;
function jE(i, n) {
  var t, e, A;
  return {
    faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? n.faceConfidence,
    minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? n.minFaceSizeRatio,
    maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? n.maxFaceSizeRatio,
    sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? n.sharpnessThreshold,
    brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? n.brightnessLowThreshold,
    brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? n.brightnessHighThreshold,
    outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? n.outOfBoundsThreshold,
    devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? n.devicePitchAngleThreshold,
    mouth: {
      confidence: ((t = i == null ? void 0 : i.mouth) == null ? void 0 : t.confidence) ?? n.mouth.confidence,
      status: {
        min: ((e = i == null ? void 0 : i.mouth) == null ? void 0 : e.status.min) ?? n.mouth.status.min,
        max: ((A = i == null ? void 0 : i.mouth) == null ? void 0 : A.status.max) ?? n.mouth.status.max
      }
    },
    leftEye: (i == null ? void 0 : i.leftEye) ?? {
      confidence: n.leftEye.confidence
    },
    rightEye: (i == null ? void 0 : i.rightEye) ?? {
      confidence: n.rightEye.confidence
    }
  };
}
function _E({
  cameraOptionsThresholds: i,
  children: n
}) {
  return /* @__PURE__ */ k(
    HE,
    {
      cameraOptionsThresholds: i,
      thresholdsPresetMapper: jE,
      thresholdsPresets: KE,
      children: n
    }
  );
}
function qE({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: n }) {
  const t = AA(i);
  J(() => {
    t.current = i;
  }, [i]);
  const e = OA((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    n && !r.isInCandidateSelection || r.invalidValidators.includes(nA.FACE_NOT_PRESENT) && t.current();
  }, [n]), A = {};
  return A.handleFaceDetection = e, A;
}
function VE(i) {
  return function(t) {
    const { handleFaceDetection: e } = i(t);
    Va(zA.FACE_DETECTION, e);
  };
}
const ZE = ({ children: i }) => {
  const n = AA(null);
  return mE(n, zA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(wB, { ref: n, children: i });
}, Xa = -5265 + -9 * 694 + 11511 + 0.5;
function zE() {
  const i = {};
  i.max = Xa;
  const n = {};
  n.confidence = 0.3, n.status = i;
  const t = {};
  return t.mouth = n, t;
}
const XE = -18 * -333 + -9737 + -3743 * -1 + 0.4;
function $E(i) {
  const n = {};
  n.min = XE + i;
  const t = {};
  t.confidence = 0.3, t.status = n;
  const e = {};
  return e.brightnessHighThreshold = 1, e.brightnessLowThreshold = -1, e.sharpnessThreshold = -1, e.outOfBoundsThreshold = -1, e.minFaceSizeRatio = 0.1, e.mouth = t, e;
}
const Al = 1e4, os = 905 * -1 + 269 * 3 + -1 * -113, Yn = {};
Yn.timeout = 4e3, Yn.threshold = 0.7, Yn.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const sr = Yn;
function Ac() {
  return TE();
}
function el(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: Dt(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: Dt(i.rightEye.center, n) }, mouth: { ...i.mouth, center: Dt(i.mouth.center, n) }, topLeft: Dt(i.topLeft, n), bottomRight: Dt(i.bottomRight, n), faceCenter: Dt(i.faceCenter, n) };
}
function ec(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = TB(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = a, s.left = g, t0(s);
}
const tl = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  g0(i, o, "rgba(255, 0, 0, 0.3)", !0), mo(i, e, "lime");
}, ol = (i, n, t) => {
  const e = ec(n, t);
  Object.values(e).map((A) => mo(i, A, "orange"));
};
function nl({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = Ac(), { redfin: o } = he(), r = AA(null);
  if (J(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, RB(r.current);
    const Q = $n(i), f = s0(
      i,
      e.outOfBoundsThreshold,
      Q
    ), p = UB(i);
    n.value && (tl(r.current, n.value.processedImage.detection), ol(
      r.current,
      n.value.processedImage.detection,
      i
    ), er(r.current, Q, "lime"), er(r.current, f, "yellow"), er(r.current, p, "blue"), mo(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), mo(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), mo(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: a,
    detectionTime: g,
    fps: s,
    processedImage: { detection: C, instructionCode: I, invalidValidators: E, isEscalated: B },
    resolution: l,
    samVersion: d
  } = n.value, x = {
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
    "Detection time": g,
    FPS: s,
    "Avg FPS": a,
    Tier: o,
    Instruction: I,
    Resolution: l,
    "Escalated instruction": B,
    "Component version": "7.7.0",
    "Thresholds preset": A
  };
  return d && (x["SAM version"] = d), E.length > 0 && (x["Invalid validators"] = E), /* @__PURE__ */ k(
    DQ,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function il({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function rl(i, n) {
  const [t, e] = $(!1), A = () => e((a) => !a), o = "" + t;
  Ao(() => {
    function a() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, I.observe(i.current, E), I;
    }
    function g() {
      var B;
      if (!((B = i.current) != null && B["parentElement"])) return;
      const I = new MutationObserver((l) => {
        l.find((x) => {
          for (const Q of x.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), l.forEach((x) => {
          x.addedNodes.forEach((Q) => {
            var f;
            Q !== (n == null ? void 0 : n.current) && ((f = Q.parentElement) == null || f.removeChild(Q));
          });
        });
      }), E = {};
      return E.childList = !0, I.observe(i.current.parentElement, E), I;
    }
    const s = a(), C = g();
    return () => {
      C == null || C.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const al = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function gl({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = AA(null), { key: o } = rl(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: al, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function sl({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = YB(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    gl,
    {
      cutOut: i || /* @__PURE__ */ k(il, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Il({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = he(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = JE(i), a = AA(null), g = i && A === XA.RUNNING;
  return /* @__PURE__ */ k(Ae, { children: [
    o && i && /* @__PURE__ */ k(
      sl,
      {
        fullOverlay: r,
        ignoreElement: a,
        resolution: i
      }
    ),
    n,
    g && /* @__PURE__ */ k("div", { ref: a, children: /* @__PURE__ */ k(
      nl,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const cl = (i, n) => {
  if (tQ()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    Ro.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ns = {}, Ir = {}, cr, is;
function Cl() {
  if (is) return cr;
  is = 1, cr = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            g(s);
          else {
            for (var C = new Array(arguments.length - 1), I = 0; I < C.length; )
              C[I++] = arguments[I];
            a.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, g(s));
      }
    });
  }
  return cr;
}
var rs = {}, as;
function Bl() {
  return as || (as = 1, function(i) {
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
      for (var s = null, C = [], I = 0, E = 0, B; a < g; ) {
        var l = r[a++];
        switch (E) {
          case 0:
            C[I++] = t[l >> 2], B = (l & 3) << 4, E = 1;
            break;
          case 1:
            C[I++] = t[B | l >> 4], B = (l & 15) << 2, E = 2;
            break;
          case 2:
            C[I++] = t[B | l >> 6], C[I++] = t[l & 63], E = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, C)), I = 0);
      }
      return E && (C[I++] = t[B], C[I++] = 61, E === 1 && (C[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, C.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, C.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var s = g, C = 0, I, E = 0; E < r.length; ) {
        var B = r.charCodeAt(E++);
        if (B === 61 && C > 1)
          break;
        if ((B = e[B]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            I = B, C = 1;
            break;
          case 1:
            a[g++] = I << 2 | (B & 48) >> 4, I = B, C = 2;
            break;
          case 2:
            a[g++] = (I & 15) << 4 | (B & 60) >> 2, I = B, C = 3;
            break;
          case 3:
            a[g++] = (I & 3) << 6 | B, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return g - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(rs)), rs;
}
var Cr, gs;
function Ql() {
  if (gs) return Cr;
  gs = 1, Cr = i;
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
  }, Cr;
}
var Br, ss;
function El() {
  if (ss) return Br;
  ss = 1, Br = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function s(B, l, d) {
        r[0] = B, l[d] = a[0], l[d + 1] = a[1], l[d + 2] = a[2], l[d + 3] = a[3];
      }
      function C(B, l, d) {
        r[0] = B, l[d] = a[3], l[d + 1] = a[2], l[d + 2] = a[1], l[d + 3] = a[0];
      }
      o.writeFloatLE = g ? s : C, o.writeFloatBE = g ? C : s;
      function I(B, l) {
        return a[0] = B[l], a[1] = B[l + 1], a[2] = B[l + 2], a[3] = B[l + 3], r[0];
      }
      function E(B, l) {
        return a[3] = B[l], a[2] = B[l + 1], a[1] = B[l + 2], a[0] = B[l + 3], r[0];
      }
      o.readFloatLE = g ? I : E, o.readFloatBE = g ? E : I;
    }() : function() {
      function r(g, s, C, I) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, I);
        else if (isNaN(s))
          g(2143289344, C, I);
        else if (s > 34028234663852886e22)
          g((E << 31 | 2139095040) >>> 0, C, I);
        else if (s < 11754943508222875e-54)
          g((E << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, C, I);
        else {
          var B = Math.floor(Math.log(s) / Math.LN2), l = Math.round(s * Math.pow(2, -B) * 8388608) & 8388607;
          g((E << 31 | B + 127 << 23 | l) >>> 0, C, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, s, C) {
        var I = g(s, C), E = (I >> 31) * 2 + 1, B = I >>> 23 & 255, l = I & 8388607;
        return B === 255 ? l ? NaN : E * (1 / 0) : B === 0 ? E * 1401298464324817e-60 * l : E * Math.pow(2, B - 150) * (l + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function s(B, l, d) {
        r[0] = B, l[d] = a[0], l[d + 1] = a[1], l[d + 2] = a[2], l[d + 3] = a[3], l[d + 4] = a[4], l[d + 5] = a[5], l[d + 6] = a[6], l[d + 7] = a[7];
      }
      function C(B, l, d) {
        r[0] = B, l[d] = a[7], l[d + 1] = a[6], l[d + 2] = a[5], l[d + 3] = a[4], l[d + 4] = a[3], l[d + 5] = a[2], l[d + 6] = a[1], l[d + 7] = a[0];
      }
      o.writeDoubleLE = g ? s : C, o.writeDoubleBE = g ? C : s;
      function I(B, l) {
        return a[0] = B[l], a[1] = B[l + 1], a[2] = B[l + 2], a[3] = B[l + 3], a[4] = B[l + 4], a[5] = B[l + 5], a[6] = B[l + 6], a[7] = B[l + 7], r[0];
      }
      function E(B, l) {
        return a[7] = B[l], a[6] = B[l + 1], a[5] = B[l + 2], a[4] = B[l + 3], a[3] = B[l + 4], a[2] = B[l + 5], a[1] = B[l + 6], a[0] = B[l + 7], r[0];
      }
      o.readDoubleLE = g ? I : E, o.readDoubleBE = g ? E : I;
    }() : function() {
      function r(g, s, C, I, E, B) {
        var l = I < 0 ? 1 : 0;
        if (l && (I = -I), I === 0)
          g(0, E, B + s), g(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, B + C);
        else if (isNaN(I))
          g(0, E, B + s), g(2146959360, E, B + C);
        else if (I > 17976931348623157e292)
          g(0, E, B + s), g((l << 31 | 2146435072) >>> 0, E, B + C);
        else {
          var d;
          if (I < 22250738585072014e-324)
            d = I / 5e-324, g(d >>> 0, E, B + s), g((l << 31 | d / 4294967296) >>> 0, E, B + C);
          else {
            var x = Math.floor(Math.log(I) / Math.LN2);
            x === 1024 && (x = 1023), d = I * Math.pow(2, -x), g(d * 4503599627370496 >>> 0, E, B + s), g((l << 31 | x + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, B + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, s, C, I, E) {
        var B = g(I, E + s), l = g(I, E + C), d = (l >> 31) * 2 + 1, x = l >>> 20 & 2047, Q = 4294967296 * (l & 1048575) + B;
        return x === 2047 ? Q ? NaN : d * (1 / 0) : x === 0 ? d * 5e-324 * Q : d * Math.pow(2, x - 1075) * (Q + 4503599627370496);
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
  return Br;
}
function Is(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Qr, cs;
function ll() {
  if (cs) return Qr;
  cs = 1, Qr = i;
  function i(n) {
    try {
      if (typeof Is != "function")
        return null;
      var t = Is(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Qr;
}
var Cs = {}, Bs;
function dl() {
  return Bs || (Bs = 1, function(i) {
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
  }(Cs)), Cs;
}
var Er, Qs;
function xl() {
  if (Qs) return Er;
  Qs = 1, Er = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > o)
        return n(g);
      a + g > A && (r = n(A), a = 0);
      var s = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), s;
    };
  }
  return Er;
}
var lr, Es;
function ul() {
  if (Es) return lr;
  Es = 1, lr = n;
  var i = pt();
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
  }, lr;
}
var ls;
function pt() {
  return ls || (ls = 1, function(i) {
    var n = i;
    n.asPromise = Cl(), n.base64 = Bl(), n.EventEmitter = Ql(), n.float = El(), n.inquire = ll(), n.utf8 = dl(), n.pool = xl(), n.LongBits = ul(), n.isNode = !!(typeof kt < "u" && kt && kt.process && kt.process.versions && kt.process.versions.node), n.global = n.isNode && kt || typeof window < "u" && window || typeof self < "u" && self || Ir, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ir)), Ir;
}
var dr, ds;
function tc() {
  if (ds) return dr;
  ds = 1, dr = g;
  var i = pt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(x, Q, f) {
    this.fn = x, this.len = Q, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function a(x) {
    this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
  }
  function g() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var s = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new n();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = s(), g.alloc = function(x) {
    return new i.Array(x);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(x, Q, f) {
    return this.tail = this.tail.next = new o(x, Q, f), this.len += Q, this;
  };
  function C(x, Q, f) {
    Q[f] = x & 255;
  }
  function I(x, Q, f) {
    for (; x > 127; )
      Q[f++] = x & 127 | 128, x >>>= 7;
    Q[f] = x;
  }
  function E(x, Q) {
    this.len = x, this.next = void 0, this.val = Q;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = I, g.prototype.uint32 = function(x) {
    return this.len += (this.tail = this.tail.next = new E(
      (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
      x
    )).len, this;
  }, g.prototype.int32 = function(x) {
    return x < 0 ? this._push(B, 10, t.fromNumber(x)) : this.uint32(x);
  }, g.prototype.sint32 = function(x) {
    return this.uint32((x << 1 ^ x >> 31) >>> 0);
  };
  function B(x, Q, f) {
    for (; x.hi; )
      Q[f++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
    for (; x.lo > 127; )
      Q[f++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
    Q[f++] = x.lo;
  }
  g.prototype.uint64 = function(x) {
    var Q = t.from(x);
    return this._push(B, Q.length(), Q);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(x) {
    var Q = t.from(x).zzEncode();
    return this._push(B, Q.length(), Q);
  }, g.prototype.bool = function(x) {
    return this._push(C, 1, x ? 1 : 0);
  };
  function l(x, Q, f) {
    Q[f] = x & 255, Q[f + 1] = x >>> 8 & 255, Q[f + 2] = x >>> 16 & 255, Q[f + 3] = x >>> 24;
  }
  g.prototype.fixed32 = function(x) {
    return this._push(l, 4, x >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(x) {
    var Q = t.from(x);
    return this._push(l, 4, Q.lo)._push(l, 4, Q.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(x) {
    return this._push(i.float.writeFloatLE, 4, x);
  }, g.prototype.double = function(x) {
    return this._push(i.float.writeDoubleLE, 8, x);
  };
  var d = i.Array.prototype.set ? function(x, Q, f) {
    Q.set(x, f);
  } : function(x, Q, f) {
    for (var p = 0; p < x.length; ++p)
      Q[f + p] = x[p];
  };
  return g.prototype.bytes = function(x) {
    var Q = x.length >>> 0;
    if (!Q)
      return this._push(C, 1, 0);
    if (i.isString(x)) {
      var f = g.alloc(Q = e.length(x));
      e.decode(x, f, 0), x = f;
    }
    return this.uint32(Q)._push(d, Q, x);
  }, g.prototype.string = function(x) {
    var Q = A.length(x);
    return Q ? this.uint32(Q)._push(A.write, Q, x) : this._push(C, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var x = this.head, Q = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = x.next, this.tail = Q, this.len += f), this;
  }, g.prototype.finish = function() {
    for (var x = this.head.next, Q = this.constructor.alloc(this.len), f = 0; x; )
      x.fn(x.val, Q, f), f += x.len, x = x.next;
    return Q;
  }, g._configure = function(x) {
    n = x, g.create = s(), n._configure();
  }, dr;
}
var xr, xs;
function fl() {
  if (xs) return xr;
  xs = 1, xr = t;
  var i = tc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = pt();
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
  }, t._configure(), xr;
}
var ur, us;
function oc() {
  if (us) return ur;
  us = 1, ur = o;
  var i = pt(), n, t = i.LongBits, e = i.utf8;
  function A(I, E) {
    return RangeError("index out of range: " + I.pos + " + " + (E || 1) + " > " + I.len);
  }
  function o(I) {
    this.buf = I, this.pos = 0, this.len = I.length;
  }
  var r = typeof Uint8Array < "u" ? function(I) {
    if (I instanceof Uint8Array || Array.isArray(I))
      return new o(I);
    throw Error("illegal buffer");
  } : function(I) {
    if (Array.isArray(I))
      return new o(I);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(I) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
      })(I);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ function() {
    var I = 4294967295;
    return function() {
      if (I = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (I = (I | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return I;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return I;
    };
  }(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var I = this.uint32();
    return I >>> 1 ^ -(I & 1) | 0;
  };
  function g() {
    var I = new t(0, 0), E = 0;
    if (this.len - this.pos > 4) {
      for (; E < 4; ++E)
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      if (I.lo = (I.lo | (this.buf[this.pos] & 127) << 28) >>> 0, I.hi = (I.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return I;
      E = 0;
    } else {
      for (; E < 3; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
      return I.lo = (I.lo | (this.buf[this.pos++] & 127) << E * 7) >>> 0, I;
    }
    if (this.len - this.pos > 4) {
      for (; E < 5; ++E)
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
    } else
      for (; E < 5; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(I, E) {
    return (I[E - 4] | I[E - 3] << 8 | I[E - 2] << 16 | I[E - 1] << 24) >>> 0;
  }
  o.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return s(this.buf, this.pos += 4);
  }, o.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return s(this.buf, this.pos += 4) | 0;
  };
  function C() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(s(this.buf, this.pos += 4), s(this.buf, this.pos += 4));
  }
  return o.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var I = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, I;
  }, o.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var I = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, I;
  }, o.prototype.bytes = function() {
    var I = this.uint32(), E = this.pos, B = this.pos + I;
    if (B > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(E, B);
    if (E === B) {
      var l = i.Buffer;
      return l ? l.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, B);
  }, o.prototype.string = function() {
    var I = this.bytes();
    return e.read(I, 0, I.length);
  }, o.prototype.skip = function(I) {
    if (typeof I == "number") {
      if (this.pos + I > this.len)
        throw A(this, I);
      this.pos += I;
    } else
      do
        if (this.pos >= this.len)
          throw A(this);
      while (this.buf[this.pos++] & 128);
    return this;
  }, o.prototype.skipType = function(I) {
    switch (I) {
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
        for (; (I = this.uint32() & 7) !== 4; )
          this.skipType(I);
        break;
      case 5:
        this.skip(4);
        break;
      /* istanbul ignore next */
      default:
        throw Error("invalid wire type " + I + " at offset " + this.pos);
    }
    return this;
  }, o._configure = function(I) {
    n = I, o.create = a(), n._configure();
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
        return C.call(this)[E](!0);
      },
      sfixed64: function() {
        return C.call(this)[E](!1);
      }
    });
  }, ur;
}
var fr, fs;
function hl() {
  if (fs) return fr;
  fs = 1, fr = t;
  var i = oc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = pt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), fr;
}
var hs = {}, hr, ps;
function pl() {
  if (ps) return hr;
  ps = 1, hr = n;
  var i = pt();
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
        function(s, C) {
          if (s)
            return g.emit("error", s, e), a(s);
          if (C === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(C instanceof o))
            try {
              C = o[g.responseDelimited ? "decodeDelimited" : "decode"](C);
            } catch (I) {
              return g.emit("error", I, e), a(I);
            }
          return g.emit("data", C, e), a(null, C);
        }
      );
    } catch (s) {
      g.emit("error", s, e), setTimeout(function() {
        a(s);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, hr;
}
var ys;
function yl() {
  return ys || (ys = 1, function(i) {
    var n = i;
    n.Service = pl();
  }(hs)), hs;
}
var ms, ws;
function ml() {
  return ws || (ws = 1, ms = {}), ms;
}
var Ds;
function wl() {
  return Ds || (Ds = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = tc(), n.BufferWriter = fl(), n.Reader = oc(), n.BufferReader = hl(), n.util = pt(), n.rpc = yl(), n.roots = ml(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(ns)), ns;
}
var bs, ks;
function Dl() {
  return ks || (ks = 1, bs = wl()), bs;
}
var N = Dl();
const h = N.Reader, R = N.Writer, u = N.util, c = N.roots.default || (N.roots.default = {}), _e = c.dot = (() => {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.AndroidMetadata(), s, C;
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              for (s = "", C = null; A.pos < E; ) {
                let B = A.uint32();
                switch (B >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(B & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = C;
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
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.IosMetadata(), s, C;
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.cameraModelId = A.string();
              break;
            }
            case 2: {
              g.architectureInfo === u.emptyObject && (g.architectureInfo = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = !1; A.pos < E; ) {
                let B = A.uint32();
                switch (B >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(B & 7);
                    break;
                }
              }
              g.architectureInfo[s] = C;
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
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (I & 7) === 2) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
function X(i, n) {
  const t = fi();
  return X = function(e, A) {
    e = e - (1 * 4639 + -4678 + 289);
    let o = t[e];
    if (X.TvudPQ === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      X.XCsjCi = C, i = arguments, X.TvudPQ = !0;
    }
    const a = t[-32 * -97 + -8831 * 1 + 5727], g = e + a, s = i[g];
    return s ? o = s : (X.hzkeCC === void 0 && (X.hzkeCC = !0), o = X.XCsjCi(o, A), i[g] = o), o;
  }, X(i, n);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return X(a - 848, s);
  }
  function e(a, g, s, C, I) {
    return X(s - -16, a);
  }
  function A(a, g, s, C, I) {
    return X(I - -993, s);
  }
  const o = i();
  function r(a, g, s, C, I) {
    return X(a - -640, C);
  }
  for (; ; )
    try {
      if (parseInt(A(-728, -763, "Fo6n", -770, -729)) / 1 * (parseInt(A(-605, -736, "c6M]", -657, -619)) / 2) + parseInt(e("vjkR", 433, 363, 475, 470)) / 3 * (-parseInt(A(-807, -791, "Fo6n", -739, -721)) / 4) + -parseInt(r(-171, -74, -250, "WnXs", -90)) / 5 * (-parseInt(t(1191, 1075, "[ALK", 1281, 1288)) / 6) + -parseInt(t(1173, 1216, "*PNm", 1093, 1115)) / 7 + parseInt(r(-281, -384, -314, "3z4Q", -231)) / 8 * (parseInt(A(-603, -423, "Hiv9", -419, -518)) / 9) + parseInt(r(-303, -257, -367, "3z4Q", -282)) / 10 + -parseInt(r(-324, -374, -247, "wimM", -294)) / 11 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(fi, 93238 * -4 + 18775 + -20580 * -45);
function fi() {
  const i = ["vGNcHYOl", "rqRcMc5e", "nCoGW5SqW5q", "W61AW5FdQuy", "W4NdHCkLWOba", "nmoxW7zhW4S", "WQKZiL95", "wK1EaGS", "BdHZW4Ge", "D3pcGWum", "pCkNWRFdTSkU", "mCoElw3cPG", "WQNcP8kPt8o0", "FejiW6BcGG", "z27cKWGo", "WRfimCk/Aq", "W5pdJJNdHmoA", "o8kZiMSM", "cSoNW61JW7a", "CmoPa3Ge", "WQlcOSkVu8o8", "jun1W6BcGG", "WRtcGG5gtq", "W4vJW4ZdSwm", "iHtcHcr+", "sSkTWPPbWQy", "W7GOFmkrWPxcTSoScCo3psGdWRe", "W7dcPWpcSxW", "WOyhoK8B", "WQldLvtdGhS", "WRC6W6L+mW", "W5ZdP8krrCoiFSosW7S", "ySojW58mW5W", "WOnRmSorrG", "z2S7arq", "WPRcISoZFq", "fCoeEfi", "sSkwW60qW6C", "BKTZWPq/", "B8kTWPRdOCkr", "j8onsh/dUa", "WOBcLITcFq", "W6PvW5NcGM8", "AmkAW5LfWQW", "W6VcQrdcSsm", "CWVcGanm", "W47cQSopW5Tc", "bYXDANJcGZPuW6VcOM3dLCkQAa", "WQ/dOmk7WPfD", "kmkrnmoJW5K", "n8oAoCokW40", "FSoRp0P5", "eGNcTCkuWRC", "s8k4eSk/ua", "W6RcJSouW5NdTG", "WQzYDCowWPi", "y1uydrK", "W43cQIdcKv0", "FSoFoCo4cazlFCoBAW", "wb7cGZC", "umo1yxbL", "FSkiW5GZW7m", "a8o2W5zKW44", "gSoPe8oTBq", "g8kDzcGgzgpdJSoRW59kWOHa", "E8k9WRPwW48", "yrpdP8kUAq", "ae4fWPaa", "W5FcUSoGW5ddQW", "W7pcNmoSWOK", "WPLwcwr2", "W6vPDmoAha", "qfLZWPpcQG", "WQddNmkMWQ/dHa", "FSkHWPJcRCon", "xSoOWPpdRmkT", "W5DKECoeoG", "y0OwW7TZ", "W4DSW6FdTfS", "CXtcVXWj", "F1ZcVHiW", "W4JdHSoDW6D2", "zSohWQBcHSkc", "D8kmtSkZWPW", "eComiSoUW60", "kmkSw8kGhG", "CCobWQNcVmoA", "WRBdOSkUWR05", "WPyle8kFAColrmo0cJFcKsm", "W5bkW5lcK2q", "v2eSfWa", "zSohWO/dTCk1", "l8oKpmo+nW", "WPHFeSojW6K", "WPr/FmkAlW", "WQm0dCo1oG", "WPyhgSkxA8opDmo7js/cLti", "WQxcSColDmkc", "lmoIq8oAW5i", "F00qfqC", "WP1inComW7C", "CmkfWPzhcq", "vSoJW4HZW70", "wmoTgc13", "l8oQlmoXBa", "WOBdNZWRFq", "WQ7dO8kIWRu8", "WRRcPSo/kSkw", "qxahW5Cd", "u8obve/cOG", "aCkQWPhcKmo1", "W47cJmoJW4PD", "A0FdUSogyq", "W7RcIwJdQ3G", "CCofW4KBW6K", "o8opdCoyW5m", "WOu0c8kVva", "xttcPY17", "EXVcJWag", "WQnBD8ovW4W", "D8oIW6PmW7m", "hSkVWOrukq", "WPLTogny", "eCkRWRPueq", "qSksiCohW78", "vc/cLa9z", "eSkoWOSZeW", "mCk5m8oAgW", "W4/cUa/dH8oE", "WPydemkDzSkZBSoXmHpcMG", "tmkYWONdVCkl", "WOTVaSkvsa", "W7VdT8oFWOxcOG", "o8kozSoTWPm", "WRhdLmk3W5hcHSkxbxJdG2StdW", "W5BdKrxdJmoa", "hSoAoSo5W4i", "hSkuzmo+cq", "vCk5W61lWOK", "hCk2WQz4hW", "WRxdL8kBWQ8rW6VdLx1XkqK6uGa", "W6dcJSoeW6Pe", "WOxdP8kPhCoy", "WRy0kx53", "vrXEW4O6", "tX9dW5G/", "amo7CKK", "W43cUHxcTLu", "bmklWQZcNtO", "u8kbWOaCWR/dHmkCDJLaqWrg", "ECoAWQpdKmkJ", "v8ouWR3cGSod", "W5bxW6pdN1q", "WRL7WP7dMmk+", "xueZWP17", "a8oAlg/cKG", "t8k1bmkp", "hSkmWQHdma", "p8o1qSoyW4e", "Eg90W6NcMq", "iSkpzCkO", "bX4pWPnfkmo1WOhdVYriwrS", "fxZcO8kGBG", "hSk3W6WmW5G", "iHdcNGXc", "amoCBmo/hG", "WR8iW4LFpq", "W5pdN1zairVdVJtdN8k7WOW", "wmoeWO/dSmkT", "o8oTW7xdQCkL", "kCoJtwBcMW", "uuKZW4z7", "W6VdNcNdRSoe", "WQZdPSkHWPNcOq", "x03cLGOJ", "iKjjW7hcOG", "adRcIComW5u", "W7ddOaFdQ8oJ", "FSoBehbE", "rLK8hsC", "WO8dW6j0ea", "ittcQaXE", "uCkyWQtdOSos", "bHjVW4WJvCkHWQy", "WQFdMCkNu8kz", "W5pcPrastG", "W6JdNH7dJmoh", "WOlcN8kgDSo9", "W67dMK/cU8or", "r0e/pc0", "mCkXWPP4WOS", "WQRdV8k+W6vk", "W4fNwt4CjNhdIN8jWPlcNCoD", "uwmlm3u", "cf7dLwXFW4FcSCowr3SSrq", "W4TQemo0fa", "kZBcI8oSWQK", "rCkrrSotwq", "wCkcoCoJlmoQWO13", "W4/cV8ovW680kq99iSk9g8kXW6G", "Ad9tW6jS", "emk2WP3dPWW", "pmopW77cVCo8", "awpcRtCaW4KC", "W7JcJCoaWPtdGq", "ygesW4vN", "Ev5Fhb8", "kSk6DCoIWRS", "vCkIWPGAWPm", "nCodW6fXW4e", "WQPxfxba", "W5lcHXCNqq", "W4qZghXv", "bu8gmaO", "EqjRW4yn", "C8oPeSkZWQxcP0CrW7Ht", "W7ybzCo7pq", "vv/dT8kaBG", "uSk6W4DWWQK", "WRVcGJravG", "bmotg0qL", "v8k/iCknyG", "iSoRrCoSW60", "W4HeW5hdVeu", "n8o0W4izW7u", "W4FcH8o3vCku", "mmofW6HTWQXgaSoC", "l8kCCCk9ma", "WQ0XcMT3", "x8oPWQRdT8o/", "W7NcMmooWOpdPq", "WPm1WPDldG", "W6L6W5hdGvi", "WQFdN8kAWP7dHa", "W47cH8oJWRxdPW"];
  return fi = function() {
    return i;
  }, fi();
}
function bl() {
  const i = n("stCE", 588, 488, 390, 486) + n("73JP", 615, 649, 597, 671) + s(836, 795, "bHPa") + r(-58, -172, -67, "CspV") + A(-270, -297, -238, "WnXs") + s(872, 925, "vjkR") + a("*c7e", 1267) + n("4APK", 653, 579, 557, 653) + a("Mwn1", 1371) + n("MVrK", 697, 589, 582, 589) + a("rHN%", 1274) + r(-66, 72, -18, "*PNm") + A(-171, -162, -279, "zwrC") + s(990, 922, "$qs(") + s(754, 766, "WnXs") + n("nI])", 688, 590, 733, 697) + a("[ALK", 1377) + n("#GCi", 568, 675, 768, 676) + n("Fo6n", 466, 566, 443, 483) + s(774, 840, "FB!S") + s(867, 915, "CspV") + A(-152, -209, -40, "GB2(") + r(-44, -166, -85, "Mwn1") + a("nI])", 1239) + n("[ALK", 670, 736, 549, 626) + n("]ymZ", 521, 678, 592, 565) + A(-302, -312, -354, "[ALK") + A(-147, -31, -154, "u(b)") + a("or0C", 1407) + n("4APK", 414, 514, 624, 516) + A(-289, -321, -325, "o4dU") + s(740, 816, "Mwn1") + A(-205, -223, -307, "nLdb") + r(9, -63, -3, "lmZq") + s(801, 768, "L%zu") + s(989, 912, "FZjl") + n("lj0D", 513, 732, 526, 630) + r(135, 86, 20, "#GCi") + n("#GCi", 674, 619, 508, 586) + a("D4bq", 1252) + s(746, 822, "wimM") + a("*PNm", 1222) + r(-259, -250, -145, "6NLp") + a("]ymZ", 1342) + a("6NLp", 1259) + r(-79, -51, -141, "MVrK") + n("]ymZ", 618, 460, 566, 531) + n("Mwn1", 542, 519, 499, 579) + a("rHN%", 1197) + A(-287, -317, -307, "bHPa") + a("rHN%", 1291) + r(-173, -269, -172, "#GCi") + s(966, 946, "FZjl") + n("u(b)", 599, 431, 534, 545) + A(-183, -229, -220, "bHPa") + s(739, 782, "6NLp") + r(-13, -193, -123, "JAoe") + a("4APK", 1290) + r(-88, -60, 6, "Y(1w") + n("*xez", 579, 597, 500, 540) + a("vjkR", 1369) + s(665, 779, "]ymZ") + n("o4dU", 551, 592, 461, 487) + n("8y1s", 538, 450, 625, 550) + A(-121, -123, -109, "Hiv9") + s(1056, 940, "zwrC") + r(-96, -103, -168, "Hiv9") + r(-191, -171, -105, "FZjl") + n("Ee$w", 536, 509, 538, 482) + a("wb@s", 1416) + s(862, 770, "Y(1w") + s(782, 869, "Mwn1") + r(-80, -63, -103, "Ee$w") + n("wT%E", 605, 726, 552, 654) + A(-300, -288, -351, "GB2(") + n("FB!S", 477, 499, 469, 582) + n("o^#s", 466, 548, 491, 493) + a("Ev*9", 1282) + s(842, 921, "bHPa") + a("*c7e", 1399) + n("rHN%", 495, 720, 628, 612) + n("Ee$w", 472, 449, 437, 498) + r(10, -107, 5, "[ALK") + n("lj0D", 576, 631, 647, 665) + r(-94, -212, -116, "4APK") + r(-84, -28, 26, "bHPa") + A(-195, -300, -125, "$qs(") + a("*c7e", 1382) + s(946, 882, "JAoe") + a("CspV", 1350) + n("wT%E", 649, 516, 673, 594) + a("L%zu", 1201) + r(-119, -42, -71, "rHN%") + n("6NLp", 634, 442, 538, 530) + s(929, 823, "wT%E") + r(-79, -106, -178, "nI])") + a("Fo6n", 1336) + A(-303, -418, -311, "c6M]") + r(-160, -104, -80, "L%zu") + n("lj0D", 559, 675, 512, 559) + A(-329, -382, -389, "lj0D") + n("[ALK", 688, 586, 557, 592) + n("6NLp", 605, 527, 543, 528) + a("6NLp", 1277) + s(1017, 916, "vjkR") + n("[ALK", 683, 657, 649, 618) + A(-122, -65, -28, "]ymZ") + A(-118, -30, -224, "CspV") + n("nI])", 610, 561, 442, 507) + a("N4dy", 1264) + r(-109, -150, -43, "$qs(") + s(779, 778, "GB2(") + a("nLdb", 1230) + n("Hiv9", 765, 562, 646, 661) + n("lmZq", 611, 585, 630, 523) + a("Fo6n", 1426) + r(-11, 137, 36, "FB!S") + n("]ymZ", 562, 514, 406, 491) + n("C#[)", 589, 548, 555, 534) + n("or0C", 697, 567, 696, 583) + a("WwUn", 1251) + r(-116, -161, -156, "]ymZ") + A(-193, -110, -112, "N4dy") + a("MVrK", 1394) + r(-106, -101, -181, "#GCi") + s(829, 906, "GB2(") + n("rQUw", 678, 752, 588, 695) + r(1, -12, -82, "#GCi") + r(-146, -169, -87, "GB2(") + A(-165, -127, -108, "#GCi") + a("#GCi", 1313) + a("c6M]", 1418) + s(881, 878, "rQUw") + s(883, 787, "L%zu") + n("wb@s", 521, 623, 459, 570) + s(859, 924, "N4dy") + r(-172, 39, -65, "#GCi") + a("Mwn1", 1297) + A(-123, -198, -87, "]ymZ") + a("8y1s", 1383) + s(882, 973, "*c7e") + a("FfAn", 1340) + a("N4dy", 1265) + n("3z4Q", 594, 455, 576, 515) + A(-271, -358, -250, "]ymZ") + A(-313, -221, -217, "WwUn") + n("wb@s", 649, 690, 575, 674) + a("u(b)", 1338) + A(-134, -39, -160, "3z4Q") + n("FfAn", 717, 703, 558, 659) + r(57, 75, 10, "wimM") + s(867, 920, "L%zu") + r(-31, -16, -63, "u(b)") + a("Ee$w", 1349) + n("lj0D", 756, 753, 657, 645) + r(2, -90, -90, "zwrC") + a("MVrK", 1202) + s(739, 806, "o4dU") + r(-107, -177, -160, "wimM") + r(-114, -149, -179, "c6M]") + a("Ev*9", 1232) + s(751, 855, "vjkR") + a("*PNm", 1329) + s(765, 798, "zwrC") + a("*PNm", 1357) + s(931, 850, "Ee$w") + r(-149, -70, -75, "or0C") + a("*xez", 1327) + s(865, 961, "zwrC") + a("D4bq", 1353) + A(-175, -292, -70, "lj0D") + r(-166, -12, -76, "Fo6n") + s(1024, 986, "$qs(") + r(3, 4, -98, "D4bq") + a("rQUw", 1341) + r(6, -65, -15, "FB!S") + a("Mwn1", 1248) + a("D4bq", 1428) + a("73JP", 1233) + r(-173, -34, -118, "3&v$") + A(-242, -251, -272, "WnXs") + r(47, 81, 30, "Ev*9") + A(-162, -165, -268, "MVrK") + a("FB!S", 1368) + r(-121, -71, -61, "$qs(") + r(-64, -179, -107, "zwrC") + r(-209, -93, -176, "lmZq") + n("Hiv9", 815, 731, 744, 702) + A(-104, -96, -18, "CspV") + a("FZjl", 1300) + n("Hiv9", 679, 486, 530, 585) + s(969, 894, "#GCi") + a("L%zu", 1403) + r(-125, -46, -120, "nLdb") + n("o^#s", 560, 568, 461, 481) + A(-324, -408, -383, "*xez") + r(32, 57, 29, "wb@s") + a("u(b)", 1310) + s(1e3, 956, "4APK") + r(113, -19, 31, "rHN%");
  function n(C, I, E, B, l) {
    return X(l - 231, C);
  }
  const t = window[s(764, 827, "4APK")](i), e = window[n("o4dU", 743, 732, 683, 701)](t);
  function A(C, I, E, B, l) {
    return X(C - -583, B);
  }
  const o = GQ(e);
  function r(C, I, E, B, l) {
    return X(E - -447, B);
  }
  function a(C, I, E, B, l) {
    return X(I - 944, C);
  }
  const g = {};
  function s(C, I, E, B, l) {
    return X(I - 505, E);
  }
  return g[s(1049, 951, "GB2(")] = A0, g[n("rQUw", 619, 595, 566, 563)] = VB, window[a("WnXs", 1347) + "o"][A(-257, -161, -307, "Ee$w") + "e"][n("u(b)", 626, 749, 582, 685) + r(-75, 24, 0, "4APK")](a("CspV", 1424), o, g, !0, [s(929, 953, "wb@s") + "pt"]);
}
async function kl(i) {
  const n = await bl();
  function t(a, g, s, C, I) {
    return X(s - 330, I);
  }
  function e(a, g, s, C, I) {
    return X(I - 91, C);
  }
  function A(a, g, s, C, I) {
    return X(I - 601, s);
  }
  const o = {};
  o[r(980, "WnXs")] = A0;
  function r(a, g, s, C, I) {
    return X(a - 644, g);
  }
  return window[A(1069, 936, "WwUn", 1114, 1027) + "o"][t(831, 798, 723, 673, "Ev*9") + "e"][e(281, 388, 420, "$qs(", 389) + "pt"](o, n, i);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return YA(C - 838, I);
  }
  function e(a, g, s, C, I) {
    return YA(C - -389, g);
  }
  function A(a, g, s, C, I) {
    return YA(a - 610, I);
  }
  function o(a, g, s, C, I) {
    return YA(g - -453, C);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(t(1030, 1035, 1033, 1035, "*EIz")) / 1 + parseInt(t(1040, 1028, 1046, 1037, "3v3]")) / 2 + -parseInt(A(799, 804, 796, 803, "K5e@")) / 3 * (-parseInt(A(810, 821, 818, 803, "eZ2x")) / 4) + parseInt(t(1049, 1041, 1037, 1042, "kGa]")) / 5 * (-parseInt(o(-263, -263, -264, "hrDf", -272)) / 6) + parseInt(t(1053, 1035, 1046, 1043, "FinP")) / 7 + parseInt(A(798, 792, 799, 792, "l%WG")) / 8 + -parseInt(e(-181, "WkjQ", -194, -183, -173)) / 9 * (-parseInt(A(797, 786, 802, 808, "X09!")) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(hi, -5 * -32105 + -96404 + 1 * 111840);
function hi() {
  const i = ["w8kfWRlcKXJdUSo+W5bgW5FcQs0", "aaqJbdqwWQ/dRLlcLM7cVW", "WP8uWRpdV3PsW7a4W74", "W59taSkLabJcGZlcHCkVvrG", "whVcJmoxWRGPWPeIWQtcQLuT", "varmW4xdPeC3W4PuBcq", "oSoIWOFdPqpdRCoCW6FdKWSKW4ZcMW", "W7SMlJFcNH/cPu/dKgRcNSot", "rWNcKg7dH8kiW67cSG", "W6/cSGy", "jSkCWPxcG8kLxSoDW6X4", "vMqsWR3cGNWA", "uWjmW4ddPtHNW7npxZVdHWi", "l8o7W6dcHmoppCoEtcJdH8oPW60", "WPqmt2xdM8oBW5rLW5ZcTqxdPW", "dMahoCoSWPpcGmkAca0JW68", "pCoKWOFdOalcKSkmW57dIdG7", "WPWxjSk0uCoLgNJdMtNcKa", "WRdcGXvKW5yQhG", "WR/dPJ/cO1joemo8", "pCoHWOxdPWdcVSknW7xdRdC1", "WOCpqSoLuq"];
  return hi = function() {
    return i;
  }, hi();
}
function YA(i, n) {
  const t = hi();
  return YA = function(e, A) {
    e = e - (-2713 * -3 + 4055 + 1 * -12009);
    let o = t[e];
    if (YA.FMcSew === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      YA.TilVrC = C, i = arguments, YA.FMcSew = !0;
    }
    const a = t[1687 + -7 * 241], g = e + a, s = i[g];
    return s ? o = s : (YA.kTLEWX === void 0 && (YA.kTLEWX = !0), o = YA.TilVrC(o, A), i[g] = o), o;
  }, YA(i, n);
}
async function Sl(i) {
  function n(a, g, s, C, I) {
    return YA(s - -574, I);
  }
  const { iv: t, key: e, message: A } = await RQ(i), o = await kl(e), r = {};
  return r[n(-392, -375, -383, -389, "eZ2x")] = o, r.iv = t, r[n(-372, -376, -371, -363, "FsHU") + "ge"] = A, r;
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return uA(C - 533, s);
  }
  function e(g, s, C, I, E) {
    return uA(C - -138, s);
  }
  function A(g, s, C, I, E) {
    return uA(C - 572, s);
  }
  function o(g, s, C, I, E) {
    return uA(C - 428, s);
  }
  function r(g, s, C, I, E) {
    return uA(C - -207, g);
  }
  const a = i();
  for (; ; )
    try {
      if (parseInt(A(787, "QLbi", 777, 765, 783)) / 1 + -parseInt(t(719, "Xg7M", 732, 740, 734)) / 2 + parseInt(t(741, "qqWb", 740, 750, 749)) / 3 + -parseInt(t(746, "lnwR", 733, 739, 737)) / 4 + parseInt(e(74, "8$[s", 81, 71, 80)) / 5 + -parseInt(A(791, "zsi0", 782, 769, 783)) / 6 + parseInt(o(644, "INvm", 634, 636, 647)) / 7 * (-parseInt(r("TLq[", 10, 11, 16, 9)) / 8) === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(pi, 115725 + 687 * 578 + 167793 * -1);
function uA(i, n) {
  const t = pi();
  return uA = function(e, A) {
    e = e - (5 * 1598 + -7104 + -1 * 687);
    let o = t[e];
    if (uA.YcVxFR === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", l = "";
        for (let d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, x = B.length; d < x; d++)
          l += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(l);
      };
      const C = function(I, E) {
        let B = [], l = 0, d, x = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      uA.STOKOO = C, i = arguments, uA.YcVxFR = !0;
    }
    const a = t[501 + -1 * 8320 + 7819], g = e + a, s = i[g];
    return s ? o = s : (uA.UEZCwc === void 0 && (uA.UEZCwc = !0), o = uA.STOKOO(o, A), i[g] = o), o;
  }, uA(i, n);
}
function pi() {
  const i = ["emkRWRZcRSo6ac1Hu8olbSoS", "C8kNCq", "W78fcNlcTa", "WOVdOM0", "WQZdGg7cJmocW4tcNbaXWOy/cCo7", "gaeox8oQWO5Dgu1CWP1Fna", "vqZcKxvT", "W6e+e8owamoSdcXx", "WQ/cJ8o+uCkxemkQW4BdUCk6yLyV", "WQCTWP7dJmoqdeDZW7pdJCo7zG", "Bu7dIa", "W54/gMif", "WOXaDLy", "WQ1EvsldSmo0f0pcJCo0W7PL", "W5a2cmorWRy", "W7/cLM9gbrdcGmodWRpdP0Ph", "W4ZcV8oLW5iyWRn7kgpcVM8j", "WRVdNwZcGmkhamkNC1e", "W5KPWR7dNa", "emkKWRVcRSo8dWXjs8oEnSoB", "W73dJSkXgCoA", "WOGpWPq6vb5wnSo1W542WO4", "WOqmWO7dG8kRW7Tw", "WPuFW5ziW6xcQ3WFvmkbtLi", "WP3dIcRdL3e", "eIFcRfDWcMG", "WQPFxIxdSCo7velcRSokW6PFfq"];
  return pi = function() {
    return i;
  }, pi();
}
async function Gl(i) {
  const n = await window[e("8$[s", 978) + "o"][t(-282, "oMot", -260, -261, -271) + "e"][e("zsi0", 987) + "t"](o(84, 62, "G2cK", 71), i);
  function t(r, a, g, s, C) {
    return uA(C - -496, a);
  }
  function e(r, a, g, s, C) {
    return uA(a - 774, r);
  }
  function A(r, a, g, s, C) {
    return uA(g - 460, s);
  }
  function o(r, a, g, s, C) {
    return uA(s - -151, g);
  }
  return Array[t(-276, "%^c$", -280, -259, -273)](new Uint8Array(n))[e("KMdF", 986)]((r) => r[o(57, 63, "yj)W", 57) + e("D)f&", 988)](-6213 + 6229 * 1)[t(-271, "es]g", -285, -284, -279) + o(56, 56, "1RqD", 70)](-17 * -321 + 7542 + 41 * -317, "0"))[A(674, 668, 662, "INvm")]("");
}
function yi() {
  var i = ["W6BcQSoRWPrRW5y1eSoiW4qm", "hxaRaCktWOrUWQ4", "W7NdVtnsW7/dSGTKBxZcKSkaya", "W4xcOSkfbdJcPCooemkAxSoTeW", "W4pcQ8kpb2NdL8oXlCkZtq", "h3z4qCofW4C8W7tcUmkGW7HbW4BcKq", "C8kCW5BdUh7dR8olAW", "kGGdjmotWR/cPmoohSkvWQK", "W7PSW6ddLs4AW7rw", "WPRdK8odFmo7W4JdQCknWOldP3dcIa", "FCkCWQOtW5y2iSoIW4H1WRhcGehcQG", "W5NdNmo2W7zRoCoiW5VdVb8", "F8krW4noWPztqmkK", "DCo2jvBdMd/dGq", "ga8eaSkxWR1I", "W7OcoNhdNSoriCoMW6hcRmkT", "W64YWOpcH1mHW5jQW5Spa8ka", "emkiWQJcGWNcSCkZE0CMWPK", "x3pdGSokm8kbW4hdQ8kyW4v1WPVcNa", "FmkrWQivW5C2jmkHW7nZWQNcGMu", "WOxcS8kMWRLOW6PWWQL7ACkdWRm", "q0u0fCoOWOBdVCkMmNlcG8ojcq"];
  return yi = function() {
    return i;
  }, yi();
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return VA(I - -376, s);
  }
  function e(g, s, C, I, E) {
    return VA(C - -243, s);
  }
  var A = i();
  function o(g, s, C, I, E) {
    return VA(g - 499, s);
  }
  function r(g, s, C, I, E) {
    return VA(E - 129, I);
  }
  for (; ; )
    try {
      var a = -parseInt(o(976, "6^P)", 987, 970, 977)) / 1 * (parseInt(o(970, "@LT2", 970, 966, 973)) / 2) + -parseInt(e(238, "(wlF", 232, 239, 234)) / 3 * (parseInt(o(966, "ENNn", 974, 973, 968)) / 4) + parseInt(t(97, "wYvp", 93, 87, 92)) / 5 + -parseInt(e(224, "wlmK", 217, 218, 222)) / 6 * (parseInt(r(603, 594, 601, "Ux*]", 599)) / 7) + -parseInt(e(243, "N7u5", 235, 240, 231)) / 8 + parseInt(o(975, "eF24", 977, 964, 973)) / 9 * (-parseInt(t(90, "RN9K", 74, 82, 80)) / 10) + parseInt(o(963, "fxsX", 953, 959, 959)) / 11;
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(yi, -475 * -418 + 10121 * -5 + 483329);
function VA(i, n) {
  var t = yi();
  return VA = function(e, A) {
    e = e - (-10688 + 11145 * 1);
    var o = t[e];
    if (VA.bAYWjp === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", l = "", d = 0, x, Q, f = 0; Q = I.charAt(f++); ~Q && (x = d % 4 ? x * 64 + Q : Q, d++ % 4) ? B += String.fromCharCode(255 & x >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, m = B.length; p < m; p++)
          l += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(l);
      }, a = function(I, E) {
        var B = [], l = 0, d, x = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          l = (l + B[Q] + E.charCodeAt(Q % E.length)) % 256, d = B[Q], B[Q] = B[l], B[l] = d;
        Q = 0, l = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, l = (l + B[Q]) % 256, d = B[Q], B[Q] = B[l], B[l] = d, x += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[l]) % 256]);
        return x;
      };
      VA.QdtBCG = a, i = arguments, VA.bAYWjp = !0;
    }
    var g = t[635 + -1 * 7448 + -757 * -9], s = e + g, C = i[s];
    return C ? o = C : (VA.IMChnB === void 0 && (VA.IMChnB = !0), o = VA.QdtBCG(o, A), i[s] = o), o;
  }, VA(i, n);
}
async function mi(i) {
  const { Image: n } = _e, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw b.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function nc(i) {
  const { VideoStream: n } = _e, t = n.verify(i);
  if (t) throw b.fromError(t);
  return n.create(i);
}
async function ic(i) {
  const { v4: { Metadata: n } } = _e, t = { ...i };
  t.platform = _e.Platform.WEB, t.componentVersion = "7.7.0";
  const e = t, A = n.verify(e);
  if (A) throw b.fromError(A);
  return n.create(e);
}
async function rc(i) {
  const { Content: n } = _e, { iv: t, key: e, message: A } = await Sl(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: qB, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw b.fromError(r);
  const a = n.create(o);
  return n.encode(a).finish();
}
function ac(i) {
  const { Blob: n } = _e.v4, t = n.verify(i);
  if (t) throw b.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function Nl(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e == null ? void 0 : e.map(({ brand: a, version: g }) => ({ name: a, version: g })) };
}
async function Rl({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = _e.v4, A = await mi(i), o = await ic(n), r = t && nc(t), a = {};
  a.streamH264 = r;
  const g = {};
  g.image = A, g.metadata = o, g.video = a;
  const s = g, C = e.verify(s);
  if (C) throw b.fromError(C);
  const I = e.create(s), E = {};
  return E.faceContent = I, ac(E);
}
async function Fl(i) {
  const n = await Rl(i);
  return rc(n);
}
function vl({ controller: i, onPhotoTakenInternal: n }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = W0(), o = OA(({ candidateSelectionImages: g, imageData: s, protoMessage: C, webMetadata: I }) => {
    cl(qI.FACE, g), e(s, C);
    const E = {};
    E.cameraProperties = I, n == null || n(E);
  }, [n, e]), r = OA(({ fps: g, processedImage: s }, C) => {
    const I = {};
    I.code = s.instructionCode, I.isEscalated = s.isEscalated, L0(zA.INSTRUCTION_CHANGED, I), i && dE(zA.DETECTED_FACE_CHANGED, s.detection, i.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = s.detection, E.fps = g, E.image = C, E.isInCandidateSelection = s.isInCandidateSelection, E.invalidValidators = s.invalidValidators, xE(zA.FACE_DETECTION, E);
  }, [i]), a = {};
  return a.captureMode = t, a.controller = i, a.createProtoMessage = Fl, a.onCapture = o, a.onDetection = r, a.sessionToken = A, a.customEvent = zA, a.fallbackInstruction = nA.FACE_NOT_PRESENT, a.instructionCodeMap = nA, a.checkToInstructionCodeMap = GB, ME(a);
}
const Ml = 4159 + 1 * 8621 + 35 * -308;
class Wl {
  constructor(n) {
    y(this, "duration");
    y(this, "candidateSelectionTime", -18 * -489 + 11 * 321 + 4111 * -3);
    y(this, "candidateSelectionImages", []);
    this.duration = n ?? Ml;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > 1354 + 359 * 4 + -2790;
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
    this.candidateSelectionTime = -3 * 1525 + 9358 + -4783, this.candidateSelectionImages = [];
  }
}
const Ll = async () => WebAssembly.validate(new Uint8Array([4058 * -2 + 5105 + 3011, -2881 + -4759 * -1 + 1781 * -1, -7869 + 10 * 120 + 848 * 8, -6801 + 3 * 3074 + -2312, -4223 + 8817 * -1 + 13041, -234 + 36 * -142 + -22 * -243, -2 * -3428 + -135 + -11 * 611, 0, -40 * 5 + 5145 + -4 * 1236, 2498 * 2 + 2263 + -7254, 8 * -184 + 7140 + -5667, 1 * 9034 + -3722 + -5216, -3610 + 127 * -75 + 37 * 355, -7 * 174 + 2122 + -3 * 301, 171 * -37 + 4 * 2293 + -2722 * 1, 4531 * -2 + 1969 * 5 + -780, 2, -118 * 47 + -1327 * 3 + 9528, -1643 * -3 + 2287 + 902 * -8, 674 * 1 + 4685 + -3 * 1783, 4480 + -7 * -481 + -17 * 461, -1545 * -6 + 1 * -7551 + -1718, -8467 * 1 + -1143 * -6 + 49 * 33, 6247 + 6247 * -1, 9167 + 4551 * -2, 4182 + -3847 * -2 + -11876, 1613 * -3 + 8874 + -1 * 3782, -768 + -783 * -1, -1 * 2591 + -6589 + -1 * -9433, -5524 + 4 * 2004 + -171 * 14, 11]));
function Ol() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(1 * -23 + -6367 * -1 + -1582 * 4);
}
function Jl() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = Ol();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function Ul(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
const ua = {};
ua.label = ">1m", ua.time = 60;
const fa = {};
fa.label = ">45", fa.time = 45;
const ha = {};
ha.label = ">30", ha.time = 30;
function Ss(i, n = [ua, fa, ha]) {
  const t = n.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (i > e.time) return e.label;
  return "" + i;
}
function Yl(i) {
  return i > -55779 + -661 * -13 + -2 * -53593 ? ">1m" : "" + i;
}
function Tl(i) {
  return i > -3689 + 446 * -7 + 1 * 6821 ? ">10" : "" + i;
}
const Gs = (i) => Math.round(i / 500) * 500 / (-1750 + 1351 * -2 + 5452), pa = (i) => i ? i <= 1255 + 2578 * -2 + -3902 * -1 ? Math.round(i * (-10456 + 2 * 5238)) / (5 * -1647 + 7771 + -242 * -2) : Math.round(i / (1 * -3631 + -1 * -2278 + 61 * 23)) * (242 * 23 + 4083 * 1 + -1 * 9599) : 7912 + 86 * -92;
function Pl(i) {
  return i ? Math.round(i / (-923 + 72 * -117 + 11 * 1077)) * (11039 + 8539 * -1) : 1 * 1705 + -6930 + -5 * -1045;
}
const Hl = (i) => i ? Math.round(i / (-9598 + -1 * -1167 + 8441)) * (-772 + -291 * 21 + 6893) : -2262 + 1131 * 2, Kl = (i) => Math.round(i * (15157 + 3031 * -5)) / (-4772 + -341 * -14);
async function gc() {
  return await Ll() ? Yg.SIMD : Yg.NO_SIMD;
}
var Gi;
class sc {
  constructor(n, t, e, A, o, r, a, g, s, C, I, E) {
    y(this, "isRunning", !0);
    M(this, Gi, Date.now());
    y(this, "fpsOfAllImages", new So(-534 + 2071 * 1 + -1507));
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = a, this.samVersion = g, this.instructionEscalation = s, this.sessionToken = C, this.analytics = I, this.transactionCounting = E;
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
    const e = Date.now(), A = ht(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - w(this, Gi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await gc() };
    yo() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !Wt() }), (a = this.analytics) == null || a.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Fe(ht(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    var l;
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await oQ(n), r = await this.prepareDetectionMetadata(n, t), a = (l = this.cameraService.videoRecorder) == null ? void 0 : l.getRecording(), g = {};
    g.image = o, g.metadata = r, g.video = a;
    const s = await this.createProtoMessage(g), C = {};
    C.detection = t, C.imageResolution = A;
    const I = {};
    I.image = o, I.data = C;
    const E = I, B = {};
    return B.imageData = E, B.metadata = r, B.protoMessage = s, B;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = IQ(), o = await cQ(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await Nl(A, o) }, a = {};
    return a.sessionToken = this.sessionToken, a.web = r, a;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = a0(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await iQ(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const s = g, C = await mi(a), I = {};
    return I.image = C, I.topLeftCorner = s, I;
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
    await Vr(Math.max(Hg.max - n, Hg.min));
  }
}
Gi = new WeakMap();
class jl extends sc {
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
      throw e instanceof Error ? b.fromCameraError(e) : b.fromError(e);
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
    else throw new b("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), o = Fe((-8935 + 5761 * -1 + 15696) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), s = {};
    s.isNewDetectionValid = t.isValid, s.newInvalidInstruction = g[19 * 162 + 632 + 7 * -530];
    const C = this.getInstructionCode(s), I = this.collectAndEscalate(C);
    return { processedImage: { detection: t.detection, instructionCode: C, isEscalated: I, invalidValidators: g, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: A, fps: o, avgFps: Fe(ht(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class Ic {
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
    if (!this.cameraService) throw new b("CameraService is required");
    if (!this.imageProcessor) throw new b("ImageProcessor is required");
    if (!this.createProtoMessage) throw new b("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new b("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new b("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new b("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new b("FallbackInstruction is required");
    if (!this.samVersion) throw new b("SamVersion is required");
  }
}
class _l extends Ic {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new b("instructionCodeMap is required");
    if (!this.candidateSelection) throw new b("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new jl(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
var Te, Ct;
class ql extends sc {
  constructor(...t) {
    super(...t);
    M(this, Te);
    M(this, Ct);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Fn).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    F(this, Ct, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && F(this, Te, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Jr.REQUEST_CAPTURE, w(this, Ct));
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
    return w(this, Te) ? w(this, Te) === Fn.FIRST_FRAME ? !0 : w(this, Te) === Fn.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? b.fromCameraError(e) : b.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    var o;
    (o = this.transactionCounting) == null || o.trackTransaction(), this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), F(this, Te, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), o = Fe((4344 + -4 * -2196 + -1 * 12128) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, g = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), s = this.getInstructionCode(g[0]), C = this.collectAndEscalate(s), I = {};
    return I.detection = e.detection, I.instructionCode = s, I.invalidValidators = g, I.isInCandidateSelection = !1, I.isEscalated = C, { processedImage: I, detectionTime: A, fps: o, avgFps: Fe(ht(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), w(this, Ct) && document.removeEventListener(Jr.REQUEST_CAPTURE, w(this, Ct));
  }
}
Te = new WeakMap(), Ct = new WeakMap();
class Vl extends Ic {
  build() {
    return this.validateDependencies(), new ql(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class Zl {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: a, fallbackInstruction: g, imageProcessor: s, instructionCodeMap: C, instructionEscalation: I, onCaptureCallback: E, onDetectionCallback: B, samVersion: l, sessionToken: d, transactionCounting: x } = t;
    switch (n) {
      case ko.AUTO_CAPTURE:
        return new _l().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setInstructionCodeMap(C).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(l).setInstructionEscalation(I).setSessionToken(d).setAnalytics(e).setTransactionCounting(x).build();
      case ko.WAIT_FOR_REQUEST:
        return new Vl().setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(l).setInstructionEscalation(I).setSessionToken(d).setAnalytics(e).setTransactionCounting(x).build();
      default:
        throw new b("Invalid detection type: " + n);
    }
  }
}
var le;
class zl {
  constructor(n, t) {
    M(this, le);
    this.instructionCodeCollector = n, this.config = t, F(this, le, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return w(this, le);
  }
  canEscalate(n) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(n) ? !1 : t.filter((A) => A === n).length / t.length >= this.config.threshold;
  }
  collect(n) {
    this.instructionCodeCollector.pushWithTimestamp(n);
  }
  isEscalated(n) {
    return w(this, le).get(n) ?? !1;
  }
  escalate() {
    for (const [n, t] of w(this, le).entries())
      !t && this.canEscalate(n) && (this.config.onEscalate(n), w(this, le).set(n, !0));
  }
  reset() {
    w(this, le).forEach((n, t) => {
      w(this, le).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
le = new WeakMap();
var Uo, Pe, Tt;
class Xl extends Array {
  constructor(t) {
    super();
    M(this, Uo, 0);
    M(this, Pe, []);
    M(this, Tt, !1);
    F(this, Uo, t);
  }
  clearAfterTimeout() {
    if (w(this, Pe).length === -1 * 8233 + -3242 + 675 * 17) return;
    const t = Date.now(), e = w(this, Pe).findLastIndex((A) => t - A > w(this, Uo));
    e !== -1 && (F(this, Tt, !0), this.splice(3 * -2939 + -1 * -1174 + 7643 * 1, e + (6443 + -8 * -969 + -14194)), w(this, Pe).splice(-251 * 7 + 125 * 28 + 3 * -581, e + (4803 * -1 + -4529 * 1 + 9333 * 1)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), w(this, Pe).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return w(this, Tt);
  }
  clear() {
    this.splice(2213 * 2 + -3822 + -1 * 604), w(this, Pe).splice(-1193 * 5 + -8731 * -1 + -2766), F(this, Tt, !1);
  }
}
Uo = new WeakMap(), Pe = new WeakMap(), Tt = new WeakMap();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const cc = Symbol("Comlink.proxy"), $l = Symbol("Comlink.endpoint"), Cc = Symbol("Comlink.releaseProxy"), pr = Symbol("Comlink.finalizer"), Tn = Symbol("Comlink.thrown"), Bc = (i) => typeof i == "object" && i !== null || typeof i == "function", Ad = {
  canHandle: (i) => Bc(i) && i[cc],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return Ec(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), dc(i);
  }
}, ed = {
  canHandle: (i) => Bc(i) && Tn in i,
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
}, Qc = /* @__PURE__ */ new Map([
  ["proxy", Ad],
  ["throw", ed]
]);
function td(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function Ec(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!td(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(gt);
    let s;
    try {
      const C = a.slice(0, -1).reduce((E, B) => E[B], i), I = a.reduce((E, B) => E[B], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          C[a.slice(-1)[0]] = gt(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const E = new I(...g);
            s = gd(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: B } = new MessageChannel();
            Ec(i, B), s = ad(E, [E]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      s = { value: C, [Tn]: 0 };
    }
    Promise.resolve(s).catch((C) => ({ value: C, [Tn]: 0 })).then((C) => {
      const [I, E] = bi(C);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), lc(n), pr in i && typeof i[pr] == "function" && i[pr]());
    }).catch((C) => {
      const [I, E] = bi({
        value: new TypeError("Unserializable return value"),
        [Tn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E);
    });
  }), n.start && n.start();
}
function od(i) {
  return i.constructor.name === "MessagePort";
}
function lc(i) {
  od(i) && i.close();
}
function dc(i, n) {
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
  }), ya(i, t, [], n);
}
function pn(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function xc(i) {
  return Rt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    lc(i);
  });
}
const wi = /* @__PURE__ */ new WeakMap(), Di = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (wi.get(i) || 0) - 1;
  wi.set(i, n), n === 0 && xc(i);
});
function nd(i, n) {
  const t = (wi.get(n) || 0) + 1;
  wi.set(n, t), Di && Di.register(i, n, i);
}
function id(i) {
  Di && Di.unregister(i);
}
function ya(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (pn(A), a === Cc)
        return () => {
          id(o), xc(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = Rt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(gt);
        return g.then.bind(g);
      }
      return ya(i, n, [...t, a]);
    },
    set(r, a, g) {
      pn(A);
      const [s, C] = bi(g);
      return Rt(i, n, {
        type: "SET",
        path: [...t, a].map((I) => I.toString()),
        value: s
      }, C).then(gt);
    },
    apply(r, a, g) {
      pn(A);
      const s = t[t.length - 1];
      if (s === $l)
        return Rt(i, n, {
          type: "ENDPOINT"
        }).then(gt);
      if (s === "bind")
        return ya(i, n, t.slice(0, -1));
      const [C, I] = Ns(g);
      return Rt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: C
      }, I).then(gt);
    },
    construct(r, a) {
      pn(A);
      const [g, s] = Ns(a);
      return Rt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: g
      }, s).then(gt);
    }
  });
  return nd(o, i), o;
}
function rd(i) {
  return Array.prototype.concat.apply([], i);
}
function Ns(i) {
  const n = i.map(bi);
  return [n.map((t) => t[0]), rd(n.map((t) => t[1]))];
}
const uc = /* @__PURE__ */ new WeakMap();
function ad(i, n) {
  return uc.set(i, n), i;
}
function gd(i) {
  return Object.assign(i, { [cc]: !0 });
}
function bi(i) {
  for (const [n, t] of Qc)
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
    uc.get(i) || []
  ];
}
function gt(i) {
  switch (i.type) {
    case "HANDLER":
      return Qc.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Rt(i, n, t, e) {
  return new Promise((A) => {
    const o = sd();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function sd() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
class Id {
  constructor(n, t, e, A, o, r, a) {
    y(this, "isDetectorInitialized", !1);
    y(this, "samVersion", null);
    y(this, "detection");
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = a;
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new b("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  createDetection(n, t) {
    this.detection && this.detection.stop();
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: a, instructionCodeMap: g, onCaptureCallback: s, onDetectionCallback: C, sessionToken: I, transactionCounting: E } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: E, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: a, instructionCodeMap: g, checkToInstructionCodeMap: o, sessionToken: I, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: s, onDetectionCallback: C, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new b("Detection not initialized");
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
    return "" + t.replace(e0, "") + n;
  }
}
class cd {
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
    if (!this.imageProcessor) throw new b("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new b("AssetsDirectoryPath is required");
    if (!this.detector) throw new b("Detector is required");
    if (!this.compatibleSamVersion) throw new b("CompatibleSamVersion is required");
    if (!this.validationService) throw new b("ValidationService is required");
    if (!this.detectionFactory) throw new b("DetectionFactory is required");
    if (!this.candidateSelection) throw new b("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class Cd {
  constructor() {
    y(this, "detectionRecord", []);
    y(this, "imagesWithTimestampForDuplicateDetection", new So(_B));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / zB, A = e / (852 * 6 + -39 * 240 + 4250), o = n.length / (-3257 * 3 + -4354 + -1 * -14127), r = n.slice(o - A, o + A), a = await Gl(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: a0(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = t0(n), r = this.validationService.validateDetectedObject(o, t);
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
class Bd {
  constructor() {
    y(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new b("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class $a extends Id {
  constructor(t, e, A, o, r, a, g, s) {
    super(o, r, a, g, A, t, s);
    y(this, "detector");
    this.detectionFactory = t, this.detector = e;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], L0(zA.INSTRUCTION_CHANGED, t, MB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
y($a, "_instance");
class Qd extends cd {
  build() {
    return this.validateDependencies(), new $a(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
class Ed extends Cd {
  constructor(t, e) {
    super();
    y(this, "className", "FaceImageProcessor");
    y(this, "detector");
    y(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = $n(t), A = r0(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(A.data, A.resolution, o);
    r = el(r, $n(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var Pt, Bt, Qt;
class ld {
  constructor(n) {
    M(this, Pt);
    M(this, Bt);
    M(this, Qt);
    F(this, Pt, n), F(this, Bt, /* @__PURE__ */ new Map());
  }
  validate() {
    w(this, Pt).forEach((n) => {
      w(this, Bt).set(n.name, n.evaluate());
    }), F(this, Qt, void 0);
  }
  isValid() {
    return w(this, Qt) === void 0 && F(this, Qt, Array.from(w(this, Bt).values()).every((n) => n)), w(this, Qt);
  }
  get result() {
    return w(this, Bt);
  }
  get validators() {
    return w(this, Pt);
  }
}
Pt = new WeakMap(), Bt = new WeakMap(), Qt = new WeakMap();
var Yo, Et;
class TA {
  constructor(n, t) {
    M(this, Yo);
    M(this, Et);
    F(this, Yo, n), F(this, Et, t);
  }
  get threshold() {
    return w(this, Et);
  }
  get name() {
    return w(this, Yo);
  }
  isValueBelowThreshold(n) {
    return n < w(this, Et);
  }
  isValueAboveThreshold(n) {
    return n > w(this, Et);
  }
}
Yo = new WeakMap(), Et = new WeakMap();
const dd = "isNotDim";
var To;
class xd extends TA {
  constructor(t, e) {
    super(dd, t);
    M(this, To);
    F(this, To, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, To));
  }
}
To = new WeakMap();
const ud = "isNotSmall";
var Po;
class fd extends TA {
  constructor(t, e) {
    super(ud, t);
    M(this, Po);
    F(this, Po, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Po));
  }
}
Po = new WeakMap();
const hd = "isNotBright";
var Ho;
class pd extends TA {
  constructor(t, e) {
    super(hd, t);
    M(this, Ho);
    F(this, Ho, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, Ho));
  }
}
Ho = new WeakMap();
const yd = "isPresent";
var Ko;
class md extends TA {
  constructor(t, e) {
    super(yd, t);
    M(this, Ko);
    F(this, Ko, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Ko));
  }
}
Ko = new WeakMap();
const wd = "isSharp";
var jo;
class Dd extends TA {
  constructor(t, e) {
    super(wd, t);
    M(this, jo);
    F(this, jo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, jo));
  }
}
jo = new WeakMap();
const bd = "isLeftEyePresent";
var _o;
class kd extends TA {
  constructor(t, e) {
    super(bd, t);
    M(this, _o);
    F(this, _o, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, _o));
  }
}
_o = new WeakMap();
const Sd = "isMouthPresent";
var qo;
class Gd extends TA {
  constructor(t, e) {
    super(Sd, t);
    M(this, qo);
    F(this, qo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, qo));
  }
}
qo = new WeakMap();
const Nd = "isMouthScoreNotTooLow";
var Vo;
class Rd extends TA {
  constructor(t, e) {
    super(Nd, t);
    M(this, Vo);
    F(this, Vo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Vo));
  }
}
Vo = new WeakMap();
const Fd = "isMouthScoreNotTooHigh";
var Zo;
class vd extends TA {
  constructor(t, e) {
    super(Fd, t);
    M(this, Zo);
    F(this, Zo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, Zo));
  }
}
Zo = new WeakMap();
const Md = "isNotLarge";
var zo;
class Wd extends TA {
  constructor(t, e) {
    super(Md, t);
    M(this, zo);
    F(this, zo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, zo));
  }
}
zo = new WeakMap();
const Ld = "isNotPitched";
var Xo;
const Ag = class Ag extends TA {
  constructor(t, e) {
    super(Ld, Ag.calculatePitchAngleAccelerationThreshold(t));
    M(this, Xo);
    F(this, Xo, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return KB * Math.sin(t * (Math.PI / (-673 + 7297 * -1 + 8150)));
  }
  evaluate() {
    const { z: t } = w(this, Xo) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Xo = new WeakMap();
let ma = Ag;
const Od = "isRightEyePresent";
var $o;
class Jd extends TA {
  constructor(t, e) {
    super(Od, t);
    M(this, $o);
    F(this, $o, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, $o));
  }
}
$o = new WeakMap();
const Ud = "isNotOutOfBounds";
var An, lt;
class Yd extends TA {
  constructor(t, e, A) {
    super(Ud, t);
    M(this, An);
    M(this, lt);
    F(this, An, e), F(this, lt, A);
  }
  evaluate() {
    const t = s0(w(this, lt), this.threshold, $n(w(this, lt))), e = ec(w(this, An), w(this, lt));
    return aQ(e, t);
  }
}
An = new WeakMap(), lt = new WeakMap();
class Td {
  static getFaceValidationInstance(n, t, e, A) {
    return new ld([new md(n.faceConfidence, t.confidence), new kd(n.leftEye.confidence, t.leftEye.confidence), new Jd(n.rightEye.confidence, t.rightEye.confidence), new fd(n.minFaceSizeRatio, t.faceSize), new Wd(n.maxFaceSizeRatio, t.faceSize), new Dd(n.sharpnessThreshold, t.sharpness), new xd(n.brightnessLowThreshold, t.brightness), new pd(n.brightnessHighThreshold, t.brightness), new Yd(n.outOfBoundsThreshold, t, e), new ma(n.devicePitchAngleThreshold, A), new Gd(n.mouth.confidence, t.mouth.confidence), new vd(n.mouth.status.max, t.mouth.status), new Rd(n.mouth.status.min, t.mouth.status)]);
  }
}
class Pd extends Bd {
  constructor() {
    super(...arguments);
    y(this, "className", "FaceValidationService");
    y(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = Td.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
const Hd = "SAM v1.50.5 for idcards", Kd = "/dot-assets/smile/dot-w9VD02Jn.js";
function jd() {
  const { handleError: i } = he(), { acceleration: n } = DE(), { assetsDirectoryPath: t } = W0(), { thresholds: e } = Ac(), { analytics: A } = Ui(), [o, r] = $();
  J(() => {
    let g;
    return (async () => {
      const C = $a.getWorkerPath(Kd, t), I = {};
      I.type = "module";
      const E = new Worker(new URL(C, import.meta.url), I), B = dc(E);
      g = await new B();
      const l = new Pd(), d = new Ed(g, l), x = new Zl(), Q = new Wl(), f = new Qd().setDetector(g).setValidationService(l).setImageProcessor(d).setCompatibleSamVersion(Hd).setAssetsDirectoryPath(t).setDetectionFactory(x).setCandidateSelection(Q).build();
      try {
        await f.init(), r(f);
      } catch (p) {
        if (p instanceof Error) {
          i(b.fromError(p));
          return;
        }
      }
    })(), () => {
      g && g[Cc]();
    };
  }, [i, t]), J(() => {
    o && o.setThresholds(e);
  }, [o, e]), J(() => {
    o && o.setAcceleration(n);
  }, [n, o]), J(() => {
    if (!o) return;
    const g = new zl(new Xl(sr.timeout), { threshold: sr.threshold, instructions: sr.instructions, onEscalate: (s) => {
      uE(Xt.INSTRUCTION_ESCALATED, s), A == null || A.trackEscalated(s);
    } });
    o.setInstructionEscalation(g);
  }, [o, A]);
  const a = {};
  return a.controller = o, a;
}
function _d({ onPhotoTakenInternal: i }) {
  const { isCameraReady: n } = _I(), { sunfish: t } = oo(), { controller: e } = jd(), { cameraResolution: A, detectionDetails: o, shouldCameraMirror: r, videoRef: a } = vl({
    controller: e,
    onPhotoTakenInternal: i
  });
  return /* @__PURE__ */ k(Ae, { children: /* @__PURE__ */ k(
    Il,
    {
      cameraResolution: A,
      detectionDetails: o,
      shouldMirror: r,
      children: /* @__PURE__ */ k(
        DB,
        {
          ref: a,
          $isImageMirror: r,
          $isVisible: t && n,
          autoPlay: !0,
          id: WB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function qd({ metadata: i, neutralExpressionFaceImage: n, smileExpressionFaceImage: t, video: e }) {
  const { SmileLivenessContent: A } = _e.v4, o = await mi(n), r = await mi(t), a = e && nc(e), g = await ic(i), s = {};
  s.streamH264 = a;
  const C = {};
  C.neutralExpressionFaceImage = o, C.smileExpressionFaceImage = r, C.metadata = g, C.video = s;
  const I = C, E = A.verify(I);
  if (E) throw b.fromError(E);
  const B = A.create(I), l = {};
  return l.smileLivenessContent = B, ac(l);
}
async function Vd({ metadata: i, neutralExpressionFaceImage: n, smileExpressionFaceImage: t, video: e }) {
  const A = {};
  A.neutralExpressionFaceImage = n, A.smileExpressionFaceImage = t, A.metadata = i, A.video = e;
  const o = await qd(A);
  return rc(o);
}
function Zd() {
  return { images: { fps: new So(30), mouthStatus: new So(-8232 + -83 * 28 + 10561) }, imageResolution: void 0 };
}
function zd({ skip: i }) {
  const n = AA(Zd()), { analytics: t } = Ui(), { crosshatch: e } = oo(), A = AA(!1);
  function o() {
    const s = n.current, C = ht(s.images.fps), I = ht(s.images.mouthStatus);
    A.current = !0;
    const E = {};
    E.customer = e == null ? void 0 : e.customer, E.duration = os, E.averageFps = C, E.imageResolution = s.imageResolution, E.averageExpressionScore = I, t == null || t.trackLongCapture(E);
  }
  const r = {};
  r.callback = o, r.delay = os * (-9948 + -7 * -1564), r.skip = i || A.current, q0(r);
  const a = OA((s) => {
    if (!s.detail) return;
    const { data: C } = s.detail;
    n.current.images.fps.pushFixed(C.fps), n.current.images.mouthStatus.pushFixed(C.detection.mouth.status), n.current.imageResolution = C.imageResolution;
  }, []);
  Va(zA.FACE_DETECTION, a);
  const g = {};
  return g.wasEventTriggered = A, g;
}
function Xd(i) {
  const n = i.sort((A, o) => A - o), t = Math.floor(n.length / (-1 * -2360 + 5691 * -1 + -3333 * -1));
  return n.length % (-1 * 4682 + -9 * -97 + 3811 * 1) === 2654 + -1 * -6901 + -9555 ? (n[t - (4163 + -3 * 1318 + -208)] + n[t]) / (-8284 + 851 * -4 + 11690) : n[t];
}
function $d() {
  const [i, n] = $(void 0), t = AA(!0), e = AA([]), A = OA((g) => {
    if (!g.detail || !t.current) return;
    const { data: s } = g.detail;
    if (!s.isInCandidateSelection) return;
    const C = s.detection.mouth.status;
    C < Xa && e.current.push(C);
  }, []);
  function o() {
    e.current = [], t.current = !0, n(void 0);
  }
  function r() {
    t.current = !1, n(Xd(e.current));
  }
  const a = {};
  return a.median = i, a.reset = o, a.stop = r, a.handleFaceDetection = A, a;
}
function Ax(i) {
  return function() {
    const { handleFaceDetection: t, median: e, reset: A, stop: o } = i();
    Va(zA.FACE_DETECTION, t);
    const r = {};
    return r.median = e, r.reset = A, r.stop = o, r;
  };
}
function ex({ phase: i }) {
  const [n, t] = $(ko.AUTO_CAPTURE), e = V0(n);
  function A() {
    t(ko.WAIT_FOR_REQUEST), e(() => oE(Fn.FIRST_FRAME));
  }
  const o = {};
  o.callback = A, o.delay = Al, o.skip = i === Ee.NEUTRAL;
  const { clear: r, isActive: a, reset: g } = q0(o), s = {};
  return s.captureMode = n, s.restart = g, s.stop = r, s.isActive = a, s;
}
function tx(i, n, t) {
  switch (i) {
    case Ee.SMILE:
      return { ...$E(n), ...t };
    case Ee.NEUTRAL:
    default:
      return { ...zE(), ...t };
  }
}
const ox = ({
  assetsDirectoryPath: i,
  onComplete: n,
  sessionToken: t,
  thresholds: e
}) => {
  var Ve;
  const { analytics: A } = Ui(), { appState: o, handleAppStateChange: r, handleError: a, setIsCameraReady: g } = _I(), { cameraProperties: s, mergeCameraProperties: C } = YE(), I = V0(o), { transactionCounting: E } = Ka(), { cameraService: B } = C0(), l = Ot(Ee.NEUTRAL), d = Ot(null), x = Ot(null), { captureMode: Q, stop: f } = ex({ phase: l.value }), {
    median: p,
    reset: m,
    stop: G
  } = Ax($d)();
  zd({
    skip: l.value !== Ee.NEUTRAL || o !== ZA.RUNNING
  });
  function S(ve) {
    l.value = ve, aa(Xt.STATUS_CHANGED, { phase: ve });
  }
  function D() {
    f(), m(), S(Ee.NEUTRAL), d.value = null, x.value = null, A == null || A.reset();
  }
  VE(qE)({
    onFaceTrackingLost: () => {
      r(ZA.WAITING), D(), I(() => r(ZA.RUNNING));
    },
    skipOutsideOfCandidateSelection: l.value === Ee.NEUTRAL
  }), OE({
    onBlur: () => {
      g(!1), r(ZA.LOADING), D();
    },
    onFocus: () => {
      g(!0), r(ZA.RUNNING);
    }
  }), yE(Xt.CONTROL, () => {
    D();
  });
  function P(ve) {
    d.value = ve, G(), S(Ee.SMILE), r(ZA.RUNNING);
  }
  async function Z(ve) {
    var rn;
    f(), E == null || E.trackLivenessTransaction(), x.value = ve;
    try {
      if (!d.value || !x.value)
        throw new b("Missing face data");
      const yt = {
        sessionToken: t,
        web: s.value
      }, io = await Vd({
        neutralExpressionFaceImage: d.value.image,
        smileExpressionFaceImage: x.value.image,
        metadata: yt,
        video: (rn = B == null ? void 0 : B.videoRecorder) == null ? void 0 : rn.getRecording()
      }), ro = [d.value, x.value];
      n(ro, io), A == null || A.trackLivenessProcess(ro), r(ZA.DONE);
    } catch (yt) {
      yt instanceof Error && a(b.fromError(yt));
      return;
    }
  }
  const kA = {
    [Ee.NEUTRAL]: P,
    [Ee.SMILE]: Z
  }, EA = ((Ve = d.value) == null ? void 0 : Ve.data.detection.mouth.status) ?? Xa, fA = tx(
    l.value,
    p ?? EA,
    e
  ), z = QA(
    () => ({
      assetsDirectoryPath: i,
      captureMode: Q,
      onPhotoTaken: kA[l.value]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, Q, l.value, fA]
  );
  return /* @__PURE__ */ k(ZE, { children: /* @__PURE__ */ k(QE, { cameraOptions: z, children: /* @__PURE__ */ k(_E, { cameraOptionsThresholds: fA, children: /* @__PURE__ */ k(_d, { onPhotoTakenInternal: C }) }) }) });
};
function nx({ initAppState: i, onError: n }) {
  const [t, e] = $(i), [A, o] = $(), [r, a] = $(!1), [g, s] = $(!1), C = Vn.Lower, I = AA(n);
  J(() => {
    I.current = n;
  }, [n]);
  const E = {};
  return E.redfin = C, E.appState = t, E.setAppState = e, E.error = A, E.setError = o, E.isCameraReady = r, E.setIsCameraReady = a, E.onErrorRef = I, E.firstRunningDone = g, E.setFirstRunningDone = s, E;
}
function ix(i) {
  return i !== ZA.RUNNING && i !== ZA.WAITING ? Zn.VISIBLE : Zn.VISIBLE_WITH_MASK;
}
function rx({
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
    setFirstRunningDone: s,
    setIsCameraReady: C
  } = nx({
    initAppState: ZA.LOADING,
    onError: i
  }), I = ix(n), E = OA(
    (l) => {
      aa(Xt.STATUS_CHANGED, { state: ZA.ERROR, error: l }), C(!1), r.current(l), g(l), a(ZA.ERROR);
    },
    [C, r, g, a]
  ), B = OA(
    (l) => {
      a(l), aa(Xt.STATUS_CHANGED, { state: l });
    },
    [a]
  );
  return {
    redfin: t,
    appState: n,
    freemiumOverlayState: I,
    isCameraReady: o,
    setIsCameraReady: C,
    handleAppStateChange: B,
    handleError: E,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: s
  };
}
var Ti = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(Ti || {});
const Ft = {};
Ft.AUTO_CAPTURE = "auto-capture", Ft.CAPTURE_FINISHED = "capture-finished", Ft.CAPTURE_STARTED = "capture-started", Ft.ESCALATION_TRIGGER = "escalation-trigger", Ft.LONG_CAPTURE_SMILE = "long-capture-smile";
const Fo = Ft, it = {};
it.PALM = "palm", it.SMILE = "smile", it.DOCUMENT = "document", it.MAGNIFEYE = "magnifeye", it.EYE_GAZE = "eye-gaze", it.FACE = "face";
const ax = it;
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
    const a = ln(r);
    try {
      await fetch("" + o + a + "&" + n, A);
    } catch (g) {
      console.error("Countly Error", g);
    }
  }
  async init(n, t) {
    if (!t) return;
    this.countlyAppKey = t, this.deviceId = n;
    const A = { _app_version: Ta() }, o = { organization: Pa(window.location.href) }, r = ln({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const n = {};
    n.end_session = "1";
    const t = ln(n);
    await this.countlyFetch(t);
  }
  async sendEvent(n, t, e) {
    const A = {};
    A.key = n, A.count = 1, A.dur = e, A.segmentation = t;
    const o = [A], r = ln({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(n, t) {
    await this.sendEvent(Ti.AUTO_CAPTURE, n, t);
  }
}
const Co = new gx();
class sx {
  constructor() {
    y(this, "apiKey");
    y(this, "sessionId");
    y(this, "distinctId");
    y(this, "componentName");
    y(this, "platform");
    y(this, "versionName");
    y(this, "applicationId");
    this.platform = "web", this.versionName = Ta(), this.applicationId = Pa(window.location.href);
  }
  async init({ apiKey: n, componentName: t, customer: e, sessionId: A }) {
  }
  async sendEvent(n, t, e) {
    if (!this.apiKey) return;
    const A = "https://metrics.innovatrics.com/v1/i/v0/e/", o = this.buildEventProperties(t, e), r = this.createCommonBody(n, o);
    try {
      const a = {};
      a["Content-Type"] = "application/json", await fetch(A, { method: "POST", headers: a, body: JSON.stringify(r) });
    } catch (a) {
      console.error("Error sending auto capture event:", a);
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
const yn = new sx();
class Ix {
  constructor(n) {
    y(this, "countly", Co);
    y(this, "posthog", yn);
    y(this, "componentName");
    this.componentName = n;
  }
  createSegmentation(n) {
    return { appVersion: Ta(), ...n };
  }
  init(n, t, e) {
    if (o0()) return;
    const A = Jl(), o = {};
    o.apiKey = t, o.componentName = this.componentName, o.customer = e, o.sessionId = A, yn.init(o), Co.init(A, n);
  }
  endSession() {
    Co.endSession();
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    yn.sendEvent(Fo.AUTO_CAPTURE, A), Co.sendAutoCaptureEvent(A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    yn.sendEvent(Fo.ESCALATION_TRIGGER, e), Co.sendEvent(Ti.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeAnalyticsReportingEnabled : !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 419 * -10 + 688 + -4 * -938 ? Hl(n) : pa(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: Tl(o || -12777 + -12777 * -1), firstHiccup: Yl(Pl(r)), optCheckDetails: e == null ? void 0 : e.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class cx extends Ix {
  constructor() {
    super(...arguments);
    y(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class Cx extends cx {
  constructor() {
    super(ax.SMILE);
  }
  trackLivenessProcess(n) {
    var I, E, B, l, d, x;
    if (!n.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = n, [A, o] = this.captureProcessAnalytics, r = Kl(A.averageFps + (o == null ? void 0 : o.averageFps)) / (-5219 + 2215 * 3 + -356 * 4), a = Gs(A.captureProcessDurationInMs), g = Gs(o.captureProcessDurationInMs), s = this.parsePerformanceCheckup(A.optCheck, A.performanceCheckup), C = this.createSegmentation({ faceSize: pa((I = e.data.detection) == null ? void 0 : I.faceSize), confidence: pa((E = t.data.detection) == null ? void 0 : E.confidence), imageResolution: ((l = (B = t.data) == null ? void 0 : B["imageResolution"]) == null ? void 0 : l.width) + "x" + ((x = (d = t.data) == null ? void 0 : d["imageResolution"]) == null ? void 0 : x.height), averageFps: r, captureTimeNeutral: Ss(a), captureTimeSmile: Ss(g), camera: Ul(A == null ? void 0 : A.deviceName, A.facingMode), instructionSet: A.instructionSet, isSystemStable: A.isSystemStable, ...s });
    this.countly.sendAutoCaptureEvent(C, a + g), this.posthog.sendEvent(Fo.CAPTURE_FINISHED, C, a + g), this.reset();
  }
  async trackLongCapture(n) {
    const { averageExpressionScore: t, averageFps: e, customer: A, duration: o, imageResolution: r } = n, a = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await gc(), expressionScore: t, ...A && { customer: A } });
    this.countly.sendEvent(Ti.LONG_CAPTURE_SMILE, a, o), this.posthog.sendEvent(Fo.LONG_CAPTURE_SMILE, a, o);
  }
}
const Bx = new Cx(), Qx = ({ props: i }) => i ? /* @__PURE__ */ k(xB, { target: i.styleTarget, children: /* @__PURE__ */ k(
  BQ,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: ra.getInstance(),
    children: /* @__PURE__ */ k(
      hQ,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: tt.SMILE,
        children: /* @__PURE__ */ k(
          pQ,
          {
            value: rx({
              onError: i.onError
            }),
            children: /* @__PURE__ */ k(
              SQ,
              {
                analytics: Bx,
                apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt",
                countlyAppKey: "d64319129bb0ee02eccfab418edba9629a97d6b6",
                children: /* @__PURE__ */ k(c0, { children: /* @__PURE__ */ k(nE, { isVideoCaptureEnabled: i.isVideoCaptureEnabled, children: /* @__PURE__ */ k(ox, { ...i }) }) })
              }
            )
          }
        )
      }
    )
  }
) }) : null;
Fc(Qx, "x-dot-smile-liveness", ["props"]);
