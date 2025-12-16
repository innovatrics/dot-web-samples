var Ze, S, hr, _e, wn, pr, mr, gr, rn, Ut, Ft, yr, Ve = {}, vr = [], wo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xe = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function on(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] == null && (s[i] = e.defaultProps[i]);
  return je(e, s, r, o, null);
}
function je(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++hr, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function bo() {
  return { current: null };
}
function z(e) {
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
function Cr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Cr(e);
  }
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && _e.push(e) && !_t.__r++ || wn != S.debounceRendering) && ((wn = S.debounceRendering) || pr)(_t);
}
function _t() {
  for (var e, t, n, r, o, i, s, a = 1; _e.length; ) _e.length > a && _e.sort(mr), e = _e.shift(), a = _e.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], s = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, S.vnode && S.vnode(n), sn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? ke(r), !!(32 & r.__u), s), n.__v = r.__v, n.__.__k[n.__i] = n, wr(i, n, s), n.__e != o && Cr(n)));
  _t.__r = 0;
}
function Sr(e, t, n, r, o, i, s, a, l, u, d) {
  var c, h, _, v, g, y, m = r && r.__k || vr, p = t.length;
  for (l = $o(n, t, m, l, p), c = 0; c < p; c++) (_ = n.__k[c]) != null && (h = _.__i == -1 ? Ve : m[_.__i] || Ve, _.__i = c, y = sn(e, _, h, o, i, s, a, l, u, d), v = _.__e, _.ref && h.ref != _.ref && (h.ref && an(h.ref, null, _), d.push(_.ref, _.__c || v, _)), g == null && v != null && (g = v), 4 & _.__u || h.__k === _.__k ? l = Er(_, l, e) : typeof _.type == "function" && y !== void 0 ? l = y : v && (l = v.nextSibling), _.__u &= -7);
  return n.__e = g, l;
}
function $o(e, t, n, r, o) {
  var i, s, a, l, u, d = n.length, c = d, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (l = i + h, (s = e.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? je(null, s, null, null, null) : Xe(s) ? je(z, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? je(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, a = null, (u = s.__i = ko(s, n, l, c)) != -1 && (c--, (a = n[u]) && (a.__u |= 2)), a == null || a.__v == null ? (u == -1 && (o > d ? h-- : o < d && h++), typeof s.type != "function" && (s.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, s.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < d; i++) (a = n[i]) != null && (2 & a.__u) == 0 && (a.__e == r && (r = ke(a)), $r(a, a));
  return r;
}
function Er(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Er(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = ke(e)), n.insertBefore(e.__e, t || null), t = e.__e);
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
function ko(e, t, n, r) {
  var o, i, s = e.key, a = e.type, l = t[n];
  if (l === null && e.key == null || l && s == l.key && a == l.type && (2 & l.__u) == 0) return n;
  if (r > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && s == l.key && a == l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && s == l.key && a == l.type) return i;
      i++;
    }
  }
  return -1;
}
function bn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || wo.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || bn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || bn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(gr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = rn, e.addEventListener(t, i ? Ft : Ut, i)) : e.removeEventListener(t, i ? Ft : Ut, i);
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
      return n(S.event ? S.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, s, a, l, u) {
  var d, c, h, _, v, g, y, m, p, k, b, I, w, C, H, B, Le, W = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [a = t.__e = n.__e]), (d = S.__b) && d(t);
  e: if (typeof W == "function") try {
    if (m = t.props, p = "prototype" in W && W.prototype.render, k = (d = W.contextType) && r[d.__c], b = d ? k ? k.props.value : d.__ : r, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : (p ? t.__c = c = new W(m, b) : (t.__c = c = new V(m, b), c.constructor = W, c.render = Io), k && k.sub(c), c.props = m, c.state || (c.state = {}), c.context = b, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), p && c.__s == null && (c.__s = c.state), p && W.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Z({}, c.__s)), Z(c.__s, W.getDerivedStateFromProps(m, c.__s))), _ = c.props, v = c.state, c.__v = t, h) p && W.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), p && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (p && W.getDerivedStateFromProps == null && m !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, b), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, b) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(fe) {
          fe && (fe.__ = t);
        }), I = 0; I < c._sb.length; I++) c.__h.push(c._sb[I]);
        c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, b), p && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, v, g);
      });
    }
    if (c.context = b, c.props = m, c.__P = e, c.__e = !1, w = S.__r, C = 0, p) {
      for (c.state = c.__s, c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), H = 0; H < c._sb.length; H++) c.__h.push(c._sb[H]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++C < 25);
    c.state = c.__s, c.getChildContext != null && (r = Z(Z({}, r), c.getChildContext())), p && !h && c.getSnapshotBeforeUpdate != null && (g = c.getSnapshotBeforeUpdate(_, v)), B = d, d != null && d.type === z && d.key == null && (B = br(d.props.children)), a = Sr(e, Xe(B) ? B : [B], t, n, r, o, i, s, a, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), y && (c.__E = c.__ = null);
  } catch (fe) {
    if (t.__v = null, l || i != null) if (fe.then) {
      for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      i[i.indexOf(a)] = null, t.__e = a;
    } else for (Le = i.length; Le--; ) on(i[Le]);
    else t.__e = n.__e, t.__k = n.__k;
    S.__e(fe, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : a = t.__e = No(n.__e, t, n, r, o, i, s, l, u);
  return (d = S.diffed) && d(t), 128 & t.__u ? void 0 : a;
}
function wr(e, t, n) {
  for (var r = 0; r < n.length; r++) an(n[r], n[++r], n[++r]);
  S.__c && S.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      S.__e(i, o.__v);
    }
  });
}
function br(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Xe(e) ? e.map(br) : Z({}, e);
}
function No(e, t, n, r, o, i, s, a, l) {
  var u, d, c, h, _, v, g, y = n.props, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!p && (p ? _.localName == p : _.nodeType == 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), a && (S.__m && S.__m(t, i), a = !1), i = null;
  }
  if (p == null) y === m || a && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), y = n.props || Ve, !a && i != null) for (y = {}, u = 0; u < e.attributes.length; u++) y[(_ = e.attributes[u]).name] = _.value;
    for (u in y) if (_ = y[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = _;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        tt(e, u, null, _, o);
      }
    }
    for (u in m) _ = m[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? v = _ : u == "checked" ? g = _ : a && typeof _ != "function" || y[u] === _ || tt(e, u, _, y[u], o);
    if (d) a || c && (d.__html == c.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Sr(t.type == "template" ? e.content : e, Xe(h) ? h : [h], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && ke(n, 0), a, l), i != null) for (u = i.length; u--; ) on(i[u]);
    a || (u = "value", p == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[u] || p == "progress" && !v || p == "option" && v != y[u]) && tt(e, u, v, y[u], o), u = "checked", g != null && g != e[u] && tt(e, u, g, y[u], o));
  }
  return e;
}
function an(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    S.__e(o, n);
  }
}
function $r(e, t, n) {
  var r, o;
  if (S.unmount && S.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || an(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      S.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && $r(r[o], t, n || typeof e.type != "function");
  n || on(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Io(e, t, n) {
  return this.constructor(e, n);
}
function ce(e, t, n) {
  var r, o, i, s;
  t == document && (t = document.documentElement), S.__ && S.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], sn(t, e = (!r && n || t).__k = D(z, null, [e]), o || Ve, Ve, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), wr(i, e, s);
}
function cn(e, t) {
  ce(e, t, cn);
}
function ln(e, t, n) {
  var r, o, i, s, a = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] == null && s != null ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), je(e.type, a, r || e.key, o || e.ref, null);
}
function kr(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(s) {
        s.__e = !0, Bt(s);
      });
    }, this.sub = function(i) {
      r.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), s && s.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + yr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = vr.slice, S = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, hr = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, V.prototype.render = z, _e = [], pr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, mr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _t.__r = 0, gr = /(PointerCapture)$|Capture$/i, rn = 0, Ut = $n(!1), Ft = $n(!0), yr = 0;
function un() {
  return (un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Oo = ["context", "children"];
function To(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, s, a = {}, l = Object.keys(r);
    for (s = 0; s < l.length; s++) o.indexOf(i = l[s]) >= 0 || (a[i] = r[i]);
    return a;
  }(e, Oo);
  return ln(t, n);
}
function xo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(To, un({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, s = 0, a = n.attributes, l = n.childNodes;
    for (s = a.length; s--; ) a[s].name !== "slot" && (i[a[s].name] = a[s].value, i[Nr(a[s].name)] = a[s].value);
    for (s = l.length; s--; ) {
      var u = t(l[s], null), d = l[s].slot;
      d ? i[d] = D(kn, { name: d }, u) : o[s] = u;
    }
    var c = r ? D(kn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? cn : ce)(this._vdom, this._root);
}
function Nr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ao(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Nr(e)] = n, this._vdom = ln(this._vdom, r), ce(this._vdom, this._root);
  }
}
function Ro() {
  ce(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this;
  return D("slot", un({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Po(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = xo, o.prototype.attributeChangedCallback = Ao, o.prototype.disconnectedCallback = Ro, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var a = typeof s;
      s != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t, o);
}
var Lo = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, a, l = t;
  if ("ref" in l) for (a in l = {}, t) a == "ref" ? s = t[a] : l[a] = t[a];
  var u = { type: e, props: l, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Lo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) l[a] === void 0 && (l[a] = s[a]);
  return S.vnode && S.vnode(u), u;
}
const Nn = {
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
}, In = {
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
  LEFT_EYE_NOT_PRESENT: `left_${In.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${In.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, X = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_NOT_PRESENT: "face_not_present",
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, ht = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
};
var le, T, xt, On, Ne = 0, Ir = [], x = S, Tn = x.__b, xn = x.__r, An = x.diffed, Rn = x.__c, Pn = x.unmount, Ln = x.__;
function Ae(e, t) {
  x.__h && x.__h(T, e, Ne || t), Ne = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function L(e) {
  return Ne = 1, fn(xr, e);
}
function fn(e, t, n) {
  var r = Ae(le++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : xr(void 0, t), function(a) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, a);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.__f)) {
    var o = function(a, l, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, a, l, u);
      var c = r.__c.props !== a;
      return d.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (c = !0);
        }
      }), i && i.call(this, a, l, u) || c;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, s = T.componentWillUpdate;
    T.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(a, l, u), i = d;
      }
      s && s.call(this, a, l, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Q(e, t) {
  var n = Ae(le++, 3);
  !x.__s && dn(n.__H, t) && (n.__ = e, n.u = t, T.__H.__h.push(n));
}
function Re(e, t) {
  var n = Ae(le++, 4);
  !x.__s && dn(n.__H, t) && (n.__ = e, n.u = t, T.__h.push(n));
}
function vt(e) {
  return Ne = 5, re(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
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
  var n = Ae(le++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ae(e, t) {
  return Ne = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = T.context[e.__c], n = Ae(le++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function pt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Tr() {
  var e = Ae(le++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Do() {
  for (var e; e = Ir.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(st), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  T = null, Tn && Tn(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ln && Ln(e, t);
}, x.__r = function(e) {
  xn && xn(e), le = 0;
  var t = (T = e.__c).__H;
  t && (xt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(st), t.__h.forEach(Wt), t.__h = [], le = 0)), xt = T;
}, x.diffed = function(e) {
  An && An(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ir.push(t) !== 1 && On === x.requestAnimationFrame || ((On = x.requestAnimationFrame) || Mo)(Do)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), xt = T = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(st), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Rn && Rn(e, t);
}, x.unmount = function(e) {
  Pn && Pn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      st(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Mo(e) {
  var t, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Dn && (t = requestAnimationFrame(n));
}
function st(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Wt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function dn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function xr(e, t) {
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
function Ho(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Uo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fo = /* @__PURE__ */ Ho(
  function(e) {
    return Uo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ar(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function jt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Rr(e, t) {
  var n = t(), r = L({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Re(function() {
    o.__ = n, o.u = t, At(o) && i({ t: o });
  }, [e, n, t]), Q(function() {
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
function Pr(e) {
  e();
}
function Lr(e) {
  return e;
}
function Dr() {
  return [!1, Pr];
}
var Mr = Re;
function zt(e, t) {
  this.props = e, this.context = t;
}
function Bo(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(zt.prototype = new V()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Mn = S.__b;
S.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var Wo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function jo(e) {
  function t(n) {
    var r = Ar({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Wo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hn = function(e, t) {
  return e == null ? null : ne(ne(e).map(t));
}, zo = { map: Hn, forEach: Hn, count: function(e) {
  return e ? ne(e).length : 0;
}, only: function(e) {
  var t = ne(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ne }, Go = S.__e;
S.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Go(e, t, n, r);
};
var Un = S.unmount;
function Hr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Ar({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Hr(r, t, n);
  })), e;
}
function Ur(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ur(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Fr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Vo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r) throw r;
    if (!n) throw t;
    return D(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Fe() {
  this.i = null, this.l = null;
}
S.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Un && Un(e);
}, (at.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Fr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Ur(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Hr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(z, null, e.fallback);
  return o && (o.__u &= -33), [D(z, null, t.__a ? null : e.children), o];
};
var Fn = function(e, t, n) {
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
    ce(null, t.v), t.v = null, t.h = null;
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
  ce(D(Yo, { context: t.context }, e.__v), t.v);
}
function Zo(e, t) {
  var n = D(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new V()).__a = function(e) {
  var t = this, n = Fr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Fn(t, e, r)) : o();
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
    Fn(e, n, t);
  });
};
var Br = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ko = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qo = /[A-Z0-9]/g, Jo = typeof document < "u", ei = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ti(e, t, n) {
  return t.__k == null && (t.textContent = ""), ce(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ni(e, t, n) {
  return cn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Bn = S.event;
function ri() {
}
function oi() {
  return this.cancelBubble;
}
function ii() {
  return this.defaultPrevented;
}
S.event = function(e) {
  return Bn && (e = Bn(e)), e.persist = ri, e.isPropagationStopped = oi, e.isDefaultPrevented = ii, e.nativeEvent = e;
};
var _n, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wn = S.vnode;
S.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var a = n[s];
      if (!(s === "value" && "defaultValue" in n && a == null || Jo && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : l === "translate" && a === "no" ? a = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ei(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Ko.test(s) && (s = l) : l = s = "oninput" : i && Xo.test(s) ? s = s.replace(Qo, "-$&").toLowerCase() : a === null && (a = void 0), l === "oninput" && o[s = l] && (s = "oninputCapture"), o[s] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ne(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ne(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Br, Wn && Wn(e);
};
var jn = S.__r;
S.__r = function(e) {
  jn && jn(e), _n = e.__c;
};
var zn = S.diffed;
S.diffed = function(e) {
  zn && zn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), _n = null;
};
var ai = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return _n.__n[e.__c].props.value;
}, useCallback: ae, useContext: Ke, useDebugValue: pt, useDeferredValue: Lr, useEffect: Q, useId: Tr, useImperativeHandle: Or, useInsertionEffect: Mr, useLayoutEffect: Re, useMemo: re, useReducer: fn, useRef: vt, useState: L, useSyncExternalStore: Rr, useTransition: Dr } } };
function ci(e) {
  return D.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === Br;
}
function li(e) {
  return Ct(e) && e.type === z;
}
function ui(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function fi(e) {
  return Ct(e) ? ln.apply(null, arguments) : e;
}
function di(e) {
  return !!e.__k && (ce(null, e), !0);
}
function _i(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var hi = function(e, t) {
  return e(t);
}, pi = function(e, t) {
  return e(t);
}, mi = z, gi = Ct, oe = { useState: L, useId: Tr, useReducer: fn, useEffect: Q, useLayoutEffect: Re, useInsertionEffect: Mr, useTransition: Dr, useDeferredValue: Lr, useSyncExternalStore: Rr, startTransition: Pr, useRef: vt, useImperativeHandle: Or, useMemo: re, useCallback: ae, useContext: Ke, useDebugValue: pt, version: "18.3.1", Children: zo, render: ti, hydrate: ni, unmountComponentAtNode: di, createPortal: Zo, createElement: D, createContext: kr, createFactory: ci, cloneElement: fi, createRef: bo, Fragment: z, isValidElement: Ct, isElement: gi, isFragment: li, isMemo: ui, findDOMNode: _i, Component: V, PureComponent: zt, memo: Bo, forwardRef: jo, flushSync: pi, unstable_batchedUpdates: hi, StrictMode: mi, Suspense: at, SuspenseList: Fe, lazy: Vo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ai };
function yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt, Gn;
function vi() {
  return Gn || (Gn = 1, Rt = function(t, n, r, o) {
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
    for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
      var d = s[u];
      if (!l(d))
        return !1;
      var c = t[d], h = n[d];
      if (i = r ? r.call(o, c, h, d) : void 0, i === !1 || i === void 0 && c !== h)
        return !1;
    }
    return !0;
  }), Rt;
}
var Ci = vi();
const Si = /* @__PURE__ */ yi(Ci);
var O = "-ms-", ze = "-moz-", N = "-webkit-", Wr = "comm", St = "rule", hn = "decl", Ei = "@import", jr = "@keyframes", wi = "@layer", zr = Math.abs, pn = String.fromCharCode, Gt = Object.assign;
function bi(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Gr(e) {
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
function Vr(e) {
  return e.length;
}
function Be(e, t) {
  return t.push(e), e;
}
function $i(e, t) {
  return e.map(t).join("");
}
function Vn(e, t) {
  return e.filter(function(n) {
    return !ee(n, t);
  });
}
var Et = 1, Oe = 1, Yr = 0, G = 0, A = 0, Pe = "";
function wt(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Et, column: Oe, length: s, return: "", siblings: a };
}
function se(e, t) {
  return Gt(wt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function we(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Be(e, e.siblings);
}
function ki() {
  return A;
}
function Ni() {
  return A = G > 0 ? R(Pe, --G) : 0, Oe--, A === 10 && (Oe = 1, Et--), A;
}
function Y() {
  return A = G < Yr ? R(Pe, G++) : 0, Oe++, A === 10 && (Oe = 1, Et++), A;
}
function me() {
  return R(Pe, G);
}
function lt() {
  return G;
}
function bt(e, t) {
  return Ie(Pe, e, t);
}
function Vt(e) {
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
function Ii(e) {
  return Et = Oe = 1, Yr = q(Pe = e), G = 0, [];
}
function Oi(e) {
  return Pe = "", e;
}
function Pt(e) {
  return Gr(bt(G - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ti(e) {
  for (; (A = me()) && A < 33; )
    Y();
  return Vt(e) > 2 || Vt(A) > 3 ? "" : " ";
}
function xi(e, t) {
  for (; --t && Y() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return bt(e, lt() + (t < 6 && me() == 32 && Y() == 32));
}
function Yt(e) {
  for (; Y(); )
    switch (A) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(A);
        break;
      // (
      case 40:
        e === 41 && Yt(e);
        break;
      // \
      case 92:
        Y();
        break;
    }
  return G;
}
function Ai(e, t) {
  for (; Y() && e + A !== 57; )
    if (e + A === 84 && me() === 47)
      break;
  return "/*" + bt(t, G - 1) + "*" + pn(e === 47 ? e : Y());
}
function Ri(e) {
  for (; !Vt(me()); )
    Y();
  return bt(e, G);
}
function Pi(e) {
  return Oi(ut("", null, null, null, [""], e = Ii(e), 0, [0], e));
}
function ut(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, d = 0, c = s, h = 0, _ = 0, v = 0, g = 1, y = 1, m = 1, p = 0, k = "", b = o, I = i, w = r, C = k; y; )
    switch (v = p, p = Y()) {
      // (
      case 40:
        if (v != 108 && R(C, c - 1) == 58) {
          ct(C += E(Pt(p), "&", "&\f"), "&\f", zr(u ? a[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Pt(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ti(v);
        break;
      // \
      case 92:
        C += xi(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            Be(Li(Ai(Y(), lt()), t, n, l), l);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * g:
        a[u++] = q(C) * m;
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
          case 59 + d:
            m == -1 && (C = E(C, /\f/g, "")), _ > 0 && q(C) - c && Be(_ > 32 ? qn(C + ";", r, n, c - 1, l) : qn(E(C, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Be(w = Yn(C, t, n, u, d, o, a, k, b = [], I = [], c, i), i), p === 123)
              if (d === 0)
                ut(C, t, w, w, b, i, c, a, I);
              else
                switch (h === 99 && R(C, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, w, w, r && Be(Yn(e, w, w, 0, 0, o, a, k, o, b = [], c, I), I), o, I, c, a, r ? b : I);
                    break;
                  default:
                    ut(C, w, w, w, [""], I, 0, a, I);
                }
        }
        u = d = _ = 0, g = m = 1, k = C = "", c = s;
        break;
      // :
      case 58:
        c = 1 + q(C), _ = v;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && Ni() == 125)
            continue;
        }
        switch (C += pn(p), p * g) {
          // &
          case 38:
            m = d > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (q(C) - 1) * m, m = 1;
            break;
          // @
          case 64:
            me() === 45 && (C += Pt(Y())), h = me(), d = c = q(k = C += Ri(lt())), p++;
            break;
          // -
          case 45:
            v === 45 && q(C) == 2 && (g = 0);
        }
    }
  return i;
}
function Yn(e, t, n, r, o, i, s, a, l, u, d, c) {
  for (var h = o - 1, _ = o === 0 ? i : [""], v = Vr(_), g = 0, y = 0, m = 0; g < r; ++g)
    for (var p = 0, k = Ie(e, h + 1, h = zr(y = s[g])), b = e; p < v; ++p)
      (b = Gr(y > 0 ? _[p] + " " + k : E(k, /&\f/g, _[p]))) && (l[m++] = b);
  return wt(e, t, n, o === 0 ? St : a, l, u, d, c);
}
function Li(e, t, n, r) {
  return wt(e, t, n, Wr, pn(ki()), Ie(e, 2, -2), 0, r);
}
function qn(e, t, n, r, o) {
  return wt(e, t, n, hn, Ie(e, 0, r), Ie(e, r + 1, -1), r, o);
}
function qr(e, t, n) {
  switch (bi(e, t)) {
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
            return ~ct(e, "stretch", 0) ? qr(E(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return E(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, l, u) {
        return O + o + ":" + i + u + (s ? O + o + "-span:" + (a ? l : +l - +i) + u : "") + e;
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
function mt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Di(e, t, n, r) {
  switch (e.type) {
    case wi:
      if (e.children.length) break;
    case Ei:
    case hn:
      return e.return = e.return || e.value;
    case Wr:
      return "";
    case jr:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case St:
      if (!q(e.value = e.props.join(","))) return "";
  }
  return q(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mi(e) {
  var t = Vr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Hi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ui(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hn:
        e.return = qr(e.value, e.length, n);
        return;
      case jr:
        return mt([se(e, { value: E(e.value, "@", "@" + N) })], r);
      case St:
        if (e.length)
          return $i(n = e.props, function(o) {
            switch (ee(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                we(se(e, { props: [E(o, /:(read-\w+)/, ":" + ze + "$1")] })), we(se(e, { props: [o] })), Gt(e, { props: Vn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                we(se(e, { props: [E(o, /:(plac\w+)/, ":" + N + "input-$1")] })), we(se(e, { props: [E(o, /:(plac\w+)/, ":" + ze + "$1")] })), we(se(e, { props: [E(o, /:(plac\w+)/, O + "input-$1")] })), we(se(e, { props: [o] })), Gt(e, { props: Vn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Fi = {
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
}, $ = {}, ve = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Zr = "active", Xr = "data-styled-version", $t = "6.1.18", mn = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", Bi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Zn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Wi = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], l = 1; l < arguments.length; l++) a[l - 1] = arguments[l];
        Zn.test(s) ? (i = !1, nt.delete(r)) : o.apply(void 0, ye([s], a, !1));
      }, vt(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (s) {
      Zn.test(s.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), Te = Object.freeze({});
function ji(e, t, n) {
  return n === void 0 && (n = Te), e.theme !== n.theme && e.theme || t || n.theme;
}
var qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gi = /(^-|-$)/g;
function Xn(e) {
  return e.replace(zi, "-").replace(Gi, "");
}
var Vi = /(a)(d)/gi, rt = 52, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = Kn(t % rt) + n;
  return (Kn(t % rt) + n).replace(Vi, "$1-$2");
}
var Lt, Kr = 5381, he = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Qr = function(e) {
  return he(Kr, e);
};
function Jr(e) {
  return Zt(Qr(e) >>> 0);
}
function eo(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var to = typeof Symbol == "function" && Symbol.for, no = to ? Symbol.for("react.memo") : 60115, Yi = to ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ro = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Xi = ((Lt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[no] = ro, Lt);
function Qn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === no ? ro : "$$typeof" in e ? Xi[e.$$typeof] : qi;
  var t;
}
var Ki = Object.defineProperty, Qi = Object.getOwnPropertyNames, Jn = Object.getOwnPropertySymbols, Ji = Object.getOwnPropertyDescriptor, es = Object.getPrototypeOf, er = Object.prototype;
function oo(e, t, n) {
  if (typeof t != "string") {
    if (er) {
      var r = es(t);
      r && r !== er && oo(e, r, n);
    }
    var o = Qi(t);
    Jn && (o = o.concat(Jn(t)));
    for (var i = Qn(e), s = Qn(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!(l in Zi || n && n[l] || s && l in s || i && l in i)) {
        var u = Ji(t, l);
        try {
          Ki(e, l, u);
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
function gn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Xt(e, t) {
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
function yn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ts = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ns() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function K(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ns.apply(void 0, ye([ts[e]], t, !1)).trim());
}
var rs = function() {
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
    for (var a = this.indexOfGroup(t + 1), l = (s = 0, n.length); s < l; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(mn);
    return n;
  }, e;
}(), os = 1 << 30, ft = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), dt = 1, ot = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; yt.has(dt); ) dt++;
  var t = dt++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > os)) throw K(16, "".concat(t));
  return ft.set(e, t), yt.set(t, e), t;
}, is = function(e, t) {
  dt = t + 1, ft.set(e, t), yt.set(t, e);
}, ss = "style[".concat(ve, "][").concat(Xr, '="').concat($t, '"]'), as = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), cs = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, ls = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var l = a.match(as);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (is(d, u), cs(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, tr = function(e) {
  for (var t = document.querySelectorAll(ss), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ve) !== Zr && (ls(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function us() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var io = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var l = Array.from(a.querySelectorAll("style[".concat(ve, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Zr), r.setAttribute(Xr, $t);
  var s = us();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, fs = function() {
  function e(t) {
    this.element = io(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw K(17);
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
}(), ds = function() {
  function e(t) {
    this.element = io(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), _s = function() {
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
}(), nr = gt, hs = { isServer: !gt, useCSSOMInjection: !Bi }, so = function() {
  function e(t, n, r) {
    t === void 0 && (t = Te), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, hs), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gt && nr && (nr = !1, tr(this)), yn(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, l = "", u = function(c) {
          var h = function(m) {
            return yt.get(m);
          }(c);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), v = s.getGroup(c);
          if (_ === void 0 || !_.size || v.length === 0) return "continue";
          var g = "".concat(ve, ".g").concat(c, '[id="').concat(h, '"]'), y = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && (y += "".concat(m, ","));
          }), l += "".concat(v).concat(g, '{content:"').concat(y, '"}').concat(mn);
        }, d = 0; d < a; d++) u(d);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && tr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new _s(o) : r ? new fs(o) : new ds(o);
    }(this.options), new rs(t)));
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
}(), ps = /&/g, ms = /^\s*\/\/.*$/gm;
function ao(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = ao(n.children, t)), n;
  });
}
function co(e) {
  var t, n, r, o = e === void 0 ? Te : e, i = o.options, s = i === void 0 ? Te : i, a = o.plugins, l = a === void 0 ? kt : a, u = function(h, _, v) {
    return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = l.slice();
  d.push(function(h) {
    h.type === St && h.value.includes("&") && (h.props[0] = h.props[0].replace(ps, n).replace(r, u));
  }), s.prefix && d.push(Ui), d.push(Di);
  var c = function(h, _, v, g) {
    _ === void 0 && (_ = ""), v === void 0 && (v = ""), g === void 0 && (g = "&"), t = g, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var y = h.replace(ms, ""), m = Pi(v || _ ? "".concat(v, " ").concat(_, " { ").concat(y, " }") : y);
    s.namespace && (m = ao(m, s.namespace));
    var p = [];
    return mt(m, Mi(d.concat(Hi(function(k) {
      return p.push(k);
    })))), p;
  };
  return c.hash = l.length ? l.reduce(function(h, _) {
    return _.name || K(15), he(h, _.name);
  }, Kr).toString() : "", c;
}
var gs = new so(), Qt = co(), vn = oe.createContext({ shouldForwardProp: void 0, styleSheet: gs, stylis: Qt });
vn.Consumer;
var ys = oe.createContext(void 0);
function Jt() {
  return Ke(vn);
}
function vs(e) {
  var t = L(e.stylisPlugins), n = t[0], r = t[1], o = Jt().styleSheet, i = re(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = re(function() {
    return co({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  Q(function() {
    Si(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var a = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return oe.createElement(vn.Provider, { value: a }, oe.createElement(ys.Provider, { value: s }, e.children));
}
var en = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw K(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), Cs = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Cs(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var lo = function(e) {
  return e == null || e === !1 || e === "";
}, uo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !lo(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(rr(o), ":"), i, ";") : xe(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], uo(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ge(e, t, n, r) {
  if (lo(e)) return [];
  if (gn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof en || xe(o) || o === null || console.error("".concat(eo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, n, r);
  }
  var i;
  return e instanceof en ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : xe(e) ? uo(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(s) {
    return ge(s, t, n, r);
  })) : [e.toString()];
}
function Ss(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !gn(n)) return !1;
  }
  return !0;
}
var Es = Qr($t), ws = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ss(t), this.componentId = n, this.baseHash = he(Es, n), this.baseStyle = r, so.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = pe(o, this.staticRulesId);
    else {
      var i = Xt(ge(this.rules, t, n, r)), s = Zt(he(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = pe(o, s), this.staticRulesId = s;
    }
    else {
      for (var l = he(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") u += c, $.NODE_ENV !== "production" && (l = he(l, c));
        else if (c) {
          var h = Xt(ge(c, t, n, r));
          l = he(l, h + d), u += h;
        }
      }
      if (u) {
        var _ = Zt(l >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = pe(o, _);
      }
    }
    return o;
  }, e;
}(), qe = oe.createContext(void 0);
qe.Consumer;
function bs() {
  var e = Ke(qe);
  if (!e) throw K(18);
  return e;
}
function $s(e) {
  var t = oe.useContext(qe), n = re(function() {
    return function(r, o) {
      if (!r) throw K(14);
      if (Ce(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw K(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw K(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(qe.Provider, { value: n }, e.children) : null;
}
var Mt = {}, or = /* @__PURE__ */ new Set();
function ks(e, t, n) {
  var r = gn(e), o = e, i = !Dt(e), s = t.attrs, a = s === void 0 ? kt : s, l = t.componentId, u = l === void 0 ? function(b, I) {
    var w = typeof b != "string" ? "sc" : Xn(b);
    Mt[w] = (Mt[w] || 0) + 1;
    var C = "".concat(w, "-").concat(Jr($t + w + Mt[w]));
    return I ? "".concat(I, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, c = d === void 0 ? function(b) {
    return Dt(b) ? "styled.".concat(b) : "Styled(".concat(eo(b), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Xn(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, v = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      v = function(b, I) {
        return g(b, I) && y(b, I);
      };
    } else v = g;
  }
  var m = new ws(n, h, r ? o.componentStyle : void 0);
  function p(b, I) {
    return function(w, C, H) {
      var B = w.attrs, Le = w.componentStyle, W = w.defaultProps, fe = w.foldedComponentIds, Sn = w.styledComponentId, Co = w.target, So = oe.useContext(qe), Eo = Jt(), Nt = w.shouldForwardProp || Eo.shouldForwardProp;
      $.NODE_ENV !== "production" && pt(Sn);
      var En = ji(C, So, W) || Te, J = function(Qe, He, Je) {
        for (var Ee, de = P(P({}, He), { className: void 0, theme: Je }), Tt = 0; Tt < Qe.length; Tt += 1) {
          var et = Ce(Ee = Qe[Tt]) ? Ee(de) : Ee;
          for (var ie in et) de[ie] = ie === "className" ? pe(de[ie], et[ie]) : ie === "style" ? P(P({}, de[ie]), et[ie]) : et[ie];
        }
        return He.className && (de.className = pe(de.className, He.className)), de;
      }(B, C, En), De = J.as || Co, Me = {};
      for (var j in J) J[j] === void 0 || j[0] === "$" || j === "as" || j === "theme" && J.theme === En || (j === "forwardedAs" ? Me.as = J.forwardedAs : Nt && !Nt(j, De) || (Me[j] = J[j], Nt || $.NODE_ENV !== "development" || Fo(j) || or.has(j) || !qt.has(De) || (or.add(j), console.warn('styled-components: it looks like an unknown prop "'.concat(j, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var It = function(Qe, He) {
        var Je = Jt(), Ee = Qe.generateAndInjectStyles(He, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && pt(Ee), Ee;
      }(Le, J);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(It);
      var Ot = pe(fe, Sn);
      return It && (Ot += " " + It), J.className && (Ot += " " + J.className), Me[Dt(De) && !qt.has(De) ? "class" : "className"] = Ot, H && (Me.ref = H), D(De, Me);
    }(k, b, I);
  }
  p.displayName = c;
  var k = oe.forwardRef(p);
  return k.attrs = _, k.componentStyle = m, k.displayName = c, k.shouldForwardProp = v, k.foldedComponentIds = r ? pe(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = h, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(I) {
      for (var w = [], C = 1; C < arguments.length; C++) w[C - 1] = arguments[C];
      for (var H = 0, B = w; H < B.length; H++) Kt(I, B[H], !0);
      return I;
    }({}, o.defaultProps, b) : b;
  } }), $.NODE_ENV !== "production" && (Wi(c, h), k.warnTooManyClasses = /* @__PURE__ */ function(b, I) {
    var w = {}, C = !1;
    return function(H) {
      if (!C && (w[H] = !0, Object.keys(w).length >= 200)) {
        var B = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(B, `.
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
  }(c, h)), yn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && oo(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var sr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || xe(e)) return sr(ge(ir(kt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? ge(r) : sr(ge(ir(r, t)));
}
function tn(e, t, n) {
  if (n === void 0 && (n = Te), !t) throw K(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Cn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return tn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return tn(e, t, P(P({}, n), o));
  }, r;
}
var fo = function(e) {
  return tn(ks, e);
}, F = fo;
qt.forEach(function(e) {
  F[e] = fo(e);
});
function ue(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Xt(Cn.apply(void 0, ye([e], t, !1))), o = Jr(r);
  return new en(o, r);
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
}, _o = 14, Ns = 0.0276;
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
}, Ht = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Is = {
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
}, Os = {
  ...Is,
  [X.SMILE]: "Smile :)",
  [X.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [X.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Ts = {
  [X.SMILE]: "Smile more!",
  [X.KEEP_NEUTRAL_EXPRESSION]: "Don't smile"
}, xs = "rgba(19, 19, 19, 0.5)", As = 34;
function ar(e, t) {
  return Math.max(t, t + (e - 400) * Ns + 2);
}
const Rs = (e, t = _o) => e ? e.width < e.height ? ar(e.width, t) : ar(e.height, t) : t, Ps = (e) => e > te.Default ? We[te.Default] : e > te.L ? We[te.L] : e > te.M ? We[te.M] : We[te.S], Ls = (e) => e ? Ps(e.width) : We[te.Default];
function Ds() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ms({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
const Ge = kr(void 0);
Ge.displayName = "ConfigurationContext";
function Se() {
  const e = Ke(Ge);
  if (!e)
    throw new Error(
      `${Ge.displayName} must be used within a ${Ge.displayName} Provider`
    );
  return e;
}
function Hs({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = bs(), o = re(
    () => ({ ...t, videoElementSize: n, fontSize: Rs(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(Ge.Provider, { value: o, children: e });
}
const ho = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Us = F.div`
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
`, Fs = F.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Bs = F.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Se();
  return /* @__PURE__ */ f(Us, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(Fs, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Bs, { $fontSize: o, children: r })
  ] }) });
}, po = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(nn, { Icon: ho, position: "relative", text: e });
class Ws extends V {
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
    return this.state.hasError ? /* @__PURE__ */ f(po, { Icon: ho, isCameraReady: !1 }) : this.props.children;
  }
}
const js = F.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function zs({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return Q(() => {
    Ds();
  }, []), /* @__PURE__ */ f(vs, { target: t.styleTarget, children: /* @__PURE__ */ f($s, { theme: t.styling.theme, children: /* @__PURE__ */ f(js, { children: /* @__PURE__ */ f(Ws, { videoElementSize: n, children: /* @__PURE__ */ f(Hs, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const Gs = 0.75, Vs = "dot-auto-capture-video";
function $e(e, t) {
  const n = vt(t);
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
function Ys(e) {
  const [t, n] = L(), r = ae(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return $e(e, r), Re(() => {
    if (!t) {
      const o = document.getElementById(Vs);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function qs(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Zs = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Xs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: _o
}, Ue = {
  colors: Zs,
  font: Xs
}, Ks = (e) => {
  var t;
  return e ? {
    ...Ue,
    ...e,
    colors: {
      ...Ue.colors,
      ...e.colors
    },
    font: {
      ...Ue.font,
      ...e.font,
      family: qs((t = e.font) == null ? void 0 : t.family, Ue.font.family)
    }
  } : Ue;
}, mo = (e, t) => Math.min(e, t), Qs = ({ height: e, width: t }, n) => {
  const r = mo(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Js = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qs(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function ea(e) {
  return Js(e, Gs);
}
const ta = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, cr = (e, t) => {
  ta(e, {
    instruction: t
  });
};
async function na() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ra() {
  return (await na()).filter((t) => t.kind === "videoinput");
}
const oa = () => {
  const [e, t] = L(!1);
  return Q(() => {
    (async () => {
      (await ra()).length > 1 && t(!0);
    })();
  }, []), e;
}, ia = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), sa = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), go = F.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, aa = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(go, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(ia, { size: t }) }), ca = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(go, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(sa, { size: t }) }), la = F.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ua = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Se(), o = oa();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: a } = Ls(r);
  return /* @__PURE__ */ f(la, { $padding: i, children: [
    o && /* @__PURE__ */ f(ca, { disabled: t, onClick: () => {
      cr(e, Nn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      aa,
      {
        marginLeft: o ? a : 0,
        onClick: () => {
          cr(e, Nn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, fa = "2.5s", da = "0.3s", _a = "linear", ha = ue`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
ue`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
ue`
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
ue`
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
const pa = F.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cn`
      animation: ${ha} ${da}
        ${_a} both;
      animation-delay: ${fa};

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
`, ma = F.div`
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
`, ga = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Se();
  return /* @__PURE__ */ f(pa, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    ma,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: e.length > As,
      children: e
    }
  ) });
}, ya = F.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, va = ({ svgSize: e }) => /* @__PURE__ */ f(ya, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Ca = F.div`
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
  const {
    styling: { backdropColor: o }
  } = Se(), i = mo(r, t);
  return /* @__PURE__ */ f(Ca, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ f("g", { children: e })
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Sa({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Se(), i = r === U.ERROR || r === U.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === U.WAITING || r === U.COMPLETE ? /* @__PURE__ */ f(z, { children: [
    n && e && t && /* @__PURE__ */ f(yo, { height: e, width: t }),
    /* @__PURE__ */ f(nn, { isCameraReady: !0, text: o[U.WAITING].text })
  ] }) : /* @__PURE__ */ f(nn, { Icon: va, isCameraReady: !0, text: o[U.LOADING].text });
}
function Ea({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const wa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function ba() {
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
function $a() {
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
function ka() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Na() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const Ia = F.div`
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
`, Oa = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ f(
  Ia,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Ta = {
  [be.CIRCLE_SOLID]: /* @__PURE__ */ f(wa, {}),
  [be.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f($a, {}),
  [be.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(ka, {}),
  [be.SQUARE_DASH]: /* @__PURE__ */ f(ba, {}),
  [be.SQUARE_SOLID]: /* @__PURE__ */ f(Na, {})
};
function xa({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = Se(), s = i.toLowerCase().includes("square"), a = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ f(z, { children: [
    n && /* @__PURE__ */ f(yo, { height: e, width: t, children: /* @__PURE__ */ f(
      Ea,
      {
        height: `${r.height * 100}%`,
        isRounded: a,
        isSquare: s,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Oa, { placeholderRectangle: r, ...o, children: Ta[i] })
  ] });
}
function Aa({ eventName: e }) {
  const [t, n] = L([]), r = ae(
    (o) => {
      var s;
      const i = (s = o.detail) == null ? void 0 : s.instructionCode;
      i && n((a) => [...a, i]);
    },
    [n]
  );
  return $e(e, r), {
    escalatedInstructionCodes: t
  };
}
function Ra({
  customEvents: e,
  defaultInstructionCode: t
}) {
  const [n, r] = L(), [o, i] = L(!1), s = ae(
    (g) => {
      var m, p;
      r((m = g == null ? void 0 : g.detail) == null ? void 0 : m.cameraResolution);
      const y = (p = g == null ? void 0 : g.detail) == null ? void 0 : p.isMirroring;
      y !== void 0 && i(y);
    },
    [r]
  );
  $e(e.CAMERA_PROPS_CHANGED, s);
  const [a, l] = L({
    code: t,
    isEscalated: !1
  }), u = ae(
    (g) => {
      var m, p;
      const y = g;
      l({
        code: (m = y == null ? void 0 : y.detail) == null ? void 0 : m.instructionCode,
        isEscalated: ((p = y == null ? void 0 : y.detail) == null ? void 0 : p.isEscalated) ?? !1
      });
    },
    [l]
  );
  $e(e.INSTRUCTION_CHANGED, u);
  const [d, c] = L(U.LOADING), [h, _] = L(), v = ae(
    (g) => {
      var m, p;
      c((m = g.detail) == null ? void 0 : m.appState);
      const y = (p = g == null ? void 0 : g.detail) == null ? void 0 : p.error;
      y && _(y);
    },
    [c, _]
  );
  return $e(e.STATE_CHANGED, v), {
    cameraResolution: n,
    instruction: a,
    isMirroring: o,
    appState: d,
    error: h
  };
}
function Pa() {
  const e = Ra({
    customEvents: Ye,
    defaultInstructionCode: X.FACE_NOT_PRESENT
  }), [t, n] = L(ht.NEUTRAL), r = ae((o) => {
    const i = o, { phaseName: s } = i.detail;
    n(s);
  }, []);
  return $e(Ye.PHASE_CHANGED, r), {
    ...e,
    phase: t
  };
}
const lr = ".3s", La = ".2s", Da = ".8s", ur = ".4s", fr = ".4s", Ma = ".5s", Ha = "1.5s", Ua = 2e3, dr = ue`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, Fa = ue`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, _r = ue`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, vo = ue`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Ba = (e, t) => {
  const [n, r] = L(!1);
  return Q(() => {
    if (t !== ht.SMILE) {
      r(!1);
      return;
    }
    r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, Ua);
    return () => clearTimeout(o);
  }, [t]), t === ht.SMILE && e === X.CANDIDATE_SELECTION ? X.SMILE_CANDIDATE_SELECTION : n ? X.SMILE : e;
}, Wa = F.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${vo} ${Ma} ${Ha} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${_r} ${ur} ${fr} forwards;
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
    animation: ${_r} ${ur} ${fr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${dr} ${lr} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${dr} ${lr} forwards,
      ${Fa} ${La} ${Da} forwards;
  }
`, ja = ({ animate: e, initialPosition: t, show: n }) => {
  const [r, o] = L(!0);
  return Q(() => {
    (e || n) && o(!0);
  }, [e, n]), !r || !n ? null : /* @__PURE__ */ f(
    Wa,
    {
      $initialPosition: t,
      onAnimationEnd: (i) => i.animationName === vo.getName() && o(!1),
      children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
        /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
        /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
        /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
        /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
      ] })
    }
  );
}, za = () => {
  const { appState: e, cameraResolution: t, error: n, instruction: r, phase: o } = Pa(), i = Ba(r.code, o), { escalatedInstructionCodes: s } = Aa({
    eventName: Ye.INSTRUCTION_ESCALATED
  }), { escalatedInstructions: a, instructions: l } = Se(), u = r.code === X.CANDIDATE_SELECTION, d = Ms({
    escalatedInstructions: a,
    instructions: l,
    currentInstruction: {
      ...r,
      code: i
    }
  });
  if (e === U.ERROR)
    return /* @__PURE__ */ f(po, { text: n == null ? void 0 : n.message });
  if ((e === U.RUNNING || e === U.WAITING) && t) {
    const c = ea(t);
    return /* @__PURE__ */ f(z, { children: [
      /* @__PURE__ */ f(
        xa,
        {
          backdropHeight: t.height,
          backdropWidth: t.width,
          isBackdrop: !0,
          isInCandidateSelection: u,
          placeholderRectangle: c
        }
      ),
      /* @__PURE__ */ f(
        ja,
        {
          animate: s.includes("mouth_score_too_low"),
          initialPosition: c,
          show: o === ht.SMILE
        }
      ),
      d && /* @__PURE__ */ f(
        ga,
        {
          cssBottom: (c.height + c.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: u,
          isPortrait: t.width < t.height,
          children: d
        }
      ),
      /* @__PURE__ */ f(ua, { customControlEvent: Ye.CONTROL, isSwitchCameraDisabled: u })
    ] });
  }
  return /* @__PURE__ */ f(
    Sa,
    {
      cameraHeight: t == null ? void 0 : t.height,
      cameraWidth: t == null ? void 0 : t.width,
      isBackdrop: !0,
      state: e
    }
  );
};
function Ga(e) {
  var s, a, l, u, d, c;
  const t = {
    ...Os,
    ...e == null ? void 0 : e.instructions
  }, n = {
    ...Ts,
    ...e == null ? void 0 : e.escalatedInstructions
  };
  t.mouth_score_too_low = t.smile, n.mouth_score_too_low = n.smile, t.mouth_score_too_high = t.keep_neutral_expression, n.mouth_score_too_high = n.keep_neutral_expression;
  const r = {
    [U.LOADING]: {
      ...Ht.loading,
      ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.loading
    },
    [U.WAITING]: {
      ...Ht.waiting,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.waiting
    },
    [U.COMPLETE]: {
      ...Ht.waiting,
      ...(l = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : l.waiting
    }
  }, o = {
    ...e == null ? void 0 : e.styling,
    backdropColor: ((u = e == null ? void 0 : e.styling) == null ? void 0 : u.backdropColor) ?? xs,
    theme: Ks((d = e == null ? void 0 : e.styling) == null ? void 0 : d.theme)
  }, i = {
    showCameraButtons: ((c = e == null ? void 0 : e.control) == null ? void 0 : c.showCameraButtons) ?? !1
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
const Va = ({ configuration: e }) => {
  const t = Ys(Ye.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(zs, { uiConfiguration: Ga(e), videoElementSize: t, children: /* @__PURE__ */ f(za, {}) });
};
Po(Va, "x-dot-smile-liveness-ui", ["configuration"]);
