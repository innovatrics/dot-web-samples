var ao, R, Fg, vg, Ze, na, Mg, Wg, Lg, Dr, yi, mi, Og, no = {}, Jg = [], J0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, go = Array.isArray;
function Be(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function br(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function NA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -6657 + 1647 * -5 + 14894 && (r.children = arguments.length > -9860 + -6 * -943 + 4205 ? ao.call(arguments, 7341 + -6907 * 1 + -432) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Vt(i, r, e, A, null);
}
function Vt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++Fg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function U0() {
  var i = {};
  return i.current = null, i;
}
function MA(i) {
  return i.children;
}
function $A(i, n) {
  this.props = i, this.context = n;
}
function mt(i, n) {
  if (n == null) return i.__ ? mt(i.__, i.__i + 1) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? mt(i) : null;
}
function Ug(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -7441 * -1 + 6095 + -13536; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Ug(i);
  }
}
function wi(i) {
  (!i.__d && (i.__d = !0) && Ze.push(i) && !Ko.__r++ || na != R.debounceRendering) && ((na = R.debounceRendering) || Mg)(Ko);
}
function Ko() {
  for (var i, n, t, e, A, o, r, a = -1182 * 1 + 5963 + 2390 * -2; Ze.length; ) Ze.length > a && Ze.sort(Wg), i = Ze.shift(), a = Ze.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Be({}, e)).__v = e.__v + 1, R.vnode && R.vnode(t), kr(n.__P, t, e, n.__n, n.__P.namespaceURI, -2 * 1299 + 3613 + -983 & e.__u ? [A] : null, o, A ?? mt(e), !!(-12245 + -1 * -12277 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Pg(o, t, r), e.__e = e.__ = null, t.__e != A && Ug(t)));
  Ko.__r = 606 * 9 + -2 * -2654 + -10762;
}
function Yg(i, n, t, e, A, o, r, a, g, I, C) {
  var s, B, E, x, Q, l, f, h = e && e.__k || Jg, p = n.length;
  for (g = Y0(t, n, h, g, p), s = -4537 * 2 + 7 * -1308 + 18230; s < p; s++) (E = t.__k[s]) != null && (B = E.__i == -1 ? no : h[E.__i] || no, E.__i = s, l = kr(i, E, B, A, o, r, a, g, I, C), x = E.__e, E.ref && B.ref != E.ref && (B.ref && Sr(B.ref, null, E), C.push(E.ref, E.__c || x, E)), Q == null && x != null && (Q = x), (f = !!(-6763 * -1 + 3 * -2623 + 1110 & E.__u)) || B.__k === E.__k ? g = Tg(E, g, i, f) : typeof E.type == "function" && l !== void 0 ? g = l : x && (g = x.nextSibling), E.__u &= -7);
  return t.__e = Q, g;
}
function Y0(i, n, t, e, A) {
  var o, r, a, g, I, C = t.length, s = C, B = -563 * 13 + -9561 + 16880;
  for (i.__k = new Array(A), o = 4564 + -652 * 7; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Vt(null, r, null, null, null) : go(r) ? r = i.__k[o] = Vt(MA, { children: r }, null, null, null) : r.constructor == null && r.__b > 0 ? r = i.__k[o] = Vt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, g = o + B, r.__ = i, r.__b = i.__b + (4582 * -2 + 507 + 8658), a = null, (I = r.__i = T0(r, t, g, s)) != -1 && (s--, (a = t[I]) && (a.__u |= 1 * -1559 + -6245 * -1 + -4684)), a == null || a.__v == null ? (I == -1 && (A > C ? B-- : A < C && B++), typeof r.type != "function" && (r.__u |= 2 * 877 + 2450 + -4200)) : I != g && (I == g - (2 * -2593 + -329 + 5516) ? B-- : I == g + (7161 + 13 * -677 + 1641) ? B++ : (I > g ? B-- : B++, r.__u |= 8743 + -3086 * 3 + 519))) : i.__k[o] = null;
  if (s)
    for (o = 0; o < C; o++) (a = t[o]) != null && 619 * 3 + 17 * -503 + 1 * 6694 == (-5765 * 1 + 7 + 5760 & a.__u) && (a.__e == e && (e = mt(a)), _g(a, a));
  return e;
}
function Tg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = 12888 + 4 * -3222; A && o < A.length; o++) A[o] && (A[o].__ = i, n = Tg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = mt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 2243 + -775 * 9 + 4740 == n.nodeType);
  return n;
}
function De(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (go(i) ? i.some(function(t) {
    De(t, n);
  }) : n.push(i)), n;
}
function T0(i, n, t, e) {
  var A, o, r, a = i.key, g = i.type, I = n[t], C = I != null && (-1 * 4013 + 1 * -9498 + -13513 * -1 & I.__u) == 0;
  if (I === null && a == null || C && a == I.key && g == I.type) return t;
  if (e > (C ? 7 * -1179 + 8925 + -671 : 6542 + 3271 * -2)) {
    for (A = t - 1, o = t + 1; A >= 1 * -6487 + -2 * -1412 + 3663 || o < n.length; ) if ((I = n[r = A >= -3041 * -1 + 1005 + -4046 ? A-- : o++]) != null && -1 * -3130 + 7589 * 1 + -10719 == (-14633 + -14635 * -1 & I.__u) && a == I.key && g == I.type) return r;
  }
  return -1;
}
function ia(i, n, t) {
  n[-4304 + -2 * 4857 + 14018] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || J0.test(n) ? t : t + "px";
}
function Qo(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || ia(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || ia(i.style, n, t[n]);
    }
  else if (n[-8804 + -2951 * -1 + 5853] == "o" && n[-2569 + 6 * 590 + -970] == "n") o = n != (n = n.replace(Lg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(2) : n.slice(264 * 4 + 6882 + -7936), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Dr, i.addEventListener(n, o ? mi : yi, o)) : i.removeEventListener(n, o ? mi : yi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-7406 + -9917 * -1 + -2507] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 4 * -2377 + 4506 + -1 * -5003 == t ? "" : t));
  }
}
function ra(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Dr++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function kr(i, n, t, e, A, o, r, a, g, I) {
  var C, s, B, E, x, Q, l, f, h, p, y, b, k, D, U, O, X, $ = n.type;
  if (n.constructor != null) return null;
  4372 + -9843 * 1 + 5599 & t.__u && (g = !!(32 & t.__u), o = [a = n.__e = t.__e]), (C = R.__b) && C(n);
  A: if (typeof $ == "function") try {
    if (f = n.props, h = "prototype" in $ && $.prototype.render, p = (C = $.contextType) && e[C.__c], y = C ? p ? p.props.value : C.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (h ? n.__c = s = new $(f, y) : (n.__c = s = new $A(f, y), s.constructor = $, s.render = H0), p && p.sub(s), s.state || (s.state = {}), s.__n = e, B = s.__d = !(5654 + 1 * -3707 + -1947), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && $.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Be({}, s.__s)), Be(s.__s, $.getDerivedStateFromProps(f, s.__s))), E = s.props, x = s.state, s.__v = n, B) h && $.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && $.getDerivedStateFromProps == null && f !== E && s.componentWillReceiveProps != null && s.componentWillReceiveProps(f, y), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(-1009 + -1 * -3878 + -1 * 2868) === s.shouldComponentUpdate(f, s.__s, y)) {
        for (n.__v != t.__v && (s.props = f, s.state = s.__s, s.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(yA) {
          yA && (yA.__ = n);
        }), b = 9247 + 6 * 1622 + -18979; b < s._sb.length; b++) s.__h.push(s._sb[b]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(f, s.__s, y), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(E, x, Q);
      });
    }
    if (s.context = y, s.props = f, s.__P = i, s.__e = !(1120 + 9391 * -1 + 8272), k = R.__r, D = 5040 + 4850 * 1 + -9890, h) {
      for (s.state = s.__s, s.__d = !1, k && k(n), C = s.render(s.props, s.state, s.context), U = 7 * 709 + -7518 + 365 * 7; U < s._sb.length; U++) s.__h.push(s._sb[U]);
      s._sb = [];
    } else do
      s.__d = !1, k && k(n), C = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++D < 778 * 6 + -9926 * -1 + -14569 * 1);
    s.state = s.__s, s.getChildContext != null && (e = Be(Be({}, e), s.getChildContext())), h && !B && s.getSnapshotBeforeUpdate != null && (Q = s.getSnapshotBeforeUpdate(E, x)), O = C, C != null && C.type === MA && C.key == null && (O = Hg(C.props.children)), a = Yg(i, go(O) ? O : [O], n, t, e, A, o, r, a, g, I), s.base = n.__e, n.__u &= -(4564 + 559 * -9 + 628), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (yA) {
    if (n.__v = null, g || o != null)
      if (yA.then) {
        for (n.__u |= g ? 4542 * -1 + 3 * -796 + 3545 * 2 : 1373 * 3 + 1 * -7391 + 3400; a && -1 * 9379 + -1 * -9692 + -305 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else {
        for (X = o.length; X--; ) br(o[X]);
        Di(n);
      }
    else n.__e = t.__e, n.__k = t.__k, yA.then || Di(n);
    R.__e(yA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = P0(t.__e, n, t, e, A, o, r, g, I);
  return (C = R.diffed) && C(n), 128 & n.__u ? void 0 : a;
}
function Di(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(Di);
}
function Pg(i, n, t) {
  for (var e = -4e3 + 1 * -7802 + 11802; e < t.length; e++) Sr(t[e], t[++e], t[++e]);
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
function Hg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -759 + -2207 * 1 + -1483 * -2 ? i : go(i) ? i.map(Hg) : Be({}, i);
}
function P0(i, n, t, e, A, o, r, a, g) {
  var I, C, s, B, E, x, Q, l = t.props || no, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = 2486 * -1 + -8636 + 11122; I < o.length; I++) if ((E = o[I]) && "setAttribute" in E == !!h && (h ? E.localName == h : 1 * -7687 + -449 * 8 + 11282 == E.nodeType)) {
      i = E, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), a && (R.__m && R.__m(n, o), a = !1), o = null;
  }
  if (h == null) l === f || a && i.data == f || (i.data = f);
  else {
    if (o = o && ao.call(i.childNodes), !a && o != null)
      for (l = {}, I = 6864 + 4616 * 2 + -16096; I < i.attributes.length; I++) l[(E = i.attributes[I]).name] = E.value;
    for (I in l) if (E = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = E;
      else if (!(I in f)) {
        if (I == "value" && "defaultValue" in f || I == "checked" && "defaultChecked" in f) continue;
        Qo(i, I, null, E, A);
      }
    }
    for (I in f) E = f[I], I == "children" ? B = E : I == "dangerouslySetInnerHTML" ? C = E : I == "value" ? x = E : I == "checked" ? Q = E : a && typeof E != "function" || l[I] === E || Qo(i, I, E, l[I], A);
    if (C) a || s && (C.__html == s.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), Yg(n.type == "template" ? i.content : i, go(B) ? B : [B], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-5568 + 1 * -393 + 5961] : t.__k && mt(t, 2266 + -22 * -268 + 2 * -4081), a, g), o != null)
      for (I = o.length; I--; ) br(o[I]);
    a || (I = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || h == "progress" && !x || h == "option" && x != l[I]) && Qo(i, I, x, l[I], A), I = "checked", Q != null && Q != i[I] && Qo(i, I, Q, l[I], A));
  }
  return i;
}
function Sr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function _g(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Sr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -5482 + -2741 * -2; A < e.length; A++) e[A] && _g(e[A], n, t || typeof i.type != "function");
  t || br(i.__e), i.__c = i.__ = i.__e = void 0;
}
function H0(i, n, t) {
  return this.constructor(i, t);
}
function Me(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], kr(n, i = (!e && t || n).__k = NA(MA, null, [i]), A || no, no, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? ao.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Pg(o, i, r);
}
function Gr(i, n) {
  Me(i, n, Gr);
}
function Nr(i, n, t) {
  var e, A, o, r, a = Be({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 1011 * -7 + -1461 + 8540 && (a.children = arguments.length > 7173 + 7170 * -1 ? ao.call(arguments, 9 * 927 + 7405 + -15746) : t), Vt(i.type, a, e || i.key, A || i.ref, null);
}
function Oe(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, wi(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Og++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
ao = Jg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, Fg = 0, vg = function(i) {
  return i != null && i.constructor == null;
}, $A.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Be({}, this.state), typeof i == "function" && (i = i(Be({}, t), this.props)), i && Be(t, i), i != null && this.__v && (n && this._sb.push(n), wi(this));
}, $A.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), wi(this));
}, $A.prototype.render = MA, Ze = [], Mg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Ko.__r = 0, Lg = /(PointerCapture)$|Capture$/i, Dr = 0, yi = ra(!1), mi = ra(!0), Og = -3344 * 2 + 3956 + 2732;
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -4261 + 2131 * 2; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, jo.apply(this, arguments);
}
function Kg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = 1070 + -22 * -373 + -773 * 12; e < o.length; e++) n.indexOf(t = o[e]) >= 5521 * 1 + -5 * 1489 + 1924 || (A[t] = i[t]);
  return A;
}
var _0 = ["context", "children"], K0 = ["useFragment"];
function j0(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    V0.call(this, e);
  }, A.prototype.attributeChangedCallback = Z0, A.prototype.disconnectedCallback = z0, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function q0(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = Kg(i, _0);
  return Nr(n, t);
}
function V0(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = NA(q0, jo({}, this._props, { context: t.detail.context }), qg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Gr : Me)(this._vdom, this._root);
}
function jg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Z0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[jg(i)] = t, this._vdom = Nr(this._vdom, e), Me(this._vdom, this._root);
  }
}
function z0() {
  Me(this._vdom = null, this._root);
}
function aa(i, n) {
  var t = this, e = i.useFragment, A = Kg(i, K0);
  return NA(e ? MA : "slot", jo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function qg(i, n, t) {
  if (i.nodeType === 3) return i.data;
  if (i.nodeType !== 1) return null;
  var e = [], A = {}, o = -9610 + -10 * -961, r = i.attributes, a = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[jg(r[o].name)] = r[o].value);
  for (o = a.length; o--; ) {
    var g = qg(a[o], null, t), I = a[o].slot;
    I ? A[I] = NA(aa, { name: I }, g) : e[o] = g;
  }
  var C = !(!t || !t.shadow), s = n ? NA(aa, { useFragment: !C }, e) : e;
  return !C && n && (i.innerHTML = ""), NA(n || i.nodeName.toLowerCase(), A, s);
}
var X0 = -4677 * 1 + 9510 + -4833;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var I = {};
  I.type = i, I.props = g, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --X0, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var C = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return R.vnode && R.vnode(C), C;
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
function wt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function $0(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var Ac = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ec = $0(function(i) {
  return Ac.test(i) || i.charCodeAt(0) === 6870 + -751 * 9 && i.charCodeAt(18684 + -17 * 1099) === 17 * -317 + -1 * -2658 + 947 * 3 && i.charCodeAt(2) < 91;
}), We, T, jn, ga, Dt = 0, Vg = [], H = R, sa = H.__b, Ia = H.__r, ca = H.diffed, Ca = H.__c, Ba = H.unmount, Qa = H.__;
function Ft(i, n) {
  H.__h && H.__h(T, i, Dt || n), Dt = 6241 * -1 + 1101 + 5140;
  var t = {};
  t.__ = [], t.__h = [];
  var e = T.__H || (T.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function z(i) {
  return Dt = 4786 + -2251 * 1 + -2534, Rr(Xg, i);
}
function Rr(i, n, t) {
  var e = Ft(We++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Xg(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], I = e.t(g, a);
    g !== I && (e.__N = [I, e.__[-2231 + 427 * 14 + -3746]], e.__c.setState({}));
  }], e.__c = T, !T.__f)) {
    var A = function(a, g, I) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(B) {
        return !!B.__c;
      });
      if (C.every(function(B) {
        return !B.__N;
      })) return !o || o.call(this, a, g, I);
      var s = e.__c.props !== a;
      return C.forEach(function(B) {
        if (B.__N) {
          var E = B.__[0];
          B.__ = B.__N, B.__N = void 0, E !== B.__[0] && (s = !0);
        }
      }), o && o.call(this, a, g, I) || s;
    };
    T.__f = !0;
    var o = T.shouldComponentUpdate, r = T.componentWillUpdate;
    T.componentWillUpdate = function(a, g, I) {
      if (this.__e) {
        var C = o;
        o = void 0, A(a, g, I), o = C;
      }
      r && r.call(this, a, g, I);
    }, T.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function J(i, n) {
  var t = Ft(We++, 3);
  !H.__s && Fr(t.__H, n) && (t.__ = i, t.u = n, T.__H.__h.push(t));
}
function vt(i, n) {
  var t = Ft(We++, 4);
  !H.__s && Fr(t.__H, n) && (t.__ = i, t.u = n, T.__h.push(t));
}
function bA(i) {
  return Dt = 8561 * -1 + -2 * 3274 + 33 * 458, pA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Zg(i, n, t) {
  Dt = -433 * -22 + 1 * -1542 + -7978, vt(function() {
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
  var t = Ft(We++, 7);
  return Fr(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Ee(i, n) {
  return Dt = -1 * -9277 + -9095 + -174, pA(function() {
    return i;
  }, n);
}
function xe(i) {
  var n = T.context[i.__c], t = Ft(We++, -16870 + 1 * 16879);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(T)), n.props.value) : i.__;
}
function qo(i, n) {
  H.useDebugValue && H.useDebugValue(n ? n(i) : i);
}
function zg() {
  var i = Ft(We++, 11);
  if (!i.__) {
    for (var n = T.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [0, -1 * -2339 + -9030 + -1 * -6691]);
    i.__ = "P" + t[-1013 * -9 + 4 * 1790 + -16277] + "-" + t[23 * -409 + 3097 + 6311]++;
  }
  return i.__;
}
function tc() {
  for (var i; i = Vg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(ko), i.__H.__h.forEach(bi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], H.__e(n, i.__v);
  }
}
H.__b = function(i) {
  T = null, sa && sa(i);
}, H.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Qa && Qa(i, n);
}, H.__r = function(i) {
  Ia && Ia(i), We = -1558 * 1 + 5437 + -1 * 3879;
  var n = (T = i.__c).__H;
  n && (jn === T ? (n.__h = [], T.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(ko), n.__h.forEach(bi), n.__h = [], We = 358 * -9 + 1 * 7531 + -4309)), jn = T;
}, H.diffed = function(i) {
  ca && ca(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (Vg.push(n) !== 1 && ga === H.requestAnimationFrame || ((ga = H.requestAnimationFrame) || oc)(tc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), jn = T = null;
}, H.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(ko), t.__h = t.__h.filter(function(e) {
        return !e.__ || bi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], H.__e(e, t.__v);
    }
  }), Ca && Ca(i, n);
}, H.unmount = function(i) {
  Ba && Ba(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ko(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && H.__e(n, t.__v));
};
var Ea = typeof requestAnimationFrame == "function";
function oc(i) {
  var n, t = function() {
    clearTimeout(e), Ea && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  Ea && (n = requestAnimationFrame(t));
}
function ko(i) {
  var n = T, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), T = n;
}
function bi(i) {
  var n = T;
  i.__c = i.__(), T = n;
}
function Fr(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Xg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function $g(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function ki(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function As(i, n) {
  var t = n(), e = z({ t: { __: t, u: n } }), A = e[6882 + -694 * -9 + -13128].t, o = e[1];
  return vt(function() {
    A.__ = t, A.u = n, qn(A) && o({ t: A });
  }, [i, t, n]), J(function() {
    return qn(A) && o({ t: A }), i(function() {
      qn(A) && o({ t: A });
    });
  }, [i]), t;
}
function qn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (1082 * 7 + 213 + 13 * -599 !== n || (5 * 1415 + 6334 * -1 + -740) / n == 1 / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function es(i) {
  i();
}
function ts(i) {
  return i;
}
function os() {
  return [!1, es];
}
var ns = vt;
function Si(i, n) {
  this.props = i, this.context = n;
}
function nc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : ki(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, NA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(Si.prototype = new $A()).isPureReactComponent = !0, Si.prototype.shouldComponentUpdate = function(i, n) {
  return ki(this.props, i) || ki(this.state, n);
};
var xa = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), xa && xa(i);
};
var ic = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3262 * -1 + 6470 + 703;
function is(i) {
  function n(t) {
    var e = $g({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = ic, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var da = function(i, n) {
  return i == null ? null : De(De(i).map(n));
}, rc = { map: da, forEach: da, count: function(i) {
  return i ? De(i).length : 0;
}, only: function(i) {
  var n = De(i);
  if (n.length !== 1) throw "Children.only";
  return n[-4789 * -2 + -5 * 1141 + -3873];
}, toArray: De }, ac = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  ac(i, n, t, e);
};
var la = R.unmount;
function rs(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = $g({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return rs(e, n, t);
  })), i;
}
function as(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return as(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function So() {
  this.__u = 0, this.o = null, this.__b = null;
}
function gs(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function gc(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(a) {
      a && (A = a.default || a), e = !0;
    }, function(a) {
      t = a, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? NA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ht() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -5502 + -1 * -6694 + -1160 & i.__u && (i.type = null), la && la(i);
}, (So.prototype = new $A()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = gs(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[8779 * -1 + 3212 + 5567] = as(g, g.__c.__P, g.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 32 & n.__u || e.setState({ __a: e.__b = e.__v.__k[2 * 4371 + -4201 * -2 + -17144] }), i.then(r, r);
}, So.prototype.componentWillUnmount = function() {
  this.o = [];
}, So.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[7925 + -10 * 914 + 1215].__c;
      this.__v.__k[0] = rs(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && NA(MA, null, i.fallback);
  return A && (A.__u &= -33), [NA(MA, null, n.__a ? null : i.children), A];
};
var ua = function(i, n, t) {
  if (++t[11389 + 13 * -876] === t[-544 + -4652 * 1 + -2 * -2598] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[-5 * 1504 + 2752 + 4768] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -1 * 8849 + 2106 + 6746; ) t.pop()();
    if (t[11 * -363 + -5381 + 9375] < t[0]) break;
    i.i = t = t[604 * 9 + -1 * -3209 + -8643];
  }
};
function sc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Ic(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Me(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), n.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -400 + -401 * -1, 4 * 1748 + 18 * -273 + -2077), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Me(NA(sc, o, i.__v), n.v);
}
function cc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = NA(Ic, t);
  return e.containerInfo = n, e;
}
(Ht.prototype = new $A()).__a = function(i) {
  var n = this, t = gs(n.__v), e = n.l.get(i);
  return e[3123 * -1 + 6169 + -3046 * 1]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), ua(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Ht.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = De(i.children);
  i.revealOrder && i.revealOrder[-705 + -5518 * -1 + 1 * -4813] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-494 + -1 * -5359 + -4864, 1623 + 541 * -3, this.i]);
  return i.children;
}, Ht.prototype.componentDidUpdate = Ht.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    ua(i, t, n);
  });
};
var ss = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || -1 * -120193 + 107275 * -1 + 47185, Cc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Bc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qc = /[A-Z0-9]/g, Ec = typeof document < "u", xc = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function dc(i, n, t) {
  return n.__k == null && (n.textContent = ""), Me(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function lc(i, n, t) {
  return Gr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
$A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty($A.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var fa = R.event;
function uc() {
}
function fc() {
  return this.cancelBubble;
}
function hc() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return fa && (i = fa(i)), i.persist = uc, i.isPropagationStopped = fc, i.isDefaultPrevented = hc, i.nativeEvent = i;
};
var Go = {};
Go.enumerable = !1, Go.configurable = !0, Go.get = function() {
  return this.class;
};
var vr, pc = Go, ha = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || Ec && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[5 * -1399 + -5809 + -2134 * -6] === "o" && g[-2 * -2021 + 3476 + -7517] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || xc(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : Bc.test(r) && (r = g) : g = r = "oninput" : o && Cc.test(r) ? r = r.replace(Qc, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = De(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = De(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", pc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = ss, ha && ha(i);
};
var pa = R.__r;
R.__r = function(i) {
  pa && pa(i), vr = i.__c;
};
var ya = R.diffed;
R.diffed = function(i) {
  ya && ya(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), vr = null;
};
var dA = {};
dA.readContext = function(i) {
  return vr.__n[i.__c].props.value;
}, dA.useCallback = Ee, dA.useContext = xe, dA.useDebugValue = qo, dA.useDeferredValue = ts, dA.useEffect = J, dA.useId = zg, dA.useImperativeHandle = Zg, dA.useInsertionEffect = ns, dA.useLayoutEffect = vt, dA.useMemo = pA, dA.useReducer = Rr, dA.useRef = bA, dA.useState = z, dA.useSyncExternalStore = As, dA.useTransition = os;
var Is = {};
Is.current = dA;
var cs = {};
cs.ReactCurrentDispatcher = Is;
var yc = cs;
function mc(i) {
  return NA.bind(null, i);
}
function Nn(i) {
  return !!i && i.$$typeof === ss;
}
function wc(i) {
  return Nn(i) && i.type === MA;
}
function Dc(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function bc(i) {
  return Nn(i) ? Nr.apply(null, arguments) : i;
}
function kc(i) {
  return !!i.__k && (Me(null, i), !0);
}
function Sc(i) {
  return i && (i.base || -1 * 677 + -9744 + 10422 === i.nodeType && i) || null;
}
var Gc = function(i, n) {
  return i(n);
}, Nc = function(i, n) {
  return i(n);
}, Rc = MA, Fc = Nn, ot = { useState: z, useId: zg, useReducer: Rr, useEffect: J, useLayoutEffect: vt, useInsertionEffect: ns, useTransition: os, useDeferredValue: ts, useSyncExternalStore: As, startTransition: es, useRef: bA, useImperativeHandle: Zg, useMemo: pA, useCallback: Ee, useContext: xe, useDebugValue: qo, version: "18.3.1", Children: rc, render: dc, hydrate: lc, unmountComponentAtNode: kc, createPortal: cc, createElement: NA, createContext: Oe, createFactory: mc, cloneElement: bc, createRef: U0, Fragment: MA, isValidElement: Nn, isElement: Fc, isFragment: wc, isMemo: Dc, findDOMNode: Sc, Component: $A, PureComponent: Si, memo: nc, forwardRef: is, flushSync: Nc, unstable_batchedUpdates: Gc, StrictMode: Rc, Suspense: So, SuspenseList: Ht, lazy: gc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yc };
function vc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Vn, ma;
function Mc() {
  return ma || (ma = -325 * 10 + 349 * 19 + -1690 * 2, Vn = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), I = 0; I < r.length; I++) {
      var C = r[I];
      if (!g(C)) return !1;
      var s = n[C], B = t[C];
      if (o = e ? e.call(A, s, B, C) : void 0, o === !1 || o === void 0 && s !== B) return !1;
    }
    return !0;
  }), Vn;
}
var Wc = Mc();
const Lc = /* @__PURE__ */ vc(Wc);
var Y = "-ms-", Zt = "-moz-", W = "-webkit-", Cs = "comm", Rn = "rule", Mr = "decl", Oc = "@import", Bs = "@keyframes", Jc = "@layer", Qs = Math.abs, Wr = String.fromCharCode, Gi = Object.assign;
function Uc(i, n) {
  return BA(i, 8898 * -1 + 1 * 2927 + 5971 * 1) ^ 9 * 398 + -7719 + 4182 ? (((n << 8990 + -4 * -1872 + -2746 * 6 ^ BA(i, -9275 + -1325 * -7)) << -3940 + -1 * -5225 + -1283 ^ BA(i, 5286 + 755 * -7)) << -1806 * -1 + -1 * 1373 + -431 * 1 ^ BA(i, 6471 * -1 + 4460 + -2013 * -1)) << 2 ^ BA(i, -1748 + -401 * -1 + 1350) : 1544 + -1 * -3211 + -4755;
}
function Es(i) {
  return i.trim();
}
function me(i, n) {
  return (i = n.exec(i)) ? i[-1 * -2690 + 1 * 3088 + 963 * -6] : i;
}
function F(i, n, t) {
  return i.replace(n, t);
}
function No(i, n, t) {
  return i.indexOf(n, t);
}
function BA(i, n) {
  return i.charCodeAt(n) | 17015 + -5 * 3403;
}
function bt(i, n, t) {
  return i.slice(n, t);
}
function Ce(i) {
  return i.length;
}
function xs(i) {
  return i.length;
}
function _t(i, n) {
  return n.push(i), i;
}
function Yc(i, n) {
  return i.map(n).join("");
}
function wa(i, n) {
  return i.filter(function(t) {
    return !me(t, n);
  });
}
var Fn = 9631 + 1 * -5516 + 2 * -2057, kt = -949 + 1 * 8260 + -17 * 430, ds = 3922 + -1 * -4988 + -8910, Ae = -6626 * -1 + 6285 * -1 + -1 * 341, Z = 5652 + 1 * -1913 + 3739 * -1, Mt = "";
function vn(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = Fn, g.column = kt, g.length = r, g.return = "", g.siblings = a, g;
}
function Ge(i, n) {
  return Gi(vn("", null, null, "", null, null, -1 * -1097 + 7312 + -8409 * 1, i.siblings), i, { length: -i.length }, n);
}
function gt(i) {
  for (; i.root; ) i = Ge(i.root, { children: [i] });
  _t(i, i.siblings);
}
function Tc() {
  return Z;
}
function Pc() {
  return Z = Ae > 0 ? BA(Mt, --Ae) : 0, kt--, Z === 10 && (kt = -10744 + -1535 * -7, Fn--), Z;
}
function ne() {
  return Z = Ae < ds ? BA(Mt, Ae++) : 421 * -23 + 2432 + 7251, kt++, Z === -304 + 332 * -10 + 3634 && (kt = 6877 + -1 * -3847 + -10723, Fn++), Z;
}
function At() {
  return BA(Mt, Ae);
}
function Ro() {
  return Ae;
}
function Mn(i, n) {
  return bt(Mt, i, n);
}
function Ni(i) {
  switch (i) {
    case 5 * -313 + -4904 * 2 + 3791 * 3:
    case 8056 + 1 * -8047:
    case -4052 * 1 + 2 * -1129 + 6320:
    case 5639 * -1 + -1 * 7291 + 7 * 1849:
    case 731 * 11 + -4453 + -3556:
      return 5;
    case -937 * -10 + -3 * -281 + -10180:
    case 2407 * -2 + 3607 * 1 + 1250:
    case -1 * -2063 + 2851 + -5 * 974:
    case -4032 + 1 * 4079:
    case 996 + 467 * -2:
    case 8145 + 1 * -8081:
    case 126:
    case -3357 * 1 + -5390 + 8806:
    case 123:
    case -2 * -1607 + -3007 + -82:
      return -3927 + 4941 * 1 + -1 * 1010;
    case -2 * -3875 + -6569 * -1 + -13 * 1097:
      return 1 * -4015 + 4880 + -862;
    case 9171 + 1 * 7547 + -16684:
    case 1 * 1619 + 3901 * -1 + 2321:
    case -14628 + 772 * 19:
    case 7423 * 1 + -3235 + 4097 * -1:
      return -4929 + -1 * -6690 + 1 * -1759;
    case 1 * -401 + 9509 * 1 + -9067:
    case -10503 + -1 * -10596:
      return -2887 * 3 + 1 * -7853 + -367 * -45;
  }
  return -9210 + 307 * 30;
}
function Hc(i) {
  return Fn = kt = -214 + 2952 * 3 + 1 * -8641, ds = Ce(Mt = i), Ae = 0, [];
}
function _c(i) {
  return Mt = "", i;
}
function Zn(i) {
  return Es(Mn(Ae - (6781 + -1356 * 5), Ri(i === 91 ? i + (-15233 + -1385 * -11) : i === 1 * 4565 + 217 + -4742 ? i + (3167 + 1 * 1653 + -4819) : i)));
}
function Kc(i) {
  for (; (Z = At()) && Z < 33; ) ne();
  return Ni(i) > -6301 * -1 + 263 * 3 + 2 * -3544 || Ni(Z) > 3 ? "" : " ";
}
function jc(i, n) {
  for (; --n && ne() && !(Z < 48 || Z > 102 || Z > 2304 + -1 * -7755 + 1667 * -6 && Z < 1706 * 2 + 2841 + -6188 || Z > -6850 + 3 * 961 + 4037 && Z < -2418 + -2 * -3378 + 4241 * -1); ) ;
  return Mn(i, Ro() + (n < -8543 + 3 * 309 + 7622 && At() == -16 * 266 + -509 + 4797 && ne() == 10007 + 399 * -25));
}
function Ri(i) {
  for (; ne(); ) switch (Z) {
    case i:
      return Ae;
    case 34:
    case 10967 + -2732 * 4:
      i !== 34 && i !== -928 + -967 * -1 && Ri(Z);
      break;
    case 6773 * -1 + 5919 + 894:
      i === 41 && Ri(i);
      break;
    case -4059 + -286 * 11 + 7297:
      ne();
      break;
  }
  return Ae;
}
function qc(i, n) {
  for (; ne() && i + Z !== -6323 + 2 * 589 + -4 * -1298 + 10; ) if (i + Z === 84 && At() === 7483 + 26 * -286) break;
  return "/*" + Mn(n, Ae - (-2 * 2693 + 4427 + 960)) + "*" + Wr(i === -6637 * 1 + -2561 + 9245 ? i : ne());
}
function Vc(i) {
  for (; !Ni(At()); ) ne();
  return Mn(i, Ae);
}
function Zc(i) {
  return _c(Fo("", null, null, null, [""], i = Hc(i), 3816 + 2 * -1908, [8059 * -1 + -2 * -739 + 6581 * 1], i));
}
function Fo(i, n, t, e, A, o, r, a, g) {
  for (var I = 0, C = 0, s = r, B = 534 * -18 + 1 * -7532 + 8 * 2143, E = 0, x = 6975 + -9705 * 1 + 2730, Q = 1, l = -9054 + 8011 * -1 + -53 * -322, f = 716 + -1229 * -7 + -3106 * 3, h = 2584 + -323 * 8, p = "", y = A, b = o, k = e, D = p; l; ) switch (x = h, h = ne()) {
    case 3313 * 3 + -380 + -9519:
      if (x != 108 && BA(D, s - 1) == 58) {
        No(D += F(Zn(h), "&", "&\f"), "&\f", Qs(I ? a[I - 1] : -3632 + 3 * -1543 + 8261)) != -1 && (f = -1);
        break;
      }
    case 34:
    case 1257 * 4 + 584 * -12 + -673 * -3:
    case 3753 + 2827 * 3 + -12143:
      D += Zn(h);
      break;
    case 14894 + 5 * -2977:
    case 1 * -9545 + 9947 + -392:
    case 13:
    case 3203 + 2 * 3662 + -10495:
      D += Kc(x);
      break;
    case 92:
      D += jc(Ro() - (2 * 1151 + 1 * 3167 + -5468), -1 * 3071 + -1 * -1553 + 1525);
      continue;
    case 1977 + -4250 * -2 + -745 * 14:
      switch (At()) {
        case 42:
        case -6864 + -9 * 443 + 10898:
          _t(zc(qc(ne(), Ro()), n, t, g), g);
          break;
        default:
          D += "/";
      }
      break;
    case (1 * 3971 + -1 * 4419 + 571 * 1) * Q:
      a[I++] = Ce(D) * f;
    case (-6600 + 25 * 269) * Q:
    case -1009 + -2 * -534:
    case 275 * -3 + 4200 + 3 * -1125:
      switch (h) {
        case 0:
        case 4737 + 2 * -1702 + 604 * -2:
          l = 0;
        case 59 + C:
          f == -1 && (D = F(D, /\f/g, "")), E > 2 * -1439 + 4822 + -1944 && Ce(D) - s && _t(E > -13240 + -2 * -6636 ? ba(D + ";", e, t, s - (6021 + 2 * 1753 + 11 * -866), g) : ba(F(D, " ", "") + ";", e, t, s - (6515 * 1 + -1614 + -4899), g), g);
          break;
        case -2095 * -4 + -6531 + -1790:
          D += ";";
        default:
          if (_t(k = Da(D, n, t, I, C, A, a, p, y = [], b = [], s, o), o), h === 123)
            if (C === 0) Fo(D, n, k, k, y, o, s, a, b);
            else switch (B === 99 && BA(D, 5 * 1830 + 1 * -7566 + -1581) === -334 * 24 + -8667 + 1 * 16793 ? -5112 + -1 * -5212 : B) {
              case -752 * -8 + 5 * -1154 + -146:
              case -11771 + 1697 * 7:
              case 2434 * 1 + 5252 + -1 * 7577:
              case 13 * -287 + -9381 + 3 * 4409:
                Fo(i, k, k, e && _t(Da(i, k, k, 877 * -2 + 1 * -3023 + 4777, 0, A, a, p, A, y = [], s, b), b), A, b, s, a, e ? y : b);
                break;
              default:
                Fo(D, k, k, k, [""], b, 8191 + 1 * -9977 + 1786 * 1, a, b);
            }
      }
      I = C = E = 0, Q = f = -1212 + -1213 * -1, p = D = "", s = r;
      break;
    case -2 * 3727 + -8119 + 15631 * 1:
      s = -1 * -1922 + -3359 * -2 + -8639 + Ce(D), E = x;
    default:
      if (Q < 1) {
        if (h == 123) --Q;
        else if (h == -1 * -4104 + 5620 + -9599 && Q++ == -1519 * -5 + 3129 * -3 + 1792 && Pc() == -2223 + -1 * 7212 + 9560) continue;
      }
      switch (D += Wr(h), h * Q) {
        case 38:
          f = C > -6197 * 1 + 8528 + -2331 ? 1 : (D += "\f", -1);
          break;
        case 11 * 313 + -9777 + 6378:
          a[I++] = (Ce(D) - (-4541 * 1 + -3484 + -1 * -8026)) * f, f = -1 * -8969 + 4603 + -41 * 331;
          break;
        case 64:
          At() === -5469 + 1 * 5514 && (D += Zn(ne())), B = At(), C = s = Ce(p = D += Vc(Ro())), h++;
          break;
        case -4587 + 1 * 6641 + -2009:
          x === 45 && Ce(D) == -3989 + -559 * -3 + -2314 * -1 && (Q = 4061 * 1 + -8 * -516 + -8189);
      }
  }
  return o;
}
function Da(i, n, t, e, A, o, r, a, g, I, C, s) {
  for (var B = A - 1, E = A === -1 * 9909 + -106 + 10015 ? o : [""], x = xs(E), Q = 7660 * -1 + -8138 + 15798 * 1, l = 0, f = 1 * -9850 + -1497 + -1621 * -7; Q < e; ++Q) for (var h = 1482 + 309 * 27 + -9825, p = bt(i, B + (4 * -1669 + 17 * 316 + 1305), B = Qs(l = r[Q])), y = i; h < x; ++h) (y = Es(l > -3947 * 1 + -8329 + 12276 ? E[h] + " " + p : F(p, /&\f/g, E[h]))) && (g[f++] = y);
  return vn(i, n, t, A === -5977 + 1 * -5059 + 11036 ? Rn : a, g, I, C, s);
}
function zc(i, n, t, e) {
  return vn(i, n, t, Cs, Wr(Tc()), bt(i, -9267 + -403 * -23, -2), 5439 + -7441 * -1 + -12880, e);
}
function ba(i, n, t, e, A) {
  return vn(i, n, t, Mr, bt(i, -9 * 1101 + -7729 + 17638, e), bt(i, e + 1, -1), e, A);
}
function ls(i, n, t) {
  switch (Uc(i, n)) {
    case 4645 * -1 + 5770 + 3978:
      return W + "print-" + i + i;
    case -2950 + 1 * 6652 + 2035:
    case 1 * -5569 + 1021 * 2 + 7728:
    case 3177:
    case 2791 + 2 * 321:
    case -6135 + 1 * -2451 + 10227:
    case 1 * 9013 + -8194 + 3638:
    case 426 * 15 + 903 + -4372:
    case 5572:
    case -1 * 7496 + 7 * -369 + -865 * -19:
    case 2296 + -1 * 4043 + 7591:
    case 13013 + 1 * -9822:
    case -2532 + -1 * -2579 + 6598:
    case 8158 + -333 * -15 + -4 * 2537:
    case -3506 + 3 * 3299:
    case 1357 * -1 + 2247 * 4 + -1752:
    case 5623:
    case -9356 + 15491 * 1:
    case 8556 + 872 * 6 + -9189:
    case -2989 + 3922 * 2:
    case -10583 + -1 * -14798:
    case -1 * 9026 + -9188 + 24603:
    case -607 * -9 + -4148 + -1897 * -2:
    case -2149 * 1 + -8647 + 16161:
    case 1 * -4003 + -463 * 8 + -784 * -17:
    case 3829:
      return W + i + i;
    case -4230 + 5 * 1201 + 3014:
      return Zt + i + i;
    case -2345 + 3869 * -1 + -373 * -31:
    case 2515 + -1731 * -1:
    case 1834 + -4 * -744:
    case 2621 * -5 + 4960 * -2 + 337 * 89:
    case -3006 + -1 * -485 + 5277:
      return W + i + Zt + i + Y + i + i;
    case 3609 + 2 * -935 + 4197:
      switch (BA(i, n + (-11864 + -25 * -475))) {
        case -6 * -1117 + -6507 + -81:
          return W + i + Y + F(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 3291 + 1889 * -1 + 647 * -2:
          return W + i + Y + F(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -8005 + -1 * -7948 + 102:
          return W + i + Y + F(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 717 * -8 + 7540 + 5024:
    case 1319 * 1 + -1 * -3209 + -260:
    case -1 * 4557 + -927 + -1 * -8387:
      return W + i + Y + i + i;
    case 6165:
      return W + i + Y + "flex-" + i + i;
    case -1 * -9766 + -2398 * -4 + -14171:
      return W + i + F(i, /(\w+).+(:[^]+)/, W + "box-$1$2" + Y + "flex-$1$2") + i;
    case -8620 + -2009 * -7:
      return W + i + Y + "flex-item-" + F(i, /flex-|-self/g, "") + (me(i, /flex-|baseline/) ? "" : Y + "grid-row-" + F(i, /flex-|-self/g, "")) + i;
    case 2 * -2770 + 2407 + -8 * -976:
      return W + i + Y + "flex-line-pack" + F(i, /align-content|flex-|-self/g, "") + i;
    case -3 * -1471 + 5113 * 1 + -3978:
      return W + i + Y + F(i, "shrink", "negative") + i;
    case 5292:
      return W + i + Y + F(i, "basis", "preferred-size") + i;
    case 11323 + -1 * 4299 + -482 * 2:
      return W + "box-" + F(i, "-grow", "") + W + i + Y + F(i, "grow", "positive") + i;
    case -4096 + -1798 * -4 + 1458:
      return W + F(i, /([^-])(transform)/g, "$1" + W + "$2") + i;
    case -9365 + 1 * -4123 + 19675:
      return F(F(F(i, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), i, "") + i;
    case -7837 + 9 * -617 + 18885 * 1:
    case -9857 * 1 + -7517 + 21333:
      return F(i, /(image-set\([^]*)/, W + "$1$`$1");
    case -3448 + 7 * 1171 + 219:
      return F(F(i, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Y + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + i + i;
    case -11 * -281 + 7914 + 1361 * -5:
      if (!me(i, /flex-|baseline/)) return Y + "grid-column-align" + bt(i, n) + i;
      break;
    case 8658 + -1 * 2207 + -3859:
    case -2210 + 2616 * 2 + 338:
      return Y + F(i, "template-", "") + i;
    case 14647 + 933 * -11:
    case 1432 + -1 * 6882 + 9066:
      return t && t.some(function(e, A) {
        return n = A, me(e.props, /grid-\w+-end/);
      }) ? ~No(i + (t = t[n].value), "span", 0) ? i : Y + F(i, "-start", "") + i + Y + "grid-row-span:" + (~No(t, "span", 1482 * -3 + -1921 + -1 * -6367) ? me(t, /\d+/) : +me(t, /\d+/) - +me(i, /\d+/)) + ";" : Y + F(i, "-start", "") + i;
    case 772 * 9 + 6980 + -4516 * 2:
    case -6475 + -1 * 9529 + 20132:
      return t && t.some(function(e) {
        return me(e.props, /grid-\w+-start/);
      }) ? i : Y + F(F(i, "-end", "-span"), "span ", "") + i;
    case -407 * 2 + 3 * 3039 + -2 * 2104:
    case 16022 + 7 * -1777:
    case 6737 + 8409 * 1 + -11078:
    case 4660 + -1450 * -2 + -5028:
      return F(i, /(.+)-inline(.+)/, W + "$1$2") + i;
    case 4352 + -1882 * -2:
    case 5 * 1123 + 3473 * 3 + -8975:
    case 1 * -9302 + -8154 + -1 * -23209:
    case 13 * -669 + 10578 + 3654:
    case -5 * 838 + 3911 + 5724:
    case -871 * -4 + -5187 + -4 * -1851:
    case -1 * 1879 + -6557 + -461 * -29:
    case -10785 + -15462 * -1:
    case -586 + -1 * -922 + -1 * -5197:
    case -2061 + 10 * 785:
    case 15305 + 4 * -2571:
    case 4765:
      if (Ce(i) - 1 - n > 2837 * 3 + 594 * -14 + -189) switch (BA(i, n + 1)) {
        case -9128 + -3 * 1135 + -43 * -294:
          if (BA(i, n + (11 * 468 + 6771 + -11915)) !== -2322 + 789 * 3) break;
        case 102:
          return F(i, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Zt + (BA(i, n + 3) == 6 * -1322 + 1 * -9494 + 17534 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~No(i, "stretch", -1 * 6441 + -1 * -4982 + 1459) ? ls(F(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 3949 + 3 * 401:
    case 10858 + 2469 * -2:
      return F(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, I) {
        return Y + A + ":" + o + I + (r ? Y + A + "-span:" + (a ? g : +g - +o) + I : "") + i;
      });
    case -3971 + 2140 * 1 + 6780:
      if (BA(i, n + 6) === 121) return F(i, ":", ":" + W) + i;
      break;
    case -37 * 259 + 312 * -27 + 24451 * 1:
      switch (BA(i, BA(i, -7369 + -10 * 277 + 10153) === -9759 + 1 * 426 + 9378 ? -10593 + -10611 * -1 : 582 * -11 + -416 + 6829)) {
        case 8456 + -1 * -9565 + 17901 * -1:
          return F(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (BA(i, -943 + -2087 * 1 + 3044) === -8 * -1135 + 5648 + -14683 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Y + "$2box$3") + i;
        case -2 * 1799 + 1850 * 5 + 4 * -1388:
          return F(i, ":", ":" + Y) + i;
      }
      break;
    case -5315 * 1 + 1930 * 2 + 7174:
    case -259 * -27 + 2219 + -6565:
    case 2135:
    case -2209 * -1 + 3370 + 1652 * -1:
    case -1 * 6947 + -4249 + 13587:
      return F(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Vo(i, n) {
  for (var t = "", e = 12830 + 5 * -2566; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function Xc(i, n, t, e) {
  switch (i.type) {
    case Jc:
      if (i.children.length) break;
    case Oc:
    case Mr:
      return i.return = i.return || i.value;
    case Cs:
      return "";
    case Bs:
      return i.return = i.value + "{" + Vo(i.children, e) + "}";
    case Rn:
      if (!Ce(i.value = i.props.join(","))) return "";
  }
  return Ce(t = Vo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function $c(i) {
  var n = xs(i);
  return function(t, e, A, o) {
    for (var r = "", a = 0; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function AC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function eC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Mr:
        i.return = ls(i.value, i.length, t);
        return;
      case Bs:
        return Vo([Ge(i, { value: F(i.value, "@", "@" + W) })], e);
      case Rn:
        if (i.length) return Yc(t = i.props, function(A) {
          switch (me(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              gt(Ge(i, { props: [F(A, /:(read-\w+)/, ":" + Zt + "$1")] }));
              var o = {};
              o.props = [A], gt(Ge(i, o)), Gi(i, { props: wa(t, e) });
              break;
            case "::placeholder":
              gt(Ge(i, { props: [F(A, /:(plac\w+)/, ":" + W + "input-$1")] })), gt(Ge(i, { props: [F(A, /:(plac\w+)/, ":" + Zt + "$1")] })), gt(Ge(i, { props: [F(A, /:(plac\w+)/, Y + "input-$1")] }));
              var r = {};
              r.props = [A], gt(Ge(i, r)), Gi(i, { props: wa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var tC = N, M = {}, nt = typeof process < "u" && M !== void 0 && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", us = "active", fs = "data-styled-version", Wn = "6.1.19", Lr = `/*!sc*/
`, Zo = typeof window < "u" && typeof document < "u", oC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.SC_DISABLE_SPEEDY !== void 0 && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), ka = /invalid hook call/i, Eo = /* @__PURE__ */ new Set(), nC = function(i, n) {
  if (M.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = 5854 + -6209 * -1 + -12062; g < arguments.length; g++) a[g - (-9465 + -4733 * -2)] = arguments[g];
        ka.test(r) ? (o = !1, Eo.delete(e)) : A.apply(void (-947 * -6 + -9381 + 3 * 1233), wt([r], a, !1));
      }, bA(), o && !Eo.has(e) && (console.warn(e), Eo.add(e));
    } catch (r) {
      ka.test(r.message) && Eo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Ln = Object.freeze([]), St = Object.freeze({});
function iC(i, n, t) {
  return t === void 0 && (t = St), i.theme !== t.theme && i.theme || n || t.theme;
}
var Fi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, aC = /(^-|-$)/g;
function Sa(i) {
  return i.replace(rC, "-").replace(aC, "");
}
var gC = /(a)(d)/gi, xo = 716 * -11 + 2399 * -2 + -42 * -303, Ga = function(i) {
  return String.fromCharCode(i + (i > 4184 + 1173 * -7 + -1 * -4052 ? 39 : 5945 + 709 * 7 + -10811));
};
function vi(i) {
  var n, t = "";
  for (n = Math.abs(i); n > xo; n = n / xo | 0) t = Ga(n % xo) + t;
  return (Ga(n % xo) + t).replace(gC, "$1-$2");
}
var zn, hs = 860 + -1 * -4521, ze = function(i, n) {
  for (var t = n.length; t; ) i = (2117 + -1 * -8167 + 603 * -17) * i ^ n.charCodeAt(--t);
  return i;
}, ps = function(i) {
  return ze(hs, i);
};
function sC(i) {
  return vi(ps(i) >>> 0);
}
function ys(i) {
  return M.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Xn(i) {
  return typeof i == "string" && (M.NODE_ENV === "production" || i.charAt(736 * -3 + -3260 + 5468) === i.charAt(0).toLowerCase());
}
var jA = {};
jA.childContextTypes = !0, jA.contextType = !0, jA.contextTypes = !0, jA.defaultProps = !0, jA.displayName = !0, jA.getDefaultProps = !0, jA.getDerivedStateFromError = !0, jA.getDerivedStateFromProps = !0, jA.mixins = !0, jA.propTypes = !0, jA.type = !0;
var Ne = {};
Ne.name = !0, Ne.length = !0, Ne.prototype = !0, Ne.caller = !0, Ne.callee = !0, Ne.arguments = !0, Ne.arity = !0;
var Pe = {};
Pe.$$typeof = !0, Pe.compare = !0, Pe.defaultProps = !0, Pe.displayName = !0, Pe.propTypes = !0, Pe.type = !0;
var Et = {};
Et.$$typeof = !0, Et.render = !0, Et.defaultProps = !0, Et.displayName = !0, Et.propTypes = !0;
var ms = typeof Symbol == "function" && Symbol.for, ws = ms ? /* @__PURE__ */ Symbol.for("react.memo") : 141424 + 81309 * -1, IC = ms ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, cC = jA, CC = Ne, Ds = Pe, BC = ((zn = {})[IC] = Et, zn[ws] = Ds, zn);
function Na(i) {
  return ("type" in (n = i) && n.type.$$typeof) === ws ? Ds : "$$typeof" in i ? BC[i.$$typeof] : cC;
  var n;
}
var QC = Object.defineProperty, EC = Object.getOwnPropertyNames, Ra = Object.getOwnPropertySymbols, xC = Object.getOwnPropertyDescriptor, dC = Object.getPrototypeOf, Fa = Object.prototype;
function bs(i, n, t) {
  if (typeof n != "string") {
    if (Fa) {
      var e = dC(n);
      e && e !== Fa && bs(i, e, t);
    }
    var A = EC(n);
    Ra && (A = A.concat(Ra(n)));
    for (var o = Na(i), r = Na(n), a = -5620 + -5647 * -1 + -27; a < A.length; ++a) {
      var g = A[a];
      if (!(g in CC || t && t[g] || r && g in r || o && g in o)) {
        var I = xC(n, g);
        try {
          QC(i, g, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function Gt(i) {
  return typeof i == "function";
}
function Or(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function $e(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function va(i, n) {
  if (i.length === 0) return "";
  for (var t = i[-1949 + -1 * -1949], e = -1 * 1333 + -2329 + 3663; e < i.length; e++) t += i[e];
  return t;
}
function Nt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Mi(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Nt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 0; e < n.length; e++) i[e] = Mi(i[e], n[e]);
  else if (Nt(n))
    for (var e in n) i[e] = Mi(i[e], n[e]);
  return i;
}
function Jr(i, n) {
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
var lC = M.NODE_ENV !== "production" ? tA : {};
function uC() {
  for (var i = [], n = 7705 + 3 * 523 + -9274; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-3 * -587 + -2 * 782 + -197], e = [], A = 1, o = i.length; A < o; A += -2 * -2213 + -681 + -3744) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Wt(i) {
  for (var n = [], t = -2205 + 4 * -1238 + 7158; t < arguments.length; t++) n[t - (7092 + -7 * 1013)] = arguments[t];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(uC.apply(void 0, wt([lC[i]], n, !1)).trim());
}
var fC = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(5875 + -1 * 4643 + -720), this.length = 1371 * 6 + 3701 * 1 + -11415, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -19 * -409 + -8536 + 765, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 1) < -3819 + -4979 * 1 + 8798) throw Wt(1 * 2725 + -6912 + 1 * 4203, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -4508 + 4868 * 1 + -360;
    }
    for (var a = this.indexOfGroup(n + (-1 * 4825 + 5646 + -1 * 820)), g = (r = 0, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 9431 + -1 * 9371 + -60;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Lr);
    return t;
  }, i;
})(), hC = 5488 + -5487 * 1 << 4 * 1181 + -1743 + -2951, vo = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), Mo = 1, lo = function(i) {
  if (vo.has(i)) return vo.get(i);
  for (; zo.has(Mo); ) Mo++;
  var n = Mo++;
  if (M.NODE_ENV !== "production" && ((-2133 + 2133 * 1 | n) < -591 * 5 + -1 * -1381 + 1574 || n > hC)) throw Wt(715 + -1 * 699, "".concat(n));
  return vo.set(i, n), zo.set(n, i), n;
}, pC = function(i, n) {
  Mo = n + 1, vo.set(i, n), zo.set(n, i);
}, yC = "style[".concat(nt, "][").concat(fs, '="').concat(Wn, '"]'), mC = new RegExp("^".concat(nt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wC = function(i, n, t) {
  for (var e, A = t.split(","), o = 7711 + 701 * -11, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, DC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Lr), A = [], o = 1 * -6969 + 3961 + 3008, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(mC);
      if (g) {
        var I = 0 | parseInt(g[1], 10), C = g[2];
        -8992 + 2 * 4496 !== I && (pC(C, I), wC(i, C, g[477 + 1 * 2199 + -2673 * 1]), i.getTag().insertRules(I, A)), A.length = 0;
      } else A.push(a);
    }
  }
}, Ma = function(i) {
  for (var n = document.querySelectorAll(yC), t = -8555 * -1 + -7719 + -836, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(nt) !== us && (DC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function bC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ks = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(nt, "]")));
    return g[g.length - 1];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(nt, us), e.setAttribute(fs, Wn);
  var r = bC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, kC = (function() {
  function i(n) {
    this.element = ks(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -4523 + -1 * -4523, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Wt(-12823 + 1070 * 12);
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
})(), SC = (function() {
  function i(n) {
    this.element = ks(n), this.nodes = this.element.childNodes, this.length = 9859 * 1 + -7146 + -2713;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -874 + -511 * 3 + 2407) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), GC = (function() {
  function i(n) {
    this.rules = [], this.length = 8929 * 1 + -4889 * -1 + -987 * 14;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -1 * -5101 + -4705 + -395), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), Wa = Zo, NC = { isServer: !Zo, useCSSOMInjection: !oC }, Ss = (function() {
  function i(n, t, e) {
    n === void 0 && (n = St), t === void 0 && (t = {});
    var A = this;
    this.options = vA(vA({}, NC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Zo && Wa && (Wa = !1, Ma(this)), Jr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), a = r.length, g = "", I = function(s) {
          var B = (function(f) {
            return zo.get(f);
          })(s);
          if (B === void 0) return "continue";
          var E = o.names.get(B), x = r.getGroup(s);
          if (E === void 0 || !E.size || -73 + 1 * 8930 + -17 * 521 === x.length) return "continue";
          var Q = "".concat(nt, ".g").concat(s, '[id="').concat(B, '"]'), l = "";
          E !== void 0 && E.forEach(function(f) {
            f.length > -9690 + 5 * -769 + -1 * -13535 && (l += "".concat(f, ","));
          }), g += "".concat(x).concat(Q, '{content:"').concat(l, '"}').concat(Lr);
        }, C = 7494 + 921 * 2 + -1167 * 8; C < a; C++) I(C);
        return g;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return lo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Zo && Ma(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(vA(vA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 6249 * -1 + -2 * 2996 + 12241) + (-1 * 4533 + 2870 + 1664);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new GC(A) : e ? new kC(A) : new SC(A);
    })(this.options), new fC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (lo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(lo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(lo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), RC = /&/g, FC = /^\s*\/\/.*$/gm;
function Gs(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Gs(t.children, n)), t;
  });
}
function Ns(i) {
  var n, t, e, A = i === void 0 ? St : i, o = A.options, r = o === void 0 ? St : o, a = A.plugins, g = a === void 0 ? Ln : a, I = function(B, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 1 * 4438 + 1 * 5843 + -10281 ? ".".concat(n) : B;
  }, C = g.slice();
  C.push(function(B) {
    B.type === Rn && B.value.includes("&") && (B.props[0] = B.props[4594 * -2 + -1 * 9806 + 18994].replace(RC, t).replace(e, I));
  }), r.prefix && C.push(eC), C.push(Xc);
  var s = function(B, E, x, Q) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = B.replace(FC, ""), f = Zc(x || E ? "".concat(x, " ").concat(E, " { ").concat(l, " }") : l);
    r.namespace && (f = Gs(f, r.namespace));
    var h = [];
    return Vo(f, $c(C.concat(AC(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = g.length ? g.reduce(function(B, E) {
    return E.name || Wt(646 * 15 + -6997 + -2678), ze(B, E.name);
  }, hs).toString() : "", s;
}
var vC = new Ss(), Wi = Ns(), Ur = ot.createContext({ shouldForwardProp: void 0, styleSheet: vC, stylis: Wi });
Ur.Consumer;
var MC = ot.createContext(void 0);
function Li() {
  return xe(Ur);
}
function WC(i) {
  var n = z(i.stylisPlugins), t = n[9677 + 1 * 2329 + 1334 * -9], e = n[-1 * 6084 + 1771 + 4314], A = Li().styleSheet, o = pA(function() {
    var C = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(s)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = pA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = C, s.plugins = t, Ns(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  J(function() {
    Lc(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = pA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var I = {};
  return I.value = r, ot.createElement(Ur.Provider, g, ot.createElement(MC.Provider, I, i.children));
}
var La = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Wi);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Jr(this, function() {
      throw Wt(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Wi), this.name + n.hash;
  }, i;
})(), LC = function(i) {
  return i >= "A" && i <= "Z";
};
function Oa(i) {
  for (var n = "", t = -3289 + -1 * -4252 + -3 * 321; t < i.length; t++) {
    var e = i[t];
    if (-1137 + -595 * 6 + -4 * -1177 === t && e === "-" && i[1 * 503 + 9112 + -9615] === "-") return i;
    LC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Rs = function(i) {
  return i == null || i === !1 || i === "";
}, Fs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !Rs(o) && (Array.isArray(o) && o.isCss || Gt(o) ? e.push("".concat(Oa(A), ":"), o, ";") : Nt(o) ? e.push.apply(e, wt(wt(["".concat(A, " {")], Fs(o), !1), ["}"], !1)) : e.push("".concat(Oa(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in tC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function et(i, n, t, e) {
  if (Rs(i)) return [];
  if (Or(i)) return [".".concat(i.styledComponentId)];
  if (Gt(i)) {
    if (!Gt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return M.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof La || Nt(A) || A === null || console.error("".concat(ys(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), et(A, n, t, e);
  }
  var o;
  return i instanceof La ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Nt(i) ? Fs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Ln, i.map(function(r) {
    return et(r, n, t, e);
  })) : [i.toString()];
}
function OC(i) {
  for (var n = 0; n < i.length; n += -1 * -295 + -4895 + 4601) {
    var t = i[n];
    if (Gt(t) && !Or(t)) return !1;
  }
  return !0;
}
var JC = ps(Wn), UC = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (e === void 0 || e.isStatic) && OC(n), this.componentId = t, this.baseHash = ze(JC, t), this.baseStyle = e, Ss.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = $e(A, this.staticRulesId);
      else {
        var o = va(et(this.rules, n, t, e)), r = vi(ze(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = $e(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = ze(this.baseHash, e.hash), I = "", C = -3018 + -2 * 2455 + 7928; C < this.rules.length; C++) {
        var s = this.rules[C];
        if (typeof s == "string") I += s, M.NODE_ENV !== "production" && (g = ze(g, s));
        else if (s) {
          var B = va(et(s, n, t, e));
          g = ze(g, B + C), I += B;
        }
      }
      if (I) {
        var E = vi(g >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(I, ".".concat(E), void 0, this.componentId)), A = $e(A, E);
      }
    }
    return A;
  }, i;
})(), vs = ot.createContext(void 0);
vs.Consumer;
var $n = {}, Ja = /* @__PURE__ */ new Set();
function YC(i, n, t) {
  var e = Or(i), A = i, o = !Xn(i), r = n.attrs, a = r === void 0 ? Ln : r, g = n.componentId, I = g === void 0 ? (function(b, k) {
    var D = typeof b != "string" ? "sc" : Sa(b);
    $n[D] = ($n[D] || 0) + (-5626 + -3229 * -1 + 2398);
    var U = "".concat(D, "-").concat(sC(Wn + D + $n[D]));
    return k ? "".concat(k, "-").concat(U) : U;
  })(n.displayName, n.parentComponentId) : g, C = n.displayName, s = C === void 0 ? (function(b) {
    return Xn(b) ? "styled.".concat(b) : "Styled(".concat(ys(b), ")");
  })(i) : C, B = n.displayName && n.componentId ? "".concat(Sa(n.displayName), "-").concat(n.componentId) : n.componentId || I, E = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(b, k) {
        return Q(b, k) && l(b, k);
      };
    } else x = Q;
  }
  var f = new UC(t, B, e ? A.componentStyle : void 0);
  function h(b, k) {
    return (function(D, U, O) {
      var X = D.attrs, $ = D.componentStyle, yA = D.defaultProps, AA = D.foldedComponentIds, Io = D.styledComponentId, W0 = D.target, L0 = ot.useContext(vs), O0 = Li(), Tn = D.shouldForwardProp || O0.shouldForwardProp;
      M.NODE_ENV !== "production" && qo(Io);
      var oa = iC(U, L0, yA) || St, le = (function(co, Yt, Co) {
        var at = {};
        at.className = void 0, at.theme = Co;
        for (var _n, Je = vA(vA({}, Yt), at), Kn = -580 * 16 + 2983 * 1 + 6297; Kn < co.length; Kn += 1 * 1637 + 2487 + -4123) {
          var Bo = Gt(_n = co[Kn]) ? _n(Je) : _n;
          for (var Se in Bo) Je[Se] = Se === "className" ? $e(Je[Se], Bo[Se]) : Se === "style" ? vA(vA({}, Je[Se]), Bo[Se]) : Bo[Se];
        }
        return Yt.className && (Je.className = $e(Je.className, Yt.className)), Je;
      })(X, U, oa), Jt = le.as || W0, Ut = {};
      for (var UA in le) le[UA] === void 0 || UA[1 * -9433 + 9457 + -24] === "$" || UA === "as" || UA === "theme" && le.theme === oa || (UA === "forwardedAs" ? Ut.as = le.forwardedAs : Tn && !Tn(UA, Jt) || (Ut[UA] = le[UA], Tn || M.NODE_ENV !== "development" || ec(UA) || Ja.has(UA) || !Fi.has(Jt) || (Ja.add(UA), console.warn('styled-components: it looks like an unknown prop "'.concat(UA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Pn = (function(co, Yt) {
        var Co = Li(), at = co.generateAndInjectStyles(Yt, Co.styleSheet, Co.stylis);
        return M.NODE_ENV !== "production" && qo(at), at;
      })($, le);
      M.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(Pn);
      var Hn = $e(AA, Io);
      return Pn && (Hn += " " + Pn), le.className && (Hn += " " + le.className), Ut[Xn(Jt) && !Fi.has(Jt) ? "class" : "className"] = Hn, O && (Ut.ref = O), NA(Jt, Ut);
    })(p, b, k);
  }
  h.displayName = s;
  var p = ot.forwardRef(h), y = {};
  return y.attrs = !0, y.componentStyle = !0, y.displayName = !0, y.foldedComponentIds = !0, y.shouldForwardProp = !0, y.styledComponentId = !0, y.target = !0, p.attrs = E, p.componentStyle = f, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? $e(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = B, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? (function(k) {
      for (var D = [], U = 1 * 7303 + 3 * 2353 + -14361; U < arguments.length; U++) D[U - 1] = arguments[U];
      for (var O = -9513 + -7 * -1359, X = D; O < X.length; O++) Mi(k, X[O], !0);
      return k;
    })({}, A.defaultProps, b) : b;
  } }), M.NODE_ENV !== "production" && (nC(s, B), p.warnTooManyClasses = /* @__PURE__ */ (function(b, k) {
    var D = {}, U = !1;
    return function(O) {
      if (!U && (D[O] = !0, Object.keys(D).length >= 6875 + -956 * 5 + -1895)) {
        var X = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(-2810 * -1 + -6532 + 3922, " classes were generated for component ").concat(b).concat(X, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), U = !0, D = {};
      }
    };
  })(s, B)), Jr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && bs(p, i, y), p;
}
function Ua(i, n) {
  for (var t = [i[-6 * 1369 + 1852 + 6362]], e = 5627 + 2 * -1734 + -2159 * 1, A = n.length; e < A; e += 9294 + 2 * 1951 + 377 * -35) t.push(n[e], i[e + (4769 * 1 + -2 * -395 + -5558)]);
  return t;
}
var Ya = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function Ms(i) {
  for (var n = [], t = -784 * 7 + -1 * 1747 + 7236; t < arguments.length; t++) n[t - (-7723 * -1 + 5016 + -11 * 1158)] = arguments[t];
  if (Gt(i) || Nt(i)) return Ya(et(Ua(Ln, wt([i], n, !0))));
  var e = i;
  return n.length === 0 && -897 + 3 * 2665 + -7097 === e.length && typeof e[-4269 + -1423 * -3] == "string" ? et(e) : Ya(et(Ua(e, n)));
}
function Oi(i, n, t) {
  if (t === void 0 && (t = St), !n) throw Wt(831 + 1 * -1238 + 408, n);
  var e = function(A) {
    for (var o = [], r = 4843 + -1 * 1549 + -3293; r < arguments.length; r++) o[r - (9833 + 3 * -1851 + 11 * -389)] = arguments[r];
    return i(n, t, Ms.apply(void 0, wt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Oi(i, n, vA(vA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Oi(i, n, vA(vA({}, t), A));
  }, e;
}
var Ws = function(i) {
  return Oi(YC, i);
}, Lt = Ws;
Fi.forEach(function(i) {
  Lt[i] = Ws(i);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var uo = "__sc-".concat(nt, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[uo] || (window[uo] = 0), -5916 + 1237 * -3 + 9628 === window[uo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[uo] += -6231 + -2 * -765 + -2 * -2351);
const TC = Lt.div`
  position: relative;
`, PC = Lt.video`
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
const Wo = {};
Wo.CONTINUE_DETECTION = "continue-detection", Wo.SWITCH_CAMERA = "switch-camera", Wo.TOGGLE_MIRROR = "toggle-mirror";
const ht = Wo, Ji = {};
Ji.FIRST_FRAME = "first-frame", Ji.FIRST_VALID_FRAME = "first-valid-frame";
const Ai = Ji, Ls = {};
Ls.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ta = Ls;
var Os = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(Os || {}), zA = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(zA || {}), pt = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(pt || {}), HC = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(HC || {}), _C = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(_C || {});
const ye = {};
ye.CANDIDATE_SELECTION = "candidate_selection", ye.DOCUMENT_CENTERING = "document_centering", ye.DOCUMENT_NOT_PRESENT = "document_not_present", ye.DOCUMENT_TOO_FAR = "document_too_far", ye.SHARPNESS_TOO_LOW = "sharpness_too_low", ye.BRIGHTNESS_TOO_LOW = "brightness_too_low", ye.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ye.HOTSPOTS_PRESENT = "hotspots_present";
const Ue = ye, Ye = {};
Ye.isPresent = Ue.DOCUMENT_NOT_PRESENT, Ye.isNotSmall = Ue.DOCUMENT_TOO_FAR, Ye.isNotOutOfBounds = Ue.DOCUMENT_CENTERING, Ye.isSharp = Ue.SHARPNESS_TOO_LOW, Ye.isNotDim = Ue.BRIGHTNESS_TOO_LOW, Ye.isNotBright = Ue.BRIGHTNESS_TOO_HIGH, Ye.noHotspots = Ue.HOTSPOTS_PRESENT;
const xt = {};
xt.LOADING = "loading", xt.ERROR = "error", xt.WAITING = "waiting", xt.RUNNING = "running", xt.COMPLETE = "complete";
const XA = xt, Js = { ...XA };
Js.DONE = "done";
const Ui = Js, Us = {};
Us.EYE_NOT_PRESENT = "eye_not_present";
const Rt = Us, kA = {};
kA.CANDIDATE_SELECTION = "candidate_selection", kA.FACE_TOO_CLOSE = "face_too_close", kA.FACE_TOO_FAR = "face_too_far", kA.FACE_CENTERING = "face_centering", kA.FACE_NOT_PRESENT = "face_not_present", kA.SHARPNESS_TOO_LOW = "sharpness_too_low", kA.BRIGHTNESS_TOO_LOW = "brightness_too_low", kA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", kA.DEVICE_PITCHED = "device_pitched", kA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, kA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT, kA.MOUTH_NOT_PRESENT = "mouth_not_present", kA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", kA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const sA = kA, FA = {};
FA.isPresent = sA.FACE_NOT_PRESENT, FA.isNotPitched = sA.DEVICE_PITCHED, FA.isNotSmall = sA.FACE_TOO_FAR, FA.isNotLarge = sA.FACE_TOO_CLOSE, FA.isNotOutOfBounds = sA.FACE_CENTERING, FA.isNotDim = sA.BRIGHTNESS_TOO_LOW, FA.isNotBright = sA.BRIGHTNESS_TOO_HIGH, FA.isSharp = sA.SHARPNESS_TOO_LOW, FA.isLeftEyePresent = sA.LEFT_EYE_NOT_PRESENT, FA.isRightEyePresent = sA.RIGHT_EYE_NOT_PRESENT, FA.isMouthPresent = sA.MOUTH_NOT_PRESENT, FA.isMouthScoreNotTooHigh = sA.MOUTH_SCORE_TOO_HIGH, FA.isMouthScoreNotTooLow = sA.MOUTH_SCORE_TOO_LOW;
const KC = FA;
({ ...sA });
var SA = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(SA || {});
const oe = Ui, gA = {};
gA.CANDIDATE_SELECTION = "candidate_selection", gA.FACE_TOO_CLOSE = "face_too_close", gA.FACE_TOO_FAR = "face_too_far", gA.FACE_CENTERING = "face_centering", gA.FACE_NOT_PRESENT = "face_not_present", gA.SHARPNESS_TOO_LOW = "sharpness_too_low", gA.BRIGHTNESS_TOO_LOW = "brightness_too_low", gA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", gA.DEVICE_PITCHED = "device_pitched", gA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, gA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT, gA.MOUTH_NOT_PRESENT = "mouth_not_present", gA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", gA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", gA.SMILE = "smile", gA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", gA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const WA = gA, LA = {};
LA.isPresent = WA.FACE_NOT_PRESENT, LA.isNotPitched = WA.DEVICE_PITCHED, LA.isNotSmall = WA.FACE_TOO_FAR, LA.isNotLarge = WA.FACE_TOO_CLOSE, LA.isNotOutOfBounds = WA.FACE_CENTERING, LA.isNotDim = WA.BRIGHTNESS_TOO_LOW, LA.isNotBright = WA.BRIGHTNESS_TOO_HIGH, LA.isSharp = WA.SHARPNESS_TOO_LOW, LA.isLeftEyePresent = WA.LEFT_EYE_NOT_PRESENT, LA.isRightEyePresent = WA.RIGHT_EYE_NOT_PRESENT, LA.isMouthPresent = WA.MOUTH_NOT_PRESENT, LA.isMouthStatusNotTooHigh = WA.MOUTH_SCORE_TOO_HIGH, LA.isMouthStatusNotTooLow = WA.MOUTH_SCORE_TOO_LOW;
const ei = {};
ei.NEUTRAL = "NEUTRAL", ei.SMILE = "SMILE", ei.SMILE_MANUAL = "SMILE_MANUAL";
const te = {};
te.CANDIDATE_SELECTION = "candidate_selection", te.PALM_CENTERING = "palm_centering", te.PALM_NOT_PRESENT = "palm_not_present", te.PALM_TOO_FAR = "palm_too_far", te.PALM_TOO_CLOSE = "palm_too_close", te.SHARPNESS_TOO_LOW = "sharpness_too_low", te.BRIGHTNESS_TOO_LOW = "brightness_too_low", te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", te.DEVICE_PITCHED = "device_pitched", te.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const ue = te, fe = {};
fe.isPresent = ue.PALM_NOT_PRESENT, fe.isNotPitched = ue.DEVICE_PITCHED, fe.isNotSmall = ue.PALM_TOO_FAR, fe.isNotOutOfBounds = ue.PALM_CENTERING, fe.isNotDim = ue.BRIGHTNESS_TOO_LOW, fe.isNotBright = ue.BRIGHTNESS_TOO_HIGH, fe.isSharp = ue.SHARPNESS_TOO_LOW, fe.isNotLarge = ue.PALM_TOO_CLOSE, fe.isTemplateExtractionQualityHighEnough = ue.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...sA });
const fo = {};
fo.TOP_LEFT = "TOP_LEFT", fo.TOP_RIGHT = "TOP_RIGHT", fo.BOTTOM_RIGHT = "BOTTOM_RIGHT", fo.BOTTOM_LEFT = "BOTTOM_LEFT";
const qA = {};
qA.CANDIDATE_SELECTION = "candidate_selection", qA.FACE_TOO_CLOSE = "face_too_close", qA.FACE_TOO_FAR = "face_too_far", qA.FACE_CENTERING = "face_centering", qA.FACE_NOT_PRESENT = "face_not_present", qA.SHARPNESS_TOO_LOW = "sharpness_too_low", qA.BRIGHTNESS_TOO_LOW = "brightness_too_low", qA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", qA.DEVICE_PITCHED = "device_pitched", qA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, qA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT;
const ie = qA, re = {};
re.isPresent = ie.FACE_NOT_PRESENT, re.isNotPitched = ie.DEVICE_PITCHED, re.isNotSmall = ie.FACE_TOO_FAR, re.isNotLarge = ie.FACE_TOO_CLOSE, re.isNotOutOfBounds = ie.FACE_CENTERING, re.isNotDim = ie.BRIGHTNESS_TOO_LOW, re.isNotBright = ie.BRIGHTNESS_TOO_HIGH, re.isSharp = ie.SHARPNESS_TOO_LOW, re.isLeftEyePresent = ie.LEFT_EYE_NOT_PRESENT, re.isRightEyePresent = ie.RIGHT_EYE_NOT_PRESENT;
const On = Oe(void 0);
On.displayName = "AppStateContext";
function de() {
  const i = xe(On);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const Ys = de;
var Ts = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(Ts || {});
const Yi = {};
Yi.FRONT = "user", Yi.BACK = "environment";
const Yr = Yi, Ti = {};
Ti.AUTO_CAPTURE = "AUTO_CAPTURE", Ti.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Pi = Ti, Hi = {};
Hi.SIMD = "simd", Hi.NO_SIMD = "no-simd";
const Pa = Hi, _i = {};
_i.Lower = "Lower", _i.Higher = "Higher";
const Xo = _i, Lo = {};
Lo.VISIBLE = "VISIBLE", Lo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Lo.HIDDEN = "HIDDEN";
const zt = Lo, Ki = {};
Ki.MOBILE = "MOBILE", Ki.DESKTOP = "DESKTOP";
const Ha = Ki;
function $o() {
  const i = ["WOZdGuhdQCkHF8oJW40", "W5pdImo6zSoUF2/dJW", "WPlcMCoXF8o1", "W7NcUCkLWOpdTSkcW6ZdM8o7bmoAzW", "nXTRn8ozB2SDWOuDaYGD", "WPRdJWddNreWWPrdqG5cbW", "WRTLpNJcQq", "vKugW5FcPCk5mmkcdmo7WQXUwq", "agtcL0NcRW", "cWBcRmo8tSo8g8oIj8o5pXK", "yKpcOdjUqqBcK8omh8oPxa", "xelcL01TqCkMWOC", "W7mrDwBdOmk6WOCAW41htdK", "vLGZDmkj", "WQJdJxNcHCkFnLhdOKCJWOxdTum", "qJpdGvhdQcJcIeCpmf/cSCkM", "WPFdH8oeWQldUHPVWOvmxCk1WQy", "W7OmW4S", "W7LZor8G", "WONcJCksu8od", "lfvcaHWuW5lcMq", "WQZdUmotW5pcRq", "W5tdRmoIWOlcHCkBdxqThqmm", "AKpcPdnVsGJcQmoKgSoWrq", "WRRdRSoRfmke", "xY/cSuf/t8kP", "W5tdICkhj8kRAKldLmkOWR5Y", "W7bBWO88WRu", "W70mW5FcHrK", "WOBcUItcUCoi", "W7FdQZ3cQJm", "ySoxaCooatGi", "W67dQCo2qa", "xmkRpSkfWOG", "ahZdRge4WRZcLCoZW6pdNCkC"];
  return $o = function() {
    return i;
  }, $o();
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return uA(s - -908, a);
  }
  const e = i();
  function A(a, g, I, C, s) {
    return uA(C - 510, I);
  }
  function o(a, g, I, C, s) {
    return uA(a - -885, g);
  }
  function r(a, g, I, C, s) {
    return uA(g - -711, I);
  }
  for (; ; )
    try {
      if (-parseInt(o(-424, "F(K7", -439, -417, -423)) / 1 * (parseInt(A(988, 985, "j*T9", 973, 986)) / 2) + -parseInt(A(998, 998, "UTZY", 988, 1005)) / 3 + parseInt(A(979, 996, "F(K7", 993, 1003)) / 4 + parseInt(t("ED%(", -461, -449, -447, -448)) / 5 * (-parseInt(r(-255, -253, "np#5", -259, -253)) / 6) + parseInt(t("KGQD", -436, -436, -444, -435)) / 7 * (parseInt(r(-228, -231, "*H(w", -226, -215)) / 8) + parseInt(A(959, 949, "P)qn", 962, 952)) / 9 + parseInt(r(-242, -239, "ppxg", -227, -256)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($o, -2834 * -112 + -190355 + -3065 * -19);
function jC(i, n, t, e, A) {
  return uA(A - 968, t);
}
function qC(i, n, t, e, A) {
  return uA(t - -135, e);
}
const An = Oe(void 0);
An[jC(1424, 1418, "$G@T", 1439, 1433) + Xt("wB5u", 201) + "e"] = Xt("*erh", 199) + Xt("RVl(", 217) + ji(6, "J2Pc");
function ji(i, n, t, e, A) {
  return uA(i - -464, n);
}
function Xt(i, n, t, e, A) {
  return uA(n - -258, i);
}
function uA(i, n) {
  i = i - (1814 + -2 * 682);
  const t = $o();
  let e = t[i];
  if (uA.MpDPcr === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    uA.abekdB = g, uA.frtGzr = {}, uA.MpDPcr = !0;
  }
  const o = t[372 * 14 + -1344 + -3864], r = i + o, a = uA.frtGzr[r];
  return a ? e = a : (uA.KAtvAk === void 0 && (uA.KAtvAk = !0), e = uA.abekdB(e, n), uA.frtGzr[r] = e), e;
}
function so() {
  function i(r, a, g, I, C) {
    return ji(a - 1236, C);
  }
  function n(r, a, g, I, C) {
    return ji(g - 443, I);
  }
  const t = xe(An);
  function e(r, a, g, I, C) {
    return Xt(g, I - 258);
  }
  function A(r, a, g, I, C) {
    return Xt(g, C - 1077);
  }
  function o(r, a, g, I, C) {
    return qC(r - 465, a - 29, I - 560, r);
  }
  if (t === void 0) throw new Error(An[A(1306, 1290, "ERaV", 1283, 1298) + n(454, 444, 450, "0f$P") + "e"] + (i(1223, 1240, 1243, 1229, "$WU9") + o("J2Pc", 873, 886, 887) + e(480, 483, "%p$Q", 481) + e(453, 473, "JJUB", 456) + n(438, 435, 446, "2ZEo") + i(1232, 1238, 1249, 1250, "5p]c") + i(1217, 1223, 1232, 1233, "TDVC") + A(1265, 1280, "5p]c", 1282, 1274)));
  return t;
}
const io = (i) => i.length < 1937 + 1133 * 1 + 1 * -3069 ? -3e3 + -300 * -10 : i.reduce((t, e) => t + e, -6285 + -1257 * -5) / i.length, be = (i) => Number.parseFloat(i.toFixed(3052 + 3049 * -1));
function VC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-8046 + -1 * 7316 + 15362, 0, n.canvas.width, n.canvas.height);
}
const Ps = 2099 + -273 * -34 + -11381 + 0.75, ZC = -4418 * 1 + -575 * 5 + 1459 * 5, zC = -2030 + -347 * -19 + 3 * -1321, XC = 8651 * 1 + 2 * -757 + -7137, $C = "dot-auto-capture-video", Jn = (i, n) => Math.min(i, n), Hs = ({ height: i, width: n }, t) => {
  const e = Jn(n, i) * t, A = (n - e) / 2, o = (i - e) / (5 * -1354 + 5551 + 1221), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, AB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Hs(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, eB = ({ height: i, width: n }) => {
  const t = Jn(n, i), e = t / (382 * -19 + -1 * 2003 + -386 * -24) * (-8256 + 20 * 413);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function tB(i, n) {
  const t = Jn(n.width, n.height);
  return be(i * t);
}
function oB({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, Hs(t, Ps);
}
function nB(i) {
  return AB(i, Ps);
}
function iB(i, n) {
  return tB(i, n) * ZC;
}
const rB = "8.0.3", aB = {
  version: rB
}, gB = -7459 + -3734 * -2 + 0.8100000000000005, qi = {};
qi.max = 100, qi.min = 10;
const _a = qi, sB = 720, IB = -1 * 5927 + -1675 + 7802, cB = 1083 * 9 + -998 * -4 + -13735, _s = "AES-CBC", Ks = "RSA-OAEP", CB = "SHA-256", BB = "image/jpeg", QB = 8, EB = 5639 + 10 * -721 + 1611, js = "/dot-assets", Ka = "dot_embedded_bg.wasm", xB = "c56a4180-65aa-42ec-a945-5fd21dec0538", dB = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], Vi = (i) => new Promise((n) => {
  setTimeout(n, i);
}), qs = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? be(t) : t)), lB = () => aB.version, Vs = (i) => new URL(i).hostname.replace("www.", ""), Tr = () => Vs(window.location.href) === "localhost", uB = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i, ja = (i, n) => Math.abs(i - n);
function fB(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function hB(i) {
  return i.at(-1) === "/" ? i.slice(0, -1) : i;
}
function Zs(i) {
  return "" + hB(i ?? "") + js;
}
function Tt(i) {
  return (...n) => {
    Tr() && console[i](...n);
  };
}
const Un = { log: Tt("log"), warn: Tt("warn"), error: Tt("error"), info: Tt("info"), debug: Tt("debug") }, pB = () => "prod".toLowerCase() === "dev";
class Pr extends Array {
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
    this.length === this.#A && this.splice(-1526 + -763 * -2, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(1 * 1282 + 4222 + -16 * 344);
  }
}
const zs = (i, n, t = BB) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), Xs = async (i) => zs(i, 1 * 8866 + -678 + -8098), yB = async (i) => zs(i, -8125 + 3013 * 1 + 5212, "image/png"), $s = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -3 * -1553 + 676 + -5335, -3458 + 10 * -470 + 8158, t.width, t.height), t;
}, AI = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(2 * 2521 + 3660 + -8702 * 1, 1114 * -1 + -9614 + 6 * 1788, i.width, i.height);
  return t;
};
async function mB(i, n) {
  const t = $s(i, n);
  return yB(t);
}
const eI = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, ti = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, eI(i, g, t);
}, $t = (i, n, t, e = -1386 + -7183 * -1 + -1 * 5797) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -2738 + 1172 * -2 + 5089, 506 * -1 + -1 * 8206 + 8719), A.beginPath());
}, wB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, DB = (i, n) => Object.values(i).every((t) => wB(t, n));
function en(i) {
  const { height: n, width: t } = eB(i), e = (i.width - t) / (7 * 269 + -1443 * -3 + -6210), A = (i.height - n) / (7739 + -5 * 853 + -1 * 3472), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function tI(i, n, t) {
  const { height: e, width: A } = t, o = Jn(i.width, i.height), r = A - o * n * 2, a = e - o * n * (-9701 + -2 * 4778 + 19259), g = (i.width - r) / 2, I = (i.height - a) / 2, C = {};
  return C.shiftX = g, C.shiftY = I, C.width = r, C.height = a, C;
}
function st(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Hr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function qa() {
  return /Android/i.test(navigator.userAgent);
}
function tt() {
  return /Firefox/i.test(navigator.userAgent);
}
function oI() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const bB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function nI() {
  return navigator.userAgent;
}
function kB() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function Ao() {
  return !1;
}
function SB() {
  return !0;
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return q(B - 340, g);
  }
  function e(g, I, C, s, B) {
    return q(I - 451, g);
  }
  function A(g, I, C, s, B) {
    return q(B - 883, g);
  }
  function o(g, I, C, s, B) {
    return q(I - 252, s);
  }
  function r(g, I, C, s, B) {
    return q(I - 564, s);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(t("7*eM", 605, 596, 608, 597)) / 1 + -parseInt(A("Gk4f", 1137, 1145, 1141, 1134)) / 2 + -parseInt(A("SXaF", 1155, 1135, 1142, 1143)) / 3 * (parseInt(o(500, 513, 523, "56W^", 515)) / 4) + -parseInt(r(825, 823, 825, "NwNu", 813)) / 5 + -parseInt(A("0JAP", 1129, 1146, 1121, 1132)) / 6 * (parseInt(t("V*!^", 606, 601, 591, 603)) / 7) + -parseInt(A("f0*f", 1138, 1143, 1140, 1130)) / 8 + parseInt(e("4i!H", 704, 694, 700, 705)) / 9 * (parseInt(e("2k4L", 722, 724, 727, 722)) / 10) === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(tn, 769867);
function tn() {
  const i = ["WO7dO29PWQRcVxWSp8ki", "kfzpW53cLw/cSHpcPSk1amkqcW", "WR7dLWZcGSkXeSoVWQeZdSk4W7e", "DCkozCkyjCo5WOBdHttdV3faha", "DfxcRmkoCmkkBCotWOmcwJBdIW", "kSkHlmoiWPZcKv/cIh1D", "ot42WR/cOq", "W64gBIiildRcM8ofymkhBmk/", "WQxcJ8oZdmomrmkscKix", "xCoPW6NcILlcQSonzHJcK8o9iW", "W7zhahxcPG", "WPv4WOldTri", "wmktWPn2CaxcVmk8W6ZcRmoAnSkk", "umkCDXVcI1JdVmk0WRTOkSoSFW", "A29UW7xdVCkEWPlcUwVcGLxdQYG", "WRpdPeaSi8oBiSo1BN50wKG", "WRThfSkbW5tcTg/cRSoHCW", "WR3dKWtcG8oYxCo/WQ4klq", "WRikg8k9mCkkWQPib8oD", "W4D/aIaQd1fZWOCQ", "W7lcNatdImoE", "W7pdVCoJW4L3", "WOtdJ8kVgZysW73cGvuA", "sSoFbfD0CmodBmoUW7i", "aSojW446", "iCoziCoGDa", "W6WcBYTFyMtcNCogCG"];
  return tn = function() {
    return i;
  }, tn();
}
function q(i, n) {
  i = i - 246;
  const t = tn();
  let e = t[i];
  if (q.ULjeKp === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    q.umncRM = g, q.Keqetu = {}, q.ULjeKp = !0;
  }
  const o = t[0], r = i + o, a = q.Keqetu[r];
  return a ? e = a : (q.sVTcOm === void 0 && (q.sVTcOm = !0), e = q.umncRM(e, n), q.Keqetu[r] = e), e;
}
function GB({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = z(), A = t !== void 0;
  J(() => {
    async function I() {
      function C(E, x, Q, l, f) {
        return q(f - 452, l);
      }
      function s(E, x, Q, l, f) {
        return q(l - 16, Q);
      }
      function B(E, x, Q, l, f) {
        return q(x - 422, E);
      }
      await n[s(281, 283, "VDg[", 284)](Zs(i)), e(n[C(721, 708, 714, "f0*f", 721) + s(267, 268, "eJwT", 266) + B("4XPE", 686) + "t"]());
    }
    I();
  }, [n, i, e]);
  function o(I, C, s, B, E) {
    return q(B - 587, C);
  }
  const r = {};
  function a(I, C, s, B, E) {
    return q(I - -921, C);
  }
  r[o(843, "bR[@", 842, 842) + a(-667, "iB#g")] = t;
  function g(I, C, s, B, E) {
    return q(C - -162, s);
  }
  return r[g(117, 103, "MxJi") + "sh"] = A, r;
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return IA(a - 928, I);
  }
  function e(a, g, I, C, s) {
    return IA(g - 965, s);
  }
  function A(a, g, I, C, s) {
    return IA(g - 260, C);
  }
  function o(a, g, I, C, s) {
    return IA(g - -614, C);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(A(634, 637, 624, "3FSH", 645)) / 1 + -parseInt(e(1363, 1354, 1365, 1359, "Apjz")) / 2 + parseInt(A(646, 638, 625, "U!G]", 627)) / 3 + parseInt(A(656, 645, 658, "qQP2", 656)) / 4 + parseInt(t(1299, 1296, "@kzp", 1292, 1301)) / 5 + parseInt(o(-247, -235, -240, "rbu$", -224)) / 6 * (parseInt(e(1352, 1352, 1346, 1347, "qE%7")) / 7) + parseInt(e(1358, 1356, 1364, 1352, "5J8Q")) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(on, -426241 * -3 + -1 * -564231 + -10236 * 89);
function IA(i, n) {
  i = i - 368;
  const t = on();
  let e = t[i];
  if (IA.GNHicN === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    IA.QxEsAJ = g, IA.rBFlqP = {}, IA.GNHicN = !0;
  }
  const o = t[0], r = i + o, a = IA.rBFlqP[r];
  return a ? e = a : (IA.aNWdiJ === void 0 && (IA.aNWdiJ = !0), e = IA.QxEsAJ(e, n), IA.rBFlqP[r] = e), e;
}
function NB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  function e(E, x, Q, l, f) {
    return IA(f - 863, Q);
  }
  const A = {};
  A[r(-11, -5, -22, -23, "W#Nf") + "le"] = t, A[r(-17, -16, -30, -10, "FE(U") + r(-18, -24, -6, -25, "wUw5") + o("#1@r", -327) + e(1257, 1263, "ey8Y", 1249, 1253)] = i;
  function o(E, x, Q, l, f) {
    return IA(x - -711, E);
  }
  function r(E, x, Q, l, f) {
    return IA(E - -391, f);
  }
  const { sunfish: a, crosshatch: g } = GB(A);
  function I(E, x, Q, l, f) {
    return IA(x - -864, l);
  }
  const C = pA(() => ({ sunfish: a, crosshatch: g, bramble: t }), [a, g, t]), s = {};
  function B(E, x, Q, l, f) {
    return IA(f - -313, l);
  }
  return s[I(-476, -471, -474, "@Fog")] = C, s[e(1234, 1239, "OW)M", 1227, 1231) + B(79, 66, 67, "UCRG", 69)] = n, w(An[r(-15, -18, -22, -9, "zLs9") + I(-490, -495, -503, "%XGg")], s);
}
function on() {
  const i = ["whRcSJrH", "WQaZoL0Fn8kwBmoWW4RdTv3cLG", "qaxdGNyA", "WPNdGMCSW7BdUSkSW6GgWOTKWRpdSq", "hxTBW5zWW6pcJ8oOW7nwW5ZcGSoh", "rgZcQ149WQpdKSkZ", "WPreWQBdU8kF", "s8khWR1OWRZcRdRcQrTLWP/dRCkL", "y8oVAa", "WPvpy8kUW7RcH8oVgvz8fSoIdq", "WORcUSoRWO4S", "WQ9VWOD/WO/dSutcI8oaWQCoiaa", "WOxdQmkdWODyn8kXl0mElJVdUa", "zCowu8ouWOdcJmkas8kLoSkAW5BcPW", "v8o/lHpcMmkfW6vWv2tdG8oLW5S", "CrtdMmkTWOldHhWZW73cIKldOqC", "W43cLCkFaW", "rmk2WPBcRqlcMIldIXzqW4/dOMC", "WR3dI8oAk2tcKwhdRCoiihJdTmkm", "wfddGSozpG", "tHbdWPpdVW", "W4mAjG", "tX3cRIpdGgtdKWldOZGcjdC", "tCoKWRrhWOBdIHpdPKnTmbjY", "WP4PcCoJW7HneSou", "W53dQmooWOBdUG"];
  return on = function() {
    return i;
  }, on();
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return OA(C - 552, g);
  }
  function e(g, I, C, s, B) {
    return OA(g - 333, s);
  }
  function A(g, I, C, s, B) {
    return OA(I - 235, C);
  }
  var o = i();
  function r(g, I, C, s, B) {
    return OA(C - 817, I);
  }
  for (; ; )
    try {
      var a = -parseInt(r(1114, "g9Wh", 1121, 1120, 1124)) / 1 * (parseInt(r(1133, "^C[C", 1127, 1140, 1127)) / 2) + -parseInt(t("vZTS", 865, 875, 865, 886)) / 3 * (parseInt(t("*D6o", 845, 857, 869, 863)) / 4) + -parseInt(e(650, 648, 662, "vZTS", 663)) / 5 * (parseInt(t("%@Q#", 870, 878, 871, 888)) / 6) + -parseInt(e(641, 641, 650, "J*rq", 648)) / 7 * (-parseInt(A(552, 554, "4$4#", 555, 549)) / 8) + -parseInt(t("Z6Ui", 874, 861, 858, 860)) / 9 * (parseInt(A(537, 546, "74Zs", 558, 557)) / 10) + -parseInt(e(647, 649, 656, "8h5h", 650)) / 11 * (parseInt(A(553, 550, "FM7q", 540, 557)) / 12) + parseInt(A(564, 553, "zZlJ", 559, 543)) / 13;
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(nn, 302009 + 1 * -63731);
function OA(i, n) {
  i = i - 304;
  var t = nn(), e = t[i];
  if (OA.NEONCB === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    OA.uQlSLB = o, OA.frrrHi = {}, OA.NEONCB = !0;
  }
  var r = t[7289 * -1 + 2 * 2746 + 1797], a = i + r, g = OA.frrrHi[a];
  return g ? e = g : (OA.TOGLja === void 0 && (OA.TOGLja = !0), e = OA.uQlSLB(e, n), OA.frrrHi[a] = e), e;
}
function nn() {
  var i = ["mdhcVCkue3eYDsaJFq", "W57dIJybfCo5zq", "W6uofh7cSLtcGNK", "W6u0qdHegSoYzvJdQY1CW4xcIG", "dCkuW4tcTfjTka", "EetcM3/cHJuo", "j8otASkZeSkWWR/dPSoAW45u", "FCkdFmo3WRj6WOhcQI8GcIi", "W6WoCWFdNcxcVNtcU8oBc2m", "eCoksZn2WP3cGCkuo8oBb8kIaMK", "kSkIkwldSu81WOxcG8oCWR4", "iCkMW7TMsmkpaCoqW5BdIx8j", "FIhdRJ7dRNXXgmkui3e2WPq", "wCkQWQpcJCoPESofW6Xm", "yCkUnaBcLSkjymoX", "W7JcRxpcICoZW4ldRv1uWQyK", "W7ddQHJdOIhcHgi", "E2BcN8khWRrHW4C", "pCoND3pdJmomFCkB", "WPNcRCofW6GZW556nSkcrIGvWQ0", "W4VcSCkBW74BuCkFWQu", "WPnhgmkWWO4JWRi", "W4FcJmobW5KdWRaPWOSVW43dLeK", "WRWyDZJdR8onF8oGWPvOmHG", "gmoosJz1WP/dJSoTd8oEf8kc", "wKDUW5hcVKy2WOVcHa"];
  return nn = function() {
    return i;
  }, nn();
}
const rn = Oe(void 0);
rn.displayName = "TransactionCountingContext";
function _r() {
  const i = xe(rn);
  if (i === void 0)
    throw new Error(`${rn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const RB = -4452 + -1322 * 1 + -23 * -338;
class FB {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), RB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 400 && a.status !== 401 : !0;
  }
}
class iI {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = n, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.3";
  }
  async init(n) {
    if (this.#t = this.shouldCountTransactions(n), Un.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), Tr()) {
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
class vB extends iI {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const He = {};
He.FACE = "web-capture-face", He.DOCUMENT = "web-capture-document", He.MAGNIFEYE = "web-capture-magnifeye", He.SMILE = "web-capture-smile", He.PALM = "web-capture-palm", He.EYEGAZE = "web-capture-eyegaze";
const _e = He, Zi = {};
Zi.LIVENESS = "liveness", Zi.CAPTURE = "capture";
const Fe = Zi, MB = { [_e.FACE]: Fe.CAPTURE, [_e.DOCUMENT]: Fe.CAPTURE, [_e.MAGNIFEYE]: Fe.LIVENESS, [_e.SMILE]: Fe.LIVENESS, [_e.PALM]: Fe.CAPTURE, [_e.EYEGAZE]: Fe.LIVENESS }, WB = MB;
class LB {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = WB[e];
    switch (A) {
      case Fe.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new iI(o);
      case Fe.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new vB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function OB(i, n) {
  const { crosshatch: t, bramble: e } = so(), [A, o] = z(null);
  J(() => {
    if (!t) return;
    (async () => {
      const g = new LB(), I = new FB(n), C = g.create({ hwids: e.getHwids(), tokenHandler: I, transactionType: i });
      await C.init(t), o(C);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function JB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = OB(t, n), A = pA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ w(rn.Provider, { value: A, children: i });
}
function UB({ children: i, value: n }) {
  const { crosshatch: t } = so(), { transactionCounting: e } = _r(), A = t?.isValid && e?.isTransactionTokenValid ? Xo.Higher : Xo.Lower, o = pA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ w(On.Provider, { value: o, children: i });
}
class YB extends $A {
  static contextType = On;
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
    return this.context?.appState === XA.ERROR ? null : this.props.children;
  }
}
const TB = Lt.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, PB = Lt.div`
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
function HB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const _B = is(
  ({ detectionDetails: i, isImageMirror: n }, t) => HB() ? (console.log(i), /* @__PURE__ */ w(MA, { children: [
    /* @__PURE__ */ w(TB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(PB, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), an = Oe(void 0);
an.displayName = "AnalyticsContext";
function rI() {
  const i = xe(an);
  if (i === void 0)
    throw new Error(`${an.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var KB = /* @__PURE__ */ Symbol.for("preact-signals");
function Yn() {
  if (ve > 3060 + -7 * 437)
    ve--;
  else {
    for (var i, n = !1; eo !== void 0; ) {
      var t = eo;
      for (eo = void 0, zi++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(6867 + 17 * 563 + -16430 & t.f) && II(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (zi = 2616 + -4 * 654, ve--, n) throw i;
  }
}
function aI(i) {
  if (ve > 1 * 5571 + -2378 + -3193) return i();
  ve++;
  try {
    return i();
  } finally {
    Yn();
  }
}
var L = void 0;
function Va(i) {
  var n = L;
  L = void 0;
  try {
    return i();
  } finally {
    L = n;
  }
}
var eo = void 0, ve = 0, zi = -2559 * -1 + 8440 + 10999 * -1, gn = 20 * 460 + -5575 + -3625;
function gI(i) {
  if (L !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== L)
      return n = { i: 0, S: i, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: n }, L.s !== void 0 && (L.s.n = n), L.s = n, i.n = n, -1 * 9515 + -4323 + 13870 & L.f && i.S(n), n;
    if (n.i === -1)
      return n.i = -2 * 2551 + 794 + 4308, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = L.s, n.n = void 0, L.s.n = n, L.s = n), n;
  }
}
function lA(i, n) {
  this.v = i, this.i = 6426 + -1 * 6429 + 3, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
lA.prototype.brand = KB, lA.prototype.h = function() {
  return !0;
}, lA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Va(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, lA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && Va(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, lA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", Ot(function() {
    var e = n.value, A = L;
    L = void 0;
    try {
      i(e);
    } finally {
      L = A;
    }
  }, t);
}, lA.prototype.valueOf = function() {
  return this.value;
}, lA.prototype.toString = function() {
  return this.value + "";
}, lA.prototype.toJSON = function() {
  return this.value;
}, lA.prototype.peek = function() {
  var i = L;
  L = void 0;
  try {
    return this.value;
  } finally {
    L = i;
  }
}, Object.defineProperty(lA.prototype, "value", { get: function() {
  var i = gI(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (zi > -7 * 336 + 4709 + -2257) throw new Error("Cycle detected");
    this.v = i, this.i++, gn++, ve++;
    try {
      for (var n = this.t; void (-118 + -6959 * 1 + -1 * -7077) !== n; n = n.x) n.t.N();
    } finally {
      Yn();
    }
  }
} });
function sI(i, n) {
  return new lA(i, n);
}
function II(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function cI(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function CI(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Ke(i, n) {
  lA.call(this, void 0), this.x = i, this.s = void 0, this.g = gn - (6727 + 1 * 7724 + -14450), this.f = -1 * 8566 + -6831 + 15401 * 1, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
Ke.prototype = new lA(), Ke.prototype.h = function() {
  if (this.f &= -3, 872 * -3 + -4483 + 20 * 355 & this.f) return !1;
  if (13 * -496 + 3297 + 3183 == (5095 + -2 * -827 + -959 * 7 & this.f) || (this.f &= -5, this.g === gn)) return !0;
  if (this.g = gn, this.f |= -3640 + -1 * -3641, this.i > 3132 + 3 * -1044 && !II(this)) return this.f &= -2, !0;
  var i = L;
  try {
    cI(this), L = this;
    var n = this.x();
    (6 * -623 + -6802 * 1 + 10556 & this.f || this.v !== n || 12 * 340 + 4888 + -8968 === this.i) && (this.v = n, this.f &= -(-9 * 565 + -8408 + -386 * -35), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return L = i, CI(this), this.f &= -2, !0;
}, Ke.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -1 * 9699 + 260 + 9475;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  lA.prototype.S.call(this, i);
}, Ke.prototype.U = function(i) {
  if (this.t !== void 0 && (lA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Ke.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= -7320 * 1 + -8256 + 15582;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Ke.prototype, "value", { get: function() {
  if (5119 * 1 + -3646 + -1472 & this.f) throw new Error("Cycle detected");
  var i = gI(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Za(i, n) {
  return new Ke(i, n);
}
function BI(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    ve++;
    var t = L;
    L = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= -2 * -3413 + 6387 + -13205, Kr(i), e;
    } finally {
      L = t, Yn();
    }
  }
}
function Kr(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, BI(i);
}
function jB(i) {
  if (L !== this) throw new Error("Out-of-order effect");
  CI(this), L = i, this.f &= -2, -3 * -3223 + -9448 + -213 & this.f && Kr(this), Yn();
}
function dt(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 2 * 1613 + -4355 + 1161, this.name = n?.name;
}
dt.prototype.c = function() {
  var i = this.S();
  try {
    if (-13172 + -3295 * -4 & this.f || this.x === void 0) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, dt.prototype.S = function() {
  if (-5187 + -4906 * -1 + 282 & this.f) throw new Error("Cycle detected");
  this.f |= 1728 + 1 * -6711 + 4984 * 1, this.f &= -9, BI(this), cI(this), ve++;
  var i = L;
  return L = this, jB.bind(this, i);
}, dt.prototype.N = function() {
  !(2 & this.f) && (this.f |= 1070 + 9 * 349 + -4209, this.o = eo, eo = this);
}, dt.prototype.d = function() {
  this.f |= -12702 + 1271 * 10, -9631 + -4031 * -1 + 1 * 5601 & this.f || Kr(this);
}, dt.prototype.dispose = function() {
  this.d();
};
function Ot(i, n) {
  var t = new dt(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var jr, oi, ho = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, QI = [], EI = [];
Ot(function() {
  jr = this.N;
})();
function ft(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function po(i) {
  oi && oi(), oi = i && i.S();
}
function xI(i) {
  var n = this, t = i.data, e = it(t);
  e.value = t;
  var A = pA(function() {
    for (var a = n, g = n.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -5195 * -1 + 6321 + -2 * 5756;
      break;
    }
    var I = Za(function() {
      var E = e.value.value;
      return E === 0 ? -2034 + -11 * -548 + -2 * 1997 : E === !0 ? "" : E || "";
    }), C = Za(function() {
      return !Array.isArray(I.value) && !vg(I.value);
    }), s = Ot(function() {
      if (this.N = dI, C.value) {
        var E = I.value;
        a.__v && a.__v.__e && -9 * -853 + 3128 * 1 + -10802 === a.__v.__e.nodeType && (a.__v.__e.data = E);
      }
    }), B = n.__$u.d;
    return n.__$u.d = function() {
      s(), B.call(this);
    }, [C, I];
  }, []), o = A[8856 + -13 * -542 + -2 * 7951], r = A[-5232 + 1 * 9008 + -3775];
  return o.value ? r.peek() : r.value;
}
xI.displayName = "ReactiveTextNode";
var Xi = {};
Xi.configurable = !0, Xi.value = void 0;
var $i = {};
$i.configurable = !0, $i.value = xI;
var Ar = {};
Ar.configurable = !0, Ar.get = function() {
  var i = {};
  return i.data = this, i;
};
var er = {};
er.configurable = !0, er.value = 1;
var Pt = {};
Pt.constructor = Xi, Pt.type = $i, Pt.props = Ar, Pt.__b = er, Object.defineProperties(lA.prototype, Pt), ft("__b", function(i, n) {
  if (ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof lA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), ft("__r", function(i, n) {
  if (ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== MA) {
    po();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return Ot(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 5 * 481 + 9954 + -12358, e.setState({});
      }, o;
    })())), po(t);
  }
  i(n);
}), ft("__e", function(i, n, t, e) {
  ho && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), po(), i(n, t, e);
}), ft("diffed", function(i, n) {
  ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), po();
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
        var I = o[g], C = e[g];
        I === void 0 ? (I = qB(t, g, C, A), o[g] = I) : I.o(C, A);
      }
    }
  }
  i(n);
});
function qB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = sI(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: Ot(function() {
    this.N = dI;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[4] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
ft("unmount", function(i, n) {
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
}), ft("__h", function(i, n, t, e) {
  (e < 1 * 9727 + 7835 + -17559 || -1868 + -13 * 347 + 6388 === e) && (n.__$f |= -1777 * -5 + 8358 + -17241), i(n, t, e);
}), $A.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 4 & this.__$f) || 396 * -19 + 3581 + 3944 & this.__$f) return !0;
  } else if (!(e || 4 & this.__$f) || -2 * 2219 + 7123 * 1 + -2682 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function it(i, n) {
  return z(function() {
    return sI(i, n);
  })[1150 * -4 + -4242 + 4421 * 2];
}
var VB = typeof requestAnimationFrame > "u" ? setTimeout : function(i) {
  var n = function() {
    clearTimeout(t), cancelAnimationFrame(e), i();
  }, t = setTimeout(n, 35), e = requestAnimationFrame(n);
}, ZB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function zB() {
  aI(function() {
    for (var i; i = QI.shift(); ) jr.call(i);
  });
}
function XB() {
  -5457 + -2 * -2729 === QI.push(this) && (R.requestAnimationFrame || VB)(zB);
}
function $B() {
  aI(function() {
    for (var i; i = EI.shift(); ) jr.call(i);
  });
}
function dI() {
  -10934 + 405 * 27 === EI.push(this) && (R.requestAnimationFrame || ZB)($B);
}
function AQ(i, n) {
  var t = bA(i);
  t.current = i, J(function() {
    return Ot(function() {
      return this.N = XB, t.current();
    }, n);
  }, []);
}
function eQ({ analytics: i, crosshatch: n }) {
  if (!Tr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function tQ({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = eQ(o), a = it(t);
  return a.value = t, J(() => {
    r && (Un.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(n, A.getCustomerName(), a));
  }, [r, A, n, e, a]), r;
}
function oQ({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = so(), { redfin: o } = de(), r = tQ({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), a = pA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ w(an.Provider, { value: a, children: t });
}
const sn = Oe(void 0);
sn.displayName = "CameraServiceContext";
function lI() {
  const i = xe(sn);
  if (i === void 0)
    throw new Error(`${sn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function uI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ni() {
  return (await uI()).filter((n) => n.kind === "videoinput");
}
function yt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function tr(i) {
  return i.getVideoTracks()[-1292 * -5 + -6981 + 521];
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return fA(g - 147, I);
  }
  function e(a, g, I, C, s) {
    return fA(C - 909, g);
  }
  function A(a, g, I, C, s) {
    return fA(I - -933, g);
  }
  const o = i();
  function r(a, g, I, C, s) {
    return fA(C - -599, I);
  }
  for (; ; )
    try {
      if (parseInt(A(-745, "pD2d", -751, -729, -747)) / 1 * (-parseInt(t(303, 319, "xmmT", 329, 332)) / 2) + parseInt(t(330, 352, "8Wul", 339, 375)) / 3 * (parseInt(t(341, 328, "U&BJ", 315, 334)) / 4) + parseInt(r(-409, -391, "8Wul", -408, -410)) / 5 + -parseInt(r(-380, -419, "!Kcp", -400, -413)) / 6 * (-parseInt(e(1084, "jNdj", 1092, 1096, 1098)) / 7) + parseInt(r(-381, -384, "o7JA", -393, -389)) / 8 * (-parseInt(t(379, 357, "K8cn", 357, 370)) / 9) + parseInt(r(-406, -430, "upqU", -422, -415)) / 10 + parseInt(r(-385, -388, "2TfI", -406, -385)) / 11 * (-parseInt(t(356, 348, "#Neg", 339, 331)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(In, 120395 + -55210 * 11 + 1480528);
function In() {
  const i = ["e8onW7RcOSou", "s8ozyfFdQb4kc8ohW7XLiCoF", "F2hcK8kdWR3dQZTAirX+WQxcLq", "WO/dSLBdQ8o+", "WONcH8onWOxdJG", "kYiSWR19", "WOhcKmoBW5VdTq", "ns7cLsCEW5CPp8kzfhNcVSoscW", "eZPpWOFcMwdcO8kWucJdRf94", "W5ddLmoqWQNdRgtcSe0", "W7VcTmkNA8oa", "xHLLW4dcPM7cHwtdVYbsu8oj", "WRNdMCkmWP4ntNO", "W5dcH8kFWRy+", "WPNcPmobWQnF", "xLSYWOxdGtldOa", "WOhdNSopW7bovSkHp8kTF8kMWOXi", "WORcSInMiuNcH1iuDJxcKa", "WP7dP3HsW4tcGSoRzmoRW5JcJZu5W4O", "WQPPW785WQlcGSosW5BdNmo5WPZcHmoWW7C", "WO3cM8oCW6/cQSouBq", "smoyyvFdQXSipmoyW5H7mSo6", "W5pcRM4kW5q", "EmkREqzUW48rWR/cSbpdUeJdOCkp", "tM0zW7ldMq", "jSo3jhaP", "W4pcNKiOW5q", "WO4OWQ/cLcxcVLbJpW5DW4S", "WRHwp8kYtCo/aq", "WOSKWQhdOutdQ1XfjG", "rSk4W5SUca", "DSk5FczWvSkAlW", "W5NdGCkfWOJcT0ddPmkSW5yBW6tdNCk4", "iCo5Fcr+", "grBcN1RcQW", "sCkjgWtcJh9/", "ys4VWPflj2G", "q0rGCa", "W6BcU8kj", "zCkTWOXoW70", "bwW5eXTxWRr7FSocWQ8+yW", "iZe+WRfD", "WR/cKHBdI8oHt8kgDc0", "W5xcPZWFWRe", "hmoaW7xcT8oJ"];
  return In = function() {
    return i;
  }, In();
}
function fA(i, n) {
  i = i - (-865 + -7457 * -1 + -6421);
  const t = In();
  let e = t[i];
  if (fA.uOKAFO === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    fA.OTCRpl = g, fA.CADInG = {}, fA.uOKAFO = !0;
  }
  const o = t[3 * 2617 + -719 * -2 + -9289], r = i + o, a = fA.CADInG[r];
  return a ? e = a : (fA.YanLqo === void 0 && (fA.YanLqo = !0), e = fA.OTCRpl(e, n), fA.CADInG[r] = e), e;
}
function nQ(i) {
  const n = new ArrayBuffer(i[r(495, "GSno", 468, 480) + "h"]), t = new Uint8Array(n);
  for (let a = -4478 + -271 * 35 + 13963, g = i[o(-125, -144, -133, "1MUD") + "h"]; a < g; a++)
    if (e(1082, "DwIe", 1095, 1087) !== r(446, "psKC", 477, 458)) t[a] = i[e(1087, "I1eg", 1091, 1090) + A(-663, "2TfI")](a);
    else {
      const I = new _0x66ec61(_0x4d379e[o(-137, -155, -175, "22!h") + "h"]), C = new _0x34e3cf(I);
      for (let s = 3876 + 29 * 334 + 6781 * -2, B = _0xfee1f4[A(-682, "@WVg") + "h"]; s < B; s++)
        C[s] = _0x5da7cd[e(1098, "psKC", 1110, 1103) + o(-123, -134, -140, "au5J")](s);
      return I;
    }
  function e(a, g, I, C, s) {
    return fA(C - 907, g);
  }
  function A(a, g, I, C, s) {
    return fA(a - -858, g);
  }
  function o(a, g, I, C, s) {
    return fA(g - -328, C);
  }
  function r(a, g, I, C, s) {
    return fA(C - 266, g);
  }
  return n;
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return _(s - 252, C);
  }
  function e(a, g, I, C, s) {
    return _(I - 966, g);
  }
  const A = i();
  function o(a, g, I, C, s) {
    return _(a - 846, s);
  }
  function r(a, g, I, C, s) {
    return _(s - 839, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(1430, "P1JI", 1409, 1425, 1412)) / 1 + -parseInt(e(1463, "bUQq", 1456, 1449, 1429)) / 2 * (-parseInt(o(1287, 1300, 1294, 1300, "%5jI")) / 3) + -parseInt(o(1321, 1313, 1307, 1344, "7Kl4")) / 4 * (parseInt(r(1311, 1301, 1306, "Y6^1", 1321)) / 5) + -parseInt(o(1285, 1316, 1313, 1293, "uCmh")) / 6 + -parseInt(e(1432, "jC#h", 1435, 1422, 1437)) / 7 * (-parseInt(t(721, 717, 737, "bUQq", 737)) / 8) + -parseInt(e(1476, "bUQq", 1460, 1453, 1467)) / 9 + parseInt(o(1323, 1292, 1315, 1306, "AVsT")) / 10 * (parseInt(t(707, 689, 702, "]K4U", 707)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(cn, 616666);
async function iQ() {
  const i = {};
  i[n("WRFm", 115, 94)] = _s, i[n("IbLF", 69, 78) + "h"] = 256;
  function n(C, s, B, E, x) {
    return _(B - -364, C);
  }
  function t(C, s, B, E, x) {
    return _(C - -234, E);
  }
  const e = await window[n("FCgs", 113, 109) + "o"][I(1028, 1049, "$*^L") + "e"][g(1169, 1143, 1190, 1168, "#*3a") + I(1007, 1033, "rLyk") + "y"](i, !0, [g(1144, 1144, 1134, 1163, "sH(z") + "pt", t(220, 251, 195, "UCG!") + "pt"]);
  function A(C, s, B, E, x) {
    return _(E - -85, s);
  }
  const o = Uint8Array[n("75h%", 106, 127)](Array(380 + -3 * 2993 + 8615)[A(343, "L0s1", 357, 353)](-2624 + -3326 * 1 + 5950)), r = window[A(363, "]gi3", 372, 362) + "o"][I(1040, 1056, "t&zs") + A(354, "AVsT", 351, 359) + A(376, "FCgs", 375, 366)](o), a = {};
  function g(C, s, B, E, x) {
    return _(E - 671, x);
  }
  function I(C, s, B, E, x) {
    return _(C - 545, B);
  }
  return a[t(250, 248, 250, "U#)v")] = e, a.iv = r, a;
}
function _(i, n) {
  i = i - (6733 * -1 + -866 + 8035);
  const t = cn();
  let e = t[i];
  if (_.qfKPUJ === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    _.PPJbDd = g, _.jVRtty = {}, _.qfKPUJ = !0;
  }
  const o = t[1217 * 1 + 293 * 5 + -2682], r = i + o, a = _.jVRtty[r];
  return a ? e = a : (_.jaZnDV === void 0 && (_.jaZnDV = !0), e = _.PPJbDd(e, n), _.jVRtty[r] = e), e;
}
async function rQ(i) {
  const { iv: n, key: t } = await iQ(), e = new Uint8Array(i), A = {};
  function o(E, x, Q, l, f) {
    return _(x - -144, f);
  }
  A[s("]K4U", 1175, 1177, 1173, 1176)] = _s, A.iv = n;
  const r = await window[s("t&zs", 1214, 1188, 1174, 1189) + "o"][C(90, 85, 108, 86, "75h%") + "e"][B(63, 32, "FCgs") + "pt"](A, t, e);
  function a(E, x, Q, l, f) {
    return _(E - -943, f);
  }
  const g = await window[C(38, 25, 29, 19, "tOKK") + "o"][C(52, 49, 24, 33, "P1JI") + "e"][o(348, 320, 313, 336, "#qhd") + o(314, 337, 318, 343, "%5jI")](a(-471, -456, -447, -488, "qP%S"), t), I = {};
  I[C(54, 48, 54, 68, "%5jI") + "ge"] = r;
  function C(E, x, Q, l, f) {
    return _(E - -398, f);
  }
  I[a(-472, -459, -470, -495, "p7*s")] = g;
  function s(E, x, Q, l, f) {
    return _(f - 730, E);
  }
  I.iv = n;
  function B(E, x, Q, l, f) {
    return _(x - -425, Q);
  }
  return I;
}
async function aQ(i) {
}
function cn() {
  const i = ["z8osaSkZW5RcUSk2WRfXl1BcVeu", "rwitW7xcSq", "W6rsW6ddOLddV0RcHSo2yq", "jhFcSCka", "DclcIW93", "BSoUW4RcSmkSWPHqW47dHKFdJG", "owpcVSkrDW", "jCkxv8oYWOa", "WRmiWQhcS3q", "gSoFBWxdIW", "iCkCrxu", "bCkiWQRcTCk0", "FcddQmortmond1Svpq", "WQvSAh0", "WRCkWRFcPh4", "W7RdMIev", "mq/cRGpdPq", "F2ZcKSkmDSocmG", "eCoDW7PcW5L/g8k7k8kS", "WO85WOJdQeG", "W6nwW6BcGu7dLeFcGSoU", "mmkVugpdGq", "tMGFW6RcNG", "W6BdMJS", "sCkAW6CKaSk1W6hdTNvChetcTq", "W6zlFJVdJW", "hCkSWRpdMmo1WQxdLmohyq4", "oSo2ra/cRW", "ACoLW4m", "At5x", "WRewWQ3cPNm", "qs7cTSkL", "W6lcGCoReZ9CsqxdUCoXDWG", "eCkGeXpdJa", "hZvpWQ/dL03dTSk+WQNcQ3C", "omkdwmoJ", "CCo1W5GUW6K", "W6VdKsio", "a8oXEq8", "W75nAZ3cRwbj", "sN5cWPGd", "s8knWRi", "suj2WRDZpSk0t14HkG", "EZxcNbH3", "BmoQW4pcUCkHW4fRW63dOL3dVZ0", "W6lcMmoYWPau", "i2pdGuGZWQLvud13rG", "suj0W5GceSkrw2C", "W7FcN8o/WOK", "WR4EEeCi", "W6jgiGzdWOmclmkpW7XfBdy", "quz/WRX5z8oODfSMi8oAW5i", "nrJcOYhdSa", "qdNcMSkutWuxv05q", "u8oYW5VdHvC", "FeLKWOLA", "W6bxzctdNW", "W6lcGSkJhq", "q8kXq8osWP3cVmoCbMjfueNcLW", "W7uOmcRdKfydWR/cTIDWuHW", "t8kik0hdRmk2WQZdMahcOW", "m8k5WPtdR8oG"];
  return cn = function() {
    return i;
  }, cn();
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return oA(B - 467, C);
  }
  function e(g, I, C, s, B) {
    return oA(B - -111, I);
  }
  const A = i();
  function o(g, I, C, s, B) {
    return oA(g - -597, I);
  }
  function r(g, I, C, s, B) {
    return oA(s - 752, B);
  }
  function a(g, I, C, s, B) {
    return oA(s - 550, g);
  }
  for (; ; )
    try {
      if (-parseInt(e(219, "gUA5", 189, 253, 233)) / 1 + parseInt(t(884, 795, "%R3S", 823, 838)) / 2 * (parseInt(e(304, "y@rb", 309, 305, 271)) / 3) + parseInt(a("1Gd$", 966, 878, 927, 885)) / 4 * (-parseInt(r(1173, 1111, 1130, 1145, "GZLi")) / 5) + parseInt(e(283, "BPho", 276, 332, 300)) / 6 * (parseInt(e(202, "K9fu", 243, 206, 234)) / 7) + -parseInt(t(792, 842, "1Gd$", 800, 795)) / 8 * (parseInt(o(-235, "Rruq", -277, -286, -285)) / 9) + -parseInt(r(1143, 1129, 1129, 1105, "@A8Y")) / 10 * (parseInt(o(-200, "v*I9", -174, -209, -248)) / 11) + -parseInt(e(250, "(O3j", 306, 292, 284)) / 12 * (-parseInt(e(345, "*6fd", 289, 337, 298)) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Bn, 506005);
const za = 8534 * -1 + -5269 + 17 * 959;
function rA(i, n, t, e, A) {
  return oA(e - -463, n);
}
function hA(i, n, t, e, A) {
  return oA(t - -676, i);
}
const Xa = -6579 + 10079 * 1, fI = -9993 + 359 * -7 + 12508, hI = -15 * -411 + -5366 + -799 + 0.5, pI = {};
pI[ZA("zTnA", 1139, 1182, 1209, 1158)] = 1920;
const yI = {};
yI[ZA("kmav", 1077, 1101, 1146, 1118)] = 1080;
const mI = {};
mI[GA("f6!H", 742, 790, 763, 791)] = 30;
const Oo = {};
Oo[rA(-166, "S1m2", -121, -128)] = pI, Oo[GA("ylqC", 752, 714, 753, 715) + "t"] = yI, Oo[ZA("ojwa", 1115, 1114, 1070, 1083) + rA(-170, "f6!H", -89, -133)] = mI;
const wI = {};
wI[GA("1Gd$", 721, 723, 755, 759)] = 1920;
const DI = {};
DI[QA(1126, 1138, 1105, "y@rb")] = 1080;
const Jo = {};
Jo[rA(-57, "kmav", -95, -65)] = wI, Jo[hA("ylqC", -356, -340) + "t"] = DI, Jo[GA("KQUe", 781, 748, 798, 755) + QA(1219, 1225, 1247, "j%q0")] = 30;
const bI = {};
bI[hA("%R3S", -283, -289)] = 1;
const kI = {};
kI[rA(-163, "MioK", -66, -117)] = 1;
const SI = {};
SI[rA(-118, "j%q0", -102, -77)] = 1;
const Cn = {};
Cn[QA(1136, 1150, 1167, "EFOl")] = bI;
function GA(i, n, t, e, A) {
  return oA(A - 379, i);
}
Cn[rA(-113, "wGcq", -107, -107) + "t"] = kI, Cn[GA("wGcq", 703, 747, 776, 733) + QA(1168, 1143, 1168, "GOqM")] = SI;
const GI = {};
GI[QA(1205, 1219, 1216, "gSQ&")] = 1;
const NI = {};
NI[ZA("4j1z", 1075, 1098, 1065, 1089)] = 1;
const RI = {};
RI[rA(-57, "!]ew", -70, -71)] = 1;
const Uo = {};
Uo[rA(-32, "j%q0", -100, -79)] = GI, Uo[rA(-130, "1Gd$", -186, -134) + "t"] = NI, Uo[ZA("13MQ", 1137, 1139, 1140, 1132) + rA(-83, "u]RC", -95, -95)] = RI;
const to = {};
to[rA(-94, "ZnwH", -115, -88)] = Oo;
function QA(i, n, t, e, A) {
  return oA(i - 802, e);
}
to[hA("S1m2", -285, -297) + hA("j%q0", -292, -270)] = Jo, to[GA("dAzs", 831, 756, 803, 803)] = Cn, to[GA("wxCm", 788, 788, 725, 764) + QA(1201, 1205, 1227, "u]RC")] = Uo;
function Bn() {
  const i = ["WO/dVSoaugW", "BHlcImkW", "vq1FW5dcRa", "xsNdHLxcSSkbn8obW6BdHv3cV0O", "W6BcLCkUsmo3", "aXrqW4hdUW", "mGrEWPRcLW", "WR3cNmk0W644", "WPBcNSoNzG", "W4NcOSk1W63dIa", "DxhdGa", "W7bKr8ofW6lcG2rlW516", "y8o8WO7dGey6WRi", "mCo5WOtcU8kD", "EmkfoConW7C", "q0eMW5bqW6tdUmk8z1erWQi", "WPRdUSoTWRhcMvtcGmo0WQ4bkJZcIa", "iNldMSo0W50", "W7rHjW", "ASkytSoaWRdcSXS", "tX7cQCk1", "FwtdGmkF", "WOJcK8oWrxS", "W5iik3mQW4HnW63dJmoAW7H/gW", "W7TJtSkxW67cIgfgW5a", "WO1kEIz+", "pbGVa8kD", "WOnDCIXZ", "DSoOgw9J", "z8onW63cIca", "pSoGC8kgbG", "bapdICodiq", "D2RdHa", "eCk3hSotW6H+xW", "WQ/dSWDiWRJdThyYWPZdVIZcJW", "W7ZdJ8kx", "pSoGrCkshq", "W4NcQ0Cy", "xCkeA8krW6X3ySkuW77cUW7cNuK", "E1LjW4u", "DuBdHSkFWOq", "lHyX", "yK5ZdSkxA8oXWQOR", "W6pcJeP/WQfQWOhcTW", "ksCBjGC", "W6hcK8kMsSo8", "dNhcGre", "W4BdTfJdT3K", "W5pcQ8kqbvpcSSkXBbhcLq", "WOVdN8oLDCog", "nGXCWOVcUq", "WO7dV8omvMG", "rLldPSkTAq", "w8khy8ktWRefp8kvW4BcMG", "bq18WQqo", "oSo9u8khha", "r1ldTmkHvq", "kmoSvSkqaa", "pWeIdmkl", "W6z+ph8", "dqFcQSo9mv4kaHZdGxy", "yuhdVSkLWRu", "W58iiNLmWOOHW53dMCoQ", "oCoPWOJcTCkF", "WQqKzJ1RW5OsW6jlAa", "g8o5WQ3dPLG", "BSo+ymoiWPZcTG9G", "CfddVmklWRS", "BSkKW67dNCoXW6/dVCk5pCk6WR0", "fHldJmoupq", "rvDk", "WRtdGfnqWRm", "g2tcGatdQa", "A092wSk5tSoaWOmsdG", "FSoUe3X7", "W7tdOmoQW6ZcJa", "W5xdH8oFiMC", "lmoNqW", "WPtdR8oTqNy", "WOvlBZL6", "iJxcG8otW5OfW7XPW7RdMCk6W7NcLq", "kmoMWPRdReq", "WQpdKCoxW6VcQCoMBq", "wqVcNCk2fG", "tHlcImk8dq", "WOpcLmooCh0", "W4dcTSk3W7u", "kmkLAG", "h8o1q8kw", "WPBdK8oiBG", "BmkweCoOW6e", "W7OJWQKBW7D8bY/cJa", "bfWkW5lcQmkJWOxcJ3y", "WQhdILTEWQy", "o8o9WRBdSv4", "WRf4W7yn", "zCo/gfLI", "W7TrjNXc", "aCorp8odWRK", "pmoTWRJdRK8", "nH5MWOar", "uqHcW6xcPq", "W5lcQSkybd3dS8owtalcLhXbW70"];
  return Bn = function() {
    return i;
  }, Bn();
}
function ZA(i, n, t, e, A) {
  return oA(A - 758, i);
}
const Qn = to, je = {};
je[hA("Ncuc", -286, -325) + hA("j%q0", -346, -317) + QA(1135, 1159, 1168, "13MQ")] = za, je[hA("&zCa", -272, -286) + GA("pOPU", 721, 742, 730, 757) + GA("j%q0", 712, 727, 707, 744) + QA(1141, 1188, 1130, "*6fd")] = Qn[QA(1152, 1112, 1175, "*6fd")], je[hA("K9fu", -348, -338) + ZA("&zCa", 1119, 1201, 1105, 1154) + QA(1207, 1197, 1189, "CZ#A") + rA(-93, "eS*o", -165, -114)] = Qn[hA("!@$w", -305, -318) + rA(-83, "GZLi", -152, -116)], je[GA("gUA5", 766, 767, 805, 762) + GA("pOPU", 820, 843, 788, 797)] = fI, je[rA(-34, "gSQ&", -5, -38) + QA(1215, 1173, 1251, "f6!H") + QA(1125, 1093, 1147, "GZLi") + ZA("MzzB", 1056, 1144, 1066, 1101) + GA("%R3S", 721, 704, 724, 749)] = hI, je[QA(1225, 1262, 1259, "ojwa") + hA("gUA5", -385, -350) + "Ms"] = za;
const qe = {};
qe[rA(-150, "4j1z", -105, -136) + hA("1Gd$", -247, -269) + QA(1144, 1105, 1102, "!]ew")] = Xa, qe[GA("zTnA", 753, 812, 759, 801) + QA(1212, 1264, 1167, "ojwa") + hA("ZnwH", -253, -275) + hA("tqo!", -293, -312)] = Qn[rA(-26, "GZLi", -111, -75)], qe[hA("%R3S", -289, -321) + QA(1206, 1163, 1212, "BPho") + rA(-31, "wGcq", -92, -55) + hA("eS*o", -334, -327)] = Qn[ZA("@U85", 1111, 1106, 1107, 1131) + rA(-89, "*6fd", -134, -102)], qe[GA("gUA5", 766, 751, 762, 762) + ZA("K9fu", 1146, 1130, 1151, 1173)] = fI, qe[rA(-78, "MzzB", -9, -44) + ZA("wxCm", 1109, 1186, 1135, 1139) + GA("*6fd", 794, 774, 751, 748) + ZA("Ncuc", 1166, 1184, 1190, 1172) + hA("(O3j", -277, -260)] = hI, qe[ZA("gSQ&", 1118, 1121, 1113, 1115) + QA(1196, 1177, 1231, "ojwa") + "Ms"] = Xa;
const or = {};
function oA(i, n) {
  i = i - (-3752 + -4271 * 2 + 12617);
  const t = Bn();
  let e = t[i];
  if (oA.IFrsZJ === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    oA.WbadCj = g, oA.VBMkXC = {}, oA.IFrsZJ = !0;
  }
  const o = t[9 * 446 + 3688 * 1 + -3851 * 2], r = i + o, a = oA.VBMkXC[r];
  return a ? e = a : (oA.lWYrRH === void 0 && (oA.lWYrRH = !0), e = oA.WbadCj(e, n), oA.VBMkXC[r] = e), e;
}
or[QA(1177, 1213, 1127, "ZnwH")] = je, or[hA("Ncuc", -383, -339)] = qe;
const gQ = or;
(function(i, n) {
  function t(g, I, C, s, B) {
    return nA(C - -461, g);
  }
  function e(g, I, C, s, B) {
    return nA(B - 888, C);
  }
  function A(g, I, C, s, B) {
    return nA(I - 745, g);
  }
  function o(g, I, C, s, B) {
    return nA(s - -349, g);
  }
  const r = i();
  function a(g, I, C, s, B) {
    return nA(I - -825, C);
  }
  for (; ; )
    try {
      if (parseInt(a(-272, -260, "ang1", -265, -224)) / 1 + parseInt(a(-136, -214, "m$&a", -183, -215)) / 2 * (parseInt(e(1369, 1520, "W$yL", 1448, 1424)) / 3) + parseInt(e(1447, 1419, "slTS", 1493, 1415)) / 4 * (parseInt(o("D2yF", 137, 105, 118, 150)) / 5) + -parseInt(o("WUHa", 250, 138, 165, 214)) / 6 + -parseInt(a(-334, -247, "pFHu", -238, -234)) / 7 * (-parseInt(o("iH5J", 257, 287, 215, 227)) / 8) + -parseInt(t("9gEa", 124, 131, 144, 229)) / 9 * (-parseInt(a(-378, -299, "FFP*", -334, -269)) / 10) + -parseInt(A("3Qk@", 1291, 1385, 1216, 1290)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(En, 13 * -5447 + -618528 + 1189833);
function En() {
  const i = ["WR3dHgONW48", "WR/cPmo4", "wmoTd8oAea", "W47dOq/cKmoc", "jYypW7hcVW", "WQLUWRSgWR0", "F8omW7xdISo+", "WQTVWRezWQW", "C8otW6/dVCoV", "nCktWOxdRvu", "B8k1W47dGCkG", "zd3cPW", "W6tdIMJdK8kj", "WRaUW7dcMJi", "W5tcQ0byW7i", "CCkvWOJdSSkY", "fGxcJ20Q", "vCo5WP7cMmk3", "lCkGWQBdTvy", "pCkjWP7dRa", "WQVdM08HWOW", "WRqgW5K", "W5FdKIvpWRC", "CCk1iL0", "DerOW57dMa", "W6pdLCkKWOZdNMtcTbxdSmoZWQ0D", "WP7dQaJcTSkn", "qCo9WPxcI8kl", "y8kMmeaz", "WPhcPmo6W5hcOa", "qmkHW6RcKee", "xZZcS8kFlG", "W5JdKvbIWQS", "W7fjme/cSa", "wt3cH8kOaW", "h2tdP8odoYibW4SmyG", "CCoStCojWPK", "A8o9WQ/dQai", "eblcOq3cNq", "v8o9W4S", "W60KESoZW50", "W6bCiKFcPW", "fgldOSk+ocGtW7aE", "Dr4O", "WQ9oWQub", "WQ5yASoDWQu", "WRJdJKK9WRa", "WQ/dQmooW5VdVG", "owRdT2JdUa", "faVcHZW", "kgZcUCoLWQW", "txxdVtnTW4hdI18DrSkCoa", "BmozDCoaWRa", "xSo0amofeq", "Crq0Cq", "zCoJWR/dGai", "pM7cUCo7WQ0", "FCo9umoCWRq", "mCkrWOVdS2G", "FrmPySoa", "oCkcWPJdVLm", "W643W5G3W5S", "WOlcPCo7W7dcGq", "WRBdOXifmSoalCkbqCkhg8ko", "W7FdN27dJ8k1", "W6yNW4qXW5S", "W4xdGKTiWR0", "WR7cMmoUW5JcNa", "e8kNiZiM", "r8oSWO7cUSkI", "vmo7WPVcKmkT", "t8oUamoIaa", "FSoQW5RcMJpdPda9DdvgW5Gh", "WPJdPSojW4tdUq", "DCokW6ddOSoU", "zJFcVSoakq", "lCkRiduM", "WOtcLbCvW7NdG2G3W4BdRCkpDq", "Fr8IFmor", "WRLwBCocWQi", "qmk9W6ZcJvO", "omk5WOVdGh8", "kxNcSCo5WQW", "WQj5WPafW4G", "m8kGW7VdIXioWQ7cTCkw", "saNcJh0SWRZdKW", "W7JcTfO", "WR/cM8o9W5xcNq", "WQHuySoFWRu", "WPRdLZJcO8ku", "WQ7dRfiWW5C", "vCkQW6ZcHeC", "x8kJW5hdGSkF", "l8kJW6dcKwO", "W6O8W6HUvCoXWQpcVmoJ", "WQLvBmog", "zmkGa0Wu", "WP7dPSojW4BdVG", "W5tcTSkwWPRcVCoOemkZW4NcNmknumoi", "sCo6WRxcJ8kM", "i8ocW5xdT8kPWR8pACk+", "W5FdRsa", "WRNdU1OYW5y", "WQGiW4CDha", "WO/dTrGzWRfOr8kVA1fgWPBcQq", "WRZdHxm/WOy", "W7zypudcSa", "WOlcPCo7W7FcJq", "WOtcSCo8W4/cMW", "WONdVWdcTmkm", "C8o4pcXk", "W4ddKsPWWQS", "wCoGW5PhW5q", "W4BdKwNdKSk1", "oK3cNSotWP8", "pMRcQSo4WQO", "esJcUwOF", "aCk4is4M", "jZWuW4VcVG", "WQnQWOCaW54", "W67cJMX0qW", "WQe9W6VcMtm", "WRnNWOqIW4JdU8omWOJdGa", "W6LCWP1ax8oeWRtdVmkKgCokW6i", "WRVcMCoZW4VcOa", "BCoWkCk/WRW", "fmo6WQZcKe/cV8oGWOlcGW", "WQ93WRqzWRW", "WPHyFSkUha", "vCoZfY1m", "lgxdUMJdRG", "v8kYW7hdHSko", "ECoNs8oTWP0", "d8k+mbGI", "ztykESo/", "ccJcUwOU", "W7VcLXzRW7mVW5/cUaLBW7VdNW", "gqlcU38Z", "WQRdRfCRW4i", "WOtcTCoNW4lcNa", "WRnwBq", "F8osW7i", "W5RdHfzbWQS", "CCosW6xdOSo+", "zmo5pmoRwW", "WRRdILi1WQS", "hYlcPxGU", "FJpcUCollG", "W4tdQtRcHCoW", "WRHyFSkUha", "W7n2WQ3dHNBdJ3pdJ0tcP8kb", "FevI", "qSo2oZfk", "Eqm0F8og", "cHNcMdhcMG", "W6RdJNpdPCkK", "W61woG", "WRlcHZpcKCo2WOL/WONdNmkUua", "W6RcRuTCCq", "WOBcLNWxW7PktJ0kWQHRW4pcJW", "imkDWPtdL2K", "ChBcVNdcKG", "ebFcMZRcGq", "W6WHW4iIW44", "W6NcTfH1zq", "iNVdQKddRG", "WP/dOSouW6VdPq", "eb/cNtJcOa", "grxcLCkhoXyi", "W67cUa5SW5xcT0ldGbpdGG", "ymkBWO/dR8kY", "WQu5W7ZcHca", "uSoRgSoYaa", "dIZcOMuU", "W5xdPf9keG", "wCo+W50", "W6TjigRcOq", "rK3cVghcMG", "tcxcT8kYla", "WPRdSa3cTSkD", "A8oNWQtdTI8", "WPtdRH3cNSkD", "j8k9WPddIw4", "rSoqW5pdMCoJ", "CSkNjeud", "BCoYi8k/WPu", "W5xdHejjWRW", "W5NcO0joW48", "W4qXqmoMW5K", "W4pdGe1kWR0", "FSoYWQldQbq", "DSk6nuus", "WR52WQL3sa", "W4ZcTerdCa", "F8k4WOFdLCkd"];
  return En = function() {
    return i;
  }, En();
}
function RA(i, n, t, e, A) {
  return nA(i - 694, e);
}
function mA(i, n, t, e, A) {
  return nA(i - -761, e);
}
function ae(i, n, t, e, A) {
  return nA(e - -378, i);
}
function YA(i, n, t, e, A) {
  return nA(t - 749, n);
}
function nA(i, n) {
  i = i - (9085 + -1 * -7297 + -15947);
  const t = En();
  let e = t[i];
  if (nA.jJXsKA === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    nA.FbcXDd = g, nA.jBAtoi = {}, nA.jJXsKA = !0;
  }
  const o = t[0], r = i + o, a = nA.jBAtoi[r];
  return a ? e = a : (nA.XqioyA === void 0 && (nA.XqioyA = !0), e = nA.FbcXDd(e, n), nA.jBAtoi[r] = e), e;
}
function he(i, n, t, e, A) {
  return nA(t - 3, i);
}
class sQ {
  #A;
  [mA(-207, -302, -128, "zYLy") + mA(-246, -329, -176, "uk]7")] = [];
  [he("D2yF", 529, 532) + he("X9nb", 509, 454) + RA(1279, 1320, 1304, "U9sj") + "r"];
  [RA(1141, 1215, 1156, "y1a[") + he("WUHa", 533, 526) + "s"] = {};
  constructor(n, t = {}) {
    function e(a, g, I, C, s) {
      return mA(s - 1164, g - 198, I - 232, a);
    }
    function A(a, g, I, C, s) {
      return he(C, g - 4, I - 213);
    }
    function o(a, g, I, C, s) {
      return YA(a - 188, I, s - -907);
    }
    this[o(265, 321, "jc6x", 275, 306) + o(362, 366, "F*X#", 248, 296) + r(571, 514, 533, "FFP*") + "r"] = n, this.#A = gQ;
    function r(a, g, I, C, s) {
      return mA(I - 815, g - 172, I - 46, C);
    }
    this[o(220, 247, "MESc", 245, 301) + A(793, 899, 835, "jf%h") + e("U9sj", 926, 892, 930, 986)](t);
  }
  async [mA(-261, -259, -258, "X9nb") + mA(-141, -50, -112, "i(Yn") + mA(-265, -181, -251, "K1Me")]() {
    if (!Ao())
      if (r(1307, "X9nb", 1244, 1321, 1281) !== r(1322, "K1Me", 1359, 1354, 1397)) this[r(1339, "3Qk@", 1290, 1352, 1277) + g("ang1", 162, 162, 240) + "s"] = _0x3bd8c6;
      else return;
    const n = await this[a(-227, -151, -239, -160, "7ljY") + "st"](this.#A[r(1352, "k81J", 1369, 1200, 1286)]), t = await this[g("MJqe", 224, 318, 244) + "st"](this.#A[r(1314, "$OZ3", 1280, 1389, 1358)]), e = {};
    function A(C, s, B, E, x) {
      return YA(C - 453, x, s - -726);
    }
    function o(C, s, B, E, x) {
      return YA(C - 377, x, B - -336);
    }
    function r(C, s, B, E, x) {
      return RA(x - 127, s - 486, B - 349, s);
    }
    function a(C, s, B, E, x) {
      return RA(s - -1358, s - 180, B - 459, x);
    }
    e[A(596, 609, 540, 589, "OHX[") + g("3Qk@", 302, 227, 223)] = n[a(-144, -51, -97, -103, "9gEa") + "ge"];
    function g(C, s, B, E, x) {
      return RA(E - -999, s - 52, B - 405, C);
    }
    e[o(1109, 1097, 1041, 964, "rN^z") + a(-243, -178, -156, -130, "y1a[")] = t[a(-139, -97, -46, -100, "5eBy") + "ge"];
    const I = e;
    this[r(1272, "rN^z", 1361, 1267, 1295) + a(-98, -174, -120, -236, "Wn7b")][A(468, 514, 492, 601, "Q@3i")](I);
  }
  async [YA(1288, "zhRs", 1195) + "st"](n) {
    function t(p, y, b, k, D) {
      return mA(b - 1407, y - 58, b - 460, y);
    }
    function e(p, y, b, k, D) {
      return ae(p, y - 371, b - 327, k - 1257);
    }
    const { abortAfterMs: A, fallbackConstraints: o, maxTestDuration: r, primaryConstraints: a, runAmount: g, runDurationCutoffFactor: I } = n;
    let C = -707 * -5 + 9864 + -13399 * 1, s = g, B, E = this[t(1275, "[3al", 1207) + t(1052, "MESc", 1115) + t(1192, "Q*7$", 1112) + "r"][f(93, 158, 124, 185, "c!jF") + e("z]v9", 1402, 1256, 1319) + x(310, 283, "ang1") + "s"](this[f(111, 77, 74, 160, "UrS^") + x(283, 332, "H^oe") + "s"], a);
    for (let p = -5516 + -4 * -1988 + -2436; p < g; p++)
      if (t(1218, "g9*P", 1177) !== f(108, 201, 104, 145, "m$&a")) _0x44b959 = this[t(1125, "m$&a", 1190) + f(130, 80, 86, 174, "MJqe") + t(1085, "y1a[", 1095) + "r"][h(-124, -53, -78, -199, "WUHa") + f(255, 263, 344, 258, "F*X#") + f(324, 161, 301, 235, "m$&a") + "s"](this[t(1245, "Nv@$", 1237) + t(1135, "g9*P", 1197) + "s"], _0x164633), _0x39c267--;
      else {
        if (C > r * I)
          if (h(-290, -300, -381, -327, "slTS") === t(1305, "WUHa", 1248)) ({ deviceId: _0x59549f } = _0x59d978);
          else {
            s = p;
            break;
          }
        const y = await this[f(131, 215, 181, 207, "MJqe") + e("Q@3i", 1530, 1396, 1475) + t(1203, "slTS", 1223) + e("Q*7$", 1554, 1536, 1472)](E, A);
        if (y[x(388, 333, "K1Me")])
          if (e("c!jF", 1317, 1241, 1314) !== e("pFHu", 1454, 1513, 1426)) {
            if (this[t(1126, "y1a[", 1215) + t(1199, "D2yF", 1212) + x(224, 310, "Wn7b") + "r"][x(359, 311, "@!pz") + e("NHYN", 1343, 1458, 1414) + t(1180, "MESc", 1158) + h(-177, -218, -167, -184, "H^oe") + "or"](y[t(1110, "W$yL", 1085)])) {
              if (x(171, 218, "Q@3i") !== t(1108, "i(Yn", 1122)) return;
              E = this[t(1050, "7ljY", 1090) + t(1075, "v1l6", 1145) + x(221, 258, "K1Me") + "r"][h(-164, -245, -84, -163, "rN^z") + e("uk]7", 1335, 1316, 1368) + e("duXK", 1474, 1374, 1427) + "s"](this[h(-298, -259, -331, -269, "U9sj") + f(320, 145, 157, 227, "!6$A") + "s"], o), p--;
            }
          } else {
            const b = {};
            return b[t(1293, "F*X#", 1243) + x(231, 253, "uk]7")] = this[h(-173, -120, -207, -148, "g$x$") + t(1107, "MJqe", 1196)], b[e("pFHu", 1499, 1464, 1466) + x(282, 268, "$OZ3") + "e"] = !1, b;
          }
        y[e("[3al", 1448, 1458, 1404) + x(255, 181, "D2yF")] && (t(1007, "@!pz", 1098) === h(-254, -346, -175, -173, "v1l6") ? _0x2e441f[x(255, 239, "K1Me")]() : { deviceId: B } = y), C += y[x(169, 245, "iH5J") + x(202, 223, "K1Me")] || 0;
      }
    function x(p, y, b, k, D) {
      return YA(p - 54, b, y - -1011);
    }
    const Q = Math[e("zhRs", 1459, 1444, 1439)](C / (s || 8305 + 2448 * 3 + 7824 * -2));
    this[h(-227, -325, -231, -313, "$OZ3") + f(294, 311, 255, 242, "uk]7") + "s"] = this[x(237, 206, "g9*P") + t(1260, "D2yF", 1212) + f(87, 202, 151, 152, "y1a[") + "r"][f(253, 356, 403, 327, "WUHa") + h(-178, -221, -127, -203, "Nv@$") + f(233, 152, 320, 248, "ang1") + "s"](this[x(205, 233, "7ljY") + e("slTS", 1402, 1509, 1494) + "s"], {}, B);
    const l = {};
    function f(p, y, b, k, D) {
      return ae(D, y - 30, b - 139, k - 81);
    }
    function h(p, y, b, k, D) {
      return YA(p - 23, D, p - -1497);
    }
    return l[f(181, 353, 192, 262, "g$x$") + "ge"] = Q, l;
  }
  async [he("jc6x", 547, 556) + YA(1390, "3Qk@", 1378) + RA(1275, 1294, 1253, "MJqe") + mA(-163, -220, -177, "duXK")](n, t) {
    const e = Date[a("WB$K", -188, -171, -242)](), A = new AbortController();
    function o(s, B, E, x, Q) {
      return he(x, B - 277, s - 878);
    }
    function r(s, B, E, x, Q) {
      return RA(E - 159, B - 271, E - 227, Q);
    }
    function a(s, B, E, x, Q) {
      return RA(x - -1389, B - 113, E - 6, s);
    }
    function g(s, B, E, x, Q) {
      return RA(s - -1653, B - 391, E - 293, E);
    }
    const I = setTimeout(() => {
      function s(x, Q, l, f, h) {
        return a(h, Q - 219, l - 346, x - 1506);
      }
      function B(x, Q, l, f, h) {
        return a(l, Q - 66, l - 185, Q - -139);
      }
      function E(x, Q, l, f, h) {
        return a(l, Q - 464, l - 33, h - -163);
      }
      if (E(-328, -455, "B)wa", -417, -413) !== s(1436, 1528, 1341, 1459, "U9sj")) A[E(-338, -228, "@!pz", -368, -324)]();
      else {
        _0x43d712(_0x34e541);
        const x = {};
        return x[B(-188, -271, "9gEa")] = _0x5d23d9, x;
      }
    }, t);
    function C(s, B, E, x, Q) {
      return RA(s - -283, B - 124, E - 35, Q);
    }
    try {
      if (g(-518, -466, "UrS^", -599, -538) !== r(1454, 1500, 1443, 1410, "B)wa")) this[r(1413, 1511, 1453, 1445, "z]v9") + C(873, 820, 970, 966, "pFHu") + g(-521, -540, "k81J", -608, -427) + "r"][a("MESc", -126, -185, -154, -74) + g(-451, -366, "rN^z", -398, -544) + r(1320, 1294, 1323, 1403, "k81J") + a("H^oe", -131, -97, -124, -201) + "or"](_0x55a175[a("CyPz", -144, -90, -173, -162)]) && (_0x2a8e7f = this[g(-461, -385, "!6$A", -484, -553) + a("5eBy", -163, -53, -68, -132) + r(1397, 1507, 1474, 1488, "g9*P") + "r"][C(889, 795, 949, 842, "v1l6") + a("H^oe", -66, -156, -143, -159) + g(-347, -285, "UrS^", -413, -299) + "s"](this[a("slTS", -184, -205, -107, -166) + r(1405, 1403, 1359, 1283, "F*X#") + "s"], _0x596a98), _0x29ecbe--);
      else {
        const { deviceId: s, mediaStream: B } = await this[g(-443, -537, "U9sj", -348, -505) + g(-337, -351, "FFP*", -372, -407) + o(1466, 1493, 1393, "U9sj", 1509) + "r"][r(1330, 1359, 1345, 1386, "!6$A") + o(1399, 1304, 1443, "g$x$", 1377) + a("jf%h", -173, -184, -92, -133) + "m"](n, A[r(1298, 1447, 1363, 1434, "g$x$") + "l"]), E = Date[g(-496, -567, "ang1", -573, -422)]() - e;
        yt(B), clearTimeout(I);
        const x = {};
        return x[a("D2yF", -210, -212, -186, -221) + o(1463, 1530, 1393, "$OZ3", 1443)] = E, x[r(1295, 1341, 1336, 1351, "duXK") + r(1356, 1375, 1396, 1400, "jc6x")] = s, x;
      }
    } catch (s) {
      if (C(973, 967, 887, 950, "z]v9") === r(1328, 1418, 1409, 1315, "!6$A")) {
        clearTimeout(I);
        const B = {};
        return B[C(968, 989, 885, 888, "!6$A")] = s, B;
      } else return;
    }
  }
  [ae("duXK", 88, 92, 97) + ae("slTS", 160, 242, 201) + he("zYLy", 573, 620)](n) {
    function t(A, o, r, a, g) {
      return mA(g - 1387, o - 93, r - 479, A);
    }
    function e(A, o, r, a, g) {
      return he(g, o - 392, a - 402);
    }
    Object[t("CyPz", 1091, 1173, 1030, 1098) + "es"](n)[e(1078, 1030, 1035, 1011, "z]v9") + "ch"](([A, o]) => {
      const r = A;
      this.#A[r] && (this.#A[r] = { ...this.#A[r], ...o });
    });
  }
  [mA(-153, -206, -117, "uk]7") + YA(1399, "iH5J", 1354) + YA(1281, "X9nb", 1210)](n) {
    function t(A, o, r, a, g) {
      return ae(a, o - 228, r - 446, r - -338);
    }
    function e(A, o, r, a, g) {
      return ae(r, o - 121, r - 491, o - 0);
    }
    this[t(-279, -193, -195, "$OZ3") + e(165, 110, "pFHu") + "s"] = n;
  }
  async [he("S!2V", 671, 619) + ae("k81J", 220, 102, 160) + RA(1268, 1309, 1248, "v1l6") + YA(1162, "X9nb", 1251) + mA(-280, -302, -286, "zYLy")](n) {
    function t(g, I, C, s, B) {
      return mA(B - 184, I - 245, C - 316, C);
    }
    if (this[t(-34, 71, "Wn7b", 76, 30) + t(-64, -67, "$OZ3", -97, -90)][A(512, 465, 487, 507, "iH5J") + "h"] === 0) return;
    const e = this[r(450, 471, 523, "FFP*") + r(479, 410, 417, "rN^z")][A(530, 594, 501, 516, "WB$K") + "h"] - (9086 + 395 * -23);
    function A(g, I, C, s, B) {
      return mA(C - 745, I - 198, C - 11, B);
    }
    const o = await aQ();
    function r(g, I, C, s, B) {
      return ae(s, I - 74, C - 397, I - 352);
    }
    function a(g, I, C, s, B) {
      return mA(g - 351, I - 454, C - 119, I);
    }
    this[r(601, 597, 584, "g9*P") + a(179, "WB$K", 190)][e] = { ...this[A(581, 555, 602, 543, "duXK") + r(361, 411, 398, "FFP*")][e], optSetting: o };
  }
  [ae("MESc", 156, 142, 133) + RA(1252, 1270, 1242, "slTS") + mA(-181, -172, -267, "m$&a") + YA(1386, "Q@3i", 1353) + RA(1320, 1391, 1242, "k81J")]() {
    const n = {};
    n[t(957, 1012, "7ljY", 932, 923) + t(914, 972, "Q@3i", 828, 918)] = this[e(-210, -168, "U9sj") + t(670, 742, "9gEa", 698, 764)];
    function t(o, r, a, g, I) {
      return YA(o - 196, a, I - -440);
    }
    n[e(-125, -82, "CyPz") + A("i(Yn", 352, 379, 348, 306) + "e"] = !1;
    function e(o, r, a, g, I) {
      return RA(o - -1352, r - 179, a - 425, a);
    }
    function A(o, r, a, g, I) {
      return ae(o, r - 315, a - 362, I - 211);
    }
    return n;
  }
}
function TA(i, n, t, e, A) {
  return P(n - 159, A);
}
function It(i, n, t, e, A) {
  return P(e - 586, n);
}
function PA(i, n, t, e, A) {
  return P(t - -598, i);
}
function ge(i, n, t, e, A) {
  return P(i - 507, e);
}
function xn() {
  const i = ["W6bhW4qHWQm", "E8omW6ldISoC", "eL14oCoK", "oYBdVmkvWOu", "obOVgbi", "jKNdGSoxWPe", "d8kLW5hcU8k3", "W45RW6ObWOK", "W6Dig8oVDq", "zM/cN8kaW4C", "ktidgrq", "waFcKCkjW7S", "nCkYaJTTthldUtddL8oRWQrA", "uCk5nHDZ", "aSkthJhcUq", "Ad/cJCkgW5O", "W4HdW6m", "kmomW6C2za", "E8oJxM07", "WPO/WRvxW47cTCozWPJdL8kyW4vN", "WQ3dISofW6C6", "AtVcNW", "WO5lW7O", "nZ/dOcNcPG", "gmkjD8kvnW", "iuJdHCog", "W4VcSKeZCa", "WRFcJcBcPdO", "W5b2DW", "lKxdHmorW4u", "W4RdHfe3Ca", "W7L1W5O", "uCoffCohtuZcRCo9aqxdTbS", "aGldKCk3WQ4", "DdVcLCkjW5y", "r8opWQFdImke", "AmoKtG", "k8ozW7CRza", "jLDNpSoZ", "aSknCW", "B8oMx149", "zMJcLCkpWOe", "FNSJWPpdVG", "iKldJ8okW5a", "W7DeWPVcOMu", "iItdOsNcPW", "ECogu3SG", "tHHfhmo8", "jdJdOt4", "W7PjDLBcPG", "jfLNpSoZ", "reFcHK/dIG", "W4dcNeOW", "W5zlv0hcSW", "W4jwD1dcRq", "s11aemoR", "gqxdJmkKWQ8", "WQviht7dSW", "yNpcLq", "fSkruSkhhq", "F8ohW4e", "kLxdRSovW5q", "WODddmk0nW", "tqhcISk0W60", "W49LW7uqWPO", "WRrsdCo3ma", "q8oWW6dcVmoH", "wqLkgCo6", "WR7dOCoyW5GQ", "aINdG8kuhq", "tIhcGmkmW50", "W5unWRGEW4RdRSkPWQVcMCoooKyY", "umkEosrV", "fSkGkG", "sLnRWOix", "WRnlW7TkWPG", "WP7dUSoXW67dPq", "WRhdTSo9jmkC", "WRzlprFdHW", "hmk4W4FcS8k3", "WOZdRmoNW7ddTa", "FwuHWQxdNq", "p1DG", "nrSddqG", "zcpcICkeW50", "gSkdW4y", "W73cNCkaWRXSu8kJE0BdKSkpt8kB", "fqpdImkDga", "WQfonHhdMG", "W6vVW5yBrW", "zg/cHmkbWOu", "W4FcOmkMWQ/cQmkoW5mJiSk8W6W0WOa", "ifT3WQbE", "AeRcIfDs", "mXeedW", "dWpdJmkvbG", "AmoKx3O", "WPzMjCk4gG", "W6hdJh9kWRe", "gGRdHG", "W55+W74iWP4", "W6fZW7qhWPi", "nqtdISk8WRK", "eXldJmkCcq", "ea/dGCkgbG", "ha7dNmkK", "FNSJWPpdJa", "W6jtW4NdLmoVl8oyvZFcTWKT", "c193WPLB", "bmkCqSkIeq", "vhlcPKpdGa", "W4vqEKRcSq", "WRVdGmob", "WPRdOmo/W7/dPq", "WRrfnWtdNq", "WOBdPSoDW58a", "WOJdTmo1W41WwCkJW75umaJdMq", "CCojWQZdI8kt", "ArjDbSoR", "W7zgWQZcOM8", "gSkYW4pcSCk3", "W6zrWRVcOMi", "ASoiW7O", "a8k1s8krfq", "vLlcPhpdNq", "WPWRESk0WOK", "zmoFWRpcJmkz", "d3rG", "ivfQjmoV", "yxKHWO8", "jtpdSIxcQG", "WQZdNCo+W6S9", "W7RcO8kXWPGG", "W6DAWRNcH2G", "ECo8W4ddMCoY", "W4VcQCkPWPSY", "W57dMxeMBG", "WQ3dTSoPcmkA", "D3hcGmkzWRa", "WOXEW7a", "W6ztea", "bCkrsSkrcG", "AuXzwfuwW7xcNeOaweVcUG", "WQftmrJdJG", "WRi4W4VdJ8oH", "iJFdQsNcUW", "W7ddIfeQEq", "W4HKW6iw", "qSoHW7tcV8oY", "BN7cHmkPWPu", "WReeW6VdOmog", "WR3dPb8nhq", "o8knWR4", "z0H2", "W5TJW6mbWPq", "WORdGmogW6i9", "vCo5WPNdLSk7", "W6f0W4SkaW", "A8kFWQNcQsG", "W7brWQdcPhC", "e8kCymkFpq", "W7vvWPNcU3C", "WOldRH4HfG", "WR4EWOZcImk/", "yLtcHq", "WR05WOHwu25JzSkGWRFdTSkGumoe", "iCkqCSktmq", "EvhcO0ze", "bSkJhdVcPW", "DSkakIHr", "CxtcHCkfWP4", "WOv3nCkVfa", "W6TnW7igjq", "rmkInXnO", "W4VcTem", "WPRdNCoOW7NdVW", "W4PVW7m3WP4", "lCorW6y9BG", "WP7cUmoTW7NdPq", "lZRdRmkcWPy", "WOWTzSk9WOi", "ghtdGCk/W5pcJsJdV09Rda", "W5XmxflcOa", "WR/dTSoOfCkp", "hNfTWOvd", "W6vUW5e", "W5NcNhmLDq", "WO0AW5hdOmom", "W4zlCLBcSq", "W7jyWQZcSG", "W4DiemoMCq", "WOBdUxxcRM8", "W51MW6yDWOG", "W6FdLMldSMlcU0tcQsNcTCk7o8kdaq", "WRbForxdNq", "uCo+WRldGCkm", "WRqtoG", "EbtcNmktWONdSgdcSNGRW78", "WQ0AW5tdVCkc", "umoEWQJdJCkc", "W5hcQCkTWPmS", "nH3dQGVcKa", "W6bUW5GQfq", "W6LiW5S", "WRNdVmoScmkn", "AedcUvnw", "W57dGvaIDG", "smkYobD/", "aCkjW6/cLCosWOH4hSkGu006W6q", "WRxdOX4bdW", "vvlcPK/dJq", "sqVcGCk/W7e", "WRVdISoEW6eV", "nCkSW5hcHmkQ", "fSkqEmktoG", "a8k5qW", "ANi0WOpdNa", "WRNdVmo1", "WO9DW6nkWPO"];
  return xn = function() {
    return i;
  }, xn();
}
function ct(i, n, t, e, A) {
  return P(A - 523, i);
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return P(C - 752, I);
  }
  function e(g, I, C, s, B) {
    return P(C - -97, g);
  }
  function A(g, I, C, s, B) {
    return P(s - -772, B);
  }
  const o = i();
  function r(g, I, C, s, B) {
    return P(C - 823, s);
  }
  function a(g, I, C, s, B) {
    return P(B - -857, I);
  }
  for (; ; )
    try {
      if (-parseInt(r(1270, 1412, 1318, "M$1E", 1292)) / 1 + parseInt(a(-443, "kA]Y", -382, -535, -452)) / 2 + parseInt(r(1313, 1218, 1207, "WjEN", 1306)) / 3 + -parseInt(t(1181, "kZzK", 1258, 1364, 1237)) / 4 + -parseInt(e("lC5W", 469, 432, 346, 540)) / 5 + -parseInt(A(-115, -281, -237, -223, "HgzZ")) / 6 + parseInt(e("n%MP", 402, 366, 316, 401)) / 7 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(xn, -193716 + 28243 * -43 + 2316244);
function P(i, n) {
  i = i - 358;
  const t = xn();
  let e = t[i];
  if (P.ezPClv === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    P.vDVhjU = g, P.JXdmnh = {}, P.ezPClv = !0;
  }
  const o = t[14471 + -29 * 499], r = i + o, a = P.JXdmnh[r];
  return a ? e = a : (P.plSavz === void 0 && (P.plSavz = !0), e = P.vDVhjU(e, n), P.JXdmnh[r] = e), e;
}
class IQ {
  [ge(976, 982, 1038, "Mth4") + PA("(JZs", -11, -28) + ge(954, 1010, 918, "^^Tp")](n) {
    function t(I, C, s, B, E) {
      return ge(E - -889, C - 464, s - 225, B);
    }
    function e(I, C, s, B, E) {
      return TA(I - 455, s - -202, s - 262, B - 100, C);
    }
    function A(I, C, s, B, E) {
      return PA(I, C - 230, s - 752);
    }
    function o(I, C, s, B, E) {
      return ge(s - -1314, C - 68, s - 7, B);
    }
    const r = tr(n), a = r?.[o(-269, -374, -279, "ZwCo") + o(-425, -325, -406, "([lZ") + "s"]();
    if (!a?.[o(-389, -459, -414, "([lZ") + "t"] || !a?.[A("8SIm", 780, 701)] || !a?.[e(490, "kZzK", 454, 407) + g(97, 37, 176, "p%)x", 80)]) {
      if (g(59, -85, 87, "j2Z6", -11) !== e(535, "w50i", 531, 468)) throw new m(o(-463, -277, -377, "w#LR") + e(233, "zl*Z", 320, 228) + e(539, "j2Z6", 453, 419) + e(287, "HgzZ", 396, 486) + t(189, 287, 133, "[F#b", 190) + e(602, "GBta", 507, 600));
      {
        const I = _0x1c5fa4[e(373, "PW0(", 334, 352) + g(125, 34, 50, "kZzK", 40) + e(409, "lC5W", 510, 567)](A("p%)x", 656, 606));
        return I[o(-441, -405, -341, "BW5F") + t(-31, 96, 36, "%ytW", 55)] = !0, I[o(-286, -287, -352, "n%MP")] = !0, I[o(-210, -392, -317, "p%)x") + A("j2Z6", 685, 639) + "e"] = !0, I[t(-18, -12, -4, "OikI", -4)][g(16, -98, 50, "vS@e", -18) + e(356, "n%MP", 440, 342)] = A("RLz)", 617, 698) + e(553, "uUM)", 513, 560), I[g(114, 58, 161, "ufH2", 98)][e(445, "uUM)", 498, 537) + "ty"] = "0", I[e(429, "p%)x", 355, 331)][g(-42, -141, -21, "(JZs", -44) + A("M$1E", 537, 513) + t(217, 117, 88, "ufH2", 156)] = o(-181, -267, -265, "M$1E"), I[o(-417, -491, -442, "[F#b")][e(521, "(JZs", 528, 533)] = A("HJsO", 477, 574), I[g(-45, -23, -68, "OikI", -75)][o(-468, -489, -426, "VGvL") + "t"] = o(-275, -320, -357, "!dj$"), I;
      }
    }
    function g(I, C, s, B, E) {
      return PA(B, C - 348, E - 145);
    }
    if (r) {
      if (o(-359, -335, -323, "%y^d") === e(397, "936u", 416, 483)) return a[A("[F#b", 758, 718) + o(-387, -197, -294, "HgzZ")];
      {
        const I = { ..._0x5ada8e }, C = I, s = { ...typeof C[g(40, -143, -96, "Mth4", -58)] == o(-188, -263, -291, "%ytW") + "t" ? C[t(201, 257, 212, "72H1", 148)] : {}, ..._0x2df765 }, B = s;
        if (_0x5e19a1) {
          const E = {};
          E[A("w50i", 608, 646)] = _0x2d1021, B[o(-283, -202, -293, "GX]t") + A("PW0(", 628, 537)] = E;
        }
        return C[A("HJsO", 588, 629)] = B, C;
      }
    }
  }
  [TA(687, 591, 695, 557, "G8!o") + ct("%y^d", 1049, 1046, 966, 1066) + It(926, "$5lE", 975, 1009) + TA(710, 619, 524, 578, "y#mt")]() {
    function n(a, g, I, C, s) {
      return TA(a - 186, s - -863, I - 190, C - 465, a);
    }
    const t = document[r(-359, -334, "72H1", -389) + A(240, 421, "HgzZ", 314) + A(531, 381, "^^Tp", 468)](o(-81, -162, -61, "lC5W"));
    t[r(-320, -247, "^^Tp", -159) + n("GBta", -205, -267, -416, -307)] = !0;
    function e(a, g, I, C, s) {
      return ct(C, g - 58, I - 88, C - 169, s - -483);
    }
    t[A(269, 325, "kA]Y", 354)] = !0, t[o(-212, -119, -114, "GX]t") + n("ufH2", -321, -300, -349, -336) + "e"] = !0, t[o(-238, -181, -330, "OikI")][n("PW0(", -250, -153, -276, -181) + o(-236, -292, -335, "iV&R")] = A(328, 261, "pLSl", 299) + r(-153, -257, "n%MP", -224), t[o(-138, -206, -183, "$5lE")][r(-264, -273, "ufH2", -233) + "ty"] = "0", t[e(559, 537, 498, "CHVU", 486)][o(-61, -117, -2, "iV&R") + n("U[V&", -338, -324, -388, -313) + o(-77, 5, -105, "%ytW")] = o(-224, -163, -172, "VGvL"), t[n("zl*Z", -264, -207, -254, -179)][A(217, 261, "([lZ", 295)] = A(370, 229, "72H1", 264);
    function A(a, g, I, C, s) {
      return PA(I, g - 494, C - 491);
    }
    t[o(-64, -38, 46, "kZzK")][n("w#LR", -236, -185, -232, -206) + "t"] = n("iV&R", -185, -218, -166, -253);
    function o(a, g, I, C, s) {
      return It(a - 123, C, I - 370, a - -1202);
    }
    function r(a, g, I, C, s) {
      return ct(I, g - 172, I - 195, C - 399, g - -1328);
    }
    return t;
  }
  async [ct("^^Tp", 974, 921, 867, 959) + TA(621, 521, 432, 558, "p%)x") + PA("HgzZ", -203, -191) + TA(756, 653, 639, 688, "DQg$")](n, t, e) {
    return new Promise((A, o) => {
      function r(s, B, E, x, Q) {
        return P(x - -931, s);
      }
      function a(s, B, E, x, Q) {
        return P(B - 862, E);
      }
      function g(s, B, E, x, Q) {
        return P(E - -841, x);
      }
      function I(s, B, E, x, Q) {
        return P(E - -140, Q);
      }
      function C(s, B, E, x, Q) {
        return P(E - -123, s);
      }
      if (r("GBta", -429, -415, -454) === a(1308, 1261, "p%)x")) throw new _0x3083e4(I(362, 270, 313, 383, "WjEN") + r("pLSl", -486, -507, -559) + I(379, 477, 382, 431, "M$1E") + g(-235, -280, -317, "p%)x") + g(-259, -216, -315, "ufH2") + C("U[V&", 287, 342));
      {
        const s = () => {
          function x(h, p, y, b, k) {
            return C(h, p - 320, y - -564);
          }
          function Q(h, p, y, b, k) {
            return C(h, p - 341, y - 120);
          }
          function l(h, p, y, b, k) {
            return g(h - 232, p - 43, h - 638, p);
          }
          function f(h, p, y, b, k) {
            return r(k, p - 315, y - 456, b - 1607);
          }
          f(1219, 1288, 1288, 1187, "PW0(") === l(187, "pLSl") ? this[Q("8SIm", 554, 501) + x("936u", -85, -126) + "eo"](n, t) : (_0x43be90[l(373, "HgzZ")](), _0x232273(_0x40a4eb), _0xfbfd2c[f(1127, 1039, 1120, 1109, "w#LR") + "e"]());
        }, B = {};
        B[a(1274, 1289, "GX]t")] = !0, e?.[a(1300, 1369, "y#mt") + g(-441, -432, -410, "936u") + C("HJsO", 374, 411) + "r"](r("M$1E", -332, -475, -385), s, B), (async () => {
          function x(p, y, b, k, D) {
            return I(p - 220, y - 77, y - 678, k - 58, b);
          }
          function Q(p, y, b, k, D) {
            return C(y, y - 330, k - 1036);
          }
          function l(p, y, b, k, D) {
            return C(D, y - 421, y - 427);
          }
          function f(p, y, b, k, D) {
            return C(b, y - 322, p - 788);
          }
          function h(p, y, b, k, D) {
            return I(p - 85, y - 21, k - -313, k - 27, p);
          }
          if (x(963, 1058, "GBta", 1124) === Q(1321, "p%)x", 1484, 1430)) try {
            if (x(850, 898, "Mth4", 906, 820) === l(763, 774, 822, 674, "n%MP")) await n[f(1152, 1182, "936u", 1096, 1086)](), e?.[x(947, 995, "936u", 1049, 991) + Q(1383, ")@e9", 1395, 1321, 1305) + h("VGvL", 118, -7, 74, 49) + h("uy99", 14, 117, 112, 181)](x(934, 912, "OikI", 870, 805), s), A();
            else {
              const p = _0x407ce4(_0x4bad8b), y = p?.[f(1139, 1214, "p%)x", 1072, 1158) + l(645, 745, 745, 640, "w50i") + "s"]();
              if (!y?.[f(1089, 1108, "AdV*", 1187, 1035) + "t"] || !y?.[l(674, 730, 777, 701, "iV&R")] || !y?.[h("WjEN", 117, 156, 84, 107) + h("n%MP", 23, 146, 48, 96)]) throw new _0x4a757c(Q(1261, "GBta", 1242, 1313, 1250) + h("pLSl", -101, -79, -81, -129) + x(1017, 925, "n%MP", 933, 826) + x(898, 981, "uy99", 979, 932) + Q(1340, "OikI", 1325, 1389, 1314) + Q(1345, "w50i", 1391, 1299, 1225));
              return p ? y[f(1173, 1276, ")@e9", 1180, 1233) + h("%y^d", 63, 8, 19, 82)] : void 0;
            }
          } catch (p) {
            if (Q(1424, "uy99", 1432, 1412) !== x(958, 951, "WjEN", 1036)) e?.[Q(1167, "CHVU", 1273, 1277) + Q(1352, "OikI", 1384, 1386) + f(1147, 1105, "pLSl") + x(935, 932, "lC5W", 925)](f(1121, 1041, "!dj$"), s), yt(t), o(p);
            else {
              const y = {};
              y[f(1083, 986, "PW0(")] = _0x285937, _0x20b551[l(752, 732, 654, 724, "uy99") + Q(1538, "(JZs", 1501, 1458)] = y;
            }
          }
          else _0x2e2827?.[l(831, 814, 747, 716, "WjEN") + Q(1382, "BW5F", 1421, 1444) + l(803, 867, 917, 810, "lC5W") + x(981, 983, "p%)x", 1012)](l(676, 716, 633, 728, "w50i"), _0x3a6d44), _0x33eaae(_0x2a98c1), _0x48fe76(_0x48f276);
        })();
      }
    });
  }
  async [TA(683, 645, 662, 700, "(JZs") + ge(951, 851, 1051, "8SIm") + TA(714, 647, 600, 692, "zl*Z") + "m"](n, t) {
    const e = this[C(444, 435, 355, "^^Tp") + s("([lZ", 257, 330) + s("uy99", 527, 525) + s("uUM)", 431, 427)](), A = await navigator[a(75, 63, "SwFF", 62, 83) + a(165, 166, "iV&R", 263, 206) + "es"][r(-270, -339, -334, ")@e9") + r(-312, -341, -327, "WjEN") + "ia"](n), o = this[a(113, 134, "U[V&", 140, 190) + g(-130, "8SIm", -210) + a(111, 122, "y#mt", 159, 136)](A);
    function r(B, E, x, Q, l) {
      return ct(Q, E - 76, x - 80, Q - 222, x - -1279);
    }
    e[a(172, 151, "GX]t", 69, 66) + s("GBta", 282, 366)] = A;
    try {
      C(422, 339, 415, "WjEN", 364) === C(426, 350, 519, "72H1", 507) ? await this[g(-2, "GX]t", -85, -163, -154) + r(-221, -255, -275, "vS@e", -169) + g(-97, "lC5W", -87, -60, -196) + s("vS@e", 440, 478, 562, 468)](e, A, t) : this[a(-9, 35, "ufH2", 161, 69) + g(-239, "j2Z6", -196, -297, -229) + "eo"](_0x3d8192, _0x50db40);
    } catch (B) {
      g(-236, "72H1", -177) === r(-244, -380, -289, "72H1") ? m[s("vS@e", 394, 338) + g(-234, "zl*Z", -206)](B) : _0xe3d052[r(-251, -281, -256, "n%MP") + a(61, 188, "WjEN", 167, 97)](_0xc4f67d);
    }
    function a(B, E, x, Q, l) {
      return ge(l - -820, E - 235, x - 116, x);
    }
    function g(B, E, x, Q, l) {
      return It(B - 364, E, x - 222, x - -1230);
    }
    const I = {};
    I[r(-281, -113, -196, "M$1E") + a(120, 138, "%ytW", 117, 60) + "m"] = A, I[s("uUM)", 469, 421) + g(-206, "G8!o", -286)] = o;
    function C(B, E, x, Q, l) {
      return ge(B - -451, E - 40, x - 154, Q);
    }
    function s(B, E, x, Q, l) {
      return PA(B, E - 21, x - 561);
    }
    return I;
  }
  [TA(518, 535, 558, 598, "w50i") + ge(1075, 1094, 1172, ")@e9") + "eo"](n, t) {
    n[e(1369, 1366, 1446, 1418, "HJsO")]();
    function e(A, o, r, a, g) {
      return ct(g, o - 484, r - 443, a - 116, a - 341);
    }
    yt(t), n[e(1197, 1299, 1276, 1249, "([lZ") + "e"]();
  }
  [PA("(JZs", -137, -118) + PA("ZwCo", -315, -237) + It(1051, "936u", 1097, 1003) + ge(1028, 996, 978, "VGvL") + "or"](n) {
    function t(o, r, a, g, I) {
      return It(o - 4, I, a - 299, a - -1559);
    }
    function e(o, r, a, g, I) {
      return PA(g, r - 307, o - 832);
    }
    function A(o, r, a, g, I) {
      return PA(r, r - 486, o - 59);
    }
    return n instanceof DOMException && n[t(-389, -432, -404, -352, "%y^d")] === t(-414, -317, -407, -394, "(JZs") + A(34, "GBta") + e(746, 740, 641, "uUM)") + A(-124, "kZzK");
  }
  [TA(740, 648, 716, 645, "^$Xj") + PA("[F#b", -177, -182) + It(1065, "iV&R", 1057, 1153) + "s"](n = {}, t = {}, e) {
    function A(B, E, x, Q, l) {
      return TA(B - 329, Q - 672, x - 172, Q - 161, x);
    }
    function o(B, E, x, Q, l) {
      return PA(x, E - 196, Q - -232);
    }
    const r = { ...n }, a = r;
    function g(B, E, x, Q, l) {
      return ge(x - -727, E - 28, x - 139, E);
    }
    function I(B, E, x, Q, l) {
      return TA(B - 257, Q - -566, x - 406, Q - 368, B);
    }
    const C = { ...typeof a[I("ZwCo", 61, 175, 102)] == o(-272, -288, "72H1", -325) + "t" ? a[o(-349, -314, "^^Tp", -362)] : {}, ...t }, s = C;
    if (e) {
      if (g(155, "kZzK", 234) !== A(1341, 1399, "G8!o", 1349)) return _0x4700b7[A(1325, 1225, "936u", 1250) + A(1236, 1262, "^^Tp", 1293)];
      {
        const B = {};
        B[A(1320, 1150, "OikI", 1242)] = e, s[A(1313, 1229, "vS@e", 1333) + g(97, "pLSl", 205)] = B;
      }
    }
    return a[I("uy99", 165, 112, 133)] = s, a;
  }
}
const FI = {};
FI.ideal = 1920;
const vI = {};
vI.ideal = 1080;
const Yo = {};
Yo.width = FI, Yo.height = vI, Yo.facingMode = Yr.FRONT;
const cQ = Yo;
class MI {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = cQ, minCameraShorterSide: t = sB } = {}) {
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
    if (this.#t) return tr(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    yt(t);
  }
  async open(n = {}) {
    qa() && tt() && await Vi(6605 + 1 * -6155), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new m("Video track must be initialized to get next device");
    const n = await ni(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (1817 + 21 * 403 + -10279)] ?? n[-988 * 1 + -8990 + -6 * -1663]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new m("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (yt(this.#t), this.#t = null);
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
    return (await uI()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Yr.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Hr())
      return (await ni()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await ni();
    for (const t of n) {
      qa() && tt() && await Vi(-3020 * -1 + -6387 + 11 * 347);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.ideal = 480;
        const o = {};
        o.deviceId = e, o.width = A;
        const r = {};
        r.video = o;
        const a = await navigator.mediaDevices.getUserMedia(r), g = tr(a);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = g.getSettings(), C = { ...I };
        C.deviceName = g.label;
        const s = {};
        s.cameraProperties = C;
        const B = s;
        this.#e.push(B), yt(a);
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
class CQ {
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
    this.#A || (this.#A = !0, await MI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), SB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !tt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, 549 * -1 + -4577 + 5126, -3581 * -1 + 2005 * 3 + -9596), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), bB() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !tt() && await this.cameraEvaluator.setMostRecentCameraName(t), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !tt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
class BQ {
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
function HA(i, n, t, e, A) {
  return iA(A - 177, e);
}
(function(i, n) {
  function t(I, C, s, B, E) {
    return iA(C - 965, I);
  }
  function e(I, C, s, B, E) {
    return iA(E - 673, C);
  }
  function A(I, C, s, B, E) {
    return iA(E - 665, I);
  }
  function o(I, C, s, B, E) {
    return iA(s - -616, E);
  }
  function r(I, C, s, B, E) {
    return iA(I - 717, s);
  }
  for (var a = i(); ; )
    try {
      var g = -parseInt(e(840, "eWOn", 861, 894, 910)) / 1 + -parseInt(e(857, "j[@b", 845, 824, 830)) / 2 + -parseInt(A("163S", 1015, 940, 997, 953)) / 3 * (parseInt(r(891, 822, "018O", 836, 905)) / 4) + parseInt(o(-445, -467, -407, -378, "VAzq")) / 5 + parseInt(r(897, 877, "EPcM", 924, 854)) / 6 * (-parseInt(A("a^&g", 957, 915, 874, 932)) / 7) + parseInt(t("gf5T", 1227, 1269, 1290, 1170)) / 8 + parseInt(o(-460, -404, -466, -491, "F[j&")) / 9 * (parseInt(t("c5[%", 1203, 1144, 1212, 1239)) / 10);
      if (g === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(dn, -8 * 119858 + 229 * 3697 + -46 * -18083);
function Ct(i, n, t, e, A) {
  return iA(n - -65, e);
}
function dn() {
  var i = ["ASksW6JcVcm", "wfCOlNC", "WO/cPHdcQh/dOSkWWR4ew3qAgG", "WPyPq1W4WRNcK1xcUKPg", "kZ/cLhBcVG", "dCk8mG", "kxLV", "WQO0W6pdJmku", "W4uXtSkCAW", "mdKzsK0", "W6XjE0/dNCouW5O1W6LzWOK", "C2NdJuhcGhTmW5tcPq", "W71xuv3dQq", "W4jPWQLOdq", "vCoYWQhcReq", "W4PJbsHN", "WP8sqa", "WPfWWOvjW6a", "rLBcRSo1W5K", "WPNdRey", "W6n7WObCja", "pcCp", "W7hcJCkJ", "rcj1W5e", "W4XAW43dSSkF", "W4XuW57dRSk1", "W4bNga", "nJGpAfy", "W5j5WPDXjW", "WOK1W4HexG", "W7BcM8kJzmoY", "WPStW4WIwa", "W5BcK8kUy8oR", "WQnSWPaXka", "W73dHmoEAfK", "WRqhWPNcHcRcRCoxWPXFAKi7ba", "WR95WO5jW64", "l2n+W4RdSG", "r8odlmkUrq", "W7BdMmoA", "DJtcRY5bW4pdKJC", "jYpcM23cNa", "aSkysW", "W5bSWRxcMmorW4VcS8oeCvmTWQrk", "qxdcGG", "W43dNuVdRdi", "bSkopSkVnq", "v8oRCCkxWOtdHCkEW5PEpmkvW7y", "WPhdImkIjmkq", "vSo2WRBcUfO", "W4ZdV1y", "nbZdSWC", "WRC2WPtdPW", "WRtdICk1nmkp", "rM3cHNzH", "WPJdQf/cPw8", "W5ddV0VdQY8", "W5ddO1hdQW0", "vSotm8kYDa", "kSoSWQemW4O", "rL7cOSo0W4W", "zeBcRLtcKfDntmkqD8obW59T", "W7/cLSkKESo/", "W6pcMmo3bmkvgNBcMJG", "suurW45kWO9xW7RcGa/dQmk2", "WRFdQ8kIpSk/", "W6JcGYTMxq", "WPKQd8kDFG", "W4j6W4ldS8kE", "W6D7W47dILC", "gmoWWRJdRmoO", "bIvDAHpcHN/cJSk9xmoUWOW", "lNmAW4tcKa", "W7FcLmkKDmo3", "kSohWQmLW40", "WPmmvKxcLa", "o8o8WQldV8oV", "WQFdJSkZ", "fCo8WRpdR8oU", "WQxcRvq", "W5nQWRlcNCoyW4dcSSo8AfG5WPTE", "WPD0WPjAW7C", "WQpcGe/cQCkg", "W4r6W6/dUmk3", "WQboWOC7ga", "qhGemLm", "u1BcT8ooW4y", "WOS+W5Harq", "oCkLW4JcPXFdLSkF", "WR/dTLi", "k8k6jSodW4C", "omkwW7zLWPK", "W4f/aq", "pmodW7pcPJFdOmkSsa", "WO0LWQuqCmkmWPWzfNxdM1xcLa", "W7zzW4tdNuC", "rb51W5dcRG", "jmoNWQWKW4W", "eSkftmogaa", "WO8XW59xsq", "W7FdGSo/jLa", "nXNdTbNdHG", "txBcM2y", "W5fZWRXUfq", "W6enWQ7dK8o+qCoe", "WP/dH1W3pW", "WQtcQK/cSSk8", "oSkkW7jCWPK", "W6ddPCoCy0y", "e8k2n8ogW50", "WOmruq", "rNqgm3e", "WO86W6/dV8kf", "gSo7WQJdQmoZ", "WR4wrMxcJG", "AmkfW7RcMdq", "wmoGWRZcI0C", "W4bIWRL4cW", "WP/dTL0KfW", "W6lcGJztwq", "oqldSW", "W4zSWRf7eG", "l8kyw8okia", "WOVcObFcQhBdQCk1WOCptKOCnG", "WPZdGeS2", "rCofdmkYwdyKdCkPW50tW6eI", "bmk1umoWaq", "xmo/WQBcSKK", "WPxdLdddOJy", "WRBdQe7cTw4", "W4jPWQL8ea", "BmkBW7xcJsC", "gSo4WQq", "f8kXkG", "WRxdSK/cHxu", "WPy5W55AEa", "W6PrW4xdL38", "AsaQWPFcPmosWPK8WP/dKGq9", "lxCnW5dcJG", "WO58WOPeW6y", "W4Xuua"];
  return dn = function() {
    return i;
  }, dn();
}
function ee(i, n, t, e, A) {
  return iA(e - -228, A);
}
function aA(i, n, t, e, A) {
  return iA(i - 237, t);
}
function iA(i, n) {
  i = i - 149;
  var t = dn(), e = t[i];
  if (iA.xeATCs === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    iA.URBCkE = o, iA.RyAfIj = {}, iA.xeATCs = !0;
  }
  var r = t[297 * 20 + 2081 * 3 + -12183], a = i + r, g = iA.RyAfIj[a];
  return g ? e = g : (iA.tWeugW === void 0 && (iA.tWeugW = !0), e = iA.URBCkE(e, n), iA.RyAfIj[a] = e), e;
}
function Te(i, n, t, e, A) {
  return iA(n - -430, A);
}
class QQ {
  [Te(-286, -274, -287, -251, "Kh[t") + aA(439, 419, "GI[l") + aA(433, 486, "*o]P")] = 0;
  [aA(440, 463, "6QI3") + ee(-19, -90, 4, -41, "163S") + aA(418, 397, "gf5T") + HA(398, 434, 447, "*o]P", 420)];
  [Ct(190, 126, 69, "&hA&") + aA(519, 503, "S53&") + "p"] = void 0;
  constructor() {
    function n(e, A, o, r, a) {
      return HA(e - 360, A - 249, o - 446, e, r - -753);
    }
    function t(e, A, o, r, a) {
      return Ct(e - 97, o - -735, o - 390, r);
    }
    this[n("okA6", -355, -403, -403) + n("7y!B", -420, -419, -362) + n("j[@b", -405, -322, -379) + t(-611, -583, -574, "zpcz")] = Date[t(-591, -525, -534, "D[TI")]();
  }
  [Te(-201, -206, -201, -220, "sn3^") + HA(452, 418, 433, "EF(e", 429) + HA(411, 447, 363, "163S", 383)]() {
    function n(r, a, g, I, C) {
      return Te(r - 126, I - 1418, g - 211, I - 129, a);
    }
    function t(r, a, g, I, C) {
      return aA(I - -151, a - 441, C);
    }
    this[t(297, 174, 209, 244, "sn3^") + t(368, 238, 343, 306, "S53&") + t(355, 328, 409, 363, "VAzq")]++;
    function e(r, a, g, I, C) {
      return HA(r - 394, a - 293, g - 491, r, g - -191);
    }
    function A(r, a, g, I, C) {
      return aA(I - -427, a - 427, a);
    }
    function o(r, a, g, I, C) {
      return Te(r - 474, C - 1313, g - 17, I - 208, g);
    }
    this[e("1GBO", 159, 191) + A(60, "eePV", 105, 52) + A(96, "rN64", 130, 79)] === 5032 + -1 * -3189 + -8220 && (e("LdzV", 292, 259) !== e("D[TI", 233, 180) ? (this[o(1150, 1089, "GI[l", 1225, 1159) + A(8, "D[TI", 1, 71) + t(273, 382, 279, 332, "M!uq")]++, this[o(1197, 1196, "okA6", 1103, 1139) + n(1211, "GI[l", 1163, 1190) + A(12, "3lpc", 58, 43)] === 9164 + 1 * -541 + -8622 && (this[e("E)TT", 199, 266) + n(1293, "kRdZ", 1259, 1247) + "p"] = _0x45e727[e("eePV", 127, 164)]() - this[n(1121, "Kh[t", 1185, 1187) + A(51, "018O", 95, 27) + e("ZhfR", 262, 271) + n(1238, "LdzV", 1230, 1207)])) : this[n(1145, "Kh[t", 1177, 1152) + e("bXe$", 205, 162) + "p"] = Date[n(1269, "bXe$", 1151, 1220)]() - this[n(1173, "kRdZ", 1079, 1147) + t(271, 272, 337, 299, "GI[l") + A(-15, "okA6", 78, 31) + o(1116, 1130, "77&x", 1082, 1131)]);
  }
  [HA(433, 346, 428, "M!uq", 381) + ee(-11, 1, -60, -27, "018O") + aA(481, 516, "oEIp") + Ct(179, 198, 197, "oEIp") + "up"]() {
    function n(r, a, g, I, C) {
      return Te(r - 78, I - 422, g - 411, I - 334, a);
    }
    if (!Ao()) {
      if (o(989, "lsN2", 969) !== t(-482, "4ssq", -514)) return;
      this[n(222, "VAzq", 331, 275) + n(297, "kRdZ", 265, 281) + A(661, "XbJl", 721, 717, 698) + n(277, "Kh[t", 152, 210)] = _0x482355[A(741, "9RdH", 813, 786, 777)]();
    }
    this[t(-502, "oEIp", -545) + t(-582, "rN64", -528) + o(963, "E)TT", 969)] = -7823 * -1 + 639 + -8462;
    function t(r, a, g, I, C) {
      return HA(r - 17, a - 270, g - 488, a, g - -889);
    }
    function e(r, a, g, I, C) {
      return aA(I - -705, a - 188, g);
    }
    function A(r, a, g, I, C) {
      return ee(r - 185, a - 225, g - 349, C - 734, a);
    }
    function o(r, a, g, I, C) {
      return HA(r - 390, a - 450, g - 345, a, r - 623);
    }
    this[t(-439, "E)TT", -432) + A(810, "4ssq", 763, 740, 740) + "p"] = void 0, window[o(1045, "R[Y5", 987) + e(-219, -167, "EF(e", -217) + e(-229, -159, "7td5", -210) + A(727, "vvI4", 715, 767, 756)](A(722, "Zc[8", 636, 713, 689) + "wn", this[o(1057, "kRdZ", 1063) + t(-488, "L$3X", -452) + e(-186, -166, "eePV", -215)][A(742, "dYeT", 740, 756, 785)](this));
  }
  [ee(-21, -35, -56, 3, "c5[%") + aA(505, 477, "c5[%") + ee(-72, -73, -65, -43, "okA6") + Te(-216, -155, -112, -118, "E)TT") + "up"]() {
    function n(r, a, g, I, C) {
      return aA(r - 146, a - 71, I);
    }
    function t(r, a, g, I, C) {
      return HA(r - 184, a - 329, g - 330, r, I - -1007);
    }
    function e(r, a, g, I, C) {
      return HA(r - 484, a - 97, g - 347, r, I - 278);
    }
    if (!Ao()) {
      if (e("lsN2", 638, 683, 702) !== e("j[@b", 656, 692, 683)) return;
      var A = {};
      return A[o(-339, -370, -348, -363, "bXe$") + o(-302, -278, -215, -215, "R[Y5") + "e"] = !1, A;
    }
    function o(r, a, g, I, C) {
      return HA(r - 392, a - 158, g - 72, C, a - -742);
    }
    window[e("1GBO", 602, 559, 607) + t("Zc[8", -588, -596, -544) + o(-275, -301, -233, -303, "3lpc") + "r"](n(537, 556, 502, "EF(e") + "wn", this[n(624, 675, 660, "GI[l") + o(-418, -410, -414, -392, "gf5T") + t("kRdZ", -566, -603, -581)][t("9RdH", -607, -621, -642)](this));
  }
  [aA(491, 550, "77&x") + ee(-15, -39, -98, -46, "vvI4") + "lt"]() {
    function n(a, g, I, C, s) {
      return HA(a - 21, g - 285, I - 126, C, s - -924);
    }
    function t(a, g, I, C, s) {
      return Ct(a - 40, C - 136, I - 6, a);
    }
    function e(a, g, I, C, s) {
      return aA(s - -449, g - 392, a);
    }
    if (!Ao() || !this[t("S53&", 348, 320, 286) + n(-514, -607, -541, "Kh[t", -585) + "p"])
      if (t("rN64", 322, 322, 279) === t("zpcz", 355, 267, 310)) {
        var A = {};
        return A[n(-598, -604, -620, "HV)7", -594) + n(-530, -491, -563, "oEIp", -522) + "e"] = !1, A;
      } else {
        if (!_0x34acd8()) return;
        this[e("o]sb", 80, 23, -22, 23) + e("77&x", 7, -12, 7, 24) + t("E)TT", 279, 165, 234)] = -9377 + 2 * -1985 + 13347, this[t("S53&", 252, 234, 286) + n(-517, -486, -554, "*o]P", -547) + "p"] = void 0, _0x9da5fb[e("j[@b", 4, -85, -88, -41) + n(-587, -559, -546, "Zc[8", -587) + n(-455, -524, -463, "VAzq", -475) + e("&hA&", 20, 19, -36, -2)](n(-570, -537, -492, "6QI3", -507) + "wn", this[e("gf5T", -59, 71, 4, 10) + r("E)TT", -387) + o("S53&", -312, -251, -263)][n(-519, -476, -466, "163S", -469)](this));
      }
    function o(a, g, I, C, s) {
      return ee(a - 98, g - 371, I - 106, C - -210, a);
    }
    function r(a, g, I, C, s) {
      return aA(g - -775, g - 391, a);
    }
    return { performance: !0, hiccupAmount: this[o("018O", -262, -154, -211) + e("lsN2", 0, 57, 4, 43) + t("rN64", 228, 219, 283) + "t"](), firstHiccup: this[r("R[Y5", -366) + t("EF(e", 269, 234, 240) + t("VAzq", 285, 297, 355) + r("@12M", -345) + "ss"]() };
  }
  [Ct(128, 112, 183, "@12M") + Te(-219, -175, -204, -117, "lsN2") + Ct(123, 103, 135, "XbJl") + "t"]() {
    function n(A, o, r, a, g) {
      return aA(A - 717, o - 414, a);
    }
    function t(A, o, r, a, g) {
      return ee(A - 122, o - 271, r - 259, A - -366, a);
    }
    function e(A, o, r, a, g) {
      return ee(A - 18, o - 478, r - 324, A - 1054, r);
    }
    return this[t(-378, -356, -384, "6QI3") + n(1115, 1065, 1058, "*o]P") + e(991, 1051, "XbJl")];
  }
  [ee(-42, -109, -15, -42, "$%*j") + ee(-13, 29, -15, -21, "lsN2") + aA(518, 584, "9RdH") + aA(502, 440, "ZhfR") + "ss"]() {
    function n(t, e, A, o, r) {
      return aA(o - -358, e - 150, r);
    }
    return this[n(25, 43, 84, 49, "L$3X") + n(22, 95, 121, 55, "bXe$") + "p"];
  }
}
const EQ = 16045 + -15565 * 1, xQ = 1895 + 1 * -1655, qr = -5776 + 5806 * 1, WI = 8137 * 1 + -9790 + 3 * 556, LI = 2476 + 617 * -4, nr = {};
nr.codec = "avc1.42E01E", nr.bitrate = 1e6;
const yo = nr, dQ = -3182 + -1 * 6843 + 37 * 271, lQ = -33914 + -23 * 758 + -1 * -81348;
class uQ {
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
    let n = -5 * -1361 + 9538 + -59 * 277;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class OI {
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
function fQ(i) {
  if (!i) return !1;
  const n = OI.isSupported();
  return !n && m.logError("Video encoding is not supported in this browser."), n;
}
const ir = {};
ir.LOW = "low", ir.STANDARD = "standard";
const ln = ir, rr = {};
rr.SPS = "SPS", rr.PPS = "PPS";
const ii = rr;
class hQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 4273 + 7229 * 1 + -11498, t >= n.length) return;
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
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, ii.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, ii.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === ii.SPS ? n[t] & 904 * 7 + 5008 + 595 * -19 : n[t], o = t + (9099 + 1142 * -6 + -2246);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 153 + -1562 * -2 + -3277; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === -5749 + 1 * 5749) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (1 * 5071 + -9763 + 2347 * 2) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-2 * -2591 + -2 * 1375 + -2430), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class pQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, -1514 + -1 * -1514, 5102 + 4523 * 1 + -385 * 25, 4967 * -2 + 1 * -5659 + 15594]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new hQ();
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
    if (t + 4 > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-1 * 3666 + 1002 * 6 + -2342), r = o + A;
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
    let A = -900 + -1699 * -5 + -7595;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class yQ {
  chunks = [];
  maxChunksCount;
  constructor(n = LI, t = qr) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (-1 * -4411 + -81 + -4329)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-16645 + -1 * -16645, n));
  }
}
class $a {
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
class mQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (oI() && e > A) {
      const a = e, g = A, I = a / g, C = t * I;
      return { width: Math.floor(C / (-8340 + -4376 * 1 + -1 * -12718)) * (1 * 5657 + -8181 + 3 * 842), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / (6 * -671 + 9137 + -5109)) * (-1 * -4137 + 397 * -6 + -1753) };
    }
    const r = t * o;
    return { width: Math.floor(r / 2) * 2, height: t };
  }
  create(n, t) {
    switch (n) {
      case ln.STANDARD:
        return new $a().setBitrate(yo.bitrate).setCodec(yo.codec).setFramerate(qr).setResolution(this.getScaledResolution(t, EQ)).build();
      case ln.LOW:
        return new $a().setBitrate(yo.bitrate).setCodec(yo.codec).setFramerate(WI).setResolution(this.getScaledResolution(t, xQ)).build();
      default:
        throw m.logError("Unsupported preset for video encoder config");
    }
  }
}
class wQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = ln.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new mQ(), this.chunkStorage = new yQ(), this.cameraFramerate = qr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(LI, WI), this.currentConfigPreset = ln.LOW, this.startRecording();
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
    if (oI()) return;
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
    let n = -1327 * -4 + -7917 + 1 * 2609;
    const t = this.cameraFramerate, e = (1 * 7827 + -164 + -6663) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 6637 + 8842 * -1 + 2205;
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
class DQ {
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
    return new wQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class bQ {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!fQ(e)) return;
    const A = new uQ(dQ, lQ), o = new OI(), r = new pQ();
    return new DQ().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function kQ(i, n) {
  const { facingMode: t = Yr.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = bA(null), [o, r] = z(), [a, g] = z(), { handleError: I, setIsCameraReady: C } = de(), s = Ee((E) => {
    g((x) => uB(E, x));
  }, []);
  J(() => {
    if (!A.current) {
      I(new m("Something went wrong during video initialization"));
      return;
    }
    const E = new BQ(A.current), x = new IQ(), Q = new sQ(x), l = new MI(), f = new QQ(), h = {};
    h.cameraHandler = l, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new bQ().create(h), y = {};
    y.videoHandler = E, y.cameraHandler = l, y.performanceCheckup = f, y.cameraEvaluator = Q, y.videoRecorder = p;
    const b = new CQ(y);
    return (async () => {
      try {
        const D = {};
        D.facingMode = t, await b.startFirstVideoStream(D);
      } catch (D) {
        if (D instanceof Error) {
          I(m.fromCameraError(D));
          return;
        }
      }
      r(b), C(!0), s(b.getCameraResolution());
    })(), () => {
      b?.stopStreaming(), C(!1), r(void 0);
    };
  }, [t, I, C, A, s, e, i]);
  const B = {};
  return B.cameraService = o, B.cameraResolution = a, B.onCameraResolutionChange = s, B.videoRef = A, B;
}
function SQ({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = kQ(
    t,
    i
  ), a = pA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ w(sn.Provider, { value: a, children: n });
}
function GQ({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ w(SQ, { cameraConfiguration: i, customEvent: zA, children: n });
}
let v;
const we = new Array(1 * 3056 + 1210 + 4138 * -1).fill(void 0);
we.push(void 0, null, !0, !1);
function ar(i) {
  return we[i];
}
let Qe = -11 * 491 + -8618 + 4673 * 3, Kt = null;
function To() {
  return (Kt === null || Kt.byteLength === -1 * 2665 + -5 * 1004 + 7685) && (Kt = new Uint8Array(v.memory.buffer)), Kt;
}
const Po = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, NQ = typeof Po.encodeInto == "function" ? function(i, n) {
  return Po.encodeInto(i, n);
} : function(i, n) {
  const t = Po.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function ro(i, n, t) {
  if (t === void 0) {
    const a = Po.encode(i), g = n(a.length, -6 * 538 + 7972 + -1 * 4743) >>> -371 * 23 + 6299 + 2234;
    return To().subarray(g, g + a.length).set(a), Qe = a.length, g;
  }
  let e = i.length, A = n(e, 7644 + -313 * 24 + -131) >>> -9530 + 9530 * 1;
  const o = To();
  let r = 1 * 2464 + -347 * -17 + 8363 * -1;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > 127) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -469 + 1 * 469 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-739 * -4 + -3186 + 233), -457 * 4 + 694 * 1 + 1 * 1135) >>> -5259 * -1 + -8702 + 3443;
    const a = To().subarray(A + r, A + e), g = NQ(i, a);
    r += g.written, A = t(A, e, r, 2638 * 2 + 7875 + -13150) >>> 0;
  }
  return Qe = r, A;
}
function JI(i) {
  return i == null;
}
let jt = null;
function ce() {
  return (jt === null || jt.byteLength === 4157 * 2 + -7956 + -358) && (jt = new Int32Array(v.memory.buffer)), jt;
}
let oo = we.length;
function RQ(i) {
  i < -8383 * 1 + -2319 + -2 * -5417 || (we[i] = oo, oo = i);
}
function UI(i) {
  const n = ar(i);
  return RQ(i), n;
}
const gr = {};
gr.ignoreBOM = !0, gr.fatal = !0;
const YI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", gr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && YI.decode();
function un(i, n) {
  return i = i >>> 5680 + 1 * 4601 + 447 * -23, YI.decode(To().subarray(i, i + n));
}
function sr(i) {
  oo === we.length && we.push(we.length + (3814 * -2 + 8502 + -873));
  const n = oo;
  return oo = we[n], we[n] = i, n;
}
let qt = null;
function TI() {
  return (qt === null || qt.byteLength === 5154 * -1 + -1131 * 1 + 6285) && (qt = new Uint32Array(v.memory.buffer)), qt;
}
function Ag(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = TI();
  for (let A = 0; A < i.length; A++)
    e[t / (8534 + -2 * 1621 + -5288 * 1) + A] = sr(i[A]);
  return Qe = i.length, t;
}
function eg(i, n) {
  i = i >>> 7971 * -1 + 889 + 7082;
  const t = TI(), e = t.subarray(i / (9363 + -4397 * -1 + -13756), i / 4 + n), A = [];
  for (let o = 1170 + -3 * -2566 + -8868; o < e.length; o++)
    A.push(UI(e[o]));
  return A;
}
function FQ(i, n) {
  const t = ro(i, v.__wbindgen_malloc, v.__wbindgen_realloc), e = Qe, A = ro(n, v.__wbindgen_malloc, v.__wbindgen_realloc), o = Qe, r = v.is_mobile_supported(t, e, A, o);
  return Vr.__wrap(r);
}
const Ir = {};
Ir.register = () => {
}, Ir.unregister = () => {
};
const tg = typeof FinalizationRegistry > "u" ? Ir : new FinalizationRegistry((i) => v.__wbg_licensevalidationresult_free(i >>> 28 * -352 + 199 + -9 * -1073));
class Vr {
  static __wrap(n) {
    n = n >>> -8254 + 281 * 2 + 7692;
    const t = Object.create(Vr.prototype);
    return t.__wbg_ptr = n, tg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 1680 * 4 + -1206 * 7 + 1722, tg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    v.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = JI(t) ? 0 : ro(t, v.__wbindgen_malloc, v.__wbindgen_realloc), a = Qe;
    const g = Ag(e, v.__wbindgen_malloc), I = Qe, C = Ag(A, v.__wbindgen_malloc), s = Qe, B = ro(o, v.__wbindgen_malloc, v.__wbindgen_realloc), E = Qe, x = v.licensevalidationresult_new(n, r, a, g, I, C, s, B, E);
    return this.__wbg_ptr = x >>> 0, this;
  }
  get is_valid() {
    return v.licensevalidationresult_is_valid(this.__wbg_ptr) !== 3293 + -1 * -278 + -3571 * 1;
  }
  get features_json() {
    try {
      const e = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (3769 + -3765 * 1) + (-721 * 9 + -643 * -9 + 702)], t = ce()[e / 4 + (-1651 + 826 * 2)];
      let A;
      return n !== -3176 + -397 * -8 && (A = un(n, t).slice(), v.__wbindgen_free(n, t * (-1 * 7132 + 4563 + 2570), 1)), A;
    } finally {
      v.__wbindgen_add_to_stack_pointer(-6808 + 2 * 3412);
    }
  }
  get errors() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / 4 + (-3894 + -11 * -354)], t = ce()[A / (2341 + -1 * 2337) + (-4849 + 1 * -6482 + 11332)], e = eg(n, t).slice();
      return v.__wbindgen_free(n, t * (-458 + -4804 * 1 + 2633 * 2), -6022 + 739 * 13 + -3581 * 1), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / (-14791 + -2959 * -5) + (2018 * -1 + 3929 * 1 + -1911)], t = ce()[A / 4 + (2349 + -2 * 1174)], e = eg(n, t).slice();
      return v.__wbindgen_free(n, t * (-1689 * 5 + 1508 + 1 * 6941), -8277 * -1 + 4667 + -6470 * 2), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(-2 * -4086 + -6452 * -1 + -14608);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / (2633 * -1 + 4138 * -1 + 6775) + (-16 * -337 + -19 * 302 + 346)], A = ce()[o / (-1666 + 5 * 334) + (3092 + -281 * 11)];
      return n = e, t = A, un(e, A);
    } finally {
      v.__wbindgen_add_to_stack_pointer(16), v.__wbindgen_free(n, t, 8 * 832 + 3468 + -10123);
    }
  }
}
async function vQ(i, n) {
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
function MQ() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = ar(t), A = typeof e == "string" ? e : void 0;
    var o = JI(A) ? 6305 + 5 * 863 + -10620 : ro(A, v.__wbindgen_malloc, v.__wbindgen_realloc), r = Qe;
    ce()[n / (9907 * 1 + -9 * 655 + -1336 * 3) + (1 * -1986 + -1682 + -1223 * -3)] = r, ce()[n / (2902 * 1 + -4258 + 1360) + (-1 * 1603 + 1193 + 410)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    UI(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = un(n, t);
    return sr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return sr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return ar(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(un(n, t));
  }, i;
}
function WQ(i, n) {
  return v = i.exports, PI.__wbindgen_wasm_module = n, jt = null, qt = null, Kt = null, v;
}
async function PI(i) {
  if (v !== void 0) return v;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAAAAEAAAAAAAAAoEMQAGsAAAA5AgAAQgAAAKBDEABrAAAAOgIAADQAAACgQxAAawAAADsCAAAiAAAAoEMQAGsAAADmAgAAMQAAAKBDEABrAAAA5wIAADQAAACgQxAAawAAAOkCAAAlAAAAoEMQAGsAAAB8BwAAGAAAAKBDEABrAAAAgwcAABcAAACgQxAAawAAAA8IAAARAAAAZGl2aWRlIGJ5IHplcm8hAHg3EAAPAAAAoEMQAGsAAABnCQAACQAAAEJpZ1VpbnRkYXRhAEkAAAAEAAAABAAAAIIAAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlAEkAAAAIAAAABAAAAIMAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zbWFsbHZlYy0xLjEzLjIvc3JjL2xpYi5ycwAA+DcQAGIAAABSAQAALgAAAGNhcGFjaXR5IG92ZXJmbG93AAAA+DcQAGIAAABBAQAANgAAAPg3EABiAAAAzgQAAA4AAABhc3NlcnRpb24gZmFpbGVkOiBuZXdfY2FwID49IGxlbvg3EABiAAAAmQQAAA0AAABQiRAATgAAAM4FAAAVAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAKBDEABrAAAAUQgAABMAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9tYWMucnMAAAw5EAByAAAAGwAAABwAAABjYXJyeSBvdmVyZmxvdyBkdXJpbmcgbXVsdGlwbGljYXRpb24hAAAADDkQAHIAAAAjAAAAGgAAAAw5EAByAAAARAAAABsAAAAMORAAcgAAAIcAAAAWAAAADDkQAHIAAACYAAAAEgAAAAw5EAByAAAAmQAAABIAAAAMORAAcgAAANMAAAAwAAAADDkQAHIAAADXAAAAMAAAAAw5EAByAAAA2AAAADAAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzODoQADQAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9hZGQucnMAAHQ6EAByAAAAEwAAABoAAABJAAAABAAAAAQAAAAqAEGQ9sAAC8UEL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL21vbnR5LnJzAAAAEDsQAGkAAAARAAAABQAAABA7EABpAAAAIQAAACcAAAAgAAAADJYQAAAAAACcOxAAAQAAAJw7EAABAAAAnDsQAAEAAAAQOxAAaQAAADIAAAAFAAAAEDsQAGkAAABLAAAAJgAAABA7EABpAAAATAAAAA8AAAAQOxAAaQAAAE4AAAAqAAAAEDsQAGkAAABBAAAAKQAAABA7EABpAAAAQQAAAEQAAAAQOxAAaQAAAEIAAAAXAAAAEDsQAGkAAABDAAAAKQAAABA7EABpAAAARgAAAA8AAAAQOxAAaQAAAIIAAAATAAAAEDsQAGkAAACtAAAAFwAAABA7EABpAAAAtAAAABwAAAAQOxAAaQAAAMAAAAAYAAAAEDsQAGkAAACoAAAAIwAAAGFzc2VydGlvbiBmYWlsZWQ6IG0uZGF0YVswXSAmIDEgPT0gMRA7EABpAAAAggAAAAUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9kaXYucnMAANQ8EAByAAAAIQAAAAYAQeD6wAAL6RZhdHRlbXB0IHRvIGRpdmlkZSBieSB6ZXJvAAAA1DwQAHIAAAAsAAAAEgAAANQ8EAByAAAAMAAAADkAAADUPBAAcgAAAEEAAAAfAAAA1DwQAHIAAABTAAAAHQAAANQ8EAByAAAAcAAAAB4AAADUPBAAcgAAAHsAAAAwAAAA1DwQAHIAAACBAAAAGQAAANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = MQ();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await vQ(await i, n);
  return WQ(t, e);
}
function og(i, n, t, e, A) {
  return cA(A - 684, t);
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return cA(I - -336, a);
  }
  function e(a, g, I, C, s) {
    return cA(g - -21, I);
  }
  const A = i();
  function o(a, g, I, C, s) {
    return cA(s - 840, a);
  }
  function r(a, g, I, C, s) {
    return cA(s - -577, I);
  }
  for (; ; )
    try {
      if (parseInt(e(462, 480, "4RCW", 503, 503)) / 1 + -parseInt(e(452, 471, "jqp]", 488, 450)) / 2 + -parseInt(t("&&Uo", 154, 152, 174, 167)) / 3 * (parseInt(r(-133, -96, "Eh^P", -126, -110)) / 4) + parseInt(o("F!KJ", 1367, 1351, 1347, 1351)) / 5 * (-parseInt(e(464, 458, "4RCW", 433, 474)) / 6) + parseInt(e(441, 460, "Z3gd", 455, 475)) / 7 + parseInt(r(-86, -46, "yvLT", -77, -63)) / 8 + parseInt(e(445, 470, "!dOj", 469, 478)) / 9 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(fn, 1 * 43133 + -1251 * -858 + -569126);
function cA(i, n) {
  i = i - (-389 * 23 + 1 * 9523 + -110);
  const t = fn();
  let e = t[i];
  if (cA.WnEkxX === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    cA.tiAoIt = g, cA.SyCUBR = {}, cA.WnEkxX = !0;
  }
  const o = t[0], r = i + o, a = cA.SyCUBR[r];
  return a ? e = a : (cA.GKeTma === void 0 && (cA.GKeTma = !0), e = cA.tiAoIt(e, n), cA.SyCUBR[r] = e), e;
}
function LQ(i, n, t, e, A) {
  return cA(i - -208, t);
}
function mo(i, n, t, e, A) {
  return cA(n - -355, t);
}
function fn() {
  const i = ["y0mjvtq", "irzjcuNdTaFdPSkCW4aPWRZcUa", "tLFdRCoEC8o6kSkVCtJcLxdcOG", "WPiWW5VcSY8", "WReDx2RdVq", "WQtdPcxcH0K", "WQb1kLpcVa", "gK58ia", "hgRcNSo8WQ8", "tcnFcLbqr8oTWRZdQHxcKda", "gspcJSo6WQ0", "funRlHTdW4JdTSkWuCkCWO0", "oWCEnmos", "h8kcW5BdVSodWRP5W7f3hK0", "W5ddV8o6eWS", "WRDIDKNcRSoeuXBcTa", "fJ7cK8o8WQi", "W4tcUtldOLHQW5y4qSk3WP0+W4K", "FSoqALFcKtmWaCkMWRlcJmkEWQa", "lsvsz8og", "W5ZdS3Tuumk7wSk3WOdcGrq", "BmoKBCkqWPmbWPq3", "bSoqWO7cRSkD", "t8ofWRJcPSkc", "W5hdT3HrvmoBnmkYWRNcPqX1W7G", "WRmrswNdGa", "t3VdJ8kKW7VdKmoEBvhdIt55", "C8oAF8oAcColW7uGW45jBG", "kWS3WPtcLG", "bxhcKKK", "W5hdT8o0hWa", "FCoxlGxdRwvVmW", "mLTGbIa", "jxaZzSoV", "W4tcPYevqG", "xXyWW4vco8o9WPGhj8kXW74", "iCklkqBdHG", "W4fmW71cda", "wxWhvri", "fezNib4rW5FdM8kkCCkT", "zZysnmo7", "d0dcQ8koWP/cNchcJbpcJSoIW74", "W5KtfgxdVq", "oWSfiSot", "bx7cL1rS", "CIeuWOFdUW", "qCoivrtdVq", "WPtdRwxdI8od", "scfyxWi+fmoaWOq", "WQxdOI3cHW0"];
  return fn = function() {
    return i;
  }, fn();
}
function wo(i, n, t, e, A) {
  return cA(n - -24, A);
}
function ri(i, n, t, e, A) {
  return cA(e - -278, A);
}
class OQ {
  [mo(141, 132, "8E3c") + mo(96, 121, "dMR^") + wo(424, 446, 462, 465, "X5kA")] = !1;
  async [mo(132, 114, "vgLW")](n) {
    function t(a, g, I, C, s) {
      return mo(a - 327, I - 643, C);
    }
    function e(a, g, I, C, s) {
      return LQ(s - 1025, g - 74, g);
    }
    function A(a, g, I, C, s) {
      return wo(a - 455, g - 474, I - 175, C - 360, a);
    }
    function o(a, g, I, C, s) {
      return ri(a - 400, g - 476, I - 264, s - 743, I);
    }
    function r(a, g, I, C, s) {
      return ri(a - 210, g - 82, I - 147, I - 432, C);
    }
    try {
      const a = n + (r(639, 640, 663, "Bpv]", 639) + "/") + Ka;
      await PI(a), this[t(786, 781, 782, "u864", 770) + e(1322, "L%[F", 1291, 1281, 1299) + r(662, 651, 637, "Nhp0", 627)] = !0;
    } catch {
      this[A("!dOj", 940, 949, 921) + A("ZJ#R", 950, 958, 927) + t(781, 772, 773, "V0jC")] = !1, console[o(943, 945, "HKss", 943, 962)](Ka + (r(653, 631, 632, "&&Uo") + e(1328, "ESCo", 1290, 1293, 1313) + t(809, 804, 794, "ZJ#R") + t(809, 818, 800, "lBMr") + r(639, 650, 634, "Bpv]") + e(1299, "Nhp0", 1302, 1341, 1319) + t(749, 749, 761, "^cQH") + e(1339, "ZJ#R", 1332, 1304, 1315) + A("u864", 965, 985, 978) + o(957, 945, "5GGX", 914, 937) + t(758, 769, 762, "yvLT") + r(659, 632, 643, "PB3l") + t(777, 775, 781, "9TfU") + A("X5kA", 954, 958, 945) + "n."));
    }
  }
  [og(1198, 1192, "lBMr", 1201, 1197) + wo(454, 453, 459, 434, "v8pA") + ri(225, 191, 220, 206, "vgLW") + "ed"]() {
    function n(e, A, o, r, a) {
      return wo(e - 122, A - 584, o - 401, r - 438, e);
    }
    function t(e, A, o, r, a) {
      return og(e - 138, A - 428, A, r - 47, a - -1426);
    }
    return this[n("nDjM", 1028, 1043, 1026) + n("9dHb", 1046, 1061, 1021) + t(-269, "PB3l", -248, -242, -247)];
  }
}
class ai extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function K(i, n) {
  i = i - (-4 * -2207 + 8 * 1195 + -18219);
  var t = hn(), e = t[i];
  if (K.ykuJPj === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    K.CJBwKK = o, K.TdRYRB = {}, K.ykuJPj = !0;
  }
  var r = t[6446 + -11 * -341 + -10197], a = i + r, g = K.TdRYRB[a];
  return g ? e = g : (K.mMvbHK === void 0 && (K.mMvbHK = !0), e = K.CJBwKK(e, n), K.TdRYRB[a] = e), e;
}
function hn() {
  var i = ["h8o/kSozWRu", "m8oYaq", "yWJcSmkrDG", "pH/dRYhcN0fV", "lSkzchSk", "W71KjW", "Cs/cSSkvCa", "W70SW7C3vG", "lCofW5G", "omooW5mSWQi", "W7hdOchcNHH/W7RdP8o3wCopWQ7cJq", "o8kTWORcImoN", "xCoCoSkCW7a", "gJezuSkonY5AWOxcUxi1", "FCkqW7DAWOi", "vmoqpmoRaq", "W4RcN3jmCSoeW4rfCZVdLgpcHW", "W4jyhSoPzZbwdwrZAsKM", "WO/cS3VcGGi", "yrJcS8khyq", "WOhdHdO", "W7LSmmohW7S", "sgDkeSoj", "BmohomkGW5O", "p23cSepdIJi2CCorWOFdI8kmW7W", "k8kWWOS", "W7SRW7ySsW", "suDfb8oE", "WQWepd/cNa", "WQKnWOKZWOPZWPldMLlcK2RdVHK", "W5e0W45cWQvvbwrBste0", "gmoRdq", "W7CQW5S1wa", "rSohW7G", "qSo2kWK6WPBcLq3dUg3cTmkAW4W", "WPKAACk0nG", "kCo2bHnB", "a8kHDa", "W6W8W6uVBq", "W4ioWP7cICkR", "mJBcJSkfqa", "WOVdHd91WQO", "W7tdOIhcLH19W7NdKmoZx8oQWRpcOa", "oSooWOuilmobWQXnqmklig0u", "l8ohW48", "bCkxxmolWQRcUMxcVLRcGmkZfCkm", "DmkhW6jhWPK", "xmoogmkEW7q", "f8o2r1OZWPaTW7VcPSkjW6VdGCoi", "C8kuW6jnWP8", "zNldV8krb8kkWPi", "j8oYeWrg", "iSoKibvd", "rmk0t8kBW6XoxSkjvKnsW6ldSW", "W75YnmoLW6e", "rSokhW", "kmkCfh0r", "W75rW45JW5O", "WOfOWOGHW7i", "juD5", "W7CQWO3dPSoV", "lSoGW7RcHG", "WPxdIIi", "k8o3W6JcGam", "wCohW7KTW4a", "t8oBoSocoW", "CmkvWO4OANeQWRavW79tkWS", "AmopjCk9W60", "WOCiwSk0pG", "DWtcQmkDFa", "imoqW4tcQh8", "ACkqW6vXWP0", "W7u0WPVdOCo1"];
  return hn = function() {
    return i;
  }, hn();
}
function gi(i, n, t, e, A) {
  return K(e - 950, A);
}
function Do(i, n, t, e, A) {
  return K(A - 886, t);
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return K(s - 164, C);
  }
  var e = i();
  function A(g, I, C, s, B) {
    return K(s - 864, B);
  }
  function o(g, I, C, s, B) {
    return K(s - -820, I);
  }
  function r(g, I, C, s, B) {
    return K(I - 213, g);
  }
  for (; ; )
    try {
      var a = parseInt(o(-641, "SH^R", -616, -647, -618)) / 1 + parseInt(o(-643, "B*yP", -578, -615, -627)) / 2 * (parseInt(r("n0Dq", 449, 460, 484, 466)) / 3) + -parseInt(t(337, 315, "4HKx", 334, 357)) / 4 + parseInt(A(1040, 1026, 1031, 1053, "i4y&")) / 5 + -parseInt(A(1095, 1083, 1094, 1067, "AGNV")) / 6 + parseInt(A(1052, 1042, 1050, 1077, "*56m")) / 7 + -parseInt(r("n0Dq", 397, 408, 386, 401)) / 8;
      if (a === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(hn, 251308 + 80 * 10613 + -419062);
function _A(i, n, t, e, A) {
  return K(i - -733, A);
}
function Bt(i, n, t, e, A) {
  return K(n - -89, e);
}
function pe(i, n, t, e, A) {
  return K(t - -476, A);
}
class ng {
  constructor(n) {
    function t(r, a, g, I, C) {
      return K(r - 182, g);
    }
    function e(r, a, g, I, C) {
      return K(a - 357, C);
    }
    this[e(542, 577, 608, 540, "D5Tq") + A("CbRF", -342, -320)] = n;
    function A(r, a, g, I, C) {
      return K(g - -516, r);
    }
    function o(r, a, g, I, C) {
      return K(C - -82, r);
    }
    try {
      this.#A = n[e(580, 568, 552, 563, "CbRF") + A("iGLO", -323, -292, -295, -289) + e(507, 542, 568, 520, "4MCM")] && JSON[o("VaT^", 160, 135, 139, 145)](n[A("^ERW", -283, -315, -344, -333) + t(413, 389, "WE(x", 422, 422) + t(379, 413, "qSp7", 366, 411)]), this.#e = n[A("MfUo", -297, -300, -324, -311) + o("@*7S", 166, 182, 122, 156)];
    } catch (r) {
      console[o("rtU%", 158, 165, 156, 139)](r);
    }
  }
  #A;
  #e;
  get [_A(-561, -526, -531, -574, "B*yP") + "id"]() {
    function n(e, A, o, r, a) {
      return _A(A - 672, A - 85, o - 295, r - 55, a);
    }
    function t(e, A, o, r, a) {
      return _A(e - -89, A - 428, o - 405, r - 66, a);
    }
    return this[n(94, 118, 94, 135, "nyI%") + n(152, 146, 135, 179, "B*yP")][t(-630, -635, -597, -664, "qbkQ") + n(134, 158, 165, 141, "#(wS")];
  }
  get [_A(-555, -587, -540, -530, "e9($") + "s"]() {
    function n(A, o, r, a, g) {
      return _A(A - 82, o - 75, r - 271, a - 238, g);
    }
    function t(A, o, r, a, g) {
      return _A(A - 29, o - 488, r - 86, a - 133, a);
    }
    function e(A, o, r, a, g) {
      return Do(A - 306, o - 482, g, a - 487, o - -1626);
    }
    return this[e(-538, -510, -527, -517, "36u5") + n(-444, -438, -460, -480, "B*yP")][t(-518, -513, -514, "qbkQ") + "s"];
  }
  get [_A(-505, -496, -537, -508, "gFGk") + Bt(184, 152, 123, "36u5")]() {
    function n(A, o, r, a, g) {
      return Do(A - 351, o - 499, A, a - 174, o - -1646);
    }
    function t(A, o, r, a, g) {
      return pe(A - 122, o - 427, A - 2, a - 123, a);
    }
    function e(A, o, r, a, g) {
      return Bt(A - 102, a - 81, r - 209, r);
    }
    return this[t(-303, -335, -330, "4MCM") + e(233, 235, "WE(x", 201)][n("afsy", -591, -613, -623) + n("*56m", -569, -577, -549)];
  }
  get [pe(-272, -277, -258, -258, "$Zpl") + "b"]() {
    return this.#A;
  }
  get [pe(-271, -211, -236, -259, "qbkQ") + _A(-540, -564, -520, -514, "iGLO")]() {
    return this.#e;
  }
  get [pe(-301, -280, -281, -289, "gFGk") + pe(-233, -244, -253, -229, "rtU%") + pe(-242, -211, -237, -265, "nyI%") + gi(1186, 1164, 1137, 1154, "36u5")]() {
    function n(o, r, a, g, I) {
      return _A(r - 1484, r - 482, a - 90, g - 412, a);
    }
    function t(o, r, a, g, I) {
      return pe(o - 388, r - 500, o - 182, g - 392, I);
    }
    function e(o, r, a, g, I) {
      return Bt(o - 462, a - -123, a - 338, o);
    }
    function A(o, r, a, g, I) {
      return _A(g - 687, r - 492, a - 381, g - 210, I);
    }
    return !!this.#A?.[n(901, 925, "WE(x", 911) + n(970, 966, "B*yP", 971)]?.[n(965, 949, "qbkQ", 943) + e("@*7S", -42, -31) + e("D5Tq", 7, 20) + e("CbRF", -15, 0) + A(179, 179, 131, 160, "WE(x") + A(157, 148, 188, 154, "i]K(") + t(-114, -133, -132, -93, "^ERW")];
  }
  get [_A(-500, -525, -513, -464, "*56m") + Do(1076, 1067, "@*7S", 1081, 1100) + Bt(75, 110, 86, "M%OA") + _A(-504, -498, -508, -518, "nyI%") + gi(1173, 1114, 1116, 1137, "SH^R") + Do(1122, 1097, "yDmR", 1099, 1108)]() {
    function n(r, a, g, I, C) {
      return gi(r - 393, a - 46, g - 407, r - 14, a);
    }
    function t(r, a, g, I, C) {
      return Bt(r - 283, C - -17, g - 315, g);
    }
    function e(r, a, g, I, C) {
      return pe(r - 63, a - 469, I - 598, I - 117, a);
    }
    function A(r, a, g, I, C) {
      return Bt(r - 468, a - -502, g - 461, I);
    }
    function o(r, a, g, I, C) {
      return pe(r - 471, a - 12, g - 191, I - 18, C);
    }
    return !!this.#A?.[e(332, "SH^R", 305, 304) + n(1198, "CbRF", 1198)]?.[o(-48, -58, -60, -64, "fl[9") + t(88, 67, "TYhY", 49, 82) + A(-356, -374, -362, "i4y&") + e(275, "VaT^", 296, 305) + o(-60, -61, -48, -17, "MfUo") + o(-93, -123, -110, -93, "fl[9") + A(-364, -356, -328, "nyI%")];
  }
}
function eA(i, n, t, e, A) {
  return j(n - 454, e);
}
(function(i, n) {
  function t(g, I, C, s, B) {
    return j(I - 104, B);
  }
  function e(g, I, C, s, B) {
    return j(C - -693, B);
  }
  function A(g, I, C, s, B) {
    return j(C - -838, B);
  }
  function o(g, I, C, s, B) {
    return j(g - 468, I);
  }
  const r = i();
  function a(g, I, C, s, B) {
    return j(B - -277, C);
  }
  for (; ; )
    try {
      if (parseInt(a(465, 485, "b%bT", 474, 378)) / 1 * (-parseInt(a(371, 213, "hW%#", 345, 338)) / 2) + parseInt(e(-61, -126, -21, 101, "7FiP")) / 3 * (-parseInt(e(-227, -127, -134, -60, "7FiP")) / 4) + parseInt(o(1106, "em)[", 1114, 1156, 1195)) / 5 + -parseInt(A(-302, -101, -199, -111, "0iz#")) / 6 * (-parseInt(o(1029, "1y5I", 902, 1051, 992)) / 7) + parseInt(t(541, 619, 676, 698, "(H9o")) / 8 + parseInt(o(1202, "YxqA", 1209, 1301, 1214)) / 9 + -parseInt(o(977, "3X61", 895, 920, 976)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(pn, 884594 * 1 + 538302 + -59563 * 16);
function KA(i, n, t, e, A) {
  return j(t - -954, i);
}
function EA(i, n, t, e, A) {
  return j(n - 597, e);
}
function pn() {
  const i = ["WOtdQwHDgq", "oWGNjYO", "zK3cOfm", "W6NdGCoyimkm", "WOJdSx5pjq", "DYqCW6rA", "WQzmWO06WPa", "WP40aNGD", "W4FcUCo4CG", "EXafW4H/", "zaZdO0CF", "WQ5QdhZdMW", "WO07W6jgAW", "WPJdP8o0tCou", "WPGGW79UBW", "W5ddQqldV8kh", "WRzKdxVdKa", "W4FcJLmjW6u", "jN/cKmk0nW", "c8kBCwep", "WPrFWOW4W4i", "oMZcSHFcUG", "WOC9W7nMza", "W4bIrrZcHq", "W4NdVWFcVMvOhK0", "WR9YW5i3cG", "ACo+jG0", "W5zHW4qXW7G", "W703WO5HtetcVJRdOhxcN0bQ", "W607tZ/cJSoIy8khWQaNWPpdJCo8", "CCoFW6GVW6FdHd/dJwddRXZcMq", "WP0lwcxcUW", "W4VdPXC", "cmoAB2yf", "r0KDvZ4", "EGasW5H1", "isVdJL1p", "iCorW4y", "WP/dP8oUFmol", "W553WPTE", "lmkmW6ldGW", "kchdJJfp", "W6VdKSoN", "ogZcPrVcTq", "zg4NrHO", "WQigzcFdMa", "lvW5WP7cOa", "FqSfW5KW", "kZ3dMaXY", "W7FdMSoM", "W4pcU8o0CHW", "kCoVWOaqWO4", "W4NcVCo/BWO", "EmkkW5xdKJ0", "W7yVgW", "WQn0W7CWhq", "W7SqW4egW5m", "kSoutCo+W5a", "kKSWWOZcPG", "WOpdJSkjhSkq", "iCoyWPZcOCoC", "WQDHW486fG", "WOO3W6q", "oSkTWRZcOdu", "pSoJWOK", "W4T3W6mZ", "W5H3WPSuWOW", "W5PGW6KOW6S", "WOyjWPZcM2S", "n3FcQq3cQa", "jK8IWO7cUW", "m8kcW7K", "xCkLW4BdKte", "WO9xWPWWWOW", "CqqAW5vQ", "hCk1WQfReq", "WRmybeG8", "W5XGW7q0W6O", "WQFdHSkEgmkw", "WRv+kYjx", "p8kiBhWv", "bgtcSHy", "ldBdLq5v", "WRVdJSkjfq", "W5uTWOtcNfxdPaK", "xcOIWPXC", "AwldJCkrWP8", "gYxdQhiW", "WPJdRmkypSkj", "WOKKW6fiFq", "W6NdMSoZdmkD", "WOZdUSoVFSoq", "WPNcQaxdKW", "WPfdaxRcVq", "vSo6pbBdVa", "WQ9xWPWWWOW", "c1WKWOlcOq", "zue+Fb0", "h8kbW73dS2y", "gMRdPJRcLa", "W783W4PbW4S", "WQymDs3dMq", "WR5Yjq9e", "WQrBWOSrWO0", "W5LGWPadWPO", "W5NcT8o/", "p2hcTZ/cSa", "z8k+W5LaW58+aayJj2ur", "WOSGW70eW5rlWOH9", "Dmo+prddTq", "fCkjW7O", "WPHVhhxdQG", "vSkZWRbagW", "W67cK0acW5S", "WP7cVW7cJLS", "lh/cLG", "WQfNW4G", "W4nFW5PRDG", "W74/omoJW5m", "WRbSdq", "WQGaCIZdKG", "W587W4yBW4u", "WQ9ZWPW9WOa", "W6NdNmo3lmkb", "W687sJ3cJSoNmmkIWOmMWPFdLW", "WQGgDGZdJG", "WQmsWPhcGCkt", "WOecWOVcML4", "zCkOdfD2", "WPddP8oHBmo1", "WOJdNCksdSkl", "W4GsqsVdPxSIWR3cNCkIgJ4", "W4VdICkscmkw", "WQDBWPK0WPC", "WRy5p1i2", "BfhcPLrD", "WRGnWPdcNCkj", "iCoyWPRcUCob", "W7GLWRf0", "W78IWQnYya", "BCoXkqW", "W7XqW5uAmGxdSa", "W5HXwbhcMq", "W5X5tXFcNW", "WOifWP/cKCkd", "FwWWwWW", "CaqcW594", "WPOjwWhcVG", "W63cRgSSW60", "WOO4W7XqBW", "WQXLW5uQgW", "fmouWOhcPJ4", "ySkZW53dMYS", "EgyVubS", "pX88edy", "rcJdS2iW", "WPCbWP3cI8kc", "W74Oha", "uW0LW6vE", "WPxcRbxcNKa", "lCkcW6JdJdu", "FGOeW7LX", "W4hdPWldLmkp", "mSocvSoPW4y", "W5fqW5RdHGNcO3lcOXOrhmoeW7O", "WPyvtWe", "WPmutIVcVG", "WQzqWOWWW4i", "lJddKG4", "lCkeW6JdIc8", "WRqOovi", "kmkeWRL/WRW", "WRf+mrLf", "CYRdLmomAmofWRHeCe4WtSkw", "vmkZWRfReG", "WQmmzqRdIq", "f8kvWP7cON0", "dxpcH8kDma", "m8oNWO8CWOq", "lCkdWRnU", "WPX0FY5V", "EYFcPIVcKq", "WOm1W6rGyG", "W5vBW5X7EW", "WP3dVmoLrmoq", "nCopWPpcRSoD", "WPFdSxHc", "kCkAWOVcOa", "WP0+W5rNzq", "W5z9W7u", "W4/dUmo/CXS", "A2ldNG", "WQv9prbX", "W4/cTSoIEt8", "WO7dGCkogmoy", "EMGM", "WO4MW6jSEa", "jmkFW7NdGJm", "jCkgWP/cOc8", "W4fbwahcKa", "WPuqWPVcIW", "W6pdMSoMdmko", "W7qJaCo2W5i", "W4OsrcNdPx5XWPJcVSkJhIrd", "WPHwefxcVa", "W4TMW7CIW70", "W4KrWPrEtW", "WPpcQHi", "kuSIWQhcUG", "WQPnWQG0WPe", "kmoVWP4x", "WQj9WP4KWRC", "mmkot2yf", "WQblWOWHWO0", "WPddOCoJBCox", "mSkBWP8", "WRmUneq", "m3/cL8kNna", "W4zvW4b8Ba", "Bmo+oWddUa", "x8k5WRy", "WOBdTx5pjq", "WOzArXdcN8kWWOe", "fSkmW7NdGYG", "W6VcN0qiW6q", "pmoJWPVcPSoC", "W5hcLCo4imkm", "k1WKWOlcOq", "zmkyW4BdU8kFtwmeW79pWOJcVc4", "ymkIcLXR", "kchdJJLj", "ASoSkK3dVa", "WRvVd07dLq", "aCoVWPFcMCoI", "iSkPWO9ZWR0", "WRn4kW", "amoSW7qXqmoYWPhcRdDhWPtdKNO", "W6C+bSoSW5q", "CMO0qqO", "wYFcPIVcKq", "DmoTjG3dPa", "W7m3W5WkW7C", "WRdcH8kNFCoyFrjasmohW6hcLLm", "W6ldUGldVSkC", "jdRcISkxkG", "D3tcJ0qthJyRWPmZWPCF", "W7xdH8o9j8kB", "cWVdRL1Q", "lmkmWQ55WRO", "zMdcUub2", "CgZdI8oFWP8", "WQr5W6uUnmo2WPfKEZBdQ8km", "rmkRWPtdUXC", "WRyUpLiG", "oCkuW5RdVbqCWQO", "qSkKsx1k", "l8ooW6xdN2G", "yCklW6tdMc8"];
  return pn = function() {
    return i;
  }, pn();
}
function j(i, n) {
  i = i - (367 * -21 + 864 + 2 * 3665);
  const t = pn();
  let e = t[i];
  if (j.EDOuPR === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    j.kcrmdm = g, j.mGNRNT = {}, j.EDOuPR = !0;
  }
  const o = t[0], r = i + o, a = j.mGNRNT[r];
  return a ? e = a : (j.yNPLem === void 0 && (j.yNPLem = !0), e = j.kcrmdm(e, n), j.mGNRNT[r] = e), e;
}
function wA(i, n, t, e, A) {
  return j(e - -454, t);
}
function xA(i, n, t, e, A) {
  return j(n - -632, i);
}
class JQ {
  constructor(n) {
    function t(A, o, r, a, g) {
      return j(A - 953, g);
    }
    function e(A, o, r, a, g) {
      return j(o - -886, A);
    }
    this[t(1596, 1636, 1686, 1489, "3X61") + e("le#W", -289) + "d"] = n;
  }
  [EA(1373, 1248, 1323, "uSIM") + "se"];
  [eA(922, 1043, 1042, "ZHB2") + EA(1200, 1183, 1184, "7FiP") + EA(1166, 1196, 1218, "hW%#") + wA(165, 122, "66c7", 245)] = [wA(237, 268, "3X61", 152) + KA("mHfo", -233, -323) + "ic", wA(262, 151, "y@Ut", 164) + wA(-31, 56, "rEU4", 50) + "ic"];
  [xA("1Hzt", -21) + eA(1073, 1055, 1095, "ZHB2")];
  async [xA("!3Is", -99)](n) {
    function t(g, I, C, s, B) {
      return EA(g - 131, B - -121, C - 310, g);
    }
    const e = await this[o("66c7", 410, 314, 261, 308) + r("R)Bi", -325, -356, -169, -233) + o("B(^!", 355, 349, 222, 350)](n);
    function A(g, I, C, s, B) {
      return eA(g - 65, s - -1045, C - 28, B);
    }
    function o(g, I, C, s, B) {
      return wA(g - 83, I - 225, g, B - 190);
    }
    await Promise[A(131, 155, 40, 89, "^rQq") + a(261, 153, 184, "0iz#")]([this[t("l]#S", 1176, 988, 1053, 1105) + t("u#lW", 1171, 1070, 914, 1042) + "d"][a(140, 161, 158, "1y5I")](n), this[r("1Ubi", -358, -141, -338, -254) + a(204, 5, 107, "eqEv") + "e"](e)]);
    function r(g, I, C, s, B) {
      return eA(g - 141, B - -1352, C - 415, g);
    }
    function a(g, I, C, s, B) {
      return eA(g - 189, C - -1006, C - 474, s);
    }
    this[o("Q&37", 380, 365, 322, 411) + A(182, 87, 151, 144, "YxqA") + a(119, 48, 151, "6pxX")]();
  }
  async [KA("3PX[", -194, -306) + eA(1247, 1121, 1024, "Q&37") + "se"](n) {
    function t(a, g, I, C, s) {
      return wA(a - 135, g - 208, C, g - 446);
    }
    function e(a, g, I, C, s) {
      return wA(a - 118, g - 98, I, g - -533);
    }
    function A(a, g, I, C, s) {
      return eA(a - 482, g - -814, I - 406, I);
    }
    function o(a, g, I, C, s) {
      return wA(a - 393, g - 101, C, g - 813);
    }
    function r(a, g, I, C, s) {
      return EA(a - 442, a - -668, I - 29, I);
    }
    try {
      if (A(378, 319, "1Ubi", 318, 352) !== A(326, 377, "4Vd5", 261, 348)) {
        const a = await fetch(n);
        if (!a.ok) {
          if (r(548, 582, "B(^!", 444, 506) !== e(-323, -264, "6pxX", -211, -282)) throw new Error(t(453, 512, 566, "66c7", 541) + A(151, 221, "JH^@", 150, 101) + r(650, 691, "JH^@", 658, 736) + t(457, 522, 629, "r3Qs", 525) + "d.");
          _0x4091e1[r(651, 766, "m5@o", 764, 723)]();
        }
        this[e(-238, -285, "1y5I", -279, -367) + "se"] = await a[t(709, 588, 615, "0iz#", 657)]();
      } else this[A(305, 294, "(H9o", 218, 356) + "se"] = void (-9 * -273 + -3893 + 4 * 359), _0x3187ea[e(-349, -450, "(#Ol", -407, -465)](_0x3aed79);
    } catch (a) {
      if (e(-371, -257, "Gu21") === r(494, 454, "8bvC"))
        return this[t(448, 534, 653, "b%bT") + r(533, 435, "(#Ol") + "se"]()?.[A(145, 131, "3PX[") + e(-384, -479, "6pxX")]?.[e(-415, -399, "8XVi")] || [];
      this[A(281, 349, "em)[") + "se"] = void 0, console[o(1002, 1087, 1138, "r3Qs")](a);
    }
  }
  async [KA("9HIF", -393, -294) + wA(99, 125, "1Ubi", 43) + "e"](n) {
    function t(a, g, I, C, s) {
      return wA(a - 271, g - 82, g, s - 1447);
    }
    function e(a, g, I, C, s) {
      return xA(a, C - 218);
    }
    function A(a, g, I, C, s) {
      return EA(a - 361, s - -1329, I - 258, C);
    }
    this[t(1744, "zR)Z", 1663, 1715, 1638) + t(1605, "Gu21", 1687, 1557, 1666)] = void 0;
    function o(a, g, I, C, s) {
      return EA(a - 20, C - -645, I - 166, I);
    }
    function r(a, g, I, C, s) {
      return KA(s, g - 228, C - 1851);
    }
    if (!n)
      if (t(1421, "y@Ut", 1434, 1615, 1534) === A(-153, -123, -134, "vYrW", -226)) {
        console[e("hEa$", 407, 181, 304)](o(535, 745, "6pxX", 663) + e("1Hzt", 34, 105, 150) + r(1517, 1715, 1537, 1595, "(#Ol") + A(-171, -188, 1, "vYrW", -64) + A(-134, -233, -220, "le#W", -162)), this[r(1625, 1623, 1613, 1571, "Gu21") + "se"] = void 0;
        return;
      } else return _0x158001 instanceof _0x4b17bb && _0x79cd4e[o(556, 591, "9Ufa", 649) + o(609, 649, "r3Qs", 554)](_0x1f63ed), null;
    await this[r(1396, 1302, 1420, 1391, "#e%Y") + A(3, -115, -10, "B(^!", -123) + "se"](n);
  }
  async [EA(1313, 1336, 1248, "ZHB2") + eA(1024, 1037, 1002, "JH^@") + xA("gYP8", -20)](n) {
    function t(g, I, C, s, B) {
      return eA(g - 449, I - 545, C - 478, C);
    }
    const e = await fetch("" + n + this[t(1634, 1715, "vYrW") + r("(H9o", 1105, 1263, 1148) + t(1800, 1723, "JH^@") + r("R)Bi", 1244, 1405, 1315)][-1 * 3943 + -1272 * -6 + -3689]);
    function A(g, I, C, s, B) {
      return KA(C, I - 327, s - 947);
    }
    function o(g, I, C, s, B) {
      return EA(g - 478, I - 134, C - 489, C);
    }
    function r(g, I, C, s, B) {
      return KA(g, I - 379, s - 1568);
    }
    const a = e.ok ? 267 * -21 + -4832 + 10439 : -4189 + -419 * -10;
    return "" + n + this[o(1357, 1395, "(#Ol") + A(624, 626, "1Hzt", 736) + o(1283, 1245, "mHfo") + o(1359, 1462, "Q&37")][a];
  }
  [eA(1097, 973, 993, "(H9o") + xA(")FGX", -116) + "s"](n) {
    function t(A, o, r, a, g) {
      return eA(A - 39, a - 46, r - 64, o);
    }
    function e(A, o, r, a, g) {
      return eA(A - 444, a - 152, r - 203, r);
    }
    n[e(1207, 1382, "u#lW", 1298) + "ch"]((A) => console[t(1350, "em)[", 1146, 1241)](A));
  }
  [xA("7FiP", -76) + xA("[c7m", -29) + EA(1137, 1170, 1262, "(H9o")](n) {
    function t(A, o, r, a, g) {
      return EA(A - 81, a - -1394, r - 39, g);
    }
    function e(A, o, r, a, g) {
      return EA(A - 243, g - -1317, r - 165, o);
    }
    n[e(-68, "^rQq", -280, -306, -177) + "ch"]((A) => console[t(-2, -10, -95, -101, "9Ufa")](A));
  }
  [wA(130, -27, "66c7", 49) + wA(64, 162, "r3Qs", 117)]() {
    function n(e, A, o, r, a) {
      return KA(e, A - 333, A - 1490);
    }
    function t(e, A, o, r, a) {
      return xA(e, r - 518);
    }
    return window[t("r3Qs", 639, 676, 577) + n("0iz#", 1256)][t("b%bT", 427, 515, 433) + t("em)[", 415, 510, 481)];
  }
  [xA("em)[", -50) + xA("9HIF", 83) + EA(1207, 1278, 1359, "7FiP")]() {
    function n(r, a, g, I, C) {
      return EA(r - 349, g - -443, g - 209, a);
    }
    function t(r, a, g, I, C) {
      return xA(I, C - 125);
    }
    function e(r, a, g, I, C) {
      return xA(a, I - -47);
    }
    function A(r, a, g, I, C) {
      return eA(r - 180, g - -155, g - 171, a);
    }
    function o(r, a, g, I, C) {
      return xA(I, g - -278);
    }
    try {
      if (A(985, "(#Ol", 952, 1016, 826) === n(768, "^rQq", 873, 902, 750)) _0x315f1a[n(834, ")FGX", 847, 764, 884) + "ch"]((r) => _0x1bcb7c[A(978, "#e%Y", 1016, 945, 894)](r));
      else {
        if (!this[t(18, -32, 84, "^rQq", 46) + "se"]) {
          if (A(871, "66c7", 878, 949, 953) === A(909, "#e%Y", 830, 731, 756)) throw new ai(e(-104, "eqEv", -273, -151, -104) + o(-414, -289, -411, "(H9o", -343) + e(64, "B(^!", 24, 46, -35) + o(-276, -391, -334, "uSIM", -255) + ".");
          _0x132b65[n(992, "(H9o", 886, 862, 798) + "ch"]((r) => _0x2ebfed[o(-184, -161, -241, "4Vd5", -345)](r));
        }
        if (!this[A(941, "l]#S", 928, 1014, 922) + e(9, "uSIM", -148, -47, 36) + "d"][A(990, "(#Ol", 1039, 1033, 935) + t(96, 73, 189, "mHfo", 80) + e(-77, "u#lW", -183, -74, -90) + "ed"]())
          if (A(941, "u#lW", 835, 941, 785) === o(-303, -265, -316, "hEa$", -188)) {
            if (!this[e(-72, "eqEv", -170, -177, -233) + "se"]) throw new _0x478192(n(849, "gYP8", 784, 888, 781) + n(606, "l]#S", 683, 635, 565) + n(830, "B(^!", 879, 761, 1002) + e(-21, "3X61", -3, 26, 55) + ".");
            if (!this[A(761, "9HIF", 843, 864, 785) + n(786, "hW%#", 812, 892, 767) + "d"][A(956, "fhDC", 948, 897, 1057) + t(90, -11, -116, "vYrW", -9) + t(150, -31, 173, "u#lW", 98) + "ed"]()) throw new _0x570fa3(o(-444, -388, -359, "(#Ol", -464) + t(137, -17, 1, "m5@o", 110) + n(744, "gYP8", 706, 830, 727) + o(-248, -225, -277, "6pxX", -202) + ".");
            this[t(187, 126, 107, "!3Is", 159) + e(-111, "YxqA", -184, -55, -89)] = new _0x20dd8e(_0x48bb80(this[t(85, 210, 18, "(#Ol", 119) + "se"], this[n(750, "EOae", 839, 912, 878) + A(812, "JH^@", 838, 873, 833)]())), this[n(656, "vYrW", 745, 847, 838) + t(90, 44, -35, "1Ubi", 41) + "s"](this[o(-249, -291, -297, "66c7", -315) + o(-303, -491, -375, "#e%Y", -412)][o(-380, -458, -410, "ZHB2", -520) + "s"]), this[n(716, "fhDC", 664, 560, 587) + n(796, "1Hzt", 704, 609, 729) + n(794, "l]#S", 795, 844, 674)](this[n(854, "B(^!", 815, 892, 823) + n(580, "1y5I", 675, 677, 650)][A(843, "m5@o", 822, 697, 852) + e(8, "7FiP", -160, -32, -148)]);
          } else throw new ai(t(159, 225, 214, "hEa$", 200) + t(118, 105, 54, "66c7", 60) + e(-82, "4Vd5", -77, -9, 57) + A(942, "8bvC", 983, 1047, 1071) + ".");
        this[n(874, "le#W", 789, 729, 705) + n(602, "rEU4", 646, 723, 703)] = new ng(FQ(this[e(-145, "gYP8", -182, -105, -183) + "se"], this[A(950, "(#Ol", 933, 917, 1016) + e(-247, "rEU4", -190, -122, -155)]())), this[e(-129, "rEU4", -62, -166, -50) + t(155, 12, 176, "ZHB2", 120) + "s"](this[o(-470, -395, -384, "R)Bi", -258) + A(984, "B(^!", 889, 863, 909)][o(-125, -226, -232, "9Ufa", -192) + "s"]), this[A(815, "Gu21", 853, 883, 805) + e(-131, "r3Qs", -166, -183, -97) + e(80, "zR)Z", 49, 59, 175)](this[o(-326, -337, -310, "gYP8", -219) + A(1086, "^rQq", 1012, 912, 1001)][o(-297, -452, -387, "m5@o", -413) + n(933, "b%bT", 804, 793, 826)]);
      }
    } catch (r) {
      if (A(962, "Q&37", 956) !== t(153, 153, 143, "b%bT", 135)) {
        if (r instanceof ai)
          if (t(141, 236, 182, "u#lW", 182) === A(873, "R)Bi", 837)) r[A(779, ")FGX", 862)]();
          else {
            _0x34e471[A(906, "rEU4", 970)](t(63, -4, -47, "[c7m", 18) + t(289, 76, 70, "hEa$", 175) + A(921, "u#lW", 877) + n(689, "9HIF", 776) + A(899, "zR)Z", 922)), this[o(-365, -522, -423, "9HIF") + "se"] = void 0;
            return;
          }
        else r instanceof Error && (A(1131, "(#Ol", 1041) === A(947, "mHfo", 951) ? _0x434381[n(939, "uSIM", 810) + t(44, -111, -17, "hEa$", -19)](_0x2fc2ad) : console[t(233, 337, 105, "hEa$", 222)](r));
        const a = {};
        a[e(-186, "0iz#", -236, -121) + o(-218, -317, -342, "ot]E")] = !1, a[e(90, "^rQq", 32, 48) + "s"] = [], a[o(-476, -392, -364, ")FGX") + A(924, "8bvC", 1025)] = [], a[A(874, "8bvC", 810) + t(-130, -114, -76, "m1II", -17) + A(883, "JH^@", 935)] = void 0, a[e(-113, "R)Bi", -232, -190)] = function() {
        }, a[o(-395, -320, -370, "u#lW") + n(912, "m1II", 800)] = "", this[o(-258, -237, -302, "0iz#") + t(76, 156, 300, "zR)Z", 183)] = new ng(a);
      } else throw new _0x429569(e(-52, "u#lW", -12, -63) + n(708, "8bvC", 830) + t(-4, 43, -55, "m1II", 10) + n(753, "B(^!", 817) + "d.");
    }
  }
  [eA(1095, 1003, 954, "m1II") + xA("Q&37", 55) + wA(100, 152, "rEU4", 171) + "t"]() {
    function n(t, e, A, o, r) {
      return KA(o, e - 315, t - 1566);
    }
    return this[n(1144, 1097, 1215, "EOae") + n(1289, 1398, 1237, "u#lW")];
  }
  [EA(1237, 1237, 1125, "rEU4") + wA(151, 120, "X&#!", 58) + "se"]() {
    function n(r, a, g, I, C) {
      return xA(C, r - 516);
    }
    function t(r, a, g, I, C) {
      return xA(r, g - 138);
    }
    function e(r, a, g, I, C) {
      return KA(I, a - 208, r - 1619);
    }
    function A(r, a, g, I, C) {
      return eA(r - 68, g - 507, g - 120, C);
    }
    function o(r, a, g, I, C) {
      return KA(r, a - 452, C - 34);
    }
    if (!this[A(1795, 1547, 1673, 1668, "X&#!") + "se"]) {
      if (e(1172, 1189, 1152, "1y5I") === e(1272, 1159, 1344, "R)Bi")) return null;
      _0x3c445f[A(1610, 1580, 1559, 1446, "0iz#")](_0x527bb9);
    }
    try {
      return t("8bvC", 38, 134, 95, 98) !== e(1187, 1114, 1231, "!3Is", 1144) ? JSON[o("8XVi", -136, -138, -151, -226)](this[t("r3Qs", 198, 206, 259, 173) + "se"]) : this[o("ZHB2", -459, -305, -464, -343) + o("7FiP", -395, -401, -289, -328)];
    } catch (r) {
      if (e(1285, 1175, 1394, "^rQq") === n(446, 510, 443, 540, "9Ufa")) {
        if (r instanceof Error)
          if (A(1525, 1564, 1598, 1619, "gYP8") === e(1170, 1168, 1131, "b%bT")) m[o("(H9o", -412, -320, -395, -299) + A(1577, 1583, 1541, 1537, "(H9o")](r);
          else return null;
        return null;
      } else return _0x1c39f3[t("3PX[", 98, 220)](this[e(1239, 1339, 1341, "gYP8") + "se"]);
    }
  }
  [EA(1165, 1207, 1105, "6pxX") + KA("fhDC", -255, -266)]() {
    function n(o, r, a, g, I) {
      return eA(o - 461, o - -887, a - 137, I);
    }
    function t(o, r, a, g, I) {
      return eA(o - 287, a - -554, a - 166, r);
    }
    const e = this[t(618, "y@Ut", 586) + t(721, "m1II", 608) + "se"]();
    function A(o, r, a, g, I) {
      return eA(o - 158, I - -287, a - 422, a);
    }
    return e?.[t(548, "9HIF", 469) + A(714, 790, "fhDC", 784, 752)]?.[n(250, 360, 251, 251, "[c7m")] || [];
  }
  [KA("uSIM", -328, -248) + wA(78, 26, "^rQq", 91) + wA(66, 252, "[c7m", 130)]() {
    const n = this[e(1315, 1210, 1214, 1256, "8bvC") + e(1349, 1443, 1351, 1471, "B(^!") + "se"]();
    function t(o, r, a, g, I) {
      return EA(o - 414, I - -1591, a - 9, a);
    }
    function e(o, r, a, g, I) {
      return xA(I, o - 1372);
    }
    function A(o, r, a, g, I) {
      return eA(o - 43, I - -1174, a - 252, r);
    }
    return n?.[A(81, "fhDC", 94, -95, 13) + t(-330, -449, "^rQq", -453, -401)]?.[e(1484, 1561, 1423, 1496, "(#Ol") + A(-183, "3X61", -249, -336, -227)];
  }
}
class Zr extends JQ {
  static _instance;
  static getInstance() {
    if (!this._instance) {
      const n = new OQ();
      this._instance = new Zr(n);
    }
    return this._instance;
  }
}
const zr = Oe(void 0);
zr.displayName = "ConfigurationContext";
function HI() {
  const i = xe(zr);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function UQ({
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
    captureMode: e ?? Pi.AUTO_CAPTURE,
    assetsDirectoryPath: Zs(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function YQ({
  children: i,
  configuration: n
}) {
  const t = pA(() => UQ(n), [n]);
  return /* @__PURE__ */ w(zr.Provider, { value: t, children: i });
}
const yn = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class ke {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 7329 + 3355 * -2 + -619;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ke()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 4183 + -7945 * 1 + -3 * -1254;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && yn(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    yn(n, t);
  }
}
function _I(i, n, t = zC) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  ke.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function TQ(i, n) {
  ke.getInstance().dispatchCustomEventOnChange(i, n);
}
function PQ(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  ke.getInstance().dispatchCustomEventOnChange(i, e);
}
function HQ(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  ke.getInstance().dispatchCustomEventOnChange(i, o);
}
function _Q(i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  ke.getInstance().dispatchCustomEventOnChange(i, a);
}
const KQ = (i, n) => {
  const t = {};
  t.instruction = n, yn(i, t);
}, cr = (i, n) => {
  yn(i, n);
}, jQ = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  J(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, TQ(i, A);
  }, [t, e, i]);
};
function Cr(i, n) {
  J(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const qQ = (i) => i === Os.CONTROL ? !Hr() : !0;
function VQ(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = de(), [r, a] = z(), g = pA(() => {
    const x = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? qQ(i);
  }, [n, r, i, o]);
  function I() {
    t !== XA.LOADING && e(XA.RUNNING);
  }
  function C() {
    a(r === void 0 ? !g : !r);
  }
  async function s() {
    if (n) {
      e(XA.LOADING);
      try {
        await n.switchCamera(), e(XA.RUNNING);
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
      case ht.CONTINUE_DETECTION:
        I();
        break;
      case ht.TOGGLE_MIRROR:
        C();
        break;
      case ht.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  Cr(i, B);
  const E = {};
  return E.shouldCameraMirror = g, E;
}
function ZQ(i, n) {
  Cr(i, (t) => {
    t.detail?.["instruction"] === ht.CONTINUE_DETECTION && KQ(zA.CONTROL, ht.CONTINUE_DETECTION);
  }), Cr(zA.CONTROL, (t) => {
    t.detail?.["instruction"] === ht.CONTINUE_DETECTION && n();
  });
}
function zQ(i, n) {
  J(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      PQ(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function XQ(i) {
  return be(Math.abs(i));
}
const $Q = () => {
  const [i, n] = z(null), t = bA(new Pr(2860 + 1 * -7438 + 1 * 4583));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(XQ(r));
    const a = be(io(t.current)), g = {};
    g.z = a, n(g);
  }
  J(() => (window.addEventListener("devicemotion", fB(e, EB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
};
function Xr(i, n) {
  const t = bA(n);
  J(() => {
    t.current = n;
  }, [n]), J(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
const AE = (i) => {
  const n = it(!1);
  return Xr(i, (e) => {
    e.detail && (n.value = e.detail.animationEnd);
  }), n;
};
function eE({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = VQ(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, jQ(t.CAMERA_PROPS_CHANGED, A), J(() => () => {
    ke.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function tE(i) {
  J(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function oE({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: a, onDetection: g, sessionToken: I }) {
  tE(() => {
    t && t.destroy();
  });
  const { appState: C, firstRunningDone: s, handleAppStateChange: B, isCameraReady: E, setFirstRunningDone: x } = de(), { sunfish: Q } = so(), { analytics: l } = rI(), { transactionCounting: f } = _r(), { cameraResolution: h, cameraService: p, onCameraResolutionChange: y, videoRef: b } = lI(), k = {};
  k.cameraResolution = h, k.cameraService = p, k.customEvent = A;
  const { shouldCameraMirror: D } = eE(k), U = it(void 0), O = p?.["isStreaming"] && t?.["isDetectorInitialized"] && Q && E, X = Ee(async (AA) => {
    B(XA.WAITING), a(AA);
  }, [a, B]), $ = Ee((AA, Io) => {
    y(AA.resolution), U.value = AA, g(AA, Io);
  }, [g, U, y]);
  J(() => {
    !s && O && (x(!0), B(XA.RUNNING));
  }, [O, B, s, x]), J(() => {
    if (C !== XA.RUNNING || !O) return;
    if (!p || !t) throw new m("Cannot start detection");
    t.imageProcessor.reset();
    const AA = {};
    return AA.analytics = l, AA.transactionCounting = f, AA.cameraService = p, AA.fallbackInstruction = o, AA.instructionCodeMap = r, AA.checkToInstructionCodeMap = n, AA.sessionToken = I, AA.createProtoMessage = e, AA.onCaptureCallback = X, AA.onDetectionCallback = $, t.createDetection(i, AA), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [C, O, t, p, X, $, I, U, l, e, r, n, o, i, f]);
  const yA = {};
  return yA.videoRef = b, yA.cameraResolution = h, yA.detectionDetails = U, yA.shouldCameraMirror = D, yA;
}
function nE(i) {
  const n = bA([]);
  return J(() => {
    n.current.forEach((t) => t()), n.current = [];
  }, [i]), (t) => {
    n.current.push(t);
  };
}
const ig = () => typeof document < "u" && document.hasFocus();
function iE(i = {}) {
  const n = bA(i), t = bA(ig()), [e, A] = z(ig);
  J(() => {
    n.current = i;
  }), J(() => {
    function r(C) {
      t.current = C, A(C);
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
    function I() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function rE(i = {}) {
  const { appState: n, firstRunningDone: t } = de();
  iE({ onBlur: () => {
    n === XA.WAITING || n === Ui.DONE || !t || i.onBlur?.();
  }, onFocus: () => {
    n === XA.WAITING || n === Ui.DONE || !t || i.onFocus?.();
  } });
}
function aE(i) {
  const { redfin: n, freemiumOverlayState: t } = de(), e = n === Xo.Higher, A = t !== zt.HIDDEN, o = A && !e && i, r = t === zt.VISIBLE, a = {};
  return a.showFreemiumOverlay = o, a.showFullFreemiumOverlay = r, a;
}
function gE(i, n) {
  if (!i) return n;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  n.hashedDetectedImages && e?.push(...n.hashedDetectedImages), n.detectionRecord && t?.push(...n.detectionRecord);
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function sE() {
  const i = it(null);
  function n({ cameraProperties: e }) {
    i.value = gE(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = n, t;
}
const $r = Oe(void 0);
$r.displayName = "CommonThresholdsContext";
function IE() {
  const i = xe($r);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function cE() {
  return Hr() ? Ha.MOBILE : Ha.DESKTOP;
}
function CE({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = z(cE()), r = pA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ w($r.Provider, { value: r, children: i });
}
const KI = {};
KI.min = 0.4;
const Br = {};
Br.min = 0.16, Br.max = 0.2;
const jI = {};
jI.min = 0.25;
const Qr = {};
Qr.min = 0.2, Qr.max = 0.85;
const qI = {};
qI.min = 0.05;
const VI = {};
VI.max = 30;
const ZI = {};
ZI.min = 0;
const Er = {};
Er.min = -1, Er.max = 1;
const xr = {};
xr.confidence = ZI, xr.status = Er;
const zI = {};
zI.min = 0;
const XI = {};
XI.confidence = zI;
const $I = {};
$I.min = 0;
const A0 = {};
A0.confidence = $I;
const se = {};
se.confidence = KI, se.size = Br, se.sharpness = jI, se.brightness = Qr, se.edgeDistanceToImageShorterSideRatio = qI, se.devicePitchAngle = VI, se.mouth = xr, se.leftEye = XI, se.rightEye = A0;
const e0 = {};
e0.min = 0.4;
const dr = {};
dr.min = 0.16, dr.max = 0.2;
const t0 = {};
t0.min = 0.25;
const lr = {};
lr.min = 0.2, lr.max = 0.85;
const o0 = {};
o0.min = 0.05;
const n0 = {};
n0.max = 30;
const i0 = {};
i0.min = 0;
const ur = {};
ur.min = -1, ur.max = 1;
const fr = {};
fr.confidence = i0, fr.status = ur;
const r0 = {};
r0.min = 0;
const a0 = {};
a0.confidence = r0;
const g0 = {};
g0.min = 0;
const s0 = {};
s0.confidence = g0;
const Ie = {};
Ie.confidence = e0, Ie.size = dr, Ie.sharpness = t0, Ie.brightness = lr, Ie.edgeDistanceToImageShorterSideRatio = o0, Ie.devicePitchAngle = n0, Ie.mouth = fr, Ie.leftEye = a0, Ie.rightEye = s0;
const hr = {};
hr.MOBILE = se, hr.DESKTOP = Ie;
const BE = hr;
function QE(i, n) {
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
function EE({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ w(
    CE,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: QE,
      thresholdsPresets: BE,
      children: i
    }
  );
}
function xE({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: n }) {
  const t = bA(i);
  J(() => {
    t.current = i;
  }, [i]);
  const e = Ee((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    n && !r.isInCandidateSelection || r.invalidValidators.includes(sA.FACE_NOT_PRESENT) && t.current();
  }, [n]), A = {};
  return A.handleFaceDetection = e, A;
}
function dE(i) {
  const { handleFaceDetection: n } = xE(i);
  Xr(zA.FACE_DETECTION, n);
}
const lE = ({ children: i }) => {
  const n = bA(null);
  return zQ(n, zA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(TC, { ref: n, children: i });
}, pr = {};
pr.min = 0.135, pr.max = 0.21;
const I0 = {};
I0.size = pr;
const c0 = {};
c0.min = 1;
const C0 = {};
C0.confidence = c0;
const yr = {};
yr.min = 0.3, yr.max = 1;
const mr = {};
mr.max = 1, mr.min = -1;
const B0 = {};
B0.min = 0.15;
const Q0 = {};
Q0.min = -1;
const E0 = {};
E0.min = -1;
const lt = {};
lt.size = yr, lt.brightness = mr, lt.confidence = B0, lt.sharpness = Q0, lt.edgeDistanceToImageShorterSideRatio = E0;
const uE = { [SA.DISTANT]: I0, [SA.MIDDLE]: C0, [SA.CLOSEUP]: lt }, fE = uE, rg = -8339 + -695 * 9 + 14594 + 0.255;
function x0() {
  return IE();
}
function hE(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: st(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: st(i.rightEye.center, n) }, mouth: { ...i.mouth, center: st(i.mouth.center, n) }, topLeft: st(i.topLeft, n), bottomRight: st(i.bottomRight, n), faceCenter: st(i.faceCenter, n) };
}
function d0(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = iB(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = a, I.left = g, qs(I);
}
const pE = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  eI(i, o, "rgba(255, 0, 0, 0.3)", !0), $t(i, e, "lime");
}, yE = (i, n, t) => {
  const e = d0(n, t);
  Object.values(e).map((A) => $t(i, A, "orange"));
};
function mE({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = x0(), { redfin: o } = de(), r = bA(null);
  if (J(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, VC(r.current);
    const f = en(i), h = tI(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      f
    ), p = oB(i);
    n.value && (pE(r.current, n.value.processedImage.detection), yE(
      r.current,
      n.value.processedImage.detection,
      i
    ), ti(r.current, f, "lime"), ti(r.current, h, "yellow"), ti(r.current, p, "blue"), $t(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), $t(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), $t(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: a,
    detectionTime: g,
    fps: I,
    processedImage: { detection: C, instructionCode: s, invalidValidators: B, isEscalated: E },
    resolution: x,
    samVersion: Q
  } = n.value, l = {
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
    FPS: I,
    "Avg FPS": a,
    Tier: o,
    Instruction: s,
    Resolution: x,
    "Escalated instruction": E,
    "Component version": "8.0.3",
    "Thresholds preset": A
  };
  return Q && (l["SAM version"] = Q), B.length > 0 && (l["Invalid validators"] = B), /* @__PURE__ */ w(
    _B,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function wE({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function DE(i, n) {
  const [t, e] = z(!1), A = () => e((a) => !a), o = "" + t;
  vt(() => {
    function a() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), B = {};
      return B.childList = !0, B.subtree = !0, B.attributes = !0, s.observe(i.current, B), s;
    }
    function g() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((E) => {
        E.find((Q) => {
          for (const l of Q.removedNodes)
            if (l !== n?.current && l === i.current)
              return !0;
        }) && A(), E.forEach((Q) => {
          Q.addedNodes.forEach((l) => {
            l !== n?.current && l.parentElement?.removeChild(l);
          });
        });
      }), B = {};
      return B.childList = !0, s.observe(i.current.parentElement, B), s;
    }
    const I = a(), C = g();
    return () => {
      C?.disconnect(), I?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const bE = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function kE({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = bA(null), { key: o } = DE(A, t);
  return /* @__PURE__ */ w("div", { ref: A, style: bE, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function SE({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = nB(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    kE,
    {
      cutOut: i || /* @__PURE__ */ w(wE, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function GE({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = de(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = aE(i), a = bA(null), g = i && A === XA.RUNNING;
  return /* @__PURE__ */ w(MA, { children: [
    o && i && /* @__PURE__ */ w(
      SE,
      {
        fullOverlay: r,
        ignoreElement: a,
        resolution: i
      }
    ),
    n,
    g && /* @__PURE__ */ w("div", { ref: a, children: /* @__PURE__ */ w(
      mE,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const NE = (i, n) => {
  if (pB()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    ke.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ag = {}, si = {}, Ii, gg;
function RE() {
  if (gg) return Ii;
  gg = 1, Ii = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            g(I);
          else {
            for (var C = new Array(arguments.length - 1), s = 0; s < C.length; )
              C[s++] = arguments[s];
            a.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, g(I));
      }
    });
  }
  return Ii;
}
var sg = {}, Ig;
function FE() {
  return Ig || (Ig = 1, (function(i) {
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
      for (var I = null, C = [], s = 0, B = 0, E; a < g; ) {
        var x = r[a++];
        switch (B) {
          case 0:
            C[s++] = t[x >> 2], E = (x & 3) << 4, B = 1;
            break;
          case 1:
            C[s++] = t[E | x >> 4], E = (x & 15) << 2, B = 2;
            break;
          case 2:
            C[s++] = t[E | x >> 6], C[s++] = t[x & 63], B = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), s = 0);
      }
      return B && (C[s++] = t[E], C[s++] = 61, B === 1 && (C[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, C.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var I = g, C = 0, s, B = 0; B < r.length; ) {
        var E = r.charCodeAt(B++);
        if (E === 61 && C > 1)
          break;
        if ((E = e[E]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            s = E, C = 1;
            break;
          case 1:
            a[g++] = s << 2 | (E & 48) >> 4, s = E, C = 2;
            break;
          case 2:
            a[g++] = (s & 15) << 4 | (E & 60) >> 2, s = E, C = 3;
            break;
          case 3:
            a[g++] = (s & 3) << 6 | E, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return g - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(sg)), sg;
}
var ci, cg;
function vE() {
  if (cg) return ci;
  cg = 1, ci = i;
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
  }, ci;
}
var Ci, Cg;
function ME() {
  if (Cg) return Ci;
  Cg = 1, Ci = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = a[0], x[Q + 1] = a[1], x[Q + 2] = a[2], x[Q + 3] = a[3];
      }
      function C(E, x, Q) {
        r[0] = E, x[Q] = a[3], x[Q + 1] = a[2], x[Q + 2] = a[1], x[Q + 3] = a[0];
      }
      o.writeFloatLE = g ? I : C, o.writeFloatBE = g ? C : I;
      function s(E, x) {
        return a[0] = E[x], a[1] = E[x + 1], a[2] = E[x + 2], a[3] = E[x + 3], r[0];
      }
      function B(E, x) {
        return a[3] = E[x], a[2] = E[x + 1], a[1] = E[x + 2], a[0] = E[x + 3], r[0];
      }
      o.readFloatLE = g ? s : B, o.readFloatBE = g ? B : s;
    })() : (function() {
      function r(g, I, C, s) {
        var B = I < 0 ? 1 : 0;
        if (B && (I = -I), I === 0)
          g(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, s);
        else if (isNaN(I))
          g(2143289344, C, s);
        else if (I > 34028234663852886e22)
          g((B << 31 | 2139095040) >>> 0, C, s);
        else if (I < 11754943508222875e-54)
          g((B << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, C, s);
        else {
          var E = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -E) * 8388608) & 8388607;
          g((B << 31 | E + 127 << 23 | x) >>> 0, C, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, I, C) {
        var s = g(I, C), B = (s >> 31) * 2 + 1, E = s >>> 23 & 255, x = s & 8388607;
        return E === 255 ? x ? NaN : B * (1 / 0) : E === 0 ? B * 1401298464324817e-60 * x : B * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = a[0], x[Q + 1] = a[1], x[Q + 2] = a[2], x[Q + 3] = a[3], x[Q + 4] = a[4], x[Q + 5] = a[5], x[Q + 6] = a[6], x[Q + 7] = a[7];
      }
      function C(E, x, Q) {
        r[0] = E, x[Q] = a[7], x[Q + 1] = a[6], x[Q + 2] = a[5], x[Q + 3] = a[4], x[Q + 4] = a[3], x[Q + 5] = a[2], x[Q + 6] = a[1], x[Q + 7] = a[0];
      }
      o.writeDoubleLE = g ? I : C, o.writeDoubleBE = g ? C : I;
      function s(E, x) {
        return a[0] = E[x], a[1] = E[x + 1], a[2] = E[x + 2], a[3] = E[x + 3], a[4] = E[x + 4], a[5] = E[x + 5], a[6] = E[x + 6], a[7] = E[x + 7], r[0];
      }
      function B(E, x) {
        return a[7] = E[x], a[6] = E[x + 1], a[5] = E[x + 2], a[4] = E[x + 3], a[3] = E[x + 4], a[2] = E[x + 5], a[1] = E[x + 6], a[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = g ? s : B, o.readDoubleBE = g ? B : s;
    })() : (function() {
      function r(g, I, C, s, B, E) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          g(0, B, E + I), g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), B, E + C);
        else if (isNaN(s))
          g(0, B, E + I), g(2146959360, B, E + C);
        else if (s > 17976931348623157e292)
          g(0, B, E + I), g((x << 31 | 2146435072) >>> 0, B, E + C);
        else {
          var Q;
          if (s < 22250738585072014e-324)
            Q = s / 5e-324, g(Q >>> 0, B, E + I), g((x << 31 | Q / 4294967296) >>> 0, B, E + C);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), Q = s * Math.pow(2, -l), g(Q * 4503599627370496 >>> 0, B, E + I), g((x << 31 | l + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, B, E + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, I, C, s, B) {
        var E = g(s, B + I), x = g(s, B + C), Q = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + E;
        return l === 2047 ? f ? NaN : Q * (1 / 0) : l === 0 ? Q * 5e-324 * f : Q * Math.pow(2, l - 1075) * (f + 4503599627370496);
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
  return Ci;
}
function Bg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bi, Qg;
function WE() {
  if (Qg) return Bi;
  Qg = 1, Bi = i;
  function i(n) {
    try {
      if (typeof Bg != "function")
        return null;
      var t = Bg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Bi;
}
var Eg = {}, xg;
function LE() {
  return xg || (xg = 1, (function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, a = [], g = 0, I; e < A; )
        I = t[e++], I < 128 ? a[g++] = I : I > 191 && I < 224 ? a[g++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (I >> 10), a[g++] = 56320 + (I & 1023)) : a[g++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, n.write = function(t, e, A) {
      for (var o = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  })(Eg)), Eg;
}
var Qi, dg;
function OE() {
  if (dg) return Qi;
  dg = 1, Qi = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > o)
        return n(g);
      a + g > A && (r = n(A), a = 0);
      var I = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), I;
    };
  }
  return Qi;
}
var Ei, lg;
function JE() {
  if (lg) return Ei;
  lg = 1, Ei = n;
  var i = rt();
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
  }, Ei;
}
var ug;
function rt() {
  return ug || (ug = 1, (function(i) {
    var n = i;
    n.asPromise = RE(), n.base64 = FE(), n.EventEmitter = vE(), n.float = ME(), n.inquire = WE(), n.utf8 = LE(), n.pool = OE(), n.LongBits = JE(), n.isNode = !!(typeof Qt < "u" && Qt && Qt.process && Qt.process.versions && Qt.process.versions.node), n.global = n.isNode && Qt || typeof window < "u" && window || typeof self < "u" && self || si, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  })(si)), si;
}
var xi, fg;
function l0() {
  if (fg) return xi;
  fg = 1, xi = g;
  var i = rt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, f, h) {
    this.fn = l, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function g() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var I = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new n();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = I(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, f, h) {
    return this.tail = this.tail.next = new o(l, f, h), this.len += f, this;
  };
  function C(l, f, h) {
    f[h] = l & 255;
  }
  function s(l, f, h) {
    for (; l > 127; )
      f[h++] = l & 127 | 128, l >>>= 7;
    f[h] = l;
  }
  function B(l, f) {
    this.len = l, this.next = void 0, this.val = f;
  }
  B.prototype = Object.create(o.prototype), B.prototype.fn = s, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new B(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(E, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function E(l, f, h) {
    for (; l.hi; )
      f[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      f[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    f[h++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var f = t.from(l);
    return this._push(E, f.length(), f);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var f = t.from(l).zzEncode();
    return this._push(E, f.length(), f);
  }, g.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function x(l, f, h) {
    f[h] = l & 255, f[h + 1] = l >>> 8 & 255, f[h + 2] = l >>> 16 & 255, f[h + 3] = l >>> 24;
  }
  g.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(l) {
    var f = t.from(l);
    return this._push(x, 4, f.lo)._push(x, 4, f.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, g.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var Q = i.Array.prototype.set ? function(l, f, h) {
    f.set(l, h);
  } : function(l, f, h) {
    for (var p = 0; p < l.length; ++p)
      f[h + p] = l[p];
  };
  return g.prototype.bytes = function(l) {
    var f = l.length >>> 0;
    if (!f)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var h = g.alloc(f = e.length(l));
      e.decode(l, h, 0), l = h;
    }
    return this.uint32(f)._push(Q, f, l);
  }, g.prototype.string = function(l) {
    var f = A.length(l);
    return f ? this.uint32(f)._push(A.write, f, l) : this._push(C, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = l.next, this.tail = f, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, f = this.constructor.alloc(this.len), h = 0; l; )
      l.fn(l.val, f, h), h += l.len, l = l.next;
    return f;
  }, g._configure = function(l) {
    n = l, g.create = I(), n._configure();
  }, xi;
}
var di, hg;
function UE() {
  if (hg) return di;
  hg = 1, di = t;
  var i = l0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = rt();
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
  }, t._configure(), di;
}
var li, pg;
function u0() {
  if (pg) return li;
  pg = 1, li = o;
  var i = rt(), n, t = i.LongBits, e = i.utf8;
  function A(s, B) {
    return RangeError("index out of range: " + s.pos + " + " + (B || 1) + " > " + s.len);
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
  }, a = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(B) {
        return i.Buffer.isBuffer(B) ? new n(B) : r(B);
      })(s);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ (function() {
    var s = 4294967295;
    return function() {
      if (s = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (s = (s | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return s;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return s;
    };
  })(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var s = this.uint32();
    return s >>> 1 ^ -(s & 1) | 0;
  };
  function g() {
    var s = new t(0, 0), B = 0;
    if (this.len - this.pos > 4) {
      for (; B < 4; ++B)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      B = 0;
    } else {
      for (; B < 3; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << B * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; B < 5; ++B)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; B < 5; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function I(s, B) {
    return (s[B - 4] | s[B - 3] << 8 | s[B - 2] << 16 | s[B - 1] << 24) >>> 0;
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
    var s = this.uint32(), B = this.pos, E = this.pos + s;
    if (E > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(B, E);
    if (B === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, B, E);
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
    n = s, o.create = a(), n._configure();
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
        return C.call(this)[B](!0);
      },
      sfixed64: function() {
        return C.call(this)[B](!1);
      }
    });
  }, li;
}
var ui, yg;
function YE() {
  if (yg) return ui;
  yg = 1, ui = t;
  var i = u0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = rt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), ui;
}
var mg = {}, fi, wg;
function TE() {
  if (wg) return fi;
  wg = 1, fi = n;
  var i = rt();
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
        function(I, C) {
          if (I)
            return g.emit("error", I, e), a(I);
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
            } catch (s) {
              return g.emit("error", s, e), a(s);
            }
          return g.emit("data", C, e), a(null, C);
        }
      );
    } catch (I) {
      g.emit("error", I, e), setTimeout(function() {
        a(I);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, fi;
}
var Dg;
function PE() {
  return Dg || (Dg = 1, (function(i) {
    var n = i;
    n.Service = TE();
  })(mg)), mg;
}
var bg, kg;
function HE() {
  return kg || (kg = 1, bg = {}), bg;
}
var Sg;
function _E() {
  return Sg || (Sg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = l0(), n.BufferWriter = UE(), n.Reader = u0(), n.BufferReader = YE(), n.util = rt(), n.rpc = PE(), n.roots = HE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(ag)), ag;
}
var Gg, Ng;
function KE() {
  return Ng || (Ng = 1, Gg = _E()), Gg;
}
var S = KE();
const u = S.Reader, G = S.Writer, d = S.util, c = S.roots.default || (S.roots.default = {}), Le = c.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = d.newBuffer([]), n.prototype.iv = d.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
      t.prototype.images = d.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.images != null && A.images.length)
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        get: d.oneOfGetter(e = ["sessionToken"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: d.oneOfGetter(e = ["web", "android", "ios"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Metadata();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
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
        ).fork()).ldelim(), A.androidId != null && Object.hasOwnProperty.call(A, "androidId") && o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).string(A.androidId), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.AndroidMetadata(), I, C;
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
              g.dynamicCameraFrameProperties === d.emptyObject && (g.dynamicCameraFrameProperties = {});
              let B = A.uint32() + A.pos;
              for (I = "", C = null; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[I] = C;
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
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!d.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || d.isString(A.digests[o])))
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
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
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
        return A.androidId != null && A.hasOwnProperty("androidId") && !d.isString(A.androidId) ? "androidId: string expected" : null;
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
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], o.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, o.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = c.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.androidId != null && (o.androidId = String(A.androidId)), o;
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
            r.digests[g] = o.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, o.oneofs && (r._androidId = "androidId")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = d.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = d.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        ).fork()).ldelim(), A.identifierForVendor != null && Object.hasOwnProperty.call(A, "identifierForVendor") && o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).string(A.identifierForVendor), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.IosMetadata(), I, C;
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
              let B = A.uint32() + A.pos;
              for (I = "", C = !1; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              g.architectureInfo[I] = C;
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
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (s & 7) === 2) {
                let B = A.uint32() + A.pos;
                for (; A.pos < B; )
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
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || d.isString(A.digests[o])))
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
            if (!d.isInteger(A.isoValues[o]))
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
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !d.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
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
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], o.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        return A.identifierForVendor != null && (o.identifierForVendor = String(A.identifierForVendor)), o;
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
            r.digests[g] = o.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && (r.identifierForVendor = A.identifierForVendor, o.oneofs && (r._identifierForVendor = "identifierForVendor")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uvPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || d.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? d.base64.decode(e.uvPlane, A.uvPlane = d.newBuffer(d.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = d.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? d.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
            if (!d.isString(A.hashedDetectedImages[o]))
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
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", d.Long) {
            let r = new d.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
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
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MediaTrackSettings();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              A.skipType(I & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
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
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
            c.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return A.installationId != null && Object.hasOwnProperty.call(A, "installationId") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.installationId), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.PlatformDetails();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
            case 7: {
              g.installationId = A.string();
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
          for (let o = 0; o < A.browserVersions.length; ++o) {
            let r = c.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && !d.isString(A.installationId) ? "installationId: string expected" : null;
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
        return A.installationId != null && (o.installationId = String(A.installationId)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = c.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && (r.installationId = A.installationId, o.oneofs && (r._installationId = "installationId")), r;
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !d.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !d.isString(e.version) ? "version: string expected" : null;
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
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && c.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Blob();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && c.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && c.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? a.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
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
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.Lds1ElementaryFile();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
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
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, o.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && c.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && c.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        get: d.oneOfGetter(e = ["protocol"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: d.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: d.oneOfSetter(e)
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
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.segments != null && A.segments.length)
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
      t.prototype.stepResults = d.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.stepResults != null && A.stepResults.length)
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
      return t.prototype.detections = d.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = G.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            c.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new c.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? (a.detections && a.detections.length || (a.detections = []), a.detections.push(c.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(g & 7);
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
      return t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && c.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (d.Long) {
            let r = new d.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && c.dot.PointDouble.encode(e.center, A.uint32(
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
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new c.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
    return n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Image();
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
    return n.prototype.image = null, n.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && c.dot.Image.encode(t.image, e.uint32(
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = c.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, d.Long) {
          let o = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
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
    return n.prototype.items = d.emptyArray, n.create = function(t) {
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
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
    return n.prototype.digest = d.newBuffer([]), n.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let o = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      get: d.oneOfGetter(t = ["bytes"]),
      set: d.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: d.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: d.oneOfSetter(t)
    }), n.create = function(e) {
      return new n(e);
    }, n.encode = function(e, A) {
      return A || (A = G.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
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
      e instanceof u || (e = u.create(e));
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
      return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || d.isString(e.bytes))))
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
      if (e.bytes != null && (typeof e.bytes == "string" ? d.base64.decode(e.bytes, A.bytes = d.newBuffer(d.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? d.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
    return n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoContainer();
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
    return n.prototype.bytes = d.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !d.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !d.isInteger(t.y) ? "y: integer expected" : null;
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
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  })(), i;
})();
function mn() {
  const i = ["WOVcPXZdI13cLhtcHevu", "WR4EWOZdUmo0W7RdItNdOSoQ", "WOZdVgGmW4C", "WRzvrqdcNW", "dCocetm8", "W74oo8kg", "m8oICe7dRW", "bv1Hx8od", "qmoOWQpdTwm", "WOSRdSkDW5y", "BYyAFCoTWOddRg/dImkW", "W67dHmoRW643lHK3", "WO4WWOFdMa", "W77cPNZcVxa", "Dmo+W7tcVG4", "dSoDxwNdVbr3WRxcQL3cL8o2", "A8kOpHBcQq", "W4qHeSkcWPq", "W4JcSs/dO3O", "WOBcRreFwq", "uvFdI3tdOq", "cCkDWOhdH8kQ", "qSoMW6FcPXe", "cmkFCmoNWOG", "W5aCit3cUa", "tSogWQhdVgi", "W6RcM8oTEu4", "C8oJWOtcTKa", "BZ3dOmodBW", "rmomWOJcMeK", "mNrbkq", "W5D8W7nnmbVdPdmnW7xdLW", "WRX1osBcGa", "WPmxk8klWRW", "W5O1pmkLWOO", "hMrpgCoI", "hmoQWOddJCoz", "oCkupmkLBq", "W5XHW6VcPCou", "WO7cOmoAWPKz", "WRX6W5dcOCoA", "j8keWRLnWRe", "eHSSWQxcKG", "tw3cMmkkWOBcLSkmc8oKWR5QWRNcUa", "j8kGWRHAWOS", "tW3dTSoYW7K", "W7ZdLxNcRGu", "W5VdN3ZcVgG", "W5vGvx8O", "W7CFcmkoW4a", "W4xcUwX6DW", "W5tdM1VdTxG", "WQ7cHqObpq", "mc8tWRVcQW", "jM7cHmofWOy", "W7DGDSkrW6/cHuSTea", "W6pdMstdHh8", "WOrYW6eRWRO", "WOXjcXmd", "W7XaaWxdKW", "W6BcQdb5oq", "zaLBlmony8kvWReFn8owW7Xb", "WODmW6jcWPW", "gCoQWPNdU1m", "BmoFWQFcNX0", "ECoXW6tdMXm", "WRmaW7e+na", "kSo8oSkREq", "WR5HW57cP8oA", "tmoPd8oAaG", "r8kSW7JcSdK", "W6ZcGSkWFue", "gGzcWRBdGW", "jSkanv/cVG", "BmkdhJVcGG", "W7TPW500WOq", "jSoJe1ddPW", "WQldKCk7pMm", "pCoXp8khBa", "WOJcObJdGWhdTGxcIuzQkwfK", "ACkesfjHW47dOmoZW7ldU2FcJG", "ah3dLCo+WPu", "pL7cKSod", "W4yeEJdcMq", "dSoYftmA", "eSoSWOBcNh4", "W6FcSxFdHx4", "m8o5lIaS", "l2D9FmoM", "aCkaWPnI", "W6XgWRvmWRa", "WR3dOeORW5a", "W448ifxcRa", "WRddHZTfhG", "WQZdHmkVW6ii", "jCkqWRtdMG", "WRBdLmkvgfG", "WR1sEY3cOa", "W4ThW5fJWQu", "WQVcV2Lmka", "W5ufaqBcRG", "WPBdPrzsaW", "W65catNdIW", "BHxdKfddRW", "WRrYWOPQWQe", "uSknxc3dUa", "iI7dJ2hdOq", "AmkiWOBdPSov", "WQiSWPGDmG", "W682WQ8wWQW", "WOZcOSosWPKF", "y8kJkLJcLW", "esfHj8k6", "WODPnG4r", "WO/cPxNcVu/cRghcQa", "W6tcVNhdHxS", "eSouW67dH2i", "dtmGWRlcNa", "W7rMDmoHWRJdOcOziLW2EZq", "WRxdMmktW4aT", "WONdI8kBW4Gi", "zCopWRBcGNC", "WPuDz0xdU8oFW6fjmmor", "W69CcgDQ", "WRVcTNnXba", "WO1gW7afWQy", "gH5fe8kt", "wmogm8krW6CScCoCzZBdV8o4WRbU", "uSkehHhcGW", "WRFcK8kLeGC", "W7VcKMqGaa", "W7PdW44uWPa", "WPlcOmoeW6qg", "b8kVWPldJ8oW", "W4dcS3/dO3W", "WQvRW7KPWPK", "WPRdVv93cG", "WReFntdcOW", "WRjGEs7cRmkWqu8H", "obCsWRxcOa", "m8oABLxdOa", "C8kIac3cSq", "zw8Bt8kp", "kmoZWQ7dN0u", "W43dSSklW58t", "pCoygHCV", "dmkAy8oxWQG", "W5eLhftcIq", "WPRdVSoQixC", "mwqQEmo1", "vmoym8kcW7HJiZSQWRNdPq", "cGqNWRBcTW", "u8kpvvNcVG", "WQFcRg5ufa", "fG5vn8kt", "WPhdL8knW5T0", "es3dUCoLW4G", "WRytfSkDW6C", "WOhdTCoPdge", "W6ldPSkEjua", "W5xcVK/dUN0", "cXurW5pcQW", "aSo0EwNcIa", "W6THaH3cMq", "WRBdNmk4ity", "pwxcPSo5WR8", "cmk/W45WWO8", "E8k4WRBcMuC", "WO3cP8oNWPGL", "jmoxemoOoG", "WQddVSkmlM4", "ACkhiZ3dUW", "W68iFd3cHq", "uConWPhdMqu", "WRq5WPeSxa", "keD4cCk6", "WQddJuuUW5u", "WRBcVCkLkv4", "WOD6WOzazG", "W5u9WRqqBW", "WRBcVZWXiW", "W6NdSdW0rmkquftcSSo9W6ZcSSov", "W7CBnCk5W5S", "t8oLCSoZaG", "W6/dMv7cR2a", "WRRcPaTfnG", "W4RdMZXIoq", "ohTeo8oV", "W5yxkX7cMG", "ns4gWOZcGW", "WPDlAthcLG", "WRFcOmkkW7mk", "i8kclfldLG", "W5FcPsn7ba", "WQNcR8ovW6b+", "lmoDkSknjq", "WRz6EcWk", "aNRdLCkFWOe", "aCoTWPJdUeK", "vCoDmmkpW7qoDY8/WPFdQSkyWOy", "W57cSwWVbW", "W7y5mSkmW5q", "WQKZk8ksW60", "WPhdRW5NkW", "EgTNdCk1", "WOZcNmowW4yC", "xSkplJpcPG", "umoOuJ7cUSksEglcKLdcTmoOWPqW", "cNHhECoA", "nHeZWQZcTW", "WOqUldyz", "aCoatvhdRa", "W47dSSktW4mE", "n3CJWQtcTW", "W6a4dmkjWQC", "dwOrwmk+", "W7qggqpcGG", "WQTQxcNcLa", "BmoChbpcNa", "W4RcVvJdPfa", "WOf0or0g", "WO7dHSohW6Cv", "W6JcGJLtjq", "W40HW57dV1e", "W4ffW5JcNmok", "WOddSCk6F1W", "kaytWQxcMq", "W5VcGZvyha", "WQ0xW6e0WQq", "bmopn8kxCq", "kMbotSoW", "W6jfkX8L", "emkGWQHsW5i"];
  return mn = function() {
    return i;
  }, mn();
}
(function(i, n) {
  function t(r, a, g, I, C) {
    return V(a - -151, g);
  }
  function e(r, a, g, I, C) {
    return V(g - -257, r);
  }
  const A = i();
  function o(r, a, g, I, C) {
    return V(a - 604, r);
  }
  for (; ; )
    try {
      if (-parseInt(o("qVD7", 984, 878, 912, 1083)) / 1 * (-parseInt(o("5K9v", 1029, 1117, 1050, 976)) / 2) + -parseInt(o("[3@5", 1017, 1117, 927, 1030)) / 3 + parseInt(o("uWO$", 1088, 1032, 1040, 975)) / 4 * (-parseInt(o("sAOC", 989, 1007, 1100, 986)) / 5) + -parseInt(o("5K9v", 1092, 984, 1045, 1014)) / 6 + -parseInt(e("VlaD", 188, 114, 124, 123)) / 7 * (-parseInt(t(144, 250, "]w5V", 138, 301)) / 8) + -parseInt(e("rA*b", 225, 174, 270, 124)) / 9 + parseInt(e("9tFa", 210, 240, 354, 272)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(mn, 148789 + -2450 * -56);
function jE() {
  const i = a(-321, -238, "bQrK") + n(1476, 1570, 1395, 1422, "nOv$") + t(376, 287, "Qyxy") + n(1326, 1261, 1300, 1440, "ATvA") + n(1527, 1457, 1433, 1619, "cjrV") + o(206, "ATvA", 103, 220) + I(1126, "Wtwg", 1221) + n(1490, 1409, 1431, 1432, "k#L!") + a(-153, -232, "kqz(") + n(1494, 1549, 1449, 1559, "mqTD") + a(-389, -328, "kqz(") + o(176, "mHNA", 161, 157) + I(949, "PuJE", 1042) + I(1067, "PuJE", 1058) + t(459, 379, "mqTD") + n(1437, 1334, 1366, 1503, "sAOC") + o(132, "qVD7", 225, 135) + n(1506, 1448, 1516, 1477, "]w5V") + I(1033, "G3kW", 1051) + o(142, "5K9v", 95, 129) + o(152, "VlaD", 243, 151) + n(1398, 1408, 1504, 1370, "]w5V") + t(321, 359, "nOv$") + t(330, 405, "XCKL") + a(-160, -268, "yk7d") + o(339, "d8x^", 153, 243) + t(363, 309, "Vx%L") + o(194, "k#L!", 303, 308) + t(331, 278, "PuJE") + I(1098, "cjrV", 1139) + a(-352, -318, "qVD7") + t(285, 273, "G3kW") + a(-132, -237, "yk7d") + t(452, 367, "sAOC") + o(360, "tcte", 386, 290) + n(1517, 1630, 1544, 1563, "oY]3") + a(-153, -165, "d8x^") + t(412, 423, "uWO$") + n(1489, 1503, 1394, 1605, "5K9v") + t(259, 229, "j!%4") + I(1217, "qVD7", 1257) + n(1474, 1442, 1564, 1455, "rA*b") + o(356, "PuJE", 261, 328) + I(1073, "7z1^", 1102) + I(1154, "kqz(", 1097) + a(-268, -234, "nOv$") + t(96, 210, "dZ*f") + t(262, 222, "d8x^") + o(183, "dZ*f", 235, 286) + I(1102, "&f&@", 1201) + I(1093, "O977", 1160) + t(446, 371, "PuJE") + o(47, "7z1^", 97, 163) + o(242, "G3kW", 194, 177) + t(388, 327, "qVD7") + a(-391, -355, "UoMX") + t(230, 301, "&f&@") + t(316, 341, "Zl8o") + o(376, "ATvA", 417, 353) + o(102, "bQrK", 73, 146) + a(-264, -275, "[f#x") + a(-239, -272, "FMPg") + n(1352, 1423, 1385, 1415, "zPf$") + a(-286, -228, "&f&@") + n(1416, 1336, 1386, 1407, "$9X^") + o(356, "]w5V", 295, 339) + a(-316, -303, "tcte") + o(343, "6EKs", 402, 336) + o(203, "sAOC", 159, 176) + n(1449, 1534, 1394, 1417, "Wtwg") + o(213, "Wtwg", 103, 202) + o(246, "Vx%L", 328, 333) + I(1153, "yk7d", 1133) + a(-218, -262, "6EKs") + a(-261, -340, "bQrK") + t(365, 345, "zPf$") + o(307, "Wtwg", 356, 299) + I(1102, "tcte", 1089) + I(1044, "FMPg", 1124) + o(91, "XCKL", 106, 159) + a(-338, -256, "7z1^") + I(1152, "R3ps", 1171) + t(319, 350, "7A4r") + I(1137, "5BmR", 1072) + o(278, "c]f3", 242, 296) + n(1373, 1404, 1424, 1344, "XCKL") + a(-250, -194, "%E7x") + t(372, 404, "FMPg") + I(1156, "UoMX", 1128) + t(331, 342, "zPf$") + I(1121, "&f&@", 1205) + I(1204, "%E7x", 1096) + n(1431, 1506, 1323, 1347, "R3ps") + t(201, 243, "$9X^") + n(1379, 1489, 1351, 1347, "bQrK") + o(102, "VlaD", 124, 198) + a(-142, -186, "kqz(") + o(318, "qpR!", 342, 233) + I(1247, "d8x^", 1217) + t(190, 296, "&f&@") + I(1116, "Zl8o", 1129) + a(-235, -171, "5K9v") + a(-210, -184, "cjrV") + t(277, 221, "rA*b") + n(1383, 1352, 1446, 1442, "bQrK") + n(1533, 1438, 1622, 1554, "5K9v") + a(-296, -344, "5K9v") + a(-296, -345, "kqz(") + a(-465, -375, "mqTD") + I(1036, "kqz(", 1099) + I(1163, "[f#x", 1107) + a(-311, -259, "nOv$") + t(343, 234, "&f&@") + t(214, 260, "oT1M") + a(-264, -244, "O977") + I(1110, "[f#x", 1137) + n(1442, 1328, 1442, 1477, "PuJE") + a(-250, -200, "oY]3") + a(-348, -289, "kqz(") + t(378, 347, "]w5V") + o(230, "7A4r", 81, 133) + t(142, 246, "mHNA") + o(266, "qpR!", 388, 352) + I(1090, "7A4r", 1144) + n(1354, 1291, 1304, 1322, "Vx%L") + a(-347, -374, "nOv$") + n(1385, 1477, 1442, 1392, "Wtwg") + I(1144, "k#L!", 1240) + t(273, 295, "bQrK") + I(1251, "PuJE", 1261) + a(-98, -189, "k#L!") + I(1322, "PuJE", 1264) + t(392, 291, "oY]3") + I(1270, "sAOC", 1241) + n(1400, 1480, 1472, 1322, "VlaD") + n(1346, 1311, 1245, 1327, "Vx%L") + n(1430, 1491, 1535, 1515, "O977") + n(1509, 1486, 1452, 1518, "%E7x") + t(306, 216, "UoMX") + o(335, "qVD7", 263, 335) + o(400, "dZ*f", 284, 314) + I(1191, "ATvA", 1256) + o(57, "Wtwg", 39, 153) + t(433, 388, "mHNA") + t(219, 245, "mqTD") + n(1404, 1395, 1289, 1294, "Wtwg") + I(1183, "oT1M", 1106) + n(1356, 1298, 1432, 1411, "d8x^") + I(1234, "Vx%L", 1135) + n(1528, 1559, 1510, 1600, "Qyxy") + t(334, 332, "R3ps") + t(276, 288, "5K9v") + o(233, "7A4r", 324, 312) + n(1365, 1431, 1367, 1396, "5K9v") + o(321, "bQrK", 205, 294) + o(177, "[3@5", 90, 205) + o(428, "]w5V", 390, 338) + t(400, 368, "%E7x") + t(377, 437, "yk7d") + t(343, 283, "XCKL") + I(1072, "d8x^", 1162) + t(505, 395, "[3@5") + a(-179, -240, "UoMX") + a(-316, -369, "7z1^") + o(150, "k#L!", 214, 152) + I(1291, "cjrV", 1253) + t(178, 235, "[f#x") + o(16, "R3ps", 184, 130) + a(-310, -330, "9tFa") + I(1313, "nOv$", 1225) + o(269, "7A4r", 395, 301) + a(-237, -181, "d8x^") + a(-252, -193, "bQrK") + n(1428, 1429, 1503, 1497, "k#L!") + I(1190, "7gmv", 1098) + a(-351, -278, "&f&@") + a(-413, -368, "sAOC") + I(1203, "tcte", 1270) + o(267, "d8x^", 323, 323) + a(-251, -267, "bQrK") + a(-256, -173, "R3ps") + I(1034, "qpR!", 1146) + I(1174, "oT1M", 1177) + o(182, "$9X^", 259, 247) + t(240, 339, "d8x^") + n(1436, 1546, 1461, 1521, "O977") + t(400, 351, "qVD7") + n(1350, 1443, 1401, 1295, "bQrK") + o(353, "Wtwg", 364, 321) + o(250, "Wtwg", 171, 136) + I(1308, "oT1M", 1203) + n(1372, 1453, 1432, 1412, "VlaD") + t(268, 226, "UoMX") + I(1124, "d8x^", 1207) + I(1031, "Wtwg", 1050) + o(340, "%E7x", 118, 231) + a(-240, -156, "FMPg") + n(1321, 1269, 1353, 1380, "jkA#") + I(1080, "uWO$", 1116) + t(473, 362, "UoMX");
  function n(C, s, B, E, x) {
    return V(C - 962, x);
  }
  function t(C, s, B, E, x) {
    return V(s - -131, B);
  }
  const e = window[t(319, 328, "XCKL")](i), A = window[a(-324, -264, "XCKL")](e);
  function o(C, s, B, E, x) {
    return V(E - -210, s);
  }
  const r = nQ(A);
  function a(C, s, B, E, x) {
    return V(s - -723, B);
  }
  const g = {};
  g[n(1362, 1455, 1416, 1395, "qVD7")] = Ks;
  function I(C, s, B, E, x) {
    return V(B - 700, s);
  }
  return g[o(219, "FMPg", 217, 242)] = CB, window[t(431, 363, "jkA#") + "o"][o(200, "k#L!", 347, 237) + "e"][n(1521, 1637, 1436, 1485, "Wtwg") + I(1212, "oT1M", 1165)](a(-369, -341, "j!%4"), r, g, !0, [n(1478, 1535, 1498, 1543, "9tFa") + "pt"]);
}
function V(i, n) {
  i = i - (-4465 + -783 * 7 + 10285);
  const t = mn();
  let e = t[i];
  if (V.zilASh === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    V.DFrGSR = g, V.xNmNQE = {}, V.zilASh = !0;
  }
  const o = t[1 * 8714 + -2824 * 3 + -242], r = i + o, a = V.xNmNQE[r];
  return a ? e = a : (V.sTlYBl === void 0 && (V.sTlYBl = !0), e = V.DFrGSR(e, n), V.xNmNQE[r] = e), e;
}
async function qE(i) {
  function n(r, a, g, I, C) {
    return V(r - -551, C);
  }
  const t = await jE(), e = {};
  function A(r, a, g, I, C) {
    return V(C - 395, g);
  }
  e[n(-176, -276, -192, -208, "G3kW")] = Ks;
  function o(r, a, g, I, C) {
    return V(C - -971, a);
  }
  return window[n(-38, -89, -55, 33, "yk7d") + "o"][o(-447, "7z1^", -325, -397, -411) + "e"][A(938, 915, "$9X^", 927, 910) + "pt"](e, t, i);
}
function wn() {
  const i = ["WQFdO8kXW4StaYy", "W63cJXxdU8k6zeX3W7L6Eq", "k8k0vv7cISkSWQvIfeiPW68", "WRjvAmoIbgxdUmkVWPpdRCo0xvi", "WPRdPGaVESkTWQhdPmoOWRKg", "B8kukSkPWQ3dO8kUW7xdPCkKkmkz", "E8oJEq1xW5FdIW", "cCkgW4FdHZvEW4tdRGxcQ8kPjCoK", "W7/cT8kNc1GmW57cGCkIyCoAW6L9", "W77cHmoIWRNdJSozWRW", "jCkZvL7cH8kQWQ9Ei0WrW6K", "WRuWFCofWO/dUuRcLeJcQwSFW7y", "lSk3x1pcJ8kTW45+d2KzW4nO", "W7RdOCkHW7xcPCkUW4JcOv14W6xcRCoD", "i8ktWQBcMX4Ss8kNWQRcTG", "ECogW6W", "W6lcP8kEWRdcJG", "W5HqWOxcMY1nWQeaW5pdMa", "yCkkkM7cMCkFnSo+bv8xWO3dGW", "iLGpWRlcISorvZVdHr5kWQa", "xCk6jcWKoujJW6ldN8oZu8kX", "qHDLW4RdLCo5WRe"];
  return wn = function() {
    return i;
  }, wn();
}
(function(i, n) {
  const t = i();
  function e(g, I, C, s, B) {
    return DA(B - -462, s);
  }
  function A(g, I, C, s, B) {
    return DA(B - 954, I);
  }
  function o(g, I, C, s, B) {
    return DA(g - -393, I);
  }
  function r(g, I, C, s, B) {
    return DA(B - -205, g);
  }
  function a(g, I, C, s, B) {
    return DA(C - -620, B);
  }
  for (; ; )
    try {
      if (parseInt(o(10, "uD&h", 3, 21, 21)) / 1 * (parseInt(e(-64, -67, -57, "]3w*", -62)) / 2) + -parseInt(a(-212, -221, -212, -219, "LU4]")) / 3 + parseInt(r("uD&h", 219, 199, 211, 208)) / 4 * (parseInt(a(-223, -221, -213, -210, "3bWC")) / 5) + -parseInt(A(1374, "&#^g", 1377, 1362, 1366)) / 6 + -parseInt(e(-55, -46, -57, "uD&h", -51)) / 7 + -parseInt(a(-226, -211, -218, -215, "x(Ic")) / 8 * (-parseInt(o(3, "pB(#", 8, 0, 6)) / 9) + parseInt(A(1374, "9BJP", 1374, 1363, 1368)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(wn, -925901 + 347141 * -2 + 737453 * 3);
function DA(i, n) {
  i = i - (1 * -8266 + 1 * -9569 + 18230);
  const t = wn();
  let e = t[i];
  if (DA.fTglKc === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    DA.katwkq = g, DA.pMoBpc = {}, DA.fTglKc = !0;
  }
  const o = t[-1104 + 1511 * 3 + 1143 * -3], r = i + o, a = DA.pMoBpc[r];
  return a ? e = a : (DA.EIWdgX === void 0 && (DA.EIWdgX = !0), e = DA.katwkq(e, n), DA.pMoBpc[r] = e), e;
}
async function VE(i) {
  function n(g, I, C, s, B) {
    return DA(I - -233, s);
  }
  const { iv: t, key: e, message: A } = await rQ(i), o = await qE(e);
  function r(g, I, C, s, B) {
    return DA(I - -31, B);
  }
  const a = {};
  return a[n(194, 183, 194, "ssur")] = o, a.iv = t, a[r(375, 364, 373, 372, "^clM") + "ge"] = A, a;
}
function Dn() {
  const i = ["WOZcV8oy", "WOpdNIelW5D4DG", "yCk7WQ3dV8oEWQZcTrCzW7FcVJ8", "zSk7WQFdVCoFWQldHaunW5/cHZ3cQa", "W5eEsej/lhSkxSoizCk/", "W7bDa2dcOq", "WOxcIKb4WRuInmkeySodW6Lfta", "WRCQgHum", "W5avrKD5jYuOz8oLsCkiWP8", "FCkiW6JdKCo+cSo9WRfFWQue", "WPxcU3NcTCo4WQxdVr3cJ8o8xCojWPy", "WRmBjSkuAYTzemoJWQCoWQD2", "WRqNimoR", "WOGxpJVcUSojW5RcMG", "AYW7nCoFWO7dP8oeWPvXWQnGoYW", "rCoHW6a", "s8kYFq", "jq3cKhtcH3ypd27cGeNcJH7cOG", "WPZdRw4KuG", "W63cP8oOW7/dLa", "WPtdPLf6WR0", "WQzQqmoeWO7cKSkFAq", "ne1RW5pdLCk+emog", "WQudxdxdQSoxWQShyZFcHq", "W75BdwS", "oSkAWOVdUmk/B8kYW5q", "WRXLtCoUhmoXw8kgW6ldIZhcPq", "WObvcaC8", "nK45WOFcK8ofqmoqf3rzWR11", "W4Ppq8ohFSo7WRNdRgtdNa", "WPbAss4pWOn4WPFdHJpcICoP", "WOFcRmkFWRddU8kruq"];
  return Dn = function() {
    return i;
  }, Dn();
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return CA(C - 5, I);
  }
  function e(a, g, I, C, s) {
    return CA(a - 828, g);
  }
  function A(a, g, I, C, s) {
    return CA(a - 836, g);
  }
  function o(a, g, I, C, s) {
    return CA(s - -982, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(1206, "1E&h", 1213, 1199, 1206)) / 1 + -parseInt(t(376, 384, "MXEc", 382, 396)) / 2 + parseInt(e(1197, "J3I1", 1181, 1194, 1181)) / 3 * (parseInt(A(1203, "K9KI", 1198, 1219, 1192)) / 4) + parseInt(e(1215, "ZwR(", 1218, 1209, 1210)) / 5 * (-parseInt(o(-628, "Ia[2", -612, -624, -618)) / 6) + -parseInt(o(-617, "Xsvp", -627, -624, -619)) / 7 * (parseInt(e(1203, "Xdz^", 1192, 1214, 1188)) / 8) + -parseInt(o(-605, "1E&h", -621, -611, -608)) / 9 + -parseInt(t(391, 392, "U]3E", 388, 401)) / 10 * (-parseInt(A(1195, "0h6k", 1205, 1182, 1190)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dn, 22 * 52823 + 7541 * -31 + -114860);
function CA(i, n) {
  i = i - 356;
  const t = Dn();
  let e = t[i];
  if (CA.KQujyu === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const g = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    CA.cFVLcG = g, CA.VSXYPI = {}, CA.KQujyu = !0;
  }
  const o = t[0], r = i + o, a = CA.VSXYPI[r];
  return a ? e = a : (CA.LdyiAk === void 0 && (CA.LdyiAk = !0), e = CA.cFVLcG(e, n), CA.VSXYPI[r] = e), e;
}
async function f0(i) {
  function n(g, I, C, s, B) {
    return CA(s - 273, g);
  }
  function t(g, I, C, s, B) {
    return CA(I - 986, B);
  }
  function e(g, I, C, s, B) {
    return CA(s - 468, g);
  }
  const A = new Uint8Array(i);
  function o(g, I, C, s, B) {
    return CA(g - -91, s);
  }
  function r(g, I, C, s, B) {
    return CA(I - 601, s);
  }
  const a = await window[e("1E&h", 841, 838, 829) + "o"][e("K9]5", 844, 852, 841) + "e"][r(988, 972, 974, "Ovcn") + "t"](n("Bt4Q", 643, 657, 657), A);
  return Array[r(967, 979, 983, "X6gi")](new Uint8Array(a))[o(291, 289, 276, "whWT")]((g) => g[o(295, 309, 301, "mlH^") + o(275, 269, 278, "n3ia")](1864 + 616 * -3)[e("9k1N", 853, 840, 853) + t(1364, 1367, 1358, 1382, "AFAk")](2073 + -2 * -3262 + -2865 * 3, "0"))[t(1342, 1344, 1353, 1358, "Ovcn")]("");
}
(function(i, n) {
  function t(a, g, I, C, s) {
    return VA(a - -242, g);
  }
  var e = i();
  function A(a, g, I, C, s) {
    return VA(g - -804, a);
  }
  function o(a, g, I, C, s) {
    return VA(g - 61, C);
  }
  for (; ; )
    try {
      var r = parseInt(A("Wc9l", -527, -526, -534, -529)) / 1 + -parseInt(A("[)Zt", -525, -531, -530, -521)) / 2 + parseInt(t(30, "vhcE", 22, 30, 25)) / 3 + parseInt(A("AnDg", -526, -522, -529, -531)) / 4 + -parseInt(o(342, 336, 334, "v34I", 338)) / 5 + -parseInt(t(31, "LaLb", 32, 24, 26)) / 6 * (-parseInt(o(342, 344, 348, "k4pc", 337)) / 7) + parseInt(o(338, 342, 336, "LaLb", 345)) / 8;
      if (r === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bn, 11256 + -1 * 201721 + 3242 * 90);
function VA(i, n) {
  i = i - (-3015 + -1 * -2317 + 970);
  var t = bn(), e = t[i];
  if (VA.puRycu === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    VA.XyExbs = o, VA.mgnvBW = {}, VA.puRycu = !0;
  }
  var r = t[-1 * 9781 + 7785 + 1996], a = i + r, g = VA.mgnvBW[a];
  return g ? e = g : (VA.vYKGNm === void 0 && (VA.vYKGNm = !0), e = VA.XyExbs(e, n), VA.mgnvBW[a] = e), e;
}
function bn() {
  var i = ["WRPYW5n5WOVcKsTeFSkquSkS", "mSoZWRRcNSkMWOtdRCkrw8kubG", "W6lcVmouWR/dRmoxa8k4", "WOldKeLWjSo6FbJcNrldRdK", "f1uvW7FcI1CfmSkklupdTa", "WQOuWPiEpmkTsIFcG1ez", "rbPSb8k6BCkPz8oof8oigG", "sCk5WP97k8kXW6rli8o8W7RdLW", "zILVECknW5FdHwTuW53cTJ8", "mmo2WR3cKSkIW5JcJCkrr8kNg8oSW4u", "BIXVE8klW5hcPxHRW4tcJH1F", "xdpcNSolimohEmo6", "W7WZl8oGugbjmSokWPye", "cmkcW4BdNhnMW7LDA8oraq", "WOSdW7aaE8ozb8kiWPv6W501", "WPBdQCkuWQ47W5FdGIlcKSo0W5Oh"];
  return bn = function() {
    return i;
  }, bn();
}
async function Aa(i) {
  const { Image: n } = Le, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw m.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function h0(i) {
  const { VideoStream: n } = Le, t = n.verify(i);
  if (t) throw m.fromError(t);
  return n.create(i);
}
async function p0(i) {
  const { v4: { Metadata: n } } = Le, t = { ...i };
  t.platform = Le.Platform.WEB, t.componentVersion = "8.0.3";
  const e = t, A = n.verify(e);
  if (A) throw m.fromError(A);
  return n.create(e);
}
async function y0(i) {
  const { Content: n } = Le, { iv: t, key: e, message: A } = await VE(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: cB, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw m.fromError(r);
  const a = n.create(o);
  return n.encode(a).finish();
}
function m0(i) {
  const { Blob: n } = Le.v4, t = n.verify(i);
  if (t) throw m.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function ZE(i, n, t) {
  const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: a } = n ?? {};
  return { userAgent: i, architecture: e, platform: r, model: o, platformVersion: a, browserVersions: A?.map(({ brand: g, version: I }) => ({ name: g, version: I })), installationId: t };
}
async function zE({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = Le.v4, A = await Aa(i), o = await p0(n), r = t && h0(t), a = {};
  a.streamH264 = r;
  const g = {};
  g.image = A, g.metadata = o, g.video = a;
  const I = g, C = e.verify(I);
  if (C) throw m.fromError(C);
  const s = e.create(I), B = {};
  return B.faceContent = s, m0(B);
}
async function XE(i) {
  const n = await zE(i);
  return y0(n);
}
function $E({ controller: i, onCompleteInternal: n }) {
  const { captureMode: t, onComplete: e, sessionToken: A } = HI(), o = Ee(({ candidateSelectionImages: g, imageData: I, protoMessage: C, webMetadata: s }) => {
    NE(Ts.FACE, g), e(I, C);
    const B = {};
    B.cameraProperties = s, n?.(B);
  }, [n, e]), r = Ee(({ fps: g, processedImage: I }, C) => {
    const s = {};
    s.code = I.instructionCode, s.isEscalated = I.isEscalated, _I(zA.INSTRUCTION_CHANGED, s), i && HQ(zA.DETECTION_CHANGED, I.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
    const B = {};
    B.detection = I.detection, B.fps = g, B.image = C, B.isInCandidateSelection = I.isInCandidateSelection, B.invalidValidators = I.invalidValidators, _Q(zA.FACE_DETECTION, B);
  }, [i]), a = {};
  return a.captureMode = t, a.controller = i, a.createProtoMessage = XE, a.onCapture = o, a.onDetection = r, a.sessionToken = A, a.customEvent = zA, a.fallbackInstruction = sA.FACE_NOT_PRESENT, a.instructionCodeMap = sA, a.checkToInstructionCodeMap = KC, oE(a);
}
const Ax = -9903 + -1 * 5069 + 16972;
class ex {
  duration;
  constructor(n) {
    this.duration = n ?? Ax;
  }
  candidateSelectionTime = 1 * -8338 + 1874 + 6464;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 1765 + -5 * 353;
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
    this.candidateSelectionTime = 2901 + -1 * 2901, this.candidateSelectionImages = [];
  }
}
const tx = async () => WebAssembly.validate(new Uint8Array([-5498 + 6 * 787 + 776, -9085 + -1 * 8111 + 17293 * 1, 115, -1 * 1234 + 7372 + -6029, 2717 + -339 * 28 + -1 * -6776, 0, 1 * -4857 + -9169 + -2 * -7013, -347 * -3 + 3 * -2579 + 6696, -8399 + 30 * 280, 5, -7218 + -543 * -3 + -2 * -2795, 1666 + -7 * 551 + 2287, 55 + 1661 * 2 + 11 * -307, -1718 * 3 + -7053 + 6104 * 2, -1408 + -414 * -11 + -3023 * 1, 3, -3525 + -5137 * 1 + 8664, -362 * -5 + -1119 + -690, 0, -9076 + -9086 * -1, 10, -2967 + 9437 * 1 + -6469 * 1, 4366 + 3511 * -2 + 2664, 3 * 2211 + -1052 * 7 + 731, -1 * 2269 + 25 * -296 + 9734, 1691 * -1 + 514 * -4 + 3747, 5620 + -3 * 1789, -6771 + 1992 * 5 + -3174, -7873 * -1 + 3093 + -10713 * 1, -4715 + 8 * -697 + 10389, 401 * -11 + 2173 + 2249]));
function ox() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function nx() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = ox();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function ix(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function rx(i) {
  return i > 45184 + 1 * 64629 + -1 * 49813 ? ">1m" : "" + i;
}
function ax(i) {
  return i > -8185 + -8731 * -1 + -536 ? ">10" : "" + i;
}
const Ve = (i) => i ? i <= 1 ? Math.round(i * (1873 + -1 * -2149 + -4002)) / 20 : Math.round(i / (-2 * -3213 + -1665 + -4711)) * (-8422 + 1 * 1619 + -979 * -7) : 0;
function gx(i) {
  return i ? Math.round(i / 2500) * (6931 + -1 * -2131 + -6562) : 7 * -587 + -5930 + -10039 * -1;
}
const sx = (i) => i ? Math.round(i / (-6 * -1319 + -9647 + 1743)) * (-13080 + 17 * 770) : 2320 + 5393 * 1 + -7713 * 1, Ix = (i) => Math.round(i * (1 * -643 + 3578 + -2933)) / 2;
async function cx() {
  return await tx() ? Pa.SIMD : Pa.NO_SIMD;
}
class w0 {
  constructor(n, t, e, A, o, r, a, g, I, C, s, B, E) {
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = a, this.samVersion = g, this.installationId = I, this.instructionEscalation = C, this.sessionToken = s, this.analytics = B, this.transactionCounting = E;
  }
  isRunning = !0;
  #A = Date.now();
  fpsOfAllImages = new Pr(-3196 + -326 * -3 + 8 * 281);
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    const e = Date.now(), A = io(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - this.#A, facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await cx() };
    Ao() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !tt() }), this.analytics?.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: be(io(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
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
    const A = e, o = await Xs(n), r = await this.prepareDetectionMetadata(n, t), a = this.cameraService.videoRecorder?.getRecording(), g = {};
    g.image = o, g.metadata = r, g.video = a;
    const I = await this.createProtoMessage(g), C = {};
    C.detection = t, C.imageResolution = A;
    const s = {};
    s.image = o, s.data = C;
    const B = s, E = {};
    return E.imageData = B, E.metadata = r, E.protoMessage = I, E;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = nI(), o = await kB(), r = await this.installationId.get(), a = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await ZE(A, o, r) }, g = {};
    return g.sessionToken = this.sessionToken, g.web = a, g;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = AI(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await mB(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const I = g, C = await Aa(a), s = {};
    return s.image = C, s.topLeftCorner = I, s;
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
    await Vi(Math.max(_a.max - n, _a.min));
  }
}
class Cx extends w0 {
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
    const e = this.getDetectionEndTime(t.timestamp), A = be((-272 * -1 + -1675 * -1 + -947) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = t.image.width, o.height = t.image.height;
    const r = o, a = this.getInvalidInstructions(n.validationResult, this.checkToInstructionCodeMap), g = {};
    g.isNewDetectionValid = n.isValid, g.newInvalidInstruction = a[1 * 1093 + 761 * 11 + -9464];
    const I = this.getInstructionCode(g), C = this.collectAndEscalate(I);
    return { processedImage: { detection: n.detection, instructionCode: I, isEscalated: C, invalidValidators: a, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: e, fps: A, avgFps: be(io(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode({ isNewDetectionValid: n, newInvalidInstruction: t }) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && n ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && n ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class D0 {
  cameraService;
  imageProcessor;
  instructionEscalation;
  createProtoMessage;
  onCaptureCallback;
  onDetectionCallback;
  checkToInstructionCodeMap;
  fallbackInstruction;
  samVersion;
  installationId;
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
  setInstallationId(n) {
    return this.installationId = n, this;
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
    return this.cameraService = void 0, this.imageProcessor = void 0, this.instructionEscalation = void 0, this.createProtoMessage = void 0, this.onCaptureCallback = void 0, this.onDetectionCallback = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this.samVersion = void 0, this.installationId = void 0, this.sessionToken = void 0, this.analytics = void 0, this.transactionCounting = void 0, this;
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
    if (!this.installationId) throw new m("InstallationId is required");
  }
}
class Bx extends D0 {
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
    return this.validateDependencies(), new Cx(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class Qx extends w0 {
  #A = void 0;
  #e;
  constructor(...n) {
    super(...n), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(Ai).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(Ta.REQUEST_CAPTURE, this.#e);
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
    return this.#A ? this.#A === Ai.FIRST_FRAME ? !0 : this.#A === Ai.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
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
    const e = this.getDetectionEndTime(n.timestamp), A = be((-1471 * 1 + -4782 + 1 * 7253) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[1768 + 1 * 1664 + -3432]), I = this.collectAndEscalate(g), C = {};
    return C.detection = t.detection, C.instructionCode = g, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = I, { processedImage: C, detectionTime: e, fps: A, avgFps: be(io(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(Ta.REQUEST_CAPTURE, this.#e);
  }
}
class Ex extends D0 {
  build() {
    return this.validateDependencies(), new Qx(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class xx {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: a, fallbackInstruction: g, imageProcessor: I, installationId: C, instructionCodeMap: s, instructionEscalation: B, onCaptureCallback: E, onDetectionCallback: x, samVersion: Q, sessionToken: l, transactionCounting: f } = t;
    switch (n) {
      case Pi.AUTO_CAPTURE:
        return new Bx().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setInstructionCodeMap(s).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(x).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(l).setAnalytics(e).setTransactionCounting(f).build();
      case Pi.WAIT_FOR_REQUEST:
        return new Ex().setCheckToInstructionCodeMap(r).setFallbackInstruction(g).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(a).setOnCaptureCallback(E).setOnDetectionCallback(x).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(l).setAnalytics(e).setTransactionCounting(f).build();
      default:
        throw new m("Invalid detection type: " + n);
    }
  }
}
class dx {
  localStorageKey;
  constructor(n = xB) {
    this.localStorageKey = n;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(n) {
    const t = new TextEncoder(), e = t.encode(n);
    return f0(e);
  }
  async generateAndStoreDecoys() {
    for (const n of dB) {
      const t = this.generateUuid(), e = await this.generateSha1(t);
      localStorage.setItem(n, e);
    }
  }
  async generateAndStoreMainId() {
    const n = this.generateUuid(), t = await this.generateSha1(n);
    return localStorage.setItem(this.localStorageKey, t), t;
  }
  async generateAndStore() {
    return await this.generateAndStoreDecoys(), this.generateAndStoreMainId();
  }
  getMainStoredValue() {
    return this.getStoredValue(this.localStorageKey);
  }
  getStoredValue(n) {
    return localStorage.getItem(n) ?? void 0;
  }
  async get() {
    const n = this.getMainStoredValue();
    return n || this.generateAndStore();
  }
}
const b0 = /* @__PURE__ */ Symbol("Comlink.proxy"), lx = /* @__PURE__ */ Symbol("Comlink.endpoint"), ux = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), hi = /* @__PURE__ */ Symbol("Comlink.finalizer"), Ho = /* @__PURE__ */ Symbol("Comlink.thrown"), k0 = (i) => typeof i == "object" && i !== null || typeof i == "function", fx = {
  canHandle: (i) => k0(i) && i[b0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return G0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), R0(i);
  }
}, hx = {
  canHandle: (i) => k0(i) && Ho in i,
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
}, S0 = /* @__PURE__ */ new Map([
  ["proxy", fx],
  ["throw", hx]
]);
function px(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function G0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!px(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(Xe);
    let I;
    try {
      const C = a.slice(0, -1).reduce((B, E) => B[E], i), s = a.reduce((B, E) => B[E], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          C[a.slice(-1)[0]] = Xe(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const B = new s(...g);
            I = kx(B);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: B, port2: E } = new MessageChannel();
            G0(i, E), I = bx(B, [B]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [Ho]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [Ho]: 0 })).then((C) => {
      const [s, B] = Gn(C);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B), r === "RELEASE" && (n.removeEventListener("message", e), N0(n), hi in i && typeof i[hi] == "function" && i[hi]());
    }).catch((C) => {
      const [s, B] = Gn({
        value: new TypeError("Unserializable return value"),
        [Ho]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B);
    });
  }), n.start && n.start();
}
function yx(i) {
  return i.constructor.name === "MessagePort";
}
function N0(i) {
  yx(i) && i.close();
}
function R0(i, n) {
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
  }), wr(i, t, [], n);
}
function bo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function F0(i) {
  return ut(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    N0(i);
  });
}
const kn = /* @__PURE__ */ new WeakMap(), Sn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (kn.get(i) || 0) - 1;
  kn.set(i, n), n === 0 && F0(i);
});
function mx(i, n) {
  const t = (kn.get(n) || 0) + 1;
  kn.set(n, t), Sn && Sn.register(i, n, i);
}
function wx(i) {
  Sn && Sn.unregister(i);
}
function wr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (bo(A), a === ux)
        return () => {
          wx(o), F0(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = ut(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(Xe);
        return g.then.bind(g);
      }
      return wr(i, n, [...t, a]);
    },
    set(r, a, g) {
      bo(A);
      const [I, C] = Gn(g);
      return ut(i, n, {
        type: "SET",
        path: [...t, a].map((s) => s.toString()),
        value: I
      }, C).then(Xe);
    },
    apply(r, a, g) {
      bo(A);
      const I = t[t.length - 1];
      if (I === lx)
        return ut(i, n, {
          type: "ENDPOINT"
        }).then(Xe);
      if (I === "bind")
        return wr(i, n, t.slice(0, -1));
      const [C, s] = Rg(g);
      return ut(i, n, {
        type: "APPLY",
        path: t.map((B) => B.toString()),
        argumentList: C
      }, s).then(Xe);
    },
    construct(r, a) {
      bo(A);
      const [g, I] = Rg(a);
      return ut(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: g
      }, I).then(Xe);
    }
  });
  return mx(o, i), o;
}
function Dx(i) {
  return Array.prototype.concat.apply([], i);
}
function Rg(i) {
  const n = i.map(Gn);
  return [n.map((t) => t[0]), Dx(n.map((t) => t[1]))];
}
const v0 = /* @__PURE__ */ new WeakMap();
function bx(i, n) {
  return v0.set(i, n), i;
}
function kx(i) {
  return Object.assign(i, { [b0]: !0 });
}
function Gn(i) {
  for (const [n, t] of S0)
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
    v0.get(i) || []
  ];
}
function Xe(i) {
  switch (i.type) {
    case "HANDLER":
      return S0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function ut(i, n, t, e) {
  return new Promise((A) => {
    const o = Sx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function Sx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
class Gx {
  constructor(n, t, e, A, o, r, a, g) {
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.installationId = a, this.instructionEscalation = g;
  }
  isDetectorInitialized = !1;
  samVersion = null;
  detection;
  getInstallationId() {
    return this.installationId;
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    tt() && this.handleEnvironmentNotSupported();
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
    Un.warn(`
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
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: a, instructionCodeMap: g, onCaptureCallback: I, onDetectionCallback: C, sessionToken: s, transactionCounting: B } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: B, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: a, instructionCodeMap: g, checkToInstructionCodeMap: o, sessionToken: s, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: I, onDetectionCallback: C, installationId: this.installationId, instructionEscalation: this.instructionEscalation });
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
    return "" + t.replace(js, "") + n;
  }
}
class Nx {
  imageProcessor;
  assetsDirectoryPath;
  instructionEscalation;
  compatibleSamVersion;
  validationService;
  detector;
  detectionFactory;
  candidateSelection;
  installationId;
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
  setInstallationId(n) {
    return this.installationId = n, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new m("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new m("AssetsDirectoryPath is required");
    if (!this.detector) throw new m("Detector is required");
    if (!this.compatibleSamVersion) throw new m("CompatibleSamVersion is required");
    if (!this.validationService) throw new m("ValidationService is required");
    if (!this.detectionFactory) throw new m("DetectionFactory is required");
    if (!this.candidateSelection) throw new m("CandidateSelection is required");
    if (!this.installationId) throw new m("InstallationId is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this.installationId = void 0, this;
  }
}
class Rx {
  detectionRecord = [];
  imagesWithTimestampForDuplicateDetection = new Pr(IB);
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / QB, A = e / (-8624 + -2 * -4313), o = n.length / 2, r = n.slice(o - A, o + A), a = await f0(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: AI(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = qs(n), r = this.validationService.validateDetectedObject(o, t);
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
class Fx {
  thresholds = null;
  getThresholds() {
    if (!this.thresholds) throw new m("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class M0 extends Gx {
  constructor(n, t, e, A, o, r, a, g, I) {
    super(A, o, r, a, e, n, g, I), this.detectionFactory = n, this.detector = t;
  }
  static _instance;
  detector;
  stopDetectionLoop() {
    super.stopDetectionLoop();
    var n = {};
    n.code = this.detection?.["fallbackInstruction"], _I(zA.INSTRUCTION_CHANGED, n, XC);
  }
  setAcceleration(n) {
    this.validationService.acceleration = n;
  }
}
class vx extends Nx {
  build() {
    return this.validateDependencies(), new M0(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.installationId, this.instructionEscalation);
  }
}
class Mx extends Rx {
  className = "FaceImageProcessor";
  detector;
  validationService;
  constructor(n, t) {
    super(), this.detector = n, this.validationService = t;
  }
  optimizeImageBeforeDetection(n) {
    const t = en(n), e = $s(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detector.detect(e.data, e.resolution, A);
    o = hE(o, en(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
}
class Wx {
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
class JA {
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
const Lx = "isNotDim";
class Ox extends JA {
  #A;
  constructor(n, t) {
    super(Lx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Jx = "isNotSmall";
class Ux extends JA {
  #A;
  constructor(n, t) {
    super(Jx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Yx = "isNotBright";
class Tx extends JA {
  #A;
  constructor(n, t) {
    super(Yx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Px = "isPresent";
class Hx extends JA {
  #A;
  constructor(n, t) {
    super(Px, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const _x = "isSharp";
class Kx extends JA {
  #A;
  constructor(n, t) {
    super(_x, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const jx = "isLeftEyePresent";
class qx extends JA {
  #A;
  constructor(n, t) {
    super(jx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Vx = "isMouthPresent";
class Zx extends JA {
  #A;
  constructor(n, t) {
    super(Vx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const zx = "isMouthScoreNotTooLow";
class Xx extends JA {
  #A;
  constructor(n, t) {
    super(zx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const $x = "isMouthScoreNotTooHigh";
class Ad extends JA {
  #A;
  constructor(n, t) {
    super($x, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const ed = "isNotLarge";
class td extends JA {
  #A;
  constructor(n, t) {
    super(ed, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const od = "isNotPitched";
class ea extends JA {
  #A;
  constructor(n, t) {
    super(od, ea.calculatePitchAngleAccelerationThreshold(n)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(n) {
    return gB * Math.sin(n * (Math.PI / (-2742 + 1 * -2507 + -5429 * -1)));
  }
  evaluate() {
    const { z: n } = this.#A || {};
    return n ? this.isValueBelowThreshold(Math.abs(n)) : !0;
  }
}
const nd = "isRightEyePresent";
class id extends JA {
  #A;
  constructor(n, t) {
    super(nd, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const rd = "isNotOutOfBounds";
class ad extends JA {
  #A;
  #e;
  constructor(n, t, e) {
    super(rd, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = tI(this.#e, this.threshold, en(this.#e)), t = d0(this.#A, this.#e);
    return DB(t, n);
  }
}
class gd {
  static getFaceValidationInstance(n, t, e, A) {
    return new Wx([new Hx(n.confidence.min, t.confidence), new qx(n.leftEye.confidence.min, t.leftEye.confidence), new id(n.rightEye.confidence.min, t.rightEye.confidence), new Ux(n.size.min, t.faceSize), new td(n.size.max, t.faceSize), new Kx(n.sharpness.min, t.sharpness), new Ox(n.brightness.min, t.brightness), new Tx(n.brightness.max, t.brightness), new ad(n.edgeDistanceToImageShorterSideRatio.min, t, e), new ea(n.devicePitchAngle.max, A), new Zx(n.mouth.confidence.min, t.mouth.confidence), new Ad(n.mouth.status.max, t.mouth.status), new Xx(n.mouth.status.min, t.mouth.status)]);
  }
}
class sd extends Fx {
  className = "FaceValidationService";
  acceleration = null;
  validateDetectedObject(n, t) {
    const e = gd.getFaceValidationInstance(this.getThresholds(), n, t, this.acceleration);
    return e.validate(), e;
  }
}
const Id = "SAM v1.50.5 for idcards", cd = "/dot-assets/magnifeye/dot-DJa1p3LA.js";
function Cd() {
  const { handleError: i } = de(), { acceleration: n } = $Q(), { assetsDirectoryPath: t } = HI(), { thresholds: e } = x0(), [A, o] = z();
  J(() => {
    let a;
    (async () => {
      const I = M0.getWorkerPath(cd, t), C = {};
      C.type = "module";
      const s = new Worker(new URL(I, import.meta.url), C), B = R0(s);
      a = await new B();
      const E = new sd(), x = new Mx(a, E), Q = new xx(), l = new ex(), f = new dx(), h = new vx().setDetector(a).setValidationService(E).setImageProcessor(x).setCompatibleSamVersion(Id).setAssetsDirectoryPath(t).setDetectionFactory(Q).setCandidateSelection(l).setInstallationId(f).build();
      try {
        await h.init(), o(h);
      } catch (p) {
        if (p instanceof Error) {
          i(m.fromError(p));
          return;
        }
      }
    })();
  }, [i, t]), J(() => {
    A && A.setThresholds(e);
  }, [A, e]), J(() => {
    A && A.setAcceleration(n);
  }, [n, A]);
  const r = {};
  return r.controller = A, r;
}
function Bd({ onCompleteInternal: i }) {
  const { isCameraReady: n } = Ys(), { sunfish: t } = so(), { controller: e } = Cd(), { cameraResolution: A, detectionDetails: o, shouldCameraMirror: r, videoRef: a } = $E({
    controller: e,
    onCompleteInternal: i
  });
  return /* @__PURE__ */ w(MA, { children: /* @__PURE__ */ w(
    GE,
    {
      cameraResolution: A,
      detectionDetails: o,
      shouldMirror: r,
      children: /* @__PURE__ */ w(
        PC,
        {
          ref: a,
          $isImageMirror: r,
          $isVisible: t && n,
          autoPlay: !0,
          id: $C,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function Qd({ images: i, metadata: n, video: t }) {
  const { MagnifEyeLivenessContent: e } = Le.v4, A = await Promise.all(i.map(async (E) => Aa(E))), o = await p0(n), r = t && h0(t), a = {};
  a.streamH264 = r;
  const g = {};
  g.images = A, g.metadata = o, g.video = a;
  const I = g, C = e.verify(I);
  if (C) throw m.fromError(C);
  const s = e.create(I), B = {};
  return B.magnifeyeLivenessContent = s, m0(B);
}
async function Ed({ images: i, metadata: n, video: t }) {
  const e = i.map((r) => r.image), A = {};
  A.images = e, A.metadata = n, A.video = t;
  const o = await Qd(A);
  return y0(o);
}
function xd(i, n) {
  const t = ja(i.faceSize, rg);
  return ja(n.faceSize, rg) < t;
}
function dd() {
  Un.warn(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║                       WARNING                      ║
║                                                    ║
║        MagnifEye Liveness component is             ║
║     DEPRECATED and will be discontinued in         ║
║               next major release.                  ║
║                                                    ║
║   Please migrate to Multi-Range Liveness instead.  ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`);
}
const ld = (i, n) => {
  const t = it(void 0), e = (o) => {
    if (!(!o.detail || i !== oe.RUNNING || n !== SA.CLOSEUP)) {
      if (!t.value) {
        t.value = o.detail;
        return;
      }
      xd(t.value.data.detection, o.detail.data.detection) && (t.value = o.detail);
    }
  };
  Xr(zA.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, ud = Lt.div`
  ${(i) => i.$isSecondStep && Ms`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, fd = ({
  assetsDirectoryPath: i,
  onComplete: n,
  sessionToken: t
}) => {
  const { analytics: e } = rI(), { appState: A, handleAppStateChange: o, handleError: r, magnifEyePhase: a, setIsCameraReady: g, setMagnifEyePhase: I } = Ys(), { cameraProperties: C, mergeCameraProperties: s } = sE(), { transactionCounting: B } = _r(), E = nE(A), { cameraService: x } = lI(), Q = it([]), { middleImageBestCandidate: l } = ld(A, a), f = AE(pt.ANIMATION_END);
  function h(O) {
    Q.value = [...Q.value, O];
  }
  function p(O) {
    I(O), cr(pt.STATUS_CHANGED, { phase: O });
  }
  function y(O) {
    h(O), p(SA.MIDDLE), o(oe.RUNNING);
  }
  function b() {
    p(SA.DISTANT), f.value = !1, Q.value = [], e?.reset();
  }
  AQ(() => {
    f.value && p(SA.CLOSEUP);
  }), dE({
    onFaceTrackingLost: () => {
      o(oe.WAITING), b(), E(() => o(oe.RUNNING));
    },
    skipOutsideOfCandidateSelection: a !== SA.CLOSEUP
  }), rE({
    onBlur: () => {
      g(!1), o(oe.LOADING), b();
    },
    onFocus: () => {
      g(!0), o(oe.RUNNING);
    }
  }), ZQ(pt.CONTROL, () => {
    b();
  });
  async function k(O) {
    if (l.value) {
      const $ = { image: await Xs(l.value.image), data: l.value.data };
      h($);
    }
    h(O), B?.trackLivenessTransaction();
    try {
      const X = {
        sessionToken: t,
        web: C.value
      }, $ = await Ed({
        images: Q.value,
        metadata: X,
        video: x?.videoRecorder?.getRecording()
      }), [yA] = Q.value;
      n(yA, $), e?.trackLivenessProcess(Q.value);
    } catch (X) {
      X instanceof Error && r(m.fromError(X));
      return;
    }
    o(oe.DONE);
  }
  const D = {
    [SA.DISTANT]: y,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [SA.MIDDLE]: () => {
    },
    [SA.CLOSEUP]: k
  }, U = pA(
    () => ({
      assetsDirectoryPath: i,
      magnifEyePhase: a,
      onComplete: D[a]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, a]
  );
  return /* @__PURE__ */ w(lE, { children: /* @__PURE__ */ w(ud, { $isSecondStep: a !== SA.DISTANT, children: /* @__PURE__ */ w(YQ, { configuration: U, children: /* @__PURE__ */ w(EE, { configurationThresholds: fE[a], children: /* @__PURE__ */ w(Bd, { onCompleteInternal: s }) }) }) }) });
};
function hd({ initAppState: i, onError: n }) {
  const [t, e] = z(i), [A, o] = z(), [r, a] = z(!1), [g, I] = z(!1), C = Xo.Lower, s = bA(n);
  J(() => {
    s.current = n;
  }, [n]);
  const B = {};
  return B.redfin = C, B.appState = t, B.setAppState = e, B.error = A, B.setError = o, B.isCameraReady = r, B.setIsCameraReady = a, B.onErrorRef = s, B.firstRunningDone = g, B.setFirstRunningDone = I, B;
}
function pd(i, n) {
  return n !== SA.DISTANT ? zt.HIDDEN : i !== oe.RUNNING ? zt.VISIBLE : zt.VISIBLE_WITH_MASK;
}
function yd({
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
    setFirstRunningDone: I,
    setIsCameraReady: C
  } = hd({
    initAppState: oe.LOADING,
    onError: i
  }), [s, B] = z(SA.DISTANT), E = pd(n, s), x = Ee(
    (l) => {
      cr(pt.STATUS_CHANGED, { state: oe.ERROR, error: l }), C(!1), r.current(l), g(l), a(oe.ERROR);
    },
    [C, r, g, a]
  ), Q = Ee(
    (l) => {
      a(l), cr(pt.STATUS_CHANGED, { state: l });
    },
    [a]
  );
  return {
    redfin: t,
    appState: n,
    magnifEyePhase: s,
    setMagnifEyePhase: B,
    freemiumOverlayState: E,
    isCameraReady: o,
    setIsCameraReady: C,
    handleAppStateChange: Q,
    handleError: x,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: I
  };
}
const _o = {};
_o.CAPTURE_FINISHED = "capture_finished", _o.CAPTURE_STARTED = "capture_started", _o.ESCALATION_TRIGGER = "escalation_trigger";
const ta = _o, Re = {};
Re.PALM = "palm_auto_capture", Re.SMILE = "smile_liveness", Re.DOCUMENT = "document_auto_capture", Re.MAGNIFEYE = "magnifeye_liveness", Re.EYE_GAZE = "eye_gaze_liveness", Re.FACE = "face_auto_capture", Re.MULTI_RANGE = "multirange_liveness";
const md = Re;
class wd {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = lB(), this.applicationId = Vs(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(ta.CAPTURE_STARTED));
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
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: nI() };
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
const pi = new wd();
class Dd {
  posthog = pi;
  component;
  redfinSignal;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { redfin: this.redfinSignal?.value, ...n };
  }
  init(n, t, e) {
    this.redfinSignal = e;
    const A = nx(), o = {};
    o.apiKey = n, o.component = this.component, o.customer = t, o.sessionId = A, pi.init(o);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    pi.sendEvent(ta.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -1 * -1231 + -104 + -877 * 1 ? sx(n) : Ve(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: ax(o || -830 * 1 + 3100 + -2270), firstHiccup: rx(gx(r)), optCheckDetails: e?.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class bd extends Dd {
  captureProcessAnalytics = [];
  trackCaptureProcess(n) {
    this.captureProcessAnalytics.push(n);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class kd extends bd {
  constructor() {
    super(md.MAGNIFEYE);
  }
  trackLivenessProcess(n) {
    if (!n.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = n, [o, r] = this.captureProcessAnalytics, a = Ix(o.averageFps + r?.averageFps) / (-9102 + 933 * 5 + 1 * 4439), g = o.captureProcessDurationInMs, I = r?.["captureProcessDurationInMs"], C = g + I, s = this.parsePerformanceCheckup(o.optCheck, o.performanceCheckup), B = this.createSegmentation({ faceSizeDistant: Ve(t.data.detection?.faceSize), faceSizeCloseup: Ve(A?.data.detection?.faceSize), faceSizeMiddle: Ve(e.data.detection?.faceSize), confidenceDistant: Ve(t.data.detection?.confidence), confidenceCloseup: Ve(A?.data.detection?.confidence), confidenceMiddle: Ve(e.data.detection?.confidence), imageResolution: t.data?.["imageResolution"]?.width + "x" + t.data?.["imageResolution"]?.height, averageFps: a, closeUpPhaseDurationMs: I, distantPhaseDurationMs: g, camera: ix(o?.deviceName, o?.facingMode), instructionSet: o.instructionSet, isSystemStable: o.isSystemStable, durationMs: C, ...s });
    this.posthog.sendEvent(ta.CAPTURE_FINISHED, B), this.reset();
  }
}
const Sd = new kd(), Gd = ({ configuration: i }) => i ? (dd(), /* @__PURE__ */ w(WC, { target: i.styleTarget, children: /* @__PURE__ */ w(
  NB,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Zr.getInstance(),
    children: /* @__PURE__ */ w(
      JB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: _e.MAGNIFEYE,
        children: /* @__PURE__ */ w(
          UB,
          {
            value: yd({
              onError: i.onError
            }),
            children: /* @__PURE__ */ w(oQ, { analytics: Sd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ w(YB, { children: /* @__PURE__ */ w(GQ, { cameraConfiguration: i.camera, children: /* @__PURE__ */ w(fd, { ...i }) }) }) })
          }
        )
      }
    )
  }
) })) : null;
j0(Gd, "x-dot-magnifeye-liveness", ["configuration"]);
