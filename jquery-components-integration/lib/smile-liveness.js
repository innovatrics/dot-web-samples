var Ic = Object.defineProperty;
var Ra = (i) => {
  throw TypeError(i);
};
var cc = (i, n, t) => n in i ? Ic(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var p = (i, n, t) => cc(i, typeof n != "symbol" ? n + "" : n, t), Fa = (i, n, t) => n.has(i) || Ra("Cannot " + t);
var D = (i, n, t) => (Fa(i, n, "read from private field"), t ? t.call(i) : n.get(i)), O = (i, n, t) => n.has(i) ? Ra("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), F = (i, n, t, e) => (Fa(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Jo, M, hs, tt, va, fs, ps, ms, oa, gr, sr, ys, xo = {}, Ds = [], Cc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Uo = Array.isArray;
function Be(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function na(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function FA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -7134 + -368 * -11 + 4 * 772 && (r.children = arguments.length > -3384 + -3 * -344 + 2355 ? Jo.call(arguments, -510 + -2 * -33 + -2 * -223) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return Io(i, r, e, A, null);
}
function Io(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++hs, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && M.vnode != null && M.vnode(r), r;
}
function Bc() {
  var i = {};
  return i.current = null, i;
}
function re(i) {
  return i.children;
}
function ne(i, n) {
  this.props = i, this.context = n;
}
function Jt(i, n) {
  if (n == null) return i.__ ? Jt(i.__, i.__i + (-769 * 5 + -5484 + -30 * -311)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Jt(i) : null;
}
function ws(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -3323 + -3 * 3139 + 12740; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return ws(i);
  }
}
function Ir(i) {
  (!i.__d && (i.__d = !0) && tt.push(i) && !wn.__r++ || va != M.debounceRendering) && ((va = M.debounceRendering) || fs)(wn);
}
function wn() {
  for (var i, n, t, e, A, o, r, g = -1 * 8380 + 7782 + 599; tt.length; ) tt.length > g && tt.sort(ps), i = tt.shift(), g = tt.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Be({}, e)).__v = e.__v + (1153 * 7 + -131 * 38 + -3092), M.vnode && M.vnode(t), ia(n.__P, t, e, n.__n, n.__P.namespaceURI, 32 & e.__u ? [A] : null, o, A ?? Jt(e), !!(2288 * -3 + -4306 + 11202 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Ss(o, t, r), t.__e != A && ws(t)));
  wn.__r = 0;
}
function bs(i, n, t, e, A, o, r, g, a, s, c) {
  var I, E, C, x, d, l, Q = e && e.__k || Ds, h = n.length;
  for (a = Qc(t, n, Q, a, h), I = 3062 * -1 + -668 * 8 + 8406; I < h; I++) (C = t.__k[I]) != null && (E = C.__i == -1 ? xo : Q[C.__i] || xo, C.__i = I, l = ia(i, C, E, A, o, r, g, a, s, c), x = C.__e, C.ref && E.ref != C.ref && (E.ref && ra(E.ref, null, C), c.push(C.ref, C.__c || x, C)), d == null && x != null && (d = x), -3921 * -1 + -8 * -303 + -6341 & C.__u || E.__k === C.__k ? a = ks(C, a, i) : typeof C.type == "function" && l !== void 0 ? a = l : x && (a = x.nextSibling), C.__u &= -7);
  return t.__e = d, a;
}
function Qc(i, n, t, e, A) {
  var o, r, g, a, s, c = t.length, I = c, E = 0;
  for (i.__k = new Array(A), o = -9680 + -1 * 6297 + 15977; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Io(null, r, null, null, null) : Uo(r) ? Io(re, { children: r }, null, null, null) : r.constructor == null && r.__b > 1 * -598 + -2256 + 1 * 2854 ? Io(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (-8342 + 1 * -5309 + -13652 * -1), g = null, (s = r.__i = Ec(r, t, a, I)) != -1 && (I--, (g = t[s]) && (g.__u |= -3321 * 3 + -23 * 111 + -22 * -569)), g == null || g.__v == null ? (s == -1 && (A > c ? E-- : A < c && E++), typeof r.type != "function" && (r.__u |= 4)) : s != a && (s == a - (-119 * -51 + 3486 + 1 * -9554) ? E-- : s == a + (-1 * -8221 + 788 * -1 + -7432) ? E++ : (s > a ? E-- : E++, r.__u |= 473 * -13 + 331 + 5822))) : i.__k[o] = null;
  if (I)
    for (o = 0; o < c; o++) (g = t[o]) != null && -321 * -29 + 1775 + 2771 * -4 == (2 & g.__u) && (g.__e == e && (e = Jt(g)), Ns(g, g));
  return e;
}
function ks(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = -1459 + -7057 * -1 + -5598; e && A < e.length; A++) e[A] && (e[A].__ = i, n = ks(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Jt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 3872 + -1 * 7451 + 3587 == n.nodeType);
  return n;
}
function Ge(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Uo(i) ? i.some(function(t) {
    Ge(t, n);
  }) : n.push(i)), n;
}
function Ec(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && 7060 + 739 * 5 + -10755 == (-3878 + 3 * 2133 + 1 * -2519 & a.__u)) return t;
  if (e > (a != null && -1 * -1649 + 14 * -692 + 8039 == (7 * 706 + -9361 + 4421 & a.__u) ? -76 * -47 + -2987 * -2 + -9545 : 6274 * 1 + 4275 + 137 * -77)) for (A = t - (1447 + 723 * -2), o = t + 1; A >= 2229 * 2 + -6815 + -2357 * -1 || o < n.length; ) {
    if (A >= -41 * -57 + -5732 + 3395) {
      if ((a = n[A]) && -5887 + -241 * 15 + 9502 == (-9232 + 1 * 6797 + -1 * -2437 & a.__u) && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && 8978 + 3 * 1511 + -13511 == (8593 + 1 * 6661 + -15252 & a.__u) && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function Ma(i, n, t) {
  n[0] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Cc.test(n) ? t : t + "px";
}
function Ko(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Ma(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Ma(i.style, n, t[n]);
    }
  else if (n[1705 * 2 + -4299 + 889] == "o" && n[-371 * -1 + 5892 + -6262] == "n") o = n != (n = n.replace(ms, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(3078 + -3 * 2626 + 4802) : n.slice(2 * 2558 + 4 * 2293 + -3 * 4762), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = oa, i.addEventListener(n, o ? sr : gr, o)) : i.removeEventListener(n, o ? sr : gr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-2831 + 137 * -40 + 8315] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -1943 + 17 * -251 + -6211 * -1 == t ? "" : t));
  }
}
function Wa(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = oa++;
      else if (n.t < t.u) return;
      return t(M.event ? M.event(n) : n);
    }
  };
}
function ia(i, n, t, e, A, o, r, g, a, s) {
  var c, I, E, C, x, d, l, Q, h, m, k, y, G, S, U, Z, ge, _A = n.type;
  if (n.constructor != null) return null;
  -2447 * -3 + -9824 + -373 * -7 & t.__u && (a = !!(-4 * 193 + -8546 + -85 * -110 & t.__u), o = [g = n.__e = t.__e]), (c = M.__b) && c(n);
  A: if (typeof _A == "function") try {
    if (Q = n.props, h = "prototype" in _A && _A.prototype.render, m = (c = _A.contextType) && e[c.__c], k = c ? m ? m.props.value : c.__ : e, t.__c ? l = (I = n.__c = t.__c).__ = I.__E : (h ? n.__c = I = new _A(Q, k) : (n.__c = I = new ne(Q, k), I.constructor = _A, I.render = dc), m && m.sub(I), I.props = Q, I.state || (I.state = {}), I.context = k, I.__n = e, E = I.__d = !0, I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && _A.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = Be({}, I.__s)), Be(I.__s, _A.getDerivedStateFromProps(Q, I.__s))), C = I.props, x = I.state, I.__v = n, E) h && _A.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && _A.getDerivedStateFromProps == null && Q !== C && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, k), !I.__e && I.shouldComponentUpdate != null && !(-14101 + -14102 * -1) === I.shouldComponentUpdate(Q, I.__s, k) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(-7503 + 1945 * -1 + 9449)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(_e) {
          _e && (_e.__ = n);
        }), y = -7846 + 7531 * -1 + 15377; y < I._sb.length; y++) I.__h.push(I._sb[y]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, k), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(C, x, d);
      });
    }
    if (I.context = k, I.props = Q, I.__P = i, I.__e = !1, G = M.__r, S = 29 * -99 + 607 * 9 + -432 * 6, h) {
      for (I.state = I.__s, I.__d = !1, G && G(n), c = I.render(I.props, I.state, I.context), U = 0; U < I._sb.length; U++) I.__h.push(I._sb[U]);
      I._sb = [];
    } else do
      I.__d = !(6 * 271 + 7831 + -9456), G && G(n), c = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++S < -13812 + -101 * -137);
    I.state = I.__s, I.getChildContext != null && (e = Be(Be({}, e), I.getChildContext())), h && !E && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(C, x)), Z = c, c != null && c.type === re && c.key == null && (Z = Gs(c.props.children)), g = bs(i, Uo(Z) ? Z : [Z], n, t, e, A, o, r, g, a, s), I.base = n.__e, n.__u &= -(-10952 + -11113 * -1), I.__h.length && r.push(I), l && (I.__E = I.__ = null);
  } catch (_e) {
    if (n.__v = null, a || o != null)
      if (_e.then) {
        for (n.__u |= a ? 2 * 3905 + 6 * 1208 + 7449 * -2 : -1 * -3405 + -7043 + 3766 * 1; g && 1732 + -14 * 102 + 2 * -148 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (ge = o.length; ge--; ) na(o[ge]);
    else n.__e = t.__e, n.__k = t.__k;
    M.__e(_e, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = xc(t.__e, n, t, e, A, o, r, a, s);
  return (c = M.diffed) && c(n), 128 & n.__u ? void 0 : g;
}
function Ss(i, n, t) {
  for (var e = 8499 * 1 + -2508 + -5991; e < t.length; e++) ra(t[e], t[++e], t[++e]);
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
function Gs(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -8803 * -1 + 254 + -9057 ? i : Uo(i) ? i.map(Gs) : Be({}, i);
}
function xc(i, n, t, e, A, o, r, g, a) {
  var s, c, I, E, C, x, d, l = t.props, Q = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 8835 + -1063 * -3 + -12024; s < o.length; s++) if ((C = o[s]) && "setAttribute" in C == !!h && (h ? C.localName == h : -2789 * 2 + -61 * 98 + 11559 * 1 == C.nodeType)) {
      i = C, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(Q);
    i = document.createElementNS(A, h, Q.is && Q), g && (M.__m && M.__m(n, o), g = !1), o = null;
  }
  if (h == null) l === Q || g && i.data == Q || (i.data = Q);
  else {
    if (o = o && Jo.call(i.childNodes), l = t.props || xo, !g && o != null)
      for (l = {}, s = 2631 + -1 * -6475 + -1 * 9106; s < i.attributes.length; s++) l[(C = i.attributes[s]).name] = C.value;
    for (s in l) if (C = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = C;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        Ko(i, s, null, C, A);
      }
    }
    for (s in Q) C = Q[s], s == "children" ? E = C : s == "dangerouslySetInnerHTML" ? c = C : s == "value" ? x = C : s == "checked" ? d = C : g && typeof C != "function" || l[s] === C || Ko(i, s, C, l[s], A);
    if (c) g || I && (c.__html == I.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), bs(n.type == "template" ? i.content : i, Uo(E) ? E : [E], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-16 * 211 + 2 * 1306 + 764] : t.__k && Jt(t, -3885 * 1 + 1963 * 1 + 1922), g, a), o != null)
      for (s = o.length; s--; ) na(o[s]);
    g || (s = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[s] || h == "progress" && !x || h == "option" && x != l[s]) && Ko(i, s, x, l[s], A), s = "checked", d != null && d != i[s] && Ko(i, s, d, l[s], A));
  }
  return i;
}
function ra(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    M.__e(A, t);
  }
}
function Ns(i, n, t) {
  var e, A;
  if (M.unmount && M.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || ra(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      M.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -2502 + 278 * 9; A < e.length; A++) e[A] && Ns(e[A], n, t || typeof i.type != "function");
  t || na(i.__e), i.__c = i.__ = i.__e = void 0;
}
function dc(i, n, t) {
  return this.constructor(i, t);
}
function Ke(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), M.__ && M.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], ia(n, i = (!e && t || n).__k = FA(re, null, [i]), A || xo, xo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Jo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Ss(o, i, r);
}
function aa(i, n) {
  Ke(i, n, aa);
}
function ga(i, n, t) {
  var e, A, o, r, g = Be({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > -7 * 597 + -6006 + 1 * 10187 && (g.children = arguments.length > 3 ? Jo.call(arguments, 4003 + 3 * 1844 + -9533 * 1) : t), Io(i.type, g, e || i.key, A || i.ref, null);
}
function Re(i) {
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
  return n.__c = "__cC" + ys++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Jo = Ds.slice, M = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, hs = -1133 * -8 + 1 * 8408 + -546 * 32, ne.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Be({}, this.state), typeof i == "function" && (i = i(Be({}, t), this.props)), i && Be(t, i), i != null && this.__v && (n && this._sb.push(n), Ir(this));
}, ne.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Ir(this));
}, ne.prototype.render = re, tt = [], fs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ps = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, wn.__r = 8803 + -105 * 3 + -8488, ms = /(PointerCapture)$|Capture$/i, oa = 2252 + 1434 * -1 + -818, gr = Wa(!1), sr = Wa(!0), ys = 0;
function sa() {
  return (sa = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -5030 + -8357 * -1 + 1 * -3326; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var lc = ["context", "children"];
function uc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = 9885 * 1 + 793 + -10678; r < a.length; r++) A.indexOf(o = a[r]) >= 5269 + -1 * 5269 || (g[o] = e[o]);
    return g;
  }(i, lc);
  return ga(n, t);
}
function hc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = FA(uc, sa({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (-201 * 2 + 1182 + 259 * -3 === e.nodeType) return e.data;
    if (1 * 8389 + -9445 + 151 * 7 !== e.nodeType) return null;
    var o = [], r = {}, g = 1193 * -5 + -4541 + 10506, a = e.attributes, s = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[Rs(a[g].name)] = a[g].value);
    for (g = s.length; g--; ) {
      var c = t(s[g], null), I = s[g].slot;
      I ? r[I] = FA(La, { name: I }, c) : o[g] = c;
    }
    var E = A ? FA(La, null, o) : o;
    return FA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? aa : Ke)(this._vdom, this._root);
}
function Rs(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function fc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Rs(i)] = t, this._vdom = ga(this._vdom, e), Ke(this._vdom, this._root);
  }
}
function pc() {
  Ke(this._vdom = null, this._root);
}
function La(i, n) {
  var t = this;
  return FA("slot", sa({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function mc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = hc, A.prototype.attributeChangedCallback = fc, A.prototype.disconnectedCallback = pc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var yc = -2781 + 2781 * 1;
function b(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var s = {};
  s.type = i, s.props = a, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --yc, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var c = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return M.vnode && M.vnode(c), c;
}
class w extends Error {
  constructor(t, e) {
    super(t);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof w) return t;
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
    return new w(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof w) return t;
    const e = "An unexpected error has occurred";
    return new w(e);
  }
}
const en = {};
en.CONTINUE_DETECTION = "continue-detection", en.SWITCH_CAMERA = "switch-camera", en.TOGGLE_MIRROR = "toggle-mirror";
const bn = en, cr = {};
cr.FIRST_FRAME = "first-frame", cr.FIRST_VALID_FRAME = "first-valid-frame";
const tn = cr, Fs = {};
Fs.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Cr = Fs;
var vs = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(vs || {}), Dc = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Dc || {}), wc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(wc || {});
const pe = {};
pe.DETECTION_CHANGED = "smile-auto-capture:detection-changed", pe.CAMERA_PROPS_CHANGED = "smile-auto-capture:camera-props-changed", pe.CONTROL = "smile-auto-capture:control", pe.INSTRUCTION_CHANGED = "smile-auto-capture:instruction-changed", pe.INSTRUCTION_ESCALATED = "smile-auto-capture:instruction-escalated", pe.VIDEO_ELEMENT_SIZE = "smile-auto-capture:video-element-size", pe.STATE_CHANGED = "smile-auto-capture:state-changed", pe.PHASE_CHANGED = "smile-auto-capture:phase-changed";
const Ne = pe;
var bc = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(bc || {}), kc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(kc || {});
const me = {};
me.CANDIDATE_SELECTION = "candidate_selection", me.DOCUMENT_CENTERING = "document_centering", me.DOCUMENT_NOT_PRESENT = "document_not_present", me.DOCUMENT_TOO_FAR = "document_too_far", me.SHARPNESS_TOO_LOW = "sharpness_too_low", me.BRIGHTNESS_TOO_LOW = "brightness_too_low", me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", me.HOTSPOTS_PRESENT = "hotspots_present";
const Ve = me, Ze = {};
Ze.isPresent = Ve.DOCUMENT_NOT_PRESENT, Ze.isNotSmall = Ve.DOCUMENT_TOO_FAR, Ze.isNotOutOfBounds = Ve.DOCUMENT_CENTERING, Ze.isSharp = Ve.SHARPNESS_TOO_LOW, Ze.isNotDim = Ve.BRIGHTNESS_TOO_LOW, Ze.isNotBright = Ve.BRIGHTNESS_TOO_HIGH, Ze.noHotspots = Ve.HOTSPOTS_PRESENT;
const bt = {};
bt.LOADING = "loading", bt.ERROR = "error", bt.WAITING = "waiting", bt.RUNNING = "running", bt.COMPLETE = "complete";
const P = bt, Ms = {};
Ms.EYE_NOT_PRESENT = "eye_not_present";
const Ut = Ms, GA = {};
GA.CANDIDATE_SELECTION = "candidate_selection", GA.FACE_TOO_CLOSE = "face_too_close", GA.FACE_TOO_FAR = "face_too_far", GA.FACE_CENTERING = "face_centering", GA.FACE_NOT_PRESENT = "face_not_present", GA.SHARPNESS_TOO_LOW = "sharpness_too_low", GA.BRIGHTNESS_TOO_LOW = "brightness_too_low", GA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", GA.DEVICE_PITCHED = "device_pitched", GA.LEFT_EYE_NOT_PRESENT = "left_" + Ut.EYE_NOT_PRESENT, GA.RIGHT_EYE_NOT_PRESENT = "right_" + Ut.EYE_NOT_PRESENT, GA.MOUTH_NOT_PRESENT = "mouth_not_present", GA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", GA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const JA = GA, HA = {};
HA.isPresent = JA.FACE_NOT_PRESENT, HA.isNotPitched = JA.DEVICE_PITCHED, HA.isNotSmall = JA.FACE_TOO_FAR, HA.isNotLarge = JA.FACE_TOO_CLOSE, HA.isNotOutOfBounds = JA.FACE_CENTERING, HA.isNotDim = JA.BRIGHTNESS_TOO_LOW, HA.isNotBright = JA.BRIGHTNESS_TOO_HIGH, HA.isSharp = JA.SHARPNESS_TOO_LOW, HA.isLeftEyePresent = JA.LEFT_EYE_NOT_PRESENT, HA.isRightEyePresent = JA.RIGHT_EYE_NOT_PRESENT, HA.isMouthPresent = JA.MOUTH_NOT_PRESENT, HA.isMouthScoreNotTooHigh = JA.MOUTH_SCORE_TOO_HIGH, HA.isMouthScoreNotTooLow = JA.MOUTH_SCORE_TOO_LOW;
var Sc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Sc || {});
const rA = {};
rA.CANDIDATE_SELECTION = "candidate_selection", rA.FACE_TOO_CLOSE = "face_too_close", rA.FACE_TOO_FAR = "face_too_far", rA.FACE_CENTERING = "face_centering", rA.FACE_NOT_PRESENT = "face_not_present", rA.SHARPNESS_TOO_LOW = "sharpness_too_low", rA.BRIGHTNESS_TOO_LOW = "brightness_too_low", rA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", rA.DEVICE_PITCHED = "device_pitched", rA.LEFT_EYE_NOT_PRESENT = "left_" + Ut.EYE_NOT_PRESENT, rA.RIGHT_EYE_NOT_PRESENT = "right_" + Ut.EYE_NOT_PRESENT, rA.MOUTH_NOT_PRESENT = "mouth_not_present", rA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", rA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", rA.SMILE = "smile", rA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", rA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const aA = rA, UA = {};
UA.isPresent = aA.FACE_NOT_PRESENT, UA.isNotPitched = aA.DEVICE_PITCHED, UA.isNotSmall = aA.FACE_TOO_FAR, UA.isNotLarge = aA.FACE_TOO_CLOSE, UA.isNotOutOfBounds = aA.FACE_CENTERING, UA.isNotDim = aA.BRIGHTNESS_TOO_LOW, UA.isNotBright = aA.BRIGHTNESS_TOO_HIGH, UA.isSharp = aA.SHARPNESS_TOO_LOW, UA.isLeftEyePresent = aA.LEFT_EYE_NOT_PRESENT, UA.isRightEyePresent = aA.RIGHT_EYE_NOT_PRESENT, UA.isMouthPresent = aA.MOUTH_NOT_PRESENT, UA.isMouthStatusNotTooHigh = aA.MOUTH_SCORE_TOO_HIGH, UA.isMouthStatusNotTooLow = aA.MOUTH_SCORE_TOO_LOW;
const Si = UA, on = {};
on.NEUTRAL = "NEUTRAL", on.SMILE = "SMILE", on.SMILE_MANUAL = "SMILE_MANUAL";
const J = on, te = {};
te.CANDIDATE_SELECTION = "candidate_selection", te.PALM_CENTERING = "palm_centering", te.PALM_NOT_PRESENT = "palm_not_present", te.PALM_TOO_FAR = "palm_too_far", te.PALM_TOO_CLOSE = "palm_too_close", te.SHARPNESS_TOO_LOW = "sharpness_too_low", te.BRIGHTNESS_TOO_LOW = "brightness_too_low", te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", te.DEVICE_PITCHED = "device_pitched", te.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const le = te, ue = {};
ue.isPresent = le.PALM_NOT_PRESENT, ue.isNotPitched = le.DEVICE_PITCHED, ue.isNotSmall = le.PALM_TOO_FAR, ue.isNotOutOfBounds = le.PALM_CENTERING, ue.isNotDim = le.BRIGHTNESS_TOO_LOW, ue.isNotBright = le.BRIGHTNESS_TOO_HIGH, ue.isSharp = le.SHARPNESS_TOO_LOW, ue.isNotLarge = le.PALM_TOO_CLOSE, ue.isTemplateExtractionQualityHighEnough = le.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const jo = {};
jo.TOP_LEFT = "TOP_LEFT", jo.TOP_RIGHT = "TOP_RIGHT", jo.BOTTOM_RIGHT = "BOTTOM_RIGHT", jo.BOTTOM_LEFT = "BOTTOM_LEFT";
const XA = {};
XA.CANDIDATE_SELECTION = "candidate_selection", XA.FACE_TOO_CLOSE = "face_too_close", XA.FACE_TOO_FAR = "face_too_far", XA.FACE_CENTERING = "face_centering", XA.FACE_NOT_PRESENT = "face_not_present", XA.SHARPNESS_TOO_LOW = "sharpness_too_low", XA.BRIGHTNESS_TOO_LOW = "brightness_too_low", XA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", XA.DEVICE_PITCHED = "device_pitched", XA.LEFT_EYE_NOT_PRESENT = "left_" + Ut.EYE_NOT_PRESENT, XA.RIGHT_EYE_NOT_PRESENT = "right_" + Ut.EYE_NOT_PRESENT;
const se = XA, Ie = {};
Ie.isPresent = se.FACE_NOT_PRESENT, Ie.isNotPitched = se.DEVICE_PITCHED, Ie.isNotSmall = se.FACE_TOO_FAR, Ie.isNotLarge = se.FACE_TOO_CLOSE, Ie.isNotOutOfBounds = se.FACE_CENTERING, Ie.isNotDim = se.BRIGHTNESS_TOO_LOW, Ie.isNotBright = se.BRIGHTNESS_TOO_HIGH, Ie.isSharp = se.SHARPNESS_TOO_LOW, Ie.isLeftEyePresent = se.LEFT_EYE_NOT_PRESENT, Ie.isRightEyePresent = se.RIGHT_EYE_NOT_PRESENT;
var je, j, Gi, Oa, Yt = 1152 * -3 + -2 * -523 + 1 * 2410, Ws = [], _ = M, Ja = _.__b, Ua = _.__r, Ya = _.diffed, Ta = _.__c, Pa = _.unmount, Ha = _.__;
function Vt(i, n) {
  _.__h && _.__h(j, i, Yt || n), Yt = -6 * -571 + 1 * 7478 + -10904;
  var t = {};
  t.__ = [], t.__h = [];
  var e = j.__H || (j.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function cA(i) {
  return Yt = 1, Ia(Js, i);
}
function Ia(i, n, t) {
  var e = Vt(je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Js(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], s = e.t(a, g);
    a !== s && (e.__N = [s, e.__[1 * 883 + -5319 + 51 * 87]], e.__c.setState({}));
  }], e.__c = j, !j.__f)) {
    var A = function(g, a, s) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (c.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, g, a, s);
      var I = e.__c.props !== g;
      return c.forEach(function(E) {
        if (E.__N) {
          var C = E.__[0];
          E.__ = E.__N, E.__N = void 0, C !== E.__[0] && (I = !0);
        }
      }), o && o.call(this, g, a, s) || I;
    };
    j.__f = !0;
    var o = j.shouldComponentUpdate, r = j.componentWillUpdate;
    j.componentWillUpdate = function(g, a, s) {
      if (this.__e) {
        var c = o;
        o = void 0, A(g, a, s), o = c;
      }
      r && r.call(this, g, a, s);
    }, j.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function V(i, n) {
  var t = Vt(je++, 3);
  !_.__s && ca(t.__H, n) && (t.__ = i, t.u = n, j.__H.__h.push(t));
}
function Zt(i, n) {
  var t = Vt(je++, 4);
  !_.__s && ca(t.__H, n) && (t.__ = i, t.u = n, j.__h.push(t));
}
function PA(i) {
  return Yt = 6729 * 1 + -7950 + -1 * -1226, hA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Ls(i, n, t) {
  Yt = 43 * 149 + 1 * -8065 + 1664, Zt(function() {
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
  var t = Vt(je++, 7);
  return ca(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Ee(i, n) {
  return Yt = 2666 * -2 + -2345 * 1 + 53 * 145, hA(function() {
    return i;
  }, n);
}
function ae(i) {
  var n = j.context[i.__c], t = Vt(je++, 9 * -295 + -6295 * 1 + 1 * 8959);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(j)), n.props.value) : i.__;
}
function kn(i, n) {
  _.useDebugValue && _.useDebugValue(n ? n(i) : i);
}
function Os() {
  var i = Vt(je++, 11);
  if (!i.__) {
    for (var n = j.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [6954 + 79 * 3 + 51 * -141, 9349 * -1 + -251 * 6 + -1 * -10855]);
    i.__ = "P" + t[7432 + 1 * -1437 + -5995] + "-" + t[1 * -5373 + 82 * 55 + -432 * -2]++;
  }
  return i.__;
}
function Gc() {
  for (var i; i = Ws.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(nn), i.__H.__h.forEach(Br), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], _.__e(n, i.__v);
  }
}
_.__b = function(i) {
  j = null, Ja && Ja(i);
}, _.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Ha && Ha(i, n);
}, _.__r = function(i) {
  Ua && Ua(i), je = -434 * -4 + -6142 + 4406;
  var n = (j = i.__c).__H;
  n && (Gi === j ? (n.__h = [], j.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(nn), n.__h.forEach(Br), n.__h = [], je = 212 * -24 + 6985 + -7 * 271)), Gi = j;
}, _.diffed = function(i) {
  Ya && Ya(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-25 * 23 + 407 * 15 + -3 * 1843 !== Ws.push(n) && Oa === _.requestAnimationFrame || ((Oa = _.requestAnimationFrame) || Nc)(Gc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Gi = j = null;
}, _.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(nn), t.__h = t.__h.filter(function(e) {
        return !e.__ || Br(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], _.__e(e, t.__v);
    }
  }), Ta && Ta(i, n);
}, _.unmount = function(i) {
  Pa && Pa(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      nn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && _.__e(n, t.__v));
};
var Ka = typeof requestAnimationFrame == "function";
function Nc(i) {
  var n, t = function() {
    clearTimeout(e), Ka && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Ka && (n = requestAnimationFrame(t));
}
function nn(i) {
  var n = j, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), j = n;
}
function Br(i) {
  var n = j;
  i.__c = i.__(), j = n;
}
function ca(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Js(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const Bi = Re(void 0);
Bi.displayName = "AppStateContext";
function MA() {
  const i = ae(Bi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class Us extends ne {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new w("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === P.ERROR ? null : this.props.children;
  }
}
p(Us, "contextType", Bi);
function Ys(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Qr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Ts(i, n) {
  var t = n(), e = cA({ t: { __: t, u: n } }), A = e[-1 * 3593 + 5712 + -2119].t, o = e[1];
  return Zt(function() {
    A.__ = t, A.u = n, Ni(A) && o({ t: A });
  }, [i, t, n]), V(function() {
    return Ni(A) && o({ t: A }), i(function() {
      Ni(A) && o({ t: A });
    });
  }, [i]), t;
}
function Ni(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (n !== 0 || (-347 * 23 + 7089 + 893) / n == (2 + 8511 * 1 + 8512 * -1) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Ps(i) {
  i();
}
function Hs(i) {
  return i;
}
function Ks() {
  return [!1, Ps];
}
var js = Zt;
function Er(i, n) {
  this.props = i, this.context = n;
}
function Rc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : Qr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, FA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(Er.prototype = new ne()).isPureReactComponent = !0, Er.prototype.shouldComponentUpdate = function(i, n) {
  return Qr(this.props, i) || Qr(this.state, n);
};
var ja = M.__b;
M.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ja && ja(i);
};
var Fc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -1361 * 2 + 8917 + -2284;
function Ca(i) {
  function n(t) {
    var e = Ys({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Fc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var _a = function(i, n) {
  return i == null ? null : Ge(Ge(i).map(n));
}, vc = { map: _a, forEach: _a, count: function(i) {
  return i ? Ge(i).length : 0;
}, only: function(i) {
  var n = Ge(i);
  if (241 * 37 + -6704 + -2212 !== n.length) throw "Children.only";
  return n[9187 * 1 + -26 * -104 + -11891];
}, toArray: Ge }, Mc = M.__e;
M.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  Mc(i, n, t, e);
};
var qa = M.unmount;
function _s(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Ys({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return _s(e, n, t);
  })), i;
}
function qs(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return qs(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function rn() {
  this.__u = 17 + 486 * 19 + -9251, this.o = null, this.__b = null;
}
function Vs(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Wc(i) {
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
function io() {
  this.i = null, this.l = null;
}
M.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -15 * -265 + -9038 + 5095 * 1 & i.__u && (i.type = null), qa && qa(i);
}, (rn.prototype = new ne()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = Vs(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-5 * 803 + 9124 + -13 * 393] = qs(a, a.__c.__P, a.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || -2019 * -4 + -6945 + -1099 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-5137 + 3 * -1994 + 11119 * 1] }), i.then(r, r);
}, rn.prototype.componentWillUnmount = function() {
  this.o = [];
}, rn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-4 * 497 + -9813 + 1 * 11801].__c;
      this.__v.__k[-5257 * -1 + 121 * 54 + 13 * -907] = _s(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && FA(re, null, i.fallback);
  return A && (A.__u &= -33), [FA(re, null, n.__a ? null : i.children), A];
};
var Va = function(i, n, t) {
  if (++t[-3541 + 1 * -7481 + -1 * -11023] === t[-2408 + -2848 * -3 + -6136] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-5 * -1572 + -7070 + -790] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 717 * -5 + 8752 + -5164; ) t.pop()();
    if (t[-22 * 417 + -427 + 4801 * 2] < t[-1163 * -6 + 1 * -3834 + -3144]) break;
    i.i = t = t[-6712 + -9 * -746];
  }
};
function Lc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Oc(i) {
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
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 17123 + -7 * 2446), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Ke(FA(Lc, o, i.__v), n.v);
}
function Jc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = FA(Oc, t);
  return e.containerInfo = n, e;
}
(io.prototype = new ne()).__a = function(i) {
  var n = this, t = Vs(n.__v), e = n.l.get(i);
  return e[0]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Va(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, io.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Ge(i.children);
  i.revealOrder && i.revealOrder[-5716 + -5716 * -1] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [2636 + -3481 * -2 + 457 * -21, -1538 * -2 + -4 * 2161 + 48 * 116, this.i]);
  return i.children;
}, io.prototype.componentDidUpdate = io.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Va(i, t, n);
  });
};
var Zs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -46142 * -1 + -76088 + 90049, Uc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Yc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Tc = /[A-Z0-9]/g, Pc = typeof document < "u", Hc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function Kc(i, n, t) {
  return n.__k == null && (n.textContent = ""), Ke(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function jc(i, n, t) {
  return aa(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
ne.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ne.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Za = M.event;
function _c() {
}
function qc() {
  return this.cancelBubble;
}
function Vc() {
  return this.defaultPrevented;
}
M.event = function(i) {
  return Za && (i = Za(i)), i.persist = _c, i.isPropagationStopped = qc, i.isDefaultPrevented = Vc, i.nativeEvent = i;
};
var an = {};
an.enumerable = !1, an.configurable = !0, an.get = function() {
  return this.class;
};
var Ba, Zc = an, za = M.vnode;
M.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || Pc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[-2247 * 2 + 9415 + -4921] === "o" && a[-416 + -1 * -417] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Hc(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Yc.test(r) && (r = a) : a = r = "oninput" : o && Uc.test(r) ? r = r.replace(Tc, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Ge(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Ge(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Zc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = Zs, za && za(i);
};
var Xa = M.__r;
M.__r = function(i) {
  Xa && Xa(i), Ba = i.__c;
};
var $a = M.diffed;
M.diffed = function(i) {
  $a && $a(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), Ba = null;
};
var EA = {};
EA.readContext = function(i) {
  return Ba.__n[i.__c].props.value;
}, EA.useCallback = Ee, EA.useContext = ae, EA.useDebugValue = kn, EA.useDeferredValue = Hs, EA.useEffect = V, EA.useId = Os, EA.useImperativeHandle = Ls, EA.useInsertionEffect = js, EA.useLayoutEffect = Zt, EA.useMemo = hA, EA.useReducer = Ia, EA.useRef = PA, EA.useState = cA, EA.useSyncExternalStore = Ts, EA.useTransition = Ks;
var zs = {};
zs.current = EA;
var Xs = {};
Xs.ReactCurrentDispatcher = zs;
var zc = Xs;
function Xc(i) {
  return FA.bind(null, i);
}
function Qi(i) {
  return !!i && i.$$typeof === Zs;
}
function $c(i) {
  return Qi(i) && i.type === re;
}
function AC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function eC(i) {
  return Qi(i) ? ga.apply(null, arguments) : i;
}
function tC(i) {
  return !!i.__k && (Ke(null, i), !0);
}
function oC(i) {
  return i && (i.base || -986 * 7 + 75 * -102 + 14553 === i.nodeType && i) || null;
}
var nC = function(i, n) {
  return i(n);
}, iC = function(i, n) {
  return i(n);
}, rC = re, aC = Qi, Qt = { useState: cA, useId: Os, useReducer: Ia, useEffect: V, useLayoutEffect: Zt, useInsertionEffect: js, useTransition: Ks, useDeferredValue: Hs, useSyncExternalStore: Ts, startTransition: Ps, useRef: PA, useImperativeHandle: Ls, useMemo: hA, useCallback: Ee, useContext: ae, useDebugValue: kn, version: "18.3.1", Children: vc, render: Kc, hydrate: jc, unmountComponentAtNode: tC, createPortal: Jc, createElement: FA, createContext: Re, createFactory: Xc, cloneElement: eC, createRef: Bc, Fragment: re, isValidElement: Qi, isElement: aC, isFragment: $c, isMemo: AC, findDOMNode: oC, Component: ne, PureComponent: Er, memo: Rc, forwardRef: Ca, flushSync: iC, unstable_batchedUpdates: nC, StrictMode: rC, Suspense: rn, SuspenseList: io, lazy: Wc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zc };
(function(i, n) {
  function t(a, s, c, I, E) {
    return gA(s - 158, a);
  }
  function e(a, s, c, I, E) {
    return gA(E - 825, c);
  }
  function A(a, s, c, I, E) {
    return gA(s - 766, c);
  }
  function o(a, s, c, I, E) {
    return gA(c - -272, E);
  }
  const r = i();
  function g(a, s, c, I, E) {
    return gA(s - 566, I);
  }
  for (; ; )
    try {
      if (parseInt(t("z0H]", 338, 324, 333, 356)) / 1 + -parseInt(o(-124, -116, -110, -92, "A67%")) / 2 * (-parseInt(e(1023, 994, "f%ts", 1023, 1009)) / 3) + parseInt(t("]^nG", 315, 313, 317, 330)) / 4 * (-parseInt(t("[EIy", 347, 341, 335, 361)) / 5) + -parseInt(t("Sz!]", 331, 348, 318, 319)) / 6 + -parseInt(e(1004, 988, "Gojb", 1007, 990)) / 7 * (-parseInt(A(962, 953, "]^nG", 952, 971)) / 8) + -parseInt(A(908, 925, "Utoa", 921, 924)) / 9 + -parseInt(A(934, 952, "BSi(", 963, 964)) / 10 * (parseInt(g(706, 722, 727, "]LnD", 722)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Sn, -54379 + -7643 * -32 + 13338);
function _o(i, n, t, e, A) {
  return gA(n - 459, t);
}
function Ag(i, n, t, e, A) {
  return gA(A - 519, t);
}
function gC(i, n, t, e, A) {
  return gA(t - 7, A);
}
function Sn() {
  const i = ["DCk8W5bImmkWWRW", "WO3dLmkCe0SVkmoAC8kTW6hcSmkC", "hN7dLWJdVq", "kL8TW5JdQ8koWQxdKZ8TmW", "WRtdSHzrEW", "qcxcOsldG0RdPvfPWPDgkG", "WORdT15zWPCCsrKWWOnrnCoK", "eSoQWR9dW5m", "eIaNW5JcLM3cV8oUvSoPW7tdJa", "W4JcOa5iW5y", "W7yNAhW", "gSk/WP4pwW", "W70pWO/dO3PwW6rMW5mWW4pcOG", "W5tcPmo6W5xdGG", "WRnDW5ldK8ov", "E2ldLCkeshjjiLO", "WP5iWRtdJ3bmAa", "W5G7cf/dIcpcISock8ozqW", "W5aAeSo0W4GPWQmVkCo4WR8", "WRZdOf0OW7ysy8kxnM0mW7NcGa", "WPhdV8oDWQWap8kT", "FmoSWPlcRCkNhHaN", "WRRdLmoqhXG", "zdPXC8kYyJpcKG", "BdtdUblcNfNcUwXl", "WR3dP14QW7fRkCkGbM8j", "puVcT8kutZqwyCkbWOBcQbW", "WOydWRnUtZGVx8oOgeRcJ3u", "yJpdMSozkq", "WPpcJMBdLge", "WORdKCkDf08Tx8ozsCkfW6tcPG", "jMxcJrpcIW", "tH93WP3cSG", "WPpdLSoeWOSNBcO", "W5pcPmoM", "BcxdPxTO"];
  return Sn = function() {
    return i;
  }, Sn();
}
function sC(i, n, t, e, A) {
  return gA(e - -726, i);
}
function gA(i, n) {
  const t = Sn();
  return gA = function(e, A) {
    e = e - (-6871 + -1434 * 2 + 1 * 9893);
    let o = t[e];
    if (gA.DiMooO === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      gA.qxNCix = c, i = arguments, gA.DiMooO = !0;
    }
    const g = t[-5 * 517 + -883 * -2 + -39 * -21], a = e + g, s = i[a];
    return s ? o = s : (gA.wzrahb === void 0 && (gA.wzrahb = !0), o = gA.qxNCix(o, A), i[a] = o), o;
  }, gA(i, n);
}
function eg(i, n, t, e, A) {
  return gA(n - 36, e);
}
const Gn = Re(void 0);
Gn[gC(197, 183, 189, 184, "C1DZ") + _o(645, 631, "Wo8u") + "e"] = _o(634, 620, "EVDC") + _o(622, 622, "]LnD") + _o(624, 637, "6h*3");
function Ei() {
  const i = ae(Gn);
  if (i === void 0) throw new Error(Gn[A(880, 890, 885, "fMe1") + A(864, 869, 877, "dLl$") + "e"] + (A(889, 888, 875, "pQa7") + t(1066, 1064, "IbFR") + n("VOl$", 429, 418) + o(580, 576, 574, "cM9B") + e("V[(P", 359, 362, 344) + o(592, 597, 593, "qy4X") + e("bCFs", 316, 344, 333) + e("qy4X", 343, 350, 335)));
  function n(r, g, a, s, c) {
    return eg(r - 354, a - 205, a - 194, r);
  }
  function t(r, g, a, s, c) {
    return eg(r - 68, g - 861, a - 393, a);
  }
  function e(r, g, a, s, c) {
    return Ag(r - 58, g - 153, r, s - 405, s - -350);
  }
  function A(r, g, a, s, c) {
    return sC(s, g - 187, a - 464, r - 1436);
  }
  function o(r, g, a, s, c) {
    return Ag(r - 379, g - 5, s, s - 283, g - -103);
  }
  return i;
}
const Nn = Re(void 0);
Nn.displayName = "AnalyticsContext";
function IC() {
  const i = ae(Nn);
  if (i === void 0)
    throw new Error(`${Nn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const co = (i) => i.length < 5527 + 307 * -18 ? 0 : i.reduce((t, e) => t + e, 0) / i.length, Rt = (i) => Number.parseFloat(i.toFixed(3 * -1834 + -1040 + 187 * 35));
function cC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-1 * 9090 + -229 * 17 + 12983, -8784 + 43 * 109 + 4097, n.canvas.width, n.canvas.height);
}
const $s = 31 * 13 + 58 * -78 + 4121 + 0.75, CC = -1 * -181 + -9478 + -17 * -547, BC = 1361 * 1 + -8125 + 263 * 28, QC = "dot-auto-capture-video", xi = (i, n) => Math.min(i, n), AI = ({ height: i, width: n }, t) => {
  const e = xi(n, i) * t, A = (n - e) / (-1 * 5171 + -7279 + 22 * 566), o = (i - e) / 2, r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, EC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = AI(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, xC = ({ height: i, width: n }) => {
  const t = xi(n, i), e = t / (5621 + 3180 * -2 + 2 * 371) * (-7345 * -1 + 3313 + -10654);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function dC(i, n) {
  const t = xi(n.width, n.height);
  return Rt(i * t);
}
function lC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, AI(t, $s);
}
function uC(i) {
  return EC(i, $s);
}
function hC(i, n) {
  return dC(i, n) * CC;
}
const fC = "8.0.1", pC = {
  version: fC
}, xr = {};
xr.max = 100, xr.min = 10;
const tg = xr, mC = -950 * -1 + -4974 + -1 * -4744, yC = -5348 + 1 * -593 + 6141, DC = 581 * 11 + 59 * -86 + -1313, eI = "AES-CBC", tI = "RSA-OAEP", wC = "SHA-256", bC = "image/jpeg", kC = -3094 * -3 + 3295 * -1 + -5979, oI = "/dot-assets", og = "dot_embedded_bg.wasm", dr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), nI = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Rt(t) : t)), iI = () => pC.version, rI = (i) => new URL(i).hostname.replace("www.", ""), Qa = () => rI(window.location.href) === "localhost", SC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function GC(i) {
  return i.at(-1) === "/" ? i.slice(-5995 + -55 * -109, -1) : i;
}
function NC(i) {
  return "" + GC(i ?? "") + oI;
}
function RC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function to(i) {
  return (...n) => {
    Qa() && console[i](...n);
  };
}
const Ea = { log: to("log"), warn: to("warn"), error: to("error"), info: to("info"), debug: to("debug") };
function FC({ analytics: i, crosshatch: n }) {
  if (!Qa())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function vC({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = FC(o);
  return V(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), V(() => {
    e && (Ea.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function MC({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Ei(), { redfin: o } = MA(), r = vC({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = hA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ b(Nn.Provider, { value: g, children: t });
}
const lr = {};
lr.SIMD = "simd", lr.NO_SIMD = "no-simd";
const ng = lr, ur = {};
ur.Lower = "Lower", ur.Higher = "Higher";
const Tt = ur, hr = {};
hr.MOBILE = "MOBILE", hr.DESKTOP = "DESKTOP";
const ig = hr, Rn = Re(void 0);
Rn.displayName = "TransactionCountingContext";
function aI() {
  const i = ae(Rn);
  if (i === void 0)
    throw new Error(`${Rn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function WC({ children: i, value: n }) {
  const { crosshatch: t } = Ei(), { transactionCounting: e } = aI(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Tt.Higher : Tt.Lower, o = hA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ b(Bi.Provider, { value: o, children: i });
}
const Fn = Re(void 0);
Fn.displayName = "CameraServiceContext";
function dt() {
  const i = ae(Fn);
  if (i === void 0)
    throw new Error(`${Fn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function gn() {
  return !1;
}
function LC() {
  return !0;
}
async function gI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ri() {
  return (await gI()).filter((n) => n.kind === "videoinput");
}
function sn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function fr(i) {
  return i.getVideoTracks()[-1 * 1749 + 4558 * -2 + 10865];
}
function mA(i, n) {
  const t = vn();
  return mA = function(e, A) {
    e = e - (-1 * -1671 + 17 * -66 + -171 * 1);
    let o = t[e];
    if (mA.Qrsevz === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      mA.fAvENG = c, i = arguments, mA.Qrsevz = !0;
    }
    const g = t[0], a = e + g, s = i[a];
    return s ? o = s : (mA.qnhWXi === void 0 && (mA.qnhWXi = !0), o = mA.fAvENG(o, A), i[a] = o), o;
  }, mA(i, n);
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return mA(c - 18, s);
  }
  function e(g, a, s, c, I) {
    return mA(g - -977, a);
  }
  const A = i();
  function o(g, a, s, c, I) {
    return mA(g - -173, c);
  }
  function r(g, a, s, c, I) {
    return mA(s - 400, g);
  }
  for (; ; )
    try {
      if (-parseInt(e(-566, "P)Bn", -567, -561, -573)) / 1 * (-parseInt(e(-563, "7PkG", -578, -562, -550)) / 2) + -parseInt(r("C)4O", 773, 792, 792, 794)) / 3 * (-parseInt(t(431, 407, "NAmk", 413, 406)) / 4) + parseInt(t(394, 407, "NM5J", 408, 396)) / 5 + parseInt(r("Hrn)", 809, 803, 804, 815)) / 6 * (-parseInt(t(422, 406, "0KCl", 417, 423)) / 7) + -parseInt(t(402, 385, "*CHB", 398, 396)) / 8 + -parseInt(o(225, 210, 233, "7PkG", 206)) / 9 + -parseInt(e(-584, "8*B#", -598, -597, -570)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(vn, -28103 * 2 + 215654 + 1236 * 1);
function OC(i) {
  function n(g, a, s, c, I) {
    return mA(c - -661, s);
  }
  const t = new ArrayBuffer(i[r(-329, -348, "0KCl", -370, -350) + "h"]), e = new Uint8Array(t);
  function A(g, a, s, c, I) {
    return mA(I - 290, a);
  }
  for (let g = -1732 * -4 + -361 * -1 + 1 * -7289, a = i[n(-227, -242, "6(A)", -244) + "h"]; g < a; g++) {
    if (r(-354, -386, "V@X6", -370, -374) !== A(664, "dA^w", 661, 670, 679)) return _0xd922ea + _0x167786[n(-249, -236, "NAmk", -246) + o("T7sp", 1358, 1352, 1351) + "de"](_0x443b19);
    e[g] = i[r(-339, -349, "2l7p", -335, -354) + n(-280, -291, "jkqa", -283)](g);
  }
  function o(g, a, s, c, I) {
    return mA(c - 972, g);
  }
  function r(g, a, s, c, I) {
    return mA(I - -758, s);
  }
  return t;
}
function vn() {
  const i = ["Dgz9W4b+n8kPiIn5WRXW", "iYyKWP8j", "lSkIWONdMhyHW6NcIZyeW7RcPW", "vCo5W5xdLfKgCSkpqG", "tSoxW77dL0S", "g8o2WQTalSo+xqPUW63dJrq", "BbpcImoEEa", "WOiNwwZdHH/dTSomWPzl", "W6hcVWBcRba", "eKVcICooW5zfWPlcPmozW6y", "W6aldCkraW", "WQ5IW4W2", "dSkQWOJdVKG", "WP/dV8kXfYq", "W4JcVuKQWPW", "W5FdJXFcOmkOW7TOkx5DtIO", "vgjcFmoUpL5HE8oWhCkb", "W5OMihmeW7r+WR/cQCkW", "l8oFW7/cPY1wW5G", "tSk0W70vvq", "W4zPnZpdHG", "WO5cDSoFEa", "W6CTfse", "W7van8keW5S", "hfBcQmo0WRG", "d2JdMaldLmkDW4nUW7JdR1WT", "WQVcH8ogW5nj", "WObwW6BcK8oufCor", "W6tcPqJcSXa", "kJKvkmky", "WOxcNWJcKCk9", "WR7dVKm", "lCk3W5/dImoHWOFcPuBdO8oSpmoBhq", "W5xdIHFcOmorWQDWp3v4", "WRJcLGpcICkF", "geJcI8opWQLYWO/cV8ocW4OS", "a2X9WQX2c8keWRuPktm", "oXxcVCkynCkqdbtdPCkI", "W65SWQiRWRJdH8oYChyDW4ddK8od", "WOuTWPRcMCospCoBzCon", "gSoWWQfkxmkOBJHDW7S"];
  return vn = function() {
    return i;
  }, vn();
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return z(g - -320, I);
  }
  function e(g, a, s, c, I) {
    return z(c - -270, a);
  }
  function A(g, a, s, c, I) {
    return z(I - -528, c);
  }
  function o(g, a, s, c, I) {
    return z(g - 809, s);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(e(18, "gqVR", 28, 1, 14)) / 1 * (-parseInt(o(1076, 1105, "ZlT8", 1090, 1085)) / 2) + parseInt(e(-83, "9T6Y", -75, -51, -28)) / 3 * (-parseInt(e(7, "ghH3", -1, -21, 11)) / 4) + parseInt(A(-259, -230, -274, "2)Za", -255)) / 5 + parseInt(e(-45, "XWsO", -28, -49, -46)) / 6 + parseInt(t(-60, -71, -36, -57, "RA@V")) / 7 * (parseInt(e(24, "e7[8", -30, 0, -25)) / 8) + parseInt(o(1051, 1055, "5nrn", 1059, 1076)) / 9 * (parseInt(e(9, "5Js&", 20, -4, -16)) / 10) + -parseInt(A(-261, -276, -280, "5beB", -265)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mn, 935416);
function Mn() {
  const i = ["WQhdQLVcQuKqW6lcHaPxWQKlWOa", "WQnwWP4U", "WP07WRNdRdy", "WOFdMSoHWP16", "WOPtWRXHW5K", "WR44W5xdPmoibwvxxq", "omoRW60", "D2DeW5f5", "W6SKW7nPdq", "WRD1WRmUvdBcRNqDW68vWPW", "oh7cIL0X", "W73cMSk+ACkbW44pcSoTlYtcTmk/", "WPKGW6tdG351cXBdKZtcTcNdMW", "mZdcSGW", "FfpdRK7dPq", "wX46W6lcLsJcRmogW5tdMq83uW", "W7rLx8kI", "xCoSWPnkha", "ACkIAa", "rColhKa", "WOhdHSo7WP93", "lCoVW7qmW5q", "WOveWQT2W5K", "pciwWPCIW7bTeCkrWOLpWPPQ", "WRPqdSoSWRW", "FWGJWOdcT8kwjG", "W6v0W5fd", "vSoSWOL/cq", "DKXRW7iAiYhcMbaiW6CW", "yCk1AmorlW", "W6XFzLjWW7BdMCoesCoMWPddIYid", "iqO3WQS", "AI7dKbD/WOSfWOu4W4KzWPG", "W6mVW6nOfq", "WOa4cCk0rq", "ACobWP3cRq", "W7XTxSkR", "W47cSCofWPhcG8kfsSok", "jblcG2iZ", "WOVcKSoQsWNdRwFcGSk5", "W73dNSkJBmox", "WR0amrG5", "geD4", "r1a2W5K4", "i8kbAKWV", "stxdKG", "WO3dUZNdJCk4pG9yW4a", "WO3dUCk8WRi", "oGi8WO0", "usxdIsTs", "frf/WP98nSk+oILwo8o8ea", "WOi+fCkpva", "W6f4W45oFa", "emkorrOBWQXOWRpcNsGan2pdMq", "WORdUZBcUmoJwYztW5bzW58W", "zx5tW4bM", "W6K6WPnEW4fJWQ8VFG", "W68JyKhcVeLRsfVcRhBdR8k4", "WPWKW6BdH3PXaYxdLsZcQYFdJW", "WR5NW4byW5y", "WQtcImkos8ozw8oYW50", "W7X2WOK/yYFdPW", "ySooWPpcP8kS"];
  return Mn = function() {
    return i;
  }, Mn();
}
async function JC() {
  const i = {};
  function n(c, I, E, C, x) {
    return z(x - -431, E);
  }
  i[n(-208, -207, "w8N3", -178, -186)] = eI;
  function t(c, I, E, C, x) {
    return z(I - 623, E);
  }
  i[n(-187, -201, "dksP", -177, -194) + "h"] = 256;
  const e = await window[a(186, 143, "0&7X", 160) + "o"][t(867, 882, "SMrz") + "e"][r(583, 634, 613, 645, "H])a") + n(-159, -199, "PLre", -187, -187) + "y"](i, !0, [r(647, 666, 658, 678, "0&7X") + "pt", s(-577, -601, "5nrn", -612, -582) + "pt"]), A = Uint8Array[n(-179, -191, "[TjP", -178, -190)](Array(4377 + 5068 * -1 + 707)[a(158, 135, "^9XZ", 156)](1 * -7354 + -4806 + 64 * 190)), o = window[n(-183, -178, "DFux", -213, -192) + "o"][a(138, 182, "dksP", 157) + t(883, 873, "e7[8") + a(216, 184, "VP!F", 195)](A);
  function r(c, I, E, C, x) {
    return z(E - 382, x);
  }
  const g = {};
  function a(c, I, E, C, x) {
    return z(C - -70, E);
  }
  function s(c, I, E, C, x) {
    return z(x - -802, E);
  }
  return g[t(844, 851, "DFux")] = e, g.iv = o, g;
}
async function UC(i) {
  function n(I, E, C, x, d) {
    return z(C - 288, I);
  }
  const { iv: t, key: e } = await JC();
  function A(I, E, C, x, d) {
    return z(x - 355, C);
  }
  const o = {};
  function r(I, E, C, x, d) {
    return z(C - 577, I);
  }
  function g(I, E, C, x, d) {
    return z(d - 983, I);
  }
  o[r("^9XZ", 807, 823)] = eI, o.iv = t;
  const a = await window[r("h0VZ", 774, 801) + "o"][r("*V17", 856, 852) + "e"][r("9T6Y", 847, 820) + "pt"](o, e, i), s = await window[n("PLre", 536, 549) + "o"][r("VP!F", 791, 794) + "e"][g("@I2S", 1218, 1259, 1243, 1245) + A(645, 602, "O@Zf", 613)](g("V)6L", 1225, 1261, 1245, 1235), e), c = {};
  return c[g("9T6Y", 1220, 1199, 1170, 1201) + "ge"] = a, c[A(588, 605, "SMrz", 610)] = s, c.iv = t, c;
}
function z(i, n) {
  const t = Mn();
  return z = function(e, A) {
    e = e - (7 * 729 + -30 * 266 + 3092 * 1);
    let o = t[e];
    if (z.QfcHBd === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      z.rrTlAs = c, i = arguments, z.QfcHBd = !0;
    }
    const g = t[3739 + 3217 * -3 + 5912], a = e + g, s = i[a];
    return s ? o = s : (z.TcYFuH === void 0 && (z.TcYFuH = !0), o = z.rrTlAs(o, A), i[a] = o), o;
  }, z(i, n);
}
async function YC(i) {
}
(function(i, n) {
  const t = i();
  function e(a, s, c, I, E) {
    return sA(a - 351, s);
  }
  function A(a, s, c, I, E) {
    return sA(c - 6, I);
  }
  function o(a, s, c, I, E) {
    return sA(E - -907, I);
  }
  function r(a, s, c, I, E) {
    return sA(a - -714, I);
  }
  function g(a, s, c, I, E) {
    return sA(I - 440, s);
  }
  for (; ; )
    try {
      if (parseInt(e(600, "Q92#", 589, 642, 553)) / 1 * (parseInt(e(612, "wJn%", 598, 579, 646)) / 2) + -parseInt(e(633, "Q92#", 679, 659, 601)) / 3 + -parseInt(o(-707, -697, -713, "EdSU", -682)) / 4 * (-parseInt(r(-411, -444, -367, "djml", -429)) / 5) + -parseInt(e(649, "cN%E", 631, 650, 676)) / 6 + -parseInt(o(-647, -638, -683, "JIog", -654)) / 7 + -parseInt(r(-471, -482, -468, "W[O(", -506)) / 8 * (-parseInt(A(292, 278, 295, "!AoT", 297)) / 9) + parseInt(g(768, "djml", 737, 732, 720)) / 10 * (parseInt(g(660, "!AoT", 691, 673, 714)) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Wn, 7408 * 43 + 23675 * -23 + 746588);
const TC = 8708 + 1 * 1852 + -135 * 56, PC = 1 * 6751 + -853 * -2 + -1457, sI = -1 * -5497 + -2229 + -3265, II = -857 * 9 + -4674 + 3 * 4129 + 0.5, cI = {};
cI[kA(650, 612, "S8%J", 696, 654)] = 1280;
const CI = {};
CI[YA(-595, -602, -639, "OP^%")] = 720;
const BI = {};
BI[oA(-745, -730, "XaF1", -748, -716)] = 60;
const In = {};
In[oA(-722, -781, "YblW", -784, -769)] = cI, In[jA(312, "YblW", 281, 321) + "t"] = CI, In[YA(-584, -554, -585, "YblW") + kA(680, 686, "9q7k", 669, 653)] = BI;
const QI = {};
QI[vA(-106, -78, "KmIn", -102, -96)] = 1920;
const EI = {};
function Wn() {
  const i = ["W7KpWReqW5W", "WO7cOCoRW5bRyCogA8ow", "hhjgWRqq", "W4vsW5hcGLyDW6q", "fCojW5uP", "WRFcSmkbvq", "B2K6iCkEjSomz8kb", "wadcISktW5S", "W48TWOtdOs9bWQrnWQZdLCkPW5RcGq", "gxrlWRq", "xGD1sW", "z8kwBvNcIG", "hLGNW6tdNW", "W7nwvqy3jCoGWO/cKmoWkColwG", "W6ZdIfpcQ20", "x8ojlmoHeCoUWPpdGSkF", "eSoRWQFcHmoO", "W57dPCk4W7r/", "W5xcQvu", "xI45", "y8oUW5zhAq", "WOjat8kFWPm", "DSoKW55jFa", "wmojk8kfymkrWP7dPSk+u0yj", "qWH5udS", "W54ph8olW5fdW7JdKciuWODl", "W5ddILauWPC", "rCoMWPtcSSksWQiXoSk2W4FcHfvp", "xcFdM8kIgG", "yXnVwG", "W4FdGmod", "WOpcSmkgra", "qs0HWPC", "WRFcO8ktthW", "eYz+zrZcTse", "WPJcG8kafL9dau1+", "umkZua", "Fmkjk3OaECohm14", "zcJdOSoNW4a", "WP93ymoeha", "evGN", "rqdcISkJ", "wrtcGSkYW70", "DCozFaX1W7DOhmoEW4BcQ8kvDq", "WOhcLsL7WRG", "WOFcNeVdNSkC", "g3DRWPyC", "W6/cVbJdJ1u", "F8kjlr5WcmoymMhcNWxcNq", "b8kJW6ddS8ox", "wq16vbe", "W5FcSLJdOCkA", "wbvFxJK", "WQhcO8kBthG", "fCoTeSk2W49wgCkjWO8gW55ftG", "W6FcRGddKvy", "d2HUWPGr", "WPv8W5BcT3e", "WQ3cPCoaxG", "W7niW5f/W5S", "rbHV", "W65QW4jUW7i", "WPBcH07dH8kr", "WPTQDSorhq", "lSogW5u/", "CCoDx8kBrSk5WR8", "k8oFAfK", "W7ntWOZcMtm", "WP7cLsvgWRi", "Dmo3W4nnCG", "jCo+wa", "zanOssy", "c8kTcCodWRq", "g1WKcgddQ25GcCkjg8keaq", "W6jhl0VdQq", "rCkOs8oTWPy", "EmkHf8ogaSoOW6ZcKmkbW4OcWOZdGq", "W6ldN1VcOwa", "WQhcLsL3", "tW3cHCk0W5O", "W5biuHm", "hCkZW4hdP8oj", "W7bqah3dTa", "WO8EefbPW4aeWRCjWRVdI8kX", "WPlcHYK", "a3zqWRa", "a8kAEmoxoa", "qSk9tSoUWPO", "tmkBW5tdOSowW7zG", "qCoGWPxdKCoGW5THamk7", "xCkZWQZcV8o0", "W5pcS0NdTe8", "d8kgFmovia", "bNj6W5ddRhv6W5zTW5pcImkuW5i", "WONcI0pdLmkr"];
  return Wn = function() {
    return i;
  }, Wn();
}
EI[vA(-71, -110, "OP^%", -45, -67)] = 1080;
const Ln = {};
Ln[YA(-573, -561, -539, "V3p7")] = QI, Ln[kA(599, 586, "jQJL", 612, 615) + "t"] = EI;
function vA(i, n, t, e, A) {
  return sA(A - -313, t);
}
Ln[jA(348, "th&v", 374, 339) + vA(-27, -44, "pR$7", 4, -27)] = 30;
const xI = {};
xI[kA(634, 673, "jXjP", 583, 627)] = 1;
const dI = {};
dI[kA(689, 645, "4pWk", 622, 664)] = 1;
const lI = {};
lI[jA(333, "OP^%", 365, 319)] = 1;
function YA(i, n, t, e, A) {
  return sA(n - -854, e);
}
const cn = {};
cn[vA(-55, 27, "A[]Q", 13, -19)] = xI, cn[kA(597, 620, "9q7k", 578, 619) + "t"] = dI, cn[oA(-715, -738, "pR$7", -723, -703) + oA(-714, -708, "QZt[", -710, -732)] = lI;
const uI = {};
uI[oA(-694, -699, "!AoT", -735, -712)] = 1;
const hI = {};
hI[YA(-598, -613, -641, "Q92#")] = 1;
const fI = {};
fI[jA(373, "[X&X", 330, 348)] = 1;
const Cn = {};
Cn[oA(-749, -764, "c2zl", -753, -741)] = uI, Cn[vA(-33, -63, "4W6x", -47, -44) + "t"] = hI, Cn[jA(301, "4W6x", 326, 304) + jA(263, "xiHD", 349, 305)] = fI;
function sA(i, n) {
  const t = Wn();
  return sA = function(e, A) {
    e = e - (1 * 3939 + 7641 + 7 * -1624);
    let o = t[e];
    if (sA.rPfwGN === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      sA.tdERRp = c, i = arguments, sA.rPfwGN = !0;
    }
    const g = t[1 * 349 + -14 * -254 + -55 * 71], a = e + g, s = i[a];
    return s ? o = s : (sA.bqohFR === void 0 && (sA.bqohFR = !0), o = sA.tdERRp(o, A), i[a] = o), o;
  }, sA(i, n);
}
const Co = {};
Co[oA(-722, -728, "djml", -749, -765)] = In, Co[jA(260, "[uId", 289, 286) + vA(-50, -56, "X6!s", -8, -18)] = Ln, Co[YA(-589, -590, -582, "][FE")] = cn;
function kA(i, n, t, e, A) {
  return sA(A - 388, t);
}
Co[jA(332, "&G8p", 349, 373) + vA(-49, -128, "EdSU", -41, -83)] = Cn;
const On = Co, Ft = {};
function jA(i, n, t, e, A) {
  return sA(e - 67, n);
}
Ft[jA(299, "xiHD", 329, 295) + oA(-700, -647, "Q92#", -683, -687) + kA(592, 624, "%5Tm", 640, 623)] = TC, Ft[kA(554, 632, "pR$7", 636, 601) + vA(-76, -115, "!AoT", -124, -101) + oA(-784, -778, "A[]Q", -751, -768) + vA(-25, -60, "&HEL", -46, -28)] = On[kA(645, 651, "W[O(", 591, 628)];
function oA(i, n, t, e, A) {
  return sA(A - -991, t);
}
Ft[oA(-753, -794, "nnor", -771, -776) + YA(-564, -612, -577, "Y@6i") + kA(645, 637, "X6!s", 632, 655) + vA(-136, -56, "QZt[", -126, -89)] = On[vA(33, -56, "!AoT", -26, -8) + YA(-593, -610, -614, "xiHD")], Ft[vA(-74, -33, "c4nc", -37, -42) + oA(-712, -670, "9q7k", -708, -707)] = sI, Ft[jA(348, "#Yr)", 363, 318) + oA(-735, -763, "XaF1", -759, -762) + jA(256, "[uId", 253, 288) + vA(-44, -59, "6TId", -47, -81) + kA(700, 653, "%5Tm", 724, 679)] = II;
const kt = {};
kt[oA(-687, -745, "G%yy", -662, -708) + kA(575, 597, "Y@6i", 642, 622) + YA(-612, -619, -646, "%5Tm")] = PC, kt[kA(624, 627, "XaF1", 661, 665) + kA(570, 647, "9mWz", 628, 604) + YA(-628, -599, -569, "fY)k") + jA(314, "!AoT", 255, 287)] = On[kA(692, 650, "JIog", 650, 675)], kt[oA(-783, -754, "%5Tm", -714, -744) + vA(-63, -71, "9mWz", -84, -56) + oA(-651, -714, "nnor", -722, -689) + oA(-712, -771, "][FE", -771, -746)] = On[vA(21, 32, "jXjP", -31, -16) + YA(-609, -580, -543, "JIog")], kt[oA(-747, -733, "c4nc", -677, -720) + oA(-713, -689, "jXjP", -685, -695)] = sI, kt[YA(-565, -592, -585, "jXjP") + YA(-522, -555, -572, "xiHD") + jA(247, "[uId", 250, 288) + oA(-730, -732, "9mWz", -675, -690) + YA(-562, -581, -594, "#Yr)")] = II;
const pr = {};
pr[YA(-625, -594, -593, "pR$7")] = Ft, pr[kA(622, 623, "gsN&", 645, 606)] = kt;
const HC = pr;
function nA(i, n, t, e, A) {
  return xA(i - 411, t);
}
function Jn() {
  const i = ["WORdVmkuW4Pq", "hsOMzxO", "Cmk5W7ZcQCoP", "D8kMo8o/bG", "CCoVoSoNkq", "F8ooWQldQqe", "WPvCWOVcSSkJ", "WPZdRmkmW7Dw", "E8kUW648WQW", "lmo0WRhcMCoW", "W5u5WRJdQ8oQ", "vmkyW7hcILu", "eSoIWQunba", "DulcPSouCG", "WQvhWPZcRCkY", "ESkHW4DYymoTBCoAW4dcKwHxpG", "aSkwzmkRW4i", "c8kCACkS", "qCoyW7ZcImoOWQxcThpdVMT/Fa", "EWdcV8ouzq", "BCkQeCohfq", "fCoEq8k1WOO", "W7ZcMSoEhGq", "qSk/W5xcJGG", "W7ldKSoy", "WRtdR8o6WPNcTW", "WRxdR8o6WOJcSa", "WRCFnWFcHG", "EG3cOG", "w8kMW5dcIa4", "WQytnHRcGq", "WReDmqxcHG", "BNyuW4tcIa", "nhdcL047", "FSkGW4fXz8oLy8ohW4xcKu1TaW", "fmkiWRddRCkP", "W6dcVL5kcW", "hgKcegO", "d8oRWPZdLSor", "igRcI1GZ", "aSoBWQu", "FSkzW7pcKe8", "WOnqWRlcS8k7", "AmkuWOvfyq", "xdiNDSkW", "zCopm8kjqG", "rY0TCG", "cCkpW6HpWOa", "WQldLSo0WOlcJG", "ECoFWRG", "hSonWOldHCol", "WOtcQKpdHX0", "mSoTW71Zma", "cu0fp28", "AmkxW6NcILq", "gSkdWQ3dJmo6", "E8kFW6S", "b8ozvmkvWPG", "ts1BW7NdJa", "WOCOWOu", "WRddKcTkpq", "WRevnG7cHG", "evlcQ1Ot", "W4ORW7VcH3y", "d8kRB8kRW4m", "W5y7WQBdQCog", "ghTWi8o8usNdRNhdUSoTWOXB", "EmojWQhdQWO", "WQTvr2LP", "tmktW7vuW5i", "WQddSSoAWOJcQq", "W5aLWO7dOmo5", "amkzWR3dLmk/", "iSoEW5z2W4O", "gZq7vt8", "WQhdRSkTW4TW", "imo1WOZcGmoN", "u8k5WRqJWQe", "WQGzkG7cKa", "EXlcOCo1yW", "FSkAWP9FEG", "WQpcRCkiWP8Ll3xdRK8HWQ5CWQe", "W6pdUSovW4DJ", "bCotW75SdW", "BSkbWOHaAW", "W6RcNrTDW6e", "Bmk3W6yXWQW", "bmkeWQddJmkY", "hKKamMC", "zmoZjSoofW", "W7lcR08", "cCoTWOFdN8og", "vW3cU8ocCG", "q8o9j1BcJq", "WRhdQr8VxmoOlSkCtSkRWQxdNwu", "oKmAaNi", "sI0TzmkW", "z8kSW5hcOmoS", "mtuNtxS", "W4vKW78", "nbngWOtdHsBdOH8DsNeJ", "wSk3W5ZcJG", "udvtW5y", "WR0ZWPNdTbO", "adS7t2S", "rYXoW4ddSa", "lCoNWPChmW", "kmoIWOZcJSoq", "W7JdQ8k9W53cNa", "W6JdV8kMW5dcMW", "W5LOW6FcJhe", "qCk7WQG9WQu", "aJ8Gr3a", "W7JdU8k5W5xcIW", "ACoLomkMqW", "v8kgWRu", "WPBdRSkwW7T8", "aSoEW5z2W4O", "W6PuWPvUva", "iSkwzmkRW4i", "omodW7jncG", "xvlcQghdNa", "D8kLW4aPWR0", "yCk7WQm0WQe", "Ae4L", "WQmIWO/dUbO", "bmkyW7nhWPO", "W5tcKCoobqW", "fSkKWQRdNSk1", "W7dcSmkNW5VdRmoxcs00W7X4WQ/dHW", "DmkfW5lcLv4", "f00zfa", "omoTWOFdNCog", "W5KQWQ/dVSoU", "dSoXWQqLhG", "W5y9WQFdQq", "W6XwWRbUua", "B1qfW7pcMa", "uZvDW5JdTW", "DW3cU8ocCG", "WPWMWOldVW8", "w8kHWRGLW6a", "W6VcLCodaHK", "r8o9iK3cMa", "rSk9WRa4WQ4", "iSoGWRmdaG", "pmo2WOaIpq", "WR/dNuOBWRuEzKhdHaBcJbxcLW", "kCoRWOy2mW", "ugaxW4pcTG", "W61EW4RcSgy", "BMySW5NcLa", "fLWanwm", "W6pdVSooW4PK", "BCk3W7S", "FCoJWOO", "W7PyWO1Gra", "W6/cJGHgW6m", "W7xdU8oNW4BdG8kAWPC", "W59UW7RcG3y", "W6RcRL58cG", "WQRdGYDg", "zwehW5BcKq", "FCkKW6O+WQW", "adK9t2W", "nYxdGK3dIq", "WQxdMSodW5pdOa", "qmoDW6hcU8kW", "WP3dU8kiW7fh", "ECkqWODfBq", "WQJdMCosW5NdOa", "WQ/dP8o8WOJcSW", "W51sWPv6uW", "W45ZW6NcGxy", "CsVcSq", "WOZcQ3tdKGO", "adCZt3W", "n1BcI201", "W7NdPSkUW5/cNa", "C8k6mCooda", "W45eW7JcLMS", "eCkyE8kwW58", "WOdcOf8", "bSoIW4lcVXz1W4TI", "v8k9WQm+WRi", "zeehW57cNG", "l8oYWP8Hia", "hdS/ra", "WPVdPSkuW61b", "vSoulmoTaq", "W5H/W6NcKhy", "kCoArCkiWOS", "scSTCSkG", "ECktW6VcILG", "EWZcPG", "W6tdVSoiW6H/", "W5LQW6hcJhy", "r1lcPLFdSW", "WQVdLSodW4JdVG", "W7xdKJi", "uCkLW4tcHXm", "W6JcTvK", "m8oeW5zwW5C", "W4SOWRpdOmoQ", "Dmk0W7tcVa", "WRhdP8o3WOpcQW", "EwyOW5dcLq", "W7T0WP8", "W73cGHPkW68", "EHhcOCodzW", "jN7cJgCP", "emkzWR3dRmo3W4hdQSo3WONdVCkFW4ZcPa", "t1uuW7JcJa", "WO3dRCkQW5ru", "jCouW45SW50", "a8kcWQ3dLSkU", "W6XiWPvDqG", "wuiBbsy", "huKcggu", "sSoTamoW", "vLtcVvBdPG", "W59IW6FcJfa", "n8kgW6S", "oSo6WPyHpq", "f8o9WRifba", "W7CQWQ/dVSoS", "FSoeWQu", "fmonsCkuWPW", "n8oQWP/cGCo2", "W5W5WRZdPCoS", "W63cIG1B", "W6JdRmkUW5xcHG", "WPtdVmowW4JdHW", "W5JdP8kvW6Ov", "rvydW5JcJW", "bSoOWOVcG8oX", "l8oqW5zggG", "wCkqWODfBq", "jSksW7JcULhdRSo8xmkRW6KZW75/", "ACk9W6FcPa", "W5X0W5JcPe4evGBcKZ7dTtHM", "tsC1FSkN", "DqVcU8ouyG", "wCkZW5xcGGy", "WQRdQmoQWP4", "iJ7dG0NdKG", "WQZdTSoQWQNcUG", "dmkCEmk/W5m", "W504WO/dVSo9", "w8o9jKy", "W7NdSmk7", "W5T+W7VcIG", "EmknWOvEBW", "W67cNCoogau", "wSkQWRG2WQG", "W4O9WQpdOSo7", "EmkxWQmttmkiWRq/W5uyW6tcVG", "lSohW45DW5C", "ACoEe8k2sq", "tSokW7BcVCkH", "WQn5w2HJ", "W4jKW6y", "bSkjWPtdSSk7", "WRmvpaZcMG", "xSojW6L0WOnWW41N", "uSkaW60UWPq", "rZXkW4JdPW", "WQJdGZm", "umovjuxcGW", "WRpdRb0QvSoJtmkmumk4WQVdKG", "WRvCWOVcSSkJ", "lCoqW5PGW5i", "as4Zu2S", "bSkCFSklW5m", "ehZcV3ar", "ih7cJguU", "fYWZtwO", "W45VW43cKha", "W5JcJgBdMJFdICkL", "WQddNCogW5xdRW", "F8oqa2tcUa", "WRjexgbR", "WPPLWOFcSmkB", "CSkyW67cL0K", "WQn1wwTH", "WORcRLZdHqO"];
  return Jn = function() {
    return i;
  }, Jn();
}
function WA(i, n, t, e, A) {
  return xA(n - 78, A);
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return xA(a - -723, g);
  }
  function e(g, a, s, c, I) {
    return xA(a - 283, c);
  }
  function A(g, a, s, c, I) {
    return xA(I - -705, a);
  }
  const o = i();
  function r(g, a, s, c, I) {
    return xA(I - 800, c);
  }
  for (; ; )
    try {
      if (parseInt(e(730, 851, 911, "^kB4", 873)) / 1 * (parseInt(A(-295, "va2n", -87, -272, -195)) / 2) + -parseInt(t("x5so", -130, -31, -91, -148)) / 3 * (-parseInt(A(51, "De@X", -107, -21, -39)) / 4) + -parseInt(r(1442, 1517, 1545, "vfjM", 1421)) / 5 + parseInt(r(1355, 1347, 1111, "2PId", 1244)) / 6 + parseInt(e(756, 759, 843, "ik)C", 790)) / 7 + -parseInt(t("2PId", -298, -440, -364, -163)) / 8 + parseInt(A(-163, "oABo", -128, -147, -214)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Jn, -763577 * -1 + -3277 * 91 + -5020 * 10);
function xA(i, n) {
  const t = Jn();
  return xA = function(e, A) {
    e = e - (-1781 * -1 + -66 * -103 + -8194);
    let o = t[e];
    if (xA.dgmycu === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      xA.eUvVRU = c, i = arguments, xA.dgmycu = !0;
    }
    const g = t[1 * 6310 + -3407 + -2903 * 1], a = e + g, s = i[a];
    return s ? o = s : (xA.EAAMpF === void 0 && (xA.EAAMpF = !0), o = xA.eUvVRU(o, A), i[a] = o), o;
  }, xA(i, n);
}
function CA(i, n, t, e, A) {
  return xA(i - 150, A);
}
function fA(i, n, t, e, A) {
  return xA(A - -405, n);
}
function BA(i, n, t, e, A) {
  return xA(e - 60, A);
}
var cs, Cs, De;
class KC {
  constructor(n = {}) {
    O(this, De);
    p(this, Cs, []);
    p(this, cs, {});
    function t(A, o, r, g, a) {
      return BA(A - 336, o - 180, r - 50, g - 283, o);
    }
    F(this, De, HC);
    function e(A, o, r, g, a) {
      return nA(a - -330, o - 157, A);
    }
    this[t(638, "14g6", 869, 765) + t(851, "j^MA", 894, 803) + e("oo!s", 668, 655, 674, 692)](n);
  }
  [(Cs = CA(697, 702, 791, 745, "va2n") + BA(463, 617, 615, 501, "Gme9"), cs = CA(699, 688, 633, 643, "b$Xe") + fA(3, "[)M0", 151, 46, 145) + "s", fA(163, "5ax5", 393, 209, 257) + nA(891, 790, "$6j#") + BA(569, 640, 588, 515, "&aZZ") + "fo")](n) {
    const t = fr(n);
    function e(s, c, I, E, C) {
      return fA(s - 38, I, I - 429, E - 175, c - 156);
    }
    function A(s, c, I, E, C) {
      return nA(I - -273, c - 438, c);
    }
    const o = t == null ? void 0 : t[a(-29, 111, 61, "8mfY") + A(541, "S5&b", 543) + "s"]();
    function r(s, c, I, E, C) {
      return CA(s - 163, c - 353, I - 127, E - 22, c);
    }
    if (!(o != null && o[A(752, "xtk%", 674) + "t"]) || !(o != null && o[e(190, 186, "$6j#", 174)]) || !(o != null && o[g(973, 1115, 1104, 1149, "4XTc") + a(158, 90, 76, "b$Xe")]))
      if (A(480, "j!0@", 606) !== e(299, 282, "F2a7", 347)) _0x2f791d = this[e(187, 212, "W9r&", 316) + A(531, "cf%X", 643) + a(180, 184, 57, "7iqo") + "s"](this[r(819, "ik)C", 740, 707) + a(-27, 69, -14, "Ne(D") + "s"], _0x24169a), _0x4e1e17--;
      else throw new w(e(376, 396, "j$F^", 531) + g(1032, 1179, 1164, 1181, "cf%X") + e(169, 216, "@@0(", 251) + r(722, "W9r&", 691, 612) + r(736, "b$Xe", 740, 841) + e(310, 222, "Gme9", 362));
    function g(s, c, I, E, C) {
      return CA(I - 387, c - 152, I - 460, E - 316, C);
    }
    function a(s, c, I, E, C) {
      return WA(s - 223, s - -504, I - 176, E - 485, E);
    }
    if (t)
      if (e(392, 342, "8mfY", 352) === A(656, "cf%X", 601)) {
        const s = {};
        return s[A(677, "lKX0", 797)] = t[a(154, 142, 134, "^kB4")], s.id = o[A(416, "2E&B", 555) + A(629, "oABo", 572)], s;
      } else {
        const s = {};
        return s[r(875, "cf%X", 1018, 780) + r(805, "oABo", 863, 876)] = this[A(672, "$6j#", 794) + a(93, 48, 21, "ffyP")], s[r(869, "2PId", 844, 900) + e(265, 337, "0IJJ", 261) + "e"] = !1, s;
      }
  }
  async [nA(1011, 1093, "7iqo") + WA(688, 613, 498, 556, "[)M0") + fA(248, "fjrn", 237, 171, 128) + "m"](n) {
    const t = document[o(-337, -140, -269, -261, "IX1*") + g(1032, "S5&b", 1020, 1064) + o(-87, -101, -182, -67, "ffyP")](o(-358, -514, -455, -394, "Gme9"));
    t[o(-514, -409, -375, -405, ")L6%") + o(-452, -451, -451, -550, "]DH4")] = !0;
    function e(s, c, I, E, C) {
      return nA(C - -892, c - 202, I);
    }
    t[o(-362, -383, -272, -250, "oo!s")] = !0;
    function A(s, c, I, E, C) {
      return WA(s - 92, I - 723, I - 432, E - 197, s);
    }
    t[e(83, 75, "j!0@", -65, 67) + a("^okk", 643, 494, 564, 631) + "e"] = !0, t[o(-429, -330, -418, -560, "podd")][e(117, 213, "14g6", 18, 153) + A("W9r&", 1319, 1393, 1403)] = e(-44, 238, "^kB4", 86, 95) + e(-12, 36, "oo!s", 75, 19), t[g(1106, "@@0(", 1203, 1039)][a("x5so", 738, 716, 549, 649) + "ty"] = "0", t[a("5ax5", 619, 689, 780, 704)][o(-359, -259, -217, -251, "@@0(") + g(1292, "&aZZ", 1341, 1259) + o(-335, -323, -383, -353, "N1e8")] = o(-380, -510, -386, -331, "ik)C"), t[A("fjrn", 1357, 1322, 1424)][A("@@0(", 1313, 1298, 1220)] = a("]DH4", 742, 713, 878, 819);
    function o(s, c, I, E, C) {
      return BA(s - 451, c - 220, I - 341, I - -902, C);
    }
    t[o(-369, -123, -229, -123, "w2sl")][a("N1e8", 611, 594, 750, 625) + "t"] = o(-173, -415, -277, -182, "2PId");
    const r = await navigator[g(1277, "x5so", 1363, 1370) + e(76, 33, "5ax5", 104, 166) + "es"][e(-5, 80, "@@0(", -91, -36) + e(51, 247, "De@X", 80, 165) + "ia"](n);
    t[o(-451, -349, -411, -402, ")L6%") + A("8mfY", 1138, 1228, 1137)] = r;
    function g(s, c, I, E, C) {
      return fA(s - 244, c, I - 114, E - 252, s - 1029);
    }
    await t[g(1238, "1wGx", 1355, 1326)]();
    function a(s, c, I, E, C) {
      return CA(C - 60, c - 213, I - 63, E - 493, s);
    }
    return r;
  }
  async [nA(811, 706, "0IJJ") + BA(683, 614, 681, 576, "2PId") + BA(838, 739, 692, 709, "1wGx")]() {
    var c, I;
    if (!gn()) {
      if (A(735, 733, 689, "podd") === A(598, 623, 672, "IX1*")) return;
      throw new _0x8888c6(r(-67, -120, -240, "0IJJ", -197) + r(-171, -257, -268, "xtk%", -226) + A(862, 817, 767, "0IJJ") + o("p%z5", 858, 696, 839) + e(788, 634, 670, "7iqo") + o("j^MA", 628, 625, 726));
    }
    const n = await this[e(705, 479, 607, "2E&B") + "st"](D(this, De)[t(958, 1029, 1090, 925, "4XTc")]);
    function t(E, C, x, d, l) {
      return nA(C - -22, C - 149, l);
    }
    function e(E, C, x, d, l) {
      return CA(x - 47, C - 454, x - 366, d - 448, d);
    }
    function A(E, C, x, d, l) {
      return CA(x - 133, C - 2, x - 452, d - 322, d);
    }
    function o(E, C, x, d, l) {
      return nA(d - -133, C - 179, E);
    }
    function r(E, C, x, d, l) {
      return WA(E - 227, l - -783, x - 86, d - 298, d);
    }
    const g = await this[A(793, 856, 909, "TcW3") + "st"](D(this, De)[e(666, 769, 709, "j!0@")]), a = ((c = n[o("ik)C", 839, 1032, 929) + A(806, 759, 821, "@@0(")]) == null ? void 0 : c[o("]DH4", 762, 759, 849)]) + r(12, 2, -142, "N1e8", -73) + ((I = g[e(897, 722, 763, "TcW3") + A(974, 1085, 953, "S5&b")]) == null ? void 0 : I[A(767, 715, 824, "cf%X")]), s = await this[A(917, 911, 858, "8Nq6") + r(-205, -115, -380, "cf%X", -258) + e(745, 688, 661, "^okk") + t(766, 831, 828, 904, "va2n") + "lt"](a, n[t(797, 884, 817, 968, "4XTc") + "ge"], g[e(789, 675, 684, "fjrn") + "ge"]);
    this[r(-276, -215, -102, "b$Xe", -216) + o("p%z5", 759, 874, 894)][r(-104, 4, -117, "7iqo", -44)](s);
  }
  async [fA(-78, "XfH6", -68, 76, 8) + "st"](n) {
    function t(h, m, k, y, G) {
      return fA(h - 24, k, k - 92, y - 321, m - 1125);
    }
    const { fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: g } = n;
    let a = 2 * -496 + -6070 + -2354 * -3;
    function s(h, m, k, y, G) {
      return WA(h - 257, h - 191, k - 261, y - 279, k);
    }
    let c = r, I;
    function E(h, m, k, y, G) {
      return nA(y - -1157, m - 438, m);
    }
    let C = this[x(625, 411, "S5&b", 531) + E(-177, "TcW3", -129, -164) + t(1243, 1357, ")L6%", 1330) + "s"](this[x(506, 634, "^okk", 504) + Q(1314, 1405, 1341, 1475, "IX1*") + "s"], o);
    for (let h = -49 * 91 + -205 * 26 + 251 * 39; h < r; h++)
      if (x(442, 441, "podd", 505) !== E(-290, "P71C", -397, -332)) {
        const m = {};
        return m[x(628, 474, "xtk%", 510)] = _0x3f75d3, m;
      } else {
        if (a > A * g)
          if (E(-146, "7iqo", -44, -186) !== s(741, 680, "[8re", 760)) {
            c = h;
            break;
          } else return;
        const m = await this[t(1297, 1332, "j!Oa", 1415) + s(795, 893, "2E&B", 917) + E(-90, "oABo", -58, -183) + x(776, 823, "N1e8", 689)](C);
        if (m[Q(1624, 1487, 1515, 1586, "2E&B")]) {
          if (t(1147, 1124, "lKX0", 1106) === x(406, 570, "$6j#", 511)) this[t(1110, 1146, "8mfY", 1236) + x(691, 553, "7iqo", 659) + "s"] = _0xd41d12;
          else if (this[t(1147, 1260, "^okk", 1386) + t(1153, 1294, "0IJJ", 1310) + s(910, 1037, "ffyP", 888) + x(592, 692, "W9r&", 638) + "or"](m[Q(1509, 1503, 1495, 1584, "fjrn")]))
            if (E(-356, "XfH6", -264, -316) !== E(-146, "w2sl", -157, -265)) {
              const k = { ..._0x24cb60 }, y = k, G = { ...typeof y[E(-263, "XfH6", -55, -157)] == E(-228, "N1e8", -345, -269) + "t" ? y[E(-335, "$6j#", -242, -310)] : {}, ..._0x1f61f0 }, S = G;
              if (_0x541a8b) {
                const U = {};
                U[s(687, 546, "IX1*", 746)] = _0x184b91, S[E(-245, "5ax5", -129, -167) + x(690, 592, "TcW3", 670)] = U;
              }
              return y[E(8, "4XTc", 11, -128)] = S, y;
            } else C = this[t(1511, 1389, "vfjM", 1526) + E(-239, "b$Xe", -202, -244) + t(1337, 1335, "$6j#", 1419) + "s"](this[t(1146, 1160, "Gme9", 1203) + E(-83, "[)M0", -174, -196) + "s"], e), h--;
        }
        if (m[E(-222, "^kB4", -469, -343) + t(1241, 1112, "lKX0", 986)])
          if (Q(1320, 1402, 1456, 1377, "De@X") === s(891, 748, "va2n", 1012)) ({ deviceInfo: I } = m);
          else {
            const k = _0x2a8eb8(_0x166296), y = k == null ? void 0 : k[Q(1239, 1355, 1475, 1336, "oo!s") + t(1215, 1327, "F2a7", 1402) + "s"]();
            if (!(y != null && y[s(933, 845, "fjrn", 850) + "t"]) || !(y != null && y[x(621, 780, "8W[2", 716)]) || !(y != null && y[s(792, 864, "ffyP", 699) + E(-389, "14g6", -372, -296)])) throw new _0x4c4b1d(x(529, 629, "j^MA", 595) + t(1285, 1363, "2E&B", 1431) + x(718, 503, "fjrn", 604) + E(-137, "2PId", -208, -150) + t(1290, 1219, "XfH6", 1154) + s(797, 684, "TcW3", 736));
            if (k) {
              const G = {};
              return G[s(814, 751, "w2sl", 864)] = k[E(-255, "$6j#", -236, -165)], G.id = y[x(606, 679, "w2sl", 692) + s(853, 988, "b$Xe", 828)], G;
            }
            return;
          }
        a += m[E(-262, "j!0@", -294, -231) + s(738, 698, "[)M0", 863)] || 6709 * -1 + 1715 + -2 * -2497;
      }
    function x(h, m, k, y, G) {
      return fA(h - 219, k, k - 92, y - 14, y - 458);
    }
    const d = Math[E(-346, "j^MA", -379, -245)](a / (c || 9233 * 1 + -6534 + -2698 * 1));
    this[x(475, 401, "j!Oa", 536) + x(588, 570, "[)M0", 603) + "s"] = this[t(1300, 1208, "Gme9", 1143) + x(593, 719, "j!Oa", 580) + t(1257, 1385, "w2sl", 1453) + "s"](this[E(-259, "5ax5", -212, -256) + E(-341, "0IJJ", -249, -232) + "s"], {}, I == null ? void 0 : I.id);
    const l = {};
    function Q(h, m, k, y, G) {
      return BA(h - 464, m - 349, k - 432, m - 849, G);
    }
    return l[E(-216, "w2sl", -70, -203) + "ge"] = d, l[s(893, 796, "j!Oa", 959) + x(469, 578, "&aZZ", 577)] = I, l;
  }
  async [WA(488, 527, 630, 485, "Ne(D") + fA(28, "w2sl", -22, -13, 70) + WA(555, 647, 774, 603, "7iqo") + WA(533, 642, 654, 605, "1wGx")](n) {
    function t(a, s, c, I, E) {
      return WA(a - 217, s - -323, c - 497, I - 182, c);
    }
    function e(a, s, c, I, E) {
      return CA(s - -402, s - 23, c - 299, I - 14, a);
    }
    function A(a, s, c, I, E) {
      return nA(I - 434, s - 108, s);
    }
    const o = Date[t(272, 264, "7iqo", 380)]();
    function r(a, s, c, I, E) {
      return CA(c - 245, s - 150, c - 448, I - 96, I);
    }
    function g(a, s, c, I, E) {
      return WA(a - 261, c - -290, c - 8, I - 343, I);
    }
    try {
      if (t(341, 378, "2E&B", 333, 348) !== A(1207, "@@0(", 1123, 1231, 1129)) {
        const a = {};
        a[e("7iqo", 331, 226, 458, 409)] = _0x5d01a9, _0x39a395[A(1397, "va2n", 1404, 1440, 1331) + A(1348, "p%z5", 1522, 1379, 1409)] = a;
      } else {
        const a = await this[A(1201, "0IJJ", 1150, 1241, 1335) + t(429, 292, "8W[2", 284, 413) + r(979, 924, 908, "[)M0", 970) + "m"](n), s = Date[t(55, 193, "b$Xe", 247, 331)]() - o, c = this[e("2PId", 306, 214, 164, 235) + A(1434, "1wGx", 1209, 1352, 1494) + e("14g6", 292, 252, 264, 189) + "fo"](a);
        sn(a);
        const I = {};
        return I[g(246, 407, 306, "ffyP", 275) + t(51, 140, "7iqo", 118, 192)] = s, I[r(1019, 905, 1023, "cf%X", 929) + A(1498, "Ne(D", 1361, 1432, 1473)] = c, I;
      }
    } catch (a) {
      if (t(289, 153, "[8re", 78) !== t(229, 354, "P71C", 416)) ({ deviceInfo: _0xdd911c } = _0x5bd7ea);
      else {
        const s = {};
        return s[A(1580, "F2a7", 1486, 1475)] = a, s;
      }
    }
  }
  [BA(452, 548, 474, 592, "IX1*") + BA(657, 591, 642, 580, "7iqo") + CA(620, 634, 565, 666, "]DH4") + CA(551, 547, 522, 582, "7iqo") + "or"](n) {
    function t(o, r, g, a, s) {
      return BA(o - 460, r - 320, g - 470, r - 518, o);
    }
    function e(o, r, g, a, s) {
      return CA(o - -1067, r - 160, g - 73, a - 15, a);
    }
    function A(o, r, g, a, s) {
      return fA(o - 287, s, g - 202, a - 393, g - -46);
    }
    return n instanceof DOMException && n[e(-288, -370, -379, "P71C")] === A(198, 212, 150, 184, ")L6%") + A(84, -63, -44, -106, "^okk") + A(197, 269, 151, 33, "ik)C") + t("va2n", 1222, 1271);
  }
  async [WA(638, 655, 696, 553, "vfjM") + BA(762, 724, 694, 632, "va2n") + BA(385, 598, 561, 513, "5ax5") + nA(885, 998, "8mfY") + "lt"](n, t, e) {
    return { optSetting: await YC(), afterOpt: t, beforeOpt: e };
  }
  [nA(865, 755, "ik)C") + WA(533, 668, 709, 579, "7iqo") + nA(1015, 995, "b$Xe")](n) {
    function t(A, o, r, g, a) {
      return BA(A - 111, o - 35, r - 55, o - 613, A);
    }
    function e(A, o, r, g, a) {
      return nA(g - -1248, o - 290, o);
    }
    Object[e(-520, "8W[2", -498, -405) + "es"](n)[e(-341, "Ne(D", -428, -394) + "ch"](([A, o]) => {
      function r(I, E, C, x, d) {
        return e(I - 463, C, C - 290, d - 1190);
      }
      function g(I, E, C, x, d) {
        return e(I - 446, d, C - 1, E - 520);
      }
      function a(I, E, C, x, d) {
        return t(x, E - 59, C - 181);
      }
      function s(I, E, C, x, d) {
        return t(d, E - -60, C - 15);
      }
      function c(I, E, C, x, d) {
        return e(I - 52, x, C - 312, E - 1246);
      }
      if (a(1388, 1399, 1376, "j!Oa") !== c(764, 871, 979, "De@X")) {
        const I = A;
        D(this, De)[I] && (g(171, 168, 176, 152, "2E&B") !== g(308, 229, 243, 112, "TcW3") ? D(this, De)[I] = { ...D(this, De)[I], ...o } : this[a(1176, 1151, 1237, "j$F^") + g(132, 120, 38, 33, "Gme9") + c(1106, 963, 841, "fjrn") + a(1387, 1390, 1495, "w2sl") + "or"](_0x54b1eb[a(1330, 1218, 1244, "j$F^")]) && (_0x4175c3 = this[r(925, 947, "8mfY", 946, 1010) + c(854, 938, 1078, "8mfY") + s(1296, 1250, 1238, 1387, ")L6%") + "s"](this[c(914, 1007, 1035, "2E&B") + a(1209, 1262, 1211, "De@X") + "s"], _0x732960), _0x43d7c6--));
      } else return _0x1acbae instanceof _0x5f639e && _0x537c96[g(239, 280, 348, 341, "0IJJ")] === a(1231, 1367, 1360, "w2sl") + s(1110, 1221, 1340, 1346, "^kB4") + c(1017, 1061, 1173, "b$Xe") + r(1026, 970, "14g6", 872, 908);
    });
  }
  [nA(831, 730, "w2sl") + CA(566, 479, 488, 429, "podd") + BA(550, 592, 570, 613, "lKX0") + "s"](n = {}, t = {}, e) {
    function A(C, x, d, l, Q) {
      return fA(C - 499, x, d - 346, l - 185, Q - -467);
    }
    const o = { ...n }, r = o, g = { ...typeof r[a(-199, -115, "2PId", -63, -85)] == s(-526, -414, "b$Xe") + "t" ? r[a(-215, -404, "x5so", -142, -285)] : {}, ...t };
    function a(C, x, d, l, Q) {
      return fA(C - 246, d, d - 182, l - 252, Q - -313);
    }
    function s(C, x, d, l, Q) {
      return nA(x - -1254, x - 10, d);
    }
    const c = g;
    function I(C, x, d, l, Q) {
      return BA(C - 177, x - 464, d - 267, l - 708, C);
    }
    if (e)
      if (a(-53, 65, "^kB4", -55, -76) === E(-325, -551, "va2n", -421, -429)) {
        const C = {};
        C[s(-363, -255, "ffyP")] = e, c[a(-387, -208, "j!0@", -362, -328) + a(-102, -293, "fjrn", -296, -193)] = C;
      } else {
        const C = {};
        return C[I("x5so", 1298, 1378, 1279)] = _0x3fbb86[A(-494, "j!Oa", -400, -359, -477)], C.id = _0x3a20d0[s(-218, -240, "^okk") + a(-300, -382, "IX1*", -264, -252)], C;
      }
    function E(C, x, d, l, Q) {
      return fA(C - 102, d, d - 142, l - 314, Q - -583);
    }
    return r[I("8Nq6", 1329, 1436, 1423)] = c, r;
  }
  [CA(755, 642, 808, 853, "oABo") + WA(756, 697, 617, 834, "b$Xe") + CA(804, 806, 942, 820, "$6j#")](n) {
    function t(A, o, r, g, a) {
      return CA(o - 63, o - 358, r - 291, g - 118, r);
    }
    function e(A, o, r, g, a) {
      return nA(a - 377, o - 246, r);
    }
    this[t(532, 607, "podd", 692) + e(1375, 1264, "8W[2", 1236, 1340) + "s"] = n;
  }
  [CA(648, 542, 719, 761, "cf%X") + fA(140, "j$F^", 142, 11, 112) + BA(504, 529, 576, 563, "lKX0") + WA(829, 709, 780, 749, "7iqo") + fA(204, "x5so", 198, 220, 205)]() {
    function n(o, r, g, a, s) {
      return fA(o - 302, s, g - 479, a - 4, o - 747);
    }
    const t = {};
    function e(o, r, g, a, s) {
      return nA(o - -1044, r - 366, r);
    }
    t[e(23, "$6j#") + e(-221, "1wGx")] = this[A(1165, 1262, "0IJJ") + n(962, 1030, 1034, 1062, "Ne(D")];
    function A(o, r, g, a, s) {
      return BA(o - 75, r - 434, g - 34, o - 694, g);
    }
    return t[e(-111, "0IJJ") + n(980, 874, 1069, 987, "j$F^") + "e"] = !1, t;
  }
}
De = new WeakMap();
const mr = {};
mr.FRONT = "user", mr.BACK = "environment";
const xa = mr;
function da() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function rg() {
  return /Android/i.test(navigator.userAgent);
}
function lo() {
  return /Firefox/i.test(navigator.userAgent);
}
function jC() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const _C = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function qC() {
  return navigator.userAgent;
}
function VC() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Bn = {};
Bn.width = 1920, Bn.height = 1080, Bn.facingMode = xa.FRONT;
const ZC = Bn;
var rt, vt, oe;
class pI {
  constructor({ defaultVideoConstrains: n = ZC, minCameraShorterSide: t = mC } = {}) {
    O(this, rt);
    O(this, vt, []);
    O(this, oe, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, F(this, rt, e);
  }
  get availableCameraProperties() {
    return D(this, vt);
  }
  get mediaStream() {
    return D(this, oe);
  }
  get videoTrack() {
    if (D(this, oe)) return fr(D(this, oe));
  }
  get isCameraActive() {
    var n;
    return !!((n = D(this, oe)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    sn(t);
  }
  async open(n = {}) {
    rg() && lo() && await dr(-19 * -461 + -2503 * -2 + -1 * 13315), F(this, oe, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get next device");
    const n = await Ri(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-23 * -277 + 805 * -1 + -5565)] ?? n[-334 + 167 * 2]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new w("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    D(this, oe) && (sn(D(this, oe)), F(this, oe, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = D(this, vt), A;
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
    const n = this.getSettings(), t = await gI(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== xa.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (da())
      return (await Ri()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Ri();
    for (const t of n) {
      rg() && lo() && await dr(-8951 + -8101 * -1 + 1300);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = fr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = r.getSettings(), a = { ...g };
        a.deviceName = r.label;
        const s = {};
        s.cameraProperties = a;
        const c = s;
        D(this, vt).push(c), sn(o);
      } catch (e) {
        e instanceof Error && w.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...D(this, rt).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new w("Could not init camera settings");
    if (typeof D(this, rt).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < D(this, rt).minCameraShorterSide)
      throw this.close(), new w("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
rt = new WeakMap(), vt = new WeakMap(), oe = new WeakMap();
var fo;
class zC {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    O(this, fo, !1);
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
    D(this, fo) || (F(this, fo, !0), await pI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), LC() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !lo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new w("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new w("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new w("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new w("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1426 * 5 + -2284 + 1 * -4846, -7104 + 3 * 2368), { image: t, timestamp: Date.now() };
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
    await this.cameraHandler.open(n), _C() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), (t = this.videoRecorder) == null || t.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !lo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
fo = new WeakMap();
var we;
class XC {
  constructor(n) {
    O(this, we);
    F(this, we, n);
  }
  get videoElement() {
    return D(this, we);
  }
  async play(n) {
    D(this, we).srcObject = n, await D(this, we).play();
  }
  stop() {
    D(this, we).srcObject = null;
  }
  hasSrcObject() {
    return !!D(this, we).srcObject;
  }
}
we = new WeakMap();
function dA(i, n) {
  var t = Un();
  return dA = function(e, A) {
    e = e - (8010 + -211 * -22 + 3 * -4157);
    var o = t[e];
    if (dA.pyfdlj === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, k = C.length; m < k; m++)
          x += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(I, E) {
        var C = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      dA.UnyFAJ = g, i = arguments, dA.pyfdlj = !0;
    }
    var a = t[-5931 * 1 + -44 * 40 + -1 * -7691], s = e + a, c = i[s];
    return c ? o = c : (dA.sRrHqN === void 0 && (dA.sRrHqN = !0), o = dA.UnyFAJ(o, A), i[s] = o), o;
  }, dA(i, n);
}
function ze(i, n, t, e, A) {
  return dA(t - -509, e);
}
function iA(i, n, t, e, A) {
  return dA(t - 640, A);
}
(function(i, n) {
  function t(a, s, c, I, E) {
    return dA(I - 624, a);
  }
  function e(a, s, c, I, E) {
    return dA(s - -38, I);
  }
  var A = i();
  function o(a, s, c, I, E) {
    return dA(a - -162, E);
  }
  function r(a, s, c, I, E) {
    return dA(I - 9, s);
  }
  for (; ; )
    try {
      var g = parseInt(r(346, "O0(u", 328, 306, 270)) / 1 + parseInt(r(305, "8cyf", 321, 262, 320)) / 2 * (parseInt(t("f2!@", 838, 845, 833, 860)) / 3) + parseInt(o(33, 101, 37, 48, "Fhe#")) / 4 * (parseInt(o(30, 73, -35, 85, "yJFk")) / 5) + -parseInt(r(319, "9S7c", 297, 268, 288)) / 6 + -parseInt(e(185, 175, 109, "BXJP", 225)) / 7 + -parseInt(t("aaq7", 791, 887, 821, 757)) / 8 + parseInt(r(212, "g0iG", 262, 272, 257)) / 9 * (-parseInt(o(19, 24, 4, -1, "f2!@")) / 10);
      if (g === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Un, -743150 + -127 * 4603 + 1553 * 1277);
function Xe(i, n, t, e, A) {
  return dA(i - -619, e);
}
function VA(i, n, t, e, A) {
  return dA(A - -214, t);
}
function ZA(i, n, t, e, A) {
  return dA(e - -563, n);
}
var Bs, Qs, Es;
class $C {
  constructor() {
    p(this, Es, -2079 * 1 + 3 * 368 + 5 * 195);
    p(this, Qs);
    p(this, Bs);
    function n(A, o, r, g, a) {
      return ZA(A - 285, A, r - 161, r - -224);
    }
    function t(A, o, r, g, a) {
      return Xe(a - 424, o - 131, r - 224, g);
    }
    function e(A, o, r, g, a) {
      return iA(A - 459, o - 34, g - -711, g - 155, r);
    }
    this[e(154, 192, "Fhe#", 191) + t(15, -1, 17, "4tkj", 57) + t(100, 87, 147, "jb0%", 106) + e(167, 128, "uoiy", 151)] = Date[n("Yiek", -534, -492)]();
  }
  [(Es = ze(-319, -368, -304, "Fhe#") + ze(-273, -261, -320, "NxLF") + ze(-309, -304, -277, "TTsL"), Qs = VA(113, 67, "[2Ob", 102, 91) + Xe(-405, -388, -458, "u(Gm") + iA(1019, 956, 952, 891, "!KE2") + ZA(-359, "BggH", -359, -377), Bs = ZA(-364, "d8fY", -376, -351) + Xe(-375, -359, -336, "8cyf") + "p", ZA(-290, "iY$v", -341, -297) + ZA(-345, "be1^", -240, -295) + VA(111, 45, "kY9P", 25, 61))]() {
    function n(g, a, s, c, I) {
      return iA(g - 409, a - 316, g - -730, c - 391, c);
    }
    function t(g, a, s, c, I) {
      return iA(g - 438, a - 280, g - -362, c - 254, c);
    }
    function e(g, a, s, c, I) {
      return VA(g - 190, a - 303, c, c - 340, a - 1177);
    }
    function A(g, a, s, c, I) {
      return ZA(g - 121, I, s - 448, s - -115);
    }
    function o(g, a, s, c, I) {
      return ze(g - 336, a - 448, c - 302, a);
    }
    if (this[o(45, "UT0E", 108, 64) + A(-420, -445, -438, -392, "vC7t") + n(113, 124, 85, "yJFk")]++, this[o(-1, "0$*9", -13, -3) + n(100, 115, 161, "g0iG") + n(193, 204, 239, "O0(u")] === 985 + -941 * 6 + -74 * -63)
      if (n(131, 192, 92, "(8)j") !== A(-488, -509, -443, -428, "^QVH")) {
        if (!_0x1679f3() || !this[n(147, 176, 203, "g0iG") + A(-461, -493, -461, -501, "(8)j") + "p"]) {
          var r = {};
          return r[t(486, 469, 452, "kY9P") + n(213, 265, 204, "8cyf") + "e"] = !1, r;
        }
        return { performance: !0, hiccupAmount: this[o(-3, "f2!@", 45, 54) + A(-405, -480, -442, -504, "W688") + A(-418, -419, -450, -415, "!KE2") + "t"](), firstHiccup: this[o(-21, "jb0%", -61, -19) + n(117, 158, 66, "jXbT") + o(-64, "%pYk", -57, 4) + n(182, 147, 137, "RknF") + "ss"]() };
      } else this[e(1242, 1210, 1169, "ysK&") + A(-491, -458, -433, -491, "f2!@") + "p"] = Date[A(-392, -377, -423, -395, "jb0%")]() - this[n(186, 239, 217, "jLdx") + t(567, 531, 533, "RknF") + o(-75, "Xpyh", -56, -9) + t(577, 508, 625, "Gtd$")];
  }
  [iA(954, 954, 924, 926, "O0(u") + iA(969, 975, 932, 991, "be1^") + ZA(-359, "CL#%", -319, -380) + VA(-17, -32, "[2Ob", -11, -4) + "up"]() {
    function n(r, g, a, s, c) {
      return Xe(g - 935, g - 165, a - 415, c);
    }
    function t(r, g, a, s, c) {
      return ze(r - 489, g - 194, c - 1008, s);
    }
    if (!gn())
      if (A(1230, 1186, 1201, "(8)j") === n(603, 623, 687, 590, "aaq7")) this[n(675, 630, 616, 617, "aaq7") + n(521, 564, 547, 629, "Gtd$") + A(1193, 1197, 1158, "Yiek") + A(1143, 1120, 1180, "jXbT")] = _0xc9b2f[t(804, 687, 814, "%pYk", 756)]();
      else return;
    function e(r, g, a, s, c) {
      return ZA(r - 296, g, a - 373, r - 271);
    }
    function A(r, g, a, s, c) {
      return Xe(a - 1535, g - 135, a - 82, s);
    }
    this[t(671, 763, 668, "BXJP", 728) + o(-262, -305, "Xpyh") + n(673, 618, 612, 641, "KGZ7")] = 44 * -21 + -7619 + 8543, this[A(1134, 1180, 1128, "d8fY") + t(766, 801, 821, "w^cx", 803) + "p"] = void 0;
    function o(r, g, a, s, c) {
      return ZA(r - 129, a, a - 350, r - 67);
    }
    window[e(-27, "0$*9", 31) + A(1071, 1183, 1136, "Xpyh") + A(1157, 1067, 1100, "jLdx") + o(-242, -280, "MRk6")](o(-302, -289, "vC7t") + "wn", this[e(1, "ysK&", -4) + t(768, 769, 717, "Gtd$", 718) + e(-90, "BggH", -91)][e(-46, "4tkj", -43)](this));
  }
  [iA(993, 995, 930, 950, "jXbT") + iA(937, 902, 910, 946, "Yiek") + ZA(-391, "GieG", -354, -362) + VA(32, 91, "2MDf", 53, 55) + "up"]() {
    function n(r, g, a, s, c) {
      return iA(r - 16, g - 100, s - -1518, s - 233, a);
    }
    function t(r, g, a, s, c) {
      return VA(r - 382, g - 483, c, s - 163, g - -575);
    }
    function e(r, g, a, s, c) {
      return iA(r - 423, g - 443, a - -958, s - 126, c);
    }
    if (!gn()) {
      if (e(-44, -114, -102, -137, "Fhe#") === t(-560, -598, -627, -658, "%pYk")) return;
      if (!_0x4ab0af()) return;
      _0x116732[e(-22, 46, -18, -16, "]UDC") + e(-117, -87, -51, -80, "Gtd$") + n(-615, -569, "kY9P", -605) + "r"](A(29, 19, "Gtd$", 51, 46) + "wn", this[t(-607, -546, -576, -524, "(8)j") + o(-286, "6uvA", -289, -304) + A(23, -19, "d8fY", -29, -20)][t(-515, -507, -448, -452, "kY9P")](this));
    }
    function A(r, g, a, s, c) {
      return ze(r - 118, g - 283, c - 259, a);
    }
    function o(r, g, a, s, c) {
      return ze(r - 470, g - 151, s - -104, g);
    }
    window[e(5, 1, -30, 24, "BggH") + A(37, 2, "W688", 108, 61) + A(-87, 6, "RknF", -58, -24) + "r"](n(-683, -623, "BXJP", -691) + "wn", this[e(-141, -14, -80, -122, "d8fY") + o(-369, "!KE2", -395, -388) + t(-471, -472, -470, -535, "jLdx")][o(-391, "*y2F", -346, -333)](this));
  }
  [ZA(-261, "Fhe#", -255, -257) + iA(799, 900, 839, 832, "g0iG") + "lt"]() {
    function n(g, a, s, c, I) {
      return VA(g - 434, a - 473, s, c - 99, g - -662);
    }
    if (!gn() || !this[e(218, 201, 249, "%pYk") + e(242, 256, 213, "[2Ob") + "p"])
      if (A(-356, -387, -355, "ysK&", -346) !== A(-403, -334, -374, "[2Ob", -351)) {
        var t = {};
        return t[A(-376, -454, -397, "CL#%", -387) + n(-652, -656, "1(w[", -635) + "e"] = !1, t;
      } else return this[A(-288, -340, -298, "kY9P", -320) + o(-509, -490, -510, "Xpyh") + "p"];
    function e(g, a, s, c, I) {
      return ZA(g - 352, c, s - 220, g - 531);
    }
    function A(g, a, s, c, I) {
      return VA(g - 267, a - 346, c, c - 332, I - -355);
    }
    function o(g, a, s, c, I) {
      return iA(g - 407, a - 212, s - -1356, c - 437, c);
    }
    function r(g, a, s, c, I) {
      return iA(g - 130, a - 427, g - -1498, c - 334, s);
    }
    return { performance: !0, hiccupAmount: this[o(-417, -383, -430, "kY9P") + r(-567, -616, "KGZ7", -528) + o(-366, -361, -422, "iY$v") + "t"](), firstHiccup: this[o(-463, -417, -485, "2MDf") + o(-416, -520, -458, "BggH") + o(-503, -442, -439, "be1^") + o(-386, -495, -429, "4tkj") + "ss"]() };
  }
  [VA(30, 37, "(8)j", 149, 96) + iA(897, 826, 833, 793, "GieG") + iA(931, 984, 953, 925, "Vac6") + "t"]() {
    function n(A, o, r, g, a) {
      return Xe(g - 109, o - 395, r - 301, a);
    }
    function t(A, o, r, g, a) {
      return iA(A - 261, o - 390, g - 283, g - 109, A);
    }
    function e(A, o, r, g, a) {
      return Xe(o - 1052, o - 478, r - 26, g);
    }
    return this[n(-169, -164, -269, -229, "vC7t") + t("0$*9", 1154, 1093, 1108) + e(645, 648, 633, "puc%")];
  }
  [VA(39, 69, "8cyf", 36, 37) + iA(971, 880, 948, 967, "W688") + VA(1, 18, "UT0E", -55, -14) + iA(922, 932, 896, 879, "UT0E") + "ss"]() {
    function n(t, e, A, o, r) {
      return VA(t - 264, e - 444, o, o - 321, e - -708);
    }
    return this[n(-642, -606, -594, "8cyf") + n(-778, -726, -784, "W688") + "p"];
  }
}
function Un() {
  var i = ["WOatW4xcV8kdWPTKWOS", "keDrW4GH", "W6xdLJe", "CMK9WQpcNsddLZBcOeRcVmku", "i8ojFmo6qG", "pSonymo/sa", "W77dRtBcQxq", "EuHIW5ba", "WRxdRYC", "WOtdN8oBESk7", "ymouW4L3vW", "fSkOw3FcSW", "WP4mCd/dJW", "WRdcL8okWOmN", "wCogeCo2W57dLCoY", "bY9jC8oY", "WQaFWOhcIe8", "hbddSwyZW495mv/cJgaRW5i", "zGyzD8oK", "FrFdHCogew3cQSkHfX3dUGdcSG", "fSkYdKBcKW", "WP4TzG/dLq", "W5CmW6GWW78", "eZ5vDCoK", "WRpdTsW", "gCoCaG", "D15OW6nD", "rehcUYv1", "kSkYaKVcSG", "W5LdW5lcM8kR", "pXeIv8oR", "Dtr/W6BdMvxdMa", "hSkyWQ0+W5W", "WRlcGCoPWPuE", "WOlcSMhcQCoV", "W57cG8ktlCoMufvaxe3cT8oVBq", "WQ0ehmobWQG", "tttdLq", "redcKJD1", "W6fCqZ4t", "pSkiWRGoW5y", "fMFdNZZdRW", "b8kEf03cQq", "W5TBAraI", "WQFdJZ0", "rvNdRCoRW6C", "qSoQWR5sW5W", "k1pdU3OV", "WRb5g8kkW5O", "W67cSNBdJ03dN2ZcLb4UW6BdMZS", "pvVdSxyf", "WOtdN8oBBSkM", "WOVcRh0", "WPHcvMxdUa", "xNbi", "kGKJWQyEW6bIWPXyWOxcUx9+", "b8kOeMVcQa", "WOZcRMJdPSko", "vX8iCCoI", "WP0wCq/dLa", "WOZcUN3cVSo3", "W79CrSkiW70NWOqBDmoFlCotjq", "WQ4jWOVcR08", "W6JcMCoTWPuIWPqn", "W6bbW57cVKi", "W4futJKk", "bKDaW5GG", "dJDRW7hdMW", "W4WOW7ldTG", "E1tdRmo+W7C", "eKddKZ/dIG", "kr0IqSoW", "WR3cMSoOWPiH", "kuTxW688", "W48TW7xdQmkM", "Fb4xWOXJk8oUf8kku2noba", "W5hcUSkrWOa", "ACoEW4O", "W5ShW6S2W5e", "WRxcNmoT", "WRhdPXBcLZ0", "smoMigZdISkDW5lcSYVcPaSFDq", "WR7cLMBdQJCyv8knjKyrkSk3", "itT8W5NdIW", "rKRcQYfU", "W49kqdFdJSoWvCkm", "W51lW6m", "BL58W7Xz", "WQtdJSkAW4FcOa", "fKldJGNdGG", "W4WpnmkytG", "WRXpr1ldUG", "W7fAW5FcV2q", "W5uBW6i0W4y", "WQz0dSkwW5O", "paa1x8oH", "fCkzWQS+W4i", "iam+", "W6pdJZBcRMK", "W4a2iSkvqq", "gICnW40pW4qhFWpcGw7cUKG", "WP1ZzmoqotGCW53cLSoHxSon", "udK7W6q", "WQaFWOhcNfi", "lr0+vq", "iSkOmG", "jmkYksJcTW", "W59TBHCF", "kbeKESoH", "W4S4W6ZdOmkI", "WR3dPIBcVq0", "WQjHf8kEW54", "W51iW6/cGmk9", "gdJdRMBcMG", "W4W2n8koEa", "DvZdSmoPW68", "WR/dRmkBW5BcOG", "W7PhW4y", "geNdGYhdHa", "BSo0DM3dKZ83DsJcGmkfWPa", "W6ldGCkQW5rHW6i6wX3dPhtcKa", "gKhdNW", "lv90W5H8", "C8oyW5jnAG", "fcBdQa", "pencW5u2", "v8osW7SmvG", "nmkEWQePW54", "tfBcPZrZ", "exlcSCk1BW", "qWOUE8ox", "nmocWOtcOmkF", "W45qvbyd", "sWeowmo4", "oNhdSw0/", "y0XYWQ3dIq", "ie7cLCkctW"];
  return Un = function() {
    return i;
  }, Un();
}
const AB = 480, eB = -194 * -34 + 2995 + 9351 * -1, la = 30, mI = 3 * 327 + 1 * 5629 + -6595, yI = 8, yr = {};
yr.codec = "avc1.42E01E", yr.bitrate = 1e6;
const qo = yr, tB = 9066 + 56 * -79 + -4640 * 1, oB = -473 * -43 + -15802 * -1 + 6141 * -1;
class nB {
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
    let n = -17 * 331 + 2732 * -2 + 11091;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class DI {
  constructor() {
    p(this, "encoder");
  }
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
function iB(i) {
  if (!i) return !1;
  const n = DI.isSupported();
  return !n && w.logError("Video encoding is not supported in this browser."), n;
}
const Dr = {};
Dr.LOW = "low", Dr.STANDARD = "standard";
const Yn = Dr, wr = {};
wr.SPS = "SPS", wr.PPS = "PPS";
const Fi = wr;
class rB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -206 * -40 + 49 * 181 + -17105, t >= n.length) return;
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
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Fi.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Fi.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Fi.SPS ? n[t] & -6682 + 416 * 20 + -1 * 1607 : n[t], o = t + (-4960 + -95 * 23 + 7146);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = -8083 + -59 * -137; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === -971 * -2 + 3087 + -5029) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-213 * 5 + -344 * 4 + 2443) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (1 * 1306 + 5590 + -6894), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class aB {
  constructor() {
    p(this, "parameterSetsHandler");
    p(this, "START_CODE", new Uint8Array([-109 * 3 + 6061 + -5734, -12120 + -101 * -120, 0, 1594 * 2 + -537 + 2 * -1325]));
    p(this, "parameterSets");
    this.parameterSetsHandler = new rB();
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
    if (t + (-181 * 38 + 2 * -118 + 7118) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (974 * 9 + 1 * -8017 + -745 * 1), r = o + A;
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
    let A = 2419 + -1 * -3403 + 1 * -5822;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class gB {
  constructor(n = yI, t = la) {
    p(this, "chunks", []);
    p(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (467 + 466 * -1)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-1 * 2459 + 6081 * 1 + -3622, n));
  }
}
class ag {
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
class sB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (jC() && e > A) {
      const g = e, a = A, s = g / a, c = t * s;
      return { width: Math.floor(c / (-3911 + -43 * -74 + 1 * 731)) * (-58 * -31 + 3475 + -5271), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (43 * 103 + 1022 * 1 + -5449)) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / (-6097 + 3944 * 2 + -1789)) * 2, height: t };
  }
  create(n, t) {
    switch (n) {
      case Yn.STANDARD:
        return new ag().setBitrate(qo.bitrate).setCodec(qo.codec).setFramerate(la).setResolution(this.getScaledResolution(t, AB)).build();
      case Yn.LOW:
        return new ag().setBitrate(qo.bitrate).setCodec(qo.codec).setFramerate(mI).setResolution(this.getScaledResolution(t, eB)).build();
      default:
        throw w.logError("Unsupported preset for video encoder config");
    }
  }
}
class IB {
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
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new sB(), this.chunkStorage = new gB(), this.cameraFramerate = la, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(yI, mI), this.startRecording(Yn.LOW);
  }
  startRecording(n = Yn.STANDARD) {
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
    this.clearCaptureInterval(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    var A;
    const t = (A = this.cameraHandler) == null ? void 0 : A.getResolution();
    if (!t) {
      w.logError("Camera resolution could not be determined.");
      return;
    }
    let e;
    try {
      e = this.videoEncoderConfigFactory.create(n, t);
    } catch (o) {
      w.logError("Failed to create video encoder configuration: " + o);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(e)) {
      w.logError("The provided video encoder configuration is not supported.");
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
      w.logError("Video element is not created.");
      return;
    }
    let n = 0;
    const t = this.cameraFramerate, e = (568 + 6571 * 1 + 6139 * -1) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 8114 + 519 * -6 + 2 * -2500;
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
class cB {
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
    if (!this.videoProcessor) throw w.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw w.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw w.logError("QualityTester is not set");
    if (!this.cameraHandler) throw w.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new IB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class CB {
  create(n, t) {
    if (!iB(t)) return;
    const e = new nB(tB, oB), A = new DI(), o = new aB();
    return new cB().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function BB(i) {
  const { facingMode: n = xa.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = PA(null), [A, o] = cA(), [r, g] = cA(), { handleError: a, setIsCameraReady: s } = MA(), c = Ee((E) => {
    g((C) => SC(E, C));
  }, []);
  V(() => {
    if (!e.current) {
      a(new w("Something went wrong during video initialization"));
      return;
    }
    const E = new XC(e.current), C = new KC(), x = new pI(), d = new $C(), l = new CB().create(x, t), Q = {};
    Q.videoHandler = E, Q.cameraHandler = x, Q.performanceCheckup = d, Q.cameraEvaluator = C, Q.videoRecorder = l;
    const h = new zC(Q);
    return (async () => {
      try {
        const k = {};
        k.facingMode = n, await h.startFirstVideoStream(k);
      } catch (k) {
        if (k instanceof Error) {
          a(w.fromCameraError(k));
          return;
        }
      }
      o(h), s(!0), c(h.getCameraResolution());
    })(), () => {
      h == null || h.stopStreaming(), s(!1), o(void 0);
    };
  }, [n, a, s, e, c, t]);
  const I = {};
  return I.cameraService = A, I.cameraResolution = r, I.onCameraResolutionChange = c, I.videoRef = e, I;
}
function QB({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = BB(i), r = hA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ b(Fn.Provider, { value: r, children: n });
}
let L;
const Se = new Array(-2950 + 70 * 33 + 48 * 16).fill(void 0);
Se.push(void 0, null, !0, !1);
function br(i) {
  return Se[i];
}
let Qe = 0, ro = null;
function Qn() {
  return (ro === null || ro.byteLength === -2827 * -2 + 1061 + -6715) && (ro = new Uint8Array(L.memory.buffer)), ro;
}
const En = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, EB = typeof En.encodeInto == "function" ? function(i, n) {
  return En.encodeInto(i, n);
} : function(i, n) {
  const t = En.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function uo(i, n, t) {
  if (t === void 0) {
    const g = En.encode(i), a = n(g.length, -5349 + -95 * -85 + -5 * 545) >>> 0;
    return Qn().subarray(a, a + g.length).set(g), Qe = g.length, a;
  }
  let e = i.length, A = n(e, 1 * 8889 + -5137 * -1 + -425 * 33) >>> 2343 * -2 + -2433 + 7119;
  const o = Qn();
  let r = -40 * 129 + 527 * -1 + 5687;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 6 * 1307 + 2082 + -9797 * 1) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== -8189 * -1 + -4797 * -2 + 17783 * -1 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 1) >>> -129 * -19 + 139 * -47 + -314 * -13;
    const g = Qn().subarray(A + r, A + e), a = EB(i, g);
    r += a.written, A = t(A, e, r, 1739 * -1 + 1 * 8936 + 1028 * -7) >>> -5253 + 17 * 309;
  }
  return Qe = r, A;
}
function wI(i) {
  return i == null;
}
let ao = null;
function ce() {
  return (ao === null || ao.byteLength === -483 + -21 * -23) && (ao = new Int32Array(L.memory.buffer)), ao;
}
let Bo = Se.length;
function xB(i) {
  i < 11675 + -1 * 11543 || (Se[i] = Bo, Bo = i);
}
function bI(i) {
  const n = br(i);
  return xB(i), n;
}
const kr = {};
kr.ignoreBOM = !0, kr.fatal = !0;
const kI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", kr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && kI.decode();
function Tn(i, n) {
  return i = i >>> 0, kI.decode(Qn().subarray(i, i + n));
}
function Sr(i) {
  Bo === Se.length && Se.push(Se.length + (-491 + 1 * 6757 + -1 * 6265));
  const n = Bo;
  return Bo = Se[n], Se[n] = i, n;
}
let go = null;
function SI() {
  return (go === null || go.byteLength === 0) && (go = new Uint32Array(L.memory.buffer)), go;
}
function gg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = SI();
  for (let A = -834 + 37 * 102 + -2940; A < i.length; A++)
    e[t / 4 + A] = Sr(i[A]);
  return Qe = i.length, t;
}
function sg(i, n) {
  i = i >>> 103 * -41 + -4091 * 1 + -4157 * -2;
  const t = SI(), e = t.subarray(i / (-4695 + -1223 * -4 + -193), i / (1464 * 5 + -6399 + -917) + n), A = [];
  for (let o = -1967 * 5 + -607 + 10442; o < e.length; o++)
    A.push(bI(e[o]));
  return A;
}
function dB(i, n) {
  const t = uo(i, L.__wbindgen_malloc, L.__wbindgen_realloc), e = Qe, A = uo(n, L.__wbindgen_malloc, L.__wbindgen_realloc), o = Qe, r = L.is_mobile_supported(t, e, A, o);
  return ua.__wrap(r);
}
const Gr = {};
Gr.register = () => {
}, Gr.unregister = () => {
};
const Ig = typeof FinalizationRegistry > "u" ? Gr : new FinalizationRegistry((i) => L.__wbg_licensevalidationresult_free(i >>> -1461 * 1 + 528 + 933));
class ua {
  static __wrap(n) {
    n = n >>> 1147 * -1 + -3156 + -331 * -13;
    const t = Object.create(ua.prototype);
    return t.__wbg_ptr = n, Ig.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -1313 * -1 + -1236 * 8 + 8575, Ig.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    L.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = wI(t) ? 0 : uo(t, L.__wbindgen_malloc, L.__wbindgen_realloc), g = Qe;
    const a = gg(e, L.__wbindgen_malloc), s = Qe, c = gg(A, L.__wbindgen_malloc), I = Qe, E = uo(o, L.__wbindgen_malloc, L.__wbindgen_realloc), C = Qe, x = L.licensevalidationresult_new(n, r, g, a, s, c, I, E, C);
    return this.__wbg_ptr = x >>> 1716 + 156 * -11, this;
  }
  get is_valid() {
    return L.licensevalidationresult_is_valid(this.__wbg_ptr) !== 2533 * -1 + -61 * -2 + 2411;
  }
  get features_json() {
    try {
      const e = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (-5374 + 1 * 7055 + -1677) + (-8 * 942 + -8989 + 16525)], t = ce()[e / (-4445 + -1 * 7091 + 1154 * 10) + (2432 * 3 + 1353 + -8648)];
      let A;
      return n !== -1 * 8849 + 68 * -106 + 16057 && (A = Tn(n, t).slice(), L.__wbindgen_free(n, t * (-6386 + 3 * 2129), -7678 * 1 + -1167 * -1 + 6512)), A;
    } finally {
      L.__wbindgen_add_to_stack_pointer(5142 + 1230 * 3 + -4 * 2204);
    }
  }
  get errors() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / (-997 * -5 + -7971 * 1 + 2990) + (-7422 * -1 + -1 * 7603 + -1 * -181)], t = ce()[A / (3119 + 35 * -89) + (-87 * -113 + -656 * -10 + -16390)], e = sg(n, t).slice();
      return L.__wbindgen_free(n, t * (-9109 * -1 + 6188 + -15293), 921 * 6 + 1 * 544 + -1 * 6066), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(5 * 197 + 101 * -83 + -2 * -3707);
    }
  }
  get warnings() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / (-4305 + -4309 * -1) + (8193 + 7541 * 1 + -15734)], t = ce()[A / (1 * -8509 + 4220 + 4293) + (-60 + -61 * -1)], e = sg(n, t).slice();
      return L.__wbindgen_free(n, t * (1667 + 263 * 6 + 1 * -3241), 65 * -67 + 7 * 401 + 1552), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(-2 * 1187 + -8024 + 5207 * 2);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / (-4 * 941 + 10 + 3758) + (-2339 * 1 + -1 * -6697 + 4358 * -1)], A = ce()[o / (-8153 + 1 * 5900 + 2257) + (-7668 + -836 * -3 + -397 * -13)];
      return n = e, t = A, Tn(e, A);
    } finally {
      L.__wbindgen_add_to_stack_pointer(2 * -1082 + 9885 + -7705), L.__wbindgen_free(n, t, 1 * 231 + -1510 * -4 + -6270);
    }
  }
}
async function lB(i, n) {
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
function uB() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = br(t), A = typeof e == "string" ? e : void 0;
    var o = wI(A) ? 0 : uo(A, L.__wbindgen_malloc, L.__wbindgen_realloc), r = Qe;
    ce()[n / (-73 * -7 + -263 * 21 + -627 * -8) + 1] = r, ce()[n / (-2286 + 5 * -1741 + -3 * -3665) + (2787 + 3 * 2066 + -8985)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    bI(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = Tn(n, t);
    return Sr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Sr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return br(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(Tn(n, t));
  }, i;
}
function hB(i, n) {
  return L = i.exports, GI.__wbindgen_wasm_module = n, ao = null, go = null, ro = null, L;
}
async function GI(i) {
  if (L !== void 0) return L;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYhACAIRQRAIAQoArQGIQIgDSEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgA2ogBEGwBmpBMBC+AhoLAn8gBCgCyAMiB0EETQRAIARBqANqIQIgBwwBCyAEKAKoAyECIAQoAqQDCyEBIARBIGohDQJAAkACQAJAAkACQAJAAkACQAJAIAQoAkAiA0EFTwRAQQIhACACIAEgBCgCICAEKAIcEKgBQf8BcUECSQ0WIAQoAhwiAkUNAiAEKAIgIQEMAQtBAiEAIAIgASANIAMQqAFB/wFxQQJJDRUgDSEBIAMiAkUNAgsgAkEGdCACQQN0IAFqQQhrKQMAeadrQQdqQQN2IApGDQIMFAsgCg0TIARBoAJqIQkMAgsgCkUNAwwSCyAEQaACaiEJIANBBUkNAQsgBCgCHEUiAQ0BIAQoAiAtAABBAXFFIgANDiADQQVJDQMgAQ0IIAANCyABDQkgBCgCICECDAQLIAMNAQsgBEG8BmpCADcCACAEQQE2ArQGIARBiO/AADYCsAYgBEGMrMIANgK4BiAEQbAGakGQ78AAEOsBAAsgBC0AIEEBcUUNCwsgDSECIAQtACBBAXFFDQcLIAQgAikDACIkQgGDNwN4ICSnQQFxRQ0FICRCAX0hJUICICR9ISZBASECA0AgJSAlfiIlQgF8ICZ+ISYgAkEgSSACQQF0IQINAAsgA0EFTwRAIAQoAhwhAwsgB0EETQR/IARBqANqBSAEKAKkAyEHIAQoAqgDCyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiIAIAEgASAHQQN0ahBDIARB0ANqIABBMBC+AhogBCgC+AMiAiEAIAJBBU8EfyAEKALUAwUgAAsgA0sEQCAEQbAGaiIBIARB0ANqIgIgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogARCPAiACEI8CIAIgAEEwEL4CGiAEKAL4AyECCyACQQVPBH8gBCgC1AMFIAILIANJBEAgBEHQA2ogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRlCACAmfSEkIAJBATYCACAEQoGAgIAgNwKEBiAEIAI2AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgEgBEGABmoQMyAEQbAGaiIAIAFBMBC+AhogAhAiIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGABGoiASAEQbAGaiIAQTAQvgIaIARB0AVqIAFBMBC+AhoCQCADQQd0IgtFBEAgACABQTAQvgIaIARBgAZqIAAQrAEMAQsgBEHQBWohAiAEKALQBUECRgRAIAQoAtQFIQILIAIoAigiAUEFTwRAIAIoAgQhAQsgBEEANgKwBiAEQQA2AtgGIARBsAZqIgIgASALQQZ2IgBBAXJqEK0BIARB+ABqIgEgAkEwEL4CGiABIAAQSSAEQdAFaiECIAECfyAEKALQBUECRgRAIAQoAtQFIQILIAJBCGogAigCKCIAQQRNDQAaIAIoAgQhACACKAIICyICIAIgAEEDdGoQQyAEQYAGaiABQTAQvgIaCyAEQbAGaiIAIARBgAZqQTAQvgIaIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEH4AGogBEGwBmpBMBC+AhoCQCALRQ0AIAQoAtAFQQJGDQAgBEHQBWoQjwILIARBsAZqIgIgBEH4AGoiASAEQRhqEAggBEGABmoiACAEQeAGakEwEL4CGiACEI8CIAEQjwIgBEGABGogAEEwEL4CGiAEKAKoBCIAQQVPBH8gBCgChAQFIAALIANJBEAgBEGABGogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRkgAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiIAIARBsAZqIgFBMBC+AhogACADENABQbixwgAtAAAaQYAGEAoiD0UNGSAEQhA3AugEIAQgDzYC5AQgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyABIABBMBC+AhogAUEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQfAEaiIAIARBsAZqIgFBMBC+AhogACAEQbAEaiAEQYAEaiAEQRhqICQgAxASIAEgAEEwEL4CGiAPIAFBMBC+AiAEQQE2AuwEIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgASAAQTAQvgIaIAFBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgBWoiACAEQbAGaiIBQTAQvgIaIAAgBEHQA2ogBEGABGogBEEYaiAkIAMQEiABIABBMBC+AhpBMGogAUEwEL4CGiAEQQI2AuwEIAFBBHIhDiAEQbgGaiELIARB2AZqIQxBAiEGQQIhCANAIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgBEGwBmogAEEwEL4CGiAIIgpBAWohCCAEKAK4BiEHA0AgCyEBIAQoAtgGIgIhACACQQVJIhBFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgDCEAIBBFBEAgBCgCtAYhAiAOIQALIAJFDQEgACACQQFrNgIADAELCyAEQfgAaiICIARBsAZqIgBBMBC+AhogBiAKQQFrIgFNDQggAiAPIAFBMGxqIA9BMGogBEEYaiAkIAMQEiAAIAJBMBC+AhogBCgC6AQgBkcEfyAGBSAEQeQEaiEKIwBBIGsiECQAAkACQCAGQQFqIgFFDQBBBCAKKAIEIgdBAXQiACABIAAgAUsbIgAgAEEETRsiAkEwbCEBIAJBq9WqFUlBA3QhAAJAIAdFBEAgEEEANgIYDAELIBBBCDYCGCAQIAdBMGw2AhwgECAKKAIANgIUCyAQQQhqIAAgASAQQRRqEHcgECgCDCEAIBAoAghFBEAgCiACNgIEIAogADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIBBBIGokACAEKALkBCEPIAQoAuwECyIQQTBsIA9qIARBsAZqQTAQvgIaIAQgEEEBaiIGNgLsBCAIQRBHDQALDAgLIBdFDQ0MCwtBuLHCAC0AABpBARAKIgBFDRcgAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQZTYwAAQLiECIBJFDRYgFhAiDBYLIACtQv8Bg0IIhiAGIBFqQQFrrUIghoRCAoQhJQwUC0EAQQBB0PjAABC3AQALQQBBAEGM98AAELcBAAsgBEEANgKwBiMAQRBrIgAkACAAQYj2wAA2AgwgACAEQfgAajYCCEEBIABBCGpB+PXAACAAQQxqQfj1wAAgBEGwBmpB/PbAABBPAAtBoPnAAEEkQcT5wAAQ3gEACyABIAZBkPnAABC3AQALAkACQAJAAkAgBgRAIA8oAigiAEEETQR/IA9BCGoFIA8oAgQhACAPKAIICyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiICIAEgASAAQQN0ahBDIARB0AVqIgAgAkEwEL4CGiAAIAMQ0AEgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyACIABBMBC+AhogAkEEciEMIARBuAZqIQogBEHYBmohCCAEKAK4BiEHA0AgCiEBIAQoAtgGIgIhACACQQVJIgtFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgCCEAIAtFBEAgBCgCtAYhAiAMIQALIAJFDQEgACACQQFrNgIADAELCyAEQYAGaiIAIARBsAZqQTAQvgIaIAAgAxDQAQJAAn8gBEHwAGooAgAiAEEFTwRAIARBzABqIgcoAgAiAUUNAiABQQFrIQIgBygCACIIIQcgBEHQAGooAgAMAQsgAEUNASAAQQFrIQIgBEHMAGooAgAhCCAAIgEhByAEQdAAagsgAiAHTw0CIAggACAAQQRLIgcbIQsgBEHQAGoiACgCACAAIAcbIQggAkEDdGohAANAIAIhByAAKQMAISZBfCECA0AgAkF8RiABIAtGcUUEQCAEQYAGaiIMIARB0AVqIgogCiAEQRhqIgAgJCADEBIgCiAMIAwgACAkIAMQEiAMIAogCiAAICQgAxASIAogDCAMIAAgJCADEBILIAYgJkI8iKciAE0NBiAEQYAGaiIMIARB0AVqIgogDyAAQTBsaiAEQRhqICQgAxASIARBsAZqIgAgCkEwEL4CGiAKIAxBMBC+AhogDCAAQTAQvgIaICZCBIYhJiACQQRqIgJBPEkNAAsgB0UNASALIAdBAWsiAk0NBCAIIAJBA3RqIQAgByEBDAALAAsgBEGABmoiACAEQdAFaiAEQbAEaiAEQRhqICQgAxASIABBBHIhCCAEQYgGaiEBIARBqAZqIQcgBCgCiAYhBgNAIAEhAyAEKAKoBiICIQAgAkEFSSIKRQRAIAYhAyAEKAKEBiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAchACAKRQRAIAQoAoQGIQIgCCEACyACRQ0BIAAgAkEBazYCAAwBCwsgAkEFTwR/IAQoAoQGIQIgBgUgAQsgAiAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQYAGaiAEQRhqEHUgASECIAQoAqgGIgBBBU8EQCAEKAKIBiECIAQoAoQGIQALIAIgACAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQbAGaiICIARBgAZqIgMgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogAhCPAiADEI8CIAMgAEEwEL4CGgwEC0EAQQBB4PjAABC3AQALIAIgB0Hw+MAAELcBAAsgAiALQfD4wAAQtwEACyAAIAZBgPnAABC3AQALIAQoAogGIQoDQCABIQMgBCgCqAYiAiEAIAJBBUkiBkUEQCAKIQMgBCgChAYhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAHIQAgBkUEQCAEKAKEBiECIAghAAsgAkUNASAAIAJBAWs2AgAMAQsLIAkgBEGABmpBMBC+AhogEEEBaiEAIARB0AVqEI8CIA8hAgNAIAIQjwIgAkEwaiECIABBAWsiAA0ACyAEKALoBARAIA8QIgsgBEGwBGoQjwIgBEGABGoQjwIgBEHQA2oQjwIMAQtBuLHCAC0AABpBBBAKIgJFDQ8gAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQcgBEHYBmohBiAEKAK4BiEIA0AgByEDIAQoAtgGIgIhACACQQVJIgFFBEAgCCEDIAQoArQGIQALAkAgAEUNACAAQQN0IANqQQhrKQMAQgBSDQAgBiEAIAFFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiAEQbAGakEwEL4CGiAEQfAAaigCACIAQQVPBH8gBEHMAGooAgAFIAALBEAgBEGwBmoiACAEQaADaiAEQRhqEAggBEHwBGogBEHgBmoiBkEwEL4CGiAAEI8CIAQoAnAiAEEFSQR/IARB0ABqBSAEQcwAaigCACEAIAQoAlALIQIgBEEANgKwBiAEQQA2AtgGIARBsAZqIgEgAiACIABBA3RqEEMgBEGgBWogAUEwEL4CGiAEQfgEaiEHIARBqAVqIQEDQCABIQAgBCgCyAUiAyECIANBBU8EQCAEKAKkBSECIAQoAqgFIQALAkAgAkUNACAALQAAQQFxRQ0AIANBBU8EfyAEKAKkBSEDIAQoAqgFBSABCyADIAQoAtgEIgBBBE0EfyAEQbgEagUgBCgCtAQhACAEKAK4BAsiBiAAEKgBQf8BcQRAIAchAiAEKAKYBSIAQQVPBEAgBCgC+AQhAiAEKAL0BCEACyAEQQA2ArAGIARBADYC2AYgBEGwBmoiAyACIAIgAEEDdGoQQyAEQdAFaiADQTAQvgIaIARBuAZqIQMgBEG4BGohCCAEQeAGaiEMA0AgASECIAQoAsgFIgBBBU8EQCAEKAKoBSECIAQoAqQFIQALIAIgACAEKALYBCIGQQVPBH8gBCgCtAQhBiAEKAK4BAUgCAsgBhCoAUH/AXFBAUcEQCAJIARB0AVqQTAQvgIaIARBoAVqEI8CIARB8ARqEI8CIARBsARqEI8CDAYLIARBoAVqEBkgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgYgAiAAIAIgABBwIARBsAZqIgAgBiAEQRhqEAggBEGABmoiAiAMQTAQvgIaIAAQjwIgBhCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiABIQAgBCgCyAUiAkEFTwRAIAQoAqQFIQIgBCgCqAUhAAsgAkUNACAALQAAQQFxRQ0AIARBsAZqIARB0AVqQTAQvgIaIAMhAiAEKALYBiIAQQVPBEAgBCgCuAYhAiAEKAK0BiEACyAEQfgAaiIKIAIgACAEKAKYBSIGQQVPBH8gBCgC9AQhBiAEKAL4BAUgBwsgBhBwIARBsAZqIgAQjwIgACAKIARBGGoQCCAEQdAFaiAMQTAQvgIaIAAQjwIgChCPAgwACwALIAkgBEHwBGpBMBC+AhogBEGgBWoQjwIgBEGwBGoQjwIMAwsgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgMgAiAAIAIgABBwIARBsAZqIgAgAyAEQRhqEAggBEGABmoiAiAGQTAQvgIaIAAQjwIgAxCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiAEQaAFahAZDAALAAsgCSAEQbAEakEwEL4CGgsgBEGwBmogBEHMAWogCUEwEL4CQTAQvgIaAn8CQAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMAwsgDSEAIAJFDQIMAQsgBCgCICEACyACQQZ0IAJBA3QgAGpBCGspAwB5p2tBB2pBA3YMAQtBAAshCwJAIAQCfwJ/AkACQCAEKALYBiICQQVPBEAgBCgCtAZFDQEgBCgCtAYiAEEBayEGQQAgAEUNBBogBCgCuAYMAwsgAg0BC0G4scIALQAAGkEBIQJBARAKIgNFDRIgA0EAOgAAQQEhCAwDCyACQQFrIQYgAiEAIARBuAZqCyEBIABBBnQgASAGQQN0aikDAHmna0EHakEDdgsQ4AEgBEEANgKgAiAEIAQoAgQ2ApwCIAQgBCgCACIDNgKYAiACQQRNBH8gBEG4BmoFIAQoArQGIQIgBCgCuAYLIQEgAiAGTwRAIAEgBkEDdGohB0EAIQIDQAJAAkACQAJAIAEgB0YEQCAEKALYBiIAQQRNBH8gBEG4BmoFIAQoArQGIQAgBCgCuAYLIAAgBk0NAyAGQQN0aikDACIlUA0BA0AgBCgCnAIgAkYEQCAEQZgCaiACEIoBIAQoAqACIQILIAQoApgCIgMgAmogJTwAACAEIAJBAWoiAjYCoAIgJUKAAlQgJUIIiCElRQ0ACwwCCyABKQMAISVBCCEAA0AgBCgCnAIgAkYEfyAEQZgCaiACEIoBIAQoApgCIQMgBCgCoAIFIAILIANqICU8AAAgBCAEKAKgAkEBaiICNgKgAiAlQgiIISUgAEEBayIADQALDAMLIAQoApgCIQMLIAQoApwCIQggAkECSQ0EIAJBAXYhDCACQQFrIQBBACEBA0AgASADaiIHLQAAIQYgByAAIANqIgotAAA6AAAgCiAGOgAAIABBAWshACAMIAFBAWoiAUcNAAsMBAsgBiAAQdjuwAAQtwEACyABQQhqIQEMAAsACyAGIAJByO7AABC4AQALAn8CQAJAAkAgAiALSyIKBH9BEgUgBEGYAmogCxDMASAEKAKgAiIHIAsgAmsiAUkNASAHIAFrIgAgAkcNAiABIAQoApgCIgFqIAMgAhC+AhogBCgCnAIhBkEUCyEAIAgEQCADECILIARBsAZqEI8CIAoNBAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMBQsgAkUNBAwBCyAEKAIgIQ0LIAJBBnQgAkEDdCANakEIaykDAHmna0EHakEDdgwDCyABIAdB9IjBABC5AQALIAAgAkGEicEAELsBAAtBAAshC0ECIQAgCyAXQR9qTwRAIAdFDQYgAS0AACIAQQAgAGtywEEAThCXAiECIAdBAUYNCyALQRRrIQwgAS0AASIAQf4Bc0EBaiAAcsBBAE4QlwIgAnEQlwIhDSALQRRJDQcgByALSQ0IIBdBFGohCAJAQRQgASALaiABIAxqIgprIgAgAEEUTxtFBEBBASEADAELQQEhAEEAIQIDQCACIBRqLQAAIAIgCmotAABzIgNBACADa3LAQQBOEJcCIABxIQAgAkEBaiICQRRHDQALCyAAEJcCIA1xEJcCIQ0gCyAIayIIIAxLDQkgByAMSQ0KAkAgCiABIAhqayIAIBcgACAXSRtFBEBBASEPDAELQQAgF2shAiARIQBBASEPA0AgAC0AACACIApqLQAAcyIDQQAgA2tywEEAThCXAiAPcSEPIABBAWohACACQQFqIgINAAsLIA8QlwIgDXEQlwIhAiAIQQFrIgAgB08NDEEAIQ8gACABai0AACIAQQAgAGtywEEAThCXAiACcRCXAiEDAkAgCEEDRg0AIAEgB2ohCCAXIAtrQRdqIQBBAiEHIAEhAgNAAkAgD0EBcQRAIAIgCEcNAQwDCyAIIAJrIAdNDQIgAiAHaiECCyACLQAAIQ1BASEPIAJBAWohAkEAIQcgDUEBaiANQX9zcsBBAE4QlwIgA3EQlwIhAyAAQQFqIgANAAsLQRRBAiADQf8BcUEBRhshAAsgBkUNACABECILIARBoANqEI8CIBdFDQELIBEQIgsgAEEURw0AQQAMAQtBuLHCAC0AABpBPBAKIgJFDQogAiAHNgIMIAIgBjYCCCACIAE2AgQgAiAANgIAIAJBEGogBEH0AmpBLBC+AhogBEIENwK4BiAEQZjlwAA2ArQGIAQgAjYCsAYgBEGwBmpB9NfAABAuQYTYwAAQWgshAiAEKALsAgRAIAQoAugCECILIBIEQCAWECILIARBGGoQjwIgBEHIAGoQjwIMCgtBAEEAQYCKwQAQtwEACyAMIAtBoIrBABC6AQALIAsgB0GgisEAELgBAAsgCCAMQbCKwQAQugEACyAMIAdBsIrBABC4AQALQQFBAUGQisEAELcBAAsgACAHQcCKwQAQtwEACyAEKAK0BgRAIBYQIgtBuLHCAC0AABpBCBAKIgBFDQEgACAlQiCIPgIEIAAgJT4CACAEQgQ3ArgGIARByOXAADYCtAYgBCAANgKwBiAEQbAGakHU18AAEC5B5NfAABBaIQILIARBGGoQjwIgBEHIAGoQjwIMAQsACyAEQZAHaiQAIAINCiATQYDnwABBCBBzIgBFDQUgAEHU4cAAQQMQcyIARQ0GIABB1+HAAEEDEHMiAEUNByAALQAAQQVHDQggAEEMaigCAA0JQbixwgAtAAAaQQEQCiIARQ0RIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGI4sAAEC4hAgwKCyAFIAE2AsgBIAUgAiADIAMgAUEBaiIAIAAgA0sbELYBQbixwgAtAAAaIAUoAgQhAiAFKAIAIQBBFBAKIgENAQwQCyAFKAJkIQEMAQsgASAANgIMIAFBFjYCACABIAI2AhAgBUHgAmoQtAELIAUoAtABRQ0AIAUoAswBECILAkACQAJAAkAgASgCAA4CAAEDCyABQQhqKAIARQ0CIAEoAgQhAwwBCyABLQAEQQNHDQEgAUEIaigCACIDKAIAIgIgAygCBCIAKAIAEQQAIAAoAgRFDQAgAhAiCyADECILIAEQIkG4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpB/OfAABAuIQIMCQtBuLHCAC0AABpBARAKIgBFDQsgAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAQLQbixwgAtAAAaQQEQCiIARQ0KIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY4sAAEC4hAgwDC0G4scIALQAAGkEBEAoiAEUNCSAAQQU6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBmOLAABAuIQIMAgtBuLHCAC0AABpBARAKIgBFDQggAEEFOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAELIAVByABqIABBBGoQ5wECQAJAAkAgBUEwakHw6cAAQQcQcyIBBEAgAS0AAEEDRiIARQ0BIAFBDGooAgBBA0YEQCABKAIEQQAgABtB9+nAAEEDELwCRQ0DC0G4scIALQAAGkEBEAoiAEUNCyAAQQI6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqOrAABAuIQIMAwtBuLHCAC0AABpBARAKIgBFDQogAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQbjqwAAQLiECDAILQbixwgAtAAAaQQEQCiIARQ0JIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakG46sAAEC4hAgwBCwJAAkACQAJAAkAgBUEwakGA58AAQQgQcyIABEAgAEGT3MAAQQUQcyINRQ0BIA0tAABBBEYiBkUNBCAFQfgAakEAQcEAELsCIQEgBUL+uevF6Y6VmRA3A2ggBUKBxpS6lvHq5m83A2AgBUIANwNwIBVBP0sNAiABIBkgFRC+AhogFSEDDAMLQbixwgAtAAAaQQEQCiIARQ0NIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGo3MAAEC4hAgwFC0G4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMBAsgBSAVQQZ2IgCtNwNwIAVB4ABqIBkgABANIAEgGSAVQUBxaiAVQT9xIgMQvgIaCyAFIAM6ALgBIAVBwAFqIAVB4ABqQeAAEL4CGiAFQagCakIANwMAIAVCADcDoAIgBSkD0AEgBUHYAWoiAiAFQZgCai0AACIDaiIBQYABOgAAIAUgBSkDyAE3A7gCIAUgBSkDwAE3A7ACIANBP3MiAARAIAFBAWpBACAAELsCGgtCCYYgA61CA4aEISQCQCADQThxQThHBEAgBUGQAmogJDcDACAFQbACaiACQQEQDQwBCyAFQbACaiIBIAJBARANIAVB4AJqIgBBAEE4ELsCGiAFICQ3AJgDIAEgAEEBEA0LIAVBADoAmAIgBUHUAmpCkICAgMAANwIAIAVBADYCzAIgBSAFQbACaiIANgLIAiAFIAVBoAJqNgLQAiAFQeACaiAFQcgCaiAAIAVBwAJqEKkBAkACQCAFKAKAAyIAIAUoAvwCIgJNDQAgACACayEAIAUoAugCIgcgAiAFKALwAiIIbGohASAFKAL0AiACQQJ0aiEDIAhBBEYhAgNAIAdFDQEgAkUNAiABIAMoAgA2AAAgASAIaiEBIANBBGohAyAAQQFrIgANAAsLIAVB0AJqIgAgBUGoAmopAwA3AwAgBSAFKQOgAjcDyAJBuLHCAC0AABpBEBAKIgJFDQsgAiAFKQPIAjcAACACQQhqIAApAwA3AABBACEBQbixwgAtAAAaQQsQCiIIRQ0LIA1BBGpBACAGGyEGIAggAikAADcAACAIQQdqIAJBB2ooAAA2AAAgAhAiIAVB4ABqQRAQzAEgBSgCaCEMIAUoAmAhCkEAIQMCQAJAAkACQANAIANBBGoiACAMSw0BIAMgCmoiDSABIAhqIgItAAAiB0ECdkHQ2cAAai0AADoAACANQQNqIAJBAmotAAAiA0E/cUHQ2cAAai0AADoAACANQQJqIAJBAWotAAAiAkECdCADQQZ2ckE/cUHQ2cAAai0AADoAACANQQFqIAdBBHQgAkEEdnJBP3FB0NnAAGotAAA6AAAgAUEGSSABQQNqIQEgACEDDQALIAxBDUkNAyAKIAgtAAkiAEECdkHQ2cAAai0AADoADCAMQQ1GDQIgCiAAQQR0IAgtAAoiAEEEdnJBP3FB0NnAAGotAAA6AA0gDEEORwRAIAogAEECdEE8cUHQ2cAAai0AADoADiAMQQ9rIgBFDQIgCkE9OgAPIAxBB2siAEEAIAAgDE0bIQcgCkEDakF8cSAKayECIAUoAmQhGkEAIQEDQAJAAkACQCABIApqLQAAIg3AIgNBAE4EQCACIAFrQQNxDQEgASAHTw0CA0AgASAKaiIAQQRqKAIAIAAoAgByQYCBgoR4cQ0DIAFBCGoiASAHSQ0ACwwCC0KAgICAgCAhJkKAgICAECEkAkACQAJAAn4CQAJAAkACQAJAAkACQAJAIA1BrK3AAGotAABBAmsOAwADAQsLIAFBAWoiAyAMSQ0BQgAhJgwJC0IAISYgAUEBaiIAIAxJDQIMCAsgAyAKaiwAAEG/f0oNCAwGC0IAISYgAUEBaiIAIAxPDQYgACAKaiwAACEAAkACQCANQeABRwRAIA1B7QFGDQEgA0EfakH/AXFBDEkNAiADQX5xQW5HDQQgAEFASA0FDAQLIABBYHFBoH9GDQQMAwsgAEGff0oNAgwDCyAAQUBIDQIMAQsgACAKaiwAACEAAkACQAJAAkAgDUHwAWsOBQEAAAACAAsgA0EPakH/AXFBAksgAEFATnINAwwCCyAAQfAAakH/AXFBME8NAgwBCyAAQY9/Sg0BCyABQQJqIgAgDE8NBSAAIApqLAAAQb9/Sg0CQgAhJCABQQNqIgMgDE8NBiADIApqLAAAQUBIDQRCgICAgIDgAAwDC0KAgICAgCAMAgtCACEkIAFBAmoiAyAMTw0EIAMgCmosAABBv39MDQILQoCAgICAwAALISZCgICAgBAhJAwCCyADQQFqIQEMBAtCACEkCyAFIAw2AsgBIAUgGjYCxAEgBSAKNgLAASAFICYgAa2EICSENwLMAUH/gsAAQQwgBUHAAWpB2IDAAEGMg8AAEK4BAAsgAUEBaiEBDAELIAEgDE8NAANAIAEgCmosAABBAEgNASAMIAFBAWoiAUcNAAsMCQsgASAMSQ0ACwwHC0EOIAxB3JHAABC3AQALIAAgDEHskcAAELgBAAsgACAAQfiLwAAQtwEAC0ENIAxBzJHAABC3AQALQQwgDEG8kcAAELcBAAsgCEEEQZTZwAAQuwEAC0G4scIALQAAGkEBEAoiAEUNCSAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMAQsgBSAMNgLoAiAFIBo2AuQCIAUgCjYC4AIgCBAiIAUoAugCIQAgBUKAgICAEDcCyAICQCAAQQFNBEAgAEEBRg0BDAkLIAUoAuACLAABQb9/TA0ICyAFQewAaiAFQcwCajYCACAFQQE2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAVB2AFqIgFBkdzAADYCACAFQZDcwAA2AtQBIAAQVyAAEJEBIAUgBSgC6AIiAEECayICNgLIAiACBEAgAEECSQ0FIAUoAuACIAJqLAAAQb9/TA0FCyAFQQI2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAFBk9zAADYCACAFQZHcwAA2AtQBIAAQVyAAEJEBIAUoAuACIQ0gBSgC5AIhBwJAIAYoAggiAARAIAUoAugCIQMgBigCACIBIABBGGxqIQIDQAJAIAEtAAAiAEEDRw0AIAFBDGooAgAgA0cNACABQQRqKAIAQQAgAEEDRhsgDSADELwCRQ0DCyABQRhqIgEgAkcNAAsLQbixwgAtAAAaQQEQCiIARQ0JIABBAzoAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY3MAAEC4hAiAHRQ0BIA0QIgwBCyAHBEAgDRAiCyAFQcABaiESIAVBMGoiByECIwBBgAFrIgkkABADIggQBCIsRAAAAAAAAODDZiEAAkACQAJAAn8CQAJAAkACQAJAAkACQAJ/AkACQAJAAkBC////////////AAJ+ICyZRAAAAAAAAOBDYwRAICywDAELQoCAgICAgICAgH8LQoCAgICAgICAgH8gABsgLET////////fQ2QbQgAgLCAsYRsiJCAkQugHfyIkQugHfn0iJ0I/hyIoICR8IiQgJEKAowV/IiRCgKMFfn0iJUI/hyImICR8IiRCxY3U/wd9QoCAgIBwVA0AICSnIgBBqPUraiIBIABBu/IrakgNACABIAFBsfUIbSIBQbH1CGxrIg1BH3VBsfUIcSANaiIAQe0CbiEDAkACQCAAQbz3CE0EQAJ/IAAgA0HtAmxrIgYgA0Hbk8AAai0AACIATwRAIAYgAGsMAQsgA0EBayIDQZADSw0CIAYgA0Hbk8AAai0AAGtB7QJqCyEGIANBkANPDQIgBkHtAksNAyADIA1BH3UgAWpBkANsaiIAQf//D2tBgoBgSQ0DIAZBBHRBEGogAEENdHIiBiADQZyXwABqLQAAciIPQfg/cSIBQeAtSw0DIChC6AeDICd8p0HAhD1sIgBB/6fWuQdLDQMgD0UgJkKAowWDICV8pyIDQf+iBUsgA0E8cEE7RyAAQf+T69wDS3Fycg0DIAhBhAFPBEAgCBABCwJAAkACQAJAIAMgA0GAowVtIgBBgKMFbGtBH3UgAGpBAWoOAwADAQMLIA9B8D9xIgBBEUkNASAAQRBrIA9Bj0BxciEPDAILIAFB0C1NBEAgAUEQaiAPQYdAcXIhDwwCCwJ/IAZBDXVBAWoiAUGQA28iAEEfdUGQA3EgAGoiAEGQA0kEQCABQf//D2tBgoBgTwR/IABBnJfAAGotAAAgAUENdHJBEHIFQQALDAELIABBkANBmJvAABC3AQALIg8NAQwTCyAGQQ11QQFrQQxBHxCUASIPRQ0SCyASAn8CQAJAAkACQAJAAkACQAJAIAJBgOfAAEEIEHMiAARAIABB4N/AAEEKEHMiAEUNCCAALQAAIgJBAWsOBQIDBAYHAQtBuLHCAC0AABpBARAKIgBFDRQgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuDAgLIAlBADoAAAwDCyAJQQE6AAAgCSAALQABOgABDAILIAlBEGogAEEQaikDADcDACAJQQI6AAAgCSAAKQMINwMIDAELIAlBBHIgAEEEaigCACAAQQxqKAIAENYBIAlBAzoAAAtBASELIAkgCUH/AGpBoIDAABD4ASEYQQEhAwwMCyAJQQRyIABBBGoQOCAJQQQ6AAAgCUEIaigCACEAIAkgCSgCBCIIIAlBDGooAgAiDUEYbGo2AmQgCSAINgJgIAkgADYCXCAJIAg2AlgCQCANRQ0AIAkgCEEYajYCYCAILQAAIgBBBkYNACAJQSFqIgYgCEEJaikAADcAACAJQShqIgMgCEEQaikAADcAACAJIAA6ABggCSAIKQABNwAZIAlB8ABqIgIgCUEYaiIBEGsgCSgCcA0SIA1BAUYNCCAJKAJ0IRggCSAIQTBqNgJgIAgtABgiAEEGRg0IIAYgCEEhaikAADcAACADIAhBKGopAAA3AAAgCSAAOgAYIAkgCEEZaikAADcAGSACIAEQbCAJKAJwDRIgDUECRg0JIAkoAnQhHiAJIAhByABqNgJgIAgtADAiAEEGRg0JIAYgCEE5aikAADcAACADIAhBQGspAAA3AAAgCSAAOgAYIAkgCEExaikAADcAGSACIAEQbCAJKAJwDRIgCSgCdCEfQQAhCyANQQNHBEAgDUG03cAAEKsBIRhBASELCyAJQdgAahCJAQwNC0EAQZTewAAQqwEMEgsgCUEEciAAQQRqEOcBIAlBBToAACAJQQxqKAIAIQpBACEDIAlBMGohDCAJQdAAaiAJKAIEIgEEfyAJQcwAaiAJQQhqKAIAIgA2AgAgCUHIAGogATYCACAJQcQAakEANgIAIAlBPGogADYCACAJQThqIAE2AgAgCUE0akEANgIAQQEhAyAKBUEACzYCACAJQUBrIAM2AgAgCSADNgIwIAlBBjoAGCAJQdgAakEBciEUIAlBGGpBAXIhESAJQeAAaiEIIAlB5wBqIQ1BASETA0ACQCAJQfAAaiIBIAwQPCAJKAJwIgNFDQAgCCADIAkoAngiAEEYbGoiBkEJaikAADcDACANIAZBEGopAAA3AAAgCSAGKQABNwNYIAYtAAAiEEEGRg0AIAMgAEEMbGoiBkGUAmooAgAhAyAGQZACaigCACEAIAZBjAJqKAIAIQYgCUEYahCvASARIAkpA1g3AAAgEUEIaiIOIAgpAwA3AAAgEUEPaiILIA0pAAA3AAAgCSAQOgAYAkAgBkUEQCABIAAgAxC+AQwBCyAJQfAAaiAGIAMQvgEgAEUNACAGECILIAktAHANCgJAAkACQAJAIAktAHEOAwECAwALIBQgESkAADcAACAUQQhqIA4pAAA3AAAgFEEPaiALKQAANwAAIAlBBjoAGCAJIBA6AFggCUHYAGoQtAEMBAsgIARAQajiwABBBBDKAQwOCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGsgCSgCcA0MIAkoAnQhGEEBISAMAwsgIQRAQaziwABBBRDKAQwNCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGwgCSgCcA0LIAkoAnQhHkEBISEMAgsgE0UEQEGx4sAAQQMQygEMDAsgFCARKQAANwAAIBRBCGogDikAADcAACAUQQ9qIAspAAA3AAAgCUEGOgAYIAkgEDoAWCAJQfAAaiAJQdgAahBsIAkoAnANCiAJKAJ0IR9BACETDAELCwJAICAEQCAhRQRAQaziwABBBRDJAQwMCyATRQ0BQbHiwABBAxDJAQwLC0Go4sAAQQQQyQEMCgtBACEDQQAhCyAJKAJQBEAgCkHk3cAAEKsBIRhBASELCyAMEIABIAlBGGoQrwEMCgtBuLHCAC0AABpBARAKIgBFDQwgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuCzYCBEEBIQMMCgsgA0GRA0HslsAAELcBAAtBf0GRA0H8lsAAELcBAAsgA0GQA0GYm8AAELcBAAsgCUEkakIANwIAIAlBATYCHCAJQeiSwAA2AhggCUGMrMIANgIgIAlBGGpBxJLAABDrAQALQQFBlN7AABCrAQwKC0ECQZTewAAQqwEMCQsgCSgCdAshGCAMEIABIAlBGGoQrwFBACEDQQEhCwsCQAJAAkAgAkEEaw4CAgEACyAJELQBDAILIANFDQEgCUEEchCyAQwBCyAJKAIEIQAgCUEMaigCACICBEAgACEDA0AgAxC0ASADQRhqIQMgAkEBayICDQALCyAJQQhqKAIARQ0AIAAQIgsgCw0GIBggHiAfEJQBIghFBEAgCUEBOgAYQbzvwABBKyAJQRhqQZzewABBrODAABCuAQALAkAgCCAPTgRAIA9BDXUiAUGQA28hDSAIQQ11IgAgAEGQA20iAEGQA2xrIgJBH3VBkANxIAJqIgZBkQNPDQQgDUEfdUGQA3EgDWoiA0GRA08NBSAGQduTwABqLQAAIAZB7QJsIAhBBHZB/wNxampBAWutIAJBH3UgAGogAUHwfG1qIA1BH3ZqrEKx9Qh+fCADQduTwABqLQAAIANB7QJsIA9BBHZB/wNxampBAWutfSIkQh5VDQEgCSAkPAAAIAlBJGpCATcCACAJQQI2AhwgCUG04cAANgIYIAlBCTYCXCAJIAlB2ABqNgIgIAkgCTYCWCASQQRqIAlBGGoQRkEAIQMMAgtBuLHCAC0AABpBASEDQQEQCiIARQ0CIABBBDoAACAJQgQ3AiAgCUGw5cAANgIcIAkgADYCGCASIAlBGGpBxOHAABAuNgIEDAELQQAhAyASQQA2AgQLIBIgAzYCACAJQYABaiQADAcLAAsgBkGRA0GMl8AAELcBAAsgA0GRA0GMl8AAELcBAAsgCSgCdAshGCAJQdgAahCJAQsgCSAYNgIYQbzvwABBKyAJQRhqQazewABBnODAABCuAQALQbzewABBK0HQ38AAENEBAAsgBSgCwAFFBEAgBUHIAWopAgAhJCAFKALEASEIQQAhACAFQQA2AmggBUIENwJgIwBBIGsiBiQAAkACQAJAAkACQAJAIAdBgOfAAEEIEHMiAQRAIAFBiOfAAEEIEHMiAUUNASABLQAAQQNGIgNFDQIgAUEMaigCACIHRQ0DIAEoAgQhASAGQQhqIAcQ4AEgBigCDCECIAYoAgggAUEAIAMbIAcQvgIhASASIAc2AgggEiACNgIEIBIgATYCAAwEC0G4scIALQAAGkEBEAoiAUUNBCABQQE6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHQ58AAEC4hASASQQA2AgAgEiABNgIEDAMLQbixwgAtAAAaQQEQCiIBRQ0DIAFBAToAACAGQgQ3AhggBkGw5cAANgIUIAYgATYCECAGQRBqQdDnwAAQLiEBIBJBADYCACASIAE2AgQMAgtBuLHCAC0AABpBARAKIgFFDQIgAUEBOgAAIAZCBDcCGCAGQbDlwAA2AhQgBiABNgIQIAZBEGpB0OfAABAuIQEgEkEANgIAIBIgATYCBAwBC0G4scIALQAAGkEBEAoiAUUNASABQQY6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHA58AAEC4hASASQQA2AgAgEiABNgIECyAGQSBqJAAMAQsACyAFKALAASINBEAgBSgCyAEhCyAFKALEASEGIAgNBEEEIRNBAAwFCyAFKALEASECQQRBABDtASAIRSAkQv////8Pg1ByDQEgCBAiDAELIAUoAsQBIQILIAVByABqELIBCyAFQTBqELQBDAMLIAUgJDcCWCAFIAg2AlQgBUHgAGoiASgCCCIAIAEoAgRGBEAgASAAEIIBIAEoAgghAAsgASAAQQFqNgIIIAEoAgAgAEEMbGoiASAFQdQAaiIAKQIANwIAIAFBCGogAEEIaigCADYCACAFKAJoIQAgBSgCYCETIAUoAmQLIQIgBUGoAmogBUHQAGooAgA2AgAgBSAFKQJINwOgAiAFQTBqELQBIBNFDQFBuLHCAC0AABogBSgCqAIhASAFKAKkAiEHIAUoAqACIQhBgAEQCiIDRQ0EIAVCgAE3AmQgBSADNgJgIAUgBUHgAGoiAzYCMCADQefswABBARDkASAFIAEEf0EBBSADQdzswABBARDkAUEACzoA5AIgBSAFQTBqNgLgAgJ/IAhFBEBBACEBQQAMAQsgBSAHNgLcASAFIAg2AtgBIAVBADYC1AEgBSAHNgLMASAFIAg2AsgBIAVBADYCxAFBAQshAyAFIAE2AuABIAUgAzYC0AEgBSADNgLAAQNAAkAgBUEIaiAFQcABahBEIAUoAggiAQRAIAVB4AJqIAEgBSgCDBDcAQwCBSAFLQDkAgRAIAUoAuACKAIAQdzswABBARDkAQsgBSgCZCEiIAUoAmAiB0UNASAFKAJoIRogBUGgAmoQsgFBBCEKQQAhA0EBDAULAAsLIAUgIjYCwAFBvO/AAEErIAVBwAFqQfDqwABBjOvAABCuAQALQeiAwABBKkGUgcAAEN4BAAtBuLHCAC0AABpBDBAKIgpFDQIgBUEANgK4AiAFQgE3ArACIAVB+ABqQcjqwAA2AgAgBUEDOgCAASAFQSA2AnAgBUEANgJ8IAVBADYCaCAFQQA2AmBBuLHCAC0AABogBSAFQbACajYCdCACKAIAIQEgAigCCCEAQQgQCiITRQ0CIBMgATYCACATIAEgAEEEdGo2AgQgBUEANgLsAiAFQoGAgIAQNwLkAiAFIBM2AuACQQEhAwNAAkAgA0UNACATIANBA3RqQQhrIQECQANAIAEoAgAiDCABQQRqKAIARw0BIAFBCGshASADQQFrIgMNAAsgBUEANgLoAgwBCyABIAxBEGo2AgAgDCgCCCIGIAxBDGooAgBBBHRqIQcgBSADNgLoAiAFKALkAiADRgRAIAVB4AJqIQgjAEEgayILJAACQAJAIANBAWoiAUUNAEEEIAgoAgQiDUEBdCIAIAEgACABSxsiACAAQQRNGyIDQQN0IQEgA0GAgICAAUlBAnQhAAJAIA1FBEAgC0EANgIYDAELIAtBBDYCGCALIA1BA3Q2AhwgCyAIKAIANgIUCyALQQhqIAAgASALQRRqEHcgCygCDCEAIAsoAghFBEAgCCADNgIEIAggADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIAtBIGokACAFKALoAiEDCyAFKALgAiITIANBA3RqIgAgBzYCBCAAIAY2AgAgBSADQQFqIgM2AugCIAVByAJqIAwoAgAgDCgCBCgCDBECACAFKALIAkECRw0BIAUoAswCIQEgBSgC0AIhACAFQQA2AjggBUIBNwIwIAVBAzoA4AEgBUEgNgLQASAFQQA2AtwBIAVByOnAADYC2AEgBUEANgLIASAFQQA2AsABIAUgBUEwajYC1AECQCABIAVBwAFqIAAoAgwRAQBFBEAgBSgCMCIBRQ0DIAUpAjQhJCAFIAUoAuwCIgBBAWo2AuwCIAUgJDcCNCAFIAE2AjACQCAARQRAIAVB4ABqIAEgJEIgiKcQEQ0BIAUoAjRFDQQgBSgCMBAiDAQLIAVBATYCxAEgBUGM6MAANgLAASAFQgE3AswBIAVBHTYCzAIgBSAFQcgCajYCyAEgBSAFQTBqNgLIAiAFQbACakHI6sAAIAVBwAFqEC9FDQILIAUoAjQEQCAFKAIwECILIAUoAuQCBEAgExAiC0Gc6sEAQTcgBUHUAGpB4OrAAEGw68EAEK4BAAtBnOrBAEE3IAVB1ABqQeDpwABBsOvBABCuAQALIAUoAjRFDQEgBSgCMBAiDAELCyAFKALkAgRAIBMQIgsgBUHIAWogBUG4AmooAgAiADYCACAFIAUpArACIiQ3A8ABIApBCGogADYCACAKICQ3AgAgAigCACACKAIIEMYBIAIoAgQEQCACKAIAECILIAIQIkEBIQ1BBCETQQAhB0EAIQtBACEGQQAhAEEAIQJBASEDQQALIQEgIwRAIBkQIgsgBUEuaiAFQcIBai0AADoAACAFIAUvAMABOwEsIBUEQCAdECILIBwEQCAbECILQbixwgAtAAAaQTgQCiIIRQ0BIAggAToANCAIIBo2AjAgCCAiNgIsIAggBzYCKCAIIAs2AiQgCCAGNgIgIAggDTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KBgICAIDcClAMgAyABNgKQAyADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQZADahAzIANB+AFqIAJBMBC+AhogARAiIAMoAoACIQYDQCASIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAYhAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACATIQIgBUUEQCADKAL8ASEEIBEhAgsgBEUNASACIARBAWs2AgAMAQsLIANBwANqIgIgA0H4AWoiAUEwEL4CGiABIANBsAJqIgRBMBC+AhogASACEHUgA0GQA2oiBSABQTAQvgIaIAIQjwIgBCAFQTAQvgIaIAEgA0HgAmoiAkEwEL4CGiABIANBOGoQdSACIAFBMBC+AhoMAAsACyAFIARBvPvAABC5AQALIAogBEHM+8AAELkBAAsgCiAEQdz7wAAQuQEACyAKIARB7PvAABC5AQALIAoNAAsMBAtBgJfCAEErQaz7wAAQ3gEAC0GAl8IAQStBnPvAABDeAQALAAtB/PvAAEEOQYz8wAAQ3gEACyADQfgBaiIBIANB6ABqQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0GwAmogA0H4AWpBMBC+AhogA0HgAmoiBCADQQhqQTAQvgIaIAMoAuACIgtBAkYEQCADKALkAiEECwJAAkACQAJAAkAgBCgCKCIBQQVPBH8gBCgCBAUgAQsgDUEGdiICSwRAIAtBAkcNASADIAMoAuQCIAJBlP7AABDTASADKAIAIQIgAygCBCEBIANBADYC+AEgA0EANgKgAiADQfgBaiIEIAIgAiABQQN0ahBDIANBkANqIARBMBC+AhoMAgsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiIBIANBkANqEDMgA0H4AWoiAiABQTAQvgIaIAJBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogC0ECRg0EIANB4AJqEI8CDAQLIANBwANqIANBCGpBMBC+AhogAygC6AMiBEEETQR/IANByANqBSADKALEAyEEIAMoAsgDCyEBIAIgBEsNASADQQA2AvgBIANBADYCoAIgA0H4AWoiByABIAJBA3RqIAEgBEEDdGoQQyADQZADaiAHQTAQvgIaIANBwANqEI8CCyANQT9xRQ0BIAMoArgDIgRBBE0EfyADQZgDagUgAygClAMhBCADKAKYAwsgBEUNAUEIayECIARBA3QhBCAXQj+DIRhCACEWQgAgF31CP4MhFwNAIAIgBGoiASAWIAEpAwAiFiAYiIQ3AwAgFiAXhiEWIARBCGsiBA0ACwwBCyACIARBpP7AABC5AQALIANB+AFqIgEgA0GQA2pBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQcADaiADQfgBakEwEL4CGgsgACADQbACakEwEL4CQTBqIANBwANqQTAQvgIaIANBmAFqEI8CIANBOGoQjwIMAgsgAkEIaiEHIAQLRQ0BIAcpAwBCAVEEQCAFQQRNBH8gAUEIagUgASgCBCEFIAEoAggLIQQgA0EANgL4ASADQQA2AqACIANB+AFqIgEgBCAEIAVBA3RqEEMgA0GQA2ogAUEwEL4CGiADQQI2AugCIANCBDcC4AIgA0EANgLAAyADQQA2AugDIANBwANqIgIgA0HgAmoQMyABIAJBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyAAQTBqIANB+AFqQTAQvgIaIAAgA0GQA2pBMBC+AhoMAQsgBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEBIANBADYC+AEgA0EANgKgAiADQfgBaiIHIAEgASAFQQN0ahBDIANBwANqIAdBMBC+AhogBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyECIARFDQIgA0H4AWoiASADQcADaiACKQMAEE0gACABQTAQvgIiAEHYAGogAykDqAIiFkIAUjYCACAAQThqIBY3AwAgAEEANgIwCyADQfADaiQADwtBAEEAQfz6wAAQtwEAC0EAQQBBjPvAABC3AQALyC8CDX8BfiMAQbACayIEJAAgASgCACEGAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAggiAiABKAIEIgNJBEADQCACIAZqLQAAIgVBCWsiB0EXS0EBIAd0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEGAAWogBiADIAMgAkEBaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAoQBIQIgBCgCgAEhA0EUEAoiAQ0BDBoLIAVB5QBLDQUgBUEiRg0CIAVBLUYNAyAFQdsARw0GIAEgAS0AGEEBayIFOgAYIAJBAWohAiAFQf8BcUUNASABIAI2AghBACEHIARBADYC+AEgBEIINwLwASAEQagBaiEIIARBoAFqQQFyIQlBCCEKAn8CQAJAA0AgASgCACEGIAIgA08NAQNAAkACQAJAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0HDAELIAVBH0wEQCAFQQ1HDQEMBwsgBUEgRg0GIAVBLEYNASAFQd0ARg0DCyALDQEMAwsgC0UNAyABIAJBAWoiAjYCCCAEQdgAaiAGIAMgAyACIANJBH8DQCACIAZqLQAAIgVBCWsiC0EXS0EBIAt0QZOAgARxRXINBCABIAJBAWoiAjYCCCACIANHDQALIAMFIAILQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCXCECIAQoAlghA0EUEAoiBkUNIyAGIAM2AgwgBkEFNgIAIAYgAjYCEAwICyAEQUBrIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJEIQIgBCgCQCEDQRQQCiIGRQ0iIAYgAzYCDCAGQQc2AgAgBiACNgIQDAcLIAQoAvABIQYgBCkC9AEhD0EAIQhBBAwHCyAFQd0ARw0AIARByABqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJMIQIgBCgCSCEDQRQQCiIGRQ0gIAYgAzYCDCAGQRU2AgAgBiACNgIQDAULIARBoAFqIAEQCSAELQCgASILQQZGBEAgBCgCpAEhBgwFCyAEQYoCaiIMIAlBAmotAAA6AAAgBEGgAmoiDSAIQQhqKQMANwMAIAQgCS8AADsBiAIgBCAIKQMANwOYAiAEKAKkASEOIAQoAvQBIAdGBH8gBEHwAWohAyMAQSBrIgIkAAJAAkAgB0EBaiIFRQ0AQQQgAygCBCIGQQF0IgcgBSAFIAdJGyIFIAVBBE0bIgdBGGwhBSAHQdaq1SpJQQN0IQoCQCAGRQRAIAJBADYCGAwBCyACQQg2AhggAiAGQRhsNgIcIAIgAygCADYCFAsgAkEIaiAKIAUgAkEUahB3IAIoAgwhBSACKAIIRQRAIAMgBzYCBCADIAU2AgAMAgsgBUGBgICAeEYNASAFRQ0AAAsQ6gEACyACQSBqJAAgBCgC8AEhCiAEKAL4AQUgBwtBGGwgCmoiAiALOgAAIAIgDjYABCACQQNqIAwtAAA6AAAgAiAELwGIAjsAASACIAQpA5gCNwAIIAJBEGogDSkDADcAAEEBIQsgBCAEKAL4AUEBaiIHNgL4ASABKAIIIQIgASgCBCEDDAILIAEgAkEBaiICNgIIIAIgA0cNAAsLIAMhAgsgBEHQAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAlQhAiAEKAJQIQNBFBAKIgZFDRsgBiADNgIMIAZBAjYCACAGIAI2AhALIAQoAvABIQMgBwRAIAMhAgNAIAIQtAEgAkEYaiECIAdBAWsiBw0ACwsgBCgC9AEEQCADECILQQEhCEEGCyEJIAEgAS0AGEEBajoAGCABKAIAIQUCQCABKAIIIgIgASgCBCIDSQRAA0ACQAJAAkACQAJAAkAgAiAFai0AACIHQQxNBEAgB0EJa0ECSQ0GDAELIAdBH00EQCAHQQ1HDQEMBgsgB0EgRg0FIAdBLEYNASAHQd0ARg0CCyAEQSBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIkIQUgBCgCICEDQRQQCiICRQ0hIAJBFjYCAAwHCyABIAJBAWoiAjYCCCACIANPDQIDQCACIAVqLQAAIgdBCWsiCkEXS0EBIAp0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgwCCyABIAJBAWo2AgggBCAPNwOoASAEIAY2AqQBIAQgCToAoAEgCEUNCiAEQQY6AIgBIAQgBjYCjAEMGwsgB0HdAEcNACAEQThqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI8IQUgBCgCOCEDQRQQCiICRQ0eIAJBFTYCAAwECyAEQTBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI0IQUgBCgCMCEDQRQQCiICRQ0dIAJBFjYCAAwDCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEEoaiAFIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCLCEFIAQoAighA0EUEAoiAkUNGiACQQI2AgALIAIgAzYCDCACIAU2AhAgBCACNgK4ASAEIA83A6gBIAQgBjYCpAEgBCAJOgCgASAIRQRAIARBBjoAiAEgBCACNgKMASAEQaABahC0AQwWCyAEQQY6AIgBIAQgBjYCjAEgAhDNAQwVCyABIAM2AgwgAUEFNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDBcLIARBGGogBiADIAMgAiACIANLGxC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEDQRQQCiIBRQ0XIAEgAzYCDCABQRg2AgAgACABNgIEIABBBjoAACABIAI2AhAMFgsgAUEUakEANgIAIAEgAkEBajYCCCAEQaABaiABIAFBDGoQECAEKAKgAUECRwRAIAQoAqQBIQMgBEEQaiAEKAKoASICEOABIAQoAhQhBSAEKAIQIAMgAhC+AiEDIAQgAjYClAEgBCAFNgKQASAEIAM2AowBIARBAzoAiAEMEwsgACAEKAKkATYCBCAAQQY6AAAMFQsgASACQQFqNgIIIARBoAFqIgIgAUEAEDQgBCkDoAFCA1IEQCAEQYgBaiACEKMBDBILIAAgBCgCqAE2AgQgAEEGOgAADBQLIARBmAFqIARBsAFqKQMANwMAIARBkAFqIARBqAFqKQMANwMAIAQgBCkDoAE3A4gBDBALIAVB8wBNBEAgBUHmAEYNBCAFQe4ARw0BIAEgAkEBajYCCCABQfCJwgBBAxBxIgENAiAEQQA6AIgBDBELIAVB9ABGDQIgBUH7AEYNBAsgBUEwa0H/AXFBCkkNBCAEQQhqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCEFQRQQCiICRQ0SIAIgBTYCDCACQQo2AgAgAiADNgIQDBALIABBBjoAACAAIAE2AgQMEAsgASACQQFqNgIIIAFB84nCAEEDEHEiAUUNAyAAQQY6AAAgACABNgIEDA8LIAEgAkEBajYCCCABQfaJwgBBBBBxIgFFDQogAEEGOgAAIAAgATYCBAwOCyABIAEtABhBAWsiBToAGCACQQFqIQIgBUH/AXFFDQggASACNgIIIARBAToAxAEgBCABNgLAASAEQcgBaiEHIwBBQGoiBSQAIARBwAFqIgooAgAiCCgCACEJAkACQAJAIAgoAggiAyAIQQRqKAIAIgJJBEADQAJAAkACQAJAAkACQAJAIAMgCWotAAAiBkEMTQRAIAZBCWtBAkkNBwwBCyAGQR9NBEAgBkENRw0BDAcLIAZBIEYNBiAGQSxGDQIgBkH9AEYNAQsgCi0ABEUNAgwDC0EAIQYgB0EANgIEDAkLQSwhBiAKLQAEDQEgCCADQQFqIgM2AgggBUEoaiAJIAIgAiACIANLBH8DQCADIAlqLQAAIgZBCWsiCkEXS0EBIAp0QZOAgARxRXINBCAIIANBAWoiAzYCCCACIANHDQALIAIFIAMLQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCLCEDIAUoAighBkEUEAoiAkUNBiACIAY2AgwgAkEFNgIAIAcgAjYCBCACIAM2AhBBASEGDAgLQQEhBiAFIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIEIQMgBSgCACEIQRQQCiICRQ0FIAIgCDYCDCACQQg2AgAgByACNgIEIAIgAzYCEAwHCyAKQQA6AAQLAkAgBkEiRwRAIAZB/QBGDQFBASEGIAVBCGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAgwhAyAFKAIIIQhBFBAKIgJFDQUgAiAINgIMIAJBETYCACAHIAI2AgQgAiADNgIQDAcLQQAhBiAIQRRqQQA2AgAgCCADQQFqNgIIIAVBNGogCCAIQQxqEBAgBSgCNEECRwRAIAUoAjghAyAFQRBqIAUoAjwiAhDgASAFKAIUIQggBSgCECADIAIQvgIhAyAHQQxqIAI2AgAgB0EIaiAINgIAIAcgAzYCBAwHCyAHIAUoAjg2AgRBASEGDAYLQQEhBiAFQRhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIcIQMgBSgCGCEIQRQQCiICRQ0DIAIgCDYCDCACQRU2AgAgByACNgIEIAIgAzYCEAwFCyAIIANBAWoiAzYCCCACIANHDQALIAIhAwtBASEGIAVBIGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiQhAyAFKAIgIQhBFBAKIgINAQsACyACIAg2AgwgAkEDNgIAIAcgAjYCBCACIAM2AhALIAcgBjYCACAFQUBrJAAgBCgCyAENAiAEKALMASICRQRAIARBADYCrAEgBEEANgKkASAEQQU6AKABDAcLIARB0AFqKQIAIQ8gBEEANgLgASAEQQA2AtgBIAQgDzcCjAIgBCACNgKIAiAEQZgCaiIDIARBwAFqEF4gBC0AmAJBBkYNAyAEQfABaiICIARB2AFqIARBiAJqIAMQDCAELQDwAUEGRwRAIAIQtAELIARB8AFqQQFyIQogBEGYAmpBAXIhCwNAAkAgBEGIAmohByMAQUBqIgUkACAEQcABaiIMKAIAIggoAgAhCQJAAkACQCAIKAIIIgMgCEEEaigCACICSQRAA0ACQAJAAkACQAJAAkACQCADIAlqLQAAIgZBDE0EQCAGQQlrQQJJDQcMAQsgBkEfTQRAIAZBDUcNAQwHCyAGQSBGDQYgBkEsRg0CIAZB/QBGDQELIAwtAARFDQIMAwtBACEGIAdBADYCBAwJC0EsIQYgDC0ABA0BIAggA0EBaiIDNgIIIAVBKGogCSACIAIgAiADSwR/A0AgAyAJai0AACIGQQlrIgxBF0tBASAMdEGTgIAEcUVyDQQgCCADQQFqIgM2AgggAiADRw0ACyACBSADC0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiwhAyAFKAIoIQZBFBAKIgJFDQYgAiAGNgIMIAJBBTYCACAHIAI2AgQgAiADNgIQQQEhBgwIC0EBIQYgBSAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCBCEDIAUoAgAhCEEUEAoiAkUNBSACIAg2AgwgAkEINgIAIAcgAjYCBCACIAM2AhAMBwsgDEEAOgAECwJAIAZBIkcEQCAGQf0ARg0BQQEhBiAFQQhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIMIQMgBSgCCCEIQRQQCiICRQ0FIAIgCDYCDCACQRE2AgAgByACNgIEIAIgAzYCEAwHCyAIQRRqQQA2AgBBASEGIAggA0EBajYCCCAFQTRqIAggCEEMahAQIAUoAjRBAkYEQCAHIAUoAjg2AgQMBwsgBSgCOCEDIAVBEGogBSgCPCICEOABIAUoAhQhBiAFKAIQIAMgAhC+AiEDIAdBDGogAjYCACAHQQhqIAY2AgAgByADNgIEQQAhBgwGC0EBIQYgBUEYaiAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCHCEDIAUoAhghCEEUEAoiAkUNAyACIAg2AgwgAkEVNgIAIAcgAjYCBCACIAM2AhAMBQsgCCADQQFqIgM2AgggAiADRw0ACyACIQMLQQEhBiAFQSBqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIkIQMgBSgCICEIQRQQCiICDQELAAsgAiAINgIMIAJBAzYCACAHIAI2AgQgAiADNgIQCyAHIAY2AgAgBUFAayQAIAQoAowCIQICQAJAIAQoAogCBEAgAiEFDAELIAJFDQIgBCkCkAIhDyAEQZgCaiAEQcABahBeIAQtAJgCIgNBBkcNASAEKAKcAiEFIA+nRQ0AIAIQIgsgBCAFNgKkASAEQQY6AKABDAcLIAogCykAADcAACAKQQ9qIAtBD2opAAA3AAAgCkEIaiALQQhqKQAANwAAIAQgDzcC6AEgBCACNgLkASAEIAM6APABIARBmAJqIgIgBEHYAWogBEHkAWogBEHwAWoQDCAELQCYAkEGRg0BIAIQtAEMAQsLIARBowJqIARB4AFqKAIANgAAIAQgBCkC2AE3AJsCIARBqAFqIARBnwJqKQAANwAAIARBBToAoAEgBCAEKQCYAjcAoQEMBgsgBEGgAWoiAiABQQEQNCAEKQOgAUIDUgRAIARBiAFqIAIQowEMCgsgACAEKAKoATYCBCAAQQY6AAAMDAsgBEGBAjsBiAEMCQsgBCAEKALMATYCpAEgBEEGOgCgAQwCCyAEIAQoApwCNgKkASAEQQY6AKABIA+nRQ0AIAIQIgsgBEHYAWoQsgELQQEMAQtBAAshByABIAEtABhBAWo6ABggASgCACEGAkAgASgCCCICIAEoAgQiA0kEQANAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0EDAELIAVBH00EQCAFQQ1HDQEMBAsgBUEgRg0DIAVBLEYNASAFQf0ARg0CCyAEQegAaiAGIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCbCEFIAQoAmghA0EUEAoiAkUNDCACQRY2AgAMBQsgBEH4AGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnwhBSAEKAJ4IQNBFBAKIgJFDQsgAkEVNgIADAQLIAEgAkEBajYCCCAHBEAgBCAEKAKkATYCjAEgBEEGOgCIAQwHCyAEQZgBaiAEQbABaikDADcDACAEQZABaiAEQagBaikDADcDACAEIAQpA6ABNwOIAQwGCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEHwAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnQhBSAEKAJwIQNBFBAKIgJFDQcgAkEDNgIACyACIAM2AgwgAiAFNgIQIAQgAjYCuAEgB0UEQCAEQQY6AIgBIAQgAjYCjAEgBEGgAWoQtAEMAwsgBCAEKAKkATYCjAEgBEEGOgCIASACEM0BDAILIARB4ABqIAYgAyADIAIgAiADSxsQtgFBuLHCAC0AABogBCgCZCECIAQoAmAhA0EUEAoiAUUNBSABIAM2AgwgAUEYNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDAQLIARBATsBiAEMAQsgBC0AiAFBBkcNACAEKAKMASECDAELIAAgBCkDiAE3AwAgAEEQaiAEQZgBaikDADcDACAAQQhqIARBkAFqKQMANwMADAELIwBBEGsiAyQAAkAgAigCDARAIAIhAQwBCyADQQhqIAJBCGooAgA2AgAgAyACKQIANwMAIAEgAxC/ASEBIAIQIgsgA0EQaiQAIABBBjoAACAAIAE2AgQLIARBsAJqJAAPCwALpB8CCH8BfgJAAkACQAJAAkAgAEH1AU8EQCAAQc3/e08NBSAAQQtqIgBBeHEhBEHwsMIAKAIAIghFDQRBACAEayEBAn9BACAEQYACSQ0AGkEfIARB////B0sNABogBEEGIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiB0ECdEHUrcIAaigCACICRQRAQQAhAAwCC0EAIQAgBEEZIAdBAXZrQR9xQQAgB0EfRxt0IQYDQAJAIAIoAgRBeHEiBSAESQ0AIAUgBGsiBSABTw0AIAIhAyAFIgENAEEAIQEgAiEADAQLIAJBFGooAgAiBSAAIAUgAiAGQR12QQRxakEQaigCACICRxsgACAFGyEAIAZBAXQhBiACDQALDAELQeywwgAoAgAiAUEQIABBC2pBeHEgAEELSRsiBEEDdiICdiIAQQNxBEACQCAAQX9zQQFxIAJqIgBBA3QiBEHsrsIAaigCACICQQhqIgUoAgAiAyAEQeSuwgBqIgRHBEAgAyAENgIMIAQgAzYCCAwBC0HssMIAIAFBfiAAd3E2AgALIAIgAEEDdCIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEIAUPCyAEQfSwwgAoAgBNDQMCQAJAAkACQAJAAkAgAEUEQEHwsMIAKAIAIgBFDQogAGhBAnRB1K3CAGooAgAiBigCBEF4cSAEayECAkAgBigCECIARQRAIAZBFGooAgAiAEUNAQsDQCAAKAIEQXhxIARrIgUgAkkhAyAFIAIgAxshAiAAIAYgAxshBiAAKAIQIgEEfyABBSAAQRRqKAIACyIADQALCyAGEF8gAkEQSQ0CIAYgBEEDcjYCBCAEIAZqIgQgAkEBcjYCBCACIARqIAI2AgBB9LDCACgCACIDDQEMBQsCQEECIAJBH3EiAnQiA0EAIANrciAAIAJ0cWgiAkEDdCIFQeyuwgBqKAIAIgBBCGoiBigCACIDIAVB5K7CAGoiBUcEQCADIAU2AgwgBSADNgIIDAELQeywwgAgAUF+IAJ3cTYCAAsgACAEQQNyNgIEIAAgBGoiBSACQQN0IgEgBGsiAkEBcjYCBCAAIAFqIAI2AgBB9LDCACgCACIDDQIMAwsgA0F4cUHkrsIAaiEAQfywwgAoAgAhAQJ/QeywwgAoAgAiBUEBIANBA3Z0IgNxRQRAQeywwgAgAyAFcjYCACAADAELIAAoAggLIQMgACABNgIIIAMgATYCDCABIAA2AgwgASADNgIIDAMLIAYgAiAEaiIAQQNyNgIEIAAgBmoiACAAKAIEQQFyNgIEDAMLIANBeHFB5K7CAGohAEH8sMIAKAIAIQECf0HssMIAKAIAIgRBASADQQN2dCIDcUUEQEHssMIAIAMgBHI2AgAgAAwBCyAAKAIICyEEIAAgATYCCCAEIAE2AgwgASAANgIMIAEgBDYCCAtB/LDCACAFNgIAQfSwwgAgAjYCACAGDwtB/LDCACAENgIAQfSwwgAgAjYCAAsgBkEIag8LIAAgA3JFBEBBACEDIAhBAiAHdCIAQQAgAGtycSIARQ0DIABoQQJ0QdStwgBqKAIAIQALIABFDQELA0AgACADIAAoAgRBeHEiBSAEayIGIAFJIgcbIQggACgCECICRQRAIABBFGooAgAhAgsgAyAIIAQgBUsiABshAyABIAYgASAHGyAAGyEBIAIiAA0ACwsgA0UNACAEQfSwwgAoAgAiAE0gASAAIARrT3ENACADEF8CQCABQRBPBEAgAyAEQQNyNgIEIAMgBGoiAiABQQFyNgIEIAEgAmogATYCACABQYACTwRAIAIgARBgDAILIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiBEEBIAFBA3Z0IgFxRQRAQeywwgAgASAEcjYCACAADAELIAAoAggLIQEgACACNgIIIAEgAjYCDCACIAA2AgwgAiABNgIIDAELIAMgASAEaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIECyADQQhqDwsCQAJAAkACQAJAAkACQCAEQfSwwgAoAgAiAUsEQCAEQfiwwgAoAgAiAE8EQEEAIQEgBEGvgARqIgBBEHZAACICQX9GIgUNCSACQRB0IgNFDQlBhLHCAEEAIABBgIB8cSAFGyIGQYSxwgAoAgBqIgA2AgBBiLHCAEGIscIAKAIAIgEgACAAIAFJGzYCAAJAAkBBgLHCACgCACIFBEBB1K7CACEAA0AgACgCACIBIAAoAgQiAmogA0YNAiAAKAIIIgANAAsMAgtBkLHCACgCACIAQQAgACADTRtFBEBBkLHCACADNgIAC0GUscIAQf8fNgIAQdiuwgAgBjYCAEHUrsIAIAM2AgBB8K7CAEHkrsIANgIAQfiuwgBB7K7CADYCAEHsrsIAQeSuwgA2AgBBgK/CAEH0rsIANgIAQfSuwgBB7K7CADYCAEGIr8IAQfyuwgA2AgBB/K7CAEH0rsIANgIAQZCvwgBBhK/CADYCAEGEr8IAQfyuwgA2AgBBmK/CAEGMr8IANgIAQYyvwgBBhK/CADYCAEGgr8IAQZSvwgA2AgBBlK/CAEGMr8IANgIAQaivwgBBnK/CADYCAEGcr8IAQZSvwgA2AgBB4K7CAEEANgIAQbCvwgBBpK/CADYCAEGkr8IAQZyvwgA2AgBBrK/CAEGkr8IANgIAQbivwgBBrK/CADYCAEG0r8IAQayvwgA2AgBBwK/CAEG0r8IANgIAQbyvwgBBtK/CADYCAEHIr8IAQbyvwgA2AgBBxK/CAEG8r8IANgIAQdCvwgBBxK/CADYCAEHMr8IAQcSvwgA2AgBB2K/CAEHMr8IANgIAQdSvwgBBzK/CADYCAEHgr8IAQdSvwgA2AgBB3K/CAEHUr8IANgIAQeivwgBB3K/CADYCAEHkr8IAQdyvwgA2AgBB8K/CAEHkr8IANgIAQfivwgBB7K/CADYCAEHsr8IAQeSvwgA2AgBBgLDCAEH0r8IANgIAQfSvwgBB7K/CADYCAEGIsMIAQfyvwgA2AgBB/K/CAEH0r8IANgIAQZCwwgBBhLDCADYCAEGEsMIAQfyvwgA2AgBBmLDCAEGMsMIANgIAQYywwgBBhLDCADYCAEGgsMIAQZSwwgA2AgBBlLDCAEGMsMIANgIAQaiwwgBBnLDCADYCAEGcsMIAQZSwwgA2AgBBsLDCAEGksMIANgIAQaSwwgBBnLDCADYCAEG4sMIAQaywwgA2AgBBrLDCAEGksMIANgIAQcCwwgBBtLDCADYCAEG0sMIAQaywwgA2AgBByLDCAEG8sMIANgIAQbywwgBBtLDCADYCAEHQsMIAQcSwwgA2AgBBxLDCAEG8sMIANgIAQdiwwgBBzLDCADYCAEHMsMIAQcSwwgA2AgBB4LDCAEHUsMIANgIAQdSwwgBBzLDCADYCAEHosMIAQdywwgA2AgBB3LDCAEHUsMIANgIAQYCxwgAgAzYCAEHksMIAQdywwgA2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMCgsgACgCDCABIAVLcg0AIAMgBUsNAwtBkLHCAEGQscIAKAIAIgAgAyAAIANJGzYCACADIAZqIQJB1K7CACEAAkACQANAIAIgACgCAEcEQCAAKAIIIgANAQwCCwsgACgCDEUNAQtB1K7CACEAA0ACQCAFIAAoAgAiAU8EQCABIAAoAgRqIgIgBUsNAQsgACgCCCEADAELC0GAscIAIAM2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAgBSACQSBrQXhxQQhrIgAgACAFQRBqSRsiAUEbNgIEQdSuwgApAgAhCSABQRBqQdyuwgApAgA3AgAgASAJNwIIQdiuwgAgBjYCAEHUrsIAIAM2AgBB3K7CACABQQhqNgIAQeCuwgBBADYCACABQRxqIQADQCAAQQc2AgAgAEEEaiIAIAJJDQALIAEgBUYNCSABIAEoAgRBfnE2AgQgBSABIAVrIgBBAXI2AgQgASAANgIAIABBgAJPBEAgBSAAEGAMCgsgAEF4cUHkrsIAaiEBAn9B7LDCACgCACICQQEgAEEDdnQiAHFFBEBB7LDCACAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMCQsgACADNgIAIAAgACgCBCAGajYCBCADIARBA3I2AgQgAiADIARqIgVrIQEgAkGAscIAKAIARg0DIAJB/LDCACgCAEYNBCACKAIEIgRBA3FBAUYEQAJAIARBeHEiAEGAAk8EQCACEF8MAQsgAkEMaigCACIGIAJBCGooAgAiB0cEQCAHIAY2AgwgBiAHNgIIDAELQeywwgBB7LDCACgCAEF+IARBA3Z3cTYCAAsgACACaiICKAIEIQQgACABaiEBCyACIARBfnE2AgQgBSABQQFyNgIEIAEgBWogATYCACABQYACTwRAIAUgARBgDAgLIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiAkEBIAFBA3Z0IgFxRQRAQeywwgAgASACcjYCACAADAELIAAoAggLIQEgACAFNgIIIAEgBTYCDCAFIAA2AgwgBSABNgIIDAcLQfiwwgAgACAEayIBNgIAQYCxwgBBgLHCACgCACIAIARqIgI2AgAgAiABQQFyNgIEIAAgBEEDcjYCBCAAQQhqIQEMCAtB/LDCACgCACEAIAEgBGsiAkEQSQ0DQfSwwgAgAjYCAEH8sMIAIAAgBGoiAzYCACADIAJBAXI2AgQgACABaiACNgIAIAAgBEEDcjYCBAwECyAAIAIgBmo2AgRBgLHCAEGAscIAKAIAIgBBD2pBeHEiAUEIayICNgIAQfiwwgBB+LDCACgCACAGaiIDIAAgAWtqQQhqIgE2AgAgAiABQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMBQtBgLHCACAFNgIAQfiwwgBB+LDCACgCACABaiIANgIAIAUgAEEBcjYCBAwDC0H8sMIAIAU2AgBB9LDCAEH0sMIAKAIAIAFqIgA2AgAgBSAAQQFyNgIEIAAgBWogADYCAAwCC0H8sMIAQQA2AgBB9LDCAEEANgIAIAAgAUEDcjYCBCAAIAFqIgEgASgCBEEBcjYCBAsgAEEIag8LIANBCGoPC0EAIQFB+LDCACgCACIAIARNDQBB+LDCACAAIARrIgE2AgBBgLHCAEGAscIAKAIAIgAgBGoiAjYCACACIAFBAXI2AgQgACAEQQNyNgIEIABBCGoPCyABC9AWAhx/AX4jAEHwAGsiAyQAIANBAEHAABC7AiEDIAEgAkEGdGohHiAAKAIAIRkgACgCBCEaIAAoAgghGyAAKAIMIRwgACgCECEdA0BBACECA0AgAiADaiABIAJqKAAAIgRBGHQgBEGA/gNxQQh0ciAEQQh2QYD+A3EgBEEYdnJyNgIAIAJBBGoiAkHAAEcNAAsgAygCMCEJIAMoAjQhAiADKAI4IQQgAygCPCEQIAMoAiAhBSADKAIkIQogAygCKCELIAMoAiwhFSADKAIQIQwgAygCFCEWIAMoAhghDSADKAIcIREgAygCACEIIAMoAgQhFyADKAIIIQ4gAygCDCEPIAMgGjYCVCADIBs2AlggAyAcNgJcIAMgGTYCUCADIA82AmwgAyAONgJoIAMgFzYCZCADIAggHWo2AmAgA0FAayISIANB0ABqIhMgA0HgAGoiFEEAECQgAygCQCEGIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBjYCUCADIBE2AmwgAyANNgJoIAMgFjYCZCADIAwgGUEed2o2AmAgEiATIBRBABAkIAMoAkAhByADKQJEIR8gAyADKAJMNgJcIAMgHzcCVCADIAc2AlAgAyAVNgJsIAMgCzYCaCADIAo2AmQgAyAFIAZBHndqNgJgIBIgEyAUQQAQJCADKAJAIQYgAykCRCEfIAMgAygCTDYCXCADIB83AlQgAyAGNgJQIAMgEDYCbCADIAQ2AmggAyACNgJkIAMgCSAHQR53ajYCYCASIBMgFEEAECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAIgBSAIIA5zc3NBAXciCCAGQR53ajYCYCADIBUgDyAWc3MgCHNBAXciBjYCbCADIBAgCyAMIA5zc3NBAXciDjYCaCADIAQgCiAPIBdzc3NBAXciDzYCZCASIBMgFEEAECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAkgDCANc3MgD3NBAXciDCAHQR53ajYCYCADIAQgBSANc3MgBnNBAXciDTYCaCADIBAgCiARc3MgDHNBAXciFzYCbCADIAIgESAWc3MgDnNBAXciFjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgCHMgFnNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgF3NBAXciCzYCaCADIAIgFXMgBnMgBXNBAXciETYCbCADIAogFXMgD3MgDXNBAXciCjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgDHMgCnNBAXciCSAHQR53ajYCYCADIAQgCHMgDXMgEXNBAXciBDYCaCADIA8gEHMgF3MgCXNBAXciFTYCbCADIAIgEHMgFnMgC3NBAXciAjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAggDnMgBXMgAnNBAXciECAYQR53ajYCYCADIAYgFnMgEXMgEHNBAXciCDYCbCADIAwgDnMgC3MgFXNBAXciDjYCaCADIAYgD3MgCnMgBHNBAXciBjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgDXMgCXMgBnNBAXciDyAHQR53ajYCYCADIAUgDXMgBHMgCHNBAXciDDYCaCADIAogF3MgFXMgD3NBAXciDTYCbCADIBYgF3MgAnMgDnNBAXciFzYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgF3NBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDXNBAXciCzYCaCADIAIgEXMgCHMgBXNBAXciFjYCbCADIAogEXMgBnMgDHNBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgD3MgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgDHMgFnNBAXciBDYCaCADIAYgFXMgDXMgCXNBAXciETYCbCADIAIgFXMgF3MgC3NBAXciAjYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIAggF3MgFnMgEHNBAXciFTYCbCADIA4gD3MgC3MgEXNBAXciDjYCaCADIAYgCHMgCnMgBHNBAXciCDYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgD3MgCXMgCHNBAXciBiAHQR53ajYCYCADIAUgDHMgBHMgFXNBAXciDzYCaCADIAogDXMgEXMgBnNBAXciDDYCbCADIA0gF3MgAnMgDnNBAXciDTYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgDXNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDHNBAXciCzYCaCADIAIgFnMgFXMgBXNBAXciFzYCbCADIAogFnMgCHMgD3NBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgBnMgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgD3MgF3NBAXciBDYCaCADIAggEXMgDHMgCXNBAXciFjYCbCADIAIgEXMgDXMgC3NBAXciAjYCZCASIBMgFEEDECQgAygCQCERIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgETYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIA0gFXMgF3MgEHNBAXciBzYCbCADIAYgDnMgC3MgFnNBAXciDjYCaCADIAggFXMgCnMgBHNBAXciFTYCZCASIBMgFEEDECQgAygCQCEIIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgCDYCUCADIAYgD3MgCXMgFXNBAXciBiARQR53ajYCYCADIAUgD3MgBHMgB3NBAXciDzYCaCADIAogDHMgFnMgBnNBAXciETYCbCADIAwgDXMgAnMgDnNBAXciDDYCZCASIBMgFEEDECQgAygCQCENIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgDTYCUCADIAUgC3MgEHMgDHNBAXciBSAIQR53ajYCYCADIAkgC3MgDnMgEXNBAXciCzYCaCADIAIgF3MgB3MgBXNBAXciCDYCbCADIAogF3MgFXMgD3NBAXciCjYCZCASIBMgFEEDECQgAygCQCEFIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBTYCUCADIAQgCXMgBnMgCnNBAXciCSAVIBZzIBFzc0EBdzYCbCADIAQgEHMgD3MgCHNBAXc2AmggAyACIBZzIAxzIAtzQQF3NgJkIAMgDUEedyAJajYCYCASIBMgFEEDECQgBUEedyAdaiEdIAMoAkwgHGohHCADKAJIIBtqIRsgAygCRCAaaiEaIAMoAkAgGWohGSABQUBrIgEgHkcNAAsgACAdNgIQIAAgHDYCDCAAIBs2AgggACAaNgIEIAAgGTYCACADQfAAaiQAC9cTAhR/AX4jAEHAAWsiBCQAAkACQAJAAkACQAJAAkACQAJAAkAgASgCACIHBEAgAigCCCEJIAIoAgAhDCABKAIEIQgCQANAIAdBjAJqIQUgBy8BkgMiCkEMbCELQX8hBgJAAkADQCALRQRAIAohBgwCCyAFKAIIIQ0gBSgCACEOIAZBAWohBiALQQxrIQsgBUEMaiEFQX8gDCAOIAkgDSAJIA1JGxC8AiIOIAkgDWsgDhsiDUEARyANQQBIGyINQQFGDQALIA1B/wFxRQ0BCyAIRQ0CIAhBAWshCCAHIAZBAnRqQZgDaigCACEHDAELCyACKAIERQ0JIAwQIgwJCyACKQIEIhinIQIgDA0BIAEhBiACIQcMCAsgAikCBCIYpyEHIAIoAgAiBkUEQCABIQYMCAtBuLHCAC0AABpBmAMQCiICRQ0CIAJBATsBkgMgAkEANgKIAiACIAY2AowCIAJBkAJqIAetIBhCgICAgHCDhDcCACACIAMpAwA3AwAgAkEIaiADQQhqKQMANwMAIAJBEGogA0EQaikDADcDACABQoCAgIAQNwIEIAEgAjYCAAwBCyACrSAYQoCAgIBwg4QhGAJAAkACQCAHLwGSAyIFQQtPBEBBASEIQQQhBQJAIAZBBUkNAAJAAkAgBiIFQQVrDgICAQALIAZBB2shBkEAIQhBBiEFDAELQQAhCEEFIQVBACEGC0G4scIALQAAGkGYAxAKIgpFDQUgCkEAOwGSAyAKQQA2AogCIARBkAFqIg8gB0GMAmoiDSAFQQxsaiILQQhqKAIANgIAIARBMGoiECAHIAVBGGxqIglBCWopAAA3AwAgBEE3aiIRIAlBEGopAAA3AAAgCiAHLwGSAyIOIAVBf3NqIgI7AZIDIAQgCykCADcDiAEgBCAJKQABNwMoIAJBDE8NBiAOIAVBAWoiC2sgAkcNDCAJLQAAIQkgCkGMAmogDSALQQxsaiACQQxsEL4CGiAKIAcgC0EYbGogAkEYbBC+AiECIAcgBTsBkgMgBEEIaiAPKAIANgIAIARB6ABqIBApAwA3AwAgBEHvAGogESkAADcAACAEIAQpA4gBNwMAIAQgBCkDKDcDYCAHIAIgCBsiBUGMAmoiDiAGQQxsaiEIIAZBAWoiCyAFLwGSAyINTQ0BIAggGDcCBCAIIAw2AgAMAgsgB0GMAmoiCCAGQQxsaiECAkAgBSAGQQFqIgpJBEAgAiAYNwIEIAIgDDYCAAwBCyAIIApBDGxqIAIgBSAGayIIQQxsEL0CIAIgGDcCBCACIAw2AgAgByAKQRhsaiAHIAZBGGxqIAhBGGwQvQILIAcgBkEYbGoiAkEQaiADQRBqKQMANwMAIAIgAykDADcDACACQQhqIANBCGopAwA3AwAgByAFQQFqOwGSAwwCCyAOIAtBDGxqIAggDSAGayIOQQxsEL0CIAggGDcCBCAIIAw2AgAgBSALQRhsaiAFIAZBGGxqIA5BGGwQvQILIAUgBkEYbGoiBkEQaiADQRBqKQMANwMAIAYgAykDADcDACAEQbgBaiIMIARBCGopAwA3AwAgBEGgAWoiCCAEQegAaiILKQMANwMAIARBpwFqIg4gBEHvAGopAAA3AAAgBkEIaiADQQhqKQMANwMAIAUgDUEBajsBkgMgBCAEKQMANwOwASAEIAQpA2A3A5gBIAlBBkYNACALIAwpAwA3AwAgBEH5AGogCCkDADcAACAEQYABaiAOKQAANwAAIAQgBCkDsAE3A2AgBCAJOgBwIAQgBCkDmAE3AHECQAJAIAcoAogCIgVFBEBBACEMDAELIARB8QBqIQsgBEHwAGohEyAEQTdqIQhBACEMA0AgBy8BkAMhAyAFIgcvAZIDIhRBC0kNAkEBIQ1BBCEFAkAgA0EFSQ0AAkACQCADIgVBBWsOAgIBAAsgA0EHayEDQQAhDUEGIQUMAQtBACENQQUhBUEAIQMLQbixwgAtAAAaQcgDEAoiCkUNBSAKQQA7AZIDIApBADYCiAIgBEGQAWoiDiAHQYwCaiIQIAVBDGxqIg9BCGooAgA2AgAgBEEwaiISIAcgBUEYbGoiCUEJaikAADcDACAIIAlBEGopAAA3AAAgCiAHLwGSAyIRIAVBf3NqIgY7AZIDIAQgDykCADcDiAEgBCAJKQABNwMoIAZBDE8NByARIAVBAWoiD2sgBkcNDCAJLQAAIREgCkGMAmogECAPQQxsaiAGQQxsEL4CGiAKIAcgD0EYbGogBkEYbBC+AiEGIAcgBTsBkgMgBEG4AWoiFSAOKAIANgIAIARBoAFqIhYgEikDADcDACAEQacBaiIXIAgpAAA3AAAgBCAEKQOIATcDsAEgBCAEKQMoNwOYASAGLwGSAyIJQQFqIRAgCUEMTw0IIBQgBWsiBSAQRw0MIAxBAWohDCAGQZgDaiAHIA9BAnRqQZgDaiAFQQJ0EL4CIQ9BACEFA0ACQCAPIAVBAnRqKAIAIhAgBTsBkAMgECAGNgKIAiAFIAlPDQAgBSAFIAlJaiIFIAlNDQELCyAOIBUpAwA3AwAgEiAWKQMANwMAIAggFykAADcAACAEIAQpA7ABNwOIASAEIAQpA5gBNwMoIAcgBiANGyADIARB4ABqIBMgAhBKIARBIGoiAiAOKQMANwMAIARBCGoiAyASKQMANwMAIARBD2oiBSAIKQAANwAAIAQgBCkDiAE3AxggBCAEKQMoNwMAIBFBBkYNAyALIAQpAwA3AAAgBEHoAGogAikDADcDACALQQhqIAMpAwA3AAAgC0EPaiAFKQAANwAAIAQgBCkDGDcDYCAEIBE6AHAgBiECIAcoAogCIgUNAAsLIARBKGoiBiAEQeAAakEoEL4CGiAEIAw2AlwgBCAKNgJYIAQgDDYCVCAEIAc2AlAgASgCACIDRQ0HQbixwgAtAAAaIAEoAgQhB0HIAxAKIgJFDQMgAiADNgKYAyACQQA7AZIDIAJBADYCiAIgASACNgIAIANBADsBkAMgAyACNgKIAiABIAdBAWoiAzYCBCACIAMgBiAEQThqIAogDBCLAQwBCyAHIAMgBEHgAGogEyACEEoLIAEgASgCCEEBajYCCAsgAEEGOgAADAYLAAsgAkELQeTpwQAQuAEACyAGQQtB5OnBABC4AQALIBBBDEH06cEAELgBAAtBgJfCAEErQcDnwQAQ3gEACyAAIAcgBkEYbGoiASkDADcDACABIAMpAwA3AwAgAEEQaiABQRBqIgIpAwA3AwAgAEEIaiABQQhqIgApAwA3AwAgACADQQhqKQMANwMAIAIgA0EQaikDADcDAAsgBEHAAWokAA8LQazpwQBBKEHU6cEAEN4BAAujEQEZfyMAQUBqIhkkACACBEAgASACQQZ0aiEaIAAoAgwhByAAKAIIIQYgACgCBCEEIAAoAgAhCANAQQAhAiAZQQBBwAAQuwIhAyABQUBrA0AgAiADaiABIAJqKAAANgIAIAJBBGoiAkHAAEcNAAsgBCADKAIIIgkgAygCGCIKIAMoAigiCyADKAI4IgwgAygCPCINIAMoAgwiDiADKAIcIg8gAygCLCIQIA8gDiANIBAgDCALIAogBiAJaiAHIAMoAgQiEWogAygCACISIAggBCAGcWogByAEQX9zcWpqQYi31cQCa0EHdyAEaiIBIARxaiAGIAFBf3NxakGqkeG5AWtBDHcgAWoiAiABcWogBCACQX9zcWpB2+GBoQJqQRF3IAJqIgVqIAMoAhQiEyACaiABIAMoAhAiFGogBCAOaiACIAVxaiABIAVBf3NxakGS4ojyA2tBFncgBWoiASAFcWogAiABQX9zcWpB0eCP1ABrQQd3IAFqIgIgAXFqIAUgAkF/c3FqQaqMn7wEakEMdyACaiIEIAJxaiABIARBf3NxakHt876+BWtBEXcgBGoiBWogAygCJCIVIARqIAMoAiAiFiACaiABIA9qIAQgBXFqIAIgBUF/c3FqQf/V5RVrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQdixgswGakEHdyABaiICIAFxaiAFIAJBf3NxakHRkOylB2tBDHcgAmoiBCACcWogASAEQX9zcWpBz8gCa0ERdyAEaiIFaiADKAI0IhcgBGogAygCMCIYIAJqIAEgEGogBCAFcWogAiAFQX9zcWpBwtCMtQdrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQaKiwNwGakEHdyABaiICIAFxaiAFIAJBf3NxakHtnJ4Ta0EMdyACaiIDIAJxaiABIANBf3MiBXFqQfL4mswFa0ERdyADaiIEaiACIBFqIAQgBXFqIAEgDWogAyAEcWogAiAEQX9zIgVxakGhkNDNBGpBFncgBGoiASADcWpBnrWHzwBrQQV3IAFqIgIgAUF/c3FqIAMgCmogASAFcWogAiAEcWpBwJn9/QNrQQl3IAJqIgMgAXFqQdG0+bICakEOdyADaiIEaiACIBNqIAQgA0F/c3FqIAEgEmogAyACQX9zcWogAiAEcWpB1vCksgFrQRR3IARqIgEgA3FqQaPfw84Ca0EFdyABaiICIAFBf3NxaiADIAtqIAEgBEF/c3FqIAIgBHFqQdOokBJqQQl3IAJqIgMgAXFqQf+y+LoCa0EOdyADaiIEaiACIBVqIAQgA0F/c3FqIAEgFGogAyACQX9zcWogAiAEcWpBuIiwwQFrQRR3IARqIgEgA3FqQeabh48CakEFdyABaiICIAFBf3NxaiADIAxqIAEgBEF/c3FqIAIgBHFqQarwo+YDa0EJdyACaiIDIAFxakH55KvZAGtBDncgA2oiBGogAiAXaiAEIANBf3NxaiABIBZqIAMgAkF/c3FqIAIgBHFqQe2p6KoEakEUdyAEaiIBIANxakH7rfCwBWtBBXcgAWoiAiABQX9zcWogAyAJaiABIARBf3NxaiACIARxakGIuMEYa0EJdyACaiIDIAFxakHZhby7BmpBDncgA2oiBGogAyAWaiACIBNqIAEgGGogAyACQX9zcWogAiAEcWpB9ubWlgdrQRR3IARqIgIgBHMiASADc2pBvo0Xa0EEdyACaiIDIAFzakH/krjEB2tBC3cgA2oiBCADcyIFIAJzakGiwvXsBmpBEHcgBGoiAWogAyARaiACIAxqIAEgBXNqQfSP6xBrQRd3IAFqIgIgASAEc3NqQbyrhNoFa0EEdyACaiIDIAJzIAQgFGogASACcyADc2pBqZ/73gRqQQt3IANqIgFzakGg6ZLKAGtBEHcgAWoiBGogAyAXaiACIAtqIAEgA3MgBHNqQZCHgYoEa0EXdyAEaiICIAEgBHNzakHG/e3EAmpBBHcgAmoiAyACcyABIBJqIAIgBHMgA3NqQYaw+6oBa0ELdyADaiIBc2pB+57D2AJrQRB3IAFqIgRqIAMgFWogAiAKaiABIANzIARzakGFuqAkakEXdyAEaiICIAEgBHNzakHH36yxAmtBBHcgAmoiAyACcyABIBhqIAIgBHMgA3NqQZvMkckBa0ELdyADaiIBc2pB+PmJ/QFqQRB3IAFqIgRqIAEgD2ogAyASaiACIAlqIAEgA3MgBHNqQZvTztoDa0EXdyAEaiICIAFBf3NyIARzakG8u9veAGtBBncgAmoiASAEQX9zciACc2pBl/+rmQRqQQp3IAFqIgMgAkF/c3IgAXNqQdm4r6MFa0EPdyADaiIEaiADIA5qIAEgGGogAiATaiAEIAFBf3NyIANzakHHv7Eba0EVdyAEaiIBIANBf3NyIARzakHDs+2qBmpBBncgAWoiAiAEQX9zciABc2pB7ubMhwdrQQp3IAJqIgMgAUF/c3IgAnNqQYOXwABrQQ93IANqIgRqIAMgDWogAiAWaiABIBFqIAQgAkF/c3IgA3NqQa/E7tMHa0EVdyAEaiIBIANBf3NyIARzakHP/KH9BmpBBncgAWoiAiAEQX9zciABc2pBoLLMDmtBCncgAmoiAyABQX9zciACc2pB7Pn65wVrQQ93IANqIgRqIAMgEGogAiAUaiABIBdqIAQgAkF/c3IgA3NqQaGjoPAEakEVdyAEaiIBIANBf3NyIARzakH+grLFAGtBBncgAWoiAiAEQX9zciABc2pBy5uUlgRrQQp3IAJqIgMgAUF/c3IgAnNqQbul39YCakEPdyADaiIFaiABIBVqIAUgAkF/c3IgA3NqQe/Y5KMBa0EVd2ohBCAFIAZqIQYgAyAHaiEHIAIgCGohCCIBIBpHDQALIAAgBzYCDCAAIAY2AgggACAENgIEIAAgCDYCAAsgGUFAayQAC5cRAQV/IwBB0ABrIgIkAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAtAABBAWsOFwECAwQFBgcICQoLDA0ODxAREhcTFBUWAAsgAkE4akIANwIAIAJBATYCMCACQYTKwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwXCyACQThqQgA3AgAgAkEBNgIwIAJBnMrAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDBYLIAJBOGpCADcCACACQQE2AjAgAkG0ysAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMFQsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAjYCMCACQfDKwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDBQLIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJBjMvAADYCLCACQRQ2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDBMLIAJBOGpCADcCACACQQE2AjAgAkGwy8AANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMEgsgAiAAQQFqNgIkIAJBOGpCATcCACACQQE2AjAgAkHQy8AANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEQsgAiAAQQFqNgIkIAJBOGpCATcCACACQQI2AjAgAkGAzMAANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEAsgAkE4akIANwIAIAJBATYCMCACQaDMwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwPCyACIABBAWo2AiQgAkE4akIBNwIAIAJBATYCMCACQcTMwAA2AiwgAkEVNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIMIAEoAhQgACACQSxqEC8hAwwOCyACQThqQgA3AgAgAkEBNgIwIAJB6MzAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDA0LIAJBOGpCADcCACACQQE2AjAgAkGIzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMDAsgAkE4akIANwIAIAJBATYCMCACQaDNwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwLCyACQThqQgA3AgAgAkEBNgIwIAJByM3AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAoLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB3M3AADYCLCACQRY2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAkLIAJBOGpCADcCACACQQE2AjAgAkHkzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMCAsgAkE4akIANwIAIAJBATYCMCACQZzOwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwHCyACQThqQgA3AgAgAkEBNgIwIAJBtM7AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAYLIAJBOGpCADcCACACQQE2AjAgAkHQzsAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMBQsgAiAAQQFqNgJMIAJBIGpBATYCACACQRhqQQE2AgAgAkEXNgIoIAJBATYCECACQczPwAA2AgwgAiACQcwAajYCJCACQQM6AEggAkEINgJEIAJCIDcCPCACQoCAgIAgNwI0IAJBAjYCLCABQRhqKAIAIQAgAiACQSxqNgIcIAIgAkEkajYCFCABKAIUIAAgAkEMahAvIQMMBAsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAzYCMCACQZzQwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDAMLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1JfCADYCLCACQRg2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAILIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1NDAADYCLCACQRA2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAELIAIgAEEEajYCTCACQThqIgVCADcCAEEBIQMgAkEBNgIwIAJB9M7AADYCLCACQYyswgA2AjQgASgCFCIEIAFBGGooAgAiASACQSxqIgYQLw0AIAAtAAFBF0cEQCACIABBAWo2AiQgBUIBNwIAIAJBAjYCMCACQYjPwAA2AiwgAkEQNgIQIAIgAkEMajYCNCACIAJBJGo2AgwgBCABIAYQLw0BCyACQThqQgE3AgAgAkEBNgIwIAJBnM/AADYCLCACQRA2AhAgAiACQQxqNgI0IAIgAkHMAGo2AgwgBCABIAJBLGoQLyEDCyACQdAAaiQAIAMLjg0CB38HfiMAQRBrIgckACAAvSIJQv////////8HgyELIAlCAFMEQCABQS06AABBASEGCwJAAn8CfwJAAkAgC0IAUiIDIAlCNIinQf8PcSICcgRAIAMgAkECSXIhAyALQoCAgICAgIAIhCALIAIbIglCAoYhCiAJQgGDIQ4gAkG1CGtBzHcgAhsiAkEASARAIAlBqLzBACACIAJBhaJTbEEUdiACQX9HayICaiIEQQR0IgVrKQMAQbC8wQAgBWspAwAgAiAEQbHZtX9sQRN2a0H8AGogByAHQQhqIAMQVSEMIAcpAwghCSAHKQMAIQsgAkECTwRAIApCfyACrYZCf4WDUEUgAkE+S3INAwwECyALIA59IQsgAyAOUHEhCEEBDAQLIAkgAkHB6ARsQRJ2IAJBA0trIgRBBHQiBUHIkcEAaikDACAFQdCRwQBqKQMAIAQgAmsgBEHPpsoAbEETdmpB/QBqIAcgB0EIaiADEFUhDCAHKQMIIQkgBykDACELIARBFk8NAUEAIAqnayAKQgWAp0F7bEYEQEF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCs+bMmbPmzJkzWA0ACyACIARPDQMMAgsgDlBFBEAgCkIChCEKQX8hAgNAIAJBAWohAiAKQs2Zs+bMmbPmTH4iCkK05syZs+bMmTNUDQALIAsgAiAET619IQsMAgsgA61Cf4UgCnwhCkF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCtObMmbPmzJkzVA0ACyACIARJDQFBASEIQQAMAwsgASAGaiIBQYjlwQAvAAA7AAAgAUECakGK5cEALQAAOgAAIAlCP4inQQNqIQIMBAtBACEDAn8gC0LkAIAiCiAJQuQAgCINWARAIAkhDSALIQogDCEJQQAMAQsgDKcgDELkAIAiCadBnH9sakExSyEDQQILIQIgCkIKgCIKIA1CCoAiC1YEfwNAIAJBAWohAiAJIgxCCoAhCSAKQgqAIgogCyINQgqAIgtWDQALIAynIAmnQXZsakEESwUgAwsgCSANUXIMAgtBAQshBUEAIQMCQCALQgqAIg0gCUIKgCIPWARAQQAhAiAJIQogDCELDAELQQAhAgNAIAhBACAJp2sgDyIKp0F2bEZxIQggAkEBaiECIAUgA0H/AXFFcSEFIAynIAxCCoAiC6dBdmxqIQMgCyEMIA1CCoAiDSAKIglCCoAiD1YNAAsLAkACQCAIRQ0AQQAgCqdrIApCCoAiDKdBdmxHDQADQCACQQFqIQIgBSADQf8BcUVxIQUgC6cgC0IKgCIJp0F2bGohAyAJIQtBACAMp2sgDCIKQgqAIgynQXZsRg0ACwwBCyALIQkLIA6nIAhBf3NyIAkgClFxQQRBBSAJQgGDUBsgAyAFGyADIANB/wFxQQVGG0H/AXFBBEtyCyEDAkACQAJAIAIgBGoiBEEATiAEAn9BESAJIAOtfCIJQv//g/6m3uERVg0AGkEQIAlC//+Zpuqv4wFWDQAaQQ8gCUL//+iDsd4WVg0AGkEOIAlC/7/K84SjAlYNABpBDSAJQv+flKWNHVYNABpBDCAJQv/P28P0AlYNABpBCyAJQv/Hr6AlVg0AGkEKIAlC/5Pr3ANWDQAaQQkgCUL/wdcvVg0AGkEIIAlC/6ziBFYNABpBByAJQr+EPVYNABpBBiAJQp+NBlYNABpBBSAJQo/OAFYNABpBBCAJQucHVg0AGkEDIAlC4wBWDQAaQQJBASAJQglWGwsiAmoiA0ERSHFFBEAgA0EBayIEQRBJDQEgA0EEakEFSQ0CIAEgBmoiBUEBaiEDIAJBAUcNAyADQeUAOgAAIAUgCadBMGo6AAAgBCABIAZBAnIiAmoQlwEgAmohAgwECyAJIAEgAiAGamoiBRA+IAIgA0gEQCAFQTAgBBC7AhoLIAEgAyAGaiICakGu4AA7AAAgAkECaiECDAMLIAkgASAGQQFqIgQgAmoiAmoQPiABIAZqIAEgBGogAxC9AiABIAMgBmpqQS46AAAMAgsgASAGaiIFQbDcADsAAEECIANrIQQgA0EASARAIAVBAmpBMEEDIAQgBEEDTBtBAmsQuwIaCyAJIAEgAiAGaiAEaiICahA+DAELIAkgAiAGaiICIAFqQQFqIgYQPiAFIAMtAAA6AAAgA0EuOgAAIAZB5QA6AAAgBCABIAJBAmoiAmoQlwEgAmohAgsgB0EQaiQAIAILwA4BBn8jAEFAaiIEJAACQAJAIAACfwJAAkAgASgCCCIFIAEoAgQiB08NAANAIAEoAgAhCCAFIQMCQANAIAMgCGotAAAiBkGIjcIAai0AAA0BIAEgA0EBaiIDNgIIIAMgB0kNAAsgAyEFDAILAkACfwJAAkACQAJAAkACQAJAAkAgBkHcAEcEQCAGQSJGDQEgASADQQFqIgE2AgggBEEQaiAIIAcgARC2AUG4scIALQAAGiAEKAIUIQIgBCgCECEBQRQQCiIFRQ0QIAUgATYCDCAFQRA2AgAgACAFNgIEIAUgAjYCEAwNCyADIAVPBEAgAiAFIAhqIAMgBWsQ5QEgASADQQFqIgY2AgggBiAHTwRAIARBIGogCCAHIAYQtgFBuLHCAC0AABogBCgCJCECIAQoAiAhAUEUEAoiA0UNESADIAE2AgwgA0EENgIAIAMgAjYCEAwICyABIANBAmoiBTYCCAJAAkACQAJAAkACQAJAAkACQCAGIAhqLQAAIgNB7QBNBEAgA0HhAE0EQCADQSJGDQMgA0EvRg0EIANB3ABHDQIgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pB3AA6AAAMFQsgA0HiAGsOBQQBAQEFAQsgA0HuAGsOCAUAAAAGAAcIAAsgBEEYaiAIIAcgBRC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEBQRQQCiIDRQ0YIAMgATYCDCADQQw2AgAgAyACNgIQDA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQSI6AAAMEQsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBLzoAAAwQCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakEIOgAADA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQw6AAAMDgsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBCjoAAAwNCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakENOgAADAwLIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQk6AAAMCwsgBEEsaiABEFIgBC8BLA0CIAQvAS4iBkGA+ANxIgVBgLADRwRAIAVBgLgDRgRAIARBFDYCNCABIARBNGoQvwEhAwwJCyAGQYCwv39zQf+PvH9NDQYgBEEANgI0IAZBgAFJDQQgBkGAEEkEQCAEIAZBP3FBgAFyOgA1IAQgBkEGdkHAAXI6ADRBAgwLCyAEIAZBP3FBgAFyOgA2IAQgBkEMdkHgAXI6ADQgBCAGQQZ2QT9xQYABcjoANUEDDAoLIARBNGoiByABEKEBIAQtADQNBiAELQA1IAEgASgCCCIDQQFqNgIIQdwARwRAIARBFzYCNCABIAcQvwEhAwwICyAEQTRqIgcgARChASAELQA0DQYgBC0ANSABIANBAmo2AghB9QBHBEAgBEEXNgI0IAEgBxC/ASEDDAgLIARBNGoiByABEFIgBC8BNA0GIAQvATYiA0GAQGtB//8DcUGA+ANJDQQgA0GAyABqQf//A3EgBkGA0ABqQf//A3FBCnRyIgVBgIAEaiIGQYCAxABHIAZBgLADc0GAgMQAa0H/j7x/S3ENCCAEQQ82AjQgASAHEL8BIQMMBwsgBSADQeiMwgAQugEACyACKAIIBEAgAyAFTwRAIAIgBSAIaiADIAVrEOUBIAEgA0EBajYCCCAAIAIoAgg2AgggACACKAIANgIEQQEMDgsgBSADQciMwgAQugEACyADIAVPBEAgACADIAVrNgIIIAAgBSAIajYCBCABIANBAWo2AghBAAwNCyAFIANB2IzCABC6AQALIAQoAjAhAwwECyAEIAY6ADRBAQwFCyAEQRQ2AjQgASAEQTRqEL8BIQMMAgtBgJfCAEErQYiPwgAQ3gEACyAEKAI4IQMLIAAgAzYCBAwFCyAEIANBP3FBgAFyOgA3IAQgBUEGdkE/cUGAAXI6ADYgBCAGQQx2QT9xQYABcjoANSAEIAZBEnZBB3FB8AFyOgA0QQQLIQMgAiAEQTRqIAMQ5QEgASgCBCEHIAEoAgghBQsgBSAHSQ0ACwsgBSAHRw0CIARBCGogASgCACAHIAcQtgFBuLHCAC0AABogBCgCDCECIAQoAgghAUEUEAoiBUUNAyAFIAE2AgwgBUEENgIAIAAgBTYCBCAFIAI2AhALQQILNgIAIARBQGskAA8LIAUgB0G4jMIAELcBAAsAC98LAQt/AkACQAJAIAAoAgAiCiAAKAIIIgNyBEACQCADRQ0AIAEgAmohCCAAQQxqKAIAQQFqIQkgASEEA0ACQCAEIQMgCUEBayIJRQ0AIAMgCEYNAgJ/IAMsAAAiBkEATgRAIAZB/wFxIQYgA0EBagwBCyADLQABQT9xIQcgBkEfcSEEIAZBX00EQCAEQQZ0IAdyIQYgA0ECagwBCyADLQACQT9xIAdBBnRyIQcgBkFwSQRAIAcgBEEMdHIhBiADQQNqDAELIARBEnRBgIDwAHEgAy0AA0E/cSAHQQZ0cnIiBkGAgMQARg0DIANBBGoLIgQgBSADa2ohBSAGQYCAxABHDQEMAgsLIAMgCEYNACADLAAAIgRBAE4gBEFgSXIgBEFwSXJFBEAgBEH/AXFBEnRBgIDwAHEgAy0AA0E/cSADLQACQT9xQQZ0IAMtAAFBP3FBDHRycnJBgIDEAEYNAQsCQAJAIAVFDQAgAiAFTQRAQQAhAyACIAVGDQEMAgtBACEDIAEgBWosAABBQEgNAQsgASEDCyAFIAIgAxshAiADIAEgAxshAQsgCkUNAyAAKAIEIQsgAkEQTwRAIAIgASABQQNqQXxxIgZrIglqIgpBA3EhB0EAIQhBACEDIAEgBkcEQCAGIAFBf3NqQQNPBEBBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAVBBGoiBQ0ACwsgASEEA0AgAyAELAAAQb9/SmohAyAEQQFqIQQgCUEBaiIJDQALCwJAIAdFDQAgBiAKQXxxaiIELAAAQb9/SiEIIAdBAUYNACAIIAQsAAFBv39KaiEIIAdBAkYNACAIIAQsAAJBv39KaiEICyAKQQJ2IQcgAyAIaiEFA0AgBiEJIAdFDQRBwAEgByAHQcABTxsiCEEDcSEKIAhBAnQhDEEAIQQgCEEETwRAIAYgDEHwB3FqIQ0gBiEDA0AgBCADKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIANBBGooAgAiBEF/c0EHdiAEQQZ2ckGBgoQIcWogA0EIaigCACIEQX9zQQd2IARBBnZyQYGChAhxaiADQQxqKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIQQgA0EQaiIDIA1HDQALCyAHIAhrIQcgCSAMaiEGIARBCHZB/4H8B3EgBEH/gfwHcWpBgYAEbEEQdiAFaiEFIApFDQALIAkgCEH8AXFBAnRqIgQoAgAiA0F/c0EHdiADQQZ2ckGBgoQIcSEDIApBAUYNAiADIAQoAgQiA0F/c0EHdiADQQZ2ckGBgoQIcWohAyAKQQJGDQIgAyAEKAIIIgNBf3NBB3YgA0EGdnJBgYKECHFqIQMMAgsgAkUEQEEAIQUMAwsgAkEDcSEEAkAgAkEESQRAQQAhBUEAIQkMAQtBACEFIAEhAyACQXxxIgkhBgNAIAUgAywAAEG/f0pqIANBAWosAABBv39KaiADQQJqLAAAQb9/SmogA0EDaiwAAEG/f0pqIQUgA0EEaiEDIAZBBGsiBg0ACwsgBEUNAiABIAlqIQMDQCAFIAMsAABBv39KaiEFIANBAWohAyAEQQFrIgQNAAsMAgsMAgsgA0EIdkH/gRxxIANB/4H8B3FqQYGABGxBEHYgBWohBQsCQCAFIAtJBEAgCyAFayEFQQAhAwJAAkACQCAALQAgQQFrDgIAAQILIAUhA0EAIQUMAQsgBUEBdiEDIAVBAWpBAXYhBQsgA0EBaiEDIABBGGooAgAhBCAAKAIQIQYgACgCFCEAA0AgA0EBayIDRQ0CIAAgBiAEKAIQEQEARQ0AC0EBDwsMAQtBASEDIAAgASACIAQoAgwRAAAEfyADBUEAIQMCfwNAIAUgAyAFRg0BGiADQQFqIQMgACAGIAQoAhARAQBFDQALIANBAWsLIAVJCw8LIAAoAhQgASACIABBGGooAgAoAgwRAAALoAsCEH8HfiMAQYABayIGJAAgBiACNgI8IAYgATYCOCAGIAM2AkAgBiAFNgJEIAEoAigiCCEHAkACQAJAAkACQAJAAkAgCEEFTwR/IAEoAgQFIAcLIAVHDQAgAigCKCIJIQcgCUEFTwR/IAIoAgQFIAcLIAVHDQAgAygCKCIMIQcgDEEFTwR/IAMoAgQFIAcLIAVHDQAgAEEoaiIKIQsgACgCKCIHQQVPBH8gAEEEaiELIAAoAgQFIAcLBEAgC0EANgIACyAAIAVBAXQQ0AECQAJAIAUEQCACKAIIIAJBCGogCUEESyIHGyERIAMoAggiEiADQQhqIhMgDEEESyINGyELIAEoAgggAUEIaiAIQQRLIg4bIRQgAigCBCAJIAcbIQ8gAygCBCIVIAwgDRshDSABKAIEIAggDhshDiAAQQhqIQdBACEIA0AgBkEwaiAAIAggBSAIaiIJQYD4wAAQwAEgCCAPTw0FIAhBA3QhEAJAIAYoAjQiASAOIAEgDkkbIgNFBEBCACEXDAELIAYoAjAhASAQIBFqKQMAIRZCACEXIBQhAgNAIAZBIGogAikDAEIAIBYQsAEgASAXIAYpAyAiGCABKQMAfCIafCIbNwMAIBcgG1atIAZBKGopAwAgGCAaVq18fCEXIAFBCGohASACQQhqIQIgA0EBayIDDQALCyAHIQIgCigCACIBQQVPBEAgACgCCCECIAAoAgQhAQsgASAITQ0GIAIgEGopAwAhFiAGQRhqIAAgCCAJQbD4wAAQwAECQCAGKAIcIgEgDSABIA1JGyIDRQRAQgAhFgwBCyAGKAIYIQEgBCAWfiEYQgAhFiALIQIDQCAGQQhqIAIpAwBCACAYELABIAEgFiAGKQMIIhogASkDAHwiG3wiHDcDACAWIBxWrSAGQRBqKQMAIBogG1atfHwhFiABQQhqIQEgAkEIaiECIANBAWsiAw0ACwsgByECIAooAgAiAUEFTwRAIAAoAgghAiAAKAIEIQELIAEgCU0NByACIAlBA3RqIBYgFyAZfCIZfCIYNwMAIBcgGVYgFiAYVnIiAa0hGSAIQQFqIgggBUcNAAsgAQ0BCyAKKAIAIgJBBE0EfyAAQQhqBSAAKAIEIQIgACgCCAshASACIAVJDQYgAiAFQQF0Rw0HIAVFDQEgBUEDdCEDIAUhAgNAIAEpAwAhBCABIAEgA2oiBykDADcDACAHIAQ3AwAgAUEIaiEBIAJBAWsiAg0ACwwBCyAKKAIAIgFBBU8EQCAAKAIIIQcgACgCBCEBCyABIAVJDQcgByABQQN0aiAHIAVBA3QiC2prQQN2IgEgFSAMIAxBBEsiAhsiAyABIANJGyEBIBIgEyACGyECQgAhFiAFIQMDQCABRQ0BIAcgByALaikDACIXIBYgAikDACIEfXwiFjcDACAWIAQgF0J/hSIWhIMgBCAWg4RCP4chFiABQQFrIQEgB0EIaiEHIAJBCGohAiADQQFrIgMNAAsLIAooAgAiAUEFTwR/IABBBGohCiAAKAIEBSABCyAFSwRAIAogBTYCAAsgBkGAAWokAA8LIAZB/ABqQQQ2AgAgBkH0AGpBGzYCACAGQewAakEbNgIAIAZB1ABqQgQ3AgAgBkEENgJMIAZBoPfAADYCSCAGQRs2AmQgBiAGQeAAajYCUCAGIAZBxABqNgJ4IAYgBkFAazYCcCAGIAZBPGo2AmggBiAGQThqNgJgIAZByABqQcD3wAAQ6wEACyAIIA9BkPjAABC3AQALIAggAUGg+MAAELcBAAsgCSABQcD4wAAQtwEAC0GJmMIAQSNB0PfAABDeAQALIAZB7ABqQgA3AgAgBkEBNgJkIAZB7PTAADYCYCAGQYyswgA2AmggBkHgAGpB4PfAABDrAQALQYmYwgBBI0Hw98AAEN4BAAv3CgEFfyMAQRBrIgMkAAJAAkACQAJAAkACQAJAAkACQAJAIAEOKAUICAgICAgICAEDCAgCCAgICAgICAgICAgICAgICAgICAgGCAgICAcACyABQdwARg0DDAcLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAcLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAYLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAULIABBgAQ7AQogAEIANwECIABB3LgBOwEADAQLIABBgAQ7AQogAEIANwECIABB3OAAOwEADAMLIAJBgIAEcUUNASAAQYAEOwEKIABCADcBAiAAQdzEADsBAAwCCyACQYACcUUNACAAQYAEOwEKIABCADcBAiAAQdzOADsBAAwBCwJAAkACQAJAAkACQCACQQFxBEAgAUELdCEGQQAhAkEhIQVBISEEAkADQAJAAkBBfyAFQQF2IAJqIgVBAnRBpL/AAGooAgBBC3QiByAGRyAGIAdLGyIHQQFGBEAgBSEEDAELIAdB/wFxQf8BRw0BIAVBAWohAgsgBCACayEFIAIgBEkNAQwCCwsgBUEBaiECCwJ/An8CQCACQSBNBEAgAkECdCIFQaS/wABqKAIAQRV2IQQgAkEgRw0BQdcFIQVBHwwCC0EhQSFBlL7AABC3AQALIAVBqL/AAGooAgBBFXYhBUEAIAJFDQEaIAJBAWsLQQJ0QaS/wABqKAIAQf///wBxCyECAkAgBSAEQX9zakUNACABIAJrIQdB1wUgBCAEQdcFTRshBiAFQQFrIQVBACECA0AgBCAGRg0HIAIgBEGowMAAai0AAGoiAiAHSw0BIAUgBEEBaiIERw0ACyAFIQQLIARBAXENAQsgAUEgSQ0FIAFB/wBJDQMgAUGAgARJDQIgAUGAgAhJDQEgAUGwxwxrQdC6K0kgAUHLpgxrQQVJciABQZ70C2tB4gtJIAFB4dcLa0GfGElyciABQX5xQZ7wCkYgAUGinQtrQQ5JciABQWBxQeDNCkYgAUG67gprQQZJcnJyDQUgAUHwgzhrQZD8C0kNBQwDCyADQQhqQQA6AAAgA0EAOwEGIAMgAUEIdkEPcUG09MEAai0AADoADCADIAFBDHZBD3FBtPTBAGotAAA6AAsgAyABQRB2QQ9xQbT0wQBqLQAAOgAKIAMgAUEUdkEPcUG09MEAai0AADoACSABQQFyZ0ECdkECayICIANBBmpqIgRBzr7AAC8AADsAACADIAFBBHZBD3FBtPTBAGotAAA6AA0gBEECakHQvsAALQAAOgAAIANBDmoiBCABQQ9xQbT0wQBqLQAAOgAAIAAgAykBBjcAACADQf0AOgAPIABBCGogBC8BADsAACAAQQo6AAsgACACOgAKDAULIAFB8LLAAEEsQcizwABBxAFBjLXAAEHCAxBODQEMAwsgAUHOuMAAQShBnrnAAEGfAkG9u8AAQa8CEE5FDQILIAAgATYCBCAAQYABOgAADAILIAZB1wVBpL7AABC3AQALIANBCGpBADoAACADQQA7AQYgAyABQQh2QQ9xQbT0wQBqLQAAOgAMIAMgAUEMdkEPcUG09MEAai0AADoACyADIAFBEHZBD3FBtPTBAGotAAA6AAogAyABQRR2QQ9xQbT0wQBqLQAAOgAJIAFBAXJnQQJ2QQJrIgIgA0EGamoiBEHOvsAALwAAOwAAIAMgAUEEdkEPcUG09MEAai0AADoADSAEQQJqQdC+wAAtAAA6AAAgA0EOaiIEIAFBD3FBtPTBAGotAAA6AAAgACADKQEGNwAAIANB/QA6AA8gAEEIaiAELwEAOwAAIABBCjoACyAAIAI6AAoLIANBEGokAAvECAIJfwR+IwBBIGsiCSQAIAEoAigiCiEHIAIoAigiBiEDIAFBKGohCwJAAkACQAJAAkACfgJAAkAgCkEFTwRAIAEoAgQhBwsCQCAGQQVPBH8gAigCBAUgAwsgB00EQCAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgCksNCSAGRQ0GIAMgBkEDdGohCCAGIQQDQCADIAwgAykDAHwiDSAFKQMAfCIONwMAIAwgDVatIA0gDlatfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALIAxQDQYgCkEDdCAGQQN0ayEDA0AgA0UNAiAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIAwgDVatIgxQRQ0ACwwGCyAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgB0kNASAHIApLDQggBwRAIAMgB0EDdGohCCAHIQQDQCADIAwgAykDAHwiDSAFKQMAfCIPNwMAIAwgDVatIA0gD1atfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALQgAgDFANBBogCkEDdCAHQQN0ayEDA0AgA0UNBCAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIA4gDCANVq18IQwgDEIAUg0ACwtCAAwDCyAMUA0EDAMLIAcgBkHo7cAAELgBAAsgDAshDSAJQRhqIAIgB0H47cAAENMBIAkoAhwhAiALKAIAIgNBBU8EQCABKAIEIQMLIAkoAhghBiAJQRBqIAEgAhCTASAJKAIQIgRBgYCAgHhHBEAgBEUNAwALAn8gCygCACIEQQVPBEAgASgCBCIEIANJDQUgASgCCAwBCyADIARLDQQgAUEIagsgA0EDdGoiBSACQQN0IghqIAUgBCADa0EDdBC9AiAFIAYgCBC+AhogCyIDKAIAQQVPBH8gAUEEagUgAwsgAiAEajYCACAJQQhqIAEgB0GI7sAAENMBIAkoAgwiBEUNBCAJKAIIIgIgAikDACIMIA18Ig03AwAgDCANWA0BIAwgDVatIQwgAkEIaiEDIARBA3RBCGshBQNAIAVFDQEgAyAMIAMpAwB8Ig03AwAgA0EIaiEDIAVBCGshBSAMIA1YIAwgDVatIQxFDQALDAELQQQhBQJ/IAsoAgAiAkEETQRAIAFBCGohBCACDAELIAFBBGohCyABKAIIIQQgAiEFIAEoAgQLIgMgBUYEfyABEKABIAFBBGohCyABKAIIIQQgASgCBAUgAwtBA3QgBGpCATcDACALIAsoAgBBAWo2AgALIAAgAUEwEL4CGiAJQSBqJAAPC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAtBiZjCAEEjQej1wAAQ3gEAC+kJAwV/A34BfCMAQUBqIgIkAAJAAkACQAJ/AkACQAJAAkACQAJAAkAgAC0AAEEBaw4FAAECAwQFCyABKAIAQeLswABB3ezAACAALQABIgAbQQRBBSAAGxDkAQwJCwJAAkACQCAAKAIIQQFrDgIBAgALQRQhBCAAQRBqKQMAIgdCkM4AVARAIAchCAwKCwNAIAJBGGogBGoiAEEEayAHIAdCkM4AgCIIQpDOAH59pyIDQf//A3FB5ABuIgVBAXRB+onCAGovAAA7AAAgAEECayADIAVB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAAIARBBGshBCAHQv/B1y9WIAghBw0ACwwJC0EUIQQgAEEQaikDACIJIAlCP4ciB4UgB30iB0KQzgBUBEAgByEIDAgLA0AgAkEYaiAEaiIAQQRrIAcgB0KQzgCAIghCkM4Afn2nIgNB//8DcUHkAG4iBUEBdEH6icIAai8AADsAACAAQQJrIAMgBUHkAGxrQf//A3FBAXRB+onCAGovAAA7AAAgBEEEayEEIAdC/8HXL1YgCCEHDQALDAcLIABBEGorAwAiCiAKYiAKvUL///////////8Ag0KAgICAgICA+P8AUXJFBEAgCiACQRhqIgMQDyEAIAEoAgAgAyAAEOQBDAkLIAEoAgBB+PLBAEEEEOQBDAgLIAEoAgAgACgCBCAAQQxqKAIAEDkMBwsgAEEMaigCACEGIAAoAgQhBCABKAIAIgBB5uzAAEEBEOQBQQEhAyAGRQRAQQEhBSAAQfjswABBARDkAUEAIQMLIAZBGGwhAANAIAAEQCADQQFxRQRAIAEoAgBB6OzAAEEBEOQBCyAEIAEQFSAAQRhrIQBBACEDIARBGGohBEEAIQUMAQsLIAUNBiABKAIAQfjswABBARDkAQwGCyAAQQxqKAIAIQRBASEDIAEoAgAiBUHn7MAAQQEQ5AEgAiAEBH8gAwUgBUHc7MAAQQEQ5AFBAAs6ABQgAiABNgIQIAAoAgQiAQ0BQQAhBEEADAILIAEoAgBB+PLBAEEEEOQBDAQLIAIgATYCMCACQQA2AiwgAiABNgIgIAJBADYCHCACIABBCGooAgAiADYCNCACIAA2AiRBAQshACACIAQ2AjggAiAANgIoIAIgADYCGANAIAJBCGogAkEYahBEIAIoAggiAARAIAJBEGogACACKAIMENwBDAEFIAItABRFDQQgAigCECgCAEHc7MAAQQEQ5AEMBAsACwALIAinIgNB4wBKBEAgBEECayIEIAJBGGpqIAMgA0HkAG4iA0HkAGxrQQF0QfqJwgBqLwAAOwAACwJAIANBCk4EQCAEQQJrIgAgAkEYamogA0EBdEH6icIAai8AADsAAAwBCyAEQQFrIgAgAkEYamogA0EwajoAAAsgCUIAUwRAIABBAWsiACACQRhqakEtOgAACyABKAIAIAJBGGogAGpBFCAAaxDkAQwBCyAIpyIDQeMASgRAIARBAmsiBCACQRhqaiADIANB5ABuIgNB5ABsa0EBdEH6icIAai8AADsAAAsCQCADQQpOBEAgBEECayIAIAJBGGpqIANBAXRB+onCAGovAAA7AAAMAQsgBEEBayIAIAJBGGpqIANBMGo6AAALIAEoAgAgAkEYaiAAakEUIABrEOQBCyACQUBrJAALyQoBAX8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCAEEBaw4TAQIDBAUGBwgJCgsMDQ4PEBESEwALIAJBJGpCADcCACACQQE2AhwgAkGAi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBMLIAJBJGpCADcCACACQQE2AhwgAkGYi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = uB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await lB(await i, n);
  return hB(t, e);
}
function vi(i, n, t, e, A) {
  return yA(e - -499, i);
}
function Pn() {
  const i = ["WQJdRetdTqPIk8kJdITMAq", "WQ3dQuldTGTUD8kGjrr7qSov", "W4a1W79wWPBdNv0", "WOieCmoCWRK", "WPS9W49bWRy", "BbtcMmoY", "WPddM8oJAmome8kLzdxcGCoDWQXF", "gmkPhmoWjq", "W4jPWP8dW6RcOZhcMCkQAmocW7q7", "smoIn8kilG", "W6ebW5yOAeHI", "WQtdHKexo8onvhJcMGKSW7W", "ACoDxCocmCkhWPxdP8krWReMdCke", "W7RcKWvlyW", "y8kPWPRcImkG", "uwddOCoAW5W7WOGIdetdVv3cPW", "wNrWzt4", "bsq/mgJdI1yixCkGeCkvW5K", "WROfW70Psq", "WRSLW6KLwq", "WRLPW5aiWP4", "lSkYW41fvG", "W6ZcUqFcRxq", "W7ldS8oVW6GUW4mDWQXYsJ3dR8kc", "WQVdM8kRW7j4", "WQTAfSk/WQxdRmkPW6NdM2afohK", "W5/cQSoFWOhdKmo2jei0WPOH", "nuRcS8orW7K", "WR8ismoUW7C", "W60GtMaf", "xeqqWOvm", "WRVcUqpcRs4", "W7xcSqdcQvW", "W5JcLCk7eSkg", "c8oOgvJcO8o0BuC", "v2LJBZq", "W4xdRCkpWOzD", "mSkfgmkAAq", "WQDMW4qj", "zmkyjmoSWOa", "W4xcOKhcH24", "W4JcG8kVoCkz", "W45SW61cWQldRuxcJG", "pqddMZpdVG", "WOVdRCkvWOzi", "W6dcKWjprq", "uCkUh8oRFW", "n0RdHCk1CvhdVaVdHeq9", "WQhdG0CuoSobchVcStyXW5FcGG", "W6xdTISIW77cJICqhmk7WOhcRSoz"];
  return Pn = function() {
    return i;
  }, Pn();
}
(function(i, n) {
  const t = i();
  function e(r, g, a, s, c) {
    return yA(c - 103, r);
  }
  function A(r, g, a, s, c) {
    return yA(a - -191, s);
  }
  function o(r, g, a, s, c) {
    return yA(s - 258, c);
  }
  for (; ; )
    try {
      if (-parseInt(e("9#S9", 383, 376, 398, 397)) / 1 * (parseInt(A(103, 116, 111, "f[aT", 107)) / 2) + parseInt(o(576, 593, 585, 582, "ndld")) / 3 + -parseInt(e("xEkw", 435, 405, 414, 422)) / 4 + parseInt(e("@JsS", 451, 425, 440, 429)) / 5 + -parseInt(A(160, 164, 142, "8zOv", 117)) / 6 * (-parseInt(o(567, 576, 566, 578, "@JsS")) / 7) + parseInt(o(608, 580, 589, 593, "e1Bv")) / 8 + parseInt(o(565, 610, 605, 587, "gZaX")) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Pn, -296894 + -131387 * -5 + -1 * -496492);
function ht(i, n, t, e, A) {
  return yA(A - 8, n);
}
function yA(i, n) {
  const t = Pn();
  return yA = function(e, A) {
    e = e - (20 * -400 + 3107 + 5185);
    let o = t[e];
    if (yA.oDmdlH === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      yA.atXDiw = c, i = arguments, yA.oDmdlH = !0;
    }
    const g = t[-2529 + -3207 * 2 + -11 * -813], a = e + g, s = i[a];
    return s ? o = s : (yA.MZXJRo === void 0 && (yA.MZXJRo = !0), o = yA.atXDiw(o, A), i[a] = o), o;
  }, yA(i, n);
}
function fB(i, n, t, e, A) {
  return yA(e - -621, t);
}
function Mi(i, n, t, e, A) {
  return yA(i - -822, A);
}
function cg(i, n, t, e, A) {
  return yA(e - -28, i);
}
var xs;
class pB {
  constructor() {
    p(this, xs, !1);
  }
  async [(xs = ht(334, "xEkw", 339, 351, 348) + Mi(-517, -500, -499, -501, "HMeZ") + cg(")#^y", 294, 257, 270), Mi(-499, -482, -475, -520, "F*@["))](n) {
    function t(g, a, s, c, I) {
      return vi(c, a - 276, s - 388, s - 507);
    }
    function e(g, a, s, c, I) {
      return ht(g - 335, I, s - 250, c - 341, c - -895);
    }
    function A(g, a, s, c, I) {
      return vi(I, a - 178, s - 105, s - 1384);
    }
    function o(g, a, s, c, I) {
      return cg(s, a - 100, s - 181, g - 318);
    }
    function r(g, a, s, c, I) {
      return ht(g - 245, a, s - 431, c - 61, c - 804);
    }
    try {
      const g = n + (e(-561, -575, -551, -576, "%y32") + "/") + og;
      await GI(g), this[e(-541, -567, -588, -566, "#eCg") + e(-604, -611, -587, -587, "xEkw") + e(-576, -594, -557, -578, "ndld")] = !0;
    } catch {
      this[r(1143, "gZaX", 1116, 1125) + A(1180, 1167, 1177, 1181, "ZOtN") + A(1237, 1243, 1219, 1228, "e1Bv")] = !1, console[o(596, 599, "[gIs")](og + (e(-563, -577, -574, -575, "]38g") + A(1184, 1160, 1184, 1200, "5SoG") + o(593, 576, "e1Bv") + t(331, 337, 340, "!5l)") + o(598, 608, "szfi") + t(343, 339, 330, "@JsS") + t(288, 320, 304, "2J$#") + o(617, 620, "DN)^") + A(1215, 1223, 1224, 1205, ")IDA") + t(326, 306, 303, "y@Rv") + t(313, 313, 333, "3GxT") + o(591, 569, "#kEl") + o(628, 616, "[gIs") + o(621, 599, "gZaX") + "n."));
    }
  }
  [ht(286, "GV@N", 320, 306, 305) + fB(-302, -266, "@uyH", -284) + ht(324, "3GxT", 317, 314, 322) + "ed"]() {
    function n(A, o, r, g, a) {
      return vi(g, o - 53, r - 113, o - -249);
    }
    function t(A, o, r, g, a) {
      return ht(A - 9, r, r - 441, g - 40, A - 291);
    }
    function e(A, o, r, g, a) {
      return Mi(g - 1687, o - 303, r - 151, g - 34, r);
    }
    return this[n(-464, -441, -432, "(xIE") + t(603, 597, "]38g", 594) + e(1181, 1194, "@uyH", 1201)];
  }
}
class Wi extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Hn() {
  var i = ["uwHAWOPT", "rSkkhSkdg283wmk+oHdcUCoz", "sGpdKHRcIa", "W4O2WRJdUHm", "eSk7tG", "W4vBgYpdMCouW63dGSkkrI3dTW", "eCoxxSostW", "fSoCtmohwq", "W7rou8khWPe", "wwXKWR3cRa", "WPJcPbhdUdy", "CSkYvCkoiG", "WQamwsxcPCkVWPG", "juODwCkN", "WQruWOe", "zMNdQ8k1WOm", "W7JcSfO", "WOXoyCoPvG", "CLBdGXXww8k+FCo+W417", "WOpdScyqW74", "qvxdQW", "FCkXeaH6", "WRLCWPW", "tbhdHXRcLa", "WPFdOZSnW6q", "WOVdLmo7W6XVFCo7", "WOWLW77dSeC", "WQVdJXtdJXm", "W5KuW5ZcL8oh", "dWVdP8k8WRy", "vv9BWPH8", "W50CW4S", "bCkokG", "W7HtwCk0WOS", "ymo2nrldSCkecmoict0Ss8k/", "WOjEW4GCrCowgSo/F3XDWOeS", "ymo9oXVdTSkldmoXeJ0mFmki", "CJKyW5m6", "FrJdUSoyfG", "EdKD", "cSojWO3cKvqIormhWRzxWQCQ", "WQ9bWOdcSb0", "c8k0W7BdQqvSySkHWRxcVhFdTwm", "WOFcPbFdTtC", "mCoVeSoxE8kGW6ldSvldJCkHd8kc", "W4KeW70", "WPeIW7BdM3S", "pqhdIHfZ", "W4mwW7lcRfq", "xL/dOq", "ta/cGv4mhvNdUhxdI0BdLq", "u8kPia", "aIycW7NdUmoTW6lcOJOtvmotWPS", "WPPXW6dcNry4W6/dKSkQc8kOW4BdRa", "DCkGiXT/", "yd3cGSkGWPe", "W4eiW6tcQ04", "hvBdHa5w", "pCk2CeZcTG", "x151WOvU", "gCoxs8oC", "Ed1vW6DvW6RcSa", "EafBbSo8kI9qle1IWQT7", "v0hcQ8oSW6dcHh1ReZBcQG", "gCkBrmoRCa", "gCowq8oWqW", "WO3dPZS", "W5RdOCoJW61a", "zu3dT8kNWOq", "CsVcSCkPWRu", "W4L7ECoWwg/dVa", "W5qFWOXDhW", "W4eLWQpdQGG", "o8kXCvFcQW", "CatdMmoUhW"];
  return Hn = function() {
    return i;
  }, Hn();
}
function ft(i, n, t, e, A) {
  return q(A - 848, e);
}
function Li(i, n, t, e, A) {
  return q(i - 825, t);
}
(function(i, n) {
  function t(s, c, I, E, C) {
    return q(c - 983, I);
  }
  function e(s, c, I, E, C) {
    return q(c - -335, s);
  }
  function A(s, c, I, E, C) {
    return q(s - -229, E);
  }
  function o(s, c, I, E, C) {
    return q(C - 793, c);
  }
  var r = i();
  function g(s, c, I, E, C) {
    return q(E - 15, C);
  }
  for (; ; )
    try {
      var a = -parseInt(t(1325, 1310, "Jky9", 1277, 1332)) / 1 * (parseInt(A(66, 60, 42, "RFiC", 61)) / 2) + -parseInt(o(1073, ")0tq", 1114, 1118, 1089)) / 3 + parseInt(o(1128, "#%Ir", 1120, 1155, 1137)) / 4 + parseInt(g(383, 346, 359, 368, "ObM#")) / 5 + -parseInt(t(1311, 1328, "huN8", 1297, 1291)) / 6 + parseInt(t(1341, 1317, "EO1D", 1317, 1318)) / 7 * (-parseInt(o(1134, "t5FT", 1099, 1107, 1107)) / 8) + parseInt(e("6TP2", 14, 34, 6, 31)) / 9;
      if (a === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Hn, 1001069 * 1 + 2504 + -222914);
function oo(i, n, t, e, A) {
  return q(t - 931, e);
}
function he(i, n, t, e, A) {
  return q(n - -310, t);
}
function ee(i, n, t, e, A) {
  return q(i - -987, e);
}
function q(i, n) {
  var t = Hn();
  return q = function(e, A) {
    e = e - (-1781 + -2 * -673 + 365 * 2);
    var o = t[e];
    if (q.aiytjT === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, k = C.length; m < k; m++)
          x += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(I, E) {
        var C = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      q.bCFmmG = g, i = arguments, q.aiytjT = !0;
    }
    var a = t[-1 * -7603 + 49 * -137 + 89 * -10], s = e + a, c = i[s];
    return c ? o = c : (q.FLxkWT === void 0 && (q.FLxkWT = !0), o = q.bCFmmG(o, A), i[s] = o), o;
  }, q(i, n);
}
var at, po;
class Cg {
  constructor(n) {
    O(this, at);
    O(this, po);
    function t(r, g, a, s, c) {
      return q(a - 37, g);
    }
    this[A(349, 385, 373, "z)K^", 384) + t(317, "#3dR", 349)] = n;
    function e(r, g, a, s, c) {
      return q(s - 213, c);
    }
    function A(r, g, a, s, c) {
      return q(c - 56, s);
    }
    function o(r, g, a, s, c) {
      return q(r - -992, c);
    }
    try {
      F(this, at, n[A(335, 403, 379, "w3kx", 372) + A(418, 417, 357, "B4er", 392) + A(354, 362, 351, "vkGX", 387)] && JSON[e(545, 499, 551, 515, "oIzu")](n[e(532, 533, 484, 514, "EO1D") + e(601, 585, 585, 569, "r]TO") + A(357, 410, 419, "u(Ig", 385)])), F(this, po, n[A(363, 375, 399, "huN8", 363) + o(-692, -712, -694, -727, "z)K^")]);
    } catch (r) {
      console[e(562, 601, 554, 582, "w3kx")](r);
    }
  }
  get [ee(-640, -665, -629, "cER4") + "id"]() {
    function n(e, A, o, r, g) {
      return ee(A - 632, A - 89, o - 47, r);
    }
    function t(e, A, o, r, g) {
      return ee(A - 887, A - 44, o - 10, o);
    }
    return this[n(38, 2, 30, "I8ST") + n(-31, -36, -33, "S![B")][t(231, 263, "@ey2") + t(243, 260, "hmTV")];
  }
  get [he(48, 40, "vkGX") + "s"]() {
    function n(e, A, o, r, g) {
      return ee(o - 1915, A - 114, o - 207, e);
    }
    function t(e, A, o, r, g) {
      return ee(e - 362, A - 334, o - 365, r);
    }
    return this[t(-319, -301, -321, "#3dR") + t(-314, -329, -293, "y9d]")][n("huN8", 1258, 1295) + "s"];
  }
  get [ee(-635, -633, -617, "S![B") + oo(1279, 1273, 1256, "6#r6")]() {
    function n(o, r, g, a, s) {
      return he(o - 232, o - 237, a);
    }
    function t(o, r, g, a, s) {
      return he(o - 411, r - 984, s);
    }
    function e(o, r, g, a, s) {
      return ee(r - 718, r - 471, g - 82, a);
    }
    function A(o, r, g, a, s) {
      return he(o - 162, s - -688, g);
    }
    return this[n(266, 240, 260, "0K@j") + A(-659, -598, "LQzT", -598, -632)][t(1026, 1007, 973, 1008, "z)K^") + e(25, 54, 71, "vkGX")];
  }
  get [oo(1221, 1274, 1239, "cER4") + "b"]() {
    return D(this, at);
  }
  get [ee(-682, -706, -646, "#%Ir") + ee(-647, -675, -658, "qf&g")]() {
    return D(this, po);
  }
  get [ft(1187, 1240, 1203, "0K@j", 1216) + oo(1232, 1303, 1269, "GqP!") + ft(1162, 1172, 1169, "oIzu", 1172) + he(79, 48, "u(Ig")]() {
    var o, r;
    function n(g, a, s, c, I) {
      return ft(g - 263, a - 13, s - 483, c, I - 99);
    }
    function t(g, a, s, c, I) {
      return ft(g - 374, a - 302, s - 387, I, s - -1813);
    }
    function e(g, a, s, c, I) {
      return he(g - 267, s - -49, a);
    }
    function A(g, a, s, c, I) {
      return oo(g - 496, a - 193, s - -1777, c);
    }
    return !!((r = (o = D(this, at)) == null ? void 0 : o[A(-509, -533, -500, "RRQD") + A(-507, -512, -505, "vIu7")]) != null && r[A(-526, -536, -520, "h%t$") + e(14, "%Jgq", -17) + A(-445, -497, -481, "I8ST") + n(1301, 1309, 1319, "rZ0#", 1311) + t(-614, -642, -643, -660, ")0tq") + n(1260, 1273, 1247, "0K@j", 1256) + e(-16, "RRQD", -11)]);
  }
  get [he(6, 8, "[0d*") + he(36, 22, "y9d]") + ee(-688, -668, -681, "w3kx") + ft(1159, 1146, 1184, "ObM#", 1168) + ee(-689, -696, -674, "jb1K") + Li(1138, 1151, "jb1K")]() {
    var r, g;
    function n(a, s, c, I, E) {
      return oo(a - 139, s - 36, c - -1093, s);
    }
    function t(a, s, c, I, E) {
      return Li(a - -1363, s - 398, c);
    }
    function e(a, s, c, I, E) {
      return Li(E - -1, s - 220, c);
    }
    function A(a, s, c, I, E) {
      return he(a - 106, s - -444, E);
    }
    function o(a, s, c, I, E) {
      return ft(a - 148, s - 96, c - 464, I, c - -167);
    }
    return !!((g = (r = D(this, at)) == null ? void 0 : r[n(216, "RRQD", 184) + A(-390, -400, -422, -375, "Rp[b")]) != null && g[n(138, "rZ0#", 141) + A(-406, -417, -422, -384, "qf&g") + o(967, 965, 996, "w3kx") + t(-203, -191, "1nB7") + A(-433, -437, -438, -474, "%Jgq") + e(1186, 1142, "1nB7", 1163, 1179) + t(-208, -244, "@ey2")]);
  }
}
at = new WeakMap(), po = new WeakMap();
(function(i, n) {
  function t(a, s, c, I, E) {
    return tA(c - 659, I);
  }
  function e(a, s, c, I, E) {
    return tA(I - -806, s);
  }
  function A(a, s, c, I, E) {
    return tA(c - 634, I);
  }
  const o = i();
  function r(a, s, c, I, E) {
    return tA(s - -569, c);
  }
  function g(a, s, c, I, E) {
    return tA(c - -565, I);
  }
  for (; ; )
    try {
      if (-parseInt(e(-374, "Tn2N", -300, -414, -416)) / 1 * (-parseInt(e(-536, "zR!$", -575, -655, -625)) / 2) + parseInt(r(-429, -397, "RllB", -395, -390)) / 3 * (parseInt(e(-472, "wawJ", -432, -454, -571)) / 4) + parseInt(e(-615, "b^10", -629, -524, -500)) / 5 * (parseInt(r(-134, -239, "8@m0", -217, -271)) / 6) + parseInt(r(-326, -297, "gPw)", -258, -375)) / 7 * (-parseInt(t(1108, 906, 988, "V*4P", 933)) / 8) + -parseInt(A(977, 936, 904, "9(MQ", 919)) / 9 * (-parseInt(e(-393, "Nnyh", -369, -465, -392)) / 10) + parseInt(A(809, 905, 913, "XxW)", 965)) / 11 * (-parseInt(A(745, 826, 811, "RllB", 887)) / 12) + parseInt(e(-389, "fE]H", -424, -435, -444)) / 13 * (-parseInt(g(-219, -109, -209, "J(Ga", -228)) / 14) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Kn, -333 * 71 + 83 * 5102 + -20 * 3178);
function QA(i, n, t, e, A) {
  return tA(A - -135, t);
}
function tA(i, n) {
  const t = Kn();
  return tA = function(e, A) {
    e = e - 151;
    let o = t[e];
    if (tA.idmRRN === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      tA.LCWEQG = c, i = arguments, tA.idmRRN = !0;
    }
    const g = t[2704 * 2 + 6026 + -11434], a = e + g, s = i[a];
    return s ? o = s : (tA.XScLfQ === void 0 && (tA.XScLfQ = !0), o = tA.LCWEQG(o, A), i[a] = o), o;
  }, tA(i, n);
}
function LA(i, n, t, e, A) {
  return tA(t - -882, e);
}
function KA(i, n, t, e, A) {
  return tA(i - 193, n);
}
function H(i, n, t, e, A) {
  return tA(e - 669, A);
}
function Kn() {
  const i = ["krGivbS", "W5VdRJSOWRa", "pty1wYW", "WOxcRCouthO", "W7z1cmoa", "sCkAECocaa", "u8kDW6/cI0K", "FmorW5ddNdK", "dIpcMCoR", "mJrFvmk8", "yeSBr8oxW5pdP0nJ", "kaX9WRFdKa", "W6lcTYJdUq", "BLhcSgZcNq", "uIFcLSoeW4i", "WPuSW6tcVSoZ", "wSoYq0OV", "nmoyW4ZdNtK", "jmkdW7JcVKW", "WRqQvLldOq", "WO1oqW4", "W4OAWQtcSSo5", "WRpcVCoxcI8", "yCosqmkyEa", "WRlcOmorida", "f8kdWO8A", "kCoga1tdRG", "c3NcKCoepq", "WQ5LgN/dJq", "W4mhWRxcVmo/", "d2ZcJ8ospa", "xSk/oW", "WONdUmkOW55E", "l8oDa0xcOq", "WPySeG", "at7cHCoXW4i", "ivClWOFdQa", "jrfIWP7dNq", "WQayqCo2W7a", "WOeMxSo6W6O", "gmkbW6tcIfi", "WPbTCczn", "W7bKgCoOWPq", "mSkCgCoE", "FCo3ESo5W6S", "WRdcSCopWQj0", "WOasW5/dPSk5", "WPXVyrJcKa", "FCoXEmo4W4K", "WP0GaLldGq", "W47cICkxW7RcPW", "WQlcR8oaW7WR", "lf/cUrdcJq", "oSosaLpdPa", "vSk3W4VcLgy", "omo4q0SC", "ugtcMmoppG", "WPXiqHpcOq", "WOddTCkWW65t", "ibZdR8oBgW", "WRdcT8oxaYS", "r8kwEq", "gX1RWO7dLq", "emkcWP1vxG", "WONdVCodWQm", "WQiclfpdIG", "WRlcPSojWO5Z", "eSkzWQuCva", "rLVdPeVcUG", "Ca9bW7hcVeRdSSkfW4SSzW", "g8kaW6lcG2y", "pb9C", "kGP3WOJdIG", "cCozW6OKcq", "y8oFW5ddPd4", "WOSdW6FdG8kZ", "W4GBoCkzWRm", "iv0nWQhdOq", "W4exka", "hxtcGGS/", "W4KzkmkuWQG", "nSktgCoe", "m8ktbmojiq", "W7rZaSoxWO4", "WO0KbhG", "W6FdQCoOW58iwWJcGq", "bJGGCdC", "W4T1qs/cMSk3WOPbkCo6gG", "ASokq8kCFSkOcrdcLmkXDba", "W7jZh8olWO8", "W5FcUc/dTmob", "ymkxdSoVnG", "dmkta8ohAq", "WOT2FZhcNG", "nt7cSXVdUepcOSo7WP/cIG", "is7dUmo7oa", "irLSWPJdKq", "W4BcRMJcVJtcKHxdM8kcr8kU", "mJjgumkS", "BMddRq", "xmkmbmoKla", "dwlcJW", "W6FdPIO+WRS", "W6tdS8kjW7qZqNfFmxZdNYC", "qmk5kJGE", "W7VdRJSOWRa", "y8oCua", "Dmkaa8kV", "W6tcKCkyWQDX", "fmkbW7hcGG", "WRGPCsv8", "WQzjAa/cSq", "gdBcG8o2W4O", "yCo5ACoUW4i", "lZ9x", "exdcKaKI", "W7TOdSobWPm", "g8kuW7lcOfS", "WRhcR8oaW7KX", "WPtcP8ojz2i", "n8kBe8opjW", "kCorp1K", "WRNcQSoEWQHO", "W5nooCkeWRe", "D8o9ESoPW5i", "amoYg0yM", "E8khe2hdS8klWQf8", "ruZdOKFcOa", "sCkIoZic", "zmoFW5hdMZi", "yeXMx8oNW53dLNa", "WR/cLmobW6m2", "W4pcPZqKWR0", "kbTS", "vCkxfCoUma", "C8o9F8o5W4i", "cdPqxmkS", "WQ0kqq", "WOKqW5G", "hSkaaSofoW", "WRhcUmobW7KN", "nSo+n1Oh", "lKSMWRtdQa", "r8kxW7u", "gColvmo2f8oIsSk3", "wmkFWQ0yjmojc8ofra", "WPHFuWK", "WRBcUmojW6S3", "WP3dTJhdQu0", "i0lcSsBcJa", "wmkxW7W", "omkxhSozla", "lH1SWR/dLG", "WRtcJCo2xfS", "zmo9vqLJ", "hdJcNW", "ygfHkgNcKc0zW53dTCoFW6e", "nhxcIWyp", "ymoEuq", "ptaXEZa", "W6qooCktWP4", "W4ahWQlcTG", "ot/cI8o2W6u", "W6pcGCkqW7VcMq", "C8kacCoYjW", "WQFcOmokity", "dCkDW77cG3y", "W6ddSCoAWQbkhMro", "W7/dSdePWQ0", "fMlcKW", "nCoHwuPp", "tJNcNSoGk8ofzN4", "WPJdRSouWQJdKG", "nSoGwgOo", "c1eAWQFdPW", "q1hdVLZcOa", "WRddRCkxW7PR", "cdu9tra", "oJriCmkL", "xZRcJCkxW5G", "DCokW4VdMW", "WR7cSSoiW48W", "FCkafq", "mL/cRa", "WR7cS8opjJG", "WOxcVmoDW6qR", "eWJcPX/dPtmormoVfG3dJaq", "zSkec8oOjG", "W44AWRtcP8oJ", "jv0DWQBdRa", "WRVcVSokW6qX", "WOpdOmob", "ewtcICoioa", "W4LZqshcMCoWW6TqnmoxbSk+W7m", "WP7cTmomW68S", "wIFcKmkHW4O", "htlcGSohW4K", "jWT9W5xdLq", "eq7cPXhdPNrVvCoYoXe", "y2ddT2/dSa", "lSkki8oGbW", "omkDhSoEoW", "WOZdVCojWRxdIa", "ySoPW69wAG", "W4xdUCkxiNuXbCoWWReZ", "W4JcJmkSW6hcRa", "wsBcKCkbW7S", "jCoqxSkWoNlcT8kTEIu", "fcH/r8kS", "WP7cRmou", "omoUxKWh", "nSoGx0el", "W4eokmk2WRi", "D8o6W6XmFq", "cCojW7CJaW", "kfhcQJBcLW", "aa7dJCoqfG", "otGMFty", "t8kIjI4d", "W58cBG7cSmoWWPZcIa", "BMhdQL4", "aSonW60ZdG", "W7FcVXBdKmkB", "WPKzW6FcTCol", "W5lcI8kuW63cUG", "WRaMW6lcTCoU", "WQhcV8o6W7SH", "ESkxWRVcH3e", "jYfTkSoC", "ncSGCsW", "EmorW4q", "WQtdVCkNW6Hv", "D8oBW43dMZi", "AMOnb8o8dmkuc8kYW4GZ", "DqlcUtJcS8kUW5dcNG", "W5jcWPlcM8kOW516WRxcMNC", "mqPaFmoM", "iSkGxSoUW4lcP1VcIG", "pmo7zKym", "y8o9uGW", "pmklf8oeiZFdShZcU3BdVSoK", "v8kDW7xcSfS", "W6ldPSoKgGJcP8o3AG", "W6pcKCkyWRP9", "yMhdSe/dJq", "oCkkeSopiMBdUw3cOe/dKG", "WRTSFJ59", "i8oDfK8", "W4eVgSkkWPK", "tvVdOG", "WPxdVdBdRhq", "i1CnWOFdPa", "jCotiG"];
  return Kn = function() {
    return i;
  }, Kn();
}
function AA(i, n, t, e, A) {
  return tA(t - 32, i);
}
var ds, ls, us;
class mB {
  constructor(n) {
    p(this, us);
    p(this, ls, [LA(-627, -663, -641, "J(Ga") + AA("4*f]", 319, 233) + "ic", H(1042, 966, 1015, 971, "aQ6^") + QA(197, 127, "QcnT", 289, 247) + "ic"]);
    p(this, ds);
    function t(e, A, o, r, g) {
      return tA(g - -969, r);
    }
    this[t(-600, -608, -554, "eFXV", -606) + t(-634, -602, -689, "zLjf", -689) + "d"] = n;
  }
  async [(us = H(975, 1040, 935, 1013, "Nnyh") + "se", ls = LA(-641, -654, -550, "9(MQ") + H(822, 759, 758, 839, "r$$A") + LA(-769, -766, -706, "XxW)") + KA(398, "zR!$"), ds = LA(-773, -591, -714, "c8VT") + KA(588, "r$$A"), LA(-637, -542, -654, "5O4V"))](n) {
    function t(a, s, c, I, E) {
      return H(a - 432, s - 429, c - 1, a - 280, I);
    }
    function e(a, s, c, I, E) {
      return H(a - 480, s - 121, c - 488, I - -1420, a);
    }
    const A = await this[o(1098, 985, 1073, "TSD7") + o(1071, 1153, 1189, "8@m0") + r(764, 774, "boh@", 659)](n);
    await Promise[t(1166, 1284, 1277, "7qoL") + r(555, 730, "J(Ga", 674)]([this[g(-473, -415, "bw9H", -508) + o(1122, 1074, 949, "7971") + "d"][t(1101, 1208, 1165, "XxW)")](n), this[o(1041, 1087, 1131, "b^10") + r(885, 882, "9(MQ", 837) + "e"](A)]);
    function o(a, s, c, I, E) {
      return QA(a - 460, s - 0, I, I - 297, s - 889);
    }
    function r(a, s, c, I, E) {
      return H(a - 430, s - 358, c - 248, I - -207, c);
    }
    function g(a, s, c, I, E) {
      return AA(c, s - 94, I - -747);
    }
    this[e("gzN%", -267, -238, -363) + t(1145, 1146, 1065, "QcnT") + e("9(MQ", -320, -411, -426)]();
  }
  async [QA(250, 116, "L#Dj", 178, 127) + AA("L#Dj", 481, 391) + "se"](n) {
    var g;
    function t(a, s, c, I, E) {
      return H(a - 143, s - 297, c - 83, a - -455, s);
    }
    function e(a, s, c, I, E) {
      return AA(s, s - 101, a - 759);
    }
    function A(a, s, c, I, E) {
      return LA(a - 260, s - 67, s - 3, a);
    }
    function o(a, s, c, I, E) {
      return H(a - 172, s - 267, c - 337, s - -159, E);
    }
    function r(a, s, c, I, E) {
      return H(a - 161, s - 411, c - 306, a - -1592, s);
    }
    try {
      if (e(1184, "eFXV", 1167, 1245, 1105) !== e(1087, "zR!$", 1151, 1090, 1078)) {
        const a = this[A("Ng^Z", -704, -736, -689, -810) + t(400, "#BiB", 480, 347, 306) + "se"]();
        return ((g = a == null ? void 0 : a[A("fE]H", -519, -460, -498, -616) + t(398, "SKzE", 354, 347, 516)]) == null ? void 0 : g[e(1144, "#BiB", 1089, 1116, 1236)]) || [];
      } else {
        const a = await fetch(n);
        if (!a.ok) {
          if (e(994, "9Rd9", 1096, 1041, 867) === t(576, "Nnyh", 695, 642, 665)) throw new Error(t(522, "BeCU", 521, 530, 639) + r(-723, "D51Y", -695, -745, -818) + A("yhAe", -584, -505, -662, -589) + r(-721, "HgqE", -706, -705, -727) + "d.");
          this[e(974, "L#Dj", 908, 937, 972) + t(588, "L#Dj", 504, 601, 676) + "d"] = _0x252b14;
        }
        this[t(519, "5O4V", 444, 550, 476) + "se"] = await a[A("zR!$", -548, -453, -468, -626)]();
      }
    } catch (a) {
      if (A("zR!$", -601) === o(752, 788, 688, 798, "zR!$")) this[o(732, 811, 748, 818, "BeCU") + "se"] = void 0, console[r(-762, "Nnyh", -713)](a);
      else {
        _0x379ddd instanceof _0x1c2f2f ? _0x3c5147[r(-761, "HgqE", -884)]() : _0x4fb82a instanceof _0x2b25d5 && _0x361a93[e(1103, "fE]H")](_0x1b12bd);
        const s = {};
        s[e(1118, "L#Dj") + t(460, "V*4P", 577)] = !1, s[t(423, "bw9H", 469) + "s"] = [], s[r(-630, "Ng^Z", -515) + t(537, "TSD7", 635)] = [], s[r(-745, "yhAe", -819) + o(786, 698, 652, 687, "dsKq") + e(1119, "aQ6^")] = void 0, s[o(776, 759, 840, 876, "Zv%4")] = function() {
        }, s[e(1049, "8@m0") + r(-742, "fE]H", -813)] = "", this[e(1178, "Zv%4") + r(-656, "5O4V", -590)] = new _0x919720(s);
      }
    }
  }
  async [LA(-602, -773, -653, "7971") + QA(209, 209, "GWAZ", 169, 130) + "e"](n) {
    function t(g, a, s, c, I) {
      return QA(g - 168, a - 174, c, c - 134, I - -787);
    }
    this[r("YcNm", -99, -4, -201) + A(983, "Nnyh", 1022, 1070)] = void 0;
    function e(g, a, s, c, I) {
      return QA(g - 1, a - 363, a, c - 67, c - -392);
    }
    if (!n) {
      if (r("1WJ7", -121, -34, -88) !== A(777, "yhAe", 997, 894)) return _0x144e5c instanceof _0x2d0205 && _0x3caf9d[A(975, "gggK", 823, 905) + t(-598, -717, -567, "J(Ga", -636)](_0x40310e), null;
      console[o(1100, 1183, 1113, "9Rd9", 1144)](r("gPw)", -259, -279, -297) + e(-92, "#BiB", -145, -210) + A(827, "6qyb", 842, 886) + t(-675, -681, -738, "9(MQ", -686) + t(-724, -668, -625, "Tn2N", -630)), this[t(-521, -689, -680, ")Wyt", -633) + "se"] = void 0;
      return;
    }
    function A(g, a, s, c, I) {
      return AA(a, a - 312, c - 636);
    }
    function o(g, a, s, c, I) {
      return AA(c, a - 36, I - 818);
    }
    function r(g, a, s, c, I) {
      return QA(g - 371, a - 237, g, c - 254, a - -328);
    }
    await this[t(-768, -714, -768, "fE]H", -669) + t(-765, -815, -789, "D51Y", -765) + "se"](n);
  }
  async [KA(438, "bw9H") + AA("5O4V", 431, 368) + H(760, 793, 859, 840, "4*f]")](n) {
    function t(s, c, I, E, C) {
      return LA(s - 65, c - 484, E - 1362, s);
    }
    function e(s, c, I, E, C) {
      return H(s - 454, c - 380, I - 45, I - -816, c);
    }
    const A = await fetch("" + n + this[o(361, 371, "b^10", 299) + o(358, 242, "4CtH", 369) + t("9Rd9", 788, 748, 705) + o(327, 250, "K3ah", 310)][-14889 + -3 * -4963]);
    function o(s, c, I, E, C) {
      return QA(s - 389, c - 364, I, E - 463, E - 252);
    }
    function r(s, c, I, E, C) {
      return H(s - 248, c - 458, I - 35, I - -561, C);
    }
    function g(s, c, I, E, C) {
      return H(s - 478, c - 193, I - 281, s - -976, I);
    }
    const a = A.ok ? -14 * -574 + -150 * 9 + -1 * 6686 : -490 * -10 + -6229 + 1330;
    return "" + n + this[r(417, 443, 372, 327, "1WJ7") + g(-47, -167, "TSD7") + e(246, "YcNm", 244) + r(394, 400, 473, 425, "HgqE")][a];
  }
  [AA("zR!$", 274, 274) + LA(-567, -516, -563, "Tn2N") + "s"](n) {
    function t(A, o, r, g, a) {
      return QA(A - 127, o - 387, o, g - 386, g - -199);
    }
    function e(A, o, r, g, a) {
      return LA(A - 438, o - 237, r - 153, o);
    }
    n[e(-370, "r$$A", -371) + "ch"]((A) => console[t(-60, "gPw)", 57, -65)](A));
  }
  [H(893, 918, 1073, 1019, "bw9H") + H(1006, 997, 848, 940, "Nnyh") + QA(243, 163, "TSD7", 227, 188)](n) {
    function t(e, A, o, r, g) {
      return AA(o, A - 347, r - 487);
    }
    n[t(746, 746, "L#Dj", 740) + "ch"]((e) => console[t(779, 636, "4CtH", 729)](e));
  }
  [LA(-632, -533, -648, "gPw)") + H(949, 949, 1045, 975, "SKzE")]() {
    function n(A, o, r, g, a) {
      return AA(r, o - 180, A - -884);
    }
    function t(A, o, r, g, a) {
      return AA(g, o - 416, o - 66);
    }
    function e(A, o, r, g, a) {
      return KA(o - 222, a);
    }
    return window[t(409, 292, 312, "eFXV") + e(747, 769, 766, 677, "J(Ga")][e(557, 607, 512, 600, "HgqE") + n(-589, -604, "GWAZ")];
  }
  [LA(-522, -548, -510, "Tn2N") + H(1156, 1100, 1109, 1066, "GWAZ") + KA(542, "Tn2N")]() {
    function n(r, g, a, s, c) {
      return KA(a - 690, r);
    }
    function t(r, g, a, s, c) {
      return QA(r - 365, g - 433, s, s - 437, r - -529);
    }
    function e(r, g, a, s, c) {
      return LA(r - 393, g - 16, a - 155, g);
    }
    function A(r, g, a, s, c) {
      return AA(s, g - 417, a - 524);
    }
    function o(r, g, a, s, c) {
      return AA(g, g - 45, a - 331);
    }
    try {
      if (A(696, 856, 795, "aQ6^", 876) === A(704, 893, 791, "k2ML", 682)) _0x53fff9[A(827, 881, 891, "aQ6^", 904)]();
      else {
        if (!this[A(851, 962, 846, "#BiB", 733) + "se"])
          if (n("5O4V", 1223, 1268, 1186, 1201) === A(627, 787, 714, "9(MQ", 824)) _0x411382[n("YcNm", 1379, 1263, 1362, 1149) + "ch"]((r) => _0x1d8a2b[n("6qyb", 1025, 1062, 1186, 1127)](r));
          else throw new Wi(A(786, 751, 715, "aQ6^", 785) + o(491, "gPw)", 576, 691, 478) + t(-309, -318, -326, "r$$A", -368) + A(1032, 909, 952, "r$$A", 868) + ".");
        if (!this[e(-466, "XxW)", -343, -386, -285) + A(821, 736, 746, "V*4P", 845) + "d"][e(-489, "k2ML", -571, -640, -569) + n("9(MQ", 1297, 1199, 1105, 1189) + e(-429, "bw9H", -358, -434, -366) + "ed"]()) {
          if (o(514, "GWAZ", 543, 452, 583) === t(-414, -512, -532, "gPw)", -306)) return _0x4d650e[e(-417, "bw]V", -521, -641, -556) + e(-330, "XxW)", -443, -469, -521)][o(712, "bw]V", 736, 722, 647) + o(620, "TrDn", 662, 714, 755)];
          throw new Wi(A(748, 777, 833, "5O4V", 838) + A(660, 736, 755, "YcNm", 855) + e(-318, "J(Ga", -350, -290, -333) + n("eFXV", 1139, 1166, 1079, 1058) + ".");
        }
        this[A(933, 719, 824, "BeCU", 923) + o(537, "7qoL", 606, 529, 645)] = new Cg(dB(this[A(742, 853, 863, "wawJ", 980) + "se"], this[n("QcnT", 1334, 1220, 1277, 1208) + t(-398, -276, -505, "5O4V", -405)]())), this[n("9Rd9", 1290, 1234, 1240, 1329) + n("5O4V", 1218, 1207, 1326, 1309) + "s"](this[t(-361, -435, -373, "9(MQ", -362) + e(-317, "1WJ7", -427, -307, -335)][A(751, 803, 786, "wawJ", 669) + "s"]), this[n("Tn2N", 1115, 1159, 1117, 1209) + e(-445, "9(MQ", -357, -470, -312) + o(603, "36%L", 685, 563, 611)](this[n("9(MQ", 1064, 1186, 1101, 1240) + A(721, 722, 799, "7qoL", 711)][e(-424, "K3ah", -430, -423, -495) + e(-396, "RllB", -436, -467, -503)]);
      }
    } catch (r) {
      if (n("K3ah", 1298, 1230) === o(657, "zR!$", 595)) return null;
      {
        if (r instanceof Wi) A(664, 706, 710, "boh@") !== e(-347, "GWAZ", -382) ? r[o(700, "Zv%4", 739)]() : _0x1f299c[A(1016, 867, 922, "9(MQ") + e(-466, "gggK", -359)](_0x3db38b);
        else if (r instanceof Error)
          if (o(652, "zLjf", 607) !== t(-479, -461, -560, "Nnyh")) console[A(880, 899, 830, "BeCU")](r);
          else return !!this[o(704, "QcnT", 620) + t(-264, -201, -254, "gggK")];
        const g = {};
        g[A(617, 615, 716, "TrDn") + t(-445, -348, -378, "gPw)")] = !1, g[t(-351, -408, -285, ")Wyt") + "s"] = [], g[A(878, 1e3, 913, "Zv%4") + t(-408, -511, -501, "c8VT")] = [], g[e(-494, "7971", -418) + o(625, "K3ah", 744) + n("K3ah", 1145, 1223)] = void 0, g[o(724, "bw]V", 709)] = function() {
        }, g[n("6qyb", 1064, 1094) + n("Tn2N", 1162, 1250)] = "", this[e(-413, ")Wyt", -324) + e(-334, "QcnT", -446)] = new Cg(g);
      }
    }
  }
  [LA(-640, -711, -623, "HgqE") + H(789, 718, 813, 833, "HgqE") + KA(514, "eFXV") + AA("BeCU", 212, 221)]() {
    function n(t, e, A, o, r) {
      return QA(t - 49, e - 80, t, o - 194, A - 56);
    }
    return !!this[n("gzN%", 391, 319, 382) + n("GWAZ", 100, 182, 83)];
  }
  [KA(420, "BeCU") + H(751, 886, 760, 842, "aQ6^") + AA("QcnT", 348, 279) + "t"]() {
    function n(t, e, A, o, r) {
      return AA(o, e - 26, t - 578);
    }
    return this[n(944, 871, 959, "gggK") + n(763, 728, 836, "8@m0")];
  }
  [AA("J(Ga", 358, 247) + AA("7qoL", 102, 195) + "se"]() {
    if (!this[A(1049, 1036, "7971") + "se"]) return n(26, "dsKq", 34, 28, 107) !== A(1217, 1137, "zLjf") ? _0x5d1267[t(-65, -204, -162, -140, "7971")](this[o(34, -66, -72, 25, "RllB") + "se"]) : null;
    function n(r, g, a, s, c) {
      return KA(c - -424, g);
    }
    function t(r, g, a, s, c) {
      return KA(a - -653, c);
    }
    function e(r, g, a, s, c) {
      return KA(a - -359, g);
    }
    function A(r, g, a, s, c) {
      return KA(r - 623, a);
    }
    function o(r, g, a, s, c) {
      return H(r - 254, g - 425, a - 423, r - -843, c);
    }
    try {
      if (t(-165, -196, -236, -216, "36%L") === n(-83, "36%L", -45, 98, -7)) return JSON[A(1054, 1076, "6qyb", 1053, 934)](this[t(-226, -129, -159, -154, "BeCU") + "se"]);
      throw new _0x4e0ab0(n(-130, "fE]H", 89, -158, -33) + o(143, 17, 95, 38, "#BiB") + t(-272, -219, -185, -220, "boh@") + e(0, "9Rd9", 89, 90, -1) + ".");
    } catch (r) {
      if (e(261, "k2ML", 182) !== A(1177, 1214, "7qoL")) _0x429a29[A(1030, 1151, "bw]V")](_0x4519ee);
      else {
        if (r instanceof Error) {
          if (o(136, 208, 75, 125, "SKzE") === n(37, "D51Y", -95, -115, -76)) throw new _0x3457c7(n(32, "4*f]", 190, 26, 108) + A(1064, 1103, "4CtH") + t(-241, -211, -240, -175, "K3ah") + n(-99, "QcnT", 46, 33, -9) + ".");
          w[t(-371, -261, -273, -187, "Nnyh") + o(42, -6, 0, -33, ")Wyt")](r);
        }
        return null;
      }
    }
  }
  [QA(-7, 156, "aQ6^", 41, 56) + H(1022, 1148, 1181, 1063, "dsKq")]() {
    var r;
    function n(g, a, s, c, I) {
      return H(g - 342, a - 167, s - 342, g - -484, I);
    }
    function t(g, a, s, c, I) {
      return H(g - 62, a - 107, s - 424, c - -1380, g);
    }
    function e(g, a, s, c, I) {
      return AA(s, a - 353, c - 670);
    }
    function A(g, a, s, c, I) {
      return QA(g - 129, a - 320, c, c - 220, a - -168);
    }
    const o = this[n(499, 484, 463, 444, "HgqE") + t("Tn2N", -339, -327, -426) + "se"]();
    return ((r = o == null ? void 0 : o[t("5O4V", -294, -319, -325) + e(967, 1043, "QcnT", 1020)]) == null ? void 0 : r[A(-137, -63, -31, "r$$A")]) || [];
  }
  [QA(94, 157, "wawJ", 155, 116) + H(1151, 945, 1121, 1059, "k2ML") + QA(273, 104, "SKzE", 167, 191)]() {
    var o;
    function n(r, g, a, s, c) {
      return H(r - 83, g - 40, a - 446, g - -622, s);
    }
    function t(r, g, a, s, c) {
      return QA(r - 140, g - 383, c, s - 21, r - -216);
    }
    const e = this[A("#BiB", 65, 74) + n(311, 426, 457, "9(MQ") + "se"]();
    function A(r, g, a, s, c) {
      return KA(a - -406, r);
    }
    return (o = e == null ? void 0 : e[n(454, 351, 225, "dsKq") + A("SKzE", -125, -29)]) == null ? void 0 : o[t(-128, -89, -128, -51, "36%L") + t(-8, 105, -23, 70, "RllB")];
  }
}
const ha = Re(void 0);
ha.displayName = "CommonConfigurationContext";
function NI() {
  const i = ae(ha);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  function t(a, s, c, I, E) {
    return NA(E - 794, s);
  }
  const e = i();
  function A(a, s, c, I, E) {
    return NA(s - 533, c);
  }
  function o(a, s, c, I, E) {
    return NA(a - 174, E);
  }
  function r(a, s, c, I, E) {
    return NA(E - 594, c);
  }
  function g(a, s, c, I, E) {
    return NA(c - -785, a);
  }
  for (; ; )
    try {
      if (parseInt(t(1054, "4]p2", 1070, 1056, 1061)) / 1 + -parseInt(r(857, 843, "@wuQ", 853, 847)) / 2 + -parseInt(t(1049, "oC*a", 1053, 1047, 1058)) / 3 * (parseInt(r(861, 860, "##y^", 858, 859)) / 4) + parseInt(g("LJ#H", -513, -509, -514, -513)) / 5 * (parseInt(o(445, 447, 458, 444, "OdE]")) / 6) + parseInt(A(777, 790, "Vdli", 795, 783)) / 7 * (parseInt(t(1074, "DR91", 1055, 1061, 1062)) / 8) + parseInt(A(790, 795, "Y3Eo", 807, 805)) / 9 * (-parseInt(o(429, 439, 419, 435, "raQw")) / 10) + parseInt(g("ex6^", -515, -516, -512, -509)) / 11 * (parseInt(o(430, 433, 436, 430, "2yCR")) / 12) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jn, 1013 * 159 + -322111 * 1 + 503663);
function NA(i, n) {
  const t = jn();
  return NA = function(e, A) {
    e = e - 251;
    let o = t[e];
    if (NA.hykiIG === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      NA.BSuhbl = c, i = arguments, NA.hykiIG = !0;
    }
    const g = t[217 * 5 + 256 + -1341], a = e + g, s = i[a];
    return s ? o = s : (NA.yoyjuM === void 0 && (NA.yoyjuM = !0), o = NA.BSuhbl(o, A), i[a] = o), o;
  }, NA(i, n);
}
function yB() {
  function i(o, r, g, a, s) {
    return NA(s - 526, a);
  }
  const { assetsDirectoryPath: n } = NI(), [t, e] = cA();
  V(() => {
    async function o() {
      const r = new pB(), g = new mB(r);
      function a(s, c, I, E, C) {
        return NA(c - 386, C);
      }
      await g[a(657, 644, 648, 633, "Vdli")](n), e(g);
    }
    o();
  }, [n]);
  const A = {};
  return A[i(807, 790, 802, "wKj^", 801) + "le"] = t, A;
}
function jn() {
  const i = ["WQ/cMw5nW5u", "W7vPj8kaW41JnmoUW4HNtW", "WQpdPqJcH8odWO4fW40", "W4KyfmofW4X9kSo0WRXPpw8", "W7JcH8ojiSk5W4xcNJSmW7xdOCoe", "WRe/WPJcGeipW6fmgW", "WRjGdmkqWP9doSkYW6xcISovqa", "WORcTtZcTMtcKKGv", "WPKxlSoAWOfVceudWP7cQ8oX", "W4fkDSkE", "hSo3W6VcRCk7dGldMSorWODgpG", "W7hcGmomjmk6W4JcJd41W73dPSoa", "xh5pW6tcI1S0WO3cJq09WRm", "dsldQuBcO8oKsmopWOi", "rg7dKxXAWQiyWP3dLCkvWRy", "dhJdJmobggziFs4AWQFcKa", "W4pdOSocfMP5W54k", "WRa4WPNcLfeXW6HzpG", "W7bwdcVcKCoHWPvhixD8WOq", "WQiyW7/dVvRdL8oSF1O", "W6pdQ0PqxmoPWRpdNtNcTqzmWQe", "eYOHtmofW784BG", "BxhcPMXkffBcKq", "WOKDWRVdT8oDWPpcJCkN", "W7RcUmk1W6S4WPhcIaFdTrK1sYm", "WQGAW7/cJZVcPmotC2D9fdK"];
  return jn = function() {
    return i;
  }, jn();
}
(function(i, n) {
  function t(s, c, I, E, C) {
    return DA(s - -726, c);
  }
  function e(s, c, I, E, C) {
    return DA(E - -619, c);
  }
  var A = i();
  function o(s, c, I, E, C) {
    return DA(c - 684, E);
  }
  function r(s, c, I, E, C) {
    return DA(E - -410, C);
  }
  function g(s, c, I, E, C) {
    return DA(C - 778, E);
  }
  for (; ; )
    try {
      var a = -parseInt(r(-206, -193, -191, -198, "2MOe")) / 1 + parseInt(r(-212, -199, -197, -207, "ZTM(")) / 2 * (parseInt(o(895, 904, 911, "S@bv", 893)) / 3) + -parseInt(o(906, 905, 897, "ThIs", 893)) / 4 * (parseInt(e(-414, "6N#(", -418, -417, -419)) / 5) + parseInt(g(993, 999, 984, "xEfR", 987)) / 6 + parseInt(r(-194, -203, -198, -200, "Xioj")) / 7 + -parseInt(g(1005, 995, 993, "uxW#", 995)) / 8 * (-parseInt(t(-508, "WIEF", -501, -502, -514)) / 9) + -parseInt(g(986, 975, 985, "2MOe", 985)) / 10;
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(_n, 826727 + 449537 * -1);
function DB({ crosshatch: i }) {
  function n(A, o, r, g, a) {
    return DA(o - -600, g);
  }
  function t(A, o, r, g, a) {
    return DA(a - 472, g);
  }
  function e(A, o, r, g, a) {
    return DA(a - 258, g);
  }
  return i != null && i[e(479, 469, 473, "TVYW", 474) + "id"] ? Tt[n(-372, -381, -381, "fbaN") + "r"] : Tt[t(672, 669, 679, "([Y8", 677)];
}
function DA(i, n) {
  var t = _n();
  return DA = function(e, A) {
    e = e - (13 * 365 + -1 * 4364 + -179);
    var o = t[e];
    if (DA.PddQKh === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", x = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, k = C.length; m < k; m++)
          x += "%" + ("00" + C.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, g = function(I, E) {
        var C = [], x = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      DA.hyZWAY = g, i = arguments, DA.PddQKh = !0;
    }
    var a = t[43 * -208 + -6992 + 15936], s = e + a, c = i[s];
    return c ? o = c : (DA.IcJhtx === void 0 && (DA.IcJhtx = !0), o = DA.hyZWAY(o, A), i[s] = o), o;
  }, DA(i, n);
}
function _n() {
  var i = ["W6fSDCoHW7C/W5tdQSodWPhdLJu", "m8kmWRxcNtS3WQS", "W5qfW4ibcGFdKa", "ECowhMGPWQRdLH/cQ8ovxCk9", "W5FdOcDixuau", "j8kVBMLbWR7cKW", "W6roAmoVamklW47dQN/cHHSBeq", "xSopvCoBzG", "esTyWR7dTWigCCkZrLCpWRlcUq", "jwrpyCk9W5L+lCoZv8kdlSoOWQ0", "x24nWR3dMSkgpSoWWRldVComWPtcVG", "WP1uWPabDruqW57dICkHCSkHxG", "W7JdOCocBLJcJCkZiCowWPeugdm", "xmoduajNF8kYW4u", "jM5eACk/W5SFsSoNvmk3hG", "W6hcOmkKWRldOuRdP1fpW7NdGYW", "WOn6ymkfWOVdOSkZBCk4uwFdPq", "CSoth2iUWQxdQaFcHSobFSk9", "WOGXW7aziG", "aSkAz01/W5/cVmor", "EXnbWPi5WQtcLCkwoqhcPCkJ", "C8oDWRXSW60", "qmkoxtilW4DgW4ddSsfNWPG"];
  return _n = function() {
    return i;
  }, _n();
}
function lA(i, n) {
  const t = qn();
  return lA = function(e, A) {
    e = e - (-8623 * -1 + -851 + -1 * 7441);
    let o = t[e];
    if (lA.QHBWGU === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      lA.FdnZaI = c, i = arguments, lA.QHBWGU = !0;
    }
    const g = t[4313 * -1 + 2 * 1753 + 807], a = e + g, s = i[a];
    return s ? o = s : (lA.VCxzuz === void 0 && (lA.VCxzuz = !0), o = lA.FdnZaI(o, A), i[a] = o), o;
  }, lA(i, n);
}
(function(i, n) {
  function t(a, s, c, I, E) {
    return lA(a - -858, s);
  }
  const e = i();
  function A(a, s, c, I, E) {
    return lA(s - -346, a);
  }
  function o(a, s, c, I, E) {
    return lA(s - 612, E);
  }
  function r(a, s, c, I, E) {
    return lA(I - -532, c);
  }
  function g(a, s, c, I, E) {
    return lA(a - 992, c);
  }
  for (; ; )
    try {
      if (-parseInt(r(-205, -190, "f91O", -194, -193)) / 1 + parseInt(t(-509, "vDO(", -497, -524, -504)) / 2 + parseInt(t(-504, "a#oy", -502, -503, -504)) / 3 + parseInt(t(-519, "J9$v", -510, -508, -507)) / 4 + parseInt(A("16)#", -9, -18, -4, -16)) / 5 * (-parseInt(o(939, 946, 939, 949, "xl0u")) / 6) + parseInt(A("bCDy", 11, -2, 11, 6)) / 7 * (-parseInt(g(1340, 1346, "!QKi", 1351, 1326)) / 8) + parseInt(r(-198, -197, "!QKi", -201, -191)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(qn, 24097 * 45 + 2 * -108847 + -66797);
function wB({ children: i }) {
  function n(a, s, c, I, E) {
    return lA(s - 73, c);
  }
  const { bramble: t } = yB(), e = hA(() => ({ redfin: DB({ crosshatch: t == null ? void 0 : t[g(921, 928, 925, 923, "sosE") + o(-132, -123, -141, "4R]x", -139) + g(915, 931, 930, 904, "8vZT") + "t"]() }), crosshatch: t == null ? void 0 : t[g(911, 899, 902, 926, "kBoy") + n(399, 408, "gc8@") + r("5K9Z", -331, -334, -343) + "t"](), bramble: t, wasLicenseValidated: t == null ? void 0 : t[r("16)#", -354, -342, -350) + o(-115, -144, -144, "sosE", -131) + r("J9$v", -359, -345, -351) + r("rMd!", -330, -338, -330)]() }), [t]), A = {};
  function o(a, s, c, I, E) {
    return lA(E - -491, I);
  }
  A[n(420, 420, "Js(M")] = e;
  function r(a, s, c, I, E) {
    return lA(I - -683, a);
  }
  A[o(-144, -150, -157, "L*aW", -141) + n(431, 416, "8vZT")] = i;
  function g(a, s, c, I, E) {
    return lA(a - 560, E);
  }
  return b(Gn[g(896, 895, 908, 887, "J9$v") + o(-135, -158, -150, "@VlW", -149)], A);
}
function qn() {
  const i = ["W63dUmoqW5el", "bSk7FSouECkOzcWcW44", "WPJdNCoJnCosWQPghmksvmoDsCk1", "WOZcVSkkWP9wrCooWR4EBwujBG", "fmoHm0nz", "W7DnrX3dL8kHWQxdSYZcUG", "WOyzWOy", "WQ/dTwC", "w8o/mCkXWRBdOs5hkeiJr8kl", "lfmPpvnAWQ4FlsxcT3r+", "zSo6ctldKv/dUSocWOdcLSoEWQP/", "i8kMWQpdPCoY", "W6JcLX1lWR8vj8otmCkshCowW7C", "C8oUWPyvx313sCoRWRvljuK", "WRD1W5uTeG", "mSkRsuVcIq", "W7JcQmk+bum", "WO9uW49U", "W4lcV8otymkqW6W2A8kqbwldVrC", "WO/dTxP5uW", "W6KNFZrxadNcG08qe37cGW", "FWiNA8o4pua", "WORcL2BcT8kZDCkVjb4GvwH/", "W5mhW7ZcHSkxWR/dSf95W6CNemkg", "WQFcVxlcTJm", "WQpcVwJcIt8", "AqxcPCk7WPdcN0S", "W63cMXLiWR8skmo2k8kxiSokW7O", "W6VdQ8otW44g", "qmoSpSkOAG", "BhxdGCoOWRhcNLhcVmkgnq", "W50+l8oNW7W"];
  return qn = function() {
    return i;
  }, qn();
}
const bB = -2 * -2297 + 7221 + -755 * 13;
class kB {
  constructor(n) {
    p(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), bB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -13 * 503 + -6563 * -1 + 376 && g.status !== -8070 * -1 + -1 * -309 + -7978 : !0;
  }
}
var Mt, be, Ye, Wt, mo, yo, Do, wo;
class SB {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    O(this, Mt);
    O(this, be);
    O(this, Ye);
    O(this, Wt);
    O(this, mo);
    O(this, yo);
    O(this, Do);
    O(this, wo);
    F(this, Mt, t), F(this, mo, n), F(this, wo, e), F(this, yo, window.location.origin), F(this, Do, "8.0.1");
  }
  async init(n) {
    if (F(this, Ye, this.shouldCountTransactions(n)), Ea.info("Transaction counting is " + (D(this, Ye) ? "enabled" : "disabled")), Qa()) {
      F(this, be, !0), F(this, Ye, !1);
      return;
    }
    if (!D(this, Ye)) {
      F(this, be, !0);
      return;
    }
    if (F(this, Wt, D(this, Mt).transactionCountingToken), !D(this, Wt)) {
      console.warn("Transaction counting token is missing"), F(this, be, !1);
      return;
    }
    F(this, be, await D(this, Mt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, g;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((g = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : g["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!D(this, Ye) || !D(this, be)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = D(this, mo), e.id = D(this, yo), e.version = D(this, Do);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = D(this, wo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + D(this, Wt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return D(this, be) || !1;
  }
}
Mt = new WeakMap(), be = new WeakMap(), Ye = new WeakMap(), Wt = new WeakMap(), mo = new WeakMap(), yo = new WeakMap(), Do = new WeakMap(), wo = new WeakMap();
function GB(i, n) {
  const { crosshatch: t, bramble: e } = Ei(), [A, o] = cA(null);
  V(() => {
    if (!t) return;
    (async () => {
      const a = new kB(n), s = new SB({ hwids: e.getHwids(), tokenHandler: a, transactionType: i });
      await s.init(t), o(s);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function NB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = GB(t, n), A = hA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ b(Rn.Provider, { value: A, children: i });
}
const Me = {};
Me.FACE = "web-capture-face", Me.DOCUMENT = "web-capture-document", Me.MAGNIFEYE = "web-capture-magnifeye", Me.SMILE = "web-capture-smile", Me.PALM = "web-capture-palm", Me.EYEGAZE = "web-capture-eyegaze", Me.MULTIRANGE = "web-capture-multirange";
const RB = Me;
var TA = function() {
  return TA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, TA.apply(this, arguments);
};
function Pt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function FB(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var vB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, MB = FB(function(i) {
  return vB.test(i) || i.charCodeAt(3 * 2047 + -3821 + -2320) === 1644 + -2 * -553 + -2639 && i.charCodeAt(-6584 + 2 * 32 + -6521 * -1) === 8014 * -1 + -2463 * -4 + -27 * 64 && i.charCodeAt(-1 * 7918 + 6794 + 1126 * 1) < -14541 + -472 * -31;
});
function WB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Oi, Bg;
function LB() {
  return Bg || (Bg = 2062 * 2 + 9937 + -14060, Oi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), s = 5125 + -25 * 205; s < r.length; s++) {
      var c = r[s];
      if (!a(c)) return !1;
      var I = n[c], E = t[c];
      if (o = e ? e.call(A, I, E, c) : void 0, o === !1 || o === void 0 && I !== E) return !1;
    }
    return !0;
  }), Oi;
}
var OB = LB();
const JB = /* @__PURE__ */ WB(OB);
var K = "-ms-", Qo = "-moz-", T = "-webkit-", RI = "comm", di = "rule", fa = "decl", UB = "@import", FI = "@keyframes", YB = "@layer", vI = Math.abs, pa = String.fromCharCode, Nr = Object.assign;
function TB(i, n) {
  return IA(i, 134 + -67 * 2) ^ 1470 + 111 * -1 + -1314 ? (((n << -4433 * 1 + 1 * -1033 + -1 * -5468 ^ IA(i, 4034 + -2017 * 2)) << 87 * 59 + 380 * 12 + -9691 ^ IA(i, 7030 + -7 * 206 + -5587)) << -1948 + 1 * -5009 + 6959 ^ IA(i, 8792 + 18 * 293 + 16 * -879)) << 2 ^ IA(i, 3) : -5536 + 11 * 253 + 2753;
}
function MI(i) {
  return i.trim();
}
function ye(i, n) {
  return (i = n.exec(i)) ? i[3387 + -1 * 7044 + -1219 * -3] : i;
}
function W(i, n, t) {
  return i.replace(n, t);
}
function xn(i, n, t) {
  return i.indexOf(n, t);
}
function IA(i, n) {
  return i.charCodeAt(n) | -11 * -281 + 1 * -523 + -2568;
}
function Ht(i, n, t) {
  return i.slice(n, t);
}
function Ce(i) {
  return i.length;
}
function WI(i) {
  return i.length;
}
function so(i, n) {
  return n.push(i), i;
}
function PB(i, n) {
  return i.map(n).join("");
}
function Qg(i, n) {
  return i.filter(function(t) {
    return !ye(t, n);
  });
}
var li = -1 * 225 + -2417 + 2643, Kt = 1537 + 8 * -971 + 6232, LI = -3805 + 1 * -6613 + 5209 * 2, Ae = 4771 + 140 * 26 + -8411, $ = -12218 + -2 * -6109, zt = "";
function ui(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = li, a.column = Kt, a.length = r, a.return = "", a.siblings = g, a;
}
function We(i, n) {
  return Nr(ui("", null, null, "", null, null, -314 * -2 + -7993 + -15 * -491, i.siblings), i, { length: -i.length }, n);
}
function pt(i) {
  for (; i.root; ) i = We(i.root, { children: [i] });
  so(i, i.siblings);
}
function HB() {
  return $;
}
function KB() {
  return $ = Ae > 2369 * -1 + 7508 + -5139 ? IA(zt, --Ae) : 1 * -5482 + -555 + -1 * -6037, Kt--, $ === -5078 + 80 * 86 + -16 * 112 && (Kt = 9487 * -1 + 43 * -54 + -11810 * -1, li--), $;
}
function ie() {
  return $ = Ae < LI ? IA(zt, Ae++) : -3277 + 38 * 5 + 3087, Kt++, $ === 128 * 42 + -29 * -51 + -5 * 1369 && (Kt = 9891 + -863 * 1 + 3009 * -3, li++), $;
}
function Ct() {
  return IA(zt, Ae);
}
function dn() {
  return Ae;
}
function hi(i, n) {
  return Ht(zt, i, n);
}
function Rr(i) {
  switch (i) {
    case 4482 + -6175 * 1 + -1693 * -1:
    case -673 * 14 + -3439 + 99 * 130:
    case -1 * -8629 + 1 * -2583 + -6036:
    case 1037 + 1 * -3010 + 2 * 993:
    case 32:
      return 1 * 943 + -195 * -15 + 3863 * -1;
    case 3911 + 524 * -4 + -1782:
    case 7773 * 1 + 6 * -1028 + -2 * 781:
    case -14084 + 7064 * 2:
    case 47:
    case 2899 + 2 * -4809 + 6781:
    case 3242 + 2213 * 2 + -3802 * 2:
    case -7963 + -2 * -1128 + 5833 * 1:
    case 350 * 2 + -4 * -899 + -4237 * 1:
    case -1 * 9586 + 3897 + 2 * 2906:
    case -2341 + -2667 * 2 + 7800:
      return -6678 + 14 * -211 + 9636;
    case -2749 + -1250 * -8 + -7193:
      return 3;
    case 3466 * -1 + 1 * 2381 + 1119:
    case 7177 * 1 + -1 * -4351 + 1 * -11489:
    case -6868 + 425 * 7 + -1311 * -3:
    case -1459 * 2 + -1777 * 3 + 8340:
      return 1 * 8452 + 9032 + -17482;
    case -748 + 789 * 1:
    case -982 + -25 * -43:
      return 5188 + 181 * 37 + -11884;
  }
  return -2498 * 1 + 71 * 53 + 5 * -253;
}
function jB(i) {
  return li = Kt = 51 * 181 + -6972 + -2258, LI = Ce(zt = i), Ae = -2502 + 2 * 1251, [];
}
function _B(i) {
  return zt = "", i;
}
function Ji(i) {
  return MI(hi(Ae - (53 * 99 + 1 * 3019 + -8265), Fr(i === -7896 + -433 * -1 + 7554 ? i + 2 : i === 641 * 2 + -1 * -9895 + -11137 ? i + 1 : i)));
}
function qB(i) {
  for (; ($ = Ct()) && $ < 33; ) ie();
  return Rr(i) > 3827 + -186 * -1 + -4011 || Rr($) > -8 * 1 + 3092 + -3081 ? "" : " ";
}
function VB(i, n) {
  for (; --n && ie() && !($ < 338 * -3 + -8619 + 9681 || $ > 1059 + -11 * 87 || $ > 57 && $ < -11434 + -11499 * -1 || $ > 7103 + 3 * 1239 + -125 * 86 && $ < -322 * 31 + -3231 * -1 + -214 * -32); ) ;
  return hi(i, dn() + (n < 6 && Ct() == -700 * 2 + -41 * -67 + 1315 * -1 && ie() == 8409 * 1 + 1814 * 4 + -15633));
}
function Fr(i) {
  for (; ie(); ) switch ($) {
    case i:
      return Ae;
    case 3209 + -25 * 367 + 6e3:
    case 39:
      i !== 628 * 12 + -8263 + 761 && i !== 21 * 193 + 9966 + 466 * -30 && Fr($);
      break;
    case -6978 + 93 * -104 + -1 * -16690:
      i === 9291 * 1 + -2024 * -2 + -13298 && Fr(i);
      break;
    case 8089 * 1 + -7872 + 25 * -5:
      ie();
      break;
  }
  return Ae;
}
function ZB(i, n) {
  for (; ie() && i + $ !== -2173 + -33 * 222 + 9546 + (1 * 1206 + -7 * 321 + 1051); ) if (i + $ === 14 * -140 + 2 * 1828 + -1654 + (-203 * 41 + 57 * -73 + 12526) && Ct() === 4079 * -1 + 8057 + 1 * -3931) break;
  return "/*" + hi(n, Ae - 1) + "*" + pa(i === 9485 + -3 * 1481 + -4995 ? i : ie());
}
function zB(i) {
  for (; !Rr(Ct()); ) ie();
  return hi(i, Ae);
}
function XB(i) {
  return _B(ln("", null, null, null, [""], i = jB(i), 1858 * -1 + -5851 * -1 + 363 * -11, [-1 * 4748 + 2542 + 2206], i));
}
function ln(i, n, t, e, A, o, r, g, a) {
  for (var s = 0, c = 5 * -1981 + -1021 * -5 + 4800, I = r, E = 0, C = -23 * 253 + -4720 + 1171 * 9, x = -7457 + -224 * 13 + 10369, d = -2728 + 6 * 367 + 527 * 1, l = -1 * 3270 + 1 * -9371 + 12642, Q = -9742 + 1 * 9743, h = 9905 + -1415 * 7, m = "", k = A, y = o, G = e, S = m; l; ) switch (x = h, h = ie()) {
    case -3 * 2029 + -1 * -6961 + -278 * 3:
      if (x != -661 * -11 + 1278 + -8441 && IA(S, I - (9957 + 524 * -19)) == 5352 + -52 * 158 + 2922) {
        xn(S += W(Ji(h), "&", "&\f"), "&\f", vI(s ? g[s - 1] : 2146 + -3063 * -1 + 1 * -5209)) != -1 && (Q = -1);
        break;
      }
    case -5148 + 1129 * -1 + 6311:
    case 2464 + -1 * 2425:
    case 4909 * 2 + -3 * 796 + -7339:
      S += Ji(h);
      break;
    case -311 * 27 + 441 * -13 + 14139:
    case 4974 + -241 * 8 + 2 * -1518:
    case 9 * 917 + -7879 * 1 + -361 * 1:
    case 2634 + 2 * -4414 + -1 * -6226:
      S += qB(x);
      break;
    case 2 * 199 + 4412 + -4718:
      S += VB(dn() - (782 + 781 * -1), 87 * -11 + -8395 + 7 * 1337);
      continue;
    case 331 * -25 + 4546 + 3776:
      switch (Ct()) {
        case -910 + -5906 * 1 + 1143 * 6:
        case -4 * 2335 + -3 * -1744 + 277 * 15:
          so($B(ZB(ie(), dn()), n, t, a), a);
          break;
        default:
          S += "/";
      }
      break;
    case (9704 + 340 * -1 + 1 * -9241) * d:
      g[s++] = Ce(S) * Q;
    case (41 * -55 + -1 * 404 + 29 * 96) * d:
    case 59:
    case 2118 * -4 + 7163 + 1309:
      switch (h) {
        case -1 * -6263 + 2 * 4419 + -15101 * 1:
        case 41 * 2 + 823 * 7 + -5718:
          l = -7232 * -1 + 8466 + -15698;
        case 3036 + -1 * 3955 + 978 + c:
          Q == -1 && (S = W(S, /\f/g, "")), C > -7325 + 1465 * 5 && Ce(S) - I && so(C > 7192 + -13 * -397 + -12321 ? xg(S + ";", e, t, I - (-1783 + 446 * 4), a) : xg(W(S, " ", "") + ";", e, t, I - (235 * 17 + 1 * 211 + -4204), a), a);
          break;
        case 6655 + -139 * 33 + 1 * -2009:
          S += ";";
        default:
          if (so(G = Eg(S, n, t, s, c, A, g, m, k = [], y = [], I, o), o), h === -1 * 7097 + 19 * -503 + -1 * -16777)
            if (c === -373 * 17 + 1131 + -5 * -1042) ln(S, n, G, G, k, o, I, g, y);
            else switch (E === 99 && IA(S, 347 * -4 + 1387 * 4 + 4157 * -1) === -6975 + -73 * 15 + 8180 ? 1988 + -16 * 118 : E) {
              case -11 * 485 + -7247 + 12682:
              case -7841 + -4 * 1127 + 12457:
              case 3509 * -2 + -2 * -1383 + 4361:
              case -11757 + -106 * -112:
                ln(i, G, G, e && so(Eg(i, G, G, -41 * -8 + 137 * 21 + -641 * 5, 586 * 16 + -1 * -866 + -10242, A, g, m, A, k = [], I, y), y), A, y, I, g, e ? k : y);
                break;
              default:
                ln(S, G, G, G, [""], y, 1235 + 796 * 10 + -9195, g, y);
            }
      }
      s = c = C = 1 * -9698 + 8 * -1039 + 1 * 18010, d = Q = -4847 + -2 * -2424, m = S = "", I = r;
      break;
    case 14185 + 831 * -17:
      I = -131 * 1 + -3 * 389 + 1299 + Ce(S), C = x;
    default:
      if (d < -4751 + -914 * -7 + 823 * -2) {
        if (h == 4217 * 1 + -6943 + 77 * 37) --d;
        else if (h == -1 * 4699 + -4852 + -4838 * -2 && d++ == 137 * -53 + -91 * 29 + -275 * -36 && KB() == 3585 + 848 * 8 + 1 * -10244) continue;
      }
      switch (S += pa(h), h * d) {
        case -43 * -77 + -1447 * -1 + -4 * 1180:
          Q = c > 9428 + -1 * -8356 + 1976 * -9 ? 1 : (S += "\f", -1);
          break;
        case 9150 + 5 * 271 + 317 * -33:
          g[s++] = (Ce(S) - (9997 * -1 + -5 * -1244 + 2 * 1889)) * Q, Q = -77 * -73 + -40 * -52 + -7700;
          break;
        case 55 * 46 + -2 * -4716 + 6 * -1983:
          Ct() === 6994 + 6949 * -1 && (S += Ji(ie())), E = Ct(), c = I = Ce(m = S += zB(dn())), h++;
          break;
        case 7243 + -4701 * -2 + -25 * 664:
          x === -1 * 4079 + -3793 * -1 + 331 && Ce(S) == 2 && (d = 10401 + 1 * -10401);
      }
  }
  return o;
}
function Eg(i, n, t, e, A, o, r, g, a, s, c, I) {
  for (var E = A - 1, C = A === 0 ? o : [""], x = WI(C), d = 7509 * 1 + -6743 + -766, l = 3937 * 1 + -1097 * -7 + -11616, Q = 2 * 3019 + 751 * 11 + -1 * 14299; d < e; ++d) for (var h = -9403 * 1 + 8741 * -1 + -756 * -24, m = Ht(i, E + 1, E = vI(l = r[d])), k = i; h < x; ++h) (k = MI(l > -7167 + 3 * 2389 ? C[h] + " " + m : W(m, /&\f/g, C[h]))) && (a[Q++] = k);
  return ui(i, n, t, A === 0 ? di : g, a, s, c, I);
}
function $B(i, n, t, e) {
  return ui(i, n, t, RI, pa(HB()), Ht(i, 2, -2), -1 * -5048 + -4 * -260 + -6088, e);
}
function xg(i, n, t, e, A) {
  return ui(i, n, t, fa, Ht(i, 29 * -73 + 981 + 1136, e), Ht(i, e + (231 * 1 + -601 + 1 * 371), -1), e, A);
}
function OI(i, n, t) {
  switch (TB(i, n)) {
    case 303 + 11 * 801 + -4011:
      return T + "print-" + i + i;
    case 8363 + 208 * -3 + -2002:
    case -11007 + -8 * -1901:
    case 3177:
    case 1 * 7219 + 551 * 4 + -5990:
    case 2 * 4481 + 1262 * 7 + -16155:
    case -13 * 542 + -4524 + -517 * -31:
    case -4653 + 541 * 14:
    case 5572:
    case 6356:
    case 5844:
    case -149 * 62 + -2378 * 4 + 593 * 37:
    case 6645:
    case 1790 + -3 * -405:
    case 6391:
    case -10148 + 47 * 341:
    case 12508 + -15 * 459:
    case -5103 + -57 * -86 + 528 * 12:
    case -71 * 79 + 5381 * 1 + 4827:
    case 1462 + -1 * 6301 + 9694:
    case -3861 + -278 * -25 + 1126:
    case 11558 + -5 * 2398 + 6821:
    case 903 * 5 + 43 * -158 + 2 * 3694:
    case 5365:
    case -183 + -4 * -1451:
    case -513 * 3 + -9 * -359 + 2137:
      return T + i + i;
    case -427 + 4 * 153 + 4604:
      return Qo + i + i;
    case 5349:
    case -4366 + 8612 * 1:
    case -9 * -569 + 4715 * -1 + 734 * 6:
    case -106 * 83 + 1 * 11993 + 3773 * 1:
    case -7 * 122 + 4031 + 1 * -421:
      return T + i + Qo + i + K + i + i;
    case -75 * 10 + 8733 + -2047:
      switch (IA(i, n + (-19 * -163 + -521 + -2565))) {
        case 6053 * 1 + 5932 + 9 * -1319:
          return T + i + K + W(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -8573 + 2559 * 1 + -2 * -3061:
          return T + i + K + W(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 3074 + -7627 * -1 + -32 * 333:
          return T + i + K + W(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -5256 + -38 * -318:
    case 13421 + 81 * -113:
    case 1486 * 1 + 7180 + -5763:
      return T + i + K + i + i;
    case -131 * 41 + 30 * -227 + 18346:
      return T + i + K + "flex-" + i + i;
    case 5187:
      return T + i + W(i, /(\w+).+(:[^]+)/, T + "box-$1$2" + K + "flex-$1$2") + i;
    case 1158 + 641 * 3 + 2362:
      return T + i + K + "flex-item-" + W(i, /flex-|-self/g, "") + (ye(i, /flex-|baseline/) ? "" : K + "grid-row-" + W(i, /flex-|-self/g, "")) + i;
    case 3309 + -683 * -2:
      return T + i + K + "flex-line-pack" + W(i, /align-content|flex-|-self/g, "") + i;
    case 1 * -7912 + -6156 + -19616 * -1:
      return T + i + K + W(i, "shrink", "negative") + i;
    case -5 * 1223 + -5307 + 16714:
      return T + i + K + W(i, "basis", "preferred-size") + i;
    case 10177 * -1 + -3588 * 1 + 19825:
      return T + "box-" + W(i, "-grow", "") + T + i + K + W(i, "grow", "positive") + i;
    case 4554:
      return T + W(i, /([^-])(transform)/g, "$1" + T + "$2") + i;
    case 6187:
      return W(W(W(i, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), i, "") + i;
    case 7351 + -103 * -71 + -9169:
    case -6232 + -28 * -5 + 10051:
      return W(i, /(image-set\([^]*)/, T + "$1$`$1");
    case -1 * 5854 + -8668 + 19490:
      return W(W(i, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + i + i;
    case -8399 + 293 * 43:
      if (!ye(i, /flex-|baseline/)) return K + "grid-column-align" + Ht(i, n) + i;
      break;
    case 7973 + -10 * 347 + -91 * 21:
    case 559 + -2 * 2630 + 8061:
      return K + W(i, "template-", "") + i;
    case -1 * 5432 + -26 * 339 + 18630:
    case 3616:
      return t && t.some(function(e, A) {
        return n = A, ye(e.props, /grid-\w+-end/);
      }) ? ~xn(i + (t = t[n].value), "span", 7660 + 1532 * -5) ? i : K + W(i, "-start", "") + i + K + "grid-row-span:" + (~xn(t, "span", 2524 * 1 + 1 * 4861 + -7385 * 1) ? ye(t, /\d+/) : +ye(t, /\d+/) - +ye(i, /\d+/)) + ";" : K + W(i, "-start", "") + i;
    case -15 * -74 + -202 * -7 + 2 * 1186:
    case -1 * 5063 + 1225 + 7966:
      return t && t.some(function(e) {
        return ye(e.props, /grid-\w+-start/);
      }) ? i : K + W(W(i, "-end", "-span"), "span ", "") + i;
    case -1 * 9049 + 25 * -233 + 18969:
    case 3583:
    case -1 * 6973 + -555 * -8 + 6601:
    case 4036 + 836 * -1 + 668 * -1:
      return W(i, /(.+)-inline(.+)/, T + "$1$2") + i;
    case 99 * -140 + 370 * 29 + 11246:
    case 20 * -631 + 1 * -7189 + 26868:
    case 5753:
    case -3347 * -3 + -731 * -10 + -7 * 1688:
    case -483 + 14 * -281 + 9862 * 1:
    case 16197 + 2624 * -4:
    case -659 * -11 + -4551 + -745 * -3:
    case -433 * -9 + 2 * -1108 + 2996:
    case -409 * 23 + 8554 + 31 * 206:
    case -1 * -4441 + -5647 * -1 + -4299:
    case 418 * -13 + -56 * -38 + 8327:
    case 7608 + -139 * -30 + -7013:
      if (Ce(i) - (-3813 + 3814 * 1) - n > -4533 + -131 * -48 + -1749) switch (IA(i, n + (25 * -125 + -3 * -778 + 792))) {
        case 2 * -1609 + 4714 + -1 * 1387:
          if (IA(i, n + (1568 + -586 * -1 + 2150 * -1)) !== 5 * -1949 + 137 * -27 + -1 * -13489) break;
        case -8951 + -25 * -63 + 7478:
          return W(i, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + Qo + (IA(i, n + (-57 * -75 + -3562 + -5 * 142)) == -296 * 4 + -8180 + 9472 ? "$3" : "$2-$3")) + i;
        case 7212 + -2 * 1621 + -3855:
          return ~xn(i, "stretch", 461 * -1 + -7538 + 7999) ? OI(W(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -219 * 39 + -1271 + 14964:
    case -2 * -2228 + 2300 + -836:
      return W(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, s) {
        return K + A + ":" + o + s + (r ? K + A + "-span:" + (g ? a : +a - +o) + s : "") + i;
      });
    case 2303 * 1 + 71 * 139 + -7223 * 1:
      if (IA(i, n + (-1296 + 62 * 21)) === 1 * 8338 + 9888 + -18105) return W(i, ":", ":" + T) + i;
      break;
    case 7586 + -3 * -970 + 1013 * -4:
      switch (IA(i, IA(i, 14) === 45 ? 1 * -3742 + -7754 + 11514 : -5908 + 3 * 1973)) {
        case 5 * -1685 + 1167 + -2 * -3689:
          return W(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (IA(i, 1 * 4337 + 287 * 23 + -10924) === -1581 + -2 * -3251 + -106 * 46 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + K + "$2box$3") + i;
        case -2534 * -1 + 7737 + -10171:
          return W(i, ":", ":" + K) + i;
      }
      break;
    case 5719:
    case 6566 + -1 * -7532 + -11451:
    case 2135:
    case -1 * -267 + -393 + 4053:
    case 4293 * -1 + -5 * -589 + 3739 * 1:
      return W(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Vn(i, n) {
  for (var t = "", e = 0; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function AQ(i, n, t, e) {
  switch (i.type) {
    case YB:
      if (i.children.length) break;
    case UB:
    case fa:
      return i.return = i.return || i.value;
    case RI:
      return "";
    case FI:
      return i.return = i.value + "{" + Vn(i.children, e) + "}";
    case di:
      if (!Ce(i.value = i.props.join(","))) return "";
  }
  return Ce(t = Vn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function eQ(i) {
  var n = WI(i);
  return function(t, e, A, o) {
    for (var r = "", g = -6222 + 141 * 25 + 2697; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function tQ(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function oQ(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case fa:
        i.return = OI(i.value, i.length, t);
        return;
      case FI:
        return Vn([We(i, { value: W(i.value, "@", "@" + T) })], e);
      case di:
        if (i.length) return PB(t = i.props, function(A) {
          switch (ye(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              pt(We(i, { props: [W(A, /:(read-\w+)/, ":" + Qo + "$1")] }));
              var o = {};
              o.props = [A], pt(We(i, o)), Nr(i, { props: Qg(t, e) });
              break;
            case "::placeholder":
              pt(We(i, { props: [W(A, /:(plac\w+)/, ":" + T + "input-$1")] })), pt(We(i, { props: [W(A, /:(plac\w+)/, ":" + Qo + "$1")] })), pt(We(i, { props: [W(A, /:(plac\w+)/, K + "input-$1")] }));
              var r = {};
              r.props = [A], pt(We(i, r)), Nr(i, { props: Qg(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var nQ = v, Y = {}, Et = typeof process < "u" && Y !== void 0 && (Y.REACT_APP_SC_ATTR || Y.SC_ATTR) || "data-styled", JI = "active", UI = "data-styled-version", fi = "6.1.18", ma = `/*!sc*/
`, Zn = typeof window < "u" && typeof document < "u", iQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && Y !== void 0 && Y.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Y.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && Y !== void 0 && Y.SC_DISABLE_SPEEDY !== void 0 && Y.SC_DISABLE_SPEEDY !== "" ? Y.SC_DISABLE_SPEEDY !== "false" && Y.SC_DISABLE_SPEEDY : Y.NODE_ENV !== "production"), dg = /invalid hook call/i, Vo = /* @__PURE__ */ new Set(), rQ = function(i, n) {
  if (Y.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 1 * -1271 + -21 * -1 + 1251; a < arguments.length; a++) g[a - (815 * -3 + -5393 + 67 * 117)] = arguments[a];
        dg.test(r) ? (o = !1, Vo.delete(e)) : A.apply(void (5502 + -2 * -3457 + 2 * -6208), Pt([r], g, !1));
      }, PA(), o && !Vo.has(e) && (console.warn(e), Vo.add(e));
    } catch (r) {
      dg.test(r.message) && Vo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, pi = Object.freeze([]), jt = Object.freeze({});
function aQ(i, n, t) {
  return t === void 0 && (t = jt), i.theme !== t.theme && i.theme || n || t.theme;
}
var vr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), gQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, sQ = /(^-|-$)/g;
function lg(i) {
  return i.replace(gQ, "-").replace(sQ, "");
}
var IQ = /(a)(d)/gi, Zo = -1715 + -19 * -93, ug = function(i) {
  return String.fromCharCode(i + (i > -1 * -4135 + 1947 * 1 + 3 * -2019 ? 39 : 97));
};
function Mr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Zo; n = n / Zo | -6217 * 1 + -33 * -122 + 2191) t = ug(n % Zo) + t;
  return (ug(n % Zo) + t).replace(IQ, "$1-$2");
}
var Ui, YI = -356 + 5737 * 1, ot = function(i, n) {
  for (var t = n.length; t; ) i = (-389 * -19 + -6889 * 1 + -67 * 7) * i ^ n.charCodeAt(--t);
  return i;
}, TI = function(i) {
  return ot(YI, i);
};
function cQ(i) {
  return Mr(TI(i) >>> -20 * 127 + 813 * 1 + 157 * 11);
}
function PI(i) {
  return Y.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Yi(i) {
  return typeof i == "string" && (Y.NODE_ENV === "production" || i.charAt(-101 * 6 + -4311 * 2 + 4 * 2307) === i.charAt(-5678 + 84 * -1 + 43 * 134).toLowerCase());
}
var $A = {};
$A.childContextTypes = !0, $A.contextType = !0, $A.contextTypes = !0, $A.defaultProps = !0, $A.displayName = !0, $A.getDefaultProps = !0, $A.getDerivedStateFromError = !0, $A.getDerivedStateFromProps = !0, $A.mixins = !0, $A.propTypes = !0, $A.type = !0;
var Le = {};
Le.name = !0, Le.length = !0, Le.prototype = !0, Le.caller = !0, Le.callee = !0, Le.arguments = !0, Le.arity = !0;
var At = {};
At.$$typeof = !0, At.compare = !0, At.defaultProps = !0, At.displayName = !0, At.propTypes = !0, At.type = !0;
var St = {};
St.$$typeof = !0, St.render = !0, St.defaultProps = !0, St.displayName = !0, St.propTypes = !0;
var HI = typeof Symbol == "function" && Symbol.for, KI = HI ? Symbol.for("react.memo") : 15091 + 4937 * 8 + -2764 * -2, CQ = HI ? Symbol.for("react.forward_ref") : 12674 + -47438 * -1, BQ = $A, QQ = Le, jI = At, EQ = ((Ui = {})[CQ] = St, Ui[KI] = jI, Ui);
function hg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === KI ? jI : "$$typeof" in i ? EQ[i.$$typeof] : BQ;
  var n;
}
var xQ = Object.defineProperty, dQ = Object.getOwnPropertyNames, fg = Object.getOwnPropertySymbols, lQ = Object.getOwnPropertyDescriptor, uQ = Object.getPrototypeOf, pg = Object.prototype;
function _I(i, n, t) {
  if (typeof n != "string") {
    if (pg) {
      var e = uQ(n);
      e && e !== pg && _I(i, e, t);
    }
    var A = dQ(n);
    fg && (A = A.concat(fg(n)));
    for (var o = hg(i), r = hg(n), g = -1 * 2658 + -6485 + 9143; g < A.length; ++g) {
      var a = A[g];
      if (!(a in QQ || t && t[a] || r && a in r || o && a in o)) {
        var s = lQ(n, a);
        try {
          xQ(i, a, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function _t(i) {
  return typeof i == "function";
}
function ya(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function it(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function mg(i, n) {
  if (i.length === 0) return "";
  for (var t = i[0], e = -520 * -19 + 156 + -1 * 10035; e < i.length; e++) t += i[e];
  return t;
}
function qt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Wr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !qt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -6337 * 1 + 5789 * -1 + 12126; e < n.length; e++) i[e] = Wr(i[e], n[e]);
  else if (qt(n))
    for (var e in n) i[e] = Wr(i[e], n[e]);
  return i;
}
function Da(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var eA = {};
eA[1] = `Cannot create styled-component for component: %s.

`, eA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, eA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, eA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, eA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, eA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, eA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', eA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, eA[9] = "Missing document `<head>`\n\n", eA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, eA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, eA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", eA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, eA[14] = `ThemeProvider: "theme" prop is required.

`, eA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", eA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, eA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, eA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var hQ = Y.NODE_ENV !== "production" ? eA : {};
function fQ() {
  for (var i = [], n = 1015 * -3 + 660 + -45 * -53; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-9257 + -1 * 2723 + 11980], e = [], A = 343 + -7423 * 1 + 73 * 97, o = i.length; A < o; A += -4412 + 1 * 8486 + -4073 * 1) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Xt(i) {
  for (var n = [], t = 6043 * 1 + 4755 + -3599 * 3; t < arguments.length; t++) n[t - (-3 * -1071 + -4045 * -2 + 5651 * -2)] = arguments[t];
  return Y.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 8887 + 1 * 9397 + 9142 * -2 ? " Args: ".concat(n.join(", ")) : "")) : new Error(fQ.apply(void 0, Pt([hQ[i]], n, !1)).trim());
}
var pQ = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-1 * -5931 + 3207 + -1 * 8626), this.length = 1991 + 46 * -177 + 6663, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -12758 + 6379 * 2, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -177 * -48 + -194 * 1 + -8301) < 4357 * 2 + 1 * -3974 + 5 * -948) throw Xt(-8394 + -7 * -803 + 2789, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -1668 + 3 * 556;
    }
    for (var g = this.indexOfGroup(n + (5 * -127 + 7705 + -7069)), a = (r = 6160 + 1 * -9223 + -3 * -1021, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -6909 + -7 * -136 + 5957 * 1;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ma);
    return t;
  }, i;
}(), mQ = -14 * -148 + -7713 + 5642 << -1378 * 1 + -2699 * 1 + 4107, un = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), hn = 1075 * 1 + -2966 * 3 + 7824, zo = function(i) {
  if (un.has(i)) return un.get(i);
  for (; zn.has(hn); ) hn++;
  var n = hn++;
  if (Y.NODE_ENV !== "production" && ((-313 * 24 + 9521 + 287 * -7 | n) < 179 * -31 + -1232 + 1 * 6781 || n > mQ)) throw Xt(-11369 + 1 * 11385, "".concat(n));
  return un.set(i, n), zn.set(n, i), n;
}, yQ = function(i, n) {
  hn = n + (-7237 + 3 * -2354 + 14300), un.set(i, n), zn.set(n, i);
}, DQ = "style[".concat(Et, "][").concat(UI, '="').concat(fi, '"]'), wQ = new RegExp("^".concat(Et, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), bQ = function(i, n, t) {
  for (var e, A = t.split(","), o = 724 * -9 + 97 * -39 + 1 * 10299, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, kQ = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ma), A = [], o = 1095 + 1345 * -5 + -1126 * -5, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(wQ);
      if (a) {
        var s = 0 | parseInt(a[1], 10), c = a[-4091 * 1 + -5 * 931 + 8748];
        -8384 + -47 * -151 + -429 * -3 !== s && (yQ(c, s), bQ(i, c, a[-3536 + -1142 * -5 + -2171]), i.getTag().insertRules(s, A)), A.length = 1862 + -3860 * 2 + -202 * -29;
      } else A.push(g);
    }
  }
}, yg = function(i) {
  for (var n = document.querySelectorAll(DQ), t = -6229 + -5249 * -1 + -70 * -14, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(Et) !== JI && (kQ(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function SQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(Et, "]")));
    return a[a.length - (-6526 * -1 + 1 * -6677 + 1 * 152)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Et, JI), e.setAttribute(UI, fi);
  var r = SQ();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, GQ = function() {
  function i(n) {
    this.element = qI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 1 * 7145 + 2245 + -9390, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Xt(-3 * 2213 + -19 * -38 + 5934);
    }(this.element), this.length = -4 * -1637 + 4 * -781 + -3424;
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
}(), NQ = function() {
  function i(n) {
    this.element = qI(n), this.nodes = this.element.childNodes, this.length = 909 + -2705 * 1 + 2 * 898;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 1 * 9253 + -7158 + -2095) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), RQ = function() {
  function i(n) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -2705 * -3 + -9349 + 1234, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 852 * -2 + -5154 + 6859), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), Dg = Zn, FQ = { isServer: !Zn, useCSSOMInjection: !iQ }, VI = function() {
  function i(n, t, e) {
    n === void 0 && (n = jt), t === void 0 && (t = {});
    var A = this;
    this.options = TA(TA({}, FQ), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Zn && Dg && (Dg = !1, yg(this)), Da(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", s = function(I) {
          var E = function(Q) {
            return zn.get(Q);
          }(I);
          if (E === void 0) return "continue";
          var C = o.names.get(E), x = r.getGroup(I);
          if (C === void 0 || !C.size || 6553 + -6553 * 1 === x.length) return "continue";
          var d = "".concat(Et, ".g").concat(I, '[id="').concat(E, '"]'), l = "";
          C !== void 0 && C.forEach(function(Q) {
            Q.length > -4183 * -1 + -1277 + 2906 * -1 && (l += "".concat(Q, ","));
          }), a += "".concat(x).concat(d, '{content:"').concat(l, '"}').concat(ma);
        }, c = 1 * -6971 + 10 * 194 + 1 * 5031; c < g; c++) s(c);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return zo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Zn && yg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(TA(TA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -1314 + 135 * -39 + -731 * -9) + 1;
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new RQ(A) : e ? new GQ(A) : new NQ(A);
    }(this.options), new pQ(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (zo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(zo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(zo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), vQ = /&/g, MQ = /^\s*\/\/.*$/gm;
function ZI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ZI(t.children, n)), t;
  });
}
function zI(i) {
  var n, t, e, A = i === void 0 ? jt : i, o = A.options, r = o === void 0 ? jt : o, g = A.plugins, a = g === void 0 ? pi : g, s = function(E, C, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > -1 * -928 + -4759 + 3831 ? ".".concat(n) : E;
  }, c = a.slice();
  c.push(function(E) {
    E.type === di && E.value.includes("&") && (E.props[254 * -15 + 4693 * 2 + 41 * -136] = E.props[79 * -111 + 1 * 3299 + -1094 * -5].replace(vQ, t).replace(e, s));
  }), r.prefix && c.push(oQ), c.push(AQ);
  var I = function(E, C, x, d) {
    C === void 0 && (C = ""), x === void 0 && (x = ""), d === void 0 && (d = "&"), n = d, t = C, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(MQ, ""), Q = XB(x || C ? "".concat(x, " ").concat(C, " { ").concat(l, " }") : l);
    r.namespace && (Q = ZI(Q, r.namespace));
    var h = [];
    return Vn(Q, eQ(c.concat(tQ(function(m) {
      return h.push(m);
    })))), h;
  };
  return I.hash = a.length ? a.reduce(function(E, C) {
    return C.name || Xt(15), ot(E, C.name);
  }, YI).toString() : "", I;
}
var WQ = new VI(), Lr = zI(), wa = Qt.createContext({ shouldForwardProp: void 0, styleSheet: WQ, stylis: Lr });
wa.Consumer;
var LQ = Qt.createContext(void 0);
function Or() {
  return ae(wa);
}
function OQ(i) {
  var n = cA(i.stylisPlugins), t = n[-14 + -7 * -2], e = n[621 + -631 * -13 + -8823], A = Or().styleSheet, o = hA(function() {
    var c = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? c = i.sheet : i.target && (c = c.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (c = c.reconstructWithOptions(I)), c;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = hA(function() {
    var c = {};
    c.namespace = i.namespace, c.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = c, I.plugins = t, zI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  V(function() {
    JB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = hA(function() {
    var c = {};
    return c.shouldForwardProp = i.shouldForwardProp, c.styleSheet = o, c.stylis = r, c;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var s = {};
  return s.value = r, Qt.createElement(wa.Provider, a, Qt.createElement(LQ.Provider, s, i.children));
}
var wg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Lr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Da(this, function() {
      throw Xt(67 * -103 + 4889 * -1 + 11802, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Lr), this.name + n.hash;
  }, i;
}(), JQ = function(i) {
  return i >= "A" && i <= "Z";
};
function bg(i) {
  for (var n = "", t = -4 * 2311 + -4918 * 2 + -1590 * -12; t < i.length; t++) {
    var e = i[t];
    if (t === 1 && e === "-" && i[-5 * -494 + -3 * 1941 + 3353 * 1] === "-") return i;
    JQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var XI = function(i) {
  return i == null || i === !1 || i === "";
}, $I = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !XI(o) && (Array.isArray(o) && o.isCss || _t(o) ? e.push("".concat(bg(A), ":"), o, ";") : qt(o) ? e.push.apply(e, Pt(Pt(["".concat(A, " {")], $I(o), !1), ["}"], !1)) : e.push("".concat(bg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -3317 + 49 * 18 + 487 * 5 === t || n in nQ || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Bt(i, n, t, e) {
  if (XI(i)) return [];
  if (ya(i)) return [".".concat(i.styledComponentId)];
  if (_t(i)) {
    if (!_t(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return Y.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof wg || qt(A) || A === null || console.error("".concat(PI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Bt(A, n, t, e);
  }
  var o;
  return i instanceof wg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : qt(i) ? $I(i) : Array.isArray(i) ? Array.prototype.concat.apply(pi, i.map(function(r) {
    return Bt(r, n, t, e);
  })) : [i.toString()];
}
function UQ(i) {
  for (var n = 1781 * -5 + -8928 + 17833; n < i.length; n += -2 * 3245 + 3631 + 2860) {
    var t = i[n];
    if (_t(t) && !ya(t)) return !1;
  }
  return !0;
}
var YQ = TI(fi), TQ = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = Y.NODE_ENV === "production" && (e === void 0 || e.isStatic) && UQ(n), this.componentId = t, this.baseHash = ot(YQ, t), this.baseStyle = e, VI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = it(A, this.staticRulesId);
      else {
        var o = mg(Bt(this.rules, n, t, e)), r = Mr(ot(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = it(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = ot(this.baseHash, e.hash), s = "", c = 6674 + -64 * -101 + -13138; c < this.rules.length; c++) {
        var I = this.rules[c];
        if (typeof I == "string") s += I, Y.NODE_ENV !== "production" && (a = ot(a, I));
        else if (I) {
          var E = mg(Bt(I, n, t, e));
          a = ot(a, E + c), s += E;
        }
      }
      if (s) {
        var C = Mr(a >>> 0);
        t.hasNameForId(this.componentId, C) || t.insertRules(this.componentId, C, e(s, ".".concat(C), void 0, this.componentId)), A = it(A, C);
      }
    }
    return A;
  }, i;
}(), A0 = Qt.createContext(void 0);
A0.Consumer;
var Ti = {}, kg = /* @__PURE__ */ new Set();
function PQ(i, n, t) {
  var e = ya(i), A = i, o = !Yi(i), r = n.attrs, g = r === void 0 ? pi : r, a = n.componentId, s = a === void 0 ? function(y, G) {
    var S = typeof y != "string" ? "sc" : lg(y);
    Ti[S] = (Ti[S] || -2879 + 2879 * 1) + (-1567 * -5 + -725 * -2 + 2321 * -4);
    var U = "".concat(S, "-").concat(cQ(fi + S + Ti[S]));
    return G ? "".concat(G, "-").concat(U) : U;
  }(n.displayName, n.parentComponentId) : a, c = n.displayName, I = c === void 0 ? function(y) {
    return Yi(y) ? "styled.".concat(y) : "Styled(".concat(PI(y), ")");
  }(i) : c, E = n.displayName && n.componentId ? "".concat(lg(n.displayName), "-").concat(n.componentId) : n.componentId || s, C = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(y, G) {
        return d(y, G) && l(y, G);
      };
    } else x = d;
  }
  var Q = new TQ(t, E, e ? A.componentStyle : void 0);
  function h(y, G) {
    return function(S, U, Z) {
      var ge = S.attrs, _A = S.componentStyle, _e = S.defaultProps, rc = S.foldedComponentIds, Ga = S.styledComponentId, ac = S.target, gc = Qt.useContext(A0), sc = Or(), yi = S.shouldForwardProp || sc.shouldForwardProp;
      Y.NODE_ENV !== "production" && kn(Ga);
      var Na = aQ(U, gc, _e) || jt, de = function(To, eo, Po) {
        var ut = {};
        ut.className = void 0, ut.theme = Po;
        for (var bi, qe = TA(TA({}, eo), ut), ki = 41 * 131 + -13 * -543 + -10 * 1243; ki < To.length; ki += -11 * 542 + 67 * -5 + -3149 * -2) {
          var Ho = _t(bi = To[ki]) ? bi(qe) : bi;
          for (var Fe in Ho) qe[Fe] = Fe === "className" ? it(qe[Fe], Ho[Fe]) : Fe === "style" ? TA(TA({}, qe[Fe]), Ho[Fe]) : Ho[Fe];
        }
        return eo.className && (qe.className = it(qe.className, eo.className)), qe;
      }(ge, U, Na), $t = de.as || ac, Ao = {};
      for (var qA in de) de[qA] === void 0 || qA[-283 * -13 + -8463 + 26 * 184] === "$" || qA === "as" || qA === "theme" && de.theme === Na || (qA === "forwardedAs" ? Ao.as = de.forwardedAs : yi && !yi(qA, $t) || (Ao[qA] = de[qA], yi || Y.NODE_ENV !== "development" || MB(qA) || kg.has(qA) || !vr.has($t) || (kg.add(qA), console.warn('styled-components: it looks like an unknown prop "'.concat(qA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Di = function(To, eo) {
        var Po = Or(), ut = To.generateAndInjectStyles(eo, Po.styleSheet, Po.stylis);
        return Y.NODE_ENV !== "production" && kn(ut), ut;
      }(_A, de);
      Y.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(Di);
      var wi = it(rc, Ga);
      return Di && (wi += " " + Di), de.className && (wi += " " + de.className), Ao[Yi($t) && !vr.has($t) ? "class" : "className"] = wi, Z && (Ao.ref = Z), FA($t, Ao);
    }(m, y, G);
  }
  h.displayName = I;
  var m = Qt.forwardRef(h), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, m.attrs = C, m.componentStyle = Q, m.displayName = I, m.shouldForwardProp = x, m.foldedComponentIds = e ? it(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = E, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = e ? function(G) {
      for (var S = [], U = -1 * -1277 + -6271 * 1 + 3 * 1665; U < arguments.length; U++) S[U - 1] = arguments[U];
      for (var Z = 0, ge = S; Z < ge.length; Z++) Wr(G, ge[Z], !0);
      return G;
    }({}, A.defaultProps, y) : y;
  } }), Y.NODE_ENV !== "production" && (rQ(I, E), m.warnTooManyClasses = /* @__PURE__ */ function(y, G) {
    var S = {}, U = !1;
    return function(Z) {
      if (!U && (S[Z] = !0, Object.keys(S).length >= 7249 + 1435 * 5 + -1 * 14224)) {
        var ge = G ? ' with the id of "'.concat(G, '"') : "";
        console.warn("Over ".concat(-3140 + -903 * 5 + 1571 * 5, " classes were generated for component ").concat(y).concat(ge, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), U = !0, S = {};
      }
    };
  }(I, E)), Da(m, function() {
    return ".".concat(m.styledComponentId);
  }), o && _I(m, i, k), m;
}
function Sg(i, n) {
  for (var t = [i[319 * 26 + -7469 + -825]], e = 658 + -7 * 94, A = n.length; e < A; e += 1) t.push(n[e], i[e + (-2174 + 56 * -163 + -11303 * -1)]);
  return t;
}
var Gg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function HQ(i) {
  for (var n = [], t = -1329 * 2 + 2194 * 1 + 5 * 93; t < arguments.length; t++) n[t - (9334 * -1 + -1 * -1266 + 8069 * 1)] = arguments[t];
  if (_t(i) || qt(i)) return Gg(Bt(Sg(pi, Pt([i], n, !0))));
  var e = i;
  return 2656 * 3 + 8945 + 1301 * -13 === n.length && -5659 * 1 + 964 * 6 + 124 * -1 === e.length && typeof e[9323 + -619 * -5 + -12418] == "string" ? Bt(e) : Gg(Bt(Sg(e, n)));
}
function Jr(i, n, t) {
  if (t === void 0 && (t = jt), !n) throw Xt(-1 * -7314 + 1327 * 2 + -9967 * 1, n);
  var e = function(A) {
    for (var o = [], r = 7 * -1313 + -9091 * -1 + 101; r < arguments.length; r++) o[r - 1] = arguments[r];
    return i(n, t, HQ.apply(void 0, Pt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Jr(i, n, TA(TA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Jr(i, n, TA(TA({}, t), A));
  }, e;
}
var e0 = function(i) {
  return Jr(PQ, i);
}, Yo = e0;
vr.forEach(function(i) {
  Yo[i] = e0(i);
});
Y.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xo = "__sc-".concat(Et, "__");
Y.NODE_ENV !== "production" && Y.NODE_ENV !== "test" && typeof window < "u" && (window[Xo] || (window[Xo] = 0), window[Xo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xo] += -6738 + -1 * -6941 + -202);
var fe;
function t0(i) {
  const n = {};
  return n.lang = fe == null ? void 0 : fe.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = fe == null ? void 0 : fe.abortEarly, n.abortPipeEarly = fe == null ? void 0 : fe["abortPipeEarly"], n;
}
var Pi;
function KQ(i) {
  return Pi == null ? void 0 : Pi.get(i);
}
var Hi;
function jQ(i) {
  return Hi == null ? void 0 : Hi.get(i);
}
var Ki;
function _Q(i, n) {
  var t;
  return (t = Ki == null ? void 0 : Ki.get(i)) == null ? void 0 : t.get(n);
}
function qQ(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function Ur(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, g = (A == null ? void 0 : A.received) ?? qQ(o), a = {};
  a.kind = i.kind, a.type = i.type, a.input = o, a.expected = r, a.received = g, a.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + g, a.requirement = i.requirement, a.path = A == null ? void 0 : A.path, a.issues = A == null ? void 0 : A.issues, a.lang = e.lang, a.abortEarly = e.abortEarly, a.abortPipeEarly = e.abortPipeEarly;
  const s = a, c = i.kind === "schema", I = (A == null ? void 0 : A.message) ?? i.message ?? _Q(i.reference, s.lang) ?? (c ? jQ(s.lang) : null) ?? e.message ?? KQ(s.lang);
  I !== void 0 && (s.message = typeof I == "function" ? I(s) : I), c && (t.typed = !1), t.issues ? t.issues.push(s) : t.issues = [s];
}
function o0(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, t0());
  } };
}
var VQ = class extends Error {
  constructor(i) {
    super(i[0].message), this.name = "ValiError", this.issues = i;
  }
};
function ZQ(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
function zQ(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
function Yr(i) {
  return { kind: "schema", type: "function", reference: Yr, expects: "Function", async: !1, message: i, get "~standard"() {
    return o0(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : Ur(this, "type", n, t), n;
  } };
}
function n0(i, n) {
  return { kind: "schema", type: "object", reference: n0, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return o0(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (A && typeof A == "object") {
      t.typed = !0, t.value = {};
      for (const r in this.entries) {
        const g = this.entries[r];
        if (r in A || (g.type === "exact_optional" || g.type === "optional" || g.type === "nullish") && g.default !== void 0) {
          const a = r in A ? A[r] : zQ(g), s = {};
          s.value = a;
          const c = g["~run"](s, e);
          if (c.issues) {
            const I = {};
            I.type = "object", I.origin = "value", I.input = A, I.key = r, I.value = a;
            const E = I;
            for (const C of c.issues)
              C.path ? C.path.unshift(E) : C.path = [E], (o = t.issues) == null || o.push(C);
            if (!t.issues && (t.issues = c.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !c.typed && (t.typed = !1), t.value[r] = c.value;
        } else if (g.fallback !== void 0) t.value[r] = ZQ(g);
        else if (g.type !== "exact_optional" && g.type !== "optional" && g.type !== "nullish") {
          const a = {};
          if (a.input = void 0, a.expected = '"' + r + '"', a.path = [{ type: "object", origin: "key", input: A, key: r, value: A[r] }], Ur(this, "key", t, e, a), e.abortEarly) break;
        }
      }
    } else Ur(this, "type", t, e);
    return t;
  } };
}
function XQ(i, n, t) {
  const e = {};
  e.value = n;
  const A = i["~run"](e, t0(t));
  if (A.issues) throw new VQ(A.issues);
  return A.value;
}
function $Q(i, n) {
  try {
    XQ(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: NC(i.assetsDirectoryPath)
  };
}
function AE({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = hA(() => $Q(n, t), [n, t]);
  return /* @__PURE__ */ b(ha.Provider, { value: e, children: i });
}
function eE({
  children: i,
  configuration: n
}) {
  const t = n0({
    onComplete: Yr("On complete must be a function"),
    onError: Yr("On error must be a function")
  });
  return /* @__PURE__ */ b(AE, { configuration: n, validationSchema: t, children: i });
}
const Xn = Re(void 0);
Xn.displayName = "ControllerContext";
function i0() {
  const i = ae(
    Xn
  );
  if (i === void 0)
    throw new Error(`${Xn.displayName} must be used within a ControllerProvider`);
  return i;
}
function tE({ children: i, controller: n }) {
  const t = hA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ b(Xn.Provider, { value: t, children: i });
}
const fn = {};
fn.ON_COMPLETE = "smile-auto-capture:on-complete", fn.TIMED_CAPTURE_EXECUTED = "smile-auto-capture:timed-capture-executed", fn.DEV = "smile-auto-capture:dev";
const $n = fn, oE = { ...$n, ...Ne }, r0 = oE;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const a0 = Symbol("Comlink.proxy"), nE = Symbol("Comlink.endpoint"), g0 = Symbol("Comlink.releaseProxy"), ji = Symbol("Comlink.finalizer"), pn = Symbol("Comlink.thrown"), s0 = (i) => typeof i == "object" && i !== null || typeof i == "function", iE = {
  canHandle: (i) => s0(i) && i[a0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return c0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), B0(i);
  }
}, rE = {
  canHandle: (i) => s0(i) && pn in i,
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
}, I0 = /* @__PURE__ */ new Map([
  ["proxy", iE],
  ["throw", rE]
]);
function aE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function c0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!aE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(nt);
    let s;
    try {
      const c = g.slice(0, -1).reduce((E, C) => E[C], i), I = g.reduce((E, C) => E[C], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          c[g.slice(-1)[0]] = nt(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const E = new I(...a);
            s = BE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: C } = new MessageChannel();
            c0(i, C), s = CE(E, [E]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      s = { value: c, [pn]: 0 };
    }
    Promise.resolve(s).catch((c) => ({ value: c, [pn]: 0 })).then((c) => {
      const [I, E] = ti(c);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), C0(n), ji in i && typeof i[ji] == "function" && i[ji]());
    }).catch((c) => {
      const [I, E] = ti({
        value: new TypeError("Unserializable return value"),
        [pn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E);
    });
  }), n.start && n.start();
}
function gE(i) {
  return i.constructor.name === "MessagePort";
}
function C0(i) {
  gE(i) && i.close();
}
function B0(i, n) {
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
  }), Tr(i, t, [], n);
}
function $o(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Q0(i) {
  return Gt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    C0(i);
  });
}
const Ai = /* @__PURE__ */ new WeakMap(), ei = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Ai.get(i) || 0) - 1;
  Ai.set(i, n), n === 0 && Q0(i);
});
function sE(i, n) {
  const t = (Ai.get(n) || 0) + 1;
  Ai.set(n, t), ei && ei.register(i, n, i);
}
function IE(i) {
  ei && ei.unregister(i);
}
function Tr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if ($o(A), g === g0)
        return () => {
          IE(o), Q0(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = Gt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(nt);
        return a.then.bind(a);
      }
      return Tr(i, n, [...t, g]);
    },
    set(r, g, a) {
      $o(A);
      const [s, c] = ti(a);
      return Gt(i, n, {
        type: "SET",
        path: [...t, g].map((I) => I.toString()),
        value: s
      }, c).then(nt);
    },
    apply(r, g, a) {
      $o(A);
      const s = t[t.length - 1];
      if (s === nE)
        return Gt(i, n, {
          type: "ENDPOINT"
        }).then(nt);
      if (s === "bind")
        return Tr(i, n, t.slice(0, -1));
      const [c, I] = Ng(a);
      return Gt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: c
      }, I).then(nt);
    },
    construct(r, g) {
      $o(A);
      const [a, s] = Ng(g);
      return Gt(i, n, {
        type: "CONSTRUCT",
        path: t.map((c) => c.toString()),
        argumentList: a
      }, s).then(nt);
    }
  });
  return sE(o, i), o;
}
function cE(i) {
  return Array.prototype.concat.apply([], i);
}
function Ng(i) {
  const n = i.map(ti);
  return [n.map((t) => t[0]), cE(n.map((t) => t[1]))];
}
const E0 = /* @__PURE__ */ new WeakMap();
function CE(i, n) {
  return E0.set(i, n), i;
}
function BE(i) {
  return Object.assign(i, { [a0]: !0 });
}
function ti(i) {
  for (const [n, t] of I0)
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
    E0.get(i) || []
  ];
}
function nt(i) {
  switch (i.type) {
    case "HANDLER":
      return I0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Gt(i, n, t, e) {
  return new Promise((A) => {
    const o = QE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function QE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function x0() {
  return NI();
}
const ba = Re(void 0);
ba.displayName = "CommonThresholdsContext";
function EE() {
  const i = ae(ba);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function d0() {
  return EE();
}
const Pr = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
function xE(i) {
  const n = {};
  n.instruction = i;
  const t = n;
  Pr(Cr.REQUEST_CAPTURE, t);
}
class dE {
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
    lo() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new w("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    var A, o, r;
    const t = (A = this.currentDetection) == null ? void 0 : A.name, e = (o = this.detections) == null ? void 0 : o[n];
    if (!e) throw new w("Detection " + n + " not found");
    if (!((r = this.allowedDetectionTransitions[t]) != null && r.includes(n))) throw new w("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new w("Detection not initialized");
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new w("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Ea.warn(`
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
    return "" + t.replace(oI, "") + n;
  }
}
const mi = 1 * -7927 + 3794 + -1 * -4133 + 0.5, l0 = {};
l0.min = 0.4;
const u0 = {};
u0.min = 0.25;
const Hr = {};
Hr.min = 0.2, Hr.max = 0.85;
const h0 = {};
h0.max = 30;
const f0 = {};
f0.min = 0.05;
const Kr = {};
Kr.min = 0.16, Kr.max = 0.2;
const p0 = {};
p0.min = 0.3;
const m0 = {};
m0.max = mi;
const jr = {};
jr.confidence = p0, jr.status = m0;
const Oe = {};
Oe.confidence = l0, Oe.sharpness = u0, Oe.brightness = Hr, Oe.devicePitchAngle = h0, Oe.edgeDistanceToImageShorterSideRatio = f0, Oe.size = Kr, Oe.mouth = jr;
const y0 = {};
y0.min = 0.4;
const D0 = {};
D0.min = 0.25;
const _r = {};
_r.min = 0.2, _r.max = 0.85;
const w0 = {};
w0.max = 30;
const b0 = {};
b0.min = 0.05;
const qr = {};
qr.min = 0.16, qr.max = 0.2;
const k0 = {};
k0.min = 0.3;
const S0 = {};
S0.max = mi;
const Vr = {};
Vr.confidence = k0, Vr.status = S0;
const Je = {};
Je.confidence = y0, Je.sharpness = D0, Je.brightness = _r, Je.devicePitchAngle = w0, Je.edgeDistanceToImageShorterSideRatio = b0, Je.size = qr, Je.mouth = Vr;
const Zr = {};
Zr.MOBILE = Oe, Zr.DESKTOP = Je;
const lE = Zr, G0 = 436 * 11 + 6627 + 1 * -11423 + 0.4, N0 = {};
N0.min = 0.4;
const zr = {};
zr.min = 0.16, zr.max = 0.2;
const R0 = {};
R0.min = 0.3;
const F0 = {};
F0.min = G0;
const Xr = {};
Xr.confidence = R0, Xr.status = F0;
const mn = {};
mn.confidence = N0, mn.size = zr, mn.mouth = Xr;
const v0 = {};
v0.min = 0.4;
const $r = {};
$r.min = 0.16, $r.max = 0.2;
const M0 = {};
M0.min = 0.3;
const W0 = {};
W0.min = G0;
const Aa = {};
Aa.confidence = M0, Aa.status = W0;
const yn = {};
yn.confidence = v0, yn.size = $r, yn.mouth = Aa;
const ea = {};
ea.MOBILE = mn, ea.DESKTOP = yn;
const Rg = ea, oi = -3 * 1321 + -67 + 6030, uE = 1 * 1786 + -341 * 8 + 10942, Fg = -2342 * 12 + -18049 + 61153 * 1, Dn = {};
Dn.timeout = 4e3, Dn.threshold = 0.7, Dn.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const _i = Dn, L0 = "SAM v1.50.5 for idcards";
class O0 extends dE {
  constructor(t, e, A, o, r, g, a, s, c, I, E, C, x) {
    super(t, L0, e, g, a, E, C, x);
    p(this, "detector");
    p(this, "allowedDetectionTransitions");
    p(this, "medianScore");
    p(this, "timedCapture");
    p(this, "longCapture");
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "timedCaptureExecutedEventListener");
    p(this, "dispatcher");
    p(this, "analytics");
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, this.dispatcher = g, this.analytics = E;
    const d = { [J.NEUTRAL]: [J.SMILE], [J.SMILE]: [J.SMILE_MANUAL], [J.SMILE_MANUAL]: [] };
    this.allowedDetectionTransitions = d, this.medianScore = s, this.timedCapture = c, this.longCapture = I;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getAnalytics() {
    return this.analytics;
  }
  async init() {
    await super.init(), this.initTimedCaptureExecutedEventListener();
    const t = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: oi, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: J.NEUTRAL }), e = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: oi, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: J.SMILE }), A = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: J.SMILE_MANUAL }), o = { [J.NEUTRAL]: t, [J.SMILE]: e, [J.SMILE_MANUAL]: A };
    this.setDetections(o), this.setCurrentDetection(this.detections[J.NEUTRAL]), this.runDetectionLoop(), this.longCapture.start(this.getAnalytics());
  }
  reset() {
    var t;
    super.reset(), this.timedCapture.clear(), this.longCapture.clear(), (t = this.medianScore) == null || t.reset(), this.removeTimedCaptureExecutedEventListener();
  }
  initTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener = () => {
      this.onTimedCaptureExecuted();
    }, document.addEventListener($n.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  removeTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener && document.removeEventListener($n.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  onTimedCaptureExecuted() {
    var t;
    (t = this.currentDetection) == null || t.stop(), this.transitionToDetection(J.SMILE_MANUAL), this.runDetectionLoop(), xE(tn.FIRST_FRAME);
  }
}
class hE {
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
    if (!this.assetsDirectoryPath) throw new w("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.protobuf) throw new w("Protobuf is required");
    if (!this.dispatcher) throw new w("Dispatcher is required");
    if (!this.detector) throw new w("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class fE extends hE {
  constructor() {
    super(...arguments);
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "medianScore");
    p(this, "timedCapture");
    p(this, "longCapture");
  }
  setDetectionFactory(t) {
    return this.detectionFactory = t, this;
  }
  setPhaseThresholds(t) {
    return this.phaseThresholds = t, this;
  }
  setMedianScore(t) {
    return this.medianScore = t, this;
  }
  setTimedCapture(t) {
    return this.timedCapture = t, this;
  }
  setLongCapture(t) {
    return this.longCapture = t, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new w("DetectionFactory is required");
    if (!this.medianScore) throw new w("MedianScore is required");
    if (!this.timedCapture) throw new w("TimedCapture is required");
    if (!this.longCapture) throw new w("LongCapture is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this;
  }
  build() {
    return this.validateDependencies(), new O0(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.medianScore, this.timedCapture, this.longCapture, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const pE = "/dot-assets/smile/dot-BNqXQYOk.js", Ci = class Ci {
  constructor() {
    p(this, "lastDetails");
    p(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 7890 + 1009 * -2 + -5872 * 1;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ci()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Pr(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Pr(n, t);
  }
};
p(Ci, "_instance");
let xt = Ci;
const mE = () => "prod".toLowerCase() === "dev";
class yE extends xt {
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
  dispatchInstructionChangedEvent(t, e = BC) {
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
    if (!mE() || !t) return;
    const e = {};
    e.candidateSelectionImages = t, this.dispatchCustomEventOnChange(this.events.DEV, e);
  }
}
class DE extends yE {
  dispatchTimedCaptureExecuted() {
    this.dispatchCustomEvent(r0.TIMED_CAPTURE_EXECUTED, {});
  }
}
var Te;
class ni extends Array {
  constructor(t) {
    super();
    O(this, Te);
    F(this, Te, t);
  }
  get size() {
    return D(this, Te);
  }
  pushFixed(...t) {
    if (t.length > D(this, Te)) {
      const e = t.slice(-D(this, Te));
      this.push(...e);
      return;
    }
    this.length === D(this, Te) && this.splice(8444 + -1237 * 1 + -7207, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-8267 + -909 * 2 + 10085);
  }
}
Te = new WeakMap();
class wE {
  constructor() {
    p(this, "wasTriggered", !1);
    p(this, "timeoutId");
    p(this, "localStore");
    this.localStore = this.createLocalStore();
  }
  createLocalStore() {
    return { images: { fps: new ni(-2 * -2654 + -9052 + 629 * 6), mouthStatus: new ni(1 * 9372 + 47 * -191 + -390) }, imageResolution: void 0 };
  }
  addDetectionToStorage(n) {
    this.localStore.images.fps.push(n.detectionDetails.fps), this.localStore.images.mouthStatus.push(n.detectionDetails.processedImage.detection.mouth.status);
    const t = {};
    t.width = n.image.width, t.height = n.image.height, this.localStore.imageResolution = t;
  }
  start(n, t = Fg) {
    this.clear(), this.timeoutId = window.setTimeout(() => {
      this.wasTriggered = !0, this.handleLongCapture(n);
    }, t);
  }
  clear() {
    this.timeoutId !== void 0 && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
  }
  handleLongCapture(n) {
    if (this.wasTriggered) return;
    const t = co(this.localStore.images.fps), e = co(this.localStore.images.mouthStatus);
    if (this.localStore) {
      const A = {};
      A.durationMs = Fg, A.averageFps = t, A.imageResolution = this.localStore.imageResolution, A.averageExpressionScore = e, n == null || n.trackLongCapture(A);
    }
  }
}
class bE {
  constructor() {
    p(this, "isCollecting", !0);
    p(this, "mouthStatuses", []);
    p(this, "medianScore");
  }
  collectScore(n) {
    if (!this.isCollecting || !n.detectionDetails.processedImage.isInCandidateSelection) return;
    const t = n.detectionDetails.processedImage.detection.mouth.status;
    t < mi && this.mouthStatuses.push(t);
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
  calculateMedian(n) {
    const t = n.sort((o, r) => o - r), e = Math.floor(t.length / (-2789 * -2 + -4489 + -1087));
    return t.length % (-5777 * 1 + -8 * 1213 + 1191 * 13) === -1 * -4723 + 2 * 1486 + 45 * -171 ? (t[e - (-4 * 283 + 1 * -4507 + -94 * -60)] + t[e]) / (282 * -16 + -1917 * 3 + 10265) : t[e];
  }
}
const kE = -3980 + -56 * 65 + 9620;
class vg {
  constructor(n) {
    p(this, "duration");
    p(this, "candidateSelectionTime", -191 * 29 + -4118 + 111 * 87);
    p(this, "candidateSelectionImages", []);
    this.duration = n ?? kE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -7392 + -2 * -354 + 6684;
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
    this.candidateSelectionTime = -1 * -9829 + 1 * -6843 + -2986, this.candidateSelectionImages = [];
  }
}
function ii(i) {
  const { height: n, width: t } = xC(i), e = (i.width - t) / (-1136 + -1 * 789 + 1927 * 1), A = (i.height - n) / (-4 * -2197 + -3234 + -5552), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function J0(i, n, t) {
  const { height: e, width: A } = t, o = xi(i.width, i.height), r = A - o * n * (-6089 * -1 + -27 * 367 + -637 * -6), g = e - o * n * (11 * 563 + -4689 * -1 + -10880), a = (i.width - r) / (-2164 + -3 * -722), s = (i.height - g) / (12461 + 1 * -12459), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = g, c;
}
function mt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const U0 = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = hC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = g, s.left = a, nI(s);
}, Y0 = (i, n, t = bC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), ri = async (i) => Y0(i, 5564 + -119 * 46), SE = async (i) => Y0(i, -1 * 6185 + 1 * -1078 + 7363, "image/png"), T0 = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 835 * -8 + 325 + 205 * 31, 1223 + -5 * -764 + -1 * 5043, t.width, t.height), t;
}, P0 = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(1617 + -7237 * 1 + 5620, 1583 * 5 + -47 + -7868, i.width, i.height);
  return t;
};
async function GE(i, n) {
  const t = T0(i, n);
  return SE(t);
}
const H0 = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, qi = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, H0(i, a, t);
}, Eo = (i, n, t, e = 0) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 1 * 3029 + -6023 + 3001 * 1, 9341 + -547 * 11 + 1 * -3317), A.beginPath());
};
function NE(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, H0(i, o, "rgba(255, 0, 0, 0.3)", !0), Eo(i, e, "lime");
}
function RE(i, n, t) {
  const e = U0(n, t);
  Object.values(e).map((A) => Eo(i, A, "orange"));
}
class K0 extends w {
  constructor(t) {
    super(t.message);
    p(this, "cause");
    this.name = "ProxyError", this.cause = t, this.logError(t);
  }
  logError(t) {
  }
}
function ai() {
  const i = ["AColBgHGWPBcOaZcRqmyeq", "EmoczeZcNq", "imkcWQSG", "W7rPW7W", "W6NdQx5hWPe", "FSoSWPK0F8ocWRPiWOBdSSkkWQq", "j8oYrSkSWRRdLh3dQCkXW4L7oW", "WQ58WQNcN3K", "WRRcV8oqWRGR", "hXRdO8oBWOhcR8kvaWy", "dsdcKmoXW6D8mN80kmotWQC", "W7ZdTfK", "ECoOWP1Oj8kTWQXKWRO", "WP7dPSoJvLVcImkaW6NcOq4hWRm", "W4Hih0NcGXRcSCoAjmo6BHS", "W5VdPWpcNHddN8ovW5WAW7fV", "F2xcRCoJqb9qWOnf", "oSoVW4NcGZ7cJc9qmtZdVG", "W4udzg4", "WQdcNhRdUw3cO8kgW78", "W4inFq", "oCkxosVdNuDDqalcQwi", "abBdPYy/W4ioDmkaW5xcSG", "jCo0qSkSW6xcMKddJmklW4e", "WRlcI8kzW5ZcLmk8W4bwWQNdMG5B", "k0VcUr/cKdlcMCohWRBdH8krWPe", "W5VcO0RcNmom", "WQZcTXTDWO5pWPJcVSoJ", "WQRcUmolWRWZ", "k0RdUN3dO0xcN8ou"];
  return ai = function() {
    return i;
  }, ai();
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return wA(c - 342, a);
  }
  const e = i();
  function A(g, a, s, c, I) {
    return wA(g - -218, a);
  }
  function o(g, a, s, c, I) {
    return wA(c - -585, s);
  }
  function r(g, a, s, c, I) {
    return wA(g - 227, I);
  }
  for (; ; )
    try {
      if (-parseInt(A(210, "E@s8", 216, 200, 200)) / 1 + parseInt(A(216, "jMe@", 202, 227, 222)) / 2 * (parseInt(A(212, "GVQ*", 213, 221, 222)) / 3) + -parseInt(o(-131, -133, "GVQ*", -142, -139)) / 4 * (-parseInt(t(766, "xnQ*", 775, 768, 760)) / 5) + parseInt(t(809, "mFt^", 786, 796, 797)) / 6 * (parseInt(r(680, 678, 681, 689, "R0rJ")) / 7) + -parseInt(o(-130, -148, "urD0", -134, -120)) / 8 + -parseInt(A(213, "ORTF", 200, 219, 203)) / 9 + -parseInt(t(784, "cZq7", 774, 789, 799)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ai, 102249 * -1 + 53 * -491 + -1 * -276657);
function wA(i, n) {
  const t = ai();
  return wA = function(e, A) {
    e = e - (-3 * -2776 + 4829 + -12732 * 1);
    let o = t[e];
    if (wA.rzmdgT === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      wA.wyHuTE = c, i = arguments, wA.rzmdgT = !0;
    }
    const g = t[3446 * -1 + 1 * -877 + -1 * -4323], a = e + g, s = i[a];
    return s ? o = s : (wA.LpHXJP === void 0 && (wA.LpHXJP = !0), o = wA.wyHuTE(o, A), i[a] = o), o;
  }, wA(i, n);
}
async function FE(i) {
  const n = await window[A(1310, "SuY3", 1331, 1317) + "o"][o(1134, 1128, 1127, 1125, "SuY3") + "e"][t(452, 456, 465, 464, "k8rw") + "t"](o(1133, 1135, 1141, 1121, "x#tc"), i);
  function t(r, g, a, s, c) {
    return wA(a - 32, c);
  }
  function e(r, g, a, s, c) {
    return wA(r - 403, a);
  }
  function A(r, g, a, s, c) {
    return wA(s - 882, g);
  }
  function o(r, g, a, s, c) {
    return wA(r - 689, c);
  }
  return Array[o(1128, 1135, 1115, 1133, "%qlm")](new Uint8Array(n))[A(1297, "[&ia", 1311, 1309)]((r) => r[t(470, 465, 473, 486, "jMe@") + t(476, 459, 472, 459, "ipsG")](8695 * 1 + 59 * -100 + -2779)[A(1325, "E@s8", 1322, 1320) + o(1137, 1145, 1122, 1149, "jMe@")](-427 * -8 + 1118 * 3 + 144 * -47, "0"))[e(828, 823, "[&ia")]("");
}
class vE {
  constructor(n) {
    p(this, "detectionRecord");
    p(this, "imagesWithTimestampForDuplicateDetection");
    p(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new ni(yC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / kC, A = e / (3 * -1167 + 7823 * -1 + 11326), o = n.length / (1 * -1853 + -1 * 7723 + 2 * 4789), r = n.slice(o - A, o + A), g = await FE(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: P0(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new K0(A) : w.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = nI(n), r = {};
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
class Vi extends vE {
  constructor(t, e) {
    super(e);
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = ii(t), A = T0(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detect(A.data, A.resolution, o);
    r = this.transformDetectionCoordinatesRelativeToFullFrameImage(r, ii(t));
    const g = {};
    return g.detectedObject = r, g.image = t, g.imageData = A.data, g.timestamp = e, this.processDetectedObject(g);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(t, e) {
    return { ...t, leftEye: { ...t.leftEye, center: mt(t.leftEye.center, e) }, rightEye: { ...t.rightEye, center: mt(t.rightEye.center, e) }, mouth: { ...t.mouth, center: mt(t.mouth.center, e) }, topLeft: mt(t.topLeft, e), bottomRight: mt(t.bottomRight, e), faceCenter: mt(t.faceCenter, e) };
  }
}
class ME {
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
var bo, Pe, Lt;
class WE extends Array {
  constructor(t) {
    super();
    O(this, bo, 9697 + 9697 * -1);
    O(this, Pe, []);
    O(this, Lt, !1);
    F(this, bo, t);
  }
  clearAfterTimeout() {
    if (D(this, Pe).length === 0) return;
    const t = Date.now(), e = D(this, Pe).findLastIndex((A) => t - A > D(this, bo));
    e !== -1 && (F(this, Lt, !0), this.splice(0, e + (51 * 101 + -35 * 35 + -3925)), D(this, Pe).splice(4 * -2435 + -1687 * 2 + 13114, e + 1));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), D(this, Pe).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return D(this, Lt);
  }
  clear() {
    this.splice(-6786 + 1 * -7411 + 14197), D(this, Pe).splice(652 * 10 + -941 + -5579), F(this, Lt, !1);
  }
}
bo = new WeakMap(), Pe = new WeakMap(), Lt = new WeakMap();
class j0 {
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
class LE extends j0 {
  constructor(t) {
    super(t);
    p(this, "controller");
    this.controller = t;
  }
  onCapture(t) {
    super.onCapture(t), this.controller.medianScore.stopCollectingAndCalculateMedian(), this.controller.transitionToDetection(J.SMILE), this.controller.timedCapture.start(), this.controller.longCapture.clear(), this.controller.runDetectionLoop();
  }
  onDetection(t) {
    super.onDetection(t), this.controller.medianScore.collectScore(t), this.controller.longCapture.addDetectionToStorage(t);
  }
}
class _0 {
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
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new ni(-4367 + 264 * 2 + 53 * 73), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof K0)) throw n;
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
    const e = { ...n, avgFps: Rt(co(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new w("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Rt(co(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = P0(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await GE(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const s = a, c = {};
    return c.croppedImage = g, c.topLeftCorner = s, c;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Rt((4242 * -1 + -4229 * -2 + -3216) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[-9557 + -94 * 74 + 49 * 337], t), s = this.collectAndEscalate(a), c = {};
    return c.detection = t.detection, c.instructionCode = a, c.invalidValidators = g, c.isInCandidateSelection = !1, c.isEscalated = s, { processedImage: c, detectionTime: e, fps: A, avgFps: Rt(co(this.fpsOfAllImages)), resolution: r };
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
    await dr(Math.max(tg.max - n, tg.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class OE extends _0 {
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
      throw e instanceof w ? e : w.fromError(e);
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
    else throw new w("Something went wrong during capturing an image");
  }
  getInstructionCode(t, e) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && (e != null && e.isValid) ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && (e != null && e.isValid) ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class q0 {
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
    if (!this.name) throw new w("Name is required");
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.callbacks) throw new w("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new w("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new w("FallbackInstruction is required");
  }
}
class V0 extends q0 {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new w("instructionCodeMap is required");
    if (!this.candidateSelection) throw new w("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new OE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class JE extends V0 {
}
var Ot, gt, st;
class Z0 {
  constructor(n) {
    O(this, Ot);
    O(this, gt);
    O(this, st);
    F(this, Ot, n), F(this, gt, /* @__PURE__ */ new Map());
  }
  validate() {
    D(this, Ot).forEach((n) => {
      D(this, gt).set(n.name, n.evaluate());
    }), F(this, st, void 0);
  }
  isValid() {
    return D(this, st) === void 0 && F(this, st, Array.from(D(this, gt).values()).every((n) => n)), D(this, st);
  }
  get result() {
    return D(this, gt);
  }
  get validators() {
    return D(this, Ot);
  }
}
Ot = new WeakMap(), gt = new WeakMap(), st = new WeakMap();
class z0 {
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
var ko, It;
class xe {
  constructor(n, t) {
    O(this, ko);
    O(this, It);
    F(this, ko, n), F(this, It, t);
  }
  get threshold() {
    return D(this, It);
  }
  get name() {
    return D(this, ko);
  }
  isValueBelowThreshold(n) {
    return n < D(this, It);
  }
  isValueAboveThreshold(n) {
    return n > D(this, It);
  }
}
ko = new WeakMap(), It = new WeakMap();
const UE = "isNotDim";
var So;
class YE extends xe {
  constructor(t, e) {
    super(UE, t);
    O(this, So);
    F(this, So, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, So));
  }
}
So = new WeakMap();
const TE = "isNotSmall";
var Go;
class X0 extends xe {
  constructor(t, e) {
    super(TE, t);
    O(this, Go);
    F(this, Go, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Go));
  }
}
Go = new WeakMap();
const PE = "isNotBright";
var No;
class HE extends xe {
  constructor(t, e) {
    super(PE, t);
    O(this, No);
    F(this, No, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, No));
  }
}
No = new WeakMap();
const KE = "isPresent";
var Ro;
class $0 extends xe {
  constructor(t, e) {
    super(KE, t);
    O(this, Ro);
    F(this, Ro, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Ro));
  }
}
Ro = new WeakMap();
const jE = "isSharp";
var Fo;
class _E extends xe {
  constructor(t, e) {
    super(jE, t);
    O(this, Fo);
    F(this, Fo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Fo));
  }
}
Fo = new WeakMap();
const qE = "isMouthPresent";
var vo;
class Ac extends xe {
  constructor(t, e) {
    super(qE, t);
    O(this, vo);
    F(this, vo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, vo));
  }
}
vo = new WeakMap();
const VE = "isMouthStatusNotTooHigh";
var Mo;
class ZE extends xe {
  constructor(t, e) {
    super(VE, t);
    O(this, Mo);
    F(this, Mo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Mo));
  }
}
Mo = new WeakMap();
const zE = "isNotLarge";
var Wo;
class ec extends xe {
  constructor(t, e) {
    super(zE, t);
    O(this, Wo);
    F(this, Wo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Wo));
  }
}
Wo = new WeakMap();
const XE = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, $E = (i, n) => Object.values(i).every((t) => XE(t, n)), Ax = "isNotOutOfBounds";
var Lo, ct;
class ex extends xe {
  constructor(t, e, A) {
    super(Ax, t);
    O(this, Lo);
    O(this, ct);
    F(this, Lo, e), F(this, ct, A);
  }
  evaluate() {
    const t = J0(D(this, ct), this.threshold, ii(D(this, ct))), e = U0(D(this, Lo), D(this, ct));
    return $E(e, t);
  }
}
Lo = new WeakMap(), ct = new WeakMap();
class tx extends z0 {
  constructor(n) {
    super("NeutralValidationService", n);
  }
  validateDetectedObject(n, t) {
    const e = this.getThresholds(), A = new Z0([new $0(e.confidence.min, n.confidence), new X0(e.size.min, n.faceSize), new ec(e.size.max, n.faceSize), new _E(e.sharpness.min, n.sharpness), new YE(e.brightness.min, n.brightness), new HE(e.brightness.max, n.brightness), new ex(e.edgeDistanceToImageShorterSideRatio.min, n, t), new Ac(e.mouth.confidence.min, n.mouth.confidence), new ZE(e.mouth.status.max, n.mouth.status)]);
    return A.validate(), A;
  }
}
class tc extends j0 {
  constructor(t) {
    super(t);
    p(this, "controller");
    this.controller = t;
  }
  async onCapture(t) {
    var A, o, r;
    super.onCapture(t), (A = this.controller.getTransactionCounting()) == null || A.trackTransaction(), this.controller.timedCapture.clear();
    const e = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: (o = this.controller.cameraService.videoRecorder) == null ? void 0 : o.getRecording() });
    this.dispatchOnCompleteEvent(e), (r = this.controller.getAnalytics()) == null || r.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  async dispatchOnCompleteEvent(t) {
    const e = this.controller.getOnCaptureData(), A = e.get(J.NEUTRAL), o = e.get(J.SMILE) ?? e.get(J.SMILE_MANUAL);
    if (!A || !o) throw new w("Incomplete onCapture data for smile liveness");
    const { detectedObject: r, resultImage: g } = A, { detectedObject: a, resultImage: s } = o, c = {};
    c.width = g.width, c.height = g.height;
    const I = c, E = await ri(g), C = await ri(s), x = {};
    x.detection = r, x.imageResolution = I;
    const d = {};
    d.data = x, d.image = E;
    const l = d, Q = {};
    Q.detection = a, Q.imageResolution = I;
    const h = {};
    h.data = Q, h.image = C;
    const m = h, k = {};
    k.neutralPhaseImageWithMetadata = l, k.smilePhaseImageWithMetadata = m;
    const y = k;
    this.controller.getDispatcher().dispatchOnCompleteEvent(y, t);
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class ox extends tc {
}
class nx extends V0 {
}
const ix = "isMouthStatusNotTooLow";
var Oo;
class rx extends xe {
  constructor(t, e) {
    super(ix, t);
    O(this, Oo);
    F(this, Oo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Oo));
  }
}
Oo = new WeakMap();
class Mg extends z0 {
  constructor(t, e) {
    super("SmileValidationService", t);
    p(this, "controller");
    this.controller = e;
  }
  getMouthStatusThreshold(t) {
    const e = this.controller.medianScore.median;
    return t.mouth.status.min + (e ?? mi);
  }
  validateDetectedObject(t) {
    const e = this.getThresholds(), A = new Z0([new $0(e.confidence.min, t.confidence), new Ac(e.mouth.confidence.min, t.mouth.confidence), new X0(e.size.min, t.faceSize), new ec(e.size.max, t.faceSize), new rx(this.getMouthStatusThreshold(e), t.mouth.status)]);
    return A.validate(), A;
  }
}
class ax extends tc {
}
var ke, He;
class gx extends _0 {
  constructor(...t) {
    super(...t);
    O(this, ke);
    O(this, He);
    F(this, ke, void 0), F(this, He, void 0), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(tn).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    F(this, He, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && F(this, ke, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Cr.REQUEST_CAPTURE, D(this, He));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t), A = this.getDetectionDetails(t, e);
    if (this.onDetection(A, t.image), this.isCaptureDone(e)) {
      await this.onCaptureDone(t, e.detection);
      return;
    }
    await this.sleep(A.detectionTime);
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  isCaptureDone(t) {
    return D(this, ke) ? D(this, ke) === tn.FIRST_FRAME ? !0 : D(this, ke) === tn.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof w ? e : w.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    await this.onCapture(t, e), F(this, ke, void 0);
  }
  stop() {
    super.stop(), D(this, He) && document.removeEventListener(Cr.REQUEST_CAPTURE, D(this, He));
  }
}
ke = new WeakMap(), He = new WeakMap();
class sx extends q0 {
  build() {
    return this.validateDependencies(), new gx(this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class Ix extends sx {
}
class cx {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, detector: r, phaseThresholds: g } = n;
    switch (t) {
      case J.SMILE:
        return this.createSmileDetection(o, r, e, g, A);
      case J.NEUTRAL:
        return this.createNeutralDetection(o, r, e, g, A);
      case J.SMILE_MANUAL:
        return this.createSmileManualDetection(o, r, e, g);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createNeutralDetection(n, t, e, A, o = oi) {
    const r = new JE(), g = new tx(A[J.NEUTRAL]), a = new LE(n), s = new Vi(t, g), c = new vg(o), I = this.createInstructionEscalation(n);
    return r.setName(J.NEUTRAL), r.setCandidateSelection(c), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Si), r.setFallbackInstruction(aA.FACE_NOT_PRESENT), r.setInstructionCodeMap(aA), r.setInstructionEscalation(I), r.setImageProcessor(s), r.build();
  }
  createSmileDetection(n, t, e, A, o = oi) {
    const r = new nx(), g = new Mg(A[J.SMILE], n), a = new ox(n), s = new Vi(t, g), c = new vg(o), I = this.createInstructionEscalation(n);
    return r.setName(J.SMILE), r.setCandidateSelection(c), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Si), r.setFallbackInstruction(aA.FACE_NOT_PRESENT), r.setInstructionEscalation(I), r.setInstructionCodeMap(aA), r.setImageProcessor(s), r.build();
  }
  createSmileManualDetection(n, t, e, A) {
    const o = new Ix(), r = new Mg(A[J.SMILE], n), g = new ax(n), a = new Vi(t, r), s = this.createInstructionEscalation(n);
    return o.setName(J.SMILE_MANUAL), o.setCameraService(e), o.setCallbacks(g), o.setCheckToInstructionCodeMap(Si), o.setFallbackInstruction(aA.FACE_NOT_PRESENT), o.setInstructionEscalation(s), o.setImageProcessor(a), o.build();
  }
  createInstructionEscalation(n) {
    return new ME(new WE(_i.timeout), n.getDispatcher(), { threshold: _i.threshold, instructions: _i.instructions }, n.getAnalytics());
  }
}
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wg = {}, Zi = {}, zi, Lg;
function Cx() {
  if (Lg) return zi;
  Lg = 1, zi = i;
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
  return zi;
}
var Og = {}, Jg;
function Bx() {
  return Jg || (Jg = 1, function(i) {
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
      for (var s = null, c = [], I = 0, E = 0, C; g < a; ) {
        var x = r[g++];
        switch (E) {
          case 0:
            c[I++] = t[x >> 2], C = (x & 3) << 4, E = 1;
            break;
          case 1:
            c[I++] = t[C | x >> 4], C = (x & 15) << 2, E = 2;
            break;
          case 2:
            c[I++] = t[C | x >> 6], c[I++] = t[x & 63], E = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, c)), I = 0);
      }
      return E && (c[I++] = t[C], c[I++] = 61, E === 1 && (c[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, c.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, c.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var s = a, c = 0, I, E = 0; E < r.length; ) {
        var C = r.charCodeAt(E++);
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
  }(Og)), Og;
}
var Xi, Ug;
function Qx() {
  if (Ug) return Xi;
  Ug = 1, Xi = i;
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
  }, Xi;
}
var $i, Yg;
function Ex() {
  if (Yg) return $i;
  Yg = 1, $i = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function s(C, x, d) {
        r[0] = C, x[d] = g[0], x[d + 1] = g[1], x[d + 2] = g[2], x[d + 3] = g[3];
      }
      function c(C, x, d) {
        r[0] = C, x[d] = g[3], x[d + 1] = g[2], x[d + 2] = g[1], x[d + 3] = g[0];
      }
      o.writeFloatLE = a ? s : c, o.writeFloatBE = a ? c : s;
      function I(C, x) {
        return g[0] = C[x], g[1] = C[x + 1], g[2] = C[x + 2], g[3] = C[x + 3], r[0];
      }
      function E(C, x) {
        return g[3] = C[x], g[2] = C[x + 1], g[1] = C[x + 2], g[0] = C[x + 3], r[0];
      }
      o.readFloatLE = a ? I : E, o.readFloatBE = a ? E : I;
    }() : function() {
      function r(a, s, c, I) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
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
          a((E << 31 | 2139095040) >>> 0, c, I);
        else if (s < 11754943508222875e-54)
          a((E << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, c, I);
        else {
          var C = Math.floor(Math.log(s) / Math.LN2), x = Math.round(s * Math.pow(2, -C) * 8388608) & 8388607;
          a((E << 31 | C + 127 << 23 | x) >>> 0, c, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, s, c) {
        var I = a(s, c), E = (I >> 31) * 2 + 1, C = I >>> 23 & 255, x = I & 8388607;
        return C === 255 ? x ? NaN : E * (1 / 0) : C === 0 ? E * 1401298464324817e-60 * x : E * Math.pow(2, C - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function s(C, x, d) {
        r[0] = C, x[d] = g[0], x[d + 1] = g[1], x[d + 2] = g[2], x[d + 3] = g[3], x[d + 4] = g[4], x[d + 5] = g[5], x[d + 6] = g[6], x[d + 7] = g[7];
      }
      function c(C, x, d) {
        r[0] = C, x[d] = g[7], x[d + 1] = g[6], x[d + 2] = g[5], x[d + 3] = g[4], x[d + 4] = g[3], x[d + 5] = g[2], x[d + 6] = g[1], x[d + 7] = g[0];
      }
      o.writeDoubleLE = a ? s : c, o.writeDoubleBE = a ? c : s;
      function I(C, x) {
        return g[0] = C[x], g[1] = C[x + 1], g[2] = C[x + 2], g[3] = C[x + 3], g[4] = C[x + 4], g[5] = C[x + 5], g[6] = C[x + 6], g[7] = C[x + 7], r[0];
      }
      function E(C, x) {
        return g[7] = C[x], g[6] = C[x + 1], g[5] = C[x + 2], g[4] = C[x + 3], g[3] = C[x + 4], g[2] = C[x + 5], g[1] = C[x + 6], g[0] = C[x + 7], r[0];
      }
      o.readDoubleLE = a ? I : E, o.readDoubleBE = a ? E : I;
    }() : function() {
      function r(a, s, c, I, E, C) {
        var x = I < 0 ? 1 : 0;
        if (x && (I = -I), I === 0)
          a(0, E, C + s), a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, C + c);
        else if (isNaN(I))
          a(0, E, C + s), a(2146959360, E, C + c);
        else if (I > 17976931348623157e292)
          a(0, E, C + s), a((x << 31 | 2146435072) >>> 0, E, C + c);
        else {
          var d;
          if (I < 22250738585072014e-324)
            d = I / 5e-324, a(d >>> 0, E, C + s), a((x << 31 | d / 4294967296) >>> 0, E, C + c);
          else {
            var l = Math.floor(Math.log(I) / Math.LN2);
            l === 1024 && (l = 1023), d = I * Math.pow(2, -l), a(d * 4503599627370496 >>> 0, E, C + s), a((x << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, C + c);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, s, c, I, E) {
        var C = a(I, E + s), x = a(I, E + c), d = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, Q = 4294967296 * (x & 1048575) + C;
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
  return $i;
}
function Tg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ar, Pg;
function xx() {
  if (Pg) return Ar;
  Pg = 1, Ar = i;
  function i(n) {
    try {
      if (typeof Tg != "function")
        return null;
      var t = Tg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Ar;
}
var Hg = {}, Kg;
function dx() {
  return Kg || (Kg = 1, function(i) {
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
  }(Hg)), Hg;
}
var er, jg;
function lx() {
  if (jg) return er;
  jg = 1, er = i;
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
  return er;
}
var tr, _g;
function ux() {
  if (_g) return tr;
  _g = 1, tr = n;
  var i = lt();
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
  }, tr;
}
var qg;
function lt() {
  return qg || (qg = 1, function(i) {
    var n = i;
    n.asPromise = Cx(), n.base64 = Bx(), n.EventEmitter = Qx(), n.float = Ex(), n.inquire = xx(), n.utf8 = dx(), n.pool = lx(), n.LongBits = ux(), n.isNode = !!(typeof yt < "u" && yt && yt.process && yt.process.versions && yt.process.versions.node), n.global = n.isNode && yt || typeof window < "u" && window || typeof self < "u" && self || Zi, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Zi)), Zi;
}
var or, Vg;
function oc() {
  if (Vg) return or;
  Vg = 1, or = a;
  var i = lt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, h) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = h;
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
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(l, Q, h) {
    return this.tail = this.tail.next = new o(l, Q, h), this.len += Q, this;
  };
  function c(l, Q, h) {
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
  E.prototype = Object.create(o.prototype), E.prototype.fn = I, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, a.prototype.int32 = function(l) {
    return l < 0 ? this._push(C, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function C(l, Q, h) {
    for (; l.hi; )
      Q[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[h++] = l.lo;
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
  function x(l, Q, h) {
    Q[h] = l & 255, Q[h + 1] = l >>> 8 & 255, Q[h + 2] = l >>> 16 & 255, Q[h + 3] = l >>> 24;
  }
  a.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(l) {
    var Q = t.from(l);
    return this._push(x, 4, Q.lo)._push(x, 4, Q.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, a.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var d = i.Array.prototype.set ? function(l, Q, h) {
    Q.set(l, h);
  } : function(l, Q, h) {
    for (var m = 0; m < l.length; ++m)
      Q[h + m] = l[m];
  };
  return a.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(c, 1, 0);
    if (i.isString(l)) {
      var h = a.alloc(Q = e.length(l));
      e.decode(l, h, 0), l = h;
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
    var l = this.head, Q = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = l.next, this.tail = Q, this.len += h), this;
  }, a.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), h = 0; l; )
      l.fn(l.val, Q, h), h += l.len, l = l.next;
    return Q;
  }, a._configure = function(l) {
    n = l, a.create = s(), n._configure();
  }, or;
}
var nr, Zg;
function hx() {
  if (Zg) return nr;
  Zg = 1, nr = t;
  var i = oc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = lt();
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
  }, t._configure(), nr;
}
var ir, zg;
function nc() {
  if (zg) return ir;
  zg = 1, ir = o;
  var i = lt(), n, t = i.LongBits, e = i.utf8;
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
  }, g = function() {
    return i.Buffer ? function(I) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
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
    var I = this.uint32(), E = this.pos, C = this.pos + I;
    if (C > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(E, C);
    if (E === C) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, C);
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
        return c.call(this)[E](!0);
      },
      sfixed64: function() {
        return c.call(this)[E](!1);
      }
    });
  }, ir;
}
var rr, Xg;
function fx() {
  if (Xg) return rr;
  Xg = 1, rr = t;
  var i = nc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = lt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), rr;
}
var $g = {}, ar, As;
function px() {
  if (As) return ar;
  As = 1, ar = n;
  var i = lt();
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
  }, ar;
}
var es;
function mx() {
  return es || (es = 1, function(i) {
    var n = i;
    n.Service = px();
  }($g)), $g;
}
var ts, os;
function yx() {
  return os || (os = 1, ts = {}), ts;
}
var ns;
function Dx() {
  return ns || (ns = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = oc(), n.BufferWriter = hx(), n.Reader = nc(), n.BufferReader = fx(), n.util = lt(), n.rpc = mx(), n.roots = yx(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(Wg)), Wg;
}
var is, rs;
function wx() {
  return rs || (rs = 1, is = Dx()), is;
}
var N = wx();
const f = N.Reader, R = N.Writer, u = N.util, B = N.roots.default || (N.roots.default = {}), et = B.dot = (() => {
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
      t instanceof f || (t = f.create(t));
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
              let E = A.uint32() + A.pos;
              for (s = "", c = null; A.pos < E; ) {
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
              let E = A.uint32() + A.pos;
              for (s = "", c = !1; A.pos < E; ) {
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
                let E = A.uint32() + A.pos;
                for (; A.pos < E; )
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
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
      t instanceof f || (t = f.create(t));
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
      e instanceof f || (e = f.create(e));
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
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
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
})();
(function(i, n) {
  const t = i();
  function e(a, s, c, I, E) {
    return X(E - -145, a);
  }
  function A(a, s, c, I, E) {
    return X(a - 331, I);
  }
  function o(a, s, c, I, E) {
    return X(c - 376, s);
  }
  function r(a, s, c, I, E) {
    return X(I - 570, c);
  }
  function g(a, s, c, I, E) {
    return X(c - 766, a);
  }
  for (; ; )
    try {
      if (parseInt(e("Lx&w", 118, 88, 216, 191)) / 1 * (-parseInt(o(749, "H%ue", 720, 783, 789)) / 2) + -parseInt(o(689, "cci7", 729, 625, 749)) / 3 * (-parseInt(e("KU&8", 347, 258, 382, 290)) / 4) + parseInt(o(616, "KfH6", 691, 619, 757)) / 5 + -parseInt(e("lQPI", 226, 192, 175, 228)) / 6 + -parseInt(o(710, "eUTB", 672, 608, 777)) / 7 + -parseInt(A(672, 770, 728, "PzTG", 641)) / 8 + -parseInt(r(902, 886, "liu$", 985, 997)) / 9 * (-parseInt(g("q0yD", 1185, 1261, 1209, 1377)) / 10) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(gi, 504449);
function X(i, n) {
  const t = gi();
  return X = function(e, A) {
    e = e - (9 * 425 + -9407 * -1 + -2591 * 5);
    let o = t[e];
    if (X.pTGTaf === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      X.SiSVmI = c, i = arguments, X.pTGTaf = !0;
    }
    const g = t[-1584 + 433 * 11 + -3179], a = e + g, s = i[a];
    return s ? o = s : (X.EIjlZw === void 0 && (X.EIjlZw = !0), o = X.SiSVmI(o, A), i[a] = o), o;
  }, X(i, n);
}
function gi() {
  const i = ["omoNWRldKSkh", "WQJcJYpdSuy", "WPr6W5CkWPG", "W48EW7ZcNWXrWOPdWQi", "W4iQW6bsWOu", "W4TZW6CZW6i", "WOrLW43cGJC", "imkLW4mZW7C", "W6yxWO3cKCof", "dKaRBKq", "WPqRW63cJuq", "WRrhqY0N", "W5FcO8k2WQak", "o8omW7tcJSk8", "cSkuzqKC", "CCoUCMTA", "WPtdS2C3WQK", "W44jW7dcUNi", "FbddMe8h", "WP3dSweDWOO", "W4NcINJdH8k6", "qghcLb7dHW", "A8ocbtq+", "W6iIWQNcIeHWgWxdOumaFmoi", "WOJcMHtdUmkX", "smoidZu1", "zmopBSoetW", "W40yW7/dINyGW7vzWQddSvBcVmkF", "kudcTt91a8kzW4FdVSkXa8kB", "uCo7W67cLCkL", "W7PUW45gWQC", "WPpcRqldOYu", "FCoTfJS6", "WPD2W77cOa0", "W4CWWPtcN1i", "FmkQede/", "fSo/kJDn", "xSkSt8kkW4e", "rCkdWQtdMZ0", "vr7cJmoJrW", "W5RdNcnAiW", "WQLxWPeQWQW", "wqrvW5rmo8obWPtcT2n2", "W5lcVNtdKMK", "uhxcJmohrG", "sSkGsCkWW4y", "oHnXi8oe", "qLBcOYpdMG", "AdVdI8o3gW", "mGBcHtFdMW", "dmk1xcjM", "W4hcQbldKSoe", "EcqmaL0", "WQBdIwH1WOi", "WQ7cVIddMLK", "BHhdLHNdRG", "W4K+W63cHvm", "F07dKctdSa", "W5RdRxJdPSkT", "W7TyW4rRWOW", "n8oCW6tcQSk8", "zsNdVvldKW", "W69yzSkyjW", "WRDtWQjpWOm", "W4RcRG3cTCoP", "kN/cJ2ddRbBcHCozD2VcSSknWRW", "xvNcHtFdUW", "FwBdGNOd", "W7dcKe/cKCkT", "WP3cRJdcUCk6", "WQBdH24pWOq", "shBcOJ7dUq", "WOf7W7BdNIa", "bWqVc1G", "WRixrWeI", "WQHXW6BcQ8ks", "xSoPWRLgWPW6b8k3lCoirSkBWRq", "mgVdP8ovmW", "xSkUWQtdTZ4", "W6mhW4RcVha", "hSk9WOeyW74", "kmkvW48JW7G", "DSkdW6PYkW", "smolvmoNFG", "iuddU8keWOG", "W78JWQCmW6r+WPvcDSkYkW", "W7dcOSkHWOuF", "ymkSD8kGW7q", "WOldRw8S", "WOBcStddISko", "FHJdR2i", "WPaOWQRcSSoq", "WRJcKbtdL3K", "WQ/cVILqmG", "W4lcLSkMWRGl", "omoIW7tcOSkw", "W7pcPXxcHCoz", "eSoaWRBdKCkJ", "W5StW57cThy", "W6TdWQPnWPq", "WPKkW5O9WOO", "ECkIsSowW40", "bCknW6PTma", "o8oyW7RcMCk5", "imkdW7pdSd0", "f8kxW5XIda", "WP9aWO1iW5C", "WPBdJXxcRJTpW7LsahaHWOCS", "WQpdHxq/WOO", "WPRcSsFdG0a", "W40UWPFcQ2u", "dJaAW5jH", "CvShy2W", "sMxdVvTQ", "BCohfHjy", "WPuNWR4PWRq", "WPNdK3CJWOe", "hSkvh8kOW4m", "WQddQgSiWRy", "bhWUWRKz", "W4pdK00HWRO", "WQBcSuZdNKq", "BCkHhvvL", "AdX6ea4", "W6KFW67cVfi", "DCo6DHLL", "W5uFWQZcMmou", "W7eWW4NcKvK", "mCoPWR/cICot", "W6JcLcBcJ8oD", "wNNcHGxdMq", "lrf8WRju", "gSkto1qp", "W7r7WOaDWQ4", "hrOBW7Do", "wMBdGCkYWQC", "jKVcTtf8cSk9W5hdUmkImSk6", "W40eW5BcSW", "zdJcQrRcGq", "WQjwW4/dPHK", "CfVcHMiD", "ieFcVSouWQu", "W4udFCo8iq", "WPyDW5a1W4i", "W69ytmkApW", "A3aGW4jLW5fdwq", "WPhcKeVdMLO", "v8k/WRBdQ8odWPPFW5JdO392EMW", "kWVdPSoarq", "WPBdPwuUW6K", "W6n4WP3cRvi", "lmoMW6/dQSkr", "BH3cSCourG", "qmkMEmkGW6a", "dCk1vGXe", "qmofjs1Y", "AsVdHSo4ihldQa", "F8o9iHzF", "AfTGcwu", "WORcSKtdHMu", "swBdVSknWOu", "W43cGYJcSSk7", "aSo5W7NcQmkg", "A0/dJmoDiW", "W7KkW7LPWP4", "eav5W4DF", "DSoOWP9seSoDW79mW48", "WO7dQY4fWRa", "rv3dNmk9WOG", "WRzZCKSG", "W7yNW5fuWQi", "W5DpW4LqW6u", "Bw16dYe", "W7uPWOZcVCob", "cWCEW4TU", "ltVcGSoIlq", "z1NcK8om", "qZBdLwSf", "EgpdMK87", "W5BcSbTBma", "W64sWORdSSohWPFdRfmBW60eWRmu", "bmkBW7TJAq", "CSkaW7hcLJS", "WQtdMcDveq", "bmkCWPPIAW", "FtZdKJi", "rSozpY9/", "WPxdP0KZWOu", "dSoTWQdcLCkv", "WPDGCZ0C", "W47cKb0Una", "W7CtWOVcSmo9", "W4vxWPhcHmoY", "qmkPde8r", "y8kWWQldLGq", "i8kVttHc", "WRWzWR/cPce", "wmknEsHG", "pHiFxmoA", "W4KlW7ifW5vfpSk8Bt/dHXC", "WONcRMBdM8k/", "smkKWRNdLHS", "eCkBkH5Im8kfbq", "WRL3WOdcOH0", "WOqvWPdcJqS", "WOrvwIKJ", "WPbxr0SC", "rHhdKZtcTG", "pmkPW5qIW6S", "WRviFu4G", "W7P/WPeZW6a", "nmoNW4tcICoa", "WPRcVZ/dMSkL", "W7BcIciKpG", "W54cvCoAlG", "W4dcRCocWO0J", "WRldLstdMfu", "o3akW7LE", "qCk0hKuT", "jruapqu", "jttcHqbIrhxcOKSUW65I", "WQODW7ZcTry", "W5vEqCo+bG", "WOOxW7/cRCk4", "e8kPW79Uaq", "i8oZW7tcKLK4W5ZdPSoJWPqqhda", "WQNcOYtdO1e", "W47cGt9yha", "rmo4WPpcI8kWW4NcTa", "hmkFWPOmW5e", "W5VdKWnheG", "BgBdPfiY", "W7lcIXX4", "AeBdL0e"];
  return gi = function() {
    return i;
  }, gi();
}
function bx() {
  const i = s(886, 1048, "DHM8", 866, 980) + s(834, 889, "%D%@", 747, 848) + s(987, 915, "CMH#", 984, 899) + t("H%ue", -262, -285) + o(1219, 1266, 1347, 1294, "RoDI") + e("n^aH", -61, -62, -188, -134) + s(763, 730, "eAh)", 818, 845) + e("@x]]", -47, -102, -32, -90) + e("X)#*", -113, -113, -90, -203) + t("zWl@", -223, -262) + a(565, 497, "H%ue", 465, 498) + s(1095, 938, "RVSs", 1042, 1006) + a(382, 560, "lQPI", 361, 473) + t("oFwU", -285, -209) + s(983, 1001, "Bi8w", 869, 936) + t("IN9z", -249, -310) + e("50Rj", -245, -229, -293, -240) + e("4mF%", -332, -293, -116, -225) + t("eUTB", -146, -164) + a(470, 533, "eAX(", 415, 517) + e("PzTG", -225, -84, -136, -137) + s(877, 897, ")ThV", 745, 790) + a(422, 375, "lo19", 567, 467) + e("DHM8", -77, -90, -171, -105) + a(389, 544, "t6W)", 485, 452) + s(900, 847, "22Va", 853, 819) + e("!qVc", -352, -177, -329, -257) + t("BLT2", -197, -234) + o(1360, 1245, 1211, 1209, "50Rj") + a(576, 601, "Ue%y", 544, 521) + o(1175, 1271, 1339, 1280, "mL[z") + s(689, 830, "RoDI", 727, 798) + e("eAh)", -63, 12, -99, -94) + e("mL[z", -97, -200, -194, -165) + o(1420, 1332, 1269, 1346, "@x]]") + t("E@ot", -401, -298) + e("PzTG", -218, -263, -286, -177) + e("4mF%", -73, -66, -71, -110) + e("w$)f", -111, -67, -241, -172) + a(536, 575, "RVSs", 584, 518) + a(284, 322, "Lx&w", 385, 345) + s(1020, 1023, "O8DC", 956, 952) + s(775, 862, "iPP@", 844, 888) + o(1391, 1291, 1197, 1185, "X)#*") + o(1487, 1405, 1402, 1508, "zWl@") + t("Bi8w", -224, -213) + e("RoDI", -183, -286, -193, -266) + s(777, 850, "gyEF", 793, 873) + e("zWl@", -86, -236, -213, -202) + s(952, 942, "E@ot", 825, 901) + o(1441, 1396, 1305, 1436, "X)#*") + s(887, 713, "ed[B", 738, 815) + o(1296, 1303, 1324, 1275, "RoDI") + a(293, 345, "!qVc", 449, 340) + e("50Rj", -164, -140, -201, -243) + s(1004, 1038, "4mF%", 846, 935) + s(757, 956, "H%ue", 805, 853) + e("@x]]", -144, -38, -132, -101) + s(1038, 1038, "lQPI", 893, 992) + a(492, 446, "BLT2", 411, 377) + e("8D9q", -324, -378, -219, -281) + a(548, 376, "lo19", 523, 458) + s(949, 946, "RoDI", 842, 893) + e("22Va", -78, -89, -199, -191) + s(794, 841, "22Va", 818, 831) + o(1296, 1362, 1404, 1362, "3Nc]") + s(880, 898, "O8DC", 881, 894) + t("liu$", -244, -266) + e("q0yD", -230, -375, -244, -275) + a(517, 563, "q0yD", 410, 512) + e("RVSs", -143, -131, -126, -128) + a(527, 494, "q0yD", 563, 532) + t("t6W)", -84, -175) + s(890, 953, "eAh)", 868, 945) + t("gyEF", -89, -171) + s(795, 836, "KU&8", 881, 912) + a(422, 424, "RVSs", 447, 446) + t("6xv&", -171, -178) + t("t6W)", -6, -110) + o(1417, 1458, 1387, 1393, "E@ot") + e("8D9q", -120, 13, -96, -55) + s(803, 794, "Xp8A", 740, 791) + t("6xv&", -236, -190) + e("PzTG", -320, -191, -321, -248) + a(393, 440, "DHM8", 397, 435) + s(924, 750, "!qVc", 779, 861) + a(301, 400, "KU&8", 234, 337) + o(1460, 1357, 1468, 1333, "lo19") + t("@x]]", 22, -82) + o(1449, 1366, 1255, 1445, "emm!") + t("U1RO", -151, -120) + t("8D9q", -37, -98) + e("cci7", -341, -230, -161, -228) + a(493, 412, "eAX(", 452, 509) + s(909, 972, "m(PO", 1005, 915) + t("knxB", -201, -296) + s(771, 947, "m(PO", 740, 841) + t("iPP@", -17, -117) + e("lQPI", -323, -207, -247, -209) + o(1349, 1422, 1512, 1327, "qx&W") + t("m(PO", -215, -259) + t("8D9q", -44, -155) + t("X)#*", -111, -145) + e("zWl@", -45, 0, -203, -112) + t("q0yD", -224, -256) + a(494, 528, "iPP@", 495, 533) + s(915, 918, "n^aH", 838, 860) + e("RoDI", -307, -277, -312, -236) + s(945, 848, "IN9z", 820, 897) + a(514, 494, "O8DC", 408, 464) + s(1043, 940, "50Rj", 1002, 927) + a(358, 422, "eAh)", 507, 455) + e("gyEF", -114, -60, -127, -157) + t("@x]]", -235, -207) + e("m(PO", -46, -153, -187, -71) + a(512, 652, "q0yD", 419, 535) + t("Ue%y", -119, -186) + o(1337, 1327, 1343, 1226, "DHM8") + s(1055, 981, "O8DC", 862, 959) + o(1325, 1438, 1336, 1542, "H%ue") + e("emm!", -52, -98, -159, -91) + e("m(PO", 40, -31, 5, -73) + e("cci7", -203, -224, -243, -246) + e("emm!", -220, -150, -122, -117) + o(1469, 1381, 1401, 1416, "lo19") + a(449, 549, "w$)f", 539, 547) + e("Ue%y", -221, -81, -256, -196) + e("ed[B", -349, -157, -278, -245) + s(1002, 1051, "emm!", 1064, 1003) + a(536, 610, "Lx&w", 454, 541) + t("Ue%y", -93, -90) + a(458, 365, "liu$", 491, 456) + t("PzTG", -339, -291) + o(1457, 1423, 1324, 1312, "Lx&w") + s(892, 853, "!qVc", 909, 944) + e("50Rj", -142, -96, -137, -204) + t("q0yD", -288, -308) + o(1371, 1464, 1374, 1511, "mL[z") + t("eUTB", -160, -250) + o(1357, 1443, 1341, 1379, "BLT2") + e("zWl@", -270, -92, -145, -155) + s(1042, 975, "Xp8A", 1036, 976) + o(1337, 1265, 1339, 1252, "50Rj") + a(664, 577, "eAh)", 618, 560) + a(406, 461, "Ue%y", 406, 354) + o(1358, 1260, 1364, 1346, "4mF%") + a(446, 338, "eAh)", 278, 383) + a(543, 383, "emm!", 511, 480) + a(289, 506, "KU&8", 314, 403) + a(619, 531, "eAX(", 467, 519) + a(394, 579, "22Va", 387, 490) + e("DHM8", -224, -319, -209, -205) + t("qx&W", -184, -81) + t("t6W)", -250, -312) + o(1253, 1347, 1324, 1321, "RVSs") + a(542, 394, "RoDI", 484, 494) + o(1388, 1335, 1253, 1325, "iPP@") + o(1302, 1295, 1363, 1215, "3Nc]") + t("8D9q", 7, -104) + e("4mF%", -77, -12, -113, -113) + s(907, 1056, "zWl@", 975, 1004) + a(510, 387, "oFwU", 501, 405) + o(1381, 1284, 1197, 1184, "n^aH") + o(1298, 1383, 1499, 1284, "3Nc]") + t("22Va", -205, -170) + s(704, 768, "CMH#", 894, 817) + s(815, 932, "knxB", 828, 871) + o(1291, 1406, 1507, 1422, "t6W)") + o(1486, 1377, 1476, 1275, "Lx&w") + o(1351, 1341, 1370, 1395, "eAh)") + a(467, 577, "!qVc", 493, 527) + o(1229, 1343, 1363, 1460, "cci7") + s(884, 1013, "eAh)", 856, 962) + s(877, 884, "50Rj", 767, 824) + s(939, 927, "Lx&w", 800, 850) + s(1011, 931, "%D%@", 816, 933) + e("IN9z", -279, -225, -275, -176) + t("mL[z", -322, -225) + a(651, 526, "IN9z", 657, 553) + a(426, 461, "Ue%y", 467, 471) + o(1399, 1425, 1411, 1426, "O8DC") + e("RoDI", -243, -245, -277, -219) + a(459, 363, "mL[z", 467, 364) + o(1281, 1294, 1182, 1389, "iPP@") + t("oFwU", -214, -309) + e("zWl@", -303, -152, -264, -186) + o(1438, 1448, 1370, 1350, "lo19") + s(715, 683, "eAX(", 741, 786) + o(1473, 1411, 1376, 1437, "RVSs") + a(344, 309, "iPP@", 275, 360) + o(1185, 1267, 1316, 1291, "!qVc") + e("@x]]", -71, -231, -145, -179) + e("eAh)", -316, -294, -191, -214) + a(313, 520, "qx&W", 328, 410) + s(902, 854, "E@ot", 1034, 930) + s(1036, 934, "oFwU", 900, 953) + s(837, 784, "@x]]", 835, 868) + e("PzTG", -94, -35, -11, -111) + e("4mF%", -272, -347, -222, -268) + o(1423, 1453, 1343, 1436, "oFwU"), n = window[a(293, 365, "liu$", 338, 352)](i);
  function t(c, I, E, C, x) {
    return X(E - -589, c);
  }
  function e(c, I, E, C, x) {
    return X(x - -565, c);
  }
  const A = window[t("IN9z", -296, -297)](n);
  function o(c, I, E, C, x) {
    return X(I - 960, x);
  }
  const r = OC(A), g = {};
  g[e("RoDI", -332, -198, -147, -217)] = tI, g[s(916, 893, "DHM8", 1027, 990)] = wC;
  function a(c, I, E, C, x) {
    return X(x - 51, E);
  }
  function s(c, I, E, C, x) {
    return X(x - 503, E);
  }
  return window[t("@x]]", -371, -287) + "o"][e("lo19", -144, -83, -201, -85) + "e"][e("lo19", -158, -123, -262, -194) + e("Lx&w", -231, -195, -176, -216)](e("Ue%y", -181, -234, -115, -127), r, g, !0, [t("Ue%y", -123, -223) + "pt"]);
}
async function kx(i) {
  function n(r, g, a, s, c) {
    return X(c - 345, r);
  }
  const t = await bx();
  function e(r, g, a, s, c) {
    return X(r - 214, a);
  }
  function A(r, g, a, s, c) {
    return X(s - 562, c);
  }
  const o = {};
  return o[e(654, 687, "knxB")] = tI, window[A(806, 814, 775, 840, "zWl@") + "o"][e(524, 490, "PzTG") + "e"][n("@x]]", 820, 794, 909, 850) + "pt"](o, t, i);
}
function si() {
  const i = ["WP3dTLZcH8kjW7yUfmoBWPVdVs3cVa", "bZbjW6Dxtmoj", "bfPGW69lt8oYW6S", "WPWLpmo9W4tdRCkJwW4opJC", "W7vzW5ZdUConcHlcJq", "o8ouWQOWkbNdVNFdSCoVla", "Dmo3WOZcKmojdIxdKCkGWOldRWW", "WPnuWO7dISkYWQBdPhrJW6CEWPq", "p2PFovtcSruNdqWdhq", "dCkYW48nW5rJs8oqW7NdMG", "W5NdRdTgz8oRWRjcDNj8WQJcVq", "WPFdSf3cHSkkW7uTbSoPWPhdOcdcOG", "dmo5W51OWRCDW4pdKmo0W7rjuue", "cGpcOx7dLdhcItyiW7yK", "q8ouW4bYrCozvmkt", "fxhcJNxdMCkdW6VcI8o8vW", "WRZcKcldRSkPD8o4lrpdMZVcSa", "W7BdMmkmW53cNmkVW6tdMIyBWO49", "CmoIwCoaW4FdGsiUW4C", "WOJcV8oamSkqyxy", "W5HZW4W", "utBdVsq0smkbWOK/", "WOeMW7BcQv7cQmo5oa", "kmkJW4RdKmkF"];
  return si = function() {
    return i;
  }, si();
}
(function(i, n) {
  function t(a, s, c, I, E) {
    return RA(E - -42, a);
  }
  function e(a, s, c, I, E) {
    return RA(s - -90, I);
  }
  function A(a, s, c, I, E) {
    return RA(c - 961, a);
  }
  function o(a, s, c, I, E) {
    return RA(c - -830, I);
  }
  const r = i();
  function g(a, s, c, I, E) {
    return RA(E - -844, s);
  }
  for (; ; )
    try {
      if (-parseInt(e(173, 178, 185, "]o5G", 181)) / 1 * (parseInt(A("l]Zp", 1230, 1242, 1239, 1242)) / 2) + parseInt(A("yzD[", 1239, 1240, 1248, 1251)) / 3 * (parseInt(e(170, 176, 180, "@jXz", 173)) / 4) + parseInt(g(-562, "ysIf", -567, -578, -567)) / 5 * (-parseInt(t("IoU]", 253, 253, 241, 241)) / 6) + -parseInt(g(-562, "$p[v", -578, -577, -571)) / 7 + -parseInt(g(-573, "6zzf", -563, -563, -575)) / 8 + parseInt(o(-563, -565, -563, "Z)sO", -556)) / 9 * (-parseInt(o(-550, -535, -546, "SXbK", -545)) / 10) + parseInt(t("$p[v", 235, 241, 249, 244)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 300130 + -1 * 77299);
function RA(i, n) {
  const t = si();
  return RA = function(e, A) {
    e = e - 263;
    let o = t[e];
    if (RA.tvShGS === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      RA.tbIWqT = c, i = arguments, RA.tvShGS = !0;
    }
    const g = t[-9889 + 1861 * -1 + 11750], a = e + g, s = i[a];
    return s ? o = s : (RA.FCJViH === void 0 && (RA.FCJViH = !0), o = RA.tbIWqT(o, A), i[a] = o), o;
  }, RA(i, n);
}
async function Sx(i) {
  const { iv: n, key: t, message: e } = await UC(i), A = await kx(t);
  function o(a, s, c, I, E) {
    return RA(E - 270, I);
  }
  const r = {};
  r[o(552, 546, 556, "SXbK", 552)] = A, r.iv = n;
  function g(a, s, c, I, E) {
    return RA(a - 519, s);
  }
  return r[g(804, "]o5G") + "ge"] = e, r;
}
function bA(i, n) {
  const t = Ii();
  return bA = function(e, A) {
    e = e - (-8394 * 1 + 4631 * 1 + 4107);
    let o = t[e];
    if (bA.gjntHX === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      bA.rZYaQn = c, i = arguments, bA.gjntHX = !0;
    }
    const g = t[-2 * -4612 + -370 + 19 * -466], a = e + g, s = i[a];
    return s ? o = s : (bA.SwirdD === void 0 && (bA.SwirdD = !0), o = bA.rZYaQn(o, A), i[a] = o), o;
  }, bA(i, n);
}
(function(i, n) {
  function t(r, g, a, s, c) {
    return bA(a - -788, g);
  }
  function e(r, g, a, s, c) {
    return bA(r - 776, s);
  }
  const A = i();
  function o(r, g, a, s, c) {
    return bA(s - 416, c);
  }
  for (; ; )
    try {
      if (parseInt(t(-408, "w1ct", -407, -467, -380)) / 1 * (parseInt(t(-410, "PPP6", -373, -399, -356)) / 2) + parseInt(o(904, 822, 837, 884, "R!*o")) / 3 + -parseInt(o(848, 809, 780, 783, "R!*o")) / 4 + -parseInt(e(1145, 1175, 1105, "41vo", 1180)) / 5 + parseInt(t(-403, "l5Bn", -333, -298, -276)) / 6 + parseInt(o(822, 731, 792, 772, "w#Wq")) / 7 * (-parseInt(e(1140, 1180, 1162, "dcgV", 1169)) / 8) + -parseInt(t(-413, "OL8l", -344, -376, -398)) / 9 * (-parseInt(t(-416, "P2]e", -415, -456, -465)) / 10) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ii, 424510 * -1 + -900879 + -6841 * -331);
function ve(i, n, t, e, A) {
  return bA(A - 824, n);
}
function zA(i, n, t, e, A) {
  return bA(t - 293, A);
}
function SA(i, n, t, e, A) {
  return bA(e - 21, i);
}
function pA(i, n, t, e, A) {
  return bA(t - -978, e);
}
function OA(i, n, t, e, A) {
  return bA(e - -205, i);
}
function Ii() {
  const i = ["W59/xvLX", "qSk9hZfyWQOubSkvbvuQjG", "eb7dPwpcTW", "W7tcT8o0WRGCW5P1WRpcQG", "W5vyu1DY", "zs8Wumok", "sSobWOWeW4m", "ESohW4qUWO0", "WQu1kSkuma", "W7WAWQ0hDq", "W67cOuOe", "DSoJWRSnaa", "WRXKmtvg", "WO/dTGZdUIG", "W4zVW5/dHCol", "W5HqbmoiWOZdGSkRWPFdJrentq", "jxOpW7vg", "fSoywgSC", "WPebWPZcS3W", "i0bHW4i", "fCoHrg0B", "W45AECo1kmovWQ5YxM7cImkdWOO", "WOlcVW4TWPS", "WQxdS8kRWROq", "tSolkSor", "artdMh/cUq", "W4rSW7OuW5K", "c8oJCmoxdq", "b1eUncm", "W5TKhJ3cTmkcW5L7W5rOW4OiW6S", "W40Rmv7dRW", "t8obWOyiW7i", "W4i/iCkHif/cLX/cJCozmxNdQG", "nxVdJX3cOG", "CmoWWR3dPr4", "W7dcTmo3W6rNWP55WPtcLCkBqbW", "WPONWPW", "W4m7WR9+omo6df8", "ECoXWRVdVdi", "WPGBw8kn", "qmkWgtXAWQSFfmk7a0i1fa", "a8oKs3ao", "W7VcUCo3W6jNWPqdWOJcL8k2uJ/cSq", "mei7lc0", "WQWrlmkDea", "WP9xymo7zG", "WOldVmoXWRlcUKFcU8oyrG", "WPjQW7yBwG", "WQ7dOmk0", "dSkEWO8H", "W7rkk8oyqW", "h8kIWQXjBSkKWQiJb8kOW61TEa", "hmkyWO0jgG", "W5T2wW", "lmkaWOr0W5ddQ0BdT8ouWRldLSof", "b8oNwKGn", "BCohW5G1", "WQlcOSoekq", "WPtdQmkWWR8f", "FmoFWOiDW6a", "WOXIymo9Da", "WPrXWR5QlW", "W6pdQmkyy0ZcSYZcMbiwpMVcMq", "WRhcQSkoo8kL", "W5dcPmkIWRlcLW", "WOuBwq", "W5VcR8kVWQNcPq", "W5DYW53dHW", "neb9W5NcSq", "W7lcTLC", "W7tdLvLejq", "WQJcOrKdWPm", "W7byWRldNSkm", "W7aHWQuhzG", "hmoft3CB", "oGGBW4ldJq", "WOVdNaW", "WPrJW6ugwG", "WO8hv8kqW5a", "W5BcUmkUWQ3cGW", "ffVdVW", "u8oQmCorW6i", "WO8MdWuLWQmRvSoXBxFcL0a", "j8o9sSo1za", "zcqHWQpcPq", "W7eQWRqdyq", "W4bKW7VdMmof", "W4PYW58", "D1RdRHpcP3VdQa", "W4hcV8k9Bt/cGSoT", "W5yGdvtdHq", "vImaWQVcSG", "WPlcNCko", "WQSejG", "WRPuodTq", "AG3dPYxcUG", "WROgj8k5oa", "W6FdOfLcnW", "WOiCW7JdKK0", "h0BcPhJdQG", "pSo1A8oKrq", "WPZcLSkpBtK", "ngj8W5/cQG", "uYmkWQFcGW", "WQHkW6KMEq", "mKbRW5hcQG", "WOlcUsiVWQW", "WOWDD8kqW4y", "rsSLqmoB", "W4nYW53dMmoH", "fGldU3lcVW", "WPCWWOVcVxG", "W77dIK8zWQ0", "WPpcICkbzXK", "WPe4W5BdGmohBuhdIW", "W5LJw1DH", "W6KHp1JdPa", "W5JcGLNcVMpdQvxcICozW6yxhG", "iSoRwCo7zW", "rIaJrmor", "WOFcICkbEa", "WQT9W7biiW", "W7zva8oCra", "WObUW7atCq", "kqGBW5pdMa", "n8orqu4R", "WPiWWOhcSuK", "ie4NldG", "WOX6BX/cSNNcHf9xDCogAaS", "W7bQa8ooqW", "Bq0hW6a", "W5r0uejd", "WQBcTCozmHG", "W7ldT05kjq", "W6uyWO41qW", "ifuMka4", "WQtcV8oBfXS", "W64iha", "pCo0A8oe", "pvhcUG"];
  return Ii = function() {
    return i;
  }, Ii();
}
class Gx {
  async [OA("dcgV", 164, 125, 183) + ve(1190, "*Y6i", 1222, 1217, 1221) + SA("dFWj", 525, 507, 492) + SA("OL8l", 467, 445, 501) + OA("OL8l", 227, 227, 198)](n) {
    function t(C, x, d, l, Q) {
      return zA(C - 219, x - 276, x - -925, l - 231, Q);
    }
    function e(C, x, d, l, Q) {
      return SA(C, x - 113, d - 54, l - 282);
    }
    const { Image: A } = et, o = await n[t(-198, -197, -259, -174, "CDku") + e("lhdc", 737, 738, 786) + "r"]();
    function r(C, x, d, l, Q) {
      return SA(x, x - 272, d - 44, d - -421);
    }
    function g(C, x, d, l, Q) {
      return OA(C, x - 393, d - 41, x - 861);
    }
    const a = new Uint8Array(o);
    function s(C, x, d, l, Q) {
      return zA(C - 131, x - 444, Q - -927, l - 264, d);
    }
    const c = {};
    c[e("CDku", 765, 698, 749)] = a;
    const I = A[e("83!c", 612, 730, 677) + "y"](c);
    if (I) {
      if (r(81, "R!*o", 52) !== e("w2AD", 734, 675, 701)) throw w[r(-39, "41vo", -50) + t(-247, -185, -126, -115, "BO49")](I);
      {
        const { v4: { Metadata: C } } = _0x2eda10, x = { ..._0x133175 };
        x[e("83!c", 728, 672, 707) + t(-185, -240, -221, -301, "m7MP")] = _0x61e19f[r(2, "l5Bn", 43) + s(-180, -161, "0ar(", -252, -215)][g("l5Bn", 1120, 1124)], x[s(-180, -125, "rOrx", -141, -165) + t(-220, -174, -160, -200, "dFWj") + r(39, "w1ct", 74) + "n"] = g("yLX2", 1078, 1046);
        const d = x, l = C[s(-157, -169, "&eGs", -232, -175) + "y"](d);
        if (l) throw _0x56580e[r(58, "%M[8", 53) + r(22, "itI5", 65)](l);
        return C[s(-278, -294, "i3]r", -314, -281) + "e"](d);
      }
    }
    const E = {};
    return E[t(-260, -220, -215, -162, "cpXy")] = a, A[s(-157, -233, "%M[8", -206, -196) + "e"](E);
  }
  [zA(760, 654, 723, 727, "d]&l") + SA("JKOs", 465, 394, 450) + ve(1369, "6um5", 1286, 1291, 1299) + OA("*LH2", 153, 138, 203) + ve(1159, "dx!q", 1153, 1264, 1201) + pA(-619, -544, -602, "Acm3")](n) {
    const { VideoStream: t } = et;
    function e(s, c, I, E, C) {
      return ve(s - 475, C, I - 183, E - 481, E - -1186);
    }
    const A = t[r(127, 105, "LSmY", 119, 106) + "y"](n);
    function o(s, c, I, E, C) {
      return zA(s - 337, c - 383, s - -239, E - 1, c);
    }
    function r(s, c, I, E, C) {
      return pA(s - 155, c - 233, C - 697, I);
    }
    if (A)
      if (g(870, 890, "l5Bn", 824, 865) !== r(126, 207, "muTV", 140, 146)) {
        const { Blob: s } = _0x115136.v4, c = s[e(41, 54, 112, 63, "T7Lt") + "y"](_0x207628);
        if (c) throw _0x5ac38e[o(472, "d]&l", 419, 411) + e(-66, 27, -50, 4, "m7MP")](c);
        const I = s[o(514, "*Y6i", 500, 456) + "e"](_0x5804d0);
        return s[a(613, 579, "m7MP", 510, 572) + "e"](I)[r(87, 97, "R!*o", 131, 66) + "h"]();
      } else throw w[r(193, 86, "1BmL", 124, 155) + a(619, 567, ")pkV", 685, 624)](A);
    function g(s, c, I, E, C) {
      return pA(s - 472, c - 154, C - 1426, I);
    }
    function a(s, c, I, E, C) {
      return zA(s - 198, c - 461, C - -126, E - 246, I);
    }
    return t[e(61, 18, 121, 70, "JKOs") + "e"](n);
  }
  async [pA(-559, -534, -546, "JKOs") + ve(1218, "LSmY", 1137, 1199, 1196) + pA(-565, -574, -539, "vdOg") + OA("83!c", 214, 214, 245) + ve(1253, "rOrx", 1234, 1208, 1261) + "e"](n) {
    function t(I, E, C, x, d) {
      return pA(I - 167, E - 277, C - 1517, I);
    }
    const { v4: { Metadata: e } } = et, A = { ...n };
    A[a(-471, -414, -418, -406, "R!*o") + s(385, 410, 351, 421, "yLX2")] = et[t("KZvC", 922, 925) + s(276, 289, 299, 360, "1BmL")][t("PPP6", 995, 946)], A[s(356, 380, 366, 351, "1BmL") + t("P2]e", 984, 932) + t("JKOs", 938, 934) + "n"] = s(293, 316, 333, 296, "cpXy");
    function o(I, E, C, x, d) {
      return SA(C, E - 473, C - 305, I - 735);
    }
    const r = A, g = e[t("xiI&", 882, 909) + "y"](r);
    function a(I, E, C, x, d) {
      return zA(I - 366, E - 424, C - -1079, x - 106, d);
    }
    function s(I, E, C, x, d) {
      return SA(d, E - 447, C - 129, C - -136);
    }
    if (g)
      throw s(369, 285, 346, 380, "cpXy") === c(396, 441, "d]&l") ? _0xa6018f[s(295, 339, 358, 425, "KZvC") + o(1233, 1250, "kK*^")](_0xb6ee2) : w[a(-269, -346, -324, -286, "xiI&") + c(384, 414, "&eGs")](g);
    function c(I, E, C, x, d) {
      return pA(I - 126, E - 6, E - 1008, C);
    }
    return e[o(1155, 1158, "rB^N") + "e"](r);
  }
  async [pA(-587, -488, -529, "dx!q") + zA(700, 697, 722, 667, "JKOs") + zA(700, 763, 694, 741, "R!*o") + zA(732, 723, 713, 718, "6um5")](n) {
    const { Content: t } = et, { iv: e, key: A, message: o } = await Sx(n);
    function r(x, d, l, Q, h) {
      return OA(l, d - 175, l - 391, x - 45);
    }
    const g = { token: new Uint8Array(A), iv: e, schemaVersion: DC, bytes: new Uint8Array(o) }, a = t[s(735, "*Y6i", 680, 676, 699) + "y"](g);
    function s(x, d, l, Q, h) {
      return OA(d, d - 132, l - 212, h - 480);
    }
    function c(x, d, l, Q, h) {
      return SA(h, d - 136, l - 107, d - -755);
    }
    function I(x, d, l, Q, h) {
      return OA(l, d - 190, l - 417, h - 475);
    }
    function E(x, d, l, Q, h) {
      return SA(h, d - 339, l - 155, d - 745);
    }
    if (a)
      throw c(-297, -303, -352, -367, "83!c") === c(-403, -344, -343, -380, "0ar(") ? w[s(649, "x!gB", 704, 648, 636) + I(632, 679, "*LH2", 571, 621)](a) : _0x1e485d[I(592, 598, "6um5", 599, 641) + c(-372, -388, -434, -329, "JKOs")](_0x1bb634);
    const C = t[E(1195, 1166, 1110, 1184, "cpXy") + "e"](g);
    return t[s(643, "P2]e", 725, 706, 666) + "e"](C)[r(318, 361, "Dys&") + "h"]();
  }
  [pA(-586, -518, -576, "Y9(U") + OA("1ZfQ", 204, 212, 274) + OA("yLX2", 168, 164, 221) + "ge"](n) {
    const { Blob: t } = et.v4;
    function e(c, I, E, C, x) {
      return SA(c, I - 105, E - 146, C - 244);
    }
    const A = t[r(-46, -80, -10, "PPP6") + "y"](n);
    function o(c, I, E, C, x) {
      return zA(c - 159, I - 27, c - 316, C - 365, I);
    }
    function r(c, I, E, C, x) {
      return SA(C, I - 475, E - 371, c - -427);
    }
    function g(c, I, E, C, x) {
      return OA(E, I - 434, E - 38, x - -282);
    }
    if (A)
      if (a("xiI&", 1239, 1231) !== o(1081, "CDku", 1079, 1116)) {
        const { VideoStream: c } = _0x23d70d, I = c[a("muTV", 1327, 1286) + "y"](_0x2f5aee);
        if (I) throw _0x341368[e("BO49", 763, 651, 705) + e("1BmL", 654, 662, 659)](I);
        return c[a("1ZfQ", 1298, 1297) + "e"](_0x6e2d6c);
      } else throw w[o(1042, "w2AD", 1020, 1031) + g(-110, -89, "w1ct", -105, -104)](A);
    function a(c, I, E, C, x) {
      return pA(c - 358, I - 375, E - 1854, c);
    }
    const s = t[a("KZvC", 1182, 1234) + "e"](n);
    return t[o(1076, "dFWj", 1076, 1117) + "e"](s)[r(48, 67, 71, "xiI&") + "h"]();
  }
  async [pA(-529, -560, -527, "Y9(U") + pA(-558, -563, -626, "rOrx") + SA("l5Bn", 412, 405, 378) + SA("itI5", 334, 434, 375) + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(s, c, I, E, C) {
      return pA(s - 150, c - 252, I - 328, c);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A == null ? void 0 : A[a(-207, "41vo", -275)](({ brand: s, version: c }) => ({ name: s, version: c })) };
  }
  async [ve(1236, "%M[8", 1272, 1251, 1262) + SA("%M[8", 355, 426, 366) + pA(-538, -589, -555, "6um5") + OA("Acm3", 138, 178, 174) + pA(-513, -476, -533, "muTV") + ve(1182, "41vo", 1237, 1236, 1209) + SA("x!gB", 449, 356, 386) + "on"](n) {
    const t = await this[g(1326, "dFWj", 1411, 1359, 1371) + a(-76, -19, -13, -73, "R!*o") + g(1422, "cpXy", 1369, 1337, 1405) + a(122, 93, 157, 64, "dx!q") + r(901, 949, 959, "dFWj")](n[e("P2]e", 384, 415) + g(1273, "1BmL", 1390, 1359, 1342) + "ge"]);
    function e(s, c, I, E, C) {
      return OA(s, c - 211, I - 421, c - 183);
    }
    function A(s, c, I, E, C) {
      return pA(s - 89, c - 32, s - 424, C);
    }
    const o = {};
    function r(s, c, I, E, C) {
      return zA(s - 380, c - 381, I - 286, E - 72, E);
    }
    function g(s, c, I, E, C) {
      return zA(s - 46, c - 440, C - 636, E - 379, c);
    }
    function a(s, c, I, E, C) {
      return OA(C, c - 180, I - 283, c - -158);
    }
    return o[a(21, 65, 129, 104, "BO49")] = t, o[A(-172, -115, -211, -125, "R!*o") + a(-3, -14, -36, -59, "w2AD") + g(1331, "kK*^", 1331, 1359, 1325)] = n[e("&eGs", 441, 480) + r(1038, 984, 1013, "m7MP") + g(1280, "%M[8", 1309, 1336, 1292)], o;
  }
}
function uA(i, n) {
  const t = ci();
  return uA = function(e, A) {
    e = e - (-73 * 111 + 6850 + 1753);
    let o = t[e];
    if (uA.AKwviS === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", x = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? C += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = C.length; d < l; d++)
          x += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const c = function(I, E) {
        let C = [], x = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          C[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + C[Q] + E.charCodeAt(Q % E.length)) % 256, d = C[Q], C[Q] = C[x], C[x] = d;
        Q = 0, x = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, x = (x + C[Q]) % 256, d = C[Q], C[Q] = C[x], C[x] = d, l += String.fromCharCode(I.charCodeAt(h) ^ C[(C[Q] + C[x]) % 256]);
        return l;
      };
      uA.EXWHfG = c, i = arguments, uA.AKwviS = !0;
    }
    const g = t[-6209 + 887 * 7], a = e + g, s = i[a];
    return s ? o = s : (uA.qkLFMI === void 0 && (uA.qkLFMI = !0), o = uA.EXWHfG(o, A), i[a] = o), o;
  }, uA(i, n);
}
(function(i, n) {
  function t(g, a, s, c, I) {
    return uA(g - 943, a);
  }
  const e = i();
  function A(g, a, s, c, I) {
    return uA(c - -748, a);
  }
  function o(g, a, s, c, I) {
    return uA(c - 620, a);
  }
  function r(g, a, s, c, I) {
    return uA(s - 597, g);
  }
  for (; ; )
    try {
      if (-parseInt(o(1258, "Whzv", 1293, 1275, 1217)) / 1 + parseInt(o(1100, "(Te$", 1094, 1175, 1183)) / 2 + parseInt(A(-153, "(Te$", -167, -117, -57)) / 3 + parseInt(o(1254, "h@Sj", 1174, 1210, 1141)) / 4 * (-parseInt(t(1588, "mLt4", 1526, 1664, 1629)) / 5) + parseInt(r("0E&@", 1232, 1166, 1200, 1131)) / 6 * (parseInt(t(1536, "^$BA", 1473, 1601, 1464)) / 7) + parseInt(r("W^J*", 1279, 1267, 1286, 1246)) / 8 * (-parseInt(o(1047, "]Mg]", 1154, 1129, 1173)) / 9) + parseInt(A(-18, "Zl1Q", -58, -71, -61)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ci, -1879 * -409 + -1018795 + -27 * -44351);
function no(i, n, t, e, A) {
  return uA(t - 26, i);
}
function $e(i, n, t, e, A) {
  return uA(n - -282, i);
}
function ci() {
  const i = ["W5u8aG", "WR4xWRRcJCoX", "rsXtWQldQq", "FCk0kZNdTq", "WRtdIvhcMgC", "r8kGlSoRCa", "WO9cW7WnWQy", "WR86eXu", "umk2CCkXWPG", "W7ddHdVdT8or", "WP7cG1C/WQy", "WO3cLNmMWRu", "rtfuWO7dQW", "W5e9WOS", "WOLsbmkWWPO", "W6pcMCoLgtu", "tmkUBCo4W7O", "lCkHmG", "gCknW414W4Pcga", "eMD2", "W5m7WO8GWQm", "b3j+d8oU", "W6FdPvD8WRe", "WPOBWR3cLSom", "WR4fWOLxFa", "WOVdHqOCWQhcMCoemCk3WR4pW6ldRG", "WP42WOu3vG", "WPJcLLC", "C1ddUSoXWPe", "cSkdW6u6W4e", "W73dHIFdRCoq", "W7tcO8kWWQWg", "CmkrsCoWW5O", "ECkrs8ozW7O", "WRfcWO8", "WOOmWQVcHmor", "WPPhW5Wn", "ss9cWPZdUa", "kSkaW7a", "oNVcGK3dLG", "C8kvBI/dVG", "WOWXWOu", "wXddPmkhWQy", "WQhdS8oZW7HYBmoiWQiOsIldUCk+", "WPpcVCklzCoK", "WOTQW5ixWOq", "W49UtI4z", "WRRdKsCJWQu", "q8koW7bDW6y", "WRvMWOvyEa", "a8kiWRZcPSov", "WPFdS8k+vr8", "egfYaSoP", "DwPtp8o5", "W6pdVL1HWPa", "CSkcq8orW4W", "WQGDq0q", "fI5DWO7dP8kLaW", "WQDfW4/cV8oC", "W7JcO8k3WQuU", "lmoAhmkhWOVdNbvxFgldK8kgkW", "WP9mhSk1WPa", "eN5N", "aLVdQ8oZWQC", "s8k6h8oGuG", "W7zKm8oBEq", "umkgBCk+WOS", "wXBdPmkcWPS", "a1ldQ8oZWQm", "xexdU8oWWPe", "cSkiWRVcTmoD", "A8kks8oAW60", "W7xdGdZdVSoq", "WR7dLJu", "nv/cNmoElW", "uhpdTmoMWQK2W6S", "CSkcva", "t0H0u8oF", "W67cM210WQWhWOhcTLz0", "BCk5aCkgWRS", "WPBcU8kAsCom", "W4myWOldPSk9WPjpwJ/dQCoDWP7dTG", "umk3CSkWWO4", "ESkas8ogW5S", "WP82hrZdJG", "W7Hiv8ogja", "WP8GWPCLxW", "WPumW5/cTSo4", "W5Owt8oSWOhdNLvNW7a9", "lmoxhCkfWO7dKXjczvJdSSkGjW", "WQ08eq", "mxBdUSoVWPy", "igpcJ8ofpq", "kxVcGLZdGW", "WO43WOeXrW", "WP7cNM4VWQC", "WRZdKdeJWRy", "WOyZWQVcKCoe", "WRRdSIyTWRy", "kHpcV8kWW5VdQ8kOdsZdJMpcQW", "WRZdVfFcLNC", "WQVdHdSWWQ8", "WOeFWR3cJCoa", "W7VdLY3dVSoa", "W7FdQc3dQ8ov", "WR7dKe7cLNq", "pSkxW7FdQmo5", "nWxdKCkmWPm", "W7bDm8oluq", "WR7dHte", "W7TPzCoBnq", "zw8vW7ZdKa", "W5bcW5tcO8kS", "WPFcIKxdUSoA", "DSoXWQfmW5e", "W5ueWO8YWQq", "WOddICo1qL8", "WP/cU0C", "W7FdSYhdU8or", "WQpdU8o8W75/yCokWR4aAqVdSSk3", "WP3cK8kdsCoM", "vCoRWQJdK3e", "BSk5W4bOW4a", "W5BcU1PDW6C", "WPaYW7pcKmox", "WP/cU1ddSmoD", "WR92WP5eAq", "WOTDW4aGWOO", "oZddISkAWPK", "pa7dSCkgWPS", "W4FcQ8kWWQuF", "W4pdOW7cO8oacgddOmk6uG", "W4iSWPK0WRS", "W59jW7BdKmorcCklx2Wo", "mwmcW6ldSa", "yCkklY3dOW", "WPvpW5tcPCoO", "lgCiW7/dLG", "WOC1W6tcLmoN", "W50QhZXx", "W4rPwcek", "WOrQq3KgaWyPFGHRWPSt", "WOnlW4CcWOe", "W6lcJSkGW5BdH8k9W7dcNCo2EbxdMa", "WOaKWOm1qa", "smorWPa", "gmkhW6mYW6O", "WPZcGuyRWQa", "WQiRWQCXqW", "W6Pdza", "WRxdVfFcKNa", "W4mKWOmTWRi", "bmoekCoQW5xcH8kNFSk5W6rmWOtcPa", "WQ7dImoJWOFdNW", "W73dGqhdSSov", "W7n/i8orva", "hCksW7y", "D8k9bSohWRe", "CZLyWR3cMSoYWORcOSoZquXjyq", "pCkiWRZcPSoD", "pmkWn8k9ga", "WOLSeSkQWOy", "WR/dRCoJWO3cIW", "W4jOrdaD", "lCkFWQRcTmoa", "WQCEnCkDzCksWOxcP8opWQbMmSoq", "nG7dKCkKWPu", "W6ZdRcxdVSot", "W7hcR8k0", "W7jiDmoona", "zCovWPzNW6O", "nmkiW7FdUSo5", "WP1DW5ieWOa", "hCkbW7i", "a0/dVmoOWRy", "W6fzo8oEvW", "umkQWQVdK08", "sMjpj8ofWRni", "aN7dUSoMW6i", "qCkxoCoGsq"];
  return ci = function() {
    return i;
  }, ci();
}
function Dt(i, n, t, e, A) {
  return uA(t - -700, e);
}
function wt(i, n, t, e, A) {
  return uA(A - 23, i);
}
function as(i, n, t, e, A) {
  return uA(n - 717, e);
}
class Nx extends Gx {
  async [$e("]Mg]", 282) + $e("@p@(", 353) + wt("gRvZ", 480, 551, 546, 528)]({ onCaptureData: n, sessionToken: t, video: e }) {
    const A = n[a(696, 673, 623, "54Yy", 705)](J[c("MEMS", -24, -66, -83) + "AL"]), o = n[c("d^*w", -119, -78, -73)](J[r(829, 892, 963, 909, "r#m^")]) ?? n[c("d^*w", -119, -37, -144)](J[s(69, -96, 74, "FjYb", -11) + g(1584, 1514, 1605, 1518, "ISjz") + "AL"]);
    function r(x, d, l, Q, h) {
      return $e(h, d - 585);
    }
    function g(x, d, l, Q, h) {
      return wt(h, d - 216, l - 76, Q - 41, Q - 869);
    }
    function a(x, d, l, Q, h) {
      return wt(Q, d - 167, l - 318, Q - 118, h - 170);
    }
    function s(x, d, l, Q, h) {
      return $e(Q, h - -257);
    }
    function c(x, d, l, Q, h) {
      return wt(x, d - 269, l - 367, Q - 191, d - -681);
    }
    if (!A) throw new w(a(751, 839, 735, "v!rf", 774) + s(-25, -69, -72, "tl7]", 13) + g(1503, 1370, 1509, 1426, "FuJi") + s(-6, 106, -12, "r#m^", 26) + c("v!rf", -118, -163, -87) + r(935, 902, 812, 881, "^$BA") + r(938, 936, 975, 987, "7r*z") + a(741, 734, 906, "^$BA", 817) + g(1484, 1563, 1560, 1559, "NajJ"));
    if (!o) throw new w(g(1424, 1535, 1530, 1488, "MlvZ") + c("W^J*", -35, -79, -86) + a(698, 715, 683, "IATY", 719) + c("o4@A", -122, -88, -63) + a(937, 803, 905, "Whzv", 858) + r(874, 813, 796, 876, "X&Sg") + r(886, 972, 995, 927, "#jtx") + g(1377, 1367, 1425, 1455, "^Rf1") + c("Zl1Q", 3, 75, 64));
    const I = {};
    I[a(695, 700, 702, "p@rh", 720) + c("E&y4", -140, -187, -131) + s(-65, 41, 46, "d^*w", -17) + r(773, 860, 786, 892, "E&y4")] = A, I[a(843, 788, 772, "IATY", 766) + c("3]Rv", 2, 82, -65) + r(1041, 953, 884, 952, "TvO^") + a(710, 707, 755, "3]Rv", 746)] = o, I[c(")4t%", 13, 31, 77) + c("LPg$", -82, -170, -132) + "en"] = t;
    const E = await this[g(1524, 1536, 1474, 1452, "MEMS") + c("X&Sg", -78, -101, -106) + a(889, 801, 824, "gRvZ", 851) + g(1455, 1615, 1514, 1544, "x@EX") + "e"](I), C = await this[s(208, 224, 199, ")4t%", 137) + a(788, 782, 666, "o4@A", 754) + a(663, 657, 643, "0E&@", 707) + r(775, 841, 775, 930, "3]Rv")]({ metadata: E, neutralExpressionFaceImage: await ri(A[a(847, 823, 839, "gHKU", 837) + c("n6j$", 21, -18, 100) + "e"]), smileExpressionFaceImage: await ri(o[c("3]Rv", -60, -10, -11) + r(883, 810, 728, 851, "NajJ") + "e"]), video: e });
    return this[g(1481, 1378, 1355, 1424, "gHKU") + g(1327, 1459, 1393, 1398, "X&Sg") + a(623, 633, 775, "tl7]", 708) + s(165, 9, 6, "h@Sj", 82)](C);
  }
  async [wt("CW%@", 633, 689, 661, 641) + Dt(-101, -196, -180, "z5TN") + no("vixR", 690, 704) + as(1368, 1364, 1313, "tl7]")]({ metadata: n, neutralExpressionFaceImage: t, smileExpressionFaceImage: e, video: A }) {
    function o(h, m, k, y, G) {
      return no(y, m - 285, k - 567);
    }
    const { SmileLivenessContent: r } = et.v4, g = await this[o(1233, 1224, 1269, ")4t%") + o(1272, 1210, 1203, "h@Sj") + E(-193, -132, -126, -106, "NCho") + o(1138, 1223, 1220, "gHKU") + d(1319, "MlvZ", 1407, 1367, 1347)](t), a = await this[d(1363, "3]Rv", 1350, 1310, 1351) + d(1333, "Whzv", 1471, 1471, 1419) + E(-53, -68, -180, -91, "Dt#8") + d(1428, "IATY", 1407, 1398, 1418) + d(1217, "o4@A", 1327, 1336, 1291)](e), s = await this[o(1239, 1193, 1172, "%bnU") + d(1334, "NCho", 1325, 1260, 1261) + c("n6j$", 569, 653, 572, 618) + o(1116, 1176, 1136, "(Te$") + c("0E&@", 441, 476, 564, 526) + "e"](n);
    function c(h, m, k, y, G) {
      return Dt(h - 139, m - 186, G - 702, h);
    }
    const I = { neutralExpressionFaceImage: g, smileExpressionFaceImage: a, metadata: s, video: { streamH264: A ? this[c("d^*w", 749, 654, 627, 661) + d(1285, "qmo#", 1366, 1444, 1370) + c("n6j$", 604, 620, 661, 632) + d(1299, "o4@A", 1325, 1422, 1383) + E(-140, -27, -164, -116, "d^*w") + o(1028, 1080, 1112, "MlvZ")](A) : void 0 } };
    function E(h, m, k, y, G) {
      return no(G, m - 110, y - -749);
    }
    const C = r[Q(20, -38, "gRvZ") + "y"](I);
    if (C) throw w[E(-238, -268, -204, -178, "FjYb") + c("!H(t", 575, 579, 590, 570)](C);
    const x = r[d(1225, "mLt4", 1351, 1364, 1292) + "e"](I);
    function d(h, m, k, y, G) {
      return Dt(h - 383, m - 16, G - 1445, m);
    }
    const l = {};
    function Q(h, m, k, y, G) {
      return no(k, m - 429, h - -547);
    }
    return l[Q(142, 128, "gHKU") + E(-281, -157, -303, -221, "ISjz") + c("E&y4", 567, 599, 658, 641) + c("x@EX", 472, 494, 612, 560)] = x, this[c("Q$s@", 525, 614, 501, 553) + d(1263, "z5TN", 1410, 1302, 1339) + c(")4t%", 637, 524, 479, 564) + "ge"](l);
  }
  async [$e("h@Sj", 326) + $e("NajJ", 338) + Dt(-138, -169, -192, "7r*z") + Dt(-122, -76, -122, "z5TN") + "e"]({ neutralOnCaptureData: n, sessionToken: t, smileOnCaptureData: e }) {
    const A = [...n[C(-331, -394, -366, -309, "E&y4") + x(-437, -385, -518, -474, "]Mg]")][C(-371, -295, -335, -318, "mLt4") + x(-346, -331, -302, -400, "Zl1Q") + x(-391, -397, -329, -431, "NajJ") + h(960, 887, "FjYb") + m(504, 587, 593, "X&Sg") + h(896, 818, "CW%@") + l("(Te$", -349, -434)], ...e[x(-467, -518, -467, -393, "Zl1Q") + l("gRvZ", -243, -266)][C(-414, -501, -403, -413, "(Te$") + l("Zl1Q", -356, -312) + m(456, 501, 480, "LPg$") + C(-348, -283, -375, -285, "qmo#") + m(437, 497, 474, "mLt4") + l("0E&@", -392, -385) + C(-411, -374, -390, -455, "]Mg]")]], o = [...n[h(977, 1059, "n6j$") + x(-383, -465, -432, -340, "h@Sj")][h(1055, 1019, "NCho") + h(1039, 985, "W^J*") + l("n6j$", -307, -392)][h(981, 894, "FjYb")](({ detectedObject: y }) => y), ...e[h(984, 1037, "#jtx") + l("4$Go", -430, -405)][x(-349, -316, -285, -336, "vixR") + x(-385, -305, -358, -376, "FjYb") + h(1041, 1052, "^$BA")][x(-339, -262, -429, -413, "qmo#")](({ detectedObject: y }) => y)], r = qC(), g = await VC(), a = await this[h(998, 1081, "Q$s@") + C(-462, -465, -506, -429, "d^*w") + l("h@Sj", -263, -321) + C(-403, -314, -419, -378, ")4t%") + "ls"](r, g), { cameraProperties: s, croppedImageWithPosition: c } = n[x(-356, -347, -398, -383, "NCho") + h(918, 958, "gHKU")], I = await this[C(-349, -358, -357, -317, "TvO^") + l("LPg$", -423, -423) + h(1065, 1054, "4$Go") + m(521, 540, 467, "Dt#8") + C(-481, -529, -485, -398, "E&y4") + C(-415, -370, -404, -345, "^$BA") + h(1044, 1086, "54Yy") + "on"](c), E = { ...s };
    E[l("x@EX", -337, -259) + h(1059, 1024, "n6j$") + l("Zl1Q", -416, -337) + l("vixR", -358, -294) + m(576, 532, 538, "E&y4")] = I, E[l("8cTJ", -327, -348) + l("FjYb", -450, -390) + m(435, 517, 503, "]Mg]")] = a, E[m(570, 505, 434, "n6j$") + m(540, 559, 547, "X&Sg") + h(947, 884, "%bnU") + C(-329, -308, -363, -306, "3]Rv") + x(-326, -366, -326, -268, "(Te$") + m(712, 633, 608, "W^J*") + x(-311, -251, -323, -366, "ISjz")] = A;
    function C(y, G, S, U, Z) {
      return Dt(y - 42, G - 483, y - -285, Z);
    }
    E[C(-357, -307, -375, -268, "EUJU") + x(-402, -436, -364, -421, "FuJi") + m(655, 579, 637, "FjYb")] = o;
    function x(y, G, S, U, Z) {
      return no(Z, G - 479, y - -994);
    }
    const d = E;
    function l(y, G, S, U, Z) {
      return $e(y, S - -652);
    }
    const Q = {};
    Q[m(461, 519, 449, "mLt4") + C(-344, -394, -254, -262, "vixR") + "en"] = t;
    function h(y, G, S, U, Z) {
      return as(y - 320, y - -324, S - 115, S);
    }
    Q[h(943, 989, "CW%@")] = d;
    function m(y, G, S, U, Z) {
      return wt(U, G - 270, S - 396, U - 249, G - -39);
    }
    const k = Q;
    return this[l("n6j$", -311, -319) + h(997, 938, "8cTJ") + h(1002, 1062, "mLt4") + C(-393, -456, -368, -373, "Dt#8") + h(952, 951, "h@Sj") + "e"](k);
  }
}
class Rx {
  constructor(n) {
    p(this, "timeoutId");
    p(this, "dispatcher");
    this.dispatcher = n;
  }
  start(n = uE) {
    this.clear(), this.timeoutId = window.setTimeout(() => {
      this.dispatcher.dispatchTimedCaptureExecuted(), this.timeoutId = void 0;
    }, n);
  }
  clear() {
    this.timeoutId !== void 0 && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
  }
  isActive() {
    return this.timeoutId !== void 0;
  }
}
function ic(i, n) {
  const t = PA(n);
  V(() => {
    t.current = n;
  }, [n]), V(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function Fx(i, n) {
  const { handleAppStateChange: t } = MA(), e = Ee((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(P.COMPLETE), n(r, o);
  }, [n, t]);
  ic(i, e);
}
function vx(i) {
  return i !== null && typeof i == "object" && "neutralPhaseImageWithMetadata" in i && "smilePhaseImageWithMetadata" in i;
}
function Mx() {
  const { onComplete: i } = x0(), { handleError: n } = MA();
  function t(e, A) {
    try {
      if (!vx(e)) throw new w("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof w && n(o);
    }
  }
  Fx($n.ON_COMPLETE, t);
}
function Wx() {
  const { cameraService: i } = dt(), { assetsDirectoryPath: n, sessionToken: t } = x0(), { transactionCounting: e } = aI(), { analytics: A } = IC(), { phaseThresholds: o } = d0(), { handleAppStateChangeWithTransitionCheck: r, handleError: g } = MA(), [a, s] = cA();
  Mx(), V(() => {
    let I;
    async function E() {
      if (!i) return;
      const C = O0.getWorkerPath(pE, n), x = {};
      x.type = "module";
      const d = new Worker(new URL(C, import.meta.url), x), l = B0(d);
      I = await new l();
      const Q = new cx(), h = new DE(r0), m = new Nx(), k = new bE(), y = new Rx(h), G = new wE(), S = new fE().setAssetsDirectoryPath(n).setCameraService(i).setDetector(I).setDetectionFactory(Q).setDispatcher(h).setProtobuf(m).setAnalytics(A).setTransactionCounting(e).setSessionToken(t).setPhaseThresholds(o).setMedianScore(k).setTimedCapture(y).setLongCapture(G).build();
      try {
        s(S), r(P.RUNNING);
      } catch (U) {
        if (U instanceof Error) {
          g(w.fromError(U));
          return;
        }
      }
    }
    return E(), () => {
      r(P.WAITING), I && I[g0]();
    };
  }, [A, n, i, r, g, t, e, o]);
  const c = {};
  return c.controller = a, c;
}
function Lx({ children: i }) {
  const { controller: n } = Wx();
  return /* @__PURE__ */ b(tE, { controller: n, children: i });
}
function Ox({ initAppState: i, onError: n }) {
  const [t, e] = cA(i), [A, o] = cA(), [r, g] = cA(!1), a = Tt.Lower, s = PA(n);
  V(() => {
    s.current = n;
  }, [n]);
  const c = {};
  return c.redfin = a, c.appState = t, c.setAppState = e, c.error = A, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = g, c.onErrorRef = s, c;
}
function gs(i, n) {
  xt.getInstance().dispatchCustomEventOnChange(i, n);
}
function Jx(i, n) {
  xt.getInstance().dispatchCustomEventOnChange(i, n);
}
function Ux(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  xt.getInstance().dispatchCustomEventOnChange(i, e);
}
function Yx({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = Ox({
    initAppState: P.LOADING,
    onError: i
  }), s = Ee(
    (E) => {
      gs(Ne.STATE_CHANGED, { appState: P.ERROR, error: E }), a(!1), o.current(E), g(E), r(P.ERROR);
    },
    [a, o, g, r]
  ), c = Ee(
    (E) => {
      r((C) => {
        const x = typeof E == "function" ? E(C) : E;
        return gs(Ne.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), I = Ee(
    (E) => {
      c((C) => C === P.COMPLETE || C === P.LOADING && E !== P.RUNNING ? C : E);
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
function Tx() {
  return da() ? ig.MOBILE : ig.DESKTOP;
}
function Px({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = cA(Tx()), A = hA(() => {
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
  return /* @__PURE__ */ b(ba.Provider, { value: A, children: i });
}
function Hx(i) {
  const n = PA(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function Kx(i, n) {
  var t, e;
  return {
    size: {
      min: ((t = n == null ? void 0 : n.size) == null ? void 0 : t.min) ?? i.size.min,
      max: ((e = n == null ? void 0 : n.size) == null ? void 0 : e.max) ?? i.size.max
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
function ss(i, n) {
  var t, e;
  return {
    size: {
      min: ((t = n == null ? void 0 : n.size) == null ? void 0 : t.min) ?? i.size.min,
      max: ((e = n == null ? void 0 : n.size) == null ? void 0 : e.max) ?? i.size.max
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
function jx({ children: i, userThresholds: n }) {
  const t = Hx(n), e = hA(() => ({
    [J.NEUTRAL]: {
      mapper: Kx,
      presets: lE,
      userThresholds: t
    },
    [J.SMILE]: {
      mapper: ss,
      presets: Rg,
      userThresholds: t
    },
    [J.SMILE_MANUAL]: {
      mapper: ss,
      presets: Rg,
      userThresholds: t
    }
  }), [t]);
  return /* @__PURE__ */ b(Px, { thresholdConfigs: e, children: i });
}
const Nt = {};
Nt.AUTO_CAPTURE = "auto_capture", Nt.CAPTURE_FINISHED = "capture_finished", Nt.CAPTURE_STARTED = "capture_started", Nt.ESCALATION_TRIGGER = "escalation_trigger", Nt.LONG_CAPTURE_SMILE = "long_capture_smile";
const ho = Nt, Ue = {};
Ue.PALM = "palm_auto_capture", Ue.SMILE = "smile_liveness", Ue.DOCUMENT = "document_auto_capture", Ue.MAGNIFEYE = "magnifeye_liveness", Ue.EYE_GAZE = "eye_gaze_liveness", Ue.FACE = "face_auto_capture", Ue.MULTI_RANGE = "multi_range_liveness";
const _x = Ue, qx = async () => WebAssembly.validate(new Uint8Array([9 * 207 + 1129 + 4 * -748, 8266 + -2538 * 2 + -3093, 1 * 6259 + -4783 + 1 * -1361, -9911 + -1 * -452 + 9568, 9 * -653 + 5897 + -19, 1718 + 1282 * 6 + 1 * -9410, 191 * 26 + 19 * -8 + -4814, 6277 + 5940 * -1 + 337 * -1, -1 * -5283 + 22 * 317 + -12256, -8811 + -2 * 4451 + 1 * 17718, -5503 * 1 + 8871 * 1 + -3367, 1 * 647 + 9445 + -476 * 21, 0, 1, -4842 + -82 * 109 + 13903, -8929 + 1979 * -2 + 1 * 12890, -12518 + 6260 * 2, -9961 + -1 * 9803 + 67 * 295, -2331 + 259 * 9, -1079 + -363 * -3, 8770 + -7082 * 1 + -1678, 2717 + -1 * 4251 + 1535, -2467 * 1 + 9978 + -7503, -680 * -10 + -1 * -137 + -1 * 6937, -868 + 921 * -10 + 10143, 1781 * -2 + 5 * 85 + 3137 * 1, 253, 12698 + 1 * -12683, 3393 + -2230 * -4 + 3015 * -4, 3056 + 87 * -34, 5520 + -5509 * 1]));
function Vx() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-8803 + 151 * 1 + 8668);
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
  return i > 131 * -529 + 24 * 2115 + -78539 * -1 ? ">1m" : "" + i;
}
function $x(i) {
  return i > 895 + 7 * 1277 + -4 * 2456 ? ">10" : "" + i;
}
const ta = (i) => i ? i <= -313 * -1 + 5081 + -5393 ? Math.round(i * (-9437 + -1 * 8433 + 3578 * 5)) / 20 : Math.round(i / 50) * (-9335 + 4315 * 1 + -10 * -507) : 5027 + -18 * -486 + 13775 * -1;
function Ad(i) {
  return i ? Math.round(i / (3413 * -1 + 3070 + 2843)) * 2500 : 1229 * 7 + 8066 + 79 * -211;
}
const ed = (i) => i ? Math.round(i / (-2 * -4996 + 2848 + -12830)) * (2 * -4135 + -149 * 41 + 14389) : -16 * 304 + -4693 + 19 * 503, td = (i) => Math.round(i * 2) / (20 * -452 + -1909 * -1 + -1019 * -7);
async function Is() {
  return await qx() ? ng.SIMD : ng.NO_SIMD;
}
class od {
  constructor() {
    p(this, "apiKey");
    p(this, "sessionId");
    p(this, "distinctId");
    p(this, "component");
    p(this, "platform");
    p(this, "versionName");
    p(this, "applicationId");
    this.platform = "web", this.versionName = iI(), this.applicationId = rI(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(ho.CAPTURE_STARTED));
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
const An = new od();
class nd {
  constructor(n) {
    p(this, "posthog", An);
    p(this, "component");
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: iI(), ...n };
  }
  init(n, t) {
    const e = Zx(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, An.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    An.sendEvent(ho.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    An.sendEvent(ho.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -8868 * 1 + -4915 + -14033 * -1 ? ed(n) : ta(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: $x(o || 4712 + 9 * -251 + -2453), firstHiccup: Xx(Ad(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class id extends nd {
  constructor() {
    super(_x.SMILE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(J.NEUTRAL), e = n.get(J.SMILE) ?? n.get(J.SMILE_MANUAL);
    if (!t || !e) return;
    const A = td(t.metadata.averageFps + e.metadata.averageFps) / (-1 * 1427 + -4239 + 1 * 5668), o = t.metadata.captureProcessTime, r = e.metadata.captureProcessTime, g = this.parsePerformanceCheckup(t.metadata.optCheck, t.metadata.performanceCheckup), a = this.createSegmentation({ faceSize: ta(e.detectedObject.faceSize), confidence: ta(t.detectedObject.confidence), imageResolution: t.resultImage.width + "x" + t.resultImage.height, averageFps: A, captureTimeNeutral: o, captureTimeSmile: r, camera: zx(t.metadata.deviceName, t.metadata.facingMode), instructionSet: await Is(), ...g });
    this.posthog.sendEvent(ho.CAPTURE_FINISHED, a);
  }
  async trackLongCapture(n) {
    const { averageExpressionScore: t, averageFps: e, customer: A, durationMs: o, imageResolution: r } = n, g = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await Is(), expressionScore: t, durationMs: o, ...A && { customer: A } });
    this.posthog.sendEvent(ho.LONG_CAPTURE_SMILE, g);
  }
}
const rd = new id();
function ka(i, n) {
  const t = PA(n);
  V(() => {
    t.current = n;
  }, [n]), V(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function ad({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = MA(), e = Ee((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: g } } } = o.detail;
    if (!(i && !g) && r.includes(JA.FACE_NOT_PRESENT)) {
      if (n !== P.RUNNING) return;
      setTimeout(() => {
        t(P.LOADING);
      }, 0), setTimeout(() => {
        t(P.RUNNING);
      }, 3301 * -2 + -4892 + 11494);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function gd(i, n) {
  const { handleFaceDetection: t } = ad(n);
  ka(i, t);
}
function Sa(i, n) {
  function t(e) {
    n(e);
  }
  ka(i, t);
}
function sd(i) {
  const { appState: n, handleAppStateChange: t } = MA();
  function e() {
    n !== P.LOADING && t(P.RUNNING);
  }
  function A(o) {
    var r;
    ((r = o.detail) == null ? void 0 : r["instruction"]) === bn.CONTINUE_DETECTION && e();
  }
  Sa(i, A);
}
const Id = () => typeof document < "u" && document.hasFocus();
function cd(i = {}) {
  const n = PA(i), t = PA(Id()), [e, A] = cA(t.current);
  V(() => {
    n.current = i;
  }), V(() => {
    function r(c) {
      t.current = c, A(c);
    }
    function g() {
      Promise.resolve().then(() => {
        var c, I, E, C;
        !t.current && ((I = (c = n.current).onFocus) == null || I.call(c), (C = (E = n.current).onChange) == null || C.call(E, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var c, I, E, C;
        t.current && ((I = (c = n.current).onBlur) == null || I.call(c), (C = (E = n.current).onChange) == null || C.call(E, !1)), r(!1);
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
function Cd(i = {}) {
  const { appState: n } = MA();
  cd({ onBlur: () => {
    var t;
    n === P.WAITING || n === P.COMPLETE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === P.WAITING || n === P.COMPLETE || (t = i.onFocus) == null || t.call(i);
  } });
}
function Bd(i) {
  const { controller: n } = i0(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = MA();
  Cd({ onBlur: () => {
    e(P.LOADING), A(!1);
  }, onFocus: () => {
    e(P.RUNNING), A(!0);
  } }), sd(i.CONTROL), V(() => {
    t === P.COMPLETE && (n == null || n.reset()), t === P.LOADING && (n == null || n.reset()), t === P.WAITING && (n == null || n.reset()), t === P.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function Qd(i) {
  const [n, t] = cA(), e = Ee((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  ka(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function Ed() {
  return Qd(Ne.PHASE_CHANGED);
}
function xd() {
  Bd(Ne);
  const { currentPhaseName: i } = Ed(), n = {};
  n.skipOutsideOfCandidateSelection = i === J.NEUTRAL, gd(Ne.DETECTION_CHANGED, n);
}
const dd = Yo.div`
  position: relative;
`, ld = Yo.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function ud(i) {
  const { cameraService: n } = dt(), { handleAppStateChange: t, handleError: e } = MA();
  async function A() {
    if (n) {
      t(P.LOADING);
      try {
        await n.switchCamera(), t(P.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(w.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    var g;
    ((g = r.detail) == null ? void 0 : g["instruction"]) === bn.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  Sa(i, o);
}
const hd = (i) => i === vs.CONTROL ? !da() : !0;
function fd(i) {
  const { cameraService: n } = dt(), { isCameraReady: t } = MA(), [e, A] = cA(), o = hA(() => {
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
      case bn.TOGGLE_MIRROR:
        r();
        break;
      case bn.SWITCH_CAMERA:
        g();
        break;
      default:
        return;
    }
  }
  Sa(i, a);
  const s = {};
  return s.shouldCameraMirror = o, s;
}
function pd(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  V(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, Jx(i, A);
  }, [t, e, i]);
}
function md(i) {
  const { cameraResolution: n } = dt(), { shouldCameraMirror: t } = fd(i.CONTROL);
  ud(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, pd(i.CAMERA_PROPS_CHANGED, e), V(() => () => {
    xt.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const yd = Yo.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Dd = Yo.div`
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
const bd = Ca(
  ({ detectionDetails: i, isImageMirror: n }, t) => wd() ? (console.log(i), /* @__PURE__ */ b(re, { children: [
    /* @__PURE__ */ b(yd, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ b(Dd, { children: /* @__PURE__ */ b("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function kd({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = dt(), { redfin: r } = Ei(), g = PA(null);
  if (V(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, cC(g.current);
    const d = ii(o), l = lC(o);
    qi(g.current, d, "lime"), qi(g.current, l, "blue"), NE(g.current, i.processedImage.detection), Eo(g.current, i.processedImage.detection.leftEye.center, "cyan"), Eo(g.current, i.processedImage.detection.rightEye.center, "cyan"), Eo(g.current, i.processedImage.detection.mouth.center, "cyan"), RE(g.current, i.processedImage.detection, o);
    const Q = e.edgeDistanceToImageShorterSideRatio;
    if (RC(Q)) {
      const h = J0(
        o,
        Q.min,
        d
      );
      qi(g.current, h, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: s,
    processedImage: { detection: c, instructionCode: I, invalidValidators: E, isEscalated: C }
  } = i, x = {
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
    "Invalid validators": E,
    "Component version": "8.0.1",
    "SAM version": n,
    "Escalated instruction": C,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ b(
    bd,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function Sd() {
  return i0();
}
function Gd() {
  const [i, n] = cA(void 0), t = Ee((A) => {
    n(A.detail);
  }, []);
  ic(Ne.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Nd = Ca(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = Gd(), { controller: A } = Sd(), { phaseThresholds: o, thresholdsPreset: r } = d0(), { appState: g } = MA(), a = A == null ? void 0 : A.getCurrentDetectionName();
  if (a === void 0 || g !== P.RUNNING)
    return null;
  const s = o[a];
  return /* @__PURE__ */ b("div", { ref: t, children: /* @__PURE__ */ b(
    kd,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: L0,
      shouldCameraMirror: n,
      thresholds: s,
      thresholdsPreset: r
    }
  ) });
});
function Rd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Fd(i, n) {
  const [t, e] = cA(!1), A = () => e((g) => !g), o = "" + t;
  Zt(() => {
    function g() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, I.observe(i.current, E), I;
    }
    function a() {
      var C;
      if (!((C = i.current) != null && C["parentElement"])) return;
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
function Md({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = PA(null), { key: o } = Fd(A, t);
  return /* @__PURE__ */ b("div", { ref: A, style: vd, children: /* @__PURE__ */ b("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
  ] }) }, o);
}
function Wd({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = uC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ b(
    Md,
    {
      cutOut: i || /* @__PURE__ */ b(Rd, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Ld({ debugLayerRef: i }) {
  const { appState: n } = MA(), { cameraResolution: t } = dt(), { redfin: e } = MA(), A = t && e === Tt.Lower, o = n !== P.RUNNING;
  return A ? /* @__PURE__ */ b(
    Wd,
    {
      fullOverlay: o,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Od({ children: i, shouldCameraMirror: n }) {
  const t = PA(null);
  return /* @__PURE__ */ b(re, { children: [
    /* @__PURE__ */ b(Ld, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ b(Nd, { ref: t, shouldCameraMirror: n })
  ] });
}
function Jd() {
  const { videoRef: i } = dt(), { isCameraReady: n } = MA(), { shouldCameraMirror: t } = md(Ne);
  return /* @__PURE__ */ b(Od, { shouldCameraMirror: t, children: /* @__PURE__ */ b(
    ld,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: QC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Ud(i, n) {
  V(() => {
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
  const n = PA(null);
  return Ud(n, Ne.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ b(dd, { ref: n, children: i });
}
function Td() {
  return xd(), /* @__PURE__ */ b(Yd, { children: /* @__PURE__ */ b(Jd, {}) });
}
function Pd({ configuration: i }) {
  if (i)
    return /* @__PURE__ */ b(OQ, { target: i.styleTarget, children: /* @__PURE__ */ b(eE, { configuration: i, children: /* @__PURE__ */ b(jx, { userThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ b(wB, { children: /* @__PURE__ */ b(
      NB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: RB.SMILE,
        children: /* @__PURE__ */ b(
          WC,
          {
            value: Yx({
              onError: i.onError
            }),
            children: /* @__PURE__ */ b(MC, { analytics: rd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ b(QB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ b(Lx, { children: /* @__PURE__ */ b(Us, { children: /* @__PURE__ */ b(Td, {}) }) }) }) })
          }
        )
      }
    ) }) }) }) });
}
mc(Pd, "x-dot-smile-liveness", ["configuration"]);
