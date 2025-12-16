var Xe, v, hr, ue, On, mr, gr, yr, sn, Ht, Ft, vr, Ge = {}, Cr = [], So = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ke = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function cn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function M(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return ze(e, a, r, o, null);
}
function ze(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++hr, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function bo() {
  return { current: null };
}
function V(e) {
  return e.children;
}
function j(e, t) {
  this.props = e, this.context = t;
}
function Se(e, t) {
  if (t == null) return e.__ ? Se(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Se(e) : null;
}
function Er(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Er(e);
  }
}
function Ut(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ht.__r++ || On != v.debounceRendering) && ((On = v.debounceRendering) || mr)(ht);
}
function ht() {
  for (var e, t, n, r, o, i, a, c = 1; ue.length; ) ue.length > c && ue.sort(gr), e = ue.shift(), c = ue.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), ln(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Se(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, br(i, n, a), n.__e != o && Er(n)));
  ht.__r = 0;
}
function wr(e, t, n, r, o, i, a, c, s, u, f) {
  var l, p, _, g, w, $, m = r && r.__k || Cr, h = t.length;
  for (s = $o(n, t, m, s, h), l = 0; l < h; l++) (_ = n.__k[l]) != null && (p = _.__i == -1 ? Ge : m[_.__i] || Ge, _.__i = l, $ = ln(e, _, p, o, i, a, c, s, u, f), g = _.__e, _.ref && p.ref != _.ref && (p.ref && un(p.ref, null, _), f.push(_.ref, _.__c || g, _)), w == null && g != null && (w = g), 4 & _.__u || p.__k === _.__k ? s = Sr(_, s, e) : typeof _.type == "function" && $ !== void 0 ? s = $ : g && (s = g.nextSibling), _.__u &= -7);
  return n.__e = w, s;
}
function $o(e, t, n, r, o) {
  var i, a, c, s, u, f = n.length, l = f, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (s = i + p, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? ze(null, a, null, null, null) : Ke(a) ? ze(V, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? ze(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, c = null, (u = a.__i = ko(a, n, s, l)) != -1 && (l--, (c = n[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > f ? p-- : o < f && p++), typeof a.type != "function" && (a.__u |= 4)) : u != s && (u == s - 1 ? p-- : u == s + 1 ? p++ : (u > s ? p-- : p++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < f; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = Se(c)), kr(c, c));
  return r;
}
function Sr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Sr(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = Se(e)), n.insertBefore(e.__e, t || null), t = e.__e);
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
function ko(e, t, n, r) {
  var o, i, a = e.key, c = e.type, s = t[n];
  if (s === null && e.key == null || s && a == s.key && c == s.type && (2 & s.__u) == 0) return n;
  if (r > (s != null && (2 & s.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((s = t[o]) && (2 & s.__u) == 0 && a == s.key && c == s.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((s = t[i]) && (2 & s.__u) == 0 && a == s.key && c == s.type) return i;
      i++;
    }
  }
  return -1;
}
function Nn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || So.test(t) ? n : n + "px";
}
function rt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Nn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Nn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(yr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = sn, e.addEventListener(t, i ? Ft : Ht, i)) : e.removeEventListener(t, i ? Ft : Ht, i);
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
function Tn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = sn++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function ln(e, t, n, r, o, i, a, c, s, u) {
  var f, l, p, _, g, w, $, m, h, k, S, N, E, y, F, U, Pe, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (s = !!(32 & n.__u), i = [c = t.__e = n.__e]), (f = v.__b) && f(t);
  e: if (typeof B == "function") try {
    if (m = t.props, h = "prototype" in B && B.prototype.render, k = (f = B.contextType) && r[f.__c], S = f ? k ? k.props.value : f.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (h ? t.__c = l = new B(m, S) : (t.__c = l = new j(m, S), l.constructor = B, l.render = No), k && k.sub(l), l.props = m, l.state || (l.state = {}), l.context = S, l.__n = r, p = l.__d = !0, l.__h = [], l._sb = []), h && l.__s == null && (l.__s = l.state), h && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, B.getDerivedStateFromProps(m, l.__s))), _ = l.props, g = l.state, l.__v = t, p) h && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), h && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (h && B.getDerivedStateFromProps == null && m !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, S), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, S) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ce) {
          ce && (ce.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, S), h && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, g, w);
      });
    }
    if (l.context = S, l.props = m, l.__P = e, l.__e = !1, E = v.__r, y = 0, h) {
      for (l.state = l.__s, l.__d = !1, E && E(t), f = l.render(l.props, l.state, l.context), F = 0; F < l._sb.length; F++) l.__h.push(l._sb[F]);
      l._sb = [];
    } else do
      l.__d = !1, E && E(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = Z(Z({}, r), l.getChildContext())), h && !p && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(_, g)), U = f, f != null && f.type === V && f.key == null && (U = $r(f.props.children)), c = wr(e, Ke(U) ? U : [U], t, n, r, o, i, a, c, s, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
  } catch (ce) {
    if (t.__v = null, s || i != null) if (ce.then) {
      for (t.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (Pe = i.length; Pe--; ) cn(i[Pe]);
    else t.__e = n.__e, t.__k = n.__k;
    v.__e(ce, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : c = t.__e = Oo(n.__e, t, n, r, o, i, a, s, u);
  return (f = v.diffed) && f(t), 128 & t.__u ? void 0 : c;
}
function br(e, t, n) {
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
function $r(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ke(e) ? e.map($r) : Z({}, e);
}
function Oo(e, t, n, r, o, i, a, c, s) {
  var u, f, l, p, _, g, w, $ = n.props, m = t.props, h = t.type;
  if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!h && (h ? _.localName == h : _.nodeType == 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (h == null) return document.createTextNode(m);
    e = document.createElementNS(o, h, m.is && m), c && (v.__m && v.__m(t, i), c = !1), i = null;
  }
  if (h == null) $ === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && Xe.call(e.childNodes), $ = n.props || Ge, !c && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        rt(e, u, null, _, o);
      }
    }
    for (u in m) _ = m[u], u == "children" ? p = _ : u == "dangerouslySetInnerHTML" ? f = _ : u == "value" ? g = _ : u == "checked" ? w = _ : c && typeof _ != "function" || $[u] === _ || rt(e, u, _, $[u], o);
    if (f) c || l && (f.__html == l.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), wr(t.type == "template" ? e.content : e, Ke(p) ? p : [p], t, n, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Se(n, 0), c, s), i != null) for (u = i.length; u--; ) cn(i[u]);
    c || (u = "value", h == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || h == "progress" && !g || h == "option" && g != $[u]) && rt(e, u, g, $[u], o), u = "checked", w != null && w != e[u] && rt(e, u, w, $[u], o));
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
function kr(e, t, n) {
  var r, o;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || un(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && kr(r[o], t, n || typeof e.type != "function");
  n || cn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function No(e, t, n) {
  return this.constructor(e, n);
}
function ie(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], ln(t, e = (!r && n || t).__k = M(V, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Xe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), br(i, e, a);
}
function fn(e, t) {
  ie(e, t, fn);
}
function dn(e, t, n) {
  var r, o, i, a, c = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), ze(e.type, c, r || e.key, o || e.ref, null);
}
function Or(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(a) {
        a.__e = !0, Ut(a);
      });
    }, this.sub = function(i) {
      r.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), a && a.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + vr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Xe = Cr.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, hr = 0, j.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, j.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, j.prototype.render = V, ue = [], mr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, gr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, yr = /(PointerCapture)$|Capture$/i, sn = 0, Ht = Tn(!1), Ft = Tn(!0), vr = 0;
function _n() {
  return (_n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var To = ["context", "children"];
function xo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, c = {}, s = Object.keys(r);
    for (a = 0; a < s.length; a++) o.indexOf(i = s[a]) >= 0 || (c[i] = r[i]);
    return c;
  }(e, To);
  return dn(t, n);
}
function Io() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = M(xo, _n({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, c = n.attributes, s = n.childNodes;
    for (a = c.length; a--; ) c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[Nr(c[a].name)] = c[a].value);
    for (a = s.length; a--; ) {
      var u = t(s[a], null), f = s[a].slot;
      f ? i[f] = M(xn, { name: f }, u) : o[a] = u;
    }
    var l = r ? M(xn, null, o) : o;
    return M(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? fn : ie)(this._vdom, this._root);
}
function Nr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ao(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Nr(e)] = n, this._vdom = dn(this._vdom, r), ie(this._vdom, this._root);
  }
}
function Ro() {
  ie(this._vdom = null, this._root);
}
function xn(e, t) {
  var n = this;
  return M("slot", _n({}, e, { ref: function(r) {
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
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Io, o.prototype.attributeChangedCallback = Ao, o.prototype.disconnectedCallback = Ro, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Lo = 0;
function d(e, t, n, r, o, i) {
  t || (t = {});
  var a, c, s = t;
  if ("ref" in s) for (c in s = {}, t) c == "ref" ? a = t[c] : s[c] = t[c];
  var u = { type: e, props: s, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Lo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) s[c] === void 0 && (s[c] = a[c]);
  return v.vnode && v.vnode(u), u;
}
const In = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var be = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTION_CHANGED = "face-auto-capture:detection-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(be || {}), pn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.CONTROL = "magnifeye-auto-capture:control", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(pn || {});
const Do = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  RUNNING: "running",
  COMPLETE: "complete"
}, Bt = {
  ...Do,
  DONE: "done"
}, An = {
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
  LEFT_EYE_NOT_PRESENT: `left_${An.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${An.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Ve = {
  ...P,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Ye = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Ye || {});
const we = Bt;
var ae, x, It, Rn, $e = 0, Tr = [], I = v, Pn = I.__b, Ln = I.__r, Dn = I.diffed, Mn = I.__c, Hn = I.unmount, Fn = I.__;
function xe(e, t) {
  I.__h && I.__h(x, e, $e || t), $e = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return $e = 1, hn(Ar, e);
}
function hn(e, t, n) {
  var r = xe(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ar(void 0, t), function(c) {
    var s = r.__N ? r.__N[0] : r.__[0], u = r.t(s, c);
    s !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.__f)) {
    var o = function(c, s, u) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, c, s, u);
      var l = r.__c.props !== c;
      return f.forEach(function(p) {
        if (p.__N) {
          var _ = p.__[0];
          p.__ = p.__N, p.__N = void 0, _ !== p.__[0] && (l = !0);
        }
      }), i && i.call(this, c, s, u) || l;
    };
    x.__f = !0;
    var i = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(c, s, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, s, u), i = f;
      }
      a && a.call(this, c, s, u);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function X(e, t) {
  var n = xe(ae++, 3);
  !I.__s && mn(n.__H, t) && (n.__ = e, n.u = t, x.__H.__h.push(n));
}
function Ie(e, t) {
  var n = xe(ae++, 4);
  !I.__s && mn(n.__H, t) && (n.__ = e, n.u = t, x.__h.push(n));
}
function Je(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function xr(e, t, n) {
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
  var n = xe(ae++, 7);
  return mn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function he(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Qe(e) {
  var t = x.context[e.__c], n = xe(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function mt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Ir() {
  var e = xe(ae++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Mo() {
  for (var e; e = Tr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ct), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  x = null, Pn && Pn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Fn && Fn(e, t);
}, I.__r = function(e) {
  Ln && Ln(e), ae = 0;
  var t = (x = e.__c).__H;
  t && (It === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(ct), t.__h.forEach(zt), t.__h = [], ae = 0)), It = x;
}, I.diffed = function(e) {
  Dn && Dn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Tr.push(t) !== 1 && Rn === I.requestAnimationFrame || ((Rn = I.requestAnimationFrame) || Ho)(Mo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), It = x = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ct), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Mn && Mn(e, t);
}, I.unmount = function(e) {
  Hn && Hn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ct(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Un = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, n = function() {
    clearTimeout(r), Un && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Un && (t = requestAnimationFrame(n));
}
function ct(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function zt(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function mn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ar(e, t) {
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
function Fo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Uo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bo = /* @__PURE__ */ Fo(
  function(e) {
    return Uo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Rr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Wt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Pr(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, At(o) && i({ t: o });
  }, [e, n, t]), X(function() {
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
function Lr(e) {
  e();
}
function Dr(e) {
  return e;
}
function Mr() {
  return [!1, Lr];
}
var Hr = Ie;
function jt(e, t) {
  this.props = e, this.context = t;
}
function zo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Wt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, M(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(jt.prototype = new j()).isPureReactComponent = !0, jt.prototype.shouldComponentUpdate = function(e, t) {
  return Wt(this.props, e) || Wt(this.state, t);
};
var Bn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Bn && Bn(e);
};
var Wo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function jo(e) {
  function t(n) {
    var r = Rr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Wo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var zn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Go = { map: zn, forEach: zn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Vo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Vo(e, t, n, r);
};
var Wn = v.unmount;
function Fr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Rr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Fr(r, t, n);
  })), e;
}
function Ur(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ur(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function lt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Br(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Yo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r) throw r;
    if (!n) throw t;
    return M(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Fe() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Wn && Wn(e);
}, (lt.prototype = new j()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Br(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var s = r.state.__a;
        r.__v.__k[0] = Ur(s, s.__c.__P, s.__c.__O);
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
      this.__v.__k[0] = Fr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && M(V, null, e.fallback);
  return o && (o.__u &= -33), [M(V, null, t.__a ? null : e.children), o];
};
var jn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Zo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ie(null, t.v), t.v = null, t.h = null;
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
  ie(M(Zo, { context: t.context }, e.__v), t.v);
}
function Xo(e, t) {
  var n = M(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new j()).__a = function(e) {
  var t = this, n = Br(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), jn(t, e, r)) : o();
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
    jn(e, n, t);
  });
};
var zr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qo = /[A-Z0-9]/g, ei = typeof document < "u", ti = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, n) {
  return t.__k == null && (t.textContent = ""), ie(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ri(e, t, n) {
  return fn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(j.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Gn = v.event;
function oi() {
}
function ii() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Gn && (e = Gn(e)), e.persist = oi, e.isPropagationStopped = ii, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var gn, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Vn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var c = n[a];
      if (!(a === "value" && "defaultValue" in n && c == null || ei && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var s = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : s === "translate" && c === "no" ? c = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || ti(n.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : Jo.test(a) && (a = s) : s = a = "oninput" : i && Ko.test(a) ? a = a.replace(Qo, "-$&").toLowerCase() : c === null && (c = void 0), s === "oninput" && o[a = s] && (a = "oninputCapture"), o[a] = c;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = zr, Vn && Vn(e);
};
var Yn = v.__r;
v.__r = function(e) {
  Yn && Yn(e), gn = e.__c;
};
var Zn = v.diffed;
v.diffed = function(e) {
  Zn && Zn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), gn = null;
};
var ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return gn.__n[e.__c].props.value;
}, useCallback: he, useContext: Qe, useDebugValue: mt, useDeferredValue: Dr, useEffect: X, useId: Ir, useImperativeHandle: xr, useInsertionEffect: Hr, useLayoutEffect: Ie, useMemo: te, useReducer: hn, useRef: Je, useState: H, useSyncExternalStore: Pr, useTransition: Mr } } };
function li(e) {
  return M.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === zr;
}
function ui(e) {
  return Ct(e) && e.type === V;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function di(e) {
  return Ct(e) ? dn.apply(null, arguments) : e;
}
function _i(e) {
  return !!e.__k && (ie(null, e), !0);
}
function pi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var hi = function(e, t) {
  return e(t);
}, mi = function(e, t) {
  return e(t);
}, gi = V, yi = Ct, ne = { useState: H, useId: Ir, useReducer: hn, useEffect: X, useLayoutEffect: Ie, useInsertionEffect: Hr, useTransition: Mr, useDeferredValue: Dr, useSyncExternalStore: Pr, startTransition: Lr, useRef: Je, useImperativeHandle: xr, useMemo: te, useCallback: he, useContext: Qe, useDebugValue: mt, version: "18.3.1", Children: Go, render: ni, hydrate: ri, unmountComponentAtNode: _i, createPortal: Xo, createElement: M, createContext: Or, createFactory: li, cloneElement: di, createRef: bo, Fragment: V, isValidElement: Ct, isElement: yi, isFragment: ui, isMemo: fi, findDOMNode: pi, Component: j, PureComponent: jt, memo: zo, forwardRef: jo, flushSync: mi, unstable_batchedUpdates: hi, StrictMode: gi, Suspense: lt, SuspenseList: Fe, lazy: Yo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ci };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt, qn;
function Ci() {
  return qn || (qn = 1, Rt = function(t, n, r, o) {
    var i = r ? r.call(o, t, n) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === n)
      return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
      return !1;
    var a = Object.keys(t), c = Object.keys(n);
    if (a.length !== c.length)
      return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(n), u = 0; u < a.length; u++) {
      var f = a[u];
      if (!s(f))
        return !1;
      var l = t[f], p = n[f];
      if (i = r ? r.call(o, l, p, f) : void 0, i === !1 || i === void 0 && l !== p)
        return !1;
    }
    return !0;
  }), Rt;
}
var Ei = Ci();
const wi = /* @__PURE__ */ vi(Ei);
var T = "-ms-", We = "-moz-", O = "-webkit-", Wr = "comm", Et = "rule", yn = "decl", Si = "@import", jr = "@keyframes", bi = "@layer", Gr = Math.abs, vn = String.fromCharCode, Gt = Object.assign;
function $i(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Vr(e) {
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
function Yr(e) {
  return e.length;
}
function Ue(e, t) {
  return t.push(e), e;
}
function ki(e, t) {
  return e.map(t).join("");
}
function Xn(e, t) {
  return e.filter(function(n) {
    return !J(n, t);
  });
}
var wt = 1, Oe = 1, Zr = 0, W = 0, A = 0, Ae = "";
function St(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Oe, length: a, return: "", siblings: c };
}
function oe(e, t) {
  return Gt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = oe(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Oi() {
  return A;
}
function Ni() {
  return A = W > 0 ? R(Ae, --W) : 0, Oe--, A === 10 && (Oe = 1, wt--), A;
}
function G() {
  return A = W < Zr ? R(Ae, W++) : 0, Oe++, A === 10 && (Oe = 1, wt++), A;
}
function _e() {
  return R(Ae, W);
}
function ft() {
  return W;
}
function bt(e, t) {
  return ke(Ae, e, t);
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
function Ti(e) {
  return wt = Oe = 1, Zr = Y(Ae = e), W = 0, [];
}
function xi(e) {
  return Ae = "", e;
}
function Pt(e) {
  return Vr(bt(W - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ii(e) {
  for (; (A = _e()) && A < 33; )
    G();
  return Vt(e) > 2 || Vt(A) > 3 ? "" : " ";
}
function Ai(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return bt(e, ft() + (t < 6 && _e() == 32 && G() == 32));
}
function Yt(e) {
  for (; G(); )
    switch (A) {
      // ] ) " '
      case e:
        return W;
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
        G();
        break;
    }
  return W;
}
function Ri(e, t) {
  for (; G() && e + A !== 57; )
    if (e + A === 84 && _e() === 47)
      break;
  return "/*" + bt(t, W - 1) + "*" + vn(e === 47 ? e : G());
}
function Pi(e) {
  for (; !Vt(_e()); )
    G();
  return bt(e, W);
}
function Li(e) {
  return xi(dt("", null, null, null, [""], e = Ti(e), 0, [0], e));
}
function dt(e, t, n, r, o, i, a, c, s) {
  for (var u = 0, f = 0, l = a, p = 0, _ = 0, g = 0, w = 1, $ = 1, m = 1, h = 0, k = "", S = o, N = i, E = r, y = k; $; )
    switch (g = h, h = G()) {
      // (
      case 40:
        if (g != 108 && R(y, l - 1) == 58) {
          ut(y += C(Pt(h), "&", "&\f"), "&\f", Gr(u ? c[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Pt(h);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ii(g);
        break;
      // \
      case 92:
        y += Ai(ft() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Ue(Di(Ri(G(), ft()), t, n, s), s);
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
        switch (h) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + f:
            m == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - l && Ue(_ > 32 ? Jn(y + ";", r, n, l - 1, s) : Jn(C(y, " ", "") + ";", r, n, l - 2, s), s);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Ue(E = Kn(y, t, n, u, f, o, c, k, S = [], N = [], l, i), i), h === 123)
              if (f === 0)
                dt(y, t, E, E, S, i, l, c, N);
              else
                switch (p === 99 && R(y, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dt(e, E, E, r && Ue(Kn(e, E, E, 0, 0, o, c, k, o, S = [], l, N), N), o, N, l, c, r ? S : N);
                    break;
                  default:
                    dt(y, E, E, E, [""], N, 0, c, N);
                }
        }
        u = f = _ = 0, w = m = 1, k = y = "", l = a;
        break;
      // :
      case 58:
        l = 1 + Y(y), _ = g;
      default:
        if (w < 1) {
          if (h == 123)
            --w;
          else if (h == 125 && w++ == 0 && Ni() == 125)
            continue;
        }
        switch (y += vn(h), h * w) {
          // &
          case 38:
            m = f > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Y(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            _e() === 45 && (y += Pt(G())), p = _e(), f = l = Y(k = y += Pi(ft())), h++;
            break;
          // -
          case 45:
            g === 45 && Y(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Kn(e, t, n, r, o, i, a, c, s, u, f, l) {
  for (var p = o - 1, _ = o === 0 ? i : [""], g = Yr(_), w = 0, $ = 0, m = 0; w < r; ++w)
    for (var h = 0, k = ke(e, p + 1, p = Gr($ = a[w])), S = e; h < g; ++h)
      (S = Vr($ > 0 ? _[h] + " " + k : C(k, /&\f/g, _[h]))) && (s[m++] = S);
  return St(e, t, n, o === 0 ? Et : c, s, u, f, l);
}
function Di(e, t, n, r) {
  return St(e, t, n, Wr, vn(Oi()), ke(e, 2, -2), 0, r);
}
function Jn(e, t, n, r, o) {
  return St(e, t, n, yn, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function qr(e, t, n) {
  switch ($i(e, t)) {
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
            return ~ut(e, "stretch", 0) ? qr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, s, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (c ? s : +s - +i) + u : "") + e;
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
function gt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Mi(e, t, n, r) {
  switch (e.type) {
    case bi:
      if (e.children.length) break;
    case Si:
    case yn:
      return e.return = e.return || e.value;
    case Wr:
      return "";
    case jr:
      return e.return = e.value + "{" + gt(e.children, r) + "}";
    case Et:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = gt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hi(e) {
  var t = Yr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function Fi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ui(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case yn:
        e.return = qr(e.value, e.length, n);
        return;
      case jr:
        return gt([oe(e, { value: C(e.value, "@", "@" + O) })], r);
      case Et:
        if (e.length)
          return ki(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(oe(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), Ee(oe(e, { props: [o] })), Gt(e, { props: Xn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(oe(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Ee(oe(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), Ee(oe(e, { props: [C(o, /:(plac\w+)/, T + "input-$1")] })), Ee(oe(e, { props: [o] })), Gt(e, { props: Xn(n, r) });
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
}, b = {}, ge = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Xr = "active", Kr = "data-styled-version", $t = "6.1.18", Cn = `/*!sc*/
`, yt = typeof window < "u" && typeof document < "u", zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Qn = /invalid hook call/i, ot = /* @__PURE__ */ new Set(), Wi = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], s = 1; s < arguments.length; s++) c[s - 1] = arguments[s];
        Qn.test(a) ? (i = !1, ot.delete(r)) : o.apply(void 0, me([a], c, !1));
      }, Je(), i && !ot.has(r) && (console.warn(r), ot.add(r));
    } catch (a) {
      Qn.test(a.message) && ot.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), Ne = Object.freeze({});
function ji(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function er(e) {
  return e.replace(Gi, "-").replace(Vi, "");
}
var Yi = /(a)(d)/gi, it = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > it; t = t / it | 0) n = tr(t % it) + n;
  return (tr(t % it) + n).replace(Yi, "$1-$2");
}
var Lt, Jr = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Qr = function(e) {
  return fe(Jr, e);
};
function eo(e) {
  return qt(Qr(e) >>> 0);
}
function to(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var no = typeof Symbol == "function" && Symbol.for, ro = no ? Symbol.for("react.memo") : 60115, Zi = no ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ki = ((Lt = {})[Zi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[ro] = oo, Lt);
function nr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ro ? oo : "$$typeof" in e ? Ki[e.$$typeof] : qi;
  var t;
}
var Ji = Object.defineProperty, Qi = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, ea = Object.getOwnPropertyDescriptor, ta = Object.getPrototypeOf, or = Object.prototype;
function io(e, t, n) {
  if (typeof t != "string") {
    if (or) {
      var r = ta(t);
      r && r !== or && io(e, r, n);
    }
    var o = Qi(t);
    rr && (o = o.concat(rr(t)));
    for (var i = nr(e), a = nr(t), c = 0; c < o.length; ++c) {
      var s = o[c];
      if (!(s in Xi || n && n[s] || a && s in a || i && s in i)) {
        var u = ea(t, s);
        try {
          Ji(e, s, u);
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
function En(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Xt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Kt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Kt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Kt(e[r], t[r]);
  return e;
}
function wn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var na = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ra() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function q(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ra.apply(void 0, me([na[e]], t, !1)).trim());
}
var oa = function() {
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
    for (var c = this.indexOfGroup(t + 1), s = (a = 0, n.length); a < s; a++) this.tag.insertRule(c, n[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Cn);
    return n;
  }, e;
}(), ia = 1 << 30, _t = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), pt = 1, at = function(e) {
  if (_t.has(e)) return _t.get(e);
  for (; vt.has(pt); ) pt++;
  var t = pt++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > ia)) throw q(16, "".concat(t));
  return _t.set(e, t), vt.set(t, e), t;
}, aa = function(e, t) {
  pt = t + 1, _t.set(e, t), vt.set(t, e);
}, sa = "style[".concat(ge, "][").concat(Kr, '="').concat($t, '"]'), ca = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), la = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ua = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Cn), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var s = c.match(ca);
      if (s) {
        var u = 0 | parseInt(s[1], 10), f = s[2];
        u !== 0 && (aa(f, u), la(e, f, s[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, ir = function(e) {
  for (var t = document.querySelectorAll(sa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ge) !== Xr && (ua(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ao = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var s = Array.from(c.querySelectorAll("style[".concat(ge, "]")));
    return s[s.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Xr), r.setAttribute(Kr, $t);
  var a = fa();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, da = function() {
  function e(t) {
    this.element = ao(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw q(17);
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
}(), _a = function() {
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
}(), pa = function() {
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
}(), ar = yt, ha = { isServer: !yt, useCSSOMInjection: !zi }, so = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, ha), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && yt && ar && (ar = !1, ir(this)), wn(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, s = "", u = function(l) {
          var p = function(m) {
            return vt.get(m);
          }(l);
          if (p === void 0) return "continue";
          var _ = i.names.get(p), g = a.getGroup(l);
          if (_ === void 0 || !_.size || g.length === 0) return "continue";
          var w = "".concat(ge, ".g").concat(l, '[id="').concat(p, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && ($ += "".concat(m, ","));
          }), s += "".concat(g).concat(w, '{content:"').concat($, '"}').concat(Cn);
        }, f = 0; f < c; f++) u(f);
        return s;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return at(t);
  }, e.prototype.rehydrate = function() {
    !this.server && yt && ir(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new pa(o) : r ? new da(o) : new _a(o);
    }(this.options), new oa(t)));
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
}(), ma = /&/g, ga = /^\s*\/\/.*$/gm;
function co(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = co(n.children, t)), n;
  });
}
function lo(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, c = o.plugins, s = c === void 0 ? kt : c, u = function(p, _, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, f = s.slice();
  f.push(function(p) {
    p.type === Et && p.value.includes("&") && (p.props[0] = p.props[0].replace(ma, n).replace(r, u));
  }), a.prefix && f.push(Ui), f.push(Mi);
  var l = function(p, _, g, w) {
    _ === void 0 && (_ = ""), g === void 0 && (g = ""), w === void 0 && (w = "&"), t = w, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = p.replace(ga, ""), m = Li(g || _ ? "".concat(g, " ").concat(_, " { ").concat($, " }") : $);
    a.namespace && (m = co(m, a.namespace));
    var h = [];
    return gt(m, Hi(f.concat(Fi(function(k) {
      return h.push(k);
    })))), h;
  };
  return l.hash = s.length ? s.reduce(function(p, _) {
    return _.name || q(15), fe(p, _.name);
  }, Jr).toString() : "", l;
}
var ya = new so(), Jt = lo(), Sn = ne.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: Jt });
Sn.Consumer;
var va = ne.createContext(void 0);
function Qt() {
  return Qe(Sn);
}
function Ca(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = Qt().styleSheet, i = te(function() {
    var s = o;
    return e.sheet ? s = e.sheet : e.target && (s = s.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (s = s.reconstructWithOptions({ useCSSOMInjection: !1 })), s;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return lo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  X(function() {
    wi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ne.createElement(Sn.Provider, { value: c }, ne.createElement(va.Provider, { value: a }, e.children));
}
var en = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, wn(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Jt), this.name + t.hash;
  }, e;
}(), Ea = function(e) {
  return e >= "A" && e <= "Z";
};
function sr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ea(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
}, fo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !uo(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(sr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, me(me(["".concat(o, " {")], fo(i), !1), ["}"], !1)) : r.push("".concat(sr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Bi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (uo(e)) return [];
  if (En(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof en || Te(o) || o === null || console.error("".concat(to(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof en ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? fo(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function wa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !En(n)) return !1;
  }
  return !0;
}
var Sa = Qr($t), ba = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wa(t), this.componentId = n, this.baseHash = fe(Sa, n), this.baseStyle = r, so.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Xt(pe(this.rules, t, n, r)), a = qt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var s = fe(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var l = this.rules[f];
        if (typeof l == "string") u += l, b.NODE_ENV !== "production" && (s = fe(s, l));
        else if (l) {
          var p = Xt(pe(l, t, n, r));
          s = fe(s, p + f), u += p;
        }
      }
      if (u) {
        var _ = qt(s >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
}(), Ze = ne.createContext(void 0);
Ze.Consumer;
function _o() {
  var e = Qe(Ze);
  if (!e) throw q(18);
  return e;
}
function $a(e) {
  var t = ne.useContext(Ze), n = te(function() {
    return function(r, o) {
      if (!r) throw q(14);
      if (ye(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw q(8);
      return o ? L(L({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ne.createElement(Ze.Provider, { value: n }, e.children) : null;
}
var Mt = {}, cr = /* @__PURE__ */ new Set();
function ka(e, t, n) {
  var r = En(e), o = e, i = !Dt(e), a = t.attrs, c = a === void 0 ? kt : a, s = t.componentId, u = s === void 0 ? function(S, N) {
    var E = typeof S != "string" ? "sc" : er(S);
    Mt[E] = (Mt[E] || 0) + 1;
    var y = "".concat(E, "-").concat(eo($t + E + Mt[E]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : s, f = t.displayName, l = f === void 0 ? function(S) {
    return Dt(S) ? "styled.".concat(S) : "Styled(".concat(to(S), ")");
  }(e) : f, p = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(S, N) {
        return w(S, N) && $(S, N);
      };
    } else g = w;
  }
  var m = new ba(n, p, r ? o.componentStyle : void 0);
  function h(S, N) {
    return function(E, y, F) {
      var U = E.attrs, Pe = E.componentStyle, B = E.defaultProps, ce = E.foldedComponentIds, $n = E.styledComponentId, Co = E.target, Eo = ne.useContext(Ze), wo = Qt(), Ot = E.shouldForwardProp || wo.shouldForwardProp;
      b.NODE_ENV !== "production" && mt($n);
      var kn = ji(y, Eo, B) || Ne, K = function(et, Me, tt) {
        for (var Ce, le = L(L({}, Me), { className: void 0, theme: tt }), xt = 0; xt < et.length; xt += 1) {
          var nt = ye(Ce = et[xt]) ? Ce(le) : Ce;
          for (var re in nt) le[re] = re === "className" ? de(le[re], nt[re]) : re === "style" ? L(L({}, le[re]), nt[re]) : nt[re];
        }
        return Me.className && (le.className = de(le.className, Me.className)), le;
      }(U, y, kn), Le = K.as || Co, De = {};
      for (var z in K) K[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && K.theme === kn || (z === "forwardedAs" ? De.as = K.forwardedAs : Ot && !Ot(z, Le) || (De[z] = K[z], Ot || b.NODE_ENV !== "development" || Bo(z) || cr.has(z) || !Zt.has(Le) || (cr.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(et, Me) {
        var tt = Qt(), Ce = et.generateAndInjectStyles(Me, tt.styleSheet, tt.stylis);
        return b.NODE_ENV !== "production" && mt(Ce), Ce;
      }(Pe, K);
      b.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(Nt);
      var Tt = de(ce, $n);
      return Nt && (Tt += " " + Nt), K.className && (Tt += " " + K.className), De[Dt(Le) && !Zt.has(Le) ? "class" : "className"] = Tt, F && (De.ref = F), M(Le, De);
    }(k, S, N);
  }
  h.displayName = l;
  var k = ne.forwardRef(h);
  return k.attrs = _, k.componentStyle = m, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = p, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = r ? function(N) {
      for (var E = [], y = 1; y < arguments.length; y++) E[y - 1] = arguments[y];
      for (var F = 0, U = E; F < U.length; F++) Kt(N, U[F], !0);
      return N;
    }({}, o.defaultProps, S) : S;
  } }), b.NODE_ENV !== "production" && (Wi(l, p), k.warnTooManyClasses = /* @__PURE__ */ function(S, N) {
    var E = {}, y = !1;
    return function(F) {
      if (!y && (E[F] = !0, Object.keys(E).length >= 200)) {
        var U = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(S).concat(U, `.
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
  }(l, p)), wn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && io(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function lr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ur = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function se(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || Te(e)) return ur(pe(lr(kt, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : ur(pe(lr(r, t)));
}
function tn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, se.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return tn(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return tn(e, t, L(L({}, n), o));
  }, r;
}
var po = function(e) {
  return tn(ka, e);
}, D = po;
Zt.forEach(function(e) {
  D[e] = po(e);
});
function Re(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Xt(se.apply(void 0, me([e], t, !1))), o = eo(r);
  return new en(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var st = "__sc-".concat(ge, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[st] || (window[st] = 0), window[st] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[st] += 1);
const Oa = 2, ho = 14, Na = 0.0276;
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
}, fr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Ta = {
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
}, xa = {
  ...Ta,
  [Ve.FIT_YOUR_EYE]: "Fit your eye into square",
  [Ve.DEVICE_PITCHED]: "Hold your phone at eye level"
}, Ia = "rgba(19, 19, 19, 0.5)", Aa = 34;
function dr(e, t) {
  return Math.max(t, t + (e - 400) * Na + 2);
}
const Ra = (e, t = ho) => e ? e.width < e.height ? dr(e.width, t) : dr(e.height, t) : t, Pa = (e) => e > Q.Default ? Be[Q.Default] : e > Q.L ? Be[Q.L] : e > Q.M ? Be[Q.M] : Be[Q.S], La = (e) => e ? Pa(e.width) : Be[Q.Default];
function Da() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const je = Or(void 0);
je.displayName = "ConfigurationContext";
function ve() {
  const e = Qe(je);
  if (!e)
    throw new Error(
      `${je.displayName} must be used within a ${je.displayName} Provider`
    );
  return e;
}
function Ma({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = _o(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ra(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ d(je.Provider, { value: o, children: e });
}
const mo = ({ svgSize: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ha = D.div`
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
`, Fa = D.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ua = D.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = ve();
  return /* @__PURE__ */ d(Ha, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ d(Fa, { children: [
    e ? /* @__PURE__ */ d(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ d(Ua, { $fontSize: o, children: r })
  ] }) });
}, go = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ d(nn, { Icon: mo, position: "relative", text: e });
class Ba extends j {
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
    return this.state.hasError ? /* @__PURE__ */ d(go, { Icon: mo, isCameraReady: !1 }) : this.props.children;
  }
}
const za = D.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Wa({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return X(() => {
    Da();
  }, []), /* @__PURE__ */ d(Ca, { target: t.styleTarget, children: /* @__PURE__ */ d($a, { theme: t.styling.theme, children: /* @__PURE__ */ d(za, { children: /* @__PURE__ */ d(Ba, { videoElementSize: n, children: /* @__PURE__ */ d(Ma, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const ja = 0.75, Ga = 2, Va = "dot-auto-capture-video";
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
function Ya(e) {
  const [t, n] = H(), r = he(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return qe(e, r), Ie(() => {
    if (!t) {
      const o = document.getElementById(Va);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Za(e, t) {
  return e ? `${e}, ${t}` : t;
}
const qa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Xa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: ho
}, He = {
  colors: qa,
  font: Xa
}, Ka = (e) => {
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
      family: Za((t = e.font) == null ? void 0 : t.family, He.font.family)
    }
  } : He;
}, yo = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, _r = (e, t) => {
  yo(e, {
    instruction: t
  });
}, Ja = (e) => {
  yo(e, { animationEnd: !0 });
}, Qa = (e) => Number.parseFloat(e.toFixed(3)), bn = (e, t) => Math.min(e, t), es = ({ height: e, width: t }, n) => {
  const r = bn(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ts = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = es(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function ns(e, t) {
  const n = bn(t.width, t.height);
  return Qa(e * n);
}
function rs(e) {
  return ts(e, ja);
}
function os(e, t) {
  return ns(e, t) * Ga;
}
async function is() {
  return navigator.mediaDevices.enumerateDevices();
}
async function as() {
  return (await is()).filter((t) => t.kind === "videoinput");
}
const ss = () => {
  const [e, t] = H(!1);
  return X(() => {
    (async () => {
      (await as()).length > 1 && t(!0);
    })();
  }, []), e;
}, cs = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ls = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), vo = D.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, us = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(vo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(cs, { size: t }) }), fs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(vo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(ls, { size: t }) }), ds = D.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, _s = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = ve(), o = ss();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = La(r);
  return /* @__PURE__ */ d(ds, { $padding: i, children: [
    o && /* @__PURE__ */ d(fs, { disabled: t, onClick: () => {
      _r(e, In.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ d(
      us,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          _r(e, In.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, pr = 2.6, rn = "1.5s", on = "1.5s", an = "ease-in-out", ps = 2500, hs = "2.5s", ms = "0.3s", gs = "linear", ys = ".5s", vs = "3s", Cs = "ease-in-out", Es = ".5s", ws = ".5s", Ss = "ease-out", bs = (e) => Re`
100% {
  transform: translateX(22%)  scale(${e});
}
`, $s = (e) => Re`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, ks = Re`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, Os = Re`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, Ns = Re`
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
`, Ts = Re`
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
`, xs = D.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && se`
      animation: ${ks} ${ms}
        ${gs} both;
      animation-delay: ${hs};

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
`, Is = D.div`
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
`, As = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = ve();
  return /* @__PURE__ */ d(xs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ d(
    Is,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Aa,
      children: e
    }
  ) });
}, Rs = D.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ps = ({ svgSize: e }) => /* @__PURE__ */ d(Rs, { children: /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Ls = D.div`
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
`, Ds = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = ve(), i = bn(r, t);
  return /* @__PURE__ */ d(Ls, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ d("mask", { id: "mask", children: [
      /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ d("g", { children: e })
    ] }) }),
    /* @__PURE__ */ d("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ms({ cameraHeight: e, cameraWidth: t, state: n }) {
  var o;
  const { appStateInstructions: r } = ve();
  return !n || n === Bt.ERROR || !((o = r == null ? void 0 : r[n]) != null && o.visible) ? null : n === Bt.DONE ? /* @__PURE__ */ d(V, { children: [
    e && t && /* @__PURE__ */ d(Ds, { height: e, width: t }),
    /* @__PURE__ */ d(nn, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ d(nn, { Icon: Ps, isCameraReady: !0, text: r[n].text });
}
const Hs = D.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Fs(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Us = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Je(null), r = _o(), [o, i] = H(), a = he(
    (c) => {
      var s;
      i((s = c == null ? void 0 : c.detail) == null ? void 0 : s.detectedObject);
    },
    [i]
  );
  return qe(be.DETECTION_CHANGED, a), X(() => {
    if (!n.current)
      return;
    const c = (s, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: f, faceSize: l } = u, p = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!p)
        return;
      const _ = os(l, s);
      p.beginPath(), p.arc(f.x, f.y, _, 0, 2 * Math.PI, !1), p.lineWidth = Oa, p.strokeStyle = r.colors.placeholderColor, p.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Fs(n.current), c(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ d(Hs, { ref: n, $isImageMirror: t });
}, Bs = () => {
  const [e, t] = H(), [n, r] = H(!1), o = he(
    (s) => {
      var f, l;
      t((f = s == null ? void 0 : s.detail) == null ? void 0 : f.cameraResolution);
      const u = (l = s == null ? void 0 : s.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  qe(be.CAMERA_PROPS_CHANGED, o);
  const [i, a] = H({
    code: P.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = he(
    (s) => {
      var u, f;
      a({
        code: (u = s == null ? void 0 : s.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((f = s == null ? void 0 : s.detail) == null ? void 0 : f.isEscalated) ?? !1
      });
    },
    [a]
  );
  return qe(be.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, zs = () => {
  const [e, t] = H(Ye.DISTANT), [n, r] = H(we.LOADING), [o, i] = H(), a = he(
    (c) => {
      const { error: s, phase: u, state: f } = c.detail || {};
      u && t(u), f && r(f), s && i(s);
    },
    [t, r, i]
  );
  return qe(pn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, Ws = (e, t) => {
  const [n, r] = H(!1);
  return X(() => {
    if (t === Ye.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, ps);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === Ve.CANDIDATE_SELECTION ? e : Ve.FIT_YOUR_EYE : e;
}, js = D.div`
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

    ${(e) => e.$isAnimating && se`
        animation: ${bs(pr)} ${on}
          ${an} both;
        animation-delay: ${rn};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && se`
          animation: ${$s(pr)} ${on}
            ${an} both;
          animation-delay: ${rn};
        `}
    }
  }
`, Gs = ({
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
    js,
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
function Vs() {
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
function Ys() {
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
const Zs = D.div`
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

  ${(e) => e.$isAnimating && se`
      animation: ${Os} ${on} ${an} both;
      animation-delay: ${rn};
    `}
`, qs = D.div`
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

  ${(e) => e.$isAnimating && se`
      animation: ${Ns} ${vs} ${Cs} both;
      animation-delay: ${ys};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, Xs = D.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && se`
      animation: ${Ts} ${ws} ${Ss} both;
      animation-delay: ${Es};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, Ks = ({ isAnimating: e, isInCandidateSelection: t }) => /* @__PURE__ */ d(Zs, { $isAnimating: e, children: [
  /* @__PURE__ */ d(Xs, { $isAnimating: e, $isInCandidateSelection: t, children: /* @__PURE__ */ d(Vs, {}) }),
  /* @__PURE__ */ d(qs, { $isAnimating: e, children: /* @__PURE__ */ d(Ys, {}) })
] }), Js = () => {
  const { cameraResolution: e, instruction: t, isMirroring: n } = Bs(), { magnifEyeError: r, magnifEyePhase: o, magnifEyeState: i } = zs(), { instructions: a } = ve(), c = Ws(t.code, o), s = c === Ve.CANDIDATE_SELECTION, u = o === Ye.MIDDLE || o === Ye.CLOSEUP;
  if (i === we.ERROR)
    return /* @__PURE__ */ d(go, { text: r == null ? void 0 : r.message });
  if ((i === we.RUNNING || i === we.WAITING) && e) {
    const f = rs(e);
    return /* @__PURE__ */ d(V, { children: [
      !u && /* @__PURE__ */ d(Us, { cameraResolution: e, isImageMirror: n }),
      /* @__PURE__ */ d(
        Gs,
        {
          handleAnimationEnd: () => Ja(pn.ANIMATION_END),
          height: e.height,
          initialPosition: f,
          isAnimating: u,
          isInCandidateSelection: s,
          width: e.width
        }
      ),
      c && /* @__PURE__ */ d(
        As,
        {
          cssBottom: (f.height + f.shiftY) * 100,
          isAnimating: u,
          isInCandidateSelection: s,
          isPortrait: e.width < e.height,
          children: a[c]
        }
      ),
      /* @__PURE__ */ d(Ks, { isAnimating: u, isInCandidateSelection: s }),
      !u && /* @__PURE__ */ d(_s, { customControlEvent: be.CONTROL, isSwitchCameraDisabled: s })
    ] });
  }
  return /* @__PURE__ */ d(
    Ms,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: i
    }
  );
}, Qs = (e) => {
  var i, a, c, s, u;
  const t = { ...xa, ...e == null ? void 0 : e.instructions }, n = {
    [we.LOADING]: {
      ...fr.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [we.DONE]: {
      ...fr.done,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done
    }
  }, r = {
    ...e == null ? void 0 : e.styling,
    backdropColor: ((c = e == null ? void 0 : e.styling) == null ? void 0 : c.backdropColor) ?? Ia,
    theme: Ka((s = e == null ? void 0 : e.styling) == null ? void 0 : s.theme)
  }, o = {
    showCameraButtons: ((u = e == null ? void 0 : e.control) == null ? void 0 : u.showCameraButtons) ?? !1
  };
  return {
    instructions: t,
    appStateInstructions: n,
    styling: r,
    control: o
  };
}, ec = ({ configuration: e }) => {
  const t = Ya(be.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ d(Wa, { uiConfiguration: Qs(e), videoElementSize: t, children: /* @__PURE__ */ d(Js, {}) });
};
Po(ec, "x-dot-magnifeye-liveness-ui", ["configuration"]);
