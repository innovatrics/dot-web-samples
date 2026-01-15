var zt, R, Ig, sg, qe, vr, cg, Cg, Bg, gr, xi, li, Qg, qt = {}, Eg = [], Ts = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xt = Array.isArray;
function Ie(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Ir(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function DA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 3890 * 2 + 1 * -6779 + 3 * -333 && (r.children = arguments.length > 4519 + -1 * 3302 + -1214 * 1 ? zt.call(arguments, 2476 + -2 * 1237) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Pt(i, r, e, A, null);
}
function Pt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++Ig, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function Hs() {
  var i = {};
  return i.current = null, i;
}
function YA(i) {
  return i.children;
}
function KA(i, n) {
  this.props = i, this.context = n;
}
function Et(i, n) {
  if (n == null) return i.__ ? Et(i.__, i.__i + (-6189 + -10 * -619)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Et(i) : null;
}
function xg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 14009 + 14009 * -1; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return xg(i);
  }
}
function di(i) {
  (!i.__d && (i.__d = !0) && qe.push(i) && !Uo.__r++ || vr != R.debounceRendering) && ((vr = R.debounceRendering) || cg)(Uo);
}
function Uo() {
  for (var i, n, t, e, A, o, r, g = 3 * -3171 + 9715 + -201; qe.length; ) qe.length > g && qe.sort(Cg), i = qe.shift(), g = qe.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Ie({}, e)).__v = e.__v + 1, R.vnode && R.vnode(t), sr(n.__P, t, e, n.__n, n.__P.namespaceURI, 32 & e.__u ? [A] : null, o, A ?? Et(e), !!(32 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, ug(o, t, r), e.__e = e.__ = null, t.__e != A && xg(t)));
  Uo.__r = 7019 * 1 + 6317 + -13336;
}
function lg(i, n, t, e, A, o, r, g, a, s, B) {
  var I, c, E, x, Q, d, f, h = e && e.__k || Eg, p = n.length;
  for (a = _s(t, n, h, a, p), I = 3520 + 2 * -4804 + -1 * -6088; I < p; I++) (E = t.__k[I]) != null && (c = E.__i == -1 ? qt : h[E.__i] || qt, E.__i = I, d = sr(i, E, c, A, o, r, g, a, s, B), x = E.__e, E.ref && c.ref != E.ref && (c.ref && cr(c.ref, null, E), B.push(E.ref, E.__c || x, E)), Q == null && x != null && (Q = x), (f = !!(4 & E.__u)) || c.__k === E.__k ? a = dg(E, a, i, f) : typeof E.type == "function" && d !== void 0 ? a = d : x && (a = x.nextSibling), E.__u &= -7);
  return t.__e = Q, a;
}
function _s(i, n, t, e, A) {
  var o, r, g, a, s, B = t.length, I = B, c = 7403 + 673 * -11;
  for (i.__k = new Array(A), o = 0; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Pt(null, r, null, null, null) : Xt(r) ? r = i.__k[o] = Pt(YA, { children: r }, null, null, null) : r.constructor == null && r.__b > 8086 + 2059 * -4 + 150 ? r = i.__k[o] = Pt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, a = o + c, r.__ = i, r.__b = i.__b + 1, g = null, (s = r.__i = Ks(r, t, a, I)) != -1 && (I--, (g = t[s]) && (g.__u |= 2)), g == null || g.__v == null ? (s == -1 && (A > B ? c-- : A < B && c++), typeof r.type != "function" && (r.__u |= -4197 + 1801 * 4 + -3003)) : s != a && (s == a - (-607 * -12 + 1 * 1712 + 257 * -35) ? c-- : s == a + (-2697 * -1 + -7913 + 5217) ? c++ : (s > a ? c-- : c++, r.__u |= 1283 * -5 + -1929 + 8348))) : i.__k[o] = null;
  if (I)
    for (o = 574 + 1 * 7997 + -8571; o < B; o++) (g = t[o]) != null && 3954 * 2 + -882 + -7026 == (-331 * 29 + -8493 + 18094 & g.__u) && (g.__e == e && (e = Et(g)), hg(g, g));
  return e;
}
function dg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = -5 * 1654 + -5851 + -1569 * -9; A && o < A.length; o++) A[o] && (A[o].__ = i, n = dg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = Et(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -4 * 284 + 4840 + 308 * -12 == n.nodeType);
  return n;
}
function he(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Xt(i) ? i.some(function(t) {
    he(t, n);
  }) : n.push(i)), n;
}
function Ks(i, n, t, e) {
  var A, o, r, g = i.key, a = i.type, s = n[t], B = s != null && (-9900 + -1 * 8845 + 9 * 2083 & s.__u) == 0;
  if (s === null && g == null || B && g == s.key && a == s.type) return t;
  if (e > (B ? 1 : -7303 + -1 * 6046 + 13349)) {
    for (A = t - (-2628 + 2 * 1445 + -261), o = t + (-7 * -1345 + 8131 + 319 * -55); A >= 2 * 492 + 3139 + -4123 || o < n.length; ) if ((s = n[r = A >= 0 ? A-- : o++]) != null && 7718 + -8179 * -1 + -15897 == (-14121 + -1 * -14123 & s.__u) && g == s.key && a == s.type) return r;
  }
  return -1;
}
function Fr(i, n, t) {
  n[0] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Ts.test(n) ? t : t + "px";
}
function ro(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Fr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Fr(i.style, n, t[n]);
    }
  else if (n[-1 * -8629 + -397 * 12 + 5 * -773] == "o" && n[2561 + 386 * -19 + 4774] == "n") o = n != (n = n.replace(Bg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(110 + 3 * -2009 + 5919) : n.slice(3021 * -1 + 3 * -733 + -7 * -746), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = gr, i.addEventListener(n, o ? li : xi, o)) : i.removeEventListener(n, o ? li : xi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-1747 * 2 + -3631 * 1 + 7129 * 1] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -3385 * 2 + 1842 * 5 + -9 * 271 == t ? "" : t));
  }
}
function Mr(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = gr++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function sr(i, n, t, e, A, o, r, g, a, s) {
  var B, I, c, E, x, Q, d, f, h, p, b, D, k, y, O, Z, NA, yA = n.type;
  if (n.constructor != null) return null;
  -19 * 402 + 1 * 8080 + 314 * -1 & t.__u && (a = !!(7 * -607 + 8654 + 4373 * -1 & t.__u), o = [g = n.__e = t.__e]), (B = R.__b) && B(n);
  A: if (typeof yA == "function") try {
    if (f = n.props, h = "prototype" in yA && yA.prototype.render, p = (B = yA.contextType) && e[B.__c], b = B ? p ? p.props.value : B.__ : e, t.__c ? d = (I = n.__c = t.__c).__ = I.__E : (h ? n.__c = I = new yA(f, b) : (n.__c = I = new KA(f, b), I.constructor = yA, I.render = qs), p && p.sub(I), I.state || (I.state = {}), I.__n = e, c = I.__d = !(-1 * -1603 + 7 * -926 + 4879), I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && yA.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = Ie({}, I.__s)), Ie(I.__s, yA.getDerivedStateFromProps(f, I.__s))), E = I.props, x = I.state, I.__v = n, c) h && yA.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && yA.getDerivedStateFromProps == null && f !== E && I.componentWillReceiveProps != null && I.componentWillReceiveProps(f, b), n.__v == t.__v || !I.__e && I.shouldComponentUpdate != null && I.shouldComponentUpdate(f, I.__s, b) === !1) {
        for (n.__v != t.__v && (I.props = f, I.state = I.__s, I.__d = !(9868 + 535 * -7 + -6122 * 1)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(bA) {
          bA && (bA.__ = n);
        }), D = 0; D < I._sb.length; D++) I.__h.push(I._sb[D]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(f, I.__s, b), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(E, x, Q);
      });
    }
    if (I.context = b, I.props = f, I.__P = i, I.__e = !(-3653 + -257 * -20 + 2 * -743), k = R.__r, y = 1013 * 7 + 6586 + -13677, h) {
      for (I.state = I.__s, I.__d = !(4944 + 1 * -5455 + 512), k && k(n), B = I.render(I.props, I.state, I.context), O = 0; O < I._sb.length; O++) I.__h.push(I._sb[O]);
      I._sb = [];
    } else do
      I.__d = !(2 * 1979 + 901 + -4858), k && k(n), B = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++y < 4682 + 659 * 10 + -11247);
    I.state = I.__s, I.getChildContext != null && (e = Ie(Ie({}, e), I.getChildContext())), h && !c && I.getSnapshotBeforeUpdate != null && (Q = I.getSnapshotBeforeUpdate(E, x)), Z = B, B != null && B.type === YA && B.key == null && (Z = fg(B.props.children)), g = lg(i, Xt(Z) ? Z : [Z], n, t, e, A, o, r, g, a, s), I.base = n.__e, n.__u &= -(9 * 910 + -828 + -7201), I.__h.length && r.push(I), d && (I.__E = I.__ = null);
  } catch (bA) {
    if (n.__v = null, a || o != null)
      if (bA.then) {
        for (n.__u |= a ? -5522 + -1 * -3673 + 2009 : 3679 * 1 + -2995 + -556; g && g.nodeType == 8 && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else {
        for (NA = o.length; NA--; ) Ir(o[NA]);
        ui(n);
      }
    else n.__e = t.__e, n.__k = t.__k, bA.then || ui(n);
    R.__e(bA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = js(t.__e, n, t, e, A, o, r, a, s);
  return (B = R.diffed) && B(n), 128 & n.__u ? void 0 : g;
}
function ui(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(ui);
}
function ug(i, n, t) {
  for (var e = -13170 + 878 * 15; e < t.length; e++) cr(t[e], t[++e], t[++e]);
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
function fg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 0 ? i : Xt(i) ? i.map(fg) : Ie({}, i);
}
function js(i, n, t, e, A, o, r, g, a) {
  var s, B, I, c, E, x, Q, d = t.props || qt, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = -2 * 4618 + -2117 * -1 + 7119; s < o.length; s++) if ((E = o[s]) && "setAttribute" in E == !!h && (h ? E.localName == h : 16168 + -53 * 305 == E.nodeType)) {
      i = E, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), g && (R.__m && R.__m(n, o), g = !1), o = null;
  }
  if (h == null) d === f || g && i.data == f || (i.data = f);
  else {
    if (o = o && zt.call(i.childNodes), !g && o != null)
      for (d = {}, s = 0; s < i.attributes.length; s++) d[(E = i.attributes[s]).name] = E.value;
    for (s in d) if (E = d[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = E;
      else if (!(s in f)) {
        if (s == "value" && "defaultValue" in f || s == "checked" && "defaultChecked" in f) continue;
        ro(i, s, null, E, A);
      }
    }
    for (s in f) E = f[s], s == "children" ? c = E : s == "dangerouslySetInnerHTML" ? B = E : s == "value" ? x = E : s == "checked" ? Q = E : g && typeof E != "function" || d[s] === E || ro(i, s, E, d[s], A);
    if (B) g || I && (B.__html == I.__html || B.__html == i.innerHTML) || (i.innerHTML = B.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), lg(n.type == "template" ? i.content : i, Xt(c) ? c : [c], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && Et(t, -2904 + 4339 * 1 + 5 * -287), g, a), o != null)
      for (s = o.length; s--; ) Ir(o[s]);
    g || (s = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[s] || h == "progress" && !x || h == "option" && x != d[s]) && ro(i, s, x, d[s], A), s = "checked", Q != null && Q != i[s] && ro(i, s, Q, d[s], A));
  }
  return i;
}
function cr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function hg(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || cr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -3101 + 6067 * -1 + -16 * -573; A < e.length; A++) e[A] && hg(e[A], n, t || typeof i.type != "function");
  t || Ir(i.__e), i.__c = i.__ = i.__e = void 0;
}
function qs(i, n, t) {
  return this.constructor(i, t);
}
function Ne(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], sr(n, i = (!e && t || n).__k = DA(YA, null, [i]), A || qt, qt, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? zt.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), ug(o, i, r);
}
function Cr(i, n) {
  Ne(i, n, Cr);
}
function Br(i, n, t) {
  var e, A, o, r, g = Ie({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 5 * -1642 + 3874 + 482 * 9 && (g.children = arguments.length > 10966 + 19 * -577 ? zt.call(arguments, 2) : t), Pt(i.type, g, e || i.key, A || i.ref, null);
}
function ve(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, di(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Qg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
zt = Eg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, Ig = 255 + 420 * 23 + 1983 * -5, sg = function(i) {
  return i != null && i.constructor == null;
}, KA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ie({}, this.state), typeof i == "function" && (i = i(Ie({}, t), this.props)), i && Ie(t, i), i != null && this.__v && (n && this._sb.push(n), di(this));
}, KA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), di(this));
}, KA.prototype.render = YA, qe = [], cg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Cg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Uo.__r = 0, Bg = /(PointerCapture)$|Capture$/i, gr = -373 * -9 + 5594 * 1 + -8951, xi = Mr(!1), li = Mr(!0), Qg = 0;
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -12344 + -823 * -15; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, Yo.apply(this, arguments);
}
function pg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = -14 * 673 + 752 + -1734 * -5; e < o.length; e++) n.indexOf(t = o[e]) >= 0 || (A[t] = i[t]);
  return A;
}
var Vs = ["context", "children"], Zs = ["useFragment"];
function zs(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    $s.call(this, e);
  }, A.prototype.attributeChangedCallback = A0, A.prototype.disconnectedCallback = e0, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function Xs(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = pg(i, Vs);
  return Br(n, t);
}
function $s(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = DA(Xs, Yo({}, this._props, { context: t.detail.context }), mg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Cr : Ne)(this._vdom, this._root);
}
function yg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function A0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[yg(i)] = t, this._vdom = Br(this._vdom, e), Ne(this._vdom, this._root);
  }
}
function e0() {
  Ne(this._vdom = null, this._root);
}
function Wr(i, n) {
  var t = this, e = i.useFragment, A = pg(i, Zs);
  return DA(e ? YA : "slot", Yo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function mg(i, n, t) {
  if (7719 + 3858 * -2 === i.nodeType) return i.data;
  if (-64 + -1361 * 6 + 8231 * 1 !== i.nodeType) return null;
  var e = [], A = {}, o = 0, r = i.attributes, g = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[yg(r[o].name)] = r[o].value);
  for (o = g.length; o--; ) {
    var a = mg(g[o], null, t), s = g[o].slot;
    s ? A[s] = DA(Wr, { name: s }, a) : e[o] = a;
  }
  var B = !(!t || !t.shadow), I = n ? DA(Wr, { useFragment: !B }, e) : e;
  return !B && n && (i.innerHTML = ""), DA(n || i.nodeName.toLowerCase(), A, I);
}
var t0 = 9745 + -9745 * 1;
function m(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var s = {};
  s.type = i, s.props = a, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --t0, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var B = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return R.vnode && R.vnode(B), B;
}
var GA = function() {
  return GA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, GA.apply(this, arguments);
};
function xt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function o0(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var n0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, i0 = o0(function(i) {
  return n0.test(i) || i.charCodeAt(401 * 1 + 7908 + -8309) === 111 && i.charCodeAt(1) === 5714 + 467 * -12 && i.charCodeAt(2) < 4208 + -7 * -1267 + -12986;
}), Re, U, Yn, Lr, lt = 1 * -6001 + 267 + 5734, wg = [], P = R, Or = P.__b, Jr = P.__r, Ur = P.diffed, Yr = P.__c, Pr = P.unmount, Tr = P.__;
function wt(i, n) {
  P.__h && P.__h(U, i, lt || n), lt = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = U.__H || (U.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function IA(i) {
  return lt = 1, Qr(kg, i);
}
function Qr(i, n, t) {
  var e = wt(Re++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : kg(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], s = e.t(a, g);
    a !== s && (e.__N = [s, e.__[1]], e.__c.setState({}));
  }], e.__c = U, !U.__f)) {
    var A = function(g, a, s) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(c) {
        return !!c.__c;
      });
      if (B.every(function(c) {
        return !c.__N;
      })) return !o || o.call(this, g, a, s);
      var I = e.__c.props !== g;
      return B.forEach(function(c) {
        if (c.__N) {
          var E = c.__[0];
          c.__ = c.__N, c.__N = void 0, E !== c.__[0] && (I = !0);
        }
      }), o && o.call(this, g, a, s) || I;
    };
    U.__f = !0;
    var o = U.shouldComponentUpdate, r = U.componentWillUpdate;
    U.componentWillUpdate = function(g, a, s) {
      if (this.__e) {
        var B = o;
        o = void 0, A(g, a, s), o = B;
      }
      r && r.call(this, g, a, s);
    }, U.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function K(i, n) {
  var t = wt(Re++, 3);
  !P.__s && Er(t.__H, n) && (t.__ = i, t.u = n, U.__H.__h.push(t));
}
function Dt(i, n) {
  var t = wt(Re++, 4);
  !P.__s && Er(t.__H, n) && (t.__ = i, t.u = n, U.__h.push(t));
}
function Ae(i) {
  return lt = 4168 + 1 * 7229 + -11392, pA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Dg(i, n, t) {
  lt = -6 * 1171 + -2501 + -1 * -9533, Dt(function() {
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
function pA(i, n) {
  var t = wt(Re++, 7);
  return Er(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function ye(i, n) {
  return lt = 2 * -1511 + -438 + 3468 * 1, pA(function() {
    return i;
  }, n);
}
function ce(i) {
  var n = U.context[i.__c], t = wt(Re++, -8061 + -269 * -30);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(U)), n.props.value) : i.__;
}
function Po(i, n) {
  P.useDebugValue && P.useDebugValue(n ? n(i) : i);
}
function bg() {
  var i = wt(Re++, 11);
  if (!i.__) {
    for (var n = U.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-6223 + -6223 * -1, 4213 * 1 + 8233 + -6223 * 2]);
    i.__ = "P" + t[1367 + 1367 * -1] + "-" + t[1]++;
  }
  return i.__;
}
function r0() {
  for (var i; i = wg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(po), i.__H.__h.forEach(fi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], P.__e(n, i.__v);
  }
}
P.__b = function(i) {
  U = null, Or && Or(i);
}, P.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Tr && Tr(i, n);
}, P.__r = function(i) {
  Jr && Jr(i), Re = 0;
  var n = (U = i.__c).__H;
  n && (Yn === U ? (n.__h = [], U.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(po), n.__h.forEach(fi), n.__h = [], Re = 10098 + -1122 * 9)), Yn = U;
}, P.diffed = function(i) {
  Ur && Ur(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (1970 + 7347 * -1 + 1 * 5378 !== wg.push(n) && Lr === P.requestAnimationFrame || ((Lr = P.requestAnimationFrame) || a0)(r0)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Yn = U = null;
}, P.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(po), t.__h = t.__h.filter(function(e) {
        return !e.__ || fi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], P.__e(e, t.__v);
    }
  }), Yr && Yr(i, n);
}, P.unmount = function(i) {
  Pr && Pr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      po(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && P.__e(n, t.__v));
};
var Hr = typeof requestAnimationFrame == "function";
function a0(i) {
  var n, t = function() {
    clearTimeout(e), Hr && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  Hr && (n = requestAnimationFrame(t));
}
function po(i) {
  var n = U, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), U = n;
}
function fi(i) {
  var n = U;
  i.__c = i.__(), U = n;
}
function Er(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function kg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function Sg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function hi(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Gg(i, n) {
  var t = n(), e = IA({ t: { __: t, u: n } }), A = e[7159 + 1 * -7159].t, o = e[9236 + -5 * 1847];
  return Dt(function() {
    A.__ = t, A.u = n, Pn(A) && o({ t: A });
  }, [i, t, n]), K(function() {
    return Pn(A) && o({ t: A }), i(function() {
      Pn(A) && o({ t: A });
    });
  }, [i]), t;
}
function Pn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-1 * 3258 + 1366 * -1 + 4624 !== n || (1697 * -1 + -7669 + 493 * 19) / n == (-502 + 5 * 1369 + 906 * -7) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Ng(i) {
  i();
}
function Rg(i) {
  return i;
}
function vg() {
  return [!1, Ng];
}
var Fg = Dt;
function pi(i, n) {
  this.props = i, this.context = n;
}
function g0(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : hi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, DA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(pi.prototype = new KA()).isPureReactComponent = !0, pi.prototype.shouldComponentUpdate = function(i, n) {
  return hi(this.props, i) || hi(this.state, n);
};
var _r = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), _r && _r(i);
};
var I0 = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 4301 + -2 * -3495 + -7380;
function Mg(i) {
  function n(t) {
    var e = Sg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = I0, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Kr = function(i, n) {
  return i == null ? null : he(he(i).map(n));
}, s0 = { map: Kr, forEach: Kr, count: function(i) {
  return i ? he(i).length : 11291 + 11291 * -1;
}, only: function(i) {
  var n = he(i);
  if (3458 + 9133 * -1 + 5676 !== n.length) throw "Children.only";
  return n[-6374 * -1 + -9114 + 1370 * 2];
}, toArray: he }, c0 = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  c0(i, n, t, e);
};
var jr = R.unmount;
function Wg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Sg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Wg(e, n, t);
  })), i;
}
function Lg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return Lg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function yo() {
  this.__u = -5997 * 1 + -8890 + 14887, this.o = null, this.__b = null;
}
function Og(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function C0(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(g) {
      g && (A = g.default || g), e = !0;
    }, function(g) {
      t = g, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? DA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Wt() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -1 * -6458 + 8374 * 1 + -14800 & i.__u && (i.type = null), jr && jr(i);
}, (yo.prototype = new KA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = Og(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[8 * 907 + -6603 + -1 * 653] = Lg(a, a.__c.__P, a.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || 1817 + 6101 * -1 + 4316 & n.__u || e.setState({ __a: e.__b = e.__v.__k[1373 * -1 + -9770 * 1 + 11 * 1013] }), i.then(r, r);
}, yo.prototype.componentWillUnmount = function() {
  this.o = [];
}, yo.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-9473 + -644 * -8 + 4321].__c;
      this.__v.__k[2 * 886 + -1 * 2297 + 525] = Wg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && DA(YA, null, i.fallback);
  return A && (A.__u &= -33), [DA(YA, null, n.__a ? null : i.children), A];
};
var qr = function(i, n, t) {
  if (++t[519 + -2 * 259] === t[1 * -7241 + 9525 + 1 * -2284] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -886 * -1 + -5516 + 4633; ) t.pop()();
    if (t[-10798 + 10799 * 1] < t[2 * -3652 + 7257 + 47]) break;
    i.i = t = t[1 * 8867 + -5923 + -2942];
  }
};
function B0(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Q0(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Ne(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, -1 * 2423 + 1109 * 1 + 1315), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Ne(DA(B0, o, i.__v), n.v);
}
function E0(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = DA(Q0, t);
  return e.containerInfo = n, e;
}
(Wt.prototype = new KA()).__a = function(i) {
  var n = this, t = Og(n.__v), e = n.l.get(i);
  return e[-501 * 17 + -1519 * 1 + 772 * 13]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), qr(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Wt.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = he(i.children);
  i.revealOrder && i.revealOrder[-834 + -4561 * -1 + -3727] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-6 * -1185 + -2137 + -4972, 745 * -10 + 4518 + 2932, this.i]);
  return i.children;
}, Wt.prototype.componentDidUpdate = Wt.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    qr(i, t, n);
  });
};
var Jg = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || -107846 + -751 * 37 + 195736, x0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, l0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, d0 = /[A-Z0-9]/g, u0 = typeof document < "u", f0 = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function h0(i, n, t) {
  return n.__k == null && (n.textContent = ""), Ne(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function p0(i, n, t) {
  return Cr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
KA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(KA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Vr = R.event;
function y0() {
}
function m0() {
  return this.cancelBubble;
}
function w0() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return Vr && (i = Vr(i)), i.persist = y0, i.isPropagationStopped = m0, i.isDefaultPrevented = w0, i.nativeEvent = i;
};
var mo = {};
mo.enumerable = !1, mo.configurable = !0, mo.get = function() {
  return this.class;
};
var xr, D0 = mo, Zr = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || u0 && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[0] === "o" && a[2794 + 1 * -9871 + 7078] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || f0(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : l0.test(r) && (r = a) : a = r = "oninput" : o && x0.test(r) ? r = r.replace(d0, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = he(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = he(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", D0)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = Jg, Zr && Zr(i);
};
var zr = R.__r;
R.__r = function(i) {
  zr && zr(i), xr = i.__c;
};
var Xr = R.diffed;
R.diffed = function(i) {
  Xr && Xr(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), xr = null;
};
var BA = {};
BA.readContext = function(i) {
  return xr.__n[i.__c].props.value;
}, BA.useCallback = ye, BA.useContext = ce, BA.useDebugValue = Po, BA.useDeferredValue = Rg, BA.useEffect = K, BA.useId = bg, BA.useImperativeHandle = Dg, BA.useInsertionEffect = Fg, BA.useLayoutEffect = Dt, BA.useMemo = pA, BA.useReducer = Qr, BA.useRef = Ae, BA.useState = IA, BA.useSyncExternalStore = Gg, BA.useTransition = vg;
var Ug = {};
Ug.current = BA;
var Yg = {};
Yg.ReactCurrentDispatcher = Ug;
var b0 = Yg;
function k0(i) {
  return DA.bind(null, i);
}
function Dn(i) {
  return !!i && i.$$typeof === Jg;
}
function S0(i) {
  return Dn(i) && i.type === YA;
}
function G0(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function N0(i) {
  return Dn(i) ? Br.apply(null, arguments) : i;
}
function R0(i) {
  return !!i.__k && (Ne(null, i), !0);
}
function v0(i) {
  return i && (i.base || i.nodeType === 1 && i) || null;
}
var F0 = function(i, n) {
  return i(n);
}, M0 = function(i, n) {
  return i(n);
}, W0 = YA, L0 = Dn, et = { useState: IA, useId: bg, useReducer: Qr, useEffect: K, useLayoutEffect: Dt, useInsertionEffect: Fg, useTransition: vg, useDeferredValue: Rg, useSyncExternalStore: Gg, startTransition: Ng, useRef: Ae, useImperativeHandle: Dg, useMemo: pA, useCallback: ye, useContext: ce, useDebugValue: Po, version: "18.3.1", Children: s0, render: h0, hydrate: p0, unmountComponentAtNode: R0, createPortal: E0, createElement: DA, createContext: ve, createFactory: k0, cloneElement: N0, createRef: Hs, Fragment: YA, isValidElement: Dn, isElement: L0, isFragment: S0, isMemo: G0, findDOMNode: v0, Component: KA, PureComponent: pi, memo: g0, forwardRef: Mg, flushSync: M0, unstable_batchedUpdates: F0, StrictMode: W0, Suspense: yo, SuspenseList: Wt, lazy: C0, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: b0 };
function O0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Tn, $r;
function J0() {
  return $r || ($r = 3778 + -1259 * 3, Tn = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), s = -5707 + 7 * -401 + 8514; s < r.length; s++) {
      var B = r[s];
      if (!a(B)) return !1;
      var I = n[B], c = t[B];
      if (o = e ? e.call(A, I, c, B) : void 0, o === !1 || o === void 0 && I !== c) return !1;
    }
    return !0;
  }), Tn;
}
var U0 = J0();
const Y0 = /* @__PURE__ */ O0(U0);
var J = "-ms-", Tt = "-moz-", W = "-webkit-", Pg = "comm", bn = "rule", lr = "decl", P0 = "@import", Tg = "@keyframes", T0 = "@layer", Hg = Math.abs, dr = String.fromCharCode, yi = Object.assign;
function H0(i, n) {
  return aA(i, 5 * -577 + 525 + 2360 * 1) ^ 45 ? (((n << 1909 * 2 + -2868 + -948 ^ aA(i, -2823 + -3 * -941)) << -6277 + 1 * 4283 + 1996 ^ aA(i, -3374 + 1 * -3787 + 7162)) << -2 * -4909 + 3402 + 3 * -4406 ^ aA(i, 3360 + 1679 * -2)) << 7499 + 613 * 5 + -10562 ^ aA(i, 7702 + 2 * -4163 + 627) : 10 * 565 + -3071 + -2579;
}
function _g(i) {
  return i.trim();
}
function ue(i, n) {
  return (i = n.exec(i)) ? i[-4721 * 1 + -21 * -451 + -4750] : i;
}
function v(i, n, t) {
  return i.replace(n, t);
}
function wo(i, n, t) {
  return i.indexOf(n, t);
}
function aA(i, n) {
  return i.charCodeAt(n) | 9008 + 2 * 1195 + -11398;
}
function dt(i, n, t) {
  return i.slice(n, t);
}
function ae(i) {
  return i.length;
}
function Kg(i) {
  return i.length;
}
function Lt(i, n) {
  return n.push(i), i;
}
function _0(i, n) {
  return i.map(n).join("");
}
function Aa(i, n) {
  return i.filter(function(t) {
    return !ue(t, n);
  });
}
var kn = 6069 + 1102 * -4 + -1 * 1660, ut = -278 * -14 + -173 + 1 * -3718, jg = 0, jA = -1 * -9734 + 243 + -907 * 11, V = -9734 + -26 * 368 + 19302, bt = "";
function Sn(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = kn, a.column = ut, a.length = r, a.return = "", a.siblings = g, a;
}
function De(i, n) {
  return yi(Sn("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, n);
}
function rt(i) {
  for (; i.root; ) i = De(i.root, { children: [i] });
  Lt(i, i.siblings);
}
function K0() {
  return V;
}
function j0() {
  return V = jA > 0 ? aA(bt, --jA) : 0, ut--, V === -1883 * 1 + 1456 + 1 * 437 && (ut = 1, kn--), V;
}
function $A() {
  return V = jA < jg ? aA(bt, jA++) : 1 * -2649 + 7671 + -5022, ut++, V === 8446 + 3 * -3087 + 825 && (ut = -3 * -417 + -1 * -403 + -3 * 551, kn++), V;
}
function Xe() {
  return aA(bt, jA);
}
function Do() {
  return jA;
}
function Gn(i, n) {
  return dt(bt, i, n);
}
function mi(i) {
  switch (i) {
    case -1669 * 1 + 1680 + -11:
    case -1 * -3235 + -1673 * 2 + 120:
    case 5288 + -7 * 754:
    case 1 * -9055 + 2 * -2819 + 1634 * 9:
    case -9407 + -1 * 1388 + 10827:
      return 1 * 5476 + -2378 + -3093;
    case 1 * -2699 + -8886 + -1 * -11618:
    case 2 * -839 + -1757 + 1739 * 2:
    case 44:
    case 5 * 1577 + -673 * 1 + -7165:
    case -5218 + -3833 * -1 + 1447 * 1:
    case 64:
    case -1418 + -4 * -386:
    case -1 * 7701 + 6187 + 1573:
    case 123:
    case 125:
      return 7070 + -5119 * 1 + -1 * 1947;
    case 7714 + 1 * -6609 + -1047:
      return 2889 * 3 + 1 * -3400 + -5264;
    case 34:
    case -5103 + 4301 * 2 + 4 * -865:
    case 40:
    case -2 * 1913 + -8805 + 12722:
      return 2;
    case -1702 * 3 + 605 + 757 * 6:
    case -9608 + -9701 * -1:
      return 38 * 263 + 4686 + -4893 * 3;
  }
  return 2386 + 11 * -459 + 1 * 2663;
}
function q0(i) {
  return kn = ut = 1 * -8867 + -4362 + 4410 * 3, jg = ae(bt = i), jA = 0, [];
}
function V0(i) {
  return bt = "", i;
}
function Hn(i) {
  return _g(Gn(jA - (-8035 + -4217 * 1 + 12253), wi(i === -3082 * 2 + 7720 + -5 * 293 ? i + (-1 * 2236 + -4365 + 6603 * 1) : i === 1880 * -2 + 5721 + 1921 * -1 ? i + (-4573 + 3 * 1431 + -281 * -1) : i)));
}
function Z0(i) {
  for (; (V = Xe()) && V < 33; ) $A();
  return mi(i) > 1 * 9293 + -11 * -543 + -15264 || mi(V) > 3013 * -1 + -5130 + -4073 * -2 ? "" : " ";
}
function z0(i, n) {
  for (; --n && $A() && !(V < 48 || V > -9707 + 1017 * -4 + 13877 || V > -1 * 1619 + 11 * -449 + 6615 && V < 65 || V > -10681 + -1 * -10751 && V < 97); ) ;
  return Gn(i, Do() + (n < 4108 + 293 * -14 && Xe() == 7 * 963 + 6456 + -13165 && $A() == -289 * -23 + -8828 * 1 + 2213 * 1));
}
function wi(i) {
  for (; $A(); ) switch (V) {
    case i:
      return jA;
    case 34:
    case -2 * -1389 + 2712 + -5451:
      i !== 2108 + -2161 * -1 + -4235 && i !== -5400 + -622 * -10 + -781 && wi(V);
      break;
    case -19 * 432 + -4781 + 13029:
      i === 41 && wi(i);
      break;
    case 92:
      $A();
      break;
  }
  return jA;
}
function X0(i, n) {
  for (; $A() && i + V !== 7594 + -4 * 1646 + -963 + (279 * -31 + 4984 + 3675); ) if (i + V === 1091 * -4 + 313 * 1 + 4093 + (7169 * 1 + 1142 + -8269) && Xe() === 47) break;
  return "/*" + Gn(n, jA - (547 * -2 + -9365 * -1 + -8270)) + "*" + dr(i === 6873 + -6703 * 1 + -123 ? i : $A());
}
function $0(i) {
  for (; !mi(Xe()); ) $A();
  return Gn(i, jA);
}
function Ac(i) {
  return V0(bo("", null, null, null, [""], i = q0(i), -12299 + -12299 * -1, [-2 * -3177 + 1 * -3662 + -2692], i));
}
function bo(i, n, t, e, A, o, r, g, a) {
  for (var s = 0, B = 0, I = r, c = 5 * 1421 + -6448 + -657, E = 1 * 9007 + -6872 + -2135, x = -4755 + 3 * 1585, Q = -3266 + 297 * 11, d = 1, f = 13866 + 2773 * -5, h = -12 * 829 + 7578 + 790 * 3, p = "", b = A, D = o, k = e, y = p; d; ) switch (x = h, h = $A()) {
    case 1539 + 1 * 1797 + -3296:
      if (x != 108 && aA(y, I - (-2929 + 2930 * 1)) == -2903 + -987 * -3) {
        wo(y += v(Hn(h), "&", "&\f"), "&\f", Hg(s ? g[s - (6816 + -489 * 4 + -4859)] : -4040 * 1 + -1704 + -718 * -8)) != -1 && (f = -1);
        break;
      }
    case -4097 + -452 * 15 + 3 * 3637:
    case -2728 + -1 * -2767:
    case 7358 + 4 * -256 + -6243:
      y += Hn(h);
      break;
    case -4 * 2462 + -6647 + 16504:
    case -13409 + -1 * -13419:
    case 5869 + 2369 * 2 + 2 * -5297:
    case -1 * -5836 + -488 * 14 + -257 * -4:
      y += Z0(x);
      break;
    case 2 * -3482 + -8357 + -1 * -15413:
      y += z0(Do() - (-1973 * -3 + 870 + 6788 * -1), 1846 * -1 + -1900 + -1 * -3753);
      continue;
    case 47:
      switch (Xe()) {
        case 1 * -1200 + -7491 + 8733 * 1:
        case 47:
          Lt(ec(X0($A(), Do()), n, t, a), a);
          break;
        default:
          y += "/";
      }
      break;
    case (-13 * -379 + 713 * -5 + -1239) * Q:
      g[s++] = ae(y) * f;
    case (3099 + -7907 * -1 + -10881) * Q:
    case -3044 * -2 + 3794 + -9823:
    case 3069 + -1 * -5534 + -8603:
      switch (h) {
        case 0:
        case -5819 + -1 * -5944:
          d = 0;
        case 1 * -4840 + 8283 + -3384 + B:
          f == -1 && (y = v(y, /\f/g, "")), E > 1112 * 4 + 3 * 3137 + -13859 && ae(y) - I && Lt(E > -7559 + 3 * 1913 + 1852 ? ta(y + ";", e, t, I - (1 * 6370 + 7346 * -1 + -1 * -977), a) : ta(v(y, " ", "") + ";", e, t, I - (9277 * 1 + 3907 * 1 + -39 * 338), a), a);
          break;
        case 6463 * 1 + 9114 + -1 * 15518:
          y += ";";
        default:
          if (Lt(k = ea(y, n, t, s, B, A, g, p, b = [], D = [], I, o), o), h === -985 + 277 * 4)
            if (B === 1317 * -4 + 1418 + 3850) bo(y, n, k, k, b, o, I, g, D);
            else switch (c === 306 + 2 * 4372 + -8951 * 1 && aA(y, 3) === 1 * 646 + 4623 + -5159 ? -3251 * 1 + 1031 + 290 * 8 : c) {
              case 100:
              case -11 * -345 + -1 * 5041 + 1354:
              case 109:
              case -7135 * -1 + -5265 + -1755:
                bo(i, k, k, e && Lt(ea(i, k, k, 14046 + -4682 * 3, -2725 + -5839 * 1 + 8564 * 1, A, g, p, A, b = [], I, D), D), A, D, I, g, e ? b : D);
                break;
              default:
                bo(y, k, k, k, [""], D, 1188 + -3 * -3131 + 10581 * -1, g, D);
            }
      }
      s = B = E = 10347 + 10347 * -1, Q = f = 4933 * -2 + -3 * -1968 + 1 * 3963, p = y = "", I = r;
      break;
    case -5338 + -1 * -5396:
      I = -3864 + -1 * 1886 + 5751 + ae(y), E = x;
    default:
      if (Q < -7858 + -1 * -7859) {
        if (h == 2 * 3793 + 4505 + -11968) --Q;
        else if (h == 4374 + -4249 * 1 && Q++ == 2308 * 1 + 762 * -7 + 3026 && j0() == 8360 + 313 * 17 + -13556) continue;
      }
      switch (y += dr(h), h * Q) {
        case 38:
          f = B > 0 ? -5182 + -2 * -4463 + -3743 : (y += "\f", -1);
          break;
        case 18 * -543 + -6894 + 16712:
          g[s++] = (ae(y) - (-5333 * 1 + 8376 + -3042)) * f, f = 7918 + -1 * 8385 + 468;
          break;
        case 1 * -7704 + -36 + 7804:
          Xe() === 45 && (y += Hn($A())), c = Xe(), B = I = ae(p = y += $0(Do())), h++;
          break;
        case -1 * -4297 + 9894 + 14146 * -1:
          x === 7508 * -1 + -6106 + 13659 * 1 && ae(y) == 5764 + 2 * -3987 + 553 * 4 && (Q = -5481 + 1 * 5243 + 238);
      }
  }
  return o;
}
function ea(i, n, t, e, A, o, r, g, a, s, B, I) {
  for (var c = A - 1, E = A === 0 ? o : [""], x = Kg(E), Q = -4145 + -5 * -829, d = -22 * -338 + 7954 + -19 * 810, f = 2 * -2892 + 6 * 1102 + -828; Q < e; ++Q) for (var h = 0, p = dt(i, c + (3336 + 3 * -1697 + 878 * 2), c = Hg(d = r[Q])), b = i; h < x; ++h) (b = _g(d > -376 * 19 + -1 * -2157 + 1 * 4987 ? E[h] + " " + p : v(p, /&\f/g, E[h]))) && (a[f++] = b);
  return Sn(i, n, t, A === -2823 * 2 + -4913 + -10559 * -1 ? bn : g, a, s, B, I);
}
function ec(i, n, t, e) {
  return Sn(i, n, t, Pg, dr(K0()), dt(i, -5186 + -2038 * -2 + 1112, -2), 0, e);
}
function ta(i, n, t, e, A) {
  return Sn(i, n, t, lr, dt(i, 8628 + -6091 * 1 + -2537, e), dt(i, e + 1, -1), e, A);
}
function qg(i, n, t) {
  switch (H0(i, n)) {
    case 5103:
      return W + "print-" + i + i;
    case -1702 * -4 + 3041 + -4112:
    case 8076 * -1 + 9413 * 1 + 716 * 4:
    case 7061 * -1 + 2367 * -3 + -7 * -2477:
    case 3433:
    case 1641:
    case 4457:
    case 6231 * 1 + 7 * 271 + -5207:
    case -5987 + -3 * -3853:
    case -2947 + 443 * 21:
    case 777 * -13 + -5228 + -21173 * -1:
    case 3351 + -5569 * 1 + 5409 * 1:
    case -5 * 907 + -395 * -18 + 5 * 814:
    case 2170 + 1 * 3655 + -2820:
    case -809 + 1 * 6541 + 659 * 1:
    case 5879:
    case -12677 + -300 * -61:
    case 1 * 10753 + 3 * 3586 + -15376:
    case 1 * 2057 + -2122 * 3 + 8908:
    case 12770 + 1 * -7915:
    case 4215:
    case 363 * -33 + 4168 + 14200:
    case 5109:
    case 16 * -603 + 9407 + 2 * 2803:
    case -1079 * 1 + -5053 + 11753 * 1:
    case 3366 + 2 * 1747 + -1 * 3031:
      return W + i + i;
    case -4 * -1093 + -1452 + 3 * 623:
      return Tt + i + i;
    case 7747 + -383 * -5 + -4313:
    case -4402 * -2 + 8351 + -12909:
    case 9037 * 1 + 1 * 6473 + -535 * 20:
    case 6968:
    case -1 * 3345 + 3 * -1205 + 9716 * 1:
      return W + i + Tt + i + J + i + i;
    case -5 * 2029 + -11804 + 15 * 1859:
      switch (aA(i, n + 11)) {
        case 114:
          return W + i + J + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return W + i + J + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -14732 + -14777 * -1:
          return W + i + J + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 7482 + -621 * 3 + 1 * 1209:
    case 1 * -7637 + 670 * -5 + 15255:
    case 8157 * 1 + 3129 * -1 + -2125:
      return W + i + J + i + i;
    case 1168 + 19 * 263:
      return W + i + J + "flex-" + i + i;
    case -6089 + -1 * -7681 + 3595 * 1:
      return W + i + v(i, /(\w+).+(:[^]+)/, W + "box-$1$2" + J + "flex-$1$2") + i;
    case -1 * -5971 + 4628 + 5156 * -1:
      return W + i + J + "flex-item-" + v(i, /flex-|-self/g, "") + (ue(i, /flex-|baseline/) ? "" : J + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case 3123 + 7487 * 1 + 5 * -1187:
      return W + i + J + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case -278 * 1 + 2648 + 3178:
      return W + i + J + v(i, "shrink", "negative") + i;
    case 3979 + -1313 * -1:
      return W + i + J + v(i, "basis", "preferred-size") + i;
    case -11778 + 1 * -2276 + -2 * -10057:
      return W + "box-" + v(i, "-grow", "") + W + i + J + v(i, "grow", "positive") + i;
    case -1 * -5806 + -5922 + 1 * 4670:
      return W + v(i, /([^-])(transform)/g, "$1" + W + "$2") + i;
    case 1 * 4487 + 2231 * 1 + -531:
      return v(v(v(i, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), i, "") + i;
    case 5495:
    case -2742 * -3 + 4940 + -9207:
      return v(i, /(image-set\([^]*)/, W + "$1$`$1");
    case 5539 * 1 + 7765 * 1 + -8336:
      return v(v(i, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + J + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + i + i;
    case -756 * -12 + -9624 + -12 * -396:
      if (!ue(i, /flex-|baseline/)) return J + "grid-column-align" + dt(i, n) + i;
      break;
    case 2 * 3029 + 6945 + -10411:
    case -617 * 1 + -5408 + -5 * -1877:
      return J + v(i, "template-", "") + i;
    case 283 * -15 + -2777 * -3 + 298:
    case 1413 * -6 + 9539 + 2555:
      return t && t.some(function(e, A) {
        return n = A, ue(e.props, /grid-\w+-end/);
      }) ? ~wo(i + (t = t[n].value), "span", 2430 + 1 * 8783 + 1 * -11213) ? i : J + v(i, "-start", "") + i + J + "grid-row-span:" + (~wo(t, "span", 1 * 6704 + 9747 + -1 * 16451) ? ue(t, /\d+/) : +ue(t, /\d+/) - +ue(i, /\d+/)) + ";" : J + v(i, "-start", "") + i;
    case 4361 + 1 * -6671 + 7206:
    case -1 * -3342 + -2018 + 2804:
      return t && t.some(function(e) {
        return ue(e.props, /grid-\w+-start/);
      }) ? i : J + v(v(i, "-end", "-span"), "span ", "") + i;
    case -4447 * -1 + 8111 * -1 + 7759 * 1:
    case 3583:
    case -5810 + -898 * -11:
    case 2 * -2353 + -6608 + 602 * 23:
      return v(i, /(.+)-inline(.+)/, W + "$1$2") + i;
    case 8116:
    case -9557 + -4154 * -4:
    case 5753:
    case -4 * 367 + 2878 + 1375 * 3:
    case 3716 + 1 * -9818 + 11547:
    case 3628 * -2 + -10476 + 23433:
    case -1753 + -2 * -3343:
    case 4677:
    case 800 + 1 * 4733:
    case -2265 + -6 * 1800 + -9427 * -2:
    case -15745 + 6922 * 3:
    case -4855 + -387 * 1 + 10007:
      if (ae(i) - (1398 * 3 + -1 * -6547 + -10740) - n > 6) switch (aA(i, n + (-8971 * 1 + 8718 + 254))) {
        case 1710 + 1 * -746 + -855:
          if (aA(i, n + 4) !== 45) break;
        case -1 * -2323 + -1 * -3023 + -5244:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Tt + (aA(i, n + (1697 * -1 + -8598 + 19 * 542)) == 4606 + -3442 * -2 + -11382 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~wo(i, "stretch", -8487 + 23 * 369) ? qg(v(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -3653 * -2 + 3914 + -6068:
    case -332 * 34 + -1817 * 2 + 613 * 34:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, s) {
        return J + A + ":" + o + s + (r ? J + A + "-span:" + (g ? a : +a - +o) + s : "") + i;
      });
    case 3 * 2885 + -1 * 8780 + 5074:
      if (aA(i, n + (12490 + 1 * -12484)) === 4814 + 14 * 286 + -8697) return v(i, ":", ":" + W) + i;
      break;
    case -2 * 6117 + -5581 + 24259 * 1:
      switch (aA(i, aA(i, -7518 + 10 * 613 + -1 * -1402) === 485 * 17 + -3389 + -283 * 17 ? 18 : 1 * 7234 + -1 * -7291 + -14514)) {
        case 1 * -4124 + -632 + 4876:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (aA(i, 4943 + -5781 * -1 + -10710) === 4997 * 1 + 9666 + -14618 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + J + "$2box$3") + i;
        case 9132 + -2 * 1150 + -6732:
          return v(i, ":", ":" + J) + i;
      }
      break;
    case -9439 + 1 * 10058 + 5100:
    case 2647:
    case 2135:
    case -3944 * -1 + 4 * 609 + -2453:
    case 2391:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function To(i, n) {
  for (var t = "", e = 6713 + 6713 * -1; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function tc(i, n, t, e) {
  switch (i.type) {
    case T0:
      if (i.children.length) break;
    case P0:
    case lr:
      return i.return = i.return || i.value;
    case Pg:
      return "";
    case Tg:
      return i.return = i.value + "{" + To(i.children, e) + "}";
    case bn:
      if (!ae(i.value = i.props.join(","))) return "";
  }
  return ae(t = To(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function oc(i) {
  var n = Kg(i);
  return function(t, e, A, o) {
    for (var r = "", g = -1335 + -2 * 343 + 2021; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function nc(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function ic(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case lr:
        i.return = qg(i.value, i.length, t);
        return;
      case Tg:
        return To([De(i, { value: v(i.value, "@", "@" + W) })], e);
      case bn:
        if (i.length) return _0(t = i.props, function(A) {
          switch (ue(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              rt(De(i, { props: [v(A, /:(read-\w+)/, ":" + Tt + "$1")] }));
              var o = {};
              o.props = [A], rt(De(i, o)), yi(i, { props: Aa(t, e) });
              break;
            case "::placeholder":
              rt(De(i, { props: [v(A, /:(plac\w+)/, ":" + W + "input-$1")] })), rt(De(i, { props: [v(A, /:(plac\w+)/, ":" + Tt + "$1")] })), rt(De(i, { props: [v(A, /:(plac\w+)/, J + "input-$1")] }));
              var r = {};
              r.props = [A], rt(De(i, r)), yi(i, { props: Aa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var rc = N, M = {}, tt = typeof process < "u" && M !== void 0 && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", Vg = "active", Zg = "data-styled-version", Nn = "6.1.19", ur = `/*!sc*/
`, Ho = typeof window < "u" && typeof document < "u", ac = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.SC_DISABLE_SPEEDY !== void 0 && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), oa = /invalid hook call/i, ao = /* @__PURE__ */ new Set(), gc = function(i, n) {
  if (M.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = -2 * -359 + -7 * -1361 + 5122 * -2; a < arguments.length; a++) g[a - (-1736 + 3 * 579)] = arguments[a];
        oa.test(r) ? (o = !1, ao.delete(e)) : A.apply(void (-1283 * 4 + -5 * -1481 + -2273), xt([r], g, !1));
      }, Ae(), o && !ao.has(e) && (console.warn(e), ao.add(e));
    } catch (r) {
      oa.test(r.message) && ao.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Rn = Object.freeze([]), ft = Object.freeze({});
function Ic(i, n, t) {
  return t === void 0 && (t = ft), i.theme !== t.theme && i.theme || n || t.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), sc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, cc = /(^-|-$)/g;
function na(i) {
  return i.replace(sc, "-").replace(cc, "");
}
var Cc = /(a)(d)/gi, go = -2935 * -2 + -1 * 2917 + -2901, ia = function(i) {
  return String.fromCharCode(i + (i > 7381 + 1226 * -6 ? 39 : 97));
};
function bi(i) {
  var n, t = "";
  for (n = Math.abs(i); n > go; n = n / go | -1 * 5042 + 1286 + 313 * 12) t = ia(n % go) + t;
  return (ia(n % go) + t).replace(Cc, "$1-$2");
}
var _n, zg = -2185 + 26 * 291, Ve = function(i, n) {
  for (var t = n.length; t; ) i = 33 * i ^ n.charCodeAt(--t);
  return i;
}, Xg = function(i) {
  return Ve(zg, i);
};
function Bc(i) {
  return bi(Xg(i) >>> -2 * -3422 + 3263 + -10107);
}
function $g(i) {
  return M.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Kn(i) {
  return typeof i == "string" && (M.NODE_ENV === "production" || i.charAt(1261 + -1 * 1261) === i.charAt(1 * 8582 + -7873 * -1 + -16455).toLowerCase());
}
var HA = {};
HA.childContextTypes = !0, HA.contextType = !0, HA.contextTypes = !0, HA.defaultProps = !0, HA.displayName = !0, HA.getDefaultProps = !0, HA.getDerivedStateFromError = !0, HA.getDerivedStateFromProps = !0, HA.mixins = !0, HA.propTypes = !0, HA.type = !0;
var be = {};
be.name = !0, be.length = !0, be.prototype = !0, be.caller = !0, be.callee = !0, be.arguments = !0, be.arity = !0;
var Ue = {};
Ue.$$typeof = !0, Ue.compare = !0, Ue.defaultProps = !0, Ue.displayName = !0, Ue.propTypes = !0, Ue.type = !0;
var gt = {};
gt.$$typeof = !0, gt.render = !0, gt.defaultProps = !0, gt.displayName = !0, gt.propTypes = !0;
var AI = typeof Symbol == "function" && Symbol.for, eI = AI ? /* @__PURE__ */ Symbol.for("react.memo") : -3 * 26553 + 4201 * -3 + -1 * -152377, Qc = AI ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 55638 + -2237 * -2, Ec = HA, xc = be, tI = Ue, lc = ((_n = {})[Qc] = gt, _n[eI] = tI, _n);
function ra(i) {
  return ("type" in (n = i) && n.type.$$typeof) === eI ? tI : "$$typeof" in i ? lc[i.$$typeof] : Ec;
  var n;
}
var dc = Object.defineProperty, uc = Object.getOwnPropertyNames, aa = Object.getOwnPropertySymbols, fc = Object.getOwnPropertyDescriptor, hc = Object.getPrototypeOf, ga = Object.prototype;
function oI(i, n, t) {
  if (typeof n != "string") {
    if (ga) {
      var e = hc(n);
      e && e !== ga && oI(i, e, t);
    }
    var A = uc(n);
    aa && (A = A.concat(aa(n)));
    for (var o = ra(i), r = ra(n), g = 0; g < A.length; ++g) {
      var a = A[g];
      if (!(a in xc || t && t[a] || r && a in r || o && a in o)) {
        var s = fc(n, a);
        try {
          dc(i, a, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function ht(i) {
  return typeof i == "function";
}
function fr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function ze(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Ia(i, n) {
  if (9753 + 1 * 7497 + -17250 === i.length) return "";
  for (var t = i[0], e = -3480 + 12 * 502 + -2543; e < i.length; e++) t += i[e];
  return t;
}
function pt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function ki(i, n, t) {
  if (t === void 0 && (t = !1), !t && !pt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 0; e < n.length; e++) i[e] = ki(i[e], n[e]);
  else if (pt(n))
    for (var e in n) i[e] = ki(i[e], n[e]);
  return i;
}
function hr(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var X = {};
X[1] = `Cannot create styled-component for component: %s.

`, X[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, X[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, X[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, X[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, X[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, X[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', X[8] = `ThemeProvider: Please make your "theme" prop an object.

`, X[9] = "Missing document `<head>`\n\n", X[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, X[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, X[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", X[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, X[14] = `ThemeProvider: "theme" prop is required.

`, X[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", X[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, X[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, X[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var pc = M.NODE_ENV !== "production" ? X : {};
function yc() {
  for (var i = [], n = -4016 + -1 * 2839 + -1371 * -5; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-12 * -501 + -6104 + 92], e = [], A = 8595 + 1 * -8793 + 199, o = i.length; A < o; A += -11 * -543 + 3659 + -9631) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function kt(i) {
  for (var n = [], t = -10990 + 29 * 379; t < arguments.length; t++) n[t - (147 + 5227 * -1 + 5081)] = arguments[t];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 8588 + -1723 * -1 + -10311 ? " Args: ".concat(n.join(", ")) : "")) : new Error(yc.apply(void 0, xt([pc[i]], n, !1)).trim());
}
var mc = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-1 * -2302 + 3 * 1598 + 8 * -823), this.length = 6609 + 6097 * -1, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -2 * -2825 + -255 + -5395, e = 2 * 3872 + 3011 + -2151 * 5; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -5069 + -11 * -897 + 533 * -9) < -1 * 6317 + 1 * 1843 + 4474) throw kt(-9694 + 1 * -2967 + 12677, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -3989 * 1 + 7797 * -1 + 11786;
    }
    for (var g = this.indexOfGroup(n + (717 * -10 + 9954 + -2783)), a = (r = 0, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 1853 * 5 + -5833 + -3432;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -2953 * 3 + -1 * 8642 + 473 * 37 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ur);
    return t;
  }, i;
})(), wc = 5 * -1253 + 13 * 677 + -2535 << -1999 + -2029 * -1, ko = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), So = -4691 * 1 + 6334 * -1 + 11026, Io = function(i) {
  if (ko.has(i)) return ko.get(i);
  for (; _o.has(So); ) So++;
  var n = So++;
  if (M.NODE_ENV !== "production" && ((6525 + -1 * 6525 | n) < -11150 + -5575 * -2 || n > wc)) throw kt(3615 + 4479 * -1 + 880, "".concat(n));
  return ko.set(i, n), _o.set(n, i), n;
}, Dc = function(i, n) {
  So = n + 1, ko.set(i, n), _o.set(n, i);
}, bc = "style[".concat(tt, "][").concat(Zg, '="').concat(Nn, '"]'), kc = new RegExp("^".concat(tt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Sc = function(i, n, t) {
  for (var e, A = t.split(","), o = 5512 + 21 * -283 + 431, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, Gc = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ur), A = [], o = 3936 + 9343 * 1 + 1897 * -7, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(kc);
      if (a) {
        var s = 0 | parseInt(a[1], 10), B = a[-549 * -5 + 2 * 3881 + -10505];
        -2 * -1576 + -5559 * 1 + 2407 !== s && (Dc(B, s), Sc(i, B, a[3 * 2561 + 6347 + -14027]), i.getTag().insertRules(s, A)), A.length = 0;
      } else A.push(g);
    }
  }
}, sa = function(i) {
  for (var n = document.querySelectorAll(bc), t = 0, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(tt) !== Vg && (Gc(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function Nc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var nI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(tt, "]")));
    return a[a.length - (-9575 + -4 * -2394)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(tt, Vg), e.setAttribute(Zg, Nn);
  var r = Nc();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Rc = (function() {
  function i(n) {
    this.element = nI(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 1 * -8826 + -7156 + -1 * -15982, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw kt(17);
    })(this.element), this.length = 0;
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
})(), vc = (function() {
  function i(n) {
    this.element = nI(n), this.nodes = this.element.childNodes, this.length = 348 + 1 * 1630 + 2 * -989;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 1114 + 8942 * -1 + 7828) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), Fc = (function() {
  function i(n) {
    this.rules = [], this.length = 1 * 3277 + 1 * 8149 + -11426;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 3130 + -3130 * 1, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 464 + 7649 * 1 + 13 * -624), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), ca = Ho, Mc = { isServer: !Ho, useCSSOMInjection: !ac }, iI = (function() {
  function i(n, t, e) {
    n === void 0 && (n = ft), t === void 0 && (t = {});
    var A = this;
    this.options = GA(GA({}, Mc), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Ho && ca && (ca = !1, sa(this)), hr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), g = r.length, a = "", s = function(I) {
          var c = (function(f) {
            return _o.get(f);
          })(I);
          if (c === void 0) return "continue";
          var E = o.names.get(c), x = r.getGroup(I);
          if (E === void 0 || !E.size || 6571 * 1 + 3 * 1543 + -11200 === x.length) return "continue";
          var Q = "".concat(tt, ".g").concat(I, '[id="').concat(c, '"]'), d = "";
          E !== void 0 && E.forEach(function(f) {
            f.length > -2542 + 3 * 2083 + -3707 && (d += "".concat(f, ","));
          }), a += "".concat(x).concat(Q, '{content:"').concat(d, '"}').concat(ur);
        }, B = -7428 + -1 * -716 + 6712; B < g; B++) s(B);
        return a;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return Io(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Ho && sa(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(GA(GA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 514 * -13 + -8508 + 2 * 7595) + (-5 * 287 + -4187 + -1 * -5623);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new Fc(A) : e ? new Rc(A) : new vc(A);
    })(this.options), new mc(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Io(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Io(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Io(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), Wc = /&/g, Lc = /^\s*\/\/.*$/gm;
function rI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = rI(t.children, n)), t;
  });
}
function aI(i) {
  var n, t, e, A = i === void 0 ? ft : i, o = A.options, r = o === void 0 ? ft : o, g = A.plugins, a = g === void 0 ? Rn : g, s = function(c, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 14 * -505 + 9505 + -2435 ? ".".concat(n) : c;
  }, B = a.slice();
  B.push(function(c) {
    c.type === bn && c.value.includes("&") && (c.props[-605 * 1 + 2 * -4607 + -9 * -1091] = c.props[-4567 * -1 + 1923 + -6490].replace(Wc, t).replace(e, s));
  }), r.prefix && B.push(ic), B.push(tc);
  var I = function(c, E, x, Q) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var d = c.replace(Lc, ""), f = Ac(x || E ? "".concat(x, " ").concat(E, " { ").concat(d, " }") : d);
    r.namespace && (f = rI(f, r.namespace));
    var h = [];
    return To(f, oc(B.concat(nc(function(p) {
      return h.push(p);
    })))), h;
  };
  return I.hash = a.length ? a.reduce(function(c, E) {
    return E.name || kt(3 * 3099 + -2693 * 1 + -6589), Ve(c, E.name);
  }, zg).toString() : "", I;
}
var Oc = new iI(), Si = aI(), pr = et.createContext({ shouldForwardProp: void 0, styleSheet: Oc, stylis: Si });
pr.Consumer;
var Jc = et.createContext(void 0);
function Gi() {
  return ce(pr);
}
function Uc(i) {
  var n = IA(i.stylisPlugins), t = n[3815 + -8355 * -1 + -12170], e = n[-263 * -35 + 9487 + -18691], A = Gi().styleSheet, o = pA(function() {
    var B = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? B = i.sheet : i.target && (B = B.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (B = B.reconstructWithOptions(I)), B;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = pA(function() {
    var B = {};
    B.namespace = i.namespace, B.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = B, I.plugins = t, aI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  K(function() {
    Y0(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = pA(function() {
    var B = {};
    return B.shouldForwardProp = i.shouldForwardProp, B.styleSheet = o, B.stylis = r, B;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var s = {};
  return s.value = r, et.createElement(pr.Provider, a, et.createElement(Jc.Provider, s, i.children));
}
var Ca = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Si);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, hr(this, function() {
      throw kt(-5350 + -1069 * -1 + 3 * 1431, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Si), this.name + n.hash;
  }, i;
})(), Yc = function(i) {
  return i >= "A" && i <= "Z";
};
function Ba(i) {
  for (var n = "", t = -1 * -2565 + 9580 + -12145; t < i.length; t++) {
    var e = i[t];
    if (-3 * 2715 + -1 * -9967 + -1821 === t && e === "-" && i[1393 * 3 + 11 * -322 + -637] === "-") return i;
    Yc(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var gI = function(i) {
  return i == null || i === !1 || i === "";
}, II = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !gI(o) && (Array.isArray(o) && o.isCss || ht(o) ? e.push("".concat(Ba(A), ":"), o, ";") : pt(o) ? e.push.apply(e, xt(xt(["".concat(A, " {")], II(o), !1), ["}"], !1)) : e.push("".concat(Ba(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 3528 + 4078 * 1 + 7606 * -1 === t || n in rc || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function $e(i, n, t, e) {
  if (gI(i)) return [];
  if (fr(i)) return [".".concat(i.styledComponentId)];
  if (ht(i)) {
    if (!ht(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return M.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Ca || pt(A) || A === null || console.error("".concat($g(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), $e(A, n, t, e);
  }
  var o;
  return i instanceof Ca ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : pt(i) ? II(i) : Array.isArray(i) ? Array.prototype.concat.apply(Rn, i.map(function(r) {
    return $e(r, n, t, e);
  })) : [i.toString()];
}
function Pc(i) {
  for (var n = -7726 + -5 * -509 + 5181; n < i.length; n += -1559 * 1 + 4 * -1306 + 16 * 424) {
    var t = i[n];
    if (ht(t) && !fr(t)) return !1;
  }
  return !0;
}
var Tc = Xg(Nn), Hc = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Pc(n), this.componentId = t, this.baseHash = Ve(Tc, t), this.baseStyle = e, iI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ze(A, this.staticRulesId);
      else {
        var o = Ia($e(this.rules, n, t, e)), r = bi(Ve(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = ze(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = Ve(this.baseHash, e.hash), s = "", B = -5 * -517 + 1628 + 383 * -11; B < this.rules.length; B++) {
        var I = this.rules[B];
        if (typeof I == "string") s += I, M.NODE_ENV !== "production" && (a = Ve(a, I));
        else if (I) {
          var c = Ia($e(I, n, t, e));
          a = Ve(a, c + B), s += c;
        }
      }
      if (s) {
        var E = bi(a >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(s, ".".concat(E), void 0, this.componentId)), A = ze(A, E);
      }
    }
    return A;
  }, i;
})(), sI = et.createContext(void 0);
sI.Consumer;
var jn = {}, Qa = /* @__PURE__ */ new Set();
function _c(i, n, t) {
  var e = fr(i), A = i, o = !Kn(i), r = n.attrs, g = r === void 0 ? Rn : r, a = n.componentId, s = a === void 0 ? (function(D, k) {
    var y = typeof D != "string" ? "sc" : na(D);
    jn[y] = (jn[y] || 1 * 6661 + -698 * -14 + -1 * 16433) + (7539 + -751 * -7 + 1 * -12795);
    var O = "".concat(y, "-").concat(Bc(Nn + y + jn[y]));
    return k ? "".concat(k, "-").concat(O) : O;
  })(n.displayName, n.parentComponentId) : a, B = n.displayName, I = B === void 0 ? (function(D) {
    return Kn(D) ? "styled.".concat(D) : "Styled(".concat($g(D), ")");
  })(i) : B, c = n.displayName && n.componentId ? "".concat(na(n.displayName), "-").concat(n.componentId) : n.componentId || s, E = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var d = n.shouldForwardProp;
      x = function(D, k) {
        return Q(D, k) && d(D, k);
      };
    } else x = Q;
  }
  var f = new Hc(t, c, e ? A.componentStyle : void 0);
  function h(D, k) {
    return (function(y, O, Z) {
      var NA = y.attrs, yA = y.componentStyle, bA = y.defaultProps, z = y.foldedComponentIds, to = y.styledComponentId, Us = y.target, Ys = et.useContext(sI), Ps = Gi(), Wn = y.shouldForwardProp || Ps.shouldForwardProp;
      M.NODE_ENV !== "production" && Po(to);
      var Rr = Ic(O, Ys, bA) || ft, Ce = (function(oo, Nt, no) {
        var it = {};
        it.className = void 0, it.theme = no;
        for (var Jn, Me = GA(GA({}, Nt), it), Un = 1 * 5081 + 9295 + -1797 * 8; Un < oo.length; Un += -7 * 979 + -4394 + -2 * -5624) {
          var io = ht(Jn = oo[Un]) ? Jn(Me) : Jn;
          for (var we in io) Me[we] = we === "className" ? ze(Me[we], io[we]) : we === "style" ? GA(GA({}, Me[we]), io[we]) : io[we];
        }
        return Nt.className && (Me.className = ze(Me.className, Nt.className)), Me;
      })(NA, O, Rr), St = Ce.as || Us, Gt = {};
      for (var PA in Ce) Ce[PA] === void 0 || PA[0] === "$" || PA === "as" || PA === "theme" && Ce.theme === Rr || (PA === "forwardedAs" ? Gt.as = Ce.forwardedAs : Wn && !Wn(PA, St) || (Gt[PA] = Ce[PA], Wn || M.NODE_ENV !== "development" || i0(PA) || Qa.has(PA) || !Di.has(St) || (Qa.add(PA), console.warn('styled-components: it looks like an unknown prop "'.concat(PA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ln = (function(oo, Nt) {
        var no = Gi(), it = oo.generateAndInjectStyles(Nt, no.styleSheet, no.stylis);
        return M.NODE_ENV !== "production" && Po(it), it;
      })(yA, Ce);
      M.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(Ln);
      var On = ze(z, to);
      return Ln && (On += " " + Ln), Ce.className && (On += " " + Ce.className), Gt[Kn(St) && !Di.has(St) ? "class" : "className"] = On, Z && (Gt.ref = Z), DA(St, Gt);
    })(p, D, k);
  }
  h.displayName = I;
  var p = et.forwardRef(h), b = {};
  return b.attrs = !0, b.componentStyle = !0, b.displayName = !0, b.foldedComponentIds = !0, b.shouldForwardProp = !0, b.styledComponentId = !0, b.target = !0, p.attrs = E, p.componentStyle = f, p.displayName = I, p.shouldForwardProp = x, p.foldedComponentIds = e ? ze(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = c, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = e ? (function(k) {
      for (var y = [], O = 1; O < arguments.length; O++) y[O - 1] = arguments[O];
      for (var Z = 0, NA = y; Z < NA.length; Z++) ki(k, NA[Z], !0);
      return k;
    })({}, A.defaultProps, D) : D;
  } }), M.NODE_ENV !== "production" && (gc(I, c), p.warnTooManyClasses = /* @__PURE__ */ (function(D, k) {
    var y = {}, O = !1;
    return function(Z) {
      if (!O && (y[Z] = !0, Object.keys(y).length >= 1 * -3040 + -7633 * 1 + 1 * 10873)) {
        var NA = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(-1 * -1609 + 6109 * -1 + 4700, " classes were generated for component ").concat(D).concat(NA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), O = !0, y = {};
      }
    };
  })(I, c)), hr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && oI(p, i, b), p;
}
function Ea(i, n) {
  for (var t = [i[8 * 326 + -8446 + 973 * 6]], e = 5809 + 447 * 8 + -9385, A = n.length; e < A; e += -2957 * -1 + -5 * 1469 + 4389) t.push(n[e], i[e + 1]);
  return t;
}
var xa = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function Kc(i) {
  for (var n = [], t = 8961 + -8 * 1120; t < arguments.length; t++) n[t - (12845 + -1 * 12844)] = arguments[t];
  if (ht(i) || pt(i)) return xa($e(Ea(Rn, xt([i], n, !0))));
  var e = i;
  return -14353 + 14353 * 1 === n.length && -2769 + -1 * -593 + 1 * 2177 === e.length && typeof e[-8318 + 7438 * 1 + 880] == "string" ? $e(e) : xa($e(Ea(e, n)));
}
function Ni(i, n, t) {
  if (t === void 0 && (t = ft), !n) throw kt(19166 + 3833 * -5, n);
  var e = function(A) {
    for (var o = [], r = -3330 + 1 * -7574 + 3 * 3635; r < arguments.length; r++) o[r - (9881 + -8053 * -1 + -17933)] = arguments[r];
    return i(n, t, Kc.apply(void 0, xt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Ni(i, n, GA(GA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Ni(i, n, GA(GA({}, t), A));
  }, e;
}
var cI = function(i) {
  return Ni(_c, i);
}, $t = cI;
Di.forEach(function(i) {
  $t[i] = cI(i);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var so = "__sc-".concat(tt, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[so] || (window[so] = -1560 * -1 + -658 + 451 * -2), 3 * 344 + 2 * 1537 + -4105 === window[so] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[so] += -1 * -1424 + -943 + -480);
const jc = $t.div`
  position: relative;
`, qc = $t.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class w extends Error {
  cause;
  constructor(n, t) {
    super(n), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(n) {
  }
  static fromCameraError(n) {
    if (this.logError(n), n instanceof w) return n;
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
    return new w(t, n);
  }
  static fromError(n) {
    if (this.logError(n), n instanceof w) return n;
    const t = "An unexpected error has occurred";
    return new w(t);
  }
}
const Go = {};
Go.CONTINUE_DETECTION = "continue-detection", Go.SWITCH_CAMERA = "switch-camera", Go.TOGGLE_MIRROR = "toggle-mirror";
const qn = Go, Ri = {};
Ri.FIRST_FRAME = "first-frame", Ri.FIRST_VALID_FRAME = "first-valid-frame";
const Vn = Ri, CI = {};
CI.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const la = CI;
var BI = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(BI || {}), Vc = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Vc || {}), Zc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Zc || {}), pe = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(pe || {}), zc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(zc || {});
const de = {};
de.CANDIDATE_SELECTION = "candidate_selection", de.DOCUMENT_CENTERING = "document_centering", de.DOCUMENT_NOT_PRESENT = "document_not_present", de.DOCUMENT_TOO_FAR = "document_too_far", de.SHARPNESS_TOO_LOW = "sharpness_too_low", de.BRIGHTNESS_TOO_LOW = "brightness_too_low", de.BRIGHTNESS_TOO_HIGH = "brightness_too_high", de.HOTSPOTS_PRESENT = "hotspots_present";
const We = de, Le = {};
Le.isPresent = We.DOCUMENT_NOT_PRESENT, Le.isNotSmall = We.DOCUMENT_TOO_FAR, Le.isNotOutOfBounds = We.DOCUMENT_CENTERING, Le.isSharp = We.SHARPNESS_TOO_LOW, Le.isNotDim = We.BRIGHTNESS_TOO_LOW, Le.isNotBright = We.BRIGHTNESS_TOO_HIGH, Le.noHotspots = We.HOTSPOTS_PRESENT;
const It = {};
It.LOADING = "loading", It.ERROR = "error", It.WAITING = "waiting", It.RUNNING = "running", It.COMPLETE = "complete";
const sA = It, QI = { ...sA };
QI.DONE = "done";
const da = QI, EI = {};
EI.EYE_NOT_PRESENT = "eye_not_present";
const yt = EI, wA = {};
wA.CANDIDATE_SELECTION = "candidate_selection", wA.FACE_TOO_CLOSE = "face_too_close", wA.FACE_TOO_FAR = "face_too_far", wA.FACE_CENTERING = "face_centering", wA.FACE_NOT_PRESENT = "face_not_present", wA.SHARPNESS_TOO_LOW = "sharpness_too_low", wA.BRIGHTNESS_TOO_LOW = "brightness_too_low", wA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", wA.DEVICE_PITCHED = "device_pitched", wA.LEFT_EYE_NOT_PRESENT = "left_" + yt.EYE_NOT_PRESENT, wA.RIGHT_EYE_NOT_PRESENT = "right_" + yt.EYE_NOT_PRESENT, wA.MOUTH_NOT_PRESENT = "mouth_not_present", wA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", wA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const RA = wA, vA = {};
vA.isPresent = RA.FACE_NOT_PRESENT, vA.isNotPitched = RA.DEVICE_PITCHED, vA.isNotSmall = RA.FACE_TOO_FAR, vA.isNotLarge = RA.FACE_TOO_CLOSE, vA.isNotOutOfBounds = RA.FACE_CENTERING, vA.isNotDim = RA.BRIGHTNESS_TOO_LOW, vA.isNotBright = RA.BRIGHTNESS_TOO_HIGH, vA.isSharp = RA.SHARPNESS_TOO_LOW, vA.isLeftEyePresent = RA.LEFT_EYE_NOT_PRESENT, vA.isRightEyePresent = RA.RIGHT_EYE_NOT_PRESENT, vA.isMouthPresent = RA.MOUTH_NOT_PRESENT, vA.isMouthScoreNotTooHigh = RA.MOUTH_SCORE_TOO_HIGH, vA.isMouthScoreNotTooLow = RA.MOUTH_SCORE_TOO_LOW;
var Xc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Xc || {});
const nA = {};
nA.CANDIDATE_SELECTION = "candidate_selection", nA.FACE_TOO_CLOSE = "face_too_close", nA.FACE_TOO_FAR = "face_too_far", nA.FACE_CENTERING = "face_centering", nA.FACE_NOT_PRESENT = "face_not_present", nA.SHARPNESS_TOO_LOW = "sharpness_too_low", nA.BRIGHTNESS_TOO_LOW = "brightness_too_low", nA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", nA.DEVICE_PITCHED = "device_pitched", nA.LEFT_EYE_NOT_PRESENT = "left_" + yt.EYE_NOT_PRESENT, nA.RIGHT_EYE_NOT_PRESENT = "right_" + yt.EYE_NOT_PRESENT, nA.MOUTH_NOT_PRESENT = "mouth_not_present", nA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", nA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", nA.SMILE = "smile", nA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", nA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const FA = nA, MA = {};
MA.isPresent = FA.FACE_NOT_PRESENT, MA.isNotPitched = FA.DEVICE_PITCHED, MA.isNotSmall = FA.FACE_TOO_FAR, MA.isNotLarge = FA.FACE_TOO_CLOSE, MA.isNotOutOfBounds = FA.FACE_CENTERING, MA.isNotDim = FA.BRIGHTNESS_TOO_LOW, MA.isNotBright = FA.BRIGHTNESS_TOO_HIGH, MA.isSharp = FA.SHARPNESS_TOO_LOW, MA.isLeftEyePresent = FA.LEFT_EYE_NOT_PRESENT, MA.isRightEyePresent = FA.RIGHT_EYE_NOT_PRESENT, MA.isMouthPresent = FA.MOUTH_NOT_PRESENT, MA.isMouthStatusNotTooHigh = FA.MOUTH_SCORE_TOO_HIGH, MA.isMouthStatusNotTooLow = FA.MOUTH_SCORE_TOO_LOW;
const Zn = {};
Zn.NEUTRAL = "NEUTRAL", Zn.SMILE = "SMILE", Zn.SMILE_MANUAL = "SMILE_MANUAL";
const zA = {};
zA.CANDIDATE_SELECTION = "candidate_selection", zA.PALM_CENTERING = "palm_centering", zA.PALM_NOT_PRESENT = "palm_not_present", zA.PALM_TOO_FAR = "palm_too_far", zA.PALM_TOO_CLOSE = "palm_too_close", zA.SHARPNESS_TOO_LOW = "sharpness_too_low", zA.BRIGHTNESS_TOO_LOW = "brightness_too_low", zA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", zA.DEVICE_PITCHED = "device_pitched", zA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const XA = zA, ie = {};
ie.isPresent = XA.PALM_NOT_PRESENT, ie.isNotPitched = XA.DEVICE_PITCHED, ie.isNotSmall = XA.PALM_TOO_FAR, ie.isNotOutOfBounds = XA.PALM_CENTERING, ie.isNotDim = XA.BRIGHTNESS_TOO_LOW, ie.isNotBright = XA.BRIGHTNESS_TOO_HIGH, ie.isSharp = XA.SHARPNESS_TOO_LOW, ie.isNotLarge = XA.PALM_TOO_CLOSE, ie.isTemplateExtractionQualityHighEnough = XA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const $c = ie, co = {};
co.TOP_LEFT = "TOP_LEFT", co.TOP_RIGHT = "TOP_RIGHT", co.BOTTOM_RIGHT = "BOTTOM_RIGHT", co.BOTTOM_LEFT = "BOTTOM_LEFT";
const _A = {};
_A.CANDIDATE_SELECTION = "candidate_selection", _A.FACE_TOO_CLOSE = "face_too_close", _A.FACE_TOO_FAR = "face_too_far", _A.FACE_CENTERING = "face_centering", _A.FACE_NOT_PRESENT = "face_not_present", _A.SHARPNESS_TOO_LOW = "sharpness_too_low", _A.BRIGHTNESS_TOO_LOW = "brightness_too_low", _A.BRIGHTNESS_TOO_HIGH = "brightness_too_high", _A.DEVICE_PITCHED = "device_pitched", _A.LEFT_EYE_NOT_PRESENT = "left_" + yt.EYE_NOT_PRESENT, _A.RIGHT_EYE_NOT_PRESENT = "right_" + yt.EYE_NOT_PRESENT;
const te = _A, oe = {};
oe.isPresent = te.FACE_NOT_PRESENT, oe.isNotPitched = te.DEVICE_PITCHED, oe.isNotSmall = te.FACE_TOO_FAR, oe.isNotLarge = te.FACE_TOO_CLOSE, oe.isNotOutOfBounds = te.FACE_CENTERING, oe.isNotDim = te.BRIGHTNESS_TOO_LOW, oe.isNotBright = te.BRIGHTNESS_TOO_HIGH, oe.isSharp = te.SHARPNESS_TOO_LOW, oe.isLeftEyePresent = te.LEFT_EYE_NOT_PRESENT, oe.isRightEyePresent = te.RIGHT_EYE_NOT_PRESENT;
const vn = ve(void 0);
vn.displayName = "AppStateContext";
function ee() {
  const i = ce(vn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
var xI = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(xI || {});
const vi = {};
vi.FRONT = "user", vi.BACK = "environment";
const Vt = vi, Fi = {};
Fi.AUTO_CAPTURE = "AUTO_CAPTURE", Fi.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Mi = Fi, Wi = {};
Wi.SIMD = "simd", Wi.NO_SIMD = "no-simd";
const ua = Wi, Li = {};
Li.Lower = "Lower", Li.Higher = "Higher";
const Ko = Li, No = {};
No.VISIBLE = "VISIBLE", No.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", No.HIDDEN = "HIDDEN";
const jo = No, Oi = {};
Oi.MOBILE = "MOBILE", Oi.DESKTOP = "DESKTOP";
const fa = Oi;
(function(i, n) {
  function t(a, s, B, I, c) {
    return iA(a - -636, c);
  }
  function e(a, s, B, I, c) {
    return iA(a - -144, s);
  }
  function A(a, s, B, I, c) {
    return iA(s - -241, I);
  }
  const o = i();
  function r(a, s, B, I, c) {
    return iA(a - -62, c);
  }
  function g(a, s, B, I, c) {
    return iA(s - 63, B);
  }
  for (; ; )
    try {
      if (parseInt(e(32, "WrBl", 16, 30, 35)) / 1 * (parseInt(e(9, "MqUB", 17, 25, 20)) / 2) + -parseInt(g(215, 215, "1*WG", 207, 200)) / 3 + -parseInt(A(-67, -75, -79, "K@5K", -70)) / 4 * (parseInt(r(112, 103, 100, 96, "AjrC")) / 5) + parseInt(e(38, "ymNW", 42, 23, 25)) / 6 * (-parseInt(A(-71, -69, -60, "L7zh", -65)) / 7) + -parseInt(g(219, 225, "D6hq", 243, 208)) / 8 + parseInt(t(-472, -490, -487, -467, "orpj")) / 9 + parseInt(r(108, 122, 112, 119, "L7zh")) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vo, 683405 + 85926 * -1);
function AC(i, n, t, e, A) {
  return iA(e - -33, i);
}
function iA(i, n) {
  i = i - (1 * -6713 + -8502 + 15365);
  const t = Vo();
  let e = t[i];
  if (iA.CurUnf === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    iA.ezSMuD = a, iA.sfkLUa = {}, iA.CurUnf = !0;
  }
  const o = t[4411 + -5046 * -1 + 1 * -9457], r = i + o, g = iA.sfkLUa[r];
  return g ? e = g : (iA.gENqOZ === void 0 && (iA.gENqOZ = !0), e = iA.ezSMuD(e, n), iA.sfkLUa[r] = e), e;
}
function eC(i, n, t, e, A) {
  return iA(e - 359, t);
}
function Ht(i, n, t, e, A) {
  return iA(t - 90, i);
}
function lI(i, n, t, e, A) {
  return iA(t - 903, e);
}
const qo = ve(void 0);
qo[Ht("Hs2@", 263, 257) + Ht("eji!", 278, 265) + "e"] = Ht("AjrC", 276, 273) + lI(1052, 1076, 1066, "J9aQ") + AC("ymNW", 129, 122, 118);
function Vo() {
  const i = ["c8o3W6nuDa", "WPa5W4FdN8kuWQ5rWRO", "WPpdQYNdQHq", "W48eWOFcNXhdOmomac3cKu5U", "BdpcKSkrELOcuCo0WRmjdq", "W41mWRJcTSkW", "ju7cNHipWOLIlW", "W5tdOSoqECoHWQpdQSkXz8kRW5WS", "W5zGtmkcDW", "W4vHW6BdPCk0", "W4RdHhNcRGW", "WPtcTSkynq", "i8kiwCocW4PXWRuZW4tcSmkecW", "W7lcS8oYW6TsWRS/W67cP1L5W5i", "tmkFDmkGW4lcH8ostJtdMt9OW5S", "W74xW6jJW4JdHCkKjhCssem", "W4vPWQ9AmW", "W78bWObPW5O", "WO5mWRNcHHjheCkFW5S", "WRdcPWGHWOxdQJ7cS27dVCkuWOG", "psu5WRjUs8oitmkNjwRdT8kv", "W4VcIhVdTmoF", "W75dW692FIFcS8oKWQ0DC0ZcVG", "W65BWPtcR8k3", "vhtcVCkcWRZdGheSWONdVmk8W5BcIq", "E8kitG", "i8kXf8oIzSkSW6xcK2jIW6P+", "W4b5WPjlmG", "WO/cQYCTACkRC0WgWPmVW4nrW74", "WOpdQYpcUqy", "W6moWQCFFWXyCZTdA3OaeW", "W4FdU8kRvKK5nYm", "W6akWQDUcMOMcGK", "FqVcPdeT", "WQi8y8kusCoJWPBcMW"];
  return Vo = function() {
    return i;
  }, Vo();
}
function Ao() {
  function i(o, r, g, a, s) {
    return lI(o - 153, r - 102, a - -1234, g);
  }
  const n = ce(qo);
  function t(o, r, g, a, s) {
    return Ht(s, r - 8, r - -113);
  }
  function e(o, r, g, a, s) {
    return eC(o - 54, r - 321, o, r - -598);
  }
  if (n === void 0) throw new Error(qo[A("WrBl", 214, 220, 228) + A("Hs2@", 189, 197, 200) + "e"] + (A("C$cK", 196, 220, 205) + t(121, 127, 112, 123, "qC]S") + i(-151, -151, "tskc", -162) + A("cs&r", 227, 208, 217) + A("l3Hz", 206, 196, 201) + i(-168, -158, "tskc", -154) + e("J9aQ", -59) + i(-167, -148, "PZLg", -166)));
  function A(o, r, g, a, s) {
    return Ht(o, r - 257, a - -46);
  }
  return n;
}
const Co = (i, n) => Math.hypot(n.x - i.x, n.y - i.y), Zo = (i) => i.length < -7101 + -3551 * -2 ? -8769 + -1 * 5839 + 14608 : i.reduce((t, e) => t + e, 7586 * -1 + -2 * -3211 + 1164) / i.length, mt = (i) => Number.parseFloat(i.toFixed(3)), tC = (i) => {
  const { bottomLeft: n, bottomRight: t, topLeft: e, topRight: A } = i, o = Co(e, A), r = Co(A, t), g = Co(n, t), a = Co(e, n);
  return Math.min(o, r, g, a);
};
function oC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(9333 + -1220 * 1 + -8113, 5 * -1502 + 8141 * -1 + -333 * -47, n.canvas.width, n.canvas.height);
}
const dI = -707 * -5 + -1 * 9342 + 5807 * 1 + 0.85, nC = 600, iC = -1877 + -1 * -1877, rC = "dot-auto-capture-video", yr = (i, n) => Math.min(i, n), uI = ({ height: i, width: n }, t) => {
  const e = yr(n, i) * t, A = (n - e) / (-9566 + 1 * 5513 + 1 * 4055), o = (i - e) / (1019 * 1 + 5158 + -6175), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, aC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = uI(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, gC = ({ height: i, width: n }) => {
  const t = yr(n, i), e = t / 3 * (-1075 + -1079 * -1);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, IC = ({ height: i, width: n }) => {
  const t = {};
  return t.height = i, t.width = n, uI(t, dI);
}, sC = (i) => aC(i, dI), cC = "8.0.2", CC = {
  version: cC
}, Ji = {};
Ji.max = 100, Ji.min = 10;
const ha = Ji, BC = 6846 * -1 + -8452 + 16018, QC = 5133 + -4933 * 1, EC = 1 * 6886 + -1823 * -1 + 1 * -8705, fI = "AES-CBC", hI = "RSA-OAEP", xC = "SHA-256", lC = "image/jpeg", dC = -2903 + -1 * 542 + 3453, pI = "/dot-assets", pa = "dot_embedded_bg.wasm", Ui = (i) => new Promise((n) => {
  setTimeout(n, i);
}), uC = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? mt(t) : t)), yI = () => CC.version, mI = (i) => new URL(i).hostname.replace("www.", ""), mr = () => mI(window.location.href) === "localhost", fC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function hC(i) {
  return i.at(-1) === "/" ? i.slice(-170 + -1 * 8643 + 8813, -1) : i;
}
function wI(i) {
  return "" + hC(i ?? "") + pI;
}
function Rt(i) {
  return (...n) => {
    mr() && console[i](...n);
  };
}
const wr = { log: Rt("log"), warn: Rt("warn"), error: Rt("error"), info: Rt("info"), debug: Rt("debug") }, pC = () => "prod".toLowerCase() === "dev";
class DI extends Array {
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
    this.length === this.#A && this.splice(11454 + -3 * 3818, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(7 * 321 + 367 + -2 * 1307);
  }
}
const bI = (i, n, t = lC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), yC = async (i) => bI(i, -3455 * 1 + 1 * 6819 + -1 * 3274), mC = async (i) => bI(i, 100, "image/png"), kI = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -2581 * 1 + -1043 * -2 + 495, 975 + -1 * -4308 + -1 * 5283, t.width, t.height), t;
}, SI = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(1276 * 4 + 6119 + 387 * -29, -1124 + -3 * 2778 + 1 * 9458, i.width, i.height);
  return t;
};
async function wC(i, n) {
  const t = kI(i, n);
  return mC(t);
}
const DC = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height), A.stroke());
}, zn = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, DC(i, a, t);
};
function bC({ canvas: i, color: n, fill: t, offset: e = -398 + -398 * -1, polygon: A }) {
  const o = i.getContext("2d");
  if (!o) return;
  const { bottomLeft: r, bottomRight: g, topLeft: a, topRight: s } = A;
  t ? o.fillStyle = n : o.strokeStyle = n, o.beginPath(), o.moveTo(a.x + e, a.y + e), o.lineTo(s.x + e, s.y + e), o.lineTo(g.x + e, g.y + e), o.lineTo(r.x + e, r.y + e), o.closePath(), t ? o.fill() : o.stroke();
}
const kC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, SC = (i, n) => Object.values(i).every((t) => kC(t, n));
function zo(i) {
  const { height: n, width: t } = gC(i), e = (i.width - t) / (4454 + -4173 * 1 + -279), A = (i.height - n) / (8319 + -1 * 5470 + 3 * -949), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function GI(i, n, t) {
  const { height: e, width: A } = t, o = yr(i.width, i.height), r = A - o * n * (1 * -6269 + 1 * -4765 + 11036), g = e - o * n * (-6628 + -7506 * 1 + -7068 * -2), a = (i.width - r) / (8674 * -1 + 935 + 1 * 7741), s = (i.height - g) / (8018 + -16 * 501), B = {};
  return B.shiftX = a, B.shiftY = s, B.width = r, B.height = g, B;
}
function Bo(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function GC(i, n) {
  return { ...i, topLeft: Bo(i.topLeft, n), topRight: Bo(i.topRight, n), bottomRight: Bo(i.bottomRight, n), bottomLeft: Bo(i.bottomLeft, n) };
}
function NC(i, n) {
  const t = tC(i), e = Math.min(n.width, n.height), A = t / e, o = { ...i };
  return o.smallestEdge = A, o;
}
function Fn() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function ya() {
  return /Android/i.test(navigator.userAgent);
}
function At() {
  return /Firefox/i.test(navigator.userAgent);
}
function NI() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const RC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function vC() {
  return navigator.userAgent;
}
function FC() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function _t() {
  return !1;
}
function MC() {
  return !0;
}
function Xo() {
  const i = ["W73dRhz3g8k8gLVcOSotW4yuW6e", "yvJdOCkxsgOdxCkTbKBdM8kTW6i", "W447e8orzM3dTmomCs1HW6P+W5q", "C8oJW4bkWO4", "DmkSWPJdUNPPWP1lzxe", "BxRdNa/dOmoZgCoTWPhdTvvnWO8", "WRDFoWNcQLHXgCopowKqW7G", "vb/cPKJdQLbcmdVdV8kxqZFcIG", "W7jbte7dPWavvvbv", "vJtdVva7vmoHWOpdPgy", "CLFdGcVdOW", "W6VcOaZdQfi", "W47cQZP5W6ZdKapcRCkNhq", "yLNdPSkwbIT8nCkIjq", "z1ZcIJLZWO9dW7VcS8oFW7ddTq0", "BCkGyJtdRSk0eXZdJw/cOmoqgG", "auJdOdFcUG", "W47cRtP6WP7cT0FdRSkakbNdO3FdPa", "BWndWRKE", "fdFdHSoiWQ8", "WPBdSMy6", "yL3cHdrXWObgW4RcMCoIW6ddKtK", "ztDpESkawv9uW7a", "rCkmFeWzWQJcQmopgq"];
  return Xo = function() {
    return i;
  }, Xo();
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return EA(s - 832, a);
  }
  function e(g, a, s, B, I) {
    return EA(B - -520, g);
  }
  function A(g, a, s, B, I) {
    return EA(I - 854, g);
  }
  const o = i();
  function r(g, a, s, B, I) {
    return EA(B - 819, s);
  }
  for (; ; )
    try {
      if (-parseInt(A("X4H9", 1270, 1278, 1274, 1282)) / 1 * (-parseInt(r(1239, 1260, "dTi5", 1248, 1256)) / 2) + parseInt(r(1246, 1257, "DZ!V", 1249, 1246)) / 3 + -parseInt(e("V4I9", -93, -95, -89, -78)) / 4 + parseInt(r(1246, 1248, "DZ!V", 1256, 1256)) / 5 + parseInt(r(1239, 1251, "my2I", 1244, 1247)) / 6 * (parseInt(t(1263, "bll^", 1271, 1266, 1276)) / 7) + parseInt(A("X4H9", 1282, 1278, 1285, 1287)) / 8 + -parseInt(A("]upI", 1298, 1295, 1313, 1301)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Xo, -279764 + 9 * 169601 + 1 * -360779);
function EA(i, n) {
  i = i - (1678 * -3 + -7750 + 13209);
  const t = Xo();
  let e = t[i];
  if (EA.InKofx === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    EA.OYaOPt = a, EA.SxOEkE = {}, EA.InKofx = !0;
  }
  const o = t[-2262 + -1 * -2262], r = i + o, g = EA.SxOEkE[r];
  return g ? e = g : (EA.xcVNuu === void 0 && (EA.xcVNuu = !0), e = EA.OYaOPt(e, n), EA.SxOEkE[r] = e), e;
}
function WC({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = IA(), A = t !== void 0;
  K(() => {
    async function a() {
      function s(I, c, E, x, Q) {
        return EA(E - -53, c);
      }
      function B(I, c, E, x, Q) {
        return EA(c - -57, E);
      }
      await n[s(381, "X4H9", 383)](wI(i)), e(n[s(379, "]upI", 379) + B(392, 386, "LBLA") + s(379, "MAKL", 373) + "t"]());
    }
    a();
  }, [n, i, e]);
  const o = {};
  function r(a, s, B, I, c) {
    return EA(a - -289, I);
  }
  function g(a, s, B, I, c) {
    return EA(a - 180, s);
  }
  return o[r(138, 135, 130, "rd(1") + r(145, 140, 141, "H7TI")] = t, o[g(615, "SlDA") + "sh"] = A, o;
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return $(c - 726, s);
  }
  const e = i();
  function A(a, s, B, I, c) {
    return $(c - 618, a);
  }
  function o(a, s, B, I, c) {
    return $(c - -778, I);
  }
  function r(a, s, B, I, c) {
    return $(B - 615, a);
  }
  function g(a, s, B, I, c) {
    return $(c - 560, s);
  }
  for (; ; )
    try {
      if (parseInt(t(1173, "m&A)", 1182, 1193, 1180)) / 1 + -parseInt(t(1195, "WO^E", 1195, 1190, 1195)) / 2 + parseInt(t(1181, "$g2H", 1202, 1198, 1191)) / 3 + parseInt(t(1180, "J57H", 1205, 1202, 1193)) / 4 * (-parseInt(A("c6%y", 1077, 1062, 1075, 1066)) / 5) + parseInt(o(-312, -306, -325, "uDFD", -312)) / 6 + parseInt(g(1036, "uDFD", 1024, 1041, 1028)) / 7 * (-parseInt(g(1042, "6E4Z", 1021, 1045, 1031)) / 8) + parseInt(r("qHWJ", 1082, 1075, 1065, 1087)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($o, 1 * -29212 + -158985 + -3 * -214027);
function $o() {
  const i = ["WRFcS13dLCkg", "rmoPf8kYEW", "W6HUW5NdRf/dTa17WQtcJJRdLq", "xIH6nmoFW7bV", "i1CrgKa", "d8o0W6zQWQaLdSkfkrBdV8okmG", "WQHXAq", "WQlcM0mdiW", "tmkPemk1W4y", "cCo3W6TQWQjvumkscqRdRa", "WOJdVCoOW5frqSkuWONdSSoJ", "W73dQCkPWRnZW6ldNW", "mSkfW6xcT8o3F8kYW6KeWOFdIZGL", "WQxcHeFdGSkx", "WRHFWQO", "W63dN2ddLwxdS8k6oZ3dSgnUkq", "wSk0DL7cOCk/WOpcUSkasmoF", "AvNdJCkjDbtcOqDMBmoOfHO", "jmoABCkmWP53WPPxWQ3cOG", "te5nwG", "W7/cLhJcVCoMWObIW67dLmkHW5pcJmoP", "WQ9Cv8kIW4KinqxcVqbRsq", "ALRdJSkiDHBcPs57yCo0aaq", "WQXzu8kIWRPWmbpcJWa", "mWnYd0VdNguxW6rsD1y", "imoCA8kkW6OlWRPvWQlcVXat", "WP0wWR7cTCohW5DKg3hdGW", "dCo2ir3dRW"];
  return $o = function() {
    return i;
  }, $o();
}
function $(i, n) {
  i = i - (-7493 + 2 * 3969);
  const t = $o();
  let e = t[i];
  if ($.YpfkMp === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    $.BjCIzQ = a, $.sahIlX = {}, $.YpfkMp = !0;
  }
  const o = t[783 * 8 + -980 * 3 + -3324], r = i + o, g = $.sahIlX[r];
  return g ? e = g : ($.uKLzTG === void 0 && ($.uKLzTG = !0), e = $.BjCIzQ(e, n), $.sahIlX[r] = e), e;
}
function LC({ assetsDirectoryPath: i, children: n, bramble: t }) {
  const e = {};
  e[r(343, 337, 340, "tnaW") + "le"] = t, e[I(653, "fa8c", 650, 649, 655) + I(661, "fa8c", 667, 655, 668) + B(180, "H[E5", 186, 198, 185) + g(860, 860, 864, "Yvh#", 862)] = i;
  const { sunfish: A, crosshatch: o } = WC(e);
  function r(E, x, Q, d, f) {
    return $(Q - -113, d);
  }
  function g(E, x, Q, d, f) {
    return $(f - 398, d);
  }
  const a = pA(() => ({ sunfish: A, crosshatch: o, bramble: t }), [A, o, t]), s = {};
  s[r(328, 336, 333, "IC#R")] = a;
  function B(E, x, Q, d, f) {
    return $(f - -287, x);
  }
  function I(E, x, Q, d, f) {
    return $(f - 210, x);
  }
  function c(E, x, Q, d, f) {
    return $(d - -228, E);
  }
  return s[r(341, 341, 336, "d]xX") + r(341, 351, 346, "nnC*")] = n, m(qo[c("h3Zg", 230, 232, 224) + I(647, "%ZOK", 671, 665, 661)], s);
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return JA(c - 55, s);
  }
  function e(a, s, B, I, c) {
    return JA(B - -100, a);
  }
  function A(a, s, B, I, c) {
    return JA(c - -402, a);
  }
  var o = i();
  function r(a, s, B, I, c) {
    return JA(B - 103, I);
  }
  for (; ; )
    try {
      var g = parseInt(A("zV^m", -142, -134, -145, -134)) / 1 + -parseInt(r(354, 352, 353, "ue5z", 355)) / 2 * (-parseInt(r(351, 354, 354, "gWI7", 364)) / 3) + -parseInt(A("Vj85", -142, -154, -135, -144)) / 4 + -parseInt(r(374, 361, 369, "gvw#", 362)) / 5 * (-parseInt(t(310, "!8I&", 315, 312, 308)) / 6) + -parseInt(t(314, "RPyV", 304, 323, 315)) / 7 * (-parseInt(e("nq(a", 152, 162, 164, 158)) / 8) + -parseInt(A("gvw#", -138, -143, -141, -148)) / 9 + -parseInt(t(316, "^bgf", 332, 328, 325)) / 10 * (-parseInt(r(356, 365, 364, "c3sp", 358)) / 11);
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(An, -961022 + 479 * -2579 + -17 * -173108);
function An() {
  var i = ["FehcKmkcW5zqza", "hmoxWRTcWR/dMmogEKRcKbK", "WQjIWR1MW5rsWRGrW4hcRCoGW5tcKG", "lL4KWRWSWQSrW6ddQmoJtq", "WPVcLmkhWRnaWOCF", "s8k9W5ZcKCklW6FdJCkOWRpdPgtdPCo7", "s3n4thW2hHNdI8oYW6HvhW", "WQfNWR5KW5rtW4ujW5VcM8ogW6m", "AX3cHcytW49+", "WQpcV1r+CCk4W4JcILFdU8kJ", "W6tdR8oNWPFdMmk+W5buxG", "g8oyWR5oW7RdMSogBvlcTW", "o8kLWOD4mYBdKCoKxJm", "WPZdJ8oGW7CXW5XLE8oUWOq7F18", "pZJdUmkcBSklW4L+W6JcOtfk", "yCkNESk7ye5wW4TVbCoYvai", "tmk/W5VdUCoVWPBcHmkXWPe", "yrKPWQRdVSoEW5jDW6DAvem5", "W4BdMxlcQNJdLvjE", "WQ7cNhCEu8kXDW", "W4XsW5ZcISksW5jJWQK", "Ef5jwCoxW5/cKSoxi3rG"];
  return An = function() {
    return i;
  }, An();
}
function JA(i, n) {
  i = i - 250;
  var t = An(), e = t[i];
  if (JA.CEchPc === void 0) {
    var A = function(s) {
      for (var B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", c = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        c += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(c);
    }, o = function(s, B) {
      var I = [], c = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    JA.DBErKX = o, JA.fViBAl = {}, JA.CEchPc = !0;
  }
  var r = t[-208 + -8779 * -1 + -8571], g = i + r, a = JA.fViBAl[g];
  return a ? e = a : (JA.qdwKHx === void 0 && (JA.qdwKHx = !0), e = JA.DBErKX(e, n), JA.fViBAl[g] = e), e;
}
const en = ve(void 0);
en.displayName = "TransactionCountingContext";
function RI() {
  const i = ce(en);
  if (i === void 0)
    throw new Error(`${en.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const OC = 1 * -2942 + -4955 + -1 * -9897;
class JC {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), OC), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== 16085 + -15685 * 1 && g.status !== 6490 + -6089 * 1 : !0;
  }
}
class vI {
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
    if (this.#t = this.shouldCountTransactions(n), wr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), mr()) {
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
class UC extends vI {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const Ye = {};
Ye.FACE = "web-capture-face", Ye.DOCUMENT = "web-capture-document", Ye.MAGNIFEYE = "web-capture-magnifeye", Ye.SMILE = "web-capture-smile", Ye.PALM = "web-capture-palm", Ye.EYEGAZE = "web-capture-eyegaze";
const Pe = Ye, Yi = {};
Yi.LIVENESS = "liveness", Yi.CAPTURE = "capture";
const Se = Yi, YC = { [Pe.FACE]: Se.CAPTURE, [Pe.DOCUMENT]: Se.CAPTURE, [Pe.MAGNIFEYE]: Se.LIVENESS, [Pe.SMILE]: Se.LIVENESS, [Pe.PALM]: Se.CAPTURE, [Pe.EYEGAZE]: Se.LIVENESS }, PC = YC;
class TC {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = PC[e];
    switch (A) {
      case Se.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new vI(o);
      case Se.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new UC(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function HC(i, n) {
  const { crosshatch: t, bramble: e } = Ao(), [A, o] = IA(null);
  K(() => {
    if (!t) return;
    (async () => {
      const a = new TC(), s = new JC(n), B = a.create({ hwids: e.getHwids(), tokenHandler: s, transactionType: i });
      await B.init(t), o(B);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function _C({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = HC(t, n), A = pA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ m(en.Provider, { value: A, children: i });
}
function KC({ children: i, value: n }) {
  const { crosshatch: t } = Ao(), { transactionCounting: e } = RI(), A = t?.isValid && e?.isTransactionTokenValid ? Ko.Higher : Ko.Lower, o = pA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ m(vn.Provider, { value: o, children: i });
}
class jC extends KA {
  static contextType = vn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const n = new w("An unknown error has occurred");
    this.context?.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === sA.ERROR ? null : this.props.children;
  }
}
const qC = $t.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, VC = $t.div`
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
function ZC() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const zC = Mg(
  ({ detectionDetails: i, isImageMirror: n }, t) => ZC() ? (console.log(i), /* @__PURE__ */ m(YA, { children: [
    /* @__PURE__ */ m(qC, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ m(VC, { children: /* @__PURE__ */ m("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), tn = ve(void 0);
tn.displayName = "AnalyticsContext";
function XC() {
  const i = ce(tn);
  if (i === void 0)
    throw new Error(`${tn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function $C({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function AB({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = $C(o);
  return K(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), K(() => {
    e && (wr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function eB({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Ao(), { redfin: o } = ee(), r = AB({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = pA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ m(tn.Provider, { value: g, children: t });
}
const Dr = ve(void 0);
Dr.displayName = "ConfigurationContext";
function FI() {
  const i = ce(Dr);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function tB({
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
    captureMode: e ?? Mi.AUTO_CAPTURE,
    assetsDirectoryPath: wI(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function oB({
  children: i,
  configuration: n
}) {
  const t = pA(() => tB(n), [n]);
  return /* @__PURE__ */ m(Dr.Provider, { value: t, children: i });
}
const ma = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class me {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new me()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -8618 + 1 * -2041 + 10659;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && ma(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    ma(n, t);
  }
}
function MI(i, n, t = nC) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  me.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function wa(i, n) {
  me.getInstance().dispatchCustomEventOnChange(i, n);
}
function nB(i, n) {
  me.getInstance().dispatchCustomEventOnChange(i, n);
}
function iB(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  me.getInstance().dispatchCustomEventOnChange(i, e);
}
function rB(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  me.getInstance().dispatchCustomEventOnChange(i, o);
}
const aB = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  K(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, nB(i, A);
  }, [t, e, i]);
};
function gB(i, n) {
  K(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const IB = (i) => i === BI.CONTROL ? !Fn() : !0;
function sB(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = ee(), [r, g] = IA(), a = pA(() => {
    const x = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? IB(i);
  }, [n, r, i, o]);
  function s() {
    t !== sA.LOADING && e(sA.RUNNING);
  }
  function B() {
    g(r === void 0 ? !a : !r);
  }
  async function I() {
    if (n) {
      e(sA.LOADING);
      try {
        await n.switchCamera(), e(sA.RUNNING);
      } catch (x) {
        if (x instanceof Error) {
          A(w.fromCameraError(x));
          return;
        }
      }
      g(void 0);
    }
  }
  function c(x) {
    switch (x.detail?.["instruction"]) {
      case qn.CONTINUE_DETECTION:
        s();
        break;
      case qn.TOGGLE_MIRROR:
        B();
        break;
      case qn.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  gB(i, c);
  const E = {};
  return E.shouldCameraMirror = a, E;
}
function cB(i, n) {
  K(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      iB(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
var CB = /* @__PURE__ */ Symbol.for("preact-signals");
function Mn() {
  if (Ge > -11155 + 4 * 2789)
    Ge--;
  else {
    for (var i, n = !1; Kt !== void 0; ) {
      var t = Kt;
      for (Kt = void 0, Pi++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(2 * -487 + 1300 + -318 & t.f) && OI(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Pi = -10888 + 4 * 2722, Ge--, n) throw i;
  }
}
function BB(i) {
  if (Ge > 777 + -4647 * -1 + 3 * -1808) return i();
  Ge++;
  try {
    return i();
  } finally {
    Mn();
  }
}
var L = void 0;
function Da(i) {
  var n = L;
  L = void 0;
  try {
    return i();
  } finally {
    L = n;
  }
}
var Kt = void 0, Ge = -644 * -4 + -4510 + -967 * -2, Pi = -8329 + -8003 * 1 + -1361 * -12, on = 0;
function WI(i) {
  if (L !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== L)
      return n = { i: 0, S: i, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: n }, L.s !== void 0 && (L.s.n = n), L.s = n, i.n = n, 32 & L.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 6087 + 8 * -577 + -1 * 1471, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = L.s, n.n = void 0, L.s.n = n, L.s = n), n;
  }
}
function QA(i, n) {
  this.v = i, this.i = -1 * -476 + -1 * -4519 + -4995, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
QA.prototype.brand = CB, QA.prototype.h = function() {
  return !0;
}, QA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Da(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, QA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && Da(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, QA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", eo(function() {
    var e = n.value, A = L;
    L = void 0;
    try {
      i(e);
    } finally {
      L = A;
    }
  }, t);
}, QA.prototype.valueOf = function() {
  return this.value;
}, QA.prototype.toString = function() {
  return this.value + "";
}, QA.prototype.toJSON = function() {
  return this.value;
}, QA.prototype.peek = function() {
  var i = L;
  L = void 0;
  try {
    return this.value;
  } finally {
    L = i;
  }
}, Object.defineProperty(QA.prototype, "value", { get: function() {
  var i = WI(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Pi > -6504 + -4423 * -2 + -2242) throw new Error("Cycle detected");
    this.v = i, this.i++, on++, Ge++;
    try {
      for (var n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      Mn();
    }
  }
} });
function LI(i, n) {
  return new QA(i, n);
}
function OI(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function JI(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function UI(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Te(i, n) {
  QA.call(this, void 0), this.x = i, this.s = void 0, this.g = on - (-2 * -4055 + 8489 + 8299 * -2), this.f = -479 * 1 + -2422 + 7 * 415, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
Te.prototype = new QA(), Te.prototype.h = function() {
  if (this.f &= -3, 6193 + 8 * -774 & this.f) return !1;
  if ((597 * -7 + 1165 + 610 * 5 & this.f) == 32 || (this.f &= -5, this.g === on)) return !0;
  if (this.g = on, this.f |= -9616 + 9617 * 1, this.i > 2098 + -1 * -5231 + -7329 && !OI(this)) return this.f &= -2, !0;
  var i = L;
  try {
    JI(this), L = this;
    var n = this.x();
    (-6736 + 8732 * -1 + 15484 & this.f || this.v !== n || 3125 * 3 + 9500 + -18875 === this.i) && (this.v = n, this.f &= -(-809 * 4 + -9985 + 13238), this.i++);
  } catch (t) {
    this.v = t, this.f |= -1365 + -1407 * 2 + 4195, this.i++;
  }
  return L = i, UI(this), this.f &= -2, !0;
}, Te.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 8333 * 1 + 9653 + 1795 * -10;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  QA.prototype.S.call(this, i);
}, Te.prototype.U = function(i) {
  if (this.t !== void 0 && (QA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Te.prototype.N = function() {
  if (!(-677 * 4 + -4622 + 2 * 3666 & this.f)) {
    this.f |= -1919 * 2 + -471 + 4315;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Te.prototype, "value", { get: function() {
  if (3548 + -1 * -1609 + -5156 & this.f) throw new Error("Cycle detected");
  var i = WI(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 3352 + -1279 * 1 + -2057 & this.f) throw this.v;
  return this.v;
} });
function ba(i, n) {
  return new Te(i, n);
}
function YI(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    Ge++;
    var t = L;
    L = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 8944 + 1036 * -3 + 2914 * -2, br(i), e;
    } finally {
      L = t, Mn();
    }
  }
}
function br(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, YI(i);
}
function QB(i) {
  if (L !== this) throw new Error("Out-of-order effect");
  UI(this), L = i, this.f &= -2, 3 * -1898 + 3904 + 1798 & this.f && br(this), Mn();
}
function st(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 8901 + 7871 * -1 + -998, this.name = n?.name;
}
st.prototype.c = function() {
  var i = this.S();
  try {
    if (5939 + 1977 * -3 & this.f || void (2855 * -2 + 1 * 3973 + 1737) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, st.prototype.S = function() {
  if (9147 + 34 * -269 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, YI(this), JI(this), Ge++;
  var i = L;
  return L = this, QB.bind(this, i);
}, st.prototype.N = function() {
  !(-2 * -1732 + 16 * 440 + -10502 & this.f) && (this.f |= -6896 + 7892 * -1 + 14790, this.o = Kt, Kt = this);
}, st.prototype.d = function() {
  this.f |= -2 * 414 + 3528 + -2692, 4318 + -8872 * -1 + -13189 & this.f || br(this);
}, st.prototype.dispose = function() {
  this.d();
};
function eo(i, n) {
  var t = new st(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var PI, Xn, Qo = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, TI = [];
eo(function() {
  PI = this.N;
})();
function Bt(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function Eo(i) {
  Xn && Xn(), Xn = i && i.S();
}
function HI(i) {
  var n = this, t = i.data, e = _I(t);
  e.value = t;
  var A = pA(function() {
    for (var g = n, a = n.__v; a = a.__; ) if (a.__c) {
      a.__c.__$f |= 4;
      break;
    }
    var s = ba(function() {
      var E = e.value.value;
      return 1131 * -5 + 6152 * 1 + -497 === E ? 0 : E === !0 ? "" : E || "";
    }), B = ba(function() {
      return !Array.isArray(s.value) && !sg(s.value);
    }), I = eo(function() {
      if (this.N = KI, B.value) {
        var E = s.value;
        g.__v && g.__v.__e && 6833 * -1 + -1 * 3011 + 9847 === g.__v.__e.nodeType && (g.__v.__e.data = E);
      }
    }), c = n.__$u.d;
    return n.__$u.d = function() {
      I(), c.call(this);
    }, [B, s];
  }, []), o = A[-1 * 1717 + -4972 + 6689 * 1], r = A[2662 + 2661 * -1];
  return o.value ? r.peek() : r.value;
}
HI.displayName = "ReactiveTextNode";
var Ti = {};
Ti.configurable = !0, Ti.value = void 0;
var Hi = {};
Hi.configurable = !0, Hi.value = HI;
var _i = {};
_i.configurable = !0, _i.get = function() {
  var i = {};
  return i.data = this, i;
};
var Ki = {};
Ki.configurable = !0, Ki.value = 1;
var vt = {};
vt.constructor = Ti, vt.type = Hi, vt.props = _i, vt.__b = Ki, Object.defineProperties(QA.prototype, vt), Bt("__b", function(i, n) {
  if (Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof QA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), Bt("__r", function(i, n) {
  if (Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== YA) {
    Eo();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return eo(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 8195 + 1 * -6983 + -1211, e.setState({});
      }, o;
    })())), Eo(t);
  }
  i(n);
}), Bt("__e", function(i, n, t, e) {
  Qo && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Eo(), i(n, t, e);
}), Bt("diffed", function(i, n) {
  Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Eo();
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
        var s = o[a], B = e[a];
        s === void 0 ? (s = EB(t, a, B, A), o[a] = s) : s.o(B, A);
      }
    }
  }
  i(n);
});
function EB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = LI(t);
  return { o: function(r, g) {
    o.value = r, e = g;
  }, d: eo(function() {
    this.N = KI;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[4] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
Bt("unmount", function(i, n) {
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
}), Bt("__h", function(i, n, t, e) {
  (e < 3104 + -1 * 1579 + -1522 || e === 9) && (n.__$f |= 94 + 3892 * 2 + -7876), i(n, t, e);
}), KA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 4 & this.__$f) || -3401 + -346 * 22 + 1 * 11014 & this.__$f) return !0;
  } else if (!(e || 1098 * -5 + 7214 + -860 * 2 & this.__$f) || 1468 + 5 * 1549 + 5 * -1842 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var g in this.props) if (!(g in i)) return !0;
  return !1;
};
function _I(i, n) {
  return IA(function() {
    return LI(i, n);
  })[7883 + -3313 * -2 + 11 * -1319];
}
var xB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function lB() {
  BB(function() {
    for (var i; i = TI.shift(); ) PI.call(i);
  });
}
function KI() {
  3693 + -2 * 3058 + 2424 === TI.push(this) && (R.requestAnimationFrame || xB)(lB);
}
const nn = ve(void 0);
nn.displayName = "CameraServiceContext";
function dB() {
  const i = ce(nn);
  if (i === void 0)
    throw new Error(`${nn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function jI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function $n() {
  return (await jI()).filter((n) => n.kind === "videoinput");
}
function Qt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function ji(i) {
  return i.getVideoTracks()[0];
}
function rn() {
  const i = ["WP/dUmo8aI8", "W4lcV8kQChldKmkUW7/cN8o5WRJdMq", "W6NcL37dI8otArtdI1lcMCkHWPyI", "W61lW6DRkbmNDmkaWRnVWQJdUq", "W6WLW493xa", "l8kWACkAWPC", "A8k3W7FcSCoZW5WE", "s0ZdS8kpW7nZWOLwFMNdNmoZ", "WOjbgmoLW7bXwCoB", "amkjkbVcHa", "W5xdQ8o1WOCp", "WR8AWRqQxG", "WP0ZxSknzCobWOhdKq", "lbpcP8kKza", "fmolW7jyWPpdULT3WQ1RzSoOma", "WQFcId7cGSoOW4ddOG", "WRbsaHKE", "WPbUlbKu", "WOffzCkCWQ0az8oAc8oWlhy", "W47dMCo9W7jowKFdT21dWQNcGfG", "WOygiSohW6pdUwPbhIVcLNXH", "dmkkWOe", "WOtcPCoeoW", "WO3cNSonWPdcS8odWObwW5fSwCkh", "W5u+gvVdRa", "W6RcL37dGSotlNldV0/cP8kw", "WO9TwYRcUSozW4agWPFcM8ozcmos", "WO/cJSk5", "WRbMW4GLwa", "W47dNSo5W7fbxKxdQNLYWPNcM3a", "W7VdVxn8WOlcOSodiL0L", "WR/cHCkhDZC", "WRrTW5mTvW", "WOffymkuW61vyCoKgCoH", "W7ZcNthcH8oK", "BSo2WQRdH8k4WPPWv3vPW6xcJCkR", "gw3cN2qC", "WR/dRSopWQ4lWOHcaCkZW7VdTa", "WP3cJIKFWRO", "of8Hddi"];
  return rn = function() {
    return i;
  }, rn();
}
(function(i, n) {
  const t = i();
  function e(g, a, s, B, I) {
    return xA(s - -183, B);
  }
  function A(g, a, s, B, I) {
    return xA(a - 870, I);
  }
  function o(g, a, s, B, I) {
    return xA(B - 75, a);
  }
  function r(g, a, s, B, I) {
    return xA(g - -636, s);
  }
  for (; ; )
    try {
      if (-parseInt(o(412, "w04x", 419, 414, 403)) / 1 * (-parseInt(A(1198, 1208, 1225, 1223, "A6O9")) / 2) + -parseInt(o(375, "o8E3", 390, 387, 387)) / 3 + -parseInt(r(-302, -317, "O1)4", -288, -287)) / 4 + parseInt(o(410, "GffX", 406, 400, 401)) / 5 * (parseInt(e(126, 133, 146, "sQk0", 155)) / 6) + parseInt(e(170, 173, 157, "GffX", 156)) / 7 * (parseInt(r(-326, -334, "GffX", -331, -331)) / 8) + parseInt(A(1212, 1197, 1206, 1203, "A6O9")) / 9 + -parseInt(r(-318, -323, "h@%D", -308, -300)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(rn, 826962 + -9 * 45089 + -4 * -47209);
function xA(i, n) {
  i = i - (1 * -5229 + 8832 + -1 * 3300);
  const t = rn();
  let e = t[i];
  if (xA.whReRc === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    xA.cGiUYN = a, xA.cjmade = {}, xA.whReRc = !0;
  }
  const o = t[1 * -5846 + 3861 + 5 * 397], r = i + o, g = xA.cjmade[r];
  return g ? e = g : (xA.vlqOnG === void 0 && (xA.vlqOnG = !0), e = xA.cGiUYN(e, n), xA.cjmade[r] = e), e;
}
function uB(i) {
  const n = new ArrayBuffer(i[o(1254, 1237, 1243, "redo") + "h"]);
  function t(g, a, s, B, I) {
    return xA(I - -560, a);
  }
  const e = new Uint8Array(n);
  function A(g, a, s, B, I) {
    return xA(g - -67, a);
  }
  for (let g = 0, a = i[o(1236, 1223, 1215, "iHI^") + "h"]; g < a; g++)
    o(1235, 1225, 1233, "EyCc") === A(242, "5OVq") ? _0x448b4f[_0x62943f] = _0x298e62[o(1219, 1232, 1234, "cRmB") + r(608, 599, 597, 581, "CDX^")](_0x1ff386) : e[g] = i[t(-251, "7Sch", -272, -253, -257) + o(1191, 1200, 1184, "qQl*")](g);
  function o(g, a, s, B, I) {
    return xA(a - 895, B);
  }
  function r(g, a, s, B, I) {
    return xA(s - 271, I);
  }
  return n;
}
function T(i, n) {
  i = i - (11 * -342 + 4480 + -425);
  const t = an();
  let e = t[i];
  if (T.ZASzPW === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    T.QmQOuJ = a, T.eNBORW = {}, T.ZASzPW = !0;
  }
  const o = t[-2897 + 7 * 974 + -3921], r = i + o, g = T.eNBORW[r];
  return g ? e = g : (T.pHpbSx === void 0 && (T.pHpbSx = !0), e = T.QmQOuJ(e, n), T.eNBORW[r] = e), e;
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return T(B - 988, I);
  }
  function e(a, s, B, I, c) {
    return T(c - -345, I);
  }
  function A(a, s, B, I, c) {
    return T(B - -881, a);
  }
  const o = i();
  function r(a, s, B, I, c) {
    return T(s - 157, c);
  }
  function g(a, s, B, I, c) {
    return T(c - 845, B);
  }
  for (; ; )
    try {
      if (parseInt(t(1277, 1285, 1284, "A6xY", 1286)) / 1 + -parseInt(A("MPO*", -606, -581, -593, -558)) / 2 + -parseInt(A("pARk", -512, -543, -550, -527)) / 3 * (-parseInt(A("k2sl", -560, -546, -539, -548)) / 4) + parseInt(e(5, -21, -10, "P*[z", -2)) / 5 + parseInt(g(1157, 1133, "!OD^", 1171, 1161)) / 6 * (parseInt(A("7F)a", -584, -555, -544, -566)) / 7) + -parseInt(e(-16, -14, -16, "ilsw", 0)) / 8 + parseInt(t(1318, 1274, 1299, "7F)a", 1305)) / 9 * (-parseInt(r(499, 471, 459, 498, "l2q@")) / 10) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(an, 92069 * 17 + -61 * 20243 + 631636);
async function fB() {
  const i = {};
  i[s(1039, "9stF")] = fI, i[g("$gem", 737, 727) + "h"] = 256;
  const n = await window[g("@xm5", 694, 722) + "o"][r(-136, "J$yF", -111, -109, -110) + "e"][A(-502, -490, -518, -532, "H@Gk") + A(-476, -471, -485, -495, "k2sl") + "y"](i, !0, [g("sQA^", 683, 702) + "pt", r(-90, "j42Q", -117, -143, -114) + "pt"]), t = Uint8Array[A(-474, -464, -487, -467, "ilsw")](Array(6163 * 1 + -6754 + 607)[g("MPO*", 764, 758)](-5 * 985 + -2509 * 1 + 7434)), e = window[s(1012, "OUAH") + "o"][r(-102, "MPO*", -68, -54, -81) + a(545, 546, 544, 520, "$0H3") + s(1067, "OUAH")](t);
  function A(B, I, c, E, x) {
    return T(B - -805, x);
  }
  const o = {};
  o[A(-486, -456, -480, -469, "sBL7")] = n;
  function r(B, I, c, E, x) {
    return T(x - -408, I);
  }
  function g(B, I, c, E, x) {
    return T(c - 409, B);
  }
  o.iv = e;
  function a(B, I, c, E, x) {
    return T(c - 191, x);
  }
  function s(B, I, c, E, x) {
    return T(B - 715, I);
  }
  return o;
}
async function hB(i) {
  const { iv: n, key: t } = await fB(), e = new Uint8Array(i);
  function A(c, E, x, Q, d) {
    return T(Q - 610, c);
  }
  const o = {};
  o[I(604, "Adlf", 655, 651, 633)] = fI, o.iv = n;
  function r(c, E, x, Q, d) {
    return T(Q - -520, E);
  }
  const g = await window[I(651, "$0H3", 610, 607, 629) + "o"][A("ylBI", 936, 882, 905) + "e"][I(608, "]38e", 607, 643, 638) + "pt"](o, t, e), a = await window[I(673, "sBL7", 648, 661, 645) + "o"][A("oRX0", 935, 923, 932) + "e"][s(105, 125, "qJyF") + I(650, "sQA^", 636, 631, 659)](s(144, 138, "ylBI"), t);
  function s(c, E, x, Q, d) {
    return T(E - -198, x);
  }
  const B = {};
  B[s(115, 119, "DUe]") + "ge"] = g, B[r(-204, "8tE*", -188, -213)] = a;
  function I(c, E, x, Q, d) {
    return T(d - 308, E);
  }
  return B.iv = n, B;
}
function an() {
  const i = ["xLpcVSkRsG", "WQq+WOeFuSokW5HSW6BcKsZcRq", "W4HolrPy", "W7H1WOfldG", "vSk/kSkg", "W4dcSuxcOLfCj8kCW5RdTColW6VcMa", "mqLWhG", "WOddOaC", "tSo5qcyL", "WPmfBfKDnKNcJK/cMXTcWRu", "hmkOfNbVCCo6W7hcMSkwWP/dLmke", "WODGW53dLmoIWRhcSri", "sCkrnG", "WRVcIw7dOWdcS1JdHbNcP8oreCkL", "W65UWObngW", "oGTCya", "BJ57sb8zsIGlWP13vCo7W4S", "W65UWObqbG", "mW9MdmoI", "WQlcRsxcU8o4WPVdGvG", "h8oNW7uO", "dmksW5tcHCkWbrGPpSoSD3S5", "WQD6W7K6WR0", "zCoXgCk9ia", "mbPk", "yCoomspdGgOvzmoRW5Glaq", "pcWvhSoJ", "xxLPW74R", "fmo+W6GIaG", "jSoPaSop", "WPmVetu", "BJ0Bh259ew8", "WPxdPatdHqC", "e8kxWOVcT10", "zglcSmocW74", "cg7cNSk6WRO", "W4VdHu8n", "hNxcN8k8WQ8", "WPZdOb3dSG", "fwXCtLe", "mvNcSCoGW5NcM8k4", "x0FcQW", "oa1kCSog", "ACkEEXG4W7ytWOVdGeVdNMiy", "W57dPSoYBmkA", "W4uHW6RdG8ok", "dgHuWOLw", "WOrKWR3cGSkrW5xdRsFdLmoaWPGjpW", "WPqVrvFdN8kSbCk6CvWiWQNcGG", "WQlcPhVdKCkpW5ZcIvfpW7hdV0hdNq", "WP7cJHfuW6bECCoTWO/dH8oqW5ZdTa", "qupcSSk4uG", "gmkRg3DIDmo5WRNcH8k3WQtdR8kjWPa", "W4KbgdNcV8kdna", "WPtdQbZdUW", "AK9EuCoXWRapW4W", "WQVdSftdLW", "W4Pqiq9F", "mtOda8ob", "WRRdLvldNmkm", "W4tdPSoMn8kf"];
  return an = function() {
    return i;
  }, an();
}
async function pB(i) {
}
function oA(i, n, t, e, A) {
  return AA(e - -432, t);
}
function ge(i, n, t, e, A) {
  return AA(e - -712, A);
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return AA(B - -448, a);
  }
  function e(a, s, B, I, c) {
    return AA(I - 341, s);
  }
  const A = i();
  function o(a, s, B, I, c) {
    return AA(s - 374, c);
  }
  function r(a, s, B, I, c) {
    return AA(s - 919, c);
  }
  function g(a, s, B, I, c) {
    return AA(B - 249, c);
  }
  for (; ; )
    try {
      if (parseInt(o(743, 754, 734, 713, "zvdn")) / 1 * (-parseInt(o(663, 671, 707, 676, "G7(G")) / 2) + -parseInt(g(557, 557, 537, 569, "DTt)")) / 3 + parseInt(r(1176, 1215, 1226, 1204, "S3NP")) / 4 * (-parseInt(t("hiG0", -27, -73, -88, -85)) / 5) + -parseInt(t("a%^F", -205, -154, -124, -186)) / 6 + parseInt(g(632, 576, 596, 558, "yTXA")) / 7 * (-parseInt(e(709, "%m5S", 631, 662, 625)) / 8) + parseInt(t("b1RX", -152, -156, -126, -189)) / 9 * (parseInt(t("llE9", -100, -91, -43, -91)) / 10) + -parseInt(t("UpHP", -79, -126, -161, -175)) / 11 * (-parseInt(g(611, 585, 598, 614, "WZs]")) / 12) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(gn, 709242 + -1 * 662657 + -409109 * -1);
const ka = 2500, Sa = 2 * -4969 + 1 * -7033 + 1 * 20471, qI = 2, VI = -2841 + -947 * -3 + 0.5, ZI = {};
function uA(i, n, t, e, A) {
  return AA(i - -804, t);
}
ZI[gA("WWvl", 1183, 1135)] = 1280;
const zI = {};
zI[oA(-70, -74, "W$wd", -96)] = 720;
const XI = {};
XI[gA("yTXA", 1180, 1227)] = 60;
const Ro = {};
Ro[gA("PZwS", 1176, 1197)] = ZI, Ro[gA("koSf", 1257, 1208) + "t"] = zI, Ro[oA(-141, -169, "W$wd", -129) + uA(-441, -483, "94Sg")] = XI;
const $I = {};
$I[ge(-372, -389, -372, -350, "1aBS")] = 1920;
function gA(i, n, t, e, A) {
  return AA(t - 855, i);
}
const As = {};
As[uA(-437, -483, "!0ra")] = 1080;
const vo = {};
vo[oA(-138, -101, "&x[A", -101)] = $I, vo[dA(-400, "b1RX", -380, -371) + "t"] = As, vo[oA(-130, -115, "kOz9", -81) + gA("7Qc7", 1215, 1205)] = 30;
const es = {};
es[oA(-47, -71, "&fxf", -64)] = 1;
const ts = {};
ts[dA(-411, "5Dn3", -405, -424)] = 1;
const os = {};
os[ge(-441, -452, -386, -426, "!0ra")] = 1;
const Fo = {};
Fo[oA(-139, -127, "j!nw", -127)] = es, Fo[uA(-509, -513, "&x[A") + "t"] = ts, Fo[ge(-373, -422, -371, -414, "WWvl") + uA(-521, -479, "0kWy")] = os;
const ns = {};
function gn() {
  const i = ["WQeQyYmV", "WOZdJCoTW57dVq", "W5ldRmkRlmoNEwSDWOhcJCoIWPxdLq", "gSksWPxdN8kX", "W6zAWQ7cGN8", "W7aWW64tsW", "WP3cOWWCWRO", "gKBcRs4Z", "amkBW6Lsna", "W7y5WRWLhSk1ofVcQSoS", "WOVdOmkFB0VdVSk5", "e0hcQZSV", "W6fTerOzW4K5WQin", "WPzOW7PW", "oJhcIW3cRq", "aqhcN8kgW7m", "WReAogBcUW", "cfXM", "W7NcMCkDW5up", "gKf1sSkq", "jN3cRCozj8oaaSk7WPhcRXK", "W7q4W6WcCa", "W5dcJKFdHmoy", "cCkeWPddNCkZ", "W7bwWOhcJW", "b8kmW7Hboq", "prpcN8kr", "WPZcKmkcbq", "DrldP8kCW7i", "WQHMW7K", "W6RcKmkHWP/dMq", "AHVdR8osW64", "eKdcPZ0R", "W517W7u", "lZFcRHxcUG", "W5NdGCk7EKK", "W7uGW4Kitq", "W57cMmksWOZcPSkJuqhdV8o5W6CAWO0", "tqiLf8ktv11QCIO", "hCkqWPldSmk8", "W4apwmkKWQe", "WPdcVSo0FSkx", "W4D0W7tdTa", "W7pdGConWQhcUJuy", "W7RcLceS", "W79zWPNcKmop", "W7nqWQBcJgO", "WPi4WOa6WRddQcDKDCkMW40", "aaeCWQfo", "irqAWQu", "hqeD", "W5hcM0xcHSoU", "W6BcJmkLWP3dGq", "A8odEdy", "W5/cOsWyy09xW5vlWP0KWPu", "WO3cGmoIDxVdQSk6W5NcHG", "m2yTvG7cJJXgjG", "W6JcJcC0cq", "WONdKHBdJ8o2WOngkCkB", "WQjGamkzW6u", "W5FdRmkRkmoPFwSBWRFcQ8oMWRBdHa", "rx3cUGFcOW", "W4FdJSoerKSnW47cP8k/WOy", "sHddTM5+WQGyaLtcPqxcJNW", "W7bAWQBcGNS", "s8kcW6ZcTJm", "WOvVW7PWjq", "ig4LgmkC", "athcNSkaW70", "zID6DY8", "WQZdISoCWPBcLa", "W6ynBNyW", "WPtdNCo3tmow", "pmkjW6Lf", "W5/dNJC", "WOJcQXRdIsy", "AWmrWOuc", "WRhdPCogWPu", "gKhcLHBcVCokW5e", "WQGjW4tdJmoleeDDW6RcIq", "EGSgWOu", "W6dcNcS6cW", "cmkoW5TbnG", "z8kfW6dcHYq", "jMaJ", "phSI", "ytD0Ad4", "f8oqWQ3dLwdcKCkmlCoVwLhcOva", "WRddIN9SvSoBW4ZcNL7cMqdcJq", "W7RcJdW6dG", "W4zRW4j5", "aCoVjuO", "W5RdMmkPBq", "DtVdTCkbEq", "WOxcPWy", "DSodEazW", "WOBcVIOsWRG", "wNhcTXtcOW", "W75jhmkoW4eGfW", "hcZdP1ldSSkRWOVdV8otDKxdKf8", "Amo2CmooiCkPW6X6WR3dNdK6", "mCkpi3S8W5efd8oOW6VdO00", "zs16Et4"];
  return gn = function() {
    return i;
  }, gn();
}
ns[dA(-466, "UpHP", -396, -415)] = 1;
const is = {};
is[uA(-435, -386, "G7(G")] = 1;
const rs = {};
rs[dA(-360, "4Lx4", -388, -387)] = 1;
function AA(i, n) {
  i = i - 278;
  const t = gn();
  let e = t[i];
  if (AA.eJnsts === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    AA.vpNqbE = a, AA.nnHrAx = {}, AA.eJnsts = !0;
  }
  const o = t[-9705 + -1 * 2319 + -4 * -3006], r = i + o, g = AA.nnHrAx[r];
  return g ? e = g : (AA.suSGis === void 0 && (AA.suSGis = !0), e = AA.vpNqbE(e, n), AA.nnHrAx[r] = e), e;
}
const Mo = {};
Mo[uA(-494, -528, "tD77")] = ns, Mo[dA(-333, "G7(G", -415, -382) + "t"] = is, Mo[oA(-64, -44, "hiG0", -76) + ge(-435, -396, -426, -405, "1aBS")] = rs;
const Ot = {};
Ot[dA(-436, "Yaej", -380, -406)] = Ro, Ot[oA(-64, -37, "a%^F", -54) + uA(-496, -495, "9PAw")] = vo, Ot[oA(-172, -173, "UpHP", -154)] = Fo, Ot[uA(-446, -476, "PZwS") + oA(-70, -23, "7Qc7", -66)] = Mo;
const In = Ot;
function dA(i, n, t, e, A) {
  return AA(e - -730, n);
}
const He = {};
He[oA(-112, -157, "kgvF", -139) + dA(-399, "kOz9", -323, -359) + oA(-169, -131, "UpHP", -141)] = ka, He[uA(-427, -406, "47Nn") + dA(-408, "PZwS", -392, -357) + gA("UpHP", 1172, 1178) + dA(-428, "0kWy", -457, -446)] = In[gA("tD77", 1119, 1169)], He[gA("Q*oR", 1181, 1134) + gA("1GzQ", 1235, 1195) + oA(-50, -45, "1aBS", -87) + ge(-329, -362, -391, -351, "Q*oR")] = In[uA(-439, -391, "oNEc") + uA(-434, -478, "lQe3")], He[gA("1GzQ", 1233, 1215) + oA(-85, -21, "o%lb", -53)] = qI, He[dA(-422, "kOy4", -393, -401) + gA("Rd7$", 1201, 1156) + oA(-161, -171, "94Sg", -130) + dA(-399, "1aBS", -464, -414) + gA("Rd7$", 1133, 1173)] = VI, He[dA(-431, "G7(G", -437, -386) + uA(-504, -462, "7Qc7") + "Ms"] = ka;
const _e = {};
_e[ge(-455, -400, -394, -413, "%m5S") + oA(-100, -69, "WZs]", -95) + oA(-110, -60, "llE9", -105)] = Sa, _e[oA(-77, -48, "WWvl", -91) + gA("4Lx4", 1152, 1185) + gA("0kWy", 1135, 1137) + gA("Rd7$", 1133, 1174)] = In[oA(-122, -84, "zvdn", -121)], _e[dA(-316, "1GzQ", -353, -354) + uA(-495, -444, "wbM!") + uA(-452, -486, "94Sg") + uA(-440, -400, "S3NP")] = In[uA(-446, -432, "PZwS") + ge(-334, -372, -435, -384, "wbM!")], _e[dA(-370, "1GzQ", -421, -370) + ge(-384, -402, -470, -425, "kOy4")] = qI, _e[dA(-404, "P96Z", -397, -445) + ge(-348, -346, -334, -357, "Mfyt") + gA("zvdn", 1210, 1159) + gA("NKxO", 1242, 1193) + uA(-450, -452, "hiG0")] = VI, _e[dA(-392, "W$wd", -410, -410) + ge(-412, -348, -405, -395, "%m5S") + "Ms"] = Sa;
const qi = {};
qi[dA(-444, "yTXA", -400, -404)] = He, qi[gA("osMM", 1192, 1180)] = _e;
const yB = qi;
function WA(i, n, t, e, A) {
  return eA(n - 620, i);
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return eA(B - -339, s);
  }
  const e = i();
  function A(a, s, B, I, c) {
    return eA(I - -605, c);
  }
  function o(a, s, B, I, c) {
    return eA(a - 315, c);
  }
  function r(a, s, B, I, c) {
    return eA(c - -26, B);
  }
  function g(a, s, B, I, c) {
    return eA(s - -195, a);
  }
  for (; ; )
    try {
      if (parseInt(o(968, 950, 1007, 958, "6%d3")) / 1 + -parseInt(t(206, "n(i8", 203, 110, 138)) / 2 + parseInt(o(865, 859, 904, 825, "5%kb")) / 3 + parseInt(o(971, 890, 1001, 1021, "T(fR")) / 4 * (-parseInt(r(693, 588, "9!o^", 549, 626)) / 5) + -parseInt(A(127, 23, 116, 44, "Gb&S")) / 6 * (-parseInt(o(965, 902, 933, 897, "X0bA")) / 7) + parseInt(t(212, "a%Bx", 166, 144, 184)) / 8 * (parseInt(g("Yk4T", 467, 415, 437, 526)) / 9) + -parseInt(A(132, 106, -41, 39, "JA6S")) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(sn, -2 * -482596 + -547640 + 373074);
function eA(i, n) {
  i = i - (-1 * -8993 + -6118 + -2382);
  const t = sn();
  let e = t[i];
  if (eA.ZjeOlB === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    eA.LXYgxQ = a, eA.lJtjqv = {}, eA.ZjeOlB = !0;
  }
  const o = t[3437 + -3437 * 1], r = i + o, g = eA.lJtjqv[r];
  return g ? e = g : (eA.ZFsaUo === void 0 && (eA.ZFsaUo = !0), e = eA.LXYgxQ(e, n), eA.lJtjqv[r] = e), e;
}
function kA(i, n, t, e, A) {
  return eA(t - 610, i);
}
function sn() {
  const i = ["mg7dSG", "jSopW4RcM8o7", "WO0WyN1c", "pSk9wSkDWOW", "lmolW5FcIa", "zepcGMZcPq", "WPDXWQjFWOK", "WQ3cHwH6WPa", "pmk4WQyoiq", "oCopW5dcV8oG", "WRNdOSkaW7BdRW", "WRtdULnQqCkrhCo/WPNdQmkEC3u", "wColcqv3", "qXxdHgZdJa", "W57cHuNcSaS", "dGSeqqe", "WRvrWQWtWP4", "ySoFwmoJW6a", "l8oCW4xcKmo6", "dGGf", "W73dQIJdM8kkcrGAWOpcJ0iQW4RcGa", "W4CiW5ldN8kA", "WR55bM9e", "W6bwCa3dIa", "WO90sW", "BmoQWQKzha", "W6mAw8ocgG", "qsr4W5Po", "oKNdPq", "iCkzWPWbaW", "WOTxWR13WRm", "kmkmWPquWQ0", "abuuAqe", "W6jpWOFcVHRdLaznq0i0Fq", "ysbMv8oy", "iexdUCknhW", "lSktWO4", "lCopW5dcV8oU", "iSkZra", "WQHzW5T5WOW", "txDQW4ZcJq", "bGSuxG", "i8kjWPiXWRW", "W4alq8o7oW", "WRBdOSkuW77dUa", "WQ/cMMFdMmkcpCo1tKVdJCoFEa", "WRqpW5pdO1C", "WO1Upg1t", "W5ysW5ldV8kh", "rhdcPSk3W5W", "WRxdS8kDW6pdGG", "CYbIzSon", "WRanW53dVwO", "lmooqCotWP4", "W5a4CryeWRqnbSoXWRvfer0", "WQTVjL1g", "WO1YoKfa", "W6GKW5BdJuW", "xSooaZbM", "jCoAW5dcUmoQ", "WPXyWQbRWQ4", "lZOcW6pcNW", "qLHiW57cUa", "kCk4DSkbWOO", "W4NcP1JcQG", "W6NdJtVcHCoi", "k8oEW4VcJSoh", "j8kDWOCoaW", "WQvzrw0U", "hWxdOJ/dSW", "pSkPWPuloq", "jSoCfmklqW", "WPWEE2vy", "W552uK4t", "W7apxCoEjG", "W5JcIuhcSHS", "iSoeeCkluW", "DSobwmoUW7e", "v2pcVmkbW4C", "WQxcQLtcMSoE", "W7ZdJJ3cM8op", "WQFdS8kGW7tdQq", "jmoTwCo4WQG", "DColW5LMW7/cHCo4bMG4qCkY", "W57cI0FcSbS", "WPBcTZJdHCkj", "WQD4WOmTWPG", "W6FcTmofWQFcV8k+W4XhW7VcKrGw", "WRddJCoscYm", "WQuyW5VdO1e", "vvBcJ8kDW6i", "s8okWPyJdq", "hWhdUtldTa", "bcmCWQpdU8otWO9QWQvGxNZdMmoD", "W43cNeFcRca", "WPO+zwjf", "mCkDWOWLWQK", "WR0CW5ZdQfy", "W5ybW7a9W6XHW4zynZ1wWPFdLW", "WReRW5VdGxhcHfW", "ESkJjdC6", "mwreFmoSW6u3W40", "DmopW5DMW73cGSo2efC9tmkd", "WOTwax5H", "fSktWOataW", "W64pWOSJW4GNy1z8y8khWRO", "gtmPzee", "iuBdV8k4cq", "qHBdL2hdJq", "f1pdOMJdRhG1WRG", "W6/dJtVcH8op", "DCkVWPuibv9F", "WRqlW4ddOfa", "W45CEHFdNq", "ySohwCo9W6q", "hqGbqWC", "eZP4W59pW4tdPa", "i3StWRiu", "WR1mW51NWRC", "WODkWOzZWR8", "aG3dR8oUqq", "WQLgx1O/", "d2lcOCkjW73dOYy", "jKldOSkzfq", "j8kjWOa0eG", "W43cNK3cRaK", "qxfgW7JcUq", "jSoNxSoWWQm", "WO9nWQz3WPi", "W7ZdGJBcHCoE", "WPTPl0bt", "ndGxW47cLa", "WRhdSCktW73dVW", "sWBdL2FdNa", "WPG/B31u", "W6ZcOZWUiW", "jSkEWO8IWRW", "sSolWQu4ha", "WRRcKMb4WPe", "neNdSSk4hW", "l8kNWPiwoq", "WOztWPCwWO8", "mWpdQmoZqq", "W43cSCk7FSoL", "qsfSW5Pp", "W4JcVbe", "W4KcW47dI8kl", "WR7cUhlcGSop", "W6jpWOtcVHxdKx9OqwOitCkK", "bmoDhSkuuG", "WRjlW4zNWP4", "WQpcQw/cQmoE", "W68SW5q", "WRiwW5ZdVfy", "W7pcPqO1ja", "W7nmBry", "vq/dINC", "W67cOJyXmG", "WRZcGwH/WOS", "WPa+zq", "WOTpWQHPWQ8", "nmkiWOespW", "vmkPocua", "W6X2t1K6", "WO1QWO58WO0", "W6JcVbeFeW", "WRL3W4jHWPy", "sJ1U", "WQmyW5VdOvy", "w2dcUSkfW7a", "u3FcUSklW4C", "hcZdRbNdSG", "l2iC", "WOVcPcpdR8kF", "W67cUd0VhW", "wZTm", "W79Jsuug", "xSoAbaP3", "laFdS8o6ua", "WOxcUJpdH8kF", "EuBcMhZcPq", "gWhdUtxdRW", "W4SxW4JdQmkl", "WOTlWRTQWQG", "W65TtLGg", "DCkerCowh0rCW6BdK099W5G", "xWrnWRddGa", "zCkNpZGa", "W7WEqmolcW", "WQTtwx8", "W4fvwfi+", "sCojhWTX", "WPbVW4PSWRm", "W5FdOMlcMSocW5/dLGDQpSkoBq"];
  return sn = function() {
    return i;
  }, sn();
}
function TA(i, n, t, e, A) {
  return eA(A - 338, t);
}
function qA(i, n, t, e, A) {
  return eA(n - 248, e);
}
function VA(i, n, t, e, A) {
  return eA(i - 8, e);
}
class mB {
  #A;
  [kA("S&wj", 1183, 1149) + kA("JA6S", 1304, 1287)] = [];
  [kA("$*si", 1134, 1188) + kA("Gb&S", 1222, 1289) + WA("j0wP", 1134) + "r"];
  [TA(967, 1036, "Mmf5", 1039, 957) + WA("Yk4T", 1241) + "s"] = {};
  constructor(n, t = {}) {
    function e(a, s, B, I, c) {
      return kA(a, s - 496, I - -1064);
    }
    function A(a, s, B, I, c) {
      return TA(a - 286, s - 368, a, I - 233, s - 165);
    }
    this[A("vnbi", 1061, 1111, 1064) + e("T(fR", 152, 212, 215) + o("j0wP", 1354) + "r"] = n, this.#A = yB;
    function o(a, s, B, I, c) {
      return WA(a, s - 220);
    }
    function r(a, s, B, I, c) {
      return TA(a - 151, s - 301, I, I - 51, s - -714);
    }
    function g(a, s, B, I, c) {
      return VA(c - -376, s - 198, B - 30, B);
    }
    this[A("#6s3", 1066, 1153, 1101) + r(166, 247, 232, "2tly") + g(288, 257, "YF0)", 284, 211)](t);
  }
  async [qA(850, 812, 836, "l8OW") + TA(978, 1008, "9!o^", 951, 923) + TA(793, 923, "Mmf5", 956, 884)]() {
    if (!_t())
      return r(956, 1005, 1033, 1012, "DRAL") === o(157, 171, "JA6S", 200, 103), void 0;
    const n = await this[r(1159, 1152, 1197, 1170, "Cfl5") + "st"](this.#A[g(251, 351, 386, "jFbM", 309)]);
    function t(s, B, I, c, E) {
      return TA(s - 470, B - 39, s, c - 430, I - -568);
    }
    const e = await this[r(918, 1014, 966, 964, "lmS#") + "st"](this.#A[g(188, 188, 211, "l8OW", 267)]), A = {};
    function o(s, B, I, c, E) {
      return WA(I, E - -1130);
    }
    A[t("P**k", 384, 399, 314) + g(292, 351, 243, "i8zv", 256)] = n[g(496, 335, 342, "253x", 419) + "ge"], A[t("OnH6", 274, 365, 375) + r(1027, 1092, 1045, 1033, "pVgb")] = e[o(257, 191, "pVgb", 93, 166) + "ge"];
    function r(s, B, I, c, E) {
      return WA(E, B - -143);
    }
    function g(s, B, I, c, E) {
      return WA(c, E - -866);
    }
    const a = A;
    this[r(997, 1007, 961, 1070, "5%kb") + g(354, 412, 337, "YF0)", 412)][g(267, 260, 282, "v!uq", 266)](a);
  }
  async [kA("#6s3", 1149, 1219) + "st"](n) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: g } = n;
    let a = 2794 + 7355 * 1 + -597 * 17;
    function s(p, b, D, k, y) {
      return qA(p - 94, k - -521, D - 62, b);
    }
    function B(p, b, D, k, y) {
      return qA(p - 473, p - -205, D - 487, y);
    }
    let I = r, c;
    function E(p, b, D, k, y) {
      return WA(y, k - -1488);
    }
    let x = this[B(612, 700, 702, 540, "jFbM") + d(704, 645, 643, 681, "Cfl5") + d(753, 749, 828, 778, "n(i8") + "r"][B(727, 709, 724, 786, "l8OW") + B(549, 615, 580, 615, "n(i8") + d(704, 622, 592, 685, "vnbi") + "s"](this[E(-414, -278, -297, -327, "kW5k") + s(207, "D[5b", 280, 271) + "s"], o);
    for (let p = -2635 * 1 + 4888 + -751 * 3; p < r; p++)
      if (B(590, 581, 687, 605, "kW5k") === s(221, "T(fR", 363, 276)) {
        if (a > A * g) {
          if (d(720, 686, 742, 674, "Cfl5") === s(311, "i^LU", 304, 331)) return;
          I = p;
          break;
        }
        const b = await this[d(822, 727, 718, 717, "P**k") + h(1479, 1400, 1469, "X0bA") + B(686, 666, 628, 666, "DRAL") + E(-351, -421, -431, -352, "2tly")](x, t);
        if (b[s(260, "#6s3", 332, 275)] && (E(-339, -223, -314, -277, "JA6S") !== s(223, "YF0)", 392, 313) ? this[B(640, 647, 708, 568, "a%Bx") + s(233, "a%Bx", 392, 330) + s(179, "5%kb", 332, 263) + "r"][B(673, 677, 736, 728, "PrWQ") + E(-327, -183, -290, -233, "pVgb") + B(725, 661, 639, 730, "frF9") + E(-257, -183, -298, -226, "b!vo") + "or"](b[h(1445, 1399, 1312, "hYxO")]) && (s(252, "]tIO", 363, 321) !== E(-331, -242, -380, -301, "eNBM") ? (x = this[h(1394, 1460, 1497, "5L(&") + E(-217, -179, -156, -251, "jFbM") + s(351, "253x", 277, 295) + "r"][h(1281, 1353, 1444, "OnH6") + d(851, 782, 867, 733, "Cfl5") + B(654, 617, 660, 557, "Gb&S") + "s"](this[s(317, "a%Bx", 140, 237) + E(-351, -255, -282, -257, "Gb&S") + "s"], e), p--) : this[h(1283, 1309, 1294, "Gb&S") + h(1336, 1417, 1345, "]tIO") + s(486, "DT!*", 360, 407) + "r"][B(713, 714, 678, 706, "Gb&S") + d(797, 763, 726, 682, "5%kb") + E(-362, -405, -431, -353, "vnbi") + E(-322, -291, -351, -254, "#lNy") + "or"](_0x5d642c[h(1396, 1319, 1259, "P**k")]) && (_0x3b1867 = this[s(290, "n(i8", 373, 354) + h(1277, 1323, 1345, "j0wP") + s(199, "pn1W", 341, 293) + "r"][h(1266, 1337, 1282, "]tIO") + B(562, 616, 634, 558, "D[5b") + s(264, "#lNy", 246, 281) + "s"](this[s(222, "S&wj", 241, 299) + h(1337, 1317, 1412, "a%Bx") + "s"], _0x20d31c), _0x4e92b8--)) : { deviceId: _0x20fd2d } = _0x2dd3ba), b[h(1371, 1286, 1285, "b!vo") + h(1327, 1343, 1247, "YF0)")])
          if (E(-231, -237, -309, -227, "P**k") === d(648, 648, 640, 710, "Gb&S")) ({ deviceId: c } = b);
          else {
            _0x5a75a4(_0x53a6ad);
            const D = {};
            return D[E(-227, -293, -177, -205, "a%Bx")] = _0x4e35dd, D;
          }
        a += b[s(362, "l8OW", 474, 386) + E(-414, -424, -348, -339, "5L(&")] || -7516 * 1 + -3011 + 10527;
      } else _0x22613e = this[d(641, 685, 713, 751, "vnbi") + s(453, "pVgb", 399, 372) + B(539, 508, 472, 478, "YF0)") + "r"][B(578, 584, 530, 598, "TxP5") + h(1442, 1463, 1544, "TxP5") + s(269, "#6s3", 245, 261) + "s"](this[s(469, "2tly", 376, 373) + d(686, 631, 692, 594, "PrWQ") + "s"], _0x1cf171), _0x4d3316--;
    const Q = Math[s(401, "i^LU", 339, 405)](a / (I || 1));
    this[d(536, 624, 568, 625, "Yk4T") + d(703, 788, 844, 694, "DT!*") + "s"] = this[s(457, "OnH6", 347, 410) + s(260, "kW5k", 206, 247) + d(784, 784, 855, 756, "3U97") + "r"][h(1204, 1295, 1267, "S&wj") + E(-293, -203, -213, -262, "hYxO") + h(1326, 1369, 1377, "]tIO") + "s"](this[h(1284, 1366, 1340, "v!uq") + E(-162, -306, -276, -250, "Cfl5") + "s"], {}, c);
    function d(p, b, D, k, y) {
      return TA(p - 2, b - 6, y, k - 104, b - -211);
    }
    const f = {};
    f[h(1265, 1335, 1366, "kDUf") + "ge"] = Q;
    function h(p, b, D, k, y) {
      return WA(k, b - 172);
    }
    return f;
  }
  async [qA(774, 847, 808, "S&wj") + qA(903, 887, 948, "05@Q") + VA(588, 511, 606, "Cfl5") + kA("X0bA", 1196, 1119)](n, t) {
    function e(I, c, E, x, Q) {
      return VA(Q - 852, c - 475, E - 285, c);
    }
    function A(I, c, E, x, Q) {
      return TA(I - 295, c - 308, c, x - 439, Q - -747);
    }
    function o(I, c, E, x, Q) {
      return qA(I - 451, c - -1121, E - 488, I);
    }
    function r(I, c, E, x, Q) {
      return kA(E, c - 337, Q - -1461);
    }
    const g = Date[o("#lNy", -284, -360)](), a = new AbortController(), s = setTimeout(() => {
      function I(x, Q, d, f, h) {
        return o(d, f - 47, d - 476);
      }
      function c(x, Q, d, f, h) {
        return o(d, x - 1839, d - 60);
      }
      function E(x, Q, d, f, h) {
        return o(Q, x - 1225, d - 471);
      }
      if (E(928, "b!vo", 989) === c(1603, 1619, "eNBM")) a[E(845, "6%d3", 809)]();
      else {
        const x = {};
        return x[I(-313, -301, "pn1W", -243) + c(1519, 1540, "2tly")] = this[E(908, "lmS#", 993) + c(1582, 1542, "DT!*")], x[I(-140, -264, "i^LU", -193) + I(-169, -176, "pVgb", -261) + "e"] = !1, x;
      }
    }, t);
    function B(I, c, E, x, Q) {
      return kA(E, c - 426, c - -340);
    }
    try {
      if (A(137, "Gb&S", 65, 245, 148) !== B(758, 827, "Gb&S", 743, 789)) _0x35697a[o("DT!*", -242, -193, -307, -276)]();
      else {
        const { deviceId: I, mediaStream: c } = await this[e(1408, "n(i8", 1411, 1454, 1487) + A(244, "OnH6", 175, 216, 192) + r(-132, -175, "2tly", -145, -166) + "r"][B(877, 872, "9!o^", 968, 895) + A(292, "v!uq", 201, 306, 255) + e(1533, "kW5k", 1443, 1440, 1484) + "m"](n, a[A(237, "hYxO", 286, 356, 272) + "l"]), E = Date[o("$*si", -349, -274, -254, -311)]() - g;
        Qt(c), clearTimeout(s);
        const x = {};
        return x[e(1374, "6%d3", 1509, 1413, 1453) + r(-247, -337, "6%d3", -265, -264)] = E, x[e(1260, "b!vo", 1265, 1272, 1354) + o("kDUf", -341, -324, -304, -260)] = I, x;
      }
    } catch (I) {
      if (B(896, 924, "hYxO") === e(1439, "hYxO", 1490, 1402, 1433)) this[e(1596, "j0wP", 1541, 1476, 1546) + o("kW5k", -340, -409) + "s"] = _0x5c8c44;
      else {
        clearTimeout(s);
        const c = {};
        return c[e(1328, "Gb&S", 1422, 1381, 1400)] = I, c;
      }
    }
  }
  [WA("253x", 1248) + VA(531, 551, 603, "T(fR") + VA(583, 549, 559, "]Wxg")](n) {
    function t(A, o, r, g, a) {
      return VA(r - 526, o - 15, r - 355, a);
    }
    function e(A, o, r, g, a) {
      return VA(o - 82, o - 44, r - 311, r);
    }
    Object[e(757, 671, "Gb&S") + "es"](n)[t(1047, 957, 1034, 1049, "ynhu") + "ch"](([A, o]) => {
      const r = A;
      this.#A[r] && (this.#A[r] = { ...this.#A[r], ...o });
    });
  }
  [TA(829, 885, "jFbM", 994, 898) + WA("T(fR", 1127) + TA(850, 899, "pn1W", 874, 930)](n) {
    function t(A, o, r, g, a) {
      return kA(o, o - 413, A - -575);
    }
    function e(A, o, r, g, a) {
      return kA(g, o - 323, A - -988);
    }
    this[e(120, 42, 143, "eNBM") + t(534, "TxP5") + "s"] = n;
  }
  async [WA("YF0)", 1294) + VA(640, 619, 692, "OnH6") + WA("hYxO", 1218) + VA(659, 655, 582, "D[5b") + TA(838, 874, "pn1W", 957, 908)](n) {
    function t(a, s, B, I, c) {
      return qA(a - 36, I - -101, B - 183, c);
    }
    function e(a, s, B, I, c) {
      return kA(I, s - 407, B - -658);
    }
    if (this[e(526, 467, 564, "frF9") + e(686, 683, 592, "a%Bx")][A("a%Bx", 609, 639, 543) + "h"] === 0) return;
    function A(a, s, B, I, c) {
      return kA(a, s - 500, I - -715);
    }
    const o = this[g(1308, "jFbM", 1320) + t(739, 682, 710, 737, "T(fR")][g(1208, "jFbM", 1262) + "h"] - (-1 * -4283 + 773 * -4 + -1190), r = await pB();
    function g(a, s, B, I, c) {
      return qA(a - 437, B - 462, B - 30, s);
    }
    this[e(608, 579, 624, "Mmf5") + t(820, 838, 868, 787, "a%Bx")][o] = { ...this[t(565, 669, 729, 655, "PrWQ") + t(678, 772, 699, 773, "pVgb")][o], optSetting: r };
  }
  [VA(596, 691, 607, "jFbM") + qA(710, 774, 864, "P**k") + kA("6%d3", 1196, 1257) + WA("i8zv", 1131) + qA(843, 749, 771, "$*si")]() {
    const n = {};
    function t(o, r, g, a, s) {
      return qA(o - 123, g - -597, g - 372, a);
    }
    function e(o, r, g, a, s) {
      return TA(o - 446, r - 308, o, a - 334, g - -1070);
    }
    function A(o, r, g, a, s) {
      return VA(o - -47, r - 287, g - 251, s);
    }
    return n[A(483, 483, 558, 566, "i8zv") + A(581, 678, 565, 622, "DRAL")] = this[e("6%d3", -213, -150, -172) + A(587, 509, 570, 581, "pVgb")], n[t(228, 206, 189, "DRAL") + e("pn1W", -24, -66, -131) + "e"] = !1, n;
  }
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return Y(a - -304, I);
  }
  function e(a, s, B, I, c) {
    return Y(a - -297, B);
  }
  const A = i();
  function o(a, s, B, I, c) {
    return Y(I - 443, B);
  }
  function r(a, s, B, I, c) {
    return Y(c - 538, B);
  }
  function g(a, s, B, I, c) {
    return Y(s - -940, a);
  }
  for (; ; )
    try {
      if (parseInt(g("jroE", -417, -366, -405, -304)) / 1 + -parseInt(t(226, 166, 279, "Gbue", 302)) / 2 * (parseInt(g("fNG7", -409, -485, -351, -447)) / 3) + parseInt(e(237, 215, "F!r[", 237, 198)) / 4 * (parseInt(t(162, 243, 204, "1j]f", 269)) / 5) + -parseInt(t(164, 127, 119, "HSl3", 139)) / 6 * (parseInt(e(149, 187, "GyO@", 232, 95)) / 7) + -parseInt(r(914, 1006, "XlY[", 1102, 1003)) / 8 + -parseInt(g("1$6G", -324, -321, -239, -264)) / 9 + parseInt(o(1110, 994, "jroE", 1028, 1088)) / 10 * (parseInt(o(945, 922, "utxg", 1004, 985)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(cn, 59639 + -3262 * 129 + 67883 * 9);
function Y(i, n) {
  i = i - (-9265 + 9694 * 1);
  const t = cn();
  let e = t[i];
  if (Y.XyHekm === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    Y.XHKrbd = a, Y.IXgHUw = {}, Y.XyHekm = !0;
  }
  const o = t[-1 * -8291 + -7495 + -2 * 398], r = i + o, g = Y.IXgHUw[r];
  return g ? e = g : (Y.rLGYej === void 0 && (Y.rLGYej = !0), e = Y.XHKrbd(e, n), Y.IXgHUw[r] = e), e;
}
function ZA(i, n, t, e, A) {
  return Y(i - 629, e);
}
function Be(i, n, t, e, A) {
  return Y(t - 846, e);
}
function Qe(i, n, t, e, A) {
  return Y(A - 349, e);
}
function SA(i, n, t, e, A) {
  return Y(i - -6, t);
}
function Ft(i, n, t, e, A) {
  return Y(n - -429, t);
}
function cn() {
  const i = ["ySkggmossq", "WPddMLldUq", "WOldVSo9WRFcLW", "W6JdJ0PSua", "W6JdOmofW65u", "dNaWlb8", "W4C7W6mpvq", "lmorWOL9yq", "W6tdOv5gua", "dxCPzSoO", "W5VcVeBcTCkt", "WRRcNX86AK3dK8ketSkY", "wv4wW5ZdNa", "WP3dV0BcJN4", "vaJdJvFcJG", "bCkaW6JcN8ks", "W4FcKgJdSCoi", "iCoxWPPDzG", "WPzsW7DECW", "vXddLulcQG", "cLxdJCk9vW", "W5/cMNldV8ou", "tuZdKq", "WPy+nmkgCq", "C8kcWPnYWQi", "jmoNW4/dIaS", "W44rW6GVsG", "WRqug8oMWO8", "WRCmuum/", "wtWQDva", "W5CdvSkNCW", "W6ddQrO", "WRldUmoQWRFcMa", "W7LtDt8O", "W4pcLNxdV8op", "W5JdGXtcSSoI", "W4ldIq8", "WRHTW6iYW4W", "rJhcImopBW", "AtWCDuC", "ffzIW4ddPa", "W57dHXdcSa", "W4BcUhpcQmo0", "lgOXlWS", "dSoyW44", "kdr3nSkP", "BrOzWPqC", "fmkGW6i", "W7FdUaZdOv0", "WOxdVCoQWQxcIa", "WRfYW7ZcMIq", "W5/dPftcS8kt", "zmkAgmof", "rauPWPZdGh/cM23cGSkV", "tGqhy1i", "WOC6h8k1EW", "WQPCW7/cJdm", "eNCGymo/", "W5pdIHJcTmoK", "hfD0W6BdRa", "CbCb", "zx7dOdij", "WOetfSkXEa", "W4xcPxNcICoI", "iaJdNWGH", "zGKbWOyo", "W6RcJLrSvG", "pSkMrCkcW48", "WQeDk8kfwq", "W5ldIHJcG8oJ", "W43dQW3dNJpcMCoFcSkPW4jBkJ8", "W6P9W4L2sWtdGa", "paLCWOVcS8o0W6WuW6PqW4moWOi", "nZKHWRaPW6nn", "W6ZdI1nArW", "qmoEWRpdISkuWOPVW5JdHJ4", "tmkeemkvxW", "W7zaWPVcQYy", "ACoiyWRcHa", "nCoDFW", "xvWOnZ7dHCkx", "aSo/W4pdJKG", "W6qsrSkWFq", "W6qBbrdcHW", "WQCosK8/", "W79vEdqZ", "tmk8emkita", "W6ZdQrZdQLa", "vHSbWPmP", "W7VdGKzWyW", "pGldLsiL", "WQCwdmoLWO4", "chPBirhdLCkhq8obWQFdJ8op", "c2aYkGW", "BqRdGeFcOq", "W67dP0m", "EqjfzCoE", "W4FdGrZcV8oO", "WR11W6WsW5y", "WPqlDw4O", "WOZcV3y", "oJ3cTd0ZjIBcKam", "WOtdOSoSWP7cKa", "W4jFBHL2", "nd7dJKhcMW", "cfxdH8k/sW", "WPlcVLJcJG", "W6PuDcG", "BmkbcCosqW", "WOOAgSk3FG", "W4ZdKSoX", "BmkKwa", "evfNW4BdQW", "W4ntWPZcTZe", "W41uzdK", "omkWzCkrW4K", "WQnHW7qWW4y", "CqWkWP0A", "nsNdHehcJq", "ALGqW6VdUq", "W4z0BdPZ", "W5VcPx7cGG", "k8k9rmkgW5q", "W5X9WPdcIYy", "W4BcVMNcI8oZ", "WO3cK2tcUCkl", "rXBdIu/cUW", "zH0fWPGC", "vIKx", "WR5vW7vsEq", "fLBcMr/dUmkXWQNcISkIW7BdLMq", "xCk1d8kEvG", "W53cSgpcS8kr", "W5lcTN8", "xay0WO7cMa", "reddHW", "W5yEvmk8Cq", "D8oRWObavmkkzq", "m8ofs8kefq1bW7VcLSo9WP7cHW", "mmocWRPDyq", "zXywWOm", "W5hcGWBcUc59kGTfW4ipfCo4", "WOChb8kIDW", "W4rBWO3cSdW", "FCkcc8kusG", "ywVdQG", "fLv8W4RdUG", "euNdNCk9xa", "F23dObaz", "W6hdHre", "qKRdMSkPpW", "W63dOHZdUrG", "vGhdGuhcUq", "W5pcVCkUW6hdI8kHB3XtsaWi", "W6hdGXpdQ0S", "W7uDgbZcLW", "W6hdVJddU10", "aCo0W4NdJG", "ENfTW7yx", "WR4njgGYzhtdJweJ", "mSk6u8kxW4K", "tqRdHvRdRW", "W4bjBZ10", "W65yFIGZ", "W7ldPrhdQfC", "W6G7W7eMqW", "cSoZW4xdIbW", "hwqTlrS", "W5JdGYpdO8oqW7ZdMmkpWQWNW6Cm", "WO0kyLG4", "fmkhW7i", "ehm4FmoS", "tCkeha", "Ahqa", "BhGxW7xdRG", "WOtdK0xdQx4", "W6xdMLq", "WOzrW6dcHtq", "WPylgSk+Cq", "W5lcPv4", "WRXqW75wCW", "W5dcJ2BcGSo4", "WReegCoGWPW", "wZr1CLFcGCowC8onW5VdQ8knW7e", "lmohvq", "u1hdKCkXoW", "hfT/", "BSogrZOt", "hmo4W47dJGa", "CSoztHO", "FvefW4FdUq", "WR7cJ2dcGxK", "fL3cNhFcJCoXWQ3cQ8kw", "kctdMfVcJa", "W5xdJ8oMW7TU", "mr/dLWyJ", "W4hcUhhcJSo4", "W4JcRupcS8ki", "WQf0W6C0W4O", "W4epw8k5DW", "rGRcQq", "WQ0Kmr/dNq", "aCkfW6FcGCks", "WRX/A1pdJNhdH8oFW5NdK2HTpG", "WOnoe8oMkSopWQFdM8kAWRPdW7O", "W70JW7yova", "W6Puzq", "WQTbW7aYW40", "usBcOmowFa", "WOldMuhdThW", "WPxcRhRcNw8", "WR/cN3BcTCkh", "W7XoAdyI", "EY5HlSoS", "q0tdHCk4la", "W4O2W6S4uW", "CSohtbWp", "W7SJoG7cKG", "t2SRn08", "WQjBW6hcUJu", "Bsj5iCo9", "W65yyJuR", "W4jzzs50", "WOtcL0ZdPmkYWQ/dNuTjW7yssCo5", "gCkXvSkkW5G", "trzvomol", "W4zgWOW", "fwiBzSoT"];
  return cn = function() {
    return i;
  }, cn();
}
class wB {
  [ZA(1164, 1211, 1067, "ye]v") + ZA(1154, 1056, 1090, "hK^4") + Be(1255, 1330, 1298, "GyO@")](n) {
    const t = ji(n);
    function e(s, B, I, c, E) {
      return ZA(s - -169, B - 88, I - 427, I);
    }
    function A(s, B, I, c, E) {
      return ZA(I - -632, B - 429, I - 205, c);
    }
    const o = t?.[e(927, 943, "qoq$") + e(929, 884, "TGEj") + "s"]();
    function r(s, B, I, c, E) {
      return Be(s - 247, B - 83, B - -390, I);
    }
    function g(s, B, I, c, E) {
      return ZA(I - -1350, B - 462, I - 228, E);
    }
    if (!o?.[e(940, 921, "kq(d") + "t"] || !o?.[a(404, 462, 454, 442, "S(D$")] || !o?.[a(388, 489, 404, 375, "R3KZ") + g(-234, -330, -228, -325, "utxg")])
      if (A(512, 497, 455, "1j]f") !== e(902, 852, "Mjf4")) _0x457ad6[e(966, 896, "S(D$")](), _0x34e7fc(_0xe68c72), _0x2c8d58[g(-100, -205, -120, -196, "ptlG") + "e"]();
      else throw new w(e(1018, 986, "n7#)") + a(533, 419, 529, 610, "R3KZ") + A(367, 583, 471, "AFLq") + r(1078, 1063, "C7)x") + A(675, 716, 631, "oZ*w") + a(334, 402, 416, 351, "PLb7"));
    function a(s, B, I, c, E) {
      return Be(s - 90, B - 87, I - -928, E);
    }
    if (t)
      if (g(-260, -184, -267, -355, "pcu4") === r(1100, 1074, "IOu$")) this[a(469, 264, 369, 444, "1$6G") + g(40, -146, -72, -17, "g1%4") + "eo"](_0x378b38, _0x4ee075);
      else return o[g(-150, -192, -203, -114, "utxg") + g(-277, -168, -281, -375, "HSl3")];
  }
  [Ft(-32, 31, "TdOT") + SA(541, 441, "kq(d") + SA(617, 602, "Mjf4") + SA(598, 510, "utxg")]() {
    const n = document[r(1264, 1295, 1426, 1362, "jroE") + r(1595, 1579, 1518, 1490, "n7#)") + r(1339, 1489, 1372, 1442, "VqCV")](o(615, 612, 754, 708, "uX^G"));
    function t(g, a, s, B, I) {
      return SA(g - -694, a - 154, B);
    }
    n[o(757, 758, 764, 853, "JSj*") + e(-154, -163, "ZdGi", -112, -57)] = !0, n[r(1443, 1427, 1287, 1344, "fNG7")] = !0, n[t(-105, -60, -88, "HSl3") + A(628, "vv%S", 526) + "e"] = !0;
    function e(g, a, s, B, I) {
      return Ft(g - 446, I - -149, s);
    }
    n[A(358, "%kzZ", 404)][o(793, 683, 644, 754, "3kJj") + r(1312, 1347, 1468, 1381, "pcu4")] = e(-99, -66, "GyO@", -140, -145) + e(-8, 46, "S(D$", 14, 41);
    function A(g, a, s, B, I) {
      return ZA(s - -742, a - 435, s - 447, a);
    }
    function o(g, a, s, B, I) {
      return SA(B - 284, a - 476, I);
    }
    n[e(-100, 27, "C7)x", -19, 0)][r(1441, 1544, 1343, 1434, "uX^G") + "ty"] = "0", n[r(1505, 1393, 1426, 1435, "Cbu7")][t(-222, -248, -320, "VqCV") + r(1337, 1273, 1190, 1274, "ptlG") + e(-105, -98, "qoq$", -123, -9)] = A(445, "%kzZ", 401), n[o(984, 800, 992, 883, "VqCV")][e(-83, -22, "pcu4", 66, -37)] = t(-196, -261, -141, "TdOT");
    function r(g, a, s, B, I) {
      return Qe(g - 303, a - 92, s - 148, I, B - 494);
    }
    return n[A(453, "Cbu7", 479)][o(1032, 919, 833, 920, "2Duj") + "t"] = A(458, "v8co", 359), n;
  }
  async [SA(476, 411, "qoq$") + SA(537, 634, "C7)x") + Qe(831, 845, 848, "1$6G", 811) + Be(1367, 1450, 1374, "C7)x")](n, t, e) {
    return new Promise((A, o) => {
      function r(I, c, E, x, Q) {
        return Y(I - -186, Q);
      }
      function g(I, c, E, x, Q) {
        return Y(x - -913, c);
      }
      function a(I, c, E, x, Q) {
        return Y(E - 760, x);
      }
      function s(I, c, E, x, Q) {
        return Y(I - -849, E);
      }
      function B(I, c, E, x, Q) {
        return Y(Q - 715, c);
      }
      if (s(-368, -347, "1j]f") === s(-216, -186, "XlY[")) {
        const I = () => {
          function x(h, p, b, D, k) {
            return s(b - 246, p - 133, h);
          }
          function Q(h, p, b, D, k) {
            return B(h - 217, D, b - 51, D - 193, k - -835);
          }
          function d(h, p, b, D, k) {
            return B(h - 234, p, b - 320, D - 351, h - -365);
          }
          function f(h, p, b, D, k) {
            return B(h - 427, h, b - 57, D - 212, k - -214);
          }
          if (d(834, "JSj*", 737, 860) === x("1$6G", 1, -113)) this[Q(334, 330, 395, "ye]v", 335) + d(882, "Gbue", 947, 976) + "eo"](n, t);
          else return _0xdb0172 instanceof _0x524864 && _0x1d7726[f("1$6G", 995, 841, 863, 935)] === Q(344, 549, 380, "g1%4", 442) + f("TdOT", 988, 1062, 1159, 1054) + f("3kJj", 1011, 1044, 1130, 1049) + Q(462, 299, 308, "S(D$", 350);
        }, c = {};
        c[B(1348, "wbfr", 1304, 1341, 1297)] = !0, e?.[g(-525, "HZs2", -439, -417) + B(1153, "Mjf4", 1235, 1116, 1210) + B(1229, "(PjM", 1244, 1304, 1212) + "r"](g(-301, "AFLq", -302, -354), I, c), (async () => {
          function x(p, b, D, k, y) {
            return B(p - 495, y, D - 16, k - 333, k - 179);
          }
          function Q(p, b, D, k, y) {
            return a(p - 334, b - 354, y - -284, D);
          }
          function d(p, b, D, k, y) {
            return a(p - 294, b - 316, p - 57, y);
          }
          function f(p, b, D, k, y) {
            return s(k - 1291, b - 497, D);
          }
          function h(p, b, D, k, y) {
            return r(p - 959, b - 360, D - 326, k - 192, D);
          }
          if (x(1321, 1414, 1456, 1386, "g1%4") !== f(1052, 1092, "n7#)", 1040)) _0x1b801d[Q(952, 896, "IlS@", 1036, 959) + f(894, 935, "1$6G", 871)](_0xf76edd);
          else try {
            if (x(1439, 1477, 1537, 1478, "oZ*w") !== h(1340, 1418, "XlY[", 1410, 1303)) await n[x(1528, 1490, 1536, 1516, "F!r[")](), e?.[Q(973, 1038, "IlS@", 999, 933) + h(1297, 1265, "TGEj", 1275, 1209) + d(1264, 1157, 1376, 1290, "ZdGi") + x(1411, 1467, 1391, 1394, "VqCV")](f(1035, 1017, "VqCV", 998, 1033), I), A();
            else {
              const p = _0xbce970[h(1361, 1437, "IlS@", 1407, 1325) + d(1265, 1228, 1182, 1319, "ye]v") + h(1336, 1410, "HSl3", 1359, 1442)](f(1059, 916, "TdOT", 957, 976));
              return p[x(1525, 1457, 1452, 1520, "R3KZ") + f(950, 927, "hK^4", 1014, 1025)] = !0, p[d(1357, 1347, 1403, 1454, "PLb7")] = !0, p[h(1356, 1466, "XlY[", 1359, 1355) + d(1304, 1206, 1285, 1379, "jroE") + "e"] = !0, p[h(1379, 1471, "IOu$", 1390, 1306)][f(981, 1157, "2Duj", 1079, 971) + x(1388, 1468, 1510, 1473, "GyO@")] = f(1070, 985, "VqCV", 1056, 1080) + d(1382, 1456, 1318, 1460, "TGEj"), p[d(1327, 1247, 1348, 1325, "1j]f")][f(1080, 1018, "wbfr", 1051, 1038) + "ty"] = "0", p[x(1571, 1551, 1634, 1534, "jroE")][f(876, 870, "%kzZ", 898, 862) + Q(1110, 998, "kq(d", 996, 1025) + x(1450, 1286, 1447, 1397, "mlz!")] = h(1280, 1263, "HZs2", 1288, 1316), p[f(1022, 1036, "C7)x", 1020, 1086)][x(1426, 1520, 1571, 1481, "mlz!")] = Q(1190, 1185, "PLb7", 1053, 1119), p[Q(968, 880, "kq(d", 1006, 917)][d(1319, 1323, 1221, 1291, "ye]v") + "t"] = d(1394, 1458, 1293, 1327, "wbfr"), p;
            }
          } catch (p) {
            if (f(1098, 1099, "qoq$", 1071) !== h(1289, 1398, "S(D$", 1243)) {
              const b = { ..._0x423f0a }, D = b, k = { ...typeof D[f(956, 1020, "TdOT", 957)] == x(1284, 1283, 1367, 1333, "1j]f") + "t" ? D[h(1363, 1423, "hK^4", 1249)] : {}, ..._0x2b88c1 }, y = k;
              if (_0x2448ff) {
                const O = {};
                O[Q(1193, 1142, "IOu$", 1002, 1089)] = _0x426cf8, y[Q(1040, 1034, "JSj*", 1187, 1124) + h(1261, 1328, "qoq$", 1155)] = O;
              }
              return D[x(1574, 1422, 1528, 1535, "PLb7")] = y, D;
            } else e?.[h(1223, 1333, "ji(u", 1275) + x(1495, 1452, 1577, 1468, "%kzZ") + Q(1022, 964, "TGEj", 955, 955) + f(910, 802, "fNG7", 887)](d(1432, 1374, 1396, 1344, "HZs2"), I), Qt(t), o(p);
          }
        })();
      } else {
        const I = _0x37b0b6(_0x3cb93d), c = I?.[s(-237, -239, "c[As") + a(1238, 1252, 1331, "ye]v") + "s"]();
        if (!c?.[g(-227, "1$6G", -320, -257) + "t"] || !c?.[g(-354, "AFLq", -347, -332)] || !c?.[B(1269, "1j]f", 1344, 1285, 1235) + g(-426, "2Duj", -312, -387)]) throw new _0x455e09(s(-279, -226, "c[As") + a(1126, 1163, 1198, "IOu$") + r(368, 354, 283, 390, "jroE") + r(353, 246, 288, 466, "GyO@") + a(1224, 1173, 1204, "hK^4") + a(1318, 1312, 1396, "HSl3"));
        return I ? c[g(-350, "Cbu7", -459, -384) + B(1238, "kq(d", 1230, 1335, 1257)] : void 0;
      }
    });
  }
  async [ZA(1118, 1011, 1117, "wL!x") + Be(1481, 1452, 1373, "nC#k") + ZA(1061, 1141, 1150, "ZdGi") + "m"](n, t) {
    const e = this[o(-103, "HZs2", -280, -177) + B(1203, "HZs2", 1160) + o(-163, "fNG7", -164, -111) + I(-449, "Cbu7", -367)](), A = await navigator[B(1310, "ji(u", 1277) + I(-144, "TdOT", -225) + "es"][I(-236, "XlY[", -330) + B(1202, "g1%4", 1124) + "ia"](n);
    function o(c, E, x, Q, d) {
      return Qe(c - 20, E - 390, x - 91, E, Q - -1081);
    }
    const r = this[o(-15, "Cbu7", -29, -81) + I(-107, "ZdGi", -192) + s("Gbue", 811, 893, 882)](A);
    e[o(-410, "%kzZ", -351, -297) + s("AFLq", 916, 763, 804)] = A;
    function g(c, E, x, Q, d) {
      return Qe(c - 35, E - 451, x - 232, x, c - -803);
    }
    try {
      B(1303, "GjkQ", 1198, 1092, 1310) === o(-162, "ye]v", -152, -88, -93) ? (_0x500deb?.[B(1208, "jroE", 1192, 1267, 1120) + g(146, 90, "uX^G", 230, 99) + s("c[As", 755, 669, 697, 710) + B(1242, "1j]f", 1180, 1289, 1229)](o(-198, "n7#)", -207, -124, -188), _0x3c00c0), _0x50f3cd(_0xd0c860), _0xc334d0(_0x40a1a3)) : await this[I(-111, "jroE", -207, -283, -241) + s("F!r[", 866, 760, 856, 806) + I(-295, "1$6G", -380, -404, -291) + o(-138, "kq(d", -125, -80, -169)](e, A, t);
    } catch (c) {
      if (s("wbfr", 823, 834, 834) !== I(-443, "uX^G", -351)) return _0x5f2e3f[g(184, 134, "Gbue") + g(112, 219, "XlY[")];
      w[o(1, "n7#)", -22, -105) + s("1j]f", 643, 788, 707)](c);
    }
    const a = {};
    function s(c, E, x, Q, d) {
      return Be(c - 183, E - 40, Q - -592, c);
    }
    function B(c, E, x, Q, d) {
      return Qe(c - 374, E - 450, x - 88, E, x - 298);
    }
    function I(c, E, x, Q, d) {
      return ZA(x - -1471, E - 284, x - 55, E);
    }
    return a[g(17, -37, "v8co") + B(1292, "Mjf4", 1300) + "m"] = A, a[g(114, 167, "F!r[") + I(-301, "ptlG", -249)] = r, a;
  }
  [SA(567, 565, "vv%S") + Qe(864, 1037, 1053, "ji(u", 969) + "eo"](n, t) {
    function e(o, r, g, a, s) {
      return Ft(o - 342, g - -319, s);
    }
    function A(o, r, g, a, s) {
      return Ft(o - 16, a - -367, o);
    }
    n[A("ji(u", -334, -200, -232)](), Qt(t), n[e(-390, -207, -298, -318, "ji(u") + "e"]();
  }
  [SA(597, 617, "oZ*w") + SA(505, 568, "(PjM") + SA(583, 582, "%kzZ") + SA(502, 560, "TdOT") + "or"](n) {
    function t(o, r, g, a, s) {
      return Qe(o - 211, r - 210, g - 498, g, o - -1277);
    }
    function e(o, r, g, a, s) {
      return ZA(r - -1575, r - 369, g - 183, g);
    }
    function A(o, r, g, a, s) {
      return SA(r - 578, r - 400, a);
    }
    return n instanceof DOMException && n[e(-390, -447, "oZ*w")] === e(-254, -300, "AFLq") + e(-282, -360, "(PjM") + A(984, 1094, 1202, "vv%S") + t(-391, -492, "TGEj");
  }
  [SA(503, 391, "uX^G") + Qe(1103, 1097, 998, "qFAk", 994) + ZA(1189, 1157, 1279, "R3KZ") + "s"](n = {}, t = {}, e) {
    function A(E, x, Q, d, f) {
      return Be(E - 85, x - 416, d - -605, Q);
    }
    function o(E, x, Q, d, f) {
      return Qe(E - 99, x - 318, Q - 117, E, d - 108);
    }
    function r(E, x, Q, d, f) {
      return Ft(E - 148, d - 996, Q);
    }
    function g(E, x, Q, d, f) {
      return Be(E - 233, x - 184, E - -1501, f);
    }
    const a = { ...n };
    function s(E, x, Q, d, f) {
      return Be(E - 312, x - 24, d - -11, E);
    }
    const B = a, I = { ...typeof B[g(-1, -33, -26, -24, "VqCV")] == g(-206, -270, -165, -189, "c[As") + "t" ? B[g(-45, -57, -50, -124, "NcVm")] : {}, ...t }, c = I;
    if (e) {
      if (s("ye]v", 1374, 1293, 1296) === r(1227, 1257, "mlz!", 1192)) throw new _0x3e7141(s("R3KZ", 1276, 1383, 1271) + o("NcVm", 1054, 1008, 1051) + r(1062, 1049, "kq(d", 1111) + A(848, 890, "qoq$", 865) + o("qoq$", 903, 868, 916) + s("2Duj", 1543, 1576, 1490));
      {
        const E = {};
        E[r(1188, 1167, "hK^4", 1198)] = e, c[o("GyO@", 950, 994, 962) + g(-218, -147, -197, -212, "AFLq")] = E;
      }
    }
    return B[o("kq(d", 1053, 1e3, 1014)] = c, B;
  }
}
const Wo = {};
Wo.width = 1920, Wo.height = 1080, Wo.facingMode = Vt.FRONT;
const DB = Wo;
class as {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = DB, minCameraShorterSide: t = BC } = {}) {
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
    if (this.#t) return ji(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Qt(t);
  }
  async open(n = {}) {
    ya() && At() && await Ui(3839 + -2117 * -1 + -5506), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get next device");
    const n = await $n(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + 1] ?? n[3 * 750 + -4595 + 2345]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new w("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (Qt(this.#t), this.#t = null);
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new w("Video width is undefined");
    if (!n.height) throw new w("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings();
    return (await jI()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Vt.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Fn())
      return (await $n()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await $n();
    for (const t of n) {
      ya() && At() && await Ui(1029 + 1 * -3261 + 2682 * 1);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const o = {};
        o.video = A;
        const r = await navigator.mediaDevices.getUserMedia(o), g = ji(r);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), s = { ...a };
        s.deviceName = g.label;
        const B = {};
        B.cameraProperties = s;
        const I = B;
        this.#e.push(I), Qt(r);
      } catch (e) {
        e instanceof Error && w.logError(e);
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
      throw this.close(), new w("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(n?.width, n?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new w("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
class bB {
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
    this.#A || (this.#A = !0, await as.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), MC() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !At() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new w("Video track must be initialized to take photo");
    const n = this.cameraHandler.videoTrack?.getSettings();
    if (!n?.width) throw new w("Cant take photo - video width is undefined");
    if (!n?.height) throw new w("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new w("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -1 * -445 + 7387 + -7832, -4652 + -259 * 11 + -1 * -7501), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), RC() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !At() && await this.cameraEvaluator.setMostRecentCameraName(t), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !At() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new w("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class kB {
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
function Cn() {
  var i = ["W79zi8ofW6u", "vNJcMCoyW6W", "ncWaWPxcVq", "tSoLiILb", "f0Lw", "WP3cH8k2", "W6LSW4xdPdu", "obZdRCk3mq", "BSk8WPRdMSkj", "W7FcRCoiWOa9", "wxRdMfxdVW", "WR/dP8kFemos", "rHzAW7xcLa", "W7JcQ8oOWQvA", "W40zWQZdTmkQiCkUtSk+weFcQJW", "W44kWOrZlG", "WQFdI2S/W59gWQtcLW", "rb1kW6xcQW", "fufkW6pcPW", "uxBcGbdcOW", "W71okCobW5W", "Aaq9rf4", "iIOzWOxcVq", "W53cJ8kzWP8W", "z8kWvwTI", "u8oIWONcOMm", "defEW7ZcOW", "buJdM8ouW64", "iaOBWQVcTG", "W57cTmo8", "W4JdS8ov", "vCo2CCkZWPa", "gSo5WRrQmq", "u3pdIf/dRa", "WQNdOmkdi8oT", "WRZdVCkEimoj", "sHzhW43cRq", "j0bzcCo8", "h8kMCNekW6RdLsNdKCoYkYW", "lmkEW6qoWQW", "lHDRW5ZcSa", "W7tcLfqTW5W", "bSkTWOiF", "gN7dLfxcNa", "iIqkWPNcLW", "t8oHWOJcHh8", "tmo7WONcTgq", "tSkTWOLTgCoWy08", "CHaDA8kTW5m3WPZcQq/cMW", "WQJdUCknpCoE", "WQGFpW", "jGSlWQxcPq", "WOZdOSkjpmkj", "z8k2WPK", "F33cK8obW7G", "rSo2kIvw", "drTXW4/cTW", "EvVdMd5C", "fY3dN0ZdGSo4W6i9WOxcNCo7wq", "z8k7Amk2WOO", "cxNdKG", "rgtdKeaJjmktfuNcICkk", "W7RcNeG6W4q", "lmkTWO8yW50", "yCoFWQbCW6BcR3VdVCo7i8kVaa", "Dqm7xMm", "W4RcUu0sW6K", "WQZdRCkqWO91", "t8ozWP7cVLq", "Fmk7y8kGWPC", "xxNcN8oyW7i", "emkiWOuiW5W", "gmoRWO4", "c0Ph", "W7fopmoAW6u", "uCoYWQeAW5/dRKtcGW", "W4yKW5WWuW", "WPZcGmkTg8kK", "W5ddKmoeWQxdGCodWORcPGbQsg0i", "WOtdTCkGW7X5W4e/ySonW6BdPmk5Fa", "r2JdKKaPzSo5dwtcN8kooX0", "hCkhW7uiWQO", "qgBcNWZcKG", "W47dVComnXC", "DJTOlmk+", "pCkpW7GpWRm", "WPRdRhm", "WPFcPCkqzuLCW5uMvSo+ESozFa", "qSk4u8kaWRu", "DSoWWO5MWRe", "jSk1W48qW6X2zMyJWRpcOSo1W7e", "W4TaWOm", "W6RdGXz8WRC", "W4GkWQLSgG", "WQRdOSkXWQPn", "W6TZg8oTW77cTdPEW7JcU8oSW54", "DSoTWPHx", "W5ZdKCo1qCohxCoOlmoIW4hcTG", "WPSCWO8IW7PyW4/cTW", "zCk4sq", "fmkHWP4DW4C", "gsBcJG", "W4viWPibW7e", "nahdT8kanW", "i1DipmoH", "WO3cJSkyW6JcKa", "r3BcGrO", "WPdcICkEW7lcRq", "ErqIwg8", "W4yKWRvLla", "W5PoimkTCa", "ugDk", "vCktWOO4W43dOeq", "t8k9swXM", "iHWCWQpcVa", "W6SgWRn/hq", "rgvxWQ/dQG", "cKZdJa", "vCobE8kOWPS", "W75YW5FdItK"];
  return Cn = function() {
    return i;
  }, Cn();
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return rA(s - -688, B);
  }
  function e(a, s, B, I, c) {
    return rA(c - 878, s);
  }
  function A(a, s, B, I, c) {
    return rA(B - 421, I);
  }
  var o = i();
  function r(a, s, B, I, c) {
    return rA(s - 146, I);
  }
  for (; ; )
    try {
      var g = -parseInt(e(1182, "s3Y0", 1160, 1148, 1123)) / 1 * (-parseInt(A(684, 767, 722, "zcO^", 688)) / 2) + parseInt(e(1076, "nf)m", 1059, 1126, 1108)) / 3 + parseInt(A(742, 787, 749, "s3Y0", 772)) / 4 * (parseInt(t(-433, -460, "AC1k", -504, -513)) / 5) + parseInt(A(720, 777, 738, "Xq&y", 768)) / 6 * (-parseInt(t(-339, -388, "COHs", -428, -425)) / 7) + parseInt(t(-328, -357, "l^]g", -366, -360)) / 8 + parseInt(r(362, 369, 311, "P%kN", 332)) / 9 + -parseInt(t(-382, -355, "BGE%", -318, -389)) / 10;
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Cn, -1 * 722271 + 60831 * -3 + 1587112);
function LA(i, n, t, e, A) {
  return rA(i - 460, t);
}
function Ee(i, n, t, e, A) {
  return rA(e - -561, n);
}
function fA(i, n, t, e, A) {
  return rA(e - -165, t);
}
function xe(i, n, t, e, A) {
  return rA(t - 113, e);
}
function rA(i, n) {
  i = i - 221;
  var t = Cn(), e = t[i];
  if (rA.ayxWTQ === void 0) {
    var A = function(s) {
      for (var B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", c = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        c += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(c);
    }, o = function(s, B) {
      var I = [], c = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    rA.qcocFF = o, rA.rPIXCi = {}, rA.ayxWTQ = !0;
  }
  var r = t[0], g = i + r, a = rA.rPIXCi[g];
  return a ? e = a : (rA.gRMCuX === void 0 && (rA.gRMCuX = !0), e = rA.qcocFF(e, n), rA.rPIXCi[g] = e), e;
}
function Oe(i, n, t, e, A) {
  return rA(n - -145, e);
}
class SB {
  [LA(723, 738, "&)2U") + xe(365, 446, 411, "QAx]") + xe(325, 335, 357, "1VVu")] = 2327 * 4 + -2089 + -7219;
  [Ee(-339, "xLZ#", -305, -301) + xe(373, 417, 362, "1VVu") + LA(790, 735, "nf)m") + fA(38, 66, "irQY", 59)];
  [xe(362, 379, 393, "lKlC") + Oe(133, 103, 45, "XcC&") + "p"] = void 0;
  constructor() {
    function n(e, A, o, r, g) {
      return Oe(e - 258, o - 408, o - 31, e);
    }
    function t(e, A, o, r, g) {
      return fA(e - 435, A - 119, A, g - 743);
    }
    this[n("l^]g", 480, 501) + n("&)2U", 590, 549) + t(904, "Q!Ee", 824, 813, 852) + n("MDPR", 501, 520)] = Date[t(918, "9)sc", 908, 854, 881)]();
  }
  [Oe(198, 170, 129, "be!C") + fA(136, 81, "R]tH", 132) + fA(68, 81, "BGE%", 69)]() {
    function n(g, a, s, B, I) {
      return Ee(g - 354, I, s - 180, g - 554);
    }
    function t(g, a, s, B, I) {
      return xe(g - 364, a - 46, B - 107, s);
    }
    function e(g, a, s, B, I) {
      return Ee(g - 34, I, s - 121, B - -220);
    }
    this[n(264, 269, 299, 320, "MDPR") + n(229, 174, 218, 198, "xLZ#") + A(-6, 72, 71, 54, "mtfy")]++;
    function A(g, a, s, B, I) {
      return Ee(g - 39, I, s - 33, B - 302);
    }
    function o(g, a, s, B, I) {
      return fA(g - 110, a - 331, a, B - -61);
    }
    if (this[e(-547, -502, -471, -488, "vT(M") + n(252, 249, 309, 200, "WC!N") + o(64, "CAhk", 148, 113)] === 1237 * 5 + 6574 + -12758)
      if (e(-507, -486, -516, -471, "S4Xf") !== t(495, 518, ")Q1N", 496)) this[t(497, 485, "mtfy", 516) + t(518, 563, "vT(M", 529) + "p"] = Date[t(468, 500, "8[hM", 503)]() - this[e(-496, -430, -454, -463, "Q!Ee") + n(300, 332, 345, 254, "0RkA") + n(233, 208, 253, 259, "l^]g") + t(456, 482, "lKlC", 470)];
      else {
        var r = {};
        return r[e(-422, -454, -431, -459, "XV67") + A(5, -62, 32, -7, "WC!N") + "e"] = !1, r;
      }
  }
  [xe(353, 446, 400, "TZSW") + xe(396, 333, 369, "@UsO") + LA(768, 757, "@UsO") + fA(142, 218, "0RkA", 158) + "up"]() {
    function n(r, g, a, s, B) {
      return LA(B - -230, g - 461, r);
    }
    if (!_t())
      if (o("wMfO", 403, 428, 436) === o("be!C", 512, 572, 512)) this[A(229, "Q!Ee") + e("v^lR", 1157) + A(183, "V@&C") + A(143, "RQ]4")] = _0x449965[o("$e6m", 459, 440, 499)]();
      else return;
    this[n("EJLl", 537, 541, 425, 483) + t(736, 710, 794, "R]tH", 753) + n("MDPR", 550, 611, 509, 556)] = 3023 + -3271 * -2 + -9565 * 1;
    function t(r, g, a, s, B) {
      return Oe(r - 92, B - 651, a - 2, s);
    }
    function e(r, g, a, s, B) {
      return fA(r - 428, g - 416, r, g - 985);
    }
    this[A(199, "TZSW") + n("0RkA", 434, 487, 534, 484) + "p"] = void 0;
    function A(r, g, a, s, B) {
      return LA(r - -549, g - 385, g);
    }
    function o(r, g, a, s, B) {
      return LA(s - -267, g - 181, r);
    }
    window[o("MDPR", 429, 438, 472) + n("R]tH", 529, 506, 519, 505) + n("s3Y0", 598, 555, 519, 554) + n("P%kN", 417, 464, 505, 459)](o("RQ]4", 512, 491, 470) + "wn", this[o("Xq&y", 510, 505, 531) + t(800, 855, 785, "QAx]", 827) + n("COHs", 609, 543, 594, 555)][t(697, 701, 800, "V@&C", 745)](this));
  }
  [fA(90, 142, "i@NM", 100) + fA(108, 172, "EJLl", 162) + fA(103, 159, "@UsO", 143) + fA(116, 137, "RQ]4", 81) + "up"]() {
    if (!_t())
      return t("1t^c", -234) !== A(370, "GZf2", 432, 445, 411) ? this[t("Q)KU", -167) + A(525, "Xq&y", 469, 460, 479) + "p"] : void 0;
    function n(r, g, a, s, B) {
      return Ee(r - 122, g, a - 47, s - 938);
    }
    function t(r, g, a, s, B) {
      return fA(r - 15, g - 321, r, g - -331);
    }
    function e(r, g, a, s, B) {
      return LA(a - -336, g - 321, B);
    }
    function A(r, g, a, s, B) {
      return fA(r - 440, g - 482, g, B - 310);
    }
    function o(r, g, a, s, B) {
      return Ee(r - 107, g, a - 377, r - 654);
    }
    window[o(397, "R]tH", 337) + e(409, 466, 413, 358, "i@NM") + A(427, "sMWZ", 453, 432, 396) + "r"](o(363, "i@NM", 312) + "wn", this[n(703, "8[hM", 675, 713) + A(394, "XcC&", 400, 344, 387) + n(610, "1t^c", 648, 659)][e(440, 447, 419, 406, "s3Y0")](this));
  }
  [fA(23, 15, "zcO^", 72) + fA(120, 133, "mN@M", 140) + "lt"]() {
    function n(g, a, s, B, I) {
      return LA(I - -1446, a - 312, a);
    }
    function t(g, a, s, B, I) {
      return LA(I - -1323, a - 119, B);
    }
    if (!_t() || !this[t(-524, -616, -548, "be!C", -569) + n(-620, "AY15", -621, -632, -666) + "p"])
      if (t(-644, -584, -577, "AY15", -636) === n(-778, "XV67", -812, -754, -765)) {
        var e = {};
        return e[A(321, 289, 322, 331, "s3Y0") + t(-574, -586, -513, "TZSW", -561) + "e"] = !1, e;
      } else return this[A(409, 359, 401, 400, "XV67") + n(-678, "TZSW", -676, -772, -722) + t(-596, -583, -635, "nf)m", -605)];
    function A(g, a, s, B, I) {
      return xe(g - 334, a - 218, s - -24, I);
    }
    function o(g, a, s, B, I) {
      return Oe(g - 0, a - -377, s - 393, I);
    }
    function r(g, a, s, B, I) {
      return fA(g - 262, a - 297, a, B - -699);
    }
    return { performance: !0, hiccupAmount: this[t(-575, -684, -642, "irQY", -628) + o(-232, -230, -276, -260, "Xq&y") + t(-585, -537, -627, "sMWZ", -579) + "t"](), firstHiccup: this[r(-621, "zcO^", -596, -574) + o(-235, -254, -202, -268, "XcC&") + t(-568, -605, -547, "EJLl", -590) + o(-323, -281, -230, -242, "Q!Ee") + "ss"]() };
  }
  [xe(393, 400, 394, "R]tH") + LA(738, 694, "QAx]") + Ee(-271, "R]tH", -258, -306) + "t"]() {
    function n(t, e, A, o, r) {
      return LA(e - -1092, e - 185, r);
    }
    return this[n(-456, -406, -461, -462, "XcC&") + n(-362, -410, -465, -363, "P%kN") + n(-326, -374, -408, -358, "nf)m")];
  }
  [LA(721, 712, "$e6m") + Ee(-291, "COHs", -238, -276) + Oe(57, 80, 78, "Stc^") + Ee(-194, "V@&C", -260, -226) + "ss"]() {
    function n(e, A, o, r, g) {
      return Oe(e - 153, e - -782, o - 272, o);
    }
    function t(e, A, o, r, g) {
      return LA(o - -894, A - 50, e);
    }
    return this[t("QAx]", -147, -135) + n(-611, -599, "s3Y0") + "p"];
  }
}
const GB = 480, NB = 17554 + 8657 * -2, kr = -1 * -986 + 5367 + -6323, gs = 15, Is = 6066 + 7947 * -1 + 1889, Vi = {};
Vi.codec = "avc1.42E01E", Vi.bitrate = 1e6;
const xo = Vi, RB = -923 + 1 * 925, vB = 3e4;
class FB {
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
    let n = 5255 * 1 + -3315 + -1940;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class ss {
  encoder;
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw w.fromError("Encoding error: " + t);
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
function MB(i) {
  if (!i) return !1;
  const n = ss.isSupported();
  return !n && w.logError("Video encoding is not supported in this browser."), n;
}
const Zi = {};
Zi.LOW = "low", Zi.STANDARD = "standard";
const Bn = Zi, zi = {};
zi.SPS = "SPS", zi.PPS = "PPS";
const Ai = zi;
class WB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -14101 + -35 * -403, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      w.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Ai.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Ai.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Ai.SPS ? n[t] & 1 * 8394 + 2168 + 1 * -10531 : n[t], o = t + (-1665 + 1793 * -3 + -5 * -1409);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 0; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === 2 * 3685 + -4207 + 1 * -3163) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (1 * 7946 + -5314 * -1 + -13258) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-1 * -7937 + 8452 + -16387), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class LB {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, -4098 + 2049 * 2, 2369 * -3 + 4860 + 3 * 749, 1]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new WB();
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
    if (t + (1704 * 3 + 1 * -7928 + -1 * -2820) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (1 * -3877 + 4444 + -563 * 1), r = o + A;
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
class OB {
  chunks = [];
  maxChunksCount;
  constructor(n = Is, t = kr) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (-430 * 13 + 6463 * 1 + -872)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(6767 + 2 * 3437 + -3 * 4547, n));
  }
}
class Ga {
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
    if (!this.codec) throw w.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw w.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class JB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (NI() && e > A) {
      const g = e, a = A, s = g / a, B = t * s;
      return { width: Math.floor(B / (-2792 * -1 + 379 * -17 + 3653)) * (8416 + -2 * 4207), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (3149 * -2 + 3048 + 3 * 1084)) * (-5352 + 2 * 2677) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-9761 + -269 * -15 + 5728)) * (-3 * 1028 + 2522 + 564), height: t };
  }
  create(n, t) {
    switch (n) {
      case Bn.STANDARD:
        return new Ga().setBitrate(xo.bitrate).setCodec(xo.codec).setFramerate(kr).setResolution(this.getScaledResolution(t, GB)).build();
      case Bn.LOW:
        return new Ga().setBitrate(xo.bitrate).setCodec(xo.codec).setFramerate(gs).setResolution(this.getScaledResolution(t, NB)).build();
      default:
        throw w.logError("Unsupported preset for video encoder config");
    }
  }
}
class UB {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = Bn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new JB(), this.chunkStorage = new OB(), this.cameraFramerate = kr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(Is, gs), this.currentConfigPreset = Bn.LOW, this.startRecording();
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
    if (NI()) return;
    const t = n.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(n = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      w.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      w.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      w.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(n, this.currentResolution);
    } catch (e) {
      w.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      w.logError("The provided video encoder configuration is not supported.");
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
      w.logError("Video element is not created.");
      return;
    }
    let n = 0;
    const t = this.cameraFramerate, e = (1201 * -2 + -8752 * 1 + 12154) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 17753 + -17753 * 1;
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
class YB {
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
    if (!this.videoProcessor) throw w.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw w.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw w.logError("QualityTester is not set");
    if (!this.cameraHandler) throw w.logError("CameraHandler is not set");
    if (!this.customEvent) throw w.logError("CustomEvent is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new UB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class PB {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!MB(e)) return;
    const A = new FB(RB, vB), o = new ss(), r = new LB();
    return new YB().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function TB(i, n) {
  const { facingMode: t = Vt.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = Ae(null), [o, r] = IA(), [g, a] = IA(), { handleError: s, setIsCameraReady: B } = ee(), I = ye((E) => {
    a((x) => fC(E, x));
  }, []);
  K(() => {
    if (!A.current) {
      s(new w("Something went wrong during video initialization"));
      return;
    }
    const E = new kB(A.current), x = new wB(), Q = new mB(x), d = new as(), f = new SB(), h = {};
    h.cameraHandler = d, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new PB().create(h), b = {};
    b.videoHandler = E, b.cameraHandler = d, b.performanceCheckup = f, b.cameraEvaluator = Q, b.videoRecorder = p;
    const D = new bB(b);
    return (async () => {
      try {
        const y = {};
        y.facingMode = t, await D.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          s(w.fromCameraError(y));
          return;
        }
      }
      r(D), B(!0), I(D.getCameraResolution());
    })(), () => {
      D?.stopStreaming(), B(!1), r(void 0);
    };
  }, [t, s, B, A, I, e, i]);
  const c = {};
  return c.cameraService = o, c.cameraResolution = g, c.onCameraResolutionChange = I, c.videoRef = A, c;
}
function HB({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = TB(
    t,
    i
  ), g = pA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ m(nn.Provider, { value: g, children: n });
}
function _B({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = sB(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, aB(t.CAMERA_PROPS_CHANGED, A), K(() => () => {
    me.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function KB(i) {
  K(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function jB({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: g, onDetection: a, sessionToken: s }) {
  KB(() => {
    t && t.destroy();
  });
  const { appState: B, firstRunningDone: I, handleAppStateChange: c, isCameraReady: E, setFirstRunningDone: x } = ee(), { sunfish: Q } = Ao(), { analytics: d } = XC(), { transactionCounting: f } = RI(), { cameraResolution: h, cameraService: p, onCameraResolutionChange: b, videoRef: D } = dB(), k = {};
  k.cameraResolution = h, k.cameraService = p, k.customEvent = A;
  const { shouldCameraMirror: y } = _B(k), O = _I(void 0), Z = p?.["isStreaming"] && t?.["isDetectorInitialized"] && Q && E, NA = ye(async (z) => {
    c(sA.WAITING), g(z);
  }, [g, c]), yA = ye((z, to) => {
    b(z.resolution), O.value = z, a(z, to);
  }, [a, O, b]);
  K(() => {
    !I && Z && (x(!0), c(sA.RUNNING));
  }, [Z, c, I, x]), K(() => {
    if (B !== sA.RUNNING || !Z) return;
    if (!p || !t) throw new w("Cannot start detection");
    t.imageProcessor.reset();
    const z = {};
    return z.analytics = d, z.transactionCounting = f, z.cameraService = p, z.fallbackInstruction = o, z.instructionCodeMap = r, z.checkToInstructionCodeMap = n, z.sessionToken = s, z.createProtoMessage = e, z.onCaptureCallback = NA, z.onDetectionCallback = yA, t.createDetection(i, z), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [B, Z, t, p, NA, yA, s, O, d, e, r, n, o, i, f]);
  const bA = {};
  return bA.videoRef = D, bA.cameraResolution = h, bA.detectionDetails = O, bA.shouldCameraMirror = y, bA;
}
const Na = () => typeof document < "u" && document.hasFocus();
function qB(i = {}) {
  const n = Ae(i), t = Ae(Na()), [e, A] = IA(Na);
  K(() => {
    n.current = i;
  }), K(() => {
    function r(B) {
      t.current = B, A(B);
    }
    function g() {
      Promise.resolve().then(() => {
        !t.current && (n.current.onFocus?.(), n.current.onChange?.(!0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        t.current && (n.current.onBlur?.(), n.current.onChange?.(!1)), r(!1);
      });
    }
    function s() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", g), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", s), () => {
      window.removeEventListener("focus", g), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", s);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function VB(i = {}) {
  const { appState: n, firstRunningDone: t } = ee();
  qB({ onBlur: () => {
    n === sA.WAITING || n === da.DONE || !t || i.onBlur?.();
  }, onFocus: () => {
    n === sA.WAITING || n === da.DONE || !t || i.onFocus?.();
  } });
}
function ZB(i) {
  const { redfin: n, freemiumOverlayState: t } = ee(), e = n === Ko.Higher, A = t !== jo.HIDDEN, o = A && !e && i, r = t === jo.VISIBLE, g = {};
  return g.showFreemiumOverlay = o, g.showFullFreemiumOverlay = r, g;
}
const Sr = ve(void 0);
Sr.displayName = "CommonThresholdsContext";
function zB() {
  const i = ce(Sr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function XB() {
  return Fn() ? fa.MOBILE : fa.DESKTOP;
}
function $B({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = IA(XB()), r = pA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ m(Sr.Provider, { value: r, children: i });
}
const Xi = {};
Xi.min = 0.25, Xi.max = 0.9;
const cs = {};
cs.min = 0.8;
const Cs = {};
Cs.min = 0.03;
const Bs = {};
Bs.min = 0.07;
const Qs = {};
Qs.min = 0.7;
const $i = {};
$i.min = 0.4, $i.max = 0.48;
const Ke = {};
Ke.brightness = Xi, Ke.confidence = cs, Ke.edgeDistanceToImageShorterSideRatio = Cs, Ke.sharpness = Bs, Ke.templateExtractionQuality = Qs, Ke.size = $i;
const Ar = {};
Ar.min = 0.25, Ar.max = 0.9;
const Es = {};
Es.min = 0.8;
const xs = {};
xs.min = 0.03;
const ls = {};
ls.min = 0.06;
const ds = {};
ds.min = 0.7;
const er = {};
er.min = 0.3, er.max = 0.38;
const je = {};
je.brightness = Ar, je.confidence = Es, je.edgeDistanceToImageShorterSideRatio = xs, je.sharpness = ls, je.templateExtractionQuality = ds, je.size = er;
const tr = {};
tr.MOBILE = Ke, tr.DESKTOP = je;
const AQ = tr;
function eQ(i, n) {
  return {
    brightness: {
      min: i?.brightness?.min ?? n.brightness.min,
      max: i?.brightness?.max ?? n.brightness.max
    },
    confidence: { min: i?.confidence?.min ?? n.confidence.min },
    edgeDistanceToImageShorterSideRatio: {
      min: i?.edgeDistanceToImageShorterSideRatio?.min ?? n.edgeDistanceToImageShorterSideRatio.min
    },
    sharpness: { min: i?.sharpness?.min ?? n.sharpness.min },
    size: {
      max: i?.size?.max ?? n.size.max,
      min: i?.size?.min ?? n.size.min
    },
    templateExtractionQuality: {
      min: i?.templateExtractionQuality?.min ?? n.templateExtractionQuality.min
    }
  };
}
function tQ({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ m(
    $B,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: eQ,
      thresholdsPresets: AQ,
      children: i
    }
  );
}
function us() {
  return zB();
}
function oQ({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = us(), { redfin: o } = ee(), r = Ae(null);
  if (K(() => {
    if (!r?.current || !i)
      return;
    r.current.width = i.width, r.current.height = i.height, oC(r.current);
    const f = zo(i), h = GI(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      f
    ), p = IC(i);
    n.value && (bC({
      canvas: r.current,
      polygon: n.value.processedImage.detection,
      color: "red"
    }), zn(r.current, f, "lime"), zn(r.current, h, "yellow"), zn(r.current, p, "blue"));
  }, [i, n.value, e.edgeDistanceToImageShorterSideRatio]), !n.value)
    return null;
  const {
    avgFps: g,
    detectionTime: a,
    fps: s,
    processedImage: { detection: B, instructionCode: I, invalidValidators: c, isEscalated: E },
    resolution: x,
    samVersion: Q
  } = n.value, d = {
    Confidence: B.confidence,
    "Smallest edge": B.smallestEdge,
    Brightness: B.brightness,
    Sharpness: B.sharpness,
    "Templ. Extr. Quality": B.templateExtractionQuality,
    "Detection time": a,
    FPS: s,
    "Avg FPS": g,
    Tier: o,
    Instruction: I,
    Resolution: x,
    "Escalated instruction": E,
    "Component version": "8.0.2",
    "Thresholds preset": A,
    "Hand orientation": B.handOrientation,
    "Hand position": B.handPosition
  };
  return Q && (d["SAM version"] = Q), c.length > 0 && (d["Invalid validators"] = c), /* @__PURE__ */ m(
    zC,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function nQ(i, n) {
  const [t, e] = IA(!1), A = () => e((g) => !g), o = "" + t;
  Dt(() => {
    function g() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), c = {};
      return c.childList = !0, c.subtree = !0, c.attributes = !0, I.observe(i.current, c), I;
    }
    function a() {
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
      }), c = {};
      return c.childList = !0, I.observe(i.current.parentElement, c), I;
    }
    const s = g(), B = a();
    return () => {
      B?.disconnect(), s?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const iQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function rQ({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = Ae(null), { key: o } = nQ(A, t);
  return /* @__PURE__ */ m("div", { ref: A, style: iQ, children: /* @__PURE__ */ m("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
  ] }) }, o);
}
function aQ(i) {
  return /* @__PURE__ */ m(
    "svg",
    {
      height: i.height,
      viewBox: "-3 0 297 238",
      width: i.width,
      x: i.x,
      xmlns: "http://www.w3.org/2000/svg",
      y: i.y,
      children: [
        /* @__PURE__ */ m("path", { d: "M9.27 106.94C5.32 103.19 2.86 97.89 2.86 92.02C2.86 80.66 12.07 71.46 23.42 71.46C26.26 71.46 28.96 72.04 31.42 73.08" }),
        /* @__PURE__ */ m("path", { d: "M92.5 2.5V105L31.43 73.08L9.5 107L43.98 141.54C44.55 142.27 45.42 143.38 46.45 144.73C59.05 161.28 65.78 174.04 69.8 180.8C73.76 187.45 82.38 201.9 97.4 213.77C118.44 230.39 146.31 237.4 161.62 235.05C163.35 234.78 169.15 233.75 177.15 233.71C186.16 233.66 192.61 234.94 194.79 235.24C213.1 237.8 235.51 223.02 239.65 220.29C264.38 203.98 273.91 180.37 277.6 170.83C283.11 156.62 283.65 136.98 284.88 120.99C284.88 120.99 285.21 116.77 285.45 112.3C287.17 80.65 285.9 29.66 285.55 2.19995" }),
        /* @__PURE__ */ m("path", { d: "M92.0139 105L92.49 2.20991M9.27 106.94C5.32 103.19 2.86 97.89 2.86 92.02C2.86 80.66 12.07 71.46 23.42 71.46C26.26 71.46 28.96 72.04 31.42 73.08M92.49 105.13L34.08 74.44L31.43 73.08M31.43 73.08L9.5 107L43.98 141.54C44.55 142.27 45.42 143.38 46.45 144.73C59.05 161.28 65.78 174.04 69.8 180.8C73.76 187.45 82.38 201.9 97.4 213.77C118.44 230.39 146.31 237.4 161.62 235.05C163.35 234.78 169.15 233.75 177.15 233.71C186.16 233.66 192.61 234.94 194.79 235.24C213.1 237.8 235.51 223.02 239.65 220.29C264.38 203.98 273.91 180.37 277.6 170.83C283.11 156.62 283.65 136.98 284.88 120.99C284.88 120.99 285.21 116.77 285.45 112.3C287.17 80.65 285.9 29.66 285.55 2.19995M31.43 73.08L92.5 105V2.5" })
      ]
    }
  );
}
function gQ({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = sC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ m(
    rQ,
    {
      cutOut: i || /* @__PURE__ */ m(aQ, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function IQ({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = ee(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = ZB(i), g = Ae(null), a = i && A === sA.RUNNING;
  return /* @__PURE__ */ m(YA, { children: [
    o && i && /* @__PURE__ */ m(
      gQ,
      {
        fullOverlay: r,
        ignoreElement: g,
        resolution: i
      }
    ),
    n,
    a && /* @__PURE__ */ m("div", { ref: g, children: /* @__PURE__ */ m(
      oQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const sQ = (i, n) => {
  if (pC()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    me.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ra = {}, ei = {}, ti, va;
function cQ() {
  if (va) return ti;
  va = 1, ti = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            a(s);
          else {
            for (var B = new Array(arguments.length - 1), I = 0; I < B.length; )
              B[I++] = arguments[I];
            g.apply(null, B);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, a(s));
      }
    });
  }
  return ti;
}
var Fa = {}, Ma;
function CQ() {
  return Ma || (Ma = 1, (function(i) {
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
      for (var s = null, B = [], I = 0, c = 0, E; g < a; ) {
        var x = r[g++];
        switch (c) {
          case 0:
            B[I++] = t[x >> 2], E = (x & 3) << 4, c = 1;
            break;
          case 1:
            B[I++] = t[E | x >> 4], E = (x & 15) << 2, c = 2;
            break;
          case 2:
            B[I++] = t[E | x >> 6], B[I++] = t[x & 63], c = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, B)), I = 0);
      }
      return c && (B[I++] = t[E], B[I++] = 61, c === 1 && (B[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, B.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, B.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var s = a, B = 0, I, c = 0; c < r.length; ) {
        var E = r.charCodeAt(c++);
        if (E === 61 && B > 1)
          break;
        if ((E = e[E]) === void 0)
          throw Error(o);
        switch (B) {
          case 0:
            I = E, B = 1;
            break;
          case 1:
            g[a++] = I << 2 | (E & 48) >> 4, I = E, B = 2;
            break;
          case 2:
            g[a++] = (I & 15) << 4 | (E & 60) >> 2, I = E, B = 3;
            break;
          case 3:
            g[a++] = (I & 3) << 6 | E, B = 0;
            break;
        }
      }
      if (B === 1)
        throw Error(o);
      return a - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(Fa)), Fa;
}
var oi, Wa;
function BQ() {
  if (Wa) return oi;
  Wa = 1, oi = i;
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
  }, oi;
}
var ni, La;
function QQ() {
  if (La) return ni;
  La = 1, ni = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function s(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3];
      }
      function B(E, x, Q) {
        r[0] = E, x[Q] = g[3], x[Q + 1] = g[2], x[Q + 2] = g[1], x[Q + 3] = g[0];
      }
      o.writeFloatLE = a ? s : B, o.writeFloatBE = a ? B : s;
      function I(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], r[0];
      }
      function c(E, x) {
        return g[3] = E[x], g[2] = E[x + 1], g[1] = E[x + 2], g[0] = E[x + 3], r[0];
      }
      o.readFloatLE = a ? I : c, o.readFloatBE = a ? c : I;
    })() : (function() {
      function r(a, s, B, I) {
        var c = s < 0 ? 1 : 0;
        if (c && (s = -s), s === 0)
          a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), B, I);
        else if (isNaN(s))
          a(2143289344, B, I);
        else if (s > 34028234663852886e22)
          a((c << 31 | 2139095040) >>> 0, B, I);
        else if (s < 11754943508222875e-54)
          a((c << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, B, I);
        else {
          var E = Math.floor(Math.log(s) / Math.LN2), x = Math.round(s * Math.pow(2, -E) * 8388608) & 8388607;
          a((c << 31 | E + 127 << 23 | x) >>> 0, B, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, s, B) {
        var I = a(s, B), c = (I >> 31) * 2 + 1, E = I >>> 23 & 255, x = I & 8388607;
        return E === 255 ? x ? NaN : c * (1 / 0) : E === 0 ? c * 1401298464324817e-60 * x : c * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function s(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3], x[Q + 4] = g[4], x[Q + 5] = g[5], x[Q + 6] = g[6], x[Q + 7] = g[7];
      }
      function B(E, x, Q) {
        r[0] = E, x[Q] = g[7], x[Q + 1] = g[6], x[Q + 2] = g[5], x[Q + 3] = g[4], x[Q + 4] = g[3], x[Q + 5] = g[2], x[Q + 6] = g[1], x[Q + 7] = g[0];
      }
      o.writeDoubleLE = a ? s : B, o.writeDoubleBE = a ? B : s;
      function I(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], g[4] = E[x + 4], g[5] = E[x + 5], g[6] = E[x + 6], g[7] = E[x + 7], r[0];
      }
      function c(E, x) {
        return g[7] = E[x], g[6] = E[x + 1], g[5] = E[x + 2], g[4] = E[x + 3], g[3] = E[x + 4], g[2] = E[x + 5], g[1] = E[x + 6], g[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = a ? I : c, o.readDoubleBE = a ? c : I;
    })() : (function() {
      function r(a, s, B, I, c, E) {
        var x = I < 0 ? 1 : 0;
        if (x && (I = -I), I === 0)
          a(0, c, E + s), a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), c, E + B);
        else if (isNaN(I))
          a(0, c, E + s), a(2146959360, c, E + B);
        else if (I > 17976931348623157e292)
          a(0, c, E + s), a((x << 31 | 2146435072) >>> 0, c, E + B);
        else {
          var Q;
          if (I < 22250738585072014e-324)
            Q = I / 5e-324, a(Q >>> 0, c, E + s), a((x << 31 | Q / 4294967296) >>> 0, c, E + B);
          else {
            var d = Math.floor(Math.log(I) / Math.LN2);
            d === 1024 && (d = 1023), Q = I * Math.pow(2, -d), a(Q * 4503599627370496 >>> 0, c, E + s), a((x << 31 | d + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, c, E + B);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, s, B, I, c) {
        var E = a(I, c + s), x = a(I, c + B), Q = (x >> 31) * 2 + 1, d = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + E;
        return d === 2047 ? f ? NaN : Q * (1 / 0) : d === 0 ? Q * 5e-324 * f : Q * Math.pow(2, d - 1075) * (f + 4503599627370496);
      }
      o.readDoubleLE = g.bind(null, e, 0, 4), o.readDoubleBE = g.bind(null, A, 4, 0);
    })(), o;
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
  return ni;
}
function Oa(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ii, Ja;
function EQ() {
  if (Ja) return ii;
  Ja = 1, ii = i;
  function i(n) {
    try {
      if (typeof Oa != "function")
        return null;
      var t = Oa(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return ii;
}
var Ua = {}, Ya;
function xQ() {
  return Ya || (Ya = 1, (function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, g = [], a = 0, s; e < A; )
        s = t[e++], s < 128 ? g[a++] = s : s > 191 && s < 224 ? g[a++] = (s & 31) << 6 | t[e++] & 63 : s > 239 && s < 365 ? (s = ((s & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, g[a++] = 55296 + (s >> 10), g[a++] = 56320 + (s & 1023)) : g[a++] = (s & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, g)), a = 0);
      return r ? (a && r.push(String.fromCharCode.apply(String, g.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, g.slice(0, a));
    }, n.write = function(t, e, A) {
      for (var o = A, r, g, a = 0; a < t.length; ++a)
        r = t.charCodeAt(a), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((g = t.charCodeAt(a + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (g & 1023), ++a, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  })(Ua)), Ua;
}
var ri, Pa;
function lQ() {
  if (Pa) return ri;
  Pa = 1, ri = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, g = A;
    return function(a) {
      if (a < 1 || a > o)
        return n(a);
      g + a > A && (r = n(A), g = 0);
      var s = t.call(r, g, g += a);
      return g & 7 && (g = (g | 7) + 1), s;
    };
  }
  return ri;
}
var ai, Ta;
function dQ() {
  if (Ta) return ai;
  Ta = 1, ai = n;
  var i = nt();
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
  }, ai;
}
var Ha;
function nt() {
  return Ha || (Ha = 1, (function(i) {
    var n = i;
    n.asPromise = cQ(), n.base64 = CQ(), n.EventEmitter = BQ(), n.float = QQ(), n.inquire = EQ(), n.utf8 = xQ(), n.pool = lQ(), n.LongBits = dQ(), n.isNode = !!(typeof at < "u" && at && at.process && at.process.versions && at.process.versions.node), n.global = n.isNode && at || typeof window < "u" && window || typeof self < "u" && self || ei, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  })(ei)), ei;
}
var gi, _a;
function fs() {
  if (_a) return gi;
  _a = 1, gi = a;
  var i = nt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(d, f, h) {
    this.fn = d, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function g(d) {
    this.head = d.head, this.tail = d.tail, this.len = d.len, this.next = d.states;
  }
  function a() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var s = function() {
    return i.Buffer ? function() {
      return (a.create = function() {
        return new n();
      })();
    } : function() {
      return new a();
    };
  };
  a.create = s(), a.alloc = function(d) {
    return new i.Array(d);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(d, f, h) {
    return this.tail = this.tail.next = new o(d, f, h), this.len += f, this;
  };
  function B(d, f, h) {
    f[h] = d & 255;
  }
  function I(d, f, h) {
    for (; d > 127; )
      f[h++] = d & 127 | 128, d >>>= 7;
    f[h] = d;
  }
  function c(d, f) {
    this.len = d, this.next = void 0, this.val = f;
  }
  c.prototype = Object.create(o.prototype), c.prototype.fn = I, a.prototype.uint32 = function(d) {
    return this.len += (this.tail = this.tail.next = new c(
      (d = d >>> 0) < 128 ? 1 : d < 16384 ? 2 : d < 2097152 ? 3 : d < 268435456 ? 4 : 5,
      d
    )).len, this;
  }, a.prototype.int32 = function(d) {
    return d < 0 ? this._push(E, 10, t.fromNumber(d)) : this.uint32(d);
  }, a.prototype.sint32 = function(d) {
    return this.uint32((d << 1 ^ d >> 31) >>> 0);
  };
  function E(d, f, h) {
    for (; d.hi; )
      f[h++] = d.lo & 127 | 128, d.lo = (d.lo >>> 7 | d.hi << 25) >>> 0, d.hi >>>= 7;
    for (; d.lo > 127; )
      f[h++] = d.lo & 127 | 128, d.lo = d.lo >>> 7;
    f[h++] = d.lo;
  }
  a.prototype.uint64 = function(d) {
    var f = t.from(d);
    return this._push(E, f.length(), f);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(d) {
    var f = t.from(d).zzEncode();
    return this._push(E, f.length(), f);
  }, a.prototype.bool = function(d) {
    return this._push(B, 1, d ? 1 : 0);
  };
  function x(d, f, h) {
    f[h] = d & 255, f[h + 1] = d >>> 8 & 255, f[h + 2] = d >>> 16 & 255, f[h + 3] = d >>> 24;
  }
  a.prototype.fixed32 = function(d) {
    return this._push(x, 4, d >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(d) {
    var f = t.from(d);
    return this._push(x, 4, f.lo)._push(x, 4, f.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(d) {
    return this._push(i.float.writeFloatLE, 4, d);
  }, a.prototype.double = function(d) {
    return this._push(i.float.writeDoubleLE, 8, d);
  };
  var Q = i.Array.prototype.set ? function(d, f, h) {
    f.set(d, h);
  } : function(d, f, h) {
    for (var p = 0; p < d.length; ++p)
      f[h + p] = d[p];
  };
  return a.prototype.bytes = function(d) {
    var f = d.length >>> 0;
    if (!f)
      return this._push(B, 1, 0);
    if (i.isString(d)) {
      var h = a.alloc(f = e.length(d));
      e.decode(d, h, 0), d = h;
    }
    return this.uint32(f)._push(Q, f, d);
  }, a.prototype.string = function(d) {
    var f = A.length(d);
    return f ? this.uint32(f)._push(A.write, f, d) : this._push(B, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var d = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = d.next, this.tail = f, this.len += h), this;
  }, a.prototype.finish = function() {
    for (var d = this.head.next, f = this.constructor.alloc(this.len), h = 0; d; )
      d.fn(d.val, f, h), h += d.len, d = d.next;
    return f;
  }, a._configure = function(d) {
    n = d, a.create = s(), n._configure();
  }, gi;
}
var Ii, Ka;
function uQ() {
  if (Ka) return Ii;
  Ka = 1, Ii = t;
  var i = fs();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = nt();
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
  }, t._configure(), Ii;
}
var si, ja;
function hs() {
  if (ja) return si;
  ja = 1, si = o;
  var i = nt(), n, t = i.LongBits, e = i.utf8;
  function A(I, c) {
    return RangeError("index out of range: " + I.pos + " + " + (c || 1) + " > " + I.len);
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
  }, g = function() {
    return i.Buffer ? function(I) {
      return (o.create = function(c) {
        return i.Buffer.isBuffer(c) ? new n(c) : r(c);
      })(I);
    } : r;
  };
  o.create = g(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
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
  function a() {
    var I = new t(0, 0), c = 0;
    if (this.len - this.pos > 4) {
      for (; c < 4; ++c)
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << c * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      if (I.lo = (I.lo | (this.buf[this.pos] & 127) << 28) >>> 0, I.hi = (I.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return I;
      c = 0;
    } else {
      for (; c < 3; ++c) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << c * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
      return I.lo = (I.lo | (this.buf[this.pos++] & 127) << c * 7) >>> 0, I;
    }
    if (this.len - this.pos > 4) {
      for (; c < 5; ++c)
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << c * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
    } else
      for (; c < 5; ++c) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << c * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(I, c) {
    return (I[c - 4] | I[c - 3] << 8 | I[c - 2] << 16 | I[c - 1] << 24) >>> 0;
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
  function B() {
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
    var I = this.uint32(), c = this.pos, E = this.pos + I;
    if (E > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(c, E);
    if (c === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, c, E);
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
    n = I, o.create = g(), n._configure();
    var c = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[c](!1);
      },
      uint64: function() {
        return a.call(this)[c](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[c](!1);
      },
      fixed64: function() {
        return B.call(this)[c](!0);
      },
      sfixed64: function() {
        return B.call(this)[c](!1);
      }
    });
  }, si;
}
var ci, qa;
function fQ() {
  if (qa) return ci;
  qa = 1, ci = t;
  var i = hs();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = nt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), ci;
}
var Va = {}, Ci, Za;
function hQ() {
  if (Za) return Ci;
  Za = 1, Ci = n;
  var i = nt();
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
        function(s, B) {
          if (s)
            return a.emit("error", s, e), g(s);
          if (B === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(B instanceof o))
            try {
              B = o[a.responseDelimited ? "decodeDelimited" : "decode"](B);
            } catch (I) {
              return a.emit("error", I, e), g(I);
            }
          return a.emit("data", B, e), g(null, B);
        }
      );
    } catch (s) {
      a.emit("error", s, e), setTimeout(function() {
        g(s);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, Ci;
}
var za;
function pQ() {
  return za || (za = 1, (function(i) {
    var n = i;
    n.Service = hQ();
  })(Va)), Va;
}
var Xa, $a;
function yQ() {
  return $a || ($a = 1, Xa = {}), Xa;
}
var Ag;
function mQ() {
  return Ag || (Ag = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = fs(), n.BufferWriter = uQ(), n.Reader = hs(), n.BufferReader = fQ(), n.util = nt(), n.rpc = pQ(), n.roots = yQ(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(Ra)), Ra;
}
var eg, tg;
function wQ() {
  return tg || (tg = 1, eg = mQ()), eg;
}
var S = wQ();
const u = S.Reader, G = S.Writer, l = S.util, C = S.roots.default || (S.roots.default = {}), ot = C.dot = (() => {
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(C.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = C.dot.Image.toObject(A.images[g], o);
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              a.web = C.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = C.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = C.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[g]), C.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.AndroidMetadata(), s, B;
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
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
              a.camera = C.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === l.emptyObject && (a.dynamicCameraFrameProperties = {});
              let c = A.uint32() + A.pos;
              for (s = "", B = null; A.pos < c; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    B = C.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = B;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = C.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            let g = C.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = C.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
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
          for (let a = 0; a < A.supportedAbis.length; ++a)
            r.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let g;
        if (A.dynamicCameraFrameProperties && (g = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < g.length; ++a)
            r.dynamicCameraFrameProperties[g[a]] = C.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = C.dot.ImageSize.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.IosMetadata(), s, B;
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === l.emptyObject && (a.architectureInfo = {});
              let c = A.uint32() + A.pos;
              for (s = "", B = !1; A.pos < c; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.architectureInfo[s] = B;
              break;
            }
            case 6: {
              a.camera = C.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
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
            case 8: {
              a.croppedYuv420Image = C.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.architectureInfo[r[g]] = !!A.architectureInfo[r[g]];
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
        let g;
        if (A.architectureInfo && (g = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < g.length; ++a)
            r.architectureInfo[g[a]] = A.architectureInfo[g[a]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            r.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = C.dot.ImageSize.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(C.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(C.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(C.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = C.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = C.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = C.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = C.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = C.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.ImageBitmap();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = C.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.DetectedObject();
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
              g.faceCenter = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Point();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.PlatformDetails();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(C.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = C.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.BrowserVersion();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Blob();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.documentContent = C.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = C.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = C.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = C.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = C.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = C.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = C.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? g.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(a & 7);
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = C.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = C.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.DataAuthenticationStatus();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 3: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(C.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = C.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.EyeGazeLivenessSegment();
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
              g.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(C.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = C.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.MultiRangeLivenessStepResult();
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
              g.image = C.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? (g.detections && g.detections.length || (g.detections = []), g.detections.push(C.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(a & 7);
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.FaceDetection();
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
              g.position = C.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = C.dot.PointDouble.decode(e, e.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        let g = t.uint32();
        if (g === A)
          break;
        g >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(g & 7);
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
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = C.dot.Image.decode(t, t.uint32());
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
      let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.Video();
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
            g.containerMp4 = C.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = C.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return g;
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
        let g = t.uint32();
        if (g === A)
          break;
        g >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(g & 7);
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
function Qn() {
  const i = ["t2SQoxy", "FZ8sh8kU", "pHddRSk2WPu", "WR3cP8kPySow", "W7q6W4Dq", "zvqDjMS", "W4NdN8kzw8oc", "rmkjWOrBWQG", "oSkvw8oFWRC", "ehO7fay", "kmoWCmkAnW", "W7FdPvPsWOq", "BCorW4ldUSkV", "W67dTSoHj8onCCkijwRdJc8dcCkc", "tGiwgJ8", "W5VdPLuKW7m", "eCo5AmkQbW", "EczDexT9W5rXWPpdNmknW5pdNbi", "E8kwWQn1W4S", "FKVdTaNdKG", "g8kCWQr2yq", "WQpdGCk6tmo2", "W59QW73dNX0", "WPu0rmkdhW", "WOBdISosWRVcKW", "h8oBW43cSeu", "W6NdHJddJYhdO17dRGVcMG", "WPRcSSo0q8o2", "WRiLWQ/cQCop", "W4ZdMtBdOey", "DCkarxpdVa", "hcZcPYhdTIddN2RcMq", "WOJcKmo6W7JcSa", "cdaNbvC", "W6SDW7DiWO8", "W4BcO8oNW7W", "FmkfW5TlWRm", "W4FcRCozk1ZdImofW77dOe1MW7fC", "WR7dPG0LWPy", "WRSsWO3cPNO", "W7XUyWtdLW", "W5yOW5viWQm", "a8olx13dHq", "WQK4C8osW7O", "WRqUW5btWRC", "W5jDW5lcPGC", "e8oydNpdHG", "W6OTC8oHWPe", "WROhWQFcPxZcSCkUkhjIW7C", "WQJcVSkrzSk2", "l8kBWQzrCW", "W5NdJmoXW6dcNM8eAq", "WOdcNmkPW7NdUG", "edFdH1dcKq", "WRG5v8kYfGhdMX4SW6hdQJ0v", "WOGFoSkakW", "W55pubddRG", "WPhcTmoaW6zNymom", "WRJdRZeAW64", "WR7dP8kZDCoB", "E8kfWPjdWOG", "WPTAWQxcP8oj", "ebChgGO", "WOZdGCkBf8oy", "pmkEW4/cUSo0sXZdQ8oZWRmgzNa", "h8oRgwvq", "W54lW4Tgda", "W6nNcSoEFG", "W6JcUZBdHHC", "WQJcLmkaFSox", "eCkNW6/dQem", "fa4Nj3K", "W6dcOSoihSk9W5uMW5KYoSkboSoB", "WRJcJSkTxmov", "qHxcNMy", "xciYjSoY", "zXdcLCo0WO/cJqJdVctdHG", "WPJcOSkoECoj", "es/cUgdcLW", "a10jys4", "i1evFuG", "WOTfWRaByW", "vmk9WQ9LWQe", "WP5hWRzLeW", "DJ4simo5", "W5nrmbxdLa", "W4K0W5Pgnq", "WQGtf8opWPK", "WO3dKSole8oD", "W6/cQ8kNqmkQ", "lG8Ydam", "W6fiWR3dS8oOW6jO", "CSkHfmomuSo5E8oaAXbBW4hdGG", "W6ddHmkOySoc", "qCkSWR5aWPq", "W44AW4z8WQm", "m8kaW53dRxG", "nmkEW4FcV18", "dvSkqmkE", "pgTPW6pdHq", "v101egC", "WOH/W69DWPy", "rCkHqvBcLG", "WRJcKXy7W7e", "fZVcTuhcJW", "W59HWPn/Fq", "BLdcOgRcVW", "WQuOlmo9WQe", "zSkPnxFdVa", "EKmYAGi", "WPFcS0dcUt4", "eSolAxrg", "WPfNWRZdQG", "yYyRkCk3", "WQ/cHCkavmku", "WOmBWP9Mga", "WPKcW63cTGS", "nHGweIe", "WR47WRbrCW", "WOTlWRjgFW", "WOOGqCkbiG", "jSoWbwvG", "WPxcPmkRW6BcMq", "zmkBWRLgWPe", "WRhdTGi/W7i", "WQzFWPTMBG", "W5/dICkPWRRdVeShu1quW68", "omoQxSoFWRC", "W5pdTZtdSgu", "nmovW6JdOfW", "cSk0W43cSa", "ahhdUSo9WQS", "heZdRmkBWRS", "WONdJSoaW5lcRq", "h3ObeH0", "W6yDW4hcVmkUWO8glKVdGHa9qq", "WRTKW7VdVq8", "e2RdOCkzWPy", "WRRcQmo+WRRcKW", "W73cP8oEW4Hd", "WRFcG8khESk5", "W5LmpSotyG", "qGRcGuBcPa", "d0NdL8k2WQC", "WOZcLSk8q8oW", "WQlcICkQaCoN", "W69OWOevFq", "mmoItCkx", "WPZcPmomW67cQa", "WOHXWObaha", "W75jW64MaG", "e8oPawDs", "WOeyWOpcPs0", "zI8PjCkm", "rwJdHYhdPG", "W7nCAYVdKG", "eCo4W5lcT1W", "z27dQ8kAWO8", "k1SqC8op", "W5DbvSopWOe", "lZmrx2e", "itjeb2a", "WPxcGCo4W4HR", "W6DkW4FdHCok", "WQLYWPldOW4", "W6GYuCoaWQu", "nMDHW5VdNq", "WOXSWPj+dG", "W4GVWPKJlq", "vbeibCkv", "W7JdLXJdUwa", "WQzPWQ0zaG", "WRnsWRVcUSo6", "W5XLWOHMFq", "pxSsdZ8", "iSk5WPjyFG", "iCoOawrA", "WRGOWPdcMmkq", "WQvzA0Kk", "W44yW6fcW4a", "W4bFWOFdGCoq", "uCkMWOVdR8on", "WOCqbCoTWRO", "WR15WRddHmoy", "mJykB8kQ", "W4xcKSk5WQPc", "WQvEWOrCla", "WRP+W73dKdm", "iMxdHSkkWQS", "W4qXWPPWgG", "W6ZdHg7cNtRdHv7dVW", "hmofBmouWQO", "WRldMmkOySo2", "W4HFk8oCtq", "bSo/xCkbWRS", "BmocWO7dUSoB", "W4XvtKXS", "dmk0W5pcVq", "WODBWRDXga", "W6vLWO/dNmoY", "wK3cOeRdHa", "W7BcSXOoW5/cJ8oJW4SjgSkv", "WP3cLCopW6dcOq", "vSoBW7dcTNO", "WQW0W6JdHda", "WRT3WOJdGmog", "bSk7W5BcR0O", "yKS2W6tdJG", "e0qqzGi", "j8ofWPbSsG", "aSoFw8kPWQ8", "W49pyYpdTW", "WQtdQSk4kI0", "fmo2W6/cMIi", "WPxdPCkXWQCKD8osjmkmW6PI", "W59ozJpdQa", "xaa9eSkQ", "WQ3cVSksr8og", "AdVdGM/cHq", "f0/dMCkBWOC", "jeOAjNS", "BmkVvSkJW4S", "WPzUWQtcG8oq", "W60VvSoKWOK", "mMi0tSkn", "DmkGhSokv8o8F8okFanVW63dQa", "dgqszSkU", "y3LSW6tdSW", "W6q/dSk1zG", "WRC5oCoota", "WPToWOJcTCot", "u0CTha0", "W7asW6zcgG", "itvpeLFcGghdTmkd"];
  return Qn = function() {
    return i;
  }, Qn();
}
function _(i, n) {
  i = i - (3 * -2885 + 1 * 1983 + -1 * -7077);
  const t = Qn();
  let e = t[i];
  if (_.GNjwbs === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    _.hahHbN = a, _.qVprBL = {}, _.GNjwbs = !0;
  }
  const o = t[-4171 + 1 * 4171], r = i + o, g = _.qVprBL[r];
  return g ? e = g : (_.rCBGkN === void 0 && (_.rCBGkN = !0), e = _.hahHbN(e, n), _.qVprBL[r] = e), e;
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return _(c - 166, I);
  }
  function e(a, s, B, I, c) {
    return _(a - -530, I);
  }
  const A = i();
  function o(a, s, B, I, c) {
    return _(s - -274, I);
  }
  function r(a, s, B, I, c) {
    return _(a - 795, s);
  }
  function g(a, s, B, I, c) {
    return _(a - 37, B);
  }
  for (; ; )
    try {
      if (-parseInt(g(500, 487, "zr!X", 573, 540)) / 1 * (parseInt(g(503, 540, "xqC)", 596, 616)) / 2) + -parseInt(t(658, 639, 545, "^DZL", 638)) / 3 * (parseInt(r(1345, "TdFc", 1281, 1284, 1321)) / 4) + parseInt(g(653, 675, "GGLO", 736, 749)) / 5 * (parseInt(e(-89, -183, -109, "W]Ie", -114)) / 6) + -parseInt(r(1201, "^(@I", 1188, 1184, 1273)) / 7 + -parseInt(g(516, 524, "IO%y", 632, 527)) / 8 + -parseInt(o(54, 158, 43, "Szr]", 249)) / 9 + -parseInt(r(1302, "^(@I", 1399, 1391, 1414)) / 10 * (-parseInt(g(451, 483, "[h4H", 352, 356)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Qn, -367541 * -1 + -1377627 + 1787261);
function DQ() {
  function i(B, I, c, E, x) {
    return _(B - -594, x);
  }
  function n(B, I, c, E, x) {
    return _(E - -85, c);
  }
  const t = A(1247, 1240, 1280, 1348, "*P9d") + A(1374, 1384, 1375, 1430, "(&Sm") + a(291, 379, 217, "OIb6") + a(293, 238, 372, "V@8Q") + a(240, 175, 347, "pUxS") + A(1507, 1539, 1398, 1478, "AADD") + n(467, 450, "DZw)", 471) + a(134, 135, 173, "YScm") + n(511, 443, "W]Ie", 440) + i(-71, -142, -167, 24, "AzGp") + a(192, 133, 128, "5BaD") + g(-201, -206, -107, -3, "OIb6") + A(1340, 1437, 1355, 1414, "@qPR") + n(384, 410, "k7N5", 445) + A(1415, 1554, 1569, 1460, "5BaD") + n(299, 318, "xqC)", 382) + i(-45, -120, -58, 15, "Szr]") + i(19, 16, 10, 109, "k7N5") + a(144, 155, 153, "uOBH") + n(397, 535, "6&Bd", 429) + i(-84, -87, -41, 7, "Azv$") + A(1411, 1296, 1464, 1384, "V@8Q") + n(429, 505, "CnFT", 541) + A(1340, 1506, 1323, 1426, "CnFT") + A(1407, 1353, 1387, 1350, "Szr]") + n(354, 419, "c]hg", 376) + a(244, 319, 288, "xqC)") + i(39, -67, -25, -16, "yx%X") + i(-116, -180, -187, -25, "h^WN") + a(189, 208, 115, "yx%X") + i(-113, -51, -206, -153, "dL00") + n(525, 455, "9!1D", 458) + g(32, 72, 58, 46, "uOBH") + A(1351, 1336, 1293, 1361, "aful") + A(1575, 1403, 1470, 1520, "Azv$") + i(-77, -22, 27, -80, "AzGp") + a(153, 189, 196, "c]hg") + A(1406, 1498, 1517, 1427, "dL00") + a(225, 162, 268, "(&Sm") + g(173, 61, 60, -29, "TdFc") + g(170, 168, 103, 114, "zOKF") + a(273, 211, 271, "^DZL") + a(242, 182, 233, "AADD") + a(300, 378, 398, "dL00") + a(254, 358, 138, "AADD") + A(1470, 1428, 1415, 1496, "CnFT") + g(-193, -123, -108, -69, "DZw)") + i(-23, 20, -3, 85, "pUxS") + A(1541, 1487, 1565, 1508, "k7N5") + i(-168, -96, -85, -125, "GGLO") + g(83, 98, 37, 23, "(&Sm") + g(104, -8, 22, -16, "5BaD") + n(622, 542, "XI1o", 551) + g(-12, -9, 72, -3, "aful") + a(181, 90, 109, "zOKF") + a(215, 195, 183, "yx%X") + g(175, 119, 102, 113, "OIb6") + g(68, 47, -20, -39, "k7N5") + n(489, 495, "*P9d", 453) + A(1461, 1356, 1271, 1362, "h^WN") + g(27, -59, -38, -65, "OBnm") + i(-63, 14, -72, -148, "(dSN") + n(478, 540, "^0ct", 504) + n(330, 375, "*P9d", 412) + a(264, 377, 238, "V$Ig") + a(314, 241, 308, "pUxS") + n(543, 406, "k7N5", 501) + g(-18, 106, 4, -59, "V@8Q") + A(1476, 1511, 1513, 1506, "V21b") + g(-39, -125, -9, -25, "*P9d") + i(-27, 83, -37, -122, "(dSN") + a(311, 360, 423, "3[Ln") + n(386, 411, "^(@I", 346) + A(1436, 1430, 1399, 1381, "CnFT") + g(69, -41, 24, 101, "rogN") + i(-165, -255, -203, -248, "^0ct") + A(1477, 1604, 1597, 1556, "CnFT") + a(164, 264, 85, "yx%X") + i(-174, -60, -107, -215, "[h4H") + a(269, 301, 299, "ENPy") + i(-129, -40, -172, -150, "aful") + i(-181, -262, -232, -297, "dL00") + g(126, -25, 69, 100, "TdFc") + a(155, 242, 190, "SyGC") + i(-68, -167, -100, -5, "fV5N") + g(53, -61, -34, 71, "@qPR") + n(229, 350, "WsKL", 336) + n(287, 411, "^0ct", 392) + a(235, 125, 323, "C!P7") + g(-175, -182, -78, -150, "pUxS") + n(455, 543, "OBnm", 451) + i(-111, -97, -165, -13, "W]Ie") + a(292, 254, 378, "n)vr") + i(-150, -178, -236, -153, "9!1D") + i(-185, -87, -191, -272, "DZw)") + i(-121, -178, -73, -130, "C!P7") + i(30, 117, -29, 82, "aful") + n(489, 490, "@qPR", 379) + n(469, 650, "FQnu", 542) + n(490, 366, "^0ct", 447) + g(-67, -66, -103, -122, "[h4H") + i(-1, -31, 52, -8, "[B6D") + A(1527, 1363, 1469, 1480, "^DZL") + g(109, 163, 105, 139, "Szr]") + g(-104, 114, -2, 72, "SyGC") + a(216, 333, 295, "5BaD") + A(1446, 1347, 1324, 1396, "YScm") + i(12, 126, -50, 57, "rogN") + g(-68, -50, -56, -97, "V21b") + i(-118, -219, -203, -184, "OIb6") + A(1343, 1359, 1412, 1459, "5BaD") + g(138, 181, 120, 24, "V21b") + g(-187, -52, -100, -60, "h^WN") + n(532, 473, "[B6D", 526) + a(135, 55, 43, "xqC)") + A(1462, 1547, 1605, 1558, "@qPR") + a(271, 173, 289, "uOBH") + A(1339, 1337, 1418, 1375, "Azv$") + i(-95, -33, -199, -127, "V$Ig") + a(188, 79, 229, "(&Sm") + A(1599, 1456, 1478, 1492, "OBnm") + n(464, 545, "AADD", 549) + a(211, 116, 112, "[h4H") + g(-24, 24, -43, -43, "*P9d") + a(281, 274, 359, "9!1D") + A(1590, 1591, 1601, 1514, "5BaD") + A(1407, 1497, 1404, 1408, "DZw)") + n(535, 382, "xqC)", 478) + a(315, 333, 213, "G3v^") + n(475, 457, "n)vr", 525) + a(260, 340, 284, "5BaD") + a(324, 313, 354, "pUxS") + g(40, 151, 82, 187, "^DZL") + a(201, 232, 286, "uOBH") + g(225, 16, 117, 218, "[h4H") + n(409, 300, "V@8Q", 417) + n(415, 538, "YScm", 450) + i(37, 106, 38, 0, "V$Ig") + A(1408, 1375, 1397, 1438, "pUxS") + i(-140, -64, -53, -38, "(dSN") + n(460, 321, "3[Ln", 349) + g(-17, 86, 81, -12, "ENPy") + A(1530, 1434, 1602, 1529, "AADD") + a(138, 229, 30, "@qPR") + i(-10, 59, 20, -64, "V$Ig") + i(-149, -142, -175, -264, "AzGp") + i(-73, -168, -50, -69, "yx%X") + a(224, 273, 148, "V$Ig") + n(371, 263, "zr!X", 375) + A(1421, 1331, 1352, 1382, "Azv$") + A(1456, 1408, 1382, 1420, "Szr]") + a(268, 380, 272, "AADD") + g(89, 46, 65, 21, "dL00") + g(-64, 18, -65, -10, "C!P7") + n(509, 584, "rogN", 524) + i(-70, -43, -7, -29, "Szr]") + A(1426, 1479, 1390, 1491, "dL00") + A(1315, 1354, 1331, 1353, "n)vr") + a(243, 213, 275, "AADD") + n(459, 466, "DZw)", 523) + i(-34, -42, -9, 9, "@qPR") + A(1550, 1570, 1565, 1495, "3[Ln") + A(1585, 1542, 1562, 1517, "fV5N") + A(1325, 1396, 1340, 1342, "V$Ig") + g(-39, 64, -7, -17, "zOKF") + a(318, 280, 277, "6&Bd") + a(182, 235, 291, "uOBH") + A(1382, 1352, 1366, 1351, "^(@I") + a(253, 305, 171, "yx%X") + A(1415, 1451, 1505, 1416, "V$Ig") + a(321, 258, 213, "rogN") + i(-143, -173, -229, -128, "*P9d") + i(-123, -71, -138, -188, "CnFT") + a(170, 255, 70, "h^WN") + a(313, 412, 423, "xqC)") + g(141, -19, 84, 19, "zr!X") + i(-76, 39, -134, -141, "C!P7") + n(321, 372, "*P9d", 348) + n(432, 380, "AADD", 332) + A(1363, 1457, 1418, 1363, "zr!X") + n(429, 396, "rogN", 338) + A(1480, 1290, 1282, 1369, "OIb6") + g(-71, 48, -10, -84, "h^WN") + g(-19, 74, 89, 66, "h^WN") + a(209, 118, 231, "ENPy") + a(104, 160, 12, "6&Bd") + A(1476, 1542, 1428, 1518, "OIb6") + i(-57, -22, -57, -55, "xqC)") + A(1510, 1367, 1400, 1479, "xqC)") + n(400, 478, "TdFc", 513) + i(-15, 56, 10, -76, "G3v^") + A(1413, 1578, 1469, 1477, "zr!X") + a(103, 102, 82, "ENPy") + i(20, 16, -34, -48, "TdFc") + i(-20, 8, 92, -127, "V21b") + i(-99, -181, -8, -141, "[h4H") + g(71, -119, -15, -119, "h^WN") + n(268, 316, "C!P7", 345) + A(1345, 1345, 1339, 1338, "[h4H") + g(-30, 23, 43, -57, "k7N5"), e = window[a(146, 119, 172, "^DZL")](t);
  function A(B, I, c, E, x) {
    return _(E - 926, x);
  }
  const o = window[A(1368, 1425, 1433, 1415, "yx%X")](e), r = uB(o);
  function g(B, I, c, E, x) {
    return _(c - -518, x);
  }
  function a(B, I, c, E, x) {
    return _(B - -304, E);
  }
  const s = {};
  return s[A(1596, 1551, 1504, 1538, "zOKF")] = hI, s[i(-49, -46, -7, -26, "zOKF")] = xC, window[a(255, 361, 229, "@qPR") + "o"][g(31, -19, 83, 32, "k7N5") + "e"][a(101, 205, 34, "ENPy") + A(1386, 1229, 1247, 1345, "Azv$")](a(258, 315, 344, "^(@I"), r, s, !0, [A(1470, 1436, 1611, 1507, "6&Bd") + "pt"]);
}
async function bQ(i) {
  const n = await DQ(), t = {};
  function e(r, g, a, s, B) {
    return _(s - 575, a);
  }
  t[e(1138, 1163, "G3v^", 1102)] = hI;
  function A(r, g, a, s, B) {
    return _(a - 904, g);
  }
  function o(r, g, a, s, B) {
    return _(g - 127, B);
  }
  return window[e(1311, 1198, "OIb6", 1212) + "o"][o(678, 728, 742, 813, "k7N5") + "e"][A(1259, "xqC)", 1351) + "pt"](t, n, i);
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return hA(s - 431, B);
  }
  function e(a, s, B, I, c) {
    return hA(c - -621, B);
  }
  function A(a, s, B, I, c) {
    return hA(a - 483, I);
  }
  function o(a, s, B, I, c) {
    return hA(c - -948, a);
  }
  const r = i();
  function g(a, s, B, I, c) {
    return hA(s - 551, I);
  }
  for (; ; )
    try {
      if (parseInt(o("l^DF", -613, -615, -613, -615)) / 1 * (parseInt(o("U95v", -593, -590, -587, -594)) / 2) + parseInt(t(793, 784, "%87o", 788, 775)) / 3 + -parseInt(g(904, 900, 896, "p%E*", 902)) / 4 * (parseInt(t(773, 769, "whOB", 763, 774)) / 5) + -parseInt(g(896, 890, 900, "k7yt", 884)) / 6 + -parseInt(o("PFt]", -610, -609, -622, -611)) / 7 + parseInt(A(826, 836, 832, "yhtl", 823)) / 8 * (parseInt(g(913, 901, 909, "ys#c", 910)) / 9) + -parseInt(t(773, 778, "]i%L", 768, 781)) / 10 * (-parseInt(e(-269, -273, "NgF[", -273, -270)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(En, -1148092 + 1 * 1967958);
function hA(i, n) {
  i = i - 333;
  const t = En();
  let e = t[i];
  if (hA.CccPVJ === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    hA.SFNQXx = a, hA.iPWNcK = {}, hA.CccPVJ = !0;
  }
  const o = t[911 * -4 + 6490 + -2846], r = i + o, g = hA.iPWNcK[r];
  return g ? e = g : (hA.tnvgew === void 0 && (hA.tnvgew = !0), e = hA.SFNQXx(e, n), hA.iPWNcK[r] = e), e;
}
function En() {
  const i = ["W5FdLCkw", "WR/dQComdx/cJ8o2bSo0WOSJAG", "WPL2WQ5QWQtdMCkHmJG", "zfDLW47cKrVdV8kIeCoxW5vM", "WPLZWQ58WQJdMSkmaHS", "b8kYzCoaW5GiCW4ug8kAgW", "yCogBsZdIZ3cPwv/", "W4KxWQCxWQtdTCkYluVdV33dUSkI", "qvNcUWSpCaKMFtKz", "yCoHW7eHW4VdQJBdUuqxWOO5zG", "qSkPhSkUW5y", "B1KEaL8VcSk3gd4rW53cTq", "iNBcKmklW6ZcP0LaChnHW6S", "mxVcUhOYWQvKW5JcJSo5WPVdRa8", "qfJcVaSejgyzAqiVsmkT", "WObeaeNcImkOArZcKa", "W6PNW4/cP8oyWQlcQG", "WOxcG8oEg0iHWPZdKXRdOmoS", "WQ5fdXBdNSoQia", "hmo/vCoUWOtdN3/dS0RcNCoQWOK", "W5X+veeFWQmRnLVdQgJcIG", "WPZdTSkiWR3cSmo1sI1UWPhdKbyO", "WPP2W4XAWR7dHmkScG"];
  return En = function() {
    return i;
  }, En();
}
async function kQ(i) {
  const { iv: n, key: t, message: e } = await hB(i);
  function A(a, s, B, I, c) {
    return hA(B - 982, I);
  }
  const o = await bQ(t), r = {};
  function g(a, s, B, I, c) {
    return hA(s - -203, B);
  }
  return r[g(162, 152, "p%E*")] = o, r.iv = n, r[A(1326, 1323, 1324, "NgF[") + "ge"] = e, r;
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return tA(a - -546, c);
  }
  function e(a, s, B, I, c) {
    return tA(B - 836, c);
  }
  const A = i();
  function o(a, s, B, I, c) {
    return tA(B - -319, I);
  }
  function r(a, s, B, I, c) {
    return tA(I - -110, B);
  }
  function g(a, s, B, I, c) {
    return tA(a - 700, s);
  }
  for (; ; )
    try {
      if (-parseInt(t(-340, -324, -345, -332, "$I15")) / 1 * (parseInt(g(891, "TxyH", 891, 892, 882)) / 2) + -parseInt(e(1027, 1044, 1030, 1012, "u^t4")) / 3 * (parseInt(e(1003, 1005, 1016, 1009, "U3R)")) / 4) + -parseInt(o(-144, -129, -127, "MzYN", -110)) / 5 * (-parseInt(g(901, "SvLq", 892, 903, 886)) / 6) + parseInt(g(909, "H(Z@", 901, 920, 925)) / 7 + -parseInt(t(-351, -352, -366, -340, "TD$G")) / 8 * (-parseInt(e(1020, 1006, 1019, 1017, "zNjC")) / 9) + -parseInt(e(1036, 1020, 1035, 1025, "sosE")) / 10 + -parseInt(r(90, 82, "zcRe", 98, 85)) / 11 * (parseInt(t(-359, -357, -356, -344, "s6Y]")) / 12) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(xn, -29 * 47951 + 1346928 + 802140);
function tA(i, n) {
  i = i - (92 + -14 * 565 + -1 * -7997);
  const t = xn();
  let e = t[i];
  if (tA.oSaOlN === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    tA.TVwahh = a, tA.mDcSZn = {}, tA.oSaOlN = !0;
  }
  const o = t[-2155 + -2155 * -1], r = i + o, g = tA.mDcSZn[r];
  return g ? e = g : (tA.hNHamK === void 0 && (tA.hNHamK = !0), e = tA.TVwahh(e, n), tA.mDcSZn[r] = e), e;
}
async function SQ(i) {
  function n(a, s, B, I, c) {
    return tA(a - -868, B);
  }
  function t(a, s, B, I, c) {
    return tA(B - -946, I);
  }
  function e(a, s, B, I, c) {
    return tA(B - 548, a);
  }
  const A = new Uint8Array(i);
  function o(a, s, B, I, c) {
    return tA(I - 530, c);
  }
  function r(a, s, B, I, c) {
    return tA(I - 101, a);
  }
  const g = await window[t(-752, -776, -762, "[Lrq") + "o"][t(-742, -761, -753, "F5]$") + "e"][e("qreP", 727, 738) + "t"](r("H(Z@", 292, 276, 280), A);
  return Array[t(-762, -756, -764, "[E6A")](new Uint8Array(g))[t(-741, -746, -739, "x^[I")]((a) => a[n(-656, -667, "CP8O") + o(707, 718, 724, 711, "XE(Y")](-1 * 4612 + -10 * -660 + -1972 * 1)[r("tD^u", 293, 292, 301) + n(-671, -664, "H22m")](2, "0"))[r("sosE", 303, 307, 314)]("");
}
function xn() {
  const i = ["tSk2fWxcPG", "qmo+W5KWWQRcPNiKWO7dN2xcGG", "C8oYnSoKWQxdGMBdLuvoWRO2", "W7RcMCkUWPKLcCoJb8kS", "WPK3WQhcRuJdICkwkNBdSx96WOm", "W6JdHcpcP8o9gSkab8o6WPm3WQq", "zclcLmoUAM/cV8ozaCkf", "WPL5WQG", "C0RcJhb3kr7dSq", "hmonxfH2W7WoW7bNuqqvW7C", "FwBcVczrW7ddHCkVumoliq", "W7JcM8oYWQqgmmoMfG", "W4FcKaxdSYO", "WQ7cT3xcQW", "DSkZk0b+", "WPdcPv1gW70BheBcJdFcNa", "W69GWOy", "WQtdQ8kEW40", "W5GRW7/cICkVmCoQBKi", "WPRdImojW57dKG", "zCkbx3ldHSk5omoIW6WNvI7cGa", "W4/cM8kqW6dcIHxdUSkEW5bE", "W7JcMSkTW651umkAgmkyWRddJmkMCG", "C0/dNdWktwtdUrpdNmkAWPa9", "mCoVWRayWRubW4tcQeC", "WOHfcJvI", "w8oJWPTFnYtcRXZdTq", "W5alW4/dJbCGBL0", "oeVcP8kmWQS", "WRifsvORWRNcONNcQq", "zCkeuhtdG8k4z8obW7WuwIu", "W4JcJCkbW6/dG2znW6Od", "kYhdVG", "WQJcUxNcIgijBvS", "W7FdRItdS2/dVMHKcwG2W6ldVW"];
  return xn = function() {
    return i;
  }, xn();
}
function UA(i, n) {
  i = i - (-2360 + -2689 * -1 + 74);
  var t = ln(), e = t[i];
  if (UA.yXrHEb === void 0) {
    var A = function(s) {
      for (var B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", c = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        c += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(c);
    }, o = function(s, B) {
      var I = [], c = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    UA.jbzoAQ = o, UA.ZoHAYh = {}, UA.yXrHEb = !0;
  }
  var r = t[-3837 + 2981 * 1 + 856], g = i + r, a = UA.ZoHAYh[g];
  return a ? e = a : (UA.FIhvPv === void 0 && (UA.FIhvPv = !0), e = UA.jbzoAQ(e, n), UA.ZoHAYh[g] = e), e;
}
(function(i, n) {
  var t = i();
  function e(a, s, B, I, c) {
    return UA(I - -863, c);
  }
  function A(a, s, B, I, c) {
    return UA(a - -196, c);
  }
  function o(a, s, B, I, c) {
    return UA(I - -918, s);
  }
  function r(a, s, B, I, c) {
    return UA(B - 537, c);
  }
  for (; ; )
    try {
      var g = parseInt(A(209, 209, 216, 207, "ovVU")) / 1 * (-parseInt(r(948, 961, 958, 968, "!t)i")) / 2) + parseInt(e(-463, -471, -451, -459, "E2G6")) / 3 + -parseInt(e(-441, -448, -449, -451, "$2OH")) / 4 * (parseInt(o(-510, "avu&", -492, -501, -505)) / 5) + -parseInt(o(-505, "GZ8[", -512, -507, -504)) / 6 * (parseInt(A(230, 238, 228, 230, "[Y0j")) / 7) + -parseInt(e(-448, -432, -440, -443, "!t)i")) / 8 * (parseInt(o(-494, "rS4L", -515, -505, -512)) / 9) + -parseInt(e(-464, -463, -460, -457, "YE8g")) / 10 * (parseInt(e(-458, -451, -455, -447, "2P(5")) / 11) + parseInt(o(-490, "uL1e", -493, -499, -499)) / 12;
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ln, -1330437 + -1 * -1781347);
function ln() {
  var i = ["W6NcLXNdNCkfW6xcNaxdSCoGWOy", "WQyOkGbSWOxcTCk2cIO", "pM7dUmkSWOhdQeZcOG", "xqFcIuZdSmoyWRTxW4/cOYhcUa", "W6tcVfK7W4FdMmo1vq", "xaxdPbdcOCkeWOzb", "WPldR8oMW54jWOxcHg4jWOtdTmkZCq", "umoYW6RdIZWhc8kJlCku", "bmk8WQZdL1b1yG", "WQeOlhrUWP3cQ8keiW", "Fmo5W5ddGsjGWQrzpY3dOCkafWC", "twuFWRSRW5CFWO3dH8ocWOy", "twD8W6DnW7iIWRq", "Bt/dOSktFSobCbldNCkRW4u", "cLBcQIRcNSoIWQG", "W5vXtSoMDmk9a2iwWOLUh8kBW6K", "WPFdQSoNW5WeWOBdPxSmWPldGmkF", "W7/dVtddUsH/WQZdV8kyWPy9WO4", "W5mNW4fjW77cQgBdIW", "BZ7dOSkCDCk/ocBdNmk8W6C3Fa", "WPhdQ8oKW54hW73dPg08WORdLG", "DCkiW5NdJgy+WONdIHq", "W5eHWQuFWPRdTN/dKmo/W4BdUHi", "wx5+f8kmWQXtfW"];
  return ln = function() {
    return i;
  }, ln();
}
async function ps(i) {
  const { Image: n } = ot, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw w.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function GQ(i) {
  const { VideoStream: n } = ot, t = n.verify(i);
  if (t) throw w.fromError(t);
  return n.create(i);
}
async function NQ(i) {
  const { v4: { Metadata: n } } = ot, t = { ...i };
  t.platform = ot.Platform.WEB, t.componentVersion = "8.0.2";
  const e = t, A = n.verify(e);
  if (A) throw w.fromError(A);
  return n.create(e);
}
async function RQ(i) {
  const { Content: n } = ot, { iv: t, key: e, message: A } = await kQ(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: EC, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw w.fromError(r);
  const g = n.create(o);
  return n.encode(g).finish();
}
function vQ(i) {
  const { Blob: n } = ot.v4, t = n.verify(i);
  if (t) throw w.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function FQ(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e?.map(({ brand: g, version: a }) => ({ name: g, version: a })) };
}
async function MQ({ image: i, metadata: n, video: t }) {
  const { PalmContent: e } = ot.v4, A = await ps(i), o = await NQ(n), r = t && GQ(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.image = A, a.metadata = o, a.video = g;
  const s = a, B = e.verify(s);
  if (B) throw w.fromError(B);
  const I = e.create(s), c = {};
  return c.palmContent = I, vQ(c);
}
async function WQ(i) {
  const n = await MQ(i);
  return RQ(n);
}
function LQ({ controller: i }) {
  const { captureMode: n, onComplete: t, sessionToken: e } = FI(), A = ye(({ candidateSelectionImages: g, imageData: a, protoMessage: s }) => {
    sQ(xI.PALM, g), t(a, s);
  }, [t]), o = ye(({ processedImage: g }) => {
    const a = {};
    a.code = g.instructionCode, a.isEscalated = g.isEscalated, MI(pe.INSTRUCTION_CHANGED, a), i && rB(pe.DETECTION_CHANGED, g.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
  }, [i]), r = {};
  return r.captureMode = n, r.controller = i, r.createProtoMessage = WQ, r.onCapture = A, r.onDetection = o, r.sessionToken = e, r.customEvent = pe, r.fallbackInstruction = XA.PALM_NOT_PRESENT, r.instructionCodeMap = XA, r.checkToInstructionCodeMap = $c, jB(r);
}
const OQ = 2e3;
class JQ {
  duration;
  constructor(n) {
    this.duration = n ?? OQ;
  }
  candidateSelectionTime = 12026 + -859 * 14;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > -4 * -764 + -8 * 776 + 3152;
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
    this.candidateSelectionTime = 1 * 8024 + -4966 + -3058, this.candidateSelectionImages = [];
  }
}
const UQ = async () => WebAssembly.validate(new Uint8Array([4 * -684 + -683 * -3 + 687, -3371 * -1 + 1687 + -11 * 451, -1 * 7333 + 1 * 9347 + -1899, -2110 + 1 * -8573 + 5396 * 2, -7433 * -1 + 1 * 578 + -9 * 890, 0, -2065 + 1 * 8726 + -1 * 6661, 1440 + 7 * 643 + -5941, 4 * -327 + -5380 + -1 * -6689, 5, -4802 + -7 * -307 + -1 * -2654, -1 * -3687 + -8911 + 1064 * 5, 10002 + 3334 * -3, -653 * 5 + 4410 + 1144 * -1, 123, 668 + -1 * -6779 + -7444, 3 * -3127 + 3553 * -1 + 1078 * 12, 3257 + 3 * -2729 + -1 * -4931, 2480 + -7199 * 1 + 4719, 15170 + -1516 * 10, 10, -4716 + 3931 * -2 + 3 * 4193, 6752 + -2248 * 3, 0, -7727 * -1 + -9463 * -1 + 685 * -25, 0, 583 + 1 * 3533 + 1 * -3863, -4078 + 4093 * 1, 2649 * 1 + -3930 + 1534, 447 * -11 + -4688 + -313 * -31, 1069 * 1 + 4 * 848 + -4450]));
function YQ() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-598 * 3 + 1654 + 156);
}
function PQ() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = YQ();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function TQ(i) {
  return i > 6e4 ? ">1m" : "" + i;
}
function HQ(i) {
  return i > 10 ? ">10" : "" + i;
}
const _Q = (i) => i ? i <= 2 * -978 + 3926 + -1969 * 1 ? Math.round(i * (-865 * -5 + 1031 + 2668 * -2)) / (1899 * 4 + 6767 * -1 + 1 * -809) : Math.round(i / 50) * (-4121 + 4171 * 1) : 9043 + 4 * -1417 + -3375;
function KQ(i) {
  return i ? Math.round(i / (1 * 7637 + -1424 + -3713)) * (-664 + 1582 * 2) : 12431 + -31 * 401;
}
const jQ = (i) => i ? Math.round(i / (-1373 * 1 + 3082 * 1 + -1 * 1699)) * (16 * 293 + -9253 + 4575) : 0;
function qQ(i) {
  return i !== sA.RUNNING ? jo.VISIBLE : jo.VISIBLE_WITH_MASK;
}
async function VQ() {
  return await UQ() ? ua.SIMD : ua.NO_SIMD;
}
class ys {
  constructor(n, t, e, A, o, r, g, a, s, B, I, c) {
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = g, this.samVersion = a, this.instructionEscalation = s, this.sessionToken = B, this.analytics = I, this.transactionCounting = c;
  }
  isRunning = !0;
  #A = Date.now();
  fpsOfAllImages = new DI(310 * -10 + 4200 + -1070);
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    const e = Date.now(), A = Zo(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - this.#A, facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await VQ() };
    _t() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !At() }), this.analytics?.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: mt(Zo(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
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
    const A = e, o = await yC(n), r = await this.prepareDetectionMetadata(n, t), g = this.cameraService.videoRecorder?.getRecording(), a = {};
    a.image = o, a.metadata = r, a.video = g;
    const s = await this.createProtoMessage(a), B = {};
    B.detection = t, B.imageResolution = A;
    const I = {};
    I.image = o, I.data = B;
    const c = I, E = {};
    return E.imageData = c, E.metadata = r, E.protoMessage = s, E;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = vC(), o = await FC(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await FQ(A, o) }, g = {};
    return g.sessionToken = this.sessionToken, g.web = r, g;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = SI(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await wC(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const s = a, B = await ps(g), I = {};
    return I.image = B, I.topLeftCorner = s, I;
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
    await Ui(Math.max(ha.max - n, ha.min));
  }
}
class ZQ extends ys {
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
      throw t instanceof Error ? w.fromCameraError(t) : w.fromError(t);
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
    else throw new w("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: n, takenPhoto: t }) {
    const e = this.getDetectionEndTime(t.timestamp), A = mt((471 * -14 + -7 * -770 + 2204) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = t.image.width, o.height = t.image.height;
    const r = o, g = this.getInvalidInstructions(n.validationResult, this.checkToInstructionCodeMap), a = {};
    a.isNewDetectionValid = n.isValid, a.newInvalidInstruction = g[97 + 1 * 2099 + -2196];
    const s = this.getInstructionCode(a), B = this.collectAndEscalate(s);
    return { processedImage: { detection: n.detection, instructionCode: s, isEscalated: B, invalidValidators: g, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: e, fps: A, avgFps: mt(Zo(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode({ isNewDetectionValid: n, newInvalidInstruction: t }) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && n ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && n ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class ms {
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
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.createProtoMessage) throw new w("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new w("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new w("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new w("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new w("FallbackInstruction is required");
    if (!this.samVersion) throw new w("SamVersion is required");
  }
}
class zQ extends ms {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new w("instructionCodeMap is required");
    if (!this.candidateSelection) throw new w("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new ZQ(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class XQ extends ys {
  #A = void 0;
  #e;
  constructor(...n) {
    super(...n), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(Vn).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(la.REQUEST_CAPTURE, this.#e);
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
    return this.#A ? this.#A === Vn.FIRST_FRAME ? !0 : this.#A === Vn.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? w.fromCameraError(t) : w.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    this.transactionCounting?.trackTransaction(), this.trackCaptureProcess(t, n);
    const e = {};
    e.canvasImage = n, e.detection = t, e.candidateSelectionImages = [], await this.onCapture(e), this.#A = void 0;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = mt((7246 + -3 * -2186 + -3201 * 4) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[0]), s = this.collectAndEscalate(a), B = {};
    return B.detection = t.detection, B.instructionCode = a, B.invalidValidators = g, B.isInCandidateSelection = !1, B.isEscalated = s, { processedImage: B, detectionTime: e, fps: A, avgFps: mt(Zo(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(la.REQUEST_CAPTURE, this.#e);
  }
}
class $Q extends ms {
  build() {
    return this.validateDependencies(), new XQ(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class AE {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: g, fallbackInstruction: a, imageProcessor: s, instructionCodeMap: B, instructionEscalation: I, onCaptureCallback: c, onDetectionCallback: E, samVersion: x, sessionToken: Q, transactionCounting: d } = t;
    switch (n) {
      case Mi.AUTO_CAPTURE:
        return new zQ().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setInstructionCodeMap(B).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(g).setOnCaptureCallback(c).setOnDetectionCallback(E).setSamVersion(x).setInstructionEscalation(I).setSessionToken(Q).setAnalytics(e).setTransactionCounting(d).build();
      case Mi.WAIT_FOR_REQUEST:
        return new $Q().setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(g).setOnCaptureCallback(c).setOnDetectionCallback(E).setSamVersion(x).setInstructionEscalation(I).setSessionToken(Q).setAnalytics(e).setTransactionCounting(d).build();
      default:
        throw new w("Invalid detection type: " + n);
    }
  }
}
const ws = /* @__PURE__ */ Symbol("Comlink.proxy"), eE = /* @__PURE__ */ Symbol("Comlink.endpoint"), Ds = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), Bi = /* @__PURE__ */ Symbol("Comlink.finalizer"), Lo = /* @__PURE__ */ Symbol("Comlink.thrown"), bs = (i) => typeof i == "object" && i !== null || typeof i == "function", tE = {
  canHandle: (i) => bs(i) && i[ws],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return Ss(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), Ns(i);
  }
}, oE = {
  canHandle: (i) => bs(i) && Lo in i,
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
}, ks = /* @__PURE__ */ new Map([
  ["proxy", tE],
  ["throw", oE]
]);
function nE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function Ss(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!nE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(Ze);
    let s;
    try {
      const B = g.slice(0, -1).reduce((c, E) => c[E], i), I = g.reduce((c, E) => c[E], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          B[g.slice(-1)[0]] = Ze(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(B, a);
          break;
        case "CONSTRUCT":
          {
            const c = new I(...a);
            s = sE(c);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: c, port2: E } = new MessageChannel();
            Ss(i, E), s = IE(c, [c]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      s = { value: B, [Lo]: 0 };
    }
    Promise.resolve(s).catch((B) => ({ value: B, [Lo]: 0 })).then((B) => {
      const [I, c] = fn(B);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), c), r === "RELEASE" && (n.removeEventListener("message", e), Gs(n), Bi in i && typeof i[Bi] == "function" && i[Bi]());
    }).catch((B) => {
      const [I, c] = fn({
        value: new TypeError("Unserializable return value"),
        [Lo]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), c);
    });
  }), n.start && n.start();
}
function iE(i) {
  return i.constructor.name === "MessagePort";
}
function Gs(i) {
  iE(i) && i.close();
}
function Ns(i, n) {
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
  }), or(i, t, [], n);
}
function lo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Rs(i) {
  return ct(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    Gs(i);
  });
}
const dn = /* @__PURE__ */ new WeakMap(), un = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (dn.get(i) || 0) - 1;
  dn.set(i, n), n === 0 && Rs(i);
});
function rE(i, n) {
  const t = (dn.get(n) || 0) + 1;
  dn.set(n, t), un && un.register(i, n, i);
}
function aE(i) {
  un && un.unregister(i);
}
function or(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (lo(A), g === Ds)
        return () => {
          aE(o), Rs(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = ct(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(Ze);
        return a.then.bind(a);
      }
      return or(i, n, [...t, g]);
    },
    set(r, g, a) {
      lo(A);
      const [s, B] = fn(a);
      return ct(i, n, {
        type: "SET",
        path: [...t, g].map((I) => I.toString()),
        value: s
      }, B).then(Ze);
    },
    apply(r, g, a) {
      lo(A);
      const s = t[t.length - 1];
      if (s === eE)
        return ct(i, n, {
          type: "ENDPOINT"
        }).then(Ze);
      if (s === "bind")
        return or(i, n, t.slice(0, -1));
      const [B, I] = og(a);
      return ct(i, n, {
        type: "APPLY",
        path: t.map((c) => c.toString()),
        argumentList: B
      }, I).then(Ze);
    },
    construct(r, g) {
      lo(A);
      const [a, s] = og(g);
      return ct(i, n, {
        type: "CONSTRUCT",
        path: t.map((B) => B.toString()),
        argumentList: a
      }, s).then(Ze);
    }
  });
  return rE(o, i), o;
}
function gE(i) {
  return Array.prototype.concat.apply([], i);
}
function og(i) {
  const n = i.map(fn);
  return [n.map((t) => t[0]), gE(n.map((t) => t[1]))];
}
const vs = /* @__PURE__ */ new WeakMap();
function IE(i, n) {
  return vs.set(i, n), i;
}
function sE(i) {
  return Object.assign(i, { [ws]: !0 });
}
function fn(i) {
  for (const [n, t] of ks)
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
    vs.get(i) || []
  ];
}
function Ze(i) {
  switch (i.type) {
    case "HANDLER":
      return ks.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function ct(i, n, t, e) {
  return new Promise((A) => {
    const o = cE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function cE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const CE = "SAM v1.50.5 for idcards";
class BE {
  constructor(n, t, e, A, o, r, g) {
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = g;
  }
  isDetectorInitialized = !1;
  samVersion = null;
  detection;
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    At() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new w("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    wr.warn(`
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
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: g, instructionCodeMap: a, onCaptureCallback: s, onDetectionCallback: B, sessionToken: I, transactionCounting: c } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: c, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: g, instructionCodeMap: a, checkToInstructionCodeMap: o, sessionToken: I, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: s, onDetectionCallback: B, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new w("Detection not initialized");
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
    return "" + t.replace(pI, "") + n;
  }
}
class QE {
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
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new w("AssetsDirectoryPath is required");
    if (!this.detector) throw new w("Detector is required");
    if (!this.compatibleSamVersion) throw new w("CompatibleSamVersion is required");
    if (!this.validationService) throw new w("ValidationService is required");
    if (!this.detectionFactory) throw new w("DetectionFactory is required");
    if (!this.candidateSelection) throw new w("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class EE {
  detectionRecord = [];
  imagesWithTimestampForDuplicateDetection = new DI(QC);
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / dC, A = e / (-2362 * -1 + -6221 + 3861), o = n.length / (-4925 + -4 * 1457 + 10755), r = n.slice(o - A, o + A), g = await SQ(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: SI(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = uC(n), r = this.validationService.validateDetectedObject(o, t);
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
class xE {
  thresholds = null;
  getThresholds() {
    if (!this.thresholds) throw new w("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Fs extends BE {
  constructor(n, t, e, A, o, r, g, a) {
    super(A, o, r, g, e, n, a), this.detectionFactory = n, this.detector = t;
  }
  detector;
  async init() {
    await super.init();
  }
  stopDetectionLoop() {
    super.stopDetectionLoop();
    var n = {};
    n.code = this.detection?.["fallbackInstruction"], MI(pe.INSTRUCTION_CHANGED, n, iC);
  }
}
class lE extends QE {
  build() {
    return this.validateDependencies(), new Fs(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
const dE = "/dot-assets/palm/dot-8edVQFhz.js";
class uE extends EE {
  className = "PalmImageProcessor";
  detector;
  validationService;
  constructor(n, t) {
    super(), this.detector = n, this.validationService = t;
  }
  optimizeImageBeforeDetection(n) {
    const t = zo(n), e = kI(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n);
    let A = await this.detector.detect(e.data, e.resolution);
    A = GC(A, zo(n)), A = NC(A, n);
    const o = {};
    return o.image = n, o.timestamp = t, o.imageData = e.data, o.detectedObject = A, this.processDetectedObject(o);
  }
}
class fE {
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
class Fe {
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
const hE = "isNotDim";
class pE extends Fe {
  #A;
  constructor(n, t) {
    super(hE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const yE = "isNotSmall";
class mE extends Fe {
  #A;
  constructor(n, t) {
    super(yE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const wE = "isNotBright";
class DE extends Fe {
  #A;
  constructor(n, t) {
    super(wE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const bE = "isNotLarge";
class kE extends Fe {
  #A;
  constructor(n, t) {
    super(bE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const SE = "isPresent";
class GE extends Fe {
  #A;
  constructor(n, t) {
    super(SE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const NE = "isSharp";
class RE extends Fe {
  #A;
  constructor(n, t) {
    super(NE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const vE = "isTemplateExtractionQualityHighEnough";
class FE extends Fe {
  #A;
  constructor(n, t) {
    super(vE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ME = "isNotOutOfBounds";
class WE extends Fe {
  #A;
  #e;
  constructor(n, t, e) {
    super(ME, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = GI(this.#e, this.threshold, zo(this.#e)), { bottomLeft: t, bottomRight: e, topLeft: A, topRight: o } = this.#A, r = {};
    return r.topLeft = A, r.topRight = o, r.bottomLeft = t, r.bottomRight = e, SC(r, n);
  }
}
class LE {
  static getPalmValidationInstance(n, t, e) {
    return new fE([new GE(n.confidence.min, t.confidence), new WE(n.edgeDistanceToImageShorterSideRatio.min, t, e), new mE(n.size.min, t.smallestEdge), new RE(n.sharpness.min, t.sharpness), new pE(n.brightness.min, t.brightness), new DE(n.brightness.max, t.brightness), new kE(n.size.max, t.smallestEdge), new FE(n.templateExtractionQuality.min, t.templateExtractionQuality)]);
  }
}
class OE extends xE {
  className = "PalmValidationService";
  validateDetectedObject(n, t) {
    const e = LE.getPalmValidationInstance(this.getThresholds(), n, t);
    return e.validate(), e;
  }
}
function JE() {
  const { handleError: i } = ee(), { assetsDirectoryPath: n, autoCapture: { candidateSelectionDurationMillis: t } } = FI(), { thresholds: e } = us(), [A, o] = IA();
  K(() => {
    let g;
    async function a() {
      const s = Fs.getWorkerPath(dE, n), B = {};
      B.type = "module";
      const I = new Worker(new URL(s, import.meta.url), B), c = Ns(I);
      g = await new c();
      const E = new OE(), x = new uE(g, E), Q = new AE(), d = new JQ(t), f = new lE().setDetector(g).setValidationService(E).setImageProcessor(x).setAssetsDirectoryPath(n).setCompatibleSamVersion(CE).setDetectionFactory(Q).setCandidateSelection(d).build();
      try {
        await f.init(), o(f);
      } catch (h) {
        if (h instanceof Error) {
          i(w.fromError(h));
          return;
        }
      }
    }
    return a(), () => {
      g && g[Ds]();
    };
  }, [i, n, t]), K(() => {
    A && A.setThresholds(e);
  }, [A, e]);
  const r = {};
  return r.controller = A, r;
}
function UE() {
  const { isCameraReady: i } = ee(), { sunfish: n } = Ao(), { controller: t } = JE(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = LQ({ controller: t });
  return /* @__PURE__ */ m(IQ, { cameraResolution: e, detectionDetails: A, shouldMirror: o, children: /* @__PURE__ */ m(
    qc,
    {
      ref: r,
      $isImageMirror: o,
      $isVisible: n && i,
      autoPlay: !0,
      id: rC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function YE({ children: i }) {
  const n = Ae(null);
  return cB(n, pe.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ m(jc, { ref: n, children: i });
}
function PE(i) {
  const { handleAppStateChange: n, setIsCameraReady: t } = ee();
  return VB({
    onBlur: () => {
      t(!1), n(sA.LOADING);
    },
    onFocus: () => {
      t(!0), n(sA.RUNNING);
    }
  }), /* @__PURE__ */ m(YE, { children: /* @__PURE__ */ m(oB, { configuration: i, children: /* @__PURE__ */ m(tQ, { configurationThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ m(UE, {}) }) }) });
}
function TE({
  cameraConfiguration: i,
  children: n
}) {
  const t = i?.facingMode ?? Fn() ? Vt.BACK : Vt.FRONT;
  return /* @__PURE__ */ m(
    HB,
    {
      cameraConfiguration: { ...i, facingMode: t },
      customEvent: pe,
      children: n
    }
  );
}
function HE({ initAppState: i, onError: n }) {
  const [t, e] = IA(i), [A, o] = IA(), [r, g] = IA(!1), [a, s] = IA(!1), B = Ko.Lower, I = Ae(n);
  K(() => {
    I.current = n;
  }, [n]);
  const c = {};
  return c.redfin = B, c.appState = t, c.setAppState = e, c.error = A, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = g, c.onErrorRef = I, c.firstRunningDone = a, c.setFirstRunningDone = s, c;
}
function _E({ onError: i }) {
  const n = {};
  n.initAppState = sA.LOADING, n.onError = i;
  const { appState: t, redfin: e, error: A, firstRunningDone: o, isCameraReady: r, onErrorRef: g, setAppState: a, setError: s, setFirstRunningDone: B, setIsCameraReady: I } = HE(n), c = qQ(t), E = ye((d) => {
    const f = {};
    f.appState = sA.ERROR, f.error = d, wa(pe.STATE_CHANGED, f), I(!1), g.current(d), s(d), a(sA.ERROR);
  }, [I, g, s, a]), x = ye((d) => {
    const f = {};
    f.appState = d, wa(pe.STATE_CHANGED, f), a(d);
  }, [a]), Q = {};
  return Q.appState = t, Q.redfin = e, Q.freemiumOverlayState = c, Q.isCameraReady = r, Q.setIsCameraReady = I, Q.handleAppStateChange = x, Q.handleError = E, Q.error = A, Q.firstRunningDone = o, Q.setFirstRunningDone = B, Q;
}
const Ct = {};
Ct.AUTO_CAPTURE = "auto_capture", Ct.CAPTURE_FINISHED = "capture_finished", Ct.CAPTURE_STARTED = "capture_started", Ct.ESCALATION_TRIGGER = "escalation_trigger", Ct.LONG_CAPTURE_SMILE = "long_capture_smile";
const hn = Ct, ke = {};
ke.PALM = "palm_auto_capture", ke.SMILE = "smile_liveness", ke.DOCUMENT = "document_auto_capture", ke.MAGNIFEYE = "magnifeye_liveness", ke.EYE_GAZE = "eye_gaze_liveness", ke.FACE = "face_auto_capture", ke.MULTI_RANGE = "multi_range_liveness";
const KE = ke;
class jE {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = yI(), this.applicationId = mI(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(hn.CAPTURE_STARTED));
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
const uo = new jE();
class qE {
  posthog = uo;
  component;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: yI(), ...n };
  }
  init(n, t) {
    if (mr()) return;
    const e = PQ(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, uo.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    uo.sendEvent(hn.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    uo.sendEvent(hn.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -5791 + 7 * 863 ? jQ(n) : _Q(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: HQ(o || -2 * 2417 + -9136 + 13970), firstHiccup: TQ(KQ(r)), optCheckDetails: e?.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class VE extends qE {
  constructor() {
    super(KE.PALM);
  }
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: g, instructionSet: a, isSystemStable: s, performanceCheckup: B }) {
    if (!A) return;
    const I = this.parsePerformanceCheckup(t, B), c = { facingMode: r, confidence: A.confidence, camera: o, imageResolution: g.width + "x" + g.height, averageFps: n, durationMs: e, instructionSet: a, isSystemStable: s, ...I }, E = this.createSegmentation(c);
    this.posthog.sendEvent(hn.CAPTURE_FINISHED, E);
  }
}
const ZE = new VE();
let F;
const fe = new Array(-2219 * 1 + 3798 + -1451).fill(void 0);
fe.push(void 0, null, !0, !1);
function nr(i) {
  return fe[i];
}
let se = 8514 + 3607 * -2 + 325 * -4, Jt = null;
function Oo() {
  return (Jt === null || Jt.byteLength === -8513 + 8513 * 1) && (Jt = new Uint8Array(F.memory.buffer)), Jt;
}
const Jo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, zE = typeof Jo.encodeInto == "function" ? function(i, n) {
  return Jo.encodeInto(i, n);
} : function(i, n) {
  const t = Jo.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function Zt(i, n, t) {
  if (t === void 0) {
    const g = Jo.encode(i), a = n(g.length, 1) >>> -6431 + -767 * 13 + 16402;
    return Oo().subarray(a, a + g.length).set(g), se = g.length, a;
  }
  let e = i.length, A = n(e, 4745 + 8 * -593) >>> -2 * -2695 + 3488 + -1 * 8878;
  const o = Oo();
  let r = 14 * 686 + 263 * -38 + 390;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 127) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 1927 * -2 + 6869 * 1 + -3015 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-4356 + -1511 * 1 + 5870), 1 * -5957 + 1967 + 3991) >>> 1334 * 6 + 173 + -8177;
    const g = Oo().subarray(A + r, A + e), a = zE(i, g);
    r += a.written, A = t(A, e, r, 1) >>> 0;
  }
  return se = r, A;
}
function Ms(i) {
  return i == null;
}
let Ut = null;
function re() {
  return (Ut === null || Ut.byteLength === 1 * 9059 + 1 * -1763 + -7296) && (Ut = new Int32Array(F.memory.buffer)), Ut;
}
let jt = fe.length;
function XE(i) {
  i < 1025 * -4 + -2201 + 6433 || (fe[i] = jt, jt = i);
}
function Ws(i) {
  const n = nr(i);
  return XE(i), n;
}
const ir = {};
ir.ignoreBOM = !0, ir.fatal = !0;
const Ls = typeof TextDecoder < "u" ? new TextDecoder("utf-8", ir) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ls.decode();
function pn(i, n) {
  return i = i >>> 2989 + -427 * 7, Ls.decode(Oo().subarray(i, i + n));
}
function rr(i) {
  jt === fe.length && fe.push(fe.length + (10152 + 1 * -10151));
  const n = jt;
  return jt = fe[n], fe[n] = i, n;
}
let Yt = null;
function Os() {
  return (Yt === null || Yt.byteLength === 0) && (Yt = new Uint32Array(F.memory.buffer)), Yt;
}
function ng(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Os();
  for (let A = -1 * 1385 + 8460 + 1 * -7075; A < i.length; A++)
    e[t / (423 * -19 + -7613 + -5218 * -3) + A] = rr(i[A]);
  return se = i.length, t;
}
function ig(i, n) {
  i = i >>> 13568 + 2 * -6784;
  const t = Os(), e = t.subarray(i / (-767 * 6 + 1644 + 2962), i / (4991 + -1 * -9278 + 951 * -15) + n), A = [];
  for (let o = 0; o < e.length; o++)
    A.push(Ws(e[o]));
  return A;
}
function $E(i, n) {
  const t = Zt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = se, A = Zt(n, F.__wbindgen_malloc, F.__wbindgen_realloc), o = se, r = F.is_mobile_supported(t, e, A, o);
  return Gr.__wrap(r);
}
const ar = {};
ar.register = () => {
}, ar.unregister = () => {
};
const rg = typeof FinalizationRegistry > "u" ? ar : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> 1 * 1557 + 3 * -1463 + 2832));
class Gr {
  static __wrap(n) {
    n = n >>> -9749 + -1414 * 7 + -3 * -6549;
    const t = Object.create(Gr.prototype);
    return t.__wbg_ptr = n, rg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 12799 + 1 * -12799, rg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = Ms(t) ? 0 : Zt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), g = se;
    const a = ng(e, F.__wbindgen_malloc), s = se, B = ng(A, F.__wbindgen_malloc), I = se, c = Zt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), E = se, x = F.licensevalidationresult_new(n, r, g, a, s, B, I, c, E);
    return this.__wbg_ptr = x >>> 673 * -1 + 4 * 1525 + -5427, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = re()[e / (-4109 + -5059 * -1 + 2 * -473) + 0], t = re()[e / (1 * -5594 + -4711 + 1 * 10309) + (351 * 7 + -776 + -1680)];
      let A;
      return n !== 4 * -1701 + -509 * 5 + -1 * -9349 && (A = pn(n, t).slice(), F.__wbindgen_free(n, t * (-9 * -819 + -705 + -6665), 1)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = re()[A / (6 * 848 + -9874 + 4790) + (1 * 1423 + -378 * 15 + 1 * 4247)], t = re()[A / 4 + (-1105 + -5503 * -1 + 4397 * -1)], e = ig(n, t).slice();
      return F.__wbindgen_free(n, t * (1482 + -9 * 518 + -796 * -4), -6889 + 1 * 6893), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(7234 * 1 + -9881 + -2663 * -1);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = re()[A / (7825 * 1 + -3300 + -4521) + 0], t = re()[A / (-5658 * 1 + -2 * -2039 + 1584) + (-271 * 2 + -976 * 6 + 6399)], e = ig(n, t).slice();
      return F.__wbindgen_free(n, t * (-9314 * -1 + -2505 + -6805 * 1), 1 * -3023 + -268 + -3295 * -1), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = re()[o / (1 * 7184 + -7923 + 743) + 0], A = re()[o / (9590 + -4 * -428 + -11298) + 1];
      return n = e, t = A, pn(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(16), F.__wbindgen_free(n, t, 1);
    }
  }
}
async function Ax(i, n) {
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
function ex() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = nr(t), A = typeof e == "string" ? e : void 0;
    var o = Ms(A) ? 0 : Zt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), r = se;
    re()[n / (1360 + 331 * 24 + -9300) + 1] = r, re()[n / (7872 + -2 * 3997 + 126) + 0] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    Ws(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = pn(n, t);
    return rr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return rr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return nr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(pn(n, t));
  }, i;
}
function tx(i, n) {
  return F = i.exports, Js.__wbindgen_wasm_module = n, Ut = null, Yt = null, Jt = null, F;
}
async function Js(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = ex();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Ax(await i, n);
  return tx(t, e);
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return lA(a - -906, I);
  }
  function e(g, a, s, B, I) {
    return lA(B - -489, I);
  }
  const A = i();
  function o(g, a, s, B, I) {
    return lA(s - -768, a);
  }
  function r(g, a, s, B, I) {
    return lA(B - 1, I);
  }
  for (; ; )
    try {
      if (parseInt(o(-456, "uij8", -448, -467, -430)) / 1 * (-parseInt(o(-409, "wxJd", -418, -423, -443)) / 2) + parseInt(e(-169, -177, -187, -171, "[sIs")) / 3 + parseInt(t(-588, -569, -589, -544, "zyEH")) / 4 + parseInt(o(-435, "yOT1", -453, -475, -463)) / 5 + -parseInt(r(318, 337, 326, 331, "qjHs")) / 6 * (parseInt(e(-180, -155, -174, -164, "[x1j")) / 7) + parseInt(r(343, 354, 337, 344, "kW)@")) / 8 * (parseInt(o(-442, "%u@0", -417, -426, -422)) / 9) + parseInt(t(-575, -577, -574, -569, "fH%)")) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(yn, 408672 + -52707 * -10 + -613004);
function ag(i, n, t, e, A) {
  return lA(n - 712, i);
}
function Qi(i, n, t, e, A) {
  return lA(n - -647, t);
}
function Mt(i, n, t, e, A) {
  return lA(i - -198, n);
}
function lA(i, n) {
  i = i - (1 * -9497 + -22 * 407 + 18766);
  const t = yn();
  let e = t[i];
  if (lA.guAatQ === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    lA.tSEKNH = a, lA.OeYRma = {}, lA.guAatQ = !0;
  }
  const o = t[0], r = i + o, g = lA.OeYRma[r];
  return g ? e = g : (lA.SxaVKZ === void 0 && (lA.SxaVKZ = !0), e = lA.tSEKNH(e, n), lA.OeYRma[r] = e), e;
}
function yn() {
  const i = ["umospqldQa", "DSoWWPNdMmkQWRikgI7dRmkEW54", "WODYB3NcTq", "z8kLW7JdVae", "z3jUyIa", "xxC2W6Lwl8oKmKfb", "W5vwuaJcSG", "C8opWQ92WQi7hG", "xtPWqSoZ", "W7RcHmoguCkvjCoHW4VdSWjC", "imkqW4tdQfq", "W5pdRZ1jW4u", "W4DahCowW7K", "zCo2W4VdSHe", "oSkWWQ3cQXfHWR80wmoU", "scxdOCoLWQnuWOi3WQ3cSmoNW7mb", "vK3dVZrZ", "W6LBze9f", "qtz5rCo9", "W4DphmonWQ0", "jdlcM8k6W7BdNCoLWOKjcW8ezW", "FSkllCoU", "WQKNWPz7cW", "W57dSI5dW48", "WR/dKCkedW", "sxNcU8ogFG", "xxq3WQT4nmoCd1m", "WP1mo35w", "WP8qWQHnWPa", "WQWVWOb3fq", "WRf4EbdcRJZdQd/cLf/cU8of", "v8ogWPhcQCoZ", "zSoEW5xdNsRdMSku", "W5bRaSolmL96tmkMdeXyW4i", "yuv8kmoJtYmrW5P4W4yo", "WR/cHh15WQT3WORcHCkb", "W7jtBuDO", "tSooWPBcRCoB", "W6ldKIT8WQW", "WRVcG3W2W7aqW63cHmkYoSkOWQ4W", "WRNdGCorWOmpW4xcGb/cHmot", "mgxcJ35h", "WOuEWQLfW7K", "WRtdG8kbBKq", "z0P8jCoNsxSaW55DW4SzW7W", "omoIW6RdR8oDW6H2W7hdR8oIW4q", "fI3dUCkyifFdTSohW7DIW4BdRq", "d8kAW5tdUmoHWRa4nSkDW5i", "yCkHW4NcICoZ", "W60KoK7dVG", "B8k8WPdcLuhcISoyWPVdPK5qu8kE"];
  return yn = function() {
    return i;
  }, yn();
}
function fo(i, n, t, e, A) {
  return lA(t - -129, e);
}
class ox {
  [fo(215, 208, 193, "P&nT") + Mt(165, "A[&$") + Mt(144, ")xKZ")] = !1;
  async [Qi(-293, -290, "pQbJ")](n) {
    function t(g, a, s, B, I) {
      return Mt(I - -501, a);
    }
    function e(g, a, s, B, I) {
      return fo(g - 252, a - 294, I - -708, s);
    }
    function A(g, a, s, B, I) {
      return Mt(s - -56, a);
    }
    function o(g, a, s, B, I) {
      return Qi(g - 52, g - 654, I);
    }
    function r(g, a, s, B, I) {
      return ag(B, g - -1420);
    }
    try {
      const g = n + (A(61, "(ggx", 72, 83, 69) + "/") + pa;
      await Js(g), this[o(371, 351, 359, 395, "&kkA") + A(74, "P&nT", 62, 65, 39) + o(360, 359, 365, 362, "sEH5")] = !0;
    } catch {
      this[r(-372, -350, -379, "tolJ") + r(-374, -349, -396, "yOT1") + t(-363, "AKyZ", -321, -321, -341)] = !1, console[A(105, "a#Bv", 106)](pa + (A(120, "p9k)", 94) + e(-466, -459, "AKyZ", -494, -472) + o(354, 339, 366, 351, "0yLD") + o(340, 318, 352, 344, "zyEH") + t(-361, "IzOb", -387, -392, -371) + e(-514, -512, "uij8", -512, -514) + r(-370, -352, -350, "GG!$") + o(346, 367, 367, 369, "wxJd") + o(361, 345, 380, 377, "fNsg") + t(-345, "y4Tk", -340, -342, -359) + e(-484, -502, "p9k)", -464, -482) + t(-390, "&kkA", -379, -397, -372) + t(-330, "XhK8", -350, -345, -353) + o(368, 386, 391, 366, "T13w") + "n."));
    }
  }
  [ag("wxJd", 1061) + Mt(154, "zDZR") + Qi(-326, -303, "fNsg") + "ed"]() {
    function n(e, A, o, r, g) {
      return fo(e - 31, A - 253, A - 133, o);
    }
    function t(e, A, o, r, g) {
      return fo(e - 322, A - 83, r - 612, e);
    }
    return this[n(318, 325, "sEH5") + n(326, 320, "P&nT") + t("0yLD", 817, 838, 842)];
  }
}
class Ei extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function le(i, n, t, e, A) {
  return H(A - -246, e);
}
function ne(i, n, t, e, A) {
  return H(i - 498, n);
}
(function(i, n) {
  var t = i();
  function e(s, B, I, c, E) {
    return H(B - 198, s);
  }
  function A(s, B, I, c, E) {
    return H(c - -975, B);
  }
  function o(s, B, I, c, E) {
    return H(I - -256, c);
  }
  function r(s, B, I, c, E) {
    return H(B - -291, c);
  }
  function g(s, B, I, c, E) {
    return H(c - 602, E);
  }
  for (; ; )
    try {
      var a = -parseInt(g(896, 860, 874, 857, "o9eR")) / 1 * (parseInt(g(836, 846, 849, 837, "Q@V8")) / 2) + -parseInt(e("t[EP", 457, 471, 459, 470)) / 3 + parseInt(e("TsKJ", 405, 367, 441, 379)) / 4 * (-parseInt(e("ih^4", 415, 409, 379, 442)) / 5) + -parseInt(A(-749, "o9eR", -694, -713, -714)) / 6 + parseInt(r(-115, -104, -72, "o9eR", -110)) / 7 + parseInt(e("!5X2", 442, 451, 447, 422)) / 8 * (parseInt(g(820, 861, 866, 853, "4vO5")) / 9) + parseInt(o(-11, 9, -6, "3M[y", -29)) / 10;
      if (a === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(mn, 240081 + 7189 * -11 + 569915);
function H(i, n) {
  i = i - (1699 * 3 + 5622 + -10532);
  var t = mn(), e = t[i];
  if (H.bhGMVN === void 0) {
    var A = function(s) {
      for (var B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", c = "", E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (var f = 0, h = I.length; f < h; f++)
        c += "%" + ("00" + I.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(c);
    }, o = function(s, B) {
      var I = [], c = 0, E, x = "";
      s = A(s);
      var Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (var d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    H.aGlFyF = o, H.CHdoRn = {}, H.bhGMVN = !0;
  }
  var r = t[1 * -2955 + -89 + 3044], g = i + r, a = H.CHdoRn[g];
  return a ? e = a : (H.VeVrih === void 0 && (H.VeVrih = !0), e = H.aGlFyF(e, n), H.CHdoRn[g] = e), e;
}
function ho(i, n, t, e, A) {
  return H(n - 619, A);
}
function Je(i, n, t, e, A) {
  return H(A - 210, n);
}
function mn() {
  var i = ["W7LPhJ7dHa", "w2f4nr8", "pSoer3xdNq", "WRL+DfRdRa", "yxFcO33cGq", "W4tcN10", "W71/lq", "WRDGF8kVDq", "z8oizMBdN17cPa", "ldBdIW", "WQzvW60", "WQ43WQVdG8oQ", "FCoPWOXHvq", "WP/dLvpdP8oZ", "hmouzKlcNwahWPBcISk9imoAjSkE", "s03cNHpdVmk4WOOehmkKvmolWOhcGG", "xmkemrFdVW", "W6hcJaNdISkGW43dLmkkmhD5v0NdMG", "dCkbjSkQcG", "WPzBW77cRG9ma8oiWP7cJ8kXEG", "W43cIeSXW5i", "nJa2WQmf", "WQuLWO3dHCoY", "W7L0W4NcL8kIwr9hWQK8jCocta", "WQZcUCojrSkKWRtdPW", "WQNdUuldINW", "WPjBW7lcOq9kq8oOWQpcO8kVsCoY", "lCkSa8ortq", "pSoiwhhdMG", "WPvDW7JcOaflsmo3WQhcOmk4v8o1", "WO/cHfRdQcq", "WRJdQvddKKC", "WQ5+BG", "CuNdHW", "WRVcPepcQr8", "W5VdHmkDW5G9", "WR/dNfS", "W7X9W6SzWOlcUCoW", "rvPbbmkxoNP+WRxdKsFdH8oZ", "WQZdQvddIMy", "W6ZcTMjuWQ8", "gqevD8oa", "WQldRuxdNxS", "W6JcHvPkW6K", "wmoaFmoHtLpcIZi4WPiAWQ8", "W5hdI1JdV8kl", "WRxdPYifW7rwWQq/owldU0KFma", "Emo+WOjMuW", "W63cUxby", "CwdcI8kGW54WaeacoI8Kfq", "W5tcLXpcUXH4WQHKE8oToxel", "WPRdKvi", "WOnFW5JcH1rHka", "WP7cUwNdVmoq", "C8oTWPL2sa", "W5ZdUqdcVKi", "W7dcPCozxCkX", "mt7dLG", "WOVdHK7dUSoP", "EhRdJSkOzJms", "W7xcOCoy", "W6JdPru", "WOTnW5TRW64", "WO/dSu/dQmo4", "WOhcJXJcU8oucaJdLCk+WQ8jWQ/dHa", "WQeHWP0", "W5PrW7pcGvW", "WRHHB3/dVq", "W44BWQRdTuW", "WQhdImoyW4BdUG", "W55pW7JcMKC", "WOxdLKxdV1W", "WR3dRupdKhO", "W7qxW53dMs4", "WRxdMa86WR94W5amq8obyCkdvW", "W4KBWPtdOfK", "WO7dKuddVCoV", "WOBdSv7dMCkIt24"];
  return mn = function() {
    return i;
  }, mn();
}
function nx(i, n, t, e, A) {
  return H(t - 288, A);
}
class gg {
  constructor(n) {
    function t(r, g, a, s, B) {
      return H(a - -155, r);
    }
    function e(r, g, a, s, B) {
      return H(B - -873, s);
    }
    this[t("bSlp", 60, 74) + o(163, "#lu)")] = n;
    function A(r, g, a, s, B) {
      return H(r - 649, B);
    }
    function o(r, g, a, s, B) {
      return H(r - -37, g);
    }
    try {
      this.#A = n[t("XdG[", 104, 93, 103, 81) + e(-660, -699, -663, "Litr", -680) + t("TsKJ", 24, 60, 50, 27)] && JSON[o(155, "lLwN", 193, 188, 150)](n[t("#lu)", 35, 42, 81, 44) + o(200, "Z2[#", 197, 189, 166) + A(839, 863, 835, 819, "QqQh")]), this.#e = n[A(852, 862, 866, 854, "Q@V8") + o(154, "VlJh", 145, 139, 191)];
    } catch (r) {
      console[o(169, "J276")](r);
    }
  }
  #A;
  #e;
  get [ne(718, "x)Nl") + "id"]() {
    function n(e, A, o, r, g) {
      return ne(g - -1408, r);
    }
    function t(e, A, o, r, g) {
      return ne(A - -631, e);
    }
    return this[t("SHhk", 121) + n(-685, -650, -623, "t[EP", -652)][n(-670, -641, -679, "o9eR", -677) + t("Krsq", 85)];
  }
  get [ne(726, "IweK") + "s"]() {
    function n(e, A, o, r, g) {
      return le(e - 366, A - 390, o - 232, A, g - -272);
    }
    function t(e, A, o, r, g) {
      return le(e - 420, A - 488, o - 36, e, r - -715);
    }
    return this[n(-274, "BBEV", -302, -276, -302) + t("J276", -780, -765, -763)][n(-297, "EA4I", -279, -278, -262) + "s"];
  }
  get [Je(434, "BBEV", 476, 478, 459) + Je(427, "uGal", 481, 456, 456)]() {
    function n(e, A, o, r, g) {
      return Je(e - 160, g, o - 114, r - 236, e - 70);
    }
    function t(e, A, o, r, g) {
      return ne(A - -1259, e);
    }
    return this[n(485, 458, 457, 461, "XdG[") + n(492, 473, 509, 489, "XdG[")][n(510, 493, 505, 495, "#lu)") + t("TsKJ", -516)];
  }
  get [Je(442, "QqQh", 487, 436, 449) + "b"]() {
    return this.#A;
  }
  get [Je(465, "#lu)", 472, 448, 471) + ne(740, "**2%")]() {
    return this.#e;
  }
  get [le(7, -27, -45, "**2%", -10) + ne(709, "4uCO") + ho(845, 850, 875, 840, "vb7e") + Je(470, "EA4I", 470, 449, 451)]() {
    function n(o, r, g, a, s) {
      return le(o - 4, r - 274, g - 275, a, o - 1110);
    }
    function t(o, r, g, a, s) {
      return le(o - 316, r - 146, g - 326, r, a - -241);
    }
    function e(o, r, g, a, s) {
      return le(o - 362, r - 213, g - 113, o, g - 969);
    }
    function A(o, r, g, a, s) {
      return ne(a - -967, o);
    }
    return !!this.#A?.[t(-257, "66RB", -281, -274) + t(-313, "BBEV", -291, -278)]?.[t(-250, "3M[y", -238, -235) + t(-302, "[Hz9", -314, -286) + e("IweK", 977, 947) + A("t[EP", -255, -241, -222) + n(1121, 1139, 1102, "!l2R") + t(-303, "D!Q2", -322, -299) + e("t[EP", 972, 946)];
  }
  get [nx(514, 567, 528, 548, "(u#&") + le(0, -39, -17, "o9eR", -20) + ho(864, 862, 830, 898, "]CoF") + Je(451, "YTR9", 411, 436, 437) + le(-14, -48, -28, "BBEV", -25) + le(-32, -30, -29, "k3EB", -52)]() {
    function n(o, r, g, a, s) {
      return ho(o - 193, o - -1297, g - 348, a - 296, r);
    }
    function t(o, r, g, a, s) {
      return ne(o - -280, g);
    }
    function e(o, r, g, a, s) {
      return ne(r - -81, o);
    }
    function A(o, r, g, a, s) {
      return ho(o - 324, o - 25, g - 324, a - 209, s);
    }
    return !!this.#A?.[t(452, 479, "BBEV") + e("yTPr", 636)]?.[A(833, 839, 831, 847, "#lu)") + e("Krsq", 631) + n(-440, "!5X2", -429, -434) + t(481, 500, "9uvj") + e("QqQh", 642) + e("MlS)", 616) + A(908, 907, 945, 871, "!5X2")];
  }
}
function cA(i, n, t, e, A) {
  return j(i - -793, A);
}
function CA(i, n, t, e, A) {
  return j(e - 104, A);
}
(function(i, n) {
  function t(a, s, B, I, c) {
    return j(B - 682, c);
  }
  const e = i();
  function A(a, s, B, I, c) {
    return j(c - -383, a);
  }
  function o(a, s, B, I, c) {
    return j(B - -375, c);
  }
  function r(a, s, B, I, c) {
    return j(c - 961, a);
  }
  function g(a, s, B, I, c) {
    return j(a - -386, I);
  }
  for (; ; )
    try {
      if (parseInt(g(38, 43, 47, "GGzK", 67)) / 1 + -parseInt(r("j$(^", 1109, 1253, 1015, 1131)) / 2 + -parseInt(r("5[45", 1335, 1410, 1341, 1277)) / 3 * (parseInt(o(-38, -179, -128, -135, "b4YV")) / 4) + -parseInt(t(1144, 1037, 1034, 924, "!7rd")) / 5 * (parseInt(A("j$(^", 67, -87, -14, -22)) / 6) + parseInt(r("GGzK", 1112, 1323, 1224, 1213)) / 7 + parseInt(r("5uVm", 1260, 1443, 1293, 1372)) / 8 + parseInt(r("hzY(", 1247, 1295, 1104, 1176)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, 568710);
function j(i, n) {
  i = i - (-3606 + -1253 * -3);
  const t = wn();
  let e = t[i];
  if (j.vsZVSZ === void 0) {
    var A = function(s) {
      const B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let I = "", c = "";
      for (let E = 0, x, Q, d = 0; Q = s.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? I += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = B.indexOf(Q);
      for (let E = 0, x = I.length; E < x; E++)
        c += "%" + ("00" + I.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(c);
    };
    const a = function(s, B) {
      let I = [], c = 0, E, x = "";
      s = A(s);
      let Q;
      for (Q = 0; Q < 256; Q++)
        I[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        c = (c + I[Q] + B.charCodeAt(Q % B.length)) % 256, E = I[Q], I[Q] = I[c], I[c] = E;
      Q = 0, c = 0;
      for (let d = 0; d < s.length; d++)
        Q = (Q + 1) % 256, c = (c + I[Q]) % 256, E = I[Q], I[Q] = I[c], I[c] = E, x += String.fromCharCode(s.charCodeAt(d) ^ I[(I[Q] + I[c]) % 256]);
      return x;
    };
    j.IExosB = a, j.XCFAPf = {}, j.vsZVSZ = !0;
  }
  const o = t[-977 * 4 + 6191 * -1 + 1 * 10099], r = i + o, g = j.XCFAPf[r];
  return g ? e = g : (j.OCmcPF === void 0 && (j.OCmcPF = !0), e = j.IExosB(e, n), j.XCFAPf[r] = e), e;
}
function mA(i, n, t, e, A) {
  return j(i - 260, t);
}
function q(i, n, t, e, A) {
  return j(A - -812, n);
}
function OA(i, n, t, e, A) {
  return j(n - 805, A);
}
class ix {
  constructor(n) {
    function t(A, o, r, g, a) {
      return j(A - -525, o);
    }
    function e(A, o, r, g, a) {
      return j(o - 382, A);
    }
    this[e("5[45", 566) + t(-198, "IFrD") + "d"] = n;
  }
  [q(-477, "j$(^", -433, -520, -555) + "se"];
  [q(-441, "7Pd1", -342, -582, -458) + q(-445, "n$$S", -294, -503, -423) + OA(1259, 1181, 1205, 1241, "0s*o") + CA(584, 482, 552, 511, "LkNA")] = [q(-541, "Z5Q4", -664, -664, -561) + cA(-398, -397, -352, -282, "!7rd") + "ic", q(-278, "JoNq", -427, -446, -413) + mA(464, 552, "]vqd") + "ic"];
  [CA(370, 487, 461, 459, "t4TA") + cA(-478, -484, -436, -559, "LkNA")];
  async [OA(1214, 1145, 1020, 1063, "n]kR")](n) {
    function t(a, s, B, I, c) {
      return q(a - 144, s, B - 261, I - 418, c - 1762);
    }
    function e(a, s, B, I, c) {
      return CA(a - 459, s - 264, B - 457, B - -293, I);
    }
    function A(a, s, B, I, c) {
      return mA(a - -682, s - 59, s);
    }
    function o(a, s, B, I, c) {
      return CA(a - 226, s - 52, B - 66, s - -655, B);
    }
    function r(a, s, B, I, c) {
      return mA(c - -130, s - 361, s);
    }
    const g = await this[t(1356, "YX$#", 1450, 1304, 1335) + r(570, "bF7[", 591, 456, 505) + o(-131, -194, "(lAa")](n);
    await Promise[t(1189, "5uVm", 1334, 1267, 1275) + r(517, "5[45", 331, 421, 420)]([this[t(1129, "LkNA", 1140, 1302, 1216) + A(-177, "hzY(") + "d"][A(-98, "yITE")](n), this[A(-158, "5uVm") + o(-267, -155, "YX$#") + "e"](g)]), this[t(1408, "]D#H", 1428, 1332, 1342) + e(243, 126, 217, "PaKP") + A(-183, "LkNA")]();
  }
  async [cA(-487, -565, -545, -411, "bF7[") + q(-650, "hzY(", -465, -692, -583) + "se"](n) {
    function t(g, a, s, B, I) {
      return cA(B - 436, a - 2, s - 359, B - 320, I);
    }
    function e(g, a, s, B, I) {
      return q(g - 116, s, s - 273, B - 492, g - 313);
    }
    function A(g, a, s, B, I) {
      return CA(g - 216, a - 333, s - 144, B - 763, s);
    }
    function o(g, a, s, B, I) {
      return cA(g - -167, a - 36, s - 361, B - 196, a);
    }
    function r(g, a, s, B, I) {
      return OA(g - 211, I - 178, s - 318, B - 332, g);
    }
    try {
      if (o(-804, "t4TA", -820, -768, -895) !== o(-622, "!7rd", -731, -638, -605)) {
        const g = await fetch(n);
        if (!g.ok) {
          if (o(-550, "iI!D", -671, -481, -491) !== A(1028, 1134, "bF7[", 1075, 1147)) throw new Error(t(-42, 34, -169, -73, "Dopw") + A(1e3, 1002, "iI!D", 1035, 1148) + r("bF7[", 1237, 1376, 1345, 1319) + t(-11, 65, -59, 6, "5uVm") + "d.");
          _0x5948d7[o(-617, "0s*o", -550, -530, -504)]();
        }
        this[A(1188, 1101, "^zmr", 1080, 1202) + "se"] = await g[A(1211, 1333, "t4TA", 1215, 1211)]();
      } else this[t(-96, -122, 126, 2, "^zmr") + e(-157, -96, "Dopw", -49, -105) + "d"] = _0x414307;
    } catch (g) {
      if (e(-321, -396, "(lAa", -332) === t(160, 17, 10, 43, "IFrD"))
        return this[o(-559, "]ErZ", -491, -687) + o(-630, "1Xm9", -613, -515) + "se"]()?.[e(-287, -404, "n$$S", -360) + o(-646, "OA*[", -710, -597)]?.[r("!7rd", 1124, 1209, 1112, 1143)] || [];
      this[r("Dopw", 1215, 1397, 1319, 1268) + "se"] = void 0, console[t(-17, -10, -92, -111, "5[45")](g);
    }
  }
  async [mA(673, 570, "JoNq") + cA(-405, -405, -399, -491, "nbGi") + "e"](n) {
    function t(g, a, s, B, I) {
      return cA(B - 421, a - 390, s - 271, B - 184, a);
    }
    if (this[e(1090, 1286, 1214, "H6PC") + e(1165, 1066, 1174, "P!#T")] = void 0, !n) {
      if (r(-518, -440, -481, -565, "1Xm9") === t(-42, "azwT", -300, -176)) return _0x56fcd1[t(-105, "P!#T", -222, -145)](this[t(-26, "J0zt", -42, 1) + "se"]);
      console[t(-190, "(lAa", -151, -81)](o(935, 911, "t9HJ", 782) + r(-346, -355, -426, -393, "^n36") + o(723, 729, "]vqd", 730) + o(671, 774, "LkNA", 708) + o(948, 974, "vDX@", 958)), this[A("&uUp", 580, 679) + "se"] = void 0;
      return;
    }
    function e(g, a, s, B, I) {
      return cA(s - 1702, a - 43, s - 476, B - 98, B);
    }
    function A(g, a, s, B, I) {
      return CA(g - 169, a - 313, s - 49, a - 97, g);
    }
    function o(g, a, s, B, I) {
      return q(g - 137, s, s - 280, B - 59, a - 1384);
    }
    function r(g, a, s, B, I) {
      return mA(a - -924, a - 289, I);
    }
    await this[r(-280, -410, -400, -434, "]ErZ") + t(74, "t9HJ", 64, -3) + "se"](n);
  }
  async [mA(674, 705, "^zmr") + cA(-396, -309, -349, -379, "vDX@") + OA(1113, 1122, 1114, 1195, "]$S8")](n) {
    function t(a, s, B, I, c) {
      return OA(a - 105, s - -1309, B - 281, I - 245, B);
    }
    function e(a, s, B, I, c) {
      return cA(B - 197, s - 236, B - 474, I - 130, a);
    }
    const A = await fetch("" + n + this[t(-331, -232, "vDX@", -219) + o(653, 613, "iI!D", 593, 702) + g("t9HJ", -506, -450, -390) + e("y$WG", -234, -240, -271)][8558 + -4279 * 2]);
    function o(a, s, B, I, c) {
      return q(a - 182, B, B - 333, I - 233, c - 1143);
    }
    const r = A.ok ? -8241 + 1493 * -4 + 14213 : 4951 * 1 + -3 * -2881 + -1 * 13593;
    function g(a, s, B, I, c) {
      return q(a - 427, a, B - 196, I - 353, s - -39);
    }
    return "" + n + this[e("5uVm", -291, -209, -132) + o(763, 783, "azwT", 776, 664) + t(-236, -317, "vDX@", -205) + o(566, 422, "t4TA", 444, 528)][r];
  }
  [cA(-491, -491, -530, -405, "b4YV") + CA(399, 444, 408, 330, "IFrD") + "s"](n) {
    function t(A, o, r, g, a) {
      return CA(A - 411, o - 73, r - 264, A - 414, r);
    }
    function e(A, o, r, g, a) {
      return CA(A - 361, o - 27, r - 442, a - 33, A);
    }
    n[e("]vqd", 559, 529, 491, 463) + "ch"]((A) => console[t(836, 912, "]vqd")](A));
  }
  [cA(-571, -446, -498, -467, "^zmr") + q(-499, "^n36", -575, -598, -505) + CA(526, 363, 509, 478, "PaKP")](n) {
    function t(A, o, r, g, a) {
      return CA(A - 28, o - 57, r - 92, r - -147, g);
    }
    function e(A, o, r, g, a) {
      return mA(r - -150, o - 107, o);
    }
    n[e(348, "(lAa", 319) + "ch"]((A) => console[t(179, 232, 150, "LkNA")](A));
  }
  [q(-305, "0s*o", -299, -392, -428) + cA(-568, -483, -673, -574, "1Xm9")]() {
    function n(e, A, o, r, g) {
      return CA(e - 490, A - 169, o - 73, e - -799, A);
    }
    function t(e, A, o, r, g) {
      return CA(e - 387, A - 220, o - 37, o - 658, A);
    }
    return window[n(-358, "b4YV", -481) + t(1182, "JoNq", 1126)][n(-335, "iI!D", -304) + n(-304, "wa@W", -252)];
  }
  [OA(1139, 1082, 1213, 1039, "J0zt") + cA(-627, -667, -707, -596, "]$S8") + CA(491, 305, 347, 375, "n]kR")]() {
    function n(r, g, a, s, B) {
      return mA(s - -39, g - 3, r);
    }
    function t(r, g, a, s, B) {
      return cA(B - 614, g - 406, a - 459, s - 119, r);
    }
    function e(r, g, a, s, B) {
      return cA(a - 628, g - 126, a - 352, s - 382, B);
    }
    function A(r, g, a, s, B) {
      return cA(s - 1627, g - 197, a - 158, s - 383, g);
    }
    function o(r, g, a, s, B) {
      return q(r - 151, B, a - 123, s - 255, r - 39);
    }
    try {
      if (t("bF7[", 177, 209, 329, 236) === t("]vqd", 113, 375, 160, 244)) {
        if (!this[t("nbGi", 154, 221, 263, 207) + "se"]) {
          if (A(1133, "0s*o", 1058, 999, 964) === t("Dopw", 158, 226, 20, 141)) throw new Ei(o(-588, -639, -603, -525, "7Pd1") + o(-604, -728, -652, -663, "$PXo") + n("t4TA", 524, 691, 591, 682) + A(1212, "5[45", 980, 1078, 955) + ".");
          _0x314825[A(1187, "bF7[", 1126, 1131, 1177)](_0x20917e);
        }
        if (!this[o(-567, -467, -617, -437, "GGzK") + e(136, 253, 243, 134, "n$$S") + "d"][e(247, 247, 127, 116, "n$$S") + o(-383, -298, -247, -518, "Dopw") + e(268, 190, 157, 103, "Z5Q4") + "ed"]()) {
          if (A(949, "LkNA", 1029, 1022, 935) === o(-487, -451, -621, -617, "!7rd")) throw new Ei(e(-69, 183, 53, 75, "!7rd") + n("$PXo", 636, 524, 598, 720) + t("t9HJ", 113, -18, 218, 117) + A(1021, "t9HJ", 1165, 1102, 1172) + ".");
          return this[o(-475, -473, -416, -364, "5[45") + t("b4YV", -119, 40, 54, -4)];
        }
        this[A(1316, "5ANE", 1141, 1255, 1335) + o(-601, -728, -627, -585, "j$(^")] = new gg($E(this[A(1176, "]ErZ", 1196, 1101, 1052) + "se"], this[n("!7rd", 473, 476, 593, 579) + t("azwT", -7, -41, -151, -17)]())), this[e(45, 85, 71, -19, "!7rd") + o(-357, -479, -468, -483, "OA*[") + "s"](this[t("H6PC", 81, 254, 95, 126) + A(1283, "H6PC", 1174, 1216, 1080)][A(925, "yITE", 961, 1045, 964) + "s"]), this[A(1151, "^zmr", 1009, 1056, 1009) + o(-515, -408, -484, -563, "n$$S") + n("azwT", 578, 548, 643, 599)](this[o(-536, -437, -630, -512, "IFrD") + o(-582, -464, -617, -714, "^n36")][A(1194, "YX$#", 1119, 1253, 1289) + n("nbGi", 472, 325, 426, 466)]);
      } else return _0x240fa4[o(-552, -664, -424, -558, "5[45") + o(-539, -495, -450, -548, "Z5Q4")][A(1131, "bF7[", 1112, 1192, 1181) + t("!7rd", 153, 145, 181, 140)];
    } catch (r) {
      if (t("650@", 109, -37, 108, 96) !== A(1172, "azwT", 1114, 1128)) _0x210015[e(6, -20, 114, 181, "u%5]") + "ch"]((g) => _0x2297b0[t("]$S8", 25, -2, 120, 110)](g));
      else {
        if (r instanceof Ei) t("n$$S", 193, 22, 29, 99) !== n("b4YV", 512, 420, 424) ? _0x4da858[e(78, 132, 52, 156, "^zmr") + "ch"]((a) => _0x4cbfac[t("!7rd", 0, 150, 133, 69)](a)) : r[t("y$WG", 22, 40, 28, -20)]();
        else if (r instanceof Error)
          if (t("y$WG", 147, 279, 50, 152) === e(17, 63, 128, 221, "5ANE")) console[o(-513, -489, -460, -629, "u%5]")](r);
          else throw new _0x1970cb(n("vDX@", 571, 473, 531) + n("OA*[", 521, 672, 641) + t("n$$S", -48, 45, 42, 31) + n("$PXo", 658, 429, 534) + ".");
        const g = {};
        g[n("GGzK", 635, 657, 625) + A(1127, "nbGi", 1054, 1062)] = !1, g[A(1213, "(lAa", 1208, 1093) + "s"] = [], g[A(1286, "(lAa", 1070, 1180) + e(66, 132, 21, 46, "q#Q8")] = [], g[A(1249, "JoNq", 1271, 1215) + t("H6PC", 13, 196, 104, 84) + e(190, 228, 134, 189, "5uVm")] = void 0, g[n("t4TA", 508, 328, 410)] = function() {
        }, g[e(-79, 53, 2, 97, "0s*o") + n("^n36", 684, 528, 565)] = "", this[n("GGzK", 698, 458, 586) + n("QAlP", 516, 429, 504)] = new gg(g);
      }
    }
  }
  [mA(542, 476, "^n36") + CA(364, 334, 342, 353, "PaKP") + OA(1304, 1217, 1184, 1236, "azwT") + "t"]() {
    function n(e, A, o, r, g) {
      return mA(A - -639, A - 389, r);
    }
    function t(e, A, o, r, g) {
      return q(e - 365, A, o - 446, r - 355, o - 20);
    }
    return this[n(-53, -71, 56, "0s*o") + t(-568, "n$$S", -618, -601)];
  }
  [OA(1131, 1081, 981, 1143, "t9HJ") + OA(1088, 1222, 1090, 1285, "H6PC") + "se"]() {
    function n(r, g, a, s, B) {
      return OA(r - 291, g - -88, a - 377, s - 422, a);
    }
    function t(r, g, a, s, B) {
      return q(r - 54, a, a - 4, s - 215, B - 924);
    }
    if (!this[A(552, 606, 610, "wa@W") + "se"])
      return o("iI!D", -588, -512, -473) !== t(429, 197, "J0zt", 298, 310) ? null : this[e(-35, 65, "JoNq", 196) + t(578, 434, "u%5]", 438, 479) + "se"]()?.[e(-128, -186, "azwT", -85) + o("(lAa", -338, -387, -462)]?.[A(451, 407, 447, "t4TA") + n(985, 870, "5[45", 933)];
    function e(r, g, a, s, B) {
      return q(r - 34, a, a - 232, s - 213, g - 468);
    }
    function A(r, g, a, s, B) {
      return mA(g - -16, g - 283, s);
    }
    function o(r, g, a, s, B) {
      return mA(s - -923, g - 374, r);
    }
    try {
      if (A(433, 484, 588, "P!#T", 458) === t(190, 274, "QAlP", 177, 292)) _0x4be2f7[A(518, 444, 475, "(lAa", 545) + o("hzY(", -523, -296, -401, -484)](_0x597007);
      else return JSON[o("1Xm9", -343, -497, -375, -437)](this[e(-181, -83, "!7rd", -193, -200) + "se"]);
    } catch (r) {
      if (o("nbGi", -420, -272, -376) !== A(767, 637, 676, "n]kR")) {
        if (!this[A(505, 593, 659, "vDX@") + "se"]) throw new _0x469db0(e(-182, -70, "yITE", 13) + A(498, 413, 358, "$PXo") + n(1118, 986, "iI!D", 979) + e(-261, -180, "OA*[", -81) + ".");
        if (!this[t(322, 368, "J0zt", 308, 354) + t(565, 547, "H6PC", 597, 462) + "d"][n(1264, 1135, "650@", 1037) + o("vDX@", -213, -377, -295) + n(1064, 1021, "bF7[", 902) + "ed"]()) throw new _0x50396c(t(253, 400, "^n36", 339, 344) + A(379, 420, 453, "YX$#") + t(386, 308, "^n36", 485, 362) + A(495, 556, 439, "5uVm") + ".");
        this[A(351, 417, 528, "iI!D") + t(437, 326, "q#Q8", 497, 459)] = new _0x18ec40(_0x331b4f(this[t(394, 557, "1Xm9", 549, 478) + "se"], this[e(-165, -121, "7Pd1", -20) + n(944, 1028, "P!#T", 1071)]())), this[n(911, 1045, "(lAa", 1177) + e(-119, -103, "]ErZ", -184) + "s"](this[o("QAlP", -355, -449, -420) + n(949, 1e3, "QAlP", 1046)][A(555, 524, 534, "0s*o") + "s"]), this[A(532, 474, 346, "coJA") + A(534, 565, 610, "hzY(") + A(585, 477, 445, "J0zt")](this[o("u%5]", -264, -253, -269) + t(449, 329, "Dopw", 325, 385)][A(430, 482, 522, "]ErZ") + A(495, 423, 349, "YX$#")]);
      } else {
        if (r instanceof Error)
          if (o("]vqd", -463, -480, -408) === A(512, 597, 507, "nbGi")) w[t(255, 406, "y$WG", 300, 307) + e(12, -63, "5uVm", -148)](r);
          else {
            _0x56999b instanceof _0x320d4d ? _0x48169d[e(-185, -190, "$PXo", -75)]() : _0x1dd019 instanceof _0x49eee8 && _0x41f3aa[n(1124, 1012, "H6PC", 1073)](_0x1b1bc0);
            const g = {};
            g[n(1140, 1121, "GGzK", 1208) + A(521, 500, 437, "$PXo")] = !1, g[n(1062, 1052, "!7rd", 1188) + "s"] = [], g[o("LkNA", -385, -564, -508) + e(-142, -173, "JoNq", -231)] = [], g[o("coJA", -158, -154, -285) + A(682, 627, 645, "J0zt") + e(136, 61, "$PXo", -17)] = void 0, g[A(639, 547, 598, "azwT")] = function() {
            }, g[A(747, 624, 747, "]ErZ") + o("iI!D", -378, -447, -410)] = "", this[A(548, 578, 639, "&uUp") + A(401, 427, 428, "hzY(")] = new _0x384cad(g);
          }
        return null;
      }
    }
  }
  [OA(1002, 1040, 954, 971, "$PXo") + OA(1150, 1025, 934, 1078, "J0zt")]() {
    function n(o, r, g, a, s) {
      return CA(o - 103, r - 392, g - 361, g - 337, o);
    }
    function t(o, r, g, a, s) {
      return q(o - 379, o, g - 125, a - 181, a - 267);
    }
    function e(o, r, g, a, s) {
      return mA(g - -680, r - 241, o);
    }
    return this[n("^9]Y", 659, 618) + n("1Xm9", 644, 771) + "se"]()?.[t("y$WG", -142, -146, -245) + e("LkNA", 75, -17)]?.[t("]vqd", -345, -94, -222)] || [];
  }
  [q(-684, "b4YV", -603, -535, -581) + OA(1137, 1146, 1100, 1134, "u%5]") + CA(323, 425, 377, 374, "$PXo")]() {
    function n(o, r, g, a, s) {
      return q(o - 489, r, g - 130, a - 342, g - -109);
    }
    function t(o, r, g, a, s) {
      return mA(g - 53, r - 204, r);
    }
    function e(o, r, g, a, s) {
      return mA(o - 464, r - 449, r);
    }
    return this[t(640, "GGzK", 642) + t(360, "q#Q8", 495) + "se"]()?.[t(675, "&uUp", 664) + e(923, "650@")]?.[n(-465, "^9]Y", -523, -517) + n(-842, "^9]Y", -727, -601)];
  }
}
function wn() {
  const i = ["c8kaW6Keoq", "zSo4Cmojla", "BrRcNCkrra", "rtZcQSouzG", "WQ/cOmozw8kP", "DXSyWPRcUq", "WOKcW5/cN8k7", "F05Zoq", "W6JdH11dnq", "WPVdI8khAq", "sKpdQYKF", "W7tcV8ovWQJdNa", "pmokWRtcOSkV", "W67cJf/cVsu", "WRldG0/dISky", "WPv2W6dcJNK", "W7/dGv5viG", "W7NdGgC", "amoNWQW6Eq", "cevJW5lcUmkagCkXW5NdISoghGm", "WRTJlmkBtG", "k8osWP/cTq", "WPLLW77cIhe", "W6JcJelcOsq", "WPzHW6BcGMm", "o8keW68Moq", "W5ldP8kaWRG9", "omofW7eHmW", "WQRcVmoakCk6", "ySkhW7VdGG", "W6BdHNpcSLO", "eZJdPCkpfq", "ur8N", "W6VdKKpdJwG", "WQJcIGLIkaTxrCor", "we51pW", "W4KUW7RdHG", "WO/cPmox", "tI/cUCoBwq", "W4rtWOT9W7O", "WRuraryP", "W5y4W6hdJeS", "amockSoz", "W6VdG2xcHfS", "W5GGW7RdRvK", "FM8oWORcPa", "WOldL8kiAmoC", "zv0IeCoH", "WRukW47cICkW", "fmoEWQC5tG", "W48AW5RcICk7DCkiqta", "iCouWRBcUCkG", "zmo4W5BcRmoU", "WOVcU8oaqmks", "WPuKW7ZcJN8", "WQD+jSkutG", "WQpcG8oQD8kg", "WPldHrVdP8k2", "uN/cL1y", "EgVcLwtcPW", "sZdcRCovBq", "W53dUSki", "aCkaW68", "WRNdHeJdHSkP", "WOxdHmktAmob", "uCoLWQ/cLSku", "lmkTWORdVG", "WPhcTmoqiCo0", "W6NcM0NcTJi", "zmoLW5FcQ8oV", "W5FdSmkkfSoqD0LZW5hdQmod", "yGW3WO3cPG", "W5ybcYvo", "o8k6WP3dUuG", "aSo8WQO9", "WQldHmkvBG", "WPHRW6hcLwu", "W4TcWOBdImog", "oCokWRbrmq", "WQn2W7xdJmoIW4G6WOldGa", "WRRcJSkNjSkE", "WQRdIwBcOLa", "gmohWP4", "DK4/eCo3", "WPukW47cICkW", "r3BcMwZcRa", "WPdcLmoDlCoU", "WPddG1JdHSkx", "pCkMWOhdRXS", "pCorWO9mpa", "WONcRmogA8kp", "WPfeWONcRCkg", "s8ovWRm", "WPnHW7ZcKM4", "W5tdU8kCWQ4E", "et7dQ8okga", "W6yrzSkIpa", "A8oJW5RcUSoZ", "WRdcI8ogWPmD", "f8onWPhdT8o+", "W6pcN1NcSt8", "WO9iWPNcL8kc", "W5BdSmkBWO8H", "W506wCkqWPK", "tqCEWRRcHG", "W67dIM/cTKS", "sa0yWRhcMW", "t0tdScep", "rbZcP8oyFa", "WRFcISkH", "ESkwEH5O", "BwtcM2FdGG", "Ag3cLxRcSq", "WOFcP8oxaCkm", "W5m8smkYWOm", "WP7cUmoDn8o/", "zCkQW4yRfW", "xSoeWPNdOmoU", "B1WnWQxcJa", "WQpcN8ohWPqx", "WPNcUmoxAG", "W6ldKem", "Fe8pfmoL", "dd7dSq", "rmogWQu0WOC", "W6ldH1/dNq", "qvxdMcWj", "aCojWOldSmoU", "imo1WPnknG", "WR3cNd3dOaGjDXL9xs7dHa", "h8ofWONcPCkV", "hCohWPhdP8oh", "W4HiWOBdGCoc", "WRvNW7VcSgK", "Dq4HWONdUG", "W4FcL07cTZK", "braXW7ZcIq", "W40+x8kYWPK", "xHmNW4BdOq", "W6dcM8oFWQZdQG", "i8ohWOK", "W7SSW6hdUvO", "lqHOwSk8WOinWRpcPSkvW4JdGG", "W7hdLKm", "eZ7dUa", "W7tdKKxdGgK", "mCk6WR/dJxi", "W5SHW7VdJrG", "lSopWPtcPmkX", "d8oNWQu", "WOBcVSoBs8kt", "orK2ymkcnCkVW4NcNdClW7aL", "imobWPpcVG", "o8k9WOhdVLq", "vHmMWOJdRa", "W5BdR8kFWQeF", "AvTKg8oF", "W5ldOmkCWR8H", "omogWQzlla", "k3hdS8kdeG", "WQb3W7lcUSkfWOLHWPRdOMpdRwdcPa", "h8opWOm", "W7KGWRhdRSoz", "mSoxWQXwla", "s1hdIcSe", "WQnWmCkwuG", "W5qWwCo8WPK", "DSk+W4CShq", "WPtdRSkMy8oW", "W5q4xG", "xmoHBmoAfW", "WPSuW4RdICosymkQx8kk", "DCoTWRJcKmks", "W7TtWO1WW7S", "W7JdNevJpa", "W7Wltqb0", "v8oJWQG", "WPJcS8oaiCok", "W4ldMLZdMKK", "pSk6WPFdRW", "f8oaWOPHla", "bmkeW6KRoa", "WRnbpSoGCv94WReGWOXtWPddRW", "W6RdNvhdGq", "A8k6W4C", "d8oNWQulEq", "dmo1WPtcTmkN", "oCk8WPRdUq", "WQ97WPJcG8kJ", "dqas", "WP7dISkgq8oA", "WPpdHSkv", "W7pdGvJdMgK", "WPnfk8kYtq", "W5a8W63cHLq", "tWKo", "CvmKj8oP", "WRRdKmkiW6BcQwBdUa5XwSoR", "WPH2W6dcKvS", "WPtdISktq8oj", "tvNdIcen", "dmoEmCocaq", "qf/dKJWE", "W4neWPhdQmof", "W67dK8o8E8oih0dcNZ5nB8oZ", "WQSlW4KNWQpdTSkQuJHjW5NcMMC", "umk7W7n8t3vyWOxcHXO", "W4LcWOddImok", "WRNcQmobqSoa", "W6hdLmoWDmoghx3cKIX8sSog", "WPrjWPK", "W7ddNfjhjq", "W59FWPVdO8oF", "W5ubgqbu", "WPWmW6tcGmk9", "WPqcW4tcGG", "wxGyWOhcSW", "F8khW6ddN24", "tqCz", "W59BWPP2W70", "W7agBSk4pq", "WQX0mCk2tW", "o8keW64LCa", "WPnkWPK", "WRuFaW", "gdtdQ8kIbG", "WP7cU8oBqCku", "F3GfWP3cSG", "WQtcN8ohWOKB", "W6ddLLNdNwu", "z8keW6JdIuu", "WPBcJmohWOGa", "WPLcWP7cJCkf", "BCoRA8oznW", "W7RdNerinq", "W7fxWP13W7y", "W7NdGunjiW", "W7GIDmohFSo4WQ12W4HA", "WOFcP8ouqa", "rSoxWQ4lWOS", "aSkmW6KHmq", "W7mzcbe0", "jGLPvmk8WOjrWPxcNmkfW7xdGXW", "pmoaWRe", "WRxcM8obWOqA", "W70TW4ldUNy", "eZJdUW", "W70OWQBdQmoF", "DfhdJIyf", "WPFdL8ktACoA", "BM3cIgBcSa", "WOlcOmorsSko", "W6fDWOS", "W7NcM17cJt0", "W6BdGgJcS3i", "z8khW6BdJ2m", "W6FdNepdQ20", "WR/cL8owWOiC", "WRddG0hdHSkD", "nmolWRbaFW", "dr/dVSkhfa", "whtcKfhdTG", "WPNcUmovjCoV", "qttcVCosya", "j8ody8oPpa", "hqKOW6/cLG", "WQZdI0NdKmkC", "WOTmWOBcOCkm", "E2tdKG8B", "BxdcIeZcOW", "W5tdP8kDWQq8", "W7JdGhS"];
  return wn = function() {
    return i;
  }, wn();
}
class Nr extends ix {
  static _instance;
  static getInstance() {
    if (!this._instance) {
      const n = new ox();
      this._instance = new Nr(n);
    }
    return this._instance;
  }
}
function rx({ configuration: i }) {
  return i ? /* @__PURE__ */ m(Uc, { target: i.styleTarget, children: /* @__PURE__ */ m(
    LC,
    {
      assetsDirectoryPath: i.assetsDirectoryPath,
      bramble: Nr.getInstance(),
      children: /* @__PURE__ */ m(
        _C,
        {
          transactionCountingToken: i.transactionCountingToken,
          transactionType: Pe.PALM,
          children: /* @__PURE__ */ m(
            KC,
            {
              value: _E({
                onError: i.onError
              }),
              children: /* @__PURE__ */ m(eB, { analytics: ZE, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ m(jC, { children: /* @__PURE__ */ m(TE, { cameraConfiguration: i.camera, children: /* @__PURE__ */ m(PE, { ...i }) }) }) })
            }
          )
        }
      )
    }
  ) }) : null;
}
zs(rx, "x-dot-palm-capture", ["configuration"]);
