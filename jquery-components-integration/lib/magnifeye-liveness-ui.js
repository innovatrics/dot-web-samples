var Oo = Object.defineProperty;
var No = (e, t, n) => t in e ? Oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => No(e, typeof t != "symbol" ? t + "" : t, n);
var Xe, v, yr, ue, xn, vr, Cr, Er, un, Ut, Bt, wr, Ge = {}, Sr = [], ko = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ke = Array.isArray;
function Z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function fn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function M(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return ze(e, a, r, o, null);
}
function ze(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++yr, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function To() {
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
function br(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return br(e);
  }
}
function zt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !mt.__r++ || xn != v.debounceRendering) && ((xn = v.debounceRendering) || vr)(mt);
}
function mt() {
  for (var e, t, n, r, o, i, a, c = 1; ue.length; ) ue.length > c && ue.sort(Cr), e = ue.shift(), c = ue.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = Z({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), dn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Se(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, Nr(i, n, a), n.__e != o && br(n)));
  mt.__r = 0;
}
function $r(e, t, n, r, o, i, a, c, s, u, f) {
  var l, h, _, g, w, $, m = r && r.__k || Sr, p = t.length;
  for (s = xo(n, t, m, s, p), l = 0; l < p; l++) (_ = n.__k[l]) != null && (h = _.__i == -1 ? Ge : m[_.__i] || Ge, _.__i = l, $ = dn(e, _, h, o, i, a, c, s, u, f), g = _.__e, _.ref && h.ref != _.ref && (h.ref && _n(h.ref, null, _), f.push(_.ref, _.__c || g, _)), w == null && g != null && (w = g), 4 & _.__u || h.__k === _.__k ? s = Or(_, s, e) : typeof _.type == "function" && $ !== void 0 ? s = $ : g && (s = g.nextSibling), _.__u &= -7);
  return n.__e = w, s;
}
function xo(e, t, n, r, o) {
  var i, a, c, s, u, f = n.length, l = f, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (s = i + h, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? ze(null, a, null, null, null) : Ke(a) ? ze(V, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? ze(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, c = null, (u = a.__i = Io(a, n, s, l)) != -1 && (l--, (c = n[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > f ? h-- : o < f && h++), typeof a.type != "function" && (a.__u |= 4)) : u != s && (u == s - 1 ? h-- : u == s + 1 ? h++ : (u > s ? h-- : h++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < f; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = Se(c)), Tr(c, c));
  return r;
}
function Or(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Or(r[o], t, n));
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
function Io(e, t, n, r) {
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
function In(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ko.test(t) ? n : n + "px";
}
function ot(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || In(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || In(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Er, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = un, e.addEventListener(t, i ? Bt : Ut, i)) : e.removeEventListener(t, i ? Bt : Ut, i);
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
function An(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = un++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function dn(e, t, n, r, o, i, a, c, s, u) {
  var f, l, h, _, g, w, $, m, p, O, S, k, E, y, F, U, Pe, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (s = !!(32 & n.__u), i = [c = t.__e = n.__e]), (f = v.__b) && f(t);
  e: if (typeof B == "function") try {
    if (m = t.props, p = "prototype" in B && B.prototype.render, O = (f = B.contextType) && r[f.__c], S = f ? O ? O.props.value : f.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (p ? t.__c = l = new B(m, S) : (t.__c = l = new j(m, S), l.constructor = B, l.render = Ro), O && O.sub(l), l.props = m, l.state || (l.state = {}), l.context = S, l.__n = r, h = l.__d = !0, l.__h = [], l._sb = []), p && l.__s == null && (l.__s = l.state), p && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, B.getDerivedStateFromProps(m, l.__s))), _ = l.props, g = l.state, l.__v = t, h) p && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), p && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (p && B.getDerivedStateFromProps == null && m !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, S), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, S) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ce) {
          ce && (ce.__ = t);
        }), k = 0; k < l._sb.length; k++) l.__h.push(l._sb[k]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, S), p && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, g, w);
      });
    }
    if (l.context = S, l.props = m, l.__P = e, l.__e = !1, E = v.__r, y = 0, p) {
      for (l.state = l.__s, l.__d = !1, E && E(t), f = l.render(l.props, l.state, l.context), F = 0; F < l._sb.length; F++) l.__h.push(l._sb[F]);
      l._sb = [];
    } else do
      l.__d = !1, E && E(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = Z(Z({}, r), l.getChildContext())), p && !h && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(_, g)), U = f, f != null && f.type === V && f.key == null && (U = kr(f.props.children)), c = $r(e, Ke(U) ? U : [U], t, n, r, o, i, a, c, s, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
  } catch (ce) {
    if (t.__v = null, s || i != null) if (ce.then) {
      for (t.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (Pe = i.length; Pe--; ) fn(i[Pe]);
    else t.__e = n.__e, t.__k = n.__k;
    v.__e(ce, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : c = t.__e = Ao(n.__e, t, n, r, o, i, a, s, u);
  return (f = v.diffed) && f(t), 128 & t.__u ? void 0 : c;
}
function Nr(e, t, n) {
  for (var r = 0; r < n.length; r++) _n(n[r], n[++r], n[++r]);
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
function Ao(e, t, n, r, o, i, a, c, s) {
  var u, f, l, h, _, g, w, $ = n.props, m = t.props, p = t.type;
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
    if (i = i && Xe.call(e.childNodes), $ = n.props || Ge, !c && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        ot(e, u, null, _, o);
      }
    }
    for (u in m) _ = m[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? f = _ : u == "value" ? g = _ : u == "checked" ? w = _ : c && typeof _ != "function" || $[u] === _ || ot(e, u, _, $[u], o);
    if (f) c || l && (f.__html == l.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), $r(t.type == "template" ? e.content : e, Ke(h) ? h : [h], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Se(n, 0), c, s), i != null) for (u = i.length; u--; ) fn(i[u]);
    c || (u = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || p == "progress" && !g || p == "option" && g != $[u]) && ot(e, u, g, $[u], o), u = "checked", w != null && w != e[u] && ot(e, u, w, $[u], o));
  }
  return e;
}
function _n(e, t, n) {
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
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || _n(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Tr(r[o], t, n || typeof e.type != "function");
  n || fn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ro(e, t, n) {
  return this.constructor(e, n);
}
function ie(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], dn(t, e = (!r && n || t).__k = M(V, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Xe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), Nr(i, e, a);
}
function hn(e, t) {
  ie(e, t, hn);
}
function pn(e, t, n) {
  var r, o, i, a, c = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Xe.call(arguments, 2) : n), ze(e.type, c, r || e.key, o || e.ref, null);
}
function xr(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(a) {
        a.__e = !0, zt(a);
      });
    }, this.sub = function(i) {
      r.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), a && a.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + wr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Xe = Sr.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, yr = 0, j.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), zt(this));
}, j.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), zt(this));
}, j.prototype.render = V, ue = [], vr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Cr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, mt.__r = 0, Er = /(PointerCapture)$|Capture$/i, un = 0, Ut = An(!1), Bt = An(!0), wr = 0;
function mn() {
  return (mn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Po = ["context", "children"];
function Do(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, c = {}, s = Object.keys(r);
    for (a = 0; a < s.length; a++) o.indexOf(i = s[a]) >= 0 || (c[i] = r[i]);
    return c;
  }(e, Po);
  return pn(t, n);
}
function Lo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = M(Do, mn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, c = n.attributes, s = n.childNodes;
    for (a = c.length; a--; ) c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[Ir(c[a].name)] = c[a].value);
    for (a = s.length; a--; ) {
      var u = t(s[a], null), f = s[a].slot;
      f ? i[f] = M(Rn, { name: f }, u) : o[a] = u;
    }
    var l = r ? M(Rn, null, o) : o;
    return M(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? hn : ie)(this._vdom, this._root);
}
function Ir(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Mo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Ir(e)] = n, this._vdom = pn(this._vdom, r), ie(this._vdom, this._root);
  }
}
function Ho() {
  ie(this._vdom = null, this._root);
}
function Rn(e, t) {
  var n = this;
  return M("slot", mn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Fo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Lo, o.prototype.attributeChangedCallback = Mo, o.prototype.disconnectedCallback = Ho, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Uo = 0;
function d(e, t, n, r, o, i) {
  t || (t = {});
  var a, c, s = t;
  if ("ref" in s) for (c in s = {}, t) c == "ref" ? a = t[c] : s[c] = t[c];
  var u = { type: e, props: s, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Uo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) s[c] === void 0 && (s[c] = a[c]);
  return v.vnode && v.vnode(u), u;
}
const Pn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var be = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(be || {}), gn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.CONTROL = "magnifeye-auto-capture:control", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(gn || {});
const Dn = {
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
  LEFT_EYE_NOT_PRESENT: `left_${Dn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Dn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Bo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, Wt = {
  ...Bo,
  DONE: "DONE"
}, Ve = {
  ...P,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Ye = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Ye || {});
const we = Wt;
var ae, x, Rt, Ln, $e = 0, Ar = [], I = v, Mn = I.__b, Hn = I.__r, Fn = I.diffed, Un = I.__c, Bn = I.unmount, zn = I.__;
function xe(e, t) {
  I.__h && I.__h(x, e, $e || t), $e = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return $e = 1, yn(Dr, e);
}
function yn(e, t, n) {
  var r = xe(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Dr(void 0, t), function(c) {
    var s = r.__N ? r.__N[0] : r.__[0], u = r.t(s, c);
    s !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.__f)) {
    var o = function(c, s, u) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, c, s, u);
      var l = r.__c.props !== c;
      return f.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (l = !0);
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
  !I.__s && vn(n.__H, t) && (n.__ = e, n.u = t, x.__H.__h.push(n));
}
function Ie(e, t) {
  var n = xe(ae++, 4);
  !I.__s && vn(n.__H, t) && (n.__ = e, n.u = t, x.__h.push(n));
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
  var n = xe(ae++, 7);
  return vn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function pe(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Qe(e) {
  var t = x.context[e.__c], n = xe(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function gt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Pr() {
  var e = xe(ae++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function zo() {
  for (var e; e = Ar.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(lt), e.__H.__h.forEach(jt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  x = null, Mn && Mn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), zn && zn(e, t);
}, I.__r = function(e) {
  Hn && Hn(e), ae = 0;
  var t = (x = e.__c).__H;
  t && (Rt === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(lt), t.__h.forEach(jt), t.__h = [], ae = 0)), Rt = x;
}, I.diffed = function(e) {
  Fn && Fn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ar.push(t) !== 1 && Ln === I.requestAnimationFrame || ((Ln = I.requestAnimationFrame) || Wo)(zo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Rt = x = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(lt), n.__h = n.__h.filter(function(r) {
        return !r.__ || jt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Un && Un(e, t);
}, I.unmount = function(e) {
  Bn && Bn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      lt(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Wn = typeof requestAnimationFrame == "function";
function Wo(e) {
  var t, n = function() {
    clearTimeout(r), Wn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Wn && (t = requestAnimationFrame(n));
}
function lt(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function jt(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function vn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Dr(e, t) {
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
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function jo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Go = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vo = /* @__PURE__ */ jo(
  function(e) {
    return Go.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
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
function Mr(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, Pt(o) && i({ t: o });
  }, [e, n, t]), X(function() {
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
function Yo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, M(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Vt.prototype = new j()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var jn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), jn && jn(e);
};
var Zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function qo(e) {
  function t(n) {
    var r = Lr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Zo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Gn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Xo = { map: Gn, forEach: Gn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Ko = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Ko(e, t, n, r);
};
var Vn = v.unmount;
function zr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Lr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return zr(r, t, n);
  })), e;
}
function Wr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Wr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ut() {
  this.__u = 0, this.o = null, this.__b = null;
}
function jr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Jo(e) {
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
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Vn && Vn(e);
}, (ut.prototype = new j()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = jr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var s = r.state.__a;
        r.__v.__k[0] = Wr(s, s.__c.__P, s.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, ut.prototype.componentWillUnmount = function() {
  this.o = [];
}, ut.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = zr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && M(V, null, e.fallback);
  return o && (o.__u &= -33), [M(V, null, t.__a ? null : e.children), o];
};
var Yn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Qo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ei(e) {
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
  ie(M(Qo, { context: t.context }, e.__v), t.v);
}
function ti(e, t) {
  var n = M(ei, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new j()).__a = function(e) {
  var t = this, n = jr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Yn(t, e, r)) : o();
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
    Yn(e, n, t);
  });
};
var Gr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ni = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ri = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, oi = /[A-Z0-9]/g, ii = typeof document < "u", ai = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function si(e, t, n) {
  return t.__k == null && (t.textContent = ""), ie(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ci(e, t, n) {
  return hn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(j.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Zn = v.event;
function li() {
}
function ui() {
  return this.cancelBubble;
}
function fi() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Zn && (e = Zn(e)), e.persist = li, e.isPropagationStopped = ui, e.isDefaultPrevented = fi, e.nativeEvent = e;
};
var Cn, di = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, qn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var c = n[a];
      if (!(a === "value" && "defaultValue" in n && c == null || ii && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var s = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : s === "translate" && c === "no" ? c = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || ai(n.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : ri.test(a) && (a = s) : s = a = "oninput" : i && ni.test(a) ? a = a.replace(oi, "-$&").toLowerCase() : c === null && (c = void 0), s === "oninput" && o[a = s] && (a = "oninputCapture"), o[a] = c;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", di)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Gr, qn && qn(e);
};
var Xn = v.__r;
v.__r = function(e) {
  Xn && Xn(e), Cn = e.__c;
};
var Kn = v.diffed;
v.diffed = function(e) {
  Kn && Kn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Cn = null;
};
var _i = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Cn.__n[e.__c].props.value;
}, useCallback: pe, useContext: Qe, useDebugValue: gt, useDeferredValue: Fr, useEffect: X, useId: Pr, useImperativeHandle: Rr, useInsertionEffect: Br, useLayoutEffect: Ie, useMemo: te, useReducer: yn, useRef: Je, useState: H, useSyncExternalStore: Mr, useTransition: Ur } } };
function hi(e) {
  return M.bind(null, e);
}
function wt(e) {
  return !!e && e.$$typeof === Gr;
}
function pi(e) {
  return wt(e) && e.type === V;
}
function mi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function gi(e) {
  return wt(e) ? pn.apply(null, arguments) : e;
}
function yi(e) {
  return !!e.__k && (ie(null, e), !0);
}
function vi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ci = function(e, t) {
  return e(t);
}, Ei = function(e, t) {
  return e(t);
}, wi = V, Si = wt, ne = { useState: H, useId: Pr, useReducer: yn, useEffect: X, useLayoutEffect: Ie, useInsertionEffect: Br, useTransition: Ur, useDeferredValue: Fr, useSyncExternalStore: Mr, startTransition: Hr, useRef: Je, useImperativeHandle: Rr, useMemo: te, useCallback: pe, useContext: Qe, useDebugValue: gt, version: "18.3.1", Children: Xo, render: si, hydrate: ci, unmountComponentAtNode: yi, createPortal: ti, createElement: M, createContext: xr, createFactory: hi, cloneElement: gi, createRef: To, Fragment: V, isValidElement: wt, isElement: Si, isFragment: pi, isMemo: mi, findDOMNode: vi, Component: j, PureComponent: Vt, memo: Yo, forwardRef: qo, flushSync: Ei, unstable_batchedUpdates: Ci, StrictMode: wi, Suspense: ut, SuspenseList: Fe, lazy: Jo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _i };
function bi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt, Jn;
function $i() {
  return Jn || (Jn = 1, Dt = function(t, n, r, o) {
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
      var l = t[f], h = n[f];
      if (i = r ? r.call(o, l, h, f) : void 0, i === !1 || i === void 0 && l !== h)
        return !1;
    }
    return !0;
  }), Dt;
}
var Oi = $i();
const Ni = /* @__PURE__ */ bi(Oi);
var T = "-ms-", We = "-moz-", N = "-webkit-", Vr = "comm", St = "rule", En = "decl", ki = "@import", Yr = "@keyframes", Ti = "@layer", Zr = Math.abs, wn = String.fromCharCode, Yt = Object.assign;
function xi(e, t) {
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
function ft(e, t, n) {
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
function Xr(e) {
  return e.length;
}
function Ue(e, t) {
  return t.push(e), e;
}
function Ii(e, t) {
  return e.map(t).join("");
}
function Qn(e, t) {
  return e.filter(function(n) {
    return !J(n, t);
  });
}
var bt = 1, Ne = 1, Kr = 0, W = 0, A = 0, Ae = "";
function $t(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: bt, column: Ne, length: a, return: "", siblings: c };
}
function oe(e, t) {
  return Yt($t("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = oe(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Ai() {
  return A;
}
function Ri() {
  return A = W > 0 ? R(Ae, --W) : 0, Ne--, A === 10 && (Ne = 1, bt--), A;
}
function G() {
  return A = W < Kr ? R(Ae, W++) : 0, Ne++, A === 10 && (Ne = 1, bt++), A;
}
function _e() {
  return R(Ae, W);
}
function dt() {
  return W;
}
function Ot(e, t) {
  return Oe(Ae, e, t);
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
function Pi(e) {
  return bt = Ne = 1, Kr = Y(Ae = e), W = 0, [];
}
function Di(e) {
  return Ae = "", e;
}
function Lt(e) {
  return qr(Ot(W - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Li(e) {
  for (; (A = _e()) && A < 33; )
    G();
  return Zt(e) > 2 || Zt(A) > 3 ? "" : " ";
}
function Mi(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return Ot(e, dt() + (t < 6 && _e() == 32 && G() == 32));
}
function qt(e) {
  for (; G(); )
    switch (A) {
      // ] ) " '
      case e:
        return W;
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
        G();
        break;
    }
  return W;
}
function Hi(e, t) {
  for (; G() && e + A !== 57; )
    if (e + A === 84 && _e() === 47)
      break;
  return "/*" + Ot(t, W - 1) + "*" + wn(e === 47 ? e : G());
}
function Fi(e) {
  for (; !Zt(_e()); )
    G();
  return Ot(e, W);
}
function Ui(e) {
  return Di(_t("", null, null, null, [""], e = Pi(e), 0, [0], e));
}
function _t(e, t, n, r, o, i, a, c, s) {
  for (var u = 0, f = 0, l = a, h = 0, _ = 0, g = 0, w = 1, $ = 1, m = 1, p = 0, O = "", S = o, k = i, E = r, y = O; $; )
    switch (g = p, p = G()) {
      // (
      case 40:
        if (g != 108 && R(y, l - 1) == 58) {
          ft(y += C(Lt(p), "&", "&\f"), "&\f", Zr(u ? c[u - 1] : 0)) != -1 && (m = -1);
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
        y += Li(g);
        break;
      // \
      case 92:
        y += Mi(dt() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Ue(Bi(Hi(G(), dt()), t, n, s), s);
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
          case 59 + f:
            m == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - l && Ue(_ > 32 ? tr(y + ";", r, n, l - 1, s) : tr(C(y, " ", "") + ";", r, n, l - 2, s), s);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Ue(E = er(y, t, n, u, f, o, c, O, S = [], k = [], l, i), i), p === 123)
              if (f === 0)
                _t(y, t, E, E, S, i, l, c, k);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _t(e, E, E, r && Ue(er(e, E, E, 0, 0, o, c, O, o, S = [], l, k), k), o, k, l, c, r ? S : k);
                    break;
                  default:
                    _t(y, E, E, E, [""], k, 0, c, k);
                }
        }
        u = f = _ = 0, w = m = 1, O = y = "", l = a;
        break;
      // :
      case 58:
        l = 1 + Y(y), _ = g;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && Ri() == 125)
            continue;
        }
        switch (y += wn(p), p * w) {
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
            _e() === 45 && (y += Lt(G())), h = _e(), f = l = Y(O = y += Fi(dt())), p++;
            break;
          // -
          case 45:
            g === 45 && Y(y) == 2 && (w = 0);
        }
    }
  return i;
}
function er(e, t, n, r, o, i, a, c, s, u, f, l) {
  for (var h = o - 1, _ = o === 0 ? i : [""], g = Xr(_), w = 0, $ = 0, m = 0; w < r; ++w)
    for (var p = 0, O = Oe(e, h + 1, h = Zr($ = a[w])), S = e; p < g; ++p)
      (S = qr($ > 0 ? _[p] + " " + O : C(O, /&\f/g, _[p]))) && (s[m++] = S);
  return $t(e, t, n, o === 0 ? St : c, s, u, f, l);
}
function Bi(e, t, n, r) {
  return $t(e, t, n, Vr, wn(Ai()), Oe(e, 2, -2), 0, r);
}
function tr(e, t, n, r, o) {
  return $t(e, t, n, En, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Jr(e, t, n) {
  switch (xi(e, t)) {
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
      return We + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + We + e + T + e + e;
    // writing-mode
    case 5936:
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return N + e + T + e + e;
    // order
    case 6165:
      return N + e + T + "flex-" + e + e;
    // align-items
    case 5187:
      return N + e + C(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return N + e + T + "flex-item-" + C(e, /flex-|-self/g, "") + (J(e, /flex-|baseline/) ? "" : T + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return N + e + T + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return N + e + T + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return N + e + T + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return N + "box-" + C(e, "-grow", "") + N + e + T + C(e, "grow", "positive") + e;
    // transition
    case 4554:
      return N + C(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    // cursor
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, N + "$1$`$1");
    // justify-content
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    // justify-self
    case 4200:
      if (!J(e, /flex-|baseline/)) return T + "grid-column-align" + Oe(e, t) + e;
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
      }) ? ~ft(e + (n = n[t].value), "span", 0) ? e : T + C(e, "-start", "") + e + T + "grid-row-span:" + (~ft(n, "span", 0) ? J(n, /\d+/) : +J(n, /\d+/) - +J(e, /\d+/)) + ";" : T + C(e, "-start", "") + e;
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
      return C(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + We + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ft(e, "stretch", 0) ? Jr(C(e, "stretch", "fill-available"), t, n) + e : e;
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
        return C(e, ":", ":" + N) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + T + "$2box$3") + e;
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
function zi(e, t, n, r) {
  switch (e.type) {
    case Ti:
      if (e.children.length) break;
    case ki:
    case En:
      return e.return = e.return || e.value;
    case Vr:
      return "";
    case Yr:
      return e.return = e.value + "{" + yt(e.children, r) + "}";
    case St:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = yt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Wi(e) {
  var t = Xr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function ji(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Gi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case En:
        e.return = Jr(e.value, e.length, n);
        return;
      case Yr:
        return yt([oe(e, { value: C(e.value, "@", "@" + N) })], r);
      case St:
        if (e.length)
          return Ii(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(oe(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), Ee(oe(e, { props: [o] })), Yt(e, { props: Qn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(oe(e, { props: [C(o, /:(plac\w+)/, ":" + N + "input-$1")] })), Ee(oe(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), Ee(oe(e, { props: [C(o, /:(plac\w+)/, T + "input-$1")] })), Ee(oe(e, { props: [o] })), Yt(e, { props: Qn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Vi = {
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
}, b = {}, ge = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Qr = "active", eo = "data-styled-version", Nt = "6.1.18", Sn = `/*!sc*/
`, vt = typeof window < "u" && typeof document < "u", Yi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), nr = /invalid hook call/i, it = /* @__PURE__ */ new Set(), Zi = function(e, t) {
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
        nr.test(a) ? (i = !1, it.delete(r)) : o.apply(void 0, me([a], c, !1));
      }, Je(), i && !it.has(r) && (console.warn(r), it.add(r));
    } catch (a) {
      nr.test(a.message) && it.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), ke = Object.freeze({});
function qi(e, t, n) {
  return n === void 0 && (n = ke), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Xi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ki = /(^-|-$)/g;
function rr(e) {
  return e.replace(Xi, "-").replace(Ki, "");
}
var Ji = /(a)(d)/gi, at = 52, or = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > at; t = t / at | 0) n = or(t % at) + n;
  return (or(t % at) + n).replace(Ji, "$1-$2");
}
var Mt, to = 5381, fe = function(e, t) {
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
function Ht(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var io = typeof Symbol == "function" && Symbol.for, ao = io ? Symbol.for("react.memo") : 60115, Qi = io ? Symbol.for("react.forward_ref") : 60112, ea = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ta = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, so = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, na = ((Mt = {})[Qi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mt[ao] = so, Mt);
function ir(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ao ? so : "$$typeof" in e ? na[e.$$typeof] : ea;
  var t;
}
var ra = Object.defineProperty, oa = Object.getOwnPropertyNames, ar = Object.getOwnPropertySymbols, ia = Object.getOwnPropertyDescriptor, aa = Object.getPrototypeOf, sr = Object.prototype;
function co(e, t, n) {
  if (typeof t != "string") {
    if (sr) {
      var r = aa(t);
      r && r !== sr && co(e, r, n);
    }
    var o = oa(t);
    ar && (o = o.concat(ar(t)));
    for (var i = ir(e), a = ir(t), c = 0; c < o.length; ++c) {
      var s = o[c];
      if (!(s in ta || n && n[s] || a && s in a || i && s in i)) {
        var u = ia(t, s);
        try {
          ra(e, s, u);
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
function bn(e) {
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
function $n(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var sa = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ca() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function q(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ca.apply(void 0, me([sa[e]], t, !1)).trim());
}
var la = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Sn);
    return n;
  }, e;
}(), ua = 1 << 30, ht = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), pt = 1, st = function(e) {
  if (ht.has(e)) return ht.get(e);
  for (; Ct.has(pt); ) pt++;
  var t = pt++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > ua)) throw q(16, "".concat(t));
  return ht.set(e, t), Ct.set(t, e), t;
}, fa = function(e, t) {
  pt = t + 1, ht.set(e, t), Ct.set(t, e);
}, da = "style[".concat(ge, "][").concat(eo, '="').concat(Nt, '"]'), _a = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ha = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, pa = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Sn), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var s = c.match(_a);
      if (s) {
        var u = 0 | parseInt(s[1], 10), f = s[2];
        u !== 0 && (fa(f, u), ha(e, f, s[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, cr = function(e) {
  for (var t = document.querySelectorAll(da), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ge) !== Qr && (pa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ma() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var lo = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var s = Array.from(c.querySelectorAll("style[".concat(ge, "]")));
    return s[s.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Qr), r.setAttribute(eo, Nt);
  var a = ma();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ga = function() {
  function e(t) {
    this.element = lo(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), ya = function() {
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
}(), va = function() {
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
}(), lr = vt, Ca = { isServer: !vt, useCSSOMInjection: !Yi }, uo = function() {
  function e(t, n, r) {
    t === void 0 && (t = ke), n === void 0 && (n = {});
    var o = this;
    this.options = D(D({}, Ca), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && vt && lr && (lr = !1, cr(this)), $n(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, s = "", u = function(l) {
          var h = function(m) {
            return Ct.get(m);
          }(l);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), g = a.getGroup(l);
          if (_ === void 0 || !_.size || g.length === 0) return "continue";
          var w = "".concat(ge, ".g").concat(l, '[id="').concat(h, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && ($ += "".concat(m, ","));
          }), s += "".concat(g).concat(w, '{content:"').concat($, '"}').concat(Sn);
        }, f = 0; f < c; f++) u(f);
        return s;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return st(t);
  }, e.prototype.rehydrate = function() {
    !this.server && vt && cr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(D(D({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new va(o) : r ? new ga(o) : new ya(o);
    }(this.options), new la(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(st(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ea = /&/g, wa = /^\s*\/\/.*$/gm;
function fo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = fo(n.children, t)), n;
  });
}
function _o(e) {
  var t, n, r, o = e === void 0 ? ke : e, i = o.options, a = i === void 0 ? ke : i, c = o.plugins, s = c === void 0 ? kt : c, u = function(h, _, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, f = s.slice();
  f.push(function(h) {
    h.type === St && h.value.includes("&") && (h.props[0] = h.props[0].replace(Ea, n).replace(r, u));
  }), a.prefix && f.push(Gi), f.push(zi);
  var l = function(h, _, g, w) {
    _ === void 0 && (_ = ""), g === void 0 && (g = ""), w === void 0 && (w = "&"), t = w, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(wa, ""), m = Ui(g || _ ? "".concat(g, " ").concat(_, " { ").concat($, " }") : $);
    a.namespace && (m = fo(m, a.namespace));
    var p = [];
    return yt(m, Wi(f.concat(ji(function(O) {
      return p.push(O);
    })))), p;
  };
  return l.hash = s.length ? s.reduce(function(h, _) {
    return _.name || q(15), fe(h, _.name);
  }, to).toString() : "", l;
}
var Sa = new uo(), en = _o(), On = ne.createContext({ shouldForwardProp: void 0, styleSheet: Sa, stylis: en });
On.Consumer;
var ba = ne.createContext(void 0);
function tn() {
  return Qe(On);
}
function $a(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = te(function() {
    var s = o;
    return e.sheet ? s = e.sheet : e.target && (s = s.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (s = s.reconstructWithOptions({ useCSSOMInjection: !1 })), s;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return _o({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  X(function() {
    Ni(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ne.createElement(On.Provider, { value: c }, ne.createElement(ba.Provider, { value: a }, e.children));
}
var nn = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, $n(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
}(), Oa = function(e) {
  return e >= "A" && e <= "Z";
};
function ur(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Oa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ho = function(e) {
  return e == null || e === !1 || e === "";
}, po = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ho(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(ur(o), ":"), i, ";") : Te(i) ? r.push.apply(r, me(me(["".concat(o, " {")], po(i), !1), ["}"], !1)) : r.push("".concat(ur(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Vi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function he(e, t, n, r) {
  if (ho(e)) return [];
  if (bn(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || Te(o) || o === null || console.error("".concat(oo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? po(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(a) {
    return he(a, t, n, r);
  })) : [e.toString()];
}
function Na(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !bn(n)) return !1;
  }
  return !0;
}
var ka = no(Nt), Ta = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Na(t), this.componentId = n, this.baseHash = fe(ka, n), this.baseStyle = r, uo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Jt(he(this.rules, t, n, r)), a = Kt(fe(this.baseHash, i) >>> 0);
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
          var h = Jt(he(l, t, n, r));
          s = fe(s, h + f), u += h;
        }
      }
      if (u) {
        var _ = Kt(s >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
}(), Ze = ne.createContext(void 0);
Ze.Consumer;
function mo() {
  var e = Qe(Ze);
  if (!e) throw q(18);
  return e;
}
function xa(e) {
  var t = ne.useContext(Ze), n = te(function() {
    return function(r, o) {
      if (!r) throw q(14);
      if (ye(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw q(8);
      return o ? D(D({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ne.createElement(Ze.Provider, { value: n }, e.children) : null;
}
var Ft = {}, fr = /* @__PURE__ */ new Set();
function Ia(e, t, n) {
  var r = bn(e), o = e, i = !Ht(e), a = t.attrs, c = a === void 0 ? kt : a, s = t.componentId, u = s === void 0 ? function(S, k) {
    var E = typeof S != "string" ? "sc" : rr(S);
    Ft[E] = (Ft[E] || 0) + 1;
    var y = "".concat(E, "-").concat(ro(Nt + E + Ft[E]));
    return k ? "".concat(k, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : s, f = t.displayName, l = f === void 0 ? function(S) {
    return Ht(S) ? "styled.".concat(S) : "Styled(".concat(oo(S), ")");
  }(e) : f, h = t.displayName && t.componentId ? "".concat(rr(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(S, k) {
        return w(S, k) && $(S, k);
      };
    } else g = w;
  }
  var m = new Ta(n, h, r ? o.componentStyle : void 0);
  function p(S, k) {
    return function(E, y, F) {
      var U = E.attrs, Pe = E.componentStyle, B = E.defaultProps, ce = E.foldedComponentIds, kn = E.styledComponentId, So = E.target, bo = ne.useContext(Ze), $o = tn(), Tt = E.shouldForwardProp || $o.shouldForwardProp;
      b.NODE_ENV !== "production" && gt(kn);
      var Tn = qi(y, bo, B) || ke, K = function(et, Me, tt) {
        for (var Ce, le = D(D({}, Me), { className: void 0, theme: tt }), At = 0; At < et.length; At += 1) {
          var nt = ye(Ce = et[At]) ? Ce(le) : Ce;
          for (var re in nt) le[re] = re === "className" ? de(le[re], nt[re]) : re === "style" ? D(D({}, le[re]), nt[re]) : nt[re];
        }
        return Me.className && (le.className = de(le.className, Me.className)), le;
      }(U, y, Tn), De = K.as || So, Le = {};
      for (var z in K) K[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && K.theme === Tn || (z === "forwardedAs" ? Le.as = K.forwardedAs : Tt && !Tt(z, De) || (Le[z] = K[z], Tt || b.NODE_ENV !== "development" || Vo(z) || fr.has(z) || !Xt.has(De) || (fr.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xt = function(et, Me) {
        var tt = tn(), Ce = et.generateAndInjectStyles(Me, tt.styleSheet, tt.stylis);
        return b.NODE_ENV !== "production" && gt(Ce), Ce;
      }(Pe, K);
      b.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(xt);
      var It = de(ce, kn);
      return xt && (It += " " + xt), K.className && (It += " " + K.className), Le[Ht(De) && !Xt.has(De) ? "class" : "className"] = It, F && (Le.ref = F), M(De, Le);
    }(O, S, k);
  }
  p.displayName = l;
  var O = ne.forwardRef(p);
  return O.attrs = _, O.componentStyle = m, O.displayName = l, O.shouldForwardProp = g, O.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = h, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = r ? function(k) {
      for (var E = [], y = 1; y < arguments.length; y++) E[y - 1] = arguments[y];
      for (var F = 0, U = E; F < U.length; F++) Qt(k, U[F], !0);
      return k;
    }({}, o.defaultProps, S) : S;
  } }), b.NODE_ENV !== "production" && (Zi(l, h), O.warnTooManyClasses = /* @__PURE__ */ function(S, k) {
    var E = {}, y = !1;
    return function(F) {
      if (!y && (E[F] = !0, Object.keys(E).length >= 200)) {
        var U = k ? ' with the id of "'.concat(k, '"') : "";
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
  }(l, h)), $n(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && co(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function dr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var _r = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function se(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || Te(e)) return _r(he(dr(kt, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? he(r) : _r(he(dr(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = ke), !t) throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, se.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, D(D({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, D(D({}, n), o));
  }, r;
}
var go = function(e) {
  return rn(Ia, e);
}, L = go;
Xt.forEach(function(e) {
  L[e] = go(e);
});
function Re(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Jt(se.apply(void 0, me([e], t, !1))), o = ro(r);
  return new nn(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ct = "__sc-".concat(ge, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[ct] || (window[ct] = 0), window[ct] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ct] += 1);
const Aa = 2, yo = 14, Ra = 0.0276;
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
}, hr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Pa = {
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
}, Da = {
  ...Pa,
  [Ve.FIT_YOUR_EYE]: "Fit your eye into square",
  [Ve.DEVICE_PITCHED]: "Hold your phone at eye level"
}, La = "rgba(19, 19, 19, 0.5)", Ma = 34;
function pr(e, t) {
  return Math.max(t, t + (e - 400) * Ra + 2);
}
const Ha = (e, t = yo) => e ? e.width < e.height ? pr(e.width, t) : pr(e.height, t) : t, Fa = (e) => e > Q.Default ? Be[Q.Default] : e > Q.L ? Be[Q.L] : e > Q.M ? Be[Q.M] : Be[Q.S], Ua = (e) => e ? Fa(e.width) : Be[Q.Default];
function Ba() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const je = xr(void 0);
je.displayName = "UiCustomizationContext";
function ve() {
  const e = Qe(je);
  if (!e)
    throw new Error(
      `${je.displayName} must be used within a ${je.displayName} Provider`
    );
  return e;
}
function za({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = mo(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ha(n, r.minimumSize) }),
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
) }), Wa = L.div`
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
`, ja = L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ga = L.p`
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
class Va extends j {
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
const Ya = L.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Za = ({ children: e, uiProps: t, videoElementSize: n }) => (X(() => {
  Ba();
}, []), /* @__PURE__ */ d($a, { target: t.styleTarget, children: /* @__PURE__ */ d(xa, { theme: t.theme, children: /* @__PURE__ */ d(Ya, { children: /* @__PURE__ */ d(Va, { videoElementSize: n, children: /* @__PURE__ */ d(za, { props: t, videoElementSize: n, children: e }) }) }) }) })), qa = 0.75, Xa = 2, Ka = "dot-auto-capture-video", qe = (e, t) => {
  const n = Je(t);
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
function Ja(e) {
  const [t, n] = H(), r = pe(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
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
}, ns = (e) => {
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
      family: Qa((t = e.font) == null ? void 0 : t.family, He.font.family)
    }
  } : He;
}, Nn = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, Et = class Et {
  constructor() {
    rt(this, "lastDetails", {});
    rt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Et()), this._instance;
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
    this.isDetailChanged(t, n) && Nn(t, n);
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
rt(Et, "_instance");
let an = Et;
an.getInstance();
const mr = (e, t) => {
  Nn(e, {
    instruction: t
  });
}, rs = (e) => {
  Nn(e, { animationEnd: !0 });
}, os = (e) => Number.parseFloat(e.toFixed(3)), Eo = (e, t) => Math.min(e, t), is = ({ height: e, width: t }, n) => {
  const r = Eo(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
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
}, ss = (e, t) => {
  const n = Eo(t.width, t.height);
  return os(e * n);
}, cs = (e) => as(e, qa), ls = (e, t) => ss(e, t) * Xa;
async function us() {
  return navigator.mediaDevices.enumerateDevices();
}
async function fs() {
  return (await us()).filter((t) => t.kind === "videoinput");
}
const ds = () => {
  const [e, t] = H(!1);
  return X(() => {
    (async () => {
      (await fs()).length > 1 && t(!0);
    })();
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
] }), hs = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), wo = L.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ps = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(_s, { size: t }) }), ms = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(wo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(hs, { size: t }) }), gs = L.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, ys = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = ve(), o = ds();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = Ua(r);
  return /* @__PURE__ */ d(gs, { $padding: i, children: [
    o && /* @__PURE__ */ d(ms, { disabled: t, onClick: () => {
      mr(e, Pn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ d(
      ps,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          mr(e, Pn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, gr = 2.6, sn = "1.5s", cn = "1.5s", ln = "ease-in-out", vs = 2500, Cs = "2.5s", Es = "0.3s", ws = "linear", Ss = ".5s", bs = "3s", $s = "ease-in-out", Os = ".5s", Ns = ".5s", ks = "ease-out", Ts = (e) => Re`
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
`, Ds = L.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && se`
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
`, Ls = L.div`
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
  return /* @__PURE__ */ d(Ds, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ d(
    Ls,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ma,
      children: e
    }
  ) });
}, Hs = L.div`
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
] }) }), Us = L.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Bs = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = ve();
  return /* @__PURE__ */ d(Us, { children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ d("mask", { id: "mask", children: [
      /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ d("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function zs({ cameraHeight: e, cameraWidth: t, state: n }) {
  var o;
  const { appStateInstructions: r } = ve();
  return !n || n === Wt.ERROR || !((o = r == null ? void 0 : r[n]) != null && o.visible) ? null : n === Wt.DONE ? /* @__PURE__ */ d(V, { children: [
    e && t && /* @__PURE__ */ d(Bs, { height: e, width: t }),
    /* @__PURE__ */ d(on, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ d(on, { Icon: Fs, isCameraReady: !0, text: r[n].text });
}
const Ws = L.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, js = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Gs = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Je(null), r = mo(), [o, i] = H(), a = pe(
    (c) => {
      var s;
      i((s = c == null ? void 0 : c.detail) == null ? void 0 : s.detectedObject);
    },
    [i]
  );
  return qe(be.DETECTED_FACE_CHANGED, a), X(() => {
    if (!n.current)
      return;
    const c = (s, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: f, faceSize: l } = u, h = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!h)
        return;
      const _ = ls(l, s);
      h.beginPath(), h.arc(f.x, f.y, _, 0, 2 * Math.PI, !1), h.lineWidth = Aa, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, js(n.current), c(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ d(Ws, { ref: n, $isImageMirror: t });
}, Vs = () => {
  const [e, t] = H(), [n, r] = H(!1), o = pe(
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
  }), c = pe(
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
}, Ys = () => {
  const [e, t] = H(Ye.DISTANT), [n, r] = H(we.LOADING), [o, i] = H(), a = pe(
    (c) => {
      const { error: s, phase: u, state: f } = c.detail || {};
      u && t(u), f && r(f), s && i(s);
    },
    [t, r, i]
  );
  return qe(gn.STATUS_CHANGED, a), {
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
}, qs = L.div`
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
        animation: ${Ts(gr)} ${cn}
          ${ln} both;
        animation-delay: ${sn};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && se`
          animation: ${xs(gr)} ${cn}
            ${ln} both;
          animation-delay: ${sn};
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
  const { backdropColor: a } = ve();
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
const Qs = L.div`
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
      animation: ${As} ${cn} ${ln} both;
      animation-delay: ${sn};
    `}
`, ec = L.div`
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
      animation: ${Rs} ${bs} ${$s} both;
      animation-delay: ${Ss};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, tc = L.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && se`
      animation: ${Ps} ${Ns} ${ks} both;
      animation-delay: ${Os};
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
  const { cameraResolution: e, instruction: t, isMirroring: n } = Vs(), { magnifEyeError: r, magnifEyePhase: o, magnifEyeState: i } = Ys(), { instructions: a } = ve(), c = Zs(t.code, o), s = c === Ve.CANDIDATE_SELECTION, u = o === Ye.MIDDLE || o === Ye.CLOSEUP;
  if (i === we.ERROR)
    return /* @__PURE__ */ d(Co, { text: r == null ? void 0 : r.message });
  if ((i === we.RUNNING || i === we.WAITING) && e) {
    const f = cs(e);
    return /* @__PURE__ */ d(V, { children: [
      !u && /* @__PURE__ */ d(Gs, { cameraResolution: e, isImageMirror: n }),
      /* @__PURE__ */ d(
        Xs,
        {
          handleAnimationEnd: () => rs(gn.ANIMATION_END),
          height: e.height,
          initialPosition: f,
          isAnimating: u,
          isInCandidateSelection: s,
          width: e.width
        }
      ),
      c && /* @__PURE__ */ d(
        Ms,
        {
          cssBottom: (f.height + f.shiftY) * 100,
          isAnimating: u,
          isInCandidateSelection: s,
          isPortrait: e.width < e.height,
          children: a[c]
        }
      ),
      /* @__PURE__ */ d(nc, { isAnimating: u, isInCandidateSelection: s }),
      !u && /* @__PURE__ */ d(ys, { customControlEvent: be.CONTROL, isSwitchCameraDisabled: s })
    ] });
  }
  return /* @__PURE__ */ d(
    zs,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: i
    }
  );
}, oc = (e) => {
  var a, c;
  const t = { ...Da, ...e == null ? void 0 : e.instructions }, n = {
    [we.LOADING]: {
      ...hr.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [we.DONE]: { ...hr.done, ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.done }
  }, r = (e == null ? void 0 : e.backdropColor) ?? La, o = (e == null ? void 0 : e.showCameraButtons) ?? !1, i = ns(e == null ? void 0 : e.theme);
  return {
    backdropColor: r,
    instructions: t,
    appStateInstructions: n,
    showCameraButtons: o,
    theme: i
  };
}, ic = ({ props: e }) => {
  const t = Ja(be.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ d(Za, { uiProps: oc(e), videoElementSize: t, children: /* @__PURE__ */ d(rc, {}) });
};
Fo(ic, "x-dot-magnifeye-liveness-ui", ["props"]);
