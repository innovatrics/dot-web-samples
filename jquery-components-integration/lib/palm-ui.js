var qt, y, ar, it, wn, lr, ur, Te, re, Ft, _r, nn, je, Fe, fr, fe = {}, de = [], $o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xt = Array.isArray;
function J(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function rn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function H(t, e, n) {
  var r, o, s, i = {};
  for (s in e) s == "key" ? r = e[s] : s == "ref" ? o = e[s] : i[s] = e[s];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? qt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (s in t.defaultProps) i[s] === void 0 && (i[s] = t.defaultProps[s]);
  return Ut(t, i, r, o, null);
}
function Ut(t, e, n, r, o) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ar, __i: -1, __u: 0 };
  return o == null && y.vnode != null && y.vnode(s), s;
}
function wo() {
  return { current: null };
}
function U(t) {
  return t.children;
}
function X(t, e) {
  this.props = t, this.context = e;
}
function gt(t, e) {
  if (e == null) return t.__ ? gt(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? gt(t) : null;
}
function So(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], o = [], s = J({}, e);
    s.__v = e.__v + 1, y.vnode && y.vnode(s), on(t.__P, s, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? gt(e), !!(32 & e.__u), o), s.__v = e.__v, s.__.__k[s.__i] = s, gr(r, s, o), e.__e = e.__ = null, s.__e != n && dr(s);
  }
}
function dr(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), dr(t);
}
function Ue(t) {
  (!t.__d && (t.__d = !0) && it.push(t) && !he.__r++ || wn != y.debounceRendering) && ((wn = y.debounceRendering) || lr)(he);
}
function he() {
  try {
    for (var t, e = 1; it.length; ) it.length > e && it.sort(ur), t = it.shift(), e = it.length, So(t);
  } finally {
    it.length = he.__r = 0;
  }
}
function hr(t, e, n, r, o, s, i, c, u, a, _) {
  var m, l, d, p, b, $, g = r && r.__k || de, h = e.length;
  for (u = Eo(n, e, g, u, h), m = 0; m < h; m++) (d = n.__k[m]) != null && (l = d.__i != -1 && g[d.__i] || fe, d.__i = m, $ = on(t, d, l, o, s, i, c, u, a, _), p = d.__e, d.ref && l.ref != d.ref && (l.ref && sn(l.ref, null, d), _.push(d.ref, d.__c || p, d)), b == null && p != null && (b = p), 4 & d.__u ? (u = pr(d, u, t), l.__e && (l.__e = null)) : typeof d.type == "function" && $ !== void 0 ? u = $ : p && (u = p.nextSibling), d.__u &= -7);
  return n.__e = b, u;
}
function Eo(t, e, n, r, o) {
  var s, i, c, u, a, _ = n.length, m = _, l = 0;
  for (t.__k = new Array(o), s = 0; s < o; s++) (i = e[s]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = t.__k[s] = Ut(null, i, null, null, null) : Xt(i) ? i = t.__k[s] = Ut(U, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = t.__k[s] = Ut(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : t.__k[s] = i, u = s + l, i.__ = t, i.__b = t.__b + 1, c = null, (a = i.__i = xo(i, n, u, m)) != -1 && (m--, (c = n[a]) && (c.__u |= 2)), c == null || c.__v == null ? (a == -1 && (o > _ ? l-- : o < _ && l++), typeof i.type != "function" && (i.__u |= 4)) : a != u && (a == u - 1 ? l-- : a == u + 1 ? l++ : (a > u ? l-- : l++, i.__u |= 4))) : t.__k[s] = null;
  if (m) for (s = 0; s < _; s++) (c = n[s]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = gt(c)), Cr(c, c));
  return r;
}
function pr(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = pr(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = gt(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function rt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Xt(t) ? t.some(function(n) {
    rt(n, e);
  }) : e.push(t)), e;
}
function xo(t, e, n, r) {
  var o, s, i, c = t.key, u = t.type, a = e[n], _ = a != null && (2 & a.__u) == 0;
  if (a === null && c == null || _ && c == a.key && u == a.type) return n;
  if (r > (_ ? 1 : 0)) {
    for (o = n - 1, s = n + 1; o >= 0 || s < e.length; ) if ((a = e[i = o >= 0 ? o-- : s++]) != null && (2 & a.__u) == 0 && c == a.key && u == a.type) return i;
  }
  return -1;
}
function Sn(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || $o.test(e) ? n : n + "px";
}
function ne(t, e, n, r, o) {
  var s, i;
  t: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || Sn(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || Sn(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") s = e != (e = e.replace(_r, "$1")), i = e.toLowerCase(), e = i in t || e == "onFocusOut" || e == "onFocusIn" ? i.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r ? n[Ft] = r[Ft] : (n[Ft] = nn, t.addEventListener(e, s ? Fe : je, s)) : t.removeEventListener(e, s ? Fe : je, s);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break t;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function En(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[re] == null) e[re] = nn++;
      else if (e[re] < n[Ft]) return;
      return n(y.event ? y.event(e) : e);
    }
  };
}
function on(t, e, n, r, o, s, i, c, u, a) {
  var _, m, l, d, p, b, $, g, h, x, L, E, O, C, w, Z, P = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), s = [c = e.__e = n.__e]), (_ = y.__b) && _(e);
  t: if (typeof P == "function") {
    m = i.length;
    try {
      if (h = e.props, x = P.prototype && P.prototype.render, L = (_ = P.contextType) && r[_.__c], E = _ ? L ? L.props.value : _.__ : r, n.__c ? g = (l = e.__c = n.__c).__ = l.__E : (x ? e.__c = l = new P(h, E) : (e.__c = l = new X(h, E), l.constructor = P, l.render = Io), L && L.sub(l), l.state || (l.state = {}), l.__n = r, d = l.__d = !0, l.__h = [], l._sb = []), x && l.__s == null && (l.__s = l.state), x && P.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = J({}, l.__s)), J(l.__s, P.getDerivedStateFromProps(h, l.__s))), p = l.props, b = l.state, l.__v = e, d) x && P.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), x && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (x && P.getDerivedStateFromProps == null && h !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, E), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, E) === !1) {
          e.__v != n.__v && (l.props = h, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(D) {
            D && (D.__ = e);
          }), de.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && i.push(l), c = gt(n);
          break t;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, E), x && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, b, $);
        });
      }
      if (l.context = E, l.props = h, l.__P = t, l.__e = !1, O = y.__r, C = 0, x) l.state = l.__s, l.__d = !1, O && O(e), _ = l.render(l.props, l.state, l.context), de.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, O && O(e), _ = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++C < 25);
      l.state = l.__s, l.getChildContext != null && (r = J(J({}, r), l.getChildContext())), x && !d && l.getSnapshotBeforeUpdate != null && ($ = l.getSnapshotBeforeUpdate(p, b)), w = _ != null && _.type === U && _.key == null ? yr(_.props.children) : _, c = hr(t, Xt(w) ? w : [w], e, n, r, o, s, i, c, u, a), l.base = e.__e, e.__u &= -161, l.__h.length && i.push(l), g && (l.__E = l.__ = null);
    } catch (D) {
      if (i.length = m, e.__v = null, u || s != null) {
        if (D.then) {
          for (e.__u |= u ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          s != null && (s[s.indexOf(c)] = null), e.__e = c;
        } else if (s != null) for (Z = s.length; Z--; ) rn(s[Z]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), D.then || mr(e), y.__e(D, e, n);
    }
  } else s == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = No(n.__e, e, n, r, o, s, i, u, a);
  return (_ = y.diffed) && _(e), 128 & e.__u ? void 0 : c;
}
function mr(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(mr));
}
function gr(t, e, n) {
  for (var r = 0; r < n.length; r++) sn(n[r], n[++r], n[++r]);
  y.__c && y.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(s) {
        s.call(o);
      });
    } catch (s) {
      y.__e(s, o.__v);
    }
  });
}
function yr(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Xt(t) ? t.map(yr) : t.constructor !== void 0 ? null : J({}, t);
}
function No(t, e, n, r, o, s, i, c, u) {
  var a, _, m, l, d, p, b, $ = n.props || fe, g = e.props, h = e.type;
  if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), s != null) {
    for (a = 0; a < s.length; a++) if ((d = s[a]) && "setAttribute" in d == !!h && (h ? d.localName == h : d.nodeType == 3)) {
      t = d, s[a] = null;
      break;
    }
  }
  if (t == null) {
    if (h == null) return document.createTextNode(g);
    t = document.createElementNS(o, h, g.is && g), c && (y.__m && y.__m(e, s), c = !1), s = null;
  }
  if (h == null) $ === g || c && t.data == g || (t.data = g);
  else {
    if (s = h == "textarea" && g.defaultValue != null ? null : s && qt.call(t.childNodes), !c && s != null) for ($ = {}, a = 0; a < t.attributes.length; a++) $[(d = t.attributes[a]).name] = d.value;
    for (a in $) d = $[a], a == "dangerouslySetInnerHTML" ? m = d : a == "children" || a in g || a == "value" && "defaultValue" in g || a == "checked" && "defaultChecked" in g || ne(t, a, null, d, o);
    for (a in g) d = g[a], a == "children" ? l = d : a == "dangerouslySetInnerHTML" ? _ = d : a == "value" ? p = d : a == "checked" ? b = d : c && typeof d != "function" || $[a] === d || ne(t, a, d, $[a], o);
    if (_) c || m && (_.__html == m.__html || _.__html == t.innerHTML) || (t.innerHTML = _.__html), e.__k = [];
    else if (m && (t.innerHTML = ""), hr(e.type == "template" ? t.content : t, Xt(l) ? l : [l], e, n, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, i, s ? s[0] : n.__k && gt(n, 0), c, u), s != null) for (a = s.length; a--; ) rn(s[a]);
    c && h != "textarea" || (a = "value", h == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[a] || h == "progress" && !p || h == "option" && p != $[a]) && ne(t, a, p, $[a], o), a = "checked", b != null && b != t[a] && ne(t, a, b, $[a], o));
  }
  return t;
}
function sn(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    y.__e(o, n);
  }
}
function Cr(t, e, n) {
  var r, o;
  if (y.unmount && y.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || sn(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (s) {
      y.__e(s, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && Cr(r[o], e, n || typeof t.type != "function");
  n || rn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Io(t, e, n) {
  return this.constructor(t, n);
}
function at(t, e, n) {
  var r, o, s, i;
  e == document && (e = document.documentElement), y.__ && y.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], i = [], on(e, t = (!r && n || e).__k = H(U, null, [t]), o || fe, fe, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? qt.call(e.childNodes) : null, s, !r && n ? n : o ? o.__e : e.firstChild, r, i), gr(s, t, i), t.props.children = null;
}
function cn(t, e) {
  at(t, e, cn);
}
function an(t, e, n) {
  var r, o, s, i, c = J({}, t.props);
  for (s in t.type && t.type.defaultProps && (i = t.type.defaultProps), e) s == "key" ? r = e[s] : s == "ref" ? o = e[s] : c[s] = e[s] === void 0 && i != null ? i[s] : e[s];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? qt.call(arguments, 2) : n), Ut(t.type, c, r || t.key, o || t.ref, null);
}
function vr(t) {
  function e(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[e.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value != s.value && r.forEach(function(i) {
        i.__e = !0, Ue(i);
      });
    }, this.sub = function(s) {
      r.add(s);
      var i = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        r && r.delete(s), i && i.call(s);
      };
    }), n.children;
  }
  return e.__c = "__cC" + fr++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = e, e;
}
qt = de.slice, y = { __e: function(t, e, n, r) {
  for (var o, s, i; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(t)), i = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), i = o.__d), i) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, ar = 0, X.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = J({}, this.state), typeof t == "function" && (t = t(J({}, n), this.props)), t && J(n, t), t != null && this.__v && (e && this._sb.push(e), Ue(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ue(this));
}, X.prototype.render = U, it = [], lr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ur = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, he.__r = 0, Te = Math.random().toString(8), re = "__d" + Te, Ft = "__a" + Te, _r = /(PointerCapture)$|Capture$/i, nn = 0, je = En(!1), Fe = En(!0), fr = 0;
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, pe.apply(this, arguments);
}
function br(t, e) {
  if (t == null) return {};
  var n, r, o = {}, s = Object.keys(t);
  for (r = 0; r < s.length; r++) e.indexOf(n = s[r]) >= 0 || (o[n] = t[n]);
  return o;
}
var Oo = ["context", "children"], To = ["useFragment"];
function ko(t, e, n, r) {
  function o() {
    var s = Reflect.construct(HTMLElement, [], o);
    return s._vdomComponent = t, s._root = s, s;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Ao.call(this, r);
  }, o.prototype.attributeChangedCallback = Lo, o.prototype.disconnectedCallback = Po, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, t.formAssociated && (o.formAssociated = !0), n.forEach(function(s) {
    Object.defineProperty(o.prototype, s, { get: function() {
      return this._vdom ? this._vdom.props[s] : this._props[s];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(s, null, i) : (this._props || (this._props = {}), this._props[s] = i);
      var c = typeof i;
      i != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(s, i);
    } });
  }), customElements.define(e, o), o;
}
function Ro(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = br(t, Oo);
  return an(e, n);
}
function Ao(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = H(Ro, pe({}, this._props, { context: e.detail.context }), wr(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? cn : at)(this._vdom, this._root);
}
function $r(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Lo(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[$r(t)] = n, this._vdom = an(this._vdom, r), at(this._vdom, this._root);
  }
}
function Po() {
  at(this._vdom = null, this._root);
}
function xn(t, e) {
  var n = this, r = t.useFragment, o = br(t, To);
  return H(r ? U : "slot", pe({}, o, { ref: function(s) {
    s ? (n.ref = s, n._listener || (n._listener = function(i) {
      i.stopPropagation(), i.detail.context = e;
    }, s.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function wr(t, e, n) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var r = [], o = {}, s = 0, i = t.attributes, c = t.childNodes;
  for (s = i.length; s--; ) i[s].name !== "slot" && (o[i[s].name] = i[s].value, o[$r(i[s].name)] = i[s].value);
  for (s = c.length; s--; ) {
    var u = wr(c[s], null, n), a = c[s].slot;
    a ? o[a] = H(xn, { name: a }, u) : r[s] = u;
  }
  var _ = !(!n || !n.shadow), m = e ? H(xn, { useFragment: !_ }, r) : r;
  return !_ && e && (t.innerHTML = ""), H(e || t.nodeName.toLowerCase(), o, m);
}
var Mo = 0;
function f(t, e, n, r, o, s) {
  e || (e = {});
  var i, c, u = e;
  if ("ref" in u) for (c in u = {}, e) c == "ref" ? i = e[c] : u[c] = e[c];
  var a = { type: t, props: u, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Mo, __i: -1, __u: 0, __source: o, __self: s };
  if (typeof t == "function" && (i = t.defaultProps)) for (c in i) u[c] === void 0 && (u[c] = i[c]);
  return y.vnode && y.vnode(a), a;
}
const Nn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var Sr = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTION_CHANGED = "document-auto-capture:detection-changed", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Sr || {}), dt = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", t.CONTROL = "palm-capture:control", t.DETECTION_CHANGED = "palm-capture:detection-changed", t.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", t.STATE_CHANGED = "palm-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", t))(dt || {});
const j = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, W = {
  CANDIDATE_SELECTION: "candidate_selection",
  PALM_CENTERING: "palm_centering",
  PALM_NOT_PRESENT: "palm_not_present",
  PALM_TOO_FAR: "palm_too_far",
  PALM_TOO_CLOSE: "palm_too_close",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  TEMPLATE_EXTRACTION_QUALITY_TOO_LOW: "template_extraction_quality_too_low"
};
var lt, I, ke, In, $t = 0, Er = [], T = y, On = T.__b, Tn = T.__r, kn = T.diffed, Rn = T.__c, An = T.unmount, Ln = T.__;
function xt(t, e) {
  T.__h && T.__h(I, t, $t || e), $t = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function q(t) {
  return $t = 1, ln(Or, t);
}
function ln(t, e, n) {
  var r = xt(lt++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Or(void 0, e), function(c) {
    var u = r.__N ? r.__N[0] : r.__[0], a = r.t(u, c);
    u !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.__f)) {
    var o = function(c, u, a) {
      if (!r.__c.__H) return !0;
      var _ = !1, m = r.__c.props !== c;
      if (r.__c.__H.__.some(function(d) {
        if (d.__N) {
          _ = !0;
          var p = d.__[0];
          d.__ = d.__N, d.__N = void 0, p !== d.__[0] && (m = !0);
        }
      }), s) {
        var l = s.call(this, c, u, a);
        return _ ? l || m : l;
      }
      return !_ || m;
    };
    I.__f = !0;
    var s = I.shouldComponentUpdate, i = I.componentWillUpdate;
    I.componentWillUpdate = function(c, u, a) {
      if (this.__e) {
        var _ = s;
        s = void 0, o(c, u, a), s = _;
      }
      i && i.call(this, c, u, a);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ut(t, e) {
  var n = xt(lt++, 3);
  !T.__s && _n(n.__H, e) && (n.__ = t, n.u = e, I.__H.__h.push(n));
}
function Nt(t, e) {
  var n = xt(lt++, 4);
  !T.__s && _n(n.__H, e) && (n.__ = t, n.u = e, I.__h.push(n));
}
function ye(t) {
  return $t = 5, Kt(function() {
    return { current: t };
  }, []);
}
function xr(t, e, n) {
  $t = 6, Nt(function() {
    if (typeof t == "function") {
      var r = t(e());
      return function() {
        t(null), r && typeof r == "function" && r();
      };
    }
    if (t) return t.current = e(), function() {
      return t.current = null;
    };
  }, n == null ? n : n.concat(t));
}
function Kt(t, e) {
  var n = xt(lt++, 7);
  return _n(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function ht(t, e) {
  return $t = 8, Kt(function() {
    return t;
  }, e);
}
function un(t) {
  var e = I.context[t.__c], n = xt(lt++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(I)), e.props.value) : t.__;
}
function Nr(t, e) {
  T.useDebugValue && T.useDebugValue(e ? e(t) : t);
}
function Ir() {
  var t = xt(lt++, 11);
  if (!t.__) {
    for (var e = I.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Do() {
  for (var t; t = Er.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(oe), e.__h.some(Ge), e.__h = [];
    } catch (n) {
      e.__h = [], T.__e(n, t.__v);
    }
  }
}
T.__b = function(t) {
  I = null, On && On(t);
}, T.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ln && Ln(t, e);
}, T.__r = function(t) {
  Tn && Tn(t), lt = 0;
  var e = (I = t.__c).__H;
  e && (ke === I ? (e.__h = [], I.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(oe), e.__h.some(Ge), e.__h = [], lt = 0)), ke = I;
}, T.diffed = function(t) {
  kn && kn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Er.push(e) !== 1 && In === T.requestAnimationFrame || ((In = T.requestAnimationFrame) || Ho)(Do)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), ke = I = null;
}, T.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(oe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ge(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], T.__e(r, n.__v);
    }
  }), Rn && Rn(t, e);
}, T.unmount = function(t) {
  An && An(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      oe(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && T.__e(e, n.__v));
};
var Pn = typeof requestAnimationFrame == "function";
function Ho(t) {
  var e, n = function() {
    clearTimeout(r), Pn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  Pn && (e = requestAnimationFrame(n));
}
function oe(t) {
  var e = I, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), I = e;
}
function Ge(t) {
  var e = I;
  t.__c = t.__(), I = e;
}
function _n(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Or(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function We(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function kr(t, e) {
  var n = e(), r = q({ t: { __: n, u: e } }), o = r[0].t, s = r[1];
  return Nt(function() {
    o.__ = n, o.u = e, Re(o) && s({ t: o });
  }, [t, n, e]), ut(function() {
    return Re(o) && s({ t: o }), t(function() {
      Re(o) && s({ t: o });
    });
  }, [t]), n;
}
function Re(t) {
  try {
    return !((e = t.__) === (n = t.u()) && (e !== 0 || 1 / e == 1 / n) || e != e && n != n);
  } catch {
    return !0;
  }
  var e, n;
}
function Rr(t) {
  t();
}
function Ar(t) {
  return t;
}
function Lr() {
  return [!1, Rr];
}
var Pr = Nt;
function ze(t, e) {
  this.props = t, this.context = e;
}
function Bo(t, e) {
  function n(o) {
    var s = this.props.ref;
    return s != o.ref && s && (typeof s == "function" ? s(null) : s.current = null), e ? !e(this.props, o) || s != o.ref : We(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, H(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = t, r;
}
(ze.prototype = new X()).isPureReactComponent = !0, ze.prototype.shouldComponentUpdate = function(t, e) {
  return We(this.props, t) || We(this.state, e);
};
var Mn = y.__b;
y.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Mn && Mn(t);
};
var jo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Fo(t) {
  function e(n) {
    var r = Tr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = jo, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Dn = function(t, e) {
  return t == null ? null : rt(rt(t).map(e));
}, Uo = { map: Dn, forEach: Dn, count: function(t) {
  return t ? rt(t).length : 0;
}, only: function(t) {
  var e = rt(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: rt }, Go = y.__e;
y.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, s = e; s = s.__; ) if ((o = s.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
  }
  Go(t, e, n, r);
};
var Hn = y.unmount;
function Mr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Tr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Mr(r, e, n);
  })), t;
}
function Dr(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Dr(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
}
function se() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Hr(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function Wo(t) {
  var e, n, r, o = null;
  function s(i) {
    if (e || (e = t()).then(function(c) {
      c && (o = c.default || c), r = !0;
    }, function(c) {
      n = c, r = !0;
    }), n) throw n;
    if (!r) throw e;
    return o ? H(o, i) : null;
  }
  return s.displayName = "Lazy", s.__f = !0, s;
}
function Pt() {
  this.i = null, this.l = null;
}
y.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Hn && Hn(t);
}, (se.prototype = new X()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Hr(r.__v), s = !1, i = function() {
    s || r.__z || (s = !0, n.__R = null, o ? o(u) : u());
  };
  n.__R = i;
  var c = n.__P;
  n.__P = null;
  var u = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Dr(a, a.__c.__P, a.__c.__O);
      }
      var _;
      for (r.setState({ __a: r.__b = null }); _ = r.o.pop(); ) _.__P = c, _.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(i, i);
}, se.prototype.componentWillUnmount = function() {
  this.o = [];
}, se.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Mr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && H(U, null, t.fallback);
  return o && (o.__u &= -33), [H(U, null, e.__a ? null : t.children), o];
};
var Bn = function(t, e, n) {
  if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (n = t.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.i = n = n[2];
  }
};
function zo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Zo(t) {
  var e = this, n = t.h;
  if (e.componentWillUnmount = function() {
    at(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== n && e.componentWillUnmount(), !e.v) {
    for (var r = e.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    e.h = n, e.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, namespaceURI: n.namespaceURI, insertBefore: function(o, s) {
      this.childNodes.push(o), e.h.insertBefore(o, s);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), e.h.removeChild(o);
    } };
  }
  at(H(zo, { context: e.context }, t.__v), e.v);
}
function Vo(t, e) {
  var n = H(Zo, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Pt.prototype = new X()).__a = function(t) {
  var e = this, n = Hr(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var s = function() {
      e.props.revealOrder ? (r.push(o), Bn(e, t, r)) : o();
    };
    n ? n(s) : s();
  };
}, Pt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = rt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Pt.prototype.componentDidUpdate = Pt.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Bn(t, n, e);
  });
};
var Br = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Yo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Xo = /[A-Z0-9]/g, Ko = typeof document < "u", Qo = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Jo(t, e, n) {
  return e.__k == null && (e.textContent = ""), at(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function ts(t, e, n) {
  return cn(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
X.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(X.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var jn = y.event;
y.event = function(t) {
  return jn && (t = jn(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var fn, es = { configurable: !0, get: function() {
  return this.class;
} }, Fn = y.vnode;
y.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var n = e.props, r = e.type, o = {}, s = r.indexOf("-") == -1;
    for (var i in n) {
      var c = n[i];
      if (!(i === "value" && "defaultValue" in n && c == null || Ko && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var u = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && c === !0 ? c = "" : u === "translate" && c === "no" ? c = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? i = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || Qo(n.type) ? u === "onfocus" ? i = "onfocusin" : u === "onblur" ? i = "onfocusout" : qo.test(i) && (i = u) : u = i = "oninput" : s && Yo.test(i) ? i = i.replace(Xo, "-$&").toLowerCase() : c === null && (c = void 0), u === "oninput" && o[i = u] && (i = "oninputCapture"), o[i] = c;
      }
    }
    r == "select" && (o.multiple && Array.isArray(o.value) && (o.value = rt(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), o.defaultValue != null && (o.value = rt(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", es)) : n.className && (o.class = o.className = n.className), e.props = o;
  })(t), t.$$typeof = Br, Fn && Fn(t);
};
var Un = y.__r;
y.__r = function(t) {
  Un && Un(t), fn = t.__c;
};
var Gn = y.diffed;
y.diffed = function(t) {
  Gn && Gn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), fn = null;
};
var ns = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return fn.__n[t.__c].props.value;
}, useCallback: ht, useContext: un, useDebugValue: Nr, useDeferredValue: Ar, useEffect: ut, useId: Ir, useImperativeHandle: xr, useInsertionEffect: Pr, useLayoutEffect: Nt, useMemo: Kt, useReducer: ln, useRef: ye, useState: q, useSyncExternalStore: kr, useTransition: Lr } } };
function rs(t) {
  return H.bind(null, t);
}
function Ce(t) {
  return !!t && t.$$typeof === Br;
}
function os(t) {
  return Ce(t) && t.type === U;
}
function ss(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function is(t) {
  return Ce(t) ? an.apply(null, arguments) : t;
}
function cs(t) {
  return !!t.__k && (at(null, t), !0);
}
function as(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ls = function(t, e) {
  return t(e);
}, us = function(t, e) {
  var n, r = y.debounceRendering;
  y.debounceRendering = function(s) {
    n = s;
  };
  try {
    var o = t(e);
    return n && n(), o;
  } finally {
    y.debounceRendering = r;
  }
}, _s = Ce, F = { useState: q, useId: Ir, useReducer: ln, useEffect: ut, useLayoutEffect: Nt, useInsertionEffect: Pr, useTransition: Lr, useDeferredValue: Ar, useSyncExternalStore: kr, startTransition: Rr, useRef: ye, useImperativeHandle: xr, useMemo: Kt, useCallback: ht, useContext: un, useDebugValue: Nr, version: "18.3.1", Children: Uo, render: Jo, hydrate: ts, unmountComponentAtNode: cs, createPortal: Vo, createElement: H, createContext: vr, createFactory: rs, cloneElement: is, createRef: wo, Fragment: U, isValidElement: Ce, isElement: _s, isFragment: os, isMemo: ss, findDOMNode: as, Component: X, PureComponent: ze, memo: Bo, forwardRef: Fo, flushSync: us, unstable_batchedUpdates: ls, StrictMode: U, Suspense: se, SuspenseList: Pt, lazy: Wo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ns }, N = "-ms-", Gt = "-moz-", S = "-webkit-", jr = "comm", ve = "rule", dn = "decl", fs = "@import", ds = "@namespace", Fr = "@keyframes", hs = "@layer", Ur = Math.abs, hn = String.fromCharCode, Ze = Object.assign;
function ps(t, e) {
  return A(t, 0) ^ 45 ? (((e << 2 ^ A(t, 0)) << 2 ^ A(t, 1)) << 2 ^ A(t, 2)) << 2 ^ A(t, 3) : 0;
}
function Gr(t) {
  return t.trim();
}
function et(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function v(t, e, n) {
  return t.replace(e, n);
}
function ie(t, e, n) {
  return t.indexOf(e, n);
}
function A(t, e) {
  return t.charCodeAt(e) | 0;
}
function yt(t, e, n) {
  return t.slice(e, n);
}
function Y(t) {
  return t.length;
}
function Wr(t) {
  return t.length;
}
function Mt(t, e) {
  return e.push(t), t;
}
function ms(t, e) {
  return t.map(e).join("");
}
function Wn(t, e) {
  return t.filter(function(n) {
    return !et(n, e);
  });
}
var be = 1, wt = 1, zr = 0, z = 0, k = 0, It = "";
function $e(t, e, n, r, o, s, i, c) {
  return { value: t, root: e, parent: n, type: r, props: o, children: s, line: be, column: wt, length: i, return: "", siblings: c };
}
function st(t, e) {
  return Ze($e("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function Ct(t) {
  for (; t.root; )
    t = st(t.root, { children: [t] });
  Mt(t, t.siblings);
}
function gs() {
  return k;
}
function ys() {
  return k = z > 0 ? A(It, --z) : 0, wt--, k === 10 && (wt = 1, be--), k;
}
function K() {
  return k = z < zr ? A(It, z++) : 0, wt++, k === 10 && (wt = 1, be++), k;
}
function ct() {
  return A(It, z);
}
function ce() {
  return z;
}
function we(t, e) {
  return yt(It, t, e);
}
function Zt(t) {
  switch (t) {
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
function Cs(t) {
  return be = wt = 1, zr = Y(It = t), z = 0, [];
}
function vs(t) {
  return It = "", t;
}
function Ae(t) {
  return Gr(we(z - 1, Ve(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function bs(t) {
  for (; (k = ct()) && k < 33; )
    K();
  return Zt(t) > 2 || Zt(k) > 3 ? "" : " ";
}
function $s(t, e) {
  for (; --e && K() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97); )
    ;
  return we(t, ce() + (e < 6 && ct() == 32 && K() == 32));
}
function Ve(t) {
  for (; K(); )
    switch (k) {
      // ] ) " '
      case t:
        return z;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ve(k);
        break;
      // (
      case 40:
        t === 41 && Ve(t);
        break;
      // \
      case 92:
        K();
        break;
    }
  return z;
}
function ws(t, e) {
  for (; K() && t + k !== 57; )
    if (t + k === 84 && ct() === 47)
      break;
  return "/*" + we(e, z - 1) + "*" + hn(t === 47 ? t : K());
}
function Ss(t) {
  for (; !Zt(ct()); )
    K();
  return we(t, z);
}
function Es(t) {
  return vs(ae("", null, null, null, [""], t = Cs(t), 0, [0], t));
}
function ae(t, e, n, r, o, s, i, c, u) {
  for (var a = 0, _ = 0, m = i, l = 0, d = 0, p = 0, b = 1, $ = 1, g = 1, h = 0, x = "", L = o, E = s, O = r, C = x; $; )
    switch (p = h, h = K()) {
      // (
      case 40:
        if (p != 108 && A(C, m - 1) == 58) {
          ie(C += v(Ae(h), "&", "&\f"), "&\f", Ur(a ? c[a - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Ae(h);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += bs(p);
        break;
      // \
      case 92:
        C += $s(ce() - 1, 7);
        continue;
      // /
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Mt(xs(ws(K(), ce()), e, n, u), u), (Zt(p || 1) == 5 || Zt(ct() || 1) == 5) && Y(C) && yt(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * b:
        c[a++] = Y(C) * g;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + _:
            g == -1 && (C = v(C, /\f/g, "")), d > 0 && (Y(C) - m || b === 0 && p === 47) && Mt(d > 32 ? Zn(C + ";", r, n, m - 1, u) : Zn(v(C, " ", "") + ";", r, n, m - 2, u), u);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Mt(O = zn(C, e, n, a, _, o, c, x, L = [], E = [], m, s), s), h === 123)
              if (_ === 0)
                ae(C, e, O, O, L, s, m, c, E);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (A(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (A(C, 2) === 97) break;
                  default:
                    _ = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                _ ? ae(t, O, O, r && Mt(zn(t, O, O, 0, 0, o, c, x, o, L = [], m, E), E), o, E, m, c, r ? L : E) : ae(C, O, O, O, [""], E, 0, c, E);
              }
        }
        a = _ = d = 0, b = g = 1, x = C = "", m = i;
        break;
      // :
      case 58:
        m = 1 + Y(C), d = p;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && ys() == 125)
            continue;
        }
        switch (C += hn(h), h * b) {
          // &
          case 38:
            g = _ > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            c[a++] = (Y(C) - 1) * g, g = 1;
            break;
          // @
          case 64:
            ct() === 45 && (C += Ae(K())), l = ct(), _ = m = Y(x = C += Ss(ce())), h++;
            break;
          // -
          case 45:
            p === 45 && Y(C) == 2 && (b = 0);
        }
    }
  return s;
}
function zn(t, e, n, r, o, s, i, c, u, a, _, m) {
  for (var l = o - 1, d = o === 0 ? s : [""], p = Wr(d), b = 0, $ = 0, g = 0; b < r; ++b)
    for (var h = 0, x = yt(t, l + 1, l = Ur($ = i[b])), L = t; h < p; ++h)
      (L = Gr($ > 0 ? d[h] + " " + x : v(x, /&\f/g, d[h]))) && (u[g++] = L);
  return $e(t, e, n, o === 0 ? ve : c, u, a, _, m);
}
function xs(t, e, n, r) {
  return $e(t, e, n, jr, hn(gs()), yt(t, 2, -2), 0, r);
}
function Zn(t, e, n, r, o) {
  return $e(t, e, n, dn, yt(t, 0, r), yt(t, r + 1, -1), r, o);
}
function Zr(t, e, n) {
  switch (ps(t, e)) {
    // color-adjust
    case 5103:
      return S + "print-" + t + t;
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
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return S + t + t;
    // mask-composite
    case 4855:
      return S + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return Gt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return S + t + Gt + t + N + t + t;
    // writing-mode
    case 5936:
      switch (A(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return S + t + N + v(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return S + t + N + v(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return S + t + N + v(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return S + t + N + t + t;
    // order
    case 6165:
      return S + t + N + "flex-" + t + t;
    // align-items
    case 5187:
      return S + t + v(t, /(\w+).+(:[^]+)/, S + "box-$1$2" + N + "flex-$1$2") + t;
    // align-self
    case 5443:
      return S + t + N + "flex-item-" + v(t, /flex-|-self/g, "") + (et(t, /flex-|baseline/) ? "" : N + "grid-row-" + v(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return S + t + N + "flex-line-pack" + v(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return S + t + N + v(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return S + t + N + v(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return S + "box-" + v(t, "-grow", "") + S + t + N + v(t, "grow", "positive") + t;
    // transition
    case 4554:
      return S + v(t, /([^-])(transform)/g, "$1" + S + "$2") + t;
    // cursor
    case 6187:
      return v(v(v(t, /(zoom-|grab)/, S + "$1"), /(image-set)/, S + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return v(t, /(image-set\([^]*)/, S + "$1$`$1");
    // justify-content
    case 4968:
      return v(v(t, /(.+:)(flex-)?(.*)/, S + "box-pack:$3" + N + "flex-pack:$3"), /space-between/, "justify") + S + t + t;
    // justify-self
    case 4200:
      if (!et(t, /flex-|baseline/)) return N + "grid-column-align" + yt(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return N + v(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, et(r.props, /grid-\w+-end/);
      }) ? ~ie(t + (n = n[e].value), "span", 0) ? t : N + v(t, "-start", "") + t + N + "grid-row-span:" + (~ie(n, "span", 0) ? et(n, /\d+/) : +et(n, /\d+/) - +et(t, /\d+/)) + ";" : N + v(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return et(r.props, /grid-\w+-start/);
      }) ? t : N + v(v(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(t, /(.+)-inline(.+)/, S + "$1$2") + t;
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
      if (Y(t) - 1 - e > 6)
        switch (A(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return v(t, /(.+:)(.+)-([^]+)/, "$1" + S + "$2-$3$1" + Gt + (A(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~ie(t, "stretch", 0) ? Zr(v(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return v(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, i, c, u, a) {
        return N + o + ":" + s + a + (i ? N + o + "-span:" + (c ? u : +u - +s) + a : "") + t;
      });
    // position: sticky
    case 4949:
      if (A(t, e + 6) === 121)
        return v(t, ":", ":" + S) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(t, A(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return v(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + S + (A(t, 14) === 45 ? "inline-" : "") + "box$3$1" + S + "$2$3$1" + N + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return v(t, ":", ":" + N) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function me(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Ns(t, e, n, r) {
  switch (t.type) {
    case hs:
      if (t.children.length) break;
    case fs:
    case ds:
    case dn:
      return t.return = t.return || t.value;
    case jr:
      return "";
    case Fr:
      return t.return = t.value + "{" + me(t.children, r) + "}";
    case ve:
      if (!Y(t.value = t.props.join(","))) return "";
  }
  return Y(n = me(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Is(t) {
  var e = Wr(t);
  return function(n, r, o, s) {
    for (var i = "", c = 0; c < e; c++)
      i += t[c](n, r, o, s) || "";
    return i;
  };
}
function Os(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Ts(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case dn:
        t.return = Zr(t.value, t.length, n);
        return;
      case Fr:
        return me([st(t, { value: v(t.value, "@", "@" + S) })], r);
      case ve:
        if (t.length)
          return ms(n = t.props, function(o) {
            switch (et(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ct(st(t, { props: [v(o, /:(read-\w+)/, ":" + Gt + "$1")] })), Ct(st(t, { props: [o] })), Ze(t, { props: Wn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ct(st(t, { props: [v(o, /:(plac\w+)/, ":" + S + "input-$1")] })), Ct(st(t, { props: [v(o, /:(plac\w+)/, ":" + Gt + "$1")] })), Ct(st(t, { props: [v(o, /:(plac\w+)/, N + "input-$1")] })), Ct(st(t, { props: [o] })), Ze(t, { props: Wn(n, r) });
                break;
            }
            return "";
          });
    }
}
var vt = {};
function tt(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var Le, Pe;
const St = typeof process < "u" && vt !== void 0 && (vt.REACT_APP_SC_ATTR || vt.SC_ATTR) || "data-styled", Vr = "active", Yr = "data-styled-version", Se = "6.6.0", pn = `/*!sc*/
`, Wt = typeof window < "u" && typeof document < "u";
if (!F.createContext) throw tt(19);
function Vn(t) {
  if (typeof process < "u" && vt !== void 0) {
    const e = vt[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const ks = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Pe = (Le = Vn("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Le !== void 0 ? Le : Vn("SC_DISABLE_SPEEDY")) !== null && Pe !== void 0 ? Pe : typeof process < "u" && vt !== void 0 && !1), qr = "sc-keyframes-";
let le = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), ue = 1;
const Dt = (t) => {
  if (le.has(t)) return le.get(t);
  for (; ge.has(ue); ) ue++;
  const e = ue++;
  return le.set(t, e), ge.set(e, t), e;
}, Rs = (t) => ge.get(t), As = (t, e) => {
  ue = e + 1, le.set(t, e), ge.set(e, t);
}, mn = Object.freeze([]), Et = Object.freeze({});
function Ls(t, e, n = Et) {
  return t.theme !== n.theme && t.theme || e || n.theme;
}
const Ps = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ms = /(^-|-$)/g;
function Xr(t) {
  return t.replace(Ps, "-").replace(Ms, "");
}
const Ds = /(a)(d)/gi, Yn = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function gn(t) {
  let e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = Yn(e % 52) + n;
  return (Yn(e % 52) + n).replace(Ds, "$1-$2");
}
const Ye = 5381, pt = (t, e) => {
  let n = e.length;
  for (; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, Kr = (t) => pt(Ye, t);
function Qr(t) {
  return gn(Kr(t) >>> 0);
}
function Hs(t) {
  return t.displayName || t.name || "Component";
}
function qe(t) {
  return typeof t == "string" && !0;
}
function Bs(t) {
  return qe(t) ? `styled.${t}` : `Styled(${Hs(t)})`;
}
const Jr = /* @__PURE__ */ Symbol.for("react.memo"), js = /* @__PURE__ */ Symbol.for("react.forward_ref"), Fs = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Us = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Gs = { [js]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [Jr]: to };
function qn(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Jr ? to : "$$typeof" in t ? Gs[t.$$typeof] : Fs;
  var e;
}
const Ws = Object.defineProperty, zs = Object.getOwnPropertyNames, Zs = Object.getOwnPropertySymbols, Vs = Object.getOwnPropertyDescriptor, Ys = Object.getPrototypeOf, qs = Object.prototype;
function eo(t, e, n) {
  if (typeof e != "string") {
    const r = Ys(e);
    r && r !== qs && eo(t, r, n);
    const o = zs(e).concat(Zs(e)), s = qn(t), i = qn(e);
    for (let c = 0; c < o.length; ++c) {
      const u = o[c];
      if (!(u in Us || n && n[u] || i && u in i || s && u in s)) {
        const a = Vs(e, u);
        try {
          Ws(t, u, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function Qt(t) {
  return typeof t == "function";
}
const Xs = /* @__PURE__ */ Symbol.for("react.forward_ref");
function no(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === Xs && "styledComponentId" in t;
}
function Ht(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Xe(t, e) {
  return t.join("");
}
function Vt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Ke(t, e, n = !1) {
  if (!n && !Vt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (let r = 0; r < e.length; r++) t[r] = Ke(t[r], e[r]);
  else if (Vt(e)) for (const r in e) t[r] = Ke(t[r], e[r]);
  return t;
}
function yn(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
const Ks = class {
  constructor(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(t) {
    if (t === this._cGroup) return this._cIndex;
    let e = this._cIndex;
    if (t > this._cGroup) for (let n = this._cGroup; n < t; n++) e += this.groupSizes[n];
    else for (let n = this._cGroup - 1; n >= t; n--) e -= this.groupSizes[n];
    return this._cGroup = t, this._cIndex = e, e;
  }
  insertRules(t, e) {
    if (t >= this.groupSizes.length) {
      const o = this.groupSizes, s = o.length;
      let i = s;
      for (; t >= i; ) if (i <<= 1, i < 0) throw tt(16, `${t}`);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (let c = s; c < i; c++) this.groupSizes[c] = 0;
    }
    let n = this.indexOfGroup(t + 1), r = 0;
    for (let o = 0, s = e.length; o < s; o++) this.tag.insertRule(n, e[o]) && (this.groupSizes[t]++, n++, r++);
    r > 0 && this._cGroup > t && (this._cIndex += r);
  }
  clearGroup(t) {
    if (t < this.length) {
      const e = this.groupSizes[t], n = this.indexOfGroup(t), r = n + e;
      this.groupSizes[t] = 0;
      for (let o = n; o < r; o++) this.tag.deleteRule(n);
      e > 0 && this._cGroup > t && (this._cIndex -= e);
    }
  }
  getGroup(t) {
    let e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    const n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
    for (let s = r; s < o; s++) e += this.tag.getRule(s) + pn;
    return e;
  }
}, Qs = `style[${St}][${Yr}="${Se}"]`, Js = new RegExp(`^${St}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Xn = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, Qe = (t) => {
  if (!t) return document;
  if (Xn(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (Xn(e)) return e;
  }
  return document;
}, ti = (t, e, n) => {
  const r = n.split(",");
  let o;
  for (let s = 0, i = r.length; s < i; s++) (o = r[s]) && t.registerName(e, o);
}, ei = (t, e) => {
  var n;
  const r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(pn), o = [];
  for (let s = 0, i = r.length; s < i; s++) {
    const c = r[s].trim();
    if (!c) continue;
    const u = c.match(Js);
    if (u) {
      const a = 0 | parseInt(u[1], 10), _ = u[2];
      a !== 0 && (As(_, a), ti(t, _, u[3]), t.getTag().insertRules(a, o)), o.length = 0;
    } else o.push(c);
  }
}, Me = (t) => {
  const n = Qe(t.options.target).querySelectorAll(Qs);
  for (let r = 0, o = n.length; r < o; r++) {
    const s = n[r];
    s && s.getAttribute(St) !== Vr && (ei(t, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
let At = !1;
function ni() {
  if (At !== !1) return At;
  if (typeof document < "u") {
    const t = document.head.querySelector('meta[property="csp-nonce"]');
    if (t) return At = t.nonce || t.getAttribute("content") || void 0;
    const e = document.head.querySelector('meta[name="sc-nonce"]');
    if (e) return At = e.getAttribute("content") || void 0;
  }
  return At = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const ro = (t, e) => {
  if (typeof document > "u") throw tt(20);
  const n = document.head, r = t || n, o = document.createElement("style"), s = ((u) => {
    const a = Array.from(u.querySelectorAll(`style[${St}]`));
    return a[a.length - 1];
  })(r), i = s !== void 0 ? s.nextSibling : null;
  o.setAttribute(St, Vr), o.setAttribute(Yr, Se);
  const c = e || ni();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, ri = class {
  constructor(t, e) {
    this.element = ro(t, e), this.element.appendChild(document.createTextNode("")), this.sheet = ((n) => {
      var r;
      if (n.sheet) return n.sheet;
      const o = (r = n.getRootNode().styleSheets) !== null && r !== void 0 ? r : document.styleSheets;
      for (let s = 0, i = o.length; s < i; s++) {
        const c = o[s];
        if (c.ownerNode === n) return c;
      }
      throw tt(17);
    })(this.element), this.length = 0;
  }
  insertRule(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(t) {
    this.sheet.deleteRule(t), this.length--;
  }
  getRule(t) {
    const e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }
}, oi = class {
  constructor(t, e) {
    this.element = ro(t, e), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(t, e) {
    if (t <= this.length && t >= 0) {
      const n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }
  getRule(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }
};
let Kn = Wt;
const si = { isServer: !Wt, useCSSOMInjection: !ks };
class Ee {
  static registerId(e) {
    return Dt(e);
  }
  constructor(e = Et, n = {}, r) {
    this.options = Object.assign(Object.assign({}, si), e), this.gs = n, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(r), this.server = !!e.isServer, !this.server && Wt && Kn && (Kn = !1, Me(this)), yn(this, () => ((o) => {
      const s = o.getTag(), { length: i } = s;
      let c = "";
      for (let u = 0; u < i; u++) {
        const a = Rs(u);
        if (a === void 0) continue;
        const _ = o.names.get(a);
        if (_ === void 0 || !_.size) continue;
        const m = s.getGroup(u);
        if (m.length === 0) continue;
        const l = St + ".g" + u + '[id="' + a + '"]';
        let d = "";
        for (const p of _) p.length > 0 && (d += p + ",");
        c += m + l + '{content:"' + d + '"}' + pn;
      }
      return c;
    })(this));
  }
  rehydrate() {
    !this.server && Wt && Me(this);
  }
  reconstructWithOptions(e, n = !0) {
    const r = new Ee(Object.assign(Object.assign({}, this.options), e), this.gs, n && this.names || void 0);
    return r.keyframeIds = new Set(this.keyframeIds), !this.server && Wt && e.target !== this.options.target && Qe(this.options.target) !== Qe(e.target) && Me(r), r;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ useCSSOMInjection: n, target: r, nonce: o }) => n ? new ri(r, o) : new oi(r, o))(this.options), new Ks(e)));
    var e;
  }
  hasNameForId(e, n) {
    var r, o;
    return (o = (r = this.names.get(e)) === null || r === void 0 ? void 0 : r.has(n)) !== null && o !== void 0 && o;
  }
  registerName(e, n) {
    Dt(e), e.startsWith(qr) && this.keyframeIds.add(e);
    const r = this.names.get(e);
    r ? r.add(n) : this.names.set(e, /* @__PURE__ */ new Set([n]));
  }
  insertRules(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Dt(e), r);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Dt(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const oo = /* @__PURE__ */ new WeakSet(), ii = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function ci(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in ii || t.startsWith("--") ? String(e).trim() : e + "px";
}
const ft = 47;
function Qn(t) {
  if (t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45) return t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    e += r >= 65 && r <= 90 ? "-" + String.fromCharCode(r + 32) : t[n];
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
const so = /* @__PURE__ */ Symbol.for("sc-keyframes");
function ai(t) {
  return typeof t == "object" && t !== null && so in t;
}
function io(t) {
  return Qt(t) && !(t.prototype && t.prototype.isReactComponent);
}
const co = (t) => t == null || t === !1 || t === "", li = /* @__PURE__ */ Symbol.for("react.client.reference");
function Jn(t) {
  return t.$$typeof === li;
}
function ao(t, e) {
  for (const n in t) {
    const r = t[n];
    t.hasOwnProperty(n) && !co(r) && (Array.isArray(r) && oo.has(r) || Qt(r) ? e.push(Qn(n) + ":", r, ";") : Vt(r) ? (e.push(n + " {"), ao(r, e), e.push("}")) : e.push(Qn(n) + ": " + ci(n, r) + ";"));
  }
}
function mt(t, e, n, r, o = []) {
  if (co(t)) return o;
  const s = typeof t;
  if (s === "string") return o.push(t), o;
  if (s === "function") {
    if (Jn(t)) return o;
    if (io(t) && e) {
      const i = t(e);
      return mt(i, e, n, r, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let i = 0; i < t.length; i++) mt(t[i], e, n, r, o);
    return o;
  }
  return no(t) ? (o.push(`.${t.styledComponentId}`), o) : ai(t) ? (n ? (t.inject(n, r), o.push(t.getName(r))) : o.push(t), o) : Jn(t) ? o : Vt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (ao(t, o), o) : (o.push(t.toString()), o);
}
const ui = Kr(Se);
class _i {
  constructor(e, n, r) {
    this.rules = e, this.componentId = n, this.baseHash = pt(ui, n), this.baseStyle = r, Ee.registerId(n);
  }
  generateAndInjectStyles(e, n, r) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    {
      let s = "";
      for (let i = 0; i < this.rules.length; i++) {
        const c = this.rules[i];
        if (typeof c == "string") s += c;
        else if (c) if (io(c)) {
          const u = c(e);
          typeof u == "string" ? s += u : u != null && u !== !1 && (s += Xe(mt(u, e, n, r)));
        } else s += Xe(mt(c, e, n, r));
      }
      if (s) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const i = r.hash ? r.hash + s : s;
        let c = this.dynamicNameCache.get(i);
        if (!c) {
          if (c = gn(pt(pt(this.baseHash, r.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
            const u = this.dynamicNameCache.keys().next().value;
            u !== void 0 && this.dynamicNameCache.delete(u);
          }
          this.dynamicNameCache.set(i, c);
        }
        if (!n.hasNameForId(this.componentId, c)) {
          const u = r(s, "." + c, void 0, this.componentId);
          n.insertRules(this.componentId, c, u);
        }
        o = Ht(o, c);
      }
    }
    return o;
  }
}
const fi = /&/g;
function lo(t, e) {
  let n = 0;
  for (; --e >= 0 && t.charCodeAt(e) === 92; ) n++;
  return !(1 & ~n);
}
function De(t) {
  const e = t.length;
  let n = "", r = 0, o = 0, s = 0, i = !1, c = !1;
  for (let u = 0; u < e; u++) {
    const a = t.charCodeAt(u);
    if (s !== 0 || i || a !== ft || t.charCodeAt(u + 1) !== 42) if (i) a === 42 && t.charCodeAt(u + 1) === ft && (i = !1, u++);
    else if (a !== 34 && a !== 39 || lo(t, u)) {
      if (s === 0) if (a === 123) o++;
      else if (a === 125) {
        if (o--, o < 0) {
          c = !0;
          let _ = u + 1;
          for (; _ < e; ) {
            const m = t.charCodeAt(_);
            if (m === 59 || m === 10) break;
            _++;
          }
          _ < e && t.charCodeAt(_) === 59 && _++, o = 0, u = _ - 1, r = _;
          continue;
        }
        o === 0 && (n += t.substring(r, u + 1), r = u + 1);
      } else a === 59 && o === 0 && (n += t.substring(r, u + 1), r = u + 1);
    } else s === 0 ? s = a : s === a && (s = 0);
    else i = !0, u++;
  }
  return c || o !== 0 || s !== 0 ? (r < e && o === 0 && s === 0 && (n += t.substring(r)), n) : t;
}
function uo(t, e) {
  const n = e + " ", r = "," + n;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (s.type === "rule") {
      s.value = (n + s.value).replaceAll(",", r);
      const i = s.props, c = [];
      for (let u = 0; u < i.length; u++) c[u] = n + i[u];
      s.props = c;
    }
    Array.isArray(s.children) && s.type !== "@keyframes" && uo(s.children, e);
  }
  return t;
}
function _o({ options: t = Et, plugins: e = mn } = Et) {
  let n, r, o;
  const s = (l, d, p) => p.startsWith(r) && p.endsWith(r) && p.replaceAll(r, "").length > 0 ? `.${n}` : l, i = e.slice();
  i.push((l) => {
    l.type === ve && l.value.includes("&") && (o || (o = new RegExp(`\\${r}\\b`, "g")), l.props[0] = l.props[0].replace(fi, r).replace(o, s));
  }), t.prefix && i.push(Ts), i.push(Ns);
  let c = [];
  const u = Is(i.concat(Os((l) => c.push(l)))), a = (l, d = "", p = "", b = "&") => {
    n = b, r = d, o = void 0;
    const $ = (function(h) {
      const x = h.indexOf("//") !== -1, L = h.indexOf("}") !== -1;
      if (!x && !L) return h;
      if (!x) return De(h);
      const E = h.length;
      let O = "", C = 0, w = 0, Z = 0, P = 0, D = 0, Ot = !1;
      for (; w < E; ) {
        const B = h.charCodeAt(w);
        if (B !== 34 && B !== 39 || lo(h, w)) if (Z === 0) if (B === ft && w + 1 < E && h.charCodeAt(w + 1) === 42) {
          for (w += 2; w + 1 < E && (h.charCodeAt(w) !== 42 || h.charCodeAt(w + 1) !== ft); ) w++;
          w += 2;
        } else if (B !== 40) if (B !== 41) if (P > 0) w++;
        else if (B === 42 && w + 1 < E && h.charCodeAt(w + 1) === ft) O += h.substring(C, w), w += 2, C = w, Ot = !0;
        else if (B === ft && w + 1 < E && h.charCodeAt(w + 1) === ft) {
          for (O += h.substring(C, w); w < E && h.charCodeAt(w) !== 10; ) w++;
          C = w, Ot = !0;
        } else B === 123 ? D++ : B === 125 && D--, w++;
        else P > 0 && P--, w++;
        else P++, w++;
        else w++;
        else Z === 0 ? Z = B : Z === B && (Z = 0), w++;
      }
      return Ot ? (C < E && (O += h.substring(C)), D === 0 ? O : De(O)) : D === 0 ? h : De(h);
    })(l);
    let g = Es(p || d ? p + " " + d + " { " + $ + " }" : $);
    return t.namespace && (g = uo(g, t.namespace)), c = [], me(g, u), c;
  }, _ = t;
  let m = Ye;
  for (let l = 0; l < e.length; l++) e[l].name || tt(15), m = pt(m, e[l].name);
  return _?.namespace && (m = pt(m, _.namespace)), _?.prefix && (m = pt(m, "p")), a.hash = m !== Ye ? m.toString() : "", a;
}
const di = new Ee(), Je = _o(), Cn = F.createContext({ shouldForwardProp: void 0, styleSheet: di, stylis: Je, stylisPlugins: void 0 });
Cn.Consumer;
function fo() {
  return F.useContext(Cn);
}
function hi(t) {
  var e;
  const n = fo(), { styleSheet: r } = n, o = F.useMemo(() => {
    let a = r;
    return t.sheet ? a = t.sheet : t.target ? a = a.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (a = a.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, r]), s = F.useMemo(() => {
    var a;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? n.stylis : _o({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (a = t.stylisPlugins) !== null && a !== void 0 ? a : n.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, n.stylis, n.stylisPlugins]), i = "shouldForwardProp" in t ? t.shouldForwardProp : n.shouldForwardProp, c = (e = t.stylisPlugins) !== null && e !== void 0 ? e : n.stylisPlugins, u = F.useMemo(() => ({ shouldForwardProp: i, styleSheet: o, stylis: s, stylisPlugins: c }), [i, o, s, c]);
  return F.createElement(Cn.Provider, { value: u }, t.children);
}
const Yt = F.createContext(void 0);
Yt.Consumer;
function ho() {
  const t = F.useContext(Yt);
  if (!t) throw tt(18);
  return t;
}
function pi(t) {
  const e = F.useContext(Yt), n = F.useMemo(() => (function(r, o) {
    if (!r) throw tt(14);
    if (Qt(r))
      return r(o);
    if (Array.isArray(r) || typeof r != "object") throw tt(8);
    return o ? Object.assign(Object.assign({}, o), r) : r;
  })(t.theme, e), [t.theme, e]);
  return t.children ? F.createElement(Yt.Provider, { value: n }, t.children) : null;
}
const He = {};
function mi(t, e) {
  const n = typeof t != "string" ? "sc" : Xr(t);
  He[n] = (He[n] || 0) + 1;
  const r = n + "-" + Qr(Se + n + He[n]);
  return e ? e + "-" + r : r;
}
function gi(t, e, n) {
  const r = no(t), o = t, s = !qe(t), { attrs: i = mn, componentId: c = mi(e.displayName, e.parentComponentId), displayName: u = Bs(t) } = e, a = e.displayName && e.componentId ? Xr(e.displayName) + "-" + e.componentId : e.componentId || c, _ = r && o.attrs ? o.attrs.concat(i).filter(Boolean) : i;
  let { shouldForwardProp: m } = e;
  if (r && o.shouldForwardProp) {
    const b = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const $ = e.shouldForwardProp;
      m = (g, h) => b(g, h) && $(g, h);
    } else m = b;
  }
  const l = new _i(n, a, r ? o.componentStyle : void 0);
  function d(b, $) {
    return (function(g, h, x) {
      const { attrs: L, componentStyle: E, defaultProps: O, foldedComponentIds: C, styledComponentId: w, target: Z } = g, P = F.useContext(Yt), D = fo(), Ot = g.shouldForwardProp || D.shouldForwardProp, B = Ls(h, P, O) || Et, [Tt, bo] = (function(Q, _t, Oe) {
        const R = Object.assign(Object.assign({}, _t), { className: void 0, theme: Oe });
        let kt = null;
        const ee = Q.length > 1;
        for (let ot = 0; ot < Q.length; ot++) {
          const M = Q[ot], Rt = Qt(M) ? M(ee ? Object.assign({}, R) : R) : M;
          for (const V in Rt) V === "className" ? R.className = Ht(R.className, Rt[V]) : V === "style" ? R.style = Object.assign(Object.assign({}, R.style), Rt[V]) : Rt[V] === void 0 ? V in R && (R[V] !== void 0 && (kt || (kt = [])).push(V), R[V] = void 0) : R[V] = Rt[V];
        }
        return "className" in _t && typeof _t.className == "string" && (R.className = Ht(R.className, _t.className)), [R, kt];
      })(L, h, B), bn = E.generateAndInjectStyles(Tt, D.styleSheet, D.stylis), te = Tt.as || Z, $n = qe(te), Ne = (function(Q, _t, Oe, R, kt, ee) {
        const ot = {};
        for (const M in Q) M[0] === "$" || M === "as" || M === "theme" && Q.theme === Oe || (M === "forwardedAs" ? Q.forwardedAs !== void 0 && (ot.as = Q.forwardedAs) : Q[M] === void 0 ? M === "className" || kt || ee !== null && ee.indexOf(M) !== -1 || R && !R(M, _t) || (ot[M] = void 0) : R && !R(M, _t) || (ot[M] = Q[M]));
        return ot;
      })(Tt, te, B, Ot, $n, bo);
      let Ie = Ht(C, w);
      return bn && (Ie += " " + bn), Tt.className && (Ie += " " + Tt.className), Ne[$n && te.includes("-") ? "class" : "className"] = Ie, x && (Ne.ref = x), H(te, Ne);
    })(p, b, $);
  }
  d.displayName = u;
  let p = F.forwardRef(d);
  return p.attrs = _, p.componentStyle = l, p.displayName = u, p.shouldForwardProp = m, p.foldedComponentIds = r ? Ht(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = a, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(b) {
    this._foldedDefaultProps = r ? (function($, ...g) {
      for (const h of g) Ke($, h, !0);
      return $;
    })({}, o.defaultProps, b) : b;
  } }), yn(p, () => `.${p.styledComponentId}`), s && eo(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
var yi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function tr(t, e) {
  const n = [t[0]];
  for (let r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
const er = (t) => (oo.add(t), t);
function vn(t, ...e) {
  if (Qt(t) || Vt(t)) return er(mt(tr(mn, [t, ...e])));
  const n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? mt(n) : er(mt(tr(n, e)));
}
function tn(t, e, n = Et) {
  if (!e) throw tt(1, e);
  const r = (o, ...s) => t(e, n, vn(o, ...s));
  return r.attrs = (o) => tn(t, e, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), r.withConfig = (o) => tn(t, e, Object.assign(Object.assign({}, n), o)), r;
}
const po = (t) => tn(gi, t), G = po;
yi.forEach((t) => {
  G[t] = po(t);
});
var mo;
class Ci {
  constructor(e, n) {
    this[mo] = !0, this.inject = (r, o = Je) => {
      const s = this.getName(o);
      if (!r.hasNameForId(this.id, s)) {
        const i = o(this.rules, s, "@keyframes");
        r.insertRules(this.id, s, i);
      }
    }, this.name = e, this.id = qr + e, this.rules = n, Dt(this.id), yn(this, () => {
      throw tt(12, String(this.name));
    });
  }
  getName(e = Je) {
    return e.hash ? this.name + gn(+e.hash >>> 0) : this.name;
  }
}
function xe(t, ...e) {
  const n = Xe(vn(t, ...e)), r = Qr(n);
  return new Ci(r, n);
}
mo = so;
const zt = vr(void 0);
zt.displayName = "ConfigurationContext";
function Jt() {
  const t = un(zt);
  if (!t)
    throw new Error(
      `${zt.displayName} must be used within a ${zt.displayName} Provider`
    );
  return t;
}
function vi({
  children: t,
  configuration: e,
  videoElementSize: n
}) {
  const r = Kt(() => ({ ...e, videoElementSize: n }), [e, n]);
  return /* @__PURE__ */ f(zt.Provider, { value: r, children: t });
}
const en = {
  LEFT: "left",
  RIGHT: "right"
}, nr = 0.24, bi = 24, $i = 2, go = 14, wi = 0.0276;
var nt = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(nt || {});
const Bt = {
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
}, Be = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Si = "rgba(19, 19, 19, 0.5)", Ei = 34, xi = {
  [W.CANDIDATE_SELECTION]: "Hold still…",
  [W.PALM_CENTERING]: "Center your palm",
  [W.PALM_NOT_PRESENT]: "Position your palm",
  [W.PALM_TOO_FAR]: "Move closer",
  [W.SHARPNESS_TOO_LOW]: "More light needed",
  [W.BRIGHTNESS_TOO_LOW]: "More light needed",
  [W.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [W.DEVICE_PITCHED]: "Hold your phone at eye level",
  [W.PALM_TOO_CLOSE]: "Move back",
  [W.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW]: "More light needed"
}, Ni = en.LEFT;
function rr(t, e) {
  return Math.max(e, e + (t - 400) * wi + 2);
}
const Ii = (t, e = go) => t ? t.width < t.height ? rr(t.width, e) : rr(t.height, e) : e, Oi = (t) => t > nt.Default ? Bt[nt.Default] : t > nt.L ? Bt[nt.L] : t > nt.M ? Bt[nt.M] : Bt[nt.S], Ti = (t) => t ? Oi(t.width) : Bt[nt.Default];
function ki() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const n = document.createElement("link");
    n.href = t, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ri(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ai = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Li = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: go
}, Lt = {
  colors: Ai,
  font: Li
}, Pi = (t) => t ? {
  ...Lt,
  ...t,
  colors: {
    ...Lt.colors,
    ...t.colors
  },
  font: {
    ...Lt.font,
    ...t.font,
    family: Ri(t.font?.family, Lt.font.family)
  }
} : Lt, Mi = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: Ii(e, t.font.minimumSize)
  }
}), Di = ({ svgSize: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Hi = G.div`
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
`, Bi = G.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, ji = G.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, _e = ({ Icon: t, isCameraReady: e, position: n = "absolute", text: r }) => {
  const { font: o } = ho();
  return /* @__PURE__ */ f(Hi, { $isCameraReady: e, $position: n, children: /* @__PURE__ */ f(Bi, { children: [
    t ? /* @__PURE__ */ f(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ f(ji, { children: r })
  ] }) });
}, yo = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ f(_e, { Icon: Di, position: "relative", text: t });
class Fi extends X {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0 };
  }
  componentDidCatch(e, n) {
    console.error(e, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ f(yo, {}) : this.props.children;
  }
}
const Ui = G.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Gi({
  children: t,
  uiConfiguration: e,
  videoElementSize: n
}) {
  ut(() => {
    ki();
  }, []);
  const r = Mi(e.styling.theme, n);
  return /* @__PURE__ */ f(hi, { target: e.styleTarget, children: /* @__PURE__ */ f(pi, { theme: r, children: /* @__PURE__ */ f(Ui, { children: /* @__PURE__ */ f(Fi, { children: /* @__PURE__ */ f(vi, { configuration: e, videoElementSize: n, children: t }) }) }) }) });
}
const Wi = 0.85, zi = "dot-auto-capture-video";
function bt(t, e) {
  const n = ye(e);
  ut(() => {
    n.current = e;
  }, [e]), ut(
    () => {
      if (!t)
        return;
      const r = (o) => n.current(o);
      return document.addEventListener(t, r), () => {
        document.removeEventListener(t, r);
      };
    },
    [t]
    // Re-run if eventName
  );
}
function Zi(t) {
  const [e, n] = q(), r = ht(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return bt(t, r), Nt(() => {
    if (!e) {
      const o = document.getElementById(zi);
      o && n(o.getBoundingClientRect());
    }
  }, [e, n]), e;
}
const Co = (t, e) => Math.min(t, e), Vi = ({ height: t, width: e }, n) => {
  const r = Co(e, t) * n, o = (e - r) / 2, s = (t - r) / 2;
  return {
    shiftX: o,
    shiftY: s,
    width: r,
    height: r
  };
}, Yi = (t, e) => {
  const { height: n, shiftX: r, shiftY: o, width: s } = Vi(t, e);
  return {
    shiftX: r / t.width,
    shiftY: o / t.height,
    width: s / t.width,
    height: n / t.height
  };
}, qi = (t) => Yi(t, Wi), Xi = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, or = (t, e) => {
  Xi(t, {
    instruction: e
  });
};
async function Ki() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Qi() {
  return (await Ki()).filter((e) => e.kind === "videoinput");
}
const Ji = () => {
  const [t, e] = q(!1);
  return ut(() => {
    (async () => (await Qi()).length > 1 && e(!0))();
  }, []), t;
}, tc = ({ size: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ec = ({ size: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), vo = G.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, nc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ f(vo, { $marginLeft: t, ...n, children: /* @__PURE__ */ f(tc, { size: e }) }), rc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ f(vo, { $marginLeft: t, ...n, children: /* @__PURE__ */ f(ec, { size: e }) }), oc = G.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, sc = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Jt(), o = Ji();
  if (!n)
    return null;
  const { buttonPadding: s, iconSize: i, marginLeft: c } = Ti(r);
  return /* @__PURE__ */ f(oc, { $padding: s, children: [
    o && /* @__PURE__ */ f(rc, { disabled: e, onClick: () => {
      or(t, Nn.SWITCH_CAMERA);
    }, size: i }),
    /* @__PURE__ */ f(
      nc,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          or(t, Nn.TOGGLE_MIRROR);
        },
        size: i
      }
    )
  ] });
}, ic = "2.5s", cc = "0.3s", ac = "linear", lc = xe`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
xe`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
xe`
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
xe`
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
const uc = G.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && vn`
      animation: ${lc} ${cc}
        ${ac} both;
      animation-delay: ${ic};

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

  transform: translateY(
    ${(t) => t.$cssTop || t.$isPortrait ? "-50%" : t.$isPortrait ? "" : "50%"}
  );
  z-index: 2;
`, _c = G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  width: max-content;
  max-width: 90%;
  background: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.instructionColorSuccess}` : `${t.theme.colors.instructionColor}`};
  color: ${(t) => t.theme.colors.instructionTextColor};
  border: 0;
  line-height: 1em;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  white-space: ${(t) => t.$wrap ? "break-spaces" : "nowrap"};
`, fc = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: s
}) => /* @__PURE__ */ f(uc, { $cssBottom: e, $cssTop: n, $isAnimating: r, $isPortrait: s, children: /* @__PURE__ */ f(
  _c,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > Ei,
    children: t
  }
) }), dc = G.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function hc(t) {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
const jt = (t, e) => Math.hypot(e.x - t.x, e.y - t.y), sr = (t, e, n) => {
  const r = (e.x - t.x) * n, o = (e.y - t.y) * n;
  return {
    x: t.x + r,
    y: t.y + o
  };
}, ir = (t, e, n, r) => {
  const o = jt(t, e);
  return n * r / o;
}, pc = (t) => {
  const { bottomLeft: e, bottomRight: n, topLeft: r, topRight: o } = t, s = jt(r, o), i = jt(o, n), c = jt(e, n), u = jt(r, e);
  return Math.min(s, i, c, u);
};
function mc({ cameraResolution: t, isImageMirror: e }) {
  const n = ye(null), r = ho(), [o, s] = q(), i = ht(
    (c) => {
      s(c?.detail?.detectedObject);
    },
    [s]
  );
  return bt(Sr.DETECTION_CHANGED, i), bt(dt.DETECTION_CHANGED, i), ut(() => {
    if (!n.current)
      return;
    const c = (a, _, m, l) => {
      const d = ir(
        _,
        a,
        l,
        nr
      ), p = ir(
        _,
        m,
        l,
        nr
      ), b = sr(_, a, d), $ = sr(_, m, p), g = n?.current?.getContext("2d");
      g && (g.beginPath(), g.lineWidth = $i, g.strokeStyle = r.colors.placeholderColor, g.moveTo(b.x, b.y), g.arcTo(_.x, _.y, $.x, $.y, bi), g.lineTo($.x, $.y), g.stroke());
    }, u = (a) => {
      if (!a)
        return;
      const { bottomLeft: _, bottomRight: m, topLeft: l, topRight: d } = a, p = pc(a);
      c(_, l, d, p), c(l, d, m, p), c(d, m, _, p), c(m, _, l, p);
    };
    n.current.width = t.width, n.current.height = t.height, hc(n.current), u(o);
  }, [t, o, r.colors.placeholderColor]), /* @__PURE__ */ f(dc, { ref: n, $isImageMirror: e });
}
const gc = G.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, cr = ({ svgSize: t }) => /* @__PURE__ */ f(gc, { children: /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), yc = G.div`
  z-index: 1;
  position: absolute;
  // Scale up the backdrop to have space when placeholder is scaled below 1
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  outline: ${({ $backdropColor: t, $shorterSide: e = 1e3 }) => `${e * 0.2}px solid ${t}`};
  transform: scale(${(t) => t.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // Scale the children to 50% of the size of the backdrop to achieve 1:1 ratio between placeholder and backdrop
  g {
    transform: scale(0.5);
    translate: 25% 25%;
  }
`, Cc = ({ children: t, height: e, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Jt(), s = Co(r, e);
  return /* @__PURE__ */ f(yc, { $backdropColor: o, $scale: n, $shorterSide: s, children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ f("g", { children: t })
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function vc({ cameraHeight: t, cameraWidth: e, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Jt(), s = r === j.ERROR || r === j.RUNNING;
  return !r || s || !o?.[r]?.visible ? null : r === j.WAITING || r === j.COMPLETE ? /* @__PURE__ */ f(U, { children: [
    n && t && e && /* @__PURE__ */ f(Cc, { height: t, width: e }),
    /* @__PURE__ */ f(_e, { isCameraReady: !0, text: o[j.WAITING].text })
  ] }) : r === j.BLURRED ? /* @__PURE__ */ f(U, { children: /* @__PURE__ */ f(_e, { Icon: cr, isCameraReady: !0, text: o[j.BLURRED].text }) }) : /* @__PURE__ */ f(_e, { Icon: cr, isCameraReady: !0, text: o[j.LOADING].text });
}
function bc() {
  return /* @__PURE__ */ f(
    "svg",
    {
      fill: "none",
      id: "Layer_1",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4px",
      viewBox: "0 0 300 253.48",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ f("path", { className: "cls-1", d: "M179.22,114.86c-5.07-.21-41.51-1.07-66.97,27.84-17.94,20.37-19.97,43.63-20.32,51.17" }),
        /* @__PURE__ */ f("path", { className: "cls-1", d: "M128.06,110.56c-11.36,2.45-25.72,4.46-42.32,4.23-11.24-.16-21.3-1.31-29.91-2.82" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "203.51", x2: "203.51", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "154.7", x2: "154.7", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "106.01", x2: "106.01", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "58.08", x2: "58.08", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f(
          "path",
          {
            className: "cls-1",
            d: "M286.73,114.94c3.95-3.75,6.41-9.05,6.41-14.92,0-11.36-9.21-20.56-20.56-20.56-2.84,0-5.54.58-8,1.62"
          }
        ),
        /* @__PURE__ */ f("polyline", { className: "cls-1", points: "203.51 113.13 261.92 82.44 264.57 81.08" }),
        /* @__PURE__ */ f(
          "path",
          {
            className: "cls-1",
            d: "M289.01,112.55l-3.31,3.31-33.68,33.68c-.57.73-1.44,1.84-2.47,3.19-12.6,16.55-19.33,29.31-23.35,36.07-3.96,6.65-12.58,21.1-27.6,32.97-21.04,16.62-48.91,23.63-64.22,21.28-1.73-.27-7.53-1.3-15.53-1.34-9.01-.05-15.46,1.23-17.64,1.53-18.31,2.56-40.72-12.22-44.86-14.95-24.73-16.31-34.26-39.92-37.95-49.46-5.51-14.21-6.05-33.85-7.28-49.84,0,0-.33-4.22-.57-8.69-1.72-31.65-.45-82.64-.1-110.1"
          }
        )
      ]
    }
  );
}
function $c() {
  return /* @__PURE__ */ f(
    "svg",
    {
      fill: "none",
      id: "Layer_1",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4px",
      viewBox: "0 0 300 253.48",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ f("path", { className: "cls-1", d: "M120.78,114.86c5.07-.21,41.51-1.07,66.97,27.84,17.94,20.37,19.97,43.63,20.32,51.17" }),
        /* @__PURE__ */ f("path", { className: "cls-1", d: "M171.94,110.56c11.36,2.45,25.72,4.46,42.32,4.23,11.24-.16,21.3-1.31,29.91-2.82" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "96.49", x2: "96.49", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "145.3", x2: "145.3", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "193.99", x2: "193.99", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f("line", { className: "cls-1", x1: "241.92", x2: "241.92", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ f(
          "path",
          {
            className: "cls-1",
            d: "M13.27,114.94c-3.95-3.75-6.41-9.05-6.41-14.92,0-11.36,9.21-20.56,20.56-20.56,2.84,0,5.54.58,8,1.62"
          }
        ),
        /* @__PURE__ */ f("polyline", { className: "cls-1", points: "96.49 113.13 38.08 82.44 35.43 81.08" }),
        /* @__PURE__ */ f(
          "path",
          {
            className: "cls-1",
            d: "M10.99,112.55l3.31,3.31,33.68,33.68c.57.73,1.44,1.84,2.47,3.19,12.6,16.55,19.33,29.31,23.35,36.07,3.96,6.65,12.58,21.1,27.6,32.97,21.04,16.62,48.91,23.63,64.22,21.28,1.73-.27,7.53-1.3,15.53-1.34,9.01-.05,15.46,1.23,17.64,1.53,18.31,2.56,40.72-12.22,44.86-14.95,24.73-16.31,34.26-39.92,37.95-49.46,5.51-14.21,6.05-33.85,7.28-49.84,0,0,.33-4.22.57-8.69,1.72-31.65.45-82.64.1-110.1"
          }
        )
      ]
    }
  );
}
const wc = G.div`
  z-index: 1;
  position: absolute;
  top: ${(t) => t.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(t) => (1 - t.$placeholderRectangle.shiftY - t.$placeholderRectangle.height) * 100}%;
  left: ${(t) => t.$placeholderRectangle.shiftX * 100}%;
  right: ${(t) => (1 - t.$placeholderRectangle.shiftX - t.$placeholderRectangle.width) * 100}%;
  color: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.placeholderColorSuccess}` : `${t.theme.colors.placeholderColor}`};
  transform: scale(${(t) => t.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  svg {
    width: 100%;
    height: 100%;
  }
`, Sc = ({
  children: t,
  className: e,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: s
}) => /* @__PURE__ */ f(
  wc,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: s,
    className: e,
    onAnimationEnd: r,
    children: t
  }
), Ec = {
  [en.LEFT]: /* @__PURE__ */ f(bc, {}),
  [en.RIGHT]: /* @__PURE__ */ f($c, {})
};
function xc({ placeholderRectangle: t, ...e }) {
  const { placeholder: n } = Jt();
  return /* @__PURE__ */ f(Sc, { placeholderRectangle: t, ...e, children: Ec[n] });
}
function Nc() {
  const [t, e] = q(), [n, r] = q(!1), o = ht(
    (d) => {
      e(d?.detail?.cameraResolution);
      const p = d?.detail?.isMirroring;
      p !== void 0 && r(p);
    },
    [e]
  );
  bt(dt.CAMERA_PROPS_CHANGED, o);
  const [s, i] = q({
    code: W.PALM_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = ht(
    (d) => {
      i({
        code: d?.detail?.instructionCode,
        isEscalated: d?.detail?.isEscalated ?? !1
      });
    },
    [i]
  );
  bt(dt.INSTRUCTION_CHANGED, c);
  const [u, a] = q(j.LOADING), [_, m] = q(), l = ht(
    (d) => {
      a(d.detail?.appState);
      const p = d?.detail?.error;
      p && m(p);
    },
    [a, m]
  );
  return bt(dt.STATE_CHANGED, l), {
    cameraResolution: t,
    instruction: s,
    isMirroring: n,
    appState: u,
    error: _
  };
}
function Ic() {
  const { appState: t, cameraResolution: e, error: n, instruction: r, isMirroring: o } = Nc(), s = r.code === W.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: i },
    instructions: c
  } = Jt();
  return t === j.ERROR ? /* @__PURE__ */ f(yo, { text: n?.message }) : t === j.RUNNING && e ? /* @__PURE__ */ f(U, { children: [
    i && /* @__PURE__ */ f(mc, { cameraResolution: e, isImageMirror: o }),
    /* @__PURE__ */ f(
      xc,
      {
        isInCandidateSelection: s,
        placeholderRectangle: qi(e)
      }
    ),
    r.code && /* @__PURE__ */ f(fc, { cssTop: 50, isInCandidateSelection: s, children: c[r.code] }),
    /* @__PURE__ */ f(sc, { customControlEvent: dt.CONTROL, isSwitchCameraDisabled: s })
  ] }) : /* @__PURE__ */ f(vc, { cameraHeight: e?.height, cameraWidth: e?.width, state: t });
}
function Oc(t) {
  const e = { ...xi, ...t?.instructions }, n = {
    [j.LOADING]: {
      ...Be.loading,
      ...t?.appStateInstructions?.loading
    },
    [j.WAITING]: {
      ...Be.waiting,
      ...t?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [j.BLURRED]: {
      ...Be.loading,
      ...t?.appStateInstructions?.loading
    }
  }, r = Pi(t?.styling?.theme), o = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? Si,
    theme: r
  }, s = {
    showDetectionLayer: t?.control?.showDetectionLayer ?? !1,
    showCameraButtons: t?.control?.showCameraButtons ?? !1
  }, i = t?.placeholder ?? Ni;
  return {
    ...t,
    instructions: e,
    appStateInstructions: n,
    placeholder: i,
    styling: o,
    control: s
  };
}
function Tc({ configuration: t }) {
  const e = Zi(dt.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Gi, { uiConfiguration: Oc(t), videoElementSize: e, children: /* @__PURE__ */ f(Ic, {}) });
}
ko(Tc, "x-dot-palm-capture-ui", ["configuration"]);
