var No = Object.defineProperty;
var Io = (e, t, n) => t in e ? No(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tt = (e, t, n) => Io(e, typeof t != "symbol" ? t + "" : t, n);
var Ze, v, vr, de, On, Cr, Sr, wr, an, Ft, Bt, Er, Ge = {}, br = [], To = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xe = Array.isArray;
function q(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function cn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] == null && (s[i] = e.defaultProps[i]);
  return We(e, s, r, o, null);
}
function We(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++vr, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function xo() {
  return { current: null };
}
function j(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function $e(e, t) {
  if (t == null) return e.__ ? $e(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? $e(e) : null;
}
function $r(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return $r(e);
  }
}
function Wt(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !ht.__r++ || On != v.debounceRendering) && ((On = v.debounceRendering) || Cr)(ht);
}
function ht() {
  for (var e, t, n, r, o, i, s, c = 1; de.length; ) de.length > c && de.sort(Sr), e = de.shift(), c = de.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], s = [], t.__P && ((n = q({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), ln(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? $e(r), !!(32 & r.__u), s), n.__v = r.__v, n.__.__k[n.__i] = n, Nr(i, n, s), n.__e != o && $r(n)));
  ht.__r = 0;
}
function kr(e, t, n, r, o, i, s, c, a, u, d) {
  var l, h, _, g, w, $, m = r && r.__k || br, p = t.length;
  for (a = Ao(n, t, m, a, p), l = 0; l < p; l++) (_ = n.__k[l]) != null && (h = _.__i == -1 ? Ge : m[_.__i] || Ge, _.__i = l, $ = ln(e, _, h, o, i, s, c, a, u, d), g = _.__e, _.ref && h.ref != _.ref && (h.ref && un(h.ref, null, _), d.push(_.ref, _.__c || g, _)), w == null && g != null && (w = g), 4 & _.__u || h.__k === _.__k ? a = Or(_, a, e) : typeof _.type == "function" && $ !== void 0 ? a = $ : g && (a = g.nextSibling), _.__u &= -7);
  return n.__e = w, a;
}
function Ao(e, t, n, r, o) {
  var i, s, c, a, u, d = n.length, l = d, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (a = i + h, (s = e.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? We(null, s, null, null, null) : Xe(s) ? We(j, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? We(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, c = null, (u = s.__i = Ro(s, n, a, l)) != -1 && (l--, (c = n[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > d ? h-- : o < d && h++), typeof s.type != "function" && (s.__u |= 4)) : u != a && (u == a - 1 ? h-- : u == a + 1 ? h++ : (u > a ? h-- : h++, s.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < d; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = $e(c)), Tr(c, c));
  return r;
}
function Or(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Or(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = $e(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Xe(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function Ro(e, t, n, r) {
  var o, i, s = e.key, c = e.type, a = t[n];
  if (a === null && e.key == null || a && s == a.key && c == a.type && (2 & a.__u) == 0) return n;
  if (r > (a != null && (2 & a.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((a = t[o]) && (2 & a.__u) == 0 && s == a.key && c == a.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((a = t[i]) && (2 & a.__u) == 0 && s == a.key && c == a.type) return i;
      i++;
    }
  }
  return -1;
}
function Nn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || To.test(t) ? n : n + "px";
}
function nt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Nn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Nn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(wr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = an, e.addEventListener(t, i ? Bt : Ft, i)) : e.removeEventListener(t, i ? Bt : Ft, i);
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
function In(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = an++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function ln(e, t, n, r, o, i, s, c, a, u) {
  var d, l, h, _, g, w, $, m, p, k, E, N, S, y, H, F, Le, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (a = !!(32 & n.__u), i = [c = t.__e = n.__e]), (d = v.__b) && d(t);
  e: if (typeof B == "function") try {
    if (m = t.props, p = "prototype" in B && B.prototype.render, k = (d = B.contextType) && r[d.__c], E = d ? k ? k.props.value : d.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (p ? t.__c = l = new B(m, E) : (t.__c = l = new G(m, E), l.constructor = B, l.render = Po), k && k.sub(l), l.props = m, l.state || (l.state = {}), l.context = E, l.__n = r, h = l.__d = !0, l.__h = [], l._sb = []), p && l.__s == null && (l.__s = l.state), p && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = q({}, l.__s)), q(l.__s, B.getDerivedStateFromProps(m, l.__s))), _ = l.props, g = l.state, l.__v = t, h) p && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), p && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (p && B.getDerivedStateFromProps == null && m !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, E), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, E) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ue) {
          ue && (ue.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && s.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, E), p && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, g, w);
      });
    }
    if (l.context = E, l.props = m, l.__P = e, l.__e = !1, S = v.__r, y = 0, p) {
      for (l.state = l.__s, l.__d = !1, S && S(t), d = l.render(l.props, l.state, l.context), H = 0; H < l._sb.length; H++) l.__h.push(l._sb[H]);
      l._sb = [];
    } else do
      l.__d = !1, S && S(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = q(q({}, r), l.getChildContext())), p && !h && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(_, g)), F = d, d != null && d.type === j && d.key == null && (F = Ir(d.props.children)), c = kr(e, Xe(F) ? F : [F], t, n, r, o, i, s, c, a, u), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), $ && (l.__E = l.__ = null);
  } catch (ue) {
    if (t.__v = null, a || i != null) if (ue.then) {
      for (t.__u |= a ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (Le = i.length; Le--; ) cn(i[Le]);
    else t.__e = n.__e, t.__k = n.__k;
    v.__e(ue, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : c = t.__e = Lo(n.__e, t, n, r, o, i, s, a, u);
  return (d = v.diffed) && d(t), 128 & t.__u ? void 0 : c;
}
function Nr(e, t, n) {
  for (var r = 0; r < n.length; r++) un(n[r], n[++r], n[++r]);
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
function Ir(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Xe(e) ? e.map(Ir) : q({}, e);
}
function Lo(e, t, n, r, o, i, s, c, a) {
  var u, d, l, h, _, g, w, $ = n.props, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!p && (p ? _.localName == p : _.nodeType == 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), c && (v.__m && v.__m(t, i), c = !1), i = null;
  }
  if (p == null) $ === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), $ = n.props || Ge, !c && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        nt(e, u, null, _, o);
      }
    }
    for (u in m) _ = m[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? g = _ : u == "checked" ? w = _ : c && typeof _ != "function" || $[u] === _ || nt(e, u, _, $[u], o);
    if (d) c || l && (d.__html == l.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), kr(t.type == "template" ? e.content : e, Xe(h) ? h : [h], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && $e(n, 0), c, a), i != null) for (u = i.length; u--; ) cn(i[u]);
    c || (u = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || p == "progress" && !g || p == "option" && g != $[u]) && nt(e, u, g, $[u], o), u = "checked", w != null && w != e[u] && nt(e, u, w, $[u], o));
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
    v.__e(o, n);
  }
}
function Tr(e, t, n) {
  var r, o;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || un(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Tr(r[o], t, n || typeof e.type != "function");
  n || cn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Po(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, s;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], ln(t, e = (!r && n || t).__k = D(j, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Nr(i, e, s);
}
function fn(e, t) {
  ae(e, t, fn);
}
function dn(e, t, n) {
  var r, o, i, s, c = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && s != null ? s[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), We(e.type, c, r || e.key, o || e.ref, null);
}
function xr(e) {
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
  return t.__c = "__cC" + Er++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = br.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, vr = 0, G.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Wt(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Wt(this));
}, G.prototype.render = j, de = [], Cr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Sr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, wr = /(PointerCapture)$|Capture$/i, an = 0, Ft = In(!1), Bt = In(!0), Er = 0;
function _n() {
  return (_n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Do = ["context", "children"];
function Mo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, s, c = {}, a = Object.keys(r);
    for (s = 0; s < a.length; s++) o.indexOf(i = a[s]) >= 0 || (c[i] = r[i]);
    return c;
  }(e, Do);
  return dn(t, n);
}
function Ho() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(Mo, _n({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, s = 0, c = n.attributes, a = n.childNodes;
    for (s = c.length; s--; ) c[s].name !== "slot" && (i[c[s].name] = c[s].value, i[Ar(c[s].name)] = c[s].value);
    for (s = a.length; s--; ) {
      var u = t(a[s], null), d = a[s].slot;
      d ? i[d] = D(Tn, { name: d }, u) : o[s] = u;
    }
    var l = r ? D(Tn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? fn : ae)(this._vdom, this._root);
}
function Ar(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Uo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Ar(e)] = n, this._vdom = dn(this._vdom, r), ae(this._vdom, this._root);
  }
}
function Fo() {
  ae(this._vdom = null, this._root);
}
function Tn(e, t) {
  var n = this;
  return D("slot", _n({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Bo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Ho, o.prototype.attributeChangedCallback = Uo, o.prototype.disconnectedCallback = Fo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t, o);
}
var Wo = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, c, a = t;
  if ("ref" in a) for (c in a = {}, t) c == "ref" ? s = t[c] : a[c] = t[c];
  var u = { type: e, props: a, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Wo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (c in s) a[c] === void 0 && (a[c] = s[c]);
  return v.vnode && v.vnode(u), u;
}
const xn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var Ve = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ve || {}), hn = /* @__PURE__ */ ((e) => (e.CONTROL = "smile-auto-capture:control", e.INSTRUCTION_ESCALATED = "smile:instruction-escalated", e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(hn || {});
const An = {
  EYE_NOT_PRESENT: "eye_not_present"
}, L = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${An.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${An.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, jo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, jt = {
  ...jo,
  DONE: "DONE"
}, ne = {
  ...L,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, pt = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, be = jt;
var ce, T, Rt, Rn, ke = 0, Rr = [], x = v, Ln = x.__b, Pn = x.__r, Dn = x.diffed, Mn = x.__c, Hn = x.unmount, Un = x.__;
function xe(e, t) {
  x.__h && x.__h(T, e, ke || t), ke = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function M(e) {
  return ke = 1, pn(Dr, e);
}
function pn(e, t, n) {
  var r = xe(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Dr(void 0, t), function(c) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, c);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.__f)) {
    var o = function(c, a, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, c, a, u);
      var l = r.__c.props !== c;
      return d.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (l = !0);
        }
      }), i && i.call(this, c, a, u) || l;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, s = T.componentWillUpdate;
    T.componentWillUpdate = function(c, a, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(c, a, u), i = d;
      }
      s && s.call(this, c, a, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function X(e, t) {
  var n = xe(ce++, 3);
  !x.__s && mn(n.__H, t) && (n.__ = e, n.u = t, T.__H.__h.push(n));
}
function Ae(e, t) {
  var n = xe(ce++, 4);
  !x.__s && mn(n.__H, t) && (n.__ = e, n.u = t, T.__h.push(n));
}
function St(e) {
  return ke = 5, re(function() {
    return { current: e };
  }, []);
}
function Lr(e, t, n) {
  ke = 6, Ae(function() {
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
  var n = xe(ce++, 7);
  return mn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
  return ke = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = T.context[e.__c], n = xe(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function mt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Pr() {
  var e = xe(ce++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function zo() {
  for (var e; e = Rr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  T = null, Ln && Ln(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Un && Un(e, t);
}, x.__r = function(e) {
  Pn && Pn(e), ce = 0;
  var t = (T = e.__c).__H;
  t && (Rt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(zt), t.__h = [], ce = 0)), Rt = T;
}, x.diffed = function(e) {
  Dn && Dn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Rr.push(t) !== 1 && Rn === x.requestAnimationFrame || ((Rn = x.requestAnimationFrame) || Go)(zo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Rt = T = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Mn && Mn(e, t);
}, x.unmount = function(e) {
  Hn && Hn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      at(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Fn = typeof requestAnimationFrame == "function";
function Go(e) {
  var t, n = function() {
    clearTimeout(r), Fn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Fn && (t = requestAnimationFrame(n));
}
function at(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function zt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function mn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Dr(e, t) {
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
function Vo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Yo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qo = /* @__PURE__ */ Vo(
  function(e) {
    return Yo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Mr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Hr(e, t) {
  var n = t(), r = M({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ae(function() {
    o.__ = n, o.u = t, Lt(o) && i({ t: o });
  }, [e, n, t]), X(function() {
    return Lt(o) && i({ t: o }), e(function() {
      Lt(o) && i({ t: o });
    });
  }, [e]), n;
}
function Lt(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Ur(e) {
  e();
}
function Fr(e) {
  return e;
}
function Br() {
  return [!1, Ur];
}
var Wr = Ae;
function Vt(e, t) {
  this.props = e, this.context = t;
}
function Zo(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Vt.prototype = new G()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var Bn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Bn && Bn(e);
};
var Xo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Ko(e) {
  function t(n) {
    var r = Mr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Xo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Wn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Qo = { map: Wn, forEach: Wn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, Jo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Jo(e, t, n, r);
};
var jn = v.unmount;
function jr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Mr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return jr(r, t, n);
  })), e;
}
function zr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return zr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ct() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Gr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ei(e) {
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
function Ue() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), jn && jn(e);
}, (ct.prototype = new G()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Gr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = s;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = zr(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, ct.prototype.componentWillUnmount = function() {
  this.o = [];
}, ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = jr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(j, null, e.fallback);
  return o && (o.__u &= -33), [D(j, null, t.__a ? null : e.children), o];
};
var zn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function ti(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ni(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ae(null, t.v), t.v = null, t.h = null;
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
  ae(D(ti, { context: t.context }, e.__v), t.v);
}
function ri(e, t) {
  var n = D(ni, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Ue.prototype = new G()).__a = function(e) {
  var t = this, n = Gr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), zn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ue.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Ue.prototype.componentDidUpdate = Ue.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    zn(e, n, t);
  });
};
var Vr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, oi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ii = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, si = /[A-Z0-9]/g, ai = typeof document < "u", ci = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function li(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ui(e, t, n) {
  return fn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
G.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(G.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Gn = v.event;
function fi() {
}
function di() {
  return this.cancelBubble;
}
function _i() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Gn && (e = Gn(e)), e.persist = fi, e.isPropagationStopped = di, e.isDefaultPrevented = _i, e.nativeEvent = e;
};
var gn, hi = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Vn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var c = n[s];
      if (!(s === "value" && "defaultValue" in n && c == null || ai && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : a === "translate" && c === "no" ? c = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || ci(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : ii.test(s) && (s = a) : a = s = "oninput" : i && oi.test(s) ? s = s.replace(si, "-$&").toLowerCase() : c === null && (c = void 0), a === "oninput" && o[s = a] && (s = "oninputCapture"), o[s] = c;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", hi)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Vr, Vn && Vn(e);
};
var Yn = v.__r;
v.__r = function(e) {
  Yn && Yn(e), gn = e.__c;
};
var qn = v.diffed;
v.diffed = function(e) {
  qn && qn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), gn = null;
};
var pi = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return gn.__n[e.__c].props.value;
}, useCallback: ge, useContext: Ke, useDebugValue: mt, useDeferredValue: Fr, useEffect: X, useId: Pr, useImperativeHandle: Lr, useInsertionEffect: Wr, useLayoutEffect: Ae, useMemo: re, useReducer: pn, useRef: St, useState: M, useSyncExternalStore: Hr, useTransition: Br } } };
function mi(e) {
  return D.bind(null, e);
}
function wt(e) {
  return !!e && e.$$typeof === Vr;
}
function gi(e) {
  return wt(e) && e.type === j;
}
function yi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function vi(e) {
  return wt(e) ? dn.apply(null, arguments) : e;
}
function Ci(e) {
  return !!e.__k && (ae(null, e), !0);
}
function Si(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var wi = function(e, t) {
  return e(t);
}, Ei = function(e, t) {
  return e(t);
}, bi = j, $i = wt, oe = { useState: M, useId: Pr, useReducer: pn, useEffect: X, useLayoutEffect: Ae, useInsertionEffect: Wr, useTransition: Br, useDeferredValue: Fr, useSyncExternalStore: Hr, startTransition: Ur, useRef: St, useImperativeHandle: Lr, useMemo: re, useCallback: ge, useContext: Ke, useDebugValue: mt, version: "18.3.1", Children: Qo, render: li, hydrate: ui, unmountComponentAtNode: Ci, createPortal: ri, createElement: D, createContext: xr, createFactory: mi, cloneElement: vi, createRef: xo, Fragment: j, isValidElement: wt, isElement: $i, isFragment: gi, isMemo: yi, findDOMNode: Si, Component: G, PureComponent: Vt, memo: Zo, forwardRef: Ko, flushSync: Ei, unstable_batchedUpdates: wi, StrictMode: bi, Suspense: ct, SuspenseList: Ue, lazy: ei, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pi };
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt, Zn;
function Oi() {
  return Zn || (Zn = 1, Pt = function(t, n, r, o) {
    var i = r ? r.call(o, t, n) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === n)
      return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
      return !1;
    var s = Object.keys(t), c = Object.keys(n);
    if (s.length !== c.length)
      return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
      var d = s[u];
      if (!a(d))
        return !1;
      var l = t[d], h = n[d];
      if (i = r ? r.call(o, l, h, d) : void 0, i === !1 || i === void 0 && l !== h)
        return !1;
    }
    return !0;
  }), Pt;
}
var Ni = Oi();
const Ii = /* @__PURE__ */ ki(Ni);
var I = "-ms-", je = "-moz-", O = "-webkit-", Yr = "comm", Et = "rule", yn = "decl", Ti = "@import", qr = "@keyframes", xi = "@layer", Zr = Math.abs, vn = String.fromCharCode, Yt = Object.assign;
function Ai(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Xr(e) {
  return e.trim();
}
function J(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function lt(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oe(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Kr(e) {
  return e.length;
}
function Fe(e, t) {
  return t.push(e), e;
}
function Ri(e, t) {
  return e.map(t).join("");
}
function Xn(e, t) {
  return e.filter(function(n) {
    return !J(n, t);
  });
}
var bt = 1, Ne = 1, Qr = 0, z = 0, A = 0, Re = "";
function $t(e, t, n, r, o, i, s, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: bt, column: Ne, length: s, return: "", siblings: c };
}
function se(e, t) {
  return Yt($t("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function Li() {
  return A;
}
function Pi() {
  return A = z > 0 ? R(Re, --z) : 0, Ne--, A === 10 && (Ne = 1, bt--), A;
}
function V() {
  return A = z < Qr ? R(Re, z++) : 0, Ne++, A === 10 && (Ne = 1, bt++), A;
}
function pe() {
  return R(Re, z);
}
function ut() {
  return z;
}
function kt(e, t) {
  return Oe(Re, e, t);
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
function Di(e) {
  return bt = Ne = 1, Qr = Y(Re = e), z = 0, [];
}
function Mi(e) {
  return Re = "", e;
}
function Dt(e) {
  return Xr(kt(z - 1, Zt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hi(e) {
  for (; (A = pe()) && A < 33; )
    V();
  return qt(e) > 2 || qt(A) > 3 ? "" : " ";
}
function Ui(e, t) {
  for (; --t && V() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return kt(e, ut() + (t < 6 && pe() == 32 && V() == 32));
}
function Zt(e) {
  for (; V(); )
    switch (A) {
      // ] ) " '
      case e:
        return z;
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
        V();
        break;
    }
  return z;
}
function Fi(e, t) {
  for (; V() && e + A !== 57; )
    if (e + A === 84 && pe() === 47)
      break;
  return "/*" + kt(t, z - 1) + "*" + vn(e === 47 ? e : V());
}
function Bi(e) {
  for (; !qt(pe()); )
    V();
  return kt(e, z);
}
function Wi(e) {
  return Mi(ft("", null, null, null, [""], e = Di(e), 0, [0], e));
}
function ft(e, t, n, r, o, i, s, c, a) {
  for (var u = 0, d = 0, l = s, h = 0, _ = 0, g = 0, w = 1, $ = 1, m = 1, p = 0, k = "", E = o, N = i, S = r, y = k; $; )
    switch (g = p, p = V()) {
      // (
      case 40:
        if (g != 108 && R(y, l - 1) == 58) {
          lt(y += C(Dt(p), "&", "&\f"), "&\f", Zr(u ? c[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Dt(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Hi(g);
        break;
      // \
      case 92:
        y += Ui(ut() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Fe(ji(Fi(V(), ut()), t, n, a), a);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * w:
        c[u++] = Y(y) * m;
      // } ; \0
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + d:
            m == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - l && Fe(_ > 32 ? Qn(y + ";", r, n, l - 1, a) : Qn(C(y, " ", "") + ";", r, n, l - 2, a), a);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Fe(S = Kn(y, t, n, u, d, o, c, k, E = [], N = [], l, i), i), p === 123)
              if (d === 0)
                ft(y, t, S, S, E, i, l, c, N);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, S, S, r && Fe(Kn(e, S, S, 0, 0, o, c, k, o, E = [], l, N), N), o, N, l, c, r ? E : N);
                    break;
                  default:
                    ft(y, S, S, S, [""], N, 0, c, N);
                }
        }
        u = d = _ = 0, w = m = 1, k = y = "", l = s;
        break;
      // :
      case 58:
        l = 1 + Y(y), _ = g;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && Pi() == 125)
            continue;
        }
        switch (y += vn(p), p * w) {
          // &
          case 38:
            m = d > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Y(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            pe() === 45 && (y += Dt(V())), h = pe(), d = l = Y(k = y += Bi(ut())), p++;
            break;
          // -
          case 45:
            g === 45 && Y(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Kn(e, t, n, r, o, i, s, c, a, u, d, l) {
  for (var h = o - 1, _ = o === 0 ? i : [""], g = Kr(_), w = 0, $ = 0, m = 0; w < r; ++w)
    for (var p = 0, k = Oe(e, h + 1, h = Zr($ = s[w])), E = e; p < g; ++p)
      (E = Xr($ > 0 ? _[p] + " " + k : C(k, /&\f/g, _[p]))) && (a[m++] = E);
  return $t(e, t, n, o === 0 ? Et : c, a, u, d, l);
}
function ji(e, t, n, r) {
  return $t(e, t, n, Yr, vn(Li()), Oe(e, 2, -2), 0, r);
}
function Qn(e, t, n, r, o) {
  return $t(e, t, n, yn, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Jr(e, t, n) {
  switch (Ai(e, t)) {
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
      return je + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + je + e + I + e + e;
    // writing-mode
    case 5936:
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return O + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return O + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return O + e + I + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return O + e + I + e + e;
    // order
    case 6165:
      return O + e + I + "flex-" + e + e;
    // align-items
    case 5187:
      return O + e + C(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + I + "flex-$1$2") + e;
    // align-self
    case 5443:
      return O + e + I + "flex-item-" + C(e, /flex-|-self/g, "") + (J(e, /flex-|baseline/) ? "" : I + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return O + e + I + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return O + e + I + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return O + e + I + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return O + "box-" + C(e, "-grow", "") + O + e + I + C(e, "grow", "positive") + e;
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
      return C(C(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    // justify-self
    case 4200:
      if (!J(e, /flex-|baseline/)) return I + "grid-column-align" + Oe(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return I + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, J(r.props, /grid-\w+-end/);
      }) ? ~lt(e + (n = n[t].value), "span", 0) ? e : I + C(e, "-start", "") + e + I + "grid-row-span:" + (~lt(n, "span", 0) ? J(n, /\d+/) : +J(n, /\d+/) - +J(e, /\d+/)) + ";" : I + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return J(r.props, /grid-\w+-start/);
      }) ? e : I + C(C(e, "-end", "-span"), "span ", "") + e;
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
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + je + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~lt(e, "stretch", 0) ? Jr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, a, u) {
        return I + o + ":" + i + u + (s ? I + o + "-span:" + (c ? a : +a - +i) + u : "") + e;
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
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + I + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return C(e, ":", ":" + I) + e;
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
function gt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function zi(e, t, n, r) {
  switch (e.type) {
    case xi:
      if (e.children.length) break;
    case Ti:
    case yn:
      return e.return = e.return || e.value;
    case Yr:
      return "";
    case qr:
      return e.return = e.value + "{" + gt(e.children, r) + "}";
    case Et:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = gt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Gi(e) {
  var t = Kr(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function Vi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case yn:
        e.return = Jr(e.value, e.length, n);
        return;
      case qr:
        return gt([se(e, { value: C(e.value, "@", "@" + O) })], r);
      case Et:
        if (e.length)
          return Ri(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(se(e, { props: [C(o, /:(read-\w+)/, ":" + je + "$1")] })), Ee(se(e, { props: [o] })), Yt(e, { props: Xn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(se(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Ee(se(e, { props: [C(o, /:(plac\w+)/, ":" + je + "$1")] })), Ee(se(e, { props: [C(o, /:(plac\w+)/, I + "input-$1")] })), Ee(se(e, { props: [o] })), Yt(e, { props: Xn(n, r) });
                break;
            }
            return "";
          });
    }
}
var qi = {
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
}, b = {}, ve = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", eo = "active", to = "data-styled-version", Ot = "6.1.18", Cn = `/*!sc*/
`, yt = typeof window < "u" && typeof document < "u", Zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Jn = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), Xi = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], a = 1; a < arguments.length; a++) c[a - 1] = arguments[a];
        Jn.test(s) ? (i = !1, rt.delete(r)) : o.apply(void 0, ye([s], c, !1));
      }, St(), i && !rt.has(r) && (console.warn(r), rt.add(r));
    } catch (s) {
      Jn.test(s.message) && rt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Nt = Object.freeze([]), Ie = Object.freeze({});
function Ki(e, t, n) {
  return n === void 0 && (n = Ie), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Qi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ji = /(^-|-$)/g;
function er(e) {
  return e.replace(Qi, "-").replace(Ji, "");
}
var es = /(a)(d)/gi, ot = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > ot; t = t / ot | 0) n = tr(t % ot) + n;
  return (tr(t % ot) + n).replace(es, "$1-$2");
}
var Mt, no = 5381, _e = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, ro = function(e) {
  return _e(no, e);
};
function oo(e) {
  return Kt(ro(e) >>> 0);
}
function io(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ht(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var so = typeof Symbol == "function" && Symbol.for, ao = so ? Symbol.for("react.memo") : 60115, ts = so ? Symbol.for("react.forward_ref") : 60112, ns = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, rs = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, co = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, os = ((Mt = {})[ts] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mt[ao] = co, Mt);
function nr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ao ? co : "$$typeof" in e ? os[e.$$typeof] : ns;
  var t;
}
var is = Object.defineProperty, ss = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, as = Object.getOwnPropertyDescriptor, cs = Object.getPrototypeOf, or = Object.prototype;
function lo(e, t, n) {
  if (typeof t != "string") {
    if (or) {
      var r = cs(t);
      r && r !== or && lo(e, r, n);
    }
    var o = ss(t);
    rr && (o = o.concat(rr(t)));
    for (var i = nr(e), s = nr(t), c = 0; c < o.length; ++c) {
      var a = o[c];
      if (!(a in rs || n && n[a] || s && a in s || i && a in i)) {
        var u = as(t, a);
        try {
          is(e, a, u);
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
function Sn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qt(e, t) {
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
function wn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ls = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function us() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(us.apply(void 0, ye([ls[e]], t, !1)).trim());
}
var fs = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Z(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), a = (s = 0, n.length); s < a; s++) this.tag.insertRule(c, n[s]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Cn);
    return n;
  }, e;
}(), ds = 1 << 30, dt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), _t = 1, it = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; vt.has(_t); ) _t++;
  var t = _t++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > ds)) throw Z(16, "".concat(t));
  return dt.set(e, t), vt.set(t, e), t;
}, _s = function(e, t) {
  _t = t + 1, dt.set(e, t), vt.set(t, e);
}, hs = "style[".concat(ve, "][").concat(to, '="').concat(Ot, '"]'), ps = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ms = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, gs = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Cn), o = [], i = 0, s = r.length; i < s; i++) {
    var c = r[i].trim();
    if (c) {
      var a = c.match(ps);
      if (a) {
        var u = 0 | parseInt(a[1], 10), d = a[2];
        u !== 0 && (_s(d, u), ms(e, d, a[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, ir = function(e) {
  for (var t = document.querySelectorAll(hs), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ve) !== eo && (gs(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ys() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var uo = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var a = Array.from(c.querySelectorAll("style[".concat(ve, "]")));
    return a[a.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, eo), r.setAttribute(to, Ot);
  var s = ys();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, vs = function() {
  function e(t) {
    this.element = uo(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Z(17);
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
}(), Cs = function() {
  function e(t) {
    this.element = uo(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Ss = function() {
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
}(), sr = yt, ws = { isServer: !yt, useCSSOMInjection: !Zi }, fo = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ie), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ws), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && yt && sr && (sr = !1, ir(this)), wn(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, a = "", u = function(l) {
          var h = function(m) {
            return vt.get(m);
          }(l);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), g = s.getGroup(l);
          if (_ === void 0 || !_.size || g.length === 0) return "continue";
          var w = "".concat(ve, ".g").concat(l, '[id="').concat(h, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && ($ += "".concat(m, ","));
          }), a += "".concat(g).concat(w, '{content:"').concat($, '"}').concat(Cn);
        }, d = 0; d < c; d++) u(d);
        return a;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return it(t);
  }, e.prototype.rehydrate = function() {
    !this.server && yt && ir(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Ss(o) : r ? new vs(o) : new Cs(o);
    }(this.options), new fs(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (it(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(it(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(it(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Es = /&/g, bs = /^\s*\/\/.*$/gm;
function _o(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = _o(n.children, t)), n;
  });
}
function ho(e) {
  var t, n, r, o = e === void 0 ? Ie : e, i = o.options, s = i === void 0 ? Ie : i, c = o.plugins, a = c === void 0 ? Nt : c, u = function(h, _, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = a.slice();
  d.push(function(h) {
    h.type === Et && h.value.includes("&") && (h.props[0] = h.props[0].replace(Es, n).replace(r, u));
  }), s.prefix && d.push(Yi), d.push(zi);
  var l = function(h, _, g, w) {
    _ === void 0 && (_ = ""), g === void 0 && (g = ""), w === void 0 && (w = "&"), t = w, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(bs, ""), m = Wi(g || _ ? "".concat(g, " ").concat(_, " { ").concat($, " }") : $);
    s.namespace && (m = _o(m, s.namespace));
    var p = [];
    return gt(m, Gi(d.concat(Vi(function(k) {
      return p.push(k);
    })))), p;
  };
  return l.hash = a.length ? a.reduce(function(h, _) {
    return _.name || Z(15), _e(h, _.name);
  }, no).toString() : "", l;
}
var $s = new fo(), en = ho(), En = oe.createContext({ shouldForwardProp: void 0, styleSheet: $s, stylis: en });
En.Consumer;
var ks = oe.createContext(void 0);
function tn() {
  return Ke(En);
}
function Os(e) {
  var t = M(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = re(function() {
    var a = o;
    return e.sheet ? a = e.sheet : e.target && (a = a.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = re(function() {
    return ho({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  X(function() {
    Ii(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return oe.createElement(En.Provider, { value: c }, oe.createElement(ks.Provider, { value: s }, e.children));
}
var nn = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, wn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
}(), Ns = function(e) {
  return e >= "A" && e <= "Z";
};
function ar(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ns(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var po = function(e) {
  return e == null || e === !1 || e === "";
}, mo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !po(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(ar(o), ":"), i, ";") : Te(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], mo(i), !1), ["}"], !1)) : r.push("".concat(ar(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in qi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function me(e, t, n, r) {
  if (po(e)) return [];
  if (Sn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || Te(o) || o === null || console.error("".concat(io(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? mo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Nt, e.map(function(s) {
    return me(s, t, n, r);
  })) : [e.toString()];
}
function Is(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !Sn(n)) return !1;
  }
  return !0;
}
var Ts = ro(Ot), xs = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Is(t), this.componentId = n, this.baseHash = _e(Ts, n), this.baseStyle = r, fo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = he(o, this.staticRulesId);
    else {
      var i = Qt(me(this.rules, t, n, r)), s = Kt(_e(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var c = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, c);
      }
      o = he(o, s), this.staticRulesId = s;
    }
    else {
      for (var a = _e(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string") u += l, b.NODE_ENV !== "production" && (a = _e(a, l));
        else if (l) {
          var h = Qt(me(l, t, n, r));
          a = _e(a, h + d), u += h;
        }
      }
      if (u) {
        var _ = Kt(a >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = he(o, _);
      }
    }
    return o;
  }, e;
}(), Ye = oe.createContext(void 0);
Ye.Consumer;
function As() {
  var e = Ke(Ye);
  if (!e) throw Z(18);
  return e;
}
function Rs(e) {
  var t = oe.useContext(Ye), n = re(function() {
    return function(r, o) {
      if (!r) throw Z(14);
      if (Ce(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Z(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(Ye.Provider, { value: n }, e.children) : null;
}
var Ut = {}, cr = /* @__PURE__ */ new Set();
function Ls(e, t, n) {
  var r = Sn(e), o = e, i = !Ht(e), s = t.attrs, c = s === void 0 ? Nt : s, a = t.componentId, u = a === void 0 ? function(E, N) {
    var S = typeof E != "string" ? "sc" : er(E);
    Ut[S] = (Ut[S] || 0) + 1;
    var y = "".concat(S, "-").concat(oo(Ot + S + Ut[S]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : a, d = t.displayName, l = d === void 0 ? function(E) {
    return Ht(E) ? "styled.".concat(E) : "Styled(".concat(io(E), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(E, N) {
        return w(E, N) && $(E, N);
      };
    } else g = w;
  }
  var m = new xs(n, h, r ? o.componentStyle : void 0);
  function p(E, N) {
    return function(S, y, H) {
      var F = S.attrs, Le = S.componentStyle, B = S.defaultProps, ue = S.foldedComponentIds, $n = S.styledComponentId, $o = S.target, ko = oe.useContext(Ye), Oo = tn(), It = S.shouldForwardProp || Oo.shouldForwardProp;
      b.NODE_ENV !== "production" && mt($n);
      var kn = Ki(y, ko, B) || Ie, K = function(Qe, Me, Je) {
        for (var we, fe = P(P({}, Me), { className: void 0, theme: Je }), At = 0; At < Qe.length; At += 1) {
          var et = Ce(we = Qe[At]) ? we(fe) : we;
          for (var ie in et) fe[ie] = ie === "className" ? he(fe[ie], et[ie]) : ie === "style" ? P(P({}, fe[ie]), et[ie]) : et[ie];
        }
        return Me.className && (fe.className = he(fe.className, Me.className)), fe;
      }(F, y, kn), Pe = K.as || $o, De = {};
      for (var W in K) K[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && K.theme === kn || (W === "forwardedAs" ? De.as = K.forwardedAs : It && !It(W, Pe) || (De[W] = K[W], It || b.NODE_ENV !== "development" || qo(W) || cr.has(W) || !Xt.has(Pe) || (cr.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Tt = function(Qe, Me) {
        var Je = tn(), we = Qe.generateAndInjectStyles(Me, Je.styleSheet, Je.stylis);
        return b.NODE_ENV !== "production" && mt(we), we;
      }(Le, K);
      b.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(Tt);
      var xt = he(ue, $n);
      return Tt && (xt += " " + Tt), K.className && (xt += " " + K.className), De[Ht(Pe) && !Xt.has(Pe) ? "class" : "className"] = xt, H && (De.ref = H), D(Pe, De);
    }(k, E, N);
  }
  p.displayName = l;
  var k = oe.forwardRef(p);
  return k.attrs = _, k.componentStyle = m, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = r ? he(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = h, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(N) {
      for (var S = [], y = 1; y < arguments.length; y++) S[y - 1] = arguments[y];
      for (var H = 0, F = S; H < F.length; H++) Jt(N, F[H], !0);
      return N;
    }({}, o.defaultProps, E) : E;
  } }), b.NODE_ENV !== "production" && (Xi(l, h), k.warnTooManyClasses = /* @__PURE__ */ function(E, N) {
    var S = {}, y = !1;
    return function(H) {
      if (!y && (S[H] = !0, Object.keys(S).length >= 200)) {
        var F = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, S = {};
      }
    };
  }(l, h)), wn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && lo(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function lr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ur = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function bn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || Te(e)) return ur(me(lr(Nt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? me(r) : ur(me(lr(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = Ie), !t) throw Z(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, bn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, P(P({}, n), o));
  }, r;
}
var go = function(e) {
  return rn(Ls, e);
}, U = go;
Xt.forEach(function(e) {
  U[e] = go(e);
});
function le(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Qt(bn.apply(void 0, ye([e], t, !1))), o = oo(r);
  return new nn(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var st = "__sc-".concat(ve, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[st] || (window[st] = 0), window[st] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[st] += 1);
const Q = {
  CIRCLE_SOLID: "circle-solid",
  /**
   * @deprecated This placeholder will be removed in future release.
   */
  ELLIPSE_SOLID: "ellipse-solid",
  /**
   * @deprecated This placeholder will be removed in future release.
   */
  MAN_SOLID: "man-solid",
  /**
   * @deprecated This placeholder will be removed in future release.
   */
  WOMAN_SOLID: "woman-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, yo = 14, Ps = 0.0276;
var ee = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ee || {});
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
}, fr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Ds = {
  [L.CANDIDATE_SELECTION]: "Stay still…",
  [L.FACE_TOO_CLOSE]: "Move back",
  [L.FACE_TOO_FAR]: "Move closer",
  [L.FACE_CENTERING]: "Center your face",
  [L.FACE_NOT_PRESENT]: "Position your face into the circle",
  [L.SHARPNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [L.DEVICE_PITCHED]: "Hold your phone at eye level",
  [L.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [L.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [L.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Ms = {
  ...Ds,
  [ne.SMILE]: "Smile :)",
  [ne.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [ne.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Hs = {
  [ne.SMILE]: "Smile more!",
  [ne.KEEP_NEUTRAL_EXPRESSION]: "Don't smile"
}, Us = "rgba(19, 19, 19, 0.5)", Fs = 34;
function dr(e, t) {
  return Math.max(t, t + (e - 400) * Ps + 2);
}
const Bs = (e, t = yo) => e ? e.width < e.height ? dr(e.width, t) : dr(e.height, t) : t, Ws = (e) => e > ee.Default ? Be[ee.Default] : e > ee.L ? Be[ee.L] : e > ee.M ? Be[ee.M] : Be[ee.S], js = (e) => e ? Ws(e.width) : Be[ee.Default];
function zs() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Gs({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
const ze = xr(void 0);
ze.displayName = "UiCustomizationContext";
function Se() {
  const e = Ke(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function Vs({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = As(), o = re(
    () => ({ ...t, videoElementSize: n, fontSize: Bs(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(ze.Provider, { value: o, children: e });
}
const vo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ys = U.div`
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
`, qs = U.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Zs = U.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, on = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Se();
  return /* @__PURE__ */ f(Ys, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(qs, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Zs, { $fontSize: o, children: r })
  ] }) });
}, Co = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(on, { Icon: vo, position: "relative", text: e });
class Xs extends G {
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
    return this.state.hasError ? /* @__PURE__ */ f(Co, { Icon: vo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ks = U.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Qs = ({ children: e, uiProps: t, videoElementSize: n }) => (X(() => {
  zs();
}, []), /* @__PURE__ */ f(Os, { target: t.styleTarget, children: /* @__PURE__ */ f(Rs, { theme: t.theme, children: /* @__PURE__ */ f(Ks, { children: /* @__PURE__ */ f(Xs, { videoElementSize: n, children: /* @__PURE__ */ f(Vs, { props: t, videoElementSize: n, children: e }) }) }) }) })), Js = 0.75, ea = "dot-auto-capture-video", qe = (e, t) => {
  const n = St(t);
  X(() => {
    n.current = t;
  }, [t]), X(
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
function ta(e) {
  const [t, n] = M(), r = ge(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return qe(e, r), Ae(() => {
    if (!t) {
      const o = document.getElementById(ea);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function na(e, t) {
  return e ? `${e}, ${t}` : t;
}
const ra = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, oa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: yo
}, He = {
  colors: ra,
  font: oa
}, ia = (e) => {
  var t;
  return e ? {
    ...He,
    ...e,
    colors: {
      ...He.colors,
      ...e.colors
    },
    font: {
      ...He.font,
      ...e.font,
      family: na((t = e.font) == null ? void 0 : t.family, He.font.family)
    }
  } : He;
}, sa = (e, t) => Math.min(e, t), aa = ({ height: e, width: t }, n) => {
  const r = sa(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ca = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = aa(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, la = (e) => ca(e, Js), So = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, Ct = class Ct {
  constructor() {
    tt(this, "lastDetails", {});
    tt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Ct()), this._instance;
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
    this.isDetailChanged(t, n) && So(t, n);
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
};
tt(Ct, "_instance");
let sn = Ct;
sn.getInstance();
const _r = (e, t) => {
  So(e, {
    instruction: t
  });
};
async function ua() {
  return navigator.mediaDevices.enumerateDevices();
}
async function fa() {
  return (await ua()).filter((t) => t.kind === "videoinput");
}
const da = () => {
  const [e, t] = M(!1);
  return X(() => {
    (async () => {
      (await fa()).length > 1 && t(!0);
    })();
  }, []), e;
}, _a = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ha = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), wo = U.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, pa = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(_a, { size: t }) }), ma = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(ha, { size: t }) }), ga = U.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ya = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Se(), o = da();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = js(r);
  return /* @__PURE__ */ f(ga, { $padding: i, children: [
    o && /* @__PURE__ */ f(ma, { disabled: t, onClick: () => {
      _r(e, xn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      pa,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          _r(e, xn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, va = "2.5s", Ca = "0.3s", Sa = "linear", wa = le`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
le`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
le`
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
le`
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
const Ea = U.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && bn`
      animation: ${wa} ${Ca}
        ${Sa} both;
      animation-delay: ${va};

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
`, ba = U.div`
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
`, $a = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Se();
  return /* @__PURE__ */ f(Ea, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    ba,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: e.length > Fs,
      children: e
    }
  ) });
}, ka = U.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Oa = ({ svgSize: e }) => /* @__PURE__ */ f(ka, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Na = U.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Eo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Se();
  return /* @__PURE__ */ f(Na, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ia({ cameraHeight: e, cameraWidth: t, state: n }) {
  var o;
  const { appStateInstructions: r } = Se();
  return !n || n === jt.ERROR || !((o = r == null ? void 0 : r[n]) != null && o.visible) ? null : n === jt.DONE ? /* @__PURE__ */ f(j, { children: [
    e && t && /* @__PURE__ */ f(Eo, { height: e, width: t }),
    /* @__PURE__ */ f(on, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ f(on, { Icon: Oa, isCameraReady: !0, text: r[n].text });
}
function Ta({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const xa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function Aa() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "path",
    {
      d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "4"
    }
  ) });
}
function Ra() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "path",
    {
      clipRule: "evenodd",
      d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
      fill: "currentColor",
      fillRule: "evenodd"
    }
  ) });
}
function La() {
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
function Pa() {
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
function Da() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Ma() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Ha() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "path",
    {
      clipRule: "evenodd",
      d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
      fill: "currentColor",
      fillRule: "evenodd"
    }
  ) });
}
const Ua = U.div`
  z-index: 1;
  position: absolute;
  top: ${(e) => e.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$placeholderRectangle.shiftY - e.$placeholderRectangle.height) * 100}%;
  left: ${(e) => e.$placeholderRectangle.shiftX * 100}%;
  right: ${(e) => (1 - e.$placeholderRectangle.shiftX - e.$placeholderRectangle.width) * 100}%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  svg {
    width: 100%;
    height: 100%;
  }
`, Fa = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ f(
  Ua,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Ba = {
  [Q.CIRCLE_SOLID]: /* @__PURE__ */ f(xa, {}),
  [Q.ELLIPSE_SOLID]: /* @__PURE__ */ f(Aa, {}),
  [Q.MAN_SOLID]: /* @__PURE__ */ f(Ra, {}),
  [Q.WOMAN_SOLID]: /* @__PURE__ */ f(Ha, {}),
  [Q.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(Pa, {}),
  [Q.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(Da, {}),
  [Q.SQUARE_DASH]: /* @__PURE__ */ f(La, {}),
  [Q.SQUARE_SOLID]: /* @__PURE__ */ f(Ma, {})
};
function Wa({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = Se(), s = i.toLowerCase().includes("square"), c = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ f(j, { children: [
    n && /* @__PURE__ */ f(Eo, { height: e, width: t, children: /* @__PURE__ */ f(
      Ta,
      {
        height: `${r.height * 100}%`,
        isRounded: c,
        isSquare: s,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Fa, { placeholderRectangle: r, ...o, children: Ba[i] })
  ] });
}
function ja({ eventName: e }) {
  const [t, n] = M([]), r = ge(
    (o) => {
      var s;
      const i = (s = o.detail) == null ? void 0 : s.instructionCode;
      i && n((c) => [...c, i]);
    },
    [n]
  );
  return qe(e, r), {
    escalatedInstructionCodes: t
  };
}
const za = () => {
  const [e, t] = M(), [n, r] = M(!1), o = ge(
    (a) => {
      var d, l;
      t((d = a == null ? void 0 : a.detail) == null ? void 0 : d.cameraResolution);
      const u = (l = a == null ? void 0 : a.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  qe(Ve.CAMERA_PROPS_CHANGED, o);
  const [i, s] = M({
    code: L.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = ge(
    (a) => {
      var u, d;
      s({
        code: (u = a == null ? void 0 : a.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((d = a == null ? void 0 : a.detail) == null ? void 0 : d.isEscalated) ?? !1
      });
    },
    [s]
  );
  return qe(Ve.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Ga = () => {
  const [e, t] = M(pt.NEUTRAL), [n, r] = M(be.LOADING), [o, i] = M(), s = ge(
    (c) => {
      const { error: a, phase: u, state: d } = c.detail || {};
      u && t(u), d && r(d), a && i(a);
    },
    [t, r, i]
  );
  return qe(hn.STATUS_CHANGED, s), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, hr = ".3s", Va = ".2s", Ya = ".8s", pr = ".4s", mr = ".4s", qa = ".5s", Za = "1.5s", Xa = 2e3, gr = le`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, Ka = le`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, yr = le`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, bo = le`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Qa = (e, t) => {
  const [n, r] = M(!1);
  return X(() => {
    t === pt.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, Xa);
    return () => clearTimeout(o);
  }, [t]), t === pt.SMILE && e === ne.CANDIDATE_SELECTION ? ne.SMILE_CANDIDATE_SELECTION : n ? ne.SMILE : e;
}, Ja = U.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${bo} ${qa} ${Za} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${yr} ${pr} ${mr} forwards;
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
    animation: ${yr} ${pr} ${mr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${gr} ${hr} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${gr} ${hr} forwards,
      ${Ka} ${Va} ${Ya} forwards;
  }
`, ec = ({ animate: e, initialPosition: t, show: n }) => {
  const [r, o] = M(!0);
  return X(() => {
    e && o(!0);
  }, [e]), !r || !n ? null : /* @__PURE__ */ f(
    Ja,
    {
      $initialPosition: t,
      onAnimationEnd: (i) => i.animationName === bo.getName() && o(!1),
      children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
        /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
        /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
        /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
        /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
      ] })
    }
  );
}, tc = () => {
  const { cameraResolution: e, instruction: t } = za(), { smileError: n, smilePhase: r, smileState: o } = Ga(), i = Qa(t.code, r), { escalatedInstructionCodes: s } = ja({
    eventName: hn.INSTRUCTION_ESCALATED
  }), { escalatedInstructions: c, instructions: a } = Se(), u = t.code === ne.CANDIDATE_SELECTION, d = Gs({
    escalatedInstructions: c,
    instructions: a,
    currentInstruction: {
      ...t,
      code: i
    }
  });
  if (o === be.ERROR)
    return /* @__PURE__ */ f(Co, { text: n == null ? void 0 : n.message });
  if ((o === be.RUNNING || o === be.WAITING) && e) {
    const l = la(e);
    return /* @__PURE__ */ f(j, { children: [
      /* @__PURE__ */ f(
        Wa,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isBackdrop: !0,
          isInCandidateSelection: u,
          placeholderRectangle: l
        }
      ),
      /* @__PURE__ */ f(
        ec,
        {
          animate: s.includes("mouth_score_too_low"),
          initialPosition: l,
          show: r === pt.SMILE
        }
      ),
      d && /* @__PURE__ */ f(
        $a,
        {
          cssBottom: (l.height + l.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: u,
          isPortrait: e.width < e.height,
          children: d
        }
      ),
      /* @__PURE__ */ f(ya, { customControlEvent: Ve.CONTROL, isSwitchCameraDisabled: u })
    ] });
  }
  return /* @__PURE__ */ f(
    Ia,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: o
    }
  );
}, nc = (e) => {
  var c, a;
  const t = {
    ...Ms,
    ...e == null ? void 0 : e.instructions
  }, n = {
    ...Hs,
    ...e == null ? void 0 : e.escalatedInstructions
  };
  t.mouth_score_too_low = t.smile, n.mouth_score_too_low = n.smile, t.mouth_score_too_high = t.keep_neutral_expression, n.mouth_score_too_high = n.keep_neutral_expression;
  const r = {
    [be.LOADING]: {
      ...fr.loading,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.loading
    },
    [be.DONE]: { ...fr.done, ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done }
  }, o = (e == null ? void 0 : e.backdropColor) ?? Us, i = (e == null ? void 0 : e.showCameraButtons) ?? !1, s = ia(e == null ? void 0 : e.theme);
  return {
    placeholder: Q.CIRCLE_SOLID,
    backdropColor: o,
    instructions: t,
    appStateInstructions: r,
    showCameraButtons: i,
    theme: s,
    escalatedInstructions: n
  };
}, rc = ({ props: e }) => {
  const t = ta(Ve.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Qs, { uiProps: nc(e), videoElementSize: t, children: /* @__PURE__ */ f(tc, {}) });
};
Bo(rc, "x-dot-smile-liveness-ui", ["props"]);
