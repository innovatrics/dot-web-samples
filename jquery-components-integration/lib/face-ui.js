var qe, v, ur, ue, bn, fr, dr, _r, rn, Ft, Ut, hr, je = {}, pr = [], Co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function on(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function L(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Be(e, a, r, o, null);
}
function Be(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ur, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function wo() {
  return { current: null };
}
function H(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Ee(e, t) {
  if (t == null) return e.__ ? Ee(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ee(e) : null;
}
function mr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return mr(e);
  }
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !_t.__r++ || bn != v.debounceRendering) && ((bn = v.debounceRendering) || fr)(_t);
}
function _t() {
  for (var e, t, n, r, o, i, a, s = 1; ue.length; ) ue.length > s && ue.sort(dr), e = ue.shift(), s = ue.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), an(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Ee(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, vr(i, n, a), r.__e = r.__ = null, n.__e != o && mr(n)));
  _t.__r = 0;
}
function gr(e, t, n, r, o, i, a, s, l, u, d) {
  var c, h, _, p, S, k, g, m = r && r.__k || pr, b = t.length;
  for (l = So(n, t, m, l, b), c = 0; c < b; c++) (_ = n.__k[c]) != null && (h = _.__i == -1 ? je : m[_.__i] || je, _.__i = c, k = an(e, _, h, o, i, a, s, l, u, d), p = _.__e, _.ref && h.ref != _.ref && (h.ref && sn(h.ref, null, _), d.push(_.ref, _.__c || p, _)), S == null && p != null && (S = p), (g = !!(4 & _.__u)) || h.__k === _.__k ? l = yr(_, l, e, g) : typeof _.type == "function" && k !== void 0 ? l = k : p && (l = p.nextSibling), _.__u &= -7);
  return n.__e = S, l;
}
function So(e, t, n, r, o) {
  var i, a, s, l, u, d = n.length, c = d, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = Be(null, a, null, null, null) : Ye(a) ? a = e.__k[i] = Be(H, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = Be(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, l = i + h, a.__ = e, a.__b = e.__b + 1, s = null, (u = a.__i = bo(a, n, l, c)) != -1 && (c--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > d ? h-- : o < d && h++), typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < d; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Ee(s)), wr(s, s));
  return r;
}
function yr(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = yr(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = Ee(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function bo(e, t, n, r) {
  var o, i, a, s = e.key, l = e.type, u = t[n], d = u != null && (2 & u.__u) == 0;
  if (u === null && s == null || d && s == u.key && l == u.type) return n;
  if (r > (d ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((u = t[a = o >= 0 ? o-- : i++]) != null && (2 & u.__u) == 0 && s == u.key && l == u.type) return a;
  }
  return -1;
}
function En(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Co.test(t) ? n : n + "px";
}
function et(e, t, n, r, o) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || En(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || En(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(_r, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = rn, e.addEventListener(t, i ? Ut : Ft, i)) : e.removeEventListener(t, i ? Ut : Ft, i);
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
function $n(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = rn++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function an(e, t, n, r, o, i, a, s, l, u) {
  var d, c, h, _, p, S, k, g, m, b, $, N, w, y, F, B, Ae, z = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = v.__b) && d(t);
  e: if (typeof z == "function") try {
    if (g = t.props, m = "prototype" in z && z.prototype.render, b = (d = z.contextType) && r[d.__c], $ = d ? b ? b.props.value : d.__ : r, n.__c ? k = (c = t.__c = n.__c).__ = c.__E : (m ? t.__c = c = new z(g, $) : (t.__c = c = new V(g, $), c.constructor = z, c.render = $o), b && b.sub(c), c.state || (c.state = {}), c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && z.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Z({}, c.__s)), Z(c.__s, z.getDerivedStateFromProps(g, c.__s))), _ = c.props, p = c.state, c.__v = t, h) m && z.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && z.getDerivedStateFromProps == null && g !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, $), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, $) === !1) {
        for (t.__v != n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(oe) {
          oe && (oe.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, $), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, p, S);
      });
    }
    if (c.context = $, c.props = g, c.__P = e, c.__e = !1, w = v.__r, y = 0, m) {
      for (c.state = c.__s, c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), F = 0; F < c._sb.length; F++) c.__h.push(c._sb[F]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++y < 25);
    c.state = c.__s, c.getChildContext != null && (r = Z(Z({}, r), c.getChildContext())), m && !h && c.getSnapshotBeforeUpdate != null && (S = c.getSnapshotBeforeUpdate(_, p)), B = d, d != null && d.type === H && d.key == null && (B = Cr(d.props.children)), s = gr(e, Ye(B) ? B : [B], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), k && (c.__E = c.__ = null);
  } catch (oe) {
    if (t.__v = null, l || i != null) if (oe.then) {
      for (t.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else {
      for (Ae = i.length; Ae--; ) on(i[Ae]);
      zt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, oe.then || zt(t);
    v.__e(oe, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Eo(n.__e, t, n, r, o, i, a, l, u);
  return (d = v.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function zt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(zt);
}
function vr(e, t, n) {
  for (var r = 0; r < n.length; r++) sn(n[r], n[++r], n[++r]);
  v.__c && v.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      v.__e(i, o.__v);
    }
  });
}
function Cr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(Cr) : Z({}, e);
}
function Eo(e, t, n, r, o, i, a, s, l) {
  var u, d, c, h, _, p, S, k = n.props || je, g = t.props, m = t.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!m && (m ? _.localName == m : _.nodeType == 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (m == null) return document.createTextNode(g);
    e = document.createElementNS(o, m, g.is && g), s && (v.__m && v.__m(t, i), s = !1), i = null;
  }
  if (m == null) k === g || s && e.data == g || (e.data = g);
  else {
    if (i = i && qe.call(e.childNodes), !s && i != null) for (k = {}, u = 0; u < e.attributes.length; u++) k[(_ = e.attributes[u]).name] = _.value;
    for (u in k) if (_ = k[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = _;
      else if (!(u in g)) {
        if (u == "value" && "defaultValue" in g || u == "checked" && "defaultChecked" in g) continue;
        et(e, u, null, _, o);
      }
    }
    for (u in g) _ = g[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? p = _ : u == "checked" ? S = _ : s && typeof _ != "function" || k[u] === _ || et(e, u, _, k[u], o);
    if (d) s || c && (d.__html == c.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), gr(t.type == "template" ? e.content : e, Ye(h) ? h : [h], t, n, r, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Ee(n, 0), s, l), i != null) for (u = i.length; u--; ) on(i[u]);
    s || (u = "value", m == "progress" && p == null ? e.removeAttribute("value") : p != null && (p !== e[u] || m == "progress" && !p || m == "option" && p != k[u]) && et(e, u, p, k[u], o), u = "checked", S != null && S != e[u] && et(e, u, S, k[u], o));
  }
  return e;
}
function sn(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    v.__e(o, n);
  }
}
function wr(e, t, n) {
  var r, o;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || sn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && wr(r[o], t, n || typeof e.type != "function");
  n || on(e.__e), e.__c = e.__ = e.__e = void 0;
}
function $o(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], an(t, e = (!r && n || t).__k = L(H, null, [e]), o || je, je, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), vr(i, e, a);
}
function cn(e, t) {
  se(e, t, cn);
}
function ln(e, t, n) {
  var r, o, i, a, s = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? qe.call(arguments, 2) : n), Be(e.type, s, r || e.key, o || e.ref, null);
}
function Sr(e) {
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
  return t.__c = "__cC" + hr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
qe = pr.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ur = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, V.prototype.render = H, ue = [], fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, dr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _t.__r = 0, _r = /(PointerCapture)$|Capture$/i, rn = 0, Ft = $n(!1), Ut = $n(!0), hr = 0;
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ht.apply(this, arguments);
}
function br(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
var ko = ["context", "children"], Oo = ["useFragment"];
function No(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    To.call(this, r);
  }, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = Io, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, e.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function xo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = br(e, ko);
  return ln(t, n);
}
function To(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = L(xo, ht({}, this._props, { context: t.detail.context }), $r(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? cn : se)(this._vdom, this._root);
}
function Er(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ro(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Er(e)] = n, this._vdom = ln(this._vdom, r), se(this._vdom, this._root);
  }
}
function Io() {
  se(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this, r = e.useFragment, o = br(e, Oo);
  return L(r ? H : "slot", ht({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function $r(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, a = e.attributes, s = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[Er(a[i].name)] = a[i].value);
  for (i = s.length; i--; ) {
    var l = $r(s[i], null, n), u = s[i].slot;
    u ? o[u] = L(kn, { name: u }, l) : r[i] = l;
  }
  var d = !(!n || !n.shadow), c = t ? L(kn, { useFragment: !d }, r) : r;
  return !d && t && (e.innerHTML = ""), L(t || e.nodeName.toLowerCase(), o, c);
}
var Ao = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ao, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return v.vnode && v.vnode(u), u;
}
const On = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTION_CHANGED = "face-auto-capture:detection-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(pe || {});
const M = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, Nn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, P = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${Nn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Nn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
};
var ce, T, Rt, xn, $e = 0, kr = [], R = v, Tn = R.__b, Rn = R.__r, In = R.diffed, An = R.__c, Pn = R.unmount, Dn = R.__;
function Te(e, t) {
  R.__h && R.__h(T, e, $e || t), $e = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function j(e) {
  return $e = 1, un(xr, e);
}
function un(e, t, n) {
  var r = Te(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : xr(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.__f)) {
    var o = function(s, l, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, s, l, u);
      var c = r.__c.props !== s;
      return d.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (c = !0);
        }
      }), i && i.call(this, s, l, u) || c;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, l, u), i = d;
      }
      a && a.call(this, s, l, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ne(e, t) {
  var n = Te(ce++, 3);
  !R.__s && fn(n.__H, t) && (n.__ = e, n.u = t, T.__H.__h.push(n));
}
function Re(e, t) {
  var n = Te(ce++, 4);
  !R.__s && fn(n.__H, t) && (n.__ = e, n.u = t, T.__h.push(n));
}
function Ze(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
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
function te(e, t) {
  var n = Te(ce++, 7);
  return fn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function me(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = T.context[e.__c], n = Te(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function pt(e, t) {
  R.useDebugValue && R.useDebugValue(t ? t(e) : e);
}
function Nr() {
  var e = Te(ce++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Po() {
  for (var e; e = kr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], R.__e(t, e.__v);
  }
}
R.__b = function(e) {
  T = null, Tn && Tn(e);
}, R.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Dn && Dn(e, t);
}, R.__r = function(e) {
  Rn && Rn(e), ce = 0;
  var t = (T = e.__c).__H;
  t && (Rt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(Wt), t.__h = [], ce = 0)), Rt = T;
}, R.diffed = function(e) {
  In && In(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (kr.push(t) !== 1 && xn === R.requestAnimationFrame || ((xn = R.requestAnimationFrame) || Do)(Po)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Rt = T = null;
}, R.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(it), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], R.__e(r, n.__v);
    }
  }), An && An(e, t);
}, R.unmount = function(e) {
  Pn && Pn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      it(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && R.__e(t, n.__v));
};
var Ln = typeof requestAnimationFrame == "function";
function Do(e) {
  var t, n = function() {
    clearTimeout(r), Ln && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Ln && (t = requestAnimationFrame(n));
}
function it(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Wt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function fn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, D.apply(this, arguments);
};
function ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Lo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Mo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ho = /* @__PURE__ */ Lo(
  function(e) {
    return Mo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Tr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function jt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Rr(e, t) {
  var n = t(), r = j({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Re(function() {
    o.__ = n, o.u = t, It(o) && i({ t: o });
  }, [e, n, t]), ne(function() {
    return It(o) && i({ t: o }), e(function() {
      It(o) && i({ t: o });
    });
  }, [e]), n;
}
function It(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Ir(e) {
  e();
}
function Ar(e) {
  return e;
}
function Pr() {
  return [!1, Ir];
}
var Dr = Re;
function Gt(e, t) {
  this.props = e, this.context = t;
}
function Fo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Gt.prototype = new V()).isPureReactComponent = !0, Gt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Mn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var Uo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Bo(e) {
  function t(n) {
    var r = Tr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Uo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, zo = { map: Hn, forEach: Hn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Wo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Wo(e, t, n, r);
};
var Fn = v.unmount;
function Lr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Tr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Lr(r, t, n);
  })), e;
}
function Mr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Mr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Hr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function jo(e) {
  var t, n, r, o = null;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      s && (o = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? L(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function He() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fn && Fn(e);
}, (at.prototype = new V()).__c = function(e, t) {
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
        r.__v.__k[0] = Mr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Lr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(H, null, e.fallback);
  return o && (o.__u &= -33), [L(H, null, t.__a ? null : e.children), o];
};
var Un = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Go(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Vo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    se(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  se(L(Go, { context: t.context }, e.__v), t.v);
}
function qo(e, t) {
  var n = L(Vo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(He.prototype = new V()).__a = function(e) {
  var t = this, n = Hr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Un(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Un(e, n, t);
  });
};
var Fr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Yo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Zo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Xo = /[A-Z0-9]/g, Qo = typeof document < "u", Ko = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Jo(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ei(e, t, n) {
  return cn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Bn = v.event;
function ti() {
}
function ni() {
  return this.cancelBubble;
}
function ri() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Bn && (e = Bn(e)), e.persist = ti, e.isPropagationStopped = ni, e.isDefaultPrevented = ri, e.nativeEvent = e;
};
var dn, oi = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, zn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || Qo && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : l === "translate" && s === "no" ? s = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || Ko(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : Zo.test(a) && (a = l) : l = a = "oninput" : i && Yo.test(a) ? a = a.replace(Xo, "-$&").toLowerCase() : s === null && (s = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", oi)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = Fr, zn && zn(e);
};
var Wn = v.__r;
v.__r = function(e) {
  Wn && Wn(e), dn = e.__c;
};
var jn = v.diffed;
v.diffed = function(e) {
  jn && jn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), dn = null;
};
var ii = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return dn.__n[e.__c].props.value;
}, useCallback: me, useContext: Xe, useDebugValue: pt, useDeferredValue: Ar, useEffect: ne, useId: Nr, useImperativeHandle: Or, useInsertionEffect: Dr, useLayoutEffect: Re, useMemo: te, useReducer: un, useRef: Ze, useState: j, useSyncExternalStore: Rr, useTransition: Pr } } };
function ai(e) {
  return L.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === Fr;
}
function si(e) {
  return vt(e) && e.type === H;
}
function ci(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function li(e) {
  return vt(e) ? ln.apply(null, arguments) : e;
}
function ui(e) {
  return !!e.__k && (se(null, e), !0);
}
function fi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var di = function(e, t) {
  return e(t);
}, _i = function(e, t) {
  return e(t);
}, hi = H, pi = vt, re = { useState: j, useId: Nr, useReducer: un, useEffect: ne, useLayoutEffect: Re, useInsertionEffect: Dr, useTransition: Pr, useDeferredValue: Ar, useSyncExternalStore: Rr, startTransition: Ir, useRef: Ze, useImperativeHandle: Or, useMemo: te, useCallback: me, useContext: Xe, useDebugValue: pt, version: "18.3.1", Children: zo, render: Jo, hydrate: ei, unmountComponentAtNode: ui, createPortal: qo, createElement: L, createContext: Sr, createFactory: ai, cloneElement: li, createRef: wo, Fragment: H, isValidElement: vt, isElement: pi, isFragment: si, isMemo: ci, findDOMNode: fi, Component: V, PureComponent: Gt, memo: Fo, forwardRef: Bo, flushSync: _i, unstable_batchedUpdates: di, StrictMode: hi, Suspense: at, SuspenseList: He, lazy: jo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ii };
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At, Gn;
function gi() {
  return Gn || (Gn = 1, At = function(t, n, r, o) {
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
      var d = a[u];
      if (!l(d))
        return !1;
      var c = t[d], h = n[d];
      if (i = r ? r.call(o, c, h, d) : void 0, i === !1 || i === void 0 && c !== h)
        return !1;
    }
    return !0;
  }), At;
}
var yi = gi();
const vi = /* @__PURE__ */ mi(yi);
var x = "-ms-", ze = "-moz-", O = "-webkit-", Ur = "comm", Ct = "rule", _n = "decl", Ci = "@import", Br = "@keyframes", wi = "@layer", zr = Math.abs, hn = String.fromCharCode, Vt = Object.assign;
function Si(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Wr(e) {
  return e.trim();
}
function K(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function st(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function jr(e) {
  return e.length;
}
function Fe(e, t) {
  return t.push(e), e;
}
function bi(e, t) {
  return e.map(t).join("");
}
function Vn(e, t) {
  return e.filter(function(n) {
    return !K(n, t);
  });
}
var wt = 1, Oe = 1, Gr = 0, G = 0, I = 0, Ie = "";
function St(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Oe, length: a, return: "", siblings: s };
}
function ae(e, t) {
  return Vt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function Ei() {
  return I;
}
function $i() {
  return I = G > 0 ? A(Ie, --G) : 0, Oe--, I === 10 && (Oe = 1, wt--), I;
}
function q() {
  return I = G < Gr ? A(Ie, G++) : 0, Oe++, I === 10 && (Oe = 1, wt++), I;
}
function _e() {
  return A(Ie, G);
}
function ct() {
  return G;
}
function bt(e, t) {
  return ke(Ie, e, t);
}
function qt(e) {
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
function ki(e) {
  return wt = Oe = 1, Gr = Y(Ie = e), G = 0, [];
}
function Oi(e) {
  return Ie = "", e;
}
function Pt(e) {
  return Wr(bt(G - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ni(e) {
  for (; (I = _e()) && I < 33; )
    q();
  return qt(e) > 2 || qt(I) > 3 ? "" : " ";
}
function xi(e, t) {
  for (; --t && q() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return bt(e, ct() + (t < 6 && _e() == 32 && q() == 32));
}
function Yt(e) {
  for (; q(); )
    switch (I) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(I);
        break;
      // (
      case 40:
        e === 41 && Yt(e);
        break;
      // \
      case 92:
        q();
        break;
    }
  return G;
}
function Ti(e, t) {
  for (; q() && e + I !== 57; )
    if (e + I === 84 && _e() === 47)
      break;
  return "/*" + bt(t, G - 1) + "*" + hn(e === 47 ? e : q());
}
function Ri(e) {
  for (; !qt(_e()); )
    q();
  return bt(e, G);
}
function Ii(e) {
  return Oi(lt("", null, null, null, [""], e = ki(e), 0, [0], e));
}
function lt(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, d = 0, c = a, h = 0, _ = 0, p = 0, S = 1, k = 1, g = 1, m = 0, b = "", $ = o, N = i, w = r, y = b; k; )
    switch (p = m, m = q()) {
      // (
      case 40:
        if (p != 108 && A(y, c - 1) == 58) {
          st(y += C(Pt(m), "&", "&\f"), "&\f", zr(u ? s[u - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Pt(m);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ni(p);
        break;
      // \
      case 92:
        y += xi(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Fe(Ai(Ti(q(), ct()), t, n, l), l);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * S:
        s[u++] = Y(y) * g;
      // } ; \0
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          // \0 }
          case 0:
          case 125:
            k = 0;
          // ;
          case 59 + d:
            g == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - c && Fe(_ > 32 ? Yn(y + ";", r, n, c - 1, l) : Yn(C(y, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Fe(w = qn(y, t, n, u, d, o, s, b, $ = [], N = [], c, i), i), m === 123)
              if (d === 0)
                lt(y, t, w, w, $, i, c, s, N);
              else
                switch (h === 99 && A(y, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lt(e, w, w, r && Fe(qn(e, w, w, 0, 0, o, s, b, o, $ = [], c, N), N), o, N, c, s, r ? $ : N);
                    break;
                  default:
                    lt(y, w, w, w, [""], N, 0, s, N);
                }
        }
        u = d = _ = 0, S = g = 1, b = y = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Y(y), _ = p;
      default:
        if (S < 1) {
          if (m == 123)
            --S;
          else if (m == 125 && S++ == 0 && $i() == 125)
            continue;
        }
        switch (y += hn(m), m * S) {
          // &
          case 38:
            g = d > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (Y(y) - 1) * g, g = 1;
            break;
          // @
          case 64:
            _e() === 45 && (y += Pt(q())), h = _e(), d = c = Y(b = y += Ri(ct())), m++;
            break;
          // -
          case 45:
            p === 45 && Y(y) == 2 && (S = 0);
        }
    }
  return i;
}
function qn(e, t, n, r, o, i, a, s, l, u, d, c) {
  for (var h = o - 1, _ = o === 0 ? i : [""], p = jr(_), S = 0, k = 0, g = 0; S < r; ++S)
    for (var m = 0, b = ke(e, h + 1, h = zr(k = a[S])), $ = e; m < p; ++m)
      ($ = Wr(k > 0 ? _[m] + " " + b : C(b, /&\f/g, _[m]))) && (l[g++] = $);
  return St(e, t, n, o === 0 ? Ct : s, l, u, d, c);
}
function Ai(e, t, n, r) {
  return St(e, t, n, Ur, hn(Ei()), ke(e, 2, -2), 0, r);
}
function Yn(e, t, n, r, o) {
  return St(e, t, n, _n, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function Vr(e, t, n) {
  switch (Si(e, t)) {
    // color-adjust
    case 5103:
      return O + "print-" + e + e;
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
      return O + e + e;
    // tab-size
    case 4789:
      return ze + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + ze + e + x + e + e;
    // writing-mode
    case 5936:
      switch (A(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return O + e + x + e + e;
    // order
    case 6165:
      return O + e + x + "flex-" + e + e;
    // align-items
    case 5187:
      return O + e + C(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + x + "flex-$1$2") + e;
    // align-self
    case 5443:
      return O + e + x + "flex-item-" + C(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : x + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return O + e + x + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return O + e + x + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return O + e + x + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return O + "box-" + C(e, "-grow", "") + O + e + x + C(e, "grow", "positive") + e;
    // transition
    case 4554:
      return O + C(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    // cursor
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, O + "$1$`$1");
    // justify-content
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    // justify-self
    case 4200:
      if (!K(e, /flex-|baseline/)) return x + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, K(r.props, /grid-\w+-end/);
      }) ? ~st(e + (n = n[t].value), "span", 0) ? e : x + C(e, "-start", "") + e + x + "grid-row-span:" + (~st(n, "span", 0) ? K(n, /\d+/) : +K(n, /\d+/) - +K(e, /\d+/)) + ";" : x + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return K(r.props, /grid-\w+-start/);
      }) ? e : x + C(C(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, O + "$1$2") + e;
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
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + ze + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~st(e, "stretch", 0) ? Vr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return x + o + ":" + i + u + (a ? x + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (A(e, t + 6) === 121)
        return C(e, ":", ":" + O) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + x + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return C(e, ":", ":" + x) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return C(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function mt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Pi(e, t, n, r) {
  switch (e.type) {
    case wi:
      if (e.children.length) break;
    case Ci:
    case _n:
      return e.return = e.return || e.value;
    case Ur:
      return "";
    case Br:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case Ct:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Di(e) {
  var t = jr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Li(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Mi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _n:
        e.return = Vr(e.value, e.length, n);
        return;
      case Br:
        return mt([ae(e, { value: C(e.value, "@", "@" + O) })], r);
      case Ct:
        if (e.length)
          return bi(n = e.props, function(o) {
            switch (K(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Se(ae(e, { props: [C(o, /:(read-\w+)/, ":" + ze + "$1")] })), Se(ae(e, { props: [o] })), Vt(e, { props: Vn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Se(ae(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Se(ae(e, { props: [C(o, /:(plac\w+)/, ":" + ze + "$1")] })), Se(ae(e, { props: [C(o, /:(plac\w+)/, x + "input-$1")] })), Se(ae(e, { props: [o] })), Vt(e, { props: Vn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Hi = {
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
}, E = {}, ye = typeof process < "u" && E !== void 0 && (E.REACT_APP_SC_ATTR || E.SC_ATTR) || "data-styled", qr = "active", Yr = "data-styled-version", Et = "6.1.19", pn = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", Fi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== "" ? E.REACT_APP_SC_DISABLE_SPEEDY !== "false" && E.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.SC_DISABLE_SPEEDY !== void 0 && E.SC_DISABLE_SPEEDY !== "" ? E.SC_DISABLE_SPEEDY !== "false" && E.SC_DISABLE_SPEEDY : E.NODE_ENV !== "production"), Zn = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), Ui = function(e, t) {
  if (E.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
        Zn.test(a) ? (i = !1, tt.delete(r)) : o.apply(void 0, ge([a], s, !1));
      }, Ze(), i && !tt.has(r) && (console.warn(r), tt.add(r));
    } catch (a) {
      Zn.test(a.message) && tt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $t = Object.freeze([]), Ne = Object.freeze({});
function Bi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Wi = /(^-|-$)/g;
function Xn(e) {
  return e.replace(zi, "-").replace(Wi, "");
}
var ji = /(a)(d)/gi, nt = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > nt; t = t / nt | 0) n = Qn(t % nt) + n;
  return (Qn(t % nt) + n).replace(ji, "$1-$2");
}
var Dt, Zr = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Xr = function(e) {
  return fe(Zr, e);
};
function Qr(e) {
  return Xt(Xr(e) >>> 0);
}
function Kr(e) {
  return E.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Lt(e) {
  return typeof e == "string" && (E.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Jr = typeof Symbol == "function" && Symbol.for, eo = Jr ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Gi = Jr ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Vi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, qi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Yi = ((Dt = {})[Gi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Dt[eo] = to, Dt);
function Kn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === eo ? to : "$$typeof" in e ? Yi[e.$$typeof] : Vi;
  var t;
}
var Zi = Object.defineProperty, Xi = Object.getOwnPropertyNames, Jn = Object.getOwnPropertySymbols, Qi = Object.getOwnPropertyDescriptor, Ki = Object.getPrototypeOf, er = Object.prototype;
function no(e, t, n) {
  if (typeof t != "string") {
    if (er) {
      var r = Ki(t);
      r && r !== er && no(e, r, n);
    }
    var o = Xi(t);
    Jn && (o = o.concat(Jn(t)));
    for (var i = Kn(e), a = Kn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in qi || n && n[l] || a && l in a || i && l in i)) {
        var u = Qi(t, l);
        try {
          Zi(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function ve(e) {
  return typeof e == "function";
}
function mn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Kt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !xe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Kt(e[r], t[r]);
  else if (xe(t)) for (var r in t) e[r] = Kt(e[r], t[r]);
  return e;
}
function gn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Ji = E.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ea() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function X(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return E.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ea.apply(void 0, ge([Ji[e]], t, !1)).trim());
}
var ta = (function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(pn);
    return n;
  }, e;
})(), na = 1 << 30, ut = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), ft = 1, rt = function(e) {
  if (ut.has(e)) return ut.get(e);
  for (; yt.has(ft); ) ft++;
  var t = ft++;
  if (E.NODE_ENV !== "production" && ((0 | t) < 0 || t > na)) throw X(16, "".concat(t));
  return ut.set(e, t), yt.set(t, e), t;
}, ra = function(e, t) {
  ft = t + 1, ut.set(e, t), yt.set(t, e);
}, oa = "style[".concat(ye, "][").concat(Yr, '="').concat(Et, '"]'), ia = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), aa = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, sa = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(pn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(ia);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (ra(d, u), aa(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, tr = function(e) {
  for (var t = document.querySelectorAll(oa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ye) !== qr && (sa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ca() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ro = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ye, qr), r.setAttribute(Yr, Et);
  var a = ca();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, la = (function() {
  function e(t) {
    this.element = ro(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw X(17);
    })(this.element), this.length = 0;
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
})(), ua = (function() {
  function e(t) {
    this.element = ro(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), fa = (function() {
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
})(), nr = gt, da = { isServer: !gt, useCSSOMInjection: !Fi }, oo = (function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = D(D({}, da), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gt && nr && (nr = !1, tr(this)), gn(this, function() {
      return (function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var h = (function(g) {
            return yt.get(g);
          })(c);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), p = a.getGroup(c);
          if (_ === void 0 || !_.size || p.length === 0) return "continue";
          var S = "".concat(ye, ".g").concat(c, '[id="').concat(h, '"]'), k = "";
          _ !== void 0 && _.forEach(function(g) {
            g.length > 0 && (k += "".concat(g, ","));
          }), l += "".concat(p).concat(S, '{content:"').concat(k, '"}').concat(pn);
        }, d = 0; d < s; d++) u(d);
        return l;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return rt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && tr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(D(D({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new fa(o) : r ? new la(o) : new ua(o);
    })(this.options), new ta(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (rt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(rt(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(rt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), _a = /&/g, ha = /^\s*\/\/.*$/gm;
function io(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = io(n.children, t)), n;
  });
}
function ao(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, l = s === void 0 ? $t : s, u = function(h, _, p) {
    return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = l.slice();
  d.push(function(h) {
    h.type === Ct && h.value.includes("&") && (h.props[0] = h.props[0].replace(_a, n).replace(r, u));
  }), a.prefix && d.push(Mi), d.push(Pi);
  var c = function(h, _, p, S) {
    _ === void 0 && (_ = ""), p === void 0 && (p = ""), S === void 0 && (S = "&"), t = S, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var k = h.replace(ha, ""), g = Ii(p || _ ? "".concat(p, " ").concat(_, " { ").concat(k, " }") : k);
    a.namespace && (g = io(g, a.namespace));
    var m = [];
    return mt(g, Di(d.concat(Li(function(b) {
      return m.push(b);
    })))), m;
  };
  return c.hash = l.length ? l.reduce(function(h, _) {
    return _.name || X(15), fe(h, _.name);
  }, Zr).toString() : "", c;
}
var pa = new oo(), Jt = ao(), yn = re.createContext({ shouldForwardProp: void 0, styleSheet: pa, stylis: Jt });
yn.Consumer;
var ma = re.createContext(void 0);
function en() {
  return Xe(yn);
}
function ga(e) {
  var t = j(e.stylisPlugins), n = t[0], r = t[1], o = en().styleSheet, i = te(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return ao({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ne(function() {
    vi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(yn.Provider, { value: s }, re.createElement(ma.Provider, { value: a }, e.children));
}
var tn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, gn(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Jt), this.name + t.hash;
  }, e;
})(), ya = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ya(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var so = function(e) {
  return e == null || e === !1 || e === "";
}, co = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !so(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(rr(o), ":"), i, ";") : xe(i) ? r.push.apply(r, ge(ge(["".concat(o, " {")], co(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Hi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function he(e, t, n, r) {
  if (so(e)) return [];
  if (mn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return E.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tn || xe(o) || o === null || console.error("".concat(Kr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(o, t, n, r);
  }
  var i;
  return e instanceof tn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : xe(e) ? co(e) : Array.isArray(e) ? Array.prototype.concat.apply($t, e.map(function(a) {
    return he(a, t, n, r);
  })) : [e.toString()];
}
function va(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !mn(n)) return !1;
  }
  return !0;
}
var Ca = Xr(Et), wa = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = E.NODE_ENV === "production" && (r === void 0 || r.isStatic) && va(t), this.componentId = n, this.baseHash = fe(Ca, n), this.baseStyle = r, oo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Qt(he(this.rules, t, n, r)), a = Xt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = fe(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") u += c, E.NODE_ENV !== "production" && (l = fe(l, c));
        else if (c) {
          var h = Qt(he(c, t, n, r));
          l = fe(l, h + d), u += h;
        }
      }
      if (u) {
        var _ = Xt(l >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
})(), Ge = re.createContext(void 0);
Ge.Consumer;
function lo() {
  var e = Xe(Ge);
  if (!e) throw X(18);
  return e;
}
function Sa(e) {
  var t = re.useContext(Ge), n = te(function() {
    return (function(r, o) {
      if (!r) throw X(14);
      if (ve(r)) {
        var i = r(o);
        if (E.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? D(D({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ge.Provider, { value: n }, e.children) : null;
}
var Mt = {}, or = /* @__PURE__ */ new Set();
function ba(e, t, n) {
  var r = mn(e), o = e, i = !Lt(e), a = t.attrs, s = a === void 0 ? $t : a, l = t.componentId, u = l === void 0 ? (function($, N) {
    var w = typeof $ != "string" ? "sc" : Xn($);
    Mt[w] = (Mt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(Qr(Et + w + Mt[w]));
    return N ? "".concat(N, "-").concat(y) : y;
  })(t.displayName, t.parentComponentId) : l, d = t.displayName, c = d === void 0 ? (function($) {
    return Lt($) ? "styled.".concat($) : "Styled(".concat(Kr($), ")");
  })(e) : d, h = t.displayName && t.componentId ? "".concat(Xn(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, p = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      p = function($, N) {
        return S($, N) && k($, N);
      };
    } else p = S;
  }
  var g = new wa(n, h, r ? o.componentStyle : void 0);
  function m($, N) {
    return (function(w, y, F) {
      var B = w.attrs, Ae = w.componentStyle, z = w.defaultProps, oe = w.foldedComponentIds, wn = w.styledComponentId, go = w.target, yo = re.useContext(Ge), vo = en(), Ot = w.shouldForwardProp || vo.shouldForwardProp;
      E.NODE_ENV !== "production" && pt(wn);
      var Sn = Bi(y, yo, z) || Ne, Q = (function(Qe, Le, Ke) {
        for (var we, le = D(D({}, Le), { className: void 0, theme: Ke }), Tt = 0; Tt < Qe.length; Tt += 1) {
          var Je = ve(we = Qe[Tt]) ? we(le) : we;
          for (var ie in Je) le[ie] = ie === "className" ? de(le[ie], Je[ie]) : ie === "style" ? D(D({}, le[ie]), Je[ie]) : Je[ie];
        }
        return Le.className && (le.className = de(le.className, Le.className)), le;
      })(B, y, Sn), Pe = Q.as || go, De = {};
      for (var W in Q) Q[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && Q.theme === Sn || (W === "forwardedAs" ? De.as = Q.forwardedAs : Ot && !Ot(W, Pe) || (De[W] = Q[W], Ot || E.NODE_ENV !== "development" || Ho(W) || or.has(W) || !Zt.has(Pe) || (or.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = (function(Qe, Le) {
        var Ke = en(), we = Qe.generateAndInjectStyles(Le, Ke.styleSheet, Ke.stylis);
        return E.NODE_ENV !== "production" && pt(we), we;
      })(Ae, Q);
      E.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Nt);
      var xt = de(oe, wn);
      return Nt && (xt += " " + Nt), Q.className && (xt += " " + Q.className), De[Lt(Pe) && !Zt.has(Pe) ? "class" : "className"] = xt, F && (De.ref = F), L(Pe, De);
    })(b, $, N);
  }
  m.displayName = c;
  var b = re.forwardRef(m);
  return b.attrs = _, b.componentStyle = g, b.displayName = c, b.shouldForwardProp = p, b.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = h, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = r ? (function(N) {
      for (var w = [], y = 1; y < arguments.length; y++) w[y - 1] = arguments[y];
      for (var F = 0, B = w; F < B.length; F++) Kt(N, B[F], !0);
      return N;
    })({}, o.defaultProps, $) : $;
  } }), E.NODE_ENV !== "production" && (Ui(c, h), b.warnTooManyClasses = /* @__PURE__ */ (function($, N) {
    var w = {}, y = !1;
    return function(F) {
      if (!y && (w[F] = !0, Object.keys(w).length >= 200)) {
        var B = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat($).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, w = {};
      }
    };
  })(c, h)), gn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && no(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ar = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || xe(e)) return ar(he(ir($t, ge([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? he(r) : ar(he(ir(r, t)));
}
function nn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, vn.apply(void 0, ge([o], i, !1)));
  };
  return r.attrs = function(o) {
    return nn(e, t, D(D({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return nn(e, t, D(D({}, n), o));
  }, r;
}
var uo = function(e) {
  return nn(ba, e);
}, U = uo;
Zt.forEach(function(e) {
  U[e] = uo(e);
});
function kt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Qt(vn.apply(void 0, ge([e], t, !1))), o = Qr(r);
  return new tn(o, r);
}
E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ot = "__sc-".concat(ye, "__");
E.NODE_ENV !== "production" && E.NODE_ENV !== "test" && typeof window < "u" && (window[ot] || (window[ot] = 0), window[ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ot] += 1);
const be = {
  CIRCLE_SOLID: "circle-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, Ea = 2, fo = 14, $a = 0.0276;
var J = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(J || {});
const Ue = {
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
}, ka = {
  [P.CANDIDATE_SELECTION]: "Stay still…",
  [P.FACE_TOO_CLOSE]: "Move back",
  [P.FACE_TOO_FAR]: "Move closer",
  [P.FACE_CENTERING]: "Center your face",
  [P.FACE_NOT_PRESENT]: "Position your face into the circle",
  [P.SHARPNESS_TOO_LOW]: "Turn face against light",
  [P.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [P.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [P.DEVICE_PITCHED]: "Hold your phone at eye level",
  [P.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [P.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [P.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [P.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [P.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Oa = be.CIRCLE_SOLID, Na = "rgba(19, 19, 19, 0.5)", xa = 34;
function sr(e, t) {
  return Math.max(t, t + (e - 400) * $a + 2);
}
const Ta = (e, t = fo) => e ? e.width < e.height ? sr(e.width, t) : sr(e.height, t) : t, Ra = (e) => e > J.Default ? Ue[J.Default] : e > J.L ? Ue[J.L] : e > J.M ? Ue[J.M] : Ue[J.S], Ia = (e) => e ? Ra(e.width) : Ue[J.Default];
function Aa() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Pa(e) {
  if (e)
    return {
      faceCenter: e.faceCenter,
      faceSize: e.faceSize
    };
}
const We = Sr(void 0);
We.displayName = "ConfigurationContext";
function Ce() {
  const e = Xe(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Da({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = lo(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ta(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(We.Provider, { value: o, children: e });
}
const _o = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), La = U.div`
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
`, Ma = U.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ha = U.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, dt = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ f(La, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(Ma, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Ha, { $fontSize: o, children: r })
  ] }) });
}, ho = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(dt, { Icon: _o, position: "relative", text: e });
class Fa extends V {
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
    return this.state.hasError ? /* @__PURE__ */ f(ho, { Icon: _o, isCameraReady: !1 }) : this.props.children;
  }
}
const Ua = U.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Ba({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return ne(() => {
    Aa();
  }, []), /* @__PURE__ */ f(ga, { target: t.styleTarget, children: /* @__PURE__ */ f(Sa, { theme: t.styling.theme, children: /* @__PURE__ */ f(Ua, { children: /* @__PURE__ */ f(Fa, { videoElementSize: n, children: /* @__PURE__ */ f(Da, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const za = 0.75, Wa = 2, ja = "dot-auto-capture-video";
function Ve(e, t) {
  const n = Ze(t);
  ne(() => {
    n.current = t;
  }, [t]), ne(
    () => {
      if (!e)
        return;
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}
function Ga(e) {
  const [t, n] = j(), r = me(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return Ve(e, r), Re(() => {
    if (!t) {
      const o = document.getElementById(ja);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Va(e, t) {
  return e ? `${e}, ${t}` : t;
}
const qa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Ya = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: fo
}, Me = {
  colors: qa,
  font: Ya
}, Za = (e) => e ? {
  ...Me,
  ...e,
  colors: {
    ...Me.colors,
    ...e.colors
  },
  font: {
    ...Me.font,
    ...e.font,
    family: Va(e.font?.family, Me.font.family)
  }
} : Me, Xa = (e) => Number.parseFloat(e.toFixed(3)), Cn = (e, t) => Math.min(e, t), Qa = ({ height: e, width: t }, n) => {
  const r = Cn(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Ka = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qa(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function Ja(e, t) {
  const n = Cn(t.width, t.height);
  return Xa(e * n);
}
function es(e) {
  return Ka(e, za);
}
function ts(e, t) {
  return Ja(e, t) * Wa;
}
const ns = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, cr = (e, t) => {
  ns(e, {
    instruction: t
  });
};
async function rs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function os() {
  return (await rs()).filter((t) => t.kind === "videoinput");
}
const is = () => {
  const [e, t] = j(!1);
  return ne(() => {
    (async () => (await os()).length > 1 && t(!0))();
  }, []), e;
}, as = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ f("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ f("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), ss = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), po = U.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, cs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(as, { size: t }) }), ls = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(ss, { size: t }) }), us = U.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, fs = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Ce(), o = is();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Ia(r);
  return /* @__PURE__ */ f(us, { $padding: i, children: [
    o && /* @__PURE__ */ f(ls, { disabled: t, onClick: () => {
      cr(e, On.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ f(
      cs,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          cr(e, On.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, ds = "2.5s", _s = "0.3s", hs = "linear", ps = kt`
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
const ms = U.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && vn`
      animation: ${ps} ${_s}
        ${hs} both;
      animation-delay: ${ds};

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
`, gs = U.div`
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
`, ys = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ f(ms, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    gs,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > xa,
      children: e
    }
  ) });
}, vs = U.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, lr = ({ svgSize: e }) => /* @__PURE__ */ f(vs, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), Cs = U.div`
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
`, mo = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Ce(), i = Cn(r, t);
  return /* @__PURE__ */ f(Cs, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ f("g", { children: e })
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function ws({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Ce(), i = r === M.ERROR || r === M.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === M.WAITING || r === M.COMPLETE ? /* @__PURE__ */ f(H, { children: [
    n && e && t && /* @__PURE__ */ f(mo, { height: e, width: t }),
    /* @__PURE__ */ f(dt, { isCameraReady: !0, text: o[M.WAITING].text })
  ] }) : r === M.BLURRED ? /* @__PURE__ */ f(H, { children: /* @__PURE__ */ f(dt, { Icon: lr, isCameraReady: !0, text: o[M.BLURRED].text }) }) : /* @__PURE__ */ f(dt, { Icon: lr, isCameraReady: !0, text: o[M.LOADING].text });
}
function Ss({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const bs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function Es() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "rect",
    {
      height: "476",
      rx: "2",
      stroke: "currentColor",
      strokeDasharray: "48 48",
      strokeLinecap: "square",
      strokeWidth: "4",
      width: "476",
      x: "2",
      y: "2"
    }
  ) });
}
function $s() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "rect",
    {
      height: "476",
      rx: "14",
      stroke: "currentColor",
      strokeDasharray: "24 24",
      strokeLinecap: "square",
      strokeWidth: "4",
      width: "476",
      x: "2",
      y: "2"
    }
  ) });
}
function ks() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Os() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const Ns = U.div`
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
`, xs = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ f(
  Ns,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Ts = {
  [be.CIRCLE_SOLID]: /* @__PURE__ */ f(bs, {}),
  [be.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f($s, {}),
  [be.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(ks, {}),
  [be.SQUARE_DASH]: /* @__PURE__ */ f(Es, {}),
  [be.SQUARE_SOLID]: /* @__PURE__ */ f(Os, {})
};
function Rs({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = Ce(), a = i.toLowerCase().includes("square"), s = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ f(H, { children: [
    n && /* @__PURE__ */ f(mo, { height: e, width: t, children: /* @__PURE__ */ f(
      Ss,
      {
        height: `${r.height * 100}%`,
        isRounded: s,
        isSquare: a,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(xs, { placeholderRectangle: r, ...o, children: Ts[i] })
  ] });
}
const Is = () => {
  const [e, t] = j(), [n, r] = j(!1), o = me(
    (l) => {
      t(l?.detail?.cameraResolution);
      const u = l?.detail?.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  Ve(pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = j({
    code: P.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = me(
    (l) => {
      a({
        code: l?.detail?.instructionCode,
        isEscalated: l?.detail?.isEscalated ?? !1
      });
    },
    [a]
  );
  return Ve(pe.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, As = () => {
  const [e, t] = j(M.LOADING), [n, r] = j(), o = me(
    (i) => {
      t(i.detail?.appState);
      const a = i?.detail?.error;
      a && r(a);
    },
    [t, r]
  );
  return Ve(pe.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, Ps = U.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Ds(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Ls = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Ze(null), r = lo(), [o, i] = j(), a = me(
    (s) => {
      i(s?.detail?.detectedObject);
    },
    [i]
  );
  return Ve(pe.DETECTION_CHANGED, a), ne(() => {
    if (!n.current)
      return;
    const s = { width: e.width, height: e.height }, l = Pa(o), u = (d, c) => {
      if (!c)
        return;
      const { faceCenter: h, faceSize: _ } = c, p = n?.current?.getContext("2d");
      if (!p)
        return;
      const S = ts(_, d);
      p.beginPath(), p.arc(h.x, h.y, S, 0, 2 * Math.PI, !1), p.lineWidth = Ea, p.strokeStyle = r.colors.placeholderColor, p.stroke();
    };
    n.current.width = s.width, n.current.height = s.height, Ds(n.current), u(s, l);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ f(Ps, { ref: n, $isImageMirror: t });
};
function Ms() {
  const { appState: e, error: t } = As(), { cameraResolution: n, instruction: r, isMirroring: o } = Is(), i = r.code === P.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: a },
    instructions: s
  } = Ce();
  if (e === M.ERROR)
    return /* @__PURE__ */ f(ho, { text: t?.message });
  if (e === M.RUNNING && n) {
    const l = es(n);
    return /* @__PURE__ */ f(H, { children: [
      a && /* @__PURE__ */ f(Ls, { cameraResolution: n, isImageMirror: o }),
      /* @__PURE__ */ f(
        Rs,
        {
          backdropHeight: n.height,
          backdropWidth: n.width,
          isBackdrop: !0,
          isInCandidateSelection: i,
          placeholderRectangle: l
        }
      ),
      r.code && /* @__PURE__ */ f(
        ys,
        {
          cssBottom: (l.height + l.shiftY) * 100,
          isInCandidateSelection: i,
          isPortrait: n.width < n.height,
          children: s[r.code]
        }
      ),
      /* @__PURE__ */ f(fs, { customControlEvent: pe.CONTROL, isSwitchCameraDisabled: i })
    ] });
  }
  return /* @__PURE__ */ f(
    ws,
    {
      cameraHeight: n?.height,
      cameraWidth: n?.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function Hs(e) {
  const t = { ...ka, ...e?.instructions }, n = {
    [M.LOADING]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    },
    [M.WAITING]: {
      ...Ht.waiting,
      ...e?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [M.BLURRED]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    }
  }, r = Za(e?.styling?.theme), o = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Na,
    theme: r
  }, i = {
    showDetectionLayer: e?.control?.showDetectionLayer ?? !1,
    showCameraButtons: e?.control?.showCameraButtons ?? !1
  }, a = e?.placeholder ?? Oa;
  return {
    ...e,
    instructions: t,
    appStateInstructions: n,
    placeholder: a,
    styling: o,
    control: i
  };
}
const Fs = ({ configuration: e }) => {
  const t = Ga(pe.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Ba, { uiConfiguration: Hs(e), videoElementSize: t, children: /* @__PURE__ */ f(Ms, {}) });
};
No(Fs, "x-dot-face-auto-capture-ui", ["configuration"]);
