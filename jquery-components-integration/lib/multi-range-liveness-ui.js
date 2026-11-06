var Xt, C, lr, lt, wn, ur, _r, Ae, oe, Gt, fr, nn, Be, Ge, hr, he = {}, de = [], $o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Kt = Array.isArray;
function tt(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function rn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function B(t, e, n) {
  var r, o, i, s = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Xt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return jt(t, s, r, o, null);
}
function jt(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++lr, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Eo() {
  return { current: null };
}
function W(t) {
  return t.children;
}
function X(t, e) {
  this.props = t, this.context = e;
}
function Ct(t, e) {
  if (e == null) return t.__ ? Ct(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Ct(t) : null;
}
function wo(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], o = [], i = tt({}, e);
    i.__v = e.__v + 1, C.vnode && C.vnode(i), on(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? Ct(e), !!(32 & e.__u), o), i.__v = e.__v, i.__.__k[i.__i] = i, Cr(r, i, o), e.__e = e.__ = null, i.__e != n && dr(i);
  }
}
function dr(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), dr(t);
}
function je(t) {
  (!t.__d && (t.__d = !0) && lt.push(t) && !pe.__r++ || wn != C.debounceRendering) && ((wn = C.debounceRendering) || ur)(pe);
}
function pe() {
  try {
    for (var t, e = 1; lt.length; ) lt.length > e && lt.sort(_r), t = lt.shift(), e = lt.length, wo(t);
  } finally {
    lt.length = pe.__r = 0;
  }
}
function pr(t, e, n, r, o, i, s, c, l, a, _) {
  var d, u, f, m, g, y, b = r && r.__k || de, p = e.length;
  for (l = Oo(n, e, b, l, p), d = 0; d < p; d++) (f = n.__k[d]) != null && (u = f.__i != -1 && b[f.__i] || he, f.__i = d, y = on(t, f, u, o, i, s, c, l, a, _), m = f.__e, f.ref && u.ref != f.ref && (u.ref && sn(u.ref, null, f), _.push(f.ref, f.__c || m, f)), g == null && m != null && (g = m), 4 & f.__u ? (l = mr(f, l, t), u.__e && (u.__e = null)) : typeof f.type == "function" && y !== void 0 ? l = y : m && (l = m.nextSibling), f.__u &= -7);
  return n.__e = g, l;
}
function Oo(t, e, n, r, o) {
  var i, s, c, l, a, _ = n.length, d = _, u = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = jt(null, s, null, null, null) : Kt(s) ? s = t.__k[i] = jt(W, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[i] = jt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, l = i + u, s.__ = t, s.__b = t.__b + 1, c = null, (a = s.__i = Io(s, n, l, d)) != -1 && (d--, (c = n[a]) && (c.__u |= 2)), c == null || c.__v == null ? (a == -1 && (o > _ ? u-- : o < _ && u++), typeof s.type != "function" && (s.__u |= 4)) : a != l && (a == l - 1 ? u-- : a == l + 1 ? u++ : (a > l ? u-- : u++, s.__u |= 4))) : t.__k[i] = null;
  if (d) for (i = 0; i < _; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = Ct(c)), vr(c, c));
  return r;
}
function mr(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = mr(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Ct(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ot(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Kt(t) ? t.some(function(n) {
    ot(n, e);
  }) : e.push(t)), e;
}
function Io(t, e, n, r) {
  var o, i, s, c = t.key, l = t.type, a = e[n], _ = a != null && (2 & a.__u) == 0;
  if (a === null && c == null || _ && c == a.key && l == a.type) return n;
  if (r > (_ ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < e.length; ) if ((a = e[s = o >= 0 ? o-- : i++]) != null && (2 & a.__u) == 0 && c == a.key && l == a.type) return s;
  }
  return -1;
}
function On(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || $o.test(e) ? n : n + "px";
}
function ne(t, e, n, r, o) {
  var i, s;
  t: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || On(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || On(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(fr, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[Gt] = r[Gt] : (n[Gt] = nn, t.addEventListener(e, i ? Ge : Be, i)) : t.removeEventListener(e, i ? Ge : Be, i);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break t;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function In(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[oe] == null) e[oe] = nn++;
      else if (e[oe] < n[Gt]) return;
      return n(C.event ? C.event(e) : e);
    }
  };
}
function on(t, e, n, r, o, i, s, c, l, a) {
  var _, d, u, f, m, g, y, b, p, O, P, w, N, v, $, V, L = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [c = e.__e = n.__e]), (_ = C.__b) && _(e);
  t: if (typeof L == "function") {
    d = s.length;
    try {
      if (p = e.props, O = L.prototype && L.prototype.render, P = (_ = L.contextType) && r[_.__c], w = _ ? P ? P.props.value : _.__ : r, n.__c ? b = (u = e.__c = n.__c).__ = u.__E : (O ? e.__c = u = new L(p, w) : (e.__c = u = new X(p, w), u.constructor = L, u.render = No), P && P.sub(u), u.state || (u.state = {}), u.__n = r, f = u.__d = !0, u.__h = [], u._sb = []), O && u.__s == null && (u.__s = u.state), O && L.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = tt({}, u.__s)), tt(u.__s, L.getDerivedStateFromProps(p, u.__s))), m = u.props, g = u.state, u.__v = e, f) O && L.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), O && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (O && L.getDerivedStateFromProps == null && p !== m && u.componentWillReceiveProps != null && u.componentWillReceiveProps(p, w), e.__v == n.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(p, u.__s, w) === !1) {
          e.__v != n.__v && (u.props = p, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(H) {
            H && (H.__ = e);
          }), de.push.apply(u.__h, u._sb), u._sb = [], u.__h.length && s.push(u), c = Ct(n);
          break t;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(p, u.__s, w), O && u.componentDidUpdate != null && u.__h.push(function() {
          u.componentDidUpdate(m, g, y);
        });
      }
      if (u.context = w, u.props = p, u.__P = t, u.__e = !1, N = C.__r, v = 0, O) u.state = u.__s, u.__d = !1, N && N(e), _ = u.render(u.props, u.state, u.context), de.push.apply(u.__h, u._sb), u._sb = [];
      else do
        u.__d = !1, N && N(e), _ = u.render(u.props, u.state, u.context), u.state = u.__s;
      while (u.__d && ++v < 25);
      u.state = u.__s, u.getChildContext != null && (r = tt(tt({}, r), u.getChildContext())), O && !f && u.getSnapshotBeforeUpdate != null && (y = u.getSnapshotBeforeUpdate(m, g)), $ = _ != null && _.type === W && _.key == null ? yr(_.props.children) : _, c = pr(t, Kt($) ? $ : [$], e, n, r, o, i, s, c, l, a), u.base = e.__e, e.__u &= -161, u.__h.length && s.push(u), b && (u.__E = u.__ = null);
    } catch (H) {
      if (s.length = d, e.__v = null, l || i != null) {
        if (H.then) {
          for (e.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          i != null && (i[i.indexOf(c)] = null), e.__e = c;
        } else if (i != null) for (V = i.length; V--; ) rn(i[V]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), H.then || gr(e), C.__e(H, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = Ro(n.__e, e, n, r, o, i, s, l, a);
  return (_ = C.diffed) && _(e), 128 & e.__u ? void 0 : c;
}
function gr(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(gr));
}
function Cr(t, e, n) {
  for (var r = 0; r < n.length; r++) sn(n[r], n[++r], n[++r]);
  C.__c && C.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      C.__e(i, o.__v);
    }
  });
}
function yr(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Kt(t) ? t.map(yr) : t.constructor !== void 0 ? null : tt({}, t);
}
function Ro(t, e, n, r, o, i, s, c, l) {
  var a, _, d, u, f, m, g, y = n.props || he, b = e.props, p = e.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((f = i[a]) && "setAttribute" in f == !!p && (p ? f.localName == p : f.nodeType == 3)) {
      t = f, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (p == null) return document.createTextNode(b);
    t = document.createElementNS(o, p, b.is && b), c && (C.__m && C.__m(e, i), c = !1), i = null;
  }
  if (p == null) y === b || c && t.data == b || (t.data = b);
  else {
    if (i = p == "textarea" && b.defaultValue != null ? null : i && Xt.call(t.childNodes), !c && i != null) for (y = {}, a = 0; a < t.attributes.length; a++) y[(f = t.attributes[a]).name] = f.value;
    for (a in y) f = y[a], a == "dangerouslySetInnerHTML" ? d = f : a == "children" || a in b || a == "value" && "defaultValue" in b || a == "checked" && "defaultChecked" in b || ne(t, a, null, f, o);
    for (a in b) f = b[a], a == "children" ? u = f : a == "dangerouslySetInnerHTML" ? _ = f : a == "value" ? m = f : a == "checked" ? g = f : c && typeof f != "function" || y[a] === f || ne(t, a, f, y[a], o);
    if (_) c || d && (_.__html == d.__html || _.__html == t.innerHTML) || (t.innerHTML = _.__html), e.__k = [];
    else if (d && (t.innerHTML = ""), pr(e.type == "template" ? t.content : t, Kt(u) ? u : [u], e, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && Ct(n, 0), c, l), i != null) for (a = i.length; a--; ) rn(i[a]);
    c && p != "textarea" || (a = "value", p == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[a] || p == "progress" && !m || p == "option" && m != y[a]) && ne(t, a, m, y[a], o), a = "checked", g != null && g != t[a] && ne(t, a, g, y[a], o));
  }
  return t;
}
function sn(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    C.__e(o, n);
  }
}
function vr(t, e, n) {
  var r, o;
  if (C.unmount && C.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || sn(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      C.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && vr(r[o], e, n || typeof t.type != "function");
  n || rn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function No(t, e, n) {
  return this.constructor(t, n);
}
function ft(t, e, n) {
  var r, o, i, s;
  e == document && (e = document.documentElement), C.__ && C.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], on(e, t = (!r && n || e).__k = B(W, null, [t]), o || he, he, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? Xt.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), Cr(i, t, s), t.props.children = null;
}
function cn(t, e) {
  ft(t, e, cn);
}
function an(t, e, n) {
  var r, o, i, s, c = tt({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Xt.call(arguments, 2) : n), jt(t.type, c, r || t.key, o || t.ref, null);
}
function br(t) {
  function e(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[e.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(s) {
        s.__e = !0, je(s);
      });
    }, this.sub = function(i) {
      r.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), s && s.call(i);
      };
    }), n.children;
  }
  return e.__c = "__cC" + hr++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = e, e;
}
Xt = de.slice, C = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, lr = 0, X.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, n), this.props)), t && tt(n, t), t != null && this.__v && (e && this._sb.push(e), je(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), je(this));
}, X.prototype.render = W, lt = [], ur = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _r = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, pe.__r = 0, Ae = Math.random().toString(8), oe = "__d" + Ae, Gt = "__a" + Ae, fr = /(PointerCapture)$|Capture$/i, nn = 0, Be = In(!1), Ge = In(!0), hr = 0;
function me() {
  return me = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, me.apply(this, arguments);
}
function Sr(t, e) {
  if (t == null) return {};
  var n, r, o = {}, i = Object.keys(t);
  for (r = 0; r < i.length; r++) e.indexOf(n = i[r]) >= 0 || (o[n] = t[n]);
  return o;
}
var To = ["context", "children"], xo = ["useFragment"];
function Ao(t, e, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Po.call(this, r);
  }, o.prototype.attributeChangedCallback = Lo, o.prototype.disconnectedCallback = Mo, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, t.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s);
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e, o), o;
}
function ko(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = Sr(t, To);
  return an(e, n);
}
function Po(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = B(ko, me({}, this._props, { context: e.detail.context }), Er(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? cn : ft)(this._vdom, this._root);
}
function $r(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Lo(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[$r(t)] = n, this._vdom = an(this._vdom, r), ft(this._vdom, this._root);
  }
}
function Mo() {
  ft(this._vdom = null, this._root);
}
function Rn(t, e) {
  var n = this, r = t.useFragment, o = Sr(t, xo);
  return B(r ? W : "slot", me({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(s) {
      s.stopPropagation(), s.detail.context = e;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Er(t, e, n) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, s = t.attributes, c = t.childNodes;
  for (i = s.length; i--; ) s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[$r(s[i].name)] = s[i].value);
  for (i = c.length; i--; ) {
    var l = Er(c[i], null, n), a = c[i].slot;
    a ? o[a] = B(Rn, { name: a }, l) : r[i] = l;
  }
  var _ = !(!n || !n.shadow), d = e ? B(Rn, { useFragment: !_ }, r) : r;
  return !_ && e && (t.innerHTML = ""), B(e || t.nodeName.toLowerCase(), o, d);
}
var Fo = 0;
function h(t, e, n, r, o, i) {
  e || (e = {});
  var s, c, l = e;
  if ("ref" in l) for (c in l = {}, e) c == "ref" ? s = e[c] : l[c] = e[c];
  var a = { type: t, props: l, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Fo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
  return C.vnode && C.vnode(a), a;
}
const Nn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, _t = {
  DETECTION_CHANGED: "multi-range-auto-capture:detection-changed",
  CAMERA_PROPS_CHANGED: "multi-range-auto-capture:camera-props-changed",
  CONTROL: "multi-range-auto-capture:control",
  INSTRUCTION_CHANGED: "multi-range-auto-capture:instruction-changed",
  VIDEO_ELEMENT_SIZE: "multi-range-auto-capture:video-element-size",
  CHALLENGE_VALUE_CHANGED: "multi-range-auto-capture:challenge-value-changed",
  STATE_CHANGED: "multi-range-auto-capture:state-changed"
}, M = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, Tn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, j = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${Tn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Tn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, $t = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_NOT_PRESENT: "face_not_present"
}, vt = {
  ZERO: "ZERO",
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",
  FIVE: "FIVE"
};
var ht, R, ke, xn, Et = 0, wr = [], T = C, An = T.__b, kn = T.__r, Pn = T.diffed, Ln = T.__c, Mn = T.unmount, Fn = T.__;
function Rt(t, e) {
  T.__h && T.__h(R, t, Et || e), Et = 0;
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function U(t) {
  return Et = 1, ln(Nr, t);
}
function ln(t, e, n) {
  var r = Rt(ht++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Nr(void 0, e), function(c) {
    var l = r.__N ? r.__N[0] : r.__[0], a = r.t(l, c);
    l !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.__f)) {
    var o = function(c, l, a) {
      if (!r.__c.__H) return !0;
      var _ = !1, d = r.__c.props !== c;
      if (r.__c.__H.__.some(function(f) {
        if (f.__N) {
          _ = !0;
          var m = f.__[0];
          f.__ = f.__N, f.__N = void 0, m !== f.__[0] && (d = !0);
        }
      }), i) {
        var u = i.call(this, c, l, a);
        return _ ? u || d : u;
      }
      return !_ || d;
    };
    R.__f = !0;
    var i = R.shouldComponentUpdate, s = R.componentWillUpdate;
    R.componentWillUpdate = function(c, l, a) {
      if (this.__e) {
        var _ = i;
        i = void 0, o(c, l, a), i = _;
      }
      s && s.call(this, c, l, a);
    }, R.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function st(t, e) {
  var n = Rt(ht++, 3);
  !T.__s && _n(n.__H, e) && (n.__ = t, n.u = e, R.__H.__h.push(n));
}
function Nt(t, e) {
  var n = Rt(ht++, 4);
  !T.__s && _n(n.__H, e) && (n.__ = t, n.u = e, R.__h.push(n));
}
function ye(t) {
  return Et = 5, Jt(function() {
    return { current: t };
  }, []);
}
function Or(t, e, n) {
  Et = 6, Nt(function() {
    if (typeof t == "function") {
      var r = t(e());
      return function() {
        t(null), r && typeof r == "function" && r();
      };
    }
    if (t) return t.current = e(), function() {
      return t.current = null;
    };
  }, n == null ? n : n.concat(t));
}
function Jt(t, e) {
  var n = Rt(ht++, 7);
  return _n(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function K(t, e) {
  return Et = 8, Jt(function() {
    return t;
  }, e);
}
function un(t) {
  var e = R.context[t.__c], n = Rt(ht++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(R)), e.props.value) : t.__;
}
function Ir(t, e) {
  T.useDebugValue && T.useDebugValue(e ? e(t) : t);
}
function Rr() {
  var t = Rt(ht++, 11);
  if (!t.__) {
    for (var e = R.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Do() {
  for (var t; t = wr.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(ie), e.__h.some(ze), e.__h = [];
    } catch (n) {
      e.__h = [], T.__e(n, t.__v);
    }
  }
}
T.__b = function(t) {
  R = null, An && An(t);
}, T.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Fn && Fn(t, e);
}, T.__r = function(t) {
  kn && kn(t), ht = 0;
  var e = (R = t.__c).__H;
  e && (ke === R ? (e.__h = [], R.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(ie), e.__h.some(ze), e.__h = [], ht = 0)), ke = R;
}, T.diffed = function(t) {
  Pn && Pn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (wr.push(e) !== 1 && xn === T.requestAnimationFrame || ((xn = T.requestAnimationFrame) || Ho)(Do)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), ke = R = null;
}, T.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(ie), n.__h = n.__h.filter(function(r) {
        return !r.__ || ze(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], T.__e(r, n.__v);
    }
  }), Ln && Ln(t, e);
}, T.unmount = function(t) {
  Mn && Mn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      ie(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && T.__e(e, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Ho(t) {
  var e, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  Dn && (e = requestAnimationFrame(n));
}
function ie(t) {
  var e = R, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), R = e;
}
function ze(t) {
  var e = R;
  t.__c = t.__(), R = e;
}
function _n(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Nr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function We(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function xr(t, e) {
  var n = e(), r = U({ t: { __: n, u: e } }), o = r[0].t, i = r[1];
  return Nt(function() {
    o.__ = n, o.u = e, Pe(o) && i({ t: o });
  }, [t, n, e]), st(function() {
    return Pe(o) && i({ t: o }), t(function() {
      Pe(o) && i({ t: o });
    });
  }, [t]), n;
}
function Pe(t) {
  try {
    return !((e = t.__) === (n = t.u()) && (e !== 0 || 1 / e == 1 / n) || e != e && n != n);
  } catch {
    return !0;
  }
  var e, n;
}
function Ar(t) {
  t();
}
function kr(t) {
  return t;
}
function Pr() {
  return [!1, Ar];
}
var Lr = Nt;
function Ze(t, e) {
  this.props = t, this.context = e;
}
function Uo(t, e) {
  function n(o) {
    var i = this.props.ref;
    return i != o.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, o) || i != o.ref : We(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, B(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = t, r;
}
(Ze.prototype = new X()).isPureReactComponent = !0, Ze.prototype.shouldComponentUpdate = function(t, e) {
  return We(this.props, t) || We(this.state, e);
};
var Hn = C.__b;
C.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Hn && Hn(t);
};
var Bo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Go(t) {
  function e(n) {
    var r = Tr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = Bo, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Un = function(t, e) {
  return t == null ? null : ot(ot(t).map(e));
}, jo = { map: Un, forEach: Un, count: function(t) {
  return t ? ot(t).length : 0;
}, only: function(t) {
  var e = ot(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: ot }, zo = C.__e;
C.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
  }
  zo(t, e, n, r);
};
var Bn = C.unmount;
function Mr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Tr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Mr(r, e, n);
  })), t;
}
function Fr(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Fr(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
}
function se() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Dr(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function Wo(t) {
  var e, n, r, o = null;
  function i(s) {
    if (e || (e = t()).then(function(c) {
      c && (o = c.default || c), r = !0;
    }, function(c) {
      n = c, r = !0;
    }), n) throw n;
    if (!r) throw e;
    return o ? B(o, s) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Ft() {
  this.i = null, this.l = null;
}
C.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Bn && Bn(t);
}, (se.prototype = new X()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Dr(r.__v), i = !1, s = function() {
    i || r.__z || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var c = n.__P;
  n.__P = null;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Fr(a, a.__c.__P, a.__c.__O);
      }
      var _;
      for (r.setState({ __a: r.__b = null }); _ = r.o.pop(); ) _.__P = c, _.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, se.prototype.componentWillUnmount = function() {
  this.o = [];
}, se.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Mr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && B(W, null, t.fallback);
  return o && (o.__u &= -33), [B(W, null, e.__a ? null : t.children), o];
};
var Gn = function(t, e, n) {
  if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (n = t.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.i = n = n[2];
  }
};
function Zo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Vo(t) {
  var e = this, n = t.h;
  if (e.componentWillUnmount = function() {
    ft(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== n && e.componentWillUnmount(), !e.v) {
    for (var r = e.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    e.h = n, e.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, namespaceURI: n.namespaceURI, insertBefore: function(o, i) {
      this.childNodes.push(o), e.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), e.h.removeChild(o);
    } };
  }
  ft(B(Zo, { context: e.context }, t.__v), e.v);
}
function Yo(t, e) {
  var n = B(Vo, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Ft.prototype = new X()).__a = function(t) {
  var e = this, n = Dr(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Gn(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ft.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = ot(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Ft.prototype.componentDidUpdate = Ft.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Gn(t, n, e);
  });
};
var Hr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ko = /[A-Z0-9]/g, Jo = typeof document < "u", Qo = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function ti(t, e, n) {
  return e.__k == null && (e.textContent = ""), ft(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function ei(t, e, n) {
  return cn(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
X.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(X.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var jn = C.event;
C.event = function(t) {
  return jn && (t = jn(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var fn, ni = { configurable: !0, get: function() {
  return this.class;
} }, zn = C.vnode;
C.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var n = e.props, r = e.type, o = {}, i = r.indexOf("-") == -1;
    for (var s in n) {
      var c = n[s];
      if (!(s === "value" && "defaultValue" in n && c == null || Jo && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : l === "translate" && c === "no" ? c = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || Qo(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Xo.test(s) && (s = l) : l = s = "oninput" : i && qo.test(s) ? s = s.replace(Ko, "-$&").toLowerCase() : c === null && (c = void 0), l === "oninput" && o[s = l] && (s = "oninputCapture"), o[s] = c;
      }
    }
    r == "select" && (o.multiple && Array.isArray(o.value) && (o.value = ot(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), o.defaultValue != null && (o.value = ot(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ni)) : n.className && (o.class = o.className = n.className), e.props = o;
  })(t), t.$$typeof = Hr, zn && zn(t);
};
var Wn = C.__r;
C.__r = function(t) {
  Wn && Wn(t), fn = t.__c;
};
var Zn = C.diffed;
C.diffed = function(t) {
  Zn && Zn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), fn = null;
};
var ri = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return fn.__n[t.__c].props.value;
}, useCallback: K, useContext: un, useDebugValue: Ir, useDeferredValue: kr, useEffect: st, useId: Rr, useImperativeHandle: Or, useInsertionEffect: Lr, useLayoutEffect: Nt, useMemo: Jt, useReducer: ln, useRef: ye, useState: U, useSyncExternalStore: xr, useTransition: Pr } } };
function oi(t) {
  return B.bind(null, t);
}
function ve(t) {
  return !!t && t.$$typeof === Hr;
}
function ii(t) {
  return ve(t) && t.type === W;
}
function si(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function ci(t) {
  return ve(t) ? an.apply(null, arguments) : t;
}
function ai(t) {
  return !!t.__k && (ft(null, t), !0);
}
function li(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ui = function(t, e) {
  return t(e);
}, _i = function(t, e) {
  var n, r = C.debounceRendering;
  C.debounceRendering = function(i) {
    n = i;
  };
  try {
    var o = t(e);
    return n && n(), o;
  } finally {
    C.debounceRendering = r;
  }
}, fi = ve, z = { useState: U, useId: Rr, useReducer: ln, useEffect: st, useLayoutEffect: Nt, useInsertionEffect: Lr, useTransition: Pr, useDeferredValue: kr, useSyncExternalStore: xr, startTransition: Ar, useRef: ye, useImperativeHandle: Or, useMemo: Jt, useCallback: K, useContext: un, useDebugValue: Ir, version: "18.3.1", Children: jo, render: ti, hydrate: ei, unmountComponentAtNode: ai, createPortal: Yo, createElement: B, createContext: br, createFactory: oi, cloneElement: ci, createRef: Eo, Fragment: W, isValidElement: ve, isElement: fi, isFragment: ii, isMemo: si, findDOMNode: li, Component: X, PureComponent: Ze, memo: Uo, forwardRef: Go, flushSync: _i, unstable_batchedUpdates: ui, StrictMode: W, Suspense: se, SuspenseList: Ft, lazy: Wo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ri }, I = "-ms-", zt = "-moz-", E = "-webkit-", Ur = "comm", be = "rule", hn = "decl", hi = "@import", di = "@namespace", Br = "@keyframes", pi = "@layer", Gr = Math.abs, dn = String.fromCharCode, Ve = Object.assign;
function mi(t, e) {
  return k(t, 0) ^ 45 ? (((e << 2 ^ k(t, 0)) << 2 ^ k(t, 1)) << 2 ^ k(t, 2)) << 2 ^ k(t, 3) : 0;
}
function jr(t) {
  return t.trim();
}
function nt(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function S(t, e, n) {
  return t.replace(e, n);
}
function ce(t, e, n) {
  return t.indexOf(e, n);
}
function k(t, e) {
  return t.charCodeAt(e) | 0;
}
function yt(t, e, n) {
  return t.slice(e, n);
}
function q(t) {
  return t.length;
}
function zr(t) {
  return t.length;
}
function Dt(t, e) {
  return e.push(t), t;
}
function gi(t, e) {
  return t.map(e).join("");
}
function Vn(t, e) {
  return t.filter(function(n) {
    return !nt(n, e);
  });
}
var Se = 1, wt = 1, Wr = 0, Z = 0, x = 0, Tt = "";
function $e(t, e, n, r, o, i, s, c) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: Se, column: wt, length: s, return: "", siblings: c };
}
function at(t, e) {
  return Ve($e("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function bt(t) {
  for (; t.root; )
    t = at(t.root, { children: [t] });
  Dt(t, t.siblings);
}
function Ci() {
  return x;
}
function yi() {
  return x = Z > 0 ? k(Tt, --Z) : 0, wt--, x === 10 && (wt = 1, Se--), x;
}
function J() {
  return x = Z < Wr ? k(Tt, Z++) : 0, wt++, x === 10 && (wt = 1, Se++), x;
}
function ut() {
  return k(Tt, Z);
}
function ae() {
  return Z;
}
function Ee(t, e) {
  return yt(Tt, t, e);
}
function Vt(t) {
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
function vi(t) {
  return Se = wt = 1, Wr = q(Tt = t), Z = 0, [];
}
function bi(t) {
  return Tt = "", t;
}
function Le(t) {
  return jr(Ee(Z - 1, Ye(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Si(t) {
  for (; (x = ut()) && x < 33; )
    J();
  return Vt(t) > 2 || Vt(x) > 3 ? "" : " ";
}
function $i(t, e) {
  for (; --e && J() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return Ee(t, ae() + (e < 6 && ut() == 32 && J() == 32));
}
function Ye(t) {
  for (; J(); )
    switch (x) {
      // ] ) " '
      case t:
        return Z;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ye(x);
        break;
      // (
      case 40:
        t === 41 && Ye(t);
        break;
      // \
      case 92:
        J();
        break;
    }
  return Z;
}
function Ei(t, e) {
  for (; J() && t + x !== 57; )
    if (t + x === 84 && ut() === 47)
      break;
  return "/*" + Ee(e, Z - 1) + "*" + dn(t === 47 ? t : J());
}
function wi(t) {
  for (; !Vt(ut()); )
    J();
  return Ee(t, Z);
}
function Oi(t) {
  return bi(le("", null, null, null, [""], t = vi(t), 0, [0], t));
}
function le(t, e, n, r, o, i, s, c, l) {
  for (var a = 0, _ = 0, d = s, u = 0, f = 0, m = 0, g = 1, y = 1, b = 1, p = 0, O = "", P = o, w = i, N = r, v = O; y; )
    switch (m = p, p = J()) {
      // (
      case 40:
        if (m != 108 && k(v, d - 1) == 58) {
          ce(v += S(Le(p), "&", "&\f"), "&\f", Gr(a ? c[a - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        v += Le(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        v += Si(m);
        break;
      // \
      case 92:
        v += $i(ae() - 1, 7);
        continue;
      // /
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            Dt(Ii(Ei(J(), ae()), e, n, l), l), (Vt(m || 1) == 5 || Vt(ut() || 1) == 5) && q(v) && yt(v, -1, void 0) !== " " && (v += " ");
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * g:
        c[a++] = q(v) * b;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + _:
            b == -1 && (v = S(v, /\f/g, "")), f > 0 && (q(v) - d || g === 0 && m === 47) && Dt(f > 32 ? qn(v + ";", r, n, d - 1, l) : qn(S(v, " ", "") + ";", r, n, d - 2, l), l);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (Dt(N = Yn(v, e, n, a, _, o, c, O, P = [], w = [], d, i), i), p === 123)
              if (_ === 0)
                le(v, e, N, N, P, i, d, c, w);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (k(v, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (k(v, 2) === 97) break;
                  default:
                    _ = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                _ ? le(t, N, N, r && Dt(Yn(t, N, N, 0, 0, o, c, O, o, P = [], d, w), w), o, w, d, c, r ? P : w) : le(v, N, N, N, [""], w, 0, c, w);
              }
        }
        a = _ = f = 0, g = b = 1, O = v = "", d = s;
        break;
      // :
      case 58:
        d = 1 + q(v), f = m;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && yi() == 125)
            continue;
        }
        switch (v += dn(p), p * g) {
          // &
          case 38:
            b = _ > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            c[a++] = (q(v) - 1) * b, b = 1;
            break;
          // @
          case 64:
            ut() === 45 && (v += Le(J())), u = ut(), _ = d = q(O = v += wi(ae())), p++;
            break;
          // -
          case 45:
            m === 45 && q(v) == 2 && (g = 0);
        }
    }
  return i;
}
function Yn(t, e, n, r, o, i, s, c, l, a, _, d) {
  for (var u = o - 1, f = o === 0 ? i : [""], m = zr(f), g = 0, y = 0, b = 0; g < r; ++g)
    for (var p = 0, O = yt(t, u + 1, u = Gr(y = s[g])), P = t; p < m; ++p)
      (P = jr(y > 0 ? f[p] + " " + O : S(O, /&\f/g, f[p]))) && (l[b++] = P);
  return $e(t, e, n, o === 0 ? be : c, l, a, _, d);
}
function Ii(t, e, n, r) {
  return $e(t, e, n, Ur, dn(Ci()), yt(t, 2, -2), 0, r);
}
function qn(t, e, n, r, o) {
  return $e(t, e, n, hn, yt(t, 0, r), yt(t, r + 1, -1), r, o);
}
function Zr(t, e, n) {
  switch (mi(t, e)) {
    // color-adjust
    case 5103:
      return E + "print-" + t + t;
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
      return E + t + t;
    // mask-composite
    case 4855:
      return E + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return zt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + t + zt + t + I + t + t;
    // writing-mode
    case 5936:
      switch (k(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return E + t + I + S(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return E + t + I + S(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return E + t + I + S(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return E + t + I + t + t;
    // order
    case 6165:
      return E + t + I + "flex-" + t + t;
    // align-items
    case 5187:
      return E + t + S(t, /(\w+).+(:[^]+)/, E + "box-$1$2" + I + "flex-$1$2") + t;
    // align-self
    case 5443:
      return E + t + I + "flex-item-" + S(t, /flex-|-self/g, "") + (nt(t, /flex-|baseline/) ? "" : I + "grid-row-" + S(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return E + t + I + "flex-line-pack" + S(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return E + t + I + S(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return E + t + I + S(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return E + "box-" + S(t, "-grow", "") + E + t + I + S(t, "grow", "positive") + t;
    // transition
    case 4554:
      return E + S(t, /([^-])(transform)/g, "$1" + E + "$2") + t;
    // cursor
    case 6187:
      return S(S(S(t, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return S(t, /(image-set\([^]*)/, E + "$1$`$1");
    // justify-content
    case 4968:
      return S(S(t, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + I + "flex-pack:$3"), /space-between/, "justify") + E + t + t;
    // justify-self
    case 4200:
      if (!nt(t, /flex-|baseline/)) return I + "grid-column-align" + yt(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return I + S(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, nt(r.props, /grid-\w+-end/);
      }) ? ~ce(t + (n = n[e].value), "span", 0) ? t : I + S(t, "-start", "") + t + I + "grid-row-span:" + (~ce(n, "span", 0) ? nt(n, /\d+/) : +nt(n, /\d+/) - +nt(t, /\d+/)) + ";" : I + S(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return nt(r.props, /grid-\w+-start/);
      }) ? t : I + S(S(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(t, /(.+)-inline(.+)/, E + "$1$2") + t;
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
        switch (k(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (k(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return S(t, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + zt + (k(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~ce(t, "stretch", 0) ? Zr(S(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return S(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, l, a) {
        return I + o + ":" + i + a + (s ? I + o + "-span:" + (c ? l : +l - +i) + a : "") + t;
      });
    // position: sticky
    case 4949:
      if (k(t, e + 6) === 121)
        return S(t, ":", ":" + E) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (k(t, k(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return S(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + E + (k(t, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + I + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return S(t, ":", ":" + I) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function ge(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Ri(t, e, n, r) {
  switch (t.type) {
    case pi:
      if (t.children.length) break;
    case hi:
    case di:
    case hn:
      return t.return = t.return || t.value;
    case Ur:
      return "";
    case Br:
      return t.return = t.value + "{" + ge(t.children, r) + "}";
    case be:
      if (!q(t.value = t.props.join(","))) return "";
  }
  return q(n = ge(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Ni(t) {
  var e = zr(t);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < e; c++)
      s += t[c](n, r, o, i) || "";
    return s;
  };
}
function Ti(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function xi(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hn:
        t.return = Zr(t.value, t.length, n);
        return;
      case Br:
        return ge([at(t, { value: S(t.value, "@", "@" + E) })], r);
      case be:
        if (t.length)
          return gi(n = t.props, function(o) {
            switch (nt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                bt(at(t, { props: [S(o, /:(read-\w+)/, ":" + zt + "$1")] })), bt(at(t, { props: [o] })), Ve(t, { props: Vn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                bt(at(t, { props: [S(o, /:(plac\w+)/, ":" + E + "input-$1")] })), bt(at(t, { props: [S(o, /:(plac\w+)/, ":" + zt + "$1")] })), bt(at(t, { props: [S(o, /:(plac\w+)/, I + "input-$1")] })), bt(at(t, { props: [o] })), Ve(t, { props: Vn(n, r) });
                break;
            }
            return "";
          });
    }
}
var St = {};
function et(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var Me, Fe;
const Ot = typeof process < "u" && St !== void 0 && (St.REACT_APP_SC_ATTR || St.SC_ATTR) || "data-styled", Vr = "active", Yr = "data-styled-version", we = "6.6.0", pn = `/*!sc*/
`, Wt = typeof window < "u" && typeof document < "u";
if (!z.createContext) throw et(19);
function Xn(t) {
  if (typeof process < "u" && St !== void 0) {
    const e = St[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const Ai = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Fe = (Me = Xn("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Me !== void 0 ? Me : Xn("SC_DISABLE_SPEEDY")) !== null && Fe !== void 0 ? Fe : typeof process < "u" && St !== void 0 && !1), qr = "sc-keyframes-";
let ue = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), _e = 1;
const Ht = (t) => {
  if (ue.has(t)) return ue.get(t);
  for (; Ce.has(_e); ) _e++;
  const e = _e++;
  return ue.set(t, e), Ce.set(e, t), e;
}, ki = (t) => Ce.get(t), Pi = (t, e) => {
  _e = e + 1, ue.set(t, e), Ce.set(e, t);
}, mn = Object.freeze([]), It = Object.freeze({});
function Li(t, e, n = It) {
  return t.theme !== n.theme && t.theme || e || n.theme;
}
const Mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fi = /(^-|-$)/g;
function Xr(t) {
  return t.replace(Mi, "-").replace(Fi, "");
}
const Di = /(a)(d)/gi, Kn = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function gn(t) {
  let e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = Kn(e % 52) + n;
  return (Kn(e % 52) + n).replace(Di, "$1-$2");
}
const qe = 5381, mt = (t, e) => {
  let n = e.length;
  for (; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, Kr = (t) => mt(qe, t);
function Jr(t) {
  return gn(Kr(t) >>> 0);
}
function Hi(t) {
  return t.displayName || t.name || "Component";
}
function Xe(t) {
  return typeof t == "string" && !0;
}
function Ui(t) {
  return Xe(t) ? `styled.${t}` : `Styled(${Hi(t)})`;
}
const Qr = /* @__PURE__ */ Symbol.for("react.memo"), Bi = /* @__PURE__ */ Symbol.for("react.forward_ref"), Gi = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, ji = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zi = { [Bi]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [Qr]: to };
function Jn(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Qr ? to : "$$typeof" in t ? zi[t.$$typeof] : Gi;
  var e;
}
const Wi = Object.defineProperty, Zi = Object.getOwnPropertyNames, Vi = Object.getOwnPropertySymbols, Yi = Object.getOwnPropertyDescriptor, qi = Object.getPrototypeOf, Xi = Object.prototype;
function eo(t, e, n) {
  if (typeof e != "string") {
    const r = qi(e);
    r && r !== Xi && eo(t, r, n);
    const o = Zi(e).concat(Vi(e)), i = Jn(t), s = Jn(e);
    for (let c = 0; c < o.length; ++c) {
      const l = o[c];
      if (!(l in ji || n && n[l] || s && l in s || i && l in i)) {
        const a = Yi(e, l);
        try {
          Wi(t, l, a);
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
const Ki = /* @__PURE__ */ Symbol.for("react.forward_ref");
function no(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === Ki && "styledComponentId" in t;
}
function Ut(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Ke(t, e) {
  return t.join("");
}
function Yt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Je(t, e, n = !1) {
  if (!n && !Yt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (let r = 0; r < e.length; r++) t[r] = Je(t[r], e[r]);
  else if (Yt(e)) for (const r in e) t[r] = Je(t[r], e[r]);
  return t;
}
function Cn(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
const Ji = class {
  constructor(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(t) {
    if (t === this._cGroup) return this._cIndex;
    let e = this._cIndex;
    if (t > this._cGroup) for (let n = this._cGroup; n < t; n++) e += this.groupSizes[n];
    else for (let n = this._cGroup - 1; n >= t; n--) e -= this.groupSizes[n];
    return this._cGroup = t, this._cIndex = e, e;
  }
  insertRules(t, e) {
    if (t >= this.groupSizes.length) {
      const o = this.groupSizes, i = o.length;
      let s = i;
      for (; t >= s; ) if (s <<= 1, s < 0) throw et(16, `${t}`);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (let c = i; c < s; c++) this.groupSizes[c] = 0;
    }
    let n = this.indexOfGroup(t + 1), r = 0;
    for (let o = 0, i = e.length; o < i; o++) this.tag.insertRule(n, e[o]) && (this.groupSizes[t]++, n++, r++);
    r > 0 && this._cGroup > t && (this._cIndex += r);
  }
  clearGroup(t) {
    if (t < this.length) {
      const e = this.groupSizes[t], n = this.indexOfGroup(t), r = n + e;
      this.groupSizes[t] = 0;
      for (let o = n; o < r; o++) this.tag.deleteRule(n);
      e > 0 && this._cGroup > t && (this._cIndex -= e);
    }
  }
  getGroup(t) {
    let e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    const n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
    for (let i = r; i < o; i++) e += this.tag.getRule(i) + pn;
    return e;
  }
}, Qi = `style[${Ot}][${Yr}="${we}"]`, ts = new RegExp(`^${Ot}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Qn = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, Qe = (t) => {
  if (!t) return document;
  if (Qn(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (Qn(e)) return e;
  }
  return document;
}, es = (t, e, n) => {
  const r = n.split(",");
  let o;
  for (let i = 0, s = r.length; i < s; i++) (o = r[i]) && t.registerName(e, o);
}, ns = (t, e) => {
  var n;
  const r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(pn), o = [];
  for (let i = 0, s = r.length; i < s; i++) {
    const c = r[i].trim();
    if (!c) continue;
    const l = c.match(ts);
    if (l) {
      const a = 0 | parseInt(l[1], 10), _ = l[2];
      a !== 0 && (Pi(_, a), es(t, _, l[3]), t.getTag().insertRules(a, o)), o.length = 0;
    } else o.push(c);
  }
}, De = (t) => {
  const n = Qe(t.options.target).querySelectorAll(Qi);
  for (let r = 0, o = n.length; r < o; r++) {
    const i = n[r];
    i && i.getAttribute(Ot) !== Vr && (ns(t, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
let Lt = !1;
function rs() {
  if (Lt !== !1) return Lt;
  if (typeof document < "u") {
    const t = document.head.querySelector('meta[property="csp-nonce"]');
    if (t) return Lt = t.nonce || t.getAttribute("content") || void 0;
    const e = document.head.querySelector('meta[name="sc-nonce"]');
    if (e) return Lt = e.getAttribute("content") || void 0;
  }
  return Lt = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const ro = (t, e) => {
  if (typeof document > "u") throw et(20);
  const n = document.head, r = t || n, o = document.createElement("style"), i = ((l) => {
    const a = Array.from(l.querySelectorAll(`style[${Ot}]`));
    return a[a.length - 1];
  })(r), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(Ot, Vr), o.setAttribute(Yr, we);
  const c = e || rs();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, os = class {
  constructor(t, e) {
    this.element = ro(t, e), this.element.appendChild(document.createTextNode("")), this.sheet = ((n) => {
      var r;
      if (n.sheet) return n.sheet;
      const o = (r = n.getRootNode().styleSheets) !== null && r !== void 0 ? r : document.styleSheets;
      for (let i = 0, s = o.length; i < s; i++) {
        const c = o[i];
        if (c.ownerNode === n) return c;
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
    this.element = ro(t, e), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(t, e) {
    if (t <= this.length && t >= 0) {
      const n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
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
let tr = Wt;
const ss = { isServer: !Wt, useCSSOMInjection: !Ai };
class Oe {
  static registerId(e) {
    return Ht(e);
  }
  constructor(e = It, n = {}, r) {
    this.options = Object.assign(Object.assign({}, ss), e), this.gs = n, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(r), this.server = !!e.isServer, !this.server && Wt && tr && (tr = !1, De(this)), Cn(this, () => ((o) => {
      const i = o.getTag(), { length: s } = i;
      let c = "";
      for (let l = 0; l < s; l++) {
        const a = ki(l);
        if (a === void 0) continue;
        const _ = o.names.get(a);
        if (_ === void 0 || !_.size) continue;
        const d = i.getGroup(l);
        if (d.length === 0) continue;
        const u = Ot + ".g" + l + '[id="' + a + '"]';
        let f = "";
        for (const m of _) m.length > 0 && (f += m + ",");
        c += d + u + '{content:"' + f + '"}' + pn;
      }
      return c;
    })(this));
  }
  rehydrate() {
    !this.server && Wt && De(this);
  }
  reconstructWithOptions(e, n = !0) {
    const r = new Oe(Object.assign(Object.assign({}, this.options), e), this.gs, n && this.names || void 0);
    return r.keyframeIds = new Set(this.keyframeIds), !this.server && Wt && e.target !== this.options.target && Qe(this.options.target) !== Qe(e.target) && De(r), r;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ useCSSOMInjection: n, target: r, nonce: o }) => n ? new os(r, o) : new is(r, o))(this.options), new Ji(e)));
    var e;
  }
  hasNameForId(e, n) {
    var r, o;
    return (o = (r = this.names.get(e)) === null || r === void 0 ? void 0 : r.has(n)) !== null && o !== void 0 && o;
  }
  registerName(e, n) {
    Ht(e), e.startsWith(qr) && this.keyframeIds.add(e);
    const r = this.names.get(e);
    r ? r.add(n) : this.names.set(e, /* @__PURE__ */ new Set([n]));
  }
  insertRules(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Ht(e), r);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Ht(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const oo = /* @__PURE__ */ new WeakSet(), cs = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function as(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in cs || t.startsWith("--") ? String(e).trim() : e + "px";
}
const pt = 47;
function er(t) {
  if (t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45) return t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    e += r >= 65 && r <= 90 ? "-" + String.fromCharCode(r + 32) : t[n];
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
const io = /* @__PURE__ */ Symbol.for("sc-keyframes");
function ls(t) {
  return typeof t == "object" && t !== null && io in t;
}
function so(t) {
  return Qt(t) && !(t.prototype && t.prototype.isReactComponent);
}
const co = (t) => t == null || t === !1 || t === "", us = /* @__PURE__ */ Symbol.for("react.client.reference");
function nr(t) {
  return t.$$typeof === us;
}
function ao(t, e) {
  for (const n in t) {
    const r = t[n];
    t.hasOwnProperty(n) && !co(r) && (Array.isArray(r) && oo.has(r) || Qt(r) ? e.push(er(n) + ":", r, ";") : Yt(r) ? (e.push(n + " {"), ao(r, e), e.push("}")) : e.push(er(n) + ": " + as(n, r) + ";"));
  }
}
function gt(t, e, n, r, o = []) {
  if (co(t)) return o;
  const i = typeof t;
  if (i === "string") return o.push(t), o;
  if (i === "function") {
    if (nr(t)) return o;
    if (so(t) && e) {
      const s = t(e);
      return gt(s, e, n, r, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) gt(t[s], e, n, r, o);
    return o;
  }
  return no(t) ? (o.push(`.${t.styledComponentId}`), o) : ls(t) ? (n ? (t.inject(n, r), o.push(t.getName(r))) : o.push(t), o) : nr(t) ? o : Yt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (ao(t, o), o) : (o.push(t.toString()), o);
}
const _s = Kr(we);
class fs {
  constructor(e, n, r) {
    this.rules = e, this.componentId = n, this.baseHash = mt(_s, n), this.baseStyle = r, Oe.registerId(n);
  }
  generateAndInjectStyles(e, n, r) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    {
      let i = "";
      for (let s = 0; s < this.rules.length; s++) {
        const c = this.rules[s];
        if (typeof c == "string") i += c;
        else if (c) if (so(c)) {
          const l = c(e);
          typeof l == "string" ? i += l : l != null && l !== !1 && (i += Ke(gt(l, e, n, r)));
        } else i += Ke(gt(c, e, n, r));
      }
      if (i) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const s = r.hash ? r.hash + i : i;
        let c = this.dynamicNameCache.get(s);
        if (!c) {
          if (c = gn(mt(mt(this.baseHash, r.hash), i) >>> 0), this.dynamicNameCache.size >= 200) {
            const l = this.dynamicNameCache.keys().next().value;
            l !== void 0 && this.dynamicNameCache.delete(l);
          }
          this.dynamicNameCache.set(s, c);
        }
        if (!n.hasNameForId(this.componentId, c)) {
          const l = r(i, "." + c, void 0, this.componentId);
          n.insertRules(this.componentId, c, l);
        }
        o = Ut(o, c);
      }
    }
    return o;
  }
}
const hs = /&/g;
function lo(t, e) {
  let n = 0;
  for (; --e >= 0 && t.charCodeAt(e) === 92; ) n++;
  return !(1 & ~n);
}
function He(t) {
  const e = t.length;
  let n = "", r = 0, o = 0, i = 0, s = !1, c = !1;
  for (let l = 0; l < e; l++) {
    const a = t.charCodeAt(l);
    if (i !== 0 || s || a !== pt || t.charCodeAt(l + 1) !== 42) if (s) a === 42 && t.charCodeAt(l + 1) === pt && (s = !1, l++);
    else if (a !== 34 && a !== 39 || lo(t, l)) {
      if (i === 0) if (a === 123) o++;
      else if (a === 125) {
        if (o--, o < 0) {
          c = !0;
          let _ = l + 1;
          for (; _ < e; ) {
            const d = t.charCodeAt(_);
            if (d === 59 || d === 10) break;
            _++;
          }
          _ < e && t.charCodeAt(_) === 59 && _++, o = 0, l = _ - 1, r = _;
          continue;
        }
        o === 0 && (n += t.substring(r, l + 1), r = l + 1);
      } else a === 59 && o === 0 && (n += t.substring(r, l + 1), r = l + 1);
    } else i === 0 ? i = a : i === a && (i = 0);
    else s = !0, l++;
  }
  return c || o !== 0 || i !== 0 ? (r < e && o === 0 && i === 0 && (n += t.substring(r)), n) : t;
}
function uo(t, e) {
  const n = e + " ", r = "," + n;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (i.type === "rule") {
      i.value = (n + i.value).replaceAll(",", r);
      const s = i.props, c = [];
      for (let l = 0; l < s.length; l++) c[l] = n + s[l];
      i.props = c;
    }
    Array.isArray(i.children) && i.type !== "@keyframes" && uo(i.children, e);
  }
  return t;
}
function _o({ options: t = It, plugins: e = mn } = It) {
  let n, r, o;
  const i = (u, f, m) => m.startsWith(r) && m.endsWith(r) && m.replaceAll(r, "").length > 0 ? `.${n}` : u, s = e.slice();
  s.push((u) => {
    u.type === be && u.value.includes("&") && (o || (o = new RegExp(`\\${r}\\b`, "g")), u.props[0] = u.props[0].replace(hs, r).replace(o, i));
  }), t.prefix && s.push(xi), s.push(Ri);
  let c = [];
  const l = Ni(s.concat(Ti((u) => c.push(u)))), a = (u, f = "", m = "", g = "&") => {
    n = g, r = f, o = void 0;
    const y = (function(p) {
      const O = p.indexOf("//") !== -1, P = p.indexOf("}") !== -1;
      if (!O && !P) return p;
      if (!O) return He(p);
      const w = p.length;
      let N = "", v = 0, $ = 0, V = 0, L = 0, H = 0, xt = !1;
      for (; $ < w; ) {
        const G = p.charCodeAt($);
        if (G !== 34 && G !== 39 || lo(p, $)) if (V === 0) if (G === pt && $ + 1 < w && p.charCodeAt($ + 1) === 42) {
          for ($ += 2; $ + 1 < w && (p.charCodeAt($) !== 42 || p.charCodeAt($ + 1) !== pt); ) $++;
          $ += 2;
        } else if (G !== 40) if (G !== 41) if (L > 0) $++;
        else if (G === 42 && $ + 1 < w && p.charCodeAt($ + 1) === pt) N += p.substring(v, $), $ += 2, v = $, xt = !0;
        else if (G === pt && $ + 1 < w && p.charCodeAt($ + 1) === pt) {
          for (N += p.substring(v, $); $ < w && p.charCodeAt($) !== 10; ) $++;
          v = $, xt = !0;
        } else G === 123 ? H++ : G === 125 && H--, $++;
        else L > 0 && L--, $++;
        else L++, $++;
        else $++;
        else V === 0 ? V = G : V === G && (V = 0), $++;
      }
      return xt ? (v < w && (N += p.substring(v)), H === 0 ? N : He(N)) : H === 0 ? p : He(p);
    })(u);
    let b = Oi(m || f ? m + " " + f + " { " + y + " }" : y);
    return t.namespace && (b = uo(b, t.namespace)), c = [], ge(b, l), c;
  }, _ = t;
  let d = qe;
  for (let u = 0; u < e.length; u++) e[u].name || et(15), d = mt(d, e[u].name);
  return _?.namespace && (d = mt(d, _.namespace)), _?.prefix && (d = mt(d, "p")), a.hash = d !== qe ? d.toString() : "", a;
}
const ds = new Oe(), tn = _o(), yn = z.createContext({ shouldForwardProp: void 0, styleSheet: ds, stylis: tn, stylisPlugins: void 0 });
yn.Consumer;
function fo() {
  return z.useContext(yn);
}
function ps(t) {
  var e;
  const n = fo(), { styleSheet: r } = n, o = z.useMemo(() => {
    let a = r;
    return t.sheet ? a = t.sheet : t.target ? a = a.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (a = a.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, r]), i = z.useMemo(() => {
    var a;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? n.stylis : _o({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (a = t.stylisPlugins) !== null && a !== void 0 ? a : n.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, n.stylis, n.stylisPlugins]), s = "shouldForwardProp" in t ? t.shouldForwardProp : n.shouldForwardProp, c = (e = t.stylisPlugins) !== null && e !== void 0 ? e : n.stylisPlugins, l = z.useMemo(() => ({ shouldForwardProp: s, styleSheet: o, stylis: i, stylisPlugins: c }), [s, o, i, c]);
  return z.createElement(yn.Provider, { value: l }, t.children);
}
const qt = z.createContext(void 0);
qt.Consumer;
function ho() {
  const t = z.useContext(qt);
  if (!t) throw et(18);
  return t;
}
function ms(t) {
  const e = z.useContext(qt), n = z.useMemo(() => (function(r, o) {
    if (!r) throw et(14);
    if (Qt(r))
      return r(o);
    if (Array.isArray(r) || typeof r != "object") throw et(8);
    return o ? Object.assign(Object.assign({}, o), r) : r;
  })(t.theme, e), [t.theme, e]);
  return t.children ? z.createElement(qt.Provider, { value: n }, t.children) : null;
}
const Ue = {};
function gs(t, e) {
  const n = typeof t != "string" ? "sc" : Xr(t);
  Ue[n] = (Ue[n] || 0) + 1;
  const r = n + "-" + Jr(we + n + Ue[n]);
  return e ? e + "-" + r : r;
}
function Cs(t, e, n) {
  const r = no(t), o = t, i = !Xe(t), { attrs: s = mn, componentId: c = gs(e.displayName, e.parentComponentId), displayName: l = Ui(t) } = e, a = e.displayName && e.componentId ? Xr(e.displayName) + "-" + e.componentId : e.componentId || c, _ = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s;
  let { shouldForwardProp: d } = e;
  if (r && o.shouldForwardProp) {
    const g = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const y = e.shouldForwardProp;
      d = (b, p) => g(b, p) && y(b, p);
    } else d = g;
  }
  const u = new fs(n, a, r ? o.componentStyle : void 0);
  function f(g, y) {
    return (function(b, p, O) {
      const { attrs: P, componentStyle: w, defaultProps: N, foldedComponentIds: v, styledComponentId: $, target: V } = b, L = z.useContext(qt), H = fo(), xt = b.shouldForwardProp || H.shouldForwardProp, G = Li(p, L, N) || It, [At, So] = (function(Q, dt, xe) {
        const A = Object.assign(Object.assign({}, dt), { className: void 0, theme: xe });
        let kt = null;
        const ee = Q.length > 1;
        for (let ct = 0; ct < Q.length; ct++) {
          const F = Q[ct], Pt = Qt(F) ? F(ee ? Object.assign({}, A) : A) : F;
          for (const Y in Pt) Y === "className" ? A.className = Ut(A.className, Pt[Y]) : Y === "style" ? A.style = Object.assign(Object.assign({}, A.style), Pt[Y]) : Pt[Y] === void 0 ? Y in A && (A[Y] !== void 0 && (kt || (kt = [])).push(Y), A[Y] = void 0) : A[Y] = Pt[Y];
        }
        return "className" in dt && typeof dt.className == "string" && (A.className = Ut(A.className, dt.className)), [A, kt];
      })(P, p, G), $n = w.generateAndInjectStyles(At, H.styleSheet, H.stylis), te = At.as || V, En = Xe(te), Ne = (function(Q, dt, xe, A, kt, ee) {
        const ct = {};
        for (const F in Q) F[0] === "$" || F === "as" || F === "theme" && Q.theme === xe || (F === "forwardedAs" ? Q.forwardedAs !== void 0 && (ct.as = Q.forwardedAs) : Q[F] === void 0 ? F === "className" || kt || ee !== null && ee.indexOf(F) !== -1 || A && !A(F, dt) || (ct[F] = void 0) : A && !A(F, dt) || (ct[F] = Q[F]));
        return ct;
      })(At, te, G, xt, En, So);
      let Te = Ut(v, $);
      return $n && (Te += " " + $n), At.className && (Te += " " + At.className), Ne[En && te.includes("-") ? "class" : "className"] = Te, O && (Ne.ref = O), B(te, Ne);
    })(m, g, y);
  }
  f.displayName = l;
  let m = z.forwardRef(f);
  return m.attrs = _, m.componentStyle = u, m.displayName = l, m.shouldForwardProp = d, m.foldedComponentIds = r ? Ut(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = a, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(g) {
    this._foldedDefaultProps = r ? (function(y, ...b) {
      for (const p of b) Je(y, p, !0);
      return y;
    })({}, o.defaultProps, g) : g;
  } }), Cn(m, () => `.${m.styledComponentId}`), i && eo(m, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
var ys = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function rr(t, e) {
  const n = [t[0]];
  for (let r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
const or = (t) => (oo.add(t), t);
function vn(t, ...e) {
  if (Qt(t) || Yt(t)) return or(gt(rr(mn, [t, ...e])));
  const n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? gt(n) : or(gt(rr(n, e)));
}
function en(t, e, n = It) {
  if (!e) throw et(1, e);
  const r = (o, ...i) => t(e, n, vn(o, ...i));
  return r.attrs = (o) => en(t, e, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), r.withConfig = (o) => en(t, e, Object.assign(Object.assign({}, n), o)), r;
}
const po = (t) => en(Cs, t), D = po;
ys.forEach((t) => {
  D[t] = po(t);
});
var mo;
class vs {
  constructor(e, n) {
    this[mo] = !0, this.inject = (r, o = tn) => {
      const i = this.getName(o);
      if (!r.hasNameForId(this.id, i)) {
        const s = o(this.rules, i, "@keyframes");
        r.insertRules(this.id, i, s);
      }
    }, this.name = e, this.id = qr + e, this.rules = n, Ht(this.id), Cn(this, () => {
      throw et(12, String(this.name));
    });
  }
  getName(e = tn) {
    return e.hash ? this.name + gn(+e.hash >>> 0) : this.name;
  }
}
function Ie(t, ...e) {
  const n = Ke(vn(t, ...e)), r = Jr(n);
  return new vs(r, n);
}
mo = io;
const Zt = br(void 0);
Zt.displayName = "ConfigurationContext";
function Re() {
  const t = un(Zt);
  if (!t)
    throw new Error(
      `${Zt.displayName} must be used within a ${Zt.displayName} Provider`
    );
  return t;
}
function bs({
  children: t,
  configuration: e,
  videoElementSize: n
}) {
  const r = Jt(() => ({ ...e, videoElementSize: n }), [e, n]);
  return /* @__PURE__ */ h(Zt.Provider, { value: r, children: t });
}
const Ss = 2, go = 14, $s = 0.0276;
var rt = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(rt || {});
const Bt = {
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
}, re = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Es = {
  [j.CANDIDATE_SELECTION]: "Stay still…",
  [j.FACE_TOO_CLOSE]: "Move back",
  [j.FACE_TOO_FAR]: "Move closer",
  [j.FACE_CENTERING]: "Center your face",
  [j.FACE_NOT_PRESENT]: "Position your face into the circle",
  [j.SHARPNESS_TOO_LOW]: "Turn face against light",
  [j.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [j.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [j.DEVICE_PITCHED]: "Hold your phone at eye level",
  [j.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [j.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [j.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [j.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [j.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, ws = {
  ...Es,
  [$t.FACE_TOO_FAR]: "Move closer to the camera",
  [$t.FACE_TOO_CLOSE]: "Move further from the camera"
}, Os = {
  [$t.FACE_TOO_CLOSE]: "Your face should fit inside the circle",
  [$t.FACE_TOO_FAR]: "Your face should fill the circle"
}, Is = "rgba(19, 19, 19, 0.5)", Rs = 34;
function ir(t, e) {
  return Math.max(e, e + (t - 400) * $s + 2);
}
const Ns = (t, e = go) => t ? t.width < t.height ? ir(t.width, e) : ir(t.height, e) : e, Ts = (t) => t > rt.Default ? Bt[rt.Default] : t > rt.L ? Bt[rt.L] : t > rt.M ? Bt[rt.M] : Bt[rt.S], xs = (t) => t ? Ts(t.width) : Bt[rt.Default];
function As() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const n = document.createElement("link");
    n.href = t, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function ks({
  currentInstruction: t,
  escalatedInstructions: e,
  instructions: n
}) {
  const { code: r, isEscalated: o } = t;
  if (r)
    return o && e && r in e ? e[r] : n[r];
}
function Ps(t) {
  if (t)
    return {
      faceCenter: t.faceCenter,
      faceSize: t.faceSize
    };
}
function Ls(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ms = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Fs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: go
}, Mt = {
  colors: Ms,
  font: Fs
}, Ds = (t) => t ? {
  ...Mt,
  ...t,
  colors: {
    ...Mt.colors,
    ...t.colors
  },
  font: {
    ...Mt.font,
    ...t.font,
    family: Ls(t.font?.family, Mt.font.family)
  }
} : Mt, Hs = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: Ns(e, t.font.minimumSize)
  }
}), Us = ({ svgSize: t }) => /* @__PURE__ */ h("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ h(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Bs = D.div`
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
`, Gs = D.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, js = D.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, fe = ({ Icon: t, isCameraReady: e, position: n = "absolute", text: r }) => {
  const { font: o } = ho();
  return /* @__PURE__ */ h(Bs, { $isCameraReady: e, $position: n, children: /* @__PURE__ */ h(Gs, { children: [
    t ? /* @__PURE__ */ h(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ h(js, { children: r })
  ] }) });
}, Co = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ h(fe, { Icon: Us, position: "relative", text: t });
class zs extends X {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0 };
  }
  componentDidCatch(e, n) {
    console.error(e, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ h(Co, {}) : this.props.children;
  }
}
const Ws = D.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Zs({
  children: t,
  uiConfiguration: e,
  videoElementSize: n
}) {
  st(() => {
    As();
  }, []);
  const r = Hs(e.styling.theme, n);
  return /* @__PURE__ */ h(ps, { target: e.styleTarget, children: /* @__PURE__ */ h(ms, { theme: r, children: /* @__PURE__ */ h(Ws, { children: /* @__PURE__ */ h(zs, { children: /* @__PURE__ */ h(bs, { configuration: e, videoElementSize: n, children: t }) }) }) }) });
}
const Vs = 0.75, Ys = 2, qs = "dot-auto-capture-video", Xs = 2e3;
function it(t, e) {
  const n = ye(e);
  st(() => {
    n.current = e;
  }, [e]), st(
    () => {
      if (!t)
        return;
      const r = (o) => n.current(o);
      return document.addEventListener(t, r), () => {
        document.removeEventListener(t, r);
      };
    },
    [t]
    // Re-run if eventName
  );
}
function Ks(t) {
  const [e, n] = U(), r = K(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return it(t, r), Nt(() => {
    if (!e) {
      const o = document.getElementById(qs);
      o && n(o.getBoundingClientRect());
    }
  }, [e, n]), e;
}
const Js = (t) => Number.parseFloat(t.toFixed(3)), bn = (t, e) => Math.min(t, e), Qs = ({ height: t, width: e }, n) => {
  const r = bn(e, t) * n, o = (e - r) / 2, i = (t - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, tc = (t, e) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qs(t, e);
  return {
    shiftX: r / t.width,
    shiftY: o / t.height,
    width: i / t.width,
    height: n / t.height
  };
};
function ec(t, e) {
  const n = bn(e.width, e.height);
  return Js(t * n);
}
function nc(t, e = 1) {
  return tc(
    t,
    Vs * e
  );
}
function rc(t, e) {
  return ec(t, e) * Ys;
}
const oc = /* @__PURE__ */ new Map([
  [vt.ZERO, { minFaceSizeRatio: 0.13, maxFaceSizeRatio: 0.15, scale: 0.85 }],
  [vt.ONE, { minFaceSizeRatio: 0.152, maxFaceSizeRatio: 0.172, scale: 1 }],
  [vt.TWO, { minFaceSizeRatio: 0.18, maxFaceSizeRatio: 0.205, scale: 1.18 }],
  [vt.THREE, { minFaceSizeRatio: 0.215, maxFaceSizeRatio: 0.24, scale: 1.41 }],
  [vt.FOUR, { minFaceSizeRatio: 0.245, maxFaceSizeRatio: 0.275, scale: 1.61 }],
  [vt.FIVE, { minFaceSizeRatio: 0.28, maxFaceSizeRatio: 0.34, scale: 1.84 }]
]), ic = 3 / 4;
function sc(t, e) {
  const n = Math.min(t, e), r = Math.max(t, e);
  return n / r / ic;
}
function cc(t, e) {
  return 1 / Math.sqrt(sc(t, e));
}
const ac = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, sr = (t, e) => {
  ac(t, {
    instruction: e
  });
};
async function lc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function uc() {
  return (await lc()).filter((e) => e.kind === "videoinput");
}
const _c = () => {
  const [t, e] = U(!1);
  return st(() => {
    (async () => (await uc()).length > 1 && e(!0))();
  }, []), t;
}, fc = ({ size: t }) => /* @__PURE__ */ h("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), hc = ({ size: t }) => /* @__PURE__ */ h("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ h("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), yo = D.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, dc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ h(yo, { $marginLeft: t, ...n, children: /* @__PURE__ */ h(fc, { size: e }) }), pc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ h(yo, { $marginLeft: t, ...n, children: /* @__PURE__ */ h(hc, { size: e }) }), mc = D.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, gc = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Re(), o = _c();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = xs(r);
  return /* @__PURE__ */ h(mc, { $padding: i, children: [
    o && /* @__PURE__ */ h(pc, { disabled: e, onClick: () => {
      sr(t, Nn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ h(
      dc,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          sr(t, Nn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, Cc = "2.5s", yc = "0.3s", vc = "linear", bc = Ie`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Ie`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Ie`
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
Ie`
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
const Sc = D.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && vn`
      animation: ${bc} ${yc}
        ${vc} both;
      animation-delay: ${Cc};

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
`, $c = D.div`
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
`, Ec = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => /* @__PURE__ */ h(Sc, { $cssBottom: e, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ h(
  $c,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > Rs,
    children: t
  }
) }), wc = D.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, cr = ({ svgSize: t }) => /* @__PURE__ */ h(wc, { children: /* @__PURE__ */ h("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Oc = D.div`
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
`, vo = ({ children: t, height: e, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Re(), i = bn(r, e);
  return /* @__PURE__ */ h(Oc, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ h("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ h("defs", { children: /* @__PURE__ */ h("mask", { id: "mask", children: [
      /* @__PURE__ */ h("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ h("g", { children: t })
    ] }) }),
    /* @__PURE__ */ h("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ic({ cameraHeight: t, cameraWidth: e, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Re(), i = r === M.ERROR || r === M.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === M.WAITING || r === M.COMPLETE ? /* @__PURE__ */ h(W, { children: [
    n && t && e && /* @__PURE__ */ h(vo, { height: t, width: e }),
    /* @__PURE__ */ h(fe, { isCameraReady: !0, text: o[M.WAITING].text })
  ] }) : r === M.BLURRED ? /* @__PURE__ */ h(W, { children: /* @__PURE__ */ h(fe, { Icon: cr, isCameraReady: !0, text: o[M.BLURRED].text }) }) : /* @__PURE__ */ h(fe, { Icon: cr, isCameraReady: !0, text: o[M.LOADING].text });
}
function Rc({ isRounded: t, isSquare: e, ...n }) {
  return t ? /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: e ? "0" : "50%" });
}
const Nc = D.div`
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
`, Tc = ({
  children: t,
  className: e,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ h(
  Nc,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: e,
    onAnimationEnd: r,
    children: t
  }
);
function xc({
  backdropHeight: t,
  backdropWidth: e,
  children: n,
  placeholderRectangle: r,
  scale: o,
  ...i
}) {
  return /* @__PURE__ */ h(W, { children: [
    /* @__PURE__ */ h(vo, { height: t, scale: o, width: e, children: /* @__PURE__ */ h(
      Rc,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ h(Tc, { placeholderRectangle: r, scale: o, ...i, children: n })
  ] });
}
const Ac = 480, Sn = 18, bo = 6.5;
function ar(t, e, n, r) {
  const o = (r - 90) * Math.PI / 180;
  return { x: t + n * Math.cos(o), y: e + n * Math.sin(o) };
}
function kc(t, e, n, r, o) {
  const i = Math.max(0.01, o - r), s = ar(t, e, n, r), c = ar(t, e, n, r + i), l = i > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${n} ${n} 0 ${l} 1 ${c.x} ${c.y}`;
}
function Pc(t, e, n, r) {
  const o = 360 / t, i = bo / 2;
  return Array.from(
    { length: t },
    (s, c) => kc(e, n, r, c * o + i, (c + 1) * o - i)
  );
}
const Lc = D.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
`, Mc = D.path`
  fill: none;
  stroke: ${(t) => t.theme.colors.placeholderColor};
  opacity: 0.3;
  stroke-width: ${Sn};
  stroke-linecap: round;
`, Fc = D.path`
  fill: none;
  stroke: ${(t) => t.theme.colors.placeholderColorSuccess};
  stroke-width: ${Sn};
  stroke-linecap: round;
  transition: stroke-dashoffset ${Xs}ms linear;
`;
function Dc({
  challengeCount: t,
  currentChallengeIndex: e,
  isInCandidateSelection: n,
  size: r = Ac
}) {
  if (t <= 0)
    return null;
  const o = r / 2, i = r / 2, s = (r - Sn) / 2, c = 360 / t - bo, l = s * c * Math.PI / 180, a = `${l} ${l}`, _ = Pc(t, o, i, s);
  return /* @__PURE__ */ h(
    Lc,
    {
      "aria-valuemax": t,
      "aria-valuemin": 0,
      "aria-valuenow": e,
      role: "progressbar",
      viewBox: `0 0 ${r} ${r}`,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        _.map((d, u) => /* @__PURE__ */ h(Mc, { d }, `t${u}`)),
        _.map((d, u) => {
          const m = u < e || u === e && n ? 0 : l;
          return /* @__PURE__ */ h(Fc, { d, "stroke-dasharray": a, "stroke-dashoffset": m }, `a${u}`);
        })
      ]
    }
  );
}
function Hc({
  customEvents: t,
  defaultInstructionCode: e
}) {
  const [n, r] = U(), [o, i] = U(!1), s = K(
    (g) => {
      r(g?.detail?.cameraResolution);
      const y = g?.detail?.isMirroring;
      y !== void 0 && i(y);
    },
    [r]
  );
  it(t.CAMERA_PROPS_CHANGED, s);
  const [c, l] = U({
    code: e,
    isEscalated: !1
  }), a = K(
    (g) => {
      const y = g;
      l({
        code: y?.detail?.instructionCode,
        isEscalated: y?.detail?.isEscalated ?? !1
      });
    },
    [l]
  );
  it(t.INSTRUCTION_CHANGED, a);
  const [_, d] = U(M.LOADING), [u, f] = U(), m = K(
    (g) => {
      d(g.detail?.appState);
      const y = g?.detail?.error;
      y && f(y);
    },
    [d, f]
  );
  return it(t.STATE_CHANGED, m), {
    cameraResolution: n,
    instruction: c,
    isMirroring: o,
    appState: _,
    error: u
  };
}
function Uc() {
  const t = Hc({
    customEvents: _t,
    defaultInstructionCode: $t.FACE_NOT_PRESENT
  }), [e, n] = U(1), r = K((o) => {
    const i = o, { detail: s } = i;
    if (!s)
      return;
    const c = s.challengeSequence[s.currentChallengeIndex];
    n(oc.get(c)?.scale ?? 1);
  }, []);
  return it(_t.CHALLENGE_VALUE_CHANGED, r), st(() => {
    t.appState !== M.RUNNING && n(1);
  }, [t.appState]), {
    ...t,
    faceScale: e
  };
}
function Bc() {
  const [t, e] = U([]), [n, r] = U(0), [o, i] = U(!1), s = K((a) => {
    const _ = a, { detail: d } = _;
    d && (e(d.challengeSequence), r(d.currentChallengeIndex), i(!1));
  }, []), c = K((a) => {
    const _ = a, { detail: d } = _;
    d && i(d.instructionCode === $t.CANDIDATE_SELECTION);
  }, []), l = K((a) => {
    a.detail?.appState !== M.RUNNING && (e([]), i(!1));
  }, []);
  return it(_t.CHALLENGE_VALUE_CHANGED, s), it(_t.INSTRUCTION_CHANGED, c), it(_t.STATE_CHANGED, l), {
    challengeCount: t.length,
    currentChallengeIndex: n,
    isInCandidateSelection: o
  };
}
const Gc = D.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function jc(t) {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function zc({ cameraResolution: t, isImageMirror: e }) {
  const n = ye(null), r = ho(), [o, i] = U(), s = K(
    (c) => {
      i(c?.detail?.detectionDetails?.processedImage?.detection);
    },
    [i]
  );
  return it(_t.DETECTION_CHANGED, s), st(() => {
    if (!n.current)
      return;
    const c = { width: t.width, height: t.height }, l = Ps(o), a = (_, d) => {
      if (!d)
        return;
      const { faceCenter: u, faceSize: f } = d, m = n?.current?.getContext("2d");
      if (!m)
        return;
      const g = rc(f, _);
      m.beginPath(), m.arc(u.x, u.y, g, 0, 2 * Math.PI, !1), m.lineWidth = Ss, m.strokeStyle = r.colors.placeholderColor, m.stroke();
    };
    n.current.width = c.width, n.current.height = c.height, jc(n.current), a(c, l);
  }, [t, o, r.colors.placeholderColor]), /* @__PURE__ */ h(Gc, { ref: n, $isImageMirror: e });
}
function Wc() {
  const {
    appState: t,
    cameraResolution: e,
    error: n,
    faceScale: r,
    instruction: o,
    isMirroring: i
  } = Uc(), { challengeCount: s, currentChallengeIndex: c, isInCandidateSelection: l } = Bc(), {
    control: { showDetectionLayer: a },
    escalatedInstructions: _,
    instructions: d
  } = Re(), u = ks({
    escalatedInstructions: _,
    instructions: d,
    currentInstruction: {
      ...o,
      code: o.code
    }
  });
  if (t === M.ERROR)
    return /* @__PURE__ */ h(Co, { text: n?.message });
  if (t === M.RUNNING && e) {
    const f = nc(e), m = r * cc(e.width, e.height);
    return /* @__PURE__ */ h(W, { children: [
      a && /* @__PURE__ */ h(zc, { cameraResolution: e, isImageMirror: i }),
      /* @__PURE__ */ h(
        xc,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isInCandidateSelection: l,
          placeholderRectangle: f,
          scale: m,
          children: /* @__PURE__ */ h(
            Dc,
            {
              challengeCount: s,
              currentChallengeIndex: c,
              isInCandidateSelection: l
            }
          )
        }
      ),
      u && /* @__PURE__ */ h(
        Ec,
        {
          cssBottom: (f.height + f.shiftY) * 100,
          isInCandidateSelection: l,
          isPortrait: e.width < e.height,
          children: u
        }
      ),
      /* @__PURE__ */ h(
        gc,
        {
          customControlEvent: _t.CONTROL,
          isSwitchCameraDisabled: l
        }
      )
    ] });
  }
  return /* @__PURE__ */ h(
    Ic,
    {
      cameraHeight: e?.height,
      cameraWidth: e?.width,
      isBackdrop: !0,
      state: t
    }
  );
}
function Zc(t) {
  const e = { ...ws, ...t?.instructions }, n = {
    ...Os,
    ...t?.escalatedInstructions
  }, r = {
    [M.LOADING]: {
      ...re.loading,
      ...t?.appStateInstructions?.loading
    },
    [M.WAITING]: {
      ...re.waiting,
      ...t?.appStateInstructions?.waiting
    },
    [M.COMPLETE]: {
      ...re.waiting,
      ...t?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [M.BLURRED]: {
      ...re.loading,
      ...t?.appStateInstructions?.loading
    }
  }, o = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? Is,
    theme: Ds(t?.styling?.theme)
  }, i = {
    showCameraButtons: t?.control?.showCameraButtons ?? !1,
    showDetectionLayer: t?.control?.showDetectionLayer ?? !0
  };
  return {
    instructions: e,
    appStateInstructions: r,
    styling: o,
    control: i,
    escalatedInstructions: n
  };
}
function Vc({ configuration: t }) {
  const e = Ks(_t.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ h(Zs, { uiConfiguration: Zc(t), videoElementSize: e, children: /* @__PURE__ */ h(Wc, {}) });
}
Ao(Vc, "x-dot-multi-range-liveness-ui", ["configuration"]);
