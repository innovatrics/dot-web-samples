var Xt, R, lg, dg, qe, Ur, ug, fg, hg, Cr, Qi, Ei, pg, Vt = {}, yg = [], s0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $t = Array.isArray;
function ce(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Br(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function kA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -332 * -18 + 3943 * 1 + -9917 && (r.children = arguments.length > 3 ? Xt.call(arguments, -1 * -1140 + 6121 * -1 + 4983 * 1) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Pt(i, r, e, A, null);
}
function Pt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++lg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function c0() {
  var i = {};
  return i.current = null, i;
}
function vA(i) {
  return i.children;
}
function jA(i, n) {
  this.props = i, this.context = n;
}
function lt(i, n) {
  if (n == null) return i.__ ? lt(i.__, i.__i + (-765 + -1 * 9252 + 10018)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? lt(i) : null;
}
function mg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -2216 * 4 + -8362 + -3 * -5742; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return mg(i);
  }
}
function xi(i) {
  (!i.__d && (i.__d = !0) && qe.push(i) && !Lo.__r++ || Ur != R.debounceRendering) && ((Ur = R.debounceRendering) || ug)(Lo);
}
function Lo() {
  for (var i, n, t, e, A, o, r, a = 5691 + -569 * 10; qe.length; ) qe.length > a && qe.sort(fg), i = qe.shift(), a = qe.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = ce({}, e)).__v = e.__v + (5727 + -1 * -6649 + -12375), R.vnode && R.vnode(t), Qr(n.__P, t, e, n.__n, n.__P.namespaceURI, 15626 + 1 * -15594 & e.__u ? [A] : null, o, A ?? lt(e), !!(405 + -373 * 1 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, bg(o, t, r), e.__e = e.__ = null, t.__e != A && mg(t)));
  Lo.__r = -1 * -7450 + -6693 + -757;
}
function wg(i, n, t, e, A, o, r, a, g, s, c) {
  var I, B, E, x, Q, d, f, h = e && e.__k || yg, p = n.length;
  for (g = C0(t, n, h, g, p), I = -388 * 18 + -1 * -790 + 6194; I < p; I++) (E = t.__k[I]) != null && (B = E.__i == -1 ? Vt : h[E.__i] || Vt, E.__i = I, d = Qr(i, E, B, A, o, r, a, g, s, c), x = E.__e, E.ref && B.ref != E.ref && (B.ref && Er(B.ref, null, E), c.push(E.ref, E.__c || x, E)), Q == null && x != null && (Q = x), (f = !!(-1154 + -17 * 340 + -1 * -6938 & E.__u)) || B.__k === E.__k ? g = Dg(E, g, i, f) : typeof E.type == "function" && d !== void 0 ? g = d : x && (g = x.nextSibling), E.__u &= -7);
  return t.__e = Q, g;
}
function C0(i, n, t, e, A) {
  var o, r, a, g, s, c = t.length, I = c, B = 0;
  for (i.__k = new Array(A), o = 1748 + 8157 * 1 + -9905; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Pt(null, r, null, null, null) : $t(r) ? r = i.__k[o] = Pt(vA, { children: r }, null, null, null) : r.constructor == null && r.__b > 0 ? r = i.__k[o] = Pt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, g = o + B, r.__ = i, r.__b = i.__b + (3 * 1903 + 2011 + -7719), a = null, (s = r.__i = B0(r, t, g, I)) != -1 && (I--, (a = t[s]) && (a.__u |= 597 * -9 + -6413 + -1 * -11788)), a == null || a.__v == null ? (s == -1 && (A > c ? B-- : A < c && B++), typeof r.type != "function" && (r.__u |= 4)) : s != g && (s == g - (-13 * -342 + 491 * -17 + 3902) ? B-- : s == g + 1 ? B++ : (s > g ? B-- : B++, r.__u |= -1786 + 19 * 457 + -6893))) : i.__k[o] = null;
  if (I)
    for (o = 9939 + 1005 * -5 + -4914; o < c; o++) (a = t[o]) != null && 1 * 2713 + 7 * 267 + -4582 == (-7578 + -1164 * -5 + 1760 & a.__u) && (a.__e == e && (e = lt(a)), Sg(a, a));
  return e;
}
function Dg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = 0; A && o < A.length; o++) A[o] && (A[o].__ = i, n = Dg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = lt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function we(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || ($t(i) ? i.some(function(t) {
    we(t, n);
  }) : n.push(i)), n;
}
function B0(i, n, t, e) {
  var A, o, r, a = i.key, g = i.type, s = n[t], c = s != null && -11841 + -3 * -3947 == (-4738 + -1 * -6012 + -1272 & s.__u);
  if (s === null && a == null || c && a == s.key && g == s.type) return t;
  if (e > (c ? 768 + -767 * 1 : 4770 + -272 * 7 + 2 * -1433)) {
    for (A = t - (3840 + -11 * 349), o = t + 1; A >= 2 * 2024 + 27 + -4075 || o < n.length; ) if ((s = n[r = A >= 0 ? A-- : o++]) != null && (2 & s.__u) == 0 && a == s.key && g == s.type) return r;
  }
  return -1;
}
function Yr(i, n, t) {
  n[2202 * 3 + -8771 + -433 * -5] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || s0.test(n) ? t : t + "px";
}
function ao(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Yr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Yr(i.style, n, t[n]);
    }
  else if (n[4529 * -1 + 9037 + -4508] == "o" && n[1 * -2681 + -5304 + 7986] == "n") o = n != (n = n.replace(hg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(28 * 292 + -2327 + -5847) : n.slice(2), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Cr, i.addEventListener(n, o ? Ei : Qi, o)) : i.removeEventListener(n, o ? Ei : Qi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[466 * -11 + -4757 + 9887] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && t == 1 ? "" : t));
  }
}
function Tr(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Cr++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function Qr(i, n, t, e, A, o, r, a, g, s) {
  var c, I, B, E, x, Q, d, f, h, p, y, b, k, D, T, z, FA, yA = n.type;
  if (n.constructor != null) return null;
  1 * 8375 + 5785 + -14032 & t.__u && (g = !!(7025 + 3833 * 1 + 5413 * -2 & t.__u), o = [a = n.__e = t.__e]), (c = R.__b) && c(n);
  A: if (typeof yA == "function") try {
    if (f = n.props, h = "prototype" in yA && yA.prototype.render, p = (c = yA.contextType) && e[c.__c], y = c ? p ? p.props.value : c.__ : e, t.__c ? d = (I = n.__c = t.__c).__ = I.__E : (h ? n.__c = I = new yA(f, y) : (n.__c = I = new jA(f, y), I.constructor = yA, I.render = E0), p && p.sub(I), I.state || (I.state = {}), I.__n = e, B = I.__d = !(-3054 * -1 + -9360 + 6306), I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && yA.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = ce({}, I.__s)), ce(I.__s, yA.getDerivedStateFromProps(f, I.__s))), E = I.props, x = I.state, I.__v = n, B) h && yA.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && yA.getDerivedStateFromProps == null && f !== E && I.componentWillReceiveProps != null && I.componentWillReceiveProps(f, y), n.__v == t.__v || !I.__e && I.shouldComponentUpdate != null && !(4 * 2339 + -4536 + -4819) === I.shouldComponentUpdate(f, I.__s, y)) {
        for (n.__v != t.__v && (I.props = f, I.state = I.__s, I.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(SA) {
          SA && (SA.__ = n);
        }), b = -4119 + 1 * -2737 + 6856; b < I._sb.length; b++) I.__h.push(I._sb[b]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(f, I.__s, y), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(E, x, Q);
      });
    }
    if (I.context = y, I.props = f, I.__P = i, I.__e = !(6442 + 3 * 1126 + 1 * -9819), k = R.__r, D = -8 * -709 + -6695 + 1023, h) {
      for (I.state = I.__s, I.__d = !(-2 * 718 + -3910 + 1 * 5347), k && k(n), c = I.render(I.props, I.state, I.context), T = 1437 * -1 + -8765 + 1 * 10202; T < I._sb.length; T++) I.__h.push(I._sb[T]);
      I._sb = [];
    } else do
      I.__d = !(5612 * 1 + -1 * -9382 + -14993), k && k(n), c = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++D < 2129 * 2 + -3552 + -681);
    I.state = I.__s, I.getChildContext != null && (e = ce(ce({}, e), I.getChildContext())), h && !B && I.getSnapshotBeforeUpdate != null && (Q = I.getSnapshotBeforeUpdate(E, x)), z = c, c != null && c.type === vA && c.key == null && (z = kg(c.props.children)), a = wg(i, $t(z) ? z : [z], n, t, e, A, o, r, a, g, s), I.base = n.__e, n.__u &= -161, I.__h.length && r.push(I), d && (I.__E = I.__ = null);
  } catch (SA) {
    if (n.__v = null, g || o != null)
      if (SA.then) {
        for (n.__u |= g ? 1860 + 17 * -404 + 5168 : 7402 + 27 * -291 + 583 * 1; a && -7522 + 5 * 1402 + 520 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else {
        for (FA = o.length; FA--; ) Br(o[FA]);
        li(n);
      }
    else n.__e = t.__e, n.__k = t.__k, SA.then || li(n);
    R.__e(SA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = Q0(t.__e, n, t, e, A, o, r, g, s);
  return (c = R.diffed) && c(n), 128 & n.__u ? void 0 : a;
}
function li(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(li);
}
function bg(i, n, t) {
  for (var e = 6 * 1043 + -4941 + -439 * 3; e < t.length; e++) Er(t[e], t[++e], t[++e]);
  R.__c && R.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      R.__e(o, A.__v);
    }
  });
}
function kg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 3981 + -2644 * -1 + -6625 ? i : $t(i) ? i.map(kg) : ce({}, i);
}
function Q0(i, n, t, e, A, o, r, a, g) {
  var s, c, I, B, E, x, Q, d = t.props || Vt, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = -1 * -7315 + -3999 + -1658 * 2; s < o.length; s++) if ((E = o[s]) && "setAttribute" in E == !!h && (h ? E.localName == h : -10357 + 1295 * 8 == E.nodeType)) {
      i = E, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), a && (R.__m && R.__m(n, o), a = !1), o = null;
  }
  if (h == null) d === f || a && i.data == f || (i.data = f);
  else {
    if (o = o && Xt.call(i.childNodes), !a && o != null)
      for (d = {}, s = 27 * 333 + 123 + -9114; s < i.attributes.length; s++) d[(E = i.attributes[s]).name] = E.value;
    for (s in d) if (E = d[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = E;
      else if (!(s in f)) {
        if (s == "value" && "defaultValue" in f || s == "checked" && "defaultChecked" in f) continue;
        ao(i, s, null, E, A);
      }
    }
    for (s in f) E = f[s], s == "children" ? B = E : s == "dangerouslySetInnerHTML" ? c = E : s == "value" ? x = E : s == "checked" ? Q = E : a && typeof E != "function" || d[s] === E || ao(i, s, E, d[s], A);
    if (c) a || I && (c.__html == I.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), wg(n.type == "template" ? i.content : i, $t(B) ? B : [B], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[4439 + -1 * 1259 + 1 * -3180] : t.__k && lt(t, 4417 + -3 * -1067 + -7618), a, g), o != null)
      for (s = o.length; s--; ) Br(o[s]);
    a || (s = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[s] || h == "progress" && !x || h == "option" && x != d[s]) && ao(i, s, x, d[s], A), s = "checked", Q != null && Q != i[s] && ao(i, s, Q, d[s], A));
  }
  return i;
}
function Er(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function Sg(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Er(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -2899 + 2 * 453 + -1 * -1993; A < e.length; A++) e[A] && Sg(e[A], n, t || typeof i.type != "function");
  t || Br(i.__e), i.__c = i.__ = i.__e = void 0;
}
function E0(i, n, t) {
  return this.constructor(i, t);
}
function Fe(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Qr(n, i = (!e && t || n).__k = kA(vA, null, [i]), A || Vt, Vt, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Xt.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), bg(o, i, r);
}
function xr(i, n) {
  Fe(i, n, xr);
}
function lr(i, n, t) {
  var e, A, o, r, a = ce({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > -1262 * 5 + -6441 + 12753 && (a.children = arguments.length > 1 * 1657 + -1557 + -97 ? Xt.call(arguments, 2) : t), Pt(i.type, a, e || i.key, A || i.ref, null);
}
function We(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, xi(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + pg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Xt = yg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, lg = -1 * 1688 + 594 + 1094, dg = function(i) {
  return i != null && i.constructor == null;
}, jA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = ce({}, this.state), typeof i == "function" && (i = i(ce({}, t), this.props)), i && ce(t, i), i != null && this.__v && (n && this._sb.push(n), xi(this));
}, jA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), xi(this));
}, jA.prototype.render = vA, qe = [], ug = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, fg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Lo.__r = 1137 * -2 + -353 * 19 + 8981, hg = /(PointerCapture)$|Capture$/i, Cr = 0, Qi = Tr(!1), Ei = Tr(!0), pg = 1547 + 491 * 13 + -7930 * 1;
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, Oo.apply(this, arguments);
}
function Gg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = -1828 + -914 * -2; e < o.length; e++) n.indexOf(t = o[e]) >= 0 || (A[t] = i[t]);
  return A;
}
var x0 = ["context", "children"], l0 = ["useFragment"];
function d0(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    f0.call(this, e);
  }, A.prototype.attributeChangedCallback = h0, A.prototype.disconnectedCallback = p0, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function u0(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = Gg(i, x0);
  return lr(n, t);
}
function f0(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = kA(u0, Oo({}, this._props, { context: t.detail.context }), Rg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? xr : Fe)(this._vdom, this._root);
}
function Ng(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function h0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Ng(i)] = t, this._vdom = lr(this._vdom, e), Fe(this._vdom, this._root);
  }
}
function p0() {
  Fe(this._vdom = null, this._root);
}
function Pr(i, n) {
  var t = this, e = i.useFragment, A = Gg(i, l0);
  return kA(e ? vA : "slot", Oo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Rg(i, n, t) {
  if (-4972 + 687 * -9 + -1 * -11158 === i.nodeType) return i.data;
  if (-4522 + 4523 * 1 !== i.nodeType) return null;
  var e = [], A = {}, o = 6 * -1310 + 6371 * 1 + 1489 * 1, r = i.attributes, a = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[Ng(r[o].name)] = r[o].value);
  for (o = a.length; o--; ) {
    var g = Rg(a[o], null, t), s = a[o].slot;
    s ? A[s] = kA(Pr, { name: s }, g) : e[o] = g;
  }
  var c = !(!t || !t.shadow), I = n ? kA(Pr, { useFragment: !c }, e) : e;
  return !c && n && (i.innerHTML = ""), kA(n || i.nodeName.toLowerCase(), A, I);
}
var y0 = -2566 + -1 * -2644 + -78;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var s = {};
  s.type = i, s.props = g, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --y0, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var c = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return R.vnode && R.vnode(c), c;
}
var RA = function() {
  return RA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, RA.apply(this, arguments);
};
function dt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function m0(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var w0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, D0 = m0(function(i) {
  return w0.test(i) || i.charCodeAt(8564 + 4 * -1671 + -1880) === -9388 * -1 + 9250 + -18527 && i.charCodeAt(-4283 * -1 + -74 + -4208) === 2 * -4347 + 391 * 18 + 1766 && i.charCodeAt(-1 * 4621 + -23 * -337 + -3128) < 2410 + -22 * -427 + -11713;
}), Me, J, On, Hr, ut = 0, vg = [], P = R, Kr = P.__b, _r = P.__r, jr = P.diffed, qr = P.__c, Vr = P.unmount, Zr = P.__;
function Dt(i, n) {
  P.__h && P.__h(J, i, ut || n), ut = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = J.__H || (J.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function nA(i) {
  return ut = 1 * 2253 + -8684 + 6432, dr(Wg, i);
}
function dr(i, n, t) {
  var e = Dt(Me++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Wg(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], s = e.t(g, a);
    g !== s && (e.__N = [s, e.__[1]], e.__c.setState({}));
  }], e.__c = J, !J.__f)) {
    var A = function(a, g, s) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(B) {
        return !!B.__c;
      });
      if (c.every(function(B) {
        return !B.__N;
      })) return !o || o.call(this, a, g, s);
      var I = e.__c.props !== a;
      return c.forEach(function(B) {
        if (B.__N) {
          var E = B.__[0];
          B.__ = B.__N, B.__N = void 0, E !== B.__[0] && (I = !0);
        }
      }), o && o.call(this, a, g, s) || I;
    };
    J.__f = !0;
    var o = J.shouldComponentUpdate, r = J.componentWillUpdate;
    J.componentWillUpdate = function(a, g, s) {
      if (this.__e) {
        var c = o;
        o = void 0, A(a, g, s), o = c;
      }
      r && r.call(this, a, g, s);
    }, J.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function Y(i, n) {
  var t = Dt(Me++, 3);
  !P.__s && ur(t.__H, n) && (t.__ = i, t.u = n, J.__H.__h.push(t));
}
function bt(i, n) {
  var t = Dt(Me++, 4);
  !P.__s && ur(t.__H, n) && (t.__ = i, t.u = n, J.__h.push(t));
}
function qA(i) {
  return ut = 976 * 4 + 29 * -306 + 4975, hA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Fg(i, n, t) {
  ut = 6, bt(function() {
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
function hA(i, n) {
  var t = Dt(Me++, 7);
  return ur(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function De(i, n) {
  return ut = 1043 + 932 * 7 + 1 * -7559, hA(function() {
    return i;
  }, n);
}
function Qe(i) {
  var n = J.context[i.__c], t = Dt(Me++, -8281 + -1 * 9357 + -17647 * -1);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(J)), n.props.value) : i.__;
}
function Jo(i, n) {
  P.useDebugValue && P.useDebugValue(n ? n(i) : i);
}
function Mg() {
  var i = Dt(Me++, 11);
  if (!i.__) {
    for (var n = J.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [0, -1 * -3406 + 645 + -1 * 4051]);
    i.__ = "P" + t[440 + 1 * -3089 + 2649] + "-" + t[8887 + -1710 * 3 + -1878 * 2]++;
  }
  return i.__;
}
function b0() {
  for (var i; i = vg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(uo), i.__H.__h.forEach(di), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], P.__e(n, i.__v);
  }
}
P.__b = function(i) {
  J = null, Kr && Kr(i);
}, P.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Zr && Zr(i, n);
}, P.__r = function(i) {
  _r && _r(i), Me = 3367 + 1 * 7299 + -10666;
  var n = (J = i.__c).__H;
  n && (On === J ? (n.__h = [], J.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(uo), n.__h.forEach(di), n.__h = [], Me = 0)), On = J;
}, P.diffed = function(i) {
  jr && jr(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-6009 + 1613 * 1 + -1 * -4397 !== vg.push(n) && Hr === P.requestAnimationFrame || ((Hr = P.requestAnimationFrame) || k0)(b0)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), On = J = null;
}, P.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(uo), t.__h = t.__h.filter(function(e) {
        return !e.__ || di(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], P.__e(e, t.__v);
    }
  }), qr && qr(i, n);
}, P.unmount = function(i) {
  Vr && Vr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      uo(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && P.__e(n, t.__v));
};
var zr = typeof requestAnimationFrame == "function";
function k0(i) {
  var n, t = function() {
    clearTimeout(e), zr && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  zr && (n = requestAnimationFrame(t));
}
function uo(i) {
  var n = J, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), J = n;
}
function di(i) {
  var n = J;
  i.__c = i.__(), J = n;
}
function ur(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Wg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function Lg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function ui(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Og(i, n) {
  var t = n(), e = nA({ t: { __: t, u: n } }), A = e[0].t, o = e[3875 + 13 * -298];
  return bt(function() {
    A.__ = t, A.u = n, Jn(A) && o({ t: A });
  }, [i, t, n]), Y(function() {
    return Jn(A) && o({ t: A }), i(function() {
      Jn(A) && o({ t: A });
    });
  }, [i]), t;
}
function Jn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (1 * -1183 + 6008 + -4825 !== n || (-2559 + -1 * 3789 + 6349) / n == 1 / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Jg(i) {
  i();
}
function Ug(i) {
  return i;
}
function Yg() {
  return [!1, Jg];
}
var Tg = bt;
function fi(i, n) {
  this.props = i, this.context = n;
}
function S0(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : ui(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, kA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(fi.prototype = new jA()).isPureReactComponent = !0, fi.prototype.shouldComponentUpdate = function(i, n) {
  return ui(this.props, i) || ui(this.state, n);
};
var Xr = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Xr && Xr(i);
};
var G0 = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 7455 + 1 * -8087 + 4543;
function Pg(i) {
  function n(t) {
    var e = Lg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = G0, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var $r = function(i, n) {
  return i == null ? null : we(we(i).map(n));
}, N0 = { map: $r, forEach: $r, count: function(i) {
  return i ? we(i).length : 7457 * -1 + 1932 + -325 * -17;
}, only: function(i) {
  var n = we(i);
  if (2093 * -3 + -8092 + 7186 * 2 !== n.length) throw "Children.only";
  return n[0];
}, toArray: we }, R0 = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  R0(i, n, t, e);
};
var Aa = R.unmount;
function Hg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Lg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Hg(e, n, t);
  })), i;
}
function Kg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return Kg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function fo() {
  this.__u = 8159 + 2 * 1217 + -10593, this.o = null, this.__b = null;
}
function _g(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function v0(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(a) {
      a && (A = a.default || a), e = !0;
    }, function(a) {
      t = a, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? kA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Lt() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 8672 + -5 * -330 + -10290 & i.__u && (i.type = null), Aa && Aa(i);
}, (fo.prototype = new jA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = _g(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[6 * -613 + -1 * -1295 + -2383 * -1] = Kg(g, g.__c.__P, g.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || -11564 + 2899 * 4 & n.__u || e.setState({ __a: e.__b = e.__v.__k[2 * 2148 + 3 * 2399 + 3831 * -3] }), i.then(r, r);
}, fo.prototype.componentWillUnmount = function() {
  this.o = [];
}, fo.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[1342 + 1 * 9998 + -11340].__c;
      this.__v.__k[0] = Hg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && kA(vA, null, i.fallback);
  return A && (A.__u &= -33), [kA(vA, null, n.__a ? null : i.children), A];
};
var ea = function(i, n, t) {
  if (++t[-1030 + 1 * 1031] === t[-2 * -652 + 8848 + 1128 * -9] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[2078 * 4 + 9149 + -17461] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -502 * 4 + -685 * 7 + 6806; ) t.pop()();
    if (t[1 * 3041 + 3 * 1205 + 1331 * -5] < t[1955 + -14 * -517 + 317 * -29]) break;
    i.i = t = t[2];
  }
};
function F0(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function M0(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Fe(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), n.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -6098 + -2 * -1847 + 2405, 1 * -4413 + 8881 + -4467 * 1), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Fe(kA(F0, o, i.__v), n.v);
}
function W0(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = kA(M0, t);
  return e.containerInfo = n, e;
}
(Lt.prototype = new jA()).__a = function(i) {
  var n = this, t = _g(n.__v), e = n.l.get(i);
  return e[3 * 1475 + -1333 + 4 * -773]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), ea(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Lt.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = we(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-1 * -287 + 5802 + 1 * -6088, -4823 + -16 * 547 + 13575, this.i]);
  return i.children;
}, Lt.prototype.componentDidUpdate = Lt.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    ea(i, t, n);
  });
};
var jg = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, L0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, O0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, J0 = /[A-Z0-9]/g, U0 = typeof document < "u", Y0 = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function T0(i, n, t) {
  return n.__k == null && (n.textContent = ""), Fe(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function P0(i, n, t) {
  return xr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
jA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(jA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var ta = R.event;
function H0() {
}
function K0() {
  return this.cancelBubble;
}
function _0() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return ta && (i = ta(i)), i.persist = H0, i.isPropagationStopped = K0, i.isDefaultPrevented = _0, i.nativeEvent = i;
};
var ho = {};
ho.enumerable = !1, ho.configurable = !0, ho.get = function() {
  return this.class;
};
var fr, j0 = ho, oa = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || U0 && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[9648 + -1 * 9648] === "o" && g[1] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || Y0(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : O0.test(r) && (r = g) : g = r = "oninput" : o && L0.test(r) ? r = r.replace(J0, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = we(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = we(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", j0)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = jg, oa && oa(i);
};
var na = R.__r;
R.__r = function(i) {
  na && na(i), fr = i.__c;
};
var ia = R.diffed;
R.diffed = function(i) {
  ia && ia(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), fr = null;
};
var BA = {};
BA.readContext = function(i) {
  return fr.__n[i.__c].props.value;
}, BA.useCallback = De, BA.useContext = Qe, BA.useDebugValue = Jo, BA.useDeferredValue = Ug, BA.useEffect = Y, BA.useId = Mg, BA.useImperativeHandle = Fg, BA.useInsertionEffect = Tg, BA.useLayoutEffect = bt, BA.useMemo = hA, BA.useReducer = dr, BA.useRef = qA, BA.useState = nA, BA.useSyncExternalStore = Og, BA.useTransition = Yg;
var qg = {};
qg.current = BA;
var Vg = {};
Vg.ReactCurrentDispatcher = qg;
var q0 = Vg;
function V0(i) {
  return kA.bind(null, i);
}
function yn(i) {
  return !!i && i.$$typeof === jg;
}
function Z0(i) {
  return yn(i) && i.type === vA;
}
function z0(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function X0(i) {
  return yn(i) ? lr.apply(null, arguments) : i;
}
function $0(i) {
  return !!i.__k && (Fe(null, i), !0);
}
function Ac(i) {
  return i && (i.base || 15149 + -3787 * 4 === i.nodeType && i) || null;
}
var ec = function(i, n) {
  return i(n);
}, tc = function(i, n) {
  return i(n);
}, oc = vA, nc = yn, tt = { useState: nA, useId: Mg, useReducer: dr, useEffect: Y, useLayoutEffect: bt, useInsertionEffect: Tg, useTransition: Yg, useDeferredValue: Ug, useSyncExternalStore: Og, startTransition: Jg, useRef: qA, useImperativeHandle: Fg, useMemo: hA, useCallback: De, useContext: Qe, useDebugValue: Jo, version: "18.3.1", Children: N0, render: T0, hydrate: P0, unmountComponentAtNode: $0, createPortal: W0, createElement: kA, createContext: We, createFactory: V0, cloneElement: X0, createRef: c0, Fragment: vA, isValidElement: yn, isElement: nc, isFragment: Z0, isMemo: z0, findDOMNode: Ac, Component: jA, PureComponent: fi, memo: S0, forwardRef: Pg, flushSync: tc, unstable_batchedUpdates: ec, StrictMode: oc, Suspense: fo, SuspenseList: Lt, lazy: v0, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: q0 };
function ic(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Un, ra;
function rc() {
  return ra || (ra = -2567 + -1676 * 4 + 9272, Un = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), s = 0; s < r.length; s++) {
      var c = r[s];
      if (!g(c)) return !1;
      var I = n[c], B = t[c];
      if (o = e ? e.call(A, I, B, c) : void 0, o === !1 || o === void 0 && I !== B) return !1;
    }
    return !0;
  }), Un;
}
var ac = rc();
const gc = /* @__PURE__ */ ic(ac);
var O = "-ms-", Ht = "-moz-", W = "-webkit-", Zg = "comm", mn = "rule", hr = "decl", Ic = "@import", zg = "@keyframes", sc = "@layer", Xg = Math.abs, pr = String.fromCharCode, hi = Object.assign;
function cc(i, n) {
  return sA(i, -1 * -5156 + 1937 + -7093) ^ 45 ? (((n << -863 * -4 + 468 + -6 * 653 ^ sA(i, -2310 + -1 * 6083 + 1 * 8393)) << -3016 * 2 + 9809 + -3775 ^ sA(i, 1)) << -6291 * -1 + 2507 + 8796 * -1 ^ sA(i, -9057 + -20 * 319 + 15439)) << 2 * -1878 + 3 * -2099 + 10055 ^ sA(i, -9342 + 702 * 3 + 381 * 19) : 0;
}
function $g(i) {
  return i.trim();
}
function ye(i, n) {
  return (i = n.exec(i)) ? i[3343 * -1 + -2158 + 5501] : i;
}
function v(i, n, t) {
  return i.replace(n, t);
}
function po(i, n, t) {
  return i.indexOf(n, t);
}
function sA(i, n) {
  return i.charCodeAt(n) | 0;
}
function ft(i, n, t) {
  return i.slice(n, t);
}
function se(i) {
  return i.length;
}
function AI(i) {
  return i.length;
}
function Ot(i, n) {
  return n.push(i), i;
}
function Cc(i, n) {
  return i.map(n).join("");
}
function aa(i, n) {
  return i.filter(function(t) {
    return !ye(t, n);
  });
}
var wn = -1349 * 1 + 1 * -1831 + 3181, ht = 4231 * -2 + -1 * -3299 + 5164, eI = 1 * 4716 + 9057 + -13773 * 1, VA = -9491 + -1 * -8093 + 1398, Z = 0, kt = "";
function Dn(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = wn, g.column = ht, g.length = r, g.return = "", g.siblings = a, g;
}
function Se(i, n) {
  return hi(Dn("", null, null, "", null, null, 5028 + -2 * -1942 + -557 * 16, i.siblings), i, { length: -i.length }, n);
}
function at(i) {
  for (; i.root; ) i = Se(i.root, { children: [i] });
  Ot(i, i.siblings);
}
function Bc() {
  return Z;
}
function Qc() {
  return Z = VA > -4450 + 1 * 8180 + -1 * 3730 ? sA(kt, --VA) : -1154 * 5 + -1243 + -1 * -7013, ht--, Z === -8053 + -11 * -733 && (ht = -9503 + 5 * -769 + -1907 * -7, wn--), Z;
}
function XA() {
  return Z = VA < eI ? sA(kt, VA++) : 0, ht++, Z === 4999 + 1663 * -3 && (ht = 1, wn++), Z;
}
function $e() {
  return sA(kt, VA);
}
function yo() {
  return VA;
}
function bn(i, n) {
  return ft(kt, i, n);
}
function pi(i) {
  switch (i) {
    case 3 * -3017 + 5 * 1693 + 586:
    case 6371 + 1 * -6362:
    case 10:
    case -5 * -356 + -7 * 772 + 3637:
    case 6627 * -1 + 7 * 449 + 3516:
      return 5;
    case 5525 + 1373 * -4:
    case -5437 + -274 * -20:
    case 183 + 1 * 2354 + -1 * 2493:
    case 47:
    case -7436 + -23 * -326:
    case 8419 * 1 + 6153 + -14508:
    case 1 * 9071 + 284 * -29 + -709:
    case 59:
    case -1741 * 4 + 456 + 6631:
    case 1 * -7892 + -1747 * 3 + -14 * -947:
      return -8366 + 6649 * -1 + 15019;
    case -598 * 11 + -8092 + -14728 * -1:
      return -7232 + -800 * 12 + 16835;
    case 9747 + 283 * 23 + -16222:
    case -3881 + -1 * -3123 + -1 * -797:
    case 2463 * 1 + 7842 + 10265 * -1:
    case 4908 + -4817 * 1:
      return 2541 + -1790 * -1 + -4329;
    case -585 + 1 * 6891 + 1253 * -5:
    case -1 * 6961 + 1 * 6237 + 817:
      return -557 + -1 * -558;
  }
  return 6471 + 6471 * -1;
}
function Ec(i) {
  return wn = ht = -5041 + 1 * 2398 + 2644, eI = se(kt = i), VA = -6799 + 9 * -761 + -6824 * -2, [];
}
function xc(i) {
  return kt = "", i;
}
function Yn(i) {
  return $g(bn(VA - (5982 + 23 * -421 + 3702), yi(i === 91 ? i + 2 : i === -1547 + -2 * 587 + 2761 * 1 ? i + (2567 * 1 + -6614 + 4048) : i)));
}
function lc(i) {
  for (; (Z = $e()) && Z < -7268 * -1 + -2 * 793 + -5649; ) XA();
  return pi(i) > 2 || pi(Z) > 3 ? "" : " ";
}
function dc(i, n) {
  for (; --n && XA() && !(Z < -7187 + 317 * 21 + 578 || Z > 102 || Z > 57 && Z < 494 + -1 * 8046 + -1 * -7617 || Z > -1050 + -1253 * 5 + 7385 && Z < -3 * 1043 + -6076 + -1 * -9302); ) ;
  return bn(i, yo() + (n < 2736 + 2 * -3400 + -2 * -2035 && $e() == 15797 + 5 * -3153 && XA() == -6308 + 968 * -7 + 3 * 4372));
}
function yi(i) {
  for (; XA(); ) switch (Z) {
    case i:
      return VA;
    case 34:
    case -981 * -2 + 6616 + -8539:
      i !== 34 && i !== 39 && yi(Z);
      break;
    case -441 + 6217 * -1 + 6698:
      i === -1615 + 461 * -11 + 6727 && yi(i);
      break;
    case -7474 + -1 * -6869 + 1 * 697:
      XA();
      break;
  }
  return VA;
}
function uc(i, n) {
  for (; XA() && i + Z !== 57; ) if (i + Z === 42 + (100 + 2647 * -3 + 1 * 7883) && $e() === 47) break;
  return "/*" + bn(n, VA - (-7500 + 1 * -2312 + 9813)) + "*" + pr(i === 9623 + -1 * 6733 + -2843 ? i : XA());
}
function fc(i) {
  for (; !pi($e()); ) XA();
  return bn(i, VA);
}
function hc(i) {
  return xc(mo("", null, null, null, [""], i = Ec(i), -9792 + 3264 * 3, [-383 * 15 + 1 * -7433 + 22 * 599], i));
}
function mo(i, n, t, e, A, o, r, a, g) {
  for (var s = 0, c = -7 * 733 + -7 * -973 + -1680, I = r, B = -1 * 7483 + 8230 + -1 * 747, E = -4793 + -444 * -2 + 781 * 5, x = 0, Q = 56 + -633 * 11 + -6908 * -1, d = 1741 + -1187 * -7 + -10049, f = -1245 + -1208 * 4 + 2026 * 3, h = -394 * -23 + -4 * 1367 + -3594, p = "", y = A, b = o, k = e, D = p; d; ) switch (x = h, h = XA()) {
    case -3677 * -1 + -517 * 15 + 4118:
      if (x != 108 && sA(D, I - (632 + 1 * 8797 + -9428)) == -2405 + -19 * 472 + 11431) {
        po(D += v(Yn(h), "&", "&\f"), "&\f", Xg(s ? a[s - 1] : 2 * -3364 + -8938 + -42 * -373)) != -1 && (f = -1);
        break;
      }
    case 34:
    case 1 * -8231 + -1590 + 9860:
    case 8726 + 1 * -5979 + -4 * 664:
      D += Yn(h);
      break;
    case 1587 + 4 * -923 + 2114:
    case 11193 + 11183 * -1:
    case -30 * -290 + -3 * 369 + -3790 * 2:
    case 32:
      D += lc(x);
      break;
    case 92:
      D += dc(yo() - (5328 + -1 * 5327), 2828 + 1 * -2821);
      continue;
    case 47:
      switch ($e()) {
        case 42:
        case 1034 * -8 + 132 + 8187:
          Ot(pc(uc(XA(), yo()), n, t, g), g);
          break;
        default:
          D += "/";
      }
      break;
    case (-2 * -563 + 60 + -1063) * Q:
      a[s++] = se(D) * f;
    case (2 * -4574 + -9869 + 19142) * Q:
    case -6143 + -2 * -3101:
    case 5443 + -1481 * -1 + -6924:
      switch (h) {
        case -373 + -1935 * 4 + 19 * 427:
        case 273 + 1146 * -2 + 2144:
          d = 1 * -7436 + 3110 + -309 * -14;
        case 59 + c:
          f == -1 && (D = v(D, /\f/g, "")), E > 10593 + 10593 * -1 && se(D) - I && Ot(E > 32 ? Ia(D + ";", e, t, I - (1474 + 1416 * -4 + 4191 * 1), g) : Ia(v(D, " ", "") + ";", e, t, I - 2, g), g);
          break;
        case 59:
          D += ";";
        default:
          if (Ot(k = ga(D, n, t, s, c, A, a, p, y = [], b = [], I, o), o), h === 2176 + 1 * -2053)
            if (c === -8970 + 897 * 10) mo(D, n, k, k, y, o, I, a, b);
            else switch (B === 9501 * 1 + 1649 * -2 + 872 * -7 && sA(D, 4 * -1588 + -2 * 497 + -7349 * -1) === 11053 + 1 * -10943 ? -4 * 2389 + 834 * 7 + -3818 * -1 : B) {
              case 12984 + -4 * 3221:
              case 6713 + -1 * 2906 + -3699:
              case 1803 + 1151 * -2 + 608:
              case 16516 + -2343 * 7:
                mo(i, k, k, e && Ot(ga(i, k, k, 5 * 1002 + 8834 + -13844, 2 * 2261 + -3599 + -923, A, a, p, A, y = [], I, b), b), A, b, I, a, e ? y : b);
                break;
              default:
                mo(D, k, k, k, [""], b, 0, a, b);
            }
      }
      s = c = E = 3619 + 9 * 899 + -11710, Q = f = -367 * 25 + 2107 * 2 + 4962, p = D = "", I = r;
      break;
    case 58:
      I = -1965 + -1 * -1966 + se(D), E = x;
    default:
      if (Q < 14653 + 3 * -4884) {
        if (h == -1071 * 5 + 1300 * 1 + 4178) --Q;
        else if (h == 6 * 907 + 6896 + -12213 && Q++ == 1 * 1186 + 1157 * -6 + 5756 && Qc() == -17129 + 17254 * 1) continue;
      }
      switch (D += pr(h), h * Q) {
        case 38:
          f = c > 2794 * -2 + 6201 + -613 ? 3638 + -2 * -3991 + -1291 * 9 : (D += "\f", -1);
          break;
        case -1 * -5174 + -5844 + 714:
          a[s++] = (se(D) - (-1 * -8573 + 4609 + -13181)) * f, f = 1;
          break;
        case 64:
          $e() === 45 && (D += Yn(XA())), B = $e(), c = I = se(p = D += fc(yo())), h++;
          break;
        case -1566 + -1 * -1611:
          x === -2408 + -1841 * -3 + -614 * 5 && se(D) == 9743 + -1171 * 7 + -1544 && (Q = -880 + 3 * 2063 + -1 * 5309);
      }
  }
  return o;
}
function ga(i, n, t, e, A, o, r, a, g, s, c, I) {
  for (var B = A - 1, E = A === 1881 + -1283 * 1 + -598 ? o : [""], x = AI(E), Q = 7434 + -21 * -283 + -13377, d = -6252 + -1 * 1485 + 7737, f = -266 * -35 + 2 * 2467 + -14244; Q < e; ++Q) for (var h = 1330 + -3923 * 1 + 1 * 2593, p = ft(i, B + (-8438 + -7489 * 1 + 2 * 7964), B = Xg(d = r[Q])), y = i; h < x; ++h) (y = $g(d > 0 ? E[h] + " " + p : v(p, /&\f/g, E[h]))) && (g[f++] = y);
  return Dn(i, n, t, A === -509 + -1 * -509 ? mn : a, g, s, c, I);
}
function pc(i, n, t, e) {
  return Dn(i, n, t, Zg, pr(Bc()), ft(i, 524 * -8 + -5275 + 9469, -2), 0, e);
}
function Ia(i, n, t, e, A) {
  return Dn(i, n, t, hr, ft(i, 0, e), ft(i, e + 1, -1), e, A);
}
function tI(i, n, t) {
  switch (cc(i, n)) {
    case 1 * -3189 + -5801 * -1 + 2491:
      return W + "print-" + i + i;
    case 5737:
    case 3969 + -2253 * -3 + -6527:
    case 3177:
    case 3433:
    case 5109 + 4 * -1273 + 1624:
    case -6835 + -1 * -11292:
    case 2921:
    case 5572:
    case 5808 + -269 * 2 + 3 * 362:
    case 1913 * 2 + -1344 + 3362:
    case 5173 + -2 * 991:
    case 6645:
    case -1987 + -1 * 554 + 2 * 2773:
    case -1481 * -1 + 935 + 1 * 3975:
    case -7709 + 1 * 13588:
    case 3845 + -12 * 539 + 8246:
    case -3393 + 11876 * -1 + 21404:
    case 1829 + -1 * 4514 + 7284:
    case -6860 + -6 * -542 + 8463:
    case 11 * 708 + 471 * -3 + -2160:
    case 6389:
    case 1941 * 5 + -8083 + 3487:
    case 5343 + 1 * 5821 + -5799:
    case 5621:
    case -7932 + -2316 * -2 + 7129:
      return W + i + i;
    case -2158 * -2 + -3437 * 1 + 3910:
      return Ht + i + i;
    case 5 * -674 + -1 * 1968 + 10687:
    case 6969 + 1 * -7940 + 1 * 5217:
    case 4810:
    case 6968:
    case 1536 + -1 * -2311 + 1091 * -1:
      return W + i + Ht + i + O + i + i;
    case -3796 + -4 * -2433:
      switch (sA(i, n + (443 * -11 + 10 * 463 + 254))) {
        case 114:
          return W + i + O + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -1984 * 3 + -4689 + 10749 * 1:
          return W + i + O + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 8104 + 1 * -8059:
          return W + i + O + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -2952 + 2445 * 4:
    case 4268:
    case 3 * -2992 + 7093 + -1 * -4786:
      return W + i + O + i + i;
    case -3793 + -677 * 1 + 10635:
      return W + i + O + "flex-" + i + i;
    case -5398 + -365 * -29:
      return W + i + v(i, /(\w+).+(:[^]+)/, W + "box-$1$2" + O + "flex-$1$2") + i;
    case 5443:
      return W + i + O + "flex-item-" + v(i, /flex-|-self/g, "") + (ye(i, /flex-|baseline/) ? "" : O + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case -11 * -899 + -4426 + -788:
      return W + i + O + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case -1853 * 2 + -10117 + 3 * 6457:
      return W + i + O + v(i, "shrink", "negative") + i;
    case -3826 + -4559 * -2:
      return W + i + O + v(i, "basis", "preferred-size") + i;
    case 6060:
      return W + "box-" + v(i, "-grow", "") + W + i + O + v(i, "grow", "positive") + i;
    case -661 * 2 + 4304 + 1572 * 1:
      return W + v(i, /([^-])(transform)/g, "$1" + W + "$2") + i;
    case -2 * -4168 + -3493 * 3 + 8330:
      return v(v(v(i, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), i, "") + i;
    case 2 * -303 + 1252 + 4849:
    case -3002 + -1 * -6961:
      return v(i, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return v(v(i, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + i + i;
    case 28 * -347 + 5 * -1834 + 23086:
      if (!ye(i, /flex-|baseline/)) return O + "grid-column-align" + ft(i, n) + i;
      break;
    case 786 + -1523 * 3 + 6375:
    case -1 * 6796 + -9853 + 20009:
      return O + v(i, "template-", "") + i;
    case 339 + -1839 * 3 + 9562:
    case -1316 + 403 * 23 + 1 * -4337:
      return t && t.some(function(e, A) {
        return n = A, ye(e.props, /grid-\w+-end/);
      }) ? ~po(i + (t = t[n].value), "span", 0) ? i : O + v(i, "-start", "") + i + O + "grid-row-span:" + (~po(t, "span", -3 * 2469 + -15 * -451 + -321 * -2) ? ye(t, /\d+/) : +ye(t, /\d+/) - +ye(i, /\d+/)) + ";" : O + v(i, "-start", "") + i;
    case -11650 + -2 * -8273:
    case -4 * -1433 + -8976 + 7372:
      return t && t.some(function(e) {
        return ye(e.props, /grid-\w+-start/);
      }) ? i : O + v(v(i, "-end", "-span"), "span ", "") + i;
    case 2 * 3323 + 1 * 5641 + 8 * -1024:
    case 3515 + 5801 * -1 + 5869:
    case 4068:
    case -1 * 2137 + -8910 + 13579:
      return v(i, /(.+)-inline(.+)/, W + "$1$2") + i;
    case 15913 * -1 + -8 * -1886 + -1 * -8941:
    case -1 * 10193 + -7150 + 24402:
    case 10211 + 1 * -4458:
    case -9027 * 1 + 21 * -396 + -369 * -62:
    case -1638 + -1 * -8187 + -1104:
    case 5701:
    case 2425 + -1 * 8698 + 11206:
    case 8316 + -1 * 8126 + 641 * 7:
    case 2834 + 1643 * -4 + -9271 * -1:
    case 14791 + -14 * 643:
    case -1 * 4177 + -303 * -3 + -27 * -307:
    case -11803 + 2 * 8284:
      if (se(i) - (3775 + -1891 * -4 + 5669 * -2) - n > 6) switch (sA(i, n + (-1 * 4733 + 1 * 9053 + -4319))) {
        case -1135 + -5 * 766 + 5074:
          if (sA(i, n + (6383 + -6379 * 1)) !== 1294 + 1 * -1249) break;
        case 102:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Ht + (sA(i, n + (4 * 586 + -9268 + 6927)) == -1 * 5719 + 6842 + -1015 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~po(i, "stretch", 7499 + 1461 * 5 + 1 * -14804) ? tI(v(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 245 + 1 * 7324 + -1 * 2417:
    case 5548 + -1 * 4245 + 4617:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, s) {
        return O + A + ":" + o + s + (r ? O + A + "-span:" + (a ? g : +g - +o) + s : "") + i;
      });
    case -1 * 5698 + 5506 + 5141:
      if (sA(i, n + (-6339 + 1088 * -1 + 1 * 7433)) === -1978 + 2 * 542 + 1015) return v(i, ":", ":" + W) + i;
      break;
    case 3129 + 11027 * -1 + 14342:
      switch (sA(i, sA(i, 898 * -2 + 1 * 9021 + -1 * 7211) === -805 + -2102 * 1 + 2952 ? -699 * -12 + 6390 + -14760 : -343 + 1 * -4463 + 4817 * 1)) {
        case 2 * 3461 + 1456 + -8258:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (sA(i, 4243 + 583 * -9 + 1018) === -3522 * -1 + -3061 * -1 + -934 * 7 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + O + "$2box$3") + i;
        case -2912 + 5 * 1807 + 6023 * -1:
          return v(i, ":", ":" + O) + i;
      }
      break;
    case 2 * -4087 + -4810 + 18703:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Uo(i, n) {
  for (var t = "", e = 0; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function yc(i, n, t, e) {
  switch (i.type) {
    case sc:
      if (i.children.length) break;
    case Ic:
    case hr:
      return i.return = i.return || i.value;
    case Zg:
      return "";
    case zg:
      return i.return = i.value + "{" + Uo(i.children, e) + "}";
    case mn:
      if (!se(i.value = i.props.join(","))) return "";
  }
  return se(t = Uo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function mc(i) {
  var n = AI(i);
  return function(t, e, A, o) {
    for (var r = "", a = -4 * -1503 + 1995 + -8007; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function wc(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function Dc(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case hr:
        i.return = tI(i.value, i.length, t);
        return;
      case zg:
        return Uo([Se(i, { value: v(i.value, "@", "@" + W) })], e);
      case mn:
        if (i.length) return Cc(t = i.props, function(A) {
          switch (ye(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              at(Se(i, { props: [v(A, /:(read-\w+)/, ":" + Ht + "$1")] }));
              var o = {};
              o.props = [A], at(Se(i, o)), hi(i, { props: aa(t, e) });
              break;
            case "::placeholder":
              at(Se(i, { props: [v(A, /:(plac\w+)/, ":" + W + "input-$1")] })), at(Se(i, { props: [v(A, /:(plac\w+)/, ":" + Ht + "$1")] })), at(Se(i, { props: [v(A, /:(plac\w+)/, O + "input-$1")] }));
              var r = {};
              r.props = [A], at(Se(i, r)), hi(i, { props: aa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var bc = N, M = {}, ot = typeof process < "u" && M !== void 0 && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", oI = "active", nI = "data-styled-version", kn = "6.1.19", yr = `/*!sc*/
`, Yo = typeof window < "u" && typeof document < "u", kc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.SC_DISABLE_SPEEDY !== void 0 && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), sa = /invalid hook call/i, go = /* @__PURE__ */ new Set(), Sc = function(i, n) {
  if (M.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -2 * 3677 + -2243 * 2 + -1 * -11841; g < arguments.length; g++) a[g - (2795 + -1397 * 2)] = arguments[g];
        sa.test(r) ? (o = !1, go.delete(e)) : A.apply(void 0, dt([r], a, !1));
      }, qA(), o && !go.has(e) && (console.warn(e), go.add(e));
    } catch (r) {
      sa.test(r.message) && go.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Sn = Object.freeze([]), pt = Object.freeze({});
function Gc(i, n, t) {
  return t === void 0 && (t = pt), i.theme !== t.theme && i.theme || n || t.theme;
}
var mi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Nc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Rc = /(^-|-$)/g;
function ca(i) {
  return i.replace(Nc, "-").replace(Rc, "");
}
var vc = /(a)(d)/gi, Io = -593 * 7 + 6269 + -2 * 1033, Ca = function(i) {
  return String.fromCharCode(i + (i > 4148 + -5091 * -1 + -1 * 9214 ? -9222 + -4877 * 2 + -1 * -19015 : -1 * 3119 + -3686 + -17 * -406));
};
function wi(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Io; n = n / Io | 793 * 3 + -2814 + 435) t = Ca(n % Io) + t;
  return (Ca(n % Io) + t).replace(vc, "$1-$2");
}
var Tn, iI = 5381, Ve = function(i, n) {
  for (var t = n.length; t; ) i = (1 * 2098 + -9607 + 3771 * 2) * i ^ n.charCodeAt(--t);
  return i;
}, rI = function(i) {
  return Ve(iI, i);
};
function Fc(i) {
  return wi(rI(i) >>> -7069 + 1 * -1053 + 8122);
}
function aI(i) {
  return M.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Pn(i) {
  return typeof i == "string" && (M.NODE_ENV === "production" || i.charAt(-1 * -2543 + -2464 * -4 + -12399) === i.charAt(0).toLowerCase());
}
var KA = {};
KA.childContextTypes = !0, KA.contextType = !0, KA.contextTypes = !0, KA.defaultProps = !0, KA.displayName = !0, KA.getDefaultProps = !0, KA.getDerivedStateFromError = !0, KA.getDerivedStateFromProps = !0, KA.mixins = !0, KA.propTypes = !0, KA.type = !0;
var Ge = {};
Ge.name = !0, Ge.length = !0, Ge.prototype = !0, Ge.caller = !0, Ge.callee = !0, Ge.arguments = !0, Ge.arity = !0;
var Pe = {};
Pe.$$typeof = !0, Pe.compare = !0, Pe.defaultProps = !0, Pe.displayName = !0, Pe.propTypes = !0, Pe.type = !0;
var st = {};
st.$$typeof = !0, st.render = !0, st.defaultProps = !0, st.displayName = !0, st.propTypes = !0;
var gI = typeof Symbol == "function" && Symbol.for, II = gI ? /* @__PURE__ */ Symbol.for("react.memo") : -23436 + 1 * -89689 + 34648 * 5, Mc = gI ? /* @__PURE__ */ Symbol.for("react.forward_ref") : -93453 + 1392 * 25 + 118765, Wc = KA, Lc = Ge, sI = Pe, Oc = ((Tn = {})[Mc] = st, Tn[II] = sI, Tn);
function Ba(i) {
  return ("type" in (n = i) && n.type.$$typeof) === II ? sI : "$$typeof" in i ? Oc[i.$$typeof] : Wc;
  var n;
}
var Jc = Object.defineProperty, Uc = Object.getOwnPropertyNames, Qa = Object.getOwnPropertySymbols, Yc = Object.getOwnPropertyDescriptor, Tc = Object.getPrototypeOf, Ea = Object.prototype;
function cI(i, n, t) {
  if (typeof n != "string") {
    if (Ea) {
      var e = Tc(n);
      e && e !== Ea && cI(i, e, t);
    }
    var A = Uc(n);
    Qa && (A = A.concat(Qa(n)));
    for (var o = Ba(i), r = Ba(n), a = -2 * 1731 + 455 + 1 * 3007; a < A.length; ++a) {
      var g = A[a];
      if (!(g in Lc || t && t[g] || r && g in r || o && g in o)) {
        var s = Yc(n, g);
        try {
          Jc(i, g, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function yt(i) {
  return typeof i == "function";
}
function mr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function ze(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function xa(i, n) {
  if (7769 + -1 * 7769 === i.length) return "";
  for (var t = i[-5176 + -2 * -2588], e = -3 * 1868 + -8049 * -1 + -2444; e < i.length; e++) t += i[e];
  return t;
}
function mt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Di(i, n, t) {
  if (t === void 0 && (t = !1), !t && !mt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 9350 + -34 * 275; e < n.length; e++) i[e] = Di(i[e], n[e]);
  else if (mt(n))
    for (var e in n) i[e] = Di(i[e], n[e]);
  return i;
}
function wr(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var AA = {};
AA[1] = `Cannot create styled-component for component: %s.

`, AA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, AA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, AA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, AA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, AA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, AA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', AA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, AA[9] = "Missing document `<head>`\n\n", AA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, AA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, AA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", AA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, AA[14] = `ThemeProvider: "theme" prop is required.

`, AA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", AA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, AA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, AA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Pc = M.NODE_ENV !== "production" ? AA : {};
function Hc() {
  for (var i = [], n = -5 * 1487 + 305 + 7130; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[8315 + 1 * -8315], e = [], A = -426 + -1 * 1269 + -4 * -424, o = i.length; A < o; A += 8736 + -398 * 20 + -775) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function St(i) {
  for (var n = [], t = -10828 + 10829 * 1; t < arguments.length; t++) n[t - (-16301 + 22 * 741)] = arguments[t];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(Hc.apply(void 0, dt([Pc[i]], n, !1)).trim());
}
var Kc = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-2424 + 4481 * -2 + 1322 * 9), this.length = 512, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 6431 + 395 * 13 + -11566, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -1054 + 1 * 1055) < 2447 * -1 + -5208 + -1531 * -5) throw St(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -2455 + 315 * 3 + 1510;
    }
    for (var a = this.indexOfGroup(n + (4574 + 4573 * -1)), g = (r = -8732 + 1 * -6889 + 15621, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 11690 + -5 * 2338;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(yr);
    return t;
  }, i;
})(), _c = -1549 * 1 + 8844 + 14 * -521 << 2 * -463 + -5125 + 6081, wo = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), Do = 1, so = function(i) {
  if (wo.has(i)) return wo.get(i);
  for (; To.has(Do); ) Do++;
  var n = Do++;
  if (M.NODE_ENV !== "production" && ((-6405 + -5 * -1838 + 557 * -5 | n) < -6835 + 5 * -1879 + 16230 || n > _c)) throw St(-1056 + 7561 * 1 + -6489, "".concat(n));
  return wo.set(i, n), To.set(n, i), n;
}, jc = function(i, n) {
  Do = n + 1, wo.set(i, n), To.set(n, i);
}, qc = "style[".concat(ot, "][").concat(nI, '="').concat(kn, '"]'), Vc = new RegExp("^".concat(ot, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Zc = function(i, n, t) {
  for (var e, A = t.split(","), o = 1 * 5297 + 201 + 2749 * -2, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, zc = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(yr), A = [], o = 7676 * 1 + -1 * 7699 + 23, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(Vc);
      if (g) {
        var s = 0 | parseInt(g[1], 10), c = g[-1907 + 1 * 5991 + -1 * 4082];
        5005 + 19 * -464 + 3811 !== s && (jc(c, s), Zc(i, c, g[5959 + 1 * -5956]), i.getTag().insertRules(s, A)), A.length = 8863 + 8863 * -1;
      } else A.push(a);
    }
  }
}, la = function(i) {
  for (var n = document.querySelectorAll(qc), t = 14464 + -32 * 452, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(ot) !== oI && (zc(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function Xc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var CI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(ot, "]")));
    return g[g.length - (-8 * -299 + -11 * -839 + -7 * 1660)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(ot, oI), e.setAttribute(nI, kn);
  var r = Xc();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, $c = (function() {
  function i(n) {
    this.element = CI(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 9836 + 2 * -4918, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw St(17);
    })(this.element), this.length = -623 + 5 * -901 + 4 * 1282;
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
})(), AC = (function() {
  function i(n) {
    this.element = CI(n), this.nodes = this.element.childNodes, this.length = -2611 + -258 * -19 + -2291;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 14 * -569 + -7311 + 15277) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), eC = (function() {
  function i(n) {
    this.rules = [], this.length = 1474 + 4709 * 2 + -10892;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 2399 * -1 + -6107 + 8506, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 896 * -5 + -5521 * 1 + 10002), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), da = Yo, tC = { isServer: !Yo, useCSSOMInjection: !kc }, BI = (function() {
  function i(n, t, e) {
    n === void 0 && (n = pt), t === void 0 && (t = {});
    var A = this;
    this.options = RA(RA({}, tC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Yo && da && (da = !1, la(this)), wr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), a = r.length, g = "", s = function(I) {
          var B = (function(f) {
            return To.get(f);
          })(I);
          if (B === void 0) return "continue";
          var E = o.names.get(B), x = r.getGroup(I);
          if (E === void 0 || !E.size || x.length === 0) return "continue";
          var Q = "".concat(ot, ".g").concat(I, '[id="').concat(B, '"]'), d = "";
          E !== void 0 && E.forEach(function(f) {
            f.length > 1 * -7812 + 4262 + 3550 && (d += "".concat(f, ","));
          }), g += "".concat(x).concat(Q, '{content:"').concat(d, '"}').concat(yr);
        }, c = 3259 + 2 * 1513 + -6285; c < a; c++) s(c);
        return g;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return so(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Yo && la(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(RA(RA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -6578 + 506 * 13) + (5324 + 1553 * 1 + -6876 * 1);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new eC(A) : e ? new $c(A) : new AC(A);
    })(this.options), new Kc(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (so(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(so(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(so(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), oC = /&/g, nC = /^\s*\/\/.*$/gm;
function QI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = QI(t.children, n)), t;
  });
}
function EI(i) {
  var n, t, e, A = i === void 0 ? pt : i, o = A.options, r = o === void 0 ? pt : o, a = A.plugins, g = a === void 0 ? Sn : a, s = function(B, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 2090 + -389 * -13 + -7147 ? ".".concat(n) : B;
  }, c = g.slice();
  c.push(function(B) {
    B.type === mn && B.value.includes("&") && (B.props[0] = B.props[-4448 + 4448 * 1].replace(oC, t).replace(e, s));
  }), r.prefix && c.push(Dc), c.push(yc);
  var I = function(B, E, x, Q) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var d = B.replace(nC, ""), f = hc(x || E ? "".concat(x, " ").concat(E, " { ").concat(d, " }") : d);
    r.namespace && (f = QI(f, r.namespace));
    var h = [];
    return Uo(f, mc(c.concat(wc(function(p) {
      return h.push(p);
    })))), h;
  };
  return I.hash = g.length ? g.reduce(function(B, E) {
    return E.name || St(-614 + 3 * 1150 + -2821), Ve(B, E.name);
  }, iI).toString() : "", I;
}
var iC = new BI(), bi = EI(), Dr = tt.createContext({ shouldForwardProp: void 0, styleSheet: iC, stylis: bi });
Dr.Consumer;
var rC = tt.createContext(void 0);
function ki() {
  return Qe(Dr);
}
function aC(i) {
  var n = nA(i.stylisPlugins), t = n[0], e = n[9144 + 3191 * 2 + -15525 * 1], A = ki().styleSheet, o = hA(function() {
    var c = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? c = i.sheet : i.target && (c = c.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (c = c.reconstructWithOptions(I)), c;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = hA(function() {
    var c = {};
    c.namespace = i.namespace, c.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = c, I.plugins = t, EI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  Y(function() {
    gc(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = hA(function() {
    var c = {};
    return c.shouldForwardProp = i.shouldForwardProp, c.styleSheet = o, c.stylis = r, c;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var s = {};
  return s.value = r, tt.createElement(Dr.Provider, g, tt.createElement(rC.Provider, s, i.children));
}
var ua = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = bi);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, wr(this, function() {
      throw St(-425 * 23 + -5618 + -13 * -1185, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = bi), this.name + n.hash;
  }, i;
})(), gC = function(i) {
  return i >= "A" && i <= "Z";
};
function fa(i) {
  for (var n = "", t = -3947 + -1 * -3947; t < i.length; t++) {
    var e = i[t];
    if (1619 * -4 + 1 * -7323 + 13800 === t && e === "-" && i[-1 * -1146 + 1 * -9377 + 8231 * 1] === "-") return i;
    gC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var xI = function(i) {
  return i == null || i === !1 || i === "";
}, lI = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !xI(o) && (Array.isArray(o) && o.isCss || yt(o) ? e.push("".concat(fa(A), ":"), o, ";") : mt(o) ? e.push.apply(e, dt(dt(["".concat(A, " {")], lI(o), !1), ["}"], !1)) : e.push("".concat(fa(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -6202 + -2 * -3101 === t || n in bc || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function At(i, n, t, e) {
  if (xI(i)) return [];
  if (mr(i)) return [".".concat(i.styledComponentId)];
  if (yt(i)) {
    if (!yt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return M.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof ua || mt(A) || A === null || console.error("".concat(aI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), At(A, n, t, e);
  }
  var o;
  return i instanceof ua ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : mt(i) ? lI(i) : Array.isArray(i) ? Array.prototype.concat.apply(Sn, i.map(function(r) {
    return At(r, n, t, e);
  })) : [i.toString()];
}
function IC(i) {
  for (var n = -6363 + -1 * 2361 + 8724; n < i.length; n += -6217 * 1 + 1 * -8236 + 14454) {
    var t = i[n];
    if (yt(t) && !mr(t)) return !1;
  }
  return !0;
}
var sC = rI(kn), cC = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (e === void 0 || e.isStatic) && IC(n), this.componentId = t, this.baseHash = Ve(sC, t), this.baseStyle = e, BI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ze(A, this.staticRulesId);
      else {
        var o = xa(At(this.rules, n, t, e)), r = wi(Ve(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = ze(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = Ve(this.baseHash, e.hash), s = "", c = -4 * 1778 + 8094 + 982 * -1; c < this.rules.length; c++) {
        var I = this.rules[c];
        if (typeof I == "string") s += I, M.NODE_ENV !== "production" && (g = Ve(g, I));
        else if (I) {
          var B = xa(At(I, n, t, e));
          g = Ve(g, B + c), s += B;
        }
      }
      if (s) {
        var E = wi(g >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(s, ".".concat(E), void 0, this.componentId)), A = ze(A, E);
      }
    }
    return A;
  }, i;
})(), dI = tt.createContext(void 0);
dI.Consumer;
var Hn = {}, ha = /* @__PURE__ */ new Set();
function CC(i, n, t) {
  var e = mr(i), A = i, o = !Pn(i), r = n.attrs, a = r === void 0 ? Sn : r, g = n.componentId, s = g === void 0 ? (function(b, k) {
    var D = typeof b != "string" ? "sc" : ca(b);
    Hn[D] = (Hn[D] || 1 * 607 + -3 * 2837 + 608 * 13) + 1;
    var T = "".concat(D, "-").concat(Fc(kn + D + Hn[D]));
    return k ? "".concat(k, "-").concat(T) : T;
  })(n.displayName, n.parentComponentId) : g, c = n.displayName, I = c === void 0 ? (function(b) {
    return Pn(b) ? "styled.".concat(b) : "Styled(".concat(aI(b), ")");
  })(i) : c, B = n.displayName && n.componentId ? "".concat(ca(n.displayName), "-").concat(n.componentId) : n.componentId || s, E = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var d = n.shouldForwardProp;
      x = function(b, k) {
        return Q(b, k) && d(b, k);
      };
    } else x = Q;
  }
  var f = new cC(t, B, e ? A.componentStyle : void 0);
  function h(b, k) {
    return (function(D, T, z) {
      var FA = D.attrs, yA = D.componentStyle, SA = D.defaultProps, X = D.foldedComponentIds, oo = D.styledComponentId, a0 = D.target, g0 = tt.useContext(dI), I0 = ki(), vn = D.shouldForwardProp || I0.shouldForwardProp;
      M.NODE_ENV !== "production" && Jo(oo);
      var Jr = Gc(T, g0, SA) || pt, xe = (function(no, Rt, io) {
        var rt = {};
        rt.className = void 0, rt.theme = io;
        for (var Wn, Le = RA(RA({}, Rt), rt), Ln = 2 * -4718 + -2 * -4889 + -342; Ln < no.length; Ln += 1) {
          var ro = yt(Wn = no[Ln]) ? Wn(Le) : Wn;
          for (var ke in ro) Le[ke] = ke === "className" ? ze(Le[ke], ro[ke]) : ke === "style" ? RA(RA({}, Le[ke]), ro[ke]) : ro[ke];
        }
        return Rt.className && (Le.className = ze(Le.className, Rt.className)), Le;
      })(FA, T, Jr), Gt = xe.as || a0, Nt = {};
      for (var TA in xe) xe[TA] === void 0 || TA[-5305 + 4 * 1253 + 1 * 293] === "$" || TA === "as" || TA === "theme" && xe.theme === Jr || (TA === "forwardedAs" ? Nt.as = xe.forwardedAs : vn && !vn(TA, Gt) || (Nt[TA] = xe[TA], vn || M.NODE_ENV !== "development" || D0(TA) || ha.has(TA) || !mi.has(Gt) || (ha.add(TA), console.warn('styled-components: it looks like an unknown prop "'.concat(TA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Fn = (function(no, Rt) {
        var io = ki(), rt = no.generateAndInjectStyles(Rt, io.styleSheet, io.stylis);
        return M.NODE_ENV !== "production" && Jo(rt), rt;
      })(yA, xe);
      M.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(Fn);
      var Mn = ze(X, oo);
      return Fn && (Mn += " " + Fn), xe.className && (Mn += " " + xe.className), Nt[Pn(Gt) && !mi.has(Gt) ? "class" : "className"] = Mn, z && (Nt.ref = z), kA(Gt, Nt);
    })(p, b, k);
  }
  h.displayName = I;
  var p = tt.forwardRef(h), y = {};
  return y.attrs = !0, y.componentStyle = !0, y.displayName = !0, y.foldedComponentIds = !0, y.shouldForwardProp = !0, y.styledComponentId = !0, y.target = !0, p.attrs = E, p.componentStyle = f, p.displayName = I, p.shouldForwardProp = x, p.foldedComponentIds = e ? ze(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = B, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? (function(k) {
      for (var D = [], T = 3196 + -3688 * 1 + 493; T < arguments.length; T++) D[T - (-4740 + 1 * 4741)] = arguments[T];
      for (var z = 8267 * -1 + 1 * -4707 + 6487 * 2, FA = D; z < FA.length; z++) Di(k, FA[z], !0);
      return k;
    })({}, A.defaultProps, b) : b;
  } }), M.NODE_ENV !== "production" && (Sc(I, B), p.warnTooManyClasses = /* @__PURE__ */ (function(b, k) {
    var D = {}, T = !1;
    return function(z) {
      if (!T && (D[z] = !0, Object.keys(D).length >= 1 * -5192 + -1378 + 6770)) {
        var FA = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(FA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, D = {};
      }
    };
  })(I, B)), wr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && cI(p, i, y), p;
}
function pa(i, n) {
  for (var t = [i[-9238 + -9068 * -1 + 170]], e = -9172 + 4586 * 2, A = n.length; e < A; e += 11196 + 2239 * -5) t.push(n[e], i[e + (8470 + -2 * -4178 + -16825)]);
  return t;
}
var ya = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function BC(i) {
  for (var n = [], t = -3696 + 3697 * 1; t < arguments.length; t++) n[t - (-10 * -802 + 8208 + -16227)] = arguments[t];
  if (yt(i) || mt(i)) return ya(At(pa(Sn, dt([i], n, !0))));
  var e = i;
  return -944 * 2 + -1 * -5677 + -3789 === n.length && 27 * 363 + 7880 + -20 * 884 === e.length && typeof e[21 * -277 + -26 * 372 + 15489] == "string" ? At(e) : ya(At(pa(e, n)));
}
function Si(i, n, t) {
  if (t === void 0 && (t = pt), !n) throw St(1, n);
  var e = function(A) {
    for (var o = [], r = 1 * -9862 + 1 * 8032 + 1 * 1831; r < arguments.length; r++) o[r - (-452 * 1 + -539 + 992)] = arguments[r];
    return i(n, t, BC.apply(void 0, dt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Si(i, n, RA(RA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Si(i, n, RA(RA({}, t), A));
  }, e;
}
var uI = function(i) {
  return Si(CC, i);
}, Ao = uI;
mi.forEach(function(i) {
  Ao[i] = uI(i);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var co = "__sc-".concat(ot, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[co] || (window[co] = 224 + -2561 * 2 + 4898), window[co] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[co] += -11 * 257 + -4031 * -1 + -1203);
const QC = Ao.div`
  position: relative;
`, EC = Ao.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class m extends Error {
  cause;
  constructor(n, t) {
    super(n), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(n) {
  }
  static fromCameraError(n) {
    if (this.logError(n), n instanceof m) return n;
    let t;
    switch (n.name) {
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
    return new m(t, n);
  }
  static fromError(n) {
    if (this.logError(n), n instanceof m) return n;
    const t = "An unexpected error has occurred";
    return new m(t);
  }
}
const bo = {};
bo.CONTINUE_DETECTION = "continue-detection", bo.SWITCH_CAMERA = "switch-camera", bo.TOGGLE_MIRROR = "toggle-mirror";
const Kn = bo, Gi = {};
Gi.FIRST_FRAME = "first-frame", Gi.FIRST_VALID_FRAME = "first-valid-frame";
const _n = Gi, fI = {};
fI.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const ma = fI;
var hI = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(hI || {}), Ce = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Ce || {}), xC = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(xC || {}), lC = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(lC || {}), dC = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(dC || {});
const pe = {};
pe.CANDIDATE_SELECTION = "candidate_selection", pe.DOCUMENT_CENTERING = "document_centering", pe.DOCUMENT_NOT_PRESENT = "document_not_present", pe.DOCUMENT_TOO_FAR = "document_too_far", pe.SHARPNESS_TOO_LOW = "sharpness_too_low", pe.BRIGHTNESS_TOO_LOW = "brightness_too_low", pe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", pe.HOTSPOTS_PRESENT = "hotspots_present";
const Oe = pe, Je = {};
Je.isPresent = Oe.DOCUMENT_NOT_PRESENT, Je.isNotSmall = Oe.DOCUMENT_TOO_FAR, Je.isNotOutOfBounds = Oe.DOCUMENT_CENTERING, Je.isSharp = Oe.SHARPNESS_TOO_LOW, Je.isNotDim = Oe.BRIGHTNESS_TOO_LOW, Je.isNotBright = Oe.BRIGHTNESS_TOO_HIGH, Je.noHotspots = Oe.HOTSPOTS_PRESENT;
const ct = {};
ct.LOADING = "loading", ct.ERROR = "error", ct.WAITING = "waiting", ct.RUNNING = "running", ct.COMPLETE = "complete";
const CA = ct, pI = { ...CA };
pI.DONE = "done";
const wa = pI, yI = {};
yI.EYE_NOT_PRESENT = "eye_not_present";
const wt = yI, wA = {};
wA.CANDIDATE_SELECTION = "candidate_selection", wA.FACE_TOO_CLOSE = "face_too_close", wA.FACE_TOO_FAR = "face_too_far", wA.FACE_CENTERING = "face_centering", wA.FACE_NOT_PRESENT = "face_not_present", wA.SHARPNESS_TOO_LOW = "sharpness_too_low", wA.BRIGHTNESS_TOO_LOW = "brightness_too_low", wA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", wA.DEVICE_PITCHED = "device_pitched", wA.LEFT_EYE_NOT_PRESENT = "left_" + wt.EYE_NOT_PRESENT, wA.RIGHT_EYE_NOT_PRESENT = "right_" + wt.EYE_NOT_PRESENT, wA.MOUTH_NOT_PRESENT = "mouth_not_present", wA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", wA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const QA = wA, GA = {};
GA.isPresent = QA.FACE_NOT_PRESENT, GA.isNotPitched = QA.DEVICE_PITCHED, GA.isNotSmall = QA.FACE_TOO_FAR, GA.isNotLarge = QA.FACE_TOO_CLOSE, GA.isNotOutOfBounds = QA.FACE_CENTERING, GA.isNotDim = QA.BRIGHTNESS_TOO_LOW, GA.isNotBright = QA.BRIGHTNESS_TOO_HIGH, GA.isSharp = QA.SHARPNESS_TOO_LOW, GA.isLeftEyePresent = QA.LEFT_EYE_NOT_PRESENT, GA.isRightEyePresent = QA.RIGHT_EYE_NOT_PRESENT, GA.isMouthPresent = QA.MOUTH_NOT_PRESENT, GA.isMouthScoreNotTooHigh = QA.MOUTH_SCORE_TOO_HIGH, GA.isMouthScoreNotTooLow = QA.MOUTH_SCORE_TOO_LOW;
const uC = GA;
({ ...QA });
var fC = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(fC || {});
const rA = {};
rA.CANDIDATE_SELECTION = "candidate_selection", rA.FACE_TOO_CLOSE = "face_too_close", rA.FACE_TOO_FAR = "face_too_far", rA.FACE_CENTERING = "face_centering", rA.FACE_NOT_PRESENT = "face_not_present", rA.SHARPNESS_TOO_LOW = "sharpness_too_low", rA.BRIGHTNESS_TOO_LOW = "brightness_too_low", rA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", rA.DEVICE_PITCHED = "device_pitched", rA.LEFT_EYE_NOT_PRESENT = "left_" + wt.EYE_NOT_PRESENT, rA.RIGHT_EYE_NOT_PRESENT = "right_" + wt.EYE_NOT_PRESENT, rA.MOUTH_NOT_PRESENT = "mouth_not_present", rA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", rA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", rA.SMILE = "smile", rA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", rA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const MA = rA, WA = {};
WA.isPresent = MA.FACE_NOT_PRESENT, WA.isNotPitched = MA.DEVICE_PITCHED, WA.isNotSmall = MA.FACE_TOO_FAR, WA.isNotLarge = MA.FACE_TOO_CLOSE, WA.isNotOutOfBounds = MA.FACE_CENTERING, WA.isNotDim = MA.BRIGHTNESS_TOO_LOW, WA.isNotBright = MA.BRIGHTNESS_TOO_HIGH, WA.isSharp = MA.SHARPNESS_TOO_LOW, WA.isLeftEyePresent = MA.LEFT_EYE_NOT_PRESENT, WA.isRightEyePresent = MA.RIGHT_EYE_NOT_PRESENT, WA.isMouthPresent = MA.MOUTH_NOT_PRESENT, WA.isMouthStatusNotTooHigh = MA.MOUTH_SCORE_TOO_HIGH, WA.isMouthStatusNotTooLow = MA.MOUTH_SCORE_TOO_LOW;
const jn = {};
jn.NEUTRAL = "NEUTRAL", jn.SMILE = "SMILE", jn.SMILE_MANUAL = "SMILE_MANUAL";
const zA = {};
zA.CANDIDATE_SELECTION = "candidate_selection", zA.PALM_CENTERING = "palm_centering", zA.PALM_NOT_PRESENT = "palm_not_present", zA.PALM_TOO_FAR = "palm_too_far", zA.PALM_TOO_CLOSE = "palm_too_close", zA.SHARPNESS_TOO_LOW = "sharpness_too_low", zA.BRIGHTNESS_TOO_LOW = "brightness_too_low", zA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", zA.DEVICE_PITCHED = "device_pitched", zA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const le = zA, de = {};
de.isPresent = le.PALM_NOT_PRESENT, de.isNotPitched = le.DEVICE_PITCHED, de.isNotSmall = le.PALM_TOO_FAR, de.isNotOutOfBounds = le.PALM_CENTERING, de.isNotDim = le.BRIGHTNESS_TOO_LOW, de.isNotBright = le.BRIGHTNESS_TOO_HIGH, de.isSharp = le.SHARPNESS_TOO_LOW, de.isNotLarge = le.PALM_TOO_CLOSE, de.isTemplateExtractionQualityHighEnough = le.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...QA });
const Co = {};
Co.TOP_LEFT = "TOP_LEFT", Co.TOP_RIGHT = "TOP_RIGHT", Co.BOTTOM_RIGHT = "BOTTOM_RIGHT", Co.BOTTOM_LEFT = "BOTTOM_LEFT";
const _A = {};
_A.CANDIDATE_SELECTION = "candidate_selection", _A.FACE_TOO_CLOSE = "face_too_close", _A.FACE_TOO_FAR = "face_too_far", _A.FACE_CENTERING = "face_centering", _A.FACE_NOT_PRESENT = "face_not_present", _A.SHARPNESS_TOO_LOW = "sharpness_too_low", _A.BRIGHTNESS_TOO_LOW = "brightness_too_low", _A.BRIGHTNESS_TOO_HIGH = "brightness_too_high", _A.DEVICE_PITCHED = "device_pitched", _A.LEFT_EYE_NOT_PRESENT = "left_" + wt.EYE_NOT_PRESENT, _A.RIGHT_EYE_NOT_PRESENT = "right_" + wt.EYE_NOT_PRESENT;
const Ae = _A, ee = {};
ee.isPresent = Ae.FACE_NOT_PRESENT, ee.isNotPitched = Ae.DEVICE_PITCHED, ee.isNotSmall = Ae.FACE_TOO_FAR, ee.isNotLarge = Ae.FACE_TOO_CLOSE, ee.isNotOutOfBounds = Ae.FACE_CENTERING, ee.isNotDim = Ae.BRIGHTNESS_TOO_LOW, ee.isNotBright = Ae.BRIGHTNESS_TOO_HIGH, ee.isSharp = Ae.SHARPNESS_TOO_LOW, ee.isLeftEyePresent = Ae.LEFT_EYE_NOT_PRESENT, ee.isRightEyePresent = Ae.RIGHT_EYE_NOT_PRESENT;
const Gn = We(void 0);
Gn.displayName = "AppStateContext";
function $A() {
  const i = Qe(Gn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
var mI = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(mI || {});
const Ni = {};
Ni.FRONT = "user", Ni.BACK = "environment";
const br = Ni, Ri = {};
Ri.AUTO_CAPTURE = "AUTO_CAPTURE", Ri.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const vi = Ri, Fi = {};
Fi.SIMD = "simd", Fi.NO_SIMD = "no-simd";
const Da = Fi, Mi = {};
Mi.Lower = "Lower", Mi.Higher = "Higher";
const Po = Mi, ko = {};
ko.VISIBLE = "VISIBLE", ko.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", ko.HIDDEN = "HIDDEN";
const Ho = ko, Wi = {};
Wi.MOBILE = "MOBILE", Wi.DESKTOP = "DESKTOP";
const ba = Wi;
function wI(i, n, t, e, A) {
  return DA(n - 374, i);
}
function Li(i, n, t, e, A) {
  return DA(e - 329, A);
}
(function(i, n) {
  const t = i();
  function e(r, a, g, s, c) {
    return DA(a - -158, g);
  }
  function A(r, a, g, s, c) {
    return DA(c - -912, g);
  }
  function o(r, a, g, s, c) {
    return DA(r - -571, a);
  }
  for (; ; )
    try {
      if (parseInt(o(-118, "#jTW", -119, -101, -102)) / 1 + -parseInt(A(-454, -450, "#jTW", -448, -445)) / 2 * (parseInt(A(-462, -470, "cfoe", -454, -456)) / 3) + -parseInt(o(-105, "N4W*", -88, -111, -95)) / 4 + -parseInt(o(-117, "v&%E", -116, -118, -134)) / 5 * (parseInt(e(284, 289, "FUUS", 281, 297)) / 6) + parseInt(A(-426, -439, "TO!)", -440, -438)) / 7 + parseInt(A(-470, -471, "#jTW", -456, -454)) / 8 * (-parseInt(A(-467, -456, "e8Vg", -475, -462)) / 9) + parseInt(A(-421, -442, "uWz8", -445, -436)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ko, 51215 * 27 + 1011246 + -1573221);
function DA(i, n) {
  i = i - (7128 + 418 * 3 + -7940 * 1);
  const t = Ko();
  let e = t[i];
  if (DA.OWBIne === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    DA.QRkfJt = g, DA.kcIFKz = {}, DA.OWBIne = !0;
  }
  const o = t[-2990 + -2581 * 3 + 10733], r = i + o, a = DA.kcIFKz[r];
  return a ? e = a : (DA.mcMUkh === void 0 && (DA.mcMUkh = !0), e = DA.QRkfJt(e, n), DA.kcIFKz[r] = e), e;
}
function Ko() {
  const i = ["W5FcRKddHZC", "WQSHAmkeegjZWReWW5rfWOup", "b8kLWQu", "WR91W7hcSCkdW7hcUCoOkW", "a3/cOcxcLq", "qmovnwhdIGGCAq/cLh5AwSkA", "j8o0W43dQgxdGmoixvpcQaxdQq", "WPr3kmk9l1NcVSoiWOq8xCkLFG", "zSkuWR/cV2y", "W7ddHKFcHSkCqWb3E8ofWQO", "w1qnwW4lg3ZdMSktiW", "WQtdU8oNW5lcVCoNh8ox", "WPFdUXldLxJcV8o4lSoVcCoTl2u", "W5NcJSorWOCJ", "W7VdJZBdT8otsJrW", "WQz0z8khpq", "W6ldI8o0W6VcUG", "W5ZdRSo1d8oaWRtcV3Lm", "WQDpWPtcGbS", "DYhdS8kuga", "WPqAWOPkqhvUe8oaW6BcHG", "W6pcQmksz8oN", "W7pcQJtdIf4YlSoosCkwW4v5ga", "W7hcPaxdQSoTvb8", "WRxcHCoxW4i4", "WPr1l8kXla/dGmoEWRieza", "W6tcQmkPFa", "W4zBkGddOmo2WPr2FmoeW4FdR8on", "EN86W6xdNa", "kCktamoRn0vJcCkohtap", "uCo1W6efW5WbW5LFW5mcW4tcO8kt", "W7HLWPNdHmopESoG", "mCofW7xdUd3dQCoazxxcP8osWQBdQSoN", "W4C7umoODa", "WOJcUKiAW4i"];
  return Ko = function() {
    return i;
  }, Ko();
}
function So(i, n, t, e, A) {
  return DA(e - 679, A);
}
const _o = We(void 0);
_o[So(1117, 1137, 1119, 1127, "Xk77") + wI("pDiG", 816) + "e"] = Li(782, 788, 812, 797, "slOr") + So(1126, 1133, 1134, 1144, "q9!z") + So(1137, 1139, 1140, 1149, "q9!z");
function eo() {
  const i = Qe(_o);
  if (i === void 0) throw new Error(_o[e(-63, -64, -67, -47, "uWz8") + e(-43, -58, -50, -52, "Bm^g") + "e"] + (e(-55, -69, -65, -40, "!I6h") + t(16, -3, 11, 0, "slOr") + A(783, 771, "cfoe") + A(798, 793, "RD^0") + t(13, 12, 17, 14, "rrcV") + n(872, 883, "vh]f") + A(801, 795, "Q4dy") + t(-8, 1, 0, -1, "TO!)")));
  function n(o, r, a, g, s) {
    return Li(o - 102, r - 324, a - 336, o - 100, a);
  }
  function t(o, r, a, g, s) {
    return So(o - 243, r - 472, a - 190, a - -1125, s);
  }
  function e(o, r, a, g, s) {
    return Li(o - 190, r - 270, a - 475, o - -844, s);
  }
  function A(o, r, a, g, s) {
    return wI(a, o - -35);
  }
  return i;
}
const Zt = (i) => i.length < -1814 * -1 + 1656 + -3469 * 1 ? 0 : i.reduce((t, e) => t + e, 0) / i.length, be = (i) => Number.parseFloat(i.toFixed(-1 * -5171 + 12 * -687 + -1538 * -2));
function hC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-19 * 401 + 6096 + 1 * 1523, -6513 + 13 * 501, n.canvas.width, n.canvas.height);
}
const DI = -8930 + -5869 * -1 + 3061 + 0.75, pC = 2, yC = 600, mC = -1296 + 1 * -5645 + 11 * 631, wC = "dot-auto-capture-video", Nn = (i, n) => Math.min(i, n), bI = ({ height: i, width: n }, t) => {
  const e = Nn(n, i) * t, A = (n - e) / (293 * -7 + 1358 + -1 * -695), o = (i - e) / (6766 + -1193 * 3 + 3185 * -1), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, DC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = bI(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, bC = ({ height: i, width: n }) => {
  const t = Nn(n, i), e = t / 3 * (-1878 * -3 + 4725 + -5 * 2071);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function kC(i, n) {
  const t = Nn(n.width, n.height);
  return be(i * t);
}
function SC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, bI(t, DI);
}
function GC(i) {
  return DC(i, DI);
}
function NC(i, n) {
  return kC(i, n) * pC;
}
const RC = "8.0.2", vC = {
  version: RC
}, FC = -1 * 1496 + 1 * 6311 + 534 * -9 + 0.8100000000000005, Oi = {};
Oi.max = 100, Oi.min = 10;
const ka = Oi, MC = 9759 + -2525 * -2 + -14089, WC = -8 * -929 + -4324 + -2908, LC = -515 * -6 + 1 * -6553 + 3467, kI = "AES-CBC", SI = "RSA-OAEP", OC = "SHA-256", JC = "image/jpeg", UC = -3879 + -3887 * -1, YC = 3077 + -1 * 3037, GI = "/dot-assets", Sa = "dot_embedded_bg.wasm", Ji = (i) => new Promise((n) => {
  setTimeout(n, i);
}), NI = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? be(t) : t)), RI = () => vC.version, vI = (i) => new URL(i).hostname.replace("www.", ""), kr = () => vI(window.location.href) === "localhost", TC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function PC(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function HC(i) {
  return i.at(-1) === "/" ? i.slice(0, -1) : i;
}
function FI(i) {
  return "" + HC(i ?? "") + GI;
}
function vt(i) {
  return (...n) => {
    kr() && console[i](...n);
  };
}
const Sr = { log: vt("log"), warn: vt("warn"), error: vt("error"), info: vt("info"), debug: vt("debug") }, KC = () => "prod".toLowerCase() === "dev";
class Gr extends Array {
  #A;
  constructor(n) {
    super(), this.#A = n;
  }
  get size() {
    return this.#A;
  }
  pushFixed(...n) {
    if (n.length > this.#A) {
      const t = n.slice(-this.#A);
      this.push(...t);
      return;
    }
    this.length === this.#A && this.splice(9814 + -6839 * -1 + 5551 * -3, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(252 + 35 * -261 + 8883);
  }
}
const MI = (i, n, t = JC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), _C = async (i) => MI(i, 8032 + 4067 * -1 + -3875), jC = async (i) => MI(i, 1457 + -8287 * 1 + 6930, "image/png"), WI = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 6221 + 4 * 1329 + -11537, 0, t.width, t.height), t;
}, LI = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(0, -8226 + 3 * -2705 + -39 * -419, i.width, i.height);
  return t;
};
async function qC(i, n) {
  const t = WI(i, n);
  return jC(t);
}
const OI = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, qn = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, OI(i, g, t);
}, Kt = (i, n, t, e = -7847 * -1 + 1165 + -1 * 9012) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -3588 + -4 * 262 + 4643, 7), A.beginPath());
}, VC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, ZC = (i, n) => Object.values(i).every((t) => VC(t, n));
function jo(i) {
  const { height: n, width: t } = bC(i), e = (i.width - t) / (1802 * 3 + -392 + -2506 * 2), A = (i.height - n) / 2, o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function JI(i, n, t) {
  const { height: e, width: A } = t, o = Nn(i.width, i.height), r = A - o * n * (-5322 + 23 * -359 + 13581), a = e - o * n * (12821 + 4273 * -3), g = (i.width - r) / 2, s = (i.height - a) / (6645 + 1 * 3118 + 1 * -9761), c = {};
  return c.shiftX = g, c.shiftY = s, c.width = r, c.height = a, c;
}
function gt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Nr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Ga() {
  return /Android/i.test(navigator.userAgent);
}
function et() {
  return /Firefox/i.test(navigator.userAgent);
}
function UI() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const zC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function XC() {
  return navigator.userAgent;
}
function $C() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function _t() {
  return !1;
}
function AB() {
  return !0;
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return aA(g - 261, a);
  }
  function e(a, g, s, c, I) {
    return aA(c - -406, I);
  }
  function A(a, g, s, c, I) {
    return aA(c - 825, g);
  }
  const o = i();
  function r(a, g, s, c, I) {
    return aA(s - -36, g);
  }
  for (; ; )
    try {
      if (-parseInt(t("2Hz]", 456, 457, 449, 450)) / 1 + parseInt(r(165, "ttze", 173, 185, 183)) / 2 + -parseInt(e(-188, -196, -195, -198, "DebS")) / 3 + -parseInt(r(170, "&Fkv", 171, 173, 165)) / 4 + -parseInt(e(-211, -200, -196, -208, "Q6l!")) / 5 * (-parseInt(r(188, "pXG[", 178, 190, 181)) / 6) + parseInt(t("X8rE", 455, 454, 446, 464)) / 7 * (parseInt(A(1028, "pGrO", 1047, 1035, 1045)) / 8) + parseInt(e(-206, -218, -203, -213, "2Hz]")) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(qo, 2 * 7861 + 166514 * 1 + -1 * 28649);
function qo() {
  const i = ["DftdL0jxBMO", "W6hcMbNdHmk0", "W5TlW581bW", "W7NcO1JcRYz6WRFcHXnTkG", "W67cVGBcN8o/W7FdI8k+", "dCoqW75nz0hdJSkVW47dUSk7WR4", "W7RdOX3cJCod", "CZhcJ8oVWQKsWQfOW6HvW6hdLa", "qK7dSCo2lCkrWOtcMCowv1WbW54", "CZBcICoVWQesWRXKW4T8W4/dRq", "W7VcTSoFv2xcSmkUWQq", "AZRcLCo4aXJdTvfHFdGj", "bGbAW7S2WQ5Un8oLW71Pzq", "WQRdJZ/cNSodW6RcUW", "DmkaWP3cHG", "W7VcPv7cPYydWOBcUsHHaHW", "B8kzmI7dKJj4WQdcJfFdTGu", "dSotW7DgzepcSSkfW5pdTCkmWQJcJq", "FSklWPRcGCoE", "k8kBWOZcGmky", "zv0EWR9J", "FmorW5ddH8oDW4yEaLVcImkNW7G", "CmogW7j1mCkBB1egWRWbWQ4", "WRK0uaddTCoprSkgWPvHWRy"];
  return qo = function() {
    return i;
  }, qo();
}
function aA(i, n) {
  i = i - (1877 * -5 + -1 * -9907 + -329);
  const t = qo();
  let e = t[i];
  if (aA.yxoTHK === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    aA.BEcojA = g, aA.FLfktL = {}, aA.yxoTHK = !0;
  }
  const o = t[-4 * 1889 + 1333 + 6223], r = i + o, a = aA.FLfktL[r];
  return a ? e = a : (aA.kdhHjy === void 0 && (aA.kdhHjy = !0), e = aA.BEcojA(e, n), aA.FLfktL[r] = e), e;
}
function eB({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = nA();
  function A(g, s, c, I, B) {
    return aA(s - 820, B);
  }
  const o = t !== void 0;
  Y(() => {
    async function g() {
      function s(B, E, x, Q, d) {
        return aA(E - -21, B);
      }
      function c(B, E, x, Q, d) {
        return aA(B - 352, d);
      }
      await n[s("i4r3", 179)](FI(i));
      function I(B, E, x, Q, d) {
        return aA(Q - -733, x);
      }
      e(n[c(564, 576, 565, 575, "yFgQ") + I(-534, -525, "i4r3", -529) + s("Q6l!", 185) + "t"]());
    }
    g();
  }, [n, i, e]);
  const r = {};
  r[a("&Fkv", 584, 580, 571, 576) + a("Dj2t", 580, 587, 597, 587)] = t;
  function a(g, s, c, I, B) {
    return aA(B - 371, g);
  }
  return r[A(1034, 1031, 1037, 1031, "iSOn") + "sh"] = o, r;
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return gA(c - -403, s);
  }
  function e(a, g, s, c, I) {
    return gA(s - 43, a);
  }
  const A = i();
  function o(a, g, s, c, I) {
    return gA(g - -394, s);
  }
  function r(a, g, s, c, I) {
    return gA(g - -51, c);
  }
  for (; ; )
    try {
      if (-parseInt(e("16]6", 323, 333, 332, 335)) / 1 + parseInt(e("lV5y", 342, 332, 344, 329)) / 2 + -parseInt(o(-94, -97, "ezF7", -92, -90)) / 3 + -parseInt(e("dB@0", 341, 345, 336, 358)) / 4 + -parseInt(t(-118, -114, "LUD4", -111, -100)) / 5 + parseInt(e("vBXp", 328, 326, 331, 322)) / 6 + parseInt(r(238, 233, 232, "]UOm", 234)) / 7 * (parseInt(o(-93, -94, "315g", -98, -95)) / 8) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Vo, -6 * 293 + -27 * -6882 + 44651);
function gA(i, n) {
  i = i - 283;
  const t = Vo();
  let e = t[i];
  if (gA.qOngXN === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    gA.oThIPE = g, gA.HDPIXW = {}, gA.qOngXN = !0;
  }
  const o = t[-5659 + -2 * 268 + 5 * 1239], r = i + o, a = gA.HDPIXW[r];
  return a ? e = a : (gA.DbhDJq === void 0 && (gA.DbhDJq = !0), e = gA.oThIPE(e, n), gA.HDPIXW[r] = e), e;
}
function tB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  const e = {};
  e[A("5!kG", 1051, 1053, 1060) + "le"] = t;
  function A(E, x, Q, d, f) {
    return gA(d - 773, E);
  }
  e[g(-215, -228, -224, "vBXp") + A("7lAu", 1066, 1081, 1069) + s(-662, "9F&I", -668) + g(-254, -244, -247, "Gchs")] = i;
  const { sunfish: o, crosshatch: r } = eB(e), a = hA(() => ({ sunfish: o, crosshatch: r, bramble: t }), [o, r, t]);
  function g(E, x, Q, d, f) {
    return gA(x - -532, d);
  }
  function s(E, x, Q, d, f) {
    return gA(Q - -966, x);
  }
  function c(E, x, Q, d, f) {
    return gA(f - -780, x);
  }
  const I = {};
  I[A("rFTI", 1092, 1072, 1080)] = a;
  function B(E, x, Q, d, f) {
    return gA(d - 714, x);
  }
  return I[B(1016, "Xkof", 1013, 1013) + c(-496, "WG[!", -478, -483, -489)] = n, w(_o[A("W&^W", 1070, 1075, 1078) + g(-226, -238, -229, "3Q$0")], I);
}
function Vo() {
  const i = ["WP3cGI4", "W5SPd8kCC3FdVSoKwmkbeZSC", "EWzzz8kK", "bSkWoConW6tcVmoLt3H/W5hcJwy", "W4SSBJtdVq", "BYjiBXy", "WPmylwm3W43dLGPk", "Ff/cMCkRW7LuagKsW4n0W7S", "c8ogvfZdI3izWQRcHH/dIIVdPa", "W5GzWQuFW6ddG2xcKaagEX4", "DqKeqCkk", "hXJdJ8oOWQq", "hIRdICkLWOldG8ovECob", "W4avWRFcG8ky", "jKTbemogW5HWDCk7WQtcTmkRnW", "WPJcGmoiW43cPSo6s8osW4CQW4uW", "D0pcHgjjWPdcVCotWRdcTCo/WQyQ", "W74ZmSoltCoPW4hcNCoMxmo0B8kg", "W6nvamk9EG", "WPXJCmkx", "W7nUESobsSo4ehJcRmoEW6rZ", "dWy4W5qOWRmnWPhcRmk+W5qz", "W7OcW6G", "gCoEWQFdUCksW7C4WRlcPmkHWOGxW6i", "phCfjSo5W6pcHSkcWQdcN8krsG"];
  return Vo = function() {
    return i;
  }, Vo();
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return JA(s - 840, I);
  }
  function e(g, s, c, I, B) {
    return JA(I - 892, B);
  }
  function A(g, s, c, I, B) {
    return JA(B - -367, s);
  }
  var o = i();
  function r(g, s, c, I, B) {
    return JA(s - -662, g);
  }
  for (; ; )
    try {
      var a = parseInt(A(81, "j%UP", 70, 79, 81)) / 1 * (parseInt(A(65, "[yuz", 64, 79, 67)) / 2) + -parseInt(e(1333, 1321, 1332, 1327, "CTeT")) / 3 + -parseInt(A(79, "#]A#", 81, 92, 83)) / 4 * (parseInt(A(67, "gvk8", 56, 54, 62)) / 5) + -parseInt(e(1333, 1323, 1327, 1322, "e%Ha")) / 6 * (parseInt(e(1346, 1340, 1342, 1341, "WQ&K")) / 7) + parseInt(A(62, "OzKb", 68, 55, 61)) / 8 * (-parseInt(A(66, "2]eM", 72, 81, 70)) / 9) + parseInt(r("rW&A", -229, -223, -218, -228)) / 10 + -parseInt(e(1343, 1338, 1333, 1334, "5(kQ")) / 11 * (-parseInt(t(1288, 1276, 1265, "2]eM", 1276)) / 12);
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Zo, -89 * 12534 + -879088 + 2627380);
function Zo() {
  var i = ["WO7dKexdTwXAWPmHWO/cGbDzWRK", "g2/dGmolWQ87dCkXWRxdJb/dJq", "afedW5eDWQZcV8k4WQ00WPPjnW", "rdD+WPyDAsZdLXjSqeT9", "shy+W6Pbe0K", "WRdcNmkVWRddTCoNWQzaW5roWRa", "W4GSWOBdOSocW5VdNmknW7ubW4FdQSoa", "WQFcKmkaWQKXffmTW5SsW5iK", "CfaWW4ldGmkSraRcOG", "ivXsrLLPWO4h", "dx3dLdTHzCo6Ba", "i33cUSkUWQyPW6fOw8oojeKi", "dx3cS1KMBSo2rCk6rCkB", "ytHuW79DW77dGJ4", "WRTZW6JcLM3dJNjSFtVcGW7dNq", "W71EWOpcJSkBWR9EyW", "WPC2W7FdQmoBeSoBWO7cKXpdNa", "WPpcNSoDcua9bSosW7u", "W5HfWQWvaCoszIZcLHVcTr4K", "cSkPD8kBWRdcHaNdKHtcJmkP", "WPRcLmo/WRm3FSoFbSkGnq", "WQhdTH/dLCo6AmoN", "kCkZW49vAuFdJZDDcG"];
  return Zo = function() {
    return i;
  }, Zo();
}
function JA(i, n) {
  i = i - (3161 + -1425 * 1 + -1308);
  var t = Zo(), e = t[i];
  if (JA.nGsdtv === void 0) {
    var A = function(s) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", B = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        B += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(s, c) {
      var I = [], B = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    JA.FtgXEY = o, JA.Fqlczu = {}, JA.nGsdtv = !0;
  }
  var r = t[7245 + -1 * 8431 + 1186], a = i + r, g = JA.Fqlczu[a];
  return g ? e = g : (JA.wpeDUx === void 0 && (JA.wpeDUx = !0), e = JA.FtgXEY(e, n), JA.Fqlczu[a] = e), e;
}
const zo = We(void 0);
zo.displayName = "TransactionCountingContext";
function YI() {
  const i = Qe(zo);
  if (i === void 0)
    throw new Error(`${zo.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const oB = -8597 + -734 * -4 + 1 * 7661;
class nB {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), oB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 9953 + -2 * 818 + 377 * -21 && a.status !== 897 + -298 * -29 + -9138 : !0;
  }
}
class TI {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = n, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.2";
  }
  async init(n) {
    if (this.#t = this.shouldCountTransactions(n), Sr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), kr()) {
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
  shouldCountTransactions(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] : n?.dotWeb?.features?.["realTimeTransactionReportingEnabled"] ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!this.#t || !this.#e) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = this.#n, e.id = this.#i, e.version = this.#r;
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = this.#a;
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + this.#o;
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return this.#e || !1;
  }
}
class iB extends TI {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const He = {};
He.FACE = "web-capture-face", He.DOCUMENT = "web-capture-document", He.MAGNIFEYE = "web-capture-magnifeye", He.SMILE = "web-capture-smile", He.PALM = "web-capture-palm", He.EYEGAZE = "web-capture-eyegaze";
const Ke = He, Ui = {};
Ui.LIVENESS = "liveness", Ui.CAPTURE = "capture";
const Re = Ui, rB = { [Ke.FACE]: Re.CAPTURE, [Ke.DOCUMENT]: Re.CAPTURE, [Ke.MAGNIFEYE]: Re.LIVENESS, [Ke.SMILE]: Re.LIVENESS, [Ke.PALM]: Re.CAPTURE, [Ke.EYEGAZE]: Re.LIVENESS }, aB = rB;
class gB {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = aB[e];
    switch (A) {
      case Re.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new TI(o);
      case Re.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new iB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function IB(i, n) {
  const { crosshatch: t, bramble: e } = eo(), [A, o] = nA(null);
  Y(() => {
    if (!t) return;
    (async () => {
      const g = new gB(), s = new nB(n), c = g.create({ hwids: e.getHwids(), tokenHandler: s, transactionType: i });
      await c.init(t), o(c);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function sB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = IB(t, n), A = hA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ w(zo.Provider, { value: A, children: i });
}
function cB({ children: i, value: n }) {
  const { crosshatch: t } = eo(), { transactionCounting: e } = YI(), A = t?.isValid && e?.isTransactionTokenValid ? Po.Higher : Po.Lower, o = hA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ w(Gn.Provider, { value: o, children: i });
}
class CB extends jA {
  static contextType = Gn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const n = new m("An unknown error has occurred");
    this.context?.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === CA.ERROR ? null : this.props.children;
  }
}
const BB = Ao.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, QB = Ao.div`
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
function EB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const xB = Pg(
  ({ detectionDetails: i, isImageMirror: n }, t) => EB() ? (console.log(i), /* @__PURE__ */ w(vA, { children: [
    /* @__PURE__ */ w(BB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(QB, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), Xo = We(void 0);
Xo.displayName = "AnalyticsContext";
function lB() {
  const i = Qe(Xo);
  if (i === void 0)
    throw new Error(`${Xo.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function dB({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function uB({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = dB(o);
  return Y(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), Y(() => {
    e && (Sr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function fB({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = eo(), { redfin: o } = $A(), r = uB({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), a = hA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ w(Xo.Provider, { value: a, children: t });
}
const Rr = We(void 0);
Rr.displayName = "ConfigurationContext";
function PI() {
  const i = Qe(Rr);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function hB({
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
    captureMode: e ?? vi.AUTO_CAPTURE,
    assetsDirectoryPath: FI(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function pB({
  children: i,
  configuration: n
}) {
  const t = hA(() => hB(n), [n]);
  return /* @__PURE__ */ w(Rr.Provider, { value: t, children: i });
}
const Na = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class Ee {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ee()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1049 + 4509 * 1 + -5558;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Na(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Na(n, t);
  }
}
function HI(i, n, t = yC) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  Ee.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function Ra(i, n) {
  Ee.getInstance().dispatchCustomEventOnChange(i, n);
}
function yB(i, n) {
  Ee.getInstance().dispatchCustomEventOnChange(i, n);
}
function mB(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  Ee.getInstance().dispatchCustomEventOnChange(i, e);
}
function wB(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  Ee.getInstance().dispatchCustomEventOnChange(i, o);
}
function DB(i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  Ee.getInstance().dispatchCustomEventOnChange(i, a);
}
const bB = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  Y(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, yB(i, A);
  }, [t, e, i]);
};
function kB(i, n) {
  Y(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const SB = (i) => i === hI.CONTROL ? !Nr() : !0;
function GB(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = $A(), [r, a] = nA(), g = hA(() => {
    const x = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? SB(i);
  }, [n, r, i, o]);
  function s() {
    t !== CA.LOADING && e(CA.RUNNING);
  }
  function c() {
    a(r === void 0 ? !g : !r);
  }
  async function I() {
    if (n) {
      e(CA.LOADING);
      try {
        await n.switchCamera(), e(CA.RUNNING);
      } catch (x) {
        if (x instanceof Error) {
          A(m.fromCameraError(x));
          return;
        }
      }
      a(void 0);
    }
  }
  function B(x) {
    switch (x.detail?.["instruction"]) {
      case Kn.CONTINUE_DETECTION:
        s();
        break;
      case Kn.TOGGLE_MIRROR:
        c();
        break;
      case Kn.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  kB(i, B);
  const E = {};
  return E.shouldCameraMirror = g, E;
}
function NB(i, n) {
  Y(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      mB(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function RB(i) {
  return be(Math.abs(i));
}
const vB = () => {
  const [i, n] = nA(null), t = qA(new Gr(-778 * -5 + -3 * 767 + -1584));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(RB(r));
    const a = be(Zt(t.current)), g = {};
    g.z = a, n(g);
  }
  Y(() => (window.addEventListener("devicemotion", PC(e, YC), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
};
var FB = /* @__PURE__ */ Symbol.for("preact-signals");
function Rn() {
  if (ve > 1)
    ve--;
  else {
    for (var i, n = !1; jt !== void 0; ) {
      var t = jt;
      for (jt = void 0, Yi++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && jI(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Yi = 5703 + -3557 * 2 + 1411, ve--, n) throw i;
  }
}
function MB(i) {
  if (ve > -6 * 811 + 4778 * -1 + 4822 * 2) return i();
  ve++;
  try {
    return i();
  } finally {
    Rn();
  }
}
var L = void 0;
function va(i) {
  var n = L;
  L = void 0;
  try {
    return i();
  } finally {
    L = n;
  }
}
var jt = void 0, ve = 0, Yi = -11871 + 9 * 1319, $o = 0;
function KI(i) {
  if (L !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== L)
      return n = { i: 0, S: i, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: n }, L.s !== void 0 && (L.s.n = n), L.s = n, i.n = n, 1954 + -2 * 961 & L.f && i.S(n), n;
    if (n.i === -1)
      return n.i = -3494 + -3 * -2848 + -5050, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = L.s, n.n = void 0, L.s.n = n, L.s = n), n;
  }
}
function EA(i, n) {
  this.v = i, this.i = 5812 + 1 * -5812, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
EA.prototype.brand = FB, EA.prototype.h = function() {
  return !0;
}, EA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : va(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, EA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && va(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, EA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", to(function() {
    var e = n.value, A = L;
    L = void 0;
    try {
      i(e);
    } finally {
      L = A;
    }
  }, t);
}, EA.prototype.valueOf = function() {
  return this.value;
}, EA.prototype.toString = function() {
  return this.value + "";
}, EA.prototype.toJSON = function() {
  return this.value;
}, EA.prototype.peek = function() {
  var i = L;
  L = void 0;
  try {
    return this.value;
  } finally {
    L = i;
  }
}, Object.defineProperty(EA.prototype, "value", { get: function() {
  var i = KI(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Yi > 1 * -1787 + 4696 + 2809 * -1) throw new Error("Cycle detected");
    this.v = i, this.i++, $o++, ve++;
    try {
      for (var n = this.t; void (-8495 * -1 + 3604 + 37 * -327) !== n; n = n.x) n.t.N();
    } finally {
      Rn();
    }
  }
} });
function _I(i, n) {
  return new EA(i, n);
}
function jI(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function qI(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function VI(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function _e(i, n) {
  EA.call(this, void 0), this.x = i, this.s = void 0, this.g = $o - 1, this.f = -677 * -6 + -8431 + 4373, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
_e.prototype = new EA(), _e.prototype.h = function() {
  if (this.f &= -3, 7936 + -2 * -2612 + -13159 & this.f) return !1;
  if (4979 * -1 + -803 + 9 * 646 == (2833 * -3 + 2 * 2974 + 2587 & this.f) || (this.f &= -5, this.g === $o)) return !0;
  if (this.g = $o, this.f |= -1741 * 3 + 5 * 1381 + -1681, this.i > -1 * -4569 + -538 + -4031 && !jI(this)) return this.f &= -2, !0;
  var i = L;
  try {
    qI(this), L = this;
    var n = this.x();
    (-3113 * -1 + 1 * -7583 + 4486 & this.f || this.v !== n || -1 * -9624 + -7874 + -1750 === this.i) && (this.v = n, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return L = i, VI(this), this.f &= -2, !0;
}, _e.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -8123 + -8159 * -1;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  EA.prototype.S.call(this, i);
}, _e.prototype.U = function(i) {
  if (this.t !== void 0 && (EA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, _e.prototype.N = function() {
  if (!(-5382 + -9238 * 1 + 2 * 7311 & this.f)) {
    this.f |= -453 + 459 * 1;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(_e.prototype, "value", { get: function() {
  if (-3881 * 1 + -3301 + -1 * -7183 & this.f) throw new Error("Cycle detected");
  var i = KI(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 485 * -3 + -2408 + 3879 & this.f) throw this.v;
  return this.v;
} });
function Fa(i, n) {
  return new _e(i, n);
}
function ZI(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    ve++;
    var t = L;
    L = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 8, vr(i), e;
    } finally {
      L = t, Rn();
    }
  }
}
function vr(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, ZI(i);
}
function WB(i) {
  if (L !== this) throw new Error("Out-of-order effect");
  VI(this), L = i, this.f &= -2, -7851 + -1 * 2375 + 602 * 17 & this.f && vr(this), Rn();
}
function Ct(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = -3 * 1187 + -5165 + 2 * 4379, this.name = n?.name;
}
Ct.prototype.c = function() {
  var i = this.S();
  try {
    if (8109 + -9323 * -1 + -17424 & this.f || void (12689 + -12689 * 1) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, Ct.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -2580 * 3 + -7351 + 15092, this.f &= -9, ZI(this), qI(this), ve++;
  var i = L;
  return L = this, WB.bind(this, i);
}, Ct.prototype.N = function() {
  !(554 + 3 * 653 + -2511 & this.f) && (this.f |= -8041 * 1 + -8534 + 16577, this.o = jt, jt = this);
}, Ct.prototype.d = function() {
  this.f |= 8, 14 * 283 + -8255 + 4294 & this.f || vr(this);
}, Ct.prototype.dispose = function() {
  this.d();
};
function to(i, n) {
  var t = new Ct(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var zI, Vn, Bo = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, XI = [];
to(function() {
  zI = this.N;
})();
function Et(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function Qo(i) {
  Vn && Vn(), Vn = i && i.S();
}
function $I(i) {
  var n = this, t = i.data, e = As(t);
  e.value = t;
  var A = hA(function() {
    for (var a = n, g = n.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= 2481 + 373 * 3 + -3596;
      break;
    }
    var s = Fa(function() {
      var E = e.value.value;
      return 6959 * -1 + 4510 + 2449 === E ? -7357 + 1 * -1571 + 8928 : E === !0 ? "" : E || "";
    }), c = Fa(function() {
      return !Array.isArray(s.value) && !dg(s.value);
    }), I = to(function() {
      if (this.N = es, c.value) {
        var E = s.value;
        a.__v && a.__v.__e && -2987 + -2282 * 2 + 3777 * 2 === a.__v.__e.nodeType && (a.__v.__e.data = E);
      }
    }), B = n.__$u.d;
    return n.__$u.d = function() {
      I(), B.call(this);
    }, [c, s];
  }, []), o = A[-1130 + 15 * -558 + 9500], r = A[10638 + 967 * -11];
  return o.value ? r.peek() : r.value;
}
$I.displayName = "ReactiveTextNode";
var Ti = {};
Ti.configurable = !0, Ti.value = void 0;
var Pi = {};
Pi.configurable = !0, Pi.value = $I;
var Hi = {};
Hi.configurable = !0, Hi.get = function() {
  var i = {};
  return i.data = this, i;
};
var Ki = {};
Ki.configurable = !0, Ki.value = 1;
var Ft = {};
Ft.constructor = Ti, Ft.type = Pi, Ft.props = Hi, Ft.__b = Ki, Object.defineProperties(EA.prototype, Ft), Et("__b", function(i, n) {
  if (Bo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof EA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), Et("__r", function(i, n) {
  if (Bo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== vA) {
    Qo();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return to(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 1, e.setState({});
      }, o;
    })())), Qo(t);
  }
  i(n);
}), Et("__e", function(i, n, t, e) {
  Bo && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Qo(), i(n, t, e);
}), Et("diffed", function(i, n) {
  Bo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Qo();
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
        var s = o[g], c = e[g];
        s === void 0 ? (s = LB(t, g, c, A), o[g] = s) : s.o(c, A);
      }
    }
  }
  i(n);
});
function LB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = _I(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: to(function() {
    this.N = es;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[-9214 + 1 * -7561 + 47 * 357] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
Et("unmount", function(i, n) {
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
}), Et("__h", function(i, n, t, e) {
  (e < -5169 + 3149 * -3 + -33 * -443 || -3056 + 1 * -1443 + 4508 === e) && (n.__$f |= -8297 + 4303 * 1 + 3996), i(n, t, e);
}), jA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 1 * 3781 + -9218 + 1 * 5441 & this.__$f) || 5 * -1357 + -2533 * 1 + 9319 & this.__$f) return !0;
  } else if (!(e || 7105 + -2 * 2712 + -1677 & this.__$f) || 11 * -754 + -229 + 294 * 29 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function As(i, n) {
  return nA(function() {
    return _I(i, n);
  })[-13 * 321 + 880 + 3293 * 1];
}
var OB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function JB() {
  MB(function() {
    for (var i; i = XI.shift(); ) zI.call(i);
  });
}
function es() {
  -3416 + 1 * 8257 + -4840 === XI.push(this) && (R.requestAnimationFrame || OB)(JB);
}
const An = We(void 0);
An.displayName = "CameraServiceContext";
function UB() {
  const i = Qe(An);
  if (i === void 0)
    throw new Error(`${An.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function ts() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Zn() {
  return (await ts()).filter((n) => n.kind === "videoinput");
}
function xt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function _i(i) {
  return i.getVideoTracks()[3473 + -404 * -1 + -3877];
}
function xA(i, n) {
  i = i - 388;
  const t = en();
  let e = t[i];
  if (xA.qsFwJn === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    xA.eMheLx = g, xA.wFjqVJ = {}, xA.qsFwJn = !0;
  }
  const o = t[-5355 + -1 * -2942 + 2413], r = i + o, a = xA.wFjqVJ[r];
  return a ? e = a : (xA.dVEPIA === void 0 && (xA.dVEPIA = !0), e = xA.eMheLx(e, n), xA.wFjqVJ[r] = e), e;
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return xA(I - 983, a);
  }
  function e(a, g, s, c, I) {
    return xA(s - 533, c);
  }
  function A(a, g, s, c, I) {
    return xA(a - 836, g);
  }
  function o(a, g, s, c, I) {
    return xA(g - -766, s);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(A(1227, "gA5y", 1206, 1235, 1232)) / 1 * (parseInt(o(-339, -341, "]PNn", -331, -333)) / 2) + -parseInt(A(1258, "ld@u", 1253, 1248, 1237)) / 3 + -parseInt(t("NbDI", 1376, 1380, 1403, 1393)) / 4 + parseInt(t("d@yq", 1378, 1383, 1389, 1380)) / 5 * (-parseInt(A(1239, "VIVo", 1223, 1244, 1231)) / 6) + parseInt(A(1252, "3Bxt", 1246, 1265, 1231)) / 7 + -parseInt(A(1264, "0lqJ", 1245, 1275, 1258)) / 8 * (-parseInt(o(-338, -355, "CjEY", -339, -340)) / 9) + parseInt(e(923, 942, 928, "drDs", 912)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(en, 658829 + -1 * -396269 + 60807 * -10);
function en() {
  const i = ["wmkfpmkVWRy", "W7S/WQ4Xbq", "WQZcImkcW4Sp", "WPWgWP3dVSk+", "qw0lW55L", "gYHBWQqXmmkWgCoGnCozBG", "WPbOWPxcQHm", "W546W68iW4O", "WQFdKCotumkAWOZcU8or", "W7FcJCoIDmkD", "W64TWR3dG8krW6NdPCkrW44KpJy", "vmktdJ3cL8k3W4FdLmkP", "W53cTKGvnq", "b8oxzmkXWRddOSkgWQJcNa", "W7njAL4", "W65FmSoNda", "z2FdS8oBE8omqCokWOrjW7G", "W4JdMSk2WRL+hrf1W6LwoSoCW5W", "W5lcIw01hG", "yCk+WOL5Bq", "W60JWRZdHSkxW6ZcLmoIW4q3panJWPS", "xsTWgbVcPSoq", "WPpcM8oQWRO0WQtdRCkLW4HzW7NdQ8oZ", "WRvSWR/cPdy", "W5tdLLWrWP80D8oBWP7cG8of", "yJ9FW4FdIq", "W6/dSfXunW", "bdZcHCongG", "WONcUvS7fLrO", "eCoqWQxdOq", "WOpdP1DrW6y", "itpcVW", "WPvHW7/dUtawBNmPW7Pw", "pSobWPldJCoN", "W57cTa0dWQDtbmoDrrv0auhdVG", "WQafnW7dPHHbjCkhW43dHCkWW4y", "dCosA8oXW7xdSmkAWOBcHCoDW7q", "WPe/WQnVFa", "wMuLyKFdSCkIDhRcGwvUzW", "qCkGza8r", "W7ldLCoEWPvlWRVdR8kLae8OWPBdPW", "W5iBW7VdHMrVW5ldTetcHsddT8kP"];
  return en = function() {
    return i;
  }, en();
}
function YB(i) {
  const n = new ArrayBuffer(i[t(749, "YOWc", 737) + "h"]);
  function t(a, g, s, c, I) {
    return xA(s - 332, g);
  }
  function e(a, g, s, c, I) {
    return xA(s - 712, c);
  }
  const A = new Uint8Array(n);
  for (let a = -398 * 3 + 6112 + -4918, g = i[e(1133, 1114, 1131, "4du@") + "h"]; a < g; a++)
    if (e(1116, 1130, 1113, "W88R") === e(1085, 1120, 1105, "VIVo")) {
      const s = new _0x5a85db(_0x98808c);
      return _0x46d090[r("NbDI", 518, 502, 502)](s[o(397, 415, "Nda(") + "e"](function(c, I) {
        function B(E, x, Q, d, f) {
          return r(x, x - 233, Q - 79, d - 741);
        }
        return c + _0x502dfc[B(1227, "J%Hn", 1248, 1248) + B(1245, "S0(C", 1246, 1254) + "de"](I);
      }, ""));
    } else A[a] = i[t(763, "F41f", 752) + r("KHqF", 532, 543, 534)](a);
  function o(a, g, s, c, I) {
    return xA(g - -9, s);
  }
  function r(a, g, s, c, I) {
    return xA(c - 113, a);
  }
  return n;
}
function H(i, n) {
  i = i - (6798 + -7769 * 1 + 1185);
  const t = tn();
  let e = t[i];
  if (H.cLnXWT === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    H.dKXpkN = g, H.KFAUnj = {}, H.cLnXWT = !0;
  }
  const o = t[0], r = i + o, a = H.KFAUnj[r];
  return a ? e = a : (H.WIuivL === void 0 && (H.WIuivL = !0), e = H.dKXpkN(e, n), H.KFAUnj[r] = e), e;
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return H(g - -141, B);
  }
  function e(g, s, c, I, B) {
    return H(B - 163, I);
  }
  function A(g, s, c, I, B) {
    return H(I - 71, s);
  }
  const o = i();
  function r(g, s, c, I, B) {
    return H(c - 865, B);
  }
  function a(g, s, c, I, B) {
    return H(B - -115, I);
  }
  for (; ; )
    try {
      if (parseInt(e(407, 387, 382, "69*w", 404)) / 1 * (-parseInt(a(111, 129, 98, "BF$R", 105)) / 2) + parseInt(e(352, 357, 401, "1A2*", 380)) / 3 + parseInt(e(439, 422, 390, "BF$R", 412)) / 4 * (parseInt(e(445, 413, 411, "vYQP", 419)) / 5) + -parseInt(t(117, 111, 96, 139, "SHU0")) / 6 + parseInt(a(110, 102, 111, "Grvf", 116)) / 7 * (-parseInt(A(341, "H@*b", 346, 323, 348)) / 8) + parseInt(r(1052, 1069, 1084, 1116, "f4El")) / 9 * (-parseInt(A(375, "ItPS", 348, 342, 321)) / 10) + -parseInt(r(1101, 1135, 1120, 1117, "Eh)7")) / 11 * (-parseInt(a(136, 132, 115, "5vaQ", 128)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(tn, -1357073 + 14 * 150987);
function tn() {
  const i = ["WQ1otaBcQq", "W73cOgPXgW", "ch7dRWzQiePBsG", "WR18W74", "W7LsWQFdMSo6zCoRWRGiWQ3cPwi", "W7LCWQJdM8o5c8obWQyVWQtcNG", "omoBW53dPSoY", "W4HjW7FdQuu", "hZa/W5HpWOiK", "W4GNWODnfq", "W4BcMdL5", "W6COW5pdPCosW4bfWPG", "WONdH8k4W5ZcGdJcMfRcISoUWPa", "vCoiWOxcTXeoW64zmSoM", "W4hdKSo0WQPgW7Peg8o3W7G1smk3fa", "W6CSBCo8WRO", "maPq", "W5NcGSo4WPtdGW", "lG5jW43cVG", "WQS1xSo+W7C", "a8k7omkpWO7cUSk5WO7dIIZcU8oh", "W6VcU2TQeW", "tGiIlG", "CvirWPpdVSkRrSo7dwWxdG", "wSokWOFcThj9W5S6eCoSfYC", "W7K8Fmo7WRC", "WR9pmCkxrgPzeG", "W7O2wCoFW4jpWQ4", "WR4GW7tcMG", "xgSKWQVdVCoeu8o1rNy0hmkh", "EeldPCoBDq", "W68NFCo9WQi", "WPNdIMDPWRtcN8knWPRcHG", "zmorqSoyx8oxjCoUWOtcOG", "zCkMgG", "vSkfW4hcVa", "mCkua8kEEW", "WQRcOCoNyXVcOSooiIPBquRcHCoz", "W4PpW6hdUW", "W7RcNM18", "WQLzwXpcRW", "W7ZcOSoNqG", "f1D6E0lcMhtdQ8otW6G", "dmkDW53dOG", "W4jwW77dTKm", "nKxdGfRcQG", "dZz8W7i", "W7NcKcZcU10", "WPRdJguRW6pdI8o1WONcOe4wrCoE", "wCkvW4hcS8k/", "W6hcTSoOu8ox", "W4WRWPjPaG", "WRy8cCkICxDV", "WPKoWR/cRGuRW5izBCkfW7vXFG", "xSoJBmooW4e", "aWXvtgFdTSoOh33cMq", "a8opy8oLW4ldT8kq", "WOfJWQddHGq", "w11mWOnt", "W63cGdRcNva", "WOqLkq", "WQHowHS", "WRn3W6tdU8oK", "AexdVSoFBq", "h2jVWR4WW7zwmmkZW5KcySoZ"];
  return tn = function() {
    return i;
  }, tn();
}
async function TB() {
  function i(s, c, I, B, E) {
    return H(B - 454, c);
  }
  const n = {};
  n[r("ItPS", 962, 970, 946)] = kI;
  function t(s, c, I, B, E) {
    return H(I - 724, s);
  }
  n[i(730, "H@*b", 727, 701) + "h"] = 256;
  const e = await window[g(979, "X4up", 985) + "o"][g(984, "h#pr", 994) + "e"][t("nApA", 1002, 993) + r("W&DS", 925, 910, 910) + "y"](n, !0, [r("[H#O", 932, 980, 955) + "pt", t("vYQP", 956, 972) + "pt"]), A = Uint8Array[g(999, "nApA", 989)](Array(16)[i(719, "SHU0", 719, 729)](0)), o = window[g(1013, "2XGn", 1029) + "o"][t("[izj", 955, 947) + g(1073, "NNXi", 1042) + i(686, "9kZR", 682, 676)](A);
  function r(s, c, I, B, E) {
    return H(B - 695, s);
  }
  const a = {};
  a[i(670, "WOPk", 679, 686)] = e;
  function g(s, c, I, B, E) {
    return H(I - 764, c);
  }
  return a.iv = o, a;
}
async function PB(i) {
  const { iv: n, key: t } = await TB(), e = new Uint8Array(i), A = {};
  A[B(-221, -237, -256, "p[t7")] = kI, A.iv = n;
  const o = await window[I("%Opw", -494, -508, -498, -509) + "o"][I("[izj", -446, -456, -453, -460) + "e"][g(-450, "Vy!e", -500, -486, -477) + "pt"](A, t, e), r = await window[s("69*w", -780, -748) + "o"][c(-390, -370, -365, -392, "EyLv") + "e"][B(-283, -271, -242, "W&DS") + B(-247, -241, -244, "h#pr")](B(-243, -264, -235, "H@*b"), t), a = {};
  function g(E, x, Q, d, f) {
    return H(f - -712, x);
  }
  function s(E, x, Q, d, f) {
    return H(Q - -994, E);
  }
  function c(E, x, Q, d, f) {
    return H(x - -584, f);
  }
  a[I("[H#O", -499, -481, -472, -492) + "ge"] = o;
  function I(E, x, Q, d, f) {
    return H(f - -736, E);
  }
  a[c(-309, -321, -331, -344, "63*(")] = r;
  function B(E, x, Q, d, f) {
    return H(x - -509, d);
  }
  return a.iv = n, a;
}
async function HB(i) {
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return eA(g - 639, c);
  }
  function e(g, s, c, I, B) {
    return eA(s - 67, I);
  }
  function A(g, s, c, I, B) {
    return eA(B - -964, I);
  }
  const o = i();
  function r(g, s, c, I, B) {
    return eA(c - 149, I);
  }
  function a(g, s, c, I, B) {
    return eA(s - 76, I);
  }
  for (; ; )
    try {
      if (-parseInt(a(526, 510, 547, "3@sd", 554)) / 1 * (parseInt(r(508, 532, 512, "siiQ", 530)) / 2) + parseInt(t(1033, 1029, "h5!q", 995, 1018)) / 3 + parseInt(t(1047, 996, "6YYg", 1089, 1094)) / 4 * (-parseInt(A(-519, -542, -494, "ufVf", -525)) / 5) + parseInt(e(457, 496, 487, ")!mr", 459)) / 6 + parseInt(r(569, 565, 565, "4SVG", 553)) / 7 * (parseInt(t(1e3, 1039, "GhKL", 1050, 1002)) / 8) + parseInt(a(526, 528, 517, "S0(%", 512)) / 9 * (-parseInt(r(556, 524, 522, "4DS2", 485)) / 10) + parseInt(a(415, 466, 478, "Go7v", 492)) / 11 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(on, 1351 * -28 + 45416 + 92978);
const os = -7663 + 1 * -4889 + 15052, Ma = 1397 * -7 + 633 + 6323 * 2, ns = -9644 + -687 * -2 + 8272, is = 0 + 0.5;
function oA(i, n, t, e, A) {
  return eA(e - -474, t);
}
const rs = {};
rs[pA(-190, -256, -222, -268, "CCM7")] = 1280;
const as = {};
as[pA(-276, -290, -247, -254, "dgP^")] = 720;
const gs = {};
gs[oA(-48, -128, "h5!q", -81)] = 60;
const Go = {};
Go[cA(-193, -184, "U9&q", -181)] = rs, Go[bA(678, 721, "vkh(") + "t"] = as, Go[pA(-187, -182, -216, -173, "m7Mt") + oA(-58, -56, "Jav(", -94)] = gs;
const Is = {};
Is[pA(-225, -235, -266, -268, "Mh$[")] = 1920;
const ss = {};
ss[bA(693, 682, "!On]")] = 1080;
const No = {};
No[pA(-269, -299, -301, -280, "U9&q")] = Is, No[bA(684, 668, "ufVf") + "t"] = ss, No[bA(673, 685, "YAVZ") + oA(-53, -8, "YAVZ", -30)] = 30;
const cs = {};
cs[pA(-288, -314, -312, -295, ")!mr")] = 1;
const Cs = {};
function eA(i, n) {
  i = i - (-8570 + -2 * -4463);
  const t = on();
  let e = t[i];
  if (eA.PGvKaE === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    eA.OslYsa = g, eA.EkqWEj = {}, eA.PGvKaE = !0;
  }
  const o = t[-7 * -307 + -2447 * -4 + -3979 * 3], r = i + o, a = eA.EkqWEj[r];
  return a ? e = a : (eA.oakjHJ === void 0 && (eA.oakjHJ = !0), e = eA.OslYsa(e, n), eA.EkqWEj[r] = e), e;
}
Cs[UA("%oD8", -218, -275, -248, -268)] = 1;
const Bs = {};
function on() {
  const i = ["iCoIW5/dGmom", "W6DlqCosWPG", "WPrwWRr0xa", "WR7cV29UWP8YfSkcemk8yei2", "b8ojAqhcJSkcWOnZWQ13W5uSW5m", "W4PhW6DlWPO", "suBcRqtcUG", "W4dcOCkXW74", "W4KiW5HAW6C", "lHNdG8kSWQ7dG8kIWQ/cGq", "rLdcQqJcSW", "W54fW5D9W6y", "reldPc0t", "vvNdOtqE", "WOj7EdLOtZhcNW", "W71EpKu", "dSo2W6pcVmkihgvfbCopnmoE", "bSowWOZcUGm", "W4pdKCoBWQny", "b8ocWOtcNIG", "DKRcGSkH", "cvfSWRhcTW", "WOpdOceqWRC", "CCkUWOFcKmknWRxcJSofgCovW4zc", "WOdcHSo5oNG", "CSkGhG3cSa", "WRxdNCoRtSoeWRRdTCkD", "W57dHmoo", "WR7cUHeAW65KF8kd", "vu3dHJGy", "W50CW4vQ", "WQDSWOOtsa", "WPhdHCo/WP0", "W7e4EMW", "W4hcOmkS", "ymkAySkKga", "E8knvCk4", "W5rsnK4", "W73dUtiCW4C", "v2KZWRxdOW", "cCoqW7y", "WOf9bKGzBXlcO8k7emky", "DCkQWO7cLCknWRxcUSozaCo/W7PP", "iCosgmo6rmoEh8ohu8kMcSkkva", "CvRcHCkYWOm", "WQ3dP8o+WOZdGa", "W4jgofRdJa", "WPyoAq/cJrOWmSo/W4/dTdy", "W482Eq", "d05XW7rb", "w07dQt4t", "hv90W6nD", "D8kBqmkOaG", "WRZdQ0XrhG", "WOVcTu3cPHC", "oCkuWQVcHw7cI8kwW4zMW4TG", "WQWSisat", "W7jBkfar", "W4BcMKLKW74", "WONcJKZcH8kq", "ACkXmX/cQG", "WOFcVSkfW6JdS8o3WQDyzW", "WP4RmYaY", "q8ofW5hcU2VdMK/cLSkeECoiWRi", "WQRdGmoUWPNdGW", "W5FdRmosW7xdOG", "W7hdJHTT", "qSocW57cVgNdKcZcTmkpx8oMWRhdQW", "C8k1lHhcRq", "WOxcHmkeW7u+W4yXhmkKySorWQu", "WODbWPJcRmoj", "uLJdTa", "W6xcJSoNzSoU", "u37dMCksW6S", "zmkBlLC", "W4jxW6TfWPG", "WQn2WOqcsa", "dw3cJMtdHW", "AKVcQmkGWPK", "W7/dVJuWW4S", "W6LEovGs", "cmoXgW", "WO1fWOqNWQOIkuNcJCoQWOy", "f8kvWQhdRdG", "FSkmvG", "qeFdRY4", "W7C+WOikEwKBW6a", "wmo1dthdQGjF", "qf/dSJGs", "WPlcQhy6", "u2VdJCkwW4q", "uCkHWQ3dNSoD", "arVcS29oWO7dKCo7BCouDa", "iSo7W5ldJ8oA", "W7BdKXTScW", "DCk7ka", "W57dQ8ouW6ddVG", "y3OMWR0", "W5ZcUmkWW70", "W7zEnwuy", "rZ7cGSoSW5C"];
  return on = function() {
    return i;
  }, on();
}
Bs[cA(-195, -119, "Go7v", -151)] = 1;
function cA(i, n, t, e, A) {
  return eA(e - -550, t);
}
const nn = {};
nn[pA(-318, -322, -311, -355, "ufVf")] = cs, nn[UA("6YYg", -209, -240, -206, -223) + "t"] = Cs;
function UA(i, n, t, e, A) {
  return eA(A - -666, i);
}
nn[bA(737, 779, "lXZB") + oA(-7, -7, "S0(%", -53)] = Bs;
const Qs = {};
Qs[bA(709, 718, "byrM")] = 1;
const Es = {};
Es[cA(-144, -210, "m7Mt", -193)] = 1;
const xs = {};
xs[bA(698, 686, "kCg9")] = 1;
const Ro = {};
Ro[pA(-268, -308, -274, -264, "%oD8")] = Qs, Ro[cA(-148, -116, "cQ[z", -143) + "t"] = Es, Ro[UA("ufVf", -297, -273, -285, -306) + pA(-329, -337, -291, -243, "kCg9")] = xs;
const Jt = {};
Jt[cA(-142, -230, "Mh$[", -188)] = Go, Jt[oA(-54, -4, "Ooqq", -37) + pA(-191, -253, -242, -272, "3@sd")] = No, Jt[pA(-240, -334, -286, -279, "h5!q")] = nn, Jt[pA(-313, -337, -305, -305, "4SVG") + oA(-73, -49, "Jav(", -79)] = Ro;
const rn = Jt;
function pA(i, n, t, e, A) {
  return eA(t - -670, A);
}
const Xe = {};
Xe[UA("siiQ", -237, -185, -274, -228) + oA(-85, -54, "cQ[z", -102) + cA(-155, -171, "0p!&", -182)] = os, Xe[UA("OvIf", -252, -219, -217, -240) + cA(-171, -158, "l%*Q", -149) + oA(-47, -94, "Ooqq", -54) + bA(661, 625, "4SVG")] = rn[cA(-86, -156, "x^kS", -114)];
function bA(i, n, t, e, A) {
  return eA(i - 287, t);
}
Xe[UA("^sVN", -217, -183, -233, -219) + oA(-59, -27, "4DS2", -55) + bA(728, 714, "dfpp") + UA("Go7v", -308, -308, -325, -283)] = rn[oA(-126, -127, "wdmS", -108) + pA(-228, -284, -252, -254, "ufVf")], Xe[oA(-102, -151, "wdmS", -110) + oA(-39, -44, "tL[D", -19)] = ns, Xe[oA(-151, -133, "[UZQ", -103) + UA("Mh$[", -192, -279, -271, -239) + cA(-109, -157, "kCg9", -158) + cA(-155, -125, "*tE$", -120) + oA(-22, -13, "cQ[z", -32)] = is, Xe[pA(-282, -298, -258, -246, "6YYg") + UA("ATur", -189, -176, -181, -217) + "Ms"] = os;
const je = {};
je[cA(-84, -150, "Mh$[", -104) + bA(712, 688, "vkh(") + bA(740, 758, "byrM")] = Ma, je[cA(-96, -104, "pLJb", -145) + oA(-91, -70, "Go7v", -92) + cA(-64, -100, "ufVf", -115) + pA(-327, -296, -289, -267, "tL[D")] = rn[cA(-80, -143, "ufVf", -118)], je[UA("CCM7", -242, -273, -260, -226) + bA(704, 655, "d77L") + UA("XNK&", -264, -284, -223, -266) + cA(-145, -142, "dfpp", -137)] = rn[oA(-29, -67, "!mKh", -71) + cA(-164, -136, "Go7v", -119)], je[pA(-295, -332, -285, -240, "OvIf") + UA("vkh(", -326, -256, -319, -299)] = ns, je[oA(-60, -65, ")!mr", -18) + oA(-38, -88, "cQ[z", -59) + bA(711, 706, "bWO]") + oA(-136, -95, "ufVf", -98) + cA(-113, -161, "yO$b", -163)] = is, je[cA(-191, -122, "dgP^", -172) + bA(696, 720, "!mKh") + "Ms"] = Ma;
const ji = {};
ji[bA(664, 713, ")!mr")] = Xe, ji[UA("tL[D", -240, -251, -230, -221)] = je;
const KB = ji;
function te(i, n, t, e, A) {
  return IA(A - 698, i);
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return IA(c - 110, g);
  }
  function e(a, g, s, c, I) {
    return IA(g - 86, a);
  }
  const A = i();
  function o(a, g, s, c, I) {
    return IA(s - 782, a);
  }
  function r(a, g, s, c, I) {
    return IA(c - 856, s);
  }
  for (; ; )
    try {
      if (parseInt(r(1236, 1166, "hoIy", 1229, 1238)) / 1 + -parseInt(r(1127, 1203, "!]ty", 1118, 1066)) / 2 + parseInt(r(1107, 1017, "OaDy", 1051, 1115)) / 3 + parseInt(t(384, "DFNF", 310, 404, 409)) / 4 + parseInt(t(396, "vU[I", 246, 315, 249)) / 5 + -parseInt(e("p2vK", 386, 477, 420, 446)) / 6 + -parseInt(e("dCD]", 430, 450, 427, 388)) / 7 * (-parseInt(o("j88*", 1140, 1107, 1184, 1024)) / 8) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(an, 6 * -12073 + -46 * 5239 + 560093);
function $(i, n, t, e, A) {
  return IA(n - 651, e);
}
function oe(i, n, t, e, A) {
  return IA(A - 304, t);
}
function IA(i, n) {
  i = i - (8029 + -5 * 863 + -587 * 6);
  const t = an();
  let e = t[i];
  if (IA.UAQFTZ === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    IA.jsFztb = g, IA.DQWKHg = {}, IA.UAQFTZ = !0;
  }
  const o = t[0], r = i + o, a = IA.DQWKHg[r];
  return a ? e = a : (IA.tqwvsz === void 0 && (IA.tqwvsz = !0), e = IA.jsFztb(e, n), IA.DQWKHg[r] = e), e;
}
function ne(i, n, t, e, A) {
  return IA(e - 178, A);
}
function PA(i, n, t, e, A) {
  return IA(n - 708, e);
}
function an() {
  const i = ["WQeIbwtcNG", "WO/dQGddOmk/W4fiD8oM", "CSkybSkuW4FdNSklWPZcKevMW48a", "iMldTmk7sW", "jmoEWO9UCG", "WQddTKpdTSk0", "ahBcOwGI", "ECoAW7HIWO8", "mmk0BMqM", "nmkUDvup", "sCoTW5mzW50", "nqBcPSoOaq", "WPaNtdpdMq", "WPbCkCo6tG", "tmobW60AW7O", "zCoiW7PtWQm", "W4ddR8k8wSkX", "mmopW6bSW5m", "A0yzWRVdVG", "mCo8W4mneq", "zSo5msDwWR7dUcP+WPGkzW", "A3n1bSoG", "b8oEWPDQCG", "WPtdHSoPW64L", "p8ouW7G", "lgldVmkZtq", "WP8WWRBdKCkF", "kI0Hbmod", "WP1niSoEwW", "WOxcU8oTbCoQW7RdIGlcKLajW6K", "CCkAWOFdUwi", "WPZdLmkcb8oxwKldRhNcPCknCW", "W5hdRCkZr8kM", "dmoKW6yBaW", "k8o8WPf+ua", "beWtjSo3W49+qmo6WOtcQmkHkq", "ixpdVCkMCq", "zCoiW7PuWQ8", "bSoyWPbNCG", "BwDYoCo6", "WOqGEYddKq", "rN1uj8ox", "jqxcP8oS", "a8ozWO10tG", "W4qVzxZcMW", "WPSYtH7dNW", "oSoem8k1W4y", "tCoNW48", "WO1NWQy7W6i", "W53dRmkU", "ESosDq", "W5tdRCkVCCkZ", "W5y+FK3cVa", "WRGWuZ/dMq", "mComxSojWOu", "kSogjCk7W4a", "WQxcO8kztSoo", "mfFdKdBdNG", "nmk2yhOB", "mmognCkEW5e", "d8ooDSoRW5/dGCoVWPvL", "WOfOWRlcQKK", "WQCIbwBcMq", "BxfZbmoG", "WPPXWQNcGh4", "WR/cPmoTrdG", "W7pcMIy", "W6y0zh3cPW", "WQxcO8odqcK", "lJKVgSoc", "WRNcP8owDJG", "WRpcPCoqxs8", "W5/dJ8kGWPhcMG", "WPeUWQBdUCkF", "WPu0xYJdMW", "W6ZcMKCVWOq", "rrTJB8kQ", "pmkLC3CR", "WPrVWRNcQh4", "e8k+WPfhW5/dM0SEWPSy", "DCkgWPhdUNu", "iSoXW4GpbW", "e3NcRgOZ", "WPxcUmomqsK", "W4ddO8k0wSkM", "DN1Y", "jCoyBr5T", "W5FdPSkyrSkG", "i8oAW6zWW68", "WQlcSSoquYK", "WRquWQBdM8kT", "bN3cSuCM", "EMr9bSoM", "W7xcHtWDW7q", "jGZcUSo9gG", "xmoTDxFcHa", "WO7cTCkgqCoF", "W4ZdP8kyWQJcQG", "ymkLW6LImq", "W6JcLce3W6u", "urXuFmkI", "W4q9FMVcOq", "W6bYW5qm", "iJ4Yd8ot", "WOrVcmopyq", "W4FdGCkPyJ0", "hK/dO8k2", "W4VcH8oWrSkw", "uY/dSJD0AGzUjmkUga8", "W5FdIKD+W4G", "WQJdQ2JdRmk0", "W5FcTuBdLa", "hmozl8kPW4a", "DCkCWPRdPfG", "tmkqmCocW6K", "BCoNWQChca", "i2JdVmkNtq", "wSkknSonW7K", "ySokW5CYW7y", "imocwCouWOu", "W7RcSJVcUmoIW5pcNmkfzmoaWRCR", "y8oDANRcSW", "rWXmqCkK", "kIKYb8oe", "mSkVB2uA", "W4/cSWdcSfC", "W7/dP8k5xCkZ", "i1tdLIRdNG", "W53dSSkPCmk3", "cwhdUSkSxW", "D2n4xSkoW6/cMCkEyHWtW6a", "FvKFWRNdQG", "i8kHAhGA", "W4q2BW", "WPxdKCozW5SH", "W5FdRmkPrSk7", "z8kpWQFdKfe", "WQRdQMldS8kL", "g8oZW64zaG", "W6VcMCkcACos", "WORdLGX8W5ZdM8o+WP7cIX4CW6e", "WP1JmJJdQ3JcS3K7WODSWRG", "lCoDWPy", "W43cTXVcUeW", "WRpdGmkpfCkW", "W5/cGZeSW7O", "oZ4YcCoc", "W4BdO8k0wmkH", "WPe0wZBdJW", "WOzMWO/cGLO", "BmkbDSoIWOCtwt3cGYtcLqy", "WRiTcgBcJW", "p8kVDG", "WQJdSwpdSSkz", "jCojW653W7u", "icS0lmot", "WQaMgeFcHq", "ESo0WRWgdG", "W6/cUmkwCCoE", "WQFdRbJcK10", "w8kjjCoaW7G", "WODGWRtcQM8", "xhSAWPVdIa", "W4RcNLeRWPe", "g8omW6S", "WQtdOh7dOq", "jSowW4G", "DCkYW6v8iW", "WOldImkulCk0", "yv/dUmkIeMRdN8kZWQtdUq", "WRFcUCogxJG", "WRxcUmomqsK", "c3xdOmkQ", "WPpdJSoR", "W5FdJCkTqmk7", "ESoGWRS8hW", "pSoajmkOW5u", "yCoDB2pcOq", "gSoWW6qUjG", "cw3dSSkSsa", "W4VdMfPIW50", "iJ4YcCo4", "WQT+WQKKW6m", "c8osCqP8", "WRWZge7cJW", "tCklfSojW64", "W7jHW4yrnq", "DSkNWPvvw8k8cSoGWRddTmkUW4e", "W57cMLO4WQ0", "W6/cGCkhACoc"];
  return an = function() {
    return i;
  }, an();
}
class _B {
  #A;
  [$(943, 942, 919, "doRx") + oe(553, 457, "DFNF", 476, 526)] = [];
  [oe(583, 532, "g8Tj", 452, 510) + oe(489, 464, "OaDy", 592, 532) + te("doRx", 969, 1083, 947, 1036) + "r"];
  [$(903, 863, 880, "OaDy") + $(896, 949, 952, "b6mH") + "s"] = {};
  constructor(n, t = {}) {
    function e(a, g, s, c, I) {
      return te(s, g - 215, s - 397, c - 14, c - -1526);
    }
    this[e(-512, -638, ")*Lr", -605) + e(-418, -530, "O@LJ", -458) + o(603, 620, "OaDy", 673, 685) + "r"] = n;
    function A(a, g, s, c, I) {
      return ne(a - 495, g - 401, s - 186, g - 285, c);
    }
    function o(a, g, s, c, I) {
      return PA(a - 121, I - -398, s - 404, s);
    }
    function r(a, g, s, c, I) {
      return te(a, g - 88, s - 134, c - 27, I - -711);
    }
    this.#A = KB, this[o(680, 656, "YElA", 549, 630) + r("DFNF", 250, 305, 256, 236) + A(721, 778, 842, "l#zG")](t);
  }
  async [PA(1004, 942, 1024, "MLHV") + $(1023, 929, 1015, "i1eI") + PA(912, 948, 968, "OaDy")]() {
    if (!_t())
      if (t("o[pk", -251, -433, -374, -342) !== a(1003, 1080, 1057, "GxHI")) ({ deviceId: _0x1e4d19 } = _0x1ef35a);
      else return;
    const n = await this[a(1077, 1102, 1126, "0wFL") + "st"](this.#A[a(1229, 1248, 1213, "dvby")]);
    function t(c, I, B, E, x) {
      return oe(c - 466, I - 72, c, E - 136, x - -870);
    }
    const e = await this[g(36, 88, 68, 99, "p2vK") + "st"](this.#A[a(1244, 1178, 1153, "aZ2a")]);
    function A(c, I, B, E, x) {
      return $(c - 372, B - -507, B - 18, I);
    }
    const o = {};
    function r(c, I, B, E, x) {
      return ne(c - 172, I - 462, B - 170, B - -139, E);
    }
    function a(c, I, B, E, x) {
      return ne(c - 27, I - 114, B - 98, B - 668, E);
    }
    o[a(1231, 1294, 1212, "yIoP") + r(228, 178, 256, "y]sM")] = n[t(")*Lr", -317, -205, -263, -227) + "ge"];
    function g(c, I, B, E, x) {
      return ne(c - 393, I - 111, B - 186, c - -339, x);
    }
    o[a(1087, 1187, 1114, "U]Po") + A(492, "Op!B", 515)] = e[g(202, 162, 211, 216, "tYXw") + "ge"];
    const s = o;
    this[a(1031, 965, 1049, "DFNF") + a(1140, 1111, 1098, "l#zG")][t("Op!B", -326, -320, -227, -319)](s);
  }
  async [$(911, 901, 986, "Ss&T") + "st"](n) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: a } = n;
    let g = -3889 * -2 + 3207 + 10985 * -1, s = r;
    function c(p, y, b, k, D) {
      return $(p - 461, D - -212, b - 121, p);
    }
    function I(p, y, b, k, D) {
      return ne(p - 219, y - 102, b - 167, p - 541, k);
    }
    let B, E = this[x(468, 554, 484, 628, "b6mH") + x(624, 650, 601, 619, "yIoP") + f(-34, -89, -114, -28, "GxHI") + "r"][x(677, 692, 667, 646, "Zyqk") + f(-232, -176, -153, -170, "Zyqk") + x(560, 543, 548, 529, "3dql") + "s"](this[I(995, 943, 1045, "aZ2a") + x(614, 694, 734, 781, "#PGE") + "s"], o);
    for (let p = 10460 + 5 * -2092; p < r; p++)
      if (f(-42, -113, -128, -197, "]c)q") === c("y]sM", 728, 625, 649, 708)) {
        if (g > A * a)
          if (I(1088, 1074, 1e3, "i1eI") !== I(1037, 1022, 1036, ")*Lr")) {
            s = p;
            break;
          } else _0x4b9223[x(760, 675, 746, 757, "vU[I")]();
        const y = await this[x(635, 643, 728, 635, "0wFL") + h("[]2s", 1036, 976, 1053, 1004) + h("vU[I", 847, 915, 1022, 937) + c("dCD]", 668, 672, 708, 751)](E, t);
        if (y[I(1014, 997, 980, "GxHI")] && (f(-69, -93, -31, -177, "p2vK") !== h(")*Lr", 1081, 937, 961, 1021) ? this[x(762, 698, 724, 706, "OvKd") + f(17, -56, 32, -57, "GxHI") + f(-91, -88, 7, -92, "!]ty") + "r"][h("OaDy", 992, 1051, 1080, 986) + c("OvKd", 808, 683, 778, 767) + c("#PGE", 679, 675, 734, 668) + h("DFNF", 1009, 1163, 985, 1068) + "or"](_0x16c36a[f(-94, -123, -202, -68, "YElA")]) && (_0x3e9b29 = this[h("OvKd", 1006, 1084, 1130, 1073) + c("U]Po", 666, 647, 748, 740) + x(599, 612, 633, 653, "hoIy") + "r"][c("dCD]", 769, 713, 696, 714) + h("kE]&", 996, 1044, 912, 973) + f(-222, -216, -150, -173, "4&)4") + "s"](this[h("6jpI", 977, 994, 926, 962) + x(634, 606, 519, 661, "FHxm") + "s"], _0x322fdf), _0x494ad7--) : this[I(983, 975, 891, "B3S5") + h("BwK7", 920, 919, 911, 979) + I(1062, 1069, 1105, "o[pk") + "r"][x(688, 671, 731, 584, "6jpI") + x(631, 625, 551, 555, "!]ty") + c("dvby", 768, 722, 760, 700) + h("yWNU", 1120, 1084, 1083, 1088) + "or"](y[f(-8, -54, -83, -50, "Ss&T")]) && (x(559, 647, 572, 615, "OvKd") !== f(-95, -181, -146, -219, "!]ty") ? (_0x56d47a = this[I(1042, 987, 1002, "A6J2") + x(690, 649, 704, 677, "y]sM") + h("B3S5", 934, 903, 911, 930) + "r"][c("9iat", 809, 756, 773, 718) + c("yIoP", 743, 797, 841, 771) + c("Op!B", 603, 730, 595, 643) + "s"](this[x(635, 638, 639, 632, "DFNF") + x(675, 596, 594, 546, "%VUd") + "s"], _0x40b10c), _0x32e6d5--) : (E = this[x(711, 654, 667, 563, "kE]&") + I(1020, 1095, 1046, "U]Po") + h("6jpI", 949, 913, 979, 961) + "r"][I(1080, 1156, 1167, "]c)q") + I(1067, 1147, 1121, "6jpI") + h("hoIy", 1107, 1096, 1127, 1063) + "s"](this[h("DFNF", 965, 1016, 1074, 1013) + c("Tncf", 792, 783, 766, 803) + "s"], e), p--))), y[c("p2vK", 743, 747, 886, 804) + I(958, 890, 869, "b6mH")])
          if (I(938, 871, 1032, "UazF") === h("Tncf", 867, 906, 850, 936)) {
            const b = {};
            return b[h("vU[I", 959, 933, 852, 946) + h("UazF", 1012, 876, 1005, 959)] = this[I(1054, 1086, 1057, "6jpI") + h("OvKd", 964, 1097, 1003, 1002)], b[I(1078, 1079, 984, "aZ2a") + f(-135, -180, -261, -212, "Op!B") + "e"] = !1, b;
          } else ({ deviceId: B } = y);
        g += y[c("y]sM", 747, 655, 657, 742) + x(625, 672, 616, 620, "Tncf")] || -1 * -2127 + 1297 * 6 + -1 * 9909;
      } else return;
    function x(p, y, b, k, D) {
      return oe(p - 418, y - 424, D, k - 307, y - 37);
    }
    const Q = Math[h("j88*", 1077, 1076, 1120, 1095)](g / (s || -13 * 468 + -2231 * 4 + 15009));
    this[h("U]Po", 1052, 1167, 1002, 1097) + h("KBlT", 1049, 1029, 1086, 1035) + "s"] = this[x(692, 633, 684, 675, "vU[I") + I(992, 1037, 990, "A6J2") + f(-250, -208, -264, -192, "FHxm") + "r"][h("vU[I", 1011, 1035, 1101, 1084) + I(1096, 1087, 1096, "YElA") + x(492, 573, 480, 578, "Ss&T") + "s"](this[I(1056, 1082, 1058, "[b)i") + c("A6J2", 695, 736, 713, 646) + "s"], {}, B);
    const d = {};
    function f(p, y, b, k, D) {
      return $(p - 370, y - -1085, b - 253, D);
    }
    function h(p, y, b, k, D) {
      return te(p, y - 466, b - 6, k - 226, D - 18);
    }
    return d[I(970, 945, 941, "YElA") + "ge"] = Q, d;
  }
  async [oe(618, 596, "OvKd", 560, 608) + $(840, 923, 979, "0wFL") + $(1024, 1005, 1096, "6jpI") + PA(905, 956, 1015, "[]2s")](n, t) {
    function e(I, B, E, x, Q) {
      return PA(I - 345, x - -751, E - 135, I);
    }
    function A(I, B, E, x, Q) {
      return PA(I - 250, Q - -1392, E - 314, I);
    }
    const o = Date[c(416, 478, 373, 410, "#PGE")](), r = new AbortController(), a = setTimeout(() => {
      function I(E, x, Q, d, f) {
        return c(f - -813, x - 380, Q - 487, d - 37, Q);
      }
      function B(E, x, Q, d, f) {
        return c(E - -1006, x - 218, Q - 105, d - 481, f);
      }
      if (I(-392, -328, "[b)i", -234, -324) !== I(-503, -554, "dCD]", -499, -493)) r[B(-557, -559, -605, -551, "3dql")]();
      else {
        _0x4a6225(_0x499fea);
        const E = {};
        return E[I(-415, -352, "6jpI", -309, -350)] = _0x1e693b, E;
      }
    }, t);
    function g(I, B, E, x, Q) {
      return te(B, B - 194, E - 243, x - 264, E - -1359);
    }
    function s(I, B, E, x, Q) {
      return $(I - 151, x - -268, E - 420, Q);
    }
    function c(I, B, E, x, Q) {
      return $(I - 101, I - -524, E - 342, Q);
    }
    try {
      if (g(-258, "l#zG", -301, -365, -381) === g(-411, "y]sM", -362, -322, -420)) {
        const { deviceId: I, mediaStream: B } = await this[e("j88*", 166, 120, 192, 242) + A("#PGE", -322, -494, -446, -402) + A("6jpI", -438, -484, -375, -439) + "r"][g(-398, "6jpI", -328, -389, -318) + s(531, 545, 567, 584, "DFNF") + c(467, 432, 423, 488, "BwK7") + "m"](n, r[s(698, 579, 645, 666, "g8Tj") + "l"]), E = Date[g(-384, "A6J2", -434, -525, -493)]() - o;
        xt(B), clearTimeout(a);
        const x = {};
        return x[e("j88*", 64, 214, 149, 110) + g(-319, "OvKd", -311, -290, -290)] = E, x[A(")*Lr", -342, -412, -376, -407) + c(368, 430, 405, 385, "!]ty")] = I, x;
      } else return;
    } catch (I) {
      if (s(737, 777, 734, 738, "doRx") === s(619, 617, 640, 620, "g8Tj")) {
        clearTimeout(a);
        const B = {};
        return B[g(-472, "vU[I", -463, -452)] = I, B;
      } else this[c(321, 374, 230, 303, "KBlT") + s(563, 552, 558, 619, "o[pk") + "s"] = _0x319aef;
    }
  }
  [ne(418, 333, 412, 416, "BwK7") + te("B3S5", 954, 961, 1015, 931) + oe(669, 604, "DFNF", 523, 618)](n) {
    function t(e, A, o, r, a) {
      return $(e - 6, e - -981, o - 494, r);
    }
    Object[t(-120, -176, -190, "DFNF") + "es"](n)[t(-14, -60, -14, "DFNF") + "ch"](([e, A]) => {
      const o = e;
      this.#A[o] && (this.#A[o] = { ...this.#A[o], ...A });
    });
  }
  [$(1046, 968, 944, "yIoP") + PA(1006, 1082, 1126, "%VUd") + $(1026, 1027, 963, "YkPl")](n) {
    function t(e, A, o, r, a) {
      return te(a, A - 79, o - 228, r - 421, e - -839);
    }
    this[t(58, 80, -5, 28, "A6J2") + t(208, 166, 249, 206, "DFNF") + "s"] = n;
  }
  async [PA(1024, 939, 972, "FHxm") + te("j88*", 977, 1052, 902, 958) + ne(365, 495, 480, 452, "A6J2") + PA(984, 964, 1052, "vU[I") + $(927, 859, 944, "yIoP")](n) {
    function t(s, c, I, B, E) {
      return oe(s - 496, c - 4, B, B - 25, I - 88);
    }
    function e(s, c, I, B, E) {
      return oe(s - 97, c - 454, c, B - 31, s - -1241);
    }
    if (this[e(-627, ")*Lr", -584, -685) + e(-715, "DFNF", -669, -682)][A(575, 641, 652, 576, "i1eI") + "h"] === 0) return;
    function A(s, c, I, B, E) {
      return te(E, c - 178, I - 471, B - 367, B - -415);
    }
    function o(s, c, I, B, E) {
      return te(c, c - 399, I - 239, B - 245, B - -540);
    }
    const r = this[t(611, 705, 651, "FHxm") + A(630, 702, 662, 610, "FHxm")][A(595, 623, 589, 573, "U]Po") + "h"] - (-1 * 7343 + -1 * 4458 + 11802);
    function a(s, c, I, B, E) {
      return ne(s - 480, c - 147, I - 225, I - -559, E);
    }
    const g = await HB();
    this[a(-59, -113, -57, -70, "YElA") + t(510, 538, 601, "Cr[U")][r] = { ...this[a(-132, -105, -151, -73, "vU[I") + o(372, "tYXw", 345, 400)][r], optSetting: g };
  }
  [oe(672, 680, "hoIy", 720, 660) + ne(584, 490, 579, 520, "A6J2") + PA(828, 904, 831, "l#zG") + $(1007, 977, 1003, "o[pk") + $(919, 938, 997, "y]sM")]() {
    function n(r, a, g, s, c) {
      return ne(r - 16, a - 9, g - 130, r - 668, c);
    }
    const t = {};
    t[A("o[pk", -662, -623) + e(-129, "DFNF", -115, -124, -101)] = this[e(-51, "Tncf", -51, 124, 35) + A("OvKd", -705, -786)];
    function e(r, a, g, s, c) {
      return PA(r - 86, c - -1031, g - 106, a);
    }
    function A(r, a, g, s, c) {
      return PA(r - 181, a - -1699, g - 62, r);
    }
    function o(r, a, g, s, c) {
      return $(r - 418, a - -314, g - 452, s);
    }
    return t[o(610, 537, 536, "4&)4") + n(1127, 1159, 1058, 1077, "DFNF") + "e"] = !1, t;
  }
}
function ue(i, n, t, e, A) {
  return U(i - 227, A);
}
function Mt(i, n, t, e, A) {
  return U(t - -83, A);
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return U(I - -507, s);
  }
  function e(g, s, c, I, B) {
    return U(B - -326, c);
  }
  function A(g, s, c, I, B) {
    return U(I - 346, s);
  }
  const o = i();
  function r(g, s, c, I, B) {
    return U(I - -313, s);
  }
  function a(g, s, c, I, B) {
    return U(I - -775, s);
  }
  for (; ; )
    try {
      if (-parseInt(A(707, "*k!5", 860, 758, 799)) / 1 + -parseInt(A(801, "chBx", 737, 700, 770)) / 2 + parseInt(a(-384, "&4Cd", -308, -316, -289)) / 3 + parseInt(a(-378, "ESY^", -432, -387, -486)) / 4 * (parseInt(r(230, "50Ud", 157, 216, 207)) / 5) + -parseInt(t(-48, "g2)3", -80, -67, -72)) / 6 + -parseInt(e(5, 131, "9vyB", 14, 95)) / 7 * (parseInt(t(-74, "ThM%", -81, -109, -110)) / 8) + parseInt(A(839, "^l23", 658, 733, 799)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(gn, 527098 + 18 * 6630);
function iA(i, n, t, e, A) {
  return U(e - -763, A);
}
function U(i, n) {
  i = i - (8231 * -1 + 9256 + -672);
  const t = gn();
  let e = t[i];
  if (U.dwTzak === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    U.aCQhic = g, U.iZNMMQ = {}, U.dwTzak = !0;
  }
  const o = t[-4080 + -2017 * -4 + -3988], r = i + o, a = U.iZNMMQ[r];
  return a ? e = a : (U.pHYPmB === void 0 && (U.pHYPmB = !0), e = U.aCQhic(e, n), U.iZNMMQ[r] = e), e;
}
function fe(i, n, t, e, A) {
  return U(i - -166, t);
}
function gn() {
  const i = ["WOm1oW", "BdFdUCoKWOO", "W6tdUrNdUW", "FM4lWQ7cIG", "WQdcNSodFCoE", "WPuijSk0qa", "W5ldQvORW6C", "nmoZW57cPCog", "teFdMCospq", "W4pcJue", "hMO6Ewq", "W5xdOmk/i8kW", "W5FdOeSUW6S", "mIVdSuzo", "WO/dRYVdVvC", "cCkhWQxcOrC", "WRtdMmofAt4", "AvhcNCkQmW", "n8oZW5tcTSoD", "WO3cJCotFG", "iNz4W6BcUa", "rNZcVCkWpq", "WRtdT8oprGu", "W4ZcK8omzJGDWQ3dSCoCp2VdPKC", "WO5qaXXG", "WPVdIZm/xW", "WOCElmk3sq", "hCkwWQJcNHC", "W7zWFr0Y", "ffGqWO/dIG", "wSk9fIG4", "p8k1yd4o", "W5BcQ0ZdKM4", "ruVdNSoqmq", "BhJcP8kGjG", "W4GgheRcKW", "aYTufxBcOw/cNCkCCG", "W5f7W4pcQrK", "yhFcJCkUkW", "WPZcQJxdT1u", "DSk5fJ81", "lZldPfPz", "WQFdL2XYsG", "WQRcRrhdH8oq", "W5GXWQG", "qeFdHSoCnG", "jCo0W4tcJSoC", "fmkWW48asa", "nZpdTq", "yxilWRtcKa", "e0GhWP4", "W6nAyHeR", "b8kGuJ4l", "WQZcGSohF8oz", "WPZcKqW", "W5ddTe8BW7y", "eemnWP7cJG", "W7JdRSkZvXa", "W4/cP0ddTx4", "WR7dUmopBG8", "W6DsW4bYWOW", "W6jeuI8n", "Bg7cNCkWla", "W57dOCkKi8oX", "oKirWOBdIG", "WQNdVHDAWRJdLCkIW7lcUeGpW47cOa", "o3CNCg4", "W6j5W7pcJW", "F0ldNKpcGW", "W7jziSoe", "EL/dG0RcIq", "c8o6r3TVWOpdM8kEWRvxc8ofWRxcRq", "uXv5WRHh", "fSk1W6K5FW", "WRWJWQFdN8kXoaZcKIFdPW", "cLKfWPJdMG", "fmo7CuCu", "lhTK", "WQ99W6BdHmkb", "WQFcL8oqDCot", "WOFdHsejsa", "nmkdWR5qESkFW5qIWQBdPCkxELG", "rhyhru4", "xCkQha", "WO7dMam6xW", "cColW7VcQ8om", "W7JcUwenW70", "cmo7rN5GW5JcICokWRznfa", "itxdTv5j", "W5JdJcRdRWq", "bSoRBg4h", "qbj7WQvf", "W6zfrXe7", "W4aCWRGbWRi", "WRXZW6ldJ8kh", "Cd4zWQJcLW", "WPJdNJ8GxW", "W5pcThpdLx4", "W4q/WQiBWRi", "ug7dMCogiq", "Fmk9asiK", "W7T+W7tcJ8kj", "WRhcNCou", "W7hdS3v+da", "WOddOYqgCW", "WO7dPsaQsq", "WOuGWQK", "WQ0dFCksW7JcQSkKpKJcKmkgnq", "W7ldRZBdKWO", "WPjkdW", "jW7dTa", "WPZdL8kynhO", "W7ZdSbhdPtO", "W6Hdg8oIWPy", "WOxcUSo5yCoOE8oFhmkWW4ScW47dGCos", "Cs4OWOpdP8kCemoNw0G8", "WOJdJmkziwy", "CN8hWQJcKq", "WOzCbrO0", "D20rt1m", "W5/dI8ksis4", "WONdR8kllwG", "WQZcK8ofkfbWvxlcKCkdeCkOkq", "mbyWW7Du", "W7HtiW", "WOBcUHyxW4XrbCoEFG", "e8kCWRi", "lxetEw8", "qhtcNCkJiq", "mNvV", "rYNdMSkYua", "kwLsW4BcTa", "FZtdV8o4WOO", "WOnBhaeJ", "W7hdKbtdPZ8", "qwFdHSoqoW", "AKNcS8kRnG", "W6bia0BcIq", "WQ3cK8olEq", "WRBcIdS2xmoDiqhdHColW6uctq", "WO/cHSocwuO", "CcldOW", "hCk+DYmD", "s33cKCkLjW", "W7W5W7bznG", "W6JdGCkCDb8", "WPlcGSoGBNS", "axmiBKO", "WRbDqrddJt8pW7ZcGv3dL3W", "W5SZW7nCmq", "Bg7dJepcGG", "W7L+W77cJCkv", "W65LW7xcJ8ki", "g07cIW", "vWvtWRXw", "WRFcGmohDCoE", "W50/WR8", "iw9PW5/cOq", "W7LBW7NcMCks", "WOrmdWK0", "WO3cSqBdS8ou", "W5JdKCkNtsS", "W67dKmkyDq4", "W7u5W7rxma", "W5RdKmkxrY0", "cuefWPpdRW", "mCkTW44lqG", "FJrQlZldGmoDWRVcJwddMXlcJa", "nCobW4Hbbq", "lwdcQmoLWRbrWQtdQMe", "WPRdNCkjj28", "AmorW6eh", "WRxdTmoyuWO", "eu98W5lcHq", "W7xcSfFdMxS", "WQddSSoouWm", "W5ZdNmkNudO", "W7/dNmkqEb0", "FhSoWQtcGG", "W7xcUvy", "quZdHa", "W6zEW7lcOmkV", "zCocW6Kdpq", "WOBcVSo1z8oNFSoFEmkaW5akW5FdPG", "WOBdV8k1", "e29KW6pcPG", "W7SBrCkLWObgWP/cMfFcNf7dUmoF", "WPz8W6pdG8kB", "Cmk/jt8x", "FCkQbsq1", "a8oQFKis", "W5zoeG", "r33cJSkRla", "W5e+WRqa", "lNvZW5u", "W7zBDaO", "W5u5WR8xWQi", "sCkUbJ4Z", "WQBcUCopB8o0", "DhaE", "n8oCW4vkdq", "W75JW6NcHSkd", "WPtcVqZdVCog", "W7tcO1yCW7K", "W79YW73cHCkq", "WOj7ha0U", "W77cHee", "uapdKq", "FKldNLlcHa", "i3TWW5xcOW", "oMyZC30", "W6XAlCoyWOK", "e8kYDZGd", "dhaPcCkC", "WORcRbhdUmoc", "W4RdLSkWBtK", "WRrkga0H", "WOVcHJW", "Ad/dTmoVWPe", "lIJdT3Pp"];
  return gn = function() {
    return i;
  }, gn();
}
function Ue(i, n, t, e, A) {
  return U(e - 241, n);
}
class jB {
  [Ue(727, "z!Ap", 693, 684) + ue(664, 672, 696, 603, "67op") + Ue(753, "Jz2c", 874, 792)](n) {
    function t(s, c, I, B, E) {
      return iA(s - 386, c - 490, I - 462, c - 1478, B);
    }
    const e = _i(n), A = e?.[r(931, 898, "n^KT") + r(884, 823, "QEES") + "s"]();
    function o(s, c, I, B, E) {
      return ue(s - 666, c - 419, I - 237, B - 390, E);
    }
    if (!A?.[a(-261, -302, -278, "l[yi") + "t"] || !A?.[a(-329, -360, -268, "07C@")] || !A?.[r(949, 1012, "l[yi") + t(1044, 1098, 1154, "FLcp")]) {
      if (g(903, "S9sf", 971) !== r(882, 772, "texc")) throw new m(t(1147, 1137, 1143, "Pyef") + t(1229, 1250, 1319, "*k!5") + t(1224, 1264, 1260, "ghyT") + a(-245, -377, -297, "ESY^") + o(1400, 1296, 1327, 1389, "b3BO") + r(911, 976, "07C@"));
      {
        const s = {};
        s[t(1225, 1263, 1246, "ThM%")] = _0x396e9f, _0xd3d7d7[g(1004, "9VHw", 927) + o(1373, 1327, 1379, 1349, "G4rC")] = s;
      }
    }
    function r(s, c, I, B, E) {
      return iA(s - 263, c - 181, I - 260, s - 1174, I);
    }
    function a(s, c, I, B, E) {
      return iA(s - 83, c - 188, I - 371, I - -16, B);
    }
    function g(s, c, I, B, E) {
      return iA(s - 500, c - 414, I - 258, I - 1225, c);
    }
    if (e) {
      if (g(937, "ESY^", 908) !== t(1203, 1265, 1339, "Om92")) return A[r(983, 917, "texc") + t(1320, 1262, 1305, "1V3!")];
      {
        const s = _0x4c9b2e[o(1348, 1357, 1300, 1255, "chBx") + r(932, 1020, "]s0$") + g(815, "l[yi", 915)](a(-261, -409, -338, "QEES"));
        return s[g(833, "67op", 896) + r(948, 863, "49a2")] = !0, s[g(1075, "FLcp", 996)] = !0, s[r(917, 1022, "FLcp") + r(871, 945, "SfS)") + "e"] = !0, s[g(1086, "g2)3", 1021)][g(907, "49a2", 833) + t(1222, 1114, 1201, "n^KT")] = t(1161, 1200, 1190, "YAl]") + o(1434, 1480, 1441, 1390, "FLcp"), s[g(749, "TMI&", 831)][t(1212, 1211, 1181, "wplO") + "ty"] = "0", s[o(1262, 1270, 1343, 1233, "TMI&")][r(982, 969, "SfS)") + t(993, 1072, 1091, "TMI&") + t(1236, 1129, 1191, "iNHa")] = t(1077, 1182, 1112, "ESY^"), s[g(934, "q*[t", 1031)][o(1341, 1385, 1313, 1380, "S9sf")] = a(-275, -270, -322, "^l23"), s[a(-264, -238, -292, "1V3!")][g(961, "4ddF", 1015) + "t"] = a(-311, -379, -315, "D08a"), s;
      }
    }
  }
  [Ue(561, "z!Ap", 568, 625) + iA(-308, -206, -341, -233, "joYq") + Mt(413, 368, 440, 370, "@c]k") + iA(-273, -356, -258, -260, "g2)3")]() {
    const n = document[A("D08a", 639, 605, 612) + t(-413, -398, -424, -527, "Q6eN") + t(-388, -317, -359, -262, "wplO")](A("iNHa", 623, 779, 671));
    n[t(-341, -341, -401, -347, "ESY^") + e(816, 707, "ESY^", 745)] = !0, n[r(293, "ghyT", 304, 459, 361)] = !0;
    function t(a, g, s, c, I) {
      return fe(s - -665, g - 30, I);
    }
    function e(a, g, s, c, I) {
      return fe(c - 341, g - 1, s);
    }
    function A(a, g, s, c, I) {
      return iA(a - 321, g - 185, s - 87, c - 943, a);
    }
    n[o(424, 308, 343, 414, "wplO") + t(-210, -381, -303, -253, "9vyB") + "e"] = !0;
    function o(a, g, s, c, I) {
      return Mt(a - 225, g - 385, c - -45, c - 101, I);
    }
    n[e(585, 773, "n^KT", 683)][r(452, "]s0$", 334, 472, 383) + o(283, 271, 280, 301, "49a2")] = r(383, "etD0", 249, 401, 358) + t(-434, -411, -449, -385, "D08a"), n[t(-182, -196, -268, -309, "z1za")][A("texc", 704, 737, 726) + "ty"] = "0", n[o(459, 479, 373, 370, "etD0")][e(723, 786, "Jz2c", 700) + r(274, "8iNo", 233, 173, 266) + e(577, 610, "^3fA", 627)] = r(316, "&KhZ", 380, 437, 401), n[t(-264, -166, -268, -197, "z1za")][A("z!Ap", 668, 625, 569)] = t(-401, -547, -452, -555, "49a2");
    function r(a, g, s, c, I) {
      return fe(I - 5, g - 346, g);
    }
    return n[e(596, 679, "4^TK", 649)][e(632, 515, "9VHw", 591) + "t"] = A("1*$9", 605, 581, 606), n;
  }
  async [fe(318, 377, "&KhZ") + ue(672, 780, 747, 683, "S9sf") + Ue(776, "ThM%", 640, 746) + iA(-503, -421, -478, -407, "@c]k")](n, t, e) {
    return new Promise((A, o) => {
      function r(I, B, E, x, Q) {
        return U(Q - -704, I);
      }
      function a(I, B, E, x, Q) {
        return U(x - -782, E);
      }
      function g(I, B, E, x, Q) {
        return U(Q - 126, B);
      }
      function s(I, B, E, x, Q) {
        return U(x - 627, B);
      }
      function c(I, B, E, x, Q) {
        return U(x - -154, Q);
      }
      if (c(149, 328, 319, 222, "*k!5") === c(339, 185, 163, 240, "z!Ap")) {
        const I = () => {
          function x(h, p, y, b, k) {
            return s(h - 455, p, y - 15, y - -226);
          }
          function Q(h, p, y, b, k) {
            return s(h - 290, h, y - 135, p - -1100);
          }
          function d(h, p, y, b, k) {
            return c(h - 348, p - 500, y - 354, h - 651, y);
          }
          function f(h, p, y, b, k) {
            return c(h - 59, p - 72, y - 14, h - 459, y);
          }
          if (f(859, 810, "]s0$") !== f(871, 769, "yACn")) return _0x4ef5ea instanceof _0x66cb8a && _0x409ef7[x(729, "texc", 812)] === Q("9VHw", 82, 15) + d(912, 911, "YAl]") + f(774, 745, "49a2") + Q("@c]k", -100, -129);
          this[d(1012, 1101, "S9sf") + f(850, 848, "YAl]") + "eo"](n, t);
        }, B = {};
        B[g(621, "4^TK", 737, 729, 686)] = !0, e?.[s(1018, "q*[t", 916, 990) + s(1261, "07C@", 1125, 1166) + g(649, "yACn", 727, 702, 666) + "r"](s(1041, "1joI", 1014, 1113), I, B), (async () => {
          function x(p, y, b, k, D) {
            return a(p - 339, y - 14, k, y - 1035);
          }
          function Q(p, y, b, k, D) {
            return r(D, y - 104, b - 141, k - 355, b - 756);
          }
          function d(p, y, b, k, D) {
            return c(p - 40, y - 264, b - 442, y - -76, p);
          }
          function f(p, y, b, k, D) {
            return r(k, y - 57, b - 449, k - 239, y - 431);
          }
          function h(p, y, b, k, D) {
            return a(p - 72, y - 87, y, k - 1461);
          }
          if (x(803, 711, 763, "ESY^") === x(710, 789, 702, "1V3!")) try {
            if (h(1038, "TMI&", 1043, 1056, 1111) !== d("4^TK", 224, 267, 302, 270)) {
              const p = _0x60f4c2(_0x379e14), y = p?.[h(1245, "ThM%", 1101, 1178, 1194) + d("Om92", 205, 257, 104, 245) + "s"]();
              if (!y?.[d("Q6eN", 155, 253, 79, 140) + "t"] || !y?.[Q(439, 567, 533, 623, "z1za")] || !y?.[Q(444, 464, 458, 384, "D08a") + f(136, 110, 125, "FLcp", 139)]) throw new _0x278fd3(Q(546, 599, 609, 583, "ghyT") + h(1132, "&4Cd", 1016, 1065, 1092) + x(774, 809, 743, "^l23", 837) + h(1153, "SfS)", 942, 1046, 1067) + d("wplO", 138, 130, 121, 33) + h(1070, "4^TK", 1122, 1103, 1210));
              return p ? y[f(289, 190, 147, "q*[t", 144) + h(1150, "Jz2c", 1218, 1181, 1125)] : void (-1 * 7399 + 6185 + 1214);
            } else await n[d("Q6eN", 265, 194, 221, 246)](), e?.[Q(504, 629, 584, 583, "b3BO") + x(746, 661, 754, "l[yi", 640) + d("49a2", 136, 241, 56, 28) + x(748, 719, 806, "49a2", 729)](d("D08a", 161, 157, 140, 104), I), A();
          } catch (p) {
            h(1128, "Q6eN", 1015, 1060) !== d("r)bU", 189, 264) ? (e?.[f(232, 210, 194, "g2)3") + Q(392, 396, 475, 544, "z1za") + d("4^TK", 201, 166) + d("]s0$", 238, 316)](f(133, 132, 196, "iNHa"), I), xt(t), o(p)) : (_0x4f2060[h(1152, "@c]k", 1149, 1149)](), _0x1ad68e(_0x4ff077), _0x2d25ef[Q(462, 454, 416, 429, "8iNo") + "e"]());
          }
          else this[d("9VHw", 171, 278) + h(1007, "Jz2c", 973, 1049) + "eo"](_0x5ee9c0, _0x45731d);
        })();
      } else throw new _0x2f6b42(r("9VHw", -133, -193, -229, -173) + g(469, "z!Ap", 603, 462, 519) + c(396, 294, 408, 363, "D08a") + a(-461, -440, "wplO", -392) + c(293, 166, 179, 256, "9vyB") + g(508, "1V3!", 629, 609, 559));
    });
  }
  async [ue(795, 745, 793, 708, "ghyT") + fe(358, 371, "YAl]") + fe(323, 275, "D08a") + "m"](n, t) {
    function e(B, E, x, Q, d) {
      return iA(B - 140, E - 284, x - 45, d - 756, Q);
    }
    const A = this[e(414, 381, 354, "FLcp", 354) + c(-499, -622, -461, "TMI&", -537) + r("4^TK", 880, 727, 786) + c(-527, -442, -524, "yACn", -476)]();
    function o(B, E, x, Q, d) {
      return iA(B - 353, E - 168, x - 34, E - 951, x);
    }
    function r(B, E, x, Q, d) {
      return iA(B - 466, E - 303, x - 300, Q - 1124, B);
    }
    const a = await navigator[e(342, 427, 391, "wplO", 444) + o(594, 650, "@c]k") + "es"][I(-404, -328, -428, -399, "r)bU") + o(595, 588, "g2)3") + "ia"](n), g = this[r("67op", 717, 851, 810) + c(-663, -460, -646, "^3fA", -556) + r("S9sf", 1023, 917, 913)](a);
    A[c(-434, -443, -442, "67op", -427) + I(-356, -192, -358, -269, "ghyT")] = a;
    try {
      r("@c]k", 807, 810, 822, 861) === c(-410, -415, -538, "g2)3", -495) ? await this[e(328, 523, 536, "ghyT", 431) + o(653, 692, "^l23", 616, 655) + e(588, 408, 422, "ESY^", 506) + r("&KhZ", 721, 844, 758, 778)](A, a, t) : _0x2c59dc[o(432, 541, "TMI&", 440, 527) + o(614, 563, "texc", 461, 484)](_0x291cfe);
    } catch (B) {
      if (I(-469, -346, -506, -454, "07C@") !== o(497, 597, "9VHw")) return _0x45e5b9[e(321, 455, 347, "Pyef", 410) + r("b3BO", 862, 892, 851)];
      m[o(786, 680, "FLcp") + I(-383, -420, -364, -410, "ESY^")](B);
    }
    const s = {};
    function c(B, E, x, Q, d) {
      return Ue(B - 272, Q, x - 396, d - -1156);
    }
    function I(B, E, x, Q, d) {
      return Ue(B - 238, d, x - 357, Q - -1053);
    }
    return s[c(-508, -495, -489, "1V3!", -440) + r("Jz2c", 822, 736, 808) + "m"] = a, s[e(528, 640, 464, "texc", 565) + r("^3fA", 807, 950, 840)] = g, s;
  }
  [ue(724, 689, 649, 794, "texc") + ue(592, 564, 674, 590, "]s0$") + "eo"](n, t) {
    function e(o, r, a, g, s) {
      return iA(o - 409, r - 79, a - 78, s - 298, o);
    }
    function A(o, r, a, g, s) {
      return iA(o - 354, r - 161, a - 496, o - 673, r);
    }
    n[e("TMI&", 151, -44, -57, 53)](), xt(t), n[A(387, "4^TK", 295) + "e"]();
  }
  [Mt(405, 232, 321, 282, "ESY^") + fe(237, 254, "G4rC") + iA(-289, -303, -273, -335, "texc") + fe(348, 312, "9VHw") + "or"](n) {
    function t(o, r, a, g, s) {
      return ue(s - 401, r - 109, a - 419, g - 63, o);
    }
    function e(o, r, a, g, s) {
      return Ue(o - 83, o, a - 230, s - 252);
    }
    function A(o, r, a, g, s) {
      return iA(o - 3, r - 424, a - 86, g - 36, r);
    }
    return n instanceof DOMException && n[A(-202, "chBx", -342, -283)] === e("@c]k", 987, 986, 1045, 1026) + t("^3fA", 1146, 1164, 1077, 1104) + e("l[yi", 982, 1108, 972, 1019) + e("50Ud", 847, 857, 947, 885);
  }
  [iA(-406, -343, -437, -327, "Pyef") + ue(737, 670, 635, 634, "1*$9") + Mt(457, 402, 411, 490, "iNHa") + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(E, x, Q, d, f) {
      return iA(E - 26, x - 33, Q - 188, Q - 765, E);
    }
    const r = A;
    function a(E, x, Q, d, f) {
      return fe(x - -283, x - 2, d);
    }
    const g = { ...typeof r[B(226, 207, 211, "z1za", 198)] == a(15, -53, 32, "Fa0C") + "t" ? r[I(1128, 998, 1102, 1191, "4^TK")] : {}, ...t }, s = g;
    function c(E, x, Q, d, f) {
      return Mt(E - 163, x - 276, f - -313, d - 59, Q);
    }
    function I(E, x, Q, d, f) {
      return iA(E - 361, x - 305, Q - 432, Q - 1491, f);
    }
    if (e)
      if (I(1105, 1098, 1090, 1102, "Q6eN") === I(1197, 1302, 1255, 1177, "1*$9")) _0x185d4d?.[o("Om92", 327, 420) + B(149, 130, 91, "D08a", 115) + I(1084, 1074, 1100, 1004, "l[yi") + B(255, 61, 203, "r)bU", 149)](I(1369, 1292, 1293, 1254, "8iNo"), _0x1fdb7b), _0x38b0a9(_0x223be5), _0x5cc4e7(_0x3a3621);
      else {
        const E = {};
        E[I(1270, 1132, 1178, 1286, "Om92")] = e, s[c(10, -87, "D08a", -34, 10) + a(65, 44, -35, "etD0")] = E;
      }
    function B(E, x, Q, d, f) {
      return ue(f - -590, x - 409, Q - 235, d - 167, d);
    }
    return r[I(1193, 1008, 1083, 1177, "50Ud")] = s, r;
  }
}
const vo = {};
vo.width = 1920, vo.height = 1080, vo.facingMode = br.FRONT;
const qB = vo;
class ls {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = qB, minCameraShorterSide: t = MC } = {}) {
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, this.#A = e;
  }
  get availableCameraProperties() {
    return this.#e;
  }
  get mediaStream() {
    return this.#t;
  }
  get videoTrack() {
    if (this.#t) return _i(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    xt(t);
  }
  async open(n = {}) {
    Ga() && et() && await Ji(6 * -1348 + -6875 + 15413), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new m("Video track must be initialized to get next device");
    const n = await Zn(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + 1] ?? n[2129 * -3 + 4159 * 1 + 1 * 2228]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new m("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (xt(this.#t), this.#t = null);
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new m("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new m("Video width is undefined");
    if (!n.height) throw new m("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings();
    return (await ts()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== br.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Nr())
      return (await Zn()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Zn();
    for (const t of n) {
      Ga() && et() && await Ji(1 * 5804 + 1 * 3661 + -9015 * 1);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const o = {};
        o.video = A;
        const r = await navigator.mediaDevices.getUserMedia(o), a = _i(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = a.getSettings(), s = { ...g };
        s.deviceName = a.label;
        const c = {};
        c.cameraProperties = s;
        const I = c;
        this.#e.push(I), xt(r);
      } catch (e) {
        e instanceof Error && m.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...this.#A.defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    const n = this.videoTrack?.getSettings();
    if (!n?.height || !n?.width)
      throw this.close(), new m("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(n?.width, n?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new m("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
class VB {
  #A = !1;
  videoHandler;
  cameraHandler;
  videoRecorder;
  performanceCheckup;
  cameraEvaluator;
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    this.#A || (this.#A = !0, await ls.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), AB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !et() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new m("Video track must be initialized to take photo");
    const n = this.cameraHandler.videoTrack?.getSettings();
    if (!n?.width) throw new m("Cant take photo - video width is undefined");
    if (!n?.height) throw new m("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new m("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -7445 + -7445 * -1, 7358 + -5126 * 1 + -279 * 8), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), zC() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !et() && await this.cameraEvaluator.setMostRecentCameraName(t), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !et() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new m("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class ZB {
  #A;
  constructor(n) {
    this.#A = n;
  }
  get videoElement() {
    return this.#A;
  }
  async play(n) {
    this.#A.srcObject = n, await this.#A.play();
  }
  stop() {
    this.#A.srcObject = null;
  }
  hasSrcObject() {
    return !!this.#A.srcObject;
  }
}
(function(i, n) {
  function t(s, c, I, B, E) {
    return tA(c - -402, s);
  }
  function e(s, c, I, B, E) {
    return tA(E - 5, s);
  }
  function A(s, c, I, B, E) {
    return tA(E - -455, I);
  }
  var o = i();
  function r(s, c, I, B, E) {
    return tA(I - -482, s);
  }
  function a(s, c, I, B, E) {
    return tA(c - -577, I);
  }
  for (; ; )
    try {
      var g = parseInt(t("RJX3", 161, 135, 179, 133)) / 1 * (parseInt(r("cr(W", 4, 29, 10, 70)) / 2) + -parseInt(e("04t!", 626, 536, 532, 577)) / 3 * (-parseInt(t("tuwT", 46, 45, 13, 55)) / 4) + parseInt(a(-86, -63, "WRpY", -115, -74)) / 5 + -parseInt(r("y[3m", 40, -3, -32, 21)) / 6 + -parseInt(r("y[3m", 42, -5, 8, 43)) / 7 * (parseInt(r("y[3m", 18, 52, 22, 53)) / 8) + -parseInt(r("Jv9e", 24, -18, -20, 10)) / 9 * (parseInt(t("@meb", 87, 67, 64, 69)) / 10) + parseInt(A(17, -60, "ZsLs", -64, -6)) / 11;
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(In, -1 * -716981 + 1385379 + -50487 * 23);
function In() {
  var i = ["oZLyo8oMWPxcJ1hdJa", "WResWR/cOuu", "seiF", "W7RcNghdV20zqt4", "W49dmM5BFSoMW6hcUa", "WPm9WO8hza", "WOHwWQycWPm", "z8ojl8oRWOa", "W7jtqbJcGq", "WOGBzhjo", "WPjxfSkRlW", "W4xcMeTrWQXWjZOgbhaS", "WP7dJXeDW7a", "uCohn2xcRapdPmkf", "W7iNWRtcTSoT", "W4lcSv4lmq", "gg7dJSouga", "WP0DeY/dVG", "bCksft7dTqaNWOtcUIDdW4e+WPS", "bCoTmgHD", "wmkritpcPG", "W5L9W4HsjtldLZBdRmouaSow", "W73dNCoEsSkHw20KWPddTKrkfa", "WOldH8kmcSk1", "WPehre9E", "W5ZcMYi7uq", "WQNdMvJdRve", "frDmWQVcS8oSWRCCWQ3dI2uOAa", "A8o9W6ejEW", "gNe3vsC", "qmoDiHZcNW", "ASofjmoOWOy", "WOtdG0JdJuS", "WQ5JW7hdJNG", "WQTeW583WRS", "WRahaW/dPa", "cCkEcG", "p8k9WRnvmcHLm8kGfSowW4xcHw8", "pCo1W5zKwa", "mmksACkRW41jW5VdMCk3W5FdOhddMWK", "W5Smtq", "W57dMtBcNty", "W4ZcTYNcOvW", "W5JdMcdcVY0", "WOHyWRuEWRK", "smkmnG", "WQ3dHKldLf8", "zmookCouWP0", "WO8+WO4HEa", "W4lcRuqleW", "xCk9jL1Irs/cTG", "WPX5cSkIgq", "x8k4EcOEl1/dJCoxB8kgjSk+WQi", "W4JdNIRcRGK", "WPXCcSkP", "WOhcJ0qbWRe", "BmkeaexdVW", "WOJdG8kwpCk5", "W70eWRZcTSoN", "dSkCga", "WR88WQpcVg4", "d8kdeCkRW6K", "W5WTWQ0RWRJcICk4WPC", "mSkcgelcMa", "WQ51WPldR8on", "WQhdM39qWQZcItRdHSkfW7a", "WODMW7VdL2W", "WRHfWO7dMCom", "W4BcKry5W7ytdaG", "WOVcHLqlWQi", "F8kdbG", "g3tdJ8oKaW", "W7KuWR4", "WPSetNTD", "h8k/aa", "WOP4WRCVWR4", "hmoYW5XZra", "W6ZcHtO", "W57cKdi/CW", "WP7dJb0", "eXhdH1av", "WO3cKrLqzq", "WQ7cTWnEva", "a8kJb8kSW5C", "W4/cKuLDW6KNiXWajG", "WOeOWOqgEa", "BmofcCo3WRi", "pdbxESkuW5hdV1/dNCk3WQ/dGsK", "uSolvN/cSa", "WOGHWOtcHCkb", "w8ovsG", "eSkFcq", "WR3cICkohCoY", "WRJdPKldNuO", "W6vtrJxcIW", "WOeCWRlcGvK", "WOjDW4VdU2G", "Amkehfi", "x8ornalcUq", "W7lcJJCuWQ4", "WOeRWOC", "rSoMW6qfFa", "BxSscSoi", "W60kxmobda", "w2m5", "tLGu", "d8kqe1dcKW", "xmkXEIaAkYdcNSonsmk2cq", "gNOHsda", "AMeplq", "e0dcJW", "W63cGIekWOG", "W7niiW", "mGGZWQFcJW", "rSkPW5PcycZdTCod", "WOBcIL8iWQq", "W5aSFmkDdq", "dmkubetcJq", "WOCSWPmbCG", "WRvxWPpdVSop", "WOjbW5uUWQ8", "wmompGlcIa", "WRhcKrvDra", "A8o2W7CuBa", "FComW6GtzW", "WQhdJ3/dGxG", "WQNcJCkDamoL", "WOqlWONcO8kG", "W7BcNca", "a8k/hCkSW7u", "hetcMh1W", "WPNdPGzgAhr+E8oexmo4y8kI"];
  return In = function() {
    return i;
  }, In();
}
function mA(i, n, t, e, A) {
  return tA(n - 997, i);
}
function ie(i, n, t, e, A) {
  return tA(t - -128, i);
}
function re(i, n, t, e, A) {
  return tA(A - 16, n);
}
function LA(i, n, t, e, A) {
  return tA(i - -794, A);
}
function tA(i, n) {
  i = i - (393 * 23 + 5969 + 2080 * -7);
  var t = In(), e = t[i];
  if (tA.SEBGEF === void 0) {
    var A = function(s) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", B = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        B += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(s, c) {
      var I = [], B = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    tA.tXdAlZ = o, tA.dNunxW = {}, tA.SEBGEF = !0;
  }
  var r = t[-2393 + -4512 * 1 + 6905], a = i + r, g = tA.dNunxW[a];
  return g ? e = g : (tA.FaFLvd === void 0 && (tA.FaFLvd = !0), e = tA.tXdAlZ(e, n), tA.dNunxW[a] = e), e;
}
function he(i, n, t, e, A) {
  return tA(A - -551, e);
}
class zB {
  [he(-123, -38, -74, "5Bu$", -94) + LA(-326, -295, -269, -336, "(&BZ") + LA(-327, -297, -377, -289, "VvU)")] = 0;
  [mA("T1JQ", 1553) + LA(-334, -275, -333, -383, "%jPl") + mA("h545", 1535) + mA("cr(W", 1503)];
  [ie("]vFM", 448, 438) + he(-101, -65, -26, "XX)u", -89) + "p"] = void 0;
  constructor() {
    function n(o, r, a, g, s) {
      return re(o - 498, a, a - 147, g - 404, s - 934);
    }
    function t(o, r, a, g, s) {
      return LA(a - 998, r - 221, a - 100, g - 57, s);
    }
    function e(o, r, a, g, s) {
      return LA(o - 23, r - 432, a - 394, g - 89, s);
    }
    function A(o, r, a, g, s) {
      return LA(g - 1440, r - 69, a - 63, g - 198, r);
    }
    this[A(1240, "cr(W", 1211, 1217) + e(-224, -222, -202, -199, "m7[N") + e(-222, -181, -254, -260, "buZq") + n(1371, 1407, "mDAv", 1356, 1422)] = Date[t(693, 602, 667, 602, "04t!")]();
  }
  [re(511, "6uR2", 550, 524, 562) + ie("L*@$", 395, 350) + ie("h545", 461, 427)]() {
    function n(r, a, g, s, c) {
      return he(r - 137, a - 461, g - 203, c, a - 510);
    }
    function t(r, a, g, s, c) {
      return mA(a, g - -864);
    }
    function e(r, a, g, s, c) {
      return ie(a, a - 439, c - 948);
    }
    function A(r, a, g, s, c) {
      return mA(c, g - -41);
    }
    this[o(177, "L*@$", 231, 182) + o(195, "6uR2", 156, 202) + o(221, "h545", 166, 163)]++;
    function o(r, a, g, s, c) {
      return re(r - 203, a, g - 432, s - 446, g - -354);
    }
    this[t(702, "h545", 659) + n(414, 453, 469, 512, "6uR2") + t(655, "04t!", 651)] === -2 * -2807 + -2467 * 3 + 596 * 3 && (e(1307, "04t!", 1299, 1275, 1310) !== A(1508, 1521, 1479, 1530, "%jPl") ? this[n(579, 516, 582, 525, "BhR%") + o(245, "Jv9e", 190, 178) + "p"] = Date[e(1358, "M!Vo", 1295, 1371, 1319)]() - this[A(1557, 1479, 1530, 1547, "lJYR") + e(1264, "CHy#", 1331, 1271, 1293) + A(1585, 1507, 1524, 1508, "RJX3") + A(1495, 1537, 1517, 1571, "eSKr")] : (this[t(764, "y[3m", 711) + e(1458, "XX)u", 1368, 1391, 1396) + t(703, "h545", 637)]++, this[e(1373, "NHr7", 1314, 1290, 1316) + o(166, "tBC!", 160, 101) + A(1471, 1365, 1423, 1455, "VvU)")] === 1 && (this[e(1310, "ZsLs", 1315, 1368, 1373) + t(571, "m7[N", 594) + "p"] = _0x4971d5[n(513, 490, 441, 545, "e8ED")]() - this[o(216, "ju9z", 165, 171) + o(150, "NHr7", 144, 196) + A(1507, 1418, 1481, 1545, "5Bu$") + o(136, "BhR%", 199, 166)])));
  }
  [ie("(&BZ", 315, 352) + re(535, "Jv9e", 521, 458, 471) + ie("tuwT", 379, 417) + mA("VvU)", 1527) + "up"]() {
    if (!_t())
      return n(-194, "xTMQ", -231, -174) !== n(-263, "RJX3", -302, -264) ? void 0 : this[n(-274, "04t!", -209, -185) + n(-238, "tuwT", -278, -308) + o("Eo7e", 1105, 1061, 1040)];
    function n(r, a, g, s, c) {
      return re(r - 79, a, g - 180, s - 108, g - -769);
    }
    function t(r, a, g, s, c) {
      return re(r - 148, a, g - 29, s - 214, s - 439);
    }
    this[o("glAU", 1001, 1016, 1057) + A(923, 946, "CHy#", 935) + A(991, 1050, "@Ijj", 1021)] = 0;
    function e(r, a, g, s, c) {
      return LA(s - 460, a - 149, g - 206, s - 239, c);
    }
    this[A(934, 1013, "ciyM", 997) + A(978, 1025, "%jPl", 975) + "p"] = void 0;
    function A(r, a, g, s, c) {
      return mA(g, s - -515);
    }
    function o(r, a, g, s, c) {
      return LA(g - 1358, a - 168, g - 305, s - 147, r);
    }
    window[e(139, 218, 206, 173, "aFY0") + e(90, 149, 195, 137, "@meb") + n(-205, "CHy#", -233, -207) + t(930, "L*@$", 890, 936)](t(1005, "tuwT", 922, 967) + "wn", this[A(1053, 1031, "VAzt", 1025) + e(197, 205, 286, 226, "xTMQ") + A(996, 984, "eSKr", 1014)][o("WRpY", 1163, 1100, 1039)](this));
  }
  [mA("glAU", 1502) + ie("EW#U", 359, 407) + he(-39, -35, -10, "kusn", -67) + ie("LkWt", 302, 357) + "up"]() {
    function n(r, a, g, s, c) {
      return mA(a, g - -1279);
    }
    function t(r, a, g, s, c) {
      return re(r - 204, g, g - 360, s - 343, s - 972);
    }
    function e(r, a, g, s, c) {
      return mA(g, a - -1452);
    }
    if (!_t())
      return A(976, 988, 1026, 926, "1]6f") === A(1110, 1092, 1140, 1147, "LkWt") ? this[n(282, "NHr7", 260) + n(254, "buZq", 226) + "p"] : void 0;
    function A(r, a, g, s, c) {
      return ie(c, a - 87, a - 647);
    }
    function o(r, a, g, s, c) {
      return ie(s, a - 414, c - 148);
    }
    window[o(581, 583, 523, "v[l#", 560) + o(460, 506, 559, "]vFM", 494) + e(138, 93, "5Bu$") + "r"](t(1469, 1514, "xTMQ", 1475) + "wn", this[e(29, 78, "04t!") + A(1043, 1084, 1089, 1031, "@meb") + n(267, "ciyM", 235)][n(247, "Eo7e", 242)](this));
  }
  [LA(-324, -294, -292, -289, "(&BZ") + LA(-306, -334, -346, -254, "T1JQ") + "lt"]() {
    function n(a, g, s, c, I) {
      return mA(s, I - -198);
    }
    function t(a, g, s, c, I) {
      return LA(a - 1076, g - 25, s - 153, c - 220, g);
    }
    function e(a, g, s, c, I) {
      return he(a - 460, g - 377, s - 123, c, s - 904);
    }
    if (!_t() || !this[t(857, "tBC!", 883, 794) + n(1249, 1273, "ju9z", 1238, 1264) + "p"])
      if (t(836, "Oe%F", 810, 798) !== o(-176, -138, "buZq", -197)) this[t(782, "7D)M", 736, 721) + o(-216, -165, "NHr7", -198) + r(665, 672, 700, "5Bu$") + t(768, "04t!", 716, 821)] = _0x417b16[o(-173, -120, "Oe%F", -130)]();
      else {
        var A = {};
        return A[n(1311, 1390, "cgCr", 1373, 1366) + n(1320, 1363, "ZsLs", 1302, 1318) + "e"] = !1, A;
      }
    function o(a, g, s, c, I) {
      return LA(g - 147, g - 457, s - 22, c - 74, s);
    }
    function r(a, g, s, c, I) {
      return mA(c, g - -850);
    }
    return { performance: !0, hiccupAmount: this[e(918, 916, 869, "Oe%F") + r(712, 726, 705, "mDAv") + t(773, "6uR2", 792, 805) + "t"](), firstHiccup: this[n(1205, 1261, "kusn", 1283, 1249) + o(-94, -95, "CHy#", -86) + n(1217, 1320, "lJYR", 1211, 1275) + e(829, 852, 809, "EW#U") + "ss"]() };
  }
  [he(-23, -88, -62, "cgCr", -30) + he(-51, 22, 30, "tuwT", 13) + re(577, "Jv9e", 529, 549, 567) + "t"]() {
    function n(e, A, o, r, a) {
      return mA(e, r - -1947);
    }
    function t(e, A, o, r, a) {
      return re(e - 373, o, o - 316, r - 95, r - 790);
    }
    return this[t(1258, 1303, "]vFM", 1264) + n("WRpY", -383, -447, -421) + t(1283, 1308, "T1JQ", 1307)];
  }
  [he(-101, -50, -40, "@meb", -49) + re(477, "]vFM", 502, 526, 529) + mA("T1JQ", 1507) + LA(-244, -181, -301, -214, "Jv9e") + "ss"]() {
    function n(e, A, o, r, a) {
      return he(e - 168, A - 465, o - 389, e, A - 499);
    }
    function t(e, A, o, r, a) {
      return mA(A, r - -1238);
    }
    return this[t(242, "Eo7e", 203, 242) + n("CHy#", 407, 456) + "p"];
  }
}
const XB = 2467 + -1987 * 1, $B = -1354 + 1393 * 5 + -5371, Fr = 1419 * -3 + -9355 + 718 * 19, ds = 15, us = -1 * 757 + -7396 + -1 * -8161, qi = {};
qi.codec = "avc1.42E01E", qi.bitrate = 1e6;
const Eo = qi, AQ = 6213 + 1 * 6871 + 31 * -422, eQ = -1089 * 10 + -23397 + 64287;
class tQ {
  shouldBeTested = !0;
  testFramesSizesList = [];
  maximumTestFrames;
  maximumTestFramesSize;
  constructor(n, t) {
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = 2 * 3052 + -2053 + 1 * -4051;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class fs {
  encoder;
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw m.fromError("Encoding error: " + t);
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
function oQ(i) {
  if (!i) return !1;
  const n = fs.isSupported();
  return !n && m.logError("Video encoding is not supported in this browser."), n;
}
const Vi = {};
Vi.LOW = "low", Vi.STANDARD = "standard";
const sn = Vi, Zi = {};
Zi.SPS = "SPS", Zi.PPS = "PPS";
const zn = Zi;
class nQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 4, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      m.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, zn.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, zn.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === zn.SPS ? n[t] & -4 * -549 + 8419 * -1 + -1 * -6254 : n[t], o = t + 1;
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 377 * -1 + -1 * -3408 + -3031; r < e; r++) {
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
    if (t + (-1 * 1751 + 1650 + 103) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (3302 + -330 * 10), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class iQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, 1162 * -5 + 6667 * -1 + 12477, -1245 * 8 + -8906 + 18866, 10477 + 1746 * -6]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new nQ();
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
    const n = [];
    return this.parameterSets?.["sequenceParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.sequenceParameterSet)), this.parameterSets?.["pictureParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.pictureParameterSet)), n;
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
    if (t + (-77 + -1 * -3023 + -2942) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + 4, r = o + A;
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
    let A = -3499 * 1 + -4510 + 8009;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class rQ {
  chunks = [];
  maxChunksCount;
  constructor(n = us, t = Fr) {
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
    return this.chunks.slice(Math.max(-10034 + -29 * -346, n));
  }
}
class Wa {
  codec;
  bitrate;
  resolution;
  framerate;
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
    if (!this.codec) throw m.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw m.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class aQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (UI() && e > A) {
      const a = e, g = A, s = a / g, c = t * s;
      return { width: Math.floor(c / (4290 + 2319 * 1 + -6607)) * (5 * -391 + 622 * -11 + 8799), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / (3 * 1959 + -4209 + -1666)) * (1 * 7249 + -281 * 31 + -1464 * -1) };
    }
    const r = t * o;
    return { width: Math.floor(r / (7500 + -22 * 311 + -656)) * (11182 + -260 * 43), height: t };
  }
  create(n, t) {
    switch (n) {
      case sn.STANDARD:
        return new Wa().setBitrate(Eo.bitrate).setCodec(Eo.codec).setFramerate(Fr).setResolution(this.getScaledResolution(t, XB)).build();
      case sn.LOW:
        return new Wa().setBitrate(Eo.bitrate).setCodec(Eo.codec).setFramerate(ds).setResolution(this.getScaledResolution(t, $B)).build();
      default:
        throw m.logError("Unsupported preset for video encoder config");
    }
  }
}
class gQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = sn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new aQ(), this.chunkStorage = new rQ(), this.cameraFramerate = Fr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(us, ds), this.currentConfigPreset = sn.LOW, this.startRecording();
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
  async handleCameraPropsChange(n) {
    if (UI()) return;
    const t = n.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(n = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      m.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      m.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      m.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(n, this.currentResolution);
    } catch (e) {
      m.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      m.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(t), t.framerate && (this.cameraFramerate = t.framerate);
  }
  createVideoElement(n) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = n, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      m.logError("Video element is not created.");
      return;
    }
    let n = 0;
    const t = this.cameraFramerate, e = 1e3 / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === -1647 + -487 * 4 + 3595 * 1;
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
class IQ {
  videoProcessor;
  videoEncoder;
  qualityTester;
  cameraHandler;
  customEvent;
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
  setCustomEvent(n) {
    return this.customEvent = n, this;
  }
  validate() {
    if (!this.videoProcessor) throw m.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw m.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw m.logError("QualityTester is not set");
    if (!this.cameraHandler) throw m.logError("CameraHandler is not set");
    if (!this.customEvent) throw m.logError("CustomEvent is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new gQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class sQ {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!oQ(e)) return;
    const A = new tQ(AQ, eQ), o = new fs(), r = new iQ();
    return new IQ().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function cQ(i, n) {
  const { facingMode: t = br.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = qA(null), [o, r] = nA(), [a, g] = nA(), { handleError: s, setIsCameraReady: c } = $A(), I = De((E) => {
    g((x) => TC(E, x));
  }, []);
  Y(() => {
    if (!A.current) {
      s(new m("Something went wrong during video initialization"));
      return;
    }
    const E = new ZB(A.current), x = new jB(), Q = new _B(x), d = new ls(), f = new zB(), h = {};
    h.cameraHandler = d, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new sQ().create(h), y = {};
    y.videoHandler = E, y.cameraHandler = d, y.performanceCheckup = f, y.cameraEvaluator = Q, y.videoRecorder = p;
    const b = new VB(y);
    return (async () => {
      try {
        const D = {};
        D.facingMode = t, await b.startFirstVideoStream(D);
      } catch (D) {
        if (D instanceof Error) {
          s(m.fromCameraError(D));
          return;
        }
      }
      r(b), c(!0), I(b.getCameraResolution());
    })(), () => {
      b?.stopStreaming(), c(!1), r(void 0);
    };
  }, [t, s, c, A, I, e, i]);
  const B = {};
  return B.cameraService = o, B.cameraResolution = a, B.onCameraResolutionChange = I, B.videoRef = A, B;
}
function CQ({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = cQ(
    t,
    i
  ), a = hA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ w(An.Provider, { value: a, children: n });
}
function BQ({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = GB(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, bB(t.CAMERA_PROPS_CHANGED, A), Y(() => () => {
    Ee.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function QQ(i) {
  Y(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function EQ({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: a, onDetection: g, sessionToken: s }) {
  QQ(() => {
    t && t.destroy();
  });
  const { appState: c, firstRunningDone: I, handleAppStateChange: B, isCameraReady: E, setFirstRunningDone: x } = $A(), { sunfish: Q } = eo(), { analytics: d } = lB(), { transactionCounting: f } = YI(), { cameraResolution: h, cameraService: p, onCameraResolutionChange: y, videoRef: b } = UB(), k = {};
  k.cameraResolution = h, k.cameraService = p, k.customEvent = A;
  const { shouldCameraMirror: D } = BQ(k), T = As(void 0), z = p?.["isStreaming"] && t?.["isDetectorInitialized"] && Q && E, FA = De(async (X) => {
    B(CA.WAITING), a(X);
  }, [a, B]), yA = De((X, oo) => {
    y(X.resolution), T.value = X, g(X, oo);
  }, [g, T, y]);
  Y(() => {
    !I && z && (x(!0), B(CA.RUNNING));
  }, [z, B, I, x]), Y(() => {
    if (c !== CA.RUNNING || !z) return;
    if (!p || !t) throw new m("Cannot start detection");
    t.imageProcessor.reset();
    const X = {};
    return X.analytics = d, X.transactionCounting = f, X.cameraService = p, X.fallbackInstruction = o, X.instructionCodeMap = r, X.checkToInstructionCodeMap = n, X.sessionToken = s, X.createProtoMessage = e, X.onCaptureCallback = FA, X.onDetectionCallback = yA, t.createDetection(i, X), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [c, z, t, p, FA, yA, s, T, d, e, r, n, o, i, f]);
  const SA = {};
  return SA.videoRef = b, SA.cameraResolution = h, SA.detectionDetails = T, SA.shouldCameraMirror = D, SA;
}
const La = () => typeof document < "u" && document.hasFocus();
function xQ(i = {}) {
  const n = qA(i), t = qA(La()), [e, A] = nA(La);
  Y(() => {
    n.current = i;
  }), Y(() => {
    function r(c) {
      t.current = c, A(c);
    }
    function a() {
      Promise.resolve().then(() => {
        !t.current && (n.current.onFocus?.(), n.current.onChange?.(!0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        t.current && (n.current.onBlur?.(), n.current.onChange?.(!1)), r(!1);
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
function lQ(i = {}) {
  const { appState: n, firstRunningDone: t } = $A();
  xQ({ onBlur: () => {
    n === CA.WAITING || n === wa.DONE || !t || i.onBlur?.();
  }, onFocus: () => {
    n === CA.WAITING || n === wa.DONE || !t || i.onFocus?.();
  } });
}
function dQ(i) {
  const { redfin: n, freemiumOverlayState: t } = $A(), e = n === Po.Higher, A = t !== Ho.HIDDEN, o = A && !e && i, r = t === Ho.VISIBLE, a = {};
  return a.showFreemiumOverlay = o, a.showFullFreemiumOverlay = r, a;
}
const Mr = We(void 0);
Mr.displayName = "CommonThresholdsContext";
function uQ() {
  const i = Qe(Mr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function fQ() {
  return Nr() ? ba.MOBILE : ba.DESKTOP;
}
function hQ({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = nA(fQ()), r = hA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ w(Mr.Provider, { value: r, children: i });
}
const hs = {};
hs.min = 0.4;
const zi = {};
zi.min = 0.16, zi.max = 0.2;
const ps = {};
ps.min = 0.25;
const Xi = {};
Xi.min = 0.2, Xi.max = 0.85;
const ys = {};
ys.min = 0.05;
const ms = {};
ms.max = 30;
const ws = {};
ws.min = 0;
const $i = {};
$i.min = -1, $i.max = 1;
const Ar = {};
Ar.confidence = ws, Ar.status = $i;
const Ds = {};
Ds.min = 0;
const bs = {};
bs.confidence = Ds;
const ks = {};
ks.min = 0;
const Ss = {};
Ss.confidence = ks;
const ae = {};
ae.confidence = hs, ae.size = zi, ae.sharpness = ps, ae.brightness = Xi, ae.edgeDistanceToImageShorterSideRatio = ys, ae.devicePitchAngle = ms, ae.mouth = Ar, ae.leftEye = bs, ae.rightEye = Ss;
const Gs = {};
Gs.min = 0.4;
const er = {};
er.min = 0.16, er.max = 0.2;
const Ns = {};
Ns.min = 0.25;
const tr = {};
tr.min = 0.2, tr.max = 0.85;
const Rs = {};
Rs.min = 0.05;
const vs = {};
vs.max = 30;
const Fs = {};
Fs.min = 0;
const or = {};
or.min = -1, or.max = 1;
const nr = {};
nr.confidence = Fs, nr.status = or;
const Ms = {};
Ms.min = 0;
const Ws = {};
Ws.confidence = Ms;
const Ls = {};
Ls.min = 0;
const Os = {};
Os.confidence = Ls;
const ge = {};
ge.confidence = Gs, ge.size = er, ge.sharpness = Ns, ge.brightness = tr, ge.edgeDistanceToImageShorterSideRatio = Rs, ge.devicePitchAngle = vs, ge.mouth = nr, ge.leftEye = Ws, ge.rightEye = Os;
const ir = {};
ir.MOBILE = ae, ir.DESKTOP = ge;
const pQ = ir;
function yQ(i, n) {
  return {
    confidence: { min: i?.confidence?.min ?? n.confidence.min },
    size: {
      min: i?.size?.min ?? n.size.min,
      max: i?.size?.max ?? n.size.max
    },
    sharpness: { min: i?.sharpness?.min ?? n.sharpness.min },
    brightness: {
      min: i?.brightness?.min ?? n.brightness.min,
      max: i?.brightness?.max ?? n.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: i?.edgeDistanceToImageShorterSideRatio?.min ?? n.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: i?.devicePitchAngle?.max ?? n.devicePitchAngle.max },
    mouth: {
      confidence: { min: i?.mouth?.confidence?.min ?? n.mouth.confidence.min },
      status: {
        min: i?.mouth?.status.min ?? n.mouth.status.min,
        max: i?.mouth?.status.max ?? n.mouth.status.max
      }
    },
    leftEye: {
      confidence: { min: i?.leftEye?.confidence?.min ?? n.leftEye.confidence.min }
    },
    rightEye: {
      confidence: {
        min: i?.rightEye?.confidence?.min ?? n.rightEye.confidence.min
      }
    }
  };
}
function mQ({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ w(
    hQ,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: yQ,
      thresholdsPresets: pQ,
      children: i
    }
  );
}
function Js() {
  return uQ();
}
function wQ(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: gt(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: gt(i.rightEye.center, n) }, mouth: { ...i.mouth, center: gt(i.mouth.center, n) }, topLeft: gt(i.topLeft, n), bottomRight: gt(i.bottomRight, n), faceCenter: gt(i.faceCenter, n) };
}
function Us(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = NC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = a, s.left = g, NI(s);
}
const DQ = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  OI(i, o, "rgba(255, 0, 0, 0.3)", !0), Kt(i, e, "lime");
}, bQ = (i, n, t) => {
  const e = Us(n, t);
  Object.values(e).map((A) => Kt(i, A, "orange"));
};
function kQ({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = Js(), { redfin: o } = $A(), r = qA(null);
  if (Y(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, hC(r.current);
    const f = jo(i), h = JI(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      f
    ), p = SC(i);
    n.value && (DQ(r.current, n.value.processedImage.detection), bQ(
      r.current,
      n.value.processedImage.detection,
      i
    ), qn(r.current, f, "lime"), qn(r.current, h, "yellow"), qn(r.current, p, "blue"), Kt(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), Kt(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), Kt(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: a,
    detectionTime: g,
    fps: s,
    processedImage: { detection: c, instructionCode: I, invalidValidators: B, isEscalated: E },
    resolution: x,
    samVersion: Q
  } = n.value, d = {
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
    "Detection time": g,
    FPS: s,
    "Avg FPS": a,
    Tier: o,
    Instruction: I,
    Resolution: x,
    "Escalated instruction": E,
    "Component version": "8.0.2",
    "Thresholds preset": A
  };
  return Q && (d["SAM version"] = Q), B.length > 0 && (d["Invalid validators"] = B), /* @__PURE__ */ w(
    xB,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function SQ({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function GQ(i, n) {
  const [t, e] = nA(!1), A = () => e((a) => !a), o = "" + t;
  bt(() => {
    function a() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), B = {};
      return B.childList = !0, B.subtree = !0, B.attributes = !0, I.observe(i.current, B), I;
    }
    function g() {
      if (!i.current?.["parentElement"]) return;
      const I = new MutationObserver((E) => {
        E.find((Q) => {
          for (const d of Q.removedNodes)
            if (d !== n?.current && d === i.current)
              return !0;
        }) && A(), E.forEach((Q) => {
          Q.addedNodes.forEach((d) => {
            d !== n?.current && d.parentElement?.removeChild(d);
          });
        });
      }), B = {};
      return B.childList = !0, I.observe(i.current.parentElement, B), I;
    }
    const s = a(), c = g();
    return () => {
      c?.disconnect(), s?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const NQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function RQ({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = qA(null), { key: o } = GQ(A, t);
  return /* @__PURE__ */ w("div", { ref: A, style: NQ, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function vQ({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = GC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    RQ,
    {
      cutOut: i || /* @__PURE__ */ w(SQ, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function FQ({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = $A(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = dQ(i), a = qA(null), g = i && A === CA.RUNNING;
  return /* @__PURE__ */ w(vA, { children: [
    o && i && /* @__PURE__ */ w(
      vQ,
      {
        fullOverlay: r,
        ignoreElement: a,
        resolution: i
      }
    ),
    n,
    g && /* @__PURE__ */ w("div", { ref: a, children: /* @__PURE__ */ w(
      kQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const MQ = (i, n) => {
  if (KC()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    Ee.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Oa = {}, Xn = {}, $n, Ja;
function WQ() {
  if (Ja) return $n;
  Ja = 1, $n = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            g(s);
          else {
            for (var c = new Array(arguments.length - 1), I = 0; I < c.length; )
              c[I++] = arguments[I];
            a.apply(null, c);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, g(s));
      }
    });
  }
  return $n;
}
var Ua = {}, Ya;
function LQ() {
  return Ya || (Ya = 1, (function(i) {
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
      for (var s = null, c = [], I = 0, B = 0, E; a < g; ) {
        var x = r[a++];
        switch (B) {
          case 0:
            c[I++] = t[x >> 2], E = (x & 3) << 4, B = 1;
            break;
          case 1:
            c[I++] = t[E | x >> 4], E = (x & 15) << 2, B = 2;
            break;
          case 2:
            c[I++] = t[E | x >> 6], c[I++] = t[x & 63], B = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, c)), I = 0);
      }
      return B && (c[I++] = t[E], c[I++] = 61, B === 1 && (c[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, c.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, c.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var s = g, c = 0, I, B = 0; B < r.length; ) {
        var E = r.charCodeAt(B++);
        if (E === 61 && c > 1)
          break;
        if ((E = e[E]) === void 0)
          throw Error(o);
        switch (c) {
          case 0:
            I = E, c = 1;
            break;
          case 1:
            a[g++] = I << 2 | (E & 48) >> 4, I = E, c = 2;
            break;
          case 2:
            a[g++] = (I & 15) << 4 | (E & 60) >> 2, I = E, c = 3;
            break;
          case 3:
            a[g++] = (I & 3) << 6 | E, c = 0;
            break;
        }
      }
      if (c === 1)
        throw Error(o);
      return g - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(Ua)), Ua;
}
var Ai, Ta;
function OQ() {
  if (Ta) return Ai;
  Ta = 1, Ai = i;
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
  }, Ai;
}
var ei, Pa;
function JQ() {
  if (Pa) return ei;
  Pa = 1, ei = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function s(E, x, Q) {
        r[0] = E, x[Q] = a[0], x[Q + 1] = a[1], x[Q + 2] = a[2], x[Q + 3] = a[3];
      }
      function c(E, x, Q) {
        r[0] = E, x[Q] = a[3], x[Q + 1] = a[2], x[Q + 2] = a[1], x[Q + 3] = a[0];
      }
      o.writeFloatLE = g ? s : c, o.writeFloatBE = g ? c : s;
      function I(E, x) {
        return a[0] = E[x], a[1] = E[x + 1], a[2] = E[x + 2], a[3] = E[x + 3], r[0];
      }
      function B(E, x) {
        return a[3] = E[x], a[2] = E[x + 1], a[1] = E[x + 2], a[0] = E[x + 3], r[0];
      }
      o.readFloatLE = g ? I : B, o.readFloatBE = g ? B : I;
    })() : (function() {
      function r(g, s, c, I) {
        var B = s < 0 ? 1 : 0;
        if (B && (s = -s), s === 0)
          g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), c, I);
        else if (isNaN(s))
          g(2143289344, c, I);
        else if (s > 34028234663852886e22)
          g((B << 31 | 2139095040) >>> 0, c, I);
        else if (s < 11754943508222875e-54)
          g((B << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, c, I);
        else {
          var E = Math.floor(Math.log(s) / Math.LN2), x = Math.round(s * Math.pow(2, -E) * 8388608) & 8388607;
          g((B << 31 | E + 127 << 23 | x) >>> 0, c, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, s, c) {
        var I = g(s, c), B = (I >> 31) * 2 + 1, E = I >>> 23 & 255, x = I & 8388607;
        return E === 255 ? x ? NaN : B * (1 / 0) : E === 0 ? B * 1401298464324817e-60 * x : B * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function s(E, x, Q) {
        r[0] = E, x[Q] = a[0], x[Q + 1] = a[1], x[Q + 2] = a[2], x[Q + 3] = a[3], x[Q + 4] = a[4], x[Q + 5] = a[5], x[Q + 6] = a[6], x[Q + 7] = a[7];
      }
      function c(E, x, Q) {
        r[0] = E, x[Q] = a[7], x[Q + 1] = a[6], x[Q + 2] = a[5], x[Q + 3] = a[4], x[Q + 4] = a[3], x[Q + 5] = a[2], x[Q + 6] = a[1], x[Q + 7] = a[0];
      }
      o.writeDoubleLE = g ? s : c, o.writeDoubleBE = g ? c : s;
      function I(E, x) {
        return a[0] = E[x], a[1] = E[x + 1], a[2] = E[x + 2], a[3] = E[x + 3], a[4] = E[x + 4], a[5] = E[x + 5], a[6] = E[x + 6], a[7] = E[x + 7], r[0];
      }
      function B(E, x) {
        return a[7] = E[x], a[6] = E[x + 1], a[5] = E[x + 2], a[4] = E[x + 3], a[3] = E[x + 4], a[2] = E[x + 5], a[1] = E[x + 6], a[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = g ? I : B, o.readDoubleBE = g ? B : I;
    })() : (function() {
      function r(g, s, c, I, B, E) {
        var x = I < 0 ? 1 : 0;
        if (x && (I = -I), I === 0)
          g(0, B, E + s), g(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), B, E + c);
        else if (isNaN(I))
          g(0, B, E + s), g(2146959360, B, E + c);
        else if (I > 17976931348623157e292)
          g(0, B, E + s), g((x << 31 | 2146435072) >>> 0, B, E + c);
        else {
          var Q;
          if (I < 22250738585072014e-324)
            Q = I / 5e-324, g(Q >>> 0, B, E + s), g((x << 31 | Q / 4294967296) >>> 0, B, E + c);
          else {
            var d = Math.floor(Math.log(I) / Math.LN2);
            d === 1024 && (d = 1023), Q = I * Math.pow(2, -d), g(Q * 4503599627370496 >>> 0, B, E + s), g((x << 31 | d + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, B, E + c);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, s, c, I, B) {
        var E = g(I, B + s), x = g(I, B + c), Q = (x >> 31) * 2 + 1, d = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + E;
        return d === 2047 ? f ? NaN : Q * (1 / 0) : d === 0 ? Q * 5e-324 * f : Q * Math.pow(2, d - 1075) * (f + 4503599627370496);
      }
      o.readDoubleLE = a.bind(null, e, 0, 4), o.readDoubleBE = a.bind(null, A, 4, 0);
    })(), o;
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
  return ei;
}
function Ha(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ti, Ka;
function UQ() {
  if (Ka) return ti;
  Ka = 1, ti = i;
  function i(n) {
    try {
      if (typeof Ha != "function")
        return null;
      var t = Ha(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return ti;
}
var _a = {}, ja;
function YQ() {
  return ja || (ja = 1, (function(i) {
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
  })(_a)), _a;
}
var oi, qa;
function TQ() {
  if (qa) return oi;
  qa = 1, oi = i;
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
  return oi;
}
var ni, Va;
function PQ() {
  if (Va) return ni;
  Va = 1, ni = n;
  var i = it();
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
  }, ni;
}
var Za;
function it() {
  return Za || (Za = 1, (function(i) {
    var n = i;
    n.asPromise = WQ(), n.base64 = LQ(), n.EventEmitter = OQ(), n.float = JQ(), n.inquire = UQ(), n.utf8 = YQ(), n.pool = TQ(), n.LongBits = PQ(), n.isNode = !!(typeof It < "u" && It && It.process && It.process.versions && It.process.versions.node), n.global = n.isNode && It || typeof window < "u" && window || typeof self < "u" && self || Xn, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    }, n.Buffer = (function() {
      try {
        var A = n.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    })(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(A) {
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
  })(Xn)), Xn;
}
var ii, za;
function Ys() {
  if (za) return ii;
  za = 1, ii = g;
  var i = it(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(d, f, h) {
    this.fn = d, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(d) {
    this.head = d.head, this.tail = d.tail, this.len = d.len, this.next = d.states;
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
  g.create = s(), g.alloc = function(d) {
    return new i.Array(d);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(d, f, h) {
    return this.tail = this.tail.next = new o(d, f, h), this.len += f, this;
  };
  function c(d, f, h) {
    f[h] = d & 255;
  }
  function I(d, f, h) {
    for (; d > 127; )
      f[h++] = d & 127 | 128, d >>>= 7;
    f[h] = d;
  }
  function B(d, f) {
    this.len = d, this.next = void 0, this.val = f;
  }
  B.prototype = Object.create(o.prototype), B.prototype.fn = I, g.prototype.uint32 = function(d) {
    return this.len += (this.tail = this.tail.next = new B(
      (d = d >>> 0) < 128 ? 1 : d < 16384 ? 2 : d < 2097152 ? 3 : d < 268435456 ? 4 : 5,
      d
    )).len, this;
  }, g.prototype.int32 = function(d) {
    return d < 0 ? this._push(E, 10, t.fromNumber(d)) : this.uint32(d);
  }, g.prototype.sint32 = function(d) {
    return this.uint32((d << 1 ^ d >> 31) >>> 0);
  };
  function E(d, f, h) {
    for (; d.hi; )
      f[h++] = d.lo & 127 | 128, d.lo = (d.lo >>> 7 | d.hi << 25) >>> 0, d.hi >>>= 7;
    for (; d.lo > 127; )
      f[h++] = d.lo & 127 | 128, d.lo = d.lo >>> 7;
    f[h++] = d.lo;
  }
  g.prototype.uint64 = function(d) {
    var f = t.from(d);
    return this._push(E, f.length(), f);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(d) {
    var f = t.from(d).zzEncode();
    return this._push(E, f.length(), f);
  }, g.prototype.bool = function(d) {
    return this._push(c, 1, d ? 1 : 0);
  };
  function x(d, f, h) {
    f[h] = d & 255, f[h + 1] = d >>> 8 & 255, f[h + 2] = d >>> 16 & 255, f[h + 3] = d >>> 24;
  }
  g.prototype.fixed32 = function(d) {
    return this._push(x, 4, d >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(d) {
    var f = t.from(d);
    return this._push(x, 4, f.lo)._push(x, 4, f.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(d) {
    return this._push(i.float.writeFloatLE, 4, d);
  }, g.prototype.double = function(d) {
    return this._push(i.float.writeDoubleLE, 8, d);
  };
  var Q = i.Array.prototype.set ? function(d, f, h) {
    f.set(d, h);
  } : function(d, f, h) {
    for (var p = 0; p < d.length; ++p)
      f[h + p] = d[p];
  };
  return g.prototype.bytes = function(d) {
    var f = d.length >>> 0;
    if (!f)
      return this._push(c, 1, 0);
    if (i.isString(d)) {
      var h = g.alloc(f = e.length(d));
      e.decode(d, h, 0), d = h;
    }
    return this.uint32(f)._push(Q, f, d);
  }, g.prototype.string = function(d) {
    var f = A.length(d);
    return f ? this.uint32(f)._push(A.write, f, d) : this._push(c, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var d = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = d.next, this.tail = f, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var d = this.head.next, f = this.constructor.alloc(this.len), h = 0; d; )
      d.fn(d.val, f, h), h += d.len, d = d.next;
    return f;
  }, g._configure = function(d) {
    n = d, g.create = s(), n._configure();
  }, ii;
}
var ri, Xa;
function HQ() {
  if (Xa) return ri;
  Xa = 1, ri = t;
  var i = Ys();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = it();
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
  }, t._configure(), ri;
}
var ai, $a;
function Ts() {
  if ($a) return ai;
  $a = 1, ai = o;
  var i = it(), n, t = i.LongBits, e = i.utf8;
  function A(I, B) {
    return RangeError("index out of range: " + I.pos + " + " + (B || 1) + " > " + I.len);
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
      return (o.create = function(B) {
        return i.Buffer.isBuffer(B) ? new n(B) : r(B);
      })(I);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ (function() {
    var I = 4294967295;
    return function() {
      if (I = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (I = (I | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return I;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return I;
    };
  })(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var I = this.uint32();
    return I >>> 1 ^ -(I & 1) | 0;
  };
  function g() {
    var I = new t(0, 0), B = 0;
    if (this.len - this.pos > 4) {
      for (; B < 4; ++B)
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      if (I.lo = (I.lo | (this.buf[this.pos] & 127) << 28) >>> 0, I.hi = (I.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return I;
      B = 0;
    } else {
      for (; B < 3; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
      return I.lo = (I.lo | (this.buf[this.pos++] & 127) << B * 7) >>> 0, I;
    }
    if (this.len - this.pos > 4) {
      for (; B < 5; ++B)
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
    } else
      for (; B < 5; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(I, B) {
    return (I[B - 4] | I[B - 3] << 8 | I[B - 2] << 16 | I[B - 1] << 24) >>> 0;
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
  function c() {
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
    var I = this.uint32(), B = this.pos, E = this.pos + I;
    if (E > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(B, E);
    if (B === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, B, E);
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
    var B = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return g.call(this)[B](!1);
      },
      uint64: function() {
        return g.call(this)[B](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[B](!1);
      },
      fixed64: function() {
        return c.call(this)[B](!0);
      },
      sfixed64: function() {
        return c.call(this)[B](!1);
      }
    });
  }, ai;
}
var gi, Ag;
function KQ() {
  if (Ag) return gi;
  Ag = 1, gi = t;
  var i = Ts();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = it();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), gi;
}
var eg = {}, Ii, tg;
function _Q() {
  if (tg) return Ii;
  tg = 1, Ii = n;
  var i = it();
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
        function(s, c) {
          if (s)
            return g.emit("error", s, e), a(s);
          if (c === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(c instanceof o))
            try {
              c = o[g.responseDelimited ? "decodeDelimited" : "decode"](c);
            } catch (I) {
              return g.emit("error", I, e), a(I);
            }
          return g.emit("data", c, e), a(null, c);
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
  }, Ii;
}
var og;
function jQ() {
  return og || (og = 1, (function(i) {
    var n = i;
    n.Service = _Q();
  })(eg)), eg;
}
var ng, ig;
function qQ() {
  return ig || (ig = 1, ng = {}), ng;
}
var rg;
function VQ() {
  return rg || (rg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = Ys(), n.BufferWriter = HQ(), n.Reader = Ts(), n.BufferReader = KQ(), n.util = it(), n.rpc = jQ(), n.roots = qQ(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(Oa)), Oa;
}
var ag, gg;
function ZQ() {
  return gg || (gg = 1, ag = VQ()), ag;
}
var S = ZQ();
const u = S.Reader, G = S.Writer, l = S.util, C = S.roots.default || (S.roots.default = {}), nt = C.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = l.newBuffer([]), n.prototype.iv = l.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Content();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.Content)
        return t;
      let e = new C.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  })(), i.v4 = (function() {
    const n = {};
    return n.MagnifEyeLivenessContent = (function() {
      function t(A) {
        if (this.images = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.images = l.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.images != null && A.images.length)
          for (let r = 0; r < A.images.length; ++r)
            C.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(C.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = C.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new C.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = C.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = C.dot.Image.toObject(A.images[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    })(), n.Metadata = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
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
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && C.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && C.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && C.dot.v4.IosMetadata.encode(A.ios, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.Metadata();
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
              g.web = C.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = C.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = C.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = C.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = C.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = C.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Metadata)
          return A;
        let o = new C.dot.v4.Metadata();
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
          o.web = C.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = C.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = C.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? C.dot.Platform[A.platform] === void 0 ? A.platform : C.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = C.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = C.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = C.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    })(), n.AndroidMetadata = (function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: l.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.supportedAbis != null && A.supportedAbis.length)
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
            ).string(r[a]), C.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            C.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && C.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && C.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && C.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && C.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.AndroidMetadata(), s, c;
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
              g.camera = C.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === l.emptyObject && (g.dynamicCameraFrameProperties = {});
              let B = A.uint32() + A.pos;
              for (s = "", c = null; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    c = C.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = c;
              break;
            }
            case 8: {
              g.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              g.croppedYuv420Image = C.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!l.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = C.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = C.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = C.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = C.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = C.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = C.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.AndroidMetadata)
          return A;
        let o = new C.dot.v4.AndroidMetadata();
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
          o.camera = C.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = C.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = C.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = C.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, o.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = C.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digests[g] = o.bytes === String ? l.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = C.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    })(), n.AndroidCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.AndroidCamera)
          return e;
        let A = new C.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = C.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = C.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    })(), n.Yuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = C.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Yuv420Image)
          return e;
        let A = new C.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = l.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = l.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    })(), n.Yuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = C.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = C.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new C.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = C.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    })(), n.IosMetadata = (function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: l.oneOfGetter(e = ["camera"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: l.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: l.oneOfGetter(e = ["croppedYuv420Image"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: l.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
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
            C.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && C.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && C.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && C.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && C.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.IosMetadata(), s, c;
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
              g.architectureInfo === l.emptyObject && (g.architectureInfo = {});
              let B = A.uint32() + A.pos;
              for (s = "", c = !1; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    c = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              g.architectureInfo[s] = c;
              break;
            }
            case 6: {
              g.camera = C.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (I & 7) === 2) {
                let B = A.uint32() + A.pos;
                for (; A.pos < B; )
                  g.isoValues.push(A.int32());
              } else
                g.isoValues.push(A.int32());
              break;
            }
            case 8: {
              g.croppedYuv420Image = C.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let o = Object.keys(A.architectureInfo);
          for (let r = 0; r < o.length; ++r)
            if (typeof A.architectureInfo[o[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = C.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = C.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = C.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let o = 0; o < A.isoValues.length; ++o)
            if (!l.isInteger(A.isoValues[o]))
              return "isoValues: integer[] expected";
        }
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = C.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = C.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.IosMetadata)
          return A;
        let o = new C.dot.v4.IosMetadata();
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
          o.camera = C.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = C.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = C.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
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
          o.croppedYuv420Image = C.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digests[g] = o.bytes === String ? l.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            r.isoValues[g] = A.isoValues[g];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    })(), n.IosCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosCamera)
          return e;
        let A = new C.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = C.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = C.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    })(), n.IosYuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uvPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = C.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || l.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosYuv420Image)
          return e;
        let A = new C.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? l.base64.decode(e.uvPlane, A.uvPlane = l.newBuffer(l.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = l.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? l.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    })(), n.IosYuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = C.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = C.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new C.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = C.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    })(), n.WebMetadata = (function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: l.oneOfGetter(e = ["croppedImage"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: l.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: l.oneOfGetter(e = ["platformDetails"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            C.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
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
            C.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            C.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && C.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && C.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && C.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.currentCameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(C.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(C.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(C.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = C.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = C.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let o = C.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = C.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            if (!l.isString(A.hashedDetectedImages[o]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            let r = C.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = C.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = C.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = C.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = C.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.WebMetadata)
          return A;
        let o = new C.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = C.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = C.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
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
            o.hashedDetectedImagesWithTimestamp[r] = C.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = C.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = C.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = C.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = C.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = C.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = C.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = C.dot.v4.DetectedObject.toObject(A.detectionRecord[a], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = C.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = C.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = C.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = C.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    })(), n.HashedDetectedImageWithTimestamp = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new C.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", l.Long) {
            let r = new l.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    })(), n.MediaTrackSettings = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
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
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.MediaTrackSettings();
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
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.MediaTrackSettings)
          return A;
        let o = new C.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (o.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (o.autoGainControl = !!A.autoGainControl), A.channelCount != null && (o.channelCount = A.channelCount | 0), A.deviceId != null && (o.deviceId = String(A.deviceId)), A.displaySurface != null && (o.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (o.echoCancellation = !!A.echoCancellation), A.facingMode != null && (o.facingMode = String(A.facingMode)), A.frameRate != null && (o.frameRate = Number(A.frameRate)), A.groupId != null && (o.groupId = String(A.groupId)), A.height != null && (o.height = A.height | 0), A.noiseSuppression != null && (o.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (o.sampleRate = A.sampleRate | 0), A.sampleSize != null && (o.sampleSize = A.sampleSize | 0), A.width != null && (o.width = A.width | 0), A.deviceName != null && (o.deviceName = String(A.deviceName)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, o.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, o.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, o.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, o.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, o.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, o.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, o.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    })(), n.ImageBitmap = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.ImageBitmap();
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.ImageBitmap)
          return e;
        let A = new C.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    })(), n.CameraProperties = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && C.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = C.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = C.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = C.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.CameraProperties)
          return A;
        let o = new C.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = C.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = C.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = C.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = C.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    })(), n.DetectedObject = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && C.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && C.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && C.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && C.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && C.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.DetectedObject();
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
              a.faceCenter = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
          let A = C.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = C.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = C.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = C.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = C.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.DetectedObject)
          return e;
        let A = new C.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = C.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = C.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = C.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = C.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = C.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = C.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = C.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = C.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = C.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = C.dot.v4.Point.toObject(e.topRight, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    })(), n.Point = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.Point();
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Point)
          return e;
        let A = new C.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    })(), n.ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = C.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.ImageCrop)
          return e;
        let A = new C.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = C.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    })(), n.PlatformDetails = (function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = l.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: l.oneOfGetter(e = ["platform"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: l.oneOfGetter(e = ["platformVersion"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: l.oneOfGetter(e = ["architecture"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: l.oneOfGetter(e = ["model"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && o.uint32(
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
            C.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.PlatformDetails();
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
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(C.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !l.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !l.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !l.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !l.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !l.isString(A.model))
          return "model: string expected";
        if (A.browserVersions != null && A.hasOwnProperty("browserVersions")) {
          if (!Array.isArray(A.browserVersions))
            return "browserVersions: array expected";
          for (let o = 0; o < A.browserVersions.length; ++o) {
            let r = C.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.PlatformDetails)
          return A;
        let o = new C.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = C.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = C.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    })(), n.BrowserVersion = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.BrowserVersion();
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !l.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !l.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.BrowserVersion)
          return e;
        let A = new C.dot.v4.BrowserVersion();
        return e.name != null && (A.name = String(e.name)), e.version != null && (A.version = String(e.version)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.name = "", o.version = ""), e.name != null && e.hasOwnProperty("name") && (o.name = e.name), e.version != null && e.hasOwnProperty("version") && (o.version = e.version), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    })(), n.FaceContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.FaceContent)
          return A;
        let o = new C.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    })(), n.DocumentContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.DocumentContent)
          return A;
        let o = new C.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    })(), n.Blob = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && C.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && C.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && C.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && C.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && C.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && C.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && C.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && C.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.Blob();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.documentContent = C.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = C.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = C.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = C.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = C.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = C.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Blob)
          return A;
        let o = new C.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = C.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = C.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = C.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = C.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = C.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = C.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = C.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = C.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = C.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = C.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    })(), n.TravelDocumentContent = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && C.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && C.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = C.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = C.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = C.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = C.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = C.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.TravelDocumentContent)
          return e;
        let A = new C.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = C.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = C.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = C.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? C.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : C.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = C.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = C.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    })(), n.LdsMasterFile = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && C.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? a.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = C.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.LdsMasterFile)
          return e;
        let A = new C.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    })(), n.Lds1eMrtdApplication = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
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
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && C.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && C.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && C.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && C.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && C.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && C.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && C.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && C.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && C.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && C.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && C.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new C.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    })(), n.Lds1ElementaryFile = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.Lds1ElementaryFile();
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
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
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
        if (A instanceof C.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new C.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, o.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? C.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : C.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "ID_UNSPECIFIED"] = 0, o[A[1] = "ID_COM"] = 1, o[A[2] = "ID_SOD"] = 2, o[A[3] = "ID_DG1"] = 3, o[A[4] = "ID_DG2"] = 4, o[A[5] = "ID_DG3"] = 5, o[A[6] = "ID_DG4"] = 6, o[A[7] = "ID_DG5"] = 7, o[A[8] = "ID_DG7"] = 8, o[A[9] = "ID_DG8"] = 9, o[A[10] = "ID_DG9"] = 10, o[A[11] = "ID_DG10"] = 11, o[A[12] = "ID_DG11"] = 12, o[A[13] = "ID_DG12"] = 13, o[A[14] = "ID_DG13"] = 14, o[A[15] = "ID_DG14"] = 15, o[A[16] = "ID_DG15"] = 16, o[A[17] = "ID_DG16"] = 17, o;
      })(), t;
    })(), n.AccessControlProtocol = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    })(), n.AuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && C.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && C.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = C.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = C.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = C.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = C.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.AuthenticationStatus)
          return e;
        let A = new C.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = C.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = C.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = C.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = C.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    })(), n.DataAuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.DataAuthenticationStatus();
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        if (e instanceof C.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new C.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? C.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : C.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? C.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : C.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
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
    })(), n.ChipAuthenticationStatus = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
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
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.ChipAuthenticationStatus();
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
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
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
        if (A instanceof C.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new C.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : C.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "STATUS_UNSPECIFIED"] = 0, o[A[1] = "STATUS_AUTHENTICATED"] = 1, o[A[2] = "STATUS_DENIED"] = 2, o[A[3] = "STATUS_NOT_SUPPORTED"] = 3, o;
      })(), t.Protocol = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, o[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, o[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, o[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, o;
      })(), t;
    })(), n.EyeGazeLivenessContent = (function() {
      function t(A) {
        if (this.segments = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.segments = l.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: l.oneOfGetter(e = ["image"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            C.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 3: {
              g.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(C.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = C.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new C.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = C.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = C.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    })(), n.EyeGazeLivenessSegment = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.EyeGazeLivenessSegment();
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
              a.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
          let A = C.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new C.dot.v4.EyeGazeLivenessSegment();
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
          A.image = C.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? C.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : C.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.Image.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    })(), n.EyeGazeLivenessCorner = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    })(), n.MultiRangeLivenessContent = (function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.stepResults = l.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.stepResults != null && A.stepResults.length)
          for (let r = 0; r < A.stepResults.length; ++r)
            C.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && C.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(C.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = C.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = C.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new C.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = C.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = C.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    })(), n.MultiRangeLivenessStepResult = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.MultiRangeLivenessStepResult();
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
              a.image = C.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
          let A = C.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new C.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = C.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? C.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : C.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.ImageWithTimestamp.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    })(), n.MultiRangeLivenessChallengeItem = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    })(), n.MultiRangeLivenessMetadata = (function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.detections = l.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = G.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            C.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? (a.detections && a.detections.length || (a.detections = []), a.detections.push(C.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let o = C.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new C.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = C.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = C.dot.v4.FaceDetection.toObject(e.detections[r], A);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    })(), n.FaceDetection = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && C.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.FaceDetection();
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
              a.position = C.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = C.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.FaceDetection)
          return e;
        let A = new C.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = C.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (l.Long) {
            let r = new l.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = C.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    })(), n.FaceDetectionPosition = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && C.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = C.dot.PointDouble.decode(e, e.uint32());
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = C.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.FaceDetectionPosition)
          return e;
        let A = new C.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = C.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = C.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    })(), n.SmileLivenessContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && C.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && C.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = C.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = C.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.SmileLivenessContent)
          return A;
        let o = new C.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = C.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = C.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = C.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = C.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    })(), n.PalmContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new C.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.PalmContent)
          return A;
        let o = new C.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    })(), n;
  })(), i.Image = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Image();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.Image)
        return t;
      let e = new C.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  })(), i.ImageWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.image = null, n.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && C.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = C.dot.Image.decode(t, t.uint32());
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = C.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.ImageWithTimestamp)
        return t;
      let e = new C.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = C.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, l.Long) {
          let o = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = C.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
    }, n;
  })(), i.ImageSize = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.width = 0, n.prototype.height = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.ImageSize();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.ImageSize)
        return t;
      let e = new C.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, n;
  })(), i.Int32List = (function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = l.emptyArray, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Int32List();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
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
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.Int32List)
        return t;
      let e = new C.dot.Int32List();
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
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, n;
  })(), i.Platform = (function() {
    const n = {}, t = Object.create(n);
    return t[n[0] = "WEB"] = 0, t[n[1] = "ANDROID"] = 1, t[n[2] = "IOS"] = 2, t;
  })(), i.RectangleDouble = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.left = 0, n.prototype.top = 0, n.prototype.right = 0, n.prototype.bottom = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.RectangleDouble();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.RectangleDouble)
        return t;
      let e = new C.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, n;
  })(), i.DigestWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = l.newBuffer([]), n.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.DigestWithTimestamp();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.DigestWithTimestamp)
        return t;
      let e = new C.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let o = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  })(), i.Video = (function() {
    function n(e) {
      if (e)
        for (let A = Object.keys(e), o = 0; o < A.length; ++o)
          e[A[o]] != null && (this[A[o]] = e[A[o]]);
    }
    n.prototype.bytes = null, n.prototype.containerMp4 = null, n.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(n.prototype, "_bytes", {
      get: l.oneOfGetter(t = ["bytes"]),
      set: l.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: l.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: l.oneOfSetter(t)
    }), n.create = function(e) {
      return new n(e);
    }, n.encode = function(e, A) {
      return A || (A = G.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && C.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && C.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof u || (e = u.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new C.dot.Video();
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
            a.containerMp4 = C.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = C.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, n.decodeDelimited = function(e) {
      return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || l.isString(e.bytes))))
        return "bytes: buffer expected";
      if (e.containerMp4 != null && e.hasOwnProperty("containerMp4")) {
        A.content = 1;
        {
          let o = C.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = C.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof C.dot.Video)
        return e;
      let A = new C.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = C.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = C.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = C.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = C.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, n;
  })(), i.VideoContainer = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.VideoContainer();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.VideoContainer)
        return t;
      let e = new C.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, n;
  })(), i.VideoStream = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = l.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.VideoStream();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.VideoStream)
        return t;
      let e = new C.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, n;
  })(), i.PointInt = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.PointInt();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !l.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !l.isInteger(t.y) ? "y: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.PointInt)
        return t;
      let e = new C.dot.PointInt();
      return t.x != null && (e.x = t.x | 0), t.y != null && (e.y = t.y | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = t.x), t.y != null && t.hasOwnProperty("y") && (A.y = t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, n;
  })(), i.PointDouble = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.PointDouble();
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.PointDouble)
        return t;
      let e = new C.dot.PointDouble();
      return t.x != null && (e.x = Number(t.x)), t.y != null && (e.y = Number(t.y)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = e.json && !isFinite(t.x) ? String(t.x) : t.x), t.y != null && t.hasOwnProperty("y") && (A.y = e.json && !isFinite(t.y) ? String(t.y) : t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  })(), i;
})();
(function(i, n) {
  function t(a, g, s, c, I) {
    return j(a - 949, c);
  }
  function e(a, g, s, c, I) {
    return j(g - -314, a);
  }
  function A(a, g, s, c, I) {
    return j(s - -311, g);
  }
  function o(a, g, s, c, I) {
    return j(I - -197, a);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(40, "k#TR", 115, 23, 67)) / 1 * (-parseInt(o("wv3e", 315, 273, 274, 347)) / 2) + -parseInt(A(292, "A#l!", 314, 209, 300)) / 3 + -parseInt(A(138, "W^Md", 189, 220, 202)) / 4 + -parseInt(t(1440, 1521, 1547, "rO5L", 1330)) / 5 * (-parseInt(A(235, "iwSc", 276, 381, 261)) / 6) + parseInt(t(1522, 1518, 1519, "rO5L", 1619)) / 7 * (parseInt(t(1520, 1488, 1427, "N5Cm", 1441)) / 8) + -parseInt(A(127, "zgv]", 162, 137, 62)) / 9 * (parseInt(t(1484, 1509, 1510, "vXmB", 1514)) / 10) + parseInt(e("w0IL", 270, 164, 209, 373)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(cn, 49196 + -142239 * 1 + 318455);
function j(i, n) {
  i = i - (7197 + 6791 * -1);
  const t = cn();
  let e = t[i];
  if (j.GXVHfX === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    j.TkSfeO = g, j.UhDodQ = {}, j.GXVHfX = !0;
  }
  const o = t[441 + -1 * 441], r = i + o, a = j.UhDodQ[r];
  return a ? e = a : (j.soJeSe === void 0 && (j.soJeSe = !0), e = j.TkSfeO(e, n), j.UhDodQ[r] = e), e;
}
function zQ() {
  function i(c, I, B, E, x) {
    return j(E - -250, c);
  }
  const n = a(1025, 1035, 997, "N5Cm") + a(909, 857, 884, "olMV") + i("vSw4", 329, 309, 358) + i("@^&X", 339, 323, 330) + g(1417, 1217, 1335, "C8t#") + i("wv3e", 431, 455, 387) + t(322, "byR@", 260) + t(308, "tvXG", 190) + s(38, 78, -68, "k#TR") + g(1428, 1306, 1386, "4)%A") + a(1100, 1030, 1002, "iwSc") + i("aPew", 166, 345, 237) + s(-10, 99, -28, "W^Md") + g(1333, 1402, 1399, "wv3e") + s(41, 61, 54, "aPew") + i("eok8", 375, 231, 282) + t(396, "W^Md", 306) + s(-112, -152, -208, "tmAd") + g(1422, 1271, 1352, "j)Se") + a(923, 934, 948, "6*1p") + i("R6cD", 269, 109, 183) + a(888, 909, 890, "Aqp4") + s(92, 147, 79, "iwSc") + t(144, "4)%A", 257) + t(252, "P6kE", 170) + a(896, 845, 954, "Aqp4") + t(251, "zgv]", 351) + i(")HAe", 254, 219, 182) + s(-44, 11, -77, "W^Md") + i("r(na", 269, 253, 342) + a(892, 840, 908, "vSw4") + a(1022, 934, 998, "&]l@") + g(1483, 1514, 1544, "j)Se") + i("W^Md", 245, 310, 269) + s(-14, -64, -128, "&]l@") + t(444, "C8t#", 366) + t(345, "wv3e", 267) + a(1136, 932, 1041, "iwSc") + g(1542, 1485, 1479, "iwSc") + i("iwSc", 343, 263, 341) + t(146, "#y1k", 219) + t(308, "enSC", 282) + s(-107, -32, -79, "N5Cm") + a(1017, 947, 963, "aPew") + a(1089, 934, 1005, "k#TR") + t(227, "6*1p", 147) + g(1543, 1435, 1531, "hI[N") + s(-139, -41, -222, "mKzS") + t(307, "Fe%k", 340) + a(987, 1099, 988, "tmAd") + t(286, "Fe%k", 377) + s(-86, -91, -49, "P6kE") + i("q58(", 351, 270, 260) + t(150, "R6cD", 252) + g(1261, 1456, 1376, "9r(o") + a(1020, 919, 1004, "vrh@") + s(-33, -94, -143, "6*1p") + i("rO5L", 304, 243, 313) + t(453, "mKzS", 378) + g(1498, 1464, 1397, "C8t#") + i("UdT%", 325, 303, 340) + g(1388, 1304, 1332, "UdT%") + g(1234, 1388, 1324, "rO5L") + a(964, 1025, 952, "&]l@") + s(-138, -224, -249, "N5Cm") + a(861, 798, 906, "xOY#") + s(83, 48, 166, "7It3") + t(176, "s]2!", 205) + s(-128, -115, -115, "vrh@") + a(977, 898, 1011, "C8t#") + i("q58(", 406, 355, 364) + t(147, "j)Se", 188) + a(1114, 973, 1025, "rO5L") + g(1417, 1537, 1517, "byR@") + s(-141, -224, -57, "Gi#$") + g(1360, 1438, 1438, "hI[N") + a(994, 1039, 1006, "k#TR") + s(-31, -55, -28, "byR@") + t(177, "mKzS", 202) + i("x28m", 165, 101, 178) + i("tvXG", 202, 228, 185) + t(297, "UdT%", 380) + g(1426, 1321, 1412, "UdT%") + g(1470, 1356, 1372, "Gi#$") + s(6, -46, 84, "zgv]") + t(225, "UdT%", 242) + g(1512, 1485, 1525, "A#l!") + g(1300, 1304, 1404, "vSw4") + i("wv3e", 249, 258, 177) + a(1026, 1016, 922, "Aqp4") + a(1007, 841, 924, "N5Cm") + a(845, 958, 916, "R6cD") + s(20, -83, -62, "VD#a") + i("zra3", 218, 114, 165) + a(985, 948, 876, "&]l@") + g(1520, 1525, 1487, ")HAe") + g(1411, 1395, 1363, "olMV") + g(1460, 1249, 1342, "P6kE") + t(387, "C8t#", 316) + i("rO5L", 196, 214, 240) + g(1535, 1490, 1548, "6*1p") + t(333, "7It3", 227) + a(1011, 989, 897, "uAdF") + a(755, 977, 861, "wv3e") + s(-135, -42, -80, "wv3e") + g(1447, 1511, 1424, "C8t#") + a(898, 875, 960, "wv3e") + a(1056, 930, 1023, "y7jq") + s(-34, -108, 79, "#y1k") + a(1013, 1045, 1039, "@^&X") + a(957, 1083, 983, "hI[N") + a(892, 912, 970, "Fe%k") + s(62, 169, 48, "enSC") + s(-118, -173, -210, "w0IL") + t(352, "BJHs", 303) + t(152, "&]l@", 199) + s(56, 27, 146, "VD#a") + s(-91, 17, -82, "x28m") + g(1501, 1426, 1537, "@^&X") + s(69, -21, 173, "hI[N") + t(256, "&]l@", 204) + t(259, "BJHs", 342) + a(911, 878, 898, ")HAe") + s(-109, -137, -157, "#y1k") + i("zgv]", 279, 249, 169) + i("C8t#", 375, 192, 258) + a(981, 893, 920, "enSC") + s(81, 193, -28, "6*1p") + i("olMV", 275, 204, 306) + g(1437, 1228, 1334, "R6cD") + a(1086, 937, 993, "Aqp4") + g(1302, 1400, 1341, "q58(") + s(10, -99, 54, "q58(") + a(1013, 939, 1019, "x28m") + i("vSw4", 220, 369, 276) + i("N5Cm", 141, 123, 193) + s(-25, 67, -56, "Gi#$") + t(134, "vSw4", 216) + a(904, 933, 985, "olMV") + s(67, 32, 94, "rO5L") + t(277, "s]2!", 251) + i("N5Cm", 279, 222, 335) + a(1050, 1084, 974, "y7jq") + g(1519, 1514, 1468, "BJHs") + s(7, -94, -46, "vSw4") + t(299, "l#8R", 288) + t(244, "tmAd", 211) + a(1059, 965, 964, "@^&X") + t(334, "Aqp4", 336) + t(250, "zra3", 305) + i("A#l!", 363, 182, 277) + g(1454, 1274, 1373, "iwSc") + s(-43, -38, -37, "Gi#$") + a(952, 940, 871, "olMV") + g(1537, 1373, 1451, "VD#a") + g(1343, 1348, 1420, "tmAd") + t(317, "r(na", 361) + g(1341, 1462, 1457, "N5Cm") + i("Fe%k", 381, 379, 361) + a(948, 993, 1056, "wv3e") + s(86, 171, 166, "UdT%") + s(-137, -28, -161, "tvXG") + a(875, 881, 918, "q58(") + i("@^&X", 142, 163, 200) + s(-126, -16, -193, "x28m") + s(-127, -113, -22, "aPew") + g(1354, 1428, 1343, "byR@") + a(908, 875, 980, "tmAd") + g(1429, 1290, 1387, "iwSc") + t(173, "UdT%", 263) + g(1426, 1406, 1494, "cNPM") + g(1596, 1531, 1496, "s]2!") + a(1009, 968, 965, "vXmB") + t(191, "enSC", 269) + a(767, 772, 852, "iwSc") + a(923, 1105, 1018, "7It3") + t(209, "7It3", 179) + i("@^&X", 264, 275, 234) + i(")HAe", 294, 261, 261) + a(916, 903, 870, "zra3") + i("vXmB", 318, 319, 373) + g(1326, 1329, 1416, "W^Md") + g(1548, 1448, 1554, "eok8") + g(1447, 1480, 1389, "Fe%k") + t(370, "y7jq", 360) + t(152, "UdT%", 221) + t(445, "&]l@", 374) + t(145, "x28m", 231) + a(836, 811, 882, "#y1k") + a(876, 987, 976, ")HAe") + s(4, -33, 3, "@^&X") + g(1355, 1286, 1330, "x28m") + t(336, "R6cD", 235) + g(1491, 1499, 1524, "6*1p") + g(1437, 1522, 1516, "zgv]") + s(-2, -53, 79, "6*1p") + a(907, 973, 932, "x28m") + t(358, "6*1p", 284) + a(1036, 907, 945, "q58(") + i("UdT%", 366, 329, 322);
  function t(c, I, B, E, x) {
    return j(B - -261, I);
  }
  const e = window[g(1456, 1336, 1425, "zra3")](n), A = window[g(1476, 1473, 1466, "W^Md")](e), o = YB(A), r = {};
  function a(c, I, B, E, x) {
    return j(B - 423, E);
  }
  r[a(986, 909, 1017, "&]l@")] = SI, r[a(1121, 1037, 1047, "rO5L")] = OC;
  function g(c, I, B, E, x) {
    return j(B - 918, E);
  }
  function s(c, I, B, E, x) {
    return j(c - -548, E);
  }
  return window[s(-102, -169, -10, "&]l@") + "o"][s(-106, -134, -198, "7It3") + "e"][s(-59, -130, -1, "r(na") + i("hI[N", 164, 275, 187)](g(1638, 1493, 1523, "iwSc"), o, r, !0, [a(965, 1139, 1043, "mKzS") + "pt"]);
}
function cn() {
  const i = ["W5SHWOe+ua", "AfNcPYFdKW", "WOZdLeKAWO4", "WRKcWRddQXy", "W7RdMW95W5ZdQmoRBJrqFJ9w", "W48btCkEfa", "AgtdO1RcMq", "WQS9WRFcTYW", "WP7cU19WWRe", "W7FcQghdTCol", "W5tcQx8jWOC", "WPlcT8kBoG", "W5FcRwqqWOC", "WONcMmkBD8oH", "AwuRWQWZ", "eNr+xmkO", "W4v2jqtcUW", "W5GeWPmyvG", "wmkKWQ9pWQ8", "WR7cP8kdqtm", "W4BcKZpcT8o/", "ACoqpCojxa", "bSoObSkMWRK", "WQBcHKKpWQ0", "jmoshZ1M", "dmobwSoiDG", "FuWWWR1M", "W6ZcUgxcGCov", "WOaeWOxcR00", "WP/cRSk9oda", "WRDBomoedG", "WPFcNXtcTu4", "nvrsdqe", "W5OtW70muq", "y0xcJI3dNG", "WOuJW4ZdNXq", "WRNdMG/cJ8oz", "WQ3dIYFdNJW", "W5aBW7Ktpa", "imowA8khW6fsW5jCh8o3W53cQW", "W7faW43cSxVdNmkSdxbvFCohra", "lwH4mq4", "WPZcH1mVWRq", "W44iE8kCqa", "n8k6cCk9WOG", "WPvoxxKY", "D8kZd8okWOa", "nMpcSINdSW", "vYefq2n+d1dcRSkpD8oe", "W4dcISoLiaq", "W4BcMmk7rYq", "W6ddUSk0vNS", "WQRcMvqI", "jf0Nw8ku", "A8oDW6JdMSoH", "WRfCWPZdGw8", "WPb3Ce8U", "ebz2ACk4", "sCoGW6uRgG", "W6jUf8oChq", "W5nJmYel", "mfldRxpcGa", "wuTuW50f", "er3cTvv8W7lcNSkEeCkHW6W", "qmkVgbvQ", "mqi6W7/dTW", "W5jGsqyq", "DbdcHxi7", "DCk/WPlcM8oj", "AftdGNlcVa", "WQxcMSkdoCoB", "WP3cGfb1WRe", "WOZcOxtdVtS", "kqTKsSk2", "WQCoWPJdO3S", "WPj/nCoWr8kmWOm6uwiF", "W5uoWPxdH0i", "dKNdRgWHW5fnWOiR", "W7CyB8kmiG", "W5qOW5a+qa", "sSkygWxcRG", "WRBcTv5UWPK", "W794CIZcVW", "jqW9WORdMG", "WR5IDfC1", "j8kBl8kzW6q", "WPGUWOVcMmon", "WQutWPVcTmo4", "W4/cNmo2c8oGW4ieW7i9z8oCbSkZwW", "W4P0tCkijG", "WO4cWRNcRmo6", "ChrBWORdImo5mWiAmW", "WRxcSvSmWRi", "c8kZAmkZWQG", "WRKAWQdcOIG", "CsfEW7tdIa", "W7ZcUSoiyX0", "AqxcGKtcMZbkf2q", "W7atW5CD", "EJGwW6Tv", "WOVcTCoGimka", "WPOBWRZcUWW", "qmkbWOeObG", "hCoYASo8xG", "WQ97WQRcVKa", "W6VdP8kvBhS", "BHFcM2Sk", "x8oKWQpdVCox", "WORdHYNcGJG", "mJahW5m", "W4lcGSkSjt0", "W6xdPttcNL0", "WRnxamkypa", "WQLbWOLppKTek8k7W6RdHCoJ", "yaxcLdRdKW", "W7VdJmkUBu0", "t8kfWO03ja", "kCkVhYDu", "Dvy/WQ81", "sc7cGxPC", "WQHfs3CO", "vSo4eqCk", "fa4EW6/dIq", "WObwzhb8", "WPddMSktcwu", "WPnnWRFdPMy", "WQZdH8ohmHu", "xSouoCknWO0", "vb3cPLC", "W6VdPeldHHWjoCkpna9hWPa", "ExRcUGSB", "WPlcPt0TWOC", "FCkGbSk5", "WOhcLSkdfJa", "WQRcOSkeaXO", "odq3WP9T", "W4ldT8ocBSk9W6X0W4nWWRRcP2hdMCoU", "j0zYlJ0", "WQeGWP3dIbW", "W5ngW7Ctpq", "W63dQ2JcUCkK", "jvH0iqe", "W5NdPmkWuxm", "WOhdS8kHlhq", "nrunW7ZdKG", "WOaLWRZcQWu", "EKRcH3GY", "W63cSdhdT8oC", "WRJcISk/pdO", "WOldO8kMh1e", "W7ujB8kqpW", "W7qnA3OB", "W67cICodk8o2", "bcjWdGy", "WROpW4BcRZO", "WQBcT8kCdSoN", "W6aCW6mJrG", "WRBcU2fUWPi", "WO5saCoPW7v2W5noWR4", "sSopWPiGda", "r8kgoCkuW7q", "xSkZd8ktWPG", "WOZcImomDSoJ", "svCoWQbL", "h8ksW5NdPLC", "nSoVuCovEG", "W7a1WOFcQSoEpu4", "oKrspqa", "WQ3cICo7eCka", "msS6W5ddTa", "WQBdRSkqwCoH", "aCkLW5ZcGcO", "mr4atCkg", "W4iHWRmSvW", "uhJdMqKS", "W4avteG7", "cKddQK7cIG", "zCowlby", "oKfmnr8", "zCkLWQv0WOG", "g0umW6n4", "W7uCwSo3gW", "oWmEW5Pd", "W7qVvSkqia", "D0dcOaVdPq", "W5fJtd89", "W70aW4miFq", "WQtcMCkEeSoz", "W5uxytLU", "uN7cS1iq", "WOLxze8R", "W4KOdgyp", "WQHncXa1WQNcOSk8F8k8", "W7vgW5TlsW", "W7VcNcNcSCo1", "Ca4KW6ZdKa", "a2bpbca", "WRBcSCo6iSok", "W4Wvy8kbW7m", "wCkQWRGwWQm", "W5WOW60msW", "WRa9EZSl", "eCkEW7FdVI4", "WOxdPCkvfuO", "lmk7W6/cKSkLbSkGW5ZdSIncEW", "W4CNW7aIxa", "W4L4lXlcNG", "WPy/W4JdG3i", "o8opCmkhW6y", "icSCW7JdHq", "W4tdHSkim2SkmW", "W5RdR8k2F08", "fGhdQNNcKa", "gSkaW6C3lSkqcrzT", "rJZcTmkLva", "obX+FSkK", "FKDjWPSAlSoisq3dUmk/iG", "W6P/iSoliG", "WQavDKpcOJn/W6RdGqS", "WP7cL0G2WQu", "ASksWRDrWPG", "nsjpoGW", "W5W9WPZcTYG", "W53dRdC3WOe", "WQ1jEeD3", "W4rLoCo/ja", "W61ohCo4jW", "aCkJBSkyWOu", "EtWjW494", "WQFcMCoXAau", "CsNcG2uS", "d0JdOGO/W7zxWOCUW7u", "WQxcH8kDl8oG", "WRWhW6DiEW", "WOG0WRZdIXS", "ANG8WR0q"];
  return cn = function() {
    return i;
  }, cn();
}
async function XQ(i) {
  function n(r, a, g, s, c) {
    return j(g - 429, s);
  }
  const t = await zQ(), e = {};
  e[o("vrh@", 313, 242)] = SI;
  function A(r, a, g, s, c) {
    return j(a - 491, r);
  }
  function o(r, a, g, s, c) {
    return j(g - -386, r);
  }
  return window[A("wv3e", 947) + "o"][o("enSC", -19, 58) + "e"][n(1035, 935, 945, "Gi#$") + "pt"](e, t, i);
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return fA(B - -641, s);
  }
  function e(g, s, c, I, B) {
    return fA(c - 640, s);
  }
  const A = i();
  function o(g, s, c, I, B) {
    return fA(g - -986, s);
  }
  function r(g, s, c, I, B) {
    return fA(c - -375, g);
  }
  function a(g, s, c, I, B) {
    return fA(s - 147, c);
  }
  for (; ; )
    try {
      if (parseInt(t(-142, "H%k0", -158, -151, -148)) / 1 * (parseInt(t(-150, "^y2h", -125, -136, -138)) / 2) + parseInt(a(624, 629, "]l7K", 625, 623)) / 3 * (parseInt(r("^OwX", 98, 102, 95, 91)) / 4) + parseInt(r("YSMG", 111, 120, 116, 112)) / 5 * (-parseInt(t(-149, "f3sg", -155, -150, -145)) / 6) + -parseInt(t(-148, "#ezI", -141, -133, -142)) / 7 * (parseInt(o(-486, "cExt", -480, -479, -486)) / 8) + -parseInt(t(-177, "JnaZ", -160, -170, -165)) / 9 * (parseInt(e(1116, "WN!3", 1127, 1141, 1141)) / 10) + parseInt(r("]l7K", 94, 106, 105, 105)) / 11 + parseInt(r("t%*j", 134, 122, 119, 127)) / 12 * (parseInt(e(1124, "0F2h", 1119, 1126, 1118)) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Cn, -233 * 5711 + -1200377 + 3306607);
function Cn() {
  const i = ["WQOxW6rdW7DuWR3cLSoZla", "WPtcQwm8WOOfB1uh", "WR5wdmkXnbu7rblcVHxcIq", "rbLC", "WQRdHa89W6jtWPhdHCoeWQ4", "WOzdW6pdONRdVXyzWONdLx92", "W6qmm8o1hZRdPvxdL1asWPRdOaC", "meacW7xdMXZdO0iNedFdQG", "WRPscSk5nwK+EXtcGW4", "WOvdWRJcPIRcRd8a", "rCo6idBcU1BcGLpdGWVcTqO", "x8kLmmoUEZZcMsdcKmknW48", "g1G7W5pcJ2tdRWKtW7Dp", "W7FdUxTiWQWRjWP2w8kD", "WPRcPmoCyb0PW6VcHLCY", "gL0XW5NdJxldJWm4W48", "hvHRWPVdK3NdJta", "W64tc8kBoWhdTG", "cCkcWOXTzKFcPN8+xq", "zq/cO1fVW5SC", "aSkEAtiv", "Dmo7WQGfWPWjbabuDq", "WPdcGtSqWOTYW4FcVmoz", "W7GRrNKhFmkkW5xcSmolW4vBcMm", "W78Trx4nC8oBWQtcMSoFW5Lg", "W7xdShfhWQ1OcabGsCk5WPu", "smk5wu/dLGRcNa", "nrvcWOtcReFdNW"];
  return Cn = function() {
    return i;
  }, Cn();
}
function fA(i, n) {
  i = i - (4391 * 2 + 3849 + -12155);
  const t = Cn();
  let e = t[i];
  if (fA.VnAChI === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    fA.AFMfXJ = g, fA.qEvaWH = {}, fA.VnAChI = !0;
  }
  const o = t[2406 * 3 + -2 * -3380 + 2 * -6989], r = i + o, a = fA.qEvaWH[r];
  return a ? e = a : (fA.ZzIHpd === void 0 && (fA.ZzIHpd = !0), e = fA.AFMfXJ(e, n), fA.qEvaWH[r] = e), e;
}
async function $Q(i) {
  function n(g, s, c, I, B) {
    return fA(c - -41, B);
  }
  const { iv: t, key: e, message: A } = await PB(i), o = await XQ(e), r = {};
  r[n(457, 455, 448, 435, "w4o2")] = o, r.iv = t;
  function a(g, s, c, I, B) {
    return fA(I - -606, B);
  }
  return r[a(-120, -125, -138, -128, "o1(Z") + "ge"] = A, r;
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return lA(s - 377, a);
  }
  function e(a, g, s, c, I) {
    return lA(c - 23, g);
  }
  const A = i();
  function o(a, g, s, c, I) {
    return lA(g - -19, s);
  }
  function r(a, g, s, c, I) {
    return lA(g - 887, I);
  }
  for (; ; )
    try {
      if (-parseInt(e(238, "bgnU", 257, 247, 261)) / 1 * (-parseInt(e(279, "SG0$", 269, 268, 264)) / 2) + parseInt(e(260, "wCEH", 272, 269, 286)) / 3 + -parseInt(r(1117, 1117, 1122, 1118, "G*(M")) / 4 * (-parseInt(e(251, "cuDp", 273, 261, 244)) / 5) + -parseInt(o(208, 209, "P[[5", 198, 206)) / 6 + parseInt(e(280, "0KgA", 258, 272, 279)) / 7 * (parseInt(o(223, 215, "xA6!", 232, 203)) / 8) + parseInt(e(258, "DBo1", 231, 243, 242)) / 9 * (-parseInt(t("6mx0", 595, 595, 605, 606)) / 10) + -parseInt(o(196, 206, "uvD]", 217, 204)) / 11 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Bn, 2 * -145343 + -1579646 + -857 * -3345);
function lA(i, n) {
  i = i - (-9899 + -344 * -29 + 140);
  const t = Bn();
  let e = t[i];
  if (lA.mijmJb === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    lA.SWTBxj = g, lA.VZaIWt = {}, lA.mijmJb = !0;
  }
  const o = t[-1 * -6353 + -2945 + 852 * -4], r = i + o, a = lA.VZaIWt[r];
  return a ? e = a : (lA.MztRIF === void 0 && (lA.MztRIF = !0), e = lA.SWTBxj(e, n), lA.VZaIWt[r] = e), e;
}
async function AE(i) {
  function n(a, g, s, c, I) {
    return lA(g - -422, I);
  }
  const t = new Uint8Array(i);
  function e(a, g, s, c, I) {
    return lA(a - -743, c);
  }
  function A(a, g, s, c, I) {
    return lA(I - 664, s);
  }
  const o = await window[A(901, 914, "fGe8", 912, 900) + "o"][n(-185, -187, -183, -195, "6Ol&") + "e"][e(-501, -504, -497, "0fuQ") + "t"](e(-512, -516, -511, "b)k("), t);
  function r(a, g, s, c, I) {
    return lA(I - 167, a);
  }
  return Array[e(-521, -535, -523, "MqnR")](new Uint8Array(o))[r("bgnU", 414, 406, 401, 414)]((a) => a[r("(2(e", 399, 407, 420, 411) + r("(2(e", 396, 377, 399, 393)](16)[r("MqnR", 394, 411, 409, 407) + e(-500, -487, -503, "uvD]")](-487 + -489 * -1, "0"))[e(-522, -506, -525, "ze6O")]("");
}
function Bn() {
  const i = ["WOdcH8oLeCouuCkfWQ9n", "W68aj8kaW7NdOs7dUW", "hCkOjYxcTXRdJ3/cU8kBeCobxa", "WRNdJxpcOMe", "m8o+cXCtWQ/cLH3cVN0DW5S", "W53dM8kYmSon", "W4dcQuS", "yCkjWO5/ja", "Cc4SW5RdSt1iBCkQ", "W49NW7tcGHi8W7f5murrWOjc", "W4RdPSo5", "W6/cKw7dNgpdLCkfrG", "F8o2W5BdRdFcVSkJ", "W7VcLsddHcmmnL3cTLuTrmkgWRC", "WOtcSCkiWO3dRgixW4iSkCksbeC", "iSkTW4pdRCkIW6i4xCkLlGBcQSkxWR4", "CfumW5ZdSmo2aSk0", "rSo1Fx4", "WQ/dNNJcNa", "qSo1s8kQC8o0rH3cOSkJWPj2gq", "WPpcT8k9W6NdOLlcUCkKkCo+", "WPpdOGJdKW8QqdGqW6e2W6BcIHy", "FmkiWRO", "DINdLvCDW6WjWR/dNKq", "rePfhmkzF8oVWQmVW5NdSWrH", "W6xcKbRcQYpcRmo+FmoowX7cPvO", "WOpcV2iciCo9W7qht8oUn0i", "vmkfEqmw", "W70GbmkofJHF", "WP7cT8oKWQ7dMeFcUCkL", "W4JcT3RdRdzKs2lcMCk7yCoKWOhcSW", "qwRcOL0r", "FmohiIHd"];
  return Bn = function() {
    return i;
  }, Bn();
}
(function(i, n) {
  function t(s, c, I, B, E) {
    return NA(E - 524, I);
  }
  function e(s, c, I, B, E) {
    return NA(I - -231, c);
  }
  function A(s, c, I, B, E) {
    return NA(B - 743, E);
  }
  var o = i();
  function r(s, c, I, B, E) {
    return NA(E - -156, s);
  }
  function a(s, c, I, B, E) {
    return NA(I - -416, B);
  }
  for (; ; )
    try {
      var g = -parseInt(A(1060, 1076, 1059, 1067, "hLRz")) / 1 * (-parseInt(a(-69, -72, -80, "sMsA", -77)) / 2) + parseInt(a(-101, -99, -90, "G&nd", -99)) / 3 * (-parseInt(a(-72, -70, -78, "%u(0", -89)) / 4) + parseInt(a(-95, -95, -93, "K68R", -87)) / 5 + -parseInt(a(-89, -98, -98, "H9y9", -99)) / 6 * (-parseInt(r("!aU5", 159, 172, 162, 169)) / 7) + -parseInt(t(864, 863, "MZK2", 871, 861)) / 8 + -parseInt(r("35T(", 182, 163, 165, 172)) / 9 * (parseInt(r("v[nk", 161, 168, 170, 163)) / 10) + parseInt(e(102, "1mcb", 104, 99, 105)) / 11;
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Qn, 765441);
function Qn() {
  var i = ["v8kXW77cQ8kXW4iLlG8VjIXv", "W7LizgpdGSktqXC", "zmozy8o+W5VcVmkKW7rEW58kWPK", "W4vkzIxcRCoQWRBdR8ou", "x8keW54RfWTMta", "W7zDjcm+pJGGvXCmWQ8", "W6K8WRldGCkzWP8dW64", "z2tdVSk2EgHaW4zKf8k1x2VdUa", "ESo0WRxcK8kBnX5tuCkgW7dcSa", "W7vFjciZAICSyqG1", "W7WCf8k4fedcPmoiWOevWOiw", "jqxdJ8kfW43cQCoiqb7cT8kurW", "CCkiW67dNSkuWOVcK8klWPPmiZ14W7a", "ud43W7JdO8owuXe", "WQn7W4xdNI3cU0ZdMwT8nuVcSIC", "WQWgWRNcUCohc8o9qCoBFWy", "zgz/iHSkW4qNWPJdI8oPW4C5", "vCkbW65ogSk1W5/cSq", "W5BdPmkpW6VdMcJcHe/cVq", "W5ZdGKrYybNdOSk7W6ldImotla", "v8k1WQ/dRSoxWRTqja", "WRlcNSkPW7bADLnFW5ldTLlcLWOy"];
  return Qn = function() {
    return i;
  }, Qn();
}
function NA(i, n) {
  i = i - (2107 + -2453 * 2 + 3116);
  var t = Qn(), e = t[i];
  if (NA.IuAeWS === void 0) {
    var A = function(s) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", B = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        B += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(s, c) {
      var I = [], B = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    NA.mUyMhF = o, NA.fAGvGw = {}, NA.IuAeWS = !0;
  }
  var r = t[0], a = i + r, g = NA.fAGvGw[a];
  return g ? e = g : (NA.yyJzqv === void 0 && (NA.yyJzqv = !0), e = NA.mUyMhF(e, n), NA.fAGvGw[a] = e), e;
}
async function Ps(i) {
  const { Image: n } = nt, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw m.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function eE(i) {
  const { VideoStream: n } = nt, t = n.verify(i);
  if (t) throw m.fromError(t);
  return n.create(i);
}
async function tE(i) {
  const { v4: { Metadata: n } } = nt, t = { ...i };
  t.platform = nt.Platform.WEB, t.componentVersion = "8.0.2";
  const e = t, A = n.verify(e);
  if (A) throw m.fromError(A);
  return n.create(e);
}
async function oE(i) {
  const { Content: n } = nt, { iv: t, key: e, message: A } = await $Q(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: LC, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw m.fromError(r);
  const a = n.create(o);
  return n.encode(a).finish();
}
function nE(i) {
  const { Blob: n } = nt.v4, t = n.verify(i);
  if (t) throw m.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function iE(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e?.map(({ brand: a, version: g }) => ({ name: a, version: g })) };
}
async function rE({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = nt.v4, A = await Ps(i), o = await tE(n), r = t && eE(t), a = {};
  a.streamH264 = r;
  const g = {};
  g.image = A, g.metadata = o, g.video = a;
  const s = g, c = e.verify(s);
  if (c) throw m.fromError(c);
  const I = e.create(s), B = {};
  return B.faceContent = I, nE(B);
}
async function aE(i) {
  const n = await rE(i);
  return oE(n);
}
function gE({ controller: i, onCompleteInternal: n }) {
  const { captureMode: t, onComplete: e, sessionToken: A } = PI(), o = De(({ candidateSelectionImages: g, imageData: s, protoMessage: c, webMetadata: I }) => {
    MQ(mI.FACE, g), e(s, c);
    const B = {};
    B.cameraProperties = I, n?.(B);
  }, [n, e]), r = De(({ fps: g, processedImage: s }, c) => {
    const I = {};
    I.code = s.instructionCode, I.isEscalated = s.isEscalated, HI(Ce.INSTRUCTION_CHANGED, I), i && wB(Ce.DETECTION_CHANGED, s.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
    const B = {};
    B.detection = s.detection, B.fps = g, B.image = c, B.isInCandidateSelection = s.isInCandidateSelection, B.invalidValidators = s.invalidValidators, DB(Ce.FACE_DETECTION, B);
  }, [i]), a = {};
  return a.captureMode = t, a.controller = i, a.createProtoMessage = aE, a.onCapture = o, a.onDetection = r, a.sessionToken = A, a.customEvent = Ce, a.fallbackInstruction = QA.FACE_NOT_PRESENT, a.instructionCodeMap = QA, a.checkToInstructionCodeMap = uC, EQ(a);
}
const IE = 8358 + 17 * -374;
class sE {
  duration;
  constructor(n) {
    this.duration = n ?? IE;
  }
  candidateSelectionTime = 11762 + 2 * -5881;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 4 * 295 + -4858 + 3678;
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
    this.candidateSelectionTime = -10181 + 10181 * 1, this.candidateSelectionImages = [];
  }
}
const cE = async () => WebAssembly.validate(new Uint8Array([1462 * -1 + -472 + -2 * -967, -106 + -2 * -3908 + -331 * 23, 5328 + 3 * 2226 + -11891, 4046 + -1 * -1849 + -5786, 8750 + 3 * 1522 + -1 * 13315, -7578 + 9 * 842, -15 * 605 + 5928 + 3147 * 1, -7010 + 5 * 1402, 1, 11897 + 1 * -11892, 341 * -1 + 6359 + -6017, 2 * -2734 + 6955 * -1 + 12519 * 1, 0, 7099 + -10 * 649 + 608 * -1, -1 * -6538 + -1339 + -5076, -4723 + -2363 * -2, -13087 + -4363 * -3, 4 * -1531 + -3197 + 9322, 2 * 298 + 6791 + -7387, -1159 + 1169 * 1, 10, -2 * -1557 + -3 * 1205 + -1 * -502, 5 * -1934 + -10 * -933 + 348, 4226 * 1 + 3287 * 1 + -7513, 1 * 6455 + -8414 * -1 + -7402 * 2, 7102 + -2 * -4624 + -16350, -1 * -9385 + -1720 + -7412, 11425 + 1141 * -10, 6944 + 1 * -6691, 98, 11]));
function CE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function BE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = CE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function QE(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function EE(i) {
  return i > -114648 + -354 * 1 + 175002 ? ">1m" : "" + i;
}
function xE(i) {
  return i > 10 ? ">10" : "" + i;
}
const rr = (i) => i ? i <= 4067 + -4066 * 1 ? Math.round(i * (523 + 3 * -3314 + 9439)) / 20 : Math.round(i / (-2400 * 4 + -7183 + 3 * 5611)) * 50 : 1 * -2058 + 5875 + -3817;
function lE(i) {
  return i ? Math.round(i / 2500) * (1 * -6252 + -9465 + 18217) : 0;
}
const dE = (i) => i ? Math.round(i / (2357 * 2 + 8907 * -1 + 4203)) * (-2809 * -1 + 2210 + -5009) : 5 * -406 + 4751 + 3 * -907, uE = (i) => Math.round(i * (-1 * 3791 + -8850 + 12643 * 1)) / 2;
function fE(i) {
  return i !== CA.RUNNING ? Ho.VISIBLE : Ho.VISIBLE_WITH_MASK;
}
async function hE() {
  return await cE() ? Da.SIMD : Da.NO_SIMD;
}
class Hs {
  constructor(n, t, e, A, o, r, a, g, s, c, I, B) {
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = a, this.samVersion = g, this.instructionEscalation = s, this.sessionToken = c, this.analytics = I, this.transactionCounting = B;
  }
  isRunning = !0;
  #A = Date.now();
  fpsOfAllImages = new Gr(-1 * 2707 + 3126 + -389);
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    const e = Date.now(), A = Zt(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - this.#A, facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await hE() };
    _t() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !et() }), this.analytics?.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: be(Zt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await _C(n), r = await this.prepareDetectionMetadata(n, t), a = this.cameraService.videoRecorder?.getRecording(), g = {};
    g.image = o, g.metadata = r, g.video = a;
    const s = await this.createProtoMessage(g), c = {};
    c.detection = t, c.imageResolution = A;
    const I = {};
    I.image = o, I.data = c;
    const B = I, E = {};
    return E.imageData = B, E.metadata = r, E.protoMessage = s, E;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = XC(), o = await $C(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await iE(A, o) }, a = {};
    return a.sessionToken = this.sessionToken, a.web = r, a;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = LI(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await qC(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const s = g, c = await Ps(a), I = {};
    return I.image = c, I.topLeftCorner = s, I;
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
    await Ji(Math.max(ka.max - n, ka.min));
  }
}
class pE extends Hs {
  constructor(n, t, ...e) {
    super(...e), this.candidateSelection = n, this.instructionCodeMap = t;
  }
  lastImage = null;
  bestImage = null;
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(n, t) : this.tryInitCandidatePhase(n, t);
    const e = {};
    e.takenPhoto = n, e.imageProcessorResult = t;
    const A = this.getDetectionDetails(e);
    this.onDetection(A, n.image);
    const o = {};
    o.instructionCode = A.processedImage.instructionCode, o.isValid = t.isValid, o.image = n.image, o.detection = t.detection, this.lastImage = o, await this.sleep(A.detectionTime);
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? m.fromCameraError(t) : m.fromError(t);
    }
  }
  saveBetterImage(n, t) {
    if (!(this.bestImage && t.isValid && this.isNewImageBetter(this.bestImage.detection, t.detection))) return;
    const A = {};
    A.image = n.image, A.detection = t.detection;
    const o = A;
    this.bestImage = o, this.candidateSelection.newCandidate(o);
  }
  tryInitCandidatePhase(n, t) {
    if (!(this.lastImage?.isValid && t.isValid)) return;
    const A = {};
    A.image = n.image, A.detection = t.detection;
    const o = A;
    this.isNewImageBetter(this.lastImage.detection, o.detection) ? this.bestImage = o : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(o), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: n, image: t } = this.bestImage || {};
    if (this.transactionCounting?.trackTransaction(), t && n) this.trackCaptureProcess(n, t), await this.onCapture({ canvasImage: t, detection: n, candidateSelectionImages: this.candidateSelection.getCandidateSelectionImages() });
    else throw new m("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: n, takenPhoto: t }) {
    const e = this.getDetectionEndTime(t.timestamp), A = be((-2 * -4839 + 7032 + -15710) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = t.image.width, o.height = t.image.height;
    const r = o, a = this.getInvalidInstructions(n.validationResult, this.checkToInstructionCodeMap), g = {};
    g.isNewDetectionValid = n.isValid, g.newInvalidInstruction = a[3 * -1558 + 6778 + 2 * -1052];
    const s = this.getInstructionCode(g), c = this.collectAndEscalate(s);
    return { processedImage: { detection: n.detection, instructionCode: s, isEscalated: c, invalidValidators: a, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: e, fps: A, avgFps: be(Zt(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode({ isNewDetectionValid: n, newInvalidInstruction: t }) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && n ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && n ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class Ks {
  cameraService;
  imageProcessor;
  instructionEscalation;
  createProtoMessage;
  onCaptureCallback;
  onDetectionCallback;
  checkToInstructionCodeMap;
  fallbackInstruction;
  samVersion;
  sessionToken;
  analytics;
  transactionCounting;
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
    if (!this.cameraService) throw new m("CameraService is required");
    if (!this.imageProcessor) throw new m("ImageProcessor is required");
    if (!this.createProtoMessage) throw new m("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new m("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new m("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new m("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new m("FallbackInstruction is required");
    if (!this.samVersion) throw new m("SamVersion is required");
  }
}
class yE extends Ks {
  instructionCodeMap;
  candidateSelection;
  setInstructionCodeMap(n) {
    return this.instructionCodeMap = n, this;
  }
  setCandidateSelection(n) {
    return this.candidateSelection = n, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new m("instructionCodeMap is required");
    if (!this.candidateSelection) throw new m("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new pE(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class mE extends Hs {
  #A = void 0;
  #e;
  constructor(...n) {
    super(...n), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(_n).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(ma.REQUEST_CAPTURE, this.#e);
  }
  async iterate() {
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n), e = this.getDetectionDetails(n, t);
    if (this.onDetection(e, n.image), this.isCaptureDone(t)) {
      await this.onCaptureDone(n.image, t.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  isCaptureDone(n) {
    return this.#A ? this.#A === _n.FIRST_FRAME ? !0 : this.#A === _n.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? m.fromCameraError(t) : m.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    this.transactionCounting?.trackTransaction(), this.trackCaptureProcess(t, n);
    const e = {};
    e.canvasImage = n, e.detection = t, e.candidateSelectionImages = [], await this.onCapture(e), this.#A = void 0;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = be((-1 * -4013 + 1 * 4519 + 1076 * -7) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[1 * 8719 + 7945 + -16664]), s = this.collectAndEscalate(g), c = {};
    return c.detection = t.detection, c.instructionCode = g, c.invalidValidators = a, c.isInCandidateSelection = !1, c.isEscalated = s, { processedImage: c, detectionTime: e, fps: A, avgFps: be(Zt(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(ma.REQUEST_CAPTURE, this.#e);
  }
}
class wE extends Ks {
  build() {
    return this.validateDependencies(), new mE(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class DE {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: a, fallbackInstruction: g, imageProcessor: s, instructionCodeMap: c, instructionEscalation: I, onCaptureCallback: B, onDetectionCallback: E, samVersion: x, sessionToken: Q, transactionCounting: d } = t;
    switch (n) {
      case vi.AUTO_CAPTURE:
        return new yE().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setInstructionCodeMap(c).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(a).setOnCaptureCallback(B).setOnDetectionCallback(E).setSamVersion(x).setInstructionEscalation(I).setSessionToken(Q).setAnalytics(e).setTransactionCounting(d).build();
      case vi.WAIT_FOR_REQUEST:
        return new wE().setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(a).setOnCaptureCallback(B).setOnDetectionCallback(E).setSamVersion(x).setInstructionEscalation(I).setSessionToken(Q).setAnalytics(e).setTransactionCounting(d).build();
      default:
        throw new m("Invalid detection type: " + n);
    }
  }
}
const _s = /* @__PURE__ */ Symbol("Comlink.proxy"), bE = /* @__PURE__ */ Symbol("Comlink.endpoint"), js = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), si = /* @__PURE__ */ Symbol("Comlink.finalizer"), Fo = /* @__PURE__ */ Symbol("Comlink.thrown"), qs = (i) => typeof i == "object" && i !== null || typeof i == "function", kE = {
  canHandle: (i) => qs(i) && i[_s],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return Zs(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), Xs(i);
  }
}, SE = {
  canHandle: (i) => qs(i) && Fo in i,
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
}, Vs = /* @__PURE__ */ new Map([
  ["proxy", kE],
  ["throw", SE]
]);
function GE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function Zs(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!GE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(Ze);
    let s;
    try {
      const c = a.slice(0, -1).reduce((B, E) => B[E], i), I = a.reduce((B, E) => B[E], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          c[a.slice(-1)[0]] = Ze(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(c, g);
          break;
        case "CONSTRUCT":
          {
            const B = new I(...g);
            s = WE(B);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: B, port2: E } = new MessageChannel();
            Zs(i, E), s = ME(B, [B]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      s = { value: c, [Fo]: 0 };
    }
    Promise.resolve(s).catch((c) => ({ value: c, [Fo]: 0 })).then((c) => {
      const [I, B] = ln(c);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), B), r === "RELEASE" && (n.removeEventListener("message", e), zs(n), si in i && typeof i[si] == "function" && i[si]());
    }).catch((c) => {
      const [I, B] = ln({
        value: new TypeError("Unserializable return value"),
        [Fo]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), B);
    });
  }), n.start && n.start();
}
function NE(i) {
  return i.constructor.name === "MessagePort";
}
function zs(i) {
  NE(i) && i.close();
}
function Xs(i, n) {
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
  }), ar(i, t, [], n);
}
function xo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function $s(i) {
  return Bt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    zs(i);
  });
}
const En = /* @__PURE__ */ new WeakMap(), xn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (En.get(i) || 0) - 1;
  En.set(i, n), n === 0 && $s(i);
});
function RE(i, n) {
  const t = (En.get(n) || 0) + 1;
  En.set(n, t), xn && xn.register(i, n, i);
}
function vE(i) {
  xn && xn.unregister(i);
}
function ar(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (xo(A), a === js)
        return () => {
          vE(o), $s(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = Bt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(Ze);
        return g.then.bind(g);
      }
      return ar(i, n, [...t, a]);
    },
    set(r, a, g) {
      xo(A);
      const [s, c] = ln(g);
      return Bt(i, n, {
        type: "SET",
        path: [...t, a].map((I) => I.toString()),
        value: s
      }, c).then(Ze);
    },
    apply(r, a, g) {
      xo(A);
      const s = t[t.length - 1];
      if (s === bE)
        return Bt(i, n, {
          type: "ENDPOINT"
        }).then(Ze);
      if (s === "bind")
        return ar(i, n, t.slice(0, -1));
      const [c, I] = Ig(g);
      return Bt(i, n, {
        type: "APPLY",
        path: t.map((B) => B.toString()),
        argumentList: c
      }, I).then(Ze);
    },
    construct(r, a) {
      xo(A);
      const [g, s] = Ig(a);
      return Bt(i, n, {
        type: "CONSTRUCT",
        path: t.map((c) => c.toString()),
        argumentList: g
      }, s).then(Ze);
    }
  });
  return RE(o, i), o;
}
function FE(i) {
  return Array.prototype.concat.apply([], i);
}
function Ig(i) {
  const n = i.map(ln);
  return [n.map((t) => t[0]), FE(n.map((t) => t[1]))];
}
const A0 = /* @__PURE__ */ new WeakMap();
function ME(i, n) {
  return A0.set(i, n), i;
}
function WE(i) {
  return Object.assign(i, { [_s]: !0 });
}
function ln(i) {
  for (const [n, t] of Vs)
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
    A0.get(i) || []
  ];
}
function Ze(i) {
  switch (i.type) {
    case "HANDLER":
      return Vs.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Bt(i, n, t, e) {
  return new Promise((A) => {
    const o = LE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function LE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const OE = "SAM v1.50.5 for idcards";
class JE {
  constructor(n, t, e, A, o, r, a) {
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = a;
  }
  isDetectorInitialized = !1;
  samVersion = null;
  detection;
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    et() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new m("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Sr.warn(`
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
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: a, instructionCodeMap: g, onCaptureCallback: s, onDetectionCallback: c, sessionToken: I, transactionCounting: B } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: B, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: a, instructionCodeMap: g, checkToInstructionCodeMap: o, sessionToken: I, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: s, onDetectionCallback: c, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new m("Detection not initialized");
    this.detection.run();
  }
  stopDetectionLoop() {
    this.detection?.stop(), this.instructionEscalation?.reset(), this.imageProcessor.reset(), this.candidateSelection.reset();
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
    return "" + t.replace(GI, "") + n;
  }
}
class UE {
  imageProcessor;
  assetsDirectoryPath;
  instructionEscalation;
  compatibleSamVersion;
  validationService;
  detector;
  detectionFactory;
  candidateSelection;
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
    if (!this.imageProcessor) throw new m("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new m("AssetsDirectoryPath is required");
    if (!this.detector) throw new m("Detector is required");
    if (!this.compatibleSamVersion) throw new m("CompatibleSamVersion is required");
    if (!this.validationService) throw new m("ValidationService is required");
    if (!this.detectionFactory) throw new m("DetectionFactory is required");
    if (!this.candidateSelection) throw new m("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class YE {
  detectionRecord = [];
  imagesWithTimestampForDuplicateDetection = new Gr(WC);
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / UC, A = e / 2, o = n.length / (13556 + -4518 * 3), r = n.slice(o - A, o + A), a = await AE(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: LI(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = NI(n), r = this.validationService.validateDetectedObject(o, t);
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
class TE {
  thresholds = null;
  getThresholds() {
    if (!this.thresholds) throw new m("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class e0 extends JE {
  constructor(n, t, e, A, o, r, a, g) {
    super(A, o, r, a, e, n, g), this.detectionFactory = n, this.detector = t;
  }
  static _instance;
  detector;
  stopDetectionLoop() {
    super.stopDetectionLoop();
    var n = {};
    n.code = this.detection?.["fallbackInstruction"], HI(Ce.INSTRUCTION_CHANGED, n, mC);
  }
  setAcceleration(n) {
    this.validationService.acceleration = n;
  }
}
class PE extends UE {
  build() {
    return this.validateDependencies(), new e0(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
const HE = "/dot-assets/face/dot-Cx7B7fTu.js";
class KE extends YE {
  className = "FaceImageProcessor";
  detector;
  validationService;
  constructor(n, t) {
    super(), this.detector = n, this.validationService = t;
  }
  optimizeImageBeforeDetection(n) {
    const t = jo(n), e = WI(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detector.detect(e.data, e.resolution, A);
    o = wQ(o, jo(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
}
class _E {
  #A;
  #e;
  #t;
  constructor(n) {
    this.#A = n, this.#e = /* @__PURE__ */ new Map();
  }
  validate() {
    this.#A.forEach((n) => {
      this.#e.set(n.name, n.evaluate());
    }), this.#t = void 0;
  }
  isValid() {
    return this.#t === void 0 && (this.#t = Array.from(this.#e.values()).every((n) => n)), this.#t;
  }
  get result() {
    return this.#e;
  }
  get validators() {
    return this.#A;
  }
}
class YA {
  #A;
  #e;
  constructor(n, t) {
    this.#A = n, this.#e = t;
  }
  get threshold() {
    return this.#e;
  }
  get name() {
    return this.#A;
  }
  isValueBelowThreshold(n) {
    return n < this.#e;
  }
  isValueAboveThreshold(n) {
    return n > this.#e;
  }
}
const jE = "isNotDim";
class qE extends YA {
  #A;
  constructor(n, t) {
    super(jE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const VE = "isNotSmall";
class ZE extends YA {
  #A;
  constructor(n, t) {
    super(VE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const zE = "isNotBright";
class XE extends YA {
  #A;
  constructor(n, t) {
    super(zE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const $E = "isPresent";
class Ax extends YA {
  #A;
  constructor(n, t) {
    super($E, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ex = "isSharp";
class tx extends YA {
  #A;
  constructor(n, t) {
    super(ex, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ox = "isLeftEyePresent";
class nx extends YA {
  #A;
  constructor(n, t) {
    super(ox, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ix = "isMouthPresent";
class rx extends YA {
  #A;
  constructor(n, t) {
    super(ix, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ax = "isMouthScoreNotTooLow";
class gx extends YA {
  #A;
  constructor(n, t) {
    super(ax, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Ix = "isMouthScoreNotTooHigh";
class sx extends YA {
  #A;
  constructor(n, t) {
    super(Ix, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const cx = "isNotLarge";
class Cx extends YA {
  #A;
  constructor(n, t) {
    super(cx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Bx = "isNotPitched";
class Wr extends YA {
  #A;
  constructor(n, t) {
    super(Bx, Wr.calculatePitchAngleAccelerationThreshold(n)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(n) {
    return FC * Math.sin(n * (Math.PI / (4 * -1256 + 1499 + 3705 * 1)));
  }
  evaluate() {
    const { z: n } = this.#A || {};
    return n ? this.isValueBelowThreshold(Math.abs(n)) : !0;
  }
}
const Qx = "isRightEyePresent";
class Ex extends YA {
  #A;
  constructor(n, t) {
    super(Qx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const xx = "isNotOutOfBounds";
class lx extends YA {
  #A;
  #e;
  constructor(n, t, e) {
    super(xx, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = JI(this.#e, this.threshold, jo(this.#e)), t = Us(this.#A, this.#e);
    return ZC(t, n);
  }
}
class dx {
  static getFaceValidationInstance(n, t, e, A) {
    return new _E([new Ax(n.confidence.min, t.confidence), new nx(n.leftEye.confidence.min, t.leftEye.confidence), new Ex(n.rightEye.confidence.min, t.rightEye.confidence), new ZE(n.size.min, t.faceSize), new Cx(n.size.max, t.faceSize), new tx(n.sharpness.min, t.sharpness), new qE(n.brightness.min, t.brightness), new XE(n.brightness.max, t.brightness), new lx(n.edgeDistanceToImageShorterSideRatio.min, t, e), new Wr(n.devicePitchAngle.max, A), new rx(n.mouth.confidence.min, t.mouth.confidence), new sx(n.mouth.status.max, t.mouth.status), new gx(n.mouth.status.min, t.mouth.status)]);
  }
}
class ux extends TE {
  className = "FaceValidationService";
  acceleration = null;
  validateDetectedObject(n, t) {
    const e = dx.getFaceValidationInstance(this.getThresholds(), n, t, this.acceleration);
    return e.validate(), e;
  }
}
function fx() {
  const { handleError: i } = $A(), { acceleration: n } = vB(), { assetsDirectoryPath: t, autoCapture: { candidateSelectionDurationMillis: e } } = PI(), { thresholds: A } = Js(), [o, r] = nA();
  Y(() => {
    let g;
    return (async () => {
      const c = e0.getWorkerPath(HE, t), I = {};
      I.type = "module";
      const B = new Worker(new URL(c, import.meta.url), I), E = Xs(B);
      g = await new E();
      const x = new ux(), Q = new KE(g, x), d = new DE(), f = new sE(e), h = new PE().setDetector(g).setValidationService(x).setImageProcessor(Q).setCompatibleSamVersion(OE).setAssetsDirectoryPath(t).setDetectionFactory(d).setCandidateSelection(f).build();
      try {
        await h.init(), r(h);
      } catch (p) {
        if (p instanceof Error) {
          i(m.fromError(p));
          return;
        }
      }
    })(), () => {
      g && g[js]();
    };
  }, [i, t, e]), Y(() => {
    o && o.setThresholds(A);
  }, [o, A]), Y(() => {
    o && o.setAcceleration(n);
  }, [n, o]);
  const a = {};
  return a.controller = o, a;
}
function hx() {
  const { isCameraReady: i } = $A(), { sunfish: n } = eo(), { controller: t } = fx(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = gE({
    controller: t
  });
  return /* @__PURE__ */ w(vA, { children: /* @__PURE__ */ w(
    FQ,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: o,
      children: /* @__PURE__ */ w(
        EC,
        {
          ref: r,
          $isImageMirror: o,
          $isVisible: n && i,
          autoPlay: !0,
          id: wC,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function px({ ...i }) {
  const { handleAppStateChange: n, setIsCameraReady: t } = $A();
  return lQ({
    onBlur: () => {
      t(!1), n(CA.LOADING);
    },
    onFocus: () => {
      t(!0), n(CA.RUNNING);
    }
  }), /* @__PURE__ */ w(pB, { configuration: i, children: /* @__PURE__ */ w(mQ, { configurationThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ w(hx, {}) }) });
}
function yx({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ w(CQ, { cameraConfiguration: i, customEvent: Ce, children: n });
}
function mx({ initAppState: i, onError: n }) {
  const [t, e] = nA(i), [A, o] = nA(), [r, a] = nA(!1), [g, s] = nA(!1), c = Po.Lower, I = qA(n);
  Y(() => {
    I.current = n;
  }, [n]);
  const B = {};
  return B.redfin = c, B.appState = t, B.setAppState = e, B.error = A, B.setError = o, B.isCameraReady = r, B.setIsCameraReady = a, B.onErrorRef = I, B.firstRunningDone = g, B.setFirstRunningDone = s, B;
}
function wx({ onError: i }) {
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
    setIsCameraReady: c
  } = mx({
    initAppState: CA.LOADING,
    onError: i
  }), I = fE(n), B = De(
    (x) => {
      Ra(Ce.STATE_CHANGED, { appState: CA.ERROR, error: x }), c(!1), r.current(x), g(x), a(CA.ERROR);
    },
    [c, r, g, a]
  ), E = De(
    (x) => {
      Ra(Ce.STATE_CHANGED, { appState: x }), a(x);
    },
    [a]
  );
  return {
    redfin: t,
    appState: n,
    freemiumOverlayState: I,
    isCameraReady: o,
    setIsCameraReady: c,
    handleAppStateChange: E,
    handleError: B,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: s
  };
}
const Qt = {};
Qt.AUTO_CAPTURE = "auto_capture", Qt.CAPTURE_FINISHED = "capture_finished", Qt.CAPTURE_STARTED = "capture_started", Qt.ESCALATION_TRIGGER = "escalation_trigger", Qt.LONG_CAPTURE_SMILE = "long_capture_smile";
const dn = Qt, Ne = {};
Ne.PALM = "palm_auto_capture", Ne.SMILE = "smile_liveness", Ne.DOCUMENT = "document_auto_capture", Ne.MAGNIFEYE = "magnifeye_liveness", Ne.EYE_GAZE = "eye_gaze_liveness", Ne.FACE = "face_auto_capture", Ne.MULTI_RANGE = "multi_range_liveness";
const Dx = Ne;
class bx {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = RI(), this.applicationId = vI(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(dn.CAPTURE_STARTED));
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
const lo = new bx();
class kx {
  posthog = lo;
  component;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: RI(), ...n };
  }
  init(n, t) {
    if (kr()) return;
    const e = BE(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, lo.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    lo.sendEvent(dn.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    lo.sendEvent(dn.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 250 ? dE(n) : rr(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: xE(o || 0), firstHiccup: EE(lE(r)), optCheckDetails: e?.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class Sx extends kx {
  constructor() {
    super(Dx.FACE);
  }
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: a, instructionSet: g, isSystemStable: s, performanceCheckup: c }) {
    if (!A) return;
    const I = this.parsePerformanceCheckup(t, c), B = this.createSegmentation({ faceSize: rr(A.faceSize), confidence: rr(A.confidence), camera: QE(o, r), imageResolution: a.width + "x" + a.height, averageFps: uE(n), durationMs: e, instructionSet: g, isSystemStable: s, ...I });
    this.posthog.sendEvent(dn.CAPTURE_FINISHED, B);
  }
}
const Gx = new Sx();
let F;
const me = new Array(128).fill(void 0);
me.push(void 0, null, !0, !1);
function gr(i) {
  return me[i];
}
let Be = -3 * -2689 + 1 * 1471 + -9538, Ut = null;
function Mo() {
  return (Ut === null || Ut.byteLength === 1 * -2715 + 9163 + -6448) && (Ut = new Uint8Array(F.memory.buffer)), Ut;
}
const Wo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Nx = typeof Wo.encodeInto == "function" ? function(i, n) {
  return Wo.encodeInto(i, n);
} : function(i, n) {
  const t = Wo.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function zt(i, n, t) {
  if (t === void 0) {
    const a = Wo.encode(i), g = n(a.length, 27 * -257 + 6783 + 157) >>> 0;
    return Mo().subarray(g, g + a.length).set(a), Be = a.length, g;
  }
  let e = i.length, A = n(e, -9607 * 1 + 2287 + 7321) >>> -2e3 + -2e3 * -1;
  const o = Mo();
  let r = 0;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -3 * -2945 + 5754 + -14462) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== 2 * -1031 + 863 * 8 + -4842 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 4448 + 1 * -956 + -3491) >>> 9577 * -1 + -6347 + -2654 * -6;
    const a = Mo().subarray(A + r, A + e), g = Nx(i, a);
    r += g.written, A = t(A, e, r, -8700 + 36 * -258 + 17989) >>> 1035 * 5 + -2949 + 1113 * -2;
  }
  return Be = r, A;
}
function t0(i) {
  return i == null;
}
let Yt = null;
function Ie() {
  return (Yt === null || Yt.byteLength === 1 * 9909 + -7029 + -288 * 10) && (Yt = new Int32Array(F.memory.buffer)), Yt;
}
let qt = me.length;
function Rx(i) {
  i < 4422 * -2 + 1 * -3763 + 12739 || (me[i] = qt, qt = i);
}
function o0(i) {
  const n = gr(i);
  return Rx(i), n;
}
const Ir = {};
Ir.ignoreBOM = !0, Ir.fatal = !0;
const n0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Ir) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && n0.decode();
function un(i, n) {
  return i = i >>> -4691 + 1 * 4691, n0.decode(Mo().subarray(i, i + n));
}
function sr(i) {
  qt === me.length && me.push(me.length + (38 + -4502 * -1 + -4539));
  const n = qt;
  return qt = me[n], me[n] = i, n;
}
let Tt = null;
function i0() {
  return (Tt === null || Tt.byteLength === 5 * 1225 + -7 * 911 + 252) && (Tt = new Uint32Array(F.memory.buffer)), Tt;
}
function sg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = i0();
  for (let A = 0; A < i.length; A++)
    e[t / 4 + A] = sr(i[A]);
  return Be = i.length, t;
}
function cg(i, n) {
  i = i >>> 0;
  const t = i0(), e = t.subarray(i / (1836 + 1832 * -1), i / (-2641 + -3 * -2095 + -3640) + n), A = [];
  for (let o = 4321 + -278 * 19 + 961 * 1; o < e.length; o++)
    A.push(o0(e[o]));
  return A;
}
function vx(i, n) {
  const t = zt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = Be, A = zt(n, F.__wbindgen_malloc, F.__wbindgen_realloc), o = Be, r = F.is_mobile_supported(t, e, A, o);
  return Lr.__wrap(r);
}
const cr = {};
cr.register = () => {
}, cr.unregister = () => {
};
const Cg = typeof FinalizationRegistry > "u" ? cr : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> -13818 + -3 * -4606));
class Lr {
  static __wrap(n) {
    n = n >>> 9865 + 5 * -1973;
    const t = Object.create(Lr.prototype);
    return t.__wbg_ptr = n, Cg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 5983 + -1 * 6891 + 908, Cg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = t0(t) ? 0 : zt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), a = Be;
    const g = sg(e, F.__wbindgen_malloc), s = Be, c = sg(A, F.__wbindgen_malloc), I = Be, B = zt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), E = Be, x = F.licensevalidationresult_new(n, r, a, g, s, c, I, B, E);
    return this.__wbg_ptr = x >>> 3 * -1338 + 8591 + -4577, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1 * -4366 + 1 * -4259 + 375 * 23;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = Ie()[e / 4 + (-7779 + 1 * 7779)], t = Ie()[e / (-4382 + 2 * -2269 + 8924) + 1];
      let A;
      return n !== -9472 + 2062 * 3 + 3286 && (A = un(n, t).slice(), F.__wbindgen_free(n, t * (428 + -1 * 5528 + -5101 * -1), -1994 * 2 + 2120 * 1 + 1869)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(2935 * 1 + 1 * -5271 + 2352);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = Ie()[A / (9776 * 1 + 816 + -10588) + (-1 * 6002 + -8501 + -14503 * -1)], t = Ie()[A / 4 + (-305 * 5 + -1 * -6381 + -4855)], e = cg(n, t).slice();
      return F.__wbindgen_free(n, t * (-9055 * 1 + 4942 + 4117), 8159 + 606 * 11 + -1 * 14821), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-5591 + 7 * 801);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = Ie()[A / (-1 * 1234 + -9007 + 10245) + (1483 * 1 + -317 * -21 + -8140)], t = Ie()[A / (-392 * -6 + -726 + -1622) + (-8057 + 18 * 438 + 174)], e = cg(n, t).slice();
      return F.__wbindgen_free(n, t * (-8721 + 599 * 1 + 8126), 1653 + 3 * -3299 + 8248), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = Ie()[o / 4 + (2321 + 1979 * 4 + -29 * 353)], A = Ie()[o / (4933 * 1 + 1005 + -5934) + (-589 * 5 + 8892 + 2 * -2973)];
      return n = e, t = A, un(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(16), F.__wbindgen_free(n, t, -12550 + -1141 * -11);
    }
  }
}
async function Fx(i, n) {
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
function Mx() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = gr(t), A = typeof e == "string" ? e : void 0;
    var o = t0(A) ? -5608 + 5608 * 1 : zt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), r = Be;
    Ie()[n / (1 * -7447 + -4959 + 12410) + 1] = r, Ie()[n / (6908 + -4521 * -1 + -1 * 11425) + (11 * 528 + 1567 * 2 + 263 * -34)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    o0(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = un(n, t);
    return sr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return sr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return gr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(un(n, t));
  }, i;
}
function Wx(i, n) {
  return F = i.exports, r0.__wbindgen_wasm_module = n, Yt = null, Tt = null, Ut = null, F;
}
async function r0(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Mx();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Fx(await i, n);
  return Wx(t, e);
}
function Bg(i, n, t, e, A) {
  return dA(t - -240, n);
}
function ci(i, n, t, e, A) {
  return dA(A - 333, e);
}
function Qg(i, n, t, e, A) {
  return dA(i - -869, n);
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return dA(s - 987, c);
  }
  function e(a, g, s, c, I) {
    return dA(I - -12, g);
  }
  const A = i();
  function o(a, g, s, c, I) {
    return dA(c - -844, g);
  }
  function r(a, g, s, c, I) {
    return dA(g - -929, I);
  }
  for (; ; )
    try {
      if (-parseInt(e(386, "8f@Z", 379, 411, 384)) / 1 * (parseInt(e(358, "WDgL", 372, 388, 362)) / 2) + parseInt(e(379, "Kekk", 386, 385, 360)) / 3 + -parseInt(o(-477, "t8Br", -493, -469, -442)) / 4 * (-parseInt(e(340, "(2pO", 334, 356, 331)) / 5) + parseInt(t(1366, 1369, 1379, "IbGQ", 1358)) / 6 * (-parseInt(r(-585, -581, -569, -565, "6IHj")) / 7) + parseInt(t(1372, 1377, 1349, "(2pO", 1333)) / 8 * (parseInt(e(337, "KEn]", 338, 344, 335)) / 9) + -parseInt(t(1326, 1360, 1336, "fQgG", 1323)) / 10 * (parseInt(r(-544, -542, -521, -515, "Kekk")) / 11) + -parseInt(o(-490, "Tw9u", -475, -464, -493)) / 12 * (-parseInt(r(-593, -564, -589, -550, "K%mk")) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(fn, -254 * 1261 + 21807 + 483006);
function dA(i, n) {
  i = i - 340;
  const t = fn();
  let e = t[i];
  if (dA.zznFgs === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    dA.PJxBei = g, dA.UHPKLt = {}, dA.zznFgs = !0;
  }
  const o = t[-1 * 9598 + 7530 + 2068], r = i + o, a = dA.UHPKLt[r];
  return a ? e = a : (dA.xfsKzh === void 0 && (dA.xfsKzh = !0), e = dA.PJxBei(e, n), dA.UHPKLt[r] = e), e;
}
function Ye(i, n, t, e, A) {
  return dA(A - -399, n);
}
function fn() {
  const i = ["WPXlAWFcGYWPq8kHW68TW7uJ", "a8kjWQbfaW", "vmobrG49", "WRuJzxJcKh/dMG", "h0VcLmoIsW", "CKtcKSo6WQq", "D0dcN8oGWRS", "fCkxW6TLWO4wW695W5naoSolmq", "WRhdMXdcNMq", "qMBcTGSU", "DSkEWQrLzH1mWQztWOBdL8o7", "W7/cUCoSW415W6RcISo5WPy7bgq", "x8ovp3BcQG3cHsvyqJG", "ESoUW4ldI8oK", "WPbyW4hcNrC", "sXZdLmkTyCoUWRFcSG", "jSovW4/dS8kj", "umoeWQS8W7q", "WRq+oNVcOa", "WQRdHSkRzSo+ySkmWQ4", "EWfaW4tcJa", "W7tcLKjKWQS", "WQbVBsVcVeRcRCkRqbC", "WQFdRqhcR0eVW6W", "jHCsWPldMKH5W71IW63cO8op", "W43cOCkLoCoegxNdRflcM0OY", "W5BdLKVdRKdcLSokqHSM", "WQRdHmo6u8omBCkkWQCC", "Et13Da", "W6OMseNcTa", "WPFdLCoOm1PxdHiPWRKSW7xcQW", "WQRdHSo6mCk0w8k7WQ4IWRxdHW", "lmobW6G5nW", "W6BcISkojvm", "bmksWQFdOG0", "W693W4hcNMK", "xmkoWRldHMJcR8k1", "WQvMzeJcNedcV8kNzG", "b8kiAshdQa", "W7FdOKpcJSkA", "WOyNDWVdNa", "W57dTSowzGS", "eCoWWQefW7TdWPm", "e8ohW7BcLuC", "BCkAW7FcLw4", "W7lcM8kJFq", "vCokW5ZcOeVcHwC", "gCotW4dcHsW", "W77cL8k5lSoV", "WQ8rWPhdUCoe", "w8kvAa/dNZpcTq", "sSkoeKHJW57cOCoIWOP6WQNdUW", "W63cNKvGWOm", "W5lcHCkrsHJcRmo6WRCcsW", "WOBcPCkppIJdKW/dH8oZWQm", "WRdcM8k0WQRdHbTJWRZdGmkkW67dVJy", "p2qWl8kYhNv1CgvFEG"];
  return fn = function() {
    return i;
  }, fn();
}
class Lx {
  [Ye(-2, "8f@Z", 22, -33, -6) + Ye(-9, "!uBH", -37, -3, -20) + Ye(-14, "hxJH", -4, -18, -17)] = !1;
  async [ci(725, 730, 712, "NiW2", 728)](n) {
    function t(a, g, s, c, I) {
      return Ye(a - 357, g, s - 188, c - 193, a - 525);
    }
    function e(a, g, s, c, I) {
      return Qg(a - 1146, c);
    }
    function A(a, g, s, c, I) {
      return ci(a - 122, g - 158, s - 87, s, I - 93);
    }
    function o(a, g, s, c, I) {
      return Bg(a - 463, g, c - -637);
    }
    function r(a, g, s, c, I) {
      return Qg(s - 576, I);
    }
    try {
      const a = n + (t(478, "8!YN", 457, 469, 467) + "/") + Sa;
      await r0(a), this[r(73, 122, 101, 87, "sZtS") + t(497, "AUG%", 520, 510, 491) + A(762, 786, "LhQO", 750, 777)] = !0;
    } catch {
      this[t(493, "IbGQ", 470, 512) + o(-481, "AUG%", -505, -506) + r(40, 27, 47, 75, "^P#!")] = !1, console[t(504, "fQgG", 478, 482)](Sa + (A(771, 788, "Kekk", 803, 794) + r(65, 58, 62, 69, "42j@") + A(814, 807, "zHFS", 814, 811) + t(485, "%KJh", 501, 501) + e(631, 623, 633, "K%mk") + t(482, "42j@", 490, 494) + e(635, 651, 657, "sY^w") + t(496, "WDgL", 503, 501) + o(-552, "oWDu", -564, -536) + t(516, "2Z&m", 516, 516) + A(739, 740, "ZEP7", 754, 768) + e(661, 651, 672, "rip)") + o(-497, "(2pO", -486, -489) + r(60, 64, 71, 82, "5O9]") + "n."));
    }
  }
  [Ye(-22, "WK@F", -26, -9, -33) + Bg(101, "D!w2", 123) + ci(751, 746, 737, "KEn]", 724) + "ed"]() {
    function n(e, A, o, r, a) {
      return Ye(e - 371, o, o - 390, r - 289, a - 93);
    }
    function t(e, A, o, r, a) {
      return Ye(e - 71, o, o - 151, r - 141, r - 328);
    }
    return this[n(63, 38, "AUG%", 18, 39) + n(64, 70, "hBUY", 62, 83) + t(303, 326, "Yxgn", 312)];
  }
}
class Ci extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function K(i, n) {
  i = i - (7417 * -1 + 23 * 363 + -748);
  var t = hn(), e = t[i];
  if (K.nmXNdg === void 0) {
    var A = function(s) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", B = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        B += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(s, c) {
      var I = [], B = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    K.GiQJNM = o, K.cQdCpo = {}, K.nmXNdg = !0;
  }
  var r = t[6527 + 395 * -16 + -207], a = i + r, g = K.cQdCpo[a];
  return g ? e = g : (K.dGXwfc === void 0 && (K.dGXwfc = !0), e = K.GiQJNM(e, n), K.cQdCpo[a] = e), e;
}
function ZA(i, n, t, e, A) {
  return K(t - -125, e);
}
function hn() {
  var i = ["huPNp8oa", "sNRcGW", "iqSv", "puJcQfPy", "g2f6p8ob", "WRRcQr8KW6O", "WOlcMatcLXWLsmktpa", "AatdQbyheZBcTXKrqa", "y8kgW7ZcNmkM", "j8olngJdQG", "W45lWQtdJx3cVGxdVN/cNa", "FgxdKmkwrW", "n1qu", "hbdcVCoUWOq", "WRnmWO3cQMGPWR0", "EgVdJa", "W5VcV8k8q3y", "aCk9W6FdHmoD", "cmo0gKJcGG", "W5nxW61y", "WPFcLmoKW6pcGa", "WQVcQYa", "WQeyW4SyWQK", "WR7cR2ldTYe", "pCoyweaexmoPW78Qbt4fW7u", "cCoMmv3cIW", "WPJdRSkAW4ldMG", "WOJdK8kdaCkt", "W6eek8oXW5y", "W75Ixa", "W5tcQCkjrwi", "uwZcSsv+", "W53cHCoejCoOfhX8rrNdKcy", "WOxdKSkneCku", "oLpcLmkkWQu", "gSk2zwxcPW", "WQyzWRjcfCkkCSk9W6C", "W4P0D8kJeq", "WOVdO8oUdZndqYqobhi", "nSowueyovCkWW6u2gbev", "WRJdHSoEWO1e", "W4RcR8oaWOJcMHNdGCo8xvS/W7W", "WQKzW5C4WRi", "WOaCW5vQWRBcV8kPW4ZcJNKzW7W", "WRirW4eZWQO", "WODOWPmyW5VdQSkb", "bmo6gNZcJW", "WPhcRNddG8kn", "WRavW4aFWQu", "WRFdJSoAWRHF", "WRJdMmoTWQ1g", "WRFcUhq", "W43cSZNdKmkXW4H5da", "uSkLgw/cVdlcJSks", "WQCBW4WUW6C", "WP3cRMVdMCkq", "W654qtVdPW", "oNBdLCo/zmk9W7K", "q8ooWR3cLCkmamkBW43cPmkSW6xcOCoN", "uCkMwXldMu3cQSk/WOdcS8k0WPq", "ofJcULPc", "W5RdH1BcKry", "WP0zEMxdJrji", "WPFdMmkg", "WPhdPd0", "WOlcGcqiBG", "WRSXC8kfiW", "W5zzh8oMWPZdSYNcQeLe", "WOWjWRGbW5f8WOWRWPXWzhC", "W57cQmkYrha", "q8oHjtBdVf/cIGXTW4hdRSkAW58", "WPmvW6e", "WPpcKmo0", "WQ3dOXWzW44", "W7ncWOTFW7LTWOZdGeFcIsL3WR4", "i2BcHSoDnW", "WOxdK8kWb8kx", "bCkzW7VdI8ow", "W6bOqa"];
  return hn = function() {
    return i;
  }, hn();
}
function HA(i, n, t, e, A) {
  return K(i - 884, e);
}
function Bi(i, n, t, e, A) {
  return K(n - 903, t);
}
(function(i, n) {
  function t(g, s, c, I, B) {
    return K(g - 785, s);
  }
  function e(g, s, c, I, B) {
    return K(I - 622, s);
  }
  function A(g, s, c, I, B) {
    return K(I - -639, s);
  }
  var o = i();
  function r(g, s, c, I, B) {
    return K(s - -606, g);
  }
  for (; ; )
    try {
      var a = -parseInt(r(")S2z", -421, -456, -411, -391)) / 1 * (parseInt(t(999, "BD!z", 1029, 1035, 1005)) / 2) + -parseInt(r("Jn^a", -356, -378, -341, -337)) / 3 + parseInt(A(-402, "3G@#", -386, -391, -399)) / 4 + -parseInt(e(872, "$p$R", 904, 865, 827)) / 5 * (parseInt(A(-430, "ML6p", -455, -422, -441)) / 6) + -parseInt(t(1024, "i7el", 1052, 1040, 1043)) / 7 + parseInt(t(983, "y]F$", 949, 995, 952)) / 8 * (-parseInt(r("]RFf", -416, -441, -387, -436)) / 9) + parseInt(r("ytLg", -346, -384, -330, -366)) / 10 * (parseInt(e(856, "*y!u", 822, 824, 852)) / 11);
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(hn, 197767 * -1 + -5 * 7708 + 359820);
function Wt(i, n, t, e, A) {
  return K(A - 37, e);
}
function Eg(i, n, t, e, A) {
  return K(e - -995, n);
}
class xg {
  constructor(n) {
    function t(a, g, s, c, I) {
      return K(c - -842, a);
    }
    this[t("3G@#", -577, -622, -609) + e(1142, 1147, 1171, "8Qev")] = n;
    function e(a, g, s, c, I) {
      return K(s - 956, c);
    }
    function A(a, g, s, c, I) {
      return K(I - -752, g);
    }
    function o(a, g, s, c, I) {
      return K(s - 724, I);
    }
    function r(a, g, s, c, I) {
      return K(a - 569, g);
    }
    try {
      this.#A = n[e(1134, 1113, 1144, "BD!z", 1117) + e(1224, 1193, 1207, "*y!u", 1226) + t("9WVg", -579, -631, -606, -627)] && JSON[r(824, "*y!u", 792, 835, 845)](n[A(-495, "cQp^", -496, -535, -529) + A(-524, "*y!u", -481, -470, -501) + A(-550, "6&uE", -514, -551, -530)]), this.#e = n[t("BD!z", -615, -659, -632, -661) + o(953, 948, 930, 893, "9WVg")];
    } catch (a) {
      console[A(-559, "SL8p", -526, -490, -526)](a);
    }
  }
  #A;
  #e;
  get [HA(1141, 1179, 1172, "@l]G") + "id"]() {
    function n(e, A, o, r, a) {
      return HA(o - -1012, A - 214, o - 283, A);
    }
    function t(e, A, o, r, a) {
      return HA(o - -237, A - 452, o - 266, a);
    }
    return this[t(881, 808, 844, 814, "cQp^") + t(865, 848, 874, 845, "Lc1M")][t(901, 897, 879, 854, "ytLg") + n(113, "nqEo", 91)];
  }
  get [HA(1119, 1146, 1081, "9PF[") + "s"]() {
    function n(e, A, o, r, a) {
      return HA(a - -403, A - 106, o - 384, e);
    }
    function t(e, A, o, r, a) {
      return HA(A - -894, A - 429, o - 12, a);
    }
    return this[n("r88f", 747, 721, 732, 721) + t(227, 215, 239, 203, "ytLg")][n("Of@I", 742, 707, 675, 711) + "s"];
  }
  get [Wt(225, 239, 275, "6&uE", 255) + Eg(-779, "$gki", -803, -803)]() {
    function n(e, A, o, r, a) {
      return Eg(e - 77, a, o - 108, o - 1805);
    }
    function t(e, A, o, r, a) {
      return ZA(e - 269, A - 122, o - -737, e);
    }
    return this[n(1059, 1061, 1064, 1094, "M9)J") + t("y]F$", -654, -620)][t("iwlG", -642, -657) + n(984, 1041, 1009, 973, "ML6p")];
  }
  get [Wt(292, 304, 306, "ytLg", 290) + "b"]() {
    return this.#A;
  }
  get [Wt(190, 215, 207, "9WVg", 221) + ZA(48, 93, 84, "MrA7")]() {
    return this.#e;
  }
  get [HA(1122, 1154, 1128, "rBi8") + ZA(58, 46, 76, "Qj]I") + ZA(69, 131, 99, "iwlG") + ZA(74, 113, 75, "Lc1M")]() {
    function n(r, a, g, s, c) {
      return ZA(r - 488, a - 30, s - -502, c);
    }
    function t(r, a, g, s, c) {
      return Bi(r - 251, s - -1499, c);
    }
    function e(r, a, g, s, c) {
      return HA(g - -979, a - 91, g - 12, s);
    }
    function A(r, a, g, s, c) {
      return Wt(r - 297, a - 316, g - 270, r, g - 240);
    }
    function o(r, a, g, s, c) {
      return HA(c - -432, a - 352, g - 169, r);
    }
    return !!this.#A?.[o("!k!I", 676, 679, 681, 664) + o("rBi8", 685, 671, 680, 660)]?.[t(-385, -369, -372, -352, "nHH&") + A("@l]G", 561, 524) + o("*y!u", 648, 682, 643, 681) + o("r88f", 629, 664, 691, 656) + A("M9)J", 548, 539) + e(132, 83, 121, "Bv8B") + n(-354, -351, -334, -369, "Of@I")];
  }
  get [Bi(1149, 1140, "cQp^") + Wt(238, 262, 296, "r88f", 271) + Bi(1131, 1164, "Dr#Z") + ZA(105, 49, 68, "&aWS") + ZA(99, 86, 86, "5@gh") + HA(1112, 1141, 1075, "&y((")]() {
    function n(r, a, g, s, c) {
      return ZA(r - 321, a - 40, g - 172, s);
    }
    function t(r, a, g, s, c) {
      return HA(r - -1094, a - 278, g - 477, a);
    }
    function e(r, a, g, s, c) {
      return ZA(r - 20, a - 133, g - 987, r);
    }
    function A(r, a, g, s, c) {
      return ZA(r - 398, a - 130, a - 135, r);
    }
    function o(r, a, g, s, c) {
      return HA(a - -284, a - 284, g - 93, r);
    }
    return !!this.#A?.[e("@l]G", 1155, 1118) + e("i7el", 1083, 1053)]?.[o("A#2W", 820, 832) + o("*y!u", 849, 851) + n(220, 218, 254, "5@gh") + o("NVw!", 803, 819) + A("OlvD", 204) + t(-21, "AaYr", -56) + n(307, 305, 288, "iADF")];
  }
}
(function(i, n) {
  function t(a, g, s, c, I) {
    return V(I - -900, g);
  }
  function e(a, g, s, c, I) {
    return V(I - 593, a);
  }
  function A(a, g, s, c, I) {
    return V(c - -338, g);
  }
  const o = i();
  function r(a, g, s, c, I) {
    return V(c - -827, s);
  }
  for (; ; )
    try {
      if (parseInt(A(-28, "7pl8", -53, -101, -191)) / 1 * (-parseInt(t(-852, "PTr*", -774, -657, -729)) / 2) + parseInt(e("ie%3", 827, 872, 731, 852)) / 3 * (parseInt(t(-568, "sjBi", -773, -661, -669)) / 4) + -parseInt(t(-624, "RgaC", -819, -787, -751)) / 5 * (-parseInt(A(-185, "Pz7W", -70, -95, -181)) / 6) + parseInt(e("liPU", 768, 812, 652, 766)) / 7 * (parseInt(t(-579, "7pl8", -813, -645, -705)) / 8) + -parseInt(t(-771, "7pl8", -665, -735, -766)) / 9 + parseInt(r(-456, -559, "T3c*", -506, -435)) / 10 * (-parseInt(A(-41, "RgaC", 131, 13, 96)) / 11) + parseInt(r(-613, -514, "OvCg", -626, -660)) / 12 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(pn, 495943 + 40721 * -25 + 1514887);
function q(i, n, t, e, A) {
  return V(e - 946, t);
}
function _(i, n, t, e, A) {
  return V(n - -849, e);
}
function uA(i, n, t, e, A) {
  return V(i - 167, t);
}
function pn() {
  const i = ["hCoWFLBcOq", "l1pdOqP6", "iSk/W6HYW4m", "zbBcKmogW78", "dSoRF1FdLW", "bhSFvKq", "WPn2WPH/", "c8odzv3dIW", "WRFcLCoTC8kw", "W7FdS0BdN8oM", "W44oW5K/WR0", "wSk+W6ekdW", "vmobWR4", "x8kMcSoB", "bxem", "WP03jSooDqdcGq", "W6ldGSovn0y", "ngdcSh7cHHvZW5rwxSkAvG", "FSksWRhdJ8kQ", "AeddSSkDyq", "DW13sCoe", "k1xdPafQ", "hmoQW5VdO8k6", "WRGmWRLQ", "nmoSW4ZdG8k5", "WO4zWQn3hG", "W5hcHSkC", "EqZcPCogW4q", "W6X+WPVcHvO", "tSkWW6rIW4m", "WRuYWQrwfq", "vCk9dmoBpq", "jmkMW57dN8kl", "W6VdQSoIkgm", "a8o/ArBcPa", "yCkaWOldKmkV", "mCk6W4tdLmoF", "FX7cGConW7G", "m0RdTbDM", "zmoMC387s8kMAq", "h2pdJmoNW6y", "WQPtW5hcVmox", "W4hdVuddSG", "WPj4WPzuW4i", "AqrVrCod", "uSkZoGlcJCo3WOmEbsOQW48Q", "cmoTEa", "W4OkmSoDmG", "rSoqW5m", "hs9e", "vSkcW6C", "eSk8tN0C", "pSkXyfhcQW", "W4OaW4OzWQC", "cNeAvM0", "DCk9dmoBpq", "wSkMamonia", "WQlcJmomlvm", "W4/dUCoinMm8W6iAe8ofBmkSWQq", "xmoBW5i", "tCkaqZfE", "dNeFrN0", "WPz/mbC", "ECkPWP7dKCkf", "bmkPWQXYpa", "t2apW7BcRG", "W57cH8kBaIK", "pSk7qvmC", "WO7cU8k5ANq", "vmovWQJdQSoX", "WPlcTSkt", "v8kZha", "t8keW7RcHby", "vmk/oWpcJCknW7iect4i", "vSoBW4ddH8kK", "oSogW63cKCo8W4pcVSoyWQZcKCkd", "WPBcUmkurG", "o0BcOSosW6u", "FCoEWRJcNCoU", "mf0GcmkpW7iHWOvJW6ZdV2ZcRq", "dCkJWQWwoG", "BCoQeWjniSo2qSoZW7JcObSv", "W6eKWQhcJrO", "vNWgW68", "WQ/dI2BdQri", "W6xdOmo4", "WQtcHCoumL8", "nmkTW6TZW7G5lW", "rSkmvbXh", "sSkmW6ZcIaG", "gCoLy1xcRq", "cSoJCvhdMW", "W58fm8olDW", "wt0Om8og", "WQ4AxW", "WOJdGCkgzmoZ", "sCoYW4pdGCk4", "WP1YWP9IW5u", "WQBcM8oxeKK", "WRL/ufr2", "WQ3dJsxdIdm", "WPaBW4eOWOalWPO", "qb7cH8oaW7K", "uddcKCoCW7ldT8kVm8kS", "hcfywCkO", "WQBcKCo+ACkk", "bgFdKG", "WRdcJSknsmoI", "u8ovWPRcPCoU", "oLpdQcn3", "W6RcH8kCfc0", "EH5XrCoE", "W6NdVCoKc3G", "AMmm", "W5JcR8o6dwK", "W7NdS0FdRSoP", "sCk1hConnG", "WQVcGmomcfS", "wmowW4j6W7m", "WRz5C05M", "ahukuwa", "Dd1Ma8o7", "yCk8W6L0W4G", "o8k7uxqm", "ed1eBmkO", "fIzeFCkx", "vSoAW4v7W7G", "qmogW5ZdH8k0", "v8oRWPVcS8of", "WPpcR8kkDd8", "oCoWW6FdSmk1", "nHFdLSkqqSoijSk6", "W4OBW6e1WRy", "W4OgW445WRS", "yHT5tSoi", "BCkaqZfE", "WOL8erf1", "dCkuW7/dT8kLC3ykjLb2WP5c", "wNWtW6xdPW", "m8onwq", "j8k6W4JdNW", "dheAha", "W4KlnmowDG", "W7yXm8oOqG", "WPBcPCkl", "WQyzxbW", "WRxcLCoOkq", "k8kdWQf7hq", "WOFdNmkouSoY", "asDf", "qmovW4FdMSkL", "W6/dUSoLegu", "WOfVoXD2", "CexcV8o0W60", "hSolzNdcPG", "w2emoq", "Bw8kfmkc", "n17cV8oZW7S", "nSoFqSktWO8", "bh0Dv2y", "WRXOEvnM", "s13dSSk3CG", "gYLdE8kV", "W4XeWPzNW5FcRhy", "WP9JWPLI", "b8koWPGVW6xcLNzvmxC", "WQjSvMPG", "WQZcH8orfq", "jNTEDKC", "pKNdVGPo", "WPBdOmkatmoK", "fCoXW4RdQCkM", "ydJdSc/cKq", "ySk6W60ogW", "W5lcLx/cNsxcJmotcmotW58", "WQZcUmkorrG", "gmoBeqzaE8khWPlcVq", "WP3cPCknyZK", "pSoKW4S", "yKBdPa", "n07dQq", "e8kTWQPfnG", "W5voc8kCW5S", "WOhdGmksrmor", "WRb5BLjN", "W6WIWQlcGHW", "FmkPWRFdRSkG", "W68IWRdcPWy", "qSkzW6JcKG", "WQpcLCo/wmkj", "FCkBo8kEhW", "W7NdVuddUCoV", "WPtdNmkov8oO", "pCoArmkeWO8", "w3CgW6hcSG", "wsrkbdK8WRL0DW94", "W5xcNSovf8kWWPO1yCk9WOuo", "v8k4W7Sxha", "De7dQaf5", "dwymxxO", "W5ZcJCkBjcW", "amk+WRDfia", "jmkQW7VdQSoJ", "W59ZiCk3W50", "n8ogtCky", "vmktW7WUja", "jh0Dv2y", "WOZdJ8kvqSoP", "W4mniSoDFa", "WPCxW7fDoa", "W4JcG8kDeIq", "fSkPW57dL8kl", "wxaiW6BcSq", "gCo+yG", "WPZcVmkjzfe", "wSkXaConnG", "st0O", "FaLTwCoj", "bSo+B1NcVa", "WP96WPq", "WP5sCSkmjwdcVCkDW55NWPVcHG", "shmsW67cRG", "WPdcPSkGCJ0", "FG93", "WOZdRYVdJHG", "At/dOc/dNW", "zSkCWQNcHSkN", "eCoREvO", "aYLfA8kI", "c8kxW7NdSSkOD3PvhMXEWRnNW4y", "vSojWQO", "BCoVeqfml8o+jCoNW7/cMY4lWOG", "W73dQhJdS8oK", "amkJWRzciq", "hmoUuCkVWRG", "WOhdNmkttSoZ", "W5tcI8kmbc8", "xCorW4HR", "FgekpW", "mCobrmk2WPm", "W5vzgG", "ESkCWQ8", "s8kXhmoHoq", "WQVcNSkYt1a", "r8kiW6BcGaC", "xgCtW7tcQa", "xYzmatbPW5zjyHXTWOtcHG", "l1VcV8o5W7W", "imoIW4RdTCkX", "WPa6WR9GpW", "WRLKF1XH", "y2emmSkl", "W4OaW4W4WPK"];
  return pn = function() {
    return i;
  }, pn();
}
function V(i, n) {
  i = i - (753 + -1 * 651);
  const t = pn();
  let e = t[i];
  if (V.azOOBd === void 0) {
    var A = function(s) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", B = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        B += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(s, c) {
      let I = [], B = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + I[Q] + c.charCodeAt(Q % c.length)) % 256, E = I[Q], I[Q] = I[B], I[B] = E;
      Q = 0, B = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, B = (B + I[Q]) % 256, E = I[Q], I[Q] = I[B], I[B] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[B]) % 256]);
      return x;
    };
    V.fhzfEH = g, V.bPaopT = {}, V.azOOBd = !0;
  }
  const o = t[4125 + -876 * 6 + 1131], r = i + o, a = V.bPaopT[r];
  return a ? e = a : (V.IGdjwM === void 0 && (V.IGdjwM = !0), e = V.fhzfEH(e, n), V.bPaopT[r] = e), e;
}
function OA(i, n, t, e, A) {
  return V(e - 257, A);
}
function Te(i, n, t, e, A) {
  return V(i - 480, n);
}
class Ox {
  constructor(n) {
    function t(A, o, r, a, g) {
      return V(o - -814, a);
    }
    function e(A, o, r, a, g) {
      return V(o - -859, a);
    }
    this[e(-546, -626, -657, "8bKZ") + t(-417, -532, -646, "T3c*") + "d"] = n;
  }
  [uA(441, 439, "T3c*") + "se"];
  [uA(314, 373, "Atie") + _(-534, -561, -680, "SGbS") + _(-444, -568, -489, "T3DJ") + q(1254, 1364, "Atie", 1290)] = [_(-548, -495, -369, "ED0Q") + Te(670, "p#]w") + "ic", _(-523, -540, -511, "8bKZ") + q(1126, 1290, "K7cd", 1171) + "ic"];
  [uA(421, 483, "0gaX") + uA(333, 256, "SGbS")];
  async [q(1044, 1032, "T3c*", 1086)](n) {
    function t(r, a, g, s, c) {
      return _(r - 384, g - 1235, g - 223, r);
    }
    const e = await this[o("0gaX", 1191, 1139) + A(-373, -409, -407, -382, "hi7H") + t("9f&o", 641, 697)](n);
    function A(r, a, g, s, c) {
      return _(r - 126, g - 322, g - 418, c);
    }
    function o(r, a, g, s, c) {
      return Te(g - 446, r);
    }
    await Promise[o("0gaX", 1194, 1168) + A(-453, -371, -370, -396, "ED0Q")]([this[A(-250, -333, -347, -404, "8^wV") + t("7pl8", 502, 609) + "d"][A(-323, -279, -204, -160, "0gaX")](n), this[t("RgaC", 583, 547) + o("h4tF", 1267, 1164) + "e"](e)]), this[A(-391, -323, -353, -233, "sjBi") + A(-241, -247, -189, -270, "(LBY") + t("j$ah", 395, 504)]();
  }
  async [_(-403, -516, -541, "PX7%") + OA(527, 365, 420, 442, "Pz7W") + "se"](n) {
    function t(a, g, s, c, I) {
      return _(a - 437, c - 562, s - 382, I);
    }
    function e(a, g, s, c, I) {
      return q(a - 332, g - 261, a, c - -1297);
    }
    function A(a, g, s, c, I) {
      return q(a - 94, g - 359, c, g - -1226);
    }
    function o(a, g, s, c, I) {
      return OA(a - 401, g - 339, s - 90, I - -869, g);
    }
    function r(a, g, s, c, I) {
      return q(a - 112, g - 238, g, a - -1364);
    }
    try {
      if (t(-89, -115, -253, -141, "CAP%") !== t(-87, -77, -197, -80, "7pl8")) {
        const a = await fetch(n);
        if (!a.ok)
          throw t(-134, -194, -194, -115, "3sca") !== o(-416, "*8ef", -345, -459, -429) ? new Error(o(-201, "j$ah", -360, -294, -266) + r(-180, "h4tF", -285, -250, -257) + A(-87, -96, -148, "MYaC", -52) + r(-260, "Pz7W", -204, -206, -340) + "d.") : new _0x3051de(r(-141, "lY4j", -226, -136, -26) + r(-148, "3sca", -181, -79, -33) + o(-206, "]2!)", -292, -418, -318) + e("PTr*", -111, 16, -53, -2) + ".");
        this[t(-260, -168, -152, -159, "liPU") + "se"] = await a[e("$h@4", -207, -193, -133, -201)]();
      } else return _0x1082ac[r(-265, "mM^x", -296, -172, -219) + e("CAP%", -128, -182, -125, -133)][o(-320, "7y(O", -260, -266, -341) + r(-296, "53vA", -267, -188, -284)];
    } catch (a) {
      if (o(-262, "CAP%", -432, -478, -388) !== e("sjBi", -80, -165, -132)) this[r(-129, "SGbS") + "se"] = void 0, console[A(106, -13, 42, "hi7H")](a);
      else {
        _0x2ea057[A(-59, -41, -76, "]2!)")](e("!U(x", -313, -140, -239) + r(-155, "8KJO") + o(-527, "j@Tw", -393, -475, -424) + r(-197, "]2!)") + e("wFNN", 34, -174, -49)), this[t(-134, -99, -178, -148, "^c&w") + "se"] = void 0;
        return;
      }
    }
  }
  async [uA(322, 270, "SGbS") + OA(450, 559, 556, 573, "mM^x") + "e"](n) {
    this[o(659, 440, 548, 472, "yjjI") + o(531, 486, 457, 563, "*8ef")] = void 0;
    function t(a, g, s, c, I) {
      return OA(a - 41, g - 451, s - 450, g - 727, a);
    }
    if (!n)
      if (e(-404, "p#]w") === o(659, 481, 541, 461, "sjBi")) {
        console[o(268, 418, 306, 377, "yjjI")](o(526, 524, 439, 334, "Dm&R") + e(-444, "3sca") + A(992, 1105, 1092, 978, "liPU") + r(891, 910, "8KJO", 1010) + t("RgaC", 1281, 1320)), this[t("RgaC", 1299, 1233) + "se"] = void 0;
        return;
      } else return null;
    function e(a, g, s, c, I) {
      return Te(a - -1194, g);
    }
    function A(a, g, s, c, I) {
      return uA(s - 597, g - 82, I);
    }
    function o(a, g, s, c, I) {
      return q(a - 354, g - 448, I, s - -747);
    }
    function r(a, g, s, c, I) {
      return _(a - 435, c - 1511, s - 114, s);
    }
    await this[t("^c&w", 1206, 1124) + e(-423, "#BZ^") + "se"](n);
  }
  async [uA(356, 376, "3sca") + q(1161, 1164, "hi7H", 1066) + _(-659, -651, -731, "7y(O")](n) {
    const e = (await fetch("" + n + this[o(138, 37, 121, 119, "h4tF") + o(-6, 138, 35, 128, "mM^x") + a(500, 596, 592, "8KJO") + a(551, 645, 573, "53vA")][0])).ok ? -2 * 1721 + 2946 + 496 : 1;
    function A(g, s, c, I, B) {
      return OA(g - 216, s - 395, c - 182, g - -655, I);
    }
    function o(g, s, c, I, B) {
      return OA(g - 68, s - 282, c - 185, c - -477, B);
    }
    function r(g, s, c, I, B) {
      return q(g - 436, s - 360, c, s - -858);
    }
    function a(g, s, c, I, B) {
      return _(g - 347, c - 1102, c - 223, I);
    }
    return "" + n + this[o(151, 116, 130, 140, "]2!)") + o(36, 36, -85, -165, "7y(O") + A(-73, 25, -129, "ED0Q") + r(239, 267, "!U(x")][e];
  }
  [q(1169, 971, "8bKZ", 1096) + q(1204, 1356, "0uZG", 1263) + "s"](n) {
    function t(e, A, o, r, a) {
      return q(e - 242, A - 393, o, A - -494);
    }
    n[t(565, 617, "7y(O") + "ch"]((e) => console[t(542, 582, "OvCg")](e));
  }
  [q(999, 997, "ED0Q", 1123) + q(1218, 1102, "!U(x", 1127) + uA(335, 302, "K7cd")](n) {
    function t(A, o, r, a, g) {
      return Te(g - -1452, a);
    }
    function e(A, o, r, a, g) {
      return _(A - 324, A - 1028, r - 484, o);
    }
    n[t(-699, -771, -716, "9f&o", -660) + "ch"]((A) => console[e(480, "mx6Z", 414)](A));
  }
  [q(1223, 1067, "A4w#", 1166) + _(-582, -687, -744, "53vA")]() {
    function n(A, o, r, a, g) {
      return _(A - 221, A - 876, r - 494, r);
    }
    function t(A, o, r, a, g) {
      return OA(A - 129, o - 71, r - 477, g - -1189, o);
    }
    function e(A, o, r, a, g) {
      return q(A - 2, o - 381, A, r - -1563);
    }
    return window[n(148, 210, "p#]w") + t(-571, "3sca", -771, -673, -691)][n(312, 272, "PX7%") + e("mx6Z", -248, -367)];
  }
  [OA(488, 401, 513, 453, "ie%3") + Te(745, "ED0Q") + uA(445, 515, "Pz7W")]() {
    function n(r, a, g, s, c) {
      return q(r - 195, a - 246, a, s - -294);
    }
    function t(r, a, g, s, c) {
      return _(r - 203, c - 1207, g - 282, a);
    }
    function e(r, a, g, s, c) {
      return OA(r - 346, a - 492, g - 428, g - -306, r);
    }
    function A(r, a, g, s, c) {
      return _(r - 409, g - 1442, g - 7, a);
    }
    function o(r, a, g, s, c) {
      return uA(a - -255, a - 38, c);
    }
    try {
      if (o(88, 18, -51, -107, "(LBY") === n(657, "]2!)", 650, 767, 653)) this[n(761, "PTr*", 805, 763, 848) + "se"] = void 0, _0x2f2102[o(54, 179, 103, 275, "hi7H")](_0x1e9ce7);
      else {
        if (!this[t(610, "RgaC", 790, 731, 673) + "se"])
          if (e("PTr*", 239, 250, 292, 339) === n(810, "yjjI", 865, 789, 755)) _0x5bc2c9[e("53vA", 78, 150, 125, 216) + o(212, 116, 77, 198, "T3c*")](_0x3d8557);
          else throw new Ci(o(302, 236, 240, 320, "RgaC") + n(820, "p#]w", 798, 860, 908) + t(458, "PTr*", 520, 451, 561) + A(748, "Uv59", 823, 749, 875) + ".");
        if (!this[A(747, "^c&w", 696, 796, 745) + A(790, "RgaC", 803, 770, 679) + "d"][e("K7cd", 188, 215, 317, 264) + A(810, "OvCg", 756, 725, 793) + n(923, "Atie", 892, 897, 831) + "ed"]()) {
          if (o(69, 39, -25, 93, "Dm&R") !== e("j@Tw", -30, 56, 111, 109)) throw new Ci(n(820, "j@Tw", 852, 766, 881) + n(979, "A4w#", 778, 888, 779) + o(-33, 79, 90, -41, "h1Y7") + o(268, 159, 178, 277, "OvCg") + ".");
          return this[t(440, "T3DJ", 536, 497, 489) + t(543, "j$ah", 687, 578, 569) + "se"]()?.[e("A4w#", 84, 87, 36, 63) + A(841, "9f&o", 862, 855, 966)]?.[A(1017, "yjjI", 907, 1024, 997)] || [];
        }
        this[n(896, "mM^x", 927, 927, 867) + o(54, 66, -13, 184, "9f&o")] = new xg(vx(this[t(658, "#BZ^", 590, 650, 574) + "se"], this[o(296, 255, 336, 150, "h4tF") + o(183, 144, 241, 200, "CAP%")]())), this[A(814, "Uv59", 876, 881, 877) + A(975, "8^wV", 920, 954, 1034) + "s"](this[t(630, "j$ah", 538, 480, 570) + e("T3DJ", 369, 269, 351, 394)][A(625, "RgaC", 695, 785, 661) + "s"]), this[n(889, "j@Tw", 837, 844, 761) + n(926, "*8ef", 921, 845, 952) + e("T3DJ", 280, 156, 270, 72)](this[n(999, "8KJO", 1001, 956, 959) + A(964, "RgaC", 869, 861, 818)][o(81, 173, 162, 149, "wFNN") + A(778, "OvCg", 795, 780, 861)]);
      }
    } catch (r) {
      if (e("mM^x", 168, 273) === n(965, "K7cd", 995, 936)) return _0x5e035d instanceof _0x1e219d && _0x1de980[t(579, "SGbS", 676, 545, 567) + A(941, "T3DJ", 898)](_0x1bc66f), null;
      {
        if (r instanceof Ci) {
          if (n(933, "A4w#", 937, 955) === A(873, "Uv59", 845)) throw new _0x351f0a(A(957, "CAP%", 924) + n(908, "sjBi", 888, 781) + e("0gaX", 145, 224) + n(947, "Atie", 945, 880) + ".");
          r[n(877, "K7cd", 658, 785)]();
        } else if (r instanceof Error)
          if (e("ED0Q", 182, 145) === t(591, "jt&g", 655, 613, 558)) console[n(910, "mM^x", 985, 992)](r);
          else {
            _0x3b17b7 instanceof _0xd3b1a ? _0xda8bc[A(690, "Uv59", 808)]() : _0x27ff2f instanceof _0x5e028c && _0x34823a[t(720, "mM^x", 648, 655, 698)](_0x38035d);
            const g = {};
            g[A(880, "sjBi", 784) + n(1092, "ED0Q", 1113, 988)] = !1, g[n(975, "3sca", 909, 920) + "s"] = [], g[e("p#]w", 164, 107) + A(1044, "8^wV", 927)] = [], g[o(150, 76, 76, -7, "wFNN") + t(770, "wFNN", 652, 670, 703) + o(-54, 31, 33, -10, "lY4j")] = void 0, g[t(713, "j@Tw", 592, 729, 654)] = function() {
            }, g[o(109, 220, 231, 96, "$h@4") + A(769, "yjjI", 888)] = "", this[A(797, "i0tr", 701) + t(724, "7y(O", 583, 772, 705)] = new _0x4aba9e(g);
          }
        const a = {};
        a[e("8^wV", 140, 237) + n(1007, "0uZG", 1050, 987)] = !1, a[n(788, "8KJO", 771, 790) + "s"] = [], a[e("]2!)", 193, 75) + e("j$ah", 302, 178)] = [], a[n(818, "RgaC", 934, 869) + n(754, "j$ah", 722, 797) + n(722, "p#]w", 673, 768)] = void 0, a[t(524, "j$ah", 620, 526, 527)] = function() {
        }, a[e("]2!)", 103, 99) + A(1012, "PX7%", 893)] = "", this[t(559, "8KJO", 538, 724, 662) + o(-51, 22, 131, -78, "8KJO")] = new xg(a);
      }
    }
  }
  [uA(284, 246, "CAP%") + OA(551, 451, 588, 510, "53vA") + OA(474, 645, 485, 523, "^c&w") + "t"]() {
    function n(t, e, A, o, r) {
      return _(t - 171, e - 1404, A - 305, o);
    }
    return this[n(822, 845, 777, "jt&g") + n(717, 731, 631, "hi7H")];
  }
  [uA(504, 428, "A4w#") + _(-689, -690, -799, "*8ef") + "se"]() {
    function n(r, a, g, s, c) {
      return uA(s - -888, a - 94, g);
    }
    function t(r, a, g, s, c) {
      return q(r - 382, a - 168, c, r - -610);
    }
    if (!this[e(-339, -321, -274, -384, "liPU") + "se"]) return n(-384, -396, "$h@4", -429) !== e(-482, -327, -339, -387, "PX7%") ? this[e(-535, -369, -359, -408, "A4w#") + o(-51, 19, "OvCg", -119, -9)] : null;
    function e(r, a, g, s, c) {
      return Te(s - -992, c);
    }
    function A(r, a, g, s, c) {
      return _(r - 317, r - 447, g - 391, c);
    }
    function o(r, a, g, s, c) {
      return uA(c - -336, a - 68, g);
    }
    try {
      if (n(-569, -581, "yjjI", -579, -673) === n(-445, -408, "T3DJ", -461, -506)) return JSON[n(-570, -394, "PTr*", -473, -406)](this[e(-327, -237, -328, -325, "j$ah") + "se"]);
      _0x100234[o(-16, -82, "0uZG", 111, 6) + "ch"]((r) => _0x3abf4e[n(-557, -523, "9f&o", -580, -606)](r));
    } catch (r) {
      if (t(665, 764, 740, 780, "h1Y7") === A(-216, -174, -185, -325, "!U(x")) return _0x23361a[A(-96, -30, -5, -215, "Uv59")](this[o(72, 161, "SGbS", 210, 120) + "se"]);
      if (r instanceof Error) {
        if (A(-250, -129, -228, -352, "!U(x") === A(-168, -218, -284, -181, "K7cd"))
          return this[t(608, 517, 615, 669, "j$ah") + e(-349, -309, -344, -403, "RgaC") + "se"]()?.[n(-353, -473, "h1Y7", -368) + A(-196, -217, -310, -119, "i0tr")]?.[t(616, 593, 615, 596, "T3DJ") + e(-275, -248, -359, -342, "RgaC")];
        m[o(98, -16, "8KJO", 85, 82) + t(480, 384, 550, 465, "sjBi")](r);
      }
      return null;
    }
  }
  [_(-538, -605, -687, "#BZ^") + _(-589, -667, -587, "^c&w")]() {
    function n(A, o, r, a, g) {
      return q(A - 106, o - 239, g, a - -1055);
    }
    const t = this[n(155, 17, 24, 42, "8^wV") + n(269, 131, 52, 147, "Dm&R") + "se"]();
    function e(A, o, r, a, g) {
      return OA(A - 88, o - 36, r - 394, o - -426, r);
    }
    return t?.[n(59, 82, 193, 140, "lY4j") + n(-83, 70, -97, 17, "hi7H")]?.[e(80, 144, "8bKZ")] || [];
  }
  [Te(759, "7pl8") + uA(413, 433, "p#]w") + OA(622, 577, 685, 583, "8KJO")]() {
    function n(o, r, a, g, s) {
      return q(o - 162, r - 312, o, r - -1024);
    }
    function t(o, r, a, g, s) {
      return uA(g - -100, r - 287, o);
    }
    function e(o, r, a, g, s) {
      return _(o - 384, a - -64, a - 88, r);
    }
    return this[n("^c&w", 35) + n("8^wV", 100) + "se"]()?.[e(-789, "Q%gD", -716) + t("(LBY", 207, 88, 210)]?.[e(-699, "3sca", -606) + e(-695, "ie%3", -651)];
  }
}
class Or extends Ox {
  static _instance;
  static getInstance() {
    if (!this._instance) {
      const n = new Lx();
      this._instance = new Or(n);
    }
    return this._instance;
  }
}
const Jx = ({ children: i }) => {
  const n = qA(null);
  return NB(n, Ce.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(QC, { ref: n, children: i });
}, Ux = ({ configuration: i }) => i ? /* @__PURE__ */ w(aC, { target: i.styleTarget, children: /* @__PURE__ */ w(
  tB,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Or.getInstance(),
    children: /* @__PURE__ */ w(
      sB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: Ke.FACE,
        children: /* @__PURE__ */ w(
          cB,
          {
            value: wx({
              onError: i.onError
            }),
            children: /* @__PURE__ */ w(fB, { analytics: Gx, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ w(CB, { children: /* @__PURE__ */ w(yx, { cameraConfiguration: i.camera, children: /* @__PURE__ */ w(Jx, { children: /* @__PURE__ */ w(px, { ...i }) }) }) }) })
          }
        )
      }
    )
  }
) }) : null;
d0(Ux, "x-dot-face-auto-capture", ["configuration"]);
