var xc = Object.defineProperty;
var wa = (i) => {
  throw TypeError(i);
};
var Ec = (i, n, t) => n in i ? xc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var p = (i, n, t) => Ec(i, typeof n != "symbol" ? n + "" : n, t), ba = (i, n, t) => n.has(i) || wa("Cannot " + t);
var S = (i, n, t) => (ba(i, n, "read from private field"), t ? t.call(i) : n.get(i)), U = (i, n, t) => n.has(i) ? wa("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), v = (i, n, t, e) => (ba(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var qo, M, x0, Qt, ka, E0, d0, l0, Xr, Br, Qr, u0, wo = {}, f0 = [], dc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vo = Array.isArray;
function ke(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function $r(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function PA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -13136 + -6569 * -2 && (r.children = arguments.length > -3 * -1603 + -19 * -521 + -14705 ? qo.call(arguments, 381 + 1 * 8983 + 2 * -4681) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return ho(i, r, e, A, null);
}
function ho(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++x0, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && M.vnode != null && M.vnode(r), r;
}
function lc() {
  var i = {};
  return i.current = null, i;
}
function fe(i) {
  return i.children;
}
function le(i, n) {
  this.props = i, this.context = n;
}
function Vt(i, n) {
  if (n == null) return i.__ ? Vt(i.__, i.__i + (8190 + -8189 * 1)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Vt(i) : null;
}
function h0(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 1 * -6719 + -1189 + 7908; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return h0(i);
  }
}
function xr(i) {
  (!i.__d && (i.__d = !0) && Qt.push(i) && !On.__r++ || ka != M.debounceRendering) && ((ka = M.debounceRendering) || E0)(On);
}
function On() {
  for (var i, n, t, e, A, o, r, g = -3797 * -2 + -1181 * -1 + -1 * 8774; Qt.length; ) Qt.length > g && Qt.sort(d0), i = Qt.shift(), g = Qt.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = ke({}, e)).__v = e.__v + (-8113 + -659 * 15 + 17999 * 1), M.vnode && M.vnode(t), Aa(n.__P, t, e, n.__n, n.__P.namespaceURI, -607 * 1 + -5101 + -5 * -1148 & e.__u ? [A] : null, o, A ?? Vt(e), !!(-31 * 31 + 41 * -181 + -1 * -8414 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, y0(o, t, r), t.__e != A && h0(t)));
  On.__r = -2381 + -122 * 73 + -11287 * -1;
}
function p0(i, n, t, e, A, o, r, g, a, s, c) {
  var I, x, C, E, d, l, Q = e && e.__k || f0, f = n.length;
  for (a = uc(t, n, Q, a, f), I = -1 * 205 + 1 * 791 + -586; I < f; I++) (C = t.__k[I]) != null && (x = C.__i == -1 ? wo : Q[C.__i] || wo, C.__i = I, l = Aa(i, C, x, A, o, r, g, a, s, c), E = C.__e, C.ref && x.ref != C.ref && (x.ref && ea(x.ref, null, C), c.push(C.ref, C.__c || E, C)), d == null && E != null && (d = E), -6 * -1346 + -2035 + -6037 * 1 & C.__u || x.__k === C.__k ? a = m0(C, a, i) : typeof C.type == "function" && l !== void 0 ? a = l : E && (a = E.nextSibling), C.__u &= -7);
  return t.__e = d, a;
}
function uc(i, n, t, e, A) {
  var o, r, g, a, s, c = t.length, I = c, x = -1 * 9421 + -20 * 169 + 3 * 4267;
  for (i.__k = new Array(A), o = 1 * -6203 + -1 * -7699 + -17 * 88; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + x, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? ho(null, r, null, null, null) : Vo(r) ? ho(fe, { children: r }, null, null, null) : r.constructor == null && r.__b > 9742 + 1 * -4091 + -5651 ? ho(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (1 * 3313 + 4960 + -4136 * 2), g = null, (s = r.__i = fc(r, t, a, I)) != -1 && (I--, (g = t[s]) && (g.__u |= -3359 * 1 + -2 * -61 + 3239)), g == null || g.__v == null ? (s == -1 && (A > c ? x-- : A < c && x++), typeof r.type != "function" && (r.__u |= 12720 + 12716 * -1)) : s != a && (s == a - (25 * -87 + -916 * 1 + 3092 * 1) ? x-- : s == a + (-7601 * -1 + -7 * 600 + -3400) ? x++ : (s > a ? x-- : x++, r.__u |= 3903 + 2326 * -1 + -1 * 1573))) : i.__k[o] = null;
  if (I)
    for (o = -20 * -198 + -5290 + 1 * 1330; o < c; o++) (g = t[o]) != null && 3137 + -1 * 3893 + 756 == (-1913 * 1 + -5866 + 7781 & g.__u) && (g.__e == e && (e = Vt(g)), w0(g, g));
  return e;
}
function m0(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = -8198 + -38 * 131 + 13176; e && A < e.length; A++) e[A] && (e[A].__ = i, n = m0(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Vt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -2 * -4918 + -3 * -1277 + -13659 == n.nodeType);
  return n;
}
function He(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Vo(i) ? i.some(function(t) {
    He(t, n);
  }) : n.push(i)), n;
}
function fc(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && 6046 + 2121 * -3 + -1 * -317 == (1381 * 7 + -9236 * -1 + -18901 & a.__u)) return t;
  if (e > (a != null && 5 * 1409 + -2774 + -1 * 4271 == (-8 * 451 + 79 * 79 + 877 * -3 & a.__u) ? 2535 + -1 * 2534 : -169 * -3 + 3047 + -3554)) for (A = t - 1, o = t + (1 * 3713 + -10 * -466 + -8372); A >= -947 * -6 + -5574 + -108 || o < n.length; ) {
    if (A >= -5761 + 1 * -2548 + -1 * -8309) {
      if ((a = n[A]) && (2 & a.__u) == 0 && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && 1123 + 7 * 185 + -1209 * 2 == (-8573 * -1 + -1 * -4129 + -12700 & a.__u) && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function Sa(i, n, t) {
  n[-3789 + -1263 * -3] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || dc.test(n) ? t : t + "px";
}
function en(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Sa(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Sa(i.style, n, t[n]);
    }
  else if (n[1169 * 5 + 449 * -11 + -906] == "o" && n[-7159 * -1 + -2803 * 2 + 8 * -194] == "n") o = n != (n = n.replace(l0, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(2) : n.slice(71 * 89 + 1 * -7300 + 983), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Xr, i.addEventListener(n, o ? Qr : Br, o)) : i.removeEventListener(n, o ? Qr : Br, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-3855 + 23 * -41 + 4802 * 1] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && t == 1 ? "" : t));
  }
}
function Ga(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Xr++;
      else if (n.t < t.u) return;
      return t(M.event ? M.event(n) : n);
    }
  };
}
function Aa(i, n, t, e, A, o, r, g, a, s) {
  var c, I, x, C, E, d, l, Q, f, m, y, G, D, w, W, J, Y, z = n.type;
  if (n.constructor != null) return null;
  -22 * -413 + -5 * 1765 + 133 * -1 & t.__u && (a = !!(-10766 + -10798 * -1 & t.__u), o = [g = n.__e = t.__e]), (c = M.__b) && c(n);
  A: if (typeof z == "function") try {
    if (Q = n.props, f = "prototype" in z && z.prototype.render, m = (c = z.contextType) && e[c.__c], y = c ? m ? m.props.value : c.__ : e, t.__c ? l = (I = n.__c = t.__c).__ = I.__E : (f ? n.__c = I = new z(Q, y) : (n.__c = I = new le(Q, y), I.constructor = z, I.render = pc), m && m.sub(I), I.props = Q, I.state || (I.state = {}), I.context = y, I.__n = e, x = I.__d = !0, I.__h = [], I._sb = []), f && I.__s == null && (I.__s = I.state), f && z.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = ke({}, I.__s)), ke(I.__s, z.getDerivedStateFromProps(Q, I.__s))), C = I.props, E = I.state, I.__v = n, x) f && z.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), f && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (f && z.getDerivedStateFromProps == null && Q !== C && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, y), !I.__e && I.shouldComponentUpdate != null && !(166 * -27 + -3564 + 619 * 13) === I.shouldComponentUpdate(Q, I.__s, y) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(-75 * 5 + 9306 + -1786 * 5)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(K) {
          K && (K.__ = n);
        }), G = -4437 * 1 + -3382 + 7819; G < I._sb.length; G++) I.__h.push(I._sb[G]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, y), f && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(C, E, d);
      });
    }
    if (I.context = y, I.props = Q, I.__P = i, I.__e = !1, D = M.__r, w = -222 * 22 + -4135 + 9019 * 1, f) {
      for (I.state = I.__s, I.__d = !(139 * -65 + 7438 + 1598), D && D(n), c = I.render(I.props, I.state, I.context), W = -7913 + 7082 * -1 + 14995; W < I._sb.length; W++) I.__h.push(I._sb[W]);
      I._sb = [];
    } else do
      I.__d = !(-12549 + 502 * 25), D && D(n), c = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++w < -1089 * 3 + -1 * -1318 + 1974);
    I.state = I.__s, I.getChildContext != null && (e = ke(ke({}, e), I.getChildContext())), f && !x && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(C, E)), J = c, c != null && c.type === fe && c.key == null && (J = D0(c.props.children)), g = p0(i, Vo(J) ? J : [J], n, t, e, A, o, r, g, a, s), I.base = n.__e, n.__u &= -(2901 + -2 * 1370), I.__h.length && r.push(I), l && (I.__E = I.__ = null);
  } catch (K) {
    if (n.__v = null, a || o != null)
      if (K.then) {
        for (n.__u |= a ? -7728 * 1 + 2 * 3355 + -31 * -38 : -4211 + 4339 * 1; g && 4221 + 1 * -4213 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (Y = o.length; Y--; ) $r(o[Y]);
    else n.__e = t.__e, n.__k = t.__k;
    M.__e(K, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = hc(t.__e, n, t, e, A, o, r, a, s);
  return (c = M.diffed) && c(n), -1 * 4666 + 209 + 917 * 5 & n.__u ? void 0 : g;
}
function y0(i, n, t) {
  for (var e = -74 * 47 + 6551 * -1 + 10029; e < t.length; e++) ea(t[e], t[++e], t[++e]);
  M.__c && M.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      M.__e(o, A.__v);
    }
  });
}
function D0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 56 * 21 + 5419 * 1 + -6595 * 1 ? i : Vo(i) ? i.map(D0) : ke({}, i);
}
function hc(i, n, t, e, A, o, r, g, a) {
  var s, c, I, x, C, E, d, l = t.props, Q = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = -1009 * 1 + 4493 * 1 + -52 * 67; s < o.length; s++) if ((C = o[s]) && "setAttribute" in C == !!f && (f ? C.localName == f : -1 * -6863 + -1962 + -31 * 158 == C.nodeType)) {
      i = C, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(Q);
    i = document.createElementNS(A, f, Q.is && Q), g && (M.__m && M.__m(n, o), g = !1), o = null;
  }
  if (f == null) l === Q || g && i.data == Q || (i.data = Q);
  else {
    if (o = o && qo.call(i.childNodes), l = t.props || wo, !g && o != null)
      for (l = {}, s = -58 * -2 + -1 * 479 + 363; s < i.attributes.length; s++) l[(C = i.attributes[s]).name] = C.value;
    for (s in l) if (C = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = C;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        en(i, s, null, C, A);
      }
    }
    for (s in Q) C = Q[s], s == "children" ? x = C : s == "dangerouslySetInnerHTML" ? c = C : s == "value" ? E = C : s == "checked" ? d = C : g && typeof C != "function" || l[s] === C || en(i, s, C, l[s], A);
    if (c) g || I && (c.__html == I.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), p0(n.type == "template" ? i.content : i, Vo(x) ? x : [x], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-990 * 5 + -1 * 9275 + -14225 * -1] : t.__k && Vt(t, 440 * -20 + -2476 * 4 + -8 * -2338), g, a), o != null)
      for (s = o.length; s--; ) $r(o[s]);
    g || (s = "value", f == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[s] || f == "progress" && !E || f == "option" && E != l[s]) && en(i, s, E, l[s], A), s = "checked", d != null && d != i[s] && en(i, s, d, l[s], A));
  }
  return i;
}
function ea(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    M.__e(A, t);
  }
}
function w0(i, n, t) {
  var e, A;
  if (M.unmount && M.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || ea(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      M.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 121 * 77 + -4712 + -15 * 307; A < e.length; A++) e[A] && w0(e[A], n, t || typeof i.type != "function");
  t || $r(i.__e), i.__c = i.__ = i.__e = void 0;
}
function pc(i, n, t) {
  return this.constructor(i, t);
}
function nt(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), M.__ && M.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Aa(n, i = (!e && t || n).__k = PA(fe, null, [i]), A || wo, wo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? qo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), y0(o, i, r);
}
function ta(i, n) {
  nt(i, n, ta);
}
function oa(i, n, t) {
  var e, A, o, r, g = ke({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > 2 * 4634 + 125 + 9391 * -1 && (g.children = arguments.length > -1304 + -4 * -1993 + 43 * -155 ? qo.call(arguments, -2878 + 160 * 18) : t), ho(i.type, g, e || i.key, A || i.ref, null);
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
        r.__e = !0, xr(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + u0++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
qo = f0.slice, M = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, x0 = -7 * -4 + -1 * 9878 + 9850, le.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = ke({}, this.state), typeof i == "function" && (i = i(ke({}, t), this.props)), i && ke(t, i), i != null && this.__v && (n && this._sb.push(n), xr(this));
}, le.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), xr(this));
}, le.prototype.render = fe, Qt = [], E0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, d0 = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, On.__r = 1893 * -2 + 9236 + -5450, l0 = /(PointerCapture)$|Capture$/i, Xr = -543 * -8 + -3459 * 1 + -885, Br = Ga(!1), Qr = Ga(!0), u0 = -320 * 31 + 1 * -5587 + 15507;
function na() {
  return (na = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -11949 + -50 * -239; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var mc = ["context", "children"];
function yc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = -4619 + 1801 * -1 + 12 * 535; r < a.length; r++) A.indexOf(o = a[r]) >= -7 * 1286 + 7 * -534 + 12740 || (g[o] = e[o]);
    return g;
  }(i, mc);
  return oa(n, t);
}
function Dc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = PA(yc, na({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (-8715 * 1 + 19 * -383 + 2285 * 7 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var o = [], r = {}, g = -5 * -131 + 3 * 3101 + -9958, a = e.attributes, s = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[b0(a[g].name)] = a[g].value);
    for (g = s.length; g--; ) {
      var c = t(s[g], null), I = s[g].slot;
      I ? r[I] = PA(Na, { name: I }, c) : o[g] = c;
    }
    var x = A ? PA(Na, null, o) : o;
    return PA(A || e.nodeName.toLowerCase(), r, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ta : nt)(this._vdom, this._root);
}
function b0(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function wc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[b0(i)] = t, this._vdom = oa(this._vdom, e), nt(this._vdom, this._root);
  }
}
function bc() {
  nt(this._vdom = null, this._root);
}
function Na(i, n) {
  var t = this;
  return PA("slot", na({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function kc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Dc, A.prototype.attributeChangedCallback = wc, A.prototype.disconnectedCallback = bc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var Sc = 1241 * -4 + -8728 + 7 * 1956;
function k(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var s = {};
  s.type = i, s.props = a, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --Sc, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var c = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return M.vnode && M.vnode(c), c;
}
class b extends Error {
  constructor(t, e) {
    super(t);
    p(this, "cause");
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
const cn = {};
cn.CONTINUE_DETECTION = "continue-detection", cn.SWITCH_CAMERA = "switch-camera", cn.TOGGLE_MIRROR = "toggle-mirror";
const Jn = cn;
var k0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(k0 || {}), Gc = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Gc || {}), Nc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Nc || {}), Rc = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(Rc || {}), Fc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(Fc || {});
const De = {};
De.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", De.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", De.CONTROL = "multi-range-auto-capture:control", De.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", De.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", De.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", De.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", De.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", De.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const Ne = De, Oe = {};
Oe.CANDIDATE_SELECTION = "candidate_selection", Oe.DOCUMENT_CENTERING = "document_centering", Oe.DOCUMENT_NOT_PRESENT = "document_not_present", Oe.DOCUMENT_TOO_FAR = "document_too_far", Oe.SHARPNESS_TOO_LOW = "sharpness_too_low", Oe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Oe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Oe.HOTSPOTS_PRESENT = "hotspots_present";
const gt = Oe, st = {};
st.isPresent = gt.DOCUMENT_NOT_PRESENT, st.isNotSmall = gt.DOCUMENT_TOO_FAR, st.isNotOutOfBounds = gt.DOCUMENT_CENTERING, st.isSharp = gt.SHARPNESS_TOO_LOW, st.isNotDim = gt.BRIGHTNESS_TOO_LOW, st.isNotBright = gt.BRIGHTNESS_TOO_HIGH, st.noHotspots = gt.HOTSPOTS_PRESENT;
const Lt = {};
Lt.LOADING = "loading", Lt.ERROR = "error", Lt.WAITING = "waiting", Lt.RUNNING = "running", Lt.COMPLETE = "complete";
const H = Lt, S0 = {};
S0.EYE_NOT_PRESENT = "eye_not_present";
const Zt = S0, JA = {};
JA.CANDIDATE_SELECTION = "candidate_selection", JA.FACE_TOO_CLOSE = "face_too_close", JA.FACE_TOO_FAR = "face_too_far", JA.FACE_CENTERING = "face_centering", JA.FACE_NOT_PRESENT = "face_not_present", JA.SHARPNESS_TOO_LOW = "sharpness_too_low", JA.BRIGHTNESS_TOO_LOW = "brightness_too_low", JA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", JA.DEVICE_PITCHED = "device_pitched", JA.LEFT_EYE_NOT_PRESENT = "left_" + Zt.EYE_NOT_PRESENT, JA.RIGHT_EYE_NOT_PRESENT = "right_" + Zt.EYE_NOT_PRESENT, JA.MOUTH_NOT_PRESENT = "mouth_not_present", JA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", JA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const jA = JA, te = {};
te.isPresent = jA.FACE_NOT_PRESENT, te.isNotPitched = jA.DEVICE_PITCHED, te.isNotSmall = jA.FACE_TOO_FAR, te.isNotLarge = jA.FACE_TOO_CLOSE, te.isNotOutOfBounds = jA.FACE_CENTERING, te.isNotDim = jA.BRIGHTNESS_TOO_LOW, te.isNotBright = jA.BRIGHTNESS_TOO_HIGH, te.isSharp = jA.SHARPNESS_TOO_LOW, te.isLeftEyePresent = jA.LEFT_EYE_NOT_PRESENT, te.isRightEyePresent = jA.RIGHT_EYE_NOT_PRESENT, te.isMouthPresent = jA.MOUTH_NOT_PRESENT, te.isMouthScoreNotTooHigh = jA.MOUTH_SCORE_TOO_HIGH, te.isMouthScoreNotTooLow = jA.MOUTH_SCORE_TOO_LOW;
var vc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(vc || {});
const EA = {};
EA.CANDIDATE_SELECTION = "candidate_selection", EA.FACE_TOO_CLOSE = "face_too_close", EA.FACE_TOO_FAR = "face_too_far", EA.FACE_CENTERING = "face_centering", EA.FACE_NOT_PRESENT = "face_not_present", EA.SHARPNESS_TOO_LOW = "sharpness_too_low", EA.BRIGHTNESS_TOO_LOW = "brightness_too_low", EA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", EA.DEVICE_PITCHED = "device_pitched", EA.LEFT_EYE_NOT_PRESENT = "left_" + Zt.EYE_NOT_PRESENT, EA.RIGHT_EYE_NOT_PRESENT = "right_" + Zt.EYE_NOT_PRESENT, EA.MOUTH_NOT_PRESENT = "mouth_not_present", EA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", EA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", EA.SMILE = "smile", EA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", EA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const oe = EA, ne = {};
ne.isPresent = oe.FACE_NOT_PRESENT, ne.isNotPitched = oe.DEVICE_PITCHED, ne.isNotSmall = oe.FACE_TOO_FAR, ne.isNotLarge = oe.FACE_TOO_CLOSE, ne.isNotOutOfBounds = oe.FACE_CENTERING, ne.isNotDim = oe.BRIGHTNESS_TOO_LOW, ne.isNotBright = oe.BRIGHTNESS_TOO_HIGH, ne.isSharp = oe.SHARPNESS_TOO_LOW, ne.isLeftEyePresent = oe.LEFT_EYE_NOT_PRESENT, ne.isRightEyePresent = oe.RIGHT_EYE_NOT_PRESENT, ne.isMouthPresent = oe.MOUTH_NOT_PRESENT, ne.isMouthStatusNotTooHigh = oe.MOUTH_SCORE_TOO_HIGH, ne.isMouthStatusNotTooLow = oe.MOUTH_SCORE_TOO_LOW;
const Mi = {};
Mi.NEUTRAL = "NEUTRAL", Mi.SMILE = "SMILE", Mi.SMILE_MANUAL = "SMILE_MANUAL";
const xe = {};
xe.CANDIDATE_SELECTION = "candidate_selection", xe.PALM_CENTERING = "palm_centering", xe.PALM_NOT_PRESENT = "palm_not_present", xe.PALM_TOO_FAR = "palm_too_far", xe.PALM_TOO_CLOSE = "palm_too_close", xe.SHARPNESS_TOO_LOW = "sharpness_too_low", xe.BRIGHTNESS_TOO_LOW = "brightness_too_low", xe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", xe.DEVICE_PITCHED = "device_pitched", xe.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const Fe = xe, ve = {};
ve.isPresent = Fe.PALM_NOT_PRESENT, ve.isNotPitched = Fe.DEVICE_PITCHED, ve.isNotSmall = Fe.PALM_TOO_FAR, ve.isNotOutOfBounds = Fe.PALM_CENTERING, ve.isNotDim = Fe.BRIGHTNESS_TOO_LOW, ve.isNotBright = Fe.BRIGHTNESS_TOO_HIGH, ve.isSharp = Fe.SHARPNESS_TOO_LOW, ve.isNotLarge = Fe.PALM_TOO_CLOSE, ve.isTemplateExtractionQualityHighEnough = Fe.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const tn = {};
tn.TOP_LEFT = "TOP_LEFT", tn.TOP_RIGHT = "TOP_RIGHT", tn.BOTTOM_RIGHT = "BOTTOM_RIGHT", tn.BOTTOM_LEFT = "BOTTOM_LEFT";
const ce = {};
ce.CANDIDATE_SELECTION = "candidate_selection", ce.FACE_TOO_CLOSE = "face_too_close", ce.FACE_TOO_FAR = "face_too_far", ce.FACE_CENTERING = "face_centering", ce.FACE_NOT_PRESENT = "face_not_present", ce.SHARPNESS_TOO_LOW = "sharpness_too_low", ce.BRIGHTNESS_TOO_LOW = "brightness_too_low", ce.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ce.DEVICE_PITCHED = "device_pitched", ce.LEFT_EYE_NOT_PRESENT = "left_" + Zt.EYE_NOT_PRESENT, ce.RIGHT_EYE_NOT_PRESENT = "right_" + Zt.EYE_NOT_PRESENT;
const NA = ce, Ee = {};
Ee.isPresent = NA.FACE_NOT_PRESENT, Ee.isNotPitched = NA.DEVICE_PITCHED, Ee.isNotSmall = NA.FACE_TOO_FAR, Ee.isNotLarge = NA.FACE_TOO_CLOSE, Ee.isNotOutOfBounds = NA.FACE_CENTERING, Ee.isNotDim = NA.BRIGHTNESS_TOO_LOW, Ee.isNotBright = NA.BRIGHTNESS_TOO_HIGH, Ee.isSharp = NA.SHARPNESS_TOO_LOW, Ee.isLeftEyePresent = NA.LEFT_EYE_NOT_PRESENT, Ee.isRightEyePresent = NA.RIGHT_EYE_NOT_PRESENT;
const Ra = Ee, Ct = {};
Ct.ZERO = "ZERO", Ct.ONE = "ONE", Ct.TWO = "TWO", Ct.THREE = "THREE", Ct.FOUR = "FOUR", Ct.FIVE = "FIVE";
const re = Ct;
var it, V, Li, Fa, zt = 4 * 1881 + 7088 + -281 * 52, G0 = [], Z = M, va = Z.__b, Wa = Z.__r, Ma = Z.diffed, La = Z.__c, Oa = Z.unmount, Ja = Z.__;
function ro(i, n) {
  Z.__h && Z.__h(V, i, zt || n), zt = 1 * 7737 + -6983 * -1 + -8 * 1840;
  var t = {};
  t.__ = [], t.__h = [];
  var e = V.__H || (V.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function hA(i) {
  return zt = 1, ia(F0, i);
}
function ia(i, n, t) {
  var e = ro(it++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : F0(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], s = e.t(a, g);
    a !== s && (e.__N = [s, e.__[-2314 + -2535 * -1 + -220]], e.__c.setState({}));
  }], e.__c = V, !V.__f)) {
    var A = function(g, a, s) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (c.every(function(x) {
        return !x.__N;
      })) return !o || o.call(this, g, a, s);
      var I = e.__c.props !== g;
      return c.forEach(function(x) {
        if (x.__N) {
          var C = x.__[0];
          x.__ = x.__N, x.__N = void 0, C !== x.__[0] && (I = !0);
        }
      }), o && o.call(this, g, a, s) || I;
    };
    V.__f = !0;
    var o = V.shouldComponentUpdate, r = V.componentWillUpdate;
    V.componentWillUpdate = function(g, a, s) {
      if (this.__e) {
        var c = o;
        o = void 0, A(g, a, s), o = c;
      }
      r && r.call(this, g, a, s);
    }, V.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function eA(i, n) {
  var t = ro(it++, 3);
  !Z.__s && ra(t.__H, n) && (t.__ = i, t.u = n, V.__H.__h.push(t));
}
function ao(i, n) {
  var t = ro(it++, 4);
  !Z.__s && ra(t.__H, n) && (t.__ = i, t.u = n, V.__h.push(t));
}
function Ae(i) {
  return zt = 731 + -11 * 66, kA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function N0(i, n, t) {
  zt = 1 * 705 + 7200 + -1 * 7899, ao(function() {
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
function kA(i, n) {
  var t = ro(it++, 7);
  return ra(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Ge(i, n) {
  return zt = -82 + -45 * -2, kA(function() {
    return i;
  }, n);
}
function he(i) {
  var n = V.context[i.__c], t = ro(it++, -9227 + -1 * 1201 + -1491 * -7);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(V)), n.props.value) : i.__;
}
function Un(i, n) {
  Z.useDebugValue && Z.useDebugValue(n ? n(i) : i);
}
function R0() {
  var i = ro(it++, 11);
  if (!i.__) {
    for (var n = V.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-6637 + -1 * -6116 + 1 * 521, 0]);
    i.__ = "P" + t[-1687 * -3 + -3722 + -1339] + "-" + t[-9215 * 1 + -5 * -1959 + 1 * -579]++;
  }
  return i.__;
}
function Wc() {
  for (var i; i = G0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Cn), i.__H.__h.forEach(Er), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], Z.__e(n, i.__v);
  }
}
Z.__b = function(i) {
  V = null, va && va(i);
}, Z.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Ja && Ja(i, n);
}, Z.__r = function(i) {
  Wa && Wa(i), it = 0;
  var n = (V = i.__c).__H;
  n && (Li === V ? (n.__h = [], V.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(Cn), n.__h.forEach(Er), n.__h = [], it = -1626 + 271 * 6)), Li = V;
}, Z.diffed = function(i) {
  Ma && Ma(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (285 * 18 + 4827 * 1 + -38 * 262 !== G0.push(n) && Fa === Z.requestAnimationFrame || ((Fa = Z.requestAnimationFrame) || Mc)(Wc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Li = V = null;
}, Z.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Cn), t.__h = t.__h.filter(function(e) {
        return !e.__ || Er(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], Z.__e(e, t.__v);
    }
  }), La && La(i, n);
}, Z.unmount = function(i) {
  Oa && Oa(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Cn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && Z.__e(n, t.__v));
};
var Ua = typeof requestAnimationFrame == "function";
function Mc(i) {
  var n, t = function() {
    clearTimeout(e), Ua && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Ua && (n = requestAnimationFrame(t));
}
function Cn(i) {
  var n = V, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), V = n;
}
function Er(i) {
  var n = V;
  i.__c = i.__(), V = n;
}
function ra(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function F0(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const pi = _e(void 0);
pi.displayName = "AppStateContext";
function HA() {
  const i = he(pi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class v0 extends le {
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
    return ((n = this.context) == null ? void 0 : n.appState) === H.ERROR ? null : this.props.children;
  }
}
p(v0, "contextType", pi);
function W0(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function dr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function M0(i, n) {
  var t = n(), e = hA({ t: { __: t, u: n } }), A = e[0].t, o = e[-4033 + 2017 * 2];
  return ao(function() {
    A.__ = t, A.u = n, Oi(A) && o({ t: A });
  }, [i, t, n]), eA(function() {
    return Oi(A) && o({ t: A }), i(function() {
      Oi(A) && o({ t: A });
    });
  }, [i]), t;
}
function Oi(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-5904 + -9 * -656 !== n || 1 / n == (-8847 + 53 * 38 + 6834) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function L0(i) {
  i();
}
function O0(i) {
  return i;
}
function J0() {
  return [!1, L0];
}
var U0 = ao;
function lr(i, n) {
  this.props = i, this.context = n;
}
function Lc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : dr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, PA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(lr.prototype = new le()).isPureReactComponent = !0, lr.prototype.shouldComponentUpdate = function(i, n) {
  return dr(this.props, i) || dr(this.state, n);
};
var Ya = M.__b;
M.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Ya && Ya(i);
};
var Oc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -1 * -8882 + -1705 + 142 * -23;
function aa(i) {
  function n(t) {
    var e = W0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Oc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Pa = function(i, n) {
  return i == null ? null : He(He(i).map(n));
}, Jc = { map: Pa, forEach: Pa, count: function(i) {
  return i ? He(i).length : 4683 + -5 * -39 + -4878;
}, only: function(i) {
  var n = He(i);
  if (4903 * 2 + -8 * 58 + 1 * -9341 !== n.length) throw "Children.only";
  return n[-2088 + 763 * -6 + 6666];
}, toArray: He }, Uc = M.__e;
M.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  Uc(i, n, t, e);
};
var Ta = M.unmount;
function Y0(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = W0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Y0(e, n, t);
  })), i;
}
function P0(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return P0(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Bn() {
  this.__u = -1 * 6983 + -934 * -4 + 3247, this.o = null, this.__b = null;
}
function T0(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Yc(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return PA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function xo() {
  this.i = null, this.l = null;
}
M.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), Ta && Ta(i);
}, (Bn.prototype = new le()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = T0(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[0] = P0(a, a.__c.__P, a.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || 32 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-5163 + -1 * 523 + 5686] }), i.then(r, r);
}, Bn.prototype.componentWillUnmount = function() {
  this.o = [];
}, Bn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[767 * 10 + -5042 + -73 * 36] = Y0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && PA(fe, null, i.fallback);
  return A && (A.__u &= -33), [PA(fe, null, n.__a ? null : i.children), A];
};
var Ha = function(i, n, t) {
  if (++t[7116 + -113 * 83 + 2264] === t[-745 + -6753 * 1 + 7498] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-6152 + 1 * -8069 + -1 * -14221] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -1835 + -5503 * 1 + -1 * -7341; ) t.pop()();
    if (t[-2714 + -6387 * -1 + -216 * 17] < t[9420 + -1570 * 6]) break;
    i.i = t = t[-18608 + -18610 * -1];
  }
};
function Pc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Tc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    nt(null, n.v), n.v = null, n.h = null;
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
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 10980 + -1 * 10979, -9552 + -1 * 7139 + 16692), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, nt(PA(Pc, o, i.__v), n.v);
}
function Hc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = PA(Tc, t);
  return e.containerInfo = n, e;
}
(xo.prototype = new le()).__a = function(i) {
  var n = this, t = T0(n.__v), e = n.l.get(i);
  return e[-17 * -34 + -8364 + 7786]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Ha(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, xo.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = He(i.children);
  i.revealOrder && i.revealOrder[6975 + -25 * 279] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [3650 + -208 * -5 + -4689, 7862 + -83 * -101 + 45 * -361, this.i]);
  return i.children;
}, xo.prototype.componentDidUpdate = xo.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Ha(i, t, n);
  });
};
var H0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 14216 * -3 + -78763 + 1931 * 94, _c = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Kc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, jc = /[A-Z0-9]/g, qc = typeof document < "u", Vc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function Zc(i, n, t) {
  return n.__k == null && (n.textContent = ""), nt(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function zc(i, n, t) {
  return ta(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(le.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var _a = M.event;
function Xc() {
}
function $c() {
  return this.cancelBubble;
}
function AC() {
  return this.defaultPrevented;
}
M.event = function(i) {
  return _a && (i = _a(i)), i.persist = Xc, i.isPropagationStopped = $c, i.isDefaultPrevented = AC, i.nativeEvent = i;
};
var Qn = {};
Qn.enumerable = !1, Qn.configurable = !0, Qn.get = function() {
  return this.class;
};
var ga, eC = Qn, Ka = M.vnode;
M.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || qc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Vc(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Kc.test(r) && (r = a) : a = r = "oninput" : o && _c.test(r) ? r = r.replace(jc, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", eC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = H0, Ka && Ka(i);
};
var ja = M.__r;
M.__r = function(i) {
  ja && ja(i), ga = i.__c;
};
var qa = M.diffed;
M.diffed = function(i) {
  qa && qa(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), ga = null;
};
var yA = {};
yA.readContext = function(i) {
  return ga.__n[i.__c].props.value;
}, yA.useCallback = Ge, yA.useContext = he, yA.useDebugValue = Un, yA.useDeferredValue = O0, yA.useEffect = eA, yA.useId = R0, yA.useImperativeHandle = N0, yA.useInsertionEffect = U0, yA.useLayoutEffect = ao, yA.useMemo = kA, yA.useReducer = ia, yA.useRef = Ae, yA.useState = hA, yA.useSyncExternalStore = M0, yA.useTransition = J0;
var _0 = {};
_0.current = yA;
var K0 = {};
K0.ReactCurrentDispatcher = _0;
var tC = K0;
function oC(i) {
  return PA.bind(null, i);
}
function mi(i) {
  return !!i && i.$$typeof === H0;
}
function nC(i) {
  return mi(i) && i.type === fe;
}
function iC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function rC(i) {
  return mi(i) ? oa.apply(null, arguments) : i;
}
function aC(i) {
  return !!i.__k && (nt(null, i), !0);
}
function gC(i) {
  return i && (i.base || -9541 + -4771 * -2 === i.nodeType && i) || null;
}
var sC = function(i, n) {
  return i(n);
}, IC = function(i, n) {
  return i(n);
}, cC = fe, CC = mi, wt = { useState: hA, useId: R0, useReducer: ia, useEffect: eA, useLayoutEffect: ao, useInsertionEffect: U0, useTransition: J0, useDeferredValue: O0, useSyncExternalStore: M0, startTransition: L0, useRef: Ae, useImperativeHandle: N0, useMemo: kA, useCallback: Ge, useContext: he, useDebugValue: Un, version: "18.3.1", Children: Jc, render: Zc, hydrate: zc, unmountComponentAtNode: aC, createPortal: Hc, createElement: PA, createContext: _e, createFactory: oC, cloneElement: rC, createRef: lc, Fragment: fe, isValidElement: mi, isElement: CC, isFragment: nC, isMemo: iC, findDOMNode: gC, Component: le, PureComponent: lr, memo: Lc, forwardRef: aa, flushSync: IC, unstable_batchedUpdates: sC, StrictMode: cC, Suspense: Bn, SuspenseList: xo, lazy: Yc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tC };
function j0(i, n, t, e, A) {
  return DA(t - 529, i);
}
(function(i, n) {
  function t(a, s, c, I, x) {
    return DA(I - -469, a);
  }
  function e(a, s, c, I, x) {
    return DA(c - -594, a);
  }
  const A = i();
  function o(a, s, c, I, x) {
    return DA(a - -498, x);
  }
  function r(a, s, c, I, x) {
    return DA(c - -626, x);
  }
  function g(a, s, c, I, x) {
    return DA(c - -840, I);
  }
  for (; ; )
    try {
      if (parseInt(t("SJF&", -193, -188, -202, -199)) / 1 * (-parseInt(e("&e@d", -325, -316, -326, -327)) / 2) + -parseInt(t("%Bt1", -198, -204, -187, -200)) / 3 * (-parseInt(g(-544, -565, -559, "JaZF", -558)) / 4) + parseInt(e("%Bt1", -325, -310, -329, -328)) / 5 * (-parseInt(r(-353, -364, -356, -365, "Rb]A")) / 6) + -parseInt(e("dfSW", -311, -303, -297, -301)) / 7 + parseInt(o(-227, -225, -245, -224, "AwTv")) / 8 + parseInt(r(-325, -352, -339, -349, "j!GY")) / 9 + parseInt(g(-540, -540, -545, "ti1]", -529)) / 10 * (parseInt(o(-215, -231, -218, -224, "*b14")) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Yn, -1952 * -128 + -13477 * 17 + 81902 * 3);
function q0(i, n, t, e, A) {
  return DA(n - -966, t);
}
function DA(i, n) {
  const t = Yn();
  return DA = function(e, A) {
    e = e - (743 * 5 + -4619 * 2 + 5783);
    let o = t[e];
    if (DA.gPVMPn === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      DA.bJdLTc = c, i = arguments, DA.gPVMPn = !0;
    }
    const g = t[1479 * -4 + -4776 * -1 + 57 * 20], a = e + g, s = i[a];
    return s ? o = s : (DA.xyPFLS === void 0 && (DA.xyPFLS = !0), o = DA.bJdLTc(o, A), i[a] = o), o;
  }, DA(i, n);
}
function Yn() {
  const i = ["DuGsW5NcRSkizMOUWPLGbq", "W6RdM8ooWPCt", "WOBdI8oZD8opWRRdPSoIqSkcxmkL", "WQS4W7NdOcpcMfpdRZKdcG", "vJJdMCoRqtddUCoxW7DPl1K", "e8oCECorea", "WOP1W6xcO8of", "WOpdISo+CmolWR/cLmo4ySkVDmk4wW", "W4tdJhTHDmktWR3dVSovumols8oj", "iCkgW7/dNIG", "amkdC1lcPG", "W6XeWPZdRvGMECoYW5BdLZil", "WP3dM2/cV0JdNSoEW5Ga", "vZBcISktm0hdVSog", "ymksW4tdJde", "WP3cH1m", "W4tdLaJdKum", "k8orWQ3cH2qGW77cNmoN", "W4mOBmog", "WQSzW47dUH0", "WQ7cSatcM8oZxCoenColi8kb", "WQG5W73dOstdJYVdIXWrps3dUW", "lCoqWQldTWeAW7xcNmoqWRm1", "WRLTBGJdUG", "W6JcO8ohW6TtpWGQ", "iJ0zW6rc", "CqrQWPhcTq", "WQ7cTq/cNSkLvCoSi8ofpG", "W7ldGf49W415WQndW6JcLW", "dmo2BghcSw9tx8kP", "WRXPW6VcM3W", "W5W8WPNdTCkEoSoLW7uKC8kJ", "WQpcJHZdUmk6mbCO", "WP8cAfFdTmkoCrK", "WQpcHupdPCkZedqOcq", "W7P6rhubWQNcRxRdLSolWODyWPy", "WO/cMG9OW4u"];
  return Yn = function() {
    return i;
  }, Yn();
}
function BC(i, n, t, e, A) {
  return DA(e - 478, t);
}
const Pn = _e(void 0);
Pn[q0(-668, -674, "K4]K") + Tn(650, 633, "JaZF") + "e"] = BC(750, 769, "&e@d", 764) + Tn(619, 606, "YhZ)") + j0("TXVb", 812, 797);
function Tn(i, n, t, e, A) {
  return DA(n - 340, t);
}
function yi() {
  function i(o, r, g, a, s) {
    return q0(o - 12, a - 463, g);
  }
  function n(o, r, g, a, s) {
    return j0(o, r - 29, a - -1393);
  }
  const t = he(Pn);
  if (t === void 0) throw new Error(Pn[e(-566, "JiWY", -554, -570, -555) + A(1274, 1283, "hbT4", 1265) + "e"] + (i(-227, -244, "hbT4", -239) + e(-569, "@0GO", -559, -548, -553) + n("J5u0", -608, -599, -595) + A(1225, 1228, "qBMk", 1229) + i(-206, -213, "AwTv", -223) + e(-559, "mumR", -557, -559, -552) + i(-200, -202, "QSYx", -215) + n("Tyya", -603, -614, -599)));
  function e(o, r, g, a, s) {
    return Tn(o - 103, s - -1168, r);
  }
  function A(o, r, g, a, s) {
    return Tn(o - 385, a - 629, g);
  }
  return t;
}
const Hn = _e(void 0);
Hn.displayName = "AnalyticsContext";
function QC() {
  const i = he(Hn);
  if (i === void 0)
    throw new Error(`${Hn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Ji = (i) => i.length < -4081 + -872 * -3 + 1466 ? 1606 + 1 * -1606 : i.reduce((t, e) => t + e, 2 * 1033 + 1171 * 3 + -5579) / i.length, Pt = (i) => Number.parseFloat(i.toFixed(-1096 * 6 + -4283 + 10862));
function xC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(3 * 1111 + -463 * 18 + 3 * 1667, 3983 + 266 * -17 + -11 * -49, n.canvas.width, n.canvas.height);
}
const V0 = 0 + 0.75, EC = -6030 + 6540 * -1 + -449 * -28, dC = -939 + -1 * -1539, lC = "dot-auto-capture-video", Di = (i, n) => Math.min(i, n), Z0 = ({ height: i, width: n }, t) => {
  const e = Di(n, i) * t, A = (n - e) / (-8656 + -26 * -333), o = (i - e) / (4101 + 669 * -13 + 4598), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, uC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Z0(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, fC = ({ height: i, width: n }) => {
  const t = Di(n, i), e = t / (-7557 + 1890 * 4) * (1880 + 7 * -268);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function hC(i, n) {
  const t = Di(n.width, n.height);
  return Pt(i * t);
}
function pC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, Z0(t, V0);
}
function mC(i) {
  return uC(i, V0);
}
function yC(i, n) {
  return hC(i, n) * EC;
}
const DC = "8.0.1", wC = {
  version: DC
}, bC = -6 * -253 + 2275 + 473 * -8 + 0.8100000000000005, ur = {};
ur.max = 100, ur.min = 10;
const Va = ur, kC = -3911 * 1 + -3 * -1157 + 1160, SC = -201 * -3 + -821 * 9 + 6986, GC = 13 * 3 + 2937 + -4 * 743, z0 = "AES-CBC", X0 = "RSA-OAEP", NC = "SHA-256", RC = "image/jpeg", FC = -3987 * 1 + -6308 + 10303 * 1, $0 = "/dot-assets", Za = "dot_embedded_bg.wasm", fr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), As = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Pt(t) : t)), es = () => wC.version, ts = (i) => new URL(i).hostname.replace("www.", ""), sa = () => ts(window.location.href) === "localhost", vC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function WC(i) {
  return i.at(-1) === "/" ? i.slice(1917 + 89 * 23 + -3964, -1) : i;
}
function MC(i) {
  return "" + WC(i ?? "") + $0;
}
function LC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Co(i) {
  return (...n) => {
    sa() && console[i](...n);
  };
}
const Ia = { log: Co("log"), warn: Co("warn"), error: Co("error"), info: Co("info"), debug: Co("debug") };
function OC({ analytics: i, crosshatch: n }) {
  if (!sa())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function JC({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = OC(o);
  return eA(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), eA(() => {
    e && (Ia.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function UC({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = yi(), { redfin: o } = HA(), r = JC({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = kA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ k(Hn.Provider, { value: g, children: t });
}
const hr = {};
hr.SIMD = "simd", hr.NO_SIMD = "no-simd";
const za = hr, pr = {};
pr.Lower = "Lower", pr.Higher = "Higher";
const Xt = pr, mr = {};
mr.MOBILE = "MOBILE", mr.DESKTOP = "DESKTOP";
const Xa = mr, _n = _e(void 0);
_n.displayName = "TransactionCountingContext";
function os() {
  const i = he(_n);
  if (i === void 0)
    throw new Error(`${_n.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function YC({ children: i, value: n }) {
  const { crosshatch: t } = yi(), { transactionCounting: e } = os(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Xt.Higher : Xt.Lower, o = kA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ k(pi.Provider, { value: o, children: i });
}
const Kn = _e(void 0);
Kn.displayName = "CameraServiceContext";
function St() {
  const i = he(Kn);
  if (i === void 0)
    throw new Error(`${Kn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function po() {
  return !1;
}
function PC() {
  return !0;
}
async function ns() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ui() {
  return (await ns()).filter((n) => n.kind === "videoinput");
}
function xn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function yr(i) {
  return i.getVideoTracks()[-647 + 1 * 647];
}
function jn() {
  const i = ["DCknW71ZlCoCWRet", "W65hW4FdSvZdVSobw3VdKCor", "vSkEWRhdKSkCW7pdTtxcTSkypt0c", "WPC/WPuFemkhzSoRW4VdNsJcRsi", "Bg/cTq", "W7rYWPmLsW", "l8o3WQvmWRRcNmomWRC6WOW", "W6KCnCkDhq", "yCo0rJpdHmorWRO2", "iCk0WOnXva", "WQLjzCkBfmkUWPTwEa", "WOBdLSk9WRZcKmonySofnMNcR8oG", "lXJcJ31NumkPaW", "W7lcIMG9WPe", "iNrCbMdcNrtdVCkyC2D9", "W7myi8kReq", "k8oTkSk/rq", "fSkFiu1m", "WQtcSM3dM8o2W5eIW73dVHifmCkQ", "WRu3wMtdUq", "n8o8WOm7WRq", "bHpcJZNdMG", "rdXkWODQWOldG3BdSSo/umoTlq", "W57cRalcHSoW", "WQldGYGRWRFdH8ouWOD8", "WQTqgtS", "WPJdU1tdGSkNWQaInmkQxJddGW", "WR3cLCkjxc7cP8oexW", "W4VcJCoOW7RdVq", "ySk8W5HUW4iBt0JcOmkXca", "idytq8omW6ZcUmosaLK", "WRhdVqdcHsWUoCozWQK3WQq", "F8kJrfzLB8ow", "C3vmfG", "l8oBW79dlG", "WPNdU17dGSkMWQzkd8kTwr/dPZa", "iCkvqrhdLG", "uxOXWQK1W5lcLSo2ocJcTgVcRG", "W5mkfdfkWPFdJG", "ddFdQSkRWPa", "FSkTCCoQm8k1W7BdMfLPW58", "fd7dPmkBWOi", "W7GrmmkApq", "k8k+WOfesa"];
  return jn = function() {
    return i;
  }, jn();
}
(function(i, n) {
  function t(a, s, c, I, x) {
    return wA(I - 242, s);
  }
  function e(a, s, c, I, x) {
    return wA(s - 463, a);
  }
  function A(a, s, c, I, x) {
    return wA(c - -798, x);
  }
  const o = i();
  function r(a, s, c, I, x) {
    return wA(s - 661, x);
  }
  function g(a, s, c, I, x) {
    return wA(a - -266, c);
  }
  for (; ; )
    try {
      if (-parseInt(e("jsKl", 785, 801, 780, 807)) / 1 + -parseInt(e("TJxX", 774, 766, 793, 753)) / 2 * (parseInt(r(977, 963, 962, 985, "gRWi")) / 3) + parseInt(g(66, 68, "K$D4", 71, 65)) / 4 * (-parseInt(A(-481, -481, -461, -469, "rcBL")) / 5) + parseInt(A(-463, -492, -484, -467, "^n3n")) / 6 * (parseInt(t(531, "$q$4", 545, 537, 515)) / 7) + -parseInt(A(-482, -466, -464, -480, ")HP]")) / 8 * (parseInt(g(42, 52, "5z^f", 47, 63)) / 9) + parseInt(g(33, 29, ")HP]", 22, 20)) / 10 + parseInt(t(543, "y0op", 577, 558, 573)) / 11 * (parseInt(g(64, 56, "Gm&X", 57, 56)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(jn, 300227 + 1 * -66011 + 60858);
function wA(i, n) {
  const t = jn();
  return wA = function(e, A) {
    e = e - (6035 + -2837 * 1 + -2903);
    let o = t[e];
    if (wA.JCwiGK === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      wA.JeAIoJ = c, i = arguments, wA.JCwiGK = !0;
    }
    const g = t[389 * -15 + -9733 * 1 + 15568], a = e + g, s = i[a];
    return s ? o = s : (wA.gTRgpQ === void 0 && (wA.gTRgpQ = !0), o = wA.JeAIoJ(o, A), i[a] = o), o;
  }, wA(i, n);
}
function TC(i) {
  function n(g, a, s, c, I) {
    return wA(a - 319, c);
  }
  function t(g, a, s, c, I) {
    return wA(a - -368, s);
  }
  const e = new ArrayBuffer(i[n(653, 644, 631, "92VE") + "h"]), A = new Uint8Array(e);
  for (let g = -4915 + 2464 * -2 + 1 * 9843, a = i[n(633, 617, 614, "5z^f") + "h"]; g < a; g++)
    t(-35, -41, "3Gy2") === n(602, 619, 616, "y0op") ? _0x218203[_0x59d839] = _0xf6811f[r(-396, -393, "9&S*") + o("RJRL", 1028, 1048, 1045, 1041)](_0x319626) : A[g] = i[r(-412, -390, "Mh7a") + t(-41, -55, "*Oly")](g);
  function o(g, a, s, c, I) {
    return wA(I - 734, g);
  }
  function r(g, a, s, c, I) {
    return wA(a - -696, s);
  }
  return e;
}
(function(i, n) {
  const t = i();
  function e(a, s, c, I, x) {
    return $(s - -899, x);
  }
  function A(a, s, c, I, x) {
    return $(c - -169, I);
  }
  function o(a, s, c, I, x) {
    return $(a - -460, I);
  }
  function r(a, s, c, I, x) {
    return $(I - 223, x);
  }
  function g(a, s, c, I, x) {
    return $(x - 676, a);
  }
  for (; ; )
    try {
      if (-parseInt(g("^NJi", 901, 879, 850, 873)) / 1 * (-parseInt(o(-275, -271, -275, "RnyZ", -294)) / 2) + parseInt(r(421, 396, 404, 397, "7TnH")) / 3 * (parseInt(A(36, 68, 61, "QryP", 64)) / 4) + parseInt(r(431, 441, 460, 427, ")9!r")) / 5 * (parseInt(r(448, 444, 434, 451, "QryP")) / 6) + -parseInt(A(36, 50, 45, "f[k%", 33)) / 7 * (-parseInt(A(34, 44, 44, "]Ff$", 40)) / 8) + -parseInt(A(11, 5, 10, "hib$", -20)) / 9 * (parseInt(e(-653, -675, -700, -663, "4Q4i")) / 10) + -parseInt(g(")9!r", 869, 839, 902, 871)) / 11 + parseInt(r(421, 418, 377, 394, "rhuz")) / 12 * (parseInt(o(-241, -247, -259, "jfLB", -231)) / 13) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(qn, -203254 + -79881 * 2 + 79 * 6059);
async function HC() {
  const i = {};
  i[t(-62, -36, -38, -10, "hp%T")] = z0, i[e(340, 351, 370, "7rwR", 363) + "h"] = 256;
  const n = await window[e(347, 370, 394, "]hGf", 375) + "o"][e(345, 372, 380, "v8^S", 374) + "e"][e(346, 352, 323, "]hGf", 346) + e(310, 368, 318, "mPNF", 339) + "y"](i, !0, [s(541, "h9H5", 563, 552) + "pt", e(371, 359, 346, "hp%T", 361) + "pt"]);
  function t(c, I, x, C, E) {
    return $(I - -220, E);
  }
  function e(c, I, x, C, E) {
    return $(E - 169, C);
  }
  const A = Uint8Array[r("ggRe", 1125, 1149, 1108, 1138)](Array(654 + 3 * 685 + 2693 * -1)[r("QryP", 1154, 1159, 1134, 1149)](39 * 41 + 9953 * 1 + -11552)), o = window[s(571, "DP[&", 536, 554) + "o"][t(20, -5, 5, -35, "^NJi") + t(3, 0, -18, -3, "ScVy") + g(-527, "*dAQ", -494, -496)](A);
  function r(c, I, x, C, E) {
    return $(E - 926, c);
  }
  function g(c, I, x, C, E) {
    return $(C - -687, I);
  }
  const a = {};
  a[e(348, 374, 400, "h9H5", 371)] = n, a.iv = o;
  function s(c, I, x, C, E) {
    return $(C - 364, I);
  }
  return a;
}
async function _C(i) {
  const { iv: n, key: t } = await HC();
  function e(I, x, C, E, d) {
    return $(x - -695, d);
  }
  const A = {};
  A[c(761, "Q8uP", 764, 780, 767)] = z0, A.iv = n;
  function o(I, x, C, E, d) {
    return $(C - 329, d);
  }
  const r = await window[g(191, 228, 219, "8bbF") + "o"][c(761, "^NJi", 763, 762, 742) + "e"][o(494, 492, 504, 529, "t[Pq") + "pt"](A, t, i);
  function g(I, x, C, E, d) {
    return $(C - -8, E);
  }
  const a = await window[e(-443, -468, -490, -463, "8bbF") + "o"][e(-496, -470, -466, -445, "8bbF") + "e"][e(-505, -523, -541, -545, "]hGf") + e(-446, -478, -502, -488, "93IY")](e(-515, -496, -475, -482, "SgJY"), t), s = {};
  s[g(193, 150, 179, "rhuz") + "ge"] = r;
  function c(I, x, C, E, d) {
    return $(d - 564, x);
  }
  return s[e(-487, -460, -429, -444, "ScVy")] = a, s.iv = n, s;
}
function qn() {
  const i = ["iCkvWQf0WRrstSoTnLS", "tu4wW7fR", "WRtdN8oHEgy", "hSoSFCkbra", "W6RdVfKGW6SBW5WtlG", "WR3cVXaHW5S", "bmosW6DItq", "teuwW6X2", "felcMSkXnMzTWQtdPSkvEq", "WR43W63dNCkt", "AeHXC3NdHfDPd8oJlSkFW4q", "WQ1za8kYkbpdOq", "W6NcM8kfoCoHoaS", "W69CFmkPWR/dOqFdK8oabHNdOG", "pmkekW", "lZpcHmkr", "BeH0CG7cVc1vgSog", "emoNzW", "FqNdVCkS", "y010DNZcQIDzh8oTaW", "xGBdI8oXBW", "W5moWRmboa", "wCoGp8koWOKTzW", "W79Kt1NdVW", "pXiKmda", "DIhdRmkIFa", "WQmdWP/dJCkL", "W6/dQ8k7WO0", "yrzVCMKhACkd", "W7HuW4dcKSoNW7yXW6BcGbNdIwO", "WR3cQmkjmCoT", "gGvBWOm", "EsK5dq", "WOnfWPajkSo6iYC", "WOdcGSkcW7xcM2KCWQm", "DmoIymkYWRy", "gXzeWQ06WPxcVCo/WPzaomkA", "W6NdNq3cJhZcJSozqa", "W6eqW69j", "W6ZdMKNcL1hcJSotrmkN", "DJH4WP/cKa", "mmoDxmk7", "zJ9JWPVcIa", "WRrjW5vKEuOmWPa", "u8ovhf4T", "WRvbWRuCcZupWQJcLKyRia", "BeRdKmoqWRf1B1xdOSoVrqO", "W6zMWRhcJCowmmkwWO3cRcSo", "W69Jvf3dPW", "hSohn0ZdQNhdTSopsu99dw4", "CCoJDG", "WPSpcYDT", "W6RcJmkJodjLWQtcQsxdK8oiWQm", "W5ueWROEpG", "WRZdLmoXEx4", "W6xdKCk0ud0mWQ8", "W7THgmkApa", "l8krm8oN", "W5CzWQqupG", "WQNcUmkFf8oG", "WPFdIsSnW6ntWOOykmkvW5K", "BcbQWOtcJG", "bfVdHmka", "zZldOG", "AuWraW3cUsXm", "rKeyW7S"];
  return qn = function() {
    return i;
  }, qn();
}
function $(i, n) {
  const t = qn();
  return $ = function(e, A) {
    e = e - (1461 * -5 + -6 * 756 + -12011 * -1);
    let o = t[e];
    if ($.zkcyyP === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      $.IDeCVe = c, i = arguments, $.zkcyyP = !0;
    }
    const g = t[4795 * 1 + -972 + -3823], a = e + g, s = i[a];
    return s ? o = s : ($.cUKdQU === void 0 && ($.cUKdQU = !0), o = $.IDeCVe(o, A), i[a] = o), o;
  }, $(i, n);
}
async function KC(i) {
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return bA(g - -303, a);
  }
  function e(g, a, s, c, I) {
    return bA(c - 432, a);
  }
  function A(g, a, s, c, I) {
    return bA(I - 272, a);
  }
  const o = i();
  function r(g, a, s, c, I) {
    return bA(a - -871, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(870, "ykFW", 880, 853, 864)) / 1 + parseInt(e(816, "HsJW", 800, 831, 795)) / 2 + parseInt(e(869, "lr8P", 871, 880, 891)) / 3 + -parseInt(r(-487, -441, -480, "laBl", -443)) / 4 + -parseInt(A(618, "HsJW", 626, 649, 663)) / 5 + parseInt(A(655, "kENd", 635, 703, 678)) / 6 * (parseInt(e(830, "keMN", 856, 815, 789)) / 7) + parseInt(A(672, "aJRK", 712, 670, 706)) / 8 * (parseInt(t(159, "4Fbp", 195, 158, 150)) / 9) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vn, 545491 + -8333 * 19 + 392001);
const jC = -1583 + -1988 * 1 + 6571, qC = 7 * 241 + -5836 + 11149, is = 5499 + 12 * -458, rs = 1 * 6529 + 9329 + -15858 + 0.5, as = {};
as[ZA(561, "UrcV")] = 1280;
const gs = {};
gs[zA(539, 576, 612, "oj$p")] = 720;
function ZA(i, n, t, e, A) {
  return bA(i - 153, n);
}
const ss = {};
ss[zA(669, 634, 614, "k3NC")] = 60;
const En = {};
En[XA(-41, "fmQG", -18, -1)] = as, En[TA(-247, -271, "]bsF", -306, -272) + "t"] = gs, En[aA(831, 852, 872, 865, "lY^)") + TA(-278, -280, "^qMx", -233, -236)] = ss;
const Is = {};
Is[XA(-75, "]E9[", -94, -54)] = 1920;
function zA(i, n, t, e, A) {
  return bA(n - 175, e);
}
const cs = {};
cs[aA(831, 821, 850, 840, "lr8P")] = 1080;
const dn = {};
dn[zA(623, 636, 625, "rNCP")] = Is, dn[XA(-3, "laBl", -24, -22) + "t"] = cs, dn[TA(-350, -340, "zkpX", -322, -313) + zA(527, 572, 614, "UrcV")] = 30;
function bA(i, n) {
  const t = Vn();
  return bA = function(e, A) {
    e = e - (-7184 + -1 * -7559);
    let o = t[e];
    if (bA.jmJYaw === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      bA.oDnVLk = c, i = arguments, bA.jmJYaw = !0;
    }
    const g = t[0], a = e + g, s = i[a];
    return s ? o = s : (bA.cHiRLB === void 0 && (bA.cHiRLB = !0), o = bA.oDnVLk(o, A), i[a] = o), o;
  }, bA(i, n);
}
const Cs = {};
Cs[TA(-281, -289, "rNCP", -372, -326)] = 1;
function XA(i, n, t, e, A) {
  return bA(e - -441, n);
}
const Bs = {};
Bs[aA(842, 842, 787, 814, "CHBH")] = 1;
const Qs = {};
Qs[aA(904, 833, 883, 873, "fkeB")] = 1;
const ln = {};
ln[TA(-234, -239, "]$l7", -248, -258)] = Cs, ln[XA(44, "lr8P", 12, 25) + "t"] = Bs, ln[aA(888, 916, 927, 890, "m5OM") + XA(-64, "keMN", -24, -21)] = Qs;
const xs = {};
xs[XA(-18, "aJRK", -16, -4)] = 1;
const Es = {};
Es[aA(862, 880, 845, 854, "j)cS")] = 1;
const ds = {};
ds[TA(-306, -258, "ykFW", -284, -293)] = 1;
const un = {};
un[XA(-4, "4Fbp", -11, 16)] = xs, un[TA(-236, -255, "oj$p", -322, -280) + "t"] = Es, un[aA(806, 845, 821, 845, "CuF7") + aA(865, 836, 893, 871, "$ZhD")] = ds;
const bo = {};
function Vn() {
  const i = ["W54PW6mccW", "WRlcSgZdLmoDWQe/", "W5tdNJ0", "lSk4W4HfWO0", "pmkGW45D", "WPBcKmkdWQL3", "W5OummoU", "yf4hWONcRq", "pmo6nmoFzW", "W4W4W6yvfW", "W4BdG8oBWQrohhdcSWq", "xvddTJVcOCoBCSkqW4CezG", "WOFcGCooWOjj", "WPP0rNddJG", "WQFdL0NcJs4", "W6JdLCk7k8oTW6hcPGXJ", "lxqFWPZdKW", "W7DhkmowW40", "WQeJW43cOSo4", "bSkku8okWPW", "d2T8d8kO", "W6ziWQu", "WO/dGCkhemot", "W6ZcTeOzusuxW6X0WPTib0O", "FmkHvCo9wa", "eubPWQtdVq", "Fr5nsgS", "l2BcNSompW", "W6LpWQi", "W4j3W6JdJq", "WPH0WRjduCoNW7rPhSk9W6zsWP/dMa", "W6BcUuOrwcjlW5nuWRbviW", "WPTne8oBW44", "uJtdGmkaWQ4", "WPFcKCkpWQ9Z", "W73cTty", "DCkDWQBcPJW", "W7PjWRJdLSkg", "W4XnzW5ksmouWOryW6eh", "o8oSW5tdSc8", "W7vUW73dI8kj", "oePwW5VdNa", "WP3cPmk0W5KY", "W5RcHSostCkoWQRcGczFoMfqBW", "oeDFW4K", "WQpcGSoSjmo6", "W7CxWQBdVq", "W7pcKZrJc8ocmhJdLSkxWR3cVZ0", "hKvGWQNdSW", "n8o4fCkSbSk0wh4MhCkgWRG", "WOBcLCogWQn6", "W6bzWR/dSmkd", "WOlcGSo+ja", "W4xdSSoPWO9RW7OopxCVl1RdGa", "W5BdHtK", "xYNdImkeWRi", "jgBcLCoS", "WPhcGmkeWRO", "eKLVhSku", "cwBcL8kGWQa", "W6vDWQ7dG8ko", "zbLHCIS", "WRWnW6hcRSoFWQ8EbmkpqxxdSmkv", "baxcP23dUW", "W5lcKLRdHh59zuxdR8kYeJD+", "W6JdIZOs", "wWhcKCkdw0/dGZldIYbYdCkudG", "WOXahmo8W48", "W6r5W64", "a1hdGCoxbq", "mSkhW5VdUa", "WQqWre/dUq", "omkLW4vEWOS", "WR3dJxNcIW", "W4uVW7a", "buddISoc", "awFcGSk/WQq", "ECkPrCoGxW", "kLHe", "WRpdN3m7wG", "W43dJCoFW7CNyapcQI7dGCkdedC", "W6mdWRVdImkd", "cxlcSmkSWQy", "wuqacSk+", "jhxcH8o1pW", "letcK8oSnq", "p8kbWOxcGWyAxq", "W5JcGCoEsSkdWQ/cGHTYdMX2Fq", "W6lcTKNdOW", "W7ZcSvNdPmoM", "WQaUW4RcUmoK", "jmktW5xdRea", "AmkHuSoG"];
  return Vn = function() {
    return i;
  }, Vn();
}
bo[XA(19, "]$l7", 24, 19)] = En, bo[aA(787, 838, 858, 818, "Zq!q") + aA(921, 902, 922, 884, "@(lP")] = dn;
function aA(i, n, t, e, A) {
  return bA(e - 438, A);
}
bo[TA(-274, -218, "fmQG", -225, -238)] = ln, bo[ZA(562, "@(lP") + zA(654, 617, 657, "rNCP")] = un;
const Zn = bo, Tt = {};
Tt[TA(-319, -302, "laBl", -317, -275) + ZA(539, "PtFZ") + zA(655, 639, 621, "fmQG")] = jC;
function TA(i, n, t, e, A) {
  return bA(A - -703, t);
}
Tt[aA(807, 810, 804, 823, "Yoi&") + XA(-54, "CJMQ", -93, -66) + zA(664, 622, 641, "QByL") + ZA(542, "laBl")] = Zn[zA(604, 589, 556, "BiEP")], Tt[ZA(537, "LV]C") + zA(581, 604, 612, "xbDY") + TA(-350, -278, "^wPH", -298, -309) + ZA(609, "4Fbp")] = Zn[aA(812, 888, 829, 851, "keMN") + ZA(549, "laBl")], Tt[aA(842, 865, 822, 843, "laBl") + ZA(596, "aJRK")] = is, Tt[ZA(571, "Zq!q") + TA(-287, -282, "]$l7", -298, -311) + TA(-236, -213, "m5OM", -221, -250) + XA(-35, "lY^)", 19, 9) + ZA(589, "UrcV")] = rs;
const Ot = {};
Ot[XA(-24, "m5OM", -8, -46) + aA(859, 805, 856, 820, "WHpd") + aA(935, 926, 895, 902, "fmQG")] = qC, Ot[ZA(604, "r]$f") + TA(-204, -227, "PtFZ", -269, -245) + XA(-78, "jBW^", -72, -37) + XA(-3, "$ZhD", 37, 22)] = Zn[ZA(565, "@(lP")], Ot[TA(-295, -265, "j)cS", -291, -310) + zA(649, 614, 587, "4&s[") + TA(-249, -261, "lY^)", -302, -259) + aA(917, 842, 896, 879, "WHpd")] = Zn[zA(628, 601, 617, "^KkH") + ZA(575, "$ZhD")], Ot[aA(862, 919, 933, 887, "BiEP") + XA(-47, "lr8P", -10, -16)] = is, Ot[zA(539, 575, 595, "fkeB") + ZA(534, "N(l%") + aA(812, 815, 800, 826, "^KkH") + zA(613, 625, 624, "lY^)") + zA(551, 578, 532, "u(tu")] = rs;
const Dr = {};
Dr[aA(844, 850, 854, 862, "m5OM")] = Tt, Dr[aA(914, 847, 882, 876, "k3NC")] = Ot;
const VC = Dr;
function BA(i, n, t, e, A) {
  return dA(e - -10, t);
}
function KA(i, n, t, e, A) {
  return dA(t - 342, i);
}
function nA(i, n, t, e, A) {
  return dA(n - 615, t);
}
function SA(i, n, t, e, A) {
  return dA(A - -212, i);
}
(function(i, n) {
  const t = i();
  function e(a, s, c, I, x) {
    return dA(s - 632, x);
  }
  function A(a, s, c, I, x) {
    return dA(s - -298, I);
  }
  function o(a, s, c, I, x) {
    return dA(s - -571, I);
  }
  function r(a, s, c, I, x) {
    return dA(x - 697, a);
  }
  function g(a, s, c, I, x) {
    return dA(x - 131, s);
  }
  for (; ; )
    try {
      if (parseInt(g(640, "r^K2", 578, 772, 631)) / 1 + -parseInt(g(697, "pD(#", 796, 748, 679)) / 2 * (-parseInt(A(119, 205, 171, "1]do", 97)) / 3) + -parseInt(o(134, 145, 9, "*pba", 65)) / 4 * (-parseInt(A(48, 177, 286, "jFRB", 52)) / 5) + parseInt(r("pD(#", 1271, 1352, 1289, 1320)) / 6 * (-parseInt(r("pD(#", 1361, 1133, 1180, 1221)) / 7) + -parseInt(o(25, 130, 194, "AL*C", 271)) / 8 * (-parseInt(A(222, 321, 322, "AL*C", 364)) / 9) + parseInt(A(495, 353, 231, "YU)Q", 343)) / 10 + -parseInt(e(1284, 1267, 1399, 1346, "m0^]")) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zn, 3 * -49570 + -2067 * -39 + 267159);
function MA(i, n, t, e, A) {
  return dA(e - -244, n);
}
function zn() {
  const i = ["WPNdGg0Lea", "r0ZdP0y0", "W6T0WQRcQdK", "W4tcTHa", "BI7cHSkUW7u", "WQxcJCoFW73dIG", "FI/cPmkWW5i", "WQn7zNJdTG", "WQNdGsywW4a", "w0iFWR0qWQTkW7BcNcjz", "hSk1WRpdHCoC", "cKaSr8o+", "WOZdS2n3lSo5pq", "AdeGcCkJ", "tg3cIG", "eCoZWRL4Bq", "xmk7W4f0bW", "iKf9", "k2LG", "W6RcGSkVW4xcRq", "cSksatlcOa", "gMSl", "eumcWQW", "aZXNgmox", "r8koWQFdIx4", "W4brjSkkWPu", "luautmot", "rZjapIa", "suBdU1iL", "WQtcHCofW7pdLG", "CJpcPCk0W7W", "WRVdHgngW4m", "WPNdGg0Jma", "W7z1mq1gW51GnmkMW7VdTSozWQy", "ueVdPr8o", "FxddULis", "oMGz", "lfuCumot", "xfn0W5HqWQ5CW7NcIYFdS8om", "cIPNkCox", "hM/cNsJdJa", "sSoPW7ldRCk2", "W4RcJCkmjmkE", "W6iuW7FdK8oKbLxcGmoJW7eQ", "WPZdRqpcGCkj", "vMVcKWRdNa", "gmkSWQRdKSop", "WOnanW", "wSkHW7CZza", "AqzJWRL+", "xW9p", "WRb8u1Tl", "WQOZW7pdQ3KMWOzuESoOWPTqWRu", "W5hcKb3dLmoi", "hc7cGmkUWOa", "WQaJF1ur", "vuNdOJmm", "W7zZoGXgW5WhiSkYW7/dICow", "WPZdGhyLhq", "WO3cOrhcNCko", "EmkWW4XPrG", "WRRdQhTjW48", "WRyNyfig", "WP7cRYldMSoU", "W7eSWP0oDW", "WRPGCL5A", "CZy8e8kd", "aSo3WQrhEW", "vbxcTa", "FCknW6XBfq", "WPtcSWpdN8o/", "W70lWOzmdG", "WQxdNtWnW74", "bWGT", "aMZcKHNcJW", "W7TYWQ7cUZK", "WPNcPtRdGmo5", "vXZcQMT+", "W71fWQFcVYa", "hcDVW7vd", "W5xdNKzybW", "W5FcLHddN8ot", "W7yCWOPkeG", "qwJdGuel", "ExzMEgu", "WQRdLxa", "d1JcIIddJG", "dSksbcNcTq", "W5DcpCklWPm", "WRXHAa", "rSodW7NdGSk3", "d0VcGIxdKW", "WRniWRtcPSk8", "WPddGgKRfG", "E0JdV2Od", "fetcMd3dKG", "DCk7W5n0bq", "W5xdK2rmfq", "W4NdO8kieYy", "W706WPuziW", "WONdMGWaW4i", "Fmk2W7GJza", "WRxcImoUW6BdLW", "W7CkWQXBhW", "W6ZdSmkBccq", "fJH6nCoc", "WOFdPMVcQSoU", "WOZdIrKCW5W", "hIbaWRSu", "WQ0PzW", "W7FcK8kYW6/cVa", "eeWC", "hCkxls7cPG", "AbRcJ0hdPG", "sw0GWOmPW7eJ", "ivbWsCoc", "W57dHxLSbq", "f0VcIsZdJa", "vctcPmkQW7K", "FWNcLeddOa", "mMKMWOua", "WRdcMbFcTmkZ", "ymk7WPBdO0C", "WQxcNmopW7xdKq", "gmo3WQbo", "WQFcQCokW5NdPG", "W7xcHSk0W4ZcVa", "fmk9WRpdS8oy", "bKFdSYa4WRNcGSkKbCkoi3O", "puvWtSoi", "hc9oWQW", "q3FcIqldNW", "W7iRBf0HWOq4", "A8k7W7CuDq", "aH5aW6G", "du0AWQCh", "WPNdMJejW5e", "e8oFWQK", "W4BdTmkaba", "AtK7dSkE", "W5VcNf9yea", "hCkahtdcOa", "WPldNN3cKmoK", "WQrXFMldOq", "W4lcLs93qWaJyZBcNCkaW53cRq", "nCo5WQnyFa", "mL3cHI3dKW", "WONdJYuaW4y", "m8oKWR9eEG", "W7tcGSkKW47cTq", "dfamWOyb", "rcZcTmk5W6W", "D1FdU1aH", "qZ3cUCk2W6W", "wWpcSfXV", "lfuetSoc", "W65PWQ/cVYi", "DXZcQMT+", "F8kVW6O0", "W4/dVKxdLmoipgWYW5nbWQqsDW", "WP3dHSoyD8oFWQZdVCoSW7RcKCkjlgC", "WRhcMmooW5FdHa", "vCosWONdHYC", "BSk1WOtdGW", "Ee1HBmo0pW0", "W6y1WPudDW", "W6OlWOjefa", "rMFcIWtdJa", "gmkIWQNdHmoj", "Fmk7W5D6aW", "W4dcIrhdImoD", "W4ZdLuHycW", "tKBdQKe", "rH7cPxzP", "WRZcVJBcICkR", "BSoVW7pdJCk5", "k0qpq8ot", "dSkAddNcUW", "qXRcNbRdSSosuY8", "yCk8WPBdRue", "rSo4W5ldKSk9", "uwJdT1Cj", "WOe0E1ma", "fv7cMa", "W7awWPq", "cJH+pG", "oIhcGmk2WQy", "W4dcHCkza8kp", "sSogw2ZdOmkXyttcOqmTvq", "r0ldPfaY", "utBcSNLM", "ztrakda", "hmkwhJxcTW", "W5D5kW", "vWFcGh18", "hczDWRmi", "W6CGWOubzG", "WPdcQbtcJCkC", "h0/cNsddGW", "WOtdIMWRaq", "oJrDW75B", "lsG3", "WOTHDvL7", "ymkaWOa", "BwDRr2u", "u0tdTa", "Dmk2WOu", "sSoLW7K", "WQDkWQFcJCk+", "cdb5W698", "depcS0TyW7xcJmkY", "WPFdJuxcJmkeAmkkhSoUW6tcNg8", "WQepz1OD", "hLJcPIZdHa", "cbryW6rk", "WR7cJCogW7e", "e8oYWOHzEG", "AG5UWQfL", "btb9pSos", "gfJcJIJdLa", "W57dMvPubW", "WRqhWRxcHSkP", "WPXqWQVcH8kU", "W4hdU8kefwC", "FmkbW6K0Eq", "r0KxWOufW6C7", "z2DTC2u", "BJKMcCkf", "W6a1WPubCa", "sKtdPvaj", "arrCW6Pm", "W5JdOmkEcq", "WP7cOH7cL8kj", "W47dMv5Cea", "W4RcUSkDm8kd", "nY1HpSox", "dmkKWQpdG8ov", "hIjgWRSt", "WQjSyN7dPW", "W5VcJmkZW4FcVq", "BCkVW7aSyW", "WQjoWQlcL8k1", "WQ19Fura", "WPpcQHZcGCk0", "W47cG8kinCkl", "c8khetdcSq", "hayQWO4w", "acXHoSoc", "penRy8ou", "W7aRWOzEdW", "WOldL1rXaSoVjq", "W6lcKahdLSoy", "W6yHWPi+AG", "WPFdINeXaq", "WRVdK3OWfG", "r8kfWQFdMgW", "WOFdMZWaW5a", "aWfpW65a", "WPxdH2WTgq", "FgT7Cw8", "kgqCB8oK", "wrBcTNK", "WQ7dK8o2WP7dR0pcUuO1W7P3WO92", "n0qurCop", "wHlcQx0", "qXjapsS", "WR4xWOXzwG", "fmkVWQ3dKSoE", "FX3cK3RdSq", "uMSIBCkoWOuPh0WhWQ1m", "uJjapdC", "D8k8WORdMfa", "W5FcLCkJW5NcUG", "W7eMWO4cCq", "W7NcRXxdISos", "W6P1WQxcIsq", "vNBcLapdIa", "CZvVWQz4", "WRhdGhHk", "WRpdSLXPW5m", "xIZcPmkCW70", "vKddPLSZ", "nK8juq", "F2pdR2Su", "qaFcRxzT"];
  return zn = function() {
    return i;
  }, zn();
}
function dA(i, n) {
  const t = zn();
  return dA = function(e, A) {
    e = e - (-349 * 7 + -5 * -145 + 1077 * 2);
    let o = t[e];
    if (dA.alpLQi === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      dA.sBWbUj = c, i = arguments, dA.alpLQi = !0;
    }
    const g = t[-41 * -64 + 2487 + -5111], a = e + g, s = i[a];
    return s ? o = s : (dA.RPhrWu === void 0 && (dA.RPhrWu = !0), o = dA.sBWbUj(o, A), i[a] = o), o;
  }, dA(i, n);
}
var n0, i0, Ue;
class ZC {
  constructor(n = {}) {
    U(this, Ue);
    p(this, i0, []);
    p(this, n0, {});
    function t(A, o, r, g, a) {
      return KA(r, o - 34, a - -410);
    }
    function e(A, o, r, g, a) {
      return SA(A, o - 404, r - 126, g - 260, g - -68);
    }
    v(this, Ue, VC), this[e("1tD*", 412, 424, 362) + t(701, 555, "9lnZ", 664, 647) + e("*pba", 404, 365, 322)](n);
  }
  [(i0 = BA(372, 590, "1tD*", 476) + MA(615, "@Ve#", 450, 475), n0 = BA(663, 518, "XJTq", 546) + BA(570, 666, "BbHW", 600) + "s", nA(1246, 1116, "GFDT") + nA(1277, 1206, "]S03") + nA(1138, 1147, "u25)") + "fo")](n) {
    function t(s, c, I, x, C) {
      return MA(s - 178, x, I - 87, I - 1050);
    }
    const e = yr(n);
    function A(s, c, I, x, C) {
      return nA(s - 334, s - -890, x);
    }
    function o(s, c, I, x, C) {
      return MA(s - 497, I, I - 82, x - -572);
    }
    function r(s, c, I, x, C) {
      return KA(x, c - 465, c - 576);
    }
    const g = e == null ? void 0 : e[A(420, 452, 284, "nhV]") + A(207, 156, 134, "ONso") + "s"]();
    if (!(g != null && g[A(298, 337, 391, "$eSM") + "t"]) || !(g != null && g[o(-491, -376, "GFDT", -374)]) || !(g != null && g[A(309, 396, 200, "m0^]") + t(1182, 1411, 1318, "*pba")])) {
      if (r(1709, 1618, 1475, "r^K2") !== t(1400, 1319, 1418, "[m1N")) throw new b(r(1363, 1363, 1239, "Q0^n") + r(1278, 1390, 1249, "$eSM") + r(1505, 1508, 1570, "@Ve#") + o(-73, -179, "IA#*", -136) + r(1616, 1549, 1658, "1]do") + o(-443, -214, "Meis", -340));
      {
        const s = _0x551b80(_0x2f2624), c = s == null ? void 0 : s[A(231, 143, 211, "ryQR") + A(215, 138, 238, "AL*C") + "s"]();
        if (!(c != null && c[o(-403, -171, "m0^]", -267) + "t"]) || !(c != null && c[r(1555, 1626, 1712, "C#m4")]) || !(c != null && c[o(-178, -198, "JDz*", -294) + t(1566, 1473, 1500, "FxbX")])) throw new _0x1a60f1(t(1287, 1249, 1327, "1tD*") + r(1484, 1413, 1485, "e*Qn") + A(439, 556, 320, "97HX") + r(1368, 1455, 1500, "GFDT") + A(437, 494, 437, "2NZl") + t(1217, 1360, 1326, "At^W"));
        if (s) {
          const I = {};
          return I[o(-280, -263, "JDz*", -332)] = s[A(250, 118, 205, "Y9Ls")], I.id = c[o(-161, -261, "O36j", -127) + A(234, 376, 173, "YFjh")], I;
        }
        return;
      }
    }
    if (e)
      if (o(-327, -316, "xq$E", -336) === A(323, 270, 335, "]S03")) {
        const s = {};
        return s[o(-319, -416, "q!Fx", -372)] = _0x42aa36, s;
      } else {
        const s = {};
        return s[A(401, 451, 406, "jFRB")] = e[a(569, "O36j", 582)], s.id = g[A(430, 569, 336, "r^K2") + t(1371, 1232, 1333, "y#Wq")], s;
      }
    function a(s, c, I, x, C) {
      return nA(s - 417, I - -641, c);
    }
  }
  async [SA("os6B", 342, 195, 213, 281) + MA(395, "h1aX", 328, 263) + BA(335, 496, "jFRB", 431) + "m"](n) {
    const t = document[A(706, 594, 573, 710, "$eSM") + e(575, "os6B", 669, 632) + A(591, 676, 788, 728, "XJTq")](e(592, "xq$E", 769, 635));
    t[a(1530, 1605, 1568, 1628, "ONso") + a(1528, 1491, 1515, 1502, "YFjh")] = !0, t[o(829, 765, "]S03", 621, 721)] = !0, t[o(920, 758, "[m1N", 854, 809) + e(780, "[Kao", 599, 735) + "e"] = !0, t[r(-395, -441, -490, "lCHM")][A(749, 963, 883, 838, "m0^]") + o(841, 912, "W!zq", 839, 823)] = o(842, 752, "m0^]", 642, 723) + A(849, 735, 634, 724, "JDz*"), t[a(1695, 1558, 1437, 1442, "nhV]")][o(671, 765, "r^K2", 696, 722) + "ty"] = "0", t[o(851, 793, "]S03", 871, 886)][a(1454, 1527, 1563, 1441, "xq$E") + r(-175, -69, -317, "u25)") + r(-172, -157, -202, "O36j")] = r(-221, -294, -257, "r^K2");
    function e(s, c, I, x, C) {
      return SA(c, c - 155, I - 114, x - 325, x - 275);
    }
    function A(s, c, I, x, C) {
      return SA(C, c - 362, I - 359, x - 230, x - 360);
    }
    t[a(1586, 1670, 1564, 1628, "@Ve#")][r(-399, -435, -418, "2NZl")] = r(-154, -41, -125, "px2r");
    function o(s, c, I, x, C) {
      return SA(I, c - 182, I - 127, x - 268, C - 471);
    }
    function r(s, c, I, x, C) {
      return nA(s - 352, s - -1461, x);
    }
    t[A(815, 763, 733, 794, "y#Wq")][a(1332, 1452, 1442, 1493, "y#Wq") + "t"] = o(747, 803, "3Njv", 780, 797);
    const g = await navigator[r(-158, -224, -173, "[m1N") + o(851, 756, "97HX", 874, 854) + "es"][r(-357, -246, -451, "[Kao") + o(927, 846, "O36j", 1050, 963) + "ia"](n);
    t[o(929, 868, "*pba", 922, 900) + r(-183, -83, -146, "IA#*")] = g, await t[a(1470, 1604, 1713, 1647, "HK8)")]();
    function a(s, c, I, x, C) {
      return BA(s - 371, c - 324, C, c - 993);
    }
    return g;
  }
  async [nA(1010, 1141, "[Kao") + MA(517, "At^W", 334, 408) + KA("AL*C", 786, 809)]() {
    var c, I;
    function n(x, C, E, d, l) {
      return nA(x - 263, l - -1596, d);
    }
    if (!po()) {
      if (n(-339, -367, -352, "1]do", -374) !== e(675, 598, "FxbX")) return;
      this[e(803, 717, "q!Fx") + e(548, 526, "HK8)") + "s"] = _0x447457;
    }
    const t = await this[A(1334, 1291, 1268, 1348, "9lnZ") + "st"](S(this, Ue)[e(870, 732, "9lnZ")]);
    function e(x, C, E, d, l) {
      return MA(x - 164, E, E - 63, C - 327);
    }
    function A(x, C, E, d, l) {
      return SA(l, C - 44, E - 136, d - 324, C - 879);
    }
    const o = await this[A(1218, 1144, 1281, 1216, "FxbX") + "st"](S(this, Ue)[g(265, 127, 392, 146, "p$V8")]), r = ((c = t[A(1160, 1213, 1189, 1196, "pD(#") + n(-432, -584, -553, "Meis", -510)]) == null ? void 0 : c[g(124, 160, 220, 148, "*pba")]) + a(1204, 1193, 1214, "*pba", 1087) + ((I = o[n(-524, -341, -281, "m0^]", -397) + A(1493, 1370, 1295, 1483, "pD(#")]) == null ? void 0 : I[e(707, 789, "At^W")]);
    function g(x, C, E, d, l) {
      return KA(l, C - 66, x - -731);
    }
    function a(x, C, E, d, l) {
      return nA(x - 200, l - -69, d);
    }
    const s = await this[n(-235, -338, -168, "O36j", -271) + e(598, 614, "O36j") + n(-362, -386, -246, "px2r", -351) + g(94, 71, 3, 13, "C#m4") + "lt"](r, t[g(272, 411, 186, 179, "xq$E") + "ge"], o[e(486, 533, "YU)Q") + "ge"]);
    this[g(256, 314, 178, 169, "AL*C") + e(516, 641, "ryQR")][g(48, 183, 93, 119, "97HX")](s);
  }
  async [BA(436, 459, "BbHW", 464) + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    let g = -11841 + -1 * -11841;
    function a(f, m, y, G, D) {
      return SA(G, m - 472, y - 295, G - 499, f - -141);
    }
    let s = o, c;
    function I(f, m, y, G, D) {
      return SA(y, m - 469, y - 260, G - 374, D - -221);
    }
    function x(f, m, y, G, D) {
      return MA(f - 301, y, y - 31, D - 533);
    }
    function C(f, m, y, G, D) {
      return SA(y, m - 165, y - 352, G - 101, f - -271);
    }
    let E = this[I(289, 188, "h1aX", 113, 227) + I(196, 67, "ryQR", 289, 203) + C(-31, 41, "W!zq", 41) + "s"](this[C(-24, 85, "m0^]", -133) + a(164, 24, 229, "y#Wq") + "s"], A);
    for (let f = 757 * 9 + -6386 + 61 * -7; f < o; f++)
      if (C(105, 202, "1]do", 165) !== x(811, 690, "y#Wq", 754, 791)) {
        if (g > e * r) {
          if (C(133, 119, "At^W", 228) !== x(815, 689, "y#Wq", 802, 755)) throw new _0x28c83b(C(-26, -76, "xq$E", 7) + Q(1152, 1011, "ONso") + a(198, 157, 235, "h1aX") + x(1067, 786, "]S03", 823, 927) + a(182, 120, 304, "[m1N") + x(946, 876, "ONso", 820, 825));
          s = f;
          break;
        }
        const m = await this[C(-2, -106, "os6B", -75) + C(-34, 2, "[m1N", 92) + I(110, -104, "1]do", -134, 6) + x(1071, 1019, "u25)", 869, 987)](E);
        if (m[a(226, 332, 156, "3Njv")])
          if (a(207, 261, 98, "h1aX") === Q(855, 931, "JDz*")) {
            if (this[a(208, 196, 232, "dk$#") + I(195, 0, "IA#*", -20, 54) + C(-35, -55, "XJTq", -95) + Q(952, 1049, "lCHM") + "or"](m[Q(1114, 1059, "FxbX")])) {
              if (C(80, 154, "]S03", 141) !== a(144, 165, 267, "1tD*")) return;
              E = this[Q(1078, 1063, "Q0^n") + I(367, 178, "Meis", 239, 249) + C(161, 36, "1tD*", 296) + "s"](this[Q(1017, 884, "[m1N") + I(205, 144, "Q0^n", 176, 77) + "s"], t), f--;
            }
          } else {
            const y = {};
            return y[a(262, 173, 276, "ryQR")] = _0x5dfe72[Q(949, 1086, "Q0^n")], y.id = _0x58c768[x(816, 880, "dk$#", 859, 856) + x(875, 714, "1tD*", 911, 848)], y;
          }
        if (m[Q(950, 944, "q!Fx") + C(98, 0, "u25)", 88)])
          if (I(113, 9, "FxbX", 163, 28) !== x(1045, 1060, "r^K2", 848, 980)) ({ deviceInfo: c } = m);
          else {
            const y = {};
            return y[Q(1167, 1047, "Q0^n") + a(93, 53, 198, "9lnZ")] = this[a(265, 214, 252, "GFDT") + x(835, 732, "O36j", 898, 871)], y[I(232, 225, "HK8)", 144, 253) + Q(1034, 1145, "2NZl") + "e"] = !1, y;
          }
        g += m[C(187, 314, "FxbX", 231) + Q(1252, 1144, "u25)")] || -596 + 521 * 19 + -9303;
      } else {
        const m = {};
        m[I(181, 60, "YU)Q", 128, 100)] = _0x5f3775, _0x38b008[I(97, 262, "h1aX", 166, 154) + I(268, 134, "ryQR", 92, 195)] = m;
      }
    const d = Math[a(273, 299, 275, "*pba")](g / (s || -761 * -9 + -1923 * -5 + -1 * 16463));
    this[I(176, 160, "dk$#", 36, 121) + Q(967, 999, "pD(#") + "s"] = this[I(-6, 142, "IA#*", 156, 86) + a(146, 210, 181, "]S03") + Q(1155, 1164, "px2r") + "s"](this[Q(921, 1014, "AL*C") + Q(1142, 1042, "jFRB") + "s"], {}, c == null ? void 0 : c.id);
    const l = {};
    l[Q(1084, 1035, "97HX") + "ge"] = d;
    function Q(f, m, y, G, D) {
      return nA(f - 117, m - -169, y);
    }
    return l[I(137, 106, "ONso", 84, 225) + I(91, 174, "JDz*", 198, 119)] = c, l;
  }
  async [KA("@Ve#", 851, 800) + nA(1387, 1335, "IA#*") + MA(565, "y#Wq", 499, 423) + KA("pD(#", 1070, 942)](n) {
    const t = Date[e(-23, 42, 70, 8, "ONso")]();
    function e(a, s, c, I, x) {
      return SA(x, s - 242, c - 157, I - 100, a - -316);
    }
    function A(a, s, c, I, x) {
      return BA(a - 188, s - 233, s, c - -572);
    }
    function o(a, s, c, I, x) {
      return KA(a, s - 326, x - -516);
    }
    function r(a, s, c, I, x) {
      return KA(c, s - 98, x - -1177);
    }
    function g(a, s, c, I, x) {
      return nA(a - 265, s - 69, c);
    }
    try {
      if (e(17, -78, 55, -116, "e*Qn") === e(165, 65, 156, 227, "XJTq")) {
        const a = await this[g(1262, 1212, "y#Wq", 1275, 1092) + o("u25)", 465, 545, 507, 492) + o("IA#*", 512, 481, 416, 469) + "m"](n), s = Date[e(147, 31, 76, 227, "$eSM")]() - t, c = this[o("1tD*", 439, 549, 489, 435) + o("AL*C", 373, 639, 423, 511) + g(1095, 1231, "Y9Ls", 1223, 1324) + "fo"](a);
        xn(a);
        const I = {};
        return I[r(-460, -376, "jFRB", -467, -382) + o("p$V8", 633, 660, 408, 523)] = s, I[g(1463, 1395, "1]do", 1383, 1392) + o("JDz*", 519, 262, 291, 378)] = c, I;
      } else {
        const a = { ..._0x29dbaf }, s = a, c = { ...typeof s[r(-257, -180, "1]do", -262, -173)] == r(-136, -385, "1]do", -330, -264) + "t" ? s[g(1239, 1149, "nhV]", 1110, 1167)] : {}, ..._0x1cc8b1 }, I = c;
        if (_0x465d8d) {
          const x = {};
          x[o("9lnZ", 402, 533, 334, 418)] = _0x317032, I[o("O36j", 452, 582, 591, 515) + g(1273, 1368, "3Njv", 1431, 1232)] = x;
        }
        return s[o("lCHM", 529, 365, 475, 494)] = I, s;
      }
    } catch (a) {
      if (g(1211, 1295, "*pba") === o("[Kao", 395, 535, 387, 411)) _0x15426c = this[o("m0^]", 185, 429, 330, 317) + g(1192, 1223, "9lnZ") + g(1272, 1328, "1tD*") + "s"](this[r(-191, -316, "AL*C", -309, -267) + A(-152, "HK8)", -139) + "s"], _0x477f95), _0x3a9be7--;
      else {
        const s = {};
        return s[e(-49, -132, 14, 82, "@Ve#")] = a, s;
      }
    }
  }
  [SA("XJTq", 322, 239, 201, 330) + BA(685, 684, "HK8)", 589) + SA("O36j", 222, 230, 420, 365) + KA("ryQR", 1013, 1049) + "or"](n) {
    function t(r, g, a, s, c) {
      return nA(r - 252, g - -861, a);
    }
    function e(r, g, a, s, c) {
      return MA(r - 157, g, a - 319, c - -307);
    }
    function A(r, g, a, s, c) {
      return KA(c, g - 206, r - 203);
    }
    function o(r, g, a, s, c) {
      return SA(s, g - 222, a - 54, s - 441, r - -612);
    }
    return n instanceof DOMException && n[e(-122, "AL*C", 38, -138, -81)] === t(353, 232, "Q0^n") + t(246, 311, "px2r") + o(-115, -237, 24, "jFRB") + A(1184, 1060, 1250, 1222, "ryQR");
  }
  async [MA(445, "os6B", 250, 322) + nA(1438, 1296, "AL*C") + BA(467, 583, "At^W", 486) + BA(366, 571, "$eSM", 445) + "lt"](n, t, e) {
    return { optSetting: await KC(), afterOpt: t, beforeOpt: e };
  }
  [MA(394, "At^W", 502, 370) + BA(543, 438, "YU)Q", 430) + BA(785, 744, "Y9Ls", 686)](n) {
    function t(A, o, r, g, a) {
      return BA(A - 372, o - 225, A, a - 607);
    }
    function e(A, o, r, g, a) {
      return SA(A, o - 356, r - 446, g - 399, g - 296);
    }
    Object[e("JSAW", 836, 610, 717) + "es"](n)[e("2NZl", 806, 526, 667) + "ch"](([A, o]) => {
      function r(c, I, x, C, E) {
        return e(x, I - 78, x - 413, E - -305);
      }
      function g(c, I, x, C, E) {
        return t(I, I - 166, x - 372, C - 248, c - -344);
      }
      function a(c, I, x, C, E) {
        return e(C, I - 332, x - 370, x - -436);
      }
      function s(c, I, x, C, E) {
        return t(I, I - 467, x - 317, C - 460, E - -687);
      }
      if (r(431, 323, "IA#*", 282, 353) === r(373, 282, "JSAW", 319, 376)) return _0x53d700 instanceof _0x555e39 && _0x51f62b[g(882, "97HX", 855, 827)] === r(133, 365, "m0^]", 329, 239) + g(839, "O36j", 971, 702) + a(24, 269, 166, "Meis") + a(179, 285, 321, "pD(#");
      {
        const c = A;
        S(this, Ue)[c] && (s(501, "r^K2", 551, 340, 480) !== g(918, "[m1N", 864, 841) ? S(this, Ue)[c] = { ...S(this, Ue)[c], ...o } : { deviceInfo: _0x458400 } = _0x3ccde4);
      }
    });
  }
  [nA(1333, 1332, "nhV]") + MA(407, "AL*C", 474, 404) + BA(434, 602, "3Njv", 506) + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(C, E, d, l, Q) {
      return BA(C - 141, E - 59, E, l - 33);
    }
    function r(C, E, d, l, Q) {
      return MA(C - 123, E, d - 133, d - -750);
    }
    function g(C, E, d, l, Q) {
      return KA(l, E - 171, Q - -684);
    }
    const a = A;
    function s(C, E, d, l, Q) {
      return KA(Q, E - 56, C - -265);
    }
    function c(C, E, d, l, Q) {
      return nA(C - 90, l - 343, E);
    }
    const I = { ...typeof a[g(320, 186, 346, "os6B", 305)] == g(-8, 40, 40, "GFDT", 131) + "t" ? a[g(315, 336, 310, "lCHM", 326)] : {}, ...t }, x = I;
    if (e)
      if (c(1578, "2NZl", 1554, 1671) === s(714, 600, 747, 612, "O36j")) {
        const C = {};
        C[g(226, 275, 240, "@Ve#", 213)] = e, x[c(1587, "lCHM", 1528, 1641) + r(-530, "xq$E", -500)] = C;
      } else this[r(-438, "$eSM", -400) + s(531, 528, 392, 515, "YFjh") + s(734, 850, 701, 726, "$eSM") + g(250, 278, 204, "At^W", 251) + "or"](_0x297adb[c(1632, "BbHW", 1562, 1562)]) && (_0x586a63 = this[s(513, 507, 565, 403, "r^K2") + c(1505, "9lnZ", 1506, 1497) + s(588, 600, 681, 723, "lCHM") + "s"](this[o(549, "GFDT", 764, 682) + s(733, 731, 767, 871, "@Ve#") + "s"], _0x321855), _0x91e896--);
    return a[c(1645, "lCHM", 1637, 1626)] = x, a;
  }
  [SA("YFjh", 301, 412, 299, 408) + nA(1042, 1145, "jFRB") + nA(1245, 1103, "y#Wq")](n) {
    function t(A, o, r, g, a) {
      return KA(o, o - 239, A - 302);
    }
    function e(A, o, r, g, a) {
      return MA(A - 413, g, r - 28, o - 1031);
    }
    this[t(1136, "IA#*") + e(1536, 1505, 1560, "px2r") + "s"] = n;
  }
  [KA("jFRB", 816, 856) + MA(192, "m0^]", 195, 279) + BA(468, 640, "lCHM", 568) + nA(981, 1119, "px2r") + nA(1322, 1247, "lCHM")]() {
    const n = {};
    n[e(308, 213, 257, "YU)Q") + A(1228, 1217, 1105, 1154, "e*Qn")] = this[e(280, 176, 185, "YFjh") + t(533, 487, 673, "C#m4")];
    function t(o, r, g, a, s) {
      return SA(a, r - 336, g - 345, a - 282, o - 205);
    }
    function e(o, r, g, a, s) {
      return BA(o - 456, r - 440, a, g - -411);
    }
    function A(o, r, g, a, s) {
      return BA(o - 136, r - 54, s, o - 561);
    }
    return n[A(1204, 1236, 1225, 1194, "TwCH") + A(1215, 1184, 1272, 1160, "AL*C") + "e"] = !1, n;
  }
}
Ue = new WeakMap();
const wr = {};
wr.FRONT = "user", wr.BACK = "environment";
const ca = wr;
function Ca() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function $a() {
  return /Android/i.test(navigator.userAgent);
}
function ko() {
  return /Firefox/i.test(navigator.userAgent);
}
function zC() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const XC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function $C() {
  return navigator.userAgent;
}
function AB() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const fn = {};
fn.width = 1920, fn.height = 1080, fn.facingMode = ca.FRONT;
const eB = fn;
var lt, Ht, de;
class ls {
  constructor({ defaultVideoConstrains: n = eB, minCameraShorterSide: t = kC } = {}) {
    U(this, lt);
    U(this, Ht, []);
    U(this, de, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, v(this, lt, e);
  }
  get availableCameraProperties() {
    return S(this, Ht);
  }
  get mediaStream() {
    return S(this, de);
  }
  get videoTrack() {
    if (S(this, de)) return yr(S(this, de));
  }
  get isCameraActive() {
    var n;
    return !!((n = S(this, de)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    xn(t);
  }
  async open(n = {}) {
    $a() && ko() && await fr(2 * 1035 + 9451 + -11071), v(this, de, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new b("Video track must be initialized to get next device");
    const n = await Ui(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (388 * -1 + 6709 + 4 * -1580)] ?? n[8227 + -237 * 5 + 3521 * -2]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new b("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    S(this, de) && (xn(S(this, de)), v(this, de, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = S(this, Ht), A;
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
    const n = this.getSettings(), t = await ns(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== ca.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Ca())
      return (await Ui()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Ui();
    for (const t of n) {
      $a() && ko() && await fr(-10568 + -5509 * -2);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = yr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = r.getSettings(), a = { ...g };
        a.deviceName = r.label;
        const s = {};
        s.cameraProperties = a;
        const c = s;
        S(this, Ht).push(c), xn(o);
      } catch (e) {
        e instanceof Error && b.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...S(this, lt).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new b("Could not init camera settings");
    if (typeof S(this, lt).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < S(this, lt).minCameraShorterSide)
      throw this.close(), new b("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
lt = new WeakMap(), Ht = new WeakMap(), de = new WeakMap();
var Go;
class tB {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    U(this, Go, !1);
    p(this, "videoHandler");
    p(this, "cameraHandler");
    p(this, "videoRecorder");
    p(this, "performanceCheckup");
    p(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    S(this, Go) || (v(this, Go, !0), await ls.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), PC() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !ko() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, -259 * -26 + 8673 + 7 * -2201, -9936 + 8678 * -1 + 18614), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    var n;
    this.cameraHandler.close(), this.videoHandler.stop(), (n = this.videoRecorder) == null || n.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    var t;
    await this.cameraHandler.open(n), XC() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), (t = this.videoRecorder) == null || t.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !ko() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
Go = new WeakMap();
var Ye;
class oB {
  constructor(n) {
    U(this, Ye);
    v(this, Ye, n);
  }
  get videoElement() {
    return S(this, Ye);
  }
  async play(n) {
    S(this, Ye).srcObject = n, await S(this, Ye).play();
  }
  stop() {
    S(this, Ye).srcObject = null;
  }
  hasSrcObject() {
    return !!S(this, Ye).srcObject;
  }
}
Ye = new WeakMap();
function RA(i, n) {
  var t = Xn();
  return RA = function(e, A) {
    e = e - (-483 * -16 + -1 * -6213 + 1 * -13637);
    var o = t[e];
    if (RA.IZCZcS === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, y = C.length; m < y; m++)
          E += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var C = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      RA.PLCeIw = g, i = arguments, RA.IZCZcS = !0;
    }
    var a = t[4614 + -3 * 1538], s = e + a, c = i[s];
    return c ? o = c : (RA.qYWXzi === void 0 && (RA.qYWXzi = !0), o = RA.PLCeIw(o, A), i[s] = o), o;
  }, RA(i, n);
}
(function(i, n) {
  var t = i();
  function e(g, a, s, c, I) {
    return RA(s - -692, a);
  }
  function A(g, a, s, c, I) {
    return RA(a - -666, s);
  }
  function o(g, a, s, c, I) {
    return RA(c - -726, I);
  }
  for (; ; )
    try {
      var r = -parseInt(A(-298, -359, "wtNx", -312, -340)) / 1 * (parseInt(e(-255, "XVs!", -293, -273, -352)) / 2) + -parseInt(A(-281, -343, "!p6L", -350, -318)) / 3 + -parseInt(A(-397, -355, "UPm^", -409, -347)) / 4 + parseInt(A(-290, -321, "w44K", -260, -264)) / 5 + -parseInt(o(-352, -358, -281, -338, "RAjG")) / 6 + parseInt(e(-307, "Od)F", -316, -366, -280)) / 7 + -parseInt(o(-420, -381, -439, -396, "UPm^")) / 8 * (-parseInt(o(-339, -369, -387, -385, "$SYt")) / 9);
      if (r === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Xn, 23 * -39 + 58983 * 4 + 362053);
function je(i, n, t, e, A) {
  return RA(n - 558, t);
}
function We(i, n, t, e, A) {
  return RA(e - -100, A);
}
function GA(i, n, t, e, A) {
  return RA(A - -118, e);
}
function Xn() {
  var i = ["yePNwSo3WQ/cJWf8B2NcHa", "g8oGW68", "WRpdGMhdVmoJ", "WR7cReZdQCoA", "r8okbSkXfhXVsYBcPXVcHSkt", "kmosddHl", "lhZcLIxdNq", "kCkCW53dMqzgWQX3W5GwW7ik", "DCobWRlcL3K", "WPFcUxVdQCoh", "WQuXzSkCWOO", "WPKHW7VcI8kW", "WPePB0xdSa", "aSk4WPtdI8oY", "jmkRW41Uoa", "W68Ds8k+wq", "W4JdHSkKqa9EW6/dRmkCW5D5CCk+", "qrRcHZ0q", "WOa9uCkqWRK", "AMPyW7a4", "WOPbWRa", "gCk7W4H+CG", "bxNcNdZdIq", "t8oocmkWexXJvaNcNtVcM8kU", "lvRdLCo+lq", "WRNcON7dRmoi", "W6xdT8kxxSoJ", "rmk/subz", "p8kpW7L0dq", "W78HwG", "xCo6WQdcRgy", "fHJcTbi9iLC", "WO3cIgFdQmoI", "WQxcOSoT", "W6/dHwldTSozlhi", "av7cKd/dRa", "sLzh", "d8kqAdNdPq", "fmoZaaanaCkuW69SW5BcUfiD", "W7zgWPXRWPe", "W6ldUmkVWOmJemo2j8oFWPNcPCkfWRa", "WP0/tftdTa", "W4BdLsn2W4i", "ymo/xCohlq", "pmohkJj+", "rmk0x11o", "WQaNBWL8", "mbKXbSkR", "z8oRWRrsha", "xffBy8oQ", "WOW0BmkfWP4", "WPVcUhVdNSoJ", "ttZcHW", "WRa5DbHM", "WOyZW4ldJmoyvf5TW4hdI8kfa8o3", "W6mIsW", "WOZcPMNdS8oV", "WOSQW7S", "W7BdVSkts8o0", "WQtcPCo2W5Pc", "vCofzCo8kW", "WPm0uwVdUa", "WPpcMmoZ", "zCo9WRnAfG", "ySoTWORcLfG", "WPhdJ8k7uIW", "fSofW5ldQ8oN", "rLnmz8oT", "sSoiWRDCfq", "W4tdSrNcVCkAvConWQZcHCosW505ua", "WPuVW5ZcOmoJ", "W4VcIIlcUvC", "W6/dVSkhqmoT", "WRW5AsbM", "gSo8W4tdPSoO", "WQBdLgddMCoJ", "tZtcMZqM", "awBcHGxdHW", "vSoPyCoQmq", "WO0WW6dcSmkf", "qZtcLHa9", "W4L8WR7dSSoLWRFdGXxdNhhcLq", "pmo+W6ivW4K", "WPhdK33dQaldHSoWWQ54WRjv", "W6m9xCk5zW", "hsxcKG0bkKG", "W6n6wW", "WPxcRNhdRCo+", "Ee4iWO7dOa", "dSkkgHRcRxisWOnvggJcO0C", "vSoFzmomma", "b8kdW6HXfW", "f2H/umoWzmkZ", "WPhcKmoVceK", "Bgrb", "wmojBSoRma", "W71UjwDK", "WPmLW6hcO8kW", "xf/cJX9J", "WO80ta", "WPFdNxRdRWFcH8kvWOzRWPbQumow", "WPhdP8oVBbO", "r8oUAwxdKW", "l1hdHmoy", "B2DEq8o1", "W60QwSkzrq", "zZNcHYC/", "lCkdW6v2", "ygjyW7a", "qslcKqC7", "WRJcRCo3W5b6", "WR0SW6RcO8k+", "EeuEWPpdTW", "WP7dOmo0AWC", "W4iMtCkUwq", "D8ohWPFcKKi", "W4NdKJHXW6y", "W6ldV8kRWOWIeSo6hSoGWOlcVCkvWOm", "pCkhW6P8aq", "ESolWPZcKuq", "oCkcWQxcKCk8", "sttcTISs", "W5RdLt4"];
  return Xn = function() {
    return i;
  }, Xn();
}
function Ie(i, n, t, e, A) {
  return RA(t - -271, n);
}
function pe(i, n, t, e, A) {
  return RA(A - 905, n);
}
var r0, a0, g0;
class nB {
  constructor() {
    p(this, g0, 1159 * 2 + -1 * -8013 + -10331);
    p(this, a0);
    p(this, r0);
    function n(A, o, r, g, a) {
      return GA(A - 446, o - 304, r - 314, g, r - -566);
    }
    function t(A, o, r, g, a) {
      return pe(A - 449, o, r - 261, g - 68, A - -1566);
    }
    function e(A, o, r, g, a) {
      return pe(A - 287, o, r - 405, g - 260, g - -1644);
    }
    this[e(-400, "AoqR", -379, -371) + t(-332, "5wyM", -307, -274) + e(-383, "6Gmy", -358, -373) + t(-302, "R))3", -252, -346)] = Date[n(-341, -366, -357, "b*fw")]();
  }
  [(g0 = GA(322, 266, 305, "*tb2", 308) + pe(1304, "R))3", 1291, 1376, 1321) + GA(199, 198, 257, "6Gmy", 222), a0 = GA(228, 248, 223, "2q7K", 242) + Ie(135, "ulgP", 86) + pe(1357, "xUVx", 1350, 1309, 1310) + pe(1247, "[c#&", 1247, 1229, 1267), r0 = GA(335, 301, 333, "ubpj", 302) + je(918, 871, "5wyM") + "p", GA(264, 252, 283, "6Gmy", 299) + je(967, 939, "8zi#") + GA(285, 227, 334, "tSq]", 275))]() {
    function n(r, g, a, s, c) {
      return GA(r - 242, g - 301, a - 66, a, r - -855);
    }
    function t(r, g, a, s, c) {
      return Ie(r - 161, c, s - 330);
    }
    function e(r, g, a, s, c) {
      return GA(r - 165, g - 165, a - 171, r, s - 528);
    }
    function A(r, g, a, s, c) {
      return Ie(r - 42, s, a - 154);
    }
    function o(r, g, a, s, c) {
      return GA(r - 4, g - 132, a - 188, a, s - 180);
    }
    if (this[t(501, 470, 454, 459, "!p6L") + t(344, 429, 424, 368, "$SYt") + A(240, 138, 189, "D8)e")]++, this[e("Pu9S", 797, 823, 804) + n(-589, -596, "5wyM") + n(-567, -615, "AoqR")] === 1) {
      if (o(406, 406, "Pu9S", 394) === t(392, 406, 313, 374, "*tb2")) return;
      this[e("y#VR", 825, 717, 777) + e("BKmI", 667, 703, 714) + "p"] = Date[e("dOmF", 769, 776, 811)]() - this[o(419, 509, "ubpj", 470) + e("O4zm", 801, 791, 743) + n(-570, -590, "TXlM") + A(193, 200, 252, "!p6L")];
    }
  }
  [je(889, 944, "RAjG") + We(266, 233, 246, 252, "w44K") + pe(1320, "9S!5", 1261, 1343, 1283) + Ie(126, "R))3", 142) + "up"]() {
    function n(g, a, s, c, I) {
      return Ie(g - 134, c, a - -590);
    }
    function t(g, a, s, c, I) {
      return GA(g - 434, a - 486, s - 463, a, c - 562);
    }
    function e(g, a, s, c, I) {
      return je(g - 28, s - -521, a);
    }
    if (!po()) {
      if (t(813, "fvPu", 873, 819) === t(902, "XVs!", 896, 855)) return;
      if (!_0x86e642() || !this[o(1362, "*tb2", 1374, 1345) + e(333, "Od)F", 347) + "p"]) {
        var A = {};
        return A[e(390, "$SYt", 419) + n(-551, -498, -531, "Pu9S") + "e"] = !1, A;
      }
      return { performance: !0, hiccupAmount: this[t(744, "AoqR", 822, 792) + t(838, "DXYB", 834, 795) + t(806, "4bn$", 827, 821) + "t"](), firstHiccup: this[n(-402, -449, -435, "[c#&") + n(-551, -549, -489, "DXYB") + n(-510, -545, -500, "Pu9S") + n(-582, -527, -486, "w44K") + "ss"]() };
    }
    this[n(-486, -478, -516, "R))3") + e(361, "fvPu", 407) + o(1214, "[c#&", 1210, 1259)] = -18 + 2404 * 3 + -7194;
    function o(g, a, s, c, I) {
      return We(g - 432, a - 76, s - 35, c - 1023, a);
    }
    this[n(-403, -438, -449, "D8)e") + t(779, "SXEq", 778, 833) + "p"] = void 0;
    function r(g, a, s, c, I) {
      return pe(g - 402, g, s - 376, c - 386, c - -23);
    }
    window[r("O4zm", 1298, 1286, 1247) + r("y#VR", 1223, 1208, 1267) + t(814, "I9wX", 804, 764) + t(870, "Yr%v", 845, 854)](e(446, "O4zm", 416) + "wn", this[t(842, "wtNx", 807, 798) + o(1204, "R))3", 1212, 1247) + r("XVs!", 1272, 1264, 1225)][n(-483, -447, -503, "cFVV")](this));
  }
  [Ie(100, "D8)e", 78) + pe(1308, "T0aI", 1314, 1317, 1324) + We(307, 314, 331, 304, "RAjG") + We(360, 329, 270, 318, "RAjG") + "up"]() {
    function n(r, g, a, s, c) {
      return Ie(r - 432, s, r - -56);
    }
    function t(r, g, a, s, c) {
      return je(r - 432, a - -59, s);
    }
    function e(r, g, a, s, c) {
      return Ie(r - 407, c, r - 458);
    }
    function A(r, g, a, s, c) {
      return je(r - 319, c - -48, r);
    }
    function o(r, g, a, s, c) {
      return Ie(r - 159, g, r - -662);
    }
    if (!po())
      return t(803, 794, 849, "y#VR") === A("*tb2", 863, 884, 899, 847) ? this[t(892, 869, 843, "zXZO") + o(-616, "ulgP") + "p"] : void 0;
    window[o(-605, "rJnc") + t(931, 829, 879, "2q7K") + n(45, 30, 31, "PgRD") + "r"](n(75, 103, 93, "y#VR") + "wn", this[e(513, 485, 470, 472, "dOmF") + A("5wyM", 910, 861, 878, 852) + A("SXEq", 789, 869, 835, 818)][o(-518, "dOmF")](this));
  }
  [We(317, 281, 252, 274, "XVs!") + je(908, 880, "[c#&") + "lt"]() {
    function n(g, a, s, c, I) {
      return GA(g - 144, a - 354, s - 323, c, I - -562);
    }
    function t(g, a, s, c, I) {
      return We(g - 222, a - 30, s - 22, I - -533, c);
    }
    if (!po() || !this[A(-352, "D8)e", -368) + A(-437, "cFVV", -393) + "p"])
      if (A(-436, "AoqR", -472) !== r(-343, -310, -292, -283, "6TOC")) {
        var e = {};
        return e[n(-398, -302, -367, "cFVV", -345) + n(-303, -306, -265, "cFVV", -255) + "e"] = !1, e;
      } else return this[t(-278, -225, -201, "R))3", -250) + r(-355, -295, -383, -396, "y#VR") + o("RAjG", 291, 252)];
    function A(g, a, s, c, I) {
      return GA(g - 456, a - 217, s - 433, a, s - -673);
    }
    function o(g, a, s, c, I) {
      return je(g - 209, s - -670, g);
    }
    function r(g, a, s, c, I) {
      return We(g - 116, a - 115, s - 441, g - -652, I);
    }
    return { performance: !0, hiccupAmount: this[t(-346, -342, -338, "RAjG", -315) + A(-441, "2q7K", -438) + r(-413, -466, -447, -407, "Pu9S") + "t"](), firstHiccup: this[t(-195, -255, -300, "R))3", -246) + A(-440, "ulgP", -466) + t(-223, -292, -226, "8zi#", -260) + n(-238, -271, -306, "T0aI", -285) + "ss"]() };
  }
  [pe(1211, "fvPu", 1241, 1236, 1260) + GA(214, 216, 276, "XVs!", 238) + GA(196, 259, 207, "*tb2", 253) + "t"]() {
    function n(e, A, o, r, g) {
      return Ie(e - 416, e, g - -537);
    }
    function t(e, A, o, r, g) {
      return Ie(e - 326, r, g - 768);
    }
    return this[t(950, 918, 917, "*tb2", 923) + t(830, 845, 907, "Pu9S", 855) + n("6Gmy", -460, -523, -470, -468)];
  }
  [We(244, 218, 216, 231, "Yr%v") + Ie(45, "R))3", 34) + GA(305, 284, 221, "[c#&", 273) + We(305, 290, 234, 246, "dhel") + "ss"]() {
    function n(t, e, A, o, r) {
      return pe(t - 112, o, A - 48, o - 266, t - -317);
    }
    return this[n(909, 870, 886, "K$!3") + n(1009, 1020, 1016, "[c#&") + "p"];
  }
}
const iB = 2307 * -1 + 2631 * 1 + 156, rB = 240, Ba = -3675 + 2248 * 4 + 1 * -5287, us = -1487 + -733 * -1 + 769, fs = -488 + -5279 * 1 + 5775, br = {};
br.codec = "avc1.42E01E", br.bitrate = 1e6;
const on = br, aB = 38 * -23 + 2 * 146 + -146 * -4, gB = 26946 + 19 * 1855 + -32191;
class sB {
  constructor(n, t) {
    p(this, "shouldBeTested", !0);
    p(this, "testFramesSizesList", []);
    p(this, "maximumTestFrames");
    p(this, "maximumTestFramesSize");
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = -3783 * -1 + 3 * 38 + 3897 * -1;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class hs {
  constructor() {
    p(this, "encoder");
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
function IB(i) {
  if (!i) return !1;
  const n = hs.isSupported();
  return !n && b.logError("Video encoding is not supported in this browser."), n;
}
const kr = {};
kr.LOW = "low", kr.STANDARD = "standard";
const $n = kr, Sr = {};
Sr.SPS = "SPS", Sr.PPS = "PPS";
const Yi = Sr;
class cB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -364 * 1 + -786 * 11 + 9014, t >= n.length) return;
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
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Yi.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Yi.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Yi.SPS ? n[t] & 6 * -371 + -3 * 1049 + 5404 : n[t], o = t + (-472 * 21 + 342 * 5 + -1 * -8203);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = -1009 * -7 + -29 * -286 + -15357; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === 7 * 809 + 1 * 5401 + -11064) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-4 * -1726 + -8090 + 1188) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (2970 + -91 * 19 + -1239), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class CB {
  constructor() {
    p(this, "parameterSetsHandler");
    p(this, "START_CODE", new Uint8Array([0, -1 * 6323 + -7320 + 13643, -10759 + 29 * 371, 8268 + -249 * -16 + -12251]));
    p(this, "parameterSets");
    this.parameterSetsHandler = new cB();
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
    if (t + (-1041 * 9 + -39 * 209 + 4 * 4381) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-716 + -137 * -13 + -1 * 1061), r = o + A;
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
    let A = 3097 + 33 * 190 + -9367;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class BB {
  constructor(n = fs, t = Ba) {
    p(this, "chunks", []);
    p(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (-1304 + -145 * -29 + 580 * -5)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(4774 + 341 * -14, n));
  }
}
class Ag {
  constructor() {
    p(this, "codec");
    p(this, "bitrate");
    p(this, "resolution");
    p(this, "framerate");
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
class QB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (zC() && e > A) {
      const g = e, a = A, s = g / a, c = t * s;
      return { width: Math.floor(c / (961 * -7 + -1 * -4652 + 1 * 2077)) * (-9078 + 1135 * 8), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (1 * -2635 + -6492 + 9129)) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / 2) * (3540 + 3 * 3126 + -12916), height: t };
  }
  create(n, t) {
    switch (n) {
      case $n.STANDARD:
        return new Ag().setBitrate(on.bitrate).setCodec(on.codec).setFramerate(Ba).setResolution(this.getScaledResolution(t, iB)).build();
      case $n.LOW:
        return new Ag().setBitrate(on.bitrate).setCodec(on.codec).setFramerate(us).setResolution(this.getScaledResolution(t, rB)).build();
      default:
        throw b.logError("Unsupported preset for video encoder config");
    }
  }
}
class xB {
  constructor(n, t, e, A) {
    p(this, "videoProcessor");
    p(this, "videoEncoder");
    p(this, "chunkStorage");
    p(this, "qualityTester");
    p(this, "cameraHandler");
    p(this, "videoEncoderConfigFactory");
    p(this, "cameraFramerate");
    p(this, "captureIntervalId");
    p(this, "videoElement");
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new QB(), this.chunkStorage = new BB(), this.cameraFramerate = Ba, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(fs, us), this.startRecording($n.LOW);
  }
  startRecording(n = $n.STANDARD) {
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
    let n = -719 * 12 + -4244 + 12872;
    const t = this.cameraFramerate, e = (1852 + -2 * 426) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === -9433 * -1 + -18 * -505 + -1 * 18523;
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
class EB {
  constructor() {
    p(this, "videoProcessor");
    p(this, "videoEncoder");
    p(this, "qualityTester");
    p(this, "cameraHandler");
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
    return new xB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class dB {
  create(n, t) {
    if (!IB(t)) return;
    const e = new sB(aB, gB), A = new hs(), o = new CB();
    return new EB().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function lB(i) {
  const { facingMode: n = ca.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = Ae(null), [A, o] = hA(), [r, g] = hA(), { handleError: a, setIsCameraReady: s } = HA(), c = Ge((x) => {
    g((C) => vC(x, C));
  }, []);
  eA(() => {
    if (!e.current) {
      a(new b("Something went wrong during video initialization"));
      return;
    }
    const x = new oB(e.current), C = new ZC(), E = new ls(), d = new nB(), l = new dB().create(E, t), Q = {};
    Q.videoHandler = x, Q.cameraHandler = E, Q.performanceCheckup = d, Q.cameraEvaluator = C, Q.videoRecorder = l;
    const f = new tB(Q);
    return (async () => {
      try {
        const y = {};
        y.facingMode = n, await f.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          a(b.fromCameraError(y));
          return;
        }
      }
      o(f), s(!0), c(f.getCameraResolution());
    })(), () => {
      f == null || f.stopStreaming(), s(!1), o(void 0);
    };
  }, [n, a, s, e, c, t]);
  const I = {};
  return I.cameraService = A, I.cameraResolution = r, I.onCameraResolutionChange = c, I.videoRef = e, I;
}
function uB({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = lB(i), r = kA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ k(Kn.Provider, { value: r, children: n });
}
let O;
const Te = new Array(-42 * -164 + -290 + -6470).fill(void 0);
Te.push(void 0, null, !0, !1);
function Gr(i) {
  return Te[i];
}
let Se = 6694 + 3265 * 1 + -9959, Eo = null;
function hn() {
  return (Eo === null || Eo.byteLength === 64 * -15 + -590 + 62 * 25) && (Eo = new Uint8Array(O.memory.buffer)), Eo;
}
const pn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, fB = typeof pn.encodeInto == "function" ? function(i, n) {
  return pn.encodeInto(i, n);
} : function(i, n) {
  const t = pn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function So(i, n, t) {
  if (t === void 0) {
    const g = pn.encode(i), a = n(g.length, 706 * -3 + -519 + 2638) >>> 0;
    return hn().subarray(a, a + g.length).set(g), Se = g.length, a;
  }
  let e = i.length, A = n(e, -2780 + -3 * 1949 + -6 * -1438) >>> 9782 + 1783 * 2 + -6674 * 2;
  const o = hn();
  let r = 0;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 127) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 0 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 1316 + 103 * 63 + 1951 * -4) >>> -22 * 207 + 1 * 62 + -1123 * -4;
    const g = hn().subarray(A + r, A + e), a = fB(i, g);
    r += a.written, A = t(A, e, r, -9425 + -398 * 3 + 10620) >>> 3126 + -1563 * 2;
  }
  return Se = r, A;
}
function ps(i) {
  return i == null;
}
let lo = null;
function we() {
  return (lo === null || lo.byteLength === -7229 + 7229 * 1) && (lo = new Int32Array(O.memory.buffer)), lo;
}
let mo = Te.length;
function hB(i) {
  i < 8565 + 1 * -3802 + -1 * 4631 || (Te[i] = mo, mo = i);
}
function ms(i) {
  const n = Gr(i);
  return hB(i), n;
}
const Nr = {};
Nr.ignoreBOM = !0, Nr.fatal = !0;
const ys = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Nr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ys.decode();
function Ai(i, n) {
  return i = i >>> 1 * -1226 + 193 * -18 + -4700 * -1, ys.decode(hn().subarray(i, i + n));
}
function Rr(i) {
  mo === Te.length && Te.push(Te.length + (2348 + 3 * 77 + -2578));
  const n = mo;
  return mo = Te[n], Te[n] = i, n;
}
let uo = null;
function Ds() {
  return (uo === null || uo.byteLength === 3 * 3251 + 151 * 21 + -12 * 1077) && (uo = new Uint32Array(O.memory.buffer)), uo;
}
function eg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Ds();
  for (let A = 5295 + 353 * -15; A < i.length; A++)
    e[t / (-1 * -4833 + -9250 + 4421) + A] = Rr(i[A]);
  return Se = i.length, t;
}
function tg(i, n) {
  i = i >>> -6634 + 31 * 214;
  const t = Ds(), e = t.subarray(i / (-6613 + -1 * -4289 + 194 * 12), i / (3068 + -766 * 4) + n), A = [];
  for (let o = 61 * 103 + -6 * -976 + -12139; o < e.length; o++)
    A.push(ms(e[o]));
  return A;
}
function pB(i, n) {
  const t = So(i, O.__wbindgen_malloc, O.__wbindgen_realloc), e = Se, A = So(n, O.__wbindgen_malloc, O.__wbindgen_realloc), o = Se, r = O.is_mobile_supported(t, e, A, o);
  return Qa.__wrap(r);
}
const Fr = {};
Fr.register = () => {
}, Fr.unregister = () => {
};
const og = typeof FinalizationRegistry > "u" ? Fr : new FinalizationRegistry((i) => O.__wbg_licensevalidationresult_free(i >>> -6430 + 2 * 3215));
class Qa {
  static __wrap(n) {
    n = n >>> -4890 + 326 * 15;
    const t = Object.create(Qa.prototype);
    return t.__wbg_ptr = n, og.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 2767 * 1 + -2232 + 5 * -107, og.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    O.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = ps(t) ? 0 : So(t, O.__wbindgen_malloc, O.__wbindgen_realloc), g = Se;
    const a = eg(e, O.__wbindgen_malloc), s = Se, c = eg(A, O.__wbindgen_malloc), I = Se, x = So(o, O.__wbindgen_malloc, O.__wbindgen_realloc), C = Se, E = O.licensevalidationresult_new(n, r, g, a, s, c, I, x, C);
    return this.__wbg_ptr = E >>> -3467 + 1 * 3467, this;
  }
  get is_valid() {
    return O.licensevalidationresult_is_valid(this.__wbg_ptr) !== -4 * -886 + 3922 + -7466;
  }
  get features_json() {
    try {
      const e = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = we()[e / (5 * -1955 + 9186 + 1 * 593) + (1616 + 1 * -247 + -1369)], t = we()[e / (2 * 56 + -4780 + 1168 * 4) + (7907 + 1 * 135 + -8041)];
      let A;
      return n !== 21 + -4465 * -2 + -8951 && (A = Ai(n, t).slice(), O.__wbindgen_free(n, t * (-173 * -21 + 1429 * -3 + 655), 1 * 9701 + 9777 + 19477 * -1)), A;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-7 * -137 + 6878 + 237 * -33);
    }
  }
  get errors() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = we()[A / (-1823 * -2 + 7 * -475 + -317) + (599 * 4 + 7920 + 4 * -2579)], t = we()[A / (2 * -766 + -1622 * 1 + 3158) + (8210 + -1 * -318 + 8527 * -1)], e = tg(n, t).slice();
      return O.__wbindgen_free(n, t * 4, 86 * 101 + -1 * -6001 + -14683), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-1 * 4003 + -5251 + 1030 * 9);
    }
  }
  get warnings() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = we()[A / (639 * 7 + -3694 + 31 * -25) + (6259 * 1 + 3790 * -1 + -2469)], t = we()[A / (40 * -250 + 417 * -3 + -2251 * -5) + 1], e = tg(n, t).slice();
      return O.__wbindgen_free(n, t * (3092 + 772 * 3 + -772 * 7), -61 * -142 + -41 * 157 + -1 * 2221), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(1 * -2551 + 6 * 117 + 1865);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = we()[o / (6353 + 3 * 1705 + 2866 * -4) + (-1 * -9913 + -5118 + -4795)], A = we()[o / (-119 * 29 + 9458 + -6003 * 1) + (3 * -193 + 1066 * 7 + -6882)];
      return n = e, t = A, Ai(e, A);
    } finally {
      O.__wbindgen_add_to_stack_pointer(16), O.__wbindgen_free(n, t, 12219 + 1 * -12218);
    }
  }
}
async function mB(i, n) {
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
function yB() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Gr(t), A = typeof e == "string" ? e : void 0;
    var o = ps(A) ? -5583 + 139 * 28 + 1691 : So(A, O.__wbindgen_malloc, O.__wbindgen_realloc), r = Se;
    we()[n / 4 + (9216 + -3151 * 2 + -2913)] = r, we()[n / (2 * 4755 + 8295 + 17801 * -1) + (-7709 + -13 * -593)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    ms(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = Ai(n, t);
    return Rr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Rr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Gr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(Ai(n, t));
  }, i;
}
function DB(i, n) {
  return O = i.exports, ws.__wbindgen_wasm_module = n, lo = null, uo = null, Eo = null, O;
}
async function ws(i) {
  if (O !== void 0) return O;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB+LDCACgCACAAaiIANgIAIAEgAEEBcjYCBEH8sMIAKAIAIAFGBEBB9LDCAEEANgIAQfywwgBBADYCAAsgAEGMscIAKAIAIgNNDQBBgLHCACgCACICRQ0AQQAhAQJAQfiwwgAoAgAiBEEpSQ0AQdSuwgAhAANAIAIgACgCACIFTwRAIAUgACgCBGogAksNAgsgACgCCCIADQALC0HcrsIAKAIAIgAEQANAIAFBAWohASAAKAIIIgANAAsLQZSxwgBB/x8gASABQf8fTRs2AgAgAyAETw0AQYyxwgBBfzYCAAsPCyAAQXhxQeSuwgBqIQICf0HssMIAKAIAIgNBASAAQQN2dCIAcUUEQEHssMIAIAAgA3I2AgAgAgwBCyACKAIICyEAIAIgATYCCCAAIAE2AgwgASACNgIMIAEgADYCCA8LQfywwgAgATYCAEH0sMIAQfSwwgAoAgAgAGoiADYCACABIABBAXI2AgQgACABaiAANgIAC5EGAQZ/AkACQAJAAkAgAkEJTwRAIAIgAxBAIgINAUEADwtBACECIANBzP97Sw0BQRAgA0ELakF4cSADQQtJGyEBIABBBGsiBigCACIHQXhxIQQCQAJAAkACQAJAAkACQCAHQQNxBEAgAEEIayIIIARqIQUgASAETQ0BIAVBgLHCACgCAEYNBiAFQfywwgAoAgBGDQQgBSgCBCIHQQJxDQcgB0F4cSIJIARqIgQgAUkNByAEIAFrIQIgCUGAAkkNAiAFEF8MAwsgAUGAAkkgBCABQQRySXIgBCABa0GBgAhPcg0GDAoLIAQgAWsiAkEQTw0DDAkLIAVBDGooAgAiAyAFQQhqKAIAIgVHBEAgBSADNgIMIAMgBTYCCAwBC0HssMIAQeywwgAoAgBBfiAHQQN2d3E2AgALIAJBEE8EQCAGIAYoAgBBAXEgAXJBAnI2AgAgASAIaiIBIAJBA3I2AgQgBCAIaiIDIAMoAgRBAXI2AgQgASACEDIMCAsgBiAGKAIAQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEDAcLQfSwwgAoAgAgBGoiBCABSQ0CAkAgBCABayIDQQ9NBEAgBiAHQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEQQAhAwwBCyAGIAdBAXEgAXJBAnI2AgAgASAIaiICIANBAXI2AgQgBCAIaiIBIAM2AgAgASABKAIEQX5xNgIEC0H8sMIAIAI2AgBB9LDCACADNgIADAYLIAYgB0EBcSABckECcjYCACABIAhqIgEgAkEDcjYCBCAFIAUoAgRBAXI2AgQgASACEDIMBQtB+LDCACgCACAEaiIEIAFLDQMLIAMQCiIBRQ0BIAEgAEF8QXggBigCACIBQQNxGyABQXhxaiIBIAMgASADSRsQvgIgABAiDwsgAiAAIAEgAyABIANJGxC+AhogABAiCyACDwsgBiAHQQFxIAFyQQJyNgIAIAEgCGoiAiAEIAFrIgFBAXI2AgRB+LDCACABNgIAQYCxwgAgAjYCACAADwsgAAvbBgEKfyMAQSBrIgQkAAJAAkACQAJAAkACQCADQf8BcQ4EAQIDBAALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQeiTwgA2AhggACAAQRhqNgIIIABB2JTCABDrAQALQQAhAwNAIARBEGogA2pBmfOJ1AU2AgAgA0EEaiIDQRBHDQALIAIoAgwhBiACKAIIIQggAigCBCEFIAQoAhwhCSAEKAIYIQogBCgCFCELIAAgBCgCECACKAIAaiABKAIAIgNBBXdqIAEoAgQiDCABKAIMIgIgASgCCCIBc3EgAnNqIgdBHnciDTYCDCAAIAIgBSALamogASADIAEgDEEedyICc3FzaiAHQQV3aiIFQR53NgIIIAAgASAIIApqaiAHIAIgA0EedyIBc3EgAnNqIAVBBXdqIgM2AgQgACAGIAlqIAJqIAUgASANc3EgAXNqIANBBXdqNgIADAMLQQAhAwNAIARBEGogA2pBodfn9gY2AgAgA0EEaiIDQRBHDQALIAQgBCgCHCACKAIMajYCDCAEIAQoAhggAigCCGo2AgggBCAEKAIUIAIoAgRqNgIEIAQgBCgCECACKAIAajYCACAAIAEgBBCSAQwCC0EAIQMDQCAEQRBqIANqQdz57vh4NgIAIANBBGoiA0EQRw0ACyACKAIMIQggAigCCCEJIAIoAgQhBiAEKAIcIQogBCgCGCELIAQoAhQhDCAAIAQoAhAgAigCAGogASgCACIDQQV3aiABKAIEIg0gASgCDCICIAEoAggiAXNxIAEgAnFzaiIHQR53IgU2AgwgACACIAYgDGpqIAMgASANQR53IgJzcSABIAJxc2ogB0EFd2oiBkEedzYCCCAAIAEgCSALamogByACIANBHnciAXNxIAEgAnFzaiAGQQV3aiIDNgIEIAAgCCAKaiACaiAGIAEgBXNxIAEgBXFzaiADQQV3ajYCAAwBC0EAIQMDQCAEQRBqIANqQdaDi9N8NgIAIANBBGoiA0EQRw0ACyAEIAQoAhwgAigCDGo2AgwgBCAEKAIYIAIoAghqNgIIIAQgBCgCFCACKAIEajYCBCAEIAQoAhAgAigCAGo2AgAgACABIAQQkgELIARBIGokAAvtBQEJfyMAQcABayIDJAACQAJAAkACQCACLQAwIgRBAUcEQAJAAkACQCABLQAwIgdBAWsOAgQAAQsgBEUNAQwECyAERQ0DCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAcgAxBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkEwEL4CIgBBAiAEazoAMCAAIAIoADE2ADEgAEE0aiACQTRqKAAANgAADAELAkACQAJAIAEoAigiBkEETQR/IAFBCGoFIAEoAgQhBiABKAIICyAGIAIoAigiBUEETQR/IAJBCGoFIAIoAgQhBSACKAIICyAFEKgBQf8BcQ4CAQIACyADQeAAaiIEIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAQgAhB1IANBMGoiASAEQTAQvgIaIAIQjwIgAEECIAdrIAEQQgwDCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgQgA0EwahAzIANBkAFqIgUgBEEwEL4CGiAFQQRyIQcgA0GYAWohCCADQbgBaiEJIAMoApgBIQoDQCAIIQUgAygCuAEiBiEEIAZBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAJIQQgC0UEQCADKAKUASEGIAchBAsgBkUNASAEIAZBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAELIANB4ABqIgQgAUEwEL4CGiADQZABaiIBIAJBMBC+AhogBCABEHUgA0EwaiICIARBMBC+AhogARCPAiAAIAcgAhBCDAELIAEQjwILIANBwAFqJAALyQcBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhcBAgMEBQYHCAkKCwwNDg8QERITFBUWFwALIAEoAhRBkNHAAEEIIAFBGGooAgAoAgwRAAAMFwsgASgCFEGY0cAAQQYgAUEYaigCACgCDBEAAAwWCyABKAIUQZ7RwABBDCABQRhqKAIAKAIMEQAADBULIAIgAEEIajYCDCABQarRwABBCkG00cAAQQwgAEEEakHA0cAAQdDRwABBCiACQQxqQdzRwAAQhwEMFAsgAiAAQQFqNgIMIAFB7NHAAEECIAJBDGpB8NHAABB9DBMLIAEoAhRBgNLAAEEQIAFBGGooAgAoAgwRAAAMEgsgAiAAQQFqNgIMIAFB+oPBAEEGQZDSwABBAyACQQxqQZTSwAAQjQEMEQsgAiAAQQFqNgIMIAFBpNLAAEEMQZDSwABBAyACQQxqQZTSwAAQjQEMEAsgASgCFEGw0sAAQQwgAUEYaigCACgCDBEAAAwPCyACIABBAWo2AgwgAUHglsIAQQpB6pbCAEEDIAJBDGpBvNLAABCNAQwOCyABKAIUQczSwABBDCABQRhqKAIAKAIMEQAADA0LIAEoAhRB2NLAAEELIAFBGGooAgAoAgwRAAAMDAsgASgCFEHj0sAAQQggAUEYaigCACgCDBEAAAwLCyABKAIUQevSwABBCiABQRhqKAIAKAIMEQAADAoLIAIgAEEEajYCDCABQfXSwABBAyACQQxqQfjSwAAQfQwJCyABKAIUQZuiwgBBECABQRhqKAIAKAIMEQAADAgLIAEoAhRBiNPAAEEGIAFBGGooAgAoAgwRAAAMBwsgASgCFEGO08AAQQ4gAUEYaigCACgCDBEAAAwGCyABKAIUQZzTwABBECABQRhqKAIAKAIMEQAADAULIAIgAEEEajYCDCABQazTwABBDUHMhMEAQQggAEEBakG808AAQczTwABBBiACQQxqQZTSwAAQhwEMBAsgAiAAQQFqNgIMIAFB0tPAAEEKQdzTwABBBCACQQxqQeDTwAAQjQEMAwsgAiAAQQhqNgIMIAFB8NPAAEEMQfzTwABBByAAQQRqQcDRwABBg9TAAEEJIAJBDGpB3NHAABCHAQwCCyACIABBBGo2AgwgAUGM1MAAQQQgAkEMakGQ1MAAEH0MAQsgAiAAQQFqNgIMIAFBoNTAAEEFQZDSwABBAyACQQxqQZTSwAAQjQELIAJBEGokAAvmBQIIfwN+IwBBwAFrIgMkACADQQI2AgAgAyABNgIEIAJBBnYhBgJAIAJBP00EQCADQZABaiIBIANBMBC+AhogA0EwaiABEKwBDAELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgKQASADQQA2ArgBIANBkAFqIgEgBCAGakEBahCtASADQeAAaiIEIAFBMBC+AhogBCAGEEkgAyEBIANB4ABqIgUCfyADKAIAQQJGBEAgAygCBCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQTBqIAVBMBC+AhoLAkAgAkE/cSIIRQ0AIAMoAlgiAUEETQR/IANBOGoFIAMoAjQhASADKAI4CyEEIAEgBk8EQCABIAZGDQEgA0HYAGohByABQQN0IAZBA3QiBmshASAEIAZqIQVBACACa0E/ca0hDCAIrSENA0AgBSALIAUpAwAiCyANhoQ3AwAgBUEIaiEFIAsgDIghCyABQQhrIgENAAsgC1ANAUEEIQECfyADKAJYIgZBBE0EQCAGIQUgA0E4agwBCyADQTBqQQRyIQcgAygCNCEFIAYhASADKAI4CyEEIAEgBUYEQCADQTBqIgEQoAEgAUEEciEHIAMoAjQhBSADKAI4IQQLIAQgBUEDdGogCzcDACAHIAcoAgBBAWo2AgAMAQsgBiABQZD9wAAQuQEACyADQZABaiIBIANBMGpBMBC+AhogAUEEciEGIANBmAFqIQcgA0G4AWohCCADKAKYASEJA0AgByEEIAMoArgBIgUhASAFQQVJIgpFBEAgCSEEIAMoApQBIQELAkAgAUUNACABQQN0IARqQQhrKQMAQgBSDQAgCCEBIApFBEAgAygClAEhBSAGIQELIAVFDQEgASAFQQFrNgIADAELCyAAIANBkAFqQTAQvgIaAkAgAkHAAEkNACADKAIAQQJGDQAgAxCPAgsgA0HAAWokAAvYDQIFfwF+IwBB4ABrIgIkACACQRhqQRQQzAECQAJAAkACQAJAAkACQAJAAkACQCABLQAADgYAAQQCBgUDC0G4scIALQAAGiACKAIgIQMgAigCGEEEEAoiAUUNByABQe7qseMGNgAAIAJChICAgMAANwIoIAIgATYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBgsgAigCICEDIAIoAhggAkEEQQUgAS0AASIFGyIBEOABIAIoAgQhBiACKAIAQeLswABB3ezAACAFGyABEL4CIQUgAiABNgIsIAIgBjYCKCACIAU2AiQgAkHUAGoiASACQSRqEB0gAyABEMsBDAULIAIoAiAhAyACKAIYIAEoAgQhBSACQQhqIAFBDGooAgAiARDgASACKAIMIQYgAigCCCAFIAEQvgIhBSACIAE2AiwgAiAGNgIoIAIgBTYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBAsgAkEwakIANwIAIAJBATYCKCACQdTVwAA2AiQgAkGMrMIANgIsIwBBQGoiASQAIAFBBjYCDCABQbSfwgA2AghBxK3CAC0AAEEDRwRAIAFBpK3CADYCKCABIAFBGGo2AiwgAUEoaiEGIwBBIGsiBCQAAkACQAJAAkACQEHErcIALQAAIgNBAk8EQCADQQNrDQQMAQtBxK3CAEECOgAAIAYoAgAhAyAGQQA2AgAgA0UNAUG4scIALQAAGkGACBAKIgZFDQIgA0EAOgAcIANBADoAGCADQoAINwIQIAMgBjYCDCADQQA2AgggA0IANwIAQcStwgBBAzoAAAsgBEEgaiQADAMLQYCXwgBBK0H0oMIAEN4BAAsACyAEQRRqQgA3AgAgBEEBNgIMIARB9KbCADYCCCAEQYyswgA2AhAgBEEIakHkoMIAEOsBAAsLIAJBJGohBgJAAkBBpK3CACgCAEGdscIARwRAQcCtwgAtAAAhBEEBIQNBwK3CAEEBOgAAIAEgBDoAGCAERQ0BIAFCADcCNCABQYyswgA2AjAgAUEBNgIsIAFB+J/CADYCKCABQRhqIAFBKGoQ7gEAC0GorcIAKAIAQQFqIgMNAUGEocIAQSZBzKHCABDRAQALQaStwgBBnbHCADYCAAtBqK3CACADNgIAIAFBpK3CADYCGEEEIQMgAUEEOgAoIAEgAUEYajYCMCABQShqQbyXwgAgBhAvIQYgAS0AKCEEAkAgBgRAIARBBEYEQEECIQNBzJ/CACEFDAILIAEoAiwhBSABKAIoIQMMAQtBFyAEdkEBcQ0AIAEoAiwiBCgCACIFIARBBGooAgAiBigCABEEACAGKAIEBEAgBRAiCyAEECILIAEoAhgiBCAEKAIEQQFrIgY2AgQgBkUEQCAEQQA6ABwgBEEANgIACwJAIANB/wFxQQRGBEAgAUFAayQADAELIAEgBTYCFCABIAM2AhAgAUE0akICNwIAIAFBJGpBHDYCACABQQI2AiwgAUGUn8IANgIoIAFBBzYCHCABIAFBGGo2AjAgASABQRBqNgIgIAEgAUEIajYCGCABQShqQaSfwgAQ6wEACwwDCyABKQMIUEUNBCACKAIgIQQgAigCGCACQSRqIQMgAUEQaikDACEHIwBBQGoiASQAIAFBADYCFCABQgE3AgwgAUEwakGo1MAANgIAIAFBAzoAOCABQSA2AiggAUEANgI0IAFBADYCICABQQA2AhggASABQQxqNgIsAkAgB0EBIAFBGGoQVkUEQCADIAEpAgw3AgAgA0EIaiABQRRqKAIANgIAIAFBQGskAAwBC0Gc6sEAQTcgAUE/akHA1MAAQbDrwQAQrgEACyACQdQAaiIBIAMQHSAEIAEQywEMAgsCfyABKAIEIgNFBEBBACEDQQAMAQsgAiADNgI8IAJBADYCOCACIAM2AiwgAkEANgIoIAIgAUEIaigCACIDNgJAIAIgAzYCMCABQQxqKAIAIQNBAQshASACIAM2AkQgAiABNgI0IAIgATYCJCACKAIgIQMgAigCGCEEA0AgAkEQaiACQSRqEEQgAigCECIFRQ0CIAIoAhQhBiACQdQAaiIBIAUoAgAgBUEIaigCABDWASACQcgAaiIFIAEQHSAEIAMgBRDLASABIAYQKCAEIAMgARDLAQwACwALIAFBDGooAgAiA0UNACABKAIEIQEgA0EYbCEDIAIoAiAhBCACKAIYIQUDQCACQSRqIgYgARAoIAUgBCAGEMsBIAFBGGohASADQRhrIgMNAAsLIAAgAikCGDcCACAAQQhqIAJBIGooAgA2AgAgAkHgAGokAA8LAAtBgJfCAEErQYzWwAAQ3gEAC8UFAQl/IwBBwAFrIgMkAAJAAkACQAJAIAItADAiBEEBRwRAAkACQAJAIAEtADAiBkEBaw4CBAABCyAERQ0BDAULIARFDQQLAkACQAJAIAEoAigiBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyAFIAIoAigiB0EETQR/IAJBCGoFIAIoAgQhByACKAIICyAHEKgBQf8BcQ4CAQIACyADQeAAaiIFIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAUgAhB1IANBMGoiASAFQTAQvgIaIAIQjwIgACAEIAEQQgwGCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgUgA0EwahAzIANBkAFqIgQgBUEwEL4CGiAEQQRyIQYgA0GYAWohCSADQbgBaiEHIAMoApgBIQoDQCAJIQUgAygCuAEiCCEEIAhBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAHIQQgC0UEQCADKAKUASEIIAYhBAsgCEUNASAEIAhBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAMLIANB4ABqIgUgAUEwEL4CGiADQZABaiIEIAJBMBC+AhogBSAEEHUgA0EwaiIBIAVBMBC+AhogBBCPAiAAIAYgARBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkE4EL4CGgsgARCPAgwBCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAYgAxBCCyADQcABaiQAC/AGAQF/IwBB8ABrIgIkACAAKAIAIQAgAkEANgJIIAJCATcCQCACQeQAakGE6sEANgIAIAJBAzoAbCACQSA2AlwgAkEANgJoIAJBADYCVCACQQA2AkwgAiACQUBrNgJgAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAoAgBBAWsOGBgAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcLIAJBQGtBkO3BAEEYEK4CDRkMGAsgAkFAa0Go7cEAQRsQrgINGAwXCyACQUBrQcPtwQBBGhCuAg0XDBYLIAJBQGtB3e3BAEEZEK4CDRYMFQsgAkFAa0H27cEAQQwQrgINFQwUCyACQUBrQYLuwQBBExCuAg0UDBMLIAJBQGtBle7BAEETEK4CDRMMEgsgAkFAa0Go7sEAQQ4QrgINEgwRCyACQUBrQbbuwQBBDhCuAg0RDBALIAJBQGtBxO7BAEEMEK4CDRAMDwsgAkFAa0HQ7sEAQQ4QrgINDwwOCyACQUBrQd7uwQBBDhCuAg0ODA0LIAJBQGtB7O7BAEETEK4CDQ0MDAsgAkFAa0H/7sEAQRoQrgINDAwLCyACQUBrQZnvwQBBPhCuAg0LDAoLIAJBQGtB1+/BAEEUEK4CDQoMCQsgAkFAa0Hr78EAQTQQrgINCQwICyACQUBrQZ/wwQBBLBCuAg0IDAcLIAJBQGtBy/DBAEEkEK4CDQcMBgsgAkFAa0Hv8MEAQQ4QrgINBgwFCyACQUBrQf3wwQBBExCuAg0FDAQLIAJBQGtBkPHBAEEcEK4CDQQMAwsgAkFAa0Gs8cEAQRgQrgINAwwCCyACQUBrIAAoAgQgAEEIaigCABCuAkUNAQwCCyAAQQRqIAJBzABqEEUNAQsgAkE4aiACQcgAaigCADYCACACQSxqQQQ2AgAgAkEkakEENgIAIAJBDGpCAzcCACACIAIpAkA3AzAgAkExNgIcIAJBBDYCBCACQejxwQA2AgAgAiAAQRBqNgIoIAIgAEEMajYCICABQRhqKAIAIQAgAiACQTBqNgIYIAIgAkEYajYCCCABKAIUIAAgAhAvIAIoAjQEQCACKAIwECILIAJB8ABqJAAPC0Gc6sEAQTcgAkEYakHU6sEAQbDrwQAQrgEAC6UGAQd/IwBBEGsiBiQAAkACQAJAAkAgASgCCEUEQCABQX82AgggAyEFIAMhByACQQNqQXxxIAJrIgQgA00EQCADIAMgBGtBB3EiB2shBSADIAdJDQUgBCEHC0EAIAVrIQogAkEBayEJIAMhBAJAAkACQANAIAQgCmpFBEADQCAHIAUiBEkEQCAEQQhrIQUgAiAEaiIJQQRrKAIAIghBipSo0ABzQYGChAhrIAhBf3NxIAlBCGsoAgAiCEGKlKjQAHNBgYKECGsgCEF/c3FyQYCBgoR4cUUNAQsLIAMgBEkNBgNAIAQiBUUNBCAEQQFrIgQgAmotAABBCkcNAAsMAgsgBCAJaiAEQQFrIQQtAABBCkcNAAsgBCAKakEBaiAFaiEFCyADIAVPDQFBiZjCAEEjQayYwgAQ3gEACwJAIAFBFGooAgAiBEUEQEEAIQQMAQsgBCABKAIMakEBay0AAEEKRw0AQQAhBCABQQA2AhQgAUEYakEAOgAACyADIAFBEGooAgAgBGtPBEAgACABQQxqIAIgAxDCAQwFCyABKAIMIARqIAIgAxC+AhogAEEEOgAAIAEgAyAEajYCFAwECyABQRRqKAIAIgRFDQICQAJAIAUgAUEQaigCACAEa0kEQCABKAIMIARqIAIgBRC+AhogASAEIAVqIgQ2AhQMAQsgBkEIaiABQQxqIAIgBRDCASAGLQAIIgRBBEcNASABKAIUIQQLIARFDQMgAUEANgIUIAFBGGpBADoAAAwDCyAAIAYoAAk2AAEgAEEEaiAGQQxqKAAANgAAIAAgBDoAAAwDCyMAQTBrIgAkACAAQRhqQgE3AgAgAEEBNgIQIABBnKbAADYCDCAAQQs2AiggACAAQSRqNgIUIAAgAEEvajYCJCAAQQxqQeyewgAQ6wEACyAEIANBvKnAABC4AQALIAIgBWohAiADIAVrIgMgAUEQaigCAE8EQCAAIAFBDGogAiADEMIBDAELIAEoAgwgAiADEL4CGiAAQQQ6AAAgASADNgIUCyABIAEoAghBAWo2AgggBkEQaiQADwsgBSADQcypwAAQuQEAC7kFAgl/AX4jAEHwAGsiAyQAIANBADYCECADQQA2AjggA0EIaiADQRBqIAJBA3YgAkEHcUEAR2ogBSACGxCTAQJAIAMoAggiBEGBgICAeEcEQCAERQ0BAAsgA0E4aiEKQQQhBwJ/IAMoAjgiBEEETQRAIANBGGohCSAKIQggBAwBCyADQRBqQQRyIQggAygCGCEJIAQhByADKAIUCyEGAkACQCAIIAYgB0kEfwNAIAJFDQIgAUEBayEEIAJBCCACIAJBCE8bIgVrIQIgASAFaiEBQgAhDANAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsgCSAGQQN0aiAMNwMAIAZBAWoiBiAHRw0ACyAHBSAGCzYCACACRQ0BIANBEGpBBHIhBiADQRhqIQgDQAJAQQggAiACQQhPGyILRQRAQgAhDAwBCyABQQFrIQRCACEMIAshBQNAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsLAn8gAygCOCIHQQVJBEAgByEFIAghCUEEIQcgCgwBCyADKAIUIQUgAygCGCEJIAYLIQQgAiALayECIAUgB0YEQCADQRBqEKABIAMoAhQhBSADKAIYIQkgBiEECyABIAtqIQEgCSAFQQN0aiAMNwMAIAQgBCgCAEEBajYCACACDQALDAELIAggBjYCAAsgA0FAayIBIANBEGpBMBC+AhogAUEEciEKIANByABqIQYgA0HoAGohByADKAJIIQEDQCAGIQIgAygCaCIFIQQgBUEFSSIIRQRAIAMoAkQhBCABIQILAkAgBEUNACAEQQN0IAJqQQhrKQMAQgBSDQAgByEEIAhFBEAgAygCRCEFIAohBAsgBUUNASAEIAVBAWs2AgAMAQsLIAAgA0FAa0EwEL4CGiADQfAAaiQADwtB7PDAAEERQYDxwAAQ3gEAC5IFAQh/IwBB8ABrIgMkAAJAIAItADAiBUEBRgRAIAAgAUE4EL4CGgwBCwJAAkACQAJAAkACQCABLQAwIgZBAWsOAgABAgsgAigCKCIEQQRNBH8gAkEIagUgAigCBCEEIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgYgAiACIARBA3RqEEMgA0EQaiICIAZBMBC+AhogACACQTAQvgIiAEECIAVrOgAwIAAgAygAQDYAMSAAQTRqIANBwwBqKAAANgAADAQLIAVFDQEMAgsgBUUNAQsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAQgAhAUIAAgBiABEEIMAgsCQAJAAkACQCABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAsgBSACKAIoIgdBBE0EfyACQQhqBSACKAIEIQcgAigCCAsgBxCoAUH/AXEOAgECAAsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAIgBBAaIABBAiAGayABEEIMBAsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiAiADQQRqEDMgA0FAayIEIAJBMBC+AhogBEEEciEIIANByABqIQYgA0HoAGohCSADKAJIIQcDQCAGIQQgAygCaCICIQUgAkEFSSIKRQRAIAMoAkQhBSAHIQQLIAVFDQIgBUEDdCAEakEIaykDAEIAUg0CIAkhBSAKRQRAIAghBSADKAJEIQILIAJFDQAgBSACQQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = yB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await mB(await i, n);
  return DB(t, e);
}
function Rt(i, n, t, e, A) {
  return UA(A - 607, n);
}
(function(i, n) {
  function t(r, g, a, s, c) {
    return UA(r - 621, a);
  }
  function e(r, g, a, s, c) {
    return UA(a - 615, g);
  }
  function A(r, g, a, s, c) {
    return UA(r - 187, s);
  }
  const o = i();
  for (; ; )
    try {
      if (parseInt(t(933, 944, "MPxL", 945, 939)) / 1 + parseInt(t(914, 920, "H#S7", 937, 914)) / 2 + -parseInt(A(485, 470, 494, "Hp6B", 488)) / 3 + parseInt(t(929, 915, "%2NK", 932, 942)) / 4 * (parseInt(e(935, "h4O&", 918, 909, 940)) / 5) + -parseInt(t(909, 911, "NeWC", 910, 934)) / 6 * (parseInt(e(941, "[6!4", 933, 913, 932)) / 7) + parseInt(e(951, "ljBc", 930, 950, 909)) / 8 + -parseInt(t(934, 923, "xbyg", 942, 939)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ei, 622582 + -13405 * 22);
function UA(i, n) {
  const t = ei();
  return UA = function(e, A) {
    e = e - (-2938 * 1 + -2066 * 3 + 9413);
    let o = t[e];
    if (UA.NqczPD === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      UA.LigkyZ = c, i = arguments, UA.NqczPD = !0;
    }
    const g = t[19 * -157 + -46 * -151 + -3963], a = e + g, s = i[a];
    return s ? o = s : (UA.YMeGAn === void 0 && (UA.YMeGAn = !0), o = UA.LigkyZ(o, A), i[a] = o), o;
  }, UA(i, n);
}
function Bo(i, n, t, e, A) {
  return UA(i - -247, t);
}
function ng(i, n, t, e, A) {
  return UA(A - 522, n);
}
function wB(i, n, t, e, A) {
  return UA(i - -948, e);
}
function ei() {
  const i = ["W70RrmkeW7PIgmoqAmoaW50", "rMddRmoSWO8", "WPvdWPVdLa", "WRBcIMO+W4a", "DCkwWPfwWPhcRcP5WOlcHW", "WQ8QW5pdJCoU", "qCkNuSo4cq", "o8ohy2GV", "yshdISopWR5rmWW", "zeHwkmkpnItdJHddLKVcKa", "D8oxEuxcHq", "cCkaEhfD", "zGxdOmkbuCogymkxWPNcGSoKnxq", "btNdJmoBWPC", "W5ldH3NdJctcTxeteSksW5hcMmoY", "uSosW5NdHJS", "fmk6W7HbDW", "WPpdGmkdcgy", "r8kkuqXD", "WPLUWRhcVmoaWQH4W6O", "WQq4eCoDWQO", "W7rOWOVcJcG", "W4BcJCo1W7iZ", "ufNdHK9hc20mAmoA", "uhfAWOpdUmkXWRvKnCkHW4BdO8oe", "dciCW5VcRW", "W6WunCkugW", "pSoqEL7dNW", "W5msW5dcJY1zWOJdRSk+WPjdWQS", "WPddSbJdGCoRw3i/W6fvuLxdOW", "WOdcKmoEusVcG8kll8kRW75gAcS", "cSknWPFcLMZcG1FcMb3dQgZdO8k2", "W73dIKNdJHe", "WQKXW4JdNhJcLmkLFsVdGJZdJG", "W4/dM8oIWPxdLmkttmolASklnG", "DbldSxCg", "rg7dKrXF", "DCkvWPbtW5ddRvD7WQ3cM2XXEW", "WOxdQY3dNHq", "xKBdJbHI", "W4dcMCkaW5pdOG", "w8kuyWnA", "WOlcMCozucxcHCked8ktW4nvwq8", "ruldNGzo", "W6dcNv3dLSkH", "bCkkpZ5/", "WOXlWP3dK3G", "WR9vW6BdVq", "W7hcPSoka8okD8oTWQn3W67dM0e", "bLddNGzg"];
  return ei = function() {
    return i;
  }, ei();
}
var s0;
class bB {
  constructor() {
    p(this, s0, !1);
  }
  async [(s0 = Rt(909, "TnvB", 923, 918, 926) + Rt(894, ")K[g", 913, 883, 892) + Rt(921, "86du", 893, 924, 912), Bo(34, 42, "Ab]5"))](n) {
    function t(g, a, s, c, I) {
      return Bo(g - 83, a - 102, I);
    }
    function e(g, a, s, c, I) {
      return Bo(s - 610, a - 53, g);
    }
    function A(g, a, s, c, I) {
      return Rt(g - 495, s, s - 123, c - 248, c - -1439);
    }
    function o(g, a, s, c, I) {
      return Rt(g - 150, I, s - 473, c - 206, g - -22);
    }
    function r(g, a, s, c, I) {
      return Bo(g - -148, a - 483, s);
    }
    try {
      const g = n + (o(868, 862, 873, 874, "lPJ#") + "/") + Za;
      await ws(g), this[o(885, 873, 871, 870, "W]IT") + A(-507, -486, "A5D(", -510, -503) + e("GqeH", 685, 679, 683, 680)] = !0;
    } catch {
      this[e("Ucf8", 635, 650) + A(-543, -541, "GVc8", -554) + e("ljBc", 682, 662)] = !1, console[e("MPxL", 650, 649)](Za + (e("Rsee", 650, 664) + t(130, 113, 117, 145, "aWV2") + r(-71, -48, "GJ]h") + o(891, 867, 913, 914, "z3G7") + o(864, 889, 879, 888, "zc7#") + r(-118, -93, "lPJ#") + e("au#6", 662, 654) + r(-91, -77, "#92$") + A(-548, -543, "CI*x", -530) + r(-105, -103, "!K6Q") + o(896, 921, 893, 896, "aWV2") + e("Uc9w", 698, 673) + o(880, 866, 885, 905, "zc7#") + e("%2NK", 654, 672) + "n."));
    }
  }
  [ng(862, "CI*x", 828, 857, 847) + Bo(73, 57, "lPJ#") + ng(819, "isxx", 837, 842, 819) + "ed"]() {
    function n(e, A, o, r, g) {
      return Rt(e - 111, g, o - 129, r - 31, e - -86);
    }
    function t(e, A, o, r, g) {
      return wB(o - 306, A - 145, o - 247, A);
    }
    return this[n(844, 837, 859, 821, "lPJ#") + n(801, 822, 814, 790, "MPxL") + t(-364, "&l7[", -353)];
  }
}
class Pi extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function It(i, n, t, e, A) {
  return AA(n - 847, e);
}
function ti() {
  var i = ["bfZdHa", "fJVcGmkslMqY", "cbBdGhZcMGWrW4/cTmougmoEWRu", "W6hcR1ddJG", "rmoXaJVcOa", "FvzbyrG", "bmkNpJ7dLq", "WR/dTqlcISk/", "WQXwlGpcMW", "W4pdItxdVmkRW4TigSk/WQq", "WOr9rmkLl8kuW4VcTa", "WRK2FWldNZNdOr1SCW", "gSk9l8o4WOW", "WQxdSrFcHCkd", "y8o3xa", "W7KHxftdUW", "W7qYwLJdOq", "x8oKzCk5W50HrmkrWQW3kq", "lCkeBwtdSCkLWRPnW6nPWQhcHmo0", "ah/dKurid0q", "WOVdICouvqNcOetdUq", "WRtcVSkcuwrMt00", "kxGGWQxcOG", "v8kyW4exvG", "WQ7dU8obW7za", "W6ldU8k7DhS", "nrPi", "WPJdQtO", "WPaTW4ZcNfpdGLtcP8kIWO3cThRdQG", "W65qWQDyAtFdPCoG", "ACoaWRaCfsBcISk+oaddHd9N", "tmksW5W", "AvztsGC", "WPddRYPfWR0", "bd/cLXi9tdPRf8oWgmkNWOu", "W4v8WPJdNH8", "EwBdMwGE", "ESoeoIBcTW", "f3RdH8ohvszmW5StvZvVWQq", "W7pcOgPbjW", "FKnpzXK", "D8orjG", "yCo1sW", "W5pcISoarqe", "FM3dNL4A", "W6fZg1FdIG", "W5vxfW", "W6/dVCkPy2a", "W5P7WOv1w8oCWPFcJMddV8kNWRVcOW", "WQVdOmocyCkk", "h8kiyv4L", "bdVdQeDJmgfW", "W6DnvZBcOa", "W5qTrCktaW", "W75joK3dNG", "WPqfW7VcRrNdTCosAW", "nSoAW74jBa", "W4vgW6tcTIG", "W4xcTMWMWQhcGSoXj8kDba", "W6xcPSk3WOBdIG", "WQLJzgRdUCo4x3K", "WO0QW5aYgq", "W5vlbYb6", "W75xc37dKq", "td3cHSkEaG", "jCkCW6PdCa", "W4CQwG", "lHrsWQNcPG", "W4TrW7K", "W5FcNmoT", "W6VcJSk8WRpdMG", "W6ruW6ibhe7cVSokW7vgkexdGa", "WQdcQ2/dOu8Agmob", "WPmmWRpdT2/dQSoXB8kvlSkn", "WRxdV8ox", "x1hcMJ/dKa", "uKVdL8o7WRu", "W4P3WP7dRWq", "W63dLdhcR8oa", "usRcK8kBoa", "WQ/dSSoAW6fbi8kEFgOh", "W6tcOepdN8oUW5nAW7ucxSoaWQtdMG"];
  return ti = function() {
    return i;
  }, ti();
}
function Qe(i, n, t, e, A) {
  return AA(A - -243, e);
}
function Ti(i, n, t, e, A) {
  return AA(e - -109, t);
}
function ct(i, n, t, e, A) {
  return AA(e - -221, t);
}
function AA(i, n) {
  var t = ti();
  return AA = function(e, A) {
    e = e - (57 * 94 + 679 * -2 + -3675 * 1);
    var o = t[e];
    if (AA.nnkRgb === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, y = C.length; m < y; m++)
          E += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var C = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      AA.oEzgSa = g, i = arguments, AA.nnkRgb = !0;
    }
    var a = t[-3 * -839 + -6 * -661 + -6483], s = e + a, c = i[s];
    return c ? o = c : (AA.fRiZmU === void 0 && (AA.fRiZmU = !0), o = AA.oEzgSa(o, A), i[s] = o), o;
  }, AA(i, n);
}
function Qo(i, n, t, e, A) {
  return AA(A - -33, n);
}
(function(i, n) {
  function t(s, c, I, x, C) {
    return AA(c - 31, C);
  }
  function e(s, c, I, x, C) {
    return AA(s - -936, I);
  }
  function A(s, c, I, x, C) {
    return AA(C - 526, x);
  }
  function o(s, c, I, x, C) {
    return AA(s - 391, C);
  }
  var r = i();
  function g(s, c, I, x, C) {
    return AA(c - -643, x);
  }
  for (; ; )
    try {
      var a = -parseInt(A(818, 853, 822, "8Hf1", 851)) / 1 * (-parseInt(A(830, 882, 826, ")&j3", 863)) / 2) + -parseInt(t(347, 375, 396, 336, "Hof3")) / 3 + parseInt(A(879, 878, 854, "H^Dz", 860)) / 4 * (parseInt(e(-537, -562, "uu&2", -541, -513)) / 5) + parseInt(t(344, 381, 360, 405, "[s$@")) / 6 * (parseInt(t(413, 402, 400, 382, "rO*I")) / 7) + -parseInt(g(-328, -316, -289, "!Eg9", -324)) / 8 * (parseInt(o(724, 728, 713, 717, "Sy5c")) / 9) + parseInt(A(885, 871, 845, "vzfr", 862)) / 10 * (parseInt(e(-590, -553, "BZ(N", -586, -556)) / 11) + -parseInt(A(882, 901, 911, "g0HW", 914)) / 12 * (-parseInt(t(450, 431, 390, 403, "[j5!")) / 13);
      if (a === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ti, -30002 * 2 + 27 * -42099 + 8 * 235322);
var ut, No;
class ig {
  constructor(n) {
    U(this, ut);
    U(this, No);
    this[t("H^Dz", -161) + A(-175, -139, "V685", -153, -172)] = n;
    function t(r, g, a, s, c) {
      return AA(g - -514, r);
    }
    function e(r, g, a, s, c) {
      return AA(a - -861, s);
    }
    function A(r, g, a, s, c) {
      return AA(c - -544, a);
    }
    function o(r, g, a, s, c) {
      return AA(a - -319, c);
    }
    try {
      v(this, ut, n[A(-178, -156, "bpw[", -136, -140) + e(-484, -489, -513, "[GH7", -473) + o(37, 39, 23, -8, "CMN2")] && JSON[o(43, 28, 9, 18, "Sy5c")](n[o(59, 41, 32, 38, "Hof3") + o(76, 70, 41, 74, "H&*)") + t("z%RB", -116, -79, -154, -151)])), v(this, No, n[e(-538, -512, -520, ")&j3", -523) + A(-145, -153, "rO*I", -119, -160)]);
    } catch (r) {
      console[t("V@]i", -113)](r);
    }
  }
  get [Qe(77, 108, 159, "!Eg9", 118) + "id"]() {
    function n(e, A, o, r, g) {
      return Qe(e - 108, A - 360, o - 349, o, e - 947);
    }
    function t(e, A, o, r, g) {
      return Qe(e - 298, A - 122, o - 170, g, r - 917);
    }
    return this[t(1037, 1071, 1069, 1039, "mFL8") + t(1003, 978, 1042, 1006, "kC2J")][t(1070, 1023, 996, 1033, "vzfr") + n(1047, 1058, "0&yD")];
  }
  get [Qe(99, 128, 111, "kC2J", 88) + "s"]() {
    function n(e, A, o, r, g) {
      return It(e - 24, o - -764, o - 293, r);
    }
    function t(e, A, o, r, g) {
      return It(e - 368, g - -1495, o - 273, o);
    }
    return this[n(470, 433, 456, "rO*I") + n(485, 449, 488, "zoRi")][t(-342, -275, "zdra", -331, -310) + "s"];
  }
  get [Qe(97, 72, 118, "rw07", 97) + Qo(353, "H^Dz", 352, 292, 324)]() {
    function n(A, o, r, g, a) {
      return ct(A - 208, o - 120, a, o - -747);
    }
    function t(A, o, r, g, a) {
      return Qe(A - 7, o - 48, r - 186, a, o - 1203);
    }
    function e(A, o, r, g, a) {
      return ct(A - 311, o - 233, o, a - 1110);
    }
    return this[e(1297, "[j5!", 1321, 1277, 1280) + e(1301, "CMN2", 1233, 1279, 1272)][t(1392, 1362, 1365, 1334, "jqmA") + n(-651, -638, -614, -606, "hQ%Z")];
  }
  get [It(1194, 1196, 1199, "0&yD") + "b"]() {
    return S(this, ut);
  }
  get [ct(93, 155, ")&j3", 120) + ct(189, 134, "vzfr", 164)]() {
    return S(this, No);
  }
  get [It(1220, 1241, 1214, "2Jov") + Qe(117, 119, 173, "1ug&", 135) + Qo(313, "88vy", 329, 292, 322) + Ti(319, 244, "rw07", 281)]() {
    var o, r;
    function n(g, a, s, c, I) {
      return ct(g - 267, a - 117, s, c - -74);
    }
    function t(g, a, s, c, I) {
      return It(g - 115, c - -649, s - 378, g);
    }
    function e(g, a, s, c, I) {
      return ct(g - 445, a - 204, a, s - -108);
    }
    function A(g, a, s, c, I) {
      return It(g - 365, g - -1339, s - 89, s);
    }
    return !!((r = (o = S(this, ut)) == null ? void 0 : o[t("[GH7", 572, 636, 601) + t("d1XT", 504, 537, 545)]) != null && r[t("zoRi", 531, 512, 527) + t("C6#X", 528, 600, 568) + A(-86, -46, "q[mu") + n(123, 94, "%kE)", 97) + t("uu&2", 547, 558, 578) + n(108, 43, "1Z0G", 80) + e(59, "hQ%Z", 29)]);
  }
  get [Ti(249, 289, "C6#X", 270) + Ti(277, 215, ")&j3", 254) + Qe(83, 74, 110, "d1XT", 96) + Qe(87, 110, 82, "H&*)", 109) + ct(114, 106, "qitE", 145) + Qo(295, "1ug&", 340, 367, 329)]() {
    var r, g;
    function n(a, s, c, I, x) {
      return Qo(a - 484, s, c - 215, I - 241, I - -327);
    }
    function t(a, s, c, I, x) {
      return Qo(a - 106, s, c - 256, I - 300, c - -882);
    }
    function e(a, s, c, I, x) {
      return Qe(a - 171, s - 347, c - 334, s, I - -186);
    }
    function A(a, s, c, I, x) {
      return Qe(a - 1, s - 346, c - 372, s, I - 254);
    }
    function o(a, s, c, I, x) {
      return It(a - 67, s - -1546, c - 431, c);
    }
    return !!((g = (r = S(this, ut)) == null ? void 0 : r[n(39, "!&@8", 34, 17) + n(-16, "ANxB", 40, 22)]) != null && g[t(-538, "uu&2", -520, -523) + n(-3, "1Z0G", 67, 26) + n(9, "jTw@", 15, 8) + e(-82, "BZ(N", -81, -48) + A(358, "[GH7", 341, 367) + o(-269, -306, "Hof3") + n(31, "ANxB", 34, 9)]);
  }
}
ut = new WeakMap(), No = new WeakMap();
function j(i, n, t, e, A) {
  return CA(n - -798, i);
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return CA(I - -779, s);
  }
  function e(g, a, s, c, I) {
    return CA(c - 828, s);
  }
  function A(g, a, s, c, I) {
    return CA(a - 636, c);
  }
  function o(g, a, s, c, I) {
    return CA(a - 426, c);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(e(1540, 1517, "]wMT", 1463, 1404)) / 1 + parseInt(e(1310, 1267, "3PU2", 1378, 1342)) / 2 + parseInt(o(1065, 1098, 1203, "nzzG", 1214)) / 3 * (parseInt(o(1096, 1053, 1118, "3HWH", 1034)) / 4) + -parseInt(A(1017, 1130, 1155, "S$Uv", 1083)) / 5 + -parseInt(o(1046, 1024, 952, "nzzG", 924)) / 6 * (parseInt(t(17, -59, "qUEm", 45, -74)) / 7) + -parseInt(t(-178, -350, "PJix", -198, -250)) / 8 * (-parseInt(t(-154, -327, "%p4o", -325, -206)) / 9) + parseInt(e(1308, 1293, "b#*5", 1347, 1396)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, 793320);
function oi() {
  const i = ["cmoZlSo4", "gSkNda", "WOD3W5rp", "W6ddOGtdPZ8", "W5NdImoCfSoO", "W7TDb8okoG", "WQilWROHia", "WQrPWOZdPh8", "WQf0WPhdKM0", "WPxdNYbsbq", "W6DteSo8lq", "kCkdcK3dVa", "WQOUW6qxBmo6W5G", "W5xcN8o7W7GP", "W5/cL8o8", "x3ldTSkezq", "ySoNvmoRW7K", "WP54W4TlWRe", "osVdLCof", "WRWhWQOXiG", "WRz0WRNdUstdHmo6xXvqW7f8", "DmkPCGZdTG", "WO3cKdK0W7u", "WRZcL8o/egi", "W4z7j8oeaG", "cmoRWO3dOSkY", "yMpcNK/cNG", "z8kDuXtdNG", "W6dcOuJdTSkV", "AcddTCkEDq", "W6dcJ3JdHCk3", "W50pW4fothtdIq", "oCoTWPpdQmkK", "W7itW4i7za", "pCkNqKCs", "EmoDuW", "WQjTW61T", "WP99W4T+WQi", "nsVdGmopW7K", "W5dcK8o7", "gCkeASkjW6W", "WPPHW7nnWRe", "W5NdGSoCeCo/", "WPS8qKr2", "WRBdUWOMua", "WPzGW55uWQi", "W4OMW4BcVxm", "W7VcLhtdR8kZ", "iKmnW6ZcSG", "qSoDWQBcHIa", "EKFcNxPo", "s8oGrmoRW4C", "W6ddTt0", "r8o0W7anW6e", "W5/cJCoCcSo5", "F8kLyG", "W4ydW4tcH2i", "WOmvs8kRW70Dhh7cQXVdU2O", "W7NdSZZdVaW", "jemqW7dcSW", "W5BdMCo+dmoU", "W5TlgSk2WQy", "W6bteSoH", "WQdcTv3dKGG", "W5Hne8orWPW", "W7vXtSkcdW", "WPDqimkEW7S", "W7yHWRmQW4FcLZlcJZlcJmk6vLS", "F2NdJSkiiW", "gmk7bmk5WQqyW507W6xdPfy", "W490aConhG", "EmoBvY4J", "W6vedmo1W6O", "WO80W7zcsW", "FSkHvY3dKG", "msBdHW", "c8odFSkAW4C", "WRxcM8kRwCkU", "iSknfK0", "W55kga", "AmojrCo4cW", "WQuMW6pcUxi", "WO0hWRC3kW", "jSkcguW", "W4ldHaBdLc0", "EmoBtI4P", "WRldPb0", "a8owD8k/W5q", "l8klBSkLW4C", "WQ5PWP3dGgO", "og/cKYVcGCo6W47dSmoPWRal", "WQtcTvJdGHG", "WPVdOHvhpa", "WR/cICkMwCk4", "WPD9W5H+WR0", "emk6dxaU", "W4RdN8oBc8o5", "WO9MW4dcK8oL", "WRpdKtTGaq", "WOe6W7bKqG", "W6ree8oXWQ4", "WPz3W5vDWQC", "WQHTW4lcSSop", "WP53W54", "zJxdK2JdNa", "kSkCDCk1W5W", "qJpdG3NdNa", "WPDAm8kVW68", "WPS0W7y", "jKuxW7a", "W4pcNeBdR8k5", "W5BdJKhdRSk5", "eSoAWRVcGcS", "WOmhWQS", "FIJdIxldHG", "WR3dLqJdImkw", "WPrUW5hcMmoI", "xgS5W4aH", "WP4WrK5j", "i8o+WOW", "C3FdJmk0kW", "CuVcILTp", "ywZdHW", "CGLjWRFdTuFcUhT0tmomW6ZdNG", "ECkQW7uIWP0", "DajoWRpdTb/dKuXdv8oj", "WRFcJraoW70", "k8oRWPRdQa", "FCkRDq", "uf3cLfJcQW", "tSoXlSoVW4O", "W7WqW7NcGNu", "W4C+W6BcH3u", "WQu+vurS", "W4uJW57cH3C", "W4jedCoRWQ8", "WP4dWQS3kW", "WOBdMmoNwwG", "WO8PW6fI", "aSoYkCo4W50", "lL8wW7C", "W695qCkobq", "WP17W5HsWRe", "w8opWOVcGYq", "W6aOW7xcLmkADepcKH5BkSof", "h8obBSkhW6e", "WRFdRb4OvW", "WPfJW4e", "W47cSuuqESogFsfOW7/dOIhdP2a", "WPBcLI8fW6W", "W5lcHCo8W4KR", "W7SRW57cHG", "W63dOchdOry", "WPK6W7z0tW", "W6K0W4dcPx8", "DwWPW4bV", "WOddGmo6hxi", "lHBdNaSzEd3cVJyXWOu4", "W51rW6H0EHddOSoefupdUq", "j8kbBSoMW4y", "iCkpBSkLW4C", "W6aUW7/cQtW", "WQxcOLpdLq4", "W5tcGSo9W5i2", "WQPNWORdGNy", "WQBdMmkZpu4", "E0FcNv1j", "W53cIvW", "WPD3W4Gv", "W69/rq", "W43dJmobkCoK", "W6yfe8oXWQK", "FudcLupcTW", "W4pcVSoUW5aH", "pgpcLeZdM8oqW7BdRSop", "hSkTea", "WOtdHdddK8kL", "W70FW48TBW", "W5BcGfZdPmkD", "W6ZdNmoYcCoKW6PvWOKMW51Via", "W6jec8oW", "W6zIumkegq", "F8k5W7aLWO0", "WO0xWQOWiq", "tCoHwCo6W6u", "WPjApmkOW78", "WRXiW6BdNCoa", "WPeQvf5Q", "W47dG3XDWQZdImoAW5aGwK4bs8oj", "WR42re9R", "WOhdMCo1fG", "WQaduCoQomoQsdlcQG", "tCoLqYWm", "WO12WQvAWR0", "CmkPAdpdUG", "W7SiW5mXEa", "W4RdHCkEm8k+", "WRPjW7bqWPS", "WPvxWPhcGmoV", "g8kPfMa1", "W5pdGSoC", "zwldM8kwkW", "ESkOW47dQmkWW4aKWQm1", "WOiTsfXS", "W5ldJmogbSoL", "pmo2xmkuW6y", "WPjnpCkOW6K", "mYddNCozWRW", "W5RdJCkjcCkH", "W5vac8oqWR0", "xCo6wmoJW7i", "W4badmohWQa", "WR8RWP4pba", "WPbloSkO", "W5dcNc8fW7G", "WPbln8k/", "gSk7nwiU", "WRrUW5hcMmoI", "E8k3W64", "mIddL8ooWRW", "BZFdHq", "WPrOW5hcNmo4", "WOilWROHia", "W61Jr8ofbW", "qSoNuW", "W5hdNSksgCk6", "W6mVW77cIx0", "WOaCs8oiWQn4cg3cUG", "W6iLW7JcGhu", "F8kLzsxdSq", "WRL5WRhdG8ol", "A8k9W7GOWOW", "WPu6u25Q", "D23dMSkDeG", "ySopsSoZcW", "WOZdMmoNpgW", "C8oxqaG4", "vgqJW4S", "qK7cLvRdUq", "o8oZWO7dUCk6", "k8kjguldRq", "W6WJW6NcOM8", "ifqlW4/cQq", "bmkPeg0"];
  return oi = function() {
    return i;
  }, oi();
}
function Ft(i, n, t, e, A) {
  return CA(t - -290, e);
}
function QA(i, n, t, e, A) {
  return CA(n - 341, A);
}
function xA(i, n, t, e, A) {
  return CA(t - 129, e);
}
function CA(i, n) {
  const t = oi();
  return CA = function(e, A) {
    e = e - (-7349 + 2435 * -4 + 17569);
    let o = t[e];
    if (CA.wplZXG === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      CA.cHuUTu = c, i = arguments, CA.wplZXG = !0;
    }
    const g = t[-13927 + 13927 * 1], a = e + g, s = i[a];
    return s ? o = s : (CA.TNNtKK === void 0 && (CA.TNNtKK = !0), o = CA.cHuUTu(o, A), i[a] = o), o;
  }, CA(i, n);
}
function X(i, n, t, e, A) {
  return CA(t - 131, e);
}
var I0, c0, C0;
class kB {
  constructor(n) {
    p(this, C0);
    p(this, c0, [Ft(336, 312, 295, "2N0f") + X(793, 761, 807, "nzzG") + "ic", X(730, 624, 632, "83a!") + X(649, 681, 725, "veEu") + "ic"]);
    p(this, I0);
    function t(A, o, r, g, a) {
      return CA(a - 691, o);
    }
    function e(A, o, r, g, a) {
      return CA(A - 450, a);
    }
    this[t(1208, "Jz5#", 1371, 1223, 1319) + e(1156, 1186, 1242, 1220, ")(M2") + "d"] = n;
  }
  async [(C0 = j("c&xs", -112) + "se", c0 = j("BaCj", -281) + X(515, 560, 634, "m4vZ") + X(629, 579, 680, "UUEI") + QA(875, 925, 922, 818, "6h0!"), I0 = X(583, 676, 664, ")(M2") + QA(1009, 986, 883, 1105, "Jdh7"), X(534, 752, 642, "S$Uv"))](n) {
    function t(a, s, c, I, x) {
      return QA(a - 242, I - -422, c - 331, I - 268, s);
    }
    const e = await this[r(656, 791, "]wMT", 695, 769) + g(458, 249, 350, "6h0!") + t(322, "m4vZ", 451, 441)](n);
    function A(a, s, c, I, x) {
      return j(s, x - 1786);
    }
    function o(a, s, c, I, x) {
      return j(x, s - -160);
    }
    function r(a, s, c, I, x) {
      return QA(a - 1, x - -171, c - 304, I - 410, c);
    }
    function g(a, s, c, I, x) {
      return X(a - 149, s - 9, c - -337, I);
    }
    await Promise[g(440, 483, 455, "m4vZ") + o(-348, -311, -365, -385, "%p4o")]([this[A(1479, "6K9m", 1581, 1516, 1594) + o(-426, -368, -489, -304, "OvjU") + "d"][r(872, 838, "83a!", 713, 785)](n), this[r(574, 561, "Hc2P", 755, 659) + t(530, "2N0f", 549, 439) + "e"](e)]), this[g(437, 427, 474, "veEu") + o(-437, -467, -502, -353, "11TP") + A(1715, "PJix", 1734, 1705, 1685)]();
  }
  async [X(926, 732, 834, "IizS") + j("rHB]", -272) + "se"](n) {
    var g;
    function t(a, s, c, I, x) {
      return xA(a - 48, s - 224, c - 408, x);
    }
    function e(a, s, c, I, x) {
      return j(I, x - 255);
    }
    function A(a, s, c, I, x) {
      return X(a - 197, s - 180, c - -105, x);
    }
    function o(a, s, c, I, x) {
      return X(a - 386, s - 195, c - -860, I);
    }
    function r(a, s, c, I, x) {
      return j(x, c - 21);
    }
    try {
      if (r(-286, -159, -280, -217, "2N0f") === r(-80, -226, -153, -47, "b#*5")) {
        _0xd2a2cb instanceof _0xc1de71 ? _0x13532f[r(-241, -196, -127, -81, "c&xs")]() : _0x1d1917 instanceof _0x592d2b && _0x29cc41[r(-64, 0, -118, -124, "BaCj")](_0x1f9030);
        const a = {};
        a[t(1287, 1150, 1193, 1167, "WTd8") + o(-90, 6, -59, "9nx4", -75)] = !1, a[t(1056, 1072, 1089, 988, "veEu") + "s"] = [], a[r(-88, -3, -65, -27, "^03y") + r(-99, -204, -110, -176, "#rkB")] = [], a[A(826, 729, 748, 756, "6h0!") + e(-38, -73, 16, "nzzG", 39) + t(926, 988, 1030, 924, "11TP")] = void (1009 + 1 * -853 + -156), a[A(522, 468, 524, 456, "%p4o")] = function() {
        }, a[e(94, -50, -71, "Jz5#", -22) + e(-20, 40, -47, "U]H$", 3)] = "", this[e(-3, 74, -9, "pGRv", 80) + t(1062, 1255, 1133, 1226, "]tvj")] = new _0x5e8318(a);
      } else {
        const a = await fetch(n);
        if (!a.ok) {
          if (o(-230, -189, -153, "f5G[", -73) !== t(1041, 1256, 1147, 1118, "%p4o")) throw new Error(o(-287, -234, -172, "^03y", -143) + o(-122, -209, -117, "]wMT", -197) + o(-18, -40, -60, "7GyT", -27) + o(55, 76, -33, "]wMT", -11) + "d.");
          return null;
        }
        this[A(631, 434, 538, 602, "veEu") + "se"] = await a[o(-177, -147, -112, "WTd8", -114)]();
      }
    } catch (a) {
      if (o(-85, 48, -12, "^03y") !== t(1167, 1168, 1192, 1204, "IizS")) {
        const s = this[e(105, 109, 77, "TN^]", 121) + r(-177, -278, -217, -246, "Hc2P") + "se"]();
        return ((g = s == null ? void 0 : s[A(509, 580, 536, 576, "83a!") + r(-149, -81, -123, -165, "Jz5#")]) == null ? void 0 : g[t(1059, 1061, 1064, 1132, "6K9m")]) || [];
      } else this[t(1179, 1071, 1185, 1228, "3HWH") + "se"] = void 0, console[e(-35, 37, 104, "Jz5#", -9)](a);
    }
  }
  async [xA(716, 661, 618, "Hc2P") + X(826, 722, 743, "]wMT") + "e"](n) {
    this[r("S$Uv", 663, 749, 681) + o(-43, "2czT")] = void 0;
    function t(g, a, s, c, I) {
      return j(I, g - 430);
    }
    if (!n) {
      if (o(69, "b#*5") !== e(1359, 1369, 1556, "#rkB", 1450)) throw new _0x16ba95(e(1399, 1290, 1267, "2czT", 1320) + t(290, 256, 275, 193, "Hc2P") + t(114, 126, 123, 93, "UUEI") + o(-161, "TN^]") + "d.");
      console[A(-298, -207, -259, -185, "6K9m")](e(1222, 1237, 1176, "6K9m", 1287) + t(174, 170, 115, 197, "nzzG") + r("]wMT", 440, 629, 539) + o(-70, "Hc2P") + o(-105, "WTd8")), this[A(-259, -330, -372, -141, "9nx4") + "se"] = void 0;
      return;
    }
    function e(g, a, s, c, I) {
      return xA(g - 250, a - 291, I - 622, c);
    }
    function A(g, a, s, c, I) {
      return QA(g - 72, g - -1200, s - 124, c - 169, I);
    }
    function o(g, a, s, c, I) {
      return xA(g - 345, a - 322, g - -773, a);
    }
    function r(g, a, s, c, I) {
      return X(g - 25, a - 156, c - -124, g);
    }
    await this[A(-322, -324, -329, -295, "efoT") + A(-271, -279, -346, -205, "^03y") + "se"](n);
  }
  async [Ft(393, 277, 323, "S$Uv") + j("9nx4", -233) + QA(814, 892, 940, 882, "nzzG")](n) {
    function t(g, a, s, c, I) {
      return Ft(g - 394, a - 272, s - 519, a);
    }
    const e = await fetch("" + n + this[o(1501, 1396, "oRF]", 1501) + o(1508, 1524, "]wMT", 1415) + o(1621, 1501, "dEj^", 1556) + A(-310, -249, "S$Uv", -228)][-187 * -49 + -251 * -28 + -771 * 21]);
    function A(g, a, s, c, I) {
      return QA(g - 464, a - -1070, s - 357, c - 231, s);
    }
    function o(g, a, s, c, I) {
      return X(g - 153, a - 130, c - 759, s);
    }
    const r = e.ok ? 3 * -394 + -1694 * -1 + 128 * -4 : 4234 * 1 + 4991 * -1 + 758;
    return "" + n + this[t(921, "b#*5", 936) + t(914, "7GyT", 904) + t(745, "11TP", 833) + o(1654, 1603, "K]v(", 1541)][r];
  }
  [QA(922, 826, 756, 745, "qUEm") + xA(757, 742, 769, "%p4o") + "s"](n) {
    function t(A, o, r, g, a) {
      return Ft(A - 379, o - 479, A - 1233, a);
    }
    function e(A, o, r, g, a) {
      return xA(A - 332, o - 241, A - 70, g);
    }
    n[t(1631, 1692, 1537, 1745, "VQ!Q") + "ch"]((A) => console[e(813, 932, 930, "U]H$")](A));
  }
  [X(864, 721, 842, "7GyT") + QA(802, 888, 909, 866, "ij3@") + xA(526, 604, 619, "%p4o")](n) {
    function t(e, A, o, r, g) {
      return QA(e - 254, r - -678, o - 499, r - 45, A);
    }
    n[t(214, "pGRv", 323, 285) + "ch"]((e) => console[t(410, "OvjU", 318, 296)](e));
  }
  [xA(891, 726, 794, "efoT") + j("rHB]", -190)]() {
    function n(A, o, r, g, a) {
      return QA(A - 159, o - -76, r - 475, g - 280, g);
    }
    function t(A, o, r, g, a) {
      return X(A - 203, o - 212, r - -547, g);
    }
    function e(A, o, r, g, a) {
      return j(g, o - 736);
    }
    return window[n(1030, 969, 1065, "pGRv") + t(250, 127, 155, "7GyT")][n(702, 808, 727, "Fc2U") + e(554, 529, 515, "qUEm")];
  }
  [xA(576, 562, 682, "t[7u") + j("f5G[", -107) + j("3HWH", -250)]() {
    function n(r, g, a, s, c) {
      return QA(r - 368, a - -334, a - 423, s - 498, g);
    }
    function t(r, g, a, s, c) {
      return xA(r - 306, g - 485, g - 36, c);
    }
    function e(r, g, a, s, c) {
      return j(s, r - 499);
    }
    function A(r, g, a, s, c) {
      return j(g, c - 985);
    }
    function o(r, g, a, s, c) {
      return xA(r - 390, g - 349, r - -27, s);
    }
    try {
      if (o(781, 704, 807, "nzzG", 691) !== e(390, 397, 273, "9nx4", 320)) {
        if (!this[e(193, 97, 109, "efoT", 142) + "se"]) {
          if (n(611, "K]v(", 575, 481, 677) === A(605, "]wMT", 598, 793, 689)) throw new Pi(o(666, 594, 725, "K]v(", 786) + o(740, 850, 735, "6K9m", 798) + e(189, 290, 234, "rHB]", 233) + n(721, "tzDS", 702, 815, 790) + ".");
          this[t(965, 874, 934, 891, "WTd8") + e(409, 531, 451, "3PU2", 334) + "d"] = _0x1dc8c4;
        }
        if (!this[n(527, "6K9m", 613, 624, 492) + e(303, 329, 277, "t[7u", 236) + "d"][o(689, 762, 724, "U]H$", 716) + t(751, 836, 948, 903, "m4vZ") + o(804, 752, 769, "f5G[", 836) + "ed"]()) {
          if (e(284, 296, 250, "PJix", 290) !== t(704, 804, 880, 832, "18CJ")) return _0x3db64d[A(679, "^03y", 823, 841, 779) + n(596, "U]H$", 623, 686, 587)][o(821, 847, 729, "qUEm", 744) + e(402, 476, 309, "BaCj", 290)];
          throw new Pi(o(789, 703, 882, "nzzG", 755) + e(231, 303, 133, "IizS", 233) + o(607, 597, 527, "m4vZ", 605) + o(707, 609, 695, "tzDS", 642) + ".");
        }
        this[e(375, 343, 482, "S$Uv", 337) + o(703, 801, 617, "2czT", 794)] = new ig(pB(this[t(840, 758, 742, 799, "PJix") + "se"], this[A(738, "Hc2P", 738, 766, 790) + A(987, "oRF]", 946, 946, 880)]())), this[A(585, "t[7u", 701, 669, 682) + o(602, 585, 492, "Fc2U", 586) + "s"](this[t(724, 688, 793, 786, "#rkB") + e(232, 319, 160, "IizS", 302)][t(808, 825, 739, 768, "WTd8") + "s"]), this[t(757, 646, 610, 624, "UUEI") + e(205, 109, 207, "Hc2P", 231) + o(640, 739, 696, "UUEI", 683)](this[t(888, 809, 784, 876, "jRFi") + A(822, "2czT", 737, 868, 788)][n(691, "11TP", 579, 657, 610) + o(731, 689, 853, "Jz5#", 771)]);
      } else throw new _0x29ff57(A(769, "U]H$", 772, 812, 836) + n(587, "jRFi", 637, 554, 696) + e(354, 440, 260, "OvjU", 378) + t(754, 791, 913, 860, "oRF]") + ".");
    } catch (r) {
      if (e(386, 410, 277, "18CJ") === o(745, 734, 721, "UUEI")) _0x580c49[A(857, "18CJ", 731, 905, 807) + o(825, 803, 895, "VQ!Q")](_0x5f2d21);
      else {
        if (r instanceof Pi)
          if (A(724, "Fc2U", 729, 895, 828) !== e(264, 203, 220, "c&xs")) r[A(761, "veEu", 661, 632, 727)]();
          else throw new _0x58d122(A(784, "Fc2U", 794, 745, 796) + e(209, 284, 130, "6K9m") + e(214, 170, 148, "WTd8") + o(802, 819, 826, "c&xs") + ".");
        else r instanceof Error && (n(551, "f5G[", 523, 520) !== A(830, "N[Bs", 924, 781, 855) ? console[A(877, "S$Uv", 971, 826, 850)](r) : _0x233378[o(636, 522, 642, "Jz5#")](_0x108dc6));
        const g = {};
        g[t(586, 679, 634, 587, "TN^]") + A(804, "dEj^", 894, 694, 782)] = !1, g[n(589, "3HWH", 573, 604) + "s"] = [], g[t(938, 838, 760, 888, "#rkB") + A(784, "9nx4", 700, 756, 686)] = [], g[e(379, 375, 321, ")(M2") + n(636, "2N0f", 644, 717) + t(714, 658, 627, 592, "11TP")] = void 0, g[n(453, "VQ!Q", 516, 513)] = function() {
        }, g[t(675, 723, 613, 733, "Hc2P") + e(419, 402, 457, "WTd8")] = "", this[A(811, "6h0!", 685, 661, 764) + o(677, 761, 598, "7GyT")] = new ig(g);
      }
    }
  }
  [X(755, 725, 672, "7GyT") + QA(1017, 960, 1010, 996, "7GyT") + xA(901, 959, 844, "nzzG") + QA(915, 927, 992, 998, "6h0!")]() {
    function n(t, e, A, o, r) {
      return j(t, r - 827);
    }
    return !!this[n("]tvj", 711, 519, 534, 608) + n("pGRv", 505, 535, 525, 564)];
  }
  [X(723, 886, 767, "9nx4") + QA(1e3, 919, 876, 831, "OvjU") + j("PJix", -164) + "t"]() {
    function n(e, A, o, r, g) {
      return xA(e - 411, A - 325, e - -419, o);
    }
    function t(e, A, o, r, g) {
      return xA(e - 20, A - 37, A - -156, e);
    }
    return this[n(430, 550, "IizS") + t("U]H$", 543)];
  }
  [X(695, 635, 637, "nzzG") + j("dEj^", -167) + "se"]() {
    function n(r, g, a, s, c) {
      return Ft(r - 213, g - 299, r - 1198, a);
    }
    if (!this[n(1420, 1415, "veEu") + "se"]) {
      if (n(1394, 1277, "ij3@") === n(1526, 1512, "#rkB")) return null;
      _0x4e20a0[o(91, 147, 16, 108, "nzzG")]();
    }
    function t(r, g, a, s, c) {
      return xA(r - 28, g - 375, a - -912, c);
    }
    function e(r, g, a, s, c) {
      return j(c, g - 1715);
    }
    function A(r, g, a, s, c) {
      return QA(r - 72, c - -409, a - 467, s - 130, r);
    }
    function o(r, g, a, s, c) {
      return xA(r - 105, g - 32, r - -732, c);
    }
    try {
      if (e(1649, 1600, 1605, 1694, "11TP") === o(29, 100, 136, 79, "WTd8")) return JSON[n(1432, 1334, "VQ!Q", 1530, 1385)](this[n(1395, 1492, "^03y", 1388, 1470) + "se"]);
      _0x309e24[e(1643, 1598, 1650, 1488, "6h0!") + "ch"]((r) => _0x20f085[e(1482, 1594, 1555, 1613, "18CJ")](r));
    } catch (r) {
      if (A("Jdh7", 545, 703, 623, 594) !== e(1604, 1484, 1531, 1559, "]tvj")) _0x1e89b1[t(-253, -86, -186, -126, "]wMT") + "ch"]((g) => _0x11a4b4[o(95, 158, 170, 156, "oRF]")](g));
      else {
        if (r instanceof Error) {
          if (o(113, 34, 21, 99, "K]v(") === t(-176, -80, -141, -28, "9nx4")) return !!this[n(1618, 1705, "U]H$") + o(111, 230, -11, 74, "VQ!Q")];
          b[o(49, -62, 88, 106, "WTd8") + A("t[7u", 522, 462, 539, 521)](r);
        }
        return null;
      }
    }
  }
  [X(711, 755, 711, "nzzG") + X(771, 586, 649, "^03y")]() {
    var g;
    function n(a, s, c, I, x) {
      return xA(a - 289, s - 42, x - 743, a);
    }
    function t(a, s, c, I, x) {
      return j(I, s - 1047);
    }
    function e(a, s, c, I, x) {
      return j(a, I - 1350);
    }
    const A = this[o(-144, -246, -71, -245, "18CJ") + e("PJix", 1102, 1173, 1173) + "se"]();
    function o(a, s, c, I, x) {
      return QA(a - 4, a - -1110, c - 192, I - 490, x);
    }
    function r(a, s, c, I, x) {
      return xA(a - 110, s - 146, x - -1023, c);
    }
    return ((g = A == null ? void 0 : A[t(813, 906, 953, "7GyT") + r(-315, -267, "Jz5#", -249, -240)]) == null ? void 0 : g[n("3PU2", 1538, 1680, 1493, 1564)]) || [];
  }
  [Ft(217, 254, 317, "c&xs") + j("dEj^", -217) + QA(779, 885, 884, 914, "Jz5#")]() {
    var r;
    function n(g, a, s, c, I) {
      return j(I, a - 531);
    }
    const t = this[o(637, 534, "PJix", 631) + e(1399, "qUEm", 1538, 1430) + "se"]();
    function e(g, a, s, c, I) {
      return X(g - 127, a - 435, c - 578, a);
    }
    function A(g, a, s, c, I) {
      return j(I, c - 1441);
    }
    function o(g, a, s, c, I) {
      return j(s, c - 922);
    }
    return (r = t == null ? void 0 : t[o(638, 601, "dEj^", 679) + A(1330, 1454, 1297, 1333, "OvjU")]) == null ? void 0 : r[n(353, 287, 392, 391, "PJix") + o(708, 503, "PJix", 608)];
  }
}
const xa = _e(void 0);
xa.displayName = "CommonConfigurationContext";
function bs() {
  const i = he(xa);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return qA(I - 509, a);
  }
  function e(g, a, s, c, I) {
    return qA(g - -882, s);
  }
  function A(g, a, s, c, I) {
    return qA(a - -237, c);
  }
  const o = i();
  function r(g, a, s, c, I) {
    return qA(c - -348, a);
  }
  for (; ; )
    try {
      if (-parseInt(A(107, 101, 106, "%Xt[", 101)) / 1 * (parseInt(t(850, "mDQ4", 842, 833, 841)) / 2) + parseInt(r(-13, "gg7b", -27, -24, -26)) / 3 + -parseInt(A(104, 100, 98, "kQ(o", 88)) / 4 + -parseInt(e(-564, -561, "c6K@", -572, -559)) / 5 * (parseInt(t(841, "kQ(o", 847, 834, 837)) / 6) + -parseInt(A(68, 80, 82, "d%zz", 67)) / 7 * (parseInt(r(-20, "ch05", -14, -27, -36)) / 8) + -parseInt(t(850, "22wC", 839, 848, 839)) / 9 * (parseInt(r(-12, "&o8#", -23, -12, -8)) / 10) + parseInt(t(837, "f%wQ", 834, 819, 832)) / 11 * (parseInt(e(-551, -539, "RM)U", -543, -562)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ni, 1 * 117148 + -5 * 238439 + 1935804);
function qA(i, n) {
  const t = ni();
  return qA = function(e, A) {
    e = e - (12637 + -1 * 12321);
    let o = t[e];
    if (qA.BJrxsD === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      qA.nNsgIJ = c, i = arguments, qA.BJrxsD = !0;
    }
    const g = t[2 * 3709 + 482 * -7 + -12 * 337], a = e + g, s = i[a];
    return s ? o = s : (qA.zFjdAs === void 0 && (qA.zFjdAs = !0), o = qA.nNsgIJ(o, A), i[a] = o), o;
  }, qA(i, n);
}
function ni() {
  const i = ["WOqKcLddKCkdlCkfxG", "WRtcUSkwhGq", "W6tdV8ofqsn5tmkYW7TG", "lYzjW4PpoSkMmK0", "jL93wKddP8knEG", "W7ldJmoroKRcLSkqoa", "W67dP8kWdNnrfwxcJG", "cv7dGSosW6BdPqDoWPdcKSokeq", "c8oys8oSWPVcUCksWR4FW47cTCo1", "W6TiwKGbWQiCDW", "aHzND8k+WO7cS8kvzq", "WQ4iWPRdHmkcW50pWRZdSLPHsNO", "iYjbWPqTw8kvbhXKWPzO", "kYNdVvK", "W6b7W7f3WOHfW5fRW6xdUsu", "W6ddU8ooqL5Jw8kIW7vZW5a", "AxCbWQ4fWOjvWOVcSa", "nW4Wn2beW4z1WQWiyMO", "W5ldPJFdVKtdMg5uASoak34Z", "oSoqWPNdJsyVWRpdLmoEW7K", "lsfeWP4Qx8o1d19AWOXruW", "W7FdImkDFG3dTSouj8oUr8o5WRNcQq", "naf9EZ8MW5Pv", "yG83rmoRWPpcQmodWQ8", "W6ddVCodqviSbSkhW7vrW6P+gW"];
  return ni = function() {
    return i;
  }, ni();
}
function SB() {
  const { assetsDirectoryPath: i } = bs(), [n, t] = hA();
  function e(o, r, g, a, s) {
    return qA(s - 429, r);
  }
  eA(() => {
    async function o() {
      const r = new bB(), g = new kB(r);
      function a(s, c, I, x, C) {
        return qA(I - -676, C);
      }
      await g[a(-345, -345, -350, -338, "bDtW")](i), t(g);
    }
    o();
  }, [i]);
  const A = {};
  return A[e(777, "kQ(o", 767, 768, 768) + "le"] = n, A;
}
function ii() {
  var i = ["W7TiW5OeWOJcJJ83m8oHW7RdTYu", "wMXVdaxcLSkSW5exqbibWRa", "AmoObN7dOSorfCoW", "WOlcICo2W6VcG8ozW6JdPq", "W4mqWPWaW7WBW6RcPK1JpH8", "CXnkwCo7", "WRRcNfzvmefzr1JcScGvAq", "WPtdT8kVW4/cHePPrW", "W4KLbSkanY7cQZS", "W7xdQCkwsmoS", "kKjRomoOF8og", "W41QW553WO9TW74", "iWKsWO7dGbrzE8oAo8k9WQlcVa", "deddTN4FWPZdV1q", "i1HdWReBoJNcHmofW6xdNCoW", "W48LyCohqgFcIdGkAx59", "WRJcKMChWPK", "xfa3W4DeW4hdPgLHW4/cSmo9W6C", "WO/cJ8kIWQ7dRmk+W7NdSe3dQ8k1Ca", "W5fcumoFd8o0W7mPW6TuW6FdRa", "W4WTy8ofqgtdOcS6svr0qa", "cdvBWPVcGGyFWQi", "yWfKqtHxsmoWrCkxk8ow", "W7NdSSk1WQNcP8onySo3WPzgW7C7WOL2", "dtucW5/dRwz5W4rlW79oh8oMha"];
  return ii = function() {
    return i;
  }, ii();
}
(function(i, n) {
  function t(s, c, I, x, C) {
    return YA(x - -274, c);
  }
  function e(s, c, I, x, C) {
    return YA(C - 55, c);
  }
  function A(s, c, I, x, C) {
    return YA(x - 736, c);
  }
  function o(s, c, I, x, C) {
    return YA(x - -618, I);
  }
  function r(s, c, I, x, C) {
    return YA(x - -550, c);
  }
  for (var g = i(); ; )
    try {
      var a = parseInt(r(-76, "W)(N", -64, -70, -68)) / 1 + -parseInt(e(556, "WLh]", 541, 554, 548)) / 2 + parseInt(e(549, "W)(N", 541, 532, 542)) / 3 * (parseInt(A(1228, "3AkB", 1224, 1226, 1217)) / 4) + -parseInt(o(-148, -147, "YzS[", -142, -147)) / 5 * (-parseInt(r(-66, ")Da3", -66, -72, -76)) / 6) + parseInt(A(1209, "b6*1", 1223, 1218, 1219)) / 7 + parseInt(t(217, "]Bf6", 232, 221, 229)) / 8 * (parseInt(o(-115, -122, "kuBi", -121, -129)) / 9) + parseInt(t(211, "kuBi", 189, 201, 208)) / 10 * (-parseInt(t(204, "sNbF", 220, 210, 204)) / 11);
      if (a === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(ii, -672819 + -1 * -1361201);
function YA(i, n) {
  var t = ii();
  return YA = function(e, A) {
    e = e - (134 * -35 + -2314 + 7477);
    var o = t[e];
    if (YA.JBybQr === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, y = C.length; m < y; m++)
          E += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var C = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      YA.EXwwlo = g, i = arguments, YA.JBybQr = !0;
    }
    var a = t[-4887 + -3 * -1629], s = e + a, c = i[s];
    return c ? o = c : (YA.qbilNM === void 0 && (YA.qbilNM = !0), o = YA.EXwwlo(o, A), i[s] = o), o;
  }, YA(i, n);
}
function GB({ crosshatch: i }) {
  function n(e, A, o, r, g) {
    return YA(e - 998, r);
  }
  function t(e, A, o, r, g) {
    return YA(e - 849, A);
  }
  return i != null && i[t(1334, "DsFt") + "id"] ? Xt[n(1490, 1482, 1498, "Mkhy") + "r"] : Xt[t(1330, "@CCC")];
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return FA(a - -422, g);
  }
  const e = i();
  function A(g, a, s, c, I) {
    return FA(I - -454, g);
  }
  function o(g, a, s, c, I) {
    return FA(s - -621, c);
  }
  function r(g, a, s, c, I) {
    return FA(I - 279, a);
  }
  for (; ; )
    try {
      if (-parseInt(t("lbo7", 86, 77, 76, 77)) / 1 + -parseInt(o(-82, -113, -96, "A!9P", -107)) / 2 + parseInt(r(793, "c[Np", 796, 790, 798)) / 3 * (-parseInt(r(790, "$4Jm", 774, 783, 779)) / 4) + -parseInt(A("#Q!V", 54, 51, 39, 45)) / 5 * (-parseInt(o(-124, -105, -111, "P9mD", -121)) / 6) + parseInt(r(796, "X8#K", 776, 808, 790)) / 7 * (-parseInt(A("DiQc", 46, 65, 42, 60)) / 8) + parseInt(o(-80, -99, -93, "sUT)", -100)) / 9 + -parseInt(o(-122, -125, -123, "s)7V", -127)) / 10 * (-parseInt(t("#Q!V", 99, 90, 107, 82)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ri, -1 * 198247 + -141158 + 520549);
function FA(i, n) {
  const t = ri();
  return FA = function(e, A) {
    e = e - (502 * -11 + -1620 * -3 + 1158);
    let o = t[e];
    if (FA.ImGEIo === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      FA.fUCkBm = c, i = arguments, FA.ImGEIo = !0;
    }
    const g = t[-9583 + 29 * -313 + 1555 * 12], a = e + g, s = i[a];
    return s ? o = s : (FA.RVNdwr === void 0 && (FA.RVNdwr = !0), o = FA.fUCkBm(o, A), i[a] = o), o;
  }, FA(i, n);
}
function ri() {
  const i = ["WPhcSSkVW67dUxRcLq", "gCoBW5vtxa", "eKaCW53dHmk7WO8EW5P2xhe", "W5mFW4r2xHHOaSoxWPatW7RcNa", "W6xcQZzazmobzmokW7XYrq", "WOrbWRFcS8kCW55VW5XnW5buW4u4", "tmkaW7NdKx7cPxq", "WPJdSCkzW77dIW", "ASkSmmkWBCoWBwZcRXZcPmoO", "s8ocgSoYBNNdQHC7WRy", "qHzkWPNcLa", "FsdcT8oNWPhdSmotwxpdOCkK", "WRJcIhDCDW", "o8o/DCoknW", "WQDyW6ldVuFdPSoInJfiW50", "sSodWOpcPYldTq4Hjc4woJK", "WPddOmoWWPqVW5zg", "qMhdM08uW4/cHCoJymkdbs8t", "eZNcGbbb", "W7aeWQq", "zZ/cPSoEAd4C", "W5zAWReba0Gt", "wW3dSH0", "hCo2FCktmW", "wrZdUqRdOW", "qCoQW7CZWPTRqmodWO/dUrRcVG", "W7/cLmk6W6ddKG", "WODdWR/cTSoMWOKBW6PdW5i", "fZtcNtbm", "WOpcPuTbdW", "WOziW6O8W7qIuW", "yrDGW7ldU2FdKdJdOmkKW4ZdIW", "W6TlW47dNmosdx/cVHJdLM0", "ewLwWOmC", "W4HVaeX8pmobWRysWQbPruy", "WPJcIgO"];
  return ri = function() {
    return i;
  }, ri();
}
function NB({ children: i }) {
  const { bramble: n } = SB();
  function t(a, s, c, I, x) {
    return FA(c - -287, x);
  }
  const e = kA(() => ({ redfin: GB({ crosshatch: n == null ? void 0 : n[o(-43, "X8#K", -46, -47, -32) + o(-20, "kZ&j", -19, -27, -36) + g("(GWp", 1455, 1450, 1465, 1451) + "t"]() }), crosshatch: n == null ? void 0 : n[r(1332, 1314, 1302, "O0Uz") + g("UqpN", 1470, 1463, 1456, 1473) + o(-33, "lWXD", -43, -34, -48) + "t"](), bramble: n, wasLicenseValidated: n == null ? void 0 : n[g("WRSc", 1481, 1473, 1476, 1481) + t(227, 209, 217, 222, "qAFW") + r(1339, 1327, 1318, "L&wp") + g("kZ&j", 1461, 1475, 1479, 1466)]() }), [n]), A = {};
  function o(a, s, c, I, x) {
    return FA(x - -554, s);
  }
  function r(a, s, c, I, x) {
    return FA(s - 807, I);
  }
  A[o(-26, "MEW7", -54, -43, -37)] = e;
  function g(a, s, c, I, x) {
    return FA(x - 950, a);
  }
  return A[t(238, 214, 225, 211, "X8#K") + g("lWXD", 1496, 1463, 1481, 1479)] = i, k(Pn[o(-19, "773W", -43, -17, -27) + t(241, 212, 226, 218, "lbo7")], A);
}
const RB = 18657 + -1 * 16657;
class FB {
  constructor(n) {
    p(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), RB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -1 * -4555 + 54 * 131 + 11229 * -1 && g.status !== -8531 + -1 * -1346 + 1 * 7586 : !0;
  }
}
var _t, Pe, et, Kt, Ro, Fo, vo, Wo;
class vB {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    U(this, _t);
    U(this, Pe);
    U(this, et);
    U(this, Kt);
    U(this, Ro);
    U(this, Fo);
    U(this, vo);
    U(this, Wo);
    v(this, _t, t), v(this, Ro, n), v(this, Wo, e), v(this, Fo, window.location.origin), v(this, vo, "8.0.1");
  }
  async init(n) {
    if (v(this, et, this.shouldCountTransactions(n)), Ia.info("Transaction counting is " + (S(this, et) ? "enabled" : "disabled")), sa()) {
      v(this, Pe, !0), v(this, et, !1);
      return;
    }
    if (!S(this, et)) {
      v(this, Pe, !0);
      return;
    }
    if (v(this, Kt, S(this, _t).transactionCountingToken), !S(this, Kt)) {
      console.warn("Transaction counting token is missing"), v(this, Pe, !1);
      return;
    }
    v(this, Pe, await S(this, _t).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, g;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((g = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : g["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!S(this, et) || !S(this, Pe)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = S(this, Ro), e.id = S(this, Fo), e.version = S(this, vo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = S(this, Wo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + S(this, Kt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return S(this, Pe) || !1;
  }
}
_t = new WeakMap(), Pe = new WeakMap(), et = new WeakMap(), Kt = new WeakMap(), Ro = new WeakMap(), Fo = new WeakMap(), vo = new WeakMap(), Wo = new WeakMap();
function WB(i, n) {
  const { crosshatch: t, bramble: e } = yi(), [A, o] = hA(null);
  eA(() => {
    if (!t) return;
    (async () => {
      const a = new FB(n), s = new vB({ hwids: e.getHwids(), tokenHandler: a, transactionType: i });
      await s.init(t), o(s);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function MB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = WB(t, n), A = kA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(_n.Provider, { value: A, children: i });
}
const Ve = {};
Ve.FACE = "web-capture-face", Ve.DOCUMENT = "web-capture-document", Ve.MAGNIFEYE = "web-capture-magnifeye", Ve.SMILE = "web-capture-smile", Ve.PALM = "web-capture-palm", Ve.EYEGAZE = "web-capture-eyegaze", Ve.MULTIRANGE = "web-capture-multirange";
const LB = Ve;
var $A = function() {
  return $A = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, $A.apply(this, arguments);
};
function $t(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function OB(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var JB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, UB = OB(function(i) {
  return JB.test(i) || i.charCodeAt(-4132 + -1033 * -4) === -5591 * -1 + -2753 * -1 + 1 * -8233 && i.charCodeAt(-8893 + 8894 * 1) === -4225 + 1445 * 3 && i.charCodeAt(5384 + 2449 * 4 + 1 * -15178) < -2 * 2778 + -2739 + 1 * 8386;
});
function YB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Hi, rg;
function PB() {
  return rg || (rg = 73 * -85 + -33 * -163 + 827, Hi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), s = -1055 * -5 + 8995 + -14270; s < r.length; s++) {
      var c = r[s];
      if (!a(c)) return !1;
      var I = n[c], x = t[c];
      if (o = e ? e.call(A, I, x, c) : void 0, o === !1 || o === void 0 && I !== x) return !1;
    }
    return !0;
  }), Hi;
}
var TB = PB();
const HB = /* @__PURE__ */ YB(TB);
var q = "-ms-", yo = "-moz-", T = "-webkit-", ks = "comm", wi = "rule", Ea = "decl", _B = "@import", Ss = "@keyframes", KB = "@layer", Gs = Math.abs, da = String.fromCharCode, vr = Object.assign;
function jB(i, n) {
  return lA(i, -312 * 2 + -6256 + 6880) ^ -4221 + 2 * -2753 + -4886 * -2 ? (((n << -1 * 3757 + 649 * -1 + 4408 ^ lA(i, -6233 * 1 + -2167 * 1 + 8400)) << 633 * -5 + -274 + 3441 ^ lA(i, 5562 + 853 * -1 + 11 * -428)) << -10570 + -1 * -10572 ^ lA(i, 1955 + -279 * 7)) << -974 * 8 + -1809 + 33 * 291 ^ lA(i, -7078 + -140 * -17 + -4701 * -1) : 1 * -4078 + 2 * -2969 + 10016;
}
function Ns(i) {
  return i.trim();
}
function Je(i, n) {
  return (i = n.exec(i)) ? i[-1683 + -99 * -17] : i;
}
function L(i, n, t) {
  return i.replace(n, t);
}
function mn(i, n, t) {
  return i.indexOf(n, t);
}
function lA(i, n) {
  return i.charCodeAt(n) | 10 * -633 + -6012 + 187 * 66;
}
function Ao(i, n, t) {
  return i.slice(n, t);
}
function be(i) {
  return i.length;
}
function Rs(i) {
  return i.length;
}
function fo(i, n) {
  return n.push(i), i;
}
function qB(i, n) {
  return i.map(n).join("");
}
function ag(i, n) {
  return i.filter(function(t) {
    return !Je(t, n);
  });
}
var bi = 5877 + 226 * -26, eo = 203 * 31 + -4869 + -1423, Fs = -3 * 89 + 2417 * 3 + -6984, Be = -8182 + 482 * -17 + 16376, rA = 5 * 1475 + -916 + 2153 * -3, go = "";
function ki(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = bi, a.column = eo, a.length = r, a.return = "", a.siblings = g, a;
}
function Ze(i, n) {
  return vr(ki("", null, null, "", null, null, 7053 + 1 * 5041 + -12094, i.siblings), i, { length: -i.length }, n);
}
function vt(i) {
  for (; i.root; ) i = Ze(i.root, { children: [i] });
  fo(i, i.siblings);
}
function VB() {
  return rA;
}
function ZB() {
  return rA = Be > 0 ? lA(go, --Be) : 0, eo--, rA === 2701 * 1 + -2226 + -1 * 465 && (eo = 15 * 85 + -5795 + 4521, bi--), rA;
}
function ue() {
  return rA = Be < Fs ? lA(go, Be++) : -3135 * 2 + 3105 + 15 * 211, eo++, rA === 1 * 1711 + -4747 + 3046 && (eo = 2431 + -23 * 285 + 4125, bi++), rA;
}
function yt() {
  return lA(go, Be);
}
function yn() {
  return Be;
}
function Si(i, n) {
  return Ao(go, i, n);
}
function Wr(i) {
  switch (i) {
    case 583 * -13 + -2247 * 3 + 14320:
    case 7978 * 1 + -40 * 6 + -7729:
    case -4110 + -19 * -379 + 3081 * -1:
    case 1 * 4697 + -1 * -7983 + -239 * 53:
    case 22 * -132 + -7913 + 10849:
      return -3 * 1619 + -21 * 126 + 7508 * 1;
    case -11 * -17 + 4983 + -5137:
    case -5492 * -1 + -4793 * 1 + -656:
    case -1 * 1181 + 1647 + -422:
    case -44 * 155 + -9778 + 16645 * 1:
    case -373 * 25 + 9525 + -138:
    case 2659 * -1 + -4962 + 7685:
    case 517 + 1157 * 1 + -12 * 129:
    case 74 * -43 + -4095 + 7336:
    case 4224 + -2 * -1399 + 6899 * -1:
    case 9314 + 1 * 8219 + 2 * -8704:
      return -2484 + -100 * -75 + 28 * -179;
    case 58:
      return -13398 + 1489 * 9;
    case 2919 + -5 * 577:
    case -12090 + 3 * 4043:
    case 1419 * 2 + 97 * -74 + -73 * -60:
    case 91:
      return 61 * 83 + 5155 + -8 * 1277;
    case -62 * 103 + -13 * 27 + -1 * -6778:
    case 1659 + -2 * -3242 + -8050:
      return 1 * -9851 + -939 * -4 + 6096;
  }
  return 120 * -30 + -243 * 29 + 169 * 63;
}
function zB(i) {
  return bi = eo = -5996 + -11 * -479 + 2 * 364, Fs = be(go = i), Be = 2 * -4798 + -1894 * 3 + 15278, [];
}
function XB(i) {
  return go = "", i;
}
function _i(i) {
  return Ns(Si(Be - (-1481 * 6 + -8468 + 17355), Mr(i === 5428 + 10 * -98 + -1 * 4357 ? i + (-2 * 3829 + 33 * 22 + 6934) : i === -197 * -49 + -1830 + -7783 ? i + (-1419 * 7 + -5597 + -31 * -501) : i)));
}
function $B(i) {
  for (; (rA = yt()) && rA < -811 * 5 + -1937 + 6025; ) ue();
  return Wr(i) > 3789 + 7913 * 1 + -11700 || Wr(rA) > 61 * -41 + -17 * -526 + 74 * -87 ? "" : " ";
}
function AQ(i, n) {
  for (; --n && ue() && !(rA < 4750 + -116 * -53 + -10850 || rA > -506 * 7 + 149 * 41 + -2465 || rA > 2152 * 4 + 1 * -6989 + -1562 && rA < -9821 + 4 * -1762 + -16934 * -1 || rA > 70 && rA < -247 + 1 * 7071 + -6727); ) ;
  return Si(i, yn() + (n < 2 * -1659 + -2182 * 1 + 5506 && yt() == 32 && ue() == 2411 + -793 * 3));
}
function Mr(i) {
  for (; ue(); ) switch (rA) {
    case i:
      return Be;
    case 12 * -717 + -3558 + 12196:
    case 131 * -19 + 9502 + -6974:
      i !== 243 * -3 + -3081 * 3 + 10006 && i !== 522 + -1 * -407 + -890 && Mr(rA);
      break;
    case -4 * 983 + -3 * 1325 + 9 * 883:
      i === 5515 * 1 + -3260 * -1 + 397 * -22 && Mr(i);
      break;
    case 2 * 1195 + 88 * 19 + 1985 * -2:
      ue();
      break;
  }
  return Be;
}
function eQ(i, n) {
  for (; ue() && i + rA !== -1 * 5799 + -121 * 56 + 1 * 12622 + (-9927 + 1169 * -5 + 7891 * 2); ) if (i + rA === -524 * 16 + -1537 * 2 + 11500 + (-7515 + 9966 * 1 + -33 * 73) && yt() === -620 + -547 * 7 + 4496) break;
  return "/*" + Si(n, Be - (-5020 * 1 + -3137 + 8158)) + "*" + da(i === -4 * 628 + 7551 + 16 * -312 ? i : ue());
}
function tQ(i) {
  for (; !Wr(yt()); ) ue();
  return Si(i, Be);
}
function oQ(i) {
  return XB(Dn("", null, null, null, [""], i = zB(i), 0, [-2851 + 1 * 2851], i));
}
function Dn(i, n, t, e, A, o, r, g, a) {
  for (var s = 0, c = -524 * 15 + -7048 + 14908, I = r, x = 1 * 8611 + 4426 + 1 * -13037, C = 1 * -5421 + -1912 + 7333, E = 28 * 318 + 102 + -9006, d = 1 * -4363 + -29 * 157 + 8917, l = -1 * 3622 + 337 * 17 + -1053 * 2, Q = 1 * -2519 + -12 * -26 + 2208, f = 0, m = "", y = A, G = o, D = e, w = m; l; ) switch (E = f, f = ue()) {
    case -369 * -21 + 2053 + -9762:
      if (E != 153 * -26 + -1 * 5191 + 9277 && lA(w, I - (-1 * 4463 + 1202 * 6 + -2748)) == 58) {
        mn(w += L(_i(f), "&", "&\f"), "&\f", Gs(s ? g[s - (-11 * 465 + -8011 + 13127)] : 0)) != -1 && (Q = -1);
        break;
      }
    case -1 * 6143 + 19 * 317 + 154:
    case 39:
    case 8 * -6 + -1415 * -6 + -8351:
      w += _i(f);
      break;
    case -5276 + 755 * 7:
    case 8522 + 28 * -304:
    case 13:
    case -1 * -3643 + -17 * 542 + 5603:
      w += $B(E);
      break;
    case 1 * 5349 + 126 * 72 + -14329:
      w += AQ(yn() - (-8423 + 2 * 2062 + 4300), -3 * -2551 + 3620 + 1 * -11266);
      continue;
    case 1 * -4868 + -10 * -793 + -3015:
      switch (yt()) {
        case 38 * 29 + -6923 + -13 * -451:
        case 47:
          fo(nQ(eQ(ue(), yn()), n, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (-7740 + 3 * 2621) * d:
      g[s++] = be(w) * Q;
    case 125 * d:
    case 2361 + -217 * 6 + 10 * -100:
    case -9 * 1042 + 1608 + 7770:
      switch (f) {
        case 7998 + -2666 * 3:
        case 3555 + -2879 * 2 + 6 * 388:
          l = -85 * 27 + 16 * -72 + 1149 * 3;
        case 2 * 2113 + -7304 + -1 * -3137 + c:
          Q == -1 && (w = L(w, /\f/g, "")), C > -10858 + -122 * -89 && be(w) - I && fo(C > -8444 + -3 * -31 + -8383 * -1 ? sg(w + ";", e, t, I - (-4483 * 2 + 248 + -1 * -8719), a) : sg(L(w, " ", "") + ";", e, t, I - (-6 * 1073 + -1094 * 5 + -3970 * -3), a), a);
          break;
        case 59:
          w += ";";
        default:
          if (fo(D = gg(w, n, t, s, c, A, g, m, y = [], G = [], I, o), o), f === -2 * -2593 + -3 * -705 + 194 * -37)
            if (c === 2624 * -1 + 2161 * -2 + 6946) Dn(w, n, D, D, y, o, I, g, G);
            else switch (x === -249 * 37 + -5265 + 43 * 339 && lA(w, -7300 + -2 * -668 + 17 * 351) === 4124 + 1338 * -3 ? -5 * -599 + 4075 + -6970 : x) {
              case 203 + 2 * -583 + 1063:
              case -10 * 923 + -8878 + -552 * -33:
              case -8083 + 256 * 32:
              case 131 * 41 + -332 * -3 + 1 * -6252:
                Dn(i, D, D, e && fo(gg(i, D, D, 211 * -5 + 1003 * -2 + 3061, -1325 * -1 + -355 * 13 + -94 * -35, A, g, m, A, y = [], I, G), G), A, G, I, g, e ? y : G);
                break;
              default:
                Dn(w, D, D, D, [""], G, 437 * -13 + -337 * -11 + 2 * 987, g, G);
            }
      }
      s = c = C = 0, d = Q = 7244 + 7243 * -1, m = w = "", I = r;
      break;
    case 58:
      I = -7721 * 1 + 1151 * -5 + 13477 * 1 + be(w), C = E;
    default:
      if (d < -41 * 239 + 3346 + 7 * 922) {
        if (f == -39 * 201 + 179 * -51 + 17091) --d;
        else if (f == -11609 + 1 * 11734 && d++ == 2395 * 4 + 3396 + -12976 && ZB() == -2 * -879 + 240 + -1873) continue;
      }
      switch (w += da(f), f * d) {
        case 5 * 375 + 1325 + 1 * -3162:
          Q = c > 0 ? -4017 + -1 * 8153 + 12171 : (w += "\f", -1);
          break;
        case -1289 + -1 * -1333:
          g[s++] = (be(w) - (-3 * 142 + 9343 * -1 + 1954 * 5)) * Q, Q = 7326 + -1465 * 5;
          break;
        case 8051 + -4 * 1128 + 695 * -5:
          yt() === 6 * -1575 + -4597 * -1 + 4898 && (w += _i(ue())), x = yt(), c = I = be(m = w += tQ(yn())), f++;
          break;
        case -1 * -2411 + -9105 + -6739 * -1:
          E === 893 * 1 + -34 * 159 + 4558 * 1 && be(w) == 1 * -9929 + -9265 + 19196 && (d = 3 * -1237 + 85 * -38 + 6941);
      }
  }
  return o;
}
function gg(i, n, t, e, A, o, r, g, a, s, c, I) {
  for (var x = A - 1, C = A === 0 ? o : [""], E = Rs(C), d = 4218 + -111 * 38, l = 121 * -73 + 3221 + 5612, Q = -7504 + -1 * -5575 + -1 * -1929; d < e; ++d) for (var f = -1 * 809 + -9151 * -1 + -86 * 97, m = Ao(i, x + (9 * 23 + 7 * 667 + -975 * 5), x = Gs(l = r[d])), y = i; f < E; ++f) (y = Ns(l > -51 * -72 + -280 * 20 + -2 * -964 ? C[f] + " " + m : L(m, /&\f/g, C[f]))) && (a[Q++] = y);
  return ki(i, n, t, A === -1991 + -4421 * -1 + -2430 ? wi : g, a, s, c, I);
}
function nQ(i, n, t, e) {
  return ki(i, n, t, ks, da(VB()), Ao(i, 37 * -105 + -5215 + 9102, -2), 1 * -4990 + 1 * 5647 + -657, e);
}
function sg(i, n, t, e, A) {
  return ki(i, n, t, Ea, Ao(i, 14 * -373 + -5734 + 10956, e), Ao(i, e + (-7767 + -1942 * -4), -1), e, A);
}
function vs(i, n, t) {
  switch (jB(i, n)) {
    case 29 * -17 + -1 * -7481 + 1885 * -1:
      return T + "print-" + i + i;
    case 10425 + 8693 * -1 + -9 * -445:
    case 302 * 19 + 6343 + -7880:
    case -2269 + 5446 * 1:
    case -11 * -189 + -2 * 334 + 2022:
    case 1641:
    case 1806 + 653 * -2 + 3957:
    case -1 * 3138 + 6 * -526 + 9215:
    case 5635 + -21 * 3:
    case -5442 + 1 * 11798:
    case 10039 * 1 + 192 * -45 + 4445:
    case 2287 * -2 + -7637 + 15402:
    case -9976 + 1 * 5854 + 10767:
    case 98 * -19 + -8 * -1010 + -3213:
    case 1061 * -8 + 17 * 709 + 2826:
    case 67 * 82 + -787 * 2 + 1959:
    case 9894 + -9372 * -1 + -13643:
    case 12598 + 1 * -6463:
    case -27 * 157 + 1551 * 3 + 4185:
    case 1353 + 1 * 3502:
    case 4215:
    case 221 * -47 + 6 * 1604 + 4 * 1788:
    case -8257 + 59 * -118 + 14 * 1452:
    case 7740 + -475 * 5:
    case -8288 + -1 * -7694 + 6215:
    case 3463 * -2 + -4742 + 15497 * 1:
      return T + i + i;
    case -1693 * -1 + -1 * -523 + -83 * -31:
      return yo + i + i;
    case -2868 + -913 * -9:
    case -3 * -1648 + -8646 + 7948 * 1:
    case 1424 + -1693 * -2:
    case 6968:
    case -1 * 8156 + 269 * -13 + 3 * 4803:
      return T + i + yo + i + q + i + i;
    case -5277 + 11213 * 1:
      switch (lA(i, n + (6450 + 47 * -137))) {
        case 2407 + -1 * 2293:
          return T + i + q + L(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -27 * -109 + -7297 + 2 * 2231:
          return T + i + q + L(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 1346 * 5 + 4876 + -11561:
          return T + i + q + L(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -10818 + -616 * 18 + 4789 * 6:
    case 6493 + -529 * 2 + -1167:
    case -2 * -3098 + -3349 + 2 * 28:
      return T + i + q + i + i;
    case 4 * 2280 + -11129 + 1 * 8174:
      return T + i + q + "flex-" + i + i;
    case -1 * 5251 + -1129 * -5 + 4793:
      return T + i + L(i, /(\w+).+(:[^]+)/, T + "box-$1$2" + q + "flex-$1$2") + i;
    case 5806 + -7 * -101 + -1070:
      return T + i + q + "flex-item-" + L(i, /flex-|-self/g, "") + (Je(i, /flex-|baseline/) ? "" : q + "grid-row-" + L(i, /flex-|-self/g, "")) + i;
    case -7422 + 3251 * -3 + 21850:
      return T + i + q + "flex-line-pack" + L(i, /align-content|flex-|-self/g, "") + i;
    case -2539 * -2 + -1 * -693 + 1 * -223:
      return T + i + q + L(i, "shrink", "negative") + i;
    case -2354 + -3823 * -2:
      return T + i + q + L(i, "basis", "preferred-size") + i;
    case 9806 * -1 + 131 * 81 + -5 * -1051:
      return T + "box-" + L(i, "-grow", "") + T + i + q + L(i, "grow", "positive") + i;
    case 9296 + -88 * -4 + -5094:
      return T + L(i, /([^-])(transform)/g, "$1" + T + "$2") + i;
    case 6187:
      return L(L(L(i, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return L(i, /(image-set\([^]*)/, T + "$1$`$1");
    case -25 * 15 + -93 * 71 + -5973 * -2:
      return L(L(i, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + i + i;
    case 2985 * -3 + 6288 + 6867:
      if (!Je(i, /flex-|baseline/)) return q + "grid-column-align" + Ao(i, n) + i;
      break;
    case -1942 * 4 + 995 * 4 + -319 * -20:
    case -9679 + -27 * -175 + 8314 * 1:
      return q + L(i, "template-", "") + i;
    case 7870 + 4 * -2284 + 25 * 226:
    case 8168 + 33 * -207 + 2279:
      return t && t.some(function(e, A) {
        return n = A, Je(e.props, /grid-\w+-end/);
      }) ? ~mn(i + (t = t[n].value), "span", 131 + -131 * 1) ? i : q + L(i, "-start", "") + i + q + "grid-row-span:" + (~mn(t, "span", 7996 * -1 + 68 * -56 + 908 * 13) ? Je(t, /\d+/) : +Je(t, /\d+/) - +Je(i, /\d+/)) + ";" : q + L(i, "-start", "") + i;
    case -1 * -8881 + -61 * 66 + -1 * -41:
    case -5 * 427 + 2747 * -1 + 9010:
      return t && t.some(function(e) {
        return Je(e.props, /grid-\w+-start/);
      }) ? i : q + L(L(i, "-end", "-span"), "span ", "") + i;
    case -2182 + 19 * -132 + -1757 * -5:
    case -10099 + 2 * 6841:
    case -81 * -113 + 11 * 307 + -8462:
    case 2532:
      return L(i, /(.+)-inline(.+)/, T + "$1$2") + i;
    case -9698 + -1 * -17814:
    case 7115 * 1 + 12004 + -45 * 268:
    case 3577 + -64 * -34:
    case 9921 + 1 * -1898 + -2488:
    case -9 * -429 + 2800 + -1216:
    case -9685 + -49 * -314:
    case 2 * 1042 + 1 * -8253 + -182 * -61:
    case -4399 + 1 * 4426 + -25 * -186:
    case 10240 + 7349 * -1 + 1 * 2642:
    case 1 * 9821 + -2 * -228 + -4488:
    case -9693 * 1 + 5737 * 1 + 8977:
    case 325 + 653 * -1 + 5093:
      if (be(i) - 1 - n > -4319 * 2 + -1 * -1721 + 6923) switch (lA(i, n + (-2 * -2830 + 49 * 64 + 1 * -8795))) {
        case -1 * 6517 + -760 + 7386:
          if (lA(i, n + (-2 * -95 + 7369 + -7555)) !== -8417 + -1 * -8462) break;
        case -4171 * -2 + -9244 + 1004:
          return L(i, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + yo + (lA(i, n + 3) == 3079 + 13 * -431 + 2632 ? "$3" : "$2-$3")) + i;
        case -6 * 914 + -1 * -439 + 20 * 258:
          return ~mn(i, "stretch", -2 * 2973 + 5e3 + 946) ? vs(L(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 2650 + -1 * -2502:
    case 10757 + 5743 * -1 + 906:
      return L(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, s) {
        return q + A + ":" + o + s + (r ? q + A + "-span:" + (g ? a : +a - +o) + s : "") + i;
      });
    case 1 * 555 + -2 * 3407 + 8 * 1401:
      if (lA(i, n + (-1591 + 3389 * 1 + -1792)) === -9640 + -4 * -1906 + 2137) return L(i, ":", ":" + T) + i;
      break;
    case 6444:
      switch (lA(i, lA(i, 6 * 1379 + 1 * 6210 + -14470 * 1) === -4140 + -27 * -155 ? 157 + -4319 * -1 + -4458 : 11)) {
        case -6992 + 11 * -547 + 13129:
          return L(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (lA(i, 14) === 1569 + 7573 * -1 + -23 * -263 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + q + "$2box$3") + i;
        case 8501 * -1 + 8714 + -113:
          return L(i, ":", ":" + q) + i;
      }
      break;
    case 5719:
    case 6358 * 1 + 833 * 10 + -12041:
    case 2135:
    case 9883 * 1 + -114 * 67 + 1682:
    case -443 * -11 + -1172 + 10 * -131:
      return L(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function ai(i, n) {
  for (var t = "", e = 9070 + -633 * 3 + -7171; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function iQ(i, n, t, e) {
  switch (i.type) {
    case KB:
      if (i.children.length) break;
    case _B:
    case Ea:
      return i.return = i.return || i.value;
    case ks:
      return "";
    case Ss:
      return i.return = i.value + "{" + ai(i.children, e) + "}";
    case wi:
      if (!be(i.value = i.props.join(","))) return "";
  }
  return be(t = ai(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function rQ(i) {
  var n = Rs(i);
  return function(t, e, A, o) {
    for (var r = "", g = -6508 + -807 * 1 + 7315; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function aQ(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function gQ(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Ea:
        i.return = vs(i.value, i.length, t);
        return;
      case Ss:
        return ai([Ze(i, { value: L(i.value, "@", "@" + T) })], e);
      case wi:
        if (i.length) return qB(t = i.props, function(A) {
          switch (Je(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              vt(Ze(i, { props: [L(A, /:(read-\w+)/, ":" + yo + "$1")] }));
              var o = {};
              o.props = [A], vt(Ze(i, o)), vr(i, { props: ag(t, e) });
              break;
            case "::placeholder":
              vt(Ze(i, { props: [L(A, /:(plac\w+)/, ":" + T + "input-$1")] })), vt(Ze(i, { props: [L(A, /:(plac\w+)/, ":" + yo + "$1")] })), vt(Ze(i, { props: [L(A, /:(plac\w+)/, q + "input-$1")] }));
              var r = {};
              r.props = [A], vt(Ze(i, r)), vr(i, { props: ag(t, e) });
              break;
          }
          return "";
        });
    }
}
var F = {};
F.animationIterationCount = 1, F.aspectRatio = 1, F.borderImageOutset = 1, F.borderImageSlice = 1, F.borderImageWidth = 1, F.boxFlex = 1, F.boxFlexGroup = 1, F.boxOrdinalGroup = 1, F.columnCount = 1, F.columns = 1, F.flex = 1, F.flexGrow = 1, F.flexPositive = 1, F.flexShrink = 1, F.flexNegative = 1, F.flexOrder = 1, F.gridRow = 1, F.gridRowEnd = 1, F.gridRowSpan = 1, F.gridRowStart = 1, F.gridColumn = 1, F.gridColumnEnd = 1, F.gridColumnSpan = 1, F.gridColumnStart = 1, F.msGridRow = 1, F.msGridRowSpan = 1, F.msGridColumn = 1, F.msGridColumnSpan = 1, F.fontWeight = 1, F.lineHeight = 1, F.opacity = 1, F.order = 1, F.orphans = 1, F.tabSize = 1, F.widows = 1, F.zIndex = 1, F.zoom = 1, F.WebkitLineClamp = 1, F.fillOpacity = 1, F.floodOpacity = 1, F.stopOpacity = 1, F.strokeDasharray = 1, F.strokeDashoffset = 1, F.strokeMiterlimit = 1, F.strokeOpacity = 1, F.strokeWidth = 1;
var sQ = F, P = {}, bt = typeof process < "u" && P !== void 0 && (P.REACT_APP_SC_ATTR || P.SC_ATTR) || "data-styled", Ws = "active", Ms = "data-styled-version", Gi = "6.1.18", la = `/*!sc*/
`, gi = typeof window < "u" && typeof document < "u", IQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== "" ? P.REACT_APP_SC_DISABLE_SPEEDY !== "false" && P.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.SC_DISABLE_SPEEDY !== void 0 && P.SC_DISABLE_SPEEDY !== "" ? P.SC_DISABLE_SPEEDY !== "false" && P.SC_DISABLE_SPEEDY : P.NODE_ENV !== "production"), Ig = /invalid hook call/i, nn = /* @__PURE__ */ new Set(), cQ = function(i, n) {
  if (P.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = -6 * 588 + -7 * 1037 + 3 * 3596; a < arguments.length; a++) g[a - (2750 + 7501 * -1 + 4752)] = arguments[a];
        Ig.test(r) ? (o = !1, nn.delete(e)) : A.apply(void (4 * -908 + -1033 * 3 + 6731), $t([r], g, !1));
      }, Ae(), o && !nn.has(e) && (console.warn(e), nn.add(e));
    } catch (r) {
      Ig.test(r.message) && nn.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Ni = Object.freeze([]), to = Object.freeze({});
function CQ(i, n, t) {
  return t === void 0 && (t = to), i.theme !== t.theme && i.theme || n || t.theme;
}
var Lr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), BQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, QQ = /(^-|-$)/g;
function cg(i) {
  return i.replace(BQ, "-").replace(QQ, "");
}
var xQ = /(a)(d)/gi, rn = -2247 * -1 + -7336 * 1 + 53 * 97, Cg = function(i) {
  return String.fromCharCode(i + (i > 3207 * -1 + -1018 * 9 + 12394 ? 334 * 5 + 8173 + 228 * -43 : 97));
};
function Or(i) {
  var n, t = "";
  for (n = Math.abs(i); n > rn; n = n / rn | -346 * 25 + -2 * 2849 + -844 * -17) t = Cg(n % rn) + t;
  return (Cg(n % rn) + t).replace(xQ, "$1-$2");
}
var Ki, Ls = -449 * 7 + 439 * 19 + 183, xt = function(i, n) {
  for (var t = n.length; t; ) i = (7 * 427 + -8279 + 5323 * 1) * i ^ n.charCodeAt(--t);
  return i;
}, Os = function(i) {
  return xt(Ls, i);
};
function EQ(i) {
  return Or(Os(i) >>> 5884 + 4 * -1471);
}
function Js(i) {
  return P.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function ji(i) {
  return typeof i == "string" && (P.NODE_ENV === "production" || i.charAt(9142 + -293 * -19 + -14709) === i.charAt(-7031 + -79 * -89).toLowerCase());
}
var Ce = {};
Ce.childContextTypes = !0, Ce.contextType = !0, Ce.contextTypes = !0, Ce.defaultProps = !0, Ce.displayName = !0, Ce.getDefaultProps = !0, Ce.getDerivedStateFromError = !0, Ce.getDerivedStateFromProps = !0, Ce.mixins = !0, Ce.propTypes = !0, Ce.type = !0;
var ze = {};
ze.name = !0, ze.length = !0, ze.prototype = !0, ze.caller = !0, ze.callee = !0, ze.arguments = !0, ze.arity = !0;
var Bt = {};
Bt.$$typeof = !0, Bt.compare = !0, Bt.defaultProps = !0, Bt.displayName = !0, Bt.propTypes = !0, Bt.type = !0;
var Jt = {};
Jt.$$typeof = !0, Jt.render = !0, Jt.defaultProps = !0, Jt.displayName = !0, Jt.propTypes = !0;
var Us = typeof Symbol == "function" && Symbol.for, Ys = Us ? Symbol.for("react.memo") : 104269 + -8 * -1283 + -54418, dQ = Us ? Symbol.for("react.forward_ref") : -78599 + 98115 * 1 + 10149 * 4, lQ = Ce, uQ = ze, Ps = Bt, fQ = ((Ki = {})[dQ] = Jt, Ki[Ys] = Ps, Ki);
function Bg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Ys ? Ps : "$$typeof" in i ? fQ[i.$$typeof] : lQ;
  var n;
}
var hQ = Object.defineProperty, pQ = Object.getOwnPropertyNames, Qg = Object.getOwnPropertySymbols, mQ = Object.getOwnPropertyDescriptor, yQ = Object.getPrototypeOf, xg = Object.prototype;
function Ts(i, n, t) {
  if (typeof n != "string") {
    if (xg) {
      var e = yQ(n);
      e && e !== xg && Ts(i, e, t);
    }
    var A = pQ(n);
    Qg && (A = A.concat(Qg(n)));
    for (var o = Bg(i), r = Bg(n), g = -1166 + -13 * -148 + -758; g < A.length; ++g) {
      var a = A[g];
      if (!(a in uQ || t && t[a] || r && a in r || o && a in o)) {
        var s = mQ(n, a);
        try {
          hQ(i, a, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function oo(i) {
  return typeof i == "function";
}
function ua(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function dt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Eg(i, n) {
  if (-3 * 3031 + -8200 + 1 * 17293 === i.length) return "";
  for (var t = i[-15859 + -15859 * -1], e = 7030 + 2386 * 2 + 1 * -11801; e < i.length; e++) t += i[e];
  return t;
}
function no(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Jr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !no(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -6653 + -1567 * 1 + 8220; e < n.length; e++) i[e] = Jr(i[e], n[e]);
  else if (no(n))
    for (var e in n) i[e] = Jr(i[e], n[e]);
  return i;
}
function fa(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var cA = {};
cA[1] = `Cannot create styled-component for component: %s.

`, cA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, cA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, cA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, cA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, cA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, cA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', cA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, cA[9] = "Missing document `<head>`\n\n", cA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, cA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, cA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", cA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, cA[14] = `ThemeProvider: "theme" prop is required.

`, cA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", cA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, cA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, cA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var DQ = P.NODE_ENV !== "production" ? cA : {};
function wQ() {
  for (var i = [], n = -347 * 1 + 118 * -43 + 3 * 1807; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-3290 + 10 * 329], e = [], A = 34 * 118 + 9675 + -13686, o = i.length; A < o; A += 9635 + 5 * -1349 + 1 * -2889) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function so(i) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - (7405 * -1 + 5739 + 1667)] = arguments[t];
  return P.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -323 + 4872 * 2 + 1 * -9421 ? " Args: ".concat(n.join(", ")) : "")) : new Error(wQ.apply(void 0, $t([DQ[i]], n, !1)).trim());
}
var bQ = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-4 * 233 + -9858 + -11302 * -1), this.length = -2347 * 4 + 6953 + 2947 * 1, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 2026 * -2 + 9262 + 2605 * -2, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -7 * -743 + -7868 + 2668) < 3207 * 2 + -3485 + -2929) throw so(59 * 82 + 5452 + 1 * -10274, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 4599 + 757 * 1 + -5356;
    }
    for (var g = this.indexOfGroup(n + (1 * 3092 + 8544 + -2327 * 5)), a = (r = 0, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 6774 + 3387 * -2;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -17 * 383 + 1 * -1569 + 2020 * 4 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(la);
    return t;
  }, i;
}(), kQ = 1 << -632 * -4 + 126 * 10 + 1 * -3758, wn = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new Map(), bn = 4380 + -4368 * -2 + -13115, an = function(i) {
  if (wn.has(i)) return wn.get(i);
  for (; si.has(bn); ) bn++;
  var n = bn++;
  if (P.NODE_ENV !== "production" && ((-6365 + -2947 * -2 + 471 | n) < 1 * 6131 + -2 * -1349 + 81 * -109 || n > kQ)) throw so(-1 * 9967 + -1 * 7743 + 8863 * 2, "".concat(n));
  return wn.set(i, n), si.set(n, i), n;
}, SQ = function(i, n) {
  bn = n + (-13 * 56 + -479 * 1 + 1 * 1208), wn.set(i, n), si.set(n, i);
}, GQ = "style[".concat(bt, "][").concat(Ms, '="').concat(Gi, '"]'), NQ = new RegExp("^".concat(bt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), RQ = function(i, n, t) {
  for (var e, A = t.split(","), o = 1 * -5272 + -3175 * 1 + -8447 * -1, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, FQ = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(la), A = [], o = 0, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(NQ);
      if (a) {
        var s = 0 | parseInt(a[1], 10), c = a[5963 + -5961 * 1];
        871 + -429 * -11 + -5 * 1118 !== s && (SQ(c, s), RQ(i, c, a[11 * 582 + -1958 + -4441]), i.getTag().insertRules(s, A)), A.length = -8434 + -31 * 131 + 12495;
      } else A.push(g);
    }
  }
}, dg = function(i) {
  for (var n = document.querySelectorAll(GQ), t = 2024 + -5 * 1680 + 6376, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(bt) !== Ws && (FQ(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function vQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hs = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(bt, "]")));
    return a[a.length - (-1106 * -6 + -9107 + 2472)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(bt, Ws), e.setAttribute(Ms, Gi);
  var r = vQ();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, WQ = function() {
  function i(n) {
    this.element = Hs(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw so(3650 + -138 * -7 + -73 * 63);
    }(this.element), this.length = -3795 + 3 * -3268 + 1511 * 9;
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
}(), MQ = function() {
  function i(n) {
    this.element = Hs(n), this.nodes = this.element.childNodes, this.length = -6434 * 1 + 73 * 35 + 3879;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 5194 + 15 * -353 + 1 * 101) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), LQ = function() {
  function i(n) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -9637 + -3114 * -2 + -3409 * -1, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -8253 + 158 * -61 + 17892), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), lg = gi, OQ = { isServer: !gi, useCSSOMInjection: !IQ }, _s = function() {
  function i(n, t, e) {
    n === void 0 && (n = to), t === void 0 && (t = {});
    var A = this;
    this.options = $A($A({}, OQ), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && gi && lg && (lg = !1, dg(this)), fa(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", s = function(I) {
          var x = function(Q) {
            return si.get(Q);
          }(I);
          if (x === void 0) return "continue";
          var C = o.names.get(x), E = r.getGroup(I);
          if (C === void 0 || !C.size || -2240 + -448 * -5 === E.length) return "continue";
          var d = "".concat(bt, ".g").concat(I, '[id="').concat(x, '"]'), l = "";
          C !== void 0 && C.forEach(function(Q) {
            Q.length > -5630 * -1 + -10 * -61 + -48 * 130 && (l += "".concat(Q, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(l, '"}').concat(la);
        }, c = 1965 + -1 * 1119 + -846; c < g; c++) s(c);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return an(n);
  }, i.prototype.rehydrate = function() {
    !this.server && gi && dg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i($A($A({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -6727 + -595 * 12 + 13867) + 1;
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new LQ(A) : e ? new WQ(A) : new MQ(A);
    }(this.options), new bQ(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (an(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(an(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(an(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), JQ = /&/g, UQ = /^\s*\/\/.*$/gm;
function Ks(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ks(t.children, n)), t;
  });
}
function js(i) {
  var n, t, e, A = i === void 0 ? to : i, o = A.options, r = o === void 0 ? to : o, g = A.plugins, a = g === void 0 ? Ni : g, s = function(x, C, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -9661 * 1 + -141 * -4 + 9097 ? ".".concat(n) : x;
  }, c = a.slice();
  c.push(function(x) {
    x.type === wi && x.value.includes("&") && (x.props[298 * -7 + -44 + 710 * 3] = x.props[2 * -4484 + -36 * 162 + 14800].replace(JQ, t).replace(e, s));
  }), r.prefix && c.push(gQ), c.push(iQ);
  var I = function(x, C, E, d) {
    C === void 0 && (C = ""), E === void 0 && (E = ""), d === void 0 && (d = "&"), n = d, t = C, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = x.replace(UQ, ""), Q = oQ(E || C ? "".concat(E, " ").concat(C, " { ").concat(l, " }") : l);
    r.namespace && (Q = Ks(Q, r.namespace));
    var f = [];
    return ai(Q, rQ(c.concat(aQ(function(m) {
      return f.push(m);
    })))), f;
  };
  return I.hash = a.length ? a.reduce(function(x, C) {
    return C.name || so(1893 + 678 * -5 + -378 * -4), xt(x, C.name);
  }, Ls).toString() : "", I;
}
var YQ = new _s(), Ur = js(), ha = wt.createContext({ shouldForwardProp: void 0, styleSheet: YQ, stylis: Ur });
ha.Consumer;
var PQ = wt.createContext(void 0);
function Yr() {
  return he(ha);
}
function TQ(i) {
  var n = hA(i.stylisPlugins), t = n[-2040 + -1020 * -2], e = n[1850 + -2755 * -2 + 1 * -7359], A = Yr().styleSheet, o = kA(function() {
    var c = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? c = i.sheet : i.target && (c = c.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (c = c.reconstructWithOptions(I)), c;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = kA(function() {
    var c = {};
    c.namespace = i.namespace, c.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = c, I.plugins = t, js(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  eA(function() {
    HB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = kA(function() {
    var c = {};
    return c.shouldForwardProp = i.shouldForwardProp, c.styleSheet = o, c.stylis = r, c;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var s = {};
  return s.value = r, wt.createElement(ha.Provider, a, wt.createElement(PQ.Provider, s, i.children));
}
var ug = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Ur);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, fa(this, function() {
      throw so(862 * -4 + 434 * 22 + -6088, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Ur), this.name + n.hash;
  }, i;
}(), HQ = function(i) {
  return i >= "A" && i <= "Z";
};
function fg(i) {
  for (var n = "", t = 1 * 7829 + 6262 + -33 * 427; t < i.length; t++) {
    var e = i[t];
    if (8 * 263 + -5132 + 1 * 3029 === t && e === "-" && i[-38 * -221 + 436 * 10 + -12758] === "-") return i;
    HQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var qs = function(i) {
  return i == null || i === !1 || i === "";
}, Vs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !qs(o) && (Array.isArray(o) && o.isCss || oo(o) ? e.push("".concat(fg(A), ":"), o, ";") : no(o) ? e.push.apply(e, $t($t(["".concat(A, " {")], Vs(o), !1), ["}"], !1)) : e.push("".concat(fg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2610 + -1435 * -1 + -4045 === t || n in sQ || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Dt(i, n, t, e) {
  if (qs(i)) return [];
  if (ua(i)) return [".".concat(i.styledComponentId)];
  if (oo(i)) {
    if (!oo(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return P.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof ug || no(A) || A === null || console.error("".concat(Js(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Dt(A, n, t, e);
  }
  var o;
  return i instanceof ug ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : no(i) ? Vs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Ni, i.map(function(r) {
    return Dt(r, n, t, e);
  })) : [i.toString()];
}
function _Q(i) {
  for (var n = -4 * -701 + -2 * -2818 + -8440; n < i.length; n += 1383 * -1 + 9237 * 1 + -7853) {
    var t = i[n];
    if (oo(t) && !ua(t)) return !1;
  }
  return !0;
}
var KQ = Os(Gi), jQ = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = P.NODE_ENV === "production" && (e === void 0 || e.isStatic) && _Q(n), this.componentId = t, this.baseHash = xt(KQ, t), this.baseStyle = e, _s.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = dt(A, this.staticRulesId);
      else {
        var o = Eg(Dt(this.rules, n, t, e)), r = Or(xt(this.baseHash, o) >>> -146 * -34 + -4 * -1054 + 17 * -540);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = dt(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = xt(this.baseHash, e.hash), s = "", c = 0; c < this.rules.length; c++) {
        var I = this.rules[c];
        if (typeof I == "string") s += I, P.NODE_ENV !== "production" && (a = xt(a, I));
        else if (I) {
          var x = Eg(Dt(I, n, t, e));
          a = xt(a, x + c), s += x;
        }
      }
      if (s) {
        var C = Or(a >>> 0);
        t.hasNameForId(this.componentId, C) || t.insertRules(this.componentId, C, e(s, ".".concat(C), void 0, this.componentId)), A = dt(A, C);
      }
    }
    return A;
  }, i;
}(), Zs = wt.createContext(void 0);
Zs.Consumer;
var qi = {}, hg = /* @__PURE__ */ new Set();
function qQ(i, n, t) {
  var e = ua(i), A = i, o = !ji(i), r = n.attrs, g = r === void 0 ? Ni : r, a = n.componentId, s = a === void 0 ? function(G, D) {
    var w = typeof G != "string" ? "sc" : cg(G);
    qi[w] = (qi[w] || 15436 + -3859 * 4) + (-11283 + -182 * -62);
    var W = "".concat(w, "-").concat(EQ(Gi + w + qi[w]));
    return D ? "".concat(D, "-").concat(W) : W;
  }(n.displayName, n.parentComponentId) : a, c = n.displayName, I = c === void 0 ? function(G) {
    return ji(G) ? "styled.".concat(G) : "Styled(".concat(Js(G), ")");
  }(i) : c, x = n.displayName && n.componentId ? "".concat(cg(n.displayName), "-").concat(n.componentId) : n.componentId || s, C = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, E = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      E = function(G, D) {
        return d(G, D) && l(G, D);
      };
    } else E = d;
  }
  var Q = new jQ(t, x, e ? A.componentStyle : void 0);
  function f(G, D) {
    return function(w, W, J) {
      var Y = w.attrs, z = w.componentStyle, K = w.defaultProps, gA = w.foldedComponentIds, oA = w.styledComponentId, ae = w.target, ee = wt.useContext(Zs), rt = Yr(), Io = w.shouldForwardProp || rt.shouldForwardProp;
      P.NODE_ENV !== "production" && Un(oA);
      var ge = CQ(W, ee, K) || to, sA = function(Xo, co, $o) {
        var Nt = {};
        Nt.className = void 0, Nt.theme = $o;
        for (var vi, at = $A($A({}, co), Nt), Wi = 3470 + 10 * -347; Wi < Xo.length; Wi += 12 * -382 + 3237 + 1348) {
          var An = oo(vi = Xo[Wi]) ? vi(at) : vi;
          for (var Ke in An) at[Ke] = Ke === "className" ? dt(at[Ke], An[Ke]) : Ke === "style" ? $A($A({}, at[Ke]), An[Ke]) : An[Ke];
        }
        return co.className && (at.className = dt(at.className, co.className)), at;
      }(Y, W, ge), se = sA.as || ae, _A = {};
      for (var IA in sA) sA[IA] === void 0 || IA[-7913 + -41 * -193] === "$" || IA === "as" || IA === "theme" && sA.theme === ge || (IA === "forwardedAs" ? _A.as = sA.forwardedAs : Io && !Io(IA, se) || (_A[IA] = sA[IA], Io || P.NODE_ENV !== "development" || UB(IA) || hg.has(IA) || !Lr.has(se) || (hg.add(IA), console.warn('styled-components: it looks like an unknown prop "'.concat(IA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ri = function(Xo, co) {
        var $o = Yr(), Nt = Xo.generateAndInjectStyles(co, $o.styleSheet, $o.stylis);
        return P.NODE_ENV !== "production" && Un(Nt), Nt;
      }(z, sA);
      P.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ri);
      var Fi = dt(gA, oA);
      return Ri && (Fi += " " + Ri), sA.className && (Fi += " " + sA.className), _A[ji(se) && !Lr.has(se) ? "class" : "className"] = Fi, J && (_A.ref = J), PA(se, _A);
    }(m, G, D);
  }
  f.displayName = I;
  var m = wt.forwardRef(f), y = {};
  return y.attrs = !0, y.componentStyle = !0, y.displayName = !0, y.foldedComponentIds = !0, y.shouldForwardProp = !0, y.styledComponentId = !0, y.target = !0, m.attrs = C, m.componentStyle = Q, m.displayName = I, m.shouldForwardProp = E, m.foldedComponentIds = e ? dt(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = e ? function(D) {
      for (var w = [], W = 927 * 1 + -8747 + -869 * -9; W < arguments.length; W++) w[W - (-143 * 26 + -87 * -101 + 724 * -7)] = arguments[W];
      for (var J = 0, Y = w; J < Y.length; J++) Jr(D, Y[J], !0);
      return D;
    }({}, A.defaultProps, G) : G;
  } }), P.NODE_ENV !== "production" && (cQ(I, x), m.warnTooManyClasses = /* @__PURE__ */ function(G, D) {
    var w = {}, W = !1;
    return function(J) {
      if (!W && (w[J] = !0, Object.keys(w).length >= 7812 + -1903 * 4)) {
        var Y = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(3739 + -3539 * 1, " classes were generated for component ").concat(G).concat(Y, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), W = !0, w = {};
      }
    };
  }(I, x)), fa(m, function() {
    return ".".concat(m.styledComponentId);
  }), o && Ts(m, i, y), m;
}
function pg(i, n) {
  for (var t = [i[-5591 + -9 * 305 + -2084 * -4]], e = -4 * -1877 + -1 * -5093 + -12601, A = n.length; e < A; e += 1) t.push(n[e], i[e + (-1317 + 809 * -10 + 672 * 14)]);
  return t;
}
var mg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function VQ(i) {
  for (var n = [], t = -2446 + -1299 * 7 + 11540; t < arguments.length; t++) n[t - (-13766 + -1059 * -13)] = arguments[t];
  if (oo(i) || no(i)) return mg(Dt(pg(Ni, $t([i], n, !0))));
  var e = i;
  return 2469 + 1 * -2469 === n.length && 4733 + -2 * 2366 === e.length && typeof e[-792 + 38 * 239 + 4145 * -2] == "string" ? Dt(e) : mg(Dt(pg(e, n)));
}
function Pr(i, n, t) {
  if (t === void 0 && (t = to), !n) throw so(5339 + 9 * -939 + 3113, n);
  var e = function(A) {
    for (var o = [], r = 6265 * 1 + 125 * -16 + 52 * -82; r < arguments.length; r++) o[r - (-2664 + 1 * 2665)] = arguments[r];
    return i(n, t, VQ.apply(void 0, $t([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Pr(i, n, $A($A({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Pr(i, n, $A($A({}, t), A));
  }, e;
}
var zs = function(i) {
  return Pr(qQ, i);
}, Zo = zs;
Lr.forEach(function(i) {
  Zo[i] = zs(i);
});
P.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var gn = "__sc-".concat(bt, "__");
P.NODE_ENV !== "production" && P.NODE_ENV !== "test" && typeof window < "u" && (window[gn] || (window[gn] = 0), -2396 * 2 + -391 * 11 + 9094 === window[gn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[gn] += 7 * -1347 + -2474 * 4 + 19326);
var Me;
function Xs(i) {
  const n = {};
  return n.lang = Me == null ? void 0 : Me.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = Me == null ? void 0 : Me.abortEarly, n.abortPipeEarly = Me == null ? void 0 : Me["abortPipeEarly"], n;
}
var Vi;
function ZQ(i) {
  return Vi == null ? void 0 : Vi.get(i);
}
var Zi;
function zQ(i) {
  return Zi == null ? void 0 : Zi.get(i);
}
var zi;
function XQ(i, n) {
  var t;
  return (t = zi == null ? void 0 : zi.get(i)) == null ? void 0 : t.get(n);
}
function $s(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function io(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, g = (A == null ? void 0 : A.received) ?? $s(o), a = {};
  a.kind = i.kind, a.type = i.type, a.input = o, a.expected = r, a.received = g, a.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + g, a.requirement = i.requirement, a.path = A == null ? void 0 : A.path, a.issues = A == null ? void 0 : A.issues, a.lang = e.lang, a.abortEarly = e.abortEarly, a.abortPipeEarly = e.abortPipeEarly;
  const s = a, c = i.kind === "schema", I = (A == null ? void 0 : A.message) ?? i.message ?? XQ(i.reference, s.lang) ?? (c ? zQ(s.lang) : null) ?? e.message ?? ZQ(s.lang);
  I !== void 0 && (s.message = typeof I == "function" ? I(s) : I), c && (t.typed = !1), t.issues ? t.issues.push(s) : t.issues = [s];
}
function zo(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, Xs());
  } };
}
function $Q(i, n) {
  const t = [...new Set(i)];
  return t.length > -7571 * -1 + 7012 + -14582 * 1 ? "(" + t.join(" " + n + " ") + ")" : t[1 * 5732 + -1832 * -5 + -14892] ?? "never";
}
var Ax = class extends Error {
  constructor(i) {
    super(i[-7025 + 282 * -28 + 14921].message), this.name = "ValiError", this.issues = i;
  }
};
function AI(i, n) {
  return { kind: "validation", type: "min_length", reference: AI, async: !1, expects: ">=" + i, requirement: i, message: n, "~run"(t, e) {
    return t.typed && t.value.length < this.requirement && io(this, "length", t, e, { received: "" + t.value.length }), t;
  } };
}
function ex(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
function tx(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
function eI(i, n) {
  return { kind: "schema", type: "array", reference: eI, expects: "Array", async: !1, item: i, message: n, get "~standard"() {
    return zo(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (Array.isArray(A)) {
      t.typed = !0, t.value = [];
      for (let r = 3288 + -99 * -61 + 1 * -9327; r < A.length; r++) {
        const g = A[r], a = {};
        a.value = g;
        const s = this.item["~run"](a, e);
        if (s.issues) {
          const c = {};
          c.type = "array", c.origin = "value", c.input = A, c.key = r, c.value = g;
          const I = c;
          for (const x of s.issues)
            x.path ? x.path.unshift(I) : x.path = [I], (o = t.issues) == null || o.push(x);
          if (!t.issues && (t.issues = s.issues), e.abortEarly) {
            t.typed = !1;
            break;
          }
        }
        !s.typed && (t.typed = !1), t.value.push(s.value);
      }
    } else io(this, "type", t, e);
    return t;
  } };
}
function Tr(i) {
  return { kind: "schema", type: "function", reference: Tr, expects: "Function", async: !1, message: i, get "~standard"() {
    return zo(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : io(this, "type", n, t), n;
  } };
}
function tI(i, n) {
  return { kind: "schema", type: "object", reference: tI, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return zo(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (A && typeof A == "object") {
      t.typed = !0, t.value = {};
      for (const r in this.entries) {
        const g = this.entries[r];
        if (r in A || (g.type === "exact_optional" || g.type === "optional" || g.type === "nullish") && g.default !== void 0) {
          const a = r in A ? A[r] : tx(g), s = {};
          s.value = a;
          const c = g["~run"](s, e);
          if (c.issues) {
            const I = {};
            I.type = "object", I.origin = "value", I.input = A, I.key = r, I.value = a;
            const x = I;
            for (const C of c.issues)
              C.path ? C.path.unshift(x) : C.path = [x], (o = t.issues) == null || o.push(C);
            if (!t.issues && (t.issues = c.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !c.typed && (t.typed = !1), t.value[r] = c.value;
        } else if (g.fallback !== void 0) t.value[r] = ex(g);
        else if (g.type !== "exact_optional" && g.type !== "optional" && g.type !== "nullish") {
          const a = {};
          if (a.input = void 0, a.expected = '"' + r + '"', a.path = [{ type: "object", origin: "key", input: A, key: r, value: A[r] }], io(this, "key", t, e, a), e.abortEarly) break;
        }
      }
    } else io(this, "type", t, e);
    return t;
  } };
}
function oI(i, n) {
  return { kind: "schema", type: "picklist", reference: oI, expects: $Q(i.map($s), "|"), async: !1, options: i, message: n, get "~standard"() {
    return zo(this);
  }, "~run"(t, e) {
    return this.options.includes(t.value) ? t.typed = !0 : io(this, "type", t, e), t;
  } };
}
function ox(i, n, t) {
  const e = {};
  e.value = n;
  const A = i["~run"](e, Xs(t));
  if (A.issues) throw new Ax(A.issues);
  return A.value;
}
function nx(...i) {
  return { ...i[-1 * -1005 + -3948 + 2943], pipe: i, get "~standard"() {
    return zo(this);
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
function ix(i, n) {
  try {
    ox(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: MC(i.assetsDirectoryPath)
  };
}
function rx({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = kA(() => ix(n, t), [n, t]);
  return /* @__PURE__ */ k(xa.Provider, { value: e, children: i });
}
function ax({
  children: i,
  configuration: n
}) {
  const t = Object.values(re), e = tI({
    challengeSequence: nx(
      eI(
        oI(t, "Challenge sequence must be an array of valid challenge items")
      ),
      AI(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: Tr("On complete must be a function"),
    onError: Tr("On error must be a function")
  });
  return /* @__PURE__ */ k(rx, { configuration: n, validationSchema: e, children: i });
}
const Ii = _e(void 0);
Ii.displayName = "ControllerContext";
function nI() {
  const i = he(
    Ii
  );
  if (i === void 0)
    throw new Error(`${Ii.displayName} must be used within a ControllerProvider`);
  return i;
}
function gx({ children: i, controller: n }) {
  const t = kA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ k(Ii.Provider, { value: t, children: i });
}
const Hr = {};
Hr.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", Hr.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const _ = Hr, _r = {};
_r.ON_COMPLETE = "multi-range-auto-capture:on-complete", _r.DEV = "multi-range-auto-capture:dev";
const iI = _r, sx = { ...iI, ...Ne }, Ix = sx;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const rI = Symbol("Comlink.proxy"), cx = Symbol("Comlink.endpoint"), aI = Symbol("Comlink.releaseProxy"), Xi = Symbol("Comlink.finalizer"), kn = Symbol("Comlink.thrown"), gI = (i) => typeof i == "object" && i !== null || typeof i == "function", Cx = {
  canHandle: (i) => gI(i) && i[rI],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return II(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), CI(i);
  }
}, Bx = {
  canHandle: (i) => gI(i) && kn in i,
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
}, sI = /* @__PURE__ */ new Map([
  ["proxy", Cx],
  ["throw", Bx]
]);
function Qx(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function II(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Qx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(Et);
    let s;
    try {
      const c = g.slice(0, -1).reduce((x, C) => x[C], i), I = g.reduce((x, C) => x[C], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          c[g.slice(-1)[0]] = Et(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const x = new I(...a);
            s = fx(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: C } = new MessageChannel();
            II(i, C), s = ux(x, [x]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      s = { value: c, [kn]: 0 };
    }
    Promise.resolve(s).catch((c) => ({ value: c, [kn]: 0 })).then((c) => {
      const [I, x] = Bi(c);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), x), r === "RELEASE" && (n.removeEventListener("message", e), cI(n), Xi in i && typeof i[Xi] == "function" && i[Xi]());
    }).catch((c) => {
      const [I, x] = Bi({
        value: new TypeError("Unserializable return value"),
        [kn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), x);
    });
  }), n.start && n.start();
}
function xx(i) {
  return i.constructor.name === "MessagePort";
}
function cI(i) {
  xx(i) && i.close();
}
function CI(i, n) {
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
function sn(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function BI(i) {
  return Ut(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    cI(i);
  });
}
const ci = /* @__PURE__ */ new WeakMap(), Ci = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (ci.get(i) || 0) - 1;
  ci.set(i, n), n === 0 && BI(i);
});
function Ex(i, n) {
  const t = (ci.get(n) || 0) + 1;
  ci.set(n, t), Ci && Ci.register(i, n, i);
}
function dx(i) {
  Ci && Ci.unregister(i);
}
function Kr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (sn(A), g === aI)
        return () => {
          dx(o), BI(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = Ut(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(Et);
        return a.then.bind(a);
      }
      return Kr(i, n, [...t, g]);
    },
    set(r, g, a) {
      sn(A);
      const [s, c] = Bi(a);
      return Ut(i, n, {
        type: "SET",
        path: [...t, g].map((I) => I.toString()),
        value: s
      }, c).then(Et);
    },
    apply(r, g, a) {
      sn(A);
      const s = t[t.length - 1];
      if (s === cx)
        return Ut(i, n, {
          type: "ENDPOINT"
        }).then(Et);
      if (s === "bind")
        return Kr(i, n, t.slice(0, -1));
      const [c, I] = yg(a);
      return Ut(i, n, {
        type: "APPLY",
        path: t.map((x) => x.toString()),
        argumentList: c
      }, I).then(Et);
    },
    construct(r, g) {
      sn(A);
      const [a, s] = yg(g);
      return Ut(i, n, {
        type: "CONSTRUCT",
        path: t.map((c) => c.toString()),
        argumentList: a
      }, s).then(Et);
    }
  });
  return Ex(o, i), o;
}
function lx(i) {
  return Array.prototype.concat.apply([], i);
}
function yg(i) {
  const n = i.map(Bi);
  return [n.map((t) => t[0]), lx(n.map((t) => t[1]))];
}
const QI = /* @__PURE__ */ new WeakMap();
function ux(i, n) {
  return QI.set(i, n), i;
}
function fx(i) {
  return Object.assign(i, { [rI]: !0 });
}
function Bi(i) {
  for (const [n, t] of sI)
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
    QI.get(i) || []
  ];
}
function Et(i) {
  switch (i.type) {
    case "HANDLER":
      return sI.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Ut(i, n, t, e) {
  return new Promise((A) => {
    const o = hx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function hx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function xI() {
  return bs();
}
const pa = _e(void 0);
pa.displayName = "CommonThresholdsContext";
function px() {
  const i = he(pa);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function EI() {
  return px();
}
class mx {
  constructor(n, t, e, A, o, r, g, a) {
    p(this, "isDetectorInitialized");
    p(this, "assetsDirectoryPath");
    p(this, "compatibleSamVersion");
    p(this, "cameraService");
    p(this, "dispatcher");
    p(this, "onCaptureData");
    p(this, "protobuf");
    p(this, "samVersion");
    p(this, "currentDetection");
    p(this, "detections");
    p(this, "sessionToken");
    p(this, "analytics");
    p(this, "transactionCounting");
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.analytics = r, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = a, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    ko() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new b("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    var A, o, r;
    const t = (A = this.currentDetection) == null ? void 0 : A.name, e = (o = this.detections) == null ? void 0 : o[n];
    if (!e) throw new b("Detection " + n + " not found");
    if (!((r = this.allowedDetectionTransitions[t]) != null && r.includes(n))) throw new b("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new b("Detection not initialized");
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new b("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Ia.warn(`
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
  setThresholds(n) {
    var t;
    (t = this.currentDetection) == null || t.setThresholds(n);
  }
  static getWorkerPath(n, t) {
    return "" + t.replace($0, "") + n;
  }
}
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dg = {}, $i = {}, Ar, wg;
function yx() {
  if (wg) return Ar;
  wg = 1, Ar = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            a(s);
          else {
            for (var c = new Array(arguments.length - 1), I = 0; I < c.length; )
              c[I++] = arguments[I];
            g.apply(null, c);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, a(s));
      }
    });
  }
  return Ar;
}
var bg = {}, kg;
function Dx() {
  return kg || (kg = 1, function(i) {
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
      for (var s = null, c = [], I = 0, x = 0, C; g < a; ) {
        var E = r[g++];
        switch (x) {
          case 0:
            c[I++] = t[E >> 2], C = (E & 3) << 4, x = 1;
            break;
          case 1:
            c[I++] = t[C | E >> 4], C = (E & 15) << 2, x = 2;
            break;
          case 2:
            c[I++] = t[C | E >> 6], c[I++] = t[E & 63], x = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, c)), I = 0);
      }
      return x && (c[I++] = t[C], c[I++] = 61, x === 1 && (c[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, c.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, c.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var s = a, c = 0, I, x = 0; x < r.length; ) {
        var C = r.charCodeAt(x++);
        if (C === 61 && c > 1)
          break;
        if ((C = e[C]) === void 0)
          throw Error(o);
        switch (c) {
          case 0:
            I = C, c = 1;
            break;
          case 1:
            g[a++] = I << 2 | (C & 48) >> 4, I = C, c = 2;
            break;
          case 2:
            g[a++] = (I & 15) << 4 | (C & 60) >> 2, I = C, c = 3;
            break;
          case 3:
            g[a++] = (I & 3) << 6 | C, c = 0;
            break;
        }
      }
      if (c === 1)
        throw Error(o);
      return a - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(bg)), bg;
}
var er, Sg;
function wx() {
  if (Sg) return er;
  Sg = 1, er = i;
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
  }, er;
}
var tr, Gg;
function bx() {
  if (Gg) return tr;
  Gg = 1, tr = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function s(C, E, d) {
        r[0] = C, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3];
      }
      function c(C, E, d) {
        r[0] = C, E[d] = g[3], E[d + 1] = g[2], E[d + 2] = g[1], E[d + 3] = g[0];
      }
      o.writeFloatLE = a ? s : c, o.writeFloatBE = a ? c : s;
      function I(C, E) {
        return g[0] = C[E], g[1] = C[E + 1], g[2] = C[E + 2], g[3] = C[E + 3], r[0];
      }
      function x(C, E) {
        return g[3] = C[E], g[2] = C[E + 1], g[1] = C[E + 2], g[0] = C[E + 3], r[0];
      }
      o.readFloatLE = a ? I : x, o.readFloatBE = a ? x : I;
    }() : function() {
      function r(a, s, c, I) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), c, I);
        else if (isNaN(s))
          a(2143289344, c, I);
        else if (s > 34028234663852886e22)
          a((x << 31 | 2139095040) >>> 0, c, I);
        else if (s < 11754943508222875e-54)
          a((x << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, c, I);
        else {
          var C = Math.floor(Math.log(s) / Math.LN2), E = Math.round(s * Math.pow(2, -C) * 8388608) & 8388607;
          a((x << 31 | C + 127 << 23 | E) >>> 0, c, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, s, c) {
        var I = a(s, c), x = (I >> 31) * 2 + 1, C = I >>> 23 & 255, E = I & 8388607;
        return C === 255 ? E ? NaN : x * (1 / 0) : C === 0 ? x * 1401298464324817e-60 * E : x * Math.pow(2, C - 150) * (E + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function s(C, E, d) {
        r[0] = C, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3], E[d + 4] = g[4], E[d + 5] = g[5], E[d + 6] = g[6], E[d + 7] = g[7];
      }
      function c(C, E, d) {
        r[0] = C, E[d] = g[7], E[d + 1] = g[6], E[d + 2] = g[5], E[d + 3] = g[4], E[d + 4] = g[3], E[d + 5] = g[2], E[d + 6] = g[1], E[d + 7] = g[0];
      }
      o.writeDoubleLE = a ? s : c, o.writeDoubleBE = a ? c : s;
      function I(C, E) {
        return g[0] = C[E], g[1] = C[E + 1], g[2] = C[E + 2], g[3] = C[E + 3], g[4] = C[E + 4], g[5] = C[E + 5], g[6] = C[E + 6], g[7] = C[E + 7], r[0];
      }
      function x(C, E) {
        return g[7] = C[E], g[6] = C[E + 1], g[5] = C[E + 2], g[4] = C[E + 3], g[3] = C[E + 4], g[2] = C[E + 5], g[1] = C[E + 6], g[0] = C[E + 7], r[0];
      }
      o.readDoubleLE = a ? I : x, o.readDoubleBE = a ? x : I;
    }() : function() {
      function r(a, s, c, I, x, C) {
        var E = I < 0 ? 1 : 0;
        if (E && (I = -I), I === 0)
          a(0, x, C + s), a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), x, C + c);
        else if (isNaN(I))
          a(0, x, C + s), a(2146959360, x, C + c);
        else if (I > 17976931348623157e292)
          a(0, x, C + s), a((E << 31 | 2146435072) >>> 0, x, C + c);
        else {
          var d;
          if (I < 22250738585072014e-324)
            d = I / 5e-324, a(d >>> 0, x, C + s), a((E << 31 | d / 4294967296) >>> 0, x, C + c);
          else {
            var l = Math.floor(Math.log(I) / Math.LN2);
            l === 1024 && (l = 1023), d = I * Math.pow(2, -l), a(d * 4503599627370496 >>> 0, x, C + s), a((E << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, x, C + c);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, s, c, I, x) {
        var C = a(I, x + s), E = a(I, x + c), d = (E >> 31) * 2 + 1, l = E >>> 20 & 2047, Q = 4294967296 * (E & 1048575) + C;
        return l === 2047 ? Q ? NaN : d * (1 / 0) : l === 0 ? d * 5e-324 * Q : d * Math.pow(2, l - 1075) * (Q + 4503599627370496);
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
  return tr;
}
function Ng(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var or, Rg;
function kx() {
  if (Rg) return or;
  Rg = 1, or = i;
  function i(n) {
    try {
      if (typeof Ng != "function")
        return null;
      var t = Ng(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return or;
}
var Fg = {}, vg;
function Sx() {
  return vg || (vg = 1, function(i) {
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
  }(Fg)), Fg;
}
var nr, Wg;
function Gx() {
  if (Wg) return nr;
  Wg = 1, nr = i;
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
  return nr;
}
var ir, Mg;
function Nx() {
  if (Mg) return ir;
  Mg = 1, ir = n;
  var i = Gt();
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
  }, ir;
}
var Lg;
function Gt() {
  return Lg || (Lg = 1, function(i) {
    var n = i;
    n.asPromise = yx(), n.base64 = Dx(), n.EventEmitter = wx(), n.float = bx(), n.inquire = kx(), n.utf8 = Sx(), n.pool = Gx(), n.LongBits = Nx(), n.isNode = !!(typeof Wt < "u" && Wt && Wt.process && Wt.process.versions && Wt.process.versions.node), n.global = n.isNode && Wt || typeof window < "u" && window || typeof self < "u" && self || $i, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }($i)), $i;
}
var rr, Og;
function dI() {
  if (Og) return rr;
  Og = 1, rr = a;
  var i = Gt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, f) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function g(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
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
  a.create = s(), a.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(l, Q, f) {
    return this.tail = this.tail.next = new o(l, Q, f), this.len += Q, this;
  };
  function c(l, Q, f) {
    Q[f] = l & 255;
  }
  function I(l, Q, f) {
    for (; l > 127; )
      Q[f++] = l & 127 | 128, l >>>= 7;
    Q[f] = l;
  }
  function x(l, Q) {
    this.len = l, this.next = void 0, this.val = Q;
  }
  x.prototype = Object.create(o.prototype), x.prototype.fn = I, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new x(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, a.prototype.int32 = function(l) {
    return l < 0 ? this._push(C, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function C(l, Q, f) {
    for (; l.hi; )
      Q[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[f++] = l.lo;
  }
  a.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(C, Q.length(), Q);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(C, Q.length(), Q);
  }, a.prototype.bool = function(l) {
    return this._push(c, 1, l ? 1 : 0);
  };
  function E(l, Q, f) {
    Q[f] = l & 255, Q[f + 1] = l >>> 8 & 255, Q[f + 2] = l >>> 16 & 255, Q[f + 3] = l >>> 24;
  }
  a.prototype.fixed32 = function(l) {
    return this._push(E, 4, l >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(l) {
    var Q = t.from(l);
    return this._push(E, 4, Q.lo)._push(E, 4, Q.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, a.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var d = i.Array.prototype.set ? function(l, Q, f) {
    Q.set(l, f);
  } : function(l, Q, f) {
    for (var m = 0; m < l.length; ++m)
      Q[f + m] = l[m];
  };
  return a.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(c, 1, 0);
    if (i.isString(l)) {
      var f = a.alloc(Q = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(Q)._push(d, Q, l);
  }, a.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(c, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var l = this.head, Q = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = Q, this.len += f), this;
  }, a.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, Q, f), f += l.len, l = l.next;
    return Q;
  }, a._configure = function(l) {
    n = l, a.create = s(), n._configure();
  }, rr;
}
var ar, Jg;
function Rx() {
  if (Jg) return ar;
  Jg = 1, ar = t;
  var i = dI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Gt();
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
  }, t._configure(), ar;
}
var gr, Ug;
function lI() {
  if (Ug) return gr;
  Ug = 1, gr = o;
  var i = Gt(), n, t = i.LongBits, e = i.utf8;
  function A(I, x) {
    return RangeError("index out of range: " + I.pos + " + " + (x || 1) + " > " + I.len);
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
      return (o.create = function(x) {
        return i.Buffer.isBuffer(x) ? new n(x) : r(x);
      })(I);
    } : r;
  };
  o.create = g(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
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
  function a() {
    var I = new t(0, 0), x = 0;
    if (this.len - this.pos > 4) {
      for (; x < 4; ++x)
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << x * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      if (I.lo = (I.lo | (this.buf[this.pos] & 127) << 28) >>> 0, I.hi = (I.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return I;
      x = 0;
    } else {
      for (; x < 3; ++x) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << x * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
      return I.lo = (I.lo | (this.buf[this.pos++] & 127) << x * 7) >>> 0, I;
    }
    if (this.len - this.pos > 4) {
      for (; x < 5; ++x)
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << x * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
    } else
      for (; x < 5; ++x) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << x * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(I, x) {
    return (I[x - 4] | I[x - 3] << 8 | I[x - 2] << 16 | I[x - 1] << 24) >>> 0;
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
    var I = this.uint32(), x = this.pos, C = this.pos + I;
    if (C > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(x, C);
    if (x === C) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, x, C);
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
    var x = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[x](!1);
      },
      uint64: function() {
        return a.call(this)[x](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[x](!1);
      },
      fixed64: function() {
        return c.call(this)[x](!0);
      },
      sfixed64: function() {
        return c.call(this)[x](!1);
      }
    });
  }, gr;
}
var sr, Yg;
function Fx() {
  if (Yg) return sr;
  Yg = 1, sr = t;
  var i = lI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Gt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), sr;
}
var Pg = {}, Ir, Tg;
function vx() {
  if (Tg) return Ir;
  Tg = 1, Ir = n;
  var i = Gt();
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
        function(s, c) {
          if (s)
            return a.emit("error", s, e), g(s);
          if (c === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(c instanceof o))
            try {
              c = o[a.responseDelimited ? "decodeDelimited" : "decode"](c);
            } catch (I) {
              return a.emit("error", I, e), g(I);
            }
          return a.emit("data", c, e), g(null, c);
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
  }, Ir;
}
var Hg;
function Wx() {
  return Hg || (Hg = 1, function(i) {
    var n = i;
    n.Service = vx();
  }(Pg)), Pg;
}
var _g, Kg;
function Mx() {
  return Kg || (Kg = 1, _g = {}), _g;
}
var jg;
function Lx() {
  return jg || (jg = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = dI(), n.BufferWriter = Rx(), n.Reader = lI(), n.BufferReader = Fx(), n.util = Gt(), n.rpc = Wx(), n.roots = Mx(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(Dg)), Dg;
}
var qg, Vg;
function Ox() {
  return Vg || (Vg = 1, qg = Lx()), qg;
}
var N = Ox();
const h = N.Reader, R = N.Writer, u = N.util, B = N.roots.default || (N.roots.default = {}), WA = B.dot = (() => {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Content();
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
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
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
            B.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(B.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = B.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new B.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = B.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = B.dot.Image.toObject(A.images[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Metadata();
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
            ).string(r[g]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
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
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && B.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.AndroidMetadata(), s, c;
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
              let x = A.uint32() + A.pos;
              for (s = "", c = null; A.pos < x; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    c = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = c;
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
            case 10: {
              a.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
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
            let g = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = B.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.dynamicCameraFrameProperties[g[a]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
          let A = B.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new B.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = B.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && B.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.IosMetadata(), s, c;
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
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let x = A.uint32() + A.pos;
              for (s = "", c = !1; A.pos < x; ) {
                let C = A.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    c = A.bool();
                    break;
                  default:
                    A.skipType(C & 7);
                    break;
                }
              }
              a.architectureInfo[s] = c;
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
                let x = A.uint32() + A.pos;
                for (; A.pos < x; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = B.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
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
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = B.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = B.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
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
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.architectureInfo[r[g]] = !!A.architectureInfo[r[g]];
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
        if (A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.IosMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420Image)
          return e;
        let A = new B.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
          let A = B.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new B.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = B.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && B.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && B.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
            case 7: {
              a.croppedImageWithPosition = B.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = B.dot.v4.PlatformDetails.decode(A, A.uint32());
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
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = B.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = B.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
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
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = B.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = B.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = B.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = B.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = B.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MediaTrackSettings();
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
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.ImageBitmap();
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
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
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
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DetectedObject();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Point();
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
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.v4.Point.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageCrop)
          return e;
        let A = new B.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
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
            B.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.PlatformDetails();
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
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(B.dot.v4.BrowserVersion.decode(A, A.uint32()));
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
            let r = B.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.PlatformDetails)
          return A;
        let o = new B.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = B.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = B.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.BrowserVersion();
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
        if (e instanceof B.dot.v4.BrowserVersion)
          return e;
        let A = new B.dot.v4.BrowserVersion();
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.FaceContent)
          return A;
        let o = new B.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.DocumentContent)
          return A;
        let o = new B.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && B.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Blob();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
            case 8: {
              a.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
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
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
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
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
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
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1ElementaryFile();
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
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DataAuthenticationStatus();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.ChipAuthenticationStatus();
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
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 3: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
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
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
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
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.EyeGazeLivenessSegment();
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
            B.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && B.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(B.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
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
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = B.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = B.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new B.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = B.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = B.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.MultiRangeLivenessStepResult();
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
              g.image = B.dot.ImageWithTimestamp.decode(e, e.uint32());
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
          let A = B.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new B.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = B.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? B.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : B.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.ImageWithTimestamp.toObject(e.image, A)), o;
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
            B.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.detections && g.detections.length || (g.detections = []), g.detections.push(B.dot.v4.FaceDetection.decode(e, e.uint32()));
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
            let o = B.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new B.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = B.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = B.dot.v4.FaceDetection.toObject(e.detections[r], A);
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && B.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.FaceDetection();
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
              g.position = B.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
          let A = B.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceDetection)
          return e;
        let A = new B.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = B.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = B.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && B.dot.PointDouble.encode(e.center, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = B.dot.PointDouble.decode(e, e.uint32());
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
          let A = B.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceDetectionPosition)
          return e;
        let A = new B.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = B.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = B.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
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
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && B.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && B.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = B.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = B.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.SmileLivenessContent)
          return A;
        let o = new B.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = B.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = B.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = B.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = B.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.PalmContent)
          return A;
        let o = new B.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Image();
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
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
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
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && B.dot.Image.encode(t.image, e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = B.dot.Image.decode(t, t.uint32());
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
        let e = B.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageWithTimestamp)
        return t;
      let e = new B.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = B.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = B.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageSize();
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
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Int32List();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.RectangleDouble();
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
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.DigestWithTimestamp();
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
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && B.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && B.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof h || (e = h.create(e));
      let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.Video();
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
            g.containerMp4 = B.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = B.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return g;
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
          let o = B.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = B.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof B.dot.Video)
        return e;
      let A = new B.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? u.base64.decode(e.bytes, A.bytes = u.newBuffer(u.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = B.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = B.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? u.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = B.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = B.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoContainer();
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
      if (t instanceof B.dot.VideoContainer)
        return t;
      let e = new B.dot.VideoContainer();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoStream();
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.VideoStream)
        return t;
      let e = new B.dot.VideoStream();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointInt();
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
      if (t instanceof B.dot.PointInt)
        return t;
      let e = new B.dot.PointInt();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointDouble();
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
      if (t instanceof B.dot.PointDouble)
        return t;
      let e = new B.dot.PointDouble();
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
})(), Zg = /* @__PURE__ */ new Map([[re.ZERO, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [re.ONE, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [re.TWO, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [re.THREE, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [re.FOUR, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [re.FIVE, WA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), uI = {};
uI.min = 0.4;
const fI = {};
fI.min = 0.25;
const jr = {};
jr.min = 0.2, jr.max = 0.85;
const hI = {};
hI.min = 0.05;
const pI = {};
pI.max = 30;
const mI = {};
mI.min = 0;
const yI = {};
yI.confidence = mI;
const DI = {};
DI.min = 0;
const wI = {};
wI.confidence = DI;
const Xe = {};
Xe.confidence = uI, Xe.sharpness = fI, Xe.brightness = jr, Xe.edgeDistanceToImageShorterSideRatio = hI, Xe.devicePitchAngle = pI, Xe.leftEye = yI, Xe.rightEye = wI;
const bI = {};
bI.min = 0.4;
const kI = {};
kI.min = 0.25;
const qr = {};
qr.min = 0.2, qr.max = 0.85;
const SI = {};
SI.min = 0.05;
const GI = {};
GI.max = 30;
const NI = {};
NI.min = 0;
const RI = {};
RI.confidence = NI;
const FI = {};
FI.min = 0;
const vI = {};
vI.confidence = FI;
const $e = {};
$e.confidence = bI, $e.sharpness = kI, $e.brightness = qr, $e.edgeDistanceToImageShorterSideRatio = SI, $e.devicePitchAngle = GI, $e.leftEye = RI, $e.rightEye = vI;
const Vr = {};
Vr.MOBILE = Xe, Vr.DESKTOP = $e;
const Jx = Vr, WI = {};
WI.min = 0.4;
const MI = {};
MI.min = 0;
const LI = {};
LI.confidence = MI;
const OI = {};
OI.min = 0;
const JI = {};
JI.confidence = OI;
const Sn = {};
Sn.confidence = WI, Sn.leftEye = LI, Sn.rightEye = JI;
const UI = {};
UI.min = 0.4;
const YI = {};
YI.min = 0;
const PI = {};
PI.confidence = YI;
const TI = {};
TI.min = 0;
const HI = {};
HI.confidence = TI;
const Gn = {};
Gn.confidence = UI, Gn.leftEye = PI, Gn.rightEye = HI;
const Zr = {};
Zr.MOBILE = Sn, Zr.DESKTOP = Gn;
const Ux = Zr, zg = 1 * 5999 + 7126 + -5 * 2225, Nn = {};
Nn.timeout = 4e3, Nn.threshold = 0.7, Nn.instructions = [NA.FACE_TOO_CLOSE, NA.FACE_TOO_FAR];
const cr = Nn, _I = "SAM v1.50.5 for idcards";
class KI extends mx {
  constructor(t, e, A, o, r, g, a, s, c, I, x) {
    super(t, _I, e, g, a, c, I, x);
    p(this, "detector");
    p(this, "allowedDetectionTransitions");
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "passiveLivenessPhase");
    p(this, "livenessChallengePhase");
    p(this, "dispatcher");
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = s, this.dispatcher = g, this.allowedDetectionTransitions = this.buildAllowedTransitions(s);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  buildAllowedTransitions(t) {
    if (t.length === 1 * 4003 + 1 * -2026 + -3 * 659)
      return { [_.PASSIVE_LIVENESS]: [] };
    const e = { [_.PASSIVE_LIVENESS]: [_.LIVENESS_CHALLENGE + "_0"] }, A = e;
    return this.livenessChallengePhase.forEach((o, r) => {
      const g = _.LIVENESS_CHALLENGE + "_" + r;
      if (r < this.livenessChallengePhase.length - (-3 * 1615 + 2680 + 2166)) {
        const a = _.LIVENESS_CHALLENGE + "_" + (r + 1);
        A[g] = [a];
      }
    }), A;
  }
  async init() {
    await super.init();
    const t = {};
    t[_.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: zg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: _.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((e, A) => {
      const o = A + 1 < this.livenessChallengePhase.length ? A + 1 : void 0, r = _.LIVENESS_CHALLENGE + "_" + A;
      t[r] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: zg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: e, currentIndex: A, nextIndex: o }, type: _.LIVENESS_CHALLENGE });
    }), this.setDetections(t), this.setCurrentDetection(this.detections[_.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class Yx {
  constructor() {
    p(this, "assetsDirectoryPath");
    p(this, "cameraService");
    p(this, "protobuf");
    p(this, "analytics");
    p(this, "dispatcher");
    p(this, "sessionToken");
    p(this, "transactionCounting");
    p(this, "detector");
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
    if (!this.assetsDirectoryPath) throw new b("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new b("CameraService is required");
    if (!this.protobuf) throw new b("Protobuf is required");
    if (!this.dispatcher) throw new b("Dispatcher is required");
    if (!this.detector) throw new b("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class Px extends Yx {
  constructor() {
    super(...arguments);
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "challengeSequence");
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
    if (super.validateDependencies(), !this.detectionFactory) throw new b("DetectionFactory is required");
    if (!this.phaseThresholds) throw new b("PhaseThresholds is required");
    if (!this.challengeSequence) throw new b("ChallengeSequence is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this.phaseThresholds = void 0, this.challengeSequence = void 0, this;
  }
  build() {
    return this.validateDependencies(), new KI(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const Tx = "/dot-assets/multi-range/dot-DJT3N0It.js", Xg = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, hi = class hi {
  constructor() {
    p(this, "lastDetails");
    p(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new hi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Xg(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Xg(n, t);
  }
};
p(hi, "_instance");
let kt = hi;
const Hx = () => "prod".toLowerCase() === "dev";
class _x extends kt {
  constructor(t) {
    super();
    p(this, "events");
    this.events = t;
  }
  dispatchDetectionEvent(t) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, t);
  }
  dispatchOnCompleteEvent(t, e) {
    const A = {};
    A.resultData = t, A.content = e, this.dispatchCustomEvent(this.events.ON_COMPLETE, A);
  }
  dispatchPhaseChangedEvent(t) {
    const e = {};
    e.phaseName = t, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, e);
  }
  dispatchInstructionChangedEvent(t, e = dC) {
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
    if (!Hx() || !t) return;
    const e = {};
    e.candidateSelectionImages = t, this.dispatchCustomEventOnChange(this.events.DEV, e);
  }
}
class Kx extends _x {
  dispatchChallengeItemChangedEvent(n) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = n, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const jx = -1 * -1 + 7950 + -1 * 5951;
class $g {
  constructor(n) {
    p(this, "duration");
    p(this, "candidateSelectionTime", -4300 + 2 * 329 + 3642);
    p(this, "candidateSelectionImages", []);
    this.duration = n ?? jx;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > 6297 + 6297 * -1;
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
    this.candidateSelectionTime = -831 * -5 + 8517 + 1056 * -12, this.candidateSelectionImages = [];
  }
}
function Qi(i) {
  const { height: n, width: t } = fC(i), e = (i.width - t) / (15767 + 15 * -1051), A = (i.height - n) / (-613 * -14 + 1 * -3959 + -4621), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function jI(i, n, t) {
  const { height: e, width: A } = t, o = Di(i.width, i.height), r = A - o * n * (-143 + -1 * 598 + 743), g = e - o * n * (1 * 6605 + 8 * -1143 + -33 * -77), a = (i.width - r) / (7133 + -1 * 7131), s = (i.height - g) / (6121 + -1 * 6119), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = g, c;
}
function Mt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const qI = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = yC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = g, s.left = a, As(s);
}, VI = (i, n, t = RC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), ZI = async (i) => VI(i, 8154 + 235 * -29 + -1249), qx = async (i) => VI(i, 9703 + -1 * -8679 + -18282, "image/png"), zI = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -50 * 167 + -2444 * 1 + 10794, -191 * 19 + 496 * 16 + -4307, t.width, t.height), t;
}, XI = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(6912 * -1 + 985 * -3 + 9867, -149 * 22 + -1572 + 4850, i.width, i.height);
  return t;
};
async function Vx(i, n) {
  const t = zI(i, n);
  return qx(t);
}
const $I = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, Cr = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, $I(i, a, t);
}, Do = (i, n, t, e = -6860 + 6131 * 1 + 729) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -49 * -143 + -52 * 151 + -71 * -12, 9750 + 1 * -9743), A.beginPath());
};
function Zx(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, $I(i, o, "rgba(255, 0, 0, 0.3)", !0), Do(i, e, "lime");
}
function zx(i, n, t) {
  const e = qI(n, t);
  Object.values(e).map((A) => Do(i, A, "orange"));
}
class Ac extends b {
  constructor(t) {
    super(t.message);
    p(this, "cause");
    this.name = "ProxyError", this.cause = t, this.logError(t);
  }
  logError(t) {
  }
}
var tt;
class ec extends Array {
  constructor(t) {
    super();
    U(this, tt);
    v(this, tt, t);
  }
  get size() {
    return S(this, tt);
  }
  pushFixed(...t) {
    if (t.length > S(this, tt)) {
      const e = t.slice(-S(this, tt));
      this.push(...e);
      return;
    }
    this.length === S(this, tt) && this.splice(4 * 627 + -1429 * 1 + 1079 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-1340 * -1 + 2 * 3475 + -8290);
  }
}
tt = new WeakMap();
function vA(i, n) {
  const t = xi();
  return vA = function(e, A) {
    e = e - 164;
    let o = t[e];
    if (vA.ibhPok === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      vA.iEPDWi = c, i = arguments, vA.ibhPok = !0;
    }
    const g = t[4679 * 2 + 1789 * -1 + -7569], a = e + g, s = i[a];
    return s ? o = s : (vA.VPVNOn === void 0 && (vA.VPVNOn = !0), o = vA.iEPDWi(o, A), i[a] = o), o;
  }, vA(i, n);
}
function xi() {
  const i = ["BN3cSCk4uI/cHCkHtuhdVwtdSa", "WRC9W77cJIG", "WQrag2aJs8kJECkQ", "W78iW48", "W4OEW4RdT8kZlv0XmSkUD8kh", "W4GyW4RdT8kYjdSDn8k1u8kjW6q", "zSoOW5vcl8kSCWq", "WQ3dHeW", "p8ktga", "W7pcVmkicx04mCoOWRC", "rSocWRO2W6G", "qcNdTd4fW4aaW4NcI8k5WQtdU8kG", "yCoSWOiutSoJm1DSWQBcNSocWO9D", "zmozlYFcPCoZEmoZrW", "rCoHWPRdQuBdPIr6", "W7FdSSkaW7JdTmk0C1xdRXNdJmk6qW", "qmk8q8oEjGvOWPVdQCkeWQjd", "WOyvWRSMWPNdPKu6W7dcTW", "W6WcWQddHhe", "wKbPa0VdKmoBeX4+", "y8keW6KIAmkxpLboESoNW6G", "W7yawNqv", "W7dcTSkgi3OQiCoJWQe", "W7lcQqCW", "W4dcRCkQkcZdVSkjD8o9W4/cPSo0h8oM", "WOldVCo2t28", "WRj4WQzxbZf6WRJcTbJdII0", "h8oCwmoccSohW7D6lc3cVSkOeW", "bgJcOx5E", "W7S1yJhdM2RdKCkDWRxdLCoAWRVdQq", "WQbSog0"];
  return xi = function() {
    return i;
  }, xi();
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return vA(c - -529, s);
  }
  function e(g, a, s, c, I) {
    return vA(s - 376, a);
  }
  function A(g, a, s, c, I) {
    return vA(a - -749, s);
  }
  const o = i();
  function r(g, a, s, c, I) {
    return vA(c - 767, a);
  }
  for (; ; )
    try {
      if (-parseInt(A(-577, -562, "7rhP", -570, -572)) / 1 * (-parseInt(A(-545, -557, "*@8c", -572, -566)) / 2) + -parseInt(e(555, "bb(C", 544, 545, 555)) / 3 + parseInt(A(-584, -574, "S#2F", -564, -575)) / 4 + -parseInt(A(-575, -573, "bQxg", -577, -574)) / 5 * (-parseInt(t(-336, -346, "qbyg", -339, -327)) / 6) + parseInt(r(948, "S#2F", 928, 941, 940)) / 7 * (parseInt(t(-344, -350, "*@8c", -350, -343)) / 8) + parseInt(t(-356, -344, "mbZz", -348, -362)) / 9 + -parseInt(r(961, "ieCO", 946, 961, 964)) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(xi, 6005 * 159 + 6295 * -29 + -262059);
async function Xx(i) {
  const n = await window[o("SAcI", 1126) + "o"][A(908, "mbZz") + "e"][o("@^8H", 1123) + "t"](e(568, 546, 560, "gYMp", 557), i);
  function t(r, g, a, s, c) {
    return vA(a - 578, g);
  }
  function e(r, g, a, s, c) {
    return vA(c - 386, s);
  }
  function A(r, g, a, s, c) {
    return vA(r - 741, g);
  }
  function o(r, g, a, s, c) {
    return vA(g - 935, r);
  }
  return Array[A(934, "FBcM")](new Uint8Array(n))[t(745, "Ygj&", 751)]((r) => r[t(756, "ws^2", 758) + t(754, "*v%a", 755)](1781 + -195 * -37 + -8980)[A(905, "ieCO") + o("8t)A", 1113)](-289 * 23 + -5242 + 11 * 1081, "0"))[o("bb(C", 1104)]("");
}
class $x {
  constructor(n) {
    p(this, "detectionRecord");
    p(this, "imagesWithTimestampForDuplicateDetection");
    p(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new ec(SC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / FC, A = e / (4635 + 41 * -113), o = n.length / 2, r = n.slice(o - A, o + A), g = await Xx(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: XI(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new Ac(A) : b.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = As(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const g = r, a = this.validationService.validateDetectedObject(o, t);
    if (a.result.get("isPresent")) {
      const s = {};
      s.image = e, s.timestamp = A, this.collectImagesForDuplicateDetection(s);
    }
    return this.detectionRecord.push(g), { detection: o, validationResult: a.result, isValid: a.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class A0 extends $x {
  constructor(t, e) {
    super(e);
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = Qi(t), A = zI(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detect(A.data, A.resolution, o);
    r = this.transformDetectionCoordinatesRelativeToFullFrameImage(r, Qi(t));
    const g = {};
    return g.detectedObject = r, g.image = t, g.imageData = A.data, g.timestamp = e, this.processDetectedObject(g);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(t, e) {
    return { ...t, leftEye: { ...t.leftEye, center: Mt(t.leftEye.center, e) }, rightEye: { ...t.rightEye, center: Mt(t.rightEye.center, e) }, mouth: { ...t.mouth, center: Mt(t.mouth.center, e) }, topLeft: Mt(t.topLeft, e), bottomRight: Mt(t.bottomRight, e), faceCenter: Mt(t.faceCenter, e) };
  }
}
class AE {
  constructor(n, t, e, A) {
    p(this, "instructionCodes");
    p(this, "instructionCodeCollector");
    p(this, "config");
    p(this, "analytics");
    p(this, "dispatcher");
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
var Mo, ot, jt;
class eE extends Array {
  constructor(t) {
    super();
    U(this, Mo, -1 * -8751 + 3647 + -6199 * 2);
    U(this, ot, []);
    U(this, jt, !1);
    v(this, Mo, t);
  }
  clearAfterTimeout() {
    if (S(this, ot).length === 0) return;
    const t = Date.now(), e = S(this, ot).findLastIndex((A) => t - A > S(this, Mo));
    e !== -1 && (v(this, jt, !0), this.splice(-4631 * 2 + -8799 + 18061, e + (2727 * -2 + -89 * 1 + -14 * -396)), S(this, ot).splice(7979 + 2229 * 4 + 5 * -3379, e + (-1648 * 2 + -9410 + -131 * -97)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), S(this, ot).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return S(this, jt);
  }
  clear() {
    this.splice(-1 * -6295 + -3384 + -1 * 2911), S(this, ot).splice(-1735 + 6103 * -1 + 7838), v(this, jt, !1);
  }
}
Mo = new WeakMap(), ot = new WeakMap(), jt = new WeakMap();
const Rn = {};
Rn.minFaceSizeRatio = 0.13, Rn.maxFaceSizeRatio = 0.15, Rn.scale = 0.85;
const Fn = {};
Fn.minFaceSizeRatio = 0.152, Fn.maxFaceSizeRatio = 0.172, Fn.scale = 1;
const vn = {};
vn.minFaceSizeRatio = 0.18, vn.maxFaceSizeRatio = 0.205, vn.scale = 1.18;
const Wn = {};
Wn.minFaceSizeRatio = 0.215, Wn.maxFaceSizeRatio = 0.24, Wn.scale = 1.41;
const Mn = {};
Mn.minFaceSizeRatio = 0.245, Mn.maxFaceSizeRatio = 0.275, Mn.scale = 1.61;
const Ln = {};
Ln.minFaceSizeRatio = 0.28, Ln.maxFaceSizeRatio = 0.34, Ln.scale = 1.84;
const e0 = /* @__PURE__ */ new Map([[re.ZERO, Rn], [re.ONE, Fn], [re.TWO, vn], [re.THREE, Wn], [re.FOUR, Mn], [re.FIVE, Ln]]);
class tc {
  constructor(n) {
    p(this, "controller");
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
class tE extends tc {
  constructor(t, e) {
    super(t);
    p(this, "nextIndex");
    p(this, "controller");
    this.nextIndex = e, this.controller = t;
  }
  async onCapture(t) {
    var o, r, g;
    super.onCapture(t);
    const e = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(_.LIVENESS_CHALLENGE + "_" + this.nextIndex), (e == null ? void 0 : e[this.nextIndex]) !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    (o = this.controller.getTransactionCounting()) == null || o.trackTransaction();
    const A = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: (r = this.controller.cameraService.videoRecorder) == null ? void 0 : r.getRecording() });
    this.dispatchOnCompleteEvent(A), (g = this.controller.getAnalytics()) == null || g.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(t) {
    super.onDetection(t);
  }
  async dispatchOnCompleteEvent(t) {
    const e = this.controller.getOnCaptureData(), A = e.get(_.PASSIVE_LIVENESS);
    if (!A) throw new b("On capture data was not found");
    const { detectedObject: o, resultImage: r } = A, g = {};
    g.height = r.height, g.width = r.width;
    const a = g, s = await ZI(r), c = {};
    c.detection = o, c.imageResolution = a;
    const I = {};
    I.data = c, I.image = s;
    const x = {};
    x.imageWithMetadata = I;
    const C = x;
    this.controller.getDispatcher().dispatchOnCompleteEvent(C, t);
  }
}
class oE {
  constructor(n, t, e, A, o, r, g) {
    p(this, "name");
    p(this, "isRunning");
    p(this, "fpsOfAllImages");
    p(this, "captureProcessStartTime");
    p(this, "cameraService");
    p(this, "imageProcessor");
    p(this, "callbacks");
    p(this, "checkToInstructionCodeMap");
    p(this, "fallbackInstruction");
    p(this, "instructionEscalation");
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new ec(1 * -3027 + -1 * -9357 + -6300), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof Ac)) throw n;
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
  onDetection(n, t) {
    const e = { ...n, avgFps: Pt(Ji(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new b("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Pt(Ji(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = XI(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await Vx(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const s = a, c = {};
    return c.croppedImage = g, c.topLeftCorner = s, c;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Pt((-1 * -31 + -366 * -2 + 237 * 1) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[873 * 6 + -3673 + -1565], t), s = this.collectAndEscalate(a), c = {};
    return c.detection = t.detection, c.instructionCode = a, c.invalidValidators = g, c.isInCandidateSelection = !1, c.isEscalated = s, { processedImage: c, detectionTime: e, fps: A, avgFps: Pt(Ji(this.fpsOfAllImages)), resolution: r };
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
    await fr(Math.max(Va.max - n, Va.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class nE extends oE {
  constructor(t, e, ...A) {
    super(...A);
    p(this, "instructionCodeMap");
    p(this, "lastImage");
    p(this, "bestImage");
    p(this, "candidateSelection");
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
  getDetectionDetails(t, e) {
    const A = super.getDetectionDetails(t, e);
    return { ...A, processedImage: { ...A.processedImage, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() } };
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof b ? e : b.fromError(e);
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
    else throw new b("Something went wrong during capturing an image");
  }
  getInstructionCode(t, e) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && (e != null && e.isValid) ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && (e != null && e.isValid) ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class iE {
  constructor() {
    p(this, "name");
    p(this, "cameraService");
    p(this, "imageProcessor");
    p(this, "callbacks");
    p(this, "checkToInstructionCodeMap");
    p(this, "fallbackInstruction");
    p(this, "instructionEscalation");
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
    if (!this.name) throw new b("Name is required");
    if (!this.cameraService) throw new b("CameraService is required");
    if (!this.imageProcessor) throw new b("ImageProcessor is required");
    if (!this.callbacks) throw new b("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new b("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new b("FallbackInstruction is required");
  }
}
class oc extends iE {
  constructor() {
    super(...arguments);
    p(this, "instructionCodeMap");
    p(this, "candidateSelection");
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
    return this.validateDependencies(), new nE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class rE extends oc {
}
var qt, ft, ht;
class nc {
  constructor(n) {
    U(this, qt);
    U(this, ft);
    U(this, ht);
    v(this, qt, n), v(this, ft, /* @__PURE__ */ new Map());
  }
  validate() {
    S(this, qt).forEach((n) => {
      S(this, ft).set(n.name, n.evaluate());
    }), v(this, ht, void 0);
  }
  isValid() {
    return S(this, ht) === void 0 && v(this, ht, Array.from(S(this, ft).values()).every((n) => n)), S(this, ht);
  }
  get result() {
    return S(this, ft);
  }
  get validators() {
    return S(this, qt);
  }
}
qt = new WeakMap(), ft = new WeakMap(), ht = new WeakMap();
class ic {
  constructor(n, t) {
    p(this, "className");
    p(this, "thresholds");
    this.className = n, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(n) {
    this.thresholds = n;
  }
}
var Lo, pt;
class Re {
  constructor(n, t) {
    U(this, Lo);
    U(this, pt);
    v(this, Lo, n), v(this, pt, t);
  }
  get threshold() {
    return S(this, pt);
  }
  get name() {
    return S(this, Lo);
  }
  isValueBelowThreshold(n) {
    return n < S(this, pt);
  }
  isValueAboveThreshold(n) {
    return n > S(this, pt);
  }
}
Lo = new WeakMap(), pt = new WeakMap();
const aE = "isNotSmall";
var Oo;
class rc extends Re {
  constructor(t, e) {
    super(aE, t);
    U(this, Oo);
    v(this, Oo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Oo));
  }
}
Oo = new WeakMap();
const gE = "isPresent";
var Jo;
class ac extends Re {
  constructor(t, e) {
    super(gE, t);
    U(this, Jo);
    v(this, Jo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Jo));
  }
}
Jo = new WeakMap();
const sE = "isLeftEyePresent";
var Uo;
class gc extends Re {
  constructor(t, e) {
    super(sE, t);
    U(this, Uo);
    v(this, Uo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Uo));
  }
}
Uo = new WeakMap();
const IE = "isNotLarge";
var Yo;
class sc extends Re {
  constructor(t, e) {
    super(IE, t);
    U(this, Yo);
    v(this, Yo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Yo));
  }
}
Yo = new WeakMap();
const cE = "isRightEyePresent";
var Po;
class Ic extends Re {
  constructor(t, e) {
    super(cE, t);
    U(this, Po);
    v(this, Po, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Po));
  }
}
Po = new WeakMap();
class CE extends ic {
  constructor(n) {
    super("LivenessChallengeValidationService", n);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new nc([new ac(t.confidence.min, n.confidence), new gc(t.leftEye.confidence.min, n.leftEye.confidence), new Ic(t.rightEye.confidence.min, n.rightEye.confidence), new rc(t.size.min, n.faceSize), new sc(t.size.max, n.faceSize)]);
    return e.validate(), e;
  }
}
class BE extends tc {
  constructor(t) {
    super(t);
    p(this, "controller");
    this.controller = t;
  }
  onCapture(t) {
    super.onCapture(t), this.controller.transitionToDetection(_.LIVENESS_CHALLENGE + "_0");
    const e = this.controller.getLivenessChallengePhase();
    e !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[545 + -29 * 145 + 3660]), this.controller.runDetectionLoop();
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class QE extends oc {
}
const xE = "isNotDim";
var To;
class EE extends Re {
  constructor(t, e) {
    super(xE, t);
    U(this, To);
    v(this, To, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, To));
  }
}
To = new WeakMap();
const dE = "isNotBright";
var Ho;
class lE extends Re {
  constructor(t, e) {
    super(dE, t);
    U(this, Ho);
    v(this, Ho, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Ho));
  }
}
Ho = new WeakMap();
const uE = "isSharp";
var _o;
class fE extends Re {
  constructor(t, e) {
    super(uE, t);
    U(this, _o);
    v(this, _o, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, _o));
  }
}
_o = new WeakMap();
const hE = "isNotPitched";
var Ko;
const Da = class Da extends Re {
  constructor(t, e) {
    super(hE, Da.calculatePitchAngleAccelerationThreshold(t));
    U(this, Ko);
    v(this, Ko, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return bC * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = S(this, Ko) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Ko = new WeakMap();
let zr = Da;
const pE = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, mE = (i, n) => Object.values(i).every((t) => pE(t, n)), yE = "isNotOutOfBounds";
var jo, mt;
class DE extends Re {
  constructor(t, e, A) {
    super(yE, t);
    U(this, jo);
    U(this, mt);
    v(this, jo, e), v(this, mt, A);
  }
  evaluate() {
    const t = jI(S(this, mt), this.threshold, Qi(S(this, mt))), e = qI(S(this, jo), S(this, mt));
    return mE(e, t);
  }
}
jo = new WeakMap(), mt = new WeakMap();
class wE extends ic {
  constructor(t) {
    super("PassiveLivenessValidationService", t);
    p(this, "acceleration");
  }
  validateDetectedObject(t, e) {
    const A = this.getThresholds(), o = new nc([new ac(A.confidence.min, t.confidence), new gc(A.leftEye.confidence.min, t.leftEye.confidence), new Ic(A.rightEye.confidence.min, t.rightEye.confidence), new rc(A.size.min, t.faceSize), new sc(A.size.max, t.faceSize), new fE(A.sharpness.min, t.sharpness), new EE(A.brightness.min, t.brightness), new lE(A.brightness.max, t.brightness), new DE(A.edgeDistanceToImageShorterSideRatio.min, t, e), new zr(A.devicePitchAngle.max, this.acceleration)]);
    return o.validate(), o;
  }
}
class bE {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, currentIndex: r, detector: g, multiRangeLivenessChallengeItem: a, nextIndex: s, phaseThresholds: c } = n;
    switch (t) {
      case _.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(o, e, g, A, c, a);
      case _.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(o, e, g, A, c, a, r, s);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(n, t, e, A, o, r) {
    const g = new QE(), a = this.getThresholdsWithFaceSize(o[_.PASSIVE_LIVENESS], r), s = new wE(a), c = new BE(n), I = new A0(e, s), x = new $g(A), C = this.createInstructionEscalation(n);
    return g.setName(_.PASSIVE_LIVENESS), g.setCameraService(t), g.setImageProcessor(I), g.setCallbacks(c), g.setCandidateSelection(x), g.setCheckToInstructionCodeMap(Ra), g.setInstructionCodeMap(NA), g.setFallbackInstruction(NA.FACE_NOT_PRESENT), g.setInstructionEscalation(C), g.build();
  }
  createLivenessChallengeDetection(n, t, e, A, o, r, g, a) {
    const s = new rE(), c = this.getThresholdsWithFaceSize(o[_.LIVENESS_CHALLENGE], r), I = new CE(c), x = new tE(n, a), C = new A0(e, I), E = new $g(A), d = this.createInstructionEscalation(n);
    return s.setName(this.prepareIndexedPhaseName(_.LIVENESS_CHALLENGE, g)), s.setCameraService(t), s.setImageProcessor(C), s.setCallbacks(x), s.setCandidateSelection(E), s.setCheckToInstructionCodeMap(Ra), s.setInstructionCodeMap(NA), s.setFallbackInstruction(NA.FACE_NOT_PRESENT), s.setInstructionEscalation(d), s.build();
  }
  prepareIndexedPhaseName(n, t) {
    return t === void 0 ? n : n + "_" + t;
  }
  getThresholdsWithFaceSize(n, t) {
    if (t === void 0 || !e0.has(t)) throw new b("Invalid challenge");
    const e = e0.get(t);
    if (!e) throw new b("Invalid challenge");
    const A = {};
    A.min = e.minFaceSizeRatio, A.max = e.maxFaceSizeRatio;
    const o = { ...n };
    return o.size = A, o;
  }
  createInstructionEscalation(n) {
    return new AE(new eE(cr.timeout), n.getDispatcher(), { threshold: cr.threshold, instructions: cr.instructions }, n.getAnalytics());
  }
}
(function(i, n) {
  function t(a, s, c, I, x) {
    return tA(I - -738, x);
  }
  function e(a, s, c, I, x) {
    return tA(s - -871, I);
  }
  function A(a, s, c, I, x) {
    return tA(x - 374, I);
  }
  function o(a, s, c, I, x) {
    return tA(c - -169, s);
  }
  const r = i();
  function g(a, s, c, I, x) {
    return tA(s - 609, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(-288, -358, -456, "KBn0", -420)) / 1 * (parseInt(A(671, 847, 635, "!7!I", 741)) / 2) + parseInt(o(161, "alii", 273, 206, 348)) / 3 * (-parseInt(o(397, "h9n2", 381, 273, 382)) / 4) + parseInt(t(-225, -135, -209, -213, "$Uzr")) / 5 * (parseInt(t(-352, -244, -222, -238, "*HTn")) / 6) + parseInt(A(813, 737, 746, "Axan", 723)) / 7 + parseInt(g("PK$N", 1101, 1017, 1130, 1039)) / 8 + -parseInt(e(-453, -377, -312, "PK$N", -429)) / 9 + -parseInt(t(-483, -477, -321, -369, "*HTn")) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ei, -92618 + 1 * 895823 + -351299);
function tA(i, n) {
  const t = Ei();
  return tA = function(e, A) {
    e = e - (229 * 31 + -6 * 605 + -3149);
    let o = t[e];
    if (tA.ebIUDR === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      tA.dnpiob = c, i = arguments, tA.ebIUDR = !0;
    }
    const g = t[7633 * 1 + -6977 + -82 * 8], a = e + g, s = i[a];
    return s ? o = s : (tA.TAcOgd === void 0 && (tA.TAcOgd = !0), o = tA.dnpiob(o, A), i[a] = o), o;
  }, tA(i, n);
}
function kE() {
  const i = t(610, 533, 623, 618, "GNXv") + t(656, 542, 693, 645, "tZNg") + a("Axan", 632, 591, 528) + a("alii", 482, 556, 443) + s(1408, 1349, "alii") + n("$Uzr", -54) + t(631, 609, 641, 719, "NXgM") + s(1328, 1361, "Q%Dw") + o(1040, "3i$@", 1110, 1053, 1147) + n("tpb$", 12) + t(636, 728, 749, 698, "JG6j") + n("KBn0", 41) + n("p%3S", 81) + t(681, 636, 698, 617, "rls(") + o(1014, "jH%3", 971, 1061, 1062) + a("Pi48", 446, 392, 471) + t(514, 560, 527, 566, "3i$@") + s(1294, 1352, "6jeC") + t(483, 628, 436, 527, "$Uzr") + n("dl&r", 85) + s(1431, 1390, "d5AQ") + t(456, 486, 509, 548, "tZNg") + n("hvyD", -58) + a("eq8f", 240, 380, 349) + t(468, 492, 533, 523, "tZNg") + s(1360, 1317, "$Uzr") + n("hvyD", -87) + o(1164, "JayD", 1046, 1115, 1052) + s(1500, 1519, "Yu[G") + s(1446, 1378, "3i$@") + n("jH%3", 88) + t(437, 454, 483, 533, "tpb$") + t(576, 782, 622, 667, "tpb$") + n("PK$N", -92) + s(1381, 1274, "LNDZ") + n("yYVh", 51) + o(1106, "gK)@", 1231, 1068, 1175) + n("i(BS", -71) + o(1185, "mZj&", 1108, 1304, 1189) + t(620, 695, 662, 683, "JayD") + t(563, 504, 487, 534, "uy($") + o(1055, "jH%3", 1107, 965, 1018) + a("5^y#", 547, 577, 474) + t(796, 775, 775, 697, "tZNg") + o(1183, "$Uzr", 1213, 1200, 1190) + n("$Uzr", -60) + s(1349, 1239, "T0Tq") + s(1336, 1412, "tpb$") + n("PK$N", -76) + a("!7!I", 244, 447, 344) + a("jH%3", 527, 488, 451) + a("LNDZ", 266, 297, 378) + a("6jeC", 376, 528, 417) + t(508, 503, 674, 585, "6jeC") + t(602, 572, 579, 568, "dl&r") + o(1191, "hvyD", 1183, 1168, 1207) + o(1209, "KBn0", 1240, 1142, 1152) + s(1474, 1557, "J4XZ") + n("Axan", 62) + a("46sy", 352, 359, 393) + s(1401, 1395, "Q%Dw") + o(1251, "mZj&", 1205, 1222, 1206) + t(649, 725, 658, 636, "0C&s") + a("h9n2", 349, 381, 376) + s(1466, 1420, "eVRI") + o(1040, "gK)@", 1227, 1209, 1145) + t(436, 531, 619, 504, "i(BS") + o(1069, "Q%Dw", 1072, 924, 1023) + n("3i$@", 42) + o(1180, "*HTn", 1158, 949, 1064) + a("h9n2", 350, 496, 416) + o(1177, "rls(", 1341, 1220, 1235) + o(1121, "*HTn", 1061, 1195, 1172) + o(1039, "!7!I", 1132, 1096, 1109) + o(1267, "VIAl", 1097, 1180, 1155) + o(1108, "Pi48", 991, 1020, 1102) + s(1473, 1570, "h9n2") + t(486, 439, 614, 506, "#)c^") + s(1517, 1452, "#)c^") + a("uy($", 486, 609, 508) + o(1282, "uy($", 1287, 1144, 1201) + s(1516, 1585, "]EA@") + o(1006, "L34K", 1091, 977, 1087) + o(1149, "h9n2", 1284, 1182, 1195) + t(709, 622, 664, 596, "5^y#") + a("jH%3", 422, 317, 371) + t(485, 542, 485, 501, "#)c^") + a("PK$N", 387, 287, 355) + t(545, 629, 669, 590, "VIAl") + a("i(BS", 562, 603, 507) + n("$Uzr", 105) + n("GNXv", 37) + o(1099, "eq8f", 1002, 1064, 1029) + s(1347, 1315, "eVRI") + o(1094, "jH%3", 1076, 1108, 1167) + t(643, 557, 528, 576, "KBn0") + t(685, 687, 700, 610, "eVRI") + o(971, "Pi48", 1005, 1038, 1017) + o(1143, "hvyD", 1198, 1137, 1188) + s(1356, 1399, "V32C") + s(1506, 1600, "#OMF") + n("d5AQ", -86) + s(1384, 1456, "$Uzr") + o(1017, "dl&r", 1110, 1007, 1012) + s(1386, 1292, "3i$@") + n("#OMF", -45) + t(716, 695, 760, 688, "eq8f") + o(1205, "]EA@", 1320, 1284, 1219) + s(1404, 1513, "Muw)") + o(1065, "Q%Dw", 1099, 1062, 1100) + o(1223, "p%3S", 1218, 1216, 1136) + a("3i$@", 313, 408, 331) + n("5^y#", -97) + t(736, 653, 533, 644, "Q%Dw") + a("LNDZ", 222, 391, 316) + o(1199, "*HTn", 1073, 1057, 1108) + o(1086, "mZj&", 1223, 1233, 1139) + s(1308, 1221, "KBn0") + s(1420, 1493, "jH%3") + s(1428, 1386, "3i$@") + o(923, "RpZ3", 991, 1136, 1039) + a("JG6j", 431, 315, 328) + t(679, 676, 496, 591, "46sy") + n("L34K", -10) + a("Yu[G", 483, 391, 375) + t(772, 776, 799, 712, "tpb$") + s(1443, 1522, "p%3S") + o(1148, "GNXv", 1340, 1146, 1224) + t(676, 588, 731, 695, "hvyD") + n("alii", 1) + o(979, "Muw)", 1197, 1025, 1091) + o(1157, "#)c^", 1243, 1075, 1144) + s(1329, 1293, "J4XZ") + t(653, 686, 686, 640, "J4XZ") + s(1378, 1364, "tpb$") + o(1097, "*HTn", 1049, 1102, 1032) + t(661, 726, 716, 711, "PK$N") + s(1322, 1224, "Q%Dw") + s(1299, 1270, "RHGV") + t(797, 670, 677, 692, "J4XZ") + o(1033, "JayD", 989, 981, 1089) + o(1251, "L34K", 1216, 1097, 1197) + n("T0Tq", -43) + t(610, 726, 704, 661, "RpZ3") + o(1020, "jH%3", 1074, 934, 1045) + t(629, 520, 718, 615, "NXgM") + o(1008, "p%3S", 1071, 1104, 1065) + o(1292, "alii", 1247, 1185, 1229) + s(1503, 1566, "6jeC") + a("hvyD", 387, 459, 389) + n("E%X2", 65) + a("rls(", 446, 512, 470) + n("5^y#", 29) + o(1026, "h9n2", 1161, 1126, 1117) + n("hvyD", 116) + o(1105, "Muw)", 1066, 1233, 1169) + n("E%X2", -47) + n("0C&s", 53) + a("d5AQ", 427, 335, 435) + o(1214, "Yu[G", 1192, 1107, 1132) + o(1095, "J4XZ", 1067, 1119, 1092) + o(1029, "]EA@", 1181, 1117, 1120) + t(731, 689, 638, 630, "jH%3") + s(1295, 1178, "Pi48") + s(1491, 1426, "LNDZ") + o(918, "0C&s", 930, 1039, 1016) + o(1092, "d]VV", 1195, 1006, 1103) + o(1166, "!7!I", 1297, 1282, 1243) + n("tpb$", 9) + t(651, 623, 592, 623, "p%3S") + n("tpb$", -42) + a("NXgM", 474, 464, 391) + t(584, 457, 454, 559, "p%3S") + o(1104, "mZj&", 947, 1088, 1044) + t(514, 660, 667, 565, "tpb$") + s(1351, 1389, "gK)@") + n("hvyD", 108) + t(629, 540, 537, 516, "eVRI") + o(1267, "5^y#", 1266, 1265, 1178) + s(1518, 1460, "#OMF") + t(783, 689, 701, 707, "JG6j") + n("h9n2", -3) + o(1126, "0C&s", 1249, 1151, 1240) + a("LNDZ", 386, 470, 419) + t(555, 455, 641, 558, "Muw)") + n("tpb$", 113) + a("mZj&", 298, 356, 307) + a("Pi48", 496, 471, 428) + o(1238, "d]VV", 1108, 1119, 1127) + o(1287, "yYVh", 1309, 1148, 1199) + t(592, 432, 514, 513, "p%3S") + a("JayD", 355, 499, 465) + n("alii", 14) + a("rls(", 433, 398, 360) + n("alii", -5) + s(1395, 1326, "hvyD") + t(643, 739, 721, 680, "tpb$") + t(601, 593, 587, 633, "mZj&") + s(1315, 1339, "JG6j") + o(1098, "5^y#", 1195, 1004, 1094);
  function n(c, I, x, C, E) {
    return tA(I - -426, c);
  }
  function t(c, I, x, C, E) {
    return tA(C - 171, E);
  }
  const e = window[t(745, 675, 804, 701, "hvyD")](i), A = window[a("PK$N", 262, 294, 345)](e);
  function o(c, I, x, C, E) {
    return tA(E - 691, I);
  }
  const r = TC(A), g = {};
  g[n("tZNg", 25)] = X0;
  function a(c, I, x, C, E) {
    return tA(C - -15, c);
  }
  g[o(1083, "3i$@", 1067, 1037, 1038)] = NC;
  function s(c, I, x, C, E) {
    return tA(c - 971, x);
  }
  return window[o(1271, "VIAl", 1196, 1187, 1192) + "o"][t(684, 610, 797, 722, "mZj&") + "e"][t(487, 525, 388, 491, "Muw)") + t(490, 603, 569, 593, "RHGV")](o(1097, "dl&r", 1109, 1111, 1090), r, g, !0, [o(1010, "]EA@", 1006, 970, 1073) + "pt"]);
}
async function SE(i) {
  function n(r, g, a, s, c) {
    return tA(c - 658, a);
  }
  function t(r, g, a, s, c) {
    return tA(r - -922, s);
  }
  function e(r, g, a, s, c) {
    return tA(c - -721, s);
  }
  const A = await kE(), o = {};
  return o[e(-278, -251, -346, "PK$N", -293)] = X0, window[t(-451, -551, -473, "dl&r") + "o"][n(1106, 1134, "Yu[G", 1232, 1163) + "e"][e(-328, -148, -146, "GNXv", -239) + "pt"](o, A, i);
}
function Ei() {
  const i = ["kSosWP/cU3W", "bCkWiaau", "xLrApCkt", "WQrzWRFcTCok", "WQn0yxr6", "j1WkbqK", "oSkKrSomaG", "WRpcKb8ltW", "pGxcGLaJ", "p8kQiCoSW4O", "W6j0DI9K", "W63cUWPGxW", "eSoCWPFcIfW", "WRvEWQFdRCkb", "BSk9W6nf", "otNdTeJdLW", "p8kDW5BcMc0", "tGL3x8ka", "k0BdRuhcJa", "WRi8W4BdSmka", "q8oylrC", "mW3dOGPl", "pSkHcGWU", "mfJdNftdNW", "pmkbtmoOma", "wCk0e8klW5u", "E3joe8oC", "WOPnW5/cOSoN", "WPHlxaXQ", "WOWqWP7cMCkk", "WR5kW6VcSCkm", "W7vwx8knWPS", "WOKbWQtdRCkw", "psddLuRdMa", "W6LCW4xcNSo+W6FcSCkyWPy5smkF", "W6LmW5pcI8oa", "W7jXAJtdLW", "W6VcNmkYbc0", "WRBdPwddJmoS", "imozBrHL", "WQmhf8oCjG", "WPbhWReHWQm", "W64mE8oPW4m", "xYtdIwW", "W5BdP8kuk0K", "qSoZn0SD", "W7lcMHHOaa", "EaL3k8kx", "WPJdPr8/tG", "WPddHqezkW", "WQylWRxdNSk3", "WODKWR8MW5W", "W6OlumoRW60", "wSk1WQ89oW", "W4qvsmk+iq", "rmobmwno", "W7NcOa8Buq", "WRpdRqGigW", "WR5wWRCzW5W", "ESkmWQ9ilG", "WOpdPWS5FW", "W5FdJHyoWO4", "WRNcQSkUydy/W6NdTrvtWQZdMSkx", "W4VdSmoVqSoS", "W5BdGSkgjIe", "m8kWcdbi", "asNdLvJdQa", "W6xdRHavDW", "WR0MWODbW5G", "W6PyxCkNW4a", "pmk4o8kVW4G", "WPJcNIivCG", "W69CESkIWQO", "l8kBomomW6O", "eCoIyIbn", "WPeZjN8/WO8bW6PVW47cJ8oRrq", "WPFcQaH0pG", "W5lcM1hdLmo4", "W7X0W5hcLmkJ", "rgWlyCkm", "m8osW4NdNbe", "EG0FkSkY", "o1NcJYtcMa", "W73dO8krlgu", "h8kmC0dcLvNdNSoAWPJdP8kqxL0", "WPNdS8opESoPWOOF", "hmkoDKtcLLVdN8ocWQVdUmkpAvS", "W7iGDCkoWRq", "WRjZWPBcImoT", "w8k9W6JcNH4", "WOqrlCkPhW", "jeuOkt8", "s8kElmoTW63cPcK", "W5tcNXDzFW", "gLtdOKtdRq", "W4NdIGKGW60", "jMhdV2BdJW", "cqhdS2tdNq", "pgxcTKWh", "W63dHmklesO", "W7zUkmkyW54", "WR9JWPVdLmoV", "W7rsW5XMW6m", "W4FdOmo9Emo5", "W6XPjmkeWRG", "jCkVWQngkb7dVG", "WPrJWOuNW7y", "WQirt8k5mq", "pCktW7/dQcO", "nNiDiCkV", "W7GRdaGjWOddOmojW4ruemoH", "iGGQzmktjmkCWPNdRqj8WPT6", "qwH6y8o1", "W7xdTa0OWOO", "W7xdPSoEnfu", "W51QW7HCWOK", "wSo7WOldPG0", "sr9TyM7dHGKFtmoxqSorbq", "Aq7cLMRdHW", "W7ZcQ2VdOCos", "nbVdPML2", "lYldTsddPq", "Amk9W5tdJW", "ewascZW", "nmkhr8kEgW", "bCowvdzv", "wSo6W4VdOa8", "l8kPaCo/WRm", "W5tdLv7dO8oo", "WRjEW71rkgGT", "WO0NWPZdSmkW", "W5TwW4hcRCoP", "ySo8DtBdSW", "W5HkW4BcRCoM", "ECkrW5NdGq4", "CSowW4lcUq0", "WPhcHcNcS8oS", "mHhdUWfl", "qmo7owX4", "iSkDoCoeWQW", "W6jZdZtcOW", "W4ZcIa0kdW", "sLJdVNNdLCoSW5S", "WOCMgCkyga", "W45IqsPy", "zSkbe8knW7e", "W7ldKCoSC8ot", "WRLNnSkhqa", "p8kAu8o0dq", "W55cWRBcI8o+", "W4tcMw4ckW", "W5zmWRxcSSkI", "W6reWPyKW6a", "smohW4vqW5a", "sgWqxSka", "cmkAh29A", "EWLsz8o8", "mCkVnJas", "W7ZdKmoCzKm", "qmosmJ3dQa", "a8o8ALzc", "AbFdRYvuBSkA", "F8kYWQ9ViW", "kJPIk8kK", "BCo5W6ldTtW", "WPuQqCoFW6W", "kSksi8ooW5S", "W6ZdMSkGeHa", "W5NcIedcHSoq", "W57cPw/cHCkK", "W48UuSk8W4O", "WOBdUGWDuW", "WR/dGsOz", "f1RdTa7cVW", "DCkJWQ3cUufzWQ3cRmoYW5OjWQjY", "D8o+nctdRG", "b8kDidut", "AcJdTtRdSG", "WPmJn8k+iW", "WRjOWQSeW48", "W5NdNmoLaLq", "dxSgot8", "o8kNAbix", "W6pdO2HzW60", "WPzKBITK", "tmonlXa", "WPDsjCkHWPq", "WQf8W4xcPSo3", "W4LqW4r5W5G", "e0nHfmky", "WPXXW7NcHmoZ", "nwO1hta", "WPqYl386WO9fW5rFW5xcQ8og", "FCkCW5RdQXy", "smoit8kVWR/dMvxcJqRcRrageq", "rSoJbYddJW", "WRjqWRuFW4a", "ogyEbG4", "lmkaimojW6u", "W7FcN8kYedK", "W5hcM2pdLCoy", "W7eqCCkoWPi", "zWZcLulcJq", "W6RcS8ktxmoy", "W5xcMSk0x2a", "W7dcOazieq", "rCkViCoAWQa", "oXFdLIji", "WQBdHmkGuSoy", "WP9EW4VcPmo8", "W4TtW5nGbq", "WPfIWQm/W4K", "wCk4lCkdW6i", "W5/dU8kXcYW", "ohLPba0", "gW7dL1/dVq", "oMhdGwBdPa", "hMPZkCoIeCowemoRE8olcCkl", "wwTJg8oT", "WPTnW7NcISow", "WOhdJtjesq", "msxcTJm2", "W5VdSmohaSoW", "WOPFCSk4WQi", "W5VdSSo9wW", "AmkuaSkjWRO", "W4ZdIZzFW50", "tb5KyMVdHK0HFmomzSo8", "fr8HjSoN", "x8kqW4ZdJa4", "r8krWQ1Ieq", "W5HTBtVcRW", "W5PPW43cJSo4"];
  return Ei = function() {
    return i;
  }, Ei();
}
(function(i, n) {
  const t = i();
  function e(g, a, s, c, I) {
    return VA(g - 870, c);
  }
  function A(g, a, s, c, I) {
    return VA(c - 76, a);
  }
  function o(g, a, s, c, I) {
    return VA(c - -23, s);
  }
  function r(g, a, s, c, I) {
    return VA(s - 914, I);
  }
  for (; ; )
    try {
      if (-parseInt(r(1377, 1390, 1379, 1382, "hjRM")) / 1 + parseInt(o(437, 422, "MYFm", 429, 439)) / 2 * (-parseInt(o(443, 432, "xSeh", 437, 438)) / 3) + -parseInt(o(436, 439, "O8Vz", 440, 436)) / 4 * (parseInt(o(436, 431, "^*2u", 431, 426)) / 5) + -parseInt(r(1363, 1352, 1360, 1367, "hjRM")) / 6 + parseInt(A(523, "yJM(", 539, 529, 528)) / 7 + parseInt(r(1375, 1368, 1375, 1372, "RcQO")) / 8 * (parseInt(e(1334, 1343, 1331, "j^dW", 1338)) / 9) + parseInt(A(533, "XU$&", 526, 534, 533)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(di, 5 * -106949 + -33 * 9362 + 1123206);
function VA(i, n) {
  const t = di();
  return VA = function(e, A) {
    e = e - (-8186 + -4 * -2158);
    let o = t[e];
    if (VA.BBnRgE === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      VA.bAyTmF = c, i = arguments, VA.BBnRgE = !0;
    }
    const g = t[-1103 * -1 + -789 * 5 + -7 * -406], a = e + g, s = i[a];
    return s ? o = s : (VA.Wouats === void 0 && (VA.Wouats = !0), o = VA.bAyTmF(o, A), i[a] = o), o;
  }, VA(i, n);
}
async function GE(i) {
  const { iv: n, key: t, message: e } = await _C(i), A = await SE(t), o = {};
  o[g(-539, -541, "fN0X")] = A;
  function r(a, s, c, I, x) {
    return VA(c - 851, a);
  }
  o.iv = n;
  function g(a, s, c, I, x) {
    return VA(s - -991, c);
  }
  return o[r("Vv!J", 1296, 1300) + "ge"] = e, o;
}
function di() {
  const i = ["aCoNzwxcUSomFM7dS8k5nSkp", "Dmo+nSkzW7m", "mYyp", "c8oRWRKDWQ9qimkHW5eOmSomEG", "W5VcI8k2tNCzW5O", "WQVcR8kao0LkAIXApSoTWR9B", "zraaW6pdLmkMW54", "D8o8AN5DW7T2", "EmkqW7zvWR/dVHz6WO/dRmkEna", "y8oYWPhcQYBcNL1kjmkxWReSW4C", "W7NdK8k/W6GUW7ZdMSo2nConbfhcTa", "WPJdGmk2WQVdVmoba2ddOSklWRS", "W53dS1tcK0q4W5hdOmo2DINcLq", "WQXwuCoMaXtcOhzMWPRcKq", "DSoyw2nbW4zb", "aCoIzw3cU8ogchNdQ8krkCk5WRW", "CIBcPmokurhcK1KO", "WRbFWO8zWRNcSmouWOVdVqhdKCov", "W6qKoXpdMsrcWPnL", "WRbzWOKzWRlcSCkOWPldGdRdKSoxW5S", "ywbSWRZcQmo5WPNcNNriW6/cIaq"];
  return di = function() {
    return i;
  }, di();
}
function uA(i, n) {
  const t = li();
  return uA = function(e, A) {
    e = e - (-2381 + -7233 * 1 + 9749);
    let o = t[e];
    if (uA.thjsZb === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      uA.KBzTvR = c, i = arguments, uA.thjsZb = !0;
    }
    const g = t[7172 + 1 * 6012 + -13184], a = e + g, s = i[a];
    return s ? o = s : (uA.qcskcs === void 0 && (uA.qcskcs = !0), o = uA.KBzTvR(o, A), i[a] = o), o;
  }, uA(i, n);
}
function pA(i, n, t, e, A) {
  return uA(e - -909, A);
}
(function(i, n) {
  function t(a, s, c, I, x) {
    return uA(a - 938, s);
  }
  function e(a, s, c, I, x) {
    return uA(a - -248, c);
  }
  function A(a, s, c, I, x) {
    return uA(c - -486, I);
  }
  const o = i();
  function r(a, s, c, I, x) {
    return uA(c - -174, a);
  }
  function g(a, s, c, I, x) {
    return uA(a - -994, x);
  }
  for (; ; )
    try {
      if (-parseInt(e(-111, -73, "Jqzf", -135, -111)) / 1 + parseInt(A(-250, -277, -273, "Jsm8", -283)) / 2 * (parseInt(A(-301, -276, -254, "%N6O", -225)) / 3) + parseInt(r("o2UY", 72, 14, 73, 62)) / 4 * (parseInt(t(1113, "j*P]", 1150, 1064, 1098)) / 5) + -parseInt(t(1149, "Atd#", 1164, 1184, 1114)) / 6 + -parseInt(g(-855, -903, -874, -860, "Ren^")) / 7 + -parseInt(g(-751, -733, -791, -743, "OaOM")) / 8 + parseInt(e(-38, -42, "1EP6", -29, -5)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(li, 1 * -1262362 + 149039 * 7 + -1 * -860315);
function me(i, n, t, e, A) {
  return uA(i - -643, e);
}
function li() {
  const i = ["quq4uYm", "v1SJrd0", "bflcPbvX", "W4hcO8kEW4PD", "W7fUWOddUW", "WOO2xq", "dGLiW6BdLW", "ovZcGGO", "WOlcJSkVnSk1", "WOVcSCkOo8kJ", "ht5pWQCY", "acbXWOa", "W5KvWRmwEW", "z1G4vZK", "f1pcNXf2", "rbBcGcpdSG", "zCkEaSk5y8kbxHHUW7ilcSki", "W4BdKeNdTKBdGSoahghcS2Ph", "dqvjW6RdRq", "W6bUWORdQgC", "WRJdPflcHsy", "W7iaWQyesW", "zCo7W6pdJW", "k8kElL/dRa", "WRVdHK/cHXC", "WPzakLCW", "WPzopuSZ", "oHjtW77dTW", "ytRcNJBdHW", "ad8A", "za1PWPJcRSo+jG", "W67dOSocsSog", "aX5v", "WP3cTHidna", "WQBdHNHeWP0QW5NdNv/dLq", "WRn0gxpdMq", "p0hcNtrY", "ctrQW77dTG", "WPn9he7dKG", "W4NcSmkD", "vYpcGcxdOa", "eCkdWOX+sa", "kKNcIa", "W7iOW5BcLqS", "W7PepWJdHW", "W6a4f8kLBW", "WQKXFd9k", "W5yOtdpdSCkju8k6WOtcKa", "W7GAebOvFW7cISotowKWWRO", "ht8yWOe", "fd8skmoc", "mYPKWR7cQa", "g3ZcLc3cVW", "sgqkFH8", "W4CwWRC", "WOO8DsX+", "W7RdVSoerSot", "WP7cJZqFnq", "WO0JvYri", "WPtcTq/cQGu", "zLldJc1o", "hCorWRjdW7W", "WQn4u1Xc", "WP7cKHKzna", "W6LTpCoxW5O", "arnRy8o1", "zmo6W63dMGC", "xKSqWQpdOSk0WR50WQZcVG", "l8k5WR7cIvbNyc0jfIihyq", "WRuzumkVWOi+W7vOW7XBuvldKa", "vvu0oSkjCspdGHVcUt7dNG", "vXFcP8oXWPK", "B8kxWQ3dVCksf8oh", "W6ddVfK", "lrqJWRSt", "W79BdCoP", "aZqHk8oh", "z8kkkSotwqX3W4/cGmoCkCkN", "iSk5WRJcIsWDkcKnca", "WRbBnSoaza", "WP7cLHtcSrG", "hx7cUX1W", "W6NdQmoftSos", "W7ddNMKKWQW", "WODIp2GM", "ECoSW74", "crPtW7FdQG", "W6jxy8opqG", "WOVcQSkPp8kv", "dmkfk1BdRq", "havdW7K", "l8k9WRZcHvPSbqGUdtak", "WP/cQSkPia", "uYdcSmotWOG", "W651A8omxG", "dd8sWPiO", "cb5cW6ldQG", "W5FcSmkkW4y", "WQZdPflcMG", "oSkWWRFdM8kz", "W7fuB8olsW", "geZcLY/cMa", "W6/cOWVdNvCkigybW6HXW6NcIa", "zLBdHdHi", "bbnHB8oe", "ECoSW6ldItq", "dGLcW7FdKW", "r8oWW50Pja", "euxcSX1J", "W4xdNCoWF8oG", "y8oSW7xcLmor", "iSoorSoLmq", "W6ZcOG3dNfOlDfiwW4vuW5e", "lvZcGHvs", "WOj/hq", "WPpdPMFcRre", "ECofEqpcV8oNy8o4xfKVvq", "W455WPZdUNi", "ps7cNM0DlmoFyd9SDmoKxG", "hZ8sWOm9"];
  return li = function() {
    return i;
  }, li();
}
function ye(i, n, t, e, A) {
  return uA(i - 586, n);
}
function mA(i, n, t, e, A) {
  return uA(n - -987, t);
}
function qe(i, n, t, e, A) {
  return uA(i - -874, t);
}
class NE {
  async [mA(-797, -828, "im@l") + ye(772, "&AvT") + qe(-630, -591, "Ren^") + me(-469, -496, -476, "71DK") + pA(-803, -789, -777, -763, "z8)z")](n) {
    function t(C, E, d, l, Q) {
      return me(l - 154, E - 325, d - 301, C);
    }
    function e(C, E, d, l, Q) {
      return mA(C - 157, l - 911, C);
    }
    const { Image: A } = WA;
    function o(C, E, d, l, Q) {
      return mA(C - 200, C - 1645, l);
    }
    const r = await n[o(898, 938, 875, "Jsm8") + o(888, 866, 940, "Jqzf") + "r"](), g = new Uint8Array(r);
    function a(C, E, d, l, Q) {
      return pA(C - 333, E - 22, d - 457, l - 97, C);
    }
    const s = {};
    s[c(400, 358, 370, "^5BT")] = g;
    function c(C, E, d, l, Q) {
      return pA(C - 75, E - 475, d - 468, d - 1107, l);
    }
    const I = A[o(842, 862, 839, "H4Mb") + "y"](s);
    if (I)
      throw e("8(n*", 93, 92, 86) !== o(863, 842, 891, "eOFT") ? _0x2c2d6b[t("OaOM", -388, -355, -328) + a("OaOM", -605, -585, -573)](_0x1e30ed) : b[t("AB0v", -182, -281, -235) + c(291, 391, 343, "z5jY")](I);
    const x = {};
    return x[o(799, 744, 788, "tywD")] = g, A[e("STYq", 99, 107, 116) + "e"](x);
  }
  [mA(-789, -785, "k8L0") + pA(-624, -732, -665, -675, "0dqQ") + qe(-725, -703, "VnzT") + mA(-804, -784, "qxD8") + pA(-680, -667, -735, -713, "z8)z") + mA(-756, -749, "Omwk")](n) {
    const { VideoStream: t } = WA, e = t[r(-326, -356, -317, "fgm)", -307) + "y"](n);
    function A(a, s, c, I, x) {
      return qe(c - 1052, s - 387, s);
    }
    if (e)
      throw r(-417, -324, -350, "tywD", -365) !== r(-428, -383, -430, "fSw4", -381) ? b[r(-322, -307, -272, "VnzT", -330) + o(286, 207, 229, "p7gd", 245)](e) : _0xcb7f6f[A(325, "z8)z", 377) + g(122, 38, "%N6O", 87, 87)](_0x59ec08);
    function o(a, s, c, I, x) {
      return qe(x - 929, s - 258, I);
    }
    function r(a, s, c, I, x) {
      return ye(x - -1145, I);
    }
    function g(a, s, c, I, x) {
      return qe(x - 798, s - 58, c);
    }
    return t[A(458, "p7gd", 414) + "e"](n);
  }
  async [mA(-753, -742, "Atd#") + pA(-716, -683, -768, -728, "#@J9") + ye(787, "Ren^") + mA(-708, -760, "fSw4") + pA(-690, -733, -664, -686, "^5BT") + "e"](n) {
    function t(I, x, C, E, d) {
      return me(E - 259, x - 212, C - 153, d);
    }
    const { v4: { Metadata: e } } = WA, A = { ...n };
    function o(I, x, C, E, d) {
      return me(d - 323, x - 325, C - 362, C);
    }
    A[t(-188, -135, -158, -143, "U1Yg") + r(-544, -469, -527, "3i*P", -486)] = WA[t(-181, -156, -206, -208, "o2UY") + s(-395, -448, "p7gd")][s(-370, -349, "8(n*")];
    function r(I, x, C, E, d) {
      return pA(I - 154, x - 211, C - 333, d - 209, E);
    }
    A[c(-751, -802, "U1Yg") + r(-408, -435, -394, "%N6O", -454) + t(-194, -233, -288, -240, "Omwk") + "n"] = t(-92, -85, -84, -133, "Jsm8");
    const g = A, a = e[s(-381, -381, "H4Mb") + "y"](g);
    function s(I, x, C, E, d) {
      return pA(I - 300, x - 380, C - 13, I - 344, C);
    }
    if (a)
      if (s(-345, -376, "*Iap") !== o(-196, -135, "OaOM", -231, -184)) {
        const { Blob: I } = _0x1f197b.v4, x = I[r(-601, -539, -545, "#@J9", -544) + "y"](_0x5534eb);
        if (x) throw _0x50c0e6[t(-230, -126, -164, -178, "Atd#") + s(-402, -447, "%N6O")](x);
        const C = I[t(-154, -78, -151, -137, "fSw4") + "e"](_0x4c80bb);
        return I[c(-815, -824, "Jqzf") + "e"](C)[s(-328, -276, "im@l") + "h"]();
      } else throw b[r(-502, -472, -446, "AB0v", -446) + o(-119, -46, "VnzT", -96, -87)](a);
    function c(I, x, C, E, d) {
      return mA(I - 308, I - 8, C);
    }
    return e[t(-116, -127, -160, -139, "Atd#") + "e"](g);
  }
  async [pA(-703, -784, -773, -750, "im@l") + ye(751, "OaOM") + ye(821, "U1Yg") + pA(-787, -727, -725, -774, "o2UY")](n) {
    const { Content: t } = WA, { iv: e, key: A, message: o } = await GE(n);
    function r(C, E, d, l, Q) {
      return me(Q - 674, E - 103, d - 196, C);
    }
    const g = { token: new Uint8Array(A), iv: e, schemaVersion: GC, bytes: new Uint8Array(o) };
    function a(C, E, d, l, Q) {
      return me(Q - 372, E - 196, d - 334, C);
    }
    function s(C, E, d, l, Q) {
      return ye(d - 97, Q);
    }
    const c = t[a("wgCb", -75, -115, -157, -128) + "y"](g);
    function I(C, E, d, l, Q) {
      return me(Q - 1031, E - 474, d - 25, C);
    }
    if (c)
      throw s(779, 891, 834, 835, "@j2[") !== a("p7gd", -68, 0, -22, -56) ? b[a("nliC", -68, -117, -153, -102) + a("AB0v", -80, -163, -170, -123)](c) : _0x56c7a1[r("Atd#", 206, 279, 195, 237) + s(941, 858, 899, 890, "1EP6")](_0x1f43ba);
    const x = t[I("z5jY", 550, 540, 529, 548) + "e"](g);
    return t[s(857, 932, 874, 886, "wKFE") + "e"](x)[a("VnzT", -117, -166, -121, -121) + "h"]();
  }
  [qe(-625, -586, "wgCb") + ye(779, "Qpfv") + me(-505, -502, -445, "z5jY") + "ge"](n) {
    function t(s, c, I, x, C) {
      return pA(s - 141, c - 493, I - 94, I - 1636, x);
    }
    const { Blob: e } = WA.v4, A = e[t(960, 981, 924, "^5BT") + "y"](n);
    function o(s, c, I, x, C) {
      return mA(s - 18, I - 564, c);
    }
    function r(s, c, I, x, C) {
      return me(c - 1406, c - 498, I - 200, I);
    }
    function g(s, c, I, x, C) {
      return qe(s - 119, c - 167, I);
    }
    if (A)
      throw r(945, 916, "8(n*") !== g(-505, -445, "^5BT") ? _0x30798b[r(1007, 948, "w94y") + o(-242, "@j2[", -271)](_0x289469) : b[t(950, 1001, 969, "Qpfv") + o(-209, "im@l", -192)](A);
    const a = e[r(902, 945, "rG8F") + "e"](n);
    return e[g(-507, -474, "TYb7") + "e"](a)[o(-266, "71DK", -219) + "h"]();
  }
  async [pA(-721, -717, -796, -769, "p7gd") + mA(-781, -770, "wKFE") + mA(-820, -845, "tywD") + mA(-831, -833, "tywD") + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(s, c, I, x, C) {
      return pA(s - 418, c - 309, I - 373, s - 632, x);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A == null ? void 0 : A[a(-97, -70, -68, "Omwk")](({ brand: s, version: c }) => ({ name: s, version: c })) };
  }
  async [pA(-760, -702, -766, -727, "rG8F") + ye(753, "dDi(") + mA(-831, -808, "o2UY") + ye(798, "0dqQ") + me(-436, -397, -382, "%N6O") + mA(-855, -819, "fSw4") + ye(807, "z!uP") + "on"](n) {
    function t(s, c, I, x, C) {
      return mA(s - 113, c - 1800, x);
    }
    const e = await this[t(1015, 1005, 945, "STYq") + A(564, 504, 532, "z!uP") + A(586, 538, 605, "wgCb") + A(530, 585, 499, "dDi(") + t(970, 996, 1017, "AB0v")](n[a("fSw4", 779, 709, 721) + a("wgCb", 712, 765, 729) + "ge"]);
    function A(s, c, I, x, C) {
      return pA(s - 45, c - 479, I - 71, s - 1273, x);
    }
    const o = {};
    o[a("B1%%", 783, 773, 761)] = e;
    function r(s, c, I, x, C) {
      return mA(s - 465, x - 562, C);
    }
    function g(s, c, I, x, C) {
      return qe(s - 1112, c - 37, C);
    }
    o[A(541, 493, 563, "AB0v") + A(588, 575, 552, "avZm") + r(-208, -311, -193, -252, "fSw4")] = n[a("dDi(", 766, 807, 799) + g(436, 464, 471, 490, "71DK") + A(590, 626, 585, "%N6O")];
    function a(s, c, I, x, C) {
      return pA(s - 90, c - 372, I - 287, x - 1483, s);
    }
    return o;
  }
}
function cc(i) {
  const n = [], t = _.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const o = e.slice(t.length), r = parseInt(o, -521 + 177 * 3);
      if (!isNaN(r) && o === r.toString()) {
        const g = {};
        g.phase = e, g.data = A, g.index = r, n.push(g);
      }
    }
  return n.sort((e, A) => e.index - A.index);
}
function fA(i, n) {
  const t = ui();
  return fA = function(e, A) {
    e = e - (-6524 + 1585 * 4 + -533 * -1);
    let o = t[e];
    if (fA.ElsOof === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(I, x) {
        let C = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + C[Q] + x.charCodeAt(Q % x.length)) % 256, d = C[Q], C[Q] = C[E], C[E] = d;
        Q = 0, E = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, E = (E + C[Q]) % 256, d = C[Q], C[Q] = C[E], C[E] = d, l += String.fromCharCode(I.charCodeAt(f) ^ C[(C[Q] + C[E]) % 256]);
        return l;
      };
      fA.VmFJTX = c, i = arguments, fA.ElsOof = !0;
    }
    const g = t[8202 + 1367 * -6], a = e + g, s = i[a];
    return s ? o = s : (fA.wKbGEM === void 0 && (fA.wKbGEM = !0), o = fA.VmFJTX(o, A), i[a] = o), o;
  }, fA(i, n);
}
function Le(i, n, t, e, A) {
  return fA(i - -980, n);
}
function LA(i, n, t, e, A) {
  return fA(e - 19, n);
}
(function(i, n) {
  function t(a, s, c, I, x) {
    return fA(c - 741, s);
  }
  function e(a, s, c, I, x) {
    return fA(s - 202, a);
  }
  function A(a, s, c, I, x) {
    return fA(a - -519, s);
  }
  const o = i();
  function r(a, s, c, I, x) {
    return fA(s - 875, I);
  }
  function g(a, s, c, I, x) {
    return fA(c - -286, x);
  }
  for (; ; )
    try {
      if (parseInt(r(1249, 1442, 1659, "DAN9", 1620)) / 1 + parseInt(r(1208, 1404, 1317, "a]wc", 1522)) / 2 * (parseInt(r(1559, 1385, 1265, "o)Ub", 1317)) / 3) + -parseInt(g(324, 400, 327, 217, "[@l8")) / 4 * (-parseInt(t(1371, "%(tk", 1473, 1363, 1282)) / 5) + parseInt(e("jX6T", 578, 466, 632, 407)) / 6 * (-parseInt(e("6&#d", 821, 988, 897, 956)) / 7) + -parseInt(r(1666, 1448, 1623, "A4NV", 1410)) / 8 * (-parseInt(A(181, "vAgC", 349, 124, 141)) / 9) + parseInt(t(967, "fLcC", 1105, 1191, 888)) / 10 + -parseInt(g(114, -24, 74, -8, "XeET")) / 11 * (parseInt(A(-30, "fLcC", 101, -67, -15)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ui, 107345 + 343260 * 2 + 1 * 40462);
function iA(i, n, t, e, A) {
  return fA(t - -660, A);
}
function ui() {
  const i = ["WQ8WmKZcMW", "tsbCACoq", "m8kvWP/cQ8oJ", "WQRdRGGuWPHhWPDvyCkykgu", "pSoiWPGVWQC", "C8kpW5RcI8kL", "kq5Ku8kw", "WRK7WQFcOWi", "sSkCWPTVcW", "WRdcIHWmdSkCqG", "FYH/ymot", "W4NdVXBdOXS", "WOtcTmkrW4Kh", "e8kiaHlcLW", "W4hdVH/dTqe", "o8kTWP7cJIK", "W6lcGby", "DI7dGCkVW5u", "WO1ZwmkI", "WPxdG8kUWPBcTa", "WRG5jHr8", "W5ldSaS", "W50vbI5O", "WOxcUbrYWOO", "WPT8wSk0WQO", "hCkzeXFcUG", "W5ldTb7dQaG", "EdzEW5eH", "W6/cTComDIe", "W6RcRamKeq", "WPpcGSkwW5KB", "W5W/bd9e", "WQ0MewFcLq", "WO0OWP0Azq", "r8oiemoKWPW", "cSkegXBcGa", "W7hdTI7cPwq", "WOH/d0xcSG", "W6ldPmou", "bmoin2FdNG", "W5eQagxdJa", "W5bmgqJdJW", "zZvkWPtcNa", "WOC4pWnM", "W5JdKZhcTM8", "W4tdUSkNcCkZ", "WPtdTCkUWPBcPW", "W6ZdJYxcNCkg", "W5VdPrNdTr8", "W5FdRLqoW5lcMvlcLmoVahuHWOW", "W7pdNXFcU2a", "W57dOr7dVb4", "W67cUYaKeG", "DhbejSoT", "hCkFeXlcHW", "WR7dLrCqdSkars8", "W6xcJ8kU", "W6ldNWVcUNC", "eIbrBSkz", "W7VdRc7cT2q", "W7HVWQyDkG", "dSkzWOJcTW", "AI18A8oV", "m8kfWQRcJXG", "W6ddOSoqW4v9", "FmkQW4/cMSk7", "omodbwBdSG", "WQWIiMRcPW", "W67cHGm", "qCk2W5ZcJmkf", "DmkHW4NcMmkS", "W6XXimkjrW", "W7RcRvu", "W5ukpvxdSW", "smkAWP8", "W4pdQCk2cCoN", "CJng", "W7BcK1fzW48", "W57dPrO", "W53dOrNdRJC", "W73dLIVcUNi", "fCo2ivNdIa", "rHNdRmkPW5q", "omkJW4naAa", "WQi1hbHK", "y8kQW63cKCk/", "gSkAWP8I", "tCoaemorWOC", "W7hdJIBcT2a", "EmkIW5ZcMSk7", "WRD4W77dU8oO", "W61gnCkytq", "AcfHBmoB", "WPj7mvpcJa", "gWfbBmkk", "W6y8af3dHq", "q8oHBa", "bmo2ivNdIa", "W6ZdPCoBW4a", "W6yHfMpdKW", "W63cHsy/mG", "tmkDWO1Vga", "W5GLaG", "W5xdTGxdSd8", "W4NcNCkNW5ZcTq", "DCoqWOffxG", "WPjtevFcMa", "WOnxgulcNG", "W7RcUYa7", "W7a8aJ1O", "W6LVWPSAdW", "W7ZdHZ7cKSk4", "Cmk4hIDB", "WRzYhuxcMG", "e8kUzCovW5LJW6/dV8olWPmKW4O", "xtTjWRRcIW", "smoagSoDWRy", "vXBdHmk/W5q", "hmkbWP8+W5W", "WO3dKSkkj1O", "s8o2fmoeWPi", "b8ojk0FdVG", "vSk1xZHx", "W4/dUCodW4fN", "uCo0ASkI", "W7ZcRmkVW47cSW", "ESo2lSkFWOy", "AJzyW50K", "WOP7umkPWOS", "WOejgarG", "fZzrvmkr", "W4xdVaFdTr0", "WRiXmXrb", "W6ZcRdSSna", "W7LmmSkuwG", "W6SUahJdHq", "vCopW5ldS8keEg3cNNS3pCkXjCot", "W69RWPOaaa", "WR41mWu", "w8kCWPf8", "CIf9ySoj", "W6hcPIe", "W4pdPrNdRHm", "hmkjWP0GW4m", "itKyrmkg", "qCoCiCoFWPG", "W6vkn8kyqa", "sCoLomknWPS", "WOuvx13cI8o0dSoEWO4l", "WRvOW77dT8ok", "W7RcNCoDuZG", "ACozWO5wta", "umoyWO5ftW", "WPL3B8kVWRG", "r8oMFSkeAq", "W480etnR", "W7dcSmowW4v5", "WOj7cfFcSG", "W6TJWOqwgG", "ds1tzq", "WRvOW6ldU8oF", "W6NcGauYiq", "W6PrjmkCwG", "W63dRd3cK8kP", "FmkUW5RcMmkT", "WOdcPqnwWP8", "WRfWchNcMa", "W63dNalcLCkV", "WRBdKCoaW5v7fbO", "WP0/WRdcNWK", "WOPZCSkIWQO", "cCkeWPW1W6a", "W4pdQCk8gmoJ", "W75cmSoDqa", "aSkoWOtcRSoY", "W67dSCosW4f6", "aCksWO7cSmoe", "tSoYkCkjWOW", "uSk6W5ZcHCk4", "as5WW4jg", "tmoHAmkPDq", "W4FdVSkN", "W7NdMYdcTNi", "amk4WP8JW6C", "WQLDE8kPWOS", "W69rlSkqAW", "pSomWPeqWOG", "W5jmdGZcRa", "WPhdT8k/WR7cOq", "W7e0WR7cPSkFWQ3dMSorshfFfmoG", "WP1GwSkMWQ0", "WOlcUWO", "W6VcUCohur4", "n8kzW6jvyG", "WQaXpqfF", "W77cVmoewIi", "WRCInrbM", "rmk1cZfD", "W4xdICkYhmo6", "W7VcLbqYqG", "vN5zkmo8", "W7RcO8oBFcq", "W4PXadjS", "FJvt", "iZ8d", "n8kFW6jqxW", "imkZWP3cLq", "BNPuoW", "wCkpWO19fG", "WQLOW6/dQG", "jSkOWP3cIsK", "yCk6W47cLq", "wb1xW7jTp8kn", "gmkDWOm4", "imkeW6HF", "fd9PW4C", "WPOeWP4pzW", "W7ZdHZZcMCk4", "WOZcGSkrW40t", "W5aJsaxdICkDBMG4zmkE", "WOtdNCk/WOdcTW", "W7xcTColsW", "W7TVWP0wcG", "rXBdVCk7WOC", "EmoyWP8", "eqfrC8kn", "W4SJdcG", "W5tdVSk3j8oX", "rSksW6/cNCk6", "smkjWPS", "l8o6WOe6WPO", "W5tdUXZdVHW", "W43dTWFdSqS", "iMbsWR/cGYJcVSoR", "W4xdQmkGk8o7", "W5tdUSk+ga", "WQ54W6ddQSof", "lsas", "W5bigqZcJa", "W5ddUmoAW5z9", "W5tdSSk8bSoG", "W73cSKnEW6m", "l2mEWOj0nmkomb0cW4RcJa", "W57dOrJdUH8", "n8ktWPpcKZm", "zCk6W5VcL8k4", "W58VrqpdJ8oGe0aTw8k8aSk5", "gI1ayCoE", "ySk6W4u", "wSo4lSkfWPS", "jmkKWOdcJJW", "W4bmabK", "WRf/W6pdRa", "W7ZcOSonxJG", "tGvavSo0", "ltT3W4rv", "W7lcTCoCxIG", "yu9fimoT", "WOTOuwi+W5uTWPVcJ1NcH8oOAq", "jSkGWP/cLW", "zCk6W4/cMmo+", "xdPGWPNcNW", "DmkSW5lcJ8k6", "bmo4nKxdIW", "W7dcO8obsYu", "WOf/ca", "WPanWPWsCq", "a8kzWQtcRCo0", "W6VcUYOOiW", "W6ZdQJtcImkU", "W4xcSHddSr8", "WOvOgvFcIW", "WRe+jdX3", "v8kXdhrq", "wSoBgmovWOa", "zSo4W4ddNMnEWO/dUcixjCkdWO0", "W5BdPWxdRX4", "BrJcQCk2W44", "qGpdQa", "fCosk0tdIa", "e35NW5ze", "vCoWBW", "AdPfW5OX", "W67dNd7cKCko", "DXbgWOZcIG", "WQZdOmkCcxPwW48fcNlcIua", "WRquWPWpAW", "FmkUW40", "W480dt9+", "aYPHW5n9", "W4pdKZpcU1u", "WPOjWPexBG", "W7xcTLniW70", "z8kQW7hcLmkO", "W6a9fNhdLa", "W5/dRahcR8kJ", "r8oGfmoEWPq", "WQ8GlN3cKa", "D8kRW4K", "WPWSWPupyW", "W68QhxFdLa", "W7dcVSo8ucC", "W6TJWOyDgG", "W4KWecLK", "WPjZevpcJa", "EWH6C8oy", "W4FdOGxdRXC", "W6BdIcJcOq", "BZzzW4CR", "W6X5WOGuda", "nCkKWQxcJI4", "trXFW4uy", "xSoIl8kjW48", "WP0eWOqEyq", "rmklWOPVgW", "WQv/W6pdS8oP", "WOpdTCkF", "W6RdVCoqW5D9", "W4hdVWm", "W500fZ9U", "nZDWW59K", "W6/dUCodW4fN", "js4w", "W5pcUCoEwIi", "WPj7euBcSG", "WPxdGmkOWPZcSa", "W5fEhGJcIa", "ECkRWOJcGSk+", "pSoiWPe+WP4", "fZ93WPDs", "WP09mrz3", "DtXe", "W5RdLGVdSX0", "dCkUWORcRCoq", "cSkieJZcKq", "emkDWO/cOSod", "WOpdRmko", "W7dcPvvmW5O", "zCkSW4NcG8k0", "Dt9gW50X", "r8oDgW", "WOxcTGvsWRG", "rSotbSoyWPy", "WOBcPbvwWOW", "cmobix7dLa", "WPxdMSkMgCoHsCoX", "amkzWP/cPSou", "W7RcTmoHuI0", "AJzMW500", "FmobWO5gsW", "aSkPWPpcLd8", "WPldH8kgW4qw", "W6lcICkOW43cNW", "BcfGCmor", "W6hcI8kKW5RcUa", "W7XVWOChda", "AGL2DSoo", "WOVdU8kB", "WOtdPCkOWPBcGa", "yszmWOO", "WOtcLmkwW68F", "WPP3s8kIWRO", "WPxcSIPEWP0", "W5BdHWxdSW4", "WPBcUqi", "W6i7eG", "W77cRg8LpG", "omoBWPOT", "wJbMA8oj", "imkeW6Puwa", "W6VcSCoftW", "W5CItGlcM8kZyMODCG", "W5vkca", "W6RdVCouW4nS", "W6FdTCobW4fQ", "W5lcRCkuW6tcLq", "wSoBgSoEWOa", "mCkGW7jDxW", "W4xdTCk2g8oG", "W73dQWddNX4", "WOxdVSk+", "WPfOW7/dQ8oa", "f8oEkK/dIa", "W4ZdUWxdTqe", "WR7dKL9NuCoWb33cQSkbb8kCbmk6", "rCk+cZfm", "WReIaXH2", "j8omWOe+WO4", "W6NcRIO", "W44WehPR", "W7VdOXddJb8", "cJTNW4m", "WRNcN2dcRmkcCKifW6i", "dSojkw7dNG", "DtHcWOZcOG", "W7JdNdtcJmkQ", "CXPhW5uL", "W7b+W4KvbG", "E8k+W5G", "xCojW5ldTSkhEwJdHMuyh8kcoW", "n8kVWOBcQJ8", "WRDKW6pdSmo+", "r8k1BSkMCq", "WOtdUCk3WPBcTW", "W6dcTLDi", "mJ9QW5br", "W5G9dZ9J", "lmkPW6nxra", "WReaiH5M", "WOT/cfFcMW", "W4FcHHWgbW", "W59JW6ddO10SWPhdG05hWPW", "iSkeW6nura", "t8oFomovWOa", "vSo8ySkPCG", "kComWPSRWO8", "W6ZcQdSOgG", "C8kCW4FcISkL", "ChzAkSoQ", "WO/cVHbsWOu", "sSoxaCovWPa", "n8k1WPpcGZS", "nmkGWPhcGGK", "r8oFemodWOC", "vmoWy8kICG", "vCk7W4JcK8kQ", "WPldOmknjLy", "W6ddJZxcTIe", "W69pimkjyW", "WO1IWQZdSSof", "W6hcMSkyW4hcUa", "umkkDxRdSGhcJCk+W74", "W5bKWQOsgq", "W7ZdIZxcS8kP", "WOOsWPeCzW", "WRlcJ8kkW54d", "cSkegr3cGa", "WO0eWPq0ya", "WPGMmNRcMa", "W4tdVSkNdCoW", "W7VcTCoCwI8", "W7ZcMLvzW48", "W67dSCof", "W69ciSkyFq", "WO7dRCkBo1G", "Dmk8W47cVSk2"];
  return ui = function() {
    return i;
  }, ui();
}
function ie(i, n, t, e, A) {
  return fA(t - 698, i);
}
function OA(i, n, t, e, A) {
  return fA(i - -698, A);
}
var B0, Q0;
class RE extends NE {
  constructor(t) {
    function e(g, a, s, c, I) {
      return iA(g - 4, a - 129, a - 735, c - 447, I);
    }
    function A(g, a, s, c, I) {
      return iA(g - 421, a - 391, c - 134, c - 416, s);
    }
    function o(g, a, s, c, I) {
      return ie(g, a - 310, s - -196);
    }
    super();
    p(this, Q0);
    p(this, B0);
    function r(g, a, s, c, I) {
      return OA(I - 1618, a - 30, s - 444, c - 174, a);
    }
    [this[A(-79, -227, "jX6T", -105) + r(1568, "^xIk", 1429, 1350, 1541) + e(703, 571, 508, 613, "54Bn") + r(1487, "Wpdo", 1456, 1775, 1596)], ...this[e(548, 612, 727, 424, "[@l8") + o("54Bn", 853, 854) + r(1248, "jX6T", 1278, 1393, 1444) + e(877, 792, 922, 932, "K*0f") + "se"]] = t;
  }
  async [(Q0 = iA(24, 33, 112, 241, "jA4u") + ie("A8dc", 1138, 1109) + Le(-392, "K*0f") + iA(216, 2, 17, 25, "fLcC"), B0 = iA(-173, -378, -159, -358, "xALX") + iA(100, -168, -97, -289, "A8dc") + ie("c28@", 1570, 1433) + ie("rI^g", 1273, 1294) + "se", OA(-286, -125, -217, -207, "TqTr") + OA(-37, -243, 95, -130, ")(3V") + LA(668, "6&#d", 781, 651))]({ onCaptureData: t, sessionToken: e, video: A }) {
    const o = t[d(-262, -208, "A5%m", -392)](_[s("Mw#L", 1035, 1076, 1304, 1142) + C(126, -11, 114, "SQ#H") + x(290, 207, "TqTr", 379, 158) + "S"]);
    if (!o) {
      if (s("vhe)", 1478, 1756, 1411, 1562) === d(-464, -411, "Mw#L", -586)) return;
      throw new b(d(-329, -405, "a]wc", -396) + x(60, 403, "Wpdo", 272, 207) + d(-320, -252, "&#^z", -272) + C(353, 336, 236, "%(tk") + d(-175, -213, "6&#d", -205) + C(420, 245, 491, "ibyY") + d(-171, -239, "Q67Y", -440) + a(808, 706, "A9EX", 1069, 849) + d(-444, -494, "[@l8", -303));
    }
    const r = cc(t);
    if (r[d(-114, -272, "Mw#L", -483) + "h"] === 1 * -9923 + 5433 + 4490 * 1)
      throw x(193, -63, "iHi1", 41, 148) === C(280, 428, 220, "wrUC") ? new _0x3f948f(d(-725, -581, "ibyY", -418) + d(-740, -570, "jX6T", -631) + a(1007, 849, "^5@5", 916, 803) + x(106, 360, "MH5Y", -21, 143) + x(-129, -135, "BJgv", -127, 41) + C(63, 156, 15, "HZPX") + d(-293, -367, "54Bn", -349) + x(-165, -105, "jX6T", 116, 28) + x(203, 180, "%(tk", 254, 183)) : new b(C(180, 101, 104, "&#^z") + d(-344, -434, "BJgv", -508) + C(399, 421, 561, "jX6T") + C(195, 357, 247, "px3u") + s("xALX", 1083, 1333, 947, 1158) + d(-210, -431, "^xIk", -251) + d(-366, -371, "!$Pb", -366) + d(-488, -529, "N!25", -635) + a(992, 782, "%(tk", 806, 996));
    const g = {};
    g[d(-305, -266, "Q67Y", -428) + d(-317, -211, "IqJb", -284) + s("xALX", 1404, 1530, 1259, 1348) + s("A9EX", 1284, 1198, 1568, 1394) + a(1247, 976, "N!25", 1298, 1077) + C(274, 108, 381, "DAN9")] = r;
    function a(l, Q, f, m, y) {
      return OA(y - 1032, Q - 105, f - 100, m - 371, f);
    }
    g[x(285, 261, "A9EX", 331, 222) + a(777, 962, "[@l8", 1024, 814) + d(-225, -313, "TqTr", -294) + s("pDoV", 938, 972, 980, 1149) + d(-488, -322, "&#^z", -452) + a(1118, 1039, "jA4u", 1173, 972)] = o, g[x(-213, -23, "XeET", 123, -53) + C(342, 302, 252, "3QhQ") + "en"] = e;
    function s(l, Q, f, m, y) {
      return ie(l, Q - 79, y - 72);
    }
    const c = await this[C(22, 213, 28, "fLcC") + s("L!Ha", 1206, 1091, 1218, 1187) + a(1115, 1114, "o)Ub", 1067, 945) + a(986, 1120, "jA4u", 777, 999) + "e"](g), I = {};
    I[d(-466, -270, "koGW", -442) + s("SYn!", 1240, 1328, 1322, 1418) + s("ibyY", 1361, 1524, 1265, 1416) + x(-6, 120, "A9EX", 96, 71) + a(1007, 1032, "XKup", 955, 810) + s("px3u", 1102, 1116, 1220, 1204)] = o, I[x(35, 305, "SYn!", 47, 105) + s("BJgv", 1649, 1603, 1295, 1488) + s("Mw#L", 1339, 1539, 1373, 1344) + s("vAgC", 1307, 998, 1351, 1155) + x(330, -64, "koGW", 80, 111) + a(936, 1071, "3QhQ", 988, 1018)] = r;
    function x(l, Q, f, m, y) {
      return iA(l - 148, Q - 35, y - 181, m - 198, f);
    }
    I[C(7, -117, 67, "IqJb") + d(-585, -580, "ibyY", -419)] = c, I[x(-169, 83, "wrUC", -24, 51)] = A;
    function C(l, Q, f, m, y) {
      return LA(l - 451, m, f - 372, l - -386);
    }
    const E = await this[s("jA4u", 1211, 1378, 1178, 1342) + C(168, 38, -6, "vhe)") + s("iHi1", 1281, 1148, 1360, 1288) + C(89, -97, 35, "vhe)")](I);
    function d(l, Q, f, m, y) {
      return OA(Q - -278, Q - 100, f - 403, m - 128, f);
    }
    return this[x(-64, 123, "CEuz", 41, 139) + a(1019, 856, "SYn!", 745, 860) + x(236, 344, "MH5Y", 390, 310) + a(1183, 1173, "jA4u", 1204, 1127)](E);
  }
  async [OA(-312, -477, -302, -382, "A4NV") + Le(-309, "fLcC") + OA(23, -146, 244, 153, "fLcC") + iA(-289, -53, -199, -148, "[@l8") + "e"]({ livenessChallengeOnCaptureData: t, passiveLivenessOnCaptureData: e, sessionToken: A }) {
    const o = [...e[s("jA4u", 1323, 1544, 1241) + s("%(tk", 1493, 1476, 1516)][c(-378, -321, -327, "3QhQ") + f("o)Ub", 1013, 819, 912) + c(-109, -24, 69, "wrUC") + s("^xIk", 1637, 1598, 1444) + s("^xIk", 1299, 1221, 1375) + c(-269, -346, -288, "%(tk") + c(97, 7, -164, "m1zP")]], r = e[f("xALX", 854, 954, 875) + g("koGW", 1018, 951, 1042, 1094)][l(-74, "K*0f", -210) + g("&#^z", 1041, 831, 1061, 1028) + g("rI^g", 1060, 893, 901, 924)][c(58, -14, -210, "pDoV")](({ detectedObject: D }) => D);
    t[c(-176, -194, -59, "[@l8") + "ch"](({ data: D }) => {
      function w(K, gA, oA, ae, ee) {
        return l(K - 413, gA, K - 733);
      }
      function W(K, gA, oA, ae, ee) {
        return s(oA, ee - -1297, oA - 82, ae - 414);
      }
      function J(K, gA, oA, ae, ee) {
        return f(K, gA - 147, oA - 330, ae - 368);
      }
      function Y(K, gA, oA, ae, ee) {
        return c(K - 259, ee - 202, oA - 75, K);
      }
      function z(K, gA, oA, ae, ee) {
        return c(K - 288, K - 1369, oA - 236, gA);
      }
      if (Y("ibyY", -214, 118, 177, 2) !== Y("SYn!", -41, -61, 292, 114)) throw _0x1abe7f[z(1204, "A4NV", 1292) + z(1291, "jA4u", 1467)](_0x3f851d);
      {
        o[z(1365, "c28@", 1313)](...D[Y("fLcC", 171, -154, -75, -52) + Y("jX6T", -38, 28, 229, 87)][w(743, "TqTr") + J("jX6T", 1306, 1328, 1479) + Y("N!25", 22, -21, -303, -172) + Y("%(tk", -55, 137, 229, 160) + w(677, "vhe)") + W(378, -27, "xALX", -42, 169) + J("xALX", 1387, 1199, 1329)]);
        const K = D[Y("CEuz", -162, 195, -207, -2) + J("vhe)", 1481, 1261, 1309)][J("A9EX", 1481, 1826, 1679) + W(115, 320, "Mw#L", 332, 220) + z(1060, "SQ#H", 1036)][z(993, "A8dc", 1044)](({ detectedObject: gA }) => gA);
        r[w(819, "A8dc")](...K);
      }
    });
    function g(D, w, W, J, Y) {
      return OA(Y - 1207, w - 84, W - 111, J - 77, D);
    }
    const a = $C();
    function s(D, w, W, J, Y) {
      return iA(D - 240, w - 442, w - 1551, J - 496, D);
    }
    function c(D, w, W, J, Y) {
      return LA(D - 385, J, W - 371, w - -800);
    }
    const I = await AB(), x = await this[s("o)Ub", 1404, 1288, 1241) + c(-22, -132, -327, "A8dc") + g("koGW", 905, 915, 1042, 933) + s("vhe)", 1633, 1743, 1506) + "ls"](a, I), { cameraProperties: C, croppedImageWithPosition: E } = e[g("^5@5", 1204, 1104, 1299, 1291) + c(-342, -298, -342, "TqTr")], d = await this[f("HZPX", 1077, 1062, 1236) + g(")(3V", 716, 716, 1031, 890) + c(18, -189, -9, "IqJb") + c(24, -29, -29, "XKup") + c(-165, -229, -214, "L!Ha") + l(-326, "N!25", -251) + s("IqJb", 1273, 1154, 1164) + "on"](E);
    function l(D, w, W, J, Y) {
      return LA(D - 377, w, W - 267, W - -708);
    }
    const Q = { ...C };
    Q[g("54Bn", 1190, 1061, 1137, 1245) + c(-379, -316, -235, "IqJb") + s("iHi1", 1319, 1123, 1355) + f("c28@", 1207, 1228, 1272) + f("wrUC", 1088, 1256, 1303)] = d;
    function f(D, w, W, J, Y) {
      return Le(J - 1505, D);
    }
    Q[l(-195, "m1zP", 26) + l(-272, ")(3V", -178) + c(-241, -175, -296, "pDoV")] = x, Q[l(-187, "koGW", -77) + g("pDoV", 1085, 1093, 752, 911) + s("CEuz", 1480, 1580, 1510) + g("A8dc", 1445, 1081, 1434, 1237) + s("vAgC", 1457, 1378, 1532) + f("3QhQ", 1199, 1248, 1066) + s("px3u", 1345, 1132, 1529)] = o, Q[l(-268, "jX6T", -252) + c(-279, -89, 78, "K*0f") + s("A5%m", 1599, 1646, 1767)] = r;
    const m = Q, y = {};
    y[g("vhe)", 889, 865, 927, 872) + f("IqJb", 881, 744, 944) + "en"] = A, y[l(-305, "BJgv", -290)] = m;
    const G = y;
    return this[l(162, "wrUC", 80) + l(-453, "R@ax", -314) + l(-319, "DAN9", -130) + f("A4NV", 1052, 1208, 1059) + c(-355, -337, -186, "!$Pb") + "e"](G);
  }
  async [iA(38, -129, -21, -94, "54Bn") + OA(-217, -42, -273, -122, "koGW") + ie("SYn!", 1140, 1088) + OA(-271, -121, -348, -134, "A9EX")]({ livenessChallengeOnCaptureData: t, metadata: e, passiveLivenessOnCaptureData: A, video: o }) {
    const { MultiRangeLivenessContent: r } = WA.v4, g = this[f("fLcC", 378, 490) + f("XKup", 741, 684) + c(159, "TqTr") + I(-274, -211, "Mw#L", -210) + m(-88, -276, "A4NV")](A[a(1130, 1304, 1118, "^5@5") + a(1601, 1380, 1393, "fLcC") + "e"], A[f("CEuz", 734, 700) + f("iHi1", 413, 478)], Zg[I(86, 60, "54Bn", 55)](this[f("px3u", 746, 645) + c(21, "XeET") + m(146, 16, "vAgC") + m(-126, 37, "iHi1")]));
    function a(D, w, W, J, Y) {
      return Le(w - 1690, J);
    }
    const s = t[c(135, "6&#d")](({ data: D }, w) => this[f("Q67Y", 987, 827) + a(1446, 1286, 1504, "^5@5") + m(-38, -180, "rI^g") + f(")(3V", 662, 746) + c(195, "pDoV")](D[f("Mw#L", 679, 572) + m(3, 129, "L!Ha") + "e"], D[a(1006, 1102, 1205, "3QhQ") + m(185, 232, "N!25")], Zg[c(-62, "fLcC")](this[m(-155, 20, "%(tk") + c(33, "^5@5") + m(165, -54, "IqJb") + a(1264, 1324, 1376, "^xIk") + "se"][w])));
    function c(D, w, W, J, Y) {
      return ie(w, w - 147, D - -1143);
    }
    function I(D, w, W, J, Y) {
      return iA(D - 304, w - 23, w - -25, J - 160, W);
    }
    const x = await Promise[I(-34, 70, "[@l8", -79)]([g, ...s]), C = this[m(24, -123, "CEuz") + f("MH5Y", 790, 759) + a(1125, 1160, 1018, "koGW") + I(-466, -262, "Mw#L", -204) + I(-119, -326, "DAN9", -355) + I(61, -33, "^xIk", 165) + a(1156, 1367, 1541, "fLcC") + c(278, "MH5Y")](A[a(1175, 1215, 1423, "rTZp") + I(-3, -25, "BJgv", 50)][f("Wpdo", 1052, 862) + c(311, "IqJb") + m(-214, -372, "A8dc")]), E = t[m(-78, -39, "vhe)")](({ data: D }) => this[a(1541, 1361, 1462, "3QhQ") + c(50, "wrUC") + a(1074, 1161, 1034, "vAgC") + f("A4NV", 598, 765) + a(1251, 1311, 1224, "fLcC") + m(-55, 0, "iHi1") + a(1299, 1444, 1525, "K*0f") + m(94, -8, "BJgv")](D[m(21, 83, "koGW") + c(-5, "A5%m")][a(1215, 1202, 1163, "%(tk") + c(237, "c28@") + c(-51, "koGW")])), d = this[a(895, 1071, 975, "koGW") + a(1493, 1378, 1157, "SQ#H") + m(170, 186, "R@ax") + a(1433, 1318, 1208, "^xIk") + m(9, 134, ")(3V") + a(1203, 1156, 946, "rTZp") + "a"]([C, ...E]), l = { stepResults: x, metadata: e, multiRangeLivenessMetadata: d, video: { streamH264: o ? this[c(266, "HZPX") + m(-25, -145, "vhe)") + I(-258, -62, "^xIk", -121) + m(89, 54, "px3u") + f("3QhQ", 497, 632) + m(-72, 45, "DAN9")](o) : void 0 } }, Q = r[c(229, "A9EX") + "y"](l);
    function f(D, w, W, J, Y) {
      return Le(W - 1081, D);
    }
    if (Q)
      if (I(-299, -115, "MH5Y", -327) !== f("o)Ub", 554, 514)) {
        const { MultiRangeLivenessMetadata: D } = _0x277b2a.v4;
        if (!_0x195c80) return;
        const w = _0x27dba4[I(167, -43, "koGW", -261)]((z) => {
          const K = {};
          function gA(ge, sA, se, _A, IA) {
            return m(_A - -363, sA - 291, ge);
          }
          K[gA("A9EX", -279, -589, -484) + "r"] = z[gA("3QhQ", -453, -568, -419) + ee(530, 169, "54Bn", 444, 322) + gA("SYn!", -314, -189, -255)][gA("SQ#H", -360, -360, -487) + oA(1079, "Wpdo")], K[rt(367, "[@l8", 547, 519) + rt(548, ")(3V", 550, 411) + oA(1024, "SYn!") + gA("SYn!", -456, -441, -350) + Io(111, -14, -42, -54, "SYn!") + oA(938, "iHi1") + "o"] = z[rt(456, "54Bn", 645, 762) + ee(72, 112, "o)Ub", -74, 82) + oA(1085, "N!25")][oA(1272, "SYn!") + oA(931, "A5%m")];
          function oA(ge, sA, se, _A, IA) {
            return f(sA, sA - 266, ge - 475);
          }
          const ae = {};
          ae[gA("Q67Y", -250, -198, -259) + gA("XeET", -332, -614, -508)] = K;
          function ee(ge, sA, se, _A, IA) {
            return I(ge - 445, IA - 216, se, _A - 131);
          }
          function rt(ge, sA, se, _A, IA) {
            return I(ge - 81, se - 773, sA, _A - 407);
          }
          ae[rt(489, "fLcC", 510, 402) + ee(133, -37, "rTZp", 312, 99) + rt(436, "L!Ha", 472, 540)] = z[oA(1097, "XKup") + ee(-40, -241, "54Bn", -188, -116)];
          function Io(ge, sA, se, _A, IA) {
            return I(ge - 115, sA - 167, IA, _A - 89);
          }
          return ae;
        }), W = {};
        W[m(-157, -259, "jX6T") + c(-48, ")(3V")] = w;
        const J = D[f("&#^z", 911, 814) + "y"](W);
        if (J) throw _0x2c809e[m(-161, -305, "&#^z") + f("A4NV", 818, 773)](J);
        const Y = {};
        return Y[a(1428, 1301, 1353, "XeET") + a(1106, 1068, 1174, "54Bn")] = w, D[m(-139, -66, "DAN9") + "e"](Y);
      } else throw b[m(-193, -133, "o)Ub") + a(1468, 1480, 1589, "iHi1")](Q);
    function m(D, w, W, J, Y) {
      return ie(W, w - 444, D - -1292);
    }
    const y = r[a(1187, 1081, 1102, "IqJb") + "e"](l), G = {};
    return G[I(-275, -331, "&#^z", -314) + c(319, "R@ax") + a(1211, 1151, 954, "IqJb") + m(-30, 49, "rI^g") + f("BJgv", 641, 845)] = y, this[c(183, "%(tk") + f("o)Ub", 909, 828) + f("N!25", 644, 474) + "ge"](G);
  }
  async [OA(-309, -397, -348, -334, "fLcC") + iA(349, 230, 134, 104, "rTZp") + OA(-199, -274, -64, -6, "&#^z") + LA(623, "XKup", 917, 803) + LA(767, "SQ#H", 521, 639)](t, e, A) {
    function o(Q, f, m, y, G) {
      return iA(Q - 300, f - 340, Q - 260, y - 197, G);
    }
    const { MultiRangeLivenessStepResult: r } = WA.v4, g = await ZI(t), a = await this[c(931, "CEuz", 1169, 1244, 1067) + c(681, "XKup", 844, 805, 892) + d(-57, -224, -95, -329, "XeET") + l(1347, 1428, 1626, "6&#d") + o(90, 152, -24, 81, "!$Pb")](g), s = {};
    s[E(-237, -309, -111, -222, "A8dc")] = a, s[l(1489, 1322, 1378, "wrUC") + l(1057, 1277, 1198, "fLcC") + E(-263, -52, -185, -374, "iHi1")] = e;
    function c(Q, f, m, y, G) {
      return Le(G - 1429, f);
    }
    const I = {};
    I[c(837, "%(tk", 1044, 783, 940)] = s, I[o(9, 174, 62, 60, "L!Ha") + o(195, 82, 305, 10, "jX6T") + d(-161, -372, -474, -389, "vhe)")] = A;
    const x = I, C = r[c(918, "XeET", 1112, 1250, 1140) + "y"](x);
    if (C) {
      if (c(1079, "pDoV", 1032, 998, 1128) === c(732, "koGW", 1020, 949, 946)) throw b[o(280, 439, 446, 385, "3QhQ") + l(1597, 1625, 1465, "jX6T")](C);
      {
        const { MultiRangeLivenessMetadata: Q } = _0x55f959.v4;
        if (!_0x484479 || _0x47c81c[c(987, "m1zP", 916, 1056, 1118) + "h"] === 9629 + -1412 * -1 + -181 * 61) return;
        const f = _0x4822ea[l(1367, 1347, 1529, "pDoV") + "ap"]((D) => (D == null ? void 0 : D[o(-44, 76, -53, -112, "!$Pb") + d(126, -63, 139, -4, "o)Ub")]) ?? []), m = {};
        m[d(46, -128, -65, -35, "XKup") + l(1074, 1184, 1098, "xALX")] = f;
        const y = Q[E(-61, 2, -108, -52, "Mw#L") + "y"](m);
        if (y) throw _0xc0e1cb[E(183, 10, -26, 116, "vAgC") + c(754, "pDoV", 1e3, 1004, 926)](y);
        const G = {};
        return G[o(37, -164, 21, 190, "jX6T") + E(-244, -261, -210, -399, "CEuz")] = f, Q[c(766, "TqTr", 1075, 837, 861) + "e"](G);
      }
    }
    function E(Q, f, m, y, G) {
      return LA(Q - 75, G, m - 245, m - -783);
    }
    function d(Q, f, m, y, G) {
      return OA(f - -40, f - 40, m - 237, y - 412, G);
    }
    function l(Q, f, m, y, G) {
      return ie(y, f - 347, f - 137);
    }
    return r[d(-112, -9, 200, -124, "[@l8") + "e"](x);
  }
  [iA(276, 147, 100, 238, "SYn!") + iA(93, -94, 54, 261, "IqJb") + LA(578, "3QhQ", 287, 433) + LA(836, "^xIk", 840, 619) + iA(54, 118, -17, 77, "koGW") + Le(-513, "m1zP") + LA(622, "ibyY", 502, 700) + iA(-146, 90, -78, 51, "K*0f")](t) {
    const { MultiRangeLivenessMetadata: e } = WA.v4;
    function A(C, E, d, l, Q) {
      return ie(d, E - 474, l - 243);
    }
    function o(C, E, d, l, Q) {
      return ie(Q, E - 281, d - -624);
    }
    if (!t) {
      if (g(941, 724, "Mw#L", 879, 814) !== s(486, "A8dc", 886, 708)) throw _0x282ae1[g(966, 1202, "koGW", 1107, 995) + s(619, "rTZp", 714, 650)](_0x1486e0);
      return;
    }
    const r = t[s(702, "%(tk", 539, 725)]((C) => {
      function E(m, y, G, D, w) {
        return c(m - 151, D - 107, G - 344, D - 355, m);
      }
      function d(m, y, G, D, w) {
        return g(m - 175, y - 43, y, D - 413, m - -733);
      }
      function l(m, y, G, D, w) {
        return o(m - 243, y - 40, y - -606, D - 133, D);
      }
      function Q(m, y, G, D, w) {
        return A(m - 212, y - 354, w, G - -678);
      }
      function f(m, y, G, D, w) {
        return s(m - 399, y, G - 293, D - 1);
      }
      if (d(284, "SQ#H", 294, 201) === d(120, "wrUC", 52, 39)) {
        const m = {};
        m[Q(902, 984, 1043, 1064, "L!Ha") + "r"] = C[d(186, "XeET", 177, 148) + d(150, "L!Ha", 58, 220) + l(213, 93, -20, "vAgC")][l(244, 219, 98, "!$Pb") + E("xALX", 926, 678, 806)], m[f(486, "iHi1", 840, 706) + Q(712, 861, 861, 1068, "3QhQ") + l(136, 184, 399, "m1zP") + E("^5@5", 628, 859, 664) + l(53, 16, 135, "SQ#H") + Q(835, 831, 898, 834, "Q67Y") + "o"] = C[f(970, "HZPX", 691, 907) + d(328, "a]wc", 121, 233) + f(1016, "R@ax", 1126, 937)][Q(599, 451, 673, 843, "DAN9") + E("px3u", 420, 549, 586)];
        const y = {};
        return y[d(212, "R@ax", 376, 405) + d(53, "3QhQ", -55, 147)] = m, y[E("A9EX", 790, 777, 833) + Q(854, 994, 970, 1046, "c28@") + d(239, "^xIk", 326, 138)] = C[d(376, "o)Ub", 424, 529) + E("IqJb", 543, 520, 599)], y;
      } else throw _0x1f91bd[f(928, "A4NV", 793, 782) + d(20, "^xIk", 190, -16)](_0x57f20f);
    });
    function g(C, E, d, l, Q) {
      return ie(d, E - 252, Q - -370);
    }
    const a = {};
    function s(C, E, d, l, Q) {
      return Le(l - 1145, E);
    }
    a[s(722, "A4NV", 828, 862) + c(401, 404, 518, 550, "XeET")] = r;
    function c(C, E, d, l, Q) {
      return iA(C - 317, E - 271, E - 664, l - 202, Q);
    }
    const I = e[o(897, 584, 793, 656, "jX6T") + "y"](a);
    if (I) {
      if (o(614, 819, 804, 641, "fLcC") !== c(679, 634, 676, 778, ")(3V")) throw b[c(856, 753, 608, 829, "Q67Y") + g(943, 784, "c28@", 1026, 978)](I);
      return;
    }
    const x = {};
    return x[o(754, 640, 771, 738, "A4NV") + s(816, "iHi1", 1115, 939)] = r, e[s(539, "TqTr", 798, 577) + "e"](x);
  }
  [LA(710, "A8dc", 453, 648) + OA(-294, -250, -213, -114, "L!Ha") + LA(336, "N!25", 565, 542) + LA(714, "%(tk", 810, 706) + OA(-39, -235, -133, -66, "TqTr") + iA(-137, -321, -207, -234, "vAgC") + "a"](t) {
    function e(C, E, d, l, Q) {
      return ie(Q, E - 406, E - -216);
    }
    function A(C, E, d, l, Q) {
      return LA(C - 80, E, d - 401, d - 14);
    }
    function o(C, E, d, l, Q) {
      return Le(d - 1083, l);
    }
    function r(C, E, d, l, Q) {
      return LA(C - 166, d, d - 417, E - -829);
    }
    const { MultiRangeLivenessMetadata: g } = WA.v4;
    if (!t || t[o(575, 567, 521, "TqTr") + "h"] === 4091 * -2 + 5 * -692 + 11642) {
      if (o(1019, 678, 851, "K*0f") !== r(-534, -381, "XeET")) return;
      {
        const C = {};
        C[o(555, 823, 636, "rTZp") + "r"] = _0x1e85a4[I("Q67Y", 1148, 1147, 1114) + o(655, 671, 555, "CEuz") + o(1051, 1107, 888, "IqJb")][I("6&#d", 1274, 1324, 1184) + r(-150, -176, "A8dc")], C[I("rI^g", 1186, 886, 1090) + A(767, "MH5Y", 727) + I("jX6T", 1206, 990, 1132) + A(406, "%(tk", 390) + o(774, 983, 834, "o)Ub") + I("54Bn", 1250, 1234, 1221) + "o"] = _0x12b221[r(-150, -253, "54Bn") + o(801, 698, 853, "rTZp") + I("&#^z", 1031, 1228, 1232)][I("Q67Y", 1166, 1216, 1020) + I("DAN9", 1013, 1078, 1095)];
        const E = {};
        return E[e(715, 849, 705, 687, "HZPX") + I("A4NV", 1322, 1174, 1164)] = C, E[e(907, 1003, 1156, 1043, "XKup") + r(126, -52, "SYn!") + I("XeET", 810, 1066, 916)] = _0x3af360[r(-390, -274, "R@ax") + I("!$Pb", 689, 812, 828)], E;
      }
    }
    const a = t[e(808, 1028, 1137, 812, "Q67Y") + "ap"]((C) => (C == null ? void 0 : C[r(-165, -252, "IqJb") + e(835, 902, 1024, 992, "A9EX")]) ?? []), s = {};
    s[r(-288, -346, "vAgC") + e(902, 976, 830, 1132, "3QhQ")] = a;
    const c = g[o(589, 454, 471, "iHi1") + "y"](s);
    function I(C, E, d, l, Q) {
      return iA(C - 137, E - 83, l - 1119, l - 134, C);
    }
    if (c)
      throw I("6&#d", 1062, 921, 987) === e(814, 990, 1004, 963, "koGW") ? b[o(741, 721, 788, ")(3V") + o(615, 685, 473, "&#^z")](c) : new _0x2fb7ac(e(1079, 1172, 966, 1102, "HZPX") + A(498, "A4NV", 517) + I(")(3V", 1086, 957, 959) + A(570, "N!25", 431) + A(337, "A8dc", 411) + r(-313, -445, "MH5Y") + o(553, 610, 494, "Wpdo") + I("vhe)", 1071, 994, 904) + e(827, 980, 1054, 1137, "XKup"));
    const x = {};
    return x[o(378, 356, 534, "L!Ha") + e(895, 1014, 902, 1167, "BJgv")] = a, g[e(1439, 1236, 1094, 1334, "K*0f") + "e"](x);
  }
}
function Cc(i, n) {
  const t = Ae(n);
  eA(() => {
    t.current = n;
  }, [n]), eA(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function FE(i, n) {
  const { handleAppStateChange: t } = HA(), e = Ge((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(H.COMPLETE), n(r, o);
  }, [n, t]);
  Cc(i, e);
}
function vE(i) {
  return i !== null && typeof i == "object" && "imageWithMetadata" in i;
}
function WE() {
  const { onComplete: i } = xI(), { handleError: n } = HA();
  function t(e, A) {
    try {
      if (!vE(e)) throw new b("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof b && n(o);
    }
  }
  FE(iI.ON_COMPLETE, t);
}
function ME() {
  const { cameraService: i } = St(), { assetsDirectoryPath: n, challengeSequence: t, sessionToken: e } = xI(), { transactionCounting: A } = os(), { analytics: o } = QC(), { phaseThresholds: r } = EI(), { handleAppStateChangeWithTransitionCheck: g, handleError: a } = HA(), [s, c] = hA();
  WE(), eA(() => {
    let x;
    async function C() {
      if (!i) return;
      const E = KI.getWorkerPath(Tx, n), d = {};
      d.type = "module";
      const l = new Worker(new URL(E, import.meta.url), d), Q = CI(l);
      x = await new Q();
      const f = new bE(), m = new Kx(Ix), y = new RE(t), G = new Px().setAssetsDirectoryPath(n).setCameraService(i).setDetector(x).setDetectionFactory(f).setPhaseThresholds(r).setDispatcher(m).setProtobuf(y).setChallengeSequence(t).setAnalytics(o).setSessionToken(e).setTransactionCounting(A).build();
      try {
        c(G), g(H.RUNNING);
      } catch (D) {
        if (D instanceof Error) {
          a(b.fromError(D));
          return;
        }
      }
    }
    return C(), () => {
      g(H.WAITING), x && x[aI]();
    };
  }, [a, i, t, n, o, e, g, r, A]);
  const I = {};
  return I.controller = s, I;
}
function LE({ children: i }) {
  const { controller: n } = ME();
  return /* @__PURE__ */ k(gx, { controller: n, children: i });
}
function OE({ initAppState: i, onError: n }) {
  const [t, e] = hA(i), [A, o] = hA(), [r, g] = hA(!1), a = Xt.Lower, s = Ae(n);
  eA(() => {
    s.current = n;
  }, [n]);
  const c = {};
  return c.redfin = a, c.appState = t, c.setAppState = e, c.error = A, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = g, c.onErrorRef = s, c;
}
function t0(i, n) {
  kt.getInstance().dispatchCustomEventOnChange(i, n);
}
function JE(i, n) {
  kt.getInstance().dispatchCustomEventOnChange(i, n);
}
function UE(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  kt.getInstance().dispatchCustomEventOnChange(i, e);
}
function YE({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = OE({
    initAppState: H.LOADING,
    onError: i
  }), s = Ge(
    (x) => {
      t0(Ne.STATE_CHANGED, { appState: H.ERROR, error: x }), a(!1), o.current(x), g(x), r(H.ERROR);
    },
    [a, o, g, r]
  ), c = Ge(
    (x) => {
      r((C) => {
        const E = typeof x == "function" ? x(C) : x;
        return t0(Ne.STATE_CHANGED, { appState: E }), E;
      });
    },
    [r]
  ), I = Ge(
    (x) => {
      c((C) => C === H.COMPLETE || C === H.LOADING && x !== H.RUNNING ? C : x);
    },
    [c]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: a,
    handleAppStateChange: c,
    handleAppStateChangeWithTransitionCheck: I,
    handleError: s,
    error: e
  };
}
function PE() {
  return Ca() ? Xa.MOBILE : Xa.DESKTOP;
}
function TE({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = hA(PE()), A = kA(() => {
    const o = {};
    for (const g of Object.keys(n)) {
      const a = n[g];
      if (a) {
        const { mapper: s, presets: c, userThresholds: I } = a;
        o[g] = s(c[t], I);
      }
    }
    return {
      getPhaseThresholds: (g) => o[g],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ k(pa.Provider, { value: A, children: i });
}
function o0(i) {
  const n = Ae(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function HE(i, n) {
  var t, e, A, o, r, g, a, s, c, I;
  return {
    confidence: { min: ((t = n == null ? void 0 : n.confidence) == null ? void 0 : t.min) ?? i.confidence.min },
    sharpness: { min: ((e = n == null ? void 0 : n.sharpness) == null ? void 0 : e.min) ?? i.sharpness.min },
    brightness: {
      min: ((A = n == null ? void 0 : n.brightness) == null ? void 0 : A.min) ?? i.brightness.min,
      max: ((o = n == null ? void 0 : n.brightness) == null ? void 0 : o.max) ?? i.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: ((r = n == null ? void 0 : n.edgeDistanceToImageShorterSideRatio) == null ? void 0 : r.min) ?? i.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: ((g = n == null ? void 0 : n.devicePitchAngle) == null ? void 0 : g.max) ?? i.devicePitchAngle.max },
    leftEye: {
      confidence: { min: ((s = (a = n == null ? void 0 : n.leftEye) == null ? void 0 : a.confidence) == null ? void 0 : s.min) ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: ((I = (c = n == null ? void 0 : n.rightEye) == null ? void 0 : c.confidence) == null ? void 0 : I.min) ?? i.rightEye.confidence.min }
    }
  };
}
function _E(i, n) {
  var t, e, A, o, r;
  return {
    confidence: { min: ((t = n == null ? void 0 : n.confidence) == null ? void 0 : t.min) ?? i.confidence.min },
    leftEye: {
      confidence: { min: ((A = (e = n == null ? void 0 : n.leftEye) == null ? void 0 : e.confidence) == null ? void 0 : A.min) ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: ((r = (o = n == null ? void 0 : n.rightEye) == null ? void 0 : o.confidence) == null ? void 0 : r.min) ?? i.rightEye.confidence.min }
    }
  };
}
function KE({
  children: i,
  livenessChallengeUserThresholds: n,
  passiveLivenessUserThresholds: t
}) {
  const e = o0(n), A = o0(t), o = kA(() => ({
    [_.PASSIVE_LIVENESS]: {
      mapper: HE,
      presets: Jx,
      userThresholds: A
    },
    [_.LIVENESS_CHALLENGE]: {
      mapper: _E,
      presets: Ux,
      userThresholds: e
    }
  }), [e, A]);
  return /* @__PURE__ */ k(TE, { thresholdConfigs: o, children: i });
}
const Yt = {};
Yt.AUTO_CAPTURE = "auto_capture", Yt.CAPTURE_FINISHED = "capture_finished", Yt.CAPTURE_STARTED = "capture_started", Yt.ESCALATION_TRIGGER = "escalation_trigger", Yt.LONG_CAPTURE_SMILE = "long_capture_smile";
const fi = Yt, At = {};
At.PALM = "palm_auto_capture", At.SMILE = "smile_liveness", At.DOCUMENT = "document_auto_capture", At.MAGNIFEYE = "magnifeye_liveness", At.EYE_GAZE = "eye_gaze_liveness", At.FACE = "face_auto_capture", At.MULTI_RANGE = "multi_range_liveness";
const jE = At, qE = async () => WebAssembly.validate(new Uint8Array([1 * 3653 + -1 * 9087 + -11 * -494, -8079 * 1 + 134 * 30 + 4156, 3978 + 3863 * -1, 1188 + -11 * 773 + 7424, 8577 + 2 * 853 + 194 * -53, 1853 + 109 * -17, -4 * 976 + 1249 * -8 + -36 * -386, 7589 + 1 * -3457 + -1 * 4132, -1289 * 1 + 8962 + -7672, -8193 + 1 * -827 + 475 * 19, -1 * -2265 + -4721 + 117 * 21, 16456 + -40 * 409, 0, -19 * -366 + -8989 + 2036, -13930 + 1 * 14053, 14637 + -7317 * 2, 1337 * 7 + -9611 * -1 + 2371 * -8, -9885 + 1 * -2638 + -202 * -62, 0, -1973 * -5 + 949 * 10 + -19345, 3593 * -1 + 7829 * -1 + 11432, 1626 + 125 * -13, -1 * 1019 + 2572 * 2 + 23 * -179, 2396 * -3 + -3544 + -1 * -10732, 3072 + -97 * 31, -538 + 538 * 1, 5126 + 1 * -4873, -15398 + -15413 * -1, 253, -2418 + -3 * -1921 + -17 * 191, 18 * 411 + 9213 + -16600]));
function VE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(6024 + 1003 * -5 + -993 * 1);
}
function ZE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = VE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function zE(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function XE(i) {
  return i > -53698 + 1 * 113698 ? ">1m" : "" + i;
}
function $E(i) {
  return i > 10 ? ">10" : "" + i;
}
const Ad = (i) => i ? i <= -277 * -2 + -1 * 4397 + 3844 ? Math.round(i * (-7 * -337 + 4281 + -6620)) / (-86 + -21 * -255 + 5249 * -1) : Math.round(i / (-17875 + 25 * 717)) * 50 : 12950 + -35 * 370;
function ed(i) {
  return i ? Math.round(i / (-13 * 601 + 125 + 10188)) * (-61 * 109 + -3 * 3039 + -9133 * -2) : -2443 + -2 * -4391 + -6339;
}
const td = (i) => i ? Math.round(i / (8851 + 257 * 11 + -11668)) * (-9662 * -1 + -1396 + -8256) : 11401 + 11401 * -1, od = (i) => Math.round(i * (9073 + 1614 * 4 + -15527 * 1)) / (-4277 + -12 * -690 + -4001);
async function nd() {
  return await qE() ? za.SIMD : za.NO_SIMD;
}
class id {
  constructor() {
    p(this, "apiKey");
    p(this, "sessionId");
    p(this, "distinctId");
    p(this, "component");
    p(this, "platform");
    p(this, "versionName");
    p(this, "applicationId");
    this.platform = "web", this.versionName = es(), this.applicationId = ts(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(fi.CAPTURE_STARTED));
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
const In = new id();
class rd {
  constructor(n) {
    p(this, "posthog", In);
    p(this, "component");
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: es(), ...n };
  }
  init(n, t) {
    const e = ZE(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, In.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    In.sendEvent(fi.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    In.sendEvent(fi.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -3248 + -53 * -66 ? td(n) : Ad(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: $E(o || -4 * 1672 + -1 * 6059 + 4249 * 3), firstHiccup: XE(ed(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class ad extends rd {
  constructor() {
    super(jE.MULTI_RANGE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(_.PASSIVE_LIVENESS), e = cc(n);
    if (!t || !e) throw new b("On capture data was not found");
    const A = zE(t.metadata.deviceName, t.metadata.facingMode), o = this.extractChallengeMetrics(e), r = t.metadata.captureProcessTime, g = r + "," + o.captureTime, a = r + o.totalCaptureTime, s = [t.metadata.averageFps, ...o.averageFps], c = od(s.reduce((Q, f) => Q + f, -4586 + 89 * -25 + 49 * 139) / s.length), I = t.detectedObject.confidence + "," + o.confidence, x = t.detectedObject.faceSize + "," + o.faceSize, C = t.resultImage.width + "x" + t.resultImage.height, E = await nd(), d = {};
    d.averageFps = c, d.camera = A, d.instructionSet = E, d.captureTime = g, d.imageResolution = C, d.confidence = I, d.faceSize = x, d.durationMs = a;
    const l = this.createSegmentation(d);
    if (po()) {
      const Q = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(l, Q);
    }
    this.posthog.sendEvent(fi.CAPTURE_FINISHED, l);
  }
  extractChallengeMetrics(n) {
    return { captureTime: n.map((t) => t.data.metadata.captureProcessTime).join(","), confidence: n.map((t) => t.data.detectedObject.confidence).join(","), faceSize: n.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: n.map((t) => t.data.metadata.averageFps), totalCaptureTime: n.reduce((t, e) => t + e.data.metadata.captureProcessTime, -1646 * 5 + -716 + -18 * -497) };
  }
  joinKeypressDetections(n, t) {
    const e = n.metadata.performanceCheckup, A = t.map((x) => x.data.metadata.performanceCheckup), o = [e, ...A], r = o.some((x) => (x == null ? void 0 : x["performance"]) === !0), g = o.reduce((x, C) => ((C == null ? void 0 : C["firstHiccup"]) !== void 0 && x.push(C.firstHiccup), x), []), a = g.length > -7699 * 1 + -3570 + 11269 ? Math.min(...g) : void 0, s = o.reduce((x, C) => ((C == null ? void 0 : C["hiccupAmount"]) !== void 0 && x.push(C.hiccupAmount), x), []), c = s.length > -914 * 1 + 8950 + -8036 ? s.reduce((x, C) => x + C, 9614 + 793 * -1 + -8821) : void 0, I = {};
    return I.performance = r, I.firstHiccup = a, I.hiccupAmount = c, I;
  }
}
const gd = new ad();
function ma(i, n) {
  const t = Ae(n);
  eA(() => {
    t.current = n;
  }, [n]), eA(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function sd({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = HA(), e = Ge((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: g } } } = o.detail;
    if (!(i && !g) && r.includes(jA.FACE_NOT_PRESENT)) {
      if (n !== H.RUNNING) return;
      setTimeout(() => {
        t(H.LOADING);
      }, 1 * 2444 + -23 * 201 + 1 * 2179), setTimeout(() => {
        t(H.RUNNING);
      }, 0);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Id(i, n) {
  const { handleFaceDetection: t } = sd(n);
  ma(i, t);
}
function ya(i, n) {
  function t(e) {
    n(e);
  }
  ma(i, t);
}
function cd(i) {
  const { appState: n, handleAppStateChange: t } = HA();
  function e() {
    n !== H.LOADING && t(H.RUNNING);
  }
  function A(o) {
    var r;
    ((r = o.detail) == null ? void 0 : r["instruction"]) === Jn.CONTINUE_DETECTION && e();
  }
  ya(i, A);
}
const Cd = () => typeof document < "u" && document.hasFocus();
function Bd(i = {}) {
  const n = Ae(i), t = Ae(Cd()), [e, A] = hA(t.current);
  eA(() => {
    n.current = i;
  }), eA(() => {
    function r(c) {
      t.current = c, A(c);
    }
    function g() {
      Promise.resolve().then(() => {
        var c, I, x, C;
        !t.current && ((I = (c = n.current).onFocus) == null || I.call(c), (C = (x = n.current).onChange) == null || C.call(x, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var c, I, x, C;
        t.current && ((I = (c = n.current).onBlur) == null || I.call(c), (C = (x = n.current).onChange) == null || C.call(x, !1)), r(!1);
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
function Qd(i = {}) {
  const { appState: n } = HA();
  Bd({ onBlur: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onFocus) == null || t.call(i);
  } });
}
function xd(i) {
  const { controller: n } = nI(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = HA();
  Qd({ onBlur: () => {
    e(H.LOADING), A(!1);
  }, onFocus: () => {
    e(H.RUNNING), A(!0);
  } }), cd(i.CONTROL), eA(() => {
    t === H.COMPLETE && (n == null || n.reset()), t === H.LOADING && (n == null || n.reset()), t === H.WAITING && (n == null || n.reset()), t === H.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function Ed(i) {
  const [n, t] = hA(), e = Ge((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  ma(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function Bc() {
  return Ed(Ne.PHASE_CHANGED);
}
function dd() {
  xd(Ne);
  const { currentPhaseName: i } = Bc(), n = {};
  n.skipOutsideOfCandidateSelection = i === _.PASSIVE_LIVENESS, Id(Ne.DETECTION_CHANGED, n);
}
const ld = Zo.div`
  position: relative;
`, ud = Zo.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function fd(i) {
  const { cameraService: n } = St(), { handleAppStateChange: t, handleError: e } = HA();
  async function A() {
    if (n) {
      t(H.LOADING);
      try {
        await n.switchCamera(), t(H.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(b.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    var g;
    ((g = r.detail) == null ? void 0 : g["instruction"]) === Jn.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  ya(i, o);
}
const hd = (i) => i === k0.CONTROL ? !Ca() : !0;
function Qc(i) {
  const { cameraService: n } = St(), { isCameraReady: t } = HA(), [e, A] = hA(), o = kA(() => {
    const c = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return c ? e ?? c === "user" : e ?? hd(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function g() {
    A(void 0);
  }
  function a(c) {
    var I;
    switch ((I = c.detail) == null ? void 0 : I["instruction"]) {
      case Jn.TOGGLE_MIRROR:
        r();
        break;
      case Jn.SWITCH_CAMERA:
        g();
        break;
      default:
        return;
    }
  }
  ya(i, a);
  const s = {};
  return s.shouldCameraMirror = o, s;
}
function pd(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  eA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, JE(i, A);
  }, [t, e, i]);
}
function md(i) {
  const { cameraResolution: n } = St(), { shouldCameraMirror: t } = Qc(i.CONTROL);
  fd(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, pd(i.CAMERA_PROPS_CHANGED, e), eA(() => () => {
    kt.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const yd = Zo.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Dd = Zo.div`
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
function wd() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const bd = aa(
  ({ detectionDetails: i, isImageMirror: n }, t) => wd() ? (console.log(i), /* @__PURE__ */ k(fe, { children: [
    /* @__PURE__ */ k(yd, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ k(Dd, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function kd({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = St(), { redfin: r } = yi(), g = Ae(null);
  if (eA(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, xC(g.current);
    const d = Qi(o), l = pC(o);
    Cr(g.current, d, "lime"), Cr(g.current, l, "blue"), Zx(g.current, i.processedImage.detection), Do(g.current, i.processedImage.detection.leftEye.center, "cyan"), Do(g.current, i.processedImage.detection.rightEye.center, "cyan"), Do(g.current, i.processedImage.detection.mouth.center, "cyan"), zx(g.current, i.processedImage.detection, o);
    const Q = e.edgeDistanceToImageShorterSideRatio;
    if (LC(Q)) {
      const f = jI(
        o,
        Q.min,
        d
      );
      Cr(g.current, f, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: s,
    processedImage: { detection: c, instructionCode: I, invalidValidators: x, isEscalated: C }
  } = i, E = {
    Confidence: c.confidence,
    Brightness: c.brightness,
    Sharpness: c.sharpness,
    "Face size": c.faceSize,
    "L eye conf / status": `${c.leftEye.confidence} / ${c.leftEye.status}`,
    "R eye conf / status": `${c.rightEye.confidence} / ${c.rightEye.status}`,
    "Mouth conf / status": `${c.mouth.confidence} / ${c.mouth.status}`,
    "Detection time": s,
    "Avg FPS": a,
    Instruction: I,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": x,
    "Component version": "8.0.1",
    "SAM version": n,
    "Escalated instruction": C,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ k(
    bd,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: E,
      isImageMirror: t
    }
  );
}
function Sd() {
  return nI();
}
function Gd() {
  const [i, n] = hA(void 0), t = Ge((A) => {
    n(A.detail);
  }, []);
  Cc(Ne.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Nd = aa(function(n, t) {
  const { detectionData: e } = Gd(), { controller: A } = Sd(), { phaseThresholds: o, thresholdsPreset: r } = EI(), { appState: g } = HA(), { shouldCameraMirror: a } = Qc(Ne.CONTROL), s = A == null ? void 0 : A.getCurrentDetectionName();
  if (s === void 0 || g !== H.RUNNING)
    return null;
  const c = s !== _.PASSIVE_LIVENESS ? o[_.LIVENESS_CHALLENGE] : o[s];
  return /* @__PURE__ */ k("div", { ref: t, children: /* @__PURE__ */ k(
    kd,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: _I,
      shouldCameraMirror: a,
      thresholds: c,
      thresholdsPreset: r
    }
  ) });
});
function Rd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Fd(i, n) {
  const [t, e] = hA(!1), A = () => e((g) => !g), o = "" + t;
  ao(() => {
    function g() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, I.observe(i.current, x), I;
    }
    function a() {
      var C;
      if (!((C = i.current) != null && C["parentElement"])) return;
      const I = new MutationObserver((E) => {
        E.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), E.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var f;
            Q !== (n == null ? void 0 : n.current) && ((f = Q.parentElement) == null || f.removeChild(Q));
          });
        });
      }), x = {};
      return x.childList = !0, I.observe(i.current.parentElement, x), I;
    }
    const s = g(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const vd = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Wd({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = Ae(null), { key: o } = Fd(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: vd, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function Md({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = mC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    Wd,
    {
      cutOut: i || /* @__PURE__ */ k(Rd, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Ld({ debugLayerRef: i }) {
  const { appState: n } = HA(), { cameraResolution: t } = St(), { redfin: e } = HA(), { currentPhaseName: A } = Bc(), o = t && e === Xt.Lower && A === _.PASSIVE_LIVENESS, r = n !== H.RUNNING;
  return o ? /* @__PURE__ */ k(
    Md,
    {
      fullOverlay: r,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Od({ children: i }) {
  const n = Ae(null);
  return /* @__PURE__ */ k(fe, { children: [
    /* @__PURE__ */ k(Ld, { debugLayerRef: n }),
    i,
    /* @__PURE__ */ k(Nd, { ref: n })
  ] });
}
function Jd() {
  const { videoRef: i } = St(), { isCameraReady: n } = HA(), { shouldCameraMirror: t } = md(Ne);
  return /* @__PURE__ */ k(Od, { children: /* @__PURE__ */ k(
    ud,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: lC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Ud(i, n) {
  eA(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      UE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function Yd({ children: i }) {
  const n = Ae(null);
  return Ud(n, Ne.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(ld, { ref: n, children: i });
}
function Pd() {
  return dd(), /* @__PURE__ */ k(Yd, { children: /* @__PURE__ */ k(Jd, {}) });
}
function Td({ configuration: i }) {
  return i ? /* @__PURE__ */ k(TQ, { target: i.styleTarget, children: /* @__PURE__ */ k(ax, { configuration: i, children: /* @__PURE__ */ k(KE, { children: /* @__PURE__ */ k(NB, { children: /* @__PURE__ */ k(
    MB,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: LB.MULTIRANGE,
      children: /* @__PURE__ */ k(
        YC,
        {
          value: YE({
            onError: i.onError
          }),
          children: /* @__PURE__ */ k(UC, { analytics: gd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ k(uB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ k(LE, { children: /* @__PURE__ */ k(v0, { children: /* @__PURE__ */ k(Pd, {}) }) }) }) })
        }
      )
    }
  ) }) }) }) }) : null;
}
kc(Td, "x-dot-multi-range-liveness", ["configuration"]);
