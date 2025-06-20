var Co = Object.defineProperty;
var wo = (e, t, n) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var et = (e, t, n) => wo(e, typeof t != "symbol" ? t + "" : t, n);
var qe, v, ur, fe, En, fr, dr, hr, rn, Ht, Ft, _r, je = {}, pr = [], So = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ze = Array.isArray;
function X(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function on(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function M(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return Be(e, a, r, o, null);
}
function Be(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ur, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function Eo() {
  return { current: null };
}
function j(e) {
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
function Ut(e) {
  (!e.__d && (e.__d = !0) && fe.push(e) && !ht.__r++ || En != v.debounceRendering) && ((En = v.debounceRendering) || fr)(ht);
}
function ht() {
  for (var e, t, n, r, o, i, a, c = 1; fe.length; ) fe.length > c && fe.sort(dr), e = fe.shift(), c = fe.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = X({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), an(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? be(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, vr(i, n, a), n.__e != o && mr(n)));
  ht.__r = 0;
}
function gr(e, t, n, r, o, i, a, c, s, u, d) {
  var l, _, h, g, S, $, m = r && r.__k || pr, p = t.length;
  for (s = bo(n, t, m, s, p), l = 0; l < p; l++) (h = n.__k[l]) != null && (_ = h.__i == -1 ? je : m[h.__i] || je, h.__i = l, $ = an(e, h, _, o, i, a, c, s, u, d), g = h.__e, h.ref && _.ref != h.ref && (_.ref && sn(_.ref, null, h), d.push(h.ref, h.__c || g, h)), S == null && g != null && (S = g), 4 & h.__u || _.__k === h.__k ? s = yr(h, s, e) : typeof h.type == "function" && $ !== void 0 ? s = $ : g && (s = g.nextSibling), h.__u &= -7);
  return n.__e = S, s;
}
function bo(e, t, n, r, o) {
  var i, a, c, s, u, d = n.length, l = d, _ = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (s = i + _, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Be(null, a, null, null, null) : Ze(a) ? Be(j, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? Be(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, c = null, (u = a.__i = $o(a, n, s, l)) != -1 && (l--, (c = n[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > d ? _-- : o < d && _++), typeof a.type != "function" && (a.__u |= 4)) : u != s && (u == s - 1 ? _-- : u == s + 1 ? _++ : (u > s ? _-- : _++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < d; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = be(c)), wr(c, c));
  return r;
}
function yr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = yr(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = be(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ze(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function $o(e, t, n, r) {
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
function bn(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || So.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || bn(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || bn(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(hr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = rn, e.addEventListener(t, i ? Ft : Ht, i)) : e.removeEventListener(t, i ? Ft : Ht, i);
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
function an(e, t, n, r, o, i, a, c, s, u) {
  var d, l, _, h, g, S, $, m, p, k, E, N, w, y, H, U, Ae, B = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (s = !!(32 & n.__u), i = [c = t.__e = n.__e]), (d = v.__b) && d(t);
  e: if (typeof B == "function") try {
    if (m = t.props, p = "prototype" in B && B.prototype.render, k = (d = B.contextType) && r[d.__c], E = d ? k ? k.props.value : d.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (p ? t.__c = l = new B(m, E) : (t.__c = l = new V(m, E), l.constructor = B, l.render = Oo), k && k.sub(l), l.props = m, l.state || (l.state = {}), l.context = E, l.__n = r, _ = l.__d = !0, l.__h = [], l._sb = []), p && l.__s == null && (l.__s = l.state), p && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, B.getDerivedStateFromProps(m, l.__s))), h = l.props, g = l.state, l.__v = t, _) p && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), p && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (p && B.getDerivedStateFromProps == null && m !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, E), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, E) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(le) {
          le && (le.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, E), p && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(h, g, S);
      });
    }
    if (l.context = E, l.props = m, l.__P = e, l.__e = !1, w = v.__r, y = 0, p) {
      for (l.state = l.__s, l.__d = !1, w && w(t), d = l.render(l.props, l.state, l.context), H = 0; H < l._sb.length; H++) l.__h.push(l._sb[H]);
      l._sb = [];
    } else do
      l.__d = !1, w && w(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = X(X({}, r), l.getChildContext())), p && !_ && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(h, g)), U = d, d != null && d.type === j && d.key == null && (U = Cr(d.props.children)), c = gr(e, Ze(U) ? U : [U], t, n, r, o, i, a, c, s, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
  } catch (le) {
    if (t.__v = null, s || i != null) if (le.then) {
      for (t.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (Ae = i.length; Ae--; ) on(i[Ae]);
    else t.__e = n.__e, t.__k = n.__k;
    v.__e(le, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : c = t.__e = ko(n.__e, t, n, r, o, i, a, s, u);
  return (d = v.diffed) && d(t), 128 & t.__u ? void 0 : c;
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
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ze(e) ? e.map(Cr) : X({}, e);
}
function ko(e, t, n, r, o, i, a, c, s) {
  var u, d, l, _, h, g, S, $ = n.props, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((h = i[u]) && "setAttribute" in h == !!p && (p ? h.localName == p : h.nodeType == 3)) {
      e = h, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), c && (v.__m && v.__m(t, i), c = !1), i = null;
  }
  if (p == null) $ === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && qe.call(e.childNodes), $ = n.props || je, !c && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(h = e.attributes[u]).name] = h.value;
    for (u in $) if (h = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = h;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        tt(e, u, null, h, o);
      }
    }
    for (u in m) h = m[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? d = h : u == "value" ? g = h : u == "checked" ? S = h : c && typeof h != "function" || $[u] === h || tt(e, u, h, $[u], o);
    if (d) c || l && (d.__html == l.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), gr(t.type == "template" ? e.content : e, Ze(_) ? _ : [_], t, n, r, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && be(n, 0), c, s), i != null) for (u = i.length; u--; ) on(i[u]);
    c || (u = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || p == "progress" && !g || p == "option" && g != $[u]) && tt(e, u, g, $[u], o), u = "checked", S != null && S != e[u] && tt(e, u, S, $[u], o));
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
function Oo(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], an(t, e = (!r && n || t).__k = M(j, null, [e]), o || je, je, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), vr(i, e, a);
}
function cn(e, t) {
  se(e, t, cn);
}
function ln(e, t, n) {
  var r, o, i, a, c = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? qe.call(arguments, 2) : n), Be(e.type, c, r || e.key, o || e.ref, null);
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
  return t.__c = "__cC" + _r++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
qe = pr.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, ur = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, n), this.props)), e && X(n, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, V.prototype.render = j, fe = [], fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, dr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, hr = /(PointerCapture)$|Capture$/i, rn = 0, Ht = $n(!1), Ft = $n(!0), _r = 0;
function un() {
  return (un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var No = ["context", "children"];
function xo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, c = {}, s = Object.keys(r);
    for (a = 0; a < s.length; a++) o.indexOf(i = s[a]) >= 0 || (c[i] = r[i]);
    return c;
  }(e, No);
  return ln(t, n);
}
function Io() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = M(xo, un({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, c = n.attributes, s = n.childNodes;
    for (a = c.length; a--; ) c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[Er(c[a].name)] = c[a].value);
    for (a = s.length; a--; ) {
      var u = t(s[a], null), d = s[a].slot;
      d ? i[d] = M(kn, { name: d }, u) : o[a] = u;
    }
    var l = r ? M(kn, null, o) : o;
    return M(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? cn : se)(this._vdom, this._root);
}
function Er(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function To(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Er(e)] = n, this._vdom = ln(this._vdom, r), se(this._vdom, this._root);
  }
}
function Ro() {
  se(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this;
  return M("slot", un({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Ao(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Io, o.prototype.attributeChangedCallback = To, o.prototype.disconnectedCallback = Ro, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
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
function f(e, t, n, r, o, i) {
  t || (t = {});
  var a, c, s = t;
  if ("ref" in s) for (c in s = {}, t) c == "ref" ? a = t[c] : s[c] = t[c];
  var u = { type: e, props: s, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Lo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) s[c] === void 0 && (s[c] = a[c]);
  return v.vnode && v.vnode(u), u;
}
const On = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var me = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(me || {});
const Nn = {
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
  LEFT_EYE_NOT_PRESENT: `left_${Nn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Nn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Y = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var ce, I, Tt, xn, $e = 0, br = [], T = v, In = T.__b, Tn = T.__r, Rn = T.diffed, An = T.__c, Ln = T.unmount, Pn = T.__;
function Ie(e, t) {
  T.__h && T.__h(I, e, $e || t), $e = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function z(e) {
  return $e = 1, fn(Or, e);
}
function fn(e, t, n) {
  var r = Ie(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Or(void 0, t), function(c) {
    var s = r.__N ? r.__N[0] : r.__[0], u = r.t(s, c);
    s !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.__f)) {
    var o = function(c, s, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (d.every(function(_) {
        return !_.__N;
      })) return !i || i.call(this, c, s, u);
      var l = r.__c.props !== c;
      return d.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (l = !0);
        }
      }), i && i.call(this, c, s, u) || l;
    };
    I.__f = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(c, s, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(c, s, u), i = d;
      }
      a && a.call(this, c, s, u);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = Ie(ce++, 3);
  !T.__s && dn(n.__H, t) && (n.__ = e, n.u = t, I.__H.__h.push(n));
}
function Te(e, t) {
  var n = Ie(ce++, 4);
  !T.__s && dn(n.__H, t) && (n.__ = e, n.u = t, I.__h.push(n));
}
function Ye(e) {
  return $e = 5, ne(function() {
    return { current: e };
  }, []);
}
function $r(e, t, n) {
  $e = 6, Te(function() {
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
function ne(e, t) {
  var n = Ie(ce++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
  return $e = 8, ne(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = I.context[e.__c], n = Ie(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function _t(e, t) {
  T.useDebugValue && T.useDebugValue(t ? t(e) : e);
}
function kr() {
  var e = Ie(ce++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Po() {
  for (var e; e = br.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(Bt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], T.__e(t, e.__v);
  }
}
T.__b = function(e) {
  I = null, In && In(e);
}, T.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Pn && Pn(e, t);
}, T.__r = function(e) {
  Tn && Tn(e), ce = 0;
  var t = (I = e.__c).__H;
  t && (Tt === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(Bt), t.__h = [], ce = 0)), Tt = I;
}, T.diffed = function(e) {
  Rn && Rn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (br.push(t) !== 1 && xn === T.requestAnimationFrame || ((xn = T.requestAnimationFrame) || Do)(Po)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Tt = I = null;
}, T.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || Bt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], T.__e(r, n.__v);
    }
  }), An && An(e, t);
}, T.unmount = function(e) {
  Ln && Ln(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      at(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && T.__e(t, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Do(e) {
  var t, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Dn && (t = requestAnimationFrame(n));
}
function at(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function Bt(e) {
  var t = I;
  e.__c = e.__(), I = t;
}
function dn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Or(e, t) {
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
function Mo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ho = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fo = /* @__PURE__ */ Mo(
  function(e) {
    return Ho.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Nr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Wt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function xr(e, t) {
  var n = t(), r = z({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Te(function() {
    o.__ = n, o.u = t, Rt(o) && i({ t: o });
  }, [e, n, t]), re(function() {
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
function Ir(e) {
  e();
}
function Tr(e) {
  return e;
}
function Rr() {
  return [!1, Ir];
}
var Ar = Te;
function zt(e, t) {
  this.props = e, this.context = t;
}
function Uo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Wt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, M(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(zt.prototype = new V()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return Wt(this.props, e) || Wt(this.state, t);
};
var Mn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var Bo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Wo(e) {
  function t(n) {
    var r = Nr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Bo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, zo = { map: Hn, forEach: Hn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, jo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  jo(e, t, n, r);
};
var Fn = v.unmount;
function Lr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Nr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Lr(r, t, n);
  })), e;
}
function Pr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Pr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function st() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Dr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Go(e) {
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
function He() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fn && Fn(e);
}, (st.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Dr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var s = r.state.__a;
        r.__v.__k[0] = Pr(s, s.__c.__P, s.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, st.prototype.componentWillUnmount = function() {
  this.o = [];
}, st.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Lr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && M(j, null, e.fallback);
  return o && (o.__u &= -33), [M(j, null, t.__a ? null : e.children), o];
};
var Un = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Vo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    se(null, t.v), t.v = null, t.h = null;
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
  se(M(Vo, { context: t.context }, e.__v), t.v);
}
function Zo(e, t) {
  var n = M(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(He.prototype = new V()).__a = function(e) {
  var t = this, n = Dr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Un(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Un(e, n, t);
  });
};
var Mr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Yo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qo = /[A-Z0-9]/g, Ko = typeof document < "u", Jo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ei(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ti(e, t, n) {
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
function ni() {
}
function ri() {
  return this.cancelBubble;
}
function oi() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Bn && (e = Bn(e)), e.persist = ni, e.isPropagationStopped = ri, e.isDefaultPrevented = oi, e.nativeEvent = e;
};
var hn, ii = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var c = n[a];
      if (!(a === "value" && "defaultValue" in n && c == null || Ko && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var s = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : s === "translate" && c === "no" ? c = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Jo(n.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : Xo.test(a) && (a = s) : s = a = "oninput" : i && Yo.test(a) ? a = a.replace(Qo, "-$&").toLowerCase() : c === null && (c = void 0), s === "oninput" && o[a = s] && (a = "oninputCapture"), o[a] = c;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ii)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Mr, Wn && Wn(e);
};
var zn = v.__r;
v.__r = function(e) {
  zn && zn(e), hn = e.__c;
};
var jn = v.diffed;
v.diffed = function(e) {
  jn && jn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), hn = null;
};
var ai = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return hn.__n[e.__c].props.value;
}, useCallback: ge, useContext: Xe, useDebugValue: _t, useDeferredValue: Tr, useEffect: re, useId: kr, useImperativeHandle: $r, useInsertionEffect: Ar, useLayoutEffect: Te, useMemo: ne, useReducer: fn, useRef: Ye, useState: z, useSyncExternalStore: xr, useTransition: Rr } } };
function si(e) {
  return M.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === Mr;
}
function ci(e) {
  return vt(e) && e.type === j;
}
function li(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ui(e) {
  return vt(e) ? ln.apply(null, arguments) : e;
}
function fi(e) {
  return !!e.__k && (se(null, e), !0);
}
function di(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var hi = function(e, t) {
  return e(t);
}, _i = function(e, t) {
  return e(t);
}, pi = j, mi = vt, oe = { useState: z, useId: kr, useReducer: fn, useEffect: re, useLayoutEffect: Te, useInsertionEffect: Ar, useTransition: Rr, useDeferredValue: Tr, useSyncExternalStore: xr, startTransition: Ir, useRef: Ye, useImperativeHandle: $r, useMemo: ne, useCallback: ge, useContext: Xe, useDebugValue: _t, version: "18.3.1", Children: zo, render: ei, hydrate: ti, unmountComponentAtNode: fi, createPortal: Zo, createElement: M, createContext: Sr, createFactory: si, cloneElement: ui, createRef: Eo, Fragment: j, isValidElement: vt, isElement: mi, isFragment: ci, isMemo: li, findDOMNode: di, Component: V, PureComponent: zt, memo: Uo, forwardRef: Wo, flushSync: _i, unstable_batchedUpdates: hi, StrictMode: pi, Suspense: st, SuspenseList: He, lazy: Go, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ai };
function gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At, Gn;
function yi() {
  return Gn || (Gn = 1, At = function(t, n, r, o) {
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
      var d = a[u];
      if (!s(d))
        return !1;
      var l = t[d], _ = n[d];
      if (i = r ? r.call(o, l, _, d) : void 0, i === !1 || i === void 0 && l !== _)
        return !1;
    }
    return !0;
  }), At;
}
var vi = yi();
const Ci = /* @__PURE__ */ gi(vi);
var x = "-ms-", We = "-moz-", O = "-webkit-", Hr = "comm", Ct = "rule", _n = "decl", wi = "@import", Fr = "@keyframes", Si = "@layer", Ur = Math.abs, pn = String.fromCharCode, jt = Object.assign;
function Ei(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Br(e) {
  return e.trim();
}
function J(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function ct(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function Z(e) {
  return e.length;
}
function Wr(e) {
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
    return !J(n, t);
  });
}
var wt = 1, Oe = 1, zr = 0, G = 0, R = 0, Re = "";
function St(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Oe, length: a, return: "", siblings: c };
}
function ae(e, t) {
  return jt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function $i() {
  return R;
}
function ki() {
  return R = G > 0 ? A(Re, --G) : 0, Oe--, R === 10 && (Oe = 1, wt--), R;
}
function q() {
  return R = G < zr ? A(Re, G++) : 0, Oe++, R === 10 && (Oe = 1, wt++), R;
}
function _e() {
  return A(Re, G);
}
function lt() {
  return G;
}
function Et(e, t) {
  return ke(Re, e, t);
}
function Gt(e) {
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
function Oi(e) {
  return wt = Oe = 1, zr = Z(Re = e), G = 0, [];
}
function Ni(e) {
  return Re = "", e;
}
function Lt(e) {
  return Br(Et(G - 1, Vt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xi(e) {
  for (; (R = _e()) && R < 33; )
    q();
  return Gt(e) > 2 || Gt(R) > 3 ? "" : " ";
}
function Ii(e, t) {
  for (; --t && q() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return Et(e, lt() + (t < 6 && _e() == 32 && q() == 32));
}
function Vt(e) {
  for (; q(); )
    switch (R) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vt(R);
        break;
      // (
      case 40:
        e === 41 && Vt(e);
        break;
      // \
      case 92:
        q();
        break;
    }
  return G;
}
function Ti(e, t) {
  for (; q() && e + R !== 57; )
    if (e + R === 84 && _e() === 47)
      break;
  return "/*" + Et(t, G - 1) + "*" + pn(e === 47 ? e : q());
}
function Ri(e) {
  for (; !Gt(_e()); )
    q();
  return Et(e, G);
}
function Ai(e) {
  return Ni(ut("", null, null, null, [""], e = Oi(e), 0, [0], e));
}
function ut(e, t, n, r, o, i, a, c, s) {
  for (var u = 0, d = 0, l = a, _ = 0, h = 0, g = 0, S = 1, $ = 1, m = 1, p = 0, k = "", E = o, N = i, w = r, y = k; $; )
    switch (g = p, p = q()) {
      // (
      case 40:
        if (g != 108 && A(y, l - 1) == 58) {
          ct(y += C(Lt(p), "&", "&\f"), "&\f", Ur(u ? c[u - 1] : 0)) != -1 && (m = -1);
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
        y += xi(g);
        break;
      // \
      case 92:
        y += Ii(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Fe(Li(Ti(q(), lt()), t, n, s), s);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * S:
        c[u++] = Z(y) * m;
      // } ; \0
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + d:
            m == -1 && (y = C(y, /\f/g, "")), h > 0 && Z(y) - l && Fe(h > 32 ? Zn(y + ";", r, n, l - 1, s) : Zn(C(y, " ", "") + ";", r, n, l - 2, s), s);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Fe(w = qn(y, t, n, u, d, o, c, k, E = [], N = [], l, i), i), p === 123)
              if (d === 0)
                ut(y, t, w, w, E, i, l, c, N);
              else
                switch (_ === 99 && A(y, 3) === 110 ? 100 : _) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, w, w, r && Fe(qn(e, w, w, 0, 0, o, c, k, o, E = [], l, N), N), o, N, l, c, r ? E : N);
                    break;
                  default:
                    ut(y, w, w, w, [""], N, 0, c, N);
                }
        }
        u = d = h = 0, S = m = 1, k = y = "", l = a;
        break;
      // :
      case 58:
        l = 1 + Z(y), h = g;
      default:
        if (S < 1) {
          if (p == 123)
            --S;
          else if (p == 125 && S++ == 0 && ki() == 125)
            continue;
        }
        switch (y += pn(p), p * S) {
          // &
          case 38:
            m = d > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Z(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            _e() === 45 && (y += Lt(q())), _ = _e(), d = l = Z(k = y += Ri(lt())), p++;
            break;
          // -
          case 45:
            g === 45 && Z(y) == 2 && (S = 0);
        }
    }
  return i;
}
function qn(e, t, n, r, o, i, a, c, s, u, d, l) {
  for (var _ = o - 1, h = o === 0 ? i : [""], g = Wr(h), S = 0, $ = 0, m = 0; S < r; ++S)
    for (var p = 0, k = ke(e, _ + 1, _ = Ur($ = a[S])), E = e; p < g; ++p)
      (E = Br($ > 0 ? h[p] + " " + k : C(k, /&\f/g, h[p]))) && (s[m++] = E);
  return St(e, t, n, o === 0 ? Ct : c, s, u, d, l);
}
function Li(e, t, n, r) {
  return St(e, t, n, Hr, pn($i()), ke(e, 2, -2), 0, r);
}
function Zn(e, t, n, r, o) {
  return St(e, t, n, _n, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function jr(e, t, n) {
  switch (Ei(e, t)) {
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
      return O + e + We + e + x + e + e;
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
      return O + e + x + "flex-item-" + C(e, /flex-|-self/g, "") + (J(e, /flex-|baseline/) ? "" : x + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
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
      if (!J(e, /flex-|baseline/)) return x + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, J(r.props, /grid-\w+-end/);
      }) ? ~ct(e + (n = n[t].value), "span", 0) ? e : x + C(e, "-start", "") + e + x + "grid-row-span:" + (~ct(n, "span", 0) ? J(n, /\d+/) : +J(n, /\d+/) - +J(e, /\d+/)) + ";" : x + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return J(r.props, /grid-\w+-start/);
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
      if (Z(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + We + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ct(e, "stretch", 0) ? jr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, s, u) {
        return x + o + ":" + i + u + (a ? x + o + "-span:" + (c ? s : +s - +i) + u : "") + e;
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
function pt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Pi(e, t, n, r) {
  switch (e.type) {
    case Si:
      if (e.children.length) break;
    case wi:
    case _n:
      return e.return = e.return || e.value;
    case Hr:
      return "";
    case Fr:
      return e.return = e.value + "{" + pt(e.children, r) + "}";
    case Ct:
      if (!Z(e.value = e.props.join(","))) return "";
  }
  return Z(n = pt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Di(e) {
  var t = Wr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function Mi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Hi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _n:
        e.return = jr(e.value, e.length, n);
        return;
      case Fr:
        return pt([ae(e, { value: C(e.value, "@", "@" + O) })], r);
      case Ct:
        if (e.length)
          return bi(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(ae(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), Ee(ae(e, { props: [o] })), jt(e, { props: Vn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(ae(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Ee(ae(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), Ee(ae(e, { props: [C(o, /:(plac\w+)/, x + "input-$1")] })), Ee(ae(e, { props: [o] })), jt(e, { props: Vn(n, r) });
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
}, b = {}, ve = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Gr = "active", Vr = "data-styled-version", bt = "6.1.18", mn = `/*!sc*/
`, mt = typeof window < "u" && typeof document < "u", Ui = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Yn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Bi = function(e, t) {
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
        Yn.test(a) ? (i = !1, nt.delete(r)) : o.apply(void 0, ye([a], c, !1));
      }, Ye(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (a) {
      Yn.test(a.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $t = Object.freeze([]), Ne = Object.freeze({});
function Wi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ji = /(^-|-$)/g;
function Xn(e) {
  return e.replace(zi, "-").replace(ji, "");
}
var Gi = /(a)(d)/gi, rt = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = Qn(t % rt) + n;
  return (Qn(t % rt) + n).replace(Gi, "$1-$2");
}
var Pt, qr = 5381, de = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Zr = function(e) {
  return de(qr, e);
};
function Yr(e) {
  return Zt(Zr(e) >>> 0);
}
function Xr(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Qr = typeof Symbol == "function" && Symbol.for, Kr = Qr ? Symbol.for("react.memo") : 60115, Vi = Qr ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Jr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Yi = ((Pt = {})[Vi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Pt[Kr] = Jr, Pt);
function Kn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Kr ? Jr : "$$typeof" in e ? Yi[e.$$typeof] : qi;
  var t;
}
var Xi = Object.defineProperty, Qi = Object.getOwnPropertyNames, Jn = Object.getOwnPropertySymbols, Ki = Object.getOwnPropertyDescriptor, Ji = Object.getPrototypeOf, er = Object.prototype;
function eo(e, t, n) {
  if (typeof t != "string") {
    if (er) {
      var r = Ji(t);
      r && r !== er && eo(e, r, n);
    }
    var o = Qi(t);
    Jn && (o = o.concat(Jn(t)));
    for (var i = Kn(e), a = Kn(t), c = 0; c < o.length; ++c) {
      var s = o[c];
      if (!(s in Zi || n && n[s] || a && s in a || i && s in i)) {
        var u = Ki(t, s);
        try {
          Xi(e, s, u);
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
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Yt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Xt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !xe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Xt(e[r], t[r]);
  else if (xe(t)) for (var r in t) e[r] = Xt(e[r], t[r]);
  return e;
}
function yn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ea = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ta() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Q(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ta.apply(void 0, ye([ea[e]], t, !1)).trim());
}
var na = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Q(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(mn);
    return n;
  }, e;
}(), ra = 1 << 30, ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), dt = 1, ot = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; gt.has(dt); ) dt++;
  var t = dt++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > ra)) throw Q(16, "".concat(t));
  return ft.set(e, t), gt.set(t, e), t;
}, oa = function(e, t) {
  dt = t + 1, ft.set(e, t), gt.set(t, e);
}, ia = "style[".concat(ve, "][").concat(Vr, '="').concat(bt, '"]'), aa = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), sa = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ca = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var s = c.match(aa);
      if (s) {
        var u = 0 | parseInt(s[1], 10), d = s[2];
        u !== 0 && (oa(d, u), sa(e, d, s[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, tr = function(e) {
  for (var t = document.querySelectorAll(ia), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ve) !== Gr && (ca(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function la() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var to = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var s = Array.from(c.querySelectorAll("style[".concat(ve, "]")));
    return s[s.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Gr), r.setAttribute(Vr, bt);
  var a = la();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ua = function() {
  function e(t) {
    this.element = to(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw Q(17);
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
}(), fa = function() {
  function e(t) {
    this.element = to(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), da = function() {
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
}(), nr = mt, ha = { isServer: !mt, useCSSOMInjection: !Ui }, no = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ha), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && mt && nr && (nr = !1, tr(this)), yn(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, s = "", u = function(l) {
          var _ = function(m) {
            return gt.get(m);
          }(l);
          if (_ === void 0) return "continue";
          var h = i.names.get(_), g = a.getGroup(l);
          if (h === void 0 || !h.size || g.length === 0) return "continue";
          var S = "".concat(ve, ".g").concat(l, '[id="').concat(_, '"]'), $ = "";
          h !== void 0 && h.forEach(function(m) {
            m.length > 0 && ($ += "".concat(m, ","));
          }), s += "".concat(g).concat(S, '{content:"').concat($, '"}').concat(mn);
        }, d = 0; d < c; d++) u(d);
        return s;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && mt && tr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new da(o) : r ? new ua(o) : new fa(o);
    }(this.options), new na(t)));
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
}(), _a = /&/g, pa = /^\s*\/\/.*$/gm;
function ro(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = ro(n.children, t)), n;
  });
}
function oo(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, c = o.plugins, s = c === void 0 ? $t : c, u = function(_, h, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, d = s.slice();
  d.push(function(_) {
    _.type === Ct && _.value.includes("&") && (_.props[0] = _.props[0].replace(_a, n).replace(r, u));
  }), a.prefix && d.push(Hi), d.push(Pi);
  var l = function(_, h, g, S) {
    h === void 0 && (h = ""), g === void 0 && (g = ""), S === void 0 && (S = "&"), t = S, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = _.replace(pa, ""), m = Ai(g || h ? "".concat(g, " ").concat(h, " { ").concat($, " }") : $);
    a.namespace && (m = ro(m, a.namespace));
    var p = [];
    return pt(m, Di(d.concat(Mi(function(k) {
      return p.push(k);
    })))), p;
  };
  return l.hash = s.length ? s.reduce(function(_, h) {
    return h.name || Q(15), de(_, h.name);
  }, qr).toString() : "", l;
}
var ma = new no(), Qt = oo(), vn = oe.createContext({ shouldForwardProp: void 0, styleSheet: ma, stylis: Qt });
vn.Consumer;
var ga = oe.createContext(void 0);
function Kt() {
  return Xe(vn);
}
function ya(e) {
  var t = z(e.stylisPlugins), n = t[0], r = t[1], o = Kt().styleSheet, i = ne(function() {
    var s = o;
    return e.sheet ? s = e.sheet : e.target && (s = s.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (s = s.reconstructWithOptions({ useCSSOMInjection: !1 })), s;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = ne(function() {
    return oo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  re(function() {
    Ci(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = ne(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return oe.createElement(vn.Provider, { value: c }, oe.createElement(ga.Provider, { value: a }, e.children));
}
var Jt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw Q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), va = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    va(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var io = function(e) {
  return e == null || e === !1 || e === "";
}, ao = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !io(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(rr(o), ":"), i, ";") : xe(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], ao(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (io(e)) return [];
  if (gn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Jt || xe(o) || o === null || console.error("".concat(Xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof Jt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : xe(e) ? ao(e) : Array.isArray(e) ? Array.prototype.concat.apply($t, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function Ca(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !gn(n)) return !1;
  }
  return !0;
}
var wa = Zr(bt), Sa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ca(t), this.componentId = n, this.baseHash = de(wa, n), this.baseStyle = r, no.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = he(o, this.staticRulesId);
    else {
      var i = Yt(pe(this.rules, t, n, r)), a = Zt(de(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = he(o, a), this.staticRulesId = a;
    }
    else {
      for (var s = de(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string") u += l, b.NODE_ENV !== "production" && (s = de(s, l));
        else if (l) {
          var _ = Yt(pe(l, t, n, r));
          s = de(s, _ + d), u += _;
        }
      }
      if (u) {
        var h = Zt(s >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = he(o, h);
      }
    }
    return o;
  }, e;
}(), Ge = oe.createContext(void 0);
Ge.Consumer;
function so() {
  var e = Xe(Ge);
  if (!e) throw Q(18);
  return e;
}
function Ea(e) {
  var t = oe.useContext(Ge), n = ne(function() {
    return function(r, o) {
      if (!r) throw Q(14);
      if (Ce(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Q(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(Ge.Provider, { value: n }, e.children) : null;
}
var Mt = {}, or = /* @__PURE__ */ new Set();
function ba(e, t, n) {
  var r = gn(e), o = e, i = !Dt(e), a = t.attrs, c = a === void 0 ? $t : a, s = t.componentId, u = s === void 0 ? function(E, N) {
    var w = typeof E != "string" ? "sc" : Xn(E);
    Mt[w] = (Mt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(Yr(bt + w + Mt[w]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, l = d === void 0 ? function(E) {
    return Dt(E) ? "styled.".concat(E) : "Styled(".concat(Xr(E), ")");
  }(e) : d, _ = t.displayName && t.componentId ? "".concat(Xn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(E, N) {
        return S(E, N) && $(E, N);
      };
    } else g = S;
  }
  var m = new Sa(n, _, r ? o.componentStyle : void 0);
  function p(E, N) {
    return function(w, y, H) {
      var U = w.attrs, Ae = w.componentStyle, B = w.defaultProps, le = w.foldedComponentIds, wn = w.styledComponentId, go = w.target, yo = oe.useContext(Ge), vo = Kt(), Ot = w.shouldForwardProp || vo.shouldForwardProp;
      b.NODE_ENV !== "production" && _t(wn);
      var Sn = Wi(y, yo, B) || Ne, K = function(Qe, De, Ke) {
        for (var Se, ue = P(P({}, De), { className: void 0, theme: Ke }), It = 0; It < Qe.length; It += 1) {
          var Je = Ce(Se = Qe[It]) ? Se(ue) : Se;
          for (var ie in Je) ue[ie] = ie === "className" ? he(ue[ie], Je[ie]) : ie === "style" ? P(P({}, ue[ie]), Je[ie]) : Je[ie];
        }
        return De.className && (ue.className = he(ue.className, De.className)), ue;
      }(U, y, Sn), Le = K.as || go, Pe = {};
      for (var W in K) K[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && K.theme === Sn || (W === "forwardedAs" ? Pe.as = K.forwardedAs : Ot && !Ot(W, Le) || (Pe[W] = K[W], Ot || b.NODE_ENV !== "development" || Fo(W) || or.has(W) || !qt.has(Le) || (or.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(Qe, De) {
        var Ke = Kt(), Se = Qe.generateAndInjectStyles(De, Ke.styleSheet, Ke.stylis);
        return b.NODE_ENV !== "production" && _t(Se), Se;
      }(Ae, K);
      b.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Nt);
      var xt = he(le, wn);
      return Nt && (xt += " " + Nt), K.className && (xt += " " + K.className), Pe[Dt(Le) && !qt.has(Le) ? "class" : "className"] = xt, H && (Pe.ref = H), M(Le, Pe);
    }(k, E, N);
  }
  p.displayName = l;
  var k = oe.forwardRef(p);
  return k.attrs = h, k.componentStyle = m, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = r ? he(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = _, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(N) {
      for (var w = [], y = 1; y < arguments.length; y++) w[y - 1] = arguments[y];
      for (var H = 0, U = w; H < U.length; H++) Xt(N, U[H], !0);
      return N;
    }({}, o.defaultProps, E) : E;
  } }), b.NODE_ENV !== "production" && (Bi(l, _), k.warnTooManyClasses = /* @__PURE__ */ function(E, N) {
    var w = {}, y = !1;
    return function(H) {
      if (!y && (w[H] = !0, Object.keys(w).length >= 200)) {
        var U = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(U, `.
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
  }(l, _)), yn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && eo(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ar = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || xe(e)) return ar(pe(ir($t, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : ar(pe(ir(r, t)));
}
function en(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw Q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Cn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return en(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return en(e, t, P(P({}, n), o));
  }, r;
}
var co = function(e) {
  return en(ba, e);
}, F = co;
qt.forEach(function(e) {
  F[e] = co(e);
});
function kt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Yt(Cn.apply(void 0, ye([e], t, !1))), o = Yr(r);
  return new Jt(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ve, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const D = {
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
}, $a = 2, lo = 14, ka = 0.0276;
var ee = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ee || {});
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
}, sr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Oa = {
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
}, Na = D.CIRCLE_SOLID, xa = "rgba(19, 19, 19, 0.5)", Ia = 34;
function cr(e, t) {
  return Math.max(t, t + (e - 400) * ka + 2);
}
const Ta = (e, t = lo) => e ? e.width < e.height ? cr(e.width, t) : cr(e.height, t) : t, Ra = (e) => e > ee.Default ? Ue[ee.Default] : e > ee.L ? Ue[ee.L] : e > ee.M ? Ue[ee.M] : Ue[ee.S], Aa = (e) => e ? Ra(e.width) : Ue[ee.Default];
function La() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const ze = Sr(void 0);
ze.displayName = "UiCustomizationContext";
function we() {
  const e = Xe(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function Pa({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = so(), o = ne(
    () => ({ ...t, videoElementSize: n, fontSize: Ta(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(ze.Provider, { value: o, children: e });
}
const uo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Da = F.div`
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
`, Ma = F.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ha = F.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, tn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = we();
  return /* @__PURE__ */ f(Da, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(Ma, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Ha, { $fontSize: o, children: r })
  ] }) });
}, fo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(tn, { Icon: uo, position: "relative", text: e });
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
    return this.state.hasError ? /* @__PURE__ */ f(fo, { Icon: uo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ua = F.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Ba = ({ children: e, uiProps: t, videoElementSize: n }) => (re(() => {
  La();
}, []), /* @__PURE__ */ f(ya, { target: t.styleTarget, children: /* @__PURE__ */ f(Ea, { theme: t.theme, children: /* @__PURE__ */ f(Ua, { children: /* @__PURE__ */ f(Fa, { videoElementSize: n, children: /* @__PURE__ */ f(Pa, { props: t, videoElementSize: n, children: e }) }) }) }) })), Wa = 0.75, za = 2, ja = "dot-auto-capture-video", Ve = (e, t) => {
  const n = Ye(t);
  re(() => {
    n.current = t;
  }, [t]), re(
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
function Ga(e) {
  const [t, n] = z(), r = ge(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ve(e, r), Te(() => {
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
}, Za = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: lo
}, Me = {
  colors: qa,
  font: Za
}, Ya = (e) => {
  var t;
  return e ? {
    ...Me,
    ...e,
    colors: {
      ...Me.colors,
      ...e.colors
    },
    font: {
      ...Me.font,
      ...e.font,
      family: Va((t = e.font) == null ? void 0 : t.family, Me.font.family)
    }
  } : Me;
}, Xa = (e) => Number.parseFloat(e.toFixed(3)), ho = (e, t) => Math.min(e, t), Qa = ({ height: e, width: t }, n) => {
  const r = ho(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
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
}, Ja = (e, t) => {
  const n = ho(t.width, t.height);
  return Xa(e * n);
}, es = (e) => Ka(e, Wa), ts = (e, t) => Ja(e, t) * za, _o = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, yt = class yt {
  constructor() {
    et(this, "lastDetails", {});
    et(this, "delayedTime", 0);
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
  isDetailChanged(t, n) {
    return JSON.stringify(n) !== JSON.stringify(this.lastDetails[t]) ? (this.lastDetails[t] = n, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(t, n) {
    this.isDetailChanged(t, n) && _o(t, n);
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
et(yt, "_instance");
let nn = yt;
nn.getInstance();
const lr = (e, t) => {
  _o(e, {
    instruction: t
  });
};
async function ns() {
  return navigator.mediaDevices.enumerateDevices();
}
async function rs() {
  return (await ns()).filter((t) => t.kind === "videoinput");
}
const os = () => {
  const [e, t] = z(!1);
  return re(() => {
    (async () => {
      (await rs()).length > 1 && t(!0);
    })();
  }, []), e;
}, is = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), as = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), po = F.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ss = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(is, { size: t }) }), cs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(as, { size: t }) }), ls = F.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, us = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = we(), o = os();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = Aa(r);
  return /* @__PURE__ */ f(ls, { $padding: i, children: [
    o && /* @__PURE__ */ f(cs, { disabled: t, onClick: () => {
      lr(e, On.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ f(
      ss,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          lr(e, On.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, fs = "2.5s", ds = "0.3s", hs = "linear", _s = kt`
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
const ps = F.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cn`
      animation: ${_s} ${ds}
        ${hs} both;
      animation-delay: ${fs};

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
`, ms = F.div`
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
`, gs = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = we();
  return /* @__PURE__ */ f(ps, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    ms,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ia,
      children: e
    }
  ) });
}, ys = F.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, vs = ({ svgSize: e }) => /* @__PURE__ */ f(ys, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Cs = F.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, mo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = we();
  return /* @__PURE__ */ f(Cs, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function ws({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = we(), i = r === Y.ERROR || r === Y.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === Y.WAITING ? /* @__PURE__ */ f(j, { children: [
    n && e && t && /* @__PURE__ */ f(mo, { height: e, width: t }),
    /* @__PURE__ */ f(tn, { isCameraReady: !0, text: o[Y.WAITING].text })
  ] }) : /* @__PURE__ */ f(tn, { Icon: vs, isCameraReady: !0, text: o[Y.LOADING].text });
}
function Ss({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ f("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const Es = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function bs() {
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
function $s() {
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
function ks() {
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
function Os() {
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
function Ns() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function xs() {
  return /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Is() {
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
const Ts = F.div`
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
`, Rs = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ f(
  Ts,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), As = {
  [D.CIRCLE_SOLID]: /* @__PURE__ */ f(Es, {}),
  [D.ELLIPSE_SOLID]: /* @__PURE__ */ f(bs, {}),
  [D.MAN_SOLID]: /* @__PURE__ */ f($s, {}),
  [D.WOMAN_SOLID]: /* @__PURE__ */ f(Is, {}),
  [D.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(Os, {}),
  [D.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(Ns, {}),
  [D.SQUARE_DASH]: /* @__PURE__ */ f(ks, {}),
  [D.SQUARE_SOLID]: /* @__PURE__ */ f(xs, {})
};
function Ls({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = we(), a = i.toLowerCase().includes("square"), c = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ f(j, { children: [
    n && /* @__PURE__ */ f(mo, { height: e, width: t, children: /* @__PURE__ */ f(
      Ss,
      {
        height: `${r.height * 100}%`,
        isRounded: c,
        isSquare: a,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Rs, { placeholderRectangle: r, ...o, children: As[i] })
  ] });
}
const Ps = () => {
  const [e, t] = z(), [n, r] = z(!1), o = ge(
    (s) => {
      var d, l;
      t((d = s == null ? void 0 : s.detail) == null ? void 0 : d.cameraResolution);
      const u = (l = s == null ? void 0 : s.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  Ve(me.CAMERA_PROPS_CHANGED, o);
  const [i, a] = z({
    code: L.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = ge(
    (s) => {
      var u, d;
      a({
        code: (u = s == null ? void 0 : s.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((d = s == null ? void 0 : s.detail) == null ? void 0 : d.isEscalated) ?? !1
      });
    },
    [a]
  );
  return Ve(me.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Ds = () => {
  const [e, t] = z(Y.LOADING), [n, r] = z(), o = ge(
    (i) => {
      var c, s;
      t((c = i.detail) == null ? void 0 : c.appState);
      const a = (s = i == null ? void 0 : i.detail) == null ? void 0 : s.error;
      a && r(a);
    },
    [t, r]
  );
  return Ve(me.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, Ms = F.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Hs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Fs = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Ye(null), r = so(), [o, i] = z(), a = ge(
    (c) => {
      var s;
      i((s = c == null ? void 0 : c.detail) == null ? void 0 : s.detectedObject);
    },
    [i]
  );
  return Ve(me.DETECTED_FACE_CHANGED, a), re(() => {
    if (!n.current)
      return;
    const c = (s, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: d, faceSize: l } = u, _ = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!_)
        return;
      const h = ts(l, s);
      _.beginPath(), _.arc(d.x, d.y, h, 0, 2 * Math.PI, !1), _.lineWidth = $a, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Hs(n.current), c(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ f(Ms, { ref: n, $isImageMirror: t });
};
function Us() {
  const { appState: e, error: t } = Ds(), { cameraResolution: n, instruction: r, isMirroring: o } = Ps(), i = r.code === L.CANDIDATE_SELECTION, { instructions: a, placeholder: c, showDetectionLayer: s } = we(), d = ![
    D.WOMAN_SOLID,
    D.ELLIPSE_SOLID,
    D.MAN_SOLID
  ].includes(c);
  if (e === Y.ERROR)
    return /* @__PURE__ */ f(fo, { text: t == null ? void 0 : t.message });
  if (e === Y.RUNNING && n) {
    const l = es(n);
    return /* @__PURE__ */ f(j, { children: [
      s && /* @__PURE__ */ f(Fs, { cameraResolution: n, isImageMirror: o }),
      /* @__PURE__ */ f(
        Ls,
        {
          backdropHeight: n.height,
          backdropWidth: n.width,
          isBackdrop: d,
          isInCandidateSelection: i,
          placeholderRectangle: l
        }
      ),
      r.code && /* @__PURE__ */ f(
        gs,
        {
          cssBottom: (l.height + l.shiftY) * 100,
          isInCandidateSelection: i,
          isPortrait: n.width < n.height,
          children: a[r.code]
        }
      ),
      /* @__PURE__ */ f(us, { customControlEvent: me.CONTROL, isSwitchCameraDisabled: i })
    ] });
  }
  return /* @__PURE__ */ f(
    ws,
    {
      cameraHeight: n == null ? void 0 : n.height,
      cameraWidth: n == null ? void 0 : n.width,
      isBackdrop: d,
      state: e
    }
  );
}
const Bs = (e) => {
  var s, u;
  const t = { ...Oa, ...e == null ? void 0 : e.instructions }, n = {
    [Y.LOADING]: { ...sr.loading, ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.loading },
    [Y.WAITING]: { ...sr.waiting, ...(u = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : u.waiting }
  }, r = (e == null ? void 0 : e.placeholder) ?? Na, o = (e == null ? void 0 : e.backdropColor) ?? xa, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1, c = Ya(e == null ? void 0 : e.theme);
  return (r === D.WOMAN_SOLID || r === D.MAN_SOLID || r === D.ELLIPSE_SOLID) && console.warn(
    "The placeholder icon you are currently using is deprecated. Please use one of our alternative placeholders instead. Read more here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/#ui-component"
  ), {
    instructions: t,
    appStateInstructions: n,
    placeholder: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a,
    theme: c
  };
}, Ws = ({ props: e }) => {
  const t = Ga(me.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Ba, { uiProps: Bs(e), videoElementSize: t, children: /* @__PURE__ */ f(Us, {}) });
};
Ao(Ws, "x-dot-face-auto-capture-ui", ["props"]);
