var So = Object.defineProperty;
var wo = (e, t, n) => t in e ? So(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var et = (e, t, n) => wo(e, typeof t != "symbol" ? t + "" : t, n);
var Ze, E, _r, fe, kn, hr, pr, mr, sn, zt, Ut, gr, Ge = {}, yr = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function q(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function cn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function L(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return Ue(e, a, r, o, null);
}
function Ue(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++_r, __i: -1, __u: 0 };
  return o == null && E.vnode != null && E.vnode(i), i;
}
function $o() {
  return { current: null };
}
function G(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function be(e, t) {
  if (t == null) return e.__ ? be(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? be(e) : null;
}
function vr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return vr(e);
  }
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && fe.push(e) && !_t.__r++ || kn != E.debounceRendering) && ((kn = E.debounceRendering) || hr)(_t);
}
function _t() {
  for (var e, t, n, r, o, i, a, s = 1; fe.length; ) fe.length > s && fe.sort(pr), e = fe.shift(), s = fe.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = q({}, r)).__v = r.__v + 1, E.vnode && E.vnode(n), ln(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? be(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, Sr(i, n, a), n.__e != o && vr(n)));
  _t.__r = 0;
}
function Cr(e, t, n, r, o, i, a, s, l, u, f) {
  var c, _, d, g, y, v, m = r && r.__k || yr, p = t.length;
  for (l = Oo(n, t, m, l, p), c = 0; c < p; c++) (d = n.__k[c]) != null && (_ = d.__i == -1 ? Ge : m[d.__i] || Ge, d.__i = c, v = ln(e, d, _, o, i, a, s, l, u, f), g = d.__e, d.ref && _.ref != d.ref && (_.ref && un(_.ref, null, d), f.push(d.ref, d.__c || g, d)), y == null && g != null && (y = g), 4 & d.__u || _.__k === d.__k ? l = Er(d, l, e) : typeof d.type == "function" && v !== void 0 ? l = v : g && (l = g.nextSibling), d.__u &= -7);
  return n.__e = y, l;
}
function Oo(e, t, n, r, o) {
  var i, a, s, l, u, f = n.length, c = f, _ = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (l = i + _, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Ue(null, a, null, null, null) : Ye(a) ? Ue(G, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? Ue(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, s = null, (u = a.__i = ko(a, n, l, c)) != -1 && (c--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > f ? _-- : o < f && _++), typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? _-- : u == l + 1 ? _++ : (u > l ? _-- : _++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < f; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = be(s)), br(s, s));
  return r;
}
function Er(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Er(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = be(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function ko(e, t, n, r) {
  var o, i, a = e.key, s = e.type, l = t[n];
  if (l === null && e.key == null || l && a == l.key && s == l.type && (2 & l.__u) == 0) return n;
  if (r > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && a == l.key && s == l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && a == l.key && s == l.type) return i;
      i++;
    }
  }
  return -1;
}
function Nn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || bo.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Nn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Nn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(mr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = sn, e.addEventListener(t, i ? Ut : zt, i)) : e.removeEventListener(t, i ? Ut : zt, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Tn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = sn++;
      else if (t.t < n.u) return;
      return n(E.event ? E.event(t) : t);
    }
  };
}
function ln(e, t, n, r, o, i, a, s, l, u) {
  var f, c, _, d, g, y, v, m, p, O, b, N, w, C, M, U, Ae, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = E.__b) && f(t);
  e: if (typeof B == "function") try {
    if (m = t.props, p = "prototype" in B && B.prototype.render, O = (f = B.contextType) && r[f.__c], b = f ? O ? O.props.value : f.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : (p ? t.__c = c = new B(m, b) : (t.__c = c = new V(m, b), c.constructor = B, c.render = To), O && O.sub(c), c.props = m, c.state || (c.state = {}), c.context = b, c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), p && c.__s == null && (c.__s = c.state), p && B.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, B.getDerivedStateFromProps(m, c.__s))), d = c.props, g = c.state, c.__v = t, _) p && B.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), p && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (p && B.getDerivedStateFromProps == null && m !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, b), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, b) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(le) {
          le && (le.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, b), p && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(d, g, y);
      });
    }
    if (c.context = b, c.props = m, c.__P = e, c.__e = !1, w = E.__r, C = 0, p) {
      for (c.state = c.__s, c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++) c.__h.push(c._sb[M]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++C < 25);
    c.state = c.__s, c.getChildContext != null && (r = q(q({}, r), c.getChildContext())), p && !_ && c.getSnapshotBeforeUpdate != null && (y = c.getSnapshotBeforeUpdate(d, g)), U = f, f != null && f.type === G && f.key == null && (U = wr(f.props.children)), s = Cr(e, Ye(U) ? U : [U], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), v && (c.__E = c.__ = null);
  } catch (le) {
    if (t.__v = null, l || i != null) if (le.then) {
      for (t.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else for (Ae = i.length; Ae--; ) cn(i[Ae]);
    else t.__e = n.__e, t.__k = n.__k;
    E.__e(le, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = No(n.__e, t, n, r, o, i, a, l, u);
  return (f = E.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function Sr(e, t, n) {
  for (var r = 0; r < n.length; r++) un(n[r], n[++r], n[++r]);
  E.__c && E.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      E.__e(i, o.__v);
    }
  });
}
function wr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(wr) : q({}, e);
}
function No(e, t, n, r, o, i, a, s, l) {
  var u, f, c, _, d, g, y, v = n.props, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((d = i[u]) && "setAttribute" in d == !!p && (p ? d.localName == p : d.nodeType == 3)) {
      e = d, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), s && (E.__m && E.__m(t, i), s = !1), i = null;
  }
  if (p == null) v === m || s && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), v = n.props || Ge, !s && i != null) for (v = {}, u = 0; u < e.attributes.length; u++) v[(d = e.attributes[u]).name] = d.value;
    for (u in v) if (d = v[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = d;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        tt(e, u, null, d, o);
      }
    }
    for (u in m) d = m[u], u == "children" ? _ = d : u == "dangerouslySetInnerHTML" ? f = d : u == "value" ? g = d : u == "checked" ? y = d : s && typeof d != "function" || v[u] === d || tt(e, u, d, v[u], o);
    if (f) s || c && (f.__html == c.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Cr(t.type == "template" ? e.content : e, Ye(_) ? _ : [_], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && be(n, 0), s, l), i != null) for (u = i.length; u--; ) cn(i[u]);
    s || (u = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || p == "progress" && !g || p == "option" && g != v[u]) && tt(e, u, g, v[u], o), u = "checked", y != null && y != e[u] && tt(e, u, y, v[u], o));
  }
  return e;
}
function un(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    E.__e(o, n);
  }
}
function br(e, t, n) {
  var r, o;
  if (E.unmount && E.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || un(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      E.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && br(r[o], t, n || typeof e.type != "function");
  n || cn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function To(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), E.__ && E.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], ln(t, e = (!r && n || t).__k = L(G, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), Sr(i, e, a);
}
function fn(e, t) {
  se(e, t, fn);
}
function dn(e, t, n) {
  var r, o, i, a, s = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), Ue(e.type, s, r || e.key, o || e.ref, null);
}
function $r(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(a) {
        a.__e = !0, Bt(a);
      });
    }, this.sub = function(i) {
      r.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), a && a.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + gr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = yr.slice, E = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, _r = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, V.prototype.render = G, fe = [], hr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _t.__r = 0, mr = /(PointerCapture)$|Capture$/i, sn = 0, zt = Tn(!1), Ut = Tn(!0), gr = 0;
function _n() {
  return (_n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Io = ["context", "children"];
function Ro(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++) o.indexOf(i = l[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, Io);
  return dn(t, n);
}
function xo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = L(Ro, _n({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[Or(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), f = l[a].slot;
      f ? i[f] = L(In, { name: f }, u) : o[a] = u;
    }
    var c = r ? L(In, null, o) : o;
    return L(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? fn : se)(this._vdom, this._root);
}
function Or(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ao(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Or(e)] = n, this._vdom = dn(this._vdom, r), se(this._vdom, this._root);
  }
}
function Po() {
  se(this._vdom = null, this._root);
}
function In(e, t) {
  var n = this;
  return L("slot", _n({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Lo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = xo, o.prototype.attributeChangedCallback = Ao, o.prototype.disconnectedCallback = Po, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Do = 0;
function h(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Do, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return E.vnode && E.vnode(u), u;
}
const Rn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, je = {
  DETECTION_CHANGED: "multi-range-auto-capture:detection-changed",
  CAMERA_PROPS_CHANGED: "multi-range-auto-capture:camera-props-changed",
  CONTROL: "multi-range-auto-capture:control",
  INSTRUCTION_CHANGED: "multi-range-auto-capture:instruction-changed",
  VIDEO_ELEMENT_SIZE: "multi-range-auto-capture:video-element-size",
  CHALLENGE_VALUE_CHANGED: "multi-range-auto-capture:challenge-value-changed",
  STATE_CHANGED: "multi-range-auto-capture:state-changed"
}, F = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING",
  COMPLETE: "COMPLETE"
}, xn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, D = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${xn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${xn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, ht = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_NOT_PRESENT: "face_not_present"
}, Ee = {
  ZERO: "ZERO",
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",
  FIVE: "FIVE"
};
var ce, I, xt, An, $e = 0, kr = [], R = E, Pn = R.__b, Ln = R.__r, Dn = R.diffed, Mn = R.__c, Fn = R.unmount, Hn = R.__;
function Ie(e, t) {
  R.__h && R.__h(I, e, $e || t), $e = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return $e = 1, hn(Ir, e);
}
function hn(e, t, n) {
  var r = Ie(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ir(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.__f)) {
    var o = function(s, l, u) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      })) return !i || i.call(this, s, l, u);
      var c = r.__c.props !== s;
      return f.forEach(function(_) {
        if (_.__N) {
          var d = _.__[0];
          _.__ = _.__N, _.__N = void 0, d !== _.__[0] && (c = !0);
        }
      }), i && i.call(this, s, l, u) || c;
    };
    I.__f = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, u), i = f;
      }
      a && a.call(this, s, l, u);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function K(e, t) {
  var n = Ie(ce++, 3);
  !R.__s && pn(n.__H, t) && (n.__ = e, n.u = t, I.__H.__h.push(n));
}
function Re(e, t) {
  var n = Ie(ce++, 4);
  !R.__s && pn(n.__H, t) && (n.__ = e, n.u = t, I.__h.push(n));
}
function qe(e) {
  return $e = 5, ne(function() {
    return { current: e };
  }, []);
}
function Nr(e, t, n) {
  $e = 6, Re(function() {
    if (typeof e == "function") {
      var r = e(t());
      return function() {
        e(null), r && typeof r == "function" && r();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = Ie(ce++, 7);
  return pn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ae(e, t) {
  return $e = 8, ne(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = I.context[e.__c], n = Ie(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function pt(e, t) {
  R.useDebugValue && R.useDebugValue(t ? t(e) : e);
}
function Tr() {
  var e = Ie(ce++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Mo() {
  for (var e; e = kr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], R.__e(t, e.__v);
  }
}
R.__b = function(e) {
  I = null, Pn && Pn(e);
}, R.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Hn && Hn(e, t);
}, R.__r = function(e) {
  Ln && Ln(e), ce = 0;
  var t = (I = e.__c).__H;
  t && (xt === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(Wt), t.__h = [], ce = 0)), xt = I;
}, R.diffed = function(e) {
  Dn && Dn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (kr.push(t) !== 1 && An === R.requestAnimationFrame || ((An = R.requestAnimationFrame) || Fo)(Mo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), xt = I = null;
}, R.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], R.__e(r, n.__v);
    }
  }), Mn && Mn(e, t);
}, R.unmount = function(e) {
  Fn && Fn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      at(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && R.__e(t, n.__v));
};
var zn = typeof requestAnimationFrame == "function";
function Fo(e) {
  var t, n = function() {
    clearTimeout(r), zn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  zn && (t = requestAnimationFrame(n));
}
function at(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function Wt(e) {
  var t = I;
  e.__c = e.__(), I = t;
}
function pn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, P.apply(this, arguments);
};
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ho(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uo = /* @__PURE__ */ Ho(
  function(e) {
    return zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Rr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function xr(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Re(function() {
    o.__ = n, o.u = t, At(o) && i({ t: o });
  }, [e, n, t]), K(function() {
    return At(o) && i({ t: o }), e(function() {
      At(o) && i({ t: o });
    });
  }, [e]), n;
}
function At(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Ar(e) {
  e();
}
function Pr(e) {
  return e;
}
function Lr() {
  return [!1, Ar];
}
var Dr = Re;
function jt(e, t) {
  this.props = e, this.context = t;
}
function Bo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(jt.prototype = new V()).isPureReactComponent = !0, jt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var Un = E.__b;
E.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Un && Un(e);
};
var Wo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Go(e) {
  function t(n) {
    var r = Rr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Wo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Bn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, jo = { map: Bn, forEach: Bn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, Vo = E.__e;
E.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Vo(e, t, n, r);
};
var Wn = E.unmount;
function Mr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Rr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Mr(r, t, n);
  })), e;
}
function Fr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Fr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function st() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Hr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Zo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r) throw r;
    if (!n) throw t;
    return L(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Fe() {
  this.i = null, this.l = null;
}
E.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Wn && Wn(e);
}, (st.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Hr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Fr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, st.prototype.componentWillUnmount = function() {
  this.o = [];
}, st.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Mr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(G, null, e.fallback);
  return o && (o.__u &= -33), [L(G, null, t.__a ? null : e.children), o];
};
var Gn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Yo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    se(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, appendChild: function(o) {
      this.childNodes.push(o), t.h.appendChild(o);
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  se(L(Yo, { context: t.context }, e.__v), t.v);
}
function Xo(e, t) {
  var n = L(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new V()).__a = function(e) {
  var t = this, n = Hr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Gn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Fe.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Gn(e, n, t);
  });
};
var zr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qo = /[A-Z0-9]/g, ei = typeof document < "u", ti = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ri(e, t, n) {
  return fn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var jn = E.event;
function oi() {
}
function ii() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
E.event = function(e) {
  return jn && (e = jn(e)), e.persist = oi, e.isPropagationStopped = ii, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var mn, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Vn = E.vnode;
E.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || ei && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : l === "translate" && s === "no" ? s = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ti(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : Jo.test(a) && (a = l) : l = a = "oninput" : i && Ko.test(a) ? a = a.replace(Qo, "-$&").toLowerCase() : s === null && (s = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = zr, Vn && Vn(e);
};
var Zn = E.__r;
E.__r = function(e) {
  Zn && Zn(e), mn = e.__c;
};
var Yn = E.diffed;
E.diffed = function(e) {
  Yn && Yn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), mn = null;
};
var ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return mn.__n[e.__c].props.value;
}, useCallback: ae, useContext: Xe, useDebugValue: pt, useDeferredValue: Pr, useEffect: K, useId: Tr, useImperativeHandle: Nr, useInsertionEffect: Dr, useLayoutEffect: Re, useMemo: ne, useReducer: hn, useRef: qe, useState: H, useSyncExternalStore: xr, useTransition: Lr } } };
function li(e) {
  return L.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === zr;
}
function ui(e) {
  return Ct(e) && e.type === G;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function di(e) {
  return Ct(e) ? dn.apply(null, arguments) : e;
}
function _i(e) {
  return !!e.__k && (se(null, e), !0);
}
function hi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pi = function(e, t) {
  return e(t);
}, mi = function(e, t) {
  return e(t);
}, gi = G, yi = Ct, re = { useState: H, useId: Tr, useReducer: hn, useEffect: K, useLayoutEffect: Re, useInsertionEffect: Dr, useTransition: Lr, useDeferredValue: Pr, useSyncExternalStore: xr, startTransition: Ar, useRef: qe, useImperativeHandle: Nr, useMemo: ne, useCallback: ae, useContext: Xe, useDebugValue: pt, version: "18.3.1", Children: jo, render: ni, hydrate: ri, unmountComponentAtNode: _i, createPortal: Xo, createElement: L, createContext: $r, createFactory: li, cloneElement: di, createRef: $o, Fragment: G, isValidElement: Ct, isElement: yi, isFragment: ui, isMemo: fi, findDOMNode: hi, Component: V, PureComponent: jt, memo: Bo, forwardRef: Go, flushSync: mi, unstable_batchedUpdates: pi, StrictMode: gi, Suspense: st, SuspenseList: Fe, lazy: Zo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ci };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt, qn;
function Ci() {
  return qn || (qn = 1, Pt = function(t, n, r, o) {
    var i = r ? r.call(o, t, n) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === n)
      return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
      return !1;
    var a = Object.keys(t), s = Object.keys(n);
    if (a.length !== s.length)
      return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < a.length; u++) {
      var f = a[u];
      if (!l(f))
        return !1;
      var c = t[f], _ = n[f];
      if (i = r ? r.call(o, c, _, f) : void 0, i === !1 || i === void 0 && c !== _)
        return !1;
    }
    return !0;
  }), Pt;
}
var Ei = Ci();
const Si = /* @__PURE__ */ vi(Ei);
var T = "-ms-", Be = "-moz-", k = "-webkit-", Ur = "comm", Et = "rule", gn = "decl", wi = "@import", Br = "@keyframes", bi = "@layer", Wr = Math.abs, yn = String.fromCharCode, Vt = Object.assign;
function $i(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Gr(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, n) {
  return e.replace(t, n);
}
function ct(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oe(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function jr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function Oi(e, t) {
  return e.map(t).join("");
}
function Xn(e, t) {
  return e.filter(function(n) {
    return !Q(n, t);
  });
}
var St = 1, ke = 1, Vr = 0, j = 0, x = 0, xe = "";
function wt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: St, column: ke, length: a, return: "", siblings: s };
}
function ie(e, t) {
  return Vt(wt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  He(e, e.siblings);
}
function ki() {
  return x;
}
function Ni() {
  return x = j > 0 ? A(xe, --j) : 0, ke--, x === 10 && (ke = 1, St--), x;
}
function Z() {
  return x = j < Vr ? A(xe, j++) : 0, ke++, x === 10 && (ke = 1, St++), x;
}
function he() {
  return A(xe, j);
}
function lt() {
  return j;
}
function bt(e, t) {
  return Oe(xe, e, t);
}
function Zt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ti(e) {
  return St = ke = 1, Vr = Y(xe = e), j = 0, [];
}
function Ii(e) {
  return xe = "", e;
}
function Lt(e) {
  return Gr(bt(j - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ri(e) {
  for (; (x = he()) && x < 33; )
    Z();
  return Zt(e) > 2 || Zt(x) > 3 ? "" : " ";
}
function xi(e, t) {
  for (; --t && Z() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return bt(e, lt() + (t < 6 && he() == 32 && Z() == 32));
}
function Yt(e) {
  for (; Z(); )
    switch (x) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(x);
        break;
      // (
      case 40:
        e === 41 && Yt(e);
        break;
      // \
      case 92:
        Z();
        break;
    }
  return j;
}
function Ai(e, t) {
  for (; Z() && e + x !== 57; )
    if (e + x === 84 && he() === 47)
      break;
  return "/*" + bt(t, j - 1) + "*" + yn(e === 47 ? e : Z());
}
function Pi(e) {
  for (; !Zt(he()); )
    Z();
  return bt(e, j);
}
function Li(e) {
  return Ii(ut("", null, null, null, [""], e = Ti(e), 0, [0], e));
}
function ut(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, _ = 0, d = 0, g = 0, y = 1, v = 1, m = 1, p = 0, O = "", b = o, N = i, w = r, C = O; v; )
    switch (g = p, p = Z()) {
      // (
      case 40:
        if (g != 108 && A(C, c - 1) == 58) {
          ct(C += S(Lt(p), "&", "&\f"), "&\f", Wr(u ? s[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Lt(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ri(g);
        break;
      // \
      case 92:
        C += xi(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (he()) {
          case 42:
          case 47:
            He(Di(Ai(Z(), lt()), t, n, l), l);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * y:
        s[u++] = Y(C) * m;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + f:
            m == -1 && (C = S(C, /\f/g, "")), d > 0 && Y(C) - c && He(d > 32 ? Jn(C + ";", r, n, c - 1, l) : Jn(S(C, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (He(w = Kn(C, t, n, u, f, o, s, O, b = [], N = [], c, i), i), p === 123)
              if (f === 0)
                ut(C, t, w, w, b, i, c, s, N);
              else
                switch (_ === 99 && A(C, 3) === 110 ? 100 : _) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, w, w, r && He(Kn(e, w, w, 0, 0, o, s, O, o, b = [], c, N), N), o, N, c, s, r ? b : N);
                    break;
                  default:
                    ut(C, w, w, w, [""], N, 0, s, N);
                }
        }
        u = f = d = 0, y = m = 1, O = C = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Y(C), d = g;
      default:
        if (y < 1) {
          if (p == 123)
            --y;
          else if (p == 125 && y++ == 0 && Ni() == 125)
            continue;
        }
        switch (C += yn(p), p * y) {
          // &
          case 38:
            m = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (Y(C) - 1) * m, m = 1;
            break;
          // @
          case 64:
            he() === 45 && (C += Lt(Z())), _ = he(), f = c = Y(O = C += Pi(lt())), p++;
            break;
          // -
          case 45:
            g === 45 && Y(C) == 2 && (y = 0);
        }
    }
  return i;
}
function Kn(e, t, n, r, o, i, a, s, l, u, f, c) {
  for (var _ = o - 1, d = o === 0 ? i : [""], g = jr(d), y = 0, v = 0, m = 0; y < r; ++y)
    for (var p = 0, O = Oe(e, _ + 1, _ = Wr(v = a[y])), b = e; p < g; ++p)
      (b = Gr(v > 0 ? d[p] + " " + O : S(O, /&\f/g, d[p]))) && (l[m++] = b);
  return wt(e, t, n, o === 0 ? Et : s, l, u, f, c);
}
function Di(e, t, n, r) {
  return wt(e, t, n, Ur, yn(ki()), Oe(e, 2, -2), 0, r);
}
function Jn(e, t, n, r, o) {
  return wt(e, t, n, gn, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Zr(e, t, n) {
  switch ($i(e, t)) {
    // color-adjust
    case 5103:
      return k + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    // tab-size
    case 4789:
      return Be + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Be + e + T + e + e;
    // writing-mode
    case 5936:
      switch (A(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + T + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + T + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + T + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return k + e + T + e + e;
    // order
    case 6165:
      return k + e + T + "flex-" + e + e;
    // align-items
    case 5187:
      return k + e + S(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + T + "flex-item-" + S(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : T + "grid-row-" + S(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + T + "flex-line-pack" + S(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + T + S(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + T + S(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + S(e, "-grow", "") + k + e + T + S(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + S(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return S(S(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!Q(e, /flex-|baseline/)) return T + "grid-column-align" + Oe(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + S(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Q(r.props, /grid-\w+-end/);
      }) ? ~ct(e + (n = n[t].value), "span", 0) ? e : T + S(e, "-start", "") + e + T + "grid-row-span:" + (~ct(n, "span", 0) ? Q(n, /\d+/) : +Q(n, /\d+/) - +Q(e, /\d+/)) + ";" : T + S(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Q(r.props, /grid-\w+-start/);
      }) ? e : T + S(S(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return S(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Be + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ct(e, "stretch", 0) ? Zr(S(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return S(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (A(e, t + 6) === 121)
        return S(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return S(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + T + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return S(e, ":", ":" + T) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function mt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Mi(e, t, n, r) {
  switch (e.type) {
    case bi:
      if (e.children.length) break;
    case wi:
    case gn:
      return e.return = e.return || e.value;
    case Ur:
      return "";
    case Br:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case Et:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fi(e) {
  var t = jr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Hi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function zi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case gn:
        e.return = Zr(e.value, e.length, n);
        return;
      case Br:
        return mt([ie(e, { value: S(e.value, "@", "@" + k) })], r);
      case Et:
        if (e.length)
          return Oi(n = e.props, function(o) {
            switch (Q(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Se(ie(e, { props: [S(o, /:(read-\w+)/, ":" + Be + "$1")] })), Se(ie(e, { props: [o] })), Vt(e, { props: Xn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Se(ie(e, { props: [S(o, /:(plac\w+)/, ":" + k + "input-$1")] })), Se(ie(e, { props: [S(o, /:(plac\w+)/, ":" + Be + "$1")] })), Se(ie(e, { props: [S(o, /:(plac\w+)/, T + "input-$1")] })), Se(ie(e, { props: [o] })), Vt(e, { props: Xn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Ui = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, $ = {}, ge = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Yr = "active", qr = "data-styled-version", $t = "6.1.18", vn = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", Bi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Qn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Wi = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
        Qn.test(a) ? (i = !1, nt.delete(r)) : o.apply(void 0, me([a], s, !1));
      }, qe(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (a) {
      Qn.test(a.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Ot = Object.freeze([]), Ne = Object.freeze({});
function Gi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ji = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function er(e) {
  return e.replace(ji, "-").replace(Vi, "");
}
var Zi = /(a)(d)/gi, rt = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = tr(t % rt) + n;
  return (tr(t % rt) + n).replace(Zi, "$1-$2");
}
var Dt, Xr = 5381, de = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Kr = function(e) {
  return de(Xr, e);
};
function Jr(e) {
  return Xt(Kr(e) >>> 0);
}
function Qr(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var eo = typeof Symbol == "function" && Symbol.for, to = eo ? Symbol.for("react.memo") : 60115, Yi = eo ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, no = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ki = ((Dt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Dt[to] = no, Dt);
function nr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === to ? no : "$$typeof" in e ? Ki[e.$$typeof] : qi;
  var t;
}
var Ji = Object.defineProperty, Qi = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, ea = Object.getOwnPropertyDescriptor, ta = Object.getPrototypeOf, or = Object.prototype;
function ro(e, t, n) {
  if (typeof t != "string") {
    if (or) {
      var r = ta(t);
      r && r !== or && ro(e, r, n);
    }
    var o = Qi(t);
    rr && (o = o.concat(rr(t)));
    for (var i = nr(e), a = nr(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Xi || n && n[l] || a && l in a || i && l in i)) {
        var u = ea(t, l);
        try {
          Ji(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function ye(e) {
  return typeof e == "function";
}
function Cn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function _e(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Kt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Jt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Jt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Jt(e[r], t[r]);
  return e;
}
function En(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var na = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ra() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function X(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ra.apply(void 0, me([na[e]], t, !1)).trim());
}
var oa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw X(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), l = (a = 0, n.length); a < l; a++) this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(vn);
    return n;
  }, e;
}(), ia = 1 << 30, ft = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), dt = 1, ot = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; yt.has(dt); ) dt++;
  var t = dt++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > ia)) throw X(16, "".concat(t));
  return ft.set(e, t), yt.set(t, e), t;
}, aa = function(e, t) {
  dt = t + 1, ft.set(e, t), yt.set(t, e);
}, sa = "style[".concat(ge, "][").concat(qr, '="').concat($t, '"]'), ca = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), la = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ua = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(vn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(ca);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (aa(f, u), la(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, ir = function(e) {
  for (var t = document.querySelectorAll(sa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ge) !== Yr && (ua(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var oo = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ge, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Yr), r.setAttribute(qr, $t);
  var a = fa();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, da = function() {
  function e(t) {
    this.element = oo(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw X(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), _a = function() {
  function e(t) {
    this.element = oo(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ha = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ar = gt, pa = { isServer: !gt, useCSSOMInjection: !Bi }, io = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, pa), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gt && ar && (ar = !1, ir(this)), En(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var _ = function(m) {
            return yt.get(m);
          }(c);
          if (_ === void 0) return "continue";
          var d = i.names.get(_), g = a.getGroup(c);
          if (d === void 0 || !d.size || g.length === 0) return "continue";
          var y = "".concat(ge, ".g").concat(c, '[id="').concat(_, '"]'), v = "";
          d !== void 0 && d.forEach(function(m) {
            m.length > 0 && (v += "".concat(m, ","));
          }), l += "".concat(g).concat(y, '{content:"').concat(v, '"}').concat(vn);
        }, f = 0; f < s; f++) u(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && ir(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new ha(o) : r ? new da(o) : new _a(o);
    }(this.options), new oa(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (ot(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(ot(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ot(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ma = /&/g, ga = /^\s*\/\/.*$/gm;
function ao(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = ao(n.children, t)), n;
  });
}
function so(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, l = s === void 0 ? Ot : s, u = function(_, d, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === Et && _.value.includes("&") && (_.props[0] = _.props[0].replace(ma, n).replace(r, u));
  }), a.prefix && f.push(zi), f.push(Mi);
  var c = function(_, d, g, y) {
    d === void 0 && (d = ""), g === void 0 && (g = ""), y === void 0 && (y = "&"), t = y, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var v = _.replace(ga, ""), m = Li(g || d ? "".concat(g, " ").concat(d, " { ").concat(v, " }") : v);
    a.namespace && (m = ao(m, a.namespace));
    var p = [];
    return mt(m, Fi(f.concat(Hi(function(O) {
      return p.push(O);
    })))), p;
  };
  return c.hash = l.length ? l.reduce(function(_, d) {
    return d.name || X(15), de(_, d.name);
  }, Xr).toString() : "", c;
}
var ya = new io(), Qt = so(), Sn = re.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: Qt });
Sn.Consumer;
var va = re.createContext(void 0);
function en() {
  return Xe(Sn);
}
function Ca(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = en().styleSheet, i = ne(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = ne(function() {
    return so({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  K(function() {
    Si(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = ne(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(Sn.Provider, { value: s }, re.createElement(va.Provider, { value: a }, e.children));
}
var tn = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, En(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), Ea = function(e) {
  return e >= "A" && e <= "Z";
};
function sr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ea(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var co = function(e) {
  return e == null || e === !1 || e === "";
}, lo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !co(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(sr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, me(me(["".concat(o, " {")], lo(i), !1), ["}"], !1)) : r.push("".concat(sr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Ui || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (co(e)) return [];
  if (Cn(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tn || Te(o) || o === null || console.error("".concat(Qr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof tn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? lo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ot, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function Sa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !Cn(n)) return !1;
  }
  return !0;
}
var wa = Kr($t), ba = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Sa(t), this.componentId = n, this.baseHash = de(wa, n), this.baseStyle = r, io.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = _e(o, this.staticRulesId);
    else {
      var i = Kt(pe(this.rules, t, n, r)), a = Xt(de(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = _e(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = de(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string") u += c, $.NODE_ENV !== "production" && (l = de(l, c));
        else if (c) {
          var _ = Kt(pe(c, t, n, r));
          l = de(l, _ + f), u += _;
        }
      }
      if (u) {
        var d = Xt(l >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(u, ".".concat(d), void 0, this.componentId)), o = _e(o, d);
      }
    }
    return o;
  }, e;
}(), Ve = re.createContext(void 0);
Ve.Consumer;
function uo() {
  var e = Xe(Ve);
  if (!e) throw X(18);
  return e;
}
function $a(e) {
  var t = re.useContext(Ve), n = ne(function() {
    return function(r, o) {
      if (!r) throw X(14);
      if (ye(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Ft = {}, cr = /* @__PURE__ */ new Set();
function Oa(e, t, n) {
  var r = Cn(e), o = e, i = !Mt(e), a = t.attrs, s = a === void 0 ? Ot : a, l = t.componentId, u = l === void 0 ? function(b, N) {
    var w = typeof b != "string" ? "sc" : er(b);
    Ft[w] = (Ft[w] || 0) + 1;
    var C = "".concat(w, "-").concat(Jr($t + w + Ft[w]));
    return N ? "".concat(N, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? function(b) {
    return Mt(b) ? "styled.".concat(b) : "Styled(".concat(Qr(b), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || u, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var v = t.shouldForwardProp;
      g = function(b, N) {
        return y(b, N) && v(b, N);
      };
    } else g = y;
  }
  var m = new ba(n, _, r ? o.componentStyle : void 0);
  function p(b, N) {
    return function(w, C, M) {
      var U = w.attrs, Ae = w.componentStyle, B = w.defaultProps, le = w.foldedComponentIds, $n = w.styledComponentId, vo = w.target, Co = re.useContext(Ve), Eo = en(), Nt = w.shouldForwardProp || Eo.shouldForwardProp;
      $.NODE_ENV !== "production" && pt($n);
      var On = Gi(C, Co, B) || Ne, J = function(Ke, De, Je) {
        for (var Ce, ue = P(P({}, De), { className: void 0, theme: Je }), Rt = 0; Rt < Ke.length; Rt += 1) {
          var Qe = ye(Ce = Ke[Rt]) ? Ce(ue) : Ce;
          for (var oe in Qe) ue[oe] = oe === "className" ? _e(ue[oe], Qe[oe]) : oe === "style" ? P(P({}, ue[oe]), Qe[oe]) : Qe[oe];
        }
        return De.className && (ue.className = _e(ue.className, De.className)), ue;
      }(U, C, On), Pe = J.as || vo, Le = {};
      for (var W in J) J[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && J.theme === On || (W === "forwardedAs" ? Le.as = J.forwardedAs : Nt && !Nt(W, Pe) || (Le[W] = J[W], Nt || $.NODE_ENV !== "development" || Uo(W) || cr.has(W) || !qt.has(Pe) || (cr.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Tt = function(Ke, De) {
        var Je = en(), Ce = Ke.generateAndInjectStyles(De, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && pt(Ce), Ce;
      }(Ae, J);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Tt);
      var It = _e(le, $n);
      return Tt && (It += " " + Tt), J.className && (It += " " + J.className), Le[Mt(Pe) && !qt.has(Pe) ? "class" : "className"] = It, M && (Le.ref = M), L(Pe, Le);
    }(O, b, N);
  }
  p.displayName = c;
  var O = re.forwardRef(p);
  return O.attrs = d, O.componentStyle = m, O.displayName = c, O.shouldForwardProp = g, O.foldedComponentIds = r ? _e(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = _, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(N) {
      for (var w = [], C = 1; C < arguments.length; C++) w[C - 1] = arguments[C];
      for (var M = 0, U = w; M < U.length; M++) Jt(N, U[M], !0);
      return N;
    }({}, o.defaultProps, b) : b;
  } }), $.NODE_ENV !== "production" && (Wi(c, _), O.warnTooManyClasses = /* @__PURE__ */ function(b, N) {
    var w = {}, C = !1;
    return function(M) {
      if (!C && (w[M] = !0, Object.keys(w).length >= 200)) {
        var U = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, w = {};
      }
    };
  }(c, _)), En(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && ro(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function lr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ur = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function wn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || Te(e)) return ur(pe(lr(Ot, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : ur(pe(lr(r, t)));
}
function nn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, wn.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return nn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return nn(e, t, P(P({}, n), o));
  }, r;
}
var fo = function(e) {
  return nn(Oa, e);
}, z = fo;
qt.forEach(function(e) {
  z[e] = fo(e);
});
function kt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Kt(wn.apply(void 0, me([e], t, !1))), o = Jr(r);
  return new tn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ge, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const _o = {
  CIRCLE_SOLID: "circle-solid"
}, ka = 2, ho = 14, Na = 0.0276;
var ee = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ee || {});
const ze = {
  300: {
    iconSize: 40,
    marginLeft: 12,
    buttonPadding: 4
  },
  400: {
    iconSize: 45,
    marginLeft: 12,
    buttonPadding: 8
  },
  500: {
    iconSize: 52,
    marginLeft: 12,
    buttonPadding: 12
  },
  600: {
    iconSize: 52,
    marginLeft: 12,
    buttonPadding: 24
  }
}, Ht = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Ta = {
  [D.CANDIDATE_SELECTION]: "Stay still…",
  [D.FACE_TOO_CLOSE]: "Move back",
  [D.FACE_TOO_FAR]: "Move closer",
  [D.FACE_CENTERING]: "Center your face",
  [D.FACE_NOT_PRESENT]: "Position your face into the circle",
  [D.SHARPNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [D.DEVICE_PITCHED]: "Hold your phone at eye level",
  [D.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [D.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [D.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Ia = _o.CIRCLE_SOLID, Ra = {
  ...Ta
}, xa = {
  [ht.FACE_TOO_CLOSE]: "Move your face back",
  [ht.FACE_TOO_FAR]: "Move your face closer"
}, Aa = "rgba(19, 19, 19, 0.5)", Pa = 34;
function fr(e, t) {
  return Math.max(t, t + (e - 400) * Na + 2);
}
const La = (e, t = ho) => e ? e.width < e.height ? fr(e.width, t) : fr(e.height, t) : t, Da = (e) => e > ee.Default ? ze[ee.Default] : e > ee.L ? ze[ee.L] : e > ee.M ? ze[ee.M] : ze[ee.S], Ma = (e) => e ? Da(e.width) : ze[ee.Default];
function Fa() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ha({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
const We = $r(void 0);
We.displayName = "UiCustomizationContext";
function ve() {
  const e = Xe(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function za({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = uo(), o = ne(
    () => ({ ...t, videoElementSize: n, fontSize: La(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ h(We.Provider, { value: o, children: e });
}
const po = ({ svgSize: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ h(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ua = z.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: ${(e) => e.$position};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  ${(e) => !e.$isCameraReady && `
    height: inherit;
    aspect-ratio: 16/9;

    @media (orientation: portrait) and (max-width: 1199px) {
      aspect-ratio: 9/16;
    }
  `}
`, Ba = z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Wa = z.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, rn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = ve();
  return /* @__PURE__ */ h(Ua, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ h(Ba, { children: [
    e ? /* @__PURE__ */ h(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ h(Wa, { $fontSize: o, children: r })
  ] }) });
}, mo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ h(rn, { Icon: po, position: "relative", text: e });
class Ga extends V {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, n) {
    console.error(t, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ h(mo, { Icon: po, isCameraReady: !1 }) : this.props.children;
  }
}
const ja = z.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Va = ({ children: e, uiProps: t, videoElementSize: n }) => (K(() => {
  Fa();
}, []), /* @__PURE__ */ h(Ca, { target: t.styleTarget, children: /* @__PURE__ */ h($a, { theme: t.theme, children: /* @__PURE__ */ h(ja, { children: /* @__PURE__ */ h(Ga, { videoElementSize: n, children: /* @__PURE__ */ h(za, { props: t, videoElementSize: n, children: e }) }) }) }) })), Za = 0.75, Ya = 2, qa = "dot-auto-capture-video", we = (e, t) => {
  const n = qe(t);
  K(() => {
    n.current = t;
  }, [t]), K(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
};
function Xa(e) {
  const [t, n] = H(), r = ae(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return we(e, r), Re(() => {
    if (!t) {
      const o = document.getElementById(qa);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Ka(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Ja = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Qa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: ho
}, Me = {
  colors: Ja,
  font: Qa
}, es = (e) => {
  var t;
  return e ? {
    ...Me,
    ...e,
    colors: {
      ...Me.colors,
      ...e.colors
    },
    font: {
      ...Me.font,
      ...e.font,
      family: Ka((t = e.font) == null ? void 0 : t.family, Me.font.family)
    }
  } : Me;
}, ts = (e) => Number.parseFloat(e.toFixed(3)), bn = (e, t) => Math.min(e, t), ns = ({ height: e, width: t }, n) => {
  const r = bn(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, rs = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = ns(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function os(e, t) {
  const n = bn(t.width, t.height);
  return ts(e * n);
}
function is(e) {
  return rs(e, Za);
}
function as(e, t) {
  return os(e, t) * Ya;
}
const on = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, vt = class vt {
  constructor() {
    et(this, "lastDetails");
    et(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 0;
  }
  // TODO remove singleton
  static getInstance() {
    return this._instance || (this._instance = new vt()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  /**
   * If the detail object has changed, save the new detail object and return true. Otherwise, return
   * false
   * @param {string} eventName - The name of the event.
   * @param detail - This is the data that is passed to the event.
   * @returns a boolean value.
   */
  isDetailChanged(t, n) {
    return JSON.stringify(n) !== JSON.stringify(this.lastDetails[t]) ? (this.lastDetails[t] = n, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(t, n) {
    this.isDetailChanged(t, n) && on(t, n);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(t, n, r) {
    const o = performance.now();
    o - this.delayedTime > r && (this.dispatchCustomEventOnChange(t, n), this.delayedTime = o);
  }
  // implement this method in the class
  dispatchCustomEvent(t, n) {
    on(t, n);
  }
};
// TODO remove singleton
et(vt, "_instance");
let an = vt;
an.getInstance();
const dr = (e, t) => {
  on(e, {
    instruction: t
  });
};
async function ss() {
  return navigator.mediaDevices.enumerateDevices();
}
async function cs() {
  return (await ss()).filter((t) => t.kind === "videoinput");
}
const ls = () => {
  const [e, t] = H(!1);
  return K(() => {
    (async () => {
      (await cs()).length > 1 && t(!0);
    })();
  }, []), e;
}, us = ({ size: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ h(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ h("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ h("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), fs = ({ size: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ h("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), go = z.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ds = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ h(go, { $marginLeft: e, ...n, children: /* @__PURE__ */ h(us, { size: t }) }), _s = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ h(go, { $marginLeft: e, ...n, children: /* @__PURE__ */ h(fs, { size: t }) }), hs = z.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ps = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = ve(), o = ls();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Ma(r);
  return /* @__PURE__ */ h(hs, { $padding: i, children: [
    o && /* @__PURE__ */ h(_s, { disabled: t, onClick: () => {
      dr(e, Rn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ h(
      ds,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          dr(e, Rn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, ms = "2.5s", gs = "0.3s", ys = "linear", vs = kt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
kt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
kt`
  5% {
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 1;
  }
  10% {
    transform: translate(-50%, -50%) scale(0.6);
  }
  40% {
    transform: translate(-50%, -50%) scale(0.6);
  }
  70% {
    transform: translate(-50%, -50%) scale(0.85);
    opacity: 1;
  }
  90% {
    transform: translate(-50%, -50%) scale(0.85);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.85);
    opacity: 0.5;
  }
`;
kt`
  5% {
    opacity: 1;
  }
  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const Cs = z.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && wn`
      animation: ${vs} ${gs}
        ${ys} both;
      animation-delay: ${ms};

      @media (orientation: landscape) {
        bottom: ${e.$cssBottom ? e.$cssBottom - 15 : ""}%;
      }

      @media (max-width: 1024px) and (orientation: landscape) {
        bottom: ${e.$cssBottom ? e.$cssBottom - 13 : ""}%;
      }

      @media (max-width: 768px) {
        bottom: ${e.$cssBottom ? e.$cssBottom + 3 : ""}%;
      }

      @media (max-width: 480px) and (orientation: portrait) {
        bottom: ${e.$cssBottom ? e.$cssBottom - 10 : ""}%;
      }
    `};

  transform: translateX(-50%)
    translateY(
      ${(e) => e.$cssTop || e.$isPortrait ? "-50%" : e.$isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, Es = z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  background: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.instructionColorSuccess}` : `${e.theme.colors.instructionColor}`};
  color: ${(e) => e.theme.colors.instructionTextColor};
  border: 0;
  line-height: 1em;
  font-size: ${(e) => `${e.$fontSize}px`};
  white-space: ${(e) => e.$wrap ? "break-spaces" : "nowrap"};
`, Ss = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = ve();
  return /* @__PURE__ */ h(Cs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ h(
    Es,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Pa,
      children: e
    }
  ) });
}, ws = z.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, bs = ({ svgSize: e }) => /* @__PURE__ */ h(ws, { children: /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ h(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), $s = z.div`
  z-index: 1;
  position: absolute;
  // Scale up the backdrop to have space when placeholder is scaled below 1
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  outline: ${({ $backdropColor: e, $shorterSide: t = 1e3 }) => `${t * 0.2}px solid ${e}`};
  transform: scale(${(e) => e.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // Scale the children to 50% of the size of the backdrop to achieve 1:1 ratio between placeholder and backdrop
  g {
    transform: scale(0.5);
    translate: 25% 25%;
  }
`, yo = ({ children: e, height: t, scale: n, width: r }) => {
  const { backdropColor: o } = ve(), i = bn(r, t);
  return /* @__PURE__ */ h($s, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ h("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ h("defs", { children: /* @__PURE__ */ h("mask", { id: "mask", children: [
      /* @__PURE__ */ h("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ h("g", { children: e })
    ] }) }),
    /* @__PURE__ */ h("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Os({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = ve(), i = r === F.ERROR || r === F.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === F.WAITING || r === F.COMPLETE ? /* @__PURE__ */ h(G, { children: [
    n && e && t && /* @__PURE__ */ h(yo, { height: e, width: t }),
    /* @__PURE__ */ h(rn, { isCameraReady: !0, text: o[F.WAITING].text })
  ] }) : /* @__PURE__ */ h(rn, { Icon: bs, isCameraReady: !0, text: o[F.LOADING].text });
}
function ks({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const Ns = () => /* @__PURE__ */ h("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ h(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), Ts = z.div`
  z-index: 1;
  position: absolute;
  top: ${(e) => e.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$placeholderRectangle.shiftY - e.$placeholderRectangle.height) * 100}%;
  left: ${(e) => e.$placeholderRectangle.shiftX * 100}%;
  right: ${(e) => (1 - e.$placeholderRectangle.shiftX - e.$placeholderRectangle.width) * 100}%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};
  transform: scale(${(e) => e.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  svg {
    width: 100%;
    height: 100%;
  }
`, Is = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ h(
  Ts,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Rs = {
  [_o.CIRCLE_SOLID]: /* @__PURE__ */ h(Ns, {})
};
function xs({ backdropHeight: e, backdropWidth: t, placeholderRectangle: n, scale: r, ...o }) {
  const { placeholder: i } = ve();
  return /* @__PURE__ */ h(G, { children: [
    /* @__PURE__ */ h(yo, { height: e, scale: r, width: t, children: /* @__PURE__ */ h(
      ks,
      {
        height: `${n.height * 100}%`,
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ h(Is, { placeholderRectangle: n, scale: r, ...o, children: Rs[i] })
  ] });
}
const As = /* @__PURE__ */ new Map([
  [Ee.ZERO, { minFaceSizeRatio: 0.13, maxFaceSizeRatio: 0.15, scale: 0.85 }],
  [Ee.ONE, { minFaceSizeRatio: 0.152, maxFaceSizeRatio: 0.172, scale: 1 }],
  [Ee.TWO, { minFaceSizeRatio: 0.18, maxFaceSizeRatio: 0.205, scale: 1.18 }],
  [Ee.THREE, { minFaceSizeRatio: 0.215, maxFaceSizeRatio: 0.24, scale: 1.41 }],
  [Ee.FOUR, { minFaceSizeRatio: 0.245, maxFaceSizeRatio: 0.275, scale: 1.61 }],
  [Ee.FIVE, { minFaceSizeRatio: 0.28, maxFaceSizeRatio: 0.34, scale: 1.84 }]
]);
function Ps({
  customEvents: e,
  defaultInstructionCode: t
}) {
  const [n, r] = H(), [o, i] = H(!1), a = ae(
    (y) => {
      var m, p;
      r((m = y == null ? void 0 : y.detail) == null ? void 0 : m.cameraResolution);
      const v = (p = y == null ? void 0 : y.detail) == null ? void 0 : p.isMirroring;
      v !== void 0 && i(v);
    },
    [r]
  );
  we(e.CAMERA_PROPS_CHANGED, a);
  const [s, l] = H({
    code: t,
    isEscalated: !1
  }), u = ae(
    (y) => {
      var m, p;
      const v = y;
      l({
        code: (m = v == null ? void 0 : v.detail) == null ? void 0 : m.instructionCode,
        isEscalated: ((p = v == null ? void 0 : v.detail) == null ? void 0 : p.isEscalated) ?? !1
      });
    },
    [l]
  );
  we(e.INSTRUCTION_CHANGED, u);
  const [f, c] = H(F.LOADING), [_, d] = H(), g = ae(
    (y) => {
      var m, p;
      c((m = y.detail) == null ? void 0 : m.appState);
      const v = (p = y == null ? void 0 : y.detail) == null ? void 0 : p.error;
      v && d(v);
    },
    [c, d]
  );
  return we(e.STATE_CHANGED, g), {
    cameraResolution: n,
    instruction: s,
    isMirroring: o,
    appState: f,
    error: _
  };
}
function Ls() {
  const e = Ps({
    customEvents: je,
    defaultInstructionCode: ht.FACE_NOT_PRESENT
  }), [t, n] = H(1), r = ae((o) => {
    var s;
    const i = o, { currentMultiRangeLivenessChallengeItem: a } = i.detail;
    n(
      ((s = As.get(a)) == null ? void 0 : s.scale) ?? 1
    );
  }, []);
  return we(je.CHALLENGE_VALUE_CHANGED, r), K(() => {
    e.appState !== F.RUNNING && n(1);
  }, [e.appState]), {
    ...e,
    faceScale: t
  };
}
const Ds = z.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Ms(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
function Fs({ cameraResolution: e, isImageMirror: t }) {
  const n = qe(null), r = uo(), [o, i] = H(), a = ae(
    (s) => {
      var l, u, f;
      i((f = (u = (l = s == null ? void 0 : s.detail) == null ? void 0 : l.detectionDetails) == null ? void 0 : u.processedImage) == null ? void 0 : f.detection);
    },
    [i]
  );
  return we(je.DETECTION_CHANGED, a), K(() => {
    if (!n.current)
      return;
    const s = (l, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: f, faceSize: c } = u, _ = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!_)
        return;
      const d = as(c, l);
      _.beginPath(), _.arc(f.x, f.y, d, 0, 2 * Math.PI, !1), _.lineWidth = ka, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Ms(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ h(Ds, { ref: n, $isImageMirror: t });
}
function Hs() {
  const {
    appState: e,
    cameraResolution: t,
    error: n,
    faceScale: r,
    instruction: o,
    isMirroring: i
  } = Ls(), { escalatedInstructions: a, instructions: s, showDetectionLayer: l } = ve(), u = o.code === ht.CANDIDATE_SELECTION, f = Ha({
    escalatedInstructions: a,
    instructions: s,
    currentInstruction: {
      ...o,
      code: o.code
    }
  });
  if (e === F.ERROR)
    return /* @__PURE__ */ h(mo, { text: n == null ? void 0 : n.message });
  if (e === F.RUNNING && t) {
    const c = is(t);
    return /* @__PURE__ */ h(G, { children: [
      l && /* @__PURE__ */ h(Fs, { cameraResolution: t, isImageMirror: i }),
      /* @__PURE__ */ h(
        xs,
        {
          backdropHeight: t.height,
          backdropWidth: t.width,
          isInCandidateSelection: u,
          placeholderRectangle: c,
          scale: r
        }
      ),
      f && /* @__PURE__ */ h(
        Ss,
        {
          cssBottom: (c.height + c.shiftY) * 100,
          isInCandidateSelection: u,
          isPortrait: t.width < t.height,
          children: f
        }
      ),
      /* @__PURE__ */ h(
        ps,
        {
          customControlEvent: je.CONTROL,
          isSwitchCameraDisabled: u
        }
      )
    ] });
  }
  return /* @__PURE__ */ h(
    Os,
    {
      cameraHeight: t == null ? void 0 : t.height,
      cameraWidth: t == null ? void 0 : t.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function zs(e) {
  var u, f, c;
  const t = { ...Ra, ...e == null ? void 0 : e.instructions }, n = {
    ...xa,
    ...e == null ? void 0 : e.escalatedInstructions
  }, r = {
    [F.LOADING]: { ...Ht.loading, ...(u = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : u.loading },
    [F.WAITING]: { ...Ht.waiting, ...(f = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : f.waiting },
    [F.COMPLETE]: { ...Ht.waiting, ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.waiting }
  }, o = (e == null ? void 0 : e.placeholder) ?? Ia, i = (e == null ? void 0 : e.backdropColor) ?? Aa, a = (e == null ? void 0 : e.showDetectionLayer) ?? !1, s = (e == null ? void 0 : e.showCameraButtons) ?? !1, l = es(e == null ? void 0 : e.theme);
  return {
    instructions: t,
    appStateInstructions: r,
    placeholder: o,
    showDetectionLayer: a,
    showCameraButtons: s,
    theme: l,
    escalatedInstructions: n,
    backdropColor: i
  };
}
function Us({ props: e }) {
  const t = Xa(je.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ h(Va, { uiProps: zs(e), videoElementSize: t, children: /* @__PURE__ */ h(Hs, {}) });
}
Lo(Us, "x-dot-multi-range-liveness-ui", ["props"]);
