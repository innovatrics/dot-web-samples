var Ze, C, pr, _e, bn, mr, gr, yr, sn, Ft, Bt, vr, Ve = {}, Cr = [], ko = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xe = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function an(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return je(e, s, r, o, null);
}
function je(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++pr, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function No() {
  return { current: null };
}
function F(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function ke(e, t) {
  if (t == null) return e.__ ? ke(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? ke(e) : null;
}
function Sr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Sr(e);
  }
}
function Wt(e) {
  (!e.__d && (e.__d = !0) && _e.push(e) && !_t.__r++ || bn != C.debounceRendering) && ((bn = C.debounceRendering) || mr)(_t);
}
function _t() {
  for (var e, t, n, r, o, i, s, a = 1; _e.length; ) _e.length > a && _e.sort(gr), e = _e.shift(), a = _e.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], s = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, C.vnode && C.vnode(n), cn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? ke(r), !!(32 & r.__u), s), n.__v = r.__v, n.__.__k[n.__i] = n, br(i, n, s), r.__e = r.__ = null, n.__e != o && Sr(n)));
  _t.__r = 0;
}
function Er(e, t, n, r, o, i, s, a, u, l, d) {
  var c, h, _, g, v, S, m, p = r && r.__k || Cr, b = t.length;
  for (u = Io(n, t, p, u, b), c = 0; c < b; c++) (_ = n.__k[c]) != null && (h = _.__i == -1 ? Ve : p[_.__i] || Ve, _.__i = c, S = cn(e, _, h, o, i, s, a, u, l, d), g = _.__e, _.ref && h.ref != _.ref && (h.ref && ln(h.ref, null, _), d.push(_.ref, _.__c || g, _)), v == null && g != null && (v = g), (m = !!(4 & _.__u)) || h.__k === _.__k ? u = wr(_, u, e, m) : typeof _.type == "function" && S !== void 0 ? u = S : g && (u = g.nextSibling), _.__u &= -7);
  return n.__e = v, u;
}
function Io(e, t, n, r, o) {
  var i, s, a, u, l, d = n.length, c = d, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[i] = je(null, s, null, null, null) : Xe(s) ? s = e.__k[i] = je(F, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? s = e.__k[i] = je(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[i] = s, u = i + h, s.__ = e, s.__b = e.__b + 1, a = null, (l = s.__i = Oo(s, n, u, c)) != -1 && (c--, (a = n[l]) && (a.__u |= 2)), a == null || a.__v == null ? (l == -1 && (o > d ? h-- : o < d && h++), typeof s.type != "function" && (s.__u |= 4)) : l != u && (l == u - 1 ? h-- : l == u + 1 ? h++ : (l > u ? h-- : h++, s.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < d; i++) (a = n[i]) != null && (2 & a.__u) == 0 && (a.__e == r && (r = ke(a)), kr(a, a));
  return r;
}
function wr(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = wr(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = ke(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ne(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Xe(e) ? e.some(function(n) {
    ne(n, t);
  }) : t.push(e)), t;
}
function Oo(e, t, n, r) {
  var o, i, s, a = e.key, u = e.type, l = t[n], d = l != null && (2 & l.__u) == 0;
  if (l === null && a == null || d && a == l.key && u == l.type) return n;
  if (r > (d ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((l = t[s = o >= 0 ? o-- : i++]) != null && (2 & l.__u) == 0 && a == l.key && u == l.type) return s;
  }
  return -1;
}
function $n(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ko.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i, s;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || $n(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || $n(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(yr, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = sn, e.addEventListener(t, i ? Bt : Ft, i)) : e.removeEventListener(t, i ? Bt : Ft, i);
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
function kn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = sn++;
      else if (t.t < n.u) return;
      return n(C.event ? C.event(t) : t);
    }
  };
}
function cn(e, t, n, r, o, i, s, a, u, l) {
  var d, c, h, _, g, v, S, m, p, b, k, I, w, y, H, W, Le, j = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [a = t.__e = n.__e]), (d = C.__b) && d(t);
  e: if (typeof j == "function") try {
    if (m = t.props, p = "prototype" in j && j.prototype.render, b = (d = j.contextType) && r[d.__c], k = d ? b ? b.props.value : d.__ : r, n.__c ? S = (c = t.__c = n.__c).__ = c.__E : (p ? t.__c = c = new j(m, k) : (t.__c = c = new V(m, k), c.constructor = j, c.render = xo), b && b.sub(c), c.state || (c.state = {}), c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), p && c.__s == null && (c.__s = c.state), p && j.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Z({}, c.__s)), Z(c.__s, j.getDerivedStateFromProps(m, c.__s))), _ = c.props, g = c.state, c.__v = t, h) p && j.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), p && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (p && j.getDerivedStateFromProps == null && m !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, k), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, k) === !1) {
        for (t.__v != n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ie) {
          ie && (ie.__ = t);
        }), I = 0; I < c._sb.length; I++) c.__h.push(c._sb[I]);
        c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, k), p && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, g, v);
      });
    }
    if (c.context = k, c.props = m, c.__P = e, c.__e = !1, w = C.__r, y = 0, p) {
      for (c.state = c.__s, c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), H = 0; H < c._sb.length; H++) c.__h.push(c._sb[H]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++y < 25);
    c.state = c.__s, c.getChildContext != null && (r = Z(Z({}, r), c.getChildContext())), p && !h && c.getSnapshotBeforeUpdate != null && (v = c.getSnapshotBeforeUpdate(_, g)), W = d, d != null && d.type === F && d.key == null && (W = $r(d.props.children)), a = Er(e, Xe(W) ? W : [W], t, n, r, o, i, s, a, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), S && (c.__E = c.__ = null);
  } catch (ie) {
    if (t.__v = null, u || i != null) if (ie.then) {
      for (t.__u |= u ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      i[i.indexOf(a)] = null, t.__e = a;
    } else {
      for (Le = i.length; Le--; ) an(i[Le]);
      jt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, ie.then || jt(t);
    C.__e(ie, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : a = t.__e = To(n.__e, t, n, r, o, i, s, u, l);
  return (d = C.diffed) && d(t), 128 & t.__u ? void 0 : a;
}
function jt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(jt);
}
function br(e, t, n) {
  for (var r = 0; r < n.length; r++) ln(n[r], n[++r], n[++r]);
  C.__c && C.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      C.__e(i, o.__v);
    }
  });
}
function $r(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Xe(e) ? e.map($r) : Z({}, e);
}
function To(e, t, n, r, o, i, s, a, u) {
  var l, d, c, h, _, g, v, S = n.props || Ve, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((_ = i[l]) && "setAttribute" in _ == !!p && (p ? _.localName == p : _.nodeType == 3)) {
      e = _, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), a && (C.__m && C.__m(t, i), a = !1), i = null;
  }
  if (p == null) S === m || a && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), !a && i != null) for (S = {}, l = 0; l < e.attributes.length; l++) S[(_ = e.attributes[l]).name] = _.value;
    for (l in S) if (_ = S[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") c = _;
      else if (!(l in m)) {
        if (l == "value" && "defaultValue" in m || l == "checked" && "defaultChecked" in m) continue;
        tt(e, l, null, _, o);
      }
    }
    for (l in m) _ = m[l], l == "children" ? h = _ : l == "dangerouslySetInnerHTML" ? d = _ : l == "value" ? g = _ : l == "checked" ? v = _ : a && typeof _ != "function" || S[l] === _ || tt(e, l, _, S[l], o);
    if (d) a || c && (d.__html == c.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Er(t.type == "template" ? e.content : e, Xe(h) ? h : [h], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && ke(n, 0), a, u), i != null) for (l = i.length; l--; ) an(i[l]);
    a || (l = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[l] || p == "progress" && !g || p == "option" && g != S[l]) && tt(e, l, g, S[l], o), l = "checked", v != null && v != e[l] && tt(e, l, v, S[l], o));
  }
  return e;
}
function ln(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    C.__e(o, n);
  }
}
function kr(e, t, n) {
  var r, o;
  if (C.unmount && C.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || ln(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      C.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && kr(r[o], t, n || typeof e.type != "function");
  n || an(e.__e), e.__c = e.__ = e.__e = void 0;
}
function xo(e, t, n) {
  return this.constructor(e, n);
}
function le(e, t, n) {
  var r, o, i, s;
  t == document && (t = document.documentElement), C.__ && C.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], cn(t, e = (!r && n || t).__k = D(F, null, [e]), o || Ve, Ve, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), br(i, e, s);
}
function un(e, t) {
  le(e, t, un);
}
function fn(e, t, n) {
  var r, o, i, s, a = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s != null ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), je(e.type, a, r || e.key, o || e.ref, null);
}
function Nr(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(s) {
        s.__e = !0, Wt(s);
      });
    }, this.sub = function(i) {
      r.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), s && s.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + vr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = Cr.slice, C = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, pr = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), Wt(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Wt(this));
}, V.prototype.render = F, _e = [], mr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, gr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _t.__r = 0, yr = /(PointerCapture)$|Capture$/i, sn = 0, Ft = kn(!1), Bt = kn(!0), vr = 0;
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ht.apply(this, arguments);
}
function Ir(e, t) {
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
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s);
      var a = typeof s;
      s != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t, o), o;
}
function Lo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = Ir(e, Ao);
  return fn(t, n);
}
function Do(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = D(Lo, ht({}, this._props, { context: t.detail.context }), Tr(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? un : le)(this._vdom, this._root);
}
function Or(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Mo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Or(e)] = n, this._vdom = fn(this._vdom, r), le(this._vdom, this._root);
  }
}
function Ho() {
  le(this._vdom = null, this._root);
}
function Nn(e, t) {
  var n = this, r = e.useFragment, o = Ir(e, Ro);
  return D(r ? F : "slot", ht({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(s) {
      s.stopPropagation(), s.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Tr(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, s = e.attributes, a = e.childNodes;
  for (i = s.length; i--; ) s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[Or(s[i].name)] = s[i].value);
  for (i = a.length; i--; ) {
    var u = Tr(a[i], null, n), l = a[i].slot;
    l ? o[l] = D(Nn, { name: l }, u) : r[i] = u;
  }
  var d = !(!n || !n.shadow), c = t ? D(Nn, { useFragment: !d }, r) : r;
  return !d && t && (e.innerHTML = ""), D(t || e.nodeName.toLowerCase(), o, c);
}
var Uo = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, a, u = t;
  if ("ref" in u) for (a in u = {}, t) a == "ref" ? s = t[a] : u[a] = t[a];
  var l = { type: e, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Uo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) u[a] === void 0 && (u[a] = s[a]);
  return C.vnode && C.vnode(l), l;
}
const In = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, Ye = {
  CAMERA_PROPS_CHANGED: "smile-auto-capture:camera-props-changed",
  CONTROL: "smile-auto-capture:control",
  INSTRUCTION_CHANGED: "smile-auto-capture:instruction-changed",
  INSTRUCTION_ESCALATED: "smile-auto-capture:instruction-escalated",
  VIDEO_ELEMENT_SIZE: "smile-auto-capture:video-element-size",
  STATE_CHANGED: "smile-auto-capture:state-changed",
  PHASE_CHANGED: "smile-auto-capture:phase-changed"
}, U = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  RUNNING: "running",
  COMPLETE: "complete"
}, On = {
  EYE_NOT_PRESENT: "eye_not_present"
}, M = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${On.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${On.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, X = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_NOT_PRESENT: "face_not_present",
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, pt = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
};
var ue, T, At, Tn, Ne = 0, xr = [], x = C, xn = x.__b, An = x.__r, Rn = x.diffed, Pn = x.__c, Ln = x.unmount, Dn = x.__;
function Ae(e, t) {
  x.__h && x.__h(T, e, Ne || t), Ne = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function L(e) {
  return Ne = 1, dn(Pr, e);
}
function dn(e, t, n) {
  var r = Ae(ue++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Pr(void 0, t), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], l = r.t(u, a);
    u !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.__f)) {
    var o = function(a, u, l) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, a, u, l);
      var c = r.__c.props !== a;
      return d.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (c = !0);
        }
      }), i && i.call(this, a, u, l) || c;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, s = T.componentWillUpdate;
    T.componentWillUpdate = function(a, u, l) {
      if (this.__e) {
        var d = i;
        i = void 0, o(a, u, l), i = d;
      }
      s && s.call(this, a, u, l);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Q(e, t) {
  var n = Ae(ue++, 3);
  !x.__s && _n(n.__H, t) && (n.__ = e, n.u = t, T.__H.__h.push(n));
}
function Re(e, t) {
  var n = Ae(ue++, 4);
  !x.__s && _n(n.__H, t) && (n.__ = e, n.u = t, T.__h.push(n));
}
function Ct(e) {
  return Ne = 5, re(function() {
    return { current: e };
  }, []);
}
function Ar(e, t, n) {
  Ne = 6, Re(function() {
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
function re(e, t) {
  var n = Ae(ue++, 7);
  return _n(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ce(e, t) {
  return Ne = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = T.context[e.__c], n = Ae(ue++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function mt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Rr() {
  var e = Ae(ue++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Fo() {
  for (var e; e = xr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(st), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  T = null, xn && xn(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Dn && Dn(e, t);
}, x.__r = function(e) {
  An && An(e), ue = 0;
  var t = (T = e.__c).__H;
  t && (At === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(st), t.__h.forEach(zt), t.__h = [], ue = 0)), At = T;
}, x.diffed = function(e) {
  Rn && Rn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xr.push(t) !== 1 && Tn === x.requestAnimationFrame || ((Tn = x.requestAnimationFrame) || Bo)(Fo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), At = T = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(st), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Pn && Pn(e, t);
}, x.unmount = function(e) {
  Ln && Ln(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      st(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Mn = typeof requestAnimationFrame == "function";
function Bo(e) {
  var t, n = function() {
    clearTimeout(r), Mn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Mn && (t = requestAnimationFrame(n));
}
function st(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function zt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function _n(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Pr(e, t) {
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
function ye(e, t, n) {
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
var jo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zo = /* @__PURE__ */ Wo(
  function(e) {
    return jo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Lr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Dr(e, t) {
  var n = t(), r = L({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Re(function() {
    o.__ = n, o.u = t, Rt(o) && i({ t: o });
  }, [e, n, t]), Q(function() {
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
function Mr(e) {
  e();
}
function Hr(e) {
  return e;
}
function Ur() {
  return [!1, Mr];
}
var Fr = Re;
function Vt(e, t) {
  this.props = e, this.context = t;
}
function Go(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Vt.prototype = new V()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var Hn = C.__b;
C.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Hn && Hn(e);
};
var Vo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Yo(e) {
  function t(n) {
    var r = Lr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Vo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Un = function(e, t) {
  return e == null ? null : ne(ne(e).map(t));
}, qo = { map: Un, forEach: Un, count: function(e) {
  return e ? ne(e).length : 0;
}, only: function(e) {
  var t = ne(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ne }, Zo = C.__e;
C.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Zo(e, t, n, r);
};
var Fn = C.unmount;
function Br(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Lr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Br(r, t, n);
  })), e;
}
function Wr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Wr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function jr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Xo(e) {
  var t, n, r, o = null;
  function i(s) {
    if (t || (t = e()).then(function(a) {
      a && (o = a.default || a), r = !0;
    }, function(a) {
      n = a, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? D(o, s) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Fe() {
  this.i = null, this.l = null;
}
C.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fn && Fn(e);
}, (at.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = jr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = Wr(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.o.pop(); ) l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Br(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(F, null, e.fallback);
  return o && (o.__u &= -33), [D(F, null, t.__a ? null : e.children), o];
};
var Bn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Ko(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    le(null, t.v), t.v = null, t.h = null;
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
  le(D(Ko, { context: t.context }, e.__v), t.v);
}
function Jo(e, t) {
  var n = D(Qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new V()).__a = function(e) {
  var t = this, n = jr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Bn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Fe.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ne(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Bn(e, n, t);
  });
};
var zr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, ei = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ti = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ni = /[A-Z0-9]/g, ri = typeof document < "u", oi = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ii(e, t, n) {
  return t.__k == null && (t.textContent = ""), le(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function si(e, t, n) {
  return un(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Wn = C.event;
function ai() {
}
function ci() {
  return this.cancelBubble;
}
function li() {
  return this.defaultPrevented;
}
C.event = function(e) {
  return Wn && (e = Wn(e)), e.persist = ai, e.isPropagationStopped = ci, e.isDefaultPrevented = li, e.nativeEvent = e;
};
var hn, ui = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, jn = C.vnode;
C.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var a = n[s];
      if (!(s === "value" && "defaultValue" in n && a == null || ri && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var u = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : u === "translate" && a === "no" ? a = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? s = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || oi(n.type) ? u === "onfocus" ? s = "onfocusin" : u === "onblur" ? s = "onfocusout" : ti.test(s) && (s = u) : u = s = "oninput" : i && ei.test(s) ? s = s.replace(ni, "-$&").toLowerCase() : a === null && (a = void 0), u === "oninput" && o[s = u] && (s = "oninputCapture"), o[s] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ne(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ne(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ui)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = zr, jn && jn(e);
};
var zn = C.__r;
C.__r = function(e) {
  zn && zn(e), hn = e.__c;
};
var Gn = C.diffed;
C.diffed = function(e) {
  Gn && Gn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), hn = null;
};
var fi = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return hn.__n[e.__c].props.value;
}, useCallback: ce, useContext: Ke, useDebugValue: mt, useDeferredValue: Hr, useEffect: Q, useId: Rr, useImperativeHandle: Ar, useInsertionEffect: Fr, useLayoutEffect: Re, useMemo: re, useReducer: dn, useRef: Ct, useState: L, useSyncExternalStore: Dr, useTransition: Ur } } };
function di(e) {
  return D.bind(null, e);
}
function St(e) {
  return !!e && e.$$typeof === zr;
}
function _i(e) {
  return St(e) && e.type === F;
}
function hi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function pi(e) {
  return St(e) ? fn.apply(null, arguments) : e;
}
function mi(e) {
  return !!e.__k && (le(null, e), !0);
}
function gi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var yi = function(e, t) {
  return e(t);
}, vi = function(e, t) {
  return e(t);
}, Ci = F, Si = St, oe = { useState: L, useId: Rr, useReducer: dn, useEffect: Q, useLayoutEffect: Re, useInsertionEffect: Fr, useTransition: Ur, useDeferredValue: Hr, useSyncExternalStore: Dr, startTransition: Mr, useRef: Ct, useImperativeHandle: Ar, useMemo: re, useCallback: ce, useContext: Ke, useDebugValue: mt, version: "18.3.1", Children: qo, render: ii, hydrate: si, unmountComponentAtNode: mi, createPortal: Jo, createElement: D, createContext: Nr, createFactory: di, cloneElement: pi, createRef: No, Fragment: F, isValidElement: St, isElement: Si, isFragment: _i, isMemo: hi, findDOMNode: gi, Component: V, PureComponent: Vt, memo: Go, forwardRef: Yo, flushSync: vi, unstable_batchedUpdates: yi, StrictMode: Ci, Suspense: at, SuspenseList: Fe, lazy: Xo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fi };
function Ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt, Vn;
function wi() {
  return Vn || (Vn = 1, Pt = function(t, n, r, o) {
    var i = r ? r.call(o, t, n) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === n)
      return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
      return !1;
    var s = Object.keys(t), a = Object.keys(n);
    if (s.length !== a.length)
      return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(n), l = 0; l < s.length; l++) {
      var d = s[l];
      if (!u(d))
        return !1;
      var c = t[d], h = n[d];
      if (i = r ? r.call(o, c, h, d) : void 0, i === !1 || i === void 0 && c !== h)
        return !1;
    }
    return !0;
  }), Pt;
}
var bi = wi();
const $i = /* @__PURE__ */ Ei(bi);
var O = "-ms-", ze = "-moz-", N = "-webkit-", Gr = "comm", Et = "rule", pn = "decl", ki = "@import", Vr = "@keyframes", Ni = "@layer", Yr = Math.abs, mn = String.fromCharCode, Yt = Object.assign;
function Ii(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function qr(e) {
  return e.trim();
}
function ee(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, n) {
  return e.replace(t, n);
}
function ct(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ie(e, t, n) {
  return e.slice(t, n);
}
function q(e) {
  return e.length;
}
function Zr(e) {
  return e.length;
}
function Be(e, t) {
  return t.push(e), e;
}
function Oi(e, t) {
  return e.map(t).join("");
}
function Yn(e, t) {
  return e.filter(function(n) {
    return !ee(n, t);
  });
}
var wt = 1, Oe = 1, Xr = 0, G = 0, A = 0, Pe = "";
function bt(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Oe, length: s, return: "", siblings: a };
}
function ae(e, t) {
  return Yt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function we(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  Be(e, e.siblings);
}
function Ti() {
  return A;
}
function xi() {
  return A = G > 0 ? R(Pe, --G) : 0, Oe--, A === 10 && (Oe = 1, wt--), A;
}
function Y() {
  return A = G < Xr ? R(Pe, G++) : 0, Oe++, A === 10 && (Oe = 1, wt++), A;
}
function me() {
  return R(Pe, G);
}
function lt() {
  return G;
}
function $t(e, t) {
  return Ie(Pe, e, t);
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
function Ai(e) {
  return wt = Oe = 1, Xr = q(Pe = e), G = 0, [];
}
function Ri(e) {
  return Pe = "", e;
}
function Lt(e) {
  return qr($t(G - 1, Zt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pi(e) {
  for (; (A = me()) && A < 33; )
    Y();
  return qt(e) > 2 || qt(A) > 3 ? "" : " ";
}
function Li(e, t) {
  for (; --t && Y() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return $t(e, lt() + (t < 6 && me() == 32 && Y() == 32));
}
function Zt(e) {
  for (; Y(); )
    switch (A) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zt(A);
        break;
      // (
      case 40:
        e === 41 && Zt(e);
        break;
      // \
      case 92:
        Y();
        break;
    }
  return G;
}
function Di(e, t) {
  for (; Y() && e + A !== 57; )
    if (e + A === 84 && me() === 47)
      break;
  return "/*" + $t(t, G - 1) + "*" + mn(e === 47 ? e : Y());
}
function Mi(e) {
  for (; !qt(me()); )
    Y();
  return $t(e, G);
}
function Hi(e) {
  return Ri(ut("", null, null, null, [""], e = Ai(e), 0, [0], e));
}
function ut(e, t, n, r, o, i, s, a, u) {
  for (var l = 0, d = 0, c = s, h = 0, _ = 0, g = 0, v = 1, S = 1, m = 1, p = 0, b = "", k = o, I = i, w = r, y = b; S; )
    switch (g = p, p = Y()) {
      // (
      case 40:
        if (g != 108 && R(y, c - 1) == 58) {
          ct(y += E(Lt(p), "&", "&\f"), "&\f", Yr(l ? a[l - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Lt(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Pi(g);
        break;
      // \
      case 92:
        y += Li(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            Be(Ui(Di(Y(), lt()), t, n, u), u);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * v:
        a[l++] = q(y) * m;
      // } ; \0
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + d:
            m == -1 && (y = E(y, /\f/g, "")), _ > 0 && q(y) - c && Be(_ > 32 ? Zn(y + ";", r, n, c - 1, u) : Zn(E(y, " ", "") + ";", r, n, c - 2, u), u);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Be(w = qn(y, t, n, l, d, o, a, b, k = [], I = [], c, i), i), p === 123)
              if (d === 0)
                ut(y, t, w, w, k, i, c, a, I);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, w, w, r && Be(qn(e, w, w, 0, 0, o, a, b, o, k = [], c, I), I), o, I, c, a, r ? k : I);
                    break;
                  default:
                    ut(y, w, w, w, [""], I, 0, a, I);
                }
        }
        l = d = _ = 0, v = m = 1, b = y = "", c = s;
        break;
      // :
      case 58:
        c = 1 + q(y), _ = g;
      default:
        if (v < 1) {
          if (p == 123)
            --v;
          else if (p == 125 && v++ == 0 && xi() == 125)
            continue;
        }
        switch (y += mn(p), p * v) {
          // &
          case 38:
            m = d > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (q(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            me() === 45 && (y += Lt(Y())), h = me(), d = c = q(b = y += Mi(lt())), p++;
            break;
          // -
          case 45:
            g === 45 && q(y) == 2 && (v = 0);
        }
    }
  return i;
}
function qn(e, t, n, r, o, i, s, a, u, l, d, c) {
  for (var h = o - 1, _ = o === 0 ? i : [""], g = Zr(_), v = 0, S = 0, m = 0; v < r; ++v)
    for (var p = 0, b = Ie(e, h + 1, h = Yr(S = s[v])), k = e; p < g; ++p)
      (k = qr(S > 0 ? _[p] + " " + b : E(b, /&\f/g, _[p]))) && (u[m++] = k);
  return bt(e, t, n, o === 0 ? Et : a, u, l, d, c);
}
function Ui(e, t, n, r) {
  return bt(e, t, n, Gr, mn(Ti()), Ie(e, 2, -2), 0, r);
}
function Zn(e, t, n, r, o) {
  return bt(e, t, n, pn, Ie(e, 0, r), Ie(e, r + 1, -1), r, o);
}
function Kr(e, t, n) {
  switch (Ii(e, t)) {
    // color-adjust
    case 5103:
      return N + "print-" + e + e;
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
      return N + e + e;
    // tab-size
    case 4789:
      return ze + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + ze + e + O + e + e;
    // writing-mode
    case 5936:
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return N + e + O + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return N + e + O + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return N + e + O + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return N + e + O + e + e;
    // order
    case 6165:
      return N + e + O + "flex-" + e + e;
    // align-items
    case 5187:
      return N + e + E(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + O + "flex-$1$2") + e;
    // align-self
    case 5443:
      return N + e + O + "flex-item-" + E(e, /flex-|-self/g, "") + (ee(e, /flex-|baseline/) ? "" : O + "grid-row-" + E(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return N + e + O + "flex-line-pack" + E(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return N + e + O + E(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return N + e + O + E(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return N + "box-" + E(e, "-grow", "") + N + e + O + E(e, "grow", "positive") + e;
    // transition
    case 4554:
      return N + E(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    // cursor
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, N + "$1$`$1");
    // justify-content
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    // justify-self
    case 4200:
      if (!ee(e, /flex-|baseline/)) return O + "grid-column-align" + Ie(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return O + E(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, ee(r.props, /grid-\w+-end/);
      }) ? ~ct(e + (n = n[t].value), "span", 0) ? e : O + E(e, "-start", "") + e + O + "grid-row-span:" + (~ct(n, "span", 0) ? ee(n, /\d+/) : +ee(n, /\d+/) - +ee(e, /\d+/)) + ";" : O + E(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return ee(r.props, /grid-\w+-start/);
      }) ? e : O + E(E(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
      if (q(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + ze + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ct(e, "stretch", 0) ? Kr(E(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return E(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, u, l) {
        return O + o + ":" + i + l + (s ? O + o + "-span:" + (a ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (R(e, t + 6) === 121)
        return E(e, ":", ":" + N) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return E(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + O + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return E(e, ":", ":" + O) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return E(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function gt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Fi(e, t, n, r) {
  switch (e.type) {
    case Ni:
      if (e.children.length) break;
    case ki:
    case pn:
      return e.return = e.return || e.value;
    case Gr:
      return "";
    case Vr:
      return e.return = e.value + "{" + gt(e.children, r) + "}";
    case Et:
      if (!q(e.value = e.props.join(","))) return "";
  }
  return q(n = gt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Bi(e) {
  var t = Zr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
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
      case pn:
        e.return = Kr(e.value, e.length, n);
        return;
      case Vr:
        return gt([ae(e, { value: E(e.value, "@", "@" + N) })], r);
      case Et:
        if (e.length)
          return Oi(n = e.props, function(o) {
            switch (ee(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                we(ae(e, { props: [E(o, /:(read-\w+)/, ":" + ze + "$1")] })), we(ae(e, { props: [o] })), Yt(e, { props: Yn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                we(ae(e, { props: [E(o, /:(plac\w+)/, ":" + N + "input-$1")] })), we(ae(e, { props: [E(o, /:(plac\w+)/, ":" + ze + "$1")] })), we(ae(e, { props: [E(o, /:(plac\w+)/, O + "input-$1")] })), we(ae(e, { props: [o] })), Yt(e, { props: Yn(n, r) });
                break;
            }
            return "";
          });
    }
}
var zi = {
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
}, $ = {}, ve = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Qr = "active", Jr = "data-styled-version", kt = "6.1.19", gn = `/*!sc*/
`, yt = typeof window < "u" && typeof document < "u", Gi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Xn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Vi = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], u = 1; u < arguments.length; u++) a[u - 1] = arguments[u];
        Xn.test(s) ? (i = !1, nt.delete(r)) : o.apply(void 0, ye([s], a, !1));
      }, Ct(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (s) {
      Xn.test(s.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Nt = Object.freeze([]), Te = Object.freeze({});
function Yi(e, t, n) {
  return n === void 0 && (n = Te), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), qi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zi = /(^-|-$)/g;
function Kn(e) {
  return e.replace(qi, "-").replace(Zi, "");
}
var Xi = /(a)(d)/gi, rt = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = Qn(t % rt) + n;
  return (Qn(t % rt) + n).replace(Xi, "$1-$2");
}
var Dt, eo = 5381, he = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, to = function(e) {
  return he(eo, e);
};
function no(e) {
  return Kt(to(e) >>> 0);
}
function ro(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var oo = typeof Symbol == "function" && Symbol.for, io = oo ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ki = oo ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ji = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, so = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, es = ((Dt = {})[Ki] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Dt[io] = so, Dt);
function Jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === io ? so : "$$typeof" in e ? es[e.$$typeof] : Qi;
  var t;
}
var ts = Object.defineProperty, ns = Object.getOwnPropertyNames, er = Object.getOwnPropertySymbols, rs = Object.getOwnPropertyDescriptor, os = Object.getPrototypeOf, tr = Object.prototype;
function ao(e, t, n) {
  if (typeof t != "string") {
    if (tr) {
      var r = os(t);
      r && r !== tr && ao(e, r, n);
    }
    var o = ns(t);
    er && (o = o.concat(er(t)));
    for (var i = Jn(e), s = Jn(t), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!(u in Ji || n && n[u] || s && u in s || i && u in i)) {
        var l = rs(t, u);
        try {
          ts(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function yn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pe(e, t) {
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
function Jt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !xe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Jt(e[r], t[r]);
  else if (xe(t)) for (var r in t) e[r] = Jt(e[r], t[r]);
  return e;
}
function vn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var is = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ss() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function K(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ss.apply(void 0, ye([is[e]], t, !1)).trim());
}
var as = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw K(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), u = (s = 0, n.length); s < u; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(gn);
    return n;
  }, e;
})(), cs = 1 << 30, ft = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), dt = 1, ot = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; vt.has(dt); ) dt++;
  var t = dt++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > cs)) throw K(16, "".concat(t));
  return ft.set(e, t), vt.set(t, e), t;
}, ls = function(e, t) {
  dt = t + 1, ft.set(e, t), vt.set(t, e);
}, us = "style[".concat(ve, "][").concat(Jr, '="').concat(kt, '"]'), fs = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ds = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, _s = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(gn), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var u = a.match(fs);
      if (u) {
        var l = 0 | parseInt(u[1], 10), d = u[2];
        l !== 0 && (ls(d, l), ds(e, d, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, nr = function(e) {
  for (var t = document.querySelectorAll(us), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ve) !== Qr && (_s(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function hs() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var co = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(a) {
    var u = Array.from(a.querySelectorAll("style[".concat(ve, "]")));
    return u[u.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Qr), r.setAttribute(Jr, kt);
  var s = hs();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, ps = (function() {
  function e(t) {
    this.element = co(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw K(17);
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
})(), ms = (function() {
  function e(t) {
    this.element = co(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), gs = (function() {
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
})(), rr = yt, ys = { isServer: !yt, useCSSOMInjection: !Gi }, lo = (function() {
  function e(t, n, r) {
    t === void 0 && (t = Te), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ys), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && yt && rr && (rr = !1, nr(this)), vn(this, function() {
      return (function(i) {
        for (var s = i.getTag(), a = s.length, u = "", l = function(c) {
          var h = (function(m) {
            return vt.get(m);
          })(c);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), g = s.getGroup(c);
          if (_ === void 0 || !_.size || g.length === 0) return "continue";
          var v = "".concat(ve, ".g").concat(c, '[id="').concat(h, '"]'), S = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && (S += "".concat(m, ","));
          }), u += "".concat(g).concat(v, '{content:"').concat(S, '"}').concat(gn);
        }, d = 0; d < a; d++) l(d);
        return u;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && yt && nr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new gs(o) : r ? new ps(o) : new ms(o);
    })(this.options), new as(t)));
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
})(), vs = /&/g, Cs = /^\s*\/\/.*$/gm;
function uo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = uo(n.children, t)), n;
  });
}
function fo(e) {
  var t, n, r, o = e === void 0 ? Te : e, i = o.options, s = i === void 0 ? Te : i, a = o.plugins, u = a === void 0 ? Nt : a, l = function(h, _, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = u.slice();
  d.push(function(h) {
    h.type === Et && h.value.includes("&") && (h.props[0] = h.props[0].replace(vs, n).replace(r, l));
  }), s.prefix && d.push(ji), d.push(Fi);
  var c = function(h, _, g, v) {
    _ === void 0 && (_ = ""), g === void 0 && (g = ""), v === void 0 && (v = "&"), t = v, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var S = h.replace(Cs, ""), m = Hi(g || _ ? "".concat(g, " ").concat(_, " { ").concat(S, " }") : S);
    s.namespace && (m = uo(m, s.namespace));
    var p = [];
    return gt(m, Bi(d.concat(Wi(function(b) {
      return p.push(b);
    })))), p;
  };
  return c.hash = u.length ? u.reduce(function(h, _) {
    return _.name || K(15), he(h, _.name);
  }, eo).toString() : "", c;
}
var Ss = new lo(), en = fo(), Cn = oe.createContext({ shouldForwardProp: void 0, styleSheet: Ss, stylis: en });
Cn.Consumer;
var Es = oe.createContext(void 0);
function tn() {
  return Ke(Cn);
}
function ws(e) {
  var t = L(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = re(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = re(function() {
    return fo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  Q(function() {
    $i(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var a = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return oe.createElement(Cn.Provider, { value: a }, oe.createElement(Es.Provider, { value: s }, e.children));
}
var nn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, vn(this, function() {
      throw K(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
})(), bs = function(e) {
  return e >= "A" && e <= "Z";
};
function or(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    bs(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var _o = function(e) {
  return e == null || e === !1 || e === "";
}, ho = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !_o(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(or(o), ":"), i, ";") : xe(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], ho(i), !1), ["}"], !1)) : r.push("".concat(or(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in zi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ge(e, t, n, r) {
  if (_o(e)) return [];
  if (yn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || xe(o) || o === null || console.error("".concat(ro(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : xe(e) ? ho(e) : Array.isArray(e) ? Array.prototype.concat.apply(Nt, e.map(function(s) {
    return ge(s, t, n, r);
  })) : [e.toString()];
}
function $s(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !yn(n)) return !1;
  }
  return !0;
}
var ks = to(kt), Ns = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && $s(t), this.componentId = n, this.baseHash = he(ks, n), this.baseStyle = r, lo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = pe(o, this.staticRulesId);
    else {
      var i = Qt(ge(this.rules, t, n, r)), s = Kt(he(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = pe(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = he(this.baseHash, r.hash), l = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") l += c, $.NODE_ENV !== "production" && (u = he(u, c));
        else if (c) {
          var h = Qt(ge(c, t, n, r));
          u = he(u, h + d), l += h;
        }
      }
      if (l) {
        var _ = Kt(u >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(l, ".".concat(_), void 0, this.componentId)), o = pe(o, _);
      }
    }
    return o;
  }, e;
})(), qe = oe.createContext(void 0);
qe.Consumer;
function Is() {
  var e = Ke(qe);
  if (!e) throw K(18);
  return e;
}
function Os(e) {
  var t = oe.useContext(qe), n = re(function() {
    return (function(r, o) {
      if (!r) throw K(14);
      if (Ce(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw K(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw K(8);
      return o ? P(P({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(qe.Provider, { value: n }, e.children) : null;
}
var Ht = {}, ir = /* @__PURE__ */ new Set();
function Ts(e, t, n) {
  var r = yn(e), o = e, i = !Mt(e), s = t.attrs, a = s === void 0 ? Nt : s, u = t.componentId, l = u === void 0 ? (function(k, I) {
    var w = typeof k != "string" ? "sc" : Kn(k);
    Ht[w] = (Ht[w] || 0) + 1;
    var y = "".concat(w, "-").concat(no(kt + w + Ht[w]));
    return I ? "".concat(I, "-").concat(y) : y;
  })(t.displayName, t.parentComponentId) : u, d = t.displayName, c = d === void 0 ? (function(k) {
    return Mt(k) ? "styled.".concat(k) : "Styled(".concat(ro(k), ")");
  })(e) : d, h = t.displayName && t.componentId ? "".concat(Kn(t.displayName), "-").concat(t.componentId) : t.componentId || l, _ = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      g = function(k, I) {
        return v(k, I) && S(k, I);
      };
    } else g = v;
  }
  var m = new Ns(n, h, r ? o.componentStyle : void 0);
  function p(k, I) {
    return (function(w, y, H) {
      var W = w.attrs, Le = w.componentStyle, j = w.defaultProps, ie = w.foldedComponentIds, En = w.styledComponentId, wo = w.target, bo = oe.useContext(qe), $o = tn(), It = w.shouldForwardProp || $o.shouldForwardProp;
      $.NODE_ENV !== "production" && mt(En);
      var wn = Yi(y, bo, j) || Te, J = (function(Qe, He, Je) {
        for (var Ee, de = P(P({}, He), { className: void 0, theme: Je }), xt = 0; xt < Qe.length; xt += 1) {
          var et = Ce(Ee = Qe[xt]) ? Ee(de) : Ee;
          for (var se in et) de[se] = se === "className" ? pe(de[se], et[se]) : se === "style" ? P(P({}, de[se]), et[se]) : et[se];
        }
        return He.className && (de.className = pe(de.className, He.className)), de;
      })(W, y, wn), De = J.as || wo, Me = {};
      for (var z in J) J[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && J.theme === wn || (z === "forwardedAs" ? Me.as = J.forwardedAs : It && !It(z, De) || (Me[z] = J[z], It || $.NODE_ENV !== "development" || zo(z) || ir.has(z) || !Xt.has(De) || (ir.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ot = (function(Qe, He) {
        var Je = tn(), Ee = Qe.generateAndInjectStyles(He, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && mt(Ee), Ee;
      })(Le, J);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ot);
      var Tt = pe(ie, En);
      return Ot && (Tt += " " + Ot), J.className && (Tt += " " + J.className), Me[Mt(De) && !Xt.has(De) ? "class" : "className"] = Tt, H && (Me.ref = H), D(De, Me);
    })(b, k, I);
  }
  p.displayName = c;
  var b = oe.forwardRef(p);
  return b.attrs = _, b.componentStyle = m, b.displayName = c, b.shouldForwardProp = g, b.foldedComponentIds = r ? pe(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = h, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = r ? (function(I) {
      for (var w = [], y = 1; y < arguments.length; y++) w[y - 1] = arguments[y];
      for (var H = 0, W = w; H < W.length; H++) Jt(I, W[H], !0);
      return I;
    })({}, o.defaultProps, k) : k;
  } }), $.NODE_ENV !== "production" && (Vi(c, h), b.warnTooManyClasses = /* @__PURE__ */ (function(k, I) {
    var w = {}, y = !1;
    return function(H) {
      if (!y && (w[H] = !0, Object.keys(w).length >= 200)) {
        var W = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(W, `.
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
  })(c, h)), vn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && ao(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function sr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ar = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Sn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || xe(e)) return ar(ge(sr(Nt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? ge(r) : ar(ge(sr(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = Te), !t) throw K(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Sn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, P(P({}, n), o));
  }, r;
}
var po = function(e) {
  return rn(Ts, e);
}, B = po;
Xt.forEach(function(e) {
  B[e] = po(e);
});
function fe(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Qt(Sn.apply(void 0, ye([e], t, !1))), o = no(r);
  return new nn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ve, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const be = {
  CIRCLE_SOLID: "circle-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, mo = 14, xs = 0.0276;
var te = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(te || {});
const We = {
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
}, Ut = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, As = {
  [M.CANDIDATE_SELECTION]: "Stay still…",
  [M.FACE_TOO_CLOSE]: "Move back",
  [M.FACE_TOO_FAR]: "Move closer",
  [M.FACE_CENTERING]: "Center your face",
  [M.FACE_NOT_PRESENT]: "Position your face into the circle",
  [M.SHARPNESS_TOO_LOW]: "Turn face against light",
  [M.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [M.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [M.DEVICE_PITCHED]: "Hold your phone at eye level",
  [M.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [M.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [M.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [M.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [M.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Rs = {
  ...As,
  [X.SMILE]: "Smile :)",
  [X.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [X.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Ps = {
  [X.SMILE]: "Smile more!",
  [X.KEEP_NEUTRAL_EXPRESSION]: "Don't smile"
}, Ls = "rgba(19, 19, 19, 0.5)", Ds = 34;
function cr(e, t) {
  return Math.max(t, t + (e - 400) * xs + 2);
}
const Ms = (e, t = mo) => e ? e.width < e.height ? cr(e.width, t) : cr(e.height, t) : t, Hs = (e) => e > te.Default ? We[te.Default] : e > te.L ? We[te.L] : e > te.M ? We[te.M] : We[te.S], Us = (e) => e ? Hs(e.width) : We[te.Default];
function Fs() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Bs({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
const Ge = Nr(void 0);
Ge.displayName = "ConfigurationContext";
function Se() {
  const e = Ke(Ge);
  if (!e)
    throw new Error(
      `${Ge.displayName} must be used within a ${Ge.displayName} Provider`
    );
  return e;
}
function Ws({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = Is(), o = re(
    () => ({ ...t, videoElementSize: n, fontSize: Ms(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(Ge.Provider, { value: o, children: e });
}
const go = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), js = B.div`
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
`, zs = B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Gs = B.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, on = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Se();
  return /* @__PURE__ */ f(js, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(zs, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Gs, { $fontSize: o, children: r })
  ] }) });
}, yo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(on, { Icon: go, position: "relative", text: e });
class Vs extends V {
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
    return this.state.hasError ? /* @__PURE__ */ f(yo, { Icon: go, isCameraReady: !1 }) : this.props.children;
  }
}
const Ys = B.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function qs({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return Q(() => {
    Fs();
  }, []), /* @__PURE__ */ f(ws, { target: t.styleTarget, children: /* @__PURE__ */ f(Os, { theme: t.styling.theme, children: /* @__PURE__ */ f(Ys, { children: /* @__PURE__ */ f(Vs, { videoElementSize: n, children: /* @__PURE__ */ f(Ws, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const Zs = 0.75, Xs = "dot-auto-capture-video";
function $e(e, t) {
  const n = Ct(t);
  Q(() => {
    n.current = t;
  }, [t]), Q(
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
function Ks(e) {
  const [t, n] = L(), r = ce(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return $e(e, r), Re(() => {
    if (!t) {
      const o = document.getElementById(Xs);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Qs(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Js = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, ea = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: mo
}, Ue = {
  colors: Js,
  font: ea
}, ta = (e) => e ? {
  ...Ue,
  ...e,
  colors: {
    ...Ue.colors,
    ...e.colors
  },
  font: {
    ...Ue.font,
    ...e.font,
    family: Qs(e.font?.family, Ue.font.family)
  }
} : Ue, vo = (e, t) => Math.min(e, t), na = ({ height: e, width: t }, n) => {
  const r = vo(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ra = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = na(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function oa(e) {
  return ra(e, Zs);
}
const ia = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, lr = (e, t) => {
  ia(e, {
    instruction: t
  });
};
async function sa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function aa() {
  return (await sa()).filter((t) => t.kind === "videoinput");
}
const ca = () => {
  const [e, t] = L(!1);
  return Q(() => {
    (async () => (await aa()).length > 1 && t(!0))();
  }, []), e;
}, la = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ua = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), Co = B.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, fa = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(Co, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(la, { size: t }) }), da = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(Co, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(ua, { size: t }) }), _a = B.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ha = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Se(), o = ca();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: a } = Us(r);
  return /* @__PURE__ */ f(_a, { $padding: i, children: [
    o && /* @__PURE__ */ f(da, { disabled: t, onClick: () => {
      lr(e, In.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      fa,
      {
        marginLeft: o ? a : 0,
        onClick: () => {
          lr(e, In.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, pa = "2.5s", ma = "0.3s", ga = "linear", ya = fe`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
fe`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
fe`
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
fe`
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
const va = B.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Sn`
      animation: ${ya} ${ma}
        ${ga} both;
      animation-delay: ${pa};

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
`, Ca = B.div`
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
`, Sa = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Se();
  return /* @__PURE__ */ f(va, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    Ca,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: e.length > Ds,
      children: e
    }
  ) });
}, Ea = B.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, wa = ({ svgSize: e }) => /* @__PURE__ */ f(Ea, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ba = B.div`
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
`, So = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Se(), i = vo(r, t);
  return /* @__PURE__ */ f(ba, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ f("g", { children: e })
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function $a({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Se(), i = r === U.ERROR || r === U.RUNNING;
  return !r || i || !o?.[r].visible ? null : r === U.WAITING || r === U.COMPLETE ? /* @__PURE__ */ f(F, { children: [
    n && e && t && /* @__PURE__ */ f(So, { height: e, width: t }),
    /* @__PURE__ */ f(on, { isCameraReady: !0, text: o[U.WAITING].text })
  ] }) : /* @__PURE__ */ f(on, { Icon: wa, isCameraReady: !0, text: o[U.LOADING].text });
}
function ka({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const Na = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function Ia() {
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
function Oa() {
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
function Ta() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function xa() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const Aa = B.div`
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
`, Ra = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ f(
  Aa,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Pa = {
  [be.CIRCLE_SOLID]: /* @__PURE__ */ f(Na, {}),
  [be.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(Oa, {}),
  [be.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(Ta, {}),
  [be.SQUARE_DASH]: /* @__PURE__ */ f(Ia, {}),
  [be.SQUARE_SOLID]: /* @__PURE__ */ f(xa, {})
};
function La({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = Se(), s = i.toLowerCase().includes("square"), a = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ f(F, { children: [
    n && /* @__PURE__ */ f(So, { height: e, width: t, children: /* @__PURE__ */ f(
      ka,
      {
        height: `${r.height * 100}%`,
        isRounded: a,
        isSquare: s,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Ra, { placeholderRectangle: r, ...o, children: Pa[i] })
  ] });
}
function Da({ eventName: e }) {
  const [t, n] = L([]), r = ce(
    (o) => {
      const i = o.detail?.instructionCode;
      i && n((s) => [...s, i]);
    },
    [n]
  );
  return $e(e, r), {
    escalatedInstructionCodes: t
  };
}
function Ma({
  customEvents: e,
  defaultInstructionCode: t
}) {
  const [n, r] = L(), [o, i] = L(!1), s = ce(
    (v) => {
      r(v?.detail?.cameraResolution);
      const S = v?.detail?.isMirroring;
      S !== void 0 && i(S);
    },
    [r]
  );
  $e(e.CAMERA_PROPS_CHANGED, s);
  const [a, u] = L({
    code: t,
    isEscalated: !1
  }), l = ce(
    (v) => {
      const S = v;
      u({
        code: S?.detail?.instructionCode,
        isEscalated: S?.detail?.isEscalated ?? !1
      });
    },
    [u]
  );
  $e(e.INSTRUCTION_CHANGED, l);
  const [d, c] = L(U.LOADING), [h, _] = L(), g = ce(
    (v) => {
      c(v.detail?.appState);
      const S = v?.detail?.error;
      S && _(S);
    },
    [c, _]
  );
  return $e(e.STATE_CHANGED, g), {
    cameraResolution: n,
    instruction: a,
    isMirroring: o,
    appState: d,
    error: h
  };
}
function Ha() {
  const e = Ma({
    customEvents: Ye,
    defaultInstructionCode: X.FACE_NOT_PRESENT
  }), [t, n] = L(pt.NEUTRAL), r = ce((o) => {
    const i = o, { phaseName: s } = i.detail;
    n(s);
  }, []);
  return $e(Ye.PHASE_CHANGED, r), {
    ...e,
    phase: t
  };
}
const ur = ".3s", Ua = ".2s", Fa = ".8s", fr = ".4s", dr = ".4s", Ba = ".5s", Wa = "1.5s", ja = 2e3, _r = fe`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, za = fe`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, hr = fe`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, Eo = fe`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Ga = (e, t) => {
  const [n, r] = L(!1);
  return Q(() => {
    if (t !== pt.SMILE) {
      r(!1);
      return;
    }
    r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, ja);
    return () => clearTimeout(o);
  }, [t]), t === pt.SMILE && e === X.CANDIDATE_SELECTION ? X.SMILE_CANDIDATE_SELECTION : n ? X.SMILE : e;
}, Va = B.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${Eo} ${Ba} ${Wa} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${hr} ${fr} ${dr} forwards;
  }
  #right-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    transform: scale(-1, 1);
    transform-origin: 119.4px 191.7px;
    animation: ${hr} ${fr} ${dr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${_r} ${ur} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${_r} ${ur} forwards,
      ${za} ${Ua} ${Fa} forwards;
  }
`, Ya = ({ animate: e, initialPosition: t, show: n }) => {
  const [r, o] = L(!0);
  return Q(() => {
    (e || n) && o(!0);
  }, [e, n]), !r || !n ? null : /* @__PURE__ */ f(
    Va,
    {
      $initialPosition: t,
      onAnimationEnd: (i) => i.animationName === Eo.getName() && o(!1),
      children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
        /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
        /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
        /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
        /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
      ] })
    }
  );
}, qa = () => {
  const { appState: e, cameraResolution: t, error: n, instruction: r, phase: o } = Ha(), i = Ga(r.code, o), { escalatedInstructionCodes: s } = Da({
    eventName: Ye.INSTRUCTION_ESCALATED
  }), { escalatedInstructions: a, instructions: u } = Se(), l = r.code === X.CANDIDATE_SELECTION, d = Bs({
    escalatedInstructions: a,
    instructions: u,
    currentInstruction: {
      ...r,
      code: i
    }
  });
  if (e === U.ERROR)
    return /* @__PURE__ */ f(yo, { text: n?.message });
  if ((e === U.RUNNING || e === U.WAITING) && t) {
    const c = oa(t);
    return /* @__PURE__ */ f(F, { children: [
      /* @__PURE__ */ f(
        La,
        {
          backdropHeight: t.height,
          backdropWidth: t.width,
          isBackdrop: !0,
          isInCandidateSelection: l,
          placeholderRectangle: c
        }
      ),
      /* @__PURE__ */ f(
        Ya,
        {
          animate: s.includes("mouth_score_too_low"),
          initialPosition: c,
          show: o === pt.SMILE
        }
      ),
      d && /* @__PURE__ */ f(
        Sa,
        {
          cssBottom: (c.height + c.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: l,
          isPortrait: t.width < t.height,
          children: d
        }
      ),
      /* @__PURE__ */ f(ha, { customControlEvent: Ye.CONTROL, isSwitchCameraDisabled: l })
    ] });
  }
  return /* @__PURE__ */ f(
    $a,
    {
      cameraHeight: t?.height,
      cameraWidth: t?.width,
      isBackdrop: !0,
      state: e
    }
  );
};
function Za(e) {
  const t = {
    ...Rs,
    ...e?.instructions
  }, n = {
    ...Ps,
    ...e?.escalatedInstructions
  };
  t.mouth_score_too_low = t.smile, n.mouth_score_too_low = n.smile, t.mouth_score_too_high = t.keep_neutral_expression, n.mouth_score_too_high = n.keep_neutral_expression;
  const r = {
    [U.LOADING]: {
      ...Ut.loading,
      ...e?.appStateInstructions?.loading
    },
    [U.WAITING]: {
      ...Ut.waiting,
      ...e?.appStateInstructions?.waiting
    },
    [U.COMPLETE]: {
      ...Ut.waiting,
      ...e?.appStateInstructions?.waiting
    }
  }, o = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Ls,
    theme: ta(e?.styling?.theme)
  }, i = {
    showCameraButtons: e?.control?.showCameraButtons ?? !1
  };
  return {
    placeholder: be.CIRCLE_SOLID,
    instructions: t,
    appStateInstructions: r,
    escalatedInstructions: n,
    styling: o,
    control: i
  };
}
const Xa = ({ configuration: e }) => {
  const t = Ks(Ye.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(qs, { uiConfiguration: Za(e), videoElementSize: t, children: /* @__PURE__ */ f(qa, {}) });
};
Po(Xa, "x-dot-smile-liveness-ui", ["configuration"]);
