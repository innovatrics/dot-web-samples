var Ye, C, _r, _e, $n, hr, pr, mr, on, Ut, zt, gr, Ve = {}, yr = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qe = Array.isArray;
function X(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function an(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function F(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ye.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ge(e, a, r, o, null);
}
function Ge(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++_r, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function $o() {
  return { current: null };
}
function U(e) {
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
  (!e.__d && (e.__d = !0) && _e.push(e) && !pt.__r++ || $n != C.debounceRendering) && (($n = C.debounceRendering) || hr)(pt);
}
function pt() {
  for (var e, t, n, r, o, i, a, s = 1; _e.length; ) _e.length > s && _e.sort(pr), e = _e.shift(), s = _e.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = X({}, r)).__v = r.__v + 1, C.vnode && C.vnode(n), sn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? be(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, Sr(i, n, a), r.__e = r.__ = null, n.__e != o && vr(n)));
  pt.__r = 0;
}
function Cr(e, t, n, r, o, i, a, s, l, u, f) {
  var c, _, d, p, y, E, g, m = r && r.__k || yr, b = t.length;
  for (l = Oo(n, t, m, l, b), c = 0; c < b; c++) (d = n.__k[c]) != null && (_ = d.__i == -1 ? Ve : m[d.__i] || Ve, d.__i = c, E = sn(e, d, _, o, i, a, s, l, u, f), p = d.__e, d.ref && _.ref != d.ref && (_.ref && cn(_.ref, null, d), f.push(d.ref, d.__c || p, d)), y == null && p != null && (y = p), (g = !!(4 & d.__u)) || _.__k === d.__k ? l = Er(d, l, e, g) : typeof d.type == "function" && E !== void 0 ? l = E : p && (l = p.nextSibling), d.__u &= -7);
  return n.__e = y, l;
}
function Oo(e, t, n, r, o) {
  var i, a, s, l, u, f = n.length, c = f, _ = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = Ge(null, a, null, null, null) : qe(a) ? a = e.__k[i] = Ge(U, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = Ge(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, l = i + _, a.__ = e, a.__b = e.__b + 1, s = null, (u = a.__i = ko(a, n, l, c)) != -1 && (c--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > f ? _-- : o < f && _++), typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? _-- : u == l + 1 ? _++ : (u > l ? _-- : _++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < f; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = be(s)), br(s, s));
  return r;
}
function Er(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = Er(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = be(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ne(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (qe(e) ? e.some(function(n) {
    ne(n, t);
  }) : t.push(e)), t;
}
function ko(e, t, n, r) {
  var o, i, a, s = e.key, l = e.type, u = t[n], f = u != null && (2 & u.__u) == 0;
  if (u === null && s == null || f && s == u.key && l == u.type) return n;
  if (r > (f ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((u = t[a = o >= 0 ? o-- : i++]) != null && (2 & u.__u) == 0 && s == u.key && l == u.type) return a;
  }
  return -1;
}
function On(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || bo.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || On(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || On(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(mr, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = on, e.addEventListener(t, i ? zt : Ut, i)) : e.removeEventListener(t, i ? zt : Ut, i);
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
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(C.event ? C.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, a, s, l, u) {
  var f, c, _, d, p, y, E, g, m, b, O, N, w, v, z, B, Le, G = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = C.__b) && f(t);
  e: if (typeof G == "function") try {
    if (g = t.props, m = "prototype" in G && G.prototype.render, b = (f = G.contextType) && r[f.__c], O = f ? b ? b.props.value : f.__ : r, n.__c ? E = (c = t.__c = n.__c).__ = c.__E : (m ? t.__c = c = new G(g, O) : (t.__c = c = new V(g, O), c.constructor = G, c.render = To), b && b.sub(c), c.state || (c.state = {}), c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && G.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = X({}, c.__s)), X(c.__s, G.getDerivedStateFromProps(g, c.__s))), d = c.props, p = c.state, c.__v = t, _) m && G.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && G.getDerivedStateFromProps == null && g !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, O), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, O) === !1) {
        for (t.__v != n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ae) {
          ae && (ae.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, O), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(d, p, y);
      });
    }
    if (c.context = O, c.props = g, c.__P = e, c.__e = !1, w = C.__r, v = 0, m) {
      for (c.state = c.__s, c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), z = 0; z < c._sb.length; z++) c.__h.push(c._sb[z]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++v < 25);
    c.state = c.__s, c.getChildContext != null && (r = X(X({}, r), c.getChildContext())), m && !_ && c.getSnapshotBeforeUpdate != null && (y = c.getSnapshotBeforeUpdate(d, p)), B = f, f != null && f.type === U && f.key == null && (B = wr(f.props.children)), s = Cr(e, qe(B) ? B : [B], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), E && (c.__E = c.__ = null);
  } catch (ae) {
    if (t.__v = null, l || i != null) if (ae.then) {
      for (t.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else {
      for (Le = i.length; Le--; ) an(i[Le]);
      Gt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, ae.then || Gt(t);
    C.__e(ae, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = No(n.__e, t, n, r, o, i, a, l, u);
  return (f = C.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function Gt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Gt);
}
function Sr(e, t, n) {
  for (var r = 0; r < n.length; r++) cn(n[r], n[++r], n[++r]);
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
function wr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : qe(e) ? e.map(wr) : X({}, e);
}
function No(e, t, n, r, o, i, a, s, l) {
  var u, f, c, _, d, p, y, E = n.props || Ve, g = t.props, m = t.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((d = i[u]) && "setAttribute" in d == !!m && (m ? d.localName == m : d.nodeType == 3)) {
      e = d, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (m == null) return document.createTextNode(g);
    e = document.createElementNS(o, m, g.is && g), s && (C.__m && C.__m(t, i), s = !1), i = null;
  }
  if (m == null) E === g || s && e.data == g || (e.data = g);
  else {
    if (i = i && Ye.call(e.childNodes), !s && i != null) for (E = {}, u = 0; u < e.attributes.length; u++) E[(d = e.attributes[u]).name] = d.value;
    for (u in E) if (d = E[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = d;
      else if (!(u in g)) {
        if (u == "value" && "defaultValue" in g || u == "checked" && "defaultChecked" in g) continue;
        tt(e, u, null, d, o);
      }
    }
    for (u in g) d = g[u], u == "children" ? _ = d : u == "dangerouslySetInnerHTML" ? f = d : u == "value" ? p = d : u == "checked" ? y = d : s && typeof d != "function" || E[u] === d || tt(e, u, d, E[u], o);
    if (f) s || c && (f.__html == c.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Cr(t.type == "template" ? e.content : e, qe(_) ? _ : [_], t, n, r, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && be(n, 0), s, l), i != null) for (u = i.length; u--; ) an(i[u]);
    s || (u = "value", m == "progress" && p == null ? e.removeAttribute("value") : p != null && (p !== e[u] || m == "progress" && !p || m == "option" && p != E[u]) && tt(e, u, p, E[u], o), u = "checked", y != null && y != e[u] && tt(e, u, y, E[u], o));
  }
  return e;
}
function cn(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    C.__e(o, n);
  }
}
function br(e, t, n) {
  var r, o;
  if (C.unmount && C.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || cn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      C.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && br(r[o], t, n || typeof e.type != "function");
  n || an(e.__e), e.__c = e.__ = e.__e = void 0;
}
function To(e, t, n) {
  return this.constructor(e, n);
}
function ue(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), C.__ && C.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], sn(t, e = (!r && n || t).__k = F(U, null, [e]), o || Ve, Ve, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ye.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), Sr(i, e, a);
}
function ln(e, t) {
  ue(e, t, ln);
}
function un(e, t, n) {
  var r, o, i, a, s = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ye.call(arguments, 2) : n), Ge(e.type, s, r || e.key, o || e.ref, null);
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
Ye = yr.slice, C = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, _r = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, n), this.props)), e && X(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, V.prototype.render = U, _e = [], hr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, mr = /(PointerCapture)$|Capture$/i, on = 0, Ut = kn(!1), zt = kn(!0), gr = 0;
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mt.apply(this, arguments);
}
function Or(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
var Ro = ["context", "children"], Io = ["useFragment"];
function xo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Po.call(this, r);
  }, o.prototype.attributeChangedCallback = Lo, o.prototype.disconnectedCallback = Do, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, e.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function Ao(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = Or(e, Ro);
  return un(t, n);
}
function Po(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = F(Ao, mt({}, this._props, { context: t.detail.context }), Nr(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? ln : ue)(this._vdom, this._root);
}
function kr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Lo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[kr(e)] = n, this._vdom = un(this._vdom, r), ue(this._vdom, this._root);
  }
}
function Do() {
  ue(this._vdom = null, this._root);
}
function Nn(e, t) {
  var n = this, r = e.useFragment, o = Or(e, Io);
  return F(r ? U : "slot", mt({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Nr(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, a = e.attributes, s = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[kr(a[i].name)] = a[i].value);
  for (i = s.length; i--; ) {
    var l = Nr(s[i], null, n), u = s[i].slot;
    u ? o[u] = F(Nn, { name: u }, l) : r[i] = l;
  }
  var f = !(!n || !n.shadow), c = t ? F(Nn, { useFragment: !f }, r) : r;
  return !f && t && (e.innerHTML = ""), F(t || e.nodeName.toLowerCase(), o, c);
}
var Mo = 0;
function h(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Mo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return C.vnode && C.vnode(u), u;
}
const Tn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, le = {
  DETECTION_CHANGED: "multi-range-auto-capture:detection-changed",
  CAMERA_PROPS_CHANGED: "multi-range-auto-capture:camera-props-changed",
  CONTROL: "multi-range-auto-capture:control",
  INSTRUCTION_CHANGED: "multi-range-auto-capture:instruction-changed",
  VIDEO_ELEMENT_SIZE: "multi-range-auto-capture:video-element-size",
  CHALLENGE_VALUE_CHANGED: "multi-range-auto-capture:challenge-value-changed",
  STATE_CHANGED: "multi-range-auto-capture:state-changed"
}, P = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, Rn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, H = {
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
}, $e = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_NOT_PRESENT: "face_not_present"
}, Se = {
  ZERO: "ZERO",
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",
  FIVE: "FIVE"
};
var fe, R, At, In, Oe = 0, Tr = [], I = C, xn = I.__b, An = I.__r, Pn = I.diffed, Ln = I.__c, Dn = I.unmount, Mn = I.__;
function Ie(e, t) {
  I.__h && I.__h(R, e, Oe || t), Oe = 0;
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function L(e) {
  return Oe = 1, fn(xr, e);
}
function fn(e, t, n) {
  var r = Ie(fe++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : xr(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.__f)) {
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
    R.__f = !0;
    var i = R.shouldComponentUpdate, a = R.componentWillUpdate;
    R.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, u), i = f;
      }
      a && a.call(this, s, l, u);
    }, R.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function J(e, t) {
  var n = Ie(fe++, 3);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, R.__H.__h.push(n));
}
function xe(e, t) {
  var n = Ie(fe++, 4);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, R.__h.push(n));
}
function Xe(e) {
  return Oe = 5, re(function() {
    return { current: e };
  }, []);
}
function Rr(e, t, n) {
  Oe = 6, xe(function() {
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
  var n = Ie(fe++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Z(e, t) {
  return Oe = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = R.context[e.__c], n = Ie(fe++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(R)), t.props.value) : e.__;
}
function gt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Ir() {
  var e = Ie(fe++, 11);
  if (!e.__) {
    for (var t = R.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Fo() {
  for (var e; e = Tr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(st), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  R = null, xn && xn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Mn && Mn(e, t);
}, I.__r = function(e) {
  An && An(e), fe = 0;
  var t = (R = e.__c).__H;
  t && (At === R ? (t.__h = [], R.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(st), t.__h.forEach(Wt), t.__h = [], fe = 0)), At = R;
}, I.diffed = function(e) {
  Pn && Pn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Tr.push(t) !== 1 && In === I.requestAnimationFrame || ((In = I.requestAnimationFrame) || Ho)(Fo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), At = R = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(st), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Ln && Ln(e, t);
}, I.unmount = function(e) {
  Dn && Dn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      st(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Fn = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, n = function() {
    clearTimeout(r), Fn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Fn && (t = requestAnimationFrame(n));
}
function st(e) {
  var t = R, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), R = t;
}
function Wt(e) {
  var t = R;
  e.__c = e.__(), R = t;
}
function dn(e, t) {
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
function ye(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Uo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bo = /* @__PURE__ */ Uo(
  function(e) {
    return zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
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
function Pr(e, t) {
  var n = t(), r = L({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return xe(function() {
    o.__ = n, o.u = t, Pt(o) && i({ t: o });
  }, [e, n, t]), J(function() {
    return Pt(o) && i({ t: o }), e(function() {
      Pt(o) && i({ t: o });
    });
  }, [e]), n;
}
function Pt(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Lr(e) {
  e();
}
function Dr(e) {
  return e;
}
function Mr() {
  return [!1, Lr];
}
var Fr = xe;
function Vt(e, t) {
  this.props = e, this.context = t;
}
function Go(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, F(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Vt.prototype = new V()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Hn = C.__b;
C.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Hn && Hn(e);
};
var Wo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function jo(e) {
  function t(n) {
    var r = Ar({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Wo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Un = function(e, t) {
  return e == null ? null : ne(ne(e).map(t));
}, Vo = { map: Un, forEach: Un, count: function(e) {
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
var zn = C.unmount;
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
function ct() {
  this.__u = 0, this.o = null, this.__b = null;
}
function zr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Yo(e) {
  var t, n, r, o = null;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      s && (o = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? F(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Ue() {
  this.i = null, this.l = null;
}
C.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), zn && zn(e);
}, (ct.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = zr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Ur(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, ct.prototype.componentWillUnmount = function() {
  this.o = [];
}, ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Hr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && F(U, null, e.fallback);
  return o && (o.__u &= -33), [F(U, null, t.__a ? null : e.children), o];
};
var Bn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function qo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Xo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ue(null, t.v), t.v = null, t.h = null;
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
  ue(F(qo, { context: t.context }, e.__v), t.v);
}
function Ko(e, t) {
  var n = F(Xo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Ue.prototype = new V()).__a = function(e) {
  var t = this, n = zr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Bn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ue.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ne(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Ue.prototype.componentDidUpdate = Ue.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Bn(e, n, t);
  });
};
var Br = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Jo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ei = /[A-Z0-9]/g, ti = typeof document < "u", ni = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ri(e, t, n) {
  return t.__k == null && (t.textContent = ""), ue(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function oi(e, t, n) {
  return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Gn = C.event;
function ii() {
}
function ai() {
  return this.cancelBubble;
}
function si() {
  return this.defaultPrevented;
}
C.event = function(e) {
  return Gn && (e = Gn(e)), e.persist = ii, e.isPropagationStopped = ai, e.isDefaultPrevented = si, e.nativeEvent = e;
};
var _n, ci = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wn = C.vnode;
C.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || ti && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : l === "translate" && s === "no" ? s = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ni(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : Qo.test(a) && (a = l) : l = a = "oninput" : i && Jo.test(a) ? a = a.replace(ei, "-$&").toLowerCase() : s === null && (s = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ne(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ne(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ci)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = Br, Wn && Wn(e);
};
var jn = C.__r;
C.__r = function(e) {
  jn && jn(e), _n = e.__c;
};
var Vn = C.diffed;
C.diffed = function(e) {
  Vn && Vn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), _n = null;
};
var li = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return _n.__n[e.__c].props.value;
}, useCallback: Z, useContext: Ke, useDebugValue: gt, useDeferredValue: Dr, useEffect: J, useId: Ir, useImperativeHandle: Rr, useInsertionEffect: Fr, useLayoutEffect: xe, useMemo: re, useReducer: fn, useRef: Xe, useState: L, useSyncExternalStore: Pr, useTransition: Mr } } };
function ui(e) {
  return F.bind(null, e);
}
function Et(e) {
  return !!e && e.$$typeof === Br;
}
function fi(e) {
  return Et(e) && e.type === U;
}
function di(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function _i(e) {
  return Et(e) ? un.apply(null, arguments) : e;
}
function hi(e) {
  return !!e.__k && (ue(null, e), !0);
}
function pi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var mi = function(e, t) {
  return e(t);
}, gi = function(e, t) {
  return e(t);
}, yi = U, vi = Et, ie = { useState: L, useId: Ir, useReducer: fn, useEffect: J, useLayoutEffect: xe, useInsertionEffect: Fr, useTransition: Mr, useDeferredValue: Dr, useSyncExternalStore: Pr, startTransition: Lr, useRef: Xe, useImperativeHandle: Rr, useMemo: re, useCallback: Z, useContext: Ke, useDebugValue: gt, version: "18.3.1", Children: Vo, render: ri, hydrate: oi, unmountComponentAtNode: hi, createPortal: Ko, createElement: F, createContext: $r, createFactory: ui, cloneElement: _i, createRef: $o, Fragment: U, isValidElement: Et, isElement: vi, isFragment: fi, isMemo: di, findDOMNode: pi, Component: V, PureComponent: Vt, memo: Go, forwardRef: jo, flushSync: gi, unstable_batchedUpdates: mi, StrictMode: yi, Suspense: ct, SuspenseList: Ue, lazy: Yo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: li };
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt, Zn;
function Ei() {
  return Zn || (Zn = 1, Lt = function(t, n, r, o) {
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
  }), Lt;
}
var Si = Ei();
const wi = /* @__PURE__ */ Ci(Si);
var T = "-ms-", We = "-moz-", k = "-webkit-", Gr = "comm", St = "rule", hn = "decl", bi = "@import", Wr = "@keyframes", $i = "@layer", jr = Math.abs, pn = String.fromCharCode, Zt = Object.assign;
function Oi(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Vr(e) {
  return e.trim();
}
function ee(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, n) {
  return e.replace(t, n);
}
function lt(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function q(e) {
  return e.length;
}
function Zr(e) {
  return e.length;
}
function ze(e, t) {
  return t.push(e), e;
}
function ki(e, t) {
  return e.map(t).join("");
}
function Yn(e, t) {
  return e.filter(function(n) {
    return !ee(n, t);
  });
}
var wt = 1, Ne = 1, Yr = 0, j = 0, x = 0, Ae = "";
function bt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Ne, length: a, return: "", siblings: s };
}
function ce(e, t) {
  return Zt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function we(e) {
  for (; e.root; )
    e = ce(e.root, { children: [e] });
  ze(e, e.siblings);
}
function Ni() {
  return x;
}
function Ti() {
  return x = j > 0 ? A(Ae, --j) : 0, Ne--, x === 10 && (Ne = 1, wt--), x;
}
function Y() {
  return x = j < Yr ? A(Ae, j++) : 0, Ne++, x === 10 && (Ne = 1, wt++), x;
}
function me() {
  return A(Ae, j);
}
function ut() {
  return j;
}
function $t(e, t) {
  return ke(Ae, e, t);
}
function Yt(e) {
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
  return wt = Ne = 1, Yr = q(Ae = e), j = 0, [];
}
function Ii(e) {
  return Ae = "", e;
}
function Dt(e) {
  return Vr($t(j - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xi(e) {
  for (; (x = me()) && x < 33; )
    Y();
  return Yt(e) > 2 || Yt(x) > 3 ? "" : " ";
}
function Ai(e, t) {
  for (; --t && Y() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return $t(e, ut() + (t < 6 && me() == 32 && Y() == 32));
}
function qt(e) {
  for (; Y(); )
    switch (x) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && qt(x);
        break;
      // (
      case 40:
        e === 41 && qt(e);
        break;
      // \
      case 92:
        Y();
        break;
    }
  return j;
}
function Pi(e, t) {
  for (; Y() && e + x !== 57; )
    if (e + x === 84 && me() === 47)
      break;
  return "/*" + $t(t, j - 1) + "*" + pn(e === 47 ? e : Y());
}
function Li(e) {
  for (; !Yt(me()); )
    Y();
  return $t(e, j);
}
function Di(e) {
  return Ii(ft("", null, null, null, [""], e = Ri(e), 0, [0], e));
}
function ft(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, _ = 0, d = 0, p = 0, y = 1, E = 1, g = 1, m = 0, b = "", O = o, N = i, w = r, v = b; E; )
    switch (p = m, m = Y()) {
      // (
      case 40:
        if (p != 108 && A(v, c - 1) == 58) {
          lt(v += S(Dt(m), "&", "&\f"), "&\f", jr(u ? s[u - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        v += Dt(m);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        v += xi(p);
        break;
      // \
      case 92:
        v += Ai(ut() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            ze(Mi(Pi(Y(), ut()), t, n, l), l);
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * y:
        s[u++] = q(v) * g;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (m) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + f:
            g == -1 && (v = S(v, /\f/g, "")), d > 0 && q(v) - c && ze(d > 32 ? Xn(v + ";", r, n, c - 1, l) : Xn(S(v, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (ze(w = qn(v, t, n, u, f, o, s, b, O = [], N = [], c, i), i), m === 123)
              if (f === 0)
                ft(v, t, w, w, O, i, c, s, N);
              else
                switch (_ === 99 && A(v, 3) === 110 ? 100 : _) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, w, w, r && ze(qn(e, w, w, 0, 0, o, s, b, o, O = [], c, N), N), o, N, c, s, r ? O : N);
                    break;
                  default:
                    ft(v, w, w, w, [""], N, 0, s, N);
                }
        }
        u = f = d = 0, y = g = 1, b = v = "", c = a;
        break;
      // :
      case 58:
        c = 1 + q(v), d = p;
      default:
        if (y < 1) {
          if (m == 123)
            --y;
          else if (m == 125 && y++ == 0 && Ti() == 125)
            continue;
        }
        switch (v += pn(m), m * y) {
          // &
          case 38:
            g = f > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (q(v) - 1) * g, g = 1;
            break;
          // @
          case 64:
            me() === 45 && (v += Dt(Y())), _ = me(), f = c = q(b = v += Li(ut())), m++;
            break;
          // -
          case 45:
            p === 45 && q(v) == 2 && (y = 0);
        }
    }
  return i;
}
function qn(e, t, n, r, o, i, a, s, l, u, f, c) {
  for (var _ = o - 1, d = o === 0 ? i : [""], p = Zr(d), y = 0, E = 0, g = 0; y < r; ++y)
    for (var m = 0, b = ke(e, _ + 1, _ = jr(E = a[y])), O = e; m < p; ++m)
      (O = Vr(E > 0 ? d[m] + " " + b : S(b, /&\f/g, d[m]))) && (l[g++] = O);
  return bt(e, t, n, o === 0 ? St : s, l, u, f, c);
}
function Mi(e, t, n, r) {
  return bt(e, t, n, Gr, pn(Ni()), ke(e, 2, -2), 0, r);
}
function Xn(e, t, n, r, o) {
  return bt(e, t, n, hn, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function qr(e, t, n) {
  switch (Oi(e, t)) {
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
      return We + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + We + e + T + e + e;
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
      return k + e + T + "flex-item-" + S(e, /flex-|-self/g, "") + (ee(e, /flex-|baseline/) ? "" : T + "grid-row-" + S(e, /flex-|-self/g, "")) + e;
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
      if (!ee(e, /flex-|baseline/)) return T + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + S(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, ee(r.props, /grid-\w+-end/);
      }) ? ~lt(e + (n = n[t].value), "span", 0) ? e : T + S(e, "-start", "") + e + T + "grid-row-span:" + (~lt(n, "span", 0) ? ee(n, /\d+/) : +ee(n, /\d+/) - +ee(e, /\d+/)) + ";" : T + S(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return ee(r.props, /grid-\w+-start/);
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
      if (q(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return S(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + We + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~lt(e, "stretch", 0) ? qr(S(e, "stretch", "fill-available"), t, n) + e : e;
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
function yt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Fi(e, t, n, r) {
  switch (e.type) {
    case $i:
      if (e.children.length) break;
    case bi:
    case hn:
      return e.return = e.return || e.value;
    case Gr:
      return "";
    case Wr:
      return e.return = e.value + "{" + yt(e.children, r) + "}";
    case St:
      if (!q(e.value = e.props.join(","))) return "";
  }
  return q(n = yt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hi(e) {
  var t = Zr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ui(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function zi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hn:
        e.return = qr(e.value, e.length, n);
        return;
      case Wr:
        return yt([ce(e, { value: S(e.value, "@", "@" + k) })], r);
      case St:
        if (e.length)
          return ki(n = e.props, function(o) {
            switch (ee(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                we(ce(e, { props: [S(o, /:(read-\w+)/, ":" + We + "$1")] })), we(ce(e, { props: [o] })), Zt(e, { props: Yn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                we(ce(e, { props: [S(o, /:(plac\w+)/, ":" + k + "input-$1")] })), we(ce(e, { props: [S(o, /:(plac\w+)/, ":" + We + "$1")] })), we(ce(e, { props: [S(o, /:(plac\w+)/, T + "input-$1")] })), we(ce(e, { props: [o] })), Zt(e, { props: Yn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Bi = {
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
}, $ = {}, ve = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Xr = "active", Kr = "data-styled-version", Ot = "6.1.19", mn = `/*!sc*/
`, vt = typeof window < "u" && typeof document < "u", Gi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Kn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Wi = function(e, t) {
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
        Kn.test(a) ? (i = !1, nt.delete(r)) : o.apply(void 0, ye([a], s, !1));
      }, Xe(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (a) {
      Kn.test(a.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), Te = Object.freeze({});
function ji(e, t, n) {
  return n === void 0 && (n = Te), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Vi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zi = /(^-|-$)/g;
function Jn(e) {
  return e.replace(Vi, "-").replace(Zi, "");
}
var Yi = /(a)(d)/gi, rt = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = Qn(t % rt) + n;
  return (Qn(t % rt) + n).replace(Yi, "$1-$2");
}
var Mt, Jr = 5381, he = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Qr = function(e) {
  return he(Jr, e);
};
function eo(e) {
  return Kt(Qr(e) >>> 0);
}
function to(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ft(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var no = typeof Symbol == "function" && Symbol.for, ro = no ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, qi = no ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Xi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ki = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ji = ((Mt = {})[qi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mt[ro] = oo, Mt);
function er(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ro ? oo : "$$typeof" in e ? Ji[e.$$typeof] : Xi;
  var t;
}
var Qi = Object.defineProperty, ea = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, ta = Object.getOwnPropertyDescriptor, na = Object.getPrototypeOf, nr = Object.prototype;
function io(e, t, n) {
  if (typeof t != "string") {
    if (nr) {
      var r = na(t);
      r && r !== nr && io(e, r, n);
    }
    var o = ea(t);
    tr && (o = o.concat(tr(t)));
    for (var i = er(e), a = er(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Ki || n && n[l] || a && l in a || i && l in i)) {
        var u = ta(t, l);
        try {
          Qi(e, l, u);
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
function Jt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Re(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Re(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Qt(e[r], t[r]);
  else if (Re(t)) for (var r in t) e[r] = Qt(e[r], t[r]);
  return e;
}
function yn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ra = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function oa() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function K(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(oa.apply(void 0, ye([ra[e]], t, !1)).trim());
}
var ia = (function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(mn);
    return n;
  }, e;
})(), aa = 1 << 30, dt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), _t = 1, ot = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; Ct.has(_t); ) _t++;
  var t = _t++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > aa)) throw K(16, "".concat(t));
  return dt.set(e, t), Ct.set(t, e), t;
}, sa = function(e, t) {
  _t = t + 1, dt.set(e, t), Ct.set(t, e);
}, ca = "style[".concat(ve, "][").concat(Kr, '="').concat(Ot, '"]'), la = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ua = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, fa = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(la);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (sa(f, u), ua(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, rr = function(e) {
  for (var t = document.querySelectorAll(ca), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ve) !== Xr && (fa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function da() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ao = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ve, "]")));
    return l[l.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Xr), r.setAttribute(Kr, Ot);
  var a = da();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, _a = (function() {
  function e(t) {
    this.element = ao(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
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
})(), ha = (function() {
  function e(t) {
    this.element = ao(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), pa = (function() {
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
})(), or = vt, ma = { isServer: !vt, useCSSOMInjection: !Gi }, so = (function() {
  function e(t, n, r) {
    t === void 0 && (t = Te), n === void 0 && (n = {});
    var o = this;
    this.options = D(D({}, ma), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && vt && or && (or = !1, rr(this)), yn(this, function() {
      return (function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var _ = (function(g) {
            return Ct.get(g);
          })(c);
          if (_ === void 0) return "continue";
          var d = i.names.get(_), p = a.getGroup(c);
          if (d === void 0 || !d.size || p.length === 0) return "continue";
          var y = "".concat(ve, ".g").concat(c, '[id="').concat(_, '"]'), E = "";
          d !== void 0 && d.forEach(function(g) {
            g.length > 0 && (E += "".concat(g, ","));
          }), l += "".concat(p).concat(y, '{content:"').concat(E, '"}').concat(mn);
        }, f = 0; f < s; f++) u(f);
        return l;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && vt && rr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(D(D({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new pa(o) : r ? new _a(o) : new ha(o);
    })(this.options), new ia(t)));
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
})(), ga = /&/g, ya = /^\s*\/\/.*$/gm;
function co(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = co(n.children, t)), n;
  });
}
function lo(e) {
  var t, n, r, o = e === void 0 ? Te : e, i = o.options, a = i === void 0 ? Te : i, s = o.plugins, l = s === void 0 ? kt : s, u = function(_, d, p) {
    return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === St && _.value.includes("&") && (_.props[0] = _.props[0].replace(ga, n).replace(r, u));
  }), a.prefix && f.push(zi), f.push(Fi);
  var c = function(_, d, p, y) {
    d === void 0 && (d = ""), p === void 0 && (p = ""), y === void 0 && (y = "&"), t = y, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var E = _.replace(ya, ""), g = Di(p || d ? "".concat(p, " ").concat(d, " { ").concat(E, " }") : E);
    a.namespace && (g = co(g, a.namespace));
    var m = [];
    return yt(g, Hi(f.concat(Ui(function(b) {
      return m.push(b);
    })))), m;
  };
  return c.hash = l.length ? l.reduce(function(_, d) {
    return d.name || K(15), he(_, d.name);
  }, Jr).toString() : "", c;
}
var va = new so(), en = lo(), vn = ie.createContext({ shouldForwardProp: void 0, styleSheet: va, stylis: en });
vn.Consumer;
var Ca = ie.createContext(void 0);
function tn() {
  return Ke(vn);
}
function Ea(e) {
  var t = L(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = re(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = re(function() {
    return lo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  J(function() {
    wi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ie.createElement(vn.Provider, { value: s }, ie.createElement(Ca.Provider, { value: a }, e.children));
}
var nn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw K(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
})(), Sa = function(e) {
  return e >= "A" && e <= "Z";
};
function ir(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Sa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
}, fo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !uo(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(ir(o), ":"), i, ";") : Re(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], fo(i), !1), ["}"], !1)) : r.push("".concat(ir(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Bi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ge(e, t, n, r) {
  if (uo(e)) return [];
  if (gn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || Re(o) || o === null || console.error("".concat(to(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Re(e) ? fo(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(a) {
    return ge(a, t, n, r);
  })) : [e.toString()];
}
function wa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !gn(n)) return !1;
  }
  return !0;
}
var ba = Qr(Ot), $a = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wa(t), this.componentId = n, this.baseHash = he(ba, n), this.baseStyle = r, so.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = pe(o, this.staticRulesId);
    else {
      var i = Jt(ge(this.rules, t, n, r)), a = Kt(he(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = pe(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = he(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string") u += c, $.NODE_ENV !== "production" && (l = he(l, c));
        else if (c) {
          var _ = Jt(ge(c, t, n, r));
          l = he(l, _ + f), u += _;
        }
      }
      if (u) {
        var d = Kt(l >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(u, ".".concat(d), void 0, this.componentId)), o = pe(o, d);
      }
    }
    return o;
  }, e;
})(), Ze = ie.createContext(void 0);
Ze.Consumer;
function _o() {
  var e = Ke(Ze);
  if (!e) throw K(18);
  return e;
}
function Oa(e) {
  var t = ie.useContext(Ze), n = re(function() {
    return (function(r, o) {
      if (!r) throw K(14);
      if (Ce(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw K(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw K(8);
      return o ? D(D({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ie.createElement(Ze.Provider, { value: n }, e.children) : null;
}
var Ht = {}, ar = /* @__PURE__ */ new Set();
function ka(e, t, n) {
  var r = gn(e), o = e, i = !Ft(e), a = t.attrs, s = a === void 0 ? kt : a, l = t.componentId, u = l === void 0 ? (function(O, N) {
    var w = typeof O != "string" ? "sc" : Jn(O);
    Ht[w] = (Ht[w] || 0) + 1;
    var v = "".concat(w, "-").concat(eo(Ot + w + Ht[w]));
    return N ? "".concat(N, "-").concat(v) : v;
  })(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? (function(O) {
    return Ft(O) ? "styled.".concat(O) : "Styled(".concat(to(O), ")");
  })(e) : f, _ = t.displayName && t.componentId ? "".concat(Jn(t.displayName), "-").concat(t.componentId) : t.componentId || u, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, p = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      p = function(O, N) {
        return y(O, N) && E(O, N);
      };
    } else p = y;
  }
  var g = new $a(n, _, r ? o.componentStyle : void 0);
  function m(O, N) {
    return (function(w, v, z) {
      var B = w.attrs, Le = w.componentStyle, G = w.defaultProps, ae = w.foldedComponentIds, wn = w.styledComponentId, Eo = w.target, So = ie.useContext(Ze), wo = tn(), Tt = w.shouldForwardProp || wo.shouldForwardProp;
      $.NODE_ENV !== "production" && gt(wn);
      var bn = ji(v, So, G) || Te, Q = (function(Je, Fe, Qe) {
        for (var Ee, de = D(D({}, Fe), { className: void 0, theme: Qe }), xt = 0; xt < Je.length; xt += 1) {
          var et = Ce(Ee = Je[xt]) ? Ee(de) : Ee;
          for (var se in et) de[se] = se === "className" ? pe(de[se], et[se]) : se === "style" ? D(D({}, de[se]), et[se]) : et[se];
        }
        return Fe.className && (de.className = pe(de.className, Fe.className)), de;
      })(B, v, bn), De = Q.as || Eo, Me = {};
      for (var W in Q) Q[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && Q.theme === bn || (W === "forwardedAs" ? Me.as = Q.forwardedAs : Tt && !Tt(W, De) || (Me[W] = Q[W], Tt || $.NODE_ENV !== "development" || Bo(W) || ar.has(W) || !Xt.has(De) || (ar.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Rt = (function(Je, Fe) {
        var Qe = tn(), Ee = Je.generateAndInjectStyles(Fe, Qe.styleSheet, Qe.stylis);
        return $.NODE_ENV !== "production" && gt(Ee), Ee;
      })(Le, Q);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Rt);
      var It = pe(ae, wn);
      return Rt && (It += " " + Rt), Q.className && (It += " " + Q.className), Me[Ft(De) && !Xt.has(De) ? "class" : "className"] = It, z && (Me.ref = z), F(De, Me);
    })(b, O, N);
  }
  m.displayName = c;
  var b = ie.forwardRef(m);
  return b.attrs = d, b.componentStyle = g, b.displayName = c, b.shouldForwardProp = p, b.foldedComponentIds = r ? pe(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = _, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? (function(N) {
      for (var w = [], v = 1; v < arguments.length; v++) w[v - 1] = arguments[v];
      for (var z = 0, B = w; z < B.length; z++) Qt(N, B[z], !0);
      return N;
    })({}, o.defaultProps, O) : O;
  } }), $.NODE_ENV !== "production" && (Wi(c, _), b.warnTooManyClasses = /* @__PURE__ */ (function(O, N) {
    var w = {}, v = !1;
    return function(z) {
      if (!v && (w[z] = !0, Object.keys(w).length >= 200)) {
        var B = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(B, `.
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
  })(c, _)), yn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && io(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function sr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var cr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || Re(e)) return cr(ge(sr(kt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? ge(r) : cr(ge(sr(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = Te), !t) throw K(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Cn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, D(D({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, D(D({}, n), o));
  }, r;
}
var ho = function(e) {
  return rn(ka, e);
}, M = ho;
Xt.forEach(function(e) {
  M[e] = ho(e);
});
function Nt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Jt(Cn.apply(void 0, ye([e], t, !1))), o = eo(r);
  return new nn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ve, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const Na = 2, po = 14, Ta = 0.0276;
var te = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(te || {});
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
}, at = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Ra = {
  [H.CANDIDATE_SELECTION]: "Stay still…",
  [H.FACE_TOO_CLOSE]: "Move back",
  [H.FACE_TOO_FAR]: "Move closer",
  [H.FACE_CENTERING]: "Center your face",
  [H.FACE_NOT_PRESENT]: "Position your face into the circle",
  [H.SHARPNESS_TOO_LOW]: "Turn face against light",
  [H.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [H.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [H.DEVICE_PITCHED]: "Hold your phone at eye level",
  [H.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [H.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [H.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [H.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [H.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Ia = {
  ...Ra,
  [$e.FACE_TOO_FAR]: "Move closer to the camera",
  [$e.FACE_TOO_CLOSE]: "Move further from the camera"
}, xa = {
  [$e.FACE_TOO_CLOSE]: "Your face should fit inside the circle",
  [$e.FACE_TOO_FAR]: "Your face should fill the circle"
}, Aa = "rgba(19, 19, 19, 0.5)", Pa = 34;
function lr(e, t) {
  return Math.max(t, t + (e - 400) * Ta + 2);
}
const La = (e, t = po) => e ? e.width < e.height ? lr(e.width, t) : lr(e.height, t) : t, Da = (e) => e > te.Default ? Be[te.Default] : e > te.L ? Be[te.L] : e > te.M ? Be[te.M] : Be[te.S], Ma = (e) => e ? Da(e.width) : Be[te.Default];
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
function Ua(e) {
  if (e)
    return {
      faceCenter: e.faceCenter,
      faceSize: e.faceSize
    };
}
const je = $r(void 0);
je.displayName = "ConfigurationContext";
function Pe() {
  const e = Ke(je);
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
  const { font: r } = _o(), o = re(
    () => ({ ...t, videoElementSize: n, fontSize: La(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ h(je.Provider, { value: o, children: e });
}
const mo = ({ svgSize: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ h(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ba = M.div`
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
`, Ga = M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Wa = M.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, ht = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Pe();
  return /* @__PURE__ */ h(Ba, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ h(Ga, { children: [
    e ? /* @__PURE__ */ h(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ h(Wa, { $fontSize: o, children: r })
  ] }) });
}, go = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ h(ht, { Icon: mo, position: "relative", text: e });
class ja extends V {
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
    return this.state.hasError ? /* @__PURE__ */ h(go, { Icon: mo, isCameraReady: !1 }) : this.props.children;
  }
}
const Va = M.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Za({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return J(() => {
    Fa();
  }, []), /* @__PURE__ */ h(Ea, { target: t.styleTarget, children: /* @__PURE__ */ h(Oa, { theme: t.styling.theme, children: /* @__PURE__ */ h(Va, { children: /* @__PURE__ */ h(ja, { videoElementSize: n, children: /* @__PURE__ */ h(za, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const Ya = 0.75, qa = 2, Xa = "dot-auto-capture-video", Ka = 2e3;
function oe(e, t) {
  const n = Xe(t);
  J(() => {
    n.current = t;
  }, [t]), J(
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
  const [t, n] = L(), r = Z(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return oe(e, r), xe(() => {
    if (!t) {
      const o = document.getElementById(Xa);
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
  minimumSize: po
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
} : He, rs = (e) => Number.parseFloat(e.toFixed(3)), En = (e, t) => Math.min(e, t), os = ({ height: e, width: t }, n) => {
  const r = En(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, is = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = os(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function as(e, t) {
  const n = En(t.width, t.height);
  return rs(e * n);
}
function ss(e) {
  return is(e, Ya);
}
function cs(e, t) {
  return as(e, t) * qa;
}
const ls = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, ur = (e, t) => {
  ls(e, {
    instruction: t
  });
};
async function us() {
  return navigator.mediaDevices.enumerateDevices();
}
async function fs() {
  return (await us()).filter((t) => t.kind === "videoinput");
}
const ds = () => {
  const [e, t] = L(!1);
  return J(() => {
    (async () => (await fs()).length > 1 && t(!0))();
  }, []), e;
}, _s = ({ size: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), hs = ({ size: e }) => /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ h("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ h(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), yo = M.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ps = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ h(yo, { $marginLeft: e, ...n, children: /* @__PURE__ */ h(_s, { size: t }) }), ms = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ h(yo, { $marginLeft: e, ...n, children: /* @__PURE__ */ h(hs, { size: t }) }), gs = M.div`
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
  } = Pe(), o = ds();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Ma(r);
  return /* @__PURE__ */ h(gs, { $padding: i, children: [
    o && /* @__PURE__ */ h(ms, { disabled: t, onClick: () => {
      ur(e, Tn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ h(
      ps,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          ur(e, Tn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, vs = "2.5s", Cs = "0.3s", Es = "linear", Ss = Nt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Nt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Nt`
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
Nt`
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
const ws = M.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cn`
      animation: ${Ss} ${Cs}
        ${Es} both;
      animation-delay: ${vs};

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

  transform: translateY(
    ${(e) => e.$cssTop || e.$isPortrait ? "-50%" : e.$isPortrait ? "" : "50%"}
  );
  z-index: 2;
`, bs = M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  width: max-content;
  max-width: 90%;
  background: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.instructionColorSuccess}` : `${e.theme.colors.instructionColor}`};
  color: ${(e) => e.theme.colors.instructionTextColor};
  border: 0;
  line-height: 1em;
  font-size: ${(e) => `${e.$fontSize}px`};
  white-space: ${(e) => e.$wrap ? "break-spaces" : "nowrap"};
`, $s = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Pe();
  return /* @__PURE__ */ h(ws, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ h(
    bs,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Pa,
      children: e
    }
  ) });
}, Os = M.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, fr = ({ svgSize: e }) => /* @__PURE__ */ h(Os, { children: /* @__PURE__ */ h("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ks = M.div`
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
`, vo = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Pe(), i = En(r, t);
  return /* @__PURE__ */ h(ks, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ h("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ h("defs", { children: /* @__PURE__ */ h("mask", { id: "mask", children: [
      /* @__PURE__ */ h("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ h("g", { children: e })
    ] }) }),
    /* @__PURE__ */ h("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ns({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Pe(), i = r === P.ERROR || r === P.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === P.WAITING || r === P.COMPLETE ? /* @__PURE__ */ h(U, { children: [
    n && e && t && /* @__PURE__ */ h(vo, { height: e, width: t }),
    /* @__PURE__ */ h(ht, { isCameraReady: !0, text: o[P.WAITING].text })
  ] }) : r === P.BLURRED ? /* @__PURE__ */ h(U, { children: /* @__PURE__ */ h(ht, { Icon: fr, isCameraReady: !0, text: o[P.BLURRED].text }) }) : /* @__PURE__ */ h(ht, { Icon: fr, isCameraReady: !0, text: o[P.LOADING].text });
}
function Ts({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ h("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const Rs = M.div`
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
  Rs,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
);
function xs({
  backdropHeight: e,
  backdropWidth: t,
  children: n,
  placeholderRectangle: r,
  scale: o,
  ...i
}) {
  return /* @__PURE__ */ h(U, { children: [
    /* @__PURE__ */ h(vo, { height: e, scale: o, width: t, children: /* @__PURE__ */ h(
      Ts,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ h(Is, { placeholderRectangle: r, scale: o, ...i, children: n })
  ] });
}
const As = 480, Sn = 18, Co = 6.5;
function dr(e, t, n, r) {
  const o = (r - 90) * Math.PI / 180;
  return { x: e + n * Math.cos(o), y: t + n * Math.sin(o) };
}
function Ps(e, t, n, r, o) {
  const i = Math.max(0.01, o - r), a = dr(e, t, n, r), s = dr(e, t, n, r + i), l = i > 180 ? 1 : 0;
  return `M ${a.x} ${a.y} A ${n} ${n} 0 ${l} 1 ${s.x} ${s.y}`;
}
function Ls(e, t, n, r) {
  const o = 360 / e, i = Co / 2;
  return Array.from(
    { length: e },
    (a, s) => Ps(t, n, r, s * o + i, (s + 1) * o - i)
  );
}
const Ds = M.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
`, Ms = M.path`
  fill: none;
  stroke: ${(e) => e.theme.colors.placeholderColor};
  opacity: 0.3;
  stroke-width: ${Sn};
  stroke-linecap: round;
`, Fs = M.path`
  fill: none;
  stroke: ${(e) => e.theme.colors.placeholderColorSuccess};
  stroke-width: ${Sn};
  stroke-linecap: round;
  transition: stroke-dashoffset ${Ka}ms linear;
`;
function Hs({
  challengeCount: e,
  currentChallengeIndex: t,
  isInCandidateSelection: n,
  size: r = As
}) {
  if (e <= 0)
    return null;
  const o = r / 2, i = r / 2, a = (r - Sn) / 2, s = 360 / e - Co, l = a * s * Math.PI / 180, u = `${l} ${l}`, f = Ls(e, o, i, a);
  return /* @__PURE__ */ h(
    Ds,
    {
      "aria-valuemax": e,
      "aria-valuemin": 0,
      "aria-valuenow": t,
      role: "progressbar",
      viewBox: `0 0 ${r} ${r}`,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        f.map((c, _) => /* @__PURE__ */ h(Ms, { d: c }, `t${_}`)),
        f.map((c, _) => {
          const p = _ < t || _ === t && n ? 0 : l;
          return /* @__PURE__ */ h(Fs, { d: c, "stroke-dasharray": u, "stroke-dashoffset": p }, `a${_}`);
        })
      ]
    }
  );
}
const Us = /* @__PURE__ */ new Map([
  [Se.ZERO, { minFaceSizeRatio: 0.13, maxFaceSizeRatio: 0.15, scale: 0.85 }],
  [Se.ONE, { minFaceSizeRatio: 0.152, maxFaceSizeRatio: 0.172, scale: 1 }],
  [Se.TWO, { minFaceSizeRatio: 0.18, maxFaceSizeRatio: 0.205, scale: 1.18 }],
  [Se.THREE, { minFaceSizeRatio: 0.215, maxFaceSizeRatio: 0.24, scale: 1.41 }],
  [Se.FOUR, { minFaceSizeRatio: 0.245, maxFaceSizeRatio: 0.275, scale: 1.61 }],
  [Se.FIVE, { minFaceSizeRatio: 0.28, maxFaceSizeRatio: 0.34, scale: 1.84 }]
]);
function zs({
  customEvents: e,
  defaultInstructionCode: t
}) {
  const [n, r] = L(), [o, i] = L(!1), a = Z(
    (y) => {
      r(y?.detail?.cameraResolution);
      const E = y?.detail?.isMirroring;
      E !== void 0 && i(E);
    },
    [r]
  );
  oe(e.CAMERA_PROPS_CHANGED, a);
  const [s, l] = L({
    code: t,
    isEscalated: !1
  }), u = Z(
    (y) => {
      const E = y;
      l({
        code: E?.detail?.instructionCode,
        isEscalated: E?.detail?.isEscalated ?? !1
      });
    },
    [l]
  );
  oe(e.INSTRUCTION_CHANGED, u);
  const [f, c] = L(P.LOADING), [_, d] = L(), p = Z(
    (y) => {
      c(y.detail?.appState);
      const E = y?.detail?.error;
      E && d(E);
    },
    [c, d]
  );
  return oe(e.STATE_CHANGED, p), {
    cameraResolution: n,
    instruction: s,
    isMirroring: o,
    appState: f,
    error: _
  };
}
function Bs() {
  const e = zs({
    customEvents: le,
    defaultInstructionCode: $e.FACE_NOT_PRESENT
  }), [t, n] = L(1), r = Z((o) => {
    const i = o, { detail: a } = i;
    if (!a)
      return;
    const s = a.challengeSequence[a.currentChallengeIndex];
    n(Us.get(s)?.scale ?? 1);
  }, []);
  return oe(le.CHALLENGE_VALUE_CHANGED, r), J(() => {
    e.appState !== P.RUNNING && n(1);
  }, [e.appState]), {
    ...e,
    faceScale: t
  };
}
function Gs() {
  const [e, t] = L([]), [n, r] = L(0), [o, i] = L(!1), a = Z((u) => {
    const f = u, { detail: c } = f;
    c && (t(c.challengeSequence), r(c.currentChallengeIndex), i(!1));
  }, []), s = Z((u) => {
    const f = u, { detail: c } = f;
    c && i(c.instructionCode === $e.CANDIDATE_SELECTION);
  }, []), l = Z((u) => {
    u.detail?.appState !== P.RUNNING && (t([]), i(!1));
  }, []);
  return oe(le.CHALLENGE_VALUE_CHANGED, a), oe(le.INSTRUCTION_CHANGED, s), oe(le.STATE_CHANGED, l), {
    challengeCount: e.length,
    currentChallengeIndex: n,
    isInCandidateSelection: o
  };
}
const Ws = M.canvas`
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
function Vs({ cameraResolution: e, isImageMirror: t }) {
  const n = Xe(null), r = _o(), [o, i] = L(), a = Z(
    (s) => {
      i(s?.detail?.detectionDetails?.processedImage?.detection);
    },
    [i]
  );
  return oe(le.DETECTION_CHANGED, a), J(() => {
    if (!n.current)
      return;
    const s = { width: e.width, height: e.height }, l = Ua(o), u = (f, c) => {
      if (!c)
        return;
      const { faceCenter: _, faceSize: d } = c, p = n?.current?.getContext("2d");
      if (!p)
        return;
      const y = cs(d, f);
      p.beginPath(), p.arc(_.x, _.y, y, 0, 2 * Math.PI, !1), p.lineWidth = Na, p.strokeStyle = r.colors.placeholderColor, p.stroke();
    };
    n.current.width = s.width, n.current.height = s.height, js(n.current), u(s, l);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ h(Ws, { ref: n, $isImageMirror: t });
}
function Zs() {
  const {
    appState: e,
    cameraResolution: t,
    error: n,
    faceScale: r,
    instruction: o,
    isMirroring: i
  } = Bs(), { challengeCount: a, currentChallengeIndex: s, isInCandidateSelection: l } = Gs(), {
    control: { showDetectionLayer: u },
    escalatedInstructions: f,
    instructions: c
  } = Pe(), _ = Ha({
    escalatedInstructions: f,
    instructions: c,
    currentInstruction: {
      ...o,
      code: o.code
    }
  });
  if (e === P.ERROR)
    return /* @__PURE__ */ h(go, { text: n?.message });
  if (e === P.RUNNING && t) {
    const d = ss(t);
    return /* @__PURE__ */ h(U, { children: [
      u && /* @__PURE__ */ h(Vs, { cameraResolution: t, isImageMirror: i }),
      /* @__PURE__ */ h(
        xs,
        {
          backdropHeight: t.height,
          backdropWidth: t.width,
          isInCandidateSelection: l,
          placeholderRectangle: d,
          scale: r,
          children: /* @__PURE__ */ h(
            Hs,
            {
              challengeCount: a,
              currentChallengeIndex: s,
              isInCandidateSelection: l
            }
          )
        }
      ),
      _ && /* @__PURE__ */ h(
        $s,
        {
          cssBottom: (d.height + d.shiftY) * 100,
          isInCandidateSelection: l,
          isPortrait: t.width < t.height,
          children: _
        }
      ),
      /* @__PURE__ */ h(
        ys,
        {
          customControlEvent: le.CONTROL,
          isSwitchCameraDisabled: l
        }
      )
    ] });
  }
  return /* @__PURE__ */ h(
    Ns,
    {
      cameraHeight: t?.height,
      cameraWidth: t?.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function Ys(e) {
  const t = { ...Ia, ...e?.instructions }, n = {
    ...xa,
    ...e?.escalatedInstructions
  }, r = {
    [P.LOADING]: {
      ...at.loading,
      ...e?.appStateInstructions?.loading
    },
    [P.WAITING]: {
      ...at.waiting,
      ...e?.appStateInstructions?.waiting
    },
    [P.COMPLETE]: {
      ...at.waiting,
      ...e?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [P.BLURRED]: {
      ...at.loading,
      ...e?.appStateInstructions?.loading
    }
  }, o = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Aa,
    theme: ns(e?.styling?.theme)
  }, i = {
    showCameraButtons: e?.control?.showCameraButtons ?? !1,
    showDetectionLayer: e?.control?.showDetectionLayer ?? !0
  };
  return {
    instructions: t,
    appStateInstructions: r,
    styling: o,
    control: i,
    escalatedInstructions: n
  };
}
function qs({ configuration: e }) {
  const t = Ja(le.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ h(Za, { uiConfiguration: Ys(e), videoElementSize: t, children: /* @__PURE__ */ h(Zs, {}) });
}
xo(qs, "x-dot-multi-range-liveness-ui", ["configuration"]);
