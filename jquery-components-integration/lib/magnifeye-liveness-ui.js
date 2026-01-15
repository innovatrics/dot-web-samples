var Xe, v, mr, ue, Nn, gr, yr, vr, ln, Ft, Ut, Cr, Ge = {}, Er = [], ko = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ke = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function un(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function M(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return ze(e, a, r, o, null);
}
function ze(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++mr, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function Oo() {
  return { current: null };
}
function W(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function Se(e, t) {
  if (t == null) return e.__ ? Se(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Se(e) : null;
}
function wr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return wr(e);
  }
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ht.__r++ || Nn != v.debounceRendering) && ((Nn = v.debounceRendering) || gr)(ht);
}
function ht() {
  for (var e, t, n, r, o, i, a, s = 1; ue.length; ) ue.length > s && ue.sort(yr), e = ue.shift(), s = ue.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), fn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Se(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, $r(i, n, a), r.__e = r.__ = null, n.__e != o && wr(n)));
  ht.__r = 0;
}
function Sr(e, t, n, r, o, i, a, s, l, u, f) {
  var c, p, _, h, w, k, g, m = r && r.__k || Er, S = t.length;
  for (l = No(n, t, m, l, S), c = 0; c < S; c++) (_ = n.__k[c]) != null && (p = _.__i == -1 ? Ge : m[_.__i] || Ge, _.__i = c, k = fn(e, _, p, o, i, a, s, l, u, f), h = _.__e, _.ref && p.ref != _.ref && (p.ref && dn(p.ref, null, _), f.push(_.ref, _.__c || h, _)), w == null && h != null && (w = h), (g = !!(4 & _.__u)) || p.__k === _.__k ? l = br(_, l, e, g) : typeof _.type == "function" && k !== void 0 ? l = k : h && (l = h.nextSibling), _.__u &= -7);
  return n.__e = w, l;
}
function No(e, t, n, r, o) {
  var i, a, s, l, u, f = n.length, c = f, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = ze(null, a, null, null, null) : Ke(a) ? a = e.__k[i] = ze(W, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = ze(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, l = i + p, a.__ = e, a.__b = e.__b + 1, s = null, (u = a.__i = To(a, n, l, c)) != -1 && (c--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > f ? p-- : o < f && p++), typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? p-- : u == l + 1 ? p++ : (u > l ? p-- : p++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < f; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Se(s)), Or(s, s));
  return r;
}
function br(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = br(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = Se(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ke(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function To(e, t, n, r) {
  var o, i, a, s = e.key, l = e.type, u = t[n], f = u != null && (2 & u.__u) == 0;
  if (u === null && s == null || f && s == u.key && l == u.type) return n;
  if (r > (f ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((u = t[a = o >= 0 ? o-- : i++]) != null && (2 & u.__u) == 0 && s == u.key && l == u.type) return a;
  }
  return -1;
}
function Tn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ko.test(t) ? n : n + "px";
}
function rt(e, t, n, r, o) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Tn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Tn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(vr, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = ln, e.addEventListener(t, i ? Ut : Ft, i)) : e.removeEventListener(t, i ? Ut : Ft, i);
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
function xn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = ln++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function fn(e, t, n, r, o, i, a, s, l, u) {
  var f, c, p, _, h, w, k, g, m, S, $, N, E, y, F, U, Pe, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = v.__b) && f(t);
  e: if (typeof B == "function") try {
    if (g = t.props, m = "prototype" in B && B.prototype.render, S = (f = B.contextType) && r[f.__c], $ = f ? S ? S.props.value : f.__ : r, n.__c ? k = (c = t.__c = n.__c).__ = c.__E : (m ? t.__c = c = new B(g, $) : (t.__c = c = new G(g, $), c.constructor = B, c.render = Io), S && S.sub(c), c.state || (c.state = {}), c.__n = r, p = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && B.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Z({}, c.__s)), Z(c.__s, B.getDerivedStateFromProps(g, c.__s))), _ = c.props, h = c.state, c.__v = t, p) m && B.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && B.getDerivedStateFromProps == null && g !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, $), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, $) === !1) {
        for (t.__v != n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(re) {
          re && (re.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, $), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, h, w);
      });
    }
    if (c.context = $, c.props = g, c.__P = e, c.__e = !1, E = v.__r, y = 0, m) {
      for (c.state = c.__s, c.__d = !1, E && E(t), f = c.render(c.props, c.state, c.context), F = 0; F < c._sb.length; F++) c.__h.push(c._sb[F]);
      c._sb = [];
    } else do
      c.__d = !1, E && E(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++y < 25);
    c.state = c.__s, c.getChildContext != null && (r = Z(Z({}, r), c.getChildContext())), m && !p && c.getSnapshotBeforeUpdate != null && (w = c.getSnapshotBeforeUpdate(_, h)), U = f, f != null && f.type === W && f.key == null && (U = kr(f.props.children)), s = Sr(e, Ke(U) ? U : [U], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), k && (c.__E = c.__ = null);
  } catch (re) {
    if (t.__v = null, l || i != null) if (re.then) {
      for (t.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else {
      for (Pe = i.length; Pe--; ) un(i[Pe]);
      zt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, re.then || zt(t);
    v.__e(re, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = xo(n.__e, t, n, r, o, i, a, l, u);
  return (f = v.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function zt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(zt);
}
function $r(e, t, n) {
  for (var r = 0; r < n.length; r++) dn(n[r], n[++r], n[++r]);
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
function kr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ke(e) ? e.map(kr) : Z({}, e);
}
function xo(e, t, n, r, o, i, a, s, l) {
  var u, f, c, p, _, h, w, k = n.props || Ge, g = t.props, m = t.type;
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
    if (i = i && Xe.call(e.childNodes), !s && i != null) for (k = {}, u = 0; u < e.attributes.length; u++) k[(_ = e.attributes[u]).name] = _.value;
    for (u in k) if (_ = k[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = _;
      else if (!(u in g)) {
        if (u == "value" && "defaultValue" in g || u == "checked" && "defaultChecked" in g) continue;
        rt(e, u, null, _, o);
      }
    }
    for (u in g) _ = g[u], u == "children" ? p = _ : u == "dangerouslySetInnerHTML" ? f = _ : u == "value" ? h = _ : u == "checked" ? w = _ : s && typeof _ != "function" || k[u] === _ || rt(e, u, _, k[u], o);
    if (f) s || c && (f.__html == c.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Sr(t.type == "template" ? e.content : e, Ke(p) ? p : [p], t, n, r, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Se(n, 0), s, l), i != null) for (u = i.length; u--; ) un(i[u]);
    s || (u = "value", m == "progress" && h == null ? e.removeAttribute("value") : h != null && (h !== e[u] || m == "progress" && !h || m == "option" && h != k[u]) && rt(e, u, h, k[u], o), u = "checked", w != null && w != e[u] && rt(e, u, w, k[u], o));
  }
  return e;
}
function dn(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    v.__e(o, n);
  }
}
function Or(e, t, n) {
  var r, o;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || dn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Or(r[o], t, n || typeof e.type != "function");
  n || un(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Io(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], fn(t, e = (!r && n || t).__k = M(W, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Xe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), $r(i, e, a);
}
function _n(e, t) {
  ae(e, t, _n);
}
function pn(e, t, n) {
  var r, o, i, a, s = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), ze(e.type, s, r || e.key, o || e.ref, null);
}
function Nr(e) {
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
  return t.__c = "__cC" + Cr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Xe = Er.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, mr = 0, G.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, G.prototype.render = W, ue = [], gr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, vr = /(PointerCapture)$|Capture$/i, ln = 0, Ft = xn(!1), Ut = xn(!0), Cr = 0;
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mt.apply(this, arguments);
}
function Tr(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
var Ao = ["context", "children"], Ro = ["useFragment"];
function Po(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Do.call(this, r);
  }, o.prototype.attributeChangedCallback = Mo, o.prototype.disconnectedCallback = Ho, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, e.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function Lo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = Tr(e, Ao);
  return pn(t, n);
}
function Do(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = M(Lo, mt({}, this._props, { context: t.detail.context }), Ir(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? _n : ae)(this._vdom, this._root);
}
function xr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Mo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[xr(e)] = n, this._vdom = pn(this._vdom, r), ae(this._vdom, this._root);
  }
}
function Ho() {
  ae(this._vdom = null, this._root);
}
function In(e, t) {
  var n = this, r = e.useFragment, o = Tr(e, Ro);
  return M(r ? W : "slot", mt({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Ir(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, a = e.attributes, s = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[xr(a[i].name)] = a[i].value);
  for (i = s.length; i--; ) {
    var l = Ir(s[i], null, n), u = s[i].slot;
    u ? o[u] = M(In, { name: u }, l) : r[i] = l;
  }
  var f = !(!n || !n.shadow), c = t ? M(In, { useFragment: !f }, r) : r;
  return !f && t && (e.innerHTML = ""), M(t || e.nodeName.toLowerCase(), o, c);
}
var Fo = 0;
function d(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Fo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return v.vnode && v.vnode(u), u;
}
const An = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var be = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTION_CHANGED = "face-auto-capture:detection-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(be || {}), hn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.CONTROL = "magnifeye-auto-capture:control", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(hn || {});
const Uo = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  RUNNING: "running",
  COMPLETE: "complete"
}, Wt = {
  ...Uo,
  DONE: "done"
}, Rn = {
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
  LEFT_EYE_NOT_PRESENT: `left_${Rn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Rn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Ve = {
  ...P,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Ye = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Ye || {});
const we = Wt;
var se, x, At, Pn, $e = 0, Ar = [], I = v, Ln = I.__b, Dn = I.__r, Mn = I.diffed, Hn = I.__c, Fn = I.unmount, Un = I.__;
function xe(e, t) {
  I.__h && I.__h(x, e, $e || t), $e = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return $e = 1, mn(Lr, e);
}
function mn(e, t, n) {
  var r = xe(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Lr(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.__f)) {
    var o = function(s, l, u) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, s, l, u);
      var c = r.__c.props !== s;
      return f.forEach(function(p) {
        if (p.__N) {
          var _ = p.__[0];
          p.__ = p.__N, p.__N = void 0, _ !== p.__[0] && (c = !0);
        }
      }), i && i.call(this, s, l, u) || c;
    };
    x.__f = !0;
    var i = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, u), i = f;
      }
      a && a.call(this, s, l, u);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function X(e, t) {
  var n = xe(se++, 3);
  !I.__s && gn(n.__H, t) && (n.__ = e, n.u = t, x.__H.__h.push(n));
}
function Ie(e, t) {
  var n = xe(se++, 4);
  !I.__s && gn(n.__H, t) && (n.__ = e, n.u = t, x.__h.push(n));
}
function Je(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function Rr(e, t, n) {
  $e = 6, Ie(function() {
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
  var n = xe(se++, 7);
  return gn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function he(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Qe(e) {
  var t = x.context[e.__c], n = xe(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function gt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Pr() {
  var e = xe(se++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Bo() {
  for (var e; e = Ar.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ct), e.__H.__h.forEach(jt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  x = null, Ln && Ln(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Un && Un(e, t);
}, I.__r = function(e) {
  Dn && Dn(e), se = 0;
  var t = (x = e.__c).__H;
  t && (At === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(ct), t.__h.forEach(jt), t.__h = [], se = 0)), At = x;
}, I.diffed = function(e) {
  Mn && Mn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ar.push(t) !== 1 && Pn === I.requestAnimationFrame || ((Pn = I.requestAnimationFrame) || zo)(Bo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), At = x = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ct), n.__h = n.__h.filter(function(r) {
        return !r.__ || jt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Hn && Hn(e, t);
}, I.unmount = function(e) {
  Fn && Fn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ct(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Bn = typeof requestAnimationFrame == "function";
function zo(e) {
  var t, n = function() {
    clearTimeout(r), Bn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Bn && (t = requestAnimationFrame(n));
}
function ct(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function jt(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function gn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, L.apply(this, arguments);
};
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Wo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var jo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Go = /* @__PURE__ */ Wo(
  function(e) {
    return jo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Dr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Mr(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, Rt(o) && i({ t: o });
  }, [e, n, t]), X(function() {
    return Rt(o) && i({ t: o }), e(function() {
      Rt(o) && i({ t: o });
    });
  }, [e]), n;
}
function Rt(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Hr(e) {
  e();
}
function Fr(e) {
  return e;
}
function Ur() {
  return [!1, Hr];
}
var Br = Ie;
function Vt(e, t) {
  this.props = e, this.context = t;
}
function Vo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, M(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Vt.prototype = new G()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var zn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), zn && zn(e);
};
var Yo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Zo(e) {
  function t(n) {
    var r = Dr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Yo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Wn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, qo = { map: Wn, forEach: Wn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Xo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Xo(e, t, n, r);
};
var jn = v.unmount;
function zr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Dr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return zr(r, t, n);
  })), e;
}
function Wr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Wr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function lt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function jr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ko(e) {
  var t, n, r, o = null;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      s && (o = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? M(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Fe() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), jn && jn(e);
}, (lt.prototype = new G()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = jr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Wr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, lt.prototype.componentWillUnmount = function() {
  this.o = [];
}, lt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = zr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && M(W, null, e.fallback);
  return o && (o.__u &= -33), [M(W, null, t.__a ? null : e.children), o];
};
var Gn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Jo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ae(null, t.v), t.v = null, t.h = null;
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
  ae(M(Jo, { context: t.context }, e.__v), t.v);
}
function ei(e, t) {
  var n = M(Qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new G()).__a = function(e) {
  var t = this, n = jr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Gn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Fe.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Gn(e, n, t);
  });
};
var Gr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, ti = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ni = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ri = /[A-Z0-9]/g, oi = typeof document < "u", ii = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ai(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function si(e, t, n) {
  return _n(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
G.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(G.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Vn = v.event;
function ci() {
}
function li() {
  return this.cancelBubble;
}
function ui() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Vn && (e = Vn(e)), e.persist = ci, e.isPropagationStopped = li, e.isDefaultPrevented = ui, e.nativeEvent = e;
};
var yn, fi = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Yn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || oi && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : l === "translate" && s === "no" ? s = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ii(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : ni.test(a) && (a = l) : l = a = "oninput" : i && ti.test(a) ? a = a.replace(ri, "-$&").toLowerCase() : s === null && (s = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", fi)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = Gr, Yn && Yn(e);
};
var Zn = v.__r;
v.__r = function(e) {
  Zn && Zn(e), yn = e.__c;
};
var qn = v.diffed;
v.diffed = function(e) {
  qn && qn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), yn = null;
};
var di = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return yn.__n[e.__c].props.value;
}, useCallback: he, useContext: Qe, useDebugValue: gt, useDeferredValue: Fr, useEffect: X, useId: Pr, useImperativeHandle: Rr, useInsertionEffect: Br, useLayoutEffect: Ie, useMemo: te, useReducer: mn, useRef: Je, useState: H, useSyncExternalStore: Mr, useTransition: Ur } } };
function _i(e) {
  return M.bind(null, e);
}
function Et(e) {
  return !!e && e.$$typeof === Gr;
}
function pi(e) {
  return Et(e) && e.type === W;
}
function hi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function mi(e) {
  return Et(e) ? pn.apply(null, arguments) : e;
}
function gi(e) {
  return !!e.__k && (ae(null, e), !0);
}
function yi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var vi = function(e, t) {
  return e(t);
}, Ci = function(e, t) {
  return e(t);
}, Ei = W, wi = Et, ne = { useState: H, useId: Pr, useReducer: mn, useEffect: X, useLayoutEffect: Ie, useInsertionEffect: Br, useTransition: Ur, useDeferredValue: Fr, useSyncExternalStore: Mr, startTransition: Hr, useRef: Je, useImperativeHandle: Rr, useMemo: te, useCallback: he, useContext: Qe, useDebugValue: gt, version: "18.3.1", Children: qo, render: ai, hydrate: si, unmountComponentAtNode: gi, createPortal: ei, createElement: M, createContext: Nr, createFactory: _i, cloneElement: mi, createRef: Oo, Fragment: W, isValidElement: Et, isElement: wi, isFragment: pi, isMemo: hi, findDOMNode: yi, Component: G, PureComponent: Vt, memo: Vo, forwardRef: Zo, flushSync: Ci, unstable_batchedUpdates: vi, StrictMode: Ei, Suspense: lt, SuspenseList: Fe, lazy: Ko, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: di };
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt, Xn;
function bi() {
  return Xn || (Xn = 1, Pt = function(t, n, r, o) {
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
      var c = t[f], p = n[f];
      if (i = r ? r.call(o, c, p, f) : void 0, i === !1 || i === void 0 && c !== p)
        return !1;
    }
    return !0;
  }), Pt;
}
var $i = bi();
const ki = /* @__PURE__ */ Si($i);
var T = "-ms-", We = "-moz-", O = "-webkit-", Vr = "comm", wt = "rule", vn = "decl", Oi = "@import", Yr = "@keyframes", Ni = "@layer", Zr = Math.abs, Cn = String.fromCharCode, Yt = Object.assign;
function Ti(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function qr(e) {
  return e.trim();
}
function J(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function ut(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Xr(e) {
  return e.length;
}
function Ue(e, t) {
  return t.push(e), e;
}
function xi(e, t) {
  return e.map(t).join("");
}
function Kn(e, t) {
  return e.filter(function(n) {
    return !J(n, t);
  });
}
var St = 1, Oe = 1, Kr = 0, j = 0, A = 0, Ae = "";
function bt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: St, column: Oe, length: a, return: "", siblings: s };
}
function ie(e, t) {
  return Yt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Ii() {
  return A;
}
function Ai() {
  return A = j > 0 ? R(Ae, --j) : 0, Oe--, A === 10 && (Oe = 1, St--), A;
}
function V() {
  return A = j < Kr ? R(Ae, j++) : 0, Oe++, A === 10 && (Oe = 1, St++), A;
}
function _e() {
  return R(Ae, j);
}
function ft() {
  return j;
}
function $t(e, t) {
  return ke(Ae, e, t);
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
function Ri(e) {
  return St = Oe = 1, Kr = Y(Ae = e), j = 0, [];
}
function Pi(e) {
  return Ae = "", e;
}
function Lt(e) {
  return qr($t(j - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Li(e) {
  for (; (A = _e()) && A < 33; )
    V();
  return Zt(e) > 2 || Zt(A) > 3 ? "" : " ";
}
function Di(e, t) {
  for (; --t && V() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return $t(e, ft() + (t < 6 && _e() == 32 && V() == 32));
}
function qt(e) {
  for (; V(); )
    switch (A) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && qt(A);
        break;
      // (
      case 40:
        e === 41 && qt(e);
        break;
      // \
      case 92:
        V();
        break;
    }
  return j;
}
function Mi(e, t) {
  for (; V() && e + A !== 57; )
    if (e + A === 84 && _e() === 47)
      break;
  return "/*" + $t(t, j - 1) + "*" + Cn(e === 47 ? e : V());
}
function Hi(e) {
  for (; !Zt(_e()); )
    V();
  return $t(e, j);
}
function Fi(e) {
  return Pi(dt("", null, null, null, [""], e = Ri(e), 0, [0], e));
}
function dt(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, p = 0, _ = 0, h = 0, w = 1, k = 1, g = 1, m = 0, S = "", $ = o, N = i, E = r, y = S; k; )
    switch (h = m, m = V()) {
      // (
      case 40:
        if (h != 108 && R(y, c - 1) == 58) {
          ut(y += C(Lt(m), "&", "&\f"), "&\f", Zr(u ? s[u - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Lt(m);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Li(h);
        break;
      // \
      case 92:
        y += Di(ft() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Ue(Ui(Mi(V(), ft()), t, n, l), l);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * w:
        s[u++] = Y(y) * g;
      // } ; \0
      case 125 * w:
      case 59:
      case 0:
        switch (m) {
          // \0 }
          case 0:
          case 125:
            k = 0;
          // ;
          case 59 + f:
            g == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - c && Ue(_ > 32 ? Qn(y + ";", r, n, c - 1, l) : Qn(C(y, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Ue(E = Jn(y, t, n, u, f, o, s, S, $ = [], N = [], c, i), i), m === 123)
              if (f === 0)
                dt(y, t, E, E, $, i, c, s, N);
              else
                switch (p === 99 && R(y, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dt(e, E, E, r && Ue(Jn(e, E, E, 0, 0, o, s, S, o, $ = [], c, N), N), o, N, c, s, r ? $ : N);
                    break;
                  default:
                    dt(y, E, E, E, [""], N, 0, s, N);
                }
        }
        u = f = _ = 0, w = g = 1, S = y = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Y(y), _ = h;
      default:
        if (w < 1) {
          if (m == 123)
            --w;
          else if (m == 125 && w++ == 0 && Ai() == 125)
            continue;
        }
        switch (y += Cn(m), m * w) {
          // &
          case 38:
            g = f > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (Y(y) - 1) * g, g = 1;
            break;
          // @
          case 64:
            _e() === 45 && (y += Lt(V())), p = _e(), f = c = Y(S = y += Hi(ft())), m++;
            break;
          // -
          case 45:
            h === 45 && Y(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Jn(e, t, n, r, o, i, a, s, l, u, f, c) {
  for (var p = o - 1, _ = o === 0 ? i : [""], h = Xr(_), w = 0, k = 0, g = 0; w < r; ++w)
    for (var m = 0, S = ke(e, p + 1, p = Zr(k = a[w])), $ = e; m < h; ++m)
      ($ = qr(k > 0 ? _[m] + " " + S : C(S, /&\f/g, _[m]))) && (l[g++] = $);
  return bt(e, t, n, o === 0 ? wt : s, l, u, f, c);
}
function Ui(e, t, n, r) {
  return bt(e, t, n, Vr, Cn(Ii()), ke(e, 2, -2), 0, r);
}
function Qn(e, t, n, r, o) {
  return bt(e, t, n, vn, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function Jr(e, t, n) {
  switch (Ti(e, t)) {
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
      return We + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + We + e + T + e + e;
    // writing-mode
    case 5936:
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return O + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return O + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return O + e + T + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return O + e + T + e + e;
    // order
    case 6165:
      return O + e + T + "flex-" + e + e;
    // align-items
    case 5187:
      return O + e + C(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return O + e + T + "flex-item-" + C(e, /flex-|-self/g, "") + (J(e, /flex-|baseline/) ? "" : T + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return O + e + T + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return O + e + T + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return O + e + T + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return O + "box-" + C(e, "-grow", "") + O + e + T + C(e, "grow", "positive") + e;
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
      return C(C(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    // justify-self
    case 4200:
      if (!J(e, /flex-|baseline/)) return T + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, J(r.props, /grid-\w+-end/);
      }) ? ~ut(e + (n = n[t].value), "span", 0) ? e : T + C(e, "-start", "") + e + T + "grid-row-span:" + (~ut(n, "span", 0) ? J(n, /\d+/) : +J(n, /\d+/) - +J(e, /\d+/)) + ";" : T + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return J(r.props, /grid-\w+-start/);
      }) ? e : T + C(C(e, "-end", "-span"), "span ", "") + e;
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
        switch (R(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + We + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ut(e, "stretch", 0) ? Jr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + O) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + T + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return C(e, ":", ":" + T) + e;
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
function yt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Bi(e, t, n, r) {
  switch (e.type) {
    case Ni:
      if (e.children.length) break;
    case Oi:
    case vn:
      return e.return = e.return || e.value;
    case Vr:
      return "";
    case Yr:
      return e.return = e.value + "{" + yt(e.children, r) + "}";
    case wt:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = yt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function zi(e) {
  var t = Xr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Wi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ji(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case vn:
        e.return = Jr(e.value, e.length, n);
        return;
      case Yr:
        return yt([ie(e, { value: C(e.value, "@", "@" + O) })], r);
      case wt:
        if (e.length)
          return xi(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(ie(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), Ee(ie(e, { props: [o] })), Yt(e, { props: Kn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(ie(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Ee(ie(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), Ee(ie(e, { props: [C(o, /:(plac\w+)/, T + "input-$1")] })), Ee(ie(e, { props: [o] })), Yt(e, { props: Kn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Gi = {
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
}, b = {}, ge = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Qr = "active", eo = "data-styled-version", kt = "6.1.19", En = `/*!sc*/
`, vt = typeof window < "u" && typeof document < "u", Vi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), er = /invalid hook call/i, ot = /* @__PURE__ */ new Set(), Yi = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
        er.test(a) ? (i = !1, ot.delete(r)) : o.apply(void 0, me([a], s, !1));
      }, Je(), i && !ot.has(r) && (console.warn(r), ot.add(r));
    } catch (a) {
      er.test(a.message) && ot.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Ot = Object.freeze([]), Ne = Object.freeze({});
function Zi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), qi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xi = /(^-|-$)/g;
function tr(e) {
  return e.replace(qi, "-").replace(Xi, "");
}
var Ki = /(a)(d)/gi, it = 52, nr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > it; t = t / it | 0) n = nr(t % it) + n;
  return (nr(t % it) + n).replace(Ki, "$1-$2");
}
var Dt, to = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, no = function(e) {
  return fe(to, e);
};
function ro(e) {
  return Kt(no(e) >>> 0);
}
function oo(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var io = typeof Symbol == "function" && Symbol.for, ao = io ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ji = io ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ea = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, so = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ta = ((Dt = {})[Ji] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Dt[ao] = so, Dt);
function rr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ao ? so : "$$typeof" in e ? ta[e.$$typeof] : Qi;
  var t;
}
var na = Object.defineProperty, ra = Object.getOwnPropertyNames, or = Object.getOwnPropertySymbols, oa = Object.getOwnPropertyDescriptor, ia = Object.getPrototypeOf, ir = Object.prototype;
function co(e, t, n) {
  if (typeof t != "string") {
    if (ir) {
      var r = ia(t);
      r && r !== ir && co(e, r, n);
    }
    var o = ra(t);
    or && (o = o.concat(or(t)));
    for (var i = rr(e), a = rr(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in ea || n && n[l] || a && l in a || i && l in i)) {
        var u = oa(t, l);
        try {
          na(e, l, u);
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
function wn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Jt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Qt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Qt(e[r], t[r]);
  return e;
}
function Sn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var aa = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function sa() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function q(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(sa.apply(void 0, me([aa[e]], t, !1)).trim());
}
var ca = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw q(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(En);
    return n;
  }, e;
})(), la = 1 << 30, _t = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), pt = 1, at = function(e) {
  if (_t.has(e)) return _t.get(e);
  for (; Ct.has(pt); ) pt++;
  var t = pt++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > la)) throw q(16, "".concat(t));
  return _t.set(e, t), Ct.set(t, e), t;
}, ua = function(e, t) {
  pt = t + 1, _t.set(e, t), Ct.set(t, e);
}, fa = "style[".concat(ge, "][").concat(eo, '="').concat(kt, '"]'), da = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), _a = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, pa = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(En), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(da);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (ua(f, u), _a(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, ar = function(e) {
  for (var t = document.querySelectorAll(fa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ge) !== Qr && (pa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ha() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var lo = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ge, "]")));
    return l[l.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Qr), r.setAttribute(eo, kt);
  var a = ha();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ma = (function() {
  function e(t) {
    this.element = lo(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw q(17);
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
})(), ga = (function() {
  function e(t) {
    this.element = lo(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), ya = (function() {
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
})(), sr = vt, va = { isServer: !vt, useCSSOMInjection: !Vi }, uo = (function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, va), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && vt && sr && (sr = !1, ar(this)), Sn(this, function() {
      return (function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var p = (function(g) {
            return Ct.get(g);
          })(c);
          if (p === void 0) return "continue";
          var _ = i.names.get(p), h = a.getGroup(c);
          if (_ === void 0 || !_.size || h.length === 0) return "continue";
          var w = "".concat(ge, ".g").concat(c, '[id="').concat(p, '"]'), k = "";
          _ !== void 0 && _.forEach(function(g) {
            g.length > 0 && (k += "".concat(g, ","));
          }), l += "".concat(h).concat(w, '{content:"').concat(k, '"}').concat(En);
        }, f = 0; f < s; f++) u(f);
        return l;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return at(t);
  }, e.prototype.rehydrate = function() {
    !this.server && vt && ar(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new ya(o) : r ? new ma(o) : new ga(o);
    })(this.options), new ca(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (at(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(at(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(at(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), Ca = /&/g, Ea = /^\s*\/\/.*$/gm;
function fo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = fo(n.children, t)), n;
  });
}
function _o(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, l = s === void 0 ? Ot : s, u = function(p, _, h) {
    return h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, f = l.slice();
  f.push(function(p) {
    p.type === wt && p.value.includes("&") && (p.props[0] = p.props[0].replace(Ca, n).replace(r, u));
  }), a.prefix && f.push(ji), f.push(Bi);
  var c = function(p, _, h, w) {
    _ === void 0 && (_ = ""), h === void 0 && (h = ""), w === void 0 && (w = "&"), t = w, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var k = p.replace(Ea, ""), g = Fi(h || _ ? "".concat(h, " ").concat(_, " { ").concat(k, " }") : k);
    a.namespace && (g = fo(g, a.namespace));
    var m = [];
    return yt(g, zi(f.concat(Wi(function(S) {
      return m.push(S);
    })))), m;
  };
  return c.hash = l.length ? l.reduce(function(p, _) {
    return _.name || q(15), fe(p, _.name);
  }, to).toString() : "", c;
}
var wa = new uo(), en = _o(), bn = ne.createContext({ shouldForwardProp: void 0, styleSheet: wa, stylis: en });
bn.Consumer;
var Sa = ne.createContext(void 0);
function tn() {
  return Qe(bn);
}
function ba(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = te(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return _o({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  X(function() {
    ki(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ne.createElement(bn.Provider, { value: s }, ne.createElement(Sa.Provider, { value: a }, e.children));
}
var nn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Sn(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
})(), $a = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    $a(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var po = function(e) {
  return e == null || e === !1 || e === "";
}, ho = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !po(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(cr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, me(me(["".concat(o, " {")], ho(i), !1), ["}"], !1)) : r.push("".concat(cr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Gi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (po(e)) return [];
  if (wn(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || Te(o) || o === null || console.error("".concat(oo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? ho(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ot, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function ka(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !wn(n)) return !1;
  }
  return !0;
}
var Oa = no(kt), Na = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ka(t), this.componentId = n, this.baseHash = fe(Oa, n), this.baseStyle = r, uo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Jt(pe(this.rules, t, n, r)), a = Kt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = fe(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string") u += c, b.NODE_ENV !== "production" && (l = fe(l, c));
        else if (c) {
          var p = Jt(pe(c, t, n, r));
          l = fe(l, p + f), u += p;
        }
      }
      if (u) {
        var _ = Kt(l >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
})(), Ze = ne.createContext(void 0);
Ze.Consumer;
function mo() {
  var e = Qe(Ze);
  if (!e) throw q(18);
  return e;
}
function Ta(e) {
  var t = ne.useContext(Ze), n = te(function() {
    return (function(r, o) {
      if (!r) throw q(14);
      if (ye(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw q(8);
      return o ? L(L({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ne.createElement(Ze.Provider, { value: n }, e.children) : null;
}
var Ht = {}, lr = /* @__PURE__ */ new Set();
function xa(e, t, n) {
  var r = wn(e), o = e, i = !Mt(e), a = t.attrs, s = a === void 0 ? Ot : a, l = t.componentId, u = l === void 0 ? (function($, N) {
    var E = typeof $ != "string" ? "sc" : tr($);
    Ht[E] = (Ht[E] || 0) + 1;
    var y = "".concat(E, "-").concat(ro(kt + E + Ht[E]));
    return N ? "".concat(N, "-").concat(y) : y;
  })(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? (function($) {
    return Mt($) ? "styled.".concat($) : "Styled(".concat(oo($), ")");
  })(e) : f, p = t.displayName && t.componentId ? "".concat(tr(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, h = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      h = function($, N) {
        return w($, N) && k($, N);
      };
    } else h = w;
  }
  var g = new Na(n, p, r ? o.componentStyle : void 0);
  function m($, N) {
    return (function(E, y, F) {
      var U = E.attrs, Pe = E.componentStyle, B = E.defaultProps, re = E.foldedComponentIds, kn = E.styledComponentId, So = E.target, bo = ne.useContext(Ze), $o = tn(), Nt = E.shouldForwardProp || $o.shouldForwardProp;
      b.NODE_ENV !== "production" && gt(kn);
      var On = Zi(y, bo, B) || Ne, K = (function(et, Me, tt) {
        for (var Ce, le = L(L({}, Me), { className: void 0, theme: tt }), It = 0; It < et.length; It += 1) {
          var nt = ye(Ce = et[It]) ? Ce(le) : Ce;
          for (var oe in nt) le[oe] = oe === "className" ? de(le[oe], nt[oe]) : oe === "style" ? L(L({}, le[oe]), nt[oe]) : nt[oe];
        }
        return Me.className && (le.className = de(le.className, Me.className)), le;
      })(U, y, On), Le = K.as || So, De = {};
      for (var z in K) K[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && K.theme === On || (z === "forwardedAs" ? De.as = K.forwardedAs : Nt && !Nt(z, Le) || (De[z] = K[z], Nt || b.NODE_ENV !== "development" || Go(z) || lr.has(z) || !Xt.has(Le) || (lr.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Tt = (function(et, Me) {
        var tt = tn(), Ce = et.generateAndInjectStyles(Me, tt.styleSheet, tt.stylis);
        return b.NODE_ENV !== "production" && gt(Ce), Ce;
      })(Pe, K);
      b.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(Tt);
      var xt = de(re, kn);
      return Tt && (xt += " " + Tt), K.className && (xt += " " + K.className), De[Mt(Le) && !Xt.has(Le) ? "class" : "className"] = xt, F && (De.ref = F), M(Le, De);
    })(S, $, N);
  }
  m.displayName = c;
  var S = ne.forwardRef(m);
  return S.attrs = _, S.componentStyle = g, S.displayName = c, S.shouldForwardProp = h, S.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = p, S.target = r ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = r ? (function(N) {
      for (var E = [], y = 1; y < arguments.length; y++) E[y - 1] = arguments[y];
      for (var F = 0, U = E; F < U.length; F++) Qt(N, U[F], !0);
      return N;
    })({}, o.defaultProps, $) : $;
  } }), b.NODE_ENV !== "production" && (Yi(c, p), S.warnTooManyClasses = /* @__PURE__ */ (function($, N) {
    var E = {}, y = !1;
    return function(F) {
      if (!y && (E[F] = !0, Object.keys(E).length >= 200)) {
        var U = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat($).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, E = {};
      }
    };
  })(c, p)), Sn(S, function() {
    return ".".concat(S.styledComponentId);
  }), i && co(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function ur(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var fr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ce(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || Te(e)) return fr(pe(ur(Ot, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : fr(pe(ur(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, ce.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, L(L({}, n), o));
  }, r;
}
var go = function(e) {
  return rn(xa, e);
}, D = go;
Xt.forEach(function(e) {
  D[e] = go(e);
});
function Re(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Jt(ce.apply(void 0, me([e], t, !1))), o = ro(r);
  return new nn(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var st = "__sc-".concat(ge, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[st] || (window[st] = 0), window[st] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[st] += 1);
const Ia = 2, yo = 14, Aa = 0.0276;
var Q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Q || {});
const Be = {
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
}, dr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Ra = {
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
}, Pa = {
  ...Ra,
  [Ve.FIT_YOUR_EYE]: "Fit your eye into square",
  [Ve.DEVICE_PITCHED]: "Hold your phone at eye level"
}, La = "rgba(19, 19, 19, 0.5)", Da = 34;
function _r(e, t) {
  return Math.max(t, t + (e - 400) * Aa + 2);
}
const Ma = (e, t = yo) => e ? e.width < e.height ? _r(e.width, t) : _r(e.height, t) : t, Ha = (e) => e > Q.Default ? Be[Q.Default] : e > Q.L ? Be[Q.L] : e > Q.M ? Be[Q.M] : Be[Q.S], Fa = (e) => e ? Ha(e.width) : Be[Q.Default];
function Ua() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ba(e) {
  if (e)
    return {
      faceCenter: e.faceCenter,
      faceSize: e.faceSize
    };
}
const je = Nr(void 0);
je.displayName = "ConfigurationContext";
function ve() {
  const e = Qe(je);
  if (!e)
    throw new Error(
      `${je.displayName} must be used within a ${je.displayName} Provider`
    );
  return e;
}
function za({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = mo(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ma(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ d(je.Provider, { value: o, children: e });
}
const vo = ({ svgSize: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Wa = D.div`
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
`, ja = D.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ga = D.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, on = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = ve();
  return /* @__PURE__ */ d(Wa, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ d(ja, { children: [
    e ? /* @__PURE__ */ d(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ d(Ga, { $fontSize: o, children: r })
  ] }) });
}, Co = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ d(on, { Icon: vo, position: "relative", text: e });
class Va extends G {
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
    return this.state.hasError ? /* @__PURE__ */ d(Co, { Icon: vo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ya = D.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Za({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return X(() => {
    Ua();
  }, []), /* @__PURE__ */ d(ba, { target: t.styleTarget, children: /* @__PURE__ */ d(Ta, { theme: t.styling.theme, children: /* @__PURE__ */ d(Ya, { children: /* @__PURE__ */ d(Va, { videoElementSize: n, children: /* @__PURE__ */ d(za, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const qa = 0.75, Xa = 2, Ka = "dot-auto-capture-video";
function qe(e, t) {
  const n = Je(t);
  X(() => {
    n.current = t;
  }, [t]), X(
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
function Ja(e) {
  const [t, n] = H(), r = he(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return qe(e, r), Ie(() => {
    if (!t) {
      const o = document.getElementById(Ka);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Qa(e, t) {
  return e ? `${e}, ${t}` : t;
}
const es = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, ts = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: yo
}, He = {
  colors: es,
  font: ts
}, ns = (e) => e ? {
  ...He,
  ...e,
  colors: {
    ...He.colors,
    ...e.colors
  },
  font: {
    ...He.font,
    ...e.font,
    family: Qa(e.font?.family, He.font.family)
  }
} : He, Eo = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, pr = (e, t) => {
  Eo(e, {
    instruction: t
  });
}, rs = (e) => {
  Eo(e, { animationEnd: !0 });
}, os = (e) => Number.parseFloat(e.toFixed(3)), $n = (e, t) => Math.min(e, t), is = ({ height: e, width: t }, n) => {
  const r = $n(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, as = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = is(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function ss(e, t) {
  const n = $n(t.width, t.height);
  return os(e * n);
}
function cs(e) {
  return as(e, qa);
}
function ls(e, t) {
  return ss(e, t) * Xa;
}
async function us() {
  return navigator.mediaDevices.enumerateDevices();
}
async function fs() {
  return (await us()).filter((t) => t.kind === "videoinput");
}
const ds = () => {
  const [e, t] = H(!1);
  return X(() => {
    (async () => (await fs()).length > 1 && t(!0))();
  }, []), e;
}, _s = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ d("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ d("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), ps = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), wo = D.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, hs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(_s, { size: t }) }), ms = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(ps, { size: t }) }), gs = D.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ys = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = ve(), o = ds();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Fa(r);
  return /* @__PURE__ */ d(gs, { $padding: i, children: [
    o && /* @__PURE__ */ d(ms, { disabled: t, onClick: () => {
      pr(e, An.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ d(
      hs,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          pr(e, An.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, hr = 2.6, an = "1.5s", sn = "1.5s", cn = "ease-in-out", vs = 2500, Cs = "2.5s", Es = "0.3s", ws = "linear", Ss = ".5s", bs = "3s", $s = "ease-in-out", ks = ".5s", Os = ".5s", Ns = "ease-out", Ts = (e) => Re`
100% {
  transform: translateX(22%)  scale(${e});
}
`, xs = (e) => Re`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, Is = Re`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, As = Re`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, Rs = Re`
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
`, Ps = Re`
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
`, Ls = D.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && ce`
      animation: ${Is} ${Es}
        ${ws} both;
      animation-delay: ${Cs};

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
`, Ds = D.div`
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
`, Ms = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = ve();
  return /* @__PURE__ */ d(Ls, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ d(
    Ds,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Da,
      children: e
    }
  ) });
}, Hs = D.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Fs = ({ svgSize: e }) => /* @__PURE__ */ d(Hs, { children: /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), Us = D.div`
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
`, Bs = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = ve(), i = $n(r, t);
  return /* @__PURE__ */ d(Us, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ d("mask", { id: "mask", children: [
      /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ d("g", { children: e })
    ] }) }),
    /* @__PURE__ */ d("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function zs({ cameraHeight: e, cameraWidth: t, state: n }) {
  const { appStateInstructions: r } = ve();
  return !n || n === Wt.ERROR || !r?.[n]?.visible ? null : n === Wt.DONE ? /* @__PURE__ */ d(W, { children: [
    e && t && /* @__PURE__ */ d(Bs, { height: e, width: t }),
    /* @__PURE__ */ d(on, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ d(on, { Icon: Fs, isCameraReady: !0, text: r[n].text });
}
const Ws = D.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function js(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Gs = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Je(null), r = mo(), [o, i] = H(), a = he(
    (s) => {
      i(s?.detail?.detectedObject);
    },
    [i]
  );
  return qe(be.DETECTION_CHANGED, a), X(() => {
    if (!n.current)
      return;
    const s = { width: e.width, height: e.height }, l = Ba(o), u = (f, c) => {
      if (!c)
        return;
      const { faceCenter: p, faceSize: _ } = c, h = n?.current?.getContext("2d");
      if (!h)
        return;
      const w = ls(_, f);
      h.beginPath(), h.arc(p.x, p.y, w, 0, 2 * Math.PI, !1), h.lineWidth = Ia, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = s.width, n.current.height = s.height, js(n.current), u(s, l);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ d(Ws, { ref: n, $isImageMirror: t });
}, Vs = () => {
  const [e, t] = H(), [n, r] = H(!1), o = he(
    (l) => {
      t(l?.detail?.cameraResolution);
      const u = l?.detail?.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  qe(be.CAMERA_PROPS_CHANGED, o);
  const [i, a] = H({
    code: P.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = he(
    (l) => {
      a({
        code: l?.detail?.instructionCode,
        isEscalated: l?.detail?.isEscalated ?? !1
      });
    },
    [a]
  );
  return qe(be.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Ys = () => {
  const [e, t] = H(Ye.DISTANT), [n, r] = H(we.LOADING), [o, i] = H(), a = he(
    (s) => {
      const { error: l, phase: u, state: f } = s.detail || {};
      u && t(u), f && r(f), l && i(l);
    },
    [t, r, i]
  );
  return qe(hn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, Zs = (e, t) => {
  const [n, r] = H(!1);
  return X(() => {
    if (t === Ye.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, vs);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === Ve.CANDIDATE_SELECTION ? e : Ve.FIT_YOUR_EYE : e;
}, qs = D.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  #backdrop-cutout,
  #placeholder {
    @media (min-width: 668px) {
      stroke-width: 4;
    }
    @media (min-width: 2240px) {
      stroke-width: 6;
    }
    transform-origin: center;

    ${(e) => e.$isAnimating && ce`
        animation: ${Ts(hr)} ${sn}
          ${cn} both;
        animation-delay: ${an};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && ce`
          animation: ${xs(hr)} ${sn}
            ${cn} both;
          animation-delay: ${an};
        `}
    }
  }
`, Xs = ({
  handleAnimationEnd: e,
  height: t,
  initialPosition: n,
  isAnimating: r,
  isInCandidateSelection: o,
  width: i
}) => {
  const {
    styling: { backdropColor: a }
  } = ve();
  return /* @__PURE__ */ d(
    qs,
    {
      $isAnimating: r,
      $isInCandidateSelection: o,
      onAnimationEnd: e,
      children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${i} ${t}`, children: [
        /* @__PURE__ */ d("mask", { id: "mask", children: [
          /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
          /* @__PURE__ */ d(
            "rect",
            {
              fill: "#000",
              height: `${n.height * 100}%`,
              id: "backdrop-cutout",
              rx: "50%",
              width: `${n.width * 100}%`,
              x: `${n.shiftX * 100}%`,
              y: `${n.shiftY * 100}%`
            }
          )
        ] }),
        /* @__PURE__ */ d("rect", { fill: a, height: "100%", mask: "url(#mask)", width: "100%" }),
        /* @__PURE__ */ d(
          "rect",
          {
            clipPath: "circle()",
            fill: "none",
            height: `${n.height * 100}%`,
            id: "placeholder",
            rx: "50%",
            stroke: "currentColor",
            strokeWidth: "3",
            width: `${n.width * 100}%`,
            x: `${n.shiftX * 100}%`,
            y: `${n.shiftY * 100}%`
          }
        )
      ] })
    }
  );
};
function Ks() {
  return /* @__PURE__ */ d(
    "svg",
    {
      id: "Layer_1",
      style: "enable-background:new 0 0 62 62;",
      version: "1.1",
      viewBox: "0 0 62 62",
      x: "0px",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      xmlSpace: "preserve",
      y: "0px",
      children: /* @__PURE__ */ d(
        "path",
        {
          className: "st0",
          d: `M48.8,1H54c3.9,0,7,3.1,7,7v5.5 M13.2,1H8C4.1,1,1,4.1,1,8c0,1.8,0,3.7,0,5.5 M1,48.5V54c0,3.9,3.1,7,7,7h5.8
	 M61,48.5V54c0,3.9-3.1,7-7,7h-5.2`,
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: "1"
        }
      )
    }
  );
}
function Js() {
  return /* @__PURE__ */ d(
    "svg",
    {
      id: "Layer_1",
      style: "enable-background:new 0 0 154 70;",
      version: "1.1",
      viewBox: "0 0 154 70",
      x: "0px",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      xmlSpace: "preserve",
      y: "0px",
      children: [
        /* @__PURE__ */ d(
          "path",
          {
            className: "st0",
            d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ d(
          "path",
          {
            className: "st1",
            d: `M152.5,35c-0.2,0.2-0.5,0.5-0.8,0.8c-0.9,0.9-2.2,2.3-4,3.9c-3.5,3.3-8.6,7.6-15.2,11.9
	C119.3,60.3,100.3,69,77.1,69c-23.2,0-42.3-8.7-55.6-17.3C14.8,47.3,9.6,43,6.1,39.7c-1.8-1.6-3.1-3-4-3.9c-0.3-0.3-0.6-0.6-0.8-0.8
	c0.2-0.2,0.5-0.5,0.8-0.8c0.9-0.9,2.2-2.3,4-3.9c3.5-3.3,8.7-7.6,15.4-11.9C34.8,9.7,53.8,1,77.1,1c23.2,0,42.2,8.7,55.4,17.3
	c6.6,4.3,11.7,8.7,15.2,11.9c1.7,1.6,3.1,3,4,3.9C152,34.5,152.3,34.8,152.5,35z`,
            fill: "none",
            stroke: "#FFFFFF",
            strokeMiterlimit: "10",
            strokeWidth: "2"
          }
        )
      ]
    }
  );
}
const Qs = D.div`
  z-index: 1;
  position: absolute;
  top: 47%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 7%;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 14%;
  }

  ${(e) => e.$isAnimating && ce`
      animation: ${As} ${sn} ${cn} both;
      animation-delay: ${an};
    `}
`, ec = D.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;

  ${(e) => e.$isAnimating && ce`
      animation: ${Rs} ${bs} ${$s} both;
      animation-delay: ${Ss};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, tc = D.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && ce`
      animation: ${Ps} ${Os} ${Ns} both;
      animation-delay: ${ks};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, nc = ({ isAnimating: e, isInCandidateSelection: t }) => /* @__PURE__ */ d(Qs, { $isAnimating: e, children: [
  /* @__PURE__ */ d(tc, { $isAnimating: e, $isInCandidateSelection: t, children: /* @__PURE__ */ d(Ks, {}) }),
  /* @__PURE__ */ d(ec, { $isAnimating: e, children: /* @__PURE__ */ d(Js, {}) })
] }), rc = () => {
  const { cameraResolution: e, instruction: t, isMirroring: n } = Vs(), { magnifEyeError: r, magnifEyePhase: o, magnifEyeState: i } = Ys(), { instructions: a } = ve(), s = Zs(t.code, o), l = s === Ve.CANDIDATE_SELECTION, u = o === Ye.MIDDLE || o === Ye.CLOSEUP;
  if (i === we.ERROR)
    return /* @__PURE__ */ d(Co, { text: r?.message });
  if ((i === we.RUNNING || i === we.WAITING) && e) {
    const f = cs(e);
    return /* @__PURE__ */ d(W, { children: [
      !u && /* @__PURE__ */ d(Gs, { cameraResolution: e, isImageMirror: n }),
      /* @__PURE__ */ d(
        Xs,
        {
          handleAnimationEnd: () => rs(hn.ANIMATION_END),
          height: e.height,
          initialPosition: f,
          isAnimating: u,
          isInCandidateSelection: l,
          width: e.width
        }
      ),
      s && /* @__PURE__ */ d(
        Ms,
        {
          cssBottom: (f.height + f.shiftY) * 100,
          isAnimating: u,
          isInCandidateSelection: l,
          isPortrait: e.width < e.height,
          children: a[s]
        }
      ),
      /* @__PURE__ */ d(nc, { isAnimating: u, isInCandidateSelection: l }),
      !u && /* @__PURE__ */ d(ys, { customControlEvent: be.CONTROL, isSwitchCameraDisabled: l })
    ] });
  }
  return /* @__PURE__ */ d(
    zs,
    {
      cameraHeight: e?.height,
      cameraWidth: e?.width,
      state: i
    }
  );
}, oc = (e) => {
  const t = { ...Pa, ...e?.instructions }, n = {
    [we.LOADING]: {
      ...dr.loading,
      ...e?.appStateInstructions?.loading
    },
    [we.DONE]: {
      ...dr.done,
      ...e?.appStateInstructions?.done
    }
  }, r = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? La,
    theme: ns(e?.styling?.theme)
  }, o = {
    showCameraButtons: e?.control?.showCameraButtons ?? !1
  };
  return {
    instructions: t,
    appStateInstructions: n,
    styling: r,
    control: o
  };
}, ic = ({ configuration: e }) => {
  const t = Ja(be.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ d(Za, { uiConfiguration: oc(e), videoElementSize: t, children: /* @__PURE__ */ d(rc, {}) });
};
Po(ic, "x-dot-magnifeye-liveness-ui", ["configuration"]);
