var xc = Object.defineProperty;
var ka = (i) => {
  throw TypeError(i);
};
var dc = (i, n, t) => n in i ? xc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var p = (i, n, t) => dc(i, typeof n != "symbol" ? n + "" : n, t), Sa = (i, n, t) => n.has(i) || ka("Cannot " + t);
var S = (i, n, t) => (Sa(i, n, "read from private field"), t ? t.call(i) : n.get(i)), U = (i, n, t) => n.has(i) ? ka("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), M = (i, n, t, e) => (Sa(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Ho, L, l0, ct, Ga, u0, h0, f0, $r, Qr, Er, p0, mo = {}, m0 = [], lc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _o = Array.isArray;
function we(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Aa(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function PA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 82 * 71 + 66 * 89 + -11694 && (r.children = arguments.length > -194 * 11 + -7580 + 9717 ? Ho.call(arguments, -19 * -247 + -6005 * -1 + 14 * -764) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return lo(i, r, e, A, null);
}
function lo(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++l0, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && L.vnode != null && L.vnode(r), r;
}
function uc() {
  var i = {};
  return i.current = null, i;
}
function le(i) {
  return i.children;
}
function xe(i, n) {
  this.props = i, this.context = n;
}
function Tt(i, n) {
  if (n == null) return i.__ ? Tt(i.__, i.__i + (13595 + 13594 * -1)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Tt(i) : null;
}
function y0(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 83 * 12 + 10 * -101 + -14 * -1; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return y0(i);
  }
}
function xr(i) {
  (!i.__d && (i.__d = !0) && ct.push(i) && !Ln.__r++ || Ga != L.debounceRendering) && ((Ga = L.debounceRendering) || u0)(Ln);
}
function Ln() {
  for (var i, n, t, e, A, o, r, a = 1557 * 1 + -3781 + 89 * 25; ct.length; ) ct.length > a && ct.sort(h0), i = ct.shift(), a = ct.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = we({}, e)).__v = e.__v + (2141 * 4 + -9737 + 1174), L.vnode && L.vnode(t), ea(n.__P, t, e, n.__n, n.__P.namespaceURI, 32 & e.__u ? [A] : null, o, A ?? Tt(e), !!(1 * 4457 + 1 * -3724 + -701 * 1 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, b0(o, t, r), t.__e != A && y0(t)));
  Ln.__r = -722 * 5 + 8236 + 2 * -2313;
}
function w0(i, n, t, e, A, o, r, a, g, s, C) {
  var I, E, c, x, d, l, Q = e && e.__k || m0, h = n.length;
  for (g = hc(t, n, Q, g, h), I = 0; I < h; I++) (c = t.__k[I]) != null && (E = c.__i == -1 ? mo : Q[c.__i] || mo, c.__i = I, l = ea(i, c, E, A, o, r, a, g, s, C), x = c.__e, c.ref && E.ref != c.ref && (E.ref && ta(E.ref, null, c), C.push(c.ref, c.__c || x, c)), d == null && x != null && (d = x), 22 * -55 + -511 * 11 + -1 * -6835 & c.__u || E.__k === c.__k ? g = D0(c, g, i) : typeof c.type == "function" && l !== void 0 ? g = l : x && (g = x.nextSibling), c.__u &= -7);
  return t.__e = d, g;
}
function hc(i, n, t, e, A) {
  var o, r, a, g, s, C = t.length, I = C, E = -796 * -11 + -4392 + -4364 * 1;
  for (i.__k = new Array(A), o = -9 * 164 + -9553 + 11029 * 1; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (g = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? lo(null, r, null, null, null) : _o(r) ? lo(le, { children: r }, null, null, null) : r.constructor == null && r.__b > -1 * -1300 + 1 * -8219 + 6919 ? lo(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (8810 + 1 * 337 + 1 * -9146), a = null, (s = r.__i = fc(r, t, g, I)) != -1 && (I--, (a = t[s]) && (a.__u |= -3919 * 1 + 1 * 8851 + -4930)), a == null || a.__v == null ? (s == -1 && (A > C ? E-- : A < C && E++), typeof r.type != "function" && (r.__u |= -15161 + -1685 * -9)) : s != g && (s == g - (6887 + 767 * 13 + -16857) ? E-- : s == g + (1 * 5862 + 2 * -3532 + -401 * -3) ? E++ : (s > g ? E-- : E++, r.__u |= 6434 + -42 * 191 + 398 * 4))) : i.__k[o] = null;
  if (I)
    for (o = 1214 * 7 + 4567 * 2 + -1102 * 16; o < C; o++) (a = t[o]) != null && 3492 + 1 * -3697 + 205 == (-2 * -2733 + -9830 + 4366 & a.__u) && (a.__e == e && (e = Tt(a)), S0(a, a));
  return e;
}
function D0(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = -6691 + -10 * -844 + 1749 * -1; e && A < e.length; A++) e[A] && (e[A].__ = i, n = D0(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Tt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -942 + 53 * 52 + 86 * -21 == n.nodeType);
  return n;
}
function He(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (_o(i) ? i.some(function(t) {
    He(t, n);
  }) : n.push(i)), n;
}
function fc(i, n, t, e) {
  var A, o, r = i.key, a = i.type, g = n[t];
  if (g === null && i.key == null || g && r == g.key && a == g.type && 6926 * 1 + 1730 + -8656 == (2 & g.__u)) return t;
  if (e > (g != null && -1 * 4621 + -2 * -3417 + -1 * 2213 == (-10643 + 2129 * 5 & g.__u) ? 1 : -3 * -1350 + 5253 + -7 * 1329)) for (A = t - (3823 * 1 + -942 + 64 * -45), o = t + (1586 + -5 * 317); A >= 0 || o < n.length; ) {
    if (A >= 443 * -22 + 9968 + -3 * 74) {
      if ((g = n[A]) && 25 * 223 + -521 * -13 + -12348 == (12313 + 13 * -947 & g.__u) && r == g.key && a == g.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((g = n[o]) && 2 * -1892 + -7016 + 45 * 240 == (-1291 * -7 + -7469 * -1 + -2 * 8252 & g.__u) && r == g.key && a == g.type) return o;
      o++;
    }
  }
  return -1;
}
function Na(i, n, t) {
  n[37 * 91 + -9847 + 6480] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || lc.test(n) ? t : t + "px";
}
function zo(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Na(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Na(i.style, n, t[n]);
    }
  else if (n[1 * -622 + -5 * 769 + 3 * 1489] == "o" && n[1] == "n") o = n != (n = n.replace(f0, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(2 * 1905 + -1 * -6423 + -1 * 10231) : n.slice(-7097 * -1 + 9 * -885 + 870), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = $r, i.addEventListener(n, o ? Er : Qr, o)) : i.removeEventListener(n, o ? Er : Qr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-48 * 191 + 24 * -138 + 3121 * 4] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 5 * 1161 + -1 * 4447 + -23 * 59 == t ? "" : t));
  }
}
function Ra(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = $r++;
      else if (n.t < t.u) return;
      return t(L.event ? L.event(n) : n);
    }
  };
}
function ea(i, n, t, e, A, o, r, a, g, s) {
  var C, I, E, c, x, d, l, Q, h, m, y, G, b, w, R, v, Y, K = n.type;
  if (n.constructor != null) return null;
  128 & t.__u && (g = !!(-5 * -1397 + 1 * -539 + -6414 & t.__u), o = [a = n.__e = t.__e]), (C = L.__b) && C(n);
  A: if (typeof K == "function") try {
    if (Q = n.props, h = "prototype" in K && K.prototype.render, m = (C = K.contextType) && e[C.__c], y = C ? m ? m.props.value : C.__ : e, t.__c ? l = (I = n.__c = t.__c).__ = I.__E : (h ? n.__c = I = new K(Q, y) : (n.__c = I = new xe(Q, y), I.constructor = K, I.render = mc), m && m.sub(I), I.props = Q, I.state || (I.state = {}), I.context = y, I.__n = e, E = I.__d = !0, I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && K.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = we({}, I.__s)), we(I.__s, K.getDerivedStateFromProps(Q, I.__s))), c = I.props, x = I.state, I.__v = n, E) h && K.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && K.getDerivedStateFromProps == null && Q !== c && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, y), !I.__e && I.shouldComponentUpdate != null && !(2 * -2642 + 3 * 355 + 4220) === I.shouldComponentUpdate(Q, I.__s, y) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(-21 * 49 + -2748 + -1 * -3778)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(z) {
          z && (z.__ = n);
        }), G = -2652 * 2 + -3906 + -4605 * -2; G < I._sb.length; G++) I.__h.push(I._sb[G]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, y), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(c, x, d);
      });
    }
    if (I.context = y, I.props = Q, I.__P = i, I.__e = !(4777 + -796 * 6), b = L.__r, w = -3 * 1163 + 721 + -2768 * -1, h) {
      for (I.state = I.__s, I.__d = !(218 * -32 + -779 + -7756 * -1), b && b(n), C = I.render(I.props, I.state, I.context), R = 17 * 482 + -9459 * 1 + 1 * 1265; R < I._sb.length; R++) I.__h.push(I._sb[R]);
      I._sb = [];
    } else do
      I.__d = !(-795 * 1 + 8 * 589 + 356 * -11), b && b(n), C = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++w < -2 * -1249 + -4466 + 1 * 1993);
    I.state = I.__s, I.getChildContext != null && (e = we(we({}, e), I.getChildContext())), h && !E && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(c, x)), v = C, C != null && C.type === le && C.key == null && (v = k0(C.props.children)), a = w0(i, _o(v) ? v : [v], n, t, e, A, o, r, a, g, s), I.base = n.__e, n.__u &= -(-4843 + -101 * 99 + -1 * -15003), I.__h.length && r.push(I), l && (I.__E = I.__ = null);
  } catch (z) {
    if (n.__v = null, g || o != null)
      if (z.then) {
        for (n.__u |= g ? 160 : 1818 + -174 * -40 + -8650; a && -151 * -29 + -1725 * 1 + -2646 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else
        for (Y = o.length; Y--; ) Aa(o[Y]);
    else n.__e = t.__e, n.__k = t.__k;
    L.__e(z, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = pc(t.__e, n, t, e, A, o, r, g, s);
  return (C = L.diffed) && C(n), 3212 + 7799 * -1 + 4715 & n.__u ? void 0 : a;
}
function b0(i, n, t) {
  for (var e = -1790 + -1873 * -1 + -83 * 1; e < t.length; e++) ta(t[e], t[++e], t[++e]);
  L.__c && L.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      L.__e(o, A.__v);
    }
  });
}
function k0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -2 * -3464 + -5 * 1223 + -813 ? i : _o(i) ? i.map(k0) : we({}, i);
}
function pc(i, n, t, e, A, o, r, a, g) {
  var s, C, I, E, c, x, d, l = t.props, Q = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 1 * 1249 + 7208 + -8457 * 1; s < o.length; s++) if ((c = o[s]) && "setAttribute" in c == !!h && (h ? c.localName == h : -17 * -137 + -2680 + 354 == c.nodeType)) {
      i = c, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(Q);
    i = document.createElementNS(A, h, Q.is && Q), a && (L.__m && L.__m(n, o), a = !1), o = null;
  }
  if (h == null) l === Q || a && i.data == Q || (i.data = Q);
  else {
    if (o = o && Ho.call(i.childNodes), l = t.props || mo, !a && o != null)
      for (l = {}, s = 9552 + 1 * 3037 + 12589 * -1; s < i.attributes.length; s++) l[(c = i.attributes[s]).name] = c.value;
    for (s in l) if (c = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = c;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        zo(i, s, null, c, A);
      }
    }
    for (s in Q) c = Q[s], s == "children" ? E = c : s == "dangerouslySetInnerHTML" ? C = c : s == "value" ? x = c : s == "checked" ? d = c : a && typeof c != "function" || l[s] === c || zo(i, s, c, l[s], A);
    if (C) a || I && (C.__html == I.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), w0(n.type == "template" ? i.content : i, _o(E) ? E : [E], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && Tt(t, -6824 + -6635 * 1 + 13459), a, g), o != null)
      for (s = o.length; s--; ) Aa(o[s]);
    a || (s = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[s] || h == "progress" && !x || h == "option" && x != l[s]) && zo(i, s, x, l[s], A), s = "checked", d != null && d != i[s] && zo(i, s, d, l[s], A));
  }
  return i;
}
function ta(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    L.__e(A, t);
  }
}
function S0(i, n, t) {
  var e, A;
  if (L.unmount && L.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || ta(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      L.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 7867 * 1 + 1003 * -5 + -2852 * 1; A < e.length; A++) e[A] && S0(e[A], n, t || typeof i.type != "function");
  t || Aa(i.__e), i.__c = i.__ = i.__e = void 0;
}
function mc(i, n, t) {
  return this.constructor(i, t);
}
function ot(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), L.__ && L.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], ea(n, i = (!e && t || n).__k = PA(le, null, [i]), A || mo, mo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Ho.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), b0(o, i, r);
}
function oa(i, n) {
  ot(i, n, oa);
}
function na(i, n, t) {
  var e, A, o, r, a = we({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > -2651 + 3469 * -2 + 139 * 69 && (a.children = arguments.length > -2278 + 2 * 136 + 2009 ? Ho.call(arguments, -1313 + 1315 * 1) : t), lo(i.type, a, e || i.key, A || i.ref, null);
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
  return n.__c = "__cC" + p0++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Ho = m0.slice, L = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, l0 = 2 * -2807 + 5974 + 8 * -45, xe.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof i == "function" && (i = i(we({}, t), this.props)), i && we(t, i), i != null && this.__v && (n && this._sb.push(n), xr(this));
}, xe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), xr(this));
}, xe.prototype.render = le, ct = [], u0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h0 = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Ln.__r = -5844 + 1373 * 7 + -3767, f0 = /(PointerCapture)$|Capture$/i, $r = 0, Qr = Ra(!1), Er = Ra(!0), p0 = -492 + 1 * 2099 + -1 * 1607;
function ia() {
  return (ia = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 8059 * 1 + 1 * -2333 + -5725; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var yc = ["context", "children"];
function wc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, a = {}, g = Object.keys(e);
    for (r = 7706 * -1 + 2460 + -2623 * -2; r < g.length; r++) A.indexOf(o = g[r]) >= 2628 + 1 * 179 + -2807 || (a[o] = e[o]);
    return a;
  }(i, yc);
  return na(n, t);
}
function Dc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = PA(wc, ia({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (-1 * 9791 + -5149 + 879 * 17 === e.nodeType) return e.data;
    if (5920 + 341 * -23 + 1924 !== e.nodeType) return null;
    var o = [], r = {}, a = 3 * -371 + -6756 + 1 * 7869, g = e.attributes, s = e.childNodes;
    for (a = g.length; a--; ) g[a].name !== "slot" && (r[g[a].name] = g[a].value, r[G0(g[a].name)] = g[a].value);
    for (a = s.length; a--; ) {
      var C = t(s[a], null), I = s[a].slot;
      I ? r[I] = PA(Fa, { name: I }, C) : o[a] = C;
    }
    var E = A ? PA(Fa, null, o) : o;
    return PA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? oa : ot)(this._vdom, this._root);
}
function G0(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function bc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[G0(i)] = t, this._vdom = na(this._vdom, e), ot(this._vdom, this._root);
  }
}
function kc() {
  ot(this._vdom = null, this._root);
}
function Fa(i, n) {
  var t = this;
  return PA("slot", ia({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Sc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Dc, A.prototype.attributeChangedCallback = bc, A.prototype.disconnectedCallback = kc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var Gc = 0;
function k(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var s = {};
  s.type = i, s.props = g, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --Gc, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var C = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return L.vnode && L.vnode(C), C;
}
class D extends Error {
  constructor(t, e) {
    super(t);
    p(this, "cause");
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
const sn = {};
sn.CONTINUE_DETECTION = "continue-detection", sn.SWITCH_CAMERA = "switch-camera", sn.TOGGLE_MIRROR = "toggle-mirror";
const On = sn;
var N0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(N0 || {}), Nc = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Nc || {}), Rc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Rc || {}), Fc = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(Fc || {}), Wc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(Wc || {});
const pe = {};
pe.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", pe.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", pe.CONTROL = "multi-range-auto-capture:control", pe.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", pe.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", pe.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", pe.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", pe.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", pe.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const ke = pe, Oe = {};
Oe.CANDIDATE_SELECTION = "candidate_selection", Oe.DOCUMENT_CENTERING = "document_centering", Oe.DOCUMENT_NOT_PRESENT = "document_not_present", Oe.DOCUMENT_TOO_FAR = "document_too_far", Oe.SHARPNESS_TOO_LOW = "sharpness_too_low", Oe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Oe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Oe.HOTSPOTS_PRESENT = "hotspots_present";
const rt = Oe, at = {};
at.isPresent = rt.DOCUMENT_NOT_PRESENT, at.isNotSmall = rt.DOCUMENT_TOO_FAR, at.isNotOutOfBounds = rt.DOCUMENT_CENTERING, at.isSharp = rt.SHARPNESS_TOO_LOW, at.isNotDim = rt.BRIGHTNESS_TOO_LOW, at.isNotBright = rt.BRIGHTNESS_TOO_HIGH, at.noHotspots = rt.HOTSPOTS_PRESENT;
const Nt = {};
Nt.LOADING = "loading", Nt.ERROR = "error", Nt.WAITING = "waiting", Nt.RUNNING = "running", Nt.COMPLETE = "complete";
const H = Nt, R0 = {};
R0.EYE_NOT_PRESENT = "eye_not_present";
const Ht = R0, OA = {};
OA.CANDIDATE_SELECTION = "candidate_selection", OA.FACE_TOO_CLOSE = "face_too_close", OA.FACE_TOO_FAR = "face_too_far", OA.FACE_CENTERING = "face_centering", OA.FACE_NOT_PRESENT = "face_not_present", OA.SHARPNESS_TOO_LOW = "sharpness_too_low", OA.BRIGHTNESS_TOO_LOW = "brightness_too_low", OA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", OA.DEVICE_PITCHED = "device_pitched", OA.LEFT_EYE_NOT_PRESENT = "left_" + Ht.EYE_NOT_PRESENT, OA.RIGHT_EYE_NOT_PRESENT = "right_" + Ht.EYE_NOT_PRESENT, OA.MOUTH_NOT_PRESENT = "mouth_not_present", OA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", OA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const KA = OA, ZA = {};
ZA.isPresent = KA.FACE_NOT_PRESENT, ZA.isNotPitched = KA.DEVICE_PITCHED, ZA.isNotSmall = KA.FACE_TOO_FAR, ZA.isNotLarge = KA.FACE_TOO_CLOSE, ZA.isNotOutOfBounds = KA.FACE_CENTERING, ZA.isNotDim = KA.BRIGHTNESS_TOO_LOW, ZA.isNotBright = KA.BRIGHTNESS_TOO_HIGH, ZA.isSharp = KA.SHARPNESS_TOO_LOW, ZA.isLeftEyePresent = KA.LEFT_EYE_NOT_PRESENT, ZA.isRightEyePresent = KA.RIGHT_EYE_NOT_PRESENT, ZA.isMouthPresent = KA.MOUTH_NOT_PRESENT, ZA.isMouthScoreNotTooHigh = KA.MOUTH_SCORE_TOO_HIGH, ZA.isMouthScoreNotTooLow = KA.MOUTH_SCORE_TOO_LOW;
var vc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(vc || {});
const EA = {};
EA.CANDIDATE_SELECTION = "candidate_selection", EA.FACE_TOO_CLOSE = "face_too_close", EA.FACE_TOO_FAR = "face_too_far", EA.FACE_CENTERING = "face_centering", EA.FACE_NOT_PRESENT = "face_not_present", EA.SHARPNESS_TOO_LOW = "sharpness_too_low", EA.BRIGHTNESS_TOO_LOW = "brightness_too_low", EA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", EA.DEVICE_PITCHED = "device_pitched", EA.LEFT_EYE_NOT_PRESENT = "left_" + Ht.EYE_NOT_PRESENT, EA.RIGHT_EYE_NOT_PRESENT = "right_" + Ht.EYE_NOT_PRESENT, EA.MOUTH_NOT_PRESENT = "mouth_not_present", EA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", EA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", EA.SMILE = "smile", EA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", EA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const zA = EA, XA = {};
XA.isPresent = zA.FACE_NOT_PRESENT, XA.isNotPitched = zA.DEVICE_PITCHED, XA.isNotSmall = zA.FACE_TOO_FAR, XA.isNotLarge = zA.FACE_TOO_CLOSE, XA.isNotOutOfBounds = zA.FACE_CENTERING, XA.isNotDim = zA.BRIGHTNESS_TOO_LOW, XA.isNotBright = zA.BRIGHTNESS_TOO_HIGH, XA.isSharp = zA.SHARPNESS_TOO_LOW, XA.isLeftEyePresent = zA.LEFT_EYE_NOT_PRESENT, XA.isRightEyePresent = zA.RIGHT_EYE_NOT_PRESENT, XA.isMouthPresent = zA.MOUTH_NOT_PRESENT, XA.isMouthStatusNotTooHigh = zA.MOUTH_SCORE_TOO_HIGH, XA.isMouthStatusNotTooLow = zA.MOUTH_SCORE_TOO_LOW;
const vi = {};
vi.NEUTRAL = "NEUTRAL", vi.SMILE = "SMILE", vi.SMILE_MANUAL = "SMILE_MANUAL";
const Be = {};
Be.CANDIDATE_SELECTION = "candidate_selection", Be.PALM_CENTERING = "palm_centering", Be.PALM_NOT_PRESENT = "palm_not_present", Be.PALM_TOO_FAR = "palm_too_far", Be.PALM_TOO_CLOSE = "palm_too_close", Be.SHARPNESS_TOO_LOW = "sharpness_too_low", Be.BRIGHTNESS_TOO_LOW = "brightness_too_low", Be.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Be.DEVICE_PITCHED = "device_pitched", Be.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const Re = Be, Fe = {};
Fe.isPresent = Re.PALM_NOT_PRESENT, Fe.isNotPitched = Re.DEVICE_PITCHED, Fe.isNotSmall = Re.PALM_TOO_FAR, Fe.isNotOutOfBounds = Re.PALM_CENTERING, Fe.isNotDim = Re.BRIGHTNESS_TOO_LOW, Fe.isNotBright = Re.BRIGHTNESS_TOO_HIGH, Fe.isSharp = Re.SHARPNESS_TOO_LOW, Fe.isNotLarge = Re.PALM_TOO_CLOSE, Fe.isTemplateExtractionQualityHighEnough = Re.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Xo = {};
Xo.TOP_LEFT = "TOP_LEFT", Xo.TOP_RIGHT = "TOP_RIGHT", Xo.BOTTOM_RIGHT = "BOTTOM_RIGHT", Xo.BOTTOM_LEFT = "BOTTOM_LEFT";
const re = {};
re.CANDIDATE_SELECTION = "candidate_selection", re.FACE_TOO_CLOSE = "face_too_close", re.FACE_TOO_FAR = "face_too_far", re.FACE_CENTERING = "face_centering", re.FACE_NOT_PRESENT = "face_not_present", re.SHARPNESS_TOO_LOW = "sharpness_too_low", re.BRIGHTNESS_TOO_LOW = "brightness_too_low", re.BRIGHTNESS_TOO_HIGH = "brightness_too_high", re.DEVICE_PITCHED = "device_pitched", re.LEFT_EYE_NOT_PRESENT = "left_" + Ht.EYE_NOT_PRESENT, re.RIGHT_EYE_NOT_PRESENT = "right_" + Ht.EYE_NOT_PRESENT;
const NA = re, Qe = {};
Qe.isPresent = NA.FACE_NOT_PRESENT, Qe.isNotPitched = NA.DEVICE_PITCHED, Qe.isNotSmall = NA.FACE_TOO_FAR, Qe.isNotLarge = NA.FACE_TOO_CLOSE, Qe.isNotOutOfBounds = NA.FACE_CENTERING, Qe.isNotDim = NA.BRIGHTNESS_TOO_LOW, Qe.isNotBright = NA.BRIGHTNESS_TOO_HIGH, Qe.isSharp = NA.SHARPNESS_TOO_LOW, Qe.isLeftEyePresent = NA.LEFT_EYE_NOT_PRESENT, Qe.isRightEyePresent = NA.RIGHT_EYE_NOT_PRESENT;
const Wa = Qe, st = {};
st.ZERO = "ZERO", st.ONE = "ONE", st.TWO = "TWO", st.THREE = "THREE", st.FOUR = "FOUR", st.FIVE = "FIVE";
const ee = st;
var nt, Z, Mi, va, _t = 0, F0 = [], X = L, Ma = X.__b, La = X.__r, Oa = X.diffed, Ja = X.__c, Ua = X.unmount, Ya = X.__;
function eo(i, n) {
  X.__h && X.__h(Z, i, _t || n), _t = 60 * -122 + 5498 + 1822;
  var t = {};
  t.__ = [], t.__h = [];
  var e = Z.__H || (Z.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function pA(i) {
  return _t = -3152 * -3 + -17 * -451 + -17122, ra(M0, i);
}
function ra(i, n, t) {
  var e = eo(nt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : M0(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], s = e.t(g, a);
    g !== s && (e.__N = [s, e.__[1 * -2078 + 1832 + -1 * -247]], e.__c.setState({}));
  }], e.__c = Z, !Z.__f)) {
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
          var c = E.__[0];
          E.__ = E.__N, E.__N = void 0, c !== E.__[0] && (I = !0);
        }
      }), o && o.call(this, a, g, s) || I;
    };
    Z.__f = !0;
    var o = Z.shouldComponentUpdate, r = Z.componentWillUpdate;
    Z.componentWillUpdate = function(a, g, s) {
      if (this.__e) {
        var C = o;
        o = void 0, A(a, g, s), o = C;
      }
      r && r.call(this, a, g, s);
    }, Z.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function oA(i, n) {
  var t = eo(nt++, 3);
  !X.__s && aa(t.__H, n) && (t.__ = i, t.u = n, Z.__H.__h.push(t));
}
function to(i, n) {
  var t = eo(nt++, 4);
  !X.__s && aa(t.__H, n) && (t.__ = i, t.u = n, Z.__h.push(t));
}
function qA(i) {
  return _t = 963 + 1 * -3043 + 2085, bA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function W0(i, n, t) {
  _t = 9562 + 1 * -9556, to(function() {
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
function bA(i, n) {
  var t = eo(nt++, 7);
  return aa(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function be(i, n) {
  return _t = 1 * 6895 + 3419 + -10306, bA(function() {
    return i;
  }, n);
}
function ue(i) {
  var n = Z.context[i.__c], t = eo(nt++, -37 * -122 + 7519 + 501 * -24);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(Z)), n.props.value) : i.__;
}
function Jn(i, n) {
  X.useDebugValue && X.useDebugValue(n ? n(i) : i);
}
function v0() {
  var i = eo(nt++, 11);
  if (!i.__) {
    for (var n = Z.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-47 * -35 + -7638 + 5993, -3628 + -102 * 51 + 8830]);
    i.__ = "P" + t[-8664 + -1083 * -8] + "-" + t[5770 + -3 * 1923]++;
  }
  return i.__;
}
function Mc() {
  for (var i; i = F0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(In), i.__H.__h.forEach(dr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], X.__e(n, i.__v);
  }
}
X.__b = function(i) {
  Z = null, Ma && Ma(i);
}, X.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Ya && Ya(i, n);
}, X.__r = function(i) {
  La && La(i), nt = -14 * 409 + -1 * -3631 + -1 * -2095;
  var n = (Z = i.__c).__H;
  n && (Mi === Z ? (n.__h = [], Z.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(In), n.__h.forEach(dr), n.__h = [], nt = 5 * 1885 + -1486 + -7939 * 1)), Mi = Z;
}, X.diffed = function(i) {
  Oa && Oa(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (1858 + 1 * -2073 + 24 * 9 !== F0.push(n) && va === X.requestAnimationFrame || ((va = X.requestAnimationFrame) || Lc)(Mc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Mi = Z = null;
}, X.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(In), t.__h = t.__h.filter(function(e) {
        return !e.__ || dr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], X.__e(e, t.__v);
    }
  }), Ja && Ja(i, n);
}, X.unmount = function(i) {
  Ua && Ua(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      In(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && X.__e(n, t.__v));
};
var Pa = typeof requestAnimationFrame == "function";
function Lc(i) {
  var n, t = function() {
    clearTimeout(e), Pa && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Pa && (n = requestAnimationFrame(t));
}
function In(i) {
  var n = Z, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), Z = n;
}
function dr(i) {
  var n = Z;
  i.__c = i.__(), Z = n;
}
function aa(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function M0(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const hi = _e(void 0);
hi.displayName = "AppStateContext";
function TA() {
  const i = ue(hi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class L0 extends xe {
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
    return ((n = this.context) == null ? void 0 : n.appState) === H.ERROR ? null : this.props.children;
  }
}
p(L0, "contextType", hi);
function O0(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function lr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function J0(i, n) {
  var t = n(), e = pA({ t: { __: t, u: n } }), A = e[1189 * -3 + 2 * 221 + 3125].t, o = e[1];
  return to(function() {
    A.__ = t, A.u = n, Li(A) && o({ t: A });
  }, [i, t, n]), oA(function() {
    return Li(A) && o({ t: A }), i(function() {
      Li(A) && o({ t: A });
    });
  }, [i]), t;
}
function Li(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-2394 + 1 * 4490 + -2096 !== n || (-2 * 813 + -1517 * -1 + 110) / n == (4547 * -1 + 3034 + 1 * 1514) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function U0(i) {
  i();
}
function Y0(i) {
  return i;
}
function P0() {
  return [!1, U0];
}
var T0 = to;
function ur(i, n) {
  this.props = i, this.context = n;
}
function Oc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : lr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, PA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(ur.prototype = new xe()).isPureReactComponent = !0, ur.prototype.shouldComponentUpdate = function(i, n) {
  return lr(this.props, i) || lr(this.state, n);
};
var Ta = L.__b;
L.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Ta && Ta(i);
};
var Jc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 1 * 2159 + 6094 + -4342;
function ga(i) {
  function n(t) {
    var e = O0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Jc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Ha = function(i, n) {
  return i == null ? null : He(He(i).map(n));
}, Uc = { map: Ha, forEach: Ha, count: function(i) {
  return i ? He(i).length : -1 * 5731 + 2 * 3489 + 1247 * -1;
}, only: function(i) {
  var n = He(i);
  if (-6749 * 1 + 37 * -235 + -3089 * -5 !== n.length) throw "Children.only";
  return n[0];
}, toArray: He }, Yc = L.__e;
L.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  Yc(i, n, t, e);
};
var _a = L.unmount;
function H0(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = O0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return H0(e, n, t);
  })), i;
}
function _0(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return _0(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function cn() {
  this.__u = 6290 + 3 * -1795 + -905, this.o = null, this.__b = null;
}
function K0(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Pc(i) {
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
function co() {
  this.i = null, this.l = null;
}
L.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 4498 + 2 * -2233 & i.__u && (i.type = null), _a && _a(i);
}, (cn.prototype = new xe()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = K0(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[1256 + -3634 * 2 + 6012] = _0(g, g.__c.__P, g.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || -83 * 49 + 1887 + 2212 & n.__u || e.setState({ __a: e.__b = e.__v.__k[8338 + -2 * -863 + -10064] }), i.then(r, r);
}, cn.prototype.componentWillUnmount = function() {
  this.o = [];
}, cn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[9675 + -1 * -5039 + -14714].__c;
      this.__v.__k[10021 + 1 * -10021] = H0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && PA(le, null, i.fallback);
  return A && (A.__u &= -33), [PA(le, null, n.__a ? null : i.children), A];
};
var Ka = function(i, n, t) {
  if (++t[1837 + -3 * 612] === t[4093 * -1 + -1509 * -3 + -1 * 434] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-6305 + 65 * 97] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 9216 + -89 * -3 + -9480; ) t.pop()();
    if (t[4371 + -115 * 38] < t[1299 + -97 * 79 + -172 * -37]) break;
    i.i = t = t[1 * 3095 + -103 * 8 + -1 * 2269];
  }
};
function Tc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Hc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    ot(null, n.v), n.v = null, n.h = null;
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
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -355 * -5 + 1787 * -1 + 1 * 13, 929 + 2 * 3409 + -3873 * 2), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, ot(PA(Tc, o, i.__v), n.v);
}
function _c(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = PA(Hc, t);
  return e.containerInfo = n, e;
}
(co.prototype = new xe()).__a = function(i) {
  var n = this, t = K0(n.__v), e = n.l.get(i);
  return e[-8656 + 70 * 141 + -1214]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Ka(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, co.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = He(i.children);
  i.revealOrder && i.revealOrder[647 * -1 + -3145 + 3792] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [282 * 2 + 648 + -1 * 1211, 1607 * 2 + -15 * 234 + 296, this.i]);
  return i.children;
}, co.prototype.componentDidUpdate = co.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Ka(i, t, n);
  });
};
var j0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 71800 + 36394 * -1 + -24697 * -1, Kc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, jc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, qc = /[A-Z0-9]/g, Vc = typeof document < "u", Zc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function zc(i, n, t) {
  return n.__k == null && (n.textContent = ""), ot(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function Xc(i, n, t) {
  return oa(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
xe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(xe.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var ja = L.event;
function $c() {
}
function AC() {
  return this.cancelBubble;
}
function eC() {
  return this.defaultPrevented;
}
L.event = function(i) {
  return ja && (i = ja(i)), i.persist = $c, i.isPropagationStopped = AC, i.isDefaultPrevented = eC, i.nativeEvent = i;
};
var Cn = {};
Cn.enumerable = !1, Cn.configurable = !0, Cn.get = function() {
  return this.class;
};
var sa, tC = Cn, qa = L.vnode;
L.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || Vc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[471 * 13 + -8650 + -361 * -7] === "o" && g[-9135 + 97 * -23 + 1 * 11367] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || Zc(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : jc.test(r) && (r = g) : g = r = "oninput" : o && Kc.test(r) ? r = r.replace(qc, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", tC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = j0, qa && qa(i);
};
var Va = L.__r;
L.__r = function(i) {
  Va && Va(i), sa = i.__c;
};
var Za = L.diffed;
L.diffed = function(i) {
  Za && Za(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), sa = null;
};
var yA = {};
yA.readContext = function(i) {
  return sa.__n[i.__c].props.value;
}, yA.useCallback = be, yA.useContext = ue, yA.useDebugValue = Jn, yA.useDeferredValue = Y0, yA.useEffect = oA, yA.useId = v0, yA.useImperativeHandle = W0, yA.useInsertionEffect = T0, yA.useLayoutEffect = to, yA.useMemo = bA, yA.useReducer = ra, yA.useRef = qA, yA.useState = pA, yA.useSyncExternalStore = J0, yA.useTransition = P0;
var q0 = {};
q0.current = yA;
var V0 = {};
V0.ReactCurrentDispatcher = q0;
var oC = V0;
function nC(i) {
  return PA.bind(null, i);
}
function fi(i) {
  return !!i && i.$$typeof === j0;
}
function iC(i) {
  return fi(i) && i.type === le;
}
function rC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function aC(i) {
  return fi(i) ? na.apply(null, arguments) : i;
}
function gC(i) {
  return !!i.__k && (ot(null, i), !0);
}
function sC(i) {
  return i && (i.base || -305 + 4379 * 2 + -8452 === i.nodeType && i) || null;
}
var IC = function(i, n) {
  return i(n);
}, cC = function(i, n) {
  return i(n);
}, CC = le, BC = fi, mt = { useState: pA, useId: v0, useReducer: ra, useEffect: oA, useLayoutEffect: to, useInsertionEffect: T0, useTransition: P0, useDeferredValue: Y0, useSyncExternalStore: J0, startTransition: U0, useRef: qA, useImperativeHandle: W0, useMemo: bA, useCallback: be, useContext: ue, useDebugValue: Jn, version: "18.3.1", Children: Uc, render: zc, hydrate: Xc, unmountComponentAtNode: gC, createPortal: _c, createElement: PA, createContext: _e, createFactory: nC, cloneElement: aC, createRef: uc, Fragment: le, isValidElement: fi, isElement: BC, isFragment: iC, isMemo: rC, findDOMNode: sC, Component: xe, PureComponent: ur, memo: Oc, forwardRef: ga, flushSync: cC, unstable_batchedUpdates: IC, StrictMode: CC, Suspense: cn, SuspenseList: co, lazy: Pc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: oC };
function Bn(i, n, t, e, A) {
  return JA(n - -844, i);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return JA(g - -890, C);
  }
  function e(a, g, s, C, I) {
    return JA(I - -63, g);
  }
  function A(a, g, s, C, I) {
    return JA(a - 771, s);
  }
  const o = i();
  function r(a, g, s, C, I) {
    return JA(a - -960, C);
  }
  for (; ; )
    try {
      if (parseInt(e(331, "%h[8", 347, 330, 341)) / 1 * (parseInt(e(359, "qWzn", 332, 349, 346)) / 2) + -parseInt(t(-499, -483, -478, "l%^R", -477)) / 3 + parseInt(t(-466, -478, -493, "%h[8", -463)) / 4 + -parseInt(r(-554, -561, -543, "6kF2", -543)) / 5 + -parseInt(r(-544, -539, -535, "LD[q", -533)) / 6 * (-parseInt(t(-470, -467, -456, "[E3N", -458)) / 7) + -parseInt(t(-485, -469, -478, "tta%", -470)) / 8 + parseInt(A(1199, 1210, "!R&%", 1196, 1212)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Un, -1565 * -85 + 1 * 841930 + -525387);
function JA(i, n) {
  const t = Un();
  return JA = function(e, A) {
    e = e - (6533 + -943 * 9 + -2356 * -1);
    let o = t[e];
    if (JA.DdCZSj === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      JA.ARVwTZ = C, i = arguments, JA.DdCZSj = !0;
    }
    const a = t[1 * 8103 + -5940 + 2163 * -1], g = e + a, s = i[g];
    return s ? o = s : (JA.AXZhgJ === void 0 && (JA.AXZhgJ = !0), o = JA.ARVwTZ(o, A), i[g] = o), o;
  }, JA(i, n);
}
function za(i, n, t, e, A) {
  return JA(t - -238, A);
}
function Un() {
  const i = ["WQrNW7pcUCoqW7WpWObXhZzD", "WPFdVCk1pH44beRdTmoxChS", "W4e2WRZcJMmkfuLcC8o5bh4", "WQHsDCo2yc99rX3dJmk5bmoD", "aIlcHmk+uq", "W7NdR8kSW7H8WRTMAq", "yMldImkPsW", "emkHumo8WOhcLg7dHwFcGHadWOy", "WQrMW7/cVmoxW71QWRfXfJ1KW68", "WPOwW6VdR8kF", "oCk+dSocW6n3e8o7W4ldHslcSmka", "CqVcUYa", "mSklthXvFquiW5egFG", "W7aukSkQnG", "xeW6dCkRWR8RoJBcTCk/", "oZLyo8k3W4pdUG8l", "f8o9pXnX", "brpdPmkOW5hdJr3dLSoKsxldIhq", "BSoCaSoDWP4iW64LhSorxCkXW7a", "nLZdStZdMmkklCovWRy", "W5tcNCowCmo6", "W79QWRjDqhaAW4RdV2qPWOnH", "W5RcTflcTK0", "eCkfumkmW4a", "W71OWRrCshKrW4hdQv4GWRvt", "W6ZcJMnqzG", "W7LvWRtcRCobx8oRWPhcVCkPfh7dGW", "WQ4bW7y", "hWuMmNm", "acyGot0", "W7ecF8ocoW", "W6y3WOxdO8ko", "WPFdUmo6uLXyoMO"];
  return Un = function() {
    return i;
  }, Un();
}
const Yn = _e(void 0);
Yn[Bn("^]Fg", -411) + Bn("oWKa", -424) + "e"] = Bn("gUp3", -417) + za(163, 155, 164, 157, "%h[8") + za(174, 186, 177, 191, "[E3N");
function Oi(i, n, t, e, A) {
  return JA(t - 920, i);
}
function pi() {
  const i = ue(Yn);
  function n(o, r, a, g, s) {
    return Oi(s, r - 271, a - -303);
  }
  function t(o, r, a, g, s) {
    return Oi(o, r - 487, a - -1053);
  }
  function e(o, r, a, g, s) {
    return Bn(g, r - 268);
  }
  function A(o, r, a, g, s) {
    return Oi(a, r - 151, g - -1014);
  }
  if (i === void 0) throw new Error(Yn[n(1061, 1048, 1049, 1064, "8wBy") + t("w8Xl", 288, 301) + "e"] + (n(1040, 1036, 1046, 1033, "5U^6") + n(1028, 1013, 1025, 1012, "e8UO") + n(1044, 1057, 1041, 1046, "0$EV") + t("l%^R", 268, 284) + A(335, 317, "3UR3", 332) + e(-163, -166, -153, "amq$") + e(-174, -163, -173, "QAYE") + t("QAYE", 296, 298)));
  return i;
}
const Pn = _e(void 0);
Pn.displayName = "AnalyticsContext";
function QC() {
  const i = ue(Pn);
  if (i === void 0)
    throw new Error(`${Pn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Ji = (i) => i.length < 4 * 813 + -2849 * 2 + -2447 * -1 ? -1121 + -1 * 7887 + 9008 : i.reduce((t, e) => t + e, 2715 + -905 * 3) / i.length, Mt = (i) => Number.parseFloat(i.toFixed(181 * -1 + -613 + 797));
function EC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(6993 + -37 * 189, 1 * -3731 + -1731 + 5462, n.canvas.width, n.canvas.height);
}
const Z0 = 5458 * 1 + 1143 + -6601 + 0.75, xC = -1 * 4919 + -391 + 5312, dC = 600, lC = "dot-auto-capture-video", mi = (i, n) => Math.min(i, n), z0 = ({ height: i, width: n }, t) => {
  const e = mi(n, i) * t, A = (n - e) / (-7 * 526 + 22 * 415 + -389 * 14), o = (i - e) / (-1 * -4622 + -13 * -758 + -14474), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, uC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = z0(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, hC = ({ height: i, width: n }) => {
  const t = mi(n, i), e = t / (337 * 1 + -8 * 667 + 2501 * 2) * (192 * -37 + -665 * -1 + 6443);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function fC(i, n) {
  const t = mi(n.width, n.height);
  return Mt(i * t);
}
function pC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, z0(t, Z0);
}
function mC(i) {
  return uC(i, Z0);
}
function yC(i, n) {
  return fC(i, n) * xC;
}
const wC = "8.0.0", DC = {
  version: wC
}, bC = -1 * -3112 + 1 * -9939 + 6836 + 0.8100000000000005, hr = {};
hr.max = 100, hr.min = 10;
const Xa = hr, kC = 7141 + 1 * 4771 + -11192, SC = 68 * -64 + -2729 + -9 * -809, GC = 85 * -58 + -2168 + 7102, X0 = "AES-CBC", $0 = "RSA-OAEP", NC = "SHA-256", RC = "image/jpeg", FC = 2341 + -15 * 489 + 5002, As = "/dot-assets", $a = "dot_embedded_bg.wasm", fr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), es = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Mt(t) : t)), ts = () => DC.version, os = (i) => new URL(i).hostname.replace("www.", ""), Ia = () => os(window.location.href) === "localhost", WC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function vC(i) {
  return i.at(-1) === "/" ? i.slice(0, -1) : i;
}
function MC(i) {
  return "" + vC(i ?? "") + As;
}
function LC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function go(i) {
  return (...n) => {
    Ia() && console[i](...n);
  };
}
const ca = { log: go("log"), warn: go("warn"), error: go("error"), info: go("info"), debug: go("debug") };
function OC({ analytics: i, crosshatch: n }) {
  if (!Ia())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function JC({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = OC(o);
  return oA(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), oA(() => {
    e && (ca.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function UC({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = pi(), { redfin: o } = TA(), r = JC({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), a = bA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ k(Pn.Provider, { value: a, children: t });
}
const pr = {};
pr.SIMD = "simd", pr.NO_SIMD = "no-simd";
const Ag = pr, mr = {};
mr.Lower = "Lower", mr.Higher = "Higher";
const Kt = mr, yr = {};
yr.MOBILE = "MOBILE", yr.DESKTOP = "DESKTOP";
const eg = yr, Tn = _e(void 0);
Tn.displayName = "TransactionCountingContext";
function ns() {
  const i = ue(Tn);
  if (i === void 0)
    throw new Error(`${Tn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function YC({ children: i, value: n }) {
  const { crosshatch: t } = pi(), { transactionCounting: e } = ns(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Kt.Higher : Kt.Lower, o = bA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ k(hi.Provider, { value: o, children: i });
}
const Hn = _e(void 0);
Hn.displayName = "CameraServiceContext";
function wt() {
  const i = ue(Hn);
  if (i === void 0)
    throw new Error(`${Hn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function uo() {
  return !1;
}
function PC() {
  return !0;
}
async function is() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ui() {
  return (await is()).filter((n) => n.kind === "videoinput");
}
function Qn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function wr(i) {
  return i.getVideoTracks()[1229 + -1 * 5451 + -1 * -4222];
}
(function(i, n) {
  const t = i();
  function e(r, a, g, s, C) {
    return UA(a - 824, r);
  }
  function A(r, a, g, s, C) {
    return UA(a - 80, s);
  }
  function o(r, a, g, s, C) {
    return UA(s - -799, r);
  }
  for (; ; )
    try {
      if (parseInt(A(525, 507, 520, "BArC", 517)) / 1 * (parseInt(e("x[]c", 1246, 1228, 1226, 1257)) / 2) + parseInt(A(519, 503, 494, "WluZ", 519)) / 3 * (-parseInt(e("UT]T", 1226, 1231, 1208, 1224)) / 4) + -parseInt(A(469, 481, 501, "Qzh&", 479)) / 5 * (parseInt(e("zumS", 1240, 1250, 1222, 1262)) / 6) + parseInt(A(515, 498, 484, "l#eb", 504)) / 7 * (parseInt(A(521, 501, 479, "Aac7", 489)) / 8) + -parseInt(e("jjM[", 1241, 1223, 1237, 1219)) / 9 + parseInt(e("7NzN", 1260, 1257, 1278, 1249)) / 10 + parseInt(A(521, 512, 503, "($Dq", 498)) / 11 * (parseInt(o("!R^7", -362, -389, -368, -382)) / 12) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_n, -284570 + -1 * 9557 + 948228);
function UA(i, n) {
  const t = _n();
  return UA = function(e, A) {
    e = e - (3 * -457 + -5572 + 7342);
    let o = t[e];
    if (UA.GFckMY === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      UA.ThTDRE = C, i = arguments, UA.GFckMY = !0;
    }
    const a = t[-2 * 4633 + 3315 + 5951], g = e + a, s = i[g];
    return s ? o = s : (UA.OAjYEL === void 0 && (UA.OAjYEL = !0), o = UA.ThTDRE(o, A), i[g] = o), o;
  }, UA(i, n);
}
function _n() {
  const i = ["WRpcU8kcW6ujW41kWPFdKh1/WO/dGG", "WO/cGSkTWQNcQa", "W6FdVCoCWRq", "W4aKeG", "FYKgb8od", "WPVdN8ofW4rM", "nG/cO1yx", "pCo0Dmk1y8o8W5bEWPiRWQrgWOW", "WPldTs1lW4jiWO42", "cu7dLCovWPKKWRupWRxdOt7cKa", "n8o8W4ejW5auj8oIvKDNmLG", "WOTuW5W5WPRdOqxdHulcKXRcGW", "BCoVWRZdGmk6", "WPRcSuBdJ0G", "jCozW4riWOr4frK", "zdFdI8kJWRCAWRbeWRu", "WPFdQCowvmkseX5TE0tcHW", "W53dHSonWQBcVW", "lsqwESo4", "fmogxmonWOddLmozW6hcPCkhWRPX", "qSk/W6/dUqTtWQPxWQhdUG", "sCkrbCkFW4m", "bbdcP3W2", "zexdVWLLW7pdLfLfW6dcGuK", "WOb4qSoAbConaM4", "W5dcGIpdQ0/dSSoOu8oRgY5IW6q", "EeBdMCk9aZZcK1xdLG89", "EmkjW6HAWOq", "sSkqW5lcGgRdR8kqySkynG", "W5DMdSkgW4zClvFcRmoeE8kCBq", "WOf9fCo4mCokaeql", "FSkHl8ofoG", "WQr3WRtdTNztnmkm", "zdhdISoSW7X9W4TdWQ4nBWjQ", "CCoRWQpdGSk+", "q8kgbmkvW7q", "CSkPWPnnWOe", "dmoDWPJcP3vXdMi", "W6FdS8ohWOxcHKDOeCoW", "dmkdfmoEWPNcR8kSWQtdTq", "W7qPWRtdNNS", "CIytmmoe", "aeNcSSkPW4TqWOmD"];
  return _n = function() {
    return i;
  }, _n();
}
function TC(i) {
  function n(a, g, s, C, I) {
    return UA(I - 676, s);
  }
  const t = new ArrayBuffer(i[A(1327, 1345, 1354, 1356, "T0wl") + "h"]), e = new Uint8Array(t);
  for (let a = -8672 + -2 * 1061 + -5397 * -2, g = i[A(1376, 1361, 1340, 1359, "9r@d") + "h"]; a < g; a++)
    A(1354, 1371, 1374, 1371, "]mHN") === A(1358, 1352, 1372, 1355, "%Pu6") ? e[a] = i[A(1359, 1358, 1375, 1356, "8*0e") + n(1094, 1081, "z&3a", 1074, 1084)](a) : _0x15a2fb[_0x309079] = _0x52dc66[o(-523, -531, -530, "CoKr", -535) + r(1067, "Aac7", 1074, 1058, 1069)](_0x4d47e2);
  function A(a, g, s, C, I) {
    return UA(g - 933, I);
  }
  function o(a, g, s, C, I) {
    return UA(I - -939, C);
  }
  function r(a, g, s, C, I) {
    return UA(I - 635, g);
  }
  return t;
}
function eA(i, n) {
  const t = Kn();
  return eA = function(e, A) {
    e = e - (-1387 * -3 + 733 * -4 + 1 * -877);
    let o = t[e];
    if (eA.BqNMFu === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      eA.jUZgZX = C, i = arguments, eA.BqNMFu = !0;
    }
    const a = t[-4857 * 2 + 5705 + 4009], g = e + a, s = i[g];
    return s ? o = s : (eA.GDqUCc === void 0 && (eA.GDqUCc = !0), o = eA.jUZgZX(o, A), i[g] = o), o;
  }, eA(i, n);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return eA(s - -325, a);
  }
  function e(a, g, s, C, I) {
    return eA(g - -396, s);
  }
  const A = i();
  function o(a, g, s, C, I) {
    return eA(a - 452, I);
  }
  function r(a, g, s, C, I) {
    return eA(g - -190, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(10, 0, "masw", 16, -15)) / 1 + parseInt(e(-42, -35, "masw", -14, -39)) / 2 + parseInt(r("&521", 187, 161, 162, 181)) / 3 + parseInt(e(-21, -41, "&521", -15, -66)) / 4 + parseInt(r("sIt3", 195, 169, 179, 218)) / 5 + -parseInt(o(834, 839, 821, 836, "bD7S")) / 6 * (parseInt(o(839, 820, 839, 831, "lzca")) / 7) + -parseInt(t("tK04", 104, 78, 103, 103)) / 8 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Kn, 120344);
async function HC() {
  const i = {};
  function n(C, I, E, c, x) {
    return eA(c - 414, x);
  }
  i[e(310, 287, 320, "t7yA")] = X0, i[g(1052, 1048, "q4%X", 1055) + "h"] = 256;
  const t = await window[g(1025, 1076, "COrc", 1053) + "o"][A("TS9c", -144, -127, -140, -153) + "e"][g(1038, 1057, "lXeO", 1057) + n(766, 775, 798, 788, "lKij") + "y"](i, !0, [n(750, 801, 801, 776, "masw") + "pt", A("lXeO", -192, -155, -163, -176) + "pt"]);
  function e(C, I, E, c, x) {
    return eA(C - -96, c);
  }
  function A(C, I, E, c, x) {
    return eA(x - -555, C);
  }
  const o = Uint8Array[n(796, 779, 789, 795, "5zNq")](Array(-4603 * -2 + 9210 + -18400)[A("bD7S", -148, -166, -172, -156)](8499 + -1 * 2155 + -6344)), r = window[s(-351, "$AF5", -393, -367) + "o"][g(1066, 1060, "Pano", 1060) + e(260, 274, 233, "cqbE") + n(815, 829, 822, 821, "mPpq")](o), a = {};
  a[A("EyHA", -184, -210, -196, -185)] = t;
  function g(C, I, E, c, x) {
    return eA(c - 669, E);
  }
  a.iv = r;
  function s(C, I, E, c, x) {
    return eA(c - -727, I);
  }
  return a;
}
async function _C(i) {
  function n(E, c, x, d, l) {
    return eA(l - 891, E);
  }
  function t(E, c, x, d, l) {
    return eA(d - -373, l);
  }
  function e(E, c, x, d, l) {
    return eA(E - 58, l);
  }
  function A(E, c, x, d, l) {
    return eA(x - 621, c);
  }
  const { iv: o, key: r } = await HC(), a = {};
  a[g("Pano", 907)] = X0;
  function g(E, c, x, d, l) {
    return eA(c - 539, E);
  }
  a.iv = o;
  const s = await window[t(-27, -4, 7, -8, "!c6q") + "o"][g("WZAv", 943) + "e"][A(984, "Vq8c", 978) + "pt"](a, r, i), C = await window[e(410, 432, 422, 396, "lzca") + "o"][e(447, 447, 458, 467, "s67S") + "e"][t(-9, 6, 2, 10, "5zNq") + e(411, 403, 387, 407, "^f7z")](n("lKij", 1278, 1280, 1251, 1264), r), I = {};
  return I[A(961, "1l2L", 985) + "ge"] = s, I[A(994, "8jx9", 1013)] = C, I.iv = o, I;
}
async function KC(i) {
}
function Kn() {
  const i = ["B8k+WR5qW7q", "hCk1gCoWW7ldS8oMW40", "BCoesHZdMW", "WR3cU8kfW61R", "W5mDW5/cII4", "W5RcNCk9l8k/", "oWD5", "WQdcR8kkW7W", "x1qH", "WP7cQSk6DCoVi8ksWORdS8kbg3O", "W5BdGb8XF8o8w0pdHmkmva", "W4aEWO4hvGedW7K", "fmkqg8oh", "amofW5RcMW", "bdf7W7RdOW", "W57cISkWdCkQ", "W4ugW57cJdS", "v1ZdSdrTpIypW7FcVh5N", "mCo1zmoAfa", "rfGMD0O", "W4xcQgXY", "W43dSSo3iCkP", "sSo1dSopW6e", "W5u/WO/cGG", "W6O3AMBcKa", "WQ7cU8kZEmkNWO5GauZdHmoVWPy", "AmolW7DNmW", "etVcH2FdMW", "WPHujCk0pKe8n8oFoSkJWQW", "tmoPfmonW6W", "fmkNW6bgW7O", "W5BdHHiXFCkAvNBdHSklEgC", "WOhcNeLYmq", "W6NdSx3dLKqjbmoskmkVWOS", "gIfQW73dRG", "k0q+WPmn", "WPHjWO4Vrq", "ubhcMSoo", "W5pcMCkKga", "f27dJmkobZ3cG8oGW6hcO8kOmq", "W7iNCq", "W7fiWRrrqq", "hthcKqa", "xwTa", "tN5sW5P1", "WQVcOmkeW7zJ", "W4yBW5D9agaJW7ZdIIT3mG", "WQRcTmk0ECkMWO9Im2hdKmoPWQe", "Can/W5boySoJWPTrW5pcSSk0", "BSoerWVdKa", "smoZgmoD", "DSk6jCo1", "vmkCWOpdHmkHyHrSW6P1W7f8", "DCkWoSo3jq", "W7xdUCk5W73cJG", "mMBcP8oSW73dVYJcUCogW6rLjG"];
  return Kn = function() {
    return i;
  }, Kn();
}
(function(i, n) {
  const t = i();
  function e(a, g, s, C, I) {
    return wA(a - -97, I);
  }
  function A(a, g, s, C, I) {
    return wA(g - 613, s);
  }
  function o(a, g, s, C, I) {
    return wA(s - 739, I);
  }
  function r(a, g, s, C, I) {
    return wA(C - 123, a);
  }
  for (; ; )
    try {
      if (parseInt(e(123, 102, 99, 91, "PiG$")) / 1 + parseInt(e(41, 75, 56, -7, "yByj")) / 2 + -parseInt(A(777, 789, "rAZa", 813, 768)) / 3 * (-parseInt(e(85, 38, 37, 60, "*sPI")) / 4) + -parseInt(A(723, 748, "w&J7", 755, 702)) / 5 * (-parseInt(A(800, 832, "fmRu", 787, 847)) / 6) + parseInt(o(960, 923, 916, 909, "M[IM")) / 7 * (parseInt(e(133, 111, 180, 85, "O&Rl")) / 8) + parseInt(r("o^cg", 384, 346, 341, 380)) / 9 * (-parseInt(A(815, 779, "A0D*", 760, 731)) / 10) + -parseInt(r("[Ssk", 310, 253, 293, 263)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(jn, -838549 + -1382449 * -1);
const jC = -223 * -33 + 42 * 167 + -11373, qC = 11243 + 1798 * -2 + -647, rs = 2 * 337 + -3087 + 2416, as = -1 * -2372 + 812 + -3184 + 0.5, gs = {};
gs[cA(285, 277, 299, "WpRA", 276)] = 1280;
const ss = {};
ss[cA(306, 332, 341, "8l]Z", 304)] = 720;
const Is = {};
Is[te(-317, -359, -294, "fH4b")] = 60;
function se(i, n, t, e, A) {
  return wA(t - -909, A);
}
function ge(i, n, t, e, A) {
  return wA(i - -987, n);
}
function cA(i, n, t, e, A) {
  return wA(A - 97, e);
}
const En = {};
En[tA("[Ssk", 636)] = gs, En[cA(264, 241, 234, "dJBv", 238) + "t"] = ss, En[tA("83F0", 644) + tA("[Ssk", 643)] = Is;
const cs = {};
cs[tA("C(KE", 656)] = 1920;
const Cs = {};
Cs[se(-718, -782, -734, -706, "ONQi")] = 1080;
const xn = {};
xn[cA(318, 255, 303, "A0D*", 302)] = cs, xn[ge(-832, "Y%dA") + "t"] = Cs, xn[se(-787, -752, -755, -739, "$qWt") + tA("B!MK", 596)] = 30;
const Bs = {};
Bs[se(-733, -666, -712, -670, "[sT5")] = 1;
const Qs = {};
Qs[ge(-795, "rAZa")] = 1;
const Es = {};
Es[tA("vA[E", 587)] = 1;
const dn = {};
dn[tA("d&6)", 614)] = Bs, dn[ge(-815, "fmRu") + "t"] = Qs, dn[tA("yByj", 627) + se(-692, -694, -681, -664, "$qWt")] = Es;
const xs = {};
xs[se(-764, -699, -746, -752, "mCN$")] = 1;
function jn() {
  const i = ["fWvCyCob", "WQXuW7NcOCke", "W58ZWOpcOGe", "r8osWPtdK8oSdf7cVa", "CmkhsxhcISoFWOhcJeT+eG", "BrqEwSkc", "WQtcT0XBWPu", "rL/dGdig", "W5GKWPlcSqW", "W5JdImk6mmkQW4ZdNCo6DSkEzmoi", "v8kiWONcMaG", "AbFdM8klWRjoD8kU", "gMnCW4bpeWxcQ8oZtd/dHa", "tLFcHZG", "wYmVWPSu", "n8okvg8", "zdtdNmkRWPO", "WRbgW7NcUSkk", "CmkgrhFcISkgWP7cLeboj8oj", "e8kyWQ3dMmos", "WROICg7cQG", "WOTEBLRcVa", "jmodWR7cSY8", "WQG/yW", "wepcIsXw", "WQVcOJqVWPZdGCkCpq", "W6jLnmkRW5C", "mSo1AHbhnJaBFLhcRG", "WRDHWOBcTSoM", "D8kQo1qw", "i8o4hWu", "WRmLF3C", "tcRcHvaz", "Av5ReSo/A2ddMmoEW5KxW7S", "y8kZW4pdPCoe", "hmo7WQlcImkh", "uSkIk0u", "eY/dN1ZcPa", "WRpcUKn8WPq", "C8k3luex", "bSksWQxdLSoh", "x8kQWO/cMa", "qmotBG", "WOf7pIC", "WQBdJ3VdQCoi", "WPWpBmkYW684aq/cRuVdGuXU", "WPCXWRDBeCo7CYLRW6NcSZO", "F8kTf8kwW5HPvmo3smkZW5BcOq", "W7JcKqxcSmkzW4xdNSkZWP7cPZVcNbK", "W693qJjs", "B8k2mvq", "WQ8XD2BcIq", "kCoLW7efW6i", "eSkbuW", "pSkaWQ3dH8o0", "A8kQWOJcIq", "W7rMsrDl", "WQ7cRMyeWPddKSkdoCk9", "Av3dV8kVBKlcVhrP", "W41skCo0", "W6iOeIOhwmkEaW", "ySkEq1qyW7buW5m", "xslcKLa", "WQ4LF0lcOG", "W61MjdtdU0fFpNCVW5esW6O", "tK/cMI5l", "kCo1W64", "WQJdJftdR8od", "l8oqbbxdLG", "WOxcHCo5", "omopqNO5", "fcNdL17cRW", "uexdKa", "W6zGkCkEW54", "n8oks3C3", "kKBdSCk8WOW", "pbq+s8kQ", "fSoCW5XxcW", "eCozW7f1bW", "WRBcPSkvW4dcMG", "x8k5WP3cGqi", "zCkUEmovlG", "iCo1wa", "aCo4W43dMvBdUgSKwmoFW6/dPtu", "qCkmWQ8bxmoPW5lcItNcQCkiW6Ti", "pCoOrSonWOa", "WRT3WPpcPG", "uCkUWPxcIW8", "FmogAtK", "FItdVCk/WOq", "lmkvWQldJCoj", "hrL1", "cNpcRxyjb2xdPa", "sSkNWPpcMW", "W7XOnCk+W5m", "WQ/cJfHmWO4", "omo7zXHmBhixzLdcR8ktW5G", "mmodWQBcTIi", "W4XSW6Oisq"];
  return jn = function() {
    return i;
  }, jn();
}
const ds = {};
ds[te(-374, -412, -372, "w&J7")] = 1;
const ls = {};
ls[cA(278, 254, 289, "RHhh", 296)] = 1;
const ln = {};
ln[cA(266, 309, 255, "RHhh", 265)] = xs, ln[cA(251, 275, 240, "$qWt", 258) + "t"] = ds, ln[se(-735, -738, -759, -778, "dIUS") + cA(334, 280, 331, "&hJT", 313)] = ls;
function te(i, n, t, e, A) {
  return wA(i - -518, e);
}
const Co = {};
function wA(i, n) {
  const t = jn();
  return wA = function(e, A) {
    e = e - (5717 + 308 * 27 + -13898);
    let o = t[e];
    if (wA.PhghVy === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      wA.UVuXrh = C, i = arguments, wA.PhghVy = !0;
    }
    const a = t[-1 * 8879 + -7512 + -443 * -37], g = e + a, s = i[g];
    return s ? o = s : (wA.VTANbd === void 0 && (wA.VTANbd = !0), o = wA.UVuXrh(o, A), i[g] = o), o;
  }, wA(i, n);
}
Co[ge(-773, "$qWt")] = En, Co[cA(272, 272, 263, "*dRl", 246) + te(-378, -335, -350, "KzJw")] = xn, Co[te(-351, -335, -376, "$qWt")] = dn, Co[tA(")okM", 607) + tA("&yjH", 599)] = ln;
const qn = Co, Rt = {};
Rt[te(-371, -375, -361, "RHhh") + ge(-809, "r^$!") + te(-373, -335, -408, "83F0")] = jC, Rt[tA("rAZa", 647) + te(-310, -299, -270, "TeJl") + ge(-848, "[sT5") + ge(-772, "B!MK")] = qn[ge(-851, "A0D*")], Rt[te(-347, -388, -342, "bv6H") + te(-293, -324, -329, "KzJw") + tA("VTgb", 608) + ge(-827, "fH4b")] = qn[cA(305, 281, 328, "yByj", 321) + tA("d&6)", 580)], Rt[cA(330, 262, 321, "D!*Y", 291) + tA("yByj", 638)] = rs, Rt[tA("C(KE", 663) + cA(242, 297, 285, "VTgb", 287) + se(-700, -684, -726, -689, "$qWt") + ge(-836, "$aq6") + cA(285, 322, 275, "yByj", 293)] = as;
const Lt = {};
Lt[te(-376, -355, -373, "M[IM") + tA("mCN$", 623) + te(-354, -355, -342, "JMVX")] = qC, Lt[se(-791, -755, -750, -745, "PiG$") + se(-692, -700, -722, -678, "HFVO") + tA("[Ssk", 646) + cA(199, 221, 191, "*sPI", 240)] = qn[cA(317, 287, 273, "N%CW", 300)], Lt[tA("w&J7", 582) + cA(228, 248, 270, "$aq6", 249) + cA(281, 231, 234, "ONQi", 278) + cA(305, 349, 373, "o^cg", 329)] = qn[tA("JMVX", 661) + te(-362, -339, -335, "PiG$")];
function tA(i, n, t, e, A) {
  return wA(n - 434, i);
}
Lt[tA("yByj", 571) + se(-660, -697, -686, -736, "[Ssk")] = rs, Lt[tA("WpRA", 645) + ge(-792, "bv6H") + cA(275, 231, 236, "WpRA", 266) + se(-683, -710, -692, -647, "dJBv") + te(-292, -267, -270, "l%9p")] = as;
const Dr = {};
Dr[ge(-799, "w&J7")] = Rt, Dr[se(-739, -749, -723, -679, "[sT5")] = Lt;
const VC = Dr;
function kA(i, n, t, e, A) {
  return DA(i - -571, n);
}
(function(i, n) {
  function t(a, g, s, C, I) {
    return DA(C - 64, I);
  }
  function e(a, g, s, C, I) {
    return DA(I - -709, g);
  }
  function A(a, g, s, C, I) {
    return DA(s - -319, a);
  }
  const o = i();
  function r(a, g, s, C, I) {
    return DA(I - -554, g);
  }
  for (; ; )
    try {
      if (parseInt(t(740, 534, 708, 640, "f2Ha")) / 1 * (parseInt(t(497, 588, 519, 621, "E^cy")) / 2) + parseInt(t(774, 692, 806, 679, "#nQk")) / 3 + parseInt(e(-306, "J@O8", -322, -288, -310)) / 4 * (-parseInt(A("J@O8", 26, 60, 23, -65)) / 5) + -parseInt(t(637, 524, 544, 636, "%uaK")) / 6 + -parseInt(r(42, "E^cy", 28, 211, 80)) / 7 + parseInt(e(-97, "lhlY", -127, -127, -113)) / 8 + -parseInt(A("OLQP", 224, 317, 252, 416)) / 9 * (-parseInt(e(-432, "]k#7", -318, -296, -326)) / 10) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vn, 793154);
function sA(i, n, t, e, A) {
  return DA(t - 277, i);
}
function HA(i, n, t, e, A) {
  return DA(n - 432, i);
}
function DA(i, n) {
  const t = Vn();
  return DA = function(e, A) {
    e = e - (12763 + -1 * 12387);
    let o = t[e];
    if (DA.SrUsYv === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      DA.dEUiCa = C, i = arguments, DA.SrUsYv = !0;
    }
    const a = t[3517 * 2 + -317 + -6717 * 1], g = e + a, s = i[g];
    return s ? o = s : (DA.bgIPax === void 0 && (DA.bgIPax = !0), o = DA.dEUiCa(o, A), i[g] = o), o;
  }, DA(i, n);
}
function Vn() {
  const i = ["WOzuWQP9", "iYytWPHq", "W5LvW4m", "mmk1WQlcT10", "W54csSoNaq", "W4RdQmodt8os", "WO7cOhtdVmk/", "v1bLBJ8", "mmoMt8kCAq", "oLNcUtFcTG", "mNpcK8koqa", "uaNcGmk2nG", "xYniW4fR", "rdtdMbfE", "WOZcTwFdUmkZ", "WOCYW6rlEq", "WPZdR8oixSkD", "WOyLW6bnAa", "jCkOWQtcO1m", "v8oaW7dcMa", "pCogt8koAa", "W7/dS1GdWQO", "eIH1WRldPq", "W7VdLuysWQC", "y3ldPSoOnW", "BSkrWPFcKga", "W7xcMSolWOK", "aMZdGq", "W5VdUCopWPLn", "W77cICoRWONdNG", "rs/dJa1o", "W47dG2yeWR8", "nfhdL1nN", "W5VdPmotECoy", "WQhcTdTPzW", "iSkKWRlcSvq", "B23dVmoFjG", "WPXcWQrEWRO", "s8oaW7tcK0W", "srxdICoW", "kwxdRmkeW7O", "FmkxWOVcSNi", "W4iyiSoIfa", "wsVdMtTF", "W48Mt8oUhW", "iepdISoIpa", "W7hdTeusWRW", "FsGUWOjr", "W4pdICokCCo0", "w1DKzJy", "WOfwWQjrWQe", "DMv4utq", "cqiHpMmmnWVcU3BdJCoZAW", "n2dcGmkvqG", "mCowqmkkFW", "k23dVmkzW70", "DCkJWRNcSrW", "WPhcMSkxp0W", "feddLmoGEW3cTSoZW5jIW43dVG", "yCo2WRTSWPi", "xLbHydK", "mvBdP8oPpG", "l2DhWONdLa", "ACkmWOdcM3y", "W58IumoRdW", "lSoctJldOG", "DIiPWPzn", "W4PfWR7cSSoY", "lCoyrCky", "wmoiW7pcMfW", "qrxcSSkwoa", "WRfSW4NdOgm", "B8kfhmoAu0FcLa3cTbe", "W4mbCtxdR8kXFZVdIZrTW53dJq", "DmoWWRf6WOK", "WQ/dJSouWOBdQ8khW6H8", "vWZcISkekW", "W4pdSsnRAspdU8kH", "W5u0uSoWdq", "c8kjzJbY", "WPVdKCo9W48w", "lqfQWRNdTq", "W4jBW4tcLN8", "W4roW4tcLMW", "e0ZdI1f1", "e8kZWQ7cSwO", "z8oqWRe", "aqrNWRBdPG", "kSovq8kdBW", "AmknWPFcO3y", "jmkdWR7cMKG", "sJ3dLmoIdW", "CIy5", "W5DFW5NcRxG", "mCkEWQ3cN1m", "W5HFW4tcN2m", "kmoguZ/dSW", "W5NcGSk9s2xdO8o5WQnrWQWBCwu", "W5XCWPFdRMe", "jSkhzsy", "WPBcKSkdcfe", "bhjzWOpdRW", "W7SCl8oNbG", "o8kwWRJcUei", "W61qWPBdS2y", "WRnRW5hdOMu", "WP/dHSkRrIG", "xtzyW6XV", "W70ikmoFea", "WOC7W4rJya", "W5tdJ8okzCoZ", "W4PfWQpcTq", "WRP7W5hdPhq", "j8krWQdcK3q", "nCoGtYddOW", "F2CZWPrr", "AJZcVSojWQBdJYO2W4i4cYfD", "cfxdKxjJ", "vttdGWXo", "WPBcLCkwmCkYW7/dHmkyqs1rWQG", "W5XkWPBdK3S", "nCobtb7dPW", "q3ldPSoOnW", "omkkAtO", "k8obW4NdGcOauWyuW5qCeq", "W5xdOcpcPSoIvSoGwmkNvshdI30", "WPPRW5xdRgm", "jLNcVtW", "e2NdRmkzW7m", "gmkaWOtcGLS", "rHVdLa", "lgvzWOVdUa", "urtcLaq+WPNcILffWO8bdZK", "oCorxSkSFq", "W6FcQCkQ", "fKRdNCoLEW7dICosW6PiW57dR8ku", "qCkqDLCX", "uhrJWR3dMWWLua", "W5VcGmk4rgtcJCk8WRrgWR0j", "qdBcOCkUcG", "r8kYtw88", "lg3dOCkEW6y", "W7hdTeu", "WReAWQhdP8kC", "jeLfWORdSG", "W4tdVCouWPbC", "lf3cPJdcOq", "WReSvSo4WRu", "mCkEWRJcJKy", "jSkhWQxcKLm", "EZuYWP5x", "W5/dTCoJt8ol", "W6TsWPRdJMG", "DSkzWPVcKN8", "W5yIvmoLcq", "WOdcPhddNmk3", "DNtdRmo+la", "uWOsWRzc", "tLX4zWG", "lCkEAsbY", "W5NdImojtmos", "D8kKvmonW4RdUt7dGMldLmk2aLu", "W7RcJCodWP7dMW", "WOtdMSo8", "WO7dKmo9ft8", "W6r4fSkKWPLagGVcULi", "wZuYWP5x", "WRagumoLWR8", "hhJdK8o5cG", "WRLoDmk4r8oltsPpW6ietq", "ivBdMSoGlq", "iNBdKSoCpG", "WPm4W6flBG", "wWddK8oQbW", "Es3dIa1z", "WPb/bx7cNW", "WQ7cPNddRCk1", "xJjrW6a", "WPpdVmka", "k8kuBsjY", "mGn4", "WPZdLCoMW4mh", "ESktE1a8", "lqjIWQ7dSG", "W6Olj8oNaa", "W6r8e8kPW65XpHxcM0Ca", "ffdcLmkXBa", "WRbPW4/dOeK", "pIKjWOjw", "W5FdG8o9umoE", "W7FdTf8sW64", "AJuHWPHl", "rXhdK8oJca", "W4T6WO7dOx4", "hwpdVCkCW7y", "WPRdVCoV", "CNZdOCo1nW", "BbVdLmo3fa", "WRaNvmoJWR8", "p8obxSkaBa", "W44ZqW", "oCoWrCkcCG", "maH5WQhdGW", "W6Wskmo4aq", "WO82W7bhDG", "i8kSWRRcSf0", "sWC6", "W6/dKSoszCoN", "W47dOmoormoj", "saZcKmkYjG", "WO02W79h", "W5vEW6JcINK", "W6ZdR1GYWQS", "WOOKW51uFW", "WQVcLqTFsW", "W5nBW4dcNxK", "W47dHmoZ", "W4zyWQlcQSkM", "WOtdMSoLgq", "nSkIWRJcTKG", "WQPRW5hdPhq", "nKZcKG", "WPfvnM7cTa", "ur84F1C", "o8k5WQu", "jSk5WQ/cQvK", "v3VdNHPo", "W54oqG", "C8kBWPZcVN0", "WP1HW5BdQwq", "W7RdV0apWQ0", "W6JdS1idWQe", "imoYg8kwWPa", "W6pdICokCCo0", "nSk/WRpcPeG", "W4beWRNcTCkM", "mmo2bmktWOa", "bYrZWRBdVW", "WRaNva", "W6WCk8oUbW", "kCkqBtfN", "lCkcttf0", "DttdMbnE", "WQ16W4ldT3q", "W77cICoJWPRdNW", "W4tdG8osA8oJ", "FSkDWO/cNNa", "W6GymSoyea", "W5JdS8ok", "hCkiWOlcMK8", "W4xdNSofyCo0", "CYiYWPa", "n8oBra", "lxhcVJ/cRq", "jeVdH8oPjW", "p2tcLmkztq", "W53cOCout8oj", "kqXIWQZdTq", "W4pdVCojWPDh", "AmkzWPdcMwC", "hGjLWRpdSG", "sKbKyq", "ys0l", "gCopW7lcIrG", "lCogsCkGFG", "W4/dTCoErSoy", "WR8Sq8oL", "W7VdQeqjWRW", "C8klWRBcGxy", "WQXVW4RdQ3q", "n0BdPSo+oG", "W4NdImonDSkG", "phxcGSk4ra", "W5tdLmofA8oU", "k8kiWOe", "n3dcHmkDvq", "xrFdLCoQeW", "kbf+WO/dPa", "BSkkWPJcNN0", "AIiYWPbr", "W7WymSoigG", "nKZcMmkAtG", "sGBdImoReG", "W541vmoThG", "WOdcOsbICG"];
  return Vn = function() {
    return i;
  }, Vn();
}
function SA(i, n, t, e, A) {
  return DA(t - -273, n);
}
function CA(i, n, t, e, A) {
  return DA(t - -815, i);
}
var a0, g0, Ue;
class ZC {
  constructor(n = {}) {
    U(this, Ue);
    p(this, g0, []);
    p(this, a0, {});
    M(this, Ue, VC);
    function t(A, o, r, a, g) {
      return SA(A - 50, A, o - -89);
    }
    function e(A, o, r, a, g) {
      return SA(A - 225, a, r - -49);
    }
    this[t("hBB]", 202) + e(207, 338, 200, "fNUq") + t("CH]U", 32)](n);
  }
  [(g0 = sA("aDFJ", 828, 763) + sA("Wlg9", 779, 820), a0 = SA(223, "f&Rv", 285) + kA(77, "j62W") + "s", SA(126, "bqIh", 229) + CA("*4Ob", -156, -255) + SA(314, "jp(L", 276) + "fo")](n) {
    const t = wr(n), e = t == null ? void 0 : t[A(-5, 13, 68, 132, "]k#7") + r(159, "bNqb", -21, 156, 97) + "s"]();
    function A(s, C, I, E, c) {
      return kA(E - 242, c);
    }
    function o(s, C, I, E, c) {
      return SA(s - 169, c, C - -192);
    }
    function r(s, C, I, E, c) {
      return CA(C, C - 433, c - 330);
    }
    function a(s, C, I, E, c) {
      return sA(I, C - 295, C - 688);
    }
    if (!(e != null && e[r(210, "bNqb", 149, 202, 109) + "t"]) || !(e != null && e[r(3, "#nQk", -19, -68, 54)]) || !(e != null && e[o(212, 114, 91, 250, "y3Ao") + A(344, 235, 349, 304, "ivSZ")]))
      if (o(84, 65, 1, 3, "fNUq") === A(174, 79, 129, 207, "jp(L")) {
        const s = {};
        s[r(296, "uWSH", 283, 156, 173)] = _0x45a545, _0x42888b[r(79, "fNUq", -9, -167, -41) + a(1510, 1406, "Wlg9")] = s;
      } else throw new D(A(242, 82, 102, 127, "lrUc") + g(413, "dJ!9", 442) + o(58, 20, 32, 138, "LMXs") + o(102, -36, 25, 32, "bNqb") + A(287, 398, 402, 285, "Mqlc") + g(626, "(rZ2", 489));
    function g(s, C, I, E, c) {
      return HA(C, I - -467);
    }
    if (t)
      if (r(257, "hBB]", 102, 31, 135) === r(-20, "f2Ha", 3, -110, -57)) {
        const s = _0x5535c3(_0x53f1b7), C = s == null ? void 0 : s[o(71, 67, 168, -2, "w1q7") + o(-113, -78, -179, 40, "LgYi") + "s"]();
        if (!(C != null && C[g(643, "Mqlc", 530) + "t"]) || !(C != null && C[A(167, 222, 92, 205, "bqIh")]) || !(C != null && C[r(119, "aDFJ", 130, -66, 67) + A(143, 110, 256, 197, "HbQP")])) throw new _0x3790e2(a(1434, 1408, "t3@X") + r(160, "bqIh", 28, 193, 70) + r(-27, "uU5K", 206, 131, 81) + a(1506, 1418, "]k#7") + r(30, "w1q7", -155, 62, -15) + A(332, 149, 289, 254, "HbQP"));
        if (s) {
          const I = {};
          return I[A(297, 167, 128, 170, "jp(L")] = s[a(1583, 1617, "(rZ2")], I.id = C[g(584, "J@O8", 611) + o(104, -30, -2, -119, "aDFJ")], I;
        }
        return;
      } else {
        const s = {};
        return s[a(1511, 1389, "EPWl")] = t[o(119, 4, -86, 99, "aDFJ")], s.id = e[r(-171, "%uaK", 18, -121, -49) + A(142, 148, 372, 256, "f&Rv")], s;
      }
  }
  async [CA("t3@X", -300, -358) + sA("#nQk", 902, 904) + kA(-40, "HbQP") + "m"](n) {
    function t(s, C, I, E, c) {
      return kA(c - 573, E);
    }
    const e = document[A(1363, 1406, "vTli", 1355) + A(1314, 1373, "Wlg9", 1339) + a(703, 660, 764, "J@O8")](o(-363, "t%^(", -266, -315, -259));
    e[o(-635, "vTli", -518, -362, -501) + o(-192, "Mqlc", -245, -260, -323)] = !0;
    function A(s, C, I, E, c) {
      return CA(I, C - 220, E - 1651);
    }
    e[a(659, 867, 735, "E^cy")] = !0;
    function o(s, C, I, E, c) {
      return kA(c - -343, C);
    }
    e[A(1293, 1470, "CH]U", 1416) + a(934, 846, 947, "aQJ$") + "e"] = !0, e[g(625, "hBB]")][g(416, "EPWl") + a(801, 1063, 941, "LgYi")] = a(971, 855, 860, "k)8Q") + a(628, 670, 726, "Wlg9"), e[g(414, "*4Ob")][o(-486, "[#8i", -392, -492, -409) + "ty"] = "0", e[a(890, 622, 751, "bqIh")][g(427, "CH]U") + A(1194, 1303, "OU@s", 1294) + g(468, "bqIh")] = t(385, 449, 507, "lhlY", 434), e[a(750, 766, 874, "(rZ2")][g(586, "s(G5")] = g(460, "y3Ao"), e[A(1342, 1268, "w1q7", 1315)][A(1194, 1356, "LgYi", 1242) + "t"] = a(796, 915, 800, "(rZ2");
    const r = await navigator[o(-302, "W7IC", -327, -234, -308) + g(655, "t3@X") + "es"][a(780, 890, 904, "bNqb") + o(-324, "OU@s", -383, -491, -386) + "ia"](n);
    function a(s, C, I, E, c) {
      return SA(s - 115, E, I - 585);
    }
    e[o(-335, "vTli", -301, -533, -436) + o(-312, "J@O8", -516, -551, -434)] = r, await e[t(585, 606, 493, "uWSH", 624)]();
    function g(s, C, I, E, c) {
      return sA(C, C - 152, s - -247);
    }
    return r;
  }
  async [sA("]k#7", 705, 675) + sA("[#8i", 863, 931) + CA("Mqlc", -318, -350)]() {
    var C, I;
    if (!uo())
      if (e(1125, 1083, 1021, 1070, "vTli") === e(1184, 1131, 1047, 1201, "j62W")) {
        const E = { ..._0x58bc69 }, c = E, x = { ...typeof c[o(527, 410, 393, "OLQP")] == o(395, 459, 473, "t3@X") + "t" ? c[a(862, "*4Ob", 881)] : {}, ..._0x544026 }, d = x;
        if (_0x5500c4) {
          const l = {};
          l[r(1392, "j62W", 1344, 1411, 1454)] = _0x29d39e, d[a(960, "SJ@5", 859) + e(1190, 1077, 1178, 1031, "y3Ao")] = l;
        }
        return c[n(1266, 1209, "w1q7")] = d, c;
      } else return;
    function n(E, c, x, d, l) {
      return CA(x, c - 147, c - 1520);
    }
    const t = await this[e(1213, 1094, 1027, 1174, "fNUq") + "st"](S(this, Ue)[a(1050, "LgYi", 951)]);
    function e(E, c, x, d, l) {
      return sA(l, c - 319, c - 391);
    }
    const A = await this[e(1200, 1275, 1290, 1176, "]k#7") + "st"](S(this, Ue)[a(891, "vTli", 980)]);
    function o(E, c, x, d, l) {
      return sA(d, c - 232, c - -388);
    }
    function r(E, c, x, d, l) {
      return CA(c, c - 264, l - 1676);
    }
    function a(E, c, x, d, l) {
      return kA(x - 984, c);
    }
    const g = ((C = t[r(1265, "lhlY", 1258, 1286, 1239) + r(1214, "aDFJ", 1377, 1353, 1356)]) == null ? void 0 : C[o(292, 414, 540, "OU@s")]) + a(851, "I*xo", 889) + ((I = A[e(1271, 1231, 1136, 1191, "Wlg9") + n(1257, 1295, "LgYi")]) == null ? void 0 : I[r(1445, "k%vl", 1551, 1361, 1487)]), s = await this[r(1123, "uWSH", 1332, 1361, 1254) + n(1418, 1291, "OLQP") + a(798, "fwJ2", 885) + e(1095, 1175, 1198, 1144, "vTli") + "lt"](g, t[r(1352, "uWSH", 1359, 1239, 1315) + "ge"], A[a(765, "OU@s", 789) + "ge"]);
    this[e(1315, 1270, 1279, 1149, "j62W") + o(514, 476, 590, "vTli")][o(354, 364, 327, "k)8Q")](s);
  }
  async [SA(417, "(rZ2", 315) + "st"](n) {
    function t(h, m, y, G, b) {
      return sA(y, m - 482, b - -662);
    }
    const { fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: a } = n;
    let g = 1 * -922 + 1902 + -490 * 2, s = r, C, I = this[Q(1212, 1086, 1256, 1147, "I*xo") + Q(1160, 1187, 1055, 1130, "uWSH") + Q(1163, 1199, 1272, 1221, "bNqb") + "s"](this[c(147, 177, 182, "bqIh") + c(266, 278, 232, "t3@X") + "s"], o);
    function E(h, m, y, G, b) {
      return CA(m, m - 307, y - -129);
    }
    function c(h, m, y, G, b) {
      return HA(G, y - -683);
    }
    for (let h = -6529 * -1 + 1 * -7226 + 17 * 41; h < r; h++) {
      if (x(1502, 1478, 1610, 1500, "j62W") !== t(167, 58, "Qa&^", 64, 52)) return;
      {
        if (g > A * a)
          if (E(-350, "E^cy", -306) !== Q(971, 1052, 963, 855, "%uaK")) {
            const y = {};
            return y[E(-343, "fNUq", -463)] = _0x1cb8c3, y;
          } else {
            s = h;
            break;
          }
        const m = await this[x(1550, 1435, 1438, 1463, "E^cy") + c(8, 236, 150, "t3@X") + Q(1075, 935, 1147, 1045, "Mqlc") + x(1428, 1556, 1646, 1517, "LgYi")](I);
        if (m[E(-388, "EPWl", -428)])
          if (Q(1238, 1225, 1243, 1331, "Mqlc") !== c(356, 327, 377, "bqIh")) {
            const y = {};
            return y[c(358, 124, 267, "dJ!9")] = _0x4b662c[Q(1e3, 1058, 969, 1004, "EPWl")], y.id = _0x2e734e[t(-27, 82, "LMXs", 203, 74) + x(1324, 1182, 1310, 1280, "2V!!")], y;
          } else this[c(427, 492, 354, "2V!!") + x(1653, 1464, 1440, 1530, "Vt7E") + Q(1069, 1108, 1008, 981, "LMXs") + E(-586, "uWSH", -489) + "or"](m[t(278, 338, "Mqlc", 205, 264)]) && (t(125, 212, "j62W", 287, 199) !== x(1193, 1303, 1373, 1288, "aDFJ") ? this[c(298, 336, 231, "(rZ2") + Q(1072, 1070, 1157, 1060, "LgYi") + Q(987, 1063, 890, 952, "Mqlc") + t(89, -37, "bNqb", -89, 40) + "or"](_0x2fba43[E(-476, "Wlg9", -447)]) && (_0x4c4bfa = this[Q(1235, 1123, 1282, 1262, "Wlg9") + t(-32, -36, "LMXs", 92, 62) + c(248, 188, 247, "f2Ha") + "s"](this[Q(1129, 1184, 1202, 1221, "LMXs") + t(202, 289, "#nQk", 126, 255) + "s"], _0x45bb3b), _0x377c81--) : (I = this[x(1361, 1296, 1361, 1394, "k)8Q") + x(1255, 1298, 1492, 1362, "CH]U") + c(169, 257, 257, "k%vl") + "s"](this[Q(1199, 1333, 1278, 1131, "lrUc") + c(214, 234, 159, "t%^(") + "s"], e), h--));
        m[x(1653, 1554, 1573, 1533, "k%vl") + t(280, 293, "I*xo", 145, 258)] && (x(1217, 1251, 1335, 1291, "w1q7") !== t(-57, 57, "*4Ob", 122, 0) ? { deviceInfo: C } = m : this[x(1462, 1294, 1389, 1337, "uU5K") + t(138, 236, "*4Ob", 19, 159) + "s"] = _0xebe69f), g += m[x(1381, 1605, 1499, 1499, "t3@X") + E(-372, "bNqb", -443)] || -7509 + 2087 * -3 + 17 * 810;
      }
    }
    function x(h, m, y, G, b) {
      return kA(G - 1459, b);
    }
    const d = Math[c(320, 240, 261, "lrUc")](g / (s || 1 * 4079 + -9499 + 5421));
    this[x(1410, 1382, 1387, 1434, "Mqlc") + x(1577, 1555, 1624, 1536, "j62W") + "s"] = this[E(-478, "fwJ2", -417) + Q(993, 917, 964, 1024, "LgYi") + c(349, 397, 393, "fwJ2") + "s"](this[E(-248, "f&Rv", -386) + Q(1082, 1190, 967, 1147, "&2x6") + "s"], {}, C == null ? void 0 : C.id);
    const l = {};
    l[E(-400, "aDFJ", -435) + "ge"] = d, l[c(303, 333, 263, "EPWl") + c(454, 331, 408, "w1q7")] = C;
    function Q(h, m, y, G, b) {
      return SA(h - 0, b, h - 855);
    }
    return l;
  }
  async [CA("xwyD", -128, -196) + CA("I*xo", -256, -254) + sA("t3@X", 734, 711) + CA("Qa&^", -492, -395)](n) {
    function t(g, s, C, I, E) {
      return HA(I, g - -1375);
    }
    function e(g, s, C, I, E) {
      return HA(s, C - 512);
    }
    const A = Date[o(523, "fwJ2", 607, 472, 612)]();
    function o(g, s, C, I, E) {
      return sA(s, s - 210, E - -127);
    }
    function r(g, s, C, I, E) {
      return HA(g, I - 503);
    }
    function a(g, s, C, I, E) {
      return SA(g - 260, C, s - 399);
    }
    try {
      if (o(762, "EPWl", 632, 721, 758) !== r("E^cy", 1535, 1586, 1504, 1552)) return _0x18b12a instanceof _0x4abedd && _0x297cb7[t(-345, -229, -292, "uWSH", -361)] === t(-553, -523, -420, "[#8i", -586) + e(1548, "fNUq", 1489, 1495, 1347) + a(713, 694, "dJ!9", 635, 658) + t(-343, -262, -448, "I*xo", -436);
      {
        const g = await this[r("lrUc", 1372, 1413, 1464, 1602) + e(1399, "]k#7", 1485, 1477, 1491) + r("f2Ha", 1461, 1582, 1468, 1609) + "m"](n), s = Date[t(-566, -490, -609, "lhlY", -672)]() - A, C = this[t(-296, -208, -230, "j62W", -158) + o(883, "w1q7", 751, 887, 800) + e(1305, "(rZ2", 1386, 1474, 1303) + "fo"](g);
        Qn(g);
        const I = {};
        return I[a(501, 615, "aDFJ", 625, 602) + a(475, 592, "vTli", 634, 478)] = s, I[e(1532, "(rZ2", 1404, 1290, 1413) + r("k%vl", 1449, 1393, 1402, 1465)] = C, I;
      }
    } catch (g) {
      if (a(697, 725, "s(G5") !== e(1611, "aQJ$", 1583)) {
        const s = {};
        return s[a(607, 622, "LgYi")] = g, s;
      } else throw new _0x50e9be(e(1435, "#nQk", 1352) + e(1334, "w1q7", 1459) + t(-539, -485, -483, "fNUq") + o(632, "y3Ao", 546, 427, 545) + e(1248, "lrUc", 1384) + t(-334, -249, -307, "LMXs"));
    }
  }
  [sA("EPWl", 792, 704) + SA(445, "xwyD", 324) + sA("(rZ2", 899, 769) + kA(-87, "*4Ob") + "or"](n) {
    function t(o, r, a, g, s) {
      return sA(g, r - 488, r - -516);
    }
    function e(o, r, a, g, s) {
      return CA(s, r - 351, a - -171);
    }
    function A(o, r, a, g, s) {
      return sA(o, r - 456, a - -939);
    }
    return n instanceof DOMException && n[e(-633, -594, -595, -519, "W7IC")] === t(206, 149, 187, "lrUc") + A("&2x6", -357, -260) + A("fNUq", -219, -142) + t(189, 141, 79, "Mqlc");
  }
  async [kA(-123, "bqIh") + kA(-164, "xwyD") + kA(-17, "#nQk") + CA("hBB]", -226, -202) + "lt"](n, t, e) {
    return { optSetting: await KC(), afterOpt: t, beforeOpt: e };
  }
  [kA(-61, "E^cy") + SA(24, "J@O8", 108) + HA("fNUq", 1073)](n) {
    function t(A, o, r, a, g) {
      return HA(A, r - 276);
    }
    function e(A, o, r, a, g) {
      return CA(g, o - 488, A - 954);
    }
    Object[e(551, 659, 621, 417, "J@O8") + "es"](n)[e(679, 782, 748, 659, "(rZ2") + "ch"](([A, o]) => {
      function r(C, I, E, c, x) {
        return e(x - -1015, I - 390, E - 155, c - 275, E);
      }
      function a(C, I, E, c, x) {
        return e(x - -213, I - 214, E - 401, c - 470, E);
      }
      function g(C, I, E, c, x) {
        return t(I, I - 460, C - -13);
      }
      function s(C, I, E, c, x) {
        return e(I - -677, I - 90, E - 175, c - 124, c);
      }
      if (r(-408, -414, "CH]U", -458, -425) === r(-453, -499, "w1q7", -380, -455)) ({ deviceInfo: _0x220ec0 } = _0x4ecc5a);
      else {
        const C = A;
        S(this, Ue)[C] && (r(-526, -502, "*4Ob", -496, -494) !== g(1346, "xwyD") ? S(this, Ue)[C] = { ...S(this, Ue)[C], ...o } : (_0x4c6e8f = this[g(1208, "[#8i") + a(543, 674, "t%^(", 603, 547) + s(-10, -116, -158, "w1q7") + "s"](this[g(1112, "]k#7") + r(-541, -525, "(rZ2", -500, -403) + "s"], _0x280440), _0xab8a72--));
      }
    });
  }
  [HA("t3@X", 1036) + CA("xwyD", -173, -212) + kA(-34, "dJ!9") + "s"](n = {}, t = {}, e) {
    const A = { ...n }, o = A, r = { ...typeof o[E(890, "f&Rv", 894, 842, 905)] == s(1519, 1598, 1461, "vTli") + "t" ? o[s(1621, 1736, 1537, "t%^(")] : {}, ...t };
    function a(c, x, d, l, Q) {
      return SA(c - 256, Q, x - 247);
    }
    const g = r;
    function s(c, x, d, l, Q) {
      return HA(l, c - 534);
    }
    function C(c, x, d, l, Q) {
      return sA(d, x - 391, l - 574);
    }
    function I(c, x, d, l, Q) {
      return HA(x, Q - 552);
    }
    function E(c, x, d, l, Q) {
      return SA(c - 82, x, Q - 605);
    }
    if (e)
      if (E(905, "OLQP", 925, 740, 823) !== C(1386, 1261, "k)8Q", 1401)) {
        const c = {};
        return c[C(1346, 1372, "HbQP", 1467) + a(479, 575, 441, 467, "]k#7")] = this[a(594, 485, 461, 600, "W7IC") + I(1443, "CH]U", 1404, 1482, 1455)], c[I(1620, "bqIh", 1503, 1372, 1501) + C(1261, 1341, "aQJ$", 1247) + "e"] = !1, c;
      } else {
        const c = {};
        c[E(720, "LMXs", 891, 762, 796)] = e, g[E(781, "k)8Q", 916, 842, 891) + C(1387, 1477, "ivSZ", 1484)] = c;
      }
    return o[s(1411, 1387, 1366, "fNUq")] = g, o;
  }
  [CA("]k#7", -198, -321) + SA(391, "Wlg9", 304) + HA("uU5K", 1042)](n) {
    function t(A, o, r, a, g) {
      return HA(a, g - -371);
    }
    function e(A, o, r, a, g) {
      return SA(A - 440, A, a - 417);
    }
    this[t(708, 617, 513, "t%^(", 584) + e("t%^(", 607, 620, 554) + "s"] = n;
  }
  [kA(61, "vTli") + sA("CH]U", 591, 693) + CA("bqIh", -457, -396) + HA("k)8Q", 1089) + CA("uU5K", -318, -384)]() {
    function n(r, a, g, s, C) {
      return sA(g, a - 347, r - -464);
    }
    const t = {};
    function e(r, a, g, s, C) {
      return kA(s - 215, a);
    }
    function A(r, a, g, s, C) {
      return kA(g - 959, C);
    }
    function o(r, a, g, s, C) {
      return HA(g, C - -270);
    }
    return t[n(355, 291, "lrUc") + n(263, 156, "SJ@5")] = this[e(138, "t%^(", 158, 179) + o(758, 826, "Wlg9", 843, 705)], t[A(991, 861, 977, 990, "j62W") + n(209, 137, "aQJ$") + "e"] = !1, t;
  }
}
Ue = new WeakMap();
const br = {};
br.FRONT = "user", br.BACK = "environment";
const Ca = br;
function Ba() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function tg() {
  return /Android/i.test(navigator.userAgent);
}
function yo() {
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
const un = {};
un.width = 1920, un.height = 1080, un.facingMode = Ca.FRONT;
const eB = un;
var Et, Ot, Ee;
class us {
  constructor({ defaultVideoConstrains: n = eB, minCameraShorterSide: t = kC } = {}) {
    U(this, Et);
    U(this, Ot, []);
    U(this, Ee, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, M(this, Et, e);
  }
  get availableCameraProperties() {
    return S(this, Ot);
  }
  get mediaStream() {
    return S(this, Ee);
  }
  get videoTrack() {
    if (S(this, Ee)) return wr(S(this, Ee));
  }
  get isCameraActive() {
    var n;
    return !!((n = S(this, Ee)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Qn(t);
  }
  async open(n = {}) {
    tg() && yo() && await fr(450), M(this, Ee, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const n = await Ui(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (1073 + -1793 * 3 + -4307 * -1)] ?? n[-1 * 2447 + -4397 * -1 + -1 * 1950]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    S(this, Ee) && (Qn(S(this, Ee)), M(this, Ee, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = S(this, Ot), A;
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
    const n = this.getSettings(), t = await is(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Ca.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Ba())
      return (await Ui()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Ui();
    for (const t of n) {
      tg() && yo() && await fr(-1937 * -2 + 3 * -1149 + 1 * 23);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = wr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), g = { ...a };
        g.deviceName = r.label;
        const s = {};
        s.cameraProperties = g;
        const C = s;
        S(this, Ot).push(C), Qn(o);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...S(this, Et).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new D("Could not init camera settings");
    if (typeof S(this, Et).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < S(this, Et).minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
Et = new WeakMap(), Ot = new WeakMap(), Ee = new WeakMap();
var Do;
class tB {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    U(this, Do, !1);
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
    S(this, Do) || (M(this, Do, !0), await us.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), PC() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !yo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, 0, -239 + 1 * 4996 + -4757), { image: t, timestamp: Date.now() };
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
    this.pauseStream(), !yo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
Do = new WeakMap();
var Ye;
class oB {
  constructor(n) {
    U(this, Ye);
    M(this, Ye, n);
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
(function(i, n) {
  function t(s, C, I, E, c) {
    return xA(c - -292, I);
  }
  var e = i();
  function A(s, C, I, E, c) {
    return xA(C - -291, E);
  }
  function o(s, C, I, E, c) {
    return xA(s - 377, C);
  }
  function r(s, C, I, E, c) {
    return xA(c - -262, C);
  }
  function a(s, C, I, E, c) {
    return xA(c - -281, E);
  }
  for (; ; )
    try {
      var g = -parseInt(r(146, "Yalm", 189, 94, 148)) / 1 + -parseInt(r(102, "HyLb", 134, 155, 166)) / 2 + parseInt(o(853, "JEsF", 816, 870, 801)) / 3 * (parseInt(r(187, "2y[v", 260, 203, 237)) / 4) + parseInt(o(872, "%Ypn", 812, 860, 876)) / 5 * (parseInt(a(248, 251, 236, "7T7I", 222)) / 6) + parseInt(t(155, 106, "d[Y]", 114, 148)) / 7 + parseInt(A(104, 128, 91, "w$qK", 172)) / 8 + -parseInt(a(186, 140, 133, "*9ci", 132)) / 9;
      if (g === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zn, 7113 * -19 + 159 * -1462 + -2452 * -532);
function xA(i, n) {
  var t = Zn();
  return xA = function(e, A) {
    e = e - (-5150 + -1793 * 2 + 9136);
    var o = t[e];
    if (xA.jZVgbZ === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = c.length; m < y; m++)
          x += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(I, E) {
        var c = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      xA.FIJkkq = a, i = arguments, xA.jZVgbZ = !0;
    }
    var g = t[-3649 + -1 * 9443 + 13092], s = e + g, C = i[s];
    return C ? o = C : (xA.gFPRMj === void 0 && (xA.gFPRMj = !0), o = xA.FIJkkq(o, A), i[s] = o), o;
  }, xA(i, n);
}
function We(i, n, t, e, A) {
  return xA(e - 971, A);
}
function je(i, n, t, e, A) {
  return xA(n - -506, t);
}
function BA(i, n, t, e, A) {
  return xA(e - 771, n);
}
function ce(i, n, t, e, A) {
  return xA(n - 449, i);
}
function he(i, n, t, e, A) {
  return xA(e - 746, A);
}
var s0, I0, c0;
class nB {
  constructor() {
    p(this, c0, 1153 * 2 + -3992 + -2 * -843);
    p(this, I0);
    p(this, s0);
    function n(e, A, o, r, a) {
      return je(e - 134, e - 1299, o);
    }
    function t(e, A, o, r, a) {
      return je(e - 411, A - -131, a);
    }
    this[t(-167, -163, -135, -202, "0jOC") + n(1312, 1306, "%1i(") + n(1209, 1255, "%AF[") + n(1219, 1199, "iaH7")] = Date[t(-184, -143, -150, -82, "iaH7")]();
  }
  [(c0 = BA(1297, "WY$e", 1286, 1269) + BA(1301, "P&Q4", 1249, 1292) + BA(1257, "bha)", 1353, 1297), I0 = BA(1149, "DOU^", 1255, 1206) + We(1479, 1443, 1472, 1496, "BT[k") + ce("gqNH", 872) + je(33, -26, "Hn4#"), s0 = he(1228, 1182, 1219, 1223, "payy") + BA(1174, "BT[k", 1201, 1227) + "p", he(1204, 1257, 1260, 1219, "SAQg") + BA(1229, "%AF[", 1193, 1255) + BA(1176, "HyLb", 1222, 1230))]() {
    function n(r, a, g, s, C) {
      return BA(r - 66, g, g - 459, s - -1424);
    }
    this[A(348, "Hn4#", 307) + o(1241, 1292, "vi26", 1297) + e(539, 507, 522, "2y[v")]++;
    function t(r, a, g, s, C) {
      return We(r - 192, a - 328, g - 361, C - -1553, a);
    }
    function e(r, a, g, s, C) {
      return he(r - 12, a - 175, g - 446, a - -714, s);
    }
    function A(r, a, g, s, C) {
      return BA(r - 279, a, g - 300, r - -913);
    }
    function o(r, a, g, s, C) {
      return BA(r - 107, g, g - 152, s - 65);
    }
    if (this[e(572, 556, 585, "0jOC") + n(-298, -190, "]yQd", -251) + t(-157, "Hm$0", -156, -118, -125)] === 15 * 543 + 4176 + -12320)
      if (o(1289, 1353, "2y[v", 1349) === t(-92, "7T7I", -141, -132, -137)) this[n(-199, -111, "SAQg", -147) + t(-112, "eyxq", -102, -160, -141) + "p"] = Date[n(-183, -175, "JEsF", -206)]() - this[t(-136, "DOU^", -124, -188, -147) + o(1255, 1236, "V63i", 1241) + e(539, 528, 497, "vi26") + n(-137, -182, ")aRI", -160)];
      else return;
  }
  [ce("4@J&", 967) + ce("qycn", 931) + ce("w$qK", 874) + We(1433, 1481, 1511, 1454, "3hLw") + "up"]() {
    function n(r, a, g, s, C) {
      return je(r - 28, a - -172, r);
    }
    if (!uo())
      return t(-637, -559, "P&Q4", -557, -575) !== t(-547, -587, "%Akt", -597, -541) ? void 0 : this[o("V63i", -284, -336, -306, -313) + e(1290, 1323, "DOU^") + "p"];
    function t(r, a, g, s, C) {
      return ce(g, C - -1438);
    }
    function e(r, a, g, s, C) {
      return he(r - 453, a - 196, g - 17, r - 28, g);
    }
    this[n("payy", -234) + t(-625, -529, "eMVq", -611, -581) + e(1224, 1215, "iaH7")] = -1201 + 779 * -2 + -2759 * -1;
    function A(r, a, g, s, C) {
      return he(r - 326, a - 265, g - 7, r - -721, C);
    }
    this[t(-522, -590, "btXW", -526, -547) + A(537, 523, 582, 595, "ZbQE") + "p"] = void 0;
    function o(r, a, g, s, C) {
      return he(r - 7, a - 346, g - 324, C - -1460, r);
    }
    window[t(-538, -548, "%Ypn", -611, -552) + t(-456, -464, "%Ypn", -543, -497) + t(-497, -556, "*9ci", -578, -543) + n("iaH7", -155)](A(539, 532, 479, 583, "JEsF") + "wn", this[o("QIL8", -310, -323, -334, -290) + t(-528, -616, "btXW", -634, -572) + A(487, 440, 550, 537, "DNt7")][o("fw[5", -261, -318, -323, -282)](this));
  }
  [We(1378, 1487, 1451, 1440, "Caw2") + BA(1209, "d[Y]", 1176, 1229) + ce("Caw2", 879) + We(1409, 1359, 1389, 1404, "%1i(") + "up"]() {
    function n(r, a, g, s, C) {
      return We(r - 87, a - 274, g - 67, a - -1928, C);
    }
    function t(r, a, g, s, C) {
      return ce(s, a - -787);
    }
    function e(r, a, g, s, C) {
      return BA(r - 90, a, g - 467, r - -1586);
    }
    if (!uo())
      if (o("%Akt", 244, 274, 262, 291) === o("fw[5", 192, 308, 237, 252)) {
        if (!_0x2bf7ac()) return;
        this[n(-573, -536, -571, -477, "QIL8") + o("Caw2", 216, 227, 214, 216) + t(125, 80, 42, "gqNH")] = 1 * -2837 + -4548 + 1 * 7385, this[n(-509, -551, -523, -523, "]yQd") + A("lLsv", 268) + "p"] = void 0, _0x394577[t(97, 101, 123, "*9ci") + e(-348, "WY$e", -325) + n(-535, -494, -513, -550, "WDpG") + n(-540, -486, -481, -430, "0jOC")](n(-499, -468, -514, -488, "payy") + "wn", this[A(")aRI", 252) + A("%Akt", 356) + e(-362, "]yQd", -403)][A("DNt7", 333)](this));
      } else return;
    function A(r, a, g, s, C) {
      return je(r - 46, a - 354, r);
    }
    function o(r, a, g, s, C) {
      return BA(r - 83, r, g - 4, C - -984);
    }
    window[e(-293, "3hLw", -325) + e(-361, "M(L3", -302) + A("WY$e", 355) + "r"](o("DOU^", 311, 206, 277, 251) + "wn", this[o("JEsF", 247, 215, 318, 257) + o("atHo", 264, 313, 307, 289) + A("2y[v", 270)][o("eyxq", 192, 300, 208, 253)](this));
  }
  [he(1225, 1165, 1196, 1197, "lLsv") + ce("&ho8", 950) + "lt"]() {
    function n(g, s, C, I, E) {
      return BA(g - 1, E, C - 38, g - 143);
    }
    function t(g, s, C, I, E) {
      return BA(g - 16, s, C - 377, I - -1404);
    }
    function e(g, s, C, I, E) {
      return BA(g - 329, E, C - 413, s - -958);
    }
    function A(g, s, C, I, E) {
      return We(g - 403, s - 445, C - 350, C - -1007, E);
    }
    if (!uo() || !this[e(211, 225, 273, 278, "Onsw") + e(274, 216, 210, 220, "(hf9") + "p"])
      if (a(877, "(hf9", 871, 851) === A(470, 544, 491, 502, "&ho8")) {
        var o = {};
        return o[A(457, 475, 481, 510, ")aRI") + A(546, 476, 484, 420, "eyxq") + "e"] = !1, o;
      } else {
        var r = {};
        return r[n(1348, 1352, 1325, 1390, "fw[5") + t(-221, "d[Y]", -149, -178) + "e"] = !1, r;
      }
    function a(g, s, C, I, E) {
      return ce(s, I - -103);
    }
    return { performance: !0, hiccupAmount: this[t(-150, "%Akt", -183, -152) + a(757, "GNOF", 797, 795) + n(1345, 1368, 1288, 1370, "btXW") + "t"](), firstHiccup: this[e(314, 285, 263, 300, "DOU^") + t(-210, "JEsF", -195, -195) + A(387, 356, 371, 400, "Hm$0") + a(821, "WY$e", 818, 761) + "ss"]() };
  }
  [je(-16, 5, "V63i") + je(-69, -70, ")aRI") + he(1198, 1207, 1214, 1225, "WDpG") + "t"]() {
    function n(A, o, r, a, g) {
      return BA(A - 3, a, r - 347, r - -720);
    }
    function t(A, o, r, a, g) {
      return he(A - 93, o - 412, r - 2, r - -134, a);
    }
    function e(A, o, r, a, g) {
      return he(A - 23, o - 14, r - 369, o - -373, a);
    }
    return this[n(579, 525, 537, "$&8g") + t(1093, 1038, 1039, "lLsv") + e(910, 888, 851, "7T7I")];
  }
  [BA(1268, "eMVq", 1238, 1231) + je(5, -6, "%Ypn") + We(1460, 1506, 1418, 1459, "%AF[") + ce("vi26", 959) + "ss"]() {
    function n(e, A, o, r, a) {
      return ce(a, r - 266);
    }
    function t(e, A, o, r, a) {
      return We(e - 319, A - 249, o - 287, e - -344, A);
    }
    return this[n(1129, 1122, 1118, 1158, "vi26") + t(1027, "4@J&", 1050) + "p"];
  }
}
function Zn() {
  var i = ["WPldUSkscfNcS23dKf7dVJtdONVdOW", "iCoxW6vOeG", "WOnTyG", "W4m6Dq", "DSkIW6DDbSkCW6T4", "zJddIuhcTq", "WPb/p25vrtZdOa", "W4DUiJFdSG", "AgfafmoQkeP2W6jJiW", "kCo3W4DIoG", "WRddOmoRWQldQa", "n8oNp8kYvG", "nYhdV8ktd8oViK3cSrBdGCoKW6G", "eYiVlt4", "iSoNW7yhWQa", "x3qujLe", "W59/pINdPq", "hd04jc0", "rHiwC3q5e8ojqmk/wbj3", "DYddLL3cHa", "W43cM8oBAJi", "WQpcVCk8EbS", "caS1CCkj", "W7qArcxcKq", "C3NcVW", "WRP2W7S/yW", "WPPLDxZcGW", "WP/cQSkKWO3cQW", "oSkxaCowWOG", "W7tcO37dMai", "WP/cK3mvDG", "ACk/mCoFyq", "W4G7z1K", "D1ldS8ocWQa", "pGe9o8ky", "WR/dTSk/", "WOFdSCokWQhdPa", "WQtcT8kOWP7cJG", "W4ZcL8oDuIm", "W45qW6KSWPq", "omonW5euWQW", "WOjHAx7cGa", "W4VcKSogwZy", "W41kW6GCWO8", "WOKOWPldPmoi", "m8kLW5pcN8k+", "WPJdJ8kwf2BcMgzbzqhcP3m", "hxnOy2T/WPlcTCo5tstdVa", "ESo7zCkoCSoDg8ojl8oXW6X2W5i", "BWldKsLa", "WPxdLL0yW4XFWPZcRCoZkXtcTCkhW7O", "WPFcT0CcvG", "W4LYkZxdPq", "WRmUW7RcT8ky", "WOVcQSk3W5rK", "oCkMiG", "EmogWR0lrmknl8oXpmoBWOmpW4W", "oKjnjty", "WQdcLZddUCoh", "ncuy", "omkHoCorhW", "WQpcKYFdRCoz", "iCkEW6TDfG", "W4q4zW", "f1HDbsW", "WPf6FqCAh2ddR8oqWRmSW74N", "W4BcU8ozFWq", "W47cQCoexW4", "WP3cOSk9W5Ho", "W5uCxmo3", "gmktdCopWOi", "W4Cqqmo1tG", "WPTXW7eOFW", "WPnWDx/cNW", "nSo3W75IcG", "W7iAAs7cUa", "W5BcGqHdWOG", "WOv0hNNdK3NcKX0oWPJdKCksW6G", "W47cP3ZdLrq", "WOJcImkGW55u", "DdddLfZcLq", "iSkosISL", "vu7cImo7Bq", "W5dcQaXFWOO", "W7eqsG", "pX0zkW8", "W45UWR7dSeq", "W5G7DG", "evLljZC", "WPddVCkCbv7cS2dcH3BdKIxdI1C", "W4ruW7q", "WOxcJmkZWPpcUa", "W4eQtcBcIq", "fWq3iSkm", "WPu0WPu", "W5y1sYFcMa", "W404jq", "mCkZW5tcImk4", "DYRdLwZcJG", "WR/dLgW", "gmkBEdVdGG", "WPL6W6e4Eq", "W70WrmoABq", "W6tcP3hdKG", "W4LolsldRG", "WP5Mnb7cOab8smoxW4qp", "W4RcPSodsdS", "W7CEuYxcKG", "EvNdR8oa", "WPv6W6WiFW", "uxWimuK", "DvNdO8ogWRS", "lJWc", "WQLndbVcKmoarSo4ca", "l8kcqsGJ", "W5RdRmo6WQFcLrFdLaJcLW", "h8kuFJ3dMa", "WRZdV8kA", "hHmPfGW", "o09UlY4", "s8kZmmo5Fa", "WQimW7dcOmki", "WRldIMX8", "wwT5krC", "W5hdLmoZW6FdOJBcItf/W5xcQmoNCq", "WQ41W6BcRCkh", "iSkosJ84", "WR7dT8kgumoK"];
  return Zn = function() {
    return i;
  }, Zn();
}
const iB = -1562 + -545 * -7 + 1 * -1773, rB = 240, Qa = 2 * -4219 + -2 * 2081 + 12630, hs = -1717 + -1826 * -2 + -1920, fs = 4 * -1472 + 1 * 9563 + -3667, kr = {};
kr.codec = "avc1.42E01E", kr.bitrate = 1e6;
const $o = kr, aB = -222 * 4 + -11 * 323 + 4443 * 1, gB = -419 * -142 + 27152 + -22 * 2575;
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
    let n = 3 * -1297 + 1938 + 1953;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class ps {
  constructor() {
    p(this, "encoder");
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
function IB(i) {
  if (!i) return !1;
  const n = ps.isSupported();
  return !n && D.logError("Video encoding is not supported in this browser."), n;
}
const Sr = {};
Sr.LOW = "low", Sr.STANDARD = "standard";
const zn = Sr, Gr = {};
Gr.SPS = "SPS", Gr.PPS = "PPS";
const Yi = Gr;
class cB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 6155 + -2 * 607 + -1 * 4937, t >= n.length) return;
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
    const A = e === Yi.SPS ? n[t] & 31 : n[t], o = t + 1;
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 0; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === -1241 + -1 * -5355 + 2 * -2057) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-4787 + -377 * -23 + -3882) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-583 * -6 + -19 * 207 + 23 * 19), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class CB {
  constructor() {
    p(this, "parameterSetsHandler");
    p(this, "START_CODE", new Uint8Array([43 * 149 + -4660 + -1 * 1747, 739 * 1 + 5923 + -6662, 0, -5 * -611 + -628 * 12 + 4482]));
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
    if (t + (-1432 * 2 + 9363 + -5 * 1299) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (8252 + -262 * 3 + -287 * 26), r = o + A;
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
    let A = 9803 + -1 * -195 + -4999 * 2;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class BB {
  constructor(n = fs, t = Qa) {
    p(this, "chunks", []);
    p(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (1 * -981 + -2 * 4861 + 10704)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-3 * -449 + -1 * 1962 + 615, n));
  }
}
class og {
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
class QB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (zC() && e > A) {
      const a = e, g = A, s = a / g, C = t * s;
      return { width: Math.floor(C / (1229 + 2 * -3697 + 7 * 881)) * (-1 * 1870 + -281 * 29 + 11 * 911), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / 2) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / (-33 * 283 + 48 * 26 + -8093 * -1)) * 2, height: t };
  }
  create(n, t) {
    switch (n) {
      case zn.STANDARD:
        return new og().setBitrate($o.bitrate).setCodec($o.codec).setFramerate(Qa).setResolution(this.getScaledResolution(t, iB)).build();
      case zn.LOW:
        return new og().setBitrate($o.bitrate).setCodec($o.codec).setFramerate(hs).setResolution(this.getScaledResolution(t, rB)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class EB {
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
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new QB(), this.chunkStorage = new BB(), this.cameraFramerate = Qa, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(fs, hs), this.startRecording(zn.LOW);
  }
  startRecording(n = zn.STANDARD) {
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
    let n = 0;
    const t = this.cameraFramerate, e = (-1697 + 326 * -4 + -4001 * -1) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 3696 + -10 * 757 + 298 * 13;
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
class xB {
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
    return new EB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class dB {
  create(n, t) {
    if (!IB(t)) return;
    const e = new sB(aB, gB), A = new ps(), o = new CB();
    return new xB().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function lB(i) {
  const { facingMode: n = Ca.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = qA(null), [A, o] = pA(), [r, a] = pA(), { handleError: g, setIsCameraReady: s } = TA(), C = be((E) => {
    a((c) => WC(E, c));
  }, []);
  oA(() => {
    if (!e.current) {
      g(new D("Something went wrong during video initialization"));
      return;
    }
    const E = new oB(e.current), c = new ZC(), x = new us(), d = new nB(), l = new dB().create(x, t), Q = {};
    Q.videoHandler = E, Q.cameraHandler = x, Q.performanceCheckup = d, Q.cameraEvaluator = c, Q.videoRecorder = l;
    const h = new tB(Q);
    return (async () => {
      try {
        const y = {};
        y.facingMode = n, await h.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          g(D.fromCameraError(y));
          return;
        }
      }
      o(h), s(!0), C(h.getCameraResolution());
    })(), () => {
      h == null || h.stopStreaming(), s(!1), o(void 0);
    };
  }, [n, g, s, e, C, t]);
  const I = {};
  return I.cameraService = A, I.cameraResolution = r, I.onCameraResolutionChange = C, I.videoRef = e, I;
}
function uB({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = lB(i), r = bA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ k(Hn.Provider, { value: r, children: n });
}
let J;
const Te = new Array(1 * -4876 + 568 + 2 * 2218).fill(void 0);
Te.push(void 0, null, !0, !1);
function Nr(i) {
  return Te[i];
}
let De = 0, Bo = null;
function hn() {
  return (Bo === null || Bo.byteLength === 959 * 1 + -1 * -6397 + -7356) && (Bo = new Uint8Array(J.memory.buffer)), Bo;
}
const fn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, hB = typeof fn.encodeInto == "function" ? function(i, n) {
  return fn.encodeInto(i, n);
} : function(i, n) {
  const t = fn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function wo(i, n, t) {
  if (t === void 0) {
    const a = fn.encode(i), g = n(a.length, 1) >>> -36 * -58 + 519 + -2607 * 1;
    return hn().subarray(g, g + a.length).set(a), De = a.length, g;
  }
  let e = i.length, A = n(e, -107 * -93 + 3127 + -9 * 1453) >>> 3 * -1839 + -6588 + 12105;
  const o = hn();
  let r = 0;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > 101 * -1 + 1622 * 3 + -4638) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -581 + -1 * -9769 + -9188 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (4413 + -55 * -59 + -7655 * 1), 1) >>> -3 * 2791 + -6776 + 15149;
    const a = hn().subarray(A + r, A + e), g = hB(i, a);
    r += g.written, A = t(A, e, r, 1) >>> -9395 + -5314 * 1 + 14709;
  }
  return De = r, A;
}
function ms(i) {
  return i == null;
}
let Qo = null;
function me() {
  return (Qo === null || Qo.byteLength === 4805 + 2 * 3359 + -501 * 23) && (Qo = new Int32Array(J.memory.buffer)), Qo;
}
let ho = Te.length;
function fB(i) {
  i < 6528 + -597 * 13 + -7 * -195 || (Te[i] = ho, ho = i);
}
function ys(i) {
  const n = Nr(i);
  return fB(i), n;
}
const Rr = {};
Rr.ignoreBOM = !0, Rr.fatal = !0;
const ws = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Rr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ws.decode();
function Xn(i, n) {
  return i = i >>> -2314 + 2 * 1157, ws.decode(hn().subarray(i, i + n));
}
function Fr(i) {
  ho === Te.length && Te.push(Te.length + (-3310 * 1 + 3383 * -1 + 6694 * 1));
  const n = ho;
  return ho = Te[n], Te[n] = i, n;
}
let Eo = null;
function Ds() {
  return (Eo === null || Eo.byteLength === 1 * 3769 + 8611 + -12380) && (Eo = new Uint32Array(J.memory.buffer)), Eo;
}
function ng(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Ds();
  for (let A = 0; A < i.length; A++)
    e[t / (-7975 + -7979 * -1) + A] = Fr(i[A]);
  return De = i.length, t;
}
function ig(i, n) {
  i = i >>> -563 * 3 + -3279 * -1 + -1590;
  const t = Ds(), e = t.subarray(i / 4, i / (1201 * -1 + -2 * 4919 + 11043) + n), A = [];
  for (let o = 31 * 49 + -2711 * -1 + -45 * 94; o < e.length; o++)
    A.push(ys(e[o]));
  return A;
}
function pB(i, n) {
  const t = wo(i, J.__wbindgen_malloc, J.__wbindgen_realloc), e = De, A = wo(n, J.__wbindgen_malloc, J.__wbindgen_realloc), o = De, r = J.is_mobile_supported(t, e, A, o);
  return Ea.__wrap(r);
}
const Wr = {};
Wr.register = () => {
}, Wr.unregister = () => {
};
const rg = typeof FinalizationRegistry > "u" ? Wr : new FinalizationRegistry((i) => J.__wbg_licensevalidationresult_free(i >>> 2265 + -7951 * 1 + -5686 * -1));
class Ea {
  static __wrap(n) {
    n = n >>> 2123 + -8522 * -1 + -10645;
    const t = Object.create(Ea.prototype);
    return t.__wbg_ptr = n, rg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 8080 + -1677 * 3 + 3049 * -1, rg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    J.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = ms(t) ? 0 : wo(t, J.__wbindgen_malloc, J.__wbindgen_realloc), a = De;
    const g = ng(e, J.__wbindgen_malloc), s = De, C = ng(A, J.__wbindgen_malloc), I = De, E = wo(o, J.__wbindgen_malloc, J.__wbindgen_realloc), c = De, x = J.licensevalidationresult_new(n, r, a, g, s, C, I, E, c);
    return this.__wbg_ptr = x >>> 9854 + -983 * -6 + 4 * -3938, this;
  }
  get is_valid() {
    return J.licensevalidationresult_is_valid(this.__wbg_ptr) !== 181 * -47 + 5489 + 503 * 6;
  }
  get features_json() {
    try {
      const e = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = me()[e / 4 + (60 * -14 + -5 * 1613 + 8905)], t = me()[e / (-2 * -1009 + -2341 + 327) + (-896 * -3 + 3 * -182 + 2141 * -1)];
      let A;
      return n !== 5280 + 176 * -30 && (A = Xn(n, t).slice(), J.__wbindgen_free(n, t * (-18 * -501 + 314 + -9331), -3786 + -13 * 746 + 435 * 31)), A;
    } finally {
      J.__wbindgen_add_to_stack_pointer(1740 + -7365 * -1 + -9089);
    }
  }
  get errors() {
    try {
      const A = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = me()[A / (1773 + -2 * -2689 + -7 * 1021) + (9217 + 3 * 496 + 5 * -2141)], t = me()[A / (459 * 14 + -9934 * 1 + 1 * 3512) + (-7 * 1033 + -6 * -1063 + 854)], e = ig(n, t).slice();
      return J.__wbindgen_free(n, t * 4, 8380 + 33 * -292 + 1260), e;
    } finally {
      J.__wbindgen_add_to_stack_pointer(3569 * 1 + -2 * -4687 + -12927);
    }
  }
  get warnings() {
    try {
      const A = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = me()[A / (4496 + -1 * -2711 + -7203) + 0], t = me()[A / (-107 * -34 + 3310 * -2 + 2986) + 1], e = ig(n, t).slice();
      return J.__wbindgen_free(n, t * (-9650 + 1 * -2692 + 12346), 9815 + 25 * 166 + -23 * 607), e;
    } finally {
      J.__wbindgen_add_to_stack_pointer(-2185 + -1 * 1363 + -36 * -99);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = me()[o / (1369 + -7 * -1264 + -10213) + (2249 * 1 + 1 * -3173 + -33 * -28)], A = me()[o / (9152 + -41 * 159 + -2629 * 1) + (8266 + -145 * 57)];
      return n = e, t = A, Xn(e, A);
    } finally {
      J.__wbindgen_add_to_stack_pointer(-595 + -14 * 523 + -7933 * -1), J.__wbindgen_free(n, t, 379 * -13 + 8247 * 1 + -3319 * 1);
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
    const e = Nr(t), A = typeof e == "string" ? e : void 0;
    var o = ms(A) ? 9113 + 5 * 1367 + 9 * -1772 : wo(A, J.__wbindgen_malloc, J.__wbindgen_realloc), r = De;
    me()[n / 4 + (1 * 553 + 3207 + -3759)] = r, me()[n / (-3945 + 1 * 3949) + (4 * -950 + 13 * -487 + 10131)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    ys(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = Xn(n, t);
    return Fr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Fr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Nr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(Xn(n, t));
  }, i;
}
function wB(i, n) {
  return J = i.exports, bs.__wbindgen_wasm_module = n, Qo = null, Eo = null, Bo = null, J;
}
async function bs(i) {
  if (J !== void 0) return J;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = yB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await mB(await i, n);
  return wB(t, e);
}
function dA(i, n) {
  const t = $n();
  return dA = function(e, A) {
    e = e - (5956 + 1414 * -4);
    let o = t[e];
    if (dA.RkFBYB === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      dA.JNydWJ = C, i = arguments, dA.RkFBYB = !0;
    }
    const a = t[0], g = e + a, s = i[g];
    return s ? o = s : (dA.AsRfPa === void 0 && (dA.AsRfPa = !0), o = dA.JNydWJ(o, A), i[g] = o), o;
  }, dA(i, n);
}
function An(i, n, t, e, A) {
  return dA(e - 824, n);
}
function ag(i, n, t, e, A) {
  return dA(n - 324, t);
}
function DB(i, n, t, e, A) {
  return dA(t - -980, n);
}
function en(i, n, t, e, A) {
  return dA(i - 684, e);
}
function Pi(i, n, t, e, A) {
  return dA(A - -812, n);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return dA(g - -965, E);
  }
  function e(g, s, C, I, E) {
    return dA(s - 12, C);
  }
  function A(g, s, C, I, E) {
    return dA(C - -667, s);
  }
  function o(g, s, C, I, E) {
    return dA(s - -529, E);
  }
  const r = i();
  function a(g, s, C, I, E) {
    return dA(C - -793, s);
  }
  for (; ; )
    try {
      if (parseInt(A(-340, "^qHF", -326, -329, -336)) / 1 + parseInt(t(-639, -642, -642, -662, "MV(!")) / 2 + parseInt(t(-654, -652, -675, -655, "jZbl")) / 3 * (parseInt(e(338, 343, "i1gA", 363, 318)) / 4) + -parseInt(o(-206, -201, -205, -196, "mx8w")) / 5 + -parseInt(A(-328, "MV(!", -349, -350, -326)) / 6 + parseInt(A(-360, "WROX", -366, -360, -346)) / 7 * (parseInt(A(-376, "5a10", -355, -345, -335)) / 8) + -parseInt(a(-476, "Ns)T", -485, -475, -471)) / 9 * (parseInt(a(-490, "L$[#", -488, -481, -507)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})($n, 74106 + -1 * 286844 + 11871 * 51);
function $n() {
  const i = ["jMhdTmkJCsddGHlcLmoMuCkolW", "W4pcSCkSW4hdQq", "rHOZWPak", "iSoAdGJcMIK5kh7cKYdcTq", "WRNcJ8kmW4NdUa", "mCoZW7RcGci", "WRb8omkk", "ueJcJJ7dOmkFoNeJBaK", "rJJdQt3dOa", "b8oAiHP+", "CvhcSSksW4Gmumk0WOGVW7OGva", "WOxdUCkSuKm", "WRpdM8kbW4NdTq", "wCoKW5FdVNrpgmk7WPNdMmoO", "WR7dHSksW4pdVW", "wCocdazHW4lcUq", "WO8MW4hcT8kC", "wSkaDKi8W5BcO8ojkCk4W6q", "W5b+W5n8WOO", "h0HLW5bxW6xcUYjcW6ybqCk9", "maeNsCog", "r20/W73dNa", "pSoUW6FcHI0", "f0f+WRzsW47cIG", "WOnypSoSWPe", "xr4GWO0", "W6hcNCoFWP/cRmkhWPu2csraCW4", "D8oKjfHdmIetb8krWPK", "mcxcMSkppG", "tL5cWQXE", "h2dcRdJdHSofWRdcO8ky", "tmkYWOBcOc0", "crhdHgZcSq", "zSoJWQCqErdcSG", "xSo7W5zaBJmlimkDwgLxkq", "oNHqACkkiIC", "uNOmW58N", "jL3dKSkcW6W", "W4XahCkHpG", "nSo7W6lcGdK", "WPxdU2mvxITFm0ZcS8keWQ9e", "WRhcU8oqjCob", "WQZdNqZdPSor", "mspcKSkpEG", "W50wW7rLW6W", "W6xcNSozW4RdNmo7W4eGpW", "g8k1WPtcPaG", "W7zgyXBcOa", "WPFdUwiywYjxgxhcUCksWRzL", "aSk9WPpcOca"];
  return $n = function() {
    return i;
  }, $n();
}
var C0;
class bB {
  constructor() {
    p(this, C0, !1);
  }
  async [(C0 = ag(634, 653, "GbV7") + Pi(-470, "^qHF", -509, -466, -485) + An(1148, "9J4a", 1154, 1166), en(1018, 1035, 1029, "nPpc"))](n) {
    function t(a, g, s, C, I) {
      return An(a - 336, C, s - 487, a - -335);
    }
    function e(a, g, s, C, I) {
      return An(a - 321, a, s - 361, I - -685);
    }
    function A(a, g, s, C, I) {
      return en(I - -12, g - 113, s - 79, C);
    }
    function o(a, g, s, C, I) {
      return ag(a - 469, I - 631, g);
    }
    function r(a, g, s, C, I) {
      return en(C - 97, g - 400, s - 147, a);
    }
    try {
      const a = n + (o(1267, "saLI", 1265, 1295, 1274) + "/") + $a;
      await bs(a), this[o(1260, "^qHF", 1256, 1288, 1279) + t(796, 780, 805, "WROX", 779) + e("^[nw", 459, 446, 456, 445)] = !0;
    } catch {
      this[o(1250, "r50E", 1241, 1259, 1257) + t(822, 828, 845, "zLw&") + r("pQXR", 1073, 1079, 1097)] = !1, console[o(1251, "cybN", 1254, 1240, 1258)]($a + (t(835, 828, 837, "&BVA") + t(806, 792, 830, "zLw&") + A(1035, 1002, 1011, "9J4a", 1012) + o(1240, "^qHF", 1288, 1256, 1264) + e("QLLH", 445, 483, 476, 464) + r("cybN", 1134, 1132, 1111) + A(993, 1036, 1018, "Vf1c", 1016) + o(1283, "9J4a", 1285, 1296, 1287) + r("FMxo", 1128, 1143, 1130) + t(789, 764, 771, "zLw&") + r("V#Lz", 1078, 1080, 1096) + A(986, 987, 1001, "^[nw", 993) + t(826, 822, 842, "&%!S") + e("EG]J", 467, 488, 482, 487) + "n."));
    }
  }
  [DB(-683, "mI*9", -660) + Pi(-481, "z(n6", -515, -502, -490) + Pi(-475, "!mf1", -513, -492, -498) + "ed"]() {
    function n(e, A, o, r, a) {
      return An(e - 172, a, o - 405, e - -74);
    }
    function t(e, A, o, r, a) {
      return en(a - -1679, A - 456, o - 398, e);
    }
    return this[t("h)qe", -645, -645, -677, -656) + n(1086, 1099, 1063, 1088, "Ns)T") + t("4YRs", -666, -673, -668, -685)];
  }
}
class Ti extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function so(i, n, t, e, A) {
  return $(A - -280, e);
}
function fe(i, n, t, e, A) {
  return $(e - 668, i);
}
function Ai() {
  var i = ["Fmoxj8oJrG", "CmowaCoVwa", "W4i3e8kOWOu", "fW1fB8o2", "WQ7dTqS", "WRLoi3VdPu/dK1K", "WRJdJCopW7PZ", "t8kMW6T+za", "WQuREwrG", "fmo7WRaltw/dKHxcGgm", "WPJcMmomnsDecmoOoWldUGu", "fmoHW7xcKd4", "p8oIWQFdVSoC", "WR7cPmoAkSoD", "WRVdSw4", "W7m+W5VcSSo7", "WOnGh8kcWRPvW5rK", "W4FdJmkA", "WRBcSCoh", "jCkqzG", "W7CjW5RcOmoQ", "jSocW4VdTgW", "W6PJW4aqAq", "WRNdKmojW4jK", "rSoAWOO6ca", "W6Wzl0NdUW", "hSoNW5dcHt0", "WQhcGKv9WQS", "q8kHWRFdNgddVauudCo+BZm", "imkgq8k9qG", "nCoCbb9VyrVdNSkBk8kqCvC", "WR4/W5m0zCkHW7vg", "W7n2W7VcGCo1", "emkbW4LVxmkcjCkLjConWPP9", "mCoegetdHvZdT2NcRXS", "W6H9W68", "W59PWQ3cGmom", "jfudWOaivH5fESkJdK8", "FCo1fe1sWQr/W6BcRmogWRtdVG", "Dw3cSmoLWQe", "W7OCW4y", "BmkDtq", "zCkVWPuMW6e", "WQ/cM8osjSky", "WQ7cKCop", "WQ8OW7BcLmo+wh3cNW", "W55BWQGaW4jCWPH7e0lcV8kZdG", "lcLgWP7cGq", "WO7cISkflG", "WR/dKmouW55L", "WPyQF8k8F8kzlSkOaWKHW48", "W4ZdOSoLAmkL", "W7j5W6JcP8oZ", "WOeNp8kDWR9uW48", "amo3WOGzWPO", "W5KHjSk2WRa", "W6HJWOK", "W61QW5GqDq", "WOBcHSkpjgy", "pSoWW4vrW4LzWPBcH8o5W6O", "pqZdRZNcLWRdH8ofESoPWPKicG", "W77cUmolWOhdImklWRZdVW3cOCkUsJG", "CbjCW4Dm", "zCkDuLKL", "iCoaiSkLWQC", "k8oqW4S", "WONdKetcN8oH", "zLxcU1xdNq", "WRlcP8oQlSoi", "W6D2W40nyW", "ifebWOymxdraq8kCk34", "WP4WDrtdQCkLWQb2tSol", "WOhcGCkcnxC", "W7XUW4SkAq", "W5W3fG", "D8kvwXRdQG", "W5BcKCkUggZcQJm", "FmkJWOiuW6O", "WQG4F2H6"];
  return Ai = function() {
    return i;
  }, Ai();
}
(function(i, n) {
  var t = i();
  function e(s, C, I, E, c) {
    return $(C - -440, E);
  }
  function A(s, C, I, E, c) {
    return $(E - 586, s);
  }
  function o(s, C, I, E, c) {
    return $(C - -894, s);
  }
  function r(s, C, I, E, c) {
    return $(C - 510, E);
  }
  function a(s, C, I, E, c) {
    return $(E - 435, I);
  }
  for (; ; )
    try {
      var g = parseInt(r(662, 644, 678, "CQ)y", 626)) / 1 * (-parseInt(r(682, 680, 658, "S30T", 667)) / 2) + parseInt(e(-241, -242, -262, "9(4L", -247)) / 3 * (-parseInt(o("CQ)y", -718, -717, -681, -738)) / 4) + parseInt(A("5&Xl", 717, 711, 738, 716)) / 5 * (-parseInt(a(590, 610, "*e%K", 604, 569)) / 6) + -parseInt(r(678, 698, 663, "iZB2", 736)) / 7 + -parseInt(o("bP(t", -701, -701, -697, -739)) / 8 + -parseInt(A("*or8", 697, 715, 713, 698)) / 9 + parseInt(e(-263, -249, -231, "7oP^", -209)) / 10 * (parseInt(r(679, 652, 655, "Gtz%", 659)) / 11);
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ai, -747439 * -1 + -749554 + 400248);
function ve(i, n, t, e, A) {
  return $(A - 733, n);
}
function Hi(i, n, t, e, A) {
  return $(A - 994, t);
}
function $(i, n) {
  var t = Ai();
  return $ = function(e, A) {
    e = e - (-6374 + 88 * 44 + 2625);
    var o = t[e];
    if ($.YoAZYY === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = c.length; m < y; m++)
          x += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(I, E) {
        var c = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      $.bUtyJI = a, i = arguments, $.YoAZYY = !0;
    }
    var g = t[1 * -7807 + 2919 * 1 + 4888], s = e + g, C = i[s];
    return C ? o = C : ($.NLUFEl === void 0 && ($.NLUFEl = !0), o = $.bUtyJI(o, A), i[s] = o), o;
  }, $(i, n);
}
function Io(i, n, t, e, A) {
  return $(e - -82, A);
}
var xt, bo;
class gg {
  constructor(n) {
    U(this, xt);
    U(this, bo);
    function t(a, g, s, C, I) {
      return $(C - -599, s);
    }
    function e(a, g, s, C, I) {
      return $(g - 118, a);
    }
    function A(a, g, s, C, I) {
      return $(s - -528, C);
    }
    this[o(-135, -120, -119, "eQLP") + e(")7Di", 251)] = n;
    function o(a, g, s, C, I) {
      return $(s - -263, C);
    }
    function r(a, g, s, C, I) {
      return $(g - -564, C);
    }
    try {
      M(this, xt, n[e("njbz", 263, 231, 242, 231) + A(-373, -373, -341, "rDz%", -311) + t(-461, -458, "J%DE", -474, -476)] && JSON[o(-66, -125, -105, "PJKG", -133)](n[A(-408, -364, -390, "7oP^", -387) + o(-165, -177, -139, "J%DE", -130) + e("y9b*", 282, 244, 303, 256)])), M(this, bo, n[A(-324, -350, -357, "iZB2", -376) + r(-392, -386, -390, "WlfZ", -397)]);
    } catch (a) {
      console[o(-157, -119, -134, "6!S6")](a);
    }
  }
  get [fe("iZB2", 854, 880, 854) + "id"]() {
    function n(e, A, o, r, a) {
      return fe(A, A - 481, o - 2, o - -887);
    }
    function t(e, A, o, r, a) {
      return fe(e, A - 41, o - 208, o - -514);
    }
    return this[t("chC@", 277, 297) + t("LaMY", 389, 353)][n(-110, "WlfZ", -70) + n(4, "mGmL", -18)];
  }
  get [fe("G3D*", 829, 807, 836) + "s"]() {
    function n(e, A, o, r, a) {
      return ve(e - 456, o, o - 390, r - 403, r - -91);
    }
    function t(e, A, o, r, a) {
      return fe(A, A - 162, o - 333, e - -1247);
    }
    return this[t(-449, "^LC%", -428) + n(824, 830, "G3D*", 801)][n(823, 829, "^LC%", 825) + "s"];
  }
  get [ve(894, "mGmL", 926, 880, 889) + fe("mHp@", 808, 819, 814)]() {
    function n(e, A, o, r, a) {
      return Hi(e - 237, A - 81, o, r - 245, A - -1750);
    }
    function t(e, A, o, r, a) {
      return Io(e - 126, A - 245, o - 225, A - -105, e);
    }
    return this[t("rCO[", -7, -12) + t("aI*F", -24, -40)][t("7oP^", -33, -63) + n(-540, -556, "rCO[", -532)];
  }
  get [ve(922, "^LC%", 893, 919, 899) + "b"]() {
    return S(this, xt);
  }
  get [ve(929, "mHp@", 935, 886, 914) + so(-119, -124, -105, "wBt]", -143)]() {
    return S(this, bo);
  }
  get [so(-129, -63, -61, "W5$C", -91) + fe("7oP^", 852, 818, 818) + so(-111, -188, -109, "i71b", -148) + ve(862, "CQ)y", 888, 899, 888)]() {
    var o, r;
    function n(a, g, s, C, I) {
      return Io(a - 322, g - 195, s - 129, s - 115, a);
    }
    function t(a, g, s, C, I) {
      return Hi(a - 175, g - 55, a, C - 413, C - -1616);
    }
    function e(a, g, s, C, I) {
      return ve(a - 346, I, s - 380, C - 191, a - -907);
    }
    function A(a, g, s, C, I) {
      return so(a - 233, g - 65, s - 455, a, C - 615);
    }
    return !!((r = (o = S(this, xt)) == null ? void 0 : o[e(11, -19, -26, 12, "FxcF") + e(0, 15, 34, -10, "swY7")]) != null && r[e(22, 23, 28, 31, "bYVk") + n("PJKG", 132, 156) + n("7oP^", 244, 215) + A("7^Wm", 458, 520, 495) + t("7^Wm", -425, -443, -461) + t("TM6!", -471, -493, -487) + A("W5$C", 496, 524, 514)]);
  }
  get [ve(839, "CQ)y", 885, 907, 869) + Hi(1182, 1203, "zHEW", 1190, 1166) + fe("*e%K", 853, 839, 835) + Io(40, 50, 36, 46, "^66$") + fe("rCO[", 809, 854, 843) + Io(64, 70, 114, 95, "S30T")]() {
    var r, a;
    function n(g, s, C, I, E) {
      return ve(g - 281, I, C - 135, I - 269, C - -1480);
    }
    function t(g, s, C, I, E) {
      return so(g - 202, s - 34, C - 253, C, E - -697);
    }
    function e(g, s, C, I, E) {
      return ve(g - 165, g, C - 331, I - 197, s - -3);
    }
    function A(g, s, C, I, E) {
      return fe(C, s - 347, C - 73, E - 78);
    }
    function o(g, s, C, I, E) {
      return Io(g - 469, s - 25, C - 47, E - 461, s);
    }
    return !!((a = (r = S(this, xt)) == null ? void 0 : r[o(503, "6!S6", 524, 521, 532) + o(601, ")7Di", 584, 537, 574)]) != null && a[n(-547, -556, -585, "CQ)y") + t(-834, -808, "Ikjr", -850, -829) + o(584, "bP(t", 575, 538, 563) + A(897, 900, "Vuih", 878, 893) + o(587, "WlfZ", 544, 558, 552) + e(")7Di", 922, 948, 944) + t(-866, -835, "6!S6", -876, -838)]);
  }
}
xt = new WeakMap(), bo = new WeakMap();
function ei() {
  const i = ["j0BcTr/cMW", "Dea8dGi", "cWeFfmo2", "WOOFk8kJWQq", "dtJdR8oqW7a", "v1S2ftS", "W4WEB8o/CG", "W5Wej20k", "WOG/fCoHrW", "WQNcTSkpusW4WOK", "W59BWQpcJN3cGsOfW5hcG1zNWOy", "W4CsEmowDq", "uf4hi0K", "WOmZmSkkxq", "pmoOWQJdM8kX", "W7FcGCkWAaO", "g8oDWQLQqG", "e2NdPSoVhq", "BGnUaHC", "wvfTgaC", "W5VdPmoyqCo+W47dQMm", "WOjiWOFcNc8", "lGuEdW", "uZpdVvq9", "BCkIuCkZAG", "tmkRmG", "WQupWOXEqG", "DfRdJa/cPq", "qs3cVmkRxCokW5NcSY8cWOXQBq", "rctdQLm", "vKBdJCkFW7m", "W6z5z3lcQW", "ahRdU8oVcW", "cmksWQddPSo/", "artdKHyk", "WOe4aG", "W4XpWRNdQKe", "aNhcPrD+lCk2EmkuqCoWW4GJ", "W7mVcY3cNW", "WPWZnCkLxa", "WRhdGmkCnSoB", "WRddRHhcPmo/", "B8kKvSkZ", "W4i4a8oQaa", "seDKWOS", "j8oGoXu6mwdcLCoaoW", "judcU1RcLG", "WRhdGmky", "W6H1ExpcQG", "WOO0eSoheG", "WOCnW7FdKW", "o3hcPCkMW54", "W7GvmxSl", "gwBdHJzL", "ccfvW73dSW", "x2TvfZq", "WPBcM8oAWO0", "tu/dUCkbWPW", "uMDepcO", "CCk0AeiR", "W5jfWQVdKwC", "FCk2FW", "bYVdRmokW7K", "AuBdI8ksW7i", "nmoKWQ3dN8kQ", "WO1tWPBdSc8", "WOiXlmk+WR0", "u0bNbqC", "WQDfxmouW5K", "hKJdLcjy", "qIlcSmkTv8knWQBcHtegWPC", "W5/cTmkoDJm", "FSkIv8kUBq", "WRuTBKxcPSkuW4jF", "bhdcPrq6E8oLymkcsG", "krydf8oZ", "WOSQpCk0WQe", "WRVcHSoCWOZcVG", "v0zW", "W7pcLmkiyGe", "WOhcJSotWOdcTa", "vc7dPMiJ", "WQvmzYWmW4JdPmoWoIW", "gwJdNSo9hq", "WR4hWP1vrq", "nSkpW6NdJmoe", "kKZcR0ZcLW", "DKBdJCkFW7m", "stpcLwiWzSomW7BcVsTPE8o2", "fCoScSk+WOK", "fI1fW4FdTW", "j8oTW5yoWQ0", "Bw3dU8kv", "w1DNjX0", "gYDs", "WRdcTCkrW6Wn", "E1nJWPDg", "o8o/WQhdICk3", "E8kWEeuM", "kCo6W4C", "W6u9WQXbwq", "WRxcVmkzWPe", "W4e7WRXqwq", "WPtcNCoqWPRcOW", "vu7cHgzjWQFdUCoTW5y/WP/cIq", "gHRdHZ0r", "WQtcOg5a", "p8oHu8ktCCkYnWW", "WP7dHIZdISkY", "W5XesfhcPW", "WObzWOZcOYm", "lMrkW4VdUG", "WOVdJSktpSol", "h8o6o8k7WO0", "gSoGb8kOWOi", "aCo6sNldUW", "dGNdMIal", "kmo6W5S", "WQvmzYzsWPxcP8owaGeFsJ8", "pv3cRvRcLG", "WQFcOh4Mla", "WQuKW73dTWu", "y37dQSktWPO", "o8oHW4hdOa", "tujWbr0", "WOxcP8oMWOZcMW", "WOeAnCkRDW", "WPhdHZJdOa", "WOGJfmoRfq", "WRJdGCkmmSo/", "bZGfsY5MWQNcK8kyWR0", "wmklWRJcRH0", "EmoRWQhdJ8kQ", "y0ldM8kvW78", "qSkbWQdcTwq", "aY/dSG", "WQNcOxK", "haldMCogW4G", "CCk9xwiT", "W6zUfZhcJG", "crtdGryv", "W7mFDCoFFW", "W6uZWQTwxW", "uKj2cbW", "WOTDWPBcSY4", "BeBdLSkF", "wg9d", "tZpdLcPTg8knW5i", "WRpdHSklpSoo", "gYLd", "W7DZBq", "kLVcRKZcGq", "W6m1WQW", "z2u8BMa", "mCoJWQFdJG", "WPtdGd3dQSk9", "W7Czpg0a", "WR7dGmkri8oD", "CetdHG7cUa", "W6uHdddcNG", "WOaeW6i", "W4XpWR8", "C1Oxeqi", "W7FcMSkBrbS", "mCoJWQJdLq", "a8omW5aBWPq", "WQjjxa", "hqNdNd0m", "iuJcTvZcMG", "W4GoAmohDa", "nmoYW5O", "dSo5WR9cfG", "W7m8eddcJG", "a0FdRWDo", "WOPsWOVcPa", "WRPdW73dLsO", "FSowWOaNja", "W5KuAq", "cColWPBdLSkY", "W70ZWQ1guG", "x2zwfG", "jdVdPCo1dq", "W6XjWRVdQ2m", "tmkTnXDA", "WPjSCmo9W4i", "g8oxW6hdLta", "CmkJiHS", "WPnDWPdcOYm", "WP8lWOW", "EeldKs7cUW", "WR3dMYZdOmkH", "rmkNmbjJ", "vItdPKqM", "FKemcXa", "WPlcNConWOBcOG", "WPebWPbewq", "WQNdObFdQSo/", "W60PcG", "W7xcKSkp", "qsBdQCoaW6y", "WOSnW6ldMwK", "BxRdQSktWPO", "y3aHBq", "EupdLG7cHG", "hg/dHCo1dq", "Ev/dLWtcPa", "W7KDo3a", "WRT7sgVdI8ogtI/cPmk8tSkd", "W6S9WQPBuW", "WRJcUmkrW5ys", "WP8+fa", "eCoPWOBdTmkX", "WQzywSo+W4y", "uI3dG2mT", "WOikW7ldMsC", "WOO0eSoidG", "Dmk0EgiH", "WOFcTCoAwSo7", "p8o7W5RdTLu", "ghhdJsfZ", "y8kJy1aN", "WODzWOtcStm", "W7ZcKmkirqy", "WOpcVConxmo9", "pc8AeCoc", "WO0gW7/dJYW", "da/dNsa", "EmkPWR3cSta", "WP84WOLMAa", "W40jFSow", "WRFdOGddQSoL", "yCkFBuSR", "xsddU0K", "bmoGs0pdTq", "W4jfWRZdQMG", "WRFdRWdcQSo6", "WRFcVmkCW4SD", "W4fUCxNcVa", "W6DZBwlcVa", "DSk/F0mE", "WQFcUmkrW5ym", "hx7dUW", "pSoIWRZdV8kL", "ACk1W7ZcImoWWRFcLLNcICkrW6tcL8oW", "WQikW7ldMsC", "WOJcVx8Dna", "WQTlxmoYW5W", "iN/dTSkpWRe", "WQvpsCoLW4e", "u2zdhgC", "l8ooWRv0eq", "fc1sW4VdUa", "WOuWeSoNdW", "W6O3WQTXwa", "W5qVcZdcKW", "pmkttCkqxmkNfG", "W5bsWRhdOhK", "WR3dSWRdT8oL", "WR3cRCkXW5yl", "jCopWO1Meq", "F1JdLH/cUq", "WR/dOHe", "fWTmjCov", "wSk0WObtW7q2e8kaW6GuWOf8ia", "WOqGkmkOqa", "hcTuW6FdUa", "cs/dTmoVW6O", "WQJcPh4nmW", "W4uiFSkDDW", "t0JcN8k1W5u", "W7r9CwxcQW", "qZhdLNqP", "WP09lW", "ChOnerC", "W7hdSZ9zAmoDW4TXW5fzW7nVoa", "cmo2W5OyWRa", "W6e7WRXqwq", "kXddRmovW4K", "dfVcS1dcGa", "cIvuW5hdVa", "W68HhHVcIa", "hhldS8o5cG"];
  return ei = function() {
    return i;
  }, ei();
}
function WA(i, n, t, e, A) {
  return rA(n - 999, e);
}
function rA(i, n) {
  const t = ei();
  return rA = function(e, A) {
    e = e - (-3116 + -683 * -5);
    let o = t[e];
    if (rA.kbLWKp === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      rA.UILxpT = C, i = arguments, rA.kbLWKp = !0;
    }
    const a = t[-1572 + 12 * 131], g = e + a, s = i[g];
    return s ? o = s : (rA.DSrMIX === void 0 && (rA.DSrMIX = !0), o = rA.UILxpT(o, A), i[g] = o), o;
  }, rA(i, n);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return rA(g - -903, I);
  }
  const e = i();
  function A(g, s, C, I, E) {
    return rA(s - -544, g);
  }
  function o(g, s, C, I, E) {
    return rA(C - 48, g);
  }
  function r(g, s, C, I, E) {
    return rA(I - -367, g);
  }
  function a(g, s, C, I, E) {
    return rA(g - -81, E);
  }
  for (; ; )
    try {
      if (parseInt(a(419, 338, 489, 522, "bwae")) / 1 * (parseInt(a(358, 285, 297, 337, "9V4v")) / 2) + parseInt(a(394, 337, 495, 492, "DO8T")) / 3 * (parseInt(r("5wsJ", 280, 127, 145, 250)) / 4) + parseInt(a(341, 266, 333, 207, "po64")) / 5 + parseInt(o("5wsJ", 676, 596, 492, 717)) / 6 + -parseInt(A("eJt3", -10, -35, -150, 64)) / 7 * (parseInt(A("9%jx", -94, -109, -173, -29)) / 8) + parseInt(a(437, 554, 303, 535, "ZhJB")) / 9 + -parseInt(o("om^4", 617, 488, 623, 516)) / 10 * (parseInt(t(-366, -361, -253, "vLYV", -363)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ei, 318696 + -1 * 653797 + -113054 * -6);
function q(i, n, t, e, A) {
  return rA(t - 699, e);
}
function mA(i, n, t, e, A) {
  return rA(n - 63, e);
}
function GA(i, n, t, e, A) {
  return rA(i - 237, t);
}
function _A(i, n, t, e, A) {
  return rA(A - -135, e);
}
var B0, Q0, E0;
class kB {
  constructor(n) {
    p(this, E0);
    p(this, Q0, [q(1094, 1204, 1172, "xgIX") + _A(180, 248, 150, "f#zC", 248) + "ic", q(1108, 1170, 1046, "^Lcd") + mA(555, 479, 493, "s)Tn") + "ic"]);
    p(this, B0);
    function t(A, o, r, a, g) {
      return rA(r - 725, A);
    }
    function e(A, o, r, a, g) {
      return rA(r - 530, a);
    }
    this[e(960, 994, 1100, "eJt3") + t("DO8T", 1237, 1214) + "d"] = n;
  }
  async [(E0 = GA(608, 566, "9%jx") + "se", Q0 = GA(681, 670, "Al@I") + WA(1380, 1444, 1320, "9V4v") + mA(423, 414, 546, "%Jl&") + _A(198, 368, 436, "vLYV", 337), B0 = GA(770, 686, "]Hmg") + _A(250, 438, 429, "9V4v", 374), q(1079, 886, 1001, "Al@I"))](n) {
    function t(g, s, C, I, E) {
      return mA(g - 34, C - 272, C - 442, s);
    }
    function e(g, s, C, I, E) {
      return _A(g - 180, s - 231, C - 405, C, g - -671);
    }
    const A = await this[a(1032, 1076, 978, "^Lcd") + a(992, 1150, 1104, "j(YA") + r(-334, -354, -367, -299, "bWa#")](n);
    await Promise[a(1105, 1120, 1089, "nLVU") + t(1003, "L25E", 884)]([this[e(-318, -200, "mY&U") + e(-345, -377, "ZX[&") + "d"][o(-416, "j(YA", -324)](n), this[r(-342, -437, -293, -419, "xg2p") + e(-321, -440, "mY&U") + "e"](A)]);
    function o(g, s, C, I, E) {
      return mA(g - 301, C - -709, C - 76, s);
    }
    function r(g, s, C, I, E) {
      return q(g - 55, s - 115, g - -1507, E);
    }
    function a(g, s, C, I, E) {
      return WA(g - 67, C - -435, C - 152, I);
    }
    this[o(-86, "]Hmg", -136) + r(-285, -305, -149, -349, "BzwX") + r(-289, -292, -341, -191, "gcId")]();
  }
  async [WA(1261, 1348, 1412, "v6Fl") + GA(629, 717, "om^4") + "se"](n) {
    function t(a, g, s, C, I) {
      return q(a - 85, g - 474, g - -1190, s);
    }
    function e(a, g, s, C, I) {
      return WA(a - 498, s - -1972, s - 100, C);
    }
    function A(a, g, s, C, I) {
      return WA(a - 39, I - -856, s - 197, C);
    }
    function o(a, g, s, C, I) {
      return GA(a - -742, g - 70, g);
    }
    function r(a, g, s, C, I) {
      return _A(a - 408, g - 464, s - 356, I, C - 1076);
    }
    try {
      if (t(22, -115, "0$)L", -230, 16) !== t(56, -72, "bL3G", 5, -138)) {
        const a = await fetch(n);
        if (!a.ok)
          if (r(1443, 1305, 1280, 1366, "^Lcd") === r(1404, 1433, 1348, 1374, "$(*#")) _0x235fc7[r(1361, 1320, 1368, 1331, "Al@I") + "ch"]((g) => _0x2eb60c[e(-504, -641, -645, "mY&U", -652)](g));
          else throw new Error(A(634, 631, 621, "2x!#", 585) + A(575, 392, 528, "f#zC", 521) + e(-485, -409, -404, "hkD6", -470) + e(-484, -523, -411, "Al@I", -485) + "d.");
        this[o(15, "h0Nc", 82, 104, 17) + "se"] = await a[o(-46, "bL3G", -96, -167, -41)]();
      } else _0x4aa028[r(1490, 1269, 1401, 1405, "eJt3") + e(-461, -436, -426, "mzAR", -566)](_0x28c415);
    } catch (a) {
      if (o(-181, "n0Jk") !== e(-534, -466, -472, "9V4v")) this[r(1509, 1453, 1568, 1435, "Al@I") + "se"] = void 0, console[o(-145, "*76L")](a);
      else {
        _0x3e3c0b[t(-122, -179, "Al@I")](e(-490, -383, -458, "ryWb") + t(-31, -162, "bwae") + o(-108, "mY&U") + r(1468, 1481, 1353, 1446, "0RXW") + e(-402, -408, -437, "po64")), this[A(566, 693, 771, "$(*#", 639) + "se"] = void 0;
        return;
      }
    }
  }
  async [q(915, 1168, 1030, "]a]P") + _A(408, 353, 490, "BzwX", 362) + "e"](n) {
    function t(a, g, s, C, I) {
      return _A(a - 344, g - 118, s - 290, s, g - 56);
    }
    function e(a, g, s, C, I) {
      return _A(a - 450, g - 322, s - 158, I, s - -55);
    }
    this[o("ZhJB", -427, -324) + e(297, 303, 225, 118, "po64")] = void 0;
    function A(a, g, s, C, I) {
      return q(a - 185, g - 367, I - -1486, g);
    }
    function o(a, g, s, C, I) {
      return mA(a - 457, s - -754, s - 383, a);
    }
    function r(a, g, s, C, I) {
      return GA(C - -64, g - 180, a);
    }
    if (!n)
      if (o("^Lcd", -157, -124) !== t(512, 476, "]Hmg")) _0x475da7[e(209, 91, 223, 104, "h0Nc") + "ch"]((a) => _0x545db1[e(349, 235, 262, 290, "0RXW")](a));
      else {
        console[r("om^4", 544, 766, 653)](t(530, 402, "n(5b") + o("BzwX", -172, -243) + e(231, 187, 158, 95, "om^4") + t(230, 289, "DO8T") + A(-251, "nLVU", -133, -397, -256)), this[A(-371, "h0Nc", -243, -392, -267) + "se"] = void 0;
        return;
      }
    await this[o("bL3G", -323, -351) + o("]Hmg", -141, -184) + "se"](n);
  }
  async [mA(616, 499, 616, "s)Tn") + WA(1414, 1539, 1545, "j(YA") + WA(1358, 1333, 1341, "]a]P")](n) {
    function t(g, s, C, I, E) {
      return q(g - 202, s - 144, C - -828, I);
    }
    function e(g, s, C, I, E) {
      return GA(s - -957, s - 211, C);
    }
    const A = await fetch("" + n + this[a(500, 317, 369, 445, "]a]P") + o("bwae", 203, 270, 320, 272) + a(441, 403, 417, 516, "DO8T") + t(106, 367, 245, "eJt3")][6147 + -1 * -1744 + 607 * -13]);
    function o(g, s, C, I, E) {
      return WA(g - 481, E - -1079, C - 194, g);
    }
    const r = A.ok ? -243 * -1 + -3265 + -1511 * -2 : 1;
    function a(g, s, C, I, E) {
      return GA(C - -207, s - 70, E);
    }
    return "" + n + this[o("j(YA", 195, 282, 307, 289) + e(-323, -314, "nLVU") + e(-238, -161, "#4oy") + t(399, 541, 424, "mzAR")][r];
  }
  [q(1010, 1189, 1111, "f1Ba") + q(1176, 1176, 1037, "NL9K") + "s"](n) {
    function t(e, A, o, r, a) {
      return _A(e - 362, A - 174, o - 84, e, a - -430);
    }
    n[t("NL9K", -149, -139, -16, -27) + "ch"]((e) => console[t("2x!#", -224, -104, -293, -215)](e));
  }
  [WA(1397, 1403, 1372, "xg2p") + mA(622, 519, 382, "0$)L") + GA(728, 823, "DO8T")](n) {
    function t(A, o, r, a, g) {
      return q(A - 429, o - 153, r - -1394, a);
    }
    function e(A, o, r, a, g) {
      return _A(A - 84, o - 83, r - 198, A, r - 899);
    }
    n[t(-286, -196, -314, "SH##") + "ch"]((A) => console[e("NL9K", 1346, 1321)](A));
  }
  [q(991, 1067, 1069, "9V4v") + q(1130, 917, 1053, "5wsJ")]() {
    function n(e, A, o, r, a) {
      return mA(e - 94, A - 200, o - 181, e);
    }
    function t(e, A, o, r, a) {
      return GA(o - -692, A - 354, A);
    }
    return window[n("#4oy", 733, 715) + n("f1Ba", 683, 696)][n("$JnK", 793, 671) + t(184, "h0Nc", 124)];
  }
  [q(1089, 1187, 1087, "nLVU") + q(1146, 1018, 1150, "j(YA") + GA(610, 685, "om^4")]() {
    var r;
    function n(a, g, s, C, I) {
      return mA(a - 458, g - 787, s - 56, a);
    }
    function t(a, g, s, C, I) {
      return _A(a - 457, g - 180, s - 287, I, s - -419);
    }
    function e(a, g, s, C, I) {
      return mA(a - 58, I - -90, s - 48, C);
    }
    function A(a, g, s, C, I) {
      return _A(a - 23, g - 444, s - 306, a, s - 726);
    }
    function o(a, g, s, C, I) {
      return q(a - 331, g - 479, g - -872, I);
    }
    try {
      if (o(123, 146, 71, 73, "JXAg") !== o(462, 398, 379, 379, "s)Tn")) {
        if (!this[A("s)Tn", 942, 1032, 1030, 1047) + "se"]) {
          if (o(344, 388, 401, 451, "x^G%") !== t(-193, -196, -67, -31, "v6Fl")) throw new Ti(n("c^f9", 1267, 1354, 1159, 1279) + o(373, 368, 319, 426, "h0Nc") + A("mzAR", 1041, 957, 1081, 957) + n("$JnK", 1206, 1148, 1122, 1095) + ".");
          if (!this[t(-162, -31, -130, -69, "$JnK") + "se"]) throw new _0x5d8240(o(99, 237, 366, 287, "0RXW") + t(-243, -188, -231, -158, "om^4") + t(-256, -210, -116, -172, "xgIX") + A("hkD6", 872, 898, 874, 973) + ".");
          if (!this[o(238, 338, 428, 299, "bL3G") + o(298, 310, 383, 438, "ZhJB") + "d"][t(-66, -227, -147, -118, "JXAg") + t(-81, -112, -133, -183, "XP7*") + o(50, 184, 197, 206, "nLVU") + "ed"]()) throw new _0x1bd4df(n("x^G%", 1414, 1457, 1476, 1527) + n("L25E", 1280, 1164, 1397, 1397) + e(360, 342, 292, "h0Nc", 372) + n("L25E", 1326, 1339, 1456, 1232) + ".");
          this[t(-296, -286, -255, -180, "L25E") + t(-267, -358, -238, -120, "L25E")] = new _0x6f6331(_0x4fccf7(this[n("NL9K", 1153, 1030, 1085, 1028) + "se"], this[A("$JnK", 1101, 992, 927, 859) + t(-86, -189, -174, -107, "bL3G")]())), this[t(-98, -87, -91, -95, "ryWb") + e(411, 276, 326, "ZX[&", 358) + "s"](this[e(495, 418, 318, "bL3G", 426) + t(117, -7, 20, 41, "j(YA")][t(-136, 77, -48, 56, "$(*#") + "s"]), this[o(116, 147, 168, 14, "hkD6") + t(-71, -242, -152, -149, "hkD6") + n("$JnK", 1150, 1076, 1124, 1262)](this[n("XP7*", 1191, 1149, 1215, 1061) + A("$JnK", 1030, 1163, 1164, 1039)][A("eJt3", 1013, 1126, 1002, 1255) + o(451, 403, 402, 431, "mY&U")]);
        }
        if (!this[t(-94, -131, -56, 83, "*76L") + n("c^f9", 1413, 1391, 1360, 1282) + "d"][t(-60, -154, -41, 19, "bwae") + e(411, 261, 240, "x^G%", 348) + n("^Lcd", 1342, 1329, 1339, 1350) + "ed"]()) {
          if (n("ZhJB", 1171, 1101, 1251, 1064) !== n("om^4", 1401, 1428, 1320, 1266)) throw new Ti(e(304, 276, 414, "n(5b", 368) + e(548, 482, 430, "f#zC", 444) + n("XP7*", 1160, 1140, 1229, 1267) + t(56, -26, -76, -110, "ZX[&") + ".");
          return null;
        }
        this[t(-185, -148, -120, -259, "^Lcd") + e(373, 252, 290, "*76L", 367)] = new gg(pB(this[A("%Jl&", 894, 897, 859, 797) + "se"], this[e(320, 419, 225, "DO8T", 337) + o(410, 402, 410, 309, "c^f9")]())), this[o(38, 142, 175, 97, "eJt3") + n("L25E", 1276, 1173, 1314, 1151) + "s"](this[e(451, 417, 431, "f#zC", 378) + o(294, 320, 227, 375, "c^f9")][t(-101, -199, -212, -153, "]Hmg") + "s"]), this[o(252, 329, 203, 276, "vLYV") + o(260, 287, 406, 249, "c^f9") + t(-225, -340, -208, -145, "9V4v")](this[e(382, 342, 450, "BzwX", 422) + t(-204, -173, -189, -69, "9%jx")][o(405, 381, 444, 297, "BzwX") + e(379, 328, 308, "hkD6", 318)]);
      } else return this[A("eJt3", 1269, 1137, 1051, 1111) + t(-22, -13, -154, -229, "xgIX")];
    } catch (a) {
      if (n("*76L", 1182, 1181) !== A("Al@I", 849, 917)) throw new _0x51b87d(e(342, 405, 442, "JXAg", 419) + e(346, 474, 523, "j(YA", 468) + t(12, -91, 24, 127, "#4oy") + o(134, 256, 358, 299, "bwae") + ".");
      {
        if (a instanceof Ti)
          if (n("ZhJB", 1349, 1418) === A("0RXW", 903, 963)) a[e(367, 367, 388, "#4oy", 450)]();
          else {
            const s = this[t(-256, -235, -136, -178, "ZX[&") + t(-100, -165, -33, 26, "fjsK") + "se"]();
            return (r = s == null ? void 0 : s[t(-383, -200, -249, -358, "#4oy") + n("f#zC", 1259, 1306)]) == null ? void 0 : r[n("s)Tn", 1167, 1223) + o(409, 392, 337, 324, "^Lcd")];
          }
        else if (a instanceof Error)
          if (e(429, 473, 353, "Al@I", 332) !== e(399, 317, 495, "XP7*", 408)) console[n("%Jl&", 1203, 1113)](a);
          else return !!this[e(452, 396, 568, "Al@I", 500) + t(128, 118, 19, -92, "BzwX")];
        const g = {};
        g[t(-237, -115, -123, -75, "XP7*") + A("]a]P", 968, 1046)] = !1, g[n("]Hmg", 1192, 1289) + "s"] = [], g[n("c^f9", 1367, 1282) + o(95, 145, 207, 244, "mzAR")] = [], g[n("*76L", 1246, 1316) + o(428, 311, 329, 231, "h0Nc") + t(51, -10, 26, 11, "ZX[&")] = void 0, g[o(256, 349, 434, 454, "v6Fl")] = function() {
        }, g[A("bWa#", 1148, 1117) + n("BzwX", 1358, 1278)] = "", this[t(-132, -117, -131, -211, "fjsK") + e(551, 439, 537, "v6Fl", 525)] = new gg(g);
      }
    }
  }
  [GA(680, 766, "f1Ba") + mA(492, 367, 445, "5wsJ") + mA(475, 605, 507, "#4oy") + _A(226, 329, 343, "]Hmg", 351)]() {
    function n(e, A, o, r, a) {
      return mA(e - 454, A - -785, o - 367, a);
    }
    function t(e, A, o, r, a) {
      return mA(e - 112, e - 200, o - 316, o);
    }
    return !!this[n(-398, -275, -364, -324, "bwae") + t(732, 727, "f1Ba")];
  }
  [WA(1428, 1362, 1319, "xgIX") + GA(753, 859, "L25E") + q(1263, 1041, 1131, "0RXW") + "t"]() {
    function n(e, A, o, r, a) {
      return q(e - 360, A - 194, r - -1653, a);
    }
    function t(e, A, o, r, a) {
      return WA(e - 85, r - -565, o - 296, A);
    }
    return this[t(764, "JXAg", 692, 832) + n(-433, -436, -537, -426, "DO8T")];
  }
  [q(1027, 1243, 1167, "hkD6") + q(1141, 1146, 1231, "$JnK") + "se"]() {
    function n(r, a, g, s, C) {
      return q(r - 65, a - 46, g - -964, a);
    }
    function t(r, a, g, s, C) {
      return mA(r - 490, g - 925, g - 383, s);
    }
    function e(r, a, g, s, C) {
      return WA(r - 241, a - -9, g - 30, C);
    }
    function A(r, a, g, s, C) {
      return _A(r - 179, a - 430, g - 287, s, g - 467);
    }
    if (!this[e(1433, 1534, 1522, 1500, "gcId") + "se"]) {
      if (e(1377, 1303, 1428, 1162, "fjsK") !== o(815, 937, 875, "mzAR")) return null;
      {
        _0x45a764 instanceof _0x2efe6f ? _0x101a75[n(91, "xg2p", 44)]() : _0x4d1858 instanceof _0x36eb31 && _0x4dcf86[o(1209, 1162, 1038, "xgIX")](_0xb89e0a);
        const r = {};
        r[n(212, "gcId", 278) + n(173, "xgIX", 200)] = !1, r[e(1201, 1332, 1429, 1291, "]Hmg") + "s"] = [], r[n(7, "f#zC", 79) + o(805, 912, 1052, "om^4")] = [], r[e(1466, 1374, 1373, 1308, "nLVU") + A(853, 785, 822, "xg2p") + e(1620, 1519, 1447, 1606, "mzAR")] = void 0, r[A(847, 663, 709, "s)Tn")] = function() {
        }, r[n(220, "SH##", 280) + t(1431, 1370, 1324, "0$)L")] = "", this[n(68, "vLYV", 189) + n(103, "c^f9", 228)] = new _0x90df58(r);
      }
    }
    function o(r, a, g, s, C) {
      return q(r - 28, a - 188, a - -95, s);
    }
    try {
      return o(1272, 1160, 1079, "f1Ba", 1193) !== t(1613, 1483, 1527, "ZX[&", 1455) ? JSON[A(546, 600, 667, "j(YA", 607)](this[e(1419, 1472, 1379, 1363, "5wsJ") + "se"]) : (_0x4570b3 instanceof _0x28e84d && _0x5b9270[A(772, 651, 643, "9V4v", 641) + e(1358, 1315, 1249, 1288, "s)Tn")](_0x168fb1), null);
    } catch (r) {
      return A(832, 972, 900, "DO8T") === o(983, 965, 849, "bL3G") ? (r instanceof Error && (t(1328, 1531, 1425, "5wsJ") === o(1137, 997, 933, "po64") ? D[t(1400, 1491, 1416, "hkD6") + A(830, 626, 690, "xgIX")](r) : this[n(103, "%Jl&", 72) + n(128, "xg2p", 117) + "d"] = _0x2808ca), null) : _0xaa8210[e(1590, 1452, 1335, 1494, "bwae")](this[e(1493, 1352, 1358, 1475, "om^4") + "se"]);
    }
  }
  [WA(1644, 1549, 1409, "po64") + mA(618, 629, 561, "po64")]() {
    var o;
    function n(r, a, g, s, C) {
      return WA(r - 62, a - -889, g - 366, g);
    }
    function t(r, a, g, s, C) {
      return q(r - 21, a - 203, C - 296, g);
    }
    const e = this[n(529, 537, "h0Nc") + n(538, 440, "xg2p") + "se"]();
    function A(r, a, g, s, C) {
      return mA(r - 282, a - 922, g - 372, g);
    }
    return ((o = e == null ? void 0 : e[A(1489, 1371, "ZX[&") + A(1393, 1299, "*76L")]) == null ? void 0 : o[t(1332, 1548, "%Jl&", 1589, 1452)]) || [];
  }
  [q(1125, 1151, 1178, "xgIX") + GA(538, 413, "2x!#") + q(1171, 951, 1078, "DO8T")]() {
    var r;
    function n(a, g, s, C, I) {
      return GA(C - 170, g - 346, I);
    }
    function t(a, g, s, C, I) {
      return WA(a - 41, s - -582, s - 208, g);
    }
    function e(a, g, s, C, I) {
      return q(a - 30, g - 282, a - 74, g);
    }
    function A(a, g, s, C, I) {
      return GA(g - -526, g - 44, a);
    }
    const o = this[A("$JnK", 38) + n(788, 863, 1045, 921, "0$)L") + "se"]();
    return (r = o == null ? void 0 : o[e(1116, "0$)L") + t(903, "h0Nc", 941)]) == null ? void 0 : r[e(1181, "%Jl&") + A("bwae", 100)];
  }
}
const xa = _e(void 0);
xa.displayName = "CommonConfigurationContext";
function ks() {
  const i = ue(xa);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  function t(r, a, g, s, C) {
    return $A(s - -367, C);
  }
  function e(r, a, g, s, C) {
    return $A(s - -6, r);
  }
  const A = i();
  function o(r, a, g, s, C) {
    return $A(C - 1e3, r);
  }
  for (; ; )
    try {
      if (-parseInt(t(15, 4, 15, 7, "Vx8)")) / 1 + parseInt(e("$xOm", 366, 369, 360, 351)) / 2 + -parseInt(e("Frg4", 370, 359, 363, 364)) / 3 + -parseInt(t(14, 12, 17, 14, "aMmh")) / 4 + -parseInt(o("t7kz", 1365, 1365, 1364, 1368)) / 5 + parseInt(t(4, 3, 5, 9, "aMmh")) / 6 + parseInt(e("kgvX", 378, 368, 369, 367)) / 7 * (parseInt(t(-8, 2, -2, -2, "KXGd")) / 8) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ti, 6 * -40756 + 27 * 6282 + 251142);
function ti() {
  const i = ["WPxdSvPej8o6qsVcRHZcPq", "yCoXW7XmW7XlWO9nBYTrWQSj", "uH8fWOX9WOeq", "W6VcQ8obnSkjnvlcGtxdT05f", "jeKVW61BWOxdM1JdRL/dMXS", "W4OOwmoEBWNdOqCUWRnyymk2", "rCkTc8oIa8k4fCknnYnSWRT3", "cbOOWQ1l", "fSoEW6GRdSoGWQJdSH4KW7a", "W5SUW4WhW6fZw2FcJubCWPK", "e1hdG8oUW4NdPHZdU39OW5BcPmo6", "qCkRdCoHa8oYq8k5iWzs", "W6XjlsG", "WPVcSca9rCo0Ba", "W6LjoSoOWP7cL8kGaCkzW4tcPq", "W5yfW7mUFum0W5BdOvrGWR3dJq", "W6VcQSoanCkdnblcJJRdRKDMAW", "W7rBpSkrd8ooW5/dR2NcLSoxW5G"];
  return ti = function() {
    return i;
  }, ti();
}
function $A(i, n) {
  const t = ti();
  return $A = function(e, A) {
    e = e - (-28 * 123 + 7084 + -3275);
    let o = t[e];
    if ($A.KFRzSh === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      $A.YXadSG = C, i = arguments, $A.KFRzSh = !0;
    }
    const a = t[-8367 * -1 + 8931 + -17298], g = e + a, s = i[g];
    return s ? o = s : ($A.kFnlbB === void 0 && ($A.kFnlbB = !0), o = $A.YXadSG(o, A), i[g] = o), o;
  }, $A(i, n);
}
function SB() {
  const { assetsDirectoryPath: i } = ks(), [n, t] = pA();
  function e(o, r, a, g, s) {
    return $A(g - -100, r);
  }
  oA(() => {
    async function o() {
      const r = new bB(), a = new kB(r);
      function g(s, C, I, E, c) {
        return $A(E - -143, c);
      }
      await a[g(244, 241, 241, 239, "2zGI")](i), t(a);
    }
    o();
  }, [i]);
  const A = {};
  return A[e(269, "X5](", 284, 277) + "le"] = n, A;
}
function YA(i, n) {
  var t = oi();
  return YA = function(e, A) {
    e = e - 195;
    var o = t[e];
    if (YA.GzKWMz === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = c.length; m < y; m++)
          x += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(I, E) {
        var c = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      YA.nfyyQP = a, i = arguments, YA.GzKWMz = !0;
    }
    var g = t[-9169 * -1 + 8160 + 13 * -1333], s = e + g, C = i[s];
    return C ? o = C : (YA.TIfpJA === void 0 && (YA.TIfpJA = !0), o = YA.nfyyQP(o, A), i[s] = o), o;
  }, YA(i, n);
}
function oi() {
  var i = ["WRtcO2bqW6RdVmk4FCkPrSowW73dJW", "WRFcP2nAW6ddU8k6c8kZFCo4W6FdQCkk", "WPuZW7BdNCkU", "W4ddNuqQW53cQYpdOq", "W4hdNXDKWPJdLXBdKmkynb7dOa", "W71DW7VcGaXYdW", "nhDMgmkrW6xcUSo7", "W41XWPNcI8o6W7hcHCkblsdcHSkjW5O", "c8kFW409lhpdTNPbeSkAWPtdVa", "cWddICohD13cJ8o7", "oCo1bSkhhq", "WPvgAgNcQGldJSkLW5ZdQSkpWO/dHa", "pmk7W6lcGSogW5SBFq", "mhi0xmoAWP7dSCooAmoBfha6", "W45XWPxcHmoXW7lcGSoyeJlcG8kJW7Pd", "WRtcPrO0WOlcM8oFwa", "aZHNWOVcLmk5jcZcSa", "w8oxsCkWWQvGddJcRmoahGu", "tIJdPWNcSK3dUJdcUZNdOc/cRW", "rmkQq8kvkqpdV8kMW7y", "EmkQaNOxW7KXdqCPW58+gq", "WRCSsIOxaCo4AW", "WOTeWR0IW6W+hq", "WPpcSmkLoGW", "bd7dVmoVW4jIW7vbW6ldPCo8iW", "WOJcK0VdRqFcSmkQwmorBSk6W5m", "nYddTCk9meXgnhWNkKhdHa"];
  return oi = function() {
    return i;
  }, oi();
}
(function(i, n) {
  function t(s, C, I, E, c) {
    return YA(C - -567, I);
  }
  function e(s, C, I, E, c) {
    return YA(E - -951, s);
  }
  function A(s, C, I, E, c) {
    return YA(E - -191, c);
  }
  function o(s, C, I, E, c) {
    return YA(E - 285, C);
  }
  var r = i();
  function a(s, C, I, E, c) {
    return YA(C - 513, c);
  }
  for (; ; )
    try {
      var g = parseInt(t(-372, -362, ")gEu", -357, -374)) / 1 * (parseInt(e("nntR", -728, -739, -730, -740)) / 2) + -parseInt(A(36, 36, 17, 27, "KJpU")) / 3 * (-parseInt(t(-382, -371, "M*^q", -360, -358)) / 4) + parseInt(a(721, 726, 736, 731, "W@(]")) / 5 * (parseInt(t(-358, -352, "5Fa4", -362, -338)) / 6) + -parseInt(e("j7Rh", -747, -726, -737, -724)) / 7 + -parseInt(o(497, "4^Tb", 480, 489, 501)) / 8 + -parseInt(e("LXc2", -721, -744, -735, -730)) / 9 * (-parseInt(A(12, 0, 1, 11, "Nz]X")) / 10) + parseInt(A(33, 18, 9, 19, "QbA^")) / 11 * (-parseInt(o(502, "Apn[", 500, 493, 479)) / 12);
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, -1 * -1451127 + 702599 * 1 + -1422965);
function GB({ crosshatch: i }) {
  function n(e, A, o, r, a) {
    return YA(a - 634, A);
  }
  function t(e, A, o, r, a) {
    return YA(a - 612, o);
  }
  return i != null && i[n(830, "QbA^", 825, 824, 832) + "id"] ? Kt[n(857, "sOk(", 854, 866, 853) + "r"] : Kt[t(826, 807, "5Fa4", 811, 818)];
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return lA(I - 331, E);
  }
  function e(g, s, C, I, E) {
    return lA(g - 159, E);
  }
  const A = i();
  function o(g, s, C, I, E) {
    return lA(s - -44, E);
  }
  function r(g, s, C, I, E) {
    return lA(E - 197, s);
  }
  function a(g, s, C, I, E) {
    return lA(s - -442, g);
  }
  for (; ; )
    try {
      if (-parseInt(e(306, 314, 310, 295, "GNCr")) / 1 + -parseInt(e(325, 322, 340, 333, "^]kC")) / 2 + -parseInt(o(105, 119, 118, 133, "5eFZ")) / 3 * (parseInt(t(471, 492, 489, 480, "QTlO")) / 4) + parseInt(r(382, "u*rE", 379, 384, 370)) / 5 + -parseInt(r(340, "rU[c", 356, 356, 355)) / 6 * (-parseInt(r(367, "jEB(", 353, 361, 356)) / 7) + parseInt(a("zTPm", -300, -308, -310, -312)) / 8 * (parseInt(e(304, 307, 307, 291, "JIxn")) / 9) + parseInt(o(117, 106, 113, 121, "hXM]")) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ni, -241710 + -176141 * -10 + -605291);
function lA(i, n) {
  const t = ni();
  return lA = function(e, A) {
    e = e - (1087 * 7 + 5521 + -12988);
    let o = t[e];
    if (lA.SpmyqI === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      lA.IATIks = C, i = arguments, lA.SpmyqI = !0;
    }
    const a = t[-1322 + -602 * -16 + -8310], g = e + a, s = i[g];
    return s ? o = s : (lA.DCMCsL === void 0 && (lA.DCMCsL = !0), o = lA.IATIks(o, A), i[g] = o), o;
  }, lA(i, n);
}
function ni() {
  const i = ["B8okh8ovW4G", "ksjqWR3dKmouyCkNWR7dOCoOb1FcLq", "zCkZW7RcUSoutstcOKZdHWjdqW", "W5fKWQWPWOqnksm", "WQRdU8osWQldL8kjfM7cTJFdH8k6WRW", "CWldQwdcVa", "WQ7cVwunWPq", "uSkMlGldMSo6WOFdHsRdH8oO", "WOjMC8kcWP/cNSkw", "WQNcQSoSW6BdUSoaWQNdJq", "dmkkqmkuWPzyFSo3na3dPsHz", "W71cW7CYp2mXydCaW4m", "c8kqWRP6WRW", "bCk4BdChW7zG", "qNdcSSoHjq", "W7VdSSoA", "uCogiwFdQvbqASoCWPi3", "W4JcMKmjW4rRWOnHgqSEW7O", "tvRcQmkdpq", "xCkQW7jdfa", "i17cSsddQ3y0WQtcNHVdGa", "W7qEWQmEW5xcRwRdRmoMW7tdI1m", "xSomfCoh", "uCk6WQjCWOhcU1G", "WOOmW5pdPSk6", "yb14WQbRcSkmW7tdQYulBCk7", "BmkUW6PMgq", "iCoeW7qRWP/dILq", "d8ofl1rVWOm1c8o8fsJdIKvs", "W6KGW74", "xmoqgCopW4u", "W4JcN0qkW4vPW4fTiY4YW7RcOq", "W5LqWONdQhK", "jCkUlmk/AG"];
  return ni = function() {
    return i;
  }, ni();
}
function NB({ children: i }) {
  function n(s, C, I, E, c) {
    return lA(I - 708, E);
  }
  const { bramble: t } = SB();
  function e(s, C, I, E, c) {
    return lA(I - 553, C);
  }
  const A = bA(() => ({ redfin: GB({ crosshatch: t == null ? void 0 : t[o(258, 231, "z0!9", 244) + e(728, "zTPm", 714) + g(996, "Ak9l", 985, 1005, 991) + "t"]() }), crosshatch: t == null ? void 0 : t[e(719, "i%%x", 728) + n(887, 873, 878, "xVIs") + o(221, 249, "xjAb", 236) + "t"](), bramble: t, wasLicenseValidated: t == null ? void 0 : t[e(722, "exbg", 727) + e(721, "JIxn", 721) + n(864, 847, 856, "i%%x") + n(864, 854, 852, "^]kC")]() }), [t]);
  function o(s, C, I, E, c) {
    return lA(E - 90, I);
  }
  function r(s, C, I, E, c) {
    return lA(C - 135, E);
  }
  const a = {};
  a[o(254, 262, "j1#c", 245)] = A;
  function g(s, C, I, E, c) {
    return lA(c - 829, C);
  }
  return a[r(284, 287, 270, "^]kC") + r(313, 306, 317, "MLq^")] = i, k(Yn[r(293, 291, 305, "^]kC") + o(226, 242, "I1XH", 241)], a);
}
const RB = 23 * 94 + -346 + -46 * -4;
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
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 4 * 1541 + -5601 + -163 * 1 && a.status !== 2291 * -2 + 2846 + 2137 : !0;
  }
}
var Jt, Pe, At, Ut, ko, So, Go, No;
class WB {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    U(this, Jt);
    U(this, Pe);
    U(this, At);
    U(this, Ut);
    U(this, ko);
    U(this, So);
    U(this, Go);
    U(this, No);
    M(this, Jt, t), M(this, ko, n), M(this, No, e), M(this, So, window.location.origin), M(this, Go, "8.0.0");
  }
  async init(n) {
    if (M(this, At, this.shouldCountTransactions(n)), ca.info("Transaction counting is " + (S(this, At) ? "enabled" : "disabled")), Ia()) {
      M(this, Pe, !0), M(this, At, !1);
      return;
    }
    if (!S(this, At)) {
      M(this, Pe, !0);
      return;
    }
    if (M(this, Ut, S(this, Jt).transactionCountingToken), !S(this, Ut)) {
      console.warn("Transaction counting token is missing"), M(this, Pe, !1);
      return;
    }
    M(this, Pe, await S(this, Jt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, a;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((a = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : a["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!S(this, At) || !S(this, Pe)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = S(this, ko), e.id = S(this, So), e.version = S(this, Go);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = S(this, No);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + S(this, Ut);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return S(this, Pe) || !1;
  }
}
Jt = new WeakMap(), Pe = new WeakMap(), At = new WeakMap(), Ut = new WeakMap(), ko = new WeakMap(), So = new WeakMap(), Go = new WeakMap(), No = new WeakMap();
function vB(i, n) {
  const { crosshatch: t, bramble: e } = pi(), [A, o] = pA(null);
  oA(() => {
    if (!t) return;
    (async () => {
      const g = new FB(n), s = new WB({ hwids: e.getHwids(), tokenHandler: g, transactionType: i });
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
  const { transactionCounting: e } = vB(t, n), A = bA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(Tn.Provider, { value: A, children: i });
}
const qe = {};
qe.FACE = "web-capture-face", qe.DOCUMENT = "web-capture-document", qe.MAGNIFEYE = "web-capture-magnifeye", qe.SMILE = "web-capture-smile", qe.PALM = "web-capture-palm", qe.EYEGAZE = "web-capture-eyegaze", qe.MULTIRANGE = "web-capture-multirange";
const LB = qe;
var jA = function() {
  return jA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, jA.apply(this, arguments);
};
function jt(i, n, t) {
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
  return JB.test(i) || i.charCodeAt(0) === -14 * 173 + -8967 + 2 * 5750 && i.charCodeAt(-8357 + 6013 * -1 + 14371) === 110 && i.charCodeAt(8202 + 233 * 5 + -9365) < 5736 + 1089 * -1 + -17 * 268;
});
function YB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var _i, sg;
function PB() {
  return sg || (sg = 62 * 154 + 92 * 7 + -237 * 43, _i = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), s = 37 * -63 + -571 * -13 + 134 * -38; s < r.length; s++) {
      var C = r[s];
      if (!g(C)) return !1;
      var I = n[C], E = t[C];
      if (o = e ? e.call(A, I, E, C) : void 0, o === !1 || o === void 0 && I !== E) return !1;
    }
    return !0;
  }), _i;
}
var TB = PB();
const HB = /* @__PURE__ */ YB(TB);
var V = "-ms-", fo = "-moz-", T = "-webkit-", Ss = "comm", yi = "rule", da = "decl", _B = "@import", Gs = "@keyframes", KB = "@layer", Ns = Math.abs, la = String.fromCharCode, vr = Object.assign;
function jB(i, n) {
  return uA(i, -7423 + -13 * -571) ^ 1 * 7534 + 94 * 21 + -9463 ? (((n << 6978 + -218 * 32 ^ uA(i, 4350 + 8573 * 1 + -12923)) << 3 * 3331 + 8373 + 18364 * -1 ^ uA(i, 290 * 14 + 6141 + -10200)) << -1431 * 2 + -1992 + 4856 ^ uA(i, -6 * -1194 + -4920 + -2242)) << 2 ^ uA(i, -1 * 1007 + -59 * 156 + -5107 * -2) : -5 * -401 + -1395 * -2 + -4795;
}
function Rs(i) {
  return i.trim();
}
function Je(i, n) {
  return (i = n.exec(i)) ? i[0] : i;
}
function O(i, n, t) {
  return i.replace(n, t);
}
function pn(i, n, t) {
  return i.indexOf(n, t);
}
function uA(i, n) {
  return i.charCodeAt(n) | 27 * -263 + 3163 + 3938;
}
function qt(i, n, t) {
  return i.slice(n, t);
}
function ye(i) {
  return i.length;
}
function Fs(i) {
  return i.length;
}
function xo(i, n) {
  return n.push(i), i;
}
function qB(i, n) {
  return i.map(n).join("");
}
function Ig(i, n) {
  return i.filter(function(t) {
    return !Je(t, n);
  });
}
var wi = -380 + -1 * -1153 + -386 * 2, Vt = 1, Ws = -1 * -7039 + 8391 * 1 + -2 * 7715, Ie = 0, gA = 12 * 224 + 277 * 34 + 1 * -12106, oo = "";
function Di(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = wi, g.column = Vt, g.length = r, g.return = "", g.siblings = a, g;
}
function Ve(i, n) {
  return vr(Di("", null, null, "", null, null, -165 * 22 + 9936 + -6306, i.siblings), i, { length: -i.length }, n);
}
function kt(i) {
  for (; i.root; ) i = Ve(i.root, { children: [i] });
  xo(i, i.siblings);
}
function VB() {
  return gA;
}
function ZB() {
  return gA = Ie > 2967 + 6839 * -1 + 44 * 88 ? uA(oo, --Ie) : 3 * 487 + 343 * -22 + 6085, Vt--, gA === -1549 * -5 + 946 + 8681 * -1 && (Vt = -2918 + 1129 * -3 + 6306, wi--), gA;
}
function de() {
  return gA = Ie < Ws ? uA(oo, Ie++) : -3111 + 7 * -643 + -173 * -44, Vt++, gA === -5 * -349 + 1393 + -3128 && (Vt = 1728 + -4533 * -2 + -10793, wi++), gA;
}
function ft() {
  return uA(oo, Ie);
}
function mn() {
  return Ie;
}
function bi(i, n) {
  return qt(oo, i, n);
}
function Mr(i) {
  switch (i) {
    case 0:
    case -2 * 1756 + 11 * -287 + 21 * 318:
    case -1801 * 2 + 4194 + -582:
    case -21 * -127 + -7 * -1276 + -11586:
    case 502 + -5 * 946 + 4260:
      return 33 * 231 + 4295 * -1 + -1 * 3323;
    case 33:
    case 4444 + 78 * -39 + -1359:
    case 44:
    case 1 * 3769 + 2119 * 4 + 38 * -321:
    case 293 * -14 + -1574 + 19 * 302:
    case 881 * -1 + 7814 + -6869:
    case 1836 + 95 * -18:
    case 20 * -8 + -7360 + -7579 * -1:
    case -7163 * 1 + 53 * 141 + 11 * -17:
    case -28 * 103 + 4685 + -419 * 4:
      return 5021 + 151 * -11 + -3356;
    case 9 * 682 + 5930 + -12010:
      return 201 * 47 + 4 * -2351 + -40;
    case -3386 * -1 + -5917 + -15 * -171:
    case -4131 + -2 * -675 + 2820:
    case -1917 * 3 + 2 * -4051 + 13893:
    case 4143 * 2 + -2 * 4607 + 1019:
      return -6433 + -1 * -6723 + -288;
    case 32 * 201 + -5102 + -1289:
    case 93:
      return -3343 * -1 + 1 * 8824 + -12166;
  }
  return 2 * 1495 + -4321 + 1331;
}
function zB(i) {
  return wi = Vt = -8012 + -2 * -3550 + -83 * -11, Ws = ye(oo = i), Ie = 1 * 4459 + -1 * 3607 + -6 * 142, [];
}
function XB(i) {
  return oo = "", i;
}
function Ki(i) {
  return Rs(bi(Ie - 1, Lr(i === -7 * 1006 + 3807 + -1 * -3326 ? i + (438 + 436 * -1) : i === 449 * 4 + -1821 * -4 + -1 * 9040 ? i + 1 : i)));
}
function $B(i) {
  for (; (gA = ft()) && gA < 33; ) de();
  return Mr(i) > -1 * 4457 + -3 * 296 + -1 * -5347 || Mr(gA) > 769 * -13 + 4035 + -1 * -5965 ? "" : " ";
}
function AQ(i, n) {
  for (; --n && de() && !(gA < 48 || gA > 16 * -113 + 16 * 337 + -3482 * 1 || gA > 7157 * -1 + 3 * -2777 + 1 * 15545 && gA < 15 * 442 + -5704 + 21 * -41 || gA > 4330 + 23 * -45 + -3225 && gA < -1481 + 8409 * -1 + 3329 * 3); ) ;
  return bi(i, mn() + (n < -28 * 142 + 8088 + -4106 * 1 && ft() == -8 * 602 + -7083 + -291 * -41 && de() == -14802 + -7417 * -2));
}
function Lr(i) {
  for (; de(); ) switch (gA) {
    case i:
      return Ie;
    case 8741 * 1 + -688 + 297 * -27:
    case -346 * 2 + 1832 * -5 + 9891:
      i !== -1665 + 361 * 25 + 3 * -2442 && i !== 11039 + -1375 * 8 && Lr(gA);
      break;
    case 13 * 573 + -2160 * -4 + -11 * 1459:
      i === 922 * -6 + 109 * -2 + 5791 && Lr(i);
      break;
    case -8208 + 431 * 23 + -1613:
      de();
      break;
  }
  return Ie;
}
function eQ(i, n) {
  for (; de() && i + gA !== -2024 + 6 * 1237 + -5351 + (317 * -31 + -6054 * 1 + 15891 * 1); ) if (i + gA === 3745 + 327 * -2 + -3049 + (-1 * 8818 + -383 + -237 * -39) && ft() === -3504 + 4 * -471 + 5435) break;
  return "/*" + bi(n, Ie - (2 * 4255 + -2 * 673 + -7163)) + "*" + la(i === 9279 + 6 * 733 + 47 * -290 ? i : de());
}
function tQ(i) {
  for (; !Mr(ft()); ) de();
  return bi(i, Ie);
}
function oQ(i) {
  return XB(yn("", null, null, null, [""], i = zB(i), -8 * 1210 + -6376 + -892 * -18, [7026 * -1 + 3647 * -1 + 10673], i));
}
function yn(i, n, t, e, A, o, r, a, g) {
  for (var s = 0, C = -334 + -3283 * -1 + -1 * 2949, I = r, E = 4 * 2111 + -8327 + -39 * 3, c = 0, x = 1429 + -1 * -2932 + 4361 * -1, d = -8473 + -2 * 4161 + 16796, l = -23 + -1 * -24, Q = -5595 + -1 * -7365 + -1769, h = -6483 + -83 * -19 + -2453 * -2, m = "", y = A, G = o, b = e, w = m; l; ) switch (x = h, h = de()) {
    case 33 * 109 + 8081 + -11638:
      if (x != 3938 * -2 + 8084 + -100 && uA(w, I - (4337 * 1 + 9338 + -318 * 43)) == 58) {
        pn(w += O(Ki(h), "&", "&\f"), "&\f", Ns(s ? a[s - (-4555 + 2 * -1973 + 8502)] : 3686 * 2 + -3012 + -20 * 218)) != -1 && (Q = -1);
        break;
      }
    case 5770 + -12 * 478:
    case 9257 * 1 + 272 + -13 * 730:
    case 739 + -18 * 36:
      w += Ki(h);
      break;
    case 46 * -47 + -3048 + 5219:
    case -9371 * 1 + -1988 + 1 * 11369:
    case 13:
    case 32:
      w += $B(x);
      break;
    case -1919 + 1 * 2011:
      w += AQ(mn() - (-6374 + 25 * 255), -8444 + 2445 * -1 + 10896);
      continue;
    case -119 * -72 + -3138 + -5383:
      switch (ft()) {
        case -383 * -20 + -4 * 494 + 434 * -13:
        case -2183 * 4 + 89 * 1 + -110 * -79:
          xo(nQ(eQ(de(), mn()), n, t, g), g);
          break;
        default:
          w += "/";
      }
      break;
    case (-493 * 1 + 9896 + -9280) * d:
      a[s++] = ye(w) * Q;
    case (6691 * 1 + -14 * 113 + -89 * 56) * d:
    case 6287 + -2458 * 3 + 573 * 2:
    case 18 * 227 + -9286 + 5200:
      switch (h) {
        case -3 * 1757 + -5 * 692 + 1 * 8731:
        case -7093 + 9147 * 1 + -1929:
          l = -3694 * -2 + 5 * 189 + -13 * 641;
        case -14019 + -7039 * -2 + C:
          Q == -1 && (w = O(w, /\f/g, "")), c > -8498 + 39 * -87 + 11891 && ye(w) - I && xo(c > 32 ? Cg(w + ";", e, t, I - (6551 * 1 + -565 * 10 + -20 * 45), g) : Cg(O(w, " ", "") + ";", e, t, I - (-14144 + 14146 * 1), g), g);
          break;
        case 3931 + 968 * -4:
          w += ";";
        default:
          if (xo(b = cg(w, n, t, s, C, A, a, m, y = [], G = [], I, o), o), h === 7717 * -1 + 1 * -5131 + -109 * -119)
            if (C === -12 * -246 + 6134 + -9086) yn(w, n, b, b, y, o, I, a, G);
            else switch (E === -31 * 145 + -221 * -37 + 1 * -3583 && uA(w, -2813 * -1 + -6650 + 3840) === 1 * -5727 + -33 * -242 + -2149 ? -1728 + -885 * -7 + -397 * 11 : E) {
              case 100:
              case -14177 + 5 * 2857:
              case 109:
              case 115:
                yn(i, b, b, e && xo(cg(i, b, b, -4245 + 1 * -2775 + 7020, 0, A, a, m, A, y = [], I, G), G), A, G, I, a, e ? y : G);
                break;
              default:
                yn(w, b, b, b, [""], G, -2 * -3007 + -4797 + -1217, a, G);
            }
      }
      s = C = c = -11039 + 1 * 11039, d = Q = 7561 + -540 * 14, m = w = "", I = r;
      break;
    case 58:
      I = -146 * 26 + -1437 + 5234 + ye(w), c = x;
    default:
      if (d < 238 * -5 + -3 * 387 + 2352) {
        if (h == 5533 + 41 * 241 + 9 * -1699) --d;
        else if (h == 1103 * -1 + 1733 + -505 * 1 && d++ == 1 * -5285 + 9 * 683 + 1 * -862 && ZB() == -7 * -78 + 3305 * -1 + -14 * -206) continue;
      }
      switch (w += la(h), h * d) {
        case 1 * 4728 + 7494 + -3046 * 4:
          Q = C > -46 * -46 + -7039 * 1 + 3 * 1641 ? -7834 * -1 + -2667 + 246 * -21 : (w += "\f", -1);
          break;
        case -10531 + -15 * -705:
          a[s++] = (ye(w) - (4961 * -1 + -4059 + -9021 * -1)) * Q, Q = 7 * -86 + 339 * -4 + -653 * -3;
          break;
        case 9020 + 4 * -277 + 3 * -2616:
          ft() === 45 && (w += Ki(de())), E = ft(), C = I = ye(m = w += tQ(mn())), h++;
          break;
        case -9187 + 1 * 6814 + 2418:
          x === 45 && ye(w) == 96 * -45 + -1 * -3889 + 433 && (d = -7357 + 1051 * 7);
      }
  }
  return o;
}
function cg(i, n, t, e, A, o, r, a, g, s, C, I) {
  for (var E = A - 1, c = A === -2462 * -1 + -1 * 8231 + 5769 ? o : [""], x = Fs(c), d = -5113 + -1 * -1310 + 3803, l = 4421 + 12 * -457 + -1063 * -1, Q = 1742 * -1 + 6297 + 1 * -4555; d < e; ++d) for (var h = 1 * -7603 + 6780 + 823, m = qt(i, E + (1425 + -1835 * 2 + 2246), E = Ns(l = r[d])), y = i; h < x; ++h) (y = Rs(l > -3229 * 1 + -1 * -241 + 2988 ? c[h] + " " + m : O(m, /&\f/g, c[h]))) && (g[Q++] = y);
  return Di(i, n, t, A === -2 * -4789 + 22 * 308 + -16354 ? yi : a, g, s, C, I);
}
function nQ(i, n, t, e) {
  return Di(i, n, t, Ss, la(VB()), qt(i, -133 * 23 + -1 * 4803 + -3932 * -2, -2), -5306 + -2653 * -2, e);
}
function Cg(i, n, t, e, A) {
  return Di(i, n, t, da, qt(i, 206 * 7 + 2 * -1699 + 1956, e), qt(i, e + (9510 + 8468 * 1 + -17977), -1), e, A);
}
function vs(i, n, t) {
  switch (jB(i, n)) {
    case 1421 * 2 + -75 * -18 + 911 * 1:
      return T + "print-" + i + i;
    case 1 * -8849 + 6275 + 8311:
    case -4 * 689 + -9316 + 16273:
    case 4501 + 1 * -8642 + 7318:
    case -57 * 3 + -9032 + -4 * -3159:
    case -3 * -1207 + 111 + 2091 * -1:
    case 8189 + 695 * 1 + -233 * 19:
    case 3471 + -7 * 995 + 6415:
    case -122 * 4 + -2031 + -87 * -93:
    case -11069 + -267 * -16 + 13153:
    case 5411 + -563 * -13 + 22 * -313:
    case 1 * 9817 + 214 * -41 + 3 * 716:
    case 6645:
    case 37 * 263 + -4179 * -1 + -3635 * 3:
    case 6741 + -2 * -5569 + -359 * 32:
    case 5879:
    case -1 * 3427 + 568 + 8482:
    case -1405 * -1 + -98 * 105 + 15020:
    case -9690 + 2833 * -1 + 17122:
    case 4855:
    case 5 * -957 + -9891 + 18891:
    case -8700 + 1 * -6762 + 21851:
    case 7523 * 1 + 1 * 4748 + 2 * -3581:
    case 6779 + 7 * -202:
    case 7 * 329 + 10321 * 1 + 149 * -47:
    case -8261 + 19 * -52 + 6539 * 2:
      return T + i + i;
    case 4789:
      return fo + i + i;
    case -5011 + -453 * 23 + 11 * 1889:
    case 1 * 1457 + 9943 + -146 * 49:
    case 86 * 62 + -10 * 596 + 2719 * 2:
    case 2999 * -1 + 168 + 41 * 239:
    case 9157 + 50 * -19 + -69 * 79:
      return T + i + fo + i + V + i + i;
    case 5936:
      switch (uA(i, n + (2911 * -1 + -5091 + 3 * 2671))) {
        case 114:
          return T + i + V + O(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 8 * 666 + 5963 + -11183:
          return T + i + V + O(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 29 * -274 + 22 * -173 + 11797 * 1:
          return T + i + V + O(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 11663 + 1297 * -1 + -3538:
    case 4268:
    case -6788 + -881 * -11:
      return T + i + V + i + i;
    case -1405 + 1 * 11449 + -431 * 9:
      return T + i + V + "flex-" + i + i;
    case 1 * 7655 + -5499 + 3031:
      return T + i + O(i, /(\w+).+(:[^]+)/, T + "box-$1$2" + V + "flex-$1$2") + i;
    case 5443:
      return T + i + V + "flex-item-" + O(i, /flex-|-self/g, "") + (Je(i, /flex-|baseline/) ? "" : V + "grid-row-" + O(i, /flex-|-self/g, "")) + i;
    case 2 * -4769 + -35 * -71 + -8 * -1466:
      return T + i + V + "flex-line-pack" + O(i, /align-content|flex-|-self/g, "") + i;
    case 1 * 10606 + 5934 + -5496 * 2:
      return T + i + V + O(i, "shrink", "negative") + i;
    case -633 + 1975 * 3:
      return T + i + V + O(i, "basis", "preferred-size") + i;
    case -2645 + -1 * -2363 + 906 * 7:
      return T + "box-" + O(i, "-grow", "") + T + i + V + O(i, "grow", "positive") + i;
    case 4554:
      return T + O(i, /([^-])(transform)/g, "$1" + T + "$2") + i;
    case 6187:
      return O(O(O(i, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), i, "") + i;
    case -3010 + -1 * -9439 + -1 * 934:
    case 16 * 433 + 467 + -3436:
      return O(i, /(image-set\([^]*)/, T + "$1$`$1");
    case 4968:
      return O(O(i, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + i + i;
    case 9 * 716 + -13 * -647 + -10655:
      if (!Je(i, /flex-|baseline/)) return V + "grid-column-align" + qt(i, n) + i;
      break;
    case -51 * 13 + 7307 + -4052:
    case 1 * 8299 + 310 * -27 + 3431 * 1:
      return V + O(i, "template-", "") + i;
    case -11832 + -8 * -2027:
    case 227 * -41 + -4 * -2186 + -1 * -4179:
      return t && t.some(function(e, A) {
        return n = A, Je(e.props, /grid-\w+-end/);
      }) ? ~pn(i + (t = t[n].value), "span", 7 * -1282 + 15 * 114 + 7264) ? i : V + O(i, "-start", "") + i + V + "grid-row-span:" + (~pn(t, "span", -1 * -1562 + -9957 + 8395) ? Je(t, /\d+/) : +Je(t, /\d+/) - +Je(i, /\d+/)) + ";" : V + O(i, "-start", "") + i;
    case -117 * -72 + 758 * -1 + -2770:
    case -614 * 3 + 7914 + -1944:
      return t && t.some(function(e) {
        return Je(e.props, /grid-\w+-start/);
      }) ? i : V + O(O(i, "-end", "-span"), "span ", "") + i;
    case 29 * -101 + 829 * -4 + -11 * -940:
    case 1 * -1423 + -1296 * -7 + -4066:
    case 4068:
    case -1 * 7867 + 1119 * 2 + 8161:
      return O(i, /(.+)-inline(.+)/, T + "$1$2") + i;
    case -4511 + -207 * -61:
    case -8 * -367 + 1149 * -10 + 15613:
    case -1271 * -9 + 6727 + -12413 * 1:
    case 6057 * -1 + -7561 + 107 * 179:
    case -3516 + 6053 * -1 + 15014:
    case 42 * -24 + -74 * -127 + -2689:
    case -145 * 15 + -7027 * -1 + -9 * -9:
    case 1 * -1751 + 6910 + -482:
    case 1 * -3877 + 1 * 7374 + 2036:
    case -14563 + -12 * -1696:
    case 13 * -453 + 1502 + 9408:
    case -501 * -9 + -7534 + -38 * -205:
      if (ye(i) - (2237 * 1 + 438 + -2674) - n > -906 + 24 * 38) switch (uA(i, n + (9749 * 1 + 149 * 53 + -17645))) {
        case -12002 + 367 * 33:
          if (uA(i, n + (-9 * -813 + -71 * -53 + 2769 * -4)) !== 2027 + -2 * -4406 + -10794) break;
        case 4 * 1336 + -2857 + -3 * 795:
          return O(i, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + fo + (uA(i, n + 3) == -126 * -9 + -8975 + 7949 ? "$3" : "$2-$3")) + i;
        case 7231 + -1 * -2530 + -9646:
          return ~pn(i, "stretch", -6359 + -1 * -6359) ? vs(O(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 53 * -124 + -2110 + 13834:
    case 1119 + 196 * 54 + -5783:
      return O(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, s) {
        return V + A + ":" + o + s + (r ? V + A + "-span:" + (a ? g : +g - +o) + s : "") + i;
      });
    case 3482 + 1003 * 1 + 464:
      if (uA(i, n + (7344 + -16 * -328 + 1798 * -7)) === 8241 + -40 * 203) return O(i, ":", ":" + T) + i;
      break;
    case -9932 + 347 * -31 + -27133 * -1:
      switch (uA(i, uA(i, -5 * -1909 + 2930 + -12461) === 45 ? -8578 + -4 * -2149 : -9757 * 1 + 1 * 958 + 10 * 881)) {
        case -47 * -129 + 1332 * -4 + -615:
          return O(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (uA(i, 6486 + 2375 * 1 + -8847) === -8467 + -447 * -7 + 5383 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + V + "$2box$3") + i;
        case -6721 + 64 * -149 + 16357:
          return O(i, ":", ":" + V) + i;
      }
      break;
    case 6363 + 92 * -7:
    case -124 + 1 * -7884 + 2131 * 5:
    case 1 * 8527 + -7452 + 212 * 5:
    case -1 * -2671 + 4730 + -3474:
    case 2391:
      return O(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function ii(i, n) {
  for (var t = "", e = -26 * -237 + -19 * 240 + -1602; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function iQ(i, n, t, e) {
  switch (i.type) {
    case KB:
      if (i.children.length) break;
    case _B:
    case da:
      return i.return = i.return || i.value;
    case Ss:
      return "";
    case Gs:
      return i.return = i.value + "{" + ii(i.children, e) + "}";
    case yi:
      if (!ye(i.value = i.props.join(","))) return "";
  }
  return ye(t = ii(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function rQ(i) {
  var n = Fs(i);
  return function(t, e, A, o) {
    for (var r = "", a = 4649 + 1 * 1733 + -6382; a < n; a++) r += i[a](t, e, A, o) || "";
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
      case da:
        i.return = vs(i.value, i.length, t);
        return;
      case Gs:
        return ii([Ve(i, { value: O(i.value, "@", "@" + T) })], e);
      case yi:
        if (i.length) return qB(t = i.props, function(A) {
          switch (Je(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              kt(Ve(i, { props: [O(A, /:(read-\w+)/, ":" + fo + "$1")] }));
              var o = {};
              o.props = [A], kt(Ve(i, o)), vr(i, { props: Ig(t, e) });
              break;
            case "::placeholder":
              kt(Ve(i, { props: [O(A, /:(plac\w+)/, ":" + T + "input-$1")] })), kt(Ve(i, { props: [O(A, /:(plac\w+)/, ":" + fo + "$1")] })), kt(Ve(i, { props: [O(A, /:(plac\w+)/, V + "input-$1")] }));
              var r = {};
              r.props = [A], kt(Ve(i, r)), vr(i, { props: Ig(t, e) });
              break;
          }
          return "";
        });
    }
}
var W = {};
W.animationIterationCount = 1, W.aspectRatio = 1, W.borderImageOutset = 1, W.borderImageSlice = 1, W.borderImageWidth = 1, W.boxFlex = 1, W.boxFlexGroup = 1, W.boxOrdinalGroup = 1, W.columnCount = 1, W.columns = 1, W.flex = 1, W.flexGrow = 1, W.flexPositive = 1, W.flexShrink = 1, W.flexNegative = 1, W.flexOrder = 1, W.gridRow = 1, W.gridRowEnd = 1, W.gridRowSpan = 1, W.gridRowStart = 1, W.gridColumn = 1, W.gridColumnEnd = 1, W.gridColumnSpan = 1, W.gridColumnStart = 1, W.msGridRow = 1, W.msGridRowSpan = 1, W.msGridColumn = 1, W.msGridColumnSpan = 1, W.fontWeight = 1, W.lineHeight = 1, W.opacity = 1, W.order = 1, W.orphans = 1, W.tabSize = 1, W.widows = 1, W.zIndex = 1, W.zoom = 1, W.WebkitLineClamp = 1, W.fillOpacity = 1, W.floodOpacity = 1, W.stopOpacity = 1, W.strokeDasharray = 1, W.strokeDashoffset = 1, W.strokeMiterlimit = 1, W.strokeOpacity = 1, W.strokeWidth = 1;
var sQ = W, P = {}, yt = typeof process < "u" && P !== void 0 && (P.REACT_APP_SC_ATTR || P.SC_ATTR) || "data-styled", Ms = "active", Ls = "data-styled-version", ki = "6.1.18", ua = `/*!sc*/
`, ri = typeof window < "u" && typeof document < "u", IQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && P.REACT_APP_SC_DISABLE_SPEEDY !== "" ? P.REACT_APP_SC_DISABLE_SPEEDY !== "false" && P.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && P !== void 0 && P.SC_DISABLE_SPEEDY !== void 0 && P.SC_DISABLE_SPEEDY !== "" ? P.SC_DISABLE_SPEEDY !== "false" && P.SC_DISABLE_SPEEDY : P.NODE_ENV !== "production"), Bg = /invalid hook call/i, tn = /* @__PURE__ */ new Set(), cQ = function(i, n) {
  if (P.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = 1105 * -3 + 7559 * 1 + -1 * 4243; g < arguments.length; g++) a[g - (3390 + -31 * 195 + -332 * -8)] = arguments[g];
        Bg.test(r) ? (o = !1, tn.delete(e)) : A.apply(void (-153 * 16 + 2 * 4851 + -186 * 39), jt([r], a, !1));
      }, qA(), o && !tn.has(e) && (console.warn(e), tn.add(e));
    } catch (r) {
      Bg.test(r.message) && tn.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Si = Object.freeze([]), Zt = Object.freeze({});
function CQ(i, n, t) {
  return t === void 0 && (t = Zt), i.theme !== t.theme && i.theme || n || t.theme;
}
var Or = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), BQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, QQ = /(^-|-$)/g;
function Qg(i) {
  return i.replace(BQ, "-").replace(QQ, "");
}
var EQ = /(a)(d)/gi, on = -8324 + -1 * -8376, Eg = function(i) {
  return String.fromCharCode(i + (i > -6609 + 1247 * -3 + -25 * -415 ? -8581 * 1 + -2 * 1867 + 12354 : -13 * -311 + -31 * 74 + -59 * 28));
};
function Jr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > on; n = n / on | -9808 + -471 * 19 + 18757 * 1) t = Eg(n % on) + t;
  return (Eg(n % on) + t).replace(EQ, "$1-$2");
}
var ji, Os = 9462 + 1 * 3235 + -7316, Ct = function(i, n) {
  for (var t = n.length; t; ) i = (-2 * -2287 + -7644 + 3103) * i ^ n.charCodeAt(--t);
  return i;
}, Js = function(i) {
  return Ct(Os, i);
};
function xQ(i) {
  return Jr(Js(i) >>> 3287 + 19 * -173);
}
function Us(i) {
  return P.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function qi(i) {
  return typeof i == "string" && (P.NODE_ENV === "production" || i.charAt(0) === i.charAt(33 * -229 + 7244 + 313).toLowerCase());
}
var ae = {};
ae.childContextTypes = !0, ae.contextType = !0, ae.contextTypes = !0, ae.defaultProps = !0, ae.displayName = !0, ae.getDefaultProps = !0, ae.getDerivedStateFromError = !0, ae.getDerivedStateFromProps = !0, ae.mixins = !0, ae.propTypes = !0, ae.type = !0;
var Ze = {};
Ze.name = !0, Ze.length = !0, Ze.prototype = !0, Ze.caller = !0, Ze.callee = !0, Ze.arguments = !0, Ze.arity = !0;
var It = {};
It.$$typeof = !0, It.compare = !0, It.defaultProps = !0, It.displayName = !0, It.propTypes = !0, It.type = !0;
var Ft = {};
Ft.$$typeof = !0, Ft.render = !0, Ft.defaultProps = !0, Ft.displayName = !0, Ft.propTypes = !0;
var Ys = typeof Symbol == "function" && Symbol.for, Ps = Ys ? Symbol.for("react.memo") : 87433 * -1 + -32551 * 1 + 180099, dQ = Ys ? Symbol.for("react.forward_ref") : 92708 + 1 * -32596, lQ = ae, uQ = Ze, Ts = It, hQ = ((ji = {})[dQ] = Ft, ji[Ps] = Ts, ji);
function xg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Ps ? Ts : "$$typeof" in i ? hQ[i.$$typeof] : lQ;
  var n;
}
var fQ = Object.defineProperty, pQ = Object.getOwnPropertyNames, dg = Object.getOwnPropertySymbols, mQ = Object.getOwnPropertyDescriptor, yQ = Object.getPrototypeOf, lg = Object.prototype;
function Hs(i, n, t) {
  if (typeof n != "string") {
    if (lg) {
      var e = yQ(n);
      e && e !== lg && Hs(i, e, t);
    }
    var A = pQ(n);
    dg && (A = A.concat(dg(n)));
    for (var o = xg(i), r = xg(n), a = 1 * 2390 + 1860 + -4250; a < A.length; ++a) {
      var g = A[a];
      if (!(g in uQ || t && t[g] || r && g in r || o && g in o)) {
        var s = mQ(n, g);
        try {
          fQ(i, g, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function zt(i) {
  return typeof i == "function";
}
function ha(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Qt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function ug(i, n) {
  if (i.length === 0) return "";
  for (var t = i[15248 + -1 * 15248], e = -81 + -2 * -41; e < i.length; e++) t += i[e];
  return t;
}
function Xt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Ur(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Xt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 7683 + -225 * -7 + -9258; e < n.length; e++) i[e] = Ur(i[e], n[e]);
  else if (Xt(n))
    for (var e in n) i[e] = Ur(i[e], n[e]);
  return i;
}
function fa(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
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
var wQ = P.NODE_ENV !== "production" ? IA : {};
function DQ() {
  for (var i = [], n = 5 * 1214 + 5642 + 366 * -32; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[7579 * -1 + 1 * -8589 + 16168], e = [], A = -7352 + -1371 * 3 + 11466, o = i.length; A < o; A += 2918 * -1 + -1969 * 3 + 8826) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function no(i) {
  for (var n = [], t = -17 * 98 + 7 * 353 + -804 * 1; t < arguments.length; t++) n[t - (15294 + -373 * 41)] = arguments[t];
  return P.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 1 * -7159 + 6101 * -1 + -34 * -390 ? " Args: ".concat(n.join(", ")) : "")) : new Error(DQ.apply(void 0, jt([wQ[i]], n, !1)).trim());
}
var bQ = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-1379 * -1 + 4774 + -5641 * 1), this.length = 4322 * -1 + -7075 + 11909, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 0, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 1) < 1 * -7541 + 77 * -59 + -106 * -114) throw no(4742 + -389 * -18 + 733 * -16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 8 * -601 + 7946 * -1 + 12754;
    }
    for (var a = this.indexOfGroup(n + (7637 + -7574 * -1 + -585 * 26)), g = (r = 0, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -389 + -1565 * -6 + -9001 * 1;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -13875 + -375 * -37 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ua);
    return t;
  }, i;
}(), kQ = 1 << 1 * 8566 + -13 * 177 + 43 * -145, wn = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new Map(), Dn = 9131 + -4565 * 2, nn = function(i) {
  if (wn.has(i)) return wn.get(i);
  for (; ai.has(Dn); ) Dn++;
  var n = Dn++;
  if (P.NODE_ENV !== "production" && ((402 * -22 + 4813 * -2 + 9235 * 2 | n) < -2659 * -1 + -1299 + -1360 || n > kQ)) throw no(2 * 3587 + 1 * 2290 + -9448, "".concat(n));
  return wn.set(i, n), ai.set(n, i), n;
}, SQ = function(i, n) {
  Dn = n + (-1020 + -1685 * -2 + -2349), wn.set(i, n), ai.set(n, i);
}, GQ = "style[".concat(yt, "][").concat(Ls, '="').concat(ki, '"]'), NQ = new RegExp("^".concat(yt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), RQ = function(i, n, t) {
  for (var e, A = t.split(","), o = 17321 + -17321 * 1, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, FQ = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ua), A = [], o = -9333 + -61 * -153, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(NQ);
      if (g) {
        var s = 0 | parseInt(g[1], 10), C = g[-1999 * 1 + -1 * -3403 + -1402 * 1];
        -741 + -13 * -57 !== s && (SQ(C, s), RQ(i, C, g[-7092 + -5931 * 1 + 13026]), i.getTag().insertRules(s, A)), A.length = -6896 + -65 * -153 + -3049;
      } else A.push(a);
    }
  }
}, hg = function(i) {
  for (var n = document.querySelectorAll(GQ), t = -8182 * -1 + -770 + -7412, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(yt) !== Ms && (FQ(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function WQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var _s = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(yt, "]")));
    return g[g.length - (4380 + -1 * 4379)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(yt, Ms), e.setAttribute(Ls, ki);
  var r = WQ();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, vQ = function() {
  function i(n) {
    this.element = _s(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -4115 + 1 * -2413 + -4 * -1632, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw no(2235 * -3 + -8933 + 15655);
    }(this.element), this.length = 8546 + 11 * 73 + -9349;
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
    this.element = _s(n), this.nodes = this.element.childNodes, this.length = 1978 * 5 + -829 + 221 * -41;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -4013 + -1 * -3957 + 56) {
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
    this.rules = [], this.length = 3909 * 1 + -3414 + -495;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -893 + -47 * -19, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -4331 + -230 * -28 + -68 * 31), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), fg = ri, OQ = { isServer: !ri, useCSSOMInjection: !IQ }, Ks = function() {
  function i(n, t, e) {
    n === void 0 && (n = Zt), t === void 0 && (t = {});
    var A = this;
    this.options = jA(jA({}, OQ), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && ri && fg && (fg = !1, hg(this)), fa(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, g = "", s = function(I) {
          var E = function(Q) {
            return ai.get(Q);
          }(I);
          if (E === void 0) return "continue";
          var c = o.names.get(E), x = r.getGroup(I);
          if (c === void 0 || !c.size || x.length === 0) return "continue";
          var d = "".concat(yt, ".g").concat(I, '[id="').concat(E, '"]'), l = "";
          c !== void 0 && c.forEach(function(Q) {
            Q.length > 6254 + 752 * 12 + -15278 * 1 && (l += "".concat(Q, ","));
          }), g += "".concat(x).concat(d, '{content:"').concat(l, '"}').concat(ua);
        }, C = 1487 + -15 * -287 + -2896 * 2; C < a; C++) s(C);
        return g;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return nn(n);
  }, i.prototype.rehydrate = function() {
    !this.server && ri && hg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(jA(jA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 205 * 41 + -5 + -8400) + (9097 + 24 * -379);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new LQ(A) : e ? new vQ(A) : new MQ(A);
    }(this.options), new bQ(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (nn(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(nn(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(nn(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), JQ = /&/g, UQ = /^\s*\/\/.*$/gm;
function js(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = js(t.children, n)), t;
  });
}
function qs(i) {
  var n, t, e, A = i === void 0 ? Zt : i, o = A.options, r = o === void 0 ? Zt : o, a = A.plugins, g = a === void 0 ? Si : a, s = function(E, c, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > -7 * 199 + 4925 + 883 * -4 ? ".".concat(n) : E;
  }, C = g.slice();
  C.push(function(E) {
    E.type === yi && E.value.includes("&") && (E.props[9858 + -9858 * 1] = E.props[-379 * -7 + 7754 + -10407].replace(JQ, t).replace(e, s));
  }), r.prefix && C.push(gQ), C.push(iQ);
  var I = function(E, c, x, d) {
    c === void 0 && (c = ""), x === void 0 && (x = ""), d === void 0 && (d = "&"), n = d, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(UQ, ""), Q = oQ(x || c ? "".concat(x, " ").concat(c, " { ").concat(l, " }") : l);
    r.namespace && (Q = js(Q, r.namespace));
    var h = [];
    return ii(Q, rQ(C.concat(aQ(function(m) {
      return h.push(m);
    })))), h;
  };
  return I.hash = g.length ? g.reduce(function(E, c) {
    return c.name || no(10184 + 1 * -10169), Ct(E, c.name);
  }, Os).toString() : "", I;
}
var YQ = new Ks(), Yr = qs(), pa = mt.createContext({ shouldForwardProp: void 0, styleSheet: YQ, stylis: Yr });
pa.Consumer;
var PQ = mt.createContext(void 0);
function Pr() {
  return ue(pa);
}
function TQ(i) {
  var n = pA(i.stylisPlugins), t = n[18807 + -3 * 6269], e = n[-1 * -8713 + 4111 + -12823 * 1], A = Pr().styleSheet, o = bA(function() {
    var C = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(I)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = bA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = C, I.plugins = t, qs(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  oA(function() {
    HB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = bA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var s = {};
  return s.value = r, mt.createElement(pa.Provider, g, mt.createElement(PQ.Provider, s, i.children));
}
var pg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Yr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, fa(this, function() {
      throw no(-245 + 257 * 1, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Yr), this.name + n.hash;
  }, i;
}(), HQ = function(i) {
  return i >= "A" && i <= "Z";
};
function mg(i) {
  for (var n = "", t = 3141 + 1 * -3141; t < i.length; t++) {
    var e = i[t];
    if (7711 + 9719 * -1 + 2009 === t && e === "-" && i[2 * 2066 + -7724 + 3592 * 1] === "-") return i;
    HQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Vs = function(i) {
  return i == null || i === !1 || i === "";
}, Zs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !Vs(o) && (Array.isArray(o) && o.isCss || zt(o) ? e.push("".concat(mg(A), ":"), o, ";") : Xt(o) ? e.push.apply(e, jt(jt(["".concat(A, " {")], Zs(o), !1), ["}"], !1)) : e.push("".concat(mg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -9270 + 1 * -7246 + -1 * -16516 === t || n in sQ || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function pt(i, n, t, e) {
  if (Vs(i)) return [];
  if (ha(i)) return [".".concat(i.styledComponentId)];
  if (zt(i)) {
    if (!zt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return P.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof pg || Xt(A) || A === null || console.error("".concat(Us(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pt(A, n, t, e);
  }
  var o;
  return i instanceof pg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Xt(i) ? Zs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Si, i.map(function(r) {
    return pt(r, n, t, e);
  })) : [i.toString()];
}
function _Q(i) {
  for (var n = 1 * -2486 + 8441 + -5955 * 1; n < i.length; n += 9687 * -1 + 1572 + -1 * -8116) {
    var t = i[n];
    if (zt(t) && !ha(t)) return !1;
  }
  return !0;
}
var KQ = Js(ki), jQ = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = P.NODE_ENV === "production" && (e === void 0 || e.isStatic) && _Q(n), this.componentId = t, this.baseHash = Ct(KQ, t), this.baseStyle = e, Ks.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Qt(A, this.staticRulesId);
      else {
        var o = ug(pt(this.rules, n, t, e)), r = Jr(Ct(this.baseHash, o) >>> 971 * 5 + 2567 * -2 + 279);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = Qt(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = Ct(this.baseHash, e.hash), s = "", C = 0; C < this.rules.length; C++) {
        var I = this.rules[C];
        if (typeof I == "string") s += I, P.NODE_ENV !== "production" && (g = Ct(g, I));
        else if (I) {
          var E = ug(pt(I, n, t, e));
          g = Ct(g, E + C), s += E;
        }
      }
      if (s) {
        var c = Jr(g >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(s, ".".concat(c), void 0, this.componentId)), A = Qt(A, c);
      }
    }
    return A;
  }, i;
}(), zs = mt.createContext(void 0);
zs.Consumer;
var Vi = {}, yg = /* @__PURE__ */ new Set();
function qQ(i, n, t) {
  var e = ha(i), A = i, o = !qi(i), r = n.attrs, a = r === void 0 ? Si : r, g = n.componentId, s = g === void 0 ? function(G, b) {
    var w = typeof G != "string" ? "sc" : Qg(G);
    Vi[w] = (Vi[w] || -73 * 135 + 335 * -8 + 12535) + (-7651 * 1 + -4349 * 1 + 12001);
    var R = "".concat(w, "-").concat(xQ(ki + w + Vi[w]));
    return b ? "".concat(b, "-").concat(R) : R;
  }(n.displayName, n.parentComponentId) : g, C = n.displayName, I = C === void 0 ? function(G) {
    return qi(G) ? "styled.".concat(G) : "Styled(".concat(Us(G), ")");
  }(i) : C, E = n.displayName && n.componentId ? "".concat(Qg(n.displayName), "-").concat(n.componentId) : n.componentId || s, c = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(G, b) {
        return d(G, b) && l(G, b);
      };
    } else x = d;
  }
  var Q = new jQ(t, E, e ? A.componentStyle : void 0);
  function h(G, b) {
    return function(w, R, v) {
      var Y = w.attrs, K = w.componentStyle, z = w.defaultProps, j = w.foldedComponentIds, nA = w.styledComponentId, AA = w.target, VA = mt.useContext(zs), Ge = Pr(), Gi = w.shouldForwardProp || Ge.shouldForwardProp;
      P.NODE_ENV !== "production" && Jn(nA);
      var ba = CQ(R, VA, z) || Zt, Ne = function(qo, ao, Vo) {
        var bt = {};
        bt.className = void 0, bt.theme = Vo;
        for (var Fi, it = jA(jA({}, ao), bt), Wi = -491 * 19 + 1 * 2287 + -7042 * -1; Wi < qo.length; Wi += -1 * 6666 + 1 * -2973 + 241 * 40) {
          var Zo = zt(Fi = qo[Wi]) ? Fi(it) : Fi;
          for (var Ke in Zo) it[Ke] = Ke === "className" ? Qt(it[Ke], Zo[Ke]) : Ke === "style" ? jA(jA({}, it[Ke]), Zo[Ke]) : Zo[Ke];
        }
        return ao.className && (it.className = Qt(it.className, ao.className)), it;
      }(Y, R, ba), io = Ne.as || AA, ro = {};
      for (var oe in Ne) Ne[oe] === void 0 || oe[-9023 + 20 * -15 + 1 * 9323] === "$" || oe === "as" || oe === "theme" && Ne.theme === ba || (oe === "forwardedAs" ? ro.as = Ne.forwardedAs : Gi && !Gi(oe, io) || (ro[oe] = Ne[oe], Gi || P.NODE_ENV !== "development" || UB(oe) || yg.has(oe) || !Or.has(io) || (yg.add(oe), console.warn('styled-components: it looks like an unknown prop "'.concat(oe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ni = function(qo, ao) {
        var Vo = Pr(), bt = qo.generateAndInjectStyles(ao, Vo.styleSheet, Vo.stylis);
        return P.NODE_ENV !== "production" && Jn(bt), bt;
      }(K, Ne);
      P.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ni);
      var Ri = Qt(j, nA);
      return Ni && (Ri += " " + Ni), Ne.className && (Ri += " " + Ne.className), ro[qi(io) && !Or.has(io) ? "class" : "className"] = Ri, v && (ro.ref = v), PA(io, ro);
    }(m, G, b);
  }
  h.displayName = I;
  var m = mt.forwardRef(h), y = {};
  return y.attrs = !0, y.componentStyle = !0, y.displayName = !0, y.foldedComponentIds = !0, y.shouldForwardProp = !0, y.styledComponentId = !0, y.target = !0, m.attrs = c, m.componentStyle = Q, m.displayName = I, m.shouldForwardProp = x, m.foldedComponentIds = e ? Qt(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = E, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = e ? function(b) {
      for (var w = [], R = 1 * -4209 + 9672 + -2 * 2731; R < arguments.length; R++) w[R - (229 * -5 + 6613 + -5467)] = arguments[R];
      for (var v = 4931 * 1 + 1 * 9797 + 526 * -28, Y = w; v < Y.length; v++) Ur(b, Y[v], !0);
      return b;
    }({}, A.defaultProps, G) : G;
  } }), P.NODE_ENV !== "production" && (cQ(I, E), m.warnTooManyClasses = /* @__PURE__ */ function(G, b) {
    var w = {}, R = !1;
    return function(v) {
      if (!R && (w[v] = !0, Object.keys(w).length >= -7 * -1126 + 5513 * 1 + 65 * -203)) {
        var Y = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(8730 + -872 * -8 + -15506, " classes were generated for component ").concat(G).concat(Y, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), R = !0, w = {};
      }
    };
  }(I, E)), fa(m, function() {
    return ".".concat(m.styledComponentId);
  }), o && Hs(m, i, y), m;
}
function wg(i, n) {
  for (var t = [i[-10450 + 110 * 95]], e = 1763 * -4 + -903 * -4 + 3440, A = n.length; e < A; e += 2851 * 3 + -17 * 581 + 265 * 5) t.push(n[e], i[e + (-9124 + -2843 * 1 + 11968)]);
  return t;
}
var Dg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function VQ(i) {
  for (var n = [], t = 78 * 22 + 6243 + 23 * -346; t < arguments.length; t++) n[t - (-6289 + -11 * 557 + -4139 * -3)] = arguments[t];
  if (zt(i) || Xt(i)) return Dg(pt(wg(Si, jt([i], n, !0))));
  var e = i;
  return -1 * -1901 + 2081 * -2 + 2261 === n.length && e.length === 1 && typeof e[7970 + 1613 * -3 + 101 * -31] == "string" ? pt(e) : Dg(pt(wg(e, n)));
}
function Tr(i, n, t) {
  if (t === void 0 && (t = Zt), !n) throw no(143 + 1 * -142, n);
  var e = function(A) {
    for (var o = [], r = 1; r < arguments.length; r++) o[r - (1 * 2388 + 11 * -3 + 2 * -1177)] = arguments[r];
    return i(n, t, VQ.apply(void 0, jt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Tr(i, n, jA(jA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Tr(i, n, jA(jA({}, t), A));
  }, e;
}
var Xs = function(i) {
  return Tr(qQ, i);
}, Ko = Xs;
Or.forEach(function(i) {
  Ko[i] = Xs(i);
});
P.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rn = "__sc-".concat(yt, "__");
P.NODE_ENV !== "production" && P.NODE_ENV !== "test" && typeof window < "u" && (window[rn] || (window[rn] = 8632 + 7442 * -1 + -1190), -1713 * 3 + -6691 * 1 + 11831 === window[rn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rn] += -13147 + 346 * 38);
var Me;
function $s(i) {
  const n = {};
  return n.lang = Me == null ? void 0 : Me.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = Me == null ? void 0 : Me.abortEarly, n.abortPipeEarly = Me == null ? void 0 : Me["abortPipeEarly"], n;
}
var Zi;
function ZQ(i) {
  return Zi == null ? void 0 : Zi.get(i);
}
var zi;
function zQ(i) {
  return zi == null ? void 0 : zi.get(i);
}
var Xi;
function XQ(i, n) {
  var t;
  return (t = Xi == null ? void 0 : Xi.get(i)) == null ? void 0 : t.get(n);
}
function AI(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function $t(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, a = (A == null ? void 0 : A.received) ?? AI(o), g = {};
  g.kind = i.kind, g.type = i.type, g.input = o, g.expected = r, g.received = a, g.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + a, g.requirement = i.requirement, g.path = A == null ? void 0 : A.path, g.issues = A == null ? void 0 : A.issues, g.lang = e.lang, g.abortEarly = e.abortEarly, g.abortPipeEarly = e.abortPipeEarly;
  const s = g, C = i.kind === "schema", I = (A == null ? void 0 : A.message) ?? i.message ?? XQ(i.reference, s.lang) ?? (C ? zQ(s.lang) : null) ?? e.message ?? ZQ(s.lang);
  I !== void 0 && (s.message = typeof I == "function" ? I(s) : I), C && (t.typed = !1), t.issues ? t.issues.push(s) : t.issues = [s];
}
function jo(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, $s());
  } };
}
function $Q(i, n) {
  const t = [...new Set(i)];
  return t.length > -8054 + -672 * -1 + 7383 ? "(" + t.join(" " + n + " ") + ")" : t[1817 * 1 + 3 * -1063 + 7 * 196] ?? "never";
}
var AE = class extends Error {
  constructor(i) {
    super(i[-5508 + -9 * -612].message), this.name = "ValiError", this.issues = i;
  }
};
function eI(i, n) {
  return { kind: "validation", type: "min_length", reference: eI, async: !1, expects: ">=" + i, requirement: i, message: n, "~run"(t, e) {
    return t.typed && t.value.length < this.requirement && $t(this, "length", t, e, { received: "" + t.value.length }), t;
  } };
}
function eE(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
function tE(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
function tI(i, n) {
  return { kind: "schema", type: "array", reference: tI, expects: "Array", async: !1, item: i, message: n, get "~standard"() {
    return jo(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (Array.isArray(A)) {
      t.typed = !0, t.value = [];
      for (let r = -3 * 2526 + 3712 + 3866 * 1; r < A.length; r++) {
        const a = A[r], g = {};
        g.value = a;
        const s = this.item["~run"](g, e);
        if (s.issues) {
          const C = {};
          C.type = "array", C.origin = "value", C.input = A, C.key = r, C.value = a;
          const I = C;
          for (const E of s.issues)
            E.path ? E.path.unshift(I) : E.path = [I], (o = t.issues) == null || o.push(E);
          if (!t.issues && (t.issues = s.issues), e.abortEarly) {
            t.typed = !1;
            break;
          }
        }
        !s.typed && (t.typed = !1), t.value.push(s.value);
      }
    } else $t(this, "type", t, e);
    return t;
  } };
}
function Hr(i) {
  return { kind: "schema", type: "function", reference: Hr, expects: "Function", async: !1, message: i, get "~standard"() {
    return jo(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : $t(this, "type", n, t), n;
  } };
}
function oI(i, n) {
  return { kind: "schema", type: "object", reference: oI, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return jo(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (A && typeof A == "object") {
      t.typed = !0, t.value = {};
      for (const r in this.entries) {
        const a = this.entries[r];
        if (r in A || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
          const g = r in A ? A[r] : tE(a), s = {};
          s.value = g;
          const C = a["~run"](s, e);
          if (C.issues) {
            const I = {};
            I.type = "object", I.origin = "value", I.input = A, I.key = r, I.value = g;
            const E = I;
            for (const c of C.issues)
              c.path ? c.path.unshift(E) : c.path = [E], (o = t.issues) == null || o.push(c);
            if (!t.issues && (t.issues = C.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !C.typed && (t.typed = !1), t.value[r] = C.value;
        } else if (a.fallback !== void 0) t.value[r] = eE(a);
        else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish") {
          const g = {};
          if (g.input = void 0, g.expected = '"' + r + '"', g.path = [{ type: "object", origin: "key", input: A, key: r, value: A[r] }], $t(this, "key", t, e, g), e.abortEarly) break;
        }
      }
    } else $t(this, "type", t, e);
    return t;
  } };
}
function nI(i, n) {
  return { kind: "schema", type: "picklist", reference: nI, expects: $Q(i.map(AI), "|"), async: !1, options: i, message: n, get "~standard"() {
    return jo(this);
  }, "~run"(t, e) {
    return this.options.includes(t.value) ? t.typed = !0 : $t(this, "type", t, e), t;
  } };
}
function oE(i, n, t) {
  const e = {};
  e.value = n;
  const A = i["~run"](e, $s(t));
  if (A.issues) throw new AE(A.issues);
  return A.value;
}
function nE(...i) {
  return { ...i[4260 + -1 * 1828 + -2432], pipe: i, get "~standard"() {
    return jo(this);
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
function iE(i, n) {
  try {
    oE(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: MC(i.assetsDirectoryPath)
  };
}
function rE({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = bA(() => iE(n, t), [n, t]);
  return /* @__PURE__ */ k(xa.Provider, { value: e, children: i });
}
function aE({
  children: i,
  configuration: n
}) {
  const t = Object.values(ee), e = oI({
    challengeSequence: nE(
      tI(
        nI(t, "Challenge sequence must be an array of valid challenge items")
      ),
      eI(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: Hr("On complete must be a function"),
    onError: Hr("On error must be a function")
  });
  return /* @__PURE__ */ k(rE, { configuration: n, validationSchema: e, children: i });
}
const gi = _e(void 0);
gi.displayName = "ControllerContext";
function iI() {
  const i = ue(
    gi
  );
  if (i === void 0)
    throw new Error(`${gi.displayName} must be used within a ControllerProvider`);
  return i;
}
function gE({ children: i, controller: n }) {
  const t = bA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ k(gi.Provider, { value: t, children: i });
}
const _r = {};
_r.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", _r.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const _ = _r, Kr = {};
Kr.ON_COMPLETE = "multi-range-auto-capture:on-complete", Kr.DEV = "multi-range-auto-capture:dev";
const rI = Kr, sE = { ...rI, ...ke }, IE = sE;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const aI = Symbol("Comlink.proxy"), cE = Symbol("Comlink.endpoint"), gI = Symbol("Comlink.releaseProxy"), $i = Symbol("Comlink.finalizer"), bn = Symbol("Comlink.thrown"), sI = (i) => typeof i == "object" && i !== null || typeof i == "function", CE = {
  canHandle: (i) => sI(i) && i[aI],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return cI(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), BI(i);
  }
}, BE = {
  canHandle: (i) => sI(i) && bn in i,
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
}, II = /* @__PURE__ */ new Map([
  ["proxy", CE],
  ["throw", BE]
]);
function QE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function cI(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!QE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(Bt);
    let s;
    try {
      const C = a.slice(0, -1).reduce((E, c) => E[c], i), I = a.reduce((E, c) => E[c], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          C[a.slice(-1)[0]] = Bt(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const E = new I(...g);
            s = hE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: c } = new MessageChannel();
            cI(i, c), s = uE(E, [E]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      s = { value: C, [bn]: 0 };
    }
    Promise.resolve(s).catch((C) => ({ value: C, [bn]: 0 })).then((C) => {
      const [I, E] = ci(C);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), CI(n), $i in i && typeof i[$i] == "function" && i[$i]());
    }).catch((C) => {
      const [I, E] = ci({
        value: new TypeError("Unserializable return value"),
        [bn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E);
    });
  }), n.start && n.start();
}
function EE(i) {
  return i.constructor.name === "MessagePort";
}
function CI(i) {
  EE(i) && i.close();
}
function BI(i, n) {
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
  }), jr(i, t, [], n);
}
function an(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function QI(i) {
  return Wt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    CI(i);
  });
}
const si = /* @__PURE__ */ new WeakMap(), Ii = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (si.get(i) || 0) - 1;
  si.set(i, n), n === 0 && QI(i);
});
function xE(i, n) {
  const t = (si.get(n) || 0) + 1;
  si.set(n, t), Ii && Ii.register(i, n, i);
}
function dE(i) {
  Ii && Ii.unregister(i);
}
function jr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (an(A), a === gI)
        return () => {
          dE(o), QI(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = Wt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(Bt);
        return g.then.bind(g);
      }
      return jr(i, n, [...t, a]);
    },
    set(r, a, g) {
      an(A);
      const [s, C] = ci(g);
      return Wt(i, n, {
        type: "SET",
        path: [...t, a].map((I) => I.toString()),
        value: s
      }, C).then(Bt);
    },
    apply(r, a, g) {
      an(A);
      const s = t[t.length - 1];
      if (s === cE)
        return Wt(i, n, {
          type: "ENDPOINT"
        }).then(Bt);
      if (s === "bind")
        return jr(i, n, t.slice(0, -1));
      const [C, I] = bg(g);
      return Wt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: C
      }, I).then(Bt);
    },
    construct(r, a) {
      an(A);
      const [g, s] = bg(a);
      return Wt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: g
      }, s).then(Bt);
    }
  });
  return xE(o, i), o;
}
function lE(i) {
  return Array.prototype.concat.apply([], i);
}
function bg(i) {
  const n = i.map(ci);
  return [n.map((t) => t[0]), lE(n.map((t) => t[1]))];
}
const EI = /* @__PURE__ */ new WeakMap();
function uE(i, n) {
  return EI.set(i, n), i;
}
function hE(i) {
  return Object.assign(i, { [aI]: !0 });
}
function ci(i) {
  for (const [n, t] of II)
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
    EI.get(i) || []
  ];
}
function Bt(i) {
  switch (i.type) {
    case "HANDLER":
      return II.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Wt(i, n, t, e) {
  return new Promise((A) => {
    const o = fE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function fE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function xI() {
  return ks();
}
const ma = _e(void 0);
ma.displayName = "CommonThresholdsContext";
function pE() {
  const i = ue(ma);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function dI() {
  return pE();
}
class mE {
  constructor(n, t, e, A, o, r, a, g) {
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
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.analytics = r, this.dispatcher = A, this.sessionToken = a, this.transactionCounting = g, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    yo() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new D("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    var A, o, r;
    const t = (A = this.currentDetection) == null ? void 0 : A.name, e = (o = this.detections) == null ? void 0 : o[n];
    if (!e) throw new D("Detection " + n + " not found");
    if (!((r = this.allowedDetectionTransitions[t]) != null && r.includes(n))) throw new D("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new D("Detection not initialized");
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new D("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    ca.warn(`
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
    return "" + t.replace(As, "") + n;
  }
}
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kg = {}, Ar = {}, er, Sg;
function yE() {
  if (Sg) return er;
  Sg = 1, er = i;
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
  return er;
}
var Gg = {}, Ng;
function wE() {
  return Ng || (Ng = 1, function(i) {
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
      for (var s = null, C = [], I = 0, E = 0, c; a < g; ) {
        var x = r[a++];
        switch (E) {
          case 0:
            C[I++] = t[x >> 2], c = (x & 3) << 4, E = 1;
            break;
          case 1:
            C[I++] = t[c | x >> 4], c = (x & 15) << 2, E = 2;
            break;
          case 2:
            C[I++] = t[c | x >> 6], C[I++] = t[x & 63], E = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, C)), I = 0);
      }
      return E && (C[I++] = t[c], C[I++] = 61, E === 1 && (C[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, C.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, C.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var s = g, C = 0, I, E = 0; E < r.length; ) {
        var c = r.charCodeAt(E++);
        if (c === 61 && C > 1)
          break;
        if ((c = e[c]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            I = c, C = 1;
            break;
          case 1:
            a[g++] = I << 2 | (c & 48) >> 4, I = c, C = 2;
            break;
          case 2:
            a[g++] = (I & 15) << 4 | (c & 60) >> 2, I = c, C = 3;
            break;
          case 3:
            a[g++] = (I & 3) << 6 | c, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return g - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(Gg)), Gg;
}
var tr, Rg;
function DE() {
  if (Rg) return tr;
  Rg = 1, tr = i;
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
  }, tr;
}
var or, Fg;
function bE() {
  if (Fg) return or;
  Fg = 1, or = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function s(c, x, d) {
        r[0] = c, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3];
      }
      function C(c, x, d) {
        r[0] = c, x[d] = a[3], x[d + 1] = a[2], x[d + 2] = a[1], x[d + 3] = a[0];
      }
      o.writeFloatLE = g ? s : C, o.writeFloatBE = g ? C : s;
      function I(c, x) {
        return a[0] = c[x], a[1] = c[x + 1], a[2] = c[x + 2], a[3] = c[x + 3], r[0];
      }
      function E(c, x) {
        return a[3] = c[x], a[2] = c[x + 1], a[1] = c[x + 2], a[0] = c[x + 3], r[0];
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
          var c = Math.floor(Math.log(s) / Math.LN2), x = Math.round(s * Math.pow(2, -c) * 8388608) & 8388607;
          g((E << 31 | c + 127 << 23 | x) >>> 0, C, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, s, C) {
        var I = g(s, C), E = (I >> 31) * 2 + 1, c = I >>> 23 & 255, x = I & 8388607;
        return c === 255 ? x ? NaN : E * (1 / 0) : c === 0 ? E * 1401298464324817e-60 * x : E * Math.pow(2, c - 150) * (x + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function s(c, x, d) {
        r[0] = c, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3], x[d + 4] = a[4], x[d + 5] = a[5], x[d + 6] = a[6], x[d + 7] = a[7];
      }
      function C(c, x, d) {
        r[0] = c, x[d] = a[7], x[d + 1] = a[6], x[d + 2] = a[5], x[d + 3] = a[4], x[d + 4] = a[3], x[d + 5] = a[2], x[d + 6] = a[1], x[d + 7] = a[0];
      }
      o.writeDoubleLE = g ? s : C, o.writeDoubleBE = g ? C : s;
      function I(c, x) {
        return a[0] = c[x], a[1] = c[x + 1], a[2] = c[x + 2], a[3] = c[x + 3], a[4] = c[x + 4], a[5] = c[x + 5], a[6] = c[x + 6], a[7] = c[x + 7], r[0];
      }
      function E(c, x) {
        return a[7] = c[x], a[6] = c[x + 1], a[5] = c[x + 2], a[4] = c[x + 3], a[3] = c[x + 4], a[2] = c[x + 5], a[1] = c[x + 6], a[0] = c[x + 7], r[0];
      }
      o.readDoubleLE = g ? I : E, o.readDoubleBE = g ? E : I;
    }() : function() {
      function r(g, s, C, I, E, c) {
        var x = I < 0 ? 1 : 0;
        if (x && (I = -I), I === 0)
          g(0, E, c + s), g(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, c + C);
        else if (isNaN(I))
          g(0, E, c + s), g(2146959360, E, c + C);
        else if (I > 17976931348623157e292)
          g(0, E, c + s), g((x << 31 | 2146435072) >>> 0, E, c + C);
        else {
          var d;
          if (I < 22250738585072014e-324)
            d = I / 5e-324, g(d >>> 0, E, c + s), g((x << 31 | d / 4294967296) >>> 0, E, c + C);
          else {
            var l = Math.floor(Math.log(I) / Math.LN2);
            l === 1024 && (l = 1023), d = I * Math.pow(2, -l), g(d * 4503599627370496 >>> 0, E, c + s), g((x << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, c + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, s, C, I, E) {
        var c = g(I, E + s), x = g(I, E + C), d = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, Q = 4294967296 * (x & 1048575) + c;
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
  return or;
}
function Wg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var nr, vg;
function kE() {
  if (vg) return nr;
  vg = 1, nr = i;
  function i(n) {
    try {
      if (typeof Wg != "function")
        return null;
      var t = Wg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return nr;
}
var Mg = {}, Lg;
function SE() {
  return Lg || (Lg = 1, function(i) {
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
  }(Mg)), Mg;
}
var ir, Og;
function GE() {
  if (Og) return ir;
  Og = 1, ir = i;
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
  return ir;
}
var rr, Jg;
function NE() {
  if (Jg) return rr;
  Jg = 1, rr = n;
  var i = Dt();
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
  }, rr;
}
var Ug;
function Dt() {
  return Ug || (Ug = 1, function(i) {
    var n = i;
    n.asPromise = yE(), n.base64 = wE(), n.EventEmitter = DE(), n.float = bE(), n.inquire = kE(), n.utf8 = SE(), n.pool = GE(), n.LongBits = NE(), n.isNode = !!(typeof St < "u" && St && St.process && St.process.versions && St.process.versions.node), n.global = n.isNode && St || typeof window < "u" && window || typeof self < "u" && self || Ar, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ar)), Ar;
}
var ar, Yg;
function lI() {
  if (Yg) return ar;
  Yg = 1, ar = g;
  var i = Dt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, h) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
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
  g.create = s(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, Q, h) {
    return this.tail = this.tail.next = new o(l, Q, h), this.len += Q, this;
  };
  function C(l, Q, h) {
    Q[h] = l & 255;
  }
  function I(l, Q, h) {
    for (; l > 127; )
      Q[h++] = l & 127 | 128, l >>>= 7;
    Q[h] = l;
  }
  function E(l, Q) {
    this.len = l, this.next = void 0, this.val = Q;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = I, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(c, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function c(l, Q, h) {
    for (; l.hi; )
      Q[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[h++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(c, Q.length(), Q);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(c, Q.length(), Q);
  }, g.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function x(l, Q, h) {
    Q[h] = l & 255, Q[h + 1] = l >>> 8 & 255, Q[h + 2] = l >>> 16 & 255, Q[h + 3] = l >>> 24;
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
  var d = i.Array.prototype.set ? function(l, Q, h) {
    Q.set(l, h);
  } : function(l, Q, h) {
    for (var m = 0; m < l.length; ++m)
      Q[h + m] = l[m];
  };
  return g.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var h = g.alloc(Q = e.length(l));
      e.decode(l, h, 0), l = h;
    }
    return this.uint32(Q)._push(d, Q, l);
  }, g.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(C, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, Q = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = l.next, this.tail = Q, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), h = 0; l; )
      l.fn(l.val, Q, h), h += l.len, l = l.next;
    return Q;
  }, g._configure = function(l) {
    n = l, g.create = s(), n._configure();
  }, ar;
}
var gr, Pg;
function RE() {
  if (Pg) return gr;
  Pg = 1, gr = t;
  var i = lI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Dt();
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
  }, t._configure(), gr;
}
var sr, Tg;
function uI() {
  if (Tg) return sr;
  Tg = 1, sr = o;
  var i = Dt(), n, t = i.LongBits, e = i.utf8;
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
    var I = this.uint32(), E = this.pos, c = this.pos + I;
    if (c > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(E, c);
    if (E === c) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, c);
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
  }, sr;
}
var Ir, Hg;
function FE() {
  if (Hg) return Ir;
  Hg = 1, Ir = t;
  var i = uI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = Dt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), Ir;
}
var _g = {}, cr, Kg;
function WE() {
  if (Kg) return cr;
  Kg = 1, cr = n;
  var i = Dt();
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
  }, cr;
}
var jg;
function vE() {
  return jg || (jg = 1, function(i) {
    var n = i;
    n.Service = WE();
  }(_g)), _g;
}
var qg, Vg;
function ME() {
  return Vg || (Vg = 1, qg = {}), qg;
}
var Zg;
function LE() {
  return Zg || (Zg = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = lI(), n.BufferWriter = RE(), n.Reader = uI(), n.BufferReader = FE(), n.util = Dt(), n.rpc = vE(), n.roots = ME(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(kg)), kg;
}
var zg, Xg;
function OE() {
  return Xg || (Xg = 1, zg = LE()), zg;
}
var N = OE();
const f = N.Reader, F = N.Writer, u = N.util, B = N.roots.default || (N.roots.default = {}), FA = B.dot = (() => {
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
      return e || (e = F.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Content();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
        if (o || (o = F.create()), A.images != null && A.images.length)
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(B.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = B.dot.Image.toObject(A.images[a], o);
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
        return o || (o = F.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Metadata();
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
              g.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
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
        if (o || (o = F.create()), A.supportedAbis != null && A.supportedAbis.length)
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
            ).string(r[a]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.AndroidMetadata(), s, C;
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
              g.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === u.emptyObject && (g.dynamicCameraFrameProperties = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = null; A.pos < E; ) {
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(c & 7);
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
              g.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
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
            let a = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
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
            r.dynamicCameraFrameProperties[a[g]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
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
        return A || (A = F.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
        return A || (A = F.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = B.dot.ImageSize.decode(e, e.uint32());
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
        return A || (A = F.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
        if (o || (o = F.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.IosMetadata(), s, C;
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
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(c & 7);
                    break;
                }
              }
              g.architectureInfo[s] = C;
              break;
            }
            case 6: {
              g.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
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
              g.croppedYuv420Image = B.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = !!A.architectureInfo[r[a]];
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
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
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
        return A || (A = F.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
        return A || (A = F.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = B.dot.ImageSize.decode(e, e.uint32());
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
        return A || (A = F.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
        if (o || (o = F.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = B.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = B.dot.v4.PlatformDetails.decode(A, A.uint32());
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
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[a], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], o);
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
        return A || (A = F.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return o || (o = F.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
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
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MediaTrackSettings();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return A || (A = F.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.ImageBitmap();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return o || (o = F.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
        return A || (A = F.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.DetectedObject();
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
              a.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = B.dot.v4.Point.decode(e, e.uint32());
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
        return A || (A = F.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Point();
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
        return A || (A = F.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.v4.Point.decode(e, e.uint32());
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
        if (o || (o = F.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PlatformDetails();
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
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(B.dot.v4.BrowserVersion.decode(A, A.uint32()));
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
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = B.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
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
        return A || (A = F.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.BrowserVersion();
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return o || (o = F.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        return o || (o = F.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        return o || (o = F.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Blob();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
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
        return A || (A = F.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
        return A || (A = F.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
        return o || (o = F.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
        return o || (o = F.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
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
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1ElementaryFile();
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
        return A || (A = F.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
        return A || (A = F.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.DataAuthenticationStatus();
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
        return o || (o = F.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
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
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.ChipAuthenticationStatus();
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
        if (o || (o = F.create()), A.segments != null && A.segments.length)
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 3: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], o);
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
        return A || (A = F.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.EyeGazeLivenessSegment();
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
              a.image = B.dot.Image.decode(e, e.uint32());
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
        if (o || (o = F.create()), A.stepResults != null && A.stepResults.length)
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(B.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
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
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = B.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], o);
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
        return A || (A = F.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.MultiRangeLivenessStepResult();
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
              a.image = B.dot.ImageWithTimestamp.decode(e, e.uint32());
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
        if (A || (A = F.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            B.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.detections && a.detections.length || (a.detections = []), a.detections.push(B.dot.v4.FaceDetection.decode(e, e.uint32()));
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
        return A || (A = F.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && B.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.FaceDetection();
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
              a.position = B.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
        return A || (A = F.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && B.dot.PointDouble.encode(e.center, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = B.dot.PointDouble.decode(e, e.uint32());
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
        return o || (o = F.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && B.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        return o || (o = F.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
      return e || (e = F.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Image();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && B.dot.Image.encode(t.image, e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = B.dot.Image.decode(t, t.uint32());
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageSize();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      if (e || (e = F.create()), t.items != null && t.items.length) {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Int32List();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.RectangleDouble();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.DigestWithTimestamp();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return A || (A = F.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
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
      e instanceof f || (e = f.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.Video();
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
            a.containerMp4 = B.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = B.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, n.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
      return e || (e = F.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoContainer();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoStream();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointInt();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return e || (e = F.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointDouble();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
})(), $g = /* @__PURE__ */ new Map([[ee.ZERO, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [ee.ONE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [ee.TWO, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [ee.THREE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [ee.FOUR, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [ee.FIVE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), hI = {};
hI.min = 0.4;
const fI = {};
fI.min = 0.25;
const qr = {};
qr.min = 0.2, qr.max = 0.85;
const pI = {};
pI.min = 0.05;
const mI = {};
mI.max = 30;
const yI = {};
yI.min = 0;
const wI = {};
wI.confidence = yI;
const DI = {};
DI.min = 0;
const bI = {};
bI.confidence = DI;
const ze = {};
ze.confidence = hI, ze.sharpness = fI, ze.brightness = qr, ze.edgeDistanceToImageShorterSideRatio = pI, ze.devicePitchAngle = mI, ze.leftEye = wI, ze.rightEye = bI;
const kI = {};
kI.min = 0.4;
const SI = {};
SI.min = 0.25;
const Vr = {};
Vr.min = 0.2, Vr.max = 0.85;
const GI = {};
GI.min = 0.05;
const NI = {};
NI.max = 30;
const RI = {};
RI.min = 0;
const FI = {};
FI.confidence = RI;
const WI = {};
WI.min = 0;
const vI = {};
vI.confidence = WI;
const Xe = {};
Xe.confidence = kI, Xe.sharpness = SI, Xe.brightness = Vr, Xe.edgeDistanceToImageShorterSideRatio = GI, Xe.devicePitchAngle = NI, Xe.leftEye = FI, Xe.rightEye = vI;
const Zr = {};
Zr.MOBILE = ze, Zr.DESKTOP = Xe;
const JE = Zr, MI = {};
MI.min = 0.4;
const LI = {};
LI.min = 0;
const OI = {};
OI.confidence = LI;
const JI = {};
JI.min = 0;
const UI = {};
UI.confidence = JI;
const kn = {};
kn.confidence = MI, kn.leftEye = OI, kn.rightEye = UI;
const YI = {};
YI.min = 0.4;
const PI = {};
PI.min = 0;
const TI = {};
TI.confidence = PI;
const HI = {};
HI.min = 0;
const _I = {};
_I.confidence = HI;
const Sn = {};
Sn.confidence = YI, Sn.leftEye = TI, Sn.rightEye = _I;
const zr = {};
zr.MOBILE = kn, zr.DESKTOP = Sn;
const UE = zr, A0 = 1201 + 1978 * -2 + 951 * 5, Gn = {};
Gn.timeout = 4e3, Gn.threshold = 0.7, Gn.instructions = [NA.FACE_TOO_CLOSE, NA.FACE_TOO_FAR];
const Cr = Gn, KI = "SAM v1.50.5 for idcards";
class jI extends mE {
  constructor(t, e, A, o, r, a, g, s, C, I, E) {
    super(t, KI, e, a, g, C, I, E);
    p(this, "detector");
    p(this, "allowedDetectionTransitions");
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "passiveLivenessPhase");
    p(this, "livenessChallengePhase");
    p(this, "dispatcher");
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = s, this.dispatcher = a, this.allowedDetectionTransitions = this.buildAllowedTransitions(s);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  buildAllowedTransitions(t) {
    if (t.length === -39 * 48 + 3254 * 1 + -1382)
      return { [_.PASSIVE_LIVENESS]: [] };
    const e = { [_.PASSIVE_LIVENESS]: [_.LIVENESS_CHALLENGE + "_0"] }, A = e;
    return this.livenessChallengePhase.forEach((o, r) => {
      const a = _.LIVENESS_CHALLENGE + "_" + r;
      if (r < this.livenessChallengePhase.length - (-58 * -85 + -7502 + 2573)) {
        const g = _.LIVENESS_CHALLENGE + "_" + (r + 1);
        A[a] = [g];
      }
    }), A;
  }
  async init() {
    await super.init();
    const t = {};
    t[_.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: A0, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: _.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((e, A) => {
      const o = A + 1 < this.livenessChallengePhase.length ? A + 1 : void 0, r = _.LIVENESS_CHALLENGE + "_" + A;
      t[r] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: A0, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: e, currentIndex: A, nextIndex: o }, type: _.LIVENESS_CHALLENGE });
    }), this.setDetections(t), this.setCurrentDetection(this.detections[_.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class YE {
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
    if (!this.assetsDirectoryPath) throw new D("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.protobuf) throw new D("Protobuf is required");
    if (!this.dispatcher) throw new D("Dispatcher is required");
    if (!this.detector) throw new D("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class PE extends YE {
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
    if (super.validateDependencies(), !this.detectionFactory) throw new D("DetectionFactory is required");
    if (!this.phaseThresholds) throw new D("PhaseThresholds is required");
    if (!this.challengeSequence) throw new D("ChallengeSequence is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this.phaseThresholds = void 0, this.challengeSequence = void 0, this;
  }
  build() {
    return this.validateDependencies(), new jI(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const TE = "/dot-assets/multi-range/dot-DJT3N0It.js", e0 = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, ui = class ui {
  constructor() {
    p(this, "lastDetails");
    p(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = -7246 + -7 * -636 + 2794;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ui()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -370 * 23 + -1 * -6254 + -47 * -48;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && e0(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    e0(n, t);
  }
};
p(ui, "_instance");
let Ao = ui;
const HE = () => "prod".toLowerCase() === "dev";
class _E extends Ao {
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
    if (!HE() || !t) return;
    const e = {};
    e.candidateSelectionImages = t, this.dispatchCustomEventOnChange(this.events.DEV, e);
  }
}
class KE extends _E {
  dispatchChallengeItemChangedEvent(n) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = n, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const jE = -15055 + -45 * -379;
class t0 {
  constructor(n) {
    p(this, "duration");
    p(this, "candidateSelectionTime", -4365 + 43 * -45 + 6300);
    p(this, "candidateSelectionImages", []);
    this.duration = n ?? jE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > 2104 * -3 + -21 * -439 + -2907;
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
    this.candidateSelectionTime = 6 * 40 + -1173 + 311 * 3, this.candidateSelectionImages = [];
  }
}
function Ci(i) {
  const { height: n, width: t } = hC(i), e = (i.width - t) / (-2438 * -1 + -9149 + 7 * 959), A = (i.height - n) / (-67 * 81 + -743 + 6172), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function qI(i, n, t) {
  const { height: e, width: A } = t, o = mi(i.width, i.height), r = A - o * n * (-3 * -578 + -8181 + 1 * 6449), a = e - o * n * (-6573 + -55 * -46 + 4045 * 1), g = (i.width - r) / (940 * 10 + -4 * -2379 + 1351 * -14), s = (i.height - a) / (1 * -6569 + -5073 + 1 * 11644), C = {};
  return C.shiftX = g, C.shiftY = s, C.width = r, C.height = a, C;
}
function Gt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const VI = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = yC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = a, s.left = g, es(s);
}, ZI = (i, n, t = RC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), zI = async (i) => ZI(i, 2469 * 1 + 8281 + -820 * 13), qE = async (i) => ZI(i, -5305 * -1 + 5875 + -11080, "image/png"), XI = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 2311 * 1 + 9445 + -11756, -3871 + -9 * -336 + 847, t.width, t.height), t;
}, $I = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(1 * 2182 + 665 + 3 * -949, -271 * 4 + 5227 * 1 + -4143, i.width, i.height);
  return t;
};
async function VE(i, n) {
  const t = XI(i, n);
  return qE(t);
}
const Ac = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, Br = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, Ac(i, g, t);
}, po = (i, n, t, e = -2548 + 1 * 9577 + -7029) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 5790 + 4831 * 2 + -15445, 9417 + -1 * 9410), A.beginPath());
};
function ZE(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, Ac(i, o, "rgba(255, 0, 0, 0.3)", !0), po(i, e, "lime");
}
function zE(i, n, t) {
  const e = VI(n, t);
  Object.values(e).map((A) => po(i, A, "orange"));
}
class ec extends D {
  constructor(t) {
    super(t.message);
    p(this, "cause");
    this.name = "ProxyError", this.cause = t, this.logError(t);
  }
  logError(t) {
  }
}
var et;
class tc extends Array {
  constructor(t) {
    super();
    U(this, et);
    M(this, et, t);
  }
  get size() {
    return S(this, et);
  }
  pushFixed(...t) {
    if (t.length > S(this, et)) {
      const e = t.slice(-S(this, et));
      this.push(...e);
      return;
    }
    this.length === S(this, et) && this.splice(-412 * 6 + 9870 + -7398, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-12566 + -12566 * -1);
  }
}
et = new WeakMap();
(function(i, n) {
  const t = i();
  function e(a, g, s, C, I) {
    return RA(I - -241, g);
  }
  function A(a, g, s, C, I) {
    return RA(I - -388, s);
  }
  function o(a, g, s, C, I) {
    return RA(a - 165, I);
  }
  function r(a, g, s, C, I) {
    return RA(a - -532, g);
  }
  for (; ; )
    try {
      if (parseInt(e(-12, "k29p", -12, 13, 3)) / 1 * (parseInt(o(379, 387, 379, 392, "fXQf")) / 2) + parseInt(o(397, 404, 383, 402, "yTr4")) / 3 * (parseInt(o(383, 396, 394, 399, "LwRE")) / 4) + parseInt(o(377, 360, 369, 378, "I1er")) / 5 + parseInt(e(-5, "n*kz", 5, -7, -2)) / 6 * (-parseInt(A(-191, -173, "H%2c", -173, -175)) / 7) + parseInt(r(-315, "[lKv", -317, -329, -311)) / 8 * (parseInt(e(-2, "d3q)", -8, -22, -15)) / 9) + parseInt(r(-310, "u*OT", -326, -298, -307)) / 10 * (-parseInt(e(19, "tl]d", -4, 20, 4)) / 11) + -parseInt(o(401, 397, 384, 410, "fhNi")) / 12 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Bi, -123937 + 25 * 12874);
function RA(i, n) {
  const t = Bi();
  return RA = function(e, A) {
    e = e - (1 * -4363 + 1127 + 3447);
    let o = t[e];
    if (RA.IZCLlB === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      RA.WqchYD = C, i = arguments, RA.IZCLlB = !0;
    }
    const a = t[485 * 11 + -3 * -1493 + -2 * 4907], g = e + a, s = i[g];
    return s ? o = s : (RA.cBnydH === void 0 && (RA.cBnydH = !0), o = RA.WqchYD(o, A), i[g] = o), o;
  }, RA(i, n);
}
async function XE(i) {
  function n(r, a, g, s, C) {
    return RA(s - -965, C);
  }
  function t(r, a, g, s, C) {
    return RA(r - -799, g);
  }
  function e(r, a, g, s, C) {
    return RA(s - 58, C);
  }
  const A = await window[o(-543, "QehR", -544, -569, -554) + "o"][n(-735, -747, -749, -735, "P5#n") + "e"][o(-557, "LwRE", -552, -536, -552) + "t"](o(-558, "Zt#Z", -564, -587, -569), i);
  function o(r, a, g, s, C) {
    return RA(C - -789, a);
  }
  return Array[e(283, 273, 301, 289, "J!lr")](new Uint8Array(A))[o(-561, "98^p", -570, -562, -556)]((r) => r[t(-559, -572, "P&J#") + o(-559, "T^Z)", -579, -585, -568)](2 * 4869 + 6 * -926 + -4166)[n(-753, -732, -741, -738, "k)kg") + o(-554, "[lKv", -563, -553, -547)](6114 * 1 + 4638 + -10750, "0"))[o(-573, "T^Z)", -577, -564, -578)]("");
}
function Bi() {
  const i = ["rGtdRW", "CwbsW4/cNMn1ga", "WR7cObBcTIJcVsj6W754EH3dIG", "WPRcQLiFW53cS8oLWRldKa", "g8oWWPXCW4f9Dq", "edhdGSo5axRcTmo/WRGoc8o9rq", "WPVcM8oXxea", "Dv7dTmkYqCk4WRy", "BJZcJITHxfxcHfW", "W7ZdP0ddThC", "w8oxW7BdTq", "W4SiW48VwGldOSkyCa", "DSolW74", "WP48umoKugpdL1/cT8orcf8", "brG5zSoM", "mddcIteozcldOcNdLey9cq", "BwNdLb7dHG", "iIhcVhXpWQ7dJHbWWOldSCkH", "W4ddPtNdPSoZWO3cQq", "W65qiKhcKq", "CZirygGcWQjKWRTdW5rw", "jNjt", "gsBdH8kIWQW5W7u", "WRdcHaGkysSfimkBWQ7cU0e", "WR9/mg96aCkPW5PQWP3dP8kz", "rqxdOCkb", "Emo9W5uzWO/dVuj7CJHzgq", "AL9bW5tcI1dcTvpdPJa/W4i", "FwRdHCoflmo4yW", "d8kqWQZcR8oXn8ovoCkLWQiOuLu", "AJVcJMpdLKSqWPlcK23dPmkd", "F29xmH5+WR0", "pJJcIZ3dPuddPJvU", "W4S+qCo9rmk3jmkq", "W7XajCoXvG"];
  return Bi = function() {
    return i;
  }, Bi();
}
class $E {
  constructor(n) {
    p(this, "detectionRecord");
    p(this, "imagesWithTimestampForDuplicateDetection");
    p(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new tc(SC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / FC, A = e / (7 * -252 + 74 * 86 + -4598), o = n.length / (-1682 * -2 + 1004 + -4366), r = n.slice(o - A, o + A), a = await XE(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: $I(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new ec(A) : D.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = es(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const a = r, g = this.validationService.validateDetectedObject(o, t);
    if (g.result.get("isPresent")) {
      const s = {};
      s.image = e, s.timestamp = A, this.collectImagesForDuplicateDetection(s);
    }
    return this.detectionRecord.push(a), { detection: o, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class o0 extends $E {
  constructor(t, e) {
    super(e);
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = Ci(t), A = XI(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detect(A.data, A.resolution, o);
    r = this.transformDetectionCoordinatesRelativeToFullFrameImage(r, Ci(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(t, e) {
    return { ...t, leftEye: { ...t.leftEye, center: Gt(t.leftEye.center, e) }, rightEye: { ...t.rightEye, center: Gt(t.rightEye.center, e) }, mouth: { ...t.mouth, center: Gt(t.mouth.center, e) }, topLeft: Gt(t.topLeft, e), bottomRight: Gt(t.bottomRight, e), faceCenter: Gt(t.faceCenter, e) };
  }
}
class Ax {
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
var Ro, tt, Yt;
class ex extends Array {
  constructor(t) {
    super();
    U(this, Ro, -7395 * -1 + -6 * 139 + -6561);
    U(this, tt, []);
    U(this, Yt, !1);
    M(this, Ro, t);
  }
  clearAfterTimeout() {
    if (S(this, tt).length === -186 * -3 + -7 * 1255 + -8227 * -1) return;
    const t = Date.now(), e = S(this, tt).findLastIndex((A) => t - A > S(this, Ro));
    e !== -1 && (M(this, Yt, !0), this.splice(-3345 * 1 + 1250 + 2095, e + 1), S(this, tt).splice(15 * 658 + 1 * 7060 + 1693 * -10, e + (-12060 + -12061 * -1)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), S(this, tt).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return S(this, Yt);
  }
  clear() {
    this.splice(-6433 * 1 + -4927 + 11360), S(this, tt).splice(1943 + 59 * -167 + 7910), M(this, Yt, !1);
  }
}
Ro = new WeakMap(), tt = new WeakMap(), Yt = new WeakMap();
const Nn = {};
Nn.minFaceSizeRatio = 0.13, Nn.maxFaceSizeRatio = 0.15, Nn.scale = 0.85;
const Rn = {};
Rn.minFaceSizeRatio = 0.152, Rn.maxFaceSizeRatio = 0.172, Rn.scale = 1;
const Fn = {};
Fn.minFaceSizeRatio = 0.18, Fn.maxFaceSizeRatio = 0.205, Fn.scale = 1.18;
const Wn = {};
Wn.minFaceSizeRatio = 0.215, Wn.maxFaceSizeRatio = 0.24, Wn.scale = 1.41;
const vn = {};
vn.minFaceSizeRatio = 0.245, vn.maxFaceSizeRatio = 0.275, vn.scale = 1.61;
const Mn = {};
Mn.minFaceSizeRatio = 0.28, Mn.maxFaceSizeRatio = 0.34, Mn.scale = 1.84;
const n0 = /* @__PURE__ */ new Map([[ee.ZERO, Nn], [ee.ONE, Rn], [ee.TWO, Fn], [ee.THREE, Wn], [ee.FOUR, vn], [ee.FIVE, Mn]]);
class oc {
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
class tx extends oc {
  constructor(t, e) {
    super(t);
    p(this, "nextIndex");
    p(this, "controller");
    this.nextIndex = e, this.controller = t;
  }
  async onCapture(t) {
    var o, r, a;
    super.onCapture(t);
    const e = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(_.LIVENESS_CHALLENGE + "_" + this.nextIndex), (e == null ? void 0 : e[this.nextIndex]) !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    (o = this.controller.getTransactionCounting()) == null || o.trackTransaction();
    const A = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: (r = this.controller.cameraService.videoRecorder) == null ? void 0 : r.getRecording() });
    this.dispatchOnCompleteEvent(A), (a = this.controller.getAnalytics()) == null || a.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(t) {
    super.onDetection(t);
  }
  async dispatchOnCompleteEvent(t) {
    const e = this.controller.getOnCaptureData(), A = e.get(_.PASSIVE_LIVENESS);
    if (!A) throw new D("On capture data was not found");
    const { detectedObject: o, resultImage: r } = A, a = {};
    a.height = r.height, a.width = r.width;
    const g = a, s = await zI(r), C = {};
    C.detection = o, C.imageResolution = g;
    const I = {};
    I.data = C, I.image = s;
    const E = {};
    E.imageWithMetadata = I;
    const c = E;
    this.controller.getDispatcher().dispatchOnCompleteEvent(c, t);
  }
}
class ox {
  constructor(n, t, e, A, o, r, a) {
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
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = a, this.fpsOfAllImages = new tc(-514 * 19 + -8577 + -18373 * -1), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof ec)) throw n;
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
    const e = { ...n, avgFps: Mt(Ji(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new D("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Mt(Ji(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = $I(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await VE(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const s = g, C = {};
    return C.croppedImage = a, C.topLeftCorner = s, C;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Mt((-1189 * 2 + -3763 * 1 + 193 * 37) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[-5123 + -47 * -109], t), s = this.collectAndEscalate(g), C = {};
    return C.detection = t.detection, C.instructionCode = g, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = s, { processedImage: C, detectionTime: e, fps: A, avgFps: Mt(Ji(this.fpsOfAllImages)), resolution: r };
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
    await fr(Math.max(Xa.max - n, Xa.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class nx extends ox {
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
      throw e instanceof D ? e : D.fromError(e);
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
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.takenPhoto = t, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: t, takenPhoto: e } = this.bestImage || {};
    if (e && t) await this.onCapture(e, t, this.candidateSelection.getCandidateSelectionImages());
    else throw new D("Something went wrong during capturing an image");
  }
  getInstructionCode(t, e) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && (e != null && e.isValid) ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && (e != null && e.isValid) ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class ix {
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
    if (!this.name) throw new D("Name is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.callbacks) throw new D("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new D("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new D("FallbackInstruction is required");
  }
}
class nc extends ix {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new D("instructionCodeMap is required");
    if (!this.candidateSelection) throw new D("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new nx(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class rx extends nc {
}
var Pt, dt, lt;
class ic {
  constructor(n) {
    U(this, Pt);
    U(this, dt);
    U(this, lt);
    M(this, Pt, n), M(this, dt, /* @__PURE__ */ new Map());
  }
  validate() {
    S(this, Pt).forEach((n) => {
      S(this, dt).set(n.name, n.evaluate());
    }), M(this, lt, void 0);
  }
  isValid() {
    return S(this, lt) === void 0 && M(this, lt, Array.from(S(this, dt).values()).every((n) => n)), S(this, lt);
  }
  get result() {
    return S(this, dt);
  }
  get validators() {
    return S(this, Pt);
  }
}
Pt = new WeakMap(), dt = new WeakMap(), lt = new WeakMap();
class rc {
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
var Fo, ut;
class Se {
  constructor(n, t) {
    U(this, Fo);
    U(this, ut);
    M(this, Fo, n), M(this, ut, t);
  }
  get threshold() {
    return S(this, ut);
  }
  get name() {
    return S(this, Fo);
  }
  isValueBelowThreshold(n) {
    return n < S(this, ut);
  }
  isValueAboveThreshold(n) {
    return n > S(this, ut);
  }
}
Fo = new WeakMap(), ut = new WeakMap();
const ax = "isNotSmall";
var Wo;
class ac extends Se {
  constructor(t, e) {
    super(ax, t);
    U(this, Wo);
    M(this, Wo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Wo));
  }
}
Wo = new WeakMap();
const gx = "isPresent";
var vo;
class gc extends Se {
  constructor(t, e) {
    super(gx, t);
    U(this, vo);
    M(this, vo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, vo));
  }
}
vo = new WeakMap();
const sx = "isLeftEyePresent";
var Mo;
class sc extends Se {
  constructor(t, e) {
    super(sx, t);
    U(this, Mo);
    M(this, Mo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Mo));
  }
}
Mo = new WeakMap();
const Ix = "isNotLarge";
var Lo;
class Ic extends Se {
  constructor(t, e) {
    super(Ix, t);
    U(this, Lo);
    M(this, Lo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Lo));
  }
}
Lo = new WeakMap();
const cx = "isRightEyePresent";
var Oo;
class cc extends Se {
  constructor(t, e) {
    super(cx, t);
    U(this, Oo);
    M(this, Oo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Oo));
  }
}
Oo = new WeakMap();
class Cx extends rc {
  constructor(n) {
    super("LivenessChallengeValidationService", n);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new ic([new gc(t.confidence.min, n.confidence), new sc(t.leftEye.confidence.min, n.leftEye.confidence), new cc(t.rightEye.confidence.min, n.rightEye.confidence), new ac(t.size.min, n.faceSize), new Ic(t.size.max, n.faceSize)]);
    return e.validate(), e;
  }
}
class Bx extends oc {
  constructor(t) {
    super(t);
    p(this, "controller");
    this.controller = t;
  }
  onCapture(t) {
    super.onCapture(t), this.controller.transitionToDetection(_.LIVENESS_CHALLENGE + "_0");
    const e = this.controller.getLivenessChallengePhase();
    e !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[-16144 + -8072 * -2]), this.controller.runDetectionLoop();
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class Qx extends nc {
}
const Ex = "isNotDim";
var Jo;
class xx extends Se {
  constructor(t, e) {
    super(Ex, t);
    U(this, Jo);
    M(this, Jo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Jo));
  }
}
Jo = new WeakMap();
const dx = "isNotBright";
var Uo;
class lx extends Se {
  constructor(t, e) {
    super(dx, t);
    U(this, Uo);
    M(this, Uo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Uo));
  }
}
Uo = new WeakMap();
const ux = "isSharp";
var Yo;
class hx extends Se {
  constructor(t, e) {
    super(ux, t);
    U(this, Yo);
    M(this, Yo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Yo));
  }
}
Yo = new WeakMap();
const fx = "isNotPitched";
var Po;
const Da = class Da extends Se {
  constructor(t, e) {
    super(fx, Da.calculatePitchAngleAccelerationThreshold(t));
    U(this, Po);
    M(this, Po, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return bC * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = S(this, Po) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Po = new WeakMap();
let Xr = Da;
const px = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, mx = (i, n) => Object.values(i).every((t) => px(t, n)), yx = "isNotOutOfBounds";
var To, ht;
class wx extends Se {
  constructor(t, e, A) {
    super(yx, t);
    U(this, To);
    U(this, ht);
    M(this, To, e), M(this, ht, A);
  }
  evaluate() {
    const t = qI(S(this, ht), this.threshold, Ci(S(this, ht))), e = VI(S(this, To), S(this, ht));
    return mx(e, t);
  }
}
To = new WeakMap(), ht = new WeakMap();
class Dx extends rc {
  constructor(t) {
    super("PassiveLivenessValidationService", t);
    p(this, "acceleration");
  }
  validateDetectedObject(t, e) {
    const A = this.getThresholds(), o = new ic([new gc(A.confidence.min, t.confidence), new sc(A.leftEye.confidence.min, t.leftEye.confidence), new cc(A.rightEye.confidence.min, t.rightEye.confidence), new ac(A.size.min, t.faceSize), new Ic(A.size.max, t.faceSize), new hx(A.sharpness.min, t.sharpness), new xx(A.brightness.min, t.brightness), new lx(A.brightness.max, t.brightness), new wx(A.edgeDistanceToImageShorterSideRatio.min, t, e), new Xr(A.devicePitchAngle.max, this.acceleration)]);
    return o.validate(), o;
  }
}
class bx {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, currentIndex: r, detector: a, multiRangeLivenessChallengeItem: g, nextIndex: s, phaseThresholds: C } = n;
    switch (t) {
      case _.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(o, e, a, A, C, g);
      case _.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(o, e, a, A, C, g, r, s);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(n, t, e, A, o, r) {
    const a = new Qx(), g = this.getThresholdsWithFaceSize(o[_.PASSIVE_LIVENESS], r), s = new Dx(g), C = new Bx(n), I = new o0(e, s), E = new t0(A), c = this.createInstructionEscalation(n);
    return a.setName(_.PASSIVE_LIVENESS), a.setCameraService(t), a.setImageProcessor(I), a.setCallbacks(C), a.setCandidateSelection(E), a.setCheckToInstructionCodeMap(Wa), a.setInstructionCodeMap(NA), a.setFallbackInstruction(NA.FACE_NOT_PRESENT), a.setInstructionEscalation(c), a.build();
  }
  createLivenessChallengeDetection(n, t, e, A, o, r, a, g) {
    const s = new rx(), C = this.getThresholdsWithFaceSize(o[_.LIVENESS_CHALLENGE], r), I = new Cx(C), E = new tx(n, g), c = new o0(e, I), x = new t0(A), d = this.createInstructionEscalation(n);
    return s.setName(this.prepareIndexedPhaseName(_.LIVENESS_CHALLENGE, a)), s.setCameraService(t), s.setImageProcessor(c), s.setCallbacks(E), s.setCandidateSelection(x), s.setCheckToInstructionCodeMap(Wa), s.setInstructionCodeMap(NA), s.setFallbackInstruction(NA.FACE_NOT_PRESENT), s.setInstructionEscalation(d), s.build();
  }
  prepareIndexedPhaseName(n, t) {
    return t === void 0 ? n : n + "_" + t;
  }
  getThresholdsWithFaceSize(n, t) {
    if (t === void 0 || !n0.has(t)) throw new D("Invalid challenge");
    const e = n0.get(t);
    if (!e) throw new D("Invalid challenge");
    const A = {};
    A.min = e.minFaceSizeRatio, A.max = e.maxFaceSizeRatio;
    const o = { ...n };
    return o.size = A, o;
  }
  createInstructionEscalation(n) {
    return new Ax(new ex(Cr.timeout), n.getDispatcher(), { threshold: Cr.threshold, instructions: Cr.instructions }, n.getAnalytics());
  }
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return aA(I - -891, g);
  }
  function e(g, s, C, I, E) {
    return aA(I - 164, E);
  }
  const A = i();
  function o(g, s, C, I, E) {
    return aA(I - 373, g);
  }
  function r(g, s, C, I, E) {
    return aA(g - 662, E);
  }
  function a(g, s, C, I, E) {
    return aA(s - -97, E);
  }
  for (; ; )
    try {
      if (-parseInt(o("91YD", 1018, 850, 907, 1024)) / 1 + -parseInt(t("MR%B", -361, -419, -416, -465)) / 2 + parseInt(o("rnpp", 932, 1058, 979, 945)) / 3 * (-parseInt(r(1285, 1381, 1261, 1351, "au]G")) / 4) + -parseInt(a(510, 472, 547, 528, "pXTK")) / 5 * (parseInt(e(730, 517, 610, 616, "IdHA")) / 6) + -parseInt(a(506, 538, 610, 544, "jGDn")) / 7 + -parseInt(o("Z65R", 1016, 1136, 1025, 1049)) / 8 * (-parseInt(e(776, 692, 872, 777, "%(N9")) / 9) + parseInt(t("KxAV", -333, -204, -299, -246)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Qi, 82 * -6655 + -30419 * -19 + 11239 * 29);
function aA(i, n) {
  const t = Qi();
  return aA = function(e, A) {
    e = e - (2844 + -11 * -136 + 1301 * -3);
    let o = t[e];
    if (aA.aoiyom === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      aA.YTdOoJ = C, i = arguments, aA.aoiyom = !0;
    }
    const a = t[8861 + -1 * 3803 + -843 * 6], g = e + a, s = i[g];
    return s ? o = s : (aA.Usbaxi === void 0 && (aA.Usbaxi = !0), o = aA.YTdOoJ(o, A), i[g] = o), o;
  }, aA(i, n);
}
function Qi() {
  const i = ["kY/cTbeO", "a2XbW6Ga", "W4tdNd1iyq", "W4NdVwiVW6K", "F197fa", "W7akAdRdUG", "WRbgWPBcQ8o9", "lZrWdSkk", "fINdNfNdNa", "nfRdGCkUW4u", "hcDRxe0", "W5fsoCo2WQG", "W5BdTLldQ8of", "WRVdUrflEW", "sZn7zIe", "CY/dTtC", "tSo1WPVdGsy", "hq8ukmk1", "qCo8WP3dGJ0", "W5j/rmobW4q", "mmoyW6/dVKK", "iee2cMFdL2CPbvZcIZ4ura", "k8oRcSkHua", "C3DoW4NdVq", "WRRcUCksW7RdVW", "AWZdJw4+", "i3ZdKbCu", "wrBdIWCM", "s8ksjupcTW", "WO/cG8olWP7cNG", "WRKZWOzlWOi", "W7Gryf3dSW", "qSk9WQD9WQq", "dbnaW6GG", "W6BdISkAgLK", "kNVcS2HkW6q2WRimW5zyWO9q", "k8kMiZxcGa", "WO7cJCoJWQ8K", "WPFdPCkTAJC", "ntrFbby", "W5dcIvOBW5q", "bSoKrCk+la", "WPtcRSk3W4y2W4DyW6ZcUf4TWO9w", "W7BcIuSbW5i", "lmk+WO1CWR0", "WQezWPOYW48", "W7z+iCkJWRK", "FmklWONcKCko", "E8oZWQBdUSkR", "Fh4LmGm", "W43cKwVdISoa", "W53cICoRW7mk", "y8kVWRirWPrQcW", "WQm2W6fuDq", "WQVdKmoRW7vl", "W4hcO0m9W6u", "W7NdOSkLrSkK", "hYzebHa", "usldICoYgG", "aCk+W7dcISkT", "smkAgw/dUG", "qCoRWQBdG8kT", "WQn7tMhcMJZdNvldL33cOSoz", "rdrqArC", "gtddU8kibwr5o2BcKmkXWPzD", "gmkOigq", "hCk1lCoupa", "qghcPHNcVYnHBwhdISkOWRG8WOW", "WRhcV8kDW4pcKa", "WOJdGmoVimkA", "or7dL8kZxa", "WORdM8kVr8kA", "dSkDA8kZEG", "gfxdHsfd", "dGtdKSkAW5W", "pmoTjSk6xW", "W5ZdV8kHhJK", "WRvAWQhdGmoI", "W67dOmk0jmk0", "FrfQDJa", "W5hcRmombSkB", "imkEWODrWP3dKSkG", "W7xcRqmMWOW", "W6NdO8ojW6ZdGSoCfsSAWPeFcL4", "tCoIWP7dTsu", "WOS7WRxcI8oC", "xddcISkRqq", "W4iUWOrYqq", "WOWQWOvtqG", "wSoDxmkMsq", "DmomWOJdQsG", "W4vmDXtdRG", "iML1W6SD", "iYSMkmk2", "gahdLgddJW", "W5/dOryJWP4", "W5mAdmk/W5e", "WRJcRSkYW6BcJG", "BmkXWQHFWOe", "WRWjWRjwyq", "WRjEWPVdHmoz", "W7W6WQGM", "fCkRfvdcOG", "FrtdM8omiq", "gw/cV8o1xGCg", "cCk3gwZcPq", "W77dI1JdPmox", "d1nAW78T", "lCoVWOtcOqy", "W7zOi8k0W6i", "WQSadZtdUG", "hw7cU8oOBa", "hc7cSSowCq", "WPxcMCk5WQtdRa", "WRZdRmkrW7yT", "wwZcUCkZE3bejW", "tmoyxZ7cOba0jCkxnmkFW7RcIG", "trKTpqW", "dNhdIJ5+", "rb3dG8oTfG", "W5/dK10yWR4", "W5BdMmouWQvS", "W5xdPHWUpq", "W7NdSmkTz1a", "mvFdUCkQ", "e8ozE8kisG", "W6ZcTSkcWR3cNG", "W4fplCkzWR8", "WQ/cS8kVWQ/dMW", "qJJdICojja", "dLLesSkZ", "n8kefudcRG", "lCoDD8kMtq", "kGZcSHiw", "EJtdGbaW", "FWldL286", "qYveFYyTWRK", "A1XkWQJcRG", "W6BdO8opW6ZdH8oACICDWRK5cW", "WPnCamo6WO8", "zqpdR8oChW", "WPZdQmkdm2a", "W40QbttdUW", "bmo/z8kTAq", "WOHKbSkNWQK", "sSkGf13dVq", "lx9moXi", "WOxcUJqxWPyPW5bK", "qmouWR7dPCkD", "pYNdN2RdKW", "WOzOpCoPWO8", "c1fVW50o", "D2JcM8onFW", "vuPZzJO", "WOJcG8kJW6RcJq", "W4LVqmk1W5O", "pg/cK8kRtG", "W6/dT3ldJmoQ", "WQNcQCkwWPNdKG", "W4NdUfJdJ8oy", "mSkOWQCQWOC", "eSkikmoTwq", "W6ldKZCwkW", "n21Ubs4", "W4xdV8kWbxS", "WOddRmo6W6SP", "sf9xgJi", "acuwk8ov", "hYFdHNxdSW", "w8kyb8oCkeqplCk9WP3cRCogWQa", "WQe/WRv2WPq", "vmkozmollmouWPLJrmodBCkL", "qtXwubK", "C0bMore", "W7aEW7r3WOy", "a8kkcM3cTW", "cSkPlxlcOq", "WRpcVSkEWOdcQG", "i8kzm8oCsG", "vJRdHN/cIa", "WQRdO3lcLmo6", "iSoFg8kpta", "W5BcGLjNW6u", "W67dMSk7y8kU", "z8oiaCo3W7S", "WOCRWR4LW7W", "W7RdPJXZyq", "W5tdPYOFcG", "o8k8WPBcLSkX", "WR/cG2WQbJ5PW6jEWP/cRhq", "W43cMgenW6G", "sCkHd2tdLW", "kCoUjmkcBG", "C8kvomoMWQS", "WR7cHmkoW73cTW", "W5ZdVMHwbW", "AZxdGutcJG", "WPribfNcJwhdOSkcpNJdHZO", "FSosWPJdJCk+", "W6/dR8kkr8kZ", "ibNcPCkOsG", "W5pcUCkkvSkM", "jKD2qSou", "W7jVemk3W6e", "jCoAW7dcTCko", "W6q2CZVdQq", "pSkeWO7cRCkN", "oxLdW4e0", "nbBcPxRcUW", "W67cQWmLW6C", "FSkgWQBdRmkz", "gvBdJvTg", "hmkYlhtcTa", "WQKCtahdGq", "ztRdH3JcOa", "xwXaW78G", "wSoJjSoGW4u", "DmovWRNdLq", "W6RdPSkrrCkc", "W5qoWPiqW6W", "W6pcL8kBouG", "aalcOr7dKq", "dxfntW", "WQpcJ8o6W5KK", "tSopWOhdGHK", "ChvjW4ZcGq", "ecSUtSk1", "W7eamthcNW", "dCkRWOfRWRa", "WPlcQSkKWR7dIq", "W6dcRNqHW48", "W7qqDt/cJG", "s8oSDZBdTrZdV1GnA8kvW4O", "W4G+kwBdQW"];
  return Qi = function() {
    return i;
  }, Qi();
}
function kx() {
  const i = r(1079, 1012, 1076, 1093, "l4sh") + r(981, 1005, 1017, 903, "wngv") + r(902, 961, 949, 873, "Vtkh") + n(270, 379, "!4B#") + A(1079, 1183, "pXTK") + s("91YD", -278, -311, -311, -288) + s("KxAV", -194, -245, -227, -196) + n(303, 404, "MR%B") + n(240, 180, "IdHA") + A(1086, 1144, "91YD") + A(1096, 1048, "rnpp") + n(183, 235, "Ac3V") + o(-332, -400, -347, "I!4t") + A(1359, 1243, "5QWc") + r(945, 983, 985, 989, "Fgez") + r(1188, 1017, 1085, 1031, "!4B#") + s("&vUZ", -212, -264, -80, -181) + n(168, 207, "I!4t") + s("Vtkh", -292, -223, -242, -336) + A(1271, 1226, "KxAV") + n(276, 326, "8uty") + n(235, 203, "8uty") + s("Z65R", -109, -74, -46, -161) + n(281, 281, "pAns") + s("91YD", -115, -232, -298, -228) + n(236, 202, "g6Q5") + A(1213, 1219, "Ac3V") + o(-404, -199, -291, "g6Q5") + A(1090, 1124, "l4sh") + o(-439, -364, -364, "YpZg") + o(-382, -433, -387, "l4sh") + s("lU1e", -331, -315, -318, -308) + o(-492, -314, -391, "ixzh") + o(-374, -420, -332, "4R$Q") + s("ixzh", -189, -310, -206, -205) + A(1144, 1122, "!4B#") + s("hQ]d", -230, -210, -299, -306) + s("9L55", -209, -353, -320, -243) + A(1074, 1022, "5QWc") + r(1001, 1096, 1003, 1085, "rnpp") + A(1156, 1063, "3LCj") + r(1013, 1042, 1074, 1157, "&vUZ") + A(1322, 1224, "SV0[") + o(-226, -194, -218, "Y9#0") + s("Fgez", -242, -376, -396, -309) + r(980, 990, 1043, 1105, "!4B#") + s("rnpp", -331, -222, -182, -233) + A(1244, 1235, "Y9#0") + A(1164, 1165, "9L55") + s("MR%B", -383, -287, -351, -367) + n(218, 199, "&3g6") + r(969, 1086, 1015, 1093, "Vtkh") + s("MRrj", -260, -335, -422, -374) + n(169, 67, "MRrj") + r(840, 917, 881, 958, "IdHA") + n(318, 306, "Z65R") + s("wngv", -157, -273, -251, -220) + s("YpZg", -139, -277, -209, -225) + n(161, 121, "%(N9") + A(1047, 1088, "pXTK") + A(1073, 1103, "!4B#") + o(-131, -146, -201, "IdHA") + s("ixzh", -263, -189, -273, -270) + A(1011, 1094, "sK))") + o(-372, -171, -280, "diqh") + A(1187, 1207, "$m[1") + A(1211, 1172, "rnpp") + o(-338, -284, -239, "Z65R") + o(-313, -344, -383, "hQ]d") + n(371, 315, "mVJl") + n(171, 267, "pXTK") + n(261, 209, "DS9M") + r(878, 911, 987, 911, "&vUZ") + A(1189, 1246, "Y9#0") + A(1190, 1095, "!4B#") + n(255, 274, "uvmE") + r(993, 1128, 1096, 1064, "pAns") + s("GX7u", -318, -168, -346, -280) + n(226, 261, "8uty") + o(-116, -164, -225, "5QWc") + s("!4B#", -138, -206, -273, -204) + s("lU1e", -102, -230, -181, -214) + A(1186, 1204, "wngv") + r(966, 1111, 1071, 1186, "mVJl") + A(1220, 1196, "4R$Q") + s("Ac3V", -456, -390, -357, -361) + n(325, 277, "ixzh") + s("I!4t", -275, -352, -477, -380) + r(923, 948, 939, 922, "NPiY") + o(-337, -494, -380, "Ac3V") + o(-115, -133, -223, "j^FC") + s("&vUZ", -200, -102, -179, -190) + s("V@p!", -370, -364, -378, -289) + o(-300, -183, -281, "9L55") + s("j^FC", -278, -274, -287, -212) + r(960, 837, 941, 1006, "KxAV") + n(348, 353, "bUpG") + n(207, 298, "pAns") + r(999, 957, 1002, 1011, "GX7u") + n(296, 406, "sK))") + o(-445, -452, -353, "jGDn") + s("GX7u", -474, -408, -345, -383) + o(-354, -370, -254, "pAns") + s("sK))", -69, -190, -272, -184) + n(365, 292, "91YD") + A(964, 1024, "jGDn") + s("DS9M", -331, -299, -352, -344) + A(1040, 1057, "3LCj") + s("Vtkh", -241, -296, -328, -334) + o(-220, -172, -228, "!4B#") + A(1197, 1150, "!4B#") + o(-410, -305, -298, "uvmE") + o(-275, -162, -238, "uvmE") + o(-221, -242, -303, "0EIR") + o(-279, -336, -234, "ixzh") + o(-159, -325, -241, "NPiY") + r(974, 1085, 995, 1041, "pAns") + o(-329, -277, -262, "bUpG") + s("20^l", -369, -298, -331, -274) + o(-472, -470, -378, "5QWc") + s("&3g6", -315, -259, -278, -332) + o(-124, -319, -215, "&vUZ") + r(1097, 1096, 1030, 1124, "rnpp") + n(204, 114, "YpZg") + s("rnpp", -346, -414, -289, -359) + o(-211, -209, -185, "IdHA") + s("MR%B", -272, -242, -318, -316) + r(992, 834, 908, 1020, "3LCj") + o(-305, -492, -388, "4R$Q") + n(182, 214, "91YD") + r(1075, 935, 1013, 1114, "wngv") + r(1048, 1140, 1079, 1150, "YpZg") + A(1163, 1087, "20^l") + r(1112, 978, 1069, 1109, "&3g6") + n(231, 118, "$m[1") + n(239, 169, "&vUZ") + s("5QWc", -337, -251, -237, -338) + s("ckXj", -136, -189, -53, -164) + A(1230, 1197, "Vtkh") + o(-288, -126, -181, "#7z@") + o(-333, -385, -322, "&vUZ") + r(1049, 922, 979, 916, "j^FC") + o(-366, -198, -302, "5QWc") + r(1031, 1092, 1062, 1e3, "V@p!") + A(1233, 1155, "DS9M") + A(1150, 1121, "DS9M") + o(-176, -257, -285, "YpZg") + A(1207, 1153, "SV0[") + r(1094, 1102, 997, 931, "au]G") + r(1156, 1103, 1087, 1139, "9L55") + s("uvmE", -64, -278, -216, -167) + o(-159, -200, -258, "8uty") + s("5QWc", -319, -276, -323, -240) + r(1086, 941, 1026, 1019, "diqh") + o(-492, -470, -375, "0EIR") + o(-284, -345, -359, "4R$Q") + o(-354, -368, -313, "&3g6") + n(142, 174, "$m[1") + o(-317, -296, -299, "V@p!") + r(1016, 1096, 1061, 1027, "MRrj") + n(177, 86, "diqh") + o(-303, -362, -337, "DS9M") + r(1044, 896, 1008, 1094, "91YD") + s("V@p!", -279, -420, -191, -305) + A(1073, 1013, "SV0[") + n(173, 232, "rnpp") + n(269, 207, "I!4t") + r(801, 782, 872, 905, "MRrj") + s("Vtkh", -502, -348, -418, -387) + o(-197, -137, -230, "Ac3V") + r(868, 1010, 923, 821, "UrnH") + A(976, 1033, "ckXj") + n(205, 177, "ixzh") + r(832, 905, 876, 945, "uvmE") + s("pXTK", -333, -338, -297, -388) + A(1113, 1175, "pXTK") + s("IdHA", -228, -372, -229, -337) + A(1225, 1140, "GX7u") + o(-241, -203, -186, "SV0[") + A(1159, 1107, "mVJl") + n(203, 159, "wngv") + s("KxAV", -384, -333, -245, -340) + r(1049, 1133, 1090, 990, "Y9#0") + n(275, 170, "uvmE") + o(-292, -309, -210, "j^FC") + r(1170, 1055, 1092, 1209, "Ac3V") + A(1068, 1106, "Fgez") + s("g6Q5", -270, -407, -309, -314) + o(-381, -347, -382, "YpZg") + s("DS9M", -123, -120, -210, -165) + o(-401, -252, -339, "4R$Q") + A(1042, 1158, "3LCj") + A(979, 1061, "j^FC") + s("$m[1", -316, -234, -405, -348) + r(903, 944, 970, 968, "&vUZ") + s("9L55", -410, -416, -325, -385) + r(1022, 966, 1083, 1047, "8(FA") + s("#7z@", -147, -198, -285, -239) + o(-240, -154, -247, "UrnH") + A(1150, 1185, "YpZg");
  function n(C, I, E, c, x) {
    return aA(C - -297, E);
  }
  const t = window[n(278, 380, "4R$Q")](i), e = window[r(1185, 1044, 1068, 1134, "pXTK")](t);
  function A(C, I, E, c, x) {
    return aA(I - 576, E);
  }
  function o(C, I, E, c, x) {
    return aA(E - -842, c);
  }
  function r(C, I, E, c, x) {
    return aA(E - 432, x);
  }
  const a = TC(e), g = {};
  g[r(971, 781, 893, 863, "bUpG")] = $0;
  function s(C, I, E, c, x) {
    return aA(x - -830, C);
  }
  return g[A(1241, 1162, "rnpp")] = NC, window[n(202, 171, "hQ]d") + "o"][o(-242, -384, -329, "pXTK") + "e"][A(1005, 1111, "j^FC") + n(257, 240, "#7z@")](A(1068, 1135, "0EIR"), a, g, !0, [r(852, 1009, 929, 862, "au]G") + "pt"]);
}
async function Sx(i) {
  const n = await kx();
  function t(o, r, a, g, s) {
    return aA(g - -921, o);
  }
  const e = {};
  function A(o, r, a, g, s) {
    return aA(o - 896, a);
  }
  return e[A(1334, 1249, "20^l")] = $0, window[t("uvmE", -332, -368, -433) + "o"][t("MRrj", -437, -506, -444) + "e"][t("pXTK", -404, -385, -372) + "pt"](e, n, i);
}
function Ei() {
  const i = ["CZJdHCkobaFcRJb/nvz5DSkR", "WPlcJZuVWPKjW4xcIWzGWROB", "WR9mav7dQ3T5gCk6WOhcU0G", "WRLlc17dO3OObCkIWP3cUNtdHq", "W6KUnSo9W75CWOr9khpdKCkcdG", "vCouWQhcRLJdKSk5oCk9fSoelq", "W4BdUsT/iSkJE8oKyaJdNMG", "W4ddVIf/kSkIkSo4EbtdN1r3", "v8o+WQxdMSoEBLi", "f27dU8ktWQZdUCkwDK7cOc16WPa", "W5RdI3aIhmoNxSo4", "W6vCW6O", "wCoLWQNcNZqLWQipq3NdIGG", "ewtdQCosd0jHoCk5W5JdIcO", "f2ddP8orc0qGbSkeW73dJbD7", "W5hcRwiUe8oNDW", "wCoJWQCOtw0PWQjLnCoeCrZdRa", "WPZdK8o1BgWOWOS", "WOJcOelcRSoyf1aMhNZdLcqQ", "hmkFWPNdOSkucSoQwq", "W4tdVv3cMCkr", "DwlcO8oiDwtdNq"];
  return Ei = function() {
    return i;
  }, Ei();
}
(function(i, n) {
  const t = i();
  function e(a, g, s, C, I) {
    return Ae(s - -327, I);
  }
  function A(a, g, s, C, I) {
    return Ae(s - 197, I);
  }
  function o(a, g, s, C, I) {
    return Ae(a - -312, I);
  }
  function r(a, g, s, C, I) {
    return Ae(C - -348, g);
  }
  for (; ; )
    try {
      if (-parseInt(e(127, 122, 127, 124, "ua72")) / 1 + parseInt(e(136, 139, 138, 140, "c*)0")) / 2 + parseInt(r(134, "Chb$", 119, 123, 130)) / 3 * (parseInt(A(662, 644, 654, 655, "VB)j")) / 4) + -parseInt(A(649, 643, 652, 659, "ua72")) / 5 + parseInt(e(131, 127, 134, 143, "(2as")) / 6 * (-parseInt(o(139, 129, 129, 129, "$HV$")) / 7) + parseInt(A(666, 664, 663, 664, "c*)0")) / 8 * (parseInt(A(661, 668, 666, 658, "VVLr")) / 9) + parseInt(r(127, "Tdg$", 110, 120, 124)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ei, -586133 * -1 + -641254 + 1 * 725403);
function Ae(i, n) {
  const t = Ei();
  return Ae = function(e, A) {
    e = e - (11 * 849 + 883 * -5 + 1 * -4474);
    let o = t[e];
    if (Ae.JpNAFh === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      Ae.PIYwso = C, i = arguments, Ae.JpNAFh = !0;
    }
    const a = t[-3 * 1627 + -1 * -2149 + 2732], g = e + a, s = i[g];
    return s ? o = s : (Ae.YdqSpb === void 0 && (Ae.YdqSpb = !0), o = Ae.PIYwso(o, A), i[g] = o), o;
  }, Ae(i, n);
}
async function Gx(i) {
  const { iv: n, key: t, message: e } = await _C(i), A = await Sx(t), o = {};
  o[r(801, 790, "Iu3D", 799, 801)] = A;
  function r(a, g, s, C, I) {
    return Ae(I - 338, s);
  }
  return o.iv = n, o[r(799, 780, "HJfd", 780, 788) + "ge"] = e, o;
}
function hA(i, n) {
  const t = xi();
  return hA = function(e, A) {
    e = e - (1 * 9334 + -2716 + -6297 * 1);
    let o = t[e];
    if (hA.qVbYzU === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      hA.WnkWHP = C, i = arguments, hA.qVbYzU = !0;
    }
    const a = t[-95 + 7529 * 1 + -7434], g = e + a, s = i[g];
    return s ? o = s : (hA.SdowuK === void 0 && (hA.SdowuK = !0), o = hA.WnkWHP(o, A), i[g] = o), o;
  }, hA(i, n);
}
function ne(i, n, t, e, A) {
  return hA(t - -168, A);
}
(function(i, n) {
  const t = i();
  function e(g, s, C, I, E) {
    return hA(s - -611, g);
  }
  function A(g, s, C, I, E) {
    return hA(C - -670, I);
  }
  function o(g, s, C, I, E) {
    return hA(E - 327, I);
  }
  function r(g, s, C, I, E) {
    return hA(s - 318, I);
  }
  function a(g, s, C, I, E) {
    return hA(E - -901, I);
  }
  for (; ; )
    try {
      if (parseInt(a(-423, -431, -429, "COOf", -481)) / 1 * (-parseInt(o(698, 706, 614, "hYq)", 662)) / 2) + -parseInt(a(-554, -572, -578, "dVJ^", -568)) / 3 * (parseInt(e("N29$", -223, -224, -275, -253)) / 4) + -parseInt(A(-195, -284, -227, "i$Od", -179)) / 5 + parseInt(o(812, 792, 778, "r*qO", 769)) / 6 + parseInt(e("oNho", -290, -322, -302, -278)) / 7 * (-parseInt(r(699, 669, 716, "hYq)", 652)) / 8) + -parseInt(a(-606, -588, -528, "[!5i", -564)) / 9 + -parseInt(e("rm6j", -190, -196, -147, -163)) / 10 * (-parseInt(r(575, 642, 698, "mdbt", 651)) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(xi, 220083 * 3 + 1 * -531348 + -81 * -5737);
function vA(i, n, t, e, A) {
  return hA(e - 491, t);
}
function xi() {
  const i = ["WQmRW5LbrW", "W5vZkIe", "xSkstZqr", "W7n8WPHRCCkJW6v/lSoY", "WPZdHmo6vSk8", "EmoRBZf1", "e8opdYGgWRuxWOmO", "tCk5W7NcRgK", "WRxdKSoM", "W7dcOJy", "W7XnbGLM", "vrOlW4fp", "WRmQwZ8", "W4RdT8ksWRa2tCkylZRcUmoIWQW", "WQ8QW5vuwG", "nW/dOG9L", "lZfCWQS9WRzTtq", "wxGUucG", "FNfvWQGp", "W7tcVSkVWPddUa", "W57cHCo3W7vl", "v8kIgG", "W6zNWQxcPa", "sYddSf5u", "WRi3W484DG", "W5mpWO/dRmoe", "W5zGWQZcSea", "WPtdTxOfEG", "BYxcNq", "WP7dPbqkWPa", "W7j8WQtcV1y", "WOmFW5r5W40", "WQuAW45pqW", "W7tcNmkUWPBdOW", "kaFdSqfM", "W5uTWPJdOSoe", "cmkgBa", "n1PNW70W", "yCoID1qC", "vCoeomo8W68AWOxdNSoXwq", "BCkqWR9sca", "FCkQW4SxWP4", "WQCQwYaa", "jg9NW7SI", "W5xdQ3xdUSkv", "BcFdP8o4W4RcUmonW43cTW", "b8oWsh0mW7ZcTfn6W6KPtNGo", "ACk2W40BWOS", "WRNcObjdW7K", "WQdcMYddTCk9", "W57cNSo7W6vp", "W63dGKK", "c1NcKSkzWOCZh8oI", "CCoWBa", "W7TgWR7cPea", "ECoBf3dcMW", "W7NdGCon", "E3fFWQq+", "ESo5cNlcQG", "W7ddHLZdHq", "WQiQusWX", "WOrWm1xdHSk3W6vKWRtcHsH2", "zcddOmkzWOZdKCkWWOtcHCkJm8ogWQ3cJG", "W6bZWQxcPeG", "W6hcQtiAFq", "yCk2W6lcUW", "WR/cOarlW6i", "WPy5DgmKW7LYWPdcJNuYW4SM", "CGKGWQXUWQlcPq9AkHPOW6m", "WPLtW4xdGSo6", "W7TCWQFcT0i", "w8kUW7lcIee", "WRJcPM3dJc8", "W7nZWPPRr8kzW7PSbCo/", "W5DFjrXs", "e8kvgZNdUG", "mvn0W6aW", "WQFdVSoSW47cPfqnz2hdGmoTWQNcGG", "eNDcW5SS", "sSk5W6tcOfu", "AComcNtcUa", "yCkHW53cPuS", "W7NcKgTGW6brhhZcUSo8hx/dJa", "av9qWPHED8ovWQ0Zdq", "W57cMSoZW7bj", "W5dcTmo7", "mmkIFLCUdxddIW", "W5pcRd9Xj3SrWR7cKbrVW7VdSW", "W4hcOmk9WO3dSq", "WP/dGs44WOq", "W5lcOCo7W7bA", "oMFcUG", "W7XngG", "sX7dOv5e", "W5K3WO3dGSov", "CLpdNtjrymk8ya", "BGayW5lcJG", "lmkYogXxW77dPXeFWOq", "WPtcG8okW7fh", "ghZcOWydvHpdK8k3W6aSomk7", "WQC2W4eYvG", "W5tdONK", "EmoWBJvd", "W7JcHSk7WRBdSG", "WO8dW45OW6G", "ESoKhw7cRq", "CCopzcT1", "WRLufwm", "p8o/W6yPDq", "fCkgBSk6", "W7ZdSSojwNy", "W5msWOFdVCoF", "WOxdL286Ba", "lmk6n2XKW4/dOqOGWRG", "W7DNWQ/cT1e", "Emo2qJD0", "WRy8W45jvq", "WP3cTConW65b", "u8oNCITN", "W7FdLmofqL4", "WRVdGCoZxCkE", "W4hcQtiAFq", "W7v4WOFcS1y", "WQq2vYiH", "WQRcTXndW7a", "ESoJDtLl", "W5DKwsJdIa", "sdZdVfX1", "W4jdktXY", "WQNcPMFdNW", "vGWTW4fR", "WOpdQgu5BW", "xJT2eNi", "jSkSmxy2", "sNGUqt0", "W5D5utNdKW", "DNunWPWi"];
  return xi = function() {
    return i;
  }, xi();
}
function ie(i, n, t, e, A) {
  return hA(e - -457, t);
}
function Le(i, n, t, e, A) {
  return hA(n - 401, A);
}
function MA(i, n, t, e, A) {
  return hA(t - 33, A);
}
class Nx {
  async [MA(395, 465, 408, 421, "KOy!") + MA(404, 519, 451, 499, "i$Od") + Le(900, 846, 892, 853, "(A37") + ie(-114, -181, "5OlF", -114) + ne(185, 214, 216, 154, "SOlO")](n) {
    function t(c, x, d, l, Q) {
      return MA(c - 286, x - 56, x - 135, l - 49, d);
    }
    const { Image: e } = FA;
    function A(c, x, d, l, Q) {
      return MA(c - 114, x - 366, d - 541, l - 321, c);
    }
    const o = await n[C("[wO&", -186, -230, -254) + g(349, "(A37", 384, 294) + "r"](), r = new Uint8Array(o), a = {};
    function g(c, x, d, l, Q) {
      return MA(c - 20, x - 414, c - -85, l - 161, x);
    }
    a[E(1401, 1448, 1403, 1422, "XH6j")] = r;
    const s = e[g(364, "XH6j", 425, 330) + "y"](a);
    function C(c, x, d, l, Q) {
      return vA(c - 27, x - 480, c, l - -1199);
    }
    if (s)
      throw t(514, 509, "xN$v", 571) !== A("FA2m", 900, 906, 913) ? _0x2612f0[A("WgYB", 1011, 1006, 1068) + A("qDbJ", 948, 941, 954)](_0x312dca) : D[A("9nbj", 926, 912, 980) + C("OxOc", -361, -427, -363)](s);
    const I = {};
    function E(c, x, d, l, Q) {
      return ie(c - 215, x - 65, Q, l - 1457);
    }
    return I[A("7(#x", 859, 916, 861)] = r, e[A("2oC^", 937, 932, 917) + "e"](I);
  }
  [Le(853, 842, 835, 902, "H8Q@") + vA(887, 842, "[!5i", 822) + ie(-78, -76, "Dc6x", -62) + MA(413, 394, 462, 400, "(A37") + MA(424, 441, 393, 371, "(A37") + vA(929, 925, "4Quz", 925)](n) {
    const { VideoStream: t } = FA, e = t[r("i$Od", 141) + "y"](n);
    function A(g, s, C, I, E) {
      return ne(g - 489, s - 423, C - -772, I - 38, s);
    }
    if (e)
      if (o(-387, -349, -420, "6[T6") !== o(-385, -435, -385, "(Kb3")) {
        const { VideoStream: g } = _0x24f866, s = g[a(-418, -433, -450, -395, "KOy!") + "y"](_0x384e22);
        if (s) throw _0x48a89a[A(-576, "[!5i", -575, -629) + r("x%V%", 76)](s);
        return g[r("LUa!", 164) + "e"](_0x23067f);
      } else throw D[o(-351, -370, -286, "[wO&") + A(-582, "(A37", -543, -548)](e);
    function o(g, s, C, I, E) {
      return MA(g - 247, s - 261, g - -766, I - 316, I);
    }
    function r(g, s, C, I, E) {
      return vA(g - 450, s - 157, g, s - -762);
    }
    function a(g, s, C, I, E) {
      return vA(g - 131, s - 167, E, g - -1263);
    }
    return t[A(-425, "[%0!", -490, -429) + "e"](n);
  }
  async [MA(402, 368, 433, 422, "FA2m") + ne(286, 196, 240, 215, "xN$v") + MA(426, 448, 458, 476, "Dc6x") + ie(-157, -100, "hYq)", -94) + Le(898, 845, 872, 816, "rw)6") + "e"](n) {
    const { v4: { Metadata: t } } = FA, e = { ...n };
    e[a(-463, -530, -473, -512, "SOlO") + s("COOf", -351, -273, -341, -328)] = FA[g(143, 120, "xN$v", 186, 157) + a(-564, -541, -567, -491, "hYq)")][C(1206, 1211, 1210, "Opww")], e[g(219, 227, "FA2m", 183, 180) + g(181, 169, "7(#x", 247, 237) + s("xN$v", -240, -292, -267, -263) + "n"] = C(1218, 1152, 1274, "6[T6");
    function A(I, E, c, x, d) {
      return Le(I - 327, c - 187, c - 483, x - 179, E);
    }
    const o = e, r = t[C(1193, 1213, 1176, "dVJ^") + "y"](o);
    function a(I, E, c, x, d) {
      return vA(I - 207, E - 418, d, E - -1460);
    }
    function g(I, E, c, x, d) {
      return ne(I - 234, E - 277, d - -1, x - 82, c);
    }
    if (r)
      if (C(1252, 1312, 1214, "L]@)") === a(-525, -590, -568, -541, "2oC^")) {
        const { v4: { Metadata: I } } = _0x1697bc, E = { ..._0x5bd624 };
        E[s("i$Od", -156, -152, -168, -206) + a(-526, -558, -494, -607, "x%V%")] = _0x56c6a4[A(893, "SOlO", 947, 933) + C(1234, 1173, 1176, "(Kb3")][C(1142, 1083, 1160, "4Quz")], E[s("Nk6g", -267, -342, -236, -293) + C(1188, 1223, 1184, "L]@)") + g(287, 306, "H8Q@", 195, 254) + "n"] = g(156, 242, "hYq)", 137, 202);
        const c = E, x = I[A(992, "5OlF", 1043, 1076) + "y"](c);
        if (x) throw _0x49bd7d[A(939, "N29$", 943, 1008) + s("LUa!", -301, -292, -296, -270)](x);
        return I[s("Nk6g", -231, -237, -351, -284) + "e"](c);
      } else throw D[s("hYq)", -372, -273, -291, -317) + s("qDbJ", -248, -325, -314, -290)](r);
    function s(I, E, c, x, d) {
      return MA(I - 29, E - 210, d - -690, x - 216, I);
    }
    function C(I, E, c, x, d) {
      return ne(I - 382, E - 139, I - 971, x - 417, x);
    }
    return t[g(194, 128, "(A37", 114, 183) + "e"](o);
  }
  async [vA(845, 922, "WgYB", 884) + ne(234, 267, 265, 327, "5OlF") + Le(754, 745, 775, 774, "hYq)") + ne(227, 243, 228, 253, "rm6j")](n) {
    const { Content: t } = FA, { iv: e, key: A, message: o } = await Gx(n), r = { token: new Uint8Array(A), iv: e, schemaVersion: GC, bytes: new Uint8Array(o) }, a = t[E(-543, -522, -566, "H8Q@") + "y"](r);
    function g(x, d, l, Q, h) {
      return ne(x - 222, d - 231, d - 478, Q - 268, h);
    }
    function s(x, d, l, Q, h) {
      return vA(x - 368, d - 94, Q, x - -1166);
    }
    if (a)
      throw I(17, 33, 109, "i$Od", 51) === s(-339, -394, -279, "N29$") ? _0x5f443b[I(67, 30, 11, "LUa!", 15) + I(6, -48, -67, "r*qO", -26)](_0x3ea532) : D[C(1279, 1232, "hYq)", 1296) + C(1224, 1259, "qDbJ", 1198)](a);
    function C(x, d, l, Q, h) {
      return ne(x - 11, d - 463, d - 1060, Q - 468, l);
    }
    function I(x, d, l, Q, h) {
      return vA(x - 142, d - 104, Q, h - -893);
    }
    function E(x, d, l, Q, h) {
      return ne(x - 255, d - 246, d - -716, Q - 374, Q);
    }
    const c = t[s(-341, -320, -356, "2Y(y") + "e"](r);
    return t[C(1271, 1290, "[!5i", 1353) + "e"](c)[g(670, 715, 656, 782, "(A37") + "h"]();
  }
  [ne(236, 164, 204, 142, "gDlZ") + MA(367, 439, 399, 426, "r*qO") + ie(-128, -84, "hYq)", -101) + "ge"](n) {
    function t(s, C, I, E, c) {
      return vA(s - 205, C - 23, c, s - -383);
    }
    const { Blob: e } = FA.v4, A = e[a("R0%A", 205, 268, 221) + "y"](n);
    function o(s, C, I, E, c) {
      return vA(s - 372, C - 10, c, E - -1072);
    }
    function r(s, C, I, E, c) {
      return vA(s - 271, C - 288, I, C - -977);
    }
    function a(s, C, I, E, c) {
      return ie(s - 204, C - 1, s, E - 304);
    }
    if (A)
      throw t(527, 536, 499, 465, "4Quz") === a("Q76L", 215, 193, 251) ? D[a("5OlF", 212, 210, 277) + r(-88, -46, "k)&^")](A) : _0x110b1f[r(-96, -100, "oNho") + o(-264, -266, -181, -214, "qDbJ")](_0x33ba82);
    const g = e[t(436, 466, 467, 460, "Dc6x") + "e"](n);
    return e[r(-106, -125, "LUa!") + "e"](g)[r(-96, -106, "hYq)") + "h"]();
  }
  async [Le(841, 793, 811, 776, "gDlZ") + vA(943, 951, "k)&^", 947) + Le(843, 839, 821, 902, "(A37") + vA(849, 930, "EPqR", 861) + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: a } = t ?? {};
    function g(s, C, I, E, c) {
      return ne(s - 352, C - 38, c - 781, E - 420, I);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: a, browserVersions: A == null ? void 0 : A[g(994, 990, "2oC^", 992, 996)](({ brand: s, version: C }) => ({ name: s, version: C })) };
  }
  async [vA(935, 943, "mdbt", 904) + ie(5, -14, "KOy!", -50) + ie(-8, 20, "[wO&", -11) + MA(382, 406, 390, 397, "(Kb3") + ie(-5, -1, "9nbj", -58) + Le(746, 728, 685, 792, "Q76L") + ie(-67, -1, "KOy!", -68) + "on"](n) {
    const t = await this[a(58, 96, 40, "qDbJ", 34) + a(57, -71, -27, "FA2m", -3) + e(-480, -547, -486, -521, "Dc6x") + r("njkk", 538, 561, 559) + o(141, "Dc6x", 78, 174)](n[o(187, "njkk", 223, 151) + a(-90, -19, -63, "oNho", -45) + "ge"]);
    function e(s, C, I, E, c) {
      return MA(s - 297, C - 444, I - -841, E - 247, c);
    }
    const A = {};
    A[g(100, 142, 43, 101, "dVJ^")] = t;
    function o(s, C, I, E, c) {
      return MA(s - 129, C - 322, s - -215, E - 69, C);
    }
    A[a(-37, -2, -80, "wEsx", -36) + e(-423, -393, -455, -447, "hYq)") + a(0, -8, 73, "4Quz", 13)] = n[a(-76, 27, -57, "njkk", -11) + e(-393, -338, -384, -409, "rEu6") + o(148, "L]@)", 145, 124)];
    function r(s, C, I, E, c) {
      return Le(s - 141, E - -192, I - 137, E - 483, s);
    }
    function a(s, C, I, E, c) {
      return ie(s - 131, C - 350, E, c - 44);
    }
    function g(s, C, I, E, c) {
      return ie(s - 396, C - 26, c, s - 148);
    }
    return A;
  }
}
function Cc(i) {
  const n = [], t = _.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const o = e.slice(t.length), r = parseInt(o, -1 * 3177 + 5743 + -12 * 213);
      if (!isNaN(r) && o === r.toString()) {
        const a = {};
        a.phase = e, a.data = A, a.index = r, n.push(a);
      }
    }
  return n.sort((e, A) => e.index - A.index);
}
(function(i, n) {
  function t(g, s, C, I, E) {
    return fA(g - -417, C);
  }
  function e(g, s, C, I, E) {
    return fA(I - 586, g);
  }
  function A(g, s, C, I, E) {
    return fA(g - 39, s);
  }
  function o(g, s, C, I, E) {
    return fA(I - 590, g);
  }
  const r = i();
  function a(g, s, C, I, E) {
    return fA(g - 747, E);
  }
  for (; ; )
    try {
      if (parseInt(a(1449, 1265, 1397, 1389, "cv2I")) / 1 + -parseInt(A(441, "9wMi", 415, 573, 382)) / 2 + -parseInt(t(105, 264, "$ANP", 142, 182)) / 3 * (-parseInt(t(215, 293, "9ZYa", 290, 428)) / 4) + parseInt(e("t]LI", 909, 1149, 1032, 962)) / 5 + parseInt(A(601, "r8!a", 479, 607, 384)) / 6 + -parseInt(e("d&sg", 909, 1241, 1033, 931)) / 7 + parseInt(o("V5Ax", 1110, 1135, 1252, 1269)) / 8 * (-parseInt(o("[IxD", 1114, 1342, 1255, 1445)) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(di, 644432);
function iA(i, n, t, e, A) {
  return fA(n - 214, i);
}
function fA(i, n) {
  const t = di();
  return fA = function(e, A) {
    e = e - (-59 * -17 + -7 * -617 + -19 * 266);
    let o = t[e];
    if (fA.hGxcus === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          x += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(I, E) {
        let c = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + c[Q] + E.charCodeAt(Q % E.length)) % 256, d = c[Q], c[Q] = c[x], c[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + c[Q]) % 256, d = c[Q], c[Q] = c[x], c[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[x]) % 256]);
        return l;
      };
      fA.dGOkuR = C, i = arguments, fA.hGxcus = !0;
    }
    const a = t[-169 * -31 + -886 * -2 + 41 * -171], g = e + a, s = i[g];
    return s ? o = s : (fA.TLnbKX === void 0 && (fA.TLnbKX = !0), o = fA.dGOkuR(o, A), i[g] = o), o;
  }, fA(i, n);
}
function Ce(i, n, t, e, A) {
  return fA(i - -966, n);
}
function di() {
  const i = ["W4FcMmoCCG", "W4aiW4VcN8oI", "bmkoWRpcTa8", "WRhcPLP7WOG", "ufJcMSkXna", "whJdKa", "WPHzWOdcHfy", "WPVcMxHqW6u", "W5rmj8kqAW", "W5FdQNGvW4u", "WQPCWPO/WQC", "W7FdOe1T", "WOSTms7cLa", "W6fLnmk3iq", "W4mnmmkqoW", "WRdcU1WpWQ8", "WQRdHSkdW4/dOG", "sZr8W6O3", "WQ9tWO0", "W5jwaSkfha", "WQ/dKSkiqSkt", "WRLpWOy8WR4", "WPddKSo/", "e2m2W4m2", "WPSfidJcHa", "W5PqWO8", "W5/cNmoFzui", "WOJcGv3dQmkg", "WORcTfXCW6m", "WOKfjJtcGq", "yrT7W6dcQW", "W5nznSkvaG", "F3NdUJpdNq", "W6DAnmkIna", "W5zHWPL7WQ0", "W57cMmob", "WOSjoZpcLa", "W6T4pW", "W53dUCkiWOVcMW", "WOVcSwfqW48", "AIBcMa", "yx/dGIym", "W4CaWQq", "rsGZWRqV", "F8ooWObLWPy", "WRBdTSoAE1i", "mNhdJbRcUCkAbY/cImkCFG", "W51EWO/dUh8", "B8kbpuzy", "W4n2rSkXW6y", "gCkYhCkisa", "hSosWOBcVwm", "FhNdNJ7dNW", "W5FcJeqbqq", "WQFcSJVcNCko", "WQVdLCkKW4FcPG", "nSoTW7pcSty", "bq4GW4CJ", "W4LrxxBdLG", "mmo+W7hcSW", "W4OiWROeW64", "WQVcHSkk", "W5byWO/dT38", "omoGcSk/W78", "W5BdGaqt", "t3xdNJpdRa", "W77dSCkjWQRcHq", "sc3cIG", "wxddMZep", "WR1yWRKKWQ8", "a8o0W6/dQu8", "W7bYiSkJoq", "b8kkWRa", "mmoPW63cTbC", "W7v2WRHIWQy", "n8oZWOeUW6O", "W4byimkz", "WPbfWPJcMfC", "W4rin8k+kq", "bxrSW6nKW77dKNrbn1LUzW", "W4FcJmodzXy", "BCoXW7y+ba", "WR/cSuT7WPG", "zCkbdfPa", "W5yFW5dcIa", "jeSWW5OU", "W6v2WQHiWQC", "WORcGgDEW7y", "W73dMCkcWR7cGG", "xCoAWRrWWRi", "Fmk6s8oKWRpcGmkugMNcQCo4oCkb", "WOiDW57cPJPHWP4SW57dImo0W7u", "WR7cM8ketCkq", "jSoiWP3dRNi", "DY3cLgxcRq", "W6tdPKm", "WR9TWPSJWRO", "WP7cS20aWQS", "WPbUWRzhWQS", "oSkZsqVdJG", "FvJdSrCo", "bfWSW50", "iCo+W7VcOa8", "qs3cJMpcHq", "WOxdM8o+", "Fh3dNJRdSq", "m8o+WOOIW6O", "Fw/dMrJdLa", "d8ojWPhcQ1q", "iCoIhmkLW78", "vCoTWQ7dMfhcKay", "W5/cLCouBfe", "WPXqWPJcJee", "lmoUdCk3WQS", "xSkhWRNcLW/dIxC", "WRNdKSkis8kc", "FbrSW5hcGa", "W5LxnSkLja", "rsq6WP4+", "W57dGwiFW4K", "WR3cPeS", "W4tdJwytW4e", "xCoyWPPIWP4", "BWxcMf/dPa", "WPNdRq4Oxq", "tCoLW70VhG", "WOJcTwe", "a8kldCkGFq", "W6jHWRLmWRa", "wSokWOb+WPi", "sxpdGcyb", "W4iiWQagW7K", "W5lcUfuavG", "WOyFW53cOdjMW4K1W4ldN8ovW7VdHG", "W7vEWRLEWRC", "W5FdI3SiW4m", "W4mzWRuhW7S", "nmoPW5lcQa0", "W6T6mmkXma", "ymkko0e", "WRtdQmotF0G", "W5BcPKqgvW", "BYtcIu7dOG", "W6rLpSk7ea", "W7rYCCk6pa", "rCokWOa2WPe", "s2tdMY4N", "lCoZWPvRW7C", "oCkYtWpdIG", "WO7cVwu", "WR3dRrm4qG", "W5jEWOS", "vedcL8kWoW", "WPdcIu/dRmkC", "WQFcJahcGSkp", "WQldPXm", "W4BdGxSu", "W7VdRSkc", "W7hdPSkcWQZcHq", "W74JW4ZcTmoj", "WQFcHaNcGmkl", "t8oWW50+cW", "uf/cImkyma", "W44iW5ZcJG", "W4hdKqqtWRW", "AmkKW5rYWQJcISoJW5jDFSkQW7FcUbu", "oLGMWOldTgCCkXqhC8oZta", "WQxdKCkZW5i", "vmokWPbZWRq", "rsaZWQer", "WRBcQqFcMSkz", "A8kBoq", "nSo5W6ZcPfS", "zYHZW5xcOW", "WPNcTwDyW6q", "iSkZBmkXwq", "aKCUW4OX", "WQRcPG52WOu", "W6JdT1z+ka", "W41ata", "vJb0W7WW", "rSooWPDzWPu", "WR9pWROLWQO", "BtpcKKBdHa", "W5tdMNSxW6i", "jmoTW73cPcG", "WR/dQraT", "Bdv+W70W", "W7xcQt7dJWJdK0xdTYVcSmolWRK", "WRBdVCot", "ESkok0zc", "rcdcLMFcPG", "u03cMmkWbG", "W45athFdVa", "W4WmW4ZcKSoK", "ucH/W6S", "W5aeW5dcLmoY", "WORdNmk+W7hdLa", "W5XejCkujq", "WPZdN8oJ", "W6WLWOycW4G", "W7f2nSkZ", "ruNcN8kCoa", "eCkXEG", "W4hdIxmF", "EuxcJCkWoW", "B8kNW5f9WQdcI8oLWP5AvmkWW6NcIG", "W5FdU2aFW5C", "vYa9WRqp", "vKNcLCkHma", "W4THzmkBW4a", "gmooWOBcR2q", "WQ3dQr44CG", "WPibja", "p8oXWOK5W70", "h0iVW4yX", "WPVcUxPFW7e", "W4v+tSkHW6W", "A8kipq", "hSoYWQddVq", "E2JdJZ/dTq", "W4zih8kypq", "FxldJYJdJW", "W6DfmmkIpa", "gCk6C8kTrG", "rc/cVKRdSq", "W4HHx8kqW6a", "WOfhWONcNuq", "WQldV2NcMMO", "W4v2tgddUG", "W5zeWP7dS3K", "WP9qWP/cNMG", "W7ZdSCkuWR7cVa", "W49gv2ddUW", "WPJdRmoYcdy", "eKS3W4OH", "WOhcM1JdJSkh", "AdrLW6Cq", "W7XGz17dLG", "WQ7cL8kFrSka", "WQNcL8kfv8kg", "rudcMSkHmW", "WRRdU8orE08", "W7/cQmocAKi", "WQ/dRqK4uG", "W4BdNwyFWOC", "WQRcLmkZW4FdTG", "W79dWPZdS2u", "vCooWRX4WRq", "c8kmWQu", "WO3cS1KNWQG", "uhZcICk6iq", "WOFcNe7dQCkH", "WP9oWRHeWOK", "WOvCWOpcG3C", "WRhcOKL/WP8", "WRJcUwfzW5y", "j8obW6VcRq8", "sZr+W6ew", "j8ozemkYW64", "W6rbWR1zWQ0", "WPj5WQ1pWO0", "thVdHa", "AhpdMtldIa", "WRbyWOO4", "cSo6WOC4W7W", "bK8WW5WR", "WPrgWP/cJei", "WQ/cPrZcLCko", "WPXqWP7cIKa", "WQddU37cMLO", "B8kbp1bI", "xu3cImk9ma", "jCoUcq", "sfVdKtCd", "WQJcOMn/WP8", "W4vzWPxcVwJdICk+", "lmo3WOGUW6O", "WQ/cNmkFrSkr", "e0aMW5WX", "WOvCWOhcIfy", "WRNdKCk+W4pdTq", "WPVdQq4Uwa", "k8oHW7VcSG8", "W5rVWQZdJgi", "W5FdM2C5W48", "d8kFWQhcOYm", "fCkLBmkLuG", "pSo3WPiUW7O", "W49ws1hdTW", "WQtcOqVcKCk5", "W4nmnmku", "W4DlWOpdUNG", "WRhcSWNcK8kp", "W4LxxxpdQW", "WOFcMK7dRmkC", "sIlcRM3cOW", "pmoZWOuUW4O", "WPVcSxHbW48", "W4mHWR0vW78", "jmoTW73cPdG", "W60aW57cNCoK", "WQRdVbW", "WRldU3JcLL8", "uc0YWRqY", "WPnYWQ1pWPW", "rbHXWPzZW7frW6ywW5VdHIPMWQy", "WOVcLhbfW6C", "W6nWnmkBma", "WRH+WR16WRuzxW", "p8koj8kU", "WRTqWQqPWR0", "kCoIcq", "oSkdWQhcTcC", "WQJcPKPvWO4", "WQBdM8k+", "WQZdHSk1W4FdSG", "bmk3uSkHrG", "W6OcWP/cLSoO", "vSooWODZWPq", "nSoLW7hcRWG", "zSoTdhFcK35LFCkiiXe", "WO1uWP0KWPO", "BGZcMfJdSG", "WQNdU37cNL0", "WR7cM8ketCkX", "tgldLq", "WQBdMCkXW4hdOW", "wMhcNSkHna", "W4tdJvGtW5e", "d8oYWQRdRLq", "W5ddMWqpWQS", "W4jFpmkd", "WRNcL8kyumkk", "WR3dRq80vW", "WQFcJr3cMmkE", "WRVdLCk9W5y", "Fw/dMrBdMq", "WPnqWOGRWQS", "qZ7cLw/cJq", "WPVcUxPFW5a", "W7pdT1b2kG", "WR/dM8kJW4/dSG", "WQfuWP/cNKW", "WQFcL8kFqSkh", "WORdSsRcK1a", "fh3dJtpdUZ7cJCk5W7eGWQZcSLW", "cCo6WOK5W60", "vmoLW7C6", "WOb1WR1pWOe", "rSoMWPzLWOq", "W5FcNmofz1u", "gKC1W4OS", "WQNdHSk/W4VdGW", "ySk/n0zc", "AZZdItRdJa", "W4pcQvigtq", "lCkVuJq", "FI8DWRaS", "F8oEWP9IWP4", "WPdcGuBdQmkB", "W7fYWQ9EWQ0", "W5RcSKq", "WO3cV1anWRK", "W6bNWR0", "WQ/dQqK8eq", "p8oHWPuiW7e", "WPNdQrm6va", "zIdcJq", "qSoEWOb+", "WRvjW4KQWQe", "su/dNHSv", "wudcNSk7mG", "p8oEWO89W7W", "WP49e8odWRpcMCkCW7b/emo5tCkr", "smoLW6KIca", "DSobW5qppG", "CSoLW7qTca", "WOj1WRzeWP0", "WOSbos3cQG", "W5umWRmg", "WRzuWP8PWQa", "FSkopfrF", "W5BdJwaFW4q", "cSoYWQddOMu", "WOzuWP/dJum", "qCoNkmo1bSkatZHBW5i2W41F", "d8ovWOZcOei", "W6ddOvf+kW", "j8opW7hcRW8", "uJm7WRaO", "WPv5WRDEWOS", "EfldMa0T", "WQxcPt/cNCkE", "WONcHh8CWPO", "hCkZBCkJua", "WOfaWP/cHq", "WQpdS8oBE08", "W5xdNgDlia", "WOv5WQPzWOC", "WOhcReRdUCkj", "WQf1WQ1cWRO", "EwJdIW", "WRtcPqBcKCkz", "W7JdSCkeWRK", "qCoyWPjXWPi", "WOlcHeRdUCkL", "W5aKW5lcM8oM", "AXn7W5xcSa", "W593sSksW6y", "WRNcK1X1WPG", "qmooWQn6WPy", "FCkkoG", "W4CbWRGgW7q", "e8k+FSkOwq", "W5FcRvuqrW", "AdpcMeRdTq", "W5/dNxGoW44", "fSozWPFcR3q", "W5BcI1mAva", "bCk/jCkeyG", "hSoXWOBcVwm", "W6BdOCkvWQJdKq", "ue/cLmkNmq", "W4eUW5dcLmo1", "ACkDpvrF", "WQpcN8koumkx", "WQXyWQuLWRG", "WOVcMwZdQ8kT", "W55evwi", "dmoQdCk3W6i", "tCoHW64Rcq", "dmoDWPddRN4", "W4pdLX8", "pmo+WOC/W5q", "WR9UWP0PWR4", "W4BdGxKFW5q", "WQ8ins7cGG", "WPbbWO0", "xh7cMSk7mG", "qd/cIuhcOa", "W7FdHSkgWRNcMa", "i8o4W78", "WPOZidJcLW", "WPOoibdcGG", "oCoGWOmQW60", "WQhcSG3cLCkE", "gmoHWOldQLm", "W7jfe8kIbq", "pSowWOm/W7W", "nCkyjSk4sq", "EbrTW5W"];
  return di = function() {
    return i;
  }, di();
}
function LA(i, n, t, e, A) {
  return fA(i - 881, A);
}
function QA(i, n, t, e, A) {
  return fA(e - 638, n);
}
function gt(i, n, t, e, A) {
  return fA(i - -920, A);
}
var x0, d0;
class Rx extends Nx {
  constructor(t) {
    function e(r, a, g, s, C) {
      return iA(g, r - 306);
    }
    super();
    p(this, d0);
    p(this, x0);
    function A(r, a, g, s, C) {
      return QA(r - 43, g, g - 177, a - -67);
    }
    function o(r, a, g, s, C) {
      return QA(r - 485, g, g - 356, a - -1366);
    }
    [this[e(886, 823, "Ywom") + e(1013, 1135, "FUFO") + o(-396, -321, "v)8K") + A(1240, 1192, "r8!a")], ...this[e(903, 844, "DT*^") + e(790, 981, "r8!a") + o(-88, -220, "P7V9") + e(973, 869, "ErQp") + "se"]] = t;
  }
  async [(d0 = LA(1593, 1722, 1748, 1410, "zFzx") + QA(1270, "iK^m", 1427, 1215) + LA(1285, 1285, 1321, 1139, "^cVx") + QA(1438, "iv@W", 1441, 1307), x0 = QA(1563, "V5Ax", 1223, 1346) + iA("s1]@", 855) + iA("Mp[z", 615) + QA(907, "aGKn", 976, 1026) + "se", iA("l&7E", 583) + QA(1462, "9wMi", 1239, 1317) + LA(1440, 1640, 1638, 1280, "Zn5x"))]({ onCaptureData: t, sessionToken: e, video: A }) {
    const o = t[a(790, 656, 836, "9#*l")](_[a(549, 549, 657, "l&7E") + a(857, 768, 781, "AI*S") + I("cRko", 854, 846, 818, 959) + "S"]);
    if (!o) {
      if (x(-155, -58, -81, 22, "d&sg") !== a(730, 657, 779, "4#*V")) throw new D(x(-96, 84, 56, -224, "9ZYa") + x(-262, -214, -143, -251, "TLh8") + I("ZnXp", 861, 766, 1113, 986) + a(1027, 885, 991, "aGKn") + c("h4w1", -505, -451, -248, -395) + a(796, 643, 588, "t]LI") + I("r8!a", 972, 1025, 1057, 1182) + E(136, 169, 28, 176, "Ywom") + I("Ywom", 879, 878, 1182, 1053));
      {
        const { MultiRangeLivenessMetadata: l } = _0x5f28f8.v4;
        if (!_0x15a5ac) return;
        const Q = _0x599575[c("2Ssb", -238, -220, -205, -276)]((G) => {
          function b(j, nA, AA, VA, Ge) {
            return a(j - 307, nA - -796, AA - 426, Ge);
          }
          const w = {};
          w[R(1290, "bAxp", 1108) + "r"] = G[z("r8!a", 284, 60, 97) + z("ErQp", 246, 51, 300) + Y("^cVx", 55, 363, 237, 227)][K(-243, -57, -322, -31, "qlf[") + K(-225, -441, -180, -197, "d&sg")];
          function R(j, nA, AA, VA, Ge) {
            return a(j - 38, AA - 639, AA - 156, nA);
          }
          w[z("r8!a", 293, 513, 481) + Y("iK^m", 262, 29, 27, 205) + z("Ywom", 334, 242, 425) + R(1522, "r8!a", 1516) + K(-273, -353, -282, -314, "Ywom") + b(-13, -43, -131, 131, "l&7E") + "o"] = G[K(-194, -366, -332, -269, "bAxp") + b(-99, -192, -53, -92, "[IxD") + b(-309, -314, -123, -182, "YAEB")][b(158, -38, -111, -18, "SDp6") + R(1128, "YAEB", 1326)];
          const v = {};
          function Y(j, nA, AA, VA, Ge) {
            return E(Ge - -130, nA - 296, AA - 483, VA - 410, j);
          }
          function K(j, nA, AA, VA, Ge) {
            return a(j - 455, j - -985, AA - 92, Ge);
          }
          v[b(-407, -203, -186, -371, "t]LI") + z("l&7E", 33, 192, -81)] = w;
          function z(j, nA, AA, VA, Ge) {
            return c(j, nA - 121, AA - 344, VA - 273, nA - 471);
          }
          return v[K(-92, -232, 103, -257, "ErQp") + z("Lm1[", -77, 8, -12) + z("V5Ax", 211, 376, 165)] = G[Y("s1]@", 73, 113, 139, 72) + Y("qlf[", 320, 92, 468, 274)], v;
        }), h = {};
        h[a(387, 531, 689, "Vtpe") + c("DOds", -135, -217, -212, -144)] = Q;
        const m = l[a(941, 833, 992, "SDp6") + "y"](h);
        if (m) throw _0x2dbb23[c("9wMi", -225, -339, -81, -292) + x(-338, -500, -527, -130, "V5Ax")](m);
        const y = {};
        return y[c("9wMi", -385, -349, -440, -333) + E(388, 194, 170, 212, "ZnXp")] = Q, l[I("AI*S", 1541, 1408, 1522, 1329) + "e"](y);
      }
    }
    const r = Cc(t);
    function a(l, Q, h, m, y) {
      return Ce(Q - 1140, m);
    }
    if (r[a(789, 590, 546, "ZU5L") + "h"] === -4517 * 2 + 5483 + -53 * -67)
      if (E(415, 391, 419, 198, "8Lld") === x(-280, -153, -387, -132, "Vtpe")) {
        const l = {};
        l[E(427, 293, 514, 433, "P7V9") + "r"] = _0x2d1207[x(-308, -407, -389, -157, "ZU5L") + I("TLh8", 1519, 1499, 1150, 1349) + x(-300, -437, -151, -364, "^cVx")][c("&ac(", -97, -486, -395, -307) + E(523, 662, 316, 430, "bAxp")], l[c("FUFO", -284, -219, -498, -290) + a(362, 560, 509, "$ANP") + a(602, 545, 648, "ErQp") + E(405, 470, 283, 462, "b%hP") + c("ZnXp", -645, -607, -462, -421) + c("[IxD", -135, 6, -133, -215) + "o"] = _0x365e19[I("WRrB", 1085, 1054, 1500, 1274) + I("iK^m", 1009, 1088, 1248, 1113) + a(727, 693, 470, "Vtpe")][c("P7V9", -148, -302, -478, -283) + E(243, 389, 469, 406, "d&sg")];
        const Q = {};
        return Q[E(560, 682, 521, 343, "8Lld") + I("qlf[", 1232, 1330, 1089, 1190)] = l, Q[c("V5Ax", -345, -269, -117, -299) + I("SrfU", 1049, 1037, 1137, 1204) + I("r8!a", 1037, 1079, 982, 1141)] = _0x2d4b03[E(261, 334, 277, 411, "SrfU") + x(-103, 27, -178, -303, "8Lld")], Q;
      } else throw new D(E(563, 587, 381, 758, "SDp6") + I("qlf[", 1218, 1014, 1361, 1185) + c("V5Ax", -291, -286, -401, -418) + E(329, 385, 252, 184, "h4w1") + c("WRrB", -476, -263, -265, -455) + I("YAEB", 1143, 913, 821, 1005) + I("8Lld", 916, 1e3, 870, 1090) + a(680, 463, 374, "9ZYa") + c("4#*V", -308, -106, -22, -165));
    const g = {};
    g[I("Ywom", 1122, 1154, 1123, 964) + c("AI*S", -222, -300, -287, -186) + E(409, 566, 476, 508, "cv2I") + a(570, 740, 923, "^dXI") + E(350, 196, 154, 397, "zFzx") + E(378, 580, 393, 529, "ZnXp")] = r, g[x(-173, -12, -9, -359, "V5Ax") + a(772, 859, 729, "s1]@") + E(497, 676, 345, 293, "V5Ax") + c("9wMi", -136, -420, -32, -250) + I("$ANP", 1088, 1303, 1072, 1151) + E(313, 456, 181, 339, "t87Z")] = o, g[x(-492, -418, -372, -583, "bAxp") + a(815, 826, 860, "cv2I") + "en"] = e;
    const s = await this[a(674, 486, 453, "$ANP") + a(933, 804, 971, "nAez") + E(257, 396, 347, 88, "9#*l") + a(779, 797, 900, "9ZYa") + "e"](g), C = {};
    function I(l, Q, h, m, y) {
      return QA(l - 77, l, h - 64, y - 41);
    }
    C[a(891, 891, 853, "[IxD") + I("Ywom", 1031, 1234, 909, 1010) + I("aGKn", 1346, 1236, 1444, 1257) + I("SrfU", 1293, 1531, 1559, 1393) + I("v)8K", 1272, 1090, 1075, 1143) + E(544, 415, 607, 349, "nAez")] = o;
    function E(l, Q, h, m, y) {
      return iA(y, l - -352);
    }
    function c(l, Q, h, m, y) {
      return iA(l, y - -1045);
    }
    C[x(-320, -462, -404, -334, "s1]@") + E(325, 219, 426, 462, "aGKn") + c("ZU5L", -567, -439, -700, -514) + x(-191, -62, -110, -101, "&ac(") + I("9ZYa", 925, 979, 1163, 1112) + x(-491, -453, -426, -668, "DT*^")] = r;
    function x(l, Q, h, m, y) {
      return iA(y, l - -1009);
    }
    C[E(221, 378, 325, 42, "TLh8") + x(-449, -416, -595, -478, "FUFO")] = s, C[c("bAxp", -303, -162, 17, -126)] = A;
    const d = await this[I("YAEB", 1087, 1063, 1208, 1193) + x(-467, -519, -308, -333, "Vtpe") + a(690, 629, 769, "34Lj") + c("ZnXp", -301, -81, -142, -182)](C);
    return this[a(797, 612, 494, "TLh8") + E(469, 647, 253, 394, "P7V9") + a(621, 618, 512, "YAEB") + E(467, 446, 654, 592, "iv@W")](d);
  }
  async [LA(1201, 1358, 1144, 1301, "9wMi") + LA(1270, 1229, 1483, 1353, "l&7E") + iA("cv2I", 673) + Ce(-674, "t87Z") + "e"]({ livenessChallengeOnCaptureData: t, passiveLivenessOnCaptureData: e, sessionToken: A }) {
    const o = [...e[d("WRrB", 542, 551) + d("^cVx", 347, 378)][m("cRko", 173, 65, 173) + m("9wMi", 69, 265, 44) + y(-258, -306, "AI*S", -294, -436) + l(601, 744, "Mp[z", 756) + x(-318, "bAxp", -499, -473) + l(592, 516, "WRrB", 488) + x(-118, "9#*l", -168, -78)]], r = e[d("TLh8", 118, 210) + d("qlf[", 517, 509)][l(684, 957, "V5Ax", 749) + y(-307, -131, "b%hP", -408, -236) + x(-103, "DOds", -145, -286)][l(509, 453, "9wMi", 430)](({ detectedObject: b }) => b);
    t[x(-119, "34Lj", -214, -12) + "ch"](({ data: b }) => {
      function w(z, j, nA, AA, VA) {
        return d(AA, j - 449, z - 413);
      }
      function R(z, j, nA, AA, VA) {
        return d(j, j - 90, z - 886);
      }
      function v(z, j, nA, AA, VA) {
        return x(nA - 924, AA, nA - 286, AA - 193);
      }
      function Y(z, j, nA, AA, VA) {
        return m(j, j - 139, AA - 1118, AA - 275);
      }
      function K(z, j, nA, AA, VA) {
        return d(nA, j - 56, j - -790);
      }
      if (w(781, 937, 948, "cRko") !== Y(1534, "4#*V", 1349, 1310)) {
        o[R(1092, "$ANP")](...b[Y(1357, "ZnXp", 1731, 1528) + K(-601, -432, "d&sg")][K(-373, -454, "&ac(") + K(-603, -530, "zFzx") + w(840, 995, 947, "aGKn") + R(1168, "r8!a") + R(1330, "b%hP") + R(1376, "FUFO") + w(932, 991, 1109, "t]LI")]);
        const z = b[v(707, 1005, 835, "t87Z") + w(681, 515, 466, "WRrB")][Y(1290, "zFzx", 1253, 1223) + v(1202, 1090, 997, "9#*l") + w(591, 781, 665, "P7V9")][w(687, 827, 462, "cv2I")](({ detectedObject: j }) => j);
        r[v(491, 797, 574, "&ac(")](...z);
      } else throw _0xc1316a[v(1201, 1127, 1010, "8Lld") + K(-501, -364, "4%qr")](_0x38d37a);
    });
    const a = $C(), g = await AB(), s = await this[x(-40, "9ZYa", -226, 100) + d("&ac(", 308, 166) + l(650, 792, "nAez", 582) + y(-675, -334, "t]LI", -572, -516) + "ls"](a, g), { cameraProperties: C, croppedImageWithPosition: I } = e[l(670, 528, "v)8K", 480) + d("aGKn", -30, 157)], E = await this[l(840, 682, "FUFO", 616) + m("zFzx", 268, 109, 192) + x(-65, "P7V9", -131, 75) + x(41, "l&7E", -39, 17) + m("^dXI", 3, 99, -33) + l(537, 644, "aGKn", 579) + x(-145, "&ac(", -38, -49) + "on"](I), c = { ...C };
    c[x(-246, "Ywom", -320, -261) + x(-239, "9#*l", -23, -27) + m("ZnXp", 62, 83, 179) + l(738, 947, "^cVx", 868) + x(-111, "s1]@", -54, -47)] = E;
    function x(b, w, R, v, Y) {
      return gt(b - 297, w - 374, R - 6, v - 152, w);
    }
    function d(b, w, R, v, Y) {
      return Ce(R - 817, b);
    }
    c[l(776, 869, "P7V9", 755) + x(-218, "^dXI", -104, -259) + l(915, 918, "d&sg", 806)] = s, c[l(580, 550, "Vtpe", 708) + m("r8!a", -79, 139, 297) + d("iK^m", 267, 238) + y(-237, -102, "TLh8", -219, -239) + x(-11, "9#*l", 22, 71) + y(-223, -398, "t]LI", -512, -385) + l(771, 623, "nAez", 776)] = o;
    function l(b, w, R, v, Y) {
      return QA(b - 367, R, R - 393, v - -480);
    }
    c[x(-125, "9wMi", 71, -277) + y(-310, 22, "9#*l", -93, -154) + l(728, 482, "s1]@", 649)] = r;
    const Q = c, h = {};
    h[m("WRrB", 278, 475, 383) + l(808, 575, "^cVx", 597) + "en"] = A, h[x(-307, "^cVx", -474, -516)] = Q;
    function m(b, w, R, v, Y) {
      return gt(R - 706, w - 436, R - 339, v - 366, b);
    }
    function y(b, w, R, v, Y) {
      return iA(R, Y - -1064);
    }
    const G = h;
    return this[y(-491, -676, "^cVx", -574, -521) + l(810, 822, "9#*l", 601) + d("P7V9", 562, 535) + d("aGKn", 458, 312) + d("Zn5x", 488, 494) + "e"](G);
  }
  async [LA(1299, 1144, 1387, 1157, "d&sg") + iA("FUFO", 507) + Ce(-618, "Lm1[") + Ce(-657, "&ac(")]({ livenessChallengeOnCaptureData: t, metadata: e, passiveLivenessOnCaptureData: A, video: o }) {
    const { MultiRangeLivenessContent: r } = FA.v4;
    function a(b, w, R, v, Y) {
      return LA(w - -1694, w - 332, R - 410, v - 242, v);
    }
    function g(b, w, R, v, Y) {
      return QA(b - 31, b, R - 181, w - -1348);
    }
    const s = this[E(1160, 1334, 1546, 1555, "FUFO") + a(-690, -466, -369, "Lm1[") + a(-437, -333, -409, "qlf[") + E(1021, 1244, 1028, 1354, "Lm1[") + E(1553, 1352, 1551, 1215, "TLh8")](A[C(-567, -686, "FUFO", -495, -489) + g("Vtpe", -399, -327) + "e"], A[m(1088, 1256, "DT*^", 1305) + C(-547, -601, "h4w1", -591, -562)], $g[a(-310, -278, -384, "AI*S")](this[m(1020, 1135, "^cVx", 1135) + g("s1]@", -25, -126) + a(-443, -316, -532, "zFzx") + E(1349, 1217, 1128, 1261, "Lm1[")]));
    function C(b, w, R, v, Y) {
      return gt(Y - 2, w - 435, R - 219, v - 448, R);
    }
    const I = t[g("t]LI", -81, -204)](({ data: b }, w) => this[C(-172, -248, "DT*^", -291, -267) + m(1287, 1083, "s1]@", 1152) + a(-447, -372, -455, "V5Ax") + m(1280, 1038, "[IxD", 1079) + g("9wMi", -314, -338)](b[C(-517, -309, "l&7E", -386, -491) + a(-501, -450, -478, "9#*l") + "e"], b[g("ErQp", 9, -23) + C(-393, -518, "AI*S", -601, -585)], $g[C(-475, -753, "DOds", -755, -581)](this[a(-168, -259, -335, "iK^m") + g("cv2I", -366, -440) + E(1667, 1536, 1680, 1649, "SrfU") + g("Ywom", -285, -144) + "se"][w])));
    function E(b, w, R, v, Y) {
      return iA(Y, w - 662);
    }
    const c = await Promise[C(-705, -700, "2Ssb", -456, -540)]([s, ...I]), x = this[g("Mp[z", -214, -327) + a(-647, -434, -586, "V5Ax") + m(1174, 1225, "2Ssb", 1179) + E(1478, 1386, 1467, 1412, "ZnXp") + E(1318, 1234, 1369, 1060, "iv@W") + C(-467, -236, "iv@W", -86, -276) + g("TLh8", -79, -127) + a(-46, -256, -338, "l&7E")](A[C(-234, -24, "SDp6", -171, -238) + m(763, 877, "9ZYa", 931)][a(-292, -106, -59, "h4w1") + E(1190, 1167, 984, 1024, "v)8K") + m(1038, 725, "4#*V", 943)]), d = t[m(1312, 1304, "Lm1[", 1158)](({ data: b }) => this[a(-176, -317, -189, "Mp[z") + C(-382, -346, "FUFO", -298, -305) + a(-494, -470, -456, "P7V9") + a(35, -158, -341, "ZU5L") + C(-485, -325, "9ZYa", -507, -331) + E(1085, 1236, 1155, 1307, "P7V9") + C(-385, -197, "Zn5x", -378, -245) + C(-76, -158, "iK^m", -220, -271)](b[E(1364, 1211, 1114, 1187, "cRko") + m(727, 881, "9ZYa", 931)][a(-84, -213, -330, "qlf[") + C(-285, -284, "9ZYa", -442, -308) + C(-284, -135, "AI*S", -190, -329)])), l = this[E(1599, 1501, 1314, 1465, "9ZYa") + C(-388, -176, "&ac(", -204, -203) + C(-757, -762, "qlf[", -610, -647) + m(1127, 1351, "d&sg", 1192) + g("aGKn", -17, 14) + E(1108, 1162, 1364, 936, "^cVx") + "a"]([x, ...d]), Q = { stepResults: c, metadata: e, multiRangeLivenessMetadata: l, video: { streamH264: o ? this[g("YAEB", -196, -139) + C(-270, -633, "Ywom", -626, -466) + C(-82, -461, "t]LI", -375, -303) + C(-209, -319, "AI*S", -317, -333) + E(1665, 1543, 1405, 1576, "Ywom") + m(1068, 793, "ZU5L", 873)](o) : void 0 } }, h = r[a(-256, -283, -486, "9#*l") + "y"](Q);
    function m(b, w, R, v, Y) {
      return iA(R, v - 375);
    }
    if (h)
      if (a(-180, -214, -188, "h4w1") === E(1356, 1270, 1433, 1476, "YAEB")) {
        const { MultiRangeLivenessMetadata: b } = _0x1669f4.v4;
        if (!_0x32207f || _0xee8546[C(-389, -351, "YAEB", -663, -496) + "h"] === 846 * -6 + -60 * 148 + 1 * 13956) return;
        const w = _0x1c7a1a[m(728, 962, "r8!a", 927) + "ap"]((K) => (K == null ? void 0 : K[g("9wMi", -212, -24) + E(1452, 1552, 1661, 1667, "FUFO")]) ?? []), R = {};
        R[m(1099, 960, "AI*S", 1138) + m(966, 998, "WRrB", 1037)] = w;
        const v = b[E(1409, 1261, 1114, 1377, "Lm1[") + "y"](R);
        if (v) throw _0x1c29d7[g("4%qr", -422, -618) + a(-216, -100, -69, "34Lj")](v);
        const Y = {};
        return Y[C(-213, -189, "h4w1", -33, -211) + a(-417, -241, -438, "9#*l")] = w, b[m(1070, 1347, "4%qr", 1275) + "e"](Y);
      } else throw D[a(-122, -314, -344, "l&7E") + C(-435, -566, "FUFO", -568, -503)](h);
    const y = r[a(-523, -464, -532, "r8!a") + "e"](Q), G = {};
    return G[a(-592, -492, -696, "s1]@") + g("cv2I", -260, -313) + a(-268, -252, -231, "P7V9") + E(1277, 1468, 1480, 1686, "DT*^") + a(-424, -410, -571, "d&sg")] = y, this[a(26, -141, -15, "8Lld") + E(1384, 1241, 1069, 1404, "s1]@") + a(-402, -413, -442, "&ac(") + "ge"](G);
  }
  async [QA(1177, "ZnXp", 908, 988) + Ce(-627, "Ywom") + iA("Zn5x", 745) + LA(1587, 1422, 1692, 1459, "&ac(") + iA("Mp[z", 759)](t, e, A) {
    function o(Q, h, m, y, G) {
      return gt(m - 973, h - 27, m - 149, y - 138, h);
    }
    const { MultiRangeLivenessStepResult: r } = FA.v4, a = await zI(t), g = await this[o(823, "v)8K", 620, 754) + o(368, "TLh8", 367, 186) + C(836, 1215, "$ANP", 954, 1034) + I("v)8K", -612, -324, -563, -530) + C(859, 960, "^cVx", 913, 1079)](a), s = {};
    function C(Q, h, m, y, G) {
      return Ce(G - 1471, m);
    }
    s[x(-143, 26, -56, "l&7E")] = g;
    function I(Q, h, m, y, G) {
      return iA(Q, G - -1069);
    }
    s[I("Mp[z", -552, -404, -461, -554) + o(451, "FUFO", 465, 463) + o(745, "Zn5x", 633, 708)] = e;
    function E(Q, h, m, y, G) {
      return LA(y - -526, h - 436, m - 190, y - 394, m);
    }
    const c = {};
    function x(Q, h, m, y, G) {
      return Ce(Q - 329, y);
    }
    c[E(1221, 866, "8Lld", 1038)] = s, c[x(-319, -126, -505, "Zn5x") + I("^cVx", -108, -321, -300, -228) + o(310, "2Ssb", 513, 600)] = A;
    const d = c, l = r[I("t87Z", -32, 6, -320, -158) + "y"](d);
    if (l) {
      if (o(494, "l&7E", 405, 507) === o(506, "ErQp", 351, 558)) throw D[C(1092, 1087, "bAxp", 791, 959) + I("t87Z", -438, -560, -373, -488)](l);
      return;
    }
    return r[E(911, 942, "[IxD", 839) + "e"](d);
  }
  [gt(-353, -268, -314, -293, "v)8K") + QA(1325, "ZnXp", 1408, 1329) + LA(1490, 1575, 1444, 1653, "bAxp") + QA(995, "r8!a", 1116, 915) + iA("YAEB", 802) + LA(1373, 1478, 1189, 1376, "ZU5L") + iA("4%qr", 565) + QA(1343, "s1]@", 1127, 1198)](t) {
    function e(c, x, d, l, Q) {
      return iA(x, l - -684);
    }
    function A(c, x, d, l, Q) {
      return gt(d - 479, x - 64, d - 70, l - 301, l);
    }
    const { MultiRangeLivenessMetadata: o } = FA.v4;
    function r(c, x, d, l, Q) {
      return Ce(l - 1464, c);
    }
    if (!t) {
      if (r("[IxD", 858, 1093, 888) === r("nAez", 550, 730, 773)) throw new _0x52e815(r("Vtpe", 1122, 1208, 1172) + r("r8!a", 1159, 1241, 1131) + A(52, 29, 30, "WRrB") + a(-519, -710, "P7V9", -631, -489) + r("8Lld", 1065, 1117, 1100) + r("FUFO", 1217, 857, 1026) + e(-60, "iK^m", -225, -106) + A(-9, -80, 60, "&ac(") + e(47, "b%hP", -106, 81));
      return;
    }
    function a(c, x, d, l, Q) {
      return Ce(Q - 201, d);
    }
    const g = t[a(-371, -385, "h4w1", -574, -374)]((c) => {
      function x(m, y, G, b, w) {
        return r(y, y - 285, G - 56, w - -386);
      }
      function d(m, y, G, b, w) {
        return e(m - 478, w, G - 391, y - -417);
      }
      function l(m, y, G, b, w) {
        return a(m - 159, y - 430, y, b - 61, m - -163);
      }
      function Q(m, y, G, b, w) {
        return a(m - 65, y - 328, w, b - 392, G - 1597);
      }
      function h(m, y, G, b, w) {
        return C(m - 311, y - 353, m - -1386, b);
      }
      if (d(-589, -555, -399, -456, "DT*^") === d(-420, -442, -325, -289, "&ac(")) {
        const m = {};
        m[l(-332, "WRrB", -426, -180) + "r"] = c[l(-486, "[IxD", -490, -335) + Q(1218, 1490, 1369, 1396, "&ac(") + x(922, "Ywom", 650, 635, 732)][h(148, -65, 341, "FUFO") + h(126, -87, 156, "WRrB")], m[d(-279, -323, -425, -407, "SrfU") + d(-378, -314, -353, -471, "^dXI") + l(-271, "Vtpe", -49, -441) + x(979, "r8!a", 830, 1009, 815) + d(-460, -515, -398, -726, "8Lld") + l(-583, "YAEB", -806, -428) + "o"] = c[Q(1024, 1350, 1212, 1146, "Lm1[") + l(-454, "SrfU", -662, -257) + Q(1134, 1404, 1355, 1393, "8Lld")][d(-414, -241, -164, -61, "ZnXp") + h(210, 165, 168, "zFzx")];
        const y = {};
        return y[x(649, "aGKn", 524, 766, 731) + Q(1637, 1338, 1503, 1295, "8Lld")] = m, y[Q(1136, 1256, 1205, 1392, "b%hP") + d(-228, -233, -196, -115, "9#*l") + h(-146, 12, -179, "9ZYa")] = c[l(-292, "9ZYa", -500, -375) + Q(1554, 1674, 1536, 1543, "cRko")], y;
      } else throw _0x4ef2ac[x(765, "s1]@", 560, 657, 652) + l(-488, "Vtpe", -516, -520)](_0x21c105);
    }), s = {};
    s[A(42, 178, 141, "^dXI") + r("bAxp", 840, 697, 780)] = g;
    function C(c, x, d, l, Q) {
      return Ce(d - 1844, l);
    }
    const I = o[A(176, 112, 249, "qlf[") + "y"](s);
    if (I)
      throw e(-58, "ZU5L", 158, 86) !== r("4%qr", 959, 1134, 947) ? new _0x26391d(A(56, 248, 197, "qlf[") + r("l&7E", 872, 1072, 998) + r("8Lld", 1029, 931, 1135) + a(-594, -170, "iK^m", -454, -395) + C(1669, 1411, 1479, "s1]@") + r("qlf[", 578, 676, 767) + C(1111, 1084, 1214, "v)8K") + r("4%qr", 1035, 891, 924) + r("nAez", 910, 1009, 859)) : D[a(-298, -346, "nAez", -327, -263) + e(399, "iK^m", 301, 218)](I);
    const E = {};
    return E[r("SDp6", 1145, 960, 1124) + r("Vtpe", 875, 971, 1050)] = g, o[a(-514, -669, "SrfU", -349, -471) + "e"](E);
  }
  [gt(-621, -412, -665, -595, "Zn5x") + iA("cRko", 651) + QA(748, "cRko", 789, 919) + LA(1278, 1083, 1290, 1496, "nAez") + QA(959, "P7V9", 1019, 1156) + LA(1390, 1271, 1533, 1205, "DT*^") + "a"](t) {
    const { MultiRangeLivenessMetadata: e } = FA.v4;
    function A(c, x, d, l, Q) {
      return QA(c - 108, Q, d - 20, c - -480);
    }
    if (!t || t[o("h4w1", -267, -70, -67) + "h"] === 13429 + -1033 * 13)
      return s(775, 805, 673, 997, "t87Z") === o("nAez", -129, 221, 7), void 0;
    function o(c, x, d, l, Q) {
      return LA(l - -1330, x - 117, d - 102, l - 63, c);
    }
    function r(c, x, d, l, Q) {
      return iA(c, x - 171);
    }
    const a = t[A(468, 679, 677, 526, "DT*^") + "ap"]((c) => (c == null ? void 0 : c[o("aGKn", 166, 15, -41) + s(1116, 895, 867, 793, "Lm1[")]) ?? []), g = {};
    function s(c, x, d, l, Q) {
      return LA(x - -378, x - 102, d - 160, l - 236, Q);
    }
    g[s(1095, 1178, 1013, 1399, "&ac(") + s(994, 1179, 1345, 1133, "FUFO")] = a;
    const C = e[I(580, 587, 522, 601, "s1]@") + "y"](g);
    if (C) {
      if (I(302, 510, 369, 566, "4#*V") === I(310, 433, 341, 280, "nAez")) throw D[A(853, 846, 759, 720, "cv2I") + o("DOds", 41, 183, -29)](C);
      {
        _0x4a916a[I(199, 477, 345, 170, "9ZYa")](..._0x1c5fe2[o("9ZYa", 125, 139, 19) + o("[IxD", -143, 2, -181)][r("P7V9", 1013) + I(858, 885, 708, 487, "9#*l") + r("DT*^", 993) + o("cRko", 65, -81, 32) + o("Ywom", 392, 445, 229) + r("b%hP", 921) + A(556, 447, 586, 414, "ZU5L")]);
        const c = _0xa6b0[r("TLh8", 744) + A(500, 408, 651, 389, "9ZYa")][r("s1]@", 672) + I(792, 896, 726, 529, "WRrB") + s(1290, 1073, 1006, 869, "r8!a")][r("iv@W", 813)](({ detectedObject: x }) => x);
        _0x2e1350[I(332, 489, 477, 258, "iK^m")](...c);
      }
    }
    function I(c, x, d, l, Q) {
      return QA(c - 447, Q, d - 251, d - -593);
    }
    const E = {};
    return E[A(644, 670, 759, 547, "nAez") + I(475, 343, 437, 592, "Lm1[")] = a, e[r("FUFO", 843) + "e"](E);
  }
}
function Bc(i, n) {
  const t = qA(n);
  oA(() => {
    t.current = n;
  }, [n]), oA(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function Fx(i, n) {
  const { handleAppStateChange: t } = TA(), e = be((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(H.COMPLETE), n(r, o);
  }, [n, t]);
  Bc(i, e);
}
function Wx(i) {
  return i !== null && typeof i == "object" && "imageWithMetadata" in i;
}
function vx() {
  const { onComplete: i } = xI(), { handleError: n } = TA();
  function t(e, A) {
    try {
      if (!Wx(e)) throw new D("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof D && n(o);
    }
  }
  Fx(rI.ON_COMPLETE, t);
}
function Mx() {
  const { cameraService: i } = wt(), { assetsDirectoryPath: n, challengeSequence: t, sessionToken: e } = xI(), { transactionCounting: A } = ns(), { analytics: o } = QC(), { phaseThresholds: r } = dI(), { handleAppStateChangeWithTransitionCheck: a, handleError: g } = TA(), [s, C] = pA();
  vx(), oA(() => {
    let E;
    async function c() {
      if (!i) return;
      const x = jI.getWorkerPath(TE, n), d = {};
      d.type = "module";
      const l = new Worker(new URL(x, import.meta.url), d), Q = BI(l);
      E = await new Q();
      const h = new bx(), m = new KE(IE), y = new Rx(t), G = new PE().setAssetsDirectoryPath(n).setCameraService(i).setDetector(E).setDetectionFactory(h).setPhaseThresholds(r).setDispatcher(m).setProtobuf(y).setChallengeSequence(t).setAnalytics(o).setSessionToken(e).setTransactionCounting(A).build();
      try {
        C(G), a(H.RUNNING);
      } catch (b) {
        if (b instanceof Error) {
          g(D.fromError(b));
          return;
        }
      }
    }
    return c(), () => {
      a(H.WAITING), E && E[gI]();
    };
  }, [g, i, t, n, o, e, a, r, A]);
  const I = {};
  return I.controller = s, I;
}
function Lx({ children: i }) {
  const { controller: n } = Mx();
  return /* @__PURE__ */ k(gE, { controller: n, children: i });
}
function Ox({ initAppState: i, onError: n }) {
  const [t, e] = pA(i), [A, o] = pA(), [r, a] = pA(!1), g = Kt.Lower, s = qA(n);
  oA(() => {
    s.current = n;
  }, [n]);
  const C = {};
  return C.redfin = g, C.appState = t, C.setAppState = e, C.error = A, C.setError = o, C.isCameraReady = r, C.setIsCameraReady = a, C.onErrorRef = s, C;
}
function i0(i, n) {
  Ao.getInstance().dispatchCustomEventOnChange(i, n);
}
function Jx(i, n) {
  Ao.getInstance().dispatchCustomEventOnChange(i, n);
}
function Ux(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  Ao.getInstance().dispatchCustomEventOnChange(i, e);
}
function Yx({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: a, setIsCameraReady: g } = Ox({
    initAppState: H.LOADING,
    onError: i
  }), s = be(
    (E) => {
      i0(ke.STATE_CHANGED, { appState: H.ERROR, error: E }), g(!1), o.current(E), a(E), r(H.ERROR);
    },
    [g, o, a, r]
  ), C = be(
    (E) => {
      r((c) => {
        const x = typeof E == "function" ? E(c) : E;
        return i0(ke.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), I = be(
    (E) => {
      C((c) => c === H.COMPLETE || c === H.LOADING && E !== H.RUNNING ? c : E);
    },
    [C]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: g,
    handleAppStateChange: C,
    handleAppStateChangeWithTransitionCheck: I,
    handleError: s,
    error: e
  };
}
function Px() {
  return Ba() ? eg.MOBILE : eg.DESKTOP;
}
function Tx({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = pA(Px()), A = bA(() => {
    const o = {};
    for (const a of Object.keys(n)) {
      const g = n[a];
      if (g) {
        const { mapper: s, presets: C, userThresholds: I } = g;
        o[a] = s(C[t], I);
      }
    }
    return {
      getPhaseThresholds: (a) => o[a],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ k(ma.Provider, { value: A, children: i });
}
function r0(i) {
  const n = qA(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function Hx(i, n) {
  var t, e, A, o, r, a, g, s, C, I;
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
    devicePitchAngle: { max: ((a = n == null ? void 0 : n.devicePitchAngle) == null ? void 0 : a.max) ?? i.devicePitchAngle.max },
    leftEye: {
      confidence: { min: ((s = (g = n == null ? void 0 : n.leftEye) == null ? void 0 : g.confidence) == null ? void 0 : s.min) ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: ((I = (C = n == null ? void 0 : n.rightEye) == null ? void 0 : C.confidence) == null ? void 0 : I.min) ?? i.rightEye.confidence.min }
    }
  };
}
function _x(i, n) {
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
function Kx({
  children: i,
  livenessChallengeUserThresholds: n,
  passiveLivenessUserThresholds: t
}) {
  const e = r0(n), A = r0(t), o = bA(() => ({
    [_.PASSIVE_LIVENESS]: {
      mapper: Hx,
      presets: JE,
      userThresholds: A
    },
    [_.LIVENESS_CHALLENGE]: {
      mapper: _x,
      presets: UE,
      userThresholds: e
    }
  }), [e, A]);
  return /* @__PURE__ */ k(Tx, { thresholdConfigs: o, children: i });
}
const vt = {};
vt.AUTO_CAPTURE = "auto_capture", vt.CAPTURE_FINISHED = "capture_finished", vt.CAPTURE_STARTED = "capture_started", vt.ESCALATION_TRIGGER = "escalation_trigger", vt.LONG_CAPTURE_SMILE = "long_capture_smile";
const li = vt, $e = {};
$e.PALM = "palm_auto_capture", $e.SMILE = "smile_liveness", $e.DOCUMENT = "document_auto_capture", $e.MAGNIFEYE = "magnifeye_liveness", $e.EYE_GAZE = "eye_gaze_liveness", $e.FACE = "face_auto_capture", $e.MULTI_RANGE = "multi_range_liveness";
const jx = $e, qx = async () => WebAssembly.validate(new Uint8Array([-51 * -35 + 1 * 7487 + -9272, -1 * 8971 + -1151 * 5 + -14823 * -1, -2078 + -129 * -17, 7006 + -1 * 3460 + -3437, 213 * 5 + 2233 + 21 * -157, 7672 + -57 * -148 + -16108, 0, 0, -3037 + -1 * -3038, 5, -1 * 2129 + 6061 + -3931 * 1, -16 * 87 + 15 * 493 + -5907, -12450 + -6 * -2075, -34 * 283 + -8879 + 1682 * 11, 123, 1 * -6113 + 353 * 25 + -2709, 2, 13942 + -3 * 4647, 0, -49 * -191 + -985 * -1 + -10334, 2565 + 5 * -511, 1 * -6241 + -2599 * -2 + 29 * 36, -8672 + 6833 * -1 + 15513, 53 * -26 + 2581 + 401 * -3, -8230 + -81 * -102 + 33, 831 * 2 + -8367 + 447 * 15, 1 * 6558 + -4463 * 1 + -1842, 6245 + -2309 * 3 + 697 * 1, -6374 * -1 + 3646 + -9767, -5646 + 16 * 359, 5552 + 467 * -15 + 1464]));
function Vx() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(9360 + -2 * 4672);
}
function Zx() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = Vx();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function zx(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function Xx(i) {
  return i > 99139 + -39139 * 1 ? ">1m" : "" + i;
}
function $x(i) {
  return i > 9204 + -9399 * 1 + 205 ? ">10" : "" + i;
}
const Ad = (i) => i ? i <= 622 * -1 + -2 * -617 + -611 ? Math.round(i * (1 * 7879 + -242 * 7 + -15 * 411)) / (-1136 * -2 + -1 * -1094 + -14 * 239) : Math.round(i / (2 * 2487 + -61 * 67 + -3 * 279)) * (408 + -1 * 358) : -1 * -4886 + 4309 + -3 * 3065;
function ed(i) {
  return i ? Math.round(i / (-12 * 27 + 19 * 374 + -4282)) * (5398 + -2 * -2974 + -8846) : 5397 + 4 * -1401 + 207;
}
const td = (i) => i ? Math.round(i / (-9191 + 1051 * 1 + 8150)) * (-74 + -814 * 5 + -1 * -4154) : -2159 * 3 + 581 * -9 + 11706, od = (i) => Math.round(i * (40 + -19 * 2)) / (-3524 + -6 * -1163 + 1726 * -2);
async function nd() {
  return await qx() ? Ag.SIMD : Ag.NO_SIMD;
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
    this.platform = "web", this.versionName = ts(), this.applicationId = os(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(li.CAPTURE_STARTED));
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
const gn = new id();
class rd {
  constructor(n) {
    p(this, "posthog", gn);
    p(this, "component");
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: ts(), ...n };
  }
  init(n, t) {
    const e = Zx(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, gn.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    gn.sendEvent(li.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    gn.sendEvent(li.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -9 * 566 + -9200 + 14544 ? td(n) : Ad(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: $x(o || 1500 + 4947 * 1 + -6447), firstHiccup: Xx(ed(r)), optCheckDetails: e == null ? void 0 : e.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class ad extends rd {
  constructor() {
    super(jx.MULTI_RANGE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(_.PASSIVE_LIVENESS), e = Cc(n);
    if (!t || !e) throw new D("On capture data was not found");
    const A = zx(t.metadata.deviceName, t.metadata.facingMode), o = this.extractChallengeMetrics(e), r = t.metadata.captureProcessTime, a = r + "," + o.captureTime, g = r + o.totalCaptureTime, s = [t.metadata.averageFps, ...o.averageFps], C = od(s.reduce((Q, h) => Q + h, 11 * -452 + -131 * -3 + 4579) / s.length), I = t.detectedObject.confidence + "," + o.confidence, E = t.detectedObject.faceSize + "," + o.faceSize, c = t.resultImage.width + "x" + t.resultImage.height, x = await nd(), d = {};
    d.averageFps = C, d.camera = A, d.instructionSet = x, d.captureTime = a, d.imageResolution = c, d.confidence = I, d.faceSize = E, d.durationMs = g;
    const l = this.createSegmentation(d);
    if (uo()) {
      const Q = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(l, Q);
    }
    this.posthog.sendEvent(li.CAPTURE_FINISHED, l);
  }
  extractChallengeMetrics(n) {
    return { captureTime: n.map((t) => t.data.metadata.captureProcessTime).join(","), confidence: n.map((t) => t.data.detectedObject.confidence).join(","), faceSize: n.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: n.map((t) => t.data.metadata.averageFps), totalCaptureTime: n.reduce((t, e) => t + e.data.metadata.captureProcessTime, 8595 + 1 * -1353 + 6 * -1207) };
  }
  joinKeypressDetections(n, t) {
    const e = n.metadata.performanceCheckup, A = t.map((E) => E.data.metadata.performanceCheckup), o = [e, ...A], r = o.some((E) => (E == null ? void 0 : E["performance"]) === !0), a = o.reduce((E, c) => ((c == null ? void 0 : c["firstHiccup"]) !== void 0 && E.push(c.firstHiccup), E), []), g = a.length > -17 * -423 + 1867 * -5 + 2144 ? Math.min(...a) : void 0, s = o.reduce((E, c) => ((c == null ? void 0 : c["hiccupAmount"]) !== void 0 && E.push(c.hiccupAmount), E), []), C = s.length > -402 * 13 + 3928 + -22 * -59 ? s.reduce((E, c) => E + c, 0) : void 0, I = {};
    return I.performance = r, I.firstHiccup = g, I.hiccupAmount = C, I;
  }
}
const gd = new ad();
function ya(i, n) {
  const t = qA(n);
  oA(() => {
    t.current = n;
  }, [n]), oA(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function sd({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = TA(), e = be((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: a } } } = o.detail;
    if (!(i && !a) && r.includes(KA.FACE_NOT_PRESENT)) {
      if (n !== H.RUNNING) return;
      setTimeout(() => {
        t(H.LOADING);
      }, 1 * 372 + 6666 + -7038), setTimeout(() => {
        t(H.RUNNING);
      }, -238 * -29 + 71 * -119 + -221 * -7);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Id(i, n) {
  const { handleFaceDetection: t } = sd(n);
  ya(i, t);
}
function wa(i, n) {
  function t(e) {
    n(e);
  }
  ya(i, t);
}
function cd(i) {
  const { appState: n, handleAppStateChange: t } = TA();
  function e() {
    n !== H.LOADING && t(H.RUNNING);
  }
  function A(o) {
    var r;
    ((r = o.detail) == null ? void 0 : r["instruction"]) === On.CONTINUE_DETECTION && e();
  }
  wa(i, A);
}
const Cd = () => typeof document < "u" && document.hasFocus();
function Bd(i = {}) {
  const n = qA(i), t = qA(Cd()), [e, A] = pA(t.current);
  oA(() => {
    n.current = i;
  }), oA(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, I, E, c;
        !t.current && ((I = (C = n.current).onFocus) == null || I.call(C), (c = (E = n.current).onChange) == null || c.call(E, !0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        var C, I, E, c;
        t.current && ((I = (C = n.current).onBlur) == null || I.call(C), (c = (E = n.current).onChange) == null || c.call(E, !1)), r(!1);
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
function Qd(i = {}) {
  const { appState: n } = TA();
  Bd({ onBlur: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onFocus) == null || t.call(i);
  } });
}
function Ed(i) {
  const { controller: n } = iI(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = TA();
  Qd({ onBlur: () => {
    e(H.LOADING), A(!1);
  }, onFocus: () => {
    e(H.RUNNING), A(!0);
  } }), cd(i.CONTROL), oA(() => {
    t === H.COMPLETE && (n == null || n.reset()), t === H.LOADING && (n == null || n.reset()), t === H.WAITING && (n == null || n.reset()), t === H.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function xd(i) {
  const [n, t] = pA(), e = be((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  ya(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function Qc() {
  return xd(ke.PHASE_CHANGED);
}
function dd() {
  Ed(ke);
  const { currentPhaseName: i } = Qc(), n = {};
  n.skipOutsideOfCandidateSelection = i === _.PASSIVE_LIVENESS, Id(ke.DETECTION_CHANGED, n);
}
const ld = Ko.div`
  position: relative;
`, ud = Ko.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function hd(i) {
  const { cameraService: n } = wt(), { handleAppStateChange: t, handleError: e } = TA();
  async function A() {
    if (n) {
      t(H.LOADING);
      try {
        await n.switchCamera(), t(H.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(D.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    var a;
    ((a = r.detail) == null ? void 0 : a["instruction"]) === On.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  wa(i, o);
}
const fd = (i) => i === N0.CONTROL ? !Ba() : !0;
function Ec(i) {
  const { cameraService: n } = wt(), { isCameraReady: t } = TA(), [e, A] = pA(), o = bA(() => {
    const C = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return C ? e ?? C === "user" : e ?? fd(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function a() {
    A(void 0);
  }
  function g(C) {
    var I;
    switch ((I = C.detail) == null ? void 0 : I["instruction"]) {
      case On.TOGGLE_MIRROR:
        r();
        break;
      case On.SWITCH_CAMERA:
        a();
        break;
      default:
        return;
    }
  }
  wa(i, g);
  const s = {};
  return s.shouldCameraMirror = o, s;
}
function pd(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  oA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, Jx(i, A);
  }, [t, e, i]);
}
function md(i) {
  const { cameraResolution: n } = wt(), { shouldCameraMirror: t } = Ec(i.CONTROL);
  hd(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, pd(i.CAMERA_PROPS_CHANGED, e);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const yd = Ko.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, wd = Ko.div`
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
function Dd() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const bd = ga(
  ({ detectionDetails: i, isImageMirror: n }, t) => Dd() ? (console.log(i), /* @__PURE__ */ k(le, { children: [
    /* @__PURE__ */ k(yd, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ k(wd, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function kd({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = wt(), { redfin: r } = pi(), a = qA(null);
  if (oA(() => {
    if (!a.current || !o || !i)
      return;
    a.current.width = o.width, a.current.height = o.height, EC(a.current);
    const d = Ci(o), l = pC(o);
    Br(a.current, d, "lime"), Br(a.current, l, "blue"), ZE(a.current, i.processedImage.detection), po(a.current, i.processedImage.detection.leftEye.center, "cyan"), po(a.current, i.processedImage.detection.rightEye.center, "cyan"), po(a.current, i.processedImage.detection.mouth.center, "cyan"), zE(a.current, i.processedImage.detection, o);
    const Q = e.edgeDistanceToImageShorterSideRatio;
    if (LC(Q)) {
      const h = qI(
        o,
        Q.min,
        d
      );
      Br(a.current, h, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: g,
    detectionTime: s,
    processedImage: { detection: C, instructionCode: I, invalidValidators: E, isEscalated: c }
  } = i, x = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "L eye conf / status": `${C.leftEye.confidence} / ${C.leftEye.status}`,
    "R eye conf / status": `${C.rightEye.confidence} / ${C.rightEye.status}`,
    "Mouth conf / status": `${C.mouth.confidence} / ${C.mouth.status}`,
    "Detection time": s,
    "Avg FPS": g,
    Instruction: I,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": E,
    "Component version": "8.0.0",
    "SAM version": n,
    "Escalated instruction": c,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ k(
    bd,
    {
      ref: a,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function Sd() {
  return iI();
}
function Gd() {
  const [i, n] = pA(void 0), t = be((A) => {
    n(A.detail);
  }, []);
  Bc(ke.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Nd = ga(function(n, t) {
  const { detectionData: e } = Gd(), { controller: A } = Sd(), { phaseThresholds: o, thresholdsPreset: r } = dI(), { appState: a } = TA(), { shouldCameraMirror: g } = Ec(ke.CONTROL), s = A == null ? void 0 : A.getCurrentDetectionName();
  if (s === void 0 || a !== H.RUNNING)
    return null;
  const C = s !== _.PASSIVE_LIVENESS ? o[_.LIVENESS_CHALLENGE] : o[s];
  return /* @__PURE__ */ k("div", { ref: t, children: /* @__PURE__ */ k(
    kd,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: KI,
      shouldCameraMirror: g,
      thresholds: C,
      thresholdsPreset: r
    }
  ) });
});
function Rd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Fd(i, n) {
  const [t, e] = pA(!1), A = () => e((a) => !a), o = "" + t;
  to(() => {
    function a() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, I.observe(i.current, E), I;
    }
    function g() {
      var c;
      if (!((c = i.current) != null && c["parentElement"])) return;
      const I = new MutationObserver((x) => {
        x.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), x.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var h;
            Q !== (n == null ? void 0 : n.current) && ((h = Q.parentElement) == null || h.removeChild(Q));
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
const Wd = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function vd({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = qA(null), { key: o } = Fd(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: Wd, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
  const e = mC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    vd,
    {
      cutOut: i || /* @__PURE__ */ k(Rd, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Ld({ debugLayerRef: i }) {
  const { appState: n } = TA(), { cameraResolution: t } = wt(), { redfin: e } = TA(), { currentPhaseName: A } = Qc(), o = t && e === Kt.Lower && A === _.PASSIVE_LIVENESS, r = n !== H.RUNNING;
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
  const n = qA(null);
  return /* @__PURE__ */ k(le, { children: [
    /* @__PURE__ */ k(Ld, { debugLayerRef: n }),
    i,
    /* @__PURE__ */ k(Nd, { ref: n })
  ] });
}
function Jd() {
  const { videoRef: i } = wt(), { isCameraReady: n } = TA(), { shouldCameraMirror: t } = md(ke);
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
  oA(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      Ux(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function Yd({ children: i }) {
  const n = qA(null);
  return Ud(n, ke.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(ld, { ref: n, children: i });
}
function Pd() {
  return dd(), /* @__PURE__ */ k(Yd, { children: /* @__PURE__ */ k(Jd, {}) });
}
function Td({ configuration: i }) {
  return i ? /* @__PURE__ */ k(TQ, { target: i.styleTarget, children: /* @__PURE__ */ k(aE, { configuration: i, children: /* @__PURE__ */ k(Kx, { children: /* @__PURE__ */ k(NB, { children: /* @__PURE__ */ k(
    MB,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: LB.MULTIRANGE,
      children: /* @__PURE__ */ k(
        YC,
        {
          value: Yx({
            onError: i.onError
          }),
          children: /* @__PURE__ */ k(UC, { analytics: gd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ k(uB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ k(Lx, { children: /* @__PURE__ */ k(L0, { children: /* @__PURE__ */ k(Pd, {}) }) }) }) })
        }
      )
    }
  ) }) }) }) }) : null;
}
Sc(Td, "x-dot-multi-range-liveness", ["configuration"]);
