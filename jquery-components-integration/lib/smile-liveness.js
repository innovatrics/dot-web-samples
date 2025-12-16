var sc = Object.defineProperty;
var Ra = (i) => {
  throw TypeError(i);
};
var Ic = (i, n, t) => n in i ? sc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var p = (i, n, t) => Ic(i, typeof n != "symbol" ? n + "" : n, t), Fa = (i, n, t) => n.has(i) || Ra("Cannot " + t);
var y = (i, n, t) => (Fa(i, n, "read from private field"), t ? t.call(i) : n.get(i)), O = (i, n, t) => n.has(i) ? Ra("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), F = (i, n, t, e) => (Fa(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Oo, M, us, tt, va, hs, fs, ps, oa, rr, ar, ms, Eo = {}, ys = [], cc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Jo = Array.isArray;
function Be(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function na(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function vA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -1502 * -1 + 7759 * 1 + -1 * 9259 && (r.children = arguments.length > 537 * -17 + 43 * 79 + 155 * 37 ? Oo.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return Io(i, r, e, A, null);
}
function Io(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++us, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && M.vnode != null && M.vnode(r), r;
}
function Cc() {
  var i = {};
  return i.current = null, i;
}
function ie(i) {
  return i.children;
}
function oe(i, n) {
  this.props = i, this.context = n;
}
function Lt(i, n) {
  if (n == null) return i.__ ? Lt(i.__, i.__i + 1) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Lt(i) : null;
}
function Ds(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -6982 * 1 + 5482 * 1 + 1500; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Ds(i);
  }
}
function gr(i) {
  (!i.__d && (i.__d = !0) && tt.push(i) && !wn.__r++ || va != M.debounceRendering) && ((va = M.debounceRendering) || hs)(wn);
}
function wn() {
  for (var i, n, t, e, A, o, r, g = 8945 + 33 * 207 + -15775; tt.length; ) tt.length > g && tt.sort(fs), i = tt.shift(), g = tt.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Be({}, e)).__v = e.__v + (6235 + -3356 * -1 + -9590), M.vnode && M.vnode(t), ia(n.__P, t, e, n.__n, n.__P.namespaceURI, 2 * 3572 + -2054 * -2 + -11220 & e.__u ? [A] : null, o, A ?? Lt(e), !!(-4992 + -45 * -131 + 13 * -67 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, ks(o, t, r), t.__e != A && Ds(t)));
  wn.__r = -107 * -29 + 4967 * 2 + 13037 * -1;
}
function ws(i, n, t, e, A, o, r, g, a, s, B) {
  var I, x, c, E, d, l, Q = e && e.__k || ys, h = n.length;
  for (a = Bc(t, n, Q, a, h), I = -87 * 84 + -4912 + 12220; I < h; I++) (c = t.__k[I]) != null && (x = c.__i == -1 ? Eo : Q[c.__i] || Eo, c.__i = I, l = ia(i, c, x, A, o, r, g, a, s, B), E = c.__e, c.ref && x.ref != c.ref && (x.ref && ra(x.ref, null, c), B.push(c.ref, c.__c || E, c)), d == null && E != null && (d = E), -8753 * -1 + 6930 + -15679 & c.__u || x.__k === c.__k ? a = bs(c, a, i) : typeof c.type == "function" && l !== void 0 ? a = l : E && (a = E.nextSibling), c.__u &= -7);
  return t.__e = d, a;
}
function Bc(i, n, t, e, A) {
  var o, r, g, a, s, B = t.length, I = B, x = 401 * 19 + 7332 + 14951 * -1;
  for (i.__k = new Array(A), o = 2371 + 62 * -136 + 551 * 11; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + x, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Io(null, r, null, null, null) : Jo(r) ? Io(ie, { children: r }, null, null, null) : r.constructor == null && r.__b > -1 * -9326 + 1 * 3138 + -12464 ? Io(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (17 * -257 + 1721 * -1 + 6091 * 1), g = null, (s = r.__i = Qc(r, t, a, I)) != -1 && (I--, (g = t[s]) && (g.__u |= 11 * 223 + -2 * -4969 + -953 * 13)), g == null || g.__v == null ? (s == -1 && (A > B ? x-- : A < B && x++), typeof r.type != "function" && (r.__u |= -2138 + -1 * -4717 + -2575)) : s != a && (s == a - (1 * 2911 + 7540 + -10 * 1045) ? x-- : s == a + (-1978 + 1979 * 1) ? x++ : (s > a ? x-- : x++, r.__u |= -5102 + -1 * -554 + -4552 * -1))) : i.__k[o] = null;
  if (I)
    for (o = -12 * 421 + 6666 * -1 + 11718; o < B; o++) (g = t[o]) != null && (9933 + -262 * -2 + -10455 & g.__u) == 0 && (g.__e == e && (e = Lt(g)), Gs(g, g));
  return e;
}
function bs(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 0; e && A < e.length; A++) e[A] && (e[A].__ = i, n = bs(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Lt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 9723 + 922 * -1 + -8793 == n.nodeType);
  return n;
}
function Ge(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Jo(i) ? i.some(function(t) {
    Ge(t, n);
  }) : n.push(i)), n;
}
function Qc(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && -3061 + -1 * 3853 + 6914 == (2 & a.__u)) return t;
  if (e > (a != null && -34 * 193 + -4926 + 11488 == (-9171 + 1 * -349 + 4761 * 2 & a.__u) ? -4455 * 2 + -197 * -12 + -1 * -6547 : -8864 + 4432 * 2)) for (A = t - (-7639 * -1 + -6427 + -1 * 1211), o = t + (-564 * -3 + -2 + -1689); A >= -3115 + -94 * -7 + -273 * -9 || o < n.length; ) {
    if (A >= -4171 + -2 * 4708 + -13587 * -1) {
      if ((a = n[A]) && -3134 + -4061 * -2 + 1 * -4988 == (-1840 + 6 * 307 & a.__u) && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && (-1 * -9627 + 1 * -2683 + -2 * 3471 & a.__u) == 0 && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function Ma(i, n, t) {
  n[-3893 + 9377 * -1 + 13270] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || cc.test(n) ? t : t + "px";
}
function Ho(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Ma(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Ma(i.style, n, t[n]);
    }
  else if (n[0] == "o" && n[1369 * -6 + 4858 * 1 + 373 * 9] == "n") o = n != (n = n.replace(ps, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(-19483 + 9 * 2165) : n.slice(7446 + 79 * 52 + -11552), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = oa, i.addEventListener(n, o ? ar : rr, o)) : i.removeEventListener(n, o ? ar : rr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[4] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -4091 + 4049 * 1 + 43 == t ? "" : t));
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
  var B, I, x, c, E, d, l, Q, h, m, b, S, G, k, T, q, ae, _A = n.type;
  if (n.constructor != null) return null;
  243 * 38 + -2300 * 1 + -6806 & t.__u && (a = !!(-7232 + 454 * 16 & t.__u), o = [g = n.__e = t.__e]), (B = M.__b) && B(n);
  A: if (typeof _A == "function") try {
    if (Q = n.props, h = "prototype" in _A && _A.prototype.render, m = (B = _A.contextType) && e[B.__c], b = B ? m ? m.props.value : B.__ : e, t.__c ? l = (I = n.__c = t.__c).__ = I.__E : (h ? n.__c = I = new _A(Q, b) : (n.__c = I = new oe(Q, b), I.constructor = _A, I.render = xc), m && m.sub(I), I.props = Q, I.state || (I.state = {}), I.context = b, I.__n = e, x = I.__d = !(61 * -12 + 8699 + -7967), I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && _A.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = Be({}, I.__s)), Be(I.__s, _A.getDerivedStateFromProps(Q, I.__s))), c = I.props, E = I.state, I.__v = n, x) h && _A.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && _A.getDerivedStateFromProps == null && Q !== c && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, b), !I.__e && I.shouldComponentUpdate != null && !(1798 + 3 * -599) === I.shouldComponentUpdate(Q, I.__s, b) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(-1 * 8669 + 4 * 1731 + 1746)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(qe) {
          qe && (qe.__ = n);
        }), S = 405 * 13 + -1982 * -4 + -13193; S < I._sb.length; S++) I.__h.push(I._sb[S]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, b), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(c, E, d);
      });
    }
    if (I.context = b, I.props = Q, I.__P = i, I.__e = !(-4 * -1271 + 7780 * 1 + -19 * 677), G = M.__r, k = 0, h) {
      for (I.state = I.__s, I.__d = !(-1 * -5059 + 3036 + -19 * 426), G && G(n), B = I.render(I.props, I.state, I.context), T = 1 * 6695 + 64 * -6 + -6311; T < I._sb.length; T++) I.__h.push(I._sb[T]);
      I._sb = [];
    } else do
      I.__d = !(-9902 + 5337 * 1 + -1522 * -3), G && G(n), B = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++k < 3 * -3154 + 271 * 3 + 8674);
    I.state = I.__s, I.getChildContext != null && (e = Be(Be({}, e), I.getChildContext())), h && !x && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(c, E)), q = B, B != null && B.type === ie && B.key == null && (q = Ss(B.props.children)), g = ws(i, Jo(q) ? q : [q], n, t, e, A, o, r, g, a, s), I.base = n.__e, n.__u &= -(-13 * -706 + -1 * -9869 + -18886), I.__h.length && r.push(I), l && (I.__E = I.__ = null);
  } catch (qe) {
    if (n.__v = null, a || o != null)
      if (qe.then) {
        for (n.__u |= a ? -2905 * -1 + -245 + -125 * 20 : -491 + 1 * 619; g && 1 * 8299 + 2513 + 146 * -74 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (ae = o.length; ae--; ) na(o[ae]);
    else n.__e = t.__e, n.__k = t.__k;
    M.__e(qe, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = Ec(t.__e, n, t, e, A, o, r, a, s);
  return (B = M.diffed) && B(n), 1 * 1527 + -8328 + -1 * -6929 & n.__u ? void 0 : g;
}
function ks(i, n, t) {
  for (var e = 1 * -3229 + 2 * -1285 + 5799; e < t.length; e++) ra(t[e], t[++e], t[++e]);
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
function Ss(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 8922 + -41 * -90 + -12612 ? i : Jo(i) ? i.map(Ss) : Be({}, i);
}
function Ec(i, n, t, e, A, o, r, g, a) {
  var s, B, I, x, c, E, d, l = t.props, Q = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = -7805 + -1062 * -5 + 2495; s < o.length; s++) if ((c = o[s]) && "setAttribute" in c == !!h && (h ? c.localName == h : 1783 * -2 + 1201 + 2368 == c.nodeType)) {
      i = c, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(Q);
    i = document.createElementNS(A, h, Q.is && Q), g && (M.__m && M.__m(n, o), g = !1), o = null;
  }
  if (h == null) l === Q || g && i.data == Q || (i.data = Q);
  else {
    if (o = o && Oo.call(i.childNodes), l = t.props || Eo, !g && o != null)
      for (l = {}, s = 0; s < i.attributes.length; s++) l[(c = i.attributes[s]).name] = c.value;
    for (s in l) if (c = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = c;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        Ho(i, s, null, c, A);
      }
    }
    for (s in Q) c = Q[s], s == "children" ? x = c : s == "dangerouslySetInnerHTML" ? B = c : s == "value" ? E = c : s == "checked" ? d = c : g && typeof c != "function" || l[s] === c || Ho(i, s, c, l[s], A);
    if (B) g || I && (B.__html == I.__html || B.__html == i.innerHTML) || (i.innerHTML = B.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), ws(n.type == "template" ? i.content : i, Jo(x) ? x : [x], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && Lt(t, 191 * 2 + -2495 + 2113 * 1), g, a), o != null)
      for (s = o.length; s--; ) na(o[s]);
    g || (s = "value", h == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[s] || h == "progress" && !E || h == "option" && E != l[s]) && Ho(i, s, E, l[s], A), s = "checked", d != null && d != i[s] && Ho(i, s, d, l[s], A));
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
function Gs(i, n, t) {
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
    for (A = -7530 + -1 * -1945 + 5585; A < e.length; A++) e[A] && Gs(e[A], n, t || typeof i.type != "function");
  t || na(i.__e), i.__c = i.__ = i.__e = void 0;
}
function xc(i, n, t) {
  return this.constructor(i, t);
}
function _e(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), M.__ && M.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], ia(n, i = (!e && t || n).__k = vA(ie, null, [i]), A || Eo, Eo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Oo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), ks(o, i, r);
}
function aa(i, n) {
  _e(i, n, aa);
}
function ga(i, n, t) {
  var e, A, o, r, g = Be({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > -9539 * 1 + 166 + 9375 && (g.children = arguments.length > -2801 + 23 * -274 + 9106 ? Oo.call(arguments, 2) : t), Io(i.type, g, e || i.key, A || i.ref, null);
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
  return n.__c = "__cC" + ms++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Oo = ys.slice, M = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, us = 0, oe.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Be({}, this.state), typeof i == "function" && (i = i(Be({}, t), this.props)), i && Be(t, i), i != null && this.__v && (n && this._sb.push(n), gr(this));
}, oe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), gr(this));
}, oe.prototype.render = ie, tt = [], hs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, fs = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, wn.__r = 0, ps = /(PointerCapture)$|Capture$/i, oa = -113 * -74 + 2907 + 1 * -11269, rr = Wa(!1), ar = Wa(!0), ms = 7 * 617 + 1703 * 2 + 1 * -7725;
function sa() {
  return (sa = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var dc = ["context", "children"];
function lc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = -4 * 2272 + -1285 + 41 * 253; r < a.length; r++) A.indexOf(o = a[r]) >= -797 + 267 * 1 + 106 * 5 || (g[o] = e[o]);
    return g;
  }(i, dc);
  return ga(n, t);
}
function uc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = vA(lc, sa({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (3 * 2354 + 1068 + 43 * -189 === e.nodeType) return e.data;
    if (-28 + -1 * 7589 + 2 * 3809 !== e.nodeType) return null;
    var o = [], r = {}, g = 0, a = e.attributes, s = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[Ns(a[g].name)] = a[g].value);
    for (g = s.length; g--; ) {
      var B = t(s[g], null), I = s[g].slot;
      I ? r[I] = vA(La, { name: I }, B) : o[g] = B;
    }
    var x = A ? vA(La, null, o) : o;
    return vA(A || e.nodeName.toLowerCase(), r, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? aa : _e)(this._vdom, this._root);
}
function Ns(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function hc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Ns(i)] = t, this._vdom = ga(this._vdom, e), _e(this._vdom, this._root);
  }
}
function fc() {
  _e(this._vdom = null, this._root);
}
function La(i, n) {
  var t = this;
  return vA("slot", sa({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function pc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = uc, A.prototype.attributeChangedCallback = hc, A.prototype.disconnectedCallback = fc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var mc = -9516 + 1045 * -6 + -1754 * -9;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var s = {};
  s.type = i, s.props = a, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --mc, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var B = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return M.vnode && M.vnode(B), B;
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
const en = {};
en.CONTINUE_DETECTION = "continue-detection", en.SWITCH_CAMERA = "switch-camera", en.TOGGLE_MIRROR = "toggle-mirror";
const bn = en, sr = {};
sr.FIRST_FRAME = "first-frame", sr.FIRST_VALID_FRAME = "first-valid-frame";
const tn = sr, Rs = {};
Rs.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ir = Rs;
var Fs = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(Fs || {}), yc = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(yc || {}), Dc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Dc || {});
const pe = {};
pe.DETECTION_CHANGED = "smile-auto-capture:detection-changed", pe.CAMERA_PROPS_CHANGED = "smile-auto-capture:camera-props-changed", pe.CONTROL = "smile-auto-capture:control", pe.INSTRUCTION_CHANGED = "smile-auto-capture:instruction-changed", pe.INSTRUCTION_ESCALATED = "smile-auto-capture:instruction-escalated", pe.VIDEO_ELEMENT_SIZE = "smile-auto-capture:video-element-size", pe.STATE_CHANGED = "smile-auto-capture:state-changed", pe.PHASE_CHANGED = "smile-auto-capture:phase-changed";
const Ne = pe;
var wc = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(wc || {}), bc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(bc || {});
const me = {};
me.CANDIDATE_SELECTION = "candidate_selection", me.DOCUMENT_CENTERING = "document_centering", me.DOCUMENT_NOT_PRESENT = "document_not_present", me.DOCUMENT_TOO_FAR = "document_too_far", me.SHARPNESS_TOO_LOW = "sharpness_too_low", me.BRIGHTNESS_TOO_LOW = "brightness_too_low", me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", me.HOTSPOTS_PRESENT = "hotspots_present";
const Ze = me, ze = {};
ze.isPresent = Ze.DOCUMENT_NOT_PRESENT, ze.isNotSmall = Ze.DOCUMENT_TOO_FAR, ze.isNotOutOfBounds = Ze.DOCUMENT_CENTERING, ze.isSharp = Ze.SHARPNESS_TOO_LOW, ze.isNotDim = Ze.BRIGHTNESS_TOO_LOW, ze.isNotBright = Ze.BRIGHTNESS_TOO_HIGH, ze.noHotspots = Ze.HOTSPOTS_PRESENT;
const Dt = {};
Dt.LOADING = "loading", Dt.ERROR = "error", Dt.WAITING = "waiting", Dt.RUNNING = "running", Dt.COMPLETE = "complete";
const P = Dt, vs = {};
vs.EYE_NOT_PRESENT = "eye_not_present";
const Ot = vs, GA = {};
GA.CANDIDATE_SELECTION = "candidate_selection", GA.FACE_TOO_CLOSE = "face_too_close", GA.FACE_TOO_FAR = "face_too_far", GA.FACE_CENTERING = "face_centering", GA.FACE_NOT_PRESENT = "face_not_present", GA.SHARPNESS_TOO_LOW = "sharpness_too_low", GA.BRIGHTNESS_TOO_LOW = "brightness_too_low", GA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", GA.DEVICE_PITCHED = "device_pitched", GA.LEFT_EYE_NOT_PRESENT = "left_" + Ot.EYE_NOT_PRESENT, GA.RIGHT_EYE_NOT_PRESENT = "right_" + Ot.EYE_NOT_PRESENT, GA.MOUTH_NOT_PRESENT = "mouth_not_present", GA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", GA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const LA = GA, HA = {};
HA.isPresent = LA.FACE_NOT_PRESENT, HA.isNotPitched = LA.DEVICE_PITCHED, HA.isNotSmall = LA.FACE_TOO_FAR, HA.isNotLarge = LA.FACE_TOO_CLOSE, HA.isNotOutOfBounds = LA.FACE_CENTERING, HA.isNotDim = LA.BRIGHTNESS_TOO_LOW, HA.isNotBright = LA.BRIGHTNESS_TOO_HIGH, HA.isSharp = LA.SHARPNESS_TOO_LOW, HA.isLeftEyePresent = LA.LEFT_EYE_NOT_PRESENT, HA.isRightEyePresent = LA.RIGHT_EYE_NOT_PRESENT, HA.isMouthPresent = LA.MOUTH_NOT_PRESENT, HA.isMouthScoreNotTooHigh = LA.MOUTH_SCORE_TOO_HIGH, HA.isMouthScoreNotTooLow = LA.MOUTH_SCORE_TOO_LOW;
var kc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(kc || {});
const rA = {};
rA.CANDIDATE_SELECTION = "candidate_selection", rA.FACE_TOO_CLOSE = "face_too_close", rA.FACE_TOO_FAR = "face_too_far", rA.FACE_CENTERING = "face_centering", rA.FACE_NOT_PRESENT = "face_not_present", rA.SHARPNESS_TOO_LOW = "sharpness_too_low", rA.BRIGHTNESS_TOO_LOW = "brightness_too_low", rA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", rA.DEVICE_PITCHED = "device_pitched", rA.LEFT_EYE_NOT_PRESENT = "left_" + Ot.EYE_NOT_PRESENT, rA.RIGHT_EYE_NOT_PRESENT = "right_" + Ot.EYE_NOT_PRESENT, rA.MOUTH_NOT_PRESENT = "mouth_not_present", rA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", rA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", rA.SMILE = "smile", rA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", rA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const aA = rA, OA = {};
OA.isPresent = aA.FACE_NOT_PRESENT, OA.isNotPitched = aA.DEVICE_PITCHED, OA.isNotSmall = aA.FACE_TOO_FAR, OA.isNotLarge = aA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = aA.FACE_CENTERING, OA.isNotDim = aA.BRIGHTNESS_TOO_LOW, OA.isNotBright = aA.BRIGHTNESS_TOO_HIGH, OA.isSharp = aA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = aA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = aA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = aA.MOUTH_NOT_PRESENT, OA.isMouthStatusNotTooHigh = aA.MOUTH_SCORE_TOO_HIGH, OA.isMouthStatusNotTooLow = aA.MOUTH_SCORE_TOO_LOW;
const Si = OA, on = {};
on.NEUTRAL = "NEUTRAL", on.SMILE = "SMILE", on.SMILE_MANUAL = "SMILE_MANUAL";
const J = on, ee = {};
ee.CANDIDATE_SELECTION = "candidate_selection", ee.PALM_CENTERING = "palm_centering", ee.PALM_NOT_PRESENT = "palm_not_present", ee.PALM_TOO_FAR = "palm_too_far", ee.PALM_TOO_CLOSE = "palm_too_close", ee.SHARPNESS_TOO_LOW = "sharpness_too_low", ee.BRIGHTNESS_TOO_LOW = "brightness_too_low", ee.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ee.DEVICE_PITCHED = "device_pitched", ee.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const le = ee, ue = {};
ue.isPresent = le.PALM_NOT_PRESENT, ue.isNotPitched = le.DEVICE_PITCHED, ue.isNotSmall = le.PALM_TOO_FAR, ue.isNotOutOfBounds = le.PALM_CENTERING, ue.isNotDim = le.BRIGHTNESS_TOO_LOW, ue.isNotBright = le.BRIGHTNESS_TOO_HIGH, ue.isSharp = le.SHARPNESS_TOO_LOW, ue.isNotLarge = le.PALM_TOO_CLOSE, ue.isTemplateExtractionQualityHighEnough = le.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Ko = {};
Ko.TOP_LEFT = "TOP_LEFT", Ko.TOP_RIGHT = "TOP_RIGHT", Ko.BOTTOM_RIGHT = "BOTTOM_RIGHT", Ko.BOTTOM_LEFT = "BOTTOM_LEFT";
const ZA = {};
ZA.CANDIDATE_SELECTION = "candidate_selection", ZA.FACE_TOO_CLOSE = "face_too_close", ZA.FACE_TOO_FAR = "face_too_far", ZA.FACE_CENTERING = "face_centering", ZA.FACE_NOT_PRESENT = "face_not_present", ZA.SHARPNESS_TOO_LOW = "sharpness_too_low", ZA.BRIGHTNESS_TOO_LOW = "brightness_too_low", ZA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ZA.DEVICE_PITCHED = "device_pitched", ZA.LEFT_EYE_NOT_PRESENT = "left_" + Ot.EYE_NOT_PRESENT, ZA.RIGHT_EYE_NOT_PRESENT = "right_" + Ot.EYE_NOT_PRESENT;
const ge = ZA, se = {};
se.isPresent = ge.FACE_NOT_PRESENT, se.isNotPitched = ge.DEVICE_PITCHED, se.isNotSmall = ge.FACE_TOO_FAR, se.isNotLarge = ge.FACE_TOO_CLOSE, se.isNotOutOfBounds = ge.FACE_CENTERING, se.isNotDim = ge.BRIGHTNESS_TOO_LOW, se.isNotBright = ge.BRIGHTNESS_TOO_HIGH, se.isSharp = ge.SHARPNESS_TOO_LOW, se.isLeftEyePresent = ge.LEFT_EYE_NOT_PRESENT, se.isRightEyePresent = ge.RIGHT_EYE_NOT_PRESENT;
var je, _, Gi, Oa, Jt = 1170 + -9457 * 1 + 8287, Ms = [], j = M, Ja = j.__b, Ua = j.__r, Ya = j.diffed, Ta = j.__c, Pa = j.unmount, Ha = j.__;
function qt(i, n) {
  j.__h && j.__h(_, i, Jt || n), Jt = -8 * 631 + -14 * 711 + -2 * -7501;
  var t = {};
  t.__ = [], t.__h = [];
  var e = _.__H || (_.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function CA(i) {
  return Jt = 1 * 3679 + 2 * 3880 + 2 * -5719, Ia(Os, i);
}
function Ia(i, n, t) {
  var e = qt(je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Os(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], s = e.t(a, g);
    a !== s && (e.__N = [s, e.__[1 * 9589 + 6210 + 1 * -15798]], e.__c.setState({}));
  }], e.__c = _, !_.__f)) {
    var A = function(g, a, s) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (B.every(function(x) {
        return !x.__N;
      })) return !o || o.call(this, g, a, s);
      var I = e.__c.props !== g;
      return B.forEach(function(x) {
        if (x.__N) {
          var c = x.__[0];
          x.__ = x.__N, x.__N = void 0, c !== x.__[0] && (I = !0);
        }
      }), o && o.call(this, g, a, s) || I;
    };
    _.__f = !0;
    var o = _.shouldComponentUpdate, r = _.componentWillUpdate;
    _.componentWillUpdate = function(g, a, s) {
      if (this.__e) {
        var B = o;
        o = void 0, A(g, a, s), o = B;
      }
      r && r.call(this, g, a, s);
    }, _.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function Z(i, n) {
  var t = qt(je++, 3);
  !j.__s && ca(t.__H, n) && (t.__ = i, t.u = n, _.__H.__h.push(t));
}
function Vt(i, n) {
  var t = qt(je++, 4);
  !j.__s && ca(t.__H, n) && (t.__ = i, t.u = n, _.__h.push(t));
}
function PA(i) {
  return Jt = 7188 + 1085 * 5 + 1 * -12608, hA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Ws(i, n, t) {
  Jt = -9349 * -1 + 9223 + -18566, Vt(function() {
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
  var t = qt(je++, 7);
  return ca(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Ee(i, n) {
  return Jt = 2357 * 2 + 4659 * -1 + -47, hA(function() {
    return i;
  }, n);
}
function re(i) {
  var n = _.context[i.__c], t = qt(je++, -1644 + -6947 * 1 + 344 * 25);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(_)), n.props.value) : i.__;
}
function kn(i, n) {
  j.useDebugValue && j.useDebugValue(n ? n(i) : i);
}
function Ls() {
  var i = qt(je++, 11);
  if (!i.__) {
    for (var n = _.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-1 * -3291 + 88 * -113 + -1 * -6653, -2443 * -3 + -1 * 2137 + -649 * 8]);
    i.__ = "P" + t[-2753 + 1 * 2753] + "-" + t[201 + -73 * 71 + 1 * 4983]++;
  }
  return i.__;
}
function Sc() {
  for (var i; i = Ms.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(nn), i.__H.__h.forEach(cr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], j.__e(n, i.__v);
  }
}
j.__b = function(i) {
  _ = null, Ja && Ja(i);
}, j.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Ha && Ha(i, n);
}, j.__r = function(i) {
  Ua && Ua(i), je = 5378 + -9 * -215 + -71 * 103;
  var n = (_ = i.__c).__H;
  n && (Gi === _ ? (n.__h = [], _.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(nn), n.__h.forEach(cr), n.__h = [], je = 5121 + 569 * -9)), Gi = _;
}, j.diffed = function(i) {
  Ya && Ya(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (1 * -4804 + 1023 + 3782 !== Ms.push(n) && Oa === j.requestAnimationFrame || ((Oa = j.requestAnimationFrame) || Gc)(Sc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Gi = _ = null;
}, j.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(nn), t.__h = t.__h.filter(function(e) {
        return !e.__ || cr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], j.__e(e, t.__v);
    }
  }), Ta && Ta(i, n);
}, j.unmount = function(i) {
  Pa && Pa(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      nn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && j.__e(n, t.__v));
};
var Ka = typeof requestAnimationFrame == "function";
function Gc(i) {
  var n, t = function() {
    clearTimeout(e), Ka && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Ka && (n = requestAnimationFrame(t));
}
function nn(i) {
  var n = _, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), _ = n;
}
function cr(i) {
  var n = _;
  i.__c = i.__(), _ = n;
}
function ca(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Os(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const Bi = Re(void 0);
Bi.displayName = "AppStateContext";
function MA() {
  const i = re(Bi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class Js extends oe {
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
    return ((n = this.context) == null ? void 0 : n.appState) === P.ERROR ? null : this.props.children;
  }
}
p(Js, "contextType", Bi);
function Us(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Cr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Ys(i, n) {
  var t = n(), e = CA({ t: { __: t, u: n } }), A = e[0].t, o = e[-17 * 214 + -7667 + 11306];
  return Vt(function() {
    A.__ = t, A.u = n, Ni(A) && o({ t: A });
  }, [i, t, n]), Z(function() {
    return Ni(A) && o({ t: A }), i(function() {
      Ni(A) && o({ t: A });
    });
  }, [i]), t;
}
function Ni(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (1 * -3931 + -5488 + 9419 !== n || (-37 * 116 + -5845 + 10138 * 1) / n == (9671 + -4 * 1690 + 3 * -970) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Ts(i) {
  i();
}
function Ps(i) {
  return i;
}
function Hs() {
  return [!1, Ts];
}
var Ks = Vt;
function Br(i, n) {
  this.props = i, this.context = n;
}
function Nc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : Cr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, vA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(Br.prototype = new oe()).isPureReactComponent = !0, Br.prototype.shouldComponentUpdate = function(i, n) {
  return Cr(this.props, i) || Cr(this.state, n);
};
var _a = M.__b;
M.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), _a && _a(i);
};
var Rc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -7966 * -1 + 2423 + -1 * 6478;
function Ca(i) {
  function n(t) {
    var e = Us({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Rc, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var ja = function(i, n) {
  return i == null ? null : Ge(Ge(i).map(n));
}, Fc = { map: ja, forEach: ja, count: function(i) {
  return i ? Ge(i).length : -2410 + 2410 * 1;
}, only: function(i) {
  var n = Ge(i);
  if (-5615 + 339 * -1 + -5 * -1191 !== n.length) throw "Children.only";
  return n[-2237 * 2 + -1 * -8189 + 743 * -5];
}, toArray: Ge }, vc = M.__e;
M.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  vc(i, n, t, e);
};
var qa = M.unmount;
function _s(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Us({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return _s(e, n, t);
  })), i;
}
function js(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return js(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function rn() {
  this.__u = 7858 + 1709 * 3 + -12985, this.o = null, this.__b = null;
}
function qs(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Mc(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return vA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function no() {
  this.i = null, this.l = null;
}
M.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -6531 + -9182 * 1 + 15745 * 1 & i.__u && (i.type = null), qa && qa(i);
}, (rn.prototype = new oe()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = qs(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[7710 + 2 * 586 + -1 * 8882] = js(a, a.__c.__P, a.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || 746 * -12 + -6090 + 15074 * 1 & n.__u || e.setState({ __a: e.__b = e.__v.__k[97 * -81 + -887 * 9 + 15840] }), i.then(r, r);
}, rn.prototype.componentWillUnmount = function() {
  this.o = [];
}, rn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-7780 + -4571 * -1 + 3209].__c;
      this.__v.__k[6283 + -1641 * -1 + -7924] = _s(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && vA(ie, null, i.fallback);
  return A && (A.__u &= -33), [vA(ie, null, n.__a ? null : i.children), A];
};
var Va = function(i, n, t) {
  if (++t[-3504 + 1 * -391 + -2 * -1948] === t[-4630 * 1 + 13 * -613 + -1 * -12599] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-1 * 3923 + 1076 * -4 + -1 * -8227] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 7 * -566 + 8031 + -4066; ) t.pop()();
    if (t[-52 * -142 + -4130 + 3253 * -1] < t[-41 * -43 + 1 * -8039 + 6276]) break;
    i.i = t = t[2656 + 6 * -257 + -1112];
  }
};
function Wc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Lc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    _e(null, n.v), n.v = null, n.h = null;
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
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -3681 + -159 * 53 + 12109, 5 * -631 + -220 * -19 + 32 * -32), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, _e(vA(Wc, o, i.__v), n.v);
}
function Oc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = vA(Lc, t);
  return e.containerInfo = n, e;
}
(no.prototype = new oe()).__a = function(i) {
  var n = this, t = qs(n.__v), e = n.l.get(i);
  return e[1 * -5809 + -132 + -1 * -5941]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Va(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, no.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Ge(i.children);
  i.revealOrder && i.revealOrder[3010 + 7499 * 1 + -10509] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-502 * 7 + -743 + 4258, -1093 * 3 + -3 * 1415 + 7524, this.i]);
  return i.children;
}, no.prototype.componentDidUpdate = no.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Va(i, t, n);
  });
};
var Vs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 1905 + -1 * -58198, Jc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Uc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Yc = /[A-Z0-9]/g, Tc = typeof document < "u", Pc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function Hc(i, n, t) {
  return n.__k == null && (n.textContent = ""), _e(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function Kc(i, n, t) {
  return aa(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(oe.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Za = M.event;
function _c() {
}
function jc() {
  return this.cancelBubble;
}
function qc() {
  return this.defaultPrevented;
}
M.event = function(i) {
  return Za && (i = Za(i)), i.persist = _c, i.isPropagationStopped = jc, i.isDefaultPrevented = qc, i.nativeEvent = i;
};
var an = {};
an.enumerable = !1, an.configurable = !0, an.get = function() {
  return this.class;
};
var Ba, Vc = an, za = M.vnode;
M.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || Tc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Pc(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Uc.test(r) && (r = a) : a = r = "oninput" : o && Jc.test(r) ? r = r.replace(Yc, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Ge(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Ge(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Vc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = Vs, za && za(i);
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
var QA = {};
QA.readContext = function(i) {
  return Ba.__n[i.__c].props.value;
}, QA.useCallback = Ee, QA.useContext = re, QA.useDebugValue = kn, QA.useDeferredValue = Ps, QA.useEffect = Z, QA.useId = Ls, QA.useImperativeHandle = Ws, QA.useInsertionEffect = Ks, QA.useLayoutEffect = Vt, QA.useMemo = hA, QA.useReducer = Ia, QA.useRef = PA, QA.useState = CA, QA.useSyncExternalStore = Ys, QA.useTransition = Hs;
var Zs = {};
Zs.current = QA;
var zs = {};
zs.ReactCurrentDispatcher = Zs;
var Zc = zs;
function zc(i) {
  return vA.bind(null, i);
}
function Qi(i) {
  return !!i && i.$$typeof === Vs;
}
function Xc(i) {
  return Qi(i) && i.type === ie;
}
function $c(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function AC(i) {
  return Qi(i) ? ga.apply(null, arguments) : i;
}
function eC(i) {
  return !!i.__k && (_e(null, i), !0);
}
function tC(i) {
  return i && (i.base || 325 + -43 * 100 + -284 * -14 === i.nodeType && i) || null;
}
var oC = function(i, n) {
  return i(n);
}, nC = function(i, n) {
  return i(n);
}, iC = ie, rC = Qi, Qt = { useState: CA, useId: Ls, useReducer: Ia, useEffect: Z, useLayoutEffect: Vt, useInsertionEffect: Ks, useTransition: Hs, useDeferredValue: Ps, useSyncExternalStore: Ys, startTransition: Ts, useRef: PA, useImperativeHandle: Ws, useMemo: hA, useCallback: Ee, useContext: re, useDebugValue: kn, version: "18.3.1", Children: Fc, render: Hc, hydrate: Kc, unmountComponentAtNode: eC, createPortal: Oc, createElement: vA, createContext: Re, createFactory: zc, cloneElement: AC, createRef: Cc, Fragment: ie, isValidElement: Qi, isElement: rC, isFragment: Xc, isMemo: $c, findDOMNode: tC, Component: oe, PureComponent: Br, memo: Nc, forwardRef: Ca, flushSync: nC, unstable_batchedUpdates: oC, StrictMode: iC, Suspense: rn, SuspenseList: no, lazy: Mc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Zc };
(function(i, n) {
  function t(g, a, s, B, I) {
    return EA(a - -765, B);
  }
  const e = i();
  function A(g, a, s, B, I) {
    return EA(a - 751, I);
  }
  function o(g, a, s, B, I) {
    return EA(B - -13, I);
  }
  function r(g, a, s, B, I) {
    return EA(I - 50, B);
  }
  for (; ; )
    try {
      if (parseInt(A(865, 860, 874, 858, "b99*")) / 1 + -parseInt(A(876, 878, 864, 868, "v@a2")) / 2 + -parseInt(t(-619, -633, -641, "6ErM", -617)) / 3 * (parseInt(r(173, 161, 149, "OjzR", 163)) / 4) + parseInt(r(161, 159, 160, "(E(u", 169)) / 5 + parseInt(r(201, 182, 201, "2RR$", 186)) / 6 * (-parseInt(o(111, 108, 91, 103, "dE*k")) / 7) + -parseInt(A(893, 879, 875, 879, "3zeA")) / 8 + parseInt(A(853, 855, 858, 855, "Ol%*")) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sn, -1360656 + -1 * -2093405);
function EA(i, n) {
  const t = Sn();
  return EA = function(e, A) {
    e = e - (-5 * 660 + -1489 + 4893);
    let o = t[e];
    if (EA.rQSRcb === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      EA.fXgBeI = B, i = arguments, EA.rQSRcb = !0;
    }
    const g = t[-1 * 7970 + -6861 + 14831], a = e + g, s = i[a];
    return s ? o = s : (EA.grJOip === void 0 && (EA.grJOip = !0), o = EA.fXgBeI(o, A), i[a] = o), o;
  }, EA(i, n);
}
function aC(i, n, t, e, A) {
  return EA(t - 589, A);
}
function Ag(i, n, t, e, A) {
  return EA(t - 219, e);
}
function Sn() {
  const i = ["wCo7axC2tSkj", "av7cVCofnsVcHmkUcri9", "o8k1u0CvrCkkb8kjxSoJW5muAG", "p8oxWPJcTKzPW41iE11CWQSK", "W5pcNGRcG8ozD17dGx81W4S", "W5tcQIKdW4mLW4u9WPXtiCkvzmoZ", "p3JdMc7cUGSSW5jWWPdcGvC", "zGnDW48eySohWORdLmonW5rk", "W5JcUdaIeW", "W5ddSCo2Ff0", "oSkgWOKUW7W", "W4XofSknovxcHq", "xmk+lSk+chpcJmoZyCoxCq", "DWCKB1m", "xmkXl8k9DfBcLmoHBmo/", "ACoKdGzj", "WOdcU8kllGjrWO1kWRTJbHNdJW", "WPNcNWhcPmkPW6OdjNtdU1dcSCkP", "WOldS3lcUam", "g1KgWPjE", "qY7cLI9j", "W4bSoue", "oSkkWOG", "BSo3kNZcL8kSWOZcGsJdVmoCWOBcJa", "nuldQt/dOG", "WO3dOhPRsSoZWPmPWR9HW4TUW5K", "WPOHW5tdQWpcQMy0zSkFAJ3dPW", "lCkaWORdGXS", "WQmXBwLcevtdGmkCBW", "eaxdQ8osDa", "W65oiCkaWQzPsCoAW77cGJ0", "WOtdP1rqWPC", "W6hdUSoxA1K"];
  return Sn = function() {
    return i;
  }, Sn();
}
function Qr(i, n, t, e, A) {
  return EA(t - -537, i);
}
function gC(i, n, t, e, A) {
  return EA(e - -959, n);
}
function Er(i, n, t, e, A) {
  return EA(e - 418, i);
}
const Gn = Re(void 0);
Gn[Qr("n4rt", -432, -425) + Qr("zTy2", -404, -404) + "e"] = Er("b99*", 554, 529, 539) + Ag(353, 356, 341, "d$LN") + Ag(329, 339, 342, "gu&(");
function Ei() {
  const i = re(Gn);
  function n(r, g, a, s, B) {
    return Er(B, g - 189, a - 410, s - -847);
  }
  function t(r, g, a, s, B) {
    return gC(r - 435, s, a - 334, g - -33);
  }
  function e(r, g, a, s, B) {
    return Qr(s, g - 431, g - 1148);
  }
  function A(r, g, a, s, B) {
    return Er(B, g - 377, a - 424, s - 190);
  }
  if (i === void 0) throw new Error(Gn[o("v@a2", 397, 394, 387, 402) + e(721, 722, 734, "C1XL") + "e"] + (n(-296, -321, -321, -309, "kI#Z") + o("2RR$", 430, 417, 415, 423) + n(-290, -316, -305, -303, "XO3)") + n(-330, -319, -327, -314, "7BBZ") + A(736, 737, 729, 737, "Pm*I") + o("Ol%*", 424, 425, 412, 409) + t(-870, -858, -861, "C1XL") + e(727, 735, 732, "n4rt")));
  function o(r, g, a, s, B) {
    return aC(r - 17, g - 34, B - -297, s - 411, r);
  }
  return i;
}
const Nn = Re(void 0);
Nn.displayName = "AnalyticsContext";
function sC() {
  const i = re(Nn);
  if (i === void 0)
    throw new Error(`${Nn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const co = (i) => i.length < 1958 + 254 * 13 + -5259 ? -2080 + -2375 * 1 + 55 * 81 : i.reduce((t, e) => t + e, 13 * 617 + -29 * 199 + -2250) / i.length, Nt = (i) => Number.parseFloat(i.toFixed(-9841 + 276 * 26 + -46 * -58));
function IC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-2883 + 4801 * 1 + -1918, 10 * -109 + -1 * -173 + -1 * -917, n.canvas.width, n.canvas.height);
}
const Xs = 127 * 77 + -5152 + -4627 + 0.75, cC = -9067 * 1 + 2580 * 1 + 6489, CC = -1591 * 1 + -2861 + -421 * -12, BC = "dot-auto-capture-video", xi = (i, n) => Math.min(i, n), $s = ({ height: i, width: n }, t) => {
  const e = xi(n, i) * t, A = (n - e) / 2, o = (i - e) / (-1 * -2229 + 6009 * 1 + -8236), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, QC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = $s(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, EC = ({ height: i, width: n }) => {
  const t = xi(n, i), e = t / (-3438 + 93 * 37) * (5644 + -12 * 470);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function xC(i, n) {
  const t = xi(n.width, n.height);
  return Nt(i * t);
}
function dC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, $s(t, Xs);
}
function lC(i) {
  return QC(i, Xs);
}
function uC(i, n) {
  return xC(i, n) * cC;
}
const hC = "8.0.0", fC = {
  version: hC
}, xr = {};
xr.max = 100, xr.min = 10;
const eg = xr, pC = -4518 + -194 * -27, mC = 1 * 7804 + 9645 + 47 * -367, yC = -4409 + 1 * -260 + 4673, AI = "AES-CBC", eI = "RSA-OAEP", DC = "SHA-256", wC = "image/jpeg", bC = -14 * 670 + 8011 + -153 * -9, tI = "/dot-assets", tg = "dot_embedded_bg.wasm", dr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), oI = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Nt(t) : t)), nI = () => fC.version, iI = (i) => new URL(i).hostname.replace("www.", ""), Qa = () => iI(window.location.href) === "localhost", kC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function SC(i) {
  return i.at(-1) === "/" ? i.slice(322 * -24 + -6 * -195 + 6558 * 1, -1) : i;
}
function GC(i) {
  return "" + SC(i ?? "") + tI;
}
function NC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function eo(i) {
  return (...n) => {
    Qa() && console[i](...n);
  };
}
const Ea = { log: eo("log"), warn: eo("warn"), error: eo("error"), info: eo("info"), debug: eo("debug") };
function RC({ analytics: i, crosshatch: n }) {
  if (!Qa())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function FC({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = RC(o);
  return Z(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), Z(() => {
    e && (Ea.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function vC({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Ei(), { redfin: o } = MA(), r = FC({
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
  return /* @__PURE__ */ w(Nn.Provider, { value: g, children: t });
}
const lr = {};
lr.SIMD = "simd", lr.NO_SIMD = "no-simd";
const og = lr, ur = {};
ur.Lower = "Lower", ur.Higher = "Higher";
const Ut = ur, hr = {};
hr.MOBILE = "MOBILE", hr.DESKTOP = "DESKTOP";
const ng = hr, Rn = Re(void 0);
Rn.displayName = "TransactionCountingContext";
function rI() {
  const i = re(Rn);
  if (i === void 0)
    throw new Error(`${Rn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function MC({ children: i, value: n }) {
  const { crosshatch: t } = Ei(), { transactionCounting: e } = rI(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Ut.Higher : Ut.Lower, o = hA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ w(Bi.Provider, { value: o, children: i });
}
const Fn = Re(void 0);
Fn.displayName = "CameraServiceContext";
function xt() {
  const i = re(Fn);
  if (i === void 0)
    throw new Error(`${Fn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function gn() {
  return !1;
}
function WC() {
  return !0;
}
async function aI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ri() {
  return (await aI()).filter((n) => n.kind === "videoinput");
}
function sn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function fr(i) {
  return i.getVideoTracks()[172 + -2 * 86];
}
function NA(i, n) {
  const t = vn();
  return NA = function(e, A) {
    e = e - (868 + 31 * -13);
    let o = t[e];
    if (NA.jFunZd === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      NA.vMADou = B, i = arguments, NA.jFunZd = !0;
    }
    const g = t[-4774 * -1 + -1442 + -3332], a = e + g, s = i[a];
    return s ? o = s : (NA.myUVdz === void 0 && (NA.myUVdz = !0), o = NA.vMADou(o, A), i[a] = o), o;
  }, NA(i, n);
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return NA(s - 891, g);
  }
  function e(g, a, s, B, I) {
    return NA(B - 782, I);
  }
  const A = i();
  function o(g, a, s, B, I) {
    return NA(s - 298, g);
  }
  function r(g, a, s, B, I) {
    return NA(B - 710, s);
  }
  for (; ; )
    try {
      if (parseInt(e(1260, 1258, 1280, 1270, "Uiu%")) / 1 + parseInt(t("a*z2", 1366, 1365, 1356, 1384)) / 2 + parseInt(t(")3@)", 1401, 1393, 1404, 1389)) / 3 + parseInt(r(1165, 1169, "a*z2", 1183, 1169)) / 4 + parseInt(t(")ub^", 1379, 1378, 1385, 1378)) / 5 + -parseInt(o("Fhpi", 780, 781, 762, 766)) / 6 * (-parseInt(r(1197, 1173, "9ml!", 1185, 1182)) / 7) + parseInt(o(")3@)", 773, 778, 778, 767)) / 8 * (-parseInt(o("T9mR", 772, 764, 761, 758)) / 9) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(vn, 7 * 25091 + 497052 + 12433);
function vn() {
  const i = ["WOZdLhpcQCo5t8oQWQbtWP16WOG", "iCosW78", "omogxxHKWQ1EimkplqGn", "W4hcT3hdPLa", "fSkLDmowW4e", "W7TLc1RdPW", "W5Tnw8k0va", "zCkEFmkdW7pdUCotWPfsW5/dQCkeWQa", "W5vXlNVdNW", "nmkpWPJcHmop", "jCkiW6pcOY7cJSkQW6KCCmkgW6WJ", "sSkjW7fepG", "W6VdPCoAbWrKzSkRaIVcISkRsSkm", "wGHnW63dNW", "WRLakmk5W5LrBCkGrt1uq8oe", "WQeRW5pdKW", "kdreW4xdR0tcIG", "uhT5WRVdNq", "cMGfoCo9", "W58MWQSGW7rvW6VdUg8oW4/cOCov", "p8oGlCkhEa", "eKjuWP3cOW", "h8kUFCofW50", "W7DIFCokWPTAjaquWQldSCozvq", "W7bNEmooWP9AFYmkWORdOCoo", "W50NWQSJW7rtW67dR1a2W6hcV8oh", "ACoRj8kPx0G9", "WPddTSkRqezBhmoK", "g3qf", "E212EfK", "WRLhjSk2W5Hsy8o4vHLhFSoHaW", "W7FcPCkMWOOI", "WR/cPCkdxxi", "WP3dGKrloLBdISoM", "wsbhASkcWPrFW6ldIsZdPCkGDa", "W47dVxVcTW0", "uwxcU8oormkhWObJxSo8bmkk", "WRScgNzwW5RcGICQW5WRbZW"];
  return vn = function() {
    return i;
  }, vn();
}
function LC(i) {
  const n = new ArrayBuffer(i[A(1213, "bT%I", 1238, 1220) + "h"]);
  function t(r, g, a, s, B) {
    return NA(a - 168, r);
  }
  function e(r, g, a, s, B) {
    return NA(r - -601, g);
  }
  function A(r, g, a, s, B) {
    return NA(s - 749, g);
  }
  const o = new Uint8Array(n);
  for (let r = 106 * -37 + -165 * -11 + 2107, g = i[A(1259, "RRqR", 1246, 1241) + "h"]; r < g; r++)
    if (A(1266, "T9mR", 1246, 1250) === A(1255, "IjLa", 1242, 1243)) o[r] = i[A(1232, "TfIf", 1217, 1228) + e(-120, "e@C&")](r);
    else {
      const a = new _0x52e609(_0x15c75c[e(-105, "%hyK") + e(-104, "$eKo")]);
      return new _0x465fc9(a)[t("!teD", 671, 657)](_0x1f0bb6), a;
    }
  return n;
}
(function(i, n) {
  function t(r, g, a, s, B) {
    return X(s - -571, B);
  }
  const e = i();
  function A(r, g, a, s, B) {
    return X(B - 525, g);
  }
  function o(r, g, a, s, B) {
    return X(s - -717, r);
  }
  for (; ; )
    try {
      if (-parseInt(t(-73, -93, -78, -98, "fWkK")) / 1 * (parseInt(t(-65, -81, -88, -96, "k8yw")) / 2) + parseInt(t(-94, -71, -116, -89, "@&GJ")) / 3 + parseInt(t(-119, -119, -98, -125, "uP!&")) / 4 * (parseInt(o("Wuvo", -297, -263, -290, -302)) / 5) + -parseInt(t(-132, -150, -157, -137, "pCfl")) / 6 + parseInt(o("bR)5", -225, -218, -249, -240)) / 7 + parseInt(o("D05o", -264, -278, -288, -260)) / 8 * (-parseInt(t(-106, -79, -89, -101, "cp)W")) / 9) + -parseInt(A(984, "DSWO", 940, 940, 956)) / 10 * (parseInt(t(-162, -118, -130, -146, "D05o")) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mn, 594161 + 12149 * -45 + 451064);
function X(i, n) {
  const t = Mn();
  return X = function(e, A) {
    e = e - (8001 + 689 * -11);
    let o = t[e];
    if (X.lhEQtw === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      X.EiRpVz = B, i = arguments, X.lhEQtw = !0;
    }
    const g = t[-7291 + -1 * -7291], a = e + g, s = i[a];
    return s ? o = s : (X.ugwqPF === void 0 && (X.ugwqPF = !0), o = X.EiRpVz(o, A), i[a] = o), o;
  }, X(i, n);
}
async function OC() {
  const i = {};
  i[A(436, 424, 443, "pCfl")] = AI, i[n("VBne", -458) + "h"] = 256;
  function n(B, I, x, c, E) {
    return X(I - -924, B);
  }
  function t(B, I, x, c, E) {
    return X(I - 821, E);
  }
  const e = await window[A(444, 444, 466, "6ESe") + "o"][A(447, 418, 462, "Eq^w") + "e"][t(1265, 1295, 1265, 1320, "k8yw") + t(1255, 1260, 1283, 1278, "g5^T") + "y"](i, !0, [n("gI3z", -441) + "pt", t(1277, 1265, 1268, 1283, "eFrh") + "pt"]);
  function A(B, I, x, c, E) {
    return X(B - -16, c);
  }
  function o(B, I, x, c, E) {
    return X(x - -839, c);
  }
  const r = Uint8Array[t(1253, 1266, 1283, 1242, "^CS$")](Array(1 * 9304 + 2 * -883 + -7522)[A(434, 464, 450, "xpo@")](0)), g = window[s(1201, 1230, "cp)W", 1210) + "o"][A(431, 418, 433, "gWcT") + t(1289, 1285, 1292, 1305, "0Hl1") + o(-376, -349, -361, "Wuvo")](r), a = {};
  function s(B, I, x, c, E) {
    return X(c - 755, x);
  }
  return a[s(1180, 1200, "JykO", 1193)] = e, a.iv = g, a;
}
async function JC(i) {
  function n(I, x, c, E, d) {
    return X(E - 101, c);
  }
  function t(I, x, c, E, d) {
    return X(c - -185, E);
  }
  const { iv: e, key: A } = await OC(), o = {};
  o[t(285, 261, 274, "cW3v")] = AI, o.iv = e;
  const r = await window[n(563, 568, "k8yw", 537) + "o"][n(539, 533, "xpo@", 523) + "e"][B(581, 593, "fWkK", 606) + "pt"](o, A, i);
  function g(I, x, c, E, d) {
    return X(E - 331, c);
  }
  const a = await window[B(590, 604, "^CS$", 609) + "o"][B(550, 561, "xpo@", 566) + "e"][t(320, 271, 294, "@&GJ") + g(793, 784, "&mK^", 763)](g(785, 778, "!P83", 803), A), s = {};
  s[t(297, 284, 269, "6ESe") + "ge"] = r, s[g(744, 781, "xpo@", 755)] = a;
  function B(I, x, c, E, d) {
    return X(E - 144, c);
  }
  return s.iv = e, s;
}
function Mn() {
  const i = ["mSoIWRBdGSoi", "WRGrWPddJ8ku", "ymkGW6lcUSomWO1iWOpcLSk8", "ALBcSJGHW5FdTIC", "WR8XW4D2sq", "WR46W4D2sq", "tCkzhKq", "W6RcRM3cVCo/FmkzWQajW51bWOC", "W7RdSL4bW6y", "WQmKW5D9WR4", "mCo6wSo0WRq", "id10iW", "F2WVFK9bW6OHWOzSW4VdQW", "CGzfoq", "hLJdK0PrgCo/WPZdO19IWOi", "W7VcG8oQmSo2", "W6DUWRC0W4G", "W4dcTH7dK8oc", "fmknDmkLW43cPMW9", "BGzF", "bSoRW7eY", "W7xcLmoGmCoJ", "gmoEsbeqcCkyWRFcNCkCW6NcRcO", "WOnas1TX", "iqxdKZvN", "WQTgdSoXDW", "smkzcfLr", "WQS2WOexzq", "W4XnW6pdJa", "e8ksq8kzgZDSW6ldGxTpW4RcVW", "W5/cQSkXoa", "WR1tWRKqW4VdHSkj", "iSogg8oiW4a", "WRhcTfu", "W5uygrPPW7fTgmo3dG", "y0lcU35D", "nHpcUhX5W4/dNxO", "BJLEESonWQu2WRmAp8o2n8oE", "sadcIHC", "W5/cSSkRp8oI", "WRuPW4vMWQa", "W7bxWQS9", "WPDUW6xdM8k7W6q8", "W6fMWOC4W6vtumk0cCojW4VdSSkE", "W4BcQGtdKCop", "nsf6oXq", "FSoNd8oZW5pcMmol", "ltfH", "WPFcHSojuvhdLwfIFLpdNa", "WRXJW6BcJ8kD", "WOVcNmk1kmoKWPhcLW", "eSo5WQDwiSo9ASoYpCojWQm", "WPFcISonufxcRwfirhRdUIm", "D1lcT29d", "B8knt8kFiG8CW4W", "jY3cMZK", "rG8jWRddQstdJqNcOCoBW4tcM8op", "l1mzAxP7fCoIF8ktWR7dU8kC", "xSkuWQbx", "z1xcRgTB", "rCojgCotvW", "WR5RW68"];
  return Mn = function() {
    return i;
  }, Mn();
}
async function UC(i) {
}
(function(i, n) {
  const t = i();
  function e(r, g, a, s, B) {
    return yA(g - -933, a);
  }
  function A(r, g, a, s, B) {
    return yA(g - -513, a);
  }
  function o(r, g, a, s, B) {
    return yA(a - 137, B);
  }
  for (; ; )
    try {
      if (parseInt(e(-374, -408, "bU&j", -411, -446)) / 1 + -parseInt(e(-432, -467, "F6(h", -476, -439)) / 2 + -parseInt(e(-459, -453, "HwHE", -436, -469)) / 3 + -parseInt(e(-342, -388, "^h9f", -427, -393)) / 4 * (parseInt(e(-373, -413, "ZcVI", -412, -396)) / 5) + -parseInt(e(-436, -391, "gID3", -387, -397)) / 6 * (-parseInt(e(-434, -400, "lfsQ", -427, -390)) / 7) + parseInt(A(-70, -35, "4yXo", -47, -78)) / 8 * (parseInt(A(20, -10, "bU&j", 35, -37)) / 9) + parseInt(o(633, 664, 632, 596, "x9Ef")) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ln, -34 * 11485 + 1 * -381278 + 1654859);
const YC = 961 + 1 * 7937 + -5898, TC = 613 * 15 + -3 * 2417 + -1264 * -4, gI = 3457 * 1 + -49 * 12 + -2 * 1433, sI = 7211 + -5 * -11 + -7266 + 0.5, II = {};
II[bA("Tdt3", 502)] = 1280;
const cI = {};
cI[FA("4yXo", 85, 115)] = 720;
const CI = {};
function bA(i, n, t, e, A) {
  return yA(n - -12, i);
}
CI[DA(42, 51, 37, 46, "6y)q")] = 60;
const Wn = {};
Wn[bA("6y)q", 460)] = II;
function DA(i, n, t, e, A) {
  return yA(n - -453, A);
}
Wn[wA(216, "ZcVI", 209, 225) + "t"] = cI, Wn[FA("sXPP", 113, 116) + wA(179, "Tdt3", 177, 186)] = CI;
function Ln() {
  const i = ["v8kbcvhcLq", "W61snq", "nSkzyWLo", "ChmswtzrhG", "W5XNW6y", "F8k2W5rzCa", "pCkYWRbMEa", "lmkduW8", "WO3cGSkMbJC", "zCoNWPtdStm", "Emo4W6VcOCkY", "cSkrWR5Apa", "fCorwGBdPbZcNSoypCk4o8kzsW", "k8k+WQnKzq", "rCkdbhFcVa", "W4pdUSoZp8kH", "W7NcOahdIai", "hmoVw8oGWQjyW4mqq8k8W7VdKSkl", "WPGsuCo+W6u", "WQ3cISk7sSk3", "WOLZr8oRx1TBW487tCkcWO3cOW", "W7tcVqNdJb4", "W6pcPbZdHGu", "WPFcKSkHjsO", "W4Tsi1n+", "WRSvW4DSWPVdHmoOWPORx8oJ", "oCk+WRHQyG", "WOhcQSkGAmofWOLhzSkUWQldTK4Y", "WR5lW57dTa", "eCkmWPHupG", "WPBcMCk8mq", "WPSmv8oK", "tmkfbLpcUW", "W6PtimoHjW", "W6/dRCkUW65ctCkpWRPCW5u", "W79vm8oTkW", "WQVcHmk9", "lg8yWOpdImk7gHy", "eSoqxGldOrJcM8odmmkObSkQqa", "uLiynCoS", "x8kOdCkwW6e", "W73cQH8", "W5SRlMK", "tCoEW5/dSa", "tXDvuhm", "W4uMouRdJG", "WQHJk8om", "d8oBc8onWQO", "EanagweasuFcMmkBj2DW", "W6KBWPVcUCoAW6ldR8oXlhtcUW", "nmokWQXsCq", "WQjyWOTEgq", "gCk9g8k3BW", "WQldTvJcMfNcG8kLW5NdJConW5BcOCkh", "W44Hb3/dIa", "AYhdGHZdMW", "W5tdT8oGW7qp", "WPRcJ8kPity", "Fve6iXS", "W7TijCo4kG", "BJeZWRm", "rwVdUq", "emosvGlcNxtdUSo/g8k5", "W7uyWQ50msdcUSon", "p8onW60wWPu", "W4ZdGmo9DNDbWRf0jvrSBr0", "mmkVWRHIza", "lSklWPRcOCorgLtcGvWGWR5Ztq", "F8kbW5i", "WPFcSSk8WQ1BWPO9W5ldMSkPemoiW5e", "BCofWO3dQt4", "ftS0zmoh", "WPZcLtZcVrtcOLTcuSkNsxBdGq", "W55anCoP", "CstdGrJdSq", "W6pcS8kQC8oJ", "d8oxjSoJWQK", "u8kjc0dcUW", "dYSvCmoz", "W79aj8oPeq", "e8oDeCo+WQy", "WO/dPSkZceC", "W6NdM8o+fCoQk8o4trNcN8omWOWm", "Fc4O", "W4hdKx8", "rmk5bSkZW7G", "BtddIqK", "s8k8d8k+W7y", "cSkRWQvG", "W7JcOSkHu8oI", "fmkzamkMW7OpWP8", "W6LzimoVnG", "BCofWPldSq", "W7BdPmo9W7W", "omoyW7Cn"];
  return Ln = function() {
    return i;
  }, Ln();
}
const BI = {};
BI[DA(-32, 15, -33, -11, "K#@m")] = 1920;
const QI = {};
QI[bA("bU&j", 486)] = 1080;
const In = {};
function YA(i, n, t, e, A) {
  return yA(n - 579, t);
}
function yA(i, n) {
  const t = Ln();
  return yA = function(e, A) {
    e = e - (3 * -359 + -244 * -16 + -2369);
    let o = t[e];
    if (yA.NnrlQg === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      yA.ZSlALm = B, i = arguments, yA.NnrlQg = !0;
    }
    const g = t[-5 * -424 + -31 * -71 + -4321], a = e + g, s = i[a];
    return s ? o = s : (yA.pJHjtC === void 0 && (yA.pJHjtC = !0), o = yA.ZSlALm(o, A), i[a] = o), o;
  }, yA(i, n);
}
In[bA("JcU7", 540)] = BI, In[YA(1128, 1110, "4yXo") + "t"] = QI, In[wA(187, "6y)q", 240, 226) + DA(107, 98, 55, 76, "HwHE")] = 30;
const EI = {};
EI[DA(31, 61, 84, 103, "Tdt3")] = 1;
const xI = {};
xI[wA(229, "F6(h", 261, 214)] = 1;
const dI = {};
dI[FA("Tdt3", 177, 159)] = 1;
const cn = {};
cn[YA(1101, 1069, "ZcVI")] = EI, cn[bA("Tdt3", 467) + "t"] = xI, cn[DA(119, 94, 64, 113, "sLP2") + FA("6y)q", 100, 131)] = dI;
function FA(i, n, t, e, A) {
  return yA(t - -355, i);
}
const lI = {};
lI[wA(211, "[BWF", 168, 169)] = 1;
const uI = {};
uI[bA("SHqm", 507)] = 1;
const hI = {};
hI[YA(1119, 1081, "V9Ey")] = 1;
const Cn = {};
Cn[bA("jOxE", 506)] = lI, Cn[bA("F6(h", 512) + "t"] = uI, Cn[FA("!rn[", 69, 109) + DA(55, 53, 86, 59, "HR25")] = hI;
const io = {};
io[wA(183, "dbwE", 208, 192)] = Wn, io[wA(141, "K#@m", 206, 172) + bA("^h9f", 484)] = In, io[DA(123, 97, 93, 129, "[vA^")] = cn, io[FA("pgFo", 177, 168) + YA(1125, 1128, "F6(h")] = Cn;
function wA(i, n, t, e, A) {
  return yA(e - -315, n);
}
const On = io, wt = {};
wt[YA(1081, 1037, "[vA^") + FA("@J2U", 127, 155) + YA(1085, 1113, "Tdt3")] = YC, wt[DA(102, 73, 32, 46, "A6[#") + bA("!FJ8", 477) + wA(218, "Tdt3", 171, 206) + wA(130, "o[%a", 195, 166)] = On[FA("r0eb", 163, 181)], wt[YA(1104, 1062, "U!G(") + FA("pnBF", 208, 177) + bA("!FJ8", 481) + YA(1079, 1117, "4yXo")] = On[bA("ZcVI", 496) + YA(1121, 1088, "6y)q")], wt[YA(1076, 1039, "!FJ8") + wA(142, "K#@m", 206, 184)] = gI, wt[DA(29, 63, 102, 94, "4yXo") + wA(231, "x9Ef", 206, 212) + wA(244, "o[%a", 214, 198) + DA(2, 41, -5, 1, "sl[u") + FA("x9Ef", 229, 189)] = sI;
const bt = {};
bt[YA(997, 1042, "i9fM") + FA("[BWF", 104, 136) + wA(193, "dbwE", 180, 162)] = TC, bt[bA("HR25", 457) + YA(1106, 1116, "SHqm") + FA("6y)q", 160, 188) + wA(153, "8XDb", 183, 182)] = On[YA(1113, 1118, "A6[#")], bt[wA(217, "bU&j", 144, 185) + DA(70, 69, 57, 103, "ZcVI") + FA("C7Nv", 129, 110) + FA("@J2U", 122, 160)] = On[DA(19, 39, 83, 67, "6y)q") + DA(8, 21, -25, -27, "J7Ag")], bt[YA(1034, 1067, "V9Ey") + bA(")^@]", 447)] = gI, bt[FA("bU&j", 159, 193) + DA(112, 77, 56, 111, "F6(h") + wA(231, "U!G(", 181, 202) + DA(6, 14, -5, -30, "[vA^") + bA("5*y[", 500)] = sI;
const pr = {};
pr[bA("U!G(", 493)] = wt, pr[DA(-27, 20, 8, -18, "^h9f")] = bt;
const PC = pr;
(function(i, n) {
  const t = i();
  function e(g, a, s, B, I) {
    return xA(B - -974, g);
  }
  function A(g, a, s, B, I) {
    return xA(s - 478, I);
  }
  function o(g, a, s, B, I) {
    return xA(g - -233, s);
  }
  function r(g, a, s, B, I) {
    return xA(s - 164, a);
  }
  for (; ; )
    try {
      if (parseInt(e("P1a#", -297, -305, -261, -177)) / 1 * (parseInt(e("uz(i", -391, -451, -310, -373)) / 2) + parseInt(A(1043, 1020, 983, 949, "u^Wo")) / 3 + parseInt(A(1147, 1057, 1013, 1138, "P1a#")) / 4 + parseInt(o(346, 290, "JWqI", 486, 393)) / 5 + parseInt(o(453, 449, "c[Zk", 335, 397)) / 6 * (parseInt(e("2nqP", -252, -188, -285, -373)) / 7) + -parseInt(o(366, 338, "LBE4", 324, 417)) / 8 + -parseInt(r(562, "[%^y", 682, 810, 616)) / 9 * (parseInt(o(327, 188, "[%^y", 188, 301)) / 10) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Jn, 416266 * 1 + -1850256 + 2430047);
function fA(i, n, t, e, A) {
  return xA(A - 876, i);
}
function nA(i, n, t, e, A) {
  return xA(t - -105, e);
}
function xA(i, n) {
  const t = Jn();
  return xA = function(e, A) {
    e = e - (4557 + -54 * 51 + -1347);
    let o = t[e];
    if (xA.RrsVrJ === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      xA.qAqnAS = B, i = arguments, xA.RrsVrJ = !0;
    }
    const g = t[-93 * 34 + 2609 * -2 + 8380], a = e + g, s = i[a];
    return s ? o = s : (xA.SSXIJM === void 0 && (xA.SSXIJM = !0), o = xA.qAqnAS(o, A), i[a] = o), o;
  }, xA(i, n);
}
function pA(i, n, t, e, A) {
  return xA(n - -407, e);
}
function Jn() {
  const i = ["WQdcMmkbWQFcUq", "W5RdT1abW5S", "W6WGW7hcSvy", "WQ7cQSorWRW", "W4ZdPCokWOGi", "WRRcI8kcW53dQW", "cNpdN15O", "W5aQWPinW50", "W71smhudW5HaWRGloN3dRMC", "Amk5WQWUwq", "lSo5W5pdRmoL", "drH1W6BdKq", "WQDKW5mxW74", "aH/cK8kun8ohW4W0", "rSk8W5bnW50", "W5OrW7xcTvS", "irvNCSkE", "u8oZW4y", "W5JdT1OdW4C", "FgicW41z", "rfOPgHi", "de9/", "vCoiW4FdSsi", "r8oaW4hcP8oz", "wg8qsq", "faLVW74", "FmkqbCoxiG", "atTpfCkyW4fdlrBcUa0", "WO9oWP4itW", "W7K3W47cSmk4", "WPBcLmknW43dTG", "emonW51/W5NdHKVcJa", "pHHzWPVdVa", "iCoRw0fQ", "qmkmkHVcGq", "FNydW5G", "W49WW7eCna", "wxC/WRG", "x1qU", "cM7dLeXO", "W548WQKUW4S", "Cc5XW70Q", "vdrKW6yQ", "tmoVwq", "vdD2W7y", "AtFcUSkgW60", "kM7dJ1n4", "iCkAD8ooWP8", "W47dO8okWP4y", "ufv6WQpdLG", "uZjZW7S2", "AM0IWQmS", "xwSIWRCR", "W5JdICoxW77dRsnevsuOWQquWRy", "jNFdN01/", "zNqPWQi7", "oCkbb8oAgCoEcG", "kXPJy8om", "dmkAW7RdHCoo", "W4K9W6FcSvG", "W6NdReylW4y", "W403W6ZcUKq", "WOTyyqin", "W5iOm8kEvG", "z8kci8opmW", "Dwetx8oC", "W4eeiCkAvq", "W7yQW5pdH10", "x0JcNSkL", "WR4pzIbz", "vKlcHmktoq", "dCoLWOZdJmoI", "rs9YW4W/", "nbbzWQ3dUa", "F8k0WQmEra", "bejIAmkU", "W6JcQmkt", "kqfeWOFdQq", "W6rDWP3cJt4", "DenrWRZdKG", "W6ldJSorWOFcSGT+WRK4W5tdKq", "W5eGi8ksvG", "rWdcMSkCW7S", "qLOPgbu", "ymkJcCokiW", "b8o5W6ddR8oW", "WQ7cPmol", "W4NdL1a", "tSoKwmo9W7e", "W5r4W7Cnma", "gX5+W6xdHG", "WPPhW5nyCa", "WQTDWOhcJwW", "w2mLWR4S", "W65jWRFcGZS", "WRX1W44/W6G", "W7KpCbRcMa", "WOzzW68", "gX95W6BdGa", "uL42hqu", "aCkuW7NdKW", "DSo1CSoSW7a", "jmoFCSocWOG", "l8o/vfzO", "mSorWPFdNSoo", "qLpcKCkYka", "ECk1WQqJsG", "W6LjWRhcOsa", "mSo8v11/", "zem5WPyr", "v8k4W4CUEq", "W6C3W4xcU8kG", "dSo5W6tdOCo2", "W7eZW5RcVmk3", "WOFcJuryWP4", "W4iuxqFcNa", "W401W6RcUKm", "CCkRkWdcUa", "sGVcHCkbWRG", "W5HzW6pcLmod", "WQBcJ8kcW4ZdTG", "dwtdJfz/", "WOzmDWGr", "teSIWRy3", "WQ3cO8kZW5hdHq", "mSoBBCofWP8", "WQSjBdzc", "fSouW43dPhy", "oa9dWPRdQq", "fCo1W7ldO8o8", "WPnaWOa", "eCo9W7/dQmoN", "jWz4EmkE", "W4m9WOCXW4a", "WP9DCqWj", "v8kCW5bmW4e", "WQxcPCoi", "kSkhW6BdMCoi", "u8o1W5ldPd8", "W7yvW5ZdJuC", "wM8e", "dbLIW57dKq", "fWjLW77cLa", "WPFcIvTDWO4", "WO1VW54", "W4fiW7VcPCoh", "vJXIW6ug", "W60EFtxcNa", "WR8pzJfE", "dgldQ1Hp", "cSknW7xdLCoo", "i8oPELz9", "F8kGWQqJwq", "ymohqSoPW7K", "AmkEhSo8nW", "D8kOkqxcOa", "y1aAWQmT", "W78lBrFcIq", "WOyAWQ7dOSksWQdcOColeZfSW44t", "W4ddQCowWOOj", "FSkuhSoFoq", "rGVcMmkhW7e", "v8k4W5eGFq", "jCo/AmooWOy", "nCoBCmocWOq", "gYvO", "tSoKwmo7W5e", "W405W6lcULq", "W7y5W4lcPSkG", "nSotymooWOq", "zxOpsCoj", "W5KEW7r8D8oeEty", "W7W4W5JcPG", "WORcNwvqWRu", "W4zPW7iAla", "uqlcMCkFW4a", "fLrOA8kN", "tqtcGCkq", "W4JdQmoHWP8E", "WRtcQSovWRxcGa", "W6eIW4xcU8kZ", "rSoitG", "W6vaWPRcIY0", "qSoiW4pdUtG", "cmoSWOD/jCkIrSovW5xdK8kaW6ysWOq", "W4z+W7hcUSos", "WQWFW7RdSMddKCoeW5RcUqtdJWf7", "r2mHWRu", "W6ldJSosWO3cTNS7WPScW7hdPrVdQG", "W4hdU0ydW5e", "W7WnW44", "WQz+Fr8q", "W4HCWPVcLsG", "WQ1DW4K1W7q", "kmoFBComWOm", "xwmLWRWR", "W65lWPRcIY0", "WQVcT8kEW6JcLa", "W4X/W6ankG", "WQyxB8owWPu", "W7aFW4G", "WRtcJCkgW4ZdOW", "vY9UW6m7", "iComyCozWOO", "WRJdUmkyW6pcHa", "tmoJqmo5W5C", "WRdcU8koW4/cNG", "W5jnW5lcOSou", "WOJcJ8kOWQVcVa", "WQzGW5q", "WO1dWPyFsa", "qgePWPK2", "CCkYW5vfW4y", "W5OxWOGapCk8b0jHzCoFF8kdW4G", "dbLIW5NdNq", "WOLLWRldRa/cJ8owW7XVW4dcKsxdNG", "W4T0W7OEma", "sJP6W6O", "dCoXWOVdTSoZ", "WReRzq", "BvvSWQZdMa", "W55dWQ3cSYa", "lSoOyCoyWP4", "WOb5CWas", "st5LW64", "kCoYua", "cSoKWOC", "W5/dR8olWOmF", "WQFcMSkkW5ddTG", "W5nmW6hcUCof", "W7GwAbJcNG", "uLpcTmkLkG", "W4SzW45uc8oYECkxWO1Ih8ovWQS", "W4D0W6uqoW", "ASkugSoqnq", "WRu4W4pcOCo0", "W4RdQCoqWR4j", "rZP6W6OS", "WOLpW5rtya", "WRdcICkMW4JdPW", "WQ3cSCkeW6JcOG", "WR3cRCkzW6FcHa", "W65yWRRcRde", "auvNBSkH", "sM0IWQmS", "FLnkWPddLG", "ga9yWOxdUq", "bJbBx8kQ", "qKxcN8kqW6W", "BbbgWORdKSk2WQu", "cmopW7NdTmo0", "tCkuW5no", "sCkHW5pcOmk/wCknW7JcRSkVW7irzG", "WQ5xW4boqG", "DNaCW4LK", "rSkhW4XeW4a", "z8kdjGVcTq", "qt9sW70S", "W6xdSfGnW5O", "vWtcHCkzW6S", "WP5aWPKvtW", "kXTK", "xwC+WReS", "DCovW4ZdOYi", "W74gW4/dHLC", "W5jGW7NcTSoj", "rSoZwmoZW4y", "WPHGWOCsuG", "mG9d", "sSkugSoqnq", "WOlcJCkrWORcVq", "z8kVnaFcRW", "iqzVDSky", "wCoiW4tcRmoK", "q3lcVSkQeG", "ubFcJ8k6W7O", "W74jAb/cKW", "BLXXWR0", "WQnGWPxdP8oKWRHHWRWEW4NdJmkPCq", "WRv7WOW", "W6lcIX5NW5O", "W7WsBrpcKG", "WQutDIbs", "WOyrW5NcMSovW57dKmoe", "W7vjWQRcPZW", "qmoGr8o5W4y"];
  return Jn = function() {
    return i;
  }, Jn();
}
function z(i, n, t, e, A) {
  return xA(e - -586, A);
}
function KA(i, n, t, e, A) {
  return xA(n - 67, e);
}
var Is, cs, De;
class HC {
  constructor(n = {}) {
    O(this, De);
    p(this, cs, []);
    p(this, Is, {});
    function t(o, r, g, a, s) {
      return pA(o - 430, a - 963, g - 157, r);
    }
    function e(o, r, g, a, s) {
      return nA(o - 421, r - 346, s - -532, o);
    }
    function A(o, r, g, a, s) {
      return pA(o - 323, s - 1019, g - 397, o);
    }
    F(this, De, PC), this[t(1017, "siAL", 999, 1037) + e("JWqI", 92, -52, -97, -23) + A("FZb6", 1363, 1245, 1371, 1288)](n);
  }
  [(cs = pA(76, 210, 274, "c[Zk") + pA(272, 135, 24, "DyO0"), Is = nA(451, 586, 567, "FwN#") + pA(195, 65, 89, "zoO(") + "s", fA("lwUZ", 1469, 1459, 1598, 1541) + z(-17, -34, -26, -88, "8PYw") + z(26, 59, 59, -28, "DyO0") + "fo")](n) {
    const t = fr(n), e = t == null ? void 0 : t[A(940, 915, "FIJM") + A(1096, 1111, "%pzh") + "s"]();
    function A(a, s, B, I, x) {
      return z(a - 465, s - 382, B - 440, a - 943, B);
    }
    function o(a, s, B, I, x) {
      return KA(a - 447, s - -972, B - 430, a);
    }
    function r(a, s, B, I, x) {
      return pA(a - 186, a - -243, B - 61, x);
    }
    function g(a, s, B, I, x) {
      return z(a - 18, s - 57, B - 282, a - 87, s);
    }
    if (!(e != null && e[r(-19, -36, 15, -22, "lX8#") + "t"]) || !(e != null && e[r(-155, -154, -113, -166, "9@B2")]) || !(e != null && e[A(933, 917, "u^Wo") + o("@RiY", -339, -399)])) {
      if (o("uz(i", -346, -369) === o("siAL", -335, -205)) return _0x35ea24 instanceof _0x51c322 && _0x31ac98[r(-52, -92, -50, -190, "uz(i")] === A(1045, 1136, "DyO0") + g(46, "9&lf", 124) + A(942, 892, "[%^y") + o("1h@#", -212, -345);
      throw new D(r(29, 87, 91, 12, "FwN#") + r(75, 132, 160, 33, "KbDf") + A(822, 841, "e&kW") + o("FNfv", -256, -259) + o("e&kW", -310, -377) + o("1h@#", -254, -162));
    }
    if (t)
      if (g(23, "e&kW", 120) !== g(-6, "6rM$", 54)) this[A(1048, 930, "^9)*") + r(-187, -81, -166, -280, "2MAi") + "s"] = _0x2ed266;
      else {
        const a = {};
        return a[o("^9)*", -172, -164)] = t[g(163, "R1dT", 43)], a.id = e[g(119, "7Xak", 158) + A(1077, 1006, "1h@#")], a;
      }
  }
  async [z(152, 142, 131, 152, "@t%8") + nA(510, 471, 528, "c[Zk") + pA(164, 110, 208, "^M$6") + "m"](n) {
    const t = document[g(764, 657, "FwN#", 747, 653) + g(410, 600, "zoO(", 662, 524) + e("^Dyi", 375, 260, 373)](g(571, 367, "]LMi", 514, 490));
    t[e("siAL", 672, 457, 585) + A(747, 887, 827, 899, "^M$6")] = !0, t[g(777, 552, "9@B2", 735, 643)] = !0, t[a(279, 310, 315, "JWqI") + e("1h@#", 460, 627, 495) + "e"] = !0, t[g(792, 638, "EeKw", 715, 743)][g(705, 711, "6rM$", 590, 689) + A(1062, 1015, 912, 1091, "lwUZ")] = e("y*2W", 638, 635, 598) + A(1039, 973, 1030, 999, "LBE4"), t[o(22, "6rM$", 42, 73)][e("P1a#", 477, 446, 528) + "ty"] = "0", t[g(538, 551, "lX8#", 622, 603)][A(1157, 1020, 974, 975, "izPI") + a(228, 415, 344, "P1a#") + A(827, 956, 1e3, 829, "%roL")] = g(597, 737, "@t%8", 791, 715), t[g(730, 600, "phD&", 633, 658)][g(876, 708, "9&lf", 724, 736)] = g(628, 647, "P4p)", 772, 723);
    function e(s, B, I, x, c) {
      return fA(s, B - 5, I - 440, x - 373, x - -986);
    }
    t[e("y*2W", 541, 514, 413)][g(506, 596, "9&lf", 481, 577) + "t"] = A(1250, 1130, 1148, 1262, "u^Wo");
    function A(s, B, I, x, c) {
      return pA(s - 295, B - 807, I - 336, c);
    }
    function o(s, B, I, x, c) {
      return fA(B, B - 114, I - 311, x - 215, x - -1352);
    }
    const r = await navigator[g(466, 563, "5CW@", 665, 523) + g(611, 490, "2nqP", 487, 630) + "es"][o(85, "f87O", 203, 164) + g(454, 670, "c[Zk", 669, 569) + "ia"](n);
    t[A(938, 1022, 990, 1095, "e&kW") + A(976, 1058, 1152, 1029, "phD&")] = r;
    function g(s, B, I, x, c) {
      return KA(s - 296, c - -53, I - 185, I);
    }
    function a(s, B, I, x, c) {
      return pA(s - 210, I - 165, I - 179, x);
    }
    return await t[o(70, "6rM$", 283, 201)](), r;
  }
  async [fA("iYcP", 1286, 1486, 1230, 1362) + fA("6rM$", 1576, 1501, 1584, 1581) + nA(402, 424, 466, "6rM$")]() {
    var B, I;
    if (!gn())
      if (n(266, 410, 272, "6rM$") === s(563, 475, "FNfv", 489)) {
        const x = {};
        return x[r(1037, 1056, 1136, 978, "c[Zk") + o(201, 315, "dB^7")] = this[g(1592, 1578, 1734, 1571, "lwUZ") + o(683, 570, "vL(t")], x[g(1453, 1396, 1533, 1538, "%9K)") + r(927, 1016, 931, 914, "EeKw") + "e"] = !1, x;
      } else return;
    function n(x, c, E, d, l) {
      return fA(d, c - 388, E - 299, d - 479, E - -1278);
    }
    const t = await this[s(335, 369, "phD&", 365) + "st"](y(this, De)[r(1200, 1107, 1091, 1067, "t&)D")]), e = await this[g(1590, 1678, 1662, 1526, "LBE4") + "st"](y(this, De)[n(220, 163, 222, "%9K)")]), A = ((B = t[r(820, 899, 868, 1041, "R1dT") + s(317, 421, "%roL", 377)]) == null ? void 0 : B[o(397, 490, "^Dyi")]) + n(182, 290, 224, "R1dT") + ((I = e[r(1083, 1154, 1027, 1090, "e&kW") + s(433, 528, "uz(i", 523)]) == null ? void 0 : I[s(408, 405, "e&kW", 301)]);
    function o(x, c, E, d, l) {
      return z(x - 75, c - 224, E - 153, c - 440, E);
    }
    function r(x, c, E, d, l) {
      return fA(l, c - 4, E - 124, d - 64, c - -437);
    }
    function g(x, c, E, d, l) {
      return KA(x - 323, x - 819, E - 211, l);
    }
    const a = await this[o(475, 473, "FNfv") + n(234, 331, 246, "2MAi") + g(1600, 1466, 1623, 1502, "rTOh") + o(676, 571, "2nqP") + "lt"](A, t[s(519, 429, "P1a#", 389) + "ge"], e[n(253, 205, 264, "8PYw") + "ge"]);
    function s(x, c, E, d, l) {
      return fA(E, c - 139, E - 315, d - 296, c - -995);
    }
    this[s(253, 347, "u^Wo", 385) + n(17, 253, 124, "^Dyi")][o(563, 524, "DyO0")](a);
  }
  async [fA("@RiY", 1503, 1478, 1465, 1422) + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    function g(h, m, b, S, G) {
      return fA(h, m - 428, b - 55, S - 164, m - -786);
    }
    let a = 3 * -2260 + 3178 + -2 * -1801, s = o, B;
    function I(h, m, b, S, G) {
      return nA(h - 215, m - 433, h - -668, G);
    }
    let x = this[I(-267, -318, -141, -137, "FIJM") + g("DyO0", 774, 734, 800) + g("P1a#", 665, 799, 771) + "s"](this[d(282, "R1dT", 198, 297, 181) + I(-114, -33, 27, -58, "2nqP") + "s"], A);
    function c(h, m, b, S, G) {
      return z(h - 68, m - 427, b - 133, m - 360, b);
    }
    for (let h = -2843 + -2843 * -1; h < o; h++) {
      if (I(-277, -157, -399, -314, "FwN#") === c(190, 312, "siAL")) throw new _0xcfaac9(I(-234, -108, -337, -131, "KbDf") + d(170, "R1dT", 275, 225, 248) + g("FNfv", 780, 710, 672) + g("6rM$", 674, 675, 773) + g("zoO(", 770, 909, 732) + c(195, 256, "uz(i"));
      {
        if (a > e * r)
          if (l(629, 551, "P1a#") !== g("7Xak", 592, 568, 643)) {
            s = h;
            break;
          } else this[d(358, "%9K)", 367, 345, 378) + l(732, 832, "FIJM") + I(-243, -229, -221, -220, "lYWs") + I(-248, -312, -198, -337, "FIJM") + "or"](_0x566651[d(396, "FZb6", 175, 361, 279)]) && (_0x4331c4 = this[l(694, 635, "1h@#") + g("P1a#", 753, 892, 726) + I(-32, 66, -81, -98, "8PYw") + "s"](this[g("lwUZ", 565, 561, 451) + c(380, 484, "lwUZ") + "s"], _0x11fbae), _0x44633f--);
        const m = await this[l(865, 827, "%pzh") + l(814, 693, "izPI") + l(767, 710, "DyO0") + l(766, 767, "FNfv")](x);
        if (m[c(194, 253, "FNfv")]) {
          if (l(801, 785, "]LMi") === d(146, "%9K)", 282, 372, 258)) {
            const b = {};
            return b[l(760, 622, "uz(i")] = _0x38d54e, b;
          } else if (this[l(855, 865, "2nqP") + c(581, 468, "2MAi") + c(419, 397, "EeKw") + c(185, 328, "u^Wo") + "or"](m[I(-160, -51, -140, -48, "FZb6")]))
            if (l(825, 717, "7Xak") === g("FZb6", 590, 673, 466)) x = this[g("5CW@", 547, 581, 529) + d(399, "P1a#", 375, 427, 329) + I(-47, 87, 52, -166, "DyO0") + "s"](this[l(749, 620, "DyO0") + c(219, 238, "7Xak") + "s"], t), h--;
            else return;
        }
        m[c(396, 506, "vL(t") + g("iYcP", 790, 815, 889)] && (d(288, "@t%8", 367, 411, 287) === d(193, "dB^7", 121, 233, 186) ? (_0x553619 = this[c(420, 287, "FZb6") + c(468, 472, "^M$6") + l(723, 664, "LBE4") + "s"](this[c(507, 381, "JWqI") + c(185, 273, "%pzh") + "s"], _0x1fe233), _0x41ae3c--) : { deviceInfo: B } = m), a += m[l(810, 885, "t&)D") + I(-201, -58, -315, -199, "8PYw")] || 0;
      }
    }
    const E = Math[I(-229, -130, -265, -296, "P4p)")](a / (s || -8196 + 1 * -7907 + 16104));
    this[c(121, 247, "9@B2") + g("[%^y", 814, 747, 858) + "s"] = this[d(314, "iYcP", 276, 301, 277) + c(337, 342, "lX8#") + I(-295, -279, -387, -159, "]LMi") + "s"](this[d(409, "FIJM", 281, 436, 347) + d(175, "R1dT", 154, 210, 124) + "s"], {}, B == null ? void 0 : B.id);
    function d(h, m, b, S, G) {
      return z(h - 11, m - 491, b - 42, G - 252, m);
    }
    function l(h, m, b, S, G) {
      return KA(h - 121, h - 91, b - 125, b);
    }
    const Q = {};
    return Q[c(296, 324, "zoO(") + "ge"] = E, Q[I(-283, -220, -159, -250, "dB^7") + c(419, 386, "u^Wo")] = B, Q;
  }
  async [fA("phD&", 1400, 1430, 1395, 1437) + nA(420, 558, 496, "t&)D") + nA(606, 523, 635, "lX8#") + nA(426, 520, 549, "y*2W")](n) {
    const t = Date[e(-148, "^Dyi", 64, -14, -5)]();
    function e(a, s, B, I, x) {
      return z(a - 199, s - 458, B - 497, x - -138, s);
    }
    function A(a, s, B, I, x) {
      return nA(a - 252, s - 414, x - -761, I);
    }
    function o(a, s, B, I, x) {
      return pA(a - 175, a - 1103, B - 184, s);
    }
    function r(a, s, B, I, x) {
      return fA(x, s - 419, B - 131, I - 165, I - -1541);
    }
    function g(a, s, B, I, x) {
      return pA(a - 151, a - -348, B - 352, I);
    }
    try {
      if (g(-152, -142, -288, "7Xak", -247) === g(-223, -271, -303, "u^Wo", -92)) {
        const a = {};
        a[e(-135, "9&lf", -322, -303, -203)] = _0x430786, _0x3959fb[r(-259, -260, -186, -175, "dB^7") + e(-77, "R1dT", -255, -178, -177)] = a;
      } else {
        const a = await this[r(-176, -267, -215, -198, "P1a#") + o(1378, "%9K)", 1278, 1239, 1348) + g(-120, -179, -51, "2MAi", -257) + "m"](n), s = Date[o(1173, "JWqI", 1120, 1310, 1088)]() - t, B = this[g(-212, -282, -239, "KbDf", -206) + A(-315, -271, -384, "@t%8", -288) + g(-202, -304, -141, "P4p)", -281) + "fo"](a);
        sn(a);
        const I = {};
        return I[g(-167, -306, -237, "P4p)", -58) + g(-84, -107, -43, "vL(t", -163)] = s, I[g(-37, 19, -69, "]LMi", -44) + r(-233, -271, -248, -195, "DyO0")] = B, I;
      }
    } catch (a) {
      if (A(-469, -397, -286, "EeKw", -404) !== r(-183, 6, 3, -68, "]LMi")) {
        const s = {};
        return s[A(-132, -124, -154, "phD&", -143)] = a, s;
      } else {
        const s = {};
        return s[e(-250, "DyO0", -304, -305, -190)] = _0x172776[o(1365, "9&lf", 1463)], s.id = _0x230d17[g(-287, -190, -299, "FwN#") + o(1346, "lYWs", 1463)], s;
      }
    }
  }
  [pA(204, 266, 395, "f87O") + KA(666, 694, 677, "yUF(") + nA(251, 256, 375, "f87O") + nA(475, 481, 499, "6rM$") + "or"](n) {
    function t(r, g, a, s, B) {
      return KA(r - 330, B - 239, a - 435, g);
    }
    function e(r, g, a, s, B) {
      return nA(r - 48, g - 213, B - -489, s);
    }
    function A(r, g, a, s, B) {
      return z(r - 423, g - 327, a - 182, B - 164, r);
    }
    function o(r, g, a, s, B) {
      return nA(r - 327, g - 67, s - 1003, B);
    }
    return n instanceof DOMException && n[A("^M$6", 118, 302, 247, 235)] === t(920, "FwN#", 1116, 1106, 993) + o(1631, 1676, 1695, 1609, "KbDf") + o(1437, 1525, 1444, 1535, "FIJM") + e(-55, -240, -52, "^9)*", -110);
  }
  async [nA(593, 447, 550, "lYWs") + z(201, -22, 12, 113, "rTOh") + z(-36, -171, -26, -75, "zoO(") + fA("zoO(", 1522, 1572, 1387, 1445) + "lt"](n, t, e) {
    return { optSetting: await UC(), afterOpt: t, beforeOpt: e };
  }
  [z(-108, -84, -175, -82, "EeKw") + z(-37, -72, -106, -101, "lYWs") + z(-123, -181, -8, -49, "iYcP")](n) {
    function t(A, o, r, g, a) {
      return z(A - 91, o - 359, r - 370, r - -340, g);
    }
    function e(A, o, r, g, a) {
      return nA(A - 185, o - 26, a - 895, r);
    }
    Object[e(1331, 1377, "e&kW", 1196, 1298) + "es"](n)[t(-417, -423, -425, "2nqP") + "ch"](([A, o]) => {
      function r(I, x, c, E, d) {
        return t(I - 150, x - 439, I - 804, d);
      }
      function g(I, x, c, E, d) {
        return e(I - 324, x - 139, c, E - 112, d - -1452);
      }
      function a(I, x, c, E, d) {
        return e(I - 195, x - 450, x, E - 307, c - -1607);
      }
      function s(I, x, c, E, d) {
        return t(I - 393, x - 69, I - 860, x);
      }
      function B(I, x, c, E, d) {
        return t(I - 252, x - 471, c - 673, d);
      }
      if (s(668, "FZb6") !== B(428, 471, 347, 271, "[%^y")) {
        const I = A;
        y(this, De)[I] && (g(-59, -95, "e&kW", 135, 16) !== s(437, "DyO0") ? { deviceInfo: _0x2739d6 } = _0x29bf5b : y(this, De)[I] = { ...y(this, De)[I], ...o });
      } else {
        const I = { ..._0x1fd6ee }, x = I, c = { ...typeof x[g(107, -82, "rTOh", 49, 34)] == s(670, "8PYw") + "t" ? x[g(98, -97, "9@B2", 59, 40)] : {}, ..._0x2d64b8 }, E = c;
        if (_0x419dfd) {
          const d = {};
          d[a(-56, "%pzh", -175, -158)] = _0x2efafb, E[r(458, 455, 410, 571, "9&lf") + g(-112, -31, "[%^y", -85, -171)] = d;
        }
        return x[B(280, 256, 263, 132, "zoO(")] = E, x;
      }
    });
  }
  [fA("]LMi", 1351, 1428, 1283, 1335) + KA(619, 677, 634, "lYWs") + nA(494, 469, 556, "JWqI") + "s"](n = {}, t = {}, e) {
    function A(c, E, d, l, Q) {
      return pA(c - 75, Q - 1014, d - 17, l);
    }
    const o = { ...n };
    function r(c, E, d, l, Q) {
      return z(c - 10, E - 448, d - 62, l - 1272, c);
    }
    const g = o;
    function a(c, E, d, l, Q) {
      return KA(c - 232, d - -1038, d - 35, Q);
    }
    function s(c, E, d, l, Q) {
      return fA(c, E - 349, d - 118, l - 341, d - -85);
    }
    const B = { ...typeof g[I(-230, -228, -353, -227, "1h@#")] == A(1289, 1172, 1109, "FZb6", 1159) + "t" ? g[A(1162, 1302, 1162, "EeKw", 1235)] : {}, ...t };
    function I(c, E, d, l, Q) {
      return KA(c - 220, l - -928, d - 213, Q);
    }
    const x = B;
    if (e)
      if (a(-409, -602, -515, -485, "DyO0") === a(-367, -266, -234, -117, "LBE4")) {
        const c = {};
        c[a(-390, -495, -474, -513, "^9)*")] = e, x[A(1329, 1297, 1152, "2nqP", 1188) + A(1100, 1246, 1057, "FZb6", 1135)] = c;
      } else {
        const c = _0x590967(_0x3fef23), E = c == null ? void 0 : c[A(1285, 1237, 1321, "@t%8", 1310) + r("R1dT", 1353, 1339, 1213) + "s"]();
        if (!(E != null && E[A(1174, 1006, 1103, "zoO(", 1148) + "t"]) || !(E != null && E[a(-426, -315, -288, -303, "6rM$")]) || !(E != null && E[r("y*2W", 1138, 1330, 1276) + A(1231, 1220, 1014, "[%^y", 1098)])) throw new _0x2e7a16(s("lwUZ", 1511, 1384, 1497) + s("lYWs", 1311, 1265, 1239) + a(-493, -381, -482, -528, "phD&") + a(-235, -196, -339, -316, "FZb6") + A(1120, 1037, 1199, "P4p)", 1158) + r("DyO0", 1499, 1348, 1371));
        if (c) {
          const d = {};
          return d[s("6rM$", 1283, 1355, 1271)] = c[a(-467, -561, -502, -397, "siAL")], d.id = E[a(-280, -342, -236, -343, "zoO(") + A(1010, 1253, 1119, "phD&", 1119)], d;
        }
        return;
      }
    return g[A(1306, 1199, 1390, "2MAi", 1299)] = x, g;
  }
  [KA(773, 794, 924, "lX8#") + z(-160, -7, -133, -57, "KbDf") + z(-209, -42, -22, -67, "R1dT")](n) {
    function t(A, o, r, g, a) {
      return pA(A - 460, A - -559, r - 186, g);
    }
    function e(A, o, r, g, a) {
      return pA(A - 135, r - 1051, r - 404, A);
    }
    this[t(-275, -347, -253, "^9)*") + e("vL(t", 1398, 1297) + "s"] = n;
  }
  [z(-53, -166, -162, -92, "EeKw") + fA("FZb6", 1624, 1463, 1518, 1597) + KA(493, 559, 642, "u^Wo") + nA(358, 535, 482, "P4p)") + KA(851, 798, 738, "phD&")]() {
    function n(o, r, g, a, s) {
      return pA(o - 143, a - 1258, g - 55, o);
    }
    const t = {};
    function e(o, r, g, a, s) {
      return KA(o - 376, s - -1032, g - 189, r);
    }
    t[e(-295, "%roL", -418, -355, -320) + e(-397, "e&kW", -447, -431, -359)] = this[e(-375, "c[Zk", -245, -271, -348) + A(1441, 1434, 1512, 1552, "%roL")];
    function A(o, r, g, a, s) {
      return nA(o - 479, r - 128, o - 818, s);
    }
    return t[n("2nqP", 1255, 1328, 1358) + A(1227, 1137, 1114, 1131, "2MAi") + "e"] = !1, t;
  }
}
De = new WeakMap();
const mr = {};
mr.FRONT = "user", mr.BACK = "environment";
const xa = mr;
function da() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function ig() {
  return /Android/i.test(navigator.userAgent);
}
function xo() {
  return /Firefox/i.test(navigator.userAgent);
}
function KC() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const _C = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function jC() {
  return navigator.userAgent;
}
function qC() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Bn = {};
Bn.width = 1920, Bn.height = 1080, Bn.facingMode = xa.FRONT;
const VC = Bn;
var rt, Rt, te;
class fI {
  constructor({ defaultVideoConstrains: n = VC, minCameraShorterSide: t = pC } = {}) {
    O(this, rt);
    O(this, Rt, []);
    O(this, te, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, F(this, rt, e);
  }
  get availableCameraProperties() {
    return y(this, Rt);
  }
  get mediaStream() {
    return y(this, te);
  }
  get videoTrack() {
    if (y(this, te)) return fr(y(this, te));
  }
  get isCameraActive() {
    var n;
    return !!((n = y(this, te)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    sn(t);
  }
  async open(n = {}) {
    ig() && xo() && await dr(450), F(this, te, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const n = await Ri(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-3 * -811 + -5815 + 3383)] ?? n[-1 * -9567 + -9034 + -533]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    y(this, te) && (sn(y(this, te)), F(this, te, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = y(this, Rt), A;
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
    const n = this.getSettings(), t = await aI(), e = t.find((A) => A.deviceId === n.deviceId);
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
      ig() && xo() && await dr(251 * 5 + 5998 + -1 * 6803);
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
        const B = s;
        y(this, Rt).push(B), sn(o);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...y(this, rt).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new D("Could not init camera settings");
    if (typeof y(this, rt).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < y(this, rt).minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
rt = new WeakMap(), Rt = new WeakMap(), te = new WeakMap();
var ho;
class ZC {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    O(this, ho, !1);
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
    y(this, ho) || (F(this, ho, !0), await fI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), WC() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !xo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, 309 * 27 + -1 * -3381 + -11724, 0), { image: t, timestamp: Date.now() };
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
    this.pauseStream(), !xo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
ho = new WeakMap();
var we;
class zC {
  constructor(n) {
    O(this, we);
    F(this, we, n);
  }
  get videoElement() {
    return y(this, we);
  }
  async play(n) {
    y(this, we).srcObject = n, await y(this, we).play();
  }
  stop() {
    y(this, we).srcObject = null;
  }
  hasSrcObject() {
    return !!y(this, we).srcObject;
  }
}
we = new WeakMap();
(function(i, n) {
  function t(a, s, B, I, x) {
    return dA(s - -104, B);
  }
  function e(a, s, B, I, x) {
    return dA(s - 573, x);
  }
  function A(a, s, B, I, x) {
    return dA(x - 1e3, B);
  }
  function o(a, s, B, I, x) {
    return dA(x - -339, I);
  }
  for (var r = i(); ; )
    try {
      var g = parseInt(A(1512, 1515, "*ssR", 1438, 1501)) / 1 + -parseInt(A(1500, 1544, "ggz$", 1486, 1478)) / 2 * (parseInt(t(457, 461, "OY8$", 512, 416)) / 3) + parseInt(t(398, 425, "K$6T", 392, 490)) / 4 + parseInt(t(366, 363, "wfxi", 345, 375)) / 5 + parseInt(e(1101, 1109, 1119, 1058, "wfxi")) / 6 + parseInt(e(1088, 1041, 1018, 1076, "(nlu")) / 7 * (-parseInt(e(1100, 1145, 1121, 1164, "dDWz")) / 8) + -parseInt(o(256, 212, 245, "J10%", 204)) / 9 * (parseInt(A(1515, 1511, "ggz$", 1477, 1502)) / 10);
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Un, 46 * -7418 + -305 * 538 + -37 * -18344);
function $A(i, n, t, e, A) {
  return dA(A - 959, t);
}
function kA(i, n, t, e, A) {
  return dA(A - 673, e);
}
function he(i, n, t, e, A) {
  return dA(t - 575, e);
}
function WA(i, n, t, e, A) {
  return dA(i - 540, n);
}
function to(i, n, t, e, A) {
  return dA(e - -312, i);
}
function dA(i, n) {
  var t = Un();
  return dA = function(e, A) {
    e = e - (-4800 + -2024 * 1 + 7280);
    var o = t[e];
    if (dA.WCFXBx === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, b = c.length; m < b; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var c = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      dA.YfCoPp = g, i = arguments, dA.WCFXBx = !0;
    }
    var a = t[9 * 1 + -2218 + 2209], s = e + a, B = i[s];
    return B ? o = B : (dA.zTcLzp === void 0 && (dA.zTcLzp = !0), o = dA.YfCoPp(o, A), i[s] = o), o;
  }, dA(i, n);
}
function Un() {
  var i = ["n8orxG", "WR8TWP9DWOC", "W4VdHaNcMWa", "WRC9WPVdSSkH", "ndtdMa", "c8kLAhBcSXtdKCkg", "W5ebW5ddVSka", "uSksWP8yra", "WR9QW5BdIe8", "W6pdMr3dHa0", "iJxcNCoHbq", "WQTGW4y", "cxnL", "E8kZW43dM8k2", "itRdLSkvWRlcPh/dSmoTd8oUta", "rezqW7/cOa", "WRG6WRaAWO7dJCkNW4xcHmkQcmkcEG", "W4JdKv5AdG", "osRcJ8o7lq", "WQCXwSkwWP/cHmoSWP5OW6LnWRO", "WOFdQMBdP8kf", "W6frWQ3dLIy", "W7nxt8kkea", "xSksWPi8xW", "W5CMW6jfWRm", "vSkeWR4qxW", "WOZdPCkVW5Gg", "WQeMWPi", "W4NdIfPAca", "jCo/tXjeW5ddK0RcMeC2", "W77cU8kth8oR", "C8kXW43dLCk+", "it/dL8kuWRhcOI3dOmo5c8oAESoy", "uCo2xvZcKa", "W4fIW6jmW4W", "WQOcfSoDtwO8WOZdO8kQWRO3WOO", "W5fzWONdPuBdMZOFpCk4cSkl", "WQtcRwHFwa", "WOTtua", "CclcOwddOW", "zglcJ8ojW5q", "AvzdW67cSa", "hCo8WQZcHdJcHIxdUCoNAMmqW7S", "WQJcHbdcG8o1", "WRjJWRPpWRa", "i8oUWPtcLSoRWOqcW4qKsK9y", "ngD4W4/cMLXo", "W5OIW7dcJ8o3", "WQ9ubZnwbfe", "rmkKW7FdKMu", "W65wWRBdKtS", "WQNdMmkMe8kQ", "xSkoW53dSCoc", "WQ17WRfyWOS", "W7btwmkkeW", "W7lcNSk9W6it", "Dmk0W5BdNmkR", "W69IW7nCW40", "WPBdShRdISk+", "xSksWPiJuW", "AwPfW7NcUW", "g8kDl21I", "WQxdVCkQhSkh", "W6DKW7y", "WOxdV8kfW5mB", "xCkvW4NdRCoe", "W6/cKCksdG", "iCkLW47cRCoB", "pJddHCoUEW", "W5PYWRXLn2pdGr3cU8ovqge", "ob9EW7/cONrJW6u", "W5VcUSkrW7eJW4GTya", "WRH6W64aWQq", "WO/dV8kUW6GD", "WO4kW6KLrW", "WQD+W4ddQeO", "W6Ttu8kieW", "jSo9W7ddMmo4", "W47dI08", "W7rbtW", "hCkLW4lcOmo6", "jmo9WQxdL8oI", "W79Vcq", "WOaJWOD+WPK", "WQ7cRuHKDW", "W6bDWQVdStS", "W7n0WRBdLIy", "WPyGWO3dV8k7", "WQxdTYyFqW", "W6bLW6HBW5a", "W6XzW6rCW4W", "W5efW6RdSSkJ", "W75puCkCgq", "W5NdQW/cLa8", "cmkAkq", "DCkIa28A", "F3FcG8o2owbrcG", "WQ5+WRCuW7rGvcTKn8o6eq", "WR0LWOm", "nCkDpN1J", "WP1VWQ1NWQa", "W5elW6dcJCoD", "WP1MW5FdRLi", "W4GnW6VdV8ks", "WQOpfmoCtwK4WQtdTSkJWOueWPC", "wmkLfeag", "kmoQW7FdP8ow", "WRtcHGtcICo0", "W4ldLuLrga", "WQpcMqpcImoL", "W5OnW7BdOSkY", "ENBdN8kGEqePgmodkmkbW7ZcJG", "WQpdPmkT", "WReMWOnF", "W5XBgIvq", "W6D5pGz2", "aefBhCkh", "W7TUW6XaW48", "WO/dTCkTW5Kx", "wCkRW60", "FwRcJSoeW6u", "WOtdScWizG", "DtNcTNldOW", "W43cIqW", "CSkLguC", "WPhdRmo5WONcSq", "W7KDWRFdImoo", "WRNcRu5wCq", "WRvOW7mNWQC", "E8kVW5FdM8ku", "WQFdTSk6gSkC", "kaddMCoyEG", "W5ScW7dcK8ot", "WQxcNKRcHwPuWOtdHCkCk0W", "WOhdQCkKW5Sa"];
  return Un = function() {
    return i;
  }, Un();
}
var Cs, Bs, Qs;
class XC {
  constructor() {
    p(this, Qs, 1 * -4244 + -2 * 4938 + 706 * 20);
    p(this, Bs);
    p(this, Cs);
    function n(e, A, o, r, g) {
      return to(r, A - 5, o - 371, g - 31);
    }
    function t(e, A, o, r, g) {
      return to(e, A - 330, o - 195, r - -525);
    }
    this[n(151, 216, 159, ")SNo", 213) + n(268, 261, 185, "Ovzz", 252) + t("HP$%", -313, -362, -302) + t("[2(p", -380, -342, -323)] = Date[t("XAN5", -367, -421, -367)]();
  }
  [(Qs = WA(1114, "nUb!") + he(1048, 1124, 1080, "6Jn8") + kA(1282, 1247, 1285, "Rs%y", 1224), Bs = WA(1022, "D@mE") + kA(1191, 1134, 1175, "mTK8", 1136) + WA(1052, "[iCs") + WA(1070, "j7Cj"), Cs = kA(1169, 1137, 1087, "6Jn8", 1131) + kA(1177, 1224, 1144, "[iCs", 1172) + "p", kA(1150, 1237, 1109, "#*7K", 1177) + $A(1480, 1515, "*ssR", 1407, 1465) + to("wfxi", 249, 244, 199))]() {
    function n(o, r, g, a, s) {
      return WA(o - 148, a);
    }
    this[e("dDWz", 1352, 1340, 1271, 1324) + A(1269, "8%26", 1289) + e("j7Cj", 1316, 1315, 1317, 1318)]++;
    function t(o, r, g, a, s) {
      return WA(o - -1539, r);
    }
    function e(o, r, g, a, s) {
      return kA(o - 183, r - 119, g - 387, o, s - 186);
    }
    function A(o, r, g, a, s) {
      return kA(o - 284, r - 23, g - 462, r, g - 29);
    }
    this[t(-431, "j7Cj") + n(1188, 1147, 1159, "H$5*") + e("kmwA", 1419, 1401, 1403, 1437)] === -6359 + -3661 * 1 + -911 * -11 && (t(-503, "6Jn8") === e("nUb!", 1374, 1277, 1348, 1316) ? this[n(1230, 1167, 1202, "HP$%") + t(-533, "(S9P") + "p"] = Date[e("!y@5", 1427, 1375, 1346, 1414)]() - this[n(1209, 1215, 1209, "(S9P") + e("aZ#3", 1445, 1368, 1362, 1384) + t(-527, "5KxC") + n(1267, 1269, 1332, "t^PU")] : this[A(1162, "(S9P", 1191) + e("k*nY", 1379, 1424, 1342, 1390) + "p"] = _0x2fd164[A(1246, "(S9P", 1197)]() - this[t(-419, "mTK8") + A(1167, "[u9r", 1215) + e("8%26", 1314, 1390, 1404, 1349) + t(-432, "4Eiy")]);
  }
  [$A(1525, 1527, "OY8$", 1514, 1535) + to("9ZtM", 185, 128, 172) + WA(1092, "5KxC") + kA(1219, 1166, 1145, "i$#i", 1192) + "up"]() {
    function n(g, a, s, B, I) {
      return $A(g - 28, a - 269, a, B - 257, s - -1586);
    }
    if (!gn())
      if (A(-114, -53, "AHTI", -59) !== A(35, -21, "Ydyr", 14)) {
        if (!_0x4487e6() || !this[r("k*nY", 13, 55, 96, 54) + r("K$6T", -17, -4, 56, 17) + "p"]) {
          var t = {};
          return t[n(-120, "wfxi", -119, -142) + n(-183, "tFSR", -167, -125) + "e"] = !1, t;
        }
        return { performance: !0, hiccupAmount: this[r("&MCp", 97, 141, 67, 99) + A(-30, -46, "M(M^", -69) + r("H$5*", 80, 131, 132, 124) + "t"](), firstHiccup: this[A(-39, -30, "D@mE", -27) + A(17, 59, "RSyV", 13) + o(1532, 1532, "mTK8") + n(-137, "ggz$", -154, -99) + "ss"]() };
      } else return;
    function e(g, a, s, B, I) {
      return kA(g - 377, a - 403, s - 482, I, B - -164);
    }
    function A(g, a, s, B, I) {
      return he(g - 229, a - 70, B - -1119, s);
    }
    function o(g, a, s, B, I) {
      return WA(g - 431, s);
    }
    function r(g, a, s, B, I) {
      return WA(I - -979, g);
    }
    this[A(-32, 31, ")SNo", 18) + o(1531, 1483, "#*7K") + n(-129, "tFSR", -117, -52)] = 3 * 1331 + 5288 * 1 + -9281, this[r("mTK8", 103, 34, 1, 49) + o(1508, 1448, "(fm(") + "p"] = void 0, window[e(1064, 1015, 1090, 1058, "(S9P") + e(1013, 1048, 952, 1001, "ggz$") + e(1079, 963, 1080, 1027, "D@mE") + A(-31, 62, "j7Cj", 1)](r("wfxi", 53, 100, 77, 47) + "wn", this[r("Rs%y", -22, -18, 29, 42) + r(")SNo", 50, 72, 3, 44) + A(15, 47, ")SNo", 0)][A(-30, -78, "0eEW", -46)](this));
  }
  [$A(1530, 1536, "3im%", 1473, 1479) + kA(1153, 1266, 1252, "M(M^", 1212) + WA(1063, "HP$%") + WA(1074, "kmwA") + "up"]() {
    function n(g, a, s, B, I) {
      return kA(g - 83, a - 180, s - 428, s, B - -39);
    }
    function t(g, a, s, B, I) {
      return he(g - 219, a - 84, I - -1168, g);
    }
    function e(g, a, s, B, I) {
      return kA(g - 30, a - 489, s - 349, I, B - 112);
    }
    if (!gn())
      if (e(1291, 1358, 1362, 1300, "j7Cj") === e(1304, 1365, 1417, 1355, "i$#i")) {
        var A = {};
        return A[t("(7K%", -24, -83, -13, -46) + t("M(M^", -30, -40, -32, -52) + "e"] = !1, A;
      } else return;
    function o(g, a, s, B, I) {
      return $A(g - 166, a - 182, s, B - 11, g - -1073);
    }
    function r(g, a, s, B, I) {
      return $A(g - 140, a - 129, I, B - 164, B - -1305);
    }
    window[t("kmwA", -11, -76, 3, -18) + t("(fm(", -20, -90, -61, -66) + t("tFSR", -25, 48, -18, -9) + "r"](t("Ovzz", -28, -37, -5, -29) + "wn", this[o(475, 527, "wfxi", 417) + t("7d3x", -19, -98, -111, -45) + r(175, 170, 170, 225, "H$5*")][n(1183, 1159, "(fm(", 1190)](this));
  }
  [WA(1094, "JZd2") + he(1145, 1093, 1097, "(S9P") + "lt"]() {
    function n(g, a, s, B, I) {
      return WA(a - 458, I);
    }
    function t(g, a, s, B, I) {
      return kA(g - 424, a - 469, s - 77, B, s - -1549);
    }
    function e(g, a, s, B, I) {
      return to(B, a - 223, s - 335, I - 670);
    }
    function A(g, a, s, B, I) {
      return kA(g - 257, a - 171, s - 172, a, B - -1276);
    }
    if (!gn() || !this[e(896, 772, 859, "JZd2", 829) + n(1548, 1580, 1570, 1596, "ggz$") + "p"])
      if (e(937, 925, 926, "(7K%", 904) !== t(-400, -401, -397, "Ovzz")) {
        var o = {};
        return o[r(265, 159, 203, "HyT3") + t(-268, -302, -291, "J10%") + "e"] = !1, o;
      } else return this[A(-115, "9ZtM", -43, -106) + e(963, 907, 942, "3im%", 911) + "p"];
    function r(g, a, s, B, I) {
      return $A(g - 76, a - 389, B, B - 269, s - -1315);
    }
    return { performance: !0, hiccupAmount: this[A(-125, "AHTI", -77, -71) + r(137, 155, 184, "tFSR") + r(201, 187, 213, "aZ#3") + "t"](), firstHiccup: this[r(164, 193, 160, "HyT3") + r(158, 157, 113, "HyT3") + n(1524, 1575, 1642, 1546, "J10%") + n(1607, 1548, 1524, 1485, "6Jn8") + "ss"]() };
  }
  [WA(1031, "nUb!") + he(1101, 1052, 1082, "kmwA") + he(1004, 1037, 1037, "0eEW") + "t"]() {
    function n(e, A, o, r, g) {
      return $A(e - 116, A - 24, A, r - 349, o - -64);
    }
    function t(e, A, o, r, g) {
      return $A(e - 217, A - 218, o, r - 278, e - -975);
    }
    return this[n(1477, "6Jn8", 1461, 1473) + t(471, 413, "1(Gl", 444) + n(1422, "k*nY", 1421, 1399)];
  }
  [kA(1265, 1292, 1269, "nUb!", 1263) + he(1107, 1179, 1148, "HP$%") + $A(1406, 1496, "&MCp", 1473, 1468) + he(1065, 1032, 1099, "wfxi") + "ss"]() {
    function n(e, A, o, r, g) {
      return $A(e - 382, A - 83, A, r - 6, r - -296);
    }
    function t(e, A, o, r, g) {
      return he(e - 494, A - 207, o - -691, g);
    }
    return this[n(1235, "D@mE", 1198, 1251) + t(354, 343, 360, 407, "AHTI") + "p"];
  }
}
const $C = 480, AB = 240, la = 1 * -9439 + -1 * -4955 + 4514, pI = 15, mI = -4482 + 1 * 7342 + 23 * -124, yr = {};
yr.codec = "avc1.42E01E", yr.bitrate = 1e6;
const _o = yr, eB = -6438 + 6 * -314 + 1 * 8324, tB = -12 * 1579 + 54 * 55 + -79 * -582;
class oB {
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
    let n = 2304 + 7981 * 1 + 17 * -605;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class yI {
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
function nB(i) {
  if (!i) return !1;
  const n = yI.isSupported();
  return !n && D.logError("Video encoding is not supported in this browser."), n;
}
const Dr = {};
Dr.LOW = "low", Dr.STANDARD = "standard";
const Yn = Dr, wr = {};
wr.SPS = "SPS", wr.PPS = "PPS";
const Fi = wr;
class iB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -6212 + -1175 * -1 + 5041, t >= n.length) return;
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
    const A = e === Fi.SPS ? n[t] & -5855 * -1 + 4434 * -1 + -695 * 2 : n[t], o = t + (-25 * 9 + -11 * -797 + -8541);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 0; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === -2017 + -1 * -2017) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-13 * 709 + -4826 + 14045) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-3205 * -1 + 855 * -9 + 4492), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class rB {
  constructor() {
    p(this, "parameterSetsHandler");
    p(this, "START_CODE", new Uint8Array([3221 * -2 + 71 * 101 + -729, 0, -6818 + 159 * 29 + -1 * -2207, -13436 + 4479 * 3]));
    p(this, "parameterSets");
    this.parameterSetsHandler = new iB();
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
    if (t + (-2924 + -126 * -46 + -2868 * 1) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-1 * 3373 + 7346 * -1 + -1 * -10723), r = o + A;
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
    let A = 1 * 8409 + -7431 + -978;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class aB {
  constructor(n = mI, t = la) {
    p(this, "chunks", []);
    p(this, "maxChunksCount");
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
    return this.chunks.slice(Math.max(1 * 2463 + 4451 + -6914 * 1, n));
  }
}
class rg {
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
class gB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (KC() && e > A) {
      const g = e, a = A, s = g / a, B = t * s;
      return { width: Math.floor(B / 2) * (4933 * 1 + 2 * -436 + 1 * -4059), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (1 * -503 + -14 * 152 + 1 * 2633)) * (-9970 + 149 * -39 + 15783) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-643 * -14 + 7 * 581 + -13067)) * (-423 * -17 + 4797 + -2 * 5993), height: t };
  }
  create(n, t) {
    switch (n) {
      case Yn.STANDARD:
        return new rg().setBitrate(_o.bitrate).setCodec(_o.codec).setFramerate(la).setResolution(this.getScaledResolution(t, $C)).build();
      case Yn.LOW:
        return new rg().setBitrate(_o.bitrate).setCodec(_o.codec).setFramerate(pI).setResolution(this.getScaledResolution(t, AB)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class sB {
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
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new gB(), this.chunkStorage = new aB(), this.cameraFramerate = la, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(mI, pI), this.startRecording(Yn.LOW);
  }
  startRecording(n = Yn.STANDARD) {
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
    let n = -4810 * -1 + -3842 + 242 * -4;
    const t = this.cameraFramerate, e = 1e3 / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 3673 * -2 + 90 + 7256;
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
class IB {
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
    return new sB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class cB {
  create(n, t) {
    if (!nB(t)) return;
    const e = new oB(eB, tB), A = new yI(), o = new rB();
    return new IB().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function CB(i) {
  const { facingMode: n = xa.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = PA(null), [A, o] = CA(), [r, g] = CA(), { handleError: a, setIsCameraReady: s } = MA(), B = Ee((x) => {
    g((c) => kC(x, c));
  }, []);
  Z(() => {
    if (!e.current) {
      a(new D("Something went wrong during video initialization"));
      return;
    }
    const x = new zC(e.current), c = new HC(), E = new fI(), d = new XC(), l = new cB().create(E, t), Q = {};
    Q.videoHandler = x, Q.cameraHandler = E, Q.performanceCheckup = d, Q.cameraEvaluator = c, Q.videoRecorder = l;
    const h = new ZC(Q);
    return (async () => {
      try {
        const b = {};
        b.facingMode = n, await h.startFirstVideoStream(b);
      } catch (b) {
        if (b instanceof Error) {
          a(D.fromCameraError(b));
          return;
        }
      }
      o(h), s(!0), B(h.getCameraResolution());
    })(), () => {
      h == null || h.stopStreaming(), s(!1), o(void 0);
    };
  }, [n, a, s, e, B, t]);
  const I = {};
  return I.cameraService = A, I.cameraResolution = r, I.onCameraResolutionChange = B, I.videoRef = e, I;
}
function BB({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = CB(i), r = hA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ w(Fn.Provider, { value: r, children: n });
}
let L;
const Se = new Array(-444 * -6 + -9809 + 1039 * 7).fill(void 0);
Se.push(void 0, null, !0, !1);
function br(i) {
  return Se[i];
}
let Qe = 4981 + 31 * -218 + -1777 * -1, ro = null;
function Qn() {
  return (ro === null || ro.byteLength === -6 * -353 + -1596 + -522) && (ro = new Uint8Array(L.memory.buffer)), ro;
}
const En = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, QB = typeof En.encodeInto == "function" ? function(i, n) {
  return En.encodeInto(i, n);
} : function(i, n) {
  const t = En.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function lo(i, n, t) {
  if (t === void 0) {
    const g = En.encode(i), a = n(g.length, 2650 + -8938 * -1 + -11587 * 1) >>> 6827 * -1 + 5603 + 18 * 68;
    return Qn().subarray(a, a + g.length).set(g), Qe = g.length, a;
  }
  let e = i.length, A = n(e, -3854 + -1 * -75 + 3780) >>> -3559 * -1 + -7484 + -3925 * -1;
  const o = Qn();
  let r = 2585 + -537 * -17 + 5857 * -2;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > -1 * 7939 + 6047 + -673 * -3) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 1 * 9934 + -8060 + -1874 * 1 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-1006 * 1 + 2102 + -1 * 1093), 1) >>> -4 * -510 + 8984 * -1 + 6944;
    const g = Qn().subarray(A + r, A + e), a = QB(i, g);
    r += a.written, A = t(A, e, r, 8779 + -9385 * 1 + 607) >>> 0;
  }
  return Qe = r, A;
}
function DI(i) {
  return i == null;
}
let ao = null;
function ce() {
  return (ao === null || ao.byteLength === -123 * -52 + -2476 + -3920) && (ao = new Int32Array(L.memory.buffer)), ao;
}
let Co = Se.length;
function EB(i) {
  i < -9258 + -1 * -1929 + 7461 || (Se[i] = Co, Co = i);
}
function wI(i) {
  const n = br(i);
  return EB(i), n;
}
const kr = {};
kr.ignoreBOM = !0, kr.fatal = !0;
const bI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", kr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && bI.decode();
function Tn(i, n) {
  return i = i >>> 0, bI.decode(Qn().subarray(i, i + n));
}
function Sr(i) {
  Co === Se.length && Se.push(Se.length + (-43 * -171 + 3086 * -2 + 2 * -590));
  const n = Co;
  return Co = Se[n], Se[n] = i, n;
}
let go = null;
function kI() {
  return (go === null || go.byteLength === 3252 + 1876 * -1 + 1 * -1376) && (go = new Uint32Array(L.memory.buffer)), go;
}
function ag(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = kI();
  for (let A = 9772 + 14 * -698; A < i.length; A++)
    e[t / (279 * -29 + -22 * 429 + 17533) + A] = Sr(i[A]);
  return Qe = i.length, t;
}
function gg(i, n) {
  i = i >>> 3 * 3261 + -2260 + -7523;
  const t = kI(), e = t.subarray(i / (-1483 * 4 + 114 * -27 + -1 * -9014), i / (1 * -7989 + -6217 * -1 + 1776) + n), A = [];
  for (let o = 5218 + -1024 * 4 + 1122 * -1; o < e.length; o++)
    A.push(wI(e[o]));
  return A;
}
function xB(i, n) {
  const t = lo(i, L.__wbindgen_malloc, L.__wbindgen_realloc), e = Qe, A = lo(n, L.__wbindgen_malloc, L.__wbindgen_realloc), o = Qe, r = L.is_mobile_supported(t, e, A, o);
  return ua.__wrap(r);
}
const Gr = {};
Gr.register = () => {
}, Gr.unregister = () => {
};
const sg = typeof FinalizationRegistry > "u" ? Gr : new FinalizationRegistry((i) => L.__wbg_licensevalidationresult_free(i >>> -3364 * -2 + 2004 + -8732));
class ua {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create(ua.prototype);
    return t.__wbg_ptr = n, sg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -1 * -1163 + 4908 + -467 * 13, sg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    L.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = DI(t) ? 0 : lo(t, L.__wbindgen_malloc, L.__wbindgen_realloc), g = Qe;
    const a = ag(e, L.__wbindgen_malloc), s = Qe, B = ag(A, L.__wbindgen_malloc), I = Qe, x = lo(o, L.__wbindgen_malloc, L.__wbindgen_realloc), c = Qe, E = L.licensevalidationresult_new(n, r, g, a, s, B, I, x, c);
    return this.__wbg_ptr = E >>> -10 * 833 + 11 * -113 + -3191 * -3, this;
  }
  get is_valid() {
    return L.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1 * 5953 + -1 * -2279 + 1 * -8232;
  }
  get features_json() {
    try {
      const e = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (2830 * 1 + 1318 * 5 + -9416) + (-753 * -13 + -7678 + -1 * 2111)], t = ce()[e / 4 + (5 * -465 + -1706 + 4032)];
      let A;
      return n !== 2820 * -1 + -5044 + 7864 && (A = Tn(n, t).slice(), L.__wbindgen_free(n, t * (9028 + -13 * 769 + 97 * 10), 6830 * 1 + 4197 + -11026)), A;
    } finally {
      L.__wbindgen_add_to_stack_pointer(2 * 1096 + 3 * 987 + 11 * -467);
    }
  }
  get errors() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / (272 * 26 + -3495 + 1 * -3573) + (-5 * 1984 + -6843 * -1 + 3077)], t = ce()[A / (-163 + -1 * -167) + (165 * -3 + -5421 * -1 + -4925)], e = gg(n, t).slice();
      return L.__wbindgen_free(n, t * (-199 * 13 + -7927 + 1 * 10518), 5686 * -1 + -4973 + -1 * -10663), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(-7 * 227 + 4716 + -3111);
    }
  }
  get warnings() {
    try {
      const A = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / 4 + (854 * -1 + -7566 + 8420)], t = ce()[A / (4088 + -4084 * 1) + (5113 + 149 * -18 + -2430)], e = gg(n, t).slice();
      return L.__wbindgen_free(n, t * (378 * -5 + 2 * -736 + 3366), -1 * -3642 + 1 * 8179 + -1313 * 9), e;
    } finally {
      L.__wbindgen_add_to_stack_pointer(-224 + -60 * -4);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = L.__wbindgen_add_to_stack_pointer(-16);
      L.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / (535 * 1 + 3063 * -3 + 8658) + (-6355 + -1 * -3523 + 2832)], A = ce()[o / (9899 + 1 * 7639 + -17534) + 1];
      return n = e, t = A, Tn(e, A);
    } finally {
      L.__wbindgen_add_to_stack_pointer(-3 * 633 + -9391 + 11306 * 1), L.__wbindgen_free(n, t, -2 * -961 + -1 * 9419 + 7498);
    }
  }
}
async function dB(i, n) {
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
function lB() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = br(t), A = typeof e == "string" ? e : void 0;
    var o = DI(A) ? 10920 + -2730 * 4 : lo(A, L.__wbindgen_malloc, L.__wbindgen_realloc), r = Qe;
    ce()[n / (-2543 + 9 * 283) + (5631 * 1 + 8740 + -14370)] = r, ce()[n / (-1 * -417 + -8869 + -151 * -56) + (-417 * 3 + -5816 + 37 * 191)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    wI(n);
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
function uB(i, n) {
  return L = i.exports, SI.__wbindgen_wasm_module = n, ao = null, go = null, ro = null, L;
}
async function SI(i) {
  if (L !== void 0) return L;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = lB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await dB(await i, n);
  return uB(t, e);
}
function lA(i, n) {
  const t = Pn();
  return lA = function(e, A) {
    e = e - (3777 * 2 + -2764 + -4611);
    let o = t[e];
    if (lA.EnlkKQ === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      lA.BXrMox = B, i = arguments, lA.EnlkKQ = !0;
    }
    const g = t[8601 + -1 * 2178 + -3 * 2141], a = e + g, s = i[a];
    return s ? o = s : (lA.MHRIJJ === void 0 && (lA.MHRIJJ = !0), o = lA.BXrMox(o, A), i[a] = o), o;
  }, lA(i, n);
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return lA(s - 203, g);
  }
  const e = i();
  function A(g, a, s, B, I) {
    return lA(g - 530, a);
  }
  function o(g, a, s, B, I) {
    return lA(g - -163, a);
  }
  function r(g, a, s, B, I) {
    return lA(B - 272, a);
  }
  for (; ; )
    try {
      if (-parseInt(t("dDo7", 423, 435, 455, 421)) / 1 + parseInt(t("va&D", 394, 400, 414, 377)) / 2 * (-parseInt(t("PT2y", 416, 409, 383, 418)) / 3) + -parseInt(A(755, "Ljl8", 765, 748, 760)) / 4 * (parseInt(o(28, "v]vp", 7, 21, 3)) / 5) + -parseInt(t("]VWl", 399, 388, 414, 363)) / 6 + -parseInt(r(460, "*zA^", 510, 485, 487)) / 7 * (parseInt(A(759, "kauj", 769, 766, 782)) / 8) + -parseInt(A(748, "bst4", 774, 773, 747)) / 9 * (-parseInt(o(54, "omuc", 27, 68, 66)) / 10) + parseInt(A(757, "]@^B", 752, 773, 779)) / 11 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Pn, -79003 * -2 + 1 * -22817 + 8627 * 8);
function ut(i, n, t, e, A) {
  return lA(n - -678, i);
}
function jo(i, n, t, e, A) {
  return lA(i - -763, n);
}
function hB(i, n, t, e, A) {
  return lA(A - -944, n);
}
function fB(i, n, t, e, A) {
  return lA(A - -874, t);
}
function Ig(i, n, t, e, A) {
  return lA(e - 241, i);
}
var Es;
class pB {
  constructor() {
    p(this, Es, !1);
  }
  async [(Es = ut("va&D", -474) + ut("v]vp", -448) + fB(-652, -682, "H9lA", -657, -655), ut("owrU", -452))](n) {
    function t(g, a, s, B, I) {
      return ut(I, g - 272);
    }
    function e(g, a, s, B, I) {
      return ut(g, I - -209);
    }
    function A(g, a, s, B, I) {
      return Ig(a, a - 496, s - 405, B - -67);
    }
    function o(g, a, s, B, I) {
      return Ig(g, a - 392, s - 133, s - 725);
    }
    function r(g, a, s, B, I) {
      return ut(a, B - 659);
    }
    try {
      const g = n + (t(-190, -192, -164, -215, "bst4") + "/") + tg;
      await SI(g), this[t(-226, -203, -226, -222, "HFHs") + A(333, "Fg$j", 338, 357, 342) + t(-197, -193, -220, -218, "dC(8")] = !0;
    } catch {
      this[A(373, "9(C0", 333, 358) + r(166, "dDo7", 167, 177) + A(348, "]ffu", 387, 373)] = !1, console[e("HFHs", -672, -702, -724, -699)](tg + (o("OiLy", 1171, 1161) + A(404, "l[Hy", 401, 389) + A(397, "owrU", 356, 382) + t(-203, -205, -216, -219, "7Qax") + e("0w(y", -638, -649, -654, -663) + e("Pdh&", -716, -717, -721, -698) + t(-205, -188, -210, -188, "omuc") + e("OiLy", -643, -670, -651, -656) + o("(Kx2", 1166, 1189) + t(-185, -205, -164, -158, "Pdh&") + A(389, "mpKl", 402, 379) + A(383, "PT2y", 406, 381) + t(-216, -242, -203, -240, "3&A*") + r(185, "%5H1", 187, 179) + "n."));
    }
  }
  [jo(-582, "BUDD") + jo(-551, "dDo7") + hB(-764, "O(86", -751, -760, -757) + "ed"]() {
    function n(e, A, o, r, g) {
      return jo(o - 167, e);
    }
    function t(e, A, o, r, g) {
      return jo(o - 1505, r);
    }
    return this[n("Dsiy", -389, -404) + t(927, 953, 942, "g)2)") + n("yQ$(", -386, -368)];
  }
}
function Pn() {
  const i = ["ASo3WP0iWRS", "W5bED21at8kRxW3cP8kOWP8Z", "odH2W57dQgRcLSole8kgW64UW6e", "W5f5W4KcWPK", "FMeZWOq", "W5RdSCo7W4He", "W7jcWQm9W6O", "tKnDe8oYmmo5", "gCkrWPTPWOi", "WR7dSmoNw8oohaBcMXldKx/cGCo6W6O", "hSkhW7ijiSkVWPyKrSo6W4y", "W7CnhHtcTq", "kSospSoVFG", "FmkqDmoYCCkoWQtdV8og", "sSouWRruDa", "vmopW7D9ja", "WPWSEmkzW7e", "rCotW4NdSmk8", "WRhcKCo/W7SqzwKJAq", "WQ/cPSkXa8kr", "oSognCohAW", "pgyvkSkJ", "WP/dRrm9W7FdJ8kOeSktW4i", "W4pcTfLHWR8", "W51UWPpcLJ4", "ySk2pmojFG", "WRRcPSk2gCkLvvm", "WQFcJCosy3ZdLCkvp8kTW5RcMSog", "kCoYjmoVAW", "WRlcKSo5WQDZfG4cx8opWOaMW5K", "WQSrlmoOWQjLAgqpuq", "WRSRW4GPWQm", "W6D9mSkTW4m", "vmkbWPhdVSkiW7/dO8kAtq", "W7O9zmoMWPOIhXyUW68jWPa", "rmofFSooW6y", "WQFcImotBhZdNCoYbmkKW5xcM8oTka", "W5FdOmoZW5rp", "FmoblCopvSkfrG", "W5OQnSkjWRm", "W43dNZbVwq", "z8oZW4T1W5JcJmkCW7/cGCorW4iNW6e", "W5v0WPpcJq", "WOKLdCo3EZVcQqXvW77cLCkHxIu", "A8ogW4tdMfm", "WQzTWRHnBCkkEG", "fuXpcCol", "WRXefblcOG", "FCkjEmkYjSk4AN7dI8oftq", "WQldPfv0a3NdPbGf", "FMeYWOFcLG", "WRdcNdJcOmk9", "sHyjwCkzDCkNumoGWQGFWOmS", "yCoZn8oAWPG"];
  return Pn = function() {
    return i;
  }, Pn();
}
class vi extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ht(i, n, t, e, A) {
  return V(t - -572, n);
}
(function(i, n) {
  function t(s, B, I, x, c) {
    return V(x - -693, I);
  }
  function e(s, B, I, x, c) {
    return V(s - -604, I);
  }
  var A = i();
  function o(s, B, I, x, c) {
    return V(c - -251, I);
  }
  function r(s, B, I, x, c) {
    return V(I - 791, s);
  }
  function g(s, B, I, x, c) {
    return V(c - -103, x);
  }
  for (; ; )
    try {
      var a = -parseInt(t(-315, -312, "4sD6", -337, -328)) / 1 + -parseInt(t(-310, -285, "Vihe", -321, -288)) / 2 + -parseInt(e(-209, -224, "*gpM", -178, -195)) / 3 * (-parseInt(t(-319, -335, "w&&g", -346, -312)) / 4) + -parseInt(e(-237, -276, "i)m(", -260, -229)) / 5 * (parseInt(g(311, 283, 255, "ZyW^", 290)) / 6) + -parseInt(r("bw49", 1216, 1182, 1194, 1215)) / 7 + parseInt(g(256, 249, 260, "s4WM", 241)) / 8 * (-parseInt(r("H2Ex", 1155, 1183, 1155, 1190)) / 9) + parseInt(e(-265, -286, "r73)", -259, -275)) / 10 * (parseInt(o(86, 110, "w&&g", 143, 109)) / 11);
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Hn, 68114 * 6 + -43 * -194 + 308703);
function Mi(i, n, t, e, A) {
  return V(t - 448, A);
}
function qA(i, n, t, e, A) {
  return V(e - 856, t);
}
function Xe(i, n, t, e, A) {
  return V(e - -778, i);
}
function ft(i, n, t, e, A) {
  return V(e - 495, t);
}
function V(i, n) {
  var t = Hn();
  return V = function(e, A) {
    e = e - (4153 + -3517 * 1 + 5 * -60);
    var o = t[e];
    if (V.DZayLA === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, b = c.length; m < b; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var c = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      V.axtYFU = g, i = arguments, V.DZayLA = !0;
    }
    var a = t[128 * 22 + -3 * -19 + -2873], s = e + a, B = i[s];
    return B ? o = B : (V.tAiXVu === void 0 && (V.tAiXVu = !0), o = V.axtYFU(o, A), i[s] = o), o;
  }, V(i, n);
}
function Hn() {
  var i = ["WOddQI7dGZu", "hGneW7RcPCoSWPebW6ZdUmo+pWO", "W68HvmomWQ8", "W69wWO1ffa", "AamGWR08", "jMVcOSknrG", "W6GHASozWRO", "W7BcSCk8W7iI", "ASkzC0fzDfWuW6a4W7BdSgC", "W5JcOqtdMJ7dVmoWaq", "WPBcPvKBW4rysa", "wvCf", "bGNdNsxcRb7cNG", "WQBcIb/cGaBdNsNcGgRcUCkaW4O", "qJxdRrVdKa", "p1FdPCkDWORdGLVcTcRdOtWVoa", "W6PXsSodDmkjbSoheCoKWPa", "WPpcPuC7W5e", "WRtdV8okW4Gc", "pCoPBG", "FsmVWQGR", "WQ/dQ8kug0S", "r1Cs", "DCoehmkQWRi", "oc7cIeNcJW", "W7BcSCk8", "W7hdMfG", "jCojmXOh", "WOJdMwW", "omkryG", "k3CDW7zG", "W63cUCkQW6WM", "wX5XAYW", "W6RdNZjBjq", "WPtcNmkmhM9oqSkF", "W73cVmoexW7cHSkCW6BcUKXD", "peNcTSksW407W7a", "W4JcQgOlW7y", "dGNdPdFdPCkjWQS", "sc7dUsRdKq", "b0aTdwPDsGhdL8obbCkMna", "W5metgCE", "W75nWOm", "WRZcM3mAEmk2WO7cGmoUW6K6W7VdGW", "yXdcG8oeW54", "W4pcU3eBW60", "WOqdWQSNWQ4", "WOBdJZpdJSkf", "WQeMWPnSAG", "hGfpW73cO8oSWPeRW7VdS8o6ptu", "W5xdMSo7CSoL", "vWn7tsO", "xNSWsxdcTmkAW7ZdMf5AWPm", "WPbow8oOWOi", "zWBcPW", "cvZcLxpcJ8ooW7KZW4qsyc9q", "WRJcMxeBFmoGW6BcQSo1W6GQ", "zw3dIbpdIJOfW6tdQmoQvCoRqW", "c8oQWPhcPCkmWQRdI8kqWOdcLJu", "i3OFW5bR", "W5CCtg0v", "FwdcNmk9W64", "csT3", "W5ZcIxFcN8otW5PCpSkyb1vgBW", "WONcUXKk", "gGRdIvNcUW", "uqf7tc0", "dXKY", "uKvGWP/cTmo4WPqWlsddIwhdIW", "WOhcUqyreq", "WQtdQ8kh", "W5tdUSo0z8oY", "FvlcPMBcPG", "WQyMWPnXzG", "qKeIWR3dTG", "EaBcTmojW6y", "W4hdI8ktpMa", "mufulSkf", "W4tdISkucgy"];
  return Hn = function() {
    return i;
  }, Hn();
}
var at, fo;
class cg {
  constructor(n) {
    O(this, at);
    O(this, fo);
    function t(r, g, a, s, B) {
      return V(a - 966, s);
    }
    function e(r, g, a, s, B) {
      return V(r - -629, g);
    }
    this[t(1344, 1367, 1336, "s4WM") + e(-265, "HhsP")] = n;
    function A(r, g, a, s, B) {
      return V(g - -915, B);
    }
    function o(r, g, a, s, B) {
      return V(s - -647, a);
    }
    try {
      F(this, at, n[t(1339, 1352, 1341, "AsHX", 1324) + e(-239, "UA)v", -274, -250, -232) + t(1364, 1348, 1378, "RzWP", 1407)] && JSON[A(-533, -563, -566, -525, "5uq!")](n[t(1350, 1406, 1372, "LF&q", 1367) + t(1356, 1348, 1331, "AmeD", 1348) + A(-536, -513, -518, -478, "DzRp")])), F(this, fo, n[o(-331, -291, "^V&$", -304, -285) + t(1329, 1346, 1340, "r73)", 1302)]);
    } catch (r) {
      console[e(-261, "Pk86")](r);
    }
  }
  get [qA(1185, 1180, "Zew9", 1204) + "id"]() {
    function n(A, o, r, g, a) {
      return qA(A - 106, o - 129, a, r - -1064);
    }
    function t(A, o, r, g, a) {
      return qA(A - 175, o - 37, g, a - -151);
    }
    function e(A, o, r, g, a) {
      return qA(A - 381, o - 465, r, A - -298);
    }
    return this[t(1039, 1055, 1015, "ZyW^", 1054) + t(1057, 1044, 1042, "ZyW^", 1046)][n(162, 207, 181, 148, "iLZ@") + e(969, 935, "uJ5v")];
  }
  get [qA(1173, 1186, "Fhtu", 1206) + "s"]() {
    function n(e, A, o, r, g) {
      return ht(e - 395, o, g - 941);
    }
    function t(e, A, o, r, g) {
      return qA(e - 373, A - 286, e, g - -1558);
    }
    return this[t("8!5U", -334, -355, -332, -316) + n(778, 778, "PH&D", 746, 745)][t("[[E&", -289, -261, -298, -295) + "s"];
  }
  get [ht(-177, "5uq!", -195) + ht(-244, "4sD6", -206)]() {
    function n(e, A, o, r, g) {
      return ht(e - 109, r, A - 582);
    }
    function t(e, A, o, r, g) {
      return Xe(e, A - 269, o - 96, A - 151);
    }
    return this[n(399, 410, 395, "#a1k") + n(381, 374, 378, "HhsP")][t("bw49", -217, -243) + t("MQWl", -218, -232)];
  }
  get [ft(846, 852, "JKWm", 875) + "b"]() {
    return y(this, at);
  }
  get [ft(836, 826, "w&&g", 832) + qA(1201, 1249, "Zew9", 1214)]() {
    return y(this, fo);
  }
  get [Xe("H2Ex", -434, -367, -395) + qA(1173, 1187, "HhsP", 1201) + ft(897, 892, "[dRY", 898) + Xe("LvlM", -455, -470, -432)]() {
    var r, g;
    function n(a, s, B, I, x) {
      return Xe(a, s - 219, B - 192, x - 1763);
    }
    function t(a, s, B, I, x) {
      return Xe(x, s - 346, B - 199, I - 894);
    }
    function e(a, s, B, I, x) {
      return qA(a - 490, s - 11, s, a - 20);
    }
    function A(a, s, B, I, x) {
      return ht(a - 490, I, s - 701);
    }
    function o(a, s, B, I, x) {
      return ht(a - 204, I, x - -144);
    }
    return !!((g = (r = y(this, at)) == null ? void 0 : r[t(520, 498, 477, 503, "[dRY") + t(490, 543, 496, 524, "UA)v")]) != null && g[e(1255, "Zew9") + e(1290, "UA)v") + n("Pk86", 1335, 1351, 1378, 1358) + t(503, 523, 533, 497, "cdRe") + A(468, 480, 448, "i)m(") + o(-330, -399, -326, "AsHX", -362) + t(450, 487, 520, 487, "Vihe")]);
  }
  get [qA(1267, 1199, "E)xo", 1234) + Xe("iLZ@", -403, -419, -393) + ft(929, 906, "wu^e", 908) + Xe("@S&9", -434, -375, -409) + Mi(875, 826, 836, 823, "K!zk") + Mi(869, 872, 853, 825, "E)xo")]() {
    var r, g;
    function n(a, s, B, I, x) {
      return qA(a - 360, s - 316, s, a - -195);
    }
    function t(a, s, B, I, x) {
      return qA(a - 418, s - 82, I, x - -205);
    }
    function e(a, s, B, I, x) {
      return ft(a - 43, s - 42, x, a - -251);
    }
    function A(a, s, B, I, x) {
      return ft(a - 195, s - 115, B, I - -684);
    }
    function o(a, s, B, I, x) {
      return Mi(a - 361, s - 322, a - 54, I - 289, x);
    }
    return !!((g = (r = y(this, at)) == null ? void 0 : r[e(648, 647, 634, 651, "r73)") + e(638, 608, 640, 603, "E)xo")]) != null && g[e(645, 644, 635, 665, "HKzp") + A(130, 154, "s4WM", 147) + o(884, 877, 914, 909, "JKWm") + A(141, 144, "qd81", 168) + t(1020, 1037, 992, "s4WM", 1006) + n(1058, "^V&$") + e(607, 608, 624, 568, "wu^e")]);
  }
}
at = new WeakMap(), fo = new WeakMap();
function iA(i, n, t, e, A) {
  return oA(e - -44, A);
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return oA(g - -269, a);
  }
  function e(g, a, s, B, I) {
    return oA(s - -292, g);
  }
  function A(g, a, s, B, I) {
    return oA(s - -470, a);
  }
  const o = i();
  function r(g, a, s, B, I) {
    return oA(B - 387, a);
  }
  for (; ; )
    try {
      if (-parseInt(r(657, "^0Ny", 522, 648, 713)) / 1 * (-parseInt(r(600, "P)LX", 563, 604, 697)) / 2) + parseInt(A(-233, "nCbn", -289, -235, -195)) / 3 * (-parseInt(A(-333, "DFN3", -237, -298, -281)) / 4) + parseInt(r(594, "vmNc", 621, 583, 691)) / 5 * (parseInt(e("d7(T", -135, -122, -254, -159)) / 6) + -parseInt(r(646, "UNGh", 824, 728, 826)) / 7 + -parseInt(r(741, "iI3F", 700, 696, 577)) / 8 + parseInt(e("2qXg", 105, 115, 119, 86)) / 9 + parseInt(t(33, "RYFQ", -67, 53, -56)) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Kn, -150826 + 1 * 1025116);
function BA(i, n, t, e, A) {
  return oA(t - -678, n);
}
function oA(i, n) {
  const t = Kn();
  return oA = function(e, A) {
    e = e - (-29 * -329 + -14 * -521 + -16695);
    let o = t[e];
    if (oA.UBLRwW === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      oA.eUMIKa = B, i = arguments, oA.UBLRwW = !0;
    }
    const g = t[1174 + 5302 * 1 + -6476], a = e + g, s = i[a];
    return s ? o = s : (oA.zgBWFw === void 0 && (oA.zgBWFw = !0), o = oA.eUMIKa(o, A), i[a] = o), o;
  }, oA(i, n);
}
function H(i, n, t, e, A) {
  return oA(n - -619, t);
}
function Ae(i, n, t, e, A) {
  return oA(e - -774, A);
}
function mA(i, n, t, e, A) {
  return oA(e - -13, A);
}
function Kn() {
  const i = ["WPezm8obWRq", "W5eoW48", "v8o0uConW7JcNmokW4K0A2JcOXi", "ubLphIy", "bSomhmkodqisWQ3dNq", "WQr4W5ZcNN4", "ssNdVNuW", "qWPshJa", "suSEW4VdHG", "WOlcVr4tya", "WOZcU8kBd1u", "W6OzWRf/lW", "q3XyWPVcH088", "W5BcGI3cKf8", "WOxdJ8o/W6Sp", "WRSEzmkbcLvmlmkyW4SnESkn", "kCkhFSksCa", "W5maW5G", "cmklwsJcSq", "gwP2WRBcUq", "c8oeqINcOq", "icZcN8kvAG", "nmkNfSkwW6O", "WPyRW7SRAa", "WPb+W6FdRX4", "W6bRWPviWRW", "kIaphuG", "W7XZWR/dLmk6", "rdOXW6pdPG1jxdjWuCoBqG", "h2r2W7xcUa", "W5hcKSk5WRTxwmoxd2nF", "Ft3dV282", "aCk9jvVdOMuF", "wSkYxmkmna", "WPhdK2BdLqRcON5wW6GHWOrR", "EIVcS8omW70", "vSknbg/dKG", "WOFdSINcSfi", "W4xcKtdcKeK", "W67cJ8oYWR7cTW", "bSkbC8kdBa", "zI3cKmotW7C", "dSozwdtcTG", "WPRdNZyiuG", "W4ncW4GuW6q", "W7OFWRfHoq", "W4hcISkAyty", "W6jYWRpcLmkI", "WOq4W7SQCW", "W6vVWRddLq", "uSkAh1tdLG", "t1RcQCkbDsDP", "WRFdSJ7cOvS", "fmoSFJjY", "DZZcIW", "WPBdRWFcIhC", "W75MWObvhW", "teSoW6pdIG", "WPxcLatcOwO", "WPldMaqLsa", "idVcNSkvFa", "W4rvWR/dQ8ke", "t8kAvSkvkW", "WOpdOaBcNJi", "WQRcMmouWPZdPq", "W5TFW4CuW64", "W7L8WODKhq", "W5tcKmkVlxjmxa", "r0CzW4RdJq", "W7rWWPzpaW", "WPFdUd8", "W6pcSSkwAW", "gb06WPhcIq", "lSkhzmkJBW", "W4Wog8o4W74", "W5vYWPldISka", "WONdJ8oLW7O", "W6qUkmkDW4a", "CddcJCoGW78", "W6SZimkRW4e", "WOpcRHVcLgy", "e8kBvmkwta", "amoODJ9Z", "WPOnymolW4W", "WOtcT8kG", "WRi9W5GJtG", "WP7cOba4zG", "j8kHFSkpDG", "WONdVI7cSvK", "W4dcG8o1WR/cVa", "WPpcVCkp", "WQCLW7WRzq", "k3/cQSk8W7S", "W59xW5asW6G", "WP7dHsaHAW", "AL7cUcFdRCkam8oSpqdcHCkw", "W5LLWQq", "kcOBovW", "W5HPWRvaWOO", "WQJcRrBcMvm", "WRRdSHu/Cq", "WPlcNmkab1q", "CIFdQW", "dmoFxZq", "WPddLxNdSmon", "WPJcNmoIWP/dMq", "hgPRWRS", "W6tcSSkrBKC", "WPGnzCkr", "fmkNf8kv", "W5Hoo8oEwq", "WPxcQSk9lv4", "WOldOSoBmvldL0pdUNGhWQ7dJfrQ", "imknWQtdVCo4", "WOJcS8kvcvK", "W57cLCo4WOtdKW", "nq/dTxlcTq", "uH9fcq", "W6HknSodsa", "WQlcKSkFehu", "CbhdR1K3", "obZdS37cRW", "DYNdOhiJ", "WOtdTdK", "eMrSWQhcOW", "aCoctslcOq", "WPxdJca", "W5GjW5JcISkc", "W5myWPXKaa", "W4GsW4RcHmkz", "WPhdMw/dQSoq", "WRpdVZOvCq", "bwpcQSkSBa", "kYyHW5Hd", "k8oDWQPcqG", "W4DkqSksWOm", "FNToAXbdefTGDSklWP/cKgS", "c8ozuIi", "k8ovWQ0", "xXuRWPZcHG", "W6aGo8k7W5O", "W5WtW47cO8k7", "cgC/W59j", "CM/dICouldW9wYRcNbZcSmkToG", "W6Hki8ouvq", "gg8rmuO", "WPromGHH", "zCkeECkfzW", "lmorWRSmwa", "EdRdQx4", "WO7dHSo/", "W6qOlmk9W5W", "W692WOb+gG", "ivpcSmkrW6a", "W7xdQCoXp8oW", "emkPcW", "W5OcW5/cQ8k9", "W6bai8kxva", "WOLiW4BdPIm", "l0xcM8kJW64", "W4NdTSopeCoV", "kG/dS3/cTa", "k8kbWRpdM8oJ", "guJcLCkUvG", "WRJcT8oYgMi", "zI3cLSolW6O", "kCoKy2FcIq", "W7XNWPTs", "WOZdImo2W6Tl", "omoMoHjy", "WPjoosm", "WOldMGRcMCoK", "W6vDWQPcpW", "W65KWRldNSkR", "W7n0WOa", "W7v4WR1ZmWNdLu99FsjkWPe", "osKGW5n6", "bmkJeCk3WQm", "WPuximoNWQ4", "l1JcRCkH", "WPzzkdL/", "WONcTW0sFq", "W60ZpCk3W4a", "a8ozEZna", "WO9pmG", "ua5ohJa", "WR0YW6pcJ8k2hmoAW6GYxq", "W7bYWPPp", "WPPIW67dSW", "W5BcScJcU1u", "fq48WP3cKW", "WO7cGCo+WP/dIq", "WRbVW5pcKx8", "W4bpF8okWP9loqG5", "WQBcLsVcOf0", "WOpdSJNcT18", "W54cW4xcNmk3", "c8kNeCkyWQi", "W6bUWRe", "WOldOqhcVN8", "WPhdLgZdQW", "W5TitCkcWQW", "eraIWQhcHa", "WPxdGICTwG", "WPeRW70T", "WPqjDCoCW5e", "vSkiC8khpq", "WPhdRWFcLq", "CY3cJCokW6W", "aCocvclcQW", "dCkHfG", "WOZcVCkadN0", "xmkEsSkvkW", "W7vYWODcga", "W64UpCkDW5m", "BLWiW4ddKq", "CIFdRx8v", "nCoHWQK6ra", "W4FcJ0RdPSk0h2eIkSovW63dS8kCqW", "WOSjC8orW5a", "WQrTW7VdSu0", "WOtcVCkvl1W", "W7aoWRT8oq", "bmofuMNcQq", "WPJdMHdcUW", "fHm8WRFcGa", "W4bmxq", "jSk0f8kuWRG", "eW4HWOhcKG", "WO8LWQKbtG", "mCkjWRZdL8oP", "q1KtW4VdKa", "imoaWQWnwq", "cL/cP8kWW6e", "xCkEh3/dIq", "cmozrsJcTW", "kCkAF8kvCq", "WQlcQZRcM10", "vmksdG", "WQtcSdRcIHi", "WPahySoEW40", "WOuZW6itW5b4WOBdKWnCiIHNDG", "hfNcM8k8", "W4TfxCkEW5K", "fuZcH8kSsW", "n8oMcCksWQK", "W7miWOVcQ8kD", "WOZdTaRcT8oN", "maVdSW", "pYi9W4vp", "jCkqq8k1Aa", "umkngxpdKW", "W6FdUSoXpSoR", "W6OgW5NcGCk7", "wmkEumkQjW", "WOvolYrU", "WPZcIWe0qW", "r8k6lMaJW5dcHxVcV8o+W77cPmoylW", "u8ksr8kdia", "WR9LW6VdUqm", "W7NdTmoT", "nJNcKmoqW7a", "W5PPWQjmWOu", "WP3cGCo4WOldJG", "vIjybY8", "gSo9vJ90", "W6jgmW", "WPlcH8oBWPJdNG"];
  return Kn = function() {
    return i;
  }, Kn();
}
var xs, ds, ls;
class mB {
  constructor(n) {
    p(this, ls);
    p(this, ds, [H(-245, -314, "bs6l") + Ae(-493, -421, -411, -385, "Os@k") + "ic", Ae(-445, -535, -595, -461, "mzmd") + iA(191, 207, 52, 169, "ZbQM") + "ic"]);
    p(this, xs);
    function t(A, o, r, g, a) {
      return oA(r - -760, a);
    }
    function e(A, o, r, g, a) {
      return oA(g - 338, r);
    }
    this[e(456, 619, "JWag", 570) + t(-545, -610, -586, -496, "GIo3") + "d"] = n;
  }
  async [(ls = H(-433, -388, "vRfW") + "se", ds = iA(302, 324, 245, 314, "qaBE") + H(-433, -454, "13BB") + H(-379, -359, "qJ!L") + H(-382, -350, "Os@k"), xs = iA(-9, 50, 136, 125, "gem3") + iA(303, 308, 321, 194, "bs6l"), H(-445, -377, "vmNc"))](n) {
    const t = await this[r("d7(T", -375, -382, -342) + r("d7(T", 14, -65, -116) + g("k4eG", 409, 424, 339, 360)](n);
    function e(a, s, B, I, x) {
      return mA(a - 84, s - 74, B - 195, B - -83, x);
    }
    await Promise[o(330, "bs6l", 380) + e(187, 206, 114, 238, "vRfW")]([this[e(338, 144, 269, 165, "sDvY") + o(315, "t(e6", 267) + "d"][r("yvi3", -122, -162, -149)](n), this[r("DFN3", 10, -142, -117) + r("UBGC", -48, -233, -106) + "e"](t)]);
    function A(a, s, B, I, x) {
      return mA(a - 250, s - 386, B - 172, s - -898, I);
    }
    function o(a, s, B, I, x) {
      return BA(a - 29, s, B - 690);
    }
    function r(a, s, B, I, x) {
      return H(a - 455, I - 125, a);
    }
    function g(a, s, B, I, x) {
      return Ae(a - 301, s - 7, B - 281, x - 897, a);
    }
    this[g("D(Cl", 502, 613, 519, 519) + e(222, 200, 113, 117, "qJ!L") + A(-462, -560, -565, "gem3")]();
  }
  async [BA(-315, "nCbn", -368) + mA(250, 180, 69, 192, "t(e6") + "se"](n) {
    function t(g, a, s, B, I) {
      return iA(g - 285, a - 305, s - 177, I - -773, s);
    }
    function e(g, a, s, B, I) {
      return mA(g - 425, a - 126, s - 72, B - 743, s);
    }
    function A(g, a, s, B, I) {
      return H(g - 319, s - 857, B);
    }
    function o(g, a, s, B, I) {
      return H(g - 100, B - -61, I);
    }
    function r(g, a, s, B, I) {
      return BA(g - 164, I, g - 1225);
    }
    try {
      if (r(885, 1007, 847, 767, "JWag") !== r(845, 790, 924, 757, "P)LX")) return !!this[t(-577, -732, "6eMT", -683, -627) + A(383, 420, 380, "P)LX", 294)];
      {
        const g = await fetch(n);
        if (!g.ok) {
          if (e(814, 913, "gem3", 892, 966) === A(335, 383, 437, "d7(T", 337)) throw new Error(e(1179, 1186, "Os@k", 1062, 1007) + A(485, 497, 473, "JWag", 589) + e(1005, 1017, "sDvY", 976, 859) + A(408, 270, 397, "CLTL", 429) + "d.");
          _0x4beea1[e(1029, 934, "9vOk", 973, 971) + r(797, 731, 906, 806, "dIyB")](_0x78ea49);
        }
        this[e(1080, 1006, "Os@k", 1105, 1017) + "se"] = await g[r(883, 1005, 995, 875, "(*hJ")]();
      }
    } catch (g) {
      if (r(692, 629, 674, 587, "DALC") !== o(-487, -449, -437, -535, "DALC")) throw new _0x27eab4(r(882, 956, 985, 787, "5LA@") + r(813, 847, 780, 714, "PAZH") + o(-579, -475, -469, -500, "vmNc") + t(-597, -632, "Os@k", -601, -631) + ".");
      this[t(-453, -360, "D(Cl", -438, -489) + "se"] = void 0, console[o(-269, -259, -299, -279, "Os@k")](g);
    }
  }
  async [H(-217, -237, "f9wo") + mA(323, 209, 298, 301, "z7Ro") + "e"](n) {
    this[o(1057, "gem3", 1248, 1129) + t(-349, -218, -301, -236, "$tMO")] = void 0;
    function t(g, a, s, B, I) {
      return H(g - 217, B - 12, I);
    }
    function e(g, a, s, B, I) {
      return iA(g - 394, a - 471, s - 438, B - 788, I);
    }
    if (!n)
      if (A(-251, -126, "Dl%R") === A(-94, -127, "UBGC")) this[A(-259, -157, "2qXg") + "se"] = void 0, _0x17d5b3[t(-324, -329, -177, -251, "bs6l")](_0x4b811a);
      else {
        console[t(-295, -324, -284, -392, "ZbQM")](t(-406, -557, -597, -463, "Dl%R") + e(869, 811, 867, 887, "cA%0") + r(100, "nk@X", 92, 297, 200) + A(-171, -214, "CLTL") + A(-248, -147, "$tMO")), this[e(889, 926, 928, 975, "vRfW") + "se"] = void 0;
        return;
      }
    function A(g, a, s, B, I) {
      return iA(g - 39, a - 371, s - 349, a - -377, s);
    }
    function o(g, a, s, B, I) {
      return BA(g - 262, a, B - 1638);
    }
    function r(g, a, s, B, I) {
      return Ae(g - 497, a - 129, s - 298, I - 569, a);
    }
    await this[A(57, -60, "!Ftz") + r(261, "yvi3", 92, 305, 194) + "se"](n);
  }
  async [iA(260, 149, 252, 179, "GIo3") + iA(59, 68, 127, 182, "iI3F") + iA(261, 378, 368, 326, "UNGh")](n) {
    function t(a, s, B, I, x) {
      return BA(a - 341, s, x - 249);
    }
    function e(a, s, B, I, x) {
      return mA(a - 267, s - 388, B - 387, I - 893, a);
    }
    function A(a, s, B, I, x) {
      return H(a - 271, s - -188, x);
    }
    const o = await fetch("" + n + this[A(-581, -544, -503, -473, "RYFQ") + e("5LA@", 1053, 1101, 1043) + e("Dl%R", 1044, 1168, 1173) + e("JWag", 1094, 1165, 1213)][-5238 + 1 * 5238]);
    function r(a, s, B, I, x) {
      return BA(a - 141, x, a - -120);
    }
    const g = o.ok ? -5726 + -29 * 94 + 8452 : -7587 + 297 * -15 + 1 * 12043;
    return "" + n + this[A(-357, -478, -526, -385, "P)LX") + t(-128, "CLTL", -149, -196, -228) + r(-456, -571, -497, -580, "R78N") + r(-658, -583, -538, -660, "P)LX")][g];
  }
  [BA(-432, "qaBE", -507) + BA(-460, "UNGh", -464) + "s"](n) {
    function t(e, A, o, r, g) {
      return H(e - 250, r - 1617, e);
    }
    n[t("9vOk", 1442, 1338, 1378) + "ch"]((e) => console[t("sDvY", 1339, 1434, 1371)](e));
  }
  [Ae(-462, -410, -476, -428, "(*hJ") + BA(-495, "Dl%R", -527) + mA(412, 187, 260, 291, "z7Ro")](n) {
    function t(e, A, o, r, g) {
      return Ae(e - 163, A - 72, o - 202, r - 1571, g);
    }
    n[t(881, 1120, 1106, 989, "RYFQ") + "ch"]((e) => console[t(1135, 1086, 1145, 1163, "s@#I")](e));
  }
  [H(-305, -297, "Dl%R") + H(-146, -266, "JWag")]() {
    function n(e, A, o, r, g) {
      return mA(e - 26, A - 213, o - 451, A - 751, g);
    }
    function t(e, A, o, r, g) {
      return H(e - 255, r - 910, g);
    }
    return window[n(1248, 1144, 1109, 1223, "$tMO") + n(983, 896, 897, 827, "UUEH")][n(989, 1008, 1121, 988, "s@#I") + t(660, 596, 794, 695, "8I$D")];
  }
  [BA(-358, "5LA@", -430) + iA(159, 314, 393, 263, "Dl%R") + BA(-240, "Dl%R", -316)]() {
    function n(r, g, a, s, B) {
      return H(r - 180, s - 198, r);
    }
    function t(r, g, a, s, B) {
      return mA(r - 32, g - 484, a - 378, g - -976, B);
    }
    function e(r, g, a, s, B) {
      return iA(r - 72, g - 126, a - 272, r - 620, g);
    }
    function A(r, g, a, s, B) {
      return BA(r - 358, s, r - 1639);
    }
    function o(r, g, a, s, B) {
      return H(r - 445, s - 1242, a);
    }
    try {
      if (n("6eMT", -210, -54, -97, -195) !== A(1287, 1316, 1158, "UUEH", 1310)) {
        if (!this[n("d7(T", -308, -195, -265, -359) + "se"]) {
          if (A(1185, 1138, 1068, "nk@X", 1066) === o(995, 889, "dIyB", 908, 1023)) throw new vi(n("UNGh", -116, 35, -26, 11) + A(1272, 1279, 1239, "RYFQ", 1241) + e(805, "sDvY", 698, 716, 900) + o(769, 910, "UNGh", 880, 926) + ".");
          _0x278fe1[t(-734, -615, -516, -578, "CLTL")](_0x307f56);
        }
        if (!this[A(1193, 1158, 1284, "JWag", 1309) + e(795, "5LA@", 836, 849, 676) + "d"][o(859, 968, "qJ!L", 848, 794) + A(1214, 1227, 1112, "mzmd", 1271) + t(-813, -688, -679, -760, "9EYw") + "ed"]()) {
          if (n("5LA@", -192, -171, -72, -70) === o(890, 1099, "nk@X", 983, 1098)) return _0x16bf20 instanceof _0x819ef7 && _0x750de7[e(751, "PAZH", 689, 871, 851) + n("!Ftz", -111, -216, -185, -147)](_0x597dd6), null;
          throw new vi(t(-642, -603, -528, -547, "6eMT") + n("z7Ro", -25, -139, -121, -180) + n("qJ!L", 72, -161, -52, -109) + t(-627, -698, -810, -606, "Os@k") + ".");
        }
        this[t(-786, -802, -934, -808, "iI3F") + o(852, 659, "5@vr", 789, 660)] = new cg(xB(this[n("GIo3", -268, -264, -187, -212) + "se"], this[A(1308, 1237, 1434, "PAZH", 1288) + e(848, "&PXm", 859, 729, 936)]())), this[t(-533, -658, -690, -710, "CLTL") + n("GIo3", -103, -127, -40, -68) + "s"](this[t(-912, -781, -754, -753, "Os@k") + t(-688, -683, -673, -582, "9vOk")][n("^0Ny", -26, -31, -134, -33) + "s"]), this[o(988, 992, "PAZH", 875, 748) + A(1133, 1174, 1231, "f9wo", 1118) + t(-571, -597, -612, -548, "9EYw")](this[o(758, 683, "6eMT", 813, 875) + o(872, 1003, "JWag", 1002, 1059)][e(961, "$tMO", 973, 1024, 956) + n("JWag", -22, -143, -81, -16)]);
      } else _0x24cdf1[t(-720, -598, -492, -524, "bs6l") + "ch"]((r) => _0x439698[t(-823, -714, -703, -722, "cA%0")](r));
    } catch (r) {
      if (A(1191, 1325, 1165, "13BB") !== e(767, "2qXg", 901)) return this[A(1122, 1131, 988, "13BB") + A(1243, 1333, 1377, "^0Ny")];
      {
        if (r instanceof vi)
          if (t(-755, -777, -714, -687, "k4eG") === t(-709, -835, -843, -929, "PAZH")) r[e(940, "ZbQM", 1035)]();
          else {
            _0x1a2205 instanceof _0x15d131 ? _0x491d19[e(844, "f9wo", 867)]() : _0x4c9cc7 instanceof _0x16d413 && _0x20b50a[A(1309, 1360, 1344, "9vOk")](_0x49e8ff);
            const a = {};
            a[A(1286, 1176, 1318, "yvi3") + t(-770, -825, -958, -735, "nCbn")] = !1, a[e(974, "z7Ro", 1028) + "s"] = [], a[e(903, "^0Ny", 1015) + e(892, "vmNc", 766)] = [], a[A(1210, 1215, 1263, "$tMO") + n("(*hJ", -121, -157, -109) + n("cA%0", -52, -222, -100)] = void 0, a[e(879, "Os@k", 983)] = function() {
            }, a[t(-800, -792, -862, -758, "f9wo") + o(903, 890, "^0Ny", 769)] = "", this[e(978, "mzmd", 919) + A(1324, 1239, 1424, "cA%0")] = new _0x5772c4(a);
          }
        else r instanceof Error && (t(-694, -606, -584, -654, "z7Ro") !== A(1316, 1326, 1289, "KVaY") ? _0x4d0991[e(820, "CLTL", 737) + "ch"]((a) => _0xf4799d[t(-763, -635, -617, -619, "6eMT")](a)) : console[o(962, 997, "UUEH", 943)](r));
        const g = {};
        g[e(841, "nk@X", 871) + n("Dl%R", -315, -243, -254)] = !1, g[n("8I$D", -254, -172, -272) + "s"] = [], g[A(1260, 1356, 1343, "R78N") + n("Dl%R", -248, -138, -238)] = [], g[t(-718, -705, -671, -643, "nCbn") + A(1279, 1363, 1168, "JWag") + A(1217, 1241, 1203, "DFN3")] = void 0, g[e(891, "f9wo", 764)] = function() {
        }, g[t(-658, -767, -769, -781, "JWag") + e(838, "2qXg", 930)] = "", this[A(1165, 1171, 1142, "KVaY") + e(976, "8I$D", 1075)] = new cg(g);
      }
    }
  }
  [Ae(-339, -422, -432, -437, "DALC") + H(-415, -466, "(*hJ") + H(-438, -343, "nCbn") + Ae(-534, -532, -456, -491, "gem3")]() {
    function n(e, A, o, r, g) {
      return H(e - 372, o - 15, A);
    }
    function t(e, A, o, r, g) {
      return iA(e - 484, A - 257, o - 455, r - -428, e);
    }
    return !!this[t("9vOk", -230, -348, -227) + n(-391, "&PXm", -419)];
  }
  [iA(252, 385, 389, 299, "cA%0") + BA(-616, "R78N", -531) + BA(-493, "!Ftz", -460) + "t"]() {
    function n(e, A, o, r, g) {
      return mA(e - 335, A - 389, o - 449, A - 438, r);
    }
    function t(e, A, o, r, g) {
      return iA(e - 119, A - 375, o - 198, e - -722, g);
    }
    return this[n(584, 702, 613, "dIyB") + t(-486, -590, -371, -594, "DFN3")];
  }
  [mA(77, 296, 139, 208, "sDvY") + iA(87, 160, 230, 161, "t(e6") + "se"]() {
    function n(r, g, a, s, B) {
      return iA(r - 352, g - 252, a - 342, s - 664, g);
    }
    function t(r, g, a, s, B) {
      return H(r - 97, g - 249, r);
    }
    function e(r, g, a, s, B) {
      return Ae(r - 67, g - 370, a - 248, s - 1762, r);
    }
    function A(r, g, a, s, B) {
      return mA(r - 441, g - 311, a - 197, r - 862, s);
    }
    function o(r, g, a, s, B) {
      return Ae(r - 232, g - 212, a - 328, B - 157, s);
    }
    if (!this[t("D(Cl", -42) + "se"])
      if (n(918, "qJ!L", 969, 917) !== e("ZbQM", 1295, 1267, 1215)) {
        if (!this[o(-454, -340, -329, "!Ftz", -363) + "se"]) throw new _0x46dfae(e("dIyB", 1277, 1311, 1318) + e("R78N", 1409, 1322, 1296) + e("9EYw", 1251, 1130, 1129) + A(1120, 1215, 1044, "13BB") + ".");
        if (!this[e("mzmd", 1327, 1122, 1227) + A(1188, 1102, 1095, "ZbQM") + "d"][e("d7(T", 1345, 1364, 1360) + e("yvi3", 1187, 1179, 1246) + t("f9wo", -82) + "ed"]()) throw new _0x47e0f2(n(823, "k4eG", 897, 893) + o(-215, -406, -249, "nCbn", -294) + n(1084, "qJ!L", 1098, 989) + t("vmNc", -36) + ".");
        this[o(-345, -524, -381, "UBGC", -406) + e("vRfW", 1289, 1241, 1247)] = new _0x1d71dc(_0x4ebbbb(this[A(1166, 1221, 1210, "9vOk") + "se"], this[A(1168, 1246, 1222, "yvi3") + t("DALC", 20)]())), this[n(1069, "13BB", 854, 977) + t("cA%0", 23) + "s"](this[n(916, "8I$D", 748, 822) + o(-460, -485, -424, "5@vr", -451)][n(946, "UUEH", 936, 940) + "s"]), this[e("ZbQM", 1057, 1181, 1181) + A(1038, 1103, 910, "UNGh") + A(1141, 1220, 1089, "qJ!L")](this[A(1243, 1344, 1156, "bs6l") + o(-498, -303, -511, "bs6l", -379)][o(-533, -492, -386, "UUEH", -467) + o(-193, -238, -349, "cA%0", -241)]);
      } else return null;
    try {
      if (n(949, "mzmd", 989, 867, 850) !== o(-386, -452, -283, "ZbQM", -376)) this[n(1134, "DFN3", 1022, 1007, 982) + o(-484, -337, -546, "!Ftz", -414) + "d"] = _0xe11ac;
      else return JSON[n(746, "gem3", 756, 793, 904)](this[n(983, "vRfW", 765, 851, 731) + "se"]);
    } catch (r) {
      if (t("UNGh", -119) === A(1135, 1023, 1246, "f9wo")) throw new _0x43206c(t("cA%0", -182) + e("&PXm", 1133, 1275, 1183) + e("2qXg", 1105, 1245, 1148) + A(1025, 936, 1091, "DFN3") + ".");
      if (r instanceof Error)
        if (o(-137, -137, -224, "9EYw", -250) !== e("mzmd", 1031, 1248, 1136)) D[e("5@vr", 1239, 1456, 1332) + t("!Ftz", -134)](r);
        else throw new _0x5f5036(e("9vOk", 1236, 1331, 1228) + o(-431, -341, -284, "s@#I", -321) + e("Os@k", 1064, 1099, 1172) + n(875, "13BB", 919, 901) + "d.");
      return null;
    }
  }
  [Ae(-424, -486, -566, -558, "8I$D") + H(-280, -269, "(*hJ")]() {
    var o;
    function n(r, g, a, s, B) {
      return H(r - 180, g - 713, s);
    }
    function t(r, g, a, s, B) {
      return mA(r - 57, g - 28, a - 452, a - -830, B);
    }
    const e = this[A(1079, "KVaY", 1146, 1240, 1154) + A(1111, "mzmd", 1223, 1095, 1181) + "se"]();
    function A(r, g, a, s, B) {
      return iA(r - 217, g - 225, a - 2, B - 1019, g);
    }
    return ((o = e == null ? void 0 : e[n(237, 276, 327, "mzmd") + A(1270, "!Ftz", 1221, 1228, 1264)]) == null ? void 0 : o[t(-386, -397, -446, -514, "GIo3")]) || [];
  }
  [BA(-328, "D(Cl", -399) + mA(239, 176, 69, 164, "UBGC") + BA(-390, "DFN3", -411)]() {
    var r;
    function n(g, a, s, B, I) {
      return BA(g - 295, g, I - -137);
    }
    function t(g, a, s, B, I) {
      return mA(g - 167, a - 278, s - 467, g - -61, B);
    }
    const e = this[t(154, 82, 146, "d7(T") + A(-268, -284, "6eMT", -188) + "se"]();
    function A(g, a, s, B, I) {
      return mA(g - 126, a - 196, s - 140, B - -332, s);
    }
    function o(g, a, s, B, I) {
      return H(g - 0, B - -302, s);
    }
    return (r = e == null ? void 0 : e[n("&PXm", -445, -496, -397, -525) + t(146, 211, 60, "CLTL")]) == null ? void 0 : r[o(-421, -606, "nk@X", -518) + t(188, 277, 155, "2qXg")];
  }
}
const ha = Re(void 0);
ha.displayName = "CommonConfigurationContext";
function GI() {
  const i = re(ha);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
function _n() {
  const i = ["kSkcASkQW57dOmk9hmknxhddH8ka", "iCo7hSk2q8o/bCkTWQNcVCkAjSoSDG", "cftcUhJdOSkvAIFcGNvvq8oL", "W7a5v03cHLtcKCkiWQSJg8kVWO8", "fW4yaa", "WQFdUCofWOuVW5vOrCkKxLbN", "W7dcH8k8BSo7W7BdTmkaWOhcLCkZW5W", "W7KAWQ4GgG", "z11FEsGmW5bBoqtdRCo5", "ztRcVgxcOGNdQXeKW5GhrCos", "zMDmDvpdTbv4o0dcMCo8ta", "i3ldPvuMW74o", "dI9cW4udWR7dJa3dHCo2BgNdOge", "W7NdM8omos8oW5BcNa", "CSkbomoXA8olW7O", "mWG8W5RcV8okA2ZcV8ovW588", "u8oSWRhdQCkfW6dcU3W", "zaaFW6WromoZhCkbztFdQt0", "rG3dQSkNWRWOWOHZp8kCWROgWQi", "W4hdJ0yniwJcL8k6W57dUSk1W7rc"];
  return _n = function() {
    return i;
  }, _n();
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return JA(I - 863, B);
  }
  function e(g, a, s, B, I) {
    return JA(I - -942, s);
  }
  const A = i();
  function o(g, a, s, B, I) {
    return JA(I - -81, g);
  }
  function r(g, a, s, B, I) {
    return JA(a - 50, g);
  }
  for (; ; )
    try {
      if (parseInt(t(1321, 1312, 1316, "HyzO", 1315)) / 1 + parseInt(e(-486, -496, "XRVf", -498, -495)) / 2 + parseInt(t(1319, 1315, 1322, "ndYG", 1318)) / 3 + parseInt(o("l(B8", 377, 388, 385, 381)) / 4 + parseInt(r("lomh", 507, 513, 500, 507)) / 5 + -parseInt(o("zQR!", 378, 372, 379, 372)) / 6 * (parseInt(e(-476, -484, "M2HX", -485, -486)) / 7) + parseInt(o("yti]", 375, 375, 369, 368)) / 8 * (-parseInt(r("Z*wr", 501, 501, 491, 509)) / 9) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(_n, -244849 * -4 + -1023101 + 109491 * 7);
function JA(i, n) {
  const t = _n();
  return JA = function(e, A) {
    e = e - (1 * 9278 + 1370 + -19 * 537);
    let o = t[e];
    if (JA.CmnAqH === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      JA.StJBng = B, i = arguments, JA.CmnAqH = !0;
    }
    const g = t[0], a = e + g, s = i[a];
    return s ? o = s : (JA.yVdrTN === void 0 && (JA.yVdrTN = !0), o = JA.StJBng(o, A), i[a] = o), o;
  }, JA(i, n);
}
function yB() {
  function i(o, r, g, a, s) {
    return JA(s - 161, o);
  }
  const { assetsDirectoryPath: n } = GI(), [t, e] = CA();
  Z(() => {
    async function o() {
      function r(s, B, I, x, c) {
        return JA(s - -957, B);
      }
      const g = new pB(), a = new mB(g);
      await a[r(-496, "xMxn")](n), e(a);
    }
    o();
  }, [n]);
  const A = {};
  return A[i("4W&%", 630, 616, 625, 625) + "le"] = t, A;
}
function RA(i, n) {
  var t = jn();
  return RA = function(e, A) {
    e = e - (5 * 1576 + -9 * 361 + -118 * 38);
    var o = t[e];
    if (RA.FHvxfT === void 0) {
      var r = function(I) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (var m = 0, b = c.length; m < b; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, g = function(I, x) {
        var c = [], E = 0, d, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      RA.EUlECy = g, i = arguments, RA.FHvxfT = !0;
    }
    var a = t[-18 * -354 + -9121 + -1 * -2749], s = e + a, B = i[s];
    return B ? o = B : (RA.OuKxem === void 0 && (RA.OuKxem = !0), o = RA.EUlECy(o, A), i[s] = o), o;
  }, RA(i, n);
}
function jn() {
  var i = ["W7NdUxj6Ca", "rXBdOZVdRvWmta", "W7ldKSomW4zfe8kTwmoPWQlcLce", "qCokp8kmWP/cRSoWW7hcICk1", "W4hcS0uicmknrmoNW4ldHW", "fSonyxZdLSkWlw49", "z8o8u8o0W5S", "W5W2hrJcKc/dMmkmyZRcIZNcJq", "W6rdW6rYWRHTeW", "W6mVWR4iW6SzF8kxy2nowSoJ", "BWeyWPPokGvhWQBdGmofEW", "kMZdRCk1vGRcHmoqpLifWPq", "kwddOSk1uq/dUCougw0QWRru", "W79DmKrFBCkjCCo6zs9YWRa", "W7FdLCogW45mf8kcyCoIWOlcIZm", "WPpdKCoGW5ldOgmfnW", "v0rsWQbkC21Roa", "u0zwW7eBpvXecSoUW41B", "urrQwCk+W6b/W4HQW5e", "kCoaW5NdSCkFW7ZdMG", "gmkGeSo4W4ahWOGCW6W", "uHnLnSk8W5rdW7bg", "WOa/z8oLWPW", "WQlcUezHu8o/f8oo", "aSoBgHJdGsBdS2HrBG", "vKfCW7Ksoxn9aCooW5jj", "WQbbb8oJW61iqSkU"];
  return jn = function() {
    return i;
  }, jn();
}
(function(i, n) {
  function t(s, B, I, x, c) {
    return RA(B - 170, c);
  }
  function e(s, B, I, x, c) {
    return RA(I - 358, s);
  }
  var A = i();
  function o(s, B, I, x, c) {
    return RA(s - 489, x);
  }
  function r(s, B, I, x, c) {
    return RA(c - 386, B);
  }
  function g(s, B, I, x, c) {
    return RA(B - -30, I);
  }
  for (; ; )
    try {
      var a = -parseInt(r(550, "w4HN", 551, 538, 542)) / 1 * (parseInt(o(659, 668, 651, "6ARz", 655)) / 2) + -parseInt(g(111, 119, "ATV9", 126, 119)) / 3 + -parseInt(r(541, "u1W3", 536, 555, 544)) / 4 * (-parseInt(g(135, 139, "dE9s", 143, 131)) / 5) + -parseInt(r(550, "l0uX", 568, 552, 559)) / 6 * (-parseInt(e("T^7e", 528, 530, 532, 521)) / 7) + parseInt(t(327, 317, 309, 325, "l0uX")) / 8 + -parseInt(e("oFOg", 530, 524, 523, 531)) / 9 * (parseInt(t(344, 333, 344, 328, "]^s1")) / 10) + -parseInt(r(555, "kN)Q", 555, 560, 547)) / 11 * (-parseInt(r(528, "8Ys[", 541, 529, 538)) / 12);
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jn, 142697 * 1 + 263118 + -18761);
function DB({ crosshatch: i }) {
  function n(e, A, o, r, g) {
    return RA(g - -73, r);
  }
  function t(e, A, o, r, g) {
    return RA(g - -667, A);
  }
  return i != null && i[t(-500, "kN)Q", -493, -510, -502) + "id"] ? Ut[n(73, 78, 86, "qc[]", 87) + "r"] : Ut[n(90, 99, 104, "u1W3", 98)];
}
function qn() {
  const i = ["jSoXlXRdOa0VecdcK8kQgq", "bCo/WOH7DG", "W53cHMyrAg1D", "iSoSWPrbDG", "EubfeHvNpHVcULDj", "WP3cHeGiDq", "WOvEwv8aW5dcIJ45W4ddNSkP", "o8oOWPO4W6W4WOO3xq", "W7lcN8koW7FdPgrlWP/cUmksW7pcHa", "mmkRW7OGW6GsWOe", "pXmC", "W4nwWQ3dHrG", "faFdTe3dUa", "wMdcISoJW5O", "W4Tflq", "gXCEsem", "aYtcSCo5ya", "WQFdVcKyWRvcnq", "DCk2FeG", "fSoHW7BdOCkExmknW6NdHbvMrW", "srJdJmkdW6ldRSoxW4H6ESkuuW", "W5RcQCo2WQbpsmkb", "d8kkwbBcRa", "W7VcLSkniCkpESomWRJdJ03cT1S", "uHvQl8kIzYVcOW", "cttdH8kyWOVcN8keWPbsl1mD", "u1NcKJajvt3cVmkMfCk7Dq", "kfdcUmoRFSoRW7VcJZ0ho8oP", "yNtdTmoIExWcWPNdGq", "Emo/WOhcHmoG", "eZVcJayVmtPoxHdcJq", "W4PRoZlcQSoBW6NdOmkOiCkM", "qbBcOSo4WRxcNmoXW4e", "W5Ouc109", "yrSEehldRCkpm8okimk8BG", "sCo/WPZcGSoP", "WPOsBSoAWQfFWOVcO3dcN20"];
  return qn = function() {
    return i;
  }, qn();
}
(function(i, n) {
  function t(a, s, B, I, x) {
    return gA(s - -62, x);
  }
  const e = i();
  function A(a, s, B, I, x) {
    return gA(a - -868, s);
  }
  function o(a, s, B, I, x) {
    return gA(I - 352, s);
  }
  function r(a, s, B, I, x) {
    return gA(s - -860, x);
  }
  function g(a, s, B, I, x) {
    return gA(B - -669, x);
  }
  for (; ; )
    try {
      if (parseInt(A(-560, "8dr1", -550, -543, -567)) / 1 + -parseInt(r(-525, -541, -552, -552, "qgjp")) / 2 * (parseInt(r(-536, -532, -551, -539, "ObPw")) / 3) + parseInt(r(-531, -530, -547, -548, "ssl4")) / 4 * (parseInt(g(-392, -371, -373, -380, "Q1Bg")) / 5) + -parseInt(t(245, 263, 271, 281, "3FPN")) / 6 + -parseInt(o(640, "vS1Z", 662, 658, 673)) / 7 + parseInt(A(-545, "Ra^L", -545, -559, -541)) / 8 * (parseInt(t(263, 265, 250, 259, "u0sP")) / 9) + -parseInt(t(230, 237, 244, 251, "&$zA")) / 10 * (parseInt(A(-571, "^G3X", -558, -586, -562)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(qn, 280657 + -7 * -89557 + -392599);
function gA(i, n) {
  const t = qn();
  return gA = function(e, A) {
    e = e - (9491 * -1 + -1 * -3879 + -844 * -7);
    let o = t[e];
    if (gA.Ykmneq === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      gA.bWUHqi = B, i = arguments, gA.Ykmneq = !0;
    }
    const g = t[1 * -4091 + -8942 + 1 * 13033], a = e + g, s = i[a];
    return s ? o = s : (gA.FCLoYt === void 0 && (gA.FCLoYt = !0), o = gA.bWUHqi(o, A), i[a] = o), o;
  }, gA(i, n);
}
function wB({ children: i }) {
  const { bramble: n } = yB(), t = hA(() => ({ redfin: DB({ crosshatch: n == null ? void 0 : n[A(137, 120, 135, 134, "u0sP") + a(932, 963, 950, "2!Xb", 947) + g("zCFD", -187, -200, -191) + "t"]() }), crosshatch: n == null ? void 0 : n[a(966, 969, 967, "kAOn", 958) + o(1319, 1288, 1305, "zCFD") + r("ssl4", 1145) + "t"](), bramble: n, wasLicenseValidated: n == null ? void 0 : n[r("Xbgd", 1132) + a(959, 938, 943, "77ws", 948) + o(1299, 1303, 1291, "vS1Z") + a(955, 939, 941, "rwaK", 954)]() }), [n]), e = {};
  function A(s, B, I, x, c) {
    return gA(I - -180, c);
  }
  function o(s, B, I, x, c) {
    return gA(I - 974, x);
  }
  e[r("ERi7", 1134)] = t;
  function r(s, B, I, x, c) {
    return gA(B - 827, s);
  }
  function g(s, B, I, x, c) {
    return gA(x - -491, s);
  }
  function a(s, B, I, x, c) {
    return gA(c - 634, x);
  }
  return e[g("J*L#", -193, -182, -193) + A(136, 151, 132, 150, "vS1Z")] = i, w(Gn[a(942, 955, 926, "Xbgd", 937) + a(938, 964, 940, "89ZQ", 950)], e);
}
const bB = 282 * -28 + 4 * 2432 + -8 * -21;
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
    return clearTimeout(e), g ? g.status !== -21 + -421 * -1 && g.status !== 27 * 349 + -9203 * -1 + 9 * -2025 : !0;
  }
}
var Ft, be, Te, vt, po, mo, yo, Do;
class SB {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    O(this, Ft);
    O(this, be);
    O(this, Te);
    O(this, vt);
    O(this, po);
    O(this, mo);
    O(this, yo);
    O(this, Do);
    F(this, Ft, t), F(this, po, n), F(this, Do, e), F(this, mo, window.location.origin), F(this, yo, "8.0.0");
  }
  async init(n) {
    if (F(this, Te, this.shouldCountTransactions(n)), Ea.info("Transaction counting is " + (y(this, Te) ? "enabled" : "disabled")), Qa()) {
      F(this, be, !0), F(this, Te, !1);
      return;
    }
    if (!y(this, Te)) {
      F(this, be, !0);
      return;
    }
    if (F(this, vt, y(this, Ft).transactionCountingToken), !y(this, vt)) {
      console.warn("Transaction counting token is missing"), F(this, be, !1);
      return;
    }
    F(this, be, await y(this, Ft).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, g;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((g = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : g["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!y(this, Te) || !y(this, be)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = y(this, po), e.id = y(this, mo), e.version = y(this, yo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = y(this, Do);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + y(this, vt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return y(this, be) || !1;
  }
}
Ft = new WeakMap(), be = new WeakMap(), Te = new WeakMap(), vt = new WeakMap(), po = new WeakMap(), mo = new WeakMap(), yo = new WeakMap(), Do = new WeakMap();
function GB(i, n) {
  const { crosshatch: t, bramble: e } = Ei(), [A, o] = CA(null);
  Z(() => {
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
  return /* @__PURE__ */ w(Rn.Provider, { value: A, children: i });
}
const We = {};
We.FACE = "web-capture-face", We.DOCUMENT = "web-capture-document", We.MAGNIFEYE = "web-capture-magnifeye", We.SMILE = "web-capture-smile", We.PALM = "web-capture-palm", We.EYEGAZE = "web-capture-eyegaze", We.MULTIRANGE = "web-capture-multirange";
const RB = We;
var TA = function() {
  return TA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, TA.apply(this, arguments);
};
function Yt(i, n, t) {
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
  return vB.test(i) || i.charCodeAt(510 + -1 * -8963 + -9473) === -5019 + 135 * 38 && i.charCodeAt(7310 * -1 + 1373 * -2 + 10057) === 110 && i.charCodeAt(-1256 + 17 * 74) < -5391 + -1 * -3387 + 2095;
});
function WB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Wi, Cg;
function LB() {
  return Cg || (Cg = -103 * 1 + 9098 + 1 * -8994, Wi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), s = -5627 + -179 * 44 + 643 * 21; s < r.length; s++) {
      var B = r[s];
      if (!a(B)) return !1;
      var I = n[B], x = t[B];
      if (o = e ? e.call(A, I, x, B) : void 0, o === !1 || o === void 0 && I !== x) return !1;
    }
    return !0;
  }), Wi;
}
var OB = LB();
const JB = /* @__PURE__ */ WB(OB);
var K = "-ms-", Bo = "-moz-", Y = "-webkit-", NI = "comm", di = "rule", fa = "decl", UB = "@import", RI = "@keyframes", YB = "@layer", FI = Math.abs, pa = String.fromCharCode, Nr = Object.assign;
function TB(i, n) {
  return sA(i, 0) ^ 45 ? (((n << 2707 + -1 * 3873 + 1168 ^ sA(i, -3714 + -3826 * 1 + -145 * -52)) << 367 * 1 + -3 * 3077 + 26 * 341 ^ sA(i, -4543 + 249 * 39 + 1 * -5167)) << -9944 * 1 + -1 * 9812 + 534 * 37 ^ sA(i, -6600 + 3363 * -2 + 13328)) << -4570 * 1 + 2057 * -4 + 512 * 25 ^ sA(i, -11332 + 11335 * 1) : -8466 + -387 * -17 + -37 * -51;
}
function vI(i) {
  return i.trim();
}
function ye(i, n) {
  return (i = n.exec(i)) ? i[0] : i;
}
function W(i, n, t) {
  return i.replace(n, t);
}
function xn(i, n, t) {
  return i.indexOf(n, t);
}
function sA(i, n) {
  return i.charCodeAt(n) | -7 * -1149 + 5 * 373 + -9908;
}
function Tt(i, n, t) {
  return i.slice(n, t);
}
function Ce(i) {
  return i.length;
}
function MI(i) {
  return i.length;
}
function so(i, n) {
  return n.push(i), i;
}
function PB(i, n) {
  return i.map(n).join("");
}
function Bg(i, n) {
  return i.filter(function(t) {
    return !ye(t, n);
  });
}
var li = -1 * -171 + 8871 * -1 + -1 * -8701, Pt = -6706 + -353 * -19, WI = -3761 * -1 + -8940 + 5179, XA = 2339 * 4 + 572 + -9928, AA = -379 * 22 + -1 * 2679 + 11017, Zt = "";
function ui(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = li, a.column = Pt, a.length = r, a.return = "", a.siblings = g, a;
}
function Le(i, n) {
  return Nr(ui("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, n);
}
function pt(i) {
  for (; i.root; ) i = Le(i.root, { children: [i] });
  so(i, i.siblings);
}
function HB() {
  return AA;
}
function KB() {
  return AA = XA > -7232 + -226 * -32 ? sA(Zt, --XA) : 412 + -2041 * 1 + 1629, Pt--, AA === 9284 + 1 * 5611 + -14885 && (Pt = 1 * 6582 + -3765 * 1 + -2816, li--), AA;
}
function ne() {
  return AA = XA < WI ? sA(Zt, XA++) : 9 * 899 + 603 * 1 + -8694, Pt++, AA === 9 * 1043 + 5965 + -6 * 2557 && (Pt = 1, li++), AA;
}
function Ct() {
  return sA(Zt, XA);
}
function dn() {
  return XA;
}
function hi(i, n) {
  return Tt(Zt, i, n);
}
function Rr(i) {
  switch (i) {
    case -402 * -1 + -3994 + 3592:
    case 9:
    case 10:
    case 13:
    case -1683 + 1715 * 1:
      return 1696 * 2 + -9 * -31 + -3666;
    case 33:
    case -5033 * -1 + -8331 + -1 * -3341:
    case 1 * 7773 + 4934 * 1 + -12663:
    case -7 * -908 + -652 * -13 + -14785:
    case -3351 + -2999 * 1 + 28 * 229:
    case 2 * 8 + -4602 + 4650:
    case -3 * 1673 + -9383 + 14528:
    case 2360 + 621 * -13 + 5772:
    case -6468 + -1 * -379 + -1 * -6212:
    case 125:
      return -2249 + 2253 * 1;
    case -823 + -565 * -9 + 4204 * -1:
      return -1 * 4404 + 2 * 3022 + -1637;
    case 34:
    case -5 * 1871 + -4450 + 13844:
    case -2 * 2861 + -4523 * -1 + 1239:
    case -1831 * 5 + -7 * -886 + 3044:
      return -1 * -1279 + 5828 + -203 * 35;
    case 2592 * 1 + 102 * -68 + -4385 * -1:
    case -149 * -9 + 8427 * -1 + 7179:
      return 1798 + -59 * -3 + 42 * -47;
  }
  return 26 * 148 + 8025 + -11873;
}
function _B(i) {
  return li = Pt = -1 * 9503 + -5387 * -1 + 4117, WI = Ce(Zt = i), XA = 12251 + -12251 * 1, [];
}
function jB(i) {
  return Zt = "", i;
}
function Li(i) {
  return vI(hi(XA - (-3522 + 13 * 271), Fr(i === 1 * -6199 + -8262 + 214 * 68 ? i + (122 * 4 + -6701 * -1 + 7187 * -1) : i === -99 * -27 + 503 * 10 + -7663 * 1 ? i + (211 * -23 + -47 * 206 + -158 * -92) : i)));
}
function qB(i) {
  for (; (AA = Ct()) && AA < -2 * -3607 + 99 * 13 + 4234 * -2; ) ne();
  return Rr(i) > 331 * 29 + 6031 * 1 + -4 * 3907 || Rr(AA) > -9662 + -202 * 15 + 12695 ? "" : " ";
}
function VB(i, n) {
  for (; --n && ne() && !(AA < -1 * 1331 + 7513 + -6134 || AA > -265 * -23 + -2984 + -1003 * 3 || AA > 57 && AA < -7528 + -620 * -15 + 3 * -569 || AA > -634 * 10 + -1 * -3673 + 391 * 7 && AA < 8767 + -3559 * 2 + -1552); ) ;
  return hi(i, dn() + (n < 5839 + 294 * 2 + -6421 * 1 && Ct() == 2124 + -701 * 4 + 712 && ne() == 79 * -10 + -1987 + 2809));
}
function Fr(i) {
  for (; ne(); ) switch (AA) {
    case i:
      return XA;
    case -6499 + 1 * 6533:
    case 39:
      i !== 34 && i !== 5 * 1297 + -4182 + -1132 * 2 && Fr(AA);
      break;
    case 3932 + -3521 * 1 + -1 * 371:
      i === -1 * -8802 + 4327 + -13088 && Fr(i);
      break;
    case -1 * -3708 + 11 * 303 + -6949:
      ne();
      break;
  }
  return XA;
}
function ZB(i, n) {
  for (; ne() && i + AA !== -1554 + -1 * -7351 + 1 * -5750 + (1 * 7679 + -8148 + 1 * 479); ) if (i + AA === -1 * 9545 + -7510 + 123 * 139 + (-8650 + 7759 * -1 + 1 * 16451) && Ct() === 2623 + -1559 * 1 + 339 * -3) break;
  return "/*" + hi(n, XA - (-6938 * -1 + 5811 + -12748)) + "*" + pa(i === 4 * 166 + -10 * 797 + 7353 ? i : ne());
}
function zB(i) {
  for (; !Rr(Ct()); ) ne();
  return hi(i, XA);
}
function XB(i) {
  return jB(ln("", null, null, null, [""], i = _B(i), 11 * -402 + -1 * -3389 + 1033 * 1, [0], i));
}
function ln(i, n, t, e, A, o, r, g, a) {
  for (var s = 0, B = -2 * 4304 + -1875 + 10483, I = r, x = -9350 + 7282 * 1 + 2068, c = -156 * 46 + -3361 + 10537, E = -1661 + 9321 * 1 + -7660, d = -29 * 147 + 1 * 6864 + -65 * 40, l = -7695 + -8974 * 1 + 16670, Q = 16 * -305 + -2537 + 1 * 7418, h = 2 * -3483 + -7640 + -218 * -67, m = "", b = A, S = o, G = e, k = m; l; ) switch (E = h, h = ne()) {
    case -16521 + 1 * 16561:
      if (E != 22 * 278 + 5276 + -31 * 364 && sA(k, I - 1) == -4268 + 7 * 618) {
        xn(k += W(Li(h), "&", "&\f"), "&\f", FI(s ? g[s - (7495 + -1 * 914 + -6580)] : 1780 * -1 + -3397 + -1 * -5177)) != -1 && (Q = -1);
        break;
      }
    case 8357 + -147 * 43 + 286 * -7:
    case 13 * 409 + -491 * -13 + -11661:
    case 91:
      k += Li(h);
      break;
    case -15185 + 71 * 214:
    case -1773 * -4 + 1576 + -2886 * 3:
    case -1691 * 1 + -1 * 3782 + 5486:
    case -4 * 1992 + 29 * 281 + 1 * -149:
      k += qB(E);
      break;
    case -8446 + -1 * 1983 + 10521:
      k += VB(dn() - (-8597 * -1 + -244 * 4 + 3810 * -2), -4 * -427 + -58 * 5 + -1411);
      continue;
    case -8412 + 7 * 625 + 4084:
      switch (Ct()) {
        case -6637 + -1 * -6679:
        case -17 * -43 + -3071 * -3 + 9897 * -1:
          so($B(ZB(ne(), dn()), n, t, a), a);
          break;
        default:
          k += "/";
      }
      break;
    case (-46 * -71 + -1961 * -4 + -10987 * 1) * d:
      g[s++] = Ce(k) * Q;
    case (-7645 + -5 * 1969 + 17615) * d:
    case 31 * -54 + -3 * -409 + 506:
    case -1 * 7823 + 1 * -659 + 8482:
      switch (h) {
        case -5197 * 1 + -5993 + 11190:
        case 125:
          l = -282 * -9 + -2427 + -111;
        case -8129 + 33 * -61 + 10201 + B:
          Q == -1 && (k = W(k, /\f/g, "")), c > 7124 + -2659 * -1 + -9783 && Ce(k) - I && so(c > -5 * -159 + 1 * 4766 + 3 * -1843 ? Eg(k + ";", e, t, I - (1 * 2078 + -5823 + 3746), a) : Eg(W(k, " ", "") + ";", e, t, I - (2 * 3418 + -2285 + -1 * 4549), a), a);
          break;
        case -2494 * -1 + -57 * -135 + -5065 * 2:
          k += ";";
        default:
          if (so(G = Qg(k, n, t, s, B, A, g, m, b = [], S = [], I, o), o), h === 123)
            if (B === 6690 + -199 * 27 + 1317 * -1) ln(k, n, G, G, b, o, I, g, S);
            else switch (x === 1790 + 1 * -4981 + 3290 && sA(k, -8168 + -1 * -1678 + 6493 * 1) === 679 * 1 + 4968 + -5537 * 1 ? 599 * -15 + 29 * 13 + 622 * 14 : x) {
              case 100:
              case -643 * -3 + -1 * 5891 + 370 * 11:
              case -8246 + -17 * 62 + -1 * -9409:
              case -4500 + -9098 * -1 + -1 * 4483:
                ln(i, G, G, e && so(Qg(i, G, G, 25 * 43 + 3905 + 2490 * -2, 0, A, g, m, A, b = [], I, S), S), A, S, I, g, e ? b : S);
                break;
              default:
                ln(k, G, G, G, [""], S, -437 * -7 + 2190 + -5249, g, S);
            }
      }
      s = B = c = 103 * 79 + 6288 + 577 * -25, d = Q = 940 + -5 * -566 + -3769, m = k = "", I = r;
      break;
    case 2 * 47 + 4749 + -4785:
      I = -1 * -3523 + -1930 + 199 * -8 + Ce(k), c = E;
    default:
      if (d < -4379 + 60 * 73) {
        if (h == 3 * 219 + -6986 + 6452) --d;
        else if (h == 125 && d++ == 545 + -9 * -316 + -1 * 3389 && KB() == -8500 + 1 * 2114 + 6511) continue;
      }
      switch (k += pa(h), h * d) {
        case -1 * 7349 + 2 * -1324 + 10035:
          Q = B > -2779 * 1 + 55 * 78 + -1511 ? 1 : (k += "\f", -1);
          break;
        case 44:
          g[s++] = (Ce(k) - (5271 * 1 + 8130 + -13400)) * Q, Q = 1267 + -211 * 6;
          break;
        case 1 * 8543 + 2 * -3262 + -1955:
          Ct() === -9144 * 1 + 8774 * -1 + 71 * 253 && (k += Li(ne())), x = Ct(), B = I = Ce(m = k += zB(dn())), h++;
          break;
        case 6821 + 3331 * -1 + 65 * -53:
          E === -4603 + -2324 * -2 && Ce(k) == 5261 + 1579 * 3 + 294 * -34 && (d = 3317 + 1 * 8431 + -11 * 1068);
      }
  }
  return o;
}
function Qg(i, n, t, e, A, o, r, g, a, s, B, I) {
  for (var x = A - 1, c = A === 0 ? o : [""], E = MI(c), d = 146 + 146 * -1, l = 5261 + 5261 * -1, Q = 148 * -11 + 9276 + -7648; d < e; ++d) for (var h = 10390 + -5195 * 2, m = Tt(i, x + (-9627 + 6129 * 1 + 3499), x = FI(l = r[d])), b = i; h < E; ++h) (b = vI(l > -227 * -7 + 8068 + 9 * -1073 ? c[h] + " " + m : W(m, /&\f/g, c[h]))) && (a[Q++] = b);
  return ui(i, n, t, A === -5747 * 1 + -3 * -2553 + 1 * -1912 ? di : g, a, s, B, I);
}
function $B(i, n, t, e) {
  return ui(i, n, t, NI, pa(HB()), Tt(i, 1 * -3454 + 1 * -4871 + 8327, -2), -6224 * 1 + 1542 * -1 + 3883 * 2, e);
}
function Eg(i, n, t, e, A) {
  return ui(i, n, t, fa, Tt(i, -5620 + -9 * -37 + -5287 * -1, e), Tt(i, e + (2 * 1182 + 2 * -3709 + 5055), -1), e, A);
}
function LI(i, n, t) {
  switch (TB(i, n)) {
    case -6513 + 5808 * 2:
      return Y + "print-" + i + i;
    case -4048 + -1 * -7073 + 2712:
    case 69 * 57 + -6788 + -1764 * -4:
    case -1 * 7537 + -868 + 11582:
    case 6411 + 2 * -1489:
    case 1 * -3979 + -1 * 7190 + 12810:
    case -2 * -2595 + 1826 + -2559:
    case 2921:
    case -8729 + -3 * -4767:
    case 5 * -839 + -4163 + -14714 * -1:
    case -13036 + 160 * 118:
    case -1 * -9149 + -1075 * 6 + -4 * -123:
    case 6645:
    case 4201 + -4 * 299:
    case -20502 + 1 * 26893:
    case 5879:
    case -8264 + -4037 * 1 + 17924:
    case 457 * 6 + -937 + 4330:
    case -5257 + -72 * -72 + 1168 * 4:
    case 4855:
    case 3532 * -2 + -9459 + -1 * -20738:
    case -4405 + -5477 * -2 + -160:
    case -7 * -574 + 8285 + -7194:
    case -8 * 1142 + -7 * 59 + -2 * -7457:
    case -3020 * 2 + -4139 + -79 * -200:
    case 3829:
      return Y + i + i;
    case -9220 + -1 * -14009:
      return Bo + i + i;
    case 3416 + 1 * -9543 + -5738 * -2:
    case 9915 + 7 * 1208 + -14125:
    case 2 * 3957 + -1 * -2246 + -5350:
    case 1648 * -5 + -1791 + 16999:
    case 4901 + -13 * -259 + 1 * -5512:
      return Y + i + Bo + i + K + i + i;
    case -1262 + 122 * 59:
      switch (sA(i, n + (-548 * -1 + 6676 + -7213))) {
        case -11 * 184 + 7079 + 1647 * -3:
          return Y + i + K + W(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return Y + i + K + W(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -6854 + -1 * 6903 + 13802:
          return Y + i + K + W(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 9927 + 1 * -8248 + -1 * -5149:
    case -5 * -1087 + -1191 + 2 * 12:
    case 9126 + -10 * -825 + -14473:
      return Y + i + K + i + i;
    case -10765 + 5 * 3386:
      return Y + i + K + "flex-" + i + i;
    case -121 * 30 + 3396 + 1807 * 3:
      return Y + i + W(i, /(\w+).+(:[^]+)/, Y + "box-$1$2" + K + "flex-$1$2") + i;
    case 131 * -13 + 1038 * -4 + 807 * 14:
      return Y + i + K + "flex-item-" + W(i, /flex-|-self/g, "") + (ye(i, /flex-|baseline/) ? "" : K + "grid-row-" + W(i, /flex-|-self/g, "")) + i;
    case 5 * -1342 + -9687 + 21072:
      return Y + i + K + "flex-line-pack" + W(i, /align-content|flex-|-self/g, "") + i;
    case 9 * 763 + -34 * -142 + -3 * 2049:
      return Y + i + K + W(i, "shrink", "negative") + i;
    case 5292:
      return Y + i + K + W(i, "basis", "preferred-size") + i;
    case 9586 * -1 + 2 * -1978 + 19602:
      return Y + "box-" + W(i, "-grow", "") + Y + i + K + W(i, "grow", "positive") + i;
    case 7179 + -1930 * 3 + 3165:
      return Y + W(i, /([^-])(transform)/g, "$1" + Y + "$2") + i;
    case 6011 + -439 * 14 + 58 * 109:
      return W(W(W(i, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), i, "") + i;
    case 2 * 4132 + -3020 * 2 + -1 * -3271:
    case -5914 + -3565 * -1 + 6308:
      return W(i, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return W(W(i, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + i + i;
    case 9144 + -309 * 16:
      if (!ye(i, /flex-|baseline/)) return K + "grid-column-align" + Tt(i, n) + i;
      break;
    case 63 * 87 + 11 * -341 + 862:
    case -1 * -6823 + -1573 + 105 * -18:
      return K + W(i, "template-", "") + i;
    case 78 * 106 + -1419 + 5 * -493:
    case -1425 * 4 + 2403 + 6913 * 1:
      return t && t.some(function(e, A) {
        return n = A, ye(e.props, /grid-\w+-end/);
      }) ? ~xn(i + (t = t[n].value), "span", 2380 + 238 * -10) ? i : K + W(i, "-start", "") + i + K + "grid-row-span:" + (~xn(t, "span", -7606 * -1 + -8294 + 8 * 86) ? ye(t, /\d+/) : +ye(t, /\d+/) - +ye(i, /\d+/)) + ";" : K + W(i, "-start", "") + i;
    case 2858 + 179 * -55 + 11883:
    case 731 * -7 + -2213 + -17 * -674:
      return t && t.some(function(e) {
        return ye(e.props, /grid-\w+-start/);
      }) ? i : K + W(W(i, "-end", "-span"), "span ", "") + i;
    case 1 * 431 + 1 * 9203 + -1 * 5539:
    case -1 * -9274 + 4086 + -9777:
    case -541 * -7 + 9562 + 1 * -9281:
    case -6631 * -1 + -9625 + 5526:
      return W(i, /(.+)-inline(.+)/, Y + "$1$2") + i;
    case 18218 + -1 * 10102:
    case -8948 + -99 * 130 + 28877:
    case -60 * 48 + 10339 * 1 + 1 * -1706:
    case -1609 + -94 * -76:
    case 5445:
    case -5339 * -2 + -10401 + 16 * 339:
    case -7739 + -99 * -128:
    case 1347 * 3 + 4668 * 1 + 64 * -63:
    case 1 * -8452 + 41 * -14 + 4853 * 3:
    case 11425 + -2039 * 1 + 327 * -11:
    case 5021:
    case -7619 + -6437 * -1 + 5947:
      if (Ce(i) - (2735 + 1293 * -6 + -5024 * -1) - n > -5824 + 1 * 5830) switch (sA(i, n + (-83 * 120 + 2329 + 16 * 477))) {
        case -9 * -893 + -726 + -3601 * 2:
          if (sA(i, n + (947 * -4 + -804 + -6 * -766)) !== -164 * -53 + 9801 + -18448) break;
        case -671 * 1 + -2 * 2705 + 6183:
          return W(i, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + Bo + (sA(i, n + (9973 * -1 + -6647 + 5541 * 3)) == -571 + 554 * -4 + -193 * -15 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~xn(i, "stretch", -68 + 4 * 2237 + -444 * 20) ? LI(W(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 5152:
    case -10 * 1101 + -515 * -7 + 13325 * 1:
      return W(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, s) {
        return K + A + ":" + o + s + (r ? K + A + "-span:" + (g ? a : +a - +o) + s : "") + i;
      });
    case 4949:
      if (sA(i, n + (-575 * -11 + -282 + -6037)) === 10287 + 34 * -299) return W(i, ":", ":" + Y) + i;
      break;
    case -6529 * -1 + 45 * -61 + 665 * 4:
      switch (sA(i, sA(i, 15 * -563 + -3647 + 2 * 6053) === -6791 + -2647 * -1 + -71 * -59 ? -2 * 3884 + -1084 * 2 + -1 * -9954 : -965 * -5 + -9417 + 4603)) {
        case 3669 + -4 * 1434 + 2187:
          return W(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Y + (sA(i, -1189 * -4 + 9532 + -14274) === -1953 + -222 * -9 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + K + "$2box$3") + i;
        case -1 * -2039 + -2481 + -542 * -1:
          return W(i, ":", ":" + K) + i;
      }
      break;
    case 82 * 83 + -11262 + -1 * -10175:
    case -158 * -4 + 5234 + 3 * -1073:
    case 2 * -4123 + 8337 + 2044:
    case -1 * -3191 + 2349 * -1 + 617 * 5:
    case -5180 * 1 + 11 * 335 + 29 * 134:
      return W(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Vn(i, n) {
  for (var t = "", e = 1 * -4700 + 2591 * -3 + 12473; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function AQ(i, n, t, e) {
  switch (i.type) {
    case YB:
      if (i.children.length) break;
    case UB:
    case fa:
      return i.return = i.return || i.value;
    case NI:
      return "";
    case RI:
      return i.return = i.value + "{" + Vn(i.children, e) + "}";
    case di:
      if (!Ce(i.value = i.props.join(","))) return "";
  }
  return Ce(t = Vn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function eQ(i) {
  var n = MI(i);
  return function(t, e, A, o) {
    for (var r = "", g = 0; g < n; g++) r += i[g](t, e, A, o) || "";
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
        i.return = LI(i.value, i.length, t);
        return;
      case RI:
        return Vn([Le(i, { value: W(i.value, "@", "@" + Y) })], e);
      case di:
        if (i.length) return PB(t = i.props, function(A) {
          switch (ye(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              pt(Le(i, { props: [W(A, /:(read-\w+)/, ":" + Bo + "$1")] }));
              var o = {};
              o.props = [A], pt(Le(i, o)), Nr(i, { props: Bg(t, e) });
              break;
            case "::placeholder":
              pt(Le(i, { props: [W(A, /:(plac\w+)/, ":" + Y + "input-$1")] })), pt(Le(i, { props: [W(A, /:(plac\w+)/, ":" + Bo + "$1")] })), pt(Le(i, { props: [W(A, /:(plac\w+)/, K + "input-$1")] }));
              var r = {};
              r.props = [A], pt(Le(i, r)), Nr(i, { props: Bg(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var nQ = v, U = {}, Et = typeof process < "u" && U !== void 0 && (U.REACT_APP_SC_ATTR || U.SC_ATTR) || "data-styled", OI = "active", JI = "data-styled-version", fi = "6.1.18", ma = `/*!sc*/
`, Zn = typeof window < "u" && typeof document < "u", iQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== "" ? U.REACT_APP_SC_DISABLE_SPEEDY !== "false" && U.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.SC_DISABLE_SPEEDY !== void 0 && U.SC_DISABLE_SPEEDY !== "" ? U.SC_DISABLE_SPEEDY !== "false" && U.SC_DISABLE_SPEEDY : U.NODE_ENV !== "production"), xg = /invalid hook call/i, qo = /* @__PURE__ */ new Set(), rQ = function(i, n) {
  if (U.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 53 * 63 + -8900 + 5562; a < arguments.length; a++) g[a - (-1598 * -4 + -5003 + -4 * 347)] = arguments[a];
        xg.test(r) ? (o = !1, qo.delete(e)) : A.apply(void (3479 * 1 + -8625 + 166 * 31), Yt([r], g, !1));
      }, PA(), o && !qo.has(e) && (console.warn(e), qo.add(e));
    } catch (r) {
      xg.test(r.message) && qo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, pi = Object.freeze([]), Ht = Object.freeze({});
function aQ(i, n, t) {
  return t === void 0 && (t = Ht), i.theme !== t.theme && i.theme || n || t.theme;
}
var vr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), gQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, sQ = /(^-|-$)/g;
function dg(i) {
  return i.replace(gQ, "-").replace(sQ, "");
}
var IQ = /(a)(d)/gi, Vo = 109 * 71 + -1261 * 6 + -121, lg = function(i) {
  return String.fromCharCode(i + (i > 2 * -2026 + -3188 * 2 + 10453 ? 665 * -2 + 1414 + 45 * -1 : 4892 + -7 * 685));
};
function Mr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Vo; n = n / Vo | 1907 + -3 * 1306 + 2011) t = lg(n % Vo) + t;
  return (lg(n % Vo) + t).replace(IQ, "$1-$2");
}
var Oi, UI = 853 + -351 * -6 + 2422, ot = function(i, n) {
  for (var t = n.length; t; ) i = (22 * -277 + 5891 + 118 * 2) * i ^ n.charCodeAt(--t);
  return i;
}, YI = function(i) {
  return ot(UI, i);
};
function cQ(i) {
  return Mr(YI(i) >>> 5 * 1141 + -2605 * -2 + -10915);
}
function TI(i) {
  return U.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Ji(i) {
  return typeof i == "string" && (U.NODE_ENV === "production" || i.charAt(-2982 + 6 * -256 + 2259 * 2) === i.charAt(7105 + -1126 * -3 + -10483).toLowerCase());
}
var zA = {};
zA.childContextTypes = !0, zA.contextType = !0, zA.contextTypes = !0, zA.defaultProps = !0, zA.displayName = !0, zA.getDefaultProps = !0, zA.getDerivedStateFromError = !0, zA.getDerivedStateFromProps = !0, zA.mixins = !0, zA.propTypes = !0, zA.type = !0;
var Oe = {};
Oe.name = !0, Oe.length = !0, Oe.prototype = !0, Oe.caller = !0, Oe.callee = !0, Oe.arguments = !0, Oe.arity = !0;
var At = {};
At.$$typeof = !0, At.compare = !0, At.defaultProps = !0, At.displayName = !0, At.propTypes = !0, At.type = !0;
var kt = {};
kt.$$typeof = !0, kt.render = !0, kt.defaultProps = !0, kt.displayName = !0, kt.propTypes = !0;
var PI = typeof Symbol == "function" && Symbol.for, HI = PI ? Symbol.for("react.memo") : -1 * -73309 + -94659 + 81465, CQ = PI ? Symbol.for("react.forward_ref") : 58418 * -1 + 331 * -122 + -32 * -4966, BQ = zA, QQ = Oe, KI = At, EQ = ((Oi = {})[CQ] = kt, Oi[HI] = KI, Oi);
function ug(i) {
  return ("type" in (n = i) && n.type.$$typeof) === HI ? KI : "$$typeof" in i ? EQ[i.$$typeof] : BQ;
  var n;
}
var xQ = Object.defineProperty, dQ = Object.getOwnPropertyNames, hg = Object.getOwnPropertySymbols, lQ = Object.getOwnPropertyDescriptor, uQ = Object.getPrototypeOf, fg = Object.prototype;
function _I(i, n, t) {
  if (typeof n != "string") {
    if (fg) {
      var e = uQ(n);
      e && e !== fg && _I(i, e, t);
    }
    var A = dQ(n);
    hg && (A = A.concat(hg(n)));
    for (var o = ug(i), r = ug(n), g = -6899 + -71 * 91 + -334 * -40; g < A.length; ++g) {
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
function Kt(i) {
  return typeof i == "function";
}
function ya(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function it(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function pg(i, n) {
  if (-3 * -3163 + 1 * 8703 + 9096 * -2 === i.length) return "";
  for (var t = i[-73 * 3 + -5697 * -1 + -5478], e = -734 * 4 + 15 * 21 + 2622; e < i.length; e++) t += i[e];
  return t;
}
function _t(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Wr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !_t(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 2 * -3556 + -962 + 8074 * 1; e < n.length; e++) i[e] = Wr(i[e], n[e]);
  else if (_t(n))
    for (var e in n) i[e] = Wr(i[e], n[e]);
  return i;
}
function Da(i, n) {
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
var hQ = U.NODE_ENV !== "production" ? tA : {};
function fQ() {
  for (var i = [], n = 2 * 599 + -3769 * 1 + 2571; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[4015 * -1 + -5303 + 9318], e = [], A = -61 * -137 + -22 * -215 + 9 * -1454, o = i.length; A < o; A += 7737 + 1 * -7736) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function zt(i) {
  for (var n = [], t = 1 * 1507 + 1 * -9001 + 7495; t < arguments.length; t++) n[t - 1] = arguments[t];
  return U.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 153 * -25 + -6199 * -1 + -2374 ? " Args: ".concat(n.join(", ")) : "")) : new Error(fQ.apply(void 0, Yt([hQ[i]], n, !1)).trim());
}
var pQ = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(4968 + 1 * -2773 + -1 * 1683), this.length = 1 * 75 + 9580 + -9143, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -2 * 241 + 418 + -64 * -1, e = -7514 + -621 * -2 + 6272; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -30 * -137 + 9826 + -13935) < 1 * -277 + 7217 + -6940) throw zt(3626 * -1 + 7725 + -4083, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -4387 + 41 * 107;
    }
    for (var g = this.indexOfGroup(n + 1), a = (r = 1 * 3491 + 7762 * -1 + 4271, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -1577 * -5 + -1 * 8195 + 310;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -5062 + -581 * 15 + -599 * -23 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ma);
    return t;
  }, i;
}(), mQ = -6833 * 1 + -2799 * 2 + 12432 << 8007 * 1 + -4239 + 3 * -1246, un = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), hn = 769 * 13 + -2 * -1556 + -13108, Zo = function(i) {
  if (un.has(i)) return un.get(i);
  for (; zn.has(hn); ) hn++;
  var n = hn++;
  if (U.NODE_ENV !== "production" && ((-1018 * -8 + -6034 * -1 + -14178 | n) < 12 * -813 + -3692 + 6724 * 2 || n > mQ)) throw zt(-3575 + -63 * -57, "".concat(n));
  return un.set(i, n), zn.set(n, i), n;
}, yQ = function(i, n) {
  hn = n + (665 * 15 + 2371 + -12345), un.set(i, n), zn.set(n, i);
}, DQ = "style[".concat(Et, "][").concat(JI, '="').concat(fi, '"]'), wQ = new RegExp("^".concat(Et, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), bQ = function(i, n, t) {
  for (var e, A = t.split(","), o = 17379 + -1931 * 9, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, kQ = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ma), A = [], o = 0, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(wQ);
      if (a) {
        var s = 0 | parseInt(a[1], 10), B = a[-5943 + -29 * -205];
        -7 * -587 + -7156 + 3047 !== s && (yQ(B, s), bQ(i, B, a[-4846 + -183 * -50 + -4301]), i.getTag().insertRules(s, A)), A.length = 6521 + -6521 * 1;
      } else A.push(g);
    }
  }
}, mg = function(i) {
  for (var n = document.querySelectorAll(DQ), t = 8168 + 105 * -64 + -2 * 724, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(Et) !== OI && (kQ(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function SQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(Et, "]")));
    return a[a.length - (-337 * -22 + 3862 * 1 + 1 * -11275)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Et, OI), e.setAttribute(JI, fi);
  var r = SQ();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, GQ = function() {
  function i(n) {
    this.element = jI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 1 * -575 + 1703 + -3 * 376, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw zt(17);
    }(this.element), this.length = 794 * 3 + -2614 + -29 * -8;
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
    this.element = jI(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -20 * 39 + 64 * -101 + -1811 * -4) {
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
    this.rules = [], this.length = -751 * -3 + 1963 * -2 + 1673;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -5821 + -461 * -2 + 4899, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 2792 + -26 * 1 + 2765 * -1), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), yg = Zn, FQ = { isServer: !Zn, useCSSOMInjection: !iQ }, qI = function() {
  function i(n, t, e) {
    n === void 0 && (n = Ht), t === void 0 && (t = {});
    var A = this;
    this.options = TA(TA({}, FQ), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Zn && yg && (yg = !1, mg(this)), Da(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", s = function(I) {
          var x = function(Q) {
            return zn.get(Q);
          }(I);
          if (x === void 0) return "continue";
          var c = o.names.get(x), E = r.getGroup(I);
          if (c === void 0 || !c.size || 1 * -842 + 3451 + -2609 * 1 === E.length) return "continue";
          var d = "".concat(Et, ".g").concat(I, '[id="').concat(x, '"]'), l = "";
          c !== void 0 && c.forEach(function(Q) {
            Q.length > 5520 + 2 * 4435 + -1 * 14390 && (l += "".concat(Q, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(l, '"}').concat(ma);
        }, B = -28 * -135 + 2 * 881 + 17 * -326; B < g; B++) s(B);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return Zo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Zn && mg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(TA(TA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -7529 * -1 + 6992 + -14521) + (17 * 253 + -5339 + 1039);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new RQ(A) : e ? new GQ(A) : new NQ(A);
    }(this.options), new pQ(n)));
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
}(), vQ = /&/g, MQ = /^\s*\/\/.*$/gm;
function VI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = VI(t.children, n)), t;
  });
}
function ZI(i) {
  var n, t, e, A = i === void 0 ? Ht : i, o = A.options, r = o === void 0 ? Ht : o, g = A.plugins, a = g === void 0 ? pi : g, s = function(x, c, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(n) : x;
  }, B = a.slice();
  B.push(function(x) {
    x.type === di && x.value.includes("&") && (x.props[-4061 * 1 + -161 * -6 + 3095] = x.props[-4290 + 22 * 195].replace(vQ, t).replace(e, s));
  }), r.prefix && B.push(oQ), B.push(AQ);
  var I = function(x, c, E, d) {
    c === void 0 && (c = ""), E === void 0 && (E = ""), d === void 0 && (d = "&"), n = d, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = x.replace(MQ, ""), Q = XB(E || c ? "".concat(E, " ").concat(c, " { ").concat(l, " }") : l);
    r.namespace && (Q = VI(Q, r.namespace));
    var h = [];
    return Vn(Q, eQ(B.concat(tQ(function(m) {
      return h.push(m);
    })))), h;
  };
  return I.hash = a.length ? a.reduce(function(x, c) {
    return c.name || zt(5985 + 9598 * -1 + -3628 * -1), ot(x, c.name);
  }, UI).toString() : "", I;
}
var WQ = new qI(), Lr = ZI(), wa = Qt.createContext({ shouldForwardProp: void 0, styleSheet: WQ, stylis: Lr });
wa.Consumer;
var LQ = Qt.createContext(void 0);
function Or() {
  return re(wa);
}
function OQ(i) {
  var n = CA(i.stylisPlugins), t = n[0], e = n[1], A = Or().styleSheet, o = hA(function() {
    var B = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? B = i.sheet : i.target && (B = B.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (B = B.reconstructWithOptions(I)), B;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = hA(function() {
    var B = {};
    B.namespace = i.namespace, B.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = B, I.plugins = t, ZI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  Z(function() {
    JB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = hA(function() {
    var B = {};
    return B.shouldForwardProp = i.shouldForwardProp, B.styleSheet = o, B.stylis = r, B;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var s = {};
  return s.value = r, Qt.createElement(wa.Provider, a, Qt.createElement(LQ.Provider, s, i.children));
}
var Dg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Lr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Da(this, function() {
      throw zt(-274 * -5 + -3639 + 2281, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Lr), this.name + n.hash;
  }, i;
}(), JQ = function(i) {
  return i >= "A" && i <= "Z";
};
function wg(i) {
  for (var n = "", t = 6147 + -4644 * -1 + 11 * -981; t < i.length; t++) {
    var e = i[t];
    if (t === 1 && e === "-" && i[2 * 1670 + -53 * 57 + 1 * -319] === "-") return i;
    JQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var zI = function(i) {
  return i == null || i === !1 || i === "";
}, XI = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !zI(o) && (Array.isArray(o) && o.isCss || Kt(o) ? e.push("".concat(wg(A), ":"), o, ";") : _t(o) ? e.push.apply(e, Yt(Yt(["".concat(A, " {")], XI(o), !1), ["}"], !1)) : e.push("".concat(wg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 157 * 31 + -155 * -22 + -8277 === t || n in nQ || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Bt(i, n, t, e) {
  if (zI(i)) return [];
  if (ya(i)) return [".".concat(i.styledComponentId)];
  if (Kt(i)) {
    if (!Kt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return U.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Dg || _t(A) || A === null || console.error("".concat(TI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Bt(A, n, t, e);
  }
  var o;
  return i instanceof Dg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : _t(i) ? XI(i) : Array.isArray(i) ? Array.prototype.concat.apply(pi, i.map(function(r) {
    return Bt(r, n, t, e);
  })) : [i.toString()];
}
function UQ(i) {
  for (var n = 8624 + -5 * 1611 + -569; n < i.length; n += -4314 + -1 * 9983 + 14298) {
    var t = i[n];
    if (Kt(t) && !ya(t)) return !1;
  }
  return !0;
}
var YQ = YI(fi), TQ = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = U.NODE_ENV === "production" && (e === void 0 || e.isStatic) && UQ(n), this.componentId = t, this.baseHash = ot(YQ, t), this.baseStyle = e, qI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = it(A, this.staticRulesId);
      else {
        var o = pg(Bt(this.rules, n, t, e)), r = Mr(ot(this.baseHash, o) >>> 233 * -15 + 7915 * 1 + -4420);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = it(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = ot(this.baseHash, e.hash), s = "", B = -1448 * -1 + 47 * 87 + -791 * 7; B < this.rules.length; B++) {
        var I = this.rules[B];
        if (typeof I == "string") s += I, U.NODE_ENV !== "production" && (a = ot(a, I));
        else if (I) {
          var x = pg(Bt(I, n, t, e));
          a = ot(a, x + B), s += x;
        }
      }
      if (s) {
        var c = Mr(a >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(s, ".".concat(c), void 0, this.componentId)), A = it(A, c);
      }
    }
    return A;
  }, i;
}(), $I = Qt.createContext(void 0);
$I.Consumer;
var Ui = {}, bg = /* @__PURE__ */ new Set();
function PQ(i, n, t) {
  var e = ya(i), A = i, o = !Ji(i), r = n.attrs, g = r === void 0 ? pi : r, a = n.componentId, s = a === void 0 ? function(S, G) {
    var k = typeof S != "string" ? "sc" : dg(S);
    Ui[k] = (Ui[k] || -7951 + 5399 * 1 + 88 * 29) + (-1 * -3809 + 5196 + -4 * 2251);
    var T = "".concat(k, "-").concat(cQ(fi + k + Ui[k]));
    return G ? "".concat(G, "-").concat(T) : T;
  }(n.displayName, n.parentComponentId) : a, B = n.displayName, I = B === void 0 ? function(S) {
    return Ji(S) ? "styled.".concat(S) : "Styled(".concat(TI(S), ")");
  }(i) : B, x = n.displayName && n.componentId ? "".concat(dg(n.displayName), "-").concat(n.componentId) : n.componentId || s, c = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, E = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      E = function(S, G) {
        return d(S, G) && l(S, G);
      };
    } else E = d;
  }
  var Q = new TQ(t, x, e ? A.componentStyle : void 0);
  function h(S, G) {
    return function(k, T, q) {
      var ae = k.attrs, _A = k.componentStyle, qe = k.defaultProps, ic = k.foldedComponentIds, Ga = k.styledComponentId, rc = k.target, ac = Qt.useContext($I), gc = Or(), yi = k.shouldForwardProp || gc.shouldForwardProp;
      U.NODE_ENV !== "production" && kn(Ga);
      var Na = aQ(T, ac, qe) || Ht, de = function(Yo, Ao, To) {
        var lt = {};
        lt.className = void 0, lt.theme = To;
        for (var bi, Ve = TA(TA({}, Ao), lt), ki = 12 * 813 + -9149 + -607; ki < Yo.length; ki += 6301 + 54 * -138 + -384 * -3) {
          var Po = Kt(bi = Yo[ki]) ? bi(Ve) : bi;
          for (var Fe in Po) Ve[Fe] = Fe === "className" ? it(Ve[Fe], Po[Fe]) : Fe === "style" ? TA(TA({}, Ve[Fe]), Po[Fe]) : Po[Fe];
        }
        return Ao.className && (Ve.className = it(Ve.className, Ao.className)), Ve;
      }(ae, T, Na), Xt = de.as || rc, $t = {};
      for (var jA in de) de[jA] === void 0 || jA[13 * 41 + 8421 * 1 + -74 * 121] === "$" || jA === "as" || jA === "theme" && de.theme === Na || (jA === "forwardedAs" ? $t.as = de.forwardedAs : yi && !yi(jA, Xt) || ($t[jA] = de[jA], yi || U.NODE_ENV !== "development" || MB(jA) || bg.has(jA) || !vr.has(Xt) || (bg.add(jA), console.warn('styled-components: it looks like an unknown prop "'.concat(jA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Di = function(Yo, Ao) {
        var To = Or(), lt = Yo.generateAndInjectStyles(Ao, To.styleSheet, To.stylis);
        return U.NODE_ENV !== "production" && kn(lt), lt;
      }(_A, de);
      U.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Di);
      var wi = it(ic, Ga);
      return Di && (wi += " " + Di), de.className && (wi += " " + de.className), $t[Ji(Xt) && !vr.has(Xt) ? "class" : "className"] = wi, q && ($t.ref = q), vA(Xt, $t);
    }(m, S, G);
  }
  h.displayName = I;
  var m = Qt.forwardRef(h), b = {};
  return b.attrs = !0, b.componentStyle = !0, b.displayName = !0, b.foldedComponentIds = !0, b.shouldForwardProp = !0, b.styledComponentId = !0, b.target = !0, m.attrs = c, m.componentStyle = Q, m.displayName = I, m.shouldForwardProp = E, m.foldedComponentIds = e ? it(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = e ? function(G) {
      for (var k = [], T = -13 * -563 + 9 * -293 + -4681; T < arguments.length; T++) k[T - (-1410 + -1 * 4553 + 5964)] = arguments[T];
      for (var q = 277 * -10 + 1 * -101 + 2871, ae = k; q < ae.length; q++) Wr(G, ae[q], !0);
      return G;
    }({}, A.defaultProps, S) : S;
  } }), U.NODE_ENV !== "production" && (rQ(I, x), m.warnTooManyClasses = /* @__PURE__ */ function(S, G) {
    var k = {}, T = !1;
    return function(q) {
      if (!T && (k[q] = !0, Object.keys(k).length >= 9435 + -113 * -77 + -17936)) {
        var ae = G ? ' with the id of "'.concat(G, '"') : "";
        console.warn("Over ".concat(-2 * 3494 + -4084 + -11272 * -1, " classes were generated for component ").concat(S).concat(ae, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, k = {};
      }
    };
  }(I, x)), Da(m, function() {
    return ".".concat(m.styledComponentId);
  }), o && _I(m, i, b), m;
}
function kg(i, n) {
  for (var t = [i[727 + -2767 * -2 + 2087 * -3]], e = -42 * -156 + 9 * 129 + -857 * 9, A = n.length; e < A; e += 1428 + 1 * 7481 + -34 * 262) t.push(n[e], i[e + (1201 * -6 + 5860 + 449 * 3)]);
  return t;
}
var Sg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function HQ(i) {
  for (var n = [], t = -55 * 76 + -3167 + -3674 * -2; t < arguments.length; t++) n[t - (-4 * 1052 + 5256 + -3 * 349)] = arguments[t];
  if (Kt(i) || _t(i)) return Sg(Bt(kg(pi, Yt([i], n, !0))));
  var e = i;
  return 3 * 750 + 9603 * 1 + 3 * -3951 === n.length && 2403 + 1 * -2402 === e.length && typeof e[-10 * 365 + -1 * -9257 + -5607] == "string" ? Bt(e) : Sg(Bt(kg(e, n)));
}
function Jr(i, n, t) {
  if (t === void 0 && (t = Ht), !n) throw zt(-6608 + -7443 * 1 + 14052, n);
  var e = function(A) {
    for (var o = [], r = -3284 + -3285 * -1; r < arguments.length; r++) o[r - 1] = arguments[r];
    return i(n, t, HQ.apply(void 0, Yt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Jr(i, n, TA(TA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Jr(i, n, TA(TA({}, t), A));
  }, e;
}
var A0 = function(i) {
  return Jr(PQ, i);
}, Uo = A0;
vr.forEach(function(i) {
  Uo[i] = A0(i);
});
U.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zo = "__sc-".concat(Et, "__");
U.NODE_ENV !== "production" && U.NODE_ENV !== "test" && typeof window < "u" && (window[zo] || (window[zo] = 61 * -145 + -1 * -1636 + -801 * -9), -1 * 4803 + -3222 + 8026 === window[zo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zo] += 2069 + -461 * 16 + 5308);
var fe;
function e0(i) {
  const n = {};
  return n.lang = fe == null ? void 0 : fe.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = fe == null ? void 0 : fe.abortEarly, n.abortPipeEarly = fe == null ? void 0 : fe["abortPipeEarly"], n;
}
var Yi;
function KQ(i) {
  return Yi == null ? void 0 : Yi.get(i);
}
var Ti;
function _Q(i) {
  return Ti == null ? void 0 : Ti.get(i);
}
var Pi;
function jQ(i, n) {
  var t;
  return (t = Pi == null ? void 0 : Pi.get(i)) == null ? void 0 : t.get(n);
}
function qQ(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function Ur(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, g = (A == null ? void 0 : A.received) ?? qQ(o), a = {};
  a.kind = i.kind, a.type = i.type, a.input = o, a.expected = r, a.received = g, a.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + g, a.requirement = i.requirement, a.path = A == null ? void 0 : A.path, a.issues = A == null ? void 0 : A.issues, a.lang = e.lang, a.abortEarly = e.abortEarly, a.abortPipeEarly = e.abortPipeEarly;
  const s = a, B = i.kind === "schema", I = (A == null ? void 0 : A.message) ?? i.message ?? jQ(i.reference, s.lang) ?? (B ? _Q(s.lang) : null) ?? e.message ?? KQ(s.lang);
  I !== void 0 && (s.message = typeof I == "function" ? I(s) : I), B && (t.typed = !1), t.issues ? t.issues.push(s) : t.issues = [s];
}
function t0(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, e0());
  } };
}
var VQ = class extends Error {
  constructor(i) {
    super(i[8891 + -523 * 17].message), this.name = "ValiError", this.issues = i;
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
    return t0(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : Ur(this, "type", n, t), n;
  } };
}
function o0(i, n) {
  return { kind: "schema", type: "object", reference: o0, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return t0(this);
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
          const B = g["~run"](s, e);
          if (B.issues) {
            const I = {};
            I.type = "object", I.origin = "value", I.input = A, I.key = r, I.value = a;
            const x = I;
            for (const c of B.issues)
              c.path ? c.path.unshift(x) : c.path = [x], (o = t.issues) == null || o.push(c);
            if (!t.issues && (t.issues = B.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !B.typed && (t.typed = !1), t.value[r] = B.value;
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
  const A = i["~run"](e, e0(t));
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
    assetsDirectoryPath: GC(i.assetsDirectoryPath)
  };
}
function AE({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = hA(() => $Q(n, t), [n, t]);
  return /* @__PURE__ */ w(ha.Provider, { value: e, children: i });
}
function eE({
  children: i,
  configuration: n
}) {
  const t = o0({
    onComplete: Yr("On complete must be a function"),
    onError: Yr("On error must be a function")
  });
  return /* @__PURE__ */ w(AE, { configuration: n, validationSchema: t, children: i });
}
const Xn = Re(void 0);
Xn.displayName = "ControllerContext";
function n0() {
  const i = re(
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
  return /* @__PURE__ */ w(Xn.Provider, { value: t, children: i });
}
const fn = {};
fn.ON_COMPLETE = "smile-auto-capture:on-complete", fn.TIMED_CAPTURE_EXECUTED = "smile-auto-capture:timed-capture-executed", fn.DEV = "smile-auto-capture:dev";
const $n = fn, oE = { ...$n, ...Ne }, i0 = oE;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const r0 = Symbol("Comlink.proxy"), nE = Symbol("Comlink.endpoint"), a0 = Symbol("Comlink.releaseProxy"), Hi = Symbol("Comlink.finalizer"), pn = Symbol("Comlink.thrown"), g0 = (i) => typeof i == "object" && i !== null || typeof i == "function", iE = {
  canHandle: (i) => g0(i) && i[r0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return I0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), C0(i);
  }
}, rE = {
  canHandle: (i) => g0(i) && pn in i,
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
}, s0 = /* @__PURE__ */ new Map([
  ["proxy", iE],
  ["throw", rE]
]);
function aE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function I0(i, n = globalThis, t = ["*"]) {
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
      const B = g.slice(0, -1).reduce((x, c) => x[c], i), I = g.reduce((x, c) => x[c], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          B[g.slice(-1)[0]] = nt(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(B, a);
          break;
        case "CONSTRUCT":
          {
            const x = new I(...a);
            s = BE(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: c } = new MessageChannel();
            I0(i, c), s = CE(x, [x]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      s = { value: B, [pn]: 0 };
    }
    Promise.resolve(s).catch((B) => ({ value: B, [pn]: 0 })).then((B) => {
      const [I, x] = ti(B);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), x), r === "RELEASE" && (n.removeEventListener("message", e), c0(n), Hi in i && typeof i[Hi] == "function" && i[Hi]());
    }).catch((B) => {
      const [I, x] = ti({
        value: new TypeError("Unserializable return value"),
        [pn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), x);
    });
  }), n.start && n.start();
}
function gE(i) {
  return i.constructor.name === "MessagePort";
}
function c0(i) {
  gE(i) && i.close();
}
function C0(i, n) {
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
function Xo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function B0(i) {
  return St(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    c0(i);
  });
}
const Ai = /* @__PURE__ */ new WeakMap(), ei = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Ai.get(i) || 0) - 1;
  Ai.set(i, n), n === 0 && B0(i);
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
      if (Xo(A), g === a0)
        return () => {
          IE(o), B0(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = St(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(nt);
        return a.then.bind(a);
      }
      return Tr(i, n, [...t, g]);
    },
    set(r, g, a) {
      Xo(A);
      const [s, B] = ti(a);
      return St(i, n, {
        type: "SET",
        path: [...t, g].map((I) => I.toString()),
        value: s
      }, B).then(nt);
    },
    apply(r, g, a) {
      Xo(A);
      const s = t[t.length - 1];
      if (s === nE)
        return St(i, n, {
          type: "ENDPOINT"
        }).then(nt);
      if (s === "bind")
        return Tr(i, n, t.slice(0, -1));
      const [B, I] = Gg(a);
      return St(i, n, {
        type: "APPLY",
        path: t.map((x) => x.toString()),
        argumentList: B
      }, I).then(nt);
    },
    construct(r, g) {
      Xo(A);
      const [a, s] = Gg(g);
      return St(i, n, {
        type: "CONSTRUCT",
        path: t.map((B) => B.toString()),
        argumentList: a
      }, s).then(nt);
    }
  });
  return sE(o, i), o;
}
function cE(i) {
  return Array.prototype.concat.apply([], i);
}
function Gg(i) {
  const n = i.map(ti);
  return [n.map((t) => t[0]), cE(n.map((t) => t[1]))];
}
const Q0 = /* @__PURE__ */ new WeakMap();
function CE(i, n) {
  return Q0.set(i, n), i;
}
function BE(i) {
  return Object.assign(i, { [r0]: !0 });
}
function ti(i) {
  for (const [n, t] of s0)
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
    Q0.get(i) || []
  ];
}
function nt(i) {
  switch (i.type) {
    case "HANDLER":
      return s0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function St(i, n, t, e) {
  return new Promise((A) => {
    const o = QE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function QE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function E0() {
  return GI();
}
const ba = Re(void 0);
ba.displayName = "CommonThresholdsContext";
function EE() {
  const i = re(ba);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function x0() {
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
  Pr(Ir.REQUEST_CAPTURE, t);
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
    xo() && this.handleEnvironmentNotSupported();
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
    return "" + t.replace(tI, "") + n;
  }
}
const mi = 1941 * 3 + -1 * -6993 + -12816 + 0.5, d0 = {};
d0.min = 0.4;
const l0 = {};
l0.min = 0.25;
const Hr = {};
Hr.min = 0.2, Hr.max = 0.85;
const u0 = {};
u0.max = 30;
const h0 = {};
h0.min = 0.05;
const Kr = {};
Kr.min = 0.16, Kr.max = 0.2;
const f0 = {};
f0.min = 0.3;
const p0 = {};
p0.max = mi;
const _r = {};
_r.confidence = f0, _r.status = p0;
const Je = {};
Je.confidence = d0, Je.sharpness = l0, Je.brightness = Hr, Je.devicePitchAngle = u0, Je.edgeDistanceToImageShorterSideRatio = h0, Je.size = Kr, Je.mouth = _r;
const m0 = {};
m0.min = 0.4;
const y0 = {};
y0.min = 0.25;
const jr = {};
jr.min = 0.2, jr.max = 0.85;
const D0 = {};
D0.max = 30;
const w0 = {};
w0.min = 0.05;
const qr = {};
qr.min = 0.16, qr.max = 0.2;
const b0 = {};
b0.min = 0.3;
const k0 = {};
k0.max = mi;
const Vr = {};
Vr.confidence = b0, Vr.status = k0;
const Ue = {};
Ue.confidence = m0, Ue.sharpness = y0, Ue.brightness = jr, Ue.devicePitchAngle = D0, Ue.edgeDistanceToImageShorterSideRatio = w0, Ue.size = qr, Ue.mouth = Vr;
const Zr = {};
Zr.MOBILE = Je, Zr.DESKTOP = Ue;
const lE = Zr, S0 = 38 * -62 + -9522 * -1 + -7166 * 1 + 0.4, G0 = {};
G0.min = 0.4;
const zr = {};
zr.min = 0.16, zr.max = 0.2;
const N0 = {};
N0.min = 0.3;
const R0 = {};
R0.min = S0;
const Xr = {};
Xr.confidence = N0, Xr.status = R0;
const mn = {};
mn.confidence = G0, mn.size = zr, mn.mouth = Xr;
const F0 = {};
F0.min = 0.4;
const $r = {};
$r.min = 0.16, $r.max = 0.2;
const v0 = {};
v0.min = 0.3;
const M0 = {};
M0.min = S0;
const Aa = {};
Aa.confidence = v0, Aa.status = M0;
const yn = {};
yn.confidence = F0, yn.size = $r, yn.mouth = Aa;
const ea = {};
ea.MOBILE = mn, ea.DESKTOP = yn;
const Ng = ea, oi = 41 * -113 + -2053 * 1 + 8686, uE = 3 * -5611 + -28 * -41 + 55 * 467, Rg = -1 * 2010 + -7090 + 24100, Dn = {};
Dn.timeout = 4e3, Dn.threshold = 0.7, Dn.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const Ki = Dn, W0 = "SAM v1.50.5 for idcards";
class L0 extends dE {
  constructor(t, e, A, o, r, g, a, s, B, I, x, c, E) {
    super(t, W0, e, g, a, x, c, E);
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
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, this.dispatcher = g, this.analytics = x;
    const d = { [J.NEUTRAL]: [J.SMILE], [J.SMILE]: [J.SMILE_MANUAL], [J.SMILE_MANUAL]: [] };
    this.allowedDetectionTransitions = d, this.medianScore = s, this.timedCapture = B, this.longCapture = I;
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
    if (super.validateDependencies(), !this.detectionFactory) throw new D("DetectionFactory is required");
    if (!this.medianScore) throw new D("MedianScore is required");
    if (!this.timedCapture) throw new D("TimedCapture is required");
    if (!this.longCapture) throw new D("LongCapture is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this;
  }
  build() {
    return this.validateDependencies(), new L0(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.medianScore, this.timedCapture, this.longCapture, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const pE = "/dot-assets/smile/dot-BNqXQYOk.js", Ci = class Ci {
  constructor() {
    p(this, "lastDetails");
    p(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = -2480 * -1 + -6857 + 3 * 1459;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ci()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -1 * 8465 + 8890 + -425;
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
let jt = Ci;
const mE = () => "prod".toLowerCase() === "dev";
class yE extends jt {
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
  dispatchInstructionChangedEvent(t, e = CC) {
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
    this.dispatchCustomEvent(i0.TIMED_CAPTURE_EXECUTED, {});
  }
}
var Pe;
class ni extends Array {
  constructor(t) {
    super();
    O(this, Pe);
    F(this, Pe, t);
  }
  get size() {
    return y(this, Pe);
  }
  pushFixed(...t) {
    if (t.length > y(this, Pe)) {
      const e = t.slice(-y(this, Pe));
      this.push(...e);
      return;
    }
    this.length === y(this, Pe) && this.splice(-4 * -17 + -7953 + 7885, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-1487 * -2 + -8053 + 3 * 1693);
  }
}
Pe = new WeakMap();
class wE {
  constructor() {
    p(this, "wasTriggered", !1);
    p(this, "timeoutId");
    p(this, "localStore");
    this.localStore = this.createLocalStore();
  }
  createLocalStore() {
    return { images: { fps: new ni(-4624 * -2 + 5 * -1519 + -1623), mouthStatus: new ni(200 * 41 + 349 * 19 + -14826) }, imageResolution: void 0 };
  }
  addDetectionToStorage(n) {
    this.localStore.images.fps.push(n.detectionDetails.fps), this.localStore.images.mouthStatus.push(n.detectionDetails.processedImage.detection.mouth.status);
    const t = {};
    t.width = n.image.width, t.height = n.image.height, this.localStore.imageResolution = t;
  }
  start(n, t = Rg) {
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
      A.durationMs = Rg, A.averageFps = t, A.imageResolution = this.localStore.imageResolution, A.averageExpressionScore = e, n == null || n.trackLongCapture(A);
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
    const t = n.sort((o, r) => o - r), e = Math.floor(t.length / (1524 + -1 * 5342 + -20 * -191));
    return t.length % (-1 * 4678 + -1569 * -3 + 3 * -9) === -12209 + 421 * 29 ? (t[e - (-7411 + -1 * -67 + 7345)] + t[e]) / (-8749 + -3 * -2917) : t[e];
  }
}
const kE = 2e3;
class Fg {
  constructor(n) {
    p(this, "duration");
    p(this, "candidateSelectionTime", 343 * -13 + -1 * 9902 + 14361);
    p(this, "candidateSelectionImages", []);
    this.duration = n ?? kE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -6832 + 4677 * -1 + -17 * -677;
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
    this.candidateSelectionTime = -932 * 7 + -1 * 9777 + -16301 * -1, this.candidateSelectionImages = [];
  }
}
function ii(i) {
  const { height: n, width: t } = EC(i), e = (i.width - t) / 2, A = (i.height - n) / (-1096 * 2 + -19 * 347 + 1 * 8787), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function O0(i, n, t) {
  const { height: e, width: A } = t, o = xi(i.width, i.height), r = A - o * n * (-1 * -4571 + 1528 + -6097), g = e - o * n * 2, a = (i.width - r) / (-1219 + -111 * -11), s = (i.height - g) / (9020 + -3 * 2997 + -3 * 9), B = {};
  return B.shiftX = a, B.shiftY = s, B.width = r, B.height = g, B;
}
function mt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const J0 = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = uC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = g, s.left = a, oI(s);
}, U0 = (i, n, t = wC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), ri = async (i) => U0(i, -509 * 4 + 2551 + -425 * 1), SE = async (i) => U0(i, -823 * -11 + -116 * -73 + -17421, "image/png"), Y0 = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 2867 * -2 + 8474 + -137 * 20, 0, t.width, t.height), t;
}, T0 = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(-1435 * -1 + 6382 + -7817, 1 * -3701 + -5700 + 9401, i.width, i.height);
  return t;
};
async function GE(i, n) {
  const t = Y0(i, n);
  return SE(t);
}
const P0 = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, _i = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, P0(i, a, t);
}, Qo = (i, n, t, e = 0) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 1 * 7985 + 467 * 17 + 1 * -15917, 8648 + -8305 * 1 + -4 * 84), A.beginPath());
};
function NE(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, P0(i, o, "rgba(255, 0, 0, 0.3)", !0), Qo(i, e, "lime");
}
function RE(i, n, t) {
  const e = J0(n, t);
  Object.values(e).map((A) => Qo(i, A, "orange"));
}
class H0 extends D {
  constructor(t) {
    super(t.message);
    p(this, "cause");
    this.name = "ProxyError", this.cause = t, this.logError(t);
  }
  logError(t) {
  }
}
(function(i, n) {
  function t(g, a, s, B, I) {
    return uA(I - 624, a);
  }
  const e = i();
  function A(g, a, s, B, I) {
    return uA(B - 857, g);
  }
  function o(g, a, s, B, I) {
    return uA(s - -995, B);
  }
  function r(g, a, s, B, I) {
    return uA(s - -403, I);
  }
  for (; ; )
    try {
      if (parseInt(r(-28, -53, -41, -55, "#k3l")) / 1 * (parseInt(o(-628, -641, -631, "s]a%", -620)) / 2) + -parseInt(o(-646, -639, -632, "qQ#j", -637)) / 3 + parseInt(r(-59, -36, -45, -38, "$Kky")) / 4 * (parseInt(r(-47, -54, -54, -58, "Q]Gr")) / 5) + -parseInt(o(-638, -637, -640, "zzFm", -644)) / 6 + -parseInt(t(952, "(Kh3", 949, 958, 964)) / 7 * (-parseInt(A("7C(G", 1207, 1193, 1205, 1194)) / 8) + -parseInt(t(999, "Is[E", 972, 974, 985)) / 9 + -parseInt(t(961, "ZYg6", 961, 965, 966)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ai, -1 * 268343 + 1 * -286543 + 33 * 31611);
function uA(i, n) {
  const t = ai();
  return uA = function(e, A) {
    e = e - (-4850 * -1 + 3921 + -8431);
    let o = t[e];
    if (uA.kOMNBB === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      uA.wAgDiP = B, i = arguments, uA.kOMNBB = !0;
    }
    const g = t[0], a = e + g, s = i[a];
    return s ? o = s : (uA.LeEHtU === void 0 && (uA.LeEHtU = !0), o = uA.wAgDiP(o, A), i[a] = o), o;
  }, uA(i, n);
}
async function FE(i) {
  function n(g, a, s, B, I) {
    return uA(s - 403, a);
  }
  function t(g, a, s, B, I) {
    return uA(a - 593, s);
  }
  function e(g, a, s, B, I) {
    return uA(B - -162, g);
  }
  const A = await window[e("4fwq", 189, 208, 203) + "o"][n(750, "Is[E", 753) + "e"][e("xv7j", 197, 219, 204) + "t"](r("tOHq", -318, -327, -331), i);
  function o(g, a, s, B, I) {
    return uA(a - -120, I);
  }
  function r(g, a, s, B, I) {
    return uA(B - -676, g);
  }
  return Array[e("t#kI", 212, 219, 205)](new Uint8Array(A))[o(213, 224, 211, 233, "FoUP")]((g) => g[n(758, "gS1J", 772) + e("DlUe", 186, 169, 179)](155 * -17 + -11 * -204 + -1 * -407)[t(935, 946, "CNZ1") + t(936, 950, "Whmx")](2, "0"))[n(751, "$Kky", 746)]("");
}
function ai() {
  const i = ["W7Omw8oLdLbLEHS", "WOjHCG", "W7lcQ3BcQb/dH2XHW6K", "W5q7W6nzhSoPntW", "ArhdOc4Scd4", "pvmAW4xcK8odW47cGSoohsNcIc8", "itldK8oVW5JdPHO", "WRXJWONdM8kWnay4edVdOcO", "n8ohCSkhdwfyW4HqW490vW", "e8klW6vTW4u", "gmo3mmkWkW", "rGxcG0i", "w8kNWRpdRL3cHCoHWRS9WQhdGgy", "h8kdFGBdRW", "oCoiDSkadwfOW5bcW4T9tq", "W4ddNSoRdmoGxXtcQexcTmoAmti", "cY0m", "WOBcJNBdJCoPi8oTWOmkyNfkW6e", "WQ3dVcVcQW", "dCkMW6S", "mNWYcCog", "fMC3WO/cOSkuW7tdRSojtWHfWPy", "bCkZFYFdQ8oeExyeW6VdNWS", "W5pdNtpdTCkfv8khWPu", "W5jIm8o6emoJvfeeWPC", "FrjlWOldHW", "wmoyhKhcPwrkWQz1dd5OWQG", "odxdLvVcUmkrxaLZWPVdSge/", "WRBcK8ofW5fm", "g241WORdHCoPWONdQSofwW", "gMJdRtZdLCotg0VcT8k8WORdHG"];
  return ai = function() {
    return i;
  }, ai();
}
class vE {
  constructor(n) {
    p(this, "detectionRecord");
    p(this, "imagesWithTimestampForDuplicateDetection");
    p(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new ni(mC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / bC, A = e / (-1168 + -767 * 7 + -1 * -6539), o = n.length / (151 * 3 + 4 * 388 + 1 * -2003), r = n.slice(o - A, o + A), g = await FE(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: T0(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new H0(A) : D.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = oI(n), r = {};
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
class ji extends vE {
  constructor(t, e) {
    super(e);
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = ii(t), A = Y0(t, e);
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
var wo, He, Mt;
class WE extends Array {
  constructor(t) {
    super();
    O(this, wo, -19 * -311 + 7536 + 13445 * -1);
    O(this, He, []);
    O(this, Mt, !1);
    F(this, wo, t);
  }
  clearAfterTimeout() {
    if (y(this, He).length === -1122 + 49 * 47 + -1181) return;
    const t = Date.now(), e = y(this, He).findLastIndex((A) => t - A > y(this, wo));
    e !== -1 && (F(this, Mt, !0), this.splice(2204 + 71 * -83 + -217 * -17, e + 1), y(this, He).splice(-1661 * -3 + -6359 * 1 + 16 * 86, e + (-8191 * -1 + 1 * -6466 + 2 * -862)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), y(this, He).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return y(this, Mt);
  }
  clear() {
    this.splice(-7906 * 1 + 2923 + -3 * -1661), y(this, He).splice(1567 * -1 + 2993 * -1 + 4560), F(this, Mt, !1);
  }
}
wo = new WeakMap(), He = new WeakMap(), Mt = new WeakMap();
class K0 {
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
class LE extends K0 {
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
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new ni(30), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof H0)) throw n;
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
    const e = { ...n, avgFps: Nt(co(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new D("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Nt(co(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = T0(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await GE(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const s = a, B = {};
    return B.croppedImage = g, B.topLeftCorner = s, B;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Nt((-1 * -311 + 260 + 429 * 1) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[0], t), s = this.collectAndEscalate(a), B = {};
    return B.detection = t.detection, B.instructionCode = a, B.invalidValidators = g, B.isInCandidateSelection = !1, B.isEscalated = s, { processedImage: B, detectionTime: e, fps: A, avgFps: Nt(co(this.fpsOfAllImages)), resolution: r };
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
    await dr(Math.max(eg.max - n, eg.min));
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
class j0 {
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
class q0 extends j0 {
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
    return this.validateDependencies(), new OE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class JE extends q0 {
}
var Wt, gt, st;
class V0 {
  constructor(n) {
    O(this, Wt);
    O(this, gt);
    O(this, st);
    F(this, Wt, n), F(this, gt, /* @__PURE__ */ new Map());
  }
  validate() {
    y(this, Wt).forEach((n) => {
      y(this, gt).set(n.name, n.evaluate());
    }), F(this, st, void 0);
  }
  isValid() {
    return y(this, st) === void 0 && F(this, st, Array.from(y(this, gt).values()).every((n) => n)), y(this, st);
  }
  get result() {
    return y(this, gt);
  }
  get validators() {
    return y(this, Wt);
  }
}
Wt = new WeakMap(), gt = new WeakMap(), st = new WeakMap();
class Z0 {
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
var bo, It;
class xe {
  constructor(n, t) {
    O(this, bo);
    O(this, It);
    F(this, bo, n), F(this, It, t);
  }
  get threshold() {
    return y(this, It);
  }
  get name() {
    return y(this, bo);
  }
  isValueBelowThreshold(n) {
    return n < y(this, It);
  }
  isValueAboveThreshold(n) {
    return n > y(this, It);
  }
}
bo = new WeakMap(), It = new WeakMap();
const UE = "isNotDim";
var ko;
class YE extends xe {
  constructor(t, e) {
    super(UE, t);
    O(this, ko);
    F(this, ko, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, ko));
  }
}
ko = new WeakMap();
const TE = "isNotSmall";
var So;
class z0 extends xe {
  constructor(t, e) {
    super(TE, t);
    O(this, So);
    F(this, So, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, So));
  }
}
So = new WeakMap();
const PE = "isNotBright";
var Go;
class HE extends xe {
  constructor(t, e) {
    super(PE, t);
    O(this, Go);
    F(this, Go, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Go));
  }
}
Go = new WeakMap();
const KE = "isPresent";
var No;
class X0 extends xe {
  constructor(t, e) {
    super(KE, t);
    O(this, No);
    F(this, No, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, No));
  }
}
No = new WeakMap();
const _E = "isSharp";
var Ro;
class jE extends xe {
  constructor(t, e) {
    super(_E, t);
    O(this, Ro);
    F(this, Ro, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ro));
  }
}
Ro = new WeakMap();
const qE = "isMouthPresent";
var Fo;
class $0 extends xe {
  constructor(t, e) {
    super(qE, t);
    O(this, Fo);
    F(this, Fo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Fo));
  }
}
Fo = new WeakMap();
const VE = "isMouthStatusNotTooHigh";
var vo;
class ZE extends xe {
  constructor(t, e) {
    super(VE, t);
    O(this, vo);
    F(this, vo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, vo));
  }
}
vo = new WeakMap();
const zE = "isNotLarge";
var Mo;
class Ac extends xe {
  constructor(t, e) {
    super(zE, t);
    O(this, Mo);
    F(this, Mo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Mo));
  }
}
Mo = new WeakMap();
const XE = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, $E = (i, n) => Object.values(i).every((t) => XE(t, n)), Ax = "isNotOutOfBounds";
var Wo, ct;
class ex extends xe {
  constructor(t, e, A) {
    super(Ax, t);
    O(this, Wo);
    O(this, ct);
    F(this, Wo, e), F(this, ct, A);
  }
  evaluate() {
    const t = O0(y(this, ct), this.threshold, ii(y(this, ct))), e = J0(y(this, Wo), y(this, ct));
    return $E(e, t);
  }
}
Wo = new WeakMap(), ct = new WeakMap();
class tx extends Z0 {
  constructor(n) {
    super("NeutralValidationService", n);
  }
  validateDetectedObject(n, t) {
    const e = this.getThresholds(), A = new V0([new X0(e.confidence.min, n.confidence), new z0(e.size.min, n.faceSize), new Ac(e.size.max, n.faceSize), new jE(e.sharpness.min, n.sharpness), new YE(e.brightness.min, n.brightness), new HE(e.brightness.max, n.brightness), new ex(e.edgeDistanceToImageShorterSideRatio.min, n, t), new $0(e.mouth.confidence.min, n.mouth.confidence), new ZE(e.mouth.status.max, n.mouth.status)]);
    return A.validate(), A;
  }
}
class ec extends K0 {
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
    if (!A || !o) throw new D("Incomplete onCapture data for smile liveness");
    const { detectedObject: r, resultImage: g } = A, { detectedObject: a, resultImage: s } = o, B = {};
    B.width = g.width, B.height = g.height;
    const I = B, x = await ri(g), c = await ri(s), E = {};
    E.detection = r, E.imageResolution = I;
    const d = {};
    d.data = E, d.image = x;
    const l = d, Q = {};
    Q.detection = a, Q.imageResolution = I;
    const h = {};
    h.data = Q, h.image = c;
    const m = h, b = {};
    b.neutralPhaseImageWithMetadata = l, b.smilePhaseImageWithMetadata = m;
    const S = b;
    this.controller.getDispatcher().dispatchOnCompleteEvent(S, t);
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class ox extends ec {
}
class nx extends q0 {
}
const ix = "isMouthStatusNotTooLow";
var Lo;
class rx extends xe {
  constructor(t, e) {
    super(ix, t);
    O(this, Lo);
    F(this, Lo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Lo));
  }
}
Lo = new WeakMap();
class vg extends Z0 {
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
    const e = this.getThresholds(), A = new V0([new X0(e.confidence.min, t.confidence), new $0(e.mouth.confidence.min, t.mouth.confidence), new z0(e.size.min, t.faceSize), new Ac(e.size.max, t.faceSize), new rx(this.getMouthStatusThreshold(e), t.mouth.status)]);
    return A.validate(), A;
  }
}
class ax extends ec {
}
var ke, Ke;
class gx extends _0 {
  constructor(...t) {
    super(...t);
    O(this, ke);
    O(this, Ke);
    F(this, ke, void 0), F(this, Ke, void 0), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(tn).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    F(this, Ke, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && F(this, ke, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Ir.REQUEST_CAPTURE, y(this, Ke));
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
    return y(this, ke) ? y(this, ke) === tn.FIRST_FRAME ? !0 : y(this, ke) === tn.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof D ? e : D.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    await this.onCapture(t, e), F(this, ke, void 0);
  }
  stop() {
    super.stop(), y(this, Ke) && document.removeEventListener(Ir.REQUEST_CAPTURE, y(this, Ke));
  }
}
ke = new WeakMap(), Ke = new WeakMap();
class sx extends j0 {
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
    const r = new JE(), g = new tx(A[J.NEUTRAL]), a = new LE(n), s = new ji(t, g), B = new Fg(o), I = this.createInstructionEscalation(n);
    return r.setName(J.NEUTRAL), r.setCandidateSelection(B), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Si), r.setFallbackInstruction(aA.FACE_NOT_PRESENT), r.setInstructionCodeMap(aA), r.setInstructionEscalation(I), r.setImageProcessor(s), r.build();
  }
  createSmileDetection(n, t, e, A, o = oi) {
    const r = new nx(), g = new vg(A[J.SMILE], n), a = new ox(n), s = new ji(t, g), B = new Fg(o), I = this.createInstructionEscalation(n);
    return r.setName(J.SMILE), r.setCandidateSelection(B), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Si), r.setFallbackInstruction(aA.FACE_NOT_PRESENT), r.setInstructionEscalation(I), r.setInstructionCodeMap(aA), r.setImageProcessor(s), r.build();
  }
  createSmileManualDetection(n, t, e, A) {
    const o = new Ix(), r = new vg(A[J.SMILE], n), g = new ax(n), a = new ji(t, r), s = this.createInstructionEscalation(n);
    return o.setName(J.SMILE_MANUAL), o.setCameraService(e), o.setCallbacks(g), o.setCheckToInstructionCodeMap(Si), o.setFallbackInstruction(aA.FACE_NOT_PRESENT), o.setInstructionEscalation(s), o.setImageProcessor(a), o.build();
  }
  createInstructionEscalation(n) {
    return new ME(new WE(Ki.timeout), n.getDispatcher(), { threshold: Ki.threshold, instructions: Ki.instructions }, n.getAnalytics());
  }
}
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mg = {}, qi = {}, Vi, Wg;
function Cx() {
  if (Wg) return Vi;
  Wg = 1, Vi = i;
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
  return Vi;
}
var Lg = {}, Og;
function Bx() {
  return Og || (Og = 1, function(i) {
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
      for (var s = null, B = [], I = 0, x = 0, c; g < a; ) {
        var E = r[g++];
        switch (x) {
          case 0:
            B[I++] = t[E >> 2], c = (E & 3) << 4, x = 1;
            break;
          case 1:
            B[I++] = t[c | E >> 4], c = (E & 15) << 2, x = 2;
            break;
          case 2:
            B[I++] = t[c | E >> 6], B[I++] = t[E & 63], x = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, B)), I = 0);
      }
      return x && (B[I++] = t[c], B[I++] = 61, x === 1 && (B[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, B.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, B.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var s = a, B = 0, I, x = 0; x < r.length; ) {
        var c = r.charCodeAt(x++);
        if (c === 61 && B > 1)
          break;
        if ((c = e[c]) === void 0)
          throw Error(o);
        switch (B) {
          case 0:
            I = c, B = 1;
            break;
          case 1:
            g[a++] = I << 2 | (c & 48) >> 4, I = c, B = 2;
            break;
          case 2:
            g[a++] = (I & 15) << 4 | (c & 60) >> 2, I = c, B = 3;
            break;
          case 3:
            g[a++] = (I & 3) << 6 | c, B = 0;
            break;
        }
      }
      if (B === 1)
        throw Error(o);
      return a - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(Lg)), Lg;
}
var Zi, Jg;
function Qx() {
  if (Jg) return Zi;
  Jg = 1, Zi = i;
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
  }, Zi;
}
var zi, Ug;
function Ex() {
  if (Ug) return zi;
  Ug = 1, zi = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function s(c, E, d) {
        r[0] = c, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3];
      }
      function B(c, E, d) {
        r[0] = c, E[d] = g[3], E[d + 1] = g[2], E[d + 2] = g[1], E[d + 3] = g[0];
      }
      o.writeFloatLE = a ? s : B, o.writeFloatBE = a ? B : s;
      function I(c, E) {
        return g[0] = c[E], g[1] = c[E + 1], g[2] = c[E + 2], g[3] = c[E + 3], r[0];
      }
      function x(c, E) {
        return g[3] = c[E], g[2] = c[E + 1], g[1] = c[E + 2], g[0] = c[E + 3], r[0];
      }
      o.readFloatLE = a ? I : x, o.readFloatBE = a ? x : I;
    }() : function() {
      function r(a, s, B, I) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
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
          a((x << 31 | 2139095040) >>> 0, B, I);
        else if (s < 11754943508222875e-54)
          a((x << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, B, I);
        else {
          var c = Math.floor(Math.log(s) / Math.LN2), E = Math.round(s * Math.pow(2, -c) * 8388608) & 8388607;
          a((x << 31 | c + 127 << 23 | E) >>> 0, B, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, s, B) {
        var I = a(s, B), x = (I >> 31) * 2 + 1, c = I >>> 23 & 255, E = I & 8388607;
        return c === 255 ? E ? NaN : x * (1 / 0) : c === 0 ? x * 1401298464324817e-60 * E : x * Math.pow(2, c - 150) * (E + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function s(c, E, d) {
        r[0] = c, E[d] = g[0], E[d + 1] = g[1], E[d + 2] = g[2], E[d + 3] = g[3], E[d + 4] = g[4], E[d + 5] = g[5], E[d + 6] = g[6], E[d + 7] = g[7];
      }
      function B(c, E, d) {
        r[0] = c, E[d] = g[7], E[d + 1] = g[6], E[d + 2] = g[5], E[d + 3] = g[4], E[d + 4] = g[3], E[d + 5] = g[2], E[d + 6] = g[1], E[d + 7] = g[0];
      }
      o.writeDoubleLE = a ? s : B, o.writeDoubleBE = a ? B : s;
      function I(c, E) {
        return g[0] = c[E], g[1] = c[E + 1], g[2] = c[E + 2], g[3] = c[E + 3], g[4] = c[E + 4], g[5] = c[E + 5], g[6] = c[E + 6], g[7] = c[E + 7], r[0];
      }
      function x(c, E) {
        return g[7] = c[E], g[6] = c[E + 1], g[5] = c[E + 2], g[4] = c[E + 3], g[3] = c[E + 4], g[2] = c[E + 5], g[1] = c[E + 6], g[0] = c[E + 7], r[0];
      }
      o.readDoubleLE = a ? I : x, o.readDoubleBE = a ? x : I;
    }() : function() {
      function r(a, s, B, I, x, c) {
        var E = I < 0 ? 1 : 0;
        if (E && (I = -I), I === 0)
          a(0, x, c + s), a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), x, c + B);
        else if (isNaN(I))
          a(0, x, c + s), a(2146959360, x, c + B);
        else if (I > 17976931348623157e292)
          a(0, x, c + s), a((E << 31 | 2146435072) >>> 0, x, c + B);
        else {
          var d;
          if (I < 22250738585072014e-324)
            d = I / 5e-324, a(d >>> 0, x, c + s), a((E << 31 | d / 4294967296) >>> 0, x, c + B);
          else {
            var l = Math.floor(Math.log(I) / Math.LN2);
            l === 1024 && (l = 1023), d = I * Math.pow(2, -l), a(d * 4503599627370496 >>> 0, x, c + s), a((E << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, x, c + B);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, s, B, I, x) {
        var c = a(I, x + s), E = a(I, x + B), d = (E >> 31) * 2 + 1, l = E >>> 20 & 2047, Q = 4294967296 * (E & 1048575) + c;
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
  return zi;
}
function Yg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Xi, Tg;
function xx() {
  if (Tg) return Xi;
  Tg = 1, Xi = i;
  function i(n) {
    try {
      if (typeof Yg != "function")
        return null;
      var t = Yg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Xi;
}
var Pg = {}, Hg;
function dx() {
  return Hg || (Hg = 1, function(i) {
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
  }(Pg)), Pg;
}
var $i, Kg;
function lx() {
  if (Kg) return $i;
  Kg = 1, $i = i;
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
  return $i;
}
var Ar, _g;
function ux() {
  if (_g) return Ar;
  _g = 1, Ar = n;
  var i = dt();
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
  }, Ar;
}
var jg;
function dt() {
  return jg || (jg = 1, function(i) {
    var n = i;
    n.asPromise = Cx(), n.base64 = Bx(), n.EventEmitter = Qx(), n.float = Ex(), n.inquire = xx(), n.utf8 = dx(), n.pool = lx(), n.LongBits = ux(), n.isNode = !!(typeof yt < "u" && yt && yt.process && yt.process.versions && yt.process.versions.node), n.global = n.isNode && yt || typeof window < "u" && window || typeof self < "u" && self || qi, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(qi)), qi;
}
var er, qg;
function tc() {
  if (qg) return er;
  qg = 1, er = a;
  var i = dt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
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
  function B(l, Q, h) {
    Q[h] = l & 255;
  }
  function I(l, Q, h) {
    for (; l > 127; )
      Q[h++] = l & 127 | 128, l >>>= 7;
    Q[h] = l;
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
    return l < 0 ? this._push(c, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function c(l, Q, h) {
    for (; l.hi; )
      Q[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[h++] = l.lo;
  }
  a.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(c, Q.length(), Q);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(c, Q.length(), Q);
  }, a.prototype.bool = function(l) {
    return this._push(B, 1, l ? 1 : 0);
  };
  function E(l, Q, h) {
    Q[h] = l & 255, Q[h + 1] = l >>> 8 & 255, Q[h + 2] = l >>> 16 & 255, Q[h + 3] = l >>> 24;
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
  var d = i.Array.prototype.set ? function(l, Q, h) {
    Q.set(l, h);
  } : function(l, Q, h) {
    for (var m = 0; m < l.length; ++m)
      Q[h + m] = l[m];
  };
  return a.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(B, 1, 0);
    if (i.isString(l)) {
      var h = a.alloc(Q = e.length(l));
      e.decode(l, h, 0), l = h;
    }
    return this.uint32(Q)._push(d, Q, l);
  }, a.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(B, 1, 0);
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
  }, er;
}
var tr, Vg;
function hx() {
  if (Vg) return tr;
  Vg = 1, tr = t;
  var i = tc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = dt();
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
  }, t._configure(), tr;
}
var or, Zg;
function oc() {
  if (Zg) return or;
  Zg = 1, or = o;
  var i = dt(), n, t = i.LongBits, e = i.utf8;
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
    var I = this.uint32(), x = this.pos, c = this.pos + I;
    if (c > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(x, c);
    if (x === c) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, x, c);
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
        return B.call(this)[x](!0);
      },
      sfixed64: function() {
        return B.call(this)[x](!1);
      }
    });
  }, or;
}
var nr, zg;
function fx() {
  if (zg) return nr;
  zg = 1, nr = t;
  var i = oc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = dt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), nr;
}
var Xg = {}, ir, $g;
function px() {
  if ($g) return ir;
  $g = 1, ir = n;
  var i = dt();
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
  }, ir;
}
var As;
function mx() {
  return As || (As = 1, function(i) {
    var n = i;
    n.Service = px();
  }(Xg)), Xg;
}
var es, ts;
function yx() {
  return ts || (ts = 1, es = {}), es;
}
var os;
function Dx() {
  return os || (os = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = tc(), n.BufferWriter = hx(), n.Reader = oc(), n.BufferReader = fx(), n.util = dt(), n.rpc = mx(), n.roots = yx(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(Mg)), Mg;
}
var ns, is;
function wx() {
  return is || (is = 1, ns = Dx()), ns;
}
var N = wx();
const f = N.Reader, R = N.Writer, u = N.util, C = N.roots.default || (N.roots.default = {}), et = C.dot = (() => {
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.Content)
        return t;
      let e = new C.dot.Content();
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        A instanceof f || (A = f.create(A));
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
        A instanceof f || (A = f.create(A));
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
              a.dynamicCameraFrameProperties === u.emptyObject && (a.dynamicCameraFrameProperties = {});
              let x = A.uint32() + A.pos;
              for (s = "", B = null; A.pos < x; ) {
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    B = C.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(c & 7);
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = C.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
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
            r.digests[a] = o.bytes === String ? u.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Yuv420Image)
          return e;
        let A = new C.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        A instanceof f || (A = f.create(A));
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
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let x = A.uint32() + A.pos;
              for (s = "", B = !1; A.pos < x; ) {
                let c = A.uint32();
                switch (c >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(c & 7);
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
                let x = A.uint32() + A.pos;
                for (; A.pos < x; )
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
            if (!u.isInteger(A.isoValues[o]))
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosYuv420Image)
          return e;
        let A = new C.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
            if (!u.isString(A.hashedDetectedImages[o]))
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
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
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && C.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
            C.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof f || (A = f.create(A));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !u.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !u.isString(e.version) ? "version: string expected" : null;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && C.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && C.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && C.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && C.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return A.bytes != null && (typeof A.bytes == "string" ? u.base64.decode(A.bytes, o.bytes = u.newBuffer(u.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? C.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : C.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && C.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && C.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? u.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = u.newBuffer(u.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : C.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
            C.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.detections && g.detections.length || (g.detections = []), g.detections.push(C.dot.v4.FaceDetection.decode(e, e.uint32()));
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && C.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = C.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = C.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && C.dot.PointDouble.encode(e.center, A.uint32(
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && C.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Image();
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
      if (t instanceof C.dot.Image)
        return t;
      let e = new C.dot.Image();
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
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && C.dot.Image.encode(t.image, e.uint32(
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = C.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.ImageWithTimestamp)
        return t;
      let e = new C.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = C.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = C.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.DigestWithTimestamp)
        return t;
      let e = new C.dot.DigestWithTimestamp();
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
      e instanceof f || (e = f.create(e));
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
      if (e.bytes != null && (typeof e.bytes == "string" ? u.base64.decode(e.bytes, A.bytes = u.newBuffer(u.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? u.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = C.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = C.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.VideoContainer();
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
      if (t instanceof C.dot.VideoContainer)
        return t;
      let e = new C.dot.VideoContainer();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.VideoStream)
        return t;
      let e = new C.dot.VideoStream();
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !u.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !u.isInteger(t.y) ? "y: integer expected" : null;
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
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  }(), i;
})();
(function(i, n) {
  function t(g, a, s, B, I) {
    return $(I - 756, g);
  }
  function e(g, a, s, B, I) {
    return $(s - 750, I);
  }
  function A(g, a, s, B, I) {
    return $(g - 632, I);
  }
  function o(g, a, s, B, I) {
    return $(s - 390, B);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(o(597, 621, 695, "R(*E", 721)) / 1 + parseInt(o(538, 526, 548, "hC@D", 565)) / 2 + parseInt(t("VfbS", 1186, 1158, 1159, 1072)) / 3 * (parseInt(A(767, 722, 668, 729, "2as!")) / 4) + parseInt(o(787, 667, 684, "1fFa", 721)) / 5 + -parseInt(e(936, 1144, 1030, 1084, "itHi")) / 6 + parseInt(e(957, 817, 918, 847, "R@EM")) / 7 + -parseInt(t("yRr[", 935, 1024, 862, 912)) / 8 * (parseInt(e(1042, 990, 1027, 1106, "A*h%")) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(gi, 460116 + -1 * 201731);
function $(i, n) {
  const t = gi();
  return $ = function(e, A) {
    e = e - (-1 * 6089 + 1 * 2411 + 1 * 3779);
    let o = t[e];
    if ($.rldZgB === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      $.qezpHo = B, i = arguments, $.rldZgB = !0;
    }
    const g = t[1 * 772 + -1 * 2362 + 1590], a = e + g, s = i[a];
    return s ? o = s : ($.mGJpcv === void 0 && ($.mGJpcv = !0), o = $.qezpHo(o, A), i[a] = o), o;
  }, $(i, n);
}
function bx() {
  function i(B, I, x, c, E) {
    return $(E - 610, I);
  }
  const n = g(-209, -41, -230, -141, "!@]P") + g(-174, -184, -221, -142, "R(*E") + A("1fFa", -268, -286, -340) + g(-21, -79, -105, -75, "bPI6") + i(918, "*@Yw", 849, 761, 840) + A("IrV@", -498, -515, -510) + s("!@]P", 21) + s("*@Yw", 55) + a("^ZD(", 1138, 1171, 1061, 1124) + g(13, 62, 88, -16, "*@Yw") + i(853, "hC@D", 649, 708, 746) + i(887, "IrV@", 843, 947, 929) + g(-220, -193, -233, -117, "4X4V") + i(784, "Xie%", 733, 671, 759) + g(-44, -118, -106, -157, "4X4V") + a("VfbS", 1062, 1021, 1080, 1094) + i(738, "bPI6", 719, 784, 813) + A("ww8U", -333, -352, -416) + i(790, "3*Hj", 826, 770, 816) + g(-93, -34, 50, -63, "*Kr&") + s("vyaH", 98) + s("!BxP", -57) + A("FBFj", -428, -477, -411) + i(735, "3*Hj", 643, 656, 727) + a("yRr[", 1080, 945, 1128, 1014) + a("69rv", 942, 935, 1053, 1032) + A("yRr[", -584, -395, -500) + a("Y9aJ", 1089, 1072, 1142, 1119) + s("k9qM", -29) + s("wH]a", -55) + A("4X4V", -589, -549, -478) + A("fE2Q", -286, -397, -326) + a("*Kr&", 1130, 1037, 1036, 1053) + g(-175, -117, -77, -129, "tdKj") + A("n!#k", -343, -420, -409) + A("E@*u", -395, -366, -388) + A("q5co", -431, -438, -325) + s("69rv", 67) + a("4X4V", 1098, 1087, 1003, 1060) + A("!BxP", -570, -366, -471) + i(847, "tZ^e", 959, 1015, 919) + s("!BxP", 90) + a("q5co", 1053, 1207, 1234, 1132) + s("1fFa", -4) + a("&IUQ", 975, 941, 944, 961) + A("!xIF", -560, -595, -512) + s("W^P@", 167) + a("Gpim", 954, 937, 1013, 978) + i(844, "@)su", 732, 896, 836) + a("!@]P", 1067, 1035, 1129, 1021) + s("VWO7", 13) + i(992, "n!#k", 818, 913, 920) + s("d5!a", 106) + g(-267, -238, -154, -166, "tEFC") + A("1fFa", -515, -524, -435) + g(-108, -66, -237, -139, "!xIF") + a("d5!a", 973, 973, 1072, 966) + s("q5co", 82) + s("d5!a", 101) + A("R(*E", -496, -474, -443) + A("^ZD(", -403, -567, -515) + a("XlXU", 992, 1116, 981, 1006) + g(-151, -77, 25, -74, "fE2Q") + a("VfbS", 961, 1100, 991, 997) + a("4X4V", 1023, 1205, 1095, 1109) + i(1e3, "q5co", 957, 842, 910) + g(6, -59, -118, -31, "He&e") + s("vyaH", 41) + a("vyaH", 1187, 1016, 1157, 1090) + a("ww8U", 843, 965, 911, 949) + A("wH]a", -440, -315, -369) + g(-40, 78, 25, -11, "XlXU") + a("VfbS", 879, 1033, 923, 945) + A("tEFC", -533, -564, -449) + g(-119, -130, 19, -30, "ydaL") + s("XlXU", 124) + a("A*h%", 1059, 1095, 1093, 1030) + g(-103, -152, 8, -96, "yRr[") + i(877, "*Kr&", 950, 966, 900) + A("vyaH", -482, -389, -464) + s("&o0p", 89) + i(723, "&IUQ", 653, 698, 725) + g(-104, -63, -94, 4, "!BxP") + g(41, -137, -67, -67, "&IUQ") + A("$*kj", -326, -403, -303) + g(9, -27, 117, 23, "4X4V") + A("l]TL", -353, -343, -306) + g(68, -65, -43, 47, "z]MU") + A("fE2Q", -546, -476, -457) + a("R(*E", 1098, 1099, 1113, 1041) + g(-118, -52, -162, -147, "ydaL") + A("A*h%", -357, -521, -447) + A("ww8U", -628, -448, -516) + A("R(*E", -406, -310, -301) + A("l]TL", -336, -544, -429) + A("d5!a", -351, -389, -448) + g(-175, -162, -11, -113, "VWO7") + i(772, "XlXU", 819, 904, 851) + i(899, "E@*u", 784, 796, 790) + s("R(*E", 115) + s("VfbS", 26) + a("wH]a", 951, 917, 1012, 1031) + A("XlXU", -277, -335, -393) + i(724, "VWO7", 635, 660, 738) + g(-93, 5, -58, -83, "n!#k") + s("He&e", 71) + g(31, 107, 113, 20, "Y9aJ") + g(-169, -51, -52, -68, "^ZD(") + i(883, "FBFj", 760, 788, 845) + A("ww8U", -535, -476, -445) + a("*Kr&", 1200, 1021, 1126, 1114) + i(673, "^ZD(", 707, 736, 750) + s("Gpim", 118) + s("A*h%", 86) + s("3*Hj", 87) + a("4X4V", 900, 849, 840, 940) + i(818, "!@]P", 743, 816, 830) + a("3*Hj", 1133, 986, 1062, 1096) + A("IrV@", -470, -454, -384) + a("Y9aJ", 1001, 902, 1052, 944) + s("@)su", 48) + A("tZ^e", -383, -433, -477) + s("R@EM", 1) + g(-109, -233, -68, -161, "u#$o") + i(996, "O7@j", 822, 884, 902) + A("*Kr&", -184, -356, -295) + g(5, -58, 39, 7, "d5!a") + i(874, "&IUQ", 942, 1017, 942) + g(17, -3, -179, -70, "VfbS") + s("u#$o", 108) + s("k9qM", 105) + g(-88, 31, 69, 6, "IrV@") + s("c%VH", -42) + i(908, "O7@j", 920, 776, 878) + s("c%VH", -17) + a("tEFC", 911, 1028, 959, 1025) + a("ydaL", 958, 1017, 820, 923) + i(624, "A*h%", 735, 783, 732) + g(24, 125, 8, 29, "itHi") + A("W^P@", -543, -434, -454) + a("A*h%", 1063, 1200, 1131, 1131) + s("4X4V", 140) + a("d5!a", 995, 868, 1002, 920) + a("bPI6", 942, 958, 1020, 1046) + A("2as!", -340, -477, -455) + g(-230, -205, -183, -118, "W^P@") + A("vyaH", -279, -430, -361) + g(100, 99, -44, 28, "u#$o") + A("c%VH", -302, -478, -412) + s("z]MU", 4) + a("$*kj", 1088, 1056, 907, 998) + i(747, "$*kj", 795, 853, 741) + a("wH]a", 997, 1126, 1162, 1067) + i(724, "Gpim", 794, 825, 751) + a("d5!a", 1069, 1112, 1095, 1080) + g(-145, -156, -118, -64, "^ZD(") + s("tEFC", -38) + i(724, "!xIF", 733, 891, 831) + s("1fFa", 3) + A("!BxP", -467, -374, -440) + s("n!#k", 12) + a("!xIF", 999, 1096, 1024, 1088) + A("He&e", -492, -350, -432) + a("FBFj", 989, 1109, 1082, 1040) + i(959, "A*h%", 940, 900, 868) + a("A*h%", 996, 1061, 1118, 1056) + s("wH]a", 27) + i(632, "FBFj", 756, 678, 735) + g(-161, -148, 11, -57, "Gpim") + A("tEFC", -528, -386, -438) + g(-113, -67, -113, -46, "n!#k") + s("1fFa", 121) + g(-135, -39, 44, -72, "bPI6") + A("IrV@", -557, -430, -479) + i(937, "ydaL", 918, 835, 880) + s("E@*u", 66) + i(751, "He&e", 690, 805, 744) + i(787, "Xie%", 818, 851, 820) + g(-184, -47, -191, -105, "c%VH") + i(857, "W^P@", 879, 1018, 937) + A("R(*E", -604, -602, -504) + g(-67, 34, -38, 46, "vyaH") + s("E@*u", 56) + A("u#$o", -464, -359, -382) + g(-67, -98, -261, -165, "n!#k") + s("tdKj", 161) + s("3*Hj", -18) + A("Xie%", -316, -346, -318) + A("Gpim", -276, -296, -313) + s("VfbS", 83) + s("!@]P", -60) + s("A*h%", 36) + g(-250, -247, -108, -150, "u#$o") + s("tEFC", 95) + i(861, "tdKj", 764, 783, 875) + i(972, "R(*E", 887, 914, 864) + s("&o0p", 22) + g(-22, -115, -19, -102, "hC@D") + A("XlXU", -264, -286, -304) + s("l]TL", 103), t = window[A("c%VH", -535, -491, -519)](n), e = window[s("*Kr&", 58)](t);
  function A(B, I, x, c, E) {
    return $(c - -624, B);
  }
  const o = LC(e), r = {};
  function g(B, I, x, c, E) {
    return $(c - -268, E);
  }
  r[i(928, "k9qM", 853, 880, 940)] = eI, r[a("$*kj", 993, 854, 855, 968)] = DC;
  function a(B, I, x, c, E) {
    return $(E - 807, B);
  }
  function s(B, I, x, c, E) {
    return $(I - -161, B);
  }
  return window[A("fE2Q", -517, -344, -446) + "o"][i(1050, "ww8U", 915, 1001, 936) + "e"][i(1004, "He&e", 834, 819, 905) + s("yRr[", 68)](g(-54, 54, 21, 40, "Gpim"), o, r, !0, [g(122, -36, -71, 18, "wH]a") + "pt"]);
}
async function kx(i) {
  function n(r, g, a, s, B) {
    return $(s - 837, a);
  }
  const t = await bx();
  function e(r, g, a, s, B) {
    return $(a - 921, B);
  }
  function A(r, g, a, s, B) {
    return $(a - 10, g);
  }
  const o = {};
  return o[n(888, 1065, "3*Hj", 989)] = eI, window[e(1292, 1221, 1214, 1171, "k9qM") + "o"][e(1130, 1125, 1051, 1018, "FBFj") + "e"][A(364, "IrV@", 313) + "pt"](o, t, i);
}
function gi() {
  const i = ["W6yUEmkSqa", "WPlcUw5yqW", "W7mHWP0rcG", "WRldTs8tWR8", "awjetH0", "WPldMWSxzW", "W7NcQIJcLSk+", "W63cVM3dQ8oI", "i1dcTmkMxW", "AM7cQ8o6aa", "aSoyAmoCWQG", "WPVdKaJcICoPWPC8WOZdVehcQmkdW7i", "W7SMv8oFEG", "W5BcS8o1W55o", "lCkEWR5CWOu", "WR/cT8krW7Cv", "W6/cKWtcSSkS", "FJHPW4Hd", "W5mwtg9V", "Eb8QtCkK", "WQKoxmo6yq", "WPxdMSohWOOA", "WQPhWPvbW4S", "W5JcTqNcJ8ki", "W5/cOmogWO8S", "na9kASod", "WO/dL8kSW7W0", "qLmzc8kKbSkmv0ZcJaldMG", "uSo9mdhcPq", "n1v/uCox", "ttO4kmkl", "dcqfdK0", "W6jMWOtdQsi", "DmorlYpcQa", "uH0ZdHW", "jeNdL8k5yG", "p0rZfI8", "WOFdH0xdQ8ogWOddH39Sh0DXoW", "kbDxWQ9D", "vSoIaWRcMW", "W43cPHtcJmk0", "sSowbd7cLW", "W5ipz8kvua", "WR/dJCoRW7G7W7VdSCkj", "WQ1QcCo+iSkYW6COuX0Ws1a", "WR5un8onWQ8", "W7/cOclcMW8Gy8kmW4BcJmo1W7yy", "W73cK8o7bCk7", "WORcMYHzW5e", "lIn8D8o3", "W5pcGueXW68", "WP/cQ2/dRmkk", "WR7dRmo+WR4a", "bCoOhCoGW50", "W5pcPCoSWQ59", "lCogWQamWQu", "W5iIc8ozFW", "tY05rCkC", "zq86iMa", "W6zSWPZdSM8", "W5FdSYWWWQ4+otOOWPhcKxzF", "WQVdMHrnWO8", "g1lcJCk5uG", "WPZcPvddGhG", "WRDOW4FcSCoL", "D0tcN8oobG", "eNBcJ8osoa", "ywqYrSkA", "xHKqxSkd", "W5RcKrZcT8o+", "WOhdIuZdQmocWONcMvXuduTT", "WQDRbSo3jmo7WPy6qYOa", "W5XQiCoMW70", "W7nbp8onFW", "WQKucSoH", "WQFdQHitWQm", "fmokzhhdOa", "WO0YbSk4WQ8", "W5xcHCkrWObF", "D8ksWRSVWPVcQCo3WPC", "pv1CzCo+", "WPznf8oOlG", "w8ozESo8WPzLWPW", "W4jfESkNyW", "teKCEmoc", "W5hcRsRcG8oW", "W6ZcPMZdQSoG", "W6tdNqD0wa", "v2a+bfW", "W4OUwCkzFG", "W5JcOSobW4GX", "DfpcOSkgoW", "awNdLmkXCG", "W6lcGYm/AW", "WO3dQX89vW", "WPeFb8o6Cq", "W6T/WOJdPW", "W7VcTu1CW7iuWRpcV0KRWOG", "WOnGW4pdRmoT", "W7DmW4CWhq", "W4XhWQT3W7a", "c8oiuf3dIG", "gICOW5uj", "W6dcKhH2", "W6NdJmouWQGt", "i0BcMCkXva", "iY7cH8kktW", "W5HxBSkXzW", "WQK4W5GLWPlcQmk0W5/cHmk4ccddHq", "Bb8VzCkv", "W5JcOCofeCkQ", "uSo/bcdcPq", "W7RcTt3cKmos", "WP5sW5JdMCo2", "agOqobq", "lSoHW4CDWRi", "h3tcTCkKDa", "W6pcOsyGnq", "W5nOvCo9tG", "i2nRjca", "W6lcNSoDW5Sv", "W7O6WQKJW4u", "zqxdNmoVW4e", "WQ/cG0HvrW", "WQ82qmkEqq", "W7vTW6GwjW", "jMpcNmkdcW", "WQtcVCoOgSkZ", "WRFcLhXfEq", "WRFdHN5MtG", "W5biWOhcSK8", "sGCRFmkn", "WPhcHbrVWQO", "WOObetDfCuNdQaTnWPNdMW", "WPNdOh7dLgu", "W5NcUSo6WOmr", "oSoHy8ohWOW", "cNSIbKm", "W5XAACkfFG", "WO8IcSoBW4u", "i2ZdOmkuCW", "c8kEWRGgW6S", "WRdcQ3v6ia", "W5JcJZpcL8oq", "sIWFxCkJ", "WOldQWaZWOy", "WPNcT27dKCkOW5bm", "W7eaASoeW7u", "W7pcNh0Gdq", "xZCuz8kE", "kmolWPGi", "Fa8RW5bT", "WQTtW6ldSSoO", "lqlcOmkxiW", "mWxcVCkgWPmFWPXwWPifW5xdMmkY", "WR7cIsLGW6e", "W4RcMHFdLHFcIt7dPeddNehcTq", "AmornfxcRW", "cJb6BCkL", "W67dQuvy", "uXS7xSkw", "W6NdLfPUma", "WQZcRLruW6m", "WQToj8oBfW", "W43dQHZcTNy", "WQDKW4NcVSo4", "ihThn8o8ESofWO8GdSkUWQlcJG", "W5zmA3uH", "W4hcIX0WcW", "WQ0Zn8oSWRG", "mMpcS8oJW4K", "emoXCq7dIa", "fhtcT8kPbG", "W599WO53W4K", "DCo1nGRcHq", "WR7cUmkvWOSf", "WP5aW5tcH8oy", "hfRdJSkrCW", "W5CXW75sfa", "W6umDmkKBG", "W7D/W5ujma", "W6lcUKddRSkN", "cZPDW4rq", "oCkSweBdUq", "W7raWPHdWPu", "mSoKF8oIWQu", "WRFdQ8ohWOqZ", "WPxcSeOZW7m", "lmoRASoNWRy", "W4ZdGLv2zq", "WPpdGt12WRS", "WP/dRh0tzq", "WRSeW7/cSmo2", "h00+jSo0", "WOldMgGsqG", "WR3cOCojW5i5", "o8k4fmoyWRS", "W7ZcPG3dQ8kv", "W6DIB8oqDW", "WQPBW6/dVmo/", "id1aw8o+", "WRhdOffsqq", "WR5uzmkKEW", "W40rbCo9sa", "nSo9WQ8hWRS", "wfJdLmkeW6O", "i2ZdP8kCrG", "tmkdWOqqWRW", "W496wmoUWP8", "WRSpeCokWQW", "W5VcIviNka", "WRdcTh93wW", "WPjCW705ga", "e8o1xvFcNG", "W5yRohGZ", "WRWwW7OKha", "W49RWRPaW7q", "W4mhaCov", "W7zSW6HSja", "W73cOSoubCoY", "kCoKENJdQq", "W6RcOCobW6WU", "W6RdImoOWQ0U", "irZcPbhdLq", "t8krWROCWQC", "WRClW4CKka", "mqFdOXpdLG", "Dx7dOmoo", "W5qaza0q", "W7dcLg/dQmkc", "W7ldNXz2WQu", "WOVcTuLDEW"];
  return gi = function() {
    return i;
  }, gi();
}
(function(i, n) {
  function t(a, s, B, I, x) {
    return UA(x - 835, a);
  }
  function e(a, s, B, I, x) {
    return UA(B - -350, s);
  }
  function A(a, s, B, I, x) {
    return UA(B - 105, a);
  }
  function o(a, s, B, I, x) {
    return UA(x - -270, a);
  }
  function r(a, s, B, I, x) {
    return UA(a - 200, B);
  }
  const g = i();
  for (; ; )
    try {
      if (-parseInt(A("1csh", 461, 464, 473, 464)) / 1 * (parseInt(A("07j*", 451, 453, 453, 459)) / 2) + -parseInt(e(-15, "xy7w", -4, 7, 2)) / 3 + -parseInt(A("8kPM", 465, 465, 469, 455)) / 4 * (-parseInt(e(-19, "AwjK", -7, -6, -18)) / 5) + parseInt(e(-4, "Z5&!", 7, 2, 19)) / 6 * (parseInt(e(12, "8kPM", 5, 1, 4)) / 7) + -parseInt(A("Naa4", 438, 450, 447, 439)) / 8 * (parseInt(o("^#1T", 82, 84, 69, 81)) / 9) + parseInt(t("GdXy", 1181, 1173, 1166, 1175)) / 10 + -parseInt(r(561, 565, "xy7w", 560, 557)) / 11 === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(si, 1021 * 241 + -16243 * -5 + -112880);
function si() {
  const i = ["WPRdIHxcMYxdUSkvW5/dTCocDG", "amkYWQuhWPLgWOlcR8kGbfNdLq", "W5hcHCoTWOHxbSkdWRBcJZa", "xCklkWxdSmoky8k2fSoyW7hcSq", "qCkQbCohW4j8pdddNSoBWR4", "hGZdRSoMpdFcHCkhaCoeEW", "W73cSSkJWQFcJLVcMW", "W7aGkCoQWQumWQGBWOzm", "hCkihZVcJNWfsa56", "WPxcJCoHemkDfComWQS", "W4jxW7z/xstdTCkqDvrUEdW", "pbnrC8oWzXq2W71s", "W6abcI3cHGGLea", "WPC/v3ZcMa", "oSkowxpcRCoMWPBcP8odzCk+sW", "WPhcJCoE", "W7BcVmoAkmoJbgW", "W64loY/cSsWgnG", "wmkokWhdUSobvmk9iSoTW6FcVG", "zSoSxmkrWPzwfmkV", "ssRdJ2ZcVSoqW4rPgmkiWRFdMW", "BSoHcmoUW40hxCkiztn/WOHm", "W5RdHSkwxNTkWRldP0DWW5ZdQa", "W4pcJdKFFCkeW7L0cb7dGG"];
  return si = function() {
    return i;
  }, si();
}
function UA(i, n) {
  const t = si();
  return UA = function(e, A) {
    e = e - (-61 * -88 + -2641 * 2 + 253);
    let o = t[e];
    if (UA.BWCNBp === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      UA.HVVdui = B, i = arguments, UA.BWCNBp = !0;
    }
    const g = t[5677 + 5677 * -1], a = e + g, s = i[a];
    return s ? o = s : (UA.oJeFKG === void 0 && (UA.oJeFKG = !0), o = UA.HVVdui(o, A), i[a] = o), o;
  }, UA(i, n);
}
async function Sx(i) {
  const { iv: n, key: t, message: e } = await JC(i), A = await kx(t), o = {};
  o[r(-252, -264, -254, -270, "FKFv")] = A, o.iv = n, o[r(-263, -266, -273, -275, "YvR7") + "ge"] = e;
  function r(g, a, s, B, I) {
    return UA(a - -622, I);
  }
  return o;
}
function IA(i, n) {
  const t = Ii();
  return IA = function(e, A) {
    e = e - (19 * 331 + 1 * -2873 + -3226);
    let o = t[e];
    if (IA.ztHlRy === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      IA.dMgdGY = B, i = arguments, IA.ztHlRy = !0;
    }
    const g = t[-7161 * -1 + 9698 + 1 * -16859], a = e + g, s = i[a];
    return s ? o = s : (IA.RxSFaQ === void 0 && (IA.RxSFaQ = !0), o = IA.dMgdGY(o, A), i[a] = o), o;
  }, IA(i, n);
}
function VA(i, n, t, e, A) {
  return IA(t - 961, i);
}
(function(i, n) {
  function t(a, s, B, I, x) {
    return IA(I - -512, a);
  }
  function e(a, s, B, I, x) {
    return IA(I - 487, s);
  }
  function A(a, s, B, I, x) {
    return IA(s - -474, B);
  }
  function o(a, s, B, I, x) {
    return IA(x - -462, s);
  }
  const r = i();
  function g(a, s, B, I, x) {
    return IA(s - 867, B);
  }
  for (; ; )
    try {
      if (parseInt(e(754, "bnpt", 649, 715, 772)) / 1 * (-parseInt(A(-112, -180, "15Sj", -228, -142)) / 2) + -parseInt(e(751, "%aPN", 879, 818, 834)) / 3 + parseInt(o(-244, "9!3E", -186, -189, -203)) / 4 * (-parseInt(e(717, "Nc#$", 704, 743, 806)) / 5) + parseInt(g(1110, 1110, "15Sj", 1146, 1108)) / 6 + parseInt(g(1042, 1064, "jDye", 1093, 1036)) / 7 * (parseInt(t("lO)&", -250, -212, -202, -136)) / 8) + parseInt(g(1091, 1063, "jDye", 1067, 1070)) / 9 + -parseInt(g(1248, 1178, "!gn4", 1221, 1240)) / 10 * (-parseInt(g(1191, 1128, "awMv", 1057, 1185)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ii, 21 * 11141 + -196523 * 3 + 986021 * 1);
function eA(i, n, t, e, A) {
  return IA(A - -760, e);
}
function ve(i, n, t, e, A) {
  return IA(A - -192, e);
}
function SA(i, n, t, e, A) {
  return IA(t - 885, i);
}
function Ie(i, n, t, e, A) {
  return IA(A - -54, n);
}
function Ii() {
  const i = ["lvRcI8oFnW", "eSkhWQvFWQO", "ACkVWPPlWOC", "W5BcHSowWRWA", "mtGDc8ko", "WOVcThJdT1i", "pKtcJ8okjq", "W5BcUCoaWQyg", "zMKoW4vw", "xgXHsCo0W6W3W5RdHcVdUmodpa", "W7JcImkWg1a", "ds49eSke", "emoKWQ3dUSkS", "WPFcQZH0WRS", "b2JcMX9u", "umk/xmorjG", "W6NcLCkYgq", "dsGremkZ", "k8kDWR1Fea", "eYddR1G7", "amk1W6JcUCk0", "bb3cQeft", "u8kPWRNdN8krncTKWQtdPSoh", "tNxcL8kzWOi", "WRKgt8klW7i", "W6OXW7vjWRz2WPRdQCo0", "hrBdUxui", "tYZdTSoPW4xdGLJdILZcGG", "W6rpANvJ", "W4/dJgD9WRSJW4uLnW", "h8knyq", "rJRcLx3dUG", "WRBcScr4iW", "kqxdL8oRW5W", "bJ0I", "WR95WRDbWQa", "w8kicW", "zYdcIv7dMa", "WQRcJszvWRe", "WPVcJZrXWQO", "W5VdKxddUmkc", "k1RcJq", "t0ZdJCoHeq", "WQKhs8knW6m", "vLmaW6nP", "mIFdRf8Q", "fXVcNtJcHG", "W6KNtbjJ", "irldIG", "W68NwHP4", "W5tcPSoif8oi", "nYFdPLmB", "lvRcMSoOpG", "xMddJ8ocba", "zalcLfZdQq", "hSkPWQbxdq", "twPiW71w", "zCkdDmo5hW", "WRRcScW", "W6pcQfuAW7S", "x21IfmkBWRLeW5RdRW", "W417zwnI", "W5DYWOar", "owaYW4y", "oe3cNmoxjq", "dtu8fSkY", "ebxcLG", "orldISoVW78", "W6dcQuKwW5K", "d8o8W6BcNCoY", "W7ZcK8ojc8oD", "aCkhWQvoWR8", "f8o3WRZdUSkv", "WPpdOJidW58", "fMJcMX0", "W6tcSCoN", "W6hdT3eVz8k6f8o1lxhcKsK", "ECoEW6qhzCoZyhj/f8o5", "D1NcImkOWQK", "m8kBE8oJWOq", "dZxdVNVdTCozWOFcGvr4r8ojWR8", "W4TzCM1I", "WRdcGc12nq", "DNG/W4nc", "zM8IW4DH", "iCoKlM19", "vCkOWR7dNmkunZbEWRNdNSo9", "e1lcQSkKW68", "rx3dKG", "wh3dKmo8", "AxaSW41b", "i8k6uNlcGW", "W6BcQqu", "WPe1W59vnCkIzSo0hCktWQRdLq", "j8kIW7NcUCkP", "W77dIMVdOG", "CM8IW5G", "W5NdSY3cPrmGnXWvlHGafG", "v8kia8kJW78", "imoGgwq", "WOBcHdn8dW", "W7HcW6FdRq", "f8kbFCoeWQ8", "WP/dOZ4wW4i", "WQ0aWPpcNCoHWRP5WOCAnbhdMG", "WQSeW4hdKCkRW5TCWPW", "W5PVB3b7", "zdBcR17dVa", "fSo4WQVdTmk8", "WR/cIJtcPmoHWRZdTNVdMIZcLCk9", "W7ZdTCkdwg4", "emkhWRjFWQC", "W5OiW4NcLmkD", "ub1+Emo2", "WQLVWRnOWRy", "ySkhWPfmWQi", "yxaaW49x", "W4xcKCoxWRWt", "uCkQfmkTW78", "oZJcPfrs", "FIfVWO3dMKWNa8kPW5i", "pmomg3jV", "lwaYW5NdJG", "W5lcK8oa", "laxdNCoNW60", "W5dcM8oiWQuA", "retcKsNcJgSVW74", "fh/cKczj", "gZaZc8kN", "FrVdL8khcmkkWQXnWPa6", "jZddU1C4", "xL9iW7Te", "xgRdJCoNbW", "FI3cRw5kjSk8W5SsW7uL", "r8kNW7JdSmkcWPHAWPGx", "aSkGW6JcLCkL", "zSkYtdHnWQWiemovta", "eIhcJ8kGuq", "j0BcLa", "W6tdT3eQySk2ASo3gLZcHbWE", "b8knyCoeWRO", "W4hcHSokWQC"];
  return Ii = function() {
    return i;
  }, Ii();
}
class Gx {
  async [eA(-587, -596, -516, "E$qs", -570) + eA(-526, -468, -442, "8^Er", -456) + SA("Qx2z", 1142, 1140) + ve(80, 58, -31, "S23c", 15) + Ie(180, ")$m%", 91, 160, 161)](n) {
    function t(c, E, d, l, Q) {
      return SA(l, E - 475, d - -1724);
    }
    const { Image: e } = et, A = await n[a("*I[j", -644, -590, -594, -659) + a("hhOa", -605, -635, -611, -609) + "r"]();
    function o(c, E, d, l, Q) {
      return eA(c - 369, E - 86, d - 120, d, l - 1732);
    }
    const r = new Uint8Array(A), g = {};
    g[a("gAyz", -607, -710, -653, -657)] = r;
    function a(c, E, d, l, Q) {
      return eA(c - 4, E - 412, d - 438, c, Q - -102);
    }
    const s = e[I("Sje8", -195, -167, -107) + "y"](g);
    if (s)
      if (t(-591, -559, -601, "15Sj") === a("hhOa", -673, -552, -602, -602)) {
        const { v4: { Metadata: c } } = _0x1dcfba, E = { ..._0x1cb0a6 };
        E[a("15Sj", -633, -659, -594, -642) + t(-553, -584, -569, "E$qs")] = _0x5ac255[a("Qx2z", -677, -602, -636, -651) + x("9hGR", 1049, 1043)][t(-606, -517, -564, "awMv")], E[a(")$m%", -698, -618, -614, -645) + o(1245, 1278, "S23c", 1208) + x("WS[p", 1102, 1074) + "n"] = o(1243, 1239, "gt#T", 1284);
        const d = E, l = c[x(")$m%", 1028, 1032) + "y"](d);
        if (l) throw _0x3898f8[x("[ck!", 1033, 965) + x("[ck!", 1116, 1160)](l);
        return c[a("369N", -572, -544, -559, -613) + "e"](d);
      } else throw D[a("p9[%", -676, -645, -655, -658) + x("xfY[", 1012, 1064)](s);
    const B = {};
    function I(c, E, d, l, Q) {
      return Ie(c - 189, c, d - 204, l - 10, d - -411);
    }
    B[I("9!3E", -201, -196, -249)] = r;
    function x(c, E, d, l, Q) {
      return ve(c - 373, E - 379, d - 367, c, E - 1011);
    }
    return e[x("Sje8", 1053, 1122) + "e"](B);
  }
  [eA(-461, -462, -520, "LxnW", -483) + SA("EOE0", 1220, 1175) + eA(-451, -447, -574, "#P*^", -513) + SA("EcFP", 1103, 1142) + SA("*KxA", 1062, 1093) + ve(65, 35, 43, "bnpt", -1)](n) {
    const { VideoStream: t } = et;
    function e(s, B, I, x, c) {
      return SA(B, B - 371, x - -15);
    }
    function A(s, B, I, x, c) {
      return Ie(s - 259, I, I - 346, x - 460, s - -412);
    }
    function o(s, B, I, x, c) {
      return VA(s, B - 455, x - -1729);
    }
    const r = t[e(1127, "&7a1", 1053, 1102) + "y"](n);
    if (r)
      if (e(1215, "&7a1", 1162, 1183) === a(649, 684, 641, 658, "fMuq")) {
        const { Blob: s } = _0x267614.v4, B = s[o("EOE0", -572, -504, -545) + "y"](_0x27365e);
        if (B) throw _0x584b1[e(1170, "gt#T", 1115, 1137) + g("VY@%", 347)](B);
        const I = s[A(-200, -247, "lO)&", -170) + "e"](_0x203f29);
        return s[A(-266, -209, "rbWs", -248) + "e"](I)[A(-186, -197, "hM]x", -162) + "h"]();
      } else throw D[e(1124, "hhOa", 1165, 1155) + A(-216, -182, "(x5V", -262)](r);
    function g(s, B, I, x, c) {
      return SA(s, B - 97, B - -861);
    }
    function a(s, B, I, x, c) {
      return eA(s - 75, B - 47, I - 433, c, B - 1179);
    }
    return t[o("HSPw", -506, -560, -514) + "e"](n);
  }
  async [Ie(164, "WS[p", 206, 203, 227) + SA("K7#c", 1196, 1200) + SA("awMv", 1183, 1206) + eA(-401, -422, -525, "rbWs", -454) + SA("T894", 1125, 1178) + "e"](n) {
    const { v4: { Metadata: t } } = et, e = { ...n };
    function A(I, x, c, E, d) {
      return eA(I - 118, x - 75, c - 394, I, c - 859);
    }
    function o(I, x, c, E, d) {
      return eA(I - 226, x - 309, c - 351, c, E - 1630);
    }
    e[s(-485, -456, -514, "Sje8", -476) + s(-371, -370, -406, "VY@%", -394)] = et[r("1kYu", -271, -306) + r("lO)&", -284, -216)][s(-391, -338, -369, ")$m%", -407)], e[g(970, 958, 939, 945, "(x5V") + s(-365, -387, -374, "Nc#$", -413) + A(")$m%", 332, 336) + "n"] = s(-436, -549, -445, "VY@%", -487);
    function r(I, x, c, E, d) {
      return VA(I, x - 331, c - -1469);
    }
    function g(I, x, c, E, d) {
      return SA(d, x - 101, I - -159);
    }
    const a = e;
    function s(I, x, c, E, d) {
      return Ie(I - 279, E, c - 115, E - 231, d - -662);
    }
    const B = t[o(1058, 1028, "VY@%", 1094) + "y"](a);
    if (B)
      throw s(-379, -447, -389, "!gn4", -427) !== s(-592, -580, -539, "lO)&", -524) ? _0x23b56[A("15Sj", 326, 344) + r("[FT$", -117, -179)](_0x389f5e) : D[s(-516, -454, -399, "!gn4", -464) + g(1055, 1102, 1055, 1054, "[FT$")](B);
    return t[r("hMZ^", -210, -201) + "e"](a);
  }
  async [VA("*I[j", 1247, 1196) + SA("E$qs", 1122, 1095) + Ie(199, "bnpt", 203, 121, 159) + VA("U8kU", 1355, 1287)](n) {
    const { Content: t } = et, { iv: e, key: A, message: o } = await Sx(n);
    function r(c, E, d, l, Q) {
      return SA(l, E - 174, Q - -997);
    }
    const g = { token: new Uint8Array(A), iv: e, schemaVersion: yC, bytes: new Uint8Array(o) }, a = t[B(-714, -718, -653, -773, "hhOa") + "y"](g);
    if (a)
      throw I(-281, -256, -280, -235, "#P*^") === I(-320, -347, -290, -336, "K7#c") ? _0x377f28[r(133, 203, 149, "fMuq", 159) + B(-778, -707, -777, -642, ")$m%")](_0x47b974) : D[I(-216, -194, -250, -195, "T894") + r(158, 184, 216, "*KxA", 218)](a);
    const s = t[I(-278, -313, -336, -305, "gt#T") + "e"](g);
    function B(c, E, d, l, Q) {
      return eA(c - 54, E - 167, d - 96, Q, E - -180);
    }
    function I(c, E, d, l, Q) {
      return ve(c - 320, E - 386, d - 269, Q, d - -360);
    }
    function x(c, E, d, l, Q) {
      return VA(E, E - 6, d - -562);
    }
    return t[x(705, "LRxE", 724) + "e"](s)[B(-729, -746, -677, -757, "&7a1") + "h"]();
  }
  [VA("#P*^", 1218, 1234) + eA(-396, -469, -374, "lO)&", -444) + ve(98, 51, 89, "8^Er", 92) + "ge"](n) {
    function t(B, I, x, c, E) {
      return eA(B - 157, I - 433, x - 450, c, E - 1073);
    }
    const { Blob: e } = et.v4, A = e[t(676, 658, 619, "gt#T", 614) + "y"](n);
    if (A) {
      if (s(521, 543, 516, 500, "*KxA") === s(520, 556, 512, 530, "369N")) throw D[r(802, 813, "*KxA") + a("ceOE", 230, 185, 249)](A);
      {
        const { VideoStream: B } = _0x243405, I = B[g("*KxA", 763, 698) + "y"](_0x47fb31);
        if (I) throw _0xbc1702[t(564, 625, 587, "!gn4", 565) + t(632, 609, 659, "oz$R", 621)](I);
        return B[t(579, 542, 583, "hhOa", 592) + "e"](_0x7fc4be);
      }
    }
    const o = e[t(623, 562, 491, "%aPN", 552) + "e"](n);
    function r(B, I, x, c, E) {
      return VA(x, I - 224, I - -466);
    }
    function g(B, I, x, c, E) {
      return eA(B - 230, I - 479, x - 32, B, x - 1141);
    }
    function a(B, I, x, c, E) {
      return ve(B - 344, I - 391, x - 203, B, c - 145);
    }
    function s(B, I, x, c, E) {
      return VA(E, I - 91, I - -696);
    }
    return e[a("9hGR", 204, 229, 239) + "e"](o)[g("15Sj", 726, 680) + "h"]();
  }
  async [VA("*I[j", 1212, 1266) + ve(60, 156, 56, "bnpt", 127) + eA(-581, -629, -587, "K7#c", -562) + VA("HSPw", 1318, 1289) + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(s, B, I, x, c) {
      return eA(s - 77, B - 394, I - 367, B, c - 893);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A == null ? void 0 : A[a(361, "15Sj", 337, 422, 401)](({ brand: s, version: B }) => ({ name: s, version: B })) };
  }
  async [eA(-492, -409, -444, "K7#c", -465) + eA(-416, -512, -539, "VY@%", -484) + SA("oz$R", 1126, 1104) + ve(47, -27, 76, "HSPw", 35) + eA(-532, -444, -461, "LxnW", -502) + SA("[FT$", 1114, 1159) + Ie(127, "hMZ^", 100, 193, 141) + "on"](n) {
    function t(s, B, I, x, c) {
      return Ie(s - 232, I, I - 139, x - 458, s - -875);
    }
    const e = await this[r(-577, "rbWs", -545, -587, -541) + r(-479, "fMuq", -541, -430, -499) + g(-603, "Qx2z", -699, -663) + t(-688, -626, ")$m%", -653) + t(-629, -617, "hM]x", -651)](n[r(-605, "oz$R", -487, -609, -539) + A(-562, -606, -557, "fMuq") + "ge"]);
    function A(s, B, I, x, c) {
      return VA(x, B - 490, B - -1766);
    }
    const o = {};
    o[g(-604, "*KxA", -614, -594)] = e, o[a(457, 516, 494, 547, "9!3E") + r(-571, "15Sj", -495, -568, -536) + r(-443, "gt#T", -557, -497, -505)] = n[a(515, 531, 575, 592, "VY@%") + g(-733, "*KxA", -638, -676) + a(549, 516, 552, 569, "&7a1")];
    function r(s, B, I, x, c) {
      return VA(B, B - 0, c - -1748);
    }
    function g(s, B, I, x, c) {
      return Ie(s - 432, B, I - 30, x - 286, x - -864);
    }
    function a(s, B, I, x, c) {
      return Ie(s - 410, c, I - 305, x - 309, I - 342);
    }
    return o;
  }
}
(function(i, n) {
  function t(a, s, B, I, x) {
    return cA(a - 415, B);
  }
  function e(a, s, B, I, x) {
    return cA(I - 571, a);
  }
  const A = i();
  function o(a, s, B, I, x) {
    return cA(s - 104, B);
  }
  function r(a, s, B, I, x) {
    return cA(s - -221, a);
  }
  function g(a, s, B, I, x) {
    return cA(B - -531, s);
  }
  for (; ; )
    try {
      if (parseInt(r("kNfD", 156, 216, 181, 88)) / 1 * (-parseInt(t(807, 769, "7ERW", 857, 853)) / 2) + parseInt(r("9P%h", 124, 75, 118, 174)) / 3 * (-parseInt(o(430, 470, "kimE", 533, 424)) / 4) + -parseInt(e("z)Wa", 946, 854, 928, 900)) / 5 + parseInt(t(853, 823, "Q*Zq", 895, 793)) / 6 + parseInt(e("%Mp@", 962, 982, 955, 945)) / 7 * (-parseInt(o(458, 439, "kimE", 485, 520)) / 8) + -parseInt(o(479, 476, "JzG1", 427, 405)) / 9 + -parseInt(t(724, 720, "dLKz", 639, 740)) / 10 * (-parseInt(g(-254, "iOny", -216, -217, -175)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ci, 552553);
function oo(i, n, t, e, A) {
  return cA(A - -300, e);
}
function cA(i, n) {
  const t = ci();
  return cA = function(e, A) {
    e = e - (-1260 * 1 + -324 + -1 * -1873);
    let o = t[e];
    if (cA.EyRuCG === void 0) {
      var r = function(I) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, Q, h = 0; Q = I.charAt(h++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = x.indexOf(Q);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(I, x) {
        let c = [], E = 0, d, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          c[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          E = (E + c[Q] + x.charCodeAt(Q % x.length)) % 256, d = c[Q], c[Q] = c[E], c[E] = d;
        Q = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          Q = (Q + 1) % 256, E = (E + c[Q]) % 256, d = c[Q], c[Q] = c[E], c[E] = d, l += String.fromCharCode(I.charCodeAt(h) ^ c[(c[Q] + c[E]) % 256]);
        return l;
      };
      cA.WGfYhx = B, i = arguments, cA.EyRuCG = !0;
    }
    const g = t[-866 * 4 + -1952 + 5416], a = e + g, s = i[a];
    return s ? o = s : (cA.imlWZw === void 0 && (cA.imlWZw = !0), o = cA.WGfYhx(o, A), i[a] = o), o;
  }, cA(i, n);
}
function $e(i, n, t, e, A) {
  return cA(e - 332, t);
}
function rs(i, n, t, e, A) {
  return cA(i - -934, n);
}
function $o(i, n, t, e, A) {
  return cA(e - 472, A);
}
function ci() {
  const i = ["WOJcSmo8wSoaF8o1W43dNWJcSG", "WPNdMWKK", "W5ZdOSkMl8oe", "xZedfSoT", "W6FdRCkWcSkJ", "nmkxW74", "puBcGCoLBW", "bCkvWRlcUmoo", "CHKXlCou", "W7hdQSkoWOz5", "owZcGq", "W57dOmk3o8oc", "lL4ZWPpdVq", "WOZdLrSVW7W", "zIBcRCkXgW", "W63cPc8", "dqC+W43cGW", "WRFcHtddN3m", "dYiyese", "WPTKb285", "AtldL8kGrmkAqSohpCkl", "W4FcLdCdzq", "WPXrW6VcJWi", "c0nbWR3cJa", "W6ldNCkkWQldGG", "lmk/W7K9uG", "qmoDtq", "sravf8oK", "WQNcGdldQvS", "WRNcLMpdNHu", "W7roW4VcLajbc8k/", "bti4W4pcKW", "WQhcJConW6dcNYVdJWRcP0OIW5i6", "sSk6Fa", "W5ywWOqlhq", "w8k6EHtdNG", "W4BcGISdFG", "W4JcHsm", "wmoNWPG", "WQyAW7ZcMtW", "kmkOW4SgWR4", "W5OItta3", "vNJcJtf5W6tcHSkKp2LIqdK", "dCk6Ca3dIG", "WQOjBaW4", "W6BcNWewzW", "xmkQWOZcMSka", "eZNdJ2XO", "aCkhgG", "W4zqW7hcU1S", "ACkQDCkCma", "AJRdLCkJkSoEBCoQamkXW44T", "gSkXW4m", "tCoKWPu/oW", "WP7dSWmGW78", "W7hdMCktWPTP", "W5NcOSozW5KXrJFdIKfrlt4a", "p3ldR8oVtg/dH8oNW4TnbmkTkG", "WOe8WOHHhW", "WRW8WO5Mba", "W4mvWQbEWRO", "W5pdTSkHa8kd", "sH8dnrCCW4i", "WO9RyZzQ", "rmosW6BdVCkpsCkRemotW6NdVxON", "W7xdLSknWPRdIW", "W4y9b8oNia", "bseLW4lcKW", "sSoVWPVcImkD", "wmowsCknp8oeW6P3WPNcVG", "WRvJCdTn", "WOD5DZj+", "WPCuWP5MfW", "W5a7nwyVeGG/jaVdKmoj", "lupcT8kLdG", "W4RdVSkN", "aCkoWRJcPq", "nCo9oCopEhaIdIXT", "WOPsgNiG", "W5/dL8kWemks", "WQ8wWPFdMmk2", "WPv0W6NcNHq", "WPeRWP5ZaG", "WQdcNMldPaW", "WPTNW6VcMHm", "W4SDWQSZWRW", "W7hdN8kC", "BIibW7JcNG", "gmkgWRdcRSoo", "AmkOBSkpDa", "WQqfW5tcNtS", "WP0uWP5MfW", "F8ozWQGgda", "WQaPttKd", "W5KZxd8N", "hWObeqS", "WQZcGhtdVHC", "WRKLWObSW7C", "W4y1aCoLaq", "WQhcO2JdPbe", "BtxcU8k4cG", "ANTkimod", "W4nGW4GKlLPZW78/WQK", "fmkBW6GMCq", "W6JcLgiiva", "EceCW5NcNG", "sCoeWPmLpq", "gbKAady", "AHuwWRpdVG", "wSk+E13dLG", "W4RcGYCwyW", "fmkRW7yfWRa", "neTgWR3cVq", "W51ZW6myW5e", "WQydW5a", "ACkUDCkyCW", "smkSEXZdNW", "W5mIttqW", "fmkaWRi", "fCoPme/dKeOIW5VcUGC", "BcOwWQBdQW", "rmonzCkNDq", "smkDzbldMG", "W4nSW48LrXKHW5uLWOG0sCkX", "WRS0W5rRW7W", "WQNcRqRdOfC", "WQ4eWPddMmkC", "W7xcRxxdKCom", "WQxcGdxdOhm", "oe9bWRdcUW", "WRpcKY7dSW", "W4CFWROFWR0", "lmkKW7uQra", "hGGAaIi", "t8oMWOqRpq", "WQJcJSopW6hdQgRcTa/cNfy", "eZNdJ2Wm", "W4msyrH3", "yJ0hWQBdUW", "pvVcLSo5Aa", "WPjoW7zgW64CW7qAmCk1kW", "jw/cRG", "WQZcVMldPaS", "WOWZWRnjW4hcS8kUWR7dUWm", "fWeUWO7cRa", "WP4EFr0W", "WO0yFqKy", "qSksBqNdMq", "WO8avWms", "W5RdK8kSimoe", "W7ldMdVdQxmtW77dOq", "qmk+Ea", "kwPScCoZsdi", "CJ0fW5dcNG", "hmkkWRlcUmoj", "aq86", "zmkMzmkoza", "WOBcTSkkWObW", "ox/cHq", "WQ7cLLddVGW", "W50aCa", "aY3dIwGf", "W7xdTCkCWQtdNq", "WRiYWPTGW5y", "WOymWPldNmk/", "WQRcH2ldSZe", "a8ksgSoAdq", "WOeQWPP1eW", "WO1dAtj+", "WPNcKIBdJwy", "B2FcQCk4dq", "pxJcL8o3EW", "W5ZdPmkMkSo5", "W4ddQmkLfSkr", "WPHiW7ToWR0RW6KneCkE", "W5Cyd8o/mG", "W5jgW6q", "aCkmx8oEaq", "WOectai6", "gbKqeti"];
  return ci = function() {
    return i;
  }, ci();
}
function Me(i, n, t, e, A) {
  return cA(i - 106, e);
}
class Nx extends Gx {
  async [Me(534, 549, 475, "awVC") + Me(427, 441, 340, "kimE") + $e(715, 721, "%Mp@", 695)]({ onCaptureData: n, sessionToken: t, video: e }) {
    const A = n[g(-196, "Xcjw", -205, -143)](J[r("4)Hw", 619, 564) + "AL"]), o = n[a(-464, -481, "vdO1", -436, -524)](J[r("*3RF", 605, 563)]) ?? n[I(-552, -480, -514, -544, "4)8Y")](J[I(-489, -496, -507, -456, "NvLg") + r("Q]rf", 544, 479) + "AL"]);
    function r(E, d, l, Q, h) {
      return $e(E - 252, d - 407, E, l - -176);
    }
    if (!A) throw new D(g(-9, "Q*Zq", -97, -80) + r("%Mp@", 445, 468) + a(-533, -562, "AgOm", -504, -550) + a(-422, -432, "dLKz", -409, -497) + g(-211, "exu]", -82, -128) + I(-587, -575, -657, -636, "*Ry*") + g(-105, "JzG1", -127, -149) + I(-471, -517, -515, -474, "y95S") + g(-80, "*Vfq", -64, -126));
    function g(E, d, l, Q, h) {
      return Me(Q - -560, d - 310, l - 449, d);
    }
    if (!o) throw new D(g(-28, "AKBG", -189, -99) + I(-567, -578, -593, -656, "vdO1") + c("oun%", 222, 153) + a(-556, -588, "N[ED", -657, -580) + g(-13, "z)Wa", -163, -92) + g(-119, "7ERW", -112, -89) + a(-473, -486, "vdO1", -469, -448) + r("W]Ua", 540, 595) + a(-468, -458, "exu]", -417, -482));
    function a(E, d, l, Q, h) {
      return $e(E - 194, d - 200, l, h - -1204);
    }
    const s = {};
    s[I(-630, -600, -629, -671, "$(Le") + I(-450, -473, -558, -421, "4)Hw") + c("*3RF", 180, 110) + g(-182, "JnSe", -152, -144)] = A, s[c("IO@f", 160, 144) + a(-530, -439, "$(Le", -526, -512) + c("z)Wa", 219, 193) + I(-561, -595, -681, -547, "Mb!S")] = o, s[I(-466, -553, -564, -512, "*Ry*") + a(-484, -518, "4)Hw", -582, -559) + "en"] = t;
    const B = await this[a(-508, -482, "$(Le", -411, -447) + c("Db$*", 128, 165) + g(-214, "z)Wa", -198, -158) + c("a%7r", 107, 137) + "e"](s);
    function I(E, d, l, Q, h) {
      return Me(d - -1042, d - 240, l - 222, h);
    }
    const x = await this[c("%Mp@", 130, 43) + r("&Xg1", 498, 538) + I(-436, -516, -590, -601, "IO@f") + g(-142, "Q*Zq", -193, -152)]({ metadata: B, neutralExpressionFaceImage: await ri(A[g(-82, "Gz%x", -137, -115) + I(-560, -603, -532, -563, "kNfD") + "e"]), smileExpressionFaceImage: await ri(o[a(-630, -537, "Q]rf", -539, -554) + I(-515, -567, -571, -643, "*Vfq") + "e"]), video: e });
    function c(E, d, l, Q, h) {
      return $e(E - 401, d - 171, E, l - -590);
    }
    return this[a(-453, -534, "JzG1", -514, -457) + c("2edc", 95, 76) + g(-191, "kUuJ", -158, -114) + r("AgOm", 590, 589)](x);
  }
  async [rs(-485, "*3RF") + $o(862, 867, 1021, 936, "exu]") + oo(133, 97, 93, "Gz%x", 80) + $e(734, 706, "G[dU", 784)]({ metadata: n, neutralExpressionFaceImage: t, smileExpressionFaceImage: e, video: A }) {
    function o(h, m, b, S, G) {
      return $o(h - 356, m - 185, b - 409, m - -855, b);
    }
    const { SmileLivenessContent: r } = et.v4;
    function g(h, m, b, S, G) {
      return $o(h - 117, m - 145, b - 206, S - -727, b);
    }
    const a = await this[I(-3, 87, 172, 134, "Q*Zq") + I(-16, 14, 8, -16, "DSFq") + g(66, 88, "WcL2", 48) + I(-38, -13, 27, 57, "Gz%x") + o(-46, -58, "kimE")](t), s = await this[I(-41, 7, -42, -36, "exu]") + g(196, 177, "*3RF", 166) + Q(1292, 1332, 1350, 1364, "4)8Y") + I(98, 147, 205, 147, "oun%") + o(82, 18, "Gz%x")](e);
    function B(h, m, b, S, G) {
      return oo(h - 127, m - 292, b - 3, S, h - -7);
    }
    function I(h, m, b, S, G) {
      return oo(h - 109, m - 314, b - 481, G, m - -10);
    }
    const x = await this[g(47, 72, "kNfD", 59) + I(15, 36, -40, 103, "&Xg1") + B(99, 169, 75, "Q*Zq") + B(134, 94, 67, "a%7r") + I(161, 76, 130, 63, "WcL2") + "e"](n), c = { neutralExpressionFaceImage: a, smileExpressionFaceImage: s, metadata: x, video: { streamH264: A ? this[g(83, 75, "NvLg", 49) + I(162, 144, 67, 54, "kimE") + B(140, 159, 214, "kUuJ") + g(127, 108, "iOny", 139) + g(27, 143, "9P%h", 99) + o(-38, -67, "*Vfq")](A) : void 0 } }, E = r[I(-39, 40, 80, 24, "vdO1") + "y"](c);
    if (E) throw D[o(-96, -85, "W]Ua") + Q(1348, 1413, 1312, 1347, "6ik@")](E);
    const d = r[Q(1338, 1276, 1401, 1316, "Db$*") + "e"](c), l = {};
    function Q(h, m, b, S, G) {
      return $e(h - 189, m - 220, G, h - 571);
    }
    return l[B(95, 85, 158, "IO@f") + g(118, -21, "a%7r", 44) + o(149, 59, "h#*k") + B(102, 181, 164, "*AWF")] = d, this[g(155, 76, "iOny", 121) + I(165, 127, 157, 63, "vdO1") + B(25, -65, 50, "NvLg") + "ge"](l);
  }
  async [oo(43, 123, 210, "$(Le", 125) + Me(493, 485, 484, "Q*Zq") + Me(516, 509, 511, "kNfD") + oo(44, -20, 14, "kimE", 6) + "e"]({ neutralOnCaptureData: n, sessionToken: t, smileOnCaptureData: e }) {
    const A = [...n[d(333, 356, 311, "W]Ua", 281) + d(213, 158, 226, "kimE", 162)][m(45, 102, 47, "JzG1") + l(1126, "Q]rf", 1206, 1296, 1211) + E(566, 521, 507, 527, "exu]") + l(1182, "AgOm", 1265, 1262, 1272) + l(1273, "7KW%", 1195, 1257, 1207) + E(424, 532, 491, 558, "7ERW") + c(-661, -652, -593, "&Xg1")], ...e[d(196, 204, 155, "&Xg1", 200) + E(568, 579, 493, 517, "kimE")][m(112, 200, 145, "7KW%") + m(126, 11, 60, "Q]rf") + c(-651, -718, -599, "oun%") + d(257, 234, 290, "WcL2", 247) + E(573, 447, 519, 444, "iOny") + m(28, 79, 7, "AgOm") + m(-1, 66, 48, "Iow5")]], o = [...n[E(713, 672, 653, 737, "Db$*") + d(231, 226, 201, "AKBG", 236)][E(657, 663, 630, 657, "7ERW") + d(395, 384, 356, "%]vx", 328) + m(69, 89, 88, "DSFq")][E(472, 413, 495, 414, "G[dU")](({ detectedObject: S }) => S), ...e[c(-505, -593, -509, "dLKz") + c(-522, -439, -506, "9P%h")][l(1340, "7KW%", 1357, 1332, 1313) + d(286, 334, 357, "JnSe", 282) + d(248, 301, 326, "kNfD", 317)][m(159, 112, 184, "vdO1")](({ detectedObject: S }) => S)], r = jC(), g = await qC(), a = await this[l(1348, "4)Hw", 1317, 1299, 1329) + E(615, 638, 616, 643, "C!F)") + E(671, 649, 593, 531, "2edc") + m(124, 108, 77, "4)Hw") + "ls"](r, g), { cameraProperties: s, croppedImageWithPosition: B } = n[m(117, 132, 74, "*AWF") + l(1171, "$(Le", 1227, 1165, 1221)], I = await this[d(235, 313, 247, "gOZ&", 268) + E(512, 609, 527, 483, "[2!S") + l(1230, "oun%", 1194, 1297, 1213) + E(640, 543, 600, 628, "dLKz") + E(506, 580, 564, 619, "Xcjw") + l(1349, "kUuJ", 1349, 1242, 1287) + m(-10, 76, 69, "$(Le") + "on"](B), x = { ...s };
    x[d(211, 359, 359, "kNfD", 291) + c(-515, -530, -600, "Mb!S") + d(108, 210, 176, "oun%", 163) + d(337, 271, 223, "oun%", 283) + E(534, 677, 591, 667, "AgOm")] = I;
    function c(S, G, k, T, q) {
      return $e(S - 221, G - 228, T, S - -1283);
    }
    function E(S, G, k, T, q) {
      return $o(S - 141, G - 496, k - 144, k - -272, q);
    }
    x[E(535, 497, 508, 550, "iOny") + d(256, 305, 361, "IO@f", 337) + d(263, 175, 259, "JnSe", 250)] = a;
    function d(S, G, k, T, q) {
      return Me(q - -237, G - 335, k - 202, T);
    }
    function l(S, G, k, T, q) {
      return Me(q - 763, G - 373, k - 158, G);
    }
    x[E(474, 489, 543, 505, "6ik@") + E(608, 561, 537, 488, "gOZ&") + m(130, 155, 179, "4)Hw") + l(1177, "gOZ&", 1207, 1267, 1265) + c(-566, -492, -619, "WcL2") + E(519, 580, 598, 538, "oun%") + c(-598, -664, -655, "*Ry*")] = A, x[m(207, 112, 150, "*AWF") + m(0, 88, 67, "XILI") + E(567, 553, 604, 576, "7ERW")] = o;
    const Q = x, h = {};
    h[E(623, 526, 573, 582, "Q*Zq") + l(1366, "AKBG", 1345, 1319, 1295) + "en"] = t;
    function m(S, G, k, T, q) {
      return rs(k - 652, T);
    }
    h[d(227, 122, 222, "kUuJ", 189)] = Q;
    const b = h;
    return this[d(360, 216, 364, "9P%h", 274) + l(1333, "kimE", 1399, 1328, 1323) + m(248, 262, 180, "vdO1") + d(360, 391, 253, "6ik@", 312) + E(567, 548, 631, 552, "vdO1") + "e"](b);
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
function nc(i, n) {
  const t = PA(n);
  Z(() => {
    t.current = n;
  }, [n]), Z(() => {
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
  nc(i, e);
}
function vx(i) {
  return i !== null && typeof i == "object" && "neutralPhaseImageWithMetadata" in i && "smilePhaseImageWithMetadata" in i;
}
function Mx() {
  const { onComplete: i } = E0(), { handleError: n } = MA();
  function t(e, A) {
    try {
      if (!vx(e)) throw new D("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof D && n(o);
    }
  }
  Fx($n.ON_COMPLETE, t);
}
function Wx() {
  const { cameraService: i } = xt(), { assetsDirectoryPath: n, sessionToken: t } = E0(), { transactionCounting: e } = rI(), { analytics: A } = sC(), { phaseThresholds: o } = x0(), { handleAppStateChangeWithTransitionCheck: r, handleError: g } = MA(), [a, s] = CA();
  Mx(), Z(() => {
    let I;
    async function x() {
      if (!i) return;
      const c = L0.getWorkerPath(pE, n), E = {};
      E.type = "module";
      const d = new Worker(new URL(c, import.meta.url), E), l = C0(d);
      I = await new l();
      const Q = new cx(), h = new DE(i0), m = new Nx(), b = new bE(), S = new Rx(h), G = new wE(), k = new fE().setAssetsDirectoryPath(n).setCameraService(i).setDetector(I).setDetectionFactory(Q).setDispatcher(h).setProtobuf(m).setAnalytics(A).setTransactionCounting(e).setSessionToken(t).setPhaseThresholds(o).setMedianScore(b).setTimedCapture(S).setLongCapture(G).build();
      try {
        s(k), r(P.RUNNING);
      } catch (T) {
        if (T instanceof Error) {
          g(D.fromError(T));
          return;
        }
      }
    }
    return x(), () => {
      r(P.WAITING), I && I[a0]();
    };
  }, [A, n, i, r, g, t, e, o]);
  const B = {};
  return B.controller = a, B;
}
function Lx({ children: i }) {
  const { controller: n } = Wx();
  return /* @__PURE__ */ w(tE, { controller: n, children: i });
}
function Ox({ initAppState: i, onError: n }) {
  const [t, e] = CA(i), [A, o] = CA(), [r, g] = CA(!1), a = Ut.Lower, s = PA(n);
  Z(() => {
    s.current = n;
  }, [n]);
  const B = {};
  return B.redfin = a, B.appState = t, B.setAppState = e, B.error = A, B.setError = o, B.isCameraReady = r, B.setIsCameraReady = g, B.onErrorRef = s, B;
}
function as(i, n) {
  jt.getInstance().dispatchCustomEventOnChange(i, n);
}
function Jx(i, n) {
  jt.getInstance().dispatchCustomEventOnChange(i, n);
}
function Ux(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  jt.getInstance().dispatchCustomEventOnChange(i, e);
}
function Yx({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = Ox({
    initAppState: P.LOADING,
    onError: i
  }), s = Ee(
    (x) => {
      as(Ne.STATE_CHANGED, { appState: P.ERROR, error: x }), a(!1), o.current(x), g(x), r(P.ERROR);
    },
    [a, o, g, r]
  ), B = Ee(
    (x) => {
      r((c) => {
        const E = typeof x == "function" ? x(c) : x;
        return as(Ne.STATE_CHANGED, { appState: E }), E;
      });
    },
    [r]
  ), I = Ee(
    (x) => {
      B((c) => c === P.COMPLETE || c === P.LOADING && x !== P.RUNNING ? c : x);
    },
    [B]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: a,
    handleAppStateChange: B,
    handleAppStateChangeWithTransitionCheck: I,
    handleError: s,
    error: e
  };
}
function Tx() {
  return da() ? ng.MOBILE : ng.DESKTOP;
}
function Px({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = CA(Tx()), A = hA(() => {
    const o = {};
    for (const g of Object.keys(n)) {
      const a = n[g];
      if (a) {
        const { mapper: s, presets: B, userThresholds: I } = a;
        o[g] = s(B[t], I);
      }
    }
    return {
      getPhaseThresholds: (g) => o[g],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ w(ba.Provider, { value: A, children: i });
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
function gs(i, n) {
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
function _x({ children: i, userThresholds: n }) {
  const t = Hx(n), e = hA(() => ({
    [J.NEUTRAL]: {
      mapper: Kx,
      presets: lE,
      userThresholds: t
    },
    [J.SMILE]: {
      mapper: gs,
      presets: Ng,
      userThresholds: t
    },
    [J.SMILE_MANUAL]: {
      mapper: gs,
      presets: Ng,
      userThresholds: t
    }
  }), [t]);
  return /* @__PURE__ */ w(Px, { thresholdConfigs: e, children: i });
}
const Gt = {};
Gt.AUTO_CAPTURE = "auto_capture", Gt.CAPTURE_FINISHED = "capture_finished", Gt.CAPTURE_STARTED = "capture_started", Gt.ESCALATION_TRIGGER = "escalation_trigger", Gt.LONG_CAPTURE_SMILE = "long_capture_smile";
const uo = Gt, Ye = {};
Ye.PALM = "palm_auto_capture", Ye.SMILE = "smile_liveness", Ye.DOCUMENT = "document_auto_capture", Ye.MAGNIFEYE = "magnifeye_liveness", Ye.EYE_GAZE = "eye_gaze_liveness", Ye.FACE = "face_auto_capture", Ye.MULTI_RANGE = "multi_range_liveness";
const jx = Ye, qx = async () => WebAssembly.validate(new Uint8Array([4757 + 67 * -71, 5670 + -377 * -24 + -14621, 180 * -35 + -1814 * 2 + 10043 * 1, 109, -84 * 69 + -273 + -1214 * -5, -295 * 19 + 2083 * -2 + 9771, -8506 + -6403 * 1 + 17 * 877, 1 * 2119 + 3914 + -6033, 3 * -510 + 1 * -5363 + 6894, -7 * -1052 + 3334 + 629 * -17, 2613 + 8587 * 1 + -11199, 11 * 69 + 4327 + -4990, -141 * -47 + 6234 + -9 * 1429, -1 * -6607 + -993 * 8 + 2 * 669, -16444 + -16567 * -1, -8043 + -1 * -1845 + -477 * -13, -1199 * 7 + -8863 * 1 + 17258 * 1, 1, 0, -1897 + 3 * 1189 + 166 * -10, 3429 + 3419 * -1, 6291 + -3 * -2952 + -2 * 7573, -267 * -34 + -1 * -7764 + -16834, -1 * 1281 + 17 * -1 + -2 * -649, 1545 * -1 + 2 * -1285 + 4180, -11612 + 2903 * 4, 20 * -65 + 7864 + 6311 * -1, -598 * 2 + 9 * 242 + -967, 2639 + 1193 * -2, -4479 + -11 * -479 + -692, -5258 + 4 * -1471 + -11153 * -1]));
function Vx() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-12 * 826 + -312 + 10240);
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
  return i > 1 * 101706 + -1 * 101254 + 59548 ? ">1m" : "" + i;
}
function $x(i) {
  return i > 36 * -96 + 229 * 19 + -177 * 5 ? ">10" : "" + i;
}
const ta = (i) => i ? i <= 5 * -1853 + 245 + -3 * -3007 ? Math.round(i * (-8222 + 2311 * -3 + -3035 * -5)) / 20 : Math.round(i / (-3615 * 1 + -7763 + 11428)) * (2 * -4313 + 3190 + 5486) : 1 * 859 + 6972 + -1 * 7831;
function Ad(i) {
  return i ? Math.round(i / (892 * -10 + -420 + 11840)) * (10229 + -1 * 7729) : 0;
}
const ed = (i) => i ? Math.round(i / (5273 * -1 + 2856 + 1 * 2427)) * 10 : -4711 + 181 * 37 + 331 * -6, td = (i) => Math.round(i * (-5183 + -501 * -10 + 175)) / (102 * 14 + -1968 + 542);
async function ss() {
  return await qx() ? og.SIMD : og.NO_SIMD;
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
    this.platform = "web", this.versionName = nI(), this.applicationId = iI(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(uo.CAPTURE_STARTED));
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
    return { appVersion: nI(), ...n };
  }
  init(n, t) {
    const e = Zx(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, An.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    An.sendEvent(uo.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    An.sendEvent(uo.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 250 ? ed(n) : ta(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: $x(o || 29 * -85 + 1715 + 750), firstHiccup: Xx(Ad(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class id extends nd {
  constructor() {
    super(jx.SMILE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(J.NEUTRAL), e = n.get(J.SMILE) ?? n.get(J.SMILE_MANUAL);
    if (!t || !e) return;
    const A = td(t.metadata.averageFps + e.metadata.averageFps) / (-70 * -79 + 38 * -93 + -2 * 997), o = t.metadata.captureProcessTime, r = e.metadata.captureProcessTime, g = this.parsePerformanceCheckup(t.metadata.optCheck, t.metadata.performanceCheckup), a = this.createSegmentation({ faceSize: ta(e.detectedObject.faceSize), confidence: ta(t.detectedObject.confidence), imageResolution: t.resultImage.width + "x" + t.resultImage.height, averageFps: A, captureTimeNeutral: o, captureTimeSmile: r, camera: zx(t.metadata.deviceName, t.metadata.facingMode), instructionSet: await ss(), ...g });
    this.posthog.sendEvent(uo.CAPTURE_FINISHED, a);
  }
  async trackLongCapture(n) {
    const { averageExpressionScore: t, averageFps: e, customer: A, durationMs: o, imageResolution: r } = n, g = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await ss(), expressionScore: t, durationMs: o, ...A && { customer: A } });
    this.posthog.sendEvent(uo.LONG_CAPTURE_SMILE, g);
  }
}
const rd = new id();
function ka(i, n) {
  const t = PA(n);
  Z(() => {
    t.current = n;
  }, [n]), Z(() => {
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
    if (!(i && !g) && r.includes(LA.FACE_NOT_PRESENT)) {
      if (n !== P.RUNNING) return;
      setTimeout(() => {
        t(P.LOADING);
      }, 66 * -98 + -7402 + -2774 * -5), setTimeout(() => {
        t(P.RUNNING);
      }, -9888 + 18 * 20 + 9528);
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
  const n = PA(i), t = PA(Id()), [e, A] = CA(t.current);
  Z(() => {
    n.current = i;
  }), Z(() => {
    function r(B) {
      t.current = B, A(B);
    }
    function g() {
      Promise.resolve().then(() => {
        var B, I, x, c;
        !t.current && ((I = (B = n.current).onFocus) == null || I.call(B), (c = (x = n.current).onChange) == null || c.call(x, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var B, I, x, c;
        t.current && ((I = (B = n.current).onBlur) == null || I.call(B), (c = (x = n.current).onChange) == null || c.call(x, !1)), r(!1);
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
  const { controller: n } = n0(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = MA();
  Cd({ onBlur: () => {
    e(P.LOADING), A(!1);
  }, onFocus: () => {
    e(P.RUNNING), A(!0);
  } }), sd(i.CONTROL), Z(() => {
    t === P.COMPLETE && (n == null || n.reset()), t === P.LOADING && (n == null || n.reset()), t === P.WAITING && (n == null || n.reset()), t === P.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function Qd(i) {
  const [n, t] = CA(), e = Ee((o) => {
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
const dd = Uo.div`
  position: relative;
`, ld = Uo.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function ud(i) {
  const { cameraService: n } = xt(), { handleAppStateChange: t, handleError: e } = MA();
  async function A() {
    if (n) {
      t(P.LOADING);
      try {
        await n.switchCamera(), t(P.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(D.fromCameraError(r));
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
const hd = (i) => i === Fs.CONTROL ? !da() : !0;
function fd(i) {
  const { cameraService: n } = xt(), { isCameraReady: t } = MA(), [e, A] = CA(), o = hA(() => {
    const B = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return B ? e ?? B === "user" : e ?? hd(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function g() {
    A(void 0);
  }
  function a(B) {
    var I;
    switch ((I = B.detail) == null ? void 0 : I["instruction"]) {
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
  Z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, Jx(i, A);
  }, [t, e, i]);
}
function md(i) {
  const { cameraResolution: n } = xt(), { shouldCameraMirror: t } = fd(i.CONTROL);
  ud(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, pd(i.CAMERA_PROPS_CHANGED, e);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const yd = Uo.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Dd = Uo.div`
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
  ({ detectionDetails: i, isImageMirror: n }, t) => wd() ? (console.log(i), /* @__PURE__ */ w(ie, { children: [
    /* @__PURE__ */ w(yd, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(Dd, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function kd({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = xt(), { redfin: r } = Ei(), g = PA(null);
  if (Z(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, IC(g.current);
    const d = ii(o), l = dC(o);
    _i(g.current, d, "lime"), _i(g.current, l, "blue"), NE(g.current, i.processedImage.detection), Qo(g.current, i.processedImage.detection.leftEye.center, "cyan"), Qo(g.current, i.processedImage.detection.rightEye.center, "cyan"), Qo(g.current, i.processedImage.detection.mouth.center, "cyan"), RE(g.current, i.processedImage.detection, o);
    const Q = e.edgeDistanceToImageShorterSideRatio;
    if (NC(Q)) {
      const h = O0(
        o,
        Q.min,
        d
      );
      _i(g.current, h, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: s,
    processedImage: { detection: B, instructionCode: I, invalidValidators: x, isEscalated: c }
  } = i, E = {
    Confidence: B.confidence,
    Brightness: B.brightness,
    Sharpness: B.sharpness,
    "Face size": B.faceSize,
    "L eye conf / status": `${B.leftEye.confidence} / ${B.leftEye.status}`,
    "R eye conf / status": `${B.rightEye.confidence} / ${B.rightEye.status}`,
    "Mouth conf / status": `${B.mouth.confidence} / ${B.mouth.status}`,
    "Detection time": s,
    "Avg FPS": a,
    Instruction: I,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": x,
    "Component version": "8.0.0",
    "SAM version": n,
    "Escalated instruction": c,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ w(
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
  return n0();
}
function Gd() {
  const [i, n] = CA(void 0), t = Ee((A) => {
    n(A.detail);
  }, []);
  nc(Ne.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Nd = Ca(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = Gd(), { controller: A } = Sd(), { phaseThresholds: o, thresholdsPreset: r } = x0(), { appState: g } = MA(), a = A == null ? void 0 : A.getCurrentDetectionName();
  if (a === void 0 || g !== P.RUNNING)
    return null;
  const s = o[a];
  return /* @__PURE__ */ w("div", { ref: t, children: /* @__PURE__ */ w(
    kd,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: W0,
      shouldCameraMirror: n,
      thresholds: s,
      thresholdsPreset: r
    }
  ) });
});
function Rd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Fd(i, n) {
  const [t, e] = CA(!1), A = () => e((g) => !g), o = "" + t;
  Vt(() => {
    function g() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, I.observe(i.current, x), I;
    }
    function a() {
      var c;
      if (!((c = i.current) != null && c["parentElement"])) return;
      const I = new MutationObserver((E) => {
        E.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), E.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var h;
            Q !== (n == null ? void 0 : n.current) && ((h = Q.parentElement) == null || h.removeChild(Q));
          });
        });
      }), x = {};
      return x.childList = !0, I.observe(i.current.parentElement, x), I;
    }
    const s = g(), B = a();
    return () => {
      B == null || B.disconnect(), s == null || s.disconnect();
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
  return /* @__PURE__ */ w("div", { ref: A, style: vd, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function Wd({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = lC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    Md,
    {
      cutOut: i || /* @__PURE__ */ w(Rd, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Ld({ debugLayerRef: i }) {
  const { appState: n } = MA(), { cameraResolution: t } = xt(), { redfin: e } = MA(), A = t && e === Ut.Lower, o = n !== P.RUNNING;
  return A ? /* @__PURE__ */ w(
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
  return /* @__PURE__ */ w(ie, { children: [
    /* @__PURE__ */ w(Ld, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ w(Nd, { ref: t, shouldCameraMirror: n })
  ] });
}
function Jd() {
  const { videoRef: i } = xt(), { isCameraReady: n } = MA(), { shouldCameraMirror: t } = md(Ne);
  return /* @__PURE__ */ w(Od, { shouldCameraMirror: t, children: /* @__PURE__ */ w(
    ld,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: BC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Ud(i, n) {
  Z(() => {
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
  return Ud(n, Ne.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(dd, { ref: n, children: i });
}
function Td() {
  return xd(), /* @__PURE__ */ w(Yd, { children: /* @__PURE__ */ w(Jd, {}) });
}
function Pd({ configuration: i }) {
  if (i)
    return /* @__PURE__ */ w(OQ, { target: i.styleTarget, children: /* @__PURE__ */ w(eE, { configuration: i, children: /* @__PURE__ */ w(_x, { userThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ w(wB, { children: /* @__PURE__ */ w(
      NB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: RB.SMILE,
        children: /* @__PURE__ */ w(
          MC,
          {
            value: Yx({
              onError: i.onError
            }),
            children: /* @__PURE__ */ w(vC, { analytics: rd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ w(BB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ w(Lx, { children: /* @__PURE__ */ w(Js, { children: /* @__PURE__ */ w(Td, {}) }) }) }) })
          }
        )
      }
    ) }) }) }) });
}
pc(Pd, "x-dot-smile-liveness", ["configuration"]);
