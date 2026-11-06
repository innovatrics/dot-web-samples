var Kt, g, ln, ct, br, un, dn, Oe, oe, Ut, fn, nr, Ue, We, hn, he = {}, _e = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xt = Array.isArray;
function tt(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function or(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function P(t, e, r) {
  var n, o, i, c = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? o = e[i] : c[i] = e[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? Kt.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) c[i] === void 0 && (c[i] = t.defaultProps[i]);
  return Wt(t, c, n, o, null);
}
function Wt(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ln, __i: -1, __u: 0 };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function So() {
  return { current: null };
}
function Z(t) {
  return t.children;
}
function X(t, e) {
  this.props = t, this.context = e;
}
function gt(t, e) {
  if (e == null) return t.__ ? gt(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? gt(t) : null;
}
function Vo(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], o = [], i = tt({}, e);
    i.__v = e.__v + 1, g.vnode && g.vnode(i), ir(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? gt(e), !!(32 & e.__u), o), i.__v = e.__v, i.__.__k[i.__i] = i, gn(n, i, o), e.__e = e.__ = null, i.__e != r && _n(i);
  }
}
function _n(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), _n(t);
}
function Fe(t) {
  (!t.__d && (t.__d = !0) && ct.push(t) && !pe.__r++ || br != g.debounceRendering) && ((br = g.debounceRendering) || un)(pe);
}
function pe() {
  try {
    for (var t, e = 1; ct.length; ) ct.length > e && ct.sort(dn), t = ct.shift(), e = ct.length, Vo(t);
  } finally {
    ct.length = pe.__r = 0;
  }
}
function pn(t, e, r, n, o, i, c, a, d, l, f) {
  var L, u, h, p, v, w, m = n && n.__k || _e, _ = e.length;
  for (d = $o(r, e, m, d, _), L = 0; L < _; L++) (h = r.__k[L]) != null && (u = h.__i != -1 && m[h.__i] || he, h.__i = L, w = ir(t, h, u, o, i, c, a, d, l, f), p = h.__e, h.ref && u.ref != h.ref && (u.ref && sr(u.ref, null, h), f.push(h.ref, h.__c || p, h)), v == null && p != null && (v = p), 4 & h.__u ? (d = Ln(h, d, t), u.__e && (u.__e = null)) : typeof h.type == "function" && w !== void 0 ? d = w : p && (d = p.nextSibling), h.__u &= -7);
  return r.__e = v, d;
}
function $o(t, e, r, n, o) {
  var i, c, a, d, l, f = r.length, L = f, u = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (c = e[i]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[i] = Wt(null, c, null, null, null) : Xt(c) ? c = t.__k[i] = Wt(Z, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[i] = Wt(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[i] = c, d = i + u, c.__ = t, c.__b = t.__b + 1, a = null, (l = c.__i = xo(c, r, d, L)) != -1 && (L--, (a = r[l]) && (a.__u |= 2)), a == null || a.__v == null ? (l == -1 && (o > f ? u-- : o < f && u++), typeof c.type != "function" && (c.__u |= 4)) : l != d && (l == d - 1 ? u-- : l == d + 1 ? u++ : (l > d ? u-- : u++, c.__u |= 4))) : t.__k[i] = null;
  if (L) for (i = 0; i < f; i++) (a = r[i]) != null && (2 & a.__u) == 0 && (a.__e == n && (n = gt(a)), yn(a, a));
  return n;
}
function Ln(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Ln(n[o], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = gt(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ot(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Xt(t) ? t.some(function(r) {
    ot(r, e);
  }) : e.push(t)), e;
}
function xo(t, e, r, n) {
  var o, i, c, a = t.key, d = t.type, l = e[r], f = l != null && (2 & l.__u) == 0;
  if (l === null && a == null || f && a == l.key && d == l.type) return r;
  if (n > (f ? 1 : 0)) {
    for (o = r - 1, i = r + 1; o >= 0 || i < e.length; ) if ((l = e[c = o >= 0 ? o-- : i++]) != null && (2 & l.__u) == 0 && a == l.key && d == l.type) return c;
  }
  return -1;
}
function Sr(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || bo.test(e) ? r : r + "px";
}
function ne(t, e, r, n, o) {
  var i, c;
  t: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || Sr(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || Sr(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(fn, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r[Ut] = n[Ut] : (r[Ut] = nr, t.addEventListener(e, i ? We : Ue, i)) : t.removeEventListener(e, i ? We : Ue, i);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break t;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function Vr(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e[oe] == null) e[oe] = nr++;
      else if (e[oe] < r[Ut]) return;
      return r(g.event ? g.event(e) : e);
    }
  };
}
function ir(t, e, r, n, o, i, c, a, d, l) {
  var f, L, u, h, p, v, w, m, _, $, N, V, E, C, b, z, D = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (d = !!(32 & r.__u), i = [a = e.__e = r.__e]), (f = g.__b) && f(e);
  t: if (typeof D == "function") {
    L = c.length;
    try {
      if (_ = e.props, $ = D.prototype && D.prototype.render, N = (f = D.contextType) && n[f.__c], V = f ? N ? N.props.value : f.__ : n, r.__c ? m = (u = e.__c = r.__c).__ = u.__E : ($ ? e.__c = u = new D(_, V) : (e.__c = u = new X(_, V), u.constructor = D, u.render = Eo), N && N.sub(u), u.state || (u.state = {}), u.__n = n, h = u.__d = !0, u.__h = [], u._sb = []), $ && u.__s == null && (u.__s = u.state), $ && D.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = tt({}, u.__s)), tt(u.__s, D.getDerivedStateFromProps(_, u.__s))), p = u.props, v = u.state, u.__v = e, h) $ && D.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), $ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if ($ && D.getDerivedStateFromProps == null && _ !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(_, V), e.__v == r.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(_, u.__s, V) === !1) {
          e.__v != r.__v && (u.props = _, u.state = u.__s, u.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(A) {
            A && (A.__ = e);
          }), _e.push.apply(u.__h, u._sb), u._sb = [], u.__h.length && c.push(u), a = gt(r);
          break t;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(_, u.__s, V), $ && u.componentDidUpdate != null && u.__h.push(function() {
          u.componentDidUpdate(p, v, w);
        });
      }
      if (u.context = V, u.props = _, u.__P = t, u.__e = !1, E = g.__r, C = 0, $) u.state = u.__s, u.__d = !1, E && E(e), f = u.render(u.props, u.state, u.context), _e.push.apply(u.__h, u._sb), u._sb = [];
      else do
        u.__d = !1, E && E(e), f = u.render(u.props, u.state, u.context), u.state = u.__s;
      while (u.__d && ++C < 25);
      u.state = u.__s, u.getChildContext != null && (n = tt(tt({}, n), u.getChildContext())), $ && !h && u.getSnapshotBeforeUpdate != null && (w = u.getSnapshotBeforeUpdate(p, v)), b = f != null && f.type === Z && f.key == null ? Cn(f.props.children) : f, a = pn(t, Xt(b) ? b : [b], e, r, n, o, i, c, a, d, l), u.base = e.__e, e.__u &= -161, u.__h.length && c.push(u), m && (u.__E = u.__ = null);
    } catch (A) {
      if (c.length = L, e.__v = null, d || i != null) {
        if (A.then) {
          for (e.__u |= d ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
          i != null && (i[i.indexOf(a)] = null), e.__e = a;
        } else if (i != null) for (z = i.length; z--; ) or(i[z]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), A.then || mn(e), g.__e(A, e, r);
    }
  } else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : a = e.__e = Mo(r.__e, e, r, n, o, i, c, d, l);
  return (f = g.diffed) && f(e), 128 & e.__u ? void 0 : a;
}
function mn(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(mn));
}
function gn(t, e, r) {
  for (var n = 0; n < r.length; n++) sr(r[n], r[++n], r[++n]);
  g.__c && g.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      g.__e(i, o.__v);
    }
  });
}
function Cn(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Xt(t) ? t.map(Cn) : t.constructor !== void 0 ? null : tt({}, t);
}
function Mo(t, e, r, n, o, i, c, a, d) {
  var l, f, L, u, h, p, v, w = r.props || he, m = e.props, _ = e.type;
  if (_ == "svg" ? o = "http://www.w3.org/2000/svg" : _ == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((h = i[l]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
      t = h, i[l] = null;
      break;
    }
  }
  if (t == null) {
    if (_ == null) return document.createTextNode(m);
    t = document.createElementNS(o, _, m.is && m), a && (g.__m && g.__m(e, i), a = !1), i = null;
  }
  if (_ == null) w === m || a && t.data == m || (t.data = m);
  else {
    if (i = _ == "textarea" && m.defaultValue != null ? null : i && Kt.call(t.childNodes), !a && i != null) for (w = {}, l = 0; l < t.attributes.length; l++) w[(h = t.attributes[l]).name] = h.value;
    for (l in w) h = w[l], l == "dangerouslySetInnerHTML" ? L = h : l == "children" || l in m || l == "value" && "defaultValue" in m || l == "checked" && "defaultChecked" in m || ne(t, l, null, h, o);
    for (l in m) h = m[l], l == "children" ? u = h : l == "dangerouslySetInnerHTML" ? f = h : l == "value" ? p = h : l == "checked" ? v = h : a && typeof h != "function" || w[l] === h || ne(t, l, h, w[l], o);
    if (f) a || L && (f.__html == L.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (L && (t.innerHTML = ""), pn(e.type == "template" ? t.content : t, Xt(u) ? u : [u], e, r, n, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, c, i ? i[0] : r.__k && gt(r, 0), a, d), i != null) for (l = i.length; l--; ) or(i[l]);
    a && _ != "textarea" || (l = "value", _ == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[l] || _ == "progress" && !p || _ == "option" && p != w[l]) && ne(t, l, p, w[l], o), l = "checked", v != null && v != t[l] && ne(t, l, v, w[l], o));
  }
  return t;
}
function sr(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    g.__e(o, r);
  }
}
function yn(t, e, r) {
  var n, o;
  if (g.unmount && g.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || sr(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      g.__e(i, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && yn(n[o], e, r || typeof t.type != "function");
  r || or(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Eo(t, e, r) {
  return this.constructor(t, r);
}
function lt(t, e, r) {
  var n, o, i, c;
  e == document && (e = document.documentElement), g.__ && g.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], c = [], ir(e, t = (!n && r || e).__k = P(Z, null, [t]), o || he, he, e.namespaceURI, !n && r ? [r] : o ? null : e.firstChild ? Kt.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, c), gn(i, t, c), t.props.children = null;
}
function cr(t, e) {
  lt(t, e, cr);
}
function ar(t, e, r) {
  var n, o, i, c, a = tt({}, t.props);
  for (i in t.type && t.type.defaultProps && (c = t.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? o = e[i] : a[i] = e[i] === void 0 && c != null ? c[i] : e[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Kt.call(arguments, 2) : r), Wt(t.type, a, n || t.key, o || t.ref, null);
}
function vn(t) {
  function e(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[e.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(c) {
        c.__e = !0, Fe(c);
      });
    }, this.sub = function(i) {
      n.add(i);
      var c = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), c && c.call(i);
      };
    }), r.children;
  }
  return e.__c = "__cC" + hn++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = e, e;
}
Kt = _e.slice, g = { __e: function(t, e, r, n) {
  for (var o, i, c; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), c = o.__d), c) return o.__E = o;
  } catch (a) {
    t = a;
  }
  throw t;
} }, ln = 0, X.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, r), this.props)), t && tt(r, t), t != null && this.__v && (e && this._sb.push(e), Fe(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Fe(this));
}, X.prototype.render = Z, ct = [], un = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, dn = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, pe.__r = 0, Oe = Math.random().toString(8), oe = "__d" + Oe, Ut = "__a" + Oe, fn = /(PointerCapture)$|Capture$/i, nr = 0, Ue = Vr(!1), We = Vr(!0), hn = 0;
function Le() {
  return Le = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Le.apply(this, arguments);
}
function wn(t, e) {
  if (t == null) return {};
  var r, n, o = {}, i = Object.keys(t);
  for (n = 0; n < i.length; n++) e.indexOf(r = i[n]) >= 0 || (o[r] = t[r]);
  return o;
}
var Io = ["context", "children"], Oo = ["useFragment"];
function ko(t, e, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    No.call(this, n);
  }, o.prototype.attributeChangedCallback = Do, o.prototype.disconnectedCallback = To, r = r || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = r, t.formAssociated && (o.formAssociated = !0), r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(c) {
      this._vdom ? this.attributeChangedCallback(i, null, c) : (this._props || (this._props = {}), this._props[i] = c);
      var a = typeof c;
      c != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, c);
    } });
  }), customElements.define(e, o), o;
}
function Ro(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, r = wn(t, Io);
  return ar(e, r);
}
function No(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = P(Ro, Le({}, this._props, { context: e.detail.context }), Sn(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? cr : lt)(this._vdom, this._root);
}
function bn(t) {
  return t.replace(/-(\w)/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Do(t, e, r) {
  if (this._vdom) {
    var n = {};
    n[t] = r = r ?? void 0, n[bn(t)] = r, this._vdom = ar(this._vdom, n), lt(this._vdom, this._root);
  }
}
function To() {
  lt(this._vdom = null, this._root);
}
function $r(t, e) {
  var r = this, n = t.useFragment, o = wn(t, Oo);
  return P(n ? Z : "slot", Le({}, o, { ref: function(i) {
    i ? (r.ref = i, r._listener || (r._listener = function(c) {
      c.stopPropagation(), c.detail.context = e;
    }, i.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function Sn(t, e, r) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var n = [], o = {}, i = 0, c = t.attributes, a = t.childNodes;
  for (i = c.length; i--; ) c[i].name !== "slot" && (o[c[i].name] = c[i].value, o[bn(c[i].name)] = c[i].value);
  for (i = a.length; i--; ) {
    var d = Sn(a[i], null, r), l = a[i].slot;
    l ? o[l] = P($r, { name: l }, d) : n[i] = d;
  }
  var f = !(!r || !r.shadow), L = e ? P($r, { useFragment: !f }, n) : n;
  return !f && e && (t.innerHTML = ""), P(e || t.nodeName.toLowerCase(), o, L);
}
var Ao = 0;
function s(t, e, r, n, o, i) {
  e || (e = {});
  var c, a, d = e;
  if ("ref" in d) for (a in d = {}, e) a == "ref" ? c = e[a] : d[a] = e[a];
  var l = { type: t, props: d, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ao, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (c = t.defaultProps)) for (a in c) d[a] === void 0 && (d[a] = c[a]);
  return g.vnode && g.vnode(l), l;
}
const xr = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var _t = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTION_CHANGED = "document-auto-capture:detection-changed", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(_t || {}), Vn = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", t.CONTROL = "palm-capture:control", t.DETECTION_CHANGED = "palm-capture:detection-changed", t.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", t.STATE_CHANGED = "palm-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", t))(Vn || {});
const B = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, U = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
};
var ut, M, ke, Mr, bt = 0, $n = [], I = g, Er = I.__b, Ir = I.__r, Or = I.diffed, kr = I.__c, Rr = I.unmount, Nr = I.__;
function xt(t, e) {
  I.__h && I.__h(M, t, bt || e), bt = 0;
  var r = M.__H || (M.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function K(t) {
  return bt = 1, lr(In, t);
}
function lr(t, e, r) {
  var n = xt(ut++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : In(void 0, e), function(a) {
    var d = n.__N ? n.__N[0] : n.__[0], l = n.t(d, a);
    d !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = M, !M.__f)) {
    var o = function(a, d, l) {
      if (!n.__c.__H) return !0;
      var f = !1, L = n.__c.props !== a;
      if (n.__c.__H.__.some(function(h) {
        if (h.__N) {
          f = !0;
          var p = h.__[0];
          h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (L = !0);
        }
      }), i) {
        var u = i.call(this, a, d, l);
        return f ? u || L : u;
      }
      return !f || L;
    };
    M.__f = !0;
    var i = M.shouldComponentUpdate, c = M.componentWillUpdate;
    M.componentWillUpdate = function(a, d, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, d, l), i = f;
      }
      c && c.call(this, a, d, l);
    }, M.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function dt(t, e) {
  var r = xt(ut++, 3);
  !I.__s && dr(r.__H, e) && (r.__ = t, r.u = e, M.__H.__h.push(r));
}
function Mt(t, e) {
  var r = xt(ut++, 4);
  !I.__s && dr(r.__H, e) && (r.__ = t, r.u = e, M.__h.push(r));
}
function Ce(t) {
  return bt = 5, Jt(function() {
    return { current: t };
  }, []);
}
function xn(t, e, r) {
  bt = 6, Mt(function() {
    if (typeof t == "function") {
      var n = t(e());
      return function() {
        t(null), n && typeof n == "function" && n();
      };
    }
    if (t) return t.current = e(), function() {
      return t.current = null;
    };
  }, r == null ? r : r.concat(t));
}
function Jt(t, e) {
  var r = xt(ut++, 7);
  return dr(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function pt(t, e) {
  return bt = 8, Jt(function() {
    return t;
  }, e);
}
function ur(t) {
  var e = M.context[t.__c], r = xt(ut++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(M)), e.props.value) : t.__;
}
function Mn(t, e) {
  I.useDebugValue && I.useDebugValue(e ? e(t) : t);
}
function En() {
  var t = xt(ut++, 11);
  if (!t.__) {
    for (var e = M.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function Po() {
  for (var t; t = $n.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(ie), e.__h.some(je), e.__h = [];
    } catch (r) {
      e.__h = [], I.__e(r, t.__v);
    }
  }
}
I.__b = function(t) {
  M = null, Er && Er(t);
}, I.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Nr && Nr(t, e);
}, I.__r = function(t) {
  Ir && Ir(t), ut = 0;
  var e = (M = t.__c).__H;
  e && (ke === M ? (e.__h = [], M.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(ie), e.__h.some(je), e.__h = [], ut = 0)), ke = M;
}, I.diffed = function(t) {
  Or && Or(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && ($n.push(e) !== 1 && Mr === I.requestAnimationFrame || ((Mr = I.requestAnimationFrame) || Zo)(Po)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), ke = M = null;
}, I.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(ie), r.__h = r.__h.filter(function(n) {
        return !n.__ || je(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], I.__e(n, r.__v);
    }
  }), kr && kr(t, e);
}, I.unmount = function(t) {
  Rr && Rr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      ie(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && I.__e(e, r.__v));
};
var Dr = typeof requestAnimationFrame == "function";
function Zo(t) {
  var e, r = function() {
    clearTimeout(n), Dr && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  Dr && (e = requestAnimationFrame(r));
}
function ie(t) {
  var e = M, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), M = e;
}
function je(t) {
  var e = M;
  t.__c = t.__(), M = e;
}
function dr(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function In(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function On(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Ge(t, e) {
  for (var r in t) if (r !== "__source" && !(r in e)) return !0;
  for (var n in e) if (n !== "__source" && t[n] !== e[n]) return !0;
  return !1;
}
function kn(t, e) {
  var r = e(), n = K({ t: { __: r, u: e } }), o = n[0].t, i = n[1];
  return Mt(function() {
    o.__ = r, o.u = e, Re(o) && i({ t: o });
  }, [t, r, e]), dt(function() {
    return Re(o) && i({ t: o }), t(function() {
      Re(o) && i({ t: o });
    });
  }, [t]), r;
}
function Re(t) {
  try {
    return !((e = t.__) === (r = t.u()) && (e !== 0 || 1 / e == 1 / r) || e != e && r != r);
  } catch {
    return !0;
  }
  var e, r;
}
function Rn(t) {
  t();
}
function Nn(t) {
  return t;
}
function Dn() {
  return [!1, Rn];
}
var Tn = Mt;
function ze(t, e) {
  this.props = t, this.context = e;
}
function Ho(t, e) {
  function r(o) {
    var i = this.props.ref;
    return i != o.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, o) || i != o.ref : Ge(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, P(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = t, n;
}
(ze.prototype = new X()).isPureReactComponent = !0, ze.prototype.shouldComponentUpdate = function(t, e) {
  return Ge(this.props, t) || Ge(this.state, e);
};
var Tr = g.__b;
g.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Tr && Tr(t);
};
var Bo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Uo(t) {
  function e(r) {
    var n = On({}, r);
    return delete n.ref, t(n, r.ref || null);
  }
  return e.$$typeof = Bo, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Ar = function(t, e) {
  return t == null ? null : ot(ot(t).map(e));
}, Wo = { map: Ar, forEach: Ar, count: function(t) {
  return t ? ot(t).length : 0;
}, only: function(t) {
  var e = ot(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: ot }, Fo = g.__e;
g.__e = function(t, e, r, n) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = r.__e, e.__k = r.__k || []), o.__c(t, e);
  }
  Fo(t, e, r, n);
};
var Pr = g.unmount;
function An(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = On({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return An(n, e, r);
  })), t;
}
function Pn(t, e, r) {
  return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return Pn(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t;
}
function se() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Zn(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function jo(t) {
  var e, r, n, o = null;
  function i(c) {
    if (e || (e = t()).then(function(a) {
      a && (o = a.default || a), n = !0;
    }, function(a) {
      r = a, n = !0;
    }), r) throw r;
    if (!n) throw e;
    return o ? P(o, c) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Tt() {
  this.i = null, this.l = null;
}
g.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Pr && Pr(t);
}, (se.prototype = new X()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = Zn(n.__v), i = !1, c = function() {
    i || n.__z || (i = !0, r.__R = null, o ? o(d) : d());
  };
  r.__R = c;
  var a = r.__P;
  r.__P = null;
  var d = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = Pn(l, l.__c.__P, l.__c.__O);
      }
      var f;
      for (n.setState({ __a: n.__b = null }); f = n.o.pop(); ) f.__P = a, f.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(c, c);
}, se.prototype.componentWillUnmount = function() {
  this.o = [];
}, se.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = An(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = e.__a && P(Z, null, t.fallback);
  return o && (o.__u &= -33), [P(Z, null, e.__a ? null : t.children), o];
};
var Zr = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (r = t.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    t.i = r = r[2];
  }
};
function Go(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function zo(t) {
  var e = this, r = t.h;
  if (e.componentWillUnmount = function() {
    lt(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
    for (var n = e.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    e.h = r, e.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, namespaceURI: r.namespaceURI, insertBefore: function(o, i) {
      this.childNodes.push(o), e.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), e.h.removeChild(o);
    } };
  }
  lt(P(Go, { context: e.context }, t.__v), e.v);
}
function Yo(t, e) {
  var r = P(zo, { __v: t, h: e });
  return r.containerInfo = e, r;
}
(Tt.prototype = new X()).__a = function(t) {
  var e = this, r = Zn(e.__v), n = e.l.get(t);
  return n[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (n.push(o), Zr(e, t, n)) : o();
    };
    r ? r(i) : i();
  };
}, Tt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = ot(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; ) this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, Tt.prototype.componentDidUpdate = Tt.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, r) {
    Zr(t, r, e);
  });
};
var Hn = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ko = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Xo = /[A-Z0-9]/g, Jo = typeof document < "u", Qo = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function ti(t, e, r) {
  return e.__k == null && (e.textContent = ""), lt(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function ei(t, e, r) {
  return cr(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
X.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(X.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Hr = g.event;
g.event = function(t) {
  return Hr && (t = Hr(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var fr, ri = { configurable: !0, get: function() {
  return this.class;
} }, Br = g.vnode;
g.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var r = e.props, n = e.type, o = {}, i = n.indexOf("-") == -1;
    for (var c in r) {
      var a = r[c];
      if (!(c === "value" && "defaultValue" in r && a == null || Jo && c === "children" && n === "noscript" || c === "class" || c === "className")) {
        var d = c.toLowerCase();
        c === "defaultValue" && "value" in r && r.value == null ? c = "value" : c === "download" && a === !0 ? a = "" : d === "translate" && a === "no" ? a = !1 : d[0] === "o" && d[1] === "n" ? d === "ondoubleclick" ? c = "ondblclick" : d !== "onchange" || n !== "input" && n !== "textarea" || Qo(r.type) ? d === "onfocus" ? c = "onfocusin" : d === "onblur" ? c = "onfocusout" : Ko.test(c) && (c = d) : d = c = "oninput" : i && qo.test(c) ? c = c.replace(Xo, "-$&").toLowerCase() : a === null && (a = void 0), d === "oninput" && o[c = d] && (c = "oninputCapture"), o[c] = a;
      }
    }
    n == "select" && (o.multiple && Array.isArray(o.value) && (o.value = ot(r.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), o.defaultValue != null && (o.value = ot(r.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    }))), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", ri)) : r.className && (o.class = o.className = r.className), e.props = o;
  })(t), t.$$typeof = Hn, Br && Br(t);
};
var Ur = g.__r;
g.__r = function(t) {
  Ur && Ur(t), fr = t.__c;
};
var Wr = g.diffed;
g.diffed = function(t) {
  Wr && Wr(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value), fr = null;
};
var ni = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return fr.__n[t.__c].props.value;
}, useCallback: pt, useContext: ur, useDebugValue: Mn, useDeferredValue: Nn, useEffect: dt, useId: En, useImperativeHandle: xn, useInsertionEffect: Tn, useLayoutEffect: Mt, useMemo: Jt, useReducer: lr, useRef: Ce, useState: K, useSyncExternalStore: kn, useTransition: Dn } } };
function oi(t) {
  return P.bind(null, t);
}
function ye(t) {
  return !!t && t.$$typeof === Hn;
}
function ii(t) {
  return ye(t) && t.type === Z;
}
function si(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function ci(t) {
  return ye(t) ? ar.apply(null, arguments) : t;
}
function ai(t) {
  return !!t.__k && (lt(null, t), !0);
}
function li(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ui = function(t, e) {
  return t(e);
}, di = function(t, e) {
  var r, n = g.debounceRendering;
  g.debounceRendering = function(i) {
    r = i;
  };
  try {
    var o = t(e);
    return r && r(), o;
  } finally {
    g.debounceRendering = n;
  }
}, fi = ye, W = { useState: K, useId: En, useReducer: lr, useEffect: dt, useLayoutEffect: Mt, useInsertionEffect: Tn, useTransition: Dn, useDeferredValue: Nn, useSyncExternalStore: kn, startTransition: Rn, useRef: Ce, useImperativeHandle: xn, useMemo: Jt, useCallback: pt, useContext: ur, useDebugValue: Mn, version: "18.3.1", Children: Wo, render: ti, hydrate: ei, unmountComponentAtNode: ai, createPortal: Yo, createElement: P, createContext: vn, createFactory: oi, cloneElement: ci, createRef: So, Fragment: Z, isValidElement: ye, isElement: fi, isFragment: ii, isMemo: si, findDOMNode: li, Component: X, PureComponent: ze, memo: Ho, forwardRef: Uo, flushSync: di, unstable_batchedUpdates: ui, StrictMode: Z, Suspense: se, SuspenseList: Tt, lazy: jo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ni }, x = "-ms-", Ft = "-moz-", S = "-webkit-", Bn = "comm", ve = "rule", hr = "decl", hi = "@import", _i = "@namespace", Un = "@keyframes", pi = "@layer", Wn = Math.abs, _r = String.fromCharCode, Ye = Object.assign;
function Li(t, e) {
  return R(t, 0) ^ 45 ? (((e << 2 ^ R(t, 0)) << 2 ^ R(t, 1)) << 2 ^ R(t, 2)) << 2 ^ R(t, 3) : 0;
}
function Fn(t) {
  return t.trim();
}
function rt(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function y(t, e, r) {
  return t.replace(e, r);
}
function ce(t, e, r) {
  return t.indexOf(e, r);
}
function R(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ct(t, e, r) {
  return t.slice(e, r);
}
function q(t) {
  return t.length;
}
function jn(t) {
  return t.length;
}
function At(t, e) {
  return e.push(t), t;
}
function mi(t, e) {
  return t.map(e).join("");
}
function Fr(t, e) {
  return t.filter(function(r) {
    return !rt(r, e);
  });
}
var we = 1, St = 1, Gn = 0, G = 0, O = 0, Et = "";
function be(t, e, r, n, o, i, c, a) {
  return { value: t, root: e, parent: r, type: n, props: o, children: i, line: we, column: St, length: c, return: "", siblings: a };
}
function st(t, e) {
  return Ye(be("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function yt(t) {
  for (; t.root; )
    t = st(t.root, { children: [t] });
  At(t, t.siblings);
}
function gi() {
  return O;
}
function Ci() {
  return O = G > 0 ? R(Et, --G) : 0, St--, O === 10 && (St = 1, we--), O;
}
function J() {
  return O = G < Gn ? R(Et, G++) : 0, St++, O === 10 && (St = 1, we++), O;
}
function at() {
  return R(Et, G);
}
function ae() {
  return G;
}
function Se(t, e) {
  return Ct(Et, t, e);
}
function zt(t) {
  switch (t) {
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
function yi(t) {
  return we = St = 1, Gn = q(Et = t), G = 0, [];
}
function vi(t) {
  return Et = "", t;
}
function Ne(t) {
  return Fn(Se(G - 1, qe(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function wi(t) {
  for (; (O = at()) && O < 33; )
    J();
  return zt(t) > 2 || zt(O) > 3 ? "" : " ";
}
function bi(t, e) {
  for (; --e && J() && !(O < 48 || O > 102 || O > 57 && O < 65 || O > 70 && O < 97); )
    ;
  return Se(t, ae() + (e < 6 && at() == 32 && J() == 32));
}
function qe(t) {
  for (; J(); )
    switch (O) {
      // ] ) " '
      case t:
        return G;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && qe(O);
        break;
      // (
      case 40:
        t === 41 && qe(t);
        break;
      // \
      case 92:
        J();
        break;
    }
  return G;
}
function Si(t, e) {
  for (; J() && t + O !== 57; )
    if (t + O === 84 && at() === 47)
      break;
  return "/*" + Se(e, G - 1) + "*" + _r(t === 47 ? t : J());
}
function Vi(t) {
  for (; !zt(at()); )
    J();
  return Se(t, G);
}
function $i(t) {
  return vi(le("", null, null, null, [""], t = yi(t), 0, [0], t));
}
function le(t, e, r, n, o, i, c, a, d) {
  for (var l = 0, f = 0, L = c, u = 0, h = 0, p = 0, v = 1, w = 1, m = 1, _ = 0, $ = "", N = o, V = i, E = n, C = $; w; )
    switch (p = _, _ = J()) {
      // (
      case 40:
        if (p != 108 && R(C, L - 1) == 58) {
          ce(C += y(Ne(_), "&", "&\f"), "&\f", Wn(l ? a[l - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Ne(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += wi(p);
        break;
      // \
      case 92:
        C += bi(ae() - 1, 7);
        continue;
      // /
      case 47:
        switch (at()) {
          case 42:
          case 47:
            At(xi(Si(J(), ae()), e, r, d), d), (zt(p || 1) == 5 || zt(at() || 1) == 5) && q(C) && Ct(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * v:
        a[l++] = q(C) * m;
      // } ; \0
      case 125 * v:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + f:
            m == -1 && (C = y(C, /\f/g, "")), h > 0 && (q(C) - L || v === 0 && p === 47) && At(h > 32 ? Gr(C + ";", n, r, L - 1, d) : Gr(y(C, " ", "") + ";", n, r, L - 2, d), d);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (At(E = jr(C, e, r, l, f, o, a, $, N = [], V = [], L, i), i), _ === 123)
              if (f === 0)
                le(C, e, E, E, N, i, L, a, V);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (R(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (R(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? le(t, E, E, n && At(jr(t, E, E, 0, 0, o, a, $, o, N = [], L, V), V), o, V, L, a, n ? N : V) : le(C, E, E, E, [""], V, 0, a, V);
              }
        }
        l = f = h = 0, v = m = 1, $ = C = "", L = c;
        break;
      // :
      case 58:
        L = 1 + q(C), h = p;
      default:
        if (v < 1) {
          if (_ == 123)
            --v;
          else if (_ == 125 && v++ == 0 && Ci() == 125)
            continue;
        }
        switch (C += _r(_), _ * v) {
          // &
          case 38:
            m = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (q(C) - 1) * m, m = 1;
            break;
          // @
          case 64:
            at() === 45 && (C += Ne(J())), u = at(), f = L = q($ = C += Vi(ae())), _++;
            break;
          // -
          case 45:
            p === 45 && q(C) == 2 && (v = 0);
        }
    }
  return i;
}
function jr(t, e, r, n, o, i, c, a, d, l, f, L) {
  for (var u = o - 1, h = o === 0 ? i : [""], p = jn(h), v = 0, w = 0, m = 0; v < n; ++v)
    for (var _ = 0, $ = Ct(t, u + 1, u = Wn(w = c[v])), N = t; _ < p; ++_)
      (N = Fn(w > 0 ? h[_] + " " + $ : y($, /&\f/g, h[_]))) && (d[m++] = N);
  return be(t, e, r, o === 0 ? ve : a, d, l, f, L);
}
function xi(t, e, r, n) {
  return be(t, e, r, Bn, _r(gi()), Ct(t, 2, -2), 0, n);
}
function Gr(t, e, r, n, o) {
  return be(t, e, r, hr, Ct(t, 0, n), Ct(t, n + 1, -1), n, o);
}
function zn(t, e, r) {
  switch (Li(t, e)) {
    // color-adjust
    case 5103:
      return S + "print-" + t + t;
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
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return S + t + t;
    // mask-composite
    case 4855:
      return S + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return Ft + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return S + t + Ft + t + x + t + t;
    // writing-mode
    case 5936:
      switch (R(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return S + t + x + y(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return S + t + x + y(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return S + t + x + y(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return S + t + x + t + t;
    // order
    case 6165:
      return S + t + x + "flex-" + t + t;
    // align-items
    case 5187:
      return S + t + y(t, /(\w+).+(:[^]+)/, S + "box-$1$2" + x + "flex-$1$2") + t;
    // align-self
    case 5443:
      return S + t + x + "flex-item-" + y(t, /flex-|-self/g, "") + (rt(t, /flex-|baseline/) ? "" : x + "grid-row-" + y(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return S + t + x + "flex-line-pack" + y(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return S + t + x + y(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return S + t + x + y(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return S + "box-" + y(t, "-grow", "") + S + t + x + y(t, "grow", "positive") + t;
    // transition
    case 4554:
      return S + y(t, /([^-])(transform)/g, "$1" + S + "$2") + t;
    // cursor
    case 6187:
      return y(y(y(t, /(zoom-|grab)/, S + "$1"), /(image-set)/, S + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return y(t, /(image-set\([^]*)/, S + "$1$`$1");
    // justify-content
    case 4968:
      return y(y(t, /(.+:)(flex-)?(.*)/, S + "box-pack:$3" + x + "flex-pack:$3"), /space-between/, "justify") + S + t + t;
    // justify-self
    case 4200:
      if (!rt(t, /flex-|baseline/)) return x + "grid-column-align" + Ct(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + y(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return e = o, rt(n.props, /grid-\w+-end/);
      }) ? ~ce(t + (r = r[e].value), "span", 0) ? t : x + y(t, "-start", "") + t + x + "grid-row-span:" + (~ce(r, "span", 0) ? rt(r, /\d+/) : +rt(r, /\d+/) - +rt(t, /\d+/)) + ";" : x + y(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return rt(n.props, /grid-\w+-start/);
      }) ? t : x + y(y(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(t, /(.+)-inline(.+)/, S + "$1$2") + t;
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
      if (q(t) - 1 - e > 6)
        switch (R(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return y(t, /(.+:)(.+)-([^]+)/, "$1" + S + "$2-$3$1" + Ft + (R(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~ce(t, "stretch", 0) ? zn(y(t, "stretch", "fill-available"), e, r) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return y(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, c, a, d, l) {
        return x + o + ":" + i + l + (c ? x + o + "-span:" + (a ? d : +d - +i) + l : "") + t;
      });
    // position: sticky
    case 4949:
      if (R(t, e + 6) === 121)
        return y(t, ":", ":" + S) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(t, R(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return y(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + S + (R(t, 14) === 45 ? "inline-" : "") + "box$3$1" + S + "$2$3$1" + x + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return y(t, ":", ":" + x) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function me(t, e) {
  for (var r = "", n = 0; n < t.length; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function Mi(t, e, r, n) {
  switch (t.type) {
    case pi:
      if (t.children.length) break;
    case hi:
    case _i:
    case hr:
      return t.return = t.return || t.value;
    case Bn:
      return "";
    case Un:
      return t.return = t.value + "{" + me(t.children, n) + "}";
    case ve:
      if (!q(t.value = t.props.join(","))) return "";
  }
  return q(r = me(t.children, n)) ? t.return = t.value + "{" + r + "}" : "";
}
function Ei(t) {
  var e = jn(t);
  return function(r, n, o, i) {
    for (var c = "", a = 0; a < e; a++)
      c += t[a](r, n, o, i) || "";
    return c;
  };
}
function Ii(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Oi(t, e, r, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hr:
        t.return = zn(t.value, t.length, r);
        return;
      case Un:
        return me([st(t, { value: y(t.value, "@", "@" + S) })], n);
      case ve:
        if (t.length)
          return mi(r = t.props, function(o) {
            switch (rt(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                yt(st(t, { props: [y(o, /:(read-\w+)/, ":" + Ft + "$1")] })), yt(st(t, { props: [o] })), Ye(t, { props: Fr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                yt(st(t, { props: [y(o, /:(plac\w+)/, ":" + S + "input-$1")] })), yt(st(t, { props: [y(o, /:(plac\w+)/, ":" + Ft + "$1")] })), yt(st(t, { props: [y(o, /:(plac\w+)/, x + "input-$1")] })), yt(st(t, { props: [o] })), Ye(t, { props: Fr(r, n) });
                break;
            }
            return "";
          });
    }
}
var vt = {};
function et(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var De, Te;
const Vt = typeof process < "u" && vt !== void 0 && (vt.REACT_APP_SC_ATTR || vt.SC_ATTR) || "data-styled", Yn = "active", qn = "data-styled-version", Ve = "6.6.0", pr = `/*!sc*/
`, jt = typeof window < "u" && typeof document < "u";
if (!W.createContext) throw et(19);
function zr(t) {
  if (typeof process < "u" && vt !== void 0) {
    const e = vt[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const ki = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Te = (De = zr("REACT_APP_SC_DISABLE_SPEEDY")) !== null && De !== void 0 ? De : zr("SC_DISABLE_SPEEDY")) !== null && Te !== void 0 ? Te : typeof process < "u" && vt !== void 0 && !1), Kn = "sc-keyframes-";
let ue = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), de = 1;
const Pt = (t) => {
  if (ue.has(t)) return ue.get(t);
  for (; ge.has(de); ) de++;
  const e = de++;
  return ue.set(t, e), ge.set(e, t), e;
}, Ri = (t) => ge.get(t), Ni = (t, e) => {
  de = e + 1, ue.set(t, e), ge.set(e, t);
}, Lr = Object.freeze([]), $t = Object.freeze({});
function Di(t, e, r = $t) {
  return t.theme !== r.theme && t.theme || e || r.theme;
}
const Ti = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ai = /(^-|-$)/g;
function Xn(t) {
  return t.replace(Ti, "-").replace(Ai, "");
}
const Pi = /(a)(d)/gi, Yr = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function mr(t) {
  let e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) r = Yr(e % 52) + r;
  return (Yr(e % 52) + r).replace(Pi, "$1-$2");
}
const Ke = 5381, Lt = (t, e) => {
  let r = e.length;
  for (; r; ) t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, Jn = (t) => Lt(Ke, t);
function Qn(t) {
  return mr(Jn(t) >>> 0);
}
function Zi(t) {
  return t.displayName || t.name || "Component";
}
function Xe(t) {
  return typeof t == "string" && !0;
}
function Hi(t) {
  return Xe(t) ? `styled.${t}` : `Styled(${Zi(t)})`;
}
const to = /* @__PURE__ */ Symbol.for("react.memo"), Bi = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ui = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Wi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, eo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Fi = { [Bi]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [to]: eo };
function qr(t) {
  return ("type" in (e = t) && e.type.$$typeof) === to ? eo : "$$typeof" in t ? Fi[t.$$typeof] : Ui;
  var e;
}
const ji = Object.defineProperty, Gi = Object.getOwnPropertyNames, zi = Object.getOwnPropertySymbols, Yi = Object.getOwnPropertyDescriptor, qi = Object.getPrototypeOf, Ki = Object.prototype;
function ro(t, e, r) {
  if (typeof e != "string") {
    const n = qi(e);
    n && n !== Ki && ro(t, n, r);
    const o = Gi(e).concat(zi(e)), i = qr(t), c = qr(e);
    for (let a = 0; a < o.length; ++a) {
      const d = o[a];
      if (!(d in Wi || r && r[d] || c && d in c || i && d in i)) {
        const l = Yi(e, d);
        try {
          ji(t, d, l);
        } catch {
        }
      }
    }
  }
  return t;
}
function Qt(t) {
  return typeof t == "function";
}
const Xi = /* @__PURE__ */ Symbol.for("react.forward_ref");
function no(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === Xi && "styledComponentId" in t;
}
function Zt(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Je(t, e) {
  return t.join("");
}
function Yt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Qe(t, e, r = !1) {
  if (!r && !Yt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t[n] = Qe(t[n], e[n]);
  else if (Yt(e)) for (const n in e) t[n] = Qe(t[n], e[n]);
  return t;
}
function gr(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
const Ji = class {
  constructor(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(t) {
    if (t === this._cGroup) return this._cIndex;
    let e = this._cIndex;
    if (t > this._cGroup) for (let r = this._cGroup; r < t; r++) e += this.groupSizes[r];
    else for (let r = this._cGroup - 1; r >= t; r--) e -= this.groupSizes[r];
    return this._cGroup = t, this._cIndex = e, e;
  }
  insertRules(t, e) {
    if (t >= this.groupSizes.length) {
      const o = this.groupSizes, i = o.length;
      let c = i;
      for (; t >= c; ) if (c <<= 1, c < 0) throw et(16, `${t}`);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(o), this.length = c;
      for (let a = i; a < c; a++) this.groupSizes[a] = 0;
    }
    let r = this.indexOfGroup(t + 1), n = 0;
    for (let o = 0, i = e.length; o < i; o++) this.tag.insertRule(r, e[o]) && (this.groupSizes[t]++, r++, n++);
    n > 0 && this._cGroup > t && (this._cIndex += n);
  }
  clearGroup(t) {
    if (t < this.length) {
      const e = this.groupSizes[t], r = this.indexOfGroup(t), n = r + e;
      this.groupSizes[t] = 0;
      for (let o = r; o < n; o++) this.tag.deleteRule(r);
      e > 0 && this._cGroup > t && (this._cIndex -= e);
    }
  }
  getGroup(t) {
    let e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    const r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
    for (let i = n; i < o; i++) e += this.tag.getRule(i) + pr;
    return e;
  }
}, Qi = `style[${Vt}][${qn}="${Ve}"]`, ts = new RegExp(`^${Vt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Kr = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, tr = (t) => {
  if (!t) return document;
  if (Kr(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (Kr(e)) return e;
  }
  return document;
}, es = (t, e, r) => {
  const n = r.split(",");
  let o;
  for (let i = 0, c = n.length; i < c; i++) (o = n[i]) && t.registerName(e, o);
}, rs = (t, e) => {
  var r;
  const n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(pr), o = [];
  for (let i = 0, c = n.length; i < c; i++) {
    const a = n[i].trim();
    if (!a) continue;
    const d = a.match(ts);
    if (d) {
      const l = 0 | parseInt(d[1], 10), f = d[2];
      l !== 0 && (Ni(f, l), es(t, f, d[3]), t.getTag().insertRules(l, o)), o.length = 0;
    } else o.push(a);
  }
}, Ae = (t) => {
  const r = tr(t.options.target).querySelectorAll(Qi);
  for (let n = 0, o = r.length; n < o; n++) {
    const i = r[n];
    i && i.getAttribute(Vt) !== Yn && (rs(t, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
let Nt = !1;
function ns() {
  if (Nt !== !1) return Nt;
  if (typeof document < "u") {
    const t = document.head.querySelector('meta[property="csp-nonce"]');
    if (t) return Nt = t.nonce || t.getAttribute("content") || void 0;
    const e = document.head.querySelector('meta[name="sc-nonce"]');
    if (e) return Nt = e.getAttribute("content") || void 0;
  }
  return Nt = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const oo = (t, e) => {
  if (typeof document > "u") throw et(20);
  const r = document.head, n = t || r, o = document.createElement("style"), i = ((d) => {
    const l = Array.from(d.querySelectorAll(`style[${Vt}]`));
    return l[l.length - 1];
  })(n), c = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(Vt, Yn), o.setAttribute(qn, Ve);
  const a = e || ns();
  return a && o.setAttribute("nonce", a), n.insertBefore(o, c), o;
}, os = class {
  constructor(t, e) {
    this.element = oo(t, e), this.element.appendChild(document.createTextNode("")), this.sheet = ((r) => {
      var n;
      if (r.sheet) return r.sheet;
      const o = (n = r.getRootNode().styleSheets) !== null && n !== void 0 ? n : document.styleSheets;
      for (let i = 0, c = o.length; i < c; i++) {
        const a = o[i];
        if (a.ownerNode === r) return a;
      }
      throw et(17);
    })(this.element), this.length = 0;
  }
  insertRule(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(t) {
    this.sheet.deleteRule(t), this.length--;
  }
  getRule(t) {
    const e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }
}, is = class {
  constructor(t, e) {
    this.element = oo(t, e), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(t, e) {
    if (t <= this.length && t >= 0) {
      const r = document.createTextNode(e);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }
  getRule(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }
};
let Xr = jt;
const ss = { isServer: !jt, useCSSOMInjection: !ki };
class $e {
  static registerId(e) {
    return Pt(e);
  }
  constructor(e = $t, r = {}, n) {
    this.options = Object.assign(Object.assign({}, ss), e), this.gs = r, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && jt && Xr && (Xr = !1, Ae(this)), gr(this, () => ((o) => {
      const i = o.getTag(), { length: c } = i;
      let a = "";
      for (let d = 0; d < c; d++) {
        const l = Ri(d);
        if (l === void 0) continue;
        const f = o.names.get(l);
        if (f === void 0 || !f.size) continue;
        const L = i.getGroup(d);
        if (L.length === 0) continue;
        const u = Vt + ".g" + d + '[id="' + l + '"]';
        let h = "";
        for (const p of f) p.length > 0 && (h += p + ",");
        a += L + u + '{content:"' + h + '"}' + pr;
      }
      return a;
    })(this));
  }
  rehydrate() {
    !this.server && jt && Ae(this);
  }
  reconstructWithOptions(e, r = !0) {
    const n = new $e(Object.assign(Object.assign({}, this.options), e), this.gs, r && this.names || void 0);
    return n.keyframeIds = new Set(this.keyframeIds), !this.server && jt && e.target !== this.options.target && tr(this.options.target) !== tr(e.target) && Ae(n), n;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ useCSSOMInjection: r, target: n, nonce: o }) => r ? new os(n, o) : new is(n, o))(this.options), new Ji(e)));
    var e;
  }
  hasNameForId(e, r) {
    var n, o;
    return (o = (n = this.names.get(e)) === null || n === void 0 ? void 0 : n.has(r)) !== null && o !== void 0 && o;
  }
  registerName(e, r) {
    Pt(e), e.startsWith(Kn) && this.keyframeIds.add(e);
    const n = this.names.get(e);
    n ? n.add(r) : this.names.set(e, /* @__PURE__ */ new Set([r]));
  }
  insertRules(e, r, n) {
    this.registerName(e, r), this.getTag().insertRules(Pt(e), n);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Pt(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const io = /* @__PURE__ */ new WeakSet(), cs = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function as(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in cs || t.startsWith("--") ? String(e).trim() : e + "px";
}
const ht = 47;
function Jr(t) {
  if (t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45) return t;
  let e = "";
  for (let r = 0; r < t.length; r++) {
    const n = t.charCodeAt(r);
    e += n >= 65 && n <= 90 ? "-" + String.fromCharCode(n + 32) : t[r];
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
const so = /* @__PURE__ */ Symbol.for("sc-keyframes");
function ls(t) {
  return typeof t == "object" && t !== null && so in t;
}
function co(t) {
  return Qt(t) && !(t.prototype && t.prototype.isReactComponent);
}
const ao = (t) => t == null || t === !1 || t === "", us = /* @__PURE__ */ Symbol.for("react.client.reference");
function Qr(t) {
  return t.$$typeof === us;
}
function lo(t, e) {
  for (const r in t) {
    const n = t[r];
    t.hasOwnProperty(r) && !ao(n) && (Array.isArray(n) && io.has(n) || Qt(n) ? e.push(Jr(r) + ":", n, ";") : Yt(n) ? (e.push(r + " {"), lo(n, e), e.push("}")) : e.push(Jr(r) + ": " + as(r, n) + ";"));
  }
}
function mt(t, e, r, n, o = []) {
  if (ao(t)) return o;
  const i = typeof t;
  if (i === "string") return o.push(t), o;
  if (i === "function") {
    if (Qr(t)) return o;
    if (co(t) && e) {
      const c = t(e);
      return mt(c, e, r, n, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let c = 0; c < t.length; c++) mt(t[c], e, r, n, o);
    return o;
  }
  return no(t) ? (o.push(`.${t.styledComponentId}`), o) : ls(t) ? (r ? (t.inject(r, n), o.push(t.getName(n))) : o.push(t), o) : Qr(t) ? o : Yt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (lo(t, o), o) : (o.push(t.toString()), o);
}
const ds = Jn(Ve);
class fs {
  constructor(e, r, n) {
    this.rules = e, this.componentId = r, this.baseHash = Lt(ds, r), this.baseStyle = n, $e.registerId(r);
  }
  generateAndInjectStyles(e, r, n) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
    {
      let i = "";
      for (let c = 0; c < this.rules.length; c++) {
        const a = this.rules[c];
        if (typeof a == "string") i += a;
        else if (a) if (co(a)) {
          const d = a(e);
          typeof d == "string" ? i += d : d != null && d !== !1 && (i += Je(mt(d, e, r, n)));
        } else i += Je(mt(a, e, r, n));
      }
      if (i) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const c = n.hash ? n.hash + i : i;
        let a = this.dynamicNameCache.get(c);
        if (!a) {
          if (a = mr(Lt(Lt(this.baseHash, n.hash), i) >>> 0), this.dynamicNameCache.size >= 200) {
            const d = this.dynamicNameCache.keys().next().value;
            d !== void 0 && this.dynamicNameCache.delete(d);
          }
          this.dynamicNameCache.set(c, a);
        }
        if (!r.hasNameForId(this.componentId, a)) {
          const d = n(i, "." + a, void 0, this.componentId);
          r.insertRules(this.componentId, a, d);
        }
        o = Zt(o, a);
      }
    }
    return o;
  }
}
const hs = /&/g;
function uo(t, e) {
  let r = 0;
  for (; --e >= 0 && t.charCodeAt(e) === 92; ) r++;
  return !(1 & ~r);
}
function Pe(t) {
  const e = t.length;
  let r = "", n = 0, o = 0, i = 0, c = !1, a = !1;
  for (let d = 0; d < e; d++) {
    const l = t.charCodeAt(d);
    if (i !== 0 || c || l !== ht || t.charCodeAt(d + 1) !== 42) if (c) l === 42 && t.charCodeAt(d + 1) === ht && (c = !1, d++);
    else if (l !== 34 && l !== 39 || uo(t, d)) {
      if (i === 0) if (l === 123) o++;
      else if (l === 125) {
        if (o--, o < 0) {
          a = !0;
          let f = d + 1;
          for (; f < e; ) {
            const L = t.charCodeAt(f);
            if (L === 59 || L === 10) break;
            f++;
          }
          f < e && t.charCodeAt(f) === 59 && f++, o = 0, d = f - 1, n = f;
          continue;
        }
        o === 0 && (r += t.substring(n, d + 1), n = d + 1);
      } else l === 59 && o === 0 && (r += t.substring(n, d + 1), n = d + 1);
    } else i === 0 ? i = l : i === l && (i = 0);
    else c = !0, d++;
  }
  return a || o !== 0 || i !== 0 ? (n < e && o === 0 && i === 0 && (r += t.substring(n)), r) : t;
}
function fo(t, e) {
  const r = e + " ", n = "," + r;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (i.type === "rule") {
      i.value = (r + i.value).replaceAll(",", n);
      const c = i.props, a = [];
      for (let d = 0; d < c.length; d++) a[d] = r + c[d];
      i.props = a;
    }
    Array.isArray(i.children) && i.type !== "@keyframes" && fo(i.children, e);
  }
  return t;
}
function ho({ options: t = $t, plugins: e = Lr } = $t) {
  let r, n, o;
  const i = (u, h, p) => p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? `.${r}` : u, c = e.slice();
  c.push((u) => {
    u.type === ve && u.value.includes("&") && (o || (o = new RegExp(`\\${n}\\b`, "g")), u.props[0] = u.props[0].replace(hs, n).replace(o, i));
  }), t.prefix && c.push(Oi), c.push(Mi);
  let a = [];
  const d = Ei(c.concat(Ii((u) => a.push(u)))), l = (u, h = "", p = "", v = "&") => {
    r = v, n = h, o = void 0;
    const w = (function(_) {
      const $ = _.indexOf("//") !== -1, N = _.indexOf("}") !== -1;
      if (!$ && !N) return _;
      if (!$) return Pe(_);
      const V = _.length;
      let E = "", C = 0, b = 0, z = 0, D = 0, A = 0, It = !1;
      for (; b < V; ) {
        const H = _.charCodeAt(b);
        if (H !== 34 && H !== 39 || uo(_, b)) if (z === 0) if (H === ht && b + 1 < V && _.charCodeAt(b + 1) === 42) {
          for (b += 2; b + 1 < V && (_.charCodeAt(b) !== 42 || _.charCodeAt(b + 1) !== ht); ) b++;
          b += 2;
        } else if (H !== 40) if (H !== 41) if (D > 0) b++;
        else if (H === 42 && b + 1 < V && _.charCodeAt(b + 1) === ht) E += _.substring(C, b), b += 2, C = b, It = !0;
        else if (H === ht && b + 1 < V && _.charCodeAt(b + 1) === ht) {
          for (E += _.substring(C, b); b < V && _.charCodeAt(b) !== 10; ) b++;
          C = b, It = !0;
        } else H === 123 ? A++ : H === 125 && A--, b++;
        else D > 0 && D--, b++;
        else D++, b++;
        else b++;
        else z === 0 ? z = H : z === H && (z = 0), b++;
      }
      return It ? (C < V && (E += _.substring(C)), A === 0 ? E : Pe(E)) : A === 0 ? _ : Pe(_);
    })(u);
    let m = $i(p || h ? p + " " + h + " { " + w + " }" : w);
    return t.namespace && (m = fo(m, t.namespace)), a = [], me(m, d), a;
  }, f = t;
  let L = Ke;
  for (let u = 0; u < e.length; u++) e[u].name || et(15), L = Lt(L, e[u].name);
  return f?.namespace && (L = Lt(L, f.namespace)), f?.prefix && (L = Lt(L, "p")), l.hash = L !== Ke ? L.toString() : "", l;
}
const _s = new $e(), er = ho(), Cr = W.createContext({ shouldForwardProp: void 0, styleSheet: _s, stylis: er, stylisPlugins: void 0 });
Cr.Consumer;
function _o() {
  return W.useContext(Cr);
}
function ps(t) {
  var e;
  const r = _o(), { styleSheet: n } = r, o = W.useMemo(() => {
    let l = n;
    return t.sheet ? l = t.sheet : t.target ? l = l.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (l = l.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, n]), i = W.useMemo(() => {
    var l;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? r.stylis : ho({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (l = t.stylisPlugins) !== null && l !== void 0 ? l : r.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, r.stylis, r.stylisPlugins]), c = "shouldForwardProp" in t ? t.shouldForwardProp : r.shouldForwardProp, a = (e = t.stylisPlugins) !== null && e !== void 0 ? e : r.stylisPlugins, d = W.useMemo(() => ({ shouldForwardProp: c, styleSheet: o, stylis: i, stylisPlugins: a }), [c, o, i, a]);
  return W.createElement(Cr.Provider, { value: d }, t.children);
}
const qt = W.createContext(void 0);
qt.Consumer;
function po() {
  const t = W.useContext(qt);
  if (!t) throw et(18);
  return t;
}
function Ls(t) {
  const e = W.useContext(qt), r = W.useMemo(() => (function(n, o) {
    if (!n) throw et(14);
    if (Qt(n))
      return n(o);
    if (Array.isArray(n) || typeof n != "object") throw et(8);
    return o ? Object.assign(Object.assign({}, o), n) : n;
  })(t.theme, e), [t.theme, e]);
  return t.children ? W.createElement(qt.Provider, { value: r }, t.children) : null;
}
const Ze = {};
function ms(t, e) {
  const r = typeof t != "string" ? "sc" : Xn(t);
  Ze[r] = (Ze[r] || 0) + 1;
  const n = r + "-" + Qn(Ve + r + Ze[r]);
  return e ? e + "-" + n : n;
}
function gs(t, e, r) {
  const n = no(t), o = t, i = !Xe(t), { attrs: c = Lr, componentId: a = ms(e.displayName, e.parentComponentId), displayName: d = Hi(t) } = e, l = e.displayName && e.componentId ? Xn(e.displayName) + "-" + e.componentId : e.componentId || a, f = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c;
  let { shouldForwardProp: L } = e;
  if (n && o.shouldForwardProp) {
    const v = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const w = e.shouldForwardProp;
      L = (m, _) => v(m, _) && w(m, _);
    } else L = v;
  }
  const u = new fs(r, l, n ? o.componentStyle : void 0);
  function h(v, w) {
    return (function(m, _, $) {
      const { attrs: N, componentStyle: V, defaultProps: E, foldedComponentIds: C, styledComponentId: b, target: z } = m, D = W.useContext(qt), A = _o(), It = m.shouldForwardProp || A.shouldForwardProp, H = Di(_, D, E) || $t, [Ot, wo] = (function(Q, ft, Ie) {
        const k = Object.assign(Object.assign({}, ft), { className: void 0, theme: Ie });
        let kt = null;
        const re = Q.length > 1;
        for (let it = 0; it < Q.length; it++) {
          const T = Q[it], Rt = Qt(T) ? T(re ? Object.assign({}, k) : k) : T;
          for (const Y in Rt) Y === "className" ? k.className = Zt(k.className, Rt[Y]) : Y === "style" ? k.style = Object.assign(Object.assign({}, k.style), Rt[Y]) : Rt[Y] === void 0 ? Y in k && (k[Y] !== void 0 && (kt || (kt = [])).push(Y), k[Y] = void 0) : k[Y] = Rt[Y];
        }
        return "className" in ft && typeof ft.className == "string" && (k.className = Zt(k.className, ft.className)), [k, kt];
      })(N, _, H), vr = V.generateAndInjectStyles(Ot, A.styleSheet, A.stylis), ee = Ot.as || z, wr = Xe(ee), Me = (function(Q, ft, Ie, k, kt, re) {
        const it = {};
        for (const T in Q) T[0] === "$" || T === "as" || T === "theme" && Q.theme === Ie || (T === "forwardedAs" ? Q.forwardedAs !== void 0 && (it.as = Q.forwardedAs) : Q[T] === void 0 ? T === "className" || kt || re !== null && re.indexOf(T) !== -1 || k && !k(T, ft) || (it[T] = void 0) : k && !k(T, ft) || (it[T] = Q[T]));
        return it;
      })(Ot, ee, H, It, wr, wo);
      let Ee = Zt(C, b);
      return vr && (Ee += " " + vr), Ot.className && (Ee += " " + Ot.className), Me[wr && ee.includes("-") ? "class" : "className"] = Ee, $ && (Me.ref = $), P(ee, Me);
    })(p, v, w);
  }
  h.displayName = d;
  let p = W.forwardRef(h);
  return p.attrs = f, p.componentStyle = u, p.displayName = d, p.shouldForwardProp = L, p.foldedComponentIds = n ? Zt(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = l, p.target = n ? o.target : t, Object.defineProperty(p, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(v) {
    this._foldedDefaultProps = n ? (function(w, ...m) {
      for (const _ of m) Qe(w, _, !0);
      return w;
    })({}, o.defaultProps, v) : v;
  } }), gr(p, () => `.${p.styledComponentId}`), i && ro(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
var Cs = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function tn(t, e) {
  const r = [t[0]];
  for (let n = 0, o = e.length; n < o; n += 1) r.push(e[n], t[n + 1]);
  return r;
}
const en = (t) => (io.add(t), t);
function yr(t, ...e) {
  if (Qt(t) || Yt(t)) return en(mt(tn(Lr, [t, ...e])));
  const r = t;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? mt(r) : en(mt(tn(r, e)));
}
function rr(t, e, r = $t) {
  if (!e) throw et(1, e);
  const n = (o, ...i) => t(e, r, yr(o, ...i));
  return n.attrs = (o) => rr(t, e, Object.assign(Object.assign({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) })), n.withConfig = (o) => rr(t, e, Object.assign(Object.assign({}, r), o)), n;
}
const Lo = (t) => rr(gs, t), j = Lo;
Cs.forEach((t) => {
  j[t] = Lo(t);
});
var mo;
class ys {
  constructor(e, r) {
    this[mo] = !0, this.inject = (n, o = er) => {
      const i = this.getName(o);
      if (!n.hasNameForId(this.id, i)) {
        const c = o(this.rules, i, "@keyframes");
        n.insertRules(this.id, i, c);
      }
    }, this.name = e, this.id = Kn + e, this.rules = r, Pt(this.id), gr(this, () => {
      throw et(12, String(this.name));
    });
  }
  getName(e = er) {
    return e.hash ? this.name + mr(+e.hash >>> 0) : this.name;
  }
}
function xe(t, ...e) {
  const r = Je(yr(t, ...e)), n = Qn(r);
  return new ys(n, r);
}
mo = so;
const Gt = vn(void 0);
Gt.displayName = "ConfigurationContext";
function te() {
  const t = ur(Gt);
  if (!t)
    throw new Error(
      `${Gt.displayName} must be used within a ${Gt.displayName} Provider`
    );
  return t;
}
function vs({
  children: t,
  configuration: e,
  videoElementSize: r
}) {
  const n = Jt(() => ({ ...e, videoElementSize: r }), [e, r]);
  return /* @__PURE__ */ s(Gt.Provider, { value: n, children: t });
}
const F = {
  ID_CORNERS: "id-corners",
  ID_DASH: "id-dash",
  ID_DOT: "id-dot",
  ID_SOLID: "id-solid",
  ID_PHOTO_ROUNDED: "id-photo-rounded",
  ID_CORNERS_ROUNDED: "id-corners-rounded",
  ID_DASH_ROUNDED: "id-dash-rounded",
  ID_DOT_ROUNDED: "id-dot-rounded",
  ID_SOLID_ROUNDED_BACK: "id-solid-rounded-back",
  ID_SOLID_ROUNDED: "id-solid-rounded",
  PASSPORT_SOLID_BACK: "passport-solid-back",
  PASSPORT_SOLID_BACK_BLANK: "passport-solid-back-blank"
}, rn = 0.24, ws = 24, bs = 2, go = 14, Ss = 0.0276;
var nt = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(nt || {});
const Ht = {
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
}, Vs = {
  [B.CANDIDATE_SELECTION]: "Hold still…",
  [B.DOCUMENT_CENTERING]: "Center document",
  [B.DOCUMENT_NOT_PRESENT]: "Scan document",
  [B.DOCUMENT_TOO_FAR]: "Move closer",
  [B.SHARPNESS_TOO_LOW]: "More light needed",
  [B.BRIGHTNESS_TOO_LOW]: "More light needed",
  [B.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [B.HOTSPOTS_PRESENT]: "Avoid reflections"
}, $s = {
  [B.BRIGHTNESS_TOO_LOW]: "Move document to brighter area",
  [B.SHARPNESS_TOO_LOW]: "Move document to brighter area",
  [B.BRIGHTNESS_TOO_HIGH]: "Move document to darker area",
  [B.DOCUMENT_TOO_FAR]: "Move document closer"
}, He = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, xs = F.ID_CORNERS_ROUNDED, Ms = "rgba(19, 19, 19, 0.5)", Es = 34;
function nn(t, e) {
  return Math.max(e, e + (t - 400) * Ss + 2);
}
const Is = (t, e = go) => t ? t.width < t.height ? nn(t.width, e) : nn(t.height, e) : e, Os = (t) => t > nt.Default ? Ht[nt.Default] : t > nt.L ? Ht[nt.L] : t > nt.M ? Ht[nt.M] : Ht[nt.S], ks = (t) => t ? Os(t.width) : Ht[nt.Default];
function Rs() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const r = document.createElement("link");
    r.href = t, r.rel = "stylesheet", document.head.appendChild(r);
  }
}
function Ns({
  currentInstruction: t,
  escalatedInstructions: e,
  instructions: r
}) {
  const { code: n, isEscalated: o } = t;
  if (n)
    return o && e && n in e ? e[n] : r[n];
}
function Ds(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ts = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, As = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: go
}, Dt = {
  colors: Ts,
  font: As
}, Ps = (t) => t ? {
  ...Dt,
  ...t,
  colors: {
    ...Dt.colors,
    ...t.colors
  },
  font: {
    ...Dt.font,
    ...t.font,
    family: Ds(t.font?.family, Dt.font.family)
  }
} : Dt, Zs = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: Is(e, t.font.minimumSize)
  }
}), Hs = ({ svgSize: t }) => /* @__PURE__ */ s("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ s(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Bs = j.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: ${(t) => t.$position};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  ${(t) => !t.$isCameraReady && `
    height: inherit;
    aspect-ratio: 16/9;

    @media (orientation: portrait) and (max-width: 1199px) {
      aspect-ratio: 9/16;
    }
  `}
`, Us = j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, Ws = j.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, fe = ({ Icon: t, isCameraReady: e, position: r = "absolute", text: n }) => {
  const { font: o } = po();
  return /* @__PURE__ */ s(Bs, { $isCameraReady: e, $position: r, children: /* @__PURE__ */ s(Us, { children: [
    t ? /* @__PURE__ */ s(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ s(Ws, { children: n })
  ] }) });
}, Co = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ s(fe, { Icon: Hs, position: "relative", text: t });
class Fs extends X {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0 };
  }
  componentDidCatch(e, r) {
    console.error(e, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ s(Co, {}) : this.props.children;
  }
}
const js = j.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Gs({
  children: t,
  uiConfiguration: e,
  videoElementSize: r
}) {
  dt(() => {
    Rs();
  }, []);
  const n = Zs(e.styling.theme, r);
  return /* @__PURE__ */ s(ps, { target: e.styleTarget, children: /* @__PURE__ */ s(Ls, { theme: n, children: /* @__PURE__ */ s(js, { children: /* @__PURE__ */ s(Fs, { children: /* @__PURE__ */ s(vs, { configuration: e, videoElementSize: r, children: t }) }) }) }) });
}
const zs = 1.5, Ys = 0.85, Be = 1e3, qs = "dot-auto-capture-video";
function wt(t, e) {
  const r = Ce(e);
  dt(() => {
    r.current = e;
  }, [e]), dt(
    () => {
      if (!t)
        return;
      const n = (o) => r.current(o);
      return document.addEventListener(t, n), () => {
        document.removeEventListener(t, n);
      };
    },
    [t]
    // Re-run if eventName
  );
}
function Ks(t) {
  const [e, r] = K(), n = pt(
    (o) => {
      r(o.detail?.size);
    },
    [r]
  );
  return wt(t, n), Mt(() => {
    if (!e) {
      const o = document.getElementById(qs);
      o && r(o.getBoundingClientRect());
    }
  }, [e, r]), e;
}
function Xs(t, e) {
  return t < Be && e >= Be ? Be : t;
}
function Js(t, e) {
  return t < e ? t : e;
}
function Qs({ height: t, width: e }) {
  let r;
  return e > t ? r = Xs(t, e) : r = e, {
    width: r,
    height: Js(t, r)
  };
}
const tc = (t, e) => Math.min(t, e), ec = (t) => {
  const r = Qs(t).width * Ys, n = (t.width - r) / 2, o = r / zs, i = (t.height - o) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: o
  };
}, rc = (t) => {
  const { height: e, shiftX: r, shiftY: n, width: o } = ec(t);
  return {
    shiftX: r / t.width,
    shiftY: n / t.height,
    width: o / t.width,
    height: e / t.height
  };
}, nc = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, on = (t, e) => {
  nc(t, {
    instruction: e
  });
};
async function oc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ic() {
  return (await oc()).filter((e) => e.kind === "videoinput");
}
const sc = () => {
  const [t, e] = K(!1);
  return dt(() => {
    (async () => (await ic()).length > 1 && e(!0))();
  }, []), t;
}, cc = ({ size: t }) => /* @__PURE__ */ s("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ s(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ s("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ s("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), ac = ({ size: t }) => /* @__PURE__ */ s("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ s("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), yo = j.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, lc = ({ marginLeft: t, size: e, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: t, ...r, children: /* @__PURE__ */ s(cc, { size: e }) }), uc = ({ marginLeft: t, size: e, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: t, ...r, children: /* @__PURE__ */ s(ac, { size: e }) }), dc = j.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, fc = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const {
    control: { showCameraButtons: r },
    videoElementSize: n
  } = te(), o = sc();
  if (!r)
    return null;
  const { buttonPadding: i, iconSize: c, marginLeft: a } = ks(n);
  return /* @__PURE__ */ s(dc, { $padding: i, children: [
    o && /* @__PURE__ */ s(uc, { disabled: e, onClick: () => {
      on(t, xr.SWITCH_CAMERA);
    }, size: c }),
    /* @__PURE__ */ s(
      lc,
      {
        marginLeft: o ? a : 0,
        onClick: () => {
          on(t, xr.TOGGLE_MIRROR);
        },
        size: c
      }
    )
  ] });
}, hc = "2.5s", _c = "0.3s", pc = "linear", Lc = xe`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
xe`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
xe`
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
xe`
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
const mc = j.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && yr`
      animation: ${Lc} ${_c}
        ${pc} both;
      animation-delay: ${hc};

      @media (orientation: landscape) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 15 : ""}%;
      }

      @media (max-width: 1024px) and (orientation: landscape) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 13 : ""}%;
      }

      @media (max-width: 768px) {
        bottom: ${t.$cssBottom ? t.$cssBottom + 3 : ""}%;
      }

      @media (max-width: 480px) and (orientation: portrait) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 10 : ""}%;
      }
    `};

  transform: translateY(
    ${(t) => t.$cssTop || t.$isPortrait ? "-50%" : t.$isPortrait ? "" : "50%"}
  );
  z-index: 2;
`, gc = j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  width: max-content;
  max-width: 90%;
  background: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.instructionColorSuccess}` : `${t.theme.colors.instructionColor}`};
  color: ${(t) => t.theme.colors.instructionTextColor};
  border: 0;
  line-height: 1em;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  white-space: ${(t) => t.$wrap ? "break-spaces" : "nowrap"};
`, Cc = ({
  children: t,
  cssBottom: e,
  cssTop: r,
  isAnimating: n,
  isInCandidateSelection: o,
  isPortrait: i
}) => /* @__PURE__ */ s(mc, { $cssBottom: e, $cssTop: r, $isAnimating: n, $isPortrait: i, children: /* @__PURE__ */ s(
  gc,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > Es,
    children: t
  }
) }), yc = j.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function vc(t) {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
const Bt = (t, e) => Math.hypot(e.x - t.x, e.y - t.y), sn = (t, e, r) => {
  const n = (e.x - t.x) * r, o = (e.y - t.y) * r;
  return {
    x: t.x + n,
    y: t.y + o
  };
}, cn = (t, e, r, n) => {
  const o = Bt(t, e);
  return r * n / o;
}, wc = (t) => {
  const { bottomLeft: e, bottomRight: r, topLeft: n, topRight: o } = t, i = Bt(n, o), c = Bt(o, r), a = Bt(e, r), d = Bt(n, e);
  return Math.min(i, c, a, d);
};
function bc({ cameraResolution: t, isImageMirror: e }) {
  const r = Ce(null), n = po(), [o, i] = K(), c = pt(
    (a) => {
      i(a?.detail?.detectedObject);
    },
    [i]
  );
  return wt(_t.DETECTION_CHANGED, c), wt(Vn.DETECTION_CHANGED, c), dt(() => {
    if (!r.current)
      return;
    const a = (l, f, L, u) => {
      const h = cn(
        f,
        l,
        u,
        rn
      ), p = cn(
        f,
        L,
        u,
        rn
      ), v = sn(f, l, h), w = sn(f, L, p), m = r?.current?.getContext("2d");
      m && (m.beginPath(), m.lineWidth = bs, m.strokeStyle = n.colors.placeholderColor, m.moveTo(v.x, v.y), m.arcTo(f.x, f.y, w.x, w.y, ws), m.lineTo(w.x, w.y), m.stroke());
    }, d = (l) => {
      if (!l)
        return;
      const { bottomLeft: f, bottomRight: L, topLeft: u, topRight: h } = l, p = wc(l);
      a(f, u, h, p), a(u, h, L, p), a(h, L, f, p), a(L, f, u, p);
    };
    r.current.width = t.width, r.current.height = t.height, vc(r.current), d(o);
  }, [t, o, n.colors.placeholderColor]), /* @__PURE__ */ s(yc, { ref: r, $isImageMirror: e });
}
const Sc = j.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, an = ({ svgSize: t }) => /* @__PURE__ */ s(Sc, { children: /* @__PURE__ */ s("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ s(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), Vc = j.div`
  z-index: 1;
  position: absolute;
  // Scale up the backdrop to have space when placeholder is scaled below 1
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  outline: ${({ $backdropColor: t, $shorterSide: e = 1e3 }) => `${e * 0.2}px solid ${t}`};
  transform: scale(${(t) => t.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // Scale the children to 50% of the size of the backdrop to achieve 1:1 ratio between placeholder and backdrop
  g {
    transform: scale(0.5);
    translate: 25% 25%;
  }
`, vo = ({ children: t, height: e, scale: r, width: n }) => {
  const {
    styling: { backdropColor: o }
  } = te(), i = tc(n, e);
  return /* @__PURE__ */ s(Vc, { $backdropColor: o, $scale: r, $shorterSide: i, children: /* @__PURE__ */ s("svg", { viewBox: `0 0 ${n} ${e}`, children: [
    /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("mask", { id: "mask", children: [
      /* @__PURE__ */ s("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ s("g", { children: t })
    ] }) }),
    /* @__PURE__ */ s("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function $c({ cameraHeight: t, cameraWidth: e, isBackdrop: r, state: n }) {
  const { appStateInstructions: o } = te(), i = n === U.ERROR || n === U.RUNNING;
  return !n || i || !o?.[n]?.visible ? null : n === U.WAITING || n === U.COMPLETE ? /* @__PURE__ */ s(Z, { children: [
    r && t && e && /* @__PURE__ */ s(vo, { height: t, width: e }),
    /* @__PURE__ */ s(fe, { isCameraReady: !0, text: o[U.WAITING].text })
  ] }) : n === U.BLURRED ? /* @__PURE__ */ s(Z, { children: /* @__PURE__ */ s(fe, { Icon: an, isCameraReady: !0, text: o[U.BLURRED].text }) }) : /* @__PURE__ */ s(fe, { Icon: an, isCameraReady: !0, text: o[U.LOADING].text });
}
function xc({ isPassport: t, isRounded: e, ...r }) {
  if (e)
    return /* @__PURE__ */ s("rect", { fill: "#000", ...r, rx: "2%" });
  if (t) {
    const o = `calc(${r.height} / 2)`;
    return /* @__PURE__ */ s(Z, { children: [
      /* @__PURE__ */ s("rect", { fill: "#000", height: o, rx: "1%", width: r.width, x: r.x, y: r.y }),
      /* @__PURE__ */ s(
        "rect",
        {
          fill: "#000",
          height: o,
          rx: "0",
          width: r.width,
          x: r.x,
          y: `calc(${r.y} + 4%)`
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          fill: "#000",
          height: o,
          rx: "2%",
          width: r.width,
          x: r.x,
          y: `calc(${r.y} + ${o})`
        }
      )
    ] });
  }
  return /* @__PURE__ */ s("rect", { fill: "#000", ...r, rx: "0%" });
}
function Mc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "4", width: "630" }),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M535.828 2H626C627.105 2 628 2.89543 628 4V93.8462M94.1718 2H4C2.89543 2 2 2.89543 2 4V93.8462M2 308.154V398C2 399.105 2.89543 400 4 400H94.1718M628 308.154V398C628 399.105 627.105 400 626 400H535.828",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "4"
          }
        )
      ]
    }
  );
}
const Ec = () => /* @__PURE__ */ s(
  "svg",
  {
    fill: "none",
    height: "404",
    preserveAspectRatio: "none",
    viewBox: "0 0 632 404",
    width: "632",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "17", width: "630", x: "1", y: "1" }),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: "4"
        }
      )
    ]
  }
);
function Ic() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("mask", { fill: "white", id: "path-2-inside-1_1_3694", children: /* @__PURE__ */ s("rect", { height: "402", rx: "2", width: "630" }) }),
        /* @__PURE__ */ s(
          "rect",
          {
            height: "402",
            mask: "url(#path-2-inside-1_1_3694)",
            rx: "2",
            stroke: "currentColor",
            strokeDasharray: "14 14",
            strokeLinecap: "square",
            strokeWidth: "8",
            width: "630"
          }
        )
      ]
    }
  );
}
function Oc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "16", width: "630" }),
        /* @__PURE__ */ s(
          "rect",
          {
            height: "398",
            rx: "14",
            stroke: "currentColor",
            strokeDasharray: "14 14",
            strokeLinecap: "square",
            strokeWidth: "4",
            width: "626",
            x: "2",
            y: "2"
          }
        )
      ]
    }
  );
}
function kc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ s(
        "rect",
        {
          height: "398",
          stroke: "currentColor",
          strokeDasharray: "1 12 1 12",
          strokeLinecap: "square",
          strokeWidth: "4",
          width: "626",
          x: "2",
          y: "2"
        }
      )
    }
  );
}
function Rc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ s(
        "rect",
        {
          height: "398",
          rx: "14",
          stroke: "currentColor",
          strokeDasharray: "1 12 1 12",
          strokeLinecap: "square",
          strokeWidth: "4",
          width: "626",
          x: "2",
          y: "2"
        }
      )
    }
  );
}
function Nc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "404",
      preserveAspectRatio: "none",
      viewBox: "0 0 632 404",
      width: "632",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "17", width: "630", x: "1", y: "1" }),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ s("rect", { height: "208.731", rx: "4", stroke: "currentColor", strokeWidth: "2", width: "170.061", x: "35.7852", y: "97.6345" })
      ]
    }
  );
}
function Dc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "4", width: "630" }),
        /* @__PURE__ */ s("mask", { fill: "white", id: "path-2-inside-1_1_3696", children: /* @__PURE__ */ s("rect", { height: "402", rx: "2", width: "630" }) }),
        /* @__PURE__ */ s(
          "rect",
          {
            height: "402",
            mask: "url(#path-2-inside-1_1_3696)",
            rx: "2",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "8",
            width: "630"
          }
        )
      ]
    }
  );
}
function Tc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s("rect", { fill: "white", height: "402", opacity: "0.1", rx: "16", width: "630" }),
        /* @__PURE__ */ s("rect", { height: "398", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "626", x: "2", y: "2" })
      ]
    }
  );
}
function Ac() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "4"
          }
        )
      ]
    }
  );
}
function Pc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "402",
      preserveAspectRatio: "none",
      viewBox: "0 0 630 402",
      width: "630",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: "M16 0H614C622.8 0 630 7.2 630 16V386C630 394.8 622.8 402 614 402H16C7.2 402 0 394.8 0 386V16C0 7.2 7.2 0 16 0Z",
            fill: "none",
            opacity: "0.1"
          }
        ),
        /* @__PURE__ */ s("path", { d: "M16 400C8.3 400 2 393.7 2 386V249.4H628V386C628 393.7 621.7 400 614 400H16Z", fill: "none" }),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M48.6001 296V292.9L42.4001 290.8L41.6001 290.5L42.4001 290.2L48.6001 288.1V285L38.6001 289.2V291.7L48.6001 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M67.3001 296V292.9L61.1 290.8L60.3 290.5L61.1 290.2L67.3001 288.1V285L57.3 289.2V291.7L67.3001 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M86.1001 296V292.9L79.9001 290.8L79.1001 290.5L79.9001 290.2L86.1001 288.1V285L76.1001 289.2V291.7L86.1001 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M104.8 296V292.9L98.6 290.8L97.8 290.5L98.6 290.2L104.8 288.1V285L94.8 289.2V291.7L104.8 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M123.5 296V292.9L117.3 290.8L116.5 290.5L117.3 290.2L123.5 288.1V285L113.5 289.2V291.7L123.5 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M142.2 296V292.9L136 290.8L135.2 290.5L136 290.2L142.2 288.1V285L132.2 289.2V291.7L142.2 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M160.9 296V292.9L154.7 290.8L153.9 290.5L154.7 290.2L160.9 288.1V285L150.9 289.2V291.7L160.9 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M179.6 296V292.9L173.4 290.8L172.6 290.5L173.4 290.2L179.6 288.1V285L169.6 289.2V291.7L179.6 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M198.3 296V292.9L192.1 290.8L191.3 290.5L192.1 290.2L198.3 288.1V285L188.3 289.2V291.7L198.3 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M217.1 296V292.9L210.9 290.8L210.1 290.5L210.9 290.2L217.1 288.1V285L207.1 289.2V291.7L217.1 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M235.8 296V292.9L229.6 290.8L228.8 290.5L229.6 290.2L235.8 288.1V285L225.8 289.2V291.7L235.8 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M254.5 296V292.9L248.3 290.8L247.5 290.5L248.3 290.2L254.5 288.1V285L244.5 289.2V291.7L254.5 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M273.2 296V292.9L267 290.8L266.2 290.5L267 290.2L273.2 288.1V285L263.2 289.2V291.7L273.2 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M291.9 296V292.9L285.7 290.8L284.9 290.5L285.7 290.2L291.9 288.1V285L281.9 289.2V291.7L291.9 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M310.6 296V292.9L304.4 290.8L303.6 290.5L304.4 290.2L310.6 288.1V285L300.6 289.2V291.7L310.6 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M329.3 296V292.9L323.1 290.8L322.3 290.5L323.1 290.2L329.3 288.1V285L319.3 289.2V291.7L329.3 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M348.1 296V292.9L341.9 290.8L341.1 290.5L341.9 290.2L348.1 288.1V285L338.1 289.2V291.7L348.1 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M366.8 296V292.9L360.6 290.8L359.8 290.5L360.6 290.2L366.8 288.1V285L356.8 289.2V291.7L366.8 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M385.5 296V292.9L379.3 290.8L378.5 290.5L379.3 290.2L385.5 288.1V285L375.5 289.2V291.7L385.5 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M404.2 296V292.9L398 290.8L397.2 290.5L398 290.2L404.2 288.1V285L394.2 289.2V291.7L404.2 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M422.9 296V292.9L416.7 290.8L415.9 290.5L416.7 290.2L422.9 288.1V285L412.9 289.2V291.7L422.9 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M441.6 296V292.9L435.4 290.8L434.6 290.5L435.4 290.2L441.6 288.1V285L431.6 289.2V291.7L441.6 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M460.3 296V292.9L454.1 290.8L453.3 290.5L454.1 290.2L460.3 288.1V285L450.3 289.2V291.7L460.3 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M479.1 296V292.9L472.9 290.8L472.1 290.5L472.9 290.2L479.1 288.1V285L469.1 289.2V291.7L479.1 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M497.8 296V292.9L491.6 290.8L490.8 290.5L491.6 290.2L497.8 288.1V285L487.8 289.2V291.7L497.8 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M516.5 296V292.9L510.3 290.8L509.5 290.5L510.3 290.2L516.5 288.1V285L506.5 289.2V291.7L516.5 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M535.2 296V292.9L529 290.8L528.2 290.5L529 290.2L535.2 288.1V285L525.2 289.2V291.7L535.2 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M553.9 296V292.9L547.7 290.8L546.9 290.5L547.7 290.2L553.9 288.1V285L543.9 289.2V291.7L553.9 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M572.6 296V292.9L566.4 290.8L565.6 290.5L566.4 290.2L572.6 288.1V285L562.6 289.2V291.7L572.6 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M591.3 296V292.9L585.1 290.8L584.3 290.5L585.1 290.2L591.3 288.1V285L581.3 289.2V291.7L591.3 296Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M48.6001 326.9V323.8L42.4001 321.7L41.6001 321.4L42.4001 321.1L48.6001 319V315.9L38.6001 320.1V322.6L48.6001 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M67.3001 326.9V323.8L61.1 321.7L60.3 321.4L61.1 321.1L67.3001 319V315.9L57.3 320.1V322.6L67.3001 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M86.1001 326.9V323.8L79.9001 321.7L79.1001 321.4L79.9001 321.1L86.1001 319V315.9L76.1001 320.1V322.6L86.1001 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M104.8 326.9V323.8L98.6 321.7L97.8 321.4L98.6 321.1L104.8 319V315.9L94.8 320.1V322.6L104.8 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M123.5 326.9V323.8L117.3 321.7L116.5 321.4L117.3 321.1L123.5 319V315.9L113.5 320.1V322.6L123.5 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M142.2 326.9V323.8L136 321.7L135.2 321.4L136 321.1L142.2 319V315.9L132.2 320.1V322.6L142.2 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M160.9 326.9V323.8L154.7 321.7L153.9 321.4L154.7 321.1L160.9 319V315.9L150.9 320.1V322.6L160.9 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M179.6 326.9V323.8L173.4 321.7L172.6 321.4L173.4 321.1L179.6 319V315.9L169.6 320.1V322.6L179.6 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M198.3 326.9V323.8L192.1 321.7L191.3 321.4L192.1 321.1L198.3 319V315.9L188.3 320.1V322.6L198.3 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M217.1 326.9V323.8L210.9 321.7L210.1 321.4L210.9 321.1L217.1 319V315.9L207.1 320.1V322.6L217.1 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M235.8 326.9V323.8L229.6 321.7L228.8 321.4L229.6 321.1L235.8 319V315.9L225.8 320.1V322.6L235.8 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M254.5 326.9V323.8L248.3 321.7L247.5 321.4L248.3 321.1L254.5 319V315.9L244.5 320.1V322.6L254.5 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M273.2 326.9V323.8L267 321.7L266.2 321.4L267 321.1L273.2 319V315.9L263.2 320.1V322.6L273.2 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M291.9 326.9V323.8L285.7 321.7L284.9 321.4L285.7 321.1L291.9 319V315.9L281.9 320.1V322.6L291.9 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M310.6 326.9V323.8L304.4 321.7L303.6 321.4L304.4 321.1L310.6 319V315.9L300.6 320.1V322.6L310.6 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M329.3 326.9V323.8L323.1 321.7L322.3 321.4L323.1 321.1L329.3 319V315.9L319.3 320.1V322.6L329.3 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M348.1 326.9V323.8L341.9 321.7L341.1 321.4L341.9 321.1L348.1 319V315.9L338.1 320.1V322.6L348.1 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M366.8 326.9V323.8L360.6 321.7L359.8 321.4L360.6 321.1L366.8 319V315.9L356.8 320.1V322.6L366.8 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M385.5 326.9V323.8L379.3 321.7L378.5 321.4L379.3 321.1L385.5 319V315.9L375.5 320.1V322.6L385.5 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M404.2 326.9V323.8L398 321.7L397.2 321.4L398 321.1L404.2 319V315.9L394.2 320.1V322.6L404.2 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M422.9 326.9V323.8L416.7 321.7L415.9 321.4L416.7 321.1L422.9 319V315.9L412.9 320.1V322.6L422.9 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M441.6 326.9V323.8L435.4 321.7L434.6 321.4L435.4 321.1L441.6 319V315.9L431.6 320.1V322.6L441.6 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M460.3 326.9V323.8L454.1 321.7L453.3 321.4L454.1 321.1L460.3 319V315.9L450.3 320.1V322.6L460.3 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M479.1 326.9V323.8L472.9 321.7L472.1 321.4L472.9 321.1L479.1 319V315.9L469.1 320.1V322.6L479.1 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M497.8 326.9V323.8L491.6 321.7L490.8 321.4L491.6 321.1L497.8 319V315.9L487.8 320.1V322.6L497.8 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M516.5 326.9V323.8L510.3 321.7L509.5 321.4L510.3 321.1L516.5 319V315.9L506.5 320.1V322.6L516.5 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M535.2 326.9V323.8L529 321.7L528.2 321.4L529 321.1L535.2 319V315.9L525.2 320.1V322.6L535.2 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M553.9 326.9V323.8L547.7 321.7L546.9 321.4L547.7 321.1L553.9 319V315.9L543.9 320.1V322.6L553.9 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M572.6 326.9V323.8L566.4 321.7L565.6 321.4L566.4 321.1L572.6 319V315.9L562.6 320.1V322.6L572.6 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M591.3 326.9V323.8L585.1 321.7L584.3 321.4L585.1 321.1L591.3 319V315.9L581.3 320.1V322.6L591.3 326.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M48.6001 357.9V354.8L42.4001 352.7L41.6001 352.4L42.4001 352.1L48.6001 350V347L38.6001 351.2V353.7L48.6001 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M67.3001 357.9V354.8L61.1 352.7L60.3 352.4L61.1 352.1L67.3001 350V347L57.3 351.2V353.7L67.3001 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M86.1001 357.9V354.8L79.9001 352.7L79.1001 352.4L79.9001 352.1L86.1001 350V347L76.1001 351.2V353.7L86.1001 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M104.8 357.9V354.8L98.6 352.7L97.8 352.4L98.6 352.1L104.8 350V347L94.8 351.2V353.7L104.8 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M123.5 357.9V354.8L117.3 352.7L116.5 352.4L117.3 352.1L123.5 350V347L113.5 351.2V353.7L123.5 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M142.2 357.9V354.8L136 352.7L135.2 352.4L136 352.1L142.2 350V347L132.2 351.2V353.7L142.2 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M160.9 357.9V354.8L154.7 352.7L153.9 352.4L154.7 352.1L160.9 350V347L150.9 351.2V353.7L160.9 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M179.6 357.9V354.8L173.4 352.7L172.6 352.4L173.4 352.1L179.6 350V347L169.6 351.2V353.7L179.6 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M198.3 357.9V354.8L192.1 352.7L191.3 352.4L192.1 352.1L198.3 350V347L188.3 351.2V353.7L198.3 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M217.1 357.9V354.8L210.9 352.7L210.1 352.4L210.9 352.1L217.1 350V347L207.1 351.2V353.7L217.1 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M235.8 357.9V354.8L229.6 352.7L228.8 352.4L229.6 352.1L235.8 350V347L225.8 351.2V353.7L235.8 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M254.5 357.9V354.8L248.3 352.7L247.5 352.4L248.3 352.1L254.5 350V347L244.5 351.2V353.7L254.5 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M273.2 357.9V354.8L267 352.7L266.2 352.4L267 352.1L273.2 350V347L263.2 351.2V353.7L273.2 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M291.9 357.9V354.8L285.7 352.7L284.9 352.4L285.7 352.1L291.9 350V347L281.9 351.2V353.7L291.9 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M310.6 357.9V354.8L304.4 352.7L303.6 352.4L304.4 352.1L310.6 350V347L300.6 351.2V353.7L310.6 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M329.3 357.9V354.8L323.1 352.7L322.3 352.4L323.1 352.1L329.3 350V347L319.3 351.2V353.7L329.3 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M348.1 357.9V354.8L341.9 352.7L341.1 352.4L341.9 352.1L348.1 350V347L338.1 351.2V353.7L348.1 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M366.8 357.9V354.8L360.6 352.7L359.8 352.4L360.6 352.1L366.8 350V347L356.8 351.2V353.7L366.8 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M385.5 357.9V354.8L379.3 352.7L378.5 352.4L379.3 352.1L385.5 350V347L375.5 351.2V353.7L385.5 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M404.2 357.9V354.8L398 352.7L397.2 352.4L398 352.1L404.2 350V347L394.2 351.2V353.7L404.2 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M422.9 357.9V354.8L416.7 352.7L415.9 352.4L416.7 352.1L422.9 350V347L412.9 351.2V353.7L422.9 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M441.6 357.9V354.8L435.4 352.7L434.6 352.4L435.4 352.1L441.6 350V347L431.6 351.2V353.7L441.6 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M460.3 357.9V354.8L454.1 352.7L453.3 352.4L454.1 352.1L460.3 350V347L450.3 351.2V353.7L460.3 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M479.1 357.9V354.8L472.9 352.7L472.1 352.4L472.9 352.1L479.1 350V347L469.1 351.2V353.7L479.1 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M497.8 357.9V354.8L491.6 352.7L490.8 352.4L491.6 352.1L497.8 350V347L487.8 351.2V353.7L497.8 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M516.5 357.9V354.8L510.3 352.7L509.5 352.4L510.3 352.1L516.5 350V347L506.5 351.2V353.7L516.5 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M535.2 357.9V354.8L529 352.7L528.2 352.4L529 352.1L535.2 350V347L525.2 351.2V353.7L535.2 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M553.9 357.9V354.8L547.7 352.7L546.9 352.4L547.7 352.1L553.9 350V347L543.9 351.2V353.7L553.9 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M572.6 357.9V354.8L566.4 352.7L565.6 352.4L566.4 352.1L572.6 350V347L562.6 351.2V353.7L572.6 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M591.3 357.9V354.8L585.1 352.7L584.3 352.4L585.1 352.1L591.3 350V347L581.3 351.2V353.7L591.3 357.9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "4"
          }
        )
      ]
    }
  );
}
function Zc() {
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: "none",
      height: "114",
      preserveAspectRatio: "none",
      viewBox: "0 0 163 114",
      width: "163",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
            stroke: "currentColor",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ s("path", { d: "M1 85H162", stroke: "currentColor" }),
        /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s(
          "filter",
          {
            colorInterpolationFilters: "sRGB",
            filterUnits: "userSpaceOnUse",
            height: "18.8096",
            id: "filter0_d",
            width: "151",
            x: "6",
            y: "93",
            children: [
              /* @__PURE__ */ s("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ s(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  result: "hardAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }
              ),
              /* @__PURE__ */ s("feOffset", { dy: "4" }),
              /* @__PURE__ */ s("feGaussianBlur", { stdDeviation: "2" }),
              /* @__PURE__ */ s("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0" }),
              /* @__PURE__ */ s("feBlend", { in2: "BackgroundImageFix", mode: "darken", result: "effect1_dropShadow" }),
              /* @__PURE__ */ s("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", mode: "normal", result: "shape" })
            ]
          }
        ) })
      ]
    }
  );
}
const Hc = j.div`
  z-index: 1;
  position: absolute;
  top: ${(t) => t.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(t) => (1 - t.$placeholderRectangle.shiftY - t.$placeholderRectangle.height) * 100}%;
  left: ${(t) => t.$placeholderRectangle.shiftX * 100}%;
  right: ${(t) => (1 - t.$placeholderRectangle.shiftX - t.$placeholderRectangle.width) * 100}%;
  color: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.placeholderColorSuccess}` : `${t.theme.colors.placeholderColor}`};
  transform: scale(${(t) => t.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  svg {
    width: 100%;
    height: 100%;
  }
`, Bc = ({
  children: t,
  className: e,
  isInCandidateSelection: r,
  onAnimationEnd: n,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ s(
  Hc,
  {
    $isInCandidateSelection: r,
    $placeholderRectangle: o,
    $scale: i,
    className: e,
    onAnimationEnd: n,
    children: t
  }
), Uc = {
  [F.ID_CORNERS]: /* @__PURE__ */ s(Mc, {}),
  [F.ID_DASH]: /* @__PURE__ */ s(Ic, {}),
  [F.ID_DOT]: /* @__PURE__ */ s(kc, {}),
  [F.ID_SOLID]: /* @__PURE__ */ s(Dc, {}),
  [F.ID_PHOTO_ROUNDED]: /* @__PURE__ */ s(Nc, {}),
  [F.ID_CORNERS_ROUNDED]: /* @__PURE__ */ s(Ec, {}),
  [F.ID_DASH_ROUNDED]: /* @__PURE__ */ s(Oc, {}),
  [F.ID_DOT_ROUNDED]: /* @__PURE__ */ s(Rc, {}),
  [F.ID_SOLID_ROUNDED]: /* @__PURE__ */ s(Tc, {}),
  [F.ID_SOLID_ROUNDED_BACK]: /* @__PURE__ */ s(Ac, {}),
  [F.PASSPORT_SOLID_BACK]: /* @__PURE__ */ s(Pc, {}),
  [F.PASSPORT_SOLID_BACK_BLANK]: /* @__PURE__ */ s(Zc, {})
};
function Wc({ backdropHeight: t, backdropWidth: e, placeholderRectangle: r, ...n }) {
  const { placeholder: o } = te(), i = o.toLowerCase().includes("passport"), c = o.toLowerCase().includes("rounded");
  return /* @__PURE__ */ s(Z, { children: [
    /* @__PURE__ */ s(vo, { height: t, width: e, children: /* @__PURE__ */ s(
      xc,
      {
        height: `${r.height * 100}%`,
        isPassport: i,
        isRounded: c,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ s(Bc, { placeholderRectangle: r, ...n, children: Uc[o] })
  ] });
}
const Fc = () => {
  const [t, e] = K(), [r, n] = K(!1), o = pt(
    (h) => {
      e(h?.detail?.cameraResolution);
      const p = h?.detail?.isMirroring;
      p !== void 0 && n(p);
    },
    [e]
  );
  wt(_t.CAMERA_PROPS_CHANGED, o);
  const [i, c] = K({
    code: B.DOCUMENT_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), a = pt(
    (h) => {
      c({
        code: h?.detail?.instructionCode,
        isEscalated: h?.detail?.isEscalated ?? !1
      });
    },
    [c]
  );
  wt(_t.INSTRUCTION_CHANGED, a);
  const [d, l] = K(U.LOADING), [f, L] = K(), u = pt(
    (h) => {
      l(h.detail?.appState);
      const p = h?.detail?.error;
      p && L(p);
    },
    [l, L]
  );
  return wt(_t.STATE_CHANGED, u), {
    cameraResolution: t,
    appState: d,
    error: f,
    instruction: i,
    isMirroring: r
  };
};
function jc() {
  const { appState: t, cameraResolution: e, error: r, instruction: n, isMirroring: o } = Fc(), i = n.code === B.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: c },
    escalatedInstructions: a,
    instructions: d
  } = te(), l = Ns({
    escalatedInstructions: a,
    instructions: d,
    currentInstruction: n
  });
  return t === U.ERROR ? /* @__PURE__ */ s(Co, { text: r?.message }) : t === U.RUNNING && e ? /* @__PURE__ */ s(Z, { children: [
    c && /* @__PURE__ */ s(bc, { cameraResolution: e, isImageMirror: o }),
    /* @__PURE__ */ s(
      Wc,
      {
        backdropHeight: e.height,
        backdropWidth: e.width,
        isInCandidateSelection: i,
        placeholderRectangle: rc(e)
      }
    ),
    l && /* @__PURE__ */ s(Cc, { cssTop: 50, isInCandidateSelection: i, children: l }),
    /* @__PURE__ */ s(
      fc,
      {
        customControlEvent: _t.CONTROL,
        isSwitchCameraDisabled: i
      }
    )
  ] }) : /* @__PURE__ */ s(
    $c,
    {
      cameraHeight: e?.height,
      cameraWidth: e?.width,
      isBackdrop: !0,
      state: t
    }
  );
}
function Gc(t) {
  const e = { ...Vs, ...t?.instructions }, r = {
    ...$s,
    ...t?.escalatedInstructions
  }, n = {
    [U.LOADING]: {
      ...He.loading,
      ...t?.appStateInstructions?.loading
    },
    [U.WAITING]: {
      ...He.waiting,
      ...t?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [U.BLURRED]: {
      ...He.loading,
      ...t?.appStateInstructions?.loading
    }
  }, o = Ps(t?.styling?.theme), i = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? Ms,
    theme: o
  }, c = {
    showDetectionLayer: t?.control?.showDetectionLayer ?? !1,
    showCameraButtons: t?.control?.showCameraButtons ?? !1
  }, a = t?.placeholder ?? xs;
  return {
    ...t,
    instructions: e,
    appStateInstructions: n,
    placeholder: a,
    escalatedInstructions: r,
    styling: i,
    control: c
  };
}
const zc = ({ configuration: t }) => {
  const e = Ks(_t.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ s(
    Gs,
    {
      uiConfiguration: Gc(t),
      videoElementSize: e,
      children: /* @__PURE__ */ s(jc, {})
    }
  );
};
ko(zc, "x-dot-document-auto-capture-ui", ["configuration"]);
