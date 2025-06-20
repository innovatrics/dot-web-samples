var bo = Object.defineProperty;
var Vo = (e, t, r) => t in e ? bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var tt = (e, t, r) => Vo(e, typeof t != "symbol" ? t + "" : t, r);
var qe, C, pn, de, br, _n, mn, gn, ir, Zt, Bt, Ln, Ge = {}, yn = [], Eo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function X(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ar(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function R(e, t, r) {
  var n, o, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return We(e, a, n, o, null);
}
function We(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++pn, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function ko() {
  return { current: null };
}
function H(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function Ve(e, t) {
  if (t == null) return e.__ ? Ve(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ve(e) : null;
}
function vn(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return vn(e);
  }
}
function Ut(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !pt.__r++ || br != C.debounceRendering) && ((br = C.debounceRendering) || _n)(pt);
}
function pt() {
  for (var e, t, r, n, o, i, a, c = 1; de.length; ) de.length > c && de.sort(mn), e = de.shift(), c = de.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, i = [], a = [], t.__P && ((r = X({}, n)).__v = n.__v + 1, C.vnode && C.vnode(r), sr(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? Ve(n), !!(32 & n.__u), a), r.__v = n.__v, r.__.__k[r.__i] = r, Sn(i, r, a), r.__e != o && vn(r)));
  pt.__r = 0;
}
function Cn(e, t, r, n, o, i, a, c, u, d, h) {
  var l, p, f, _, L, y, m = n && n.__k || yn, g = t.length;
  for (u = xo(r, t, m, u, g), l = 0; l < g; l++) (f = r.__k[l]) != null && (p = f.__i == -1 ? Ge : m[f.__i] || Ge, f.__i = l, y = sr(e, f, p, o, i, a, c, u, d, h), _ = f.__e, f.ref && p.ref != f.ref && (p.ref && cr(p.ref, null, f), h.push(f.ref, f.__c || _, f)), L == null && _ != null && (L = _), 4 & f.__u || p.__k === f.__k ? u = wn(f, u, e) : typeof f.type == "function" && y !== void 0 ? u = y : _ && (u = _.nextSibling), f.__u &= -7);
  return r.__e = L, u;
}
function xo(e, t, r, n, o) {
  var i, a, c, u, d, h = r.length, l = h, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (u = i + p, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? We(null, a, null, null, null) : Ye(a) ? We(H, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? We(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, c = null, (d = a.__i = Oo(a, r, u, l)) != -1 && (l--, (c = r[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (o > h ? p-- : o < h && p++), typeof a.type != "function" && (a.__u |= 4)) : d != u && (d == u - 1 ? p-- : d == u + 1 ? p++ : (d > u ? p-- : p++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < h; i++) (c = r[i]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = Ve(c)), Vn(c, c));
  return n;
}
function wn(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = wn(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = Ve(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(r) {
    te(r, t);
  }) : t.push(e)), t;
}
function Oo(e, t, r, n) {
  var o, i, a = e.key, c = e.type, u = t[r];
  if (u === null && e.key == null || u && a == u.key && c == u.type && (2 & u.__u) == 0) return r;
  if (n > (u != null && (2 & u.__u) == 0 ? 1 : 0)) for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((u = t[o]) && (2 & u.__u) == 0 && a == u.key && c == u.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((u = t[i]) && (2 & u.__u) == 0 && a == u.key && c == u.type) return i;
      i++;
    }
  }
  return -1;
}
function Vr(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Eo.test(t) ? r : r + "px";
}
function rt(e, t, r, n, o) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || Vr(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || Vr(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(gn, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.u = n.u : (r.u = ir, e.addEventListener(t, i ? Bt : Zt, i)) : e.removeEventListener(t, i ? Bt : Zt, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Er(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = ir++;
      else if (t.t < r.u) return;
      return r(C.event ? C.event(t) : t);
    }
  };
}
function sr(e, t, r, n, o, i, a, c, u, d) {
  var h, l, p, f, _, L, y, m, g, E, b, x, S, v, A, B, De, U = t.type;
  if (t.constructor != null) return null;
  128 & r.__u && (u = !!(32 & r.__u), i = [c = t.__e = r.__e]), (h = C.__b) && h(t);
  e: if (typeof U == "function") try {
    if (m = t.props, g = "prototype" in U && U.prototype.render, E = (h = U.contextType) && n[h.__c], b = h ? E ? E.props.value : h.__ : n, r.__c ? y = (l = t.__c = r.__c).__ = l.__E : (g ? t.__c = l = new U(m, b) : (t.__c = l = new G(m, b), l.constructor = U, l.render = No), E && E.sub(l), l.props = m, l.state || (l.state = {}), l.context = b, l.__n = n, p = l.__d = !0, l.__h = [], l._sb = []), g && l.__s == null && (l.__s = l.state), g && U.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, U.getDerivedStateFromProps(m, l.__s))), f = l.props, _ = l.state, l.__v = t, p) g && U.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), g && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (g && U.getDerivedStateFromProps == null && m !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, b), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, b) === !1 || t.__v == r.__v) {
        for (t.__v != r.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(le) {
          le && (le.__ = t);
        }), x = 0; x < l._sb.length; x++) l.__h.push(l._sb[x]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, b), g && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(f, _, L);
      });
    }
    if (l.context = b, l.props = m, l.__P = e, l.__e = !1, S = C.__r, v = 0, g) {
      for (l.state = l.__s, l.__d = !1, S && S(t), h = l.render(l.props, l.state, l.context), A = 0; A < l._sb.length; A++) l.__h.push(l._sb[A]);
      l._sb = [];
    } else do
      l.__d = !1, S && S(t), h = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++v < 25);
    l.state = l.__s, l.getChildContext != null && (n = X(X({}, n), l.getChildContext())), g && !p && l.getSnapshotBeforeUpdate != null && (L = l.getSnapshotBeforeUpdate(f, _)), B = h, h != null && h.type === H && h.key == null && (B = bn(h.props.children)), c = Cn(e, Ye(B) ? B : [B], t, r, n, o, i, a, c, u, d), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), y && (l.__E = l.__ = null);
  } catch (le) {
    if (t.__v = null, u || i != null) if (le.then) {
      for (t.__u |= u ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (De = i.length; De--; ) ar(i[De]);
    else t.__e = r.__e, t.__k = r.__k;
    C.__e(le, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = $o(r.__e, t, r, n, o, i, a, u, d);
  return (h = C.diffed) && h(t), 128 & t.__u ? void 0 : c;
}
function Sn(e, t, r) {
  for (var n = 0; n < r.length; n++) cr(r[n], r[++n], r[++n]);
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
function bn(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(bn) : X({}, e);
}
function $o(e, t, r, n, o, i, a, c, u) {
  var d, h, l, p, f, _, L, y = r.props, m = t.props, g = t.type;
  if (g == "svg" ? o = "http://www.w3.org/2000/svg" : g == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((f = i[d]) && "setAttribute" in f == !!g && (g ? f.localName == g : f.nodeType == 3)) {
      e = f, i[d] = null;
      break;
    }
  }
  if (e == null) {
    if (g == null) return document.createTextNode(m);
    e = document.createElementNS(o, g, m.is && m), c && (C.__m && C.__m(t, i), c = !1), i = null;
  }
  if (g == null) y === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && qe.call(e.childNodes), y = r.props || Ge, !c && i != null) for (y = {}, d = 0; d < e.attributes.length; d++) y[(f = e.attributes[d]).name] = f.value;
    for (d in y) if (f = y[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") l = f;
      else if (!(d in m)) {
        if (d == "value" && "defaultValue" in m || d == "checked" && "defaultChecked" in m) continue;
        rt(e, d, null, f, o);
      }
    }
    for (d in m) f = m[d], d == "children" ? p = f : d == "dangerouslySetInnerHTML" ? h = f : d == "value" ? _ = f : d == "checked" ? L = f : c && typeof f != "function" || y[d] === f || rt(e, d, f, y[d], o);
    if (h) c || l && (h.__html == l.__html || h.__html == e.innerHTML) || (e.innerHTML = h.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), Cn(t.type == "template" ? e.content : e, Ye(p) ? p : [p], t, r, n, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : r.__k && Ve(r, 0), c, u), i != null) for (d = i.length; d--; ) ar(i[d]);
    c || (d = "value", g == "progress" && _ == null ? e.removeAttribute("value") : _ != null && (_ !== e[d] || g == "progress" && !_ || g == "option" && _ != y[d]) && rt(e, d, _, y[d], o), d = "checked", L != null && L != e[d] && rt(e, d, L, y[d], o));
  }
  return e;
}
function cr(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    C.__e(o, r);
  }
}
function Vn(e, t, r) {
  var n, o;
  if (C.unmount && C.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || cr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      C.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Vn(n[o], t, r || typeof e.type != "function");
  r || ar(e.__e), e.__c = e.__ = e.__e = void 0;
}
function No(e, t, r) {
  return this.constructor(e, r);
}
function se(e, t, r) {
  var n, o, i, a;
  t == document && (t = document.documentElement), C.__ && C.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], a = [], sr(t, e = (!n && r || t).__k = R(H, null, [e]), o || Ge, Ge, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, a), Sn(i, e, a);
}
function lr(e, t) {
  se(e, t, lr);
}
function ur(e, t, r) {
  var n, o, i, a, c = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? qe.call(arguments, 2) : r), We(e.type, c, n || e.key, o || e.ref, null);
}
function En(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(a) {
        a.__e = !0, Ut(a);
      });
    }, this.sub = function(i) {
      n.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), a && a.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + Ln++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
qe = yn.slice, C = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, pn = 0, G.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, r), this.props)), e && X(r, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, G.prototype.render = H, de = [], _n = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, mn = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, gn = /(PointerCapture)$|Capture$/i, ir = 0, Zt = Er(!1), Bt = Er(!0), Ln = 0;
function dr() {
  return (dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Io = ["context", "children"];
function Mo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, r = function(n, o) {
    if (n == null) return {};
    var i, a, c = {}, u = Object.keys(n);
    for (a = 0; a < u.length; a++) o.indexOf(i = u[a]) >= 0 || (c[i] = n[i]);
    return c;
  }(e, Io);
  return ur(t, r);
}
function Do() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = R(Mo, dr({}, this._props, { context: e.detail.context }), function t(r, n) {
    if (r.nodeType === 3) return r.data;
    if (r.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, c = r.attributes, u = r.childNodes;
    for (a = c.length; a--; ) c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[kn(c[a].name)] = c[a].value);
    for (a = u.length; a--; ) {
      var d = t(u[a], null), h = u[a].slot;
      h ? i[h] = R(kr, { name: h }, d) : o[a] = d;
    }
    var l = n ? R(kr, null, o) : o;
    return R(n || r.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? lr : se)(this._vdom, this._root);
}
function kn(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Ro(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[kn(e)] = r, this._vdom = ur(this._vdom, n), se(this._vdom, this._root);
  }
}
function To() {
  se(this._vdom = null, this._root);
}
function kr(e, t) {
  var r = this;
  return R("slot", dr({}, e, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function Ao(e, t, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Do, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = To, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = r, r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Po = 0;
function s(e, t, r, n, o, i) {
  t || (t = {});
  var a, c, u = t;
  if ("ref" in u) for (c in u = {}, t) c == "ref" ? a = t[c] : u[c] = t[c];
  var d = { type: e, props: u, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Po, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) u[c] === void 0 && (u[c] = a[c]);
  return C.vnode && C.vnode(d), d;
}
const xr = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(pe || {}), xn = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", e.CONTROL = "palm-capture:control", e.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", e.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", e.STATE_CHANGED = "palm-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", e))(xn || {});
const T = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, Y = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var ce, $, It, Or, Ee = 0, On = [], N = C, $r = N.__b, Nr = N.__r, Ir = N.diffed, Mr = N.__c, Dr = N.unmount, Rr = N.__;
function Ne(e, t) {
  N.__h && N.__h($, e, Ee || t), Ee = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function F(e) {
  return Ee = 1, fr(In, e);
}
function fr(e, t, r) {
  var n = Ne(ce++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : In(void 0, t), function(c) {
    var u = n.__N ? n.__N[0] : n.__[0], d = n.t(u, c);
    u !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = $, !$.__f)) {
    var o = function(c, u, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (h.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, c, u, d);
      var l = n.__c.props !== c;
      return h.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (l = !0);
        }
      }), i && i.call(this, c, u, d) || l;
    };
    $.__f = !0;
    var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
    $.componentWillUpdate = function(c, u, d) {
      if (this.__e) {
        var h = i;
        i = void 0, o(c, u, d), i = h;
      }
      a && a.call(this, c, u, d);
    }, $.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function ne(e, t) {
  var r = Ne(ce++, 3);
  !N.__s && hr(r.__H, t) && (r.__ = e, r.u = t, $.__H.__h.push(r));
}
function Ie(e, t) {
  var r = Ne(ce++, 4);
  !N.__s && hr(r.__H, t) && (r.__ = e, r.u = t, $.__h.push(r));
}
function Xe(e) {
  return Ee = 5, re(function() {
    return { current: e };
  }, []);
}
function $n(e, t, r) {
  Ee = 6, Ie(function() {
    if (typeof e == "function") {
      var n = e(t());
      return function() {
        e(null), n && typeof n == "function" && n();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, r == null ? r : r.concat(e));
}
function re(e, t) {
  var r = Ne(ce++, 7);
  return hr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function _e(e, t) {
  return Ee = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = $.context[e.__c], r = Ne(ce++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub($)), t.props.value) : e.__;
}
function _t(e, t) {
  N.useDebugValue && N.useDebugValue(t ? t(e) : e);
}
function Nn() {
  var e = Ne(ce++, 11);
  if (!e.__) {
    for (var t = $.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Ho() {
  for (var e; e = On.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(st), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], N.__e(t, e.__v);
  }
}
N.__b = function(e) {
  $ = null, $r && $r(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Rr && Rr(e, t);
}, N.__r = function(e) {
  Nr && Nr(e), ce = 0;
  var t = ($ = e.__c).__H;
  t && (It === $ ? (t.__h = [], $.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(st), t.__h.forEach(Wt), t.__h = [], ce = 0)), It = $;
}, N.diffed = function(e) {
  Ir && Ir(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (On.push(t) !== 1 && Or === N.requestAnimationFrame || ((Or = N.requestAnimationFrame) || Zo)(Ho)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), It = $ = null;
}, N.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(st), r.__h = r.__h.filter(function(n) {
        return !n.__ || Wt(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], N.__e(n, r.__v);
    }
  }), Mr && Mr(e, t);
}, N.unmount = function(e) {
  Dr && Dr(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      st(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && N.__e(t, r.__v));
};
var Tr = typeof requestAnimationFrame == "function";
function Zo(e) {
  var t, r = function() {
    clearTimeout(n), Tr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Tr && (t = requestAnimationFrame(r));
}
function st(e) {
  var t = $, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), $ = t;
}
function Wt(e) {
  var t = $;
  e.__c = e.__(), $ = t;
}
function hr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function In(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, D.apply(this, arguments);
};
function Le(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Bo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Uo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wo = /* @__PURE__ */ Bo(
  function(e) {
    return Uo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Mn(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Ft(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function Dn(e, t) {
  var r = t(), n = F({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return Ie(function() {
    o.__ = r, o.u = t, Mt(o) && i({ t: o });
  }, [e, r, t]), ne(function() {
    return Mt(o) && i({ t: o }), e(function() {
      Mt(o) && i({ t: o });
    });
  }, [e]), r;
}
function Mt(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function Rn(e) {
  e();
}
function Tn(e) {
  return e;
}
function An() {
  return [!1, Rn];
}
var Pn = Ie;
function zt(e, t) {
  this.props = e, this.context = t;
}
function Fo(e, t) {
  function r(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ft(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, R(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(zt.prototype = new G()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return Ft(this.props, e) || Ft(this.state, t);
};
var Ar = C.__b;
C.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ar && Ar(e);
};
var zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Go(e) {
  function t(r) {
    var n = Mn({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = zo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Pr = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, jo = { map: Pr, forEach: Pr, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, qo = C.__e;
C.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  qo(e, t, r, n);
};
var Hr = C.unmount;
function Hn(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = Mn({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Hn(n, t, r);
  })), e;
}
function Zn(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Zn(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function ct() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Bn(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Yo(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      r = a.default || a;
    }, function(a) {
      n = a;
    }), n) throw n;
    if (!r) throw t;
    return R(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function He() {
  this.i = null, this.l = null;
}
C.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Hr && Hr(e);
}, (ct.prototype = new G()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = Bn(n.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var u = n.state.__a;
        n.__v.__k[0] = Zn(u, u.__c.__P, u.__c.__O);
      }
      var d;
      for (n.setState({ __a: n.__b = null }); d = n.o.pop(); ) d.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, ct.prototype.componentWillUnmount = function() {
  this.o = [];
}, ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Hn(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && R(H, null, e.fallback);
  return o && (o.__u &= -33), [R(H, null, t.__a ? null : e.children), o];
};
var Zr = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function Xo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ko(e) {
  var t = this, r = e.h;
  if (t.componentWillUnmount = function() {
    se(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), !t.v) {
    for (var n = t.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, appendChild: function(o) {
      this.childNodes.push(o), t.h.appendChild(o);
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  se(R(Xo, { context: t.context }, e.__v), t.v);
}
function Jo(e, t) {
  var r = R(Ko, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(He.prototype = new G()).__a = function(e) {
  var t = this, r = Bn(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), Zr(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    Zr(e, r, t);
  });
};
var Un = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ei = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ti = /[A-Z0-9]/g, ri = typeof document < "u", ni = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function oi(e, t, r) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function ii(e, t, r) {
  return lr(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
G.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(G.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Br = C.event;
function ai() {
}
function si() {
  return this.cancelBubble;
}
function ci() {
  return this.defaultPrevented;
}
C.event = function(e) {
  return Br && (e = Br(e)), e.persist = ai, e.isPropagationStopped = si, e.isDefaultPrevented = ci, e.nativeEvent = e;
};
var pr, li = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ur = C.vnode;
C.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var a in r) {
      var c = r[a];
      if (!(a === "value" && "defaultValue" in r && c == null || ri && a === "children" && n === "noscript" || a === "class" || a === "className")) {
        var u = a.toLowerCase();
        a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : u === "translate" && c === "no" ? c = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || n !== "input" && n !== "textarea" || ni(r.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : ei.test(a) && (a = u) : u = a = "oninput" : i && Qo.test(a) ? a = a.replace(ti, "-$&").toLowerCase() : c === null && (c = void 0), u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = c;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(r.children).forEach(function(d) {
      d.props.selected = o.value.indexOf(d.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = te(r.children).forEach(function(d) {
      d.props.selected = o.multiple ? o.defaultValue.indexOf(d.props.value) != -1 : o.defaultValue == d.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", li)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = Un, Ur && Ur(e);
};
var Wr = C.__r;
C.__r = function(e) {
  Wr && Wr(e), pr = e.__c;
};
var Fr = C.diffed;
C.diffed = function(e) {
  Fr && Fr(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), pr = null;
};
var ui = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return pr.__n[e.__c].props.value;
}, useCallback: _e, useContext: Ke, useDebugValue: _t, useDeferredValue: Tn, useEffect: ne, useId: Nn, useImperativeHandle: $n, useInsertionEffect: Pn, useLayoutEffect: Ie, useMemo: re, useReducer: fr, useRef: Xe, useState: F, useSyncExternalStore: Dn, useTransition: An } } };
function di(e) {
  return R.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === Un;
}
function fi(e) {
  return vt(e) && e.type === H;
}
function hi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function pi(e) {
  return vt(e) ? ur.apply(null, arguments) : e;
}
function _i(e) {
  return !!e.__k && (se(null, e), !0);
}
function mi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var gi = function(e, t) {
  return e(t);
}, Li = function(e, t) {
  return e(t);
}, yi = H, vi = vt, oe = { useState: F, useId: Nn, useReducer: fr, useEffect: ne, useLayoutEffect: Ie, useInsertionEffect: Pn, useTransition: An, useDeferredValue: Tn, useSyncExternalStore: Dn, startTransition: Rn, useRef: Xe, useImperativeHandle: $n, useMemo: re, useCallback: _e, useContext: Ke, useDebugValue: _t, version: "18.3.1", Children: jo, render: oi, hydrate: ii, unmountComponentAtNode: _i, createPortal: Jo, createElement: R, createContext: En, createFactory: di, cloneElement: pi, createRef: ko, Fragment: H, isValidElement: vt, isElement: vi, isFragment: fi, isMemo: hi, findDOMNode: mi, Component: G, PureComponent: zt, memo: Fo, forwardRef: Go, flushSync: Li, unstable_batchedUpdates: gi, StrictMode: yi, Suspense: ct, SuspenseList: He, lazy: Yo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ui };
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt, zr;
function wi() {
  return zr || (zr = 1, Dt = function(t, r, n, o) {
    var i = n ? n.call(o, t, r) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === r)
      return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r)
      return !1;
    var a = Object.keys(t), c = Object.keys(r);
    if (a.length !== c.length)
      return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(r), d = 0; d < a.length; d++) {
      var h = a[d];
      if (!u(h))
        return !1;
      var l = t[h], p = r[h];
      if (i = n ? n.call(o, l, p, h) : void 0, i === !1 || i === void 0 && l !== p)
        return !1;
    }
    return !0;
  }), Dt;
}
var Si = wi();
const bi = /* @__PURE__ */ Ci(Si);
var O = "-ms-", Fe = "-moz-", k = "-webkit-", Wn = "comm", Ct = "rule", _r = "decl", Vi = "@import", Fn = "@keyframes", Ei = "@layer", zn = Math.abs, mr = String.fromCharCode, Gt = Object.assign;
function ki(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function Gn(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function w(e, t, r) {
  return e.replace(t, r);
}
function lt(e, t, r) {
  return e.indexOf(t, r);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, r) {
  return e.slice(t, r);
}
function q(e) {
  return e.length;
}
function jn(e) {
  return e.length;
}
function Ze(e, t) {
  return t.push(e), e;
}
function xi(e, t) {
  return e.map(t).join("");
}
function Gr(e, t) {
  return e.filter(function(r) {
    return !Q(r, t);
  });
}
var wt = 1, xe = 1, qn = 0, z = 0, I = 0, Me = "";
function St(e, t, r, n, o, i, a, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: wt, column: xe, length: a, return: "", siblings: c };
}
function ae(e, t) {
  return Gt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  Ze(e, e.siblings);
}
function Oi() {
  return I;
}
function $i() {
  return I = z > 0 ? M(Me, --z) : 0, xe--, I === 10 && (xe = 1, wt--), I;
}
function j() {
  return I = z < qn ? M(Me, z++) : 0, xe++, I === 10 && (xe = 1, wt++), I;
}
function me() {
  return M(Me, z);
}
function ut() {
  return z;
}
function bt(e, t) {
  return ke(Me, e, t);
}
function jt(e) {
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
function Ni(e) {
  return wt = xe = 1, qn = q(Me = e), z = 0, [];
}
function Ii(e) {
  return Me = "", e;
}
function Rt(e) {
  return Gn(bt(z - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mi(e) {
  for (; (I = me()) && I < 33; )
    j();
  return jt(e) > 2 || jt(I) > 3 ? "" : " ";
}
function Di(e, t) {
  for (; --t && j() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return bt(e, ut() + (t < 6 && me() == 32 && j() == 32));
}
function qt(e) {
  for (; j(); )
    switch (I) {
      // ] ) " '
      case e:
        return z;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && qt(I);
        break;
      // (
      case 40:
        e === 41 && qt(e);
        break;
      // \
      case 92:
        j();
        break;
    }
  return z;
}
function Ri(e, t) {
  for (; j() && e + I !== 57; )
    if (e + I === 84 && me() === 47)
      break;
  return "/*" + bt(t, z - 1) + "*" + mr(e === 47 ? e : j());
}
function Ti(e) {
  for (; !jt(me()); )
    j();
  return bt(e, z);
}
function Ai(e) {
  return Ii(dt("", null, null, null, [""], e = Ni(e), 0, [0], e));
}
function dt(e, t, r, n, o, i, a, c, u) {
  for (var d = 0, h = 0, l = a, p = 0, f = 0, _ = 0, L = 1, y = 1, m = 1, g = 0, E = "", b = o, x = i, S = n, v = E; y; )
    switch (_ = g, g = j()) {
      // (
      case 40:
        if (_ != 108 && M(v, l - 1) == 58) {
          lt(v += w(Rt(g), "&", "&\f"), "&\f", zn(d ? c[d - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        v += Rt(g);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        v += Mi(_);
        break;
      // \
      case 92:
        v += Di(ut() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            Ze(Pi(Ri(j(), ut()), t, r, u), u);
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * L:
        c[d++] = q(v) * m;
      // } ; \0
      case 125 * L:
      case 59:
      case 0:
        switch (g) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            m == -1 && (v = w(v, /\f/g, "")), f > 0 && q(v) - l && Ze(f > 32 ? qr(v + ";", n, r, l - 1, u) : qr(w(v, " ", "") + ";", n, r, l - 2, u), u);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (Ze(S = jr(v, t, r, d, h, o, c, E, b = [], x = [], l, i), i), g === 123)
              if (h === 0)
                dt(v, t, S, S, b, i, l, c, x);
              else
                switch (p === 99 && M(v, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dt(e, S, S, n && Ze(jr(e, S, S, 0, 0, o, c, E, o, b = [], l, x), x), o, x, l, c, n ? b : x);
                    break;
                  default:
                    dt(v, S, S, S, [""], x, 0, c, x);
                }
        }
        d = h = f = 0, L = m = 1, E = v = "", l = a;
        break;
      // :
      case 58:
        l = 1 + q(v), f = _;
      default:
        if (L < 1) {
          if (g == 123)
            --L;
          else if (g == 125 && L++ == 0 && $i() == 125)
            continue;
        }
        switch (v += mr(g), g * L) {
          // &
          case 38:
            m = h > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            c[d++] = (q(v) - 1) * m, m = 1;
            break;
          // @
          case 64:
            me() === 45 && (v += Rt(j())), p = me(), h = l = q(E = v += Ti(ut())), g++;
            break;
          // -
          case 45:
            _ === 45 && q(v) == 2 && (L = 0);
        }
    }
  return i;
}
function jr(e, t, r, n, o, i, a, c, u, d, h, l) {
  for (var p = o - 1, f = o === 0 ? i : [""], _ = jn(f), L = 0, y = 0, m = 0; L < n; ++L)
    for (var g = 0, E = ke(e, p + 1, p = zn(y = a[L])), b = e; g < _; ++g)
      (b = Gn(y > 0 ? f[g] + " " + E : w(E, /&\f/g, f[g]))) && (u[m++] = b);
  return St(e, t, r, o === 0 ? Ct : c, u, d, h, l);
}
function Pi(e, t, r, n) {
  return St(e, t, r, Wn, mr(Oi()), ke(e, 2, -2), 0, n);
}
function qr(e, t, r, n, o) {
  return St(e, t, r, _r, ke(e, 0, n), ke(e, n + 1, -1), n, o);
}
function Yn(e, t, r) {
  switch (ki(e, t)) {
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
      return Fe + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Fe + e + O + e + e;
    // writing-mode
    case 5936:
      switch (M(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + O + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + O + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + O + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return k + e + O + e + e;
    // order
    case 6165:
      return k + e + O + "flex-" + e + e;
    // align-items
    case 5187:
      return k + e + w(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + O + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + O + "flex-item-" + w(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : O + "grid-row-" + w(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + O + "flex-line-pack" + w(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + O + w(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + O + w(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + w(e, "-grow", "") + k + e + O + w(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + w(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return w(w(w(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return w(w(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!Q(e, /flex-|baseline/)) return O + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return O + w(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, Q(n.props, /grid-\w+-end/);
      }) ? ~lt(e + (r = r[t].value), "span", 0) ? e : O + w(e, "-start", "") + e + O + "grid-row-span:" + (~lt(r, "span", 0) ? Q(r, /\d+/) : +Q(r, /\d+/) - +Q(e, /\d+/)) + ";" : O + w(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return Q(n.props, /grid-\w+-start/);
      }) ? e : O + w(w(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
        switch (M(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (M(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return w(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Fe + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~lt(e, "stretch", 0) ? Yn(w(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return w(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, c, u, d) {
        return O + o + ":" + i + d + (a ? O + o + "-span:" + (c ? u : +u - +i) + d : "") + e;
      });
    // position: sticky
    case 4949:
      if (M(e, t + 6) === 121)
        return w(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return w(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + O + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return w(e, ":", ":" + O) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return w(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function mt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Hi(e, t, r, n) {
  switch (e.type) {
    case Ei:
      if (e.children.length) break;
    case Vi:
    case _r:
      return e.return = e.return || e.value;
    case Wn:
      return "";
    case Fn:
      return e.return = e.value + "{" + mt(e.children, n) + "}";
    case Ct:
      if (!q(e.value = e.props.join(","))) return "";
  }
  return q(r = mt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Zi(e) {
  var t = jn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Bi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ui(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _r:
        e.return = Yn(e.value, e.length, r);
        return;
      case Fn:
        return mt([ae(e, { value: w(e.value, "@", "@" + k) })], n);
      case Ct:
        if (e.length)
          return xi(r = e.props, function(o) {
            switch (Q(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Se(ae(e, { props: [w(o, /:(read-\w+)/, ":" + Fe + "$1")] })), Se(ae(e, { props: [o] })), Gt(e, { props: Gr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Se(ae(e, { props: [w(o, /:(plac\w+)/, ":" + k + "input-$1")] })), Se(ae(e, { props: [w(o, /:(plac\w+)/, ":" + Fe + "$1")] })), Se(ae(e, { props: [w(o, /:(plac\w+)/, O + "input-$1")] })), Se(ae(e, { props: [o] })), Gt(e, { props: Gr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Wi = {
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
}, V = {}, ye = typeof process < "u" && V !== void 0 && (V.REACT_APP_SC_ATTR || V.SC_ATTR) || "data-styled", Xn = "active", Kn = "data-styled-version", Vt = "6.1.18", gr = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", Fi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && V !== void 0 && V.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && V.REACT_APP_SC_DISABLE_SPEEDY !== "" ? V.REACT_APP_SC_DISABLE_SPEEDY !== "false" && V.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && V !== void 0 && V.SC_DISABLE_SPEEDY !== void 0 && V.SC_DISABLE_SPEEDY !== "" ? V.SC_DISABLE_SPEEDY !== "false" && V.SC_DISABLE_SPEEDY : V.NODE_ENV !== "production"), Yr = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), zi = function(e, t) {
  if (V.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
        Yr.test(a) ? (i = !1, nt.delete(n)) : o.apply(void 0, Le([a], c, !1));
      }, Xe(), i && !nt.has(n) && (console.warn(n), nt.add(n));
    } catch (a) {
      Yr.test(a.message) && nt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Et = Object.freeze([]), Oe = Object.freeze({});
function Gi(e, t, r) {
  return r === void 0 && (r = Oe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Yt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ji = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qi = /(^-|-$)/g;
function Xr(e) {
  return e.replace(ji, "-").replace(qi, "");
}
var Yi = /(a)(d)/gi, ot = 52, Kr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > ot; t = t / ot | 0) r = Kr(t % ot) + r;
  return (Kr(t % ot) + r).replace(Yi, "$1-$2");
}
var Tt, Jn = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Qn = function(e) {
  return fe(Jn, e);
};
function eo(e) {
  return Xt(Qn(e) >>> 0);
}
function to(e) {
  return V.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function At(e) {
  return typeof e == "string" && (V.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ro = typeof Symbol == "function" && Symbol.for, no = ro ? Symbol.for("react.memo") : 60115, Xi = ro ? Symbol.for("react.forward_ref") : 60112, Ki = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ji = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qi = ((Tt = {})[Xi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Tt[no] = oo, Tt);
function Jr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === no ? oo : "$$typeof" in e ? Qi[e.$$typeof] : Ki;
  var t;
}
var ea = Object.defineProperty, ta = Object.getOwnPropertyNames, Qr = Object.getOwnPropertySymbols, ra = Object.getOwnPropertyDescriptor, na = Object.getPrototypeOf, en = Object.prototype;
function io(e, t, r) {
  if (typeof t != "string") {
    if (en) {
      var n = na(t);
      n && n !== en && io(e, n, r);
    }
    var o = ta(t);
    Qr && (o = o.concat(Qr(t)));
    for (var i = Jr(e), a = Jr(t), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in Ji || r && r[u] || a && u in a || i && u in i)) {
        var d = ra(t, u);
        try {
          ea(e, u, d);
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
function Lr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Kt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function $e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Jt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !$e(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Jt(e[n], t[n]);
  else if ($e(t)) for (var n in t) e[n] = Jt(e[n], t[n]);
  return e;
}
function yr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var oa = V.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ia() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function K(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return V.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ia.apply(void 0, Le([oa[e]], t, !1)).trim());
}
var aa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw K(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), u = (a = 0, r.length); a < u; a++) this.tag.insertRule(c, r[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, a = o; a < i; a++) r += "".concat(this.tag.getRule(a)).concat(gr);
    return r;
  }, e;
}(), sa = 1 << 30, ft = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), ht = 1, it = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; Lt.has(ht); ) ht++;
  var t = ht++;
  if (V.NODE_ENV !== "production" && ((0 | t) < 0 || t > sa)) throw K(16, "".concat(t));
  return ft.set(e, t), Lt.set(t, e), t;
}, ca = function(e, t) {
  ht = t + 1, ft.set(e, t), Lt.set(t, e);
}, la = "style[".concat(ye, "][").concat(Kn, '="').concat(Vt, '"]'), ua = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), da = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(t, n);
}, fa = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(gr), o = [], i = 0, a = n.length; i < a; i++) {
    var c = n[i].trim();
    if (c) {
      var u = c.match(ua);
      if (u) {
        var d = 0 | parseInt(u[1], 10), h = u[2];
        d !== 0 && (ca(h, d), da(e, h, u[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, tn = function(e) {
  for (var t = document.querySelectorAll(la), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(ye) !== Xn && (fa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ha() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ao = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(ye, "]")));
    return u[u.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ye, Xn), n.setAttribute(Kn, Vt);
  var a = ha();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, pa = function() {
  function e(t) {
    this.element = ao(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r) return a;
      }
      throw K(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), _a = function() {
  function e(t) {
    this.element = ao(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ma = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), rn = gt, ga = { isServer: !gt, useCSSOMInjection: !Fi }, so = function() {
  function e(t, r, n) {
    t === void 0 && (t = Oe), r === void 0 && (r = {});
    var o = this;
    this.options = D(D({}, ga), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && gt && rn && (rn = !1, tn(this)), yr(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, u = "", d = function(l) {
          var p = function(m) {
            return Lt.get(m);
          }(l);
          if (p === void 0) return "continue";
          var f = i.names.get(p), _ = a.getGroup(l);
          if (f === void 0 || !f.size || _.length === 0) return "continue";
          var L = "".concat(ye, ".g").concat(l, '[id="').concat(p, '"]'), y = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (y += "".concat(m, ","));
          }), u += "".concat(_).concat(L, '{content:"').concat(y, '"}').concat(gr);
        }, h = 0; h < c; h++) d(h);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return it(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && tn(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(D(D({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new ma(o) : n ? new pa(o) : new _a(o);
    }(this.options), new aa(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (it(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(it(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(it(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), La = /&/g, ya = /^\s*\/\/.*$/gm;
function co(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = co(r.children, t)), r;
  });
}
function lo(e) {
  var t, r, n, o = e === void 0 ? Oe : e, i = o.options, a = i === void 0 ? Oe : i, c = o.plugins, u = c === void 0 ? Et : c, d = function(p, f, _) {
    return _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(t) : p;
  }, h = u.slice();
  h.push(function(p) {
    p.type === Ct && p.value.includes("&") && (p.props[0] = p.props[0].replace(La, r).replace(n, d));
  }), a.prefix && h.push(Ui), h.push(Hi);
  var l = function(p, f, _, L) {
    f === void 0 && (f = ""), _ === void 0 && (_ = ""), L === void 0 && (L = "&"), t = L, r = f, n = new RegExp("\\".concat(r, "\\b"), "g");
    var y = p.replace(ya, ""), m = Ai(_ || f ? "".concat(_, " ").concat(f, " { ").concat(y, " }") : y);
    a.namespace && (m = co(m, a.namespace));
    var g = [];
    return mt(m, Zi(h.concat(Bi(function(E) {
      return g.push(E);
    })))), g;
  };
  return l.hash = u.length ? u.reduce(function(p, f) {
    return f.name || K(15), fe(p, f.name);
  }, Jn).toString() : "", l;
}
var va = new so(), Qt = lo(), vr = oe.createContext({ shouldForwardProp: void 0, styleSheet: va, stylis: Qt });
vr.Consumer;
var Ca = oe.createContext(void 0);
function er() {
  return Ke(vr);
}
function wa(e) {
  var t = F(e.stylisPlugins), r = t[0], n = t[1], o = er().styleSheet, i = re(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = re(function() {
    return lo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  ne(function() {
    bi(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return oe.createElement(vr.Provider, { value: c }, oe.createElement(Ca.Provider, { value: a }, e.children));
}
var tr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, yr(this, function() {
      throw K(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), Sa = function(e) {
  return e >= "A" && e <= "Z";
};
function nn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Sa(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
}, fo = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !uo(i) && (Array.isArray(i) && i.isCss || ve(i) ? n.push("".concat(nn(o), ":"), i, ";") : $e(i) ? n.push.apply(n, Le(Le(["".concat(o, " {")], fo(i), !1), ["}"], !1)) : n.push("".concat(nn(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Wi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ge(e, t, r, n) {
  if (uo(e)) return [];
  if (Lr(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return V.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tr || $e(o) || o === null || console.error("".concat(to(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, r, n);
  }
  var i;
  return e instanceof tr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : $e(e) ? fo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Et, e.map(function(a) {
    return ge(a, t, r, n);
  })) : [e.toString()];
}
function ba(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ve(r) && !Lr(r)) return !1;
  }
  return !0;
}
var Va = Qn(Vt), Ea = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = V.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ba(t), this.componentId = r, this.baseHash = fe(Va, r), this.baseStyle = n, so.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = he(o, this.staticRulesId);
    else {
      var i = Kt(ge(this.rules, t, r, n)), a = Xt(fe(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var c = n(i, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, c);
      }
      o = he(o, a), this.staticRulesId = a;
    }
    else {
      for (var u = fe(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var l = this.rules[h];
        if (typeof l == "string") d += l, V.NODE_ENV !== "production" && (u = fe(u, l));
        else if (l) {
          var p = Kt(ge(l, t, r, n));
          u = fe(u, p + h), d += p;
        }
      }
      if (d) {
        var f = Xt(u >>> 0);
        r.hasNameForId(this.componentId, f) || r.insertRules(this.componentId, f, n(d, ".".concat(f), void 0, this.componentId)), o = he(o, f);
      }
    }
    return o;
  }, e;
}(), je = oe.createContext(void 0);
je.Consumer;
function ho() {
  var e = Ke(je);
  if (!e) throw K(18);
  return e;
}
function ka(e) {
  var t = oe.useContext(je), r = re(function() {
    return function(n, o) {
      if (!n) throw K(14);
      if (ve(n)) {
        var i = n(o);
        if (V.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw K(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw K(8);
      return o ? D(D({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(je.Provider, { value: r }, e.children) : null;
}
var Pt = {}, on = /* @__PURE__ */ new Set();
function xa(e, t, r) {
  var n = Lr(e), o = e, i = !At(e), a = t.attrs, c = a === void 0 ? Et : a, u = t.componentId, d = u === void 0 ? function(b, x) {
    var S = typeof b != "string" ? "sc" : Xr(b);
    Pt[S] = (Pt[S] || 0) + 1;
    var v = "".concat(S, "-").concat(eo(Vt + S + Pt[S]));
    return x ? "".concat(x, "-").concat(v) : v;
  }(t.displayName, t.parentComponentId) : u, h = t.displayName, l = h === void 0 ? function(b) {
    return At(b) ? "styled.".concat(b) : "Styled(".concat(to(b), ")");
  }(e) : h, p = t.displayName && t.componentId ? "".concat(Xr(t.displayName), "-").concat(t.componentId) : t.componentId || d, f = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, _ = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var L = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      _ = function(b, x) {
        return L(b, x) && y(b, x);
      };
    } else _ = L;
  }
  var m = new Ea(r, p, n ? o.componentStyle : void 0);
  function g(b, x) {
    return function(S, v, A) {
      var B = S.attrs, De = S.componentStyle, U = S.defaultProps, le = S.foldedComponentIds, wr = S.styledComponentId, Co = S.target, wo = oe.useContext(je), So = er(), xt = S.shouldForwardProp || So.shouldForwardProp;
      V.NODE_ENV !== "production" && _t(wr);
      var Sr = Gi(v, wo, U) || Oe, J = function(Je, Ae, Qe) {
        for (var we, ue = D(D({}, Ae), { className: void 0, theme: Qe }), Nt = 0; Nt < Je.length; Nt += 1) {
          var et = ve(we = Je[Nt]) ? we(ue) : we;
          for (var ie in et) ue[ie] = ie === "className" ? he(ue[ie], et[ie]) : ie === "style" ? D(D({}, ue[ie]), et[ie]) : et[ie];
        }
        return Ae.className && (ue.className = he(ue.className, Ae.className)), ue;
      }(B, v, Sr), Re = J.as || Co, Te = {};
      for (var W in J) J[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && J.theme === Sr || (W === "forwardedAs" ? Te.as = J.forwardedAs : xt && !xt(W, Re) || (Te[W] = J[W], xt || V.NODE_ENV !== "development" || Wo(W) || on.has(W) || !Yt.has(Re) || (on.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ot = function(Je, Ae) {
        var Qe = er(), we = Je.generateAndInjectStyles(Ae, Qe.styleSheet, Qe.stylis);
        return V.NODE_ENV !== "production" && _t(we), we;
      }(De, J);
      V.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(Ot);
      var $t = he(le, wr);
      return Ot && ($t += " " + Ot), J.className && ($t += " " + J.className), Te[At(Re) && !Yt.has(Re) ? "class" : "className"] = $t, A && (Te.ref = A), R(Re, Te);
    }(E, b, x);
  }
  g.displayName = l;
  var E = oe.forwardRef(g);
  return E.attrs = f, E.componentStyle = m, E.displayName = l, E.shouldForwardProp = _, E.foldedComponentIds = n ? he(o.foldedComponentIds, o.styledComponentId) : "", E.styledComponentId = p, E.target = n ? o.target : e, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = n ? function(x) {
      for (var S = [], v = 1; v < arguments.length; v++) S[v - 1] = arguments[v];
      for (var A = 0, B = S; A < B.length; A++) Jt(x, B[A], !0);
      return x;
    }({}, o.defaultProps, b) : b;
  } }), V.NODE_ENV !== "production" && (zi(l, p), E.warnTooManyClasses = /* @__PURE__ */ function(b, x) {
    var S = {}, v = !1;
    return function(A) {
      if (!v && (S[A] = !0, Object.keys(S).length >= 200)) {
        var B = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, S = {};
      }
    };
  }(l, p)), yr(E, function() {
    return ".".concat(E.styledComponentId);
  }), i && io(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), E;
}
function an(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var sn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ve(e) || $e(e)) return sn(ge(an(Et, Le([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ge(n) : sn(ge(an(n, t)));
}
function rr(e, t, r) {
  if (r === void 0 && (r = Oe), !t) throw K(1, t);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, r, Cr.apply(void 0, Le([o], i, !1)));
  };
  return n.attrs = function(o) {
    return rr(e, t, D(D({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return rr(e, t, D(D({}, r), o));
  }, n;
}
var po = function(e) {
  return rr(xa, e);
}, Z = po;
Yt.forEach(function(e) {
  Z[e] = po(e);
});
function kt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  V.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = Kt(Cr.apply(void 0, Le([e], t, !1))), o = eo(n);
  return new tr(o, n);
}
V.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var at = "__sc-".concat(ye, "__");
V.NODE_ENV !== "production" && V.NODE_ENV !== "test" && typeof window < "u" && (window[at] || (window[at] = 0), window[at] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[at] += 1);
const P = {
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
}, cn = 0.24, Oa = 24, $a = 2, _o = 14, Na = 0.0276;
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
}, Ia = {
  [T.CANDIDATE_SELECTION]: "Hold still…",
  [T.DOCUMENT_CENTERING]: "Center document",
  [T.DOCUMENT_NOT_PRESENT]: "Scan document",
  [T.DOCUMENT_TOO_FAR]: "Move closer",
  [T.SHARPNESS_TOO_LOW]: "More light needed",
  [T.BRIGHTNESS_TOO_LOW]: "More light needed",
  [T.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [T.HOTSPOTS_PRESENT]: "Avoid reflections"
}, Ma = {
  [T.BRIGHTNESS_TOO_LOW]: "Move document to brighter area",
  [T.SHARPNESS_TOO_LOW]: "Move document to brighter area",
  [T.BRIGHTNESS_TOO_HIGH]: "Move document to darker area",
  [T.DOCUMENT_TOO_FAR]: "Move document closer"
}, ln = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Da = P.ID_CORNERS_ROUNDED, Ra = "rgba(19, 19, 19, 0.5)", Ta = 34;
function un(e, t) {
  return Math.max(t, t + (e - 400) * Na + 2);
}
const Aa = (e, t = _o) => e ? e.width < e.height ? un(e.width, t) : un(e.height, t) : t, Pa = (e) => e > ee.Default ? Be[ee.Default] : e > ee.L ? Be[ee.L] : e > ee.M ? Be[ee.M] : Be[ee.S], Ha = (e) => e ? Pa(e.width) : Be[ee.Default];
function Za() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const r = document.createElement("link");
    r.href = e, r.rel = "stylesheet", document.head.appendChild(r);
  }
}
function Ba({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: r
}) {
  const { code: n, isEscalated: o } = e;
  if (n)
    return o && t && n in t ? t[n] : r[n];
}
const ze = En(void 0);
ze.displayName = "UiCustomizationContext";
function Ce() {
  const e = Ke(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function Ua({ children: e, props: t, videoElementSize: r }) {
  const { font: n } = ho(), o = re(
    () => ({ ...t, videoElementSize: r, fontSize: Aa(r, n.minimumSize) }),
    [t, n.minimumSize, r]
  );
  return /* @__PURE__ */ s(ze.Provider, { value: o, children: e });
}
const mo = ({ svgSize: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ s(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Wa = Z.div`
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
`, Fa = Z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, za = Z.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nr = ({ Icon: e, isCameraReady: t, position: r = "absolute", text: n }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ s(Wa, { $isCameraReady: t, $position: r, children: /* @__PURE__ */ s(Fa, { children: [
    e ? /* @__PURE__ */ s(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ s(za, { $fontSize: o, children: n })
  ] }) });
}, go = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ s(nr, { Icon: mo, position: "relative", text: e });
class Ga extends G {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.error(t, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ s(go, { Icon: mo, isCameraReady: !1 }) : this.props.children;
  }
}
const ja = Z.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, qa = ({ children: e, uiProps: t, videoElementSize: r }) => (ne(() => {
  Za();
}, []), /* @__PURE__ */ s(wa, { target: t.styleTarget, children: /* @__PURE__ */ s(ka, { theme: t.theme, children: /* @__PURE__ */ s(ja, { children: /* @__PURE__ */ s(Ga, { videoElementSize: r, children: /* @__PURE__ */ s(Ua, { props: t, videoElementSize: r, children: e }) }) }) }) })), Ya = 1.5, Xa = 0.85, Ht = 1e3, Ka = "dot-auto-capture-video", be = (e, t) => {
  const r = Xe(t);
  ne(() => {
    r.current = t;
  }, [t]), ne(
    () => {
      const n = (o) => r.current(o);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
};
function Ja(e) {
  const [t, r] = F(), n = _e(
    (o) => {
      var i;
      r((i = o.detail) == null ? void 0 : i.size);
    },
    [r]
  );
  return be(e, n), Ie(() => {
    if (!t) {
      const o = document.getElementById(Ka);
      o && r(o.getBoundingClientRect());
    }
  }, [t, r]), t;
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
  minimumSize: _o
}, Pe = {
  colors: es,
  font: ts
}, rs = (e) => {
  var t;
  return e ? {
    ...Pe,
    ...e,
    colors: {
      ...Pe.colors,
      ...e.colors
    },
    font: {
      ...Pe.font,
      ...e.font,
      family: Qa((t = e.font) == null ? void 0 : t.family, Pe.font.family)
    }
  } : Pe;
};
function ns(e, t) {
  return e < Ht && t >= Ht ? Ht : e;
}
function os(e, t) {
  return e < t ? e : t;
}
function is({ height: e, width: t }) {
  let r;
  return t > e ? r = ns(e, t) : r = t, {
    width: r,
    height: os(e, r)
  };
}
const as = (e) => {
  const r = is(e).width * Xa, n = (e.width - r) / 2, o = r / Ya, i = (e.height - o) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: o
  };
}, ss = (e) => {
  const { height: t, shiftX: r, shiftY: n, width: o } = as(e);
  return {
    shiftX: r / e.width,
    shiftY: n / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, Lo = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, yt = class yt {
  constructor() {
    tt(this, "lastDetails", {});
    tt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new yt()), this._instance;
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
  isDetailChanged(t, r) {
    return JSON.stringify(r) !== JSON.stringify(this.lastDetails[t]) ? (this.lastDetails[t] = r, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(t, r) {
    this.isDetailChanged(t, r) && Lo(t, r);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(t, r, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(t, r), this.delayedTime = o);
  }
};
tt(yt, "_instance");
let or = yt;
or.getInstance();
const dn = (e, t) => {
  Lo(e, {
    instruction: t
  });
};
async function cs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ls() {
  return (await cs()).filter((t) => t.kind === "videoinput");
}
const us = () => {
  const [e, t] = F(!1);
  return ne(() => {
    (async () => {
      (await ls()).length > 1 && t(!0);
    })();
  }, []), e;
}, ds = ({ size: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), fs = ({ size: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ s("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), yo = Z.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, hs = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: e, ...r, children: /* @__PURE__ */ s(ds, { size: t }) }), ps = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: e, ...r, children: /* @__PURE__ */ s(fs, { size: t }) }), _s = Z.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ms = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: r, videoElementSize: n } = Ce(), o = us();
  if (!r)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = Ha(n);
  return /* @__PURE__ */ s(_s, { $padding: i, children: [
    o && /* @__PURE__ */ s(ps, { disabled: t, onClick: () => {
      dn(e, xr.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ s(
      hs,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          dn(e, xr.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, gs = "2.5s", Ls = "0.3s", ys = "linear", vs = kt`
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
const Cs = Z.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cr`
      animation: ${vs} ${Ls}
        ${ys} both;
      animation-delay: ${gs};

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
`, ws = Z.div`
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
  cssTop: r,
  isAnimating: n,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ s(Cs, { $cssBottom: t, $cssTop: r, $isAnimating: n, $isPortrait: i, children: /* @__PURE__ */ s(
    ws,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ta,
      children: e
    }
  ) });
}, bs = Z.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Vs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Ue = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), fn = (e, t, r) => {
  const n = (t.x - e.x) * r, o = (t.y - e.y) * r;
  return {
    x: e.x + n,
    y: e.y + o
  };
}, hn = (e, t, r, n) => {
  const o = Ue(e, t);
  return r * n / o;
}, Es = (e) => {
  const { bottomLeft: t, bottomRight: r, topLeft: n, topRight: o } = e, i = Ue(n, o), a = Ue(o, r), c = Ue(t, r), u = Ue(n, t);
  return Math.min(i, a, c, u);
};
function ks({ cameraResolution: e, isImageMirror: t }) {
  const r = Xe(null), n = ho(), [o, i] = F(), a = _e(
    (c) => {
      var u;
      i((u = c == null ? void 0 : c.detail) == null ? void 0 : u.detectedObject);
    },
    [i]
  );
  return be(pe.DETECTED_DOCUMENT_CHANGED, a), be(xn.DETECTED_PALM_CHANGED, a), ne(() => {
    if (!r.current)
      return;
    const c = (d, h, l, p) => {
      var g;
      const f = hn(
        h,
        d,
        p,
        cn
      ), _ = hn(
        h,
        l,
        p,
        cn
      ), L = fn(h, d, f), y = fn(h, l, _), m = (g = r == null ? void 0 : r.current) == null ? void 0 : g.getContext("2d");
      m && (m.beginPath(), m.lineWidth = $a, m.strokeStyle = n.colors.placeholderColor, m.moveTo(L.x, L.y), m.arcTo(h.x, h.y, y.x, y.y, Oa), m.lineTo(y.x, y.y), m.stroke());
    }, u = (d) => {
      if (!d)
        return;
      const { bottomLeft: h, bottomRight: l, topLeft: p, topRight: f } = d, _ = Es(d);
      c(h, p, f, _), c(p, f, l, _), c(f, l, h, _), c(l, h, p, _);
    };
    r.current.width = e.width, r.current.height = e.height, Vs(r.current), u(o);
  }, [e, o, n.colors.placeholderColor]), /* @__PURE__ */ s(bs, { ref: r, $isImageMirror: t });
}
const xs = Z.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Os = ({ svgSize: e }) => /* @__PURE__ */ s(xs, { children: /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), $s = Z.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, vo = ({ children: e, height: t, width: r }) => {
  const { backdropColor: n } = Ce();
  return /* @__PURE__ */ s($s, { children: /* @__PURE__ */ s("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("mask", { id: "mask", children: [
      /* @__PURE__ */ s("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ s("rect", { fill: n, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ns({ cameraHeight: e, cameraWidth: t, isBackdrop: r, state: n }) {
  const { appStateInstructions: o } = Ce(), i = n === Y.ERROR || n === Y.RUNNING;
  return !n || i || !(o != null && o[n].visible) ? null : n === Y.WAITING ? /* @__PURE__ */ s(H, { children: [
    r && e && t && /* @__PURE__ */ s(vo, { height: e, width: t }),
    /* @__PURE__ */ s(nr, { isCameraReady: !0, text: o[Y.WAITING].text })
  ] }) : /* @__PURE__ */ s(nr, { Icon: Os, isCameraReady: !0, text: o[Y.LOADING].text });
}
function Is({ isPassport: e, isRounded: t, ...r }) {
  if (t)
    return /* @__PURE__ */ s("rect", { fill: "#000", ...r, rx: "2%" });
  if (e) {
    const n = "4%", o = `calc(${r.height} / 2)`;
    return /* @__PURE__ */ s(H, { children: [
      /* @__PURE__ */ s("rect", { fill: "#000", height: o, rx: "1%", width: r.width, x: r.x, y: r.y }),
      /* @__PURE__ */ s(
        "rect",
        {
          fill: "#000",
          height: o,
          rx: "0",
          width: r.width,
          x: r.x,
          y: `calc(${r.y} + ${n})`
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
function Ms() {
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
const Ds = () => /* @__PURE__ */ s(
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
function Rs() {
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
function Ts() {
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
function As() {
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
function Ps() {
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
function Hs() {
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
function Zs() {
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
function Bs() {
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
function Us() {
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
function Ws() {
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
function Fs() {
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
const zs = Z.div`
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
`, Gs = ({
  children: e,
  className: t,
  isInCandidateSelection: r,
  onAnimationEnd: n,
  placeholderRectangle: o
}) => /* @__PURE__ */ s(
  zs,
  {
    $isInCandidateSelection: r,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: n,
    children: e
  }
), js = {
  [P.ID_CORNERS]: /* @__PURE__ */ s(Ms, {}),
  [P.ID_DASH]: /* @__PURE__ */ s(Rs, {}),
  [P.ID_DOT]: /* @__PURE__ */ s(As, {}),
  [P.ID_SOLID]: /* @__PURE__ */ s(Zs, {}),
  [P.ID_PHOTO_ROUNDED]: /* @__PURE__ */ s(Hs, {}),
  [P.ID_CORNERS_ROUNDED]: /* @__PURE__ */ s(Ds, {}),
  [P.ID_DASH_ROUNDED]: /* @__PURE__ */ s(Ts, {}),
  [P.ID_DOT_ROUNDED]: /* @__PURE__ */ s(Ps, {}),
  [P.ID_SOLID_ROUNDED]: /* @__PURE__ */ s(Bs, {}),
  [P.ID_SOLID_ROUNDED_BACK]: /* @__PURE__ */ s(Us, {}),
  [P.PASSPORT_SOLID_BACK]: /* @__PURE__ */ s(Ws, {}),
  [P.PASSPORT_SOLID_BACK_BLANK]: /* @__PURE__ */ s(Fs, {})
};
function qs({ backdropHeight: e, backdropWidth: t, placeholderRectangle: r, ...n }) {
  const { placeholder: o } = Ce(), i = o.toLowerCase().includes("passport"), a = o.toLowerCase().includes("rounded");
  return /* @__PURE__ */ s(H, { children: [
    /* @__PURE__ */ s(vo, { height: e, width: t, children: /* @__PURE__ */ s(
      Is,
      {
        height: `${r.height * 100}%`,
        isPassport: i,
        isRounded: a,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ s(Gs, { placeholderRectangle: r, ...n, children: js[o] })
  ] });
}
const Ys = () => {
  const [e, t] = F(), [r, n] = F(!1), o = _e(
    (f) => {
      var L, y;
      t((L = f == null ? void 0 : f.detail) == null ? void 0 : L.cameraResolution);
      const _ = (y = f == null ? void 0 : f.detail) == null ? void 0 : y.isMirroring;
      _ !== void 0 && n(_);
    },
    [t]
  );
  be(pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = F({
    code: T.DOCUMENT_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = _e(
    (f) => {
      var _, L;
      a({
        code: (_ = f == null ? void 0 : f.detail) == null ? void 0 : _.instructionCode,
        isEscalated: ((L = f == null ? void 0 : f.detail) == null ? void 0 : L.isEscalated) ?? !1
      });
    },
    [a]
  );
  be(pe.INSTRUCTION_CHANGED, c);
  const [u, d] = F(Y.LOADING), [h, l] = F(), p = _e(
    (f) => {
      var L, y;
      d((L = f.detail) == null ? void 0 : L.appState);
      const _ = (y = f == null ? void 0 : f.detail) == null ? void 0 : y.error;
      _ && l(_);
    },
    [d, l]
  );
  return be(pe.STATE_CHANGED, p), {
    cameraResolution: e,
    appState: u,
    error: h,
    instruction: i,
    isMirroring: r
  };
};
function Xs() {
  const { appState: e, cameraResolution: t, error: r, instruction: n, isMirroring: o } = Ys(), i = n.code === T.CANDIDATE_SELECTION, { escalatedInstructions: a, instructions: c, showDetectionLayer: u } = Ce(), d = Ba({
    escalatedInstructions: a,
    instructions: c,
    currentInstruction: n
  });
  return e === Y.ERROR ? /* @__PURE__ */ s(go, { text: r == null ? void 0 : r.message }) : e === Y.RUNNING && t ? /* @__PURE__ */ s(H, { children: [
    u && /* @__PURE__ */ s(ks, { cameraResolution: t, isImageMirror: o }),
    /* @__PURE__ */ s(
      qs,
      {
        backdropHeight: t.height,
        backdropWidth: t.width,
        isInCandidateSelection: i,
        placeholderRectangle: ss(t)
      }
    ),
    d && /* @__PURE__ */ s(Ss, { cssTop: 50, isInCandidateSelection: i, children: d }),
    /* @__PURE__ */ s(
      ms,
      {
        customControlEvent: pe.CONTROL,
        isSwitchCameraDisabled: i
      }
    )
  ] }) : /* @__PURE__ */ s(
    Ns,
    {
      cameraHeight: t == null ? void 0 : t.height,
      cameraWidth: t == null ? void 0 : t.width,
      isBackdrop: !0,
      state: e
    }
  );
}
const Ks = (e) => {
  var d, h;
  const t = { ...Ia, ...e == null ? void 0 : e.instructions }, r = {
    ...Ma,
    ...e == null ? void 0 : e.escalatedInstructions
  }, n = {
    [Y.LOADING]: { ...ln.loading, ...(d = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : d.loading },
    [Y.WAITING]: { ...ln.waiting, ...(h = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : h.waiting }
  }, o = (e == null ? void 0 : e.placeholder) ?? Da, i = (e == null ? void 0 : e.backdropColor) ?? Ra, a = (e == null ? void 0 : e.showDetectionLayer) ?? !1, c = (e == null ? void 0 : e.showCameraButtons) ?? !1, u = rs(e == null ? void 0 : e.theme);
  return {
    instructions: t,
    appStateInstructions: n,
    placeholder: o,
    backdropColor: i,
    showDetectionLayer: a,
    showCameraButtons: c,
    theme: u,
    escalatedInstructions: r
  };
}, Js = ({ props: e }) => {
  const t = Ja(pe.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ s(qa, { uiProps: Ks(e), videoElementSize: t, children: /* @__PURE__ */ s(Xs, {}) });
};
Ao(Js, "x-dot-document-auto-capture-ui", ["props"]);
