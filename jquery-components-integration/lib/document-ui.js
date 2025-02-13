var yo = Object.defineProperty;
var vo = (t, e, r) => e in t ? yo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Qt = (t, e, r) => vo(t, typeof e != "symbol" ? e + "" : e, r);
var jt, S, dn, ut, Sr, fn, Ae, or, Pe, He, hn, zt = {}, pn = [], Co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ge = Array.isArray;
function tt(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function _n(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function T(t, e, r) {
  var n, o, i, s = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? jt.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Ut(t, s, n, o, null);
}
function Ut(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++dn, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function wo() {
  return { current: null };
}
function W(t) {
  return t.children;
}
function z(t, e) {
  this.props = t, this.context = e;
}
function gt(t, e) {
  if (e == null) return t.__ ? gt(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? gt(t) : null;
}
function mn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return mn(t);
  }
}
function Ze(t) {
  (!t.__d && (t.__d = !0) && ut.push(t) && !fe.__r++ || Sr !== S.debounceRendering) && ((Sr = S.debounceRendering) || fn)(fe);
}
function fe() {
  var t, e, r, n, o, i, s, c;
  for (ut.sort(Ae); t = ut.shift(); ) t.__d && (e = ut.length, n = void 0, i = (o = (r = t).__v).__e, s = [], c = [], r.__P && ((n = tt({}, o)).__v = o.__v + 1, S.vnode && S.vnode(n), ir(r.__P, n, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? gt(o), !!(32 & o.__u), c), n.__v = o.__v, n.__.__k[n.__i] = n, yn(s, n, c), n.__e != i && mn(n)), ut.length > e && ut.sort(Ae));
  fe.__r = 0;
}
function gn(t, e, r, n, o, i, s, c, u, d, h) {
  var l, p, f, _, L, y = n && n.__k || pn, m = e.length;
  for (r.__d = u, So(r, e, y), u = r.__d, l = 0; l < m; l++) (f = r.__k[l]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? zt : y[f.__i] || zt, f.__i = l, ir(t, f, p, o, i, s, c, u, d, h), _ = f.__e, f.ref && p.ref != f.ref && (p.ref && ar(p.ref, null, f), h.push(f.ref, f.__c || _, f)), L == null && _ != null && (L = _), 65536 & f.__u || p.__k === f.__k ? (u && typeof f.type == "string" && !t.contains(u) && (u = gt(p)), u = Ln(f, u, t)) : typeof f.type == "function" && f.__d !== void 0 ? u = f.__d : _ && (u = _.nextSibling), f.__d = void 0, f.__u &= -196609);
  r.__d = u, r.__e = L;
}
function So(t, e, r) {
  var n, o, i, s, c, u = e.length, d = r.length, h = d, l = 0;
  for (t.__k = [], n = 0; n < u; n++) s = n + l, (o = t.__k[n] = (o = e[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ut(null, o, null, null, null) : ge(o) ? Ut(W, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ut(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + 1, c = bo(o, r, s, h), o.__i = c, i = null, c !== -1 && (h--, (i = r[c]) && (i.__u |= 131072)), i == null || i.__v === null ? (c == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : c !== s && (c == s - 1 ? l = c - s : c == s + 1 ? l++ : c > s ? h > u - s ? l += c - s : l-- : c < s && l++, c !== n + l && (o.__u |= 65536))) : (i = r[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = gt(i)), Be(i, i, !1), r[s] = null, h--);
  if (h) for (n = 0; n < d; n++) (i = r[n]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = gt(i)), Be(i, i));
}
function Ln(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Ln(n[o], e, r));
    return e;
  }
  t.__e != e && (r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function et(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (ge(t) ? t.some(function(r) {
    et(r, e);
  }) : e.push(t)), e;
}
function bo(t, e, r, n) {
  var o = t.key, i = t.type, s = r - 1, c = r + 1, u = e[r];
  if (u === null || u && o == u.key && i === u.type && !(131072 & u.__u)) return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0)) for (; s >= 0 || c < e.length; ) {
    if (s >= 0) {
      if ((u = e[s]) && !(131072 & u.__u) && o == u.key && i === u.type) return s;
      s--;
    }
    if (c < e.length) {
      if ((u = e[c]) && !(131072 & u.__u) && o == u.key && i === u.type) return c;
      c++;
    }
  }
  return -1;
}
function br(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || Co.test(e) ? r : r + "px";
}
function te(t, e, r, n, o) {
  var i;
  t: if (e === "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || br(t.style, e, "");
    if (r) for (e in r) n && r[e] === n[e] || br(t.style, e, r[e]);
  }
  else if (e[0] === "o" && e[1] === "n") i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r.u = n.u : (r.u = or, t.addEventListener(e, i ? He : Pe, i)) : t.removeEventListener(e, i ? He : Pe, i);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break t;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function Er(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = or++;
      else if (e.t < r.u) return;
      return r(S.event ? S.event(e) : e);
    }
  };
}
function ir(t, e, r, n, o, i, s, c, u, d) {
  var h, l, p, f, _, L, y, m, g, V, b, O, w, v, H, j, Z = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (u = !!(32 & r.__u), i = [c = e.__e = r.__e]), (h = S.__b) && h(e);
  t: if (typeof Z == "function") try {
    if (m = e.props, g = "prototype" in Z && Z.prototype.render, V = (h = Z.contextType) && n[h.__c], b = h ? V ? V.props.value : h.__ : n, r.__c ? y = (l = e.__c = r.__c).__ = l.__E : (g ? e.__c = l = new Z(m, b) : (e.__c = l = new z(m, b), l.constructor = Z, l.render = Vo), V && V.sub(l), l.props = m, l.state || (l.state = {}), l.context = b, l.__n = n, p = l.__d = !0, l.__h = [], l._sb = []), g && l.__s == null && (l.__s = l.state), g && Z.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = tt({}, l.__s)), tt(l.__s, Z.getDerivedStateFromProps(m, l.__s))), f = l.props, _ = l.state, l.__v = e, p) g && Z.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), g && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (g && Z.getDerivedStateFromProps == null && m !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, b), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, b) === !1 || e.__v === r.__v)) {
        for (e.__v !== r.__v && (l.props = m, l.state = l.__s, l.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(wt) {
          wt && (wt.__ = e);
        }), O = 0; O < l._sb.length; O++) l.__h.push(l._sb[O]);
        l._sb = [], l.__h.length && s.push(l);
        break t;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, b), g && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(f, _, L);
      });
    }
    if (l.context = b, l.props = m, l.__P = t, l.__e = !1, w = S.__r, v = 0, g) {
      for (l.state = l.__s, l.__d = !1, w && w(e), h = l.render(l.props, l.state, l.context), H = 0; H < l._sb.length; H++) l.__h.push(l._sb[H]);
      l._sb = [];
    } else do
      l.__d = !1, w && w(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++v < 25);
    l.state = l.__s, l.getChildContext != null && (n = tt(tt({}, n), l.getChildContext())), g && !p && l.getSnapshotBeforeUpdate != null && (L = l.getSnapshotBeforeUpdate(f, _)), gn(t, ge(j = h != null && h.type === W && h.key == null ? h.props.children : h) ? j : [j], e, r, n, o, i, s, c, u, d), l.base = e.__e, e.__u &= -161, l.__h.length && s.push(l), y && (l.__E = l.__ = null);
  } catch (wt) {
    e.__v = null, u || i != null ? (e.__e = c, e.__u |= u ? 160 : 32, i[i.indexOf(c)] = null) : (e.__e = r.__e, e.__k = r.__k), S.__e(wt, e, r);
  }
  else i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = Eo(r.__e, e, r, n, o, i, s, u, d);
  (h = S.diffed) && h(e);
}
function yn(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++) ar(r[n], r[++n], r[++n]);
  S.__c && S.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      S.__e(i, o.__v);
    }
  });
}
function Eo(t, e, r, n, o, i, s, c, u) {
  var d, h, l, p, f, _, L, y = r.props, m = e.props, g = e.type;
  if (g === "svg" ? o = "http://www.w3.org/2000/svg" : g === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((f = i[d]) && "setAttribute" in f == !!g && (g ? f.localName === g : f.nodeType === 3)) {
      t = f, i[d] = null;
      break;
    }
  }
  if (t == null) {
    if (g === null) return document.createTextNode(m);
    t = document.createElementNS(o, g, m.is && m), i = null, c = !1;
  }
  if (g === null) y === m || c && t.data === m || (t.data = m);
  else {
    if (i = i && jt.call(t.childNodes), y = r.props || zt, !c && i != null) for (y = {}, d = 0; d < t.attributes.length; d++) y[(f = t.attributes[d]).name] = f.value;
    for (d in y) if (f = y[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") l = f;
      else if (d !== "key" && !(d in m)) {
        if (d == "value" && "defaultValue" in m || d == "checked" && "defaultChecked" in m) continue;
        te(t, d, null, f, o);
      }
    }
    for (d in m) f = m[d], d == "children" ? p = f : d == "dangerouslySetInnerHTML" ? h = f : d == "value" ? _ = f : d == "checked" ? L = f : d === "key" || c && typeof f != "function" || y[d] === f || te(t, d, f, y[d], o);
    if (h) c || l && (h.__html === l.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (l && (t.innerHTML = ""), gn(t, ge(p) ? p : [p], e, r, n, g === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : r.__k && gt(r, 0), c, u), i != null) for (d = i.length; d--; ) i[d] != null && _n(i[d]);
    c || (d = "value", _ !== void 0 && (_ !== t[d] || g === "progress" && !_ || g === "option" && _ !== y[d]) && te(t, d, _, y[d], o), d = "checked", L !== void 0 && L !== t[d] && te(t, d, L, y[d], o));
  }
  return t;
}
function ar(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    S.__e(n, r);
  }
}
function Be(t, e, r) {
  var n, o;
  if (S.unmount && S.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || ar(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      S.__e(i, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Be(n[o], e, r || typeof t.type != "function");
  r || t.__e == null || _n(t.__e), t.__c = t.__ = t.__e = t.__d = void 0;
}
function Vo(t, e, r) {
  return this.constructor(t, r);
}
function st(t, e, r) {
  var n, o, i, s;
  S.__ && S.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], s = [], ir(e, t = (!n && r || e).__k = T(W, null, [t]), o || zt, zt, e.namespaceURI, !n && r ? [r] : o ? null : e.firstChild ? jt.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, s), yn(i, t, s);
}
function sr(t, e) {
  st(t, e, sr);
}
function cr(t, e, r) {
  var n, o, i, s, c = tt({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && s !== void 0 ? s[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? jt.call(arguments, 2) : r), Ut(t.type, c, n || t.key, o || t.ref, null);
}
function vn(t, e) {
  var r = { __c: e = "__cC" + hn++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(c) {
        c.__e = !0, Ze(c);
      });
    }, this.sub = function(s) {
      o.push(s);
      var c = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o && o.splice(o.indexOf(s), 1), c && c.call(s);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
jt = pn.slice, S = { __e: function(t, e, r, n) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, dn = 0, z.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof t == "function" && (t = t(tt({}, r), this.props)), t && tt(r, t), t != null && this.__v && (e && this._sb.push(e), Ze(this));
}, z.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ze(this));
}, z.prototype.render = W, ut = [], fn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ae = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, fe.__r = 0, or = 0, Pe = Er(!1), He = Er(!0), hn = 0;
function lr() {
  return (lr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var ko = ["context", "children"];
function Oo(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, r = function(n, o) {
    if (n == null) return {};
    var i, s, c = {}, u = Object.keys(n);
    for (s = 0; s < u.length; s++) o.indexOf(i = u[s]) >= 0 || (c[i] = n[i]);
    return c;
  }(t, ko);
  return cr(e, r);
}
function xo() {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = T(Oo, lr({}, this._props, { context: t.detail.context }), function e(r, n) {
    if (r.nodeType === 3) return r.data;
    if (r.nodeType !== 1) return null;
    var o = [], i = {}, s = 0, c = r.attributes, u = r.childNodes;
    for (s = c.length; s--; ) c[s].name !== "slot" && (i[c[s].name] = c[s].value, i[Cn(c[s].name)] = c[s].value);
    for (s = u.length; s--; ) {
      var d = e(u[s], null), h = u[s].slot;
      h ? i[h] = T(Vr, { name: h }, d) : o[s] = d;
    }
    var l = n ? T(Vr, null, o) : o;
    return T(n || r.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? sr : st)(this._vdom, this._root);
}
function Cn(t) {
  return t.replace(/-(\w)/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  });
}
function No(t, e, r) {
  if (this._vdom) {
    var n = {};
    n[t] = r = r ?? void 0, n[Cn(t)] = r, this._vdom = cr(this._vdom, n), st(this._vdom, this._root);
  }
}
function Io() {
  st(this._vdom = null, this._root);
}
function Vr(t, e) {
  var r = this;
  return T("slot", lr({}, t, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(o) {
      o.stopPropagation(), o.detail.context = e;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function $o(t, e, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = xo, o.prototype.attributeChangedCallback = No, o.prototype.disconnectedCallback = Io, r = r || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = r, r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e, o);
}
var Mo = 0;
function a(t, e, r, n, o, i) {
  e || (e = {});
  var s, c, u = e;
  if ("ref" in u) for (c in u = {}, e) c == "ref" ? s = e[c] : u[c] = e[c];
  var d = { type: t, props: u, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Mo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) u[c] === void 0 && (u[c] = s[c]);
  return S.vnode && S.vnode(d), d;
}
const kr = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var ht = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(ht || {}), wn = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", t.CONTROL = "palm-capture:control", t.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", t.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", t.STATE_CHANGED = "palm-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", t))(wn || {});
const A = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, q = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var ct, N, Ne, Or, Vt = 0, Sn = [], I = S, xr = I.__b, Nr = I.__r, Ir = I.diffed, $r = I.__c, Mr = I.unmount, Dr = I.__;
function It(t, e) {
  I.__h && I.__h(N, t, Vt || e), Vt = 0;
  var r = N.__H || (N.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function U(t) {
  return Vt = 1, ur(Vn, t);
}
function ur(t, e, r) {
  var n = It(ct++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : Vn(void 0, e), function(c) {
    var u = n.__N ? n.__N[0] : n.__[0], d = n.t(u, c);
    u !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = N, !N.u)) {
    var o = function(c, u, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (h.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, c, u, d);
      var l = !1;
      return h.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (l = !0);
        }
      }), !(!l && n.__c.props === c) && (!i || i.call(this, c, u, d));
    };
    N.u = !0;
    var i = N.shouldComponentUpdate, s = N.componentWillUpdate;
    N.componentWillUpdate = function(c, u, d) {
      if (this.__e) {
        var h = i;
        i = void 0, o(c, u, d), i = h;
      }
      s && s.call(this, c, u, d);
    }, N.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function nt(t, e) {
  var r = It(ct++, 3);
  !I.__s && dr(r.__H, e) && (r.__ = t, r.i = e, N.__H.__h.push(r));
}
function $t(t, e) {
  var r = It(ct++, 4);
  !I.__s && dr(r.__H, e) && (r.__ = t, r.i = e, N.__h.push(r));
}
function Yt(t) {
  return Vt = 5, rt(function() {
    return { current: t };
  }, []);
}
function bn(t, e, r) {
  Vt = 6, $t(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(t));
}
function rt(t, e) {
  var r = It(ct++, 7);
  return dr(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function pt(t, e) {
  return Vt = 8, rt(function() {
    return t;
  }, e);
}
function qt(t) {
  var e = N.context[t.__c], r = It(ct++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(N)), e.props.value) : t.__;
}
function he(t, e) {
  I.useDebugValue && I.useDebugValue(e ? e(t) : t);
}
function En() {
  var t = It(ct++, 11);
  if (!t.__) {
    for (var e = N.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function Do() {
  for (var t; t = Sn.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ie), t.__H.__h.forEach(Ue), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], I.__e(e, t.__v);
  }
}
I.__b = function(t) {
  N = null, xr && xr(t);
}, I.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Dr && Dr(t, e);
}, I.__r = function(t) {
  Nr && Nr(t), ct = 0;
  var e = (N = t.__c).__H;
  e && (Ne === N ? (e.__h = [], N.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.i = r.__N = void 0;
  })) : (e.__h.forEach(ie), e.__h.forEach(Ue), e.__h = [], ct = 0)), Ne = N;
}, I.diffed = function(t) {
  Ir && Ir(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Sn.push(e) !== 1 && Or === I.requestAnimationFrame || ((Or = I.requestAnimationFrame) || To)(Do)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.i = void 0;
  })), Ne = N = null;
}, I.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(ie), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ue(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], I.__e(n, r.__v);
    }
  }), $r && $r(t, e);
}, I.unmount = function(t) {
  Mr && Mr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      ie(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && I.__e(e, r.__v));
};
var Tr = typeof requestAnimationFrame == "function";
function To(t) {
  var e, r = function() {
    clearTimeout(n), Tr && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Tr && (e = requestAnimationFrame(r));
}
function ie(t) {
  var e = N, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), N = e;
}
function Ue(t) {
  var e = N;
  t.__c = t.__(), N = e;
}
function dr(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Vn(t, e) {
  return typeof e == "function" ? e(t) : e;
}
var D = function() {
  return D = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, D.apply(this, arguments);
};
function Lt(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function Ro(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var Ao = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Po = /* @__PURE__ */ Ro(
  function(t) {
    return Ao.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function kn(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function We(t, e) {
  for (var r in t) if (r !== "__source" && !(r in e)) return !0;
  for (var n in e) if (n !== "__source" && t[n] !== e[n]) return !0;
  return !1;
}
function Fe(t, e) {
  this.props = t, this.context = e;
}
function Ho(t, e) {
  function r(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !s : We(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, T(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Fe.prototype = new z()).isPureReactComponent = !0, Fe.prototype.shouldComponentUpdate = function(t, e) {
  return We(this.props, t) || We(this.state, e);
};
var Rr = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Rr && Rr(t);
};
var Zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Bo(t) {
  function e(r) {
    var n = kn({}, r);
    return delete n.ref, t(n, r.ref || null);
  }
  return e.$$typeof = Zo, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Ar = function(t, e) {
  return t == null ? null : et(et(t).map(e));
}, Uo = { map: Ar, forEach: Ar, count: function(t) {
  return t ? et(t).length : 0;
}, only: function(t) {
  var e = et(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: et }, Wo = S.__e;
S.__e = function(t, e, r, n) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = r.__e, e.__k = r.__k), o.__c(t, e);
  }
  Wo(t, e, r, n);
};
var Pr = S.unmount;
function On(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = kn({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return On(n, e, r);
  })), t;
}
function xn(t, e, r) {
  return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return xn(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t;
}
function ae() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Nn(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Fo(t) {
  var e, r, n;
  function o(i) {
    if (e || (e = t()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      n = s;
    }), n) throw n;
    if (!r) throw e;
    return T(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Pt() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Pr && Pr(t);
}, (ae.prototype = new z()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var o = Nn(n.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(c) : c());
  };
  r.__R = s;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var u = n.state.__a;
        n.__v.__k[0] = xn(u, u.__c.__P, u.__c.__O);
      }
      var d;
      for (n.setState({ __a: n.__b = null }); d = n.t.pop(); ) d.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(s, s);
}, ae.prototype.componentWillUnmount = function() {
  this.t = [];
}, ae.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = On(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = e.__a && T(W, null, t.fallback);
  return o && (o.__u &= -33), [T(W, null, e.__a ? null : t.children), o];
};
var Hr = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (r = t.u; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    t.u = r = r[2];
  }
};
function zo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Go(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    st(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), st(T(zo, { context: e.context }, t.__v), e.l);
}
function jo(t, e) {
  var r = T(Go, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(Pt.prototype = new z()).__a = function(t) {
  var e = this, r = Nn(e.__v), n = e.o.get(t);
  return n[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (n.push(o), Hr(e, t, n)) : o();
    };
    r ? r(i) : i();
  };
}, Pt.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = et(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; ) this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, Pt.prototype.componentDidUpdate = Pt.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Hr(t, r, e);
  });
};
var In = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Yo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Xo = /[A-Z0-9]/g, Ko = typeof document < "u", Jo = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Qo(t, e, r) {
  return e.__k == null && (e.textContent = ""), st(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function ti(t, e, r) {
  return sr(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(z.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Zr = S.event;
function ei() {
}
function ri() {
  return this.cancelBubble;
}
function ni() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return Zr && (t = Zr(t)), t.persist = ei, t.isPropagationStopped = ri, t.isDefaultPrevented = ni, t.nativeEvent = t;
};
var fr, oi = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Br = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var r = e.props, n = e.type, o = {};
    for (var i in r) {
      var s = r[i];
      if (!(i === "value" && "defaultValue" in r && s == null || Ko && i === "children" && n === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || Jo(r.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : qo.test(i) ? i = c : n.indexOf("-") === -1 && Yo.test(i) ? i = i.replace(Xo, "-$&").toLowerCase() : s === null && (s = void 0) : c = i = "oninput", c === "oninput" && o[i = c] && (i = "oninputCapture"), o[i] = s;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = et(r.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = et(r.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", oi)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), e.props = o;
  }(t), t.$$typeof = In, Br && Br(t);
};
var Ur = S.__r;
S.__r = function(t) {
  Ur && Ur(t), fr = t.__c;
};
var Wr = S.diffed;
S.diffed = function(t) {
  Wr && Wr(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value), fr = null;
};
var ii = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return fr.__n[t.__c].props.value;
}, useCallback: pt, useContext: qt, useDebugValue: he, useDeferredValue: Mn, useEffect: nt, useId: En, useImperativeHandle: bn, useInsertionEffect: Tn, useLayoutEffect: $t, useMemo: rt, useReducer: ur, useRef: Yt, useState: U, useSyncExternalStore: Rn, useTransition: Dn } } };
function ai(t) {
  return T.bind(null, t);
}
function Le(t) {
  return !!t && t.$$typeof === In;
}
function si(t) {
  return Le(t) && t.type === W;
}
function ci(t) {
  return !!t && !!t.displayName && (typeof t.displayName == "string" || t.displayName instanceof String) && t.displayName.startsWith("Memo(");
}
function li(t) {
  return Le(t) ? cr.apply(null, arguments) : t;
}
function ui(t) {
  return !!t.__k && (st(null, t), !0);
}
function di(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var fi = function(t, e) {
  return t(e);
}, hi = function(t, e) {
  return t(e);
}, pi = W;
function $n(t) {
  t();
}
function Mn(t) {
  return t;
}
function Dn() {
  return [!1, $n];
}
var Tn = $t, _i = Le;
function Rn(t, e) {
  var r = e(), n = U({ h: { __: r, v: e } }), o = n[0].h, i = n[1];
  return $t(function() {
    o.__ = r, o.v = e, Ie(o) && i({ h: o });
  }, [t, r, e]), nt(function() {
    return Ie(o) && i({ h: o }), t(function() {
      Ie(o) && i({ h: o });
    });
  }, [t]), r;
}
function Ie(t) {
  var e, r, n = t.v, o = t.__;
  try {
    var i = n();
    return !((e = o) === (r = i) && (e !== 0 || 1 / e == 1 / r) || e != e && r != r);
  } catch {
    return !0;
  }
}
var ot = { useState: U, useId: En, useReducer: ur, useEffect: nt, useLayoutEffect: $t, useInsertionEffect: Tn, useTransition: Dn, useDeferredValue: Mn, useSyncExternalStore: Rn, startTransition: $n, useRef: Yt, useImperativeHandle: bn, useMemo: rt, useCallback: pt, useContext: qt, useDebugValue: he, version: "17.0.2", Children: Uo, render: Qo, hydrate: ti, unmountComponentAtNode: ui, createPortal: jo, createElement: T, createContext: vn, createFactory: ai, cloneElement: li, createRef: wo, Fragment: W, isValidElement: Le, isElement: _i, isFragment: si, isMemo: ci, findDOMNode: di, Component: z, PureComponent: Fe, memo: Ho, forwardRef: Bo, flushSync: hi, unstable_batchedUpdates: fi, StrictMode: pi, Suspense: ae, SuspenseList: Pt, lazy: Fo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ii };
function mi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gi = function(e, r, n, o) {
  var i = n ? n.call(o, e, r) : void 0;
  if (i !== void 0)
    return !!i;
  if (e === r)
    return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r)
    return !1;
  var s = Object.keys(e), c = Object.keys(r);
  if (s.length !== c.length)
    return !1;
  for (var u = Object.prototype.hasOwnProperty.bind(r), d = 0; d < s.length; d++) {
    var h = s[d];
    if (!u(h))
      return !1;
    var l = e[h], p = r[h];
    if (i = n ? n.call(o, l, p, h) : void 0, i === !1 || i === void 0 && l !== p)
      return !1;
  }
  return !0;
};
const Li = /* @__PURE__ */ mi(gi);
var x = "-ms-", Wt = "-moz-", k = "-webkit-", An = "comm", ye = "rule", hr = "decl", yi = "@import", Pn = "@keyframes", vi = "@layer", Hn = Math.abs, pr = String.fromCharCode, ze = Object.assign;
function Ci(t, e) {
  return M(t, 0) ^ 45 ? (((e << 2 ^ M(t, 0)) << 2 ^ M(t, 1)) << 2 ^ M(t, 2)) << 2 ^ M(t, 3) : 0;
}
function Zn(t) {
  return t.trim();
}
function J(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function C(t, e, r) {
  return t.replace(e, r);
}
function se(t, e, r) {
  return t.indexOf(e, r);
}
function M(t, e) {
  return t.charCodeAt(e) | 0;
}
function kt(t, e, r) {
  return t.slice(e, r);
}
function Y(t) {
  return t.length;
}
function Bn(t) {
  return t.length;
}
function Ht(t, e) {
  return e.push(t), t;
}
function wi(t, e) {
  return t.map(e).join("");
}
function Fr(t, e) {
  return t.filter(function(r) {
    return !J(r, e);
  });
}
var ve = 1, Ot = 1, Un = 0, F = 0, $ = 0, Mt = "";
function Ce(t, e, r, n, o, i, s, c) {
  return { value: t, root: e, parent: r, type: n, props: o, children: i, line: ve, column: Ot, length: s, return: "", siblings: c };
}
function at(t, e) {
  return ze(Ce("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function bt(t) {
  for (; t.root; )
    t = at(t.root, { children: [t] });
  Ht(t, t.siblings);
}
function Si() {
  return $;
}
function bi() {
  return $ = F > 0 ? M(Mt, --F) : 0, Ot--, $ === 10 && (Ot = 1, ve--), $;
}
function G() {
  return $ = F < Un ? M(Mt, F++) : 0, Ot++, $ === 10 && (Ot = 1, ve++), $;
}
function _t() {
  return M(Mt, F);
}
function ce() {
  return F;
}
function we(t, e) {
  return kt(Mt, t, e);
}
function Ge(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ei(t) {
  return ve = Ot = 1, Un = Y(Mt = t), F = 0, [];
}
function Vi(t) {
  return Mt = "", t;
}
function $e(t) {
  return Zn(we(F - 1, je(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function ki(t) {
  for (; ($ = _t()) && $ < 33; )
    G();
  return Ge(t) > 2 || Ge($) > 3 ? "" : " ";
}
function Oi(t, e) {
  for (; --e && G() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return we(t, ce() + (e < 6 && _t() == 32 && G() == 32));
}
function je(t) {
  for (; G(); )
    switch ($) {
      case t:
        return F;
      case 34:
      case 39:
        t !== 34 && t !== 39 && je($);
        break;
      case 40:
        t === 41 && je(t);
        break;
      case 92:
        G();
        break;
    }
  return F;
}
function xi(t, e) {
  for (; G() && t + $ !== 57; )
    if (t + $ === 84 && _t() === 47)
      break;
  return "/*" + we(e, F - 1) + "*" + pr(t === 47 ? t : G());
}
function Ni(t) {
  for (; !Ge(_t()); )
    G();
  return we(t, F);
}
function Ii(t) {
  return Vi(le("", null, null, null, [""], t = Ei(t), 0, [0], t));
}
function le(t, e, r, n, o, i, s, c, u) {
  for (var d = 0, h = 0, l = s, p = 0, f = 0, _ = 0, L = 1, y = 1, m = 1, g = 0, V = "", b = o, O = i, w = n, v = V; y; )
    switch (_ = g, g = G()) {
      case 40:
        if (_ != 108 && M(v, l - 1) == 58) {
          se(v += C($e(g), "&", "&\f"), "&\f", Hn(d ? c[d - 1] : 0)) != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += $e(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += ki(_);
        break;
      case 92:
        v += Oi(ce() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            Ht($i(xi(G(), ce()), e, r, u), u);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * L:
        c[d++] = Y(v) * m;
      case 125 * L:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            y = 0;
          case 59 + h:
            m == -1 && (v = C(v, /\f/g, "")), f > 0 && Y(v) - l && Ht(f > 32 ? Gr(v + ";", n, r, l - 1, u) : Gr(C(v, " ", "") + ";", n, r, l - 2, u), u);
            break;
          case 59:
            v += ";";
          default:
            if (Ht(w = zr(v, e, r, d, h, o, c, V, b = [], O = [], l, i), i), g === 123)
              if (h === 0)
                le(v, e, w, w, b, i, l, c, O);
              else
                switch (p === 99 && M(v, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    le(t, w, w, n && Ht(zr(t, w, w, 0, 0, o, c, V, o, b = [], l, O), O), o, O, l, c, n ? b : O);
                    break;
                  default:
                    le(v, w, w, w, [""], O, 0, c, O);
                }
        }
        d = h = f = 0, L = m = 1, V = v = "", l = s;
        break;
      case 58:
        l = 1 + Y(v), f = _;
      default:
        if (L < 1) {
          if (g == 123)
            --L;
          else if (g == 125 && L++ == 0 && bi() == 125)
            continue;
        }
        switch (v += pr(g), g * L) {
          case 38:
            m = h > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            c[d++] = (Y(v) - 1) * m, m = 1;
            break;
          case 64:
            _t() === 45 && (v += $e(G())), p = _t(), h = l = Y(V = v += Ni(ce())), g++;
            break;
          case 45:
            _ === 45 && Y(v) == 2 && (L = 0);
        }
    }
  return i;
}
function zr(t, e, r, n, o, i, s, c, u, d, h, l) {
  for (var p = o - 1, f = o === 0 ? i : [""], _ = Bn(f), L = 0, y = 0, m = 0; L < n; ++L)
    for (var g = 0, V = kt(t, p + 1, p = Hn(y = s[L])), b = t; g < _; ++g)
      (b = Zn(y > 0 ? f[g] + " " + V : C(V, /&\f/g, f[g]))) && (u[m++] = b);
  return Ce(t, e, r, o === 0 ? ye : c, u, d, h, l);
}
function $i(t, e, r, n) {
  return Ce(t, e, r, An, pr(Si()), kt(t, 2, -2), 0, n);
}
function Gr(t, e, r, n, o) {
  return Ce(t, e, r, hr, kt(t, 0, n), kt(t, n + 1, -1), n, o);
}
function Wn(t, e, r) {
  switch (Ci(t, e)) {
    case 5103:
      return k + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + t + t;
    case 4789:
      return Wt + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + t + Wt + t + x + t + t;
    case 5936:
      switch (M(t, e + 11)) {
        case 114:
          return k + t + x + C(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return k + t + x + C(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return k + t + x + C(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + t + x + t + t;
    case 6165:
      return k + t + x + "flex-" + t + t;
    case 5187:
      return k + t + C(t, /(\w+).+(:[^]+)/, k + "box-$1$2" + x + "flex-$1$2") + t;
    case 5443:
      return k + t + x + "flex-item-" + C(t, /flex-|-self/g, "") + (J(t, /flex-|baseline/) ? "" : x + "grid-row-" + C(t, /flex-|-self/g, "")) + t;
    case 4675:
      return k + t + x + "flex-line-pack" + C(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return k + t + x + C(t, "shrink", "negative") + t;
    case 5292:
      return k + t + x + C(t, "basis", "preferred-size") + t;
    case 6060:
      return k + "box-" + C(t, "-grow", "") + k + t + x + C(t, "grow", "positive") + t;
    case 4554:
      return k + C(t, /([^-])(transform)/g, "$1" + k + "$2") + t;
    case 6187:
      return C(C(C(t, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return C(t, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return C(C(t, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + t + t;
    case 4200:
      if (!J(t, /flex-|baseline/)) return x + "grid-column-align" + kt(t, e) + t;
      break;
    case 2592:
    case 3360:
      return x + C(t, "template-", "") + t;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return e = o, J(n.props, /grid-\w+-end/);
      }) ? ~se(t + (r = r[e].value), "span", 0) ? t : x + C(t, "-start", "") + t + x + "grid-row-span:" + (~se(r, "span", 0) ? J(r, /\d+/) : +J(r, /\d+/) - +J(t, /\d+/)) + ";" : x + C(t, "-start", "") + t;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return J(n.props, /grid-\w+-start/);
      }) ? t : x + C(C(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(t, /(.+)-inline(.+)/, k + "$1$2") + t;
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
      if (Y(t) - 1 - e > 6)
        switch (M(t, e + 1)) {
          case 109:
            if (M(t, e + 4) !== 45)
              break;
          case 102:
            return C(t, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Wt + (M(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~se(t, "stretch", 0) ? Wn(C(t, "stretch", "fill-available"), e, r) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return C(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, c, u, d) {
        return x + o + ":" + i + d + (s ? x + o + "-span:" + (c ? u : +u - +i) + d : "") + t;
      });
    case 4949:
      if (M(t, e + 6) === 121)
        return C(t, ":", ":" + k) + t;
      break;
    case 6444:
      switch (M(t, M(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (M(t, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + x + "$2box$3") + t;
        case 100:
          return C(t, ":", ":" + x) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return C(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function pe(t, e) {
  for (var r = "", n = 0; n < t.length; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function Mi(t, e, r, n) {
  switch (t.type) {
    case vi:
      if (t.children.length) break;
    case yi:
    case hr:
      return t.return = t.return || t.value;
    case An:
      return "";
    case Pn:
      return t.return = t.value + "{" + pe(t.children, n) + "}";
    case ye:
      if (!Y(t.value = t.props.join(","))) return "";
  }
  return Y(r = pe(t.children, n)) ? t.return = t.value + "{" + r + "}" : "";
}
function Di(t) {
  var e = Bn(t);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < e; c++)
      s += t[c](r, n, o, i) || "";
    return s;
  };
}
function Ti(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Ri(t, e, r, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hr:
        t.return = Wn(t.value, t.length, r);
        return;
      case Pn:
        return pe([at(t, { value: C(t.value, "@", "@" + k) })], n);
      case ye:
        if (t.length)
          return wi(r = t.props, function(o) {
            switch (J(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                bt(at(t, { props: [C(o, /:(read-\w+)/, ":" + Wt + "$1")] })), bt(at(t, { props: [o] })), ze(t, { props: Fr(r, n) });
                break;
              case "::placeholder":
                bt(at(t, { props: [C(o, /:(plac\w+)/, ":" + k + "input-$1")] })), bt(at(t, { props: [C(o, /:(plac\w+)/, ":" + Wt + "$1")] })), bt(at(t, { props: [C(o, /:(plac\w+)/, x + "input-$1")] })), bt(at(t, { props: [o] })), ze(t, { props: Fr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Ai = {
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
}, E = {}, yt = typeof process < "u" && E !== void 0 && (E.REACT_APP_SC_ATTR || E.SC_ATTR) || "data-styled", Fn = "active", zn = "data-styled-version", Se = "6.1.11", _r = `/*!sc*/
`, mr = typeof window < "u" && "HTMLElement" in window, Pi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== "" ? E.REACT_APP_SC_DISABLE_SPEEDY !== "false" && E.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.SC_DISABLE_SPEEDY !== void 0 && E.SC_DISABLE_SPEEDY !== "" ? E.SC_DISABLE_SPEEDY !== "false" && E.SC_DISABLE_SPEEDY : E.NODE_ENV !== "production"), jr = /invalid hook call/i, ee = /* @__PURE__ */ new Set(), Hi = function(t, e) {
  if (E.NODE_ENV !== "production") {
    var r = e ? ' with the id of "'.concat(e, '"') : "", n = "The component ".concat(t).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
        jr.test(s) ? (i = !1, ee.delete(n)) : o.apply(void 0, Lt([s], c, !1));
      }, Yt(), i && !ee.has(n) && (console.warn(n), ee.add(n));
    } catch (s) {
      jr.test(s.message) && ee.delete(n);
    } finally {
      console.error = o;
    }
  }
}, be = Object.freeze([]), xt = Object.freeze({});
function Zi(t, e, r) {
  return r === void 0 && (r = xt), t.theme !== r.theme && t.theme || e || r.theme;
}
var Ye = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Bi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ui = /(^-|-$)/g;
function Yr(t) {
  return t.replace(Bi, "-").replace(Ui, "");
}
var Wi = /(a)(d)/gi, re = 52, qr = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function qe(t) {
  var e, r = "";
  for (e = Math.abs(t); e > re; e = e / re | 0) r = qr(e % re) + r;
  return (qr(e % re) + r).replace(Wi, "$1-$2");
}
var Me, Gn = 5381, dt = function(t, e) {
  for (var r = e.length; r; ) t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, jn = function(t) {
  return dt(Gn, t);
};
function Yn(t) {
  return qe(jn(t) >>> 0);
}
function qn(t) {
  return E.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function De(t) {
  return typeof t == "string" && (E.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Xn = typeof Symbol == "function" && Symbol.for, Kn = Xn ? Symbol.for("react.memo") : 60115, Fi = Xn ? Symbol.for("react.forward_ref") : 60112, zi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Gi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Jn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ji = ((Me = {})[Fi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Me[Kn] = Jn, Me);
function Xr(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Kn ? Jn : "$$typeof" in t ? ji[t.$$typeof] : zi;
  var e;
}
var Yi = Object.defineProperty, qi = Object.getOwnPropertyNames, Kr = Object.getOwnPropertySymbols, Xi = Object.getOwnPropertyDescriptor, Ki = Object.getPrototypeOf, Jr = Object.prototype;
function Qn(t, e, r) {
  if (typeof e != "string") {
    if (Jr) {
      var n = Ki(e);
      n && n !== Jr && Qn(t, n, r);
    }
    var o = qi(e);
    Kr && (o = o.concat(Kr(e)));
    for (var i = Xr(t), s = Xr(e), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in Gi || r && r[u] || s && u in s || i && u in i)) {
        var d = Xi(e, u);
        try {
          Yi(t, u, d);
        } catch {
        }
      }
    }
  }
  return t;
}
function vt(t) {
  return typeof t == "function";
}
function gr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function ft(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Xe(t, e) {
  if (t.length === 0) return "";
  for (var r = t[0], n = 1; n < t.length; n++) r += t[n];
  return r;
}
function Nt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Ke(t, e, r) {
  if (r === void 0 && (r = !1), !r && !Nt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t[n] = Ke(t[n], e[n]);
  else if (Nt(e)) for (var n in e) t[n] = Ke(t[n], e[n]);
  return t;
}
function Lr(t, e) {
  Object.defineProperty(t, "toString", { value: e });
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
function Qi() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var r = t[0], n = [], o = 1, i = t.length; o < i; o += 1) n.push(t[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function X(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  return E.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(Qi.apply(void 0, Lt([Ji[t]], e, !1)).trim());
}
var ta = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var r = 0, n = 0; n < e; n++) r += this.groupSizes[n];
    return r;
  }, t.prototype.insertRules = function(e, r) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; e >= i; ) if ((i <<= 1) < 0) throw X(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(e + 1), u = (s = 0, r.length); s < u; s++) this.tag.insertRule(c, r[s]) && (this.groupSizes[e]++, c++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var r = this.groupSizes[e], n = this.indexOfGroup(e), o = n + r;
      this.groupSizes[e] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(e) {
    var r = "";
    if (e >= this.length || this.groupSizes[e] === 0) return r;
    for (var n = this.groupSizes[e], o = this.indexOfGroup(e), i = o + n, s = o; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(_r);
    return r;
  }, t;
}(), ea = 1 << 30, ue = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), de = 1, ne = function(t) {
  if (ue.has(t)) return ue.get(t);
  for (; _e.has(de); ) de++;
  var e = de++;
  if (E.NODE_ENV !== "production" && ((0 | e) < 0 || e > ea)) throw X(16, "".concat(e));
  return ue.set(t, e), _e.set(e, t), e;
}, ra = function(t, e) {
  de = e + 1, ue.set(t, e), _e.set(e, t);
}, na = "style[".concat(yt, "][").concat(zn, '="').concat(Se, '"]'), oa = new RegExp("^".concat(yt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ia = function(t, e, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && t.registerName(e, n);
}, aa = function(t, e) {
  for (var r, n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(_r), o = [], i = 0, s = n.length; i < s; i++) {
    var c = n[i].trim();
    if (c) {
      var u = c.match(oa);
      if (u) {
        var d = 0 | parseInt(u[1], 10), h = u[2];
        d !== 0 && (ra(h, d), ia(t, h, u[3]), t.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
};
function sa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var to = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(yt, "]")));
    return u[u.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(yt, Fn), n.setAttribute(zn, Se);
  var s = sa();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, ca = function() {
  function t(e) {
    this.element = to(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw X(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    try {
      return this.sheet.insertRule(r, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var r = this.sheet.cssRules[e];
    return r && r.cssText ? r.cssText : "";
  }, t;
}(), la = function() {
  function t(e) {
    this.element = to(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), ua = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), Qr = mr, da = { isServer: !mr, useCSSOMInjection: !Pi }, eo = function() {
  function t(e, r, n) {
    e === void 0 && (e = xt), r === void 0 && (r = {});
    var o = this;
    this.options = D(D({}, da), e), this.gs = r, this.names = new Map(n), this.server = !!e.isServer, !this.server && mr && Qr && (Qr = !1, function(i) {
      for (var s = document.querySelectorAll(na), c = 0, u = s.length; c < u; c++) {
        var d = s[c];
        d && d.getAttribute(yt) !== Fn && (aa(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), Lr(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, u = "", d = function(l) {
          var p = function(m) {
            return _e.get(m);
          }(l);
          if (p === void 0) return "continue";
          var f = i.names.get(p), _ = s.getGroup(l);
          if (f === void 0 || _.length === 0) return "continue";
          var L = "".concat(yt, ".g").concat(l, '[id="').concat(p, '"]'), y = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (y += "".concat(m, ","));
          }), u += "".concat(_).concat(L, '{content:"').concat(y, '"}').concat(_r);
        }, h = 0; h < c; h++) d(h);
        return u;
      }(o);
    });
  }
  return t.registerId = function(e) {
    return ne(e);
  }, t.prototype.reconstructWithOptions = function(e, r) {
    return r === void 0 && (r = !0), new t(D(D({}, this.options), e), this.gs, r && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new ua(o) : n ? new ca(o) : new la(o);
    }(this.options), new ta(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, r) {
    return this.names.has(e) && this.names.get(e).has(r);
  }, t.prototype.registerName = function(e, r) {
    if (ne(e), this.names.has(e)) this.names.get(e).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(e, n);
    }
  }, t.prototype.insertRules = function(e, r, n) {
    this.registerName(e, r), this.getTag().insertRules(ne(e), n);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ne(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), fa = /&/g, ha = /^\s*\/\/.*$/gm;
function ro(t, e) {
  return t.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(e, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(e, " ")), r.props = r.props.map(function(n) {
      return "".concat(e, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = ro(r.children, e)), r;
  });
}
function no(t) {
  var e, r, n, o = t === void 0 ? xt : t, i = o.options, s = i === void 0 ? xt : i, c = o.plugins, u = c === void 0 ? be : c, d = function(p, f, _) {
    return _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(e) : p;
  }, h = u.slice();
  h.push(function(p) {
    p.type === ye && p.value.includes("&") && (p.props[0] = p.props[0].replace(fa, r).replace(n, d));
  }), s.prefix && h.push(Ri), h.push(Mi);
  var l = function(p, f, _, L) {
    f === void 0 && (f = ""), _ === void 0 && (_ = ""), L === void 0 && (L = "&"), e = L, r = f, n = new RegExp("\\".concat(r, "\\b"), "g");
    var y = p.replace(ha, ""), m = Ii(_ || f ? "".concat(_, " ").concat(f, " { ").concat(y, " }") : y);
    s.namespace && (m = ro(m, s.namespace));
    var g = [];
    return pe(m, Di(h.concat(Ti(function(V) {
      return g.push(V);
    })))), g;
  };
  return l.hash = u.length ? u.reduce(function(p, f) {
    return f.name || X(15), dt(p, f.name);
  }, Gn).toString() : "", l;
}
var pa = new eo(), Je = no(), yr = ot.createContext({ shouldForwardProp: void 0, styleSheet: pa, stylis: Je });
yr.Consumer;
var _a = ot.createContext(void 0);
function Qe() {
  return qt(yr);
}
function ma(t) {
  var e = U(t.stylisPlugins), r = e[0], n = e[1], o = Qe().styleSheet, i = rt(function() {
    var u = o;
    return t.sheet ? u = t.sheet : t.target && (u = u.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [t.disableCSSOMInjection, t.sheet, t.target, o]), s = rt(function() {
    return no({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: r });
  }, [t.enableVendorPrefixes, t.namespace, r]);
  nt(function() {
    Li(r, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var c = rt(function() {
    return { shouldForwardProp: t.shouldForwardProp, styleSheet: i, stylis: s };
  }, [t.shouldForwardProp, i, s]);
  return ot.createElement(yr.Provider, { value: c }, ot.createElement(_a.Provider, { value: s }, t.children));
}
var tr = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Je);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = r, Lr(this, function() {
      throw X(12, String(n.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Je), this.name + e.hash;
  }, t;
}(), ga = function(t) {
  return t >= "A" && t <= "Z";
};
function tn(t) {
  for (var e = "", r = 0; r < t.length; r++) {
    var n = t[r];
    if (r === 1 && n === "-" && t[0] === "-") return t;
    ga(n) ? e += "-" + n.toLowerCase() : e += n;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var oo = function(t) {
  return t == null || t === !1 || t === "";
}, io = function(t) {
  var e, r, n = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !oo(i) && (Array.isArray(i) && i.isCss || vt(i) ? n.push("".concat(tn(o), ":"), i, ";") : Nt(i) ? n.push.apply(n, Lt(Lt(["".concat(o, " {")], io(i), !1), ["}"], !1)) : n.push("".concat(tn(o), ": ").concat((e = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || e in Ai || e.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function mt(t, e, r, n) {
  if (oo(t)) return [];
  if (gr(t)) return [".".concat(t.styledComponentId)];
  if (vt(t)) {
    if (!vt(i = t) || i.prototype && i.prototype.isReactComponent || !e) return [t];
    var o = t(e);
    return E.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tr || Nt(o) || o === null || console.error("".concat(qn(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mt(o, e, r, n);
  }
  var i;
  return t instanceof tr ? r ? (t.inject(r, n), [t.getName(n)]) : [t] : Nt(t) ? io(t) : Array.isArray(t) ? Array.prototype.concat.apply(be, t.map(function(s) {
    return mt(s, e, r, n);
  })) : [t.toString()];
}
function La(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (vt(r) && !gr(r)) return !1;
  }
  return !0;
}
var ya = jn(Se), va = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = E.NODE_ENV === "production" && (n === void 0 || n.isStatic) && La(e), this.componentId = r, this.baseHash = dt(ya, r), this.baseStyle = n, eo.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = ft(o, this.staticRulesId);
    else {
      var i = Xe(mt(this.rules, e, r, n)), s = qe(dt(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var c = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, c);
      }
      o = ft(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = dt(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var l = this.rules[h];
        if (typeof l == "string") d += l, E.NODE_ENV !== "production" && (u = dt(u, l));
        else if (l) {
          var p = Xe(mt(l, e, r, n));
          u = dt(u, p + h), d += p;
        }
      }
      if (d) {
        var f = qe(u >>> 0);
        r.hasNameForId(this.componentId, f) || r.insertRules(this.componentId, f, n(d, ".".concat(f), void 0, this.componentId)), o = ft(o, f);
      }
    }
    return o;
  }, t;
}(), Gt = ot.createContext(void 0);
Gt.Consumer;
function ao() {
  var t = qt(Gt);
  if (!t) throw X(18);
  return t;
}
function Ca(t) {
  var e = ot.useContext(Gt), r = rt(function() {
    return function(n, o) {
      if (!n) throw X(14);
      if (vt(n)) {
        var i = n(o);
        if (E.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw X(8);
      return o ? D(D({}, o), n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? ot.createElement(Gt.Provider, { value: r }, t.children) : null;
}
var Te = {}, en = /* @__PURE__ */ new Set();
function wa(t, e, r) {
  var n = gr(t), o = t, i = !De(t), s = e.attrs, c = s === void 0 ? be : s, u = e.componentId, d = u === void 0 ? function(b, O) {
    var w = typeof b != "string" ? "sc" : Yr(b);
    Te[w] = (Te[w] || 0) + 1;
    var v = "".concat(w, "-").concat(Yn(Se + w + Te[w]));
    return O ? "".concat(O, "-").concat(v) : v;
  }(e.displayName, e.parentComponentId) : u, h = e.displayName, l = h === void 0 ? function(b) {
    return De(b) ? "styled.".concat(b) : "Styled(".concat(qn(b), ")");
  }(t) : h, p = e.displayName && e.componentId ? "".concat(Yr(e.displayName), "-").concat(e.componentId) : e.componentId || d, f = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, _ = e.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var L = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      _ = function(b, O) {
        return L(b, O) && y(b, O);
      };
    } else _ = L;
  }
  var m = new va(r, p, n ? o.componentStyle : void 0);
  function g(b, O) {
    return function(w, v, H) {
      var j = w.attrs, Z = w.componentStyle, wt = w.defaultProps, _o = w.foldedComponentIds, Cr = w.styledComponentId, mo = w.target, go = ot.useContext(Gt), Lo = Qe(), Ve = w.shouldForwardProp || Lo.shouldForwardProp;
      E.NODE_ENV !== "production" && he(Cr);
      var wr = Zi(v, go, wt) || xt, K = function(Xt, Rt, Kt) {
        for (var St, lt = D(D({}, Rt), { className: void 0, theme: Kt }), xe = 0; xe < Xt.length; xe += 1) {
          var Jt = vt(St = Xt[xe]) ? St(lt) : St;
          for (var it in Jt) lt[it] = it === "className" ? ft(lt[it], Jt[it]) : it === "style" ? D(D({}, lt[it]), Jt[it]) : Jt[it];
        }
        return Rt.className && (lt.className = ft(lt.className, Rt.className)), lt;
      }(j, v, wr), Dt = K.as || mo, Tt = {};
      for (var B in K) K[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && K.theme === wr || (B === "forwardedAs" ? Tt.as = K.forwardedAs : Ve && !Ve(B, Dt) || (Tt[B] = K[B], Ve || E.NODE_ENV !== "development" || Po(B) || en.has(B) || !Ye.has(Dt) || (en.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ke = function(Xt, Rt) {
        var Kt = Qe(), St = Xt.generateAndInjectStyles(Rt, Kt.styleSheet, Kt.stylis);
        return E.NODE_ENV !== "production" && he(St), St;
      }(Z, K);
      E.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(ke);
      var Oe = ft(_o, Cr);
      return ke && (Oe += " " + ke), K.className && (Oe += " " + K.className), Tt[De(Dt) && !Ye.has(Dt) ? "class" : "className"] = Oe, Tt.ref = H, T(Dt, Tt);
    }(V, b, O);
  }
  g.displayName = l;
  var V = ot.forwardRef(g);
  return V.attrs = f, V.componentStyle = m, V.displayName = l, V.shouldForwardProp = _, V.foldedComponentIds = n ? ft(o.foldedComponentIds, o.styledComponentId) : "", V.styledComponentId = p, V.target = n ? o.target : t, Object.defineProperty(V, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = n ? function(O) {
      for (var w = [], v = 1; v < arguments.length; v++) w[v - 1] = arguments[v];
      for (var H = 0, j = w; H < j.length; H++) Ke(O, j[H], !0);
      return O;
    }({}, o.defaultProps, b) : b;
  } }), E.NODE_ENV !== "production" && (Hi(l, p), V.warnTooManyClasses = /* @__PURE__ */ function(b, O) {
    var w = {}, v = !1;
    return function(H) {
      if (!v && (w[H] = !0, Object.keys(w).length >= 200)) {
        var j = O ? ' with the id of "'.concat(O, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, w = {};
      }
    };
  }(l, p)), Lr(V, function() {
    return ".".concat(V.styledComponentId);
  }), i && Qn(V, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), V;
}
function rn(t, e) {
  for (var r = [t[0]], n = 0, o = e.length; n < o; n += 1) r.push(e[n], t[n + 1]);
  return r;
}
var nn = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function vr(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  if (vt(t) || Nt(t)) return nn(mt(rn(be, Lt([t], e, !0))));
  var n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? mt(n) : nn(mt(rn(n, e)));
}
function er(t, e, r) {
  if (r === void 0 && (r = xt), !e) throw X(1, e);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(e, r, vr.apply(void 0, Lt([o], i, !1)));
  };
  return n.attrs = function(o) {
    return er(t, e, D(D({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return er(t, e, D(D({}, r), o));
  }, n;
}
var so = function(t) {
  return er(wa, t);
}, P = so;
Ye.forEach(function(t) {
  P[t] = so(t);
});
function Ee(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = Xe(vr.apply(void 0, Lt([t], e, !1))), o = Yn(n);
  return new tr(o, n);
}
E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var oe = "__sc-".concat(yt, "__");
E.NODE_ENV !== "production" && E.NODE_ENV !== "test" && typeof window < "u" && (window[oe] || (window[oe] = 0), window[oe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[oe] += 1);
const R = {
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
}, on = 0.24, Sa = 24, ba = 2, co = 14, Ea = 0.0276;
var Q = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(Q || {});
const Zt = {
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
}, Va = {
  [A.CANDIDATE_SELECTION]: "Hold still…",
  [A.DOCUMENT_CENTERING]: "Center document",
  [A.DOCUMENT_NOT_PRESENT]: "Scan document",
  [A.DOCUMENT_TOO_FAR]: "Move closer",
  [A.SHARPNESS_TOO_LOW]: "More light needed",
  [A.BRIGHTNESS_TOO_LOW]: "More light needed",
  [A.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [A.HOTSPOTS_PRESENT]: "Avoid reflections"
}, ka = {
  [A.BRIGHTNESS_TOO_LOW]: "Move document to brighter area",
  [A.SHARPNESS_TOO_LOW]: "Move document to brighter area",
  [A.BRIGHTNESS_TOO_HIGH]: "Move document to darker area",
  [A.DOCUMENT_TOO_FAR]: "Move the document closer"
}, an = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Oa = R.ID_CORNERS_ROUNDED, xa = "rgba(19, 19, 19, 0.5)", Na = 34;
function sn(t, e) {
  return Math.max(e, e + (t - 400) * Ea + 2);
}
const Ia = (t, e = co) => t ? t.width < t.height ? sn(t.width, e) : sn(t.height, e) : e, $a = (t) => t > Q.Default ? Zt[Q.Default] : t > Q.L ? Zt[Q.L] : t > Q.M ? Zt[Q.M] : Zt[Q.S], Ma = (t) => t ? $a(t.width) : Zt[Q.Default];
function Da() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const r = document.createElement("link");
    r.href = t, r.rel = "stylesheet", document.head.appendChild(r);
  }
}
function Ta({
  currentInstruction: t,
  escalatedInstructions: e,
  instructions: r
}) {
  const { code: n, isEscalated: o } = t;
  if (n)
    return o && e && n in e ? e[n] : r[n];
}
const Ft = vn(void 0);
Ft.displayName = "UiCustomizationContext";
function Ct() {
  const t = qt(Ft);
  if (!t)
    throw new Error(
      `${Ft.displayName} must be used within a ${Ft.displayName} Provider`
    );
  return t;
}
function Ra({ children: t, props: e, videoElementSize: r }) {
  const { font: n } = ao(), o = rt(
    () => ({ ...e, videoElementSize: r, fontSize: Ia(r, n.minimumSize) }),
    [e, n.minimumSize, r]
  );
  return /* @__PURE__ */ a(Ft.Provider, { value: o, children: t });
}
const lo = ({ svgSize: t }) => /* @__PURE__ */ a("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Aa = P.div`
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
`, Pa = P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, Ha = P.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, rr = ({ Icon: t, isCameraReady: e, position: r = "absolute", text: n }) => {
  const { fontSize: o } = Ct();
  return /* @__PURE__ */ a(Aa, { $isCameraReady: e, $position: r, children: /* @__PURE__ */ a(Pa, { children: [
    t ? /* @__PURE__ */ a(t, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ a(Ha, { $fontSize: o, children: n })
  ] }) });
}, uo = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ a(rr, { Icon: lo, position: "relative", text: t });
class Za extends z {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(e) {
    return { hasError: !0 };
  }
  componentDidCatch(e, r) {
    console.error(e, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ a(uo, { Icon: lo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ba = P.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`, Ua = ({ children: t, uiProps: e, videoElementSize: r }) => (nt(() => {
  Da();
}, []), /* @__PURE__ */ a(ma, { target: e.styleTarget, children: /* @__PURE__ */ a(Ca, { theme: e.theme, children: /* @__PURE__ */ a(Ba, { children: /* @__PURE__ */ a(Za, { videoElementSize: r, children: /* @__PURE__ */ a(Ra, { props: e, videoElementSize: r, children: t }) }) }) }) })), Wa = 1.5, Fa = 0.85, Re = 1e3, za = "dot-auto-capture-video", Et = (t, e) => {
  const r = Yt(e);
  nt(() => {
    r.current = e;
  }, [e]), nt(
    () => {
      const n = (o) => r.current(o);
      return document.addEventListener(t, n), () => {
        document.removeEventListener(t, n);
      };
    },
    [t]
    // Re-run if eventName
  );
};
function Ga(t) {
  const [e, r] = U(), n = pt(
    (o) => {
      var i;
      r((i = o.detail) == null ? void 0 : i.size);
    },
    [r]
  );
  return Et(t, n), $t(() => {
    if (!e) {
      const o = document.getElementById(za);
      o && r(o.getBoundingClientRect());
    }
  }, [e, r]), e;
}
function ja(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ya = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, qa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: co
}, At = {
  colors: Ya,
  font: qa
}, Xa = (t) => {
  var e;
  return t ? {
    ...At,
    ...t,
    colors: {
      ...At.colors,
      ...t.colors
    },
    font: {
      ...At.font,
      ...t.font,
      family: ja((e = t.font) == null ? void 0 : e.family, At.font.family)
    }
  } : At;
};
function Ka(t, e) {
  return t < Re && e >= Re ? Re : t;
}
function Ja(t, e) {
  return t < e ? t : e;
}
function Qa({ height: t, width: e }) {
  let r;
  return e > t ? r = Ka(t, e) : r = e, {
    width: r,
    height: Ja(t, r)
  };
}
const ts = (t) => {
  const r = Qa(t).width * Fa, n = (t.width - r) / 2, o = r / Wa, i = (t.height - o) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: o
  };
}, es = (t) => {
  const { height: e, shiftX: r, shiftY: n, width: o } = ts(t);
  return {
    shiftX: r / t.width,
    shiftY: n / t.height,
    width: o / t.width,
    height: e / t.height
  };
}, fo = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, me = class me {
  constructor() {
    Qt(this, "lastDetails", {});
    Qt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new me()), this._instance;
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
  isDetailChanged(e, r) {
    return JSON.stringify(r) !== JSON.stringify(this.lastDetails[e]) ? (this.lastDetails[e] = r, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(e, r) {
    this.isDetailChanged(e, r) && fo(e, r);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(e, r, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(e, r), this.delayedTime = o);
  }
};
Qt(me, "_instance");
let nr = me;
nr.getInstance();
const cn = (t, e) => {
  fo(t, {
    instruction: e
  });
};
async function rs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ns() {
  return (await rs()).filter((e) => e.kind === "videoinput");
}
const os = () => {
  const [t, e] = U(!1);
  return nt(() => {
    (async () => {
      (await ns()).length > 1 && e(!0);
    })();
  }, []), t;
}, is = ({ size: t }) => /* @__PURE__ */ a("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ a(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ a("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ a("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), as = ({ size: t }) => /* @__PURE__ */ a("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ a("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), ho = P.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ss = ({ marginLeft: t, size: e, ...r }) => /* @__PURE__ */ a(ho, { $marginLeft: t, ...r, children: /* @__PURE__ */ a(is, { size: e }) }), cs = ({ marginLeft: t, size: e, ...r }) => /* @__PURE__ */ a(ho, { $marginLeft: t, ...r, children: /* @__PURE__ */ a(as, { size: e }) }), ls = P.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, us = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const { showCameraButtons: r, videoElementSize: n } = Ct(), o = os();
  if (!r)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = Ma(n);
  return /* @__PURE__ */ a(ls, { $padding: i, children: [
    o && /* @__PURE__ */ a(cs, { disabled: e, onClick: () => {
      cn(t, kr.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ a(
      ss,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          cn(t, kr.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, ds = P.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, fs = ({ svgSize: t }) => /* @__PURE__ */ a(ds, { children: /* @__PURE__ */ a("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ a(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ a(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), hs = P.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, po = ({ children: t, height: e, width: r }) => {
  const { backdropColor: n } = Ct();
  return /* @__PURE__ */ a(hs, { children: /* @__PURE__ */ a("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("mask", { id: "mask", children: [
      /* @__PURE__ */ a("rect", { fill: "#fff", height: "100%", width: "100%" }),
      t
    ] }) }),
    /* @__PURE__ */ a("rect", { fill: n, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
}, ps = ({ cameraHeight: t, cameraWidth: e, isBackdrop: r, state: n }) => {
  const { appStateInstructions: o } = Ct(), i = n === q.ERROR || n === q.RUNNING;
  return !n || i || !(o != null && o[n].visible) ? null : n === q.WAITING ? /* @__PURE__ */ a(W, { children: [
    r && t && e && /* @__PURE__ */ a(po, { height: t, width: e }),
    /* @__PURE__ */ a(rr, { isCameraReady: !0, text: o[q.WAITING].text })
  ] }) : /* @__PURE__ */ a(rr, { Icon: fs, isCameraReady: !0, text: o[q.LOADING].text });
}, _s = "2.5s", ms = "0.3s", gs = "linear", Ls = Ee`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Ee`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Ee`
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
Ee`
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
const ys = P.div`
  position: absolute;
  left: 50%;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && vr`
      animation: ${Ls} ${ms}
        ${gs} both;
      animation-delay: ${_s};

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

  transform: translateX(-50%)
    translateY(
      ${(t) => t.$cssTop || t.$isPortrait ? "-50%" : t.$isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, vs = P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  background: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.instructionColorSuccess}` : `${t.theme.colors.instructionColor}`};
  color: ${(t) => t.theme.colors.instructionTextColor};
  border: 0;
  line-height: 1em;
  font-size: ${(t) => `${t.$fontSize}px`};
  white-space: ${(t) => t.$wrap ? "break-spaces" : "nowrap"};
`, Cs = ({
  children: t,
  cssBottom: e,
  cssTop: r,
  isAnimating: n,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Ct();
  return /* @__PURE__ */ a(ys, { $cssBottom: e, $cssTop: r, $isAnimating: n, $isPortrait: i, children: /* @__PURE__ */ a(
    vs,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: t.length > Na,
      children: t
    }
  ) });
}, ws = P.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ss = (t) => {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}, Bt = (t, e) => Math.hypot(e.x - t.x, e.y - t.y), ln = (t, e, r) => {
  const n = (e.x - t.x) * r, o = (e.y - t.y) * r;
  return {
    x: t.x + n,
    y: t.y + o
  };
}, un = (t, e, r, n) => {
  const o = Bt(t, e);
  return r * n / o;
}, bs = (t) => {
  const { bottomLeft: e, bottomRight: r, topLeft: n, topRight: o } = t, i = Bt(n, o), s = Bt(o, r), c = Bt(e, r), u = Bt(n, e);
  return Math.min(i, s, c, u);
};
function Es({ cameraResolution: t, isImageMirror: e }) {
  const r = Yt(null), n = ao(), [o, i] = U(), s = pt(
    (c) => {
      var u;
      i((u = c == null ? void 0 : c.detail) == null ? void 0 : u.detectedObject);
    },
    [i]
  );
  return Et(ht.DETECTED_DOCUMENT_CHANGED, s), Et(wn.DETECTED_PALM_CHANGED, s), nt(() => {
    if (!r.current)
      return;
    const c = (d, h, l, p) => {
      var g;
      const f = un(
        h,
        d,
        p,
        on
      ), _ = un(
        h,
        l,
        p,
        on
      ), L = ln(h, d, f), y = ln(h, l, _), m = (g = r == null ? void 0 : r.current) == null ? void 0 : g.getContext("2d");
      m && (m.beginPath(), m.lineWidth = ba, m.strokeStyle = n.colors.placeholderColor, m.moveTo(L.x, L.y), m.arcTo(h.x, h.y, y.x, y.y, Sa), m.lineTo(y.x, y.y), m.stroke());
    }, u = (d) => {
      if (!d)
        return;
      const { bottomLeft: h, bottomRight: l, topLeft: p, topRight: f } = d, _ = bs(d);
      c(h, p, f, _), c(p, f, l, _), c(f, l, h, _), c(l, h, p, _);
    };
    r.current.width = t.width, r.current.height = t.height, Ss(r.current), u(o);
  }, [t, o, n.colors.placeholderColor]), /* @__PURE__ */ a(ws, { ref: r, $isImageMirror: e });
}
function Vs(t) {
  return /* @__PURE__ */ a("rect", { fill: "#000", ...t, rx: "2%" });
}
const ks = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "4", width: "630" }),
      /* @__PURE__ */ a(
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
), Os = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "404",
    preserveAspectRatio: "none",
    viewBox: "0 0 632 404",
    width: "632",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "17", width: "630", x: "1", y: "1" }),
      /* @__PURE__ */ a(
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
), xs = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("mask", { fill: "white", id: "path-2-inside-1_1_3694", children: /* @__PURE__ */ a("rect", { height: "402", rx: "2", width: "630" }) }),
      /* @__PURE__ */ a(
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
), Ns = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "16", width: "630" }),
      /* @__PURE__ */ a(
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
), Is = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a(
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
), $s = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a(
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
), Ms = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "404",
    preserveAspectRatio: "none",
    viewBox: "0 0 632 404",
    width: "632",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "17", width: "630", x: "1", y: "1" }),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ a("rect", { height: "208.731", rx: "4", stroke: "currentColor", strokeWidth: "2", width: "170.061", x: "35.7852", y: "97.6345" })
    ]
  }
), Ds = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "4", width: "630" }),
      /* @__PURE__ */ a("mask", { fill: "white", id: "path-2-inside-1_1_3696", children: /* @__PURE__ */ a("rect", { height: "402", rx: "2", width: "630" }) }),
      /* @__PURE__ */ a(
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
), Ts = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a("rect", { fill: "white", height: "402", opacity: "0.1", rx: "16", width: "630" }),
      /* @__PURE__ */ a("rect", { height: "398", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "626", x: "2", y: "2" })
    ]
  }
), Rs = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
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
), As = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "402",
    preserveAspectRatio: "none",
    viewBox: "0 0 630 402",
    width: "630",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: "M16 0H614C622.8 0 630 7.2 630 16V386C630 394.8 622.8 402 614 402H16C7.2 402 0 394.8 0 386V16C0 7.2 7.2 0 16 0Z",
          fill: "none",
          opacity: "0.1"
        }
      ),
      /* @__PURE__ */ a("path", { d: "M16 400C8.3 400 2 393.7 2 386V249.4H628V386C628 393.7 621.7 400 614 400H16Z", fill: "none" }),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M48.6001 296V292.9L42.4001 290.8L41.6001 290.5L42.4001 290.2L48.6001 288.1V285L38.6001 289.2V291.7L48.6001 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M67.3001 296V292.9L61.1 290.8L60.3 290.5L61.1 290.2L67.3001 288.1V285L57.3 289.2V291.7L67.3001 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M86.1001 296V292.9L79.9001 290.8L79.1001 290.5L79.9001 290.2L86.1001 288.1V285L76.1001 289.2V291.7L86.1001 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M104.8 296V292.9L98.6 290.8L97.8 290.5L98.6 290.2L104.8 288.1V285L94.8 289.2V291.7L104.8 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M123.5 296V292.9L117.3 290.8L116.5 290.5L117.3 290.2L123.5 288.1V285L113.5 289.2V291.7L123.5 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M142.2 296V292.9L136 290.8L135.2 290.5L136 290.2L142.2 288.1V285L132.2 289.2V291.7L142.2 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M160.9 296V292.9L154.7 290.8L153.9 290.5L154.7 290.2L160.9 288.1V285L150.9 289.2V291.7L160.9 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M179.6 296V292.9L173.4 290.8L172.6 290.5L173.4 290.2L179.6 288.1V285L169.6 289.2V291.7L179.6 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M198.3 296V292.9L192.1 290.8L191.3 290.5L192.1 290.2L198.3 288.1V285L188.3 289.2V291.7L198.3 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M217.1 296V292.9L210.9 290.8L210.1 290.5L210.9 290.2L217.1 288.1V285L207.1 289.2V291.7L217.1 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M235.8 296V292.9L229.6 290.8L228.8 290.5L229.6 290.2L235.8 288.1V285L225.8 289.2V291.7L235.8 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M254.5 296V292.9L248.3 290.8L247.5 290.5L248.3 290.2L254.5 288.1V285L244.5 289.2V291.7L254.5 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M273.2 296V292.9L267 290.8L266.2 290.5L267 290.2L273.2 288.1V285L263.2 289.2V291.7L273.2 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M291.9 296V292.9L285.7 290.8L284.9 290.5L285.7 290.2L291.9 288.1V285L281.9 289.2V291.7L291.9 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M310.6 296V292.9L304.4 290.8L303.6 290.5L304.4 290.2L310.6 288.1V285L300.6 289.2V291.7L310.6 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M329.3 296V292.9L323.1 290.8L322.3 290.5L323.1 290.2L329.3 288.1V285L319.3 289.2V291.7L329.3 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M348.1 296V292.9L341.9 290.8L341.1 290.5L341.9 290.2L348.1 288.1V285L338.1 289.2V291.7L348.1 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M366.8 296V292.9L360.6 290.8L359.8 290.5L360.6 290.2L366.8 288.1V285L356.8 289.2V291.7L366.8 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M385.5 296V292.9L379.3 290.8L378.5 290.5L379.3 290.2L385.5 288.1V285L375.5 289.2V291.7L385.5 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M404.2 296V292.9L398 290.8L397.2 290.5L398 290.2L404.2 288.1V285L394.2 289.2V291.7L404.2 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M422.9 296V292.9L416.7 290.8L415.9 290.5L416.7 290.2L422.9 288.1V285L412.9 289.2V291.7L422.9 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M441.6 296V292.9L435.4 290.8L434.6 290.5L435.4 290.2L441.6 288.1V285L431.6 289.2V291.7L441.6 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M460.3 296V292.9L454.1 290.8L453.3 290.5L454.1 290.2L460.3 288.1V285L450.3 289.2V291.7L460.3 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M479.1 296V292.9L472.9 290.8L472.1 290.5L472.9 290.2L479.1 288.1V285L469.1 289.2V291.7L479.1 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M497.8 296V292.9L491.6 290.8L490.8 290.5L491.6 290.2L497.8 288.1V285L487.8 289.2V291.7L497.8 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M516.5 296V292.9L510.3 290.8L509.5 290.5L510.3 290.2L516.5 288.1V285L506.5 289.2V291.7L516.5 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M535.2 296V292.9L529 290.8L528.2 290.5L529 290.2L535.2 288.1V285L525.2 289.2V291.7L535.2 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M553.9 296V292.9L547.7 290.8L546.9 290.5L547.7 290.2L553.9 288.1V285L543.9 289.2V291.7L553.9 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M572.6 296V292.9L566.4 290.8L565.6 290.5L566.4 290.2L572.6 288.1V285L562.6 289.2V291.7L572.6 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M591.3 296V292.9L585.1 290.8L584.3 290.5L585.1 290.2L591.3 288.1V285L581.3 289.2V291.7L591.3 296Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M48.6001 326.9V323.8L42.4001 321.7L41.6001 321.4L42.4001 321.1L48.6001 319V315.9L38.6001 320.1V322.6L48.6001 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M67.3001 326.9V323.8L61.1 321.7L60.3 321.4L61.1 321.1L67.3001 319V315.9L57.3 320.1V322.6L67.3001 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M86.1001 326.9V323.8L79.9001 321.7L79.1001 321.4L79.9001 321.1L86.1001 319V315.9L76.1001 320.1V322.6L86.1001 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M104.8 326.9V323.8L98.6 321.7L97.8 321.4L98.6 321.1L104.8 319V315.9L94.8 320.1V322.6L104.8 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M123.5 326.9V323.8L117.3 321.7L116.5 321.4L117.3 321.1L123.5 319V315.9L113.5 320.1V322.6L123.5 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M142.2 326.9V323.8L136 321.7L135.2 321.4L136 321.1L142.2 319V315.9L132.2 320.1V322.6L142.2 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M160.9 326.9V323.8L154.7 321.7L153.9 321.4L154.7 321.1L160.9 319V315.9L150.9 320.1V322.6L160.9 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M179.6 326.9V323.8L173.4 321.7L172.6 321.4L173.4 321.1L179.6 319V315.9L169.6 320.1V322.6L179.6 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M198.3 326.9V323.8L192.1 321.7L191.3 321.4L192.1 321.1L198.3 319V315.9L188.3 320.1V322.6L198.3 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M217.1 326.9V323.8L210.9 321.7L210.1 321.4L210.9 321.1L217.1 319V315.9L207.1 320.1V322.6L217.1 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M235.8 326.9V323.8L229.6 321.7L228.8 321.4L229.6 321.1L235.8 319V315.9L225.8 320.1V322.6L235.8 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M254.5 326.9V323.8L248.3 321.7L247.5 321.4L248.3 321.1L254.5 319V315.9L244.5 320.1V322.6L254.5 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M273.2 326.9V323.8L267 321.7L266.2 321.4L267 321.1L273.2 319V315.9L263.2 320.1V322.6L273.2 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M291.9 326.9V323.8L285.7 321.7L284.9 321.4L285.7 321.1L291.9 319V315.9L281.9 320.1V322.6L291.9 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M310.6 326.9V323.8L304.4 321.7L303.6 321.4L304.4 321.1L310.6 319V315.9L300.6 320.1V322.6L310.6 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M329.3 326.9V323.8L323.1 321.7L322.3 321.4L323.1 321.1L329.3 319V315.9L319.3 320.1V322.6L329.3 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M348.1 326.9V323.8L341.9 321.7L341.1 321.4L341.9 321.1L348.1 319V315.9L338.1 320.1V322.6L348.1 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M366.8 326.9V323.8L360.6 321.7L359.8 321.4L360.6 321.1L366.8 319V315.9L356.8 320.1V322.6L366.8 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M385.5 326.9V323.8L379.3 321.7L378.5 321.4L379.3 321.1L385.5 319V315.9L375.5 320.1V322.6L385.5 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M404.2 326.9V323.8L398 321.7L397.2 321.4L398 321.1L404.2 319V315.9L394.2 320.1V322.6L404.2 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M422.9 326.9V323.8L416.7 321.7L415.9 321.4L416.7 321.1L422.9 319V315.9L412.9 320.1V322.6L422.9 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M441.6 326.9V323.8L435.4 321.7L434.6 321.4L435.4 321.1L441.6 319V315.9L431.6 320.1V322.6L441.6 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M460.3 326.9V323.8L454.1 321.7L453.3 321.4L454.1 321.1L460.3 319V315.9L450.3 320.1V322.6L460.3 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M479.1 326.9V323.8L472.9 321.7L472.1 321.4L472.9 321.1L479.1 319V315.9L469.1 320.1V322.6L479.1 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M497.8 326.9V323.8L491.6 321.7L490.8 321.4L491.6 321.1L497.8 319V315.9L487.8 320.1V322.6L497.8 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M516.5 326.9V323.8L510.3 321.7L509.5 321.4L510.3 321.1L516.5 319V315.9L506.5 320.1V322.6L516.5 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M535.2 326.9V323.8L529 321.7L528.2 321.4L529 321.1L535.2 319V315.9L525.2 320.1V322.6L535.2 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M553.9 326.9V323.8L547.7 321.7L546.9 321.4L547.7 321.1L553.9 319V315.9L543.9 320.1V322.6L553.9 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M572.6 326.9V323.8L566.4 321.7L565.6 321.4L566.4 321.1L572.6 319V315.9L562.6 320.1V322.6L572.6 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M591.3 326.9V323.8L585.1 321.7L584.3 321.4L585.1 321.1L591.3 319V315.9L581.3 320.1V322.6L591.3 326.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M48.6001 357.9V354.8L42.4001 352.7L41.6001 352.4L42.4001 352.1L48.6001 350V347L38.6001 351.2V353.7L48.6001 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M67.3001 357.9V354.8L61.1 352.7L60.3 352.4L61.1 352.1L67.3001 350V347L57.3 351.2V353.7L67.3001 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M86.1001 357.9V354.8L79.9001 352.7L79.1001 352.4L79.9001 352.1L86.1001 350V347L76.1001 351.2V353.7L86.1001 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M104.8 357.9V354.8L98.6 352.7L97.8 352.4L98.6 352.1L104.8 350V347L94.8 351.2V353.7L104.8 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M123.5 357.9V354.8L117.3 352.7L116.5 352.4L117.3 352.1L123.5 350V347L113.5 351.2V353.7L123.5 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M142.2 357.9V354.8L136 352.7L135.2 352.4L136 352.1L142.2 350V347L132.2 351.2V353.7L142.2 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M160.9 357.9V354.8L154.7 352.7L153.9 352.4L154.7 352.1L160.9 350V347L150.9 351.2V353.7L160.9 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M179.6 357.9V354.8L173.4 352.7L172.6 352.4L173.4 352.1L179.6 350V347L169.6 351.2V353.7L179.6 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M198.3 357.9V354.8L192.1 352.7L191.3 352.4L192.1 352.1L198.3 350V347L188.3 351.2V353.7L198.3 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M217.1 357.9V354.8L210.9 352.7L210.1 352.4L210.9 352.1L217.1 350V347L207.1 351.2V353.7L217.1 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M235.8 357.9V354.8L229.6 352.7L228.8 352.4L229.6 352.1L235.8 350V347L225.8 351.2V353.7L235.8 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M254.5 357.9V354.8L248.3 352.7L247.5 352.4L248.3 352.1L254.5 350V347L244.5 351.2V353.7L254.5 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M273.2 357.9V354.8L267 352.7L266.2 352.4L267 352.1L273.2 350V347L263.2 351.2V353.7L273.2 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M291.9 357.9V354.8L285.7 352.7L284.9 352.4L285.7 352.1L291.9 350V347L281.9 351.2V353.7L291.9 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M310.6 357.9V354.8L304.4 352.7L303.6 352.4L304.4 352.1L310.6 350V347L300.6 351.2V353.7L310.6 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M329.3 357.9V354.8L323.1 352.7L322.3 352.4L323.1 352.1L329.3 350V347L319.3 351.2V353.7L329.3 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M348.1 357.9V354.8L341.9 352.7L341.1 352.4L341.9 352.1L348.1 350V347L338.1 351.2V353.7L348.1 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M366.8 357.9V354.8L360.6 352.7L359.8 352.4L360.6 352.1L366.8 350V347L356.8 351.2V353.7L366.8 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M385.5 357.9V354.8L379.3 352.7L378.5 352.4L379.3 352.1L385.5 350V347L375.5 351.2V353.7L385.5 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M404.2 357.9V354.8L398 352.7L397.2 352.4L398 352.1L404.2 350V347L394.2 351.2V353.7L404.2 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M422.9 357.9V354.8L416.7 352.7L415.9 352.4L416.7 352.1L422.9 350V347L412.9 351.2V353.7L422.9 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M441.6 357.9V354.8L435.4 352.7L434.6 352.4L435.4 352.1L441.6 350V347L431.6 351.2V353.7L441.6 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M460.3 357.9V354.8L454.1 352.7L453.3 352.4L454.1 352.1L460.3 350V347L450.3 351.2V353.7L460.3 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M479.1 357.9V354.8L472.9 352.7L472.1 352.4L472.9 352.1L479.1 350V347L469.1 351.2V353.7L479.1 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M497.8 357.9V354.8L491.6 352.7L490.8 352.4L491.6 352.1L497.8 350V347L487.8 351.2V353.7L497.8 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M516.5 357.9V354.8L510.3 352.7L509.5 352.4L510.3 352.1L516.5 350V347L506.5 351.2V353.7L516.5 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M535.2 357.9V354.8L529 352.7L528.2 352.4L529 352.1L535.2 350V347L525.2 351.2V353.7L535.2 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M553.9 357.9V354.8L547.7 352.7L546.9 352.4L547.7 352.1L553.9 350V347L543.9 351.2V353.7L553.9 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M572.6 357.9V354.8L566.4 352.7L565.6 352.4L566.4 352.1L572.6 350V347L562.6 351.2V353.7L572.6 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M591.3 357.9V354.8L585.1 352.7L584.3 352.4L585.1 352.1L591.3 350V347L581.3 351.2V353.7L591.3 357.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ a(
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
), Ps = () => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    height: "114",
    preserveAspectRatio: "none",
    viewBox: "0 0 163 114",
    width: "163",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
          stroke: "currentColor",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ a("path", { d: "M1 85H162", stroke: "currentColor" }),
      /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a(
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
            /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
            /* @__PURE__ */ a(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                result: "hardAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              }
            ),
            /* @__PURE__ */ a("feOffset", { dy: "4" }),
            /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: "2" }),
            /* @__PURE__ */ a("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0" }),
            /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", mode: "darken", result: "effect1_dropShadow" }),
            /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", mode: "normal", result: "shape" })
          ]
        }
      ) })
    ]
  }
), Hs = P.div`
  z-index: 1;
  position: absolute;
  top: ${(t) => t.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(t) => (1 - t.$placeholderRectangle.shiftY - t.$placeholderRectangle.height) * 100}%;
  left: ${(t) => t.$placeholderRectangle.shiftX * 100}%;
  right: ${(t) => (1 - t.$placeholderRectangle.shiftX - t.$placeholderRectangle.width) * 100}%;
  color: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.placeholderColorSuccess}` : `${t.theme.colors.placeholderColor}`};

  svg {
    width: 100%;
    height: 100%;
  }
`, Zs = ({
  children: t,
  className: e,
  isInCandidateSelection: r,
  onAnimationEnd: n,
  placeholderRectangle: o
}) => /* @__PURE__ */ a(
  Hs,
  {
    $isInCandidateSelection: r,
    $placeholderRectangle: o,
    className: e,
    onAnimationEnd: n,
    children: t
  }
), Bs = {
  [R.ID_CORNERS]: /* @__PURE__ */ a(ks, {}),
  [R.ID_DASH]: /* @__PURE__ */ a(xs, {}),
  [R.ID_DOT]: /* @__PURE__ */ a(Is, {}),
  [R.ID_SOLID]: /* @__PURE__ */ a(Ds, {}),
  [R.ID_PHOTO_ROUNDED]: /* @__PURE__ */ a(Ms, {}),
  [R.ID_CORNERS_ROUNDED]: /* @__PURE__ */ a(Os, {}),
  [R.ID_DASH_ROUNDED]: /* @__PURE__ */ a(Ns, {}),
  [R.ID_DOT_ROUNDED]: /* @__PURE__ */ a($s, {}),
  [R.ID_SOLID_ROUNDED]: /* @__PURE__ */ a(Ts, {}),
  [R.ID_SOLID_ROUNDED_BACK]: /* @__PURE__ */ a(Rs, {}),
  [R.PASSPORT_SOLID_BACK]: /* @__PURE__ */ a(As, {}),
  [R.PASSPORT_SOLID_BACK_BLANK]: /* @__PURE__ */ a(Ps, {})
}, Us = ({ backdropHeight: t, backdropWidth: e, isBackdrop: r, placeholderRectangle: n, ...o }) => {
  const { placeholder: i } = Ct();
  return /* @__PURE__ */ a(W, { children: [
    r && /* @__PURE__ */ a(po, { height: t, width: e, children: /* @__PURE__ */ a(
      Vs,
      {
        height: `${n.height * 100}%`,
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ a(Zs, { placeholderRectangle: n, ...o, children: Bs[i] })
  ] });
}, Ws = () => {
  const [t, e] = U(), [r, n] = U(!1), o = pt(
    (f) => {
      var L, y;
      e((L = f == null ? void 0 : f.detail) == null ? void 0 : L.cameraResolution);
      const _ = (y = f == null ? void 0 : f.detail) == null ? void 0 : y.isMirroring;
      _ !== void 0 && n(_);
    },
    [e]
  );
  Et(ht.CAMERA_PROPS_CHANGED, o);
  const [i, s] = U({
    code: A.DOCUMENT_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = pt(
    (f) => {
      var _, L;
      s({
        code: (_ = f == null ? void 0 : f.detail) == null ? void 0 : _.instructionCode,
        isEscalated: ((L = f == null ? void 0 : f.detail) == null ? void 0 : L.isEscalated) ?? !1
      });
    },
    [s]
  );
  Et(ht.INSTRUCTION_CHANGED, c);
  const [u, d] = U(q.LOADING), [h, l] = U(), p = pt(
    (f) => {
      var L, y;
      d((L = f.detail) == null ? void 0 : L.appState);
      const _ = (y = f == null ? void 0 : f.detail) == null ? void 0 : y.error;
      _ && l(_);
    },
    [d, l]
  );
  return Et(ht.STATE_CHANGED, p), {
    cameraResolution: t,
    appState: u,
    error: h,
    instruction: i,
    isMirroring: r
  };
}, Fs = () => {
  const { appState: t, cameraResolution: e, error: r, instruction: n, isMirroring: o } = Ws(), i = n.code === A.CANDIDATE_SELECTION, {
    escalatedInstructions: s,
    instructions: c,
    placeholder: u,
    showDetectionLayer: d
  } = Ct(), h = Ta({
    escalatedInstructions: s,
    instructions: c,
    currentInstruction: n
  }), l = u === R.ID_CORNERS_ROUNDED;
  return t === q.ERROR ? /* @__PURE__ */ a(uo, { text: r == null ? void 0 : r.message }) : t === q.RUNNING && e ? /* @__PURE__ */ a(W, { children: [
    d && /* @__PURE__ */ a(Es, { cameraResolution: e, isImageMirror: o }),
    /* @__PURE__ */ a(
      Us,
      {
        backdropHeight: e.height,
        backdropWidth: e.width,
        isBackdrop: l,
        isInCandidateSelection: i,
        placeholderRectangle: es(e)
      }
    ),
    h && /* @__PURE__ */ a(Cs, { cssTop: 50, isInCandidateSelection: i, children: h }),
    /* @__PURE__ */ a(
      us,
      {
        customControlEvent: ht.CONTROL,
        isSwitchCameraDisabled: i
      }
    )
  ] }) : /* @__PURE__ */ a(
    ps,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      isBackdrop: l,
      state: t
    }
  );
}, zs = (t) => {
  var d, h;
  const e = { ...Va, ...t == null ? void 0 : t.instructions }, r = {
    ...ka,
    ...t == null ? void 0 : t.escalatedInstructions
  }, n = {
    [q.LOADING]: { ...an.loading, ...(d = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : d.loading },
    [q.WAITING]: { ...an.waiting, ...(h = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : h.waiting }
  }, o = (t == null ? void 0 : t.placeholder) ?? Oa, i = (t == null ? void 0 : t.backdropColor) ?? xa, s = (t == null ? void 0 : t.showDetectionLayer) ?? !1, c = (t == null ? void 0 : t.showCameraButtons) ?? !1, u = Xa(t == null ? void 0 : t.theme);
  return {
    instructions: e,
    appStateInstructions: n,
    placeholder: o,
    backdropColor: i,
    showDetectionLayer: s,
    showCameraButtons: c,
    theme: u,
    escalatedInstructions: r
  };
}, Gs = ({ props: t }) => {
  const e = Ga(ht.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ a(Ua, { uiProps: zs(t), videoElementSize: e, children: /* @__PURE__ */ a(Fs, {}) });
};
$o(Gs, "x-dot-document-auto-capture-ui", ["props"]);
